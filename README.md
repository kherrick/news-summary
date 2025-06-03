# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Innovations

* [What Happens If We Inline Everything?](https://sbaziotis.com/compilers/what-happens-if-we-inline-everything.html) - A deep dive into the implications of inlining every function in a codebase, exploring the impact on performance and compiler behavior. [Comments](https://lobste.rs/s/lgeepy/what_happens_if_we_inline_everything)

* [garlic: Java decompiler written in C](https://github.com/neocanable/garlic) - An impressive technical feat, showcasing a pure C implementation of a Java decompiler. [Comments](https://lobste.rs/s/hpgo0n/garlic_java_decompiler_written_c)

* [Show HN: Controlling 3D models with voice and hand gestures](https://github.com/collidingScopes/3d-model-playground) - An interactive playground for controlling 3D models through innovative input methods. [Comments](https://news.ycombinator.com/item?id=44170694)

* [swift-cross-ui: A cross-platform declarative UI framework, inspired by SwiftUI](https://github.com/stackotter/swift-cross-ui) - A new framework that aims to bring portability and declarative design to UI development. [Comments](https://lobste.rs/s/muety7/swift_cross_ui_cross_platform)

* [Page Magic: A Chrome extension that uses AI to customize the appearance of any web page](https://github.com/khaledh/pagemagic) - Blending AI into Chrome extensions to give users creative control over web interfaces. [Comments](https://lobste.rs/s/h9maxf/page_magic_chrome_extension_uses_ai)

## Science and Space Exploration

* [The Milky Way Might Not Crash Into the Andromeda Galaxy After All](https://science.slashdot.org/story/25/06/03/0341222/the-milky-way-might-not-crash-into-the-andromeda-galaxy-after-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new study challenges the long-held conclusion of a collision between the galaxies. [Comments](https://slashdot.org/story/25/06/03/0341222/the-milky-way-might-not-crash-into-the-andromeda-galaxy-after-all)

* [Mount Etna Erupts as Large Plumes Rise From Italian Volcano](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss) - The active volcano continues to showcase its explosive power with large visible plumes. [Comments](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss)

* [Plutonium Mountain: The 17-year mission to guard remains of Soviet nuclear tests](https://www.belfercenter.org/publication/plutonium-mountain-inside-17-year-mission-secure-legacy-soviet-nuclear-testing) - A detailed narrative on the efforts to secure remnants of a historic nuclear program. [Comments](https://news.ycombinator.com/item?id=44168265)

## Artificial Intelligence

* [AI makes the humanities more important, but also weirder](https://resobscura.substack.com/p/ai-makes-the-humanities-more-important) - Exploring the intersection of AI and humanities, and how each field reshapes the other. [Comments](https://news.ycombinator.com/item?id=44166102)

* [Ukraine's autonomous killer drones defeat electronic warfare](https://spectrum.ieee.org/ukraine-killer-drones) - Insights into Ukraine's advanced drone technology and its battlefield advantages. [Comments](https://news.ycombinator.com/item?id=44168658)

* [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - A fascinating revelation about AI behavior exhibiting unexpected adaptability. [Comments](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)

## Cybersecurity and Infrastructure

* [Mysterious Leaker Outs Conti Ransomware Kingpins](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss) - An unexpected twist in the fight against ransomware as insider information comes to light. [Comments](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss)

* [Texas Right To Repair Bill Passes](https://hardware.slashdot.org/story/25/06/02/225250/texas-right-to-repair-bill-passes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This legislation marks a significant shift in repair rights for consumers and businesses. [Comments](https://slashdot.org/story/25/06/02/225250/texas-right-to-repair-bill-passes)

* [Covert Web-to-App Tracking via Localhost on Android](https://localmess.github.io/) - A technical analysis unveiling privacy vulnerabilities in web-to-app communication. [Comments](https://news.ycombinator.com/item?id=44169314)

## Cultural and Linguistic Explorations

* [The Small World of English](https://www.inotherwords.app/linguabase/) - A creative tool that visualizes relationships and networks in the English language. [Comments](https://news.ycombinator.com/item?id=44170968)

* [Sid Meier's Pirates – In-depth (2017)](https://shot97retro.blogspot.com/2017/12/sid-meiers-pirates-in-depth-written.html) - A retrospective look at one of the most beloved strategy games. [Comments](https://news.ycombinator.com/item?id=44142343)

## Legal, Political, and Economic Developments

* [Ford Mustang Eleanor From Gone In 60 Seconds Can't Be Copyrighted](https://yro.slashdot.org/story/25/06/03/1449224/ford-mustang-eleanor-from-gone-in-60-seconds-cant-be-copyrighted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A legal ruling clarifies copyright laws for iconic vehicles in movies. [Comments](https://slashdot.org/story/25/06/03/1449224/ford-mustang-eleanor-from-gone-in-60-seconds-cant-be-copyrighted)

* [China To Ease Rare Earth Export Restrictions To Benefit Domestic And European Semiconductor Firms](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss) - A trade policy shift with potential ramifications for global tech manufacturing. [Comments](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss)

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

* [2025-06-03, 15:36:24](https://lobste.rs/s/lgeepy/what_happens_if_we_inline_everything) - [What Happens If We Inline Everything?](https://sbaziotis.com/compilers/what-happens-if-we-inline-everything.html)
* [2025-06-03, 15:24:42](https://lobste.rs/s/hpgo0n/garlic_java_decompiler_written_c) - [garlic: Java decompiler written in C](https://github.com/neocanable/garlic)
* [2025-06-03, 15:20:00](https://news.slashdot.org/story/25/06/03/1518251/ukraines-massive-drone-attack-was-powered-by-open-source-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukraine&apos;s Massive Drone Attack Was Powered by Open Source Software](https://news.slashdot.org/story/25/06/03/1518251/ukraines-massive-drone-attack-was-powered-by-open-source-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 15:17:30](https://lobste.rs/s/pn7sq3/interfacing_mcp_with_combinatorial) - [Interfacing MCP with Combinatorial, Convex, and SMT Solvers](https://www.stephendiehl.com/posts/smt_and_mcp_solvers/)
* [2025-06-03, 15:14:52](https://news.ycombinator.com/item?id=44170968) - [The Small World of English](https://www.inotherwords.app/linguabase/)
* [2025-06-03, 15:14:52](https://news.ycombinator.com/item?id=44170967) - [Claude Code Is My Computer](https://steipete.me/posts/2025/claude-code-is-my-computer)
* [2025-06-03, 14:49:00](https://yro.slashdot.org/story/25/06/03/1449224/ford-mustang-eleanor-from-gone-in-60-seconds-cant-be-copyrighted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Mustang Eleanor From Gone In 60 Seconds Can&apos;t Be Copyrighted](https://yro.slashdot.org/story/25/06/03/1449224/ford-mustang-eleanor-from-gone-in-60-seconds-cant-be-copyrighted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 14:47:20](https://news.ycombinator.com/item?id=44170708) - [Mario Kart designers had to rethink everything to make it open world](https://www.theverge.com/interview/678097/mario-kart-world-nintendo-switch-2-interview-kosuke-yabuki)
* [2025-06-03, 14:45:52](https://news.ycombinator.com/item?id=44170694) - [Show HN: Controlling 3D models with voice and hand gestures](https://github.com/collidingScopes/3d-model-playground)
* [2025-06-03, 14:41:47](https://news.ycombinator.com/item?id=44170657) - [Show HN: PinSend – Share text between devices using a PIN(P2P, no login)](https://pinsend.app)
* [2025-06-03, 14:36:49](https://news.ycombinator.com/item?id=44170600) - [Making Magic with MCP: From Data Retrieval to Real Analysis and Insights](https://jellyfish.co/blog/how-ably-makes-magic-with-jellyfishs-mcp/)
* [2025-06-03, 14:17:00](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss) - [China To Ease Rare Earth Export Restrictions To Benefit Domestic And European Semiconductor Firms](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss)
* [2025-06-03, 14:09:00](https://news.slashdot.org/story/25/06/03/1410205/wild-animal-markets-pose-rising-pandemic-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wild-Animal Markets Pose Rising Pandemic Threat](https://news.slashdot.org/story/25/06/03/1410205/wild-animal-markets-pose-rising-pandemic-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 13:57:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss) - [Mount Etna Erupts as Large Plumes Rise From Italian Volcano](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss)
* [2025-06-03, 13:41:56](https://lobste.rs/s/fgt681/vibe_coding_case_study_scubaduck) - [Vibe coding case study: ScubaDuck](https://blog.ezyang.com/2025/06/vibe-coding-case-study-scubaduck/)
* [2025-06-03, 13:00:00](https://tech.slashdot.org/story/25/06/03/0354202/vmware-drops-the-lowest-tier-of-its-partner-program-except-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Drops the Lowest Tier of Its Partner Program, Except In Europe](https://tech.slashdot.org/story/25/06/03/0354202/vmware-drops-the-lowest-tier-of-its-partner-program-except-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 12:35:06](https://news.ycombinator.com/item?id=44169314) - [Covert Web-to-App Tracking via Localhost on Android](https://localmess.github.io/)
* [2025-06-03, 12:32:34](https://lobste.rs/s/0wtqlb/covert_web_app_tracking_via_localhost_on) - [Covert Web-to-App Tracking via Localhost on Android](https://localmess.github.io/)
* [2025-06-03, 12:14:29](https://news.ycombinator.com/item?id=44169132) - [Show HN: I wrote a Java decompiler in pure C language](https://github.com/neocanable/garlic)
* [2025-06-03, 12:00:53](https://news.ycombinator.com/item?id=44169039) - [Spark AI (YC W24) Is Hiring a Full Stack Engineer in San Francisco](https://www.ycombinator.com/companies/spark/jobs/kDeJlPK-software-engineer-full-stack)
* [2025-06-03, 11:55:46](https://news.ycombinator.com/item?id=44168994) - [Updates to Windows for the Digital Markets Act](https://blogs.windows.com/windows-insider/2025/06/02/updates-to-windows-for-the-digital-markets-act/)
* [2025-06-03, 11:35:28](https://lobste.rs/s/h9maxf/page_magic_chrome_extension_uses_ai) - [Page Magic: A Chrome extension that uses AI to customize the appearance of any web page](https://github.com/khaledh/pagemagic)
* [2025-06-03, 11:15:41](https://news.ycombinator.com/item?id=44168705) - [What Is \&quot;Seeing\&quot; in Astrophotography? The Science Behind Atmospheric Turbulence](https://astroimagery.com/astronomy/what-does-seeing-mean-in-astrophotography/)
* [2025-06-03, 11:08:51](https://news.ycombinator.com/item?id=44168658) - [Ukraine&apos;s autonomous killer drones defeat electronic warfare](https://spectrum.ieee.org/ukraine-killer-drones)
* [2025-06-03, 10:44:06](https://lobste.rs/s/muety7/swift_cross_ui_cross_platform) - [swift-cross-ui: A cross-platform declarative UI framework, inspired by SwiftUI](https://github.com/stackotter/swift-cross-ui)
* [2025-06-03, 10:06:37](https://news.ycombinator.com/item?id=44168265) - [Plutonium Mountain: The 17-year mission to guard remains of Soviet nuclear tests](https://www.belfercenter.org/publication/plutonium-mountain-inside-17-year-mission-secure-legacy-soviet-nuclear-testing)
* [2025-06-03, 10:00:00](https://science.slashdot.org/story/25/06/03/0335217/trump-wants-1-billion-for-private-sector-led-mars-exploration?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Wants $1 Billion For Private-Sector-Led Mars Exploration](https://science.slashdot.org/story/25/06/03/0335217/trump-wants-1-billion-for-private-sector-led-mars-exploration?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 09:30:00](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss) - [Mysterious Leaker Outs Conti Ransomware Kingpins](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss)
* [2025-06-03, 08:06:28](https://news.ycombinator.com/item?id=44167592) - [Quarkdown: A modern Markdown-based typesetting system](https://github.com/iamgio/quarkdown)
* [2025-06-03, 07:06:29](https://lobste.rs/s/rdfv8s/tpde_fast_framework_for_writing_baseline) - [tpde: A fast framework for writing baseline compiler back-ends in C++](https://github.com/tpde2/tpde)
* [2025-06-03, 07:00:00](https://science.slashdot.org/story/25/06/03/0341222/the-milky-way-might-not-crash-into-the-andromeda-galaxy-after-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Milky Way Might Not Crash Into the Andromeda Galaxy After All](https://science.slashdot.org/story/25/06/03/0341222/the-milky-way-might-not-crash-into-the-andromeda-galaxy-after-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 06:37:25](https://news.ycombinator.com/item?id=44167049) - [Fun with Futex](https://blog.fredrb.com/2025/06/02/futex-fun/)
* [2025-06-03, 05:20:36](https://lobste.rs/s/8nxsog/beachpatrol_cli_automate_your_everyday) - [Beachpatrol: CLI to automate your everyday web browser](https://github.com/sebastiancarlos/beachpatrol)
* [2025-06-03, 04:42:00](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss) - [Leprosy Was in the Americas Long Before the Arrival of Europeans](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss)
* [2025-06-03, 04:05:19](https://news.ycombinator.com/item?id=44166155) - [The Metamorphosis of Prime Intellect (1994)](https://localroger.com/prime-intellect/mopiall.html)
* [2025-06-03, 04:04:32](https://lobste.rs/s/mnuuhh/example_splitting_pr) - [Example of Splitting a PR](https://www.jefftk.com/p/example-of-splitting-a-pr)
* [2025-06-03, 03:53:20](https://news.ycombinator.com/item?id=44166102) - [AI makes the humanities more important, but also weirder](https://resobscura.substack.com/p/ai-makes-the-humanities-more-important)
* [2025-06-03, 03:30:00](https://science.slashdot.org/story/25/06/03/0142217/younger-generations-less-likely-to-have-dementia-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Younger Generations Less Likely To Have Dementia, Study Suggests](https://science.slashdot.org/story/25/06/03/0142217/younger-generations-less-likely-to-have-dementia-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 01:57:47](https://lobste.rs/s/exhnck/technical_guide_system_calls) - [Technical Guide To System Calls: Implementation And Signal Handling In Modern Operating systems](https://mohitmishra786.github.io/chessman/2025/03/31/Technical-Guide-to-System-Calls-Implementation-and-Signal-Handling-in-Modern-Operating-Systems.html)
* [2025-06-03, 01:40:00](https://yro.slashdot.org/story/25/06/03/0135257/coinbase-breach-linked-to-customer-data-leak-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Breach Linked To Customer Data Leak In India](https://yro.slashdot.org/story/25/06/03/0135257/coinbase-breach-linked-to-customer-data-leak-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 01:02:00](https://it.slashdot.org/story/25/06/03/011231/microsoft-to-finally-stop-bugging-windows-users-about-edge---but-only-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Finally Stop Bugging Windows Users About Edge - But Only in Europe](https://it.slashdot.org/story/25/06/03/011231/microsoft-to-finally-stop-bugging-windows-users-about-edge---but-only-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 01:01:36](https://lobste.rs/s/qtyilg/genai_is_our_polyester) - [GenAI is Our Polyester](https://culture.ghost.io/genai-is-our-polyester/)
* [2025-06-03, 00:02:00](https://hardware.slashdot.org/story/25/06/02/225250/texas-right-to-repair-bill-passes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Right To Repair Bill Passes](https://hardware.slashdot.org/story/25/06/02/225250/texas-right-to-repair-bill-passes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 00:01:36](https://lobste.rs/s/yrdozv/swift_at_apple_migrating_password) - [Swift at Apple: migrating the Password Monitoring service from Java](https://www.swift.org/blog/swift-at-apple-migrating-the-password-monitoring-service-from-java/)
* [2025-06-02, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss) - [Intel Wins Crucial Verdict in Legal Fight Against Patent Troll VLSI](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss)
* [2025-06-02, 23:20:00](https://tech.slashdot.org/story/25/06/02/2156253/pro-ai-subreddit-bans-uptick-of-users-who-suffer-from-ai-delusions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-AI Subreddit Bans &apos;Uptick&apos; of Users Who Suffer From AI Delusions](https://tech.slashdot.org/story/25/06/02/2156253/pro-ai-subreddit-bans-uptick-of-users-who-suffer-from-ai-delusions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 22:40:00](https://apple.slashdot.org/story/25/06/02/2139234/jony-ives-openai-device-gets-the-laurene-powell-jobs-nod-of-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jony Ive&apos;s OpenAI Device Gets the Laurene Powell Jobs Nod of Approval ](https://apple.slashdot.org/story/25/06/02/2139234/jony-ives-openai-device-gets-the-laurene-powell-jobs-nod-of-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 22:00:00](https://linux.slashdot.org/story/25/06/02/2124213/linux-user-share-hits-a-multi-year-high-on-steam-for-may-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux User Share Hits a Multi-Year High On Steam For May 2025](https://linux.slashdot.org/story/25/06/02/2124213/linux-user-share-hits-a-multi-year-high-on-steam-for-may-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 21:50:15](https://news.ycombinator.com/item?id=44163496) - [Conformance checking at MongoDB: Testing that our code matches our TLA+ specs](https://www.mongodb.com/blog/post/engineering/conformance-checking-at-mongodb-testing-our-code-matches-our-tla-specs)
* [2025-06-02, 21:48:44](https://lobste.rs/s/giqysi/conformance_checking_at_mongodb_testing) - [Conformance Checking at MongoDB: Testing That Our Code Matches Our TLA+ Specs | MongoDB Blog](https://www.mongodb.com/blog/post/engineering/conformance-checking-at-mongodb-testing-our-code-matches-our-tla-specs)
* [2025-06-02, 21:41:53](https://lobste.rs/s/qxgjrq/my_ai_skeptic_friends_are_all_nuts) - [My AI Skeptic Friends Are All Nuts](https://fly.io/blog/youre-all-nuts/)
* [2025-06-02, 21:22:00](https://tech.slashdot.org/story/25/06/02/2120227/google-settles-shareholder-lawsuit-sill-spend-500-million-on-being-less-evil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Settles Shareholder Lawsuit, Sill Spend $500 Million On Being Less Evil](https://tech.slashdot.org/story/25/06/02/2120227/google-settles-shareholder-lawsuit-sill-spend-500-million-on-being-less-evil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 21:09:53](https://news.ycombinator.com/item?id=44163063) - [My AI skeptic friends are all nuts](https://fly.io/blog/youre-all-nuts/)
* [2025-06-02, 20:43:01](https://lobste.rs/s/a763eo/tests_should_not_contain_logic) - [Tests should not contain logic](https://blog.snork.dev/posts/tests-should-not-contain-logic.html)
* [2025-06-02, 20:10:00](https://tech.slashdot.org/story/25/06/02/1922257/microsoft-google-others-team-up-to-standardize-confusing-hacker-group-nicknames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft, Google, Others Team Up To Standardize Confusing Hacker Group Nicknames](https://tech.slashdot.org/story/25/06/02/1922257/microsoft-google-others-team-up-to-standardize-confusing-hacker-group-nicknames?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 19:53:37](https://lobste.rs/s/xk09xw/public_protected_private_is_unnecessary) - [public/protected/private is an unnecessary feature](https://catern.com/private.html)
* [2025-06-02, 19:40:03](https://lobste.rs/s/i43e6e/google_logo_ligature_bug) - [Google Logo Ligature Bug](https://www.jefftk.com/p/google-logo-ligature-bug)
* [2025-06-02, 19:38:42](https://lobste.rs/s/dwjgyu/godaddy_issues_thousands_certificates) - [GoDaddy Issues Thousands of Certificates That Don&apos;t Work in Safari (again)](https://sslmate.com/blog/post/godaddy_issues_thousands_of_broken_certificates)
* [2025-06-02, 19:10:00](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss) - [120 Court Cases Have Been Caught With AI Hallucinations, According to New Database](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss)
* [2025-06-02, 15:20:13](https://news.ycombinator.com/item?id=44159758) - [Show HN: A toy version of Wireshark (student project)](https://github.com/lixiasky/vanta)
* [2025-06-02, 15:01:18](https://news.ycombinator.com/item?id=44159528) - [Ask HN: Who is hiring? (June 2025)](https://news.ycombinator.com/item?id=44159528)
* [2025-06-02, 14:28:11](https://lobste.rs/s/nahh5c/faster_route_propagation_by_rewriting) - [Faster route propagation by rewriting our Traefik gateway in Rust](https://rivet.gg/blog/2025-06-02-faster-route-propagation-by-rewriting-our-traefik-gateway-in-rust)
* [2025-06-02, 14:24:54](https://news.ycombinator.com/item?id=44159166) - [Cloudlflare builds OAuth with Claude and publishes all the prompts](https://github.com/cloudflare/workers-oauth-provider/)
* [2025-06-02, 14:24:00](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)
* [2025-06-02, 13:49:20](https://lobste.rs/s/02usbk/gleam_v1_11_0_released) - [Gleam v1.11.0 released](https://gleam.run/news/gleam-javascript-gets-30-percent-faster/)
* [2025-06-02, 13:43:38](https://lobste.rs/s/bbeigb/practical_dev_tcp_https_era) - [Practical /dev/tcp in the HTTPS Era](https://blog.pkgforge.dev/https-via-http)
* [2025-06-02, 13:18:39](https://lobste.rs/s/9uetee/our_grafana_loki_installs_have_quietly) - [Our Grafana and Loki installs have quietly become &apos;legacy software&apos; here](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/GrafanaAndLokiLegacyHere)
* [2025-06-02, 11:38:55](https://lobste.rs/s/wmk4we/tour_upcoming_rfcs_for_hare_programming) - [A tour of upcoming RFCs for the Hare programming language](https://harelang.org/blog/2025-06-02-planned-breaking-changes/)
* [2025-06-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) - [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss)
* [2025-06-02, 09:47:48](https://news.ycombinator.com/item?id=44157177) - [Show HN: Kan.bn – An open-source alterative to Trello](https://github.com/kanbn/kan)
* [2025-06-02, 05:16:49](https://lobste.rs/s/zjbb1m/is_transition_ipv6_inevitable) - [Is the transition to IPv6 inevitable?](https://ipv6.hanazo.no/posts/ipv6-transition-inevitable/)
* [2025-06-02, 05:00:00](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss) - [Malware Reverse Engineering - Unraveling the Secrets of Encryption in Malware](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss)
* [2025-06-02, 00:16:00](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss) - [New JWST Observations of &apos;Trans-Neptunian Objects&apos; Could Help Reveal Our Solar System&apos;s Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)
* [2025-06-01, 21:00:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss) - [NOAA Issues a &apos;Severe&apos; Solar Storm Alert, Auroras Expected at Lower Latitudes](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss)
* [2025-06-01, 19:34:00](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss) - [Using HDMI EMI for Fast Wireless Data Transfer](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss)
* [2025-06-01, 14:48:00](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss) - [Victoria&apos;s Secret Website Laid Bare For Three Days After &apos;Security Incident&apos;](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss)
* [2025-06-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss) - [Trump Proposes Huge Reduction in National Science Foundation Funding](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss)
* [2025-06-01, 05:18:00](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss) - [Gallery Showcases The Dustiest, Grimiest PCs In Germany - 400 Images Of Fascinating Horror](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss)
* [2025-06-01, 00:33:00](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss) - [China Hygon And Sugon Merge To Form Vertically Integrated Supercomputing Giant Against US Sanctions](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss)
* [2025-05-31, 19:47:00](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss) - [Overlooked Cells Might Explain The Human Brain’s Huge Storage Capacity](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss)
* [2025-05-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss) - [German Court Jails Volkswagen Execs Over Dieselgate Scandal](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss)
* [2025-05-31, 10:19:00](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss) - [Microsoft Dumps AI Into Notepad as &apos;Copilot All the Things&apos; Mania Takes Hold](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss)
* [2025-05-31, 09:20:36](https://news.ycombinator.com/item?id=44143045) - [GUIs are built at least 2.5 times](https://patricia.no/2025/05/30/why_lean_software_dev_is_wrong.html)
* [2025-05-31, 09:05:53](https://news.ycombinator.com/item?id=44142991) - [A Complete Guide to Meta Prompting](https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting)
* [2025-05-31, 07:38:30](https://news.ycombinator.com/item?id=44142652) - [Implementing a Forth](https://ratfactor.com/forth/implementing)
* [2025-05-31, 07:26:30](https://news.ycombinator.com/item?id=44142592) - [A High-Level View of TLA+](https://lamport.azurewebsites.net/tla/high-level-view.html)
* [2025-05-31, 07:20:15](https://news.ycombinator.com/item?id=44142565) - [How to Store Data on Paper?](https://www.monperrus.net/martin/store-data-paper)
* [2025-05-31, 06:43:27](https://news.ycombinator.com/item?id=44142343) - [Sid Meier&apos;s Pirates – In-depth (2017)](https://shot97retro.blogspot.com/2017/12/sid-meiers-pirates-in-depth-written.html)
* [2025-05-31, 05:37:00](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss) - [Verizon Asks Trump Admin to Destroy All Popular Phone Unlocking Requirements](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss)
* [2025-05-31, 00:49:00](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss) - [Stack Overflow&apos;s Plan to Survive the Age of AI](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss)
* [2025-05-30, 20:07:00](https://soylentnews.org/article.pl?sid=25/05/29/0642240&amp;from=rss) - [Botnet Hacks 9,000+ ASUS Routers to Add Persistent SSH Backdoor](https://soylentnews.org/article.pl?sid=25/05/29/0642240&amp;from=rss)
* [2025-05-30, 15:25:00](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss) - [Bed Bugs Are Most Likely the First Human Pest, New Research Shows](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss)
* [2025-05-30, 10:41:00](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss) - [5 Ways to Stop AI Cheating](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss)
* [2025-05-30, 05:56:00](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss) - [Lenovo Caught Out by Trump&apos;s on-Again Off-Again Tariffs](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss)
* [2025-05-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss) - [How to Stop and Disable Unwanted Services From Linux System](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss)
