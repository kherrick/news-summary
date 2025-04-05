# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Computing

* [Wikimedia Drowning in AI Bot Traffic as Crawlers Consume 65% of Resources](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discussion thread](https://news.ycombinator.com/item?id=43588970)

* [Midjourney Releases V7, Its First New AI Image Model In Nearly a Year](https://slashdot.org/story/25/04/04/2258217/midjourney-releases-v7-its-first-new-ai-image-model-in-nearly-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=43586561)

* [AI Avatar Tries To Argue Case Before a New York Court](https://yro.slashdot.org/story/25/04/04/2023226/ai-avatar-tries-to-argue-case-before-a-new-york-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discussion thread](https://lobste.rs/s/m2fjzg/annotated_unix_magic_poster)

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

* [2025-04-05, 01:00:00](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikimedia Drowning in AI Bot Traffic as Crawlers Consume 65% of Resources](https://news.slashdot.org/story/25/04/04/2357233/wikimedia-drowning-in-ai-bot-traffic-as-crawlers-consume-65-of-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 00:41:59](https://news.ycombinator.com/item?id=43589231) - [Trump&apos;s Tariffs Wipe Out over $6T on Wall Street in Epic Two-Day Rout](https://www.wsj.com/finance/stocks/u-s-stock-futures-fall-further-after-china-retaliates-against-trump-tariffs-3be33fa7)
* [2025-04-05, 00:41:10](https://lobste.rs/s/unnozu/how_we_hacked_software_supply_chain_for) - [How We Hacked a Software Supply Chain for $50K](https://www.landh.tech/blog/20250211-hack-supply-chain-for-50k/)
* [2025-04-05, 00:20:00](https://linux.slashdot.org/story/25/04/04/2320234/an-interactive-speed-linux-computer-made-of-only-3-8-pin-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Interactive-Speed Linux Computer Made of Only 3 8-Pin Chips](https://linux.slashdot.org/story/25/04/04/2320234/an-interactive-speed-linux-computer-made-of-only-3-8-pin-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 00:10:26](https://lobste.rs/s/m2fjzg/annotated_unix_magic_poster) - [Annotated Unix Magic Poster](https://unixmagic.net)
* [2025-04-05, 00:10:16](https://news.ycombinator.com/item?id=43589071) - [Cashless society drives drop in children swallowing coins, researchers say](https://www.independent.co.uk/money/cashless-society-drives-drop-in-children-swallowing-coins-researchers-say-b2723046.html)
* [2025-04-04, 23:52:18](https://news.ycombinator.com/item?id=43588970) - [The &apos;Judicial Black Hole&apos; of El Salvador&apos;s Prisons Is a Warning for Americans](https://www.rollingstone.com/politics/politics-features/el-salvador-prisons-warning-americans-trump-1235309721/)
* [2025-04-04, 23:40:00](https://mobile.slashdot.org/story/25/04/04/2312231/att-email-to-text-gateway-service-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Email-To-Text Gateway Service Ending](https://mobile.slashdot.org/story/25/04/04/2312231/att-email-to-text-gateway-service-ending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 23:00:00](https://slashdot.org/story/25/04/04/2258217/midjourney-releases-v7-its-first-new-ai-image-model-in-nearly-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Releases V7, Its First New AI Image Model In Nearly a Year](https://slashdot.org/story/25/04/04/2258217/midjourney-releases-v7-its-first-new-ai-image-model-in-nearly-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 22:41:00](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss) - [How Perceptions Are Influenced by Expectations: Songbird Study Draws Parallels With Human Speech](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss)
* [2025-04-04, 22:32:13](https://news.ycombinator.com/item?id=43588420) - [Show HN: Clawtype v2.1 – a one-hand chorded USB keyboard and mouse [video]](https://www.youtube.com/watch?v=N2PSiOl-auM)
* [2025-04-04, 22:20:00](https://it.slashdot.org/story/25/04/04/2059211/nsa-warns-fast-flux-threatens-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSA Warns &apos;Fast Flux&apos; Threatens National Security](https://it.slashdot.org/story/25/04/04/2059211/nsa-warns-fast-flux-threatens-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 22:07:45](https://lobste.rs/s/1njeoa/structure_interpretation_computer) - [Structure and Interpretation of Computer Programs](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book.html)
* [2025-04-04, 22:05:25](https://lobste.rs/s/wn2ley/rough_survey_compilation_recompilation) - [A rough survey of compilation, recompilation, and compile-time evaluation](https://www.scattered-thoughts.net/writing/a-rough-survey-of-compilation-recompilation-and-compile-time-evaluation/)
* [2025-04-04, 21:40:00](https://it.slashdot.org/story/25/04/04/2035236/google-launches-sec-gemini-v1-ai-model-to-improve-cybersecurity-defense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Sec-Gemini v1 AI Model To Improve Cybersecurity Defense](https://it.slashdot.org/story/25/04/04/2035236/google-launches-sec-gemini-v1-ai-model-to-improve-cybersecurity-defense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 21:00:00](https://yro.slashdot.org/story/25/04/04/2046255/trump-extends-tiktok-deadline-for-the-second-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Extends TikTok Deadline For the Second Time](https://yro.slashdot.org/story/25/04/04/2046255/trump-extends-tiktok-deadline-for-the-second-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 20:37:35](https://news.ycombinator.com/item?id=43587380) - [The blissful Zen of a good side project](https://joshcollinsworth.com/blog/the-blissful-zen-of-a-good-side-project)
* [2025-04-04, 20:36:21](https://lobste.rs/s/yrj8ch/fundamentals_tensors_vs_tables) - [Fundamentals: Tensors vs. Tables](https://earthmover.io/blog/tensors-vs-tables/)
* [2025-04-04, 20:25:00](https://yro.slashdot.org/story/25/04/04/2023226/ai-avatar-tries-to-argue-case-before-a-new-york-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Avatar Tries To Argue Case Before a New York Court](https://yro.slashdot.org/story/25/04/04/2023226/ai-avatar-tries-to-argue-case-before-a-new-york-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 20:14:25](https://lobste.rs/s/hrrymr/atproto_ethos) - [Atproto Ethos](https://atproto.com/articles/atproto-ethos)
* [2025-04-04, 19:47:40](https://lobste.rs/s/yrjuwa/blueprint_for_fermat_s_last_theorem) - [A Blueprint for Fermat’s Last Theorem](https://imperialcollegelondon.github.io/FLT/blueprint/index.html)
* [2025-04-04, 19:35:49](https://news.ycombinator.com/item?id=43586786) - [Google announces Sec-Gemini v1 a new experimental cybersecurity model](https://security.googleblog.com/2025/04/google-launches-sec-gemini-v1-new.html)
* [2025-04-04, 19:22:37](https://news.ycombinator.com/item?id=43586654) - [An interactive-speed Linux computer made of only 3 8-pin chips](https://dmitry.gr/?r=05.Projects&amp;proj=36.%208pinLinux)
* [2025-04-04, 19:13:56](https://news.ycombinator.com/item?id=43586561) - [The Tcl Programming Language: A Comprehensive Guide (2nd Edition)](https://www.magicsplat.com/ttpl/index.html)
* [2025-04-04, 19:10:19](https://lobste.rs/s/wc2xfl/investigating_macpaint_s_source_code) - [Investigating MacPaint&apos;s Source Code](https://ztoz.blog/posts/macpaint-source-code/)
* [2025-04-04, 18:41:00](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Employee Disrupts 50th Anniversary and Calls AI Boss &apos;War Profiteer&apos;](https://it.slashdot.org/story/25/04/04/1841244/microsoft-employee-disrupts-50th-anniversary-and-calls-ai-boss-war-profiteer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 18:34:07](https://news.ycombinator.com/item?id=43586157) - [The End of Sierra as We Knew It, Part 1: The Acquisition](https://www.filfre.net/2025/04/the-end-of-sierra-as-we-knew-it-part-1-the-acquisition/)
* [2025-04-04, 18:29:21](https://news.ycombinator.com/item?id=43586113) - [Yoko: A Biography](https://www.newstatesman.com/culture/books/book-of-the-day/2025/03/the-yoko-ono-problem)
* [2025-04-04, 18:26:16](https://lobste.rs/s/axwigd/10_standout_github_profile_readmes) - [10 Standout GitHub Profile READMEs](https://dev.to/github/10-standout-github-profile-readmes-h2o)
* [2025-04-04, 18:25:23](https://news.ycombinator.com/item?id=43586073) - [Understanding Machine Learning: From Theory to Algorithms](https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/copy.html)
* [2025-04-04, 17:59:04](https://lobste.rs/s/1yucfb/opinionated_html_serializer_for_php_8_4) - [An opinionated HTML Serializer for PHP 8.4](https://shkspr.mobi/blog/2025/04/an-opinionated-html-serializer-for-php-8-4/)
* [2025-04-04, 17:53:00](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss)
* [2025-04-04, 17:24:34](https://lobste.rs/s/6rnhbq/syntactic_musings_on_view_types) - [Syntactic Musings on View Types](https://blog.yoshuawuyts.com/syntactic-musings-on-view-types)
* [2025-04-04, 17:03:00](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Strike Australia&apos;s Largest Pension Funds in Coordinated Attacks](https://it.slashdot.org/story/25/04/04/174220/hackers-strike-australias-largest-pension-funds-in-coordinated-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 17:00:40](https://news.ycombinator.com/item?id=43585103) - [Thunder Compute (YC S24) is hiring a GPU systems engineer](https://www.ycombinator.com/companies/thunder-compute/jobs/fRSS8JQ-systems-engineer)
* [2025-04-04, 16:13:42](https://lobste.rs/s/o0xmgd/clawtype_custom_wearable_chorded) - [Clawtype - a custom wearable chorded keyboard &amp; mouse](https://github.com/akavel/clawtype)
* [2025-04-04, 16:06:00](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Poised To Beat 10, Mostly Because It Has To](https://it.slashdot.org/story/25/04/04/166231/windows-11-poised-to-beat-10-mostly-because-it-has-to?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 15:59:47](https://lobste.rs/s/w9l7q5/best_refactoring_you_ve_never_heard) - [The Best Refactoring You&apos;ve Never Heard Of](https://www.pathsensitive.com/2019/07/the-best-refactoring-youve-never-heard.html)
* [2025-04-04, 15:59:28](https://news.ycombinator.com/item?id=43584303) - [Kerosene did not save the sperm whale (2024)](https://edconway.substack.com/p/no-kerosene-did-not-save-the-sperm)
* [2025-04-04, 15:55:37](https://lobste.rs/s/dlrmfi/on_javascript_s_weirdness) - [On JavaScript&apos;s Weirdness](https://stack-auth.com/blog/on-javascripts-weirdness)
* [2025-04-04, 15:31:55](https://lobste.rs/s/ndlwoh/wizard_his_shell) - [The Wizard and His Shell](https://terminal.click/posts/2025/04/the-wizard-and-his-shell/)
* [2025-04-04, 15:20:00](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Could Affect 40% of Jobs and Widen Inequality Between Nations, UN Warns](https://slashdot.org/story/25/04/04/1512247/ai-could-affect-40-of-jobs-and-widen-inequality-between-nations-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 15:03:04](https://news.ycombinator.com/item?id=43583478) - [Show HN: uWrap.js – A faster and more accurate text wrapping util in &lt; 2KB](https://github.com/leeoniya/uWrap)
* [2025-04-04, 14:42:00](https://it.slashdot.org/story/25/04/04/1442223/camera-makers-defend-proprietary-raw-formats-despite-open-standard-alternative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Camera Makers Defend Proprietary RAW Formats Despite Open Standard Alternative](https://it.slashdot.org/story/25/04/04/1442223/camera-makers-defend-proprietary-raw-formats-despite-open-standard-alternative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 14:00:00](https://news.slashdot.org/story/25/04/04/1319228/china-imposes-34-reciprocal-tariffs-on-imports-of-us-goods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Imposes 34% Reciprocal Tariffs on Imports of US Goods](https://news.slashdot.org/story/25/04/04/1319228/china-imposes-34-reciprocal-tariffs-on-imports-of-us-goods?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 13:10:00](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss) - [Notes on the Pentium&apos;s Microcode Circuitry](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss)
* [2025-04-04, 13:00:00](https://news.slashdot.org/story/25/04/04/0729216/visa-bids-100-million-to-replace-mastercard-as-apples-new-credit-card-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa Bids $100 Million To Replace Mastercard As Apple&apos;s New Credit Card Partner](https://news.slashdot.org/story/25/04/04/0729216/visa-bids-100-million-to-replace-mastercard-as-apples-new-credit-card-partner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-04, 12:54:38](https://news.ycombinator.com/item?id=43581584) - [Nvidia adds native Python support to CUDA](https://thenewstack.io/nvidia-finally-adds-native-python-support-to-cuda/)
* [2025-04-04, 09:56:37](https://news.ycombinator.com/item?id=43580103) - [Gumroad’s source is available](https://github.com/antiwork/gumroad)
* [2025-04-04, 09:13:38](https://lobste.rs/s/reznwf/pitfalls_safe_rust) - [Pitfalls of Safe Rust](https://corrode.dev/blog/pitfalls-of-safe-rust/)
* [2025-04-04, 08:28:00](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss) - [What Drives Our Cravings for Food and Drink? Neurons in the Amygdala May Play a Key Role](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss)
* [2025-04-04, 08:10:15](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/nq7bzj/what_are_you_doing_this_weekend)
* [2025-04-04, 05:37:49](https://lobste.rs/s/afmbja/security_dsa_5892_1_atop_security_update) - [[SECURITY] [DSA 5892-1] atop security update](https://lists.debian.org/debian-security-announce/2025/msg00054.html)
* [2025-04-04, 04:50:45](https://news.ycombinator.com/item?id=43578430) - [DeepSeek: Inference-Time Scaling for Generalist Reward Modeling](https://arxiv.org/abs/2504.02495)
* [2025-04-04, 03:43:00](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss) - [AI Bots Strain Wikimedia as Bandwidth Surges 50%](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss)
* [2025-04-04, 02:59:05](https://lobste.rs/s/9ipkyl/manners_machines) - [Of manners and machines](https://commaok.xyz/post/manners/)
* [2025-04-03, 23:04:00](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss) - [Does Listening Really Change Minds? New Study Challenges Common Assumptions](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss)
* [2025-04-03, 22:46:18](https://lobste.rs/s/lak6et/why_i_stopped_using_ai_code_editors) - [Why I stopped using AI code editors](https://lucianonooijen.com/blog/why-i-stopped-using-ai-code-editors/)
* [2025-04-03, 21:49:04](https://news.ycombinator.com/item?id=43575884) - [Microsoft’s original source code](https://www.gatesnotes.com/home/home-page-topic/reader/microsoft-original-source-code)
* [2025-04-03, 20:03:44](https://lobste.rs/s/m00hji/rewriting_my_site_vanilla_web) - [Rewriting my site in vanilla web](https://leanrada.com/notes/vanilla-web-rewrite/)
* [2025-04-03, 18:17:00](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss) - [The April Fools Joke That Might Have Got Me Fired](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss)
* [2025-04-03, 17:55:20](https://news.ycombinator.com/item?id=43573156) - [An image of an archeologist adventurer who wears a hat and uses a bullwhip](https://theaiunderwriter.substack.com/p/an-image-of-an-archeologist-adventurer)
* [2025-04-03, 17:07:45](https://lobste.rs/s/x9ll4e/why_we_are_still_using_88x31_buttons) - [Why we are still using 88x31 buttons](https://ultrasciencelabs.com/lab-notes/why-we-are-still-using-88x31-buttons)
* [2025-04-03, 16:48:35](https://lobste.rs/s/zxpqz0/regname_mass_renamer_tui_written_rust) - [regname: Mass renamer TUI written in Rust](https://github.com/linkdd/regname)
* [2025-04-03, 15:24:49](https://news.ycombinator.com/item?id=43571099) - [Curl-impersonate: Special build of curl that can impersonate the major browsers](https://github.com/lwthiker/curl-impersonate)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 11:11:40](https://lobste.rs/s/trlke6/steam_deck_is_software_freedom_friendly) - [The Steam Deck is Software-Freedom friendly](https://agnishom.github.io/blog/2024/steam-deck/)
* [2025-04-03, 10:31:23](https://lobste.rs/s/t90zb0/announcing_rust_1_86_0) - [Announcing Rust 1.86.0](https://blog.rust-lang.org/2025/04/03/Rust-1.86.0.html)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 12:41:59](https://news.ycombinator.com/item?id=43555996) - [Coolify: Open-source and self-hostable Heroku / Netlify / Vercel alternative](https://coolify.io/)
* [2025-04-02, 12:41:43](https://news.ycombinator.com/item?id=43555994) - [Scaling Up Reinforcement Learning for Traffic Smoothing](https://bair.berkeley.edu/blog/2025/03/25/rl-av-smoothing/)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 10:29:46](https://news.ycombinator.com/item?id=43555311) - [The Fifth Kind of Optimisation](https://tratt.net/laurie/blog/2025/the_fifth_kind_of_optimisation.html)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 20:10:08](https://news.ycombinator.com/item?id=43550843) - [Ask HN: Are Squarespace and Wix sites worth it?](https://news.ycombinator.com/item?id=43550843)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 12:06:56](https://news.ycombinator.com/item?id=43545757) - [Why Does Claude Speak Byzantine Music Notation?](https://fi-le.net/byzantine/)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 11:54:34](https://news.ycombinator.com/item?id=43545674) - [How Airbnb measures listing lifetime value](https://medium.com/airbnb-engineering/how-airbnb-measures-listing-lifetime-value-a603bf05142c)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
