# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Developments

* [Micron Locks In Historically High Memory Prices For Five Years](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Micron plans to maintain high memory prices for the next five years, potentially impacting the future tech landscape. [Comments](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Starts Lowering Play Store Fees, Making Good On Epic Games Settlement](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google reduces Play Store fees following a settlement with Epic Games. [Comments](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [New Study Shows That Tall Vehicle Hoods Cause Hundreds More Deaths Per Year](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research reveals the dangers of tall vehicle hoods contributing to increased fatalities. [Comments](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [LastPass notifies users of yet another data breach](https://9to5mac.com/2026/06/23/lastpass-notifies-users-of-yet-another-data-breach/) - LastPass announces another security breach, sparking concerns among users. [Comments](https://news.ycombinator.com/item?id=48671468)

## Technological Innovations

* [Half-Life 2 in a Browser](https://hl2.slqnt.dev/) - Play Half-Life 2 directly in your browser, showcasing innovations in browser-based gaming. [Comments](https://news.ycombinator.com/item?id=48669534)

* [NASA Rover Detects Potential Signatures of Ancient Microbial Life On Mars](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA's rover uncovers possible evidence of ancient life on Mars. [Comments](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/) - A deep dive into a new e-ink reader that offers simplicity and innovative features. [Comments](https://lobste.rs/s/oyurwh/xteink_x4_e_ink_reader)

## AI and Computing Trends

* [Ford rehires 350 engineers after AI fails to preserve expertise or train juniors](https://www.bloomberg.com/news/articles/2026-06-25/ford-has-been-rehiring-quality-inspectors-after-ai-fell-short) - Ford admits reliance on AI underestimated the need for human expertise. [Comments](https://news.ycombinator.com/item?id=48674446)

* [Zig's New BitCast Semantics and LLVM Back End Improvements](https://ziglang.org/devlog/2026/#2026-06-25) - Updates to Zig programming language include new bitcast semantics and improved LLVM backend. [Comments](https://news.ycombinator.com/item?id=48673825)

* [LuaJIT 3.0 proposed syntax extensions](https://github.com/LuaJIT/LuaJIT/issues/1475) - Exploration of the newly proposed syntax extensions for LuaJIT 3.0. [Comments](https://news.ycombinator.com/item?id=48667336)

## Unique and Niche Developments

* [The Exhaustion of Talking to a Tool](https://ohadravid.github.io/posts/2026-06-tool-talking/) - A personal narrative exploring the challenges of relying on automation and tools. [Comments](https://lobste.rs/s/csgzki/exhaustion_talking_tool)

* [Honesty gets Emacs patch rejected](https://xlii.space/eng/honesty-gets-emacs-patch-rejected/) - An intriguing case of how a programmer's honesty caused a patch rejection in Emacs development. [Comments](https://lobste.rs/s/omq8rt/honesty_gets_emacs_patch_rejected)

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

* [2026-06-25, 16:00:00](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Micron Locks In Historically High Memory Prices For Five Years](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 15:33:37](https://news.ycombinator.com/item?id=48674968) - [As banks close accounts, experts point to immigration crackdown](https://www.americanbanker.com/news/as-banks-close-accounts-experts-point-to-immigration-crackdown)
* [2026-06-25, 15:07:27](https://lobste.rs/s/csgzki/exhaustion_talking_tool) - [The Exhaustion of Talking to a Tool](https://ohadravid.github.io/posts/2026-06-tool-talking/)
* [2026-06-25, 15:00:00](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Starts Lowering Play Store Fees, Making Good On Epic Games Settlement](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 14:58:50](https://news.ycombinator.com/item?id=48674446) - [Ford rehires 350 engineers after AI fails to preserve expertise or train juniors](https://www.bloomberg.com/news/articles/2026-06-25/ford-has-been-rehiring-quality-inspectors-after-ai-fell-short)
* [2026-06-25, 14:45:36](https://lobste.rs/s/t9cawj/os9map_openstreetmap_for_mac_os_9) - [OS9Map: OpenStreetMap for Mac OS 9](https://yllan.org/software/OS9Map/)
* [2026-06-25, 14:37:15](https://news.ycombinator.com/item?id=48674096) - [Apple increases MacBook and iPad prices by 20%](https://www.ft.com/content/0f067265-2baf-4b6e-8fb2-ed56daef6f3c)
* [2026-06-25, 14:19:28](https://news.ycombinator.com/item?id=48673825) - [Zig&apos;s New BitCast Semantics and LLVM Back End Improvements](https://ziglang.org/devlog/2026/#2026-06-25)
* [2026-06-25, 14:17:26](https://news.ycombinator.com/item?id=48673801) - [Ask HN: What surprised you about Estonia e-Residency and running an Estonian OÜ?](https://news.ycombinator.com/item?id=48673801)
* [2026-06-25, 14:11:11](https://lobste.rs/s/omq8rt/honesty_gets_emacs_patch_rejected) - [Honesty gets Emacs patch rejected](https://xlii.space/eng/honesty-gets-emacs-patch-rejected/)
* [2026-06-25, 14:08:55](https://news.ycombinator.com/item?id=48673671) - [Show HN: I made Google Trends for Hacker News by indexing 18 years of comments](https://hackernewstrends.com)
* [2026-06-25, 13:57:07](https://lobste.rs/s/madoeq/font_family_recommendations) - [font-family recommendations](https://chrismorgan.info/font-family)
* [2026-06-25, 13:54:47](https://lobste.rs/s/hxkgmg/can_i_texture_3d_objects_with_oil_paint) - [Can I texture 3D objects with oil paint?](https://www.youtube.com/watch?v=fdI1ZJtAJmI)
* [2026-06-25, 13:40:48](https://lobste.rs/s/yfjhpn/front_panel_booting_atmega88) - [Front-Panel Booting an ATmega88 Microcontroller](https://www.youtube.com/watch?v=S-2adBkW7Xo)
* [2026-06-25, 13:10:00](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss) - [Die Analysis of the 8087 Math Coprocessor&apos;s Fast Bit Shifter](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss)
* [2026-06-25, 12:42:55](https://news.ycombinator.com/item?id=48672506) - [SoftBank 2026 AGM [pdf]](https://group.softbank/media/Project/sbg/sbg/pdf/ir/investors/shareholders/2026/shareholders-meeting_46_05_en.pdf)
* [2026-06-25, 12:30:36](https://news.ycombinator.com/item?id=48672389) - [Show HN: Secs-man, a secrets manager you can (not) rely on](https://github.com/Fran314/secrets-manager-rs)
* [2026-06-25, 11:29:13](https://news.ycombinator.com/item?id=48671886) - [Show HN: Turn native language audio into flashcards and shadowing practice](https://lingochunk.com/try)
* [2026-06-25, 11:21:00](https://lobste.rs/s/uge7mm/new_bitcast_semantics_llvm_backend) - [New @bitCast Semantics and LLVM Backend Improvements](https://ziglang.org/devlog/2026/?2026-06-25#2026-06-25)
* [2026-06-25, 11:00:00](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Shows That Tall Vehicle Hoods Cause Hundreds More Deaths Per Year](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 10:28:16](https://news.ycombinator.com/item?id=48671468) - [LastPass notifies users of yet another data breach](https://9to5mac.com/2026/06/23/lastpass-notifies-users-of-yet-another-data-breach/)
* [2026-06-25, 09:23:21](https://lobste.rs/s/schop7/tropius_detect_ai_tropes_prose) - [tropius: detect AI tropes in prose](https://tangled.org/desertthunder.dev/tropius)
* [2026-06-25, 08:28:00](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - [Nvidia&apos;s New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss)
* [2026-06-25, 07:02:37](https://news.ycombinator.com/item?id=48669932) - [Wikipedia Workers in Britain set global first by seeking union recognition](https://utaw.tech/news/wikipedia-recognition)
* [2026-06-25, 07:00:00](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Rover Detects Potential Signatures of Ancient Microbial Life On Mars](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 06:20:45](https://lobste.rs/s/oyurwh/xteink_x4_e_ink_reader) - [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/)
* [2026-06-25, 06:00:04](https://news.ycombinator.com/item?id=48669534) - [Half-Life 2 in a Browser](https://hl2.slqnt.dev/)
* [2026-06-25, 04:27:35](https://lobste.rs/s/elhkrh/deno_desktop) - [Deno Desktop](https://ankursethi.com/blog/deno-desktop/)
* [2026-06-25, 03:45:00](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss) - [Brave Gives Linux Users Its Stripped Down Origin Browser for Free](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss)
* [2026-06-25, 03:30:00](https://science.slashdot.org/story/26/06/24/1710253/stripe-anthropic-and-openai-are-backing-effort-to-stop-respiratory-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe, Anthropic, and OpenAI Are Backing Effort To Stop Respiratory Infections](https://science.slashdot.org/story/26/06/24/1710253/stripe-anthropic-and-openai-are-backing-effort-to-stop-respiratory-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 02:30:18](https://news.ycombinator.com/item?id=48668119) - [Medical students are using popular research tool to pump out misleading studies](https://www.science.org/content/article/medical-students-are-using-popular-research-tool-pump-out-misleading-studies)
* [2026-06-25, 02:25:38](https://lobste.rs/s/gv5yqm/flow_s_ocaml_rust_port) - [Flow’s OCaml to Rust Port](https://medium.com/flow-type/flows-ocaml-to-rust-port-78b95bcf49e9)
* [2026-06-25, 02:18:10](https://news.ycombinator.com/item?id=48668033) - [Cloudflare launched self-managed OAuth for all](https://blog.cloudflare.com/oauth-for-all/)
* [2026-06-25, 01:14:12](https://lobste.rs/s/ekeur9/free_threaded_python_past_present_future) - [Free-threaded Python: past, present, and future](https://lwn.net/SubscriberLink/1078367/eaa511915870fdb2/)
* [2026-06-25, 00:41:43](https://news.ycombinator.com/item?id=48667336) - [LuaJIT 3.0 proposed syntax extensions](https://github.com/LuaJIT/LuaJIT/issues/1475)
* [2026-06-25, 00:28:15](https://lobste.rs/s/ebqmzl/are_we_globalshortcuts_yet) - [Are We GlobalShortcuts Yet?](https://areweglobalshortcutsyet.github.io)
* [2026-06-24, 23:46:37](https://news.ycombinator.com/item?id=48666927) - [Blogging can just be stating the obvious](https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/)
* [2026-06-24, 23:00:00](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slate Auto&apos;s Radically Simple Electric Truck Starts At $24,950](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 22:00:00](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pauses Employee-Tracking Program Following Internal Data Leak](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 21:00:00](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GTA VI Is a Worrying Sign For the Future of Physical Games](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 20:11:44](https://lobste.rs/s/zijb20/scaling_rails_41m_req_hour_8_dbs_disable) - [Scaling Rails: 41M Req/Hour, 8 DBs, disable_joins: true](https://andyatkinson.com/how-aura-frames-scales-for-peak-load-ruby-on-rails)
* [2026-06-24, 20:03:57](https://lobste.rs/s/gkqien/sacr3d_rendering_engine_toolbox_do_3d) - [Sacr3d: A rendering engine toolbox to do 3D graphics in Scheme](https://teddd.srht.site/sacr3d/)
* [2026-06-24, 20:00:00](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Unveils First Chip As Part of Broadcom Deal](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 19:48:01](https://news.ycombinator.com/item?id=48664814) - [Anthropic says Alibaba illicitly extracted Claude AI model capabilities](https://www.reuters.com/world/china/anthropic-says-alibaba-illicitly-extracted-claude-ai-model-capabilities-2026-06-24/)
* [2026-06-24, 19:40:31](https://lobste.rs/s/pcuxjt/ignore_dnssec_if_you_like_mitm_attacks) - [Ignore DNSSEC if you like MITM attacks](https://whynothugo.nl/journal/2026/06/24/ignore-dnssec-if-you-like-mitm-attacks/)
* [2026-06-24, 19:20:05](https://lobste.rs/s/qczicy/microspeak_elaborated_isn_t_escrow_just) - [Microspeak elaborated: Isn&apos;t escrow just a release candidate by another name?](https://devblogs.microsoft.com/oldnewthing/20260623-00/?p=112462)
* [2026-06-24, 19:00:00](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart&apos;s First Nuclear Deal Shows Demand Beyond AI Data Centers](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 18:00:00](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bob Iger&apos;s Disney Wanted Apple, Twitter, and 007](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 17:47:00](https://news.ycombinator.com/item?id=48663324) - [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
* [2026-06-24, 17:13:20](https://lobste.rs/s/uydwch/blamba) - [Blåmba](https://kittenlabs.de/blamba/)
* [2026-06-24, 17:00:00](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffin Claims Microsoft&apos;s &apos;Quantum Leap&apos; Is Invalid Due To &apos;Basic Python Errors&apos;](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 16:09:01](https://lobste.rs/s/kmx6wx/how_write_effective_software_design) - [How to Write an Effective Software Design Document](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/)
* [2026-06-24, 16:00:00](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Announces $17.5 Billion In Loans For 10 New Large Nuclear Reactors](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 15:56:58](https://lobste.rs/s/j3s5og/uk_wikipedia_workers_seek_union) - [UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition)
* [2026-06-24, 15:00:00](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A 25-Year-Old Blog Looks Back At 40 Years of Computing](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 14:41:41](https://news.ycombinator.com/item?id=48660711) - [RubyLLM: A Ruby framework for all major AI providers](https://rubyllm.com/)
* [2026-06-24, 14:27:02](https://lobste.rs/s/aj0e9u/porting_wine_new_hobby_os) - [Porting WINE to a new Hobby OS](https://astral-os.org/posts/2026/04/03/wine-on-astral.html)
* [2026-06-24, 14:10:11](https://news.ycombinator.com/item?id=48660178) - [45°C cooling design cuts data center water use to near zero](https://blogs.nvidia.com/blog/liquid-cooling-ai-factories/)
* [2026-06-24, 13:57:08](https://lobste.rs/s/0qfxpj/aol_was_down_1996_2026) - [AOL was down (1996) (2026)](https://ngrok.com/blog/aol-was-down-1996)
* [2026-06-24, 13:49:16](https://news.ycombinator.com/item?id=48659798) - [Qualcomm to Acquire Modular](https://www.reuters.com/business/qualcomm-buy-ai-startup-modular-2026-06-24/)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 11:00:00](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mushroom Behind &apos;Tiny Human&apos; Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 10:11:58](https://lobste.rs/s/6vsofh/joy_power_understanding) - [The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)
* [2026-06-24, 09:50:58](https://news.ycombinator.com/item?id=48657481) - [Puzzling Success of Overparameterization: Lottery Tickets or Escape Dimensions?](https://infoscience.epfl.ch/entities/publication/9a49779b-f9f8-448d-b3d1-737c78455309)
* [2026-06-24, 09:48:26](https://lobste.rs/s/a7thxr/coming_loop) - [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)
* [2026-06-24, 09:37:56](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996) - [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)
* [2026-06-24, 08:54:12](https://news.ycombinator.com/item?id=48657049) - [You can&apos;t unit test for taste](https://dev.karltryggvason.com/you-cant-unit-test-for-taste/)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 03:46:48](https://news.ycombinator.com/item?id=48654837) - [Lianda and the Long March](https://blog.georeactor.com/books-06-26b)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 03:23:28](https://news.ycombinator.com/item?id=48639840) - [GLM-5.2 is a step change for open agents](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open)
* [2026-06-23, 02:27:20](https://news.ycombinator.com/item?id=48639429) - [Lies, Damn Lies and Database Benchmarks](https://questdb.com/blog/lies-damn-lies-and-database-benchmarks/)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-22, 21:52:54](https://news.ycombinator.com/item?id=48636753) - [Bohemia Interactive: Cold War Assault Remastered Source Code on GitHub](https://github.com/BohemiaInteractive/CWR)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 15:15:38](https://news.ycombinator.com/item?id=48631366) - [Dostoyevsky isn&apos;t difficult](https://www.autodidacts.io/dostoyevsky-isnt-difficult/)
* [2026-06-22, 15:12:36](https://news.ycombinator.com/item?id=48631302) - [Tw-fade: pure CSS scroll-driven edge masking](https://pete.design/tw-fade)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
