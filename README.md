# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Updates and Innovations

* [25% iPhone Tariff Insufficient To Drive US Production Shift, Morgan Stanley Says](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis claims tariffs are not sufficient to influence Apple's manufacturing location decisions. [Comments](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/) - A fascinating transition of the popular site to a Common Lisp backend. [Comments](https://lobste.rs/s/vypfzm/hacker_news_now_runs_on_top_common_lisp).

* [The Myth of Developer Obsolescence](https://alonso.network/the-recurring-cycle-of-developer-replacement-hype/) - Dispelling fears around technological advances replacing developers. [Comments](https://news.ycombinator.com/item?id=44105592).

* [LiveStore: State management based on reactive SQLite and built-in sync engine](https://livestore.dev) - Exploring innovative state management solutions for developers. [Comments](https://news.ycombinator.com/item?id=44105412).

## Nature and Science Discoveries

* [How a hawk learned to use traffic signals to hunt more successfully](https://www.frontiersin.org/news/2025/05/23/street-smarts-hawk-use-traffic-signals-hunting) - Unique adaptation techniques observed in hawks. [Comments](https://news.ycombinator.com/item?id=44105965).

* [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&from=rss) - Paving the way for innovative treatments for Alzheimer’s. [Comments](https://soylentnews.org/article.pl?sid=25/05/27/0515241&from=rss).

* [Evidence for 'Planet Nine' Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&from=rss) - Strengthening the case for a mysterious ninth planet. [Comments](https://soylentnews.org/article.pl?sid=25/05/24/1755248&from=rss).

## Security Insights

* [GitHub MCP Exploited: Accessing private repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability) - A vulnerability in GitHub highlights security risks. [Comments](https://lobste.rs/s/xjnjwd/github_mcp_exploited_accessing_private).

* [BGP handling bug causes widespread internet routing instability](https://blog.benjojo.co.uk/post/bgp-attr-40-junos-arista-session-reset-incident) - Critical analysis of a major internet routing bug. [Comments](https://news.ycombinator.com/item?id=44105796).

* [Positive Proof-of-Concept Experiments May Lead to the World’s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&from=rss) - Potential breakthrough in treating autoimmune conditions. [Comments](https://soylentnews.org/article.pl?sid=25/05/25/0833214&from=rss).

## Cultural and Historical Highlights

* [Remembering John Young, Co-founder of Web Archive Cryptome](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reflecting on the legacy of a digital preservation pioneer. [Comments](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Luciole Math: a typeface developed explicitly for visually impaired academics](https://luciole-vision.com/en/math.html) - Enhancing accessibility for visually impaired scholars. [Comments](https://lobste.rs/s/r1uzrt/luciole_math_typeface_developed).

* [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&from=rss) - Debunking a historical misunderstanding. [Comments](https://soylentnews.org/article.pl?sid=25/05/24/1730251&from=rss).

## Industry and Financial Developments

* [Nikon To Raise Camera Prices in the US Because of Tariffs](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tariffs continue to influence consumer electronics. [Comments](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [VCs Are Acquiring Mature Businesses To Retrofit With AI](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Venture capital pivots towards AI sector opportunities. [Comments](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Europe Warns Giant E-tailer To Stop Cheating Consumers or Face Its Wrath](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Regulatory measures tighten on major online retailers. [Comments](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&utm_medium=feed).

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

* [2025-05-27, 12:07:00](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [25% iPhone Tariff Insufficient To Drive US Production Shift, Morgan Stanley Says](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 11:46:30](https://news.ycombinator.com/item?id=44105965) - [How a hawk learned to use traffic signals to hunt more successfully](https://www.frontiersin.org/news/2025/05/23/street-smarts-hawk-use-traffic-signals-hunting)
* [2025-05-27, 11:38:44](https://lobste.rs/s/vdzcfg/two_types_open_source) - [The two types of open source](https://filiph.net/text/two-types-of-open-source.html)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 11:19:08](https://news.ycombinator.com/item?id=44105815) - [Can It Run Doom? An Archive of All Known Ports](https://canitrundoom.org/)
* [2025-05-27, 11:15:15](https://news.ycombinator.com/item?id=44105796) - [BGP handling bug causes widespread internet routing instability](https://blog.benjojo.co.uk/post/bgp-attr-40-junos-arista-session-reset-incident)
* [2025-05-27, 11:02:09](https://lobste.rs/s/doxs7v/love_hate_otel_using_it_while_avoiding) - [love-hate and otel: using it while avoiding complexity](https://github.com/jonjohnsonjr/til/blob/main/post/otel.md)
* [2025-05-27, 10:55:54](https://news.ycombinator.com/item?id=44105696) - [Canon Law Ninja](https://canonlaw.ninja/)
* [2025-05-27, 10:39:30](https://news.ycombinator.com/item?id=44105619) - [LumoSQL](https://lumosql.org/src/lumosql/doc/trunk/README.md)
* [2025-05-27, 10:37:13](https://lobste.rs/s/9il6wq/relocation_generation_assemblers) - [Relocation generation in assemblers](https://maskray.me/blog/2025-03-16-relocation-generation-in-assemblers)
* [2025-05-27, 10:33:56](https://news.ycombinator.com/item?id=44105592) - [The Myth of Developer Obsolescence](https://alonso.network/the-recurring-cycle-of-developer-replacement-hype/)
* [2025-05-27, 10:29:39](https://lobste.rs/s/zpho44/rust_streams_timeouts_gotcha) - [Rust streams and timeouts gotcha](https://laplab.me/posts/rust-streams-gotcha/)
* [2025-05-27, 10:12:44](https://lobste.rs/s/vypfzm/hacker_news_now_runs_on_top_common_lisp) - [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/)
* [2025-05-27, 10:06:52](https://lobste.rs/s/5zxtyf/tiny_models_local_throttles_exploring_my) - [Tiny Models, Local Throttles: Exploring My Local AI Dev Setup](https://blog.nilenso.com/blog/2025/05/06/local-llm-setup/)
* [2025-05-27, 10:06:30](https://lobste.rs/s/xjnjwd/github_mcp_exploited_accessing_private) - [GitHub MCP Exploited: Accessing private repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-27, 10:03:00](https://news.ycombinator.com/item?id=44105470) - [Revisiting the Algorithm That Changed Horse Race Betting](https://actamachina.com/posts/annotated-benter-paper)
* [2025-05-27, 10:00:00](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Do People Want?](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 09:50:04](https://news.ycombinator.com/item?id=44105412) - [LiveStore: State management based on reactive SQLite and built-in sync engine](https://livestore.dev)
* [2025-05-27, 09:49:00](https://lobste.rs/s/y5kllu/mcp_explained_without_hype_fluff) - [MCP explained without hype or fluff](https://blog.nilenso.com/blog/2025/05/12/mcp-explained-without-hype-or-fluff/)
* [2025-05-27, 09:00:08](https://lobste.rs/s/r1uzrt/luciole_math_typeface_developed) - [Luciole Math: a typeface developed explicitly for visually impaired academics](https://luciole-vision.com/en/math.html)
* [2025-05-27, 08:00:00](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Europe Warns Giant E-tailer To Stop Cheating Consumers or Face Its Wrath](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 07:00:41](https://news.ycombinator.com/item?id=44104573) - [Diligent (YC S23) Is Hiring a Founding AI Engineer](https://www.ycombinator.com/companies/diligent/jobs/LAdzmYb-founding-ai-engineer)
* [2025-05-27, 06:52:31](https://lobste.rs/s/aaicyj/github_mcp_exploited_accessing_private) - [GitHub MCP Exploited: Accessing private repositories via MCP](https://simonwillison.net/2025/May/26/github-mcp-exploited/)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 06:13:00](https://news.slashdot.org/story/25/05/27/0414218/immigration-is-the-only-thing-propping-up-californias-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Immigration Is the Only Thing Propping Up California&apos;s Population](https://news.slashdot.org/story/25/05/27/0414218/immigration-is-the-only-thing-propping-up-californias-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 04:52:38](https://news.ycombinator.com/item?id=44104008) - [Mesa3D Drivers for Windows](https://github.com/pal1000/mesa-dist-win)
* [2025-05-27, 03:58:07](https://news.ycombinator.com/item?id=44103839) - [Show HN: Lazy Tetris](https://lazytetris.com/)
* [2025-05-27, 03:57:00](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nikon To Raise Camera Prices in the US Because of Tariffs](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 03:21:47](https://lobste.rs/s/errguk/memory_access_patterns_are_important) - [Memory Access Patterns Are Important](https://mechanical-sympathy.blogspot.com/2012/08/memory-access-patterns-are-important.html)
* [2025-05-27, 03:16:38](https://lobste.rs/s/znx8q8/five_year_review_bqn_design) - [Five-year review of BQN design](https://mlochbaum.github.io/BQN/commentary/fiveyears.html)
* [2025-05-27, 02:09:00](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering John Young, Co-founder of Web Archive Cryptome](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 01:59:42](https://lobste.rs/s/neetqy/linux_cgroup_from_first_principles) - [Linux cgroup from first principles](https://fzakaria.com/2025/05/26/linux-cgroup-from-first-principles)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-27, 01:23:31](https://news.ycombinator.com/item?id=44103131) - [The UI future is colourful and dimensional](https://www.flarup.email/p/the-future-is-colourful-and-dimensional)
* [2025-05-27, 01:11:04](https://news.ycombinator.com/item?id=44103071) - [Calendars, Contacts and Files in Stalwart](https://stalw.art/blog/collaboration/)
* [2025-05-27, 00:52:43](https://news.ycombinator.com/item?id=44102988) - [FromSoft&apos;s singular mech game Chromehounds is back online](https://www.readonlymemo.com/interview-15-years-after-the-servers-shut-down-fromsofts-singular-mech-game-chromehounds-is-back-online/)
* [2025-05-26, 22:38:00](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 22:13:55](https://lobste.rs/s/3qy3uw/non_pointless_software_projects_for_new) - [Non-Pointless Software Projects for New Devs in the LLM Age](https://cprimozic.net/blog/non-pointless-software-projects-for-new-devs-in-the-llm-age/)
* [2025-05-26, 21:54:01](https://news.ycombinator.com/item?id=44102034) - [Power Failure: The downfall of General Electric](https://www.gwintrob.com/power-failure-review/)
* [2025-05-26, 21:25:56](https://news.ycombinator.com/item?id=44101833) - [Highlights from the Claude 4 system prompt](https://simonwillison.net/2025/May/25/claude-4-system-prompt/)
* [2025-05-26, 21:25:09](https://news.ycombinator.com/item?id=44101828) - [Get PC BIOS back on UEFI only system](https://github.com/FlyGoat/csmwrap)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 21:05:17](https://lobste.rs/s/hxi9jj/access_control_syntax) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 20:30:00](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nick Clegg Says Asking Artists For Use Permission Would &apos;Kill&apos; the AI Industry](https://tech.slashdot.org/story/25/05/26/2026200/nick-clegg-says-asking-artists-for-use-permission-would-kill-the-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 20:27:59](https://news.ycombinator.com/item?id=44101349) - [Owls in Towels](https://owlsintowels.org/)
* [2025-05-26, 20:10:44](https://lobste.rs/s/zoztf9/acronis_true_image_costs_performance) - [Acronis True Image Costs Performance When Not Used](https://randomascii.wordpress.com/2025/05/26/acronis-true-image-costs-performance-when-not-used/)
* [2025-05-26, 20:10:10](https://lobste.rs/s/ltldco/ash_hybrid_between_getopts_sh_c) - [ash: a hybrid between getopts and &apos;sh -c&apos;](https://github.com/avamsi/ash)
* [2025-05-26, 20:06:15](https://lobste.rs/s/myqawl/jjui_text_user_interface_tui_for_jujutsu) - [jjui: a text user interface (TUI) for the Jujutsu version control system](https://github.com/idursun/jjui)
* [2025-05-26, 19:52:00](https://news.slashdot.org/story/25/05/26/1952223/the-newark-airport-crisis-is-about-to-become-everyones-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Newark Airport Crisis is About To Become Everyone&apos;s Problem](https://news.slashdot.org/story/25/05/26/1952223/the-newark-airport-crisis-is-about-to-become-everyones-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 19:20:19](https://news.ycombinator.com/item?id=44100677) - [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the)
* [2025-05-26, 18:32:02](https://news.ycombinator.com/item?id=44100179) - [Lossless video compression using Bloom filters](https://github.com/ross39/new_bloom_filter_repo/blob/main/README.md)
* [2025-05-26, 18:28:43](https://news.ycombinator.com/item?id=44100148) - [CSS Minecraft](https://benjaminaster.com/css-minecraft/)
* [2025-05-26, 17:33:00](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Putin Says Services Like Microsoft, Zoom Should Be &apos;Throttled&apos; in Russia](https://tech.slashdot.org/story/25/05/26/1733256/putin-says-services-like-microsoft-zoom-should-be-throttled-in-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 17:15:19](https://news.ycombinator.com/item?id=44099407) - [TSMC bets on unorthodox optical tech](https://spectrum.ieee.org/microled-optical-chiplet)
* [2025-05-26, 17:00:00](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan Allocates 2,000 Megawatts of Electricity To Bitcoin Mining, AI Data Centres](https://slashdot.org/story/25/05/26/1549251/pakistan-allocates-2000-megawatts-of-electricity-to-bitcoin-mining-ai-data-centres?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 16:55:49](https://news.ycombinator.com/item?id=44099187) - [Show HN: PgDog – Shard Postgres without extensions](https://github.com/pgdogdev/pgdog)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 16:05:21](https://news.ycombinator.com/item?id=44098706) - [Launch HN: Nomi (YC X25) – Copilot for Sales](https://news.ycombinator.com/item?id=44098706)
* [2025-05-26, 15:41:00](https://developers.slashdot.org/story/25/05/26/1541224/at-amazon-some-coders-say-their-jobs-have-begun-to-resemble-warehouse-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Amazon, Some Coders Say Their Jobs Have Begun To Resemble Warehouse Work](https://developers.slashdot.org/story/25/05/26/1541224/at-amazon-some-coders-say-their-jobs-have-begun-to-resemble-warehouse-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 15:00:00](https://mobile.slashdot.org/story/25/05/26/1457242/docomo-emoji-set-to-be-officially-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Docomo Emoji Set To Be Officially Discontinued](https://mobile.slashdot.org/story/25/05/26/1457242/docomo-emoji-set-to-be-officially-discontinued?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 14:00:00](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VCs Are Acquiring Mature Businesses To Retrofit With AI](https://slashdot.org/story/25/05/26/077232/vcs-are-acquiring-mature-businesses-to-retrofit-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 13:46:25](https://news.ycombinator.com/item?id=44097390) - [GitHub MCP exploited: Accessing private repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-26, 13:30:34](https://lobste.rs/s/n0whur/against_curry_howard_mysticism) - [Against Curry-Howard Mysticism](https://liamoc.net/forest/loc-000S/index.xml)
* [2025-05-26, 13:27:06](https://lobste.rs/s/csrtzc/dumpy_numpy_except_it_s_ok_if_you_re_dum) - [DumPy: NumPy except it’s OK if you’re dum](https://dynomight.net/dumpy/)
* [2025-05-26, 11:57:18](https://lobste.rs/s/xzieif/asserting_implications) - [Asserting Implications](https://tigerbeetle.com/blog/2025-05-26-asserting-implications/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 11:34:00](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Google Tries Funding Short Films Showing &apos;Less Nightmarish&apos; Visions of AI](https://tech.slashdot.org/story/25/05/26/0625255/google-tries-funding-short-films-showing-less-nightmarish-visions-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 10:52:34](https://lobste.rs/s/5anwqo/html_is_like_camera) - [HTML is like a camera](https://robbowen.digital/wrote-about/html-is-like-a-camera/)
* [2025-05-26, 09:29:23](https://lobste.rs/s/rprjch/you_can_choose_tools_make_you_happy) - [You Can Choose Tools That Make You Happy](https://borretti.me/article/you-can-choose-tools-that-make-you-happy)
* [2025-05-26, 08:51:58](https://lobste.rs/s/1fu1tm/i_made_font) - [I made a font](https://blog.chay.dev/i-made-a-font/)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 03:40:31](https://lobste.rs/s/dy0ljq/smarter_simpler_firefox_address_bar) - [A smarter, simpler Firefox address bar](https://blog.mozilla.org/en/firefox/address-bar/)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 13:33:24](https://news.ycombinator.com/item?id=44087707) - [OpenPOWER Foundation – Open-Source / Open Hardware PowerPC CPU ISA](https://openpowerfoundation.org/)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 06:48:39](https://news.ycombinator.com/item?id=44086062) - [Clojure MCP](https://github.com/bhauman/clojure-mcp)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 20:06:19](https://news.ycombinator.com/item?id=44083474) - [Worlds first petahertz transistor at ambient conditions](https://news.arizona.edu/news/u-researchers-developing-worlds-first-petahertz-speed-phototransistor-ambient-conditions)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 11:05:18](https://news.ycombinator.com/item?id=44071722) - [Rock, paper, scissors showdown](https://luduxia.com/showdown/)
* [2025-05-23, 09:33:46](https://news.ycombinator.com/item?id=44071321) - [Ask HN: What projects do you donate to?](https://news.ycombinator.com/item?id=44071321)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
