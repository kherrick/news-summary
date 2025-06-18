# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements and Challenges in Technology

* [LLM Agents Are Breaking Your Platform, Not Your Architecture](https://www.junctionlabs.io/blog/llm-agents-are-breaking-your-platform-not-your-architecture) ([comments](https://lobste.rs/s/skgrlr/llm_agents_are_breaking_your_platform_not)): Examining how large language models (LLMs) disrupt platforms instead of their underlying architecture.

* [Programming Language Design in the Era of LLMs: A Return to Mediocrity?](https://kirancodes.me/posts/log-lang-design-llms.html) ([comments](https://lobste.rs/s/ajv5qd/programming_language_design_era_llms)): Reflects on the impact of LLMs on programming language design and innovation.

* [Homomorphically Encrypting CRDTs](https://jakelazaroff.com/words/homomorphically-encrypted-crdts/) ([comments](https://news.ycombinator.com/item?id=44309520)): A discussion on integrating homomorphic encryption with distributed systems.

* [Shadow: A browser engine from scratch in Javascript](https://shadow.goose.icu) ([comments](https://lobste.rs/s/ydsjiy/shadow_browser_engine_from_scratch)): Learn about building a browser engine from scratch using JavaScript.

* [Altman Says Meta Targeting OpenAI Staff With $100 Million Bonuses as AI Race Intensifies](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): As AI development races forward, resources and talent acquisition continue to drive competition.

## Privacy, Security, and Ethical Concerns

* [Cock.li email provider data leak from roundcube](https://mail.cock.li/) ([comments](https://lobste.rs/s/boq7tt/cock_li_email_provider_data_leak_from)): Details emerge on a data leak impacting Cock.li email users.

* [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)): A cybersecurity exploit involving smartwatches raises data theft concerns.

* [Why I Won't Use AI](https://agentultra.com/blog/why-i-wont-use-ai/index.html) ([comments](https://lobste.rs/s/imjzlb/why_i_won_t_use_ai)): A personal perspective on the ethical ramifications of artificial intelligence adoption.

## Innovations and Open-Source Developments

* [Show HN: I built a tensor library from scratch in C++/CUDA](https://github.com/nirw4nna/dsc) ([comments](https://news.ycombinator.com/item?id=44310678)): A tensor library designed using C++ and CUDA for advanced computations.

* [Workout.cool – Open-source fitness coaching platform](https://github.com/Snouzy/workout-cool) ([comments](https://news.ycombinator.com/item?id=44309320)): An open-source initiative for fitness coaching with adaptive content creation.

## Cultural and Media Shifts

* [Netflix Will Air Traditional TV Channels in France](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Netflix takes a traditional approach to expand reach in the French market.

* [DC Studios Chief Says Movie Industry Is 'Dying,' Claims Disney 'Killed' Marvel With Output Mandates](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Insights into the challenges facing the film industry and superhero franchises.

## Science and Research

* [Nature Journal Mandates Public Peer Review For All New Research Papers](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Advocating for transparency in the peer-review process to enhance scientific accountability.

* [Reasoning by Superposition: A Perspective on Chain of Continuous Thought](https://arxiv.org/abs/2505.12514) ([comments](https://news.ycombinator.com/item?id=44309345)): Explores new methodologies in reasoning for machine learning networks.

## Technology and Engineering Feats

* [I counted all of the yurts in Mongolia using machine learning](https://monroeclinton.com/counting-all-yurts-in-mongolia/) ([comments](https://news.ycombinator.com/item?id=44307629)): An example of leveraging machine learning for geographic and cultural analytics.

* [OpenSERDES – Open Hardware Serializer/Deserializer (SerDes) in Verilog](https://github.com/SparcLab/OpenSERDES) ([comments](https://news.ycombinator.com/item?id=44306462)): Open hardware development boosts accessibility in high-performance computing solutions.

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

* [2025-06-18, 15:50:01](https://lobste.rs/s/skgrlr/llm_agents_are_breaking_your_platform_not) - [LLM Agents Are Breaking Your Platform, Not Your Architecture](https://www.junctionlabs.io/blog/llm-agents-are-breaking-your-platform-not-your-architecture)
* [2025-06-18, 15:22:49](https://lobste.rs/s/boq7tt/cock_li_email_provider_data_leak_from) - [Cock.li email provider data leak from roundcube](https://mail.cock.li/)
* [2025-06-18, 15:22:00](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Journal Mandates Public Peer Review For All New Research Papers](https://science.slashdot.org/story/25/06/18/1452206/nature-journal-mandates-public-peer-review-for-all-new-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 15:20:05](https://news.ycombinator.com/item?id=44310678) - [Show HN: I built a tensor library from scratch in C++/CUDA](https://github.com/nirw4nna/dsc)
* [2025-06-18, 15:09:34](https://news.ycombinator.com/item?id=44310583) - [Framework Laptop 12: I&apos;m excited to see what the 2nd generation looks like](https://arstechnica.com/gadgets/2025/06/framework-laptop-12-review-im-excited-to-see-what-the-2nd-generation-looks-like/)
* [2025-06-18, 15:06:53](https://lobste.rs/s/lalc7r/moving_on_from_nix) - [Moving on from Nix](https://carlosbecker.com/posts/bye-nix/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:44:00](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Will Air Traditional TV Channels in France](https://entertainment.slashdot.org/story/25/06/18/1443245/netflix-will-air-traditional-tv-channels-in-france?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 14:16:48](https://lobste.rs/s/s9xvjr/notes_on_retries) - [Notes on retries](https://justinblank.com/notebooks/retries.html)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 14:00:00](https://slashdot.org/story/25/06/18/1245216/the-biggest-companies-across-america-are-cutting-their-workforces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Biggest Companies Across America Are Cutting Their Workforces](https://slashdot.org/story/25/06/18/1245216/the-biggest-companies-across-america-are-cutting-their-workforces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 13:49:12](https://lobste.rs/s/h08v9z/plight_misunderstood_memory_ordering) - [The plight of the misunderstood memory ordering](https://www.grayolson.me/blog/posts/misunderstood-memory-ordering/)
* [2025-06-18, 13:00:00](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC Studios Chief Says Movie Industry Is &apos;Dying,&apos; Claims Disney &apos;Killed&apos; Marvel With Output Mandates](https://entertainment.slashdot.org/story/25/06/18/0245223/dc-studios-chief-says-movie-industry-is-dying-claims-disney-killed-marvel-with-output-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 12:59:58](https://news.ycombinator.com/item?id=44309520) - [Homomorphically Encrypting CRDTs](https://jakelazaroff.com/words/homomorphically-encrypted-crdts/)
* [2025-06-18, 12:36:47](https://news.ycombinator.com/item?id=44309345) - [Reasoning by Superposition: A Perspective on Chain of Continuous Thought](https://arxiv.org/abs/2505.12514)
* [2025-06-18, 12:33:49](https://news.ycombinator.com/item?id=44309320) - [Workout.cool – Open-source fitness coaching platform](https://github.com/Snouzy/workout-cool)
* [2025-06-18, 12:26:24](https://lobste.rs/s/ydsjiy/shadow_browser_engine_from_scratch) - [Shadow: A browser engine from scratch in Javascript](https://shadow.goose.icu)
* [2025-06-18, 12:00:50](https://news.ycombinator.com/item?id=44309110) - [Jiga (YC W21) Is Hiring Software Engs to Make Like of Mech Engs Easier](https://www.workatastartup.com/companies/jiga)
* [2025-06-18, 11:03:04](https://lobste.rs/s/8ragze/hammurabi_rust_recreation_classic_1968) - [hammurabi: A Rust recreation of the classic 1968 BASIC game](https://github.com/stjepangolemac/hammurabi)
* [2025-06-18, 11:01:00](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Altman Says Meta Targeting OpenAI Staff With $100 Million Bonuses as AI Race Intensifies](https://tech.slashdot.org/story/25/06/18/0751230/altman-says-meta-targeting-openai-staff-with-100-million-bonuses-as-ai-race-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 10:53:59](https://news.ycombinator.com/item?id=44308711) - [Is There a Half-Life for the Success Rates of AI Agents?](https://www.tobyord.com/writing/half-life)
* [2025-06-18, 10:31:44](https://news.ycombinator.com/item?id=44308558) - [Terpstra Keyboard](http://terpstrakeyboard.com/web-app/keys.htm)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 09:00:00](https://it.slashdot.org/story/25/06/18/0227224/microsoft-is-calling-too-many-things-copilot-watchdog-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Calling Too Many Things &apos;Copilot,&apos; Watchdog Says](https://it.slashdot.org/story/25/06/18/0227224/microsoft-is-calling-too-many-things-copilot-watchdog-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 08:53:22](https://lobste.rs/s/ajv5qd/programming_language_design_era_llms) - [Programming Language Design in the Era of LLMs: A Return to Mediocrity?](https://kirancodes.me/posts/log-lang-design-llms.html)
* [2025-06-18, 07:58:18](https://news.ycombinator.com/item?id=44307629) - [I counted all of the yurts in Mongolia using machine learning](https://monroeclinton.com/counting-all-yurts-in-mongolia/)
* [2025-06-18, 07:00:00](https://news.slashdot.org/story/25/06/17/2128231/field-notes-went-from-side-project-to-cult-notebook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Field Notes Went From Side Project To Cult Notebook](https://news.slashdot.org/story/25/06/17/2128231/field-notes-went-from-side-project-to-cult-notebook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 06:53:34](https://news.ycombinator.com/item?id=44307290) - [MiniMax-M1 open-weight, large-scale hybrid-attention reasoning model](https://github.com/MiniMax-AI/MiniMax-M1)
* [2025-06-18, 05:40:03](https://news.ycombinator.com/item?id=44306937) - [Grokking NAT and packet mangling in Linux](https://vivekn.dev/blog/grokking-nat-and-packet-mangling-in-linux)
* [2025-06-18, 05:25:25](https://lobste.rs/s/3vztva/using_microsoft_s_new_cli_text_editor_on) - [Using Microsoft&apos;s New CLI Text Editor on Ubuntu](https://www.omgubuntu.co.uk/2025/06/microsoft-edit-text-editor-ubuntu)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 05:16:12](https://news.ycombinator.com/item?id=44306859) - [Scrappy - make little apps for you and your friends](https://pontus.granstrom.me/scrappy/)
* [2025-06-18, 04:24:56](https://lobste.rs/s/imjzlb/why_i_won_t_use_ai) - [Why I Won&apos;t Use AI](https://agentultra.com/blog/why-i-wont-use-ai/index.html)
* [2025-06-18, 03:41:44](https://news.ycombinator.com/item?id=44306462) - [OpenSERDES – Open Hardware Serializer/Deserializer (SerDes) in Verilog](https://github.com/SparcLab/OpenSERDES)
* [2025-06-18, 03:30:00](https://yro.slashdot.org/story/25/06/17/214215/california-ai-policy-report-warns-of-irreversible-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California AI Policy Report Warns of &apos;Irreversible Harms&apos;](https://yro.slashdot.org/story/25/06/17/214215/california-ai-policy-report-warns-of-irreversible-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 02:10:00](https://tech.slashdot.org/story/25/06/18/0059207/iran-is-going-offline-to-prevent-purported-israeli-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Is Going Offline To Prevent Purported Israeli Cyberattacks](https://tech.slashdot.org/story/25/06/18/0059207/iran-is-going-offline-to-prevent-purported-israeli-cyberattacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 02:07:19](https://news.ycombinator.com/item?id=44306041) - [Show HN: Lstr – A modern, interactive tree command written in Rust](https://github.com/bgreenwell/lstr)
* [2025-06-18, 01:39:28](https://lobste.rs/s/nsn0rk/indexeddb_is_weird) - [IndexedDB is Weird](https://qsantos.fr/2025/03/03/indexeddb-is-weird/)
* [2025-06-18, 01:35:23](https://lobste.rs/s/abfokf/i_wrote_compiler) - [I wrote a compiler](https://blog.singleton.io/posts/2021-01-31-i-wrote-a-compiler/)
* [2025-06-18, 01:30:00](https://slashdot.org/story/25/06/18/0036236/senate-passes-stablecoin-bill-in-major-win-for-crypto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senate Passes Stablecoin Bill In Major Win For Crypto Industry](https://slashdot.org/story/25/06/18/0036236/senate-passes-stablecoin-bill-in-major-win-for-crypto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 00:50:00](https://yro.slashdot.org/story/25/06/18/0044213/trump-extends-tiktok-deadline-for-third-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Extends TikTok Deadline For Third Time](https://yro.slashdot.org/story/25/06/18/0044213/trump-extends-tiktok-deadline-for-third-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-18, 00:14:02](https://lobste.rs/s/cy2x77/building_json_on_command_line_is) - [Building JSON on the Command Line is Obnoxious](https://blog.stulta.dev/posts/annoying_json/)
* [2025-06-18, 00:10:00](https://news.slashdot.org/story/25/06/17/2123211/why-china-is-giving-away-its-tech-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why China is Giving Away Its Tech For Free](https://news.slashdot.org/story/25/06/17/2123211/why-china-is-giving-away-its-tech-for-free?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 23:30:00](https://tech.slashdot.org/story/25/06/17/2044241/kde-plasma-64-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma 6.4 Released](https://tech.slashdot.org/story/25/06/17/2044241/kde-plasma-64-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 22:50:00](https://slashdot.org/story/25/06/17/2041222/ai-will-shrink-amazons-workforce-in-the-coming-years-ceo-jassy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Will Shrink Amazon&apos;s Workforce In the Coming Years, CEO Jassy Says](https://slashdot.org/story/25/06/17/2041222/ai-will-shrink-amazons-workforce-in-the-coming-years-ceo-jassy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 22:37:56](https://lobste.rs/s/dybgho/monads_are_not_like_burritos) - [Monads are not like burritos](https://byorgey.github.io/blog/posts/2025/06/16/monads-are-not-burritos.html)
* [2025-06-17, 22:10:00](https://hardware.slashdot.org/story/25/06/17/2035235/spains-government-blames-huge-blackout-on-grid-regulator-and-private-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain&apos;s Government Blames Huge Blackout On Grid Regulator and Private Firms](https://hardware.slashdot.org/story/25/06/17/2035235/spains-government-blames-huge-blackout-on-grid-regulator-and-private-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-17, 21:01:41](https://lobste.rs/s/i4cjur/kicad_wayland_support) - [KiCad and Wayland Support](https://www.kicad.org/blog/2025/06/KiCad-and-Wayland-Support/)
* [2025-06-17, 20:48:04](https://lobste.rs/s/jamcvc/resurrecting_dead_torrent_tracker) - [Resurrecting a dead torrent tracker and finding 3 million peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 20:24:36](https://news.ycombinator.com/item?id=44303542) - [The Grug Brained Developer (2022)](https://grugbrain.dev/)
* [2025-06-17, 20:04:34](https://lobste.rs/s/g3wtej/bzip2_crate_switches_from_c_100_rust) - [bzip2 crate switches from C to 100% rust](https://trifectatech.org/blog/bzip2-crate-switches-from-c-to-rust/)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 19:23:10](https://news.ycombinator.com/item?id=44302870) - [What Google Translate can tell us about vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/)
* [2025-06-17, 19:20:23](https://lobste.rs/s/vedkvh/what_google_translate_can_tell_us_about) - [What Google Translate Can Tell Us About Vibecoding](https://ingrids.space/posts/what-google-translate-can-tell-us-about-vibecoding/)
* [2025-06-17, 19:17:05](https://news.ycombinator.com/item?id=44302797) - [LLMs pose an interesting problem for DSL designers](https://kirancodes.me/posts/log-lang-design-llms.html)
* [2025-06-17, 18:27:47](https://lobste.rs/s/uqniaz/double_entry_ledgers_missing_primitive) - [Double-Entry Ledgers: The Missing Primitive in Modern Software](https://www.pgrs.net/2025/06/17/double-entry-ledgers-missing-primitive-in-modern-software/)
* [2025-06-17, 17:50:05](https://news.ycombinator.com/item?id=44301809) - [Building Effective AI Agents](https://www.anthropic.com/engineering/building-effective-agents)
* [2025-06-17, 17:40:19](https://news.ycombinator.com/item?id=44301686) - [Resurrecting a dead torrent tracker and finding 3M peers](https://kianbradley.com/2025/06/15/resurrecting-a-dead-tracker.html)
* [2025-06-17, 17:04:49](https://lobste.rs/s/lcc0y4/kde_plasma_6_4_released) - [KDE Plasma 6.4 released](https://kde.org/announcements/plasma/6/6.4.0/)
* [2025-06-17, 16:06:05](https://news.ycombinator.com/item?id=44300717) - [Making 2.5 Flash and 2.5 Pro GA, and introducing Gemini 2.5 Flash-Lite](https://blog.google/products/gemini/gemini-2-5-model-family-expands/)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 15:02:12](https://news.ycombinator.com/item?id=44300102) - [Honda conducts successful launch and landing of experimental reusable rocket](https://global.honda/en/topics/2025/c_2025-06-17ceng.html)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 14:51:40](https://news.ycombinator.com/item?id=44299979) - [Now might be the best time to learn software development](https://substack.com/home/post/p-165655726)
* [2025-06-17, 13:18:20](https://lobste.rs/s/endekb/zb_beta_released) - [zb beta released](https://www.zombiezen.com/blog/2025/06/zb-beta-release/)
* [2025-06-17, 12:50:58](https://lobste.rs/s/k5tt4a/is_it_really_foss) - [is it really FOSS?](https://isitreallyfoss.com/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 07:25:23](https://news.ycombinator.com/item?id=44296523) - [Introduction to the A* Algorithm](https://www.redblobgames.com/pathfinding/a-star/introduction.html)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:50:21](https://lobste.rs/s/6bduaj/phkmalloc) - [phkmalloc](https://phk.freebsd.dk/sagas/phkmalloc/)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 23:19:36](https://lobste.rs/s/f4cvx7/triaging_security_issues_reported_by) - [Triaging security issues reported by third parties (#913) · Issues · GNOME / libxml2 ·](https://gitlab.gnome.org/GNOME/libxml2/-/issues/913)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-16, 00:36:56](https://news.ycombinator.com/item?id=44285875) - [Preparation of a neutral nitrogen allotrope hexanitrogen C2h-N6](https://www.nature.com/articles/s41586-025-09032-9)
* [2025-06-15, 20:55:25](https://news.ycombinator.com/item?id=44284908) - [Munich from a Hamburger&apos;s Perspective](https://mertbulan.com/2025/06/14/munich-from-a-hamburgers-perspective/)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 15:54:54](https://news.ycombinator.com/item?id=44282953) - [3D-printed device splits white noise into an acoustic rainbow without power](https://phys.org/news/2025-06-3d-device-white-noise-acoustic.html)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 12:34:44](https://news.ycombinator.com/item?id=44282000) - [Think of a Number](https://xenaproject.wordpress.com/2025/01/20/think-of-a-number/)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
* [2025-06-14, 23:38:56](https://news.ycombinator.com/item?id=44279569) - [\&quot;poline\&quot; is an enigmatic color palette generator using polar coordinates](https://meodai.github.io/poline/)
* [2025-06-14, 20:27:00](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss) - [Jupiter Takes Europe&apos;s HPC Crown in 793Pf Top500 Run](https://soylentnews.org/article.pl?sid=25/06/14/1315217&amp;from=rss)
* [2025-06-14, 15:42:00](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss) - [Toyota Math: 9 Million EVs Are Just as Polluting as 27 Million Hybrids](https://soylentnews.org/article.pl?sid=25/06/13/1243246&amp;from=rss)
* [2025-06-14, 14:22:01](https://news.ycombinator.com/item?id=44276616) - [A Straightforward Explanation of the Good Regulator Theorem](https://www.lesswrong.com/posts/JQefBJDHG6Wgffw6T/a-straightforward-explanation-of-the-good-regulator-theorem)
* [2025-06-14, 11:31:49](https://news.ycombinator.com/item?id=44275714) - [Proofs Without Words](https://artofproblemsolving.com/wiki/index.php/Proofs_without_words)
* [2025-06-14, 10:57:00](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss) - [Climate Change Is Coming For Your Cheese](https://soylentnews.org/article.pl?sid=25/06/13/0159230&amp;from=rss)
* [2025-06-14, 06:12:00](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss) - [Mistral Releases a Vibe Coding Client, Mistral Code](https://soylentnews.org/article.pl?sid=25/06/13/0152245&amp;from=rss)
* [2025-06-14, 01:25:00](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss) - [Vital Chipmaking Software Access Restored to China After High-Level Call Between Trump/Xi Jinping](https://soylentnews.org/article.pl?sid=25/06/13/0146252&amp;from=rss)
