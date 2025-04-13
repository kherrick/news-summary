# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Updates

* [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements) explores an in-depth guide on programming in Emacs Lisp, highlighting its programming elements and capabilities [Comments](https://lobste.rs/s/q3wild/emacs_lisp_elements).

* [DSLogic U3Pro16 Review and Teardown](https://tomverbeure.github.io/2025/04/12/DSLogic-U3Pro16-Teardown.html) breaks down the features and the internals of this logic analyzer [Comments](https://lobste.rs/s/qsodus/dslogic_u3pro16_review_teardown).

* [Whenever – typed and DST-safe datetimes for Python](https://github.com/ariebovenberg/whenever) introduces a Python datetime library prioritizing type safety and daylight saving time handling [Comments](https://news.ycombinator.com/item?id=43671308).

* [Core-MATH: high performance open-source mathematical functions with correct rounding](https://core-math.gitlabpages.inria.fr/) discusses optimized mathematical functions with a focus on accurate rounding [Comments](https://lobste.rs/s/p4k5m6/core_math_high_performance_open_source).

* [Experimental release of GrapheneOS for Pixel 9a](https://grapheneos.social/@GrapheneOS/114327666433966529) announces a secure and privacy-focused OS for a new Pixel model [Comments](https://news.ycombinator.com/item?id=43669185).

## Scientific Discoveries

* [Do Cognitive Abilities Predict Performance in Everyday Computer Tasks?](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&utm_medium=feed) investigates the relationship between intelligence and efficacy in digital interactions [Comments](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&from=rss) explores rhythm's effects on cognitive enhancement and learning [Comments](https://soylentnews.org/article.pl?sid=25/04/11/132246&from=rss).

* [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&from=rss) uncovers a unique crystalline form significantly improving 3D-printed material resilience [Comments](https://soylentnews.org/article.pl?sid=25/04/11/1254254&from=rss).

## Society, Policy, and Ethics

* [Universal basic income: German experiment bring surprising results](https://www.ctvnews.ca/lifestyle/article/a-german-experiment-gave-people-a-basic-monthly-income-the-effect-on-their-work-ethic-was-surprising/) reports on UBI's unexpected impact on societal behavior and work ethic [Comments](https://news.ycombinator.com/item?id=43671196).

* [Natural Language Is Now the Only No-Code Tool That Matters](https://www.xfaang.com/blog/Natural-Language-Is-Now-the-Only-No-Code-Tool-That-Matters/slvrJ005SjSnDqnIIfeVX) examines how natural language processing has transformed no-code programming paradigms [Comments](https://lobste.rs/s/tvgcda/natural_language_is_now_only_no_code_tool).

* [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks) uncovers potential vulnerabilities in AI package naming conventions [Comments](https://lobste.rs/s/gfrmx1/slopsquatting_planting_malicious).

## Cultural and Historical Highlights

* [Original 1977 'Star Wars' Cut Will Be Shown at a Theater for First Time in Decades](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed) delights fans as a rare cinematic experience resurfaces [Comments](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [33-year-old AmigaOS for Commodore computers gets an unexpected update News](https://www.tomshardware.com/software/operating-systems/33-year-old-amigaos-for-commodore-computers-gets-an-unexpected-update) surprises the tech community with a revival of a retro operating system [Comments](https://news.ycombinator.com/item?id=43670238).

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

* [2025-04-13, 09:53:33](https://lobste.rs/s/q3wild/emacs_lisp_elements) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-13, 09:40:50](https://lobste.rs/s/qsodus/dslogic_u3pro16_review_teardown) - [DSLogic U3Pro16 Review and Teardown](https://tomverbeure.github.io/2025/04/12/DSLogic-U3Pro16-Teardown.html)
* [2025-04-13, 09:12:19](https://news.ycombinator.com/item?id=43671308) - [Whenever – typed and DST-safe datetimes for Python](https://github.com/ariebovenberg/whenever)
* [2025-04-13, 08:50:31](https://news.ycombinator.com/item?id=43671196) - [Universal basic income: German experiment bring surprising results](https://www.ctvnews.ca/lifestyle/article/a-german-experiment-gave-people-a-basic-monthly-income-the-effect-on-their-work-ethic-was-surprising/)
* [2025-04-13, 08:28:35](https://news.ycombinator.com/item?id=43671098) - [My imaginary children aren&apos;t using your streaming service](https://shkspr.mobi/blog/2021/04/my-imaginary-children-arent-using-your-streaming-service/)
* [2025-04-13, 08:19:19](https://lobste.rs/s/vzl997/torn_write_detection_protection) - [Torn Write Detection and Protection](https://transactional.blog/blog/2025-torn-writes)
* [2025-04-13, 07:44:00](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Cognitive Abilities Predict Performance in Everyday Computer Tasks?](https://science.slashdot.org/story/25/04/13/0238237/do-cognitive-abilities-predict-performance-in-everyday-computer-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 07:09:38](https://lobste.rs/s/nj7fv8/glicko_rating_systems) - [Glicko Rating Systems](https://www.glicko.net/glicko.html)
* [2025-04-13, 07:08:31](https://lobste.rs/s/zvzjj6/trueskill_2_improved_bayesian_skill) - [TrueSkill 2: An improved Bayesian skill rating system](https://www.microsoft.com/en-us/research/publication/trueskill-2-improved-bayesian-skill-rating-system/)
* [2025-04-13, 06:22:00](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss) - [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss)
* [2025-04-13, 05:15:48](https://lobste.rs/s/ozcijs/why_is_there_small_house_ibm_s_code_page_437) - [Why is there a \&quot;small house\&quot; in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-13, 05:10:02](https://news.ycombinator.com/item?id=43670238) - [33-year-old AmigaOS for Commodore computers gets an unexpected update News](https://www.tomshardware.com/software/operating-systems/33-year-old-amigaos-for-commodore-computers-gets-an-unexpected-update)
* [2025-04-13, 04:48:48](https://news.ycombinator.com/item?id=43670171) - [Cross-Entropy and KL Divergence](https://eli.thegreenplace.net/2025/cross-entropy-and-kl-divergence/)
* [2025-04-13, 04:02:47](https://news.ycombinator.com/item?id=43669990) - [A Farewell to the ArcoLinux University](https://www.arcolinux.info/a-farewell-to-the-arcolinux-university/)
* [2025-04-13, 04:00:28](https://news.ycombinator.com/item?id=43669981) - [How to not build a two stage model rocket](https://knowone08.gitbook.io/vgecrocketry)
* [2025-04-13, 03:44:00](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Torvalds Celebrates Git&apos;s 20th Anniversay.  Is It More Famous Than Linux?](https://linux.slashdot.org/story/25/04/13/0110228/torvalds-celebrates-gits-20th-anniversay-is-it-more-famous-than-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 03:32:18](https://news.ycombinator.com/item?id=43669887) - [How to repair the parts that explode in Lenovo Yoga laptops](http://adammunich.com/how-to-repair-the-parts-that-explode-in-lenovo-yoga-laptops/)
* [2025-04-13, 02:59:24](https://lobste.rs/s/hb0ufy/why_pascal_is_not_my_favourite_language) - [Why Pascal is Not My Favourite Language (1981)](https://doc.cat-v.org/bell_labs/why_pascal/why_pascal_is_not_my_favorite_language.pdf)
* [2025-04-13, 02:21:22](https://lobste.rs/s/maun4k/nix_trigonometric_math_library_from) - [Nix Trigonometric Math Library from Ground Zero](https://lantian.pub/en/article/modify-computer/nix-trigonometric-math-library-from-zero.lantian/)
* [2025-04-13, 01:40:00](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss) - [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss)
* [2025-04-13, 01:34:00](https://tech.slashdot.org/story/25/04/13/006221/wsj-says-china-acknowledged-its-role-in-us-infrastructure-hacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Says China &apos;Acknowledged Its Role in U.S. Infrastructure Hacks&apos;](https://tech.slashdot.org/story/25/04/13/006221/wsj-says-china-acknowledged-its-role-in-us-infrastructure-hacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-13, 01:31:38](https://news.ycombinator.com/item?id=43669308) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-13, 01:05:31](https://news.ycombinator.com/item?id=43669185) - [Experimental release of GrapheneOS for Pixel 9a](https://grapheneos.social/@GrapheneOS/114327666433966529)
* [2025-04-13, 00:27:38](https://lobste.rs/s/sugnms/rng_cosine_nix) - [RNG and Cosine in Nix](https://unnamed.website/posts/rng-cosine-nix/)
* [2025-04-12, 23:51:41](https://news.ycombinator.com/item?id=43668876) - [How to Structure a B2B Marketplace Venture](https://sloanreview.mit.edu/article/how-to-structure-a-b2b-marketplace-venture/)
* [2025-04-12, 23:41:47](https://lobste.rs/s/r4f38q/anubis_works) - [Anubis works](https://xeiaso.net/notes/2025/anubis-works/)
* [2025-04-12, 22:41:00](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Original 1977 &apos;Star Wars&apos; Cut Will Be Shown at a Theater for First Time in Decades](https://entertainment.slashdot.org/story/25/04/12/2134212/original-1977-star-wars-cut-will-be-shown-at-a-theater-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 22:32:19](https://news.ycombinator.com/item?id=43668433) - [Anubis Works](https://xeiaso.net/notes/2025/anubis-works/)
* [2025-04-12, 22:11:15](https://lobste.rs/s/tvgcda/natural_language_is_now_only_no_code_tool) - [Natural Language Is Now the Only No-Code Tool That Matters](https://www.xfaang.com/blog/Natural-Language-Is-Now-the-Only-No-Code-Tool-That-Matters/slvrJ005SjSnDqnIIfeVX)
* [2025-04-12, 22:10:35](https://news.ycombinator.com/item?id=43668290) - [YAML: The Norway Problem (2022)](https://www.bram.us/2022/01/11/yaml-the-norway-problem/)
* [2025-04-12, 22:02:58](https://news.ycombinator.com/item?id=43668250) - [WebTUI – A CSS Library That Brings the Beauty of Terminal UIs to the Browser](https://webtui.ironclad.sh)
* [2025-04-12, 21:50:39](https://news.ycombinator.com/item?id=43668192) - [I ditched my laptop for a pocketable mini PC and a pair of AR glasses](https://www.tomsguide.com/computing/i-ditched-my-laptop-for-a-pocketable-mini-pc-and-a-pair-of-ar-glasses-heres-what-happened)
* [2025-04-12, 21:41:00](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Chrome To Patch Decades-Old &apos;Browser History Sniffing&apos; Flaw That Let Sites Peek At Your History](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 20:56:00](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss) - [How The Pentagon Is Adapting To China&apos;s Technological Rise](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss)
* [2025-04-12, 20:41:00](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Justice Department Shuts Down Its Cryptocurrency Fraud Unit](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 20:31:27](https://lobste.rs/s/apb8w3/cl_yasboi_yet_another_starter) - [cl-yasboi: Yet Another Starter Boilerplate for Common Lisp](https://github.com/sebastiancarlos/cl-yasboi)
* [2025-04-12, 19:41:00](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [For the First Time Astronomers Watch a Black Hole &apos;Wake Up&apos; in Real-Time](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 19:02:26](https://news.ycombinator.com/item?id=43667061) - [Show HN: memEx, a personal knowledge base inspired by zettlekasten and org-mode](https://gitea.bubbletea.dev/shibao/memex)
* [2025-04-12, 19:00:58](https://lobste.rs/s/pylbkw/zcs_entity_component_system_zig) - [ZCS — An Entity Component System in Zig](https://gamesbymason.com/blog/2025/zcs/)
* [2025-04-12, 18:55:17](https://news.ycombinator.com/item?id=43667010) - [Why is there a “small house” in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-12, 18:41:00](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany&apos;s &apos;Universal Basic Income&apos; Experiment Proves It Doesn&apos;t Encourage Unmployment](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 17:41:00](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Tells US Congress:  &apos;We Need Energy&apos;](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 17:40:09](https://news.ycombinator.com/item?id=43666439) - [Nice things with SVG](https://fuma-nama.vercel.app/blog/svg-art)
* [2025-04-12, 16:41:00](https://slashdot.org/story/25/04/12/027252/microsoft-is-killing-skype---and-refusing-refunds-for-prepaid-international-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Killing Skype - and Refusing Refunds for Prepaid International Calls](https://slashdot.org/story/25/04/12/027252/microsoft-is-killing-skype---and-refusing-refunds-for-prepaid-international-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 16:34:00](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Urges US Government to Adopt Free-as-in-Freedom Tax Filing Software](https://news.slashdot.org/story/25/04/12/0432222/fsf-urges-us-government-to-adopt-free-as-in-freedom-tax-filing-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 16:29:03](https://lobste.rs/s/xgbs35/holographic_masks) - [Holographic Masks](https://codepen.io/HejChristian/full/YPzLbYX)
* [2025-04-12, 16:11:00](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss) - [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss)
* [2025-04-12, 16:01:34](https://news.ycombinator.com/item?id=43665540) - [ArkType: Ergonomic TS validator 100x faster than Zod](https://arktype.io/)
* [2025-04-12, 15:52:04](https://lobste.rs/s/p4k5m6/core_math_high_performance_open_source) - [CORE-MATH: high performance open-source mathematical functions with correct rounding](https://core-math.gitlabpages.inria.fr/)
* [2025-04-12, 15:41:00](https://news.slashdot.org/story/25/04/12/1539244/trump-tariffs-add-exemptions-friday-night-for-smartphones-and-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Tariffs Add Exemptions Friday Night for Smartphones and Other Electronics](https://news.slashdot.org/story/25/04/12/1539244/trump-tariffs-add-exemptions-friday-night-for-smartphones-and-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 15:27:58](https://lobste.rs/s/3s214q/bps_is_gps_alternative_nobody_s_heard) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-12, 15:26:25](https://news.ycombinator.com/item?id=43665201) - [Tunarr: Create and configure live TV channels from media on your servers](https://tunarr.com/)
* [2025-04-12, 15:09:14](https://news.ycombinator.com/item?id=43665046) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-12, 14:34:00](https://tech.slashdot.org/story/25/04/12/067219/facebook-whistleblower-alleges-metas-ai-model-llama-was-used-to-help-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Whistleblower Alleges Meta&apos;s AI Model Llama Was Used to Help DeepSeek](https://tech.slashdot.org/story/25/04/12/067219/facebook-whistleblower-alleges-metas-ai-model-llama-was-used-to-help-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 13:57:54](https://lobste.rs/s/uetrpm/my_cloudflare_r2_has_been_blocked_from) - [My Cloudflare R2 has been blocked from LaLiga (Spain football league), is it even legal?](https://lobste.rs/s/uetrpm/my_cloudflare_r2_has_been_blocked_from)
* [2025-04-12, 13:46:42](https://lobste.rs/s/xvydc9/awe_compiler_for_algol_w_programming) - [awe: A compiler for the Algol W programming language](https://github.com/glynawe/awe)
* [2025-04-12, 12:53:49](https://lobste.rs/s/gfrmx1/slopsquatting_planting_malicious) - [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks)
* [2025-04-12, 12:40:13](https://news.ycombinator.com/item?id=43663865) - [Open source and self hostable/private file converter](https://vert.sh)
* [2025-04-12, 12:05:07](https://lobste.rs/s/xep8ix/some_features_every_javascript) - [Some features that every JavaScript developer should know in 2025](https://waspdev.com/articles/2025-04-06/features-that-every-js-developer-must-know-in-2025)
* [2025-04-12, 12:05:00](https://news.slashdot.org/story/25/04/12/125242/leaving-money-on-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leaving Money on the Table](https://news.slashdot.org/story/25/04/12/125242/leaving-money-on-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 11:28:00](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss)
* [2025-04-12, 10:17:34](https://lobste.rs/s/45xlaz/python_performance_why_if_not_list_is_2x) - [Python Performance: Why &apos;if not list&apos; is 2x Faster Than Using len()](https://blog.codingconfessions.com/p/python-performance-why-if-not-list)
* [2025-04-12, 09:48:26](https://lobste.rs/s/erkm24/5_levels_configuration_languages) - [The 5 Levels of Configuration Languages](https://beza1e1.tuxen.de/config_levels.html)
* [2025-04-12, 09:05:32](https://news.ycombinator.com/item?id=43662686) - [The Bitter Prediction](https://4zm.org/2025/04/05/bitter-prediction.html)
* [2025-04-12, 08:58:40](https://lobste.rs/s/ele5ij/shadertoys_ported_rust_gpu) - [Shadertoys ported to Rust GPU](https://rust-gpu.github.io/blog/2025/04/10/shadertoys)
* [2025-04-12, 07:20:00](https://tech.slashdot.org/story/25/04/12/0720212/facebook-is-just-craigslist-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Is Just Craigslist Now](https://tech.slashdot.org/story/25/04/12/0720212/facebook-is-just-craigslist-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 06:43:00](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss) - [Commission Targets in-Game Currency in Children&apos;s Video Games](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss)
* [2025-04-12, 04:18:04](https://lobste.rs/s/0ox9js/rust_c_compiler_95_9_test_pass_rate_odd) - [Rust to C compiler - 95.9% test pass rate, odd platforms](https://fractalfir.github.io/generated_html/cg_clr_odd_platforms.html)
* [2025-04-12, 01:57:00](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - [&apos;Doom Loops&apos; Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss)
* [2025-04-11, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss) - [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss)
* [2025-04-11, 19:47:08](https://lobste.rs/s/g1xfen/generative_ai_servo) - [Generative AI in Servo](https://www.azabani.com/2025/04/11/generative-ai-in-servo.html)
* [2025-04-11, 17:38:00](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss) - [Soylent News Could Use a stripe.js Module](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss)
* [2025-04-11, 16:30:00](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss) - [GlobalFoundries Mulls UMC Takeover in Effort Dubbed &apos;Project Ultron&apos;](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss)
* [2025-04-11, 12:18:39](https://news.ycombinator.com/item?id=43652968) - [Show HN: Chonky – a neural approach for text semantic chunking](https://github.com/mirth/chonky)
* [2025-04-11, 11:45:00](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss) - [Physicists Have Confirmed a New Mismatch Between Matter and Antimatter](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss)
* [2025-04-11, 06:56:00](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss) - [Aptera Solar Assisted Car - 20 Year Update](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss)
* [2025-04-11, 02:09:00](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss) - [Framework Halts Sales of Select Laptops in the US Amid Tariff Changes](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss)
* [2025-04-10, 21:57:17](https://news.ycombinator.com/item?id=43648423) - [Microgravity 101](https://sparkgravity.com/journal/microgravity-101/)
* [2025-04-10, 21:26:00](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss) - [9 Rules for New Technology](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss)
* [2025-04-10, 16:38:00](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) - [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss)
* [2025-04-10, 11:59:24](https://news.ycombinator.com/item?id=43642959) - [ESA has a commercial launch strategy, but will member states pay?](https://arstechnica.com/space/2025/03/esa-finally-has-a-commercial-launch-strategy-but-will-member-states-pay/)
* [2025-04-10, 11:52:00](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss) - [How Do Bird Nests Stay Together? Researchers Unravel Entanglement Between Stiff, Straight Rods](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss)
* [2025-04-10, 07:05:00](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss) - [Another RTX 5090 Connector Melts Down, Reportedly Taking a PSU With It](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
* [2025-04-10, 02:17:08](https://news.ycombinator.com/item?id=43640013) - [Numbers and Unicorns](https://freedommathdance.blogspot.com/2025/01/on-numbers-and-unicorns.html)
* [2025-04-09, 21:33:00](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss) - [FreeDOS 1.4 Brings New Fixes and Features to Modern and Vintage DOS-Based PCs](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss)
* [2025-04-09, 19:58:40](https://news.ycombinator.com/item?id=43637082) - [Monty Python and the Holy Grail became a comedy legend](https://www.bbc.com/culture/article/20250407-how-monty-python-and-the-holy-grail-became-a-comedy-legend)
* [2025-04-09, 16:48:00](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) - [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss)
* [2025-04-09, 14:52:46](https://news.ycombinator.com/item?id=43632828) - [CERN releases report on the feasibility of a possible Future Circular Collider](https://home.cern/news/news/accelerators/cern-releases-report-feasibility-possible-future-circular-collider)
* [2025-04-09, 12:40:57](https://news.ycombinator.com/item?id=43631398) - [Dust in the wind: How cities alter natural airborne particles](https://phys.org/news/2025-04-cities-natural-airborne-particles.html)
* [2025-04-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss) - [April 7 — Reflections on Twenty Years of Git](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss)
* [2025-04-09, 07:28:00](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) - [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss)
* [2025-04-09, 02:42:00](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss) - [Scientists Use Sound to Generate and Shape Water Waves](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss)
