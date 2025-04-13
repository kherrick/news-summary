# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing Innovations

* [Solving One Million Sudoku Puzzles per hour](https://www.miakoring.de/blog/sudoku) ([comments](https://lobste.rs/s/dgp9xf/solving_one_million_sudoku_puzzles_per))

* [An E-Ink PDA device using the ESP32 S3](https://github.com/ashtf8/EinkPDA) ([comments](https://lobste.rs/s/dgrsuw/e_ink_pda_device_using_esp32_s3))

* [no-panic: Attribute macro to require that the compiler prove a function can't ever panic](https://github.com/dtolnay/no-panic) ([comments](https://lobste.rs/s/zb5wzp/no_panic_attribute_macro_require))

* [Compute's Gazette Magazine Returns After 35 Yrs, Will Focus on Retro Computing](https://www.computesgazette.com/) ([comments](https://news.ycombinator.com/item?id=43671861))

* [Experimental release of GrapheneOS for Pixel 9a](https://grapheneos.social/@GrapheneOS/114327666433966529) ([comments](https://news.ycombinator.com/item?id=43669185))

## Historical and Cultural Insights

* [Why Pascal is Not My Favourite Language (1981)](https://doc.cat-v.org/bell_labs/why_pascal/why_pascal_is_not_my_favorite_language.pdf) ([comments](https://lobste.rs/s/hb0ufy/why_pascal_is_not_my_favourite_language))

* [The Dark Side of the Moomins](https://www.newstatesman.com/culture/books/2025/04/dark-side-of-the-moomins-tove-jansson) ([comments](https://news.ycombinator.com/item?id=43672593))

* [The Secret History of the Manicule, the Little Hand That's Everywhere](https://www.messynessychic.com/2025/03/07/the-secret-history-of-the-manicule-little-hand-thats-everywhere/) ([comments](https://news.ycombinator.com/item?id=43639617))

## Space and Scientific Advancements

* [The U.S. is Building a Fuel Depot in Space](https://soylentnews.org/article.pl?sid=25/04/13/037236&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/13/037236&from=rss))

* [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/13/033235&from=rss))

* [For the First Time Astronomers Watch a Black Hole 'Wake Up' in Real-Time](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Energy and Environmental Developments

* [America's Dirtiest Coal Power Plants Given Exemptions from Pollution Rules to Help Power AI](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/09/154256&from=rss))

* [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/11/1254254&from=rss))

## Technology and AI Perspectives

* [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/11/132246&from=rss))

* [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/11/1143202&from=rss))

* [FSF Urges US Government to Adopt Free-as-in-Freedom Tax Filing Software](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-04-13, 18:39:11](https://lobste.rs/s/dgp9xf/solving_one_million_sudoku_puzzles_per) - [Solving One Million Sudoku Puzzles per hour](https://www.miakoring.de/blog/sudoku)
* [2025-04-13, 18:34:59](https://lobste.rs/s/aa6nas/torvalds_celebrates_git_s_20th) - [Torvalds Celebrates Git&apos;s 20th Anniversay. Is It More Famous Than Linux?](https://m.slashdot.org/story/440853)
* [2025-04-13, 18:34:00](https://idle.slashdot.org/story/25/04/13/1716210/how-a-secretive-gambler-called-the-joker-beat-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Secretive Gambler Called &apos;The Joker&apos; Beat the Texas Lottery](https://idle.slashdot.org/story/25/04/13/1716210/how-a-secretive-gambler-called-the-joker-beat-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 17:51:19](https://lobste.rs/s/dgrsuw/e_ink_pda_device_using_esp32_s3) - [An E-Ink PDA device using the ESP32 S3](https://github.com/ashtf8/EinkPDA)
* [2025-04-13, 17:34:00](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Dirtiest Coal Power Plants Given Exemptions from Pollution Rules to Help Power AI](https://news.slashdot.org/story/25/04/13/1540241/americas-dirtiest-coal-power-plants-given-exemptions-from-pollution-rules-to-help-power-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 17:13:09](https://news.ycombinator.com/item?id=43674267) - [Please Don&apos;t Sell Space in Your Homelab (2023)](https://grumpy.systems/2023/please-dont-sell-space-in-your-homelab/)
* [2025-04-13, 17:00:45](https://lobste.rs/s/oxsyxa/five_critical_roles_your_team) - [The Five Critical Roles of Your Team](https://withinboredom.info/2025/04/12/the-five-critical-roles-of-your-team/)
* [2025-04-13, 16:34:00](https://linux.slashdot.org/story/25/04/12/0518218/linux-mint-debian-edition-7-gets-oem-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Linux Mint Debian Edition 7&apos; Gets OEM Support ](https://linux.slashdot.org/story/25/04/12/0518218/linux-mint-debian-edition-7-gets-oem-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 16:15:00](https://news.ycombinator.com/item?id=43673862) - [A tricky Commodore PET repair: tracking down 6 1/2 bad chips](http://www.righto.com/2025/04/commodore-pet-repair.html)
* [2025-04-13, 16:13:45](https://lobste.rs/s/xgzydz/tricky_commodore_pet_repair_tracking) - [A tricky Commodore PET repair: tracking down 6 1/2 bad chips](http://www.righto.com/2025/04/commodore-pet-repair.html)
* [2025-04-13, 16:02:28](https://news.ycombinator.com/item?id=43673761) - [How much oranger do red orange bags make oranges look?](https://alexanderell.is/posts/orange/)
* [2025-04-13, 15:50:00](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss) - [Ubisoft Argues Players Don&apos;t Own Their Games in Wake of The Crew Lawsuit](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss)
* [2025-04-13, 15:37:05](https://news.ycombinator.com/item?id=43673551) - [Why Fennel?](https://fennel-lang.org/rationale)
* [2025-04-13, 15:34:00](https://tech.slashdot.org/story/25/04/13/0215254/freedos-celebrates-more-than-30-years-of-command-prompts-with-new-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeDOS Celebrates More Than 30 Years of Command Prompts With New Release](https://tech.slashdot.org/story/25/04/13/0215254/freedos-celebrates-more-than-30-years-of-command-prompts-with-new-release?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 15:14:31](https://lobste.rs/s/yrigjs/speeding_up_terraform_caching_with) - [Speeding up Terraform caching with OverlayFS](https://www.bejarano.io/terraform-overlayfs/)
* [2025-04-13, 14:57:37](https://news.ycombinator.com/item?id=43673262) - [Using bad hardware: why I work in the terminal (2024)](https://colean.cc/journal/2024/08sep.html)
* [2025-04-13, 14:55:02](https://news.ycombinator.com/item?id=43673235) - [Tesla Releases Stripped RWD Cybertruck: So Much Worse for Not Much Less Money](https://www.jalopnik.com/1832213/tesla-releases-cheaper-rwd-cybertruck/)
* [2025-04-13, 14:42:16](https://news.ycombinator.com/item?id=43673151) - [Skywork-OR1: new SOTA 32B thinking model with open weight](https://github.com/SkyworkAI/Skywork-OR1)
* [2025-04-13, 14:21:48](https://news.ycombinator.com/item?id=43673011) - [Making SNES ROMs using C#](https://www.reddit.com/r/dotnet/s/fhm4TUNhlX)
* [2025-04-13, 14:17:03](https://lobste.rs/s/zb5wzp/no_panic_attribute_macro_require) - [no-panic: Attribute macro to require that the compiler prove a function can&apos;t ever panic](https://github.com/dtolnay/no-panic)
* [2025-04-13, 13:36:17](https://news.ycombinator.com/item?id=43672712) - [Wasting Inferences with Aider](https://worksonmymachine.substack.com/p/wasting-inferences-with-aider)
* [2025-04-13, 13:28:00](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Urges US Government to Adopt Free-as-in-Freedom Tax Filing Software](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 13:15:57](https://news.ycombinator.com/item?id=43672593) - [The Dark Side of the Moomins](https://www.newstatesman.com/culture/books/2025/04/dark-side-of-the-moomins-tove-jansson)
* [2025-04-13, 11:34:00](https://tech.slashdot.org/story/25/04/13/0130250/new-supercomputing-record-set---using-amds-instinct-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Supercomputing Record Set - Using AMD&apos;s Instinct GPUs](https://tech.slashdot.org/story/25/04/13/0130250/new-supercomputing-record-set---using-amds-instinct-gpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 11:16:18](https://news.ycombinator.com/item?id=43671940) - [AMD NPU and Xilinx Versal AI Engines Signal Processing in Radio Astronomy (2024) [pdf]](https://git.astron.nl/RD/acap/-/raw/main/Presentation_FPL24_Vincent_Sprave.pdf)
* [2025-04-13, 11:06:00](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss) - [The U.S. is Building a Fuel Depot in Space](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss)
* [2025-04-13, 11:01:16](https://news.ycombinator.com/item?id=43671861) - [Compute&apos;s Gazette Magazine Returns After 35 Yrs, Will Focus on Retro Computing](https://www.computesgazette.com/)
* [2025-04-13, 09:53:33](https://lobste.rs/s/q3wild/emacs_lisp_elements) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-13, 09:40:50](https://lobste.rs/s/qsodus/dslogic_u3pro16_review_teardown) - [DSLogic U3Pro16 Review and Teardown](https://tomverbeure.github.io/2025/04/12/DSLogic-U3Pro16-Teardown.html)
* [2025-04-13, 09:12:19](https://news.ycombinator.com/item?id=43671308) - [Whenever – typed and DST-safe datetimes for Python](https://github.com/ariebovenberg/whenever)
* [2025-04-13, 08:19:19](https://lobste.rs/s/vzl997/torn_write_detection_protection) - [Torn Write Detection and Protection](https://transactional.blog/blog/2025-torn-writes)
* [2025-04-13, 07:44:00](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Cognitive Abilities Predict Performance in Everyday Computer Tasks?](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 07:09:38](https://lobste.rs/s/nj7fv8/glicko_rating_systems) - [Glicko Rating Systems](https://www.glicko.net/glicko.html)
* [2025-04-13, 07:08:31](https://lobste.rs/s/zvzjj6/trueskill_2_improved_bayesian_skill) - [TrueSkill 2: An improved Bayesian skill rating system](https://www.microsoft.com/en-us/research/publication/trueskill-2-improved-bayesian-skill-rating-system/)
* [2025-04-13, 06:22:00](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss) - [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss)
* [2025-04-13, 05:15:48](https://lobste.rs/s/ozcijs/why_is_there_small_house_ibm_s_code_page_437) - [Why is there a \&quot;small house\&quot; in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-13, 04:00:28](https://news.ycombinator.com/item?id=43669981) - [How to not build a two stage model rocket](https://knowone08.gitbook.io/vgecrocketry)
* [2025-04-13, 03:44:00](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Torvalds Celebrates Git&apos;s 20th Anniversay.  Is It More Famous Than Linux?](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 02:59:24](https://lobste.rs/s/hb0ufy/why_pascal_is_not_my_favourite_language) - [Why Pascal is Not My Favourite Language (1981)](https://doc.cat-v.org/bell_labs/why_pascal/why_pascal_is_not_my_favorite_language.pdf)
* [2025-04-13, 02:21:22](https://lobste.rs/s/maun4k/nix_trigonometric_math_library_from) - [Nix Trigonometric Math Library from Ground Zero](https://lantian.pub/en/article/modify-computer/nix-trigonometric-math-library-from-zero.lantian/)
* [2025-04-13, 01:40:00](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss) - [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss)
* [2025-04-13, 01:34:00](https://tech.slashdot.org/story/25/04/13/006221/wsj-says-china-acknowledged-its-role-in-us-infrastructure-hacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Says China &apos;Acknowledged Its Role in U.S. Infrastructure Hacks&apos;](https://tech.slashdot.org/story/25/04/13/006221/wsj-says-china-acknowledged-its-role-in-us-infrastructure-hacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 01:31:38](https://news.ycombinator.com/item?id=43669308) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-13, 01:05:31](https://news.ycombinator.com/item?id=43669185) - [Experimental release of GrapheneOS for Pixel 9a](https://grapheneos.social/@GrapheneOS/114327666433966529)
* [2025-04-13, 00:27:38](https://lobste.rs/s/sugnms/rng_cosine_nix) - [RNG and Cosine in Nix](https://unnamed.website/posts/rng-cosine-nix/)
* [2025-04-12, 23:41:47](https://lobste.rs/s/r4f38q/anubis_works) - [Anubis works](https://xeiaso.net/notes/2025/anubis-works/)
* [2025-04-12, 22:41:00](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Original 1977 &apos;Star Wars&apos; Cut Will Be Shown at a Theater for First Time in Decades](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 22:02:58](https://news.ycombinator.com/item?id=43668250) - [WebTUI – A CSS Library That Brings the Beauty of Terminal UIs to the Browser](https://webtui.ironclad.sh)
* [2025-04-12, 21:50:39](https://news.ycombinator.com/item?id=43668192) - [I ditched my laptop for a pocketable mini PC and a pair of AR glasses](https://www.tomsguide.com/computing/i-ditched-my-laptop-for-a-pocketable-mini-pc-and-a-pair-of-ar-glasses-heres-what-happened)
* [2025-04-12, 21:41:00](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Chrome To Patch Decades-Old &apos;Browser History Sniffing&apos; Flaw That Let Sites Peek At Your History](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 20:56:00](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss) - [How The Pentagon Is Adapting To China&apos;s Technological Rise](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss)
* [2025-04-12, 20:41:00](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Justice Department Shuts Down Its Cryptocurrency Fraud Unit](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 20:31:27](https://lobste.rs/s/apb8w3/cl_yasboi_yet_another_starter) - [cl-yasboi: Yet Another Starter Boilerplate for Common Lisp](https://github.com/sebastiancarlos/cl-yasboi)
* [2025-04-12, 19:41:00](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [For the First Time Astronomers Watch a Black Hole &apos;Wake Up&apos; in Real-Time](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 19:00:58](https://lobste.rs/s/pylbkw/zcs_entity_component_system_zig) - [ZCS — An Entity Component System in Zig](https://gamesbymason.com/blog/2025/zcs/)
* [2025-04-12, 18:55:17](https://news.ycombinator.com/item?id=43667010) - [Why is there a “small house” in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-12, 18:41:00](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany&apos;s &apos;Universal Basic Income&apos; Experiment Proves It Doesn&apos;t Encourage Unmployment](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 17:41:00](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Tells US Congress:  &apos;We Need Energy&apos;](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 17:40:09](https://news.ycombinator.com/item?id=43666439) - [Nice things with SVG](https://fuma-nama.vercel.app/blog/svg-art)
* [2025-04-12, 16:11:00](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss) - [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss)
* [2025-04-12, 15:27:58](https://lobste.rs/s/3s214q/bps_is_gps_alternative_nobody_s_heard) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-12, 15:09:14](https://news.ycombinator.com/item?id=43665046) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-12, 12:53:49](https://lobste.rs/s/gfrmx1/slopsquatting_planting_malicious) - [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks)
* [2025-04-12, 12:05:07](https://lobste.rs/s/xep8ix/some_features_every_javascript) - [Some features that every JavaScript developer should know in 2025](https://waspdev.com/articles/2025-04-06/features-that-every-js-developer-must-know-in-2025)
* [2025-04-12, 11:28:00](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss)
* [2025-04-12, 10:17:34](https://lobste.rs/s/45xlaz/python_performance_why_if_not_list_is_2x) - [Python Performance: Why &apos;if not list&apos; is 2x Faster Than Using len()](https://blog.codingconfessions.com/p/python-performance-why-if-not-list)
* [2025-04-12, 09:48:26](https://lobste.rs/s/erkm24/5_levels_configuration_languages) - [The 5 Levels of Configuration Languages](https://beza1e1.tuxen.de/config_levels.html)
* [2025-04-12, 07:01:56](https://news.ycombinator.com/item?id=43662031) - [How I install personal versions of programs on Unix](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/MyPersonalProgramsSetup)
* [2025-04-12, 06:43:00](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss) - [Commission Targets in-Game Currency in Children&apos;s Video Games](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss)
* [2025-04-12, 04:18:04](https://lobste.rs/s/0ox9js/rust_c_compiler_95_9_test_pass_rate_odd) - [Rust to C compiler - 95.9% test pass rate, odd platforms](https://fractalfir.github.io/generated_html/cg_clr_odd_platforms.html)
* [2025-04-12, 01:57:00](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - [&apos;Doom Loops&apos; Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss)
* [2025-04-12, 01:31:45](https://news.ycombinator.com/item?id=43660520) - [Philip K. Dick: Stanisław Lem Is a Communist Committee](https://culture.pl/en/article/philip-k-dick-stanislaw-lem-is-a-communist-committee)
* [2025-04-11, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss) - [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss)
* [2025-04-11, 17:38:00](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss) - [Soylent News Could Use a stripe.js Module](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss)
* [2025-04-11, 16:30:00](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss) - [GlobalFoundries Mulls UMC Takeover in Effort Dubbed &apos;Project Ultron&apos;](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss)
* [2025-04-11, 12:18:39](https://news.ycombinator.com/item?id=43652968) - [Show HN: Chonky – a neural approach for text semantic chunking](https://github.com/mirth/chonky)
* [2025-04-11, 11:45:00](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss) - [Physicists Have Confirmed a New Mismatch Between Matter and Antimatter](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss)
* [2025-04-11, 06:56:00](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss) - [Aptera Solar Assisted Car - 20 Year Update](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss)
* [2025-04-11, 02:09:00](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss) - [Framework Halts Sales of Select Laptops in the US Amid Tariff Changes](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss)
* [2025-04-10, 22:12:47](https://news.ycombinator.com/item?id=43648536) - [Nominal Aphasia: Problems in Name Retrieval](https://serendipstudio.org/exchange/darlene-forde/nominal-aphasia-problems-name-retrieval)
* [2025-04-10, 21:26:00](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss) - [9 Rules for New Technology](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss)
* [2025-04-10, 20:10:14](https://news.ycombinator.com/item?id=43647605) - [Cargo-mutants:zombie: Inject bugs and see if your tests catch them](https://github.com/sourcefrog/cargo-mutants)
* [2025-04-10, 17:03:37](https://news.ycombinator.com/item?id=43645925) - [RNA interference and nanomedicine team up to fight dangerous fungal infections](https://phys.org/news/2025-03-rna-nanomedicine-dangerous-fungal-infections.html)
* [2025-04-10, 16:38:00](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) - [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss)
* [2025-04-10, 11:52:00](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss) - [How Do Bird Nests Stay Together? Researchers Unravel Entanglement Between Stiff, Straight Rods](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss)
* [2025-04-10, 07:05:00](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss) - [Another RTX 5090 Connector Melts Down, Reportedly Taking a PSU With It](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
* [2025-04-10, 01:01:43](https://news.ycombinator.com/item?id=43639617) - [The Secret History of the Manicule, the Little Hand That&apos;s Everywhere](https://www.messynessychic.com/2025/03/07/the-secret-history-of-the-manicule-little-hand-thats-everywhere/)
* [2025-04-09, 21:33:00](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss) - [FreeDOS 1.4 Brings New Fixes and Features to Modern and Vintage DOS-Based PCs](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss)
* [2025-04-09, 19:49:37](https://news.ycombinator.com/item?id=43636948) - [Telling the Bees](https://emergencemagazine.org/essay/telling-the-bees/)
* [2025-04-09, 17:33:05](https://news.ycombinator.com/item?id=43634853) - [More than 1,500 new fonts – including all-time favorites – come to Adobe Fonts](https://blog.adobe.com/en/publish/2025/04/08/more-than-1500-new-fonts-including-all-time-favorites-come-to-adobe-fonts)
* [2025-04-09, 16:48:00](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) - [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss)
* [2025-04-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss) - [April 7 — Reflections on Twenty Years of Git](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss)
* [2025-04-09, 07:28:00](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) - [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss)
* [2025-04-09, 02:42:00](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss) - [Scientists Use Sound to Generate and Shape Water Waves](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss)
