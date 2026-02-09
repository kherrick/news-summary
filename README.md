# [News Summary](https://kherrick.github.io/news-summary/)

## Security and Privacy

* [Cyber-Espionage Group Breached Systems in 37 Nations, Security Researchers Say](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871)

* [Exploiting signed bootloaders to circumvent UEFI Secure Boot](https://habr.com/en/articles/446238/)

* [Roundcube Webmail: SVG feImage bypasses image blocking to track email opens](https://nullcathedral.com/posts/2026-02-08-roundcube-svg-feimage-remote-image-bypass/)

* [A New Era for Security? Anthropic's Claude Opus 4.6 Found 500 High-Severity Vulnerabilities](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence

* [AI makes the easy part easier and the hard part harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder)

* [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)

* [Do Super Bowl Ads For AI Signal a Bubble About to Burst?](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Engineering and Development

* [Reverse-engineering the PROM for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/)

* [I Am Happier Writing Code by Hand](https://abhinavomprakash.com/posts/i-am-happier-writing-code-by-hand/)

* [Software Engineering is back](https://blog.alaindichiappari.dev/p/software-engineering-is-back)

* [The source code was the moat. But not anymore](https://philipotoole.com/the-source-code-was-the-moat-no-longer/)

## Gaming and Modding

* [A GTA modder has got the 1997 original working on modern PCs and Steam Deck](https://gtaforums.com/topic/986492-grand-theft-auto-ready2play-full-game-windows-version/)

* [Show HN: I created a Mars colony RPG based on Kim Stanley Robinson's Mars books](https://underhillgame.com/)

## Historical and Scientific Discoveries

* [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&from=rss)

## Technology Advancements

* [The World's First Sodium-Ion Battery in Commercial EVs - Great at Low Temperatures](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Are Big Tech's Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Literary Notes

* [Curating a Show on My Ineffable Mother, Ursula K. Le Guin](https://hyperallergic.com/curating-a-show-on-my-ineffable-mother-ursula-k-le-guin/)

* [Every book recommended on the Odd Lots Discord](https://odd-lots-books.netlify.app/)

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

* [2026-02-09, 03:03:29](https://lobste.rs/s/dndxmu/little_bool_doom) - [The little bool of doom](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-09, 02:50:28](https://lobste.rs/s/m4lvr0/concerns_about_low_quality_prs_beeing) - [Concerns about low-quality PRs beeing merged into main](https://discourse.llvm.org/t/concerns-about-low-quality-prs-beeing-merged-into-main/89748)
* [2026-02-09, 01:51:31](https://lobste.rs/s/2omooc/original_vi_is_product_its_time_its_time) - [The original vi is a product of its time (and its time has passed)](https://utcc.utoronto.ca/~cks/space/blog/unix/ViIsAProductOfItsTime)
* [2026-02-09, 01:29:03](https://lobste.rs/s/svjxze/reverse_engineering_prom_for_sgi_o2) - [Reverse-engineering the PROM for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/)
* [2026-02-08, 23:34:00](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Delivery Drone Crashes into Texas Apartment Building](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 23:27:59](https://news.ycombinator.com/item?id=46939685) - [Every book recommended on the Odd Lots Discord](https://odd-lots-books.netlify.app/)
* [2026-02-08, 23:13:34](https://news.ycombinator.com/item?id=46939593) - [AI makes the easy part easier and the hard part harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 22:39:46](https://news.ycombinator.com/item?id=46939312) - [Show HN: A custom font that displays Cistercian numerals using ligatures](https://bobbiec.github.io/cistercian-font.html)
* [2026-02-08, 22:38:14](https://news.ycombinator.com/item?id=46939298) - [Toma (YC W24) Is Hiring Founding Engineers](https://www.ycombinator.com/companies/toma/jobs/oONUnCf-founding-engineer-ai-products)
* [2026-02-08, 22:25:25](https://news.ycombinator.com/item?id=46939187) - [Reverse Engineering the Prom for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/)
* [2026-02-08, 22:13:34](https://lobste.rs/s/es2peg/minikanren_org) - [miniKanren.org](https://minikanren.org/)
* [2026-02-08, 22:06:00](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Super Bowl Ads For AI Signal a Bubble About to Burst?](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 21:58:19](https://news.ycombinator.com/item?id=46938958) - [Stop Generating, Start Thinking](https://localghost.dev/blog/stop-generating-start-thinking/)
* [2026-02-08, 21:52:28](https://news.ycombinator.com/item?id=46938903) - [Shifts in U.S. Social Media Use, 2020–2024: Decline, Fragmentation, Polarization (2025)](https://arxiv.org/abs/2510.25417)
* [2026-02-08, 21:05:24](https://news.ycombinator.com/item?id=46938511) - [Art of Roads in Games](https://sandboxspirit.com/blog/art-of-roads-in-games/)
* [2026-02-08, 20:52:55](https://news.ycombinator.com/item?id=46938398) - [More Mac malware from Google search](https://eclecticlight.co/2026/01/30/more-malware-from-google-search/)
* [2026-02-08, 20:42:00](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dave Farber Dies at Age 91](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 20:38:55](https://news.ycombinator.com/item?id=46938280) - [Apple XNU: Clutch Scheduler](https://github.com/apple-oss-distributions/xnu/blob/main/doc/scheduler/sched_clutch_edge.md)
* [2026-02-08, 20:34:51](https://news.ycombinator.com/item?id=46938241) - [A GTA modder has got the 1997 original working on modern PCs and Steam Deck](https://gtaforums.com/topic/986492-grand-theft-auto-ready2play-full-game-windows-version/)
* [2026-02-08, 20:12:27](https://lobste.rs/s/n4ddir/don_t_get_distracted_2017) - [Don&apos;t Get Distracted (2017)](https://calebhearth.com/dont-get-distracted)
* [2026-02-08, 19:35:55](https://news.ycombinator.com/item?id=46937696) - [Ask HN: What are you working on? (February 2026)](https://news.ycombinator.com/item?id=46937696)
* [2026-02-08, 19:35:00](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Six Years, Two Pentesters Arrested in Iowa Receive $600,000 Settlement ](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 19:11:43](https://lobste.rs/s/bnldoy/i_am_happier_writing_code_by_hand) - [I Am Happier Writing Code by Hand](https://abhinavomprakash.com/posts/i-am-happier-writing-code-by-hand/)
* [2026-02-08, 18:34:00](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 18:24:26](https://news.ycombinator.com/item?id=46937012) - [Roundcube Webmail: SVG feImage bypasses image blocking to track email opens](https://nullcathedral.com/posts/2026-02-08-roundcube-svg-feimage-remote-image-bypass/)
* [2026-02-08, 18:08:56](https://lobste.rs/s/gfsl25/ai_fatigue_is_real_nobody_talks_about_it) - [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)
* [2026-02-08, 18:07:42](https://lobste.rs/s/bic9qr/rebuilding_my_home_network_with_vlans) - [Rebuilding my home network with VLANs and 10Gbps](https://clintonboys.com/projects/homelab/03-network/)
* [2026-02-08, 18:02:50](https://news.ycombinator.com/item?id=46936828) - [The Little Bool of Doom (2025)](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-08, 17:39:00](https://news.ycombinator.com/item?id=46936595) - [Bun v1.3.9](https://bun.com/blog/bun-v1.3.9)
* [2026-02-08, 17:34:00](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Is China Building So Many Coal Plants Despite Its Solar and Wind Boom?](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 17:19:38](https://lobste.rs/s/cqso4h/constraint_propagation_for_fun) - [Constraint propagation for fun](https://eli.li/constraint-propagation-for-fun)
* [2026-02-08, 17:15:52](https://lobste.rs/s/fgeokt/code_injections_through_git_commit) - [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871)
* [2026-02-08, 17:08:30](https://news.ycombinator.com/item?id=46936237) - [Show HN: I created a Mars colony RPG based on Kim Stanley Robinson&apos;s Mars books](https://underhillgame.com/)
* [2026-02-08, 16:47:08](https://news.ycombinator.com/item?id=46935991) - [Omega-3 is inversely related to risk of early-onset dementia](https://pubmed.ncbi.nlm.nih.gov/41506004/)
* [2026-02-08, 16:34:00](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 16:28:51](https://news.ycombinator.com/item?id=46935791) - [I put a real-time 3D shader on the Game Boy Color](https://blog.otterstack.com/posts/202512-gbshader/)
* [2026-02-08, 16:08:23](https://lobste.rs/s/i4idvz/fallen_apple) - [The Fallen Apple](https://mattgemmell.scot/the-fallen-apple/)
* [2026-02-08, 15:34:00](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyber-Espionage Group Breached Systems in 37 Nations, Security Researchers Say](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 15:32:29](https://lobste.rs/s/h3jg8m/beta_release_predicated_recursive) - [Beta release: Predicated Recursive Descent for Rust](https://wareya.wordpress.com/2026/02/01/beta-release-predicated-recursive-descent-for-rust/)
* [2026-02-08, 14:40:52](https://news.ycombinator.com/item?id=46934579) - [Exploiting signed bootloaders to circumvent UEFI Secure Boot](https://habr.com/en/articles/446238/)
* [2026-02-08, 14:32:28](https://news.ycombinator.com/item?id=46934499) - [RFC 3092 – Etymology of \&quot;Foo\&quot; (2001)](https://datatracker.ietf.org/doc/html/rfc3092)
* [2026-02-08, 14:26:20](https://lobste.rs/s/k2kwv0/testing_can_be_fun_actually) - [Testing can be fun, actually](https://giacomocavalieri.me/writing/testing-can-be-fun-actually)
* [2026-02-08, 14:02:58](https://news.ycombinator.com/item?id=46934266) - [Running Your Own As: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:59:54](https://lobste.rs/s/oy8aqi/running_your_own_as_bgp_on_freebsd_with_frr) - [Running Your Own AS: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:40:56](https://news.ycombinator.com/item?id=46934107) - [GitHub Agentic Workflows](https://github.github.io/gh-aw/)
* [2026-02-08, 13:31:14](https://lobste.rs/s/zyyx6b/software_engineering_is_back) - [Software Engineering is back](https://blog.alaindichiappari.dev/p/software-engineering-is-back)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 12:34:00](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brookhaven Lab Shuts Down Relativistic Heavy Ion Collider (RHIC)](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 11:38:57](https://news.ycombinator.com/item?id=46933401) - [Dave Farber has died](https://lists.nanog.org/archives/list/nanog@lists.nanog.org/thread/TSNPJVFH4DKLINIKSMRIIVNHDG5XKJCM/)
* [2026-02-08, 11:04:07](https://lobste.rs/s/zm0luj/beating_old_not_dead_horse_what_do_with_kde) - [Beating an old, but not dead horse: what to do with the KDE Oxygen and Air themes?](https://filipfila.wordpress.com/2026/02/08/beating-an-old-but-not-dead-horse-what-to-do-with-the-oxygen-and-air-themes/)
* [2026-02-08, 10:13:00](https://news.ycombinator.com/item?id=46932985) - [Curating a Show on My Ineffable Mother, Ursula K. Le Guin](https://hyperallergic.com/curating-a-show-on-my-ineffable-mother-ursula-k-le-guin/)
* [2026-02-08, 09:41:29](https://news.ycombinator.com/item?id=46932826) - [(Golang) Self referential functions and the design of options](https://commandcenter.blogspot.com/2014/01/self-referential-functions-and-design.html)
* [2026-02-08, 08:49:59](https://lobste.rs/s/m5v4gb/willow_protocols_for_uncertain_future) - [Willow - Protocols for an uncertain future](https://fosdem.org/2026/schedule/event/CVGZAV-willow/)
* [2026-02-08, 08:34:00](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Have We Been Thinking About Exercise Wrong for Half a Century?](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 08:26:36](https://news.ycombinator.com/item?id=46932444) - [Quartz Crystals](https://www.pa3fwm.nl/technotes/tn13a.html)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 06:21:27](https://news.ycombinator.com/item?id=46931805) - [OpenClaw is changing my life](https://reorx.com/blog/openclaw-is-changing-my-life/)
* [2026-02-08, 04:35:00](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Big Tech&apos;s Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 03:51:58](https://lobste.rs/s/jbfw5x/busy_months_kde_linux) - [Busy months in KDE Linux](https://pointieststick.com/2026/02/06/busy-months-in-kde-linux/)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-08, 03:09:28](https://news.ycombinator.com/item?id=46930961) - [Vouch](https://github.com/mitchellh/vouch)
* [2026-02-08, 02:34:00](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Era for Security? Anthropic&apos;s Claude Opus 4.6 Found 500 High-Severity Vulnerabilities](https://it.slashdot.org/story/26/02/08/0159234/a-new-era-for-security-anthropics-claude-opus-46-found-500-high-severity-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 01:17:00](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s First Sodium-Ion Battery in Commercial EVs - Great at Low Temperatures](https://tech.slashdot.org/story/26/02/08/0113249/the-worlds-first-sodium-ion-battery-in-commercial-evs---great-at-low-temperatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 00:24:04](https://lobste.rs/s/gxdha5/source_code_was_moat_not_anymore) - [The source code was the moat. But not anymore](https://philipotoole.com/the-source-code-was-the-moat-no-longer/)
* [2026-02-07, 23:12:00](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the &apos;Death of Reading&apos; Narrative Wrong?](https://news.slashdot.org/story/26/02/07/2310212/is-the-death-of-reading-narrative-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 22:03:31](https://lobste.rs/s/cgxhwz/vouch_contributor_trust_management) - [vouch: a contributor trust management system based on explicit vouches to participate](https://github.com/mitchellh/vouch)
* [2026-02-07, 21:41:00](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Reveals Remote Workers In Philippines Sometimes Advise Its Driverless Cars](https://tech.slashdot.org/story/26/02/07/2140203/waymo-reveals-remote-workers-in-philippines-sometimes-advise-its-driverless-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-07, 21:03:39](https://lobste.rs/s/uysha5/adventures_guix_packaging) - [Adventures in Guix Packaging](https://nemin.hu/guix-packaging.html)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 17:27:49](https://lobste.rs/s/gvlmu1/beyond_agentic_coding) - [Beyond agentic coding](https://haskellforall.com/2026/02/beyond-agentic-coding)
* [2026-02-07, 17:01:24](https://lobste.rs/s/nhbnjf/bsky_thread_this_turns_maintainer_into) - [(Bsky thread) \&quot;This turns the maintainer into an unwitting vibe coder\&quot;](https://bsky.app/profile/fullmoon.id/post/3meadfaulhk2s)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 12:27:25](https://lobste.rs/s/lrnqdz/stories_from_25_years_software) - [Stories From 25 Years of Software Development](https://susam.net/twenty-five-years-of-computing.html)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 21:38:51](https://news.ycombinator.com/item?id=46905745) - [Show HN: Slack CLI for Agents](https://github.com/stablyai/agent-slack)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
