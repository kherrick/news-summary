# [News Summary](https://kherrick.github.io/news-summary/)

## AI Systems and Advancements

* [The AI-Powered PDF Marks the End of an Era](https://tech.slashdot.org/story/25/08/21/1416226/the-ai-powered-pdf-marks-the-end-of-an-era?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A historical perspective suggesting the evolution of digital documents dominated by AI integration.

* [US Will Not Approve Solar or Wind Power Projects, President Says](https://news.slashdot.org/story/25/08/21/1224252/us-will-not-approve-solar-or-wind-power-projects-president-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Policy implications of the U.S. stance on renewable energy projects and its political context.

* [China Isolates Itself From Worldwide Web For Over an Hour](https://tech.slashdot.org/story/25/08/21/0543252/china-isolates-itself-from-worldwide-web-for-over-an-hour?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on an hour-long self-imposed isolation of China from the global web, raising questions about infrastructure and internet sovereignty.

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

* [2025-08-21, 15:51:48](https://lobste.rs/s/nhmsd8/adding_my_home_electricity_uptime_status) - [adding my home electricity uptime to status.href.cat](https://aggressivelyparaphrasing.me/2025/08/21/adding-my-home-electricity-uptime-to-status-href-cat/)
* [2025-08-21, 15:25:46](https://lobste.rs/s/wthfwo/ledger_2023) - [Ledger. (2023)](https://lock.cmpxchg8b.com/ledger.html)
* [2025-08-21, 15:21:00](https://tech.slashdot.org/story/25/08/21/1416226/the-ai-powered-pdf-marks-the-end-of-an-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI-Powered PDF Marks the End of an Era](https://tech.slashdot.org/story/25/08/21/1416226/the-ai-powered-pdf-marks-the-end-of-an-era?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 15:12:53](https://lobste.rs/s/gayfir/aur_chaos_malware_analysis) - [AUR Chaos malware: an analysis](https://www.mh4ckt3mh4ckt1c4s.xyz/blog/aur-chaos-malware-analysis/)
* [2025-08-21, 15:09:38](https://news.ycombinator.com/item?id=44973758) - [Launch HN: Skope (YC S25) – Outcome-based pricing for software products](https://news.ycombinator.com/item?id=44973758)
* [2025-08-21, 14:53:17](https://lobste.rs/s/worwkg/fun_weirdness_with_ssds) - [Fun and weirdness with SSDs](https://vondra.me/posts/fun-and-weirdness-with-ssds/)
* [2025-08-21, 14:47:43](https://lobste.rs/s/s4jdny/my_other_email_client_is_daemon) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 14:45:10](https://lobste.rs/s/5lp2et/hyperclay_single_file_html_apps) - [Hyperclay | Single File HTML APPS](https://hyperclay.com/)
* [2025-08-21, 14:41:54](https://lobste.rs/s/oxja04/tilus_is_tile_level_kernel_programming) - [Tilus is a tile-level kernel programming language, implemented in Python](https://github.com/NVIDIA/tilus)
* [2025-08-21, 14:40:00](https://news.slashdot.org/story/25/08/21/1224252/us-will-not-approve-solar-or-wind-power-projects-president-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Will Not Approve Solar or Wind Power Projects, President Says](https://news.slashdot.org/story/25/08/21/1224252/us-will-not-approve-solar-or-wind-power-projects-president-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 14:39:45](https://news.ycombinator.com/item?id=44973375) - [Apple Watch wearable foundation model](https://arxiv.org/abs/2507.00191)
* [2025-08-21, 14:35:13](https://lobste.rs/s/pnyraf/new_rust_packaging_model) - [A New Rust Packaging Model](https://guix.gnu.org/en/blog/2025/a-new-rust-packaging-model/)
* [2025-08-21, 14:24:18](https://lobste.rs/s/ztpeql/numa_is_new_network_how_per_socket_memory) - [NUMA Is the New Network: How Per-Socket Memory Models Are Reshaping Microservice Placement](https://codemia.io/blog/path/NUMA-Is-the-New-Network-How-Per-Socket-Memory-Models-Are-Reshaping-Microservice-Placement)
* [2025-08-21, 14:05:10](https://lobste.rs/s/suoszg/d4d4) - [D4d4](https://www.nmichaels.org/musings/d4d4/d4d4/)
* [2025-08-21, 14:00:00](https://tech.slashdot.org/story/25/08/21/0543252/china-isolates-itself-from-worldwide-web-for-over-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Isolates Itself From Worldwide Web For Over an Hour](https://tech.slashdot.org/story/25/08/21/0543252/china-isolates-itself-from-worldwide-web-for-over-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 13:52:50](https://news.ycombinator.com/item?id=44972808) - [In a first, Google has released data on how much energy an AI prompt uses](https://www.technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy/)
* [2025-08-21, 13:18:12](https://news.ycombinator.com/item?id=44972406) - [A Conceptual Model for Storage Unification](https://jack-vanlightly.com/blog/2025/8/21/a-conceptual-model-for-storage-unification)
* [2025-08-21, 13:01:11](https://news.ycombinator.com/item?id=44972238) - [Show HN: ChartDB Cloud – Visualize and Share Database Diagrams](https://app.chartdb.io)
* [2025-08-21, 13:00:00](https://meta.slashdot.org/story/25/08/21/0258229/whistleblower-alleges-meta-artificially-boosted-shops-ads-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Whistleblower Alleges Meta Artificially Boosted Shops Ads Performance](https://meta.slashdot.org/story/25/08/21/0258229/whistleblower-alleges-meta-artificially-boosted-shops-ads-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 12:58:17](https://news.ycombinator.com/item?id=44972213) - [How Well Does the Money Laundering Control System Work?](https://www.journals.uchicago.edu/doi/10.1086/735665)
* [2025-08-21, 12:53:16](https://news.ycombinator.com/item?id=44972151) - [AWS CEO says using AI to replace junior staff is &apos;Dumbest thing I&apos;ve ever heard&apos;](https://www.theregister.com/2025/08/21/aws_ceo_entry_level_jobs_opinion/)
* [2025-08-21, 12:24:07](https://lobste.rs/s/cr9eqw/month_ai_bugs_2025) - [The Month of AI Bugs 2025](https://monthofaibugs.com/)
* [2025-08-21, 12:20:53](https://news.ycombinator.com/item?id=44971845) - [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/)
* [2025-08-21, 12:08:30](https://news.ycombinator.com/item?id=44971744) - [Show HN: Using Common Lisp from Inside the Browser](https://turtleware.eu/posts/Using-Common-Lisp-from-inside-the-Browser.html)
* [2025-08-21, 12:00:31](https://news.ycombinator.com/item?id=44971670) - [Activeloop (YC S18) Is Hiring Member of Technical Staff – Back End Engineering](https://careers.activeloop.ai/)
* [2025-08-21, 11:35:22](https://news.ycombinator.com/item?id=44971487) - [AI crawlers, fetchers are blowing up websites; Meta, OpenAI are worst offenders](https://www.theregister.com/2025/08/21/ai_crawler_traffic/)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 11:22:50](https://news.ycombinator.com/item?id=44971396) - [Margin debt surges to record high](https://www.advisorperspectives.com/dshort/updates/2025/07/23/margin-debt-surges-record-high-june-2025)
* [2025-08-21, 11:04:08](https://news.ycombinator.com/item?id=44971273) - [Mark Zuckerberg freezes AI hiring amid bubble fears](https://www.telegraph.co.uk/business/2025/08/21/zuckerberg-freezes-ai-hiring-amid-bubble-fears/)
* [2025-08-21, 10:54:13](https://news.ycombinator.com/item?id=44971212) - [Using Podman, Compose and BuildKit](https://emersion.fr/blog/2025/using-podman-compose-and-buildkit/)
* [2025-08-21, 10:12:35](https://news.ycombinator.com/item?id=44970981) - [Why is D3 so Verbose?](https://theheasman.com/short_stories/why-is-d3-code-so-long-and-complicated-or-why-is-it-so-verbose/)
* [2025-08-21, 10:00:00](https://tech.slashdot.org/story/25/08/21/0218239/intuit-claims-security-concerns-in-dropping-windows-10-for-turbotax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Claims Security Concerns In Dropping Windows 10 For TurboTax](https://tech.slashdot.org/story/25/08/21/0218239/intuit-claims-security-concerns-in-dropping-windows-10-for-turbotax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 09:30:52](https://news.ycombinator.com/item?id=44970751) - [To Infinity but Not Beyond](https://meyerweb.com/eric/thoughts/2025/08/20/to-infinity-but-not-beyond/)
* [2025-08-21, 07:31:51](https://lobste.rs/s/sm1y3p/faster_loading_credentials_from) - [Faster loading of credentials from Bitwarden using rbw](https://blog.aleksic.dev/short-note-faster-loading-of-credentials-from-bitwarden-using-rbw)
* [2025-08-21, 07:00:00](https://hardware.slashdot.org/story/25/08/21/0251255/google-plans-advanced-nuclear-reactor-project-for-tennessee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Plans Advanced Nuclear Reactor Project For Tennessee](https://hardware.slashdot.org/story/25/08/21/0251255/google-plans-advanced-nuclear-reactor-project-for-tennessee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 06:20:11](https://news.ycombinator.com/item?id=44969622) - [Show HN: I replaced vector databases with Git for AI memory (PoC)](https://github.com/Growth-Kinetics/DiffMem)
* [2025-08-21, 04:50:00](https://lobste.rs/s/ywhvfi/building_goreleaser_from_shell_script) - [Building GoReleaser: from shell script to paid product | Carlos Becker](https://carlosbecker.com/posts/building-goreleaser/)
* [2025-08-21, 03:30:00](https://science.slashdot.org/story/25/08/20/2245213/serbian-scientists-experiment-with-mealworms-to-degrade-polystyrene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Serbian Scientists Experiment With Mealworms To Degrade Polystyrene](https://science.slashdot.org/story/25/08/20/2245213/serbian-scientists-experiment-with-mealworms-to-degrade-polystyrene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 03:08:51](https://lobste.rs/s/dlobhb/optique_type_safe_combinatorial_cli) - [Optique: Type-safe combinatorial CLI parser for TypeScript](https://optique.dev/)
* [2025-08-21, 02:30:00](https://tech.slashdot.org/story/25/08/21/0227208/meta-freezes-ai-hiring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Freezes AI Hiring](https://tech.slashdot.org/story/25/08/21/0227208/meta-freezes-ai-hiring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-21, 01:25:00](https://science.slashdot.org/story/25/08/20/2236217/most-air-cleaning-devices-have-not-been-tested-on-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most Air Cleaning Devices Have Not Been Tested On People](https://science.slashdot.org/story/25/08/20/2236217/most-air-cleaning-devices-have-not-been-tested-on-people?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 00:45:00](https://yro.slashdot.org/story/25/08/20/2222249/masimo-sues-us-customs-over-apple-watch-blood-oxygen-workaround?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Masimo Sues US Customs Over Apple Watch Blood Oxygen Workaround](https://yro.slashdot.org/story/25/08/20/2222249/masimo-sues-us-customs-over-apple-watch-blood-oxygen-workaround?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 00:31:56](https://lobste.rs/s/hrdrbr/why_does_my_regular_expression_work_x_not_y) - [Why does my regular expression work in X but not in Y?](https://unix.stackexchange.com/questions/119905/why-does-my-regular-expression-work-in-x-but-not-in-y)
* [2025-08-21, 00:10:07](https://news.ycombinator.com/item?id=44967796) - [A statistical analysis of Rotten Tomatoes](https://www.statsignificant.com/p/is-rotten-tomatoes-still-reliable)
* [2025-08-21, 00:02:00](https://it.slashdot.org/story/25/08/20/2214216/oregon-man-accused-of-operating-one-of-most-powerful-attack-botnets-ever-seen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oregon Man Accused of Operating One of Most Powerful Attack &apos;Botnets&apos; Ever Seen](https://it.slashdot.org/story/25/08/20/2214216/oregon-man-accused-of-operating-one-of-most-powerful-attack-botnets-ever-seen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 23:20:00](https://hardware.slashdot.org/story/25/08/20/2113247/googles-pixel-watch-4-has-a-big-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Pixel Watch 4 Has a Big Focus On AI](https://hardware.slashdot.org/story/25/08/20/2113247/googles-pixel-watch-4-has-a-big-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 23:10:37](https://news.ycombinator.com/item?id=44967469) - [Code review can be better](https://tigerbeetle.com/blog/2025-08-04-code-review-can-be-better/)
* [2025-08-20, 22:40:00](https://hardware.slashdot.org/story/25/08/20/2058229/harvard-dropouts-to-launch-always-on-ai-smart-glasses-that-listen-record-every-conversation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Harvard Dropouts To Launch &apos;Always On&apos; AI Smart Glasses That Listen, Record Every Conversation](https://hardware.slashdot.org/story/25/08/20/2058229/harvard-dropouts-to-launch-always-on-ai-smart-glasses-that-listen-record-every-conversation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 22:02:00](https://slashdot.org/story/25/08/20/2051231/trump-confirms-us-is-seeking-10-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Confirms US Is Seeking 10% Stake In Intel](https://slashdot.org/story/25/08/20/2051231/trump-confirms-us-is-seeking-10-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 21:25:00](https://tech.slashdot.org/story/25/08/20/2044250/gemini-for-home-is-googles-biggest-smart-home-play-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini For Home Is Google&apos;s Biggest Smart Home Play In Years](https://tech.slashdot.org/story/25/08/20/2044250/gemini-for-home-is-googles-biggest-smart-home-play-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 21:04:23](https://lobste.rs/s/muv9ja/let_jj_absorb_help_you_keep_clean_commit) - [Let `jj absorb` help you keep a clean commit history](https://www.pauladamsmith.com/blog/2025/08/jj-absorb.html)
* [2025-08-20, 20:48:01](https://lobste.rs/s/3bsfgs/nasa_s_10_rules_for_safety_critical_code) - [NASA’s 10 Rules for Safety-Critical Code](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code)
* [2025-08-20, 20:30:48](https://lobste.rs/s/qw5iyf/why_are_anime_catgirls_blocking_my_access) - [Why are anime catgirls blocking my access to the Linux kernel?](https://lock.cmpxchg8b.com/anubis.html)
* [2025-08-20, 19:14:34](https://lobste.rs/s/78syo9/default_musl_allocator_considered) - [Default musl allocator considered harmful (to performance)](https://nickb.dev/blog/default-musl-allocator-considered-harmful-to-performance/)
* [2025-08-20, 18:45:16](https://lobste.rs/s/seffg9/zig_0_15_1_release_notes) - [Zig 0.15.1 Release Notes](https://ziglang.org/download/0.15.1/release-notes.html)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 15:52:16](https://lobste.rs/s/8h67j1/container_aware_gomaxprocs) - [Container-aware GOMAXPROCS](https://go.dev/blog/container-aware-gomaxprocs)
* [2025-08-20, 15:23:19](https://news.ycombinator.com/item?id=44962771) - [Home Depot sued for &apos;secretly&apos; using facial recognition at self-checkouts](https://petapixel.com/2025/08/20/home-depot-sued-for-secretly-using-facial-recognition-technology-on-self-checkout-cameras/)
* [2025-08-20, 14:54:45](https://news.ycombinator.com/item?id=44962529) - [Why are anime catgirls blocking my access to the Linux kernel?](https://lock.cmpxchg8b.com/anubis.html)
* [2025-08-20, 14:53:04](https://lobste.rs/s/jslvmu/const_trait_counterexamples) - [Const Trait Counterexamples](https://dbeef.dev/const-trait-counterexamples/)
* [2025-08-20, 14:02:47](https://news.ycombinator.com/item?id=44962066) - [Show HN: I was curious about spherical helix, ended up making this visualization](https://visualrambling.space/moving-objects-in-3d/)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:03:02](https://lobste.rs/s/zxglnn/code_review_can_be_better) - [Code Review Can Be Better](https://tigerbeetle.com/blog/2025-08-04-code-review-can-be-better/)
* [2025-08-20, 09:51:43](https://lobste.rs/s/sqh8uy/zed_for_windows_what_s_taking_so_long) - [Zed for Windows: What&apos;s Taking So Long?](https://zed.dev/blog/windows-progress-report)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-20, 00:38:56](https://lobste.rs/s/oqhuo2/git_rfc_introduce_jj_inspired_git_history) - [Git RFC: Introduce jj-inspired git-history(1) command for easy history editing](https://lore.kernel.org/git/20250819-b4-pks-history-builtin-v1-0-9b77c32688fe@pks.im/)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 16:01:44](https://news.ycombinator.com/item?id=44942099) - [Show HN: OS X Mavericks Forever](https://mavericksforever.com/)
* [2025-08-18, 13:56:44](https://news.ycombinator.com/item?id=44940649) - [Sütterlin](https://en.wikipedia.org/wiki/S%C3%BCtterlin)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 07:11:00](https://news.ycombinator.com/item?id=44938156) - [Unification (2018)](https://eli.thegreenplace.net/2018/unification/)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 20:11:00](https://news.ycombinator.com/item?id=44934529) - [The rise and fall of the Seagaia Ocean Dome wave pool](https://www.surfertoday.com/surfing/the-untold-story-of-the-seagaia-ocean-dome-indoor-wave-pool)
* [2025-08-17, 20:04:00](https://news.ycombinator.com/item?id=44934476) - [You Should Add Debug Views to Your DB](https://chrispenner.ca/posts/views-for-debugging)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 16:57:50](https://news.ycombinator.com/item?id=44933019) - [Sixteen bottles of wine riddle](https://chriskw.xyz/2025/08/11/Wine/)
* [2025-08-17, 15:42:32](https://news.ycombinator.com/item?id=44932401) - [D4d4](https://www.nmichaels.org/musings/d4d4/d4d4/)
* [2025-08-17, 13:18:21](https://news.ycombinator.com/item?id=44931371) - [Epson MX-80 Fonts](https://mw.rat.bz/MX-80/)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
