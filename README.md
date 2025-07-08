# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advances

* [UN Passes Climate Change Motion After Marshall Islands Drops Fossil Fuels Focus](https://news.slashdot.org/story/25/07/08/2013257/un-passes-climate-change-motion-after-marshall-islands-drops-fossil-fuels-focus?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [What is AGI? Nobody Agrees, And It's Tearing Microsoft and OpenAI Apart.](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Hallucination Cases Database](https://www.damiencharlotin.com/hallucinations/)

* [Massive Study Detects AI Fingerprints In Millions of Scientific Papers](https://science.slashdot.org/story/25/07/07/231226/massive-study-detects-ai-fingerprints-in-millions-of-scientific-papers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Software Vulnerabilities

* [CVE-2025-48384: Breaking git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)

* [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog)

* [Google can now read your WhatsApp messages](https://www.neowin.net/guides/google-can-now-read-your-whatsapp-messages-heres-how-to-stop-it/)

* [Georgia Court Throws Out Earlier Ruling That Relied on Fake Cases Made Up By AI](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Corporate and Consumer Tech Developments

* [IBM Power11 hits the market this month](https://www.talospace.com/2025/07/power11-hits-market-this-month.html)

* [Amazon Asks Corporate Workers To 'Volunteer' Help With Grocery Deliveries as Prime Day Frenzy Approaches](https://slashdot.org/story/25/07/08/202255/amazon-asks-corporate-workers-to-volunteer-help-with-grocery-deliveries-as-prime-day-frenzy-approaches?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [X Says It's 'Deeply Concerned' About India Press Censorship](https://tech.slashdot.org/story/25/07/08/1525251/x-says-its-deeply-concerned-about-india-press-censorship?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Innovation

* [Dynamical origin of Theia, the last giant impactor on Earth](https://arxiv.org/abs/2507.01826)

* [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&from=rss)

* [Weedkiller Ingredient Widely Used In US Can Damage Organs and Gut Bacteria, Research Shows](https://science.slashdot.org/story/25/07/08/0152223/weedkiller-ingredient-widely-used-in-us-can-damage-organs-and-gut-bacteria-research-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Notable Cultural Shifts and Miscellaneous

* [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&from=rss)

* [Show HN: A rain Pomodoro with brown noise, ASMR, and Middle Eastern music](https://forgetoolz.com/rain-pomodoro)

* [Brainwash '72 [video]](https://archive.org/details/Brainwash72)

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

* [2025-07-08, 21:32:13](https://lobste.rs/s/1wv8nd/c3_0_7_3_small_improvements) - [C3 0.7.3 - Small improvements](https://c3-lang.org/blog/c3-0-7-3-small-improvements/)
* [2025-07-08, 21:25:00](https://news.slashdot.org/story/25/07/08/2013257/un-passes-climate-change-motion-after-marshall-islands-drops-fossil-fuels-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UN Passes Climate Change Motion After Marshall Islands Drops Fossil Fuels Focus](https://news.slashdot.org/story/25/07/08/2013257/un-passes-climate-change-motion-after-marshall-islands-drops-fossil-fuels-focus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 20:50:04](https://news.ycombinator.com/item?id=44503952) - [Ask HN: What are some cool or underrated tech companies based in Canada?](https://news.ycombinator.com/item?id=44503952)
* [2025-07-08, 20:45:00](https://it.slashdot.org/story/25/07/08/2021225/activision-took-down-call-of-duty-game-after-pc-players-hacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Activision Took Down Call of Duty Game After PC Players Hacked](https://it.slashdot.org/story/25/07/08/2021225/activision-took-down-call-of-duty-game-after-pc-players-hacked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 20:02:00](https://slashdot.org/story/25/07/08/202255/amazon-asks-corporate-workers-to-volunteer-help-with-grocery-deliveries-as-prime-day-frenzy-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Asks Corporate Workers To &apos;Volunteer&apos; Help With Grocery Deliveries as Prime Day Frenzy Approaches](https://slashdot.org/story/25/07/08/202255/amazon-asks-corporate-workers-to-volunteer-help-with-grocery-deliveries-as-prime-day-frenzy-approaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 19:27:00](https://slashdot.org/story/25/07/08/1927222/music-pioneer-napster-tries-again-this-time-with-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Music Pioneer Napster Tries Again, This Time With AI Chatbots](https://slashdot.org/story/25/07/08/1927222/music-pioneer-napster-tries-again-this-time-with-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 19:22:54](https://lobste.rs/s/a8tms4/ai_hallucination_cases_database) - [AI Hallucination Cases Database](https://www.damiencharlotin.com/hallucinations/)
* [2025-07-08, 19:16:08](https://lobste.rs/s/awmqgc/cve_2025_48384_breaking_git_with_carriage) - [CVE-2025-48384: Breaking git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)
* [2025-07-08, 19:12:06](https://news.ycombinator.com/item?id=44503056) - [The Tradeoffs of SSMs and Transformers](https://goombalab.github.io/blog/2025/tradeoffs/)
* [2025-07-08, 19:06:11](https://lobste.rs/s/s468u9/ibm_power11_hits_market_this_month) - [IBM Power11 hits the market this month](https://www.talospace.com/2025/07/power11-hits-market-this-month.html)
* [2025-07-08, 18:48:06](https://news.ycombinator.com/item?id=44502850) - [Fast cryptographically safe GUID generator for Go](https://github.com/sdrapkin/guid)
* [2025-07-08, 18:40:00](https://it.slashdot.org/story/25/07/08/1831203/thunderbird-140-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thunderbird 140 Released](https://it.slashdot.org/story/25/07/08/1831203/thunderbird-140-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 18:34:08](https://news.ycombinator.com/item?id=44502722) - [Brainwash &apos;72 [video]](https://archive.org/details/Brainwash72)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 18:10:46](https://news.ycombinator.com/item?id=44502527) - [Dynamical origin of Theia, the last giant impactor on Earth](https://arxiv.org/abs/2507.01826)
* [2025-07-08, 18:03:20](https://news.ycombinator.com/item?id=44502463) - [Brut: A New Web Framework for Ruby](https://naildrivin5.com/blog/2025/07/08/brut-a-new-web-framework-for-ruby.html)
* [2025-07-08, 18:01:00](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What is AGI? Nobody Agrees, And It&apos;s Tearing Microsoft and OpenAI Apart.](https://slashdot.org/story/25/07/08/1757219/what-is-agi-nobody-agrees-and-its-tearing-microsoft-and-openai-apart?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 17:48:29](https://news.ycombinator.com/item?id=44502330) - [Breaking Git with a carriage return and cloning RCE](https://dgl.cx/2025/07/git-clone-submodule-cve-2025-48384)
* [2025-07-08, 17:46:55](https://news.ycombinator.com/item?id=44502318) - [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog)
* [2025-07-08, 17:44:35](https://news.ycombinator.com/item?id=44502298) - [Radium Music Editor](http://users.notam02.no/~kjetism/radium/)
* [2025-07-08, 17:42:10](https://news.ycombinator.com/item?id=44502271) - [Show HN: A rain Pomodoro with brown noise, ASMR, and Middle Eastern music](https://forgetoolz.com/rain-pomodoro)
* [2025-07-08, 17:20:10](https://lobste.rs/s/l6hadj/multiple_vulnerabilities_fixed_git) - [Multiple vulnerabilities fixed in Git](https://www.openwall.com/lists/oss-security/2025/07/08/4)
* [2025-07-08, 17:20:00](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Georgia Court Throws Out Earlier Ruling That Relied on Fake Cases Made Up By AI](https://yro.slashdot.org/story/25/07/08/172256/georgia-court-throws-out-earlier-ruling-that-relied-on-fake-cases-made-up-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 16:57:18](https://news.ycombinator.com/item?id=44501821) - [GlobalFoundries to Acquire MIPS](https://mips.com/press-releases/gf-mips/)
* [2025-07-08, 16:40:00](https://linux.slashdot.org/story/25/07/08/1543259/suse-launching-region-locked-support-for-the-sovereignty-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SUSE Launching Region-Locked Support For the Sovereignty-Conscious](https://linux.slashdot.org/story/25/07/08/1543259/suse-launching-region-locked-support-for-the-sovereignty-conscious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 16:37:55](https://lobste.rs/s/sd5w2g/announcing_foks_federated_open_key) - [Announcing FOKS, the Federated Open Key Service](https://blog.foks.pub/posts/introducing/)
* [2025-07-08, 16:13:40](https://news.ycombinator.com/item?id=44501413) - [Smollm3: Smol, multilingual, long-context reasoner LLM](https://huggingface.co/blog/smollm3)
* [2025-07-08, 16:11:20](https://news.ycombinator.com/item?id=44501379) - [Google can now read your WhatsApp messages](https://www.neowin.net/guides/google-can-now-read-your-whatsapp-messages-heres-how-to-stop-it/)
* [2025-07-08, 16:05:00](https://news.slashdot.org/story/25/07/08/1537230/a-marco-rubio-impostor-is-using-ai-voice-to-call-high-level-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Marco Rubio Impostor is Using AI Voice To Call High-Level Officials](https://news.slashdot.org/story/25/07/08/1537230/a-marco-rubio-impostor-is-using-ai-voice-to-call-high-level-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 15:47:13](https://lobste.rs/s/mf2zg3/which_kubernetes_is_smallest_examining) - [Which Kubernetes is the Smallest? Examining Talos Linux, K3s, K0s, and More](https://www.siderolabs.com/blog/which-kubernetes-is-the-smallest/)
* [2025-07-08, 15:25:00](https://tech.slashdot.org/story/25/07/08/1525251/x-says-its-deeply-concerned-about-india-press-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X Says It&apos;s &apos;Deeply Concerned&apos; About India Press Censorship](https://tech.slashdot.org/story/25/07/08/1525251/x-says-its-deeply-concerned-about-india-press-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 15:18:49](https://news.ycombinator.com/item?id=44500840) - [Show HN: Jukebox – Free, Open Source Group Playlist with Fair Queueing](https://www.jukeboxhq.com/)
* [2025-07-08, 15:00:03](https://lobste.rs/s/ww0yad/customize_your_keyboard_shortcuts) - [Customize your keyboard shortcuts in Chrome with a Chrome extension](https://taupiqueur.github.io/chrome-shortcuts)
* [2025-07-08, 14:40:00](https://tech.slashdot.org/story/25/07/08/1255232/unless-users-take-action-android-will-let-gemini-access-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unless Users Take Action, Android Will Let Gemini Access Third-Party Apps](https://tech.slashdot.org/story/25/07/08/1255232/unless-users-take-action-android-will-let-gemini-access-third-party-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 14:39:45](https://lobste.rs/s/wazjzq/bitchat_is_decentralized_peer_peer) - [bitchat is a decentralized, peer-to-peer messaging application that operates over Bluetooth Low Energy (BLE) mesh networks](https://github.com/jackjackbits/bitchat/blob/main/WHITEPAPER.md)
* [2025-07-08, 14:21:56](https://lobste.rs/s/zlm4fp/how_i_build_software_quickly) - [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)
* [2025-07-08, 14:16:50](https://lobste.rs/s/rvmew5/deterministic_simulation_testing_rust) - [Deterministic Simulation Testing in Rust: A Theater Of State Machines](https://www.polarsignals.com/blog/posts/2025/07/08/dst-rust)
* [2025-07-08, 14:00:00](https://news.slashdot.org/story/25/07/08/1237220/microsoft-openai-and-a-us-teachers-union-are-hatching-a-plan-to-bring-ai-into-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, OpenAI, and a US Teachers&apos; Union Are Hatching a Plan To &apos;Bring AI into the Classroom&apos;](https://news.slashdot.org/story/25/07/08/1237220/microsoft-openai-and-a-us-teachers-union-are-hatching-a-plan-to-bring-ai-into-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 13:59:21](https://lobste.rs/s/qrygis/making_unsafe_rust_little_safer_find) - [Making Unsafe Rust a Little Safer: Find Memory Errors in Production with GWP-ASan](https://blog.colinbreck.com/making-unsafe-rust-a-little-safer-find-memory-errors-in-production-with-gwp-asan/)
* [2025-07-08, 13:51:19](https://lobste.rs/s/4wyzur/bmesh) - [BMesh](https://developer.blender.org/docs/features/objects/mesh/bmesh/)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 13:00:00](https://science.slashdot.org/story/25/07/08/0152223/weedkiller-ingredient-widely-used-in-us-can-damage-organs-and-gut-bacteria-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weedkiller Ingredient Widely Used In US Can Damage Organs and Gut Bacteria, Research Shows](https://science.slashdot.org/story/25/07/08/0152223/weedkiller-ingredient-widely-used-in-us-can-damage-organs-and-gut-bacteria-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-08, 12:00:53](https://news.ycombinator.com/item?id=44499183) - [Attimet (YC F24) – Quant Trading Research Lab – Is Hiring Founding Researcher](https://www.ycombinator.com/companies/attimet/jobs/6LaQIc5-founding-researcher-quant)
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
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-08, 01:09:50](https://lobste.rs/s/kvgdjh/how_janet_s_peg_module_works) - [How Janet&apos;s PEG module works](https://bakpakin.com/writing/how-janets-peg-works.html)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 23:31:56](https://lobste.rs/s/xenlje/you_should_run_certificate_transparency) - [You Should Run a Certificate Transparency Log](https://words.filippo.io/run-sunlight/)
* [2025-07-07, 22:58:45](https://news.ycombinator.com/item?id=44495428) - [Bootstrapping a side project into a profitable seven-figure business](https://projectionlab.com/blog/we-reached-1m-arr-with-zero-funding)
* [2025-07-07, 22:10:26](https://lobste.rs/s/oapkjg/code_trust_vibrators_pacemakers) - [CODE AND TRUST: vibrators to pacemakers](https://punkx.org/jackdoe/code-and-trust.html)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 18:28:04](https://lobste.rs/s/nm5lho/stop_putting_nix_setup_your_checked_envrc) - [Stop putting nix setup in your checked-in .envrc files](https://offby1.website/posts/stop-putting-nix-setup-in-your-checked-in-envrc-files.html)
* [2025-07-07, 18:19:13](https://news.ycombinator.com/item?id=44493196) - [New sphere-packing record stems from an unexpected source](https://www.quantamagazine.org/new-sphere-packing-record-stems-from-an-unexpected-source-20250707/)
* [2025-07-07, 17:48:22](https://lobste.rs/s/w6q3d1/future_forums_is_lies_i_guess) - [The Future of Forums is Lies, I Guess](https://aphyr.com/posts/389-the-future-of-forums-is-lies-i-guess)
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
* [2025-07-05, 21:12:01](https://news.ycombinator.com/item?id=44475579) - [Inertial forces (indirect terms) in problems with a central body](https://astro.theoj.org/article/141682-on-inertial-forces-indirect-terms-in-problems-with-a-central-body)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 13:52:31](https://news.ycombinator.com/item?id=44472812) - [Ceramic: A cross-platform and open-source 2D framework in Haxe](https://ceramic-engine.com/)
* [2025-07-05, 13:18:39](https://news.ycombinator.com/item?id=44472613) - [Plants monitor the integrity of their barrier by sensing gas diffusion](https://www.nature.com/articles/s41586-025-09223-4)
* [2025-07-05, 12:13:50](https://news.ycombinator.com/item?id=44472246) - [Berry Script: lightweight embedded scripting language for microcontrollers](https://berry-lang.github.io/)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 11:40:43](https://news.ycombinator.com/item?id=44472036) - [On The Meaning of Ritual](https://alicemaz.substack.com/p/on-the-meaning-of-ritual)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 06:08:36](https://news.ycombinator.com/item?id=44470447) - [Particle Lenia Deluxe Edition](https://www.craftlinks.art/Notebook/particle-lenia/)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
* [2025-07-04, 21:23:00](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss) - [Mess is Best: Disordered Structure of Battery-Like Devices Improves Performance](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss)
* [2025-07-04, 16:49:27](https://news.ycombinator.com/item?id=44466030) - [Can an email go 500 miles in 2025?](https://flak.tedunangst.com/post/can-an-email-go-500-miles-in-2025)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 13:57:19](https://news.ycombinator.com/item?id=44464628) - [Epanet-JS](https://macwright.com/2025/07/03/epanet-placemark)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
