# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Vulnerabilities

* [GitHub MCP Exploited: Accessing Private Repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability) ([comments](https://news.ycombinator.com/item?id=44102376))

* [Claude 4 and GitHub MCP will leak your private GitHub repositories](https://twitter.com/lbeurerkellner/status/1926991491735429514) ([comments](https://news.ycombinator.com/item?id=44100082))

## Operating Systems and Development Tools

* [Linux cgroup from first principles](https://fzakaria.com/2025/05/26/linux-cgroup-from-first-principles) ([comments](https://lobste.rs/s/neetqy/linux_cgroup_from_first_principles))

* [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/) ([comments](https://news.ycombinator.com/item?id=44101691), [comments](https://lobste.rs/s/hxi9jj/access_control_syntax))

* [Sqawk: A fusion of SQL and Awk: Applying SQL to text-based data files](https://github.com/jgarzik/sqawk) ([comments](https://news.ycombinator.com/item?id=44101724))

* [Amoeba: a distributed operating system for the 1990s (1990)](https://www.cs.cornell.edu/home/rvr/papers/Amoeba1990s.pdf) ([comments](https://lobste.rs/s/se1hjr/amoeba_distributed_operating_system_for))

## Artificial Intelligence and Ethics

* [Nick Clegg Says Asking Artists For Use Permission Would 'Kill' the AI Industry](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the) ([comments](https://news.ycombinator.com/item?id=44100677))

* [Google Tries Funding Short Films Showing 'Less Nightmarish' Visions of AI](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Technology Innovations

* [Particle Life simulation in browser using WebGPU](https://lisyarus.github.io/blog/posts/particle-life-simulation-in-browser-using-webgpu.html) ([comments](https://news.ycombinator.com/item?id=44096808))

* [Lossless video compression using Bloom filters](https://github.com/ross39/new_bloom_filter_repo/blob/main/README.md) ([comments](https://news.ycombinator.com/item?id=44100179))

* [A new class of materials that can passively harvest water from air](https://blog.seas.upenn.edu/penn-engineers-discover-a-new-class-of-materials-that-passively-harvest-water-from-air/) ([comments](https://news.ycombinator.com/item?id=44097144))

* [WavePhoenix – open-source implementation of the Nintendo WaveBird protocol](https://github.com/loopj/wavephoenix) ([comments](https://news.ycombinator.com/item?id=44098442))

## Miscellaneous Highlights

* [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Turning Portal 2 into a Web Server](https://www.youtube.com/watch?v=-v5vCLLsqbA) ([comments](https://lobste.rs/s/uvwait/turning_portal_2_into_web_server))

* [Owls in Towels](https://owlsintowels.org/) ([comments](https://news.ycombinator.com/item?id=44101349))

* [DumPy: NumPy except it’s OK if you’re dum](https://dynomight.net/dumpy/) ([comments](https://lobste.rs/s/csrtzc/dumpy_numpy_except_it_s_ok_if_you_re_dum))

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

* [2025-05-27, 01:59:42](https://lobste.rs/s/neetqy/linux_cgroup_from_first_principles) - [Linux cgroup from first principles](https://fzakaria.com/2025/05/26/linux-cgroup-from-first-principles)
* [2025-05-27, 00:58:18](https://lobste.rs/s/xlmi11/conversation_game) - [The Conversation Game](https://www.airs.com/blog/archives/673)
* [2025-05-26, 22:53:51](https://news.ycombinator.com/item?id=44102376) - [GitHub MCP Exploited: Accessing Private Repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-26, 22:38:00](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 22:14:45](https://lobste.rs/s/se1hjr/amoeba_distributed_operating_system_for) - [Amoeba: a distributed operating system for the 1990s (1990)](https://www.cs.cornell.edu/home/rvr/papers/Amoeba1990s.pdf)
* [2025-05-26, 22:13:55](https://lobste.rs/s/3qy3uw/non_pointless_software_projects_for_new) - [Non-Pointless Software Projects for New Devs in the LLM Age](https://cprimozic.net/blog/non-pointless-software-projects-for-new-devs-in-the-llm-age/)
* [2025-05-26, 21:54:01](https://news.ycombinator.com/item?id=44102034) - [Power Failure](https://www.gwintrob.com/power-failure-review/)
* [2025-05-26, 21:31:07](https://news.ycombinator.com/item?id=44101875) - [Shenandoah Students Creating VR Experience Following the Lewis and Clark Trail](https://www.su.edu/blog/2025/05/21/shenandoah-students-creating-vr-experience-that-follows-the-lewis-and-clark-trail/)
* [2025-05-26, 21:25:56](https://news.ycombinator.com/item?id=44101833) - [Highlights from the Claude 4 system prompt](https://simonwillison.net/2025/May/25/claude-4-system-prompt/)
* [2025-05-26, 21:25:09](https://news.ycombinator.com/item?id=44101828) - [Get PC BIOS back on UEFI only system](https://github.com/FlyGoat/csmwrap)
* [2025-05-26, 21:19:18](https://news.ycombinator.com/item?id=44101787) - [Iron Spring PL/I Compiler](http://www.iron-spring.com/)
* [2025-05-26, 21:11:58](https://news.ycombinator.com/item?id=44101724) - [Sqawk: A fusion of SQL and Awk: Applying SQL to text-based data files](https://github.com/jgarzik/sqawk)
* [2025-05-26, 21:07:31](https://news.ycombinator.com/item?id=44101691) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 21:05:17](https://lobste.rs/s/hxi9jj/access_control_syntax) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 20:59:06](https://news.ycombinator.com/item?id=44101619) - [CSS Painting API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API)
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
* [2025-05-26, 18:20:18](https://news.ycombinator.com/item?id=44100082) - [Claude 4 and GitHub MCP will leak your private GitHub repositories](https://twitter.com/lbeurerkellner/status/1926991491735429514)
* [2025-05-26, 17:37:25](https://lobste.rs/s/l1gebi/isolates_compressed_references_more) - [Isolates and compressed references: more flexible and efficient memory management for GraalVM](https://medium.com/graalvm/isolates-and-compressed-references-more-flexible-and-efficient-memory-management-for-graalvm-a044cc50b67e)
* [2025-05-26, 17:33:00](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Putin Says Services Like Microsoft, Zoom Should Be &apos;Throttled&apos; in Russia](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 17:15:19](https://news.ycombinator.com/item?id=44099407) - [TSMC bets on unorthodox optical tech](https://spectrum.ieee.org/microled-optical-chiplet)
* [2025-05-26, 17:00:00](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan Allocates 2,000 Megawatts of Electricity To Bitcoin Mining, AI Data Centres](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 16:55:49](https://news.ycombinator.com/item?id=44099187) - [Show HN: PgDog – Shard Postgres without extensions](https://github.com/pgdogdev/pgdog)
* [2025-05-26, 16:37:02](https://news.ycombinator.com/item?id=44099006) - [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/)
* [2025-05-26, 16:05:21](https://news.ycombinator.com/item?id=44098706) - [Launch HN: Nomi (YC X25) – Copilot for Sales](https://news.ycombinator.com/item?id=44098706)
* [2025-05-26, 16:05:18](https://news.ycombinator.com/item?id=44098705) - [Creating Debian packages from upstream Git](https://optimizedbyotto.com/post/debian-packaging-from-git/)
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
* [2025-05-25, 22:49:00](https://slashdot.org/story/25/05/25/2247212/openais-chatgpt-o3-caught-sabotaging-shutdowns-in-security-researchers-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s ChatGPT O3 Caught Sabotaging Shutdowns in Security Researcher&apos;s Test](https://slashdot.org/story/25/05/25/2247212/openais-chatgpt-o3-caught-sabotaging-shutdowns-in-security-researchers-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 21:22:00](https://developers.slashdot.org/story/25/05/25/2120232/python-can-now-call-code-written-in-chris-lattners-mojo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python Can Now Call Code Written in Chris Lattner&apos;s Mojo](https://developers.slashdot.org/story/25/05/25/2120232/python-can-now-call-code-written-in-chris-lattners-mojo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 21:08:03](https://lobste.rs/s/bn9qeo/car_physics_for_games) - [Car Physics for Games](https://www.asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html)
* [2025-05-25, 18:52:44](https://lobste.rs/s/jovc75/plwm_x11_window_manager_written_prolog) - [plwm: An X11 window manager written in Prolog](https://github.com/Seeker04/plwm)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 10:24:35](https://news.ycombinator.com/item?id=44086830) - [Mathpad: A mathematical keypad for students and professionals](https://github.com/Summa-Cogni/Mathpad)
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
* [2025-05-23, 23:27:47](https://news.ycombinator.com/item?id=44077531) - [Ultra-low power, miniature electrophysiological electronics](https://starfishneuroscience.com/blog/ultra-low-power-miniature-electrophysiological-electronics/)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-23, 01:28:15](https://news.ycombinator.com/item?id=44068945) - [New DSL \&quot;MassQL\&quot; lets scientists query mass spectrometry data](https://news.ucr.edu/articles/2025/05/12/new-computer-language-helps-spot-hidden-pollutants)
