# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Insights and Innovations

* ["Enabling" C threads in a Python / Wasm environment](https://yosefk.com/blog/enabling-c-threads-in-a-python-wasm-environment.html) - Exploring how C threads can be implemented within a Python and WebAssembly context. [Article](https://lobste.rs/s/oydvli/enabling_c_threads_python_wasm)

* [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html) - Investigating the engineering and optimization of the uv networking library. [Discussion](https://lobste.rs/s/dqwid1/how_uv_got_so_fast)

* [Show HN: AutoLISP interpreter in Rust/WASM – a CAD workflow invented 33 yrs ago](https://acadlisp.de/noscript.html) - A new Rust/WASM project brings fresh life to the time-honored AutoLISP CAD programming language. [Discussion](https://news.ycombinator.com/item?id=46393271)

* [TurboDiffusion: 100–200× Acceleration for Video Diffusion Models](https://github.com/thu-ml/TurboDiffusion) - Innovative techniques dramatically speed up video diffusion models. [Discussion](https://news.ycombinator.com/item?id=46388907)

* [ZJIT is now available in Ruby 4.0](https://railsatscale.com/2025-12-24-launch-zjit/) - Learn about the introduction of ZJIT in Ruby 4.0, promising significant performance boosts. [Discussion](https://news.ycombinator.com/item?id=46393906)

## Open Source and Development Tools

* [FFmpeg Developer Files DMCA Against Rockchip After Two-Year Wait for License Fix](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An in-depth legal battle highlights the challenges of open-source software licensing. [Discussion](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix)

* [Simplifying the build process for vst3-rs](https://micahrj.github.io/posts/vst3/) - Improvements in the build process for vst3-rs library simplify music and audio developments. [Discussion](https://lobste.rs/s/yasyrg/simplifying_build_process_for_vst3_rs)

* [GNU Mes and the module system](https://ekaitz.elenq.tech/fasterMes5.html) - Unpacking the modular approach in the GNU Mes system. [Discussion](https://lobste.rs/s/byjzpj/gnu_mes_module_system)

* [Show HN: Witr – Explain why a process is running on your Linux system](https://github.com/pranshuparmar/witr) - A new tool to understand the rationale behind running processes in Linux systems. [Discussion](https://news.ycombinator.com/item?id=46392910)

## Science and Research Developments

* [High school student discovers 1.5M potential new astronomical objects](https://www.smithsonianmag.com/smart-news/high-school-student-discovers-1-5-million-potential-new-astronomical-objects-by-developing-an-ai-algorithm-180986429/) - A high school student's AI-based algorithm identifies a stunning number of celestial objects. [Discussion](https://news.ycombinator.com/item?id=46392815)

* [Experts explore new mushroom which causes fairytale-like hallucinations](https://nhmu.utah.edu/articles/experts-explore-new-mushroom-which-causes-fairytale-hallucinations) - Unveiling a magical mushroom with fascinating hallucinatory effects. [Discussion](https://news.ycombinator.com/item?id=46393936)

* [How Lewis Carroll computed determinants](https://www.johndcook.com/blog/2023/07/10/lewis-carroll-determinants/) - A historical dive into Lewis Carroll's mathematical methodologies. [Discussion](https://news.ycombinator.com/item?id=46395106)

## Security and Legal Implications

* [MongoBleed](https://github.com/joe-desimone/mongobleed/blob/main/mongobleed.py) - Introducing a new security exploit named MongoBleed targeting MongoDB installations. [Discussion](https://news.ycombinator.com/item?id=46394620)

* [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - Discussing the implications of warrantless access to private Google searches. [Discussion](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)

* [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - Reddit confronts Australia's stringent social media regulations in a legal battle. [Discussion](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)

## Society and Cultural Discourse

* [Rob Pike Goes Nuclear over GenAI](https://skyview.social/?url=https%3A%2F%2Fbsky.app%2Fprofile%2Frobpike.io%2Fpost%2F3matwg6w3ic2s&amp;viewtype=tree) - Renowned programmer Rob Pike shares a passionate critique of generative AI. [Discussion](https://news.ycombinator.com/item?id=46392115)

* [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - A fascinating look at Alan Turing's covert wartime contributions. [Discussion](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)

* [LearnixOS](https://www.learnix-os.com) - An exploration of LearnixOS, a novel approach to Linux systems. [Discussion](https://news.ycombinator.com/item?id=46391599)

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

* [2025-12-26, 21:42:32](https://lobste.rs/s/oydvli/enabling_c_threads_python_wasm) - [\&quot;Enabling\&quot; C threads in a Python / Wasm environment](https://yosefk.com/blog/enabling-c-threads-in-a-python-wasm-environment.html)
* [2025-12-26, 21:29:53](https://lobste.rs/s/9ncsiq/contract_md_naughty_list_for_ai_coding) - [CONTRACT.md: The Naughty List for AI Coding Agents](https://www.discussdontcode.com/zettels/contract.md-the-naughty-list-for-ai-coding-agents/)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 20:44:28](https://news.ycombinator.com/item?id=46396043) - [I Think about Kubernetes](https://garnaudov.com/writings/how-i-think-about-kubernetes/)
* [2025-12-26, 20:41:47](https://lobste.rs/s/mn8h3l/how_i_think_about_kubernetes) - [How I think about Kubernetes](https://garnaudov.com/writings/how-i-think-about-kubernetes/)
* [2025-12-26, 20:00:00](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FFmpeg Developer Files DMCA Against Rockchip After Two-Year Wait for License Fix](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 19:41:18](https://lobste.rs/s/uoz0h9/from_intent_proof_dafny_verification_for) - [From Intent to Proof: Dafny Verification for Web Apps](https://midspiral.com/blog/from-intent-to-proof-dafny-verification-for-web-apps/)
* [2025-12-26, 19:23:28](https://news.ycombinator.com/item?id=46395273) - [Gaussian Splatting 3 Ways](https://github.com/NullandKale/NullSplats)
* [2025-12-26, 19:17:30](https://lobste.rs/s/yasyrg/simplifying_build_process_for_vst3_rs) - [Simplifying the build process for vst3-rs](https://micahrj.github.io/posts/vst3/)
* [2025-12-26, 19:13:22](https://news.ycombinator.com/item?id=46395184) - [My insulin pump controller uses the Linux kernel. It also violates the GPL](https://old.reddit.com/r/linux/comments/1puojsr/the_device_that_controls_my_insulin_pump_uses_the/)
* [2025-12-26, 19:03:32](https://news.ycombinator.com/item?id=46395106) - [How Lewis Carroll computed determinants](https://www.johndcook.com/blog/2023/07/10/lewis-carroll-determinants/)
* [2025-12-26, 18:59:39](https://news.ycombinator.com/item?id=46395061) - [Drawing with zero-width characters](https://zw.swerdlow.dev)
* [2025-12-26, 18:44:10](https://lobste.rs/s/69el0u/show_twine_tool_dynamically_trace_calls) - [Show: Twine - A tool to dynamically trace calls in production Elixir systems](https://github.com/ollien/twine)
* [2025-12-26, 18:40:00](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian IT Was Supposed To Die From AI. Instead It&apos;s Billing for the Cleanup.](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 18:17:00](https://news.ycombinator.com/item?id=46394620) - [MongoBleed](https://github.com/joe-desimone/mongobleed/blob/main/mongobleed.py)
* [2025-12-26, 18:16:09](https://lobste.rs/s/dqwid1/how_uv_got_so_fast) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 17:52:42](https://lobste.rs/s/mzi7gm/on_metastable_failures_interactions) - [On Metastable Failures and Interactions Between Systems](https://charap.co/on-metastable-failures-and-interactions-between-systems/)
* [2025-12-26, 17:48:25](https://news.ycombinator.com/item?id=46394327) - [FFmpeg has issued a DMCA takedown on GitHub](https://twitter.com/FFmpeg/status/2004599109559496984)
* [2025-12-26, 17:37:00](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As AI Companies Borrow Billions, Debt Investors Grow Wary](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 17:29:31](https://news.ycombinator.com/item?id=46394169) - [A Proclamation Regarding the Restoration of the Dash](https://blog.nawaz.org/posts/2025/Dec/a-proclamation-regarding-the-restoration-of-the-dash/)
* [2025-12-26, 17:13:07](https://news.ycombinator.com/item?id=46393992) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 17:07:53](https://news.ycombinator.com/item?id=46393936) - [Experts explore new mushroom which causes fairytale-like hallucinations](https://nhmu.utah.edu/articles/experts-explore-new-mushroom-which-causes-fairytale-hallucinations)
* [2025-12-26, 17:06:35](https://news.ycombinator.com/item?id=46393924) - [C/C++ Embedded Files (2013)](https://www.4rknova.com//blog/2013/01/27/cpp-embedded-files)
* [2025-12-26, 17:04:42](https://news.ycombinator.com/item?id=46393906) - [ZJIT is now available in Ruby 4.0](https://railsatscale.com/2025-12-24-launch-zjit/)
* [2025-12-26, 16:49:44](https://lobste.rs/s/ohipi0/profiling_sampling_statistical) - [profiling.sampling: Statistical profiler](https://docs.python.org/3.15/library/profiling.sampling.html)
* [2025-12-26, 16:30:59](https://lobste.rs/s/pl1lmb/til_serde_s_borrowing_can_be_treacherous) - [TIL: serde&apos;s borrowing can be treacherous](https://yossarian.net/til/post/serde-s-borrowing-can-be-treacherous/)
* [2025-12-26, 16:24:00](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Economic Divide Between Big and Small Companies Is Growing](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 15:56:52](https://news.ycombinator.com/item?id=46393271) - [Show HN: AutoLISP interpreter in Rust/WASM – a CAD workflow invented 33 yrs ago](https://acadlisp.de/noscript.html)
* [2025-12-26, 15:32:38](https://lobste.rs/s/j6spka/play_monty_hall_game) - [Play the Monty Hall game](https://monty.donk.systems)
* [2025-12-26, 15:20:36](https://news.ycombinator.com/item?id=46392910) - [Show HN: Witr – Explain why a process is running on your Linux system](https://github.com/pranshuparmar/witr)
* [2025-12-26, 15:13:21](https://news.ycombinator.com/item?id=46392815) - [High school student discovers 1.5M potential new astronomical objects](https://www.smithsonianmag.com/smart-news/high-school-student-discovers-1-5-million-potential-new-astronomical-objects-by-developing-an-ai-algorithm-180986429/)
* [2025-12-26, 15:08:00](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retreating From EVs Could Be Hazardous For Western Carmakers](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 15:07:01](https://news.ycombinator.com/item?id=46392736) - [Show HN: Xcc700: Self-hosting mini C compiler for ESP32 (Xtensa) in 700 lines](https://github.com/valdanylchuk/xcc700)
* [2025-12-26, 14:08:47](https://news.ycombinator.com/item?id=46392115) - [Rob Pike goes nuclear over GenAI](https://skyview.social/?url=https%3A%2F%2Fbsky.app%2Fprofile%2Frobpike.io%2Fpost%2F3matwg6w3ic2s&amp;viewtype=tree)
* [2025-12-26, 14:05:00](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Hunger For Memory Chips Could Shrink Smartphone and PC Sales in 2026, IDC Says](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 12:59:56](https://news.ycombinator.com/item?id=46391599) - [LearnixOS](https://www.learnix-os.com)
* [2025-12-26, 12:55:16](https://news.ycombinator.com/item?id=46391572) - [Ask HN: What did you read in 2025?](https://news.ycombinator.com/item?id=46391572)
* [2025-12-26, 12:46:36](https://news.ycombinator.com/item?id=46391514) - [Package managers keep using Git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-26, 12:46:05](https://lobste.rs/s/gwmwx7/algebra_loans_rust) - [The Algebra of Loans in Rust](https://nadrieril.github.io/blog/2025/12/21/the-algebra-of-loans-in-rust.html)
* [2025-12-26, 12:39:27](https://lobste.rs/s/a5wvmz/maestro_desktop_ai_agent_command_center) - [Maestro - Desktop AI Agent Command Center (Free/OSS)](https://runmaestro.ai)
* [2025-12-26, 12:35:10](https://news.ycombinator.com/item?id=46391448) - [Unix \&quot;find\&quot; expressions compiled to bytecode](https://nullprogram.com/blog/2025/12/23/)
* [2025-12-26, 12:31:00](https://slashdot.org/story/25/12/26/0641227/china-launches-21-billion-venture-capital-funds-to-invest-in-hard-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches $21 Billion Venture Capital Funds To Invest in &apos;Hard Technology&apos;](https://slashdot.org/story/25/12/26/0641227/china-launches-21-billion-venture-capital-funds-to-invest-in-hard-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 12:27:02](https://lobste.rs/s/byjzpj/gnu_mes_module_system) - [GNU Mes and the module system](https://ekaitz.elenq.tech/fasterMes5.html)
* [2025-12-26, 12:04:24](https://lobste.rs/s/bjn0cl/i_m_laptop_weirdo_s_why_i_like_my_new) - [I&apos;m a laptop weirdo and that&apos;s why I like my new Framework 13](https://blog.matthewbrunelle.com/im-a-laptop-weirdo-and-thats-why-i-like-my-new-framework-13/)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 11:17:15](https://lobste.rs/s/n4kxdf/rob_pike_goes_nuclear_over_genai) - [Rob Pike Goes Nuclear over GenAI](https://imgur.com/nUJCI3o)
* [2025-12-26, 10:01:00](https://developers.slashdot.org/story/25/12/26/0628235/memory-is-running-out-and-so-are-excuses-for-software-bloat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Memory is Running Out, and So Are Excuses For Software Bloat&apos;](https://developers.slashdot.org/story/25/12/26/0628235/memory-is-running-out-and-so-are-excuses-for-software-bloat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 09:43:09](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend)
* [2025-12-26, 08:21:09](https://lobste.rs/s/jd62vn/sendspin_music_experience_protocol) - [Sendspin: Music Experience Protocol](https://www.sendspin-audio.com/)
* [2025-12-26, 07:00:00](https://developers.slashdot.org/story/25/12/26/0623233/cursor-ceo-warns-vibe-coding-builds-shaky-foundations-that-eventually-crumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cursor CEO Warns Vibe Coding Builds &apos;Shaky Foundations&apos; That Eventually Crumble](https://developers.slashdot.org/story/25/12/26/0623233/cursor-ceo-warns-vibe-coding-builds-shaky-foundations-that-eventually-crumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 06:05:07](https://lobste.rs/s/jkomyi/writing_nes_emulator_haskell) - [Writing an NES emulator in Haskell](https://arthi-chaud.github.io/posts/funes/)
* [2025-12-26, 04:30:00](https://apple.slashdot.org/story/25/12/26/041227/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s App Course Runs $20,000 a Student. Is It Really Worth It?](https://apple.slashdot.org/story/25/12/26/041227/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 03:19:49](https://news.ycombinator.com/item?id=46388907) - [TurboDiffusion: 100–200× Acceleration for Video Diffusion Models](https://github.com/thu-ml/TurboDiffusion)
* [2025-12-26, 01:55:00](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail Users May Soon Be Able To Change Their Email Address and Keep the Old One](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-26, 01:38:47](https://lobste.rs/s/bnvrfq/ancient_greek_geometry) - [Ancient Greek geometry](https://sciencevsmagic.net/geo/)
* [2025-12-26, 00:59:00](https://lobste.rs/s/abglcr/automating_what_backblaze_lifecycle) - [Automating What Backblaze Lifecycle Rules Don&apos;t Do Instantly](https://blog.tymscar.com/posts/backblazeb2cleanup/)
* [2025-12-26, 00:39:00](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Settles Brazilian Antitrust Case, Must Allow Third-Party App Stores and External Payment Links](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 00:29:18](https://lobste.rs/s/3rkikl/when_driver_challenges_kernel_s) - [When a driver challenges the kernel&apos;s assumptions](http://miod.online.fr/software/openbsd/stories/udl.html)
* [2025-12-25, 22:00:54](https://lobste.rs/s/4fmqgd/are_two_heads_better_than_one) - [Are Two Heads Better Than One?](https://eieio.games/blog/two-heads-arent-better-than-one/)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 21:00:00](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 19:01:00](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Has Stopped Rewarding &apos;Strategic&apos; Layoffs](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 18:00:00](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Social Media Users Criticize Authorities in Rare Sign of Dissent](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 15:14:42](https://lobste.rs/s/kplced/html_elements_time_forgot) - [The HTML Elements Time Forgot](https://htmhell.dev/adventcalendar/2025/22/)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-25, 01:49:38](https://lobste.rs/s/bygvwv/package_managers_keep_using_git_as) - [Package managers keep using git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 11:08:41](https://news.ycombinator.com/item?id=46374524) - [Migrating my web analytics from Matomo to Umami](https://stanislas.blog/2025/12/migrating-matomo-to-umami-web-analytics/)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-22, 22:44:25](https://news.ycombinator.com/item?id=46360080) - [Overlooked No More: Inge Lehmann, Who Discovered the Earth&apos;s Inner Core](https://www.nytimes.com/2025/12/20/obituaries/inge-lehmann-overlooked.html)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 19:25:29](https://news.ycombinator.com/item?id=46357814) - [The Algebra of Loans in Rust](https://nadrieril.github.io/blog/2025/12/21/the-algebra-of-loans-in-rust.html)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 07:18:08](https://news.ycombinator.com/item?id=46352016) - [What happened to all the gold Spain got from the New World? (1985)](https://www.straightdope.com/21341789/what-happened-to-all-the-gold-spain-got-from-the-new-world)
* [2025-12-22, 06:17:32](https://news.ycombinator.com/item?id=46351836) - [Joan Didion and Kurt Vonnegut had something to say. We have it on tape](https://www.nytimes.com/2025/12/19/books/james-baldwin-joan-didion-92ny-recordings.html)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
