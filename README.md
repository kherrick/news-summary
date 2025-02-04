# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Developments and Security

* [Bonobos Can Tell When They Know Something You Don't](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [TSA's Airport Facial-Recognition Tech Faces Audit Probe](https://yro.slashdot.org/story/25/02/03/2353253/tsas-airport-facial-recognition-tech-faces-audit-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Anthropic Makes 'Jailbreak' Advance To Stop AI Models Producing Harmful Results](https://slashdot.org/story/25/02/03/1810255/anthropic-makes-jailbreak-advance-to-stop-ai-models-producing-harmful-results?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Cloudflare Rolls Out Digital Tracker To Combat Fake Images](https://it.slashdot.org/story/25/02/03/1723211/cloudflare-rolls-out-digital-tracker-to-combat-fake-images?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Legislation and Governance

* [Senator Hawley Proposes Jail Time For People Who Download DeepSeek](https://yro.slashdot.org/story/25/02/04/0037221/senator-hawley-proposes-jail-time-for-people-who-download-deepseek?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Order Declassifying JFK and MLK Assassination Records [pdf]](https://www.govinfo.gov/content/pkg/FR-2025-01-31/pdf/2025-02116.pdf)

* [NetChoice Sues To Block Maryland's Kids Code, Saying It Violates the First Amendment](https://yro.slashdot.org/story/25/02/03/2028246/netchoice-sues-to-block-marylands-kids-code-saying-it-violates-the-first-amendment?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Trump Orders Creation of US Sovereign Wealth Fund, Says It Could Buy TikTok](https://news.slashdot.org/story/25/02/03/1855255/trump-orders-creation-of-us-sovereign-wealth-fund-says-it-could-buy-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Human Impact

* [Levels of Microplastics in Human Brains May Be Rapidly Rising, Study Suggests](https://science.slashdot.org/story/25/02/03/1642204/levels-of-microplastics-in-human-brains-may-be-rapidly-rising-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Why Even Physicists Still Don't Understand Quantum Theory 100 Years On](https://science.slashdot.org/story/25/02/03/1917248/why-even-physicists-still-dont-understand-quantum-theory-100-years-on?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)

## Programming and Development

* [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html)

* [Build your own SQLite in Rust, Part 4: reading tables metadata](https://blog.sylver.dev/build-your-own-sqlite-part-4-reading-tables-metadata)

* [Follow up on emails with mu4e and org capture](https://breatheoutbreathe.in/2025-02-03-follow-up-emails-mu4e-org-capture.html)

* [What software do you dream about, but do not have time to code yourself?](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not)

## Privacy and Digital Rights

* [New Bill Aims To Block Foreign Pirate Sites in the US](https://news.slashdot.org/story/25/02/03/1549204/new-bill-aims-to-block-foreign-pirate-sites-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI systems with 'unacceptable risk' are now banned in the EU](https://techcrunch.com/2025/02/02/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu/)

* [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)

* [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)

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

* [2025-02-04, 01:30:00](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bonobos Can Tell When They Know Something You Don't](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 00:50:00](https://yro.slashdot.org/story/25/02/04/0037221/senator-hawley-proposes-jail-time-for-people-who-download-deepseek?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Senator Hawley Proposes Jail Time For People Who Download DeepSeek](https://yro.slashdot.org/story/25/02/04/0037221/senator-hawley-proposes-jail-time-for-people-who-download-deepseek?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 00:42:20](https://news.ycombinator.com/item?id=42925712) - [Order Declassifying JFK and MLK Assassination Records [pdf]](https://www.govinfo.gov/content/pkg/FR-2025-01-31/pdf/2025-02116.pdf)
* [2025-02-04, 00:10:00](https://yro.slashdot.org/story/25/02/03/2353253/tsas-airport-facial-recognition-tech-faces-audit-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TSA's Airport Facial-Recognition Tech Faces Audit Probe](https://yro.slashdot.org/story/25/02/03/2353253/tsas-airport-facial-recognition-tech-faces-audit-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 00:00:13](https://news.ycombinator.com/item?id=42925210) - [El Salvador abandons Bitcoin as legal tender after failed experiment](https://ticotimes.net/2025/02/02/el-salvador-abandons-bitcoin-as-legal-tender-after-failed-experiment)
* [2025-02-03, 23:41:00](https://news.ycombinator.com/item?id=42925001) - [US Bill Proposes Jail Time for People Who Download DeepSeek](https://www.404media.co/senator-hawley-proposes-jail-time-for-people-who-download-deepseek/)
* [2025-02-03, 23:32:00](https://yro.slashdot.org/story/25/02/03/2330236/judge-denies-apples-attempt-to-intervene-in-google-search-antitrust-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Judge Denies Apple's Attempt To Intervene In Google Search Antitrust Trial](https://yro.slashdot.org/story/25/02/03/2330236/judge-denies-apples-attempt-to-intervene-in-google-search-antitrust-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 22:48:56](https://news.ycombinator.com/item?id=42924448) - [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html)
* [2025-02-03, 22:40:00](https://slashdot.org/story/25/02/03/2042230/anthropic-asks-job-applicants-not-to-use-ai-in-job-applications?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Asks Job Applicants Not To Use AI In Job Applications](https://slashdot.org/story/25/02/03/2042230/anthropic-asks-job-applicants-not-to-use-ai-in-job-applications?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 21:55:39](https://lobste.rs/s/ejmyaj/goto_considered_harmful_considered) - [\"GOTO Considered Harmful” Considered Harmful (1987)](http://web.archive.org/web/20090320002214/http://www.ecn.purdue.edu/ParaMount/papers/rubin87goto.pdf)
* [2025-02-03, 21:43:44](https://lobste.rs/s/wfc7gs/build_your_own_sqlite_rust_part_4_reading) - [Build your own SQLite in Rust, Part 4: reading tables metadata](https://blog.sylver.dev/build-your-own-sqlite-part-4-reading-tables-metadata)
* [2025-02-03, 21:43:39](https://lobste.rs/s/9sitsj/clr_checker_for_lifetimes_other) - [clr: Checker for Lifetimes and other Refinement types](https://github.com/ityonemo/clr)
* [2025-02-03, 21:40:00](https://tech.slashdot.org/story/25/02/03/2037228/microsoft-paint-gets-a-copilot-button-for-gen-ai-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Paint Gets a Copilot Button For Gen AI Features](https://tech.slashdot.org/story/25/02/03/2037228/microsoft-paint-gets-a-copilot-button-for-gen-ai-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 21:33:29](https://news.ycombinator.com/item?id=42923512) - [How Translation Works, Book Title Edition](https://whatever.scalzi.com/2025/02/03/how-translation-works-book-title-edition/)
* [2025-02-03, 21:00:00](https://yro.slashdot.org/story/25/02/03/2028246/netchoice-sues-to-block-marylands-kids-code-saying-it-violates-the-first-amendment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NetChoice Sues To Block Maryland's Kids Code, Saying It Violates the First Amendment](https://yro.slashdot.org/story/25/02/03/2028246/netchoice-sues-to-block-marylands-kids-code-saying-it-violates-the-first-amendment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 20:59:58](https://lobste.rs/s/sognld/gang_none_design_patterns_elixir) - [Gang of None? Design Patterns in Elixir](https://www.youtube.com/watch?v=agkXUp0hCW8)
* [2025-02-03, 20:56:44](https://news.ycombinator.com/item?id=42922989) - [Open Euro LLM: Open LLMs for Transparent AI in Europe](https://openeurollm.eu/launch-press-release)
* [2025-02-03, 20:20:00](https://tech.slashdot.org/story/25/02/03/2018259/air-force-documents-on-gen-ai-test-are-just-whole-pages-of-redactions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Air Force Documents On Gen AI Test Are Just Whole Pages of Redactions](https://tech.slashdot.org/story/25/02/03/2018259/air-force-documents-on-gen-ai-test-are-just-whole-pages-of-redactions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 19:48:51](https://news.ycombinator.com/item?id=42922052) - [The Cantonese Scrolls (粵卷) – A Cantonese Language Learning Mental RPG](https://cantoscrolls.com/)
* [2025-02-03, 19:30:00](https://science.slashdot.org/story/25/02/03/1917248/why-even-physicists-still-dont-understand-quantum-theory-100-years-on?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Even Physicists Still Don't Understand Quantum Theory 100 Years On](https://science.slashdot.org/story/25/02/03/1917248/why-even-physicists-still-dont-understand-quantum-theory-100-years-on?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 19:12:49](https://lobste.rs/s/ddhcet/operational_denotational_strategies) - [Operational and Denotational Strategies for Understanding Code](https://noelwelsh.com/posts/operational-denotational-understanding/)
* [2025-02-03, 19:08:06](https://lobste.rs/s/ggpzzz/so_you_want_remove_gvl) - [So You Want To Remove The GVL?](https://byroot.github.io/ruby/performance/2025/01/29/so-you-want-to-remove-the-gvl.html)
* [2025-02-03, 18:55:00](https://news.slashdot.org/story/25/02/03/1855255/trump-orders-creation-of-us-sovereign-wealth-fund-says-it-could-buy-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Orders Creation of US Sovereign Wealth Fund, Says It Could Buy TikTok](https://news.slashdot.org/story/25/02/03/1855255/trump-orders-creation-of-us-sovereign-wealth-fund-says-it-could-buy-tiktok?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 18:23:46](https://lobste.rs/s/z2ch3o/follow_up_on_emails_with_mu4e_org_capture) - [Follow up on emails with mu4e and org capture](https://breatheoutbreathe.in/2025-02-03-follow-up-emails-mu4e-org-capture.html)
* [2025-02-03, 18:10:00](https://slashdot.org/story/25/02/03/1810255/anthropic-makes-jailbreak-advance-to-stop-ai-models-producing-harmful-results?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Makes 'Jailbreak' Advance To Stop AI Models Producing Harmful Results](https://slashdot.org/story/25/02/03/1810255/anthropic-makes-jailbreak-advance-to-stop-ai-models-producing-harmful-results?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 17:59:13](https://news.ycombinator.com/item?id=42920921) - [AMD: Microcode Signature Verification Vulnerability](https://github.com/google/security-research/security/advisories/GHSA-4xq7-4mgh-gp6w)
* [2025-02-03, 17:52:14](https://lobste.rs/s/dx533x/pangui_cross_platform_ui_library_with) - [PanGui - A cross-platform UI library with a razor sharp focus on performance, simplicity and expressive power](https://pangui.io/)
* [2025-02-03, 17:48:06](https://lobste.rs/s/drf83t/retaking_web_browser_one_small_step_at) - [Retaking The Web Browser, One Small Step At A Time](https://andregarzia.com/2025/02/retaking-the-web-browser-one-small-step-at-a-time.html)
* [2025-02-03, 17:34:17](https://news.ycombinator.com/item?id=42920657) - [New Proofs Probe the Limits of Mathematical Truth](https://www.quantamagazine.org/new-proofs-probe-the-limits-of-mathematical-truth-20250203/)
* [2025-02-03, 17:30:00](https://it.slashdot.org/story/25/02/03/1723211/cloudflare-rolls-out-digital-tracker-to-combat-fake-images?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloudflare Rolls Out Digital Tracker To Combat Fake Images](https://it.slashdot.org/story/25/02/03/1723211/cloudflare-rolls-out-digital-tracker-to-combat-fake-images?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 17:00:32](https://news.ycombinator.com/item?id=42920292) - [Hightouch (YC S19) Is Hiring a Distributed Systems Engineer](https://news.ycombinator.com/item?id=42920292)
* [2025-02-03, 17:00:09](https://news.ycombinator.com/item?id=42920285) - [Developer Philosophy](https://qntm.org/devphilo)
* [2025-02-03, 16:57:46](https://lobste.rs/s/itlgqb/developer_philosophy) - [Developer philosophy](https://qntm.org/devphilo)
* [2025-02-03, 16:50:00](https://science.slashdot.org/story/25/02/03/1642204/levels-of-microplastics-in-human-brains-may-be-rapidly-rising-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Levels of Microplastics in Human Brains May Be Rapidly Rising, Study Suggests](https://science.slashdot.org/story/25/02/03/1642204/levels-of-microplastics-in-human-brains-may-be-rapidly-rising-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 16:28:45](https://news.ycombinator.com/item?id=42919909) - [Httptap: View HTTP/HTTPS requests made by any Linux program](https://github.com/monasticacademy/httptap)
* [2025-02-03, 16:22:17](https://news.ycombinator.com/item?id=42919821) - [First place in Tetris 99 using computer vision, classical AI, a lot of free time](https://bpinzone.github.io/TetrisAI/)
* [2025-02-03, 16:10:00](https://hardware.slashdot.org/story/25/02/03/160244/openais-new-trademark-application-hints-at-humanoid-robots-smart-jewelry-and-more?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI's New Trademark Application Hints at Humanoid Robots, Smart Jewelry, and More](https://hardware.slashdot.org/story/25/02/03/160244/openais-new-trademark-application-hints-at-humanoid-robots-smart-jewelry-and-more?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 16:06:48](https://news.ycombinator.com/item?id=42919597) - [Efficient Reasoning with Hidden Thinking](https://arxiv.org/abs/2501.19201)
* [2025-02-03, 16:00:43](https://news.ycombinator.com/item?id=42919502) - [Ask HN: Who is hiring? (February 2025)](https://news.ycombinator.com/item?id=42919502)
* [2025-02-03, 16:00:42](https://news.ycombinator.com/item?id=42919500) - [Ask HN: Who wants to be hired? (February 2025)](https://news.ycombinator.com/item?id=42919500)
* [2025-02-03, 15:32:01](https://lobste.rs/s/nfm3gu/what_s_next_for_flathub_build) - [What's next for Flathub build infrastructure](https://docs.flathub.org/blog/flathub-build-infrastructure-revamp)
* [2025-02-03, 15:31:00](https://news.slashdot.org/story/25/02/03/1549204/new-bill-aims-to-block-foreign-pirate-sites-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Bill Aims To Block Foreign Pirate Sites in the US](https://news.slashdot.org/story/25/02/03/1549204/new-bill-aims-to-block-foreign-pirate-sites-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 15:09:55](https://news.ycombinator.com/item?id=42918902) - [Show HN: I convert videos to printed flipbooks for living](https://www.videotoflip.com/)
* [2025-02-03, 15:08:59](https://lobste.rs/s/4vgdml/pinning_down_future_is_not_send_errors) - [Pinning Down \"Future Is Not Send\" Errors](https://emschwartz.me/pinning-down-future-is-not-send-errors/)
* [2025-02-03, 15:03:36](https://news.ycombinator.com/item?id=42918846) - [Decorator JITs: Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/)
* [2025-02-03, 14:42:51](https://news.ycombinator.com/item?id=42918644) - [He went to jail for stealing someone's identity, but it was his all along](https://www.nytimes.com/2025/02/03/us/iowa-identity-theft-sentencing.html)
* [2025-02-03, 14:30:11](https://news.ycombinator.com/item?id=42918524) - [I Wrote a WebAssembly VM in C](https://irreducible.io/blog/my-wasm-interpreter/)
* [2025-02-03, 14:18:18](https://news.ycombinator.com/item?id=42918425) - [New York claims a small victory in 'forever war on rats'](https://www.thetimes.com/us/news-today/article/new-york-finally-claims-a-small-victory-in-forever-war-on-rats-m7x230sg8)
* [2025-02-03, 13:55:38](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hflh6v/what_are_you_doing_this_week)
* [2025-02-03, 13:37:00](https://lobste.rs/s/u7sehz/optimizing_with_novel_calendrical) - [Optimizing with Novel Calendrical Algorithms](https://jhpratt.dev/blog/optimizing-with-novel-calendrical-algorithms/)
* [2025-02-03, 12:50:36](https://news.ycombinator.com/item?id=42917680) - [Anything threatening to be a subculture is commodified before it can walk (2014)](https://www.dezeen.com/2014/12/18/william-gibson-subculture-commodification-london-justin-mcguirk-opinion/)
* [2025-02-03, 12:50:19](https://lobste.rs/s/tn67at/five_coding_hats) - [Five coding hats](https://dubroy.com/blog/five-coding-hats/)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 11:32:50](https://lobste.rs/s/5snozq/perfect_is_enemy_good) - [Perfect is the enemy of good](https://medv.io/blog/perfect-is-the-enemy-of-good)
* [2025-02-03, 10:31:13](https://news.ycombinator.com/item?id=42916849) - [AI systems with 'unacceptable risk' are now banned in the EU](https://techcrunch.com/2025/02/02/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu/)
* [2025-02-03, 10:24:05](https://lobste.rs/s/kc63sr/rustsec_2025_0004_openssl_ssl_select_next) - [RUSTSEC-2025-0004: openssl: ssl::select_next_proto use after free](https://rustsec.org/advisories/RUSTSEC-2025-0004)
* [2025-02-03, 10:22:40](https://lobste.rs/s/e5tc2a/selfish_personal_argument_for_releasing) - [A selfish personal argument for releasing code as Open Source](https://simonwillison.net/2025/Jan/24/selfish-open-source/)
* [2025-02-03, 08:54:53](https://lobste.rs/s/e7clsc/nix_string_interpolation_directories) - [Nix: string interpolation of directories gone awry](https://fzakaria.com/2025/02/02/nix-string-interpolation-of-directories-gone-awry.html)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 06:22:27](https://lobste.rs/s/vploy1/incident_sev_scales_are_waste_time) - [Incident SEV scales are a waste of time](https://blog.danslimmon.com/2025/01/29/incident-sev-scales-are-a-waste-of-time/)
* [2025-02-03, 06:20:32](https://news.ycombinator.com/item?id=42915494) - [Auto-AVSR: Audio-Visual Speech Recognition with Automatic Labels](https://github.com/mpc001/auto_avsr)
* [2025-02-03, 04:16:57](https://lobste.rs/s/mvtj4c/python_free_threading_guide) - [Python free-threading guide](https://py-free-threading.github.io/)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-03, 02:51:18](https://lobste.rs/s/eypjyq/learn_common_lisp_by_example_gtk_gui_with) - [Learn Common Lisp by Example: GTK GUI with SBCL](https://goober99.hashnode.dev/learn-common-lisp-by-example-gtk-gui-with-sbcl)
* [2025-02-02, 23:45:16](https://lobste.rs/s/0enkqp/hollywood_split_computer_console_into) - [Hollywood: split a computer console into multiple panes of genuine technical melodrama](https://a.hollywood.computer/)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 20:29:11](https://lobste.rs/s/gisler/everyone_knows_your_location_tracking) - [Everyone knows your location: tracking myself down through in-app ads](https://timsh.org/tracking-myself-down-through-in-app-ads/)
* [2025-02-02, 19:12:13](https://news.ycombinator.com/item?id=42910910) - [The young, inexperienced engineers aiding DOGE](https://www.wired.com/story/elon-musk-government-young-engineers/)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 15:19:56](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not) - [What software do you dream about, but do not have time to code yourself?](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 17:06:13](https://news.ycombinator.com/item?id=42899879) - [Macintosh Allegro Common Lisp](https://www.macintoshrepository.org/1799-macintosh-allegro-common-lisp)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 20:54:31](https://news.ycombinator.com/item?id=42891848) - [Feluda – A CLI tool to detect restrictive licenses in dependencies](https://crates.io/crates/feluda)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 12:34:41](https://news.ycombinator.com/item?id=42887037) - [Is there a benefit to scratching that itch? Yes and no, says new study](https://newatlas.com/health-wellbeing/scratching-itch-benefit/)
* [2025-01-31, 12:10:46](https://news.ycombinator.com/item?id=42886860) - [Detroit’s revival takes shape after decades of decay](https://www.theguardian.com/us-news/2025/jan/04/detroit-revitalization)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 01:34:37](https://news.ycombinator.com/item?id=42883976) - [Spotted hyena found in Egypt in 5k years](https://phys.org/news/2025-01-hyena-egypt-years.html)
