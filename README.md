# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Releases

* [Narwhal v0.6.0 – message broker for edge apps, now with channel persistence](https://github.com/lonewolf-io/narwhal/releases/tag/narwhal-0.6.0) - A release announcement for Narwhal v0.6.0, highlighting its edge computing applications with new channel persistence capabilities. [Read comments](https://lobste.rs/s/5ktlik/narwhal_v0_6_0_message_broker_for_edge_apps)

* [Wait is over - coreboot on the AMD StarBook](https://starlabs.systems/blogs/news/coreboot-on-the-amd-starbook-finally) - Announcement of joining the open-source firmware revolution as Coreboot is now available on the AMD-powered StarBook. [Read comments](https://lobste.rs/s/wt6xvx/wait_is_over_coreboot_on_amd_starbook)

* [Stalwart v0.16: A New Foundation](https://stalw.art/blog/stalwart-0-16) - The latest version of Stalwart mail server promises significant improvements with its new foundation. [Read comments](https://lobste.rs/s/47iclr/stalwart_v0_16_new_foundation)

## Scientific Discoveries and Innovations

* [Chinese Carmaker Patents Voice-Controlled 'in-Vehicle Toilet'](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - New developments in in-vehicle facilities as a Chinese carmaker pioneers a voice-controlled toilet. [Read comments](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)

* [Robots Beat Human Records At Beijing Half-Marathon](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Robots outpace humans in a unique sports challenge during the Beijing half-marathon. [Read comments](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Technology Controversies

* [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - Explores the emerging trend of intentional data corruption as a means to disrupt AI models. [Read comments](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)

* [A Roblox cheat and one AI tool brought down Vercel's platform](https://webmatrices.com/post/how-a-roblox-cheat-and-one-ai-tool-brought-down-vercel-s-entire-platform) - Describes how a combination of a gaming cheat and AI technology compromised the Vercel platform. [Read comments](https://news.ycombinator.com/item?id=47844431)

## Tributes and Milestones

* [Louis Zocchi, inventor of the d100, has died](https://icv2.com/articles/news/view/62176/r-i-p-louis-zocchi-the-godfather-dice) - Honors the late Louis Zocchi, who revolutionized dice design with his invention of the 100-sided die. [Read comments](https://news.ycombinator.com/item?id=47845231)

## Programming and Development Insights

* [How To Make a Fast Dynamic Language Interpreter](https://zef-lang.dev/implementation) - Provides insights into building a high-performance dynamic language interpreter, useful for programming enthusiasts. [Read comments](https://lobste.rs/s/vrmjge/how_make_fast_dynamic_language)

* [ggsql: A grammar of graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/) - Introduces a novel visualization framework for SQL data, enabling more expressive graphical representations. [Read comments](https://lobste.rs/s/tf7ngv/ggsql_grammar_graphics_for_sql)

## Apple Leadership Transition

* [Apple CEO Tim Cook Is Stepping Down](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Announcement of Tim Cook's transition as Apple's CEO, passing the role to John Ternus. [Read comments](https://news.ycombinator.com/item?id=47840219)

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

* [2026-04-21, 10:18:50](https://lobste.rs/s/5ktlik/narwhal_v0_6_0_message_broker_for_edge_apps) - [Narwhal v0.6.0 – message broker for edge apps, now with channel persistence](https://github.com/lonewolf-io/narwhal/releases/tag/narwhal-0.6.0)
* [2026-04-21, 10:17:18](https://lobste.rs/s/p3fzyr/finishing_things) - [Finishing Things](https://ratfactor.com/finishing-things)
* [2026-04-21, 10:09:48](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new) - [What is your go-to project for learning a new language?](https://lobste.rs/s/xqmug2/what_is_your_go_project_for_learning_new)
* [2026-04-21, 09:48:45](https://lobste.rs/s/wt6xvx/wait_is_over_coreboot_on_amd_starbook) - [Wait is over - coreboot on the AMD StarBook](https://starlabs.systems/blogs/news/coreboot-on-the-amd-starbook-finally)
* [2026-04-21, 09:37:13](https://lobste.rs/s/vrmjge/how_make_fast_dynamic_language) - [How To Make a Fast Dynamic Language Interpreter](https://zef-lang.dev/implementation)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 07:00:00](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Video Shows &apos;Earthset&apos; From Space](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 06:25:50](https://news.ycombinator.com/item?id=47845274) - [Using Changesets in a polyglot monorepo](https://luke.hsiao.dev/blog/changesets-polyglot-monorepo/)
* [2026-04-21, 06:19:15](https://news.ycombinator.com/item?id=47845231) - [Louis Zocchi, inventor of the d100, has died](https://icv2.com/articles/news/view/62176/r-i-p-louis-zocchi-the-godfather-dice)
* [2026-04-21, 06:12:41](https://news.ycombinator.com/item?id=47845187) - [A mad undertaking: An undefinitive guide to the Aadam Jacobs collection](https://aadamjacobscollection.org/)
* [2026-04-21, 05:59:53](https://news.ycombinator.com/item?id=47845111) - [Types and Neural Networks](https://www.brunogavranovic.com/posts/2026-04-20-types-and-neural-networks.html)
* [2026-04-21, 05:43:49](https://lobste.rs/s/mfy7oi/command_execution_via_drag_drop_terminal) - [Command Execution via Drag-and-Drop in Terminal Emulators](https://sdushantha.github.io/post/drop-it-like-its-hot)
* [2026-04-21, 05:27:35](https://news.ycombinator.com/item?id=47844890) - [Salmon exposed to cocaine and its main byproduct roam more widely](https://www.science.org/content/article/cocaine-pollution-gives-salmon-wanderlust)
* [2026-04-21, 04:31:30](https://news.ycombinator.com/item?id=47844539) - [The Beauty of Bonsai Styles](https://longwoodgardens.org/blog/2023-05-17/beauty-bonsai-styles)
* [2026-04-21, 04:12:12](https://news.ycombinator.com/item?id=47844431) - [A Roblox cheat and one AI tool brought down Vercel&apos;s platform](https://webmatrices.com/post/how-a-roblox-cheat-and-one-ai-tool-brought-down-vercel-s-entire-platform)
* [2026-04-21, 03:43:03](https://news.ycombinator.com/item?id=47844269) - [Anthropic says OpenClaw-style Claude CLI usage is allowed again](https://docs.openclaw.ai/providers/anthropic)
* [2026-04-21, 03:38:21](https://lobste.rs/s/eu5n2j/256_lines_less_test_case_minimization) - [256 Lines or Less: Test Case Minimization](https://matklad.github.io/2026/04/20/test-case-minimization.html)
* [2026-04-21, 03:30:00](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation To Require Age Verification For Messages and Voice Chat](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-21, 01:45:20](https://lobste.rs/s/axllpn/good_egg_trust_scoring_for_github_pr) - [good-egg: Trust scoring for GitHub PR authors based on contribution history](https://github.com/2ndSetAI/good-egg)
* [2026-04-21, 01:14:08](https://lobste.rs/s/jnl6e7/signal_shot_project_verify_signal) - [Signal Shot: a project to verify the Signal protocol and its Rust implementation using Lean](https://leodemoura.github.io/blog/2026-4-20-signal-shot-the-platform-is-ready/)
* [2026-04-21, 00:48:07](https://news.ycombinator.com/item?id=47843194) - [How to make a fast dynamic language interpreter](https://zef-lang.dev/implementation)
* [2026-04-20, 23:00:00](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobile Phones To Be Banned In Schools In England Under New Plans](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:08:39](https://lobste.rs/s/etrtmp/jujutsu_megamerges_for_fun_profit) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 22:05:00](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple CEO Tim Cook Is Stepping Down](https://apple.slashdot.org/story/26/04/20/221244/apple-ceo-tim-cook-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 21:33:15](https://news.ycombinator.com/item?id=47841149) - [Monero Community Crowdfunding System](https://ccs.getmonero.org/ideas/)
* [2026-04-20, 21:32:10](https://news.ycombinator.com/item?id=47841129) - [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)
* [2026-04-20, 21:00:00](https://yro.slashdot.org/story/26/04/20/204204/former-palantir-employee-running-for-congress-unveils-ai-dividend-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Palantir Employee Running For Congress Unveils &apos;AI Dividend&apos; Plan](https://yro.slashdot.org/story/26/04/20/204204/former-palantir-employee-running-for-congress-unveils-ai-dividend-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 20:54:37](https://lobste.rs/s/47iclr/stalwart_v0_16_new_foundation) - [Stalwart v0.16: A New Foundation](https://stalw.art/blog/stalwart-0-16)
* [2026-04-20, 20:39:32](https://news.ycombinator.com/item?id=47840219) - [John Ternus to become Apple CEO](https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/)
* [2026-04-20, 20:00:00](https://entertainment.slashdot.org/story/26/04/20/1947211/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deezer Says 44% of Songs Uploaded To Its Platform Daily Are AI-Generated](https://entertainment.slashdot.org/story/26/04/20/1947211/deezer-says-44-of-songs-uploaded-to-its-platform-daily-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 19:51:07](https://news.ycombinator.com/item?id=47839645) - [Soul Player C64 – A real transformer running on a 1 MHz Commodore 64](https://github.com/gizmo64k/soulplayer-c64)
* [2026-04-20, 19:00:00](https://news.slashdot.org/story/26/04/20/1711231/trump-administration-begins-refunding-166-billion-in-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Begins Refunding $166 Billion In Tariffs](https://news.slashdot.org/story/26/04/20/1711231/trump-administration-begins-refunding-166-billion-in-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 18:40:55](https://lobste.rs/s/ea0xug/quantum_computers_are_not_threat_128_bit) - [Quantum Computers Are Not a Threat to 128-bit Symmetric Keys](https://words.filippo.io/128-bits/)
* [2026-04-20, 18:39:53](https://news.ycombinator.com/item?id=47838703) - [Kimi vendor verifier – verify accuracy of inference providers](https://www.kimi.com/blog/kimi-vendor-verifier)
* [2026-04-20, 18:00:00](https://tech.slashdot.org/story/26/04/20/1654212/palantir-posts-bond-villain-manifesto-on-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Palantir Posts Bond Villain Manifesto On X](https://tech.slashdot.org/story/26/04/20/1654212/palantir-posts-bond-villain-manifesto-on-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 17:07:22](https://lobste.rs/s/7mqzck/journey_optimising_elixir_application) - [Journey in optimising Elixir application](https://hauleth.dev/post/things-about-elixir-you-probably-will-never-need/)
* [2026-04-20, 17:00:00](https://slashdot.org/story/26/04/20/1647258/allbirds-move-to-ai-has-echoes-of-the-dot-com-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Allbirds&apos; Move To AI Has Echoes of the Dot-Com Frenzy](https://slashdot.org/story/26/04/20/1647258/allbirds-move-to-ai-has-echoes-of-the-dot-com-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 16:37:48](https://news.ycombinator.com/item?id=47836784) - [Quantum Computers Are Not a Threat to 128-Bit Symmetric Keys](https://words.filippo.io/128-bits/)
* [2026-04-20, 16:16:54](https://lobste.rs/s/ky2eoq/effectful_recursion_schemes) - [Effectful Recursion Schemes](https://effekt-lang.org/blog/recursion-schemes/)
* [2026-04-20, 16:02:35](https://lobste.rs/s/ugbrsp/pytexas_2026_recap) - [PyTexas 2026 Recap](https://bernat.tech/posts/pytexas-2026-recap/)
* [2026-04-20, 16:00:00](https://yro.slashdot.org/story/26/04/20/0353220/nsa-using-anthropics-mythos-despite-blacklist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSA Using Anthropic&apos;s Mythos Despite Blacklist](https://yro.slashdot.org/story/26/04/20/0353220/nsa-using-anthropics-mythos-despite-blacklist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 15:53:24](https://lobste.rs/s/xeb6yb/transpiling_from_python_into_lisp) - [Transpiling from Python into Lisp](https://github.com/naver/lispe/wiki/6.22-Transpiling-Python-into-LispE)
* [2026-04-20, 15:32:47](https://lobste.rs/s/tf7ngv/ggsql_grammar_graphics_for_sql) - [ggsql: A grammar of graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)
* [2026-04-20, 15:07:04](https://news.ycombinator.com/item?id=47835411) - [Show HN: Mediator.ai – Using Nash bargaining and LLMs to systematize fairness](https://mediator.ai/)
* [2026-04-20, 15:00:00](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robots Beat Human Records At Beijing Half-Marathon](https://hardware.slashdot.org/story/26/04/20/0346215/robots-beat-human-records-at-beijing-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 14:18:56](https://lobste.rs/s/hqfiqi/building_opnsense_router) - [Building an OPNsense router](https://clintonboys.com/projects/homelab/04-router/)
* [2026-04-20, 14:14:52](https://news.ycombinator.com/item?id=47834689) - [MNT Reform is an open hardware laptop, designed and assembled in Germany](http://mnt.stanleylieber.com/reform/)
* [2026-04-20, 14:05:34](https://news.ycombinator.com/item?id=47834565) - [Qwen3.6-Max-Preview: Smarter, Sharper, Still Evolving](https://qwen.ai/blog?id=qwen3.6-max-preview)
* [2026-04-20, 13:41:25](https://news.ycombinator.com/item?id=47834195) - [All phones sold in the EU to have replaceable batteries from 2027](https://www.theolivepress.es/spain-news/2026/04/20/eu-to-force-replaceable-batteries-in-phones-and-tablets-from-2027/)
* [2026-04-20, 13:06:15](https://lobste.rs/s/uxkvmr/forgejo_v15_0_is_available) - [Forgejo v15.0 is available](https://forgejo.org/2026-04-release-v15-0/)
* [2026-04-20, 12:51:20](https://news.ycombinator.com/item?id=47833558) - [ggsql: A Grammar of Graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)
* [2026-04-20, 12:37:45](https://lobste.rs/s/41tx1p/418_i_m_teapot) - [418 I&apos;m a teapot](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 11:51:38](https://lobste.rs/s/hagsaq/webusb_extension_for_firefox) - [WebUSB extension for Firefox](https://github.com/ArcaneNibble/awawausb)
* [2026-04-20, 11:51:04](https://news.ycombinator.com/item?id=47832969) - [WebUSB Extension for Firefox](https://github.com/ArcaneNibble/awawausb)
* [2026-04-20, 11:34:00](https://tech.slashdot.org/story/26/04/20/0729233/videos-catch-amazon-delivery-drones-dropping-packages-from-10-feet-in-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Videos Catch Amazon Delivery Drones Dropping Packages From 10 Feet in the Air](https://tech.slashdot.org/story/26/04/20/0729233/videos-catch-amazon-delivery-drones-dropping-packages-from-10-feet-in-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 11:05:54](https://lobste.rs/s/cjbxjv/your_engineering_team_looks_healthy_it) - [Your engineering team looks healthy. It probably isn&apos;t](https://dbarabashh.com/thoughts-and-experience/your-engineering-team-looks-healthy)
* [2026-04-20, 09:07:49](https://lobste.rs/s/y5nowq/modern_frontend_complexity_essential) - [Modern Frontend Complexity: essential or accidental?](https://binaryigor.com/modern-frontend-complexity.html)
* [2026-04-20, 08:49:22](https://news.ycombinator.com/item?id=47831742) - [Brussels launched an age checking app. Hackers took 2 minutes to break it](https://www.politico.eu/article/eu-brussels-launched-age-checking-app-hackers-say-took-them-2-minutes-break-it/)
* [2026-04-20, 08:08:15](https://lobste.rs/s/hqvxoj/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hqvxoj/what_are_you_doing_this_week)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 07:34:00](https://it.slashdot.org/story/26/04/20/066225/zoom-partners-with-sam-altmans-iris-scanning-company-to-offer-callers-verifications-of-humanness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zoom Partners With Sam Altman&apos;s Iris-Scanning Company To Offer Callers Verifications of Humanness](https://it.slashdot.org/story/26/04/20/066225/zoom-partners-with-sam-altmans-iris-scanning-company-to-offer-callers-verifications-of-humanness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 04:34:00](https://slashdot.org/story/26/04/20/0423212/brave-browser-introduces-origin-a-pay-once-minimalist-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brave Browser Introduces &apos;Origin&apos;, a Pay-Once &apos;Minimalist&apos; Browser](https://slashdot.org/story/26/04/20/0423212/brave-browser-introduces-origin-a-pay-once-minimalist-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 03:27:54](https://lobste.rs/s/pfqxak/claude_desktop_installs_undocumented) - [Claude Desktop installs undocumented browser extensions for Chrome and other browsers](https://www.thatprivacyguy.com/blog/anthropic-spyware/)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-20, 02:50:00](https://science.slashdot.org/story/26/04/20/0248201/blue-origin-rocket-launches-successfully-reuses-booster---but-loses-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Rocket Launches, Successfully Reuses Booster - But Loses Satellite](https://science.slashdot.org/story/26/04/20/0248201/blue-origin-rocket-launches-successfully-reuses-booster---but-loses-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 09:26:04](https://news.ycombinator.com/item?id=47822978) - [Edit store price tags using Flipper Zero](https://github.com/i12bp8/TagTinker)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 07:54:11](https://news.ycombinator.com/item?id=47822549) - [Modern Rendering Culling Techniques](https://krupitskas.com/posts/modern_culling_techniques/)
* [2026-04-19, 07:09:44](https://news.ycombinator.com/item?id=47822372) - [Bullshit About Bullshit Machines [pdf]](https://aphyr.com/data/posts/411/the-future-of-everything-is-lies.pdf)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 21:38:46](https://news.ycombinator.com/item?id=47819738) - [Air is full of DNA](https://www.nature.com/articles/d41586-026-01099-2)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
* [2026-04-18, 02:51:34](https://news.ycombinator.com/item?id=47812749) - [Ternary Bonsai: Top Intelligence at 1.58 Bits](https://prismml.com/news/ternary-bonsai)
* [2026-04-17, 23:22:38](https://news.ycombinator.com/item?id=47811668) - [Japan&apos;s cherry blossom database, 1,200 years old, has a new keeper](https://www.nytimes.com/2026/04/17/climate/japan-cherry-blossom-database-scientist.html)
* [2026-04-17, 22:50:00](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss) - [Back Button Hijacking to be Penalised in Google Crackdown](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss)
* [2026-04-17, 22:12:59](https://news.ycombinator.com/item?id=47811154) - [Kefir C17/C23 Compiler](https://sr.ht/~jprotopopov/kefir/)
* [2026-04-17, 18:06:00](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - [Physicists Think They&apos;ve Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
