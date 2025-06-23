# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Updates and Discoveries

* [A new JavaScript-inspired package manager for Rust](https://github.com/realchonk/bsget) ([comments](https://lobste.rs/s/vzymza/new_javascript_inspired_package_manager))

* [Volkswagen's Autonomous 'ID Buzz' Robotaxi Is Ready, And Cities And Companies Can Buy Them Soon](https://tech.slashdot.org/story/25/06/23/0330224/volkswagens-autonomous-id-buzz-robotaxi-is-ready-and-cities-and-companies-can-buy-them-soon?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/23/0330224/volkswagens-autonomous-id-buzz-robotaxi-is-ready-and-cities-and-companies-can-buy-them-soon?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Unprecedented Detail: Vera Rubin Space Telescope Releases First Images from Its 3,200-Megapixel Camera](https://science.slashdot.org/story/25/06/23/0717244/unprecedented-detail-vera-rubin-space-telescope-releases-first-images-from-its-3200-megapixel-camera?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/23/0717244/unprecedented-detail-vera-rubin-space-telescope-releases-first-images-from-its-3200-megapixel-camera?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Programming and Development Highlights

* [RedMonk Top 20 Languages Over Time: January 2025](https://redmonk.com/rstephens/2025/06/18/top20-jan2025/) ([comments](https://lobste.rs/s/xw5twr/redmonk_top_20_languages_over_time))

* [SATySFi: A statically-typed, functional typesetting system](https://github.com/gfngfn/SATySFi) ([comments](https://lobste.rs/s/33lu8r/satysfi_statically_typed_functional))

* [A Retrospective on the Source Code Control System](https://www.mrochkind.com/mrochkind/docs/SCCSretro2.pdf) ([comments](https://lobste.rs/s/4hljar/retrospective_on_source_code_control))

## Health and Science Insights

* [DHEA-S hormone linked to shorter lifespan in men, but not women](https://medicalxpress.com/news/2025-06-dhea-hormone-linked-shorter-lifespan.html) ([comments](https://news.ycombinator.com/item?id=44356549))

* [2B people don't have safe drinking water: what does this mean for them?](https://ourworldindata.org/what-no-safe-water-means) ([comments](https://news.ycombinator.com/item?id=44355985))

* [Buried French Toxic-Waste 'Time-Bomb' Could Poison Drinking-Water For Millions in Europe](https://news.slashdot.org/story/25/06/23/0954234/buried-french-toxic-waste-time-bomb-could-poison-drinking-water-for-millions-in-europe?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/06/23/0954234/buried-french-toxic-waste-time-bomb-could-poison-drinking-water-for-millions-in-europe?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Issues and Policy Changes

* [WhatsApp banned on House staffers' devices](https://www.axios.com/2025/06/23/whatsapp-house-congress-staffers-messaging-app) ([comments](https://news.ycombinator.com/item?id=44356676))

* [Behind the Scenes at the Python Software Foundation](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [The AI lifestyle subsidy is going to end](https://digitalseams.com/blog/the-ai-lifestyle-subsidy-is-going-to-end) ([comments](https://news.ycombinator.com/item?id=44356625))

## Creative and Experimental Projects

* [Backyard Coffee and Jazz in Kyoto, Japan](https://thedeletedscenes.substack.com/p/backyard-coffee-and-jazz-in-kyoto) ([comments](https://news.ycombinator.com/item?id=44356248))

* [Radio Garden](https://radio.garden/?2025) ([comments](https://news.ycombinator.com/item?id=44350450))

* [Building my own paper tape punch](https://unimplementedtrap.com/paper-tape-punch) ([comments](https://lobste.rs/s/x9s2is/building_my_own_paper_tape_punch))

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

* [2025-06-23, 15:55:05](https://lobste.rs/s/vzymza/new_javascript_inspired_package_manager) - [A new JavaScript-inspired package manager for Rust](https://github.com/realchonk/bsget)
* [2025-06-23, 15:22:07](https://lobste.rs/s/hvrgxz/go_should_be_more_opinionated) - [Go should be more opinionated](https://eltonminetto.dev/en/post/2025-06-19-go-more-opinated/)
* [2025-06-23, 15:20:00](https://apple.slashdot.org/story/25/06/23/1510246/apple-pulls-convince-your-parents-to-get-you-a-mac-ad-from-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Pulls &apos;Convince Your Parents To Get You a Mac&apos; Ad From YouTube](https://apple.slashdot.org/story/25/06/23/1510246/apple-pulls-convince-your-parents-to-get-you-a-mac-ad-from-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 15:16:56](https://news.ycombinator.com/item?id=44356676) - [WhatsApp banned on House staffers&apos; devices](https://www.axios.com/2025/06/23/whatsapp-house-congress-staffers-messaging-app)
* [2025-06-23, 15:12:14](https://news.ycombinator.com/item?id=44356625) - [The AI lifestyle subsidy is going to end](https://digitalseams.com/blog/the-ai-lifestyle-subsidy-is-going-to-end)
* [2025-06-23, 15:04:41](https://news.ycombinator.com/item?id=44356549) - [DHEA-S hormone linked to shorter lifespan in men, but not women](https://medicalxpress.com/news/2025-06-dhea-hormone-linked-shorter-lifespan.html)
* [2025-06-23, 14:52:22](https://news.ycombinator.com/item?id=44356422) - [Ask HN: How to Get Rid of Gemini?](https://news.ycombinator.com/item?id=44356422)
* [2025-06-23, 14:46:30](https://lobste.rs/s/ygd1d8/making_tramp_go_brrrr) - [Making TRAMP go Brrrr…](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./)
* [2025-06-23, 14:46:03](https://news.ycombinator.com/item?id=44356346) - [Making Tramp Go Brrr](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./)
* [2025-06-23, 14:40:00](https://news.slashdot.org/story/25/06/23/1441200/house-bans-whatsapp-on-congressional-staff-devices-over-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Bans WhatsApp on Congressional Staff Devices Over Security Concerns](https://news.slashdot.org/story/25/06/23/1441200/house-bans-whatsapp-on-congressional-staff-devices-over-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 14:37:05](https://news.ycombinator.com/item?id=44356248) - [Backyard Coffee and Jazz in Kyoto, Japan](https://thedeletedscenes.substack.com/p/backyard-coffee-and-jazz-in-kyoto)
* [2025-06-23, 14:26:42](https://lobste.rs/s/hacouy/how_i_use_my_terminal) - [how i use my terminal](https://jyn.dev/how-i-use-my-terminal/)
* [2025-06-23, 14:12:08](https://news.ycombinator.com/item?id=44355985) - [2B people don&apos;t have safe drinking water: what does this mean for them?](https://ourworldindata.org/what-no-safe-water-means)
* [2025-06-23, 14:08:42](https://lobste.rs/s/ybarpv/whitesmiths_c_compiler_one_earliest) - [Whitesmiths C compiler: One of the earliest commercial C compilers available](https://github.com/hansake/Whitesmiths-C-compiler)
* [2025-06-23, 14:00:53](https://lobste.rs/s/obsh1m/how_store_go_pointers_from_assembly) - [How to store Go pointers from assembly](https://mazzo.li/posts/go-asm-pointers.html)
* [2025-06-23, 14:00:00](https://news.slashdot.org/story/25/06/23/0954234/buried-french-toxic-waste-time-bomb-could-poison-drinking-water-for-millions-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Buried French Toxic-Waste &apos;Time-Bomb&apos; Could Poison Drinking-Water For Millions in Europe](https://news.slashdot.org/story/25/06/23/0954234/buried-french-toxic-waste-time-bomb-could-poison-drinking-water-for-millions-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 13:30:58](https://lobste.rs/s/9gqnkj/solving_linkedin_queens_using_minizinc) - [Solving LinkedIn Queens using MiniZinc](https://zayenz.se/blog/post/linkedin-queens/)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 13:01:59](https://lobste.rs/s/4hljar/retrospective_on_source_code_control) - [A Retrospective on the Source Code Control System](https://www.mrochkind.com/mrochkind/docs/SCCSretro2.pdf)
* [2025-06-23, 12:45:39](https://lobste.rs/s/ib1hj9/family_openssl_forks) - [A family of OpenSSL forks](https://daniel.haxx.se/blog/2025/06/23/a-family-of-forks/)
* [2025-06-23, 12:42:55](https://lobste.rs/s/xw5twr/redmonk_top_20_languages_over_time) - [RedMonk Top 20 Languages Over Time: January 2025](https://redmonk.com/rstephens/2025/06/18/top20-jan2025/)
* [2025-06-23, 12:40:24](https://news.ycombinator.com/item?id=44355187) - [How to store Go pointers from assembly](https://mazzo.li/posts/go-asm-pointers.html)
* [2025-06-23, 11:46:00](https://science.slashdot.org/story/25/06/23/0717244/unprecedented-detail-vera-rubin-space-telescope-releases-first-images-from-its-3200-megapixel-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Unprecedented&apos; Detail: Vera Rubin Space Telescope Releases First Images from Its 3,200-Megapixel Camera](https://science.slashdot.org/story/25/06/23/0717244/unprecedented-detail-vera-rubin-space-telescope-releases-first-images-from-its-3200-megapixel-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 11:17:01](https://lobste.rs/s/eyxq10/modeling_world_280_characters) - [Modeling the World in 280 Characters](https://tympanus.net/codrops/2025/06/23/modeling-the-world-in-280-characters/)
* [2025-06-23, 09:45:30](https://lobste.rs/s/33lu8r/satysfi_statically_typed_functional) - [SATySFi: A statically-typed, functional typesetting system](https://github.com/gfngfn/SATySFi)
* [2025-06-23, 08:48:00](https://tech.slashdot.org/story/25/06/23/0330224/volkswagens-autonomous-id-buzz-robotaxi-is-ready-and-cities-and-companies-can-buy-them-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Volkswagen&apos;s Autonomous &apos;ID Buzz&apos; Robotaxi Is Ready, And Cities And Companies Can Buy Them Soon](https://tech.slashdot.org/story/25/06/23/0330224/volkswagens-autonomous-id-buzz-robotaxi-is-ready-and-cities-and-companies-can-buy-them-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 08:16:17](https://lobste.rs/s/lrtenu/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lrtenu/what_are_you_doing_this_week)
* [2025-06-23, 06:46:33](https://news.ycombinator.com/item?id=44353098) - [RaptorCast: Designing a Messaging Layer](https://www.category.xyz/blogs/raptorcast-designing-a-messaging-layer)
* [2025-06-23, 06:26:42](https://lobste.rs/s/u6xhiw/telescopes_are_tries_dependent_type) - [Telescopes Are Tries: A Dependent Type Shellac on SQLite](https://www.philipzucker.com/telescope_tries/)
* [2025-06-23, 05:48:00](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Behind the Scenes at the Python Software Foundation](https://developers.slashdot.org/story/25/06/23/0542243/behind-the-scenes-at-the-python-software-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 05:10:44](https://news.ycombinator.com/item?id=44352615) - [Nano-Vllm: lightweight vLLM implementation built from scratch](https://github.com/GeeeekExplorer/nano-vllm)
* [2025-06-23, 04:35:47](https://lobste.rs/s/ez1fqj/compressing_for_browser_go) - [Compressing for the browser in Go](https://blog.kowalczyk.info/a-5hum/compressing-for-the-browser-in-go.html)
* [2025-06-23, 03:50:24](https://news.ycombinator.com/item?id=44352311) - [The X Window System didn&apos;t immediately have X terminals](https://utcc.utoronto.ca/~cks/space/blog/unix/XTerminalsNotImmediate)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-23, 03:25:01](https://lobste.rs/s/eowepp/tabiew_tui_for_viewing_querying_csv_tsv) - [tabiew: A TUI for viewing &amp; querying CSV, TSV, JSON, SQLITE, and more](https://github.com/shshemi/tabiew)
* [2025-06-23, 02:34:16](https://lobste.rs/s/5wc5cm/asterinas_new_linux_compatible_kernel) - [Asterinas: a new Linux-compatible kernel project](https://lwn.net/SubscriberLink/1022920/ad60263cd13c8a13/)
* [2025-06-23, 02:29:20](https://lobste.rs/s/kk3zx3/makefile_formatter_linter) - [Makefile formatter and linter](https://github.com/EbodShojaei/bake)
* [2025-06-23, 02:12:00](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is America Finally Improving Its Electric Car Chargers?](https://news.slashdot.org/story/25/06/23/0149223/is-america-finally-improving-its-electric-car-chargers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 01:47:00](https://news.ycombinator.com/item?id=44351817) - [Polystate: Composable Finite State Machines](https://github.com/sdzx-1/polystate)
* [2025-06-23, 01:00:00](https://news.ycombinator.com/item?id=44351580) - [Optifye.ai (YC W25) is hiring a back end engineer](https://news.ycombinator.com/item?id=44351580)
* [2025-06-23, 00:12:00](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RedMonk Ranks Top Programming Languages Over Time - and Considers Ditching Its &apos;Stack Overflow&apos; Metric](https://developers.slashdot.org/story/25/06/23/009244/redmonk-ranks-top-programming-languages-over-time---and-considers-ditching-its-stack-overflow-metric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 23:12:50](https://news.ycombinator.com/item?id=44351068) - [Finding a billion factorials in 60 ms with SIMD](https://codeforces.com/blog/entry/143279)
* [2025-06-22, 23:03:00](https://news.ycombinator.com/item?id=44351028) - [Show HN: Lego Island Playable in the Browser](https://isle.pizza)
* [2025-06-22, 22:34:00](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Pulls Promotional Materials About Jony Ive Deal (After Trademark Lawsuit)](https://yro.slashdot.org/story/25/06/22/222250/openai-pulls-promotional-materials-about-jony-ive-deal-after-trademark-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:34:00](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Photographed with Bill Gates - for the First Time Ever](https://linux.slashdot.org/story/25/06/22/2131259/linus-torvalds-photographed-with-bill-gates---for-the-first-time-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 21:28:54](https://news.ycombinator.com/item?id=44350450) - [Radio Garden](https://radio.garden/?2025)
* [2025-06-22, 21:12:01](https://news.ycombinator.com/item?id=44350322) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:10:35](https://lobste.rs/s/pdrso1/i_wrote_my_phd_thesis_typst) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 21:06:19](https://lobste.rs/s/x9s2is/building_my_own_paper_tape_punch) - [Building my own paper tape punch](https://unimplementedtrap.com/paper-tape-punch)
* [2025-06-22, 20:26:08](https://news.ycombinator.com/item?id=44350002) - [Using Home Assistant, adguard home and an $8 smart outlet to avoid brain rot](https://www.romanklasen.com/blog/beating-brainrot-by-button/)
* [2025-06-22, 20:23:00](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Begins Driverless Robotaxi Service in Austin, Texas](https://news.slashdot.org/story/25/06/22/2021234/tesla-begins-driverless-robotaxi-service-in-austin-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 20:18:53](https://lobste.rs/s/khl7q4/freebsd_kernel_modules_pkg_8) - [FreeBSD Kernel Modules pkg(8) Repositories](https://vermaden.wordpress.com/2025/06/22/freebsd-kernel-modules-pkg8-repositories/)
* [2025-06-22, 19:18:41](https://news.ycombinator.com/item?id=44349525) - [Klein Bottle Amazon Brand Hijacking (2021)](https://www.kleinbottle.com/Amazon_Brand_Hijacking.html)
* [2025-06-22, 19:10:06](https://lobste.rs/s/pmiazy/postmarketos_v25_06_one_with_systemd) - [postmarketOS v25.06: the one with systemd](https://postmarketos.org/blog/2025/06/22/v25.06-release/)
* [2025-06-22, 19:10:00](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Will AI Impact Call Center Jobs in India?](https://it.slashdot.org/story/25/06/22/197235/how-will-ai-impact-call-center-jobs-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 17:50:00](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Music Industry is Building the Tech to Hunt Down AI-Generated Songs](https://entertainment.slashdot.org/story/25/06/22/1747250/how-the-music-industry-is-building-the-tech-to-hunt-down-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 17:21:42](https://lobste.rs/s/thwfed/discover_c_26_s_compile_time_reflection) - [Discover C++26’s compile-time reflection](https://lemire.me/blog/2025/06/22/c26-will-include-compile-time-reflection-why-should-you-care/)
* [2025-06-22, 17:06:42](https://lobste.rs/s/a9ve6f/my_first_impressions_gleam) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-06-22, 16:34:00](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tiny Orange Beads Found By Apollo Astronauts Reveal Moon&apos;s Volcanic Past](https://science.slashdot.org/story/25/06/22/0358233/tiny-orange-beads-found-by-apollo-astronauts-reveal-moons-volcanic-past?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 15:34:00](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans are Buying Twice as Many Hybrids as Fully Electric Vehicles. Is The Next Step Synthetic Fuels?](https://tech.slashdot.org/story/25/06/22/0616202/americans-are-buying-twice-as-many-hybrids-as-fully-electric-vehicles-is-the-next-step-synthetic-fuels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 14:56:44](https://news.ycombinator.com/item?id=44347425) - [Mechanical Watch: Exploded View](https://fellerts.no/projects/epoch.html)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 07:06:42](https://lobste.rs/s/mvoez2/announcing_clippy_feature_freeze) - [Announcing the Clippy feature freeze](https://blog.rust-lang.org/inside-rust/2025/06/21/announcing-the-clippy-feature-freeze/)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:39:26](https://news.ycombinator.com/item?id=44333149) - [Verlet Integration and Cloth Physics Simulation (2022)](https://pikuma.com/blog/verlet-integration-2d-cloth-physics-simulation)
* [2025-06-20, 19:46:33](https://news.ycombinator.com/item?id=44331316) - [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 14:44:18](https://news.ycombinator.com/item?id=44328191) - [Rocknix is an immutable Linux distribution for handheld gaming devices](https://rocknix.org/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 09:56:06](https://news.ycombinator.com/item?id=44326175) - [Homotopy Equivalences](https://bartoszmilewski.com/2025/06/20/weak-homotopy-equivalences/)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 09:05:20](https://news.ycombinator.com/item?id=44325861) - [New Linux udisks flaw lets attackers get root on major Linux distros](https://www.bleepingcomputer.com/news/linux/new-linux-udisks-flaw-lets-attackers-get-root-on-major-linux-distros/)
* [2025-06-20, 08:21:04](https://news.ycombinator.com/item?id=44325673) - [Scroll snapping, state queries, monster hunter, and gamification](https://utilitybend.com/blog/the-customizable-select-part-four-scroll-snapping-state-queries-monster-hunter-and-gamification)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 03:59:17](https://news.ycombinator.com/item?id=44324616) - [Show HN: Turbine – 16-bit CPU Architecture and Emulator built in C](https://www.errorcodezero.dev/blog/building-my-own-cpu-isa-and-virtual-machine/)
* [2025-06-20, 03:55:33](https://news.ycombinator.com/item?id=44324596) - [Tell me about your favorite tree (a slow-web proposal)](https://nannnsss.omg.lol/2025/tell-me-about-your-favorite-tree/)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 23:40:36](https://news.ycombinator.com/item?id=44323528) - [Rivulet: An esolang inspired by calligraphy &amp;&amp; code [video]](https://media.ccc.de/v/gpn23-35-rivulet-an-esolang-inspired-by-calligraphy-and-other-experiments-in-natural-language-code)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 17:40:05](https://news.ycombinator.com/item?id=44320832) - [Cataphract: Medieval-fantasy roleplaying wargame, in the Black-Sea C. 1300](https://samsorensen.blot.im/cataphracts-design-diary-1)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
