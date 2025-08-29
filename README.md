# [News Summary](https://kherrick.github.io/news-summary/)

## Innovative Science and Technology

* [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - A fascinating study on how controlled breathing techniques can achieve altered states of mind.

* [Nanoparticles Turn Houseplants Into Night Lights](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists have developed a technology that enables houseplants to emit light at night using nanoparticles.

* [Florida Deploys Robot Rabbits To Control Invasive Burmese Python Population](https://hardware.slashdot.org/story/25/08/28/217230/florida-deploys-robot-rabbits-to-control-invasive-burmese-python-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Learn how Florida is using robotic rabbits to address ecological issues caused by invasive Burmese pythons.

## Advancements in Artificial Intelligence

* [Microsoft Reveals Two In-House AI Models](https://slashdot.org/story/25/08/28/2058255/microsoft-reveals-two-in-house-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft shares details of their latest AI innovations and models.

* [Anthropic Will Start Training Its AI Models on Chat Transcripts](https://yro.slashdot.org/story/25/08/28/1643241/anthropic-will-start-training-its-ai-models-on-chat-transcripts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new initiative to use chat transcripts in training AI for superior conversational capabilities.

* [AI adoption linked to 13% decline in jobs for young U.S. workers: study](https://www.cnbc.com/2025/08/28/generative-ai-reshapes-us-job-market-stanford-study-shows-entry-level-young-workers.html) - A study reveals generative AI's impact on job availability for young professionals in the U.S.

## Intriguing Technological Updates

* [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - Mercedes showcases cutting-edge technology for fast-charging electric vehicles.

* [Amtrak's New 160mph Acela Trains Take Just As Long As the Old Ones](https://tech.slashdot.org/story/25/08/28/2128257/amtraks-new-160mph-acela-trains-take-just-as-long-as-the-old-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - High-speed trains with limitations that raise questions about infrastructure bottlenecks.

* [FFmpeg 8 Can Now Subtitle Your Videos on the Fly](https://news.slashdot.org/story/25/08/28/1844210/ffmpeg-8-can-now-subtitle-your-videos-on-the-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The latest update to FFmpeg brings advanced real-time video subtitling capabilities.

## Cybersecurity Challenges and Updates

* [TransUnion Says Hackers Stole 4.4 Million Customers' Personal Information](https://it.slashdot.org/story/25/08/28/1758241/transunion-says-hackers-stole-44-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A data breach affecting millions of customers prompts fresh concerns about cybersecurity.

* [PSA: Libxslt is unmaintained and has 5 unpatched security bugs](https://vuxml.freebsd.org/freebsd/b0a3466f-5efc-11f0-ae84-99047d0a6bcc.html) - An alert about vulnerable Libxslt software with critical unpatched bugs.

* [Unpacking Passkeys Pwned: Possibly the most specious research in decades](https://arstechnica.com/security/2025/08/new-research-claiming-passkeys-can-be-stolen-is-pure-nonsense/) - A critique of controversial security research claiming passkeys are easily compromised.

## Eco Innovations and Challenges

* [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - SpaceX continues pushing frontiers with the latest Dragon mission.

* [Humans Inhale as Much as 68,000 Microplastic Particles Daily, Study Finds](https://science.slashdot.org/story/25/08/28/1316211/humans-inhale-as-much-as-68000-microplastic-particles-daily-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Eye-opening research about airborne microplastics and their health implications.

* [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - Why electric vehicle sales are faltering in Canada amidst a resurgence in traditional car purchases.

## Fun and Curious Topics

* [Fuck up my site – Turn any website into beautiful chaos](https://www.fuckupmysite.com/?url=https%3A%2F%2Fnews.ycombinator.com&amp;torchCursor=true&amp;comicSans=true&amp;fakeCursors=true&amp;peskyFly=true) - A tool for injecting humorous chaos into any website.

* [Making Minecraft Spherical](https://www.bowerbyte.com/posts/blocky-planet/) - Explore a novel twist where the iconic Minecraft world becomes spherical.

* [Python: The Documentary [video]](https://www.youtube.com/watch?v=GfH4QL4VqJ0) - A captivating video sharing the history and evolution of the popular Python programming language.

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

* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 07:00:00](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nanoparticles Turn Houseplants Into Night Lights](https://science.slashdot.org/story/25/08/29/0030247/nanoparticles-turn-houseplants-into-night-lights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 06:37:21](https://news.ycombinator.com/item?id=45060920) - [The Synology End Game](https://lowendbox.com/blog/they-used-to-be-good-but-now-theyve-turned-to-evil-the-synology-end-game/)
* [2025-08-29, 06:12:23](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival) - [Join the Lobsters Blog Carnival](https://lobste.rs/s/0nstyk/join_lobsters_blog_carnival)
* [2025-08-29, 05:40:59](https://lobste.rs/s/fok4qx/which_parsing_approach) - [Which Parsing Approach?](https://tratt.net/laurie/blog/2020/which_parsing_approach.html)
* [2025-08-29, 05:03:14](https://lobste.rs/s/ydjspd/case_for_writing_coding_manually) - [The Case for Writing and Coding Manually](https://www.ssp.sh/brain/will-ai-replace-humans/)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
* [2025-08-29, 04:22:48](https://news.ycombinator.com/item?id=45060161) - [Strange CW Keys](https://sites.google.com/site/oh6dccw/strangecwkeys)
* [2025-08-29, 03:57:46](https://news.ycombinator.com/item?id=45060004) - [PSA: Libxslt is unmaintained and has 5 unpatched security bugs](https://vuxml.freebsd.org/freebsd/b0a3466f-5efc-11f0-ae84-99047d0a6bcc.html)
* [2025-08-29, 03:54:25](https://lobste.rs/s/ada1u6/unpacking_passkeys_pwned_possibly_most) - [Unpacking Passkeys Pwned: Possibly the most specious research in decades](https://arstechnica.com/security/2025/08/new-research-claiming-passkeys-can-be-stolen-is-pure-nonsense/)
* [2025-08-29, 03:30:00](https://hardware.slashdot.org/story/25/08/28/217230/florida-deploys-robot-rabbits-to-control-invasive-burmese-python-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Deploys Robot Rabbits To Control Invasive Burmese Python Population](https://hardware.slashdot.org/story/25/08/28/217230/florida-deploys-robot-rabbits-to-control-invasive-burmese-python-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 02:39:44](https://news.ycombinator.com/item?id=45059470) - [A deep dive into Debian 13 /tmp: What&apos;s new, and what to do if you don&apos;t like it](https://lowendbox.com/blog/a-deep-dive-into-debian-13s-tmp-whats-new-and-what-to-do-if-you-dont-like-it/)
* [2025-08-29, 02:15:46](https://lobste.rs/s/34087c/java_25_s_new_cpu_time_profiler) - [Java 25&apos;s new CPU-Time Profiler](https://mostlynerdless.de/blog/2025/06/11/java-25s-new-cpu-time-profiler-1/)
* [2025-08-29, 02:02:00](https://tech.slashdot.org/story/25/08/28/2128257/amtraks-new-160mph-acela-trains-take-just-as-long-as-the-old-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amtrak&apos;s New 160mph Acela Trains Take Just As Long As the Old Ones](https://tech.slashdot.org/story/25/08/28/2128257/amtraks-new-160mph-acela-trains-take-just-as-long-as-the-old-ones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 01:55:14](https://news.ycombinator.com/item?id=45059160) - [Lucky 13: a look at Debian trixie](https://lwn.net/Articles/1033474/)
* [2025-08-29, 01:25:00](https://slashdot.org/story/25/08/28/2058255/microsoft-reveals-two-in-house-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reveals Two In-House AI Models](https://slashdot.org/story/25/08/28/2058255/microsoft-reveals-two-in-house-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 01:09:19](https://lobste.rs/s/gft7eu/expert_lsp_official_elixir_language) - [Expert LSP: Official Elixir Language Server](https://github.com/elixir-lang/expert)
* [2025-08-29, 00:45:00](https://games.slashdot.org/story/25/08/28/1827215/microsoft-expands-xbox-cloud-gaming-to-cheaper-game-pass-tiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Expands Xbox Cloud Gaming to Cheaper Game Pass Tiers](https://games.slashdot.org/story/25/08/28/1827215/microsoft-expands-xbox-cloud-gaming-to-cheaper-game-pass-tiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-29, 00:44:27](https://news.ycombinator.com/item?id=45058688) - [Claude Sonnet will ship in Xcode](https://developer.apple.com/documentation/xcode-release-notes/xcode-26-release-notes)
* [2025-08-29, 00:02:00](https://tech.slashdot.org/story/25/08/28/2052249/stellantis-shelves-level-3-driver-assistance-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stellantis Shelves Level 3 Driver-Assistance Program](https://tech.slashdot.org/story/25/08/28/2052249/stellantis-shelves-level-3-driver-assistance-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 23:27:27](https://news.ycombinator.com/item?id=45058171) - [Python: The Documentary [video]](https://www.youtube.com/watch?v=GfH4QL4VqJ0)
* [2025-08-28, 23:20:00](https://news.slashdot.org/story/25/08/28/1844210/ffmpeg-8-can-now-subtitle-your-videos-on-the-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FFmpeg 8 Can Now Subtitle Your Videos on the Fly](https://news.slashdot.org/story/25/08/28/1844210/ffmpeg-8-can-now-subtitle-your-videos-on-the-fly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 22:40:00](https://slashdot.org/story/25/08/28/1823233/microsofts-copilot-ai-is-now-inside-samsung-tvs-and-monitors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Copilot AI is Now Inside Samsung TVs and Monitors](https://slashdot.org/story/25/08/28/1823233/microsofts-copilot-ai-is-now-inside-samsung-tvs-and-monitors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 22:02:28](https://news.ycombinator.com/item?id=45057561) - [Rupert&apos;s Property](https://johncarlosbaez.wordpress.com/2025/08/28/a-polyhedron-without-ruperts-property/)
* [2025-08-28, 22:00:00](https://slashdot.org/story/25/08/28/1815208/microsoft-refuses-to-divulge-data-flows-to-police-scotland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Refuses To Divulge Data Flows To Police Scotland](https://slashdot.org/story/25/08/28/1815208/microsoft-refuses-to-divulge-data-flows-to-police-scotland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 21:57:40](https://news.ycombinator.com/item?id=45057513) - [An eyecare foundation model for clinical assistance](https://www.nature.com/articles/s41591-025-03900-7)
* [2025-08-28, 21:44:47](https://news.ycombinator.com/item?id=45057404) - [The Space Shuttle Columbia disaster and the over-reliance on PowerPoint (2019)](https://mcdreeamiemusings.com/blog/2019/4/13/gsux1h6bnt8lqjd7w2t2mtvfg81uhx)
* [2025-08-28, 21:39:18](https://news.ycombinator.com/item?id=45057346) - [Sometimes CPU cores are odd](https://anubis.techaro.lol/blog/2025/cpu-core-odd/)
* [2025-08-28, 21:36:41](https://lobste.rs/s/ikj4ff/flat_monthly_subscription_open_source) - [A flat monthly subscription to open-source LLMs](https://synthetic.new/newsletter/entries/subscriptions)
* [2025-08-28, 21:36:36](https://news.ycombinator.com/item?id=45057322) - [Expert: LSP for Elixir](https://github.com/elixir-lang/expert)
* [2025-08-28, 21:22:00](https://tech.slashdot.org/story/25/08/28/1816210/imgurs-community-is-in-full-revolt-against-its-owner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Imgur&apos;s Community Is In Full Revolt Against Its Owner](https://tech.slashdot.org/story/25/08/28/1816210/imgurs-community-is-in-full-revolt-against-its-owner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 21:04:36](https://news.ycombinator.com/item?id=45057020) - [Fuck up my site – Turn any website into beautiful chaos](https://www.fuckupmysite.com/?url=https%3A%2F%2Fnews.ycombinator.com&amp;torchCursor=true&amp;comicSans=true&amp;fakeCursors=true&amp;peskyFly=true)
* [2025-08-28, 20:49:34](https://news.ycombinator.com/item?id=45056878) - [You no longer need JavaScript: an overview of what makes modern CSS so awesome](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 20:46:22](https://lobste.rs/s/xx7dbi/you_no_longer_need_javascript_overview) - [You no longer need JavaScript: an overview of what makes modern CSS so awesome](https://lyra.horse/blog/2025/08/you-dont-need-js/)
* [2025-08-28, 20:41:00](https://slashdot.org/story/25/08/28/186258/japanese-town-proposes-two-hour-daily-limit-on-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Town Proposes Two-Hour Daily Limit on Smartphones](https://slashdot.org/story/25/08/28/186258/japanese-town-proposes-two-hour-daily-limit-on-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 20:02:00](https://yro.slashdot.org/story/25/08/28/182244/us-to-publish-economic-data-on-blockchain-commerce-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Publish Economic Data On Blockchain, Commerce Chief Says](https://yro.slashdot.org/story/25/08/28/182244/us-to-publish-economic-data-on-blockchain-commerce-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 19:44:36](https://lobste.rs/s/u9kpmw/debian_13_my_list_exciting_new_features) - [Debian 13: My list of exciting new features](https://samueloph.dev/blog/debian-13-my-list-of-exciting-new-things/)
* [2025-08-28, 19:38:20](https://news.ycombinator.com/item?id=45056177) - [My startup banking story (2023)](https://mitchellh.com/writing/my-startup-banking-story)
* [2025-08-28, 19:20:00](https://it.slashdot.org/story/25/08/28/1758241/transunion-says-hackers-stole-44-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TransUnion Says Hackers Stole 4.4 Million Customers&apos; Personal Information](https://it.slashdot.org/story/25/08/28/1758241/transunion-says-hackers-stole-44-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 18:52:33](https://lobste.rs/s/q2lbzh/newton_data_storage) - [Newton Data Storage](http://www.canicula.com/newton/prog/soups.htm)
* [2025-08-28, 18:52:00](https://news.ycombinator.com/item?id=45055641) - [Some thoughts on LLMs and software development](https://martinfowler.com/articles/202508-ai-thoughts.html)
* [2025-08-28, 18:41:00](https://yro.slashdot.org/story/25/08/28/1643241/anthropic-will-start-training-its-ai-models-on-chat-transcripts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Will Start Training Its AI Models on Chat Transcripts](https://yro.slashdot.org/story/25/08/28/1643241/anthropic-will-start-training-its-ai-models-on-chat-transcripts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 18:35:46](https://news.ycombinator.com/item?id=45055452) - [Web Bot Auth](https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/)
* [2025-08-28, 18:34:29](https://news.ycombinator.com/item?id=45055439) - [Building your own CLI coding agent with Pydantic-AI](https://martinfowler.com/articles/build-own-coding-agent.html)
* [2025-08-28, 18:17:55](https://lobste.rs/s/cv6v51/writing_mac_ios_apps_shouldn_t_be_so) - [Writing Mac and iOS Apps Shouldn’t Be So Difficult](https://inessential.com/2025/08/28/easy-app-writing.html)
* [2025-08-28, 18:13:13](https://lobste.rs/s/bnc3ue/making_minecraft_spherical) - [Making Minecraft Spherical](https://www.bowerbyte.com/posts/blocky-planet/)
* [2025-08-28, 18:01:00](https://science.slashdot.org/story/25/08/28/1316211/humans-inhale-as-much-as-68000-microplastic-particles-daily-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humans Inhale as Much as 68,000 Microplastic Particles Daily, Study Finds](https://science.slashdot.org/story/25/08/28/1316211/humans-inhale-as-much-as-68000-microplastic-particles-daily-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 17:25:33](https://lobste.rs/s/8cwfyx/block_ads_trackers) - [Block ads and trackers](https://lichess.org/ads)
* [2025-08-28, 17:22:54](https://news.ycombinator.com/item?id=45054703) - [Uncertain&lt;T&gt;](https://nshipster.com/uncertainty/)
* [2025-08-28, 17:01:25](https://lobste.rs/s/6gla0a/tic_tac_toe_meets_lean_4) - [Tic-tac-toe meets Lean 4](https://ochagavia.nl/blog/tic-tac-toe-meets-lean-4/)
* [2025-08-28, 16:43:05](https://news.ycombinator.com/item?id=45054260) - [Ask HN: The government of my country blocked VPN access. What should I use?](https://news.ycombinator.com/item?id=45054260)
* [2025-08-28, 16:22:02](https://news.ycombinator.com/item?id=45054040) - [Launch HN: Dedalus Labs (YC S25) – Vercel for Agents](https://news.ycombinator.com/item?id=45054040)
* [2025-08-28, 15:35:03](https://lobste.rs/s/wh0edi/koka_programming_language) - [The Koka programming language](https://lwn.net/Articles/1033050/)
* [2025-08-28, 15:30:29](https://lobste.rs/s/1b8ize/optimising_for_maintainability_gleam) - [Optimising for maintainability - Gleam in production at Strand](https://gleam.run/case-studies/strand/)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 14:13:44](https://news.ycombinator.com/item?id=45052423) - [AI adoption linked to 13% decline in jobs for young U.S. workers: study](https://www.cnbc.com/2025/08/28/generative-ai-reshapes-us-job-market-stanford-study-shows-entry-level-young-workers.html)
* [2025-08-28, 14:12:47](https://lobste.rs/s/ib1oea/i_ll_only_buy_devices_with_grapheneos) - [I&apos;ll only buy devices with GrapheneOS](https://www.jonashietala.se/blog/2025/08/28/ill_only_buy_devices_with_grapheneos/)
* [2025-08-28, 13:37:12](https://lobste.rs/s/ib7eky/sometimes_cpu_cores_are_odd) - [Sometimes CPU cores are odd](https://anubis.techaro.lol/blog/2025/cpu-core-odd)
* [2025-08-28, 12:37:01](https://lobste.rs/s/miidtt/rupert_s_property_cut_hole_polyhedron_big) - [Rupert’s property: cut a hole in a polyhedron big enough for an identical copy to slide through](https://johncarlosbaez.wordpress.com/2025/08/28/a-polyhedron-without-ruperts-property/)
* [2025-08-28, 12:32:36](https://lobste.rs/s/wrxf8l/group_borrowing_zero_cost_memory_safety) - [Group Borrowing: Zero-Cost Memory Safety with Fewer Restrictions](https://verdagon.dev/blog/group-borrowing)
* [2025-08-28, 12:19:10](https://lobste.rs/s/luvy7m/guessing_game_haskell_style) - [Guessing game: Haskell style](https://entropicthoughts.com/guessing-game-haskell-style)
* [2025-08-28, 12:13:29](https://lobste.rs/s/hfp00w/gmp_damages_amd_zen_5_cpus) - [GMP damages AMD Zen 5 CPUs](https://gmplib.org/gmp-zen5)
* [2025-08-28, 11:12:18](https://lobste.rs/s/rd5gpm/are_people_s_bosses_really_making_them_use) - [Are people’s bosses really making them use AI tools?](https://piccalil.li/blog/are-peoples-bosses-really-making-them-use-ai/)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 08:25:11](https://lobste.rs/s/vb9bex/printing_labels_via_ssh_with_raspberry_pi) - [Printing labels via SSH with Raspberry Pi Zero and Nix](https://nmattia.com/posts/2025-08-28-label-printer-rpi-nix/)
* [2025-08-28, 06:09:54](https://lobste.rs/s/dgpbar/open_source_is_one_person) - [Open Source is one person](https://opensourcesecurity.io/2025/08-oss-one-person/)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 08:39:32](https://news.ycombinator.com/item?id=45036944) - [Show HN: Vectorless RAG](https://github.com/VectifyAI/PageIndex/blob/main/cookbook/pageindex_RAG_simple.ipynb)
* [2025-08-27, 07:57:01](https://news.ycombinator.com/item?id=45036708) - [Ask HN: What to learn for math for modeling?](https://news.ycombinator.com/item?id=45036708)
* [2025-08-27, 07:55:43](https://news.ycombinator.com/item?id=45036704) - [Thrashing](https://exple.tive.org/blarg/2025/08/26/thrashing/)
* [2025-08-27, 07:41:37](https://news.ycombinator.com/item?id=45036603) - [Show HN: Envoy – Command Logger](https://github.com/heyyviv/envoy)
* [2025-08-27, 05:10:53](https://news.ycombinator.com/item?id=45035684) - [AI coding made me faster, but I can&apos;t code to music anymore](https://www.praf.me/ai-coding)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 14:30:50](https://news.ycombinator.com/item?id=45027072) - [In Search of AI Psychosis](https://www.astralcodexten.com/p/in-search-of-ai-psychosis)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 15:03:57](https://news.ycombinator.com/item?id=45014656) - [TuneD is a system tuning service for Linux](https://tuned-project.org/)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 09:48:53](https://news.ycombinator.com/item?id=45012080) - [Make any site multiplayer in a few lines. Serverless WebRTC matchmaking](https://oxism.com/trystero/)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
