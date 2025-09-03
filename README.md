# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [BASIC-M6502: Microsoft BASIC for 6502 Microprocessor - Version 1.1](https://github.com/microsoft/BASIC-M6502) ([comments](https://lobste.rs/s/rshhsu/basic_m6502_microsoft_basic_for_6502))

* [Writing a C compiler in 500 lines of Python (2023)](https://vgel.me/posts/c500/) ([comments](https://news.ycombinator.com/item?id=45117668))

* [6NF File Format](https://habr.com/en/articles/942516/) ([comments](https://news.ycombinator.com/item?id=45118598))

* [Airbus B612 Cockpit Font](https://github.com/polarsys/b612) ([comments](https://news.ycombinator.com/item?id=45115942))

* [VibeVoice: A Frontier Open-Source Text-to-Speech Model](https://microsoft.github.io/VibeVoice/) ([comments](https://news.ycombinator.com/item?id=45114245))

* [Search Index in 150 Lines of Haskell](https://entropicthoughts.com/search-index-150-lines-haskell) ([comments](https://lobste.rs/s/lkdvc0/search_index_150_lines_haskell))

## Science and Research

* [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/03/0230242))

* [The wall confronting large language models](https://arxiv.org/abs/2507.19703) ([comments](https://news.ycombinator.com/item?id=45114579))

* [Wild Performance Tricks](https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html) ([comments](https://lobste.rs/s/hzky9k/wild_performance_tricks))

* [John Coltrane's Tone Circle](https://roelsworld.eu/blog-saxophone/coltrane-tone-circle/) ([comments](https://news.ycombinator.com/item?id=45115004))

* [16-year odyssey to emulate the Pioneer LaserActive](https://www.readonlymemo.com/this-is-the-first-the-16-year-odyssey-of-time-money-wrong-turns-and-frustration-it-took-to-finally-emulate-the-pioneer-laseractive/) ([comments](https://news.ycombinator.com/item?id=45114003))

* [AI-Powered Drone Swarms Have Now Entered the Battlefield](https://tech.slashdot.org/story/25/09/02/2139235/ai-powered-drone-swarms-have-now-entered-the-battlefield?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/09/02/2139235/ai-powered-drone-swarms-have-now-entered-the-battlefield))

## Business and Market Trends

* [Your Biggest Customer Might Be Your Biggest Bottleneck](https://densumesh.dev/blog/fair-queue/) ([comments](https://lobste.rs/s/e4hr8o/your_biggest_customer_might_be_your))

* [Microsoft Can't Guarantee Data Sovereignty – OVHcloud Says 'We Told You So'](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss))

* [Claude Code: Now in Beta in Zed](https://zed.dev/blog/claude-code-via-acp) ([comments](https://news.ycombinator.com/item?id=45116688))

* [Amazon Must Face US Nationwide Class Action Over Third-Party Sales](https://yro.slashdot.org/story/25/09/03/0217244/amazon-must-face-us-nationwide-class-action-over-third-party-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/09/03/0217244/amazon-must-face-us-nationwide-class-action-over-third-party-sales))

* [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/31/146226))

## Visual and Audio Innovations

* [Understanding Transformers Using a Minimal Example](https://rti.github.io/gptvis/) ([comments](https://news.ycombinator.com/item?id=45116957))

* [Voyager – An interactive video generation model with realtime 3D reconstruction](https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager) ([comments](https://news.ycombinator.com/item?id=45114379))

* [Building the most accurate DIY CNC lathe in the world [video]](https://www.youtube.com/watch?v=vEr2CJruwEM) ([comments](https://news.ycombinator.com/item?id=45115760))

* [Glow-in-the-dark houseplants shine in rainbow of colours](https://www.nature.com/articles/d41586-025-02740-2) ([comments](https://news.ycombinator.com/item?id=45083053))

## Cultural and Historical Insights

* [What Is It Like to Be a Bat?](https://en.wikipedia.org/wiki/What_Is_It_Like_to_Be_a_Bat%3F) ([comments](https://news.ycombinator.com/item?id=45118592))

* [Things Kids Do (1975)](https://www.youtube.com/watch?v=k3QAVEweMkY) ([comments](https://lobste.rs/s/8tn4aw/things_kids_do_1975))

* [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/30/157235))

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

* [2025-09-03, 17:51:25](https://lobste.rs/s/rshhsu/basic_m6502_microsoft_basic_for_6502) - [BASIC-M6502: Microsoft BASIC for 6502 Microprocessor - Version 1.1](https://github.com/microsoft/BASIC-M6502)
* [2025-09-03, 17:49:08](https://news.ycombinator.com/item?id=45118598) - [6NF File Format](https://habr.com/en/articles/942516/)
* [2025-09-03, 17:48:27](https://news.ycombinator.com/item?id=45118592) - [What Is It Like to Be a Bat?](https://en.wikipedia.org/wiki/What_Is_It_Like_to_Be_a_Bat%3F)
* [2025-09-03, 17:47:50](https://news.ycombinator.com/item?id=45118585) - [Poor man&apos;s bitemporal data system in SQLite and Clojure](https://www.evalapply.org/posts/poor-mans-time-oriented-data-system/index.html)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 17:31:00](https://entertainment.slashdot.org/story/25/09/03/1731213/the-new-dolby-vision-2-hdr-standard-is-probably-going-to-be-controversial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The New Dolby Vision 2 HDR Standard is Probably Going To Be Controversial](https://entertainment.slashdot.org/story/25/09/03/1731213/the-new-dolby-vision-2-hdr-standard-is-probably-going-to-be-controversial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 17:28:32](https://news.ycombinator.com/item?id=45118392) - [Microsoft Releases Historic 6502 Basic](https://github.com/microsoft/BASIC-M6502)
* [2025-09-03, 17:19:10](https://news.ycombinator.com/item?id=45118302) - [Show HN: Entropy-Guided Loop – How to make small models reason](https://github.com/monostate/weave-logprobs-reasoning-loop)
* [2025-09-03, 17:03:35](https://news.ycombinator.com/item?id=45118111) - [Speeding up PyTorch inference on Apple devices with AI-generated Metal kernels](https://gimletlabs.ai/blog/ai-generated-metal-kernels)
* [2025-09-03, 17:00:04](https://news.ycombinator.com/item?id=45118072) - [Svix (webhooks as a service) is hiring for a founding marketing lead](https://www.svix.com/careers/?ashby_jid=ca9d34d5-94c9-4729-836a-423725ee8b22)
* [2025-09-03, 16:52:01](https://lobste.rs/s/e4hr8o/your_biggest_customer_might_be_your) - [Your Biggest Customer Might Be Your Biggest Bottleneck](https://densumesh.dev/blog/fair-queue/)
* [2025-09-03, 16:51:05](https://news.ycombinator.com/item?id=45117974) - [Who Owns, Operates, and Develops Your VPN Matters](https://www.opentech.fund/news/who-owns-operates-and-develops-your-vpn-matters-an-analysis-of-transparency-vs-anonymity-in-the-vpn-ecosystem-and-implications-for-users/)
* [2025-09-03, 16:48:00](https://developers.slashdot.org/story/25/09/03/1649201/freebsd-project-isnt-ready-to-let-ai-commit-code-just-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD Project Isn&apos;t Ready To Let AI Commit Code Just Yet](https://developers.slashdot.org/story/25/09/03/1649201/freebsd-project-isnt-ready-to-let-ai-commit-code-just-yet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 16:28:23](https://news.ycombinator.com/item?id=45117668) - [Writing a C compiler in 500 lines of Python (2023)](https://vgel.me/posts/c500/)
* [2025-09-03, 16:06:00](https://news.slashdot.org/story/25/09/03/166237/dumbing-down-the-sat-bodes-poorly-for-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dumbing Down the SAT Bodes Poorly for Education](https://news.slashdot.org/story/25/09/03/166237/dumbing-down-the-sat-bodes-poorly-for-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 15:58:10](https://lobste.rs/s/jk6omn/how_we_made_kagi_assistant_load_twice_as) - [How we made Kagi Assistant load twice as fast](https://jacobwinters.com/kagi-assistant-optimization/)
* [2025-09-03, 15:54:12](https://news.ycombinator.com/item?id=45117230) - [Nuclear: Desktop music player focused on streaming from free sources](https://github.com/nukeop/nuclear)
* [2025-09-03, 15:30:06](https://news.ycombinator.com/item?id=45116957) - [Understanding Transformers Using a Minimal Example](https://rti.github.io/gptvis/)
* [2025-09-03, 15:21:35](https://news.ycombinator.com/item?id=45116859) - [Launch HN: Risely (YC S25) – AI Agents for Universities](https://news.ycombinator.com/item?id=45116859)
* [2025-09-03, 15:20:34](https://news.ycombinator.com/item?id=45116849) - [A Random Walk in 10 Dimensions (2021)](https://galileo-unbound.blog/2021/06/28/a-random-walk-in-10-dimensions/)
* [2025-09-03, 15:20:00](https://news.slashdot.org/story/25/09/03/150244/america-is-in-a-serious-jobs-slump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America is in a Serious Jobs Slump](https://news.slashdot.org/story/25/09/03/150244/america-is-in-a-serious-jobs-slump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 15:07:20](https://news.ycombinator.com/item?id=45116688) - [Claude Code: Now in Beta in Zed](https://zed.dev/blog/claude-code-via-acp)
* [2025-09-03, 14:59:02](https://lobste.rs/s/jeg5l9/why_rewriting_emacs_is_hard) - [Why Rewriting Emacs Is Hard](https://kyo.iroiro.party/en/posts/why-rewriting-emacs-is-hard/)
* [2025-09-03, 14:41:00](https://yro.slashdot.org/story/25/09/03/1441242/streameast-worlds-largest-illegal-sports-streaming-platform-shut-down-in-sting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streameast, World&apos;s Largest Illegal Sports Streaming Platform, Shut Down in Sting](https://yro.slashdot.org/story/25/09/03/1441242/streameast-worlds-largest-illegal-sports-streaming-platform-shut-down-in-sting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 14:29:06](https://lobste.rs/s/f41ek6/anatomy_mach_o_structure_code_signing_pac) - [The Anatomy of a Mach-O: Structure, Code Signing, and PAC](https://oliviagallucci.com/the-anatomy-of-a-mach-o-structure-code-signing-and-pac/)
* [2025-09-03, 14:02:28](https://news.ycombinator.com/item?id=45115942) - [Airbus B612 Cockpit Font](https://github.com/polarsys/b612)
* [2025-09-03, 14:01:25](https://lobste.rs/s/jlkxjt/airbus_b612_cockpit_font) - [Airbus B612 cockpit font](https://github.com/polarsys/b612)
* [2025-09-03, 14:00:00](https://yro.slashdot.org/story/25/09/03/1349225/google-critics-think-the-search-remedies-ruling-is-a-total-whiff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Critics Think the Search Remedies Ruling is a Total Whiff](https://yro.slashdot.org/story/25/09/03/1349225/google-critics-think-the-search-remedies-ruling-is-a-total-whiff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 13:47:14](https://news.ycombinator.com/item?id=45115760) - [Building the most accurate DIY CNC lathe in the world [video]](https://www.youtube.com/watch?v=vEr2CJruwEM)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 13:00:00](https://yro.slashdot.org/story/25/09/03/0217244/amazon-must-face-us-nationwide-class-action-over-third-party-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Must Face US Nationwide Class Action Over Third-Party Sales](https://yro.slashdot.org/story/25/09/03/0217244/amazon-must-face-us-nationwide-class-action-over-third-party-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 12:58:18](https://lobste.rs/s/8tn4aw/things_kids_do_1975) - [Things Kids Do (1975)](https://www.youtube.com/watch?v=k3QAVEweMkY)
* [2025-09-03, 12:38:47](https://news.ycombinator.com/item?id=45115004) - [John Coltrane&apos;s Tone Circle](https://roelsworld.eu/blog-saxophone/coltrane-tone-circle/)
* [2025-09-03, 11:48:51](https://lobste.rs/s/hzky9k/wild_performance_tricks) - [Wild Performance Tricks](https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html)
* [2025-09-03, 11:40:41](https://news.ycombinator.com/item?id=45114579) - [The wall confronting large language models](https://arxiv.org/abs/2507.19703)
* [2025-09-03, 11:25:42](https://lobste.rs/s/qb0qre/video_game_blurs_how_best_one_works) - [Video Game Blurs (and how the best one works)](https://blog.frost.kiwi/dual-kawase/)
* [2025-09-03, 11:14:45](https://lobste.rs/s/kdoksz/16_year_odyssey_time_money_wrong_turns) - [The 16 year odyssey of \&quot;time, money, wrong turns and frustration\&quot; it took to finally emulate the Pioneer LaserActive](https://www.readonlymemo.com/this-is-the-first-the-16-year-odyssey-of-time-money-wrong-turns-and-frustration-it-took-to-finally-emulate-the-pioneer-laseractive/)
* [2025-09-03, 11:07:16](https://news.ycombinator.com/item?id=45114379) - [Voyager – An interactive video generation model with realtime 3D reconstruction](https://github.com/Tencent-Hunyuan/HunyuanWorld-Voyager)
* [2025-09-03, 10:49:48](https://news.ycombinator.com/item?id=45114277) - [UK Electricity Generation Map](https://www.energydashboard.co.uk/map)
* [2025-09-03, 10:44:01](https://news.ycombinator.com/item?id=45114245) - [VibeVoice: A Frontier Open-Source Text-to-Speech Model](https://microsoft.github.io/VibeVoice/)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 10:02:11](https://news.ycombinator.com/item?id=45114003) - [The 16-year odyssey it took to emulate the Pioneer LaserActive](https://www.readonlymemo.com/this-is-the-first-the-16-year-odyssey-of-time-money-wrong-turns-and-frustration-it-took-to-finally-emulate-the-pioneer-laseractive/)
* [2025-09-03, 10:00:00](https://science.slashdot.org/story/25/09/03/0210212/common-pesticide-linked-to-widespread-brain-abnormalities-in-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Common Pesticide Linked To Widespread Brain Abnormalities In Children](https://science.slashdot.org/story/25/09/03/0210212/common-pesticide-linked-to-widespread-brain-abnormalities-in-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 07:18:58](https://lobste.rs/s/lkdvc0/search_index_150_lines_haskell) - [Search Index in 150 Lines of Haskell](https://entropicthoughts.com/search-index-150-lines-haskell)
* [2025-09-03, 07:09:52](https://lobste.rs/s/xdluvl/cpu_utilization_is_lie) - [%CPU Utilization Is A Lie](https://www.brendanlong.com/cpu-utilization-is-a-lie.html)
* [2025-09-03, 07:00:00](https://news.slashdot.org/story/25/09/03/020240/worlds-biggest-iceberg-breaks-up-after-40-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Biggest Iceberg Breaks Up After 40 Years](https://news.slashdot.org/story/25/09/03/020240/worlds-biggest-iceberg-breaks-up-after-40-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 05:57:23](https://lobste.rs/s/2dc4y7/new_gabi_elf_spec_available_for_public) - [New gABI/ELF Spec Available for Public Review](https://groups.google.com/g/generic-abi/c/doY6WIIPqhU/)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-03, 03:30:00](https://tech.slashdot.org/story/25/09/02/2139235/ai-powered-drone-swarms-have-now-entered-the-battlefield?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Powered Drone Swarms Have Now Entered the Battlefield](https://tech.slashdot.org/story/25/09/02/2139235/ai-powered-drone-swarms-have-now-entered-the-battlefield?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 03:25:41](https://lobste.rs/s/0ydman/2025_financial_report_fundraiser) - [2025 Financial Report and Fundraiser](https://ziglang.org/news/2025-financials/)
* [2025-09-03, 02:02:00](https://science.slashdot.org/story/25/09/02/1941215/dozens-of-scientists-find-errors-in-a-new-energy-department-climate-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dozens of Scientists Find Errors in a New Energy Department Climate Report](https://science.slashdot.org/story/25/09/02/1941215/dozens-of-scientists-find-errors-in-a-new-energy-department-climate-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 01:25:00](https://tech.slashdot.org/story/25/09/02/2132215/waymo-expands-to-denver-and-seattle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Expands to Denver and Seattle](https://tech.slashdot.org/story/25/09/02/2132215/waymo-expands-to-denver-and-seattle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 00:45:00](https://games.slashdot.org/story/25/09/02/2111258/paramount-and-activision-team-for-call-of-duty-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paramount and Activision Team For &apos;Call of Duty&apos; Movie](https://games.slashdot.org/story/25/09/02/2111258/paramount-and-activision-team-for-call-of-duty-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 00:02:00](https://it.slashdot.org/story/25/09/02/209250/frostbyte10-bugs-put-thousands-of-refrigerators-at-major-grocery-chains-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Frostbyte10 Bugs Put Thousands of Refrigerators At Major Grocery Chains At Risk](https://it.slashdot.org/story/25/09/02/209250/frostbyte10-bugs-put-thousands-of-refrigerators-at-major-grocery-chains-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 23:42:52](https://lobste.rs/s/kyml3m/passkeys_modern_authentication) - [Passkeys and Modern Authentication](https://lucumr.pocoo.org/2025/9/2/passkeys/)
* [2025-09-02, 23:42:29](https://lobste.rs/s/ce22dx/adding_derive_from_rust) - [Adding #[derive(From)] to Rust](https://kobzol.github.io/rust/2025/09/02/adding-derive-from-to-rust.html)
* [2025-09-02, 23:20:00](https://tech.slashdot.org/story/25/09/02/204241/chrome-increases-its-overwhelming-market-share-now-over-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Increases Its Overwhelming Market Share, Now Over 70%](https://tech.slashdot.org/story/25/09/02/204241/chrome-increases-its-overwhelming-market-share-now-over-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 21:10:20](https://lobste.rs/s/h5jrbk/matrix_org_major_outage_database) - [matrix.org Major Outage - Database Incident (September 2nd 2025)](https://status.matrix.org/incidents/mm9hdm78svgv)
* [2025-09-02, 19:47:30](https://lobste.rs/s/em4yrb/why_self_host_9front) - [why self-host 9front](https://orib.dev/selfhost.html)
* [2025-09-02, 19:33:42](https://lobste.rs/s/1kql5c/making_xml_human_readable_without_xslt) - [Making XML human-readable without XSLT](https://jakearchibald.com/2025/making-xml-human-readable-without-xslt/)
* [2025-09-02, 18:07:12](https://lobste.rs/s/ntnjvx/physically_based_rendering_from_first) - [Physically based rendering from first principles](https://imadr.me/pbr/)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 17:46:31](https://lobste.rs/s/kjrhtp/python_has_had_async_for_10_years_why_isn_t) - [Python has had async for 10 years -- why isn&apos;t it more popular?](https://tonybaloney.github.io/posts/why-isnt-python-async-more-popular.html)
* [2025-09-02, 14:45:13](https://lobste.rs/s/mt8qo5/wikidata_mundaneum_triumph_commons) - [Wikidata and Mundaneum - The Triumph of the Commons](https://schmud.de/programs/2025-09-02-wikidata-mundaneum.html)
* [2025-09-02, 13:58:27](https://news.ycombinator.com/item?id=45103205) - [Vector search on our codebase transformed our SDLC automation](https://medium.com/@antonybrahin/grounding-ai-in-reality-how-vector-search-on-our-codebase-transformed-our-sdlc-automation-7d068b1244a8)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 10:17:15](https://lobste.rs/s/umaxfz/rats_ratchets_2024) - [Of Rats and Ratchets (2024)](https://matklad.github.io/2024/01/03/of-rats-and-ratchets.html)
* [2025-09-02, 08:40:25](https://lobste.rs/s/nr8kkd/debugging_rustler_on_illumos) - [Debugging Rustler on illumos](https://system-illumination.org/01-rustler.html)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 07:40:59](https://lobste.rs/s/57djg3/irc_serial_port_s_love_letter_internet) - [IRC - The Serial Port&apos;s love letter to Internet Relay Chat](https://www.youtube.com/watch?v=6UbKenFipjo)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 13:34:36](https://news.ycombinator.com/item?id=45083053) - [Glow-in-the-dark houseplants shine in rainbow of colours](https://www.nature.com/articles/d41586-025-02740-2)
* [2025-08-31, 09:52:26](https://news.ycombinator.com/item?id=45081904) - [This Page Is a Quine (2021)](https://pranavg.me/)
* [2025-08-31, 09:19:52](https://news.ycombinator.com/item?id=45081752) - [Ask HN: Looking for Headless CMS Recommendation](https://news.ycombinator.com/item?id=45081752)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
* [2025-08-31, 02:20:10](https://news.ycombinator.com/item?id=45079767) - [Abstract Machine Models (2022)](https://dr-knz.net/abstract-machine-models.html)
* [2025-08-31, 01:02:47](https://news.ycombinator.com/item?id=45079418) - [PFP: A Probabilistic Functional Programming Library for Haskell (2006)](https://web.engr.oregonstate.edu/~erwig/pfp/)
* [2025-08-30, 23:14:00](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss) - [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss)
* [2025-08-30, 21:52:58](https://news.ycombinator.com/item?id=45078315) - [Magic Lantern Is Back](https://www.magiclantern.fm/forum/index.php?topic=27315.0)
* [2025-08-30, 18:42:08](https://news.ycombinator.com/item?id=45076992) - [How to Give a Good Talk](https://blog.sigplan.org/2025/03/31/how-to-give-a-good-talk/)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
