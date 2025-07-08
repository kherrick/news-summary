# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [What is AGI? Nobody Agrees, And It's Tearing Microsoft and OpenAI Apart.](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A deep dive into the fragmentation within Microsoft and OpenAI over the definition of artificial general intelligence (AGI).

* [Dynamical origin of Theia, the last giant impactor on Earth](https://arxiv.org/abs/2507.01826) - Research proposes a dynamical origin for Theia, the impactor believed to have collided with Earth creating the Moon.

* [Massive Study Detects AI Fingerprints In Millions of Scientific Papers](https://science.slashdot.org/story/25/07/07/231226/massive-study-detects-ai-fingerprints-in-millions-of-scientific-papers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An extensive study uncovers the pervasive use of AI in scientific paper generation.

* [Microsoft, OpenAI, and a US Teachers' Union Are Hatching a Plan To 'Bring AI into the Classroom'](https://news.slashdot.org/story/25/07/08/1237220/microsoft-openai-and-a-us-teachers-union-are-hatching-a-plan-to-bring-ai-into-the-classroom?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insightful look into an ambitious plan to incorporate AI tech into classrooms.

## Cybersecurity and Data Vulnerabilities

* [CVE-2025-48384: Breaking Git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384) - A critical vulnerability in Git allows attackers remote code execution through submodules.

* [Supabase MCP leaks your entire SQL Database, a lethal trifecta attack](https://simonwillison.net/2025/Jul/6/supabase-mcp-lethal-trifecta/) - Reported flaws in the Supabase Managed Compute Platform (MCP) and its implications for database security.

* [Georgia Court Throws Out Earlier Ruling That Relied on Fake Cases Made Up By AI](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A first-of-its-kind legal debacle involving fake AI-generated legal references.

* [Google can now read your WhatsApp messages](https://www.neowin.net/guides/google-can-now-read-your-whatsapp-messages-heres-how-to-stop-it/) - Coverage of privacy issues with Google's ability to scan and read WhatsApp data.

## Tech Innovations and Releases

* [Brut: A New Web Framework for Ruby](https://naildrivin5.com/blog/2025/07/08/brut-a-new-web-framework-for-ruby.html) - A lightweight Ruby web framework aimed at simplifying web project workflows.

* [Thunderbird 140 Released](https://it.slashdot.org/story/25/07/08/1831203/thunderbird-140-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Mozilla releases Thunderbird 140 with improved features for productivity.

* [Announcing FOKS, the Federated Open Key Service](https://blog.foks.pub/posts/introducing/) - A new protocol for decentralized digital key management aimed at improving transparency and control.

* [Radium – The Music Editor](http://users.notam02.no/~kjetism/radium/) - Showcase of Radium, a unique music editor that blends traditional composing with innovative UI design.

## Specialized Developments in Software Engineering

* [Deterministic Simulation Testing in Rust: A Theater Of State Machines](https://www.polarsignals.com/blog/posts/2025/07/08/dst-rust) - Insights into how deterministic simulation testing is applied in Rust to verify state behavior.

* [Making Unsafe Rust a Little Safer: Find Memory Errors in Production with GWP-ASan](https://blog.colinbreck.com/making-unsafe-rust-a-little-safer-find-memory-errors-in-production-with-gwp-asan/) - An exploration of tools for memory safety in Rust production environments.

* [#[derive(Clone)] is broken](https://rgbcu.be/blog/derive-broken/) - Article highlights critical flaws in Rust's `derive(Clone)` implementation.

* [Show HN: I built a tool to solve window management](https://aboveaverageuser.com/smartswitcher) - A new tool aimed at organizing window management efficiently on desktop systems.

## Global Policy and Legal Trends

* [Fubo Pays $3.4 Million To Settle Claims It Illegally Shared User Data With Advertisers](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Settlement details involving Fubo's alleged illegal data-sharing practices.

* [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&from=rss) - Paris revitalizes its iconic river, allowing swimming after a century.

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

* [2025-07-08, 18:40:00](https://it.slashdot.org/story/25/07/08/1831203/thunderbird-140-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thunderbird 140 Released](https://it.slashdot.org/story/25/07/08/1831203/thunderbird-140-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 18:10:46](https://news.ycombinator.com/item?id=44502527) - [Dynamical origin of Theia, the last giant impactor on Earth](https://arxiv.org/abs/2507.01826)
* [2025-07-08, 18:03:20](https://news.ycombinator.com/item?id=44502463) - [Brut: A New Web Framework for Ruby](https://naildrivin5.com/blog/2025/07/08/brut-a-new-web-framework-for-ruby.html)
* [2025-07-08, 18:01:00](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What is AGI? Nobody Agrees, And It&apos;s Tearing Microsoft and OpenAI Apart.](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 17:52:28](https://news.ycombinator.com/item?id=44502366) - [LLM-Ready Training Dataset for Apple&apos;s Foundation Models (iOS 26)](https://rileyhealth.gumroad.com/l/bwoqe)
* [2025-07-08, 17:48:29](https://news.ycombinator.com/item?id=44502330) - [CVE-2025-48384: Breaking Git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)
* [2025-07-08, 17:46:55](https://news.ycombinator.com/item?id=44502318) - [Supabase MCP leaks your entire SQL Database, a lethal trifecta attack](https://simonwillison.net/2025/Jul/6/supabase-mcp-lethal-trifecta/)
* [2025-07-08, 17:44:35](https://news.ycombinator.com/item?id=44502298) - [Radium – The Music Editor](http://users.notam02.no/~kjetism/radium/)
* [2025-07-08, 17:20:10](https://lobste.rs/s/l6hadj/multiple_vulnerabilities_fixed_git) - [Multiple vulnerabilities fixed in Git](https://www.openwall.com/lists/oss-security/2025/07/08/4)
* [2025-07-08, 17:20:00](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Georgia Court Throws Out Earlier Ruling That Relied on Fake Cases Made Up By AI](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 16:57:18](https://news.ycombinator.com/item?id=44501821) - [GlobalFoundries to Acquire MIPS](https://mips.com/press-releases/gf-mips/)
* [2025-07-08, 16:40:00](https://linux.slashdot.org/story/25/07/08/1543259/suse-launching-region-locked-support-for-the-sovereignty-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SUSE Launching Region-Locked Support For the Sovereignty-Conscious](https://linux.slashdot.org/story/25/07/08/1543259/suse-launching-region-locked-support-for-the-sovereignty-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 16:37:55](https://lobste.rs/s/sd5w2g/announcing_foks_federated_open_key) - [Announcing FOKS, the Federated Open Key Service](https://blog.foks.pub/posts/introducing/)
* [2025-07-08, 16:13:40](https://news.ycombinator.com/item?id=44501413) - [Smollm3: Smol, multilingual, long-context reasoner LLM](https://huggingface.co/blog/smollm3)
* [2025-07-08, 16:11:20](https://news.ycombinator.com/item?id=44501379) - [Google can now read your WhatsApp messages](https://www.neowin.net/guides/google-can-now-read-your-whatsapp-messages-heres-how-to-stop-it/)
* [2025-07-08, 16:05:00](https://news.slashdot.org/story/25/07/08/1537230/a-marco-rubio-impostor-is-using-ai-voice-to-call-high-level-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Marco Rubio Impostor is Using AI Voice To Call High-Level Officials](https://news.slashdot.org/story/25/07/08/1537230/a-marco-rubio-impostor-is-using-ai-voice-to-call-high-level-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 15:47:13](https://lobste.rs/s/mf2zg3/which_kubernetes_is_smallest_examining) - [Which Kubernetes is the Smallest? Examining Talos Linux, K3s, K0s, and More](https://www.siderolabs.com/blog/which-kubernetes-is-the-smallest/)
* [2025-07-08, 15:42:34](https://news.ycombinator.com/item?id=44501076) - [Show HN: Sumble – knowledge graph for GTM data – query tech stack, key projects](https://sumble.com)
* [2025-07-08, 15:25:00](https://tech.slashdot.org/story/25/07/08/1525251/x-says-its-deeply-concerned-about-india-press-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X Says It&apos;s &apos;Deeply Concerned&apos; About India Press Censorship](https://tech.slashdot.org/story/25/07/08/1525251/x-says-its-deeply-concerned-about-india-press-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 15:18:49](https://news.ycombinator.com/item?id=44500840) - [Show HN: Jukebox – Free, Open Source Group Playlist with Fair Queueing](https://www.jukeboxhq.com/)
* [2025-07-08, 15:00:03](https://lobste.rs/s/ww0yad/customize_your_keyboard_shortcuts) - [Customize your keyboard shortcuts in Chrome with a Chrome extension](https://taupiqueur.github.io/chrome-shortcuts)
* [2025-07-08, 14:54:27](https://lobste.rs/s/w8ajcy/mastering_postgres_replication_slots) - [Mastering Postgres Replication Slots: Preventing WAL Bloat and Other Production Issues](https://www.morling.dev/blog/mastering-postgres-replication-slots/)
* [2025-07-08, 14:40:00](https://tech.slashdot.org/story/25/07/08/1255232/unless-users-take-action-android-will-let-gemini-access-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unless Users Take Action, Android Will Let Gemini Access Third-Party Apps](https://tech.slashdot.org/story/25/07/08/1255232/unless-users-take-action-android-will-let-gemini-access-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 14:39:45](https://lobste.rs/s/wazjzq/bitchat_is_decentralized_peer_peer) - [bitchat is a decentralized, peer-to-peer messaging application that operates over Bluetooth Low Energy (BLE) mesh networks](https://github.com/jackjackbits/bitchat/blob/main/WHITEPAPER.md)
* [2025-07-08, 14:21:56](https://lobste.rs/s/zlm4fp/how_i_build_software_quickly) - [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)
* [2025-07-08, 14:16:50](https://lobste.rs/s/rvmew5/deterministic_simulation_testing_rust) - [Deterministic Simulation Testing in Rust: A Theater Of State Machines](https://www.polarsignals.com/blog/posts/2025/07/08/dst-rust)
* [2025-07-08, 14:01:42](https://news.ycombinator.com/item?id=44500066) - [Show HN: I built a tool to solve window management](https://aboveaverageuser.com/smartswitcher)
* [2025-07-08, 14:00:00](https://news.slashdot.org/story/25/07/08/1237220/microsoft-openai-and-a-us-teachers-union-are-hatching-a-plan-to-bring-ai-into-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, OpenAI, and a US Teachers&apos; Union Are Hatching a Plan To &apos;Bring AI into the Classroom&apos;](https://news.slashdot.org/story/25/07/08/1237220/microsoft-openai-and-a-us-teachers-union-are-hatching-a-plan-to-bring-ai-into-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 13:59:21](https://lobste.rs/s/qrygis/making_unsafe_rust_little_safer_find) - [Making Unsafe Rust a Little Safer: Find Memory Errors in Production with GWP-ASan](https://blog.colinbreck.com/making-unsafe-rust-a-little-safer-find-memory-errors-in-production-with-gwp-asan/)
* [2025-07-08, 13:51:19](https://lobste.rs/s/4wyzur/bmesh) - [BMesh](https://developer.blender.org/docs/features/objects/mesh/bmesh/)
* [2025-07-08, 13:40:12](https://news.ycombinator.com/item?id=44499860) - [NuxtLabs is joining Vercel](https://nuxtlabs.com/)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 13:00:00](https://science.slashdot.org/story/25/07/08/0152223/weedkiller-ingredient-widely-used-in-us-can-damage-organs-and-gut-bacteria-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weedkiller Ingredient Widely Used In US Can Damage Organs and Gut Bacteria, Research Shows](https://science.slashdot.org/story/25/07/08/0152223/weedkiller-ingredient-widely-used-in-us-can-damage-organs-and-gut-bacteria-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 12:00:53](https://news.ycombinator.com/item?id=44499183) - [Attimet (YC F24) – Quant Trading Research Lab – Is Hiring Founding Researcher](https://www.ycombinator.com/companies/attimet/jobs/6LaQIc5-founding-researcher-quant)
* [2025-07-08, 11:38:13](https://lobste.rs/s/ccvkpv/bad_apple_it_s_3288_lean_tactics_spamming) - [“Bad Apple!!” But It’s 3288 Lean Tactics Spamming VSCode](https://unnamed.website/posts/bad-apple-lean-tactic/)
* [2025-07-08, 11:35:27](https://news.ycombinator.com/item?id=44499057) - [Firefox is fine. The people running it are not](https://www.theregister.com/2025/07/08/firefox_isnt_dead/)
* [2025-07-08, 11:08:27](https://lobste.rs/s/rfsseb/case_against_which_key_polemic) - [The case against which-key: a polemic](https://www.matem.unam.mx/~omar/apropos-emacs.html#the-case-against-which-key-a-polemic)
* [2025-07-08, 10:14:02](https://lobste.rs/s/9vvhzr/two_weeks_wayback) - [Two weeks of wayback](https://ariadne.space/2025/07/07/two-weeks-of-wayback.html)
* [2025-07-08, 10:00:00](https://hardware.slashdot.org/story/25/07/08/0143252/arizona-brings-a-huge-grid-battery-online-ahead-of-peak-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona Brings a Huge Grid Battery Online Ahead of Peak Demand](https://hardware.slashdot.org/story/25/07/08/0143252/arizona-brings-a-huge-grid-battery-online-ahead-of-peak-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 09:33:55](https://lobste.rs/s/s8kjrr/derive_clone_is_broken) - [#[derive(Clone)] is broken](https://rgbcu.be/blog/derive-broken/)
* [2025-07-08, 08:57:01](https://news.ycombinator.com/item?id=44498296) - [Show HN: OffChess – Offline chess puzzles app](https://offchess.com)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 08:32:45](https://lobste.rs/s/cyxkzl/webassembly_yes_for_what) - [WebAssembly: Yes, but for What?](https://queue.acm.org/detail.cfm?id=3746171)
* [2025-07-08, 08:23:05](https://news.ycombinator.com/item?id=44498133) - [TIL you can make \&quot;GIFs\&quot; with SVGs for GitHub README.md files](https://koaning.io/posts/svg-gifs/)
* [2025-07-08, 07:00:00](https://science.slashdot.org/story/25/07/07/231226/massive-study-detects-ai-fingerprints-in-millions-of-scientific-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Massive Study Detects AI Fingerprints In Millions of Scientific Papers](https://science.slashdot.org/story/25/07/07/231226/massive-study-detects-ai-fingerprints-in-millions-of-scientific-papers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 06:06:41](https://lobste.rs/s/r9urjr/all_programming_languages_are_fast) - [All Programming Languages are Fast](https://orgpad.info/blog/all-programming-langs-are-fast)
* [2025-07-08, 05:40:28](https://lobste.rs/s/giycc1/my_first_verified_imperative_program) - [My first verified (imperative) program](https://markushimmel.de/blog/my-first-verified-imperative-program/)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-08, 03:30:00](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Are Using AI Chatbots To Guide Their Psychedelic Trips](https://slashdot.org/story/25/07/07/2232250/people-are-using-ai-chatbots-to-guide-their-psychedelic-trips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 02:10:00](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tennis Players Criticize AI Technology Used By Wimbledon](https://slashdot.org/story/25/07/07/2254236/tennis-players-criticize-ai-technology-used-by-wimbledon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 01:30:00](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fubo Pays $3.4 Million To Settle Claims It Illegally Shared User Data With Advertisers](https://yro.slashdot.org/story/25/07/07/2250222/fubo-pays-34-million-to-settle-claims-it-illegally-shared-user-data-with-advertisers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 01:09:50](https://lobste.rs/s/kvgdjh/how_janet_s_peg_module_works) - [How Janet&apos;s PEG module works](https://bakpakin.com/writing/how-janets-peg-works.html)
* [2025-07-08, 00:50:00](https://apple.slashdot.org/story/25/07/07/2243248/apple-just-added-more-frost-to-its-liquid-glass-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Just Added More Frost To Its Liquid Glass Design](https://apple.slashdot.org/story/25/07/07/2243248/apple-just-added-more-frost-to-its-liquid-glass-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 23:31:56](https://lobste.rs/s/xenlje/you_should_run_certificate_transparency) - [You Should Run a Certificate Transparency Log](https://words.filippo.io/run-sunlight/)
* [2025-07-07, 22:11:58](https://news.ycombinator.com/item?id=44495154) - [LookingGlass: Generative Anamorphoses via Laplacian Pyramid Warping](https://studios.disneyresearch.com/2025/06/09/lookingglass-generative-anamorphoses-via-laplacian-pyramid-warping/)
* [2025-07-07, 22:10:26](https://lobste.rs/s/oapkjg/code_trust_vibrators_pacemakers) - [CODE AND TRUST: vibrators to pacemakers](https://punkx.org/jackdoe/code-and-trust.html)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 18:28:04](https://lobste.rs/s/nm5lho/stop_putting_nix_setup_your_checked_envrc) - [Stop putting nix setup in your checked-in .envrc files](https://offby1.website/posts/stop-putting-nix-setup-in-your-checked-in-envrc-files.html)
* [2025-07-07, 18:19:13](https://news.ycombinator.com/item?id=44493196) - [New sphere-packing record stems from an unexpected source](https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/)
* [2025-07-07, 17:48:22](https://lobste.rs/s/w6q3d1/future_forums_is_lies_i_guess) - [The Future of Forums is Lies, I Guess](https://aphyr.com/posts/389-the-future-of-forums-is-lies-i-guess)
* [2025-07-07, 17:36:21](https://lobste.rs/s/9f2dnb/generic_interfaces) - [Generic interfaces](https://go.dev/blog/generic-interfaces)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 12:44:19](https://news.ycombinator.com/item?id=44489803) - [I used o3 to profile myself from my saved Pocket links](https://noperator.dev/posts/o3-pocket-profile/)
* [2025-07-07, 12:31:08](https://news.ycombinator.com/item?id=44489690) - [Mercury: Ultra-fast language models based on diffusion](https://arxiv.org/abs/2506.17298)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 06:10:45](https://lobste.rs/s/6ycaam/praise_contrarian_stack) - [In Praise of the Contrarian Stack](https://hackers.pub/@hongminhee/2025/contrarian-stack/en)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 13:52:31](https://news.ycombinator.com/item?id=44472812) - [Ceramic: A cross-platform and open-source 2D framework in Haxe](https://ceramic-engine.com/)
* [2025-07-05, 12:13:50](https://news.ycombinator.com/item?id=44472246) - [Berry Script: lightweight embedded scripting language for microcontrollers](https://berry-lang.github.io/)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 11:40:43](https://news.ycombinator.com/item?id=44472036) - [On The Meaning of Ritual](https://alicemaz.substack.com/p/on-the-meaning-of-ritual)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 06:08:36](https://news.ycombinator.com/item?id=44470447) - [Particle Lenia Deluxe Edition](https://www.craftlinks.art/Notebook/particle-lenia/)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
* [2025-07-04, 21:32:16](https://news.ycombinator.com/item?id=44468022) - [Memstop: Use LD_PRELOAD to delay process execution when low on memory](https://github.com/surban/memstop)
* [2025-07-04, 21:23:00](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss) - [Mess is Best: Disordered Structure of Battery-Like Devices Improves Performance](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss)
* [2025-07-04, 20:25:43](https://news.ycombinator.com/item?id=44467607) - [A compact bitset implementation used in Ocarina of Time save files](https://github.com/jb55/oot_bitset)
* [2025-07-04, 16:49:27](https://news.ycombinator.com/item?id=44466030) - [Can an email go 500 miles in 2025?](https://flak.tedunangst.com/post/can-an-email-go-500-miles-in-2025)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 13:57:19](https://news.ycombinator.com/item?id=44464628) - [Epanet-JS](https://macwright.com/2025/07/03/epanet-placemark)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
