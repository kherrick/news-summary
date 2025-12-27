# [News Summary](https://kherrick.github.io/news-summary/)

## Internet Technology and Development

* [Cloudflare Is Ruining the Internet](https://www.slashgeek.net/2016/05/17/cloudflare-is-ruining-the-internet-for-me/) - A critique on how Cloudflare is affecting the internet, with [comments](https://news.ycombinator.com/item?id=46400490).

* [QNX Self-Hosted Developer Desktop Brings QNX 8.0 To A Wayland + Xfce Desktop](https://www.phoronix.com/news/QNX-Self-Hosted-Dev-Desktop) - The introduction of QNX 8.0-enabled desktop environment, including [discussion](https://lobste.rs/s/xmy2nk/qnx_self_hosted_developer_desktop_brings).

* [Show HN: Ez FFmpeg – Video editing in plain English](http://npmjs.com/package/ezff) - A simplified video editing tool using FFmpeg, with [comments](https://news.ycombinator.com/item?id=46400251).

* [More Dynamic Cronjobs](https://george.mand.is/2025/09/more-dynamic-cronjobs/) - Discussing advancements in managing cronjobs dynamically, with [comments](https://news.ycombinator.com/item?id=46399576).

* [Pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/) - Analysis of the limitations of pre-commit hooks, featuring perspectives from [Hacker News](https://news.ycombinator.com/item?id=46398906) and [Lobsters](https://lobste.rs/s/pjysyq/pre_commit_hooks_are_fundamentally).

* [Publishing your work increases your luck](https://github.com/readme/guides/publishing-your-work) - How sharing your projects can open unexpected opportunities, discussed on [Hacker News](https://news.ycombinator.com/item?id=46397991).

## AI, Philosophy, and Consciousness

* [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - A philosopher's insights on the challenges of identifying AI consciousness, with reader comments [here](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss).

* [AI Police Reports: Year in Review](https://www.eff.org/deeplinks/2025/12/ai-police-reports-year-review) - Reviewing the growing role of AI in law enforcement, with discussions on [Hacker News](https://news.ycombinator.com/item?id=46367195).

* [Calibre adds AI 'discussion' feature](https://lwn.net/Articles/1049886/) - Calibre's integration with AI for enhanced eBook management features, details discussed [here](https://lobste.rs/s/3detwi/calibre_adds_ai_discussion_feature).

## Science and Technology Discoveries

* [The Proton, the 'Most Complicated Thing You Could Possibly Imagine'](https://www.quantamagazine.org/inside-the-proton-the-most-complicated-thing-imaginable-20221019/) - A deep dive into the science of protons, with [Hacker News discussion](https://news.ycombinator.com/item?id=46398666).

* [Researchers develop a camera that can focus on different distances at once](https://engineering.cmu.edu/news-events/news/2025/12/19-perfect-shot.html) - A groundbreaking camera technology that redefines focusing, discussed on [Hacker News](https://news.ycombinator.com/item?id=46369808).

* [Experts explore new mushroom which causes fairytale-like hallucinations](https://nhmu.utah.edu/articles/experts-explore-new-mushroom-which-causes-fairytale-hallucinations) - Discovery of a mushroom with unique hallucination effects, with related [comments](https://news.ycombinator.com/item?id=46393936).

## Open Source Innovation

* [Automating What Backblaze Lifecycle Rules Don't Do Instantly](https://blog.tymscar.com/posts/backblazeb2cleanup/) - Explore a new automation approach to enhance Backblaze workflows, with insights from [Lobsters](https://lobste.rs/s/abglcr/automating_what_backblaze_lifecycle).

* [GNU Mes and the module system](https://ekaitz.elenq.tech/fasterMes5.html) - Insights into GNU Mes improvements catered to developers, with [Lobsters discussion](https://lobste.rs/s/byjzpj/gnu_mes_module_system).

* [Show HN: Witr – Explain why a process is running on your Linux system](https://github.com/pranshuparmar/witr) - A tool to analyze processes on Linux systems, explored on [Hacker News](https://news.ycombinator.com/item?id=46392910).

## Cultural and Societal Topics

* [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - The end of an era for the Danish postal service, with comments on [SoylentNews](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss).

* [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - An exploration into a lesser-known piece of Alan Turing's legacy, discussed on [SoylentNews](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss).

* [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - Revealing the cultural history behind hammocks, with discussion [here](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss).

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

* [2025-12-27, 09:33:14](https://news.ycombinator.com/item?id=46400490) - [Cloudflare Is Ruining the Internet](https://www.slashgeek.net/2016/05/17/cloudflare-is-ruining-the-internet-for-me/)
* [2025-12-27, 08:52:40](https://lobste.rs/s/xmy2nk/qnx_self_hosted_developer_desktop_brings) - [QNX Self-Hosted Developer Desktop Brings QNX 8.0 To A Wayland + Xfce Desktop](https://www.phoronix.com/news/QNX-Self-Hosted-Dev-Desktop)
* [2025-12-27, 08:45:46](https://news.ycombinator.com/item?id=46400251) - [Show HN: Ez FFmpeg – Video editing in plain English](http://npmjs.com/package/ezff)
* [2025-12-27, 08:18:45](https://lobste.rs/s/p2yx0g/39c3_power_cycles_streaming) - [39C3: Power Cycles Streaming](https://streaming.media.ccc.de/39c3)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 06:10:42](https://news.ycombinator.com/item?id=46399576) - [More Dynamic Cronjobs](https://george.mand.is/2025/09/more-dynamic-cronjobs/)
* [2025-12-27, 03:45:20](https://news.ycombinator.com/item?id=46398906) - [Pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/)
* [2025-12-27, 03:44:30](https://lobste.rs/s/pjysyq/pre_commit_hooks_are_fundamentally) - [pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/)
* [2025-12-27, 03:00:00](https://news.ycombinator.com/item?id=46398666) - [The Proton, the &apos;Most Complicated Thing You Could Possibly Imagine&apos;](https://www.quantamagazine.org/inside-the-proton-the-most-complicated-thing-imaginable-20221019/)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-27, 01:16:53](https://news.ycombinator.com/item?id=46398201) - [QNX Self-Hosted Developer Desktop](https://devblog.qnx.com/qnx-self-hosted-developer-desktop-initial-release/)
* [2025-12-27, 00:43:04](https://news.ycombinator.com/item?id=46397991) - [Publishing your work increases your luck](https://github.com/readme/guides/publishing-your-work)
* [2025-12-26, 23:42:46](https://news.ycombinator.com/item?id=46397609) - [Exe.dev](https://exe.dev/)
* [2025-12-26, 23:09:40](https://news.ycombinator.com/item?id=46397379) - [Always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-12-26, 22:33:20](https://lobste.rs/s/ykxhnw/rime_ancient_maintainer) - [The Rime of the Ancient Maintainer](https://www.joanwestenberg.com/the-rime-of-the-ancient-maintainer/)
* [2025-12-26, 22:18:19](https://lobste.rs/s/aw9zjc/llm_grep_match_lines_using_both_classic) - [llm-grep: Match lines using both classic and semantic regular expressions](https://github.com/vagos/llm-grep)
* [2025-12-26, 21:42:32](https://lobste.rs/s/oydvli/enabling_c_threads_python_wasm) - [\&quot;Enabling\&quot; C threads in a Python / Wasm environment](https://yosefk.com/blog/enabling-c-threads-in-a-python-wasm-environment.html)
* [2025-12-26, 21:29:53](https://lobste.rs/s/9ncsiq/contract_md_naughty_list_for_ai_coding) - [CONTRACT.md: The Naughty List for AI Coding Agents](https://www.discussdontcode.com/zettels/contract.md-the-naughty-list-for-ai-coding-agents/)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 20:41:47](https://lobste.rs/s/mn8h3l/how_i_think_about_kubernetes) - [How I think about Kubernetes](https://garnaudov.com/writings/how-i-think-about-kubernetes/)
* [2025-12-26, 20:39:47](https://lobste.rs/s/zdbmwm/reimplementing_flashattention_for) - [Reimplementing FlashAttention for performance and giggles](https://aminediro.com/posts/flash_attn/)
* [2025-12-26, 20:28:53](https://news.ycombinator.com/item?id=46395885) - [Toys with the highest play-time and lowest clean-up-time](https://joannabregan.substack.com/p/toys-with-the-highest-play-time-and)
* [2025-12-26, 20:27:50](https://news.ycombinator.com/item?id=46395871) - [T-Ruby is Ruby with syntax for types](https://type-ruby.github.io/)
* [2025-12-26, 20:00:00](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FFmpeg Developer Files DMCA Against Rockchip After Two-Year Wait for License Fix](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 19:41:18](https://lobste.rs/s/uoz0h9/from_intent_proof_dafny_verification_for) - [From Intent to Proof: Dafny Verification for Web Apps](https://midspiral.com/blog/from-intent-to-proof-dafny-verification-for-web-apps/)
* [2025-12-26, 19:17:30](https://lobste.rs/s/yasyrg/simplifying_build_process_for_vst3_rs) - [Simplifying the build process for vst3-rs](https://micahrj.github.io/posts/vst3/)
* [2025-12-26, 19:13:22](https://news.ycombinator.com/item?id=46395184) - [My insulin pump controller uses the Linux kernel. It also violates the GPL](https://old.reddit.com/r/linux/comments/1puojsr/the_device_that_controls_my_insulin_pump_uses_the/)
* [2025-12-26, 19:03:32](https://news.ycombinator.com/item?id=46395106) - [How Lewis Carroll computed determinants (2023)](https://www.johndcook.com/blog/2023/07/10/lewis-carroll-determinants/)
* [2025-12-26, 18:59:39](https://news.ycombinator.com/item?id=46395061) - [Drawing with zero-width characters](https://zw.swerdlow.dev)
* [2025-12-26, 18:44:10](https://lobste.rs/s/69el0u/show_twine_tool_dynamically_trace_calls) - [Show: Twine - A tool to dynamically trace calls in production Elixir systems](https://github.com/ollien/twine)
* [2025-12-26, 18:40:00](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian IT Was Supposed To Die From AI. Instead It&apos;s Billing for the Cleanup.](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 18:16:09](https://lobste.rs/s/dqwid1/how_uv_got_so_fast) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 17:37:00](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As AI Companies Borrow Billions, Debt Investors Grow Wary](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 17:13:07](https://news.ycombinator.com/item?id=46393992) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 17:09:45](https://lobste.rs/s/3detwi/calibre_adds_ai_discussion_feature) - [Calibre adds AI &apos;discussion&apos; feature](https://lwn.net/Articles/1049886/)
* [2025-12-26, 17:07:53](https://news.ycombinator.com/item?id=46393936) - [Experts explore new mushroom which causes fairytale-like hallucinations](https://nhmu.utah.edu/articles/experts-explore-new-mushroom-which-causes-fairytale-hallucinations)
* [2025-12-26, 16:49:44](https://lobste.rs/s/ohipi0/profiling_sampling_statistical) - [profiling.sampling: Statistical profiler](https://docs.python.org/3.15/library/profiling.sampling.html)
* [2025-12-26, 16:30:59](https://lobste.rs/s/pl1lmb/til_serde_s_borrowing_can_be_treacherous) - [TIL: serde&apos;s borrowing can be treacherous](https://yossarian.net/til/post/serde-s-borrowing-can-be-treacherous/)
* [2025-12-26, 16:24:00](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Economic Divide Between Big and Small Companies Is Growing](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 15:32:38](https://lobste.rs/s/j6spka/play_monty_hall_game) - [Play the Monty Hall game](https://monty.donk.systems)
* [2025-12-26, 15:20:36](https://news.ycombinator.com/item?id=46392910) - [Show HN: Witr – Explain why a process is running on your Linux system](https://github.com/pranshuparmar/witr)
* [2025-12-26, 15:08:00](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retreating From EVs Could Be Hazardous For Western Carmakers](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 15:07:01](https://news.ycombinator.com/item?id=46392736) - [Show HN: Xcc700: Self-hosting mini C compiler for ESP32 (Xtensa) in 700 lines](https://github.com/valdanylchuk/xcc700)
* [2025-12-26, 14:05:00](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Hunger For Memory Chips Could Shrink Smartphone and PC Sales in 2026, IDC Says](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 12:59:56](https://news.ycombinator.com/item?id=46391599) - [LearnixOS](https://www.learnix-os.com)
* [2025-12-26, 12:55:16](https://news.ycombinator.com/item?id=46391572) - [Ask HN: What did you read in 2025?](https://news.ycombinator.com/item?id=46391572)
* [2025-12-26, 12:46:36](https://news.ycombinator.com/item?id=46391514) - [Package managers keep using Git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-26, 12:46:05](https://lobste.rs/s/gwmwx7/algebra_loans_rust) - [The Algebra of Loans in Rust](https://nadrieril.github.io/blog/2025/12/21/the-algebra-of-loans-in-rust.html)
* [2025-12-26, 12:31:00](https://slashdot.org/story/25/12/26/0641227/china-launches-21-billion-venture-capital-funds-to-invest-in-hard-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches $21 Billion Venture Capital Funds To Invest in &apos;Hard Technology&apos;](https://slashdot.org/story/25/12/26/0641227/china-launches-21-billion-venture-capital-funds-to-invest-in-hard-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 12:27:02](https://lobste.rs/s/byjzpj/gnu_mes_module_system) - [GNU Mes and the module system](https://ekaitz.elenq.tech/fasterMes5.html)
* [2025-12-26, 12:04:24](https://lobste.rs/s/bjn0cl/i_m_laptop_weirdo_s_why_i_like_my_new) - [I&apos;m a laptop weirdo and that&apos;s why I like my new Framework 13](https://blog.matthewbrunelle.com/im-a-laptop-weirdo-and-thats-why-i-like-my-new-framework-13/)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 11:17:15](https://lobste.rs/s/n4kxdf/rob_pike_goes_nuclear_over_genai) - [Rob Pike Goes Nuclear over GenAI](https://imgur.com/nUJCI3o)
* [2025-12-26, 10:01:00](https://developers.slashdot.org/story/25/12/26/0628235/memory-is-running-out-and-so-are-excuses-for-software-bloat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Memory is Running Out, and So Are Excuses For Software Bloat&apos;](https://developers.slashdot.org/story/25/12/26/0628235/memory-is-running-out-and-so-are-excuses-for-software-bloat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 09:43:09](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend)
* [2025-12-26, 07:00:00](https://developers.slashdot.org/story/25/12/26/0623233/cursor-ceo-warns-vibe-coding-builds-shaky-foundations-that-eventually-crumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cursor CEO Warns Vibe Coding Builds &apos;Shaky Foundations&apos; That Eventually Crumble](https://developers.slashdot.org/story/25/12/26/0623233/cursor-ceo-warns-vibe-coding-builds-shaky-foundations-that-eventually-crumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 06:05:07](https://lobste.rs/s/jkomyi/writing_nes_emulator_haskell) - [Writing an NES emulator in Haskell](https://arthi-chaud.github.io/posts/funes/)
* [2025-12-26, 04:30:00](https://apple.slashdot.org/story/25/12/26/041227/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s App Course Runs $20,000 a Student. Is It Really Worth It?](https://apple.slashdot.org/story/25/12/26/041227/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 01:55:00](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail Users May Soon Be Able To Change Their Email Address and Keep the Old One](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-26, 00:59:00](https://lobste.rs/s/abglcr/automating_what_backblaze_lifecycle) - [Automating What Backblaze Lifecycle Rules Don&apos;t Do Instantly](https://blog.tymscar.com/posts/backblazeb2cleanup/)
* [2025-12-26, 00:39:00](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Settles Brazilian Antitrust Case, Must Allow Third-Party App Stores and External Payment Links](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 21:00:00](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 19:01:00](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Has Stopped Rewarding &apos;Strategic&apos; Layoffs](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 18:00:00](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Social Media Users Criticize Authorities in Rare Sign of Dissent](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 15:14:42](https://lobste.rs/s/kplced/html_elements_time_forgot) - [The HTML Elements Time Forgot](https://htmhell.dev/adventcalendar/2025/22/)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-23, 21:42:36](https://news.ycombinator.com/item?id=46369808) - [Researchers develop a camera that can focus on different distances at once](https://engineering.cmu.edu/news-events/news/2025/12/19-perfect-shot.html)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 17:30:15](https://news.ycombinator.com/item?id=46367195) - [AI Police Reports: Year in Review](https://www.eff.org/deeplinks/2025/12/ai-police-reports-year-review)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 14:51:33](https://news.ycombinator.com/item?id=46365726) - [The best things and stuff of 2025](https://blog.fogus.me/2025/12/23/the-best-things-and-stuff-of-2025.html)
* [2025-12-23, 13:39:47](https://news.ycombinator.com/item?id=46365241) - [Moravec&apos;s Paradox and the Robot Olympics](https://www.physicalintelligence.company/blog/olympics)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
