# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Robotics Innovations

* [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A prankster has set up a virtual Super Bowl party for artificial intelligence agents, raising questions about their social interaction capabilities. [Comments](https://news.ycombinator.com/item?id=46937012)

* [Matchlock – Secures AI agent workloads with a Linux-based sandbox](https://github.com/jingkaihe/matchlock) - An open-source tool providing a secure Linux-based environment for AI agent applications. [Comments](https://news.ycombinator.com/item?id=46932343)

## Cybersecurity and Digital Privacy

* [Roundcube Webmail: SVG feImage bypasses image blocking to track email opens](https://nullcathedral.com/posts/2026-02-08-roundcube-svg-feimage-remote-image-bypass/) - Explores a technique that uses the SVG feImage filter to bypass image blocking, posing risks to email privacy. [Comments](https://news.ycombinator.com/item?id=46937012)

* [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871) - Delves into exploiting Git commit messages for code injections, highlighting risks in software development workflows. [Comments](https://news.ycombinator.com/item?id=46936315)

* [Billing can be bypassed using a combo of subagents with an agent definition](https://github.com/microsoft/vscode/issues/292452) - Explains a vulnerability in Visual Studio Code that can be exploited using subagents. [Comments](https://news.ycombinator.com/item?id=46936105)

## Technological Milestones

* [The First Sodium-Ion Battery EV Is a Winter Range Monster](https://insideevs.com/news/786509/catl-changan-worlds-first-sodium-ion-battery-ev/) - The debut of the first-ever sodium-ion battery electric vehicle demonstrates impressive performance in cold conditions. [Comments](https://news.ycombinator.com/item?id=46936315)

* [Albertsons Commits to Electric Semis](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The grocery chain adopts electric semi-trucks as part of its corporate social responsibility initiative. [Comments](https://soylentnews.org/article.pl?sid=26/02/08/0233236&amp;from=rss)

## Fascinating Discoveries

* [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers uncover traces of a previously unknown world dating back over a million years in an island cave. [Comments](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Have We Been Thinking About Exercise Wrong for Half a Century?](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores an alternative perspective on exercise that might redefine fitness regimens of the future. [Comments](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Technological Reflections

* [Is the 'Death of Reading' Narrative Wrong?](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examines claims of declining literary engagement and their validity. [Comments](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [We mourn our craft](https://nolanlawson.com/2026/02/07/we-mourn-our-craft/) - A commentary on the evolving role of craftsmanship in programming. [Comments](https://news.ycombinator.com/item?id=46926245)

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

* [2026-02-08, 18:34:00](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 18:24:26](https://news.ycombinator.com/item?id=46937012) - [Roundcube Webmail: SVG feImage bypasses image blocking to track email opens](https://nullcathedral.com/posts/2026-02-08-roundcube-svg-feimage-remote-image-bypass/)
* [2026-02-08, 18:08:56](https://lobste.rs/s/gfsl25/ai_fatigue_is_real_nobody_talks_about_it) - [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)
* [2026-02-08, 18:07:42](https://lobste.rs/s/bic9qr/rebuilding_my_home_network_with_vlans) - [Rebuilding my home network with VLANs and 10Gbps](https://clintonboys.com/projects/homelab/03-network/)
* [2026-02-08, 18:02:50](https://news.ycombinator.com/item?id=46936828) - [The Little Bool of Doom](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-08, 17:39:00](https://news.ycombinator.com/item?id=46936595) - [Bun v1.3.9](https://bun.com/blog/bun-v1.3.9)
* [2026-02-08, 17:34:00](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Is China Building So Many Coal Plants Despite Its Solar and Wind Boom?](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 17:26:15](https://lobste.rs/s/eavqzf/updates_bot_wars) - [Updates and Bot Wars](https://marisabel.nl/public/blog/Updates_and_Bot_Wars)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 17:15:52](https://lobste.rs/s/fgeokt/code_injections_through_git_commit) - [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871)
* [2026-02-08, 17:15:17](https://news.ycombinator.com/item?id=46936315) - [The First Sodium-Ion Battery EV Is a Winter Range Monster](https://insideevs.com/news/786509/catl-changan-worlds-first-sodium-ion-battery-ev/)
* [2026-02-08, 17:11:42](https://news.ycombinator.com/item?id=46936274) - [Let&apos;s compile Quake like it&apos;s 1997](https://fabiensanglard.net/compile_like_1997/index.html)
* [2026-02-08, 17:08:30](https://news.ycombinator.com/item?id=46936237) - [Show HN: I created a Mars colony RPG based on Kim Stanley Robinson&apos;s Mars books](https://underhillgame.com/)
* [2026-02-08, 16:56:08](https://news.ycombinator.com/item?id=46936105) - [Billing can be bypassed using a combo of subagents with an agent definition](https://github.com/microsoft/vscode/issues/292452)
* [2026-02-08, 16:47:08](https://news.ycombinator.com/item?id=46935991) - [Omega-3 is inversely related to risk of early-onset dementia](https://pubmed.ncbi.nlm.nih.gov/41506004/)
* [2026-02-08, 16:34:00](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 16:28:51](https://news.ycombinator.com/item?id=46935791) - [I put a real-time 3D shader on the Game Boy Color](https://blog.otterstack.com/posts/202512-gbshader/)
* [2026-02-08, 16:08:23](https://lobste.rs/s/i4idvz/fallen_apple) - [The Fallen Apple](https://mattgemmell.scot/the-fallen-apple/)
* [2026-02-08, 15:34:00](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyber-Espionage Group Breached Systems in 37 Nations, Security Researchers Say](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 15:32:29](https://lobste.rs/s/h3jg8m/beta_release_predicated_recursive) - [Beta release: Predicated Recursive Descent for Rust](https://wareya.wordpress.com/2026/02/01/beta-release-predicated-recursive-descent-for-rust/)
* [2026-02-08, 15:29:22](https://news.ycombinator.com/item?id=46935104) - [Five disciplines discovered the same math independently](https://freethemath.org)
* [2026-02-08, 14:40:52](https://news.ycombinator.com/item?id=46934579) - [Exploiting signed bootloaders to circumvent UEFI Secure Boot](https://habr.com/en/articles/446238/)
* [2026-02-08, 14:39:17](https://lobste.rs/s/nibwes/exploiting_signed_bootloaders) - [Exploiting signed bootloaders to circumvent UEFI Secure Boot](https://habr.com/en/articles/446238/)
* [2026-02-08, 14:32:28](https://news.ycombinator.com/item?id=46934499) - [RFC 3092 – Etymology of \&quot;Foo\&quot; (2001)](https://datatracker.ietf.org/doc/html/rfc3092)
* [2026-02-08, 14:26:20](https://lobste.rs/s/k2kwv0/testing_can_be_fun_actually) - [Testing can be fun, actually](https://giacomocavalieri.me/writing/testing-can-be-fun-actually)
* [2026-02-08, 14:02:58](https://news.ycombinator.com/item?id=46934266) - [Running Your Own As: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:59:54](https://lobste.rs/s/oy8aqi/running_your_own_as_bgp_on_freebsd_with_frr) - [Running Your Own AS: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:40:56](https://news.ycombinator.com/item?id=46934107) - [GitHub Agentic Workflows](https://github.github.io/gh-aw/)
* [2026-02-08, 13:31:14](https://lobste.rs/s/zyyx6b/software_engineering_is_back) - [Software Engineering is back](https://blog.alaindichiappari.dev/p/software-engineering-is-back)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 12:34:00](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brookhaven Lab Shuts Down Relativistic Heavy Ion Collider (RHIC)](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 11:38:57](https://news.ycombinator.com/item?id=46933401) - [Dave Farber has died](https://lists.nanog.org/archives/list/nanog@lists.nanog.org/thread/TSNPJVFH4DKLINIKSMRIIVNHDG5XKJCM/)
* [2026-02-08, 11:31:49](https://news.ycombinator.com/item?id=46933365) - [Why E cores make Apple silicon fast](https://eclecticlight.co/2026/02/08/last-week-on-my-mac-why-e-cores-make-apple-silicon-fast/)
* [2026-02-08, 11:04:07](https://lobste.rs/s/zm0luj/beating_old_not_dead_horse_what_do_with_kde) - [Beating an old, but not dead horse: what to do with the KDE Oxygen and Air themes?](https://filipfila.wordpress.com/2026/02/08/beating-an-old-but-not-dead-horse-what-to-do-with-the-oxygen-and-air-themes/)
* [2026-02-08, 10:31:35](https://news.ycombinator.com/item?id=46933067) - [Slop Terrifies Me](https://ezhik.jp/ai-slop-terrifies-me/)
* [2026-02-08, 10:13:00](https://news.ycombinator.com/item?id=46932985) - [Curating a Show on My Ineffable Mother, Ursula K. Le Guin](https://hyperallergic.com/curating-a-show-on-my-ineffable-mother-ursula-k-le-guin/)
* [2026-02-08, 09:10:18](https://news.ycombinator.com/item?id=46932678) - [Reverse Engineering Raiders of the Lost Ark for the Atari 2600](https://github.com/joshuanwalker/Raiders2600)
* [2026-02-08, 08:49:59](https://lobste.rs/s/m5v4gb/willow_protocols_for_uncertain_future) - [Willow - Protocols for an uncertain future](https://fosdem.org/2026/schedule/event/CVGZAV-willow/)
* [2026-02-08, 08:34:00](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Have We Been Thinking About Exercise Wrong for Half a Century?](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 08:07:55](https://news.ycombinator.com/item?id=46932343) - [Matchlock – Secures AI agent workloads with a Linux-based sandbox](https://github.com/jingkaihe/matchlock)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 07:39:49](https://news.ycombinator.com/item?id=46932192) - [DoNotNotify is now Open Source](https://donotnotify.com/opensource.html)
* [2026-02-08, 07:13:10](https://lobste.rs/s/9z1smp/npm_nodejs_should_do_more_make_es_modules) - [NPM and NodeJS should do more to make ES Modules easy to use (2024)](https://borischerny.com/javascript,/typescript/2024/06/19/ES-Modules-Are-A-Mess.html)
* [2026-02-08, 06:21:27](https://news.ycombinator.com/item?id=46931805) - [OpenClaw is changing my life](https://reorx.com/blog/openclaw-is-changing-my-life/)
* [2026-02-08, 04:35:00](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Big Tech&apos;s Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 03:51:58](https://lobste.rs/s/jbfw5x/busy_months_kde_linux) - [Busy months in KDE Linux](https://pointieststick.com/2026/02/06/busy-months-in-kde-linux/)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-08, 03:09:28](https://news.ycombinator.com/item?id=46930961) - [Vouch](https://github.com/mitchellh/vouch)
* [2026-02-08, 02:34:00](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Era for Security? Anthropic&apos;s Claude Opus 4.6 Found 500 High-Severity Vulnerabilities](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 01:55:09](https://news.ycombinator.com/item?id=46930565) - [Beyond agentic coding](https://haskellforall.com/2026/02/beyond-agentic-coding)
* [2026-02-08, 01:26:38](https://news.ycombinator.com/item?id=46930391) - [Show HN: LocalGPT – A local-first AI assistant in Rust with persistent memory](https://github.com/localgpt-app/localgpt)
* [2026-02-08, 01:23:32](https://lobste.rs/s/1mwu6x/implementing_auto_tiling_with_just_5) - [Implementing Auto Tiling With Just 5 Tiles](https://kyledunbar.dev/2026/02/05/Implementing-auto-tiling-with-just-5-tiles.html)
* [2026-02-08, 01:17:00](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s First Sodium-Ion Battery in Commercial EVs - Great at Low Temperatures](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 00:24:04](https://lobste.rs/s/gxdha5/source_code_was_moat_not_anymore) - [The source code was the moat. But not anymore](https://philipotoole.com/the-source-code-was-the-moat-no-longer/)
* [2026-02-07, 23:12:00](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the &apos;Death of Reading&apos; Narrative Wrong?](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 22:03:31](https://lobste.rs/s/cgxhwz/vouch_contributor_trust_management) - [vouch: a contributor trust management system based on explicit vouches to participate](https://github.com/mitchellh/vouch)
* [2026-02-07, 21:41:00](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Reveals Remote Workers In Philippines Sometimes Advise Its Driverless Cars](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 21:07:18](https://lobste.rs/s/2jczsd/your_best_thinking_is_wasted_on_wrong) - [Your Best Thinking Is Wasted on the Wrong Decisions](https://iankduncan.com/engineering/2026-02-07-your-best-thinking-is-wasted-on-the-wrong-decisions/)
* [2026-02-07, 21:03:39](https://lobste.rs/s/uysha5/adventures_guix_packaging) - [Adventures in Guix Packaging](https://nemin.hu/guix-packaging.html)
* [2026-02-07, 20:34:00](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Good News: We Saved the Bees. Bad News: We Saved the Wrong Ones.](https://news.slashdot.org/story/26/02/07/033225/good-news-we-saved-the-bees-bad-news-we-saved-the-wrong-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 19:34:00](https://slashdot.org/story/26/02/07/1914240/bitcoin-dropped-nearly-30-this-week-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Dropped Nearly 30% This Week. But Why?](https://slashdot.org/story/26/02/07/1914240/bitcoin-dropped-nearly-30-this-week-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 18:55:50](https://lobste.rs/s/m8nxql/game_boy_advance_d_pad_capacitor) - [Game Boy Advance d-pad capacitor measurements](https://gekkio.fi/blog/2026/game-boy-advance-d-pad-capacitor-measurements/)
* [2026-02-07, 18:34:00](https://news.slashdot.org/story/26/02/07/073233/firefox-announces-ai-controls-to-block-its-upcoming-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces &apos;AI Controls&apos; To Block Its Upcoming AI Features](https://news.slashdot.org/story/26/02/07/073233/firefox-announces-ai-controls-to-block-its-upcoming-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 18:32:27](https://news.ycombinator.com/item?id=46926245) - [We mourn our craft](https://nolanlawson.com/2026/02/07/we-mourn-our-craft/)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 17:34:00](https://apple.slashdot.org/story/26/02/07/0830248/apple-plans-to-allow-outside-voice-controlled-ai-chatbots-in-carplay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Plans to Allow Outside Voice-Controlled AI Chatbots in CarPlay](https://apple.slashdot.org/story/26/02/07/0830248/apple-plans-to-allow-outside-voice-controlled-ai-chatbots-in-carplay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 17:27:49](https://lobste.rs/s/gvlmu1/beyond_agentic_coding) - [Beyond agentic coding](https://haskellforall.com/2026/02/beyond-agentic-coding)
* [2026-02-07, 17:01:24](https://lobste.rs/s/nhbnjf/bsky_thread_this_turns_maintainer_into) - [(Bsky thread) \&quot;This turns the maintainer into an unwitting vibe coder\&quot;](https://bsky.app/profile/fullmoon.id/post/3meadfaulhk2s)
* [2026-02-07, 13:20:25](https://lobste.rs/s/w3wixc/horrible_conclusion) - [A Horrible Conclusion](https://addisoncrump.info/research/a-horrible-conclusion/)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 12:27:25](https://lobste.rs/s/lrnqdz/stories_from_25_years_software) - [Stories From 25 Years of Software Development](https://susam.net/twenty-five-years-of-computing.html)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 21:40:16](https://lobste.rs/s/ahca9t/maple_mono_open_source_monospace_font) - [Maple Mono: Open source monospace font](https://font.subf.dev/en/)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-04, 23:31:00](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss) - [The UK Government Gets It Spectacularly Wrong On AI](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss)
* [2026-02-04, 18:47:00](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss) - [Cooler Bedroom Temperatures Help the Heart Recover During Sleep](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss)
* [2026-02-04, 16:56:11](https://news.ycombinator.com/item?id=46888258) - [Show HN: It took 4 years to sell my startup. I wrote a book about it](https://derekyan.com/ma-book/)
* [2026-02-04, 14:57:38](https://news.ycombinator.com/item?id=46886569) - [Rabbit Ear \&quot;Origami\&quot;: programmable origami in the browser](https://rabbitear.org/book/origami.html)
* [2026-02-04, 14:00:00](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss) - [Review of iwStack.com](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss)
* [2026-02-04, 09:16:00](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss) - [When 20-Year-Old Bill Gates Fought the &apos;Thieves&apos; Who Stole His First Code](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss)
* [2026-02-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss) - [Research Team Reports Breakthrough in Pancreatic Cancer Treatment](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss)
