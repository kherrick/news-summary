# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Writing a Rust GPU kernel driver: a brief introduction on how GPU drivers work](https://www.collabora.com/news-and-blog/blog/2025/08/06/writing-a-rust-gpu-kernel-driver-a-brief-introduction-on-how-gpu-drivers-work/) - A technical dive into designing GPU kernel drivers using Rust, revealing the inner workings behind graphics processing.

* [Rethinking devtools: Escaping the Cloud and SaaS trap](https://lobste.rs/s/dstkgd/rethinking_devtools_escaping_cloud_saas) - An exploration of alternative approaches to development tools, moving away from cloud and SaaS dependencies.

* [Jules, our asynchronous coding agent](https://blog.google/technology/google-labs/jules-now-available/) - Google introduces a new AI agent designed to assist developers with asynchronous coding tasks.

## Environmental and Scientific Challenges

* [Chemical Pollution a Threat Comparable To Climate Change, Scientists Warn](https://news.slashdot.org/story/25/08/06/2016214/chemical-pollution-a-threat-comparable-to-climate-change-scientists-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A stark warning about the environmental dangers of chemical pollution and its global consequences.

* [Astronomers Cannot Agree On How Fast the Universe is Expanding](https://science.slashdot.org/story/25/08/06/207232/astronomers-cannot-agree-on-how-fast-the-universe-is-expanding?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The cosmic debate over the universe's expansion rate intensifies in the scientific community.

* [Great Barrier Reef Suffers Worst Coral Decline on Record](https://news.slashdot.org/story/25/08/06/2011230/great-barrier-reef-suffers-worst-coral-decline-on-record?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reporting on the dire state of coral reefs and escalating climate changes affecting marine ecosystems.

## AI and Cybersecurity

* [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&from=rss) - How AI is making cybercrime more accessible, raising concerns over security and malicious activities online.

* [Tornado Cash Co-Founder Storm Guilty in Crypto Mixing Case](https://yro.slashdot.org/story/25/08/06/1729237/tornado-cash-co-founder-storm-guilty-in-crypto-mixing-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal developments in crypto privacy technology and its misuse for money laundering.

## Open Source and Development Tools

* [The new shape of Mixxx 3.0 – take part in the future of Open Source DJing](https://mixxx.org/news/2025-08-06-qml-project/) - Get involved in shaping the next generation of Mixxx, the open-source DJ platform.

* [uBlock Origin Lite for Safari](https://mjtsai.com/blog/2025/08/06/ublock-origin-lite-for-safari/) - A new lightweight version of the popular ad blocker, optimized for the Safari browser.

* [The Bluesky Dictionary](https://www.avibagla.com/blueskydictionary/) - A tool focused on creating a resource for Bluesky's decentralized social networking protocols.

## Unusual and Surprising Discoveries

* [Wild pigs' flesh turning neon blue in California](https://phys.org/news/2025-08-wild-pigs-flesh-neon-blue.html) - This bizarre phenomenon raises questions around environmental contaminants.

* [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&from=rss) - Discover the unexpected optical properties of peacock feathers, capable of emitting laser light.

* [Space's Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&from=rss) - A newly-found astronomical object challenges current astrophysical understanding.

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

* [2025-08-06, 21:30:34](https://lobste.rs/s/o0ns6o/what_happens_when_you_start_panic_ing) - [What Happens When You Start Panic!ing](https://www.youtube.com/watch?v=GsnwR-Doeeo)
* [2025-08-06, 21:29:30](https://news.ycombinator.com/item?id=44818077) - [The new shape of Mixxx 3.0 – take part in the future of Open Source DJing](https://mixxx.org/news/2025-08-06-qml-project/)
* [2025-08-06, 21:26:04](https://news.ycombinator.com/item?id=44818044) - [Analyzing Control Flow More Like a Human [video]](http://wonks.github.io/germane/summer2025/2025/08/06/germane.html)
* [2025-08-06, 21:21:00](https://news.slashdot.org/story/25/08/06/2016214/chemical-pollution-a-threat-comparable-to-climate-change-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chemical Pollution a Threat Comparable To Climate Change, Scientists Warn](https://news.slashdot.org/story/25/08/06/2016214/chemical-pollution-a-threat-comparable-to-climate-change-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 21:18:21](https://lobste.rs/s/76maez/lf_ai_data_foundation_hosts_vortex) - [LF AI &amp; Data Foundation Hosts Vortex Project to Power High Performance Data Access for AI and Analytics](https://www.linuxfoundation.org/press/lf-ai-data-foundation-hosts-vortex-project-to-power-high-performance-data-access-for-ai-and-analytics)
* [2025-08-06, 20:54:39](https://news.ycombinator.com/item?id=44817725) - [301party.com: The Intentionally Open Redirect](https://301party.com/)
* [2025-08-06, 20:53:06](https://lobste.rs/s/bju4on/ublock_origin_lite_for_safari) - [uBlock Origin Lite for Safari](https://mjtsai.com/blog/2025/08/06/ublock-origin-lite-for-safari/)
* [2025-08-06, 20:50:00](https://news.slashdot.org/story/25/08/06/2011230/great-barrier-reef-suffers-worst-coral-decline-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Great Barrier Reef Suffers Worst Coral Decline on Record](https://news.slashdot.org/story/25/08/06/2011230/great-barrier-reef-suffers-worst-coral-decline-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 20:43:08](https://news.ycombinator.com/item?id=44817583) - [The Bluesky Dictionary](https://www.avibagla.com/blueskydictionary/)
* [2025-08-06, 20:40:17](https://news.ycombinator.com/item?id=44817539) - [Project Hyperion: Interstellar ship design competition](https://www.projecthyperion.org)
* [2025-08-06, 20:38:22](https://news.ycombinator.com/item?id=44817508) - [40 Years of the Amiga, from Commodore](https://www.goto10retro.com/p/40-years-of-the-amiga-from-commodore)
* [2025-08-06, 20:10:00](https://science.slashdot.org/story/25/08/06/207232/astronomers-cannot-agree-on-how-fast-the-universe-is-expanding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Cannot Agree On How Fast the Universe is Expanding](https://science.slashdot.org/story/25/08/06/207232/astronomers-cannot-agree-on-how-fast-the-universe-is-expanding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 20:01:37](https://news.ycombinator.com/item?id=44816977) - [The History of F1 Design](https://www.espn.com/espn/feature/story/_/id/43832710/how-f1-evolved-1950-where-headed-2026)
* [2025-08-06, 19:43:01](https://news.ycombinator.com/item?id=44816755) - [Litestar is worth a look](https://www.b-list.org/weblog/2025/aug/06/litestar/)
* [2025-08-06, 19:41:50](https://lobste.rs/s/xoyolt/litestar_is_worth_look) - [Litestar is worth a look](https://www.b-list.org/weblog/2025/aug/06/litestar/)
* [2025-08-06, 19:39:20](https://news.ycombinator.com/item?id=44816692) - [We&apos;d be better off with 9-bit bytes](https://pavpanchekha.com/blog/9bit.html)
* [2025-08-06, 19:36:26](https://lobste.rs/s/eije8v/implementing_viewstamped_replication) - [Implementing Viewstamped Replication protocol (2023)](https://distributed-computing-musings.com/2023/10/implementing-viewstamped-replication-protocol/)
* [2025-08-06, 19:34:00](https://entertainment.slashdot.org/story/25/08/06/1934242/sci-fi-adaptation-war-of-the-worlds-scores-0-on-rotten-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sci-Fi Adaptation War of the Worlds Scores 0% on Rotten Tomatoes](https://entertainment.slashdot.org/story/25/08/06/1934242/sci-fi-adaptation-war-of-the-worlds-scores-0-on-rotten-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 18:51:54](https://news.ycombinator.com/item?id=44816060) - [The arcane alphabets of Black Sabbath](https://fontsinuse.com/uses/35835/the-arcane-alphabets-of-black-sabbath)
* [2025-08-06, 18:50:00](https://tech.slashdot.org/story/25/08/06/184212/google-says-ai-search-features-havent-hurt-web-traffic-despite-industry-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says AI Search Features Haven&apos;t Hurt Web Traffic Despite Industry Reports](https://tech.slashdot.org/story/25/08/06/184212/google-says-ai-search-features-havent-hurt-web-traffic-despite-industry-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 18:36:49](https://lobste.rs/s/jrtykf/fast_growable_array_with_stable_pointers) - [A Fast, Growable Array With Stable Pointers in C](https://danielchasehooper.com/posts/segment_array/)
* [2025-08-06, 18:23:19](https://news.ycombinator.com/item?id=44815718) - [Vibe coding the MIT course catalog](https://stackdiver.com/posts/vibe-coding-the-mit-course-catalog/)
* [2025-08-06, 18:21:28](https://news.ycombinator.com/item?id=44815702) - [A fast, growable array with stable pointers in C](https://danielchasehooper.com/posts/segment_array/)
* [2025-08-06, 18:10:00](https://games.slashdot.org/story/25/08/06/1741206/call-of-dutys-anti-cheat-will-require-tpm-20-and-secure-boot-for-pc-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Call of Duty&apos;s Anti-Cheat Will Require TPM 2.0 and Secure Boot for PC Players](https://games.slashdot.org/story/25/08/06/1741206/call-of-dutys-anti-cheat-will-require-tpm-20-and-secure-boot-for-pc-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 17:57:57](https://news.ycombinator.com/item?id=44815405) - [Gleam v1.12](https://github.com/gleam-lang/gleam/blob/main/changelog/v1.12.md)
* [2025-08-06, 17:29:00](https://yro.slashdot.org/story/25/08/06/1729237/tornado-cash-co-founder-storm-guilty-in-crypto-mixing-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tornado Cash Co-Founder Storm Guilty in Crypto Mixing Case](https://yro.slashdot.org/story/25/08/06/1729237/tornado-cash-co-founder-storm-guilty-in-crypto-mixing-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 17:28:56](https://news.ycombinator.com/item?id=44814993) - [Wild pigs&apos; flesh turning neon blue in California](https://phys.org/news/2025-08-wild-pigs-flesh-neon-blue.html)
* [2025-08-06, 17:26:18](https://lobste.rs/s/wzj0h7/we_shouldn_t_have_needed_lockfiles) - [We shouldn’t have needed lockfiles](https://tonsky.me/blog/lockfiles/)
* [2025-08-06, 16:57:55](https://news.ycombinator.com/item?id=44814596) - [Multics](https://www.multicians.org/multics.html)
* [2025-08-06, 16:47:00](https://entertainment.slashdot.org/story/25/08/06/1648215/universal-pictures-to-big-tech-well-sue-if-you-steal-our-movies-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Universal Pictures To Big Tech: We&apos;ll Sue If You Steal Our Movies For AI](https://entertainment.slashdot.org/story/25/08/06/1648215/universal-pictures-to-big-tech-well-sue-if-you-steal-our-movies-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 16:05:39](https://news.ycombinator.com/item?id=44813854) - [Jules, our asynchronous coding agent](https://blog.google/technology/google-labs/jules-now-available/)
* [2025-08-06, 16:05:00](https://tech.slashdot.org/story/25/08/06/1556252/google-suffers-data-breach-in-ongoing-salesforce-data-theft-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Suffers Data Breach in Ongoing Salesforce Data Theft Attacks](https://tech.slashdot.org/story/25/08/06/1556252/google-suffers-data-breach-in-ongoing-salesforce-data-theft-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 16:00:54](https://news.ycombinator.com/item?id=44813789) - [Writing a Rust GPU kernel driver: a brief introduction on how GPU drivers work](https://www.collabora.com/news-and-blog/blog/2025/08/06/writing-a-rust-gpu-kernel-driver-a-brief-introduction-on-how-gpu-drivers-work/)
* [2025-08-06, 15:41:10](https://lobste.rs/s/ndejda/dotfiles_feel_too_intimate_personal) - [Dotfiles feel too intimate and personal to share](https://hamatti.org/posts/dotfiles-feel-too-intimate-and-personal-to-share/)
* [2025-08-06, 15:33:37](https://news.ycombinator.com/item?id=44813397) - [We shouldn&apos;t have needed lockfiles](https://tonsky.me/blog/lockfiles/)
* [2025-08-06, 15:25:00](https://yro.slashdot.org/story/25/08/06/1433258/openai-offers-chatgpt-to-us-federal-agencies-for-1-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Offers ChatGPT To US Federal Agencies for $1 a Year](https://yro.slashdot.org/story/25/08/06/1433258/openai-offers-chatgpt-to-us-federal-agencies-for-1-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 15:19:24](https://lobste.rs/s/4fcgpi/new_method_is_fastest_way_find_best_routes) - [New Method Is the Fastest Way To Find the Best Routes](https://www.quantamagazine.org/new-method-is-the-fastest-way-to-find-the-best-routes-20250806/)
* [2025-08-06, 15:03:19](https://news.ycombinator.com/item?id=44812985) - [Zig Error Patterns](https://glfmn.io/posts/zig-error-patterns/)
* [2025-08-06, 15:01:12](https://lobste.rs/s/oexn2a/zig_error_patterns) - [zig-error-patterns](https://glfmn.io/posts/zig-error-patterns/)
* [2025-08-06, 14:48:00](https://apple.slashdot.org/story/25/08/06/1448241/trump-apple-to-announce-new-100-billion-commitment-to-manufacturing-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump, Apple To Announce New $100 Billion Commitment To Manufacturing in US](https://apple.slashdot.org/story/25/08/06/1448241/trump-apple-to-announce-new-100-billion-commitment-to-manufacturing-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 14:43:02](https://news.ycombinator.com/item?id=44812695) - [Breaking the sorting barrier for directed single-source shortest paths](https://www.quantamagazine.org/new-method-is-the-fastest-way-to-find-the-best-routes-20250806/)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 14:13:20](https://lobste.rs/s/i5zkhc/why_hx_boost_is_actually_most_important) - [Why hx-boost is actually the most important feature of htmx](https://dev.to/yawaramin/why-hx-boost-is-actually-the-most-important-feature-of-htmx-3nc0)
* [2025-08-06, 14:05:00](https://news.slashdot.org/story/25/08/06/145218/nvidia-rejects-us-demand-for-backdoors-in-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Rejects US Demand For Backdoors in AI Chips](https://news.slashdot.org/story/25/08/06/145218/nvidia-rejects-us-demand-for-backdoors-in-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 13:17:38](https://news.ycombinator.com/item?id=44811567) - [Claude Code IDE integration for Emacs](https://github.com/manzaltu/claude-code-ide.el)
* [2025-08-06, 13:00:00](https://tech.slashdot.org/story/25/08/06/0155257/lyft-will-use-chinese-driverless-cars-in-britain-and-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lyft Will Use Chinese Driverless Cars In Britain and Germany](https://tech.slashdot.org/story/25/08/06/0155257/lyft-will-use-chinese-driverless-cars-in-britain-and-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 12:50:06](https://news.ycombinator.com/item?id=44811280) - [303Gen – 303 acid loops generator](https://303-gen-06a668.netlify.app/)
* [2025-08-06, 11:50:33](https://lobste.rs/s/44ltdp/how_why_github_codeberg) - [The how and why of GitHub to Codeberg](https://www.arscyni.cc/file/codeberg.html)
* [2025-08-06, 11:16:39](https://lobste.rs/s/jkxa7n/bag_words_have_mercy_on_us) - [Bag of words, have mercy on us](https://www.experimental-history.com/p/bag-of-words-have-mercy-on-us)
* [2025-08-06, 10:00:00](https://yro.slashdot.org/story/25/08/06/021226/meta-eavesdropped-on-period-tracker-apps-users-jury-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Eavesdropped On Period-Tracker App&apos;s Users, Jury Rules](https://yro.slashdot.org/story/25/08/06/021226/meta-eavesdropped-on-period-tracker-apps-users-jury-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 08:25:14](https://lobste.rs/s/6wjkre/python_performance_myths_fairy_tales) - [Python performance myths and fairy tales](https://lwn.net/SubscriberLink/1031707/73cb0cf917307a93/)
* [2025-08-06, 08:14:27](https://lobste.rs/s/usdqtq/why_are_windows_semiannual_updates_named) - [Why are Windows semiannual updates named H1 and H2?](https://devblogs.microsoft.com/oldnewthing/20250805-00/?p=111435)
* [2025-08-06, 07:00:13](https://lobste.rs/s/dstkgd/rethinking_devtools_escaping_cloud_saas) - [Rethinking devtools: Escaping the Cloud and SaaS trap](https://lobste.rs/s/dstkgd/rethinking_devtools_escaping_cloud_saas)
* [2025-08-06, 07:00:00](https://tech.slashdot.org/story/25/08/06/050230/nasa-satellites-that-scientists-and-farmers-rely-on-may-be-destroyed-on-purpose?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Satellites That Scientists and Farmers Rely On May Be Destroyed On Purpose](https://tech.slashdot.org/story/25/08/06/050230/nasa-satellites-that-scientists-and-farmers-rely-on-may-be-destroyed-on-purpose?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 06:51:13](https://news.ycombinator.com/item?id=44808542) - [Rethinking DOM from first principles](https://acko.net/blog/html-is-dead-long-live-html/)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 05:04:36](https://news.ycombinator.com/item?id=44807868) - [Show HN: Kitten TTS – 25MB CPU-Only, Open-Source TTS Model](https://github.com/KittenML/KittenTTS)
* [2025-08-06, 03:55:07](https://lobste.rs/s/o5bqwn/proper_x86_assembler_haskell_using) - [A Proper X86 Assembler in Haskell Using the Escardó-Oliva Functional](http://blog.vmchale.com/article/escardo-oliva-functional)
* [2025-08-06, 01:06:05](https://lobste.rs/s/lixhpb/cosmopolitan_build_once_run_anywhere_c) - [cosmopolitan: build-once run-anywhere c library](https://github.com/jart/cosmopolitan)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-06, 00:11:52](https://lobste.rs/s/5blqas/be_careful_with_go_struct_embedding) - [Be Careful with Go Struct Embedding](https://mattjhall.co.uk/posts/be-careful-with-go-struct-embedding.html)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 19:38:11](https://lobste.rs/s/uvvpzo/have_you_ever_regretted_open_sourcing) - [Have you ever regretted open-sourcing something?](https://lobste.rs/s/uvvpzo/have_you_ever_regretted_open_sourcing)
* [2025-08-05, 19:17:28](https://lobste.rs/s/nh8vhk/til_you_can_spot_base64_encoded_json) - [TIL that You can spot base64 encoded JSON, certificates, and private keys](https://ergaster.org/til/base64-encoded-json/)
* [2025-08-05, 19:09:11](https://lobste.rs/s/tpb5a8/digital_hygiene_emails) - [Digital hygiene: Emails](https://herman.bearblog.dev/digital-hygiene-emails/)
* [2025-08-05, 18:07:27](https://lobste.rs/s/fbbuql/gleam_v1_12_0_released) - [Gleam v1.12.0 released](https://gleam.run/news/no-more-dependency-management-headaches/)
* [2025-08-05, 16:17:47](https://lobste.rs/s/12odh4/quickshell_building_blocks_for_your) - [Quickshell, building blocks for your desktop](https://quickshell.org/)
* [2025-08-05, 15:59:09](https://lobste.rs/s/rutoil/no_ai_is_not_making_engineers_10x_as) - [No, AI is not Making Engineers 10x as Productive](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 16:46:10](https://news.ycombinator.com/item?id=44788321) - [Why is it worth spending time on type theory? (2013)](https://math.stackexchange.com/questions/567265/why-is-it-worth-spending-time-on-type-theory)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 09:48:15](https://news.ycombinator.com/item?id=44783717) - [The Real Origin of Cisco Systems (1999)](https://www.tcracs.org/tcrwp/1origin-of-cisco/)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
* [2025-08-03, 20:21:00](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss) - [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss)
* [2025-08-03, 19:11:40](https://news.ycombinator.com/item?id=44778898) - [Comptime.ts: compile-time expressions for TypeScript](https://comptime.js.org/)
* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 15:08:58](https://news.ycombinator.com/item?id=44777086) - [Automerge 3.0](https://automerge.org/blog/automerge-3/)
* [2025-08-03, 14:38:36](https://news.ycombinator.com/item?id=44776871) - [Show HN: Write lead sheets in a Markdown way and transpose in a second](https://cord.land/landing)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 02:00:51](https://news.ycombinator.com/item?id=44773480) - [Converting Existing Users to systemd-homed](https://systemd.io/CONVERTING_TO_HOMED/)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
