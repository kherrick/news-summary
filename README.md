# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Investments and Developments

* [Oracle- $5Billion to England AI, 1.3 Billion to Make Oxford a new Silicon Valley](https://cloudindustryreview.com/oracle-unveils-5-billion-investment-in-uk-cloud-infrastructure/) - Oracle commits substantial funding to make Oxford an AI and tech hub. [Comments](https://news.ycombinator.com/item?id=45328797)

* [Meta's UK Arbitration 'Threatens to Bankrupt' Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal pressures escalate surrounding Facebook whistleblower's claims. [Comments](https://news.ycombinator.com/item?id=45328293)

* [Zig got a new ELF linker and it's fast](https://github.com/ziglang/zig/pull/25299) - A new, faster ELF linker brings significant improvements for the Zig programming language. [Comments](https://news.ycombinator.com/item?id=45327318)

* [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advancements in eco-friendly tech could reshape solar energy production. [Comments](https://news.ycombinator.com/item?id=45327617)

## Artificial Intelligence and Cybersecurity

* [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Growing concerns over AI misuse in cyberattacks. [Comments](https://news.ycombinator.com/item?id=45327135)

* [Apple Watch's New High Blood Pressure Notifications Developed With AI](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI integration leads to new health-monitoring features in wearables. [Comments](https://news.ycombinator.com/item?id=45328770)

* [Google Temporarily Pauses AI-Powered 'Homework Helper' Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's AI-powered educational tool faces criticism and temporary suspension. [Comments](https://news.ycombinator.com/item?id=45326502)

## Scientific Discoveries and Innovations

* [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new celestial body in Earth's orbit broadens our understanding of quasi-moons. [Comments](https://news.ycombinator.com/item?id=45328520)

* [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Lunar resource harvesting gains momentum with potential quantum computing breakthroughs. [Comments](https://news.ycombinator.com/item?id=45324321)

* [40k-Year-Old Symbols in Caves Worldwide May Be the Earliest Written Language](https://www.openculture.com/2025/09/40000-year-old-symbols-found-in-caves-worldwide-may-be-the-earliest-written-language.html) - Archaeological findings suggest ancient symbols predate known written languages. [Comments](https://news.ycombinator.com/item?id=45324516)

## Open Source Innovations and Software Developments

* [Sj.h: A tiny little JSON parsing library in ~150 lines of C99](https://github.com/rxi/sj.h) - A minimalist approach to JSON parsing for C developers. [Comments](https://news.ycombinator.com/item?id=45324349)

* [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/) - Git's integration of Rust marks support for safer, more efficient programming practices. [Comments](https://news.ycombinator.com/item?id=45325319)

* [Microsoft put me on a list after DXGI debugging](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/) - A developer's surprising experience with Microsoft's troubleshooting protocols. [Comments](https://news.ycombinator.com/item?id=45323481)

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

* [2025-09-22, 03:20:21](https://news.ycombinator.com/item?id=45328797) - [Oracle- $5Billion to England AI, 1.3 Billion to Make Oxford a new Silicon Valley](https://cloudindustryreview.com/oracle-unveils-5-billion-investment-in-uk-cloud-infrastructure/)
* [2025-09-22, 02:32:07](https://news.ycombinator.com/item?id=45328579) - [South Korea&apos;s President says US investment demands would spark financial crisis](https://www.cnbc.com/2025/09/21/south-koreas-president-lee-trump-investment-financial-crisis.html)
* [2025-09-22, 02:24:50](https://news.ycombinator.com/item?id=45328537) - [DSM Disorders Disappear in Statistical Clustering of Psychiatric Symptoms](https://www.psychiatrymargins.com/p/traditional-dsm-disorders-dissolve?r=2wyot6&amp;triedRedirect=true)
* [2025-09-22, 02:04:44](https://lobste.rs/s/jjqdal/multikernel_architecture_proposed_for) - [Multikernel architecture proposed for Linux](https://www.osnews.com/story/143398/multikernel-architecture-proposed-for-linux/)
* [2025-09-22, 02:00:09](https://news.ycombinator.com/item?id=45328404) - [Fs-code – PyFilesystems for Gitlab, GitHub, and Git](https://danjou.gitlab.io/fs-code/dev/codefs.html)
* [2025-09-22, 01:46:37](https://news.ycombinator.com/item?id=45328335) - [Pointer Tagging in C++: The Art of Packing Bits into a Pointer](https://vectrx.substack.com/p/pointer-tagging-in-c-the-art-of-packing)
* [2025-09-22, 01:40:00](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Watch&apos;s New High Blood Pressure Notifications Developed With AI](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 01:37:35](https://news.ycombinator.com/item?id=45328293) - [Show HN: Wan-Animate – Unified Character Animation and Replacement](https://www.wananimate.net/)
* [2025-09-22, 01:27:34](https://news.ycombinator.com/item?id=45328247) - [How I, a beginner developer, read the tutorial you, a developer, wrote for me](https://anniemueller.com/posts/how-i-a-non-developer-read-the-tutorial-you-a-developer-wrote-for-me-a-beginner)
* [2025-09-22, 01:07:37](https://lobste.rs/s/znojhz/understanding_apple_debug_info) - [Understanding Apple Debug Info](https://www.smileykeith.com/2025/09/21/understanding-apple-debug-info/)
* [2025-09-22, 00:40:00](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 23:57:54](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions) - [Are XSLT stylesheets pure functions?](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions)
* [2025-09-21, 23:55:10](https://lobste.rs/s/okecc9/free_software_commons) - [The free software commons](https://jenniferplusplus.com/the-free-software-commons/)
* [2025-09-21, 23:42:00](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why One Computer Science Professor is &apos;Feeling Cranky About AI&apos; in Education](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 22:56:31](https://news.ycombinator.com/item?id=45327417) - [Why is Venus hell and Earth an Eden?](https://www.quantamagazine.org/why-is-venus-hell-and-earth-an-eden-20250915/)
* [2025-09-21, 22:40:28](https://news.ycombinator.com/item?id=45327318) - [Zig got a new ELF linker and it&apos;s fast](https://github.com/ziglang/zig/pull/25299)
* [2025-09-21, 22:20:16](https://news.ycombinator.com/item?id=45327199) - [How can I influence others without manipulating them?](https://andiroberts.com/leadership-questions/how-to-influence-others-without-manipulating)
* [2025-09-21, 21:59:12](https://news.ycombinator.com/item?id=45327059) - [My new Git utility `what-changed-twice` needs a new name](https://blog.plover.com/2025/09/21/#what-changed-twice)
* [2025-09-21, 21:19:47](https://news.ycombinator.com/item?id=45326754) - [Show HN: Tips to stay safe from NPM supply chain attacks](https://github.com/bodadotsh/npm-security-best-practices)
* [2025-09-21, 21:18:14](https://news.ycombinator.com/item?id=45326740) - [Lightweight, highly accurate line and paragraph detection](https://arxiv.org/abs/2203.09638)
* [2025-09-21, 21:17:00](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 21:11:57](https://news.ycombinator.com/item?id=45326690) - [Procedural Island Generation (VI)](https://brashandplucky.com/2025/09/28/procedural-island-generation-vi.html)
* [2025-09-21, 20:46:37](https://lobste.rs/s/9nofxo/apple_silicon_gpu_support_mojo) - [Apple Silicon GPU support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
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
* [2025-09-21, 15:58:01](https://lobste.rs/s/rvhyxm/microstacks_megadependencies_over_at) - [Microstacks or megadependencies over at Webdevcon 2025](https://berthub.eu/articles/posts/microstacks-or-megadependencies-webdev/)
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
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 20:58:20](https://news.ycombinator.com/item?id=45294934) - [RCA VideoDisc&apos;s Legacy: Scanning Capacitance Microscope](https://spectrum.ieee.org/rca-videodisc)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:43:34](https://news.ycombinator.com/item?id=45293438) - [Calculator Forensics (2002)](https://www.rskey.org/~mwsebastian/miscprj/results.htm)
* [2025-09-18, 16:59:50](https://news.ycombinator.com/item?id=45292084) - [How Isaac Newton discovered the binomial power series (2022)](https://www.quantamagazine.org/how-isaac-newton-discovered-the-binomial-power-series-20220831/)
* [2025-09-18, 15:09:50](https://news.ycombinator.com/item?id=45290636) - [Discovering new solutions to century-old problems in fluid dynamics](https://deepmind.google/discover/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/)
* [2025-09-18, 15:05:12](https://news.ycombinator.com/item?id=45290590) - [Show HN: I wrote an OS in 1000 lines of Zig](https://github.com/botirk38/OS-1000-lines-zig)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 12:22:38](https://news.ycombinator.com/item?id=45288739) - [Obsidian Note Codes](https://ezhik.jp/obsidian/note-codes/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 07:27:22](https://news.ycombinator.com/item?id=45286622) - [40k-Year-Old Symbols in Caves Worldwide May Be the Earliest Written Language](https://www.openculture.com/2025/09/40000-year-old-symbols-found-in-caves-worldwide-may-be-the-earliest-written-language.html)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:53:03](https://news.ycombinator.com/item?id=45285562) - [INapGPU: Text-mode graphics card, using only TTL gates](https://github.com/Leoneq/iNapGPU)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
