# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Chinese 'Virtual Human' Salespeople Are Outperforming Their Real Human Counterparts](https://slashdot.org/story/25/08/20/1844240/chinese-virtual-human-salespeople-are-outperforming-their-real-human-counterparts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Say farewell to the AI bubble, and get ready for the crash](https://www.latimes.com/business/story/2025-08-20/say-farewell-to-the-ai-bubble-and-get-ready-for-the-crash)

* [FTC Sues LA Fitness For Making it Difficult for Consumers To Cancel Gym Memberships](https://news.slashdot.org/story/25/08/20/180201/ftc-sues-la-fitness-for-making-it-difficult-for-consumers-to-cancel-gym-memberships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Privacy-Preserving Age Verification—and Its Limitations](https://www.cs.columbia.edu/~smb/papers/age-verify.pdf)

* [Microsoft Warns Excel's New AI Function 'Can Give Incorrect Responses' in High-Stakes Scenarios](https://it.slashdot.org/story/25/08/20/128217/microsoft-warns-excels-new-ai-function-can-give-incorrect-responses-in-high-stakes-scenarios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Open Source

* [Show HN: Luminal – Open-source, search-based GPU compiler](https://github.com/luminal-ai/luminal)

* [Building a Regex Engine](https://www.abstractsyntaxseed.com/blog/regex-engine/introduction)

* [A proposal for inline LLM instructions in HTML based on llms.txt](https://vercel.com/blog/a-proposal-for-inline-llm-instructions-in-html)

* [L2AW theorem](https://law-theorem.com/)

* [Git RFC: Introduce jj-inspired git-history(1) command for easy history editing](https://lore.kernel.org/git/20250819-b4-pks-history-builtin-v1-0-9b77c32688fe@pks.im/)

## Hardware and Device Updates

* [Google Refreshes Pixel Lineup With Tensor G5 and Qi2 Charging Across Four Models](https://tech.slashdot.org/story/25/08/20/1651216/google-refreshes-pixel-lineup-with-tensor-g5-and-qi2-charging-across-four-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Pixel 10 Phones](https://blog.google/products/pixel/google-pixel-10-pro-xl/)

* [Sony Raises PS5 Prices by $50 Across All Models in US](https://games.slashdot.org/story/25/08/20/1528221/sony-raises-ps5-prices-by-50-across-all-models-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific and Environmental Discoveries

* [Dramatic Slowdown in Melting of Arctic Sea Ice Surprises Scientists](https://news.slashdot.org/story/25/08/20/1155233/dramatic-slowdown-in-melting-of-arctic-sea-ice-surprises-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)

## Business and Financial News

* [Databricks is raising a Series K Investment at >$100B valuation](https://www.databricks.com/company/newsroom/press-releases/databricks-raising-series-k-investment-100-billion-valuation)

* [US Tech Stocks Hit By Concerns Over Future of AI Boom](https://tech.slashdot.org/story/25/08/20/0821214/us-tech-stocks-hit-by-concerns-over-future-of-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-08-20, 18:45:16](https://lobste.rs/s/seffg9/zig_0_15_1_release_notes) - [Zig 0.15.1 Release Notes](https://ziglang.org/download/0.15.1/release-notes.html)
* [2025-08-20, 18:45:00](https://slashdot.org/story/25/08/20/1844240/chinese-virtual-human-salespeople-are-outperforming-their-real-human-counterparts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese &apos;Virtual Human&apos; Salespeople Are Outperforming Their Real Human Counterparts](https://slashdot.org/story/25/08/20/1844240/chinese-virtual-human-salespeople-are-outperforming-their-real-human-counterparts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 18:12:52](https://news.ycombinator.com/item?id=44964548) - [Say farewell to the AI bubble, and get ready for the crash](https://www.latimes.com/business/story/2025-08-20/say-farewell-to-the-ai-bubble-and-get-ready-for-the-crash)
* [2025-08-20, 18:00:00](https://news.slashdot.org/story/25/08/20/180201/ftc-sues-la-fitness-for-making-it-difficult-for-consumers-to-cancel-gym-memberships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Sues LA Fitness For Making it Difficult for Consumers To Cancel Gym Memberships](https://news.slashdot.org/story/25/08/20/180201/ftc-sues-la-fitness-for-making-it-difficult-for-consumers-to-cancel-gym-memberships?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 17:25:00](https://news.slashdot.org/story/25/08/20/1718225/india-seeks-ban-on-online-betting-apps-to-curb-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Seeks Ban on Online Betting Apps To Curb Addiction](https://news.slashdot.org/story/25/08/20/1718225/india-seeks-ban-on-online-betting-apps-to-curb-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 17:24:10](https://news.ycombinator.com/item?id=44963939) - [Pixel 10 Phones](https://blog.google/products/pixel/google-pixel-10-pro-xl/)
* [2025-08-20, 17:04:51](https://news.ycombinator.com/item?id=44963724) - [An Update on Pytype](https://github.com/google/pytype)
* [2025-08-20, 17:01:10](https://news.ycombinator.com/item?id=44963693) - [14.ai (YC W24) is hiring engineers in SF to build an AI-native Zendesk](https://14.ai/careers)
* [2025-08-20, 16:58:29](https://lobste.rs/s/cufrxi/l2aw_theorem) - [L2AW theorem](https://law-theorem.com/)
* [2025-08-20, 16:53:35](https://news.ycombinator.com/item?id=44963594) - [Debugging Behind the Iron Curtain (2010)](https://www.jakepoz.com/debugging-behind-the-iron-curtain/)
* [2025-08-20, 16:51:00](https://tech.slashdot.org/story/25/08/20/1651216/google-refreshes-pixel-lineup-with-tensor-g5-and-qi2-charging-across-four-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Refreshes Pixel Lineup With Tensor G5 and Qi2 Charging Across Four Models](https://tech.slashdot.org/story/25/08/20/1651216/google-refreshes-pixel-lineup-with-tensor-g5-and-qi2-charging-across-four-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 16:49:42](https://lobste.rs/s/5mlh66/proposal_for_inline_llm_instructions) - [A proposal for inline LLM instructions in HTML based on llms.txt](https://vercel.com/blog/a-proposal-for-inline-llm-instructions-in-html)
* [2025-08-20, 16:29:27](https://news.ycombinator.com/item?id=44963391) - [Best Options for Using AI in Chip Design](https://semiengineering.com/best-options-for-using-ai-in-chip-design/)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 16:13:18](https://news.ycombinator.com/item?id=44963226) - [Show HN: Anchor Relay – A faster, easier way to get Let&apos;s Encrypt certificates](https://anchor.dev/relay)
* [2025-08-20, 16:01:13](https://news.ycombinator.com/item?id=44963135) - [Show HN: Luminal – Open-source, search-based GPU compiler](https://github.com/luminal-ai/luminal)
* [2025-08-20, 16:01:00](https://games.slashdot.org/story/25/08/20/1528221/sony-raises-ps5-prices-by-50-across-all-models-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Raises PS5 Prices by $50 Across All Models in US](https://games.slashdot.org/story/25/08/20/1528221/sony-raises-ps5-prices-by-50-across-all-models-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 15:52:16](https://lobste.rs/s/8h67j1/container_aware_gomaxprocs) - [Container-aware GOMAXPROCS](https://go.dev/blog/container-aware-gomaxprocs)
* [2025-08-20, 15:44:33](https://news.ycombinator.com/item?id=44962969) - [OPA maintainers and Styra employees hired by Apple](https://blog.openpolicyagent.org/note-from-teemu-tim-and-torin-to-the-open-policy-agent-community-2dbbfe494371)
* [2025-08-20, 15:34:07](https://news.ycombinator.com/item?id=44962881) - [Launch HN: Channel3 (YC S25) – A database of every product on the internet](https://news.ycombinator.com/item?id=44962881)
* [2025-08-20, 15:32:44](https://news.ycombinator.com/item?id=44962869) - [Closer to the Metal: Leaving Playwright for CDP](https://browser-use.com/posts/playwright-to-cdp)
* [2025-08-20, 15:30:07](https://news.ycombinator.com/item?id=44962844) - [AWS in 2025: Stuff you think you know that&apos;s now wrong](https://www.lastweekinaws.com/blog/aws-in-2025-the-stuff-you-think-you-know-thats-now-wrong/)
* [2025-08-20, 15:23:01](https://news.ycombinator.com/item?id=44962767) - [Show HN: What country you would hit if you went straight where you&apos;re pointing](https://apps.apple.com/us/app/leascope/id6608979884)
* [2025-08-20, 15:22:00](https://yro.slashdot.org/story/25/08/20/1452208/passengers-sue-delta-united-over-windowless-window-seats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Passengers Sue Delta, United Over Windowless &apos;Window Seats&apos;](https://yro.slashdot.org/story/25/08/20/1452208/passengers-sue-delta-united-over-windowless-window-seats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 14:53:04](https://lobste.rs/s/jslvmu/const_trait_counterexamples) - [Const Trait Counterexamples](https://dbeef.dev/const-trait-counterexamples/)
* [2025-08-20, 14:40:00](https://entertainment.slashdot.org/story/25/08/20/1436205/is-rotten-tomatoes-still-reliable-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Rotten Tomatoes Still Reliable? A Statistical Analysis](https://entertainment.slashdot.org/story/25/08/20/1436205/is-rotten-tomatoes-still-reliable-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 14:02:47](https://news.ycombinator.com/item?id=44962066) - [Show HN: I was curious about spherical helix, ended up making this visualization](https://visualrambling.space/moving-objects-in-3d/)
* [2025-08-20, 14:01:26](https://news.ycombinator.com/item?id=44962059) - [Gemma 3 270M re-implemented in pure PyTorch for local tinkering](https://github.com/rasbt/LLMs-from-scratch/tree/main/ch05/12_gemma3)
* [2025-08-20, 14:01:00](https://it.slashdot.org/story/25/08/20/128217/microsoft-warns-excels-new-ai-function-can-give-incorrect-responses-in-high-stakes-scenarios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Warns Excel&apos;s New AI Function &apos;Can Give Incorrect Responses&apos; in High-Stakes Scenarios](https://it.slashdot.org/story/25/08/20/128217/microsoft-warns-excels-new-ai-function-can-give-incorrect-responses-in-high-stakes-scenarios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 13:37:15](https://news.ycombinator.com/item?id=44961847) - [Improvements to OCaml code editing: the basics of a refactor engine](https://tarides.com/blog/2025-08-20-internship-report-refactoring-tools-coming-to-merlin/)
* [2025-08-20, 13:36:47](https://lobste.rs/s/t3q23z/improvements_ocaml_code_editing_basics) - [Improvements to OCaml code editing: the basics of a refactor engine](https://tarides.com/blog/2025-08-20-internship-report-refactoring-tools-coming-to-merlin/)
* [2025-08-20, 12:30:00](https://news.slashdot.org/story/25/08/20/1155233/dramatic-slowdown-in-melting-of-arctic-sea-ice-surprises-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dramatic Slowdown in Melting of Arctic Sea Ice Surprises Scientists](https://news.slashdot.org/story/25/08/20/1155233/dramatic-slowdown-in-melting-of-arctic-sea-ice-surprises-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 12:13:16](https://news.ycombinator.com/item?id=44961172) - [Sequoia backs Zed](https://zed.dev/blog/sequoia-backs-zed)
* [2025-08-20, 12:12:08](https://lobste.rs/s/n85izm/building_regex_engine) - [Building a Regex Engine](https://www.abstractsyntaxseed.com/blog/regex-engine/introduction)
* [2025-08-20, 12:08:29](https://lobste.rs/s/hx1dft/tag_based_logging) - [Tag-based logging](https://mmapped.blog/posts/44-tag-based-logging)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:03:02](https://lobste.rs/s/zxglnn/code_review_can_be_better) - [Code Review Can Be Better](https://tigerbeetle.com/blog/2025-08-04-code-review-can-be-better/)
* [2025-08-20, 10:32:12](https://news.ycombinator.com/item?id=44960594) - [Show HN: Project management system for Claude Code](https://github.com/automazeio/ccpm)
* [2025-08-20, 10:23:29](https://lobste.rs/s/vldu27/privacy_preserving_age_verification_its) - [Privacy-Preserving Age Verification—and Its Limitations](https://www.cs.columbia.edu/~smb/papers/age-verify.pdf)
* [2025-08-20, 09:51:43](https://lobste.rs/s/sqh8uy/zed_for_windows_what_s_taking_so_long) - [Zed for Windows: What&apos;s Taking So Long?](https://zed.dev/blog/windows-progress-report)
* [2025-08-20, 09:43:04](https://news.ycombinator.com/item?id=44960316) - [Tidewave Web: in-browser coding agent for Rails and Phoenix](https://tidewave.ai/blog/tidewave-web-phoenix-rails)
* [2025-08-20, 08:30:00](https://tech.slashdot.org/story/25/08/20/0821214/us-tech-stocks-hit-by-concerns-over-future-of-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Stocks Hit By Concerns Over Future of AI Boom](https://tech.slashdot.org/story/25/08/20/0821214/us-tech-stocks-hit-by-concerns-over-future-of-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 08:15:00](https://news.ycombinator.com/item?id=44959833) - [Mirrorshades: The Cyberpunk Anthology (1986)](https://www.rudyrucker.com/mirrorshades/HTML/)
* [2025-08-20, 07:11:12](https://lobste.rs/s/s0ppha/why_is_my_device_touchpad_mouse_keyboard) - [Why is my device a touchpad and a mouse and a keyboard?](http://who-t.blogspot.com/2025/08/why-is-my-device-touchpad-and-mouse-and.html)
* [2025-08-20, 07:00:04](https://lobste.rs/s/ieopk7/monad_annoyance) - [Monad annoyance](https://macwright.com/2025/08/19/monad-annoyance)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 06:06:15](https://news.ycombinator.com/item?id=44959092) - [Databricks is raising a Series K Investment at &gt;$100B valuation](https://www.databricks.com/company/newsroom/press-releases/databricks-raising-series-k-investment-100-billion-valuation)
* [2025-08-20, 05:07:19](https://lobste.rs/s/i0ismi/some_tricks_for_list_manipulation) - [Some Tricks for List Manipulation](https://doisinkidney.com/posts/2019-05-08-list-manipulation-tricks.html)
* [2025-08-20, 05:00:00](https://news.slashdot.org/story/25/08/19/2356238/indias-got-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Got Time](https://news.slashdot.org/story/25/08/19/2356238/indias-got-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 04:27:29](https://news.ycombinator.com/item?id=44958621) - [Analysis of the GFW&apos;s Unconditional Port 443 Block on August 20, 2025](https://gfw.report/blog/gfw_unconditional_rst_20250820/en/)
* [2025-08-20, 03:33:44](https://lobste.rs/s/uwwr6r/monoid_augmented_fifos_deamortised) - [Monoid-augmented FIFOs, deamortised](https://pvk.ca/Blog/2025/08/19/monoid-augmented-fifos/)
* [2025-08-20, 02:32:00](https://apple.slashdot.org/story/25/08/19/2351234/apple-is-reportedly-making-more-of-its-new-iphones-in-india-instead-of-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple is Reportedly Making More of Its New iPhones in India Instead of China](https://apple.slashdot.org/story/25/08/19/2351234/apple-is-reportedly-making-more-of-its-new-iphones-in-india-instead-of-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 02:12:51](https://lobste.rs/s/xecakg/long_season_langdev) - [The long season of langdev](https://blog.fogus.me/langdev/long-season.html)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-20, 00:38:56](https://lobste.rs/s/oqhuo2/git_rfc_introduce_jj_inspired_git_history) - [Git RFC: Introduce jj-inspired git-history(1) command for easy history editing](https://lore.kernel.org/git/20250819-b4-pks-history-builtin-v1-0-9b77c32688fe@pks.im/)
* [2025-08-20, 00:30:00](https://hardware.slashdot.org/story/25/08/19/2347235/electricity-prices-are-climbing-more-than-twice-as-fast-as-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electricity Prices Are Climbing More Than Twice as Fast as Inflation](https://hardware.slashdot.org/story/25/08/19/2347235/electricity-prices-are-climbing-more-than-twice-as-fast-as-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 00:15:03](https://news.ycombinator.com/item?id=44957443) - [AGENTS.md – Open format for guiding coding agents](https://agents.md/)
* [2025-08-19, 23:04:00](https://tech.slashdot.org/story/25/08/19/233241/pakistans-internet-connectivity-abruptly-plummets-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan&apos;s Internet Connectivity Abruptly Plummets To 20%](https://tech.slashdot.org/story/25/08/19/233241/pakistans-internet-connectivity-abruptly-plummets-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 22:41:16](https://news.ycombinator.com/item?id=44956915) - [How to Draw a Space Invader](https://muffinman.io/blog/invaders/)
* [2025-08-19, 22:02:00](https://it.slashdot.org/story/25/08/19/1849240/googles-ai-overviews-led-users-astray-reports-say-some-phone-numbers-are-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Overviews Led Users Astray, Reports Say Some Phone Numbers Are Scams](https://it.slashdot.org/story/25/08/19/1849240/googles-ai-overviews-led-users-astray-reports-say-some-phone-numbers-are-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 17:53:27](https://lobste.rs/s/8amms6/crlite_fast_private_comprehensive) - [CRLite: Fast, private, and comprehensive certificate revocation checking in Firefox](https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 16:23:00](https://lobste.rs/s/c417pn/emacs_as_your_video_trimming_tool) - [Emacs as your video-trimming tool](https://xenodium.com/emacs-as-your-video-trimming-tool)
* [2025-08-19, 16:04:00](https://lobste.rs/s/7mjacp/smalljs) - [SmallJS](https://small-js.org/Home/Home.html)
* [2025-08-19, 14:35:30](https://lobste.rs/s/fqhfqc/language_models_as_thespians) - [Language Models as Thespians](https://jstrieb.github.io/posts/llm-thespians/)
* [2025-08-19, 14:13:05](https://lobste.rs/s/owhphj/lawnmower_irc_server) - [The Lawnmower IRC Server](https://jotunheimr.idlerpg.net/users/jotun/lawnmower/)
* [2025-08-19, 13:54:47](https://lobste.rs/s/va2mvi/without_futex_it_s_futile) - [Without the futex, it&apos;s futile](https://h4x0r.org/futex/)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 11:14:32](https://lobste.rs/s/7wwm4h/reserve_first) - [Reserve First](https://matklad.github.io/2025/08/16/reserve-first.html)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 04:30:31](https://lobste.rs/s/ik0pjv/left_right_programming) - [Left to Right Programming](https://graic.net/p/left-to-right-programming)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 18:18:36](https://news.ycombinator.com/item?id=44943666) - [How to Think About GPUs](https://jax-ml.github.io/scaling-book/gpus/)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 12:34:43](https://news.ycombinator.com/item?id=44939874) - [Show HN: Strudel Flow, a pattern sequencer built with Strudel and React Flow](https://github.com/xyflow/strudel-flow)
* [2025-08-18, 12:34:36](https://news.ycombinator.com/item?id=44939873) - [Show HN: Typed-arrow – compile‑time Arrow schemas for Rust](https://github.com/tonbo-io/typed-arrow)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 11:28:32](https://news.ycombinator.com/item?id=44939456) - [MapLibre Tile: A next generation geospatial format optimized for rendering](https://arxiv.org/abs/2508.10791)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 06:01:44](https://news.ycombinator.com/item?id=44937819) - [The Block Stacking Problem](https://sites.pitt.edu/~jdnorton/Goodies/block_stacking/block_stacking.html)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-17, 23:29:54](https://news.ycombinator.com/item?id=44935850) - [The Rise and Fall of Music Ringtones: A Statistical Analysis](https://www.statsignificant.com/p/the-rise-and-fall-of-music-ringtones)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
* [2025-08-16, 22:07:00](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss) - [Americans Who ‘Learned To Code’ At Obama’s Behest Can’t Find Jobs Now](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss)
* [2025-08-16, 17:23:00](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss) - [On its Fifth Try, SpaceX Manages Launch of Competitor Amazon&apos;s Satellites](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss)
* [2025-08-16, 12:34:00](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss) - [Trump Administration Considering US Government Purchase of Stake in Intel](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss)
* [2025-08-16, 07:48:00](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss) - [In Trial, People Lost Twice as Much Weight by Ditching Ultraprocessed Food](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss)
* [2025-08-16, 03:07:00](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss) - [Many Countries Banned From Using PayPal for Steam Games in Latest Payment Processor Drama](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss)
