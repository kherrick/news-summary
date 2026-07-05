# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Privacy

* [GoDaddy Warns India's Crackdown on Fake Site Registrars Could Upend Internet Privacy Everywhere](https://tech.slashdot.org/story/26/07/05/0526213/godaddy-warns-indias-crackdown-on-fake-site-registrars-could-upend-internet-privacy-everywhere?utm_source=rss1.0mainlinkanon&utm_medium=feed) - GoDaddy highlights concerns about India's recent measures targeting fake domain registrars, emphasizing potential repercussions for global internet privacy.

* [EU Council forces Chat Control via fast-track](https://www.heise.de/en/news/Chat-Control-1-0-EU-Council-forces-messenger-scans-via-fast-track-11353659.html) - The EU Council moves forward with regulations requiring chat platforms to scan messages, sparking privacy concerns.

## Artificial Intelligence Advancements

* [It's Looking Like a Hot, Messy Summer for Security Teams as AI Finds Hidden Vulnerabilities](https://soylentnews.org/article.pl?sid=26/07/04/0653237&from=rss) - AI's capabilities to discover concealed cybersecurity vulnerabilities pose challenges for security defenses.

* [61% of US Adults Use AI for Health Information Now - Up From 2% in 2024](https://soylentnews.org/article.pl?sid=26/07/04/074205&from=rss) - Analyzing the dramatic growth in AI adoption for health-related queries among US adults.

## Sustainability and Innovations

* [EV Batteries Defy Expectations, Last Hundreds of Thousands of Miles](https://tech.slashdot.org/story/26/07/05/0434229/ev-batteries-defy-expectations-last-hundreds-of-thousands-of-miles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New findings reveal extended durability of EV batteries, surpassing prior expectations.

* [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&from=rss) - A DIY-friendly open-source robot vacuum design that can be 3D-printed at home.

## Historical Insights and Cultural Studies

* [Hobbit-like Humans May Have Scavenged Komodo Dragons' Leftovers to Survive](https://entertainment.slashdot.org/story/26/07/04/0756247/hobbit-like-humans-may-have-scavenged-komodo-dragons-leftovers-to-survive?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigating how prehistoric human species might have adapted their survival strategies.

* [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&from=rss) - A compelling look at medieval technologies that continue to influence contemporary society.

## Scientific Breakthroughs

* [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&from=rss) - The LHC is being phased out for an improved model to advance particle physics research.

* [New DNA Tech Identifies Soldier Killed in America's Revolution in 1780](https://news.slashdot.org/story/26/07/04/208217/new-dna-tech-identifies-soldier-killed-in-americas-revolution-in-1780?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough DNA technology solves historical mysteries, identifying a Revolutionary War soldier.

## Software and Development Tools

* [Show HN: KiCad in the Browser](https://demo.pcbjam.com/) - Bringing PCB design capabilities into web browsers with an interactive KiCad demo.

* [Introduction to Compilers and Language Design](https://dthain.github.io/books/compiler/) - A beginner-friendly guide to understanding compiler design and language software.

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

* [2026-07-05, 15:34:00](https://tech.slashdot.org/story/26/07/05/0526213/godaddy-warns-indias-crackdown-on-fake-site-registrars-could-upend-internet-privacy-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GoDaddy Warns India&apos;s Crackdown on Fake Site Registrars Could Upend Internet Privacy Everywhere](https://tech.slashdot.org/story/26/07/05/0526213/godaddy-warns-indias-crackdown-on-fake-site-registrars-could-upend-internet-privacy-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 14:14:30](https://news.ycombinator.com/item?id=48794446) - [Organic Maps](https://organicmaps.app/)
* [2026-07-05, 14:02:00](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss) - [61% of US Adults Use AI for Health Information Now - Up From 2% in 2024](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss)
* [2026-07-05, 13:28:11](https://news.ycombinator.com/item?id=48794179) - [Phosh 0.56.0](https://phosh.mobi/releases/rel-0.56.0/)
* [2026-07-05, 12:34:00](https://tech.slashdot.org/story/26/07/05/0434229/ev-batteries-defy-expectations-last-hundreds-of-thousands-of-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Batteries Defy Expectations, Last Hundreds of Thousands of Miles](https://tech.slashdot.org/story/26/07/05/0434229/ev-batteries-defy-expectations-last-hundreds-of-thousands-of-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 12:06:57](https://news.ycombinator.com/item?id=48793542) - [Show HN: KiCad in the Browser](https://demo.pcbjam.com/)
* [2026-07-05, 11:59:27](https://news.ycombinator.com/item?id=48793492) - [Cannabis Users Face Substantially Higher Risk of Heart Attack (2025)](https://www.acc.org/about-acc/press-releases/2025/03/17/15/35/cannabis-users-face-substantially-higher-risk)
* [2026-07-05, 11:54:16](https://news.ycombinator.com/item?id=48793454) - [Introduction to Compilers and Language Design](https://dthain.github.io/books/compiler/)
* [2026-07-05, 11:44:04](https://news.ycombinator.com/item?id=48793393) - [EU Council forces Chat Control via fast-track](https://www.heise.de/en/news/Chat-Control-1-0-EU-Council-forces-messenger-scans-via-fast-track-11353659.html)
* [2026-07-05, 11:30:14](https://news.ycombinator.com/item?id=48793298) - [Spain&apos;s cadastre API is SOAP from 2003, so I built a JSON wrapper (+MCP)](https://prediohq.com/)
* [2026-07-05, 10:50:53](https://news.ycombinator.com/item?id=48793073) - [Pi square is nearly 10](https://mihai.page/pi-square-is-10/)
* [2026-07-05, 10:00:49](https://lobste.rs/s/k9yyfs/abi_vs_api_2004) - [ABI vs. API (2004)](https://lists.debian.org/debian-user/2004/02/msg00648.html)
* [2026-07-05, 09:49:19](https://lobste.rs/s/q8eiqk/how_is_zig_working_out_after_3_years_100k) - [How is Zig working out after 3 years and 100k lines of game code?](https://www.youtube.com/watch?v=HXpUShkr2VQ)
* [2026-07-05, 09:21:00](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss) - [It&apos;s Looking Like a Hot, Messy Summer for Security Teams as AI Finds Hidden Vulnerabilities](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss)
* [2026-07-05, 08:43:37](https://news.ycombinator.com/item?id=48792399) - [Claude Design System Prompt](https://github.com/Trystan-SA/claude-design-system-prompt)
* [2026-07-05, 08:34:00](https://entertainment.slashdot.org/story/26/07/04/0756247/hobbit-like-humans-may-have-scavenged-komodo-dragons-leftovers-to-survive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hobbit-like Humans May Have Scavenged Komodo Dragons&apos; Leftovers to Survive ](https://entertainment.slashdot.org/story/26/07/04/0756247/hobbit-like-humans-may-have-scavenged-komodo-dragons-leftovers-to-survive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 08:24:06](https://lobste.rs/s/zhizsf/if_you_re_button_you_have_one_job) - [If you’re a button, you have one job](https://unsung.aresluna.org/if-youre-a-button-you-have-one-job/)
* [2026-07-05, 07:59:48](https://news.ycombinator.com/item?id=48792195) - [Knowledge Should Not Be Gated](https://www.formaly.io/blog/knowledge-should-not-be-gated)
* [2026-07-05, 07:25:25](https://news.ycombinator.com/item?id=48792008) - [Fast Software, the Best Software (2019)](https://craigmod.com/essays/fast_software/)
* [2026-07-05, 07:05:45](https://lobste.rs/s/ai5zlv/small_details_my_mastodon_client_i_wanted) - [small details in my mastodon client that i wanted more people to notice](https://w.on-t.work/outpost-frontend-details)
* [2026-07-05, 06:52:10](https://lobste.rs/s/nzifa8/pep_814_add_frozendict_built_type) - [PEP 814: Add frozendict built-in type](https://vstinner.github.io/pep-814-add-frozendict-builtin-type.html)
* [2026-07-05, 05:56:03](https://news.ycombinator.com/item?id=48791591) - [Megawatts by Microwave](https://computer.rip/2026-07-04-microwave-and-power.html)
* [2026-07-05, 05:34:00](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)
* [2026-07-05, 04:46:08](https://news.ycombinator.com/item?id=48791328) - [Shadcn/UI now defaults to Base UI instead of Radix](https://ui.shadcn.com/docs/changelog)
* [2026-07-05, 04:34:00](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Google Ad Imagines America&apos;s &apos;Declaration of Independence&apos; Written With AI Help](https://hardware.slashdot.org/story/26/07/05/0417243/new-google-ad-imagines-americas-declaration-of-independence-written-with-ai-help?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 04:30:33](https://news.ycombinator.com/item?id=48791266) - [Moby Dick Workout (2022)](https://www.hogbaysoftware.com/posts/moby-dick-workout/)
* [2026-07-05, 03:13:15](https://lobste.rs/s/jchp72/scheme_is_hoot) - [Scheme is a Hoot](https://gracefulliberty.com/notes/scheme-is-a-hoot/)
* [2026-07-05, 02:57:38](https://news.ycombinator.com/item?id=48790912) - [The Log is the Agent](https://arxiv.org/abs/2605.21997)
* [2026-07-05, 02:01:03](https://news.ycombinator.com/item?id=48790689) - [If you&apos;re a button, you have one job](https://unsung.aresluna.org/if-youre-a-button-you-have-one-job/)
* [2026-07-05, 01:34:00](https://yro.slashdot.org/story/26/07/04/1945242/are-wars-blurring-lines-between-corporate-and-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Wars Blurring Lines Between Corporate and National Security?](https://yro.slashdot.org/story/26/07/04/1945242/are-wars-blurring-lines-between-corporate-and-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-05, 00:48:00](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss) - [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss)
* [2026-07-05, 00:22:25](https://news.ycombinator.com/item?id=48790240) - [Return of the Nigerian Prince Redux: Beware Book Club and Book Review Scams (2025)](https://writerbeware.blog/2025/09/19/return-of-the-nigerian-prince-redux-beware-book-club-and-book-review-scams/)
* [2026-07-04, 21:51:19](https://lobste.rs/s/yrmpxy/better_models_worse_tools) - [Better Models: Worse Tools](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)
* [2026-07-04, 21:51:09](https://news.ycombinator.com/item?id=48789428) - [GPT-5.5 Codex reasoning-token clustering may be leading to degraded performance](https://github.com/openai/codex/issues/30364)
* [2026-07-04, 21:37:21](https://lobste.rs/s/svm2dp/returning_zig) - [Returning to Zig](https://gracefulliberty.com/articles/return-to-zig/)
* [2026-07-04, 21:34:00](https://news.slashdot.org/story/26/07/04/208217/new-dna-tech-identifies-soldier-killed-in-americas-revolution-in-1780?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New DNA Tech Identifies Soldier Killed in America&apos;s Revolution in 1780](https://news.slashdot.org/story/26/07/04/208217/new-dna-tech-identifies-soldier-killed-in-americas-revolution-in-1780?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 20:41:03](https://lobste.rs/s/5akjfx/lion_witch_audacity_recruiters) - [The Lion, The Witch, and the audacity of recruiters](https://hauleth.dev/post/the-lion-the-witch-and-the-aduacity-of-recruiter/)
* [2026-07-04, 20:34:00](https://news.slashdot.org/story/26/07/04/2031258/842000-american-households-lost-power-today-during-a-heatwave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [842,000 American Households Lost Power Today During a Heatwave](https://news.slashdot.org/story/26/07/04/2031258/842000-american-households-lost-power-today-during-a-heatwave?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 20:05:00](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss) - [NASA Unsure Boeing Starliner Will Ever Be Certified For Human Flight](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss)
* [2026-07-04, 19:41:10](https://news.ycombinator.com/item?id=48788283) - [Command and Conquer Generals natively ported to macOS, iPhone, iPad using Fable](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad/tree/main)
* [2026-07-04, 19:34:00](https://yro.slashdot.org/story/26/07/04/193215/did-microsoft-shift-its-profits-to-low-tax-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Microsoft Shift Its Profits to Low-Tax Countries?](https://yro.slashdot.org/story/26/07/04/193215/did-microsoft-shift-its-profits-to-low-tax-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 18:50:46](https://lobste.rs/s/utznd2/we_need_way_prove_personhood_online) - [We Need A Way To Prove Personhood Online](https://www.noemamag.com/we-need-a-way-to-prove-personhood-online)
* [2026-07-04, 18:40:52](https://lobste.rs/s/dbopp5/diy_risc_v_ultracluster) - [DIY RISC-V ultracluster](https://youtube.com/watch?v=qMR3IXF2sWw)
* [2026-07-04, 18:34:00](https://news.slashdot.org/story/26/07/04/0654252/fsf-shares-update-on-librephone-and-new-automated-site-monitoring-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Shares Update on &apos;LibrePhone&apos; and New Automated Site Monitoring Tool](https://news.slashdot.org/story/26/07/04/0654252/fsf-shares-update-on-librephone-and-new-automated-site-monitoring-tool?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 18:30:17](https://lobste.rs/s/gylztp/thoughts_on_coding_agents) - [Thoughts on coding agents](https://rakyll.org/coding-agents/)
* [2026-07-04, 17:34:00](https://slashdot.org/story/26/07/04/0458242/aols-owner-bending-spoons-hits-wall-street-with-17-billion-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AOL&apos;s Owner Bending Spoons Hits Wall Street with $1.7 billion IPO](https://slashdot.org/story/26/07/04/0458242/aols-owner-bending-spoons-hits-wall-street-with-17-billion-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 17:17:28](https://news.ycombinator.com/item?id=48787042) - [“Beyond the limit”: Satellites and mirrors in space pose threat to the night sky](https://www.eso.org/public/news/eso2607/)
* [2026-07-04, 17:16:43](https://lobste.rs/s/07ka0h/counterexample_wegner_s_conjecture_for) - [A Counterexample to Wegner&apos;s Conjecture for Axis-Parallel Rectangles](https://arxiv.org/abs/2606.17854)
* [2026-07-04, 17:11:42](https://lobste.rs/s/ujjm68/game_boy_advance_dev_logging_console) - [Game Boy Advance Dev: Logging to the console](https://www.mattgreer.dev/blog/gba-dev-logging/)
* [2026-07-04, 16:34:00](https://entertainment.slashdot.org/story/26/07/04/0355237/echostars-us-satellite-pay-tv-provider-dish-dbs-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EchoStar&apos;s US Satellite Pay-TV Provider Dish DBS Files for Bankruptcy](https://entertainment.slashdot.org/story/26/07/04/0355237/echostars-us-satellite-pay-tv-provider-dish-dbs-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 16:31:35](https://lobste.rs/s/t1rsta/gnu_emacs_architecture) - [The GNU Emacs Architecture](https://www.diva-portal.org/smash/get/diva2:2052282/FULLTEXT01.pdf)
* [2026-07-04, 15:53:08](https://news.ycombinator.com/item?id=48786284) - [Airplane Boneyards List and Map](https://airplaneboneyards.com/airplane-boneyards-list-and-map.htm)
* [2026-07-04, 15:34:00](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decades-Old Bash Tricks Expose AI Coding Agents To Supply Chain Attacks](https://linux.slashdot.org/story/26/07/04/0325244/decades-old-bash-tricks-expose-ai-coding-agents-to-supply-chain-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 15:28:25](https://lobste.rs/s/ctulps/endbasic_0_14_are_we_multimedia_yet) - [EndBASIC 0.14: Are we multimedia yet?](https://www.endbasic.dev/2026/07/endbasic-0.14.html)
* [2026-07-04, 15:24:00](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss) - [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss)
* [2026-07-04, 15:20:06](https://lobste.rs/s/xfjchg/do_wavy_walls_really_use_fewer_bricks_i) - [Do Wavy Walls Really Use Fewer Bricks? I Tested It in Blender](https://blog.tymscar.com/posts/crinklecranklewalls/)
* [2026-07-04, 14:34:00](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Is a Quantum Computer Good For? Absolutely Nothing - Yet](https://science.slashdot.org/story/26/07/04/0232223/what-is-a-quantum-computer-good-for-absolutely-nothing---yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 12:35:37](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026) - [Who&apos;s Hiring? - Support Edition - Q3 2026](https://lobste.rs/s/0zha79/who_s_hiring_support_edition_q3_2026)
* [2026-07-04, 11:57:02](https://lobste.rs/s/be22hc/reducing_assumptions_exploding_your) - [Reducing Assumptions, Exploding Your Code](https://ryelang.org/blog/posts/reducing_assumptions_but_exploding/)
* [2026-07-04, 11:00:00](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Targets Datacenters With 3D-Printed Nuclear Reactor Module](https://hardware.slashdot.org/story/26/07/03/1657240/startup-targets-datacenters-with-3d-printed-nuclear-reactor-module?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 10:42:00](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss) - [Sony Announces End of PlayStation Discs, Parts of Digital Store in the Same Day](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss)
* [2026-07-04, 09:16:24](https://lobste.rs/s/4tiool/what_should_personal_website_be) - [What should a personal website be?](https://ratfactor.com/cards/personal-website)
* [2026-07-04, 07:00:00](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game History Foundation Says Piracy Remains the Only Viable Preservation Method](https://games.slashdot.org/story/26/07/03/1652234/video-game-history-foundation-says-piracy-remains-the-only-viable-preservation-method?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-04, 05:54:00](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)
* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 03:40:25](https://lobste.rs/s/qxorqp/very_average_prototypes) - [Very Average Prototypes](https://goodnameforablog.com/posts/very-average-prototypes/)
* [2026-07-04, 02:08:59](https://lobste.rs/s/suucvi/suffix_bwt_vs_cyclic_shift_bwt_fast) - [Suffix BWT vs cyclic shift BWT, and fast computation](https://purplesyringa.moe/blog/suffix-bwt-vs-cyclic-shift-bwt-and-fast-computation/)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
* [2026-07-03, 21:49:26](https://lobste.rs/s/i7klfz/my_favorite_keyboards) - [My favorite keyboards](https://fabiensanglard.net/keyboards/index.html)
* [2026-07-03, 20:29:00](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss) - [Bombshell Lawsuit Alleges that RAM Manufacturers are Colluding to Drive Up Prices](https://soylentnews.org/article.pl?sid=26/07/02/0510215&amp;from=rss)
* [2026-07-03, 16:39:02](https://lobste.rs/s/skwy7v/goodbye_forever_probably) - [Goodbye, forever, probably](https://whitep4nth3r.com/blog/goodbye-forever-probably/)
* [2026-07-03, 15:49:00](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss) - [Polestar Faces A Ban On Selling Its EVs In The US](https://soylentnews.org/article.pl?sid=26/07/02/058229&amp;from=rss)
* [2026-07-03, 14:14:38](https://lobste.rs/s/zwz0wh/fourteener_lobsters) - [Fourteener Lobsters](https://lobste.rs/s/zwz0wh/fourteener_lobsters)
* [2026-07-03, 10:57:00](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss) - [UN AI Great Risks and Rewards](https://soylentnews.org/article.pl?sid=26/07/02/0458244&amp;from=rss)
* [2026-07-03, 09:52:51](https://news.ycombinator.com/item?id=48773079) - [Pandoc Lua Filters](https://pandoc.org/lua-filters.html)
* [2026-07-03, 06:14:00](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss) - [Six-part Series from the Internet Archive on Vanishing Culture](https://soylentnews.org/article.pl?sid=26/07/02/0455216&amp;from=rss)
* [2026-07-03, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss) - [How to Burst the AI Bubble: Strike at its Roots](https://soylentnews.org/article.pl?sid=26/07/02/0453224&amp;from=rss)
* [2026-07-02, 20:40:00](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss) - [NASA Tests An In-Orbit Refueling Device For Deep Space Missions](https://soylentnews.org/article.pl?sid=26/07/01/0621219&amp;from=rss)
* [2026-07-02, 19:03:54](https://news.ycombinator.com/item?id=48765920) - [Atomic Force Microscope [video]](https://www.youtube.com/watch?v=DyIQkqBXhS0)
* [2026-07-02, 15:58:00](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss) - [Remote-Controlled Cockroach Swarm Can Now Breathe Underwater](https://soylentnews.org/article.pl?sid=26/07/01/0619241&amp;from=rss)
* [2026-07-02, 11:13:00](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss) - [Supreme Court Ruling Guts Government’s Use Of Geofence Warrants](https://soylentnews.org/article.pl?sid=26/07/01/0613242&amp;from=rss)
* [2026-07-02, 11:12:12](https://news.ycombinator.com/item?id=48759579) - [Functional Programming in hica](https://www.hica.dev/docs/functional-programming/)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 18:23:45](https://news.ycombinator.com/item?id=48751144) - [Artful Cats: Feline-Inspired Art and Artifacts](https://www.si.edu/spotlight/art-cats)
* [2026-07-01, 17:30:58](https://news.ycombinator.com/item?id=48750405) - [Meta&apos;s Un-Stable Signature](https://hackerfactor.com/blog/index.php?/archives/1098-Metas-Un-Stable-Signature.html)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 14:47:06](https://news.ycombinator.com/item?id=48747733) - [The GNU Emacs Architecture: Unlocking the Core [pdf]](https://www.diva-portal.org/smash/get/diva2:2052282/FULLTEXT01.pdf)
* [2026-07-01, 14:00:15](https://news.ycombinator.com/item?id=48746933) - [Trust your compiler: Modern C++](https://categorica.io/blog/2026.06.29_trust_your_compiler/)
* [2026-07-01, 13:49:59](https://news.ycombinator.com/item?id=48746771) - [Medieval-style fortifications are back in the Sahel](https://www.economist.com/middle-east-and-africa/2026/06/25/medieval-style-fortifications-are-back-in-the-sahel)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 04:14:01](https://news.ycombinator.com/item?id=48742175) - [What ORMs have taught me: just learn SQL (2014)](https://wozniak.ca/blog/2014/08/03/1/index.html)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
