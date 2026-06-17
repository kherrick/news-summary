# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Industry Disruptions

* [Smartphone Market To Shrink 15% This Year Due To Memory Crisis](https://mobile.slashdot.org/story/26/06/17/2022201/smartphone-market-to-shrink-15-this-year-due-to-memory-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The smartphone market faces a severe contraction due to a memory supply crisis.

* [Leaked financial docs show OpenAI is losing billions of dollars a year](https://arstechnica.com/ai/2026/06/leaked-financial-docs-show-openai-is-losing-billions-of-dollars-a-year/) - Internal documents reveal substantial financial losses for the AI leader.

* [Tesco moving 40k server workloads off VMware amid Broadcom's abusive conduct](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/) - Tesco transitions its infrastructure amid allegations of Broadcom's misconduct.

* [Volkswagen started blocking GrapheneOS users](https://discuss.grapheneos.org/d/35949-volkswagen-app?page=3) - Volkswagen faces criticism for limiting app access for GrapheneOS users.

* [Epic Games Announces Lore Open-Source Version Control System](https://news.slashdot.org/story/26/06/17/1654241/epic-games-announces-lore-open-source-version-control-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Epic Games unveils a scalable open-source version control tool called Lore.

## Advancements in AI and Applications

* [AI Will Lead To Labor Shortages, Bezos Says In Optimistic Talk](https://slashdot.org/story/26/06/17/1711214/ai-will-lead-to-labor-shortages-bezos-says-in-optimistic-talk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Jeff Bezos shares optimistic views on AI's long-term impact on labor.

* [Google, Microsoft, and OpenAI Back Linux Foundation's Appia AI Standards Initiative](https://linux.slashdot.org/story/26/06/17/201217/google-microsoft-and-openai-back-linux-foundations-appia-ai-standards-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tech giants align to push standardized AI frameworks.

* [Using AI to improve a challenging reaction in medicinal chemistry](https://openai.com/index/ai-chemist-improves-reaction/) - AI breakthroughs are improving complex chemical processes.

* [AI and Brain-Computer Interface Allow Speechless ALS Patient To Work a Full-Time Job](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovative AI and neural interfaces break barriers for ALS patients.

## Urban and Social Challenges

* [Why Can't Walnut Creek Build 3 Bedroom Apartments with a Playground?](https://kevin.burke.dev/kevin/walnut-creek-single-stair/) - Insight into zoning challenges limiting housing solutions in Walnut Creek.

* [Why do commercial spaces sit vacant? (2025)](https://www.freerange.city/p/why-do-commercial-spaces-sit-vacant) - A deep dive into the persistent problem of vacant commercial spaces.

## Novel Ideas and Tools

* [Storied Colors – a catalogue of named colors](https://storiedcolors.com/) - A unique platform that catalogues and explores the stories behind color names.

* [Loreline – Tools for writing interactive fiction](https://loreline.app/en/) - A resourceful application for designing and writing interactive stories.

* [Data Visualization from the Comfort of your Terminal](https://github.com/medialab/xan/blob/master/docs/cookbook/dataviz.md) - Innovative tools enabling data visualization within terminal interfaces.

* [Pull Requests are Free Puppies](https://www.youtube.com/watch?v=x8_ZZhRL3YU&amp;t=1733s) - A lighthearted take on the concepts behind pull requests.

## Cybersecurity and Privacy Concerns

* [Hacking Group Claims Major Hack of Novo Nordisk, Attempted $25 Million Extortion](https://yro.slashdot.org/story/26/06/17/0617255/hacking-group-claims-major-hack-of-novo-nordisk-attempted-25-million-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Novo Nordisk faces a massive cyberattack and attempted extortion.

* [A 27-Year-Old Authentication Bypass in OpenBSD's PPP Stack](https://blog.argus-systems.ai/blog/openbsd-pap-27-year-auth-bypass.html) - A decades-old critical security flaw revealed in OpenBSD's PPP stack.

* [The Impact of Google's Manifest Version 3 Update on Ad Blocker Effectiveness](https://arxiv.org/abs/2503.01000) - Research on how Google's browser updates affect ad-blocking technology.

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

* [2026-06-17, 22:00:00](https://mobile.slashdot.org/story/26/06/17/2022201/smartphone-market-to-shrink-15-this-year-due-to-memory-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphone Market To Shrink 15% This Year Due To Memory Crisis](https://mobile.slashdot.org/story/26/06/17/2022201/smartphone-market-to-shrink-15-this-year-due-to-memory-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 21:49:03](https://news.ycombinator.com/item?id=48577374) - [Storied Colors – a catalogue of named colors](https://storiedcolors.com/)
* [2026-06-17, 21:35:27](https://news.ycombinator.com/item?id=48577246) - [Why Can&apos;t Walnut Creek Build 3 Bedroom Apartments with a Playground?](https://kevin.burke.dev/kevin/walnut-creek-single-stair/)
* [2026-06-17, 21:31:35](https://news.ycombinator.com/item?id=48577208) - [Leaked financial docs show OpenAI is losing billions of dollars a year](https://arstechnica.com/ai/2026/06/leaked-financial-docs-show-openai-is-losing-billions-of-dollars-a-year/)
* [2026-06-17, 21:00:53](https://news.ycombinator.com/item?id=48576838) - [Tesco moving 40k server workloads off VMware amid Broadcom&apos;s abusive conduct](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/)
* [2026-06-17, 21:00:07](https://news.ycombinator.com/item?id=48576824) - [A robot is sprinting towards you. Do you want it running on Claude or Grok?](https://openrouter.ai/blog/insights/royale-last-agent-standing/)
* [2026-06-17, 21:00:00](https://tech.slashdot.org/story/26/06/17/2015221/carvana-is-turning-dealerships-into-playgrounds-test-drive-centers-with-sales-all-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carvana Is Turning Dealerships Into &apos;Playgrounds,&apos; Test-Drive Centers With Sales All Online](https://tech.slashdot.org/story/26/06/17/2015221/carvana-is-turning-dealerships-into-playgrounds-test-drive-centers-with-sales-all-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 20:29:15](https://news.ycombinator.com/item?id=48576395) - [Loreline – Tools for writing interactive fiction](https://loreline.app/en/)
* [2026-06-17, 20:23:00](https://news.ycombinator.com/item?id=48576307) - [Apple Intelligence may become mandatory in iOS and macOS 27](https://manualdousuario.net/en/apple-intelligence-mandatory-ios-macos-27/)
* [2026-06-17, 20:03:00](https://linux.slashdot.org/story/26/06/17/201217/google-microsoft-and-openai-back-linux-foundations-appia-ai-standards-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google, Microsoft, and OpenAI Back Linux Foundation&apos;s Appia AI Standards Initiative](https://linux.slashdot.org/story/26/06/17/201217/google-microsoft-and-openai-back-linux-foundations-appia-ai-standards-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 19:50:11](https://news.ycombinator.com/item?id=48575878) - [Made a free macOS menu bar app that fixes typing in the wrong keyboard layout](https://flickey.site)
* [2026-06-17, 19:33:47](https://lobste.rs/s/hrcvuv/zkit_provider_agnostic_agent_toolkit) - [zkit: provider agnostic Agent toolkit](https://www.github.com/zarldev/zarlmono)
* [2026-06-17, 19:00:00](https://yro.slashdot.org/story/26/06/17/1737246/anthropic-employees-accuse-trump-administration-of-targeting-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Employees Accuse Trump Administration of Targeting Them](https://yro.slashdot.org/story/26/06/17/1737246/anthropic-employees-accuse-trump-administration-of-targeting-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 18:00:00](https://slashdot.org/story/26/06/17/1711214/ai-will-lead-to-labor-shortages-bezos-says-in-optimistic-talk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Will Lead To Labor Shortages, Bezos Says In Optimistic Talk](https://slashdot.org/story/26/06/17/1711214/ai-will-lead-to-labor-shortages-bezos-says-in-optimistic-talk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 17:34:20](https://news.ycombinator.com/item?id=48573757) - [Using AI to improve a challenging reaction in medicinal chemistry](https://openai.com/index/ai-chemist-improves-reaction/)
* [2026-06-17, 17:17:10](https://lobste.rs/s/e4kbd3/future_text_api) - [Future Text API](https://wiesmann.codiferes.net/wordpress/archives/41710)
* [2026-06-17, 17:14:21](https://news.ycombinator.com/item?id=48573435) - [The Competitive Moat That AI Can&apos;t Replicate](https://ghostinthedata.info/posts/2026/2026-06-13-human-connection-moat/)
* [2026-06-17, 17:00:02](https://news.ycombinator.com/item?id=48573221) - [Trellis AI (YC W24)  hiring a product lead to build agents for healthcare access](https://www.ycombinator.com/companies/trellis-ai/jobs/Cg94htp-product-lead)
* [2026-06-17, 17:00:00](https://news.slashdot.org/story/26/06/17/1654241/epic-games-announces-lore-open-source-version-control-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic Games Announces Lore Open-Source Version Control System](https://news.slashdot.org/story/26/06/17/1654241/epic-games-announces-lore-open-source-version-control-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 16:44:15](https://news.ycombinator.com/item?id=48573012) - [Show HN: An 8-bit live gamecast for baseball](https://ribbie.tv/watch)
* [2026-06-17, 16:34:34](https://lobste.rs/s/1shdvp/data_visualization_from_comfort_your) - [Data Visualization from the Comfort of your Terminal](https://github.com/medialab/xan/blob/master/docs/cookbook/dataviz.md)
* [2026-06-17, 16:14:04](https://news.ycombinator.com/item?id=48572553) - [Launch HN: Adam (YC W25) – Open-Source AI CAD](https://github.com/Adam-CAD/CADAM)
* [2026-06-17, 16:10:52](https://lobste.rs/s/fdbotr/fmag_single_instruction_gpu_virtual) - [FMAG: A single-instruction GPU virtual machine and toolchain](https://github.com/jangafx/FMAG)
* [2026-06-17, 16:00:00](https://yro.slashdot.org/story/26/06/17/0617255/hacking-group-claims-major-hack-of-novo-nordisk-attempted-25-million-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacking Group Claims Major Hack of Novo Nordisk, Attempted $25 Million Extortion](https://yro.slashdot.org/story/26/06/17/0617255/hacking-group-claims-major-hack-of-novo-nordisk-attempted-25-million-extortion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 15:16:40](https://lobste.rs/s/r9fmgk/epic_games_announces_lore_version) - [Epic Games announces Lore version control system](https://lore.org/)
* [2026-06-17, 15:04:47](https://news.ycombinator.com/item?id=48571526) - [Volkswagen started blocking GrapheneOS users](https://discuss.grapheneos.org/d/35949-volkswagen-app?page=3)
* [2026-06-17, 15:00:00](https://slashdot.org/story/26/06/17/0554244/openai-losses-increased-nearly-8x-in-2025-with-spending-hitting-34-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Losses Increased Nearly 8X In 2025, With Spending Hitting $34 Billion](https://slashdot.org/story/26/06/17/0554244/openai-losses-increased-nearly-8x-in-2025-with-spending-hitting-34-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 14:45:43](https://lobste.rs/s/myczjs/leaving_mozilla) - [Leaving Mozilla](https://blog.unitedheroes.net/5751)
* [2026-06-17, 14:30:27](https://news.ycombinator.com/item?id=48571081) - [Lore – Open source version control system designed for scalability](https://lore.org/)
* [2026-06-17, 14:10:19](https://lobste.rs/s/goo5sh/making_budget_models_punch_above_their) - [Making budget models punch above their weight with a smart Rust harness](https://yogthos.net/posts/2026-06-08-dirge-code.html)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 13:23:44](https://lobste.rs/s/aqk7vl/pull_requests_are_free_puppies) - [Pull Requests are Free Puppies](https://www.youtube.com/watch?v=x8_ZZhRL3YU&amp;t=1733s)
* [2026-06-17, 13:05:03](https://news.ycombinator.com/item?id=48569954) - [Want your images back? That&apos;ll be $5](https://www.lutr.dev/want-your-images-back-sure-that-ll-be-5-dollars)
* [2026-06-17, 13:00:38](https://news.ycombinator.com/item?id=48569894) - [Why thinking out loud with someone beats thinking alone](https://www.thesignalist.io/s/the-dialogue-dividend/)
* [2026-06-17, 12:20:21](https://lobste.rs/s/nh9q9g/r_core_team_wins_rousseeuw_prize_for) - [R Core team wins Rousseeuw Prize for Statistics 2026](https://rousseeuwprize.org/2026)
* [2026-06-17, 12:04:28](https://news.ycombinator.com/item?id=48569205) - [MicroUI – A tiny, portable, immediate-mode UI library written in ANSI C](https://github.com/rxi/microui)
* [2026-06-17, 11:00:00](https://games.slashdot.org/story/26/06/17/0542212/stop-killing-games-fails-to-secure-eu-law-despite-13-million-signatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stop Killing Games Fails To Secure EU Law Despite 1.3 Million Signatures](https://games.slashdot.org/story/26/06/17/0542212/stop-killing-games-fails-to-secure-eu-law-despite-13-million-signatures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 10:51:17](https://news.ycombinator.com/item?id=48568502) - [RFC 10008: The new HTTP Query Method](https://www.rfc-editor.org/info/rfc10008/)
* [2026-06-17, 10:45:54](https://lobste.rs/s/hnoijy/color_picking_oklch_for_mortals) - [Color picking Oklch for mortals](https://hugodaniel.com/posts/color-picking-oklch/)
* [2026-06-17, 09:54:21](https://news.ycombinator.com/item?id=48568058) - [U.S. science is in chaos](https://www.scientificamerican.com/article/americas-compact-between-science-and-politics-is-broken/)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 09:12:00](https://news.ycombinator.com/item?id=48567759) - [GLM-5.2 is the new leading open weights model on Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
* [2026-06-17, 08:31:43](https://lobste.rs/s/z5wfi9/i_could_ve_rickrolled_entire_fifa_world) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup. All I Needed Was My ID](https://bobdahacker.com/blog/fifa-hack)
* [2026-06-17, 07:49:44](https://news.ycombinator.com/item?id=48567155) - [Hacker News but for independent blogs](https://bubbles.town/)
* [2026-06-17, 07:30:42](https://lobste.rs/s/fxulig/impact_google_s_manifest_version_3_update) - [The Impact of Google&apos;s Manifest Version 3 Update on Ad Blocker Effectiveness](https://arxiv.org/abs/2503.01000)
* [2026-06-17, 07:00:00](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI and Brain-Computer Interface Allow Speechless ALS Patient To Work a Full-Time Job](https://science.slashdot.org/story/26/06/16/2342243/ai-and-brain-computer-interface-allow-speechless-als-patient-to-work-a-full-time-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 06:59:29](https://news.ycombinator.com/item?id=48566791) - [Why do commercial spaces sit vacant? (2025)](https://www.freerange.city/p/why-do-commercial-spaces-sit-vacant)
* [2026-06-17, 06:47:17](https://lobste.rs/s/njidax/making_ghc_upgrades_easy) - [Making GHC upgrades easy](https://blog.haskell.org/making-ghc-upgrades-easy/)
* [2026-06-17, 05:42:05](https://lobste.rs/s/vx4cnm/how_docker_desktop_networking_works) - [How Docker Desktop Networking Works Under the Hood (2022)](https://www.docker.com/blog/how-docker-desktop-networking-works-under-the-hood/)
* [2026-06-17, 05:29:46](https://lobste.rs/s/y3ra4s/game_engine_white_papers_commander_keen) - [Game Engine White Papers: Commander Keen](https://forgottenbytes.net/commander_keen.html)
* [2026-06-17, 05:14:19](https://lobste.rs/s/suaa0r/27_year_old_authentication_bypass) - [A 27-Year-Old Authentication Bypass in OpenBSD&apos;s PPP Stack](https://blog.argus-systems.ai/blog/openbsd-pap-27-year-auth-bypass.html)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-17, 03:55:16](https://news.ycombinator.com/item?id=48565498) - [US holds off blacklisting DeepSeek, more than 100 firms deemed security risks](https://www.reuters.com/world/china/us-holds-off-blacklisting-chinas-deepseek-more-than-100-firms-deemed-security-2026-06-17/)
* [2026-06-17, 03:30:00](https://tech.slashdot.org/story/26/06/16/2334256/hpe-tempts-vmware-users-partners-with-year-of-free-virtualization-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HPE Tempts VMware Users, Partners With Year of Free Virtualization Software](https://tech.slashdot.org/story/26/06/16/2334256/hpe-tempts-vmware-users-partners-with-year-of-free-virtualization-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 23:00:00](https://mobile.slashdot.org/story/26/06/16/201248/commodores-callback-8020-is-a-499-flip-phone-that-blocks-social-media-and-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Commodore&apos;s Callback 8020 Is a $499 Flip Phone That Blocks Social Media and Browsers](https://mobile.slashdot.org/story/26/06/16/201248/commodores-callback-8020-is-a-499-flip-phone-that-blocks-social-media-and-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 22:44:18](https://lobste.rs/s/6qwblq/making_http_requests_from_container_has) - [Making HTTP requests from a container that has no curl, using bash /dev/tcp](https://mareksuppa.com/til/bash-dev-tcp-http-without-curl/)
* [2026-06-16, 22:17:20](https://lobste.rs/s/j11pew/can_gzip_be_language_model) - [Can gzip be a language model?](https://nathan.rs/posts/gzip-lm/)
* [2026-06-16, 22:00:00](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Binance Set To Lose Permission To Operate In EU](https://news.slashdot.org/story/26/06/16/1942225/binance-set-to-lose-permission-to-operate-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 21:00:00](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France To Stop Certifying Products Without Quantum-Safe Encryption](https://it.slashdot.org/story/26/06/16/181236/france-to-stop-certifying-products-without-quantum-safe-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 20:00:00](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobileye Is Entering the US Robotaxi Market With Standalone Service](https://tech.slashdot.org/story/26/06/16/1757207/mobileye-is-entering-the-us-robotaxi-market-with-standalone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-16, 19:18:46](https://lobste.rs/s/zpjomk/yak_shaving_is_fun) - [But yak shaving is fun](https://parksb.github.io/en/article/32.html)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 16:00:53](https://lobste.rs/s/hwqdvt/running_local_models_is_good_now) - [Running local models is good now](https://vickiboykis.com/2026/06/15/running-local-models-is-good-now/)
* [2026-06-16, 15:55:29](https://lobste.rs/s/mxfd45/google_chrome_s_next_update_will_mark_end) - [Google Chrome&apos;s next update will mark the end of popular ad blockers](https://9to5google.com/2026/06/15/google-chromes-next-update-will-mark-the-end-of-popular-ad-blockers/)
* [2026-06-16, 15:15:01](https://news.ycombinator.com/item?id=48556561) - [How we run Firecracker VMs inside EC2 and start browsers in less than 1s](https://browser-use.com/posts/firecracker-browser-infra)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 13:42:28](https://lobste.rs/s/zqc7bj/see_what_s_next_for_firefox) - [See what&apos;s next for Firefox](https://www.firefox.com/en-US/whatsnext/)
* [2026-06-16, 13:29:53](https://lobste.rs/s/erc2po/zlib_rs_firefox) - [zlib-rs in Firefox](https://trifectatech.org/blog/zlib-rs-in-firefox/)
* [2026-06-16, 12:58:11](https://lobste.rs/s/2u1z4w/backdoor_linkedin_job_offer) - [A backdoor in a LinkedIn job offer](https://roman.pt/posts/linkedin-backdoor/)
* [2026-06-16, 10:19:19](https://lobste.rs/s/gqqw6z/kde_plasma_6_7_released) - [KDE Plasma 6.7 released](https://kde.org/announcements/plasma/6/6.7.0/)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 05:49:51](https://news.ycombinator.com/item?id=48551069) - [The Return of Rigorous Full-System Timing Simulation](https://www.sigarch.org/the-return-of-rigorous-full-system-timing-simulation/)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
* [2026-06-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss) - [How did Atari Apply Side Art to Arcade Cabinets?](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
* [2026-06-14, 21:41:56](https://news.ycombinator.com/item?id=48533098) - [Kirkland Roundabouts](https://kirklandroundabouts.com)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 18:18:04](https://news.ycombinator.com/item?id=48530685) - [A World of First Drafts](https://leejo.github.io/2026/06/14/first_drafts/)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 02:14:43](https://news.ycombinator.com/item?id=48523534) - [Show HN: Inkwash, a watercolor sketching app and explanation](https://johnowhitaker.github.io/inkwash/about)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
* [2026-06-14, 00:26:02](https://news.ycombinator.com/item?id=48522927) - [Image Compression](https://www.makingsoftware.com/chapters/image-compression)
* [2026-06-13, 19:54:00](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss) - [Intel Intro&apos;d ‘The First Processor In The X86 Series And The First 8086 Microprocessor’ On This Day](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in 4 Days](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
