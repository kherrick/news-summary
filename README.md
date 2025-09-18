# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security Developments

* [Show HN: The text disappears when you screenshot it](https://unscreenshottable.vercel.app/?text=Hello) - [Comments](https://news.ycombinator.com/item?id=45284311)

* [Hypervisor 101 in Rust](https://tandasat.github.io/Hypervisor-101-in-Rust/) - [Comments](https://news.ycombinator.com/item?id=45283731)

* [Meta Ray-Ban Display](https://www.meta.com/blog/meta-ray-ban-display-ai-glasses-connect-2025/) - [Comments](https://news.ycombinator.com/item?id=45283306)

* [One Token to rule them all – Obtaining Global Admin in every Entra ID tenant](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/) - [Comments](https://news.ycombinator.com/item?id=45282497)

* [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages) - [Comments](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm)

* [Gluon: a GPU programming language based on the same compiler stack as Triton](https://github.com/triton-lang/triton/blob/main/python/tutorials/gluon/01-intro.py) - [Comments](https://news.ycombinator.com/item?id=45280592)

* [Tinycolor supply chain attack post-mortem](https://sigh.dev/posts/ctrl-tinycolor-post-mortem/) - [Comments](https://news.ycombinator.com/item?id=45278657)

* [PureVPN IPv6 leak](https://anagogistis.com/posts/purevpn-ipv6-leak/) - [Comments](https://lobste.rs/s/mhq1fo/purevpn_ipv6_leak)

## Industry and Business Insights

* [After Child's Trauma, Chatbot Maker Allegedly Forced Mom To Arbitration For $100 Payout](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/09/17/0413255&from=rss)

* [Extreme Heat Spurs New Laws Aimed at Protecting Workers Worldwide](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Innovations and Releases

* [Introducing GNOME 49, “Brescia”](https://release.gnome.org/49/) - [Comments](https://lobste.rs/s/xm1lqy/introducing_gnome_49_brescia)

* [WASM 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/) - [Comments](https://lobste.rs/s/bqiqjm/wasm_3_0_completed)

* [Django.tasks exists](https://theorangeone.net/posts/django-dot-tasks-exists/) - [Comments](https://lobste.rs/s/cg7zbe/django_tasks_exists)

* [A Dumb Introduction to Z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/) - [Comments](https://lobste.rs/s/g0yhjl/dumb_introduction_z3)

## Environmental and Scientific Discoveries

* [Darkest Nights Are Getting Lighter](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Drought in Iraq reveals tombs created 2,300 years ago](https://www.smithsonianmag.com/smart-news/severe-droughts-in-iraq-reveals-dozens-of-ancient-tombs-created-2300-years-ago-180987347/) - [Comments](https://news.ycombinator.com/item?id=45278581)

* [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/09/13/1842215&from=rss)

* [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/09/15/1937219&from=rss)

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

* [2025-09-18, 03:30:00](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Sending Its World-Beating Auto Industry Into a Tailspin](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 02:18:45](https://news.ycombinator.com/item?id=45284311) - [Show HN: The text disappears when you screenshot it](https://unscreenshottable.vercel.app/?text=Hello)
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
* [2025-09-17, 19:50:11](https://news.ycombinator.com/item?id=45280592) - [Gluon: a GPU programming language based on the same compiler stack as Triton](https://github.com/triton-lang/triton/blob/main/python/tutorials/gluon/01-intro.py)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 19:25:00](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extreme Heat Spurs New Laws Aimed at Protecting Workers Worldwide](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:46:03](https://news.ycombinator.com/item?id=45279792) - [Optimizing ClickHouse for Intel&apos;s 280 core processors](https://clickhouse.com/blog/optimizing-clickhouse-intel-high-core-count-cpu)
* [2025-09-17, 18:46:00](https://slashdot.org/story/25/09/17/1836233/ais-ability-to-displace-jobs-is-advancing-quickly-anthropic-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Ability To Displace Jobs is Advancing Quickly, Anthropic CEO Says](https://slashdot.org/story/25/09/17/1836233/ais-ability-to-displace-jobs-is-advancing-quickly-anthropic-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:16:53](https://news.ycombinator.com/item?id=45279384) - [WASM 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 18:15:16](https://news.ycombinator.com/item?id=45279357) - [DeepMind and OpenAI win gold at ICPC](https://codeforces.com/blog/entry/146536)
* [2025-09-17, 18:07:00](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Darkest Nights Are Getting Lighter](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:05:31](https://lobste.rs/s/cg7zbe/django_tasks_exists) - [django.tasks exists](https://theorangeone.net/posts/django-dot-tasks-exists/)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 17:28:00](https://slashdot.org/story/25/09/17/1724241/openai-says-models-programmed-to-make-stuff-up-instead-of-admitting-ignorance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Models Programmed To Make Stuff Up Instead of Admitting Ignorance](https://slashdot.org/story/25/09/17/1724241/openai-says-models-programmed-to-make-stuff-up-instead-of-admitting-ignorance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 17:24:14](https://news.ycombinator.com/item?id=45278740) - [DeepSeek writes less secure code for groups China disfavors?](https://www.washingtonpost.com/technology/2025/09/16/deepseek-ai-security/)
* [2025-09-17, 17:18:38](https://news.ycombinator.com/item?id=45278657) - [Tinycolor supply chain attack post-mortem](https://sigh.dev/posts/ctrl-tinycolor-post-mortem/)
* [2025-09-17, 17:12:15](https://news.ycombinator.com/item?id=45278581) - [Drought in Iraq reveals tombs created 2,300 years ago](https://www.smithsonianmag.com/smart-news/severe-droughts-in-iraq-reveals-dozens-of-ancient-tombs-created-2300-years-ago-180987347/)
* [2025-09-17, 17:00:05](https://news.ycombinator.com/item?id=45278424) - [Event Horizon Labs (YC W24) Is Hiring](https://www.ycombinator.com/companies/event-horizon-labs/jobs/U6oyyKZ-founding-engineer-at-event-horizon-labs)
* [2025-09-17, 16:50:00](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Corals Won&apos;t Survive a Warmer Planet, a New Study Finds](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 16:49:37](https://news.ycombinator.com/item?id=45278279) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-17, 16:13:00](https://news.ycombinator.com/item?id=45277704) - [Launch HN: RunRL (YC X25) – Reinforcement learning as a service](https://runrl.com)
* [2025-09-17, 16:12:36](https://lobste.rs/s/rsuojg/installing_using_debian_with_my_decades) - [Installing and Using Debian With My Decades-Old Genuine DEC vt510 Serial Terminal](https://changelog.complete.org/archives/10886-installing-and-using-debian-using-my-decades-old-genuine-dec-vt510-serial-terminal)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 14:29:10](https://news.ycombinator.com/item?id=45276262) - [YouTube addresses lower view counts which seem to be caused by ad blockers](https://9to5google.com/2025/09/16/youtube-lower-view-counts-ad-blockers/)
* [2025-09-17, 14:23:27](https://lobste.rs/s/ahebdv/iiscv_lisp_based_version_control_system) - [IISCV (Lisp-based Version Control System) - image-based](https://github.com/gassechen/iiscv)
* [2025-09-17, 14:17:02](https://lobste.rs/s/3sqw4o/devenv_1_9_scaling_nix_projects_using) - [devenv 1.9: Scaling Nix projects using modules and profiles - devenv](https://devenv.sh/blog/2025/09/17/devenv-19-scaling-nix-projects-using-modules-and-profiles/)
* [2025-09-17, 14:02:29](https://news.ycombinator.com/item?id=45275973) - [UUIDv47: Store UUIDv7 in DB, emit UUIDv4 outside (SipHash-masked timestamp)](https://github.com/stateless-me/uuidv47)
* [2025-09-17, 13:16:01](https://lobste.rs/s/jbk7o7/is_github_actions_suitable_for_running) - [Is GitHub Actions suitable for running benchmarks?](https://labs.quansight.org/blog/2021/08/github-actions-benchmarks)
* [2025-09-17, 13:08:39](https://lobste.rs/s/y0btij/zerofs_9p_nfs_block_devices_on_top_s3) - [ZeroFS: 9P, NFS, or block devices on top of S3-compatible storage](https://github.com/Barre/ZeroFS)
* [2025-09-17, 13:03:24](https://news.ycombinator.com/item?id=45275354) - [Tau² benchmark: How a prompt rewrite boosted GPT-5-mini by 22%](https://quesma.com/blog/tau2-benchmark-improving-results-smaller-models/)
* [2025-09-17, 12:03:16](https://lobste.rs/s/hrq54n/determination_fifth_busy_beaver_value) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 11:07:44](https://news.ycombinator.com/item?id=45274277) - [Apple Photos app corrupts images](https://tenderlovemaking.com/2025/09/17/apple-photos-app-corrupts-images/)
* [2025-09-17, 10:26:18](https://news.ycombinator.com/item?id=45273999) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 10:07:48](https://lobste.rs/s/mhq1fo/purevpn_ipv6_leak) - [PureVPN IPv6 leak](https://anagogistis.com/posts/purevpn-ipv6-leak/)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 09:56:53](https://lobste.rs/s/wm8awb/introducing_obelisk_0_24_1) - [Introducing Obelisk 0.24.1](https://obeli.sk/blog/introducing-obelisk-0-24-1/)
* [2025-09-17, 09:45:44](https://news.ycombinator.com/item?id=45273747) - [Alibaba&apos;s new AI chip: Key specifications comparable to H20](https://news.futunn.com/en/post/62202518/alibaba-s-new-ai-chip-unveiled-key-specifications-comparable-to)
* [2025-09-17, 09:24:15](https://lobste.rs/s/otzuq0/why_we_re_building_stategraph_terraform) - [Why We&apos;re Building Stategraph: Terraform State as a Distributed Systems Problem](https://stategraph.dev/blog/why-stategraph/)
* [2025-09-17, 08:51:45](https://lobste.rs/s/zdjtvp/what_go_proxy_has_been_doing) - [what the go proxy has been doing](https://flak.tedunangst.com/post/what-the-go-proxy-has-been-doing)
* [2025-09-17, 07:38:42](https://lobste.rs/s/240z81/our_ai_policy_vs_code_conduct_vs_reality) - [Our AI policy vs code of conduct and vs reality](https://discourse.llvm.org/t/our-ai-policy-vs-code-of-conduct-and-vs-reality/88300)
* [2025-09-17, 05:31:47](https://lobste.rs/s/jpxmcj/ubuntu_25_10_s_rust_coreutils_transition) - [Ubuntu 25.10&apos;s Rust Coreutils Transition Has Uncovered Performance Shortcomings](https://www.phoronix.com/news/Ubuntu-Rust-Coreutils-Perf)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 04:52:26](https://lobste.rs/s/ywbyko/asus_gaming_laptop_acpi_firmware_bug_deep) - [The ASUS Gaming Laptop ACPI Firmware Bug: A Deep Technical Investigation](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-17, 00:00:29](https://lobste.rs/s/g0yhjl/dumb_introduction_z3) - [A Dumb Introduction to z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 20:51:11](https://lobste.rs/s/uwa9dw/rupert_s_snub_cube_other_math_holes) - [Rupert&apos;s Snub Cube and other Math Holes](http://tom7.org/ruperts/)
* [2025-09-16, 20:35:29](https://news.ycombinator.com/item?id=45267643) - [U.S. investors, Trump close in on TikTok deal with China](https://www.wsj.com/tech/details-emerge-on-u-s-china-tiktok-deal-594e009f)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 15:17:16](https://lobste.rs/s/cnh1si/java_25) - [Java 25](https://openjdk.org/projects/jdk/25/)
* [2025-09-16, 14:56:04](https://lobste.rs/s/4tlumh/how_implement_outbox_pattern_go_postgres) - [How to implement the Outbox pattern in Go and Postgres](https://medium.com/@pliutau/how-to-implement-the-outbox-pattern-in-go-and-postgres-e9bc2699cbe2)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 11:41:32](https://lobste.rs/s/khhbv8/you_want_technology_with_warts) - [You Want Technology With Warts](https://entropicthoughts.com/you-want-technology-with-warts)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 05:36:43](https://news.ycombinator.com/item?id=45258403) - [Infinite Mac: Resource Fork Roundtripping](https://blog.persistent.info/2025/09/infinite-mac-resource-forks.html)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 20:51:27](https://news.ycombinator.com/item?id=45254763) - [Boring is good](https://jenson.org/boring/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 18:08:45](https://news.ycombinator.com/item?id=45253012) - [What&apos;s New in C# 14: Null-Conditional Assignments](https://blog.ivankahl.com/csharp-14-null-conditional-assignments/)
* [2025-09-15, 16:24:38](https://news.ycombinator.com/item?id=45251624) - [Ask HN: What&apos;s a good 3D Printer for sub $1000?](https://news.ycombinator.com/item?id=45251624)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 19:12:40](https://news.ycombinator.com/item?id=45242434) - [Understanding Deflate](https://jjrscott.com/to-deflate-or-not/)
* [2025-09-14, 18:49:34](https://news.ycombinator.com/item?id=45242287) - [Grade 2 Braille](https://en.wikipedia.org/wiki/English_Braille)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 07:30:09](https://news.ycombinator.com/item?id=45238175) - [Can Your GrimDark Beat the Germans (2022)](https://medium.com/luminasticity/can-your-grimdark-beat-the-germans-429f3e6fc4df)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
