# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovation and Advancements

* [Apple Watch's New High Blood Pressure Notifications Developed With AI](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A remarkable development integrating artificial intelligence into Apple Watch for monitoring and alerting high blood pressure issues.

* [Zig got a new ELF linker and it’s fast](https://github.com/ziglang/zig/pull/25299) - The Zig programming language receives a significant performance boost with a new ELF linker.

* [Unified Line and Paragraph Detection by Graph Convolutional Networks (2022)](https://arxiv.org/abs/2503.05136) - Leveraging graph convolutional networks, this research achieves highly accurate detection of text structure.

## Space and Astronomical Findings

* [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronomers uncover a previously unidentified quasi-moon orbiting near Earth.

## AI and Ethical Challenges

* [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring the vulnerabilities introduced by artificial intelligence tools in cybersecurity.

* [Why One Computer Science Professor is 'Feeling Cranky About AI' in Education](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critical perspective on the impact of AI in academia and educational practices.

## Environmental and Renewable Innovations

* [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists create an innovative and sustainable UV coating using red onion skins to enhance solar panel durability.

## Software and Programming Insights

* [Storing Unwise Amounts of Data in JavaScript Bigints](https://jonathan-frere.com/posts/bigints-are-cool/) - A detailed exploration of unconventional data storage techniques using JavaScript Bigints.

* [Show HN: Freeing GPUs stuck by runaway jobs](https://github.com/kagehq/gpu-kill) - A utility designed to recover GPUs caught in runaway job loops.

## Major Tech Policy and Industry Updates

* [Meta's UK Arbitration 'Threatens to Bankrupt' Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Facebook whistleblower's lawyer alleges potential bankruptcy risk stemming from company arbitration disputes with Meta.

* [EU to block Big Tech from new financial data sharing system](https://www.ft.com/content/6596876f-c831-482c-878c-78c1499ef543) - The European Union takes steps to restrict financial data sharing endeavors by major technology companies.

## Space Exploration and Defense

* [America's Space Force is Preparing for a New Kind of War](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. Space Force looks into novel methods of engaging in warfare beyond Earth's boundaries.

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

* [2025-09-22, 01:40:00](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Watch&apos;s New High Blood Pressure Notifications Developed With AI](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 01:07:37](https://lobste.rs/s/znojhz/understanding_apple_debug_info) - [Understanding Apple Debug Info](https://www.smileykeith.com/2025/09/21/understanding-apple-debug-info/)
* [2025-09-22, 00:40:00](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 23:57:54](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions) - [Are XSLT stylesheets pure functions?](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions)
* [2025-09-21, 23:55:10](https://lobste.rs/s/okecc9/free_software_commons) - [The free software commons](https://jenniferplusplus.com/the-free-software-commons/)
* [2025-09-21, 23:42:00](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why One Computer Science Professor is &apos;Feeling Cranky About AI&apos; in Education](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 23:16:08](https://news.ycombinator.com/item?id=45327531) - [Be Careful with Go Struct Embedding](https://mattjhall.co.uk/posts/be-careful-with-go-struct-embedding.html)
* [2025-09-21, 22:54:10](https://news.ycombinator.com/item?id=45327399) - [EU to block Big Tech from new financial data sharing system](https://www.ft.com/content/6596876f-c831-482c-878c-78c1499ef543)
* [2025-09-21, 22:40:28](https://news.ycombinator.com/item?id=45327318) - [Zig got a new ELF linker and it&apos;s fast](https://github.com/ziglang/zig/pull/25299)
* [2025-09-21, 22:20:16](https://news.ycombinator.com/item?id=45327199) - [How can I influence others without manipulating them?](https://andiroberts.com/leadership-questions/how-to-influence-others-without-manipulating)
* [2025-09-21, 21:59:12](https://news.ycombinator.com/item?id=45327059) - [My new Git utility `what-changed-twice` needs a new name](https://blog.plover.com/2025/09/21/#what-changed-twice)
* [2025-09-21, 21:56:37](https://lobste.rs/s/hgcjod/kernel_security_wild_side_channel) - [Kernel Security in the Wild: Side-Channel-Assisted Exploit Techniques, Kernel-Level Defenses, and Real-World Analysis](https://tugraz.elsevierpure.com/ws/portalfiles/portal/98775241/main.pdf)
* [2025-09-21, 21:19:47](https://news.ycombinator.com/item?id=45326754) - [Show HN: Tips to stay safe from NPM supply chain attacks](https://github.com/bodadotsh/npm-security-best-practices)
* [2025-09-21, 21:18:14](https://news.ycombinator.com/item?id=45326740) - [Lightweight, highly accurate line and paragraph detection](https://arxiv.org/abs/2203.09638)
* [2025-09-21, 21:17:00](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 21:11:57](https://news.ycombinator.com/item?id=45326690) - [Procedural Island Generation (VI)](https://brashandplucky.com/2025/09/28/procedural-island-generation-vi.html)
* [2025-09-21, 20:46:37](https://lobste.rs/s/9nofxo/apple_silicon_gpu_support_mojo) - [Apple Silicon GPU support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
* [2025-09-21, 20:35:14](https://news.ycombinator.com/item?id=45326388) - [Apple Silicon GPU Support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
* [2025-09-21, 20:17:00](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 19:40:09](https://lobste.rs/s/4xtjt9/parsing_crusader_kings_iii_data_files) - [Parsing Crusader Kings III data files to generate mods](https://wheybags.com/blog/ck3mods.html)
* [2025-09-21, 19:17:00](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s UK Arbitration &apos;Threatens to Bankrupt&apos; Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 18:56:26](https://lobste.rs/s/acbjyb/storing_unwise_amounts_data_javascript) - [Storing Unwise Amounts of Data in JavaScript Bigints](https://jonathan-frere.com/posts/bigints-are-cool/)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 18:37:04](https://news.ycombinator.com/item?id=45325410) - [Bringing Observability to Claude Code: OpenTelemetry in Action](https://signoz.io/blog/claude-code-monitoring-with-opentelemetry/)
* [2025-09-21, 18:17:00](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Space Force is Preparing for a New Kind of War](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:43:45](https://news.ycombinator.com/item?id=45324349) - [Sj.h: A tiny little JSON parsing library in ~150 lines of C99](https://github.com/rxi/sj.h)
* [2025-09-21, 16:43:19](https://news.ycombinator.com/item?id=45324343) - [Timesketch: Collaborative forensic timeline analysis](https://github.com/google/timesketch)
* [2025-09-21, 16:34:00](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Google AI Workers Were Fired Amid Fight Over Working Conditions](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:29:15](https://lobste.rs/s/0lwolc/ts_ignore_is_almost_always_worst_option) - [@ts-ignore is almost always the worst option](https://evanhahn.com/ts-ignore-is-almost-always-the-worst-option/)
* [2025-09-21, 16:10:09](https://lobste.rs/s/0wyas7/simulator_significantly_inspired_by) - [A simulator significantly inspired by the first commercial transistor computer, the Metrovick 950](https://git.sr.ht/~nkali/mv950toy)
* [2025-09-21, 16:00:06](https://news.ycombinator.com/item?id=45323875) - [Show HN: Freeing GPUs stuck by runaway jobs](https://github.com/kagehq/gpu-kill)
* [2025-09-21, 15:58:01](https://lobste.rs/s/rvhyxm/microstacks_megadependencies_over_at) - [Microstacks or megadependencies over at Webdevcon 2025](https://berthub.eu/articles/posts/microstacks-or-megadependencies-webdev/)
* [2025-09-21, 15:57:49](https://news.ycombinator.com/item?id=45323856) - [LaLiga&apos;s Anti-Piracy Crackdown Triggers Widespread Internet Disruptions in Spain](https://reclaimthenet.org/laligas-anti-piracy-crackdown-triggers-widespread-internet-disruptions)
* [2025-09-21, 15:51:03](https://news.ycombinator.com/item?id=45323793) - [Oxford loses top 3 university ranking in the UK](https://hotminute.co.uk/2025/09/19/oxford-loses-top-3-university-ranking-for-the-first-time/)
* [2025-09-21, 15:34:00](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Software Supply Chains, Urges Former Go Lead Russ Cox](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:45:50](https://news.ycombinator.com/item?id=45323207) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:43:31](https://lobste.rs/s/olnyhu/dxgi_debugging_microsoft_put_me_on_list) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:41:34](https://lobste.rs/s/pulpod/i_once_appeared_old_new_thing) - [I Once Appeared in The Old New Thing](https://mtlynch.io/my-old-new-thing-cameo/)
* [2025-09-21, 14:34:00](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Boomtown Seattle Grapples with Fewer Tech Jobs](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:26:10](https://news.ycombinator.com/item?id=45323027) - [Unified Line and Paragraph Detection by Graph Convolutional Networks (2022)](https://arxiv.org/abs/2503.05136)
* [2025-09-21, 14:20:29](https://lobste.rs/s/ew1w3m/ephemeral_win11_testing_vm_for_few_bucks) - [Ephemeral Win11 testing VM for a few bucks per month](https://paretosecurity.com/blog/ephemeral-win11-testing-vm-for-a-few-bucks-per-month/)
* [2025-09-21, 14:00:16](https://news.ycombinator.com/item?id=45322819) - [I forced myself to spend a week in Instagram instead of Xcode](https://www.pixelpusher.club/p/i-forced-myself-to-spend-a-week-in)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 13:11:33](https://lobste.rs/s/zggulg/12_git_commands_visualized_3d_spatial) - [12 Git commands visualized in 3D: a spatial approach to understanding version control](https://www.youtube.com/watch?v=C2aFC8wFp2A)
* [2025-09-21, 13:10:12](https://lobste.rs/s/mxdujp/not_robot) - [Not a Robot](https://neal.fun/not-a-robot/)
* [2025-09-21, 12:59:07](https://lobste.rs/s/ftfvjk/sequoia_rust_openpgp_implementation) - [Sequoia: Rust OpenPGP implementation](https://gitlab.com/sequoia-pgp/sequoia)
* [2025-09-21, 12:31:57](https://news.ycombinator.com/item?id=45322135) - [Why your outdoorsy friend suddenly has a gummy bear power bank](https://www.theverge.com/tech/781387/backpacking-ultralight-haribo-power-bank)
* [2025-09-21, 11:45:23](https://lobste.rs/s/srt2xs/linkgraphs_are_fun) - [Linkgraphs are fun](https://andregarzia.com/2025/09/linkgraphs-are-fun.html)
* [2025-09-21, 11:34:00](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Sued by Law Firm Wanting to Use &apos;Steamboat Willie&apos; in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 10:31:32](https://lobste.rs/s/sf1uml/my_hacking_simulator_runs_on_cyberdeck) - [My Hacking Simulator runs on a Cyberdeck](https://tiniuc.com/hacksim-on-cyberdeck/)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 09:02:51](https://lobste.rs/s/oenamh/less_is_safer_how_obsidian_reduces_risk) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-21, 08:57:59](https://lobste.rs/s/vmilfm/hacking_with_ai_sasts_overview_ai) - [Hacking with AI SASTs: An overview of ‘AI Security Engineers’ / ‘LLM Security Scanners’ for Penetration Testers and Security Teams](https://joshua.hu/llm-engineer-review-sast-security-ai-tools-pentesters)
* [2025-09-21, 07:51:09](https://lobste.rs/s/ahvcd2/nixcon_2025_trip_report) - [NixCon 2025 Trip Report](https://michael.stapelberg.ch/posts/2025-09-21-nixcon-2025-trip-report/)
* [2025-09-21, 07:34:00](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitches Humiliated Zuck in Smart Glasses Launch. Meta CTO Explains What Happened](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:44:00](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PIRG, Other Groups Criticize Microsoft&apos;s Plan to Discontinue Support for Windows 10](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 03:35:19](https://lobste.rs/s/xttzhv/9_things_every_fresh_graduate_should_know) - [9 Things Every Fresh Graduate Should Know About Software Performance](https://johnnysswlab.com/9-things-every-fresh-graduate-should-know-about-software-performance/)
* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 20:46:01](https://lobste.rs/s/a8ey4q/napkin_project) - [The Napkin project](https://web.evanchen.cc/napkin.html)
* [2025-09-20, 19:37:21](https://lobste.rs/s/lin8d0/self_reliant_programmer_manifesto) - [self-reliant programmer manifesto](https://yobibyte.github.io/self_reliant_programmer.html)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 11:19:37](https://news.ycombinator.com/item?id=45312323) - [Node 20 will be deprecated on GitHub Actions runners](https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 07:52:48](https://news.ycombinator.com/item?id=45311360) - [The Counterclockwise Experiment](https://domofutu.substack.com/p/the-counterclockwise-experiment)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 21:59:54](https://news.ycombinator.com/item?id=45295538) - [A coin flip by any other name (2023)](https://cgad.ski/blog/a-coin-flip-by-any-other-name.html)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:43:34](https://news.ycombinator.com/item?id=45293438) - [Calculator Forensics (2002)](https://www.rskey.org/~mwsebastian/miscprj/results.htm)
* [2025-09-18, 16:59:50](https://news.ycombinator.com/item?id=45292084) - [How Isaac Newton discovered the binomial power series (2022)](https://www.quantamagazine.org/how-isaac-newton-discovered-the-binomial-power-series-20220831/)
* [2025-09-18, 16:58:58](https://news.ycombinator.com/item?id=45292066) - [First Ultrasonic Chef&apos;s Knife Vibrates 40,000X/Second for Easy Cutting](https://www.cnet.com/home/kitchen-and-household/worlds-first-ultrasonic-chefs-knife-vibrates-40000-times-per-second-for-easy-cutting/)
* [2025-09-18, 15:09:50](https://news.ycombinator.com/item?id=45290636) - [Discovering new solutions to century-old problems in fluid dynamics](https://deepmind.google/discover/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/)
* [2025-09-18, 15:05:12](https://news.ycombinator.com/item?id=45290590) - [Show HN: I wrote an OS in 1000 lines of Zig](https://github.com/botirk38/OS-1000-lines-zig)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 14:05:17](https://news.ycombinator.com/item?id=45289862) - [Model Flop Utilization Beyond 6ND](https://jott.live/markdown/mfu)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 07:27:22](https://news.ycombinator.com/item?id=45286622) - [40k-Year-Old Symbols in Caves Worldwide May Be the Earliest Written Language](https://www.openculture.com/2025/09/40000-year-old-symbols-found-in-caves-worldwide-may-be-the-earliest-written-language.html)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:53:03](https://news.ycombinator.com/item?id=45285562) - [INapGPU: Text-mode graphics card, using only TTL gates](https://github.com/Leoneq/iNapGPU)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
