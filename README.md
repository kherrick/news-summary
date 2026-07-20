# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [China's New AI Model Halts New Subscriptions As Demand Swamps Capacity](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China struggles as its AI model's popularity exceeds infrastructure capacity, signaling potential challenges in scaling advanced AI.

* [Nativ: Run frontier open models locally on your Mac](https://blaizzy.github.io/nativ/) - A new tool enables users to execute open AI models locally, enhancing accessibility and privacy.

* [The creepiest 'sales demo' of all time](https://www.appenmedia.com/opinion/letter-to-the-editor-the-creepiest-sales-demo-of-all-time/article_a8f0cc6c-29d3-41f7-8668-8a855f760efb.html) - A deeply unsettling sales demo that raises questions about the ethics and automation of persuasion.

* [Who’s Afraid of Chinese Models?](https://stratechery.com/2026/whos-afraid-of-chinese-models/) - Analysis on the competitive and geopolitical implications of China's open AI strategies.

* [Agent swarms and the new model economics](https://cursor.com/blog/agent-swarm-model-economics) - A thought-provoking dive into emerging economics driven by autonomous AI agent systems.

## Cybersecurity and Privacy Threats

* [SleeperGem: RubyGems supply chain attack targets dormant maintainer accounts](https://www.aikido.dev/blog/sleepergem-rubygems-supply-chain-attack) - A newly identified attack vector exploits inactive maintainer accounts in widely used gem repositories.

* [Linux Kernel 0-day Journey - From a limited UAF to Physical Memory R/W](https://1day.dev/posts/linux-kernel-0day.html) - A detailed analysis of a Linux kernel zero-day vulnerability and its potential impacts.

* [Fuzzing for fun - unauthenticated denial of service in snac2](https://nullenvk.pl/posts/02-snac2-json/) - Explores vulnerabilities in software through fuzzing techniques aimed at illuminating security flaws.

* [7 Sandbox Escape Vulnerabilities Across 4 Coding Agent Vendors](https://www.pillar.security/blog/the-week-of-sandbox-escapes) - Investigates sandbox breaks in coding tools that could undermine security models.

* [New Free Speech Concern: When AI Chatbots Won't Criticize Leaders from Repressive Regimes](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A concerning censorship loophole in AI-driven conversational platforms.

## Data and Infrastructure Disruptions

* [Hacker Wipes Romania’s Entire Land Registry Database](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant hacking event leads to the erasure of critical land records.

* [AliExpress Hit With Record $625 Million Fine After Failing To Make EU-Ordered Fixes](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The impact of regulatory non-compliance in the e-commerce giant's operations.

* [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&from=rss) - A widespread attack leveraging infiltration through public repositories.

## Scientific Discoveries and Innovations

* [LSU Physicists Create First Room-Temperature Quantum Material](https://tech.slashdot.org/story/26/07/20/0438205/lsu-physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough in quantum material that can function at non-cryogenic temperatures.

* [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&from=rss) - Study explores a potential ancestral link between animals’ communication and human speech.

* [Jacobian Conjecture from Wolfram MathWorld](https://mathworld.wolfram.com/JacobianConjecture.html) - The enduring mystery of a mathematical conjecture that continues to challenge scholars.

## Open Source and Software Advancements

* [Hyprland 0.55 announced the switch to Lua for its config files](https://hypr.land/news/update55/) - A notable update for Hyprland with a focus on expanding configurability via Lua.

* [Rust for Morello: Always-On Memory Safety, Even in Unsafe Code](https://drops.dagstuhl.de/storage/00lipics/lipics-vol263-ecoop2023/LIPIcs.ECOOP.2023.39/LIPIcs.ECOOP.2023.39.pdf) - Advancements in Rust enabling robust memory safety even in critical computational scenarios.

* [How we measured AI writing across arXiv, and where the measurement breaks](https://unslop.run/blog/measuring-ai-writing-on-arxiv) - Research methodology analyzing the AI-generated content present in prominent research archives.

* [Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci) - Creative utilization of Git hooks to establish a clean and functional CICD workflow.

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

* [2026-07-20, 21:51:15](https://lobste.rs/s/4kp1wg/how_gnutella_scaled_handle_query_traffic) - [How Gnutella Scaled to Handle Query Traffic](https://rickcarlino.com/notes/p2p/how-gnutella-scaled-to-handle-query-traffic.html)
* [2026-07-20, 21:48:43](https://lobste.rs/s/piabis/postgres_19_compression_from_pglz_lz4) - [Postgres 19 Compression: from pglz to LZ4](https://www.crunchydata.com/blog/postgres-19-compression-from-pglz-to-lz4)
* [2026-07-20, 21:39:00](https://lobste.rs/s/xbfsho/sleepergem_rubygems_supply_chain_attack) - [SleeperGem: RubyGems supply chain attack targets dormant maintainer accounts](https://www.aikido.dev/blog/sleepergem-rubygems-supply-chain-attack)
* [2026-07-20, 21:32:27](https://lobste.rs/s/so9azo/jacobian_conjecture_from_wolfram) - [Jacobian Conjecture from Wolfram MathWorld](https://mathworld.wolfram.com/JacobianConjecture.html)
* [2026-07-20, 21:00:00](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s New AI Model Halts New Subscriptions As Demand Swamps Capacity](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 20:36:37](https://news.ycombinator.com/item?id=48984555) - [The creepiest &apos;sales demo&apos; of all time](https://www.appenmedia.com/opinion/letter-to-the-editor-the-creepiest-sales-demo-of-all-time/article_a8f0cc6c-29d3-41f7-8668-8a855f760efb.html)
* [2026-07-20, 20:21:03](https://lobste.rs/s/jgftsd/personal_anthology_goal_code) - [Personal Anthology of Goal Code](https://goalprogramming.info/personal-anthology.html)
* [2026-07-20, 20:15:57](https://lobste.rs/s/h9zpbs/linux_kernel_0_day_journey_from_limited) - [A Linux Kernel 0-day Journey - From a limited UAF to Physical Memory R/W](https://1day.dev/posts/linux-kernel-0day.html)
* [2026-07-20, 20:12:19](https://news.ycombinator.com/item?id=48984270) - [I wrote an bash enumerator because I was sick of xargs](https://numerlab.org/2025/07/20/bashumerate-enumerator/)
* [2026-07-20, 20:10:44](https://news.ycombinator.com/item?id=48984254) - [Show HN: Immersive Gaussian Splat tour of grace cathedral, San Francisco](https://vincentwoo.com/3d/grace_cathedral/)
* [2026-07-20, 20:08:45](https://news.ycombinator.com/item?id=48984231) - [The Power of Awareness: Overcoming Surveillance Capitalism](https://www.scottrlarson.com/presentations/overcoming-surveillance-capitalism-with-awareness/)
* [2026-07-20, 20:00:00](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Head of US Safety Agency Resigns](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 19:52:34](https://lobste.rs/s/advkuj/who_needs_real_time_database) - [Who needs a real-time database?](https://dataintellect.com/blog/who-needs-an-rdb/)
* [2026-07-20, 19:03:37](https://news.ycombinator.com/item?id=48983382) - [Human mathematicians are being outcounterexampled](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/)
* [2026-07-20, 19:00:00](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AliExpress Hit With Record $625 Million Fine After Failing To Make EU-Ordered Fixes](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 18:16:08](https://news.ycombinator.com/item?id=48982681) - [Nativ: Run frontier open models locally on your Mac](https://blaizzy.github.io/nativ/)
* [2026-07-20, 18:10:17](https://news.ycombinator.com/item?id=48982578) - [The drivers behind software delivery inefficiency](https://dl.acm.org/doi/10.1145/3800646.3800650)
* [2026-07-20, 18:06:13](https://news.ycombinator.com/item?id=48982535) - [Agent swarms and the new model economics](https://cursor.com/blog/agent-swarm-model-economics)
* [2026-07-20, 18:00:00](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG Monitors Silently Install Adware-Like App On Windows PCs](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 17:31:57](https://news.ycombinator.com/item?id=48982011) - [Hyprland 0.55 announced the switch to Lua for its config files](https://hypr.land/news/update55/)
* [2026-07-20, 17:13:23](https://news.ycombinator.com/item?id=48981703) - [Kimi Work](https://www.kimi.com/products/kimi-work)
* [2026-07-20, 17:07:39](https://news.ycombinator.com/item?id=48981620) - [Jelly UI: Soft-body physics for native HTML form controls](https://jelly-ui.com/)
* [2026-07-20, 17:05:00](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Wipes Romania&apos;s Entire Land Registry Database](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 16:40:40](https://lobste.rs/s/jhcyuq/deep_dive_into_my_forgejo_setup) - [A deep dive into my Forgejo setup](https://a.l3x.in/blog/welcome-to-my-forge/)
* [2026-07-20, 16:36:36](https://news.ycombinator.com/item?id=48981206) - [How we measured AI writing across arXiv, and where the measurement breaks](https://unslop.run/blog/measuring-ai-writing-on-arxiv)
* [2026-07-20, 16:32:10](https://news.ycombinator.com/item?id=48981136) - [Launch HN: Bloomy (YC S26) – AI-powered mastery learning for K-12](https://news.ycombinator.com/item?id=48981136)
* [2026-07-20, 16:07:19](https://lobste.rs/s/wxq96p/type_safe_servant_auth_roles) - [Type Safe Servant Auth Roles](https://blog.cofree.coffee/2026-07-20-servant-auth-roles/)
* [2026-07-20, 16:00:00](https://tech.slashdot.org/story/26/07/20/0438205/lsu-physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LSU Physicists Create First Room-Temperature Quantum Material](https://tech.slashdot.org/story/26/07/20/0438205/lsu-physicists-create-first-room-temperature-quantum-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 15:40:03](https://news.ycombinator.com/item?id=48980404) - [Cross sectioning insects in an electron microscope with a femtosecond laser [video]](https://www.youtube.com/watch?v=NwhVJ7cv9B4)
* [2026-07-20, 15:28:32](https://news.ycombinator.com/item?id=48980238) - [Mythologizing AI makes it more likely that we’ll fail to operate it well (2023)](https://www.newyorker.com/science/annals-of-artificial-intelligence/there-is-no-ai)
* [2026-07-20, 15:21:15](https://lobste.rs/s/kdflhr/invisicaps_fil_c_capability_model) - [InvisiCaps: The Fil-C Capability Model](https://fil-c.org/invisicaps)
* [2026-07-20, 15:15:36](https://news.ycombinator.com/item?id=48980053) - [The Voice of Google](https://www.newyorker.com/culture/the-weekend-essay/the-voice-of-google)
* [2026-07-20, 15:13:42](https://news.ycombinator.com/item?id=48980019) - [Kimi K3, Qwen 3.8, and Anthropic&apos;s (Potential) Unravelling](https://www.emergingtrajectories.com/lh/frontier-lab-economics/)
* [2026-07-20, 15:07:31](https://news.ycombinator.com/item?id=48979931) - [Corners Don&apos;t Look Like That: Regarding Screenspace Ambient Occlusion (2012)](https://nothings.org/gamedev/ssao/)
* [2026-07-20, 15:00:00](https://news.slashdot.org/story/26/07/20/0431217/libreoffice-once-again-slams-microsoft-for-using-lock-in-with-office-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice Once Again Slams Microsoft For Using &apos;Lock-In&apos; With Office Files](https://news.slashdot.org/story/26/07/20/0431217/libreoffice-once-again-slams-microsoft-for-using-lock-in-with-office-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 14:33:55](https://lobste.rs/s/bper0d/7_sandbox_escape_vulnerabilities_across) - [7 Sandbox Escape Vulnerabilities Across 4 Coding Agent Vendors](https://www.pillar.security/blog/the-week-of-sandbox-escapes)
* [2026-07-20, 14:33:37](https://lobste.rs/s/hbgzbn/rust_for_morello_always_on_memory_safety) - [Rust for Morello: Always-On Memory Safety, Even in Unsafe Code](https://drops.dagstuhl.de/storage/00lipics/lipics-vol263-ecoop2023/LIPIcs.ECOOP.2023.39/LIPIcs.ECOOP.2023.39.pdf)
* [2026-07-20, 14:21:47](https://news.ycombinator.com/item?id=48979269) - [China’s open-weights AI strategy is winning](https://werd.io/american-ai-is-locked-down-and-proprietary-its-losing/)
* [2026-07-20, 14:10:30](https://news.ycombinator.com/item?id=48979120) - [Perfection is not over-engineering](https://var0.xyz/posts/perfection-is-not-over-engineering.html)
* [2026-07-20, 13:58:52](https://lobste.rs/s/p3z0zw/meta_garbage_collection_using_ocaml_s_gc) - [Meta Garbage Collection: Using OCaml&apos;s GC to GC Rust](https://soteria-tools.com/blog/meta-garbage-collection)
* [2026-07-20, 13:47:13](https://news.ycombinator.com/item?id=48978835) - [Firefox 153 available with support for Vulkan video decoding, JPEG-XL](https://www.phoronix.com/news/Firefox-153-Downloads)
* [2026-07-20, 13:43:10](https://news.ycombinator.com/item?id=48978792) - [Shinjuku Station in 3D](https://satoshi7190.github.io/Shinjuku-indoor-threejs-demo/)
* [2026-07-20, 13:28:33](https://news.ycombinator.com/item?id=48978605) - [Hacker wipes Romania&apos;s land registry database](https://news.risky.biz/risky-bulletin-hacker-wipes-romanias-entire-land-registry-database/)
* [2026-07-20, 13:07:11](https://news.ycombinator.com/item?id=48978350) - [LEDs’ potential to save our night skies](https://spectrum.ieee.org/led-light-pollution)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 12:10:14](https://lobste.rs/s/21lrrw/gitolite) - [Gitolite](https://gitolite.com/gitolite/index.html)
* [2026-07-20, 11:34:00](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Sci-fi Studio Lot Now Pitched As Site To Make Real Space-age Weapons ](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 11:05:58](https://news.ycombinator.com/item?id=48977128) - [Who&apos;s Afraid of Chinese Models?](https://stratechery.com/2026/whos-afraid-of-chinese-models/)
* [2026-07-20, 10:30:40](https://news.ycombinator.com/item?id=48976846) - [Airport Simulator](https://airport.apunen.com/)
* [2026-07-20, 10:30:01](https://lobste.rs/s/bz0spb/building_amigaos_development) - [Building an AmigaOS Development Environment in 2026](https://turtleware.eu/posts/Building-an-AmigaOS-Development-Environment-in-2026.html)
* [2026-07-20, 09:02:49](https://lobste.rs/s/6zlnpk/json5e_json5_for_humans) - [JSON5E - JSON5 for Humans](https://github.com/boris-kolpackov/libpdjson5/blob/master/JSON5E.md)
* [2026-07-20, 08:28:45](https://lobste.rs/s/jr72dt/minimal_git_ci_using_hooks) - [Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci)
* [2026-07-20, 08:25:33](https://lobste.rs/s/hq0he3/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hq0he3/what_are_you_doing_this_week)
* [2026-07-20, 08:13:36](https://news.ycombinator.com/item?id=48975665) - [Exploit brokers pay $500k for WordPress RCEs. I found one with GPT5.6 and $25](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 07:34:00](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Free Speech Concern: When AI Chatbots Won&apos;t Criticize Leaders from Repressive Regimes](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 07:04:16](https://lobste.rs/s/zjnc5o/fuzzing_for_fun_unauthenticated_denial) - [Fuzzing for fun - unauthenticated denial of service in snac2](https://nullenvk.pl/posts/02-snac2-json/)
* [2026-07-20, 07:04:02](https://lobste.rs/s/op1k28/i_wrote_api_client_for_my_water_cooled_bed) - [I wrote an API client for my water-cooled bed](https://tinkering.xyz/bedctl/)
* [2026-07-20, 05:39:53](https://lobste.rs/s/zvoqic/email_encryption) - [email encryption](https://computer.rip/2026-07-19-email-encryption.html)
* [2026-07-20, 04:20:00](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Will Help Linux Succeed and Makes Coding Fun, Says Greg Kroah-Hartman](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-20, 02:15:00](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As AI Transforms Silicon Valley, Some Tech Workers Face Evaporating Financial Security](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 01:01:25](https://lobste.rs/s/u93mkb/cagire_forth_based_live_coding_sequencer) - [Cagire - Forth-based live coding sequencer](https://cagire.raphaelforment.fr)
* [2026-07-20, 00:50:00](https://hardware.slashdot.org/story/26/07/20/0046231/zilog-z80-8-bit-cpu-turns-50-open-source-replacement-heads-to-drop-in-dip40-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zilog Z80 8-Bit CPU Turns 50, Open-source Replacement Heads To Drop-in DIP40 Silicon](https://hardware.slashdot.org/story/26/07/20/0046231/zilog-z80-8-bit-cpu-turns-50-open-source-replacement-heads-to-drop-in-dip40-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 23:09:00](https://tech.slashdot.org/story/26/07/19/236218/dozens-of-robotaxi-riders-are-falling-asleep-sparking-frantic-calls-for-emergency-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dozens of Robotaxi Riders Are Falling Asleep, Sparking Frantic Calls For Emergency Services](https://tech.slashdot.org/story/26/07/19/236218/dozens-of-robotaxi-riders-are-falling-asleep-sparking-frantic-calls-for-emergency-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 21:04:00](https://news.slashdot.org/story/26/07/19/210221/californias-truth-in-recycling-law-blocked-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s &apos;Truth in Recycling&apos; Law Blocked by Judge](https://news.slashdot.org/story/26/07/19/210221/californias-truth-in-recycling-law-blocked-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 19:45:09](https://lobste.rs/s/plztql/dependable_c) - [Dependable C](https://dependablec.org/)
* [2026-07-19, 19:05:00](https://science.slashdot.org/story/26/07/19/191239/james-webb-space-telescope-discovers-how-black-holes-feed-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Webb Space Telescope Discovers How Black Holes Feed Themselves](https://science.slashdot.org/story/26/07/19/191239/james-webb-space-telescope-discovers-how-black-holes-feed-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 16:31:44](https://news.ycombinator.com/item?id=48969530) - [ECC and DDR5](https://etbe.coker.com.au/2026/07/19/ecc-ddr5/)
* [2026-07-19, 13:14:39](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently) - [What is your favorite blog to read recently?](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 10:40:29](https://lobste.rs/s/k6ph7c/death_rebirth_my_home_server) - [The death and rebirth of my home server](https://sgt.hootr.club/blog/home-server-rebirth/)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 14:24:21](https://news.ycombinator.com/item?id=48947739) - [85.3 GFlops: Optimizing FP32 Matrix Multiplication on a Single AMD Zen 3 Core](https://github.com/houslast3/85.30-GFLOPS-Single-Core-FP32-Matrix-Multiplication-on-AMD-Zen-3)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
