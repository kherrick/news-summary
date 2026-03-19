# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations in Artificial Intelligence and Technology

* [Pardoned Nikola Fraudster Is Raising Funds For AI-Powered Planes He Claims Will Reshape Aviation](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial entrepreneur previously convicted of fraud claims to be back with an ambitious plan to revolutionize aviation using AI-powered planes.

* [What 81,000 people want from AI](https://www.anthropic.com/features/81k-interviews) - A fascinating exploration of public opinions on artificial intelligence, featuring insights from 81,000 interviews.

* [Mozilla to launch free built-in VPN in upcoming Firefox 149](https://cyberinsider.com/mozilla-to-launch-free-built-in-vpn-in-upcoming-firefox-149/) - Mozilla ventures into the VPN market with plans to introduce a free, integrated VPN service in their upcoming browser update.

* [UK Plans To Require Labels On AI-Generated Content](https://news.slashdot.org/story/26/03/18/1846248/uk-plans-to-require-labels-on-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The United Kingdom proposes rules to label AI-generated content, emphasizing transparency in media and art creation.

* [Nvidia Announces Vera Rubin Space-1 Chip System For Orbital AI Data Centers](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia reveals a cutting-edge chip system geared towards orbital data centers powered by AI, named after the astronomer Vera Rubin.

## Cybersecurity and Privacy Developments

* [CVE-2026-3888: Snap Flaw, Local Privilege Escalation to Root](https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root) - A critical vulnerability in Snap could allow attackers to gain root access on affected systems, prompting security concerns.

* [FBI Is Buying Location Data To Track US Citizens, Director Confirms](https://yro.slashdot.org/story/26/03/18/217205/fbi-is-buying-location-data-to-track-us-citizens-director-confirms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The FBI director confirms the controversial practice of purchasing location data for surveillance purposes.

* [Meta Is Shutting Down VR Social Platform Horizon Worlds](https://meta.slashdot.org/story/26/03/18/1757218/meta-is-shutting-down-vr-social-platform-horizon-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta discontinues its VR social platform, signaling shifts in its strategy amid broader metaverse challenges.

## Programming and Development Insights

* [No Semicolons Needed](https://terts.dev/blog/no-semicolons-needed/) - An argument for the simplicity and readability of omitting semicolons in coding, illustrated through practical examples.

* [Data is Code (2016)](https://haskellforall.com/2016/04/data-is-code) - An exploration into the idea of treating data as inherently equivalent to code.

* [Rob Pike's 5 Rules of Programming](https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html) - A classic set of programming principles by Rob Pike, highly relevant for developers of all levels.

## Science and Research

* [Experiments Show Potatoes Can Survive In Lunar Solar (With Lots of Help)](https://science.slashdot.org/story/26/03/17/2314232/experiments-show-potatoes-can-survive-in-lunar-solar-with-lots-of-help?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research demonstrates the challenges and possibilities of growing potatoes in extraterrestrial environments.

* [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&from=rss) - Fascinating findings on the mechanisms and potential of reactivating lost memories in human brains.

## Historical and Cultural Insights

* [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&from=rss) - A retrospective on the technological innovations behind the iconic 80×24 display and its broader impact.

* [Celebrating Tony Hoare's mark on computer science](https://bertrandmeyer.com/2026/03/16/celebrating-tony-hoares-mark-on-computer-science/) - A tribute to Tony Hoare's contributions to computer science and the lasting legacy of his innovations.

* [Czech Man's Stone in Barn's Foundations Is Rare Bronze Age Spearhead Mold](https://www.smithsonianmag.com/smart-news/a-czech-man-used-this-stone-in-his-barns-foundations-it-turned-out-to-be-rare-bronze-age-spearhead-mold-180988339/) - Discovery of a prehistoric Bronze Age artifact repurposed as a building material shines light on human ingenuity.

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

* [2026-03-19, 07:00:00](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pardoned Nikola Fraudster Is Raising Funds For AI-Powered Planes He Claims Will Reshape Aviation](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 06:47:52](https://news.ycombinator.com/item?id=47435782) - [Ask HN: What do you look for in your first 10 hires?](https://news.ycombinator.com/item?id=47435782)
* [2026-03-19, 05:00:56](https://news.ycombinator.com/item?id=47435156) - [What 81,000 people want from AI](https://www.anthropic.com/features/81k-interviews)
* [2026-03-19, 04:41:45](https://lobste.rs/s/09wmcz/no_semicolons_needed) - [No Semicolons Needed](https://terts.dev/blog/no-semicolons-needed/)
* [2026-03-19, 03:55:03](https://news.ycombinator.com/item?id=47434732) - [Conway&apos;s Game of Life, in real life](https://lcamtuf.substack.com/p/conways-game-of-life-in-real-life)
* [2026-03-19, 03:47:25](https://lobste.rs/s/oeqmbx/data_is_code_2016) - [Data is Code (2016)](https://haskellforall.com/2016/04/data-is-code)
* [2026-03-19, 03:31:01](https://news.ycombinator.com/item?id=47434567) - [Mozilla to launch free built-in VPN in upcoming Firefox 149](https://cyberinsider.com/mozilla-to-launch-free-built-in-vpn-in-upcoming-firefox-149/)
* [2026-03-19, 03:30:00](https://yro.slashdot.org/story/26/03/18/217205/fbi-is-buying-location-data-to-track-us-citizens-director-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Is Buying Location Data To Track US Citizens, Director Confirms](https://yro.slashdot.org/story/26/03/18/217205/fbi-is-buying-location-data-to-track-us-citizens-director-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-19, 02:56:11](https://lobste.rs/s/ccys1t/cve_2026_3888_snap_flaw_local_privilege) - [CVE-2026-3888: Snap Flaw, Local Privilege Escalation to Root](https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root)
* [2026-03-19, 02:53:37](https://news.ycombinator.com/item?id=47434311) - [We Have Learned Nothing](https://colossus.com/article/we-have-learned-nothing-startup-pundits/)
* [2026-03-19, 02:23:17](https://news.ycombinator.com/item?id=47434047) - [A sufficiently detailed spec is code](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code)
* [2026-03-19, 02:20:34](https://news.ycombinator.com/item?id=47434024) - [Cook: A simple CLI for orchestrating Claude Code](https://rjcorwin.github.io/cook/)
* [2026-03-19, 00:40:32](https://news.ycombinator.com/item?id=47433265) - [Autoresearch for SAT Solvers](https://github.com/iliazintchenko/agent-sat)
* [2026-03-19, 00:15:39](https://news.ycombinator.com/item?id=47433058) - [Austin’s surge of new housing construction drove down rents](https://www.pew.org/en/research-and-analysis/articles/2026/03/18/austins-surge-of-new-housing-construction-drove-down-rents)
* [2026-03-18, 23:58:05](https://news.ycombinator.com/item?id=47432915) - [RX – a new random-access JSON alternative](https://github.com/creationix/rx)
* [2026-03-18, 23:29:12](https://lobste.rs/s/tioyif/very_lightweight_nixos_router_server) - [Very lightweight NixOS router/server flow data collector](https://discourse.nixos.org/t/very-lightweight-nixos-router-server-flow-data-collector/76309)
* [2026-03-18, 23:03:30](https://lobste.rs/s/vuk8lc/nvidia_greenboost_transparently_extend) - [Nvidia greenboost: transparently extend GPU VRAM using system RAM/NVMe](https://gitlab.com/IsolatedOctopi/nvidia_greenboost)
* [2026-03-18, 23:00:00](https://yro.slashdot.org/story/26/03/18/2059236/cloudflare-appeals-piracy-shield-fine-hopes-to-kill-italys-site-blocking-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Appeals Piracy Shield Fine, Hopes To Kill Italy&apos;s Site-Blocking Law](https://yro.slashdot.org/story/26/03/18/2059236/cloudflare-appeals-piracy-shield-fine-hopes-to-kill-italys-site-blocking-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 22:00:00](https://tech.slashdot.org/story/26/03/18/2042233/google-is-trying-to-make-vibe-design-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Trying To Make &apos;Vibe Design&apos; Happen](https://tech.slashdot.org/story/26/03/18/2042233/google-is-trying-to-make-vibe-design-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 21:57:58](https://news.ycombinator.com/item?id=47431930) - [What’s on HTTP?](https://whatsonhttp.com/)
* [2026-03-18, 21:29:51](https://lobste.rs/s/5ebeb4/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers (update)](https://dacav.org/projects/supercazzola/)
* [2026-03-18, 21:00:00](https://it.slashdot.org/story/26/03/18/2020255/new-windows-11-bug-breaks-samsung-pcs-blocking-access-to-c-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Windows 11 Bug Breaks Samsung PCs, Blocking Access To C: Drive](https://it.slashdot.org/story/26/03/18/2020255/new-windows-11-bug-breaks-samsung-pcs-blocking-access-to-c-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 20:45:54](https://news.ycombinator.com/item?id=47431237) - [Warranty Void If Regenerated](https://nearzero.software/p/warranty-void-if-regenerated)
* [2026-03-18, 20:00:00](https://news.slashdot.org/story/26/03/18/1846248/uk-plans-to-require-labels-on-ai-generated-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Plans To Require Labels On AI-Generated Content](https://news.slashdot.org/story/26/03/18/1846248/uk-plans-to-require-labels-on-ai-generated-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 19:53:19](https://lobste.rs/s/ywrcll/java_26_is_here_with_it_solid_foundation) - [Java 26 Is Here, And With It a Solid Foundation for the Future](https://hanno.codes/2026/03/17/java-26-is-here/)
* [2026-03-18, 19:01:54](https://news.ycombinator.com/item?id=47429988) - [Show HN: Playing LongTurn FreeCiv with Friends](https://github.com/ndroo/freeciv.andrewmcgrath.info)
* [2026-03-18, 19:00:00](https://meta.slashdot.org/story/26/03/18/1757218/meta-is-shutting-down-vr-social-platform-horizon-worlds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Shutting Down VR Social Platform Horizon Worlds](https://meta.slashdot.org/story/26/03/18/1757218/meta-is-shutting-down-vr-social-platform-horizon-worlds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 18:00:00](https://news.slashdot.org/story/26/03/18/1629217/saas-apocalypse-could-be-opensources-greatest-opportunity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SaaS Apocalypse Could Be OpenSource&apos;s Greatest Opportunity](https://news.slashdot.org/story/26/03/18/1629217/saas-apocalypse-could-be-opensources-greatest-opportunity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 17:29:21](https://news.ycombinator.com/item?id=47428650) - [Show HN: Will my flight have Starlink?](https://news.ycombinator.com/item?id=47428650)
* [2026-03-18, 17:00:00](https://slashdot.org/story/26/03/18/1620247/2026-turing-award-goes-to-inventors-of-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2026 Turing Award Goes To Inventors of Quantum Cryptography](https://slashdot.org/story/26/03/18/1620247/2026-turing-award-goes-to-inventors-of-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 16:54:40](https://lobste.rs/s/qleyyk/writing_consistent_tools_2019) - [Writing Consistent Tools (2019)](https://www.netmeister.org/blog/consistent-tools.html)
* [2026-03-18, 16:40:29](https://lobste.rs/s/xvmquo/how_kernel_anti_cheats_work_deep_dive_into) - [How Kernel Anti-Cheats Work: A Deep Dive into Modern Game Protection](https://s4dbrd.github.io/posts/how-kernel-anti-cheats-work/)
* [2026-03-18, 16:37:32](https://lobste.rs/s/ith92s/radicle_1_7_0_daffodil) - [Radicle 1.7.0 – Daffodil](https://radicle.xyz/2026/03/18/radicle-1.7.0)
* [2026-03-18, 16:13:42](https://lobste.rs/s/hoarih/gnome_50_released) - [GNOME 50 released](https://release.gnome.org/50/)
* [2026-03-18, 16:00:00](https://yro.slashdot.org/story/26/03/18/1452232/federal-cyber-experts-called-microsofts-cloud-a-pile-of-shit-yet-approved-it-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Federal Cyber Experts Called Microsoft&apos;s Cloud &apos;a Pile of Shit&apos;, Yet Approved It Anyway](https://yro.slashdot.org/story/26/03/18/1452232/federal-cyber-experts-called-microsofts-cloud-a-pile-of-shit-yet-approved-it-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 15:53:18](https://lobste.rs/s/fbyvmx/go_home_windows_exe_you_re_drunk) - [Go Home, Windows EXE, You&apos;re Drunk](https://gpfault.net/posts/drunk-exe.html)
* [2026-03-18, 15:50:44](https://news.ycombinator.com/item?id=47427299) - [Show HN: I built 48 lightweight SVG backgrounds you can copy/paste](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)
* [2026-03-18, 15:44:05](https://lobste.rs/s/2tspe2/beam_metrics_clickhouse) - [BEAM Metrics in ClickHouse](https://andrealeopardi.com/posts/beam-metrics-in-clickhouse/)
* [2026-03-18, 15:43:19](https://news.ycombinator.com/item?id=47427208) - [CVE-2026-3888: Important Snap Flaw Enables Local Privilege Escalation to Root](https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root)
* [2026-03-18, 15:33:14](https://lobste.rs/s/rpeiwl/accessing_hardware_rust) - [Accessing Hardware in Rust](https://ferrous-systems.com/blog/hardware-access-rust/)
* [2026-03-18, 15:31:07](https://news.ycombinator.com/item?id=47427027) - [Nvidia NemoClaw](https://github.com/NVIDIA/NemoClaw)
* [2026-03-18, 15:16:13](https://lobste.rs/s/raomjk/beyond_hypermodern_python_is_easy_now) - [Beyond Hypermodern: Python is easy now](https://rdrn.me/postmodern-python/)
* [2026-03-18, 15:00:00](https://yro.slashdot.org/story/26/03/17/2321225/apple-can-delist-apps-with-or-without-cause-judge-says-in-loss-for-musi-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Can Delist Apps &apos;With Or Without Cause,&apos; Judge Says In Loss For Musi App](https://yro.slashdot.org/story/26/03/17/2321225/apple-can-delist-apps-with-or-without-cause-judge-says-in-loss-for-musi-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 13:29:14](https://lobste.rs/s/9keraw/rob_pike_s_5_rules_programming) - [Rob Pike&apos;s 5 Rules of Programming](https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html)
* [2026-03-18, 13:04:47](https://lobste.rs/s/tr5qdg/celebrating_tony_hoare_s_mark_on_computer) - [Celebrating Tony Hoare&apos;s mark on computer science](https://bertrandmeyer.com/2026/03/16/celebrating-tony-hoares-mark-on-computer-science/)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 12:54:27](https://lobste.rs/s/h6ai7b/seeing_types_where_others_don_t) - [Seeing types where others don&apos;t](https://theconsensus.dev/p/2026/03/06/seeing-types-where-others-dont.html)
* [2026-03-18, 11:00:00](https://science.slashdot.org/story/26/03/17/2314232/experiments-show-potatoes-can-survive-in-lunar-solar-with-lots-of-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experiments Show Potatoes Can Survive In Lunar Solar (With Lots of Help)](https://science.slashdot.org/story/26/03/17/2314232/experiments-show-potatoes-can-survive-in-lunar-solar-with-lots-of-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 10:49:19](https://news.ycombinator.com/item?id=47423976) - [OpenAI Has New Focus (on the IPO)](https://om.co/2026/03/17/openai-has-new-focus-on-the-ipo/)
* [2026-03-18, 09:59:54](https://news.ycombinator.com/item?id=47423647) - [Rob Pike’s Rules of Programming (1989)](https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html)
* [2026-03-18, 08:54:47](https://lobste.rs/s/uxqiub/self_host_tech_independence_joy_building) - [Self-Host and Tech Independence: The Joy of Building Your Own](https://www.ssp.sh/blog/self-host-self-independence/)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 07:43:13](https://news.ycombinator.com/item?id=47422759) - [Wander – A tiny, decentralised tool to explore the small web](https://susam.net/wander/)
* [2026-03-18, 07:23:38](https://lobste.rs/s/hjipba/wander_tiny_decentralised_tool_just_2) - [Wander – A tiny, decentralised tool (just 2 files) to explore the small web](https://susam.net/wander/)
* [2026-03-18, 07:00:00](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Announces Vera Rubin Space-1 Chip System For Orbital AI Data Centers](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 04:53:55](https://lobste.rs/s/dsi02i/ai_assassinating_intelligence) - [AI - Assassinating Intelligence](https://yashgarg.dev/posts/ai-slop/)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-18, 03:30:00](https://tech.slashdot.org/story/26/03/17/2243219/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Job Loss Research Ignores How AI Is Utterly Destroying the Internet](https://tech.slashdot.org/story/26/03/17/2243219/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 02:41:12](https://lobste.rs/s/j5m4fq/most_important_software_innovations) - [The Most Important Software Innovations (2021)](https://dwheeler.com/innovation/innovation.html)
* [2026-03-17, 23:00:00](https://yro.slashdot.org/story/26/03/17/2154229/arizona-charges-kalshi-with-illegal-gambling-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona Charges Kalshi With Illegal Gambling Operation](https://yro.slashdot.org/story/26/03/17/2154229/arizona-charges-kalshi-with-illegal-gambling-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 17:08:16](https://lobste.rs/s/nvlqyc/python_3_15_s_jit_is_now_back_on_track) - [Python 3.15’s JIT is now back on track](https://fidget-spinner.github.io/posts/jit-on-track.html)
* [2026-03-17, 14:17:56](https://lobste.rs/s/nlyezv/sufficiently_detailed_spec_is_code) - [A sufficiently detailed spec is code](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 10:53:54](https://lobste.rs/s/3hojx1/age_gating_isn_t_about_kids_it_s_about) - [Age-Gating Isn’t About Kids, It’s About Control](https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 16:51:32](https://news.ycombinator.com/item?id=47401489) - [The math that explains why bell curves are everywhere](https://www.quantamagazine.org/the-math-that-explains-why-bell-curves-are-everywhere-20260316/)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 12:06:32](https://news.ycombinator.com/item?id=47397862) - [Czech Man&apos;s Stone in Barn&apos;s Foundations Is Rare Bronze Age Spearhead Mold](https://www.smithsonianmag.com/smart-news/a-czech-man-used-this-stone-in-his-barns-foundations-it-turned-out-to-be-rare-bronze-age-spearhead-mold-180988339/)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 08:51:10](https://news.ycombinator.com/item?id=47396496) - [Show HN: Browser grand strategy game for hundreds of players on huge maps](https://borderhold.io/play)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
* [2026-03-15, 23:35:00](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss) - [How Much Sleep Do Teens Get? Six-Seven Hours](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss)
* [2026-03-15, 18:51:00](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss) - [AI Medical Advice - Both Sides](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss)
* [2026-03-15, 15:59:09](https://news.ycombinator.com/item?id=47388658) - [Nvidia greenboost: transparently extend GPU VRAM using system RAM/NVMe](https://gitlab.com/IsolatedOctopi/nvidia_greenboost)
* [2026-03-15, 14:00:00](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss) - [New Study Challenges Notion That Aging Means Decline, Finds Many Older Adults Improve Over Time](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss)
* [2026-03-15, 13:57:24](https://news.ycombinator.com/item?id=47387431) - [An x86-64 back end for raven-uxn](https://www.mattkeeter.com/blog/2026-03-15-uxn/)
* [2026-03-15, 12:20:14](https://news.ycombinator.com/item?id=47386703) - [OpenRocket](https://openrocket.info/)
* [2026-03-15, 09:20:00](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss) - [OpenAI Wants Everyone To Have A Monthly AI Bill](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss)
* [2026-03-15, 08:40:59](https://news.ycombinator.com/item?id=47385439) - [LotusNotes](https://computer.rip/2026-03-14-lotusnotes.html)
* [2026-03-15, 04:37:00](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss) - [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss)
* [2026-03-15, 00:56:43](https://news.ycombinator.com/item?id=47383103) - [Show HN: Pano, a bookmarking tool built around shareable shelves](https://www.panoit.com)
