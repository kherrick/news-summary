# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies

* [Storing arbitrary data in Pokémon Emerald](https://sardap.github.io/mon-fs/) - A novel approach to modifying a popular game by embedding arbitrary data, reviving interest in classic gaming for innovative purposes. [Comments](https://lobste.rs/s/kg1gsg/storing_arbitrary_data_pokemon_emerald)

* [Autonomous drone defeats human champions in racing first](https://www.tudelft.nl/en/2025/lr/autonomous-drone-from-tu-delft-defeats-human-champions-in-historic-racing-first) - A groundbreaking achievement where an AI-driven drone outperforms human pilots in competitive racing. [Comments](https://news.ycombinator.com/item?id=44184900)

* [Show HN: I made a 3D SVG Renderer that projects textures without rasterization](https://seve.blog/p/i-made-a-3d-svg-renderer-that-projects) - Innovation in 3D modeling showcasing advanced rendering techniques bypassing traditional rasterization. [Comments](https://news.ycombinator.com/item?id=44187645)

## Artificial Intelligence

* [I Think I’m Done Thinking About genAI For Now](https://blog.glyph.im/2025/06/i-think-im-done-thinking-about-genai-for-now.html) - A reflective critique on generative AI's current and future impacts. [Comments](https://lobste.rs/s/rzskjk/i_think_i_m_done_thinking_about_genai_for)

* [Differences in link hallucination and source comprehension across different LLM](https://mikecaulfield.substack.com/p/differences-in-link-hallucination) - Exploring discrepancies in AI-generated information accuracy and source understanding. [Comments](https://news.ycombinator.com/item?id=44188068)

* [OpenAI slams court order to save all ChatGPT logs, including deleted chats](https://arstechnica.com/tech-policy/2025/06/openai-says-court-forcing-it-to-save-all-chatgpt-logs-is-a-privacy-nightmare/) - Insights into legal challenges surrounding AI data retention and privacy concerns. [Comments](https://news.ycombinator.com/item?id=44185913)

## Cybersecurity and Privacy

* [Chinese Hacked US Telecom a Year Before Known Wireless Breaches](https://it.slashdot.org/story/25/06/05/0023243/chinese-hacked-us-telecom-a-year-before-known-wireless-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Revelations of undiscovered cyber-intrusions emphasize persistent vulnerabilities in critical infrastructure. [Comments](https://news.ycombinator.com/item?id=44188186)

* [Tesla seeks to guard crash data from public disclosure](https://www.reuters.com/legal/government/musks-tesla-seeks-guard-crash-data-public-disclosure-2025-06-04/) - Tesla's bid to balance transparency with data privacy in crash incidents. [Comments](https://news.ycombinator.com/item?id=44186780)

## Corporate and Regulatory Developments

* [Apple Must Pay 500M Euro Digital Markets Act Fine by July 26](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss) - European regulators assert authority with a massive fine against Apple under the DMA. [Comments](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss)

* [Reddit Sues AI Startup Anthropic For Breach of Contract, 'Unfair Competition'](https://yro.slashdot.org/story/25/06/04/1827213/reddit-sues-ai-startup-anthropic-for-breach-of-contract-unfair-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal dispute over AI utilization underscores evolving tensions between platforms and AI firms. [Comments](https://news.ycombinator.com/item?id=44185256)

## Scientific and Environmental Breakthroughs

* [Making Magnesium From Sea Water](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss) - Scientists discover a sustainable method to harvest magnesium from seawater, promising environmental benefits. [Comments](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss)

* [Scientists in Japan Develop Plastic That Dissolves in Seawater Within Hours](https://science.slashdot.org/story/25/06/04/1718212/scientists-in-japan-develop-plastic-that-dissolves-in-seawater-within-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Addressing ocean pollution with innovative biodegradable plastic technology. [Comments](https://news.ycombinator.com/item?id=44181613)

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

* [2025-06-05, 06:32:02](https://lobste.rs/s/kg1gsg/storing_arbitrary_data_pokemon_emerald) - [Storing arbitrary data in pokemon emerald](https://sardap.github.io/mon-fs/)
* [2025-06-05, 06:13:51](https://lobste.rs/s/rzskjk/i_think_i_m_done_thinking_about_genai_for) - [I Think I’m Done Thinking About genAI For Now](https://blog.glyph.im/2025/06/i-think-im-done-thinking-about-genai-for-now.html)
* [2025-06-05, 05:36:59](https://lobste.rs/s/7gdg55/llms_elixir_windfall_deathblow) - [LLMs &amp; Elixir: Windfall or Deathblow?](https://www.zachdaniel.dev/p/llms-and-elixir-windfall-or-deathblow)
* [2025-06-05, 04:30:00](https://tech.slashdot.org/story/25/06/05/0424214/metas-push-into-defense-tech-reflects-cultural-shift-cto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Push Into Defense Tech Reflects Cultural Shift, CTO Says](https://tech.slashdot.org/story/25/06/05/0424214/metas-push-into-defense-tech-reflects-cultural-shift-cto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss) - [Apple Must Pay 500M Euro Digital Markets Act Fine by July 26](https://soylentnews.org/article.pl?sid=25/06/04/0117248&amp;from=rss)
* [2025-06-05, 04:00:24](https://news.ycombinator.com/item?id=44188204) - [Old payphones get new life, thanks to Vermont engineer](https://www.core77.com/posts/137183/Engineer-Fixes-and-Re-Installs-Old-Payphones-Provides-Free-Calls-to-the-Public)
* [2025-06-05, 03:56:43](https://news.ycombinator.com/item?id=44188186) - [Modeling land value taxes](https://progressandpoverty.substack.com/p/want-to-model-a-land-value-tax-shift)
* [2025-06-05, 03:30:00](https://it.slashdot.org/story/25/06/05/0023243/chinese-hacked-us-telecom-a-year-before-known-wireless-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Hacked US Telecom a Year Before Known Wireless Breaches](https://it.slashdot.org/story/25/06/05/0023243/chinese-hacked-us-telecom-a-year-before-known-wireless-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 03:27:47](https://news.ycombinator.com/item?id=44188068) - [Differences in link hallucination and source comprehension across different LLM](https://mikecaulfield.substack.com/p/differences-in-link-hallucination)
* [2025-06-05, 02:05:33](https://news.ycombinator.com/item?id=44187645) - [Show HN: I made a 3D SVG Renderer that projects textures without rasterization](https://seve.blog/p/i-made-a-3d-svg-renderer-that-projects)
* [2025-06-05, 01:13:14](https://news.ycombinator.com/item?id=44187336) - [Is This the End or the Beginning?](https://lichess.org/@/MeTooSlow/blog/is-this-the-end-or-the-beginning/9aJj08zM)
* [2025-06-05, 00:45:00](https://apple.slashdot.org/story/25/06/05/003221/apples-attempt-to-pause-app-store-antitrust-order-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Attempt To Pause App Store Antitrust Order Fails](https://apple.slashdot.org/story/25/06/05/003221/apples-attempt-to-pause-app-store-antitrust-order-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-05, 00:41:32](https://lobste.rs/s/mwigo2/how_let_s_encrypt_reduced_impact_zombie) - [How Let’s Encrypt reduced the impact of zombie clients](https://letsencrypt.org/2025/06/04/how-we-reduced-the-impact-of-zombie-clients/)
* [2025-06-05, 00:02:00](https://news.slashdot.org/story/25/06/04/222206/whip-muxer-merged-to-ffmpeg-for-sub-second-latency-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WHIP Muxer Merged To FFmpeg For Sub-Second Latency Streaming](https://news.slashdot.org/story/25/06/04/222206/whip-muxer-merged-to-ffmpeg-for-sub-second-latency-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 23:40:47](https://news.ycombinator.com/item?id=44186780) - [Tesla seeks to guard crash data from public disclosure](https://www.reuters.com/legal/government/musks-tesla-seeks-guard-crash-data-public-disclosure-2025-06-04/)
* [2025-06-04, 23:33:41](https://news.ycombinator.com/item?id=44186736) - [Authentication with Axum](https://mattrighetti.com/2025/05/03/authentication-with-axum)
* [2025-06-04, 23:30:00](https://soylentnews.org/article.pl?sid=25/06/04/0110238&amp;from=rss) - [In North Korea, Your Phone Secretly Takes Screenshots Every 5 Minutes for Government Surveillance](https://soylentnews.org/article.pl?sid=25/06/04/0110238&amp;from=rss)
* [2025-06-04, 23:22:07](https://news.ycombinator.com/item?id=44186660) - [A Spiral Structure in the Inner Oort Cloud](https://iopscience.iop.org/article/10.3847/1538-4357/adbf9b)
* [2025-06-04, 23:20:00](https://news.slashdot.org/story/25/06/04/2154206/american-science-surplus-is-fighting-for-its-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Science &amp;amp; Surplus Is Fighting For Its Life](https://news.slashdot.org/story/25/06/04/2154206/american-science-surplus-is-fighting-for-its-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 23:15:48](https://news.ycombinator.com/item?id=44186607) - [Not all tokens are meant to be forgotten](https://arxiv.org/abs/2506.03142)
* [2025-06-04, 23:05:32](https://news.ycombinator.com/item?id=44186536) - [parrot.live](https://github.com/hugomd/parrot.live)
* [2025-06-04, 23:00:35](https://news.ycombinator.com/item?id=44186496) - [LLMs and Elixir: Windfall or Deathblow?](https://www.zachdaniel.dev/p/llms-and-elixir-windfall-or-deathblow)
* [2025-06-04, 22:40:00](https://yro.slashdot.org/story/25/06/04/2135246/apple-gave-governments-data-on-thousands-of-push-notifications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Gave Governments Data On Thousands of Push Notifications](https://yro.slashdot.org/story/25/06/04/2135246/apple-gave-governments-data-on-thousands-of-push-notifications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 22:35:56](https://news.ycombinator.com/item?id=44186284) - [PromptArmor (YC W24) Is Hiring in San Francisco](https://www.ycombinator.com/companies/promptarmor/jobs/hZ3xFlj-founding-engineer-full-stack)
* [2025-06-04, 22:02:00](https://slashdot.org/story/25/06/04/2128246/dreamworks-co-founder-katzenberg-likens-ai-to-cgi-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DreamWorks Co-Founder Katzenberg Likens AI To CGI Revolution](https://slashdot.org/story/25/06/04/2128246/dreamworks-co-founder-katzenberg-likens-ai-to-cgi-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 21:55:35](https://lobste.rs/s/n22g02/redesigned_swift_org_is_now_live) - [Redesigned Swift.org is now live](https://www.swift.org/blog/redesigned-swift-org-is-now-live/)
* [2025-06-04, 21:47:33](https://news.ycombinator.com/item?id=44185913) - [OpenAI slams court order to save all ChatGPT logs, including deleted chats](https://arstechnica.com/tech-policy/2025/06/openai-says-court-forcing-it-to-save-all-chatgpt-logs-is-a-privacy-nightmare/)
* [2025-06-04, 21:38:27](https://news.ycombinator.com/item?id=44185836) - [Comparing Claude System Prompts Reveal Anthropic&apos;s Priorities](https://www.dbreunig.com/2025/06/03/comparing-system-prompts-across-claude-versions.html)
* [2025-06-04, 21:26:00](https://tech.slashdot.org/story/25/06/04/2124235/microsofts-linkedin-chief-is-now-running-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s LinkedIn Chief Is Now Running Office](https://tech.slashdot.org/story/25/06/04/2124235/microsofts-linkedin-chief-is-now-running-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 20:40:00](https://yro.slashdot.org/story/25/06/04/2039245/openai-slams-court-order-to-save-all-chatgpt-logs-including-deleted-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Slams Court Order To Save All ChatGPT Logs, Including Deleted Chats](https://yro.slashdot.org/story/25/06/04/2039245/openai-slams-court-order-to-save-all-chatgpt-logs-including-deleted-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 20:39:53](https://news.ycombinator.com/item?id=44185256) - [Cursor 1.0](https://www.cursor.com/en/changelog/1-0)
* [2025-06-04, 20:24:07](https://news.ycombinator.com/item?id=44185078) - [Amelia Earhart&apos;s Reckless Final Flights](https://www.newyorker.com/magazine/2025/06/09/amelia-earharts-reckless-final-flights)
* [2025-06-04, 20:08:56](https://lobste.rs/s/wcnixg/why_i_wrote_beam_book) - [Why I Wrote the BEAM Book](https://happihacking.com/blog/posts/2025/why_I_wrote_theBEAMBook/)
* [2025-06-04, 20:03:43](https://news.ycombinator.com/item?id=44184900) - [Autonomous drone defeats human champions in racing first](https://www.tudelft.nl/en/2025/lr/autonomous-drone-from-tu-delft-defeats-human-champions-in-historic-racing-first)
* [2025-06-04, 19:59:51](https://news.ycombinator.com/item?id=44184861) - [Ada and SPARK enter the automotive ISO-26262 market with Nvidia](https://www.adacore.com/press/ada-and-spark-enter-the-automotive-iso-26262-market-with-nvidia)
* [2025-06-04, 19:51:24](https://lobste.rs/s/i1yexk/gg_gg_gui_for_jj) - [gg: GG - Gui for JJ](https://github.com/gulbanana/gg)
* [2025-06-04, 18:50:00](https://yro.slashdot.org/story/25/06/04/1827213/reddit-sues-ai-startup-anthropic-for-breach-of-contract-unfair-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Sues AI Startup Anthropic For Breach of Contract, &apos;Unfair Competition&apos;](https://yro.slashdot.org/story/25/06/04/1827213/reddit-sues-ai-startup-anthropic-for-breach-of-contract-unfair-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/03/1645240&amp;from=rss) - [Trust, Attitudes and Use of Artificial Intelligence 2025](https://soylentnews.org/article.pl?sid=25/06/03/1645240&amp;from=rss)
* [2025-06-04, 18:29:46](https://news.ycombinator.com/item?id=44183923) - [Apple Notes Expected to Gain Markdown Support in iOS 26](https://www.macrumors.com/2025/06/04/apple-notes-rumored-markdown-support-ios-26/)
* [2025-06-04, 18:20:00](https://tech.slashdot.org/story/25/06/04/186206/kde-targets-windows-10-exiles-claiming-your-computer-is-toast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Targets Windows 10 &apos;Exiles&apos; Claiming &apos;Your Computer is Toast&apos;](https://tech.slashdot.org/story/25/06/04/186206/kde-targets-windows-10-exiles-claiming-your-computer-is-toast?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 18:15:54](https://news.ycombinator.com/item?id=44183799) - [A proposal to restrict sites from accessing a users’ local network](https://github.com/explainers-by-googlers/local-network-access)
* [2025-06-04, 17:57:15](https://news.ycombinator.com/item?id=44183591) - [The iPhone 15 Pro’s Depth Maps](https://tech.marksblogg.com/apple-iphone-15-pro-depth-map-heic.html)
* [2025-06-04, 17:43:52](https://lobste.rs/s/w1mesk/streams_as_web_resources_with_access) - [Streams as web resources with access controls](https://s2.dev/blog/access-control)
* [2025-06-04, 17:30:00](https://science.slashdot.org/story/25/06/04/1718212/scientists-in-japan-develop-plastic-that-dissolves-in-seawater-within-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists in Japan Develop Plastic That Dissolves in Seawater Within Hours](https://science.slashdot.org/story/25/06/04/1718212/scientists-in-japan-develop-plastic-that-dissolves-in-seawater-within-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 16:57:38](https://lobste.rs/s/fjbrrg/goblinville_spring_lisp_game_jam_2025) - [Goblinville: A Spring Lisp Game Jam 2025 retrospective](https://spritely.institute/news/goblinville-a-spring-lisp-game-jam-2025-retrospective.html)
* [2025-06-04, 16:54:00](https://it.slashdot.org/story/25/06/04/1654250/fake-it-support-calls-hit-20-orgs-end-in-stolen-salesforce-data-and-extortion-google-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake IT Support Calls Hit 20 Orgs, End in Stolen Salesforce Data and Extortion, Google Warns](https://it.slashdot.org/story/25/06/04/1654250/fake-it-support-calls-hit-20-orgs-end-in-stolen-salesforce-data-and-extortion-google-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 16:46:24](https://news.ycombinator.com/item?id=44182698) - [When memory was measured in kilobytes: The art of efficient vision](https://www.softwareheritage.org/2025/06/04/history_computer_vision/)
* [2025-06-04, 16:44:07](https://lobste.rs/s/oscxsk/when_memory_was_measured_kilobytes_art) - [When memory was measured in kilobytes: The art of efficient vision](https://www.softwareheritage.org/2025/06/04/history_computer_vision/)
* [2025-06-04, 16:31:51](https://lobste.rs/s/33mhv3/dejagnu_2011) - [DejaGNU (2011)](https://www.airs.com/blog/archives/499/)
* [2025-06-04, 16:16:39](https://news.ycombinator.com/item?id=44182356) - [IRS Direct File on GitHub](https://chrisgiven.com/2025/05/direct-file-on-github/)
* [2025-06-04, 16:00:52](https://news.ycombinator.com/item?id=44182206) - [Show HN: GPT image editing, but for 3D models](https://www.adamcad.com/)
* [2025-06-04, 15:58:57](https://news.ycombinator.com/item?id=44182188) - [Prompt engineering playbook for programmers](https://addyo.substack.com/p/the-prompt-engineering-playbook-for)
* [2025-06-04, 15:58:50](https://news.ycombinator.com/item?id=44182186) - [FFmpeg merges WebRTC support](https://git.ffmpeg.org/gitweb/ffmpeg.git/commit/167e343bbe75515a80db8ee72ffa0c607c944a00)
* [2025-06-04, 15:58:36](https://news.ycombinator.com/item?id=44182184) - [How we reduced the impact of zombie clients](https://letsencrypt.org/2025/06/04/how-we-reduced-the-impact-of-zombie-clients/)
* [2025-06-04, 15:57:58](https://lobste.rs/s/tlvaia/how_reladiff_works_journey_through) - [How Reladiff Works - A Journey Through the Challenges and Techniques of Data Engineering with SQL](https://eshsoft.com/blog/how-reladiff-works)
* [2025-06-04, 15:43:00](https://slashdot.org/story/25/06/04/1543234/chatgpt-adds-enterprise-cloud-integrations-for-dropbox-box-onedrive-google-drive-meeting-transcription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Adds Enterprise Cloud Integrations For Dropbox, Box, OneDrive, Google Drive, Meeting Transcription](https://slashdot.org/story/25/06/04/1543234/chatgpt-adds-enterprise-cloud-integrations-for-dropbox-box-onedrive-google-drive-meeting-transcription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 15:22:00](https://entertainment.slashdot.org/story/25/06/04/1519210/hollywood-already-uses-generative-ai-and-is-hiding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Already Uses Generative AI (And Is Hiding It)](https://entertainment.slashdot.org/story/25/06/04/1519210/hollywood-already-uses-generative-ai-and-is-hiding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 15:21:22](https://news.ycombinator.com/item?id=44181700) - [A practical guide to building agents [pdf]](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
* [2025-06-04, 15:15:33](https://news.ycombinator.com/item?id=44181613) - [AGI is not multimodal](https://thegradient.pub/agi-is-not-multimodal/)
* [2025-06-04, 14:21:33](https://lobste.rs/s/vmdggh/jujutsu_v0_30_0_released) - [jujutsu v0.30.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.30.0)
* [2025-06-04, 14:04:39](https://lobste.rs/s/6wvdsr/no_more_shading_languages_compiling_c) - [No More Shading Languages: Compiling C++ to Vulkan Shaders](https://xol.io/random/vcc-paper.pdf)
* [2025-06-04, 14:04:00](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss) - [Model Context Protocol (MCP): What It is and Why It Matters](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss)
* [2025-06-04, 13:54:49](https://lobste.rs/s/qegkfj/days_since_last_rust_minecraft_server) - [Days since last Rust Minecraft server](https://dayssincelastrustmcserver.com/)
* [2025-06-04, 12:32:32](https://lobste.rs/s/honikk/yet_another_llm) - [yet another LLM](https://www.yetanotherllm.com/)
* [2025-06-04, 11:31:38](https://lobste.rs/s/mokfrm/experimenting_with_no_build_web) - [Experimenting with no-build Web Applications](https://andregarzia.com/2025/06/experimenting-with-no-build-web-applications.html)
* [2025-06-04, 11:27:06](https://lobste.rs/s/uqds7a/distance_based_isa_for_efficient) - [Distance-Based ISA for Efficient Register Management](https://www.sigarch.org/distance-based-isa-for-efficient-register-management/)
* [2025-06-04, 10:36:49](https://news.ycombinator.com/item?id=44179257) - [Why I wrote the BEAM book](https://happihacking.com/blog/posts/2025/why_I_wrote_theBEAMBook/)
* [2025-06-04, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss) - [Fire Safety Concerns Spark New Battery Rules on Flights](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss)
* [2025-06-04, 09:11:04](https://lobste.rs/s/n2lvmy/ai_changes_everything) - [AI Changes Everything](https://lucumr.pocoo.org/2025/6/4/changes/)
* [2025-06-04, 08:38:32](https://lobste.rs/s/uwp2hd/what_s_your_go_message_queue_2025) - [What&apos;s your go-to message queue in 2025?](https://lobste.rs/s/uwp2hd/what_s_your_go_message_queue_2025)
* [2025-06-04, 05:04:36](https://lobste.rs/s/ph75m1/physicality_new_age_ui) - [Physicality: the new age of UI](https://www.lux.camera/physicality-the-new-age-of-ui/)
* [2025-06-04, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss) - [Making Magnesium From Sea Water](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss)
* [2025-06-04, 00:51:43](https://lobste.rs/s/j9yk3n/diffx_next_generation_extensible_diff) - [DiffX - Next-Generation Extensible Diff Format](https://diffx.org/)
* [2025-06-03, 23:47:00](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss) - [Texas Right To Repair Bill Passes, Heads To The Governor’s Desk](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss)
* [2025-06-03, 20:33:36](https://lobste.rs/s/joubld/jujutsu_on_tangled) - [jujutsu on tangled](https://blog.tangled.sh/stacking)
* [2025-06-03, 19:02:00](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss) - [The Workers Who Lost Their Jobs To AI](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss)
* [2025-06-03, 16:45:21](https://lobste.rs/s/xyhnvt/on_no_syntactic_support_for_error) - [[ On | No ] syntactic support for error handling](https://go.dev/blog/error-syntax)
* [2025-06-03, 16:39:47](https://lobste.rs/s/vymkqm/don_t_mcblock_me) - [Don&apos;t McBlock me](https://www.schneems.com/2025/06/03/dont-mcblock-me/)
* [2025-06-03, 14:17:00](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss) - [China To Ease Rare Earth Export Restrictions To Benefit Domestic And European Semiconductor Firms](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss)
* [2025-06-03, 13:57:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss) - [Mount Etna Erupts as Large Plumes Rise From Italian Volcano](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss)
* [2025-06-03, 09:30:00](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss) - [Mysterious Leaker Outs Conti Ransomware Kingpins](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss)
* [2025-06-03, 04:42:00](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss) - [Leprosy Was in the Americas Long Before the Arrival of Europeans](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss)
* [2025-06-02, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss) - [Intel Wins Crucial Verdict in Legal Fight Against Patent Troll VLSI](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss)
* [2025-06-02, 19:10:00](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss) - [120 Court Cases Have Been Caught With AI Hallucinations, According to New Database](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss)
* [2025-06-02, 14:24:00](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)
* [2025-06-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) - [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss)
* [2025-06-02, 05:00:00](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss) - [Malware Reverse Engineering - Unraveling the Secrets of Encryption in Malware](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss)
* [2025-06-02, 00:16:00](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss) - [New JWST Observations of &apos;Trans-Neptunian Objects&apos; Could Help Reveal Our Solar System&apos;s Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)
* [2025-06-01, 21:00:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss) - [NOAA Issues a &apos;Severe&apos; Solar Storm Alert, Auroras Expected at Lower Latitudes](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss)
* [2025-06-01, 19:34:00](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss) - [Using HDMI EMI for Fast Wireless Data Transfer](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss)
* [2025-06-01, 14:48:00](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss) - [Victoria&apos;s Secret Website Laid Bare For Three Days After &apos;Security Incident&apos;](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss)
* [2025-06-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss) - [Trump Proposes Huge Reduction in National Science Foundation Funding](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss)
* [2025-06-01, 05:18:00](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss) - [Gallery Showcases The Dustiest, Grimiest PCs In Germany - 400 Images Of Fascinating Horror](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss)
* [2025-06-01, 00:33:00](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss) - [China Hygon And Sugon Merge To Form Vertically Integrated Supercomputing Giant Against US Sanctions](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss)
