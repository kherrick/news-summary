# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Discoveries

* [i ran Claude in a loop for three months, and it created a genz programming language called cursed](https://ghuntley.com/cursed/) ([comments](https://lobste.rs/s/ydgmi6/i_ran_claude_loop_for_three_months_it))

* [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/) ([comments](https://lobste.rs/s/9oneuy/liquid_glass_browser_refraction_with_css))

* [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss))

* [Introducing the MCP Registry](http://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/) ([comments](https://lobste.rs/s/n3pizi/introducing_mcp_registry))

## Climate and Environment

* [The World's Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss))

* [Warming Seas Threaten Key Phytoplankton Species That Fuels the Food Web](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Disposable Face Masks Used During Covid Have Left Chemical Timebomb](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Cybersecurity and Data Breaches

* [Hackers Hijack npm Packages With 2 Billion Weekly Downloads in Supply Chain Attack](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Plex Suffers Security Incident Exposing User Data and Urging Password Resets](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Signal Rolls Out Encrypted Cloud Backups, Debuts First Subscription Plan at $1.99/Month](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Science and Medicine

* [US Man Still Alive Six Months After Pig Kidney Transplant](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss))

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

* [2025-09-09, 06:42:55](https://lobste.rs/s/n3pizi/introducing_mcp_registry) - [Introducing the MCP Registry](http://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/)
* [2025-09-09, 06:42:12](https://lobste.rs/s/ydgmi6/i_ran_claude_loop_for_three_months_it) - [i ran Claude in a loop for three months, and it created a genz programming language called cursed](https://ghuntley.com/cursed/)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 05:16:23](https://news.ycombinator.com/item?id=45177683) - [YouTube Is a Mysterious Monopoly](https://anderegg.ca/2025/09/08/youtube-is-a-mysterious-monopoly)
* [2025-09-09, 05:06:49](https://lobste.rs/s/unb7up/gsoc_2025_byte_type_supporting_raw_data) - [GSoC 2025 - Byte Type: Supporting Raw Data Copies in the LLVM IR](https://blog.llvm.org/posts/2025-08-29-gsoc-byte-type/)
* [2025-09-09, 04:46:17](https://news.ycombinator.com/item?id=45177518) - [Strong Eventual Consistency – The Big Idea Behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-09, 04:44:20](https://news.ycombinator.com/item?id=45177507) - [Byte Type: Supporting Raw Data Copies in the LLVM IR](https://blog.llvm.org/posts/2025-08-29-gsoc-byte-type/)
* [2025-09-09, 03:30:00](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warming Seas Threaten Key Phytoplankton Species That Fuels the Food Web](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 03:08:00](https://lobste.rs/s/9oneuy/liquid_glass_browser_refraction_with_css) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-09, 01:51:54](https://news.ycombinator.com/item?id=45176491) - [Incident Report for Anthropic](https://status.anthropic.com/incidents/72f99lh1cj2c)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-09, 01:37:28](https://news.ycombinator.com/item?id=45176401) - [Show HN: Attempt – A CLI for retrying fallible commands](https://github.com/MaxBondABE/attempt)
* [2025-09-09, 01:09:21](https://news.ycombinator.com/item?id=45176206) - [No adblocker detected](https://maurycyz.com/misc/ads/)
* [2025-09-09, 00:30:00](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disposable Face Masks Used During Covid Have Left Chemical Timebomb](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:50:00](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Says He &apos;Didn&apos;t Earn a Penny&apos; From Star Trek Re-Runs](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:48:14](https://news.ycombinator.com/item?id=45175628) - [The Storm Hits the Art Market](https://news.artnet.com/market/intelligence-report-storm-2025-2684512)
* [2025-09-08, 23:10:00](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Suffers Security Incident Exposing User Data and Urging Password Resets](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 22:47:55](https://lobste.rs/s/vjuviw/first_ziglang_org_outage) - [The First ziglang.org Outage](https://ziglang.org/news/first-outage/)
* [2025-09-08, 22:30:00](https://games.slashdot.org/story/25/09/08/213205/all-54-lost-clickwheel-ipod-games-have-been-preserved-for-posterity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All 54 Lost Clickwheel IPod Games Have Been Preserved For Posterity](https://games.slashdot.org/story/25/09/08/213205/all-54-lost-clickwheel-ipod-games-have-been-preserved-for-posterity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 22:19:38](https://lobste.rs/s/bxyrsn/keenwrite_3_6_3) - [KeenWrite 3.6.3](https://keenwrite.com/)
* [2025-09-08, 22:18:48](https://lobste.rs/s/xowlqa/text_format_feature_matrix) - [Text format feature matrix](https://keenwrite.com/blog/2025/09/08/feature-matrix/)
* [2025-09-08, 21:50:00](https://tech.slashdot.org/story/25/09/08/2050202/nova-launchers-founder-and-sole-developer-has-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nova Launcher&apos;s Founder and Sole Developer Has Left](https://tech.slashdot.org/story/25/09/08/2050202/nova-launchers-founder-and-sole-developer-has-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 21:32:49](https://news.ycombinator.com/item?id=45174297) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-08, 21:26:07](https://news.ycombinator.com/item?id=45174221) - [Ex-WhatsApp cybersecurity head says Meta endangered billions of users](https://www.theguardian.com/technology/2025/sep/08/meta-user-data-lawsuit-whatsapp)
* [2025-09-08, 21:17:50](https://news.ycombinator.com/item?id=45174125) - [Alterego: Thought to Text](https://www.alterego.io/)
* [2025-09-08, 21:10:18](https://news.ycombinator.com/item?id=45174037) - [The elegance of movement in Silksong](https://theahura.substack.com/p/the-elegance-of-movement-in-silksong)
* [2025-09-08, 21:10:00](https://it.slashdot.org/story/25/09/08/2044243/jaguar-land-rover-extends-shutdown-after-cyber-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jaguar Land Rover Extends Shutdown After Cyber Attack](https://it.slashdot.org/story/25/09/08/2044243/jaguar-land-rover-extends-shutdown-after-cyber-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 20:33:00](https://it.slashdot.org/story/25/09/08/2031235/all-it-work-to-involve-ai-by-2030-says-gartner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All IT Work To Involve AI By 2030, Says Gartner](https://it.slashdot.org/story/25/09/08/2031235/all-it-work-to-involve-ai-by-2030-says-gartner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 19:55:15](https://lobste.rs/s/tiutfj/wikimedia_sunsets_separate_mobile) - [Wikimedia sunsets separate mobile domains](https://www.mediawiki.org/wiki/Requests_for_comment/Mobile_domain_sunsetting/2025_Announcement)
* [2025-09-08, 19:42:09](https://lobste.rs/s/kpyagy/using_emacs_org_mode_with_databases) - [Using Emacs Org-Mode With Databases: A getting-started guide](https://gitlab.com/ryanprior/emacs-org-data-starter)
* [2025-09-08, 19:36:24](https://lobste.rs/s/hsmtfr/cp_sat_primer) - [The CP-SAT Primer](https://d-krupke.github.io/cpsat-primer/)
* [2025-09-08, 19:25:00](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Hijack npm Packages With 2 Billion Weekly Downloads in Supply Chain Attack](https://it.slashdot.org/story/25/09/08/1843235/hackers-hijack-npm-packages-with-2-billion-weekly-downloads-in-supply-chain-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 19:16:39](https://news.ycombinator.com/item?id=45172609) - [Microsoft doubles down on small modular reactors and fusion energy](https://www.techradar.com/pro/microsoft-joins-world-nuclear-association-as-it-doubles-down-on-small-modular-reactors-and-fusion-energy)
* [2025-09-08, 18:45:00](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Rolls Out Encrypted Cloud Backups, Debuts First Subscription Plan at $1.99/Month](https://yro.slashdot.org/story/25/09/08/1824254/signal-rolls-out-encrypted-cloud-backups-debuts-first-subscription-plan-at-199month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 18:08:00](https://tech.slashdot.org/story/25/09/08/188234/google-tells-court-open-web-is-already-in-rapid-decline-after-execs-claimed-it-was-thriving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tells Court &apos;Open Web is Already in Rapid Decline&apos; After Execs Claimed It Was Thriving](https://tech.slashdot.org/story/25/09/08/188234/google-tells-court-open-web-is-already-in-rapid-decline-after-execs-claimed-it-was-thriving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 18:00:59](https://lobste.rs/s/ygvmor/color_npm_package_compromised) - [color npm package compromised](https://fasterthanli.me/articles/color-npm-package-compromised)
* [2025-09-08, 17:33:44](https://news.ycombinator.com/item?id=45171200) - [iPhone dumbphone](https://stopa.io/post/297)
* [2025-09-08, 17:27:00](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Man Still Alive Six Months After Pig Kidney Transplant](https://science.slashdot.org/story/25/09/08/1727212/us-man-still-alive-six-months-after-pig-kidney-transplant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 16:56:26](https://lobste.rs/s/w9nx3l/introducing_signal_secure_backups) - [Introducing Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:55:13](https://lobste.rs/s/yw0ehz/tiny_llm_llm_serving_week) - [Tiny LLM - LLM Serving in a Week](https://skyzh.github.io/tiny-llm/)
* [2025-09-08, 16:47:00](https://yro.slashdot.org/story/25/09/08/1647240/whistle-blower-sues-meta-over-claims-of-whatsapp-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Whistle-Blower Sues Meta Over Claims of WhatsApp Security Flaws](https://yro.slashdot.org/story/25/09/08/1647240/whistle-blower-sues-meta-over-claims-of-whatsapp-security-flaws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 16:44:00](https://lobste.rs/s/wi1rqy/unix_co_creator_brian_kernighan_on_rust) - [Unix Co-Creator Brian Kernighan on Rust, Distros and NixOS](https://thenewstack.io/unix-co-creator-brian-kernighan-on-rust-distros-and-nixos/)
* [2025-09-08, 16:43:39](https://news.ycombinator.com/item?id=45170515) - [Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:22:14](https://lobste.rs/s/vajzqz/anatomy_billion_download_npm_supply) - [Anatomy of a billion-download NPM supply-chain attack](https://jdstaerk.substack.com/p/we-just-found-malicious-code-in-the)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 16:07:27](https://lobste.rs/s/rojvul/fixing_my_gripes_with_github_using_gleam) - [Fixing my gripes with GitHub using Gleam and a Raspberry Pi](https://giacomocavalieri.me/posts/fixing-my-gripes-with-github-using-gleam-and-a-raspberry-pi)
* [2025-09-08, 16:06:52](https://news.ycombinator.com/item?id=45170000) - [I have left Branch and am no longer involved with Nova Launcher](https://teslacoilapps.com/nova/solong.html)
* [2025-09-08, 16:05:00](https://science.slashdot.org/story/25/09/08/165206/mathematicians-find-gpt-5-makes-critical-errors-in-original-proof-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mathematicians Find GPT-5 Makes Critical Errors in Original Proof Generation](https://science.slashdot.org/story/25/09/08/165206/mathematicians-find-gpt-5-makes-critical-errors-in-original-proof-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 15:37:57](https://news.ycombinator.com/item?id=45169657) - [NPM debug and chalk packages compromised](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised)
* [2025-09-08, 15:35:46](https://news.ycombinator.com/item?id=45169624) - [Will Amazon S3 Vectors kill vector databases or save them?](https://zilliz.com/blog/will-amazon-s3-vectors-kill-vector-databases-or-save-them)
* [2025-09-08, 15:21:00](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sued Over Its Lab-Grown Meat Ban](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 15:08:20](https://news.ycombinator.com/item?id=45169275) - [Clankers Die on Christmas](https://remyhax.xyz/posts/clankers-die-on-christmas/)
* [2025-09-08, 14:43:44](https://lobste.rs/s/hnd00z/we_will_not_accept_changes_created_with) - [We will not accept changes created with the aid of \&quot;AI\&quot;](https://codeberg.org/superseriousbusiness/gotosocial/src/commit/9b7db51436/CODE_OF_CONDUCT.md)
* [2025-09-08, 14:43:17](https://news.ycombinator.com/item?id=45168953) - [Experimenting with Local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:42:54](https://lobste.rs/s/7mxb1p/experimenting_with_local_llms_on_macos) - [Experimenting with local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:36:00](https://news.ycombinator.com/item?id=45168854) - [AMD claims Arm ISA doesn&apos;t offer efficiency advantage over x86](https://www.techpowerup.com/340779/amd-claims-arm-isa-doesnt-offer-efficiency-advantage-over-x86)
* [2025-09-08, 12:55:13](https://lobste.rs/s/zvdtdn/package_managers_are_evil) - [Package Managers are Evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)
* [2025-09-08, 12:21:15](https://news.ycombinator.com/item?id=45167401) - [A clickable visual guide to the Rust type system](https://rustcurious.com/elements/)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 10:39:53](https://lobste.rs/s/pokmo0/strong_eventual_consistency_big_idea) - [Strong Eventual Consistency - The Big Idea behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-08, 08:39:36](https://lobste.rs/s/itj50a/make_invalid_states_unrepresentable) - [&apos;Make invalid states unrepresentable&apos; considered harmful](https://www.seangoedecke.com/invalid-states/)
* [2025-09-08, 08:25:21](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked) - [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/)
* [2025-09-08, 08:01:17](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than) - [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting)
* [2025-09-08, 07:18:20](https://lobste.rs/s/jwreod/deliberate_abstraction) - [Deliberate Abstraction](https://entropicthoughts.com/deliberate-abstraction)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 06:51:47](https://lobste.rs/s/mwhbyo/bye_intel_hi_amd_i_m_done_after_2_dead_intels) - [Bye Intel, hi AMD! I’m done after 2 dead Intels](https://michael.stapelberg.ch/posts/2025-09-07-bye-intel-hi-amd-9950x3d/)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 18:22:35](https://news.ycombinator.com/item?id=45151641) - [How can England possibly be running out of water?](https://www.theguardian.com/news/ng-interactive/2025/aug/17/how-can-england-possibly-be-running-out-of-water)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-05, 23:07:00](https://news.ycombinator.com/item?id=45144758) - [Is OOXML Artifically Complex?](https://hsu.cy/2025/09/is-ooxml-artificially-complex/)
* [2025-09-05, 22:35:01](https://news.ycombinator.com/item?id=45144470) - [Jeena&apos;s Hyprland Demo](https://tube.jeena.net/w/2EpbXJnMrDokc3362oXSTQ)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 20:01:47](https://news.ycombinator.com/item?id=45142970) - [MileSan: Detecting μ-Architectural Leakage via Differential HW/SW Taint Tracking](https://comsec.ethz.ch/research/hardware-design-security/milesan-detecting-exploitable-microarchitectural-leakage-via-differential-hardware-software-taint-tracking/)
* [2025-09-05, 19:34:18](https://news.ycombinator.com/item?id=45142704) - [Seedship – Text-Based Game](https://philome.la/johnayliff/seedship/play/index.html)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:49:29](https://news.ycombinator.com/item?id=45140695) - [Interview with Geoffrey Hinton](https://www.ft.com/content/31feb335-4945-475e-baaa-3b880d9cf8ce)
* [2025-09-05, 14:29:26](https://news.ycombinator.com/item?id=45139038) - [ATC/OSDI &apos;25 Joint Keynote: Accelerating Software Dev: The LLM (R)Evolution [video]](https://www.youtube.com/watch?v=dk3y3o3vhhU)
* [2025-09-05, 14:00:23](https://news.ycombinator.com/item?id=45138695) - [The key points of \&quot;Working Effectively with Legacy Code\&quot;](https://understandlegacycode.com/blog/key-points-of-working-effectively-with-legacy-code/)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 06:36:49](https://news.ycombinator.com/item?id=45135591) - [Contracts for C](https://gustedt.wordpress.com/2025/03/10/contracts-for-c/)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
