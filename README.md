# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations

* [Rivian's Illinois Factory Will Run On Recycled EV Batteries](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Rivian is planning to power its Illinois factory using recycled electric vehicle batteries, showcasing sustainability in electric vehicle production. [Comments](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Gemma 4 Runs Natively on iPhone with Full Offline AI Inference](https://www.gizmoweek.com/gemma-4-runs-iphone/) - Google debuts Gemma 4, enabling offline AI capabilities on iPhone devices. [Comments](https://news.ycombinator.com/item?id=47774971)

* [Amazon Buys Globalstar For $10.8 Billion, Moving To Expand Its Satellite Internet Service](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Amazon makes a major move in satellite internet by acquiring Globalstar for $10.8 billion. [Comments](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Robotics Developments

* [Rewriting Every Syscall in a Linux Binary at Load Time](https://substack.com/home/post/p-194037971) - Researchers explore the implications of rewriting system calls in Linux binaries dynamically at runtime. [Comments](https://lobste.rs/s/66cgid/rewriting_every_syscall_linux_binary_at)

* [Gemini Robotics-ER 1.6](https://deepmind.google/blog/gemini-robotics-er-1-6/) - DeepMind introduces Gemini Robotics-ER 1.6, a robotics system with improved AI capabilities. [Comments](https://news.ycombinator.com/item?id=47779094)

* [AI ruling prompts warnings from US lawyers: Your chats could be used against you](https://www.reuters.com/legal/government/ai-ruling-prompts-warnings-us-lawyers-your-chats-could-be-used-against-you-2026-04-15/) - Legal experts warn users about the lack of confidentiality in AI chat interactions. [Comments](https://news.ycombinator.com/item?id=47778308)

## Medical Advancements

* [Norway Man Cured of HIV With Brother's Stem Cells](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking stem-cell treatment led to the cure of a patient with HIV in Norway. [Comments](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Legal and Ethical Issues in Technology

* [US v. Heppner (S.D.N.Y. 2026) no attorney-client privilege for AI chats [pdf]](https://fingfx.thomsonreuters.com/gfx/legaldocs/xmvjyjekkpr/Rakoff%20-%20order%20-%20AI.pdf) - A policy decision reveals there’s no attorney-client privilege for AI-based chat communications. [Comments](https://news.ycombinator.com/item?id=47778920)

* [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - The Linux project takes a stand on employing AI-generated code for better transparency and compliance. [Comments](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)

## Efficient Tools and Systems

* [Things you didn&apos;t know about indexes](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html) - An insightful piece on lesser-known aspects and optimizations of database indexing. [Comments](https://lobste.rs/s/otzxqs/things_you_didn_t_know_about_indexes)

* [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/) - A two-decades-old bug in the Enlightenment desktop environment is finally resolved. [Comments](https://news.ycombinator.com/item?id=47774789)

* [Retrofitting JIT Compilers into C Interpreters](https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html) - Engineers present challenges and solutions to implementing just-in-time (JIT) functionalities into C interpreters. [Comments](https://lobste.rs/s/q6j2fu/retrofitting_jit_compilers_into_c)

## Environmental and Sustainable Innovations

* [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - New electrode technology sets a record-breaking efficiency rate in converting carbon dioxide into useful polymers. [Comments](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)

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

* [2026-04-15, 16:00:00](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian&apos;s Illinois Factory Will Run On Recycled EV Batteries](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 15:39:35](https://lobste.rs/s/66cgid/rewriting_every_syscall_linux_binary_at) - [Rewriting Every Syscall in a Linux Binary at Load Time](https://substack.com/home/post/p-194037971)
* [2026-04-15, 15:00:00](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Man Cured of HIV With Brother&apos;s Stem Cells](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 14:44:00](https://news.ycombinator.com/item?id=47779730) - [Elevated errors on Claude.ai, API, Claude Code](https://claudestatus.com/)
* [2026-04-15, 14:02:31](https://news.ycombinator.com/item?id=47779094) - [Gemini Robotics-ER 1.6](https://deepmind.google/blog/gemini-robotics-er-1-6/)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 13:47:40](https://news.ycombinator.com/item?id=47778920) - [US v. Heppner (S.D.N.Y. 2026) no attorney-client privilege for AI chats [pdf]](https://fingfx.thomsonreuters.com/gfx/legaldocs/xmvjyjekkpr/Rakoff%20-%20order%20-%20AI.pdf)
* [2026-04-15, 13:34:11](https://news.ycombinator.com/item?id=47778758) - [The Future of Everything Is Lies, I Guess: New Jobs](https://aphyr.com/posts/419-the-future-of-everything-is-lies-i-guess-new-jobs)
* [2026-04-15, 13:22:10](https://news.ycombinator.com/item?id=47778617) - [MCP as Observability Interface: Connecting AI Agents to Kernel Tracepoints](https://ingero.io/mcp-observability-interface-ai-agents-kernel-tracepoints/)
* [2026-04-15, 13:08:10](https://news.ycombinator.com/item?id=47778475) - [God Sleeps in the Minerals](https://wchambliss.wordpress.com/2026/03/03/god-sleeps-in-the-minerals/)
* [2026-04-15, 13:05:31](https://lobste.rs/s/hphrhd/direct_win32_api_weird_shaped_windows_why) - [Direct Win32 API, Weird-Shaped Windows, and Why They Mostly Disappeared](https://warped3.substack.com/p/direct-win32-api-weird-shaped-windows)
* [2026-04-15, 12:57:28](https://lobste.rs/s/otzxqs/things_you_didn_t_know_about_indexes) - [Things you didn&apos;t know about indexes](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html)
* [2026-04-15, 12:51:13](https://news.ycombinator.com/item?id=47778308) - [AI ruling prompts warnings from US lawyers: Your chats could be used against you](https://www.reuters.com/legal/government/ai-ruling-prompts-warnings-us-lawyers-your-chats-could-be-used-against-you-2026-04-15/)
* [2026-04-15, 12:51:04](https://news.ycombinator.com/item?id=47778306) - [Show HN: Every CEO and CFO change at US public companies, live from SEC](https://tracksuccession.com/explore)
* [2026-04-15, 12:26:11](https://news.ycombinator.com/item?id=47778086) - [Do you even need a database?](https://www.dbpro.app/blog/do-you-even-need-a-database)
* [2026-04-15, 12:21:47](https://news.ycombinator.com/item?id=47778050) - [Study: Back-to-basics approach can match or outperform AI in language analysis](https://www.manchester.ac.uk/about/news/back-to-basics-approach-can-match-or-outperform-ai/)
* [2026-04-15, 12:20:13](https://news.ycombinator.com/item?id=47778038) - [Allbirds, Inc. Announces Expansion into AI Compute Infrastructure](https://ir.allbirds.com/news-releases/news-release-details/allbirds-inc-executes-50m-convertible-financing-facility)
* [2026-04-15, 12:00:44](https://news.ycombinator.com/item?id=47777902) - [Proliferate (YC S25) Is Hiring Founding Engineers](https://www.ycombinator.com/companies/proliferate/jobs/L3copvK-founding-engineer)
* [2026-04-15, 11:57:24](https://lobste.rs/s/q6j2fu/retrofitting_jit_compilers_into_c) - [Retrofitting JIT Compilers into C Interpreters](https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html)
* [2026-04-15, 11:08:25](https://news.ycombinator.com/item?id=47777449) - [Academic fraud may be the symptom of a more systemic problem](https://www.voxweb.nl/en/academic-fraud-may-be-the-symptom-of-a-much-more-systemic-problem)
* [2026-04-15, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Boss Urges Theaters To Stop 30 Minutes of Trailers and Ads Before Movies](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 10:42:28](https://news.ycombinator.com/item?id=47777209) - [Your Backpack Got Worse on Purpose](https://www.worseonpurpose.com/p/your-backpack-got-worse-on-purpose)
* [2026-04-15, 10:09:07](https://lobste.rs/s/tb3mga/modern_common_lisp_with_fset) - [Modern Common Lisp with FSet](https://fset.common-lisp.dev/Modern-CL/Top_html/index.html)
* [2026-04-15, 09:41:19](https://news.ycombinator.com/item?id=47776796) - [Want to Write a Compiler? Just Read These Two Papers (2008)](https://prog21.dadgum.com/30.html)
* [2026-04-15, 09:11:18](https://news.ycombinator.com/item?id=47776557) - [Good Sleep, Good Learning (2012)](https://super-memory.com/articles/sleep.htm)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 08:16:22](https://lobste.rs/s/51obiz/testing_opengraph_on_localhost_from_cli) - [Testing OpenGraph on localhost from the CLI before you go public](https://simonhartcher.com/posts/2026-04-15-testing-opengraph-on-localhost-from-the-cli)
* [2026-04-15, 08:05:18](https://news.ycombinator.com/item?id=47776035) - [Anna&apos;s Archive loses $322M Spotify piracy case without a fight](https://torrentfreak.com/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight/)
* [2026-04-15, 07:04:45](https://news.ycombinator.com/item?id=47775628) - [Wacli – WhatsApp CLI](https://github.com/steipete/wacli)
* [2026-04-15, 07:00:00](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Globalstar For $10.8 Billion, Moving To Expand Its Satellite Internet Service](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 05:32:07](https://lobste.rs/s/orvtly/fixing_20_year_old_bug_enlightenment_e16) - [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/)
* [2026-04-15, 05:19:06](https://news.ycombinator.com/item?id=47774971) - [Google Gemma 4 Runs Natively on iPhone with Full Offline AI Inference](https://www.gizmoweek.com/gemma-4-runs-iphone/)
* [2026-04-15, 04:47:00](https://news.ycombinator.com/item?id=47774789) - [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 03:43:06](https://lobste.rs/s/vb70md/i_don_t_care_it_s_x_times_faster) - [I don&apos;t care that it&apos;s X times faster](https://tinkering.xyz/faster/)
* [2026-04-15, 03:30:00](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Removing Many Popular Features From Its Free OTA TV Options](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 02:03:12](https://news.ycombinator.com/item?id=47773812) - [Dependency cooldowns turn you into a free-rider](https://calpaterson.com/deps.html)
* [2026-04-15, 01:57:20](https://lobste.rs/s/1v94sk/what_really_happened_y2k) - [What Really Happened in Y2K?](https://www.gresham.ac.uk/sites/default/files/2017-04-04-MartynThomas_Y2K-T.pdf)
* [2026-04-15, 00:22:56](https://lobste.rs/s/nfelvb/my_pr_has_been_waiting_year_exponential) - [My PR has been waiting a year, or the exponential curve behind open source backlogs](https://armanckeser.com/writing/jellyfin-flow)
* [2026-04-14, 23:43:14](https://lobste.rs/s/zubxux/saying_goodbye_agile) - [Saying Goodbye to Agile](https://lewiscampbell.tech/blog/260414.html)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 23:12:51](https://lobste.rs/s/fwvw1q/single_module_lambda_calculus_from) - [Single Module Lambda Calculus from Simply Typed to Martin Lof Type Theory](https://github.com/solomon-b/lambda-calculus-hs)
* [2026-04-14, 23:06:00](https://mobile.slashdot.org/story/26/04/14/234246/fcc-grants-netgear-conditional-approval-for-routers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Grants Netgear Conditional Approval For Routers](https://mobile.slashdot.org/story/26/04/14/234246/fcc-grants-netgear-conditional-approval-for-routers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 22:18:55](https://news.ycombinator.com/item?id=47772203) - [H.R.8250 – To require operating system providers to verify the age of any user](https://www.congress.gov/bill/119th-congress/house-bill/8250/all-info)
* [2026-04-14, 22:05:23](https://lobste.rs/s/krdjnf/truffleruby_34_full_ruby_3_4) - [TruffleRuby 34: full Ruby 3.4 compatibility, up to 23% faster parsing, and a new Prism-based Ripper with 20x speedups](https://truffleruby.dev/blog/truffleruby-34-is-released)
* [2026-04-14, 22:00:00](https://news.slashdot.org/story/26/04/14/2021208/microsoft-reveals-major-price-increase-for-all-surface-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reveals Major Price Increase For All Surface PCs](https://news.slashdot.org/story/26/04/14/2021208/microsoft-reveals-major-price-increase-for-all-surface-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 21:00:00](https://hardware.slashdot.org/story/26/04/14/209219/california-ghost-gun-bill-wants-3d-printers-to-play-cop-eff-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Ghost-Gun Bill Wants 3D Printers To Play Cop, EFF Says](https://hardware.slashdot.org/story/26/04/14/209219/california-ghost-gun-bill-wants-3d-printers-to-play-cop-eff-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 20:00:00](https://tech.slashdot.org/story/26/04/14/1955224/audit-finds-google-microsoft-and-meta-still-tracking-users-after-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Audit Finds Google, Microsoft, and Meta Still Tracking Users After Opt-Out](https://tech.slashdot.org/story/26/04/14/1955224/audit-finds-google-microsoft-and-meta-still-tracking-users-after-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 19:46:52](https://lobste.rs/s/l79aep/release_openssl_4_0_0) - [Release OpenSSL 4.0.0](https://github.com/openssl/openssl/releases/tag/openssl-4.0.0)
* [2026-04-14, 19:00:00](https://features.slashdot.org/story/26/04/14/1734204/chrome-now-lets-you-turn-ai-prompts-into-repeatable-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Now Lets You Turn AI Prompts Into Repeatable &apos;Skills&apos;](https://features.slashdot.org/story/26/04/14/1734204/chrome-now-lets-you-turn-ai-prompts-into-repeatable-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 18:57:07](https://lobste.rs/s/7lmezq/fediverse_deserves_dumb_graphical) - [The Fediverse deserves a dumb graphical client](https://adele.pages.casa/md/blog/the-fediverse-deserves-a-dumb-graphical-client.md)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 18:00:00](https://hardware.slashdot.org/story/26/04/14/1722231/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of Rare Concert Recordings Are Landing On the Internet Archive](https://hardware.slashdot.org/story/26/04/14/1722231/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 17:38:40](https://lobste.rs/s/ovlmz5/object_oriented_programming_ada) - [Object oriented programming in Ada](https://entropicthoughts.com/object-oriented-programming-in-ada)
* [2026-04-14, 17:35:12](https://lobste.rs/s/l6c9wi/it_s_not_ok_compare_floating_points_using) - [It&apos;s NOT OK to compare floating-points using epsilons](https://lisyarus.github.io/blog/posts/its-ok-to-compare-floating-points-for-equality.html)
* [2026-04-14, 17:00:00](https://news.slashdot.org/story/26/04/14/0412227/social-media-platforms-need-to-stop-never-ending-scrolling-uks-starmer-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Platforms Need To Stop Never-Ending Scrolling, UK&apos;s Starmer Says](https://news.slashdot.org/story/26/04/14/0412227/social-media-platforms-need-to-stop-never-ending-scrolling-uks-starmer-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 16:40:28](https://lobste.rs/s/ak5mgm/keepass_keepassxc_fork) - [KeePassχ - a KeePassXC fork](https://codeberg.org/keepasschi)
* [2026-04-14, 16:20:21](https://lobste.rs/s/iygpmx/jemalloc_5_3_1_released) - [jemalloc 5.3.1 released](https://github.com/jemalloc/jemalloc/releases/tag/5.3.1)
* [2026-04-14, 16:15:51](https://lobste.rs/s/4vvozb/zig_0_16_0_release_notes) - [Zig 0.16.0 Release Notes](https://ziglang.org/download/0.16.0/release-notes.html)
* [2026-04-14, 16:00:00](https://yro.slashdot.org/story/26/04/14/048209/google-faces-mass-arbitration-by-advertisers-seeking-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Faces Mass Arbitration By Advertisers Seeking Billions](https://yro.slashdot.org/story/26/04/14/048209/google-faces-mass-arbitration-by-advertisers-seeking-billions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 15:00:00](https://science.slashdot.org/story/26/04/14/0356227/a-new-computer-chip-could-finally-withstand-the-hellscape-of-venus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Computer Chip Could Finally Withstand The Hellscape of Venus](https://science.slashdot.org/story/26/04/14/0356227/a-new-computer-chip-could-finally-withstand-the-hellscape-of-venus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 13:32:20](https://lobste.rs/s/ytim7h/collection_small_low_stakes_low_effort) - [A collection of small, low stakes and low effort tools](https://tools.rmv.fyi)
* [2026-04-14, 11:34:55](https://lobste.rs/s/dl4jb6/dependency_cooldowns_turn_you_into_free) - [Dependency cooldowns turn you into a free-rider](https://calpaterson.com/deps.html)
* [2026-04-14, 11:04:21](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls) - [Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/)
* [2026-04-14, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Force Pushed Out UFO Investigator](https://entertainment.slashdot.org/story/26/04/14/013232/air-force-pushed-out-ufo-investigator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 10:56:57](https://lobste.rs/s/bvuhnp/120_icons_counting) - [120+ Icons and Counting](https://blog.jimmac.eu/posts/app-icon-requests/)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 07:40:30](https://lobste.rs/s/fj8fzm/5nf_database_design) - [5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 17:52:03](https://news.ycombinator.com/item?id=47742430) - [New Modern Greek](https://redas.dev/NewModernGreek/)
* [2026-04-12, 15:30:02](https://news.ycombinator.com/item?id=47740879) - [MIT Radiation Laboratory](https://www.ll.mit.edu/about/history/mit-radiation-laboratory)
* [2026-04-12, 15:26:24](https://news.ycombinator.com/item?id=47740840) - [Costasiella kuroshimae – Solar Powered animals, that do indirect photosynthesis](https://en.wikipedia.org/wiki/Costasiella_kuroshimae)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 13:17:45](https://news.ycombinator.com/item?id=47739278) - [My adventure in designing API keys](https://vjay15.github.io/blog/apikeys/)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 17:59:14](https://news.ycombinator.com/item?id=47732623) - [We ran Doom on a 40 year old printer controller (Agfa Compugraphic 9000PS) [video]](https://www.youtube.com/watch?v=cltnlks2-uU)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
