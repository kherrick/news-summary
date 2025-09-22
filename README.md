# [News Summary](https://kherrick.github.io/news-summary/)

## Technology & Software Developments

* [The story of Musium](https://ruudvanasseldonk.com/2025/musium) describes the creation and evolution of a minimalist photo viewer. [Comments](https://lobste.rs/s/lzig6j/story_musium)

* [Cloudflare: A New Internet Business Model](https://blog.cloudflare.com/cloudflare-2025-annual-founders-letter/) explores the company's changing approaches to internet services. [Comments](https://news.ycombinator.com/item?id=45334599)

* [PlanetScale announces PlanetScale for Postgres is GA](https://planetscale.com/blog/planetscale-for-postgres-is-generally-available) brings Postgres compatibility to a popular database platform. [Comments](https://news.ycombinator.com/item?id=45334545)

* [Cap'n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/) introduces a groundbreaking RPC framework optimized for JavaScript and interoperability. [Comments](https://news.ycombinator.com/item?id=45332883)

## Open Source and Legacy Insights

* [A long look at NetBSD 10.1](https://distrowatch.com/weekly-mobile.php?issue=20250922#netbsd) examines the new features and performance of this open-source operating system. [Comments](https://lobste.rs/s/pfv1tv/long_look_at_netbsd_10_1)

* [Tips for Working with Legacy Code](https://www.esveo.com/en/blog/tips-for-working-with-legacy-code/) provides strategies to navigate and refactor old codebases effectively. [Comments](https://lobste.rs/s/bkupu6/tips_for_working_with_legacy_code)

## Academic & Theoretical Exploration

* [What is algebraic about algebraic effects?](https://interjectedfuture.com/what-is-algebraic-about-algebraic-effects/) delves into the theoretical underpinnings of programming effects. [Comments](https://news.ycombinator.com/item?id=45333978)

* [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors) critiques the usage of YAML anchors in configuration files. [Comments](https://news.ycombinator.com/item?id=45334032)

## AI and Cybersecurity Innovations

* [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) describes emerging AI technologies for healthcare predictions. [Comments](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)

* [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses concerns over malicious uses of AI. [Comments](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Astronomy and Space Exploration

* [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reveals a surprising celestial discovery close to Earth. [Comments](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-09-22, 15:50:53](https://lobste.rs/s/lzig6j/story_musium) - [The story of Musium](https://ruudvanasseldonk.com/2025/musium)
* [2025-09-22, 15:14:27](https://news.ycombinator.com/item?id=45334599) - [Cloudflare: A New Internet Business Model](https://blog.cloudflare.com/cloudflare-2025-annual-founders-letter/)
* [2025-09-22, 15:10:48](https://news.ycombinator.com/item?id=45334545) - [PlanetScale announces PlanetScale for Postgres is GA](https://planetscale.com/blog/planetscale-for-postgres-is-generally-available)
* [2025-09-22, 15:03:58](https://news.ycombinator.com/item?id=45334467) - [Anti-*: The Things We Do but Not All the Way](https://blog.jim-nielsen.com/2025/my-antis/)
* [2025-09-22, 14:51:33](https://lobste.rs/s/pfv1tv/long_look_at_netbsd_10_1) - [A long look at NetBSD 10.1](https://distrowatch.com/weekly-mobile.php?issue=20250922#netbsd)
* [2025-09-22, 14:49:16](https://news.ycombinator.com/item?id=45334250) - [A Simple Way to Measure Knots Has Come Unraveled](https://www.quantamagazine.org/a-simple-way-to-measure-knots-has-come-unraveled-20250922/)
* [2025-09-22, 14:34:11](https://news.ycombinator.com/item?id=45334032) - [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors)
* [2025-09-22, 14:33:31](https://lobste.rs/s/pbwybg/dear_github_no_yaml_anchors_please) - [Dear GitHub: no YAML anchors, please](https://blog.yossarian.net/2025/09/22/dear-github-no-yaml-anchors)
* [2025-09-22, 14:30:10](https://news.ycombinator.com/item?id=45333978) - [What is algebraic about algebraic effects?](https://interjectedfuture.com/what-is-algebraic-about-algebraic-effects/)
* [2025-09-22, 14:16:18](https://lobste.rs/s/oaxcep/cloudflare_is_sponsoring_ladybird) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 14:00:01](https://lobste.rs/s/bkupu6/tips_for_working_with_legacy_code) - [Tips for Working with Legacy Code](https://www.esveo.com/en/blog/tips-for-working-with-legacy-code/)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 13:31:33](https://lobste.rs/s/y7cieb/cap_n_web_new_rpc_system_for_browsers_web) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:29:33](https://news.ycombinator.com/item?id=45333190) - [What if we treated Postgres like SQLite?](https://www.maragu.dev/blog/what-if-we-treated-postgres-like-sqlite)
* [2025-09-22, 13:17:59](https://news.ycombinator.com/item?id=45333021) - [Why Local-First Apps Haven&apos;t Become Popular?](https://marcobambini.substack.com/p/why-local-first-apps-havent-become)
* [2025-09-22, 13:06:10](https://lobste.rs/s/xbmvou/why_i_m_spoiled_by_apple_silicon_still_love) - [Why I&apos;m Spoiled By Apple Silicon (But Still Love Framework)](https://simonhartcher.com/posts/2025-09-22-why-im-spoiled-by-apple-silicon-but-still-love-framework/)
* [2025-09-22, 13:05:32](https://news.ycombinator.com/item?id=45332883) - [Cap&apos;n Web: a new RPC system for browsers and web servers](https://blog.cloudflare.com/capnweb-javascript-rpc-library/)
* [2025-09-22, 13:03:33](https://news.ycombinator.com/item?id=45332860) - [Cloudflare is sponsoring Ladybird and Omarchy](https://blog.cloudflare.com/supporting-the-future-of-the-open-web/)
* [2025-09-22, 12:59:30](https://news.ycombinator.com/item?id=45332814) - [CompileBench: Can AI Compile 22-year-old Code?](https://quesma.com/blog/introducing-compilebench/)
* [2025-09-22, 12:20:32](https://news.ycombinator.com/item?id=45332400) - [DeepSeek-v3.1-Terminus](https://api-docs.deepseek.com/news/news250922)
* [2025-09-22, 11:52:41](https://news.ycombinator.com/item?id=45332130) - [Easy Forth](https://skilldrick.github.io/easyforth/)
* [2025-09-22, 10:20:43](https://news.ycombinator.com/item?id=45331370) - [Kmart&apos;s use of facial recognition to tackle refund fraud unlawful](https://www.oaic.gov.au/news/media-centre/18-kmarts-use-of-facial-recognition-to-tackle-refund-fraud-unlawful,-privacy-commissioner-finds)
* [2025-09-22, 09:59:48](https://lobste.rs/s/zxxdp0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/zxxdp0/what_are_you_doing_this_week)
* [2025-09-22, 09:37:12](https://news.ycombinator.com/item?id=45331030) - [Beyond the Front Page: A Personal Guide to Hacker News](https://hsu.cy/2025/09/how-to-read-hn/)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 08:03:59](https://news.ycombinator.com/item?id=45330407) - [SGI demos from long ago in the browser via WASM](https://github.com/sgi-demos)
* [2025-09-22, 07:59:37](https://news.ycombinator.com/item?id=45330378) - [You did this with an AI and you do not understand what you&apos;re doing here](https://hackerone.com/reports/3340109)
* [2025-09-22, 07:52:53](https://lobste.rs/s/d82moa/kernel_introduce_multikernel) - [kernel: Introduce multikernel architecture support](https://lore.kernel.org/lkml/20250918222607.186488-1-xiyou.wangcong@gmail.com/)
* [2025-09-22, 07:35:43](https://news.ycombinator.com/item?id=45330198) - [Show HN: Software Freelancers Contract Template](https://sopimusgeneraattori.ohjelmistofriikit.fi/?lang=en)
* [2025-09-22, 07:32:06](https://lobste.rs/s/avhvwl/under_hood_vec_t) - [Under the hood: Vec&lt;T&gt;](https://marma.dev/articles/2025/under-the-hood-vec-t)
* [2025-09-22, 06:02:45](https://lobste.rs/s/trvolm/linux_kernel_runtime_guard_lkrg_1_0) - [Linux Kernel Runtime Guard (LKRG) 1.0](https://www.openwall.com/presentations/NullconBerlin2025-LKRG/)
* [2025-09-22, 04:50:57](https://lobste.rs/s/xy5d4l/japanese_forth_inspired_postfix) - [第四: a Japanese and Forth inspired postfix language](https://gist.github.com/typeswitch-dev/ac86d7e32167c1e5bf311c796cedc1a8)
* [2025-09-22, 04:35:27](https://news.ycombinator.com/item?id=45329127) - [Privacy and Security Risks in the eSIM Ecosystem [pdf]](https://www.usenix.org/system/files/usenixsecurity25-motallebighomi.pdf)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-22, 02:04:44](https://lobste.rs/s/jjqdal/multikernel_architecture_proposed_for) - [Multikernel architecture proposed for Linux](https://www.osnews.com/story/143398/multikernel-architecture-proposed-for-linux/)
* [2025-09-22, 01:40:00](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Watch&apos;s New High Blood Pressure Notifications Developed With AI](https://apple.slashdot.org/story/25/09/22/0119208/apple-watchs-new-high-blood-pressure-notifications-developed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 01:27:34](https://news.ycombinator.com/item?id=45328247) - [How I, a beginner developer, read the tutorial you, a developer, wrote for me](https://anniemueller.com/posts/how-i-a-non-developer-read-the-tutorial-you-a-developer-wrote-for-me-a-beginner)
* [2025-09-22, 00:40:00](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Previously Unknown Quasi-Moon Near Earth](https://science.slashdot.org/story/25/09/22/0034204/astronomers-discover-previously-unknown-quasi-moon-near-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-22, 00:31:06](https://news.ycombinator.com/item?id=45327964) - [We Politely Insist: Your LLM Must Learn the Persian Art of Taarof](https://arxiv.org/abs/2509.01035)
* [2025-09-21, 23:57:54](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions) - [Are XSLT stylesheets pure functions?](https://lobste.rs/s/altuop/are_xslt_stylesheets_pure_functions)
* [2025-09-21, 23:55:10](https://lobste.rs/s/okecc9/free_software_commons) - [The free software commons](https://jenniferplusplus.com/the-free-software-commons/)
* [2025-09-21, 23:42:00](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why One Computer Science Professor is &apos;Feeling Cranky About AI&apos; in Education](https://news.slashdot.org/story/25/09/21/2331240/why-one-computer-science-professor-is-feeling-cranky-about-ai-in-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 23:06:42](https://news.ycombinator.com/item?id=45327478) - [Biconnected components](https://emi-h.com/articles/bcc.html)
* [2025-09-21, 22:56:31](https://news.ycombinator.com/item?id=45327417) - [Why is Venus hell and Earth an Eden?](https://www.quantamagazine.org/why-is-venus-hell-and-earth-an-eden-20250915/)
* [2025-09-21, 22:20:16](https://news.ycombinator.com/item?id=45327199) - [How can I influence others without manipulating them?](https://andiroberts.com/leadership-questions/how-to-influence-others-without-manipulating)
* [2025-09-21, 21:17:00](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tools Give Dangerous Powers to Cyberattackers, Security Researchers Warn](https://yro.slashdot.org/story/25/09/21/2022257/ai-tools-give-dangerous-powers-to-cyberattackers-security-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 20:46:37](https://lobste.rs/s/9nofxo/apple_silicon_gpu_support_mojo) - [Apple Silicon GPU support in Mojo](https://forum.modular.com/t/apple-silicon-gpu-support-in-mojo/2295)
* [2025-09-21, 20:17:00](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Durable UV Coating For Solar Panels Made From Red Onion Skins](https://news.slashdot.org/story/25/09/21/1942234/more-durable-uv-coating-for-solar-panels-made-from-red-onion-skins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 19:40:09](https://lobste.rs/s/4xtjt9/parsing_crusader_kings_iii_data_files) - [Parsing Crusader Kings III data files to generate mods](https://wheybags.com/blog/ck3mods.html)
* [2025-09-21, 19:17:00](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s UK Arbitration &apos;Threatens to Bankrupt&apos; Facebook Whistleblower, Says Her Lawyer](https://tech.slashdot.org/story/25/09/21/195215/metas-uk-arbitration-threatens-to-bankrupt-facebook-whistleblower-says-her-lawyer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 18:56:26](https://lobste.rs/s/acbjyb/storing_unwise_amounts_data_javascript) - [Storing Unwise Amounts of Data in JavaScript Bigints](https://jonathan-frere.com/posts/bigints-are-cool/)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 18:17:00](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Space Force is Preparing for a New Kind of War](https://news.slashdot.org/story/25/09/21/1815235/americas-space-force-is-preparing-for-a-new-kind-of-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:34:00](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Google AI Workers Were Fired Amid Fight Over Working Conditions](https://tech.slashdot.org/story/25/09/20/2338214/hundreds-of-google-ai-workers-were-fired-amid-fight-over-working-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 16:29:15](https://lobste.rs/s/0lwolc/ts_ignore_is_almost_always_worst_option) - [@ts-ignore is almost always the worst option](https://evanhahn.com/ts-ignore-is-almost-always-the-worst-option/)
* [2025-09-21, 15:34:00](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Software Supply Chains, Urges Former Go Lead Russ Cox](https://developers.slashdot.org/story/25/09/21/0650219/secure-software-supply-chains-urges-former-go-lead-russ-cox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 14:43:31](https://lobste.rs/s/olnyhu/dxgi_debugging_microsoft_put_me_on_list) - [DXGI debugging: Microsoft put me on a list](https://slugcat.systems/post/25-09-21-dxgi-debugging-microsoft-put-me-on-a-list/)
* [2025-09-21, 14:41:34](https://lobste.rs/s/pulpod/i_once_appeared_old_new_thing) - [I Once Appeared in The Old New Thing](https://mtlynch.io/my-old-new-thing-cameo/)
* [2025-09-21, 14:34:00](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Boomtown Seattle Grapples with Fewer Tech Jobs](https://it.slashdot.org/story/25/09/21/0744258/tech-boomtown-seattle-grapples-with-fewer-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 13:10:12](https://lobste.rs/s/mxdujp/not_robot) - [Not a Robot](https://neal.fun/not-a-robot/)
* [2025-09-21, 11:34:00](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Sued by Law Firm Wanting to Use &apos;Steamboat Willie&apos; in Its Ads](https://yro.slashdot.org/story/25/09/21/0550202/disney-sued-by-law-firm-wanting-to-use-steamboat-willie-in-its-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 10:31:32](https://lobste.rs/s/sf1uml/my_hacking_simulator_runs_on_cyberdeck) - [My Hacking Simulator runs on a Cyberdeck](https://tiniuc.com/hacksim-on-cyberdeck/)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 09:02:51](https://lobste.rs/s/oenamh/less_is_safer_how_obsidian_reduces_risk) - [Less is safer: how Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-21, 07:51:09](https://lobste.rs/s/ahvcd2/nixcon_2025_trip_report) - [NixCon 2025 Trip Report](https://michael.stapelberg.ch/posts/2025-09-21-nixcon-2025-trip-report/)
* [2025-09-21, 07:34:00](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitches Humiliated Zuck in Smart Glasses Launch. Meta CTO Explains What Happened](https://tech.slashdot.org/story/25/09/21/023248/glitches-humiliated-zuck-in-smart-glasses-launch-meta-cto-explains-what-happened?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
* [2025-09-21, 03:44:00](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PIRG, Other Groups Criticize Microsoft&apos;s Plan to Discontinue Support for Windows 10](https://tech.slashdot.org/story/25/09/21/0056225/pirg-other-groups-criticize-microsofts-plan-to-discontinue-support-for-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 09:12:08](https://news.ycombinator.com/item?id=45311705) - [A Beautiful Maths Game](https://sinerider.com/)
* [2025-09-20, 07:52:48](https://news.ycombinator.com/item?id=45311360) - [The Counterclockwise Experiment](https://domofutu.substack.com/p/the-counterclockwise-experiment)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 20:37:30](https://news.ycombinator.com/item?id=45294711) - [What if AMD FX had \&quot;real\&quot; cores? [video]](https://www.youtube.com/watch?v=Lb4FDtAwnqU)
* [2025-09-18, 20:03:58](https://news.ycombinator.com/item?id=45294297) - [Simulating a Machine from the 80s](https://rmazur.io/blog/fahivets.html)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 17:22:43](https://news.ycombinator.com/item?id=45292387) - [A Generalized Algebraic Theory of Directed Equality](https://jacobneu.phd/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:21:35](https://news.ycombinator.com/item?id=45289370) - [The death rays that guard life](https://worksinprogress.co/issue/the-death-rays-that-guard-life/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
