# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Decades-Old Bash Tricks Expose AI Coding Agents To Supply Chain Attacks](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An intriguing revelation about how decades-old programming tricks in Bash scripting can lead to security vulnerabilities in contemporary AI coding agents, making them susceptible to supply chain attacks. [Comments](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A martian rock has lots of carbon on it, and it&apos;s not clear why](https://arstechnica.com/science/2026/07/a-martian-rock-has-lots-of-carbon-on-it-and-its-not-clear-why/) - Researchers encounter a Mars rock with unusually high levels of carbon but remain puzzled about its origins. [Comments](https://news.ycombinator.com/item?id=48785459)

* [What Is a Quantum Computer Good For? Absolutely Nothing - Yet](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critique on quantum computing technologies exploring their limitations and challenges. [Comments](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Startup Targets Datacenters With 3D-Printed Nuclear Reactor Module](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A startup explores the possibilities of using 3D-printed nuclear reactor modules to meet the growing energy demands of data centers. [Comments](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - Details on a remarkable open-source project by an engineer who developed a cost-effective and advanced radar system. [Comments](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)

* [Video Game History Foundation Says Piracy Remains the Only Viable Preservation Method](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Video Game History Foundation makes a case for digital piracy as the sole practical method for preserving gaming history. [Comments](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Space

* [Astrophysicists Puzzle over Webb’s New Universe](https://www.quantamagazine.org/astrophysicists-puzzle-over-webbs-new-universe-20260702/) - A fascinating look at how the James Webb Space Telescope is transforming our understanding of the universe. [Comments](https://news.ycombinator.com/item?id=48783948)

* [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - Learn about NASA's breakthrough development for sustainable deep space exploration. [Comments](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)

## Society and Culture

* [Does average person understand that all disc media dies too?](https://news.ycombinator.com/item?id=48785525) - A thought-provoking discussion on the impermanence of disc-based media and public awareness around it. [Comments](https://news.ycombinator.com/item?id=48785525)

* [The firefighting system of the Van der Heyden brothers in 17th century Amsterdam](https://worksinprogress.co/issue/how-amsterdam-invented-the-fire-department/) - Exploring the history and innovations of fire-fighting techniques in 17th century Amsterdam. [Comments](https://news.ycombinator.com/item?id=48780913)

## Software Development

* [EndBASIC 0.14: Are we multimedia yet?](https://www.endbasic.dev/2026/07/endbasic-0.14.html) - Details the latest iteration of the EndBASIC programming environment and its multimedia capabilities. [Comments](https://lobste.rs/s/ctulps/endbasic_0_14_are_we_multimedia_yet)

* [Reducing Assumptions, Exploding Your Code](https://ryelang.org/blog/posts/reducing_assumptions_but_exploding/) - A compelling argument about embracing minimal assumptions for better software development. [Comments](https://lobste.rs/s/be22hc/reducing_assumptions_exploding_your)

* [Why don&apos;t people use git properly?](https://deadsimpletech.com/blog/why-dont-people-use-git-properly) - Discussion on common misuses of Git and suggestions for utilizing its full potential. [Comments](https://lobste.rs/s/4e3g9a/why_don_t_people_use_git_properly)

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

* [2026-07-04, 15:34:00](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decades-Old Bash Tricks Expose AI Coding Agents To Supply Chain Attacks](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 15:28:25](https://lobste.rs/s/ctulps/endbasic_0_14_are_we_multimedia_yet) - [EndBASIC 0.14: Are we multimedia yet?](https://www.endbasic.dev/2026/07/endbasic-0.14.html)
* [2026-07-04, 15:24:00](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss) - [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss)
* [2026-07-04, 15:20:06](https://lobste.rs/s/xfjchg/do_wavy_walls_really_use_fewer_bricks_i) - [Do Wavy Walls Really Use Fewer Bricks? I Tested It in Blender](https://blog.tymscar.com/posts/crinklecranklewalls/)
* [2026-07-04, 15:18:45](https://lobste.rs/s/vb29tc/on_intent_code) - [On intent of Code](https://why.degree/on-intent/)
* [2026-07-04, 14:34:00](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Is a Quantum Computer Good For? Absolutely Nothing - Yet](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 14:08:55](https://news.ycombinator.com/item?id=48785525) - [Does average person understand that all disc media dies too?](https://news.ycombinator.com/item?id=48785525)
* [2026-07-04, 14:03:40](https://news.ycombinator.com/item?id=48785485) - [Potential session/cache leakage between workspace instances or consumer accounts](https://github.com/anthropics/claude-code/issues/74066)
* [2026-07-04, 14:02:59](https://news.ycombinator.com/item?id=48785478) - [How working memory could give rise to consciousness](https://www.scientificamerican.com/article/how-working-memory-could-give-rise-to-consciousness/)
* [2026-07-04, 14:00:03](https://news.ycombinator.com/item?id=48785459) - [A martian rock has lots of carbon on it, and it&apos;s not clear why](https://arstechnica.com/science/2026/07/a-martian-rock-has-lots-of-carbon-on-it-and-its-not-clear-why/)
* [2026-07-04, 12:35:37](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026) - [Who&apos;s Hiring? - Support Edition - Q3 2026](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026)
* [2026-07-04, 12:28:37](https://lobste.rs/s/qmnpkm/freebsd_ate_my_ram) - [FreeBSD ate my ram](https://crocidb.com/post/freebsd-ate-my-ram/)
* [2026-07-04, 12:00:57](https://news.ycombinator.com/item?id=48784777) - [Explanation of everything you can see in htop/top on Linux](https://peteris.rocks/blog/htop/)
* [2026-07-04, 11:57:02](https://lobste.rs/s/be22hc/reducing_assumptions_exploding_your) - [Reducing Assumptions, Exploding Your Code](https://ryelang.org/blog/posts/reducing_assumptions_but_exploding/)
* [2026-07-04, 11:30:50](https://lobste.rs/s/avqu6k/developer_verification_lineageos) - [Developer Verification – LineageOS](https://lineageos.org/Developer-Verification/)
* [2026-07-04, 11:00:00](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Targets Datacenters With 3D-Printed Nuclear Reactor Module](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 10:42:00](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss) - [Sony Announces End of PlayStation Discs, Parts of Digital Store in the Same Day](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss)
* [2026-07-04, 09:16:24](https://lobste.rs/s/4tiool/what_should_personal_website_be) - [What should a personal website be?](https://ratfactor.com/cards/personal-website)
* [2026-07-04, 09:08:09](https://news.ycombinator.com/item?id=48783948) - [Astrophysicists Puzzle over Webb’s New Universe](https://www.quantamagazine.org/astrophysicists-puzzle-over-webbs-new-universe-20260702/)
* [2026-07-04, 07:00:00](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game History Foundation Says Piracy Remains the Only Viable Preservation Method](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 06:43:32](https://lobste.rs/s/yvwctq/synthesis_is_harder_than_analysis) - [Synthesis is harder than analysis](https://surfingcomplexity.blog/2026/07/03/synthesis-is-harder-than-analysis/)
* [2026-07-04, 06:32:28](https://news.ycombinator.com/item?id=48783117) - [The bottleneck might be the air in the room](https://blog.mikebowler.ca/2026/07/03/co2-and-decision-making/)
* [2026-07-04, 05:54:00](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)
* [2026-07-04, 05:37:25](https://news.ycombinator.com/item?id=48782890) - [2026 Unslop AI-Written Fiction Contest Results](https://www.hyperstitionai.com/unslop-results)
* [2026-07-04, 04:37:15](https://news.ycombinator.com/item?id=48782671) - [Agentic coding notes from Galapagos Island](https://danluu.com/ai-coding/#appendix-agentic-loops-and-writing-this-post)
* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 04:07:54](https://lobste.rs/s/4e3g9a/why_don_t_people_use_git_properly) - [Why don&apos;t people use git properly?](https://deadsimpletech.com/blog/why-dont-people-use-git-properly)
* [2026-07-04, 03:54:01](https://lobste.rs/s/pigihe/agentic_coding_notes_from_galapogos) - [Agentic coding notes from Galapogos Island](https://danluu.com/ai-coding/#appendix-agentic-loops-and-writing-this-post)
* [2026-07-04, 03:40:25](https://lobste.rs/s/qxorqp/very_average_prototypes) - [Very Average Prototypes](https://goodnameforablog.com/posts/very-average-prototypes/)
* [2026-07-04, 03:36:03](https://news.ycombinator.com/item?id=48782435) - [Maybe you should learn something](https://www.marginalia.nu/log/a_135_learn/)
* [2026-07-04, 02:45:24](https://news.ycombinator.com/item?id=48782219) - [Synthesis is harder than analysis](https://surfingcomplexity.blog/2026/07/03/synthesis-is-harder-than-analysis/)
* [2026-07-04, 02:08:59](https://lobste.rs/s/suucvi/suffix_bwt_vs_cyclic_shift_bwt_fast) - [Suffix BWT vs cyclic shift BWT, and fast computation](https://purplesyringa.moe/blog/suffix-bwt-vs-cyclic-shift-bwt-and-fast-computation/)
* [2026-07-04, 02:00:00](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alibaba To Ban Claude Code In Workplace Over Alleged Backdoor Risks](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
* [2026-07-04, 00:57:44](https://news.ycombinator.com/item?id=48781688) - [MSI Center – How to gain SYSTEM privileges in seconds](https://mrbruh.com/msicenter/)
* [2026-07-04, 00:51:23](https://lobste.rs/s/1r09vz/rust_handling_results_map_closure) - [Rust - Handling Results In A Map Closure](https://reemus.dev/tldr/rust-handling-results-in-map-closure)
* [2026-07-03, 23:25:09](https://lobste.rs/s/wbpoiy/magit_4_6_released) - [Magit 4.6 released](https://emacsair.me/2026/07/01/magit-4.6/)
* [2026-07-03, 23:24:35](https://news.ycombinator.com/item?id=48781196) - [Odin, Wikipedia and engagement farming](https://katamari64.se/posts/2026/odin-wikipedia/)
* [2026-07-03, 23:23:43](https://lobste.rs/s/fx5e0f/i_don_t_maintain_my_homelab) - [I Don&apos;t Maintain My Homelab](https://cleberg.net/blog/homelab-maintenance.html)
* [2026-07-03, 22:46:18](https://news.ycombinator.com/item?id=48780913) - [The firefighting system of the Van der Heyden brothers in 17th century Amsterdam](https://worksinprogress.co/issue/how-amsterdam-invented-the-fire-department/)
* [2026-07-03, 22:40:29](https://news.ycombinator.com/item?id=48780870) - [Giant trees have no trouble pumping water to top branches: new research](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/giant-trees-have-no-trouble-pumping-water-to-top-branches/)
* [2026-07-03, 22:39:50](https://news.ycombinator.com/item?id=48780865) - [Steam Controller Auto-Charge – pilot to magnetic charging puck using CV](https://github.com/FossPrime/Steam-Controller-Auto-Charge)
* [2026-07-03, 22:33:10](https://news.ycombinator.com/item?id=48780801) - [Leanstral 1.5: Proof abundance for all](https://mistral.ai/news/leanstral-1-5/)
* [2026-07-03, 22:22:40](https://lobste.rs/s/xwsfs3/espionage_against_european_parliament) - [Espionage Against the European Parliament: Member of Committee Investigating Spyware Hacked with Pegasus](https://citizenlab.ca/research/member-of-committee-investigating-spyware-hacked-with-pegasus/)
* [2026-07-03, 21:49:26](https://lobste.rs/s/i7klfz/my_favorite_keyboards) - [My favorite keyboards](https://fabiensanglard.net/keyboards/index.html)
* [2026-07-03, 21:49:06](https://news.ycombinator.com/item?id=48780417) - [Performance per dollar is getting faster and cheaper](https://www.wafer.ai/blog/glm52-amd)
* [2026-07-03, 21:16:16](https://news.ycombinator.com/item?id=48780056) - [New serious vulnerabilities spiked around release of Claude Mythos Preview](https://epoch.ai/data-insights/cve-severity-spike)
* [2026-07-03, 20:29:00](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss) - [Bombshell Lawsuit Alleges that RAM Manufacturers are Colluding to Drive Up Prices](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss)
* [2026-07-03, 20:15:49](https://news.ycombinator.com/item?id=48779454) - [SearXNG: A free internet metasearch engine](https://github.com/searxng/searxng)
* [2026-07-03, 20:00:00](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Open-Sources Steam Machine&apos;s E-Ink Display](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 19:08:31](https://news.ycombinator.com/item?id=48778757) - [FreeBSD ate my RAM](https://crocidb.com/post/freebsd-ate-my-ram/)
* [2026-07-03, 16:39:02](https://lobste.rs/s/skwy7v/goodbye_forever_probably) - [Goodbye, forever, probably](https://whitep4nth3r.com/blog/goodbye-forever-probably/)
* [2026-07-03, 15:49:00](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss) - [Polestar Faces A Ban On Selling Its EVs In The US](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss)
* [2026-07-03, 15:14:55](https://news.ycombinator.com/item?id=48776044) - [Costco is the anti-Amazon](https://phenomenalworld.org/analysis/the-anti-amazon/)
* [2026-07-03, 15:03:43](https://news.ycombinator.com/item?id=48775921) - [Jamesob&apos;s guide to running SOTA LLMs locally](https://github.com/jamesob/local-llm)
* [2026-07-03, 15:00:00](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New PamStealer macOS Malware Uses Clever Tradecraft To Remain Stealthy](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 14:14:38](https://lobste.rs/s/zwz0wh/fourteener_lobsters) - [Fourteener Lobsters](https://lobste.rs/s/zwz0wh/fourteener_lobsters)
* [2026-07-03, 13:38:34](https://lobste.rs/s/munamr/non_hybrid_tls_mlkem_standard_by_any_other) - [A [non-hybrid tls-mlkem] standard by any other name: How IETF evades responsibility for its actions](https://blog.cr.yp.to/20260702-standard.html)
* [2026-07-03, 13:37:09](https://lobste.rs/s/1g5bum/why_implementing_activitypub_is_hard_why) - [Why implementing ActivityPub is hard, and why it doesn&apos;t have to be](https://hackers.pub/@fedify/2026/why-activitypub-is-hard)
* [2026-07-03, 10:57:00](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss) - [UN AI Great Risks and Rewards](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss)
* [2026-07-03, 10:00:00](https://news.slashdot.org/story/26/07/02/227222/us-life-expectancy-on-track-to-reach-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Life Expectancy On Track To Reach Record High](https://news.slashdot.org/story/26/07/02/227222/us-life-expectancy-on-track-to-reach-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 06:14:00](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss) - [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss)
* [2026-07-03, 06:00:00](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Has Enough Satellites To Launch Its Starlink Competitor](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 05:25:28](https://lobste.rs/s/asi79o/clickhouse_is_winning_observability) - [Clickhouse is winning the Observability Wars](https://matduggan.com/clickhouse-is-winning-the-observability-wars/)
* [2026-07-03, 02:39:28](https://lobste.rs/s/ovcwkm/arbitrary_code_execution_breaking) - [Arbitrary code execution breaking sandboxes in KDE Plasma](https://blog.kimiblock.top/2026/07/01/arbitrary-code-execution-in-kde-plasma/)
* [2026-07-03, 02:00:00](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sitting For More Than 30 Minutes At a Time Linked To Higher Risk of Cancer Death](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss) - [How to Burst the AI Bubble: Strike at its Roots](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss)
* [2026-07-02, 23:19:21](https://lobste.rs/s/ryny2c/crustc_entirety_rustc_translated_c) - [crustc: Entirety of rustc, translated to C](https://github.com/FractalFir/crustc)
* [2026-07-02, 21:05:00](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Labor Force Participation Rate Falls To Lowest In 50 years](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 20:40:00](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)
* [2026-07-02, 20:00:00](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agent Executes &apos;First&apos; End-To-End Ransomware Attack](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 19:00:00](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Godot Game Engine No Longer Accepts AI Code](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 18:05:00](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Charging a Subscription for Smart Glasses Features](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 17:00:00](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI &apos;In Early Talks To Give 5% Stake To US Government&apos;](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 15:58:00](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss) - [Remote-Controlled Cockroach Swarm Can Now Breathe Underwater](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss)
* [2026-07-02, 11:13:00](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss) - [Supreme Court Ruling Guts Government’s Use Of Geofence Warrants](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 13:22:19](https://news.ycombinator.com/item?id=48746327) - [The Vespa at 80: Why the Italian scooter remains the coolest thing on 2 wheels](https://www.cbc.ca/news/world/vespa-italy-postwar-design-9.7252641)
* [2026-07-01, 12:48:56](https://news.ycombinator.com/item?id=48745855) - [Postgres data stored in Parquet on S3: LTAP architecture explained](https://www.databricks.com/blog/lakebase-ltap-rethinking-database-storage)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 04:14:01](https://news.ycombinator.com/item?id=48742175) - [What ORMs have taught me: just learn SQL (2014)](https://wozniak.ca/blog/2014/08/03/1/index.html)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
* [2026-06-30, 21:45:22](https://news.ycombinator.com/item?id=48739644) - [Ship traces journey Spanish Armada sailors made in 1588](https://www.irishtimes.com/ireland/2026/06/30/it-is-a-huge-honour-ship-traces-journey-spanish-armada-sailors-made-in-1588/)
* [2026-06-30, 21:27:15](https://news.ycombinator.com/item?id=48739446) - [Breaking the Bird Barrier: Scientist Decodes Zebra Finch Language](https://www.freepressjournal.in/education/breaking-the-bird-barrier-scientist-decodes-zebra-finch-language)
* [2026-06-30, 21:25:00](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss) - [I Built A Whole-Home Ad Blocker With A $7 ESP32-S3 Board - And It Took Just Minutes](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss)
* [2026-06-30, 20:50:58](https://news.ycombinator.com/item?id=48739018) - [Mir Books – Books from the Soviet Era](https://mirtitles.org)
* [2026-06-30, 18:24:52](https://news.ycombinator.com/item?id=48737068) - [Night Witches – all-female Soviet aviator regiment WW2](https://en.wikipedia.org/wiki/Night_Witches)
* [2026-06-30, 16:41:00](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss) - [Ford Rehires ‘Gray Beard’ Engineers After AI Falls Short](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss)
* [2026-06-30, 11:49:00](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) - [Intel&apos;s Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W — May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)
* [2026-06-30, 07:05:00](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss) - [Mark Zuckerberg Is Selflessly Building Yet Another Horrible Product Nobody Asked For](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss)
* [2026-06-30, 02:18:00](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss) - [The Boeing 747 Begins Its Final Descent](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss)
