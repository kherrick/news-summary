# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Technology Releases

* [Magit 4.6 released](https://emacsair.me/2026/07/01/magit-4.6/) ([comments](https://lobste.rs/s/wbpoiy/magit_4_6_released))

* [Lemmy Development Update June 2026 and 1.0.0-beta.1](https://lemmy.ml/post/49561214) ([comments](https://lobste.rs/s/p7z8ip/lemmy_development_update_june_2026_1_0_0))

* [Valve Open-Sources Steam Machine's E-Ink Display](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48780870))

## Artificial Intelligence & Coding

* [Agentic coding notes from Galapogos Island](https://danluu.com/ai-coding/#appendix-agentic-loops-and-writing-this-post) ([comments](https://lobste.rs/s/pigihe/agentic_coding_notes_from_galapogos))

* [Suffix BWT vs cyclic shift BWT, and fast computation](https://purplesyringa.moe/blog/suffix-bwt-vs-cyclic-shift-bwt-and-fast-computation/) ([comments](https://lobste.rs/s/suucvi/suffix_bwt_vs_cyclic_shift_bwt_fast))

* [Jamesob's guide to running SOTA LLMs locally](https://github.com/jamesob/local-llm) ([comments](https://news.ycombinator.com/item?id=48775921))

## Cybersecurity

* [MSI Center – How to gain SYSTEM privileges in seconds](https://mrbruh.com/msicenter/) ([comments](https://news.ycombinator.com/item?id=48781688))

* [The pandemic of incomplete OpenSSL error handling](https://blog.jak-linux.org/2026/07/03/openssl-pandemic/) ([comments](https://lobste.rs/s/xqqamf/pandemic_incomplete_openssl_error))

* [New PamStealer macOS Malware Uses Clever Tradecraft To Remain Stealthy](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48775921))

## Scientific Discoveries and Environmental Advances

* [The circuit that lets your brain think and see](https://www.engineering.columbia.edu/about/news/circuit-lets-your-brain-think-and-see) ([comments](https://news.ycombinator.com/item?id=48780996))

* [Scientists discover guidance system for migratory songbirds](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/scientists-discover-guidance-system-for-migratory-songbirds/) ([comments](https://news.ycombinator.com/item?id=48781274))

* [Amsterdam invented the fire department](https://worksinprogress.co/issue/how-amsterdam-invented-the-fire-department/) ([comments](https://news.ycombinator.com/item?id=48780913))

* [Dispersion loss counteracts embedding condensation in small language models](https://chenliu-1996.github.io/projects/LM-Dispersion/) ([comments](https://news.ycombinator.com/item?id=48780826))

## Technological Issues and Ethics

* [Alibaba To Ban Claude Code In Workplace Over Alleged Backdoor Risks](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Espionage Against the European Parliament: Member of Committee Investigating Spyware Hacked with Pegasus](https://citizenlab.ca/research/member-of-committee-investigating-spyware-hacked-with-pegasus/) ([comments](https://lobste.rs/s/xwsfs3/espionage_against_european_parliament))

* [Markets are competitive if and only if P != NP](https://arxiv.org/abs/2602.20415) ([comments](https://lobste.rs/s/cpzsag/markets_are_competitive_if_only_if_p_np))

## Interesting Miscellaneous Topics

* [What does privatization of the US Postal Service mean?](https://phenomenalworld.org/analysis/unstitching-america/) ([comments](https://news.ycombinator.com/item?id=48781433))

* [Costco is the anti-Amazon](https://phenomenalworld.org/analysis/the-anti-amazon/) ([comments](https://news.ycombinator.com/item?id=48776044))

* [Factories are just rooms](https://interconnected.org/home/2026/07/03/factories) ([comments](https://news.ycombinator.com/item?id=48776035))

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

* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 03:54:01](https://lobste.rs/s/pigihe/agentic_coding_notes_from_galapogos) - [Agentic coding notes from Galapogos Island](https://danluu.com/ai-coding/#appendix-agentic-loops-and-writing-this-post)
* [2026-07-04, 03:40:25](https://lobste.rs/s/qxorqp/very_average_prototypes) - [Very Average Prototypes](https://goodnameforablog.com/posts/very-average-prototypes/)
* [2026-07-04, 02:08:59](https://lobste.rs/s/suucvi/suffix_bwt_vs_cyclic_shift_bwt_fast) - [Suffix BWT vs cyclic shift BWT, and fast computation](https://purplesyringa.moe/blog/suffix-bwt-vs-cyclic-shift-bwt-and-fast-computation/)
* [2026-07-04, 02:00:00](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alibaba To Ban Claude Code In Workplace Over Alleged Backdoor Risks](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
* [2026-07-04, 00:57:44](https://news.ycombinator.com/item?id=48781688) - [MSI Center – How to gain SYSTEM privileges in seconds](https://mrbruh.com/msicenter/)
* [2026-07-04, 00:35:49](https://news.ycombinator.com/item?id=48781597) - [Soatok&apos;s Informal Guide to Threat Models](https://soatok.blog/2026/06/30/soatoks-informal-guide-to-threat-models/)
* [2026-07-04, 00:17:28](https://lobste.rs/s/p7z8ip/lemmy_development_update_june_2026_1_0_0) - [Lemmy Development Update June 2026 and 1.0.0-beta.1](https://lemmy.ml/post/49561214)
* [2026-07-04, 00:12:39](https://lobste.rs/s/xqqamf/pandemic_incomplete_openssl_error) - [The pandemic of incomplete OpenSSL error handling](https://blog.jak-linux.org/2026/07/03/openssl-pandemic/)
* [2026-07-04, 00:01:18](https://news.ycombinator.com/item?id=48781433) - [What does privatization of the US Postal Service mean?](https://phenomenalworld.org/analysis/unstitching-america/)
* [2026-07-03, 23:36:46](https://news.ycombinator.com/item?id=48781274) - [Scientists discover guidance system for migratory songbirds](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/scientists-discover-guidance-system-for-migratory-songbirds/)
* [2026-07-03, 23:25:09](https://lobste.rs/s/wbpoiy/magit_4_6_released) - [Magit 4.6 released](https://emacsair.me/2026/07/01/magit-4.6/)
* [2026-07-03, 23:23:43](https://lobste.rs/s/fx5e0f/i_don_t_maintain_my_homelab) - [I Don&apos;t Maintain My Homelab](https://cleberg.net/blog/homelab-maintenance.html)
* [2026-07-03, 22:56:17](https://news.ycombinator.com/item?id=48780996) - [The circuit that lets your brain think and see](https://www.engineering.columbia.edu/about/news/circuit-lets-your-brain-think-and-see)
* [2026-07-03, 22:46:18](https://news.ycombinator.com/item?id=48780913) - [Amsterdam invented the fire department](https://worksinprogress.co/issue/how-amsterdam-invented-the-fire-department/)
* [2026-07-03, 22:40:29](https://news.ycombinator.com/item?id=48780870) - [Giant trees have no trouble pumping water to top branches](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/giant-trees-have-no-trouble-pumping-water-to-top-branches/)
* [2026-07-03, 22:39:50](https://news.ycombinator.com/item?id=48780865) - [Steam Controller Auto-Charge – pilot to magnetic charging puck using CV](https://github.com/FossPrime/Steam-Controller-Auto-Charge)
* [2026-07-03, 22:35:47](https://news.ycombinator.com/item?id=48780826) - [Dispersion loss counteracts embedding condensation in small language models](https://chenliu-1996.github.io/projects/LM-Dispersion/)
* [2026-07-03, 22:34:16](https://news.ycombinator.com/item?id=48780812) - [GitFut – Your GitHub stats turned into a World-Cup-style player card](https://gitfut.com)
* [2026-07-03, 22:33:10](https://news.ycombinator.com/item?id=48780801) - [Leanstral 1.5: Proof Abundance for All](https://mistral.ai/news/leanstral-1-5/)
* [2026-07-03, 22:22:40](https://lobste.rs/s/xwsfs3/espionage_against_european_parliament) - [Espionage Against the European Parliament: Member of Committee Investigating Spyware Hacked with Pegasus](https://citizenlab.ca/research/member-of-committee-investigating-spyware-hacked-with-pegasus/)
* [2026-07-03, 21:49:26](https://lobste.rs/s/i7klfz/my_favorite_keyboards) - [My favorite keyboards](https://fabiensanglard.net/keyboards/index.html)
* [2026-07-03, 21:49:06](https://news.ycombinator.com/item?id=48780417) - [GLM5.2 on AMD MI355X at 2626 tok/s/node at over 2x lower cost than Blackwell](https://www.wafer.ai/blog/glm52-amd)
* [2026-07-03, 21:28:55](https://news.ycombinator.com/item?id=48780224) - [Software, from First Principles](https://fazamhd.com/mental-models/software/)
* [2026-07-03, 21:16:16](https://news.ycombinator.com/item?id=48780056) - [New serious vulnerabilities spiked around release of Claude Mythos Preview](https://epoch.ai/data-insights/cve-severity-spike)
* [2026-07-03, 21:08:37](https://news.ycombinator.com/item?id=48779977) - [Africans Are Turning to Starlink](https://www.economist.com/middle-east-and-africa/2026/07/02/africans-are-turning-to-starlink)
* [2026-07-03, 21:00:50](https://news.ycombinator.com/item?id=48779906) - [Infracost (YC W21) Is Hiring a Marketing Lead to Shift FinOps Left](https://www.ycombinator.com/companies/infracost/jobs/YTJcFwr-marketing-lead)
* [2026-07-03, 20:42:00](https://news.ycombinator.com/item?id=48779723) - [Applied Category Theory Course (2018)](https://math.ucr.edu/home/baez/act_course/index.html)
* [2026-07-03, 20:38:26](https://news.ycombinator.com/item?id=48779683) - [Espionage Against the European Parliament](https://citizenlab.ca/research/member-of-committee-investigating-spyware-hacked-with-pegasus/)
* [2026-07-03, 20:29:00](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss) - [Bombshell Lawsuit Alleges that RAM Manufacturers are Colluding to Drive Up Prices](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss)
* [2026-07-03, 20:15:49](https://news.ycombinator.com/item?id=48779454) - [SearXNG: A free internet metasearch engine](https://github.com/searxng/searxng)
* [2026-07-03, 20:00:00](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Open-Sources Steam Machine&apos;s E-Ink Display](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 19:08:31](https://news.ycombinator.com/item?id=48778757) - [FreeBSD ate my RAM](https://crocidb.com/post/freebsd-ate-my-ram/)
* [2026-07-03, 17:04:08](https://news.ycombinator.com/item?id=48777266) - [International chess federation sanctions Kramnik](https://www.fide.com/fide-ethics-disciplinary-commission-issues-a-decision-in-case-involving-gm-vladimir-kramnik/)
* [2026-07-03, 16:39:02](https://lobste.rs/s/skwy7v/goodbye_forever_probably) - [Goodbye, forever, probably](https://whitep4nth3r.com/blog/goodbye-forever-probably/)
* [2026-07-03, 15:49:00](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss) - [Polestar Faces A Ban On Selling Its EVs In The US](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss)
* [2026-07-03, 15:42:35](https://lobste.rs/s/cpzsag/markets_are_competitive_if_only_if_p_np) - [Markets are competitive if and only if P != NP](https://arxiv.org/abs/2602.20415)
* [2026-07-03, 15:32:37](https://lobste.rs/s/e6k4z1/gossamer) - [Gossamer](https://gossamer-lang.org/)
* [2026-07-03, 15:14:55](https://news.ycombinator.com/item?id=48776044) - [Costco is the anti-Amazon](https://phenomenalworld.org/analysis/the-anti-amazon/)
* [2026-07-03, 15:13:43](https://news.ycombinator.com/item?id=48776035) - [Factories are just rooms](https://interconnected.org/home/2026/07/03/factories)
* [2026-07-03, 15:03:43](https://news.ycombinator.com/item?id=48775921) - [Jamesob&apos;s guide to running SOTA LLMs locally](https://github.com/jamesob/local-llm)
* [2026-07-03, 15:00:00](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New PamStealer macOS Malware Uses Clever Tradecraft To Remain Stealthy](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 14:14:38](https://lobste.rs/s/zwz0wh/fourteener_lobsters) - [Fourteener Lobsters](https://lobste.rs/s/zwz0wh/fourteener_lobsters)
* [2026-07-03, 13:38:34](https://lobste.rs/s/munamr/non_hybrid_tls_mlkem_standard_by_any_other) - [A [non-hybrid tls-mlkem] standard by any other name: How IETF evades responsibility for its actions](https://blog.cr.yp.to/20260702-standard.html)
* [2026-07-03, 13:37:09](https://lobste.rs/s/1g5bum/why_implementing_activitypub_is_hard_why) - [Why implementing ActivityPub is hard, and why it doesn&apos;t have to be](https://hackers.pub/@fedify/2026/why-activitypub-is-hard)
* [2026-07-03, 13:00:31](https://news.ycombinator.com/item?id=48774509) - [PostgreSQL and the OOM killer: Why we use strict memory overcommit](https://www.ubicloud.com/blog/postgresql-and-the-oom-killer-why-we-use-strict-memory-overcommit)
* [2026-07-03, 11:46:46](https://lobste.rs/s/tmmf5m/fixing_full_bleed_css) - [Fixing full-bleed CSS](https://dbushell.com/2026/07/03/fixing-full-bleed-css/)
* [2026-07-03, 10:57:53](https://lobste.rs/s/fuyanm/diving_into_depths_widevine_l3) - [Diving into the depths of Widevine L3](https://neodyme.io/en/blog/widevine_l3)
* [2026-07-03, 10:57:00](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss) - [UN AI Great Risks and Rewards](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss)
* [2026-07-03, 10:00:00](https://news.slashdot.org/story/26/07/02/227222/us-life-expectancy-on-track-to-reach-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Life Expectancy On Track To Reach Record High](https://news.slashdot.org/story/26/07/02/227222/us-life-expectancy-on-track-to-reach-record-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 09:57:25](https://lobste.rs/s/rhgehk/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/rhgehk/what_are_you_doing_this_weekend)
* [2026-07-03, 08:50:47](https://news.ycombinator.com/item?id=48772573) - [Wordgard: In-browser rich-text editor from the creator of ProseMirror](https://wordgard.net/)
* [2026-07-03, 06:45:52](https://lobste.rs/s/xg4bbg/guix_substitute_guix_pull) - [‘guix substitute‘ and ‘guix pull‘ vulnerabilities](https://guix.gnu.org/en/blog/2026/guix-substitute-pull-vulnerabilities/)
* [2026-07-03, 06:14:00](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss) - [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss)
* [2026-07-03, 06:00:00](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Has Enough Satellites To Launch Its Starlink Competitor](https://tech.slashdot.org/story/26/07/02/2149203/amazon-has-enough-satellites-to-launch-its-starlink-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 05:25:28](https://lobste.rs/s/asi79o/clickhouse_is_winning_observability) - [Clickhouse is winning the Observability Wars](https://matduggan.com/clickhouse-is-winning-the-observability-wars/)
* [2026-07-03, 02:39:28](https://lobste.rs/s/ovcwkm/arbitrary_code_execution_breaking) - [Arbitrary code execution breaking sandboxes in KDE Plasma](https://blog.kimiblock.top/2026/07/01/arbitrary-code-execution-in-kde-plasma/)
* [2026-07-03, 02:00:00](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sitting For More Than 30 Minutes At a Time Linked To Higher Risk of Cancer Death](https://science.slashdot.org/story/26/07/02/2116205/sitting-for-more-than-30-minutes-at-a-time-linked-to-higher-risk-of-cancer-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss) - [How to Burst the AI Bubble: Strike at its Roots](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss)
* [2026-07-02, 23:19:21](https://lobste.rs/s/ryny2c/crustc_entirety_rustc_translated_c) - [crustc: Entirety of rustc, translated to C](https://github.com/FractalFir/crustc)
* [2026-07-02, 21:05:00](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Labor Force Participation Rate Falls To Lowest In 50 years](https://news.slashdot.org/story/26/07/02/213229/labor-force-participation-rate-falls-to-lowest-in-50-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 20:40:00](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)
* [2026-07-02, 20:14:02](https://lobste.rs/s/loubrx/ds_css_css_framework_recreating_ds_ds_lite) - [ds.css: A css framework recreating the DS / DS Lite&apos;s UI](https://github.com/spiritov/ds.css)
* [2026-07-02, 20:00:00](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agent Executes &apos;First&apos; End-To-End Ransomware Attack](https://it.slashdot.org/story/26/07/02/1849243/ai-agent-executes-first-end-to-end-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 19:00:00](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Godot Game Engine No Longer Accepts AI Code](https://games.slashdot.org/story/26/07/02/1839237/godot-game-engine-no-longer-accepts-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 18:43:32](https://lobste.rs/s/oe8pxn/no_llm_code_dependencies) - [No LLM code in dependencies](https://joeyh.name/blog/entry/no_LLM_code_in_dependencies/)
* [2026-07-02, 18:05:00](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Charging a Subscription for Smart Glasses Features](https://news.slashdot.org/story/26/07/02/182227/meta-is-charging-a-subscription-for-smart-glasses-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 17:00:00](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI &apos;In Early Talks To Give 5% Stake To US Government&apos;](https://yro.slashdot.org/story/26/07/02/1623259/openai-in-early-talks-to-give-5-stake-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 16:00:00](https://yro.slashdot.org/story/26/07/02/0253203/whatsapp-usernames-are-already-raising-impersonation-red-flags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WhatsApp Usernames Are Already Raising Impersonation Red Flags](https://yro.slashdot.org/story/26/07/02/0253203/whatsapp-usernames-are-already-raising-impersonation-red-flags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 15:58:00](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss) - [Remote-Controlled Cockroach Swarm Can Now Breathe Underwater](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss)
* [2026-07-02, 15:00:00](https://mobile.slashdot.org/story/26/07/02/0244215/oneplus-is-quietly-steering-customers-toward-oppo-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnePlus Is Quietly Steering Customers Toward OPPO Products](https://mobile.slashdot.org/story/26/07/02/0244215/oneplus-is-quietly-steering-customers-toward-oppo-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 12:01:19](https://lobste.rs/s/e1uduo/jj_v0_43_0_released) - [jj v0.43.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.43.0)
* [2026-07-02, 11:13:00](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss) - [Supreme Court Ruling Guts Government’s Use Of Geofence Warrants](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss)
* [2026-07-02, 11:00:00](https://science.slashdot.org/story/26/07/02/0230210/the-space-based-data-center-hype-machine-is-already-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Space-Based Data Center Hype Machine Is Already In Orbit ](https://science.slashdot.org/story/26/07/02/0230210/the-space-based-data-center-hype-machine-is-already-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 07:00:00](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Reportedly Has an AI Device Prototype](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-01, 23:07:56](https://news.ycombinator.com/item?id=48754326) - [You can get Unicode working on DOS](https://twitter.com/i/status/2071469740141224272)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 13:45:32](https://news.ycombinator.com/item?id=48746695) - [Notes from Building Tinkerfont](https://mighil.com/notes-from-building-tinkerfont)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 10:11:12](https://news.ycombinator.com/item?id=48744546) - [We put a Redis server inside our runtime](https://encore.dev/blog/redis-runtime)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
* [2026-06-30, 21:25:00](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss) - [I Built A Whole-Home Ad Blocker With A $7 ESP32-S3 Board - And It Took Just Minutes](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss)
* [2026-06-30, 16:41:00](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss) - [Ford Rehires ‘Gray Beard’ Engineers After AI Falls Short](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss)
* [2026-06-30, 11:49:00](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) - [Intel&apos;s Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W — May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)
* [2026-06-30, 11:07:38](https://news.ycombinator.com/item?id=48730953) - [Hunting a 16-year-old SQLite WAL bug with TLA+](https://ubuntu.com/blog/hunting-a-16-year-old-sqlite-bug-with-tla-is-dqlite-affected)
* [2026-06-30, 07:05:00](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss) - [Mark Zuckerberg Is Selflessly Building Yet Another Horrible Product Nobody Asked For](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss)
* [2026-06-30, 02:18:00](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss) - [The Boeing 747 Begins Its Final Descent](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss)
