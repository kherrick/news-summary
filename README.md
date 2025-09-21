# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Cybersecurity

* [Microstacks or megadependencies over at Webdevcon 2025](https://berthub.eu/articles/posts/microstacks-or-megadependencies-webdev/) explores the trade-offs between microstacks and large dependencies in software development. [Comments](https://lobste.rs/s/rvhyxm/microstacks_megadependencies_over_at)

* [Secure Software Supply Chains, Urges Former Go Lead Russ Cox](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&utm_medium=feed) emphasizes the importance of strengthening software supply chains. [Comments](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [12 Git commands visualized in 3D: a spatial approach to understanding version control](https://www.youtube.com/watch?v=C2aFC8wFp2A) provides an innovative visual learning approach. [Comments](https://lobste.rs/s/zggulg/12_git_commands_visualized_3d_spatial)

* [Disk Utility still can't check and repair APFS volumes and containers](https://eclecticlight.co/2021/11/19/disk-utility-still-cant-check-and-repair-apfs-volumes-and-containers/) highlights unresolved issues in APFS technology. [Comments](https://news.ycombinator.com/item?id=45322623)

* [Shai-Hulud, The Most Dangerous NPM Breach In History Affecting CrowdStrike and Hundreds of Popular Packages](https://www.koi.security/incident/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor) uncovers the most impactful npm security breach to date. [Comments](https://lobste.rs/s/rgfgku/shai_hulud_most_dangerous_npm_breach)

## Innovation and Breakthroughs

* [New thermoelectric cooling breakthrough nearly doubles efficiency](https://www.sciencedaily.com/releases/2025/09/250919085242.htm) showcases advances in cooling technology. [Comments](https://news.ycombinator.com/item?id=45323187)

* [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1) introduces groundbreaking CAD-focused AI. [Comments](https://news.ycombinator.com/item?id=45319876)

* [Beyond Sandbox Domains: Rendering Untrusted Web Content with SafeContentFrame](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe) advances secure web content handling. [Comments](https://lobste.rs/s/sbib09/beyond_sandbox_domains_rendering)

## AI and Machine Learning

* [Google Temporarily Pauses AI-Powered 'Homework Helper' Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) addresses ethical implications of AI in education. [Comments](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI was supposed to help juniors shine. why does it mostly make seniors stronger?](https://elma.dev/notes/ai-makes-seniors-stronger/) examines unintended organizational impacts of AI tools. [Comments](https://news.ycombinator.com/item?id=45319062)

* [Hacking with AI SASTs: An overview of ‘AI Security Engineers’ / ‘LLM Security Scanners’ for Penetration Testers and Security Teams](https://joshua.hu/llm-engineer-review-sast-security-ai-tools-pentesters) explores the role of AI in security testing. [Comments](https://lobste.rs/s/vmilfm/hacking_with_ai_sasts_overview_ai)

## Cultural and Historical Insights

* [They Thought They Were Free (1955)](https://press.uchicago.edu/Misc/Chicago/511928.html) offers a timeless reflection on societal behaviors. [Comments](https://news.ycombinator.com/item?id=45321663)

* [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss) celebrates a pivotal moment in browser history. [Comments](https://soylentnews.org/article.pl?sid=25/09/20/0338224&from=rss)

* [Knitted Anatomy](https://www.knitted-anatomy.at/cardiovascular-system/) combines medical insights with art. [Comments](https://news.ycombinator.com/item?id=45277052)

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

* [2025-09-21, 15:58:01](https://lobste.rs/s/rvhyxm/microstacks_megadependencies_over_at) - [Microstacks or megadependencies over at Webdevcon 2025](https://berthub.eu/articles/posts/microstacks-or-megadependencies-webdev/)
* [2025-09-21, 15:34:00](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Software Supply Chains, Urges Former Go Lead Russ Cox](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:55:20](https://news.ycombinator.com/item?id=45323297) - [How to Stop Functional Programming](https://brianmckenna.org/blog/howtostopfp)
* [2025-09-21, 14:43:31](https://lobste.rs/s/olnyhu/dxgi_debugging_microsoft_put_me_on_list) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:43:21](https://news.ycombinator.com/item?id=45323187) - [New thermoelectric cooling breakthrough nearly doubles efficiency](https://www.sciencedaily.com/releases/2025/09/250919085242.htm)
* [2025-09-21, 14:41:34](https://lobste.rs/s/pulpod/i_once_appeared_old_new_thing) - [I Once Appeared in The Old New Thing](https://mtlynch.io/my-old-new-thing-cameo/)
* [2025-09-21, 14:34:00](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Boomtown Seattle Grapples with Fewer Tech Jobs](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:24:09](https://news.ycombinator.com/item?id=45323008) - [UUIDv7 in Postgres 18. With time extraction](https://www.thenile.dev/blog/uuidv7)
* [2025-09-21, 14:20:29](https://lobste.rs/s/ew1w3m/ephemeral_win11_testing_vm_for_few_bucks) - [Ephemeral Win11 testing VM for a few bucks per month](https://paretosecurity.com/blog/ephemeral-win11-testing-vm-for-a-few-bucks-per-month/)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 13:37:13](https://news.ycombinator.com/item?id=45322623) - [Disk Utility still can&apos;t check and repair APFS volumes and containers](https://eclecticlight.co/2021/11/19/disk-utility-still-cant-check-and-repair-apfs-volumes-and-containers/)
* [2025-09-21, 13:11:33](https://lobste.rs/s/zggulg/12_git_commands_visualized_3d_spatial) - [12 Git commands visualized in 3D: a spatial approach to understanding version control](https://www.youtube.com/watch?v=C2aFC8wFp2A)
* [2025-09-21, 13:10:12](https://lobste.rs/s/mxdujp/not_robot) - [Not a Robot](https://neal.fun/not-a-robot/)
* [2025-09-21, 13:00:40](https://news.ycombinator.com/item?id=45322328) - [Sequoia: Rust OpenPGP Implementation](https://gitlab.com/sequoia-pgp/sequoia)
* [2025-09-21, 12:59:07](https://lobste.rs/s/ftfvjk/sequoia_rust_openpgp_implementation) - [Sequoia: Rust OpenPGP implementation](https://gitlab.com/sequoia-pgp/sequoia)
* [2025-09-21, 12:15:11](https://news.ycombinator.com/item?id=45322050) - [Meta exposé author faces bankruptcy after ban on criticising company](https://www.theguardian.com/technology/2025/sep/21/meta-expose-author-sarah-wynn-williams-faces-bankruptcy-after-ban-on-criticising-company)
* [2025-09-21, 11:45:23](https://lobste.rs/s/srt2xs/linkgraphs_are_fun) - [Linkgraphs are fun](https://andregarzia.com/2025/09/linkgraphs-are-fun.html)
* [2025-09-21, 11:34:00](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Sued by Law Firm Wanting to Use &apos;Steamboat Willie&apos; in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 10:56:42](https://news.ycombinator.com/item?id=45321663) - [They Thought They Were Free (1955)](https://press.uchicago.edu/Misc/Chicago/511928.html)
* [2025-09-21, 10:31:32](https://lobste.rs/s/sf1uml/my_hacking_simulator_runs_on_cyberdeck) - [My Hacking Simulator runs on a Cyberdeck](https://tiniuc.com/hacksim-on-cyberdeck/)
* [2025-09-21, 09:57:04](https://lobste.rs/s/sbib09/beyond_sandbox_domains_rendering) - [Beyond Sandbox Domains: Rendering Untrusted Web Content with SafeContentFrame](https://bughunters.google.com/blog/6715529872080896/beyond-sandbox-domains-rendering-untrusted-web-content-with-safecontentframe)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 09:02:51](https://lobste.rs/s/oenamh/less_is_safer_how_obsidian_reduces_risk) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-21, 08:57:59](https://lobste.rs/s/vmilfm/hacking_with_ai_sasts_overview_ai) - [Hacking with AI SASTs: An overview of ‘AI Security Engineers’ / ‘LLM Security Scanners’ for Penetration Testers and Security Teams](https://joshua.hu/llm-engineer-review-sast-security-ai-tools-pentesters)
* [2025-09-21, 07:51:09](https://lobste.rs/s/ahvcd2/nixcon_2025_trip_report) - [NixCon 2025 Trip Report](https://michael.stapelberg.ch/posts/2025-09-21-nixcon-2025-trip-report/)
* [2025-09-21, 07:34:25](https://lobste.rs/s/rgfgku/shai_hulud_most_dangerous_npm_breach) - [Shai-Hulud, The Most Dangerous NPM Breach In History Affecting CrowdStrike and Hundreds of Popular Packages](https://www.koi.security/incident/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor)
* [2025-09-21, 07:34:00](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitches Humiliated Zuck in Smart Glasses Launch. Meta CTO Explains What Happened](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 06:01:49](https://news.ycombinator.com/item?id=45320431) - [Vibe coding cleanup as a service](https://donado.co/en/articles/2025-09-16-vibe-coding-cleanup-as-a-service/)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:46:07](https://news.ycombinator.com/item?id=45319876) - [Spectral Labs releases SGS-1: the first generative model for structured CAD](https://www.spectrallabs.ai/research/SGS-1)
* [2025-09-21, 03:44:00](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PIRG, Other Groups Criticize Microsoft&apos;s Plan to Discontinue Support for Windows 10](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 03:35:19](https://lobste.rs/s/xttzhv/9_things_every_fresh_graduate_should_know) - [9 Things Every Fresh Graduate Should Know About Software Performance](https://johnnysswlab.com/9-things-every-fresh-graduate-should-know-about-software-performance/)
* [2025-09-21, 03:09:47](https://news.ycombinator.com/item?id=45319690) - [iFixit iPhone Air teardown](https://www.ifixit.com/News/113171/iphone-air-teardown)
* [2025-09-21, 02:09:43](https://news.ycombinator.com/item?id=45319399) - [The bloat of edge-case first libraries](https://43081j.com/2025/09/bloat-of-edge-case-libraries)
* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 00:56:59](https://news.ycombinator.com/item?id=45319062) - [AI was supposed to help juniors shine. why does it mostly make seniors stronger?](https://elma.dev/notes/ai-makes-seniors-stronger/)
* [2025-09-21, 00:06:38](https://news.ycombinator.com/item?id=45318798) - [In defence of swap: common misconceptions (2018)](https://chrisdown.name/2018/01/02/in-defence-of-swap.html)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 22:22:00](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [6,000 Evacuated During Defusing of American WWII Bomb Found Buried in Hong Kong](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:22:00](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Delays Flights at Several of Europe&apos;s Major Airports](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:05:14](https://lobste.rs/s/fffvzx/brief_history_threads_threading) - [A brief history of threads and threading](https://eclecticlight.co/2025/09/20/a-brief-history-of-threads-and-threading/)
* [2025-09-20, 21:04:47](https://news.ycombinator.com/item?id=45317527) - [$2 WeAct Display FS adds a 0.96-inch USB information display to your computer](https://www.cnx-software.com/2025/09/18/2-weact-display-fs-adds-a-0-96-inch-usb-information-display-to-your-computer/)
* [2025-09-20, 20:46:01](https://lobste.rs/s/a8ey4q/napkin_project) - [The Napkin project](https://web.evanchen.cc/napkin.html)
* [2025-09-20, 19:50:00](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doomed &apos;Cannibal&apos; Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 19:37:21](https://lobste.rs/s/lin8d0/self_reliant_programmer_manifesto) - [self-reliant programmer manifesto](https://yobibyte.github.io/self_reliant_programmer.html)
* [2025-09-20, 19:06:03](https://lobste.rs/s/ihggth/tv_time_machine_raspberry_pi_plays_random) - [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 18:50:00](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Isn&apos;t an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:34:00](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike&apos;s](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:25:58](https://news.ycombinator.com/item?id=45315312) - [Designing NotebookLM](https://jasonspielman.com/notebooklm)
* [2025-09-20, 16:34:00](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C++ Committee Prioritizes &apos;Profiles&apos; Over Rust-Style Safety Model Proposal](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 16:12:56](https://news.ycombinator.com/item?id=45314592) - [Ultrasonic Chef&apos;s Knife](https://seattleultrasonics.com/)
* [2025-09-20, 15:34:00](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Links Microplastic Exposure to Alzheimer&apos;s Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:34:00](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI&apos;s  Video-Generating Tool &apos;Sora&apos; Scraping Unauthorized YouTube Clips?](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:20:56](https://lobste.rs/s/8kj7sz/protect_your_keys_with_secure_enclave) - [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html)
* [2025-09-20, 11:20:04](https://news.ycombinator.com/item?id=45312326) - [FLX1s phone is launched](https://furilabs.com/flx1s-is-launched/)
* [2025-09-20, 10:55:53](https://news.ycombinator.com/item?id=45312202) - [Writing a competitive BZip2 encoder in Ada from scratch in a few days – part 3](https://gautiersblog.blogspot.com/2025/09/writing-competitive-bzip2-encoder-in.html)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
* [2025-09-20, 01:26:12](https://lobste.rs/s/js25k9/is_zig_s_new_writer_unsafe) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 00:13:22](https://news.ycombinator.com/item?id=45296550) - [Bluefin LTS Is Released](https://docs.projectbluefin.io/blog/bluefin-lts-ga/)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:12:58](https://news.ycombinator.com/item?id=45293012) - [MapSCII – World map in terminal](https://github.com/rastapasta/mapscii)
* [2025-09-18, 18:05:58](https://news.ycombinator.com/item?id=45292915) - [Lidar, optical distance and time of flight sensors](https://ams-osram.com/innovation/technology/depth-and-3d-sensing/lidar-optical-distance-and-time-of-flight-sensors)
* [2025-09-18, 17:24:22](https://news.ycombinator.com/item?id=45292404) - [Newton for Ladies (1737) – Newtonianism vs. Cartesianism](https://www.whipplelib.hps.cam.ac.uk/special/exhibitions-and-displays/exhibitions-archive/newton-and-newtonianism/ladies)
* [2025-09-18, 14:45:01](https://news.ycombinator.com/item?id=45290358) - [Hi No Youjin](https://aethermug.com/posts/hi-no-youjin)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:04:27](https://news.ycombinator.com/item?id=45289150) - [Teardown of Apple 40W dynamic power adapter with 60W max](https://www.chargerlab.com/teardown-of-apple-40w-dynamic-power-adapter-with-60w-max-a3365/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:22:39](https://news.ycombinator.com/item?id=45287474) - [Scream cipher](https://sethmlarson.dev/scream-cipher)
* [2025-09-18, 06:43:41](https://news.ycombinator.com/item?id=45286302) - [Gluco data handler: Receive and visualize glucose data on Android](https://github.com/pachi81/GlucoDataHandler)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:26:41](https://news.ycombinator.com/item?id=45285387) - [Why, as a responsible adult, SimCity 2000 hits differently](https://arstechnica.com/gaming/2025/09/thirty-years-later-simcity-2000-hasnt-changed-but-i-have/)
* [2025-09-18, 01:07:26](https://news.ycombinator.com/item?id=45283637) - [Learning Languages with the Help of Algorithms](https://www.johndcook.com/blog/2025/09/17/learning-languages-with-the-help-of-algorithms/)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 15:30:51](https://news.ycombinator.com/item?id=45277052) - [Knitted Anatomy](https://www.knitted-anatomy.at/cardiovascular-system/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
