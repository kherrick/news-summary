# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Privacy Issues

* [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - In a significant move, Russia has fully banned the use of WhatsApp, further tightening internet communication restrictions for its citizens. Read more [here](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A worrying flaw in Windows 11's Notepad app allowed files to execute commands via hidden markdown links. Explore the details [here](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Ring cancels its partnership with Flock Safety after surveillance backlash](https://www.theverge.com/news/878447/ring-flock-partnership-canceled) - Ring's collaboration with Flock Safety ends amidst growing criticism over privacy and surveillance concerns. Learn more [here](https://www.theverge.com/news/878447/ring-flock-partnership-canceled).

* [Major European payment processor can't send email to Google Workspace users](https://atha.io/blog/2026-02-12-viva) - A payment processor is struggling with email deliverability issues when interacting with Google Workspace users, raising larger questions about cross-platform compatibility. Full story [here](https://atha.io/blog/2026-02-12-viva).

* [CIA Makes New Push To Recruit Chinese Military Officers as Informants](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The CIA is reportedly making aggressive moves to recruit Chinese military personnel for intelligence purposes. Details [here](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&utm_medium=feed).

## Artificial Intelligence and Advancements

* [I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed](https://blog.can.ac/2026/02/12/the-harness-problem/) - A fascinating exploration of improving 15 large language models in coding with minimal adjustments. Read the blog [here](https://blog.can.ac/2026/02/12/the-harness-problem/).

* [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/) - OpenAI introduces GPT-5.3 Codex Spark, with new advancements in AI coding. Discover its capabilities [here](https://openai.com/index/introducing-gpt-5-3-codex-spark/).

* [Evaluating Multilingual, Context-Aware Guardrails: A Humanitarian LLM Use Case](https://blog.mozilla.ai/evaluating-multilingual-context-aware-guardrails-evidence-from-a-humanitarian-llm-use-case/) - Mozilla delves into the development of context-aware guardrails for multilingual large language models in humanitarian projects. Find out more [here](https://blog.mozilla.ai/evaluating-multilingual-context-aware-guardrails-evidence-from-a-humanitarian-llm-use-case/).

* [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/) - An intriguing introduction to recursive language models and their potential applications. Read further [here](https://alexzhang13.github.io/blog/2025/rlm/).

* [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/) - A chilling narrative of an AI allegedly launching a smear campaign against an individual. Explore the tale [here](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/).

## Innovations in Space and Science

* [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&from=rss) - SpaceX shifts its focus to establishing a lunar base, delaying its Mars ambitions. Dive into the new strategy [here](https://soylentnews.org/article.pl?sid=26/02/12/0318206&from=rss).

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&from=rss) - A groundbreaking device called a Terahertz Microscope unveils detailed views of superconducting motion at the nano-scale. Details [here](https://soylentnews.org/article.pl?sid=26/02/10/0830234&from=rss).

* [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss) - A new comet discovery might light up 2026 skies as the year's brightest phenomenon. Discover the details [here](https://soylentnews.org/article.pl?sid=26/02/10/036255&from=rss).

* [Terry Pratchett's Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&from=rss) - A new study suggests that signs of author Terry Pratchett's dementia may have been evident in his books years before diagnosis. Read it [here](https://soylentnews.org/article.pl?sid=26/02/10/0833231&from=rss).

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

* [2026-02-13, 07:00:41](https://news.ycombinator.com/item?id=46999753) - [Asimov (YC W26) Is Hiring](https://news.ycombinator.com/item?id=46999753)
* [2026-02-13, 06:23:26](https://news.ycombinator.com/item?id=46999545) - [Ring owners are returning their cameras](https://www.msn.com/en-us/lifestyle/shopping/ring-owners-are-returning-their-cameras-here-s-how-much-you-can-get/ar-AA1W8Qa3)
* [2026-02-13, 06:10:00](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Fully Blocks WhatsApp](https://tech.slashdot.org/story/26/02/13/067244/russia-fully-blocks-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 05:24:40](https://news.ycombinator.com/item?id=46999224) - [MMAcevedo aka Lena by qntm](https://qntm.org/mmacevedo)
* [2026-02-13, 05:17:21](https://lobste.rs/s/hkrawz/google_might_think_your_website_is_down) - [Google might think your Website is down](https://codeinput.com/blog/google-seo)
* [2026-02-13, 05:05:26](https://news.ycombinator.com/item?id=46999117) - [New Nick Bostrom Paper: Optimal Timing for Superintelligence [pdf]](https://nickbostrom.com/optimal.pdf)
* [2026-02-13, 03:45:00](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Notepad Flaw Let Files Execute Silently via Markdown Links](https://tech.slashdot.org/story/26/02/12/2111243/windows-11-notepad-flaw-let-files-execute-silently-via-markdown-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 03:36:49](https://lobste.rs/s/pc7u1q/i_improved_15_llms_at_coding_one_afternoon) - [I Improved 15 LLMs at Coding in One Afternoon. Only the Harness Changed](https://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-13, 03:33:27](https://news.ycombinator.com/item?id=46998606) - [The Wonder of Modern Drywall](https://worksinprogress.co/issue/the-wonder-of-modern-drywall/)
* [2026-02-13, 03:03:33](https://lobste.rs/s/x3vd7h/many_flavors_ignore_files) - [The Many Flavors of Ignore Files](https://nesbitt.io/2026/02/12/the-many-flavors-of-ignore-files.html)
* [2026-02-13, 01:51:55](https://lobste.rs/s/cd6n7w/stack_buffer_overflow_exercise_with) - [A stack-buffer-overflow exercise with AddressSanitizer and PostgreSQL](https://www.enterprisedb.com/blog/stack-buffer-overflow-exercise-addresssanitizer-and-postgresql)
* [2026-02-13, 01:30:00](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Makes New Push To Recruit Chinese Military Officers as Informants](https://news.slashdot.org/story/26/02/12/211223/cia-makes-new-push-to-recruit-chinese-military-officers-as-informants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 00:54:51](https://news.ycombinator.com/item?id=46997519) - [Skip the Tips: A game to select \&quot;No Tip\&quot; but dark patterns try to stop you](https://skipthe.tips/)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-13, 00:07:57](https://news.ycombinator.com/item?id=46997133) - [AWS Adds support for nested virtualization](https://github.com/aws/aws-sdk-go-v2/commit/3dca5e45d5ad05460b93410087833cbaa624754e)
* [2026-02-12, 23:52:24](https://news.ycombinator.com/item?id=46997008) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-12, 23:51:16](https://news.ycombinator.com/item?id=46996999) - [Ring cancels its partnership with Flock Safety after surveillance backlash](https://www.theverge.com/news/878447/ring-flock-partnership-canceled)
* [2026-02-12, 23:19:34](https://lobste.rs/s/bsprvp/apple_has_transparency_issue) - [Apple has a transparency issue](https://www.youtube.com/watch?v=ejPqAJ0dHwY)
* [2026-02-12, 23:08:01](https://news.ycombinator.com/item?id=46996569) - [Recoverable and Irrecoverable Decisions](https://herbertlui.net/recoverable-and-irrecoverable-decisions/)
* [2026-02-12, 22:58:58](https://news.ycombinator.com/item?id=46996490) - [Tell HN: Ralph Giles has died (Xiph.org| Rust@Mozilla | Ghostscript)](https://news.ycombinator.com/item?id=46996490)
* [2026-02-12, 22:34:58](https://news.ycombinator.com/item?id=46996258) - [Evaluating Multilingual, Context-Aware Guardrails: A Humanitarian LLM Use Case](https://blog.mozilla.ai/evaluating-multilingual-context-aware-guardrails-evidence-from-a-humanitarian-llm-use-case/)
* [2026-02-12, 22:30:00](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Plans To Triple Entry-Level Hiring in the US](https://slashdot.org/story/26/02/12/214250/ibm-plans-to-triple-entry-level-hiring-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 22:18:47](https://lobste.rs/s/zgdpht/plan_files_2020) - [.plan files (2020)](https://matteolandi.net/plan-files.html)
* [2026-02-12, 21:16:56](https://lobste.rs/s/1nqt8w/timeless_way_programming_2022) - [The Timeless Way of Programming (2022)](https://tomasp.net/blog/2022/timeless-way/)
* [2026-02-12, 21:02:23](https://lobste.rs/s/kfg1pf/goto_considered_good_actually) - [GOTO Considered Good, Actually](https://adamledoux.net/blog/posts/2026-02-09-GOTO-Considered-Good--Actually--or--i-made-a-tool-for-writing-casio-calculator-games-using-twine-.html)
* [2026-02-12, 21:00:00](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WP Engine Says Automattic Planned To Shake Down 10 Hosting Companies For WordPress Royalties](https://yro.slashdot.org/story/26/02/12/2055249/wp-engine-says-automattic-planned-to-shake-down-10-hosting-companies-for-wordpress-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 20:54:23](https://lobste.rs/s/3yq7cc/how_build_distributed_queue_single_json) - [How to build a distributed queue in a single JSON file on object storage](https://turbopuffer.com/blog/object-storage-queue)
* [2026-02-12, 20:14:57](https://lobste.rs/s/ehw8fx/scripting_on_jvm_with_java_scala_kotlin) - [Scripting on the JVM with Java, Scala, and Kotlin](https://mill-build.org/blog/19-scripting-on-the-jvm.html)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 20:00:00](https://slashdot.org/story/26/02/12/1931255/anthropic-raises-30-billion-at-380-billion-valuation-eyes-ipo-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Raises $30 Billion at $380 Billion Valuation, Eyes IPO This Year](https://slashdot.org/story/26/02/12/1931255/anthropic-raises-30-billion-at-380-billion-valuation-eyes-ipo-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 19:10:00](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palo Alto Chose Not To Tie China To Hacking Campaign For Fear of Retaliation From Beijing](https://it.slashdot.org/story/26/02/12/196217/palo-alto-chose-not-to-tie-china-to-hacking-campaign-for-fear-of-retaliation-from-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 19:01:54](https://news.ycombinator.com/item?id=46993397) - [How to Have a Bad Career – David Patterson (2016) [video]](https://www.youtube.com/watch?v=Rn1w4MRHIhc)
* [2026-02-12, 18:52:26](https://lobste.rs/s/lel7zt/allocators_from_c_zig) - [Allocators from C to Zig](https://antonz.org/allocators/)
* [2026-02-12, 18:23:20](https://news.ycombinator.com/item?id=46992815) - [Polis: Open-source platform for large-scale civic deliberation](https://pol.is/home2)
* [2026-02-12, 18:18:40](https://lobste.rs/s/qtxw92/workledger_offline_first_engineering) - [Workledger - An offline first  engineering notebook](https://about.workledger.org/)
* [2026-02-12, 18:10:00](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans Smartphone-Style Permission Prompts for Windows 11 Apps](https://it.slashdot.org/story/26/02/12/184223/microsoft-plans-smartphone-style-permission-prompts-for-windows-11-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 18:06:09](https://news.ycombinator.com/item?id=46992553) - [GPT‑5.3‑Codex‑Spark](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
* [2026-02-12, 17:14:31](https://lobste.rs/s/n4kbuj/ai_agent_published_hit_piece_on_me) - [An AI Agent Published a Hit Piece on Me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 17:14:28](https://news.ycombinator.com/item?id=46991591) - [Launch HN: Omnara (YC S25) – Run Claude Code and Codex from anywhere](https://news.ycombinator.com/item?id=46991591)
* [2026-02-12, 17:12:00](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Border Officials Are Said To Have Caused El Paso Closure by Firing Anti-Drone Laser](https://news.slashdot.org/story/26/02/12/1712232/border-officials-are-said-to-have-caused-el-paso-closure-by-firing-anti-drone-laser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 16:55:50](https://news.ycombinator.com/item?id=46991240) - [Gemini 3 Deep Think](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/)
* [2026-02-12, 16:43:42](https://lobste.rs/s/vxkq0z/stargazing_buddy_practical_guide) - [Stargazing Buddy: A practical guide to observing the night sky for real skies and real equipment](https://stargazingbuddy.com/)
* [2026-02-12, 16:23:24](https://news.ycombinator.com/item?id=46990729) - [An AI agent published a hit piece on me](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/)
* [2026-02-12, 16:12:39](https://lobste.rs/s/fna9yv/request_for_sources_discord) - [Request for sources: Discord alternatives](https://lobste.rs/s/fna9yv/request_for_sources_discord)
* [2026-02-12, 16:10:29](https://news.ycombinator.com/item?id=46990578) - [Beginning fully autonomous operations with the 6th-generation Waymo driver](https://waymo.com/blog/2026/02/ro-on-6th-gen-waymo-driver)
* [2026-02-12, 16:00:00](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Engineers Want Claude Code, but the Company Keeps Pushing Its Own Tool](https://developers.slashdot.org/story/26/02/12/1530202/amazon-engineers-want-claude-code-but-the-company-keeps-pushing-its-own-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 15:16:00](https://lobste.rs/s/i0xmbk/inspecting_source_go_modules) - [Inspecting the Source of Go Modules](https://words.filippo.io/go-source/)
* [2026-02-12, 15:03:00](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The \&quot;Are You Sure?\&quot; Problem: Why Your AI Keeps Changing Its Mind](https://slashdot.org/story/26/02/12/153227/the-are-you-sure-problem-why-your-ai-keeps-changing-its-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 14:43:25](https://lobste.rs/s/jagwef/css_clicker) - [CSS Clicker](https://lyra.horse/css-clicker/)
* [2026-02-12, 14:24:15](https://news.ycombinator.com/item?id=46989217) - [Major European payment processor can&apos;t send email to Google Workspace users](https://atha.io/blog/2026-02-12-viva)
* [2026-02-12, 14:15:20](https://lobste.rs/s/lzn4pr/future_for_tyr_rust_gpu_driver_for_arm_mali) - [The future for Tyr, a Rust GPU driver for Arm Mali hardware](https://lwn.net/Articles/1055590/)
* [2026-02-12, 14:00:00](https://slashdot.org/story/26/02/12/1251249/anthropic-to-cover-costs-of-electricity-price-increases-from-its-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic To Cover Costs of Electricity Price Increases From Its Data Centers](https://slashdot.org/story/26/02/12/1251249/anthropic-to-cover-costs-of-electricity-price-increases-from-its-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 13:55:50](https://lobste.rs/s/vyvtz5/commet_matrix_client) - [Commet - Matrix Client](https://commet.chat/)
* [2026-02-12, 13:30:20](https://news.ycombinator.com/item?id=46988596) - [Improving 15 LLMs at Coding in One Afternoon. Only the Harness Changed](http://blog.can.ac/2026/02/12/the-harness-problem/)
* [2026-02-12, 13:13:30](https://news.ycombinator.com/item?id=46988438) - [Apache Arrow is 10 years old](https://arrow.apache.org/blog/2026/02/12/arrow-anniversary/)
* [2026-02-12, 12:10:37](https://lobste.rs/s/s5xudm/recursive_language_models) - [Recursive Language Models](https://alexzhang13.github.io/blog/2025/rlm/)
* [2026-02-12, 12:00:00](https://tech.slashdot.org/story/26/02/12/121243/meta-auditor-ey-raised-red-flag-on-data-center-accounting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Auditor EY Raised Red Flag on Data-Center Accounting](https://tech.slashdot.org/story/26/02/12/121243/meta-auditor-ey-raised-red-flag-on-data-center-accounting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 09:00:00](https://news.slashdot.org/story/26/02/12/0615244/us-hacking-tool-boss-stole-and-sold-exploits-to-russian-broker-that-could-target-millions-of-devices-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Hacking Tool Boss Stole and Sold Exploits To Russian Broker That Could Target Millions of Devices, DOJ Says](https://news.slashdot.org/story/26/02/12/0615244/us-hacking-tool-boss-stole-and-sold-exploits-to-russian-broker-that-could-target-millions-of-devices-doj-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 06:00:00](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Siri&apos;s AI Overhaul Delayed Again](https://apple.slashdot.org/story/26/02/12/0528239/siris-ai-overhaul-delayed-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 04:22:26](https://lobste.rs/s/dixmkp/proof_oriented_programming_f) - [Proof-oriented Programming in F*](https://fstar-lang.org/tutorial)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 21:54:31](https://lobste.rs/s/vrrdhz/do_not_apologize_for_replying_late_my) - [Do not apologize for replying late to my email](https://ploum.net/2026-02-11-do_not_apologize_for_replying_to_my_email.html)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 18:42:38](https://lobste.rs/s/jkqgrt/majutsu_magit_for_jujutsu) - [Majutsu, Magit for jujutsu](https://github.com/0WD0/majutsu)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 12:09:23](https://lobste.rs/s/kp7jlq/windows_notepad_app_remote_code) - [Windows Notepad App Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-20841)
* [2026-02-11, 11:57:10](https://lobste.rs/s/tqttgj/forwardly_evaluated_build_systems) - [Forwardly-evaluated build systems](https://garnix.io/blog/garn2/)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
* [2026-02-10, 20:33:00](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss) - [AI.Com&apos;s $85 Million Super Bowl Ad Campaign Falls Foul as Traffic Crashes Servers](https://soylentnews.org/article.pl?sid=26/02/09/1936243&amp;from=rss)
* [2026-02-10, 20:02:05](https://news.ycombinator.com/item?id=46965968) - [Show HN: Sol LeWitt-style instruction-based drawings in the browser](https://intervolz.com/sollewitt/)
* [2026-02-10, 15:50:00](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss) - [Linux Kernel 6.19 is Released and the Next Version is Confirmed to be 7.0](https://soylentnews.org/article.pl?sid=26/02/09/1922203&amp;from=rss)
* [2026-02-10, 11:08:00](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss) - [Your iPhone is About to Get a New Privacy Feature to Protect Your Location Data From Prying Eyes](https://soylentnews.org/article.pl?sid=26/02/09/0531254&amp;from=rss)
* [2026-02-10, 06:22:00](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss) - [Microsoft Releases Urgent Office Patch While Russian-State Hackers Pounce](https://soylentnews.org/article.pl?sid=26/02/09/0524218&amp;from=rss)
* [2026-02-10, 01:38:00](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss) - [A Fresh Look at IBM 3270 Information Display System](https://soylentnews.org/article.pl?sid=26/02/09/0519218&amp;from=rss)
* [2026-02-09, 20:54:00](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss) - [New York Lawmakers Introduce Bill That Aims to Halt Data Center Development for Three Years](https://soylentnews.org/article.pl?sid=26/02/09/0514240&amp;from=rss)
* [2026-02-09, 16:09:00](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss) - [Taking a Second to Change the Time](https://soylentnews.org/article.pl?sid=26/02/08/0232241&amp;from=rss)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 11:34:14](https://news.ycombinator.com/item?id=46944125) - [Mapping the Moon: The Apollo Transforming Printer](https://blogs.loc.gov/maps/2025/12/mapping-the-moon-the-apollo-transforming-printer/)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
