# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Developments

* [Show HN: Tiny-vLLM – high performance LLM inference engine in C++ and CUDA](https://github.com/jmaczan/tiny-vllm) ([Comments](https://news.ycombinator.com/item?id=48328184))

* [CVE-Bench: testing LLM agents on real-world vulnerability patches](https://giovannigatti.github.io/cve-bench/) ([Comments](https://news.ycombinator.com/item?id=48328088))

* [Shift will clean homes for free to train future robots](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning) ([Comments](https://news.ycombinator.com/item?id=48327962))

* [Notes from the Mistral AI Now Summit in Paris](https://koenvangilst.nl/lab/mistral-ai-now-summit) ([Comments](https://news.ycombinator.com/item?id=48325340))

* [AI will be used to estimate age of asylum seekers from next year](https://www.bbc.co.uk/news/articles/ce3pe36qe7ro) ([Comments](https://news.ycombinator.com/item?id=48327222))

## Software and Developer Tools

* [Bijou64: A variable-length integer encoding](https://www.inkandswitch.com/tangents/bijou64/) ([Comments](https://news.ycombinator.com/item?id=48323992))

* [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/) ([Comments](https://news.ycombinator.com/item?id=48326802))

* [Local Git remotes](https://cblgh.org/posts/local-git-remotes/) ([Comments](https://news.ycombinator.com/item?id=48322389))

* [Scriba: Structured logging in Lisp with multiple backends and auto-config (Scheme library)](https://codeberg.org/jjba23/scriba) ([Comments](https://lobste.rs/s/xhucas/scriba_structured_logging_lisp_with))

## Space Exploration and Science

* [Blue Origin Rocket Exploded Thursday Night During Hot-Fire Test](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48327367))

* [NASA Details Its Plan to Build a Lunar Base At the Moon's South Pole](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://soylentnews.org/article.pl?sid=26/05/28/2046259&amp;from=rss))

* [MIT Researchers Develop a Low-Cost Technique To Get Lithium Out of Rocks](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://soylentnews.org/article.pl?sid=26/05/28/2039244&amp;from=rss))

## Technology Industry and Policy

* [Supreme Court Lets Vermont's Meta Lawsuit Proceed, Opening Door To 50-State Legal Wave](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48322030))

* [Robinhood now lets your AI agents trade stocks](https://techcrunch.com/2026/05/27/robinhood-now-lets-your-ai-agents-trade-stocks/) ([Comments](https://news.ycombinator.com/item?id=48326659))

* [China Says 'World's First' Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss))

## Cultural and Lifestyle Shifts

* [I Am Retiring from Tech to Live Offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/) ([Comments](https://lobste.rs/s/axg3ga/i_am_retiring_from_tech_live_offline))

* [The Dead Economy Theory](https://www.owenmcgrann.com/p/the-dead-economy-theory) ([Comments](https://news.ycombinator.com/item?id=48324712))

* [GTA 6 Developers Unionize](https://rockstarintel.com/gta-6-developers-announce-rockstar-games-union/) ([Comments](https://news.ycombinator.com/item?id=48324499))

* [The Secret Garden of Rock-Paper-Scissors](https://theshamblog.com/the-secret-garden-of-rock-paper-scissors/) ([Comments](https://news.ycombinator.com/item?id=48323266))

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

* [2026-05-29, 19:38:27](https://news.ycombinator.com/item?id=48328184) - [Show HN: Tiny-vLLM – high performance LLM inference engine in C++ and CUDA](https://github.com/jmaczan/tiny-vllm)
* [2026-05-29, 19:28:55](https://news.ycombinator.com/item?id=48328088) - [CVE-Bench: testing LLM agents on real-world vulnerability patches](https://giovannigatti.github.io/cve-bench/)
* [2026-05-29, 19:16:32](https://news.ycombinator.com/item?id=48327962) - [Shift will clean homes for free to train future robots](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning)
* [2026-05-29, 19:04:54](https://news.ycombinator.com/item?id=48327809) - [On Rendering Diffs](https://pierre.computer/writing/on-rendering-diffs)
* [2026-05-29, 18:31:52](https://news.ycombinator.com/item?id=48327367) - [Rothko for your current weather conditions](https://rothko.joonas.wtf/)
* [2026-05-29, 18:28:00](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Rocket Exploded Thursday Night During Hot-Fire Test](https://science.slashdot.org/story/26/05/29/171202/blue-origin-rocket-exploded-thursday-night-during-hot-fire-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 18:23:03](https://news.ycombinator.com/item?id=48327222) - [AI will be used to estimate age of asylum seekers from next year](https://www.bbc.co.uk/news/articles/ce3pe36qe7ro)
* [2026-05-29, 17:54:50](https://news.ycombinator.com/item?id=48326802) - [SQLite is all you need for durable workflows](https://obeli.sk/blog/sqlite-is-all-you-need-for-durable-workflows/)
* [2026-05-29, 17:53:00](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss) - [(Next Step in the) NASA Moon Base Revealed](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss)
* [2026-05-29, 17:51:55](https://lobste.rs/s/xvdvko/cve_2026_48710_maintainer_s_perspective) - [CVE-2026-48710: A Maintainer&apos;s Perspective](https://marcelotryle.com/blog/2026/05/28/cve-2026-48710-a-maintainers-perspective/)
* [2026-05-29, 17:46:27](https://news.ycombinator.com/item?id=48326659) - [Robinhood now lets your AI agents trade stocks](https://techcrunch.com/2026/05/27/robinhood-now-lets-your-ai-agents-trade-stocks/)
* [2026-05-29, 17:39:49](https://news.ycombinator.com/item?id=48326561) - [Letter from the Duke of Wellington to the British Foreign Office (1809)](https://wellsoc.org/society-member-pages/anecdotes-of-wellington/)
* [2026-05-29, 16:59:42](https://lobste.rs/s/2cjb1z/why_i_am_against_genai_everything_it) - [Why I am against GenAI and everything it stands for](https://lpcvoid.com/blog/0018_why_i_am_against_genai/index.html)
* [2026-05-29, 16:39:09](https://news.ycombinator.com/item?id=48325624) - [Show HN: TV Explorer. Adding advanced UI to free online TV](https://tvexplorer.live)
* [2026-05-29, 16:31:14](https://lobste.rs/s/axg3ga/i_am_retiring_from_tech_live_offline) - [I Am Retiring from Tech to Live Offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)
* [2026-05-29, 16:22:01](https://news.ycombinator.com/item?id=48325340) - [Notes from the Mistral AI Now Summit in Paris](https://koenvangilst.nl/lab/mistral-ai-now-summit)
* [2026-05-29, 16:19:54](https://news.ycombinator.com/item?id=48325306) - [Liquid AI reveals 8B-A1B MoE trained on 38T](https://www.liquid.ai/blog/lfm2-5-8b-a1b)
* [2026-05-29, 15:57:37](https://news.ycombinator.com/item?id=48324910) - [CAPTCHAs can still detect AI agents](https://research.roundtable.ai/captchas-detect-ai/)
* [2026-05-29, 15:46:24](https://news.ycombinator.com/item?id=48324712) - [The dead economy theory](https://www.owenmcgrann.com/p/the-dead-economy-theory)
* [2026-05-29, 15:32:55](https://news.ycombinator.com/item?id=48324499) - [GTA 6 Developers Unionize](https://rockstarintel.com/gta-6-developers-announce-rockstar-games-union/)
* [2026-05-29, 15:03:32](https://news.ycombinator.com/item?id=48323992) - [Bijou64: A variable-length integer encoding](https://www.inkandswitch.com/tangents/bijou64/)
* [2026-05-29, 15:02:24](https://lobste.rs/s/40broz/bijou64_variable_length_integer) - [bijou64: A variable-length integer encoding](https://www.inkandswitch.com/tangents/bijou64/)
* [2026-05-29, 15:00:00](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Lets Vermont&apos;s Meta Lawsuit Proceed, Opening Door To 50-State Legal Wave](https://yro.slashdot.org/story/26/05/28/215245/supreme-court-lets-vermonts-meta-lawsuit-proceed-opening-door-to-50-state-legal-wave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 14:55:31](https://news.ycombinator.com/item?id=48323869) - [It&apos;s hard to justify buying a Framework 12](https://www.jeffgeerling.com/blog/2026/its-hard-to-justify-framework-12/)
* [2026-05-29, 14:47:14](https://lobste.rs/s/yszuka/emacs_bra_size_calculator) - [Emacs bra size calculator](https://pulusound.fi/blog/emacs-bra-size-calculator)
* [2026-05-29, 14:40:47](https://news.ycombinator.com/item?id=48323683) - [I am retiring from tech to live offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)
* [2026-05-29, 14:09:19](https://lobste.rs/s/qxzf2k/racket_v9_2) - [Racket v9.2](https://blog.racket-lang.org/2026/05/racket-v9-2.html)
* [2026-05-29, 14:04:22](https://news.ycombinator.com/item?id=48323266) - [The Secret Garden of Rock-Paper-Scissors](https://theshamblog.com/the-secret-garden-of-rock-paper-scissors/)
* [2026-05-29, 13:35:13](https://news.ycombinator.com/item?id=48322929) - [Expertise in the age of AI](https://www.moderndescartes.com/essays/ai_and_expertise/)
* [2026-05-29, 13:18:57](https://news.ycombinator.com/item?id=48322753) - [Someone used my open source project to phish people](https://andrej.sh/posts/phishing-through-my-open-source-project)
* [2026-05-29, 13:11:00](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss) - [The Boring Internet - the Internet You Grew Up on Isn&apos;t Dying](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss)
* [2026-05-29, 12:56:23](https://lobste.rs/s/l4qeud/flathub_disallows_llm_based_submissions) - [Flathub disallows LLM-based submissions](https://social.treehouse.systems/@barthalion/116657011366876079)
* [2026-05-29, 12:45:02](https://news.ycombinator.com/item?id=48322389) - [Local Git remotes](https://cblgh.org/posts/local-git-remotes/)
* [2026-05-29, 12:35:09](https://lobste.rs/s/xhucas/scriba_structured_logging_lisp_with) - [Scriba: Structured logging in Lisp with multiple backends and auto-config (Scheme library)](https://codeberg.org/jjba23/scriba)
* [2026-05-29, 12:31:59](https://news.ycombinator.com/item?id=48322267) - [Poll: How often do you check \&quot;newest\&quot;?](https://news.ycombinator.com/item?id=48322267)
* [2026-05-29, 12:30:02](https://news.ycombinator.com/item?id=48322241) - [High Density Living, 2000 Years Ago: Inside the Roman Apartment Building](https://commonedge.org/high-density-living-2000-years-ago-inside-the-roman-apartment-building/)
* [2026-05-29, 12:12:16](https://news.ycombinator.com/item?id=48322118) - [We should be more tired than the model](https://vickiboykis.com/2026/05/28/we-should-be-more-tired-than-the-model/)
* [2026-05-29, 12:01:00](https://news.ycombinator.com/item?id=48322030) - [Cedana (YC S23) Is Hiring](https://www.ycombinator.com/companies/cedana/jobs/d1vYocG-forward-deployed-engineer-ai-hpc)
* [2026-05-29, 11:09:32](https://news.ycombinator.com/item?id=48321631) - [Is AI causing a repeat of frontend’s lost decade?](https://mastrojs.github.io/blog/2026-05-23-is-AI-causing-a-repeat-of-frontends-lost-decade/)
* [2026-05-29, 11:00:00](https://yro.slashdot.org/story/26/05/28/2053250/fbi-arrests-cia-official-with-40-million-in-gold-bars-in-his-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Arrests CIA Official With $40 Million In Gold Bars In His Home](https://yro.slashdot.org/story/26/05/28/2053250/fbi-arrests-cia-official-with-40-million-in-gold-bars-in-his-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 10:15:46](https://lobste.rs/s/nhppxf/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nhppxf/what_are_you_doing_this_weekend)
* [2026-05-29, 10:03:21](https://lobste.rs/s/l9qosq/avoid_using_cdata_rss) - [Avoid using \&quot;&lt;![CDATA[ ... ]]&gt;\&quot; in RSS](https://waspdev.com/articles/2026-05-11/avoid-using-cdata-in-rss)
* [2026-05-29, 09:47:23](https://news.ycombinator.com/item?id=48321076) - [Real-time LLM Inference on Standard GPUs: 3k tokens/s per request](https://blog.kog.ai/real-time-llm-inference-on-standard-gpus-3-000-tokens-s-per-request/)
* [2026-05-29, 09:37:25](https://lobste.rs/s/xmio29/what_are_important_data_systems_problems) - [What are important data systems problems, ignored by research? (2024)](http://databasearchitects.blogspot.com/2024/12/what-are-important-data-systems.html)
* [2026-05-29, 09:18:06](https://lobste.rs/s/7lrk2t/leaving_performance_on_table) - [Leaving performance on the table](https://fzakaria.com/2026/05/23/leaving-performance-on-the-table)
* [2026-05-29, 09:08:12](https://lobste.rs/s/jp3nva/you_probably_don_t_need_yocto_s_fine) - [You probably don&apos;t need Yocto, and that&apos;s fine](https://sigma-star.at/blog/2026/05/you-probably-dont-need-yocto-and-thats-fine/)
* [2026-05-29, 08:29:00](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss) - [HP Now Sponsoring The Linux Vendor Firmware Service / Fwupd](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss)
* [2026-05-29, 07:00:00](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Details Its Plan to Build a Lunar Base At the Moon&apos;s South Pole](https://science.slashdot.org/story/26/05/28/2046259/nasa-details-its-plan-to-build-a-lunar-base-at-the-moons-south-pole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 06:55:19](https://lobste.rs/s/uuecsm/replacing_photoshop_with_nsstring_2015) - [Replacing Photoshop With NSString (2015)](http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring)
* [2026-05-29, 05:58:06](https://lobste.rs/s/1fkt8w/patching_my_guitar_amp_s_firmware) - [Patching my guitar amp&apos;s firmware](https://mforney.org/blog/2026-05-28-patching-my-guitar-amps-firmware.html)
* [2026-05-29, 05:44:56](https://lobste.rs/s/g9u6b7/how_do_you_version_public_web_apis) - [How do you version public web APIs?](https://lobste.rs/s/g9u6b7/how_do_you_version_public_web_apis)
* [2026-05-29, 05:25:16](https://lobste.rs/s/l6egm2/lunacy_lua_5_1_interpreter_with_lazy_basic) - [Lunacy - Lua 5.1 interpreter with Lazy Basic Block Versioning and JIT](https://redvice.org/2026/lunacy/)
* [2026-05-29, 03:47:00](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss) - [ESA Boss Tires of Being Dragged Around by NASA Mood Swings](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss)
* [2026-05-29, 03:30:00](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Researchers Develop a Low-Cost Technique To Get Lithium Out of Rocks](https://science.slashdot.org/story/26/05/28/2039244/mit-researchers-develop-a-low-cost-technique-to-get-lithium-out-of-rocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 03:25:25](https://lobste.rs/s/lc26ar/sqlite_does_not_accept_agentic_code) - [SQLite Does Not Accept Agentic Code](https://simonwillison.net/2026/May/27/sqlite-agents/)
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
* [2026-05-28, 16:40:18](https://news.ycombinator.com/item?id=48311485) - [ATLAS: Autoformalized Textbook Library At Scale](https://github.com/facebookresearch/atlas-lean)
* [2026-05-28, 16:16:00](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss) - [California Moves To Exempt Linux From Its Upcoming Age-Verification Law After Backlash](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss)
* [2026-05-28, 16:00:00](https://tech.slashdot.org/story/26/05/28/067216/robinhood-now-lets-your-ai-agents-trade-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Now Lets Your AI Agents Trade Stocks](https://tech.slashdot.org/story/26/05/28/067216/robinhood-now-lets-your-ai-agents-trade-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 15:00:00](https://yro.slashdot.org/story/26/05/28/060223/doj-charges-google-employee-with-12-million-polymarket-bet-on-search-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Charges Google Employee With $1.2 Million Polymarket Bet On Search Term](https://yro.slashdot.org/story/26/05/28/060223/doj-charges-google-employee-with-12-million-polymarket-bet-on-search-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 12:11:03](https://news.ycombinator.com/item?id=48307802) - [Durable execution, the hard way](https://github.com/hatchet-dev/durable-execution-the-hard-way)
* [2026-05-28, 11:34:00](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss) - [Researchers Issue Warning About using WiFi Routers as Surveillance Tech](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss)
* [2026-05-28, 11:00:00](https://entertainment.slashdot.org/story/26/05/28/0552205/lastfm-goes-independent-after-breaking-up-with-paramount-skydance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Last.fm Goes Independent After Breaking Up With Paramount Skydance](https://entertainment.slashdot.org/story/26/05/28/0552205/lastfm-goes-independent-after-breaking-up-with-paramount-skydance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-28, 10:46:28](https://lobste.rs/s/jowjkj/what_s_cooking_on_sourcehut_q2_2026) - [What&apos;s cooking on SourceHut? Q2 2026](https://sourcehut.org/blog/2026-05-28-whats-cooking-q2-2026/)
* [2026-05-28, 09:52:05](https://lobste.rs/s/nx1xwo/why_gentoo) - [Why Gentoo?](https://blogs.gentoo.org/mgorny/2026/05/28/why-gentoo/)
* [2026-05-28, 06:53:00](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss) - [5 Ways Pope Leo Says AI Could Warp Humanity](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss)
* [2026-05-28, 02:03:00](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss) - [Power Prices to Fall for Most Customers, With Bigger Drops for Businesses](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss)
* [2026-05-27, 21:19:00](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss) - [Nature Might Have a Universal Rhythm](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss)
* [2026-05-27, 16:35:00](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss) - [In Addition to Space Stations, Vast Says It Will Now Build High-Power Satellites](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss)
* [2026-05-27, 11:52:00](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss) - [With &apos;The Mandalorian and Grogu&apos; Out, Can &apos;Star Wars&apos; Ever Feel Like a Big-Screen Event Again?](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss)
* [2026-05-27, 07:05:00](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss) - [Google Antigravity 2.0 Forced Update Strips Code Editor, Leaves Developers With a Chat Window](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss)
* [2026-05-27, 02:24:00](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss) - [AI Sackings Reach New Zealand, Which Will Use It to Eject 14 Percent of Government Staff](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss)
* [2026-05-26, 21:38:00](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss) - [After Decades on Linux, FreeBSD Finally Gave Me a Reason to Switch Operating Systems](https://soylentnews.org/article.pl?sid=26/05/25/1522231&amp;from=rss)
* [2026-05-26, 16:54:00](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss) - [FBI Seeks US-Wide Access to License Plate Cameras, Wants \&quot;Data in Near Real Time\&quot;](https://soylentnews.org/article.pl?sid=26/05/25/157204&amp;from=rss)
* [2026-05-26, 12:07:00](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://soylentnews.org/article.pl?sid=26/05/25/150246&amp;from=rss)
* [2026-05-26, 07:23:00](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss) - [EU Taps Sweden&apos;s EQT to Manage Major €5Bn Scale-Up Europe Fund](https://soylentnews.org/article.pl?sid=26/05/25/1437228&amp;from=rss)
* [2026-05-26, 02:39:00](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss) - [The Coolest Record Player Ever Made](https://soylentnews.org/article.pl?sid=26/05/25/1430256&amp;from=rss)
* [2026-05-25, 21:57:00](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss) - [Torvalds Says AI Bug Hunters Have Made Linux Security Mailing List ‘Almost Entirely Unmanageable&apos;](https://soylentnews.org/article.pl?sid=26/05/24/1319237&amp;from=rss)
* [2026-05-25, 17:08:00](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss) - [The Big AI Companies Are Going to See Their Margins Disappear](https://soylentnews.org/article.pl?sid=26/05/24/1316229&amp;from=rss)
* [2026-05-25, 12:18:00](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss) - [Uncle Sam&apos;s Next Big Supercomputer Might Use Something More Exotic Than GPUs](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss)
* [2026-05-25, 07:28:00](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) - [China Says &apos;World&apos;s First&apos; Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss)
* [2026-05-25, 02:46:00](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss) - [Bots be Sorting](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss)
