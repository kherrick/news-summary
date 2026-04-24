# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [FCC's Foreign-Made Router Ban Expands To Portable Wi-Fi Hotspot Devices](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA Inspector Fears New Spacesuits Won't be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/23/1139251&from=rss))

* [Shibuya – Haskell Data Pipelines](https://github.com/shinzui/shibuya) ([comments](https://lobste.rs/s/oyj3nd/shibuya_haskell_data_pipelines))

* [DeepSeek v4](https://api-docs.deepseek.com/) ([comments](https://news.ycombinator.com/item?id=47884971))

* [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/23/1118227&from=rss))

## Environmental and Industrial Impact

* [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Europe's EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/22/0215210&from=rss))

* [Astronomers find the edge of the Milky Way](https://skyandtelescope.org/astronomy-news/astronomers-find-the-edge-of-the-milky-way/) ([comments](https://news.ycombinator.com/item?id=47879239))

## Programming and Development Tools

* [Show HN: Gova – The declarative GUI framework for Go](https://github.com/NV404/gova) ([comments](https://news.ycombinator.com/item?id=47886272))

* [Vibin' with Erlang](https://blog.whenhen.com/posts/vibin-with-erlang.html) ([comments](https://lobste.rs/s/crspm5/vibin_with_erlang))

* [How Hard Is It To Open a File?](https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/) ([comments](https://lobste.rs/s/fbfu56/how_hard_is_it_open_file))

## Corporate Actions and Industry Dynamics

* [Meta Is Laying Off 10% of Its Workforce](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47879986))

* [Microsoft Plans First-Ever Voluntary Employee Buyout](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2026-04-24, 08:15:21](https://lobste.rs/s/oyj3nd/shibuya_haskell_data_pipelines) - [Shibuya – Haskell Data Pipelines](https://github.com/shinzui/shibuya)
* [2026-04-24, 07:22:31](https://news.ycombinator.com/item?id=47886773) - [Composition Shouldn&apos;t be this Hard](https://www.cambra.dev/blog/announcement/)
* [2026-04-24, 07:01:08](https://lobste.rs/s/esidgp/pure_borrow_linear_haskell_meets_rust) - [Pure Borrow: Linear Haskell Meets Rust-Style Borrowing](https://discourse.haskell.org/t/pure-borrow-linear-haskell-meets-rust-style-borrowing/13975)
* [2026-04-24, 07:00:00](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC&apos;s Foreign-Made Router Ban Expands To Portable Wi-Fi Hotspot Devices](https://mobile.slashdot.org/story/26/04/24/0617244/fccs-foreign-made-router-ban-expands-to-portable-wi-fi-hotspot-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 06:16:47](https://news.ycombinator.com/item?id=47886272) - [Show HN: Gova – The declarative GUI framework for Go](https://github.com/NV404/gova)
* [2026-04-24, 05:01:10](https://news.ycombinator.com/item?id=47885739) - [Why Not Venus?](https://mceglowski.substack.com/p/why-not-venus)
* [2026-04-24, 04:48:54](https://news.ycombinator.com/item?id=47885668) - [Familiarity is the enemy: On why Enterprise systems have failed for 60 years](https://felixbarbalet.com/familiarity-is-the-enemy/)
* [2026-04-24, 04:38:37](https://news.ycombinator.com/item?id=47885596) - [Ubuntu 26.04](https://lwn.net/Articles/1069399/)
* [2026-04-24, 04:04:42](https://news.ycombinator.com/item?id=47885377) - [Habitual coffee intake shapes the microbiome, modifies physiology and cognition](https://www.nature.com/articles/s41467-026-71264-8)
* [2026-04-24, 03:30:00](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Gas-Powered Data Centers Could Emit More Greenhouse Gases Than Entire Nations](https://hardware.slashdot.org/story/26/04/23/2110220/new-gas-powered-data-centers-could-emit-more-greenhouse-gases-than-entire-nations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-24, 03:01:21](https://news.ycombinator.com/item?id=47884971) - [DeepSeek v4](https://api-docs.deepseek.com/)
* [2026-04-24, 02:26:23](https://news.ycombinator.com/item?id=47884768) - [Why I Write (1946)](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/)
* [2026-04-24, 02:13:47](https://lobste.rs/s/crspm5/vibin_with_erlang) - [Vibin&apos; With Erlang](https://blog.whenhen.com/posts/vibin-with-erlang.html)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
* [2026-04-24, 01:59:16](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built) - [What are the best developer tools built around Markdown?](https://lobste.rs/s/g9jlyl/what_are_best_developer_tools_built)
* [2026-04-24, 01:50:57](https://lobste.rs/s/emcmxd/llm_rb_is_ruby_s_most_capable_ai_runtime) - [llm.rb is Ruby&apos;s most capable AI runtime](https://github.com/llmrb/llm.rb#readme)
* [2026-04-24, 00:12:47](https://lobste.rs/s/fbfu56/how_hard_is_it_open_file) - [How Hard Is It To Open a File?](https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/)
* [2026-04-23, 23:27:12](https://lobste.rs/s/p76mlf/box_save_memory) - [Box to save memory](https://dystroy.org/blog/box-to-save-memory/)
* [2026-04-23, 23:00:00](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Stops Weirdly Storing Data That Let Cops Spy On Signal Chats](https://yro.slashdot.org/story/26/04/23/2051228/apple-stops-weirdly-storing-data-that-let-cops-spy-on-signal-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 22:01:59](https://news.ycombinator.com/item?id=47882697) - [Show HN: Tolaria – Open-source macOS app to manage Markdown knowledge bases](https://github.com/refactoringhq/tolaria)
* [2026-04-23, 22:00:00](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Shareholders Approve Paramount&apos;s $81 Billion Takeover](https://entertainment.slashdot.org/story/26/04/23/1940241/warner-bros-shareholders-approve-paramounts-81-billion-takeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 21:56:15](https://news.ycombinator.com/item?id=47882645) - [US special forces soldier arrested after allegedly winning $400k on Maduro raid](https://www.cnn.com/2026/04/23/politics/us-special-forces-soldier-arrested-maduro-raid-trade)
* [2026-04-23, 21:47:13](https://lobste.rs/s/wx9ozr/using_perfetto_zjit) - [Using Perfetto in ZJIT](https://railsatscale.com/2026-03-27-using-perfetto-in-zjit/)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 21:00:00](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its New GPT-5.5 Model Is More Efficient and Better At Coding](https://slashdot.org/story/26/04/23/1931220/openai-says-its-new-gpt-55-model-is-more-efficient-and-better-at-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 20:58:32](https://lobste.rs/s/9csbvp/configuring_firefox) - [Configuring Firefox](https://sciops.net/information/technology/firefox)
* [2026-04-23, 20:53:27](https://news.ycombinator.com/item?id=47881786) - [TorchTPU: Running PyTorch Natively on TPUs at Google Scale](https://developers.googleblog.com/torchtpu-running-pytorch-natively-on-tpus-at-google-scale/)
* [2026-04-23, 20:36:50](https://lobste.rs/s/eiwtub/raylib_v6_0) - [raylib v6.0](https://github.com/raysan5/raylib/releases/tag/6.0)
* [2026-04-23, 20:14:29](https://news.ycombinator.com/item?id=47881198) - [Using the internet like it&apos;s 1999](https://joshblais.com/blog/using-the-internet-like-its-1999/)
* [2026-04-23, 20:00:00](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Laying Off 10% of Its Workforce](https://meta.slashdot.org/story/26/04/23/1917223/meta-is-laying-off-10-of-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 19:26:51](https://lobste.rs/s/2mpjlh/ubuntu_26_04_lts_release) - [Ubuntu 26.04 LTS Release](https://documentation.ubuntu.com/release-notes/26.04/)
* [2026-04-23, 19:00:00](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Confirms Data Breach At Government Agency That Manages Citizens&apos; IDs](https://it.slashdot.org/story/26/04/23/1646252/france-confirms-data-breach-at-government-agency-that-manages-citizens-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 18:55:32](https://news.ycombinator.com/item?id=47879986) - [Meta tells staff it will cut 10% of jobs](https://www.bloomberg.com/news/articles/2026-04-23/meta-tells-staff-it-will-cut-10-of-jobs-in-push-for-efficiency)
* [2026-04-23, 18:11:29](https://news.ycombinator.com/item?id=47879239) - [Astronomers find the edge of the Milky Way](https://skyandtelescope.org/astronomy-news/astronomers-find-the-edge-of-the-milky-way/)
* [2026-04-23, 18:01:39](https://news.ycombinator.com/item?id=47879092) - [GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
* [2026-04-23, 18:00:00](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Calls Apple Maps Launch His &apos;First Really Big Mistake&apos; as CEO](https://apple.slashdot.org/story/26/04/23/1642215/tim-cook-calls-apple-maps-launch-his-first-really-big-mistake-as-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 17:48:38](https://news.ycombinator.com/item?id=47878905) - [An update on recent Claude Code quality reports](https://www.anthropic.com/engineering/april-23-postmortem)
* [2026-04-23, 17:20:42](https://lobste.rs/s/9p8j3s/security_issues_found_within_rust) - [Security issues found within rust-coreutils](https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773)
* [2026-04-23, 17:00:00](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans First-Ever Voluntary Employee Buyout](https://slashdot.org/story/26/04/23/1628235/microsoft-plans-first-ever-voluntary-employee-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:55:13](https://news.ycombinator.com/item?id=47878117) - [MeshCore development team splits over trademark dispute and AI-generated code](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 16:27:07](https://news.ycombinator.com/item?id=47877715) - [My phone replaced a brass plug](https://drobinin.com/posts/my-phone-replaced-a-brass-plug/)
* [2026-04-23, 16:23:43](https://lobste.rs/s/nlaxri/serving_for_you_feed) - [Serving the For You Feed](https://atproto.com/blog/serving-the-for-you-feed)
* [2026-04-23, 16:23:35](https://lobste.rs/s/nepijn/everyone_wants_servers_nobody_wants) - [Everyone Wants Servers And Nobody Wants Servers](https://connectedplaces.online/reports/fr160-everyone-wants-servers-and-nobody-wants-servers/)
* [2026-04-23, 16:21:55](https://news.ycombinator.com/item?id=47877644) - [Incident with multple GitHub services](https://www.githubstatus.com/incidents/myrbk7jvvs6p)
* [2026-04-23, 16:15:00](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Sues Coinbase and Gemini, Seeking To Halt Unlicensed Prediction Market Businesses](https://yro.slashdot.org/story/26/04/23/1611254/new-york-sues-coinbase-and-gemini-seeking-to-halt-unlicensed-prediction-market-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 16:13:36](https://lobste.rs/s/izqocw/meshcore_io_why_split) - [Meshcore.io - Why The Split?](https://blog.meshcore.io/2026/04/23/the-split)
* [2026-04-23, 15:59:55](https://news.ycombinator.com/item?id=47877366) - [French government agency confirms breach as hacker offers to sell data](https://www.bleepingcomputer.com/news/security/french-govt-agency-confirms-breach-as-hacker-offers-to-sell-data/)
* [2026-04-23, 15:26:22](https://lobste.rs/s/x79usb/bitwarden_cli_compromised_ongoing) - [Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 15:00:00](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Lands Tesla As First Major Customer For 14A Chip Technology](https://hardware.slashdot.org/story/26/04/23/0442209/intel-lands-tesla-as-first-major-customer-for-14a-chip-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 14:17:08](https://news.ycombinator.com/item?id=47876043) - [Bitwarden CLI compromised in ongoing Checkmarx supply chain campaign](https://socket.dev/blog/bitwarden-cli-compromised)
* [2026-04-23, 13:58:03](https://news.ycombinator.com/item?id=47875843) - [UK Biobank health data keeps ending up on GitHub](https://biobank.rocher.lc)
* [2026-04-23, 11:57:45](https://lobste.rs/s/3l5gw0/email_could_have_been_x_400_times_better) - [Email could have been X.400 times better](https://buttondown.com/blog/x400-vs-smtp-email)
* [2026-04-23, 11:53:11](https://news.ycombinator.com/item?id=47874647) - [Show HN: Honker – Postgres NOTIFY/LISTEN Semantics for SQLite](https://github.com/russellromney/honker)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 11:35:57](https://lobste.rs/s/tzws72/single_pass_palette_refinement_ordered) - [Single-pass palette refinement and ordered dithering](https://30fps.net/pages/bayer-order-online-kmeans/)
* [2026-04-23, 11:00:00](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [53 Nations Gather To Plan a Fossil Fuel Phaseout](https://news.slashdot.org/story/26/04/23/0432254/53-nations-gather-to-plan-a-fossil-fuel-phaseout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 10:46:49](https://lobste.rs/s/vr4rsc/who_even_uses_jemalloc_2026_anyway_many) - [Who even uses jemalloc in 2026 anyway? (many major projects)](https://theconsensus.dev/p/2026/04/16/who-even-uses-jemalloc-anyway.html)
* [2026-04-23, 09:20:47](https://news.ycombinator.com/item?id=47873694) - [Writing a C Compiler, in Zig (2025)](https://ar-ms.me/thoughts/c-compiler-1-zig/)
* [2026-04-23, 08:42:44](https://lobste.rs/s/yghhn6/i_am_building_cloud) - [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)
* [2026-04-23, 08:22:39](https://lobste.rs/s/l4eo1q/linux_desktop_x86_64_assembly) - [A Linux desktop in x86_64 Assembly](https://isene.org/2026/04/MyTools.html)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 07:00:00](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Phone&apos;s Next Speed Boost May Come From Magnetic Chips](https://tech.slashdot.org/story/26/04/22/2314218/your-phones-next-speed-boost-may-come-from-magnetic-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 06:18:22](https://lobste.rs/s/chsbgc/gecko_fast_glr_parser_with_automatic) - [Gecko: a fast GLR parser with automatic syntax error recovery](https://vnmakarov.github.io/parsing/compilers/c/open-source/2026/04/22/gecko-glr.html)
* [2026-04-23, 04:44:19](https://news.ycombinator.com/item?id=47872324) - [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)
* [2026-04-23, 04:04:05](https://lobste.rs/s/t04nvc/how_heck_does_shazam_work) - [How The Heck Does Shazam Work?](https://perthirtysix.com/how-the-heck-does-shazam-work)
* [2026-04-23, 03:30:00](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly Half of US Children Are Breathing Dangerous Levels of Air Pollution](https://news.slashdot.org/story/26/04/22/2345209/nearly-half-of-us-children-are-breathing-dangerous-levels-of-air-pollution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-23, 02:53:48](https://lobste.rs/s/5jkwmc/borrow_checking_without_type_checking) - [Borrow-checking without type-checking](https://www.scattered-thoughts.net/writing/borrow-checking-without-type-checking/)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
* [2026-04-22, 23:00:00](https://yro.slashdot.org/story/26/04/22/2146235/billionaire-backer-sues-trump-familys-crypto-firm-over-alleged-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Billionaire Backer Sues Trump Family&apos;s Crypto Firm Over Alleged Extortion](https://yro.slashdot.org/story/26/04/22/2146235/billionaire-backer-sues-trump-familys-crypto-firm-over-alleged-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 21:39:00](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss) - [How Museums Can Use Biomolecular Archaeology to Bring Ancient Scents to Life](https://soylentnews.org/article.pl?sid=26/04/21/2350253&amp;from=rss)
* [2026-04-22, 18:39:32](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages) - [What are your favorite Emacs packages?](https://lobste.rs/s/sz3gab/what_are_your_favorite_emacs_packages)
* [2026-04-22, 16:53:00](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss) - [Tech Companies Are Trying to Neuter Colorado&apos;s Landmark Right-to-Repair Law](https://soylentnews.org/article.pl?sid=26/04/20/0241235&amp;from=rss)
* [2026-04-22, 16:29:25](https://news.ycombinator.com/item?id=47865868) - [Alberta startup sells no-tech tractors for half price](https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/)
* [2026-04-22, 16:25:28](https://news.ycombinator.com/item?id=47865822) - [Show HN: Agent Vault – Open-source credential proxy and vault for agents](https://github.com/Infisical/agent-vault)
* [2026-04-22, 12:09:00](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss) - [Sperm Whales Speak With a Complex Alphabet and Even Have ‘Vowels,’ Study Finds](https://soylentnews.org/article.pl?sid=26/04/20/0233208&amp;from=rss)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 09:52:09](https://news.ycombinator.com/item?id=47846688) - [Your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)
* [2026-04-21, 08:52:33](https://news.ycombinator.com/item?id=47846307) - [A programmable watch you can actually wear](https://www.hackster.io/news/a-diy-watch-you-can-actually-wear-8f91c2dac682)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 03:17:10](https://news.ycombinator.com/item?id=47844085) - [Used La Marzocco machines are coveted by cafe owners and collectors](https://www.nytimes.com/2026/04/20/dining/la-marzocco-espresso-machine.html)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
