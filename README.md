# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A fascinating leap for Linux as it gets ported to WebAssembly, enabling it to boot and run seamlessly within a browser tab.

* [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An incredible proof-of-concept showcasing a minimized version of Windows 7 that occupies just 69MB.

* [FreakWAN: A floor-routing WAN implementing a chat over bare-LoRa (no LoRaWAN)](https://github.com/antirez/freakwan) - A unique approach to implementing chat functionality over raw LoRaWAN protocols.

* [CHERIoT 1.0 Released](https://cheriot.org/sail/specification/release/2025/11/03/cheriot-1.0.html) - Introduction of CHERIoT 1.0, innovating the IoT ecosystem with advanced security architecture.

* [I Built My Own Google Drive](https://lorbic.com/i-built-my-own-google-drive/) - A personal project showcasing the creation of a custom Google Drive alternative.

* [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/) - Exploration of evolving terminal emulators and their champions in 2025.

* [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/) - A powerful tool for generating hyper-realistic 3D urban visualization using satellite imagery.

## AI and Machine Learning

* [Apple To White-Label Google's Gemini Model for Next-Generation Siri, Report Says](https://apple.slashdot.org/story/25/11/03/2014204/apple-to-white-label-googles-gemini-model-for-next-generation-siri-report-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple's strategy of employing Google's Gemini AI for the next-generation Siri.

* [The Case That A.I. Is Thinking](https://www.newyorker.com/magazine/2025/11/10/the-case-that-ai-is-thinking) - Insightful arguments and narratives that suggest artificial intelligence could be on the cusp of autonomous thinking.

* [arXiv Changes Rules After Getting Spammed With AI-Generated 'Research' Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alterations to arXiv's submission protocols to tackle issues with AI-generated papers.

* [Studio Ghibli, Bandai Namco, Square Enix Demand OpenAI Stop Using Their Content To Train AI](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Major entertainment studios demand restrictions on use of their content for AI training.

* [Microsoft AI Chief Says Only Biological Beings Can Be Conscious](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A thought-provoking stance by Microsoft's AI leadership on consciousness in artificial intelligence.

## Scientific Discoveries

* [First recording of a dying human brain shows waves similar to memory flashbacks](https://louisville.edu/medicine/news/first-ever-recording-of-a-dying-human-brain-shows-waves-similar-to-memory-flashbacks) - Groundbreaking research capturing neural patterns and memory-like waves in a dying brain.

* [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/) - Advancements in compact electric motors capable of unprecedented horsepower.

* [2,400 HP FDNY Super Pumper could extinguish hell itself](https://bangshift.com/bangshiftxl/mack-super-pumper-system-locomotive-engine-powered-pumper-extinguish-hell-often/) - Features and capabilities of a high-powered firefighting vehicle built to handle extreme situations.

* [Learning to read Arthur Whitney's C to become smart (2024)](https://needleful.net/blog/2024/01/arthur_whitney.html) - A dive into Arthur Whitney's C coding style hailed as a way to gain deep programming insights.

## Privacy, Legal Disputes, and Policies

* [Internet Archive's Legal Fights Are Over, But Its Founder Mourns What Was Lost](https://tech.slashdot.org/story/25/11/03/1930232/internet-archives-legal-fights-are-over-but-its-founder-mourns-what-was-lost?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reflections on the cost and outcomes of the Internet Archive's legal struggles.

* [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&from=rss) - A significant escalation in NFC relay attack incidents targeting European cardholders.

* [Grand Theft Auto Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Allegations of anti-union activities at a prominent gaming studio.

* [Palantir Thinks College Might Be a Waste. So It's Hiring High-School Grads.](https://news.slashdot.org/story/25/11/03/1620202/palantir-thinks-college-might-be-a-waste-so-its-hiring-high-school-grads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Palantir redefines job eligibility criteria in favor of high school graduates.

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

* [2025-11-03, 21:41:43](https://lobste.rs/s/wsrjf8/agent_shell_0_17_improvements_melpa) - [agent-shell 0.17 improvements + MELPA](https://xenodium.com/agent-shell-016-improvements-melpa)
* [2025-11-03, 21:30:00](https://news.slashdot.org/story/25/11/03/2018216/a-fight-over-credit-scores-turns-into-all-out-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Fight Over Credit Scores Turns Into All-Out War](https://news.slashdot.org/story/25/11/03/2018216/a-fight-over-credit-scores-turns-into-all-out-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 21:01:09](https://news.ycombinator.com/item?id=45804377) - [AI&apos;s Dial-Up Era](https://www.wreflection.com/p/ai-dial-up-era)
* [2025-11-03, 20:45:00](https://apple.slashdot.org/story/25/11/03/2014204/apple-to-white-label-googles-gemini-model-for-next-generation-siri-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To White-Label Google&apos;s Gemini Model for Next-Generation Siri, Report Says](https://apple.slashdot.org/story/25/11/03/2014204/apple-to-white-label-googles-gemini-model-for-next-generation-siri-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 20:37:34](https://news.ycombinator.com/item?id=45804122) - [2,400 HP FDNY Super Pumper could extinguish hell itself](https://bangshift.com/bangshiftxl/mack-super-pumper-system-locomotive-engine-powered-pumper-extinguish-hell-often/)
* [2025-11-03, 20:06:00](https://tech.slashdot.org/story/25/11/03/1930232/internet-archives-legal-fights-are-over-but-its-founder-mourns-what-was-lost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive&apos;s Legal Fights Are Over, But Its Founder Mourns What Was Lost](https://tech.slashdot.org/story/25/11/03/1930232/internet-archives-legal-fights-are-over-but-its-founder-mourns-what-was-lost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 19:55:50](https://lobste.rs/s/lqvf6n/fetch_ening) - [The fetch()ening](https://htmx.org/essays/the-fetchening/)
* [2025-11-03, 19:53:00](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss) - [October&apos;s Research Roundup: 6 Cool Science Stories We Almost Missed](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss)
* [2025-11-03, 19:40:00](https://lobste.rs/s/yc7dps/rdseed_failure_on_amd_zen_5_processors) - [RDSEED Failure on AMD “Zen 5” Processors](https://www.amd.com/en/resources/product-security/bulletin/amd-sb-7055.html)
* [2025-11-03, 19:37:57](https://news.ycombinator.com/item?id=45803427) - [Leverage Points: Places to Intervene in a System (1999)](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/)
* [2025-11-03, 19:36:22](https://lobste.rs/s/flln5g/state_terminal_emulators_2025_errant) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
* [2025-11-03, 19:33:02](https://news.ycombinator.com/item?id=45803358) - [&lt;/&gt; Htmx – The Fetch()ening](https://htmx.org/essays/the-fetchening/)
* [2025-11-03, 19:28:46](https://news.ycombinator.com/item?id=45803306) - [FreakWAN: A floor-routing WAN implementing a chat over bare-LoRa (no LoRaWAN)](https://github.com/antirez/freakwan)
* [2025-11-03, 19:25:00](https://tech.slashdot.org/story/25/11/03/1916215/the-curious-case-of-the-bizarre-disappearing-captcha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Curious Case of the Bizarre, Disappearing Captcha](https://tech.slashdot.org/story/25/11/03/1916215/the-curious-case-of-the-bizarre-disappearing-captcha?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 19:01:52](https://lobste.rs/s/qcx6fq/i_built_my_own_google_drive) - [I Built My Own Google Drive](https://lorbic.com/i-built-my-own-google-drive/)
* [2025-11-03, 18:57:00](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Studio Ghibli, Bandai Namco, Square Enix Demand OpenAI Stop Using Their Content To Train AI](https://slashdot.org/story/25/11/03/1857255/studio-ghibli-bandai-namco-square-enix-demand-openai-stop-using-their-content-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 18:27:32](https://news.ycombinator.com/item?id=45802459) - [Gallery of wonderful drawings our little thermal printer received](https://guestbook.goodenough.us)
* [2025-11-03, 18:16:43](https://news.ycombinator.com/item?id=45802290) - [Agent-O-rama: build LLM agents in Java or Clojure](https://blog.redplanetlabs.com/2025/11/03/introducing-agent-o-rama-build-trace-evaluate-and-monitor-stateful-llm-agents-in-java-or-clojure/)
* [2025-11-03, 18:16:00](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 7 Squeezed To 69MB in Proof-of-Concept Build](https://tech.slashdot.org/story/25/11/03/1816216/windows-7-squeezed-to-69mb-in-proof-of-concept-build?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 17:55:10](https://news.ycombinator.com/item?id=45802029) - [The Case That A.I. Is Thinking](https://www.newyorker.com/magazine/2025/11/10/the-case-that-ai-is-thinking)
* [2025-11-03, 17:21:00](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [arXiv Changes Rules After Getting Spammed With AI-Generated &apos;Research&apos; Papers](https://slashdot.org/story/25/11/03/1716252/arxiv-changes-rules-after-getting-spammed-with-ai-generated-research-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:50:22](https://lobste.rs/s/vtwb1e/we_found_embedding_indexing_bottleneck) - [We found an embedding indexing bottleneck in JSON parsing](https://nixiesearch.substack.com/p/we-found-an-embedding-indexing-bottleneck)
* [2025-11-03, 16:45:12](https://news.ycombinator.com/item?id=45801096) - [No Socials November](https://bjhess.com/posts/no-socials-november)
* [2025-11-03, 16:41:00](https://news.slashdot.org/story/25/11/03/1620202/palantir-thinks-college-might-be-a-waste-so-its-hiring-high-school-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Thinks College Might Be a Waste. So It&apos;s Hiring High-School Grads.](https://news.slashdot.org/story/25/11/03/1620202/palantir-thinks-college-might-be-a-waste-so-its-hiring-high-school-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:23:11](https://news.ycombinator.com/item?id=45800777) - [Learning to read Arthur Whitney&apos;s C to become smart (2024)](https://needleful.net/blog/2024/01/arthur_whitney.html)
* [2025-11-03, 16:06:26](https://lobste.rs/s/l6q8rj/cheriot_1_0_released) - [CHERIoT 1.0 Released](https://cheriot.org/sail/specification/release/2025/11/03/cheriot-1.0.html)
* [2025-11-03, 16:02:00](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft AI Chief Says Only Biological Beings Can Be Conscious](https://tech.slashdot.org/story/25/11/03/1534209/microsoft-ai-chief-says-only-biological-beings-can-be-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800465) - [Ask HN: Who is hiring? (November 2025)](https://news.ycombinator.com/item?id=45800465)
* [2025-11-03, 16:00:00](https://news.ycombinator.com/item?id=45800464) - [Ask HN: Who wants to be hired? (November 2025)](https://news.ycombinator.com/item?id=45800464)
* [2025-11-03, 15:45:31](https://news.ycombinator.com/item?id=45800308) - [Robert Hooke&apos;s \&quot;Cyberpunk” Letter to Gottfried Leibniz](https://mynamelowercase.com/blog/robert-hookes-cyberpunk-letter-to-gottfried-leibniz/)
* [2025-11-03, 15:23:00](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xi Quips About Backdoors During Xiaomi Phone Gift To Korea&apos;s Lee](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 15:02:25](https://lobste.rs/s/tqwmbn/cast_x_as_string_casts_integer_sqlite) - [CAST(x AS STRING) casts to integer in SQLite](https://lalitm.com/cast-x-as-string-casts-to-integer-in-sqlite/)
* [2025-11-03, 14:47:00](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Signs $38 Billion Cloud Deal With Amazon](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 14:40:51](https://news.ycombinator.com/item?id=45799478) - [State of Terminal Emulators in 2025: The Errant Champions](https://www.jeffquast.com/post/state-of-terminal-emulation-2025/)
* [2025-11-03, 14:15:23](https://lobste.rs/s/sbrnnl/c_move_semantics_from_scratch_2022) - [C++ move semantics from scratch (2022)](https://cbarrete.com/move-from-scratch.html)
* [2025-11-03, 14:00:00](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Fixes Decade-Old Windows Bug That Made &apos;Update and Shut Down&apos; Restart PCs](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 13:46:19](https://news.ycombinator.com/item?id=45798881) - [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)
* [2025-11-03, 13:45:15](https://news.ycombinator.com/item?id=45798871) - [Show HN: a Rust ray tracer that runs on any GPU – even in the browser](https://github.com/tchauffi/rust-rasterizer)
* [2025-11-03, 13:40:47](https://news.ycombinator.com/item?id=45798838) - [VimGraph](https://resources.wolframcloud.com/FunctionRepository/resources/VimGraph/)
* [2025-11-03, 13:31:19](https://lobste.rs/s/mp8rib/prefer_boring_technology) - [Prefer boring technology](https://itwont.work/blog/prefer-boring-technology)
* [2025-11-03, 13:28:37](https://news.ycombinator.com/item?id=45798741) - [An Illustrated Introduction to Linear Algebra, Chapter 2: The Dot Product](https://www.ducktyped.org/p/linear-algebra-chapter-2-the-dot)
* [2025-11-03, 13:06:10](https://lobste.rs/s/bbfa6p/announcing_cgp_serde_modular) - [Announcing cgp-serde: A modular serialization library for Serde powered by Context-Generic Programming](https://contextgeneric.dev/blog/cgp-serde-release/)
* [2025-11-03, 12:50:27](https://news.ycombinator.com/item?id=45798479) - [The Case Against PGVector](https://alex-jacobs.com/posts/the-case-against-pgvector/)
* [2025-11-03, 12:43:00](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 12:27:46](https://lobste.rs/s/neu41n/soiree_into_symbols_ruby) - [A Soiree into Symbols in Ruby](https://tech.stonecharioteer.com/posts/2025/ruby-symbols/)
* [2025-11-03, 12:18:50](https://lobste.rs/s/2eofir/a11y_css) - [a11y.css](https://ffoodd.github.io/a11y.css/)
* [2025-11-03, 10:47:29](https://lobste.rs/s/wca9sz/cure_verification_first_programming_for) - [Cure - Verification-First Programming for the BEAM](https://cure-lang.org/)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 09:24:39](https://lobste.rs/s/7rhkpy/absurd_workflows_durable_execution_with) - [Absurd Workflows: Durable Execution With Just Postgres](https://lucumr.pocoo.org/2025/11/3/absurd-workflows)
* [2025-11-03, 09:20:01](https://news.ycombinator.com/item?id=45797242) - [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/)
* [2025-11-03, 08:53:00](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grand Theft Auto&apos; Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 06:43:41](https://lobste.rs/s/wiokzi/don_t_give_postgres_too_much_memory) - [Don&apos;t give Postgres too much memory](https://vondra.me/posts/dont-give-postgres-too-much-memory/)
* [2025-11-03, 06:39:13](https://news.ycombinator.com/item?id=45796421) - [First recording of a dying human brain shows waves similar to memory flashbacks](https://louisville.edu/medicine/news/first-ever-recording-of-a-dying-human-brain-shows-waves-similar-to-memory-flashbacks)
* [2025-11-03, 06:30:45](https://lobste.rs/s/j8dni3/why_don_t_you_use_dependent_types) - [\&quot;Why don&apos;t you use dependent types?\&quot;](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-03, 05:53:00](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Gamers on Steam Finally Cross Over the 3% Mark](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 04:47:06](https://lobste.rs/s/cm7yfi/setting_up_very_simple_home_router_with) - [Setting up a very simple home router with OpenBSD](https://www.blog.montgomerie.net/posts/2025-10-11-setting-up-a-very-simple-but-ipv6-capable-home-router-with-openbsd-7.7/)
* [2025-11-03, 02:50:44](https://lobste.rs/s/tbdvn9/control_structures_programming) - [Control structures in programming languages](http://xavierleroy.org/control-structures/)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-03, 00:49:56](https://lobste.rs/s/tthzlh/using_assisted_by_commit_footers_instead) - [Using Assisted-by commit footers instead of banning AI tools](https://xeiaso.net/notes/2025/assisted-by-footer/)
* [2025-11-02, 23:51:03](https://lobste.rs/s/q7wvs1/i_ing_hate_science_2021) - [I ****ing hate Science (2021)](https://buttondown.com/hillelwayne/archive/i-ing-hate-science/)
* [2025-11-02, 22:52:04](https://lobste.rs/s/gig2wt/you_don_t_need_anubis) - [You don&apos;t need anubis](https://fxgn.dev/blog/anubis/)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 15:10:45](https://lobste.rs/s/uwyfpy/build_system_tradeoffs) - [build system tradeoffs](https://jyn.dev/build-system-tradeoffs)
* [2025-11-02, 13:12:30](https://lobste.rs/s/ug6vbv/prison_my_own_making) - [A prison of my own making](https://jsteuernagel.de/posts/a-prison-of-my-own-making/)
* [2025-11-02, 12:29:18](https://lobste.rs/s/zc73xh/notes_by_djb_on_using_fil_c) - [Notes by djb on using Fil-C](https://cr.yp.to/2025/fil-c.html)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 16:39:05](https://news.ycombinator.com/item?id=45783074) - [WebAssembly (WASM) arch support for the Linux kernel](https://github.com/joelseverin/linux-wasm)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
* [2025-10-31, 20:57:00](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss) - [Tor Browser 15.0 Anonymous Web Browser Is Out Based on Firefox 140 ESR Series](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss)
* [2025-10-31, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss) - [Red Hat and Other Distros to Provide Easy Access to NVIDIA CUDA Tools](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss)
* [2025-10-31, 11:25:00](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) - [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss)
* [2025-10-31, 06:36:00](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) - [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss)
* [2025-10-31, 01:42:00](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss) - [US EV Sales Will Collapse 60% In October, J.D. Power Forecasts](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss)
* [2025-10-30, 21:00:00](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss) - [AI-Powered Search Engines Rely on “Less Popular” Sources, Researchers Find](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss)
* [2025-10-30, 16:12:00](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss) - [Fedora Linux 43 Officially Released, Now Available for Download](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss)
* [2025-10-30, 14:15:00](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss) - [Trial of Journal Flagging - Analysis and Actions](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss)
* [2025-10-30, 11:29:00](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss) - [Westinghouse is Claiming a Nuclear Deal Would See $80B of New Reactors](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss)
* [2025-10-30, 06:45:00](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss) - [Senators Move to Keep Big Tech&apos;s Creepy Companion Bots Away From Kids](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss)
* [2025-10-30, 02:02:00](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss) - [Windows 11 Adds Dark Mode Dialogs for Run and Folder Options](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss)
