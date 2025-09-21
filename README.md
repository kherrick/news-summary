# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI tools may enable advanced cyberattacks, raising global security concerns.

* [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers create innovative solar panel coatings using onion skins, potentially increasing their durability.

* [New thermoelectric cooling breakthrough nearly doubles efficiency](https://www.sciencedaily.com/releases/2025/09/250919085242.htm) - Scientists develop a cooling technology that significantly boosts energy efficiency.

* [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1) - This groundbreaking AI tool may transform computer-aided design in various industries.

* [12 Git commands visualized in 3D: a spatial approach to understanding version control](https://www.youtube.com/watch?v=C2aFC8wFp2A) - A creative 3D visualization simplifies complex Git concepts for developers.

## Society and Transportation

* [Rail travel is booming in America](https://www.economist.com/united-states/2025/09/21/rail-travel-is-booming-in-america) - The U.S. witnesses a revival in rail travel as an efficient and eco-friendly transportation option.

* [LaLiga's Anti-Piracy Crackdown Triggers Widespread Internet Disruptions in Spain](https://reclaimthenet.org/laligas-anti-piracy-crackdown-triggers-widespread-internet-disruptions) - Anti-piracy measures lead to significant disruptions for Spanish internet users.

## Space, Science, and Exploration

* [America's Space Force is Preparing for a New Kind of War](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. Space Force shifts focus to counter current space-based threats.

* [Doomed 'Cannibal' Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronomers predict a rare supernova explosion visible in daylight.

## Corporate Actions and Controversies

* [Meta's UK Arbitration 'Threatens to Bankrupt' Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - High-stakes legal dispute sparks concerns over whistleblower protections.

* [Disney Sued by Law Firm Wanting to Use 'Steamboat Willie' in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Disney faces a legal challenge regarding its iconic character, Steamboat Willie.

## Software and Engineering Highlights

* [Apple Silicon GPU Support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295) - Mojo extends support for Apple Silicon GPUs, enhancing functionality and compatibility.

* [@ts-ignore is almost always the worst option](https://evanhahn.com/ts-ignore-is-almost-always-the-worst-option/) - Insights into better practices for enhancing TypeScript code safety.

* [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/) - Obsidian employs minimalist principles to mitigate potential supply-chain vulnerabilities.

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

* [2025-09-21, 21:17:00](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 20:46:37](https://lobste.rs/s/9nofxo/apple_silicon_gpu_support_mojo) - [Apple Silicon GPU support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
* [2025-09-21, 20:35:14](https://news.ycombinator.com/item?id=45326388) - [Apple Silicon GPU Support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
* [2025-09-21, 20:17:00](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 20:12:21](https://news.ycombinator.com/item?id=45326230) - [Rail travel is booming in America](https://www.economist.com/united-states/2025/09/21/rail-travel-is-booming-in-america)
* [2025-09-21, 19:40:09](https://lobste.rs/s/4xtjt9/parsing_crusader_kings_iii_data_files) - [Parsing Crusader Kings III data files to generate mods](https://wheybags.com/blog/ck3mods.html)
* [2025-09-21, 19:17:00](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s UK Arbitration &apos;Threatens to Bankrupt&apos; Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 18:56:26](https://lobste.rs/s/acbjyb/storing_unwise_amounts_data_javascript) - [Storing Unwise Amounts of Data in JavaScript Bigints](https://jonathan-frere.com/posts/bigints-are-cool/)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 18:17:00](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Space Force is Preparing for a New Kind of War](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:45:06](https://news.ycombinator.com/item?id=45324365) - [The link between trauma, drug use, and our search to feel better](https://lithub.com/the-link-between-trauma-drug-use-and-our-search-to-feel-better/)
* [2025-09-21, 16:43:45](https://news.ycombinator.com/item?id=45324349) - [Sj.h: A tiny little JSON parsing library in ~150 lines of C99](https://github.com/rxi/sj.h)
* [2025-09-21, 16:43:19](https://news.ycombinator.com/item?id=45324343) - [Timesketch: Collaborative forensic timeline analysis](https://github.com/google/timesketch)
* [2025-09-21, 16:34:00](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Google AI Workers Were Fired Amid Fight Over Working Conditions](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:29:15](https://lobste.rs/s/0lwolc/ts_ignore_is_almost_always_worst_option) - [@ts-ignore is almost always the worst option](https://evanhahn.com/ts-ignore-is-almost-always-the-worst-option/)
* [2025-09-21, 16:10:09](https://lobste.rs/s/0wyas7/simulator_significantly_inspired_by) - [A simulator significantly inspired by the first commercial transistor computer, the Metrovick 950](https://git.sr.ht/~nkali/mv950toy)
* [2025-09-21, 16:00:06](https://news.ycombinator.com/item?id=45323875) - [Show HN: Freeing GPUs stuck by runaway jobs](https://github.com/kagehq/gpu-kill)
* [2025-09-21, 15:58:01](https://lobste.rs/s/rvhyxm/microstacks_megadependencies_over_at) - [Microstacks or megadependencies over at Webdevcon 2025](https://berthub.eu/articles/posts/microstacks-or-megadependencies-webdev/)
* [2025-09-21, 15:57:49](https://news.ycombinator.com/item?id=45323856) - [LaLiga&apos;s Anti-Piracy Crackdown Triggers Widespread Internet Disruptions in Spain](https://reclaimthenet.org/laligas-anti-piracy-crackdown-triggers-widespread-internet-disruptions)
* [2025-09-21, 15:51:03](https://news.ycombinator.com/item?id=45323793) - [The University of Oxford has fallen out of the top three universities in the UK](https://hotminute.co.uk/2025/09/19/oxford-loses-top-3-university-ranking-for-the-first-time/)
* [2025-09-21, 15:34:00](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Software Supply Chains, Urges Former Go Lead Russ Cox](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:45:50](https://news.ycombinator.com/item?id=45323207) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:43:31](https://lobste.rs/s/olnyhu/dxgi_debugging_microsoft_put_me_on_list) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:43:21](https://news.ycombinator.com/item?id=45323187) - [New thermoelectric cooling breakthrough nearly doubles efficiency](https://www.sciencedaily.com/releases/2025/09/250919085242.htm)
* [2025-09-21, 14:41:34](https://lobste.rs/s/pulpod/i_once_appeared_old_new_thing) - [I Once Appeared in The Old New Thing](https://mtlynch.io/my-old-new-thing-cameo/)
* [2025-09-21, 14:34:00](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Boomtown Seattle Grapples with Fewer Tech Jobs](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:26:10](https://news.ycombinator.com/item?id=45323027) - [The Beginner&apos;s Textbook for Homomorphic Encryption](https://arxiv.org/abs/2503.05136)
* [2025-09-21, 14:22:10](https://news.ycombinator.com/item?id=45322992) - [Extrachromosomal DNA–Driven Oncogene Evolution in Glioblastoma](https://aacrjournals.org/cancerdiscovery/article/doi/10.1158/2159-8290.CD-24-1555/764257/Extrachromosomal-DNA-Driven-Oncogene-Spatial)
* [2025-09-21, 14:20:29](https://lobste.rs/s/ew1w3m/ephemeral_win11_testing_vm_for_few_bucks) - [Ephemeral Win11 testing VM for a few bucks per month](https://paretosecurity.com/blog/ephemeral-win11-testing-vm-for-a-few-bucks-per-month/)
* [2025-09-21, 14:00:16](https://news.ycombinator.com/item?id=45322819) - [I forced myself to spend a week in Instagram instead of Xcode](https://www.pixelpusher.club/p/i-forced-myself-to-spend-a-week-in)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 13:37:13](https://news.ycombinator.com/item?id=45322623) - [Disk Utility still can&apos;t check and repair APFS volumes and containers (2021)](https://eclecticlight.co/2021/11/19/disk-utility-still-cant-check-and-repair-apfs-volumes-and-containers/)
* [2025-09-21, 13:11:33](https://lobste.rs/s/zggulg/12_git_commands_visualized_3d_spatial) - [12 Git commands visualized in 3D: a spatial approach to understanding version control](https://www.youtube.com/watch?v=C2aFC8wFp2A)
* [2025-09-21, 13:10:12](https://lobste.rs/s/mxdujp/not_robot) - [Not a Robot](https://neal.fun/not-a-robot/)
* [2025-09-21, 12:59:07](https://lobste.rs/s/ftfvjk/sequoia_rust_openpgp_implementation) - [Sequoia: Rust OpenPGP implementation](https://gitlab.com/sequoia-pgp/sequoia)
* [2025-09-21, 12:31:57](https://news.ycombinator.com/item?id=45322135) - [Why your outdoorsy friend suddenly has a gummy bear power bank](https://www.theverge.com/tech/781387/backpacking-ultralight-haribo-power-bank)
* [2025-09-21, 11:45:23](https://lobste.rs/s/srt2xs/linkgraphs_are_fun) - [Linkgraphs are fun](https://andregarzia.com/2025/09/linkgraphs-are-fun.html)
* [2025-09-21, 11:34:00](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Sued by Law Firm Wanting to Use &apos;Steamboat Willie&apos; in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 10:31:32](https://lobste.rs/s/sf1uml/my_hacking_simulator_runs_on_cyberdeck) - [My Hacking Simulator runs on a Cyberdeck](https://tiniuc.com/hacksim-on-cyberdeck/)
* [2025-09-21, 09:57:04](https://lobste.rs/s/sbib09/beyond_sandbox_domains_rendering) - [Beyond Sandbox Domains: Rendering Untrusted Web Content with SafeContentFrame](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 09:02:51](https://lobste.rs/s/oenamh/less_is_safer_how_obsidian_reduces_risk) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-21, 08:57:59](https://lobste.rs/s/vmilfm/hacking_with_ai_sasts_overview_ai) - [Hacking with AI SASTs: An overview of ‘AI Security Engineers’ / ‘LLM Security Scanners’ for Penetration Testers and Security Teams](https://joshua.hu/llm-engineer-review-sast-security-ai-tools-pentesters)
* [2025-09-21, 07:51:09](https://lobste.rs/s/ahvcd2/nixcon_2025_trip_report) - [NixCon 2025 Trip Report](https://michael.stapelberg.ch/posts/2025-09-21-nixcon-2025-trip-report/)
* [2025-09-21, 07:34:00](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitches Humiliated Zuck in Smart Glasses Launch. Meta CTO Explains What Happened](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:46:07](https://news.ycombinator.com/item?id=45319876) - [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1)
* [2025-09-21, 03:44:00](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PIRG, Other Groups Criticize Microsoft&apos;s Plan to Discontinue Support for Windows 10](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 03:35:19](https://lobste.rs/s/xttzhv/9_things_every_fresh_graduate_should_know) - [9 Things Every Fresh Graduate Should Know About Software Performance](https://johnnysswlab.com/9-things-every-fresh-graduate-should-know-about-software-performance/)
* [2025-09-21, 03:09:47](https://news.ycombinator.com/item?id=45319690) - [iFixit iPhone Air teardown](https://www.ifixit.com/News/113171/iphone-air-teardown)
* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 00:56:59](https://news.ycombinator.com/item?id=45319062) - [AI was supposed to help juniors shine. Why does it mostly make seniors stronger?](https://elma.dev/notes/ai-makes-seniors-stronger/)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 22:22:00](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [6,000 Evacuated During Defusing of American WWII Bomb Found Buried in Hong Kong](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:22:00](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Delays Flights at Several of Europe&apos;s Major Airports](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:04:47](https://news.ycombinator.com/item?id=45317527) - [$2 WeAct Display FS adds a 0.96-inch USB information display to your computer](https://www.cnx-software.com/2025/09/18/2-weact-display-fs-adds-a-0-96-inch-usb-information-display-to-your-computer/)
* [2025-09-20, 20:46:01](https://lobste.rs/s/a8ey4q/napkin_project) - [The Napkin project](https://web.evanchen.cc/napkin.html)
* [2025-09-20, 19:50:00](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doomed &apos;Cannibal&apos; Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 19:37:21](https://lobste.rs/s/lin8d0/self_reliant_programmer_manifesto) - [self-reliant programmer manifesto](https://yobibyte.github.io/self_reliant_programmer.html)
* [2025-09-20, 19:06:03](https://lobste.rs/s/ihggth/tv_time_machine_raspberry_pi_plays_random) - [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 10:55:53](https://news.ycombinator.com/item?id=45312202) - [Writing a competitive BZip2 encoder in Ada from scratch in a few days – part 3](https://gautiersblog.blogspot.com/2025/09/writing-competitive-bzip2-encoder-in.html)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 07:52:48](https://news.ycombinator.com/item?id=45311360) - [The Counterclockwise Experiment](https://domofutu.substack.com/p/the-counterclockwise-experiment)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
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
* [2025-09-18, 15:05:12](https://news.ycombinator.com/item?id=45290590) - [Show HN: I wrote an OS in 1000 lines of Zig](https://github.com/botirk38/OS-1000-lines-zig)
* [2025-09-18, 14:45:01](https://news.ycombinator.com/item?id=45290358) - [Hi No Youjin](https://aethermug.com/posts/hi-no-youjin)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:04:27](https://news.ycombinator.com/item?id=45289150) - [Teardown of Apple 40W dynamic power adapter with 60W max](https://www.chargerlab.com/teardown-of-apple-40w-dynamic-power-adapter-with-60w-max-a3365/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 07:27:22](https://news.ycombinator.com/item?id=45286622) - [40k-Year-Old Symbols in Caves Worldwide May Be the Earliest Written Language](https://www.openculture.com/2025/09/40000-year-old-symbols-found-in-caves-worldwide-may-be-the-earliest-written-language.html)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:53:03](https://news.ycombinator.com/item?id=45285562) - [INapGPU: Text-mode graphics card, using only TTL gates](https://github.com/Leoneq/iNapGPU)
* [2025-09-18, 04:26:41](https://news.ycombinator.com/item?id=45285387) - [Why, as a responsible adult, SimCity 2000 hits differently](https://arstechnica.com/gaming/2025/09/thirty-years-later-simcity-2000-hasnt-changed-but-i-have/)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
