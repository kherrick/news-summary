# [News Summary](https://kherrick.github.io/news-summary/)

## Camera Technology and Photography

* [Nikon To Raise Camera Prices in the US Because of Tariffs](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Memory and Software Design

* [Memory Access Patterns Are Important](https://mechanical-sympathy.blogspot.com/2012/08/memory-access-patterns-are-important.html)

* [Five-year review of BQN design](https://mlochbaum.github.io/BQN/commentary/fiveyears.html)

## Innovations and Creative Concepts

* [Show HN: I made a running app that turns your runs to a virtual garden](https://www.runandgrow.com/)

* [Forester, a tool for scientific and mathematical hypertexts](https://www.forester-notes.org/index/index.xml)

* [CSS Minecraft](https://benjaminaster.com/css-minecraft/)

## Cybersecurity and Technology

* [Accessing private GitHub repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)

* [Amoeba: a distributed operating system for the 1990s (1990)](https://www.cs.cornell.edu/home/rvr/papers/Amoeba1990s.pdf)

* [Vulnerability reports: Single process, multiple interpreters, no GIL contention - pre-Python3.12](https://basisrobotics.tech/2025/05/26/python/)

## Climate, Energy, and Politics

* [TSMC bets on unorthodox optical tech](https://spectrum.ieee.org/microled-optical-chiplet)

* [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&from=rss)

## Artificial Intelligence and Ethics

* [Nick Clegg Says Asking Artists For Use Permission Would 'Kill' the AI Industry](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the)

* [Is AI Turning Coders Into Bystanders in Their Own Jobs?](https://developers.slashdot.org/story/25/05/26/0059245/is-ai-turning-coders-into-bystanders-in-their-own-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space and Astronomy

* [Evidence for 'Planet Nine' Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&from=rss)

## Games, Entertainment, and Cultural Phenomena

* [FromSoft's singular mech game Chromehounds is back online](https://www.readonlymemo.com/interview-15-years-after-the-servers-shut-down-fromsofts-singular-mech-game-chromehounds-is-back-online/)

* [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [America Has Biggest Three-Day Weekend Box Office Ever](https://entertainment.slashdot.org/story/25/05/26/0320206/america-has-biggest-three-day-weekend-box-office-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Health and Science

* [Positive Proof-of-Concept Experiments May Lead to the World's First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&from=rss)

* [A new class of materials that can passively harvest water from air](https://blog.seas.upenn.edu/penn-engineers-discover-a-new-class-of-materials-that-passively-harvest-water-from-air/)

## Software and Tools

* [WavePhoenix – open-source implementation of the Nintendo WaveBird protocol](https://github.com/loopj/wavephoenix)

* [Yes-rs: A fast, memory-safe rewrite of the classic Unix yes command](https://github.com/jedisct1/yes-rs)

* [Turning Portal 2 into a Web Server](https://www.youtube.com/watch?v=-v5vCLLsqbA)

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

* [2025-05-27, 03:57:00](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nikon To Raise Camera Prices in the US Because of Tariffs](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 03:21:47](https://lobste.rs/s/errguk/memory_access_patterns_are_important) - [Memory Access Patterns Are Important](https://mechanical-sympathy.blogspot.com/2012/08/memory-access-patterns-are-important.html)
* [2025-05-27, 03:16:38](https://lobste.rs/s/znx8q8/five_year_review_bqn_design) - [Five-year review of BQN design](https://mlochbaum.github.io/BQN/commentary/fiveyears.html)
* [2025-05-27, 02:27:19](https://news.ycombinator.com/item?id=44103431) - [Grammars of Formal Uncertainty](https://arxiv.org/abs/2505.20047)
* [2025-05-27, 02:25:38](https://news.ycombinator.com/item?id=44103416) - [Show HN: I made a running app that turns your runs to a virtual garden](https://www.runandgrow.com/)
* [2025-05-27, 02:09:00](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering John Young, Co-founder of Web Archive Cryptome](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-27, 01:20:29](https://news.ycombinator.com/item?id=44103116) - [Yes-rs: A fast, memory-safe rewrite of the classic Unix yes command](https://github.com/jedisct1/yes-rs)
* [2025-05-27, 01:11:04](https://news.ycombinator.com/item?id=44103071) - [Calendars, Contacts and Files in Stalwart](https://stalw.art/blog/collaboration/)
* [2025-05-27, 01:00:57](https://news.ycombinator.com/item?id=44103027) - [Forester, a tool for scientific and mathematical hypertexts](https://www.forester-notes.org/index/index.xml)
* [2025-05-27, 00:58:18](https://lobste.rs/s/xlmi11/conversation_game) - [The Conversation Game](https://www.airs.com/blog/archives/673)
* [2025-05-27, 00:52:43](https://news.ycombinator.com/item?id=44102988) - [FromSoft&apos;s singular mech game Chromehounds is back online](https://www.readonlymemo.com/interview-15-years-after-the-servers-shut-down-fromsofts-singular-mech-game-chromehounds-is-back-online/)
* [2025-05-26, 22:53:51](https://news.ycombinator.com/item?id=44102376) - [Accessing private GitHub repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-26, 22:38:00](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 22:14:45](https://lobste.rs/s/se1hjr/amoeba_distributed_operating_system_for) - [Amoeba: a distributed operating system for the 1990s (1990)](https://www.cs.cornell.edu/home/rvr/papers/Amoeba1990s.pdf)
* [2025-05-26, 22:13:55](https://lobste.rs/s/3qy3uw/non_pointless_software_projects_for_new) - [Non-Pointless Software Projects for New Devs in the LLM Age](https://cprimozic.net/blog/non-pointless-software-projects-for-new-devs-in-the-llm-age/)
* [2025-05-26, 21:54:01](https://news.ycombinator.com/item?id=44102034) - [Power Failure](https://www.gwintrob.com/power-failure-review/)
* [2025-05-26, 21:25:56](https://news.ycombinator.com/item?id=44101833) - [Highlights from the Claude 4 system prompt](https://simonwillison.net/2025/May/25/claude-4-system-prompt/)
* [2025-05-26, 21:25:09](https://news.ycombinator.com/item?id=44101828) - [Get PC BIOS back on UEFI only system](https://github.com/FlyGoat/csmwrap)
* [2025-05-26, 21:19:18](https://news.ycombinator.com/item?id=44101787) - [Iron Spring PL/I Compiler](http://www.iron-spring.com/)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 21:05:17](https://lobste.rs/s/hxi9jj/access_control_syntax) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 20:30:00](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nick Clegg Says Asking Artists For Use Permission Would &apos;Kill&apos; the AI Industry](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 20:27:59](https://news.ycombinator.com/item?id=44101349) - [Owls in Towels](https://owlsintowels.org/)
* [2025-05-26, 20:10:44](https://lobste.rs/s/zoztf9/acronis_true_image_costs_performance) - [Acronis True Image Costs Performance When Not Used](https://randomascii.wordpress.com/2025/05/26/acronis-true-image-costs-performance-when-not-used/)
* [2025-05-26, 20:10:10](https://lobste.rs/s/ltldco/ash_hybrid_between_getopts_sh_c) - [ash: a hybrid between getopts and &apos;sh -c&apos;](https://github.com/avamsi/ash)
* [2025-05-26, 20:06:15](https://lobste.rs/s/myqawl/jjui_text_user_interface_tui_for_jujutsu) - [jjui: a text user interface (TUI) for the Jujutsu version control system](https://github.com/idursun/jjui)
* [2025-05-26, 19:56:02](https://news.ycombinator.com/item?id=44101072) - [The Difference Between Downloading and Streaming](https://danq.me/2025/05/26/downloading-vs-streaming/)
* [2025-05-26, 19:52:00](https://news.slashdot.org/story/25/05/26/1952223/the-newark-airport-crisis-is-about-to-become-everyones-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Newark Airport Crisis is About To Become Everyone&apos;s Problem](https://news.slashdot.org/story/25/05/26/1952223/the-newark-airport-crisis-is-about-to-become-everyones-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 19:20:19](https://news.ycombinator.com/item?id=44100677) - [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the)
* [2025-05-26, 18:32:02](https://news.ycombinator.com/item?id=44100179) - [Lossless video compression using Bloom filters](https://github.com/ross39/new_bloom_filter_repo/blob/main/README.md)
* [2025-05-26, 18:28:43](https://news.ycombinator.com/item?id=44100148) - [CSS Minecraft](https://benjaminaster.com/css-minecraft/)
* [2025-05-26, 18:27:09](https://lobste.rs/s/w7ezu6/single_process_multiple_interpreters_no) - [Single process, multiple interpreters, no GIL contention - pre-Python3.12](https://basisrobotics.tech/2025/05/26/python/)
* [2025-05-26, 17:37:25](https://lobste.rs/s/l1gebi/isolates_compressed_references_more) - [Isolates and compressed references: more flexible and efficient memory management for GraalVM](https://medium.com/graalvm/isolates-and-compressed-references-more-flexible-and-efficient-memory-management-for-graalvm-a044cc50b67e)
* [2025-05-26, 17:33:00](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Putin Says Services Like Microsoft, Zoom Should Be &apos;Throttled&apos; in Russia](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 17:15:19](https://news.ycombinator.com/item?id=44099407) - [TSMC bets on unorthodox optical tech](https://spectrum.ieee.org/microled-optical-chiplet)
* [2025-05-26, 17:00:00](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan Allocates 2,000 Megawatts of Electricity To Bitcoin Mining, AI Data Centres](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 16:55:49](https://news.ycombinator.com/item?id=44099187) - [Show HN: PgDog – Shard Postgres without extensions](https://github.com/pgdogdev/pgdog)
* [2025-05-26, 16:37:02](https://news.ycombinator.com/item?id=44099006) - [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 16:05:21](https://news.ycombinator.com/item?id=44098706) - [Launch HN: Nomi (YC X25) – Copilot for Sales](https://news.ycombinator.com/item?id=44098706)
* [2025-05-26, 15:51:00](https://lobste.rs/s/9u7bsl/scheming_mise_en_abime_bqn) - [Scheming a mise-en-abîme in BQN](https://panadestein.github.io/blog/posts/si.html#fnr.2)
* [2025-05-26, 15:41:00](https://developers.slashdot.org/story/25/05/26/1541224/at-amazon-some-coders-say-their-jobs-have-begun-to-resemble-warehouse-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Amazon, Some Coders Say Their Jobs Have Begun To Resemble Warehouse Work](https://developers.slashdot.org/story/25/05/26/1541224/at-amazon-some-coders-say-their-jobs-have-begun-to-resemble-warehouse-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 15:37:12](https://news.ycombinator.com/item?id=44098442) - [WavePhoenix – open-source implementation of the Nintendo WaveBird protocol](https://github.com/loopj/wavephoenix)
* [2025-05-26, 15:00:00](https://mobile.slashdot.org/story/25/05/26/1457242/docomo-emoji-set-to-be-officially-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Docomo Emoji Set To Be Officially Discontinued](https://mobile.slashdot.org/story/25/05/26/1457242/docomo-emoji-set-to-be-officially-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 14:00:00](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VCs Are Acquiring Mature Businesses To Retrofit With AI](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 13:31:00](https://lobste.rs/s/ozianb/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ozianb/what_are_you_doing_this_week)
* [2025-05-26, 13:30:34](https://lobste.rs/s/n0whur/against_curry_howard_mysticism) - [Against Curry-Howard Mysticism](https://liamoc.net/forest/loc-000S/index.xml)
* [2025-05-26, 13:27:06](https://lobste.rs/s/csrtzc/dumpy_numpy_except_it_s_ok_if_you_re_dum) - [DumPy: NumPy except it’s OK if you’re dum](https://dynomight.net/dumpy/)
* [2025-05-26, 13:23:19](https://lobste.rs/s/c43pk1/vibe_coding_experience) - [A Vibe‐Coding Experience](https://github.com/clauderouxster/kriegspiel/wiki/A-Vibe%E2%80%90Coding-Experience)
* [2025-05-26, 13:14:29](https://news.ycombinator.com/item?id=44097144) - [A new class of materials that can passively harvest water from air](https://blog.seas.upenn.edu/penn-engineers-discover-a-new-class-of-materials-that-passively-harvest-water-from-air/)
* [2025-05-26, 12:28:12](https://news.ycombinator.com/item?id=44096808) - [Particle Life simulation in browser using WebGPU](https://lisyarus.github.io/blog/posts/particle-life-simulation-in-browser-using-webgpu.html)
* [2025-05-26, 12:07:02](https://lobste.rs/s/uvwait/turning_portal_2_into_web_server) - [Turning Portal 2 into a Web Server](https://www.youtube.com/watch?v=-v5vCLLsqbA)
* [2025-05-26, 11:57:18](https://lobste.rs/s/xzieif/asserting_implications) - [Asserting Implications](https://tigerbeetle.com/blog/2025-05-26-asserting-implications/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 11:34:28](https://news.ycombinator.com/item?id=44096395) - [TIL: timeout in Bash scripts](https://heitorpb.github.io/bla/timeout/)
* [2025-05-26, 11:34:00](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Google Tries Funding Short Films Showing &apos;Less Nightmarish&apos; Visions of AI](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 10:52:34](https://lobste.rs/s/5anwqo/html_is_like_camera) - [HTML is like a camera](https://robbowen.digital/wrote-about/html-is-like-a-camera/)
* [2025-05-26, 10:10:04](https://lobste.rs/s/9qt9tf/type_level_bounded_recursion_rust) - [Type-level Bounded Recursion in Rust](https://catgirl.ai/log/typelevel-bounded-recursion/)
* [2025-05-26, 09:29:23](https://lobste.rs/s/rprjch/you_can_choose_tools_make_you_happy) - [You Can Choose Tools That Make You Happy](https://borretti.me/article/you-can-choose-tools-that-make-you-happy)
* [2025-05-26, 08:51:58](https://lobste.rs/s/1fu1tm/i_made_font) - [I made a font](https://blog.chay.dev/i-made-a-font/)
* [2025-05-26, 07:34:00](https://tech.slashdot.org/story/25/05/26/0452236/freebsd-were-still-here-lets-share-use-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD:  &apos;We&apos;re Still Here.  (Let&apos;s Share Use Cases!)&apos;](https://tech.slashdot.org/story/25/05/26/0452236/freebsd-were-still-here-lets-share-use-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 04:34:00](https://entertainment.slashdot.org/story/25/05/26/0320206/america-has-biggest-three-day-weekend-box-office-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Has Biggest Three-Day Weekend Box Office Ever](https://entertainment.slashdot.org/story/25/05/26/0320206/america-has-biggest-three-day-weekend-box-office-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 04:29:55](https://lobste.rs/s/oygfix/rocknix_is_immutable_linux_distribution) - [ROCKNIX is an immutable Linux distribution for handheld gaming devices](https://rocknix.org/)
* [2025-05-26, 03:40:31](https://lobste.rs/s/dy0ljq/smarter_simpler_firefox_address_bar) - [A smarter, simpler Firefox address bar](https://blog.mozilla.org/en/firefox/address-bar/)
* [2025-05-26, 03:34:00](https://apple.slashdot.org/story/25/05/26/0159210/why-the-iphones-messages-app-refuses-audio-messages-that-mention-dave-busters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why the iPhone&apos;s Messages App Refuses Audio Messages That Mention &apos;Dave &amp;amp; Buster&apos;s&apos;](https://apple.slashdot.org/story/25/05/26/0159210/why-the-iphones-messages-app-refuses-audio-messages-that-mention-dave-busters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-26, 01:04:00](https://developers.slashdot.org/story/25/05/26/0059245/is-ai-turning-coders-into-bystanders-in-their-own-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Turning Coders Into Bystanders in Their Own Jobs?](https://developers.slashdot.org/story/25/05/26/0059245/is-ai-turning-coders-into-bystanders-in-their-own-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 18:52:44](https://lobste.rs/s/jovc75/plwm_x11_window_manager_written_prolog) - [plwm: An X11 window manager written in Prolog](https://github.com/Seeker04/plwm)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 10:14:30](https://news.ycombinator.com/item?id=44086803) - [Changelog: Lazy trees (faster Nix builds)](https://determinate.systems/posts/changelog-determinate-nix-352/)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-24, 23:24:56](https://news.ycombinator.com/item?id=44084383) - [Improving performance of original dav1d video decoder](https://code.videolan.org/videolan/dav1d/-/merge_requests/1788)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 19:24:12](https://news.ycombinator.com/item?id=44083235) - [SVG Favicons in Action](https://css-tricks.com/svg-favicons-in-action/)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 17:36:11](https://news.ycombinator.com/item?id=44074787) - [Like a hot dog, the Wienermobile is made from a variety of ingredients (2022)](https://www.roadandtrack.com/car-culture/a38734853/wienermobile-has-corvette-g-wagen-and-nsx-parts/)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 09:33:46](https://news.ycombinator.com/item?id=44071321) - [Ask HN: What projects do you donate to?](https://news.ycombinator.com/item?id=44071321)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-23, 01:28:15](https://news.ycombinator.com/item?id=44068945) - [New DSL \&quot;MassQL\&quot; lets scientists query mass spectrometry data](https://news.ucr.edu/articles/2025/05/12/new-computer-language-helps-spot-hidden-pollutants)
