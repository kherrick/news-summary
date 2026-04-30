# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advances

* [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - NASA is working on a groundbreaking telescope promising to provide an extensive atlas of the universe with advanced observation capabilities. [Comments](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)

* [Granite 4.1: IBM&apos;s 8B Model Matching 32B MoE](https://firethering.com/granite-4-1-ibm-open-source-model-family/) - IBM introduces Granite 4.1, an 8B model claimed to match 32B Mixture of Experts models in performance. [Comments](https://news.ycombinator.com/item?id=47960507)

* [First Tesla Semi Rolls Off High-Volume Production Line](https://tech.slashdot.org/story/26/04/30/0514236/first-tesla-semi-rolls-off-high-volume-production-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tesla achieves a milestone as its first Semi truck rolls off the high-volume production line. [Comments](https://tech.slashdot.org/story/26/04/30/0514236/first-tesla-semi-rolls-off-high-volume-production-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Software and Programming Updates

* [Amber-Lang 0.6.0 - New release, check what&apos;s new](https://docs.amber-lang.com/getting_started/whats_new) - Check out the latest release of Amber Language, featuring noteworthy updates and advancements. [Comments](https://lobste.rs/s/heoyfd/amber_lang_0_6_0_new_release_check_what_s_new)

* [C++26: string and string_view improvements](https://www.sandordargo.com/blog/2026/04/29/cpp26-string-string_view-improvements) - Examine upcoming improvements in `string` and `string_view` for C++26, highlighting strides in performance and usability. [Comments](https://lobste.rs/s/tgu1zo/c_26_string_string_view_improvements)

* [Alignment whack-a-mole: Finetuning activates recall of copyrighted books in LLMs](https://github.com/cauchy221/Alignment-Whack-a-Mole-Code) - A study reveals unintended consequences in fine-tuning language models, causing them to recall and reproduce copyrighted material. [Comments](https://news.ycombinator.com/item?id=47957627)

## Artificial Intelligence Developments

* [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - China's largest streaming platform ambitiously plans to use AI-generated content for most of its new films. [Comments](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)

* [The Zig project&apos;s rationale for their anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/) - Learn about Zig's stance on AI contribution policies in open source software. [Comments](https://news.ycombinator.com/item?id=47957294)

* [Mike: open-source legal AI](https://mikeoss.com/) - Introducing Mike, a groundbreaking AI legal assistant utilizing open-source technologies to expand access to legal insight. [Comments](https://news.ycombinator.com/item?id=47956739)

## Miscellaneous Science and Innovation

* [Biology is a Burrito: A text- and visual-based journey through a living cell](https://burrito.bio/essays/biology-is-a-burrito) - Dive into an innovative exploration linking biological structures to a burrito through interactive visuals. [Comments](https://news.ycombinator.com/item?id=47957714)

* [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - Researchers uncover that raccoons exhibit problem-solving behavior just for playful enjoyment. [Comments](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)

* [A grounded conceptual model for ownership types in Rust](https://cacm.acm.org/research-highlights/a-grounded-conceptual-model-for-ownership-types-in-rust/) - Explore a conceptual model that clarifies Rust's complex ownership types for programming reference. [Comments](https://news.ycombinator.com/item?id=47957116)

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

* [2026-04-30, 11:00:00](https://yro.slashdot.org/story/26/04/30/0533223/doj-sues-cloudera-for-deliberately-excluding-american-workers-from-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Sues Cloudera For Deliberately Excluding American Workers From Tech Jobs](https://yro.slashdot.org/story/26/04/30/0533223/doj-sues-cloudera-for-deliberately-excluding-american-workers-from-tech-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 10:31:17](https://news.ycombinator.com/item?id=47960507) - [Granite 4.1: IBM&apos;s 8B Model Matching 32B MoE](https://firethering.com/granite-4-1-ibm-open-source-model-family/)
* [2026-04-30, 09:30:52](https://lobste.rs/s/pcymmp/mozilla_s_position_on_prompt_api) - [Mozilla&apos;s position on the Prompt API](https://mastodon.social/@firefoxwebdevs/116492853483021978)
* [2026-04-30, 09:20:06](https://lobste.rs/s/tgu1zo/c_26_string_string_view_improvements) - [C++26: string and string_view improvements](https://www.sandordargo.com/blog/2026/04/29/cpp26-string-string_view-improvements)
* [2026-04-30, 09:00:30](https://lobste.rs/s/heoyfd/amber_lang_0_6_0_new_release_check_what_s_new) - [Amber-Lang 0.6.0 - New release, check what&apos;s new](https://docs.amber-lang.com/getting_started/whats_new)
* [2026-04-30, 08:09:07](https://lobste.rs/s/b9vrje/text_editor_as_user_interface) - [A text editor as a user interface](https://ratfactor.com/cards/text-editor-as-ui)
* [2026-04-30, 07:52:12](https://news.ycombinator.com/item?id=47959513) - [DataCenter.FM – background noise app featuring the sound of the AI bubble](https://datacenter.fm/)
* [2026-04-30, 07:43:55](https://news.ycombinator.com/item?id=47959463) - [Mozilla&apos;s Opposition to Chrome&apos;s Prompt API](https://github.com/mozilla/standards-positions/issues/1213)
* [2026-04-30, 07:00:00](https://tech.slashdot.org/story/26/04/30/0514236/first-tesla-semi-rolls-off-high-volume-production-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Tesla Semi Rolls Off High-Volume Production Line](https://tech.slashdot.org/story/26/04/30/0514236/first-tesla-semi-rolls-off-high-volume-production-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 04:28:07](https://news.ycombinator.com/item?id=47958106) - [Monad Tutorials Timeline](https://wiki.haskell.org/Monad_tutorials_timeline)
* [2026-04-30, 03:30:00](https://yro.slashdot.org/story/26/04/30/0137225/elon-musk-says-openai-betrayed-him-clashes-with-companys-attorney?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk Says OpenAI Betrayed Him, Clashes With Company&apos;s Attorney](https://yro.slashdot.org/story/26/04/30/0137225/elon-musk-says-openai-betrayed-him-clashes-with-companys-attorney?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-30, 03:24:41](https://news.ycombinator.com/item?id=47957714) - [Biology is a Burrito: A text- and visual-based journey through a living cell](https://burrito.bio/essays/biology-is-a-burrito)
* [2026-04-30, 03:21:04](https://news.ycombinator.com/item?id=47957688) - [Where the goblins came from](https://openai.com/index/where-the-goblins-came-from/)
* [2026-04-30, 03:11:51](https://news.ycombinator.com/item?id=47957627) - [Alignment whack-a-mole: Finetuning activates recall of copyrighted books in LLMs](https://github.com/cauchy221/Alignment-Whack-a-Mole-Code)
* [2026-04-30, 03:11:33](https://news.ycombinator.com/item?id=47957624) - [Functional programmers need to take a look at Zig](https://pure-systems.org/posts/2026-04-29-functional-programmers-need-to-take-a-look-at-zig.html)
* [2026-04-30, 02:15:47](https://news.ycombinator.com/item?id=47957294) - [The Zig project&apos;s rationale for their anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/)
* [2026-04-30, 02:07:21](https://lobste.rs/s/7smldd/which_more_paths_are_charted_towards_code) - [in which more paths are charted towards code independence](https://technomancy.us/204)
* [2026-04-30, 01:47:19](https://news.ycombinator.com/item?id=47957116) - [A grounded conceptual model for ownership types in Rust](https://cacm.acm.org/research-highlights/a-grounded-conceptual-model-for-ownership-types-in-rust/)
* [2026-04-30, 01:44:56](https://news.ycombinator.com/item?id=47957101) - [Craig Venter has died](https://www.jcvi.org/media-center/j-craig-venter-genomics-pioneer-and-founder-jcvi-and-diploid-genomics-inc-dies-79)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
* [2026-04-30, 01:01:55](https://news.ycombinator.com/item?id=47956781) - [Joby kicks off NYC electric air taxi demos with historic JFK flight](https://www.flyingmag.com/joby-nyc-electric-air-taxi-jfk-airport/)
* [2026-04-30, 00:56:23](https://news.ycombinator.com/item?id=47956739) - [Mike: open-source legal AI](https://mikeoss.com/)
* [2026-04-30, 00:42:09](https://lobste.rs/s/ujihmj/github_is_sinking) - [GitHub is sinking](https://dbushell.com/2026/04/29/github-is-sinking/)
* [2026-04-30, 00:41:09](https://lobste.rs/s/8wsxnj/your_clippy_config_should_be_stricter) - [Your Clippy Config Should Be Stricter](https://emschwartz.me/your-clippy-config-should-be-stricter/)
* [2026-04-29, 23:00:00](https://yro.slashdot.org/story/26/04/29/1935254/new-sam-bankman-fried-trial-would-be-huge-waste-of-courts-time-judge-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Sam Bankman-Fried Trial Would Be Huge Waste of Court&apos;s Time, Judge Says](https://yro.slashdot.org/story/26/04/29/1935254/new-sam-bankman-fried-trial-would-be-huge-waste-of-courts-time-judge-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 22:00:00](https://news.slashdot.org/story/26/04/29/197205/ubuntus-ai-plans-have-linux-users-looking-for-a-kill-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu&apos;s AI Plans Have Linux Users Looking For a &apos;Kill Switch&apos;](https://news.slashdot.org/story/26/04/29/197205/ubuntus-ai-plans-have-linux-users-looking-for-a-kill-switch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 21:50:57](https://news.ycombinator.com/item?id=47955226) - [Gooseworks (YC W23) Is Hiring a Founding Growth Engineer](https://www.ycombinator.com/companies/gooseworks/jobs/ztgY6bD-founding-growth-engineer)
* [2026-04-29, 21:08:48](https://lobste.rs/s/eeifdc/copy_fail_732_bytes_root) - [Copy Fail — 732 Bytes to Root](https://copy.fail/)
* [2026-04-29, 21:00:00](https://tech.slashdot.org/story/26/04/29/1917219/joby-demos-its-air-taxi-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Joby Demos Its Air Taxi In NYC](https://tech.slashdot.org/story/26/04/29/1917219/joby-demos-its-air-taxi-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 20:30:57](https://lobste.rs/s/p4nlr3/how_linux_7_0_broke_postgresql_preemption) - [How Linux 7.0 Broke PostgreSQL: The Preemption Regression Explained](https://read.thecoder.cafe/p/linux-broke-postgresql)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 20:00:00](https://apple.slashdot.org/story/26/04/29/1925205/apple-gives-up-on-the-vision-pro-after-m5-refresh-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Gives Up On the Vision Pro After M5 Refresh Flop](https://apple.slashdot.org/story/26/04/29/1925205/apple-gives-up-on-the-vision-pro-after-m5-refresh-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 19:49:30](https://news.ycombinator.com/item?id=47953541) - [OpenTrafficMap](https://opentrafficmap.org/)
* [2026-04-29, 19:00:00](https://tech.slashdot.org/story/26/04/29/1627235/california-high-speed-rail-price-tag-jumps-to-231-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California High-Speed Rail Price Tag Jumps To $231 Billion](https://tech.slashdot.org/story/26/04/29/1627235/california-high-speed-rail-price-tag-jumps-to-231-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 18:58:11](https://lobste.rs/s/b57uhm/functional_programmers_need_take_look_at) - [Functional Programmers need to take a look at Zig](https://pure-systems.org/posts/2026-04-29-functional-programmers-need-to-take-a-look-at-zig.html)
* [2026-04-29, 18:54:31](https://news.ycombinator.com/item?id=47952722) - [HERMES.md in commit messages causes requests to route to extra usage billing](https://github.com/anthropics/claude-code/issues/53262)
* [2026-04-29, 18:13:53](https://news.ycombinator.com/item?id=47952181) - [Copy Fail](https://copy.fail/)
* [2026-04-29, 18:00:00](https://news.slashdot.org/story/26/04/29/1621248/colorados-anti-repair-bill-is-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado&apos;s Anti-Repair Bill Is Dead](https://news.slashdot.org/story/26/04/29/1621248/colorados-anti-repair-bill-is-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 17:58:14](https://lobste.rs/s/wsmc8s/copy_fail_732_bytes_root_on_every_major) - [Copy Fail: 732 Bytes to Root on Every Major Linux Distributions](https://xint.io/blog/copy-fail-linux-distributions)
* [2026-04-29, 17:27:20](https://lobste.rs/s/m6z3gm/fastcgi_30_years_old_still_better) - [FastCGI: 30 Years Old and Still the Better Protocol for Reverse Proxies](https://www.agwa.name/blog/post/fastcgi_is_the_better_protocol_for_reverse_proxies)
* [2026-04-29, 17:03:12](https://lobste.rs/s/htkb9t/early_impressions_chrome_from_firefox) - [Early Impressions of Chrome from a Firefox User](https://www.abefehr.com/posts/early-impressions-of-chrome)
* [2026-04-29, 17:00:00](https://games.slashdot.org/story/26/04/29/169218/github-no-longer-a-place-for-serious-work-says-hashicorp-co-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub &apos;No Longer a Place For Serious Work&apos;, Says Hashicorp Co-Founder](https://games.slashdot.org/story/26/04/29/169218/github-no-longer-a-place-for-serious-work-says-hashicorp-co-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 16:58:13](https://news.ycombinator.com/item?id=47951137) - [Laws of UX](https://lawsofux.com/)
* [2026-04-29, 16:16:39](https://news.ycombinator.com/item?id=47950510) - [FastCGI: 30 years old and still the better protocol for reverse proxies](https://www.agwa.name/blog/post/fastcgi_is_the_better_protocol_for_reverse_proxies)
* [2026-04-29, 16:12:55](https://lobste.rs/s/ifcyr1/contributor_poker_zig_s_ai_ban) - [Contributor Poker and Zig&apos;s AI Ban](https://kristoff.it/blog/contributor-poker-and-ai/)
* [2026-04-29, 16:00:00](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Schools Get Rid of Homework?](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 15:39:43](https://news.ycombinator.com/item?id=47949939) - [Cursor Camp](https://neal.fun/cursor-camp/)
* [2026-04-29, 15:16:21](https://lobste.rs/s/djfjlg/kde_s_30th_anniversary) - [KDE’s 30th anniversary](https://kde.org/anniversaries/30/)
* [2026-04-29, 15:00:00](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Start Sorting Luggage In Tokyo Airport Test Amid Labor Shortage](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 14:51:56](https://lobste.rs/s/dsomuk/end_responsive_images) - [The end of responsive images](https://piccalil.li/blog/the-end-of-responsive-images/)
* [2026-04-29, 14:47:31](https://news.ycombinator.com/item?id=47949204) - [An open-source stethoscope that costs between $2.5 and $5 to produce](https://github.com/GliaX/Stethoscope)
* [2026-04-29, 14:40:20](https://lobste.rs/s/ddrcj1/zed_is_1_0) - [Zed is 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 14:34:19](https://news.ycombinator.com/item?id=47949027) - [Zed 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 13:36:08](https://lobste.rs/s/ghmidi/secure_signatures_without_private_key) - [Secure signatures without a private key](https://katexochen.aro.bz/posts/reproducible-secure-signatures/)
* [2026-04-29, 12:24:02](https://lobste.rs/s/ejsrso/blessed_syntax_ergonomics) - [Blessed Syntax and Ergonomics](https://www.gingerbill.org/article/2026/04/29/blessed-syntax-and-ergonomics/)
* [2026-04-29, 11:00:00](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Grants Quick Review For 3 Psychedelic Drug Trials](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 09:10:49](https://lobste.rs/s/fxwarz/stable_specialization_rust) - [Stable specialization in Rust](https://goldstein.lol/posts/stable-specialization/)
* [2026-04-29, 08:43:45](https://lobste.rs/s/tzqafn/why_i_still_reach_for_lisp_scheme_instead) - [Why I Still Reach for Lisp (&amp; Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:43:17](https://news.ycombinator.com/item?id=47945707) - [Why I still reach for Lisp and Scheme instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:07:16](https://lobste.rs/s/9bkq7o/day_i_logged_1_every_2000_public_ipv4) - [The Day I Logged 1 In Every 2000 Public IPv4: Visualizing The AI Scraper DDoS](https://vulpinecitrus.info/blog/one-in-every-2000-ipv4-visualizing-ddos-ai-web-scrapers/)
* [2026-04-29, 07:00:00](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 04:17:13](https://lobste.rs/s/yn7tfr/bugs_rust_won_t_catch) - [Bugs Rust Won&apos;t Catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 03:30:00](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Testifies OpenAI Was Created As Nonprofit To Counter Google](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 03:01:06](https://lobste.rs/s/lpozc6/apple_wants_kill_your_time_capsule_they) - [Apple wants to kill your Time Capsule, but they run NetBSD so they can’t](https://www.osnews.com/story/144845/apple-wants-to-kill-your-time-capsule-but-they-run-netbsd-so-they-cant/)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-28, 22:52:22](https://news.ycombinator.com/item?id=47941931) - [London to Calcutta by Bus (2022)](https://www.amusingplanet.com/2022/08/london-to-calcutta-by-bus.html)
* [2026-04-28, 20:58:56](https://lobste.rs/s/swbkcl/carrot_disclosure_forgejo) - [Carrot disclosure: Forgejo](https://dustri.org/b/carrot-disclosure-forgejo.html)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 16:23:50](https://news.ycombinator.com/item?id=47936610) - [Creating a Color Palette from an Image](https://amandahinton.com/blog/creating-a-color-palette-from-an-image)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 12:57:53](https://news.ycombinator.com/item?id=47933934) - [A Primer on Bézier Curves – So What Makes a Bézier Curve?](https://pomax.github.io/bezierinfo/)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 02:55:49](https://news.ycombinator.com/item?id=47930003) - [Consequences of passing too few register parameters to a C function](https://devblogs.microsoft.com/oldnewthing/20260427-00/?p=112271)
* [2026-04-28, 01:11:23](https://news.ycombinator.com/item?id=47929354) - [Why isn&apos;t AMD&apos;s MI300X competitive?](https://newsletter.semianalysis.com/p/mi300x-vs-h100-vs-h200-benchmark-part-1-training)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
* [2026-04-27, 21:35:07](https://news.ycombinator.com/item?id=47927627) - [Noctua releases official 3D CAD models for its cooling fans](https://www.noctua.at/en/3d-cad-models)
* [2026-04-27, 20:20:00](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss) - [Big Tech Group Jumps The Gun On Unreleased Bill, Raising Questions About Cozy Ties With Lawmakers](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss)
* [2026-04-27, 16:08:34](https://news.ycombinator.com/item?id=47923429) - [\&quot;Parse, don&apos;t validate\&quot; through the years with C++](https://derekrodriguez.dev/parse-dont-validate-through-the-years-with-c-/)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
