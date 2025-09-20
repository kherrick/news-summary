# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Policy and Economics

* [H1Bs will start costing $100k/yr](https://www.boundless.com/blog/trump-administration-to-propose-new-100000-fee-for-h-1b-visa-applications/) ([Comments](https://news.ycombinator.com/item?id=45308628))

* [Restriction on Entry of Certain Nonimmigrant Workers](https://www.whitehouse.gov/presidential-actions/2025/09/restriction-on-entry-of-certain-nonimmigrant-workers/) ([Comments](https://news.ycombinator.com/item?id=45307922))

* [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45308628))

## Consumer Tech and AI

* [Disney+ cancellation page crashes as customers rush to quit](https://creators.yahoo.com/lifestyle/story/disney-cancellation-page-crashes-as-customers-rush-to-quit-after-kimmel-suspension-033512277.html) ([Comments](https://news.ycombinator.com/item?id=45308558))

* [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45308558))

* [AI Tool Detects LLM-Generated Text in Research Papers and Peer Reviews](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45308558))

## Education and Public Policy

* [Decline in K-12 National Reading, Math, Science Scores Probed By US Senate Panel](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Record-Low 35% in US Satisfied With K-12 Education Quality](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Software Development and Trends

* [Show HN: Zedis – A Redis clone I&apos;m writing in Zig](https://github.com/barddoo/zedis) ([Comments](https://news.ycombinator.com/item?id=45307166))

* [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster) ([Comments](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun))

* [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/) ([Comments](https://news.ycombinator.com/item?id=45307242))

## Science and Health

* [Three-Minute Take-Home Test May Identify Symptoms Linked to Alzheimer&apos;s Disease](https://www.smithsonianmag.com/smart-news/three-minute-take-home-test-may-identify-symptoms-linked-to-alzheimers-disease-years-before-a-traditional-diagnosis-180987281/) ([Comments](https://news.ycombinator.com/item?id=45305180))

* [The health benefits of sunlight may outweigh the risk of skin cancer](https://www.economist.com/science-and-technology/2025/09/17/the-health-benefits-of-sunlight-may-outweigh-the-risk-of-skin-cancer) ([Comments](https://news.ycombinator.com/item?id=45298034))

* [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/) ([Comments](https://news.ycombinator.com/item?id=45300865))

## Open Source and Programming

* [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174) ([Comments](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl))

* [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/) ([Comments](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0))

* [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/) ([Comments](https://lobste.rs/s/6bo13j/type_branding_typescript))

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

* [2025-09-20, 00:46:20](https://news.ycombinator.com/item?id=45308628) - [H1Bs will start costing $100k/yr](https://www.boundless.com/blog/trump-administration-to-propose-new-100000-fee-for-h-1b-visa-applications/)
* [2025-09-20, 00:37:14](https://news.ycombinator.com/item?id=45308558) - [Disney+ cancellation page crashes as customers rush to quit](https://creators.yahoo.com/lifestyle/story/disney-cancellation-page-crashes-as-customers-rush-to-quit-after-kimmel-suspension-033512277.html)
* [2025-09-20, 00:30:27](https://news.ycombinator.com/item?id=45308503) - [Did you read the quarter-million-line license for your Slack app?](https://mastodon.mit.edu/@Eggfreckles/114825126857396420)
* [2025-09-20, 00:01:00](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decline in K-12 National Reading, Math, Science Scores Probed By US Senate Panel](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 23:15:17](https://news.ycombinator.com/item?id=45307922) - [Restriction on Entry of Certain Nonimmigrant Workers](https://www.whitehouse.gov/presidential-actions/2025/09/restriction-on-entry-of-certain-nonimmigrant-workers/)
* [2025-09-19, 22:08:11](https://lobste.rs/s/dafc6l/against_protection_stocking_frames) - [Against the protection of stocking frames](https://ethanmarcotte.com/wrote/against-stocking-frames/)
* [2025-09-19, 22:02:29](https://news.ycombinator.com/item?id=45307242) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-19, 22:00:00](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Low 35% in US Satisfied With K-12 Education Quality](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 21:55:43](https://news.ycombinator.com/item?id=45307166) - [Show HN: Zedis – A Redis clone I&apos;m writing in Zig](https://github.com/barddoo/zedis)
* [2025-09-19, 21:49:37](https://news.ycombinator.com/item?id=45307095) - [Hidden risk in Notion 3.0 AI agents: Web search tool abuse for data exfiltration](https://www.codeintegrity.ai/blog/notion)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 21:37:36](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun) - [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 21:14:56](https://news.ycombinator.com/item?id=45306701) - [Feedmaker: URL + CSS selectors = RSS feed](https://feedmaker.fly.dev)
* [2025-09-19, 21:01:42](https://news.ycombinator.com/item?id=45306539) - [Ask HN: Has anyone else been unemployed for over two years?](https://news.ycombinator.com/item?id=45306539)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 20:25:14](https://news.ycombinator.com/item?id=45306120) - [Show HN: WeUseElixir - Elixir project directory](https://weuseelixir.com/)
* [2025-09-19, 20:20:00](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 20:05:48](https://news.ycombinator.com/item?id=45305909) - [Time Spent on Hardening](https://third-bit.com/2025/09/18/time-spent-on-hardening/)
* [2025-09-19, 19:44:16](https://news.ycombinator.com/item?id=45305660) - [The Economic Impacts of AI: A Multidisciplinary, Multibook Review [pdf]](https://kevinbryanecon.com/BryanAIBookReview.pdf)
* [2025-09-19, 19:20:00](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hikes US Xbox Prices Citing Economic Environment](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:03:02](https://news.ycombinator.com/item?id=45305180) - [Three-Minute Take-Home Test May Identify Symptoms Linked to Alzheimer&apos;s Disease](https://www.smithsonianmag.com/smart-news/three-minute-take-home-test-may-identify-symptoms-linked-to-alzheimers-disease-years-before-a-traditional-diagnosis-180987281/)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 19:01:00](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 18:38:43](https://lobste.rs/s/gtyelw/apple_ssh_filevault) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-19, 18:15:18](https://news.ycombinator.com/item?id=45304706) - [An untidy history of AI across four books](https://hedgehogreview.com/issues/lessons-of-babel/articles/perplexity)
* [2025-09-19, 18:01:00](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tool Detects LLM-Generated Text in Research Papers and Peer Reviews](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 17:43:33](https://news.ycombinator.com/item?id=45304379) - [Your very own humane interface: Try Jef Raskin&apos;s ideas at home](https://arstechnica.com/gadgets/2025/09/your-very-own-humane-interface-try-jef-raskins-ideas-at-home/)
* [2025-09-19, 17:14:50](https://lobste.rs/s/u5gcu2/your_very_own_humane_interface_try_jef) - [Your very own humane interface: Try Jef Raskin’s ideas at home](https://arstechnica.com/gadgets/2025/09/your-very-own-humane-interface-try-jef-raskins-ideas-at-home/)
* [2025-09-19, 17:10:00](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Xiaomi To Remotely Fix Assisted Driving Flaw in 110,000 SU7 Cars](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 16:56:23](https://lobste.rs/s/joxeuf/1k_agentic_project_schemas) - [1K+ agentic project schemas reconstructed from posts on related subreddits](https://altsoph.com/pp/aps/)
* [2025-09-19, 16:05:00](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Happening To Wholesale Electricity Prices?](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 15:41:13](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl) - [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174)
* [2025-09-19, 15:29:25](https://news.ycombinator.com/item?id=45302721) - [Kernel: Introduce Multikernel Architecture Support](https://lwn.net/ml/all/20250918222607.186488-1-xiyou.wangcong@gmail.com/)
* [2025-09-19, 15:20:34](https://lobste.rs/s/ogurli/myth_reality_mac_os_x_snow_leopard_2023) - [The myth and reality of Mac OS X Snow Leopard (2023)](https://lapcatsoftware.com/articles/2023/11/5.html)
* [2025-09-19, 15:01:00](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Armed Forces Switch To LibreOffice](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 14:43:50](https://news.ycombinator.com/item?id=45302222) - [Revamping an Old TV as a Gift (2019)](https://blog.davidv.dev/posts/revamping-an-old-tv-as-a-gift/)
* [2025-09-19, 14:23:51](https://lobste.rs/s/isdngh/release_automation_testing_on_ci) - [Release automation and testing on CI](https://lucasew.github.io/post/20250919-project-automations/)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 14:01:00](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paris DVD Rental Store in Last Stand Against Streaming Giants](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 12:25:50](https://news.ycombinator.com/item?id=45300865) - [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/)
* [2025-09-19, 12:25:04](https://lobste.rs/s/6bo13j/type_branding_typescript) - [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/)
* [2025-09-19, 12:20:10](https://news.ycombinator.com/item?id=45300810) - [YouTube downloaders (and how Google silenced the press)](https://windowsread.me/p/best-youtube-downloaders)
* [2025-09-19, 12:09:12](https://lobste.rs/s/bzfzyd/run_unix_command_multiple_sub_processes) - [run a UNIX command in multiple sub-processes with line-buffered I/O](https://kmx.io/blog/released-runj-v0.1-and-runj-v0.2-run-unix-command-sub-processes-with-line-buffered-io)
* [2025-09-19, 11:55:00](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve To Drop Steam Support For 32-Bit Windows Versions Next Year](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 10:54:51](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend)
* [2025-09-19, 09:30:00](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank Vision Fund To Lay Off 20% of Employees in Shift To Bold AI Bets](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 08:53:53](https://lobste.rs/s/6d4tae/freebsd_vs_smartos_who_s_faster_for_jails) - [FreeBSD vs. SmartOS: Who&apos;s Faster for Jails, Zones, and bhyve VMs?](https://it-notes.dragas.net/2025/09/19/freebsd-vs-smartos-whos-faster-for-jails-zones-bhyve/)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 08:09:17](https://news.ycombinator.com/item?id=45299170) - [Ruby Central&apos;s Attack on RubyGems [pdf]](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 07:01:00](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Microsoft Entra ID Vulnerability Could Have Been Catastrophic](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 05:43:17](https://lobste.rs/s/oa5jn6/faking_adts_gadts_languages_shouldn_t) - [Faking ADTs and GADTs in Languages That Shouldn&apos;t Have Them](https://blog.jle.im/entry/faking-adts-and-gadts.html)
* [2025-09-19, 04:46:07](https://news.ycombinator.com/item?id=45298034) - [The health benefits of sunlight may outweigh the risk of skin cancer](https://www.economist.com/science-and-technology/2025/09/17/the-health-benefits-of-sunlight-may-outweigh-the-risk-of-skin-cancer)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 04:01:00](https://slashdot.org/story/25/09/19/0157250/microsoft-is-filling-teams-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Filling Teams With AI Agents](https://slashdot.org/story/25/09/19/0157250/microsoft-is-filling-teams-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 03:28:18](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11) - [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/)
* [2025-09-19, 02:00:00](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Future Rests on 200 Million Precarious Workers](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 23:13:34](https://lobste.rs/s/8hu6t2/hypervisor_1_000_lines) - [Hypervisor in 1,000 Lines](https://1000hv.seiya.me/en/)
* [2025-09-18, 20:37:28](https://lobste.rs/s/axzxca/netscape_navigator_2_0_was_released_30) - [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/)
* [2025-09-18, 20:11:29](https://news.ycombinator.com/item?id=45294390) - [Shipping 100 hardware units in under eight weeks](https://farhanhossain.substack.com/p/how-we-shipped-100-hardware-units)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:53:37](https://lobste.rs/s/ttj58a/reflection_c_s_decade_defining_rocket) - [Reflection — C++’s decade-defining rocket engine](https://herbsutter.com/2025/09/18/yesterdays-talk-video-posted-reflection-cs-decade-defining-rocket-engine/)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 16:41:52](https://lobste.rs/s/vrsdxo/configuration_files_are_user_interfaces) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:54:46](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0) - [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/)
* [2025-09-18, 13:52:50](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development) - [How can we sandbox our development machines?](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-18, 00:04:35](https://news.ycombinator.com/item?id=45283074) - [Xmonad seeking help for Wayland port](https://xmonad.org/news/2023/10/06/wayland.html)
* [2025-09-17, 23:04:21](https://news.ycombinator.com/item?id=45282504) - [Tonemaps](https://mini.gmshaders.com/p/tonemaps)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 02:59:13](https://news.ycombinator.com/item?id=45271108) - [Starfront Observatories](https://starfront.space/)
* [2025-09-17, 00:18:54](https://news.ycombinator.com/item?id=45270015) - [R MCP Server](https://github.com/finite-sample/rmcp)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 18:13:30](https://news.ycombinator.com/item?id=45265760) - [Show the Physics](https://interactivetextbooks.tudelft.nl/showthephysics/Introduction/About.html)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:33:45](https://news.ycombinator.com/item?id=45259623) - [If all the world were a monorepo](https://jtibs.substack.com/p/if-all-the-world-were-a-monorepo)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 04:29:16](https://news.ycombinator.com/item?id=45258029) - [Safepoints and Fil-C](https://fil-c.org/safepoints)
