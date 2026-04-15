# [News Summary](https://kherrick.github.io/news-summary/)

## AI Advancements and Challenges

* [Show HN: Jeeves – TUI for browsing and resuming AI agent sessions](https://github.com/robinovitch61/jeeves) ([comments](https://news.ycombinator.com/item?id=47784060))

* [AI-Assisted Cognition Endangers Human Development](https://heidenstedt.org/posts/2026/ai-assisted-cognition-endangers-human-development/) ([comments](https://news.ycombinator.com/item?id=47783024))

* [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/pdf/2604.04721) ([comments](https://lobste.rs/s/r4dspa/ai_assistance_reduces_persistence_hurts))

* [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss))

## Big Tech and Monopoly Concerns

* [Jury Finds Live Nation Acts as a Monopoly in a Victory for States](https://www.nytimes.com/2026/04/15/arts/music/live-nation-antitrust-trial-verdict-monopoly.html) ([comments](https://news.ycombinator.com/item?id=47783873))

* [Live Nation Illegally Monopolized Ticketing Market, Jury Finds](https://www.bloomberg.com/news/articles/2026-04-15/live-nation-illegally-monopolized-ticketing-market-jury-finds) ([comments](https://news.ycombinator.com/item?id=47783713))

## Privacy and Security Issues

* [Users lose $9.5M to fake Ledger wallet app on the Apple App Store](https://www.web3isgoinggreat.com/?id=fake-ledger-app) ([comments](https://news.ycombinator.com/item?id=47783278))

* [Google Broke Its Promise to Me. Now ICE Has My Data](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data) ([comments](https://news.ycombinator.com/item?id=47782570))

## Space and Technology

* [Amazon Buys Globalstar For $10.8 Billion, Moving To Expand Its Satellite Internet Service](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47776035))

## Unconventional Stories and Achievements

* [God Sleeps in the Minerals](https://wchambliss.wordpress.com/2026/03/03/god-sleeps-in-the-minerals/) ([comments](https://news.ycombinator.com/item?id=47778475))

* [Modern Common Lisp with FSet](https://fset.common-lisp.dev/Modern-CL/Top_html/index.html) ([comments](https://lobste.rs/s/tb3mga/modern_common_lisp_with_fset))

* [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/) ([comments](https://news.ycombinator.com/item?id=47775628))

* [Costasiella kuroshimae – Solar Powered animals, that do indirect photosynthesis](https://en.wikipedia.org/wiki/Costasiella_kuroshimae) ([comments](https://news.ycombinator.com/item?id=47740840))

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

* [2026-04-15, 19:31:33](https://news.ycombinator.com/item?id=47784060) - [Show HN: Jeeves – TUI for browsing and resuming AI agent sessions](https://github.com/robinovitch61/jeeves)
* [2026-04-15, 19:30:52](https://news.ycombinator.com/item?id=47784045) - [Flock employees caught watching kids gymnastic class and pools](https://substack.com/home/post/p-193593234)
* [2026-04-15, 19:22:10](https://news.ycombinator.com/item?id=47783940) - [Is anyone actually using OpenClaw?](https://news.ycombinator.com/item?id=47783940)
* [2026-04-15, 19:17:12](https://news.ycombinator.com/item?id=47783873) - [Jury Finds Live Nation Acts as a Monopoly in a Victory for States](https://www.nytimes.com/2026/04/15/arts/music/live-nation-antitrust-trial-verdict-monopoly.html)
* [2026-04-15, 19:06:39](https://news.ycombinator.com/item?id=47783713) - [Live Nation Illegally Monopolized Ticketing Market, Jury Finds](https://www.bloomberg.com/news/articles/2026-04-15/live-nation-illegally-monopolized-ticketing-market-jury-finds)
* [2026-04-15, 19:00:00](https://yro.slashdot.org/story/26/04/15/1831241/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Loses $322 Million Spotify Piracy Case Without a Fight](https://yro.slashdot.org/story/26/04/15/1831241/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 18:35:45](https://news.ycombinator.com/item?id=47783278) - [Users lose $9.5M to fake Ledger wallet app on the Apple App Store](https://www.web3isgoinggreat.com/?id=fake-ledger-app)
* [2026-04-15, 18:16:50](https://news.ycombinator.com/item?id=47783024) - [AI-Assisted Cognition Endangers Human Development](https://heidenstedt.org/posts/2026/ai-assisted-cognition-endangers-human-development/)
* [2026-04-15, 18:12:33](https://lobste.rs/s/r4dspa/ai_assistance_reduces_persistence_hurts) - [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/pdf/2604.04721)
* [2026-04-15, 18:11:24](https://news.ycombinator.com/item?id=47782972) - [Kalshi CEO expects US DOJ to prosecute insider trading cases](https://www.semafor.com/article/04/15/2026/kalshi-ceo-tarek-mansour-expects-us-doj-to-prosecute-insider-trading-cases)
* [2026-04-15, 18:00:00](https://slashdot.org/story/26/04/15/1737249/snapchat-blames-ai-as-it-cuts-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snapchat Blames AI As It Cuts 1,000 Jobs](https://slashdot.org/story/26/04/15/1737249/snapchat-blames-ai-as-it-cuts-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 17:44:26](https://news.ycombinator.com/item?id=47782570) - [Google Broke Its Promise to Me. Now ICE Has My Data](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data)
* [2026-04-15, 17:00:56](https://news.ycombinator.com/item?id=47781912) - [Adaptional (YC S25) Is Hiring Founding AI Engineers](https://www.ycombinator.com/companies/adaptional/jobs/k7W6ge9-founding-engineer)
* [2026-04-15, 17:00:00](https://news.slashdot.org/story/26/04/15/1646259/struggling-shoe-retailer-allbirds-pivots-to-ai-stock-explodes-more-than-700?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Struggling Shoe Retailer Allbirds Pivots To AI, Stock Explodes More Than 700%](https://news.slashdot.org/story/26/04/15/1646259/struggling-shoe-retailer-allbirds-pivots-to-ai-stock-explodes-more-than-700?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 16:57:15](https://lobste.rs/s/8disen/xata_open_source_postgres_platform_with) - [Xata: Open source Postgres platform with copy-on-write branching and scale-to-zero](https://github.com/xataio/xata)
* [2026-04-15, 16:29:31](https://lobste.rs/s/inohss/not_all_elementary_functions_can_be) - [Not all elementary functions can be expressed with exp-minus-log](https://www.stylewarning.com/posts/not-all-elementary/)
* [2026-04-15, 16:12:55](https://lobste.rs/s/jbyxup/sdl3_add_dos_platform_support) - [SDL3 - Add DOS platform support](https://bsky.app/profile/dosnostalgic.bsky.social/post/3mjfdos7iok2o)
* [2026-04-15, 16:07:47](https://lobste.rs/s/9ooaxp/let_sleeping_cpus_lie_s0ix) - [Let Sleeping CPUs Lie — S0ix](https://freebsdfoundation.org/our-work/journal/browser-based-edition/laptop-desktop/let-sleeping-cpus-lie-s0ix)
* [2026-04-15, 16:00:00](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian&apos;s Illinois Factory Will Run On Recycled EV Batteries](https://hardware.slashdot.org/story/26/04/15/0712256/rivians-illinois-factory-will-run-on-recycled-ev-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 15:57:54](https://news.ycombinator.com/item?id=47780971) - [Show HN: Libretto – Making AI browser automations deterministic](https://github.com/saffron-health/libretto)
* [2026-04-15, 15:43:37](https://news.ycombinator.com/item?id=47780712) - [Open Source Isn&apos;t Dead. Cal.com Just Learned the Wrong Lesson](https://www.strix.ai/blog/cal-com-is-closing-its-code-due-to-ai-threats)
* [2026-04-15, 15:39:35](https://lobste.rs/s/66cgid/rewriting_every_syscall_linux_binary_at) - [Rewriting Every Syscall in a Linux Binary at Load Time](https://substack.com/home/post/p-194037971)
* [2026-04-15, 15:35:47](https://lobste.rs/s/mt33ed/formal_typing_rules_presentation) - [Formal typing rules and presentation materials for Swift 6.2&apos;s concurrency type system, focusing on Capability and Region](https://github.com/inamiy/swift-concurrency-type-system)
* [2026-04-15, 15:26:46](https://news.ycombinator.com/item?id=47780456) - [Cal.com is going closed source](https://cal.com/blog/cal-com-goes-closed-source-why)
* [2026-04-15, 15:00:00](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Man Cured of HIV With Brother&apos;s Stem Cells](https://science.slashdot.org/story/26/04/15/076216/norway-man-cured-of-hiv-with-brothers-stem-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 14:02:31](https://news.ycombinator.com/item?id=47779094) - [Gemini Robotics-ER 1.6](https://deepmind.google/blog/gemini-robotics-er-1-6/)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 13:34:11](https://news.ycombinator.com/item?id=47778758) - [The Future of Everything Is Lies, I Guess: New Jobs](https://aphyr.com/posts/419-the-future-of-everything-is-lies-i-guess-new-jobs)
* [2026-04-15, 13:08:10](https://news.ycombinator.com/item?id=47778475) - [God Sleeps in the Minerals](https://wchambliss.wordpress.com/2026/03/03/god-sleeps-in-the-minerals/)
* [2026-04-15, 13:05:31](https://lobste.rs/s/hphrhd/direct_win32_api_weird_shaped_windows_why) - [Direct Win32 API, Weird-Shaped Windows, and Why They Mostly Disappeared](https://warped3.substack.com/p/direct-win32-api-weird-shaped-windows)
* [2026-04-15, 12:57:28](https://lobste.rs/s/otzxqs/things_you_didn_t_know_about_indexes) - [Things you didn&apos;t know about indexes](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html)
* [2026-04-15, 12:26:11](https://news.ycombinator.com/item?id=47778086) - [Do you even need a database?](https://www.dbpro.app/blog/do-you-even-need-a-database)
* [2026-04-15, 11:57:24](https://lobste.rs/s/q6j2fu/retrofitting_jit_compilers_into_c) - [Retrofitting JIT Compilers into C Interpreters](https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html)
* [2026-04-15, 11:00:00](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Boss Urges Theaters To Stop 30 Minutes of Trailers and Ads Before Movies](https://entertainment.slashdot.org/story/26/04/14/2045226/sony-boss-urges-theaters-to-stop-30-minutes-of-trailers-and-ads-before-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 10:09:07](https://lobste.rs/s/tb3mga/modern_common_lisp_with_fset) - [Modern Common Lisp with FSet](https://fset.common-lisp.dev/Modern-CL/Top_html/index.html)
* [2026-04-15, 09:41:19](https://news.ycombinator.com/item?id=47776796) - [Want to Write a Compiler? Just Read These Two Papers (2008)](https://prog21.dadgum.com/30.html)
* [2026-04-15, 09:11:18](https://news.ycombinator.com/item?id=47776557) - [Good Sleep, Good Learning (2012)](https://super-memory.com/articles/sleep.htm)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 08:16:22](https://lobste.rs/s/51obiz/testing_opengraph_on_localhost_from_cli) - [Testing OpenGraph on localhost from the CLI before you go public](https://simonhartcher.com/posts/2026-04-15-testing-opengraph-on-localhost-from-the-cli)
* [2026-04-15, 08:05:18](https://news.ycombinator.com/item?id=47776035) - [Anna&apos;s Archive loses $322M Spotify piracy case without a fight](https://torrentfreak.com/annas-archive-loses-322-million-spotify-piracy-case-without-a-fight/)
* [2026-04-15, 07:04:45](https://news.ycombinator.com/item?id=47775628) - [Wacli – WhatsApp CLI](https://github.com/steipete/wacli)
* [2026-04-15, 07:00:00](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Buys Globalstar For $10.8 Billion, Moving To Expand Its Satellite Internet Service](https://tech.slashdot.org/story/26/04/15/0642220/amazon-buys-globalstar-for-108-billion-moving-to-expand-its-satellite-internet-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 05:32:07](https://lobste.rs/s/orvtly/fixing_20_year_old_bug_enlightenment_e16) - [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/)
* [2026-04-15, 04:47:00](https://news.ycombinator.com/item?id=47774789) - [Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 03:43:06](https://lobste.rs/s/vb70md/i_don_t_care_it_s_x_times_faster) - [I don&apos;t care that it&apos;s X times faster](https://tinkering.xyz/faster/)
* [2026-04-15, 03:30:00](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Is Removing Many Popular Features From Its Free OTA TV Options](https://entertainment.slashdot.org/story/26/04/14/2213204/sony-is-removing-many-popular-features-from-its-free-ota-tv-options?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 00:22:56](https://lobste.rs/s/nfelvb/my_pr_has_been_waiting_year_exponential) - [My PR has been waiting a year, or the exponential curve behind open source backlogs](https://armanckeser.com/writing/jellyfin-flow)
* [2026-04-14, 23:43:14](https://lobste.rs/s/zubxux/saying_goodbye_agile) - [Saying Goodbye to Agile](https://lewiscampbell.tech/blog/260414.html)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 23:06:00](https://mobile.slashdot.org/story/26/04/14/234246/fcc-grants-netgear-conditional-approval-for-routers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Grants Netgear Conditional Approval For Routers](https://mobile.slashdot.org/story/26/04/14/234246/fcc-grants-netgear-conditional-approval-for-routers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 22:05:23](https://lobste.rs/s/krdjnf/truffleruby_34_full_ruby_3_4) - [TruffleRuby 34: full Ruby 3.4 compatibility, up to 23% faster parsing, and a new Prism-based Ripper with 20x speedups](https://truffleruby.dev/blog/truffleruby-34-is-released)
* [2026-04-14, 22:00:00](https://news.slashdot.org/story/26/04/14/2021208/microsoft-reveals-major-price-increase-for-all-surface-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reveals Major Price Increase For All Surface PCs](https://news.slashdot.org/story/26/04/14/2021208/microsoft-reveals-major-price-increase-for-all-surface-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 21:00:00](https://hardware.slashdot.org/story/26/04/14/209219/california-ghost-gun-bill-wants-3d-printers-to-play-cop-eff-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Ghost-Gun Bill Wants 3D Printers To Play Cop, EFF Says](https://hardware.slashdot.org/story/26/04/14/209219/california-ghost-gun-bill-wants-3d-printers-to-play-cop-eff-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 20:00:00](https://tech.slashdot.org/story/26/04/14/1955224/audit-finds-google-microsoft-and-meta-still-tracking-users-after-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Audit Finds Google, Microsoft, and Meta Still Tracking Users After Opt-Out](https://tech.slashdot.org/story/26/04/14/1955224/audit-finds-google-microsoft-and-meta-still-tracking-users-after-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 19:00:00](https://features.slashdot.org/story/26/04/14/1734204/chrome-now-lets-you-turn-ai-prompts-into-repeatable-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Now Lets You Turn AI Prompts Into Repeatable &apos;Skills&apos;](https://features.slashdot.org/story/26/04/14/1734204/chrome-now-lets-you-turn-ai-prompts-into-repeatable-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 18:57:07](https://lobste.rs/s/7lmezq/fediverse_deserves_dumb_graphical) - [The Fediverse deserves a dumb graphical client](https://adele.pages.casa/md/blog/the-fediverse-deserves-a-dumb-graphical-client.md)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 18:00:00](https://hardware.slashdot.org/story/26/04/14/1722231/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of Rare Concert Recordings Are Landing On the Internet Archive](https://hardware.slashdot.org/story/26/04/14/1722231/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 17:38:40](https://lobste.rs/s/ovlmz5/object_oriented_programming_ada) - [Object oriented programming in Ada](https://entropicthoughts.com/object-oriented-programming-in-ada)
* [2026-04-14, 17:35:12](https://lobste.rs/s/l6c9wi/it_s_ok_compare_floating_points_for) - [It&apos;s OK to compare floating-points for equality](https://lisyarus.github.io/blog/posts/its-ok-to-compare-floating-points-for-equality.html)
* [2026-04-14, 17:00:00](https://news.slashdot.org/story/26/04/14/0412227/social-media-platforms-need-to-stop-never-ending-scrolling-uks-starmer-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Platforms Need To Stop Never-Ending Scrolling, UK&apos;s Starmer Says](https://news.slashdot.org/story/26/04/14/0412227/social-media-platforms-need-to-stop-never-ending-scrolling-uks-starmer-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-14, 16:40:28](https://lobste.rs/s/ak5mgm/keepass_keepassxc_fork) - [KeePassχ - a KeePassXC fork](https://codeberg.org/keepasschi)
* [2026-04-14, 16:20:21](https://lobste.rs/s/iygpmx/jemalloc_5_3_1_released) - [jemalloc 5.3.1 released](https://github.com/jemalloc/jemalloc/releases/tag/5.3.1)
* [2026-04-14, 16:15:51](https://lobste.rs/s/4vvozb/zig_0_16_0_release_notes) - [Zig 0.16.0 Release Notes](https://ziglang.org/download/0.16.0/release-notes.html)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 11:04:21](https://lobste.rs/s/hedf1w/rust_should_have_stable_tail_calls) - [Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/)
* [2026-04-14, 10:56:57](https://lobste.rs/s/bvuhnp/120_icons_counting) - [120+ Icons and Counting](https://blog.jimmac.eu/posts/app-icon-requests/)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
* [2026-04-12, 23:48:00](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss) - [&apos;Dead End&apos;: Radical 20-Year Study Reveals Genetic Cloning Hits a Limit](https://soylentnews.org/article.pl?sid=26/04/11/0321245&amp;from=rss)
* [2026-04-12, 19:02:00](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss) - [Tech Industry Lays Off Nearly 80,000 Employees in the First Quarter of 2026 (Almost 50% Due to AI)](https://soylentnews.org/article.pl?sid=26/04/11/0313203&amp;from=rss)
* [2026-04-12, 15:26:24](https://news.ycombinator.com/item?id=47740840) - [Costasiella kuroshimae – Solar Powered animals, that do indirect photosynthesis](https://en.wikipedia.org/wiki/Costasiella_kuroshimae)
* [2026-04-12, 14:15:00](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss) - [Dad Stuck in Support Nightmare After Teen Lied About Age on Discord](https://soylentnews.org/article.pl?sid=26/04/11/037238&amp;from=rss)
* [2026-04-12, 11:24:18](https://news.ycombinator.com/item?id=47738420) - [Golden eagles&apos; return to English skies gets government backing](https://www.bbc.co.uk/news/articles/cje4zlxqkqdo)
* [2026-04-12, 10:27:08](https://news.ycombinator.com/item?id=47738081) - [Fix monitor that goes black, off or blinks due to static electricity in chair](https://aalonso.dev/blog/2023/how-to-fix-monitor-that-goes-black-off-due-to-static-electricity-in-chair/)
* [2026-04-12, 09:33:00](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss) - [Federal Cyber Experts Called Microsoft&apos;s Cloud a “Pile of Sh*T,” Approved It Anyway](https://soylentnews.org/article.pl?sid=26/04/11/0256207&amp;from=rss)
* [2026-04-12, 04:44:00](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss) - [3D Printing a Motor--Some First Steps](https://soylentnews.org/article.pl?sid=26/04/11/0245252&amp;from=rss)
* [2026-04-12, 00:03:00](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss) - [This New &apos;Laughing Rat&apos; Malware Will Steal Your Data, Hack Your Systems, and Laugh at You](https://soylentnews.org/article.pl?sid=26/04/11/0242235&amp;from=rss)
* [2026-04-11, 19:18:00](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss) - [EFF is Leaving X](https://soylentnews.org/article.pl?sid=26/04/10/0259257&amp;from=rss)
* [2026-04-11, 14:35:00](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss) - [Standard Model of Particle Physics Verified to One Trillionth Accuracy](https://soylentnews.org/article.pl?sid=26/04/10/0256206&amp;from=rss)
* [2026-04-11, 11:03:58](https://news.ycombinator.com/item?id=47729507) - [How do Wake-On-LAN works](https://blog.xaner.dev/post/wake-on-lan/)
* [2026-04-11, 09:50:00](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss) - [Toward Cheaper, Cleaner Hydrogen Production](https://soylentnews.org/article.pl?sid=26/04/10/0254231&amp;from=rss)
* [2026-04-11, 05:09:00](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss) - [Honda Hits Brakes On EV Rollout Amid Rising Losses](https://soylentnews.org/article.pl?sid=26/04/10/0250211&amp;from=rss)
* [2026-04-11, 00:27:00](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss) - [Ancient Rocks Reveal Evidence of the First Continents and Crust Recycling Processes on Earth](https://soylentnews.org/article.pl?sid=26/04/10/0248230&amp;from=rss)
