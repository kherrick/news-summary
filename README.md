# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Engineering a fixed-width bit-packed Integer Vector in Rust](https://lukefleed.xyz/posts/compressed-fixedvec/) - An exploration of creating a highly efficient fixed-width integer vector optimized using Rust. [Comments](https://lobste.rs/s/u1rffj/engineering_fixed_width_bit_packed)

* [Building a Custom eBPF Filesystem Watcher to Catch Root Ownership Goofs](https://amandeepsp.github.io/blog/fs-watcher/) - Designing a custom filesystem watcher for tracking changes in root ownership leveraging eBPF. [Comments](https://news.ycombinator.com/item?id=45361071)

* [Grammar Induction](https://en.wikipedia.org/wiki/Grammar_induction) - An insightful exploration of grammar induction, with applications spanning linguistics and artificial intelligence. [Comments](https://lobste.rs/s/nknxl2/grammar_induction)

* [From Steam to Floppy: Porting Modern TypeScript to Run on DOS](https://jimb.ly/2025/09/23/qauntumpulse-from-steam-to-floppy/) - A fascinating project showcasing the adaptation of TypeScript to work on DOS systems. [Comments](https://lobste.rs/s/xlpqhd/from_steam_floppy_porting_modern)

* [Adventures in CPU contention](https://andre.arko.net/2025/09/23/adventures-in-cpu-contention/) - Insights into resolving CPU contention issues in high-demand computing contexts. [Comments](https://lobste.rs/s/gbqfxb/adventures_cpu_contention)

* [S3 scales to petabytes a second on top of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives) - How AWS's S3 service achieves high-speed scalability using slow HDDs. [Comments](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens)

## Artificial Intelligence and Big Data

* [OpenAI, Oracle, SoftBank Plan Five New AI Data Centers For $500 Billion Stargate Project](https://developers.slashdot.org/story/25/09/24/0351254/openai-oracle-softbank-plan-five-new-ai-data-centers-for-500-billion-stargate-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A monumental AI infrastructure project set to redefine the capabilities of data processing. [Comments](https://news.ycombinator.com/item?id=45360475)

* [Meta's Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&from=rss) - Examining the societal and environmental impacts of Meta's enormous AI compute projects. [Comments](https://news.ycombinator.com/item?id=45357693)

* [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing) - A sharp critique of why AI gains traction where other tech paradigms have fallen short. [Comments](https://lobste.rs/s/y6e06t/ai_is_impressive_because_we_ve_failed_at)

## Health and Biotechnology

* [Huntington's disease treated for first time](https://www.bbc.com/news/articles/cevz13xkxpro) - A groundbreaking milestone in the fight against Huntington's disease, offering hope to millions. [Comments](https://news.ycombinator.com/item?id=45358940)

* [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&from=rss) - Insights into the increasing prevalence of cancer among younger populations. [Comments](https://news.ycombinator.com/item?id=45358280)

## Privacy and Cybersecurity

* [The DHS has been harvesting DNA from Americans for years](https://www.wired.com/story/dhs-has-been-collecting-us-citizens-dna-for-years/) - A look into the DNA collection practices by the U.S. Department of Homeland Security. [Comments](https://news.ycombinator.com/item?id=45361239)

* [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The fallout from enforcing new biometric requirements across Vietnam's banking sector. [Comments](https://news.ycombinator.com/item?id=45354644)

* [Exploring GrapheneOS secure allocator: Hardened Malloc](https://www.synacktiv.com/en/publications/exploring-grapheneos-secure-allocator-hardened-malloc) - An analysis of GrapheneOS's advancements in memory security through Hardened Malloc. [Comments](https://news.ycombinator.com/item?id=45358216)

## Space Exploration and Physics

* [NASA Plans Crewed Moon Mission For February](https://science.slashdot.org/story/25/09/24/0335219/nasa-plans-crewed-moon-mission-for-february?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA announces its timeline for the next significant human mission to the Moon. [Comments](https://news.ycombinator.com/item?id=45360475)

* [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&from=rss) - A mysterious phenomenon observed at a supermassive black hole's edge deepens cosmic puzzles. [Comments](https://news.ycombinator.com/item?id=45357693)

## Media and Industry

* [Movie Studio Lionsgate is Struggling To Make AI-Generated Films With Runway](https://entertainment.slashdot.org/story/25/09/24/1442221/movie-studio-lionsgate-is-struggling-to-make-ai-generated-films-with-runway?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Lionsgate's challenges with AI-driven film production highlight current hurdles in creative automation. [Comments](https://news.ycombinator.com/item?id=45361344)

* [Disney+, Hulu Are Hiking Prices Again Next Month](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Streaming giants continue to increase monthly subscription costs, impacting consumers. [Comments](https://news.ycombinator.com/item?id=45354644)

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

* [2025-09-24, 15:55:10](https://lobste.rs/s/u1rffj/engineering_fixed_width_bit_packed) - [Engineering a fixed-width bit-packed Integer Vector in Rust](https://lukefleed.xyz/posts/compressed-fixedvec/)
* [2025-09-24, 15:27:00](https://tech.slashdot.org/story/25/09/24/1527241/3-billion-users-now-use-instagram-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [3 Billion Users Now Use Instagram Monthly](https://tech.slashdot.org/story/25/09/24/1527241/3-billion-users-now-use-instagram-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 15:16:56](https://news.ycombinator.com/item?id=45361574) - [Replace PostgreSQL with Git for your next project](https://devcenter.upsun.com/posts/why-you-should-replace-postgresql-with-git-for-your-next-project/)
* [2025-09-24, 15:00:15](https://news.ycombinator.com/item?id=45361344) - [The Lambda Calculus – Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/lambda-calculus/)
* [2025-09-24, 14:53:26](https://lobste.rs/s/gbqfxb/adventures_cpu_contention) - [Adventures in CPU contention](https://andre.arko.net/2025/09/23/adventures-in-cpu-contention/)
* [2025-09-24, 14:51:44](https://news.ycombinator.com/item?id=45361239) - [The DHS has been harvesting DNA from Americans for years](https://www.wired.com/story/dhs-has-been-collecting-us-citizens-dna-for-years/)
* [2025-09-24, 14:44:20](https://news.ycombinator.com/item?id=45361154) - [Who Funds Misfit Research?](https://blog.spec.tech/p/who-funds-misfit-research)
* [2025-09-24, 14:42:49](https://news.ycombinator.com/item?id=45361140) - [How HubSpot Scaled AI Adoption](https://product.hubspot.com/blog/context-is-key-how-hubspot-scaled-ai-adoption)
* [2025-09-24, 14:42:00](https://entertainment.slashdot.org/story/25/09/24/1442221/movie-studio-lionsgate-is-struggling-to-make-ai-generated-films-with-runway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Movie Studio Lionsgate is Struggling To Make AI-Generated Films With Runway](https://entertainment.slashdot.org/story/25/09/24/1442221/movie-studio-lionsgate-is-struggling-to-make-ai-generated-films-with-runway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 14:38:02](https://news.ycombinator.com/item?id=45361071) - [Building a Custom eBPF Filesystem Watcher to Catch Root Ownership Goofs](https://amandeepsp.github.io/blog/fs-watcher/)
* [2025-09-24, 14:20:33](https://news.ycombinator.com/item?id=45360824) - [Smartphone Cameras Go Hyperspectral](https://spectrum.ieee.org/hyperspectral-imaging)
* [2025-09-24, 14:01:00](https://tech.slashdot.org/story/25/09/24/141223/microsoft-will-let-copilot-take-control-of-your-browser-navigate-tabs-and-complete-tasks-as-you-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Will Let Copilot Take Control of Your Browser, Navigate Tabs and Complete Tasks As You Watch](https://tech.slashdot.org/story/25/09/24/141223/microsoft-will-let-copilot-take-control-of-your-browser-navigate-tabs-and-complete-tasks-as-you-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 13:56:37](https://news.ycombinator.com/item?id=45360475) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-24, 13:53:32](https://lobste.rs/s/byiden/unlocking_performance_python_s_free) - [Unlocking Performance in Python&apos;s Free-Threaded Future: GC Optimizations](https://labs.quansight.org/blog/free-threaded-gc-3-14)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:44:33](https://lobste.rs/s/xlpqhd/from_steam_floppy_porting_modern) - [From Steam to Floppy: Porting Modern TypeScript to Run on DOS](https://jimb.ly/2025/09/23/qauntumpulse-from-steam-to-floppy/)
* [2025-09-24, 13:30:40](https://lobste.rs/s/aimofq/software_substrates_should_there_be_only) - [Software substrates: should there be only one?](https://www.humprog.org/~stephen/research/papers/kell25substratus.pdf)
* [2025-09-24, 13:25:52](https://lobste.rs/s/rhvuc5/pixi_global_now_with_desktop_shortcuts) - [pixi global: now with desktop shortcuts and CLI autocompletions](https://prefix.dev/blog/using-pixi-as-a-system-package-manager-with-shortcuts-and-completions)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 13:00:00](https://developers.slashdot.org/story/25/09/24/0351254/openai-oracle-softbank-plan-five-new-ai-data-centers-for-500-billion-stargate-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI, Oracle, SoftBank Plan Five New AI Data Centers For $500 Billion Stargate Project](https://developers.slashdot.org/story/25/09/24/0351254/openai-oracle-softbank-plan-five-new-ai-data-centers-for-500-billion-stargate-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 12:52:52](https://news.ycombinator.com/item?id=45359604) - [How to Lead in a Room Full of Experts](https://idiallo.com/blog/how-to-lead-in-a-room-full-of-experts)
* [2025-09-24, 12:45:07](https://news.ycombinator.com/item?id=45359524) - [Learning Persian with Anki, ChatGPT and YouTube](https://cjauvin.github.io/posts/learning-persian/)
* [2025-09-24, 12:32:24](https://lobste.rs/s/nknxl2/grammar_induction) - [Grammar induction](https://en.wikipedia.org/wiki/Grammar_induction)
* [2025-09-24, 12:31:52](https://news.ycombinator.com/item?id=45359388) - [My Ed(1) Toolbox](https://aartaka.me/my-ed.html)
* [2025-09-24, 12:30:59](https://news.ycombinator.com/item?id=45359378) - [US Airlines Push to Strip Away Travelers&apos; Rights by Rolling Back Key Protections](https://www.travelandtourworld.com/news/article/american-joins-delta-southwest-united-and-other-us-airlines-push-to-strip-away-travelers-rights-and-add-more-fees-by-rolling-back-key-protections-in-new-deregulation-move/)
* [2025-09-24, 12:28:15](https://news.ycombinator.com/item?id=45359356) - [Rights groups urge UK PM Starmer to abandon plans for mandatory digital ID](https://bigbrotherwatch.org.uk/press-releases/rights-groups-urge-starmer-to-abandon-plans-for-mandatory-digital-id/)
* [2025-09-24, 12:10:00](https://news.ycombinator.com/item?id=45359201) - [WiGLE: Wireless Network Mapping](https://wigle.net/index)
* [2025-09-24, 11:52:50](https://news.ycombinator.com/item?id=45359074) - [EU age verification app not planning desktop support](https://github.com/eu-digital-identity-wallet/av-doc-technical-specification/issues/22)
* [2025-09-24, 11:41:54](https://news.ycombinator.com/item?id=45358980) - [Yt-dlp: Upcoming new requirements for YouTube downloads](https://github.com/yt-dlp/yt-dlp/issues/14404)
* [2025-09-24, 11:37:30](https://news.ycombinator.com/item?id=45358940) - [Huntington&apos;s disease treated for first time](https://www.bbc.com/news/articles/cevz13xkxpro)
* [2025-09-24, 10:37:14](https://news.ycombinator.com/item?id=45358527) - [Preparing for the .NET 10 GC](https://maoni0.medium.com/preparing-for-the-net-10-gc-88718b261ef2)
* [2025-09-24, 10:26:23](https://news.ycombinator.com/item?id=45358433) - [My game&apos;s server is blocked in Spain whenever there&apos;s a football match on](https://old.reddit.com/r/gamedev/comments/1np6kyn/my_games_server_is_blocked_in_spain_whenever/)
* [2025-09-24, 10:05:29](https://news.ycombinator.com/item?id=45358280) - [S3 scales to petabytes a second on top of slow HDDs](https://bigdata.2minutestreaming.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 10:00:00](https://it.slashdot.org/story/25/09/24/0344223/jaguar-land-rover-hack-has-cost-30000-cars-and-threatens-supply-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jaguar Land Rover Hack &apos;Has Cost 30,000 Cars and Threatens Supply Chain&apos;](https://it.slashdot.org/story/25/09/24/0344223/jaguar-land-rover-hack-has-cost-30000-cars-and-threatens-supply-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 09:56:04](https://news.ycombinator.com/item?id=45358216) - [Exploring GrapheneOS secure allocator: Hardened Malloc](https://www.synacktiv.com/en/publications/exploring-grapheneos-secure-allocator-hardened-malloc)
* [2025-09-24, 08:24:20](https://news.ycombinator.com/item?id=45357693) - [That Secret Service SIM farm story is bogus](https://cybersect.substack.com/p/that-secret-service-sim-farm-story)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 07:00:00](https://science.slashdot.org/story/25/09/24/0335219/nasa-plans-crewed-moon-mission-for-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Plans Crewed Moon Mission For February](https://science.slashdot.org/story/25/09/24/0335219/nasa-plans-crewed-moon-mission-for-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 06:36:20](https://lobste.rs/s/capy02/moving_fast_hardware_how_ipod_shipped_6) - [Moving fast in hardware: how the iPod shipped in 6 months](https://www.hscott.net/moving-fast-in-hardware-how-the-ipod-shipped-in-6-months/)
* [2025-09-24, 05:07:10](https://lobste.rs/s/zfktn9/google_continues_invest_350k_rust) - [Google continues to invest 350k in the Rust ecosystem](https://www.linkedin.com/posts/lars-a-bergstrom_android-rust-security-activity-7376353918022270976-Y73P)
* [2025-09-24, 04:21:33](https://lobste.rs/s/y6e06t/ai_is_impressive_because_we_ve_failed_at) - [AI is impressive because we’ve failed at semantic web and personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing)
* [2025-09-24, 03:41:06](https://lobste.rs/s/pn4hqe/should_neovim_support_transitive_plugin) - [Should Neovim support transitive plugin dependencies?](https://sink.io/jmk/neovim-plugin-deps/)
* [2025-09-24, 03:38:08](https://lobste.rs/s/gl18mt/zubanls_mypy_compatible_python_language) - [ZubanLS: A Mypy-compatible Python Language Server built in Rust](https://zubanls.com/)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-24, 03:30:00](https://tech.slashdot.org/story/25/09/24/0011224/why-ai-chatbots-cant-process-persian-social-etiquette?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why AI Chatbots Can&apos;t Process Persian Social Etiquette](https://tech.slashdot.org/story/25/09/24/0011224/why-ai-chatbots-cant-process-persian-social-etiquette?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 01:25:00](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vietnam Shuts Down Millions of Bank Accounts Over Biometric Rules](https://news.slashdot.org/story/25/09/24/005245/vietnam-shuts-down-millions-of-bank-accounts-over-biometric-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 01:09:55](https://lobste.rs/s/bfrugi/from_rust_reality_hidden_journey_fetch) - [From Rust to Reality: The Hidden Journey of fetch_max](https://questdb.com/blog/rust-fetch-max-compiler-journey/)
* [2025-09-24, 00:45:00](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney+, Hulu Are Hiking Prices Again Next Month](https://news.slashdot.org/story/25/09/23/2358239/disney-hulu-are-hiking-prices-again-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-24, 00:26:59](https://news.ycombinator.com/item?id=45354644) - [Baldur&apos;s Gate 3 Steam Deck – Native Version](https://larian.com/support/faqs/steam-deck-native-version_121)
* [2025-09-24, 00:02:00](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Reportedly Building An AI Marketplace To Pay Publishers For Content](https://slashdot.org/story/25/09/23/2355226/microsoft-is-reportedly-building-an-ai-marketplace-to-pay-publishers-for-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 23:20:00](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Volvo Is Replacing Every EX90&apos;s Central Computer](https://tech.slashdot.org/story/25/09/23/2139249/why-volvo-is-replacing-every-ex90s-central-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 22:55:38](https://lobste.rs/s/shbssy/benjamin_button_reviews_macos) - [Benjamin Button Reviews macOS](https://rakhim.exotext.com/benjamin-button-reviews-macos)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 22:40:00](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MLB Approves Robot Umps In 2026 For Challenges](https://hardware.slashdot.org/story/25/09/23/2131259/mlb-approves-robot-umps-in-2026-for-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 22:00:00](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Reinstating Creators Banned For COVID-19, Election Content](https://news.slashdot.org/story/25/09/23/2123257/youtube-reinstating-creators-banned-for-covid-19-election-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 21:20:00](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dedicated Mobile Apps For Vibe Coding Have So Far Failed To Gain Traction](https://developers.slashdot.org/story/25/09/23/2115212/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 20:59:17](https://news.ycombinator.com/item?id=45352672) - [Qwen3-VL](https://qwen.ai/blog?id=99f0335c4ad9ff6153e517418d48535ab6d8afef&amp;from=research.latest-advancements-list)
* [2025-09-23, 20:57:14](https://lobste.rs/s/qrbf0u/what_if_humanity_forgot_how_make_cpus) - [What if Humanity forgot how to make CPUs?](https://www.youtube.com/watch?v=L2OJFqs8bUk)
* [2025-09-23, 20:35:51](https://lobste.rs/s/jxrtjp/rust_foundation_signs_joint_statement_on) - [Rust Foundation Signs Joint Statement on Open Source Infrastructure Stewardship](https://rustfoundation.org/media/rust-foundation-signs-joint-statement-on-open-source-infrastructure-stewardship/)
* [2025-09-23, 20:02:00](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Journals Infiltrated With &apos;Copycat&apos; Papers That Can Be Written By AI](https://science.slashdot.org/story/25/09/23/1825258/journals-infiltrated-with-copycat-papers-that-can-be-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-23, 19:13:36](https://lobste.rs/s/iibpk0/128_language_quine_relay_2018) - [The 128-Language Quine Relay (2018)](https://esoteric.codes/blog/the-128-language-quine-relay)
* [2025-09-23, 18:06:07](https://news.ycombinator.com/item?id=45350690) - [Find SF parking cops](https://walzr.com/sf-parking/)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 16:59:35](https://lobste.rs/s/ga0vwq/fifty_years_open_source_software_supply) - [Fifty Years of Open Source Software Supply-Chain Security](https://cacm.acm.org/practice/fifty-years-of-open-source-software-supply-chain-security/)
* [2025-09-23, 16:55:45](https://lobste.rs/s/slysq6/our_plan_for_more_secure_npm_supply_chain) - [Our plan for a more secure npm supply chain](https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/)
* [2025-09-23, 13:56:28](https://news.ycombinator.com/item?id=45347117) - [Libghostty is coming](https://mitchellh.com/writing/libghostty-is-coming)
* [2025-09-23, 13:41:23](https://lobste.rs/s/wb9ocu/using_dns_for_responding_acme_challenges) - [Using DNS for responding to ACME challenges](https://hsm.tunnel53.net/article/dns-for-acme-challenges/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 12:30:20](https://lobste.rs/s/x2jobn/go_has_added_valgrind_support) - [Go has added Valgrind support](https://go-review.googlesource.com/c/go/+/674077)
* [2025-09-23, 10:47:46](https://lobste.rs/s/6wzpji/crypto_miner_hotio_qbittorrent) - [Crypto Miner in hotio/qbittorrent](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent/)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:08:27](https://lobste.rs/s/a8bwsw/imagining_language_without_booleans) - [Imagining a Language without Booleans](https://justinpombrio.net/2025/09/22/imagining-a-language-without-booleans.html)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 05:18:12](https://news.ycombinator.com/item?id=45329322) - [Everyone&apos;s trying vectors and graphs for AI memory. We went back to SQL](https://news.ycombinator.com/item?id=45329322)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 14:11:12](https://news.ycombinator.com/item?id=45322906) - [I Spent Three Nights Solving Listen Labs Berghain Challenge (and Got #16)](https://kuber.studio/blog/Projects/How-I-Spent-Three-Nights-Solving-Listen-Labs-Berghain-Challenge)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 00:12:00](https://news.ycombinator.com/item?id=45318837) - [How Neural Super Sampling Works: Architecture, Training, and Inference](https://semiengineering.com/how-neural-super-sampling-works-architecture-training-and-inference/)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 16:26:53](https://news.ycombinator.com/item?id=45314752) - [Deep researcher with test-time diffusion](https://research.google/blog/deep-researcher-with-test-time-diffusion/)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
