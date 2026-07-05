# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Open Source

* [PEP 814: Add frozendict built-in type](https://vstinner.github.io/pep-814-add-frozendict-builtin-type.html) - Python proposes a new built-in type, `frozendict`, for immutable dictionaries, an enhancement aimed at improving performance and reducing bugs. ([Comments](https://lobste.rs/s/nzifa8/pep_814_add_frozendict_built_type))

* [ps5-linux-loader: Linux payload implementing HV exploits to run a custom bootloader](https://github.com/ps5-linux/ps5-linux-loader) - A fascinating look at a new PS5 Linux loader using HV exploits for custom bootloader functionality. ([Comments](https://lobste.rs/s/prfycy/ps5_linux_loader_linux_payload))

* [DIY RISC-V ultracluster](https://youtube.com/watch?v=qMR3IXF2sWw) - Watch how to build a DIY RISC-V computing cluster; an exciting project for developers and hardware enthusiasts. ([Comments](https://lobste.rs/s/dbopp5/diy_risc_v_ultracluster))

* [Game Boy Advance Dev: Logging to the console](https://www.mattgreer.dev/blog/gba-dev-logging/) - Exploring techniques on logging for Game Boy Advance developers with real-world application insights. ([Comments](https://lobste.rs/s/ujjm68/game_boy_advance_dev_logging_console))

* [PEP 814: Add frozendict built-in type](https://vstinner.github.io/pep-814-add-frozendict-builtin-type.html) - Python proposes a new built-in `frozendict` for immutable dictionaries, aimed at performance and bug reduction. ([Lobster comments](https://lobste.rs/s/nzifa8/pep_814_add_frozendict_built_type))

## Advances in Science and Environment

* [Efficacy and Safety of Psilocybin in Treatment-Resistant Major Depression](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2846478) - A groundbreaking study explores psilocybin's potential in treating treatment-resistant depression. ([Comments](https://news.ycombinator.com/item?id=48790583))

* [What Is a Quantum Computer Good For? Absolutely Nothing - Yet](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A discussion on the challenges and future potential of quantum computing. ([Comments](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA Unsure Boeing Starliner Will Ever Be Certified For Human Flight](https://soylentnews.org/article.pl?sid=26/07/02/1531208&from=rss) - Doubts arise over Boeing Starliner's viability for manned space missions. ([Comments](https://soylentnews.org/article.pl?sid=26/07/02/1531208&from=rss))

## Innovations in AI and Computing

* [Mouse: Precision Editing Tools for AI Coding Agents](https://hic-ai.com) - Introducing tools designed for precision editing in AI development environments. ([Comments](https://news.ycombinator.com/item?id=48791380))

* [Jellyfish can heal wounds in minutes. Scientists want their secrets](https://www.mbl.edu/news/jellyfish-can-heal-wounds-minutes-scientists-want-their-secrets) - Scientists study jellyfish to uncover secrets of rapid wound healing. ([Comments](https://news.ycombinator.com/item?id=48789712))

## Cultural and Historical Insights

* [New Google Ad Imagines America’s ‘Declaration of Independence’ Written With AI Help](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An intriguing exploration of how AI might reimagine historical documents. ([Comments](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&from=rss) - A look at medieval technological innovations and their roles in shaping the contemporary world. ([Comments](https://soylentnews.org/article.pl?sid=26/07/04/0645204&from=rss))

## Cybersecurity Concerns and Malpractices

* [Bad Epoll (CVE-2026-46242)](https://github.com/J-jaeyoung/bad-epoll) - A technical analysis of the recent CVE-2026-46242 vulnerability affecting Linux systems. ([Comments](https://lobste.rs/s/drf6my/bad_epoll_cve_2026_46242))

* [Leaking YouTube creators' private videos](https://javoriuski.com/post/youtube) - A worrying exposé on how private YouTube videos are being leaked. ([Comments](https://news.ycombinator.com/item?id=48786781))

* [New PamStealer macOS Malware Uses Clever Tradecraft To Remain Stealthy](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights into a new macOS malware, PamStealer, and its stealth tactics. ([Comments](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2026-07-05, 06:52:10](https://lobste.rs/s/nzifa8/pep_814_add_frozendict_built_type) - [PEP 814: Add frozendict built-in type](https://vstinner.github.io/pep-814-add-frozendict-builtin-type.html)
* [2026-07-05, 06:34:38](https://lobste.rs/s/prfycy/ps5_linux_loader_linux_payload) - [ps5-linux-loader: Linux payload implementing HV exploits to run a custom bootloader](https://github.com/ps5-linux/ps5-linux-loader)
* [2026-07-05, 06:30:40](https://news.ycombinator.com/item?id=48791755) - [EV Batteries Are Defying Expectations After Miles](https://www.wsj.com/business/autos/ev-batteries-are-defying-expectations-after-hundreds-of-thousands-of-miles-8579de13)
* [2026-07-05, 05:56:03](https://news.ycombinator.com/item?id=48791591) - [Megawatts by Microwave](https://computer.rip/2026-07-04-microwave-and-power.html)
* [2026-07-05, 05:34:00](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)
* [2026-07-05, 05:23:24](https://news.ycombinator.com/item?id=48791440) - [Beeg float library, a Rust port of Fabrice Bellard&apos;s libbf](https://github.com/lifthrasiir/libbeef)
* [2026-07-05, 05:01:14](https://news.ycombinator.com/item?id=48791380) - [Mouse: Precision Editing Tools for AI Coding Agents](https://hic-ai.com)
* [2026-07-05, 04:46:08](https://news.ycombinator.com/item?id=48791328) - [Shadcn/UI now defaults to Base UI instead of Radix](https://ui.shadcn.com/docs/changelog)
* [2026-07-05, 04:39:53](https://news.ycombinator.com/item?id=48791308) - [Binary Coverage the Wrong Way](https://redvice.org/2026/coverage-the-wrong-way/)
* [2026-07-05, 04:34:00](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Google Ad Imagines America&apos;s &apos;Declaration of Independence&apos; Written With AI Help](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 04:30:33](https://news.ycombinator.com/item?id=48791266) - [Moby Dick Workout](https://www.hogbaysoftware.com/posts/moby-dick-workout/)
* [2026-07-05, 04:29:05](https://news.ycombinator.com/item?id=48791256) - [My ASN Journey series (2024)](https://www.animmouse.com/p/my-asn-journey/)
* [2026-07-05, 03:20:46](https://news.ycombinator.com/item?id=48790990) - [The Preemptive Draw and Preemptive Grip in the Cash-in-Transit Sector](https://gutsgatesguards.wordpress.com/2026/06/23/the-preemptive-draw-and-preemptive-grip-in-the-cash-in-transit-sector-part-1/)
* [2026-07-05, 03:13:15](https://lobste.rs/s/jchp72/scheme_is_hoot) - [Scheme is a Hoot](https://gracefulliberty.com/notes/scheme-is-a-hoot/)
* [2026-07-05, 02:57:38](https://news.ycombinator.com/item?id=48790912) - [The Log Is the Agent](https://arxiv.org/abs/2605.21997)
* [2026-07-05, 02:01:03](https://news.ycombinator.com/item?id=48790689) - [If you&apos;re a button, you have one job](https://unsung.aresluna.org/if-youre-a-button-you-have-one-job/)
* [2026-07-05, 01:39:05](https://news.ycombinator.com/item?id=48790583) - [Efficacy and Safety of Psilocybin in Treatment-Resistant Major Depression](https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2846478)
* [2026-07-05, 01:34:00](https://yro.slashdot.org/story/26/07/04/1945242/are-wars-blurring-lines-between-corporate-and-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Wars Blurring Lines Between Corporate and National Security?](https://yro.slashdot.org/story/26/07/04/1945242/are-wars-blurring-lines-between-corporate-and-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 01:23:11](https://news.ycombinator.com/item?id=48790512) - [Record-breaking solo rower Kelsey Pfendler arrives in Hawaii](https://www.hawaiinewsnow.com/2026/07/04/record-breaking-solo-rower-kelsey-pfendler-arrives-hawaii/)
* [2026-07-05, 00:48:00](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss) - [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss)
* [2026-07-05, 00:22:25](https://news.ycombinator.com/item?id=48790240) - [Return of the Nigerian Prince Redux: Beware Book Club and Book Review Scams (2025)](https://writerbeware.blog/2025/09/19/return-of-the-nigerian-prince-redux-beware-book-club-and-book-review-scams/)
* [2026-07-04, 23:35:02](https://lobste.rs/s/d1hevp/dark_mode_with_web_standards) - [Dark mode with web standards](https://olliewilliams.xyz/blog/dark-mode/)
* [2026-07-04, 23:22:15](https://news.ycombinator.com/item?id=48789965) - [Drone Autonomy Crash Course](https://www.cggonzalez.com/blog/index.html)
* [2026-07-04, 22:36:28](https://news.ycombinator.com/item?id=48789712) - [Jellyfish can heal wounds in minutes. Scientists want their secrets](https://www.mbl.edu/news/jellyfish-can-heal-wounds-minutes-scientists-want-their-secrets)
* [2026-07-04, 22:14:41](https://lobste.rs/s/1evikl/how_call_linux_code_from_wine_process) - [How to call Linux code from a Wine process](https://arcanenibble.com/how-to-call-linux-code-from-a-wine-process.html)
* [2026-07-04, 21:51:19](https://lobste.rs/s/yrmpxy/better_models_worse_tools) - [Better Models: Worse Tools](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)
* [2026-07-04, 21:51:09](https://news.ycombinator.com/item?id=48789428) - [GPT-5.5 Codex reasoning-token clustering may be leading to degraded performance](https://github.com/openai/codex/issues/30364)
* [2026-07-04, 21:37:21](https://lobste.rs/s/svm2dp/returning_zig) - [Returning to Zig](https://gracefulliberty.com/articles/return-to-zig/)
* [2026-07-04, 21:34:00](https://news.slashdot.org/story/26/07/04/208217/new-dna-tech-identifies-soldier-killed-in-americas-revolution-in-1780?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New DNA Tech Identifies Soldier Killed in America&apos;s Revolution in 1780](https://news.slashdot.org/story/26/07/04/208217/new-dna-tech-identifies-soldier-killed-in-americas-revolution-in-1780?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 20:41:03](https://lobste.rs/s/5akjfx/lion_witch_audacity_recruiters) - [The Lion, The Witch, and the audacity of recruiters](https://hauleth.dev/post/the-lion-the-witch-and-the-aduacity-of-recruiter/)
* [2026-07-04, 20:34:00](https://news.slashdot.org/story/26/07/04/2031258/842000-american-households-lost-power-today-during-a-heatwave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [842,000 American Households Lost Power Today During a Heatwave](https://news.slashdot.org/story/26/07/04/2031258/842000-american-households-lost-power-today-during-a-heatwave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 20:16:22](https://news.ycombinator.com/item?id=48788599) - [Better Models: Worse Tools](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)
* [2026-07-04, 20:05:00](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss) - [NASA Unsure Boeing Starliner Will Ever Be Certified For Human Flight](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss)
* [2026-07-04, 19:41:10](https://news.ycombinator.com/item?id=48788283) - [Command and Conquer Generals natively ported to macOS, iPhone, iPad using Fable](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad/tree/main)
* [2026-07-04, 19:34:00](https://yro.slashdot.org/story/26/07/04/193215/did-microsoft-shift-its-profits-to-low-tax-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Microsoft Shift Its Profits to Low-Tax Countries?](https://yro.slashdot.org/story/26/07/04/193215/did-microsoft-shift-its-profits-to-low-tax-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 18:40:52](https://lobste.rs/s/dbopp5/diy_risc_v_ultracluster) - [DIY RISC-V ultracluster](https://youtube.com/watch?v=qMR3IXF2sWw)
* [2026-07-04, 18:40:12](https://lobste.rs/s/drf6my/bad_epoll_cve_2026_46242) - [Bad Epoll (CVE-2026-46242)](https://github.com/J-jaeyoung/bad-epoll)
* [2026-07-04, 18:34:00](https://news.slashdot.org/story/26/07/04/0654252/fsf-shares-update-on-librephone-and-new-automated-site-monitoring-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Shares Update on &apos;LibrePhone&apos; and New Automated Site Monitoring Tool](https://news.slashdot.org/story/26/07/04/0654252/fsf-shares-update-on-librephone-and-new-automated-site-monitoring-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 18:25:49](https://lobste.rs/s/otepg9/immich_v3_0_0_released) - [Immich v3.0.0 Released](https://immich.app/blog/v3.0.0-release)
* [2026-07-04, 17:59:10](https://lobste.rs/s/d7mfza/thundersnap_v0_01_undo_button_for) - [thundersnap v0.01: an undo button for everything](https://github.com/tailscale/thundersnap/)
* [2026-07-04, 17:34:00](https://slashdot.org/story/26/07/04/0458242/aols-owner-bending-spoons-hits-wall-street-with-17-billion-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AOL&apos;s Owner Bending Spoons Hits Wall Street with $1.7 billion IPO](https://slashdot.org/story/26/07/04/0458242/aols-owner-bending-spoons-hits-wall-street-with-17-billion-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 17:17:28](https://news.ycombinator.com/item?id=48787042) - [\&quot;Beyond the limit\&quot;: Satellites and mirrors in space pose threat to the night sky](https://www.eso.org/public/news/eso2607/)
* [2026-07-04, 17:11:42](https://lobste.rs/s/ujjm68/game_boy_advance_dev_logging_console) - [Game Boy Advance Dev: Logging to the console](https://www.mattgreer.dev/blog/gba-dev-logging/)
* [2026-07-04, 16:51:26](https://news.ycombinator.com/item?id=48786838) - [Google Books (or similar) all book scans – $200k bounty (2025)](https://software.annas-archive.gl/AnnaArchivist/annas-archive/-/work_items/234)
* [2026-07-04, 16:45:10](https://news.ycombinator.com/item?id=48786781) - [Leaking YouTube creators&apos; private videos](https://javoriuski.com/post/youtube)
* [2026-07-04, 16:34:00](https://entertainment.slashdot.org/story/26/07/04/0355237/echostars-us-satellite-pay-tv-provider-dish-dbs-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EchoStar&apos;s US Satellite Pay-TV Provider Dish DBS Files for Bankruptcy](https://entertainment.slashdot.org/story/26/07/04/0355237/echostars-us-satellite-pay-tv-provider-dish-dbs-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 16:31:35](https://lobste.rs/s/t1rsta/gnu_emacs_architecture) - [The GNU Emacs Architecture](https://www.diva-portal.org/smash/get/diva2:2052282/FULLTEXT01.pdf)
* [2026-07-04, 16:30:10](https://news.ycombinator.com/item?id=48786638) - [Zig: All Package Management Functionality Moved from Compiler to Build System](https://ziglang.org/devlog/2026/#2026-06-30)
* [2026-07-04, 15:34:00](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decades-Old Bash Tricks Expose AI Coding Agents To Supply Chain Attacks](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 15:28:25](https://lobste.rs/s/ctulps/endbasic_0_14_are_we_multimedia_yet) - [EndBASIC 0.14: Are we multimedia yet?](https://www.endbasic.dev/2026/07/endbasic-0.14.html)
* [2026-07-04, 15:24:00](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss) - [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss)
* [2026-07-04, 15:20:06](https://lobste.rs/s/xfjchg/do_wavy_walls_really_use_fewer_bricks_i) - [Do Wavy Walls Really Use Fewer Bricks? I Tested It in Blender](https://blog.tymscar.com/posts/crinklecranklewalls/)
* [2026-07-04, 14:34:00](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Is a Quantum Computer Good For? Absolutely Nothing - Yet](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 14:03:40](https://news.ycombinator.com/item?id=48785485) - [Potential session/cache leakage between workspace instances or consumer accounts](https://github.com/anthropics/claude-code/issues/74066)
* [2026-07-04, 12:35:37](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026) - [Who&apos;s Hiring? - Support Edition - Q3 2026](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026)
* [2026-07-04, 12:28:37](https://lobste.rs/s/qmnpkm/freebsd_ate_my_ram) - [FreeBSD ate my ram](https://crocidb.com/post/freebsd-ate-my-ram/)
* [2026-07-04, 11:57:02](https://lobste.rs/s/be22hc/reducing_assumptions_exploding_your) - [Reducing Assumptions, Exploding Your Code](https://ryelang.org/blog/posts/reducing_assumptions_but_exploding/)
* [2026-07-04, 11:00:00](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Targets Datacenters With 3D-Printed Nuclear Reactor Module](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 10:42:00](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss) - [Sony Announces End of PlayStation Discs, Parts of Digital Store in the Same Day](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss)
* [2026-07-04, 09:16:24](https://lobste.rs/s/4tiool/what_should_personal_website_be) - [What should a personal website be?](https://ratfactor.com/cards/personal-website)
* [2026-07-04, 07:00:00](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game History Foundation Says Piracy Remains the Only Viable Preservation Method](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 05:54:00](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)
* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 04:07:54](https://lobste.rs/s/4e3g9a/why_don_t_people_use_git_properly) - [Why don&apos;t people use git properly?](https://deadsimpletech.com/blog/why-dont-people-use-git-properly)
* [2026-07-04, 02:00:00](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alibaba To Ban Claude Code In Workplace Over Alleged Backdoor Risks](https://slashdot.org/story/26/07/03/1645222/alibaba-to-ban-claude-code-in-workplace-over-alleged-backdoor-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
* [2026-07-03, 23:25:09](https://lobste.rs/s/wbpoiy/magit_4_6_released) - [Magit 4.6 released](https://emacsair.me/2026/07/01/magit-4.6/)
* [2026-07-03, 23:23:43](https://lobste.rs/s/fx5e0f/i_don_t_maintain_my_homelab) - [I Don&apos;t Maintain My Homelab](https://cleberg.net/blog/homelab-maintenance.html)
* [2026-07-03, 20:29:00](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss) - [Bombshell Lawsuit Alleges that RAM Manufacturers are Colluding to Drive Up Prices](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss)
* [2026-07-03, 20:00:00](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Open-Sources Steam Machine&apos;s E-Ink Display](https://news.slashdot.org/story/26/07/03/1633249/valve-open-sources-steam-machines-e-ink-display?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 15:49:00](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss) - [Polestar Faces A Ban On Selling Its EVs In The US](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss)
* [2026-07-03, 15:00:00](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New PamStealer macOS Malware Uses Clever Tradecraft To Remain Stealthy](https://apple.slashdot.org/story/26/07/02/2212244/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-03, 14:14:38](https://lobste.rs/s/zwz0wh/fourteener_lobsters) - [Fourteener Lobsters](https://lobste.rs/s/zwz0wh/fourteener_lobsters)
* [2026-07-03, 13:37:09](https://lobste.rs/s/1g5bum/why_implementing_activitypub_is_hard_why) - [Why implementing ActivityPub is hard, and why it doesn&apos;t have to be](https://hackers.pub/@fedify/2026/why-activitypub-is-hard)
* [2026-07-03, 10:57:00](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss) - [UN AI Great Risks and Rewards](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss)
* [2026-07-03, 09:52:51](https://news.ycombinator.com/item?id=48773079) - [Pandoc Lua Filters](https://pandoc.org/lua-filters.html)
* [2026-07-03, 06:14:00](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss) - [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss)
* [2026-07-03, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss) - [How to Burst the AI Bubble: Strike at its Roots](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss)
* [2026-07-02, 20:40:00](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)
* [2026-07-02, 19:03:54](https://news.ycombinator.com/item?id=48765920) - [Atomic Force Microscope high-speed video, stainless etching, bacteria, and more](https://www.youtube.com/watch?v=DyIQkqBXhS0)
* [2026-07-02, 15:58:00](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss) - [Remote-Controlled Cockroach Swarm Can Now Breathe Underwater](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss)
* [2026-07-02, 11:13:00](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss) - [Supreme Court Ruling Guts Government’s Use Of Geofence Warrants](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 18:23:45](https://news.ycombinator.com/item?id=48751144) - [Artful Cats: Feline-Inspired Art and Artifacts](https://www.si.edu/spotlight/art-cats)
* [2026-07-01, 17:30:58](https://news.ycombinator.com/item?id=48750405) - [Meta&apos;s Un-Stable Signature](https://hackerfactor.com/blog/index.php?/archives/1098-Metas-Un-Stable-Signature.html)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 13:16:53](https://news.ycombinator.com/item?id=48746249) - [The Particle Box – Kinetic Molecular Theory Simulator](https://prepok.com/chemistry/particle-box/)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 04:14:01](https://news.ycombinator.com/item?id=48742175) - [What ORMs have taught me: just learn SQL (2014)](https://wozniak.ca/blog/2014/08/03/1/index.html)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
