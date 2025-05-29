# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Its Impacts

* [Anthropic CEO Warns AI Could Eliminate Half of All Entry-Level White-Collar Jobs Within Five Years](https://developers.slashdot.org/story/25/05/29/1835258/anthropic-ceo-warns-ai-could-eliminate-half-of-all-entry-level-white-collar-jobs-within-five-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Superhuman performance of an LLM on the reasoning tasks of a physician](https://arxiv.org/abs/2412.10849) - Discusses breakthroughs in AI solving complex reasoning problems.

* [Stack Overflow's Radical New Plan To Fight AI-Induced Death Spiral](https://developers.slashdot.org/story/25/05/29/1921248/stack-overflows-radical-new-plan-to-fight-ai-induced-death-spiral?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Researchers Warn Against Treating AI Outputs as Human-Like Reasoning](https://tech.slashdot.org/story/25/05/29/1411236/researchers-warn-against-treating-ai-outputs-as-human-like-reasoning?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&from=rss)

## Engineering and Infrastructure Innovations

* [California has got good at building giant batteries](https://www.economist.com/united-states/2025/05/22/california-has-got-really-good-at-building-giant-batteries) - Highlights the state's advancements in energy storage infrastructure.

* [University Of Arizona Scientists Unveil Breakthrough Petahertz-Speed Transistor](https://soylentnews.org/article.pl?sid=25/05/28/1749257&from=rss)

## Cybersecurity

* [ASUS Router Backdoors Affect 9,000 Devices, Persists After Firmware Updates](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Kea DHCP: Local Vulnerabilities in many Linux and BSD Distributions](https://security.opensuse.org/2025/05/28/kea-dhcp-security-issues.html)

## Technology and Software Developments

* [Nova: A JavaScript and WebAssembly engine written in Rust](https://trynova.dev/) - Explores a high-performance engine leveraging modern programming approaches.

* [Open-sourcing circuit tracing tools](https://www.anthropic.com/research/open-source-circuit-tracing)

* [The case for using a web browser as your terminal](https://blog.pomdtr.me/posts/tweety-v1/)

## Science and Space Insights

* [Astronomers Discover Mystery Cosmic Body Bursting With X-Rays](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&from=rss)

* [Evidence for 'Planet Nine' Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&from=rss)

## Climate and Environmental Challenges

* [World Faces New Danger of 'Economic Denial' in Climate Fight, Cop30 Head Says](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [India Needs To Turn the Air-Con On](https://news.slashdot.org/story/25/05/29/2011206/india-needs-to-turn-the-air-con-on?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-05-29, 21:50:19](https://lobste.rs/s/cubwue/this_website_does_not_exist) - [This website does not exist](https://thiswebsitedoesnotexist.net/)
* [2025-05-29, 21:40:00](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Router Backdoors Affect 9,000 Devices, Persists After Firmware Updates](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 21:02:00](https://tech.slashdot.org/story/25/05/29/2028234/china-summons-top-carmakers-over-zero-mileage-used-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Summons Top Carmakers Over &apos;Zero-Mileage&apos; Used Vehicles](https://tech.slashdot.org/story/25/05/29/2028234/china-summons-top-carmakers-over-zero-mileage-used-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 20:51:02](https://lobste.rs/s/qnrz7c/which_new_language_should_i_learn_for_web) - [Which New Language Should I Learn for Web Development?](https://mtlynch.io/notes/which-new-language/)
* [2025-05-29, 20:44:46](https://news.ycombinator.com/item?id=44130226) - [Superhuman performance of an LLM on the reasoning tasks of a physician](https://arxiv.org/abs/2412.10849)
* [2025-05-29, 20:37:25](https://lobste.rs/s/dj960n/net_negative_cursor_lukas_atkinson) - [Net-Negative Cursor | Lukas Atkinson](https://lukasatkinson.de/2025/net-negative-cursor/)
* [2025-05-29, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss) - [Russia is Still Swimming in New Intel and AMD Chips Thanks to Sanction \&quot;Workarounds\&quot;](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss)
* [2025-05-29, 20:21:00](https://news.slashdot.org/story/25/05/29/2011206/india-needs-to-turn-the-air-con-on?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Needs To Turn the Air-Con On](https://news.slashdot.org/story/25/05/29/2011206/india-needs-to-turn-the-air-con-on?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 20:05:59](https://lobste.rs/s/sswikt/making_openat_2_friends_more_useful) - [Making openat(2) and friends more useful in practice](https://undeadly.org/cgi?action=article;sid=20250529080623)
* [2025-05-29, 19:53:27](https://lobste.rs/s/vjil64/kea_dhcp_local_vulnerabilities_many) - [Kea DHCP: Local Vulnerabilities in many Linux and BSD Distributions](https://security.opensuse.org/2025/05/28/kea-dhcp-security-issues.html)
* [2025-05-29, 19:48:13](https://news.ycombinator.com/item?id=44129603) - [California has got good at building giant batteries](https://www.economist.com/united-states/2025/05/22/california-has-got-really-good-at-building-giant-batteries)
* [2025-05-29, 19:42:20](https://news.ycombinator.com/item?id=44129529) - [Untrusted chatbot AI between you &amp; the internet is a disaster waiting to happen](https://macwright.com/2025/05/29/putting-an-untrusted-chat-layer-is-a-disaster)
* [2025-05-29, 19:40:00](https://developers.slashdot.org/story/25/05/29/1921248/stack-overflows-radical-new-plan-to-fight-ai-induced-death-spiral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow&apos;s Radical New Plan To Fight AI-Induced Death Spiral](https://developers.slashdot.org/story/25/05/29/1921248/stack-overflows-radical-new-plan-to-fight-ai-induced-death-spiral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 19:01:00](https://developers.slashdot.org/story/25/05/29/1835258/anthropic-ceo-warns-ai-could-eliminate-half-of-all-entry-level-white-collar-jobs-within-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Warns AI Could Eliminate Half of All Entry-Level White-Collar Jobs Within Five Years](https://developers.slashdot.org/story/25/05/29/1835258/anthropic-ceo-warns-ai-could-eliminate-half-of-all-entry-level-white-collar-jobs-within-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 18:39:22](https://news.ycombinator.com/item?id=44128901) - [Airlines are charging solo passengers higher fares than groups](https://thriftytraveler.com/news/airlines/airlines-charging-solo-travelers-higher-fares/)
* [2025-05-29, 18:28:18](https://lobste.rs/s/giokgl/systems_correctness_practices_at_amazon) - [Systems Correctness Practices at Amazon Web Services](https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/)
* [2025-05-29, 18:25:00](https://entertainment.slashdot.org/story/25/05/29/1825254/theres-more-film-and-television-for-you-to-watch-than-ever-before---good-luck-finding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s More Film and Television For You To Watch Than Ever Before - Good Luck Finding It](https://entertainment.slashdot.org/story/25/05/29/1825254/theres-more-film-and-television-for-you-to-watch-than-ever-before---good-luck-finding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 17:40:35](https://news.ycombinator.com/item?id=44128322) - [FLUX.1 Kontext](https://bfl.ai/models/flux-kontext)
* [2025-05-29, 17:38:00](https://news.slashdot.org/story/25/05/29/1738234/demand-for-american-degrees-has-already-hit-covid-era-lows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Demand For American Degrees Has Already Hit Covid-Era Lows](https://news.slashdot.org/story/25/05/29/1738234/demand-for-american-degrees-has-already-hit-covid-era-lows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 17:21:51](https://lobste.rs/s/omtuek/coming_ai_revolution_distributed) - [The Coming AI Revolution in Distributed Systems](https://zfhuang99.github.io/github%20copilot/formal%20verification/tla+/2025/05/24/ai-revolution-in-distributed-systems.html)
* [2025-05-29, 17:16:54](https://news.ycombinator.com/item?id=44128101) - [Open-sourcing circuit tracing tools](https://www.anthropic.com/research/open-source-circuit-tracing)
* [2025-05-29, 17:01:18](https://news.ycombinator.com/item?id=44127948) - [Infisical (YC W23) Is Hiring Full Stack Engineers (TypeScript) in US and Canada](https://www.ycombinator.com/companies/infisical/jobs/vGwCQVk-full-stack-engineer-us-canada)
* [2025-05-29, 16:52:45](https://lobste.rs/s/loydfp/break_from_programming_languages) - [A break from programming languages](https://lexi-lambda.github.io/blog/2025/05/29/a-break-from-programming-languages/)
* [2025-05-29, 16:50:00](https://linux.slashdot.org/story/25/05/29/1650210/linux-format-ceases-publication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Format Ceases Publication](https://linux.slashdot.org/story/25/05/29/1650210/linux-format-ceases-publication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 16:41:04](https://news.ycombinator.com/item?id=44127739) - [Human coders are still better than LLMs](https://antirez.com/news/153)
* [2025-05-29, 16:04:00](https://news.slashdot.org/story/25/05/29/164217/california-has-got-really-good-at-building-giant-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Has Got Really Good at Building Giant Batteries](https://news.slashdot.org/story/25/05/29/164217/california-has-got-really-good-at-building-giant-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 15:55:00](https://lobste.rs/s/1j1muh/learning_c3) - [Learning C3](https://alloc.dev/2025/05/29/learning_c3)
* [2025-05-29, 15:48:00](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss) - [University Of Arizona Scientists Unveil Breakthrough Petahertz-Speed Transistor](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss)
* [2025-05-29, 15:43:56](https://news.ycombinator.com/item?id=44127177) - [Civil War in 3D: Stereographs from the New-York Historical Society (2015)](https://www.nyhistory.org/blogs/civil-war-in-3d-stereographs-from-the-new-york-historical-society)
* [2025-05-29, 15:43:33](https://news.ycombinator.com/item?id=44127173) - [Putting Rigid Bodies to Rest](https://twitter.com/keenanisalive/status/1925225500659658999)
* [2025-05-29, 15:38:45](https://news.ycombinator.com/item?id=44127109) - [WeatherStar 4000+: Weather Channel Simulator](https://weatherstar.netbymatt.com/)
* [2025-05-29, 15:30:17](https://news.ycombinator.com/item?id=44127027) - [The flip phone web: browsing with the original Opera Mini](https://www.spacebar.news/the-flip-phone-web-browsing-with-the-original-opera-mini/)
* [2025-05-29, 15:28:00](https://apple.slashdot.org/story/25/05/29/1528238/macos-26-may-not-support-2018-macbook-pros-2019-imacs-or-the-imac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS 26 May Not Support 2018 MacBook Pros, 2019 iMacs, or the iMac Pro](https://apple.slashdot.org/story/25/05/29/1528238/macos-26-may-not-support-2018-macbook-pros-2019-imacs-or-the-imac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 14:57:25](https://news.ycombinator.com/item?id=44126725) - [Web Bench: a new way to compare AI browser agents](https://blog.skyvern.com/web-bench-a-new-way-to-compare-ai-browser-agents/)
* [2025-05-29, 14:51:03](https://lobste.rs/s/9j9wdi/case_for_using_web_browser_as_your) - [The case for using a web browser as your terminal](https://blog.pomdtr.me/posts/tweety-v1/)
* [2025-05-29, 14:50:00](https://slashdot.org/story/25/05/29/1450252/hp-hastens-china-exit-as-tariffs-kick-a-hole-in-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Hastens China Exit as Tariffs Kick a Hole in its Profits](https://slashdot.org/story/25/05/29/1450252/hp-hastens-china-exit-as-tariffs-kick-a-hole-in-its-profits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 14:44:33](https://news.ycombinator.com/item?id=44126612) - [Show HN: I wrote a modern Command Line Handbook](https://commandline.stribny.name/)
* [2025-05-29, 14:21:06](https://lobste.rs/s/gpntsk/redesigning_initial_bootstrap_sequence) - [Redesigning the Initial Bootstrap Sequence](https://blog.rust-lang.org/inside-rust/2025/05/29/redesigning-the-initial-bootstrap-sequence/)
* [2025-05-29, 14:11:00](https://tech.slashdot.org/story/25/05/29/1411236/researchers-warn-against-treating-ai-outputs-as-human-like-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Warn Against Treating AI Outputs as Human-Like Reasoning](https://tech.slashdot.org/story/25/05/29/1411236/researchers-warn-against-treating-ai-outputs-as-human-like-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 14:10:59](https://lobste.rs/s/gg9khs/profiling_websites) - [Profiling Websites](https://www.marginalia.nu/log/a_121_profiling_websites/)
* [2025-05-29, 14:05:27](https://news.ycombinator.com/item?id=44126264) - [Nova: A JavaScript and WebAssembly engine written in Rust](https://trynova.dev/)
* [2025-05-29, 13:33:31](https://news.ycombinator.com/item?id=44125966) - [Learning C3](https://alloc.dev/2025/05/29/learning_c3)
* [2025-05-29, 13:24:28](https://lobste.rs/s/mzm2kk/how_fix_email_encryption) - [How to fix email encryption](https://weddige.eu/en/articles/lets-encrypt-emails/)
* [2025-05-29, 13:00:00](https://slashdot.org/story/25/05/28/2239206/ai-may-already-be-shrinking-entry-level-jobs-in-tech-new-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI May Already Be Shrinking Entry-Level Jobs In Tech, New Research Suggests](https://slashdot.org/story/25/05/28/2239206/ai-may-already-be-shrinking-entry-level-jobs-in-tech-new-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 12:39:24](https://news.ycombinator.com/item?id=44125489) - [I started a little math club in Bangalore](https://teachyourselfmath.app/club)
* [2025-05-29, 11:18:04](https://lobste.rs/s/0hfgse/what_s_cooking_on_sourcehut_q2_2025) - [What&apos;s cooking on SourceHut? Q2 2025](https://sourcehut.org/blog/2025-05-29-whats-cooking-q2/)
* [2025-05-29, 11:06:00](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss) - [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)
* [2025-05-29, 11:04:21](https://news.ycombinator.com/item?id=44124808) - [Simple programming language with offline usable browser IDE](https://tiki.li/apps/tut_learn.html?v=2505e)
* [2025-05-29, 10:42:27](https://lobste.rs/s/gwlgay/golden_file_testing) - [Golden File Testing](https://matttproud.com/blog/posts/golden-file-testing.html)
* [2025-05-29, 10:22:57](https://lobste.rs/s/hkhmdn/helonium_s_hartree_fock_program) - [Helonium&apos;s Hartree-Fock program](https://panadestein.github.io/blog/posts/hf.html)
* [2025-05-29, 10:05:53](https://lobste.rs/s/e7ybwh/terraria_celeste_ported_webassembly) - [Terraria and Celeste ported to WebAssembly](https://velzie.rip/blog/celeste-wasm)
* [2025-05-29, 10:01:21](https://lobste.rs/s/ovdyqg/openbao_v2_3_now_supports_namespaces) - [OpenBao v2.3 now supports Namespaces (HashiCorp Vault fork)](https://openbao.org/blog/namespaces-announcement/)
* [2025-05-29, 10:00:00](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Faces New Danger of &apos;Economic Denial&apos; in Climate Fight, Cop30 Head Says](https://news.slashdot.org/story/25/05/28/2048209/world-faces-new-danger-of-economic-denial-in-climate-fight-cop30-head-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 07:33:02](https://news.ycombinator.com/item?id=44123852) - [Gurus of 90s Web Design: Zeldman, Siegel, Nielsen](https://cybercultural.com/p/web-design-1997/)
* [2025-05-29, 07:00:00](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Mystery Cosmic Body Bursting With X-Rays](https://science.slashdot.org/story/25/05/29/0238200/astronomers-discover-mystery-cosmic-body-bursting-with-x-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 06:15:00](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) - [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)
* [2025-05-29, 05:58:07](https://news.ycombinator.com/item?id=44123486) - [The Maid Who Restored Charles II](https://www.historytoday.com/archive/feature/maid-who-restored-charles-ii)
* [2025-05-29, 04:23:11](https://news.ycombinator.com/item?id=44123098) - [Show HN: Typed-FFmpeg 3.0–Typed Interface to FFmpeg and Visual Filter Editor](https://github.com/livingbio/typed-ffmpeg)
* [2025-05-29, 02:30:28](https://news.ycombinator.com/item?id=44122582) - [Run a C# file directly using dotnet run app.cs](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/)
* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
* [2025-05-28, 22:36:26](https://lobste.rs/s/uw4lp1/go_may_require_prefaulting_mmap) - [go may require prefaulting mmap](https://flak.tedunangst.com/post/go-may-require-prefaulting-mmap)
* [2025-05-28, 22:24:19](https://news.ycombinator.com/item?id=44121194) - [Why are some rocks on the moon highly magnetic?](https://news.mit.edu/2025/why-are-some-rocks-on-moon-highly-magnetic-0523)
* [2025-05-28, 22:02:47](https://lobste.rs/s/029ntw/parking_lot_ffffffffffffffff) - [parking_lot: ffffffffffffffff](https://fly.io/blog/parking-lot-ffffffffffffffff/)
* [2025-05-28, 20:49:00](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss) - [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss)
* [2025-05-28, 20:38:43](https://lobste.rs/s/s6utq0/saying_bye_glitch) - [Saying Bye to Glitch](https://pketh.org/bye-glitch.html)
* [2025-05-28, 20:21:47](https://news.ycombinator.com/item?id=44120306) - [A visual exploration of vector embeddings](http://blog.pamelafox.org/2025/05/a-visual-exploration-of-vector.html)
* [2025-05-28, 19:51:25](https://lobste.rs/s/ghh3w5/using_sat_get_world_record_on_linkedin_s) - [Using SAT to Get the World Record on LinkedIn&apos;s Queens](https://ryanberger.me/posts/queens/)
* [2025-05-28, 19:34:34](https://lobste.rs/s/rqc5yc/compiler_explorer_promise_urls_last) - [Compiler Explorer and the Promise of URLs That Last Forever](https://xania.org/202505/compiler-explorer-urls-forever)
* [2025-05-28, 17:35:48](https://lobste.rs/s/42qb2p/i_am_disappointed_ai_discourse) - [I am disappointed in the AI discourse](https://steveklabnik.com/writing/i-am-disappointed-in-the-ai-discourse/)
* [2025-05-28, 16:04:00](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss) - [Telescope Upgrade Reveals Sun&apos;s \&quot;Coronal Rain\&quot; In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss)
* [2025-05-28, 11:53:47](https://news.ycombinator.com/item?id=44114982) - [My website is ugly because I made it](https://goodinternetmagazine.com/my-website-is-ugly-because-i-made-it/)
* [2025-05-28, 11:19:00](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss) - [iPhone Won&apos;t Be Made In US Anytime Soon: Analysts ](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss)
* [2025-05-28, 09:40:28](https://lobste.rs/s/byk1vh/personal_software_runtime_inspired_by) - [A Personal Software Runtime inspired by Emacs, Plan 9, Erlang, Hypermedia, and Unix](https://github.com/leoshimo/vrs)
* [2025-05-28, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss) - [The CIA Used A Star Wars Fan Site To Secretly Communicate With Spies](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss)
* [2025-05-28, 04:13:00](https://news.ycombinator.com/item?id=44112686) - [The Polymarket users betting on when Jesus will return](https://ericneyman.wordpress.com/2025/03/24/will-jesus-christ-return-in-an-election-year/)
* [2025-05-28, 01:47:00](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss) - [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 15:52:49](https://news.ycombinator.com/item?id=44108139) - [Why Is Everybody Knitting Chickens?](https://ironicsans.ghost.io/why-is-everybody-knitting-chickens/)
* [2025-05-27, 12:30:53](https://news.ycombinator.com/item?id=44106299) - [Bertrand Piccard&apos;s Big Hydrogen Adventure – hydrogen fuel-cell aircraft](https://spectrum.ieee.org/hydrogen-fuel-cell-aircraft)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 11:06:10](https://news.ycombinator.com/item?id=44105746) - [Making C and Python Talk to Each Other](https://leetarxiv.substack.com/p/making-c-and-python-talk-to-each)
* [2025-05-27, 07:55:44](https://news.ycombinator.com/item?id=44104832) - [The key to a successful egg drop experiment? Drop it on its side](https://arstechnica.com/science/2025/05/the-key-to-a-successful-egg-drop-experiment-drop-it-on-its-side/)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
