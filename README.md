# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Vulnerabilities and Security

* [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - A critical vulnerability in GitHub's Copilot AI code assistant allowed hackers to possibly steal two-factor authentication codes from users. [Comments](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)

* [Satellite reveals immense scale of GPS signal tampering](https://www.space.com/space-exploration/satellites/its-quite-a-bit-more-than-we-expected-satellite-reveals-immense-scale-of-gps-signal-tampering) - A startling new satellite study uncovers the widespread tampering of GPS signals by unknown entities. [Comments](https://news.ycombinator.com/item?id=48606271)

* [New Unpatchable Exploit Targets Apple Devices With A12 and A13 Chips](https://it.slashdot.org/story/26/06/19/1723242/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple devices with specific chipsets are found vulnerable to unfixable security exploits. [Comments](https://news.ycombinator.com/item?id=48595511)

* [What has (can) the EU Cyber Resilience Act done (do) for you?](https://nxdomain.no/~peter/what_hascan_eu_cra_donedo_for_you.html) - A discussion about the potential and limits of the EU Cyber Resilience Act in bolstering cybersecurity. [Comments](https://lobste.rs/s/oy4gen/what_has_can_eu_cyber_resilience_act_done)

## Advancements in Technology and Computing

* [Lithuanian startup launches open-source network to detect Shahed-type drones](https://www.lrt.lt/en/news-in-english/19/2965205/lithuanian-startup-launches-open-source-network-to-detect-shahed-type-drones) - A Lithuanian startup is combating drone threats with open-source technology. [Comments](https://news.ycombinator.com/item?id=48608591)

* [Reverse Engineering the Qualcomm NPU Compiler](https://datavorous.github.io/writing/qairt/) - A detailed look into dismantling the Qualcomm NPU compiler framework. [Comments](https://lobste.rs/s/lhn5w5/reverse_engineering_qualcomm_npu)

* [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/) - An unusual project demonstrates how a website can entirely fit within a favicon. [Comments](https://news.ycombinator.com/item?id=48606619)

## Innovations in Everyday Tools and Systems

* [Using Sound Waves To Make Espresso Could Cut Coffee-Brewing Energy Use By 75%](https://developers.slashdot.org/story/26/06/19/2159245/using-sound-waves-to-make-espresso-could-cut-coffee-brewing-energy-use-by-75?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Revolutionary sound wave technology could significantly reduce energy consumption in coffee brewing. [Comments](https://news.ycombinator.com/item?id=48606140)

* [Safe SIMD in Rust, even on the inside](https://shnatsel.medium.com/safe-simd-in-rust-even-on-the-inside-c6f1ff381828) - A focus on safe and robust SIMD implementation within the Rust programming environment. [Comments](https://lobste.rs/s/jmhfck/safe_simd_rust_even_on_inside)

* [CSSQuake](https://cssquake.com/) - A new platform with tools to detect and optimize CSS issues for better web performance. [Comments](https://news.ycombinator.com/item?id=48608223)

## Long-lasting and Resilient Innovations

* [16-year-old SATA II SSD survives 1 petabyte of writes, 25x the drive's rating](https://www.tomshardware.com/pc-components/ssds/16-year-old-sata-ii-ssd-survives-1-petabyte-of-writes-25x-over-the-drives-tbw-rating) - A retro SSD outlives its expected lifespan, writing over 1 petabyte of data. [Comments](https://news.ycombinator.com/item?id=48608503)

* [Meet Alice. Alice is impatient](https://brooker.co.za/blog/2026/06/19/waiting.html) - Examining the challenges of latency in human-computer interaction. [Comments](https://lobste.rs/s/dswkwr/meet_alice_alice_is_impatient)

* [Where to Find the Colors Your Screen Can't Show You](https://moultano.wordpress.com/2026/06/19/where-to-find-the-colors-your-screen-cant-show-you/) - An exploration of how to access colors that current screens cannot render. [Comments](https://news.ycombinator.com/item?id=48606140)

## Society and Policy

* [Norway Imposes Near Ban On AI In Elementary School](https://yro.slashdot.org/story/26/06/19/2140248/norway-imposes-near-ban-on-ai-in-elementary-school?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The implications of banning AI technologies in Norway's elementary education system. [Comments](https://news.ycombinator.com/item?id=48600312)

* [EU To Soon Classify AWS and Azure As Gatekeepers Under DSA](https://slashdot.org/story/26/06/19/1643240/eu-to-soon-classify-aws-and-azure-as-gatekeepers-under-dsa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The European Union tightens regulations on major cloud providers to prevent monopolistic practices. [Comments](https://news.ycombinator.com/item?id=48601162)

* [Student Loan Borrowers Will Get Interest Rate Cut If They Sign Up For Auto Pay](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Financial incentives designed to encourage loan repayment through automation. [Comments](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 11:58:32](https://news.ycombinator.com/item?id=48608591) - [Lithuanian startup launches open-source network to detect Shahed-type drones](https://www.lrt.lt/en/news-in-english/19/2965205/lithuanian-startup-launches-open-source-network-to-detect-shahed-type-drones)
* [2026-06-20, 11:49:16](https://lobste.rs/s/lhn5w5/reverse_engineering_qualcomm_npu) - [Reverse Engineering the Qualcomm NPU Compiler](https://datavorous.github.io/writing/qairt/)
* [2026-06-20, 11:44:00](https://lobste.rs/s/rdrtip/lighthouse_agentic_browsing_scoring) - [Lighthouse agentic browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring)
* [2026-06-20, 11:43:29](https://news.ycombinator.com/item?id=48608503) - [16-year-old SATA II SSD survives 1 petabyte of writes, 25x the drive&apos;s rating](https://www.tomshardware.com/pc-components/ssds/16-year-old-sata-ii-ssd-survives-1-petabyte-of-writes-25x-over-the-drives-tbw-rating)
* [2026-06-20, 11:00:00](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Student Loan Borrowers Will Get Interest Rate Cut If They Sign Up For Auto Pay](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 10:49:53](https://news.ycombinator.com/item?id=48608223) - [CSSQuake](https://cssquake.com/)
* [2026-06-20, 10:02:17](https://lobste.rs/s/gdwaqt/town_square_community_deserves) - [Town Square, the community deserves connection](https://cauenapier.com/blog/town-square-the-community-deserves-connection/)
* [2026-06-20, 09:00:43](https://lobste.rs/s/vpe3o6/xlibre_xserver_25_2_released) - [XLibre XServer 25.2 released](https://github.com/X11Libre/xserver/wiki/XLibre-XServer-25.2-Changes)
* [2026-06-20, 08:36:23](https://lobste.rs/s/dswkwr/meet_alice_alice_is_impatient) - [Meet Alice. Alice is impatient](https://brooker.co.za/blog/2026/06/19/waiting.html)
* [2026-06-20, 08:28:09](https://lobste.rs/s/mh9czn/cube_epicycles_human_face) - [The cube, the epicycles and the human face](https://www.andreinc.net/2026/06/15/the-cube-the-epicycles-and-the-human-face/)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 07:42:32](https://lobste.rs/s/ew22ks/there_are_no_instances_atproto) - [There Are No Instances in atproto](https://overreacted.io/there-are-no-instances-in-atproto/)
* [2026-06-20, 07:27:25](https://lobste.rs/s/xebobo/uhf_x11_x11_built_for_visionos_apple) - [UHF X11: X11 built for VisionOS and Apple Vision Pro](https://www.lispm.net/apps/uhf-x11/)
* [2026-06-20, 07:00:00](https://slashdot.org/story/26/06/19/2248239/amazon-retaliated-against-workers-who-supported-regulating-data-centers-complaint-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Retaliated Against Workers Who Supported Regulating Data Centers, Complaint Says](https://slashdot.org/story/26/06/19/2248239/amazon-retaliated-against-workers-who-supported-regulating-data-centers-complaint-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 06:28:58](https://lobste.rs/s/oy4gen/what_has_can_eu_cyber_resilience_act_done) - [What has (can) the EU Cyber Resilience Act done (do) for you?](https://nxdomain.no/~peter/what_hascan_eu_cra_donedo_for_you.html)
* [2026-06-20, 05:33:59](https://news.ycombinator.com/item?id=48606619) - [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)
* [2026-06-20, 04:16:28](https://lobste.rs/s/jmhfck/safe_simd_rust_even_on_inside) - [Safe SIMD in Rust, even on the inside](https://shnatsel.medium.com/safe-simd-in-rust-even-on-the-inside-c6f1ff381828)
* [2026-06-20, 04:07:03](https://news.ycombinator.com/item?id=48606271) - [Satellite reveals immense scale of GPS signal tampering](https://www.space.com/space-exploration/satellites/its-quite-a-bit-more-than-we-expected-satellite-reveals-immense-scale-of-gps-signal-tampering)
* [2026-06-20, 03:36:49](https://news.ycombinator.com/item?id=48606140) - [Where to Find the Colors Your Screen Can&apos;t Show You](https://moultano.wordpress.com/2026/06/19/where-to-find-the-colors-your-screen-cant-show-you/)
* [2026-06-20, 03:30:00](https://developers.slashdot.org/story/26/06/19/2159245/using-sound-waves-to-make-espresso-could-cut-coffee-brewing-energy-use-by-75?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Using Sound Waves To Make Espresso Could Cut Coffee-Brewing Energy Use By 75%](https://developers.slashdot.org/story/26/06/19/2159245/using-sound-waves-to-make-espresso-could-cut-coffee-brewing-energy-use-by-75?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-20, 01:25:14](https://news.ycombinator.com/item?id=48605355) - [LLMs Are Complicated Now](https://ianbarber.blog/2026/06/19/llms-are-complicated-now/)
* [2026-06-20, 00:51:33](https://lobste.rs/s/ysxvko/i_am_dreading_our_llm_written_incident) - [I am dreading our LLM-written incident report future](https://surfingcomplexity.blog/2026/06/19/i-am-dreading-our-llm-written-incident-report-future/)
* [2026-06-19, 23:00:00](https://entertainment.slashdot.org/story/26/06/19/2146253/amazon-drops-sam-altman-movie-after-announcing-openai-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Drops Sam Altman Movie After Announcing OpenAI Partnership](https://entertainment.slashdot.org/story/26/06/19/2146253/amazon-drops-sam-altman-movie-after-announcing-openai-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 22:00:00](https://yro.slashdot.org/story/26/06/19/2140248/norway-imposes-near-ban-on-ai-in-elementary-school?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Imposes Near Ban On AI In Elementary School](https://yro.slashdot.org/story/26/06/19/2140248/norway-imposes-near-ban-on-ai-in-elementary-school?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 21:41:22](https://lobste.rs/s/k5raot/bevy_0_19) - [Bevy 0.19](https://bevy.org/news/bevy-0-19/)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 21:19:37](https://lobste.rs/s/fbsqfs/smpte_makes_its_standards_freely) - [SMPTE Makes Its Standards Freely Accessible](https://www.smpte.org/blog/smpte-makes-its-standards-freely-accessible-openingstandards-library-to-the-global-media-technology-community)
* [2026-06-19, 21:00:00](https://games.slashdot.org/story/26/06/19/1918208/doom-composer-bobby-prince-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Composer Bobby Prince Has Died](https://games.slashdot.org/story/26/06/19/1918208/doom-composer-bobby-prince-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 20:30:59](https://news.ycombinator.com/item?id=48602918) - [Surprising economics of load-balanced systems](https://brooker.co.za/blog/2020/08/06/erlang.html)
* [2026-06-19, 20:00:00](https://hardware.slashdot.org/story/26/06/19/198218/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai Takes Full Control of Boston Dynamics As SoftBank Exits For $325 Million](https://hardware.slashdot.org/story/26/06/19/198218/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 19:35:15](https://news.ycombinator.com/item?id=48602352) - [Bobby Prince, composer for Doom, Wolfenstein 3D, and Duke Nukem 3D, has died](https://www.legacy.com/legacy/robert-bobby-prince-lll)
* [2026-06-19, 19:00:00](https://news.slashdot.org/story/26/06/19/1743202/canada-missed-chances-to-inspect-oceangates-titan-before-fatal-implosion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Missed Chances To Inspect OceanGate&apos;s Titan Before Fatal Implosion](https://news.slashdot.org/story/26/06/19/1743202/canada-missed-chances-to-inspect-oceangates-titan-before-fatal-implosion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 18:00:00](https://it.slashdot.org/story/26/06/19/1723242/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Unpatchable Exploit Targets Apple Devices With A12 and A13 Chips](https://it.slashdot.org/story/26/06/19/1723242/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 17:53:00](https://news.ycombinator.com/item?id=48601162) - [John Jumper to join Anthropic](https://twitter.com/JohnJumperSci/status/2068001285173834106)
* [2026-06-19, 17:34:18](https://news.ycombinator.com/item?id=48600946) - [Court Records Should Be Free](https://www.eff.org/deeplinks/2026/06/court-records-should-be-free)
* [2026-06-19, 17:08:08](https://lobste.rs/s/wf0kd6/making_ticker_tape_for_knicks_parade) - [Making Ticker-tape for the Knicks Parade](https://joe.lothan.net/blog/ticker-tape/)
* [2026-06-19, 17:00:00](https://slashdot.org/story/26/06/19/1643240/eu-to-soon-classify-aws-and-azure-as-gatekeepers-under-dsa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU To Soon Classify AWS and Azure As Gatekeepers Under DSA](https://slashdot.org/story/26/06/19/1643240/eu-to-soon-classify-aws-and-azure-as-gatekeepers-under-dsa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 16:59:16](https://news.ycombinator.com/item?id=48600593) - [AURpocalypse now: a look at the recent AUR attacks](https://lwn.net/SubscriberLink/1077619/f7b07c5489fdd43a/)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 16:28:20](https://news.ycombinator.com/item?id=48600312) - [Hyundai buys Boston Dynamics](https://startupfortune.com/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million/)
* [2026-06-19, 16:20:51](https://lobste.rs/s/nvfvjt/i_can_haz_smoller_nixos_isos) - [I can haz smoller NixOS ISOs?](https://natkr.com/2026-06-19-nixos-but-smol/)
* [2026-06-19, 16:11:25](https://news.ycombinator.com/item?id=48600167) - [GPT-5.5 hallucinates 3x more than MIT-licensed GLM-5.2](https://arrowtsx.dev/bigger-models/)
* [2026-06-19, 16:03:15](https://news.ycombinator.com/item?id=48600093) - [Norway imposes near ban on AI in elementary school](https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/)
* [2026-06-19, 16:00:00](https://slashdot.org/story/26/06/19/007201/the-korean-telecom-giant-at-the-center-of-anthropics-mythos-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Korean Telecom Giant At the Center of Anthropic&apos;s Mythos Controversy](https://slashdot.org/story/26/06/19/007201/the-korean-telecom-giant-at-the-center-of-anthropics-mythos-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 15:10:02](https://news.ycombinator.com/item?id=48599515) - [There are no instances in ATProto](https://overreacted.io/there-are-no-instances-in-atproto/)
* [2026-06-19, 15:00:00](https://tech.slashdot.org/story/26/06/18/2342227/meta-lobbies-congress-for-protection-from-child-harm-lawsuits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Lobbies Congress For Protection From Child-Harm Lawsuits](https://tech.slashdot.org/story/26/06/18/2342227/meta-lobbies-congress-for-protection-from-child-harm-lawsuits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 14:50:19](https://lobste.rs/s/jk5k9i/project_valhalla_explained_how_decade) - [Project Valhalla, Explained: How a Decade of Work Arrives in JDK 28](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a)
* [2026-06-19, 14:32:07](https://lobste.rs/s/9rbscj/wikispy) - [WikiSpy](https://neal.fun/wiki-spy/)
* [2026-06-19, 14:19:07](https://lobste.rs/s/8n2pnd/changes_usekmsconvtconsole) - [Changes/UseKmsconVTConsole](https://fedoraproject.org/wiki/Changes/UseKmsconVTConsole)
* [2026-06-19, 13:51:36](https://news.ycombinator.com/item?id=48598586) - [How many of the 170k English words do you know?](https://vocabowl-870366514258.us-west1.run.app/)
* [2026-06-19, 13:27:13](https://lobste.rs/s/dsy6r3/aspirational_clownmaxxing_joey_s) - [Aspirational Clownmaxxing and Joey&apos;s cadillac todo list](https://charlesleifer.com/blog/aspirational-clownmaxxing-and-joey-s-cadillac-todo-list/)
* [2026-06-19, 12:30:13](https://lobste.rs/s/wemk3j/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/wemk3j/what_are_you_doing_this_weekend)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 11:28:45](https://lobste.rs/s/ggp2ov/shutting_down_fornjot) - [Shutting Down Fornjot](https://fornjot.app/blog/shutting-down-fornjot/)
* [2026-06-19, 11:00:00](https://science.slashdot.org/story/26/06/18/2349246/nasa-picks-eric-schmidts-rocket-company-for-mars-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Picks Eric Schmidt&apos;s Rocket Company For Mars Mission](https://science.slashdot.org/story/26/06/18/2349246/nasa-picks-eric-schmidts-rocket-company-for-mars-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 10:36:25](https://lobste.rs/s/u0nv8q/diffshub) - [DiffsHub](https://diffshub.com/)
* [2026-06-19, 08:26:25](https://lobste.rs/s/heb0am/godot_4_7_lights_camera_action) - [Godot 4.7: Lights, Camera, Action](https://godotengine.org/releases/4.7/)
* [2026-06-19, 07:00:00](https://hardware.slashdot.org/story/26/06/18/2335235/rolls-royce-secures-deal-to-build-small-nuclear-reactors-for-sweden?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rolls-Royce Secures Deal To Build Small Nuclear Reactors For Sweden](https://hardware.slashdot.org/story/26/06/18/2335235/rolls-royce-secures-deal-to-build-small-nuclear-reactors-for-sweden?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 06:35:57](https://news.ycombinator.com/item?id=48595511) - [Project Valhalla, Explained: How a Decade of Work Arrives in JDK 28](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a)
* [2026-06-19, 03:30:00](https://news.slashdot.org/story/26/06/18/2052239/trump-admin-backs-off-plans-to-kill-ocean-monitoring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Backs Off Plans To Kill Ocean Monitoring](https://news.slashdot.org/story/26/06/18/2052239/trump-admin-backs-off-plans-to-kill-ocean-monitoring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 23:24:00](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss) - [Linux Kernel 7.1 Sends Intel 486 Support To Silicon Heaven](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 17:04:00](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments) - [What are your Favorite Lobste.rs Comments?](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments)
* [2026-06-18, 16:25:48](https://lobste.rs/s/5majlp/future_con_is_already_here_it_s_just_not) - [The Future of the Con Is Already Here, It&apos;s Just Not Evenly Distributed](http://manishearth.github.io/blog/2026/06/17/the-future-of-the-con-is-already-here/)
* [2026-06-18, 14:51:53](https://news.ycombinator.com/item?id=48586329) - [Building a robotics research setup that lives next to my desk](https://dfdxlabs.com/research/2026/robotics-setup/)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 08:16:20](https://news.ycombinator.com/item?id=48582374) - [Can you see three trees?](https://www.not-ship.com/can-you-see-three-trees/)
* [2026-06-18, 07:50:12](https://news.ycombinator.com/item?id=48582180) - [A Perceptron in Age of Empires II](https://adewynter.github.io/notes/aoe2-circuits)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
* [2026-06-17, 23:35:00](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss) - [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 12:45:10](https://news.ycombinator.com/item?id=48569677) - [Human Judgment as a Specification](https://blog.brownplt.org/2026/06/09/pick.html)
* [2026-06-17, 11:09:29](https://news.ycombinator.com/item?id=48568652) - [The discovery that changed how scientists think about memory](https://www.ibm.com/think/news/discovery-changed-how-scientists-think-about-memory-kavli-prize)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-17, 01:06:12](https://news.ycombinator.com/item?id=48564480) - [The Cold War&apos;s Accidental Whale Observatory](https://thereader.mitpress.mit.edu/the-cold-wars-accidental-whale-observatory/)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 21:51:57](https://news.ycombinator.com/item?id=48562662) - [Data Compression Explained (2012)](https://mattmahoney.net/dc/dce.html)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 18:24:39](https://news.ycombinator.com/item?id=48559729) - [A 1969 camera operators&apos; strike created Upstairs Downstairs multiverse](https://ironicsans.ghost.io/the-color-strike/)
* [2026-06-16, 14:43:38](https://news.ycombinator.com/item?id=48556082) - [Show HN: Metiq: a real time 3D globe for 100 public datasets](https://metiq.space)
* [2026-06-16, 14:30:12](https://news.ycombinator.com/item?id=48555903) - [Soccer Arcade Games Through the Years](https://arcadeheroes.com/2026/06/13/world-cup-2026-soccer-arcade/)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 00:45:50](https://news.ycombinator.com/item?id=48549118) - [Zen and the Art of Machine Learning Research](https://blog.jxmo.io/p/zen-and-the-art-of-machine-learning)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
