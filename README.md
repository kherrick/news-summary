# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack) - Highlights an innovative approach to building a coding agent integrated with Slack instead of traditional terminals, showcasing adaptability in software development tools.

* [Sandboxing AI Agents at the Kernel Level](https://www.greptile.com/blog/sandboxing-agents-at-the-kernel-level) - Discusses foundational advancements in improving the security of AI agents with kernel-level sandboxing.

* [Ladybird Browser Gains Cloudflare Support to Challenge the Status Quo](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Ladybird browser adds Cloudflare support, presenting itself as a potential disruptor in the web browsing ecosystem.

## Scientific Discoveries and Research

* [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New findings propose that microplastics circulating in the environment may compromise human bone strength.

* [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - Physicists report a groundbreaking enhancement in qubit readout speed, paving the way for faster quantum computation advancements.

* [Some Athletes are Trying the Psychedelic Ibogaine to Treat Brain Injuries](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores the use of ibogaine, a psychedelic substance, in aiding recovery from brain injuries, particularly among athletes.

## Artificial Intelligence and Computing Developments

* [New Claude Model Runs 30-Hour Marathon To Create 11,000-Line Slack Clone](https://developers.slashdot.org/story/25/09/29/1733238/new-claude-model-runs-30-hour-marathon-to-create-11000-line-slack-clone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Showcases the impressive capabilities of Anthropic's Claude AI model in an intense coding challenge.

* [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/) - Reflects on a world where AI assists heavily in the software development process, transforming coding workflows.

* [Claude Code 2.0](https://www.npmjs.com/package/@anthropic-ai/claude-code) - The Claude Code framework release promises enhanced tools for developers working with AI-driven solutions.

## Society and Ethical Concerns

* [Landlords Are Demanding Tenants' Workplace Login Details To Verify Their Income](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigates the growing invasion of privacy as landlords request sensitive tenant employment data for verification.

* [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Advocates against increasing AI usage in writing and its ethical implications for professional writers.

## Unique Engineering and Technological Feats

* [China Opens World's Highest Bridge, Breaking Its Own Record](https://slashdot.org/story/25/09/29/1459255/china-opens-worlds-highest-bridge-breaking-its-own-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Showcases China’s ambitious infrastructural advancements with the record-breaking elevation of its new bridge.

* [Optimizing a 6502 Image Decoder, From 70 Minutes to 1 Minute](https://www.colino.net/wordpress/en/archives/2025/09/28/optimizing-a-6502-image-decoder-from-70-minutes-to-1-minute/) - Chronicles a remarkable optimization journey shedding light on transforming legacy computational processes for modern efficiency.

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

* [2025-09-29, 18:18:00](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microplastics Could Be Weakening Your Bones, Research Suggests](https://science.slashdot.org/story/25/09/29/1818259/microplastics-could-be-weakening-your-bones-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 17:57:55](https://lobste.rs/s/ljvnlu/we_built_our_coding_agent_for_slack) - [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack)
* [2025-09-29, 17:37:52](https://lobste.rs/s/eayslm/adding_new_instruction_risc_v_backend) - [Adding a new instruction to RISC-V backend in LLVM](https://blog.gustavoleite.me/llvm-riscv-instruction)
* [2025-09-29, 17:35:26](https://lobste.rs/s/2ofre3/can_ligo_detect_daylight_savings_time) - [Can LIGO Detect Daylight Savings Time?](https://arxiv.org/abs/2509.11849)
* [2025-09-29, 17:33:00](https://developers.slashdot.org/story/25/09/29/1733238/new-claude-model-runs-30-hour-marathon-to-create-11000-line-slack-clone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Claude Model Runs 30-Hour Marathon To Create 11,000-Line Slack Clone](https://developers.slashdot.org/story/25/09/29/1733238/new-claude-model-runs-30-hour-marathon-to-create-11000-line-slack-clone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 17:12:58](https://news.ycombinator.com/item?id=45416231) - [FCC Accidentally Leaked iPhone Schematics](https://www.engadget.com/big-tech/fcc-accidentally-leaked-iphone-schematics-potentially-giving-rivals-a-peek-at-company-secrets-154551807.html)
* [2025-09-29, 17:12:13](https://news.ycombinator.com/item?id=45416228) - [Claude Code 2.0](https://www.npmjs.com/package/@anthropic-ai/claude-code)
* [2025-09-29, 16:52:59](https://news.ycombinator.com/item?id=45415962) - [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 16:40:05](https://news.ycombinator.com/item?id=45415814) - [Sandboxing AI Agents at the Kernel Level](https://www.greptile.com/blog/sandboxing-agents-at-the-kernel-level)
* [2025-09-29, 16:40:00](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Landlords Are Demanding Tenants&apos; Workplace Login Details To Verify Their Income](https://news.slashdot.org/story/25/09/29/1634200/landlords-are-demanding-tenants-workplace-login-details-to-verify-their-income?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 16:14:38](https://news.ycombinator.com/item?id=45415539) - [Show HN: Every single torrent is on this website](https://infohash.lol/)
* [2025-09-29, 16:12:30](https://news.ycombinator.com/item?id=45415510) - [ML on Apple ][+](https://mdcramer.github.io/apple-2-blog/k-means/)
* [2025-09-29, 16:10:00](https://slashdot.org/story/25/09/29/1610226/microsoft-launches-vibe-working-in-excel-and-word?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches &apos;Vibe Working&apos; in Excel and Word](https://slashdot.org/story/25/09/29/1610226/microsoft-launches-vibe-working-in-excel-and-word?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 16:07:52](https://lobste.rs/s/7kspja/subtleties_sqlite_indexes) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:54:42](https://news.ycombinator.com/item?id=45415332) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:50:13](https://lobste.rs/s/adqhqf/unix99_unix_for_ti_99_4a) - [UNIX99: UNIX for the TI-99/4A](https://www.osnews.com/story/143436/unix99-unix-for-the-ti-99-4a/)
* [2025-09-29, 15:45:33](https://news.ycombinator.com/item?id=45415232) - [Write the Damn Code](https://antonz.org/write-code/)
* [2025-09-29, 15:42:46](https://news.ycombinator.com/item?id=45415207) - [Loadmo.re: design inspiration for unconventional web](https://loadmo.re)
* [2025-09-29, 15:40:30](https://news.ycombinator.com/item?id=45415178) - [How the Brain Balances Excitation and Inhibition](https://www.quantamagazine.org/how-the-brain-balances-excitation-and-inhibition-20250929/)
* [2025-09-29, 15:25:26](https://lobste.rs/s/rrwwar/announcing_software_you_can_love_2026) - [Announcing Software You Can Love 2026](https://mattnite.net/blog/sycl-2026-announcement/)
* [2025-09-29, 15:21:00](https://slashdot.org/story/25/09/29/1459255/china-opens-worlds-highest-bridge-breaking-its-own-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Opens World&apos;s Highest Bridge, Breaking Its Own Record](https://slashdot.org/story/25/09/29/1459255/china-opens-worlds-highest-bridge-breaking-its-own-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 14:46:11](https://news.ycombinator.com/item?id=45414479) - [Not all OCuLink eGPU docks are created equal](https://www.jeffgeerling.com/blog/2025/not-all-oculink-egpu-docks-are-created-equal)
* [2025-09-29, 14:40:00](https://tech.slashdot.org/story/25/09/29/1329246/no-driver-no-hands-no-clue-waymo-pulled-over-for-illegal-u-turn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Driver, No Hands, No Clue&apos;: Waymo Pulled Over For Illegal U-turn](https://tech.slashdot.org/story/25/09/29/1329246/no-driver-no-hands-no-clue-waymo-pulled-over-for-illegal-u-turn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 14:09:13](https://lobste.rs/s/cay1iq/llm_inference_economics_from_first) - [LLM Inference Economics from First Principles](https://www.tensoreconomics.com/p/llm-inference-economics-from-first)
* [2025-09-29, 14:00:00](https://games.slashdot.org/story/25/09/29/134259/saudi-takeover-of-ea-in-55-billion-deal-raises-serious-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Takeover of EA in $55 Billion Deal Raises Serious Concerns](https://games.slashdot.org/story/25/09/29/134259/saudi-takeover-of-ea-in-55-billion-deal-raises-serious-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 13:39:53](https://news.ycombinator.com/item?id=45413654) - [Why friction is necessary for growth](https://jameelur.com/blog/overcoming-friction-leads-to-growth)
* [2025-09-29, 13:34:43](https://lobste.rs/s/qzcqyx/code_golfing_tiny_demo_using_maths_pinch) - [Code golfing a tiny demo using maths and a pinch of insanity](https://blog.pkh.me/p/45-code-golfing-a-tiny-demo-using-maths-and-a-pinch-of-insanity.html)
* [2025-09-29, 13:33:41](https://news.ycombinator.com/item?id=45413570) - [Map of Near and Middle East Oil 1965](https://www.davidrumsey.com/blog/2025/9/28/map-of-near-and-middle-east-oil-1965)
* [2025-09-29, 13:25:40](https://news.ycombinator.com/item?id=45413481) - [Meta-analysis of 2.2M people: Loneliness increases mortality risk by 32%](https://lightcapai.medium.com/the-loneliness-epidemic-threatens-physical-health-like-smoking-e063220dde8b)
* [2025-09-29, 13:09:53](https://lobste.rs/s/vvlwde/my_concurrency_wishlist_for_xcode_27) - [My (concurrency) Wishlist for Xcode 27](https://iamkonstantin.eu/blog/my-concurrency-wishlist-for-xcode-27/)
* [2025-09-29, 12:38:40](https://lobste.rs/s/wf4bnp/what_s_new_postgresql_18_developer_s) - [What&apos;s New in PostgreSQL 18 - a Developer&apos;s Perspective](https://www.bytebase.com/blog/what-is-new-in-postgres-18-for-developer/)
* [2025-09-29, 12:36:02](https://lobste.rs/s/oiiocr/go_proposal_architecture_specific_simd) - [Go Proposal: architecture-specific SIMD intrinsics](https://github.com/golang/go/issues/73787)
* [2025-09-29, 12:33:44](https://lobste.rs/s/x7fe8h/dbos_durable_workflow_orchestration) - [dbos: Durable Workflow Orchestration with Go and Postgresql](https://github.com/dbos-inc/dbos-transact-golang)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 11:34:00](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Professor Warns CS Graduates are Struggling to Find Jobs](https://developers.slashdot.org/story/25/09/29/029201/professor-warns-cs-graduates-are-struggling-to-find-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 11:30:32](https://lobste.rs/s/sieihh/spent_hour_so_working_with_claude_write) - [Spent an hour or so working with claude to write a minimal static web server in COBOL](https://github.com/jmsdnns/webbol)
* [2025-09-29, 11:28:06](https://news.ycombinator.com/item?id=45412419) - [What if I don&apos;t want videos of my hobby time available to the world?](https://neilzone.co.uk/2025/09/what-if-i-dont-want-videos-of-my-hobby-time-available-to-the-entire-world/)
* [2025-09-29, 10:43:45](https://lobste.rs/s/f5xxtl/does_ai_get_bored) - [Does AI Get Bored?](https://timkellogg.me/blog/2025/09/27/boredom)
* [2025-09-29, 10:26:39](https://news.ycombinator.com/item?id=45412098) - [DeepSeek-v3.2-Exp](https://github.com/deepseek-ai/DeepSeek-V3.2-Exp)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 10:11:20](https://news.ycombinator.com/item?id=45412022) - [Optimizing a 6502 image decoder, from 70 minutes to 1 minute](https://www.colino.net/wordpress/en/archives/2025/09/28/optimizing-a-6502-image-decoder-from-70-minutes-to-1-minute/)
* [2025-09-29, 09:46:08](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/pvyfsg/what_are_you_doing_this_week)
* [2025-09-29, 07:50:24](https://news.ycombinator.com/item?id=45411291) - [Queueing to publish in AI and CS](https://damaru2.github.io/general/queueing_to_publish_in_AI_or_CS/)
* [2025-09-29, 07:44:00](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ladybird Browser Gains Cloudflare Support to Challenge the Status Quo](https://news.slashdot.org/story/25/09/29/0446226/ladybird-browser-gains-cloudflare-support-to-challenge-the-status-quo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 06:42:58](https://lobste.rs/s/x1sdu5/f_droid_google_s_developer_registration) - [F-Droid and Google&apos;s Developer Registration Decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 06:41:27](https://news.ycombinator.com/item?id=45410940) - [What is \&quot;good taste\&quot; in software engineering?](https://www.seangoedecke.com/taste/)
* [2025-09-29, 05:59:35](https://lobste.rs/s/jbaxru/comparing_rust_carbon) - [Comparing Rust to Carbon](https://lwn.net/Articles/1036912/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 04:59:00](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Powered Stan Lee Hologram Debuts at LA Comic Con](https://entertainment.slashdot.org/story/25/09/29/041251/ai-powered-stan-lee-hologram-debuts-at-la-comic-con?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 04:07:21](https://lobste.rs/s/olfuo0/just_let_me_select_text) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-29, 03:45:40](https://news.ycombinator.com/item?id=45410155) - [Zero ASIC releases Wildebeest, the highest performance FPGA synthesis tool](https://www.zeroasic.com/blog/wildebeest-launch)
* [2025-09-29, 03:05:00](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Athletes are Trying the Psychedelic Ibogaine to Treat Brain Injuries](https://science.slashdot.org/story/25/09/29/033214/some-athletes-are-trying-the-psychedelic-ibogaine-to-treat-brain-injuries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 02:10:20](https://news.ycombinator.com/item?id=45409794) - [F-Droid and Google’s developer registration decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 01:32:00](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Culture Magazine Urges Professional Writers to Resist AI, Boycott and Stigmatize AI Slop](https://news.slashdot.org/story/25/09/29/0129218/culture-magazine-urges-professional-writers-to-resist-ai-boycott-and-stigmatize-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 23:59:00](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Journal Decries &apos;The Rise of Conspiracy Physics&apos;](https://science.slashdot.org/story/25/09/28/2356244/wall-street-journal-decries-the-rise-of-conspiracy-physics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 23:22:35](https://lobste.rs/s/trzzcd/c_modules_globally_unique_module_names) - [In C++ modules globally unique module names seem to be unavoidable](https://nibblestew.blogspot.com/2025/09/in-c-modules-globally-unique-module.html)
* [2025-09-28, 23:02:48](https://lobste.rs/s/b4zqs1/risc_v_conditional_moves) - [RISC-V Conditional Moves](https://www.corsix.org/content/riscv-conditional-moves)
* [2025-09-28, 22:48:00](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Switzerland Approves Digital ID In Narrow Vote, UK Proposes One Too](https://yro.slashdot.org/story/25/09/28/2156240/switzerland-approves-digital-id-in-narrow-vote-uk-proposes-one-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 22:20:59](https://news.ycombinator.com/item?id=45408617) - [Go ahead, write the “stupid” code](https://spikepuppet.io/posts/write-the-stupid-code/)
* [2025-09-28, 21:50:45](https://lobste.rs/s/dkjswm/stupid_jj_tricks) - [stupid jj tricks](https://andre.arko.net/2025/09/28/stupid-jj-tricks/)
* [2025-09-28, 21:08:15](https://news.ycombinator.com/item?id=45408021) - [Play snake in the URL address bar](https://demian.ferrei.ro/snake/)
* [2025-09-28, 20:37:00](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Berners-Lee Urges New Open-Source Interoperable Data Standard, Protections from AI](https://tech.slashdot.org/story/25/09/28/1958242/tim-berners-lee-urges-new-open-source-interoperable-data-standard-protections-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 16:13:36](https://lobste.rs/s/gchwhh/why_i_m_not_rushing_take_sides_rubygems) - [Why I&apos;m not rushing to take sides in the RubyGems fiasco](https://justin.searls.co/posts/why-im-not-rushing-to-take-sides-in-the-rubygems-fiasco/)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 11:44:44](https://lobste.rs/s/wshruu/small_data) - [Small Data](https://topicpartition.io/definitions/small-data)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 09:07:22](https://lobste.rs/s/m9rmop/offline_translator_for_android) - [Offline translator for Android](https://github.com/DavidVentura/firefox-translator)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 21:42:14](https://news.ycombinator.com/item?id=45399572) - [Using Cesium-137 testing to find counterfeit wine](https://kitchensisters.org/hiddenkitchens/atomic-wine/)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 13:15:37](https://news.ycombinator.com/item?id=45395468) - [Users only care about 20% of your application](https://idiallo.com/blog/users-only-care-about-20-percent)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 19:09:09](https://news.ycombinator.com/item?id=45389934) - [Show HN: Font Tester – Preview fonts on custom content](https://fonts.tomhadley.link/)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 12:16:00](https://news.ycombinator.com/item?id=45385620) - [Thoughts on Mechanical Keyboards and the ZSA Moonlander](https://www.masteringemacs.org/article/thoughts-on-mechanical-keyboards-zsa-moonlander)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:29:53](https://news.ycombinator.com/item?id=45383381) - [`std::flip`](https://morwenn.github.io//c++/2025/09/25/TSB004-std-flip.html)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-25, 21:16:24](https://news.ycombinator.com/item?id=45379196) - [The phaseout of the mmap() file operation in Linux](https://lwn.net/SubscriberLink/1038715/e4a2f8f50c244545/)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:19:56](https://news.ycombinator.com/item?id=45373784) - [Zlib visualizer](https://lynn.github.io/flateview/)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
