# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [CTA Hierarchy in the Wild](https://blog.jim-nielsen.com/2026/cta-hierarchy/) - An exploration into design principles behind Call-To-Action (CTA) elements.

* [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent) - Discussion on building and utilizing agents that leverage only code for operations.

* [Autodesk To Cut 1,000 Jobs](https://slashdot.org/story/26/01/22/1641228/autodesk-to-cut-1000-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Autodesk announces a significant workforce reduction.

* [Secure Boot, TPM and Anti-Cheat Engines](https://andrewmoore.ca/blog/post/anticheat-secure-boot-tpm/) - Analysis of secure boot, TPM, and their intersection with anti-cheat systems.

## Artificial Intelligence Developments

* [Workday CEO Calls Narrative That AI is Killing Software 'Overblown'](https://tech.slashdot.org/story/26/01/22/1734213/workday-ceo-calls-narrative-that-ai-is-killing-software-overblown?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Workday CEO's commentary on exaggerated claims about AI rendering traditional software obsolete.

* [China Lagging in AI Is a 'Fairy Tale,' Mistral CEO Says](https://news.slashdot.org/story/26/01/22/172240/china-lagging-in-ai-is-a-fairy-tale-mistral-ceo-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The CEO of Mistral disputes claims of China's delayed progress in AI.

* [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/) - AI spotting and addressing problematic content in academic AI research papers.

## Sustainability and Environment

* [Schools, Airports, High-Rise Towers: Architects Urged To Get 'Bamboo-Ready'](https://news.slashdot.org/story/26/01/22/1730215/schools-airports-high-rise-towers-architects-urged-to-get-bamboo-ready?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A push for incorporating bamboo into modern architectural projects.

* [In Europe, Wind and Solar Overtake Fossil Fuels](https://e360.yale.edu/digest/europe-wind-solar-fossil-fuels) - Key milestones in Europe's energy transition to sustainable sources.

## Society and Culture

* [Macron says €300B in EU savings sent to the US every year will be invested in EU](https://old.reddit.com/r/europe/comments/1qjtvtl/macron_says_300_billion_in_european_savings_flown/) - Macron's plans to redirect European savings for internal development.

* [Doctors in Brazil using tilapia fish skin to treat burn victims](https://www.pbs.org/newshour/health/brazilian-city-uses-tilapia-fish-skin-treat-burn-victims) - Innovative use of fish skin in medical treatments for burn injuries.

* [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&from=rss) - Major demographic shift observed in France.

## Insightful Research and Discoveries

* [ISO PDF spec is getting Brotli – ~20% smaller documents with no quality loss](https://pdfa.org/want-to-make-your-pdfs-20-smaller-for-free/) - New PDF specification enhancement for efficiency.

* [The mushroom making people hallucinate tiny humans](https://www.bbc.com/future/article/20260121-the-mysterious-mushroom-that-makes-you-see-tiny-people) - Fascinating study on a hallucinatory mushroom.

* [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&from=rss) - Concerns regarding literacy challenges in higher education.

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

* [2026-01-22, 19:00:37](https://lobste.rs/s/t9kzm7/cta_hierarchy_wild) - [CTA Hierarchy in the Wild](https://blog.jim-nielsen.com/2026/cta-hierarchy/)
* [2026-01-22, 18:52:02](https://lobste.rs/s/nlz3a6/i_was_banned_from_claude_for_scaffolding) - [I was banned from Claude for scaffolding a CLAUDE.md file](https://hugodaniel.com/posts/claude-code-banned-me/)
* [2026-01-22, 18:45:00](https://tech.slashdot.org/story/26/01/22/1734213/workday-ceo-calls-narrative-that-ai-is-killing-software-overblown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workday CEO Calls Narrative That AI is Killing Software &apos;Overblown&apos;](https://tech.slashdot.org/story/26/01/22/1734213/workday-ceo-calls-narrative-that-ai-is-killing-software-overblown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 18:33:12](https://lobste.rs/s/141j2p/code_only_agent) - [The Code-Only Agent](https://rijnard.com/blog/the-code-only-agent)
* [2026-01-22, 18:07:19](https://lobste.rs/s/eznb24/js_returns_undefined) - [JS Returns Undefined](https://ylovits.github.io/returns-undefined/)
* [2026-01-22, 18:05:00](https://news.slashdot.org/story/26/01/22/1730215/schools-airports-high-rise-towers-architects-urged-to-get-bamboo-ready?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Schools, Airports, High-Rise Towers: Architects Urged To Get &apos;Bamboo-Ready&apos;](https://news.slashdot.org/story/26/01/22/1730215/schools-airports-high-rise-towers-architects-urged-to-get-bamboo-ready?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 18:01:02](https://news.ycombinator.com/item?id=46722853) - [Recent discoveries on the acquisition of the highest levels of human performance](https://www.science.org/doi/abs/10.1126/science.adt7790)
* [2026-01-22, 17:42:51](https://news.ycombinator.com/item?id=46722594) - [Macron says €300B in EU savings sent to the US every year will be invested in EU](https://old.reddit.com/r/europe/comments/1qjtvtl/macron_says_300_billion_in_european_savings_flown/)
* [2026-01-22, 17:41:22](https://news.ycombinator.com/item?id=46722570) - [CSS Optical Illusions](https://alvaromontoro.com/blog/68091/css-optical-illusions)
* [2026-01-22, 17:20:00](https://news.slashdot.org/story/26/01/22/172240/china-lagging-in-ai-is-a-fairy-tale-mistral-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Lagging in AI Is a &apos;Fairy Tale,&apos; Mistral CEO Says](https://news.slashdot.org/story/26/01/22/172240/china-lagging-in-ai-is-a-fairy-tale-mistral-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 17:03:21](https://news.ycombinator.com/item?id=46721933) - [Launch HN: Constellation Space (YC W26) – AI for satellite mission assurance](https://constellation-io.com/)
* [2026-01-22, 17:00:40](https://news.ycombinator.com/item?id=46721897) - [AnswerThis (YC F25) Is Hiring](https://www.ycombinator.com/companies/answerthis/jobs/r5VHmSC-ai-agent-orchestration)
* [2026-01-22, 16:52:35](https://news.ycombinator.com/item?id=46721802) - [Show HN: isometric.nyc – giant isometric pixel art map of NYC](https://cannoneyed.com/isometric-nyc/)
* [2026-01-22, 16:44:00](https://slashdot.org/story/26/01/22/1641228/autodesk-to-cut-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autodesk To Cut 1,000 Jobs](https://slashdot.org/story/26/01/22/1641228/autodesk-to-cut-1000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 16:30:58](https://news.ycombinator.com/item?id=46721474) - [Show HN: BrowserOS – \&quot;Claude Cowork\&quot; in the browser (open source)](https://github.com/browseros-ai/BrowserOS)
* [2026-01-22, 16:10:20](https://news.ycombinator.com/item?id=46721179) - [It looks like the status/need-triage label was removed](https://github.com/google-gemini/gemini-cli/issues/16728)
* [2026-01-22, 16:08:00](https://entertainment.slashdot.org/story/26/01/22/168240/what-a-sony-and-tcl-partnership-means-for-the-future-of-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What a Sony and TCL Partnership Means For the Future of TVs](https://entertainment.slashdot.org/story/26/01/22/168240/what-a-sony-and-tcl-partnership-means-for-the-future-of-tvs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 16:00:24](https://news.ycombinator.com/item?id=46721019) - [Show HN: Bible translated using LLMs from source Greek and Hebrew](https://biblexica.com)
* [2026-01-22, 15:29:00](https://slashdot.org/story/26/01/22/1529228/stealing-isnt-innovation-hundreds-of-creatives-warn-against-an-ai-slop-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stealing Isn&apos;t Innovation&apos;: Hundreds of Creatives Warn Against an AI Slop Future](https://slashdot.org/story/26/01/22/1529228/stealing-isnt-innovation-hundreds-of-creatives-warn-against-an-ai-slop-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 15:20:48](https://news.ycombinator.com/item?id=46720395) - [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/)
* [2026-01-22, 15:12:14](https://lobste.rs/s/skjato/ghost_wi_fi) - [Ghost in the Wi-Fi](https://josephmate.github.io/2026-01-20-ghost-in-the-wifi/)
* [2026-01-22, 15:12:07](https://lobste.rs/s/4rfmml/architecture_for_disposable_systems) - [Architecture for Disposable Systems](https://tuananh.net/2026/01/15/architecture-for-disposable-systems/)
* [2026-01-22, 14:47:58](https://news.ycombinator.com/item?id=46719899) - [Tree-sitter vs. Language Servers](https://lambdaland.org/posts/2026-01-21_tree-sitter_vs_lsp/)
* [2026-01-22, 14:40:00](https://yro.slashdot.org/story/26/01/22/1343205/nvidia-allegedly-sought-high-speed-access-to-pirated-book-library-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Allegedly Sought &apos;High-Speed Access&apos; To Pirated Book Library for AI Training](https://yro.slashdot.org/story/26/01/22/1343205/nvidia-allegedly-sought-high-speed-access-to-pirated-book-library-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 14:14:15](https://news.ycombinator.com/item?id=46719491) - [In Europe, Wind and Solar Overtake Fossil Fuels](https://e360.yale.edu/digest/europe-wind-solar-fossil-fuels)
* [2026-01-22, 14:11:32](https://lobste.rs/s/l61c2k/announcing_rust_1_93_0) - [Announcing Rust 1.93.0](https://blog.rust-lang.org/2026/01/22/Rust-1.93.0/)
* [2026-01-22, 14:00:00](https://tech.slashdot.org/story/26/01/22/0946226/no-reasons-to-own-software-stocks-sink-on-fear-of-new-ai-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Reasons To Own&apos;: Software Stocks Sink on Fear of New AI Tool](https://tech.slashdot.org/story/26/01/22/0946226/no-reasons-to-own-software-stocks-sink-on-fear-of-new-ai-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 13:51:25](https://news.ycombinator.com/item?id=46719229) - [Qwen3-TTS Family Is Now Open Sourced: Voice Design, Clone, and Generation](https://qwen.ai/blog?id=qwen3tts-0115)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 13:13:42](https://lobste.rs/s/ap4amt/vibe_kanban_orchestrate_ai_coding_agents) - [Vibe Kanban - Orchestrate AI Coding Agents](https://www.vibekanban.com/)
* [2026-01-22, 13:00:00](https://news.slashdot.org/story/26/01/22/0054237/half-of-fossil-fuel-carbon-emissions-in-2024-came-from-32-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Half of Fossil Fuel Carbon Emissions In 2024 Came From 32 Companies](https://news.slashdot.org/story/26/01/22/0054237/half-of-fossil-fuel-carbon-emissions-in-2024-came-from-32-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 12:50:52](https://lobste.rs/s/kv9qov/cslib_focused_effort_on_formalizing) - [CSLib: A Focused Effort on Formalizing Computer Science in Lean](https://www.cslib.io/)
* [2026-01-22, 12:07:49](https://lobste.rs/s/pylhoc/rpi3_running_freebsd_12_clocks_390_days) - [RPi3 running FreeBSD 12 clocks 390 days uptime as a Radius server](https://bsky.app/profile/atmosx.bsky.social/post/3mcz5g6vpmc2l)
* [2026-01-22, 11:51:10](https://news.ycombinator.com/item?id=46718061) - [Design Thinking Books You Must Read](https://www.designorate.com/design-thinking-books/)
* [2026-01-22, 11:34:13](https://lobste.rs/s/8vtlcw/goodjob_solid_queue_sidekiq_active_job) - [GoodJob, Solid Queue, Sidekiq, Active Job, in 2026](https://island94.org/2026/01/goodjob-solid-queue-sidekiq-active-job-in-2026)
* [2026-01-22, 10:48:27](https://news.ycombinator.com/item?id=46717556) - [We will ban you and ridicule you in public if you waste our time on crap reports](https://curl.se/.well-known/security.txt)
* [2026-01-22, 10:41:23](https://news.ycombinator.com/item?id=46717507) - [ISO PDF spec is getting Brotli – ~20 % smaller documents with no quality loss](https://pdfa.org/want-to-make-your-pdfs-20-smaller-for-free/)
* [2026-01-22, 10:32:08](https://lobste.rs/s/bndnsg/adversarial_coding_test) - [An adversarial coding test](https://runjak.codes/posts/2026-01-21-adversarial-coding-test/)
* [2026-01-22, 10:30:07](https://news.ycombinator.com/item?id=46717442) - [The mushroom making people hallucinate tiny humans](https://www.bbc.com/future/article/20260121-the-mysterious-mushroom-that-makes-you-see-tiny-people)
* [2026-01-22, 10:29:10](https://lobste.rs/s/m0twb1/your_app_subscription_is_now_my_weekend) - [Your App Subscription Is Now My Weekend Project](https://rselbach.com/your-sub-is-now-my-weekend-project/)
* [2026-01-22, 10:00:00](https://news.slashdot.org/story/26/01/22/015250/wikipedias-guide-to-spotting-ai-is-now-being-used-to-hide-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia&apos;s Guide to Spotting AI Is Now Being Used To Hide AI](https://news.slashdot.org/story/26/01/22/015250/wikipedias-guide-to-spotting-ai-is-now-being-used-to-hide-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 08:44:56](https://news.ycombinator.com/item?id=46716696) - [In Praise of APL (1977)](https://www.jsoftware.com/papers/perlis77.htm)
* [2026-01-22, 08:03:57](https://news.ycombinator.com/item?id=46716469) - [30 Years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-22, 07:58:50](https://lobste.rs/s/yegxsx/waiting_for_dawn_search_search_index) - [Waiting for dawn in search: Search index, Google rulings and impact on Kagi](https://blog.kagi.com/waiting-dawn-search)
* [2026-01-22, 07:00:00](https://tech.slashdot.org/story/26/01/22/0044240/blue-origins-satellite-internet-network-terawave-will-move-data-at-6-tbps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin&apos;s Satellite Internet Network TeraWave Will Move Data At 6 Tbps](https://tech.slashdot.org/story/26/01/22/0044240/blue-origins-satellite-internet-network-terawave-will-move-data-at-6-tbps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 06:36:32](https://lobste.rs/s/0lm8so/secure_boot_tpm_anti_cheat_engines) - [Secure Boot, TPM and Anti-Cheat Engines](https://andrewmoore.ca/blog/post/anticheat-secure-boot-tpm/)
* [2026-01-22, 05:52:54](https://news.ycombinator.com/item?id=46715766) - [Show HN: Synesthesia, make noise music with a colorpicker](https://visualnoise.ca)
* [2026-01-22, 05:15:46](https://news.ycombinator.com/item?id=46715600) - [Doctors in Brazil using tilapia fish skin to treat burn victims](https://www.pbs.org/newshour/health/brazilian-city-uses-tilapia-fish-skin-treat-burn-victims)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-22, 03:30:00](https://science.slashdot.org/story/26/01/21/2350220/weight-loss-drugs-could-save-us-airlines-580-million-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weight-Loss Drugs Could Save US Airlines $580 Million Per Year](https://science.slashdot.org/story/26/01/21/2350220/weight-loss-drugs-could-save-us-airlines-580-million-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 02:13:53](https://lobste.rs/s/pb4kco/don_t_trip_wire_yourself_testing_error) - [Don&apos;t Trip[wire] Yourself: Testing Error Recovery in Zig](https://mitchellh.com/writing/tripwire)
* [2026-01-22, 02:02:00](https://hardware.slashdot.org/story/26/01/21/2342252/fbis-washington-post-investigation-shows-how-your-printer-can-snitch-on-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI&apos;s Washington Post Investigation Shows How Your Printer Can Snitch On You](https://hardware.slashdot.org/story/26/01/21/2342252/fbis-washington-post-investigation-shows-how-your-printer-can-snitch-on-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 01:25:00](https://news.slashdot.org/story/26/01/22/006212/america-is-slow-walking-into-a-polymarket-disaster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;America Is Slow-Walking Into a Polymarket Disaster&apos;](https://news.slashdot.org/story/26/01/22/006212/america-is-slow-walking-into-a-polymarket-disaster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 00:45:00](https://apple.slashdot.org/story/26/01/21/2333212/apple-reportedly-replacing-siri-interface-with-actual-chatbot-experience-for-ios-27?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reportedly Replacing Siri Interface With Actual Chatbot Experience For iOS 27](https://apple.slashdot.org/story/26/01/21/2333212/apple-reportedly-replacing-siri-interface-with-actual-chatbot-experience-for-ios-27?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 00:12:00](https://news.ycombinator.com/item?id=46713526) - [Threat actors expand abuse of Microsoft Visual Studio Code](https://www.jamf.com/blog/threat-actors-expand-abuse-of-visual-studio-code/)
* [2026-01-21, 23:46:24](https://lobste.rs/s/oq8n8r/results_from_2025_go_developer_survey) - [Results from the 2025 Go Developer Survey](https://go.dev/blog/survey2025)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 23:22:40](https://news.ycombinator.com/item?id=46713106) - [Show HN: Sweep, Open-weights 1.5B model for next-edit autocomplete](https://huggingface.co/sweepai/sweep-next-edit-1.5B)
* [2026-01-21, 22:41:45](https://news.ycombinator.com/item?id=46712678) - [Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
* [2026-01-21, 22:30:18](https://news.ycombinator.com/item?id=46712547) - [Mote: An Interactive Ecosystem Simulation [video]](https://www.youtube.com/watch?v=Hju0H3NHxVI)
* [2026-01-21, 21:28:48](https://lobste.rs/s/koy1fz/fsnotes_7_remarkable_fast_plain_text) - [FSNotes 7 - Remarkable fast plain text notes](https://fsnot.es/v7/)
* [2026-01-21, 21:07:47](https://news.ycombinator.com/item?id=46711574) - [eBay explicitly bans AI \&quot;buy for me\&quot; agents in user agreement update](https://www.valueaddedresource.net/ebay-bans-ai-agents-updates-arbitration-user-agreement-feb-2026/)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 18:03:04](https://lobste.rs/s/t5pb5f/hate_is_strong_word_i_really_really_really) - [Hate is a strong word, but I really really really don’t like Windows 11](https://blog.urara.pl/hate-is-a-strong-word-but-i-really-really-really-don&apos;t-like-windows-11)
* [2026-01-21, 16:53:36](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement) - [Lobsters Blog Carnival Announcement](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement)
* [2026-01-21, 16:13:02](https://lobste.rs/s/grm2jb/making_lsp_for_great_good) - [Making an LSP for great good](https://thunderseethe.dev/posts/lsp-base/)
* [2026-01-21, 15:22:10](https://lobste.rs/s/zntutr/skip_is_now_free_open_source) - [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/)
* [2026-01-21, 14:58:45](https://lobste.rs/s/zjje5x/so_why_should_gnome_support_server_side) - [So, why *should* GNOME support server side decorations?](https://blister.zip/posts/gnome-ssd/)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 13:11:23](https://lobste.rs/s/oxjhnd/foss_for_digital_sovereignty_eu) - [FOSS for digital sovereignty in the EU](https://www.more-magic.net/posts/open-source-in-the-eu.html)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 20:48:04](https://news.ycombinator.com/item?id=46684299) - [Joe Armstrong and Jeremy Ruston – Intertwingling the Tiddlywiki with Erlang [video]](https://www.youtube.com/watch?v=Uv1UfLPK7_Q)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 06:36:57](https://news.ycombinator.com/item?id=46675669) - [Show HN: Interactive physics simulations I built while teaching my daughter](https://www.projectlumen.app/)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
