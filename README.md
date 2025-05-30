# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Announcing dotnet run app.cs—A simpler way to start with C# and .NET 10](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/) ([Comments](https://lobste.rs/s/cinefb/announcing_dotnet_run_app_cs_simpler_way))

* [The Linux 6.15 kernel arrives and it's big a victory for Rust fans](https://www.zdnet.com/article/the-linux-6-15-kernel-arrives-and-its-big-a-victory-for-rust-fans/) ([Comments](https://lobste.rs/s/tsxfuc/linux_6_15_kernel_arrives_it_s_big_victory))

* ['E-Tattoo' Could Track Mental Workload For People In High-Stake Jobs, Study Says](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Triangle splatting: radiance fields represented by triangles](https://trianglesplatting.github.io/) ([Comments](https://news.ycombinator.com/item?id=44132744))

## Programming and Software Development

* [A poor man’s types](https://blog.snork.dev/posts/a-poor-man-s-types.html) ([Comments](https://lobste.rs/s/y13fa3/poor_man_s_types))

* [Revisiting Loop Recognition in C++... in Rust](http://blomqu.ist/posts/2025/loop-recognition) ([Comments](https://lobste.rs/s/gwf1mz/revisiting_loop_recognition_c_rust))

* [The-One-True-Lisp-Style-Guide](https://github.com/foxsae/The-One-True-Lisp-Style-Guide) ([Comments](https://lobste.rs/s/xv6zge/one_true_lisp_style_guide))

* [How to fix email encryption](https://weddige.eu/en/articles/lets-encrypt-emails/) ([Comments](https://lobste.rs/s/mzm2kk/how_fix_email_encryption))

## Health and Science

* [High vitamin B6 doses over a long period could cause irreversible nerve damage](https://www.abc.net.au/news/2025-01-08/vitamin-b6-toxicity-peripheral-neuropathy-health-supplements/104793006) ([Comments](https://news.ycombinator.com/item?id=44133310))

* [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss))

* [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss))

## Cultural and Artistic Highlights

* [The David Lynch Collection](https://www.juliensauctions.com/en/auctions/julien-s-auctions-turner-classic-movies-present-the-david-lynch-collection) ([Comments](https://news.ycombinator.com/item?id=44133251))

* [Player Piano Rolls](https://omeka-s.library.illinois.edu/s/MPAL/page/player-piano-rolls-landing) ([Comments](https://news.ycombinator.com/item?id=44132404))

* [Gurus of 90s Web Design: Zeldman, Siegel, Nielsen](https://cybercultural.com/p/web-design-1997/) ([Comments](https://news.ycombinator.com/item?id=44123852))

## Security and Privacy

* [ASUS Router Backdoors Affect 9,000 Devices, Persists After Firmware Updates](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [HellCaptcha: Accessibility Theater at Its Worst](https://fireborn.mataroa.blog/blog/hellcaptcha-accessibility-theater-at-its-worst/) ([Comments](https://lobste.rs/s/nl1rei/hellcaptcha_accessibility_theater_at))

* [Kea DHCP: Local Vulnerabilities in many Linux and BSD Distributions](https://security.opensuse.org/2025/05/28/kea-dhcp-security-issues.html) ([Comments](https://lobste.rs/s/vjil64/kea_dhcp_local_vulnerabilities_many))

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

* [2025-05-30, 06:54:21](https://lobste.rs/s/y13fa3/poor_man_s_types) - [A poor man’s types](https://blog.snork.dev/posts/a-poor-man-s-types.html)
* [2025-05-30, 06:41:38](https://lobste.rs/s/7qrihr/radix_2_51_trick_2017) - [The radix 2^51 trick (2017)](https://www.chosenplaintext.ca/articles/radix-2-51-trick.html)
* [2025-05-30, 05:56:00](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss) - [Lenovo Caught Out by Trump&apos;s on-Again Off-Again Tariffs](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss)
* [2025-05-30, 05:55:37](https://news.ycombinator.com/item?id=44133310) - [High vitamin B6 doses over a long period could cause irreversible nerve damage](https://www.abc.net.au/news/2025-01-08/vitamin-b6-toxicity-peripheral-neuropathy-health-supplements/104793006)
* [2025-05-30, 05:42:58](https://news.ycombinator.com/item?id=44133251) - [The David Lynch Collection](https://www.juliensauctions.com/en/auctions/julien-s-auctions-turner-classic-movies-present-the-david-lynch-collection)
* [2025-05-30, 05:11:14](https://news.ycombinator.com/item?id=44133093) - [Limits to Growth was right about collapse](https://thenextwavefutures.wordpress.com/2025/05/20/limits-to-growth-was-right-about-overshoot-and-collapse-new-data/)
* [2025-05-30, 05:10:59](https://news.ycombinator.com/item?id=44133091) - [How to Do Ambitious Research in the Modern Era [video]](https://www.youtube.com/watch?v=w7DVlI_Ztq8)
* [2025-05-30, 04:52:23](https://lobste.rs/s/cinefb/announcing_dotnet_run_app_cs_simpler_way) - [Announcing dotnet run app.cs—A simpler way to start with C# and .NET 10](https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/)
* [2025-05-30, 04:36:21](https://lobste.rs/s/tsxfuc/linux_6_15_kernel_arrives_it_s_big_victory) - [The Linux 6.15 kernel arrives and it&apos;s big a victory for Rust fans](https://www.zdnet.com/article/the-linux-6-15-kernel-arrives-and-its-big-a-victory-for-rust-fans/)
* [2025-05-30, 04:25:23](https://news.ycombinator.com/item?id=44132823) - [Show HN: MCP Server SDK in Bash (~250 lines, zero runtime)](https://github.com/muthuishere/mcp-server-bash-sdk)
* [2025-05-30, 04:10:42](https://news.ycombinator.com/item?id=44132756) - [Show HN: templUI – The UI Kit for templ (CLI-based, like shadcn/UI)](https://templui.io/)
* [2025-05-30, 04:09:55](https://news.ycombinator.com/item?id=44132752) - [Show HN: Donut Browser, a Browser Orchestrator](https://donutbrowser.com/)
* [2025-05-30, 04:07:17](https://news.ycombinator.com/item?id=44132744) - [Triangle splatting: radiance fields represented by triangles](https://trianglesplatting.github.io/)
* [2025-05-30, 03:55:37](https://news.ycombinator.com/item?id=44132673) - [The radix 2^51 trick (2017)](https://www.chosenplaintext.ca/articles/radix-2-51-trick.html)
* [2025-05-30, 03:30:00](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;E-Tattoo&apos; Could Track Mental Workload For People In High-Stake Jobs, Study Says](https://science.slashdot.org/story/25/05/29/222251/e-tattoo-could-track-mental-workload-for-people-in-high-stake-jobs-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-30, 03:14:44](https://news.ycombinator.com/item?id=44132486) - [OpenBAO (Vault open-source fork) Namespaces](https://openbao.org/blog/namespaces-announcement/)
* [2025-05-30, 02:58:02](https://news.ycombinator.com/item?id=44132404) - [Player Piano Rolls](https://omeka-s.library.illinois.edu/s/MPAL/page/player-piano-rolls-landing)
* [2025-05-30, 01:43:05](https://lobste.rs/s/xv6zge/one_true_lisp_style_guide) - [The-One-True-Lisp-Style-Guide](https://github.com/foxsae/The-One-True-Lisp-Style-Guide)
* [2025-05-30, 01:34:23](https://news.ycombinator.com/item?id=44131984) - [Practical SDR: Getting started with software-defined radio](https://nostarch.com/practical-sdr)
* [2025-05-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss) - [How to Stop and Disable Unwanted Services From Linux System](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss)
* [2025-05-30, 00:20:00](https://games.slashdot.org/story/25/05/29/2149241/amazon-taps-xbox-co-founder-to-develop-breakthrough-consumer-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Taps Xbox Co-Founder To Develop &apos;Breakthrough&apos; Consumer Products](https://games.slashdot.org/story/25/05/29/2149241/amazon-taps-xbox-co-founder-to-develop-breakthrough-consumer-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 23:57:11](https://news.ycombinator.com/item?id=44131513) - [I&apos;m starting a social club to solve the male loneliness epidemic](https://wave3.social)
* [2025-05-29, 23:40:00](https://yro.slashdot.org/story/25/05/29/216216/man-who-stole-1000-dvds-from-employer-strikes-plea-deal-over-movie-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Who Stole 1,000 DVDs From Employer Strikes Plea Deal Over Movie Leaks](https://yro.slashdot.org/story/25/05/29/216216/man-who-stole-1000-dvds-from-employer-strikes-plea-deal-over-movie-leaks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 23:17:29](https://lobste.rs/s/gwf1mz/revisiting_loop_recognition_c_rust) - [Revisiting Loop Recognition in C++... in Rust](http://blomqu.ist/posts/2025/loop-recognition)
* [2025-05-29, 23:00:00](https://hardware.slashdot.org/story/25/05/29/211200/gemini-can-now-watch-google-drive-videos-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini Can Now Watch Google Drive Videos For You](https://hardware.slashdot.org/story/25/05/29/211200/gemini-can-now-watch-google-drive-videos-for-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 22:20:00](https://yro.slashdot.org/story/25/05/29/2058225/intel-wins-jury-trial-over-patent-licenses-in-3-billion-vlsi-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Wins Jury Trial Over Patent Licenses In $3 Billion VLSI Fight](https://yro.slashdot.org/story/25/05/29/2058225/intel-wins-jury-trial-over-patent-licenses-in-3-billion-vlsi-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 22:04:23](https://lobste.rs/s/n1yo1z/grog_mono_repo_build_tool_for_grug_brained) - [Grog: the mono-repo build tool for the grug-brained dev](https://grog.build/)
* [2025-05-29, 22:00:00](https://yro.slashdot.org/story/25/05/29/2155215/sec-voluntarily-dismisses-lawsuit-against-binance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Voluntarily Dismisses Lawsuit Against Binance](https://yro.slashdot.org/story/25/05/29/2155215/sec-voluntarily-dismisses-lawsuit-against-binance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 21:50:19](https://lobste.rs/s/cubwue/this_website_does_not_exist) - [This website does not exist](https://thiswebsitedoesnotexist.net/)
* [2025-05-29, 21:40:00](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Router Backdoors Affect 9,000 Devices, Persists After Firmware Updates](https://it.slashdot.org/story/25/05/29/2052229/asus-router-backdoors-affect-9000-devices-persists-after-firmware-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 21:27:13](https://lobste.rs/s/nl1rei/hellcaptcha_accessibility_theater_at) - [HellCaptcha: Accessibility Theater at Its Worst](https://fireborn.mataroa.blog/blog/hellcaptcha-accessibility-theater-at-its-worst/)
* [2025-05-29, 21:02:00](https://tech.slashdot.org/story/25/05/29/2028234/china-summons-top-carmakers-over-zero-mileage-used-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Summons Top Carmakers Over &apos;Zero-Mileage&apos; Used Vehicles](https://tech.slashdot.org/story/25/05/29/2028234/china-summons-top-carmakers-over-zero-mileage-used-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 20:53:39](https://news.ycombinator.com/item?id=44130295) - [Notes on Tunisia](https://mattlakeman.org/2025/05/29/notes-on-tunisia/)
* [2025-05-29, 20:51:02](https://lobste.rs/s/qnrz7c/which_new_language_should_i_learn_for_web) - [Which New Language Should I Learn for Web Development?](https://mtlynch.io/notes/which-new-language/)
* [2025-05-29, 20:37:25](https://lobste.rs/s/dj960n/net_negative_cursor) - [Net-Negative Cursor](https://lukasatkinson.de/2025/net-negative-cursor/)
* [2025-05-29, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss) - [Russia is Still Swimming in New Intel and AMD Chips Thanks to Sanction \&quot;Workarounds\&quot;](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss)
* [2025-05-29, 20:21:00](https://news.slashdot.org/story/25/05/29/2011206/india-needs-to-turn-the-air-con-on?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Needs To Turn the Air-Con On](https://news.slashdot.org/story/25/05/29/2011206/india-needs-to-turn-the-air-con-on?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 20:05:59](https://lobste.rs/s/sswikt/making_openat_2_friends_more_useful) - [Making openat(2) and friends more useful in practice](https://undeadly.org/cgi?action=article;sid=20250529080623)
* [2025-05-29, 19:53:27](https://lobste.rs/s/vjil64/kea_dhcp_local_vulnerabilities_many) - [Kea DHCP: Local Vulnerabilities in many Linux and BSD Distributions](https://security.opensuse.org/2025/05/28/kea-dhcp-security-issues.html)
* [2025-05-29, 19:40:00](https://developers.slashdot.org/story/25/05/29/1921248/stack-overflows-radical-new-plan-to-fight-ai-induced-death-spiral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow&apos;s Radical New Plan To Fight AI-Induced Death Spiral](https://developers.slashdot.org/story/25/05/29/1921248/stack-overflows-radical-new-plan-to-fight-ai-induced-death-spiral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 19:01:00](https://developers.slashdot.org/story/25/05/29/1835258/anthropic-ceo-warns-ai-could-eliminate-half-of-all-entry-level-white-collar-jobs-within-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Warns AI Could Eliminate Half of All Entry-Level White-Collar Jobs Within Five Years](https://developers.slashdot.org/story/25/05/29/1835258/anthropic-ceo-warns-ai-could-eliminate-half-of-all-entry-level-white-collar-jobs-within-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 18:28:18](https://lobste.rs/s/giokgl/systems_correctness_practices_at_amazon) - [Systems Correctness Practices at Amazon Web Services](https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/)
* [2025-05-29, 18:25:00](https://entertainment.slashdot.org/story/25/05/29/1825254/theres-more-film-and-television-for-you-to-watch-than-ever-before---good-luck-finding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s More Film and Television For You To Watch Than Ever Before - Good Luck Finding It](https://entertainment.slashdot.org/story/25/05/29/1825254/theres-more-film-and-television-for-you-to-watch-than-ever-before---good-luck-finding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 17:40:35](https://news.ycombinator.com/item?id=44128322) - [FLUX.1 Kontext](https://bfl.ai/models/flux-kontext)
* [2025-05-29, 17:38:00](https://news.slashdot.org/story/25/05/29/1738234/demand-for-american-degrees-has-already-hit-covid-era-lows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Demand For American Degrees Has Already Hit Covid-Era Lows](https://news.slashdot.org/story/25/05/29/1738234/demand-for-american-degrees-has-already-hit-covid-era-lows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 17:21:51](https://lobste.rs/s/omtuek/coming_ai_revolution_distributed) - [The Coming AI Revolution in Distributed Systems](https://zfhuang99.github.io/github%20copilot/formal%20verification/tla+/2025/05/24/ai-revolution-in-distributed-systems.html)
* [2025-05-29, 17:01:18](https://news.ycombinator.com/item?id=44127948) - [Infisical (YC W23) Is Hiring Full Stack Engineers (TypeScript) in US and Canada](https://www.ycombinator.com/companies/infisical/jobs/vGwCQVk-full-stack-engineer-us-canada)
* [2025-05-29, 16:52:45](https://lobste.rs/s/loydfp/break_from_programming_languages) - [A break from programming languages](https://lexi-lambda.github.io/blog/2025/05/29/a-break-from-programming-languages/)
* [2025-05-29, 16:50:00](https://linux.slashdot.org/story/25/05/29/1650210/linux-format-ceases-publication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Format Ceases Publication](https://linux.slashdot.org/story/25/05/29/1650210/linux-format-ceases-publication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 16:41:04](https://news.ycombinator.com/item?id=44127739) - [Human coders are still better than LLMs](https://antirez.com/news/153)
* [2025-05-29, 16:04:00](https://news.slashdot.org/story/25/05/29/164217/california-has-got-really-good-at-building-giant-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Has Got Really Good at Building Giant Batteries](https://news.slashdot.org/story/25/05/29/164217/california-has-got-really-good-at-building-giant-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-29, 15:55:00](https://lobste.rs/s/1j1muh/learning_c3) - [Learning C3](https://alloc.dev/2025/05/29/learning_c3)
* [2025-05-29, 15:48:00](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss) - [University Of Arizona Scientists Unveil Breakthrough Petahertz-Speed Transistor](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss)
* [2025-05-29, 15:38:45](https://news.ycombinator.com/item?id=44127109) - [WeatherStar 4000+: Weather Channel Simulator](https://weatherstar.netbymatt.com/)
* [2025-05-29, 14:51:03](https://lobste.rs/s/9j9wdi/case_for_using_web_browser_as_your) - [The case for using a web browser as your terminal](https://blog.pomdtr.me/posts/tweety-v1/)
* [2025-05-29, 14:44:33](https://news.ycombinator.com/item?id=44126612) - [Show HN: I wrote a modern Command Line Handbook](https://commandline.stribny.name/)
* [2025-05-29, 14:21:06](https://lobste.rs/s/gpntsk/redesigning_initial_bootstrap_sequence) - [Redesigning the Initial Bootstrap Sequence](https://blog.rust-lang.org/inside-rust/2025/05/29/redesigning-the-initial-bootstrap-sequence/)
* [2025-05-29, 13:33:31](https://news.ycombinator.com/item?id=44125966) - [Learning C3](https://alloc.dev/2025/05/29/learning_c3)
* [2025-05-29, 13:24:28](https://lobste.rs/s/mzm2kk/how_fix_email_encryption) - [How to fix email encryption](https://weddige.eu/en/articles/lets-encrypt-emails/)
* [2025-05-29, 11:18:04](https://lobste.rs/s/0hfgse/what_s_cooking_on_sourcehut_q2_2025) - [What&apos;s cooking on SourceHut? Q2 2025](https://sourcehut.org/blog/2025-05-29-whats-cooking-q2/)
* [2025-05-29, 11:06:00](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss) - [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)
* [2025-05-29, 10:05:53](https://lobste.rs/s/e7ybwh/terraria_celeste_ported_webassembly) - [Terraria and Celeste ported to WebAssembly](https://velzie.rip/blog/celeste-wasm)
* [2025-05-29, 10:01:21](https://lobste.rs/s/ovdyqg/openbao_v2_3_now_supports_namespaces) - [OpenBao v2.3 now supports Namespaces (HashiCorp Vault fork)](https://openbao.org/blog/namespaces-announcement/)
* [2025-05-29, 07:33:02](https://news.ycombinator.com/item?id=44123852) - [Gurus of 90s Web Design: Zeldman, Siegel, Nielsen](https://cybercultural.com/p/web-design-1997/)
* [2025-05-29, 06:15:00](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) - [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)
* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
* [2025-05-28, 22:02:47](https://lobste.rs/s/029ntw/parking_lot_ffffffffffffffff) - [parking_lot: ffffffffffffffff](https://fly.io/blog/parking-lot-ffffffffffffffff/)
* [2025-05-28, 20:49:00](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss) - [Intel Uncovers Alleged Embezzlement Involving Former Employee And Supplier](https://soylentnews.org/article.pl?sid=25/05/27/2241220&amp;from=rss)
* [2025-05-28, 17:35:48](https://lobste.rs/s/42qb2p/i_am_disappointed_ai_discourse) - [I am disappointed in the AI discourse](https://steveklabnik.com/writing/i-am-disappointed-in-the-ai-discourse/)
* [2025-05-28, 16:04:00](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss) - [Telescope Upgrade Reveals Sun&apos;s \&quot;Coronal Rain\&quot; In Unprecedented Detail](https://soylentnews.org/article.pl?sid=25/05/27/2237231&amp;from=rss)
* [2025-05-28, 12:21:44](https://news.ycombinator.com/item?id=44115244) - [Flash Back: An “oral” history of Flash](https://goodinternetmagazine.com/oral-history-of-flash/)
* [2025-05-28, 11:53:47](https://news.ycombinator.com/item?id=44114982) - [My website is ugly because I made it](https://goodinternetmagazine.com/my-website-is-ugly-because-i-made-it/)
* [2025-05-28, 11:19:00](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss) - [iPhone Won&apos;t Be Made In US Anytime Soon: Analysts ](https://soylentnews.org/article.pl?sid=25/05/27/2233218&amp;from=rss)
* [2025-05-28, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss) - [The CIA Used A Star Wars Fan Site To Secretly Communicate With Spies](https://soylentnews.org/article.pl?sid=25/05/27/124252&amp;from=rss)
* [2025-05-28, 01:47:00](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss) - [Security News: Telemessage Worsens, Predictive Patching, GoDaddy Incompetence, Credential DB Found](https://soylentnews.org/article.pl?sid=25/05/27/120223&amp;from=rss)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 17:34:35](https://news.ycombinator.com/item?id=44109017) - [The atmospheric memory that feeds billions of people: Monsoon rainfall mechanism](https://phys.org/news/2025-05-atmospheric-memory-billions-people-monsoon.html)
* [2025-05-27, 16:44:36](https://news.ycombinator.com/item?id=44108590) - [Car Physics for Games (2003)](https://www.asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 15:52:49](https://news.ycombinator.com/item?id=44108139) - [Why is everybody knitting chickens?](https://ironicsans.ghost.io/why-is-everybody-knitting-chickens/)
* [2025-05-27, 11:57:01](https://news.ycombinator.com/item?id=44106048) - [Smallest Possible Files](https://github.com/mathiasbynens/small)
* [2025-05-27, 11:52:13](https://news.ycombinator.com/item?id=44106007) - [Dr John C. Clark, a scientist who disarmed atomic bombs twice](https://daxe.substack.com/p/disarming-an-atomic-bomb-is-the-worst)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 11:06:10](https://news.ycombinator.com/item?id=44105746) - [Making C and Python Talk to Each Other](https://leetarxiv.substack.com/p/making-c-and-python-talk-to-each)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 04:18:18](https://news.ycombinator.com/item?id=44103923) - [Invading the Huum Uku WiFi Controller](https://kaurpalang.com/posts/invading-the-sauna/)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
