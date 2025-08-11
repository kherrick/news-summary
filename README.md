# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Source

* [How Python is Fighting Open Source's 'Phantom' Dependencies Problem](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration of how the Python ecosystem is addressing challenges posed by 'phantom dependencies' in the open source domain. [Comments](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [ChaCha12-BLAKE3: Secure, Simple and Fast authenticated and committing encryption](https://kerkour.com/chacha12-blake3) - A detailed introduction to ChaCha12-BLAKE3, a new encryption approach described as secure, simple, and fast. [Comments](https://lobste.rs/s/picrzd/chacha12_blake3_secure_simple_fast)

## Cybersecurity

* [$1M Stolen in 'Industrial-Scale Crypto Theft' Using AI-Generated Code](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on how AI-generated code was leveraged for stealing cryptocurrencies on an industrial scale. [Comments](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Abusing Entra OAuth for Fun and Access to Internal Microsoft Applications](https://research.eye.security/consent-and-compromise/) - Researchers detail how Entra OAuth exploits led to compromises in Microsoft's internal apps. [Comments](https://lobste.rs/s/kscd3m/abusing_entra_oauth_for_fun_access)

## AI and Machine Learning

* [Optimizing My Sleep Around Claude Usage Limits](https://mattwie.se/no-sleep-till-agi) - A fascinating tale of balancing personal habits with artificial intelligence usage limits. [Comments](https://news.ycombinator.com/item?id=44860015)

## Science and Innovation

* [Autonomous AI-Guided Black Hawk Helicopter Tested to Fight Wildfires](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new frontier in wildfire management using AI-guided helicopter technology. [Comments](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Astrophysicist Proposes Paperclip-Sized Spacecraft Could Travel at Lightspeed to a Black Hole](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An astrophysicist's intriguing concept of tiny lightspeed spacecraft reaching black holes. [Comments](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software Engineering and Tools

* [Setting up a CI server for Forgejo](https://robey.lag.net/2025/08/10/forgejo-ci.html) - A guide on establishing continuous integration (CI) for Forgejo, an open-source Git service. [Comments](https://lobste.rs/s/zzu7bs/setting_up_ci_server_for_forgejo)

* [Show HN: Bolt – A super-fast, statically-typed scripting language written in C](https://github.com/Beariish/bolt) - Introduction to Bolt, a blazing-fast scripting language created with simplicity and speed in mind. [Comments](https://news.ycombinator.com/item?id=44856935)

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

* [2025-08-11, 02:07:00](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Python is Fighting Open Source&apos;s &apos;Phantom&apos; Dependencies Problem](https://developers.slashdot.org/story/25/08/11/025214/how-python-is-fighting-open-sources-phantom-dependencies-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 01:55:26](https://news.ycombinator.com/item?id=44860139) - [Vanishing from Hyundai’s data network](http://techno-fandom.org/~hobbit/cars/ev/offnet.html)
* [2025-08-11, 01:39:51](https://lobste.rs/s/zzu7bs/setting_up_ci_server_for_forgejo) - [Setting up a CI server for Forgejo](https://robey.lag.net/2025/08/10/forgejo-ci.html)
* [2025-08-11, 01:37:33](https://lobste.rs/s/picrzd/chacha12_blake3_secure_simple_fast) - [ChaCha12-BLAKE3: Secure, Simple and Fast authenticated and committing encryption](https://kerkour.com/chacha12-blake3)
* [2025-08-11, 01:32:31](https://news.ycombinator.com/item?id=44860015) - [Optimizing My Sleep Around Claude Usage Limits](https://mattwie.se/no-sleep-till-agi)
* [2025-08-11, 01:16:33](https://lobste.rs/s/7s5obz/creating_longest_possible_ski_jump_games) - [Creating the longest possible Ski Jump in The Games: Winter Challenge](https://mrwint.github.io/winter/writeup/writeup2.html)
* [2025-08-11, 00:44:53](https://news.ycombinator.com/item?id=44859763) - [Show HN: Reactive: A React Book for the Reluctant (written by Claude)](https://github.com/cloudstreet-dev/React-is-Awful)
* [2025-08-11, 00:44:20](https://news.ycombinator.com/item?id=44859761) - [Show HN: A Sinclair ZX81 retro web assembler+simulator](https://news.ycombinator.com/item?id=44859761)
* [2025-08-11, 00:40:00](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [$1M Stolen in &apos;Industrial-Scale Crypto Theft&apos; Using AI-Generated Code](https://yro.slashdot.org/story/25/08/11/0037258/1m-stolen-in-industrial-scale-crypto-theft-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 00:31:03](https://lobste.rs/s/xvahem/tcp_client_self_connect_2013) - [TCP Client Self-Connect (2013)](https://sgros.blogspot.com/2013/08/tcp-client-self-connect.html)
* [2025-08-10, 23:59:12](https://lobste.rs/s/kscd3m/abusing_entra_oauth_for_fun_access) - [Abusing Entra OAuth for Fun and Access to Internal Microsoft Applications](https://research.eye.security/consent-and-compromise/)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 23:09:00](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autonomous AI-Guided Black Hawk Helicopter Tested to Fight Wildfires](https://science.slashdot.org/story/25/08/10/237219/autonomous-ai-guided-black-hawk-helicopter-tested-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 22:35:44](https://lobste.rs/s/q1hq70/compiling_lisp_lambda_lifting) - [Compiling a Lisp: Lambda lifting](https://bernsteinbear.com/blog/compiling-a-lisp-12/)
* [2025-08-10, 22:35:03](https://news.ycombinator.com/item?id=44858892) - [Compiling a Lisp: Lambda lifting](https://bernsteinbear.com/blog/compiling-a-lisp-12/)
* [2025-08-10, 21:25:00](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astrophysicist Proposes Paperclip-Sized Spacecraft Could Travel at Lightspeed to a Black Hole](https://science.slashdot.org/story/25/08/10/2124249/astrophysicist-proposes-paperclip-sized-spacecraft-could-travel-at-lightspeed-to-a-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 20:48:46](https://news.ycombinator.com/item?id=44858154) - [1910: The year the modern world lost its mind](https://www.derekthompson.org/p/1910-the-year-the-modern-world-lost)
* [2025-08-10, 20:30:34](https://news.ycombinator.com/item?id=44858067) - [One Million Screenshots](https://onemillionscreenshots.com/?q=random)
* [2025-08-10, 20:25:00](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Finds &apos;Dozens&apos; of Delusional Claims from AI Chats as Companies Scramble for a Fix](https://slashdot.org/story/25/08/10/2023212/wsj-finds-dozens-of-delusional-claims-from-ai-chats-as-companies-scramble-for-a-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 20:22:24](https://news.ycombinator.com/item?id=44858009) - [Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 18:48:00](https://hardware.slashdot.org/story/25/08/10/1845255/as-electric-bills-rise-evidence-mounts-that-us-data-centers-share-blame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Electric Bills Rise, Evidence Mounts That U.S. Data Centers Share Blame](https://hardware.slashdot.org/story/25/08/10/1845255/as-electric-bills-rise-evidence-mounts-that-us-data-centers-share-blame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 18:14:38](https://news.ycombinator.com/item?id=44857100) - [Conversations remotely detected from cell phone vibrations, researchers report](https://www.psu.edu/news/engineering/story/conversations-remotely-detected-cell-phone-vibrations-researchers-report)
* [2025-08-10, 17:53:09](https://news.ycombinator.com/item?id=44856935) - [Show HN: Bolt – A super-fast, statically-typed scripting language written in C](https://github.com/Beariish/bolt)
* [2025-08-10, 17:34:00](https://science.slashdot.org/story/25/08/10/1647247/meteorite-that-hit-home-is-older-than-earth-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meteorite That Hit Home Is Older Than Earth, Scientists Say](https://science.slashdot.org/story/25/08/10/1647247/meteorite-that-hit-home-is-older-than-earth-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 17:19:25](https://news.ycombinator.com/item?id=44856667) - [Type (YC W23) is hiring a founding engineer to build an AI-native doc editor](https://www.ycombinator.com/companies/type/jobs/1idOunL-founding-product-engineer)
* [2025-08-10, 16:50:34](https://news.ycombinator.com/item?id=44856426) - [Fight Chat Control](https://fightchatcontrol.eu/)
* [2025-08-10, 16:34:00](https://tech.slashdot.org/story/25/08/10/0314235/kde-calls-microsofts-copilot-key-dumb-will-let-you-remap-it-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Calls Microsoft&apos;s Copilot Key &apos;Dumb&apos;, Will Let You Remap It Soon](https://tech.slashdot.org/story/25/08/10/0314235/kde-calls-microsofts-copilot-key-dumb-will-let-you-remap-it-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 16:32:38](https://lobste.rs/s/t2e1a7/mcp_accidentally_universal_plugin) - [MCP: An (Accidentally) Universal Plugin System](https://worksonmymachine.ai/p/mcp-an-accidentally-universal-plugin)
* [2025-08-10, 16:04:05](https://news.ycombinator.com/item?id=44856101) - [Diffusion language models are super data learners](https://jinjieni.notion.site/Diffusion-Language-Models-are-Super-Data-Learners-239d8f03a866800ab196e49928c019ac)
* [2025-08-10, 15:34:00](https://hardware.slashdot.org/story/25/08/09/040219/a-huge-2-billion-solar--storage-project-in-california-powers-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Huge $2 Billion &apos;Solar + Storage&apos; Project in California Powers Up](https://hardware.slashdot.org/story/25/08/09/040219/a-huge-2-billion-solar--storage-project-in-california-powers-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 15:31:20](https://lobste.rs/s/nxeqtq/zig_s_lovely_syntax) - [Zig&apos;s Lovely Syntax](https://matklad.github.io/2025/08/09/zigs-lovely-syntax.html)
* [2025-08-10, 15:06:07](https://news.ycombinator.com/item?id=44855690) - [GPT-OSS vs. Qwen3 and a detailed look how things evolved since GPT-2](https://magazine.sebastianraschka.com/p/from-gpt-2-to-gpt-oss-analyzing-the)
* [2025-08-10, 14:56:53](https://lobste.rs/s/ensoxg/resurrecting_google_s_search_appliance) - [Resurrecting Google&apos;s Search Appliance](https://www.youtube.com/watch?v=bjrmH7hVBOo)
* [2025-08-10, 14:34:00](https://developers.slashdot.org/story/25/08/10/0449256/rusts-annual-tech-report-trusted-publishing-for-packages-and-a-crust-interop-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust&apos;s Annual Tech Report: Trusted Publishing for Packages and a C++/Rust Interop Strategy](https://developers.slashdot.org/story/25/08/10/0449256/rusts-annual-tech-report-trusted-publishing-for-packages-and-a-crust-interop-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 14:23:17](https://lobste.rs/s/8mdoo2/ohyaml_wtf_yaml_quiz) - [ohyaml.wtf | YAML Quiz](https://www.ohyaml.wtf/)
* [2025-08-10, 14:15:43](https://lobste.rs/s/jrocec/speeding_up_javascript_ecosystem_semver) - [Speeding up the JavaScript ecosystem - Semver](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-12/)
* [2025-08-10, 13:44:05](https://news.ycombinator.com/item?id=44855157) - [Show HN: Engineering.fyi – Search across tech engineering blogs in one place](https://engineering.fyi/)
* [2025-08-10, 13:32:13](https://news.ycombinator.com/item?id=44855079) - [Try and](https://ygdp.yale.edu/phenomena/try-and)
* [2025-08-10, 13:15:33](https://news.ycombinator.com/item?id=44854989) - [Inside OS/2 (1987)](https://gitpi.us/article-archive/inside-os2/)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 12:25:20](https://lobste.rs/s/ygqryc/why_do_we_even_need_simd_instructions) - [Why do we even need SIMD instructions ?](https://lemire.me/blog/2025/08/09/why-do-we-even-need-simd-instructions/)
* [2025-08-10, 11:41:34](https://news.ycombinator.com/item?id=44854525) - [Booting 5000 Erlangs on Ampere One 192-core](https://underjord.io/booting-5000-erlangs-on-ampere-one.html)
* [2025-08-10, 11:34:00](https://yro.slashdot.org/story/25/08/10/0227259/microsoft-sued-over-plans-to-discontinue-windows-10-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Sued Over Plans to Discontinue Windows 10 Support](https://yro.slashdot.org/story/25/08/10/0227259/microsoft-sued-over-plans-to-discontinue-windows-10-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 11:29:32](https://lobste.rs/s/424inu/creating_high_quality_electronics) - [Creating high quality electronics schematics](https://blog.poly.nomial.co.uk/2025-08-10-creating-high-quality-electronics-schematics.html)
* [2025-08-10, 10:10:54](https://news.ycombinator.com/item?id=44854120) - [Open Lovable](https://github.com/mendableai/open-lovable)
* [2025-08-10, 10:08:42](https://lobste.rs/s/1z3oiy/elixir_misconceptions_1_don_t_let_it_crash) - [Elixir Misconceptions #1 - Don&apos;t \&quot;let it crash\&quot; but \&quot;let it heal\&quot;](https://www.zachdaniel.dev/p/elixir-misconceptions-1)
* [2025-08-10, 09:50:25](https://news.ycombinator.com/item?id=44854035) - [Writing simple tab-completions for Bash and Zsh](https://mill-build.org/blog/14-bash-zsh-completion.html)
* [2025-08-10, 09:45:43](https://lobste.rs/s/avxwbl/introducing_rr_chaos_mode_2016) - [Introducing rr Chaos Mode (2016)](https://robert.ocallahan.org/2016/02/introducing-rr-chaos-mode.html)
* [2025-08-10, 08:43:48](https://lobste.rs/s/ray4zn/lobsters_client_for_emacs) - [Lobsters client for Emacs](https://github.com/tanrax/lobsters.el)
* [2025-08-10, 08:40:03](https://lobste.rs/s/jy5b80/improving_geographical_resilience_for) - [Improving Geographical Resilience For Distributed Open Source Teams with FREON](https://soatok.blog/2025/08/09/improving-geographical-resilience-for-distributed-open-source-teams-with-freon/)
* [2025-08-10, 08:32:31](https://lobste.rs/s/cghulj/onion_stack_language_compiled_lua) - [onion: Stack language compiled to lua](https://github.com/yumaikas/onion)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 07:34:00](https://tech.slashdot.org/story/25/08/10/0626249/aol-finally-discontinues-its-dial-up-internet-access---after-34-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AOL Finally Discontinues Its Dial-Up Internet Access - After 34 Years](https://tech.slashdot.org/story/25/08/10/0626249/aol-finally-discontinues-its-dial-up-internet-access---after-34-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 06:49:49](https://lobste.rs/s/okvhei/janetdocs) - [JanetDocs](https://janetdocs.org/)
* [2025-08-10, 05:56:14](https://news.ycombinator.com/item?id=44853064) - [Abogen – Generate audiobooks from EPUBs, PDFs and text](https://github.com/denizsafak/abogen)
* [2025-08-10, 05:13:28](https://lobste.rs/s/fcwft7/all_on_omarchy_at_37signals) - [All-in on Omarchy at 37signals](https://world.hey.com/dhh/all-in-on-omarchy-at-37signals-68162450)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-10, 03:34:00](https://developers.slashdot.org/story/25/08/10/0110212/hour-of-code-announces-its-now-evolving-into-hour-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Hour of Code&apos; Announces It&apos;s Now Evolving Into &apos;Hour of AI&apos;](https://developers.slashdot.org/story/25/08/10/0110212/hour-of-code-announces-its-now-evolving-into-hour-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 01:34:00](https://science.slashdot.org/story/25/08/10/0038225/spacexs-crew-10-astronauts-return-to-earth-after-nearly-5-months-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Crew-10 Astronauts Return to Earth After Nearly 5 months in Space](https://science.slashdot.org/story/25/08/10/0038225/spacexs-crew-10-astronauts-return-to-earth-after-nearly-5-months-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-10, 00:39:33](https://lobste.rs/s/kqv0a7/first_time_i_was_almost_fired_from_apple) - [The First Time I Was Almost Fired From Apple](https://www.engineersneedart.com/blog/almostfired/almostfired.html)
* [2025-08-09, 23:05:39](https://lobste.rs/s/tvdgb4/gpts_feeling_left_behind) - [GPTs and feeling left behind](https://whynothugo.nl/journal/2025/08/06/gpts-and-feeling-left-behind/)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 22:45:00](https://linux.slashdot.org/story/25/08/09/2147224/linus-torvalds-rejects-risc-v-changes-for-linux-617-for-being-late-and-garbage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Rejects RISC-V Changes For Linux 6.17 For Being Late and &apos;Garbage&apos;](https://linux.slashdot.org/story/25/08/09/2147224/linus-torvalds-rejects-risc-v-changes-for-linux-617-for-being-late-and-garbage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-09, 22:27:37](https://news.ycombinator.com/item?id=44850913) - [How I code with AI on a budget/free](https://wuu73.org/blog/aiguide1.html)
* [2025-08-09, 19:27:19](https://lobste.rs/s/a7ckk1/debian_13_trixie_released) - [Debian 13 \&quot;trixie\&quot; released](https://debian.org/News/2025/20250809)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 09:22:56](https://lobste.rs/s/7laqgd/engineer_s_perspective_on_hiring) - [an engineer&apos;s perspective on hiring](https://jyn.dev/an-engineers-perspective-on-hiring)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-09, 02:44:20](https://lobste.rs/s/5qq2k2/why_is_github_ui_getting_so_much_slower) - [Why is GitHub UI getting so much slower?](https://yoyo-code.com/why-is-github-ui-getting-so-much-slower/)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 05:02:23](https://news.ycombinator.com/item?id=44833607) - [The enduring puzzle of static electricity](https://pubs.aip.org/physicstoday/article/78/8/54/3355922/The-enduring-puzzle-of-static-electricityEven)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-08, 04:34:54](https://news.ycombinator.com/item?id=44833448) - [Digital Foundry leaves IGN, now independent [video]](https://www.youtube.com/watch?v=tl7bIJ2yu4I)
* [2025-08-08, 00:29:19](https://news.ycombinator.com/item?id=44832060) - [Reflections on Soviet Amateur Photography](https://www.publicbooks.org/strangers-in-the-family-album-reflections-on-soviet-amateur-photography/)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 15:20:52](https://news.ycombinator.com/item?id=44825658) - [Squashing my dumb bugs and why I log build IDs](https://rachelbythebay.com/w/2025/08/03/scope/)
* [2025-08-07, 14:57:34](https://news.ycombinator.com/item?id=44825347) - [Creating the Longest Possible Ski Jump in “The Games: Winter Challenge”](https://mrwint.github.io/winter/writeup/writeup2.html)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 11:49:17](https://news.ycombinator.com/item?id=44823272) - [PHP compile time generics: yay or nay?](https://thephp.foundation/blog/2025/08/05/compile-generics/)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 08:04:04](https://news.ycombinator.com/item?id=44821848) - [Lists and Lists: Basics of Lisp through interactive fiction (1996)](https://eblong.com/zarf/zweb/lists/)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
