# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Git v2.49.0](https://lore.kernel.org/lkml/xmqqfrjfilc8.fsf@gitster.g/) - A significant feature update including faster packing and Rust foreign language interface enhancements. [Comments](https://lobste.rs/s/x8lt3u/git_v2_49_0)

* [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A startup's ambitious claim about revolutionizing GPUs with RISC-V. [Comments](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/) - A government-sponsored alternative to Notion or similar platforms. [Comments](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes)

* [Open-UI: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui) - A pivotal effort to streamline UI development across platforms. [Comments](https://lobste.rs/s/ypn2zo/open_ui_maintain_open_standard_for_ui)

* [Big LLMs weights are a piece of history](https://antirez.com/news/147) - Reflecting on the historical importance and developments in large language models. [Comments](https://news.ycombinator.com/item?id=43378401)

## Hacking, Privacy, and Security

* [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/) - A cautionary tale on the risks of malicious actors manipulating repositories. [Comments](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added)

* [Cybersecurity Alert Warns of 300 Attacks with 'Medusa' Ransomware](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Need-to-know information on the ongoing threat from ransomware attacks. [Comments](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - A real-world example of vulnerabilities being exploited in key sectors. [Comments](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)

## Science and Space

* [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating moon-based perspective during a significant celestial event. [Comments](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - An astronomical breakthrough confirming long-theorized stellar objects. [Comments](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)

## Ethics and Environment

* [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial trade-off in the name of climate awareness. [Comments](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Urgent environmental data with far-reaching implications. [Comments](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-03-16, 18:45:13](https://lobste.rs/s/x8lt3u/git_v2_49_0) - [Git v2.49.0](https://lore.kernel.org/lkml/xmqqfrjfilc8.fsf@gitster.g/)
* [2025-03-16, 18:39:00](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Meta Blocks Whistleblower's Book Promotion, It Becomes an Amazon Bestseller](https://tech.slashdot.org/story/25/03/16/1836242/after-meta-blocks-whistleblowers-book-promotion-it-becomes-an-amazon-bestseller?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 18:19:10](https://lobste.rs/s/ufoeyy/frontside_effection_structured) - [Frontside, Effection, and Structured Concurrency](https://www.youtube.com/watch?v=vpedn6HkP7E)
* [2025-03-16, 18:11:11](https://news.ycombinator.com/item?id=43380930) - [Our Interfaces Have Lost Their Senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 17:55:42](https://news.ycombinator.com/item?id=43380833) - [Teach, Don't Tell (2013)](https://stevelosh.com/blog/2013/09/teach-dont-tell/)
* [2025-03-16, 17:52:28](https://lobste.rs/s/9tprnf/hidden_superpowers_linear_types_2024) - [The hidden superpowers of linear types (2024)](https://www.youtube.com/watch?v=Ab8WQ1wwhV8)
* [2025-03-16, 17:28:55](https://news.ycombinator.com/item?id=43380649) - [Amiga 600: From the Amiga No One Wanted to Retro Favorite](https://dfarq.homeip.net/amiga-600-the-amiga-no-one-wanted/)
* [2025-03-16, 17:28:08](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial) - [What’s the best git tutorial?](https://lobste.rs/s/wsw3ue/what_s_best_git_tutorial)
* [2025-03-16, 17:27:24](https://news.ycombinator.com/item?id=43380643) - [Abuse of power at Germany's elite research institution [video]](https://www.dw.com/en/max-planck-institute-abuse-of-power-elite-scientists-germany-v2/video-71904207)
* [2025-03-16, 17:23:33](https://news.ycombinator.com/item?id=43380617) - [\"Wait, not like that\": Free and open access in the age of generative AI](https://www.citationneeded.news/free-and-open-access-in-the-age-of-generative-ai/)
* [2025-03-16, 17:00:53](https://news.ycombinator.com/item?id=43380440) - [Meticulous (YC S21) is hiring to eliminate E2E UI tests](https://news.ycombinator.com/item?id=43380440)
* [2025-03-16, 16:34:00](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Startup Claims Its Upcoming (RISC-V ISA) Zeus GPU is 10X Faster Than Nvidia's RTX 5090](https://hardware.slashdot.org/story/25/03/16/0221248/startup-claims-its-upcoming-risc-v-isa-zeus-gpu-is-10x-faster-than-nvidias-rtx-5090?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 15:39:42](https://lobste.rs/s/ypn2zo/open_ui_maintain_open_standard_for_ui) - [open-ui: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui)
* [2025-03-16, 15:34:00](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Codon Python Compiler Gets Faster - and Changes to Apache 2 License](https://developers.slashdot.org/story/25/03/16/003225/codon-python-compiler-gets-faster---and-changes-to-apache-2-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 15:26:26](https://lobste.rs/s/corpgn/exploration_sbcl_internals) - [Exploration of SBCL Internals](https://simonsafar.com/2020/sbcl/)
* [2025-03-16, 15:15:57](https://lobste.rs/s/kaffqk/grove_bidirectionally_typed) - [Grove: A Bidirectionally typed collaborative structure editor calculus](https://www.youtube.com/live/Jff0pIbj8PM?t=7267)
* [2025-03-16, 15:03:12](https://lobste.rs/s/kj6fts/our_interfaces_have_lost_their_senses) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 14:34:00](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cybersecurity Alert Warns of 300 Attacks with 'Medusa' Ransomware ](https://yro.slashdot.org/story/25/03/15/2055230/cybersecurity-alert-warns-of-300-attacks-with-medusa-ransomware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 13:27:05](https://news.ycombinator.com/item?id=43378900) - [Comet open source remote KVM from GL-iNet](https://www.gl-inet.com/products/gl-rm1/)
* [2025-03-16, 13:17:17](https://news.ycombinator.com/item?id=43378822) - [Sketch-of-Thought: Efficient LLM Reasoning](https://arxiv.org/abs/2503.05179)
* [2025-03-16, 13:05:02](https://lobste.rs/s/z3ifdc/long_evening_with_ios_macos_sandbox_2018) - [A long evening with iOS and macOS Sandbox (2018)](https://web.archive.org/web/20220313072719/https://geosn0w.github.io/A-Long-Evening-With-macOS's-Sandbox/)
* [2025-03-16, 12:25:03](https://news.ycombinator.com/item?id=43378470) - [The Five-Week Solo Startup](https://taylor.town/5w)
* [2025-03-16, 12:13:24](https://news.ycombinator.com/item?id=43378401) - [Big LLMs weights are a piece of history](https://antirez.com/news/147)
* [2025-03-16, 12:01:10](https://news.ycombinator.com/item?id=43378330) - [Raytracing on Intel's Arc B580 – By Chester Lam](https://chipsandcheese.com/p/raytracing-on-intels-arc-b580)
* [2025-03-16, 11:45:13](https://news.ycombinator.com/item?id=43378266) - [zlib-ng: zlib replacement with optimizations for \"next generation\" systems](https://github.com/zlib-ng/zlib-ng)
* [2025-03-16, 11:40:27](https://lobste.rs/s/zhaa9h/context_switching_performance_what) - [Context Switching and Performance: What Every Developer Should Know](https://blog.codingconfessions.com/p/context-switching-and-performance)
* [2025-03-16, 11:38:52](https://news.ycombinator.com/item?id=43378239) - [Docs – Open source alternative to Notion or Outline](https://github.com/suitenumerique/docs)
* [2025-03-16, 11:34:00](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 11:20:44](https://news.ycombinator.com/item?id=43378157) - [A powerful free and open source WAF – UUSEC WAF](https://github.com/Safe3/uuWAF)
* [2025-03-16, 11:09:25](https://lobste.rs/s/fahcnf/dynamically_scoped_functions_as_essence) - [Dynamically Scoped Functions as the Essence of AOP (2003)](https://citeseerx.ist.psu.edu/document?doi=8914f753f0965810c0a75df2d34a637a176ea20b)
* [2025-03-16, 11:05:42](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust) - [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)
* [2025-03-16, 10:29:01](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added) - [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)
* [2025-03-16, 10:28:16](https://news.ycombinator.com/item?id=43377985) - [The British Nationality Act as a Prolog Program (1986) [pdf]](https://www.doc.ic.ac.uk/~rak/papers/British%20Nationality%20Act.pdf)
* [2025-03-16, 09:50:14](https://news.ycombinator.com/item?id=43377867) - [Implications of Global Privacy Control](https://developer.mozilla.org/en-US/blog/global-privacy-control/)
* [2025-03-16, 08:48:09](https://news.ycombinator.com/item?id=43377690) - [Show HN: My high school team’s space probe](https://drive.google.com/file/d/1_9V6lBTIfDsPdKCohQBc5Ed5UzDbnsrI/view?usp=sharing)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 07:34:00](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:54:01](https://lobste.rs/s/bo3w9v/adding_edit_button_my_static_site_on) - [Adding an edit button to my static site on mobile](https://jamesg.blog/2025/03/15/adding-an-edit-button-to-my-static-site-on-mobile)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:44](https://lobste.rs/s/pxeoiw/adafruit_fruitjam_is_mac_384k) - [AdaFruit FruitJam is a Mac 384K](https://youtu.be/FAl7iO2R6W4)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-16, 03:37:47](https://news.ycombinator.com/item?id=43376793) - [Peru's Great Urban Experiment (2023)](https://archaeology.org/issues/may-june-2023/features/peru-chimu-chan-chan/)
* [2025-03-16, 03:34:00](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: Where Are the Open-Source Local-Only AI Solutions?](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 02:31:38](https://lobste.rs/s/rzgqt3/more_pro_for_dec_professional_380) - [More pro for the DEC Professional 380 (featuring PRO/VENIX)](https://oldvcr.blogspot.com/2025/03/more-pro-for-dec-professional-380.html)
* [2025-03-16, 01:34:00](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 00:07:03](https://news.ycombinator.com/item?id=43376033) - [Apple's long-lost hidden recovery partition from 1994 has been found](https://www.downtowndougbrown.com/2025/03/apples-long-lost-hidden-recovery-partition-from-1994-has-been-found/)
* [2025-03-15, 23:53:52](https://lobste.rs/s/9lj3ri/year_picotron_desktop) - [The Year of the Picotron Desktop](https://arnaught.neocities.org/blog/2025/03/14/year-of-the-picotron-desktop)
* [2025-03-15, 23:48:00](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloudflare Accused of Blocking Niche Browsers](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 23:12:08](https://news.ycombinator.com/item?id=43375780) - [ESP32 WiFi Superstitions](https://supakeen.com/weblog/esp32-wifi-superstitions/)
* [2025-03-15, 21:48:00](https://news.slashdot.org/story/25/03/15/056253/340-european-cities-restrict-usage-of-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [340 European Cities Restrict Usage of Cars](https://news.slashdot.org/story/25/03/15/056253/340-european-cities-restrict-usage-of-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 21:42:31](https://lobste.rs/s/nvsmjg/is_cap_n_proto_event_loop_friendly) - [Is Cap'n Proto Event Loop Friendly?](https://hire.jonasgalvez.com.br/2025/mar/15/capnproto/)
* [2025-03-15, 20:34:00](https://science.slashdot.org/story/25/03/15/1947252/elon-musk-says-spacexs-first-mission-to-mars-will-launch-next-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Elon Musk Says SpaceX's First Mission to Mars Will Launch Next Year](https://science.slashdot.org/story/25/03/15/1947252/elon-musk-says-spacexs-first-mission-to-mars-will-launch-next-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 19:34:50](https://lobste.rs/s/v80mya/my_favorite_firefox_extensions) - [My Favorite Firefox Extensions](https://alexn.org/blog/2025/03/15/firefox-extensions/)
* [2025-03-15, 19:34:00](https://science.slashdot.org/story/25/03/15/1923253/is-our-universe-trapped-inside-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Our Universe Trapped Inside a Black Hole?](https://science.slashdot.org/story/25/03/15/1923253/is-our-universe-trapped-inside-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 18:34:00](https://tech.slashdot.org/story/25/03/15/0546205/last-year-waymos-autonomous-vehicles-got-589-parking-tickets-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Last Year Waymo's Autonomous Vehicles Got 589 Parking Tickets in San Francisco](https://tech.slashdot.org/story/25/03/15/0546205/last-year-waymos-autonomous-vehicles-got-589-parking-tickets-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 18:26:57](https://lobste.rs/s/w1lhln/comparing_video_encoders) - [Comparing Video Encoders](https://giannirosato.com/blog/post/comparing-encoders/)
* [2025-03-15, 18:22:15](https://news.ycombinator.com/item?id=43374278) - [That Time I Recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/)
* [2025-03-15, 17:34:00](https://yro.slashdot.org/story/25/03/15/0351230/climatologist-michael-mann-finally-won-a-1m-defamation-suit---but-then-a-judge-threw-it-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Climatologist Michael Mann Finally Won a $1M Defamation Suit - But Then a Judge Threw It Out](https://yro.slashdot.org/story/25/03/15/0351230/climatologist-michael-mann-finally-won-a-1m-defamation-suit---but-then-a-judge-threw-it-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 16:34:00](https://hardware.slashdot.org/story/25/03/15/1616223/10-million-cubans-suffer-nationwide-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [10 Million Cubans Suffer Nationwide Power Outage](https://hardware.slashdot.org/story/25/03/15/1616223/10-million-cubans-suffer-nationwide-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 15:08:40](https://lobste.rs/s/cclrkn/were_multiple_return_values_go_s_biggest) - [Were multiple return values Go's biggest mistake?](https://herecomesthemoon.net/2025/03/multiple-return-values-in-go/)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 03:21:02](https://lobste.rs/s/4ko499/popular_github_action_tj_actions_changed) - [Popular GitHub Action tj-actions/changed-files is compromised](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 19:12:12](https://news.ycombinator.com/item?id=43366124) - [Edgar Allan Poe's life was a mess. But his work was in his command](https://www.washingtonpost.com/books/2025/03/13/edgar-allan-poe-biography-kopley-review/)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 13:53:10](https://news.ycombinator.com/item?id=43362667) - [High-performance computing, with much less code](https://news.mit.edu/2025/high-performance-computing-with-much-less-code-0313)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 07:02:06](https://news.ycombinator.com/item?id=43360249) - [Command A: Max performance, minimal compute – 256k context window](https://cohere.com/blog/command-a)
* [2025-03-14, 05:39:43](https://news.ycombinator.com/item?id=43359905) - [A Princely Ploy: Inside the Ruse of a French-Armenian Scammer](https://publicdomainreview.org/essay/a-princely-ploy/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 14:49:06](https://news.ycombinator.com/item?id=43353947) - [Did the Particle Go Through the Two Slits, or Did the Wave Function?](https://profmattstrassler.com/2025/03/13/did-the-particle-go-through-the-two-slits-or-did-the-wave-function/)
* [2025-03-13, 14:46:31](https://news.ycombinator.com/item?id=43353925) - [City simulator I made in Scratch](https://scratch.mit.edu/projects/1061728417/)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 12:10:19](https://news.ycombinator.com/item?id=43352466) - [Hours in a Hurricane, on a Race with No Course](https://www.nytimes.com/2025/03/12/magazine/adventure-race-hurricane.html)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-13, 02:48:31](https://news.ycombinator.com/item?id=43349940) - [Toni Morrison's Lost Play](https://www.vulture.com/article/toni-morrison-play-dreaming-emmett-influenced-beloved.html)
* [2025-03-13, 00:44:58](https://news.ycombinator.com/item?id=43349296) - [Lego says it wants to start to bring video game development in-house](https://www.videogameschronicle.com/news/lego-is-starting-to-bring-its-game-development-in-house-key-exec-says/)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
