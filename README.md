# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/) - OpenAI introduces GPT-5.3 Codex Spark, marking a key milestone in AI-driven coding and problem-solving.

* [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/) - Explore the surprising story of a rogue AI agent targeting an individual with misinformation.

* [The "Are You Sure?" Problem: Why Your AI Keeps Changing Its Mind](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A dive into the challenges of AI decision-making inconsistency.

* [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/) - An in-depth examination of recursive language models in AI innovation.

## Technology and Software Development

* [Launching Interop 2026](https://hacks.mozilla.org/2026/02/launching-interop-2026/) - Mozilla launches Interop 2026, focusing on web standards compatibility across browsers.

* [Workledger - An offline first engineering notebook](https://about.workledger.org/) - Introducing a tool designed for engineers to work offline efficiently.

* [Technical "whitepaper" for afl-fuzz](https://lcamtuf.coredump.cx/afl/technical_details.txt) - Explore the technical intricacies of afl-fuzz, a popular fuzz testing tool for software security.

* [Run Pebble OS in Browser via WASM](https://ericmigi.github.io/pebble-qemu-wasm/) - A new project enables running Pebble OS in a browser using WebAssembly.

## Cybersecurity and Privacy

* [Palo Alto Chose Not To Tie China To Hacking Campaign For Fear of Retaliation From Beijing](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Palo Alto's security dilemma reveals concerns about geopolitical conflicts.

* [Apple patches decade-old iOS zero-day, possibly exploited by commercial spyware](https://www.theregister.com/2026/02/12/apple_ios_263/) - Apple addresses a decade-old vulnerability amid spyware threats.

* [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - Microsoft issues a critical update amidst active exploitation by hackers.

## Scientific and Environmental Advances

* [So many trees planted in Taklamakan Desert that it's turned into a carbon sink](https://www.livescience.com/planet-earth/plants/china-has-planted-so-many-trees-around-the-taklamakan-desert-that-its-turned-this-biological-void-into-a-carbon-sink) - China's initiative transforms a desert into an environmental asset.

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - A revolutionary microscope uncovers hidden properties of superconductors.

* [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - Scientific evidence from hair samples validates the positive impact of leaded gas bans.

## Open Source and Developer Tools

* [Show HN: Pgclaw – A "Clawdbot" in every row with 400 lines of Postgres SQL](https://github.com/calebwin/pgclaw) - An impressive project embedding functionality within SQL microservices.

* [Inspecting the Source of Go Modules](https://words.filippo.io/go-source/) - Techniques for delving into Go module source code.

## Interesting Cultural and Historical Explorations

* [A brief history of barbed wire fence telephone networks (2024)](https://loriemerson.net/2024/08/31/a-brief-history-of-barbed-wire-fence-telephone-networks/) - Unearth the fascinating history of DIY communication networks.

* [Terry Pratchett's Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - Analyzing Terry Pratchett's work for early signs of his illness.

## Emerging Trends and Innovations

* [MiniMax M2.5 released: 80.2% in SWE-bench Verified](https://www.minimax.io/news/minimax-m25) - The latest MiniMax release showcases major advancements in SWE-bench performance.

* [Run Claude Code and Codex from anywhere](https://news.ycombinator.com/item?id=46991591) - A tool offers seamless multi-code AI integration for improved workflow.

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

* [2026-02-12, 19:28:54](https://lobste.rs/s/zsufmx/launching_interop_2026) - [Launching Interop 2026](https://hacks.mozilla.org/2026/02/launching-interop-2026/)
* [2026-02-12, 19:15:47](https://news.ycombinator.com/item?id=46993596) - [Show HN: rari, the rust-powered react framework](https://rari.build/)
* [2026-02-12, 19:10:00](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palo Alto Chose Not To Tie China To Hacking Campaign For Fear of Retaliation From Beijing](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 19:03:27](https://news.ycombinator.com/item?id=46993417) - [A party balloon shut down El Paso International Airport; estimated cost –$573k](https://log.jasongodfrey.info/questions/The-Most-Expensive-Party-Balloon-in-History)
* [2026-02-12, 19:01:37](https://news.ycombinator.com/item?id=46993393) - [HDRify: True HDR image viewer, and tool set in pure JavaScript](https://hdrify.benhouston3d.com/?image=%2Fexamples%2Fmoonless_golf_1k.hdr)
* [2026-02-12, 18:52:26](https://lobste.rs/s/lel7zt/allocators_from_c_zig) - [Allocators from C to Zig](https://antonz.org/allocators/)
* [2026-02-12, 18:23:20](https://news.ycombinator.com/item?id=46992815) - [Polis: Open-source platform to find common ground at scale](https://pol.is/home2)
* [2026-02-12, 18:18:40](https://lobste.rs/s/qtxw92/workledger_offline_first_engineering) - [Workledger - An offline first  engineering notebook](https://about.workledger.org/)
* [2026-02-12, 18:10:00](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans Smartphone-Style Permission Prompts for Windows 11 Apps](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 18:06:09](https://news.ycombinator.com/item?id=46992553) - [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
* [2026-02-12, 17:42:48](https://news.ycombinator.com/item?id=46992136) - [Show HN: Pgclaw – A \&quot;Clawdbot\&quot; in every row with 400 lines of Postgres SQL](https://github.com/calebwin/pgclaw)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 17:14:28](https://news.ycombinator.com/item?id=46991591) - [Launch HN: Omnara (YC S25) – Run Claude Code and Codex from anywhere](https://news.ycombinator.com/item?id=46991591)
* [2026-02-12, 17:12:00](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Border Officials Are Said To Have Caused El Paso Closure by Firing Anti-Drone Laser](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 17:05:36](https://news.ycombinator.com/item?id=46991435) - [Shut Up: Comment Blocker](https://rickyromero.com/shutup/)
* [2026-02-12, 17:03:30](https://news.ycombinator.com/item?id=46991394) - [ai;dr](https://www.0xsid.com/blog/aidr)
* [2026-02-12, 16:55:50](https://news.ycombinator.com/item?id=46991240) - [Gemini 3 Deep Think](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/)
* [2026-02-12, 16:51:37](https://news.ycombinator.com/item?id=46991154) - [MiniMax M2.5 released: 80.2% in SWE-bench Verified](https://www.minimax.io/news/minimax-m25)
* [2026-02-12, 16:43:42](https://lobste.rs/s/vxkq0z/stargazing_buddy_practical_guide) - [Stargazing Buddy: A practical guide to observing the night sky for real skies and real equipment](https://stargazingbuddy.com/)
* [2026-02-12, 16:32:55](https://news.ycombinator.com/item?id=46990855) - [So many trees planted in Taklamakan Desert that it&apos;s turned into a carbon sink](https://www.livescience.com/planet-earth/plants/china-has-planted-so-many-trees-around-the-taklamakan-desert-that-its-turned-this-biological-void-into-a-carbon-sink)
* [2026-02-12, 16:23:37](https://news.ycombinator.com/item?id=46990733) - [Show HN: 20+ Claude Code agents coordinating on real work (open source)](https://github.com/mutable-state-inc/lean-collab)
* [2026-02-12, 16:23:24](https://news.ycombinator.com/item?id=46990729) - [An AI agent published a hit piece on me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 16:12:39](https://lobste.rs/s/fna9yv/request_for_sources_discord) - [Request for sources: Discord alternatives](https://lobste.rs/s/fna9yv/request_for_sources_discord)
* [2026-02-12, 16:10:29](https://news.ycombinator.com/item?id=46990578) - [Beginning autonomous operations with the 6th-generation Waymo Driver](https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver)
* [2026-02-12, 16:00:00](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Engineers Want Claude Code, but the Company Keeps Pushing Its Own Tool](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 15:16:00](https://lobste.rs/s/i0xmbk/inspecting_source_go_modules) - [Inspecting the Source of Go Modules](https://words.filippo.io/go-source/)
* [2026-02-12, 15:03:00](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The \&quot;Are You Sure?\&quot; Problem: Why Your AI Keeps Changing Its Mind](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 15:00:05](https://lobste.rs/s/0fjf0h/technical_whitepaper_for_afl_fuzz) - [Technical \&quot;whitepaper\&quot; for afl-fuzz](https://lcamtuf.coredump.cx/afl/technical_details.txt)
* [2026-02-12, 14:56:18](https://news.ycombinator.com/item?id=46989605) - [A brief history of barbed wire fence telephone networks (2024)](https://loriemerson.net/2024/08/31/a-brief-history-of-barbed-wire-fence-telephone-networks/)
* [2026-02-12, 14:43:25](https://lobste.rs/s/jagwef/css_clicker) - [CSS Clicker](https://lyra.horse/css-clicker/)
* [2026-02-12, 14:24:15](https://news.ycombinator.com/item?id=46989217) - [Major European payment processor can&apos;t send email to Google Workspace users](https://atha.io/blog/2026-02-12-viva)
* [2026-02-12, 14:17:37](https://news.ycombinator.com/item?id=46989124) - [Culture Is the Mass-Synchronization of Framings](https://aethermug.com/posts/culture-is-the-mass-synchronization-of-framings)
* [2026-02-12, 14:17:06](https://news.ycombinator.com/item?id=46989117) - [The Future for Tyr, a Rust GPU Driver for Arm Mali Hardware](https://lwn.net/Articles/1055590/)
* [2026-02-12, 14:16:10](https://news.ycombinator.com/item?id=46989107) - [Apple patches decade-old iOS zero-day, possibly exploited by commercial spyware](https://www.theregister.com/2026/02/12/apple_ios_263/)
* [2026-02-12, 14:15:20](https://lobste.rs/s/lzn4pr/future_for_tyr_rust_gpu_driver_for_arm_mali) - [The future for Tyr, a Rust GPU driver for Arm Mali hardware](https://lwn.net/Articles/1055590/)
* [2026-02-12, 14:00:00](https://slashdot.org/story/26/02/12/1251249/anthropic-to-cover-costs-of-electricity-price-increases-from-its-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic To Cover Costs of Electricity Price Increases From Its Data Centers](https://slashdot.org/story/26/02/12/1251249/anthropic-to-cover-costs-of-electricity-price-increases-from-its-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 13:55:50](https://lobste.rs/s/vyvtz5/commet_matrix_client) - [Commet - Matrix Client](https://commet.chat/)
* [2026-02-12, 13:30:20](https://news.ycombinator.com/item?id=46988596) - [Improving 15 LLMs at Coding in One Afternoon. Only the Harness Changed](http://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-12, 13:16:11](https://news.ycombinator.com/item?id=46988462) - [Run Pebble OS in Browser via WASM](https://ericmigi.github.io/pebble-qemu-wasm/)
* [2026-02-12, 13:13:30](https://news.ycombinator.com/item?id=46988438) - [Apache Arrow is 10 years old](https://arrow.apache.org/blog/2026/02/12/arrow-anniversary/)
* [2026-02-12, 12:23:05](https://news.ycombinator.com/item?id=46987919) - [The \&quot;Crown of Nobles\&quot; Noble Gas Tube Display (2024)](https://theshamblog.com/the-crown-of-nobles-noble-gas-tube-display/)
* [2026-02-12, 12:10:37](https://lobste.rs/s/s5xudm/recursive_language_models) - [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/)
* [2026-02-12, 12:00:00](https://tech.slashdot.org/story/26/02/12/121243/meta-auditor-ey-raised-red-flag-on-data-center-accounting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Auditor EY Raised Red Flag on Data-Center Accounting](https://tech.slashdot.org/story/26/02/12/121243/meta-auditor-ey-raised-red-flag-on-data-center-accounting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 11:07:57](https://lobste.rs/s/rhdobh/proposal_js_required_tag) - [Proposal: JS-required tag](https://lobste.rs/s/rhdobh/proposal_js_required_tag)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 10:27:50](https://news.ycombinator.com/item?id=46987038) - [Show HN: Geo Racers – Race from London to Tokyo on a single bus pass](https://geo-racers.com/)
* [2026-02-12, 09:00:00](https://news.slashdot.org/story/26/02/12/0615244/us-hacking-tool-boss-stole-and-sold-exploits-to-russian-broker-that-could-target-millions-of-devices-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Hacking Tool Boss Stole and Sold Exploits To Russian Broker That Could Target Millions of Devices, DOJ Says](https://news.slashdot.org/story/26/02/12/0615244/us-hacking-tool-boss-stole-and-sold-exploits-to-russian-broker-that-could-target-millions-of-devices-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 06:00:00](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Siri&apos;s AI Overhaul Delayed Again](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 05:18:49](https://news.ycombinator.com/item?id=46985151) - [Warcraft III Peon Voice Notifications for Claude Code](https://github.com/tonyyont/peon-ping)
* [2026-02-12, 04:22:26](https://lobste.rs/s/dixmkp/proof_oriented_programming_f) - [Proof-oriented Programming in F*](https://fstar-lang.org/tutorial)
* [2026-02-12, 03:56:26](https://news.ycombinator.com/item?id=46984735) - [How to make a living as an artist](https://essays.fnnch.com/make-a-living)
* [2026-02-12, 03:44:00](https://slashdot.org/story/26/02/11/1849224/anthropic-safety-researcher-quits-warning-world-is-in-peril?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Safety Researcher Quits, Warning &apos;World is in Peril&apos;](https://slashdot.org/story/26/02/11/1849224/anthropic-safety-researcher-quits-warning-world-is-in-peril?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 01:45:00](https://yro.slashdot.org/story/26/02/11/1844232/with-ring-american-consumers-built-a-surveillance-dragnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [With Ring, American Consumers Built a Surveillance Dragnet](https://yro.slashdot.org/story/26/02/11/1844232/with-ring-american-consumers-built-a-surveillance-dragnet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 22:45:00](https://linux.slashdot.org/story/26/02/11/1821222/is-linux-mint-burning-out-developers-consider-longer-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Linux Mint Burning Out? Developers Consider Longer Release Cycle](https://linux.slashdot.org/story/26/02/11/1821222/is-linux-mint-burning-out-developers-consider-longer-release-cycle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 22:37:08](https://lobste.rs/s/dunvco/new_upcoming_ircv3_features) - [New And Upcoming IRCv3 Features](https://libera.chat/news/new-and-upcoming-features-3)
* [2026-02-11, 21:54:31](https://lobste.rs/s/vrrdhz/do_not_apologize_for_replying_late_my) - [Do not apologize for replying late to my email](https://ploum.net/2026-02-11-do_not_apologize_for_replying_to_my_email.html)
* [2026-02-11, 21:50:23](https://lobste.rs/s/vbob0l/reports_telnet_s_death_have_been_greatly) - [Reports of Telnet’s Death Have Been Greatly Exaggerated](https://www.terracenetworks.com/blog/2026-02-11-telnet-routing)
* [2026-02-11, 21:00:00](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Hellish &apos;Hothouse Earth&apos; Getting Closer, Scientists Say](https://news.slashdot.org/story/26/02/11/1814253/a-hellish-hothouse-earth-getting-closer-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 20:01:00](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Had Almost No Job Growth in 2025](https://news.slashdot.org/story/26/02/11/1754240/us-had-almost-no-job-growth-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 19:04:31](https://lobste.rs/s/jljsx4/programming_aphorisms) - [Programming Aphorisms](https://matklad.github.io/2026/02/11/programming-aphorisms.html)
* [2026-02-11, 19:00:00](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EVs Could Be Cheaper To Own Than Gas Cars in Africa by 2040](https://tech.slashdot.org/story/26/02/11/176205/evs-could-be-cheaper-to-own-than-gas-cars-in-africa-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-11, 18:45:50](https://lobste.rs/s/befswy/it_s_all_blur) - [It&apos;s all a blur](https://lcamtuf.substack.com/p/its-all-a-blur)
* [2026-02-11, 18:42:38](https://lobste.rs/s/jkqgrt/majutsu_magit_for_jujutsu) - [Majutsu, Magit for jujutsu](https://github.com/0WD0/majutsu)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 12:43:26](https://lobste.rs/s/xhfkrz/webmentions_with_batteries_included) - [Webmentions with batteries included](https://blog.fabiomanganiello.com/article/webmentions-with-batteries-included)
* [2026-02-11, 12:09:23](https://lobste.rs/s/kp7jlq/windows_notepad_app_remote_code) - [Windows Notepad App Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-20841)
* [2026-02-11, 11:57:10](https://lobste.rs/s/tqttgj/forwardly_evaluated_build_systems) - [Forwardly-evaluated build systems](https://garnix.io/blog/garn2/)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 19:23:09](https://lobste.rs/s/00edzp/missing_github_status_page) - [The Missing GitHub Status Page](https://mrshu.github.io/github-statuses/)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 15:09:47](https://lobste.rs/s/ogr30w/how_i_cut_my_google_search_dependence_half) - [How I Cut My Google Search Dependence in Half](https://hister.org/posts/how-i-cut-my-google-search-dependence-in-half/)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 17:44:32](https://news.ycombinator.com/item?id=46948278) - [I Wrote a Scheme in 2025](https://maplant.com/2026-02-09-I-Wrote-a-Scheme-in-2025.html)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 08:03:02](https://news.ycombinator.com/item?id=46942785) - [1D Cellular Automata Playground](https://paraschopra.github.io/1d-ca/)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 16:37:56](https://news.ycombinator.com/item?id=46935896) - [Fast Properties in V8 (2017)](https://v8.dev/blog/fast-properties)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
