# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Move over Dijkstra: New Algorithm Just Rewrote 70 Years of Computer Science](https://medium.com/@kanishks772/move-over-dijkstra-the-new-algorithm-that-just-rewrote-70-years-of-computer-science-d670696c440d) - A groundbreaking algorithm challenges the foundational work of Dijkstra, offering fresh insights into computer science.

* [Blender 4.5 brings big changes](https://lwn.net/Articles/1036262/) - The latest release of the popular 3D modeling software introduces significant new capabilities and updates.

* [Microsoft Says AI Can Create 'Zero Day' Threats In Biology](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting potential risks, Microsoft discusses the emerging concerns of AI designing 'zero day' biological threats.

* [Colorado Deploys Self-Driving Crash Trucks To Protect Highway Workers](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This innovative use of autonomous vehicles aims to safeguard highway workers with self-driving crash trucks.

* [Snapchat Caps Free Memory Storage, Launches Paid Storage Plans](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Snapchat takes a bold step with its new paid memory storage plans, capping free storage for users.

* [Amazon Vega OS and Vega Developer Tools](https://developer.amazon.com/apps-and-games/vega) - Amazon announces its operating system and developer tools, aiming to disrupt the competitive landscape.

## Cybersecurity and Privacy Challenges

* [CVE-2025-59489: Arbitrary Code Execution in Unity Runtime](https://flatt.tech/research/posts/arbitrary-code-execution-in-unity-runtime/) - A newly discovered critical vulnerability in Unity Runtime exposes potential risks of misuse.

* [Microsoft Says AI Can Create 'Zero Day' Threats In Biology](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI is now capable of engineering unforeseen biological threats, raising alarm among researchers.

* [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - A new report critically examines claims surrounding AI coding, calling out exaggerated promises.

* [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - A move by ICE sparks privacy concerns over a powerful tool capable of vast-scale surveillance.

* [Google Says Hackers Are Sending Extortion Emails To Executives](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Executives are being targeted by hackers using extortion emails, highlighting vulnerabilities.

* [AI Has Already Run Out of Training Data, Goldman's Data Chief Says](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The rapid growth of AI brings to light an impending data shortage for training powerful models.

## Society, Ethics, and Culture

* [TikTok 'directs child accounts to pornographic content within a few clicks'](https://www.theguardian.com/technology/2025/oct/03/tiktok-child-accounts-pornographic-content-accessible) - Alarming report uncovers the ease with which harmful content is accessible to children through TikTok.

* [In Praise of RSS and Controlled Feeds of Information](https://blog.burkert.me/posts/in_praise_of_syndication/) - The enduring value of RSS as a tool for curated and focused information intake.

* [Snapchat Caps Free Memory Storage, Launches Paid Storage Plans](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Snapchat introduces a new storage model, requiring users to subscribe for additional memory.

* [You Want Technology with Warts](https://entropicthoughts.com/you-want-technology-with-warts) - A philosophical exploration of why imperfection in technology has unintended benefits.

## AI and Its Evolution

* [Claude's New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - Analyses AI-driven software innovations alongside inherent security concerns.

* [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - A concerning development as AI takes steps into highly dangerous territories of virus production.

* [AI Has Already Run Out of Training Data, Goldman’s Data Chief Says](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A perspective on challenges faced by voracious AI systems relying on extensive data.

* [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - A critique highlighting failures and inefficiencies in blindly deploying insufficiently skilled AI systems.

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

* [2025-10-03, 13:00:00](https://developers.slashdot.org/story/25/10/03/0426240/nyt-podcast-on-job-market-for-recent-cs-grads-raises-ire-of-codeorg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT Podcast On Job Market For Recent CS Grads Raises Ire of Code.org](https://developers.slashdot.org/story/25/10/03/0426240/nyt-podcast-on-job-market-for-recent-cs-grads-raises-ire-of-codeorg?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 12:41:20](https://lobste.rs/s/ggwihc/threat_model_for_accessibility_on_web) - [A threat model for accessibility on the web](https://alice.boxhall.au/articles/a-threat-model-for-accessibility-on-the-web/)
* [2025-10-03, 12:38:47](https://lobste.rs/s/anuzef/cve_2025_59489_arbitrary_code_execution) - [CVE-2025-59489: Arbitrary Code Execution in Unity Runtime](https://flatt.tech/research/posts/arbitrary-code-execution-in-unity-runtime/)
* [2025-10-03, 12:26:02](https://news.ycombinator.com/item?id=45462163) - [TikTok &apos;directs child accounts to pornographic content within a few clicks&apos;](https://www.theguardian.com/technology/2025/oct/03/tiktok-child-accounts-pornographic-content-accessible)
* [2025-10-03, 12:24:02](https://news.ycombinator.com/item?id=45462143) - [A Thermometer for Measuring Quantumness](https://www.quantamagazine.org/a-thermometer-for-measuring-quantumness-20251001/)
* [2025-10-03, 12:19:42](https://news.ycombinator.com/item?id=45462094) - [Move over Dijkstra: New Algorithm Just Rewrote 70 Years of Computer Science](https://medium.com/@kanishks772/move-over-dijkstra-the-new-algorithm-that-just-rewrote-70-years-of-computer-science-d670696c440d)
* [2025-10-03, 12:05:59](https://news.ycombinator.com/item?id=45461975) - [The biggest sign of an AI bubble is starting to appear – debt](https://www.axios.com/2025/10/03/ai-bubble-meta-oracle-microsoft)
* [2025-10-03, 12:00:43](https://news.ycombinator.com/item?id=45461930) - [QuestDB (YC S20) Is Hiring a Core Database Engineer – C++ and Rust](https://questdb.com/careers/core-database-engineer/)
* [2025-10-03, 11:15:05](https://lobste.rs/s/cqdtto/we_bought_whole_gpu_so_we_re_damn_well_going) - [We Bought the Whole GPU, So We&apos;re Damn Well Going to Use the Whole GPU](https://hazyresearch.stanford.edu/blog/2025-09-28-tp-llama-main)
* [2025-10-03, 11:08:42](https://news.ycombinator.com/item?id=45461500) - [Niri – A scrollable-tiling Wayland compositor](https://github.com/YaLTeR/niri)
* [2025-10-03, 11:05:21](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend)
* [2025-10-03, 10:00:00](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snapchat Caps Free Memory Storage, Launches Paid Storage Plans](https://hardware.slashdot.org/story/25/10/03/0444229/snapchat-caps-free-memory-storage-launches-paid-storage-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 07:20:44](https://lobste.rs/s/gen7vw/ci_cd_components_generate_verify) - [CI/CD components to generate and verify provenance attestation](https://gitlab.com/groups/gitlab-org/-/epics/15859#note_2540189548)
* [2025-10-03, 07:00:00](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says AI Can Create &apos;Zero Day&apos; Threats In Biology](https://science.slashdot.org/story/25/10/02/2335217/microsoft-says-ai-can-create-zero-day-threats-in-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 05:13:47](https://news.ycombinator.com/item?id=45459233) - [In Praise of RSS and Controlled Feeds of Information](https://blog.burkert.me/posts/in_praise_of_syndication/)
* [2025-10-03, 04:22:15](https://lobste.rs/s/0gwfaa/new_control_structures_apl_1982) - [New Control Structures In APL? (1982)](https://dl.acm.org/doi/10.1145/586713.586717)
* [2025-10-03, 04:21:23](https://news.ycombinator.com/item?id=45458948) - [Fp8 runs ~100 tflops faster when the kernel name has \&quot;cutlass\&quot; in it](https://github.com/triton-lang/triton/pull/7298)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-03, 03:52:43](https://news.ycombinator.com/item?id=45458791) - [Blender 4.5 brings big changes](https://lwn.net/Articles/1036262/)
* [2025-10-03, 03:30:00](https://yro.slashdot.org/story/25/10/02/238239/cops-accused-vandal-confessed-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cops: Accused Vandal Confessed To ChatGPT](https://yro.slashdot.org/story/25/10/02/238239/cops-accused-vandal-confessed-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 03:13:13](https://news.ycombinator.com/item?id=45458550) - [You Want Technology with Warts](https://entropicthoughts.com/you-want-technology-with-warts)
* [2025-10-03, 03:02:00](https://lobste.rs/s/cvyvc1/domain_driven_design_clojure_with) - [Domain Driven Design in Clojure with generalized Hiccup](https://www.biotz.io/post/domain-driven-design-in-clojure-with-generalized-hiccup)
* [2025-10-03, 02:33:21](https://news.ycombinator.com/item?id=45458249) - [Stdlib: A library of frameworks, templates, and guides for technical leadership](https://debuggingleadership.com/stdlib)
* [2025-10-03, 02:13:17](https://news.ycombinator.com/item?id=45458122) - [FyneDesk: A full desktop environment for Linux written in Go](https://github.com/FyshOS/fynedesk)
* [2025-10-03, 02:02:00](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autism Should Not Be Seen As Single Condition With One Cause, Say Scientists](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 01:25:00](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford IT Systems Tampered With To Display Vulgar Anti-RTO Message Across Office Screens](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 01:20:32](https://news.ycombinator.com/item?id=45457670) - [I spent the day teaching seniors how to use an iPhone](https://forums.macrumors.com/threads/i-spent-the-day-trying-to-teach-seniors-how-to-use-an-iphone-and-it-was-a-nightmare.2468117/)
* [2025-10-03, 00:51:26](https://news.ycombinator.com/item?id=45457460) - [Microcomputers – The Second Wave: Toward a Mass Market](https://technicshistory.com/2025/10/03/microcomputers-the-second-wave-towards-a-mass-market/)
* [2025-10-03, 00:45:00](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Deploys Self-Driving Crash Trucks To Protect Highway Workers](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 00:44:06](https://lobste.rs/s/be78ef/dropping_upstream_nix_from_determinate) - [Dropping upstream Nix from Determinate Nix Installer](https://determinate.systems/blog/installer-dropping-upstream/)
* [2025-10-03, 00:12:38](https://lobste.rs/s/3oyazz/signal_protocol_post_quantum_ratchets) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-03, 00:02:00](https://it.slashdot.org/story/25/10/02/2116200/new-zealands-institute-of-it-professionals-collapses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Zealand&apos;s Institute of IT Professionals Collapses](https://it.slashdot.org/story/25/10/02/2116200/new-zealands-institute-of-it-professionals-collapses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 23:20:00](https://hardware.slashdot.org/story/25/10/02/210246/amd-in-early-talks-to-make-chips-at-intel-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD In Early Talks To Make Chips At Intel Foundry](https://hardware.slashdot.org/story/25/10/02/210246/amd-in-early-talks-to-make-chips-at-intel-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 22:40:00](https://tech.slashdot.org/story/25/10/02/2054222/two-amazon-delivery-drones-crash-into-crane-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Amazon Delivery Drones Crash Into Crane In Arizona](https://tech.slashdot.org/story/25/10/02/2054222/two-amazon-delivery-drones-crash-into-crane-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 22:00:00](https://yro.slashdot.org/story/25/10/02/2036202/sports-piracy-operator-goes-from-jail-to-getting-hired-by-a-tech-unicorn-in-a-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sports Piracy Operator Goes From Jail To Getting Hired By a Tech Unicorn In a Month](https://yro.slashdot.org/story/25/10/02/2036202/sports-piracy-operator-goes-from-jail-to-getting-hired-by-a-tech-unicorn-in-a-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 21:34:42](https://news.ycombinator.com/item?id=45455882) - [The strangest letter of the alphabet: The rise and fall of yogh](https://www.deadlanguagesociety.com/p/history-of-letter-yogh)
* [2025-10-02, 21:34:34](https://lobste.rs/s/0zzvie/c_26_std_optional_t) - [C++26: std::optional&lt;T&amp;&gt;](https://www.sandordargo.com/blog/2025/10/01/cpp26-optional-of-reference)
* [2025-10-02, 21:22:00](https://tech.slashdot.org/story/25/10/02/1917242/what-happened-when-a-pacific-island-was-cut-off-from-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When a Pacific Island Was Cut Off From the Internet](https://tech.slashdot.org/story/25/10/02/1917242/what-happened-when-a-pacific-island-was-cut-off-from-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 21:15:41](https://lobste.rs/s/xcceiy/neural_network_written_completely_jq) - [A neural network written completely in jq (2017)](https://github.com/kevin-albert/jq-neural-network)
* [2025-10-02, 20:41:00](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Has Already Run Out of Training Data, Goldman&apos;s Data Chief Says](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 20:38:31](https://lobste.rs/s/ulyau9/whatever_happened_sha_256_support_git) - [Whatever happened to SHA-256 support in Git? (2022)](https://lwn.net/Articles/898522/)
* [2025-10-02, 20:32:23](https://lobste.rs/s/yhp6ym/where_it_s_at) - [Where It&apos;s at://](https://overreacted.io/where-its-at/)
* [2025-10-02, 20:15:47](https://lobste.rs/s/lp2qpd/risk_rolls_downhill) - [Risk Rolls Downhill](https://corecursive.com/horizon-scandal-with-scott-darlington/)
* [2025-10-02, 20:04:17](https://lobste.rs/s/2ib77w/litestream_v0_5_0_is_here) - [Litestream v0.5.0 is Here](https://fly.io/blog/litestream-v050-is-here/)
* [2025-10-02, 20:01:00](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Hackers Are Sending Extortion Emails To Executives](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 19:21:00](https://tech.slashdot.org/story/25/10/02/180240/walmart-to-deploy-sensors-to-track-90-million-grocery-pallets-by-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart To Deploy Sensors To Track 90 Million Grocery Pallets by Next Year](https://tech.slashdot.org/story/25/10/02/180240/walmart-to-deploy-sensors-to-track-90-million-grocery-pallets-by-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:52:08](https://lobste.rs/s/cpersg/wombat_s_book_nix) - [Wombat’s Book of Nix](https://mhwombat.codeberg.page/nix-book/)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 18:12:01](https://lobste.rs/s/afajjh/nine_http_edge_cases) - [Nine HTTP Edge Cases](https://blog.dochia.dev/blog/http_edge_cases/)
* [2025-10-02, 18:06:41](https://news.ycombinator.com/item?id=45453222) - [Babel is why I keep blogging with Emacs](https://entropicthoughts.com/why-stick-to-emacs-blog)
* [2025-10-02, 18:00:38](https://lobste.rs/s/oezfwk/datafusion_postgres_postgres_protocol) - [datafusion-postgres: postgres protocol adapter for datafusion query engine](https://github.com/datafusion-contrib/datafusion-postgres)
* [2025-10-02, 16:58:55](https://news.ycombinator.com/item?id=45452261) - [Why I chose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-10-02, 16:09:15](https://news.ycombinator.com/item?id=45451577) - [Playball – Watch MLB games from a terminal](https://github.com/paaatrick/playball)
* [2025-10-02, 16:06:10](https://news.ycombinator.com/item?id=45451527) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-02, 15:52:21](https://lobste.rs/s/bzx3ue/installing_nixos_on_raspberry_pi_4) - [Installing NixOS on Raspberry Pi 4](https://mtlynch.io/nixos-pi4/)
* [2025-10-02, 15:33:18](https://lobste.rs/s/p79vuw/i_turned_lego_game_boy_into_working_game) - [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 13:29:55](https://news.ycombinator.com/item?id=45449348) - [Potential issues in curl found using AI assisted tools](https://mastodon.social/@bagder/115241241075258997)
* [2025-10-02, 09:53:13](https://lobste.rs/s/8hw5n6/asked_do_something_illegal_at_work_here_s) - [Asked to do something illegal at work? Here’s what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 07:52:08](https://lobste.rs/s/v8lxdc/tutorial_for_sam_command_language) - [A Tutorial for the Sam Command Language](https://ratfactor.com/papers/sam-language)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
* [2025-10-02, 00:37:54](https://lobste.rs/s/m2ovuo/biggest_semantic_mess_futhark) - [The biggest semantic mess in Futhark](https://futhark-lang.org/blog/2025-09-26-the-biggest-semantic-mess.html)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 23:34:33](https://lobste.rs/s/dopdda/jujutsu_v0_34_0_released) - [jujutsu v0.34.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.34.0)
* [2025-10-01, 21:57:04](https://lobste.rs/s/pxovor/immich_v2_0_0_stable_release) - [Immich v2.0.0 - Stable Release](https://github.com/immich-app/immich/releases/tag/v2.0.0)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 10:11:02](https://news.ycombinator.com/item?id=45436083) - [Icebird: JavaScript Iceberg Reader](https://github.com/hyparam/icebird)
* [2025-10-01, 09:58:07](https://news.ycombinator.com/item?id=45436010) - [Ask HN: What&apos;s your experience with using graph databases for agentic use-cases?](https://news.ycombinator.com/item?id=45436010)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 07:51:24](https://news.ycombinator.com/item?id=45435375) - [The Beer Can](https://brr.fyi/posts/beer-can)
* [2025-10-01, 06:45:19](https://news.ycombinator.com/item?id=45435016) - [Amazon Vega OS and Vega Developer Tools](https://developer.amazon.com/apps-and-games/vega)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:16:51](https://news.ycombinator.com/item?id=45425770) - [Valuing Land: The Simplest Viable Method](https://progressandpoverty.substack.com/p/valuing-land-the-simplest-viable)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:49:54](https://news.ycombinator.com/item?id=45420722) - [Modern Font Stacks](https://modernfontstacks.com/)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 16:12:59](https://news.ycombinator.com/item?id=45415519) - [Highest bridge unveiled at more than 2,000ft above ground](https://www.independent.co.uk/tv/news/china-worlds-highest-bridge-video-b2835886.html)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 12:35:06](https://news.ycombinator.com/item?id=45412938) - [Dbos: Durable Workflow Orchestration with Go and PostgreSQL](https://github.com/dbos-inc/dbos-transact-golang)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 09:55:58](https://news.ycombinator.com/item?id=45411939) - [How England misplaced its first king](https://www.bbc.com/future/article/20250926-why-england-forgot-its-first-king)
* [2025-09-29, 08:16:27](https://news.ycombinator.com/item?id=45411435) - [Consistent hashing](https://eli.thegreenplace.net/2025/consistent-hashing/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
