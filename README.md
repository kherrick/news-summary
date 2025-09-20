# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/) - A fascinating comparison of leveraging Vulkan graphics programming in OCaml versus C, highlighting differences in performance and usability. [Comments](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c)

* [What Makes System Calls Expensive: A Linux Internals Deep Dive](https://blog.codingconfessions.com/p/what-makes-system-calls-expensive) - A deep dive into Linux system call mechanics explains why some operations are more resource-intensive than expected. [Comments](https://news.ycombinator.com/item?id=45313439)

* [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/) - Git embraces Rust, setting the stage for the language to become a core implementation requirement. [Comments](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will)

* [LLM-Deflate: Extracting LLMs into Datasets](https://www.scalarlm.com/blog/llm-deflate-extracting-llms-into-datasets/) - New methods for transferring knowledge from large language models into datasets to improve data accessibility and efficiency. [Comments](https://news.ycombinator.com/item?id=45311115)

* [Images over DNS](https://dgl.cx/2025/09/images-over-dns) - An exploration of the unconventional technique of transmitting image data through DNS queries and responses. [Comments](https://lobste.rs/s/6lco9z/images_over_dns)

## Social and Cultural Trends

* [The dawn of the post-literate society – and the end of civilisation](https://jmarriott.substack.com/p/the-dawn-of-the-post-literate-society-aa1) - A thought-provoking essay on societal shifts towards a visually dominant, text-averse culture. [Comments](https://news.ycombinator.com/item?id=45313547)

* [FocusStream – Focused, distraction-free YouTube for learners](https://focusstream.media) - A new platform presents YouTube in a streamlined format, reducing distractions for more focused learning. [Comments](https://news.ycombinator.com/item?id=45311247)

## Scientific Discoveries and Innovations

* [Living microbial cement supercapacitors with reactivatable energy storage](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00409-6) - Advancements in microbial technology enable the development of living cement that can store energy and reactivate upon demand. [Comments](https://news.ycombinator.com/item?id=45313418)

* [Overcoming barriers of hydrogen storage with a low-temperature hydrogen battery](https://www.isct.ac.jp/en/news/okmktjxyrvdc) - Researchers unveil innovative hydrogen battery technology aimed at addressing storage and low-temperature challenges. [Comments](https://news.ycombinator.com/item?id=45312447)

## Business and Policies

* [Britain jumps into bed with Palantir in £1.5B defense pact](https://www.theregister.com/2025/09/20/uk_palantir_defense_pact/) - A controversial agreement between the UK government and Palantir raises eyebrows over defense investments and data concerns. [Comments](https://news.ycombinator.com/item?id=45313793)

* [Pentagon Demands Journalists Pledge To Not Obtain Unauthorized Material](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. Pentagon enforces stricter policies concerning journalistic ethics on handling sensitive unauthorized materials. [Comments](https://news.ycombinator.com/item?id=45310123)

## Consumer Technology

* [Vapor Chamber Tech Keeps iPhone 17 Pro Cool](https://spectrum.ieee.org/iphone-17-pro-vapor-chamber) - The latest technology in cooling systems revolutionizes thermal management for the iPhone 17 Pro. [Comments](https://news.ycombinator.com/item?id=45313415)

* [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - Samsung integrates ads into their smart refrigerators, sparking consumer frustration over intrusive marketing. [Comments](https://soylentnews.org/article.pl?sid=25/09/19/0444244&from=rss)

## Environmental and Energy Research

* [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210) - Scientists delve into planetary influences on solar activity, potentially yielding insights into future space weather patterns. [Comments](https://soylentnews.org/article.pl?sid=25/09/15/1921210&from=rss)

* [What’s Happening To Wholesale Electricity Prices?](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An analysis exploring volatility in electricity wholesale prices and its potential ripple effects on consumers. [Comments](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-09-20, 15:26:50](https://news.ycombinator.com/item?id=45314157) - [These days, systemd can be a cause of restrictions on daemons](https://utcc.utoronto.ca/~cks/space/blog/linux/SystemdCanBeRestrictionCause)
* [2025-09-20, 14:37:52](https://news.ycombinator.com/item?id=45313793) - [Britain jumps into bed with Palantir in £1.5B defense pact](https://www.theregister.com/2025/09/20/uk_palantir_defense_pact/)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:12:30](https://news.ycombinator.com/item?id=45313597) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 14:06:44](https://news.ycombinator.com/item?id=45313547) - [The dawn of the post-literate society – and the end of civilisation](https://jmarriott.substack.com/p/the-dawn-of-the-post-literate-society-aa1)
* [2025-09-20, 13:53:21](https://news.ycombinator.com/item?id=45313439) - [What Makes System Calls Expensive: A Linux Internals Deep Dive](https://blog.codingconfessions.com/p/what-makes-system-calls-expensive)
* [2025-09-20, 13:51:12](https://news.ycombinator.com/item?id=45313418) - [Living microbial cement supercapacitors with reactivatable energy storage](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00409-6)
* [2025-09-20, 13:50:58](https://news.ycombinator.com/item?id=45313415) - [Vapor Chamber Tech Keeps iPhone 17 Pro Cool](https://spectrum.ieee.org/iphone-17-pro-vapor-chamber)
* [2025-09-20, 13:27:29](https://news.ycombinator.com/item?id=45313194) - [Bezier Curve as Easing Function in C++](https://asawicki.info/news_1790_bezier_curve_as_easing_function_in_c)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:52:45](https://lobste.rs/s/c4pn1d/nvim_ctagtap_neovim_plugin_for_tap) - [nvim-ctagtap: Neovim plugin for tap-to-navigate ctags, single-click symbol navigation and smart back-navigation (for mobile reading)](https://github.com/h2337/nvim-ctagtap)
* [2025-09-20, 12:20:56](https://lobste.rs/s/8kj7sz/protect_your_keys_with_secure_enclave) - [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html)
* [2025-09-20, 12:17:33](https://news.ycombinator.com/item?id=45312696) - [Git: Introduce Rust and announce that it will become mandatorty](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:12:00](https://lobste.rs/s/6lco9z/images_over_dns) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 11:50:15](https://news.ycombinator.com/item?id=45312515) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 11:40:28](https://news.ycombinator.com/item?id=45312447) - [Overcoming barriers of hydrogen storage with a low-temperature hydrogen battery](https://www.isct.ac.jp/en/news/okmktjxyrvdc)
* [2025-09-20, 11:00:27](https://news.ycombinator.com/item?id=45312228) - [IG Nobel Prize Winners 2025](https://improbable.com/ig/winners/)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 07:25:03](https://news.ycombinator.com/item?id=45311247) - [Show HN: FocusStream – Focused, distraction-free YouTube for learners](https://focusstream.media)
* [2025-09-20, 07:24:25](https://lobste.rs/s/db2pcs/linux_6_17_file_system_benchmarks) - [Linux 6.17 File-System Benchmarks, Including OpenZFS &amp; Bcachefs](https://www.phoronix.com/review/linux-617-filesystems/)
* [2025-09-20, 06:59:54](https://news.ycombinator.com/item?id=45311115) - [LLM-Deflate: Extracting LLMs into Datasets](https://www.scalarlm.com/blog/llm-deflate-extracting-llms-into-datasets/)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
* [2025-09-20, 03:42:09](https://lobste.rs/s/oxdyns/overview_modern_css_features_2025) - [Overview of Modern CSS Features (2025 Edition)](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-2025-edition/)
* [2025-09-20, 03:41:23](https://news.ycombinator.com/item?id=45310123) - [Supporting Our AI Overlords: Redesigning Data Systems to Be Agent-First](https://arxiv.org/abs/2509.00997)
* [2025-09-20, 02:56:00](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Demands Journalists Pledge To Not Obtain Unauthorized Material](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:31:00](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sold on Walmart, Sent by Amazon: The Weird New World of Online Retail](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:00:19](https://lobste.rs/s/crlwz2/agentic_tui_for_go_codebases) - [The Agentic TUI for Go codebases ;)](https://github.com/piqoni/vogte)
* [2025-09-20, 01:26:12](https://lobste.rs/s/js25k9/is_zig_s_new_writer_unsafe) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-20, 00:01:00](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decline in K-12 National Reading, Math, Science Scores Probed By US Senate Panel](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 22:08:11](https://lobste.rs/s/dafc6l/against_protection_stocking_frames) - [Against the protection of stocking frames](https://ethanmarcotte.com/wrote/against-stocking-frames/)
* [2025-09-19, 22:02:29](https://news.ycombinator.com/item?id=45307242) - [Less is safer: How Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-19, 22:00:00](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Low 35% in US Satisfied With K-12 Education Quality](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 21:55:43](https://news.ycombinator.com/item?id=45307166) - [Show HN: Zedis – A Redis clone I&apos;m writing in Zig](https://github.com/barddoo/zedis)
* [2025-09-19, 21:49:37](https://news.ycombinator.com/item?id=45307095) - [Hidden risk in Notion 3.0 AI agents: Web search tool abuse for data exfiltration](https://www.codeintegrity.ai/blog/notion)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 21:37:36](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun) - [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 21:14:56](https://news.ycombinator.com/item?id=45306701) - [Feedmaker: URL + CSS selectors = RSS feed](https://feedmaker.fly.dev)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 20:25:14](https://news.ycombinator.com/item?id=45306120) - [Show HN: WeUseElixir - Elixir project directory](https://weuseelixir.com/)
* [2025-09-19, 20:20:00](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:20:00](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hikes US Xbox Prices Citing Economic Environment](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 19:01:00](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 18:38:43](https://lobste.rs/s/gtyelw/apple_ssh_filevault) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-19, 18:01:00](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tool Detects LLM-Generated Text in Research Papers and Peer Reviews](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 17:10:00](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Xiaomi To Remotely Fix Assisted Driving Flaw in 110,000 SU7 Cars](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 16:05:00](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Happening To Wholesale Electricity Prices?](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 15:41:13](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl) - [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174)
* [2025-09-19, 15:20:34](https://lobste.rs/s/ogurli/myth_reality_mac_os_x_snow_leopard_2023) - [The myth and reality of Mac OS X Snow Leopard (2023)](https://lapcatsoftware.com/articles/2023/11/5.html)
* [2025-09-19, 15:01:00](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Armed Forces Switch To LibreOffice](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 14:01:00](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paris DVD Rental Store in Last Stand Against Streaming Giants](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 12:25:50](https://news.ycombinator.com/item?id=45300865) - [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/)
* [2025-09-19, 12:25:04](https://lobste.rs/s/6bo13j/type_branding_typescript) - [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/)
* [2025-09-19, 12:20:10](https://news.ycombinator.com/item?id=45300810) - [The best YouTube downloaders, and how Google silenced the press](https://windowsread.me/p/best-youtube-downloaders)
* [2025-09-19, 12:09:12](https://lobste.rs/s/bzfzyd/run_unix_command_multiple_sub_processes) - [run a UNIX command in multiple sub-processes with line-buffered I/O](https://kmx.io/blog/released-runj-v0.1-and-runj-v0.2-run-unix-command-sub-processes-with-line-buffered-io)
* [2025-09-19, 11:55:00](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve To Drop Steam Support For 32-Bit Windows Versions Next Year](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 10:54:51](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend)
* [2025-09-19, 09:30:00](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank Vision Fund To Lay Off 20% of Employees in Shift To Bold AI Bets](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 08:53:53](https://lobste.rs/s/6d4tae/freebsd_vs_smartos_who_s_faster_for_jails) - [FreeBSD vs. SmartOS: Who&apos;s Faster for Jails, Zones, and bhyve VMs?](https://it-notes.dragas.net/2025/09/19/freebsd-vs-smartos-whos-faster-for-jails-zones-bhyve/)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 07:01:00](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Microsoft Entra ID Vulnerability Could Have Been Catastrophic](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 03:28:18](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11) - [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:12:58](https://news.ycombinator.com/item?id=45293012) - [MapSCII – World Map in Terminal](https://github.com/rastapasta/mapscii)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:22:39](https://news.ycombinator.com/item?id=45287474) - [SCREAM CIPHER (\&quot;ǠĂȦẶAẦ ĂǍÄẴẶȦ\&quot;)](https://sethmlarson.dev/scream-cipher)
* [2025-09-18, 05:16:48](https://news.ycombinator.com/item?id=45285711) - [Evals in 2025: benchmarks to build models people can use](https://github.com/huggingface/evaluation-guidebook/blob/main/yearly_dives/2025-evaluations-for-useful-models.md)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 14:46:18](https://news.ycombinator.com/item?id=45276501) - [Show HN: Math2Tex – Convert handwritten math and complex notes to LaTeX text](https://news.ycombinator.com/item?id=45276501)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 12:30:58](https://news.ycombinator.com/item?id=45275058) - [Claude Can (Sometimes) Prove It](https://www.galois.com/articles/claude-can-sometimes-prove-it)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 21:09:47](https://news.ycombinator.com/item?id=45268084) - [PyPI Blog: Token Exfiltration Campaign via GitHub Actions Workflows](https://blog.pypi.org/posts/2025-09-16-github-actions-token-exfiltration/)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 18:08:01](https://news.ycombinator.com/item?id=45265688) - [Escapee pregnancy test frogs colonised Wales for 50 years](https://www.bbc.com/news/uk-wales-44886585)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:33:45](https://news.ycombinator.com/item?id=45259623) - [If all the world were a monorepo](https://jtibs.substack.com/p/if-all-the-world-were-a-monorepo)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
