# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [An Electric Racecar Drives Upside Down](https://tech.slashdot.org/story/25/04/14/0542240/an-electric-racecar-drives-upside-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A remarkable feat in engineering: How physics enables an electric racecar to defy gravity.

* [Why Everything in the Universe Turns More Complex](https://www.quantamagazine.org/why-everything-in-the-universe-turns-more-complex-20250402/) - Exploration of complexity in the universe and how intricate systems emerge.

* [NoProp: Training neural networks without back-propagation or forward-propagation](https://arxiv.org/abs/2503.24322) - A novel approach to AI training that claims to bypass traditional propagation techniques.

## Notable Deaths and Cultural Reflections

* [Mario Vargas Llosa has died](https://www.nytimes.com/2025/04/13/books/review/mario-vargas-llosa-appraisal.html) - A tribute to the influential Peruvian writer, winner of the Nobel Prize in Literature.

* [The dark side of the Moomins](https://www.newstatesman.com/culture/books/2025/04/dark-side-of-the-moomins-tove-jansson) - A revealing exploration of the lesser-known, complex themes within Tove Jansson's beloved Moomins series.

## Economic and Political Developments

* [Trump Denies Tariff 'Exception' for Electronics, Promises New Electronics Tariffs Soon](https://news.slashdot.org/story/25/04/14/0038246/trump-denies-tariff-exception-for-electronics-promises-new-electronics-tariffs-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion on upcoming tariff changes and their potential global impact on the electronics sector.

* [Tariffs, Saving, and Investment](https://www.grumpy-economist.com/p/tariffs-saving-and-investment) - A detailed economic analysis of the connection between tariffs and broader investment trends.

## Engineering and Open Source Highlights

* [A Visual Journey Through Async Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/visual-journey-through-async-rust/Readme.md) - A comprehensive deep dive into asynchronous programming with Rust.

* [33-year-old AmigaOS for Commodore Computers Gets an Unexpected Update](https://tech.slashdot.org/story/25/04/13/1813251/33-year-old-amigaos-for-commodore-computers-gets-an-unexpected-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A surprising rejuvenation of a decades-old operating system for retro computing enthusiasts.

## Health and Environment

* [Three Million Child Deaths Linked To Drug Resistance, Study Shows](https://science.slashdot.org/story/25/04/13/210217/three-million-child-deaths-linked-to-drug-resistance-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Alarming study findings on the global health impact of antimicrobial resistance.

* [America's Dirtiest Coal Power Plants Given Exemptions from Pollution Rules to Help Power AI](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of the environmental implications of powering artificial intelligence with coal plants.

## Cultural and Historical Oddities

* [How a Secretive Gambler Called 'The Joker' Beat the Texas Lottery](https://idle.slashdot.org/story/25/04/13/1716210/how-a-secretive-gambler-called-the-joker-beat-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A deep dive into the story of a gambler's unexpected success against lottery odds.

* [Why is there a 'small house' in IBM's Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/) - Context behind an intriguing graphical character embedded in IBM's classic character set.

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

* [2025-04-14, 09:41:26](https://lobste.rs/s/t788y0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/t788y0/what_are_you_doing_this_week)
* [2025-04-14, 07:47:18](https://news.ycombinator.com/item?id=43679004) - [Kezurou-Kai #39](https://www.bigsandwoodworking.com/kezurou-kai-39/)
* [2025-04-14, 07:34:00](https://tech.slashdot.org/story/25/04/14/0542240/an-electric-racecar-drives-upside-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Electric Racecar Drives Upside Down](https://tech.slashdot.org/story/25/04/14/0542240/an-electric-racecar-drives-upside-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 06:10:00](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss) - [Galaxies in the Deep Universe Rotate in the Same Direction](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss)
* [2025-04-14, 05:44:07](https://news.ycombinator.com/item?id=43678401) - [Tariffs, Saving, and Investment](https://www.grumpy-economist.com/p/tariffs-saving-and-investment)
* [2025-04-14, 05:22:44](https://news.ycombinator.com/item?id=43678312) - [Albert Einstein&apos;s theory of relativity in words of four letters or less](https://www.muppetlabs.com/~breadbox/txt/al.html)
* [2025-04-14, 04:45:21](https://news.ycombinator.com/item?id=43678123) - [Wiz&apos;s $32B GTM Playbook](https://www.cybersecuritypulse.net/p/wizs-32b-gtm-playbook-unpacking-the)
* [2025-04-14, 04:34:00](https://it.slashdot.org/story/25/04/14/0356212/the-effs-certbot-now-supports-six-day-certs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The EFF&apos;s &apos;Certbot&apos; Now Supports Six-Day Certs](https://it.slashdot.org/story/25/04/14/0356212/the-effs-certbot-now-supports-six-day-certs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 03:52:56](https://news.ycombinator.com/item?id=43677917) - [Mario Vargas Llosa has died](https://www.nytimes.com/2025/04/13/books/review/mario-vargas-llosa-appraisal.html)
* [2025-04-14, 03:51:55](https://news.ycombinator.com/item?id=43677909) - [Show HN: Resurrecting Infocom&apos;s Unix Z-Machine with Cosmopolitan](https://christopherdrum.github.io/posts/2025/04/porting-infocom-with-cosmo)
* [2025-04-14, 02:58:45](https://lobste.rs/s/ebab2d/ditch_diy_drama_why_use_fedify_instead) - [Ditch the DIY Drama: Why Use Fedify Instead of Building ActivityPub from Scratch?](https://hackers.pub/@hongminhee/2025/why-use-fedify)
* [2025-04-14, 02:42:27](https://news.ycombinator.com/item?id=43677610) - [Show HN: Nissan&apos;s Leaf app doesn&apos;t have a home screen widget so I made my own](https://kevintechnology.com/posts/leaf-widget/)
* [2025-04-14, 01:34:00](https://news.slashdot.org/story/25/04/14/0038246/trump-denies-tariff-exception-for-electronics-promises-new-electronics-tariffs-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Denies Tariff &apos;Exception&apos; for Electronics, Promises New Electronics Tariffs Soon](https://news.slashdot.org/story/25/04/14/0038246/trump-denies-tariff-exception-for-electronics-promises-new-electronics-tariffs-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 01:30:22](https://news.ycombinator.com/item?id=43677265) - [Calypso: LLMs as Dungeon Masters&apos; Assistants [pdf]](https://andrewhead.info/assets/pdf/calypso.pdf)
* [2025-04-14, 01:25:57](https://news.ycombinator.com/item?id=43677232) - [Why Everything in the Universe Turns More Complex](https://www.quantamagazine.org/why-everything-in-the-universe-turns-more-complex-20250402/)
* [2025-04-14, 01:20:00](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss) - [Ukraine&apos;s Autonomous Killer Drones Defeat Electronic Warfare](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss)
* [2025-04-14, 01:11:19](https://news.ycombinator.com/item?id=43677165) - [I bought a Mac](https://loganius.org/2025/04/i-bought-a-mac/)
* [2025-04-14, 01:09:41](https://lobste.rs/s/epsuly/i_bought_mac) - [I bought a Mac](https://loganius.org/2025/04/i-bought-a-mac/)
* [2025-04-14, 00:51:42](https://news.ycombinator.com/item?id=43677067) - [New Vulnerability in GitHub Copilot, Cursor: Hackers Can Weaponize Code Agents](https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents)
* [2025-04-14, 00:03:51](https://news.ycombinator.com/item?id=43676837) - [NoProp: Training neural networks without back-propagation or forward-propagation](https://arxiv.org/abs/2503.24322)
* [2025-04-13, 23:53:35](https://news.ycombinator.com/item?id=43676771) - [Everything wrong with MCP](https://blog.sshh.io/p/everything-wrong-with-mcp)
* [2025-04-13, 23:44:00](https://news.slashdot.org/story/25/04/13/2342232/palantirs-meritocracy-fellowship-urges-high-school-grads-to-skip-colleges-indoctrination-and-debt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir&apos;s &apos;Meritocracy Fellowship&apos; Urges High School Grads to Skip College&apos;s &apos;Indoctrination&apos; and Debt](https://news.slashdot.org/story/25/04/13/2342232/palantirs-meritocracy-fellowship-urges-high-school-grads-to-skip-colleges-indoctrination-and-debt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 22:28:00](https://tech.slashdot.org/story/25/04/13/2226203/after-meta-cheating-allegations-unmodified-llama-4-maverick-model-tested---ranks-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Meta Cheating Allegations, &apos;Unmodified&apos; Llama 4 Maverick Model Tested - Ranks #32](https://tech.slashdot.org/story/25/04/13/2226203/after-meta-cheating-allegations-unmodified-llama-4-maverick-model-tested---ranks-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 21:43:36](https://news.ycombinator.com/item?id=43676084) - [Quick Primer on MCP Using Ollama and LangChain](https://www.polarsparc.com/xhtml/MCP.html)
* [2025-04-13, 21:34:46](https://lobste.rs/s/kmz1a5/visualizing_chess_bitboards) - [Visualizing Chess Bitboards](https://healeycodes.com/visualizing-chess-bitboards)
* [2025-04-13, 21:16:43](https://lobste.rs/s/ns3ugs/ship_software_does_nothing) - [Ship Software That Does Nothing](https://kerrick.blog/articles/2025/ship-software-that-does-nothing/)
* [2025-04-13, 21:02:00](https://science.slashdot.org/story/25/04/13/210217/three-million-child-deaths-linked-to-drug-resistance-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three Million Child Deaths Linked To Drug Resistance, Study Shows](https://science.slashdot.org/story/25/04/13/210217/three-million-child-deaths-linked-to-drug-resistance-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 20:35:00](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss) - [AI Marketing to Bypass Spam Filters](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss)
* [2025-04-13, 19:57:30](https://lobste.rs/s/998p76/mandatory_short_duration_tls) - [Mandatory short duration TLS certificates are probably coming soon](https://utcc.utoronto.ca/~cks/space/blog/web/ShortTLSCertificatesComing)
* [2025-04-13, 19:43:11](https://news.ycombinator.com/item?id=43675310) - [Math 13 – An Introduction to Abstract Mathematics [pdf]](https://www.math.uci.edu/~ndonalds/math13/notes.pdf)
* [2025-04-13, 19:34:00](https://tech.slashdot.org/story/25/04/13/1813251/33-year-old-amigaos-for-commodore-computers-gets-an-unexpected-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [33-year-old AmigaOS for Commodore Computers Gets an Unexpected Update](https://tech.slashdot.org/story/25/04/13/1813251/33-year-old-amigaos-for-commodore-computers-gets-an-unexpected-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 19:33:24](https://news.ycombinator.com/item?id=43675248) - [Show HN: I made a free tool that analyzes SEC filings and posts detailed reports](https://www.signalbloom.ai/news/)
* [2025-04-13, 19:13:37](https://news.ycombinator.com/item?id=43675126) - [Open guide to equity compensation](https://github.com/jlevy/og-equity-compensation)
* [2025-04-13, 19:06:57](https://lobste.rs/s/ao24tu/visual_journey_through_async_rust) - [A Visual Journey Through Async Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/visual-journey-through-async-rust/Readme.md)
* [2025-04-13, 18:39:11](https://lobste.rs/s/dgp9xf/solving_one_million_sudoku_puzzles_per) - [Solving One Million Sudoku Puzzles per hour](https://www.miakoring.de/blog/sudoku)
* [2025-04-13, 18:34:59](https://lobste.rs/s/aa6nas/torvalds_celebrates_git_s_20th) - [Torvalds Celebrates Git&apos;s 20th Anniversay. Is It More Famous Than Linux?](https://m.slashdot.org/story/440853)
* [2025-04-13, 18:34:00](https://idle.slashdot.org/story/25/04/13/1716210/how-a-secretive-gambler-called-the-joker-beat-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Secretive Gambler Called &apos;The Joker&apos; Beat the Texas Lottery](https://idle.slashdot.org/story/25/04/13/1716210/how-a-secretive-gambler-called-the-joker-beat-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 18:33:05](https://news.ycombinator.com/item?id=43674825) - [Implementing DeepSeek R1&apos;s GRPO algorithm from scratch](https://github.com/policy-gradient/GRPO-Zero)
* [2025-04-13, 17:51:19](https://lobste.rs/s/dgrsuw/e_ink_pda_device_using_esp32_s3) - [An E-Ink PDA device using the ESP32 S3](https://github.com/ashtf8/EinkPDA)
* [2025-04-13, 17:34:00](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Dirtiest Coal Power Plants Given Exemptions from Pollution Rules to Help Power AI](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 16:34:00](https://linux.slashdot.org/story/25/04/12/0518218/linux-mint-debian-edition-7-gets-oem-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Linux Mint Debian Edition 7&apos; Gets OEM Support ](https://linux.slashdot.org/story/25/04/12/0518218/linux-mint-debian-edition-7-gets-oem-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 16:13:45](https://lobste.rs/s/xgzydz/tricky_commodore_pet_repair_tracking) - [A tricky Commodore PET repair: tracking down 6 1/2 bad chips](http://www.righto.com/2025/04/commodore-pet-repair.html)
* [2025-04-13, 16:02:28](https://news.ycombinator.com/item?id=43673761) - [How much oranger do red orange bags make oranges look?](https://alexanderell.is/posts/orange/)
* [2025-04-13, 15:50:00](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss) - [Ubisoft Argues Players Don&apos;t Own Their Games in Wake of The Crew Lawsuit](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss)
* [2025-04-13, 15:37:05](https://news.ycombinator.com/item?id=43673551) - [Why Fennel?](https://fennel-lang.org/rationale)
* [2025-04-13, 15:34:00](https://tech.slashdot.org/story/25/04/13/0215254/freedos-celebrates-more-than-30-years-of-command-prompts-with-new-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeDOS Celebrates More Than 30 Years of Command Prompts With New Release](https://tech.slashdot.org/story/25/04/13/0215254/freedos-celebrates-more-than-30-years-of-command-prompts-with-new-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 15:14:31](https://lobste.rs/s/yrigjs/speeding_up_terraform_caching_with) - [Speeding up Terraform caching with OverlayFS](https://www.bejarano.io/terraform-overlayfs/)
* [2025-04-13, 14:17:03](https://lobste.rs/s/zb5wzp/no_panic_attribute_macro_require) - [no-panic: Attribute macro to require that the compiler prove a function can&apos;t ever panic](https://github.com/dtolnay/no-panic)
* [2025-04-13, 13:28:00](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Urges US Government to Adopt Free-as-in-Freedom Tax Filing Software](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 13:15:57](https://news.ycombinator.com/item?id=43672593) - [The dark side of the Moomins](https://www.newstatesman.com/culture/books/2025/04/dark-side-of-the-moomins-tove-jansson)
* [2025-04-13, 11:34:00](https://tech.slashdot.org/story/25/04/13/0130250/new-supercomputing-record-set---using-amds-instinct-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Supercomputing Record Set - Using AMD&apos;s Instinct GPUs](https://tech.slashdot.org/story/25/04/13/0130250/new-supercomputing-record-set---using-amds-instinct-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 11:06:00](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss) - [The U.S. is Building a Fuel Depot in Space](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss)
* [2025-04-13, 09:53:33](https://lobste.rs/s/q3wild/emacs_lisp_elements) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-13, 08:19:19](https://lobste.rs/s/vzl997/torn_write_detection_protection) - [Torn Write Detection and Protection](https://transactional.blog/blog/2025-torn-writes)
* [2025-04-13, 07:44:00](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Cognitive Abilities Predict Performance in Everyday Computer Tasks?](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 07:09:38](https://lobste.rs/s/nj7fv8/glicko_rating_systems) - [Glicko Rating Systems](https://www.glicko.net/glicko.html)
* [2025-04-13, 07:08:31](https://lobste.rs/s/zvzjj6/trueskill_2_improved_bayesian_skill) - [TrueSkill 2: An improved Bayesian skill rating system](https://www.microsoft.com/en-us/research/publication/trueskill-2-improved-bayesian-skill-rating-system/)
* [2025-04-13, 06:22:00](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss) - [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss)
* [2025-04-13, 05:15:48](https://lobste.rs/s/ozcijs/why_is_there_small_house_ibm_s_code_page_437) - [Why is there a \&quot;small house\&quot; in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-13, 03:44:00](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Torvalds Celebrates Git&apos;s 20th Anniversay.  Is It More Famous Than Linux?](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 02:59:24](https://lobste.rs/s/hb0ufy/why_pascal_is_not_my_favourite_language) - [Why Pascal is Not My Favourite Language (1981)](https://doc.cat-v.org/bell_labs/why_pascal/why_pascal_is_not_my_favorite_language.pdf)
* [2025-04-13, 02:21:22](https://lobste.rs/s/maun4k/nix_trigonometric_math_library_from) - [Nix Trigonometric Math Library from Ground Zero](https://lantian.pub/en/article/modify-computer/nix-trigonometric-math-library-from-zero.lantian/)
* [2025-04-13, 01:40:00](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss) - [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss)
* [2025-04-12, 23:41:47](https://lobste.rs/s/r4f38q/anubis_works) - [Anubis works](https://xeiaso.net/notes/2025/anubis-works/)
* [2025-04-12, 20:56:00](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss) - [How The Pentagon Is Adapting To China&apos;s Technological Rise](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss)
* [2025-04-12, 19:00:58](https://lobste.rs/s/pylbkw/zcs_entity_component_system_zig) - [ZCS — An Entity Component System in Zig](https://gamesbymason.com/blog/2025/zcs/)
* [2025-04-12, 16:11:00](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss) - [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss)
* [2025-04-12, 15:27:58](https://lobste.rs/s/3s214q/bps_is_gps_alternative_nobody_s_heard) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-12, 12:53:49](https://lobste.rs/s/gfrmx1/slopsquatting_planting_malicious) - [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks)
* [2025-04-12, 11:28:00](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss)
* [2025-04-12, 10:17:34](https://lobste.rs/s/45xlaz/python_performance_why_if_not_list_is_2x) - [Python Performance: Why &apos;if not list&apos; is 2x Faster Than Using len()](https://blog.codingconfessions.com/p/python-performance-why-if-not-list)
* [2025-04-12, 09:01:29](https://news.ycombinator.com/item?id=43662665) - [Shadertoys Ported to Rust GPU](https://rust-gpu.github.io/blog/2025/04/10/shadertoys/)
* [2025-04-12, 07:33:12](https://news.ycombinator.com/item?id=43662209) - [Why Microgravity Helps Crystals Grow Better](https://sparkgravity.com/journal/microgravity-crystals/)
* [2025-04-12, 06:43:00](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss) - [Commission Targets in-Game Currency in Children&apos;s Video Games](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss)
* [2025-04-12, 02:58:26](https://news.ycombinator.com/item?id=43660952) - [Transformer Lab](https://transformerlab.ai/)
* [2025-04-12, 01:57:00](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - [&apos;Doom Loops&apos; Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss)
* [2025-04-11, 21:40:43](https://news.ycombinator.com/item?id=43658923) - [Writing Cursor rules with a Cursor rule](https://www.adithyan.io/blog/writing-cursor-rules-with-a-cursor-rule)
* [2025-04-11, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss) - [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss)
* [2025-04-11, 20:19:11](https://news.ycombinator.com/item?id=43658089) - [Googler... ex-Googler](https://nerdy.dev/ex-googler)
* [2025-04-11, 17:38:00](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss) - [Soylent News Could Use a stripe.js Module](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss)
* [2025-04-11, 16:30:00](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss) - [GlobalFoundries Mulls UMC Takeover in Effort Dubbed &apos;Project Ultron&apos;](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss)
* [2025-04-11, 11:45:00](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss) - [Physicists Have Confirmed a New Mismatch Between Matter and Antimatter](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss)
* [2025-04-11, 06:56:00](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss) - [Aptera Solar Assisted Car - 20 Year Update](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss)
* [2025-04-11, 02:09:00](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss) - [Framework Halts Sales of Select Laptops in the US Amid Tariff Changes](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss)
* [2025-04-10, 23:31:48](https://news.ycombinator.com/item?id=43648922) - [Neutrinos&apos; maximum possible mass shrinks further](https://www.sciencenews.org/article/neutrino-mass-shrinks-katrin-electron)
* [2025-04-10, 21:26:00](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss) - [9 Rules for New Technology](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss)
* [2025-04-10, 20:47:28](https://news.ycombinator.com/item?id=43647885) - [Bicycle riders&apos; knowledge and experience of structural weakness in bicycles](https://injuryprevention.bmj.com/content/early/2025/03/31/ip-2024-045518)
* [2025-04-10, 16:38:00](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) - [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss)
* [2025-04-10, 14:10:28](https://news.ycombinator.com/item?id=43643944) - [Docker Model Runner](https://www.docker.com/blog/introducing-docker-model-runner/)
* [2025-04-10, 11:52:00](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss) - [How Do Bird Nests Stay Together? Researchers Unravel Entanglement Between Stiff, Straight Rods](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss)
* [2025-04-10, 10:35:32](https://news.ycombinator.com/item?id=43642568) - [Comparing economic inequality between the Roman Empire and the Han Dynasty](https://phys.org/news/2025-04-economic-inequality-roman-empire-han.html)
* [2025-04-10, 07:05:00](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss) - [Another RTX 5090 Connector Melts Down, Reportedly Taking a PSU With It](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
