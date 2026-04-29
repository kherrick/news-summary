# [News Summary](https://kherrick.github.io/news-summary/)

## Education and Technology Innovations

* [Should Schools Get Rid of Homework?](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The longstanding debate around homework intensifies as schools reassess its role in education.

* [Humanoid Robots Start Sorting Luggage In Tokyo Airport Test Amid Labor Shortage](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tokyo trials humanoid robots to address labor shortages in airport logistics.

* [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concern rises over excessive screen time among infants, with some babies exposed for up to eight hours daily.

## Scientific and Environmental Discoveries

* [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&from=rss) - A record-breaking glacier collapse raises concerns about climate change impacts in Antarctica.

* [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&from=rss) - NASA suspends operations on a Voyager 1 instrument due to power issues.

* [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&from=rss) - Study explores how exoplanet moons could sustain life even in the absence of a sun.

## Artificial Intelligence and Ethical Implications

* [Why AI companies want you to be afraid of them](https://www.bbc.com/future/article/20260428-ai-companies-want-you-to-be-afraid-of-them) - Analysis of why fear plays a key role in AI companies' strategies.

* [He asked AI to count carbs 27000 times. It couldn&apos;t give the same answer twice](https://www.diabettech.com/i-asked-ai-to-count-my-carbs-27000-times-it-couldnt-give-me-the-same-answer-twice/) - A critical test reveals the inconsistency of AI in practical applications.

* [How ChatGPT serves ads](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/) - Examination of ChatGPT's use of advertisements and its attribution algorithm.

## Cybersecurity and Software Engineering

* [Linux 7.0 Broke PostgreSQL: The Preemption Regression Explained](https://read.thecoder.cafe/p/linux-broke-postgresql) - Investigation into a kernel regression affecting PostgreSQL performance under Linux 7.0.

* [Bugs Rust won&apos;t catch](https://corrode.dev/blog/bugs-rust-wont-catch/) - Exploration of limitations in Rust's capability to catch certain types of software bugs.

* [Declarative git repo sync/migration tool and self hosted code search engine](https://github.com/stepbrobd/miroir) - Introduction to Miroir, a new tool aiding in git repository migration and exploration.

## Infrastructure and Energy

* [Data center boom strains Texas homebuilders&apos; need for electricians](https://www.texastribune.org/2026/04/28/data-centers-texas-electricians-builders/) - Rapid growth in data centers in Texas highlights a shortage of skilled electricians.

* [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&from=rss) - Discovery of organic compounds on Mars boosts hopes for distant habitability.

* [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&from=rss) - Engineers unveil a liquid battery capable of storing solar energy for extended durations.

## Notable Business and Industry News

* [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&from=rss) - Collaboration between Meta and Amazon strengthens the latter's position as a hardware provider.

* [OpenAI models coming to Amazon Bedrock: Interview with OpenAI and AWS CEOs](https://stratechery.com/2026/an-interview-with-openai-ceo-sam-altman-and-aws-ceo-matt-garman-about-bedrock-managed-agents/) - Insight on the integration of OpenAI models into Amazon's AI platform, Bedrock.

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

* [2026-04-29, 16:00:00](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Schools Get Rid of Homework?](https://news.slashdot.org/story/26/04/29/0357216/should-schools-get-rid-of-homework?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 15:49:57](https://news.ycombinator.com/item?id=47950091) - [Online age verification is the hill to die on](https://xcancel.com/GlennMeder/status/2049088498163216560)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 15:36:44](https://news.ycombinator.com/item?id=47949897) - [U.S. war in Iran has cost $25B so far, says Pentagon official](https://www.reuters.com/world/middle-east/us-war-iran-has-cost-25-billion-so-far-says-pentagon-official-2026-04-29/)
* [2026-04-29, 15:31:33](https://news.ycombinator.com/item?id=47949826) - [Data center boom strains Texas homebuilders&apos; need for electricians](https://www.texastribune.org/2026/04/28/data-centers-texas-electricians-builders/)
* [2026-04-29, 15:26:01](https://news.ycombinator.com/item?id=47949750) - [Why AI companies want you to be afraid of them](https://www.bbc.com/future/article/20260428-ai-companies-want-you-to-be-afraid-of-them)
* [2026-04-29, 15:17:46](https://news.ycombinator.com/item?id=47949642) - [Mistral Medium 3.5](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5)
* [2026-04-29, 15:13:44](https://news.ycombinator.com/item?id=47949585) - [Linux 7.0 Broke PostgreSQL: The Preemption Regression Explained](https://read.thecoder.cafe/p/linux-broke-postgresql)
* [2026-04-29, 15:00:00](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Start Sorting Luggage In Tokyo Airport Test Amid Labor Shortage](https://hardware.slashdot.org/story/26/04/29/0347242/humanoid-robots-start-sorting-luggage-in-tokyo-airport-test-amid-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 14:57:23](https://lobste.rs/s/gcljqi/final_form_software_development) - [The Final Form of Software Development](https://blog.zksecurity.xyz/posts/end-coding/)
* [2026-04-29, 14:57:07](https://lobste.rs/s/pqqrxx/consequences_passing_too_few_register) - [Consequences of passing too few register parameters to a C function](https://devblogs.microsoft.com/oldnewthing/20260427-00/?p=112271)
* [2026-04-29, 14:51:56](https://lobste.rs/s/dsomuk/end_responsive_images) - [The end of responsive images](https://piccalil.li/blog/the-end-of-responsive-images/)
* [2026-04-29, 14:40:20](https://lobste.rs/s/ddrcj1/zed_is_1_0) - [Zed is 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 14:34:19](https://news.ycombinator.com/item?id=47949027) - [Zed is 1.0](https://zed.dev/blog/zed-1-0)
* [2026-04-29, 14:00:59](https://news.ycombinator.com/item?id=47948603) - [Tangled – We need a federation of forges](https://blog.tangled.org/federation/)
* [2026-04-29, 13:56:38](https://lobste.rs/s/zukup5/declarative_git_repo_sync_migration_tool) - [Declarative git repo sync/migration tool and self hosted code search engine](https://github.com/stepbrobd/miroir)
* [2026-04-29, 13:47:02](https://lobste.rs/s/xtvxmg/localisation_engineering_platform) - [Localisation Engineering Platform - Lingo.dev](https://lingo.dev/en/blog/introducing-lingodotdev-v1)
* [2026-04-29, 13:36:08](https://lobste.rs/s/ghmidi/secure_signatures_without_private_key) - [Secure signatures without a private key](https://katexochen.aro.bz/posts/reproducible-secure-signatures/)
* [2026-04-29, 13:05:44](https://news.ycombinator.com/item?id=47947834) - [Improving ICU handovers by learning from Scuderia Ferrari F1 team](https://healthmanagement.org/c/icu/IssueArticle/improving-handovers-by-learning-from-scuderia-ferrari)
* [2026-04-29, 12:43:12](https://news.ycombinator.com/item?id=47947525) - [Letting AI play my game – building an agentic test harness to help play-testing](https://blog.jeffschomay.com/letting-ai-play-my-game)
* [2026-04-29, 12:38:50](https://news.ycombinator.com/item?id=47947490) - [He asked AI to count carbs 27000 times. It couldn&apos;t give the same answer twice](https://www.diabettech.com/i-asked-ai-to-count-my-carbs-27000-times-it-couldnt-give-me-the-same-answer-twice/)
* [2026-04-29, 12:24:53](https://news.ycombinator.com/item?id=47947369) - [Show HN: Adblock-rust Manager – Firefox extension to enable the Brave ad blocker](https://github.com/electricant/adblock-rust-manager)
* [2026-04-29, 12:24:02](https://lobste.rs/s/ejsrso/blessed_syntax_ergonomics) - [Blessed Syntax and Ergonomics](https://www.gingerbill.org/article/2026/04/29/blessed-syntax-and-ergonomics/)
* [2026-04-29, 12:18:59](https://news.ycombinator.com/item?id=47947318) - [Coffee with a splash of physics: how to make the most out of your brew](https://physicsworld.com/a/coffee-with-a-splash-of-physics-how-to-make-the-most-out-of-your-brew/)
* [2026-04-29, 12:00:17](https://news.ycombinator.com/item?id=47947125) - [Stardex Is Hiring a Founding Customer Success Lead](https://www.ycombinator.com/companies/stardex/jobs/6GCK1HC-founding-customer-success-lead)
* [2026-04-29, 11:25:12](https://news.ycombinator.com/item?id=47946813) - [GitHub – DOS 1.0: Transcription of Tim Paterson&apos;s DOS Printouts](https://github.com/DOS-History/Paterson-Listings)
* [2026-04-29, 11:00:00](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Grants Quick Review For 3 Psychedelic Drug Trials](https://science.slashdot.org/story/26/04/29/0340243/fda-grants-quick-review-for-3-psychedelic-drug-trials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 10:16:11](https://lobste.rs/s/ewwdm4/ripe_ncc_rpki_exploit_chain) - [RIPE NCC RPKI exploit chain](https://mxsasha.eu/posts/ripe-ncc-rpki-exploit-chain/)
* [2026-04-29, 09:36:45](https://lobste.rs/s/mgne1y/timecapsulesmb_hacking_apple_time) - [TimeCapsuleSMB: Hacking the Apple Time Capsule to run modern Samba](https://github.com/jamesyc/TimeCapsuleSMB)
* [2026-04-29, 09:21:32](https://news.ycombinator.com/item?id=47945955) - [Show HN: Rip.so – a graveyard for dead internet things](https://rip.so)
* [2026-04-29, 09:14:37](https://news.ycombinator.com/item?id=47945918) - [Soft launch of open-source code platform for government](https://www.nldigitalgovernment.nl/news/soft-launch-for-government-open-source-code-platform/)
* [2026-04-29, 09:10:49](https://lobste.rs/s/fxwarz/stable_specialization_rust) - [Stable specialization in Rust](https://goldstein.lol/posts/stable-specialization/)
* [2026-04-29, 08:43:45](https://lobste.rs/s/tzqafn/why_i_still_reach_for_lisp_scheme_instead) - [Why I Still Reach for Lisp (&amp; Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:07:16](https://lobste.rs/s/9bkq7o/day_i_logged_1_every_2000_public_ipv4) - [The Day I Logged 1 In Every 2000 Public IPv4: Visualizing The AI Scraper DDoS](https://vulpinecitrus.info/blog/one-in-every-2000-ipv4-visualizing-ddos-ai-web-scrapers/)
* [2026-04-29, 07:00:00](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 06:47:53](https://news.ycombinator.com/item?id=47944931) - [Low-Compilation-Cost Register Allocation in LLVM-Based Binary Translation](https://dl.acm.org/doi/abs/10.1145/3767295.3803591)
* [2026-04-29, 06:38:44](https://news.ycombinator.com/item?id=47944864) - [HardenedBSD Is Now Officially on Radicle](https://hardenedbsd.org/article/shawn-webb/2026-04-26/hardenedbsd-officially-radicle)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 04:17:13](https://lobste.rs/s/yn7tfr/bugs_rust_won_t_catch) - [Bugs Rust Won&apos;t Catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 03:30:00](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Testifies OpenAI Was Created As Nonprofit To Counter Google](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 03:16:18](https://lobste.rs/s/ccbjxb/warp_is_now_open_source) - [Warp is now open-source](https://www.warp.dev/blog/warp-is-now-open-source)
* [2026-04-29, 03:01:06](https://lobste.rs/s/lpozc6/apple_wants_kill_your_time_capsule_they) - [Apple wants to kill your Time Capsule, but they run NetBSD so they can’t](https://www.osnews.com/story/144845/apple-wants-to-kill-your-time-capsule-but-they-run-netbsd-so-they-cant/)
* [2026-04-29, 02:19:11](https://news.ycombinator.com/item?id=47943499) - [Bugs Rust won&apos;t catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-29, 01:11:54](https://lobste.rs/s/a50exb/code_golfing_riki_s_html_templating) - [Code-golfing riki&apos;s HTML templating engine in Julia](https://gist.github.com/OTDE/96584a4a83c73fb02e463eef83170cc3)
* [2026-04-28, 23:54:14](https://news.ycombinator.com/item?id=47942437) - [How ChatGPT serves ads](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/)
* [2026-04-28, 23:00:00](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electrical Current Might Be the Key To a Better Cup of Coffee](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 22:00:00](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Vision Pro Used In World-First Cataract Surgery](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 21:18:39](https://lobste.rs/s/lm0mlt/i_built_my_own_hair_electrolysis_machine) - [I Built My Own Hair Electrolysis Machine](https://www.scd31.com/posts/diy-hair-electrolysis-machine)
* [2026-04-28, 21:17:40](https://news.ycombinator.com/item?id=47940921) - [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)
* [2026-04-28, 21:00:00](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Rolls Out 30-Day Online DRM Check-In For PlayStation Digital Games](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 20:58:56](https://lobste.rs/s/swbkcl/carrot_disclosure_forgejo) - [Carrot disclosure: Forgejo](https://dustri.org/b/carrot-disclosure-forgejo.html)
* [2026-04-28, 20:00:00](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces a Cheaper Option For App Store Subscriptions](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 19:44:52](https://news.ycombinator.com/item?id=47939579) - [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
* [2026-04-28, 19:24:43](https://news.ycombinator.com/item?id=47939320) - [OpenAI models coming to Amazon Bedrock: Interview with OpenAI and AWS CEOs](https://stratechery.com/2026/an-interview-with-openai-ceo-sam-altman-and-aws-ceo-matt-garman-about-bedrock-managed-agents/)
* [2026-04-28, 19:19:50](https://lobste.rs/s/nrbfzz/using_1978_terminal_2026_dec_vt_100) - [Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/)
* [2026-04-28, 19:00:00](https://news.slashdot.org/story/26/04/28/1832202/the-bloomberg-terminal-is-getting-an-ai-makeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Bloomberg Terminal Is Getting an AI Makeover](https://news.slashdot.org/story/26/04/28/1832202/the-bloomberg-terminal-is-getting-an-ai-makeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 18:00:00](https://tech.slashdot.org/story/26/04/28/1634227/google-and-pentagon-reportedly-agree-on-deal-for-any-lawful-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and Pentagon Reportedly Agree On Deal For &apos;Any Lawful&apos; Use of AI](https://tech.slashdot.org/story/26/04/28/1634227/google-and-pentagon-reportedly-agree-on-deal-for-any-lawful-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 17:12:30](https://news.ycombinator.com/item?id=47937380) - [Show HN: Auto-Architecture: Karpathy&apos;s Loop, pointed at a CPU](https://github.com/FeSens/auto-arch-tournament/blob/main/docs/auto-arch-tournament-blog-post.md)
* [2026-04-28, 17:00:00](https://news.slashdot.org/story/26/04/28/1622229/uae-to-leave-opec-amid-hormuz-oil-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UAE To Leave OPEC Amid Hormuz Oil Crisis](https://news.slashdot.org/story/26/04/28/1622229/uae-to-leave-opec-amid-hormuz-oil-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 16:15:43](https://news.ycombinator.com/item?id=47936479) - [GitHub RCE Vulnerability: CVE-2026-3854 Breakdown](https://www.wiz.io/blog/github-rce-vulnerability-cve-2026-3854)
* [2026-04-28, 16:00:00](https://slashdot.org/story/26/04/28/0429234/bay-area-homeowner-offers-property-in-exchange-for-anthropic-stock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area Homeowner Offers Property In Exchange For Anthropic Stock](https://slashdot.org/story/26/04/28/0429234/bay-area-homeowner-offers-property-in-exchange-for-anthropic-stock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 15:40:05](https://lobste.rs/s/szrxqe/illegal_vs_unwanted_states) - [Illegal vs Unwanted States](https://buttondown.com/hillelwayne/archive/illegal-vs-unwanted-states/)
* [2026-04-28, 15:00:00](https://yro.slashdot.org/story/26/04/28/0421237/supreme-court-hears-case-on-how-to-label-risks-of-popular-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Hears Case On How To Label Risks of Popular Weed Killer](https://yro.slashdot.org/story/26/04/28/0421237/supreme-court-hears-case-on-how-to-label-risks-of-popular-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 14:35:59](https://news.ycombinator.com/item?id=47935246) - [Show HN: Rocky – Rust SQL engine with branches, replay, column lineage](https://github.com/rocky-data/rocky)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 12:34:00](https://lobste.rs/s/mhflmp/bypassing_dpi_with_ebpf_no_vpn_proxy) - [Bypassing DPI with eBPF, no VPN or proxy needed](https://bora.sh/bypassing-dpi-with-ebpf/)
* [2026-04-28, 11:24:52](https://news.ycombinator.com/item?id=47932937) - [Who owns the code Claude Code wrote?](https://legallayer.substack.com/p/who-owns-the-claude-code-wrote)
* [2026-04-28, 11:20:06](https://lobste.rs/s/tknct7/update_on_github_availability) - [An update on GitHub availability](https://github.blog/news-insights/company-news/an-update-on-github-availability/)
* [2026-04-28, 11:00:00](https://science.slashdot.org/story/26/04/28/0413216/the-silent-frequency-that-makes-old-buildings-feel-haunted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Silent Frequency That Makes Old Buildings Feel Haunted](https://science.slashdot.org/story/26/04/28/0413216/the-silent-frequency-that-makes-old-buildings-feel-haunted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 10:50:00](https://lobste.rs/s/ngogon/github_actions_is_weakest_link) - [GitHub Actions is the weakest link](https://nesbitt.io/2026/04/28/github-actions-is-the-weakest-link.html)
* [2026-04-28, 09:43:40](https://lobste.rs/s/exlogg/jjj) - [jjj](https://oppi.li/posts/jjj/)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
* [2026-04-27, 21:55:48](https://news.ycombinator.com/item?id=47927903) - [Talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)
* [2026-04-27, 20:20:00](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss) - [Big Tech Group Jumps The Gun On Unreleased Bill, Raising Questions About Cozy Ties With Lawmakers](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss)
* [2026-04-27, 19:27:47](https://news.ycombinator.com/item?id=47926148) - [Withnail&apos;s Coat and I](https://ontherow.substack.com/p/withnails-coat-and-i)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
