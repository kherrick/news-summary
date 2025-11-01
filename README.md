# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology

* [Claude Code Can Debug Low-level Cryptography](https://words.filippo.io/claude-debugging/) ([comments](https://lobste.rs/s/cg6q4y/claude_code_can_debug_low_level))

* [Text rendering and effects using GPU-computed distances](https://blog.pkh.me/p/47-text-rendering-and-effects-using-gpu-computed-distances.html) ([comments](https://lobste.rs/s/ezqbmq/text_rendering_effects_using_gpu))

* [CharlotteOS – An Experimental Modern Operating System](https://github.com/charlotte-os/Catten) ([comments](https://news.ycombinator.com/item?id=45781397))

* [GHC now runs in the browser](https://discourse.haskell.org/t/ghc-now-runs-in-your-browser/13169) ([comments](https://news.ycombinator.com/item?id=45782981))

* [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss))

## Society and Ethics

* [Visible from space, Sudan's bloodied sands expose a massacre of thousands](https://www.telegraph.co.uk/world-news/2025/10/28/sudan-bloodied-sands-massacre-thousands/) ([comments](https://news.ycombinator.com/item?id=45783699))

* [OpenAI Moves to Complete Potentially the Largest Theft in Human History](https://thezvi.substack.com/p/openai-moves-to-complete-potentially) ([comments](https://news.ycombinator.com/item?id=45783470))

* [Chat Control proposal fails again after public opposition](https://andreafortuna.org/2025/11/01/chat-control-proposal-fails-again-after-massive-public-opposition/) ([comments](https://news.ycombinator.com/item?id=45783114))

* [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=45780228))

* [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss))

## Environment and Health

* [Studies increasingly find links between air pollutants and dementia](https://www.nytimes.com/2025/11/01/health/alzheimers-dementia-air-pollution.html) ([comments](https://news.ycombinator.com/item?id=45783206))

* [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss))

* [Data centers contribute to high prices as energy bills electrify local politics](https://www.wsj.com/economy/consumers/surging-power-costs-are-putting-the-squeeze-on-customers-f8b2c04b) ([comments](https://news.ycombinator.com/item?id=45782865))

## Scientific Discoveries

* [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss))

* [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss))

* [ESA Astronauts Take to Helicopters for Moon Landing Training](https://soylentnews.org/article.pl?sid=25/10/26/122218&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/26/122218&amp;from=rss))

## Programming and Development

* [How We Found 7 TiB of Memory Just Sitting Around](https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around) ([comments](https://lobste.rs/s/cjaysk/how_we_found_7_tib_memory_just_sitting))

* [SQLite concurrency and why you should care about it](https://jellyfin.org/posts/SQLite-locking/) ([comments](https://news.ycombinator.com/item?id=45781298))

* [Myths Programmers Believe about CPU Caches (2018)](https://software.rajivprab.com/2018/04/29/myths-programmers-believe-about-cpu-caches/) ([comments](https://news.ycombinator.com/item?id=45767178))

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

* [2025-11-01, 18:40:00](https://lobste.rs/s/cg6q4y/claude_code_can_debug_low_level) - [Claude Code Can Debug Low-level Cryptography](https://words.filippo.io/claude-debugging/)
* [2025-11-01, 17:55:13](https://lobste.rs/s/ezqbmq/text_rendering_effects_using_gpu) - [Text rendering and effects using GPU-computed distances](https://blog.pkh.me/p/47-text-rendering-and-effects-using-gpu-computed-distances.html)
* [2025-11-01, 17:50:38](https://news.ycombinator.com/item?id=45783699) - [Visible from space, Sudan&apos;s bloodied sands expose a massacre of thousands](https://www.telegraph.co.uk/world-news/2025/10/28/sudan-bloodied-sands-massacre-thousands/)
* [2025-11-01, 17:45:18](https://news.ycombinator.com/item?id=45783640) - [Show HN: Why write code if the LLM can just do the thing? (web app experiment)](https://github.com/samrolken/nokode)
* [2025-11-01, 17:25:12](https://news.ycombinator.com/item?id=45783470) - [OpenAI Moves to Complete Potentially the Largest Theft in Human History](https://thezvi.substack.com/p/openai-moves-to-complete-potentially)
* [2025-11-01, 17:24:57](https://news.ycombinator.com/item?id=45783465) - [The giant basket case countries](https://www.noahpinion.blog/p/the-giant-basket-case-countries)
* [2025-11-01, 17:21:08](https://news.ycombinator.com/item?id=45783440) - [How I Learned to Stop Worrying and Love My Shitty Life](https://www.thedriftmag.com/how-i-learned-to-stop-worrying-and-love-my-shitty-life/)
* [2025-11-01, 17:13:04](https://news.ycombinator.com/item?id=45783376) - [Ask HN: Where to Begin with \&quot;Modern\&quot; Emacs?](https://news.ycombinator.com/item?id=45783376)
* [2025-11-01, 16:54:45](https://news.ycombinator.com/item?id=45783206) - [Studies increasingly find links between air pollutants and dementia](https://www.nytimes.com/2025/11/01/health/alzheimers-dementia-air-pollution.html)
* [2025-11-01, 16:42:57](https://news.ycombinator.com/item?id=45783114) - [Chat Control proposal fails again after public opposition](https://andreafortuna.org/2025/11/01/chat-control-proposal-fails-again-after-massive-public-opposition/)
* [2025-11-01, 16:29:23](https://news.ycombinator.com/item?id=45782981) - [GHC now runs in the browser](https://discourse.haskell.org/t/ghc-now-runs-in-your-browser/13169)
* [2025-11-01, 16:16:53](https://news.ycombinator.com/item?id=45782865) - [Data centers contribute to high prices as energy bills electrify local politics](https://www.wsj.com/economy/consumers/surging-power-costs-are-putting-the-squeeze-on-customers-f8b2c04b)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 15:21:00](https://news.ycombinator.com/item?id=45782348) - [Open-Source Ada: From Gateware to Application](https://blog.adacore.com/open-source-ada-from-gateware-to-application)
* [2025-11-01, 15:19:13](https://lobste.rs/s/oro1e0/open_source_ada_from_gateware) - [Open-Source Ada: From Gateware to Application](https://blog.adacore.com/open-source-ada-from-gateware-to-application)
* [2025-11-01, 14:58:05](https://news.ycombinator.com/item?id=45782136) - [Updated practice for review articles and position papers in ArXiv CS category](https://blog.arxiv.org/2025/10/31/attention-authors-updated-practice-for-review-articles-and-position-papers-in-arxiv-cs-category/)
* [2025-11-01, 13:36:39](https://lobste.rs/s/lt1ahr/deep_dive_into_deeply_recursive_go) - [A deep dive into deeply recursive Go](https://mattermost.com/blog/a-deep-dive-into-deeply-recursive-go/)
* [2025-11-01, 13:12:47](https://news.ycombinator.com/item?id=45781397) - [CharlotteOS – An Experimental Modern Operating System](https://github.com/charlotte-os/Catten)
* [2025-11-01, 12:59:03](https://news.ycombinator.com/item?id=45781298) - [SQLite concurrency and why you should care about it](https://jellyfin.org/posts/SQLite-locking/)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 09:07:44](https://lobste.rs/s/xj4ncv/hard_rust_requirements_from_may_onward) - [Hard Rust requirements from May onward](https://lists.debian.org/debian-devel/2025/10/msg00285.html)
* [2025-11-01, 09:05:00](https://lobste.rs/s/qxmiqs/on_purported_benefits_effect_systems) - [On the purported benefits of effect systems](https://typesanitizer.com/blog/effects-convo.html)
* [2025-11-01, 08:58:54](https://news.ycombinator.com/item?id=45780228) - [You can&apos;t refuse to be scanned by ICE&apos;s facial recognition app, DHS document say](https://www.404media.co/you-cant-refuse-to-be-scanned-by-ices-facial-recognition-app-dhs-document-says/)
* [2025-11-01, 07:31:40](https://news.ycombinator.com/item?id=45779860) - [Hard Rust requirements from May onward](https://lists.debian.org/debian-devel/2025/10/msg00285.html)
* [2025-11-01, 07:24:22](https://lobste.rs/s/liomcb/computer_says_no_error_reporting_for_ltl) - [Computer Says No: Error Reporting for LTL](https://wickstrom.tech/2025-11-01-error-reporting-linear-temporal-logic.html)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 04:58:30](https://lobste.rs/s/wnavxh/your_url_is_your_state) - [Your URL Is Your State](https://alfy.blog/2025/10/31/your-url-is-your-state.html)
* [2025-11-01, 04:56:34](https://lobste.rs/s/r3ckga/intent_deprecate_remove_deprecate) - [Intent to Deprecate and Remove: Deprecate and remove XSLT](https://groups.google.com/a/chromium.org/g/blink-dev/c/CxL4gYZeSJA/m/yNs4EsD5AQAJ)
* [2025-11-01, 04:12:39](https://lobste.rs/s/s6xdrb/rethinking_data_discovery_for_libraries) - [Rethinking Data Discovery for Libraries and Digital Humanities](https://lil.law.harvard.edu/blog/2025/10/24/rethinking-data-discovery-for-libraries-and-digital-humanities/)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
* [2025-11-01, 00:08:22](https://lobste.rs/s/cjaysk/how_we_found_7_tib_memory_just_sitting) - [How We Found 7 TiB of Memory Just Sitting Around](https://render.com/blog/how-we-found-7-tib-of-memory-just-sitting-around)
* [2025-10-31, 23:23:59](https://news.ycombinator.com/item?id=45777810) - [Show HN: Strange Attractors](https://blog.shashanktomar.com/posts/strange-attractors)
* [2025-10-31, 23:03:18](https://news.ycombinator.com/item?id=45777682) - [S.A.R.C.A.S.M: Slightly Annoying Rubik&apos;s Cube Automatic Solving Machine](https://github.com/vindar/SARCASM)
* [2025-10-31, 20:57:00](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss) - [Tor Browser 15.0 Anonymous Web Browser Is Out Based on Firefox 140 ESR Series](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss)
* [2025-10-31, 20:20:42](https://news.ycombinator.com/item?id=45776269) - [A theoretical way to circumvent Android developer verification](https://enaix.github.io/2025/10/30/developer-verification.html)
* [2025-10-31, 20:20:39](https://lobste.rs/s/fzro7f/futurelock) - [Futurelock](https://rfd.shared.oxide.computer/rfd/0609)
* [2025-10-31, 20:10:07](https://lobste.rs/s/2i5jhx/ai_scrapers_request_commented_scripts) - [AI scrapers request commented scripts](https://cryptography.dog/blog/AI-scrapers-request-commented-scripts/)
* [2025-10-31, 18:35:54](https://lobste.rs/s/sknsrg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/sknsrg/what_are_you_doing_this_weekend)
* [2025-10-31, 18:08:36](https://lobste.rs/s/zjkrqv/project_goals_for_2025h2) - [Project goals for 2025H2](https://blog.rust-lang.org/2025/10/28/project-goals-2025h2/)
* [2025-10-31, 17:42:55](https://news.ycombinator.com/item?id=45774640) - [Addiction Markets](https://www.thebignewsletter.com/p/addiction-markets-abolish-corporate)
* [2025-10-31, 17:39:59](https://lobste.rs/s/gzxxng/just_use_button) - [Just use a button](https://gomakethings.com/just-use-a-button/)
* [2025-10-31, 17:16:26](https://lobste.rs/s/ytgiec/ubuntu_introduces_architecture) - [Ubuntu introduces architecture variants](https://lwn.net/Articles/1044383/)
* [2025-10-31, 16:49:26](https://news.ycombinator.com/item?id=45774086) - [Futurelock: A subtle risk in async Rust](https://rfd.shared.oxide.computer/rfd/0609)
* [2025-10-31, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss) - [Red Hat and Other Distros to Provide Easy Access to NVIDIA CUDA Tools](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss)
* [2025-10-31, 14:08:51](https://lobste.rs/s/vcxqwd/rotating_workforce_scheduling_minizinc) - [Rotating Workforce Scheduling in MiniZinc](https://zayenz.se/blog/post/rotating-workforce-scheduling/)
* [2025-10-31, 13:43:14](https://lobste.rs/s/pyzk5t/ghosts_compilation) - [Ghosts in the Compilation](https://predr.ag/blog/ghosts-in-the-compilation/)
* [2025-10-31, 11:51:00](https://lobste.rs/s/6c86lq/perfetto_swiss_army_knife_for_linux) - [Perfetto: Swiss Army Knife for Linux Client Tracing](https://lalitm.com/perfetto-swiss-army-knife/)
* [2025-10-31, 11:25:00](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) - [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss)
* [2025-10-31, 10:14:12](https://lobste.rs/s/g3qejh/my_impressions_macbook_pro_m4) - [My impressions of the MacBook Pro M4](https://michael.stapelberg.ch/posts/2025-10-31-macbook-pro-m4-impressions/)
* [2025-10-31, 08:34:37](https://lobste.rs/s/lr21qf/challenging_fastest_oss_workflow_engine) - [Challenging the Fastest OSS Workflow Engine](https://obeli.sk/blog/challenging-fastest-workflow-engine/)
* [2025-10-31, 06:36:00](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) - [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss)
* [2025-10-31, 01:42:00](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss) - [US EV Sales Will Collapse 60% In October, J.D. Power Forecasts](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss)
* [2025-10-31, 01:13:33](https://lobste.rs/s/dnilu3/roadmap_for_improving_swift_type_checker) - [Roadmap for improving the Swift type checker](https://forums.swift.org/t/roadmap-for-improving-the-type-checker/82952)
* [2025-10-31, 00:46:56](https://news.ycombinator.com/item?id=45767178) - [Myths Programmers Believe about CPU Caches (2018)](https://software.rajivprab.com/2018/04/29/myths-programmers-believe-about-cpu-caches/)
* [2025-10-31, 00:00:40](https://lobste.rs/s/q2fuc0/wastrel_profligate_implementation) - [wastrel, a profligate implementation of webassembly](https://wingolog.org/archives/2025/10/30/wastrel-a-profligate-implementation-of-webassembly)
* [2025-10-30, 23:12:10](https://news.ycombinator.com/item?id=45766501) - [Leaker reveals which Pixels are vulnerable to Cellebrite phone hacking](https://arstechnica.com/gadgets/2025/10/leaker-reveals-which-pixels-are-vulnerable-to-cellebrite-phone-hacking/)
* [2025-10-30, 21:34:11](https://lobste.rs/s/xpivuc/ghc_now_runs_your_browser) - [GHC now runs in your browser](https://discourse.haskell.org/t/ghc-now-runs-in-your-browser/13169)
* [2025-10-30, 21:00:00](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss) - [AI-Powered Search Engines Rely on “Less Popular” Sources, Researchers Find](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss)
* [2025-10-30, 16:12:00](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss) - [Fedora Linux 43 Officially Released, Now Available for Download](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss)
* [2025-10-30, 14:15:00](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss) - [Trial of Journal Flagging - Analysis and Actions](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss)
* [2025-10-30, 11:29:00](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss) - [Westinghouse is Claiming a Nuclear Deal Would See $80B of New Reactors](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss)
* [2025-10-30, 10:35:00](https://news.ycombinator.com/item?id=45758392) - [Introducing architecture variants](https://discourse.ubuntu.com/t/introducing-architecture-variants-amd64v3-now-available-in-ubuntu-25-10/71312)
* [2025-10-30, 06:45:00](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss) - [Senators Move to Keep Big Tech&apos;s Creepy Companion Bots Away From Kids](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss)
* [2025-10-30, 02:02:00](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss) - [Windows 11 Adds Dark Mode Dialogs for Run and Folder Options](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss)
* [2025-10-29, 21:19:00](https://soylentnews.org/article.pl?sid=25/10/28/2219246&amp;from=rss) - [25 years [...]: ISS in Real Time captures quarter-century on space station](https://soylentnews.org/article.pl?sid=25/10/28/2219246&amp;from=rss)
* [2025-10-29, 16:32:00](https://soylentnews.org/article.pl?sid=25/10/28/2218214&amp;from=rss) - [ASML Launches Revolutionary Lithography Scanner for Advanced 3D Chip Packaging](https://soylentnews.org/article.pl?sid=25/10/28/2218214&amp;from=rss)
* [2025-10-29, 11:34:00](https://soylentnews.org/article.pl?sid=25/10/28/2214245&amp;from=rss) - [An Autonomous Car for Consumers? Lucid Says It&apos;s Happening.](https://soylentnews.org/article.pl?sid=25/10/28/2214245&amp;from=rss)
* [2025-10-29, 06:52:00](https://soylentnews.org/article.pl?sid=25/10/28/1243217&amp;from=rss) - [Australia Denies Exception for AI Data Hoovering in Copyright Review](https://soylentnews.org/article.pl?sid=25/10/28/1243217&amp;from=rss)
* [2025-10-29, 02:03:00](https://soylentnews.org/article.pl?sid=25/10/28/1234216&amp;from=rss) - [OpenAI Aims for Deep MacOS Integration With Acquisition of Software Applications Incorporated](https://soylentnews.org/article.pl?sid=25/10/28/1234216&amp;from=rss)
* [2025-10-28, 21:15:00](https://soylentnews.org/article.pl?sid=25/10/28/1214217&amp;from=rss) - [Nvidia&apos;s US Chip Production Remains Constrained by Packaging](https://soylentnews.org/article.pl?sid=25/10/28/1214217&amp;from=rss)
* [2025-10-28, 16:28:00](https://soylentnews.org/article.pl?sid=25/10/28/121253&amp;from=rss) - [China&apos;s Salt Typhoon Exploited SharePoint to Hit Govts](https://soylentnews.org/article.pl?sid=25/10/28/121253&amp;from=rss)
* [2025-10-28, 13:32:18](https://news.ycombinator.com/item?id=45732677) - [Frank Gasking on preserving «lost» games](https://spillhistorie.no/2025/10/24/frank-gasking-on-preserving-lost-games/)
* [2025-10-28, 11:45:00](https://soylentnews.org/article.pl?sid=25/10/26/1320231&amp;from=rss) - [Similarities Between How Humans and LLMs Represent Language](https://soylentnews.org/article.pl?sid=25/10/26/1320231&amp;from=rss)
* [2025-10-28, 10:53:21](https://news.ycombinator.com/item?id=45731256) - [The Impossible Optimization, and the Metaprogramming to Achieve It](https://verdagon.dev/blog/impossible-optimization)
* [2025-10-28, 09:56:37](https://news.ycombinator.com/item?id=45730940) - [Austria: Pylons as sculpture for public acceptance of expanding electrification](https://www.goodgoodgood.co/articles/austrian-power-giants-power-line-animals)
* [2025-10-28, 07:04:00](https://soylentnews.org/politics/article.pl?sid=25/10/26/134258&amp;from=rss) - [Trump Eyes Government Control of Quantum Computing Firms With Intel-Like Deals](https://soylentnews.org/politics/article.pl?sid=25/10/26/134258&amp;from=rss)
* [2025-10-28, 02:18:00](https://soylentnews.org/article.pl?sid=25/10/26/122218&amp;from=rss) - [ESA Astronauts Take to Helicopters for Moon Landing Training](https://soylentnews.org/article.pl?sid=25/10/26/122218&amp;from=rss)
