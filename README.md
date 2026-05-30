# [News Summary](https://kherrick.github.io/news-summary/)

## Major Tech Developments and Industry Insights

* [Dell Stock Surges 32% in One Day. Big Revenue From AI Servers Stuns Analysts](https://slashdot.org/story/26/05/29/2033206/dell-stock-surges-32-in-one-day-big-revenue-from-ai-servers-stuns-analysts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Dell's remarkable stock surge highlights how AI server revenues shocked industry experts.

* [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - Analysis of how Google Search is transforming into a fundamentally new ecosystem.

* [Wix Is the Latest To Cut 20% of Jobs While Citing AI](https://slashdot.org/story/26/05/28/2113232/wix-is-the-latest-to-cut-20-of-jobs-while-citing-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Wix joins the growing wave of tech layoffs, attributing the downsizing to advancements in AI.

* [Microsoft 0-day feud escalates as researcher threatens another exploit dump](https://www.theregister.com/security/2026/05/28/microsoft-0-day-feud-escalates-as-researcher-threatens-another-windows-exploit-dump/5248085) - Tensions rise as a researcher warns of further exploit disclosures in a feud over Microsoft's vulnerabilities.

## Innovations and Open Source Projects

* [Show HN: Open-source private home security camera system (end-to-end encryption)](https://github.com/secluso/core) - An introduction to an open-source, privacy-focused home security camera system with full encryption.

* [Show HN: Tiny-vLLM – high performance LLM inference engine in C++ and CUDA](https://github.com/jmaczan/tiny-vllm) - A high-performance LLM inference engine leveraging cutting-edge development.

* [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/) - Exploring how SQLite simplifies the implementation of durable workflows.

* [NNN Stack: NixOS, Niri, Noctalia](https://the-nnn-stack.github.io) - Insight into a lightweight stack built with NixOS, Niri, and Noctalia.

## Space and Scientific Breakthroughs

* [Blue Origin Rocket Exploded Thursday Night During Hot-Fire Test](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Blue Origin faces a challenge after a rocket explosion during testing.

* [NASA Details Its Plan to Build a Lunar Base At the Moon's South Pole](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The roadmap for NASA's ambitious lunar base plans at the Moon's south pole.

* [MIT Researchers Develop a Low-Cost Technique To Get Lithium Out of Rocks](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A revolutionary approach to extracting lithium from rocks revealed by MIT scientists.

## Employment and Regulation Shifts

* [The California state assembly has passed the 'Protect Our Games Act'](https://www.invenglobal.com/articles/22330/stop-killing-games-movement-gains-momentum-california-assembly-passes-game-protection-bill) - The gaming industry sees legislative support with measures aimed at protecting iconic games.

* [Supreme Court Lets Vermont's Meta Lawsuit Proceed, Opening Door To 50-State Legal Wave](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Vermont's litigation against Meta advances, potentially leading to nationwide legal action.

## Societal Impacts of Technology

* [Shift will clean homes for free to train future robots](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning) - Startup Shift provides free home cleaning services to gather data for training AI cleaning robots.

* [Citing 'severe' math deficits, UC faculty demand a return to SAT tests for STEM](https://www.latimes.com/california/story/2026-05-27/uc-math-professors-demand-return-of-sat-for-stem-admissions) - UC faculty advocate for reinstating SAT tests to address math readiness concerns among STEM students.

## Tributes and Historical Flashbacks

* [RIP: Marcia Lucas, Oscar-Winning Star Wars Editor, Dies At 80](https://entertainment.slashdot.org/story/26/05/30/0246210/rip-marcia-lucas-oscar-winning-star-wars-editor-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Remembering Marcia Lucas, an Academy Award-winning editor behind the original Star Wars trilogy.

* [Letter from the Duke of Wellington to the British Foreign Office (1809)](https://wellsoc.org/society-member-pages/anecdotes-of-wellington/) - A fascinating historical document revealing the Duke of Wellington's correspondence in 1809.

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

* [2026-05-30, 03:30:00](https://entertainment.slashdot.org/story/26/05/30/0246210/rip-marcia-lucas-oscar-winning-star-wars-editor-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RIP: Marcia Lucas, Oscar-Winning Star Wars Editor, Dies At 80](https://entertainment.slashdot.org/story/26/05/30/0246210/rip-marcia-lucas-oscar-winning-star-wars-editor-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss)
* [2026-05-29, 23:54:22](https://news.ycombinator.com/item?id=48330882) - [What Is a Dickover?](https://daringfireball.net/2026/05/what_is_a_dickover)
* [2026-05-29, 23:34:00](https://slashdot.org/story/26/05/29/2033206/dell-stock-surges-32-in-one-day-big-revenue-from-ai-servers-stuns-analysts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Stock Surges 32% in One Day. Big Revenue From AI Servers Stuns Analysts](https://slashdot.org/story/26/05/29/2033206/dell-stock-surges-32-in-one-day-big-revenue-from-ai-servers-stuns-analysts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 22:56:49](https://news.ycombinator.com/item?id=48330436) - [MCP is dead?](https://www.quandri.io/engineering-blog/mcp-is-dead)
* [2026-05-29, 22:36:00](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss) - [Chinese GPU Maker Sells Out Over 30,000 Gaming GPUs Within 48 Hours Despite Lukewarm Benchmarks](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss)
* [2026-05-29, 22:32:29](https://news.ycombinator.com/item?id=48330192) - [Show HN: Open-source private home security camera system (end-to-end encryption)](https://github.com/secluso/core)
* [2026-05-29, 22:21:58](https://news.ycombinator.com/item?id=48330088) - [Free full BGP feed. IPv4 and IPv6](https://lukasz.bromirski.net/post/bgp-w-labie-3/)
* [2026-05-29, 20:54:43](https://lobste.rs/s/vyi4gp/ev_stupidity_checklist) - [EV Stupidity Checklist](http://hypercritical.co/2026/05/29/ev-stupidity-checklist)
* [2026-05-29, 20:00:00](https://slashdot.org/story/26/05/28/2113232/wix-is-the-latest-to-cut-20-of-jobs-while-citing-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wix Is the Latest To Cut 20% of Jobs While Citing AI](https://slashdot.org/story/26/05/28/2113232/wix-is-the-latest-to-cut-20-of-jobs-while-citing-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 19:58:56](https://news.ycombinator.com/item?id=48328405) - [The Last Technical Interview](https://steve-yegge.medium.com/the-last-technical-interview-bc13ddcf4564)
* [2026-05-29, 19:55:56](https://news.ycombinator.com/item?id=48328365) - [The California state assembly has passed the &apos;Protect Our Games Act&apos;](https://www.invenglobal.com/articles/22330/stop-killing-games-movement-gains-momentum-california-assembly-passes-game-protection-bill)
* [2026-05-29, 19:38:27](https://news.ycombinator.com/item?id=48328184) - [Show HN: Tiny-vLLM – high performance LLM inference engine in C++ and CUDA](https://github.com/jmaczan/tiny-vllm)
* [2026-05-29, 19:37:41](https://news.ycombinator.com/item?id=48328175) - [Microsoft 0-day feud escalates as researcher threatens another exploit dump](https://www.theregister.com/security/2026/05/28/microsoft-0-day-feud-escalates-as-researcher-threatens-another-windows-exploit-dump/5248085)
* [2026-05-29, 19:16:32](https://news.ycombinator.com/item?id=48327962) - [Shift will clean homes for free to train future robots](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning)
* [2026-05-29, 19:04:54](https://news.ycombinator.com/item?id=48327809) - [On Rendering Diffs](https://pierre.computer/writing/on-rendering-diffs)
* [2026-05-29, 18:52:09](https://lobste.rs/s/lwnweu/it_happened_casey_muratori_s_comment_on) - [\&quot;But it happened.\&quot; - Casey Muratori&apos;s comment on Eric Schmidt&apos;s commencement speech](https://youtu.be/tlQ7EoJDTQY)
* [2026-05-29, 18:31:52](https://news.ycombinator.com/item?id=48327367) - [Rothko for your current weather conditions](https://rothko.joonas.wtf/)
* [2026-05-29, 18:28:00](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Rocket Exploded Thursday Night During Hot-Fire Test](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 17:54:50](https://news.ycombinator.com/item?id=48326802) - [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/)
* [2026-05-29, 17:53:00](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss) - [(Next Step in the) NASA Moon Base Revealed](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss)
* [2026-05-29, 17:51:55](https://lobste.rs/s/xvdvko/cve_2026_48710_maintainer_s_perspective) - [CVE-2026-48710: A Maintainer&apos;s Perspective](https://marcelotryle.com/blog/2026/05/28/cve-2026-48710-a-maintainers-perspective/)
* [2026-05-29, 17:39:49](https://news.ycombinator.com/item?id=48326561) - [Letter from the Duke of Wellington to the British Foreign Office (1809)](https://wellsoc.org/society-member-pages/anecdotes-of-wellington/)
* [2026-05-29, 17:27:07](https://lobste.rs/s/swa6iv/go_language_server_can_do_some_impressive) - [The Go language server can do some impressive code navigation](https://utcc.utoronto.ca/~cks/space/blog/programming/GoLSPImpressiveCodeNavigation)
* [2026-05-29, 16:59:42](https://lobste.rs/s/2cjb1z/why_i_am_against_genai_everything_it) - [Why I am against GenAI and everything it stands for](https://lpcvoid.com/blog/0018_why_i_am_against_genai/index.html)
* [2026-05-29, 16:39:09](https://news.ycombinator.com/item?id=48325624) - [Show HN: TV Explorer. Adding advanced UI to free online TV](https://tvexplorer.live)
* [2026-05-29, 16:31:14](https://lobste.rs/s/axg3ga/i_am_retiring_from_tech_live_offline) - [I Am Retiring from Tech to Live Offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)
* [2026-05-29, 16:22:01](https://news.ycombinator.com/item?id=48325340) - [Notes from the Mistral AI Now Summit](https://koenvangilst.nl/lab/mistral-ai-now-summit)
* [2026-05-29, 16:19:54](https://news.ycombinator.com/item?id=48325306) - [Liquid AI reveals 8B-A1B MoE trained on 38T](https://www.liquid.ai/blog/lfm2-5-8b-a1b)
* [2026-05-29, 15:57:37](https://news.ycombinator.com/item?id=48324910) - [CAPTCHAs can still detect AI agents](https://research.roundtable.ai/captchas-detect-ai/)
* [2026-05-29, 15:54:28](https://news.ycombinator.com/item?id=48324853) - [You can just say it](https://noperator.dev/posts/you-can-just-say-it/)
* [2026-05-29, 15:46:24](https://news.ycombinator.com/item?id=48324712) - [The dead economy theory](https://www.owenmcgrann.com/p/the-dead-economy-theory)
* [2026-05-29, 15:32:55](https://news.ycombinator.com/item?id=48324499) - [GTA 6 Developers Unionize](https://rockstarintel.com/gta-6-developers-announce-rockstar-games-union/)
* [2026-05-29, 15:29:40](https://lobste.rs/s/vdojf3/nnn_stack_nixos_niri_noctalia) - [NNN Stack: NixOS, Niri, Noctalia](https://the-nnn-stack.github.io)
* [2026-05-29, 15:03:32](https://news.ycombinator.com/item?id=48323992) - [Bijou64: A variable-length integer encoding](https://www.inkandswitch.com/tangents/bijou64/)
* [2026-05-29, 15:02:24](https://lobste.rs/s/40broz/bijou64_variable_length_integer) - [bijou64: A variable-length integer encoding](https://www.inkandswitch.com/tangents/bijou64/)
* [2026-05-29, 15:00:00](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Lets Vermont&apos;s Meta Lawsuit Proceed, Opening Door To 50-State Legal Wave](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 14:55:31](https://news.ycombinator.com/item?id=48323869) - [It&apos;s hard to justify buying a Framework 12](https://www.jeffgeerling.com/blog/2026/its-hard-to-justify-framework-12/)
* [2026-05-29, 14:47:14](https://lobste.rs/s/yszuka/emacs_bra_size_calculator) - [Emacs bra size calculator](https://pulusound.fi/blog/emacs-bra-size-calculator)
* [2026-05-29, 14:09:19](https://lobste.rs/s/qxzf2k/racket_v9_2) - [Racket v9.2](https://blog.racket-lang.org/2026/05/racket-v9-2.html)
* [2026-05-29, 13:11:00](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss) - [The Boring Internet - the Internet You Grew Up on Isn&apos;t Dying](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss)
* [2026-05-29, 12:56:23](https://lobste.rs/s/l4qeud/flathub_disallows_llm_based_submissions) - [Flathub disallows LLM-based submissions](https://social.treehouse.systems/@barthalion/116657011366876079)
* [2026-05-29, 12:35:09](https://lobste.rs/s/xhucas/scriba_structured_logging_lisp_with) - [Scriba: Structured logging in Lisp with multiple backends and auto-config (Scheme library)](https://codeberg.org/jjba23/scriba)
* [2026-05-29, 11:09:32](https://news.ycombinator.com/item?id=48321631) - [Is AI causing a repeat of frontend’s lost decade?](https://mastrojs.github.io/blog/2026-05-23-is-AI-causing-a-repeat-of-frontends-lost-decade/)
* [2026-05-29, 11:00:00](https://yro.slashdot.org/story/26/05/28/2053250/fbi-arrests-cia-official-with-40-million-in-gold-bars-in-his-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Arrests CIA Official With $40 Million In Gold Bars In His Home](https://yro.slashdot.org/story/26/05/28/2053250/fbi-arrests-cia-official-with-40-million-in-gold-bars-in-his-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 10:15:46](https://lobste.rs/s/nhppxf/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nhppxf/what_are_you_doing_this_weekend)
* [2026-05-29, 10:03:21](https://lobste.rs/s/l9qosq/avoid_using_cdata_rss) - [Avoid using \&quot;&lt;![CDATA[ ... ]]&gt;\&quot; in RSS](https://waspdev.com/articles/2026-05-11/avoid-using-cdata-in-rss)
* [2026-05-29, 09:18:06](https://lobste.rs/s/7lrk2t/leaving_performance_on_table) - [Leaving performance on the table](https://fzakaria.com/2026/05/23/leaving-performance-on-the-table)
* [2026-05-29, 09:08:12](https://lobste.rs/s/jp3nva/you_probably_don_t_need_yocto_s_fine) - [You probably don&apos;t need Yocto, and that&apos;s fine](https://sigma-star.at/blog/2026/05/you-probably-dont-need-yocto-and-thats-fine/)
* [2026-05-29, 08:29:00](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss) - [HP Now Sponsoring The Linux Vendor Firmware Service / Fwupd](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss)
* [2026-05-29, 07:00:00](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Details Its Plan to Build a Lunar Base At the Moon&apos;s South Pole](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 05:58:06](https://lobste.rs/s/1fkt8w/patching_my_guitar_amp_s_firmware) - [Patching my guitar amp&apos;s firmware](https://mforney.org/blog/2026-05-28-patching-my-guitar-amps-firmware.html)
* [2026-05-29, 05:48:21](https://news.ycombinator.com/item?id=48319524) - [Show HN: Zot – Yet another coding agent harness](https://www.zot.sh)
* [2026-05-29, 05:44:56](https://lobste.rs/s/g9u6b7/how_do_you_version_public_web_apis) - [How do you version public web APIs?](https://lobste.rs/s/g9u6b7/how_do_you_version_public_web_apis)
* [2026-05-29, 05:25:16](https://lobste.rs/s/l6egm2/lunacy_lua_5_1_interpreter_with_lazy_basic) - [Lunacy - Lua 5.1 interpreter with Lazy Basic Block Versioning and JIT](https://redvice.org/2026/lunacy/)
* [2026-05-29, 03:47:00](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss) - [ESA Boss Tires of Being Dragged Around by NASA Mood Swings](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss)
* [2026-05-29, 03:30:00](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Researchers Develop a Low-Cost Technique To Get Lithium Out of Rocks](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 03:25:25](https://lobste.rs/s/lc26ar/sqlite_does_not_accept_agentic_code) - [SQLite Does Not Accept Agentic Code](https://simonwillison.net/2026/May/27/sqlite-agents/)
* [2026-05-29, 00:09:35](https://news.ycombinator.com/item?id=48317294) - [The mysterious Hy3 LLM is topping OpenRouter Model Rankings by a large margin](https://minimaxir.com/2026/05/openrouter-hy3/)
* [2026-05-29, 00:07:10](https://lobste.rs/s/d9n2yd/tail_ci_logs_over_ssh) - [tail CI logs over SSH](https://blog.tangled.org/ssh/)
* [2026-05-28, 23:00:00](https://hardware.slashdot.org/story/26/05/28/2022251/europe-told-to-cool-its-datacenter-boom-before-water-power-run-short?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Told To Cool Its Datacenter Boom Before Water, Power Run Short](https://hardware.slashdot.org/story/26/05/28/2022251/europe-told-to-cool-its-datacenter-boom-before-water-power-run-short?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 22:00:00](https://slashdot.org/story/26/05/28/2013200/anthropic-releases-opus-48-with-new-dynamic-workflow-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Releases Opus 4.8 With New &apos;Dynamic Workflow&apos; Tool](https://slashdot.org/story/26/05/28/2013200/anthropic-releases-opus-48-with-new-dynamic-workflow-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 21:01:28](https://lobste.rs/s/pd8aug/one_year_roto_compiled_scripting) - [One year of Roto, the compiled scripting language for Rust](https://blog.nlnetlabs.nl/one-year-of-roto-the-compiled-scripting-language-for-rust/)
* [2026-05-28, 21:00:00](https://yro.slashdot.org/story/26/05/28/1817215/occupy-wall-street-co-founder-built-an-on-device-ai-for-activists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Occupy Wall Street Co-Founder Built an On-Device AI For Activists](https://yro.slashdot.org/story/26/05/28/1817215/occupy-wall-street-co-founder-built-an-on-device-ai-for-activists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 21:00:00](https://soylentnews.org/article.pl?sid=26/05/26/1729236&amp;from=rss) - [Why Mosquitoes Swarm Your Head: They&apos;re Following Signals, Not Each Other](https://soylentnews.org/article.pl?sid=26/05/26/1729236&amp;from=rss)
* [2026-05-28, 20:00:00](https://yro.slashdot.org/story/26/05/28/186254/trump-loses-more-control-over-ai-regulation-as-illinois-passes-landmark-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Loses More Control Over AI Regulation As Illinois Passes Landmark Law](https://yro.slashdot.org/story/26/05/28/186254/trump-loses-more-control-over-ai-regulation-as-illinois-passes-landmark-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 19:28:08](https://lobste.rs/s/4jgpkn/announcing_rust_1_96_0) - [Announcing Rust 1.96.0](https://blog.rust-lang.org/2026/05/28/Rust-1.96.0/)
* [2026-05-28, 19:00:00](https://news.slashdot.org/story/26/05/28/1713246/valves-steam-deck-sells-out-again-even-after-40-price-increase?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve&apos;s Steam Deck Sells Out Again, Even After 40% Price Increase](https://news.slashdot.org/story/26/05/28/1713246/valves-steam-deck-sells-out-again-even-after-40-price-increase?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 18:17:31](https://lobste.rs/s/brusu8/protestware_for_coding_agents) - [Protestware for coding agents](https://nesbitt.io/2026/05/28/protestware-for-coding-agents.html)
* [2026-05-28, 18:00:00](https://yro.slashdot.org/story/26/05/28/1652241/microsoft-allegedly-leaked-dutch-civil-servants-data-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Allegedly Leaked Dutch Civil Servants&apos; Data To the US](https://yro.slashdot.org/story/26/05/28/1652241/microsoft-allegedly-leaked-dutch-civil-servants-data-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 17:30:47](https://lobste.rs/s/4msjpt/garnix_is_shutting_down) - [Garnix is shutting down](https://discourse.nixos.org/t/garnix-is-shutting-down-not-oc/77895)
* [2026-05-28, 17:00:00](https://linux.slashdot.org/story/26/05/28/1641221/ibm-red-hat-commit-5-billion-to-secure-open-source-supply-chains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM, Red Hat Commit $5 Billion To Secure Open Source Supply Chains](https://linux.slashdot.org/story/26/05/28/1641221/ibm-red-hat-commit-5-billion-to-secure-open-source-supply-chains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 16:16:00](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss) - [California Moves To Exempt Linux From Its Upcoming Age-Verification Law After Backlash](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss)
* [2026-05-28, 14:13:00](https://news.ycombinator.com/item?id=48309233) - [Citing &apos;severe&apos; math deficits, UC faculty demand a return to SAT tests for STEM](https://www.latimes.com/california/story/2026-05-27/uc-math-professors-demand-return-of-sat-for-stem-admissions)
* [2026-05-28, 11:34:00](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss) - [Researchers Issue Warning About using WiFi Routers as Surveillance Tech](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss)
* [2026-05-28, 06:53:00](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss) - [5 Ways Pope Leo Says AI Could Warp Humanity](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss)
* [2026-05-28, 02:03:00](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss) - [Power Prices to Fall for Most Customers, With Bigger Drops for Businesses](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss)
* [2026-05-28, 01:10:39](https://news.ycombinator.com/item?id=48302997) - [Finding Miscompiles for Fun, Not Profit](https://newsletter.semianalysis.com/p/finding-miscompiles-for-fun-not-profit)
* [2026-05-27, 21:19:00](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss) - [Nature Might Have a Universal Rhythm](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss)
* [2026-05-27, 16:42:04](https://news.ycombinator.com/item?id=48296834) - [What Did the Hudson River School Painters See?](https://www.nytimes.com/2026/05/25/travel/hudson-valley-painting-thomas-cole-frederic-church.html)
* [2026-05-27, 16:35:00](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss) - [In Addition to Space Stations, Vast Says It Will Now Build High-Power Satellites](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss)
* [2026-05-27, 11:52:00](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss) - [With &apos;The Mandalorian and Grogu&apos; Out, Can &apos;Star Wars&apos; Ever Feel Like a Big-Screen Event Again?](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss)
* [2026-05-27, 07:05:00](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss) - [Google Antigravity 2.0 Forced Update Strips Code Editor, Leaves Developers With a Chat Window](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss)
* [2026-05-27, 02:24:00](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss) - [AI Sackings Reach New Zealand, Which Will Use It to Eject 14 Percent of Government Staff](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss)
* [2026-05-26, 21:38:00](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss) - [After Decades on Linux, FreeBSD Finally Gave Me a Reason to Switch Operating Systems](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss)
* [2026-05-26, 19:12:59](https://news.ycombinator.com/item?id=48284494) - [Snowboard Kids 2 is 100% Decompiled](https://blog.chrislewis.au/snowboard-kids-2-is-100-decompiled/)
* [2026-05-26, 18:05:42](https://news.ycombinator.com/item?id=48283410) - [Print with dozens of colors: Our new open-source ColorMix for PrusaSlicer](https://blog.prusa3d.com/our-new-open-source-colormix-model-in-prusaslicer-and-easyprint_136079/)
* [2026-05-26, 16:54:00](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss) - [FBI Seeks US-Wide Access to License Plate Cameras, Wants \&quot;Data in Near Real Time\&quot;](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss)
* [2026-05-26, 12:07:00](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss)
* [2026-05-26, 07:23:00](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss) - [EU Taps Sweden&apos;s EQT to Manage Major €5Bn Scale-Up Europe Fund](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss)
* [2026-05-26, 02:39:00](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss) - [The Coolest Record Player Ever Made](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss)
