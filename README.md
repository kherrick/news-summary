# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Productivity Developments

* [Where's The Evidence That AI Increases Productivity?](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A detailed discussion questioning the claims around AI's impact on productivity with a call for convincing evidence.

* [The Israeli spyware firm that accidentally just exposed itself](https://ahmedeldin.substack.com/p/the-israeli-spyware-firm-that-accidentally) - Exposé on a significant incident involving an Israeli spyware firm and the implications for data security.

* [Thanks a lot, AI: Hard drives are sold out for the year, says WD](https://mashable.com/article/ai-hard-drive-hdd-shortages-western-digital-sold-out) - Analysis of the hard drive shortages exacerbated by AI's rising demand for storage.

## Technological Innovations and Challenges

* [Hardware TOTP authenticator with 8-layer security architecture (ESP32)](https://github.com/makepkg/SecureGen) - A look into a security-focused hardware time-based one-time password (TOTP) implementation.

* [Qwen3.5: Towards Native Multimodal Agents](https://qwen.ai/blog?id=qwen3.5) - Development insights into Qwen3.5, signaling a move toward more comprehensive multimodal AI agents.

* [MessageFormat: Unicode standard for localizable message strings](https://github.com/unicode-org/message-format-wg) - In-depth on the Unicode standard for improving global communication and localization of text.

* [A relationship between the Collatz conjecture and the Fibonacci numbers](https://vincentrolfs.dev/blog/collatz) - A mathematical exploration linking the famous Collatz conjecture with Fibonacci sequences.

## Software and Open Source Projects

* [open-source-games: A list of open source games](https://github.com/bobeff/open-source-games) - A curated collection showcasing the diversity of open source games.

* [picol: A Tcl interpreter in 500 lines of code](https://github.com/antirez/picol) - Introduction to a minimalistic interpreter for the Tcl programming language.

* [Building SQLite with a small swarm](https://kiankyars.github.io/machine_learning/2026/02/12/sqlite.html) - Insights into collaborative development using smaller-scale teams to build SQLite.

* [Zig landed io_uring and Grand Central Dispatch std.Io implementations](https://ziglang.org/devlog/2026/?20260213#2026-02-13) - Updates on the Zig programming language and its integration of modern I/O features.

## Global Tech Policies and Impact

* [India's New Social Media Rules:  Remove Unlawful Content in Three Hours, Detect Illegal AI Content Automatically](https://tech.slashdot.org/story/26/02/15/2231220/indias-new-social-media-rules-remove-unlawful-content-in-three-hours-detect-illegal-ai-content-automatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - How India's aggressive new social media policies aim to tackle illegal content and misinformation.

* [EU bans the destruction of unsold apparel, clothing, accessories and footwear](https://environment.ec.europa.eu/news/new-eu-rules-stop-destruction-unsold-clothes-and-shoes-2026-02-09_en) - EU introduces sustainability measures to prevent waste in the fashion industry.

* [Apple Patches Decade-Old IOS Zero-Day, Possibly Exploited By Commercial Spyware](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple fixes a long-standing iOS vulnerability amid concerns over its misuse by spyware vendors.

## Space and Scientific Discoveries

* [Astronomers Discover the Surprising Reason for a Star's Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - Exploration of new findings on a star's mystery disappearance.

* [Analysis of JWST Data Finds - Old Galaxies in a Young Universe?](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Breakthroughs in space research questioning established beliefs on the universe's evolution.

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - Innovations in microscopy unveil hidden superconducting dynamics, enhancing material science research.

* [Terry Pratchett's Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - A study suggesting that Terry Pratchett's works contain early signs of his battle with dementia.

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

* [2026-02-16, 12:34:00](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Where&apos;s The Evidence That AI Increases Productivity?](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 12:28:31](https://news.ycombinator.com/item?id=47034192) - [Thanks a lot, AI: Hard drives are sold out for the year, says WD](https://mashable.com/article/ai-hard-drive-hdd-shortages-western-digital-sold-out)
* [2026-02-16, 12:00:42](https://news.ycombinator.com/item?id=47033976) - [The Israeli spyware firm that accidentally just exposed itself](https://ahmedeldin.substack.com/p/the-israeli-spyware-firm-that-accidentally)
* [2026-02-16, 11:57:45](https://lobste.rs/s/nmprop/hardware_totp_authenticator_with_8_layer) - [Hardware TOTP authenticator with 8-layer security architecture (ESP32)](https://github.com/makepkg/SecureGen)
* [2026-02-16, 11:06:28](https://news.ycombinator.com/item?id=47033622) - [Anthropic tries to hide Claude&apos;s AI actions. Devs hate it](https://www.theregister.com/2026/02/16/anthropic_claude_ai_edits/)
* [2026-02-16, 10:26:22](https://news.ycombinator.com/item?id=47033328) - [MessageFormat: Unicode standard for localizable message strings](https://github.com/unicode-org/message-format-wg)
* [2026-02-16, 10:23:17](https://lobste.rs/s/hzljsi/messageformat_unicode_standard_for) - [MessageFormat: Unicode standard for localizable message strings](https://github.com/unicode-org/message-format-wg)
* [2026-02-16, 09:32:21](https://news.ycombinator.com/item?id=47032876) - [Qwen3.5: Towards Native Multimodal Agents](https://qwen.ai/blog?id=qwen3.5)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 09:28:12](https://lobste.rs/s/uncb9g/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uncb9g/what_are_you_doing_this_week)
* [2026-02-16, 08:54:07](https://lobste.rs/s/3gc0z4/relationship_between_collatz) - [A relationship between the Collatz conjecture and the Fibonacci numbers](https://vincentrolfs.dev/blog/collatz)
* [2026-02-16, 08:46:42](https://lobste.rs/s/rqdfpj/open_source_games_list_open_source_games) - [open-source-games: A list of open source games](https://github.com/bobeff/open-source-games)
* [2026-02-16, 08:34:00](https://linux.slashdot.org/story/26/02/16/0340259/i-tried-running-linux-on-an-apple-silicon-mac-and-regretted-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Tried Running Linux On an Apple Silicon Mac and Regretted It&apos;](https://linux.slashdot.org/story/26/02/16/0340259/i-tried-running-linux-on-an-apple-silicon-mac-and-regretted-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 08:04:11](https://news.ycombinator.com/item?id=47032235) - [picol: A Tcl interpreter in 500 lines of code](https://github.com/antirez/picol)
* [2026-02-16, 06:31:48](https://news.ycombinator.com/item?id=47031580) - [I want to wash my car. The car wash is 50 meters away. Should I walk or drive?](https://mastodon.world/@knowmadd/116072773118828295)
* [2026-02-16, 06:16:59](https://lobste.rs/s/iisnbr/error_payloads_zig) - [Error payloads in Zig](https://srcreigh.ca/posts/error-payloads-in-zig/)
* [2026-02-16, 05:38:51](https://news.ycombinator.com/item?id=47031268) - [Building SQLite with a small swarm](https://kiankyars.github.io/machine_learning/2026/02/12/sqlite.html)
* [2026-02-16, 05:34:00](https://slashdot.org/story/26/02/16/0433256/will-tech-giants-just-use-ai-interactions-to-create-more-effective-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Tech Giants Just Use AI Interactions to Create More Effective Ads?](https://slashdot.org/story/26/02/16/0433256/will-tech-giants-just-use-ai-interactions-to-create-more-effective-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 02:36:14](https://news.ycombinator.com/item?id=47030271) - [Arm wants a bigger slice of the chip business](https://www.economist.com/business/2026/02/12/arm-wants-a-bigger-slice-of-the-chip-business)
* [2026-02-16, 01:41:00](https://news.slashdot.org/story/26/02/16/0139206/ars-technicas-ai-reporter-apologizes-for-mistakenly-publishing-fake-ai-generated-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ars Technica&apos;s AI Reporter Apologizes For Mistakenly Publishing Fake AI-Generated Quotes](https://news.slashdot.org/story/26/02/16/0139206/ars-technicas-ai-reporter-apologizes-for-mistakenly-publishing-fake-ai-generated-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 01:20:28](https://lobste.rs/s/ytqpkb/how_i_manage_my_guix_system_configs) - [How I manage my Guix System configs](https://www.terracrypt.net/posts/guix-config.html)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:26:23](https://news.ycombinator.com/item?id=47029339) - [JavaScript-heavy approaches are not compatible with long-term performance goals](https://sgom.es/posts/2026-02-13-js-heavy-approaches-are-not-compatible-with-long-term-performance-goals/)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
* [2026-02-15, 23:57:53](https://lobste.rs/s/jdwug1/runtime_validation_type_annotations) - [Runtime validation in type annotations](https://blog.natfu.be/validation-in-type-annotations/)
* [2026-02-15, 23:52:02](https://lobste.rs/s/vh9bgg/only_developer_productivity_metrics) - [The only developer productivity metrics that matter](https://genehack.blog/2026/02/the-only-developer-productivity-metrics-that-matter/)
* [2026-02-15, 23:35:00](https://tech.slashdot.org/story/26/02/15/2333200/rivians-stock-spikes-27-after-reporting-144-million-profit-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian&apos;s Stock Spikes 27% After Reporting $144 Million Profit in 2025](https://tech.slashdot.org/story/26/02/15/2333200/rivians-stock-spikes-27-after-reporting-144-million-profit-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 22:55:20](https://lobste.rs/s/orb96v/deep_blue) - [Deep Blue](https://simonwillison.net/2026/Feb/15/deep-blue/)
* [2026-02-15, 22:35:00](https://tech.slashdot.org/story/26/02/15/2231220/indias-new-social-media-rules-remove-unlawful-content-in-three-hours-detect-illegal-ai-content-automatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s New Social Media Rules:  Remove Unlawful Content in Three Hours, Detect Illegal AI Content Automatically](https://tech.slashdot.org/story/26/02/15/2231220/indias-new-social-media-rules-remove-unlawful-content-in-three-hours-detect-illegal-ai-content-automatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 22:17:10](https://news.ycombinator.com/item?id=47028227) - [Magnus Carlsen Wins the Freestyle (Chess960) World Championship](https://www.fide.com/magnus-carlsen-wins-2026-fide-freestyle-world-championship/)
* [2026-02-15, 22:13:25](https://lobste.rs/s/m2cqe7/gwtar_static_efficient_single_file_html) - [Gwtar: a static efficient single-file HTML format](https://gwern.net/gwtar)
* [2026-02-15, 21:54:15](https://news.ycombinator.com/item?id=47028013) - [I’m joining OpenAI](https://steipete.me/posts/2026/openclaw)
* [2026-02-15, 21:35:00](https://yro.slashdot.org/story/26/02/15/2134211/sam-bankman-fried-requests-new-trial-in-ftx-crypto-fraud-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Bankman-Fried Requests New Trial in FTX Crypto Fraud Case](https://yro.slashdot.org/story/26/02/15/2134211/sam-bankman-fried-requests-new-trial-in-ftx-crypto-fraud-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 20:58:04](https://lobste.rs/s/dvwczg/is_end_end_encryption_optional_for_large) - [Is End-to-End Encryption Optional For Large Groups?](https://soatok.blog/2026/02/14/is-end-to-end-encryption-optional-for-large-groups/)
* [2026-02-15, 19:34:00](https://entertainment.slashdot.org/story/26/02/15/196244/babylon-5-episodes-start-appearing-free-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ &apos;Babylon 5&apos; Episodes Start Appearing (Free) on YouTube ](https://entertainment.slashdot.org/story/26/02/15/196244/babylon-5-episodes-start-appearing-free-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 19:30:21](https://lobste.rs/s/ozrdyz/defer_available_gcc_clang) - [Defer available in gcc and clang](https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/)
* [2026-02-15, 19:20:00](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss) - [Claude Opus 4.6 Spends $20K Trying to Write a C Compiler](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss)
* [2026-02-15, 18:40:35](https://news.ycombinator.com/item?id=47026186) - [Show HN: Microgpt is a GPT you can visualize in the browser](https://microgpt.boratto.ca)
* [2026-02-15, 18:34:00](https://science.slashdot.org/story/26/02/15/1828227/dna-mutations-discovered-in-the-children-of-chernobyl-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA Mutations Discovered In the Children of Chernobyl Workers](https://science.slashdot.org/story/26/02/15/1828227/dna-mutations-discovered-in-the-children-of-chernobyl-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 18:04:10](https://news.ycombinator.com/item?id=47025851) - [Modern CSS Code Snippets: Stop writing CSS like it&apos;s 2015](https://modern-css.com)
* [2026-02-15, 17:34:00](https://linux.slashdot.org/story/26/02/15/0249259/oldest-active-linux-distro-slackware-finally-releases-version-150?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oldest Active Linux Distro Slackware Finally Releases Version 15.0](https://linux.slashdot.org/story/26/02/15/0249259/oldest-active-linux-distro-slackware-finally-releases-version-150?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 17:12:35](https://news.ycombinator.com/item?id=47025399) - [LT6502: A 6502-based homebrew laptop](https://github.com/TechPaula/LT6502)
* [2026-02-15, 17:11:54](https://lobste.rs/s/wqzhei/lt6502_6502_based_laptop_design) - [LT6502: A 6502 based laptop design](https://github.com/TechPaula/LT6502)
* [2026-02-15, 17:10:18](https://news.ycombinator.com/item?id=47025378) - [EU bans the destruction of unsold apparel, clothing, accessories and footwear](https://environment.ec.europa.eu/news/new-eu-rules-stop-destruction-unsold-clothes-and-shoes-2026-02-09_en)
* [2026-02-15, 17:06:25](https://news.ycombinator.com/item?id=47025338) - [Show HN: Knock-Knock.net – Visualizing the bots knocking on my server&apos;s door](https://knock-knock.net)
* [2026-02-15, 17:04:45](https://lobste.rs/s/vtqlec/towards_fearless_macros_2023) - [Towards Fearless Macros (2023)](https://lambdaland.org/posts/2023-10-17_fearless_macros/)
* [2026-02-15, 17:04:32](https://lobste.rs/s/apoc9v/e2ee_be_all_end_all_chat) - [E2EE, the be all and end all of chat?](https://amy.is-a.dev/posts/no-e2ee/)
* [2026-02-15, 16:40:13](https://news.ycombinator.com/item?id=47025085) - [Pocketblue – Fedora Atomic for mobile devices](https://github.com/pocketblue/pocketblue)
* [2026-02-15, 16:34:00](https://it.slashdot.org/story/26/02/15/062259/fake-job-recruiters-hid-malware-in-developer-coding-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Job Recruiters Hid Malware In Developer Coding Challenges](https://it.slashdot.org/story/26/02/15/062259/fake-job-recruiters-hid-malware-in-developer-coding-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 15:37:06](https://news.ycombinator.com/item?id=47024506) - [Gwtar: A static efficient single-file HTML format](https://gwern.net/gwtar)
* [2026-02-15, 15:34:00](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Analysis of JWST Data Finds - Old Galaxies in a Young Universe?](https://science.slashdot.org/story/26/02/15/0151204/analysis-of-jwst-data-finds---old-galaxies-in-a-young-universe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 15:32:42](https://lobste.rs/s/mosgwl/simple_way_scale_pixel_art_games) - [A simple way to scale pixel art games](https://30fps.net/pages/pixelart-scaling/)
* [2026-02-15, 14:36:09](https://lobste.rs/s/qmjejh/ai_is_slowly_munching_away_my_passion) - [AI is slowly munching away my passion](https://whynot.fail/human/ai-is-slowly-munching-away-my-passion/)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 14:07:05](https://lobste.rs/s/uvdj0c/single_reason_not_vibe_code) - [A Single Reason To Not Vibe Code](https://asindu.xyz/a-single-reason-to-not-vibe-code)
* [2026-02-15, 13:55:28](https://lobste.rs/s/dtzfkd/rendering_visible_spectrum) - [Rendering the Visible Spectrum](https://brandonli.net/spectra/doc/)
* [2026-02-15, 12:34:00](https://developers.slashdot.org/story/26/02/15/0741249/vim-92-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vim 9.2 Released](https://developers.slashdot.org/story/26/02/15/0741249/vim-92-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 11:45:21](https://lobste.rs/s/3cdwxo/how_michael_abrash_doubled_quake) - [How Michael Abrash doubled Quake framerate](https://fabiensanglard.net/quake_asm_optimizations/index.html)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 09:27:49](https://lobste.rs/s/wjkyf5/how_add_drm_your_backend_easy_2026_working) - [How To Add DRM To Your Backend (easy) [2026 WORKING]](https://maia.crimew.gay/posts/kinemaster-drm/)
* [2026-02-15, 08:34:00](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Patches Decade-Old IOS Zero-Day, Possibly Exploited By Commercial Spyware](https://apple.slashdot.org/story/26/02/15/018217/apple-patches-decade-old-ios-zero-day-possibly-exploited-by-commercial-spyware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 07:51:52](https://lobste.rs/s/hirsns/i_fixed_windows_native_development) - [I Fixed Windows Native Development](https://marler8997.github.io/blog/fixed-windows/)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 04:34:00](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Additional Benefits For Brain, Heart, and Lungs Found for Drugs Like Viagra and Cialis](https://science.slashdot.org/story/26/02/15/0334219/additional-benefits-for-brain-heart-and-lungs-found-for-drugs-like-viagra-and-cialis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 00:57:23](https://lobste.rs/s/av1it1/zig_landed_io_uring_grand_central) - [Zig landed io_uring and Grand Central Dispatch std.Io implementations](https://ziglang.org/devlog/2026/?20260213#2026-02-13)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 20:35:48](https://lobste.rs/s/7kjrtz/ublock_filter_list_hide_all_youtube) - [uBlock filter list to hide all YouTube Shorts](https://github.com/i5heu/ublock-hide-yt-shorts)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 16:15:58](https://news.ycombinator.com/item?id=47004384) - [I gave Claude access to my pen plotter](https://harmonique.one/posts/i-gave-claude-access-to-my-pen-plotter)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:44:44](https://news.ycombinator.com/item?id=47003294) - [Designing a 36-key custom keyboard layout (2021)](https://peterxjang.medium.com/designing-a-36-key-custom-keyboard-layout-24498a0eecd4)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 07:44:50](https://news.ycombinator.com/item?id=47000034) - [Expensively Quadratic: The LLM Agent Cost Curve](https://blog.exe.dev/expensively-quadratic)
* [2026-02-13, 05:39:45](https://news.ycombinator.com/item?id=46999285) - [Audio is the one area small labs are winning](https://www.amplifypartners.com/blog-posts/arming-the-rebels-with-gpus-gradium-kyutai-and-audio-ai)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-13, 00:35:23](https://news.ycombinator.com/item?id=46997356) - [Vim-pencil: Rethinking Vim as a tool for writing](https://github.com/preservim/vim-pencil)
* [2026-02-12, 20:19:54](https://news.ycombinator.com/item?id=46994542) - [Show HN: I generated a \&quot;stress test\&quot; of 200 rare defects from 7 real photos](https://news.ycombinator.com/item?id=46994542)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 18:35:39](https://news.ycombinator.com/item?id=46993014) - [Real-time PathTracing with global illumination in WebGL](https://erichlof.github.io/THREE.js-PathTracing-Renderer/)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 15:19:13](https://news.ycombinator.com/item?id=46989879) - [Hard problems in social media archiving](https://alexwlchan.net/2025/hard-problems-in-social-media-archiving/)
* [2026-02-12, 13:23:22](https://news.ycombinator.com/item?id=46988538) - [Rolling your own serverless OCR in 40 lines of code](https://christopherkrapu.com/blog/2026/ocr-textbooks-modal-deepseek/)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 04:01:48](https://news.ycombinator.com/item?id=46984768) - [1,300-year-old world chronicle unearthed in Sinai](https://www.heritagedaily.com/2026/02/1300-year-old-world-chronicle-unearthed-in-sinai/156948)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
