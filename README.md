# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Ireland Launches World's First Permanent Basic Income Scheme For Artists, Paying $385 a Week](https://slashdot.org/story/26/02/16/1640202/ireland-launches-worlds-first-permanent-basic-income-scheme-for-artists-paying-385-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An unprecedented initiative to support artists financially through a basic income mechanism.

* [WebMCP Proposal](https://webmachinelearning.github.io/webmcp/) - An effort to create a new computational protocol aimed at machine learning and algorithmic solutions.

* [Browse code by meaning](https://haskellforall.com/2026/02/browse-code-by-meaning) - An innovative approach to navigating codebases more intuitively.

* [STM32G431 Analogue TV Transmitter](https://slyka.net/blog/2026/tinyvision/) - Transforming STM32 hardware into an analog TV transmitter for retro visuals.

* [Anthony's Reflections on AI](https://anthony.noided.media/blog/ai/programming/2026/02/14/i-guess-i-kinda-get-why-people-hate-ai.html) - A personal perspective on AI and its controversies in tech communities.

## Artificial Intelligence and Ethics

* [KPMG Partner Fined Over Using AI To Pass AI Test](https://entertainment.slashdot.org/story/26/02/16/1734213/kpmg-partner-fined-over-using-ai-to-pass-ai-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ethical challenges in corporate AI assessments highlighted by KPMG.

* [Where's The Evidence That AI Increases Productivity?](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigating whether AI is living up to its productivity-increasing promises.

* [Anthropic tries to hide Claude's AI actions. Devs hate it](https://www.theregister.com/2026/02/16/anthropic_claude_ai_edits/) - Insights into Claude AI's controversial editing capabilities and transparency issues.

## Entertainment and Losses

* [Robert Duvall Dead at 95](https://www.newsweek.com/entertainment/hollywood-legend-robert-duvall-dead-at-95-11531295) - Remembering the legendary actor's contributions to film and art.

* [Castlevania and Bloodstained developer Shutaro Ida dies aged 52](https://www.dexerto.com/gaming/castlevania-and-bloodstained-developer-shutaro-ida-dies-aged-52-3319349/) - Mourning a remarkable developer in the gaming industry.

* [Sony May Push Next PlayStation To 2028 or 2029 as AI-fueled Memory Chip Shortage Upends Plans](https://games.slashdot.org/story/26/02/16/146210/sony-may-push-next-playstation-to-2028-or-2029-as-ai-fueled-memory-chip-shortage-upends-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Gaming industry faces challenges due to supply chain and technological advancements.

## Privacy and User Concerns

* [What Your Bluetooth Devices Reveal About You](https://blog.dmcc.io/journal/2026-bluetooth-privacy-bluehood/) - Shedding light on privacy risks posed by ubiquitous technology.

* [UK Discord users were part of a Peter Thiel-linked data collection experiment](https://www.rockpapershotgun.com/good-news-uk-discord-users-were-part-of-a-peter-thiel-linked-data-collection-experiment) - Discovery of privacy breaches in social media networking.

* [Ministry of Justice orders deletion of the UK's largest court reporting database](https://www.legalcheek.com/2026/02/ministry-of-justice-orders-deletion-of-the-uks-largest-court-reporting-database/) - Addressing privacy challenges in law and enforcement.

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

* [2026-02-16, 19:00:00](https://tech.slashdot.org/story/26/02/16/1849255/instagram-boss-says-16-hours-of-daily-use-is-not-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Boss Says 16 Hours of Daily Use Is Not Addiction](https://tech.slashdot.org/story/26/02/16/1849255/instagram-boss-says-16-hours-of-daily-use-is-not-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 18:52:50](https://news.ycombinator.com/item?id=47038706) - [Robert Duvall Dead at 95](https://www.newsweek.com/entertainment/hollywood-legend-robert-duvall-dead-at-95-11531295)
* [2026-02-16, 18:44:58](https://news.ycombinator.com/item?id=47038588) - [Use Protocols, Not Services](https://notnotp.com/notes/use-protocols-not-services/)
* [2026-02-16, 18:05:32](https://news.ycombinator.com/item?id=47038125) - [Privilege Is Bad Grammar](https://tadaima.bearblog.dev/privilege-is-bad-grammar/)
* [2026-02-16, 18:01:38](https://news.ycombinator.com/item?id=47038076) - [Castlevania and Bloodstained developer Shutaro Ida dies aged 52](https://www.dexerto.com/gaming/castlevania-and-bloodstained-developer-shutaro-ida-dies-aged-52-3319349/)
* [2026-02-16, 18:00:00](https://entertainment.slashdot.org/story/26/02/16/1734213/kpmg-partner-fined-over-using-ai-to-pass-ai-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KPMG Partner Fined Over Using AI To Pass AI Test](https://entertainment.slashdot.org/story/26/02/16/1734213/kpmg-partner-fined-over-using-ai-to-pass-ai-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 17:23:55](https://lobste.rs/s/twefpn/disko_zfs_declaratively_managing_zfs) - [disko-zfs: Declaratively Managing ZFS Datasets](https://redalder.org/blog/disko-zfs-declaratively-managing-zfs-datasets.html)
* [2026-02-16, 17:22:02](https://news.ycombinator.com/item?id=47037628) - [I guess I kinda get why people hate AI](https://anthony.noided.media/blog/ai/programming/2026/02/14/i-guess-i-kinda-get-why-people-hate-ai.html)
* [2026-02-16, 17:08:20](https://news.ycombinator.com/item?id=47037501) - [WebMCP Proposal](https://webmachinelearning.github.io/webmcp/)
* [2026-02-16, 17:00:00](https://slashdot.org/story/26/02/16/1640202/ireland-launches-worlds-first-permanent-basic-income-scheme-for-artists-paying-385-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ireland Launches World&apos;s First Permanent Basic Income Scheme For Artists, Paying $385 a Week](https://slashdot.org/story/26/02/16/1640202/ireland-launches-worlds-first-permanent-basic-income-scheme-for-artists-paying-385-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 16:55:02](https://news.ycombinator.com/item?id=47037313) - [How to take a photo with scotch tape (lensless imaging) [video]](https://www.youtube.com/watch?v=97f0nfU5Px0)
* [2026-02-16, 16:22:24](https://news.ycombinator.com/item?id=47036921) - [History of AT&amp;T Long Lines](https://telephoneworld.org/long-distance-companies/att-long-distance-network/history-of-att-long-lines/)
* [2026-02-16, 16:19:16](https://news.ycombinator.com/item?id=47036891) - [Show HN: Simple org-mode web adapter](https://github.com/SpaceTurth/Org-Web-Adapter)
* [2026-02-16, 16:19:08](https://news.ycombinator.com/item?id=47036889) - [STM32G431 Analogue TV Transmitter](https://slyka.net/blog/2026/tinyvision/)
* [2026-02-16, 16:06:00](https://news.slashdot.org/story/26/02/16/166220/new-eu-rules-to-stop-the-destruction-of-unsold-clothes-and-shoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New EU Rules To Stop the Destruction of Unsold Clothes and Shoes](https://news.slashdot.org/story/26/02/16/166220/new-eu-rules-to-stop-the-destruction-of-unsold-clothes-and-shoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 15:58:51](https://lobste.rs/s/rybouo/browse_code_by_meaning) - [Browse code by meaning](https://haskellforall.com/2026/02/browse-code-by-meaning)
* [2026-02-16, 15:58:15](https://lobste.rs/s/pqn3u0/til_docker_log_rotation) - [TIL: Docker log rotation](https://ntietz.com/blog/til-docker-log-rotation/)
* [2026-02-16, 15:47:49](https://lobste.rs/s/3bzakb/building_foss_live_streaming_camera) - [Building a FOSS live streaming camera](https://blog.brixit.nl/building-a-custom-live-streaming-camera/)
* [2026-02-16, 15:34:45](https://lobste.rs/s/i2llks/ggml_gguf_file_format_vulnerabilities) - [GGML GGUF File Format Vulnerabilities](https://www.databricks.com/blog/ggml-gguf-file-format-vulnerabilities)
* [2026-02-16, 15:15:50](https://news.ycombinator.com/item?id=47036063) - [Show HN: Maths, CS and AI Compendium](https://github.com/HenryNdubuaku/maths-cs-ai-compendium)
* [2026-02-16, 15:11:56](https://lobste.rs/s/a6cy0i/carbon_dysphoria) - [Carbon Dysphoria](https://deadsimpletech.com/blog/carbon_dysphoria)
* [2026-02-16, 15:01:00](https://tech.slashdot.org/story/26/02/16/1459236/pentagon-threatens-anthropic-punishment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Threatens Anthropic Punishment](https://tech.slashdot.org/story/26/02/16/1459236/pentagon-threatens-anthropic-punishment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 14:48:25](https://news.ycombinator.com/item?id=47035679) - [UK Discord users were part of a Peter Thiel-linked data collection experiment](https://www.rockpapershotgun.com/good-news-uk-discord-users-were-part-of-a-peter-thiel-linked-data-collection-experiment)
* [2026-02-16, 14:39:32](https://news.ycombinator.com/item?id=47035560) - [What Your Bluetooth Devices Reveal About You](https://blog.dmcc.io/journal/2026-bluetooth-privacy-bluehood/)
* [2026-02-16, 14:26:39](https://news.ycombinator.com/item?id=47035371) - [The Sideprocalypse](https://johan.hal.se/wrote/2026/02/03/the-sideprocalypse/)
* [2026-02-16, 14:24:01](https://lobste.rs/s/stwus1/i_sold_out_for_20_month_all_i_got_was_this) - [I Sold Out for $20 a Month and All I Got Was This Perfectly Generated Terraform](https://matduggan.com/i-sold-out-for-200-a-month-and-all-i-got-was-this-perfectly-generated-terraform/)
* [2026-02-16, 14:18:44](https://lobste.rs/s/uzeauh/diagnostics_factory) - [Diagnostics Factory](https://matklad.github.io/2026/02/16/diagnostics-factory.html)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 14:06:00](https://games.slashdot.org/story/26/02/16/146210/sony-may-push-next-playstation-to-2028-or-2029-as-ai-fueled-memory-chip-shortage-upends-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony May Push Next PlayStation To 2028 or 2029 as AI-fueled Memory Chip Shortage Upends Plans](https://games.slashdot.org/story/26/02/16/146210/sony-may-push-next-playstation-to-2028-or-2029-as-ai-fueled-memory-chip-shortage-upends-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 13:44:50](https://lobste.rs/s/jdoe4x/please_consider_tagging_vibecoding) - [Please consider tagging a vibecoding griefpost or hypepost as a rant](https://lobste.rs/s/jdoe4x/please_consider_tagging_vibecoding)
* [2026-02-16, 13:39:45](https://news.ycombinator.com/item?id=47034801) - [Running My Own XMPP Server](https://blog.dmcc.io/journal/xmpp-turn-stun-coturn-prosody/)
* [2026-02-16, 13:30:07](https://news.ycombinator.com/item?id=47034713) - [Ministry of Justice orders deletion of the UK&apos;s largest court reporting database](https://www.legalcheek.com/2026/02/ministry-of-justice-orders-deletion-of-the-uks-largest-court-reporting-database/)
* [2026-02-16, 12:34:00](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Where&apos;s The Evidence That AI Increases Productivity?](https://it.slashdot.org/story/26/02/16/0316228/wheres-the-evidence-that-ai-increases-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 11:44:07](https://news.ycombinator.com/item?id=47033875) - [planckforth: Bootstrapping a Forth interpreter from hand-written tiny ELF binary](https://github.com/nineties/planckforth)
* [2026-02-16, 11:06:28](https://news.ycombinator.com/item?id=47033622) - [Anthropic tries to hide Claude&apos;s AI actions. Devs hate it](https://www.theregister.com/2026/02/16/anthropic_claude_ai_edits/)
* [2026-02-16, 10:26:22](https://news.ycombinator.com/item?id=47033328) - [MessageFormat: Unicode standard for localizable message strings](https://github.com/unicode-org/message-format-wg)
* [2026-02-16, 10:23:17](https://lobste.rs/s/hzljsi/messageformat_unicode_standard_for) - [MessageFormat: Unicode standard for localizable message strings](https://github.com/unicode-org/message-format-wg)
* [2026-02-16, 09:32:21](https://news.ycombinator.com/item?id=47032876) - [Qwen3.5: Towards Native Multimodal Agents](https://qwen.ai/blog?id=qwen3.5)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 09:28:12](https://lobste.rs/s/uncb9g/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uncb9g/what_are_you_doing_this_week)
* [2026-02-16, 08:54:07](https://lobste.rs/s/3gc0z4/relationship_between_collatz) - [A relationship between the Collatz conjecture and the Fibonacci numbers](https://vincentrolfs.dev/blog/collatz)
* [2026-02-16, 08:46:42](https://lobste.rs/s/rqdfpj/open_source_games_list_open_source_games) - [open-source-games: A list of open source games](https://github.com/bobeff/open-source-games)
* [2026-02-16, 08:34:00](https://linux.slashdot.org/story/26/02/16/0340259/i-tried-running-linux-on-an-apple-silicon-mac-and-regretted-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Tried Running Linux On an Apple Silicon Mac and Regretted It&apos;](https://linux.slashdot.org/story/26/02/16/0340259/i-tried-running-linux-on-an-apple-silicon-mac-and-regretted-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 06:31:48](https://news.ycombinator.com/item?id=47031580) - [I want to wash my car. The car wash is 50 meters away. Should I walk or drive?](https://mastodon.world/@knowmadd/116072773118828295)
* [2026-02-16, 06:16:59](https://lobste.rs/s/iisnbr/error_payloads_zig) - [Error payloads in Zig](https://srcreigh.ca/posts/error-payloads-in-zig/)
* [2026-02-16, 05:34:00](https://slashdot.org/story/26/02/16/0433256/will-tech-giants-just-use-ai-interactions-to-create-more-effective-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Tech Giants Just Use AI Interactions to Create More Effective Ads?](https://slashdot.org/story/26/02/16/0433256/will-tech-giants-just-use-ai-interactions-to-create-more-effective-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 01:41:00](https://news.slashdot.org/story/26/02/16/0139206/ars-technicas-ai-reporter-apologizes-for-mistakenly-publishing-fake-ai-generated-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ars Technica&apos;s AI Reporter Apologizes For Mistakenly Publishing Fake AI-Generated Quotes](https://news.slashdot.org/story/26/02/16/0139206/ars-technicas-ai-reporter-apologizes-for-mistakenly-publishing-fake-ai-generated-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
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
* [2026-02-15, 18:34:00](https://science.slashdot.org/story/26/02/15/1828227/dna-mutations-discovered-in-the-children-of-chernobyl-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA Mutations Discovered In the Children of Chernobyl Workers](https://science.slashdot.org/story/26/02/15/1828227/dna-mutations-discovered-in-the-children-of-chernobyl-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 18:04:10](https://news.ycombinator.com/item?id=47025851) - [Modern CSS Code Snippets: Stop writing CSS like it&apos;s 2015](https://modern-css.com)
* [2026-02-15, 17:04:32](https://lobste.rs/s/apoc9v/e2ee_be_all_end_all_chat) - [E2EE, the be all and end all of chat?](https://amy.is-a.dev/posts/no-e2ee/)
* [2026-02-15, 14:36:09](https://lobste.rs/s/qmjejh/ai_is_slowly_munching_away_my_passion) - [AI is slowly munching away my passion](https://whynot.fail/human/ai-is-slowly-munching-away-my-passion/)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 14:07:05](https://lobste.rs/s/uvdj0c/single_reason_not_vibe_code) - [A Single Reason To Not Vibe Code](https://asindu.xyz/a-single-reason-to-not-vibe-code)
* [2026-02-15, 11:45:21](https://lobste.rs/s/3cdwxo/how_michael_abrash_doubled_quake) - [How Michael Abrash doubled Quake framerate](https://fabiensanglard.net/quake_asm_optimizations/index.html)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 07:51:52](https://lobste.rs/s/hirsns/i_fixed_windows_native_development) - [I Fixed Windows Native Development](https://marler8997.github.io/blog/fixed-windows/)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 04:24:18](https://news.ycombinator.com/item?id=47011548) - [Ghidra by NSA](https://github.com/NationalSecurityAgency/ghidra)
* [2026-02-14, 00:46:02](https://news.ycombinator.com/item?id=47010018) - [Looks: A Halide Mark III Preview](https://www.lux.camera/mark-iii-looks/)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 07:44:50](https://news.ycombinator.com/item?id=47000034) - [Expensively Quadratic: The LLM Agent Cost Curve](https://blog.exe.dev/expensively-quadratic)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 02:33:52](https://news.ycombinator.com/item?id=46998266) - [Richard Carrington&apos;s first portrait has been found](https://www.cnn.com/2026/02/12/science/solar-storm-richard-carrington-photo)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-13, 00:35:23](https://news.ycombinator.com/item?id=46997356) - [Vim-pencil: Rethinking Vim as a tool for writing](https://github.com/preservim/vim-pencil)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 13:23:22](https://news.ycombinator.com/item?id=46988538) - [Rolling your own serverless OCR in 40 lines of code](https://christopherkrapu.com/blog/2026/ocr-textbooks-modal-deepseek/)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
