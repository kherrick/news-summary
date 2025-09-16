# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Live Updates: Shai-Hulud, the Most Dangerous NPM Breach in History](https://www.koi.security/blog/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor) - Live updates on an unprecedented NPM supply chain attack involving 'Shai-Hulud', highlighting its implications for developers and package security. [Comments](https://news.ycombinator.com/item?id=45265937)

* [Show HN: AI Code Detector – detect AI-generated code with 95% accuracy](https://code-detector.ai/) - A new tool aiming to identify AI-generated code with high accuracy. Useful for code auditing and verification. [Comments](https://news.ycombinator.com/item?id=45265831)

* [Microsoft Favors Anthropic over OpenAI for Visual Studio Code](https://www.theverge.com/report/778641/microsoft-visual-studio-code-anthropic-claude-4) - A surprising move by Microsoft as it integrates AI features from Anthropic Claude4 within Visual Studio Code, shifting focus away from OpenAI. [Comments](https://news.ycombinator.com/item?id=45263063)

* [Gearbox CEO Randy Pitchford Tells Borderlands 4 Critics To 'Code Your Own Engine,' Calls It a Game For 'Premium Gamers'](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversial comments from the Gearbox CEO responding to criticism of Borderlands 4's game engine. [Comments](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A New Experimental Google App for Windows](https://blog.google/products/search/google-app-windows-labs/) - Google unveils a Windows app in beta testing, teasing new search features and integrations for desktop environments. [Comments](https://news.ycombinator.com/item?id=45263317)

## Cybersecurity Breaches

* [Scammed Out of $130K via Fake Google Call, Spoofed Google Email and Auth Sync](https://bewildered.substack.com/p/i-was-scammed-out-of-130000-and-google) - A detailed account of a high-value scam exploiting Google's authentication mechanisms. [Comments](https://news.ycombinator.com/item?id=45264726)

* [Self Propagating NPM Malware](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised) - Coverage of malware in NPM packages affecting over 40 dependencies, raising concerns in the developer ecosystem. [Comments](https://news.ycombinator.com/item?id=45260741)

## Scientific Discoveries

* [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - Researchers achieve breakthrough observation of atomic-level magnetic switching, a potential leap for quantum computing. [Comments](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - New revelations from Mars exploration offer the strongest evidence yet of extraterrestrial life. [Comments](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)

## Historical Perspectives

* [Adios Chicos, 25 Years of KDE](https://jriddell.org/2025/09/14/adios-chicos-25-years-of-kde/) - KDE celebrates its 25-year legacy in the world of open-source computing. [Comments](https://news.ycombinator.com/item?id=45265881)

* [Development of the MOS Technology 6502: A Historical Perspective (2022)](https://www.EmbeddedRelated.com/showarticle/1453.php) - A retrospective on the development of the iconic 6502 microprocessor that revolutionized computing. [Comments](https://news.ycombinator.com/item?id=45263221)

## Industry Changes

* [Apollo Explores Sale of Internet Pioneer AOL](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AOL's parent company evaluates the potential sale of the once-dominant internet giant. [Comments](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Online Marketplace Fiverr To Lay Off 30% of Workforce In AI Push](https://slashdot.org/story/25/09/15/2344215/online-marketplace-fiverr-to-lay-off-30-of-workforce-in-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Fiverr announces major layoffs amidst a strategic shift toward AI-driven services. [Comments](https://slashdot.org/story/25/09/15/2344215/online-marketplace-fiverr-to-lay-off-30-of-workforce-in-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-09-16, 18:41:00](https://tech.slashdot.org/story/25/09/16/1832209/nature-editorial-calls-for-rail-renaissance-as-networks-mark-200-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Editorial Calls for Rail Renaissance as Networks Mark 200 Years](https://tech.slashdot.org/story/25/09/16/1832209/nature-editorial-calls-for-rail-renaissance-as-networks-mark-200-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 18:26:32](https://news.ycombinator.com/item?id=45265937) - [Live Updates: Shai-Hulud, the Most Dangerous NPM Breach in History](https://www.koi.security/blog/shai-hulud-npm-supply-chain-attack-crowdstrike-tinycolor)
* [2025-09-16, 18:22:22](https://news.ycombinator.com/item?id=45265881) - [Adios Chicos, 25 Years of KDE](https://jriddell.org/2025/09/14/adios-chicos-25-years-of-kde/)
* [2025-09-16, 18:18:56](https://news.ycombinator.com/item?id=45265831) - [Show HN: AI Code Detector – detect AI-generated code with 95% accuracy](https://code-detector.ai/)
* [2025-09-16, 18:02:00](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gearbox CEO Randy Pitchford Tells Borderlands 4 Critics To &apos;Code Your Own Engine,&apos; Calls It a Game For &apos;Premium Gamers&apos;](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 18:01:42](https://news.ycombinator.com/item?id=45265610) - [The Linux Process Journey [pdf]](https://thelearningjourneyebooks.com/wp-content/uploads/2023/09/TheLinuxProcessJourney_v6_Sep2023.pdf)
* [2025-09-16, 17:23:00](https://news.slashdot.org/story/25/09/16/1722223/perceived-importance-of-college-hits-new-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perceived Importance of College Hits New Low](https://news.slashdot.org/story/25/09/16/1722223/perceived-importance-of-college-hits-new-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 17:01:16](https://news.ycombinator.com/item?id=45264867) - [Launch HN: Rowboat (YC S24) – Open-source IDE for multi-agent systems](https://github.com/rowboatlabs/rowboat)
* [2025-09-16, 16:50:42](https://news.ycombinator.com/item?id=45264726) - [Scammed out of $130K via fake Google call, spoofed Google email and auth sync](https://bewildered.substack.com/p/i-was-scammed-out-of-130000-and-google)
* [2025-09-16, 16:40:00](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo Explores Sale of Internet Pioneer AOL](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 16:38:08](https://news.ycombinator.com/item?id=45264562) - [Waymo has received our pilot permit allowing for commercial operations at SFO](https://waymo.com/blog/#short-all-systems-go-at-sfo-waymo-has-received-our-pilot-permit)
* [2025-09-16, 16:22:40](https://news.ycombinator.com/item?id=45264340) - [Bertrand Russell to Oswald Mosley (1962)](https://lettersofnote.com/2016/02/02/every-ounce-of-my-energy/)
* [2025-09-16, 16:10:44](https://news.ycombinator.com/item?id=45264190) - [Plugin System](https://iina.io/plugins/)
* [2025-09-16, 16:04:18](https://news.ycombinator.com/item?id=45264094) - [Will I run Boston 2026?](https://getfast.ai/blogs/boston-2026)
* [2025-09-16, 16:01:00](https://slashdot.org/story/25/09/16/0842248/zoom-ceo-latest-executive-to-forecast-shortened-workweeks-from-ai-adoption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zoom CEO Latest Executive To Forecast Shortened Workweeks From AI Adoption](https://slashdot.org/story/25/09/16/0842248/zoom-ceo-latest-executive-to-forecast-shortened-workweeks-from-ai-adoption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 15:21:00](https://news.slashdot.org/story/25/09/16/0813250/mbas-cost-more-and-are-less-profitable-as-roi-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MBAs Cost More and Are Less Profitable as ROI Falls](https://news.slashdot.org/story/25/09/16/0813250/mbas-cost-more-and-are-less-profitable-as-roi-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 15:17:16](https://lobste.rs/s/cnh1si/java_25) - [Java 25](https://openjdk.org/projects/jdk/25/)
* [2025-09-16, 15:05:46](https://news.ycombinator.com/item?id=45263317) - [A new experimental Google app for Windows](https://blog.google/products/search/google-app-windows-labs/)
* [2025-09-16, 14:59:47](https://news.ycombinator.com/item?id=45263221) - [Development of the MOS Technology 6502: A Historical Perspective (2022)](https://www.EmbeddedRelated.com/showarticle/1453.php)
* [2025-09-16, 14:56:04](https://lobste.rs/s/4tlumh/how_implement_outbox_pattern_go_postgres) - [How to implement the Outbox pattern in Go and Postgres](https://medium.com/@pliutau/how-to-implement-the-outbox-pattern-in-go-and-postgres-e9bc2699cbe2)
* [2025-09-16, 14:48:37](https://news.ycombinator.com/item?id=45263063) - [Microsoft Favors Anthropic over OpenAI for Visual Studio Code](https://www.theverge.com/report/778641/microsoft-visual-studio-code-anthropic-claude-4)
* [2025-09-16, 14:40:00](https://apple.slashdot.org/story/25/09/16/0629209/the-mac-app-flea-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Mac App Flea Market](https://apple.slashdot.org/story/25/09/16/0629209/the-mac-app-flea-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 14:35:19](https://news.ycombinator.com/item?id=45262835) - [Things you can do with a Software Defined Radio (2024)](https://blinry.org/50-things-with-sdr/)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 14:00:00](https://slashdot.org/story/25/09/16/0619228/an-unresponsive-public-is-undermining-government-economic-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Unresponsive Public Is Undermining Government Economic Data](https://slashdot.org/story/25/09/16/0619228/an-unresponsive-public-is-undermining-government-economic-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 13:41:51](https://news.ycombinator.com/item?id=45262151) - [Implicit ODE Solvers Are Not Universally More Robust Than Explicit ODE Solvers](https://www.stochasticlifestyle.com/implicit-ode-solvers-are-not-universally-more-robust-than-explicit-ode-solvers-or-why-no-ode-solver-is-best/)
* [2025-09-16, 13:25:42](https://news.ycombinator.com/item?id=45261946) - [Java 25 officially released](https://mail.openjdk.org/pipermail/announce/2025-September/000360.html)
* [2025-09-16, 13:24:35](https://news.ycombinator.com/item?id=45261930) - [Generative AI as Seniority-Biased Technological Change](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5425555)
* [2025-09-16, 13:10:29](https://news.ycombinator.com/item?id=45261764) - [CIA Freedom of Information Act Electronic Reading Room](https://www.cia.gov/readingroom)
* [2025-09-16, 13:02:20](https://news.ycombinator.com/item?id=45261659) - [Teen safety, freedom, and privacy](https://openai.com/index/teen-safety-freedom-and-privacy)
* [2025-09-16, 13:00:00](https://yro.slashdot.org/story/25/09/16/000202/google-releases-vaultgemma-its-first-privacy-preserving-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Releases VaultGemma, Its First Privacy-Preserving LLM](https://yro.slashdot.org/story/25/09/16/000202/google-releases-vaultgemma-its-first-privacy-preserving-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 12:42:36](https://lobste.rs/s/etufe3/detailed_review_macos_26_tahoe) - [A detailed review of macOS 26 Tahoe](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/)
* [2025-09-16, 12:30:02](https://lobste.rs/s/tbmypi/ctrl_tinycolor_40_npm_packages) - [ctrl/tinycolor and 40+ NPM Packages Compromised](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)
* [2025-09-16, 12:10:31](https://news.ycombinator.com/item?id=45261159) - [Robert Redford has died](https://www.nytimes.com/2025/09/16/movies/robert-redford-dead.html)
* [2025-09-16, 11:59:47](https://lobste.rs/s/ssnzbl/painful_road_java_modularity_with_osgi) - [A painful road to Java modularity with OSGi](https://blog.enioka.com/2025/06/18/a-painful-road-to-java-modularity/)
* [2025-09-16, 11:41:32](https://lobste.rs/s/khhbv8/you_want_technology_with_warts) - [You Want Technology With Warts](https://entropicthoughts.com/you-want-technology-with-warts)
* [2025-09-16, 11:22:03](https://news.ycombinator.com/item?id=45260741) - [Self Propagating NPM Malware](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)
* [2025-09-16, 10:55:53](https://lobste.rs/s/70n6tf/how_i_use_ai) - [How I Use AI](https://timkellogg.me/blog/2025/09/15/ai-tools)
* [2025-09-16, 10:42:38](https://lobste.rs/s/3pyir2/task_v3_45_released) - [Task v3.45 released](https://github.com/go-task/task/releases/tag/v3.45.3)
* [2025-09-16, 10:00:00](https://yro.slashdot.org/story/25/09/16/007218/uks-mi5-unlawfully-obtained-data-from-former-bbc-journalist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK&apos;s MI5 &apos;Unlawfully&apos; Obtained Data From Former BBC Journalist](https://yro.slashdot.org/story/25/09/16/007218/uks-mi5-unlawfully-obtained-data-from-former-bbc-journalist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 09:37:12](https://lobste.rs/s/otiuw4/swift_6_2_released) - [Swift 6.2 Released](https://www.swift.org/blog/swift-6.2-released/)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:26:32](https://lobste.rs/s/cly8x2/automating_distro_updates_ci) - [Automating Distro Updates in CI](https://paretosecurity.com/blog/automating-distro-updates-in-ci/)
* [2025-09-16, 07:00:00](https://slashdot.org/story/25/09/15/2344215/online-marketplace-fiverr-to-lay-off-30-of-workforce-in-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Online Marketplace Fiverr To Lay Off 30% of Workforce In AI Push](https://slashdot.org/story/25/09/15/2344215/online-marketplace-fiverr-to-lay-off-30-of-workforce-in-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 06:35:53](https://lobste.rs/s/t5kbvv/dolphin_progress_report_release_2509) - [Dolphin Progress Report: Release 2509](https://dolphin-emu.org/blog/2025/09/16/dolphin-progress-report-release-2509/)
* [2025-09-16, 06:15:22](https://lobste.rs/s/6z2p0h/wanted_spy_on_my_dog_ended_up_spying_on_tp) - [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 03:30:00](https://slashdot.org/story/25/09/15/2151235/openais-first-study-on-chatgpt-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s First Study On ChatGPT Usage](https://slashdot.org/story/25/09/15/2151235/openais-first-study-on-chatgpt-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 03:29:54](https://lobste.rs/s/jpwfu5/just_for_fun_animating_mosaic_90s_gifs) - [Just for fun: animating a mosaic of 90s GIFs](https://alexplescan.com/posts/2025/09/15/gifs/)
* [2025-09-16, 03:05:53](https://news.ycombinator.com/item?id=45257627) - [\&quot;Your\&quot; vs. \&quot;My\&quot; in user interfaces](https://adamsilver.io/blog/your-vs-my-in-user-interfaces/)
* [2025-09-16, 01:25:00](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Probes Whether Ticketmaster Does Enough To Stop Resale Bots](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:45:00](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Meta Ray-Ban Display&apos; Glasses Design, HUD Clips Leak](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:30:13](https://lobste.rs/s/uaz1d9/godot_4_5_release) - [Godot 4.5 release](https://godotengine.org/releases/4.5/)
* [2025-09-16, 00:16:03](https://lobste.rs/s/zxkefm/be_careful_when_assigning) - [Be Careful When Assigning ArenaAllocators (2024)](https://www.openmymind.net/Be-Careful-When-Assigning-ArenaAllocators/)
* [2025-09-16, 00:02:00](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Plans To Launch a Startups Fund Open To All Retail Investors](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 19:41:07](https://lobste.rs/s/b2nqkr/webkit_features_safari_26_0) - [WebKit Features in Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 19:00:09](https://lobste.rs/s/hdoo8z/why_is_name_microsoft_wireless_notebook) - [Why is the name of the Microsoft Wireless Notebook Presenter Mouse 8000 hard-coded into the Bluetooth drivers?](https://devblogs.microsoft.com/oldnewthing/20250915-00/?p=111599)
* [2025-09-15, 18:38:47](https://lobste.rs/s/eb404t/ghostty_1_2_0_release_notes) - [Ghostty 1.2.0 - Release Notes](https://ghostty.org/docs/install/release-notes/1-2-0)
* [2025-09-15, 18:20:27](https://lobste.rs/s/at72xo/asciinema_3_0_adds_live_streaming_local) - [asciinema 3.0 adds live streaming and local-first recording](https://blog.asciinema.org/post/three-point-o/)
* [2025-09-15, 17:47:06](https://lobste.rs/s/zqgfuo/react_won_by_default_it_s_killing_frontend) - [React Won by Default – And It&apos;s Killing Frontend Innovation](https://www.lorenstew.art/blog/react-won-by-default/)
* [2025-09-15, 15:14:35](https://lobste.rs/s/6hzayo/varnish_8_0_0_with_bonus_project_news) - [Varnish: 8.0.0 with bonus project news](https://varnish-cache.org/#new-release-8-0-0-with-bonus-project-news)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 13:59:11](https://lobste.rs/s/d26qtj/e_language) - [The E Language](http://erights.org/elang/index.html)
* [2025-09-15, 10:12:00](https://lobste.rs/s/jxprbr/algebraic_types_are_not_scary_actually) - [Algebraic Types are not Scary, Actually](https://blog.aiono.dev/posts/algebraic-types-are-not-scary,-actually.html)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 01:12:11](https://news.ycombinator.com/item?id=45245050) - [I built my own phone because innovation is sad rn [video]](https://www.youtube.com/watch?v=qy_9w_c2ub0)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:36:23](https://news.ycombinator.com/item?id=45236479) - [Writing an operating system kernel from scratch – RISC-V/OpenSBI/Zig](https://popovicu.com/posts/writing-an-operating-system-kernel-from-scratch/)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 14:37:52](https://news.ycombinator.com/item?id=45232426) - [How Container Filesystem Works: Building a Docker-Like Container from Scratch](https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch)
* [2025-09-13, 12:43:54](https://news.ycombinator.com/item?id=45231614) - [60 years after Gemini, newly processed images reveal details](https://arstechnica.com/space/2025/09/60-years-after-gemini-newly-processed-images-reveal-incredible-details/)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 08:56:00](https://news.ycombinator.com/item?id=45230515) - [UTF-8 history (2003)](https://doc.cat-v.org/bell_labs/utf-8_history)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-13, 00:30:47](https://news.ycombinator.com/item?id=45228231) - [Scientists uncover extreme life inside the Arctic ice](https://news.stanford.edu/stories/2025/09/extreme-life-arctic-ice-diatoms-ecological-discovery)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 18:41:36](https://news.ycombinator.com/item?id=45225217) - [Migrating to React Native&apos;s new architecture](https://shopify.engineering/react-native-new-architecture)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
