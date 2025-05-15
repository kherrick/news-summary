# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Meta Delays 'Behemoth' AI Model Release](https://meta.slashdot.org/story/25/05/15/2022210/meta-delays-behemoth-ai-model-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Dominates AI Patent Applications](https://yro.slashdot.org/story/25/05/15/140222/google-dominates-ai-patent-applications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [ChatGPT Diminishes Idea Diversity in Brainstorming, Study Finds](https://slashdot.org/story/25/05/15/001250/chatgpt-diminishes-idea-diversity-in-brainstorming-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Launch HN: Tinfoil (YC X25): Verifiable Privacy for Cloud AI](https://news.ycombinator.com/item?id=43996555)

* [The unreasonable effectiveness of an LLM agent loop with tool use](https://sketch.dev/blog/agent-loop)

## Rust Programming

* [10 Years of Stable Rust: An Infrastructure Story](https://rustfoundation.org/media/10-years-of-stable-rust-an-infrastructure-story/)

* [Rust 1.0, ten years later](https://steveklabnik.com/writing/rust-ten-years-later/)

* [Announcing Rust 1.87.0 and ten years of Rust](https://blog.rust-lang.org/2025/05/15/Rust-1.87.0/)

## Gene Editing and Medical Breakthroughs

* [Baby is healed with first personalized gene-editing treatment](https://www.nytimes.com/2025/05/15/health/gene-editing-personalized-rare-disorders.html)

* [Baby Is Healed With World's First Personalized Gene-Editing Treatment](https://science.slashdot.org/story/25/05/15/1734220/baby-is-healed-with-worlds-first-personalized-gene-editing-treatment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Privacy

* [Coinbase says hackers bribed staff to steal customer data, demanding $20M ransom](https://www.cnbc.com/2025/05/15/coinbase-says-hackers-bribed-staff-to-steal-customer-data-and-are-demanding-20-million-ransom.html)

* [Telegram Bans $35 Billion Black Markets Used To Sell Stolen Data, Launder Crypto](https://yro.slashdot.org/story/25/05/15/205236/telegram-bans-35-billion-black-markets-used-to-sell-stolen-data-launder-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Historic and Scientific Findings

* [Dr. Dobb's Journal Interviews Jef Raskin (1986)](https://computeradsfromthepast.substack.com/p/dr-dobbs-journal-interviews-jef-raskin)

* [Harvard Law paid $27 for a copy of Magna Carta. It's an original](https://www.nytimes.com/2025/05/15/world/europe/harvard-law-magna-carta-original.html)

* [Onfim's world: Child artists in history](https://resobscura.substack.com/p/onfims-world-medieval-child-artists)

## Tech and Engineering Insights

* [Initialization in C++ is bonkers (2017)](https://blog.tartanllama.xyz/initialization-is-bonkers/)

* [Wavelet Trees: An Introduction (2011)](https://www.alexbowe.com/wavelet-trees/)

* [RULECOMPILE - Undocumented Ghidra decompiler rule language](https://msm.lt/re/ghidra/rulecompile/)

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

* [2025-05-15, 21:25:00](https://meta.slashdot.org/story/25/05/15/2022210/meta-delays-behemoth-ai-model-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Delays &apos;Behemoth&apos; AI Model Release](https://meta.slashdot.org/story/25/05/15/2022210/meta-delays-behemoth-ai-model-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 21:14:41](https://lobste.rs/s/bnxssi/10_years_stable_rust_infrastructure) - [10 Years of Stable Rust: An Infrastructure Story](https://rustfoundation.org/media/10-years-of-stable-rust-an-infrastructure-story/)
* [2025-05-15, 21:06:59](https://lobste.rs/s/ppqd3i/initialization_c_is_bonkers_2017) - [Initialization in C++ is bonkers (2017)](https://blog.tartanllama.xyz/initialization-is-bonkers/)
* [2025-05-15, 20:45:00](https://tech.slashdot.org/story/25/05/15/208221/google-restores-file-permissions-for-nexcloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Restores File Permissions For Nexcloud](https://tech.slashdot.org/story/25/05/15/208221/google-restores-file-permissions-for-nexcloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 20:41:20](https://news.ycombinator.com/item?id=43999125) - [Stack Overflow is almost dead](https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/)
* [2025-05-15, 20:15:31](https://lobste.rs/s/fayqbl/rust_1_0_ten_years_later) - [Rust 1.0, ten years later](https://steveklabnik.com/writing/rust-ten-years-later/)
* [2025-05-15, 20:07:00](https://yro.slashdot.org/story/25/05/15/205236/telegram-bans-35-billion-black-markets-used-to-sell-stolen-data-launder-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Telegram Bans $35 Billion Black Markets Used To Sell Stolen Data, Launder Crypto](https://yro.slashdot.org/story/25/05/15/205236/telegram-bans-35-billion-black-markets-used-to-sell-stolen-data-launder-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 20:00:00](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss) - [\&quot;Prompt Engineering\&quot; Is No Longer A Job, But A Skill](https://soylentnews.org/article.pl?sid=25/05/14/0440229&amp;from=rss)
* [2025-05-15, 19:56:59](https://news.ycombinator.com/item?id=43998707) - [Tek – A music making program for 24-bit Unicode terminals](https://codeberg.org/unspeaker/tek)
* [2025-05-15, 19:46:38](https://news.ycombinator.com/item?id=43998597) - [Old and Small Technology](https://www.complete.org/old-and-small-technology/)
* [2025-05-15, 19:33:44](https://news.ycombinator.com/item?id=43998472) - [The unreasonable effectiveness of an LLM agent loop with tool use](https://sketch.dev/blog/agent-loop)
* [2025-05-15, 19:28:01](https://news.ycombinator.com/item?id=43998423) - [Refactoring Clojure](https://www.orsolabs.com/post/refactoring-clojure-1/)
* [2025-05-15, 19:03:00](https://tech.slashdot.org/story/25/05/15/193236/uber-expects-more-drivers-amid-robotaxi-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Expects More Drivers Amid Robotaxi Push](https://tech.slashdot.org/story/25/05/15/193236/uber-expects-more-drivers-amid-robotaxi-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 18:53:55](https://news.ycombinator.com/item?id=43998115) - [The current state of TLA⁺ development](https://ahelwer.ca/post/2025-05-15-tla-dev-status/)
* [2025-05-15, 18:53:00](https://lobste.rs/s/auqf51/current_state_tla_development) - [The current state of TLA⁺ development](https://ahelwer.ca/post/2025-05-15-tla-dev-status/)
* [2025-05-15, 18:43:43](https://news.ycombinator.com/item?id=43998008) - [Dr. Dobb&apos;s Journal Interviews Jef Raskin (1986)](https://computeradsfromthepast.substack.com/p/dr-dobbs-journal-interviews-jef-raskin)
* [2025-05-15, 18:26:29](https://news.ycombinator.com/item?id=43997830) - [Harvard Law paid $27 for a copy of Magna Carta. It&apos;s an original](https://www.nytimes.com/2025/05/15/world/europe/harvard-law-magna-carta-original.html)
* [2025-05-15, 18:20:00](https://news.slashdot.org/story/25/05/15/1819231/american-schools-were-deeply-unprepared-for-chatgpt-public-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Schools Were Deeply Unprepared for ChatGPT, Public Records Show](https://news.slashdot.org/story/25/05/15/1819231/american-schools-were-deeply-unprepared-for-chatgpt-public-records-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 18:06:06](https://news.ycombinator.com/item?id=43997636) - [Baby is healed with first personalized gene-editing treatment](https://www.nytimes.com/2025/05/15/health/gene-editing-personalized-rare-disorders.html)
* [2025-05-15, 18:01:12](https://lobste.rs/s/c16bc0/announcing_rust_1_87_0_ten_years_rust) - [Announcing Rust 1.87.0 and ten years of Rust](https://blog.rust-lang.org/2025/05/15/Rust-1.87.0/)
* [2025-05-15, 17:43:44](https://lobste.rs/s/wgn94m/introducing_lazy_trees_determinate_nix_3) - [Introducing lazy trees in Determinate Nix 3.5](https://determinate.systems/posts/changelog-determinate-nix-352/)
* [2025-05-15, 17:34:00](https://science.slashdot.org/story/25/05/15/1734220/baby-is-healed-with-worlds-first-personalized-gene-editing-treatment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Baby Is Healed With World&apos;s First Personalized Gene-Editing Treatment](https://science.slashdot.org/story/25/05/15/1734220/baby-is-healed-with-worlds-first-personalized-gene-editing-treatment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 17:30:03](https://news.ycombinator.com/item?id=43997286) - [Stop using REST for state synchronization (2024)](https://www.mbid.me/posts/stop-using-rest-for-state-synchronization/)
* [2025-05-15, 17:20:21](https://lobste.rs/s/xqshmm/please_please_please) - [Please Please Please](https://we.phorge.it/book/flavor/article/please_please_please/)
* [2025-05-15, 17:08:16](https://lobste.rs/s/1c5g2a/declaring_friendship_self) - [Declaring a friendship to self](https://www.sandordargo.com/blog/2025/05/14/friend-self)
* [2025-05-15, 17:07:11](https://lobste.rs/s/6dsauf/lua_for_elixir) - [Lua for Elixir](https://davelucia.com/blog/lua-elixir)
* [2025-05-15, 17:00:07](https://news.ycombinator.com/item?id=43996980) - [Fetii (YC S22) Is Hiring](https://www.ycombinator.com/companies/fetii/jobs/QDjleWs-senior-operations-manager-fetii)
* [2025-05-15, 16:50:58](https://lobste.rs/s/8rxbcf/asahi_linux_progress_report_linux_6_15) - [Asahi Linux Progress Report: Linux 6.15](https://asahilinux.org/2025/05/progress-report-6-15/)
* [2025-05-15, 16:43:20](https://news.ycombinator.com/item?id=43996796) - [Onfim&apos;s world: Child artists in history](https://resobscura.substack.com/p/onfims-world-medieval-child-artists)
* [2025-05-15, 16:42:00](https://apple.slashdot.org/story/25/05/15/1642216/apple-tags-eu-apps-using-alternative-payments-with-warning-symbols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Tags EU Apps Using Alternative Payments With Warning Symbols](https://apple.slashdot.org/story/25/05/15/1642216/apple-tags-eu-apps-using-alternative-payments-with-warning-symbols?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 16:19:00](https://news.ycombinator.com/item?id=43996555) - [Launch HN: Tinfoil (YC X25): Verifiable Privacy for Cloud AI](https://news.ycombinator.com/item?id=43996555)
* [2025-05-15, 16:05:22](https://news.ycombinator.com/item?id=43996431) - [I don&apos;t like NumPy](https://dynomight.net/numpy/)
* [2025-05-15, 16:00:00](https://yro.slashdot.org/story/25/05/15/140222/google-dominates-ai-patent-applications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Dominates AI Patent Applications](https://yro.slashdot.org/story/25/05/15/140222/google-dominates-ai-patent-applications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 15:52:21](https://news.ycombinator.com/item?id=43996307) - [Coinbase says hackers bribed staff to steal customer data, demanding $20M ransom](https://www.cnbc.com/2025/05/15/coinbase-says-hackers-bribed-staff-to-steal-customer-data-and-are-demanding-20-million-ransom.html)
* [2025-05-15, 15:46:26](https://news.ycombinator.com/item?id=43996251) - [Show HN: Undetectag, track stolen items with AirTag](https://undetectag.com/)
* [2025-05-15, 15:45:43](https://news.ycombinator.com/item?id=43996243) - [Model Organisms Are Not Static](https://www.asimov.press/p/model-organisms-are-not-static)
* [2025-05-15, 15:27:04](https://news.ycombinator.com/item?id=43996031) - [Wavelet Trees: An Introduction (2011)](https://www.alexbowe.com/wavelet-trees/)
* [2025-05-15, 15:20:00](https://news.slashdot.org/story/25/05/15/147249/ftc-delays-click-to-cancel-rule-implementation-to-july?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Delays &apos;Click To Cancel&apos; Rule Implementation To July](https://news.slashdot.org/story/25/05/15/147249/ftc-delays-click-to-cancel-rule-implementation-to-july?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 15:16:00](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss) - [&apos;World&apos;s First&apos; AMD GPU Driven Via USB3 - Tiny Corp Tests EGPUs on Apple Silicon, Linux and Windows](https://soylentnews.org/article.pl?sid=25/05/14/1148216&amp;from=rss)
* [2025-05-15, 14:40:00](https://it.slashdot.org/story/25/05/15/1415242/coinbase-offers-20-million-bounty-to-catch-data-thieves-after-extortion-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Offers $20 Million Bounty To Catch Data Thieves After Extortion Attempt](https://it.slashdot.org/story/25/05/15/1415242/coinbase-offers-20-million-bounty-to-catch-data-thieves-after-extortion-attempt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 14:00:00](https://apple.slashdot.org/story/25/05/15/0832215/trump-tells-apple-ceo-to-avoid-manufacturing-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Tells Apple CEO To Avoid Manufacturing in India](https://apple.slashdot.org/story/25/05/15/0832215/trump-tells-apple-ceo-to-avoid-manufacturing-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 13:56:47](https://news.ycombinator.com/item?id=43995144) - [Demystifying Ruby: It&apos;s all about threads (2024)](https://blog.papey.fr/post/07-demystifying-ruby-01/)
* [2025-05-15, 13:55:00](https://lobste.rs/s/760luf/rethinking_modern_asynchronous) - [Rethinking Modern Asynchronous Paradigms](https://blog.dogac.dev/modern-asynchronous-paradigms/)
* [2025-05-15, 13:54:23](https://news.ycombinator.com/item?id=43995122) - [How we made billing backendless](https://useautumn.com/blog/backendless)
* [2025-05-15, 13:48:02](https://lobste.rs/s/tky59n/my_2025_high_end_linux_pc) - [My 2025 high-end Linux PC](https://michael.stapelberg.ch/posts/2025-05-15-my-2025-high-end-linux-pc/)
* [2025-05-15, 13:41:37](https://news.ycombinator.com/item?id=43995005) - [A Tiny Boltzmann Machine](https://eoinmurray.info/boltzmann-machine)
* [2025-05-15, 13:40:04](https://news.ycombinator.com/item?id=43994987) - [Show HN: Min.js style compression of tech docs for LLM context](https://github.com/marv1nnnnn/llm-min.txt)
* [2025-05-15, 13:26:49](https://news.ycombinator.com/item?id=43994827) - [Show HN: Real-Time Gaussian Splatting](https://github.com/axbycc/LiveSplat)
* [2025-05-15, 13:20:28](https://news.ycombinator.com/item?id=43994765) - [Malicious compliance by booking an available meeting room](https://www.clientserver.dev/p/malicious-compliance-by-booking-an)
* [2025-05-15, 13:20:19](https://lobste.rs/s/iak1lt/forget_ips_using_cryptography_verify_bot) - [Forget IPs: using cryptography to verify bot and agent traffic](https://blog.cloudflare.com/web-bot-auth/)
* [2025-05-15, 13:00:00](https://slashdot.org/story/25/05/15/001250/chatgpt-diminishes-idea-diversity-in-brainstorming-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Diminishes Idea Diversity in Brainstorming, Study Finds](https://slashdot.org/story/25/05/15/001250/chatgpt-diminishes-idea-diversity-in-brainstorming-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 12:32:15](https://news.ycombinator.com/item?id=43994333) - [Pathfinding](https://juhrjuhr.itch.io/deep-space-exploitation/devlog/945428/9-pathfinding)
* [2025-05-15, 12:00:00](https://slashdot.org/story/25/05/15/0010228/microsoft-layoffs-hit-coders-hardest-with-ai-costs-on-the-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Layoffs Hit Coders Hardest With AI Costs on the Rise](https://slashdot.org/story/25/05/15/0010228/microsoft-layoffs-hit-coders-hardest-with-ai-costs-on-the-rise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 10:30:00](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss) - [A New Lazarus Arises – for the Fourth Time – for Pascal Fans](https://soylentnews.org/article.pl?sid=25/05/14/1143244&amp;from=rss)
* [2025-05-15, 10:00:00](https://slashdot.org/story/25/05/15/001248/coreweave-to-spend-up-to-23-billion-this-year-to-tap-ai-demand-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CoreWeave To Spend Up To $23 Billion This Year To Tap AI Demand Boom](https://slashdot.org/story/25/05/15/001248/coreweave-to-spend-up-to-23-billion-this-year-to-tap-ai-demand-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 07:38:33](https://lobste.rs/s/zczgl5/temporal_super_resolution_via) - [Temporal Super Resolution via Multisampling](http://filmicworlds.com/blog/temporal-super-resolution-via-multisampling/)
* [2025-05-15, 07:00:00](https://science.slashdot.org/story/25/05/14/2354249/first-us-hub-for-experimental-medical-treatments-is-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First US Hub For Experimental Medical Treatments Is Coming](https://science.slashdot.org/story/25/05/14/2354249/first-us-hub-for-experimental-medical-treatments-is-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-15, 05:47:00](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss) - [Copyright Office Thinks AI Companies Sometimes Stole Content](https://soylentnews.org/politics/article.pl?sid=25/05/14/1136218&amp;from=rss)
* [2025-05-15, 05:09:55](https://lobste.rs/s/ivoh2z/data_is_code) - [Data is code](https://blog.information-superhighway.net/data-is-code)
* [2025-05-15, 04:20:12](https://lobste.rs/s/sntjcg/rulecompile_undocumented_ghidra) - [RULECOMPILE - Undocumented Ghidra decompiler rule language](https://msm.lt/re/ghidra/rulecompile/)
* [2025-05-15, 04:09:36](https://lobste.rs/s/ot7gbr/stop_using_rest_for_state) - [Stop using REST for state synchronization](https://www.mbid.me/posts/stop-using-rest-for-state-synchronization/)
* [2025-05-15, 01:01:00](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss) - [New Way To Pull Uranium From Water Can Help China&apos;s Nuclear Power Push](https://soylentnews.org/article.pl?sid=25/05/14/0413235&amp;from=rss)
* [2025-05-14, 21:08:03](https://lobste.rs/s/o15bge/scalar_select_anti_pattern) - [Scalar Select Anti-Pattern](https://matklad.github.io/2025/05/14/scalar-select-aniti-pattern.html)
* [2025-05-14, 20:19:23](https://news.ycombinator.com/item?id=43988753) - [The Scalar Select Anti-Pattern](https://matklad.github.io/2025/05/14/scalar-select-aniti-pattern.html)
* [2025-05-14, 20:13:00](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss) - [Ask Soylent: Insert Code Here](https://soylentnews.org/article.pl?sid=25/05/14/0020240&amp;from=rss)
* [2025-05-14, 20:05:40](https://lobste.rs/s/du21xr/why_we_need_lisp_machines) - [Why we need lisp machines](https://fultonsramblings.substack.com/p/why-we-need-lisp-machines)
* [2025-05-14, 19:55:20](https://lobste.rs/s/8yscq2/good_enough_ten_second_sum_types_for) - [Good enough ten-second sum types for Postgres](https://duckrabbit.tech/articles/pg-epoch.html)
* [2025-05-14, 19:44:23](https://lobste.rs/s/s5t6wa/why_i_wrote_fx_web_server) - [Why I wrote the fx web server](https://huijzer.xyz/posts/74)
* [2025-05-14, 18:21:01](https://lobste.rs/s/q919pi/introducing_oniux_kernel_level_tor) - [Introducing oniux: Kernel-level Tor isolation for any Linux app](https://blog.torproject.org/introducing-oniux-tor-isolation-using-linux-namespaces/)
* [2025-05-14, 15:30:00](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss) - [Google Pays $1.375 Billion to Texas Over Unauthorized Tracking and Biometric Data Collection](https://soylentnews.org/article.pl?sid=25/05/13/1445228&amp;from=rss)
* [2025-05-14, 13:26:38](https://lobste.rs/s/anrlu2/sms_2fa_is_not_just_insecure_it_s_also) - [SMS 2FA is not just insecure, it&apos;s also hostile to mountain people](https://blog.stillgreenmoss.net/sms-2fa-is-not-just-insecure-its-also-hostile-to-mountain-people)
* [2025-05-14, 12:19:54](https://lobste.rs/s/w9eg2a/zjit_has_been_merged_into_ruby) - [ZJIT has been merged into Ruby](https://railsatscale.com/2025-05-14-merge-zjit/)
* [2025-05-14, 11:14:40](https://lobste.rs/s/gkpmli/if_ai_is_so_good_at_coding_where_are_open) - [If AI is so good at coding … where are the open source contributions?](https://pivot-to-ai.com/2025/05/13/if-ai-is-so-good-at-coding-where-are-the-open-source-contributions/)
* [2025-05-14, 10:37:00](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss) - [You Think Ransomware is Bad Now? Wait Until It Infects CPUs](https://soylentnews.org/article.pl?sid=25/05/13/0245205&amp;from=rss)
* [2025-05-14, 05:51:00](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss) - [The Viking Age is Undergoing a Revisionist Transformation](https://soylentnews.org/article.pl?sid=25/05/13/0234223&amp;from=rss)
* [2025-05-14, 01:04:00](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss) - [Nvidia NeMo Microservices to Embed AI Agents in Workflows](https://soylentnews.org/article.pl?sid=25/05/13/020213&amp;from=rss)
* [2025-05-13, 20:19:00](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss) - [Wikipedia Launches Legal Challenge Against UK Government](https://soylentnews.org/article.pl?sid=25/05/13/0140243&amp;from=rss)
* [2025-05-13, 15:35:00](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss) - [Charting the Future of Biotechnology and AI](https://soylentnews.org/article.pl?sid=25/05/13/0133228&amp;from=rss)
* [2025-05-13, 15:24:26](https://news.ycombinator.com/item?id=43973964) - [A Tale of a Trailing Dot (2022)](https://daniel.haxx.se/blog/2022/05/12/a-tale-of-a-trailing-dot/)
* [2025-05-13, 13:03:51](https://news.ycombinator.com/item?id=43972485) - [Lua for Elixir](https://davelucia.com/blog/lua-elixir)
* [2025-05-13, 11:20:49](https://news.ycombinator.com/item?id=43971678) - [ML-Enhanced Code Completion Improves Developer Productivity (2022)](https://research.google/blog/ml-enhanced-code-completion-improves-developer-productivity/)
* [2025-05-13, 10:46:00](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss)
* [2025-05-13, 08:29:10](https://news.ycombinator.com/item?id=43970768) - [The Fastest Way yet to Color Graphs](https://www.quantamagazine.org/the-fastest-way-yet-to-color-graphs-20250512/)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
* [2025-05-12, 19:33:00](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss) - [Reverse Engineering the 386 Processor&apos;s Prefetch Queue Circuitry](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss)
* [2025-05-12, 15:46:00](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) - [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss)
* [2025-05-12, 10:57:00](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) - [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss)
* [2025-05-12, 06:12:00](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss) - [Into the Ethical AI Bush](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss)
* [2025-05-12, 01:28:00](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss) - [Skype is Officially Dead](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss)
* [2025-05-11, 20:43:00](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss) - [openSUSE Removes Deepin After Long String of Security Issues and Unauthorised Security Bypass](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
