# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster) - An intriguing exploration of creating a Raspberry Pi AI cluster, showcasing its limitations and unexpected regrets. [Comments](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun)

* [AI Tool Detects LLM-Generated Text in Research Papers and Peer Reviews](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking tool to identify AI-generated text in academic settings to maintain integrity. [Comments](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's venture into power trading underscores the massive energy needs driven by growing AI infrastructure. [Comments](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Economic and Policy Updates

* [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial policy change on H-1B visa fees sparks debate on workforce and immigration. [Comments](https://news.ycombinator.com/item?id=45305909)

* [Microsoft Hikes US Xbox Prices Citing Economic Environment](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft's price adjustment reflects broader economic challenges and rising costs. [Comments](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific Discoveries and Innovations

* [Three-Minute Take-Home Test May Identify Symptoms Linked to Alzheimer's Disease](https://www.smithsonianmag.com/smart-news/three-minute-take-home-test-may-identify-symptoms-linked-to-alzheimers-disease-years-before-a-traditional-diagnosis-180987281/) - A transformational diagnostic tool potentially revolutionizing early Alzheimer's detection. [Comments](https://news.ycombinator.com/item?id=45305180)

* [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/) - A fascinating look into evolutionary biology featuring ants with seemingly impossible reproduction behavior. [Comments](https://news.ycombinator.com/item?id=45300865)

## Software Development and Programming

* [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174) - A unique intersection of music and programming languages as Stanley Jordan applies APL to music theory. [Comments](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl)

* [The Blots Programming Language](https://blots-lang.org/) - A deep dive into a minimalist programming language designed for expressive, problem-driven programming. [Comments](https://lobste.rs/s/e69mbb/blots_programming_language)

## Ethics, Society, and Technology

* [Internal emails reveal Ticketmaster helped scalpers jack up prices, FTC says](https://arstechnica.com/tech-policy/2025/09/ticketmaster-intentionally-screwed-fans-out-of-billions-ftc-lawsuit-says/) - An FTC investigation unearths sharp practices within Ticketmaster, raising questions about fairness in ticketing. [Comments](https://news.ycombinator.com/item?id=45305042)

* [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/) - A critique of misleading design practices in software and their unintended consequences. [Comments](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11)

## Historical and Cultural Perspectives

* [Paris DVD Rental Store in Last Stand Against Streaming Giants](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A nostalgic fight to keep a DVD rental shop alive amidst the dominance of streaming. [Comments](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&from=rss) - Remarkable discoveries shed light on ancient burial practices predating known civilizations. [Comments](https://soylentnews.org/article.pl?sid=25/09/17/2233242&from=rss)

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

* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 21:39:29](https://news.ycombinator.com/item?id=45306975) - [Ted Cruz: MAGA \&quot;will regret\&quot; what it did to Jimmy Kimmel](https://www.axios.com/2025/09/19/ted-cruz-jimmy-kimmel-fcc-brendan-carr)
* [2025-09-19, 21:37:36](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun) - [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 21:14:56](https://news.ycombinator.com/item?id=45306701) - [Feedmaker: URL + CSS selectors = RSS feed](https://feedmaker.fly.dev)
* [2025-09-19, 21:01:42](https://news.ycombinator.com/item?id=45306539) - [Ask HN: Has anyone else been unemployed for over two years?](https://news.ycombinator.com/item?id=45306539)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 20:28:21](https://news.ycombinator.com/item?id=45306147) - [How to waste CPU like a Professional](https://mostlynerdless.de/blog/2025/09/19/how-to-waste-cpu-like-a-professional/)
* [2025-09-19, 20:25:14](https://news.ycombinator.com/item?id=45306120) - [Show HN: WeUseElixir - Elixir project directory](https://weuseelixir.com/)
* [2025-09-19, 20:20:00](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 20:05:48](https://news.ycombinator.com/item?id=45305909) - [Time Spent on Hardening](https://third-bit.com/2025/09/18/time-spent-on-hardening/)
* [2025-09-19, 19:59:33](https://news.ycombinator.com/item?id=45305845) - [Trump to impose $100k fee for H-1B worker visas, White House says](https://www.reuters.com/business/media-telecom/trump-mulls-adding-new-100000-fee-h-1b-visas-bloomberg-news-reports-2025-09-19/)
* [2025-09-19, 19:44:16](https://news.ycombinator.com/item?id=45305660) - [The Economic Impacts of AI: A Multidisciplinary, Multibook Review [pdf]](https://kevinbryanecon.com/BryanAIBookReview.pdf)
* [2025-09-19, 19:20:00](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hikes US Xbox Prices Citing Economic Environment](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:03:02](https://news.ycombinator.com/item?id=45305180) - [Three-Minute Take-Home Test May Identify Symptoms Linked to Alzheimer&apos;s Disease](https://www.smithsonianmag.com/smart-news/three-minute-take-home-test-may-identify-symptoms-linked-to-alzheimers-disease-years-before-a-traditional-diagnosis-180987281/)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 19:01:00](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 18:47:14](https://news.ycombinator.com/item?id=45305042) - [Internal emails reveal Ticketmaster helped scalpers jack up prices, FTC says](https://arstechnica.com/tech-policy/2025/09/ticketmaster-intentionally-screwed-fans-out-of-billions-ftc-lawsuit-says/)
* [2025-09-19, 18:38:43](https://lobste.rs/s/gtyelw/apple_ssh_filevault) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-19, 18:15:18](https://news.ycombinator.com/item?id=45304706) - [An untidy history of AI across four books](https://hedgehogreview.com/issues/lessons-of-babel/articles/perplexity)
* [2025-09-19, 18:01:00](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tool Detects LLM-Generated Text in Research Papers and Peer Reviews](https://slashdot.org/story/25/09/19/1750226/ai-tool-detects-llm-generated-text-in-research-papers-and-peer-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 17:43:33](https://news.ycombinator.com/item?id=45304379) - [Your very own humane interface: Try Jef Raskin&apos;s ideas at home](https://arstechnica.com/gadgets/2025/09/your-very-own-humane-interface-try-jef-raskins-ideas-at-home/)
* [2025-09-19, 17:10:00](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Xiaomi To Remotely Fix Assisted Driving Flaw in 110,000 SU7 Cars](https://tech.slashdot.org/story/25/09/19/1710228/chinas-xiaomi-to-remotely-fix-assisted-driving-flaw-in-110000-su7-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 16:56:23](https://lobste.rs/s/joxeuf/1k_agentic_project_schemas) - [1K+ agentic project schemas reconstructed from posts on related subreddits](https://altsoph.com/pp/aps/)
* [2025-09-19, 16:05:00](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Happening To Wholesale Electricity Prices?](https://hardware.slashdot.org/story/25/09/19/165209/whats-happening-to-wholesale-electricity-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 15:41:13](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl) - [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174)
* [2025-09-19, 15:29:25](https://news.ycombinator.com/item?id=45302721) - [Kernel: Introduce Multikernel Architecture Support](https://lwn.net/ml/all/20250918222607.186488-1-xiyou.wangcong@gmail.com/)
* [2025-09-19, 15:20:34](https://lobste.rs/s/ogurli/myth_reality_mac_os_x_snow_leopard_2023) - [The myth and reality of Mac OS X Snow Leopard (2023)](https://lapcatsoftware.com/articles/2023/11/5.html)
* [2025-09-19, 15:01:00](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Armed Forces Switch To LibreOffice](https://it.slashdot.org/story/25/09/19/1452223/austrias-armed-forces-switch-to-libreoffice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 14:43:50](https://news.ycombinator.com/item?id=45302222) - [Revamping an Old TV as a Gift (2019)](https://blog.davidv.dev/posts/revamping-an-old-tv-as-a-gift/)
* [2025-09-19, 14:28:47](https://news.ycombinator.com/item?id=45302065) - [I regret building this $3000 Pi AI cluster](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 14:23:51](https://lobste.rs/s/isdngh/release_automation_testing_on_ci) - [Release automation and testing on CI](https://lucasew.github.io/post/20250919-project-automations/)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 14:01:00](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paris DVD Rental Store in Last Stand Against Streaming Giants](https://entertainment.slashdot.org/story/25/09/19/141242/paris-dvd-rental-store-in-last-stand-against-streaming-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 12:25:50](https://news.ycombinator.com/item?id=45300865) - [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/)
* [2025-09-19, 12:25:04](https://lobste.rs/s/6bo13j/type_branding_typescript) - [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/)
* [2025-09-19, 12:20:10](https://news.ycombinator.com/item?id=45300810) - [YouTube downloaders (and how Google silenced the press)](https://windowsread.me/p/best-youtube-downloaders)
* [2025-09-19, 12:09:12](https://lobste.rs/s/bzfzyd/run_unix_command_multiple_sub_processes) - [run a UNIX command in multiple sub-processes with line-buffered I/O](https://kmx.io/blog/released-runj-v0.1-and-runj-v0.2-run-unix-command-sub-processes-with-line-buffered-io)
* [2025-09-19, 12:00:16](https://news.ycombinator.com/item?id=45300615) - [Dynamo AI (YC W22) Is Hiring a Senior Kubernetes Engineer](https://www.ycombinator.com/companies/dynamo-ai/jobs/fU1oC9q-senior-kubernetes-engineer)
* [2025-09-19, 11:55:00](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve To Drop Steam Support For 32-Bit Windows Versions Next Year](https://games.slashdot.org/story/25/09/19/1154205/valve-to-drop-steam-support-for-32-bit-windows-versions-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 10:54:51](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/x2c5dn/what_are_you_doing_this_weekend)
* [2025-09-19, 09:30:00](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank Vision Fund To Lay Off 20% of Employees in Shift To Bold AI Bets](https://slashdot.org/story/25/09/19/0921230/softbank-vision-fund-to-lay-off-20-of-employees-in-shift-to-bold-ai-bets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 09:19:04](https://news.ycombinator.com/item?id=45299625) - [Statistical Physics with R: Ising Model with Monte Carlo](https://github.com/msuzen/isingLenzMC)
* [2025-09-19, 08:53:53](https://lobste.rs/s/6d4tae/freebsd_vs_smartos_who_s_faster_for_jails) - [FreeBSD vs. SmartOS: Who&apos;s Faster for Jails, Zones, and bhyve VMs?](https://it-notes.dragas.net/2025/09/19/freebsd-vs-smartos-whos-faster-for-jails-zones-bhyve/)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 08:09:17](https://news.ycombinator.com/item?id=45299170) - [Ruby Central&apos;s Attack on RubyGems [pdf]](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 07:01:00](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Microsoft Entra ID Vulnerability Could Have Been Catastrophic](https://it.slashdot.org/story/25/09/19/027208/this-microsoft-entra-id-vulnerability-could-have-been-catastrophic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 05:49:08](https://news.ycombinator.com/item?id=45298336) - [Nostr](https://nostr.com/)
* [2025-09-19, 05:46:34](https://lobste.rs/s/oi2lr9/common_sense_unit_work) - [The common sense unit of work](https://blog.nilenso.com/blog/2025/09/17/the-common-sense-unit-of-work/)
* [2025-09-19, 05:43:17](https://lobste.rs/s/oa5jn6/faking_adts_gadts_languages_shouldn_t) - [Faking ADTs and GADTs in Languages That Shouldn&apos;t Have Them](https://blog.jle.im/entry/faking-adts-and-gadts.html)
* [2025-09-19, 04:46:07](https://news.ycombinator.com/item?id=45298034) - [The health benefits of sunlight may outweigh the risk of skin cancer](https://www.economist.com/science-and-technology/2025/09/17/the-health-benefits-of-sunlight-may-outweigh-the-risk-of-skin-cancer)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 04:01:00](https://slashdot.org/story/25/09/19/0157250/microsoft-is-filling-teams-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Filling Teams With AI Agents](https://slashdot.org/story/25/09/19/0157250/microsoft-is-filling-teams-with-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 03:28:18](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11) - [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/)
* [2025-09-19, 02:00:00](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Future Rests on 200 Million Precarious Workers](https://slashdot.org/story/25/09/19/0150205/chinas-future-rests-on-200-million-precarious-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 01:09:00](https://slashdot.org/story/25/09/19/019243/intel-says-blockbuster-nvidia-deal-doesnt-change-its-own-roadmap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Says Blockbuster Nvidia Deal Doesn&apos;t Change Its Own Roadmap](https://slashdot.org/story/25/09/19/019243/intel-says-blockbuster-nvidia-deal-doesnt-change-its-own-roadmap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 23:13:34](https://lobste.rs/s/8hu6t2/hypervisor_1_000_lines) - [Hypervisor in 1,000 Lines](https://1000hv.seiya.me/en/)
* [2025-09-18, 22:40:06](https://news.ycombinator.com/item?id=45295898) - [Want to piss off your IT department? Are the links not malicious looking enough?](https://phishyurl.com/)
* [2025-09-18, 21:01:00](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Gemini To Chrome Desktop Browser for US Users](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 20:37:28](https://lobste.rs/s/axzxca/netscape_navigator_2_0_was_released_30) - [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/)
* [2025-09-18, 20:11:29](https://news.ycombinator.com/item?id=45294390) - [Shipping 100 hardware units in under eight weeks](https://farhanhossain.substack.com/p/how-we-shipped-100-hardware-units)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:53:37](https://lobste.rs/s/ttj58a/reflection_c_s_decade_defining_rocket) - [Reflection — C++’s decade-defining rocket engine](https://herbsutter.com/2025/09/18/yesterdays-talk-video-posted-reflection-cs-decade-defining-rocket-engine/)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 16:41:52](https://lobste.rs/s/vrsdxo/configuration_files_are_user_interfaces) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:54:46](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0) - [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/)
* [2025-09-18, 13:52:50](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development) - [How can we sandbox our development machines?](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development)
* [2025-09-18, 12:22:46](https://news.ycombinator.com/item?id=45288740) - [Dialing Up the Internet Phonebook](https://pketh.org/internet-phonebook.html)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:55:55](https://lobste.rs/s/whxl2y/nick_wellnhofer_steps_down_as_libxml2) - [Nick Wellnhofer steps down as libxml2 maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 00:18:54](https://news.ycombinator.com/item?id=45270015) - [R MCP Server](https://github.com/finite-sample/rmcp)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 21:26:08](https://news.ycombinator.com/item?id=45268293) - [Frying Eggs and Air Quality Tests](https://chillphysicsenjoyer.substack.com/p/frying-eggs-and-air-quality-tests)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 18:13:30](https://news.ycombinator.com/item?id=45265760) - [Show the Physics](https://interactivetextbooks.tudelft.nl/showthephysics/Introduction/About.html)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 04:29:16](https://news.ycombinator.com/item?id=45258029) - [Safepoints and Fil-C](https://fil-c.org/safepoints)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 22:34:15](https://news.ycombinator.com/item?id=45255785) - [Internet Archive&apos;s big battle with music publishers ends in settlement](https://arstechnica.com/tech-policy/2025/09/internet-archives-big-battle-with-music-publishers-ends-in-settlement/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
