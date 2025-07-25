# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Technology

* [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Mercedes-Benz Is Already Testing Solid-State Batteries In EVs With Over 600 Miles Range](https://hardware.slashdot.org/story/25/07/25/0022231/mercedes-benz-is-already-testing-solid-state-batteries-in-evs-with-over-600-miles-range?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Largest-Ever Supernova Catalog Provides Further Evidence Dark Energy Is Weakening](https://science.slashdot.org/story/25/07/25/0018211/largest-ever-supernova-catalog-provides-further-evidence-dark-energy-is-weakening?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Its Ethical Challenges

* [Indian Studio Uses AI To Change 12-Year-Old Film's Ending Without Director's Consent in Apparent First](https://entertainment.slashdot.org/story/25/07/25/1214244/indian-studio-uses-ai-to-change-12-year-old-films-ending-without-directors-consent-in-apparent-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google spoofed via DKIM replay attack: A technical breakdown](https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/)

* [College Grads Are Pursuing a New Career Path: Training AI Models](https://news.slashdot.org/story/25/07/25/0126222/college-grads-are-pursuing-a-new-career-path-training-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Academic and Tech Industries

* [We're Not Learning Anything: Stanford GSB Students Sound The Alarm Over Academics](https://news.slashdot.org/story/25/07/25/1521224/were-not-learning-anything-stanford-gsb-students-sound-the-alarm-over-academics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Intel Will Shed 24,000 Employees This Year, Retreat In Germany, Poland, Costa Rica, and Ohio](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24-000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Gaming and Virtual Development

* [Programming Vehicles in Games](https://wassimulator.com/blog/programming/programming_vehicles_in_games.html)

* [Call of Duty Maker Goes To War With 'Parasitic' Cheat Developers in LA Federal Court](https://games.slashdot.org/story/25/07/25/1235202/call-of-duty-maker-goes-to-war-with-parasitic-cheat-developers-in-la-federal-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Social Insights

* [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)

* [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)

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

* [2025-07-25, 15:21:00](https://news.slashdot.org/story/25/07/25/1521224/were-not-learning-anything-stanford-gsb-students-sound-the-alarm-over-academics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We&apos;re Not Learning Anything&apos;: Stanford GSB Students Sound The Alarm Over Academics](https://news.slashdot.org/story/25/07/25/1521224/were-not-learning-anything-stanford-gsb-students-sound-the-alarm-over-academics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 15:12:34](https://lobste.rs/s/slvzea/using_fortune_reinforce_habits) - [Using fortune to reinforce habits](https://www.judy.co.uk/blog/using-fortune-to-reinforce-habits/)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 14:41:03](https://news.ycombinator.com/item?id=44683682) - [Programming Vehicles in Games](https://wassimulator.com/blog/programming/programming_vehicles_in_games.html)
* [2025-07-25, 14:40:00](https://games.slashdot.org/story/25/07/25/1235202/call-of-duty-maker-goes-to-war-with-parasitic-cheat-developers-in-la-federal-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Call of Duty&apos; Maker Goes To War With &apos;Parasitic&apos; Cheat Developers in LA Federal Court](https://games.slashdot.org/story/25/07/25/1235202/call-of-duty-maker-goes-to-war-with-parasitic-cheat-developers-in-la-federal-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 14:38:50](https://lobste.rs/s/wvy1o7/montana_mini_computer) - [The MonTana Mini Computer](https://mtmc.cs.montana.edu)
* [2025-07-25, 14:38:42](https://lobste.rs/s/c4bhyg/programming_vehicles_games) - [Programming Vehicles in Games](https://wassimulator.com/blog/programming/programming_vehicles_in_games.html)
* [2025-07-25, 14:25:53](https://news.ycombinator.com/item?id=44683490) - [Show HN: The Montana MiniComputer](https://mtmc.cs.montana.edu/)
* [2025-07-25, 14:25:30](https://news.ycombinator.com/item?id=44683481) - [Google&apos;s shortened goo.gl links will stop working next month](https://www.theverge.com/news/713125/google-url-shortener-links-shutdown-deadline)
* [2025-07-25, 14:23:10](https://lobste.rs/s/nz9afc/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nz9afc/what_are_you_doing_this_weekend)
* [2025-07-25, 14:22:35](https://news.ycombinator.com/item?id=44683447) - [Air Canada returned lost bag, it now had knife,toiletries, ticket scanner inside](https://www.cbc.ca/news/canada/newfoundland-labrador/air-canada-mystery-baggage-1.7592756)
* [2025-07-25, 14:00:00](https://entertainment.slashdot.org/story/25/07/25/1214244/indian-studio-uses-ai-to-change-12-year-old-films-ending-without-directors-consent-in-apparent-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian Studio Uses AI To Change 12-Year-Old Film&apos;s Ending Without Director&apos;s Consent in Apparent First](https://entertainment.slashdot.org/story/25/07/25/1214244/indian-studio-uses-ai-to-change-12-year-old-films-ending-without-directors-consent-in-apparent-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 13:40:19](https://news.ycombinator.com/item?id=44683011) - [Dwl: Dwm for Wayland](https://codeberg.org/dwl/dwl)
* [2025-07-25, 13:35:09](https://news.ycombinator.com/item?id=44682964) - [It&apos;s DE9, Not DB9](https://news.sparkfun.com/14298)
* [2025-07-25, 13:30:54](https://news.ycombinator.com/item?id=44682932) - [Who has the fastest F1 website (2021)](https://jakearchibald.com/2021/f1-perf-part-3/)
* [2025-07-25, 13:00:00](https://news.slashdot.org/story/25/07/25/0126222/college-grads-are-pursuing-a-new-career-path-training-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Grads Are Pursuing a New Career Path: Training AI Models](https://news.slashdot.org/story/25/07/25/0126222/college-grads-are-pursuing-a-new-career-path-training-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 12:39:41](https://news.ycombinator.com/item?id=44682465) - [Up to date prices for LLM APIs all in one place](https://pricepertoken.com/)
* [2025-07-25, 12:00:00](https://tech.slashdot.org/story/25/07/25/0133216/american-airlines-chief-blasts-deltas-ai-pricing-plans-as-inappropriate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Airlines Chief Blasts Delta&apos;s AI Pricing Plans as &apos;Inappropriate&apos;](https://tech.slashdot.org/story/25/07/25/0133216/american-airlines-chief-blasts-deltas-ai-pricing-plans-as-inappropriate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 11:23:51](https://news.ycombinator.com/item?id=44681950) - [Lisp project of the day](https://40ants.com/lisp-project-of-the-day/index.html)
* [2025-07-25, 11:16:37](https://lobste.rs/s/1bpslf/433_how_make_font_says_nothing) - [433: How to Make a Font that Says Nothing](https://untested.sonnet.io/notes/433-how-to-make-a-font-that-says-nothing/)
* [2025-07-25, 10:47:07](https://news.ycombinator.com/item?id=44681740) - [My website is one binary (2022)](https://j3s.sh/thought/my-website-is-one-binary.html)
* [2025-07-25, 10:16:26](https://news.ycombinator.com/item?id=44681565) - [Qwen3-235B-A22B-Thinking-2507](https://huggingface.co/Qwen/Qwen3-235B-A22B-Thinking-2507)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 10:00:00](https://hardware.slashdot.org/story/25/07/25/0022231/mercedes-benz-is-already-testing-solid-state-batteries-in-evs-with-over-600-miles-range?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mercedes-Benz Is Already Testing Solid-State Batteries In EVs With Over 600 Miles Range](https://hardware.slashdot.org/story/25/07/25/0022231/mercedes-benz-is-already-testing-solid-state-batteries-in-evs-with-over-600-miles-range?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 09:14:18](https://lobste.rs/s/xtiwkr/time_i_wasted_weeks_hand_optimizing) - [That time I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160)
* [2025-07-25, 08:44:43](https://lobste.rs/s/xxtnsf/programming_vehicles_games) - [Programming Vehicles in Games](https://www.youtube.com/watch?v=MrIAw980iYg)
* [2025-07-25, 08:18:28](https://lobste.rs/s/bva342/vet_command_line_tool_acts_as_safety_net) - [vet a command-line tool that acts as a safety net for the risky curl | bash pattern](https://github.com/vet-run/vet)
* [2025-07-25, 08:16:21](https://lobste.rs/s/7cffqo/celebrating_20_years_mdn) - [Celebrating 20 years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)
* [2025-07-25, 07:26:37](https://news.ycombinator.com/item?id=44680547) - [Games Look Bad: HDR and Tone Mapping](https://ventspace.wordpress.com/2017/10/20/games-look-bad-part-1-hdr-and-tone-mapping/)
* [2025-07-25, 07:00:00](https://science.slashdot.org/story/25/07/25/0018211/largest-ever-supernova-catalog-provides-further-evidence-dark-energy-is-weakening?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Largest-Ever Supernova Catalog Provides Further Evidence Dark Energy Is Weakening](https://science.slashdot.org/story/25/07/25/0018211/largest-ever-supernova-catalog-provides-further-evidence-dark-energy-is-weakening?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 06:47:07](https://news.ycombinator.com/item?id=44680308) - [Quantitative AI progress needs accurate and transparent evaluation](https://mathstodon.xyz/@tao/114910028356641733)
* [2025-07-25, 06:47:07](https://lobste.rs/s/klwc0t/open_source_maintenance_fee) - [Open Source Maintenance Fee](https://opensourcemaintenancefee.org/)
* [2025-07-25, 06:18:27](https://lobste.rs/s/dzqdtj/three_http_versions_later_forms_are_still) - [Three HTTP versions later, forms are still a mess](https://yorickpeterse.com/articles/three-http-versions-later-forms-are-still-a-mess/)
* [2025-07-25, 05:28:40](https://news.ycombinator.com/item?id=44679854) - [Google spoofed via DKIM replay attack: A technical breakdown](https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 04:59:45](https://lobste.rs/s/lwluih/webtransport_implementation_c) - [A WebTransport implementation in C](https://github.com/andrewmd5/libwtf)
* [2025-07-25, 03:30:00](https://hardware.slashdot.org/story/25/07/24/2356212/two-major-ai-coding-tools-wiped-out-user-data-after-making-cascading-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Major AI Coding Tools Wiped Out User Data After Making Cascading Mistakes](https://hardware.slashdot.org/story/25/07/24/2356212/two-major-ai-coding-tools-wiped-out-user-data-after-making-cascading-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 02:50:32](https://news.ycombinator.com/item?id=44679048) - [Asciinema: Record and share your terminal sessions](https://asciinema.org)
* [2025-07-25, 01:40:11](https://news.ycombinator.com/item?id=44678512) - [Celebrating 20 Years of MDN](https://developer.mozilla.org/en-US/blog/mdn-turns-20/)
* [2025-07-25, 01:40:00](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Student Jailed For Selling Phishing Kits Linked To $135M of Fraud](https://news.slashdot.org/story/25/07/25/0055206/uk-student-jailed-for-selling-phishing-kits-linked-to-135m-of-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 01:00:00](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Are Developing Artificial Blood That Could Save Lives In Emergencies](https://science.slashdot.org/story/25/07/25/004220/scientists-are-developing-artificial-blood-that-could-save-lives-in-emergencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
* [2025-07-25, 00:16:35](https://lobste.rs/s/az8v5r/renting_is_for_suckers) - [Renting is for Suckers](https://andrewkelley.me/post/renting-is-for-suckers.html)
* [2025-07-25, 00:04:50](https://lobste.rs/s/ozsbpi/relational_thinking_j) - [Relational Thinking in J](https://storytotell.org/relational-thinking-in-j)
* [2025-07-24, 23:42:00](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Shed 24,000 Employees This Year, Retreat In Germany, Poland, Costa Rica, and Ohio](https://hardware.slashdot.org/story/25/07/24/2339237/intel-will-shed-24000-employees-this-year-retreat-in-germany-poland-costa-rica-and-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 22:52:51](https://lobste.rs/s/abbg3j/when_is_webassembly_going_get_dom_support) - [When Is WebAssembly Going to Get DOM Support? Or, how I learned to stop worrying and love glue code](https://queue.acm.org/detail.cfm?id=3746174)
* [2025-07-24, 22:50:56](https://lobste.rs/s/a9frrj/use_your_type_system) - [Use Your Type System](https://www.dzombak.com/blog/2025/07/use-your-type-system/)
* [2025-07-24, 22:40:00](https://news.slashdot.org/story/25/07/24/2030244/amd-ceo-sees-chips-from-tsmcs-us-plant-costing-5-20-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD CEO Sees Chips From TSMC&apos;s US Plant Costing 5%-20% More](https://news.slashdot.org/story/25/07/24/2030244/amd-ceo-sees-chips-from-tsmcs-us-plant-costing-5-20-more?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 22:00:00](https://tech.slashdot.org/story/25/07/24/2019225/trump-who-promised-to-save-tiktok-threatens-to-shut-down-tiktok?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump, Who Promised To Save TikTok, Threatens To Shut Down TikTok](https://tech.slashdot.org/story/25/07/24/2019225/trump-who-promised-to-save-tiktok-threatens-to-shut-down-tiktok?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 21:48:53](https://news.ycombinator.com/item?id=44676691) - [Graphene OS: a security-enhanced Android build](https://lwn.net/SubscriberLink/1030004/898017c7953c0946/)
* [2025-07-24, 21:20:00](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google URL Shortener Links Will Stop Working Next Month](https://tech.slashdot.org/story/25/07/24/2012243/google-url-shortener-links-will-stop-working-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 21:18:04](https://lobste.rs/s/qpbfsa/new_aarch64_backend) - [New Aarch64 Backend](https://ziglang.org/devlog/2025/#2025-07-23)
* [2025-07-24, 20:40:00](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Releases Public Betas of Its New Software Updates With Liquid Glass](https://apple.slashdot.org/story/25/07/24/205229/apple-releases-public-betas-of-its-new-software-updates-with-liquid-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-24, 20:21:03](https://lobste.rs/s/llo8k8/racket_as_first_language) - [Racket as a first language](https://felleisen.org/matthias/Thoughts/py.html)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 15:35:39](https://news.ycombinator.com/item?id=44672003) - [There is no memory safety without thread safety](https://www.ralfj.de/blog/2025/07/24/memory-safety.html)
* [2025-07-24, 15:18:10](https://lobste.rs/s/omasxh/there_is_no_memory_safety_without_thread) - [There is no memory safety without thread safety](https://www.ralfj.de/blog/2025/07/24/memory-safety.html)
* [2025-07-24, 14:59:15](https://lobste.rs/s/rmlaoa/fallout_s_memory_model) - [Fallout&apos;s Memory Model](https://youtube.com/watch?v=6kB_fko6SIg)
* [2025-07-24, 14:56:00](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss) - [Real Milk Proteins, No Cows: Engineered Bacteria Pave the Way for Vegan Cheese and Yogurt](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss)
* [2025-07-24, 14:48:30](https://lobste.rs/s/aartyj/psa_sqlite_wal_checksums_fail_silently) - [PSA: SQLite WAL checksums fail silently and may lose data](https://avi.im/blag/2025/sqlite-wal-checksum/)
* [2025-07-24, 13:14:09](https://lobste.rs/s/tao1sp/valid_html_zip_bomb) - [A valid HTML zip bomb](https://ache.one/notes/html_zip_bomb)
* [2025-07-24, 12:16:28](https://lobste.rs/s/sf2q8y/wayback_0_1_released) - [Wayback 0.1 released](https://wayback.freedesktop.org/news/2025/07/23/wayback-0.1-released/)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 09:12:07](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools) - [How much do you spend on AI-assisted tools?](https://lobste.rs/s/jcfozl/how_much_do_you_spend_on_ai_assisted_tools)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 01:51:04](https://news.ycombinator.com/item?id=44666032) - [When photography was born, fascination, obsession, and danger followed](https://www.washingtonpost.com/books/2025/07/12/flashes-brilliance-history-early-photography-anika-burgess-review/)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [UPDATED: SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 19:34:56](https://news.ycombinator.com/item?id=44663074) - [AMD CEO sees chips from TSMC&apos;s US plant costing 5%-20% more](https://www.bloomberg.com/news/articles/2025-07-23/amd-ceo-su-sees-chips-from-us-tsmc-plant-costing-5-to-20-more)
* [2025-07-23, 18:21:29](https://lobste.rs/s/sk2yop/you_can_now_disable_all_ai_features_zed) - [You Can Now Disable All AI Features in Zed](https://zed.dev/blog/disable-ai-features)
* [2025-07-23, 17:23:23](https://news.ycombinator.com/item?id=44661673) - [Show HN: Apple Health MCP Server](https://github.com/neiltron/apple-health-mcp)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
* [2025-07-22, 20:09:00](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss) - [Popular Sugar Substitute Linked to Brain Cell Damage and Stroke Risk](https://soylentnews.org/article.pl?sid=25/07/21/2142206&amp;from=rss)
* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-21, 23:51:40](https://news.ycombinator.com/item?id=44641729) - [Nvidia Launches Family of Open Reasoning AI Models: OpenReasoning Nemotron](https://nvidianews.nvidia.com/news/nvidia-launches-family-of-open-reasoning-ai-models-for-developers-and-enterprises-to-build-agentic-ai-platforms)
* [2025-07-21, 20:40:42](https://news.ycombinator.com/item?id=44640143) - [High-speed organic light-emitting diodes achieving 4-Gbps communication](https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-7/issue-03/036005/High-speed-organic-light-emitting-diodes-based-on-dinaphthylperylene-achieving/10.1117/1.AP.7.3.036005.full)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 19:43:18](https://news.ycombinator.com/item?id=44639563) - [Nuclear Reactor SIM by PeteTimesSix](https://petetimessix.itch.io/nuclear-reactors)
* [2025-07-21, 18:28:55](https://news.ycombinator.com/item?id=44638661) - [Rapidus Starts 2nm Gate All Around Prototype Production at IIM-1](https://www.servethehome.com/rapidus-starts-2nm-gate-all-around-prototype-production-at-iim-1/)
* [2025-07-21, 17:01:35](https://news.ycombinator.com/item?id=44637532) - [Brazil central bank to launch Pix installment feature in September](https://www.reuters.com/technology/brazil-central-bank-launch-pix-installment-feature-september-2025-04-03/)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 13:10:59](https://news.ycombinator.com/item?id=44634688) - [Show HN: MCP server for up-to-date Zig standard library documentation](https://github.com/zig-wasm/zig-mcp)
* [2025-07-21, 12:44:59](https://news.ycombinator.com/item?id=44634469) - [Developing with Kiro: Amazon&apos;s New Agentic IDE](https://yehudacohen.substack.com/p/developing-with-kiro-amazons-new)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 10:39:29](https://news.ycombinator.com/item?id=44633648) - [3-JSON](https://rgbcu.be/blog/3-json/)
* [2025-07-21, 07:40:01](https://news.ycombinator.com/item?id=44632674) - [I wasted weeks hand optimizing assembly because I benchmarked on random data](https://www.vidarholen.net/contents/blog/?p=1160)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
