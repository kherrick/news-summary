# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Software Developments

* [How to write a complete GNOME application in Lua](https://www.vtrlx.ca/posts/2025/howto-complete-lua-gnome-app/) ([comments](https://lobste.rs/s/6bjcok/how_write_complete_gnome_application_lua)) - A guide to creating fully functional GNOME applications using the Lua scripting language.

* [Kindle Scribe Redesign Adds Color Model and AI-powered Notebook Features](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Amazon unveils updates to Kindle Scribe, integrating AI-powered functionality for note-taking and a colorful e-reading experience.

* [BrowserPod: In-browser full-stack environments for IDEs and Agents via WASM](https://labs.leaningtech.com/blog/browserpod-annoucement) ([comments](https://news.ycombinator.com/item?id=45426099)) - A cutting-edge solution allowing developers to run full-stack development environments within the browser using WebAssembly.

* [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html) ([comments](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet)) - Introducing an innovative open-source inkjet printer challenging the DRM norms.

* [dgsh – Directed Graph Shell](https://www2.dmst.aueb.gr/dds/sw/dgsh/) ([comments](https://news.ycombinator.com/item?id=45425298)) - Learn about dgsh, a shell environment that brings directed graph-based pipelines to Unix-based systems.

## Key Industry News

* [Charlie Javice sentenced to 7 years in prison for fraudulent $175M sale of Frank](https://www.nbcnews.com/business/business-news/charlie-javice-sentenced-7-years-prison-fraudulent-175m-sale-financial-rcna234536) ([comments](https://news.ycombinator.com/item?id=45426858)) - A high-profile sentencing in a major financial fraud case.

* [Electronic Arts to be acquired for $52B in largest private equity buyout](https://www.nbcnews.com/business/business-news/electronic-arts-acquired-largest-ever-private-equity-buyout-rcna234432) ([comments](https://news.ycombinator.com/item?id=45425897)) - EA set to be sold for a record-breaking $52 billion, marking a historic private equity deal.

## Innovations in Science and Space Exploration

* [NASA Backs Lunar Wi-Fi Project To Connect Astronauts and Rovers On the Moon](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - NASA supports a pioneering initiative to establish a Wi-Fi network on the Moon for enhanced communication and operations.

## AI and Machine Learning

* [How the AI bubble ate Y Combinator](https://www.inc.com/sam-blum/how-the-ai-bubble-ate-y-combinator/91240632) ([comments](https://news.ycombinator.com/item?id=45426205)) - Insights on the powerful role of AI in reshaping startup ecosystems within Y Combinator.

* [Comprehension debt: A ticking time bomb of LLM-generated code](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/) ([comments](https://news.ycombinator.com/item?id=45423917)) - Analyzing the hidden risks of relying on large language models for code generation.

## Cybersecurity and Privacy

* [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/) ([comments 1](https://news.ycombinator.com/item?id=45423004), [comments 2](https://lobste.rs/s/bt97wm/bcachefs_removed_from_mainline_kernel)) - The removal of Bcachefs, a much-anticipated filesystem, from the Linux kernel sparks community discussions.

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

* [2025-09-30, 15:47:19](https://lobste.rs/s/6bjcok/how_write_complete_gnome_application_lua) - [How to write a complete GNOME application in Lua](https://www.vtrlx.ca/posts/2025/howto-complete-lua-gnome-app/)
* [2025-09-30, 15:35:21](https://news.ycombinator.com/item?id=45426858) - [Charlie Javice sentenced to 7 years in prison for fraudulent $175M sale of Frank](https://www.nbcnews.com/business/business-news/charlie-javice-sentenced-7-years-prison-fraudulent-175m-sale-financial-rcna234536)
* [2025-09-30, 15:29:00](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kindle Scribe Redesign Adds Color Model and AI-powered Notebook Features](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 15:26:43](https://lobste.rs/s/nfuocs/more_speculations_on_arenas_c) - [More speculations on arenas in C++](https://nullprogram.com/blog/2025/09/30/)
* [2025-09-30, 15:21:38](https://lobste.rs/s/l3navw/designing_agentic_loops) - [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/)
* [2025-09-30, 15:15:24](https://lobste.rs/s/qq1d0z/investigating_fixing_stoppodsandbox) - [Investigating and fixing \&quot;StopPodSandbox from runtime service failed\&quot; Kubelet errors](https://marcusnoble.co.uk/2025-09-28-investigating-and-fixing-stoppodsandbox-from-runtime-service-failed-kubelet-errors/)
* [2025-09-30, 15:09:00](https://news.ycombinator.com/item?id=45426490) - [Kagi News](https://blog.kagi.com/kagi-news)
* [2025-09-30, 15:06:33](https://news.ycombinator.com/item?id=45426457) - [Show HN: I&apos;m 17, built a face-verified social network to fight fake accounts](https://play.google.com/store/apps/details?id=com.whitelotus.social&amp;hl=en_US)
* [2025-09-30, 14:56:00](https://tech.slashdot.org/story/25/09/30/1456248/boeing-has-started-working-on-a-737-max-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Has Started Working on a 737 MAX Replacement](https://tech.slashdot.org/story/25/09/30/1456248/boeing-has-started-working-on-a-737-max-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 14:52:29](https://news.ycombinator.com/item?id=45426205) - [How the AI bubble ate Y Combinator](https://www.inc.com/sam-blum/how-the-ai-bubble-ate-y-combinator/91240632)
* [2025-09-30, 14:42:18](https://news.ycombinator.com/item?id=45426099) - [BrowserPod: In-browser full-stack environments for IDEs and Agents via WASM](https://labs.leaningtech.com/blog/browserpod-annoucement)
* [2025-09-30, 14:40:31](https://news.ycombinator.com/item?id=45426074) - [Meta&apos;s Teen Accounts Are Sugar Pills for Parents, Not Safety for Kids](https://overturned.substack.com/p/metas-teen-accounts-are-sugar-pills)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:27:30](https://news.ycombinator.com/item?id=45425897) - [Electronic Arts to be acquired for $52B in largest private equity buyout](https://www.nbcnews.com/business/business-news/electronic-arts-acquired-largest-ever-private-equity-buyout-rcna234432)
* [2025-09-30, 14:12:37](https://news.ycombinator.com/item?id=45425714) - [Deml: The Directed Acyclic Graph Elevation Markup Language](https://github.com/Mcmartelle/deml)
* [2025-09-30, 14:08:07](https://lobste.rs/s/kppmfx/custom_lnaddress_with_self_hosted) - [Custom LNAddress with Self-Hosted AlbyHub](https://emre.xyz/posts/custom-lnaddress/)
* [2025-09-30, 14:06:00](https://news.slashdot.org/story/25/09/30/146247/americas-elite-universities-have-lost-their-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;America&apos;s Elite Universities Have Lost Their Way&apos;](https://news.slashdot.org/story/25/09/30/146247/americas-elite-universities-have-lost-their-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 14:01:39](https://lobste.rs/s/rouky6/software_essays_shaped_me) - [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/)
* [2025-09-30, 13:39:22](https://news.ycombinator.com/item?id=45425298) - [dgsh – Directed Graph Shell](https://www2.dmst.aueb.gr/dds/sw/dgsh/)
* [2025-09-30, 13:00:00](https://news.slashdot.org/story/25/09/30/034241/swift-to-build-a-global-financial-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swift To Build a Global Financial Blockchain](https://news.slashdot.org/story/25/09/30/034241/swift-to-build-a-global-financial-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 12:15:25](https://lobste.rs/s/1zmau9/radicle_1_5_0_hibiscus) - [Radicle 1.5.0 – Hibiscus](https://radicle.xyz/2025/09/30/radicle-1.5.0)
* [2025-09-30, 12:08:50](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet) - [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 12:02:32](https://lobste.rs/s/yfmq0d/expression_problem_rust) - [The expression problem and Rust](https://purplesyringa.moe/blog/the-expression-problem-and-rust/)
* [2025-09-30, 12:00:39](https://news.ycombinator.com/item?id=45424412) - [Airgoods (YC S23) Is Hiring](https://airgoods.com/careers?utm_source=hacker_news)
* [2025-09-30, 11:52:36](https://lobste.rs/s/1vew74/go_proposal_hashers) - [Go proposal: Hashers](https://antonz.org/accepted/maphash-hasher/)
* [2025-09-30, 11:31:04](https://news.ycombinator.com/item?id=45424223) - [Orbiting the Hénon Attractor](https://observablehq.com/@yurivish/orbiting-the-henon-attractor)
* [2025-09-30, 10:51:45](https://news.ycombinator.com/item?id=45423994) - [Using the TPDE Codegen Back End in LLVM Orc](https://weliveindetail.github.io/blog/post/2025/09/30/tpde-in-llvm-orc.html)
* [2025-09-30, 10:37:39](https://news.ycombinator.com/item?id=45423917) - [Comprehension debt: A ticking time bomb of LLM-generated code](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/)
* [2025-09-30, 10:00:00](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Backs Lunar Wi-Fi Project To Connect Astronauts and Rovers On the Moon](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 08:36:06](https://news.ycombinator.com/item?id=45423268) - [I’ve removed Disqus. It was making my blog worse](https://ryansouthgate.com/goodbye-disqus/)
* [2025-09-30, 07:52:16](https://news.ycombinator.com/item?id=45423004) - [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/)
* [2025-09-30, 07:30:38](https://lobste.rs/s/bt97wm/bcachefs_removed_from_mainline_kernel) - [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/)
* [2025-09-30, 07:00:00](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Try To Halt Shuttle Move, Saying &apos;Little Evidence&apos; of Public Demand](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 06:50:11](https://news.ycombinator.com/item?id=45422653) - [Google CTF 2025 – webz : Exploiting zlib&apos;s Huffman Code Table](https://velog.io/@0range1337/CTF-Google-CTF-2025-webz-Exploiting-zlibs-Huffman-Code-Table-English)
* [2025-09-30, 06:23:31](https://news.ycombinator.com/item?id=45422514) - [Geolocation and Starlink](https://www.potaroo.net/ispcol/2025-09/starlinkgeo.html)
* [2025-09-30, 05:53:25](https://news.ycombinator.com/item?id=45422353) - [The ABS programming language](https://www.abs-lang.org/)
* [2025-09-30, 05:38:52](https://lobste.rs/s/t3t3zr/we_move_as_1) - [we move as 1](https://stopthrowingrocks.github.io/wma1/)
* [2025-09-30, 05:27:06](https://lobste.rs/s/06ef3a/maml_new_configuration_language_similar) - [MAML - a new configuration language (similar to JSON, YAML, and TOML)](https://maml.dev/)
* [2025-09-30, 05:18:55](https://lobste.rs/s/mhczmh/pidgin_3_0_experimental_4_2_93_0_has_been) - [Pidgin 3.0 Experimental 4 (2.93.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-4-2-93-0-has-been-released/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 03:54:35](https://lobste.rs/s/keyec7/subtext_retrospective) - [Subtext Retrospective](https://www.subtext-lang.org/retrospective.html)
* [2025-09-30, 03:30:00](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Change Spurs Rare Hybrid Between Blue Jay and Green Jay](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 02:26:39](https://news.ycombinator.com/item?id=45421302) - [Show HN: Devbox – Containers for better dev environments](https://devbox.ar0.eu/)
* [2025-09-30, 02:20:00](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Mods Sued By YouTuber Ethan Klein Fight Efforts To Unmask Them](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 01:40:00](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streameast Reclaims Domain Name Previously Seized By US Government](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 01:00:00](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Adds &apos;Instant Checkout&apos; To Shop Directly In Chat](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-30, 00:20:00](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Buyers of RadioShack Accused of Running $112 Million Ponzi Scheme](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 23:40:00](https://yro.slashdot.org/story/25/09/29/215235/fcc-mistakenly-leaks-confidential-iphone-16e-schematics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Mistakenly Leaks Confidential iPhone 16e Schematics](https://yro.slashdot.org/story/25/09/29/215235/fcc-mistakenly-leaks-confidential-iphone-16e-schematics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 23:32:10](https://news.ycombinator.com/item?id=45420173) - [How to create an OS from scratch](https://github.com/cfenollosa/os-tutorial)
* [2025-09-29, 23:12:36](https://news.ycombinator.com/item?id=45420001) - [Safe zero-copy operations in C#](https://ssg.dev/safe-zero-copy-operations-in-c/)
* [2025-09-29, 23:00:00](https://mobile.slashdot.org/story/25/09/29/2059245/afghanistan-hit-by-nationwide-internet-blackout-as-taliban-cuts-fiber-optic-cables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Afghanistan Hit By Nationwide Internet Blackout As Taliban Cuts Fiber Optic Cables](https://mobile.slashdot.org/story/25/09/29/2059245/afghanistan-hit-by-nationwide-internet-blackout-as-taliban-cuts-fiber-optic-cables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 22:20:00](https://slashdot.org/story/25/09/29/2054225/gavin-newsom-signs-first-in-nation-ai-safety-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gavin Newsom Signs First-In-Nation AI Safety Law](https://slashdot.org/story/25/09/29/2054225/gavin-newsom-signs-first-in-nation-ai-safety-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:41:00](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Android Repository F-Droid Says Google&apos;s New Rules Will Shut It Down](https://tech.slashdot.org/story/25/09/29/2015257/open-source-android-repository-f-droid-says-googles-new-rules-will-shut-it-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:16:41](https://lobste.rs/s/t88zhp/gameboy_emulator_runs_everywhere) - [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy)
* [2025-09-29, 20:58:11](https://news.ycombinator.com/item?id=45418675) - [Ask HN: What are you working on? (September 2025)](https://news.ycombinator.com/item?id=45418675)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 18:36:36](https://lobste.rs/s/w8sx2z/io_uring_is_not_event_system_2021) - [io_uring is not an event system (2021)](https://despairlabs.com/blog/posts/2021-06-16-io-uring-is-not-an-event-system/)
* [2025-09-29, 17:57:55](https://lobste.rs/s/ljvnlu/we_built_our_coding_agent_for_slack) - [We built our coding agent for Slack instead of the terminal](https://www.mintlify.com/blog/we-built-our-coding-agent-for-slack)
* [2025-09-29, 17:12:13](https://news.ycombinator.com/item?id=45416228) - [Claude Code 2.0](https://www.npmjs.com/package/@anthropic-ai/claude-code)
* [2025-09-29, 17:03:28](https://lobste.rs/s/gtnuao/introducing_claude_sonnet_4_5) - [Introducing Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 16:52:59](https://news.ycombinator.com/item?id=45415962) - [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
* [2025-09-29, 16:07:52](https://lobste.rs/s/7kspja/subtleties_sqlite_indexes) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:42:46](https://news.ycombinator.com/item?id=45415207) - [Loadmo.re: design inspiration for unconventional web](https://loadmo.re)
* [2025-09-29, 15:25:26](https://lobste.rs/s/rrwwar/announcing_software_you_can_love_2026) - [Announcing Software You Can Love 2026](https://mattnite.net/blog/sycl-2026-announcement/)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 12:36:02](https://lobste.rs/s/oiiocr/go_proposal_architecture_specific_simd) - [Go Proposal: architecture-specific SIMD intrinsics](https://github.com/golang/go/issues/73787)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 09:34:16](https://news.ycombinator.com/item?id=45411831) - [Bad Apple but it&apos;s played inside Super Mario Bros](https://tasvideos.org/8991S)
* [2025-09-29, 06:42:58](https://lobste.rs/s/x1sdu5/f_droid_google_s_developer_registration) - [F-Droid and Google&apos;s Developer Registration Decree](https://f-droid.org/2025/09/29/google-developer-registration-decree.html)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 04:07:21](https://lobste.rs/s/olfuo0/just_let_me_select_text) - [Just Let Me Select Text](https://aartaka.me/select-text.html)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 19:42:24](https://news.ycombinator.com/item?id=45398760) - [Explore Digital Edition of Printing Types from 1922](https://www.openculture.com/2025/09/explore-a-new-digital-edition-of-printing-types-the-authoritative-history-of-printing-typography-from-1922.html)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:23:58](https://news.ycombinator.com/item?id=45392602) - [Show HN: A web version of Pips game (NYT domino game)](https://pipsgamer.com)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 18:43:58](https://news.ycombinator.com/item?id=45389716) - [How Does Lossless Compression in Fuji RAF Files Work? (2020)](https://capnfabs.net/posts/fuji-raf-compression-algorithm/)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 11:42:04](https://news.ycombinator.com/item?id=45385354) - [Design of the SCHEME-78 Lisp-based microprocessor (1980)](https://dl.acm.org/doi/10.1145/359024.359031)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
