# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and AI Innovations

* [Gemini AI Solves Coding Problem That Stumped 139 Human Teams At ICPC World Finals](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45279357))

* [DeepMind and OpenAI win gold at ICPC](https://codeforces.com/blog/entry/146536) ([comments](https://news.ycombinator.com/item?id=45279357))

* [Gluon: a GPU programming language based on the same compiler stack as Triton](https://github.com/triton-lang/triton/blob/main/python/tutorials/gluon/01-intro.py) ([comments](https://news.ycombinator.com/item?id=45280592))

* [ZeroFS: 9P, NFS, or block devices on top of S3-compatible storage](https://github.com/Barre/ZeroFS) ([comments](https://lobste.rs/s/y0btij/zerofs_9p_nfs_block_devices_on_top_s3))

* [UUIDv47: Store UUIDv7 in DB, emit UUIDv4 outside (SipHash-masked timestamp)](https://github.com/stateless-me/uuidv47) ([comments](https://news.ycombinator.com/item?id=45275973))

## Future of Transportation

* [Flying Cars Crash Into Each Other At Air Show In China](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45281593))

* [Tesla is trying to hide 3 Robotaxi accidents](https://electrek.co/2025/09/17/tesla-hide-3-robotaxi-accidents/) ([comments](https://news.ycombinator.com/item?id=45281593))

## Security and Privacy

* [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss))

* [Tinycolor supply chain attack post-mortem](https://sigh.dev/posts/ctrl-tinycolor-post-mortem/) ([comments](https://news.ycombinator.com/item?id=45278657))

* [Anthropic Denies Federal Agencies Use of Claude for Surveillance Tasks](https://news.slashdot.org/story/25/09/17/145230/anthropic-denies-federal-agencies-use-of-claude-for-surveillance-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/17/145230/anthropic-denies-federal-agencies-use-of-claude-for-surveillance-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Health and Environment

* [Extreme Heat Spurs New Laws Aimed at Protecting Workers Worldwide](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Permanent Standard Time Could Cut Strokes, Obesity Among Americans](https://science.slashdot.org/story/25/09/16/2317241/permanent-standard-time-could-cut-strokes-obesity-among-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/16/2317241/permanent-standard-time-could-cut-strokes-obesity-among-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Corals Won't Survive a Warmer Planet, a New Study Finds](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Historical Discoveries

* [Drought in Iraq reveals tombs created 2,300 years ago](https://www.smithsonianmag.com/smart-news/severe-droughts-in-iraq-reveals-dozens-of-ancient-tombs-created-2300-years-ago-180987347/) ([comments](https://news.ycombinator.com/item?id=45278581))

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

* [2025-09-17, 21:28:09](https://news.ycombinator.com/item?id=45281593) - [Tesla is trying to hide 3 Robotaxi accidents](https://electrek.co/2025/09/17/tesla-hide-3-robotaxi-accidents/)
* [2025-09-17, 21:20:00](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flying Cars Crash Into Each Other At Air Show In China](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 21:10:04](https://news.ycombinator.com/item?id=45281437) - [Jqp: TUI Playground to Experiment with Jq](https://github.com/noahgorstein/jqp)
* [2025-09-17, 20:41:07](https://news.ycombinator.com/item?id=45281139) - [Claude Code Degradation: A postmortem of three recent issues](https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues)
* [2025-09-17, 20:40:00](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Favors Anthropic Over OpenAI For Visual Studio Code](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 20:16:15](https://lobste.rs/s/pqt0mb/steering_committee_retrospective) - [Steering Committee Retrospective](https://www.haskellforall.com/2025/09/steering-committee-retrospective.html)
* [2025-09-17, 20:02:00](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini AI Solves Coding Problem That Stumped 139 Human Teams At ICPC World Finals](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 19:50:11](https://news.ycombinator.com/item?id=45280592) - [Gluon: a GPU programming language based on the same compiler stack as Triton](https://github.com/triton-lang/triton/blob/main/python/tutorials/gluon/01-intro.py)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 19:25:00](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extreme Heat Spurs New Laws Aimed at Protecting Workers Worldwide](https://news.slashdot.org/story/25/09/17/192234/extreme-heat-spurs-new-laws-aimed-at-protecting-workers-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:55:28](https://news.ycombinator.com/item?id=45279898) - [Famous cognitive psychology experiments that failed to replicate](https://buttondown.com/aethermug/archive/aether-mug-famous-cognitive-psychology/)
* [2025-09-17, 18:46:03](https://news.ycombinator.com/item?id=45279792) - [Optimizing ClickHouse for Intel&apos;s 280 core processors](https://clickhouse.com/blog/optimizing-clickhouse-intel-high-core-count-cpu)
* [2025-09-17, 18:46:00](https://slashdot.org/story/25/09/17/1836233/ais-ability-to-displace-jobs-is-advancing-quickly-anthropic-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Ability To Displace Jobs is Advancing Quickly, Anthropic CEO Says](https://slashdot.org/story/25/09/17/1836233/ais-ability-to-displace-jobs-is-advancing-quickly-anthropic-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 18:16:53](https://news.ycombinator.com/item?id=45279384) - [WASM 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 18:15:16](https://news.ycombinator.com/item?id=45279357) - [DeepMind and OpenAI win gold at ICPC](https://codeforces.com/blog/entry/146536)
* [2025-09-17, 18:07:00](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Darkest Nights Are Getting Lighter](https://news.slashdot.org/story/25/09/17/187256/darkest-nights-are-getting-lighter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 17:57:39](https://news.ycombinator.com/item?id=45279143) - [Anthropic irks White House with limits on models’ use](https://www.semafor.com/article/09/17/2025/anthropic-irks-white-house-with-limits-on-models-uswhite-house-with-limits-on-models-use)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 17:28:00](https://slashdot.org/story/25/09/17/1724241/openai-says-models-programmed-to-make-stuff-up-instead-of-admitting-ignorance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Models Programmed To Make Stuff Up Instead of Admitting Ignorance](https://slashdot.org/story/25/09/17/1724241/openai-says-models-programmed-to-make-stuff-up-instead-of-admitting-ignorance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 17:24:14](https://news.ycombinator.com/item?id=45278740) - [DeepSeek writes less secure code for groups China disfavors?](https://www.washingtonpost.com/technology/2025/09/16/deepseek-ai-security/)
* [2025-09-17, 17:20:36](https://news.ycombinator.com/item?id=45278686) - [Depression reduces capacity to learn to actively avoid aversive events](https://www.eneuro.org/content/12/9/ENEURO.0034-25.2025)
* [2025-09-17, 17:18:38](https://news.ycombinator.com/item?id=45278657) - [Tinycolor supply chain attack post-mortem](https://sigh.dev/posts/ctrl-tinycolor-post-mortem/)
* [2025-09-17, 17:12:15](https://news.ycombinator.com/item?id=45278581) - [Drought in Iraq reveals tombs created 2,300 years ago](https://www.smithsonianmag.com/smart-news/severe-droughts-in-iraq-reveals-dozens-of-ancient-tombs-created-2300-years-ago-180987347/)
* [2025-09-17, 17:00:05](https://news.ycombinator.com/item?id=45278424) - [Event Horizon Labs (YC W24) Is Hiring](https://www.ycombinator.com/companies/event-horizon-labs/jobs/U6oyyKZ-founding-engineer-at-event-horizon-labs)
* [2025-09-17, 16:50:00](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Corals Won&apos;t Survive a Warmer Planet, a New Study Finds](https://news.slashdot.org/story/25/09/17/1650244/corals-wont-survive-a-warmer-planet-a-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 16:49:37](https://news.ycombinator.com/item?id=45278279) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-17, 16:13:00](https://news.ycombinator.com/item?id=45277704) - [Launch HN: RunRL (YC X25) – Reinforcement learning as a service](https://runrl.com)
* [2025-09-17, 16:12:36](https://lobste.rs/s/rsuojg/installing_using_debian_with_my_decades) - [Installing and Using Debian With My Decades-Old Genuine DEC vt510 Serial Terminal](https://changelog.complete.org/archives/10886-installing-and-using-debian-using-my-decades-old-genuine-dec-vt510-serial-terminal)
* [2025-09-17, 16:06:00](https://apple.slashdot.org/story/25/09/17/166241/after-years-of-resistance-apple-might-finally-release-a-touchscreen-macbook-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Years of Resistance, Apple Might Finally Release a Touchscreen MacBook Pro](https://apple.slashdot.org/story/25/09/17/166241/after-years-of-resistance-apple-might-finally-release-a-touchscreen-macbook-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 15:27:00](https://slashdot.org/story/25/09/17/1527231/business-insider-reportedly-tells-journalists-they-can-use-ai-to-draft-stories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Business Insider Reportedly Tells Journalists They Can Use AI To Draft Stories](https://slashdot.org/story/25/09/17/1527231/business-insider-reportedly-tells-journalists-they-can-use-ai-to-draft-stories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 15:25:24](https://news.ycombinator.com/item?id=45276987) - [How to motivate yourself to do a thing you don&apos;t want to do](https://ashleyjanssen.com/how-to-motivate-yourself-to-do-a-thing-you-dont-want-to-do/)
* [2025-09-17, 14:45:00](https://entertainment.slashdot.org/story/25/09/17/1445208/is-tvs-golden-age-officially-over-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is TV&apos;s Golden Age (Officially) Over? A Statistical Analysis](https://entertainment.slashdot.org/story/25/09/17/1445208/is-tvs-golden-age-officially-over-a-statistical-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 14:29:10](https://news.ycombinator.com/item?id=45276262) - [YouTube addresses lower view counts which seem to be caused by ad blockers](https://9to5google.com/2025/09/16/youtube-lower-view-counts-ad-blockers/)
* [2025-09-17, 14:23:27](https://lobste.rs/s/ahebdv/iiscv_lisp_based_version_control_system) - [IISCV (Lisp-based Version Control System) - image-based](https://github.com/gassechen/iiscv)
* [2025-09-17, 14:17:02](https://lobste.rs/s/3sqw4o/devenv_1_9_scaling_nix_projects_using) - [devenv 1.9: Scaling Nix projects using modules and profiles - devenv](https://devenv.sh/blog/2025/09/17/devenv-19-scaling-nix-projects-using-modules-and-profiles/)
* [2025-09-17, 14:05:00](https://news.slashdot.org/story/25/09/17/145230/anthropic-denies-federal-agencies-use-of-claude-for-surveillance-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Denies Federal Agencies Use of Claude for Surveillance Tasks](https://news.slashdot.org/story/25/09/17/145230/anthropic-denies-federal-agencies-use-of-claude-for-surveillance-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 14:02:29](https://news.ycombinator.com/item?id=45275973) - [UUIDv47: Store UUIDv7 in DB, emit UUIDv4 outside (SipHash-masked timestamp)](https://github.com/stateless-me/uuidv47)
* [2025-09-17, 13:49:17](https://lobste.rs/s/7wzzgt/death_type_classes) - [Death to type classes](https://jappie.me/death-to-type-classes.html)
* [2025-09-17, 13:16:01](https://lobste.rs/s/jbk7o7/is_github_actions_suitable_for_running) - [Is GitHub Actions suitable for running benchmarks?](https://labs.quansight.org/blog/2021/08/github-actions-benchmarks)
* [2025-09-17, 13:08:39](https://lobste.rs/s/y0btij/zerofs_9p_nfs_block_devices_on_top_s3) - [ZeroFS: 9P, NFS, or block devices on top of S3-compatible storage](https://github.com/Barre/ZeroFS)
* [2025-09-17, 13:03:24](https://news.ycombinator.com/item?id=45275354) - [Tau² benchmark: How a prompt rewrite boosted GPT-5-mini by 22%](https://quesma.com/blog/tau2-benchmark-improving-results-smaller-models/)
* [2025-09-17, 13:01:00](https://news.slashdot.org/story/25/09/17/1211234/gas-stove-makers-quietly-delete-air-pollution-warnings-as-they-fight-mandatory-health-labels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gas Stove Makers Quietly Delete Air Pollution Warnings as They Fight Mandatory Health Labels](https://news.slashdot.org/story/25/09/17/1211234/gas-stove-makers-quietly-delete-air-pollution-warnings-as-they-fight-mandatory-health-labels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 12:03:16](https://lobste.rs/s/hrq54n/determination_fifth_busy_beaver_value) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 11:46:10](https://lobste.rs/s/ot8nd1/avoiding_common_sync_waitgroup_mistakes) - [Avoiding Common sync.WaitGroup Mistakes in Go](https://www.calhoun.io/avoiding-common-sync-waitgroup-mistakes/)
* [2025-09-17, 11:07:44](https://news.ycombinator.com/item?id=45274277) - [Apple Photos app corrupts images](https://tenderlovemaking.com/2025/09/17/apple-photos-app-corrupts-images/)
* [2025-09-17, 10:26:18](https://news.ycombinator.com/item?id=45273999) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 10:07:48](https://lobste.rs/s/mhq1fo/purevpn_ipv6_leak) - [PureVPN IPv6 leak](https://anagogistis.com/posts/purevpn-ipv6-leak/)
* [2025-09-17, 10:00:00](https://science.slashdot.org/story/25/09/16/2317241/permanent-standard-time-could-cut-strokes-obesity-among-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Permanent Standard Time Could Cut Strokes, Obesity Among Americans](https://science.slashdot.org/story/25/09/16/2317241/permanent-standard-time-could-cut-strokes-obesity-among-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 09:56:53](https://lobste.rs/s/wm8awb/introducing_obelisk_0_24_1) - [Introducing Obelisk 0.24.1](https://obeli.sk/blog/introducing-obelisk-0-24-1/)
* [2025-09-17, 09:45:44](https://news.ycombinator.com/item?id=45273747) - [Alibaba&apos;s new AI chip: Key specifications comparable to H20](https://news.futunn.com/en/post/62202518/alibaba-s-new-ai-chip-unveiled-key-specifications-comparable-to)
* [2025-09-17, 09:24:15](https://lobste.rs/s/otzuq0/why_we_re_building_stategraph_terraform) - [Why We&apos;re Building Stategraph: Terraform State as a Distributed Systems Problem](https://stategraph.dev/blog/why-stategraph/)
* [2025-09-17, 08:51:45](https://lobste.rs/s/zdjtvp/what_go_proxy_has_been_doing) - [what the go proxy has been doing](https://flak.tedunangst.com/post/what-the-go-proxy-has-been-doing)
* [2025-09-17, 08:43:00](https://tech.slashdot.org/story/25/09/17/0843228/china-tells-its-tech-companies-to-stop-buying-all-of-nvidias-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tells Its Tech Companies To Stop Buying All of Nvidia&apos;s AI Chips](https://tech.slashdot.org/story/25/09/17/0843228/china-tells-its-tech-companies-to-stop-buying-all-of-nvidias-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 07:38:42](https://lobste.rs/s/240z81/our_ai_policy_vs_code_conduct_vs_reality) - [Our AI policy vs code of conduct and vs reality](https://discourse.llvm.org/t/our-ai-policy-vs-code-of-conduct-and-vs-reality/88300)
* [2025-09-17, 05:31:47](https://lobste.rs/s/jpxmcj/ubuntu_25_10_s_rust_coreutils_transition) - [Ubuntu 25.10&apos;s Rust Coreutils Transition Has Uncovered Performance Shortcomings](https://www.phoronix.com/news/Ubuntu-Rust-Coreutils-Perf)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 04:52:26](https://lobste.rs/s/ywbyko/asus_gaming_laptop_acpi_firmware_bug_deep) - [The ASUS Gaming Laptop ACPI Firmware Bug: A Deep Technical Investigation](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-17, 03:54:36](https://news.ycombinator.com/item?id=45271484) - [The Asus gaming laptop ACPI firmware bug](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-17, 00:00:29](https://lobste.rs/s/g0yhjl/dumb_introduction_z3) - [A Dumb Introduction to z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 23:33:02](https://lobste.rs/s/limhxl/claude_can_sometimes_prove_it) - [Claude Can (Sometimes) Prove It](https://www.galois.com/articles/claude-can-sometimes-prove-it)
* [2025-09-16, 20:51:11](https://lobste.rs/s/uwa9dw/rupert_s_snub_cube_other_math_holes) - [Rupert&apos;s Snub Cube and other Math Holes](http://tom7.org/ruperts/)
* [2025-09-16, 20:35:29](https://news.ycombinator.com/item?id=45267643) - [U.S. investors, Trump close in on TikTok deal with China](https://www.wsj.com/tech/details-emerge-on-u-s-china-tiktok-deal-594e009f)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 15:17:16](https://lobste.rs/s/cnh1si/java_25) - [Java 25](https://openjdk.org/projects/jdk/25/)
* [2025-09-16, 14:56:04](https://lobste.rs/s/4tlumh/how_implement_outbox_pattern_go_postgres) - [How to implement the Outbox pattern in Go and Postgres](https://medium.com/@pliutau/how-to-implement-the-outbox-pattern-in-go-and-postgres-e9bc2699cbe2)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 11:41:32](https://lobste.rs/s/khhbv8/you_want_technology_with_warts) - [You Want Technology With Warts](https://entropicthoughts.com/you-want-technology-with-warts)
* [2025-09-16, 10:55:53](https://lobste.rs/s/70n6tf/how_i_use_ai) - [How I Use AI](https://timkellogg.me/blog/2025/09/15/ai-tools)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 05:36:43](https://news.ycombinator.com/item?id=45258403) - [Infinite Mac: Resource Fork Roundtripping](https://blog.persistent.info/2025/09/infinite-mac-resource-forks.html)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 03:32:43](https://news.ycombinator.com/item?id=45257757) - [Just for fun: animating a mosaic of 90s GIFs](https://alexplescan.com/posts/2025/09/15/gifs/)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 21:15:15](https://news.ycombinator.com/item?id=45255004) - [Noise cancelling a fan](https://chillphysicsenjoyer.substack.com/p/noise-cancelling-a-fan)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 16:24:38](https://news.ycombinator.com/item?id=45251624) - [Ask HN: What&apos;s a good 3D Printer for sub $1000?](https://news.ycombinator.com/item?id=45251624)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 19:12:40](https://news.ycombinator.com/item?id=45242434) - [Understanding Deflate](https://jjrscott.com/to-deflate-or-not/)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
