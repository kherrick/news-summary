# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technological Innovations

* [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Mark Zuckerberg has announced the development of an AI agent designed to assist him in his role as CEO.

* [Epoch confirms GPT5.4 Pro solved a frontier math open problem](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs) - Epoch AI has confirmed that the GPT5.4 Pro model has successfully solved a previously unsolved frontier mathematical problem.

* [Show HN: Cq – Stack Overflow for AI coding agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/) - Mozilla AI introduces 'Cq', a new platform tailored as a collaborative resource for AI coding agents.

* [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A discussion on how artificial intelligence tools might shape the future of source code development.

* [I built an AI receptionist for a mechanic shop](https://www.itsthatlady.dev/blog/building-an-ai-receptionist-for-my-brother/) - A personal account of how a developer created an AI-powered receptionist system for a family-run mechanic shop.

## Programming and Software Development

* [Box of Secrets: Discreetly modding an apartment intercom with Matter](https://www.jackhogan.me/blog/box-of-secrets/) - A creative exploration into modifying an apartment intercom using Matter for smart home automation.

* [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/) - A look at the Mouse programming language, which operates on the retro CP/M system.

* [Building ATS2 from Source in 2026](https://bluishcoder.co.nz/2026/03/23/building-ats2-from-source-in-2026/) - A detailed walkthrough on compiling the ATS2 programming language from source.

* [Guideline: Rust Style](https://epage.github.io/dev/rust-style/) - A guideline for writing clean, consistently styled Rust code.

* [Generators in lone lisp](https://www.matheusmoreira.com/articles/generators-in-lone-lisp) - A technical analysis of implementing generators in a lone Lisp environment.

## Unique Scientific Discoveries

* [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&from=rss) - Research into how Neanderthals used birch tar as an antiseptic to treat wounds shows advanced knowledge of medicinal practices.

* [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&from=rss) - A remarkable fungus has been discovered that causes water to freeze through the release of specific proteins.

* [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&from=rss) - Scientists found that certain musical vibrations can reduce the aggressiveness of laryngeal cancer cells.

## Cybersecurity and Tech Policy

* [The Resolv hack: How one compromised key printed $23M](https://www.chainalysis.com/blog/lessons-from-the-resolv-hack/) - An investigation into how a single compromised cryptographic key allowed hackers to mint $23 million worth of counterfeit crypto-tokens.

* [FCC updates covered list to include foreign-made consumer routers](https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers) - The FCC has expanded its covered products list to include certain foreign-made routers due to security concerns.

* [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise) - A widespread attack targeting GitHub Actions tags is putting sensitive developer secrets at risk.

## Energy and Environment

* [Cuba's Fragile Power Grid Finds a Powerful New Partner](https://oilprice.com/Energy/Energy-General/Cubas-Fragile-Power-Grid-Finds-a-Powerful-New-Partner.html) - An analysis of the partnerships being formed to address Cuba’s ailing power grid.

* [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reports suggest that the U.S. government will compensate a French company to halt offshore wind energy projects.

## Cultural and Historical Insights

* [Ju Ci: The Art of Repairing Porcelain](https://thesublimeblog.org/2025/03/13/ju-ci-the-ancient-art-of-repairing-porcelain/) - Exploring the ancient Chinese technique of repairing porcelain objects using creative and artistic methods.

* [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/) - A cultural reflection on how the Markdown format has influenced writing and online communication.

* [Pompeii's battle scars linked to an ancient 'machine gun'](https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html) - Examines evidence that Pompeii suffered damage from a machine gun-like weapon during ancient times.

## Retro and Nostalgia

* [Windows 3.1 tiled background .bmp archive](https://github.com/andreasjansson/win-3.1-backgrounds) - A nostalgic collection of tiled .bmp backgrounds from Windows 3.1.

* [A retro terminal music player inspired by Winamp](https://github.com/bjarneo/cliamp) - Modern terminal music software evokes nostalgia for Winamp’s classic interface.

* [BasicBox: A 486-class PC emulator written entirely in Visual Basic 6](https://github.com/mikechambers84/BasicBox) - A retro PC emulator replicates a 486-class computer, built using classic Visual Basic 6.

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

* [2026-03-24, 04:11:46](https://news.ycombinator.com/item?id=47498509) - [Box of Secrets: Discreetly modding an apartment intercom with Matter](https://www.jackhogan.me/blog/box-of-secrets/)
* [2026-03-24, 03:32:14](https://news.ycombinator.com/item?id=47498325) - [Cuba&apos;s Fragile Power Grid Finds a Powerful New Partner](https://oilprice.com/Energy/Energy-General/Cubas-Fragile-Power-Grid-Finds-a-Powerful-New-Partner.html)
* [2026-03-24, 03:30:00](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-24, 01:54:03](https://news.ycombinator.com/item?id=47497763) - [Sunsetting the Techempower Framework Benchmarks](https://github.com/TechEmpower/FrameworkBenchmarks/issues/10932)
* [2026-03-24, 01:53:09](https://news.ycombinator.com/item?id=47497757) - [Epoch confirms GPT5.4 Pro solved a frontier math open problem](https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs)
* [2026-03-24, 01:42:38](https://news.ycombinator.com/item?id=47497679) - [I created my first AI-assisted pull request](https://nelson.cloud/i-created-my-first-ai-assisted-pull-request-and-i-feel-like-a-fraud/)
* [2026-03-24, 01:41:33](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m) - [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/)
* [2026-03-24, 01:38:17](https://lobste.rs/s/9qmuj9/building_ats2_from_source_2026) - [Building ATS2 from Source in 2026](https://bluishcoder.co.nz/2026/03/23/building-ats2-from-source-in-2026/)
* [2026-03-23, 23:00:00](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Says He&apos;s &apos;Empathetic&apos; To DLSS 5 Concerns](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 22:58:41](https://lobste.rs/s/up2chu/rocksdb_development_finds_cpu_bug) - [RocksDB development finds a CPU bug](http://rocksdb.org/blog/2026/02/17/cpu-bug.html)
* [2026-03-23, 22:52:35](https://news.ycombinator.com/item?id=47496221) - [Windows 3.1 tiled background .bmp archive](https://github.com/andreasjansson/win-3.1-backgrounds)
* [2026-03-23, 22:37:15](https://news.ycombinator.com/item?id=47496089) - [IRIX 3dfx Voodoo driver and glide2x IRIX port](https://sdz-mods.com/index.php/2026/03/23/irix-3dfx-voodoo-driver-glide2x-irix-port/)
* [2026-03-23, 22:20:31](https://lobste.rs/s/pem3or/playbit_runtime) - [Playbit runtime](https://playbit.app/)
* [2026-03-23, 22:01:15](https://news.ycombinator.com/item?id=47495719) - [The Resolv hack: How one compromised key printed $23M](https://www.chainalysis.com/blog/lessons-from-the-resolv-hack/)
* [2026-03-23, 22:00:00](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bipartisan Bill Seeks To Ban Sports Betting On Prediction Market Platforms](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 21:44:20](https://news.ycombinator.com/item?id=47495527) - [Claude Code Cheat Sheet](https://cc.storyfox.cz)
* [2026-03-23, 21:32:59](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week)
* [2026-03-23, 21:28:02](https://news.ycombinator.com/item?id=47495344) - [FCC updates covered list to include foreign-made consumer routers](https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers)
* [2026-03-23, 21:00:00](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wing Expands Its Drone Delivery Service To the Bay Area](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 20:49:10](https://news.ycombinator.com/item?id=47494890) - [How I&apos;m Productive with Claude Code](https://neilkakkar.com/productive-with-claude-code.html)
* [2026-03-23, 20:46:56](https://lobste.rs/s/r6ul1w/pony_gets_template_engine) - [Pony Gets a Template Engine](https://www.ponylang.io/blog/2026/03/pony-gets-a-template-engine/)
* [2026-03-23, 20:42:22](https://news.ycombinator.com/item?id=47494821) - [A retro terminal music player inspired by Winamp](https://github.com/bjarneo/cliamp)
* [2026-03-23, 20:38:43](https://lobste.rs/s/836yvd/basicbox_486_class_pc_emulator_written) - [BasicBox: A 486-class PC emulator written entirely in Visual Basic 6](https://github.com/mikechambers84/BasicBox)
* [2026-03-23, 20:09:54](https://lobste.rs/s/msgigh/guideline_rust_style) - [Guideline: Rust Style](https://epage.github.io/dev/rust-style/)
* [2026-03-23, 20:00:00](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Prepares To Add Search Ads To Apple Maps](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 19:11:08](https://lobste.rs/s/joe31h/tla_mental_models) - [TLA+ mental models](http://muratbuffalo.blogspot.com/2026/03/tla-mental-models.html)
* [2026-03-23, 19:00:00](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 18:57:08](https://news.ycombinator.com/item?id=47493657) - [Local Stack Archived their GitHub repo and requires an account to run](https://github.com/localstack/localstack)
* [2026-03-23, 18:43:27](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library) - [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)
* [2026-03-23, 18:40:58](https://news.ycombinator.com/item?id=47493460) - [Autoresearch on an old research idea](https://ykumar.me/blog/eclip-autoresearch/)
* [2026-03-23, 18:00:00](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 17:00:00](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart: ChatGPT Checkout Converted 3x Worse Than Website](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:59:04](https://lobste.rs/s/jmfor8/from_error_handling_structured) - [From error-handling to structured concurrency](https://blog.nelhage.com/post/concurrent-error-handling/)
* [2026-03-23, 16:32:05](https://lobste.rs/s/e42ezg/arturo_programming_language) - [Arturo programming language](https://arturo-lang.io/)
* [2026-03-23, 16:30:00](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyFans Owner Dies At 43](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:11:03](https://news.ycombinator.com/item?id=47491466) - [Show HN: Cq – Stack Overflow for AI coding agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/)
* [2026-03-23, 16:00:00](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber&apos;s Deal Blitz To Stop a Robotaxi Monopoly](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 15:13:22](https://news.ycombinator.com/item?id=47490648) - [An incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 15:04:47](https://lobste.rs/s/7dzkuh/generators_lone_lisp) - [Generators in lone lisp](https://www.matheusmoreira.com/articles/generators-in-lone-lisp)
* [2026-03-23, 14:34:00](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Is Weighing Identity Verification Methods To Combat Its Bot Problem](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 14:30:45](https://lobste.rs/s/tuyk3l/semi_retirement_really_changing_my) - [Semi-retirement, or, really, changing my relationship with the BSDs](https://briancallahan.net/blog/20260322.html)
* [2026-03-23, 14:30:10](https://news.ycombinator.com/item?id=47490070) - [iPhone 17 Pro Demonstrated Running a 400B LLM](https://twitter.com/anemll/status/2035901335984611412)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 12:18:32](https://lobste.rs/s/1umutj/designing_spatula_haskell) - [Designing a Spatula (in Haskell)](https://www.youtube.com/watch?v=R_uQ7Y31e50)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 11:54:39](https://lobste.rs/s/cwdzd6/gram_1_1_0_released) - [Gram 1.1.0 released](https://gram.liten.app/posts/release-1-1-0/)
* [2026-03-23, 11:15:11](https://lobste.rs/s/xsrgdn/gren_26_03_parser_improvements) - [Gren 26.03: Parser improvements](https://gren-lang.org/news/260323_gren_26_03)
* [2026-03-23, 10:34:00](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 10:32:33](https://news.ycombinator.com/item?id=47487536) - [I built an AI receptionist for a mechanic shop](https://www.itsthatlady.dev/blog/building-an-ai-receptionist-for-my-brother/)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-23, 08:10:20](https://lobste.rs/s/sndfxf/way_ctrl_c_postgres_cli_cancels_queries_is) - [The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y](https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies)
* [2026-03-23, 07:55:41](https://news.ycombinator.com/item?id=47486520) - [Scott Hanselman says he&apos;s working on Windows local accounts](https://twitter.com/shanselman/status/2035110958314745891)
* [2026-03-23, 07:34:00](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 07:24:19](https://news.ycombinator.com/item?id=47486386) - [Two pilots dead after plane and ground vehicle collide at LaGuardia](https://www.bbc.com/news/articles/cy01g522ww4o)
* [2026-03-23, 04:34:00](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Microsoft Insiders Fight to Drop Windows 11&apos;s Microsoft Account Requirements](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-23, 01:34:00](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Announces Digital Price Labels for Every Store in the U.S. By the End of 2026](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 22:32:15](https://lobste.rs/s/n1h2tl/is_local_future_ai) - [Is Local the Future of AI?](https://tombedor.dev/open-source-models/)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 16:38:38](https://lobste.rs/s/702zix/let_s_see_paul_allen_s_simd_csv_parser) - [Let&apos;s see Paul Allen&apos;s SIMD CSV parser](https://chunkofcoal.com/posts/simd-csv/)
* [2026-03-22, 16:18:42](https://lobste.rs/s/qhtpe5/slow_collapse_mkdocs) - [The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 09:45:14](https://news.ycombinator.com/item?id=47475888) - [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)
* [2026-03-22, 08:06:18](https://news.ycombinator.com/item?id=47475417) - [Dune3d: A parametric 3D CAD application](https://github.com/dune3d/dune3d)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 15:07:29](https://news.ycombinator.com/item?id=47467719) - [Ju Ci: The Art of Repairing Porcelain](https://thesublimeblog.org/2025/03/13/ju-ci-the-ancient-art-of-repairing-porcelain/)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 19:20:49](https://news.ycombinator.com/item?id=47459363) - [BIO: The Bao I/O Coprocessor](https://www.bunniestudios.com/blog/2026/bio-the-bao-i-o-coprocessor/)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:02:00](https://news.ycombinator.com/item?id=47453398) - [Pompeii&apos;s battle scars linked to an ancient &apos;machine gun&apos;](https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-20, 02:33:34](https://news.ycombinator.com/item?id=47449741) - [TI-89 Height-Mapped Raycaster](https://github.com/dzoba/ti-89-raycasting-with-z)
