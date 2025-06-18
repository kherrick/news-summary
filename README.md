# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Facebook Now Supports Passkeys](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Facebook integrates passkeys, marking a significant step in enhancing user authentication.

* [Google's Frighteningly Good Veo 3 AI Videos To Be Integrated With YouTube Shorts](https://news.slashdot.org/story/25/06/18/197203/googles-frighteningly-good-veo-3-ai-videos-to-be-integrated-with-youtube-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's breakthrough Veo 3 AI will cater to YouTube creators with enriched short video generation capabilities.

* [The Zed Debugger is Here](https://zed.dev/blog/debugger) - Zed steps up developer tools with a new debugging platform designed for workflow efficiency.

## Robotics and AI

* [Waymo's Robotaxis Are Coming Back to New York City](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Waymo reintroduces autonomous taxis in NYC, advancing urban mobility solutions.

* [Ink and Switch's BeeKEM protocol explained](https://meri.garden/a-deep-dive-explainer-on-beekem-protocol/) - A detailed exploration of BeeKEM, shedding light on cryptographic advancements.

* [LLM Agents Are Breaking Your Platform, Not Your Architecture](https://www.junctionlabs.io/blog/llm-agents-are-breaking-your-platform-not-your-architecture) - Examining the disruptive impact of LLM agents on software platforms.

## Programming and Software Development

* [Lisp: Icing or Cake?](https://dthompson.us/posts/lisp-icing-or-cake.html) - An introspective piece delving into Lisp's role in programming.

* [Analysing Rust Crates For Weekend vs Weekday Downloads](https://boydkane.com/projects/crates-download-ratio) - An intriguing analysis on developer usage patterns for Rust crates.

* [Building JSON on the Command Line is Obnoxious](https://blog.stulta.dev/posts/annoying_json/) - A critical take on CLI development for constructing JSON outputs.

## Science and Academia

* [Nature Journal Mandates Public Peer Review For All New Research Papers](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A transformative move by Nature to increase transparency in scientific discourse.

* [Revisiting Minsky's Society of Mind in 2025](https://suthakamal.substack.com/p/revisiting-minskys-society-of-mind) - Reflecting on Minsky's seminal work on AI and its present-day interpretations.

* [Writing Documentation for AI: Best Practices](https://docs.kapa.ai/improving/writing-best-practices) - A practical guide for crafting effective AI system documentation.

## Cybersecurity and Privacy

* [British Watchdog Cracks Down on Data Collection by Smart TVs, Speakers And Air Fryers](https://yro.slashdot.org/story/25/06/18/152236/british-watchdog-cracks-down-on-data-collection-by-smart-tvs-speakers-and-air-fryers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Oversight on home device privacy with stricter data handling guidelines.

* [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - Highlighting vulnerabilities in air-gapped systems exploited via smartwatches.

## Business and Industry Trends

* [Microsoft Planning Thousands More Job Cuts Aimed at Salespeople](https://it.slashdot.org/story/25/06/18/1855243/microsoft-planning-thousands-more-job-cuts-aimed-at-salespeople?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Layoffs continue at Microsoft, affecting sales departments.

* [DC Studios Chief Says Movie Industry Is 'Dying,' Claims Disney 'Killed' Marvel With Output Mandates](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Industry insights into Hollywood's creative challenges.

## Unique and Curious Explorations

* [PWM flicker: Invisible light that's harming our health?](https://caseorganic.medium.com/the-invisible-light-thats-harming-our-health-and-how-we-can-light-things-better-d3916de90521) - Examining the health consequences of LED flickering.

* [I counted all of the yurts in Mongolia using machine learning](https://monroeclinton.com/counting-all-yurts-in-mongolia/) - A novel use of machine learning for geographic data analysis.

* [Game Hacking – Valve Anti-Cheat (VAC)](https://codeneverdies.github.io/posts/gh-2/) - An intriguing dive into bypassing Valve's anti-cheat systems.

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

* [2025-06-18, 21:20:00](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Now Supports Passkeys](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 21:08:20](https://lobste.rs/s/5moehg/quick_notes_on_brief_agentic_coding) - [Quick notes on a brief agentic coding experience](https://olano.dev/blog/agentic-coding-experience/)
* [2025-06-18, 20:40:00](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo&apos;s Robotaxis Are Coming Back to New York City](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 20:16:53](https://lobste.rs/s/ncg3v3/lisp_icing_cake) - [Lisp: Icing or Cake?](https://dthompson.us/posts/lisp-icing-or-cake.html)
* [2025-06-18, 20:00:00](https://news.slashdot.org/story/25/06/18/197203/googles-frighteningly-good-veo-3-ai-videos-to-be-integrated-with-youtube-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Frighteningly Good Veo 3 AI Videos To Be Integrated With YouTube Shorts](https://news.slashdot.org/story/25/06/18/197203/googles-frighteningly-good-veo-3-ai-videos-to-be-integrated-with-youtube-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 19:38:23](https://lobste.rs/s/qgmjfe/gcc_glibc_stack_unwinding_relocations) - [GCC, glibc, stack unwinding and relocations – A war story](https://blog.sergiodj.net/posts/gcc-glibc-stack-unwinding-relocations-bug/)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 19:22:00](https://it.slashdot.org/story/25/06/18/1855243/microsoft-planning-thousands-more-job-cuts-aimed-at-salespeople?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Planning Thousands More Job Cuts Aimed at Salespeople](https://it.slashdot.org/story/25/06/18/1855243/microsoft-planning-thousands-more-job-cuts-aimed-at-salespeople?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 18:41:00](https://news.slashdot.org/story/25/06/18/1759205/boeing-787s-emergency-power-system-likely-active-before-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing 787&apos;s Emergency-Power System Likely Active Before Air India Crash](https://news.slashdot.org/story/25/06/18/1759205/boeing-787s-emergency-power-system-likely-active-before-air-india-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 18:11:35](https://lobste.rs/s/tdlede/deep_dive_explainer_on_ink_switch_s_beekem) - [A deep-dive explainer on Ink and Switch&apos;s BeeKEM protocol](https://meri.garden/a-deep-dive-explainer-on-beekem-protocol/)
* [2025-06-18, 18:00:00](https://mobile.slashdot.org/story/25/06/18/1640225/nfc-release-15-extends-tap-to-pay-range-from-05cm-to-2cm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NFC Release 15 Extends Tap-to-Pay Range From 0.5cm To 2cm](https://mobile.slashdot.org/story/25/06/18/1640225/nfc-release-15-extends-tap-to-pay-range-from-05cm-to-2cm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 17:57:32](https://lobste.rs/s/rwbtwd/zed_debugger_is_here) - [The Zed Debugger is Here](https://zed.dev/blog/debugger)
* [2025-06-18, 17:32:00](https://news.ycombinator.com/item?id=44311781) - [PWM flicker: Invisible light that&apos;s harming our health?](https://caseorganic.medium.com/the-invisible-light-thats-harming-our-health-and-how-we-can-light-things-better-d3916de90521)
* [2025-06-18, 17:31:25](https://news.ycombinator.com/item?id=44311776) - [Yes I Will Read Ulysses Yes](https://www.theatlantic.com/magazine/archive/2025/07/zachary-leader-richard-ellmann-james-joyce-review/682907/)
* [2025-06-18, 17:26:22](https://lobste.rs/s/mwdh7t/analysing_rust_crates_for_weekend) - [Analysing Rust crates for weekend (hobbyist) vs weekday (working-dev) downloads](https://boydkane.com/projects/crates-download-ratio)
* [2025-06-18, 17:20:00](https://games.slashdot.org/story/25/06/18/174256/xbox-president-were-working-to-ensure-windows-is-the-number-one-platform-for-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox President: We&apos;re Working To Ensure Windows Is the Number One Platform For Gaming](https://games.slashdot.org/story/25/06/18/174256/xbox-president-were-working-to-ensure-windows-is-the-number-one-platform-for-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 17:19:31](https://news.ycombinator.com/item?id=44311682) - [Game Hacking – Valve Anti-Cheat (VAC)](https://codeneverdies.github.io/posts/gh-2/)
* [2025-06-18, 17:00:36](https://news.ycombinator.com/item?id=44311538) - [Attimet (YC F24) – Quant Trading Research Lab – Is Hiring Founding Engineer](https://www.ycombinator.com/companies/attimet/jobs/b1w9pjE-founding-engineer)
* [2025-06-18, 16:56:18](https://news.ycombinator.com/item?id=44311509) - [Andrej Karpathy&apos;s YC AI SUS talk on the future of the industry](https://www.donnamagi.com/articles/karpathy-yc-talk)
* [2025-06-18, 16:40:00](https://news.slashdot.org/story/25/06/18/1550243/insurers-want-businesses-to-wake-up-to-costs-of-extreme-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Insurers Want Businesses to Wake Up to Costs of Extreme Heat](https://news.slashdot.org/story/25/06/18/1550243/insurers-want-businesses-to-wake-up-to-costs-of-extreme-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 16:26:35](https://news.ycombinator.com/item?id=44311241) - [The unreasonable effectiveness of fuzzing for porting programs](https://rjp.io/blog/2025-06-17-unreasonable-effectiveness-of-fuzzing)
* [2025-06-18, 16:23:46](https://news.ycombinator.com/item?id=44311217) - [Writing documentation for AI: best practices](https://docs.kapa.ai/improving/writing-best-practices)
* [2025-06-18, 16:01:00](https://yro.slashdot.org/story/25/06/18/152236/british-watchdog-cracks-down-on-data-collection-by-smart-tvs-speakers-and-air-fryers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Watchdog Cracks Down on Data Collection by Smart TVs, Speakers And Air Fryers](https://yro.slashdot.org/story/25/06/18/152236/british-watchdog-cracks-down-on-data-collection-by-smart-tvs-speakers-and-air-fryers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 15:50:01](https://lobste.rs/s/skgrlr/llm_agents_are_breaking_your_platform_not) - [LLM Agents Are Breaking Your Platform, Not Your Architecture](https://www.junctionlabs.io/blog/llm-agents-are-breaking-your-platform-not-your-architecture)
* [2025-06-18, 15:49:53](https://news.ycombinator.com/item?id=44310944) - [My iPhone 8 Refuses to Die: Now It&apos;s a Solar-Powered Vision OCR Server](https://terminalbytes.com/iphone-8-solar-powered-vision-ocr-server/)
* [2025-06-18, 15:40:12](https://news.ycombinator.com/item?id=44310851) - [Revisiting Minsky&apos;s Society of Mind in 2025](https://suthakamal.substack.com/p/revisiting-minskys-society-of-mind)
* [2025-06-18, 15:38:15](https://news.ycombinator.com/item?id=44310834) - [Building agents using streaming SQL queries](https://www.morling.dev/blog/this-ai-agent-should-have-been-sql-query/)
* [2025-06-18, 15:22:49](https://lobste.rs/s/boq7tt/cock_li_email_provider_data_leak_from) - [Cock.li email provider data leak from roundcube](https://mail.cock.li/)
* [2025-06-18, 15:22:00](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Journal Mandates Public Peer Review For All New Research Papers](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 15:20:05](https://news.ycombinator.com/item?id=44310678) - [Show HN: I built a tensor library from scratch in C++/CUDA](https://github.com/nirw4nna/dsc)
* [2025-06-18, 15:09:34](https://news.ycombinator.com/item?id=44310583) - [Framework Laptop 12 review](https://arstechnica.com/gadgets/2025/06/framework-laptop-12-review-im-excited-to-see-what-the-2nd-generation-looks-like/)
* [2025-06-18, 15:06:53](https://lobste.rs/s/lalc7r/moving_on_from_nix) - [Moving on from Nix](https://carlosbecker.com/posts/bye-nix/)
* [2025-06-18, 14:55:25](https://lobste.rs/s/3mz0b9/getting_lustre_upstream) - [Getting Lustre upstream](https://lwn.net/SubscriberLink/1025268/1d60e7f20fcd5bc2/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:44:00](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Will Air Traditional TV Channels in France](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 14:00:00](https://slashdot.org/story/25/06/18/1245216/the-biggest-companies-across-america-are-cutting-their-workforces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Biggest Companies Across America Are Cutting Their Workforces](https://slashdot.org/story/25/06/18/1245216/the-biggest-companies-across-america-are-cutting-their-workforces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 13:52:15](https://news.ycombinator.com/item?id=44309891) - [Show HN: Trieve CLI – Terminal-based LLM agent loop with search tool for PDFs](https://github.com/devflowinc/trieve/tree/main/clients/cli)
* [2025-06-18, 13:49:12](https://lobste.rs/s/h08v9z/plight_misunderstood_memory_ordering) - [The plight of the misunderstood memory ordering](https://www.grayolson.me/blog/posts/misunderstood-memory-ordering/)
* [2025-06-18, 13:00:00](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC Studios Chief Says Movie Industry Is &apos;Dying,&apos; Claims Disney &apos;Killed&apos; Marvel With Output Mandates](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 12:59:58](https://news.ycombinator.com/item?id=44309520) - [Homomorphically Encrypting CRDTs](https://jakelazaroff.com/words/homomorphically-encrypted-crdts/)
* [2025-06-18, 12:33:49](https://news.ycombinator.com/item?id=44309320) - [Show HN: Workout.cool – Open-source fitness coaching platform](https://github.com/Snouzy/workout-cool)
* [2025-06-18, 12:26:24](https://lobste.rs/s/ydsjiy/shadow_browser_engine_from_scratch) - [Shadow: A browser engine from scratch in Javascript](https://shadow.goose.icu)
* [2025-06-18, 11:03:04](https://lobste.rs/s/8ragze/hammurabi_rust_recreation_classic_1968) - [hammurabi: A Rust recreation of the classic 1968 BASIC game](https://github.com/stjepangolemac/hammurabi)
* [2025-06-18, 11:01:00](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Altman Says Meta Targeting OpenAI Staff With $100 Million Bonuses as AI Race Intensifies](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 10:53:59](https://news.ycombinator.com/item?id=44308711) - [Is there a half-life for the success rates of AI agents?](https://www.tobyord.com/writing/half-life)
* [2025-06-18, 10:31:44](https://news.ycombinator.com/item?id=44308558) - [Terpstra Keyboard](http://terpstrakeyboard.com/web-app/keys.htm)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 09:00:00](https://it.slashdot.org/story/25/06/18/0227224/microsoft-is-calling-too-many-things-copilot-watchdog-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Calling Too Many Things &apos;Copilot,&apos; Watchdog Says](https://it.slashdot.org/story/25/06/18/0227224/microsoft-is-calling-too-many-things-copilot-watchdog-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 08:53:22](https://lobste.rs/s/ajv5qd/programming_language_design_era_llms) - [Programming Language Design in the Era of LLMs: A Return to Mediocrity?](https://kirancodes.me/posts/log-lang-design-llms.html)
* [2025-06-18, 07:58:18](https://news.ycombinator.com/item?id=44307629) - [I counted all of the yurts in Mongolia using machine learning](https://monroeclinton.com/counting-all-yurts-in-mongolia/)
* [2025-06-18, 06:53:34](https://news.ycombinator.com/item?id=44307290) - [MiniMax-M1 open-weight, large-scale hybrid-attention reasoning model](https://github.com/MiniMax-AI/MiniMax-M1)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 05:16:12](https://news.ycombinator.com/item?id=44306859) - [Scrappy – Make little apps for you and your friends](https://pontus.granstrom.me/scrappy/)
* [2025-06-18, 04:58:53](https://news.ycombinator.com/item?id=44306792) - [Locally hosting an internet-connected server](https://mjg59.dreamwidth.org/72095.html)
* [2025-06-18, 04:24:56](https://lobste.rs/s/imjzlb/why_i_won_t_use_ai) - [Why I Won&apos;t Use AI](https://agentultra.com/blog/why-i-wont-use-ai/index.html)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-18, 00:14:02](https://lobste.rs/s/cy2x77/building_json_on_command_line_is) - [Building JSON on the Command Line is Obnoxious](https://blog.stulta.dev/posts/annoying_json/)
* [2025-06-17, 22:37:56](https://lobste.rs/s/dybgho/monads_are_not_like_burritos) - [Monads are not like burritos](https://byorgey.github.io/blog/posts/2025/06/16/monads-are-not-burritos.html)
* [2025-06-17, 21:01:41](https://lobste.rs/s/i4cjur/kicad_wayland_support) - [KiCad and Wayland Support](https://www.kicad.org/blog/2025/06/KiCad-and-Wayland-Support/)
* [2025-06-17, 20:48:04](https://lobste.rs/s/jamcvc/resurrecting_dead_torrent_tracker) - [Resurrecting a dead torrent tracker and finding 3 million peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 20:24:36](https://news.ycombinator.com/item?id=44303542) - [The Grug Brained Developer (2022)](https://grugbrain.dev/)
* [2025-06-17, 20:04:34](https://lobste.rs/s/g3wtej/bzip2_crate_switches_from_c_100_rust) - [bzip2 crate switches from C to 100% rust](https://trifectatech.org/blog/bzip2-crate-switches-from-c-to-rust/)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 19:39:26](https://news.ycombinator.com/item?id=44303021) - [Real-time action chunking with large models](https://www.pi.website/research/real_time_chunking)
* [2025-06-17, 19:20:23](https://lobste.rs/s/vedkvh/what_google_translate_can_tell_us_about) - [What Google Translate Can Tell Us About Vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/)
* [2025-06-17, 18:27:47](https://lobste.rs/s/uqniaz/double_entry_ledgers_missing_primitive) - [Double-Entry Ledgers: The Missing Primitive in Modern Software](https://www.pgrs.net/2025/06/17/double-entry-ledgers-missing-primitive-in-modern-software/)
* [2025-06-17, 17:04:49](https://lobste.rs/s/lcc0y4/kde_plasma_6_4_released) - [KDE Plasma 6.4 released](https://kde.org/announcements/plasma/6/6.4.0/)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 12:50:58](https://lobste.rs/s/k5tt4a/is_it_really_foss) - [is it really FOSS?](https://isitreallyfoss.com/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 07:25:23](https://news.ycombinator.com/item?id=44296523) - [Introduction to the A* Algorithm (2014)](https://www.redblobgames.com/pathfinding/a-star/introduction.html)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 15:34:26](https://news.ycombinator.com/item?id=44290580) - [Should we design for iffy internet?](https://bytes.zone/posts/should-we-design-for-iffy-internet/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 09:48:30](https://news.ycombinator.com/item?id=44287964) - [The Matrix (1999) Filming Locations – Shot-for-Shot – Sydney, Australia [video]](https://www.youtube.com/watch?v=UVf7rMqnwI0)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 11:25:57](https://news.ycombinator.com/item?id=44281756) - [A different take on S-expressions](https://gist.github.com/tearflake/569db7fdc8b363b7d320ebfeef8ab503)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 06:53:25](https://news.ycombinator.com/item?id=44280966) - [Spatializing 6k years of global urbanization from 3700 BC to AD 2000](https://www.nature.com/articles/sdata201634)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 23:38:56](https://news.ycombinator.com/item?id=44279569) - [Poline – An enigmatic color palette generator using polar coordinates](https://meodai.github.io/poline/)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
