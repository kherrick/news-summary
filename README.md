# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Programming Innovations

* [Weaponizing Ads: How Google and Facebook Ads Are Used to Wage Propaganda Wars](https://medium.com/@eslam.elsewedy/weaponizing-ads-how-governments-use-google-ads-and-facebook-ads-to-wage-propaganda-wars-199c707704cc) - Analysis of how digital ads are deployed as tools of influence in global politics.

* [DuckDB NPM Packages 1.3.3 and 1.29.2 Compromised with Malware](https://github.com/duckdb/duckdb-node/security/advisories/GHSA-w62p-hx95-gf2c) - Details on a security breach affecting widely used NPM packages.

* [A Novel Technique for SQL Injection in PDO’s Prepared Statements](https://slcyber.io/assetnote-security-research-center/a-novel-technique-for-sql-injection-in-pdos-prepared-statements/) - Research uncovering vulnerabilities in SQL injection methods.

* [Hallucination Risk Calculator](https://github.com/leochlon/hallbayes) - A tool introducing safer testing of hypothetical scenarios in software.

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

* [2025-09-09, 13:00:00](https://tech.slashdot.org/story/25/09/09/0048216/sam-altman-says-bots-are-making-social-media-feel-fake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Says Bots Are Making Social Media Feel &apos;Fake&apos;](https://tech.slashdot.org/story/25/09/09/0048216/sam-altman-says-bots-are-making-social-media-feel-fake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 12:34:41](https://news.ycombinator.com/item?id=45181094) - [Weaponizing Ads: How Google and Facebook Ads Are Used to Wage Propaganda Wars](https://medium.com/@eslam.elsewedy/weaponizing-ads-how-governments-use-google-ads-and-facebook-ads-to-wage-propaganda-wars-199c707704cc)
* [2025-09-09, 12:01:53](https://news.ycombinator.com/item?id=45180757) - [UK toughens Online Safety Act with ban on self-harm content](https://www.gov.uk/government/news/online-safety-laws-to-strengthen-to-protect-people-of-all-ages-from-devastating-self-harm-content)
* [2025-09-09, 12:00:06](https://news.ycombinator.com/item?id=45180741) - [Nango (YC W23) Is Hiring a Staff Back End Engineer (Remote)](https://jobs.ashbyhq.com/Nango/3467f495-c833-4dcc-b119-cf43b7b93f84)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 10:57:58](https://news.ycombinator.com/item?id=45180315) - [Hallucination Risk Calculator](https://github.com/leochlon/hallbayes)
* [2025-09-09, 10:55:04](https://lobste.rs/s/fumoq5/batched_critical_sections) - [Batched Critical Sections](http://kprotty.me/2025/09/08/batched-critical-sections.html)
* [2025-09-09, 10:10:15](https://news.ycombinator.com/item?id=45179939) - [DuckDB NPM packages 1.3.3 and 1.29.2 compromised with malware](https://github.com/duckdb/duckdb-node/security/advisories/GHSA-w62p-hx95-gf2c)
* [2025-09-09, 10:02:23](https://news.ycombinator.com/item?id=45179889) - [You too can run malware from NPM (I mean without consequences)](https://github.com/naugtur/running-qix-malware)
* [2025-09-09, 10:00:00](https://linux.slashdot.org/story/25/09/09/0039236/red-hat-back-office-team-moving-to-ibm-from-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Back-Office Team Moving To IBM From 2026](https://linux.slashdot.org/story/25/09/09/0039236/red-hat-back-office-team-moving-to-ibm-from-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 09:54:51](https://lobste.rs/s/r6yt0r/what_i_learned_building_my_first_jenkins) - [What I Learned Building My First Jenkins Plugin](https://mergify.com/blog/what-i-learned-building-my-first-jenkins-plugin)
* [2025-09-09, 08:33:59](https://lobste.rs/s/ayimlh/recreating_apollo_ai_adoption_rate_chart) - [Recreating the Apollo AI adoption rate chart with GPT-5, Python and Pyodide](https://simonwillison.net/2025/Sep/9/apollo-ai-adoption/)
* [2025-09-09, 08:16:31](https://lobste.rs/s/wxtopc/novel_technique_for_sql_injection_pdo_s) - [A Novel Technique for SQL Injection in PDO’s Prepared Statements](https://slcyber.io/assetnote-security-research-center/a-novel-technique-for-sql-injection-in-pdos-prepared-statements/)
* [2025-09-09, 07:30:57](https://lobste.rs/s/qlbdbs/can_collations_be_used_over_citext) - [Can Collations Be Used Over citext?](https://www.cybertec-postgresql.com/en/can-collations-be-used-over-citext/)
* [2025-09-09, 07:00:00](https://tech.slashdot.org/story/25/09/09/0030209/gemini-app-finally-expands-to-audio-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini App Finally Expands To Audio Files](https://tech.slashdot.org/story/25/09/09/0030209/gemini-app-finally-expands-to-audio-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 06:42:12](https://lobste.rs/s/ydgmi6/i_ran_claude_loop_for_three_months_it) - [i ran Claude in a loop for three months, and it created a genz programming language called cursed](https://ghuntley.com/cursed/)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 06:19:44](https://lobste.rs/s/py9ag0/compiling_functional_language_llvm) - [Compiling a functional language to LLVM](https://danieljharvey.github.io/posts/2023-02-08-llvm-compiler-part-1.html)
* [2025-09-09, 06:10:15](https://news.ycombinator.com/item?id=45178041) - [Mistral AI raises 1.7B€, enters strategic partnership with ASML](https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai)
* [2025-09-09, 05:06:49](https://lobste.rs/s/unb7up/gsoc_2025_byte_type_supporting_raw_data) - [GSoC 2025 - Byte Type: Supporting Raw Data Copies in the LLVM IR](https://blog.llvm.org/posts/2025-08-29-gsoc-byte-type/)
* [2025-09-09, 04:46:17](https://news.ycombinator.com/item?id=45177518) - [Strong Eventual Consistency – The Big Idea Behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-09, 03:30:00](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warming Seas Threaten Key Phytoplankton Species That Fuels the Food Web](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 03:08:00](https://lobste.rs/s/9oneuy/liquid_glass_browser_refraction_with_css) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-09, 01:37:28](https://news.ycombinator.com/item?id=45176401) - [Show HN: Attempt – A CLI for retrying fallible commands](https://github.com/MaxBondABE/attempt)
* [2025-09-09, 01:09:21](https://news.ycombinator.com/item?id=45176206) - [No adblocker detected](https://maurycyz.com/misc/ads/)
* [2025-09-09, 00:30:00](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disposable Face Masks Used During Covid Have Left Chemical Timebomb](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:50:00](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Says He &apos;Didn&apos;t Earn a Penny&apos; From Star Trek Re-Runs](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:10:00](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Suffers Security Incident Exposing User Data and Urging Password Resets](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 22:47:55](https://lobste.rs/s/vjuviw/first_ziglang_org_outage) - [The First ziglang.org Outage](https://ziglang.org/news/first-outage/)
* [2025-09-08, 22:30:00](https://games.slashdot.org/story/25/09/08/213205/all-54-lost-clickwheel-ipod-games-have-been-preserved-for-posterity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All 54 Lost Clickwheel IPod Games Have Been Preserved For Posterity](https://games.slashdot.org/story/25/09/08/213205/all-54-lost-clickwheel-ipod-games-have-been-preserved-for-posterity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 22:19:38](https://lobste.rs/s/bxyrsn/keenwrite_3_6_3) - [KeenWrite 3.6.3](https://keenwrite.com/)
* [2025-09-08, 22:18:48](https://lobste.rs/s/xowlqa/text_format_feature_matrix) - [Text format feature matrix](https://keenwrite.com/blog/2025/09/08/feature-matrix/)
* [2025-09-08, 21:50:00](https://tech.slashdot.org/story/25/09/08/2050202/nova-launchers-founder-and-sole-developer-has-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nova Launcher&apos;s Founder and Sole Developer Has Left](https://tech.slashdot.org/story/25/09/08/2050202/nova-launchers-founder-and-sole-developer-has-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 21:32:49](https://news.ycombinator.com/item?id=45174297) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-08, 21:17:50](https://news.ycombinator.com/item?id=45174125) - [Alterego: Thought to Text](https://www.alterego.io/)
* [2025-09-08, 21:10:18](https://news.ycombinator.com/item?id=45174037) - [The elegance of movement in Silksong](https://theahura.substack.com/p/the-elegance-of-movement-in-silksong)
* [2025-09-08, 21:10:00](https://it.slashdot.org/story/25/09/08/2044243/jaguar-land-rover-extends-shutdown-after-cyber-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jaguar Land Rover Extends Shutdown After Cyber Attack](https://it.slashdot.org/story/25/09/08/2044243/jaguar-land-rover-extends-shutdown-after-cyber-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 20:33:00](https://it.slashdot.org/story/25/09/08/2031235/all-it-work-to-involve-ai-by-2030-says-gartner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All IT Work To Involve AI By 2030, Says Gartner](https://it.slashdot.org/story/25/09/08/2031235/all-it-work-to-involve-ai-by-2030-says-gartner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 19:55:15](https://lobste.rs/s/tiutfj/wikimedia_sunsets_separate_mobile) - [Wikimedia sunsets separate mobile domains](https://www.mediawiki.org/wiki/Requests_for_comment/Mobile_domain_sunsetting/2025_Announcement)
* [2025-09-08, 19:42:09](https://lobste.rs/s/kpyagy/using_emacs_org_mode_with_databases) - [Using Emacs Org-Mode With Databases: A getting-started guide](https://gitlab.com/ryanprior/emacs-org-data-starter)
* [2025-09-08, 19:25:00](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Hijack npm Packages With 2 Billion Weekly Downloads in Supply Chain Attack](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 19:16:39](https://news.ycombinator.com/item?id=45172609) - [Microsoft doubles down on small modular reactors and fusion energy](https://www.techradar.com/pro/microsoft-joins-world-nuclear-association-as-it-doubles-down-on-small-modular-reactors-and-fusion-energy)
* [2025-09-08, 18:45:00](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Rolls Out Encrypted Cloud Backups, Debuts First Subscription Plan at $1.99/Month](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 18:08:00](https://tech.slashdot.org/story/25/09/08/188234/google-tells-court-open-web-is-already-in-rapid-decline-after-execs-claimed-it-was-thriving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tells Court &apos;Open Web is Already in Rapid Decline&apos; After Execs Claimed It Was Thriving](https://tech.slashdot.org/story/25/09/08/188234/google-tells-court-open-web-is-already-in-rapid-decline-after-execs-claimed-it-was-thriving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 18:00:59](https://lobste.rs/s/ygvmor/color_npm_package_compromised) - [color npm package compromised](https://fasterthanli.me/articles/color-npm-package-compromised)
* [2025-09-08, 17:33:44](https://news.ycombinator.com/item?id=45171200) - [iPhone dumbphone](https://stopa.io/post/297)
* [2025-09-08, 17:27:00](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Man Still Alive Six Months After Pig Kidney Transplant](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 16:56:26](https://lobste.rs/s/w9nx3l/introducing_signal_secure_backups) - [Introducing Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:43:39](https://news.ycombinator.com/item?id=45170515) - [Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:22:14](https://lobste.rs/s/vajzqz/anatomy_billion_download_npm_supply) - [Anatomy of a billion-download NPM supply-chain attack](https://jdstaerk.substack.com/p/we-just-found-malicious-code-in-the)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 16:07:27](https://lobste.rs/s/rojvul/fixing_my_gripes_with_github_using_gleam) - [Fixing my gripes with GitHub using Gleam and a Raspberry Pi](https://giacomocavalieri.me/posts/fixing-my-gripes-with-github-using-gleam-and-a-raspberry-pi)
* [2025-09-08, 15:37:57](https://news.ycombinator.com/item?id=45169657) - [NPM debug and chalk packages compromised](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised)
* [2025-09-08, 15:35:46](https://news.ycombinator.com/item?id=45169624) - [Will Amazon S3 Vectors kill vector databases or save them?](https://zilliz.com/blog/will-amazon-s3-vectors-kill-vector-databases-or-save-them)
* [2025-09-08, 15:08:20](https://news.ycombinator.com/item?id=45169275) - [Clankers Die on Christmas](https://remyhax.xyz/posts/clankers-die-on-christmas/)
* [2025-09-08, 14:43:44](https://lobste.rs/s/hnd00z/we_will_not_accept_changes_created_with) - [We will not accept changes created with the aid of \&quot;AI\&quot;](https://codeberg.org/superseriousbusiness/gotosocial/src/commit/9b7db51436/CODE_OF_CONDUCT.md)
* [2025-09-08, 14:43:17](https://news.ycombinator.com/item?id=45168953) - [Experimenting with Local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:42:54](https://lobste.rs/s/7mxb1p/experimenting_with_local_llms_on_macos) - [Experimenting with local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:36:00](https://news.ycombinator.com/item?id=45168854) - [AMD claims Arm ISA doesn&apos;t offer efficiency advantage over x86](https://www.techpowerup.com/340779/amd-claims-arm-isa-doesnt-offer-efficiency-advantage-over-x86)
* [2025-09-08, 12:55:13](https://lobste.rs/s/zvdtdn/package_managers_are_evil) - [Package Managers are Evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 10:39:53](https://lobste.rs/s/pokmo0/strong_eventual_consistency_big_idea) - [Strong Eventual Consistency - The Big Idea behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-08, 09:29:36](https://news.ycombinator.com/item?id=45166245) - [Anscombe&apos;s Quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet)
* [2025-09-08, 08:39:36](https://lobste.rs/s/itj50a/make_invalid_states_unrepresentable) - [&apos;Make invalid states unrepresentable&apos; considered harmful](https://www.seangoedecke.com/invalid-states/)
* [2025-09-08, 08:25:21](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked) - [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/)
* [2025-09-08, 08:01:17](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than) - [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 18:22:35](https://news.ycombinator.com/item?id=45151641) - [How can England possibly be running out of water?](https://www.theguardian.com/news/ng-interactive/2025/aug/17/how-can-england-possibly-be-running-out-of-water)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-05, 23:07:00](https://news.ycombinator.com/item?id=45144758) - [Is OOXML Artifically Complex?](https://hsu.cy/2025/09/is-ooxml-artificially-complex/)
* [2025-09-05, 21:57:15](https://news.ycombinator.com/item?id=45144129) - [Deluxe Paint on the Commodore Amiga](https://stonetools.ghost.io/deluxepaint-amiga/)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 19:48:57](https://news.ycombinator.com/item?id=45142845) - [X Design Notes: Unifying OCaml Modules and Values](https://blog.polybdenum.com/2025/08/19/x-design-notes-unifying-ocaml-modules-and-values.html)
* [2025-09-05, 19:34:18](https://news.ycombinator.com/item?id=45142704) - [Seedship – Text-Based Game](https://philome.la/johnayliff/seedship/play/index.html)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:39:40](https://news.ycombinator.com/item?id=45140572) - [A clickable visual guide to the Rust type system](https://rustcurious.com/elements/)
* [2025-09-05, 14:00:23](https://news.ycombinator.com/item?id=45138695) - [The key points of \&quot;Working Effectively with Legacy Code\&quot;](https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 06:36:49](https://news.ycombinator.com/item?id=45135591) - [Contracts for C](https://gustedt.wordpress.com/2025/03/10/contracts-for-c/)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
