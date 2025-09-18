# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Business Highlights

* [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia shakes up the tech industry with a massive $5 billion investment in Intel, marking a significant collaboration between two tech giants. [Comments](https://news.ycombinator.com/item?id=45288271).

* [You Had No Taste Before AI](https://matthewsanabria.dev/posts/you-had-no-taste-before-ai/) - A provocative analysis of AI's impact on human creativity and decision-making in the arts. [Comments](https://news.ycombinator.com/item?id=45288551).

* [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough materials science introduces a revolutionary organogel with self-healing properties.

* [Beyond EUV' Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&from=rss) - Advances in chip manufacturing technology herald a potential challenge to existing EUV lithography methods.

## Open Source and Programming News

* [Controlling program flow with capabilities in Scala](https://nrinaudo.github.io/articles/capabilities_flow.html) - Dive into Scala's approach to managing program flow with capabilities. [Comments](https://lobste.rs/s/ezjbvq/controlling_program_flow_with).

* [Go channels to solve interface impedance mismatch](https://dolthub.com/blog/2025-09-12-go-channels-for-period-mismatch/) - Unveiling a unique solution for interface impedance mismatches using Go channels. [Comments](https://lobste.rs/s/d4edzo/go_channels_solve_interface_impedance).

* [Hypervisor 101 in Rust](https://tandasat.github.io/Hypervisor-101-in-Rust/) - Explore how to create hypervisors using Rust for efficient virtual machines. [Comments](https://news.ycombinator.com/item?id=45283731).

* [Sunsetting the rustwasm GitHub org](https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org/) - Rust's WASM community evolves as its organizational structure shifts. [Comments](https://lobste.rs/s/r7tnyq/sunsetting_rustwasm_github_org).

## Cultural and Industry Shifts

* [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/) - Reflect on the legacy and future of Blender as its leader steps down. [Comments](https://lobste.rs/s/bpk3l6/ton_roosendaal_step_down_as_blender).

* [A QBasic Text Adventure Still Expanding in 2025](https://the-ventureweaver.itch.io/) - Nostalgia meets innovation in a growing QBasic text adventure game. [Comments](https://news.ycombinator.com/item?id=45284398).

* [Meta Ray-Ban Display](https://www.meta.com/blog/meta-ray-ban-display-ai-glasses-connect-2025/) - A new era of wearable tech as Meta showcases AI-integrated Ray-Ban glasses. [Comments](https://news.ycombinator.com/item?id=45283306).

## Security and Privacy

* [One Token to rule them all – Obtaining Global Admin in every Entra ID tenant](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/) - Critical analysis of Entra ID security vulnerabilities. [Comments](https://news.ycombinator.com/item?id=45282497).

* [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages/) - An alarming new development in NPM package vulnerabilities. [Comments](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm).

* [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&from=rss) - Innovative communication technology safeguards drone operations. [Comments](https://soylentnews.org/article.pl?sid=25/09/17/0355211&from=rss).

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

* [2025-09-18, 13:00:00](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Leads Biggest Drop In FICO Scores Since Financial Crisis](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:26:00](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:00:44](https://news.ycombinator.com/item?id=45288551) - [You Had No Taste Before AI](https://matthewsanabria.dev/posts/you-had-no-taste-before-ai/)
* [2025-09-18, 11:24:34](https://news.ycombinator.com/item?id=45288271) - [Nvidia to Invest $5B in Intel](https://www.ft.com/content/be8d4c0c-66ff-4dfd-9b43-af6c0b290ada)
* [2025-09-18, 11:04:48](https://news.ycombinator.com/item?id=45288161) - [Nvidia buys $5B in Intel stock in seismic deal](https://www.tomshardware.com/pc-components/cpus/nvidia-and-intel-announce-jointly-developed-intel-x86-rtx-socs-for-pcs-with-nvidia-graphics-also-custom-nvidia-data-center-x86-processors-nvidia-buys-usd5-billion-in-intel-stock-in-seismic-deal)
* [2025-09-18, 10:08:08](https://lobste.rs/s/ezjbvq/controlling_program_flow_with) - [Controlling program flow with capabilities in Scala](https://nrinaudo.github.io/articles/capabilities_flow.html)
* [2025-09-18, 10:00:00](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Acquires Fyre Festival Brand](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:33:07](https://news.ycombinator.com/item?id=45287551) - [CircuitHub (YC W12) Is Hiring Operations Research Engineers (UK/Remote)](https://www.ycombinator.com/companies/circuithub/jobs/UM1QSjZ-operations-research-engineer)
* [2025-09-18, 09:28:40](https://news.ycombinator.com/item?id=45287513) - [Fast Fourier Transforms Part 1: Cooley-Tukey](https://connorboyle.io/2025/09/11/fft-cooley-tukey.html)
* [2025-09-18, 09:26:20](https://lobste.rs/s/bpk3l6/ton_roosendaal_step_down_as_blender) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-18, 08:56:37](https://lobste.rs/s/oo15ry/access_logging_2025) - [Access logging in 2025](https://neugierig.org/software/blog/2025/09/access-log.html)
* [2025-09-18, 08:41:32](https://news.ycombinator.com/item?id=45287155) - [This Website Has No Class](https://aaadaaam.com/notes/no-class/)
* [2025-09-18, 08:19:24](https://lobste.rs/s/d4edzo/go_channels_solve_interface_impedance) - [Go channels to solve interface impedance mismatch](https://dolthub.com/blog/2025-09-12-go-channels-for-period-mismatch/)
* [2025-09-18, 08:08:05](https://news.ycombinator.com/item?id=45286905) - [John Grisham Still Wonders: Will Texas Kill Robert Roberson?](https://www.dmagazine.com/frontburner/2025/09/author-john-grisham-still-wonders-will-texas-kill-robert-roberson/)
* [2025-09-18, 07:54:51](https://lobste.rs/s/r7tnyq/sunsetting_rustwasm_github_org) - [Sunsetting the rustwasm GitHub org](https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org/)
* [2025-09-18, 07:12:56](https://news.ycombinator.com/item?id=45286526) - [Pnpm has a new setting to stave off supply chain attacks](https://pnpm.io/blog/releases/10.16)
* [2025-09-18, 07:00:00](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 06:55:28](https://news.ycombinator.com/item?id=45286394) - [History of the Gem Desktop Environment](https://nemanjatrifunovic.substack.com/p/history-of-the-gem-desktop-environment)
* [2025-09-18, 06:53:08](https://news.ycombinator.com/item?id=45286369) - [CERN Animal Shelter for Computer Mice](https://computer-animal-shelter.web.cern.ch/index.shtml)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:55:55](https://lobste.rs/s/whxl2y/nick_wellnhofer_steps_down_as_libxml2) - [Nick Wellnhofer steps down as libxml2 maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 04:41:17](https://lobste.rs/s/hydvux/we_have_outgrown_process_model) - [We have outgrown the Process model](https://sidhion.com/blog/process_model_outgrown/)
* [2025-09-18, 04:37:00](https://lobste.rs/s/3tmeh0/monoids_public) - [Monoids in Public](https://blog.veritates.love/monoids_in_public.html)
* [2025-09-18, 03:30:00](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Sending Its World-Beating Auto Industry Into a Tailspin](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 03:06:08](https://news.ycombinator.com/item?id=45284766) - [Towards a Physics Foundation Model](https://arxiv.org/abs/2509.13805)
* [2025-09-18, 02:25:59](https://news.ycombinator.com/item?id=45284398) - [A QBasic Text Adventure Still Expanding in 2025](https://the-ventureweaver.itch.io/)
* [2025-09-18, 02:18:45](https://news.ycombinator.com/item?id=45284311) - [Show HN: The text disappears when you screenshot it](https://unscreenshottable.vercel.app/?text=Hello)
* [2025-09-18, 01:37:11](https://news.ycombinator.com/item?id=45283887) - [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack)
* [2025-09-18, 01:25:00](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Writes Less-Secure Code For Groups China Disfavors](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:18:58](https://news.ycombinator.com/item?id=45283731) - [Hypervisor 101 in Rust](https://tandasat.github.io/Hypervisor-101-in-Rust/)
* [2025-09-18, 01:16:02](https://lobste.rs/s/xm1lqy/introducing_gnome_49_brescia) - [Introducing GNOME 49, “Brescia”](https://release.gnome.org/49/)
* [2025-09-18, 00:45:00](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Child&apos;s Trauma, Chatbot Maker Allegedly Forced Mom To Arbitration For $100 Payout](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 00:30:44](https://news.ycombinator.com/item?id=45283306) - [Meta Ray-Ban Display](https://www.meta.com/blog/meta-ray-ban-display-ai-glasses-connect-2025/)
* [2025-09-18, 00:17:20](https://news.ycombinator.com/item?id=45283196) - [Stepping Down as Libxml2 Maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-18, 00:02:00](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GNOME 49 &apos;Brescia&apos; Desktop Environment Released](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 23:21:00](https://slashdot.org/story/25/09/17/1948210/chimps-drinking-a-lager-a-day-in-ripe-fruit-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chimps Drinking a Lager a Day in Ripe Fruit, Study Finds](https://slashdot.org/story/25/09/17/1948210/chimps-drinking-a-lager-a-day-in-ripe-fruit-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 23:03:21](https://news.ycombinator.com/item?id=45282497) - [One Token to rule them all – Obtaining Global Admin in every Entra ID tenant](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/)
* [2025-09-17, 22:41:00](https://games.slashdot.org/story/25/09/17/1937258/sony-quietly-downgrades-ps5-digital-edition-storage-to-825gb-at-same-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Quietly Downgrades PS5 Digital Edition Storage To 825GB at Same Price](https://games.slashdot.org/story/25/09/17/1937258/sony-quietly-downgrades-ps5-digital-edition-storage-to-825gb-at-same-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 22:33:26](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm) - [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages)
* [2025-09-17, 22:00:00](https://yro.slashdot.org/story/25/09/17/1941240/congress-asks-valve-discord-and-twitch-to-testify-on-radicalization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Asks Valve, Discord, and Twitch To Testify On &apos;Radicalization&apos;](https://yro.slashdot.org/story/25/09/17/1941240/congress-asks-valve-discord-and-twitch-to-testify-on-radicalization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 21:37:28](https://lobste.rs/s/r6td3c/one_token_rule_them_all_obtaining_global) - [One Token to rule them all - obtaining Global Admin in every Entra ID tenant via Actor tokens](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/)
* [2025-09-17, 21:20:00](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flying Cars Crash Into Each Other At Air Show In China](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 20:41:07](https://news.ycombinator.com/item?id=45281139) - [A postmortem of three recent issues](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)
* [2025-09-17, 20:40:00](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Favors Anthropic Over OpenAI For Visual Studio Code](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 20:16:15](https://lobste.rs/s/pqt0mb/steering_committee_retrospective) - [Steering Committee Retrospective](https://www.haskellforall.com/2025/09/steering-committee-retrospective.html)
* [2025-09-17, 20:02:00](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini AI Solves Coding Problem That Stumped 139 Human Teams At ICPC World Finals](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 19:25:00](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extreme Heat Spurs New Laws Aimed at Protecting Workers Worldwide](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:46:03](https://news.ycombinator.com/item?id=45279792) - [Optimizing ClickHouse for Intel&apos;s 280 core processors](https://clickhouse.com/blog/optimizing-clickhouse-intel-high-core-count-cpu)
* [2025-09-17, 18:16:53](https://news.ycombinator.com/item?id=45279384) - [WASM 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 18:05:31](https://lobste.rs/s/cg7zbe/django_tasks_exists) - [django.tasks exists](https://theorangeone.net/posts/django-dot-tasks-exists/)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 16:49:37](https://news.ycombinator.com/item?id=45278279) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 14:29:10](https://news.ycombinator.com/item?id=45276262) - [YouTube addresses lower view counts which seem to be caused by ad blockers](https://9to5google.com/2025/09/16/youtube-lower-view-counts-ad-blockers/)
* [2025-09-17, 13:16:01](https://lobste.rs/s/jbk7o7/is_github_actions_suitable_for_running) - [Is GitHub Actions suitable for running benchmarks?](https://labs.quansight.org/blog/2021/08/github-actions-benchmarks)
* [2025-09-17, 13:08:39](https://lobste.rs/s/y0btij/zerofs_9p_nfs_block_devices_on_top_s3) - [ZeroFS: 9P, NFS, or block devices on top of S3-compatible storage](https://github.com/Barre/ZeroFS)
* [2025-09-17, 12:03:16](https://lobste.rs/s/hrq54n/determination_fifth_busy_beaver_value) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 10:07:48](https://lobste.rs/s/mhq1fo/purevpn_ipv6_leak) - [PureVPN IPv6 leak](https://anagogistis.com/posts/purevpn-ipv6-leak/)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 09:24:15](https://lobste.rs/s/otzuq0/why_we_re_building_stategraph_terraform) - [Why We&apos;re Building Stategraph: Terraform State as a Distributed Systems Problem](https://stategraph.dev/blog/why-stategraph/)
* [2025-09-17, 08:51:45](https://lobste.rs/s/zdjtvp/what_go_proxy_has_been_doing) - [what the go proxy has been doing](https://flak.tedunangst.com/post/what-the-go-proxy-has-been-doing)
* [2025-09-17, 07:38:42](https://lobste.rs/s/240z81/our_ai_policy_vs_code_conduct_vs_reality) - [Our AI policy vs code of conduct and vs reality](https://discourse.llvm.org/t/our-ai-policy-vs-code-of-conduct-and-vs-reality/88300)
* [2025-09-17, 05:31:47](https://lobste.rs/s/jpxmcj/ubuntu_25_10_s_rust_coreutils_transition) - [Ubuntu 25.10&apos;s Rust Coreutils Transition Has Uncovered Performance Shortcomings](https://www.phoronix.com/news/Ubuntu-Rust-Coreutils-Perf)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 04:52:26](https://lobste.rs/s/ywbyko/asus_gaming_laptop_acpi_firmware_bug_deep) - [The ASUS Gaming Laptop ACPI Firmware Bug: A Deep Technical Investigation](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 17:52:17](https://news.ycombinator.com/item?id=45265487) - [Midcentury North American Restaurant Placemats](https://casualarchivist.substack.com/p/order-up)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 07:21:03](https://news.ycombinator.com/item?id=45259080) - [Elements of C Style (1994)](https://www.teamten.com/lawrence/style/)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 23:19:17](https://news.ycombinator.com/item?id=45256145) - [Keeping SSH sessions alive with systemd-inhibit](https://kd8bny.com/posts/session_inhibit/)
* [2025-09-15, 20:51:27](https://news.ycombinator.com/item?id=45254763) - [Boring is good](https://jenson.org/boring/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 16:46:13](https://news.ycombinator.com/item?id=45251918) - [60 years after Gemini, newly processed images reveal details](https://arstechnica.com/space/2025/09/60-years-after-gemini-newly-processed-images-reveal-incredible-details/)
* [2025-09-15, 15:46:02](https://news.ycombinator.com/item?id=45251111) - [Orange Pi RV2 $40 RISC-V SBC: Friendly Gateway to IoT and AI Projects](https://riscv.org/ecosystem-news/2025/09/orange-pi-rv2-40-risc-v-sbc-friendly-gateway-to-iot-and-ai-projects/)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 04:22:34](https://news.ycombinator.com/item?id=45246095) - [How Container Filesystem Works: Building a Docker-Like Container from Scratch](https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
