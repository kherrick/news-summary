# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Vim 9.2 released](https://www.vim.org/vim-9.2-released.php) ([comments](https://lobste.rs/s/wukx2g/vim_9_2_released))

* [Anthropic's Claude Got 11% User Boost from Super Bowl Ad Mocking ChatGPT's Advertising](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Building a TUI is easy now](https://hatchet.run/blog/tuis-are-easy-now) ([comments](https://news.ycombinator.com/item?id=47005509))

* [The AI hater's guide to code with LLMs (The Overview)](https://aredridel.dinhe.net/2026/02/12/the-ai-haters-guide-to-code-with-llms/) ([comments](https://lobste.rs/s/8wck2c/ai_hater_s_guide_code_with_llms_overview))

## Artificial Intelligence and Robotics

* [Autonomous AI Agent Apparently Tries to Blackmail Maintainer Who Rejected Its Code](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Meta's New Patent: an AI That Likes, Comments and Messages For You When You're Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Politics and Policy

* [Switzerland to Vote on Capping Population at 10M](https://www.nytimes.com/2026/02/11/world/europe/switzerland-to-vote-on-capping-population-at-10-million.html) ([comments](https://news.ycombinator.com/item?id=47015345))

* [Homeland Security has sent out subpoenas to identify ICE critics](https://www.engadget.com/big-tech/homeland-security-has-reportedly-sent-out-hundreds-of-subpoenas-to-identify-ice-critics-online-135245457.html) ([comments](https://news.ycombinator.com/item?id=47015084))

* [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&from=rss) ([comments](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&from=rss))

## Space and Environment

* [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss))

* [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/12/0318206&from=rss))

## Software and Development Tools

* [Show HN: Sameshi – a ~1200 Elo chess engine that fits within 2KB](https://github.com/datavorous/sameshi) ([comments](https://news.ycombinator.com/item?id=47014500))

* [NPMX – a fast, modern browser for the NPM registry](https://npmx.dev) ([comments](https://news.ycombinator.com/item?id=47010823))

* [Zig – io_uring and Grand Central Dispatch std.Io implementations landed](https://ziglang.org/devlog/2026/#2026-02-13) ([comments](https://news.ycombinator.com/item?id=47012717))

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

* [2026-02-14, 15:52:11](https://lobste.rs/s/wukx2g/vim_9_2_released) - [Vim 9.2 released](https://www.vim.org/vim-9.2-released.php)
* [2026-02-14, 15:42:26](https://news.ycombinator.com/item?id=47015345) - [Switzerland to Vote on Capping Population at 10M](https://www.nytimes.com/2026/02/11/world/europe/switzerland-to-vote-on-capping-population-at-10-million.html)
* [2026-02-14, 15:34:00](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Got 11% User Boost from Super Bowl Ad Mocking ChatGPT&apos;s Advertising](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 15:10:23](https://news.ycombinator.com/item?id=47015084) - [Homeland Security has sent out subpoenas to identify ICE critics](https://www.engadget.com/big-tech/homeland-security-has-reportedly-sent-out-hundreds-of-subpoenas-to-identify-ice-critics-online-135245457.html)
* [2026-02-14, 15:02:44](https://lobste.rs/s/wjylco/tactical_tornado_2_different_blog_posts) - [Tactical tornado (2 different blog posts)](https://lobste.rs/s/wjylco/tactical_tornado_2_different_blog_posts)
* [2026-02-14, 14:59:28](https://news.ycombinator.com/item?id=47014999) - [Epstein&apos;s Ugly World of Science](https://homunculusmusic.wordpress.com/2026/02/14/epsteins-ugly-world-of-science/)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 14:32:42](https://lobste.rs/s/q57iuj/i_love_work_archwiki_maintainers) - [I love the work of the ArchWiki maintainers](https://k7r.eu/i-love-the-work-of-the-archwiki-maintainers/)
* [2026-02-14, 13:47:44](https://news.ycombinator.com/item?id=47014500) - [Show HN: Sameshi – a ~1200 Elo chess engine that fits within 2KB](https://github.com/datavorous/sameshi)
* [2026-02-14, 13:40:20](https://news.ycombinator.com/item?id=47014449) - [Ooh.directory: a place to find good blogs that interest you](https://ooh.directory/)
* [2026-02-14, 13:33:03](https://news.ycombinator.com/item?id=47014405) - [How many registers does an x86-64 CPU have? (2020)](https://blog.yossarian.net/2020/11/30/How-many-registers-does-an-x86-64-cpu-have)
* [2026-02-14, 12:19:34](https://lobste.rs/s/m1mkjm/programmer_s_loss_identity) - [A programmer&apos;s loss of identity](https://ratfactor.com/tech-nope2)
* [2026-02-14, 12:18:48](https://lobste.rs/s/br867g/offline_crossplatform_desktop_app_for) - [An offline crossplatform desktop app for cleaning dev caches](https://reclaimr.dev/)
* [2026-02-14, 12:00:00](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Israeli Soldiers Accused of Using Polymarket To Bet on Strikes](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 09:28:45](https://news.ycombinator.com/item?id=47013059) - [Ars Technica makes up quotes from Matplotlib maintainer; pulls story](https://infosec.exchange/@mttaggart/116065340523529645)
* [2026-02-14, 09:10:15](https://news.ycombinator.com/item?id=47012964) - [YouTube as Storage](https://github.com/PulseBeat02/yt-media-storage)
* [2026-02-14, 08:35:39](https://lobste.rs/s/qt3xs1/understanding_go_runtime_bootstrap) - [Understanding the Go Runtime: The Bootstrap](https://internals-for-interns.com/posts/understanding-go-runtime/)
* [2026-02-14, 08:30:00](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autonomous AI Agent Apparently Tries to Blackmail Maintainer Who Rejected Its Code](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 08:22:11](https://news.ycombinator.com/item?id=47012717) - [Zig – io_uring and Grand Central Dispatch std.Io implementations landed](https://ziglang.org/devlog/2026/#2026-02-13)
* [2026-02-14, 08:17:13](https://lobste.rs/s/ov78xs/how_vulkan_2026) - [How to Vulkan in 2026](https://www.howtovulkan.com)
* [2026-02-14, 07:00:15](https://news.ycombinator.com/item?id=47012312) - [Cogram (YC W22) – Hiring former technical founders](https://www.ycombinator.com/companies/cogram/jobs/LDTrViN-ex-technical-founder-product-engineer)
* [2026-02-14, 06:33:08](https://lobste.rs/s/fbaxhc/ai_agent_published_hit_piece_on_me_more) - [An AI Agent Published a Hit Piece on Me – More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 05:00:00](https://tech.slashdot.org/story/26/02/13/1921232/600-memory-price-surge-threatens-telcos-broadband-router-set-top-box-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [600% Memory Price Surge Threatens Telcos&apos; Broadband Router, Set-Top Box Supply](https://tech.slashdot.org/story/26/02/13/1921232/600-memory-price-surge-threatens-telcos-broadband-router-set-top-box-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 04:35:01](https://news.ycombinator.com/item?id=47011602) - [Backblaze Drive Stats for 2025](https://www.backblaze.com/blog/backblaze-drive-stats-for-2025/)
* [2026-02-14, 04:27:35](https://news.ycombinator.com/item?id=47011567) - [Show HN: SQL-tap – Real-time SQL traffic viewer for PostgreSQL and MySQL](https://github.com/mickamy/sql-tap)
* [2026-02-14, 03:31:32](https://lobste.rs/s/rkobr1/floppy_disks_best_tv_remote_for_kids) - [Floppy Disks: the best TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/)
* [2026-02-14, 02:14:34](https://news.ycombinator.com/item?id=47010823) - [NPMX – a fast, modern browser for the NPM registry](https://npmx.dev)
* [2026-02-14, 02:00:00](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Quietly &apos;Releases&apos; Millions of Spotify Tracks, Despite Legal Pushback](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 01:41:51](https://lobste.rs/s/8wck2c/ai_hater_s_guide_code_with_llms_overview) - [The AI hater&apos;s guide to code with LLMs (The Overview)](https://aredridel.dinhe.net/2026/02/12/the-ai-haters-guide-to-code-with-llms/)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 23:49:14](https://lobste.rs/s/fynfup/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers](https://dacav.org/projects/supercazzola/)
* [2026-02-13, 23:30:00](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Detroit Automakers Take $50 Billion Hit](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 21:35:52](https://news.ycombinator.com/item?id=47008163) - [Show HN: Data Engineering Book – An open source, community-driven guide](https://github.com/datascale-ai/data_engineering_book/blob/main/README_en.md)
* [2026-02-13, 21:30:00](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s New Patent: an AI That Likes, Comments and Messages For You When You&apos;re Dead](https://tech.slashdot.org/story/26/02/13/1929209/metas-new-patent-an-ai-that-likes-comments-and-messages-for-you-when-youre-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 20:52:11](https://news.ycombinator.com/item?id=47007656) - [The EU moves to kill infinite scrolling](https://www.politico.eu/article/tiktok-meta-facebook-instagram-brussels-kill-infinite-scrolling/)
* [2026-02-13, 20:31:00](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Warns EU Risks Undermining Own Competitiveness With Tech Sovereignty Push](https://tech.slashdot.org/story/26/02/13/1844218/google-warns-eu-risks-undermining-own-competitiveness-with-tech-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 19:30:00](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Says Its Best Developers Haven&apos;t Written a Line of Code Since December, Thanks To AI](https://developers.slashdot.org/story/26/02/13/1834228/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 19:20:12](https://news.ycombinator.com/item?id=47006594) - [GPT-5.2 derives a new result in theoretical physics](https://openai.com/index/new-result-theoretical-physics/)
* [2026-02-13, 18:43:15](https://lobste.rs/s/pgem2t/ann_i_built_new_ada_build_tool_for_personal) - [ANN: I built a new Ada build tool for personal use](https://github.com/tomekw/tada)
* [2026-02-13, 18:31:00](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Ratchets Up Microsoft Probe, Queries Rivals on Cloud, AI](https://slashdot.org/story/26/02/13/1757219/ftc-ratchets-up-microsoft-probe-queries-rivals-on-cloud-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 18:09:21](https://lobste.rs/s/jcio2j/evolving_git_for_next_decade) - [Evolving Git for the next decade](https://lwn.net/SubscriberLink/1057561/bddc1e61152fadf6/)
* [2026-02-13, 17:52:15](https://lobste.rs/s/vimek7/what_should_we_do_with_cls_generated_by_ai) - [What should we do with CLs generated by AI?](https://groups.google.com/g/golang-dev/c/4Li4Ovd_ehE/m/8L9s_jq4BAAJ)
* [2026-02-13, 17:50:54](https://news.ycombinator.com/item?id=47005509) - [Building a TUI is easy now](https://hatchet.run/blog/tuis-are-easy-now)
* [2026-02-13, 17:30:00](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Reverses Long-Standing Climate Change Finding, Stripping Its Own Ability To Regulate Emissions](https://news.slashdot.org/story/26/02/13/1710236/epa-reverses-long-standing-climate-change-finding-stripping-its-own-ability-to-regulate-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 16:45:07](https://lobste.rs/s/gibxel/nixtamal_1_0_0_released) - [Nixtamal 1.0.0 released](https://nixtamal.toast.al/changelog/)
* [2026-02-13, 16:30:00](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Claims DeepSeek Distilled US Models To Gain an Edge](https://slashdot.org/story/26/02/13/1630235/openai-claims-deepseek-distilled-us-models-to-gain-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 16:28:07](https://lobste.rs/s/z6myes/deep_dive_into_apple_s_car_file_format) - [A Deep Dive into Apple&apos;s .car File Format](https://dbg.re/posts/car-file-format/)
* [2026-02-13, 16:11:18](https://lobste.rs/s/qxmhjm/future_software_engineering) - [The future of software engineering](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_future%20_of_software_development_retreat_%20key_takeaways.pdf)
* [2026-02-13, 16:08:13](https://lobste.rs/s/uyjjtz/microgpt) - [microgpt](http://karpathy.github.io/2026/02/12/microgpt/)
* [2026-02-13, 15:36:54](https://lobste.rs/s/t7jbfe/12_factor_app_15_years_later_does_it_still) - [The 12-Factor App - 15 Years later. Does it Still Hold Up in 2026?](https://lukasniessen.medium.com/the-12-factor-app-15-years-later-does-it-still-hold-up-in-2026-c8af494e8465)
* [2026-02-13, 15:30:00](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo is Asking DoorDash Drivers To Shut the Doors of Its Self-Driving Cars](https://tech.slashdot.org/story/26/02/13/1527208/waymo-is-asking-doordash-drivers-to-shut-the-doors-of-its-self-driving-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 15:21:06](https://lobste.rs/s/misukt/thanks_for_all_frames_rust_gui) - [Thanks for All the Frames: Rust GUI Observations](https://tritium.legal/blog/desktop)
* [2026-02-13, 15:09:58](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:30:00](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Introduced To Replace West Virginia&apos;s New CS Course Graduation Requirement With Computer Literacy Proficiency](https://news.slashdot.org/story/26/02/13/1424257/bill-introduced-to-replace-west-virginias-new-cs-course-graduation-requirement-with-computer-literacy-proficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 14:13:23](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel) - [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel)
* [2026-02-13, 13:36:00](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Let Smart Glasses Identify People Through AI-Powered Facial Recognition](https://tech.slashdot.org/story/26/02/13/1336235/meta-plans-to-let-smart-glasses-identify-people-through-ai-powered-facial-recognition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 13:14:23](https://lobste.rs/s/wqzxyu/hare_0_26_0_released) - [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/)
* [2026-02-13, 12:18:05](https://news.ycombinator.com/item?id=47001871) - [Monosketch](https://monosketch.io/)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 09:15:45](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mclhjq/what_are_you_doing_this_weekend)
* [2026-02-13, 08:49:02](https://news.ycombinator.com/item?id=47000505) - [Babylon 5 is now free to watch on YouTube](https://cordcuttersnews.com/babylon-5-is-now-free-to-watch-on-youtube/)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:44:35](https://news.ycombinator.com/item?id=46983873) - [Common Lisp Screenshots: today&apos;s CL applications in action](http://www.lisp-screenshots.org)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 05:37:11](https://news.ycombinator.com/item?id=46971273) - [What color are your bits? (2004)](https://ansuz.sooke.bc.ca/entry/23)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 17:07:17](https://news.ycombinator.com/item?id=46963047) - [The mathematics of compression in database systems](https://www.bitsxpages.com/p/the-mathematics-of-compression-in)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 13:35:47](https://news.ycombinator.com/item?id=46959531) - [Shades of Halftone](https://blog.maximeheckel.com/posts/shades-of-halftone/)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 10:12:27](https://news.ycombinator.com/item?id=46957629) - [Code Storage by the Pierre Computer Company](https://code.storage/)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 02:44:58](https://news.ycombinator.com/item?id=46954696) - [Show HN: I spent 3 years reverse-engineering a 40 yo stock market sim from 1986](https://www.wallstreetraider.com/story.html)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
