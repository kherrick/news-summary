# [News Summary](https://kherrick.github.io/news-summary/)

## Telecommunications and Networking

* [AT&T, Verizon, T-Mobile Team Up To Eliminate 'Dead Zones' Across US](https://mobile.slashdot.org/story/26/05/14/1916220/att-verizon-t-mobile-team-up-to-eliminate-dead-zones-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A landmark collaboration between major telecom operators AT&T, Verizon, and T-Mobile aims to eliminate dead zones across the United States, improving connectivity for millions of users. [Comments](https://mobile.slashdot.org/story/26/05/14/1916220/att-verizon-t-mobile-team-up-to-eliminate-dead-zones-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [US Clears H200 Chip Sales To 10 China Firms](https://hardware.slashdot.org/story/26/05/14/1656220/us-clears-h200-chip-sales-to-10-china-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The U.S. government has approved the sale of H200 chips to ten firms in China, signaling a shift in technology trade policies. [Comments](https://hardware.slashdot.org/story/26/05/14/1656220/us-clears-h200-chip-sales-to-10-china-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Legal and Privacy Developments

* [GM Agrees to Pay $12.75 Million to Settle California Lawsuit Over Misuse of Customers' Driving Data](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss) - General Motors agrees to a multimillion-dollar settlement with California over allegations of misusing customer driving data. [Comments](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss).

* [Princeton Will Supervise Exams For First Time In 133 Years Because of AI](https://news.slashdot.org/story/26/05/14/1734202/princeton-will-supervise-exams-for-first-time-in-133-years-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In a historic decision, Princeton will begin supervising exams for the first time in over a century due to concerns around AI misuse. [Comments](https://news.slashdot.org/story/26/05/14/1734202/princeton-will-supervise-exams-for-first-time-in-133-years-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [New arXiv policy: 1-year ban for hallucinated references](https://twitter.com/tdietterich/status/2055000956144935055) - arXiv announces a policy imposing a one-year ban for submitting papers with fabricated references to combat expanding misinformation. [Comments](https://news.ycombinator.com/item?id=48140922).

## Artificial Intelligence and Machine Learning

* [Claude Helps Recover Locked $400K Bitcoin Wallet After 11 Years](https://slashdot.org/story/26/05/14/1857211/claude-helps-recover-locked-400k-bitcoin-wallet-after-11-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovative AI, Claude, assists in recovering a Bitcoin wallet containing $400,000, long thought inaccessible for over a decade. [Comments](https://slashdot.org/story/26/05/14/1857211/claude-helps-recover-locked-400k-bitcoin-wallet-after-11-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Work with Codex from Anywhere](https://openai.com/index/work-with-codex-from-anywhere/) - OpenAI introduces new capabilities for its Codex AI tool, enabling developers to operate with it from virtually any location. [Comments](https://news.ycombinator.com/item?id=48140529).

## Innovations in Technology

* [DIY open-source ultrasound hardware on the rp2040/rp2350](http://un0rick.cc/pic0rick) - A guide to creating an open-source DIY ultrasound device using rp2040 and rp2350, offering affordable remote healthcare solutions. [Comments](https://news.ycombinator.com/item?id=48138913).

* [Tesla Wall Connector bootloader bypasses the firmware downgrade ratchet](https://www.synacktiv.com/en/publications/exploiting-the-tesla-wall-connector-from-its-charge-port-connector-part-2-bypassing) - Security researchers find a way to bypass Tesla Wall Connector firmware restrictions, showcasing vulnerabilities in IoT device security. [Comments](https://news.ycombinator.com/item?id=48140953).

* [Classic 7 is a Windows 10 LTSC mod to look 1:1 to Windows 7](https://classic7.lol/) - Classic 7 demonstrates how to modify Windows 10 LTSC to mimic the aesthetics and functionalities of Windows 7. [Comments](https://lobste.rs/s/ba9zly/classic_7_is_windows_10_ltsc_mod_look_1_1).

## Science and Discovery

* [Physicists Find Possible Errors In 100-Year-Old Model of the Universe](https://science.slashdot.org/story/26/05/14/0542239/physicists-find-possible-errors-in-100-year-old-model-of-the-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New research suggests flaws in a century-old cosmological model, potentially leading to transformative physics insights. [Comments](https://science.slashdot.org/story/26/05/14/0542239/physicists-find-possible-errors-in-100-year-old-model-of-the-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss) - Scientists are baffled by newly developed ultra-stainless steel with magnetic properties that defy existing theories. [Comments](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss).

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

* [2026-05-14, 22:00:00](https://mobile.slashdot.org/story/26/05/14/1916220/att-verizon-t-mobile-team-up-to-eliminate-dead-zones-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T, Verizon, T-Mobile Team Up To Eliminate &apos;Dead Zones&apos; Across US](https://mobile.slashdot.org/story/26/05/14/1916220/att-verizon-t-mobile-team-up-to-eliminate-dead-zones-across-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 21:50:17](https://news.ycombinator.com/item?id=48141732) - [OVMS: Open source electric vehicle remote monitoring, diagnosis and control](https://www.openvehicles.com/home)
* [2026-05-14, 21:05:05](https://news.ycombinator.com/item?id=48141234) - [Claude for Legal](https://github.com/anthropics/claude-for-legal)
* [2026-05-14, 21:00:37](https://news.ycombinator.com/item?id=48141191) - [Infracost (YC W21) Is Hiring Sr Dev Advocate to make agents cloud cost-aware](https://www.ycombinator.com/companies/infracost/jobs/NzwUQ7c-senior-developer-advocate)
* [2026-05-14, 21:00:00](https://tech.slashdot.org/story/26/05/14/199230/writers-are-fleeing-the-substack-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Writers Are Fleeing the Substack Tax](https://tech.slashdot.org/story/26/05/14/199230/writers-are-fleeing-the-substack-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 20:41:48](https://news.ycombinator.com/item?id=48140953) - [Tesla Wall Connector bootloader bypasses the firmware downgrade ratchet](https://www.synacktiv.com/en/publications/exploiting-the-tesla-wall-connector-from-its-charge-port-connector-part-2-bypassing)
* [2026-05-14, 20:39:12](https://news.ycombinator.com/item?id=48140922) - [New arXiv policy: 1-year ban for hallucinated references](https://twitter.com/tdietterich/status/2055000956144935055)
* [2026-05-14, 20:24:58](https://lobste.rs/s/njd25h/core_team_panel_gleam_gathering_2026) - [Core Team Panel - Gleam Gathering 2026](https://youtu.be/LgfzH_WBlr4)
* [2026-05-14, 20:22:35](https://news.ycombinator.com/item?id=48140730) - [Amazonbot is finally respecting robots.txt](https://xeiaso.net/notes/2026/amazonbot-respecting-robots-txt/)
* [2026-05-14, 20:06:53](https://news.ycombinator.com/item?id=48140541) - [RISC-V Router](https://router.start9.com/)
* [2026-05-14, 20:06:14](https://news.ycombinator.com/item?id=48140529) - [Work with Codex from Anywhere](https://openai.com/index/work-with-codex-from-anywhere/)
* [2026-05-14, 20:00:00](https://slashdot.org/story/26/05/14/1857211/claude-helps-recover-locked-400k-bitcoin-wallet-after-11-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Helps Recover Locked $400K Bitcoin Wallet After 11 Years](https://slashdot.org/story/26/05/14/1857211/claude-helps-recover-locked-400k-bitcoin-wallet-after-11-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 19:43:13](https://lobste.rs/s/pegkgv/postgresql_18_4_17_10_closing_11_cves) - [PostgreSQL 18.4, 17.10 closing 11 CVEs](https://www.postgresql.org/about/news/postgresql-184-1710-1614-1518-and-1423-released-3297/)
* [2026-05-14, 19:41:00](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss) - [GM Agrees to Pay $12.75 Million to Settle California Lawsuit Over Misuse of Customers&apos; Driving Data](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss)
* [2026-05-14, 19:01:58](https://news.ycombinator.com/item?id=48139704) - [WinUI 3 Performance: A Leap Forward](https://github.com/microsoft/microsoft-ui-xaml/discussions/11096)
* [2026-05-14, 19:00:00](https://news.slashdot.org/story/26/05/14/1734202/princeton-will-supervise-exams-for-first-time-in-133-years-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Princeton Will Supervise Exams For First Time In 133 Years Because of AI](https://news.slashdot.org/story/26/05/14/1734202/princeton-will-supervise-exams-for-first-time-in-133-years-because-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 18:52:15](https://lobste.rs/s/qmlp53/spam_resistant_forges) - [Spam Resistant Forges](https://blog.feld.me/posts/2026/05/spam-resistant-forges/)
* [2026-05-14, 18:41:17](https://lobste.rs/s/qfbsno/first_public_macos_kernel_memory) - [First public macOS kernel memory corruption exploit on Apple M5](https://blog.calif.io/p/first-public-kernel-memory-corruption)
* [2026-05-14, 18:33:47](https://news.ycombinator.com/item?id=48139316) - [The Power of a Free Popsicle (2018)](https://www.gsb.stanford.edu/insights/power-free-popsicle)
* [2026-05-14, 18:25:10](https://news.ycombinator.com/item?id=48139220) - [Understanding the Linux Kernel: The Linux Kernel Startup](https://internals-for-interns.com/posts/linux-kernel-startup/)
* [2026-05-14, 18:25:09](https://news.ycombinator.com/item?id=48139219) - [First public macOS kernel memory corruption exploit on Apple M5](https://blog.calif.io/p/first-public-kernel-memory-corruption)
* [2026-05-14, 18:19:28](https://news.ycombinator.com/item?id=48139148) - [AI is making me dumb](https://jpain.io/god-damn-ai-is-making-me-dumb/)
* [2026-05-14, 18:19:13](https://news.ycombinator.com/item?id=48139144) - [You Don&apos;t Align an AI, You Align with It](https://danieltan.weblog.lol/2026/05/you-dont-align-an-ai-you-align-with-it)
* [2026-05-14, 18:01:17](https://news.ycombinator.com/item?id=48138913) - [DIY open-source ultrasound hardware on the rp2040/rp2350](http://un0rick.cc/pic0rick)
* [2026-05-14, 18:00:00](https://hardware.slashdot.org/story/26/05/14/1656220/us-clears-h200-chip-sales-to-10-china-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Clears H200 Chip Sales To 10 China Firms](https://hardware.slashdot.org/story/26/05/14/1656220/us-clears-h200-chip-sales-to-10-china-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 17:21:49](https://news.ycombinator.com/item?id=48138332) - [What&apos;s in a GGUF, besides the weights – and what&apos;s still missing?](https://nobodywho.ooo/posts/whats-in-a-gguf/)
* [2026-05-14, 17:17:48](https://news.ycombinator.com/item?id=48138268) - [New Nginx Exploit](https://github.com/DepthFirstDisclosures/Nginx-Rift)
* [2026-05-14, 17:08:00](https://news.ycombinator.com/item?id=48138136) - [Removing the modem and GPS from my 2024 RAV4 hybrid](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/)
* [2026-05-14, 17:07:11](https://lobste.rs/s/zp6fnc/sql_s_order_by_has_come_long_way) - [SQL’s ORDER BY Has Come a Long Way](https://modern-sql.com/blog/2026-05/order-by-history)
* [2026-05-14, 17:00:24](https://lobste.rs/s/wee21u/this_is_written_by_llm_comments_should_be) - [\&quot;This is written by an LLM\&quot; comments should be flagged as off-topic](https://lobste.rs/s/wee21u/this_is_written_by_llm_comments_should_be)
* [2026-05-14, 17:00:00](https://news.slashdot.org/story/26/05/14/1648206/anthropic-forms-200-million-partnership-with-the-gates-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Forms $200 Million Partnership With the Gates Foundation](https://news.slashdot.org/story/26/05/14/1648206/anthropic-forms-200-million-partnership-with-the-gates-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 16:19:29](https://news.ycombinator.com/item?id=48137553) - [HDD Firmware Hacking](https://icode4.coffee/?p=1465)
* [2026-05-14, 16:12:49](https://lobste.rs/s/ci0tgq/how_i_moved_my_digital_stack_europe) - [How I Moved My Digital Stack to Europe](https://monokai.com/articles/how-i-moved-my-digital-stack-to-europe/)
* [2026-05-14, 16:00:00](https://slashdot.org/story/26/05/14/067254/overworked-ai-agents-turn-marxist-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Overworked AI Agents Turn Marxist, Researchers Find](https://slashdot.org/story/26/05/14/067254/overworked-ai-agents-turn-marxist-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 15:52:48](https://lobste.rs/s/x3jzgx/hdd_firmware_hacking_part_1) - [HDD Firmware Hacking Part 1](https://icode4.coffee/?p=1465)
* [2026-05-14, 15:47:31](https://news.ycombinator.com/item?id=48137145) - [RTX 5090 and M4 MacBook Air: Can It Game?](https://scottjg.com/posts/2026-05-05-egpu-mac-gaming/)
* [2026-05-14, 15:39:54](https://lobste.rs/s/tt58t8/libreops) - [LibreOps](https://libreops.cc/about/)
* [2026-05-14, 15:33:51](https://lobste.rs/s/26xxyq/noscript_element_as_trap) - [The &lt;noscript&gt; element as a trap](https://hacktivis.me/articles/no-noscript-element)
* [2026-05-14, 15:22:06](https://lobste.rs/s/5wy2mq/c_26_shipped_simd_library_nobody_asked_for) - [C++26 Shipped a SIMD Library Nobody Asked For](https://lucisqr.substack.com/p/c26-shipped-a-simd-library-nobody)
* [2026-05-14, 15:00:00](https://slashdot.org/story/26/05/14/060203/cisco-to-cut-almost-4000-jobs-in-ai-driven-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cisco To Cut Almost 4,000 Jobs In AI-Driven Restructuring](https://slashdot.org/story/26/05/14/060203/cisco-to-cut-almost-4000-jobs-in-ai-driven-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 14:54:00](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss) - [Both Fedora and Ubuntu Will Get AI Support – Soon](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss)
* [2026-05-14, 14:51:14](https://news.ycombinator.com/item?id=48136262) - [A message from President Kornbluth about funding and the talent pipeline](https://president.mit.edu/writing-speeches/video-transcript-message-president-kornbluth-about-funding-and-talent-pipeline)
* [2026-05-14, 14:37:38](https://lobste.rs/s/oyo7dd/passwords_suck_can_passkeys_replace_them) - [Passwords suck. Can passkeys replace them?](https://kerkour.com/passkeys)
* [2026-05-14, 14:14:09](https://lobste.rs/s/upcqrm/mandy_activitypub_on_goblins) - [Mandy: ActivityPub on Goblins](https://spritely.institute/news/mandy-activitypub-on-goblins.html)
* [2026-05-14, 13:53:43](https://lobste.rs/s/4xgljh/how_do_i_write_elixir_tests) - [How do I write Elixir tests?](https://hauleth.dev/post/writing-tests/)
* [2026-05-14, 13:16:26](https://lobste.rs/s/lapqbz/bun_s_rust_rewrite_has_been_merged) - [Bun&apos;s Rust rewrite has been merged](https://www.reddit.com/r/rust/comments/1tcrmjs/rewrite_bun_in_rust_has_been_merged/)
* [2026-05-14, 12:57:27](https://news.ycombinator.com/item?id=48134743) - [Computer Hobby Movement in Canada](https://museum.eecs.yorku.ca/exhibits/show/hobby_canada/hobby_canada)
* [2026-05-14, 11:37:44](https://lobste.rs/s/9drz1z/hoot_0_9_0_released) - [Hoot 0.9.0 released](https://spritely.institute/news/hoot-0-9-0-released.html)
* [2026-05-14, 11:00:00](https://tech.slashdot.org/story/26/05/14/0554201/mystery-microsoft-bug-leaker-keeps-the-zero-days-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mystery Microsoft Bug Leaker Keeps the Zero-Days Coming](https://tech.slashdot.org/story/26/05/14/0554201/mystery-microsoft-bug-leaker-keeps-the-zero-days-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss) - [Google Says Hackers Used AI to Develop a Major Security Flaw](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss)
* [2026-05-14, 09:56:40](https://lobste.rs/s/wij1pq/browsers_treat_big_sites_differently) - [Browsers Treat Big Sites Differently](https://denodell.com/blog/browsers-treat-big-sites-differently)
* [2026-05-14, 08:15:31](https://news.ycombinator.com/item?id=48132488) - [Rewrite Bun in Rust has been merged](https://github.com/oven-sh/bun/pull/30412)
* [2026-05-14, 07:03:08](https://lobste.rs/s/ba9zly/classic_7_is_windows_10_ltsc_mod_look_1_1) - [Classic 7 is a Windows 10 LTSC mod to look 1:1 to Windows 7](https://classic7.lol/)
* [2026-05-14, 07:00:00](https://science.slashdot.org/story/26/05/14/0542239/physicists-find-possible-errors-in-100-year-old-model-of-the-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Find Possible Errors In 100-Year-Old Model of the Universe](https://science.slashdot.org/story/26/05/14/0542239/physicists-find-possible-errors-in-100-year-old-model-of-the-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 05:23:00](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss) - [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss)
* [2026-05-14, 04:30:00](https://yro.slashdot.org/story/26/05/14/0420215/openai-trial-wraps-up-with-jackass-trophy-for-challenging-musk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Trial Wraps Up With &apos;Jackass&apos; Trophy For Challenging Musk](https://yro.slashdot.org/story/26/05/14/0420215/openai-trial-wraps-up-with-jackass-trophy-for-challenging-musk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-14, 00:49:20](https://lobste.rs/s/nzqsjf/httpx2_fork_by_pydantic) - [httpx2 - Fork by Pydantic](https://tildeweb.nl/~michiel/httpx2.html)
* [2026-05-14, 00:35:00](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss) - [What&apos;s Up With UPSs?](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss)
* [2026-05-13, 23:00:00](https://yro.slashdot.org/story/26/05/13/2041241/man-who-stole-beyonces-hard-drives-gets-five-year-sentence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Who Stole Beyonce&apos;s Hard Drives Gets Five-Year Sentence](https://yro.slashdot.org/story/26/05/13/2041241/man-who-stole-beyonces-hard-drives-gets-five-year-sentence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-13, 22:00:00](https://hardware.slashdot.org/story/26/05/13/2048210/solai-launches-399-solode-neo-linux-ai-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SOLAI Launches $399 Solode Neo Linux AI Computer](https://hardware.slashdot.org/story/26/05/13/2048210/solai-launches-399-solode-neo-linux-ai-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-13, 21:00:00](https://developers.slashdot.org/story/26/05/13/1949225/software-developers-say-ai-is-rotting-their-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Software Developers Say AI Is Rotting Their Brains](https://developers.slashdot.org/story/26/05/13/1949225/software-developers-say-ai-is-rotting-their-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-13, 20:19:37](https://lobste.rs/s/pfbph4/5_years_5m_later_inventing_new) - [5 Years and $5M Later: Inventing a New Programming Language for Web Development Was a Mistake](https://wasp.sh/blog/2026/05/13/new-language-for-web-dev-was-a-mistake)
* [2026-05-13, 20:00:00](https://tech.slashdot.org/story/26/05/13/1938254/windows-update-is-getting-automatic-rollbacks-for-faulty-drivers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Update Is Getting Automatic Rollbacks For Faulty Drivers](https://tech.slashdot.org/story/26/05/13/1938254/windows-update-is-getting-automatic-rollbacks-for-faulty-drivers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/05/13/191214&amp;from=rss) - [Workers Pay the Price of Burnout. Should Employers Cover the Cost?](https://soylentnews.org/article.pl?sid=26/05/13/191214&amp;from=rss)
* [2026-05-13, 17:23:06](https://lobste.rs/s/rnpigi/may_i_recommend_understanding_emacs_s) - [May I recommend… understanding Emacs&apos;s patterns](https://www.chiply.dev/post-emacs-carnival-may)
* [2026-05-13, 17:07:00](https://soylentnews.org/article.pl?sid=26/05/11/148254&amp;from=rss) - [Louis Rossmann Tells 3D Printer Maker Bambu Lab To ‘Go (Bleep) Yourself’ Over Its Threatened Lawsuit](https://soylentnews.org/article.pl?sid=26/05/11/148254&amp;from=rss)
* [2026-05-13, 17:02:44](https://lobste.rs/s/xsifwf/points_are_weird_inconsistent_unit) - [Points are a weird and inconsistent unit of measure](https://buttondown.com/hillelwayne/archive/points-are-a-weird-and-inconsistent-unit-of/)
* [2026-05-13, 15:49:46](https://lobste.rs/s/g4lj0n/setting_up_free_city_state_us_locality) - [Setting up a free *.city.state.us locality domain](https://fredchan.org/blog/locality-domains-guide/)
* [2026-05-13, 13:25:30](https://lobste.rs/s/jgmrz0/most_emacs_bzr_saga) - [The Most Emacs Bzr Saga](https://thanosapollo.org/posts/bzr-saga/)
* [2026-05-13, 12:23:45](https://lobste.rs/s/yyfjd1/sovereign_tech_fund_invests_over_1) - [Sovereign Tech Fund invests over €1 million in KDE software development](https://kde.org/announcements/sovereign-tech-fund-invests-kde/)
* [2026-05-13, 12:21:00](https://soylentnews.org/article.pl?sid=26/05/11/146201&amp;from=rss) - [LLMs Are Different and LLMs Are the Same](https://soylentnews.org/article.pl?sid=26/05/11/146201&amp;from=rss)
* [2026-05-13, 07:35:00](https://soylentnews.org/article.pl?sid=26/05/11/1331243&amp;from=rss) - [A Simple Way of Making Hydrogen From Alcohol by Using Iron and UV Light](https://soylentnews.org/article.pl?sid=26/05/11/1331243&amp;from=rss)
* [2026-05-13, 02:49:00](https://soylentnews.org/article.pl?sid=26/05/11/1329241&amp;from=rss) - [MIT Researchers Revive 40-Year-Old Triangular Zipper Concept Now Made Possible by 3D Printing](https://soylentnews.org/article.pl?sid=26/05/11/1329241&amp;from=rss)
* [2026-05-12, 22:06:00](https://soylentnews.org/article.pl?sid=26/05/11/1323253&amp;from=rss) - [Scientists Identify a Hidden Blood Particle Linked to Higher Risk of Stroke and Death](https://soylentnews.org/article.pl?sid=26/05/11/1323253&amp;from=rss)
* [2026-05-12, 17:24:00](https://soylentnews.org/article.pl?sid=26/05/11/1325244&amp;from=rss) - [Kdenlive 26.04.1 Video Editor Fixes Serious Project File Security Flaw](https://soylentnews.org/article.pl?sid=26/05/11/1325244&amp;from=rss)
* [2026-05-12, 15:23:58](https://news.ycombinator.com/item?id=48109677) - [Wrap Go binaries in Python wheels](https://github.com/simonw/go-to-wheel)
* [2026-05-12, 14:14:04](https://news.ycombinator.com/item?id=48108621) - [Int a = 5; a = a++ + ++a; a =? (2011)](https://gynvael.coldwind.pl/?id=372)
* [2026-05-12, 12:41:00](https://soylentnews.org/article.pl?sid=26/05/11/1328203&amp;from=rss) - [Everyone&apos;s a Loser in Strait of Hormuz Game That Simulates Global Crisis](https://soylentnews.org/article.pl?sid=26/05/11/1328203&amp;from=rss)
* [2026-05-12, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/11/1321256&amp;from=rss) - [Link Between Pollinators and Diverse Landscapes is a Two-Way Street](https://soylentnews.org/article.pl?sid=26/05/11/1321256&amp;from=rss)
* [2026-05-12, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/11/041243&amp;from=rss) - [Could the Universe&apos;s Hidden Shape Solve One of Physics’ Biggest Mysteries?](https://soylentnews.org/article.pl?sid=26/05/11/041243&amp;from=rss)
* [2026-05-11, 22:21:00](https://soylentnews.org/article.pl?sid=26/05/11/0353247&amp;from=rss) - [Here&apos;s What Has To Happen If NASA Wants To Land On The Moon Every Month](https://soylentnews.org/article.pl?sid=26/05/11/0353247&amp;from=rss)
* [2026-05-11, 20:39:21](https://news.ycombinator.com/item?id=48100368) - [Fossils show millipede and centipede ancestors evolved legs underwater](https://phys.org/news/2026-05-ancient-sea-fossils-millipede-centipede.html)
* [2026-05-11, 19:03:01](https://news.ycombinator.com/item?id=48099240) - [London&apos;s Smallest Public Sculptures](https://lookup.london/londons-smallest-public-sculptures/)
* [2026-05-11, 17:39:00](https://soylentnews.org/article.pl?sid=26/05/11/0344219&amp;from=rss) - [Lenovo and Dell Are Now Funding the Service That Ships Firmware to Millions of Linux Devices](https://soylentnews.org/article.pl?sid=26/05/11/0344219&amp;from=rss)
* [2026-05-11, 17:17:20](https://news.ycombinator.com/item?id=48097786) - [Porting 3D Movie Maker to Linux](https://benstoneonline.com/posts/porting-3d-movie-maker-to-linux/)
* [2026-05-11, 14:30:02](https://news.ycombinator.com/item?id=48095490) - [The Biochemical Beauty of Retatrutide: How GLP-1s Work](https://acesounderglass.com/2025/10/13/the-biochemical-beauty-of-retatrutide-how-glp-1s-actually-work/)
* [2026-05-11, 12:55:00](https://soylentnews.org/article.pl?sid=26/05/10/0248240&amp;from=rss) - [Survey Shows That 47% Oppose the Construction of New AI Data Centers in Their Neighborhood](https://soylentnews.org/article.pl?sid=26/05/10/0248240&amp;from=rss)
* [2026-05-11, 08:04:00](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss) - [After 100 Years, Scientists Uncover Hidden Rule Governing Cosmic Rays](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss)
* [2026-05-11, 03:21:00](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss) - [Google Chrome Downloading 4GB AI Model to Your Device Without Asking Re-Downloads When You Delete It](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss)
* [2026-05-10, 22:37:00](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss) - [Researcher Shows Edge Browser Stores Saved Passwords in Plaintext](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss)
* [2026-05-10, 17:52:00](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss) - [Huawei Braces for $12 Billion in AI Chip Revenue Driven by Homegrown AI Model Demand](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss)
* [2026-05-10, 13:05:00](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss) - [The French Administrative Supreme Court Rules Against HADOPI in Favor of La Quadrature Du Net](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss)
* [2026-05-10, 08:21:00](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss) - [Apple Agrees to Pay iPhone Owners $250 Million for Not Delivering AI Siri](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss)
* [2026-05-10, 03:33:00](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss) - [Chocolate Factory Strikes Again (and Again, and Again, and ...)](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss)
* [2026-05-10, 01:01:23](https://news.ycombinator.com/item?id=48079933) - [60fps Video on a CGA? – The GlyphBlaster](https://martypc.blogspot.com/2026/05/60fps-video-on-cga-glyphblaster.html)
