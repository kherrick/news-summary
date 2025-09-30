# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements

* [NASA Backs Lunar Wi-Fi Project To Connect Astronauts and Rovers On the Moon](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring innovative ways to streamline lunar communications.

* [China Hackers Breached Foreign Ministers' Emails, Palo Alto Says](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major cybersecurity breach with global implications.

* [Sora 2](https://openai.com/index/sora-2/) - OpenAI introduces Sora 2, advancing AI capabilities.

* [Genomic analyses of hair from Ludwig van Beethoven](https://www.cell.com/current-biology/fulltext/S0960-9822(23)00181-1) - Revolutionary genomic insights unveiled through Beethoven's hair.

## Corporate and Industry Developments

* [Boeing has started working on a 737 MAX replacement](https://www.wsj.com/business/airlines/boeing-has-started-working-on-a-737-max-replacement-40a110df) - Boeing hints at a next-generation aircraft.

* [Cerebras Systems Raises $1.1B Series G at $8.1B Valuation](https://www.cerebras.ai/press-release/series-g) - Significant funding round highlights the AI hardware leader.

* [Imgur Pulls Out of UK as Data Watchdog Threatens Fine](https://news.slashdot.org/story/25/09/30/1715206/imgur-pulls-out-of-uk-as-data-watchdog-threatens-fine?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Imgur makes a notable exit from the UK market.

* [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html) - A consumer-friendly approach to printing technology.

## Social and Cultural Perspectives

* [50 Things I Know](https://rebeccadai.substack.com/p/50-things-i-know) - Personal growth insights shared by Rebecca Dai.

* [Frank Chimero: I think we're in the lemon stage of the internet](https://frankchimero.com/blog/2025/selling-lemons/) - A perspective on the evolving state of the web.

* [Deml: The Directed Acyclic Graph Elevation Markup Language](https://github.com/Mcmartelle/deml) - Introducing a new specification for structured data.

* [Comprehension debt: A ticking time bomb of LLM-generated code](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/) - Examining the consequences of relying on AI-generated code.

## Climate and Environmental Studies

* [Climate Change Spurs Rare Hybrid Between Blue Jay and Green Jay](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unusual bird hybrids linked to environmental shifts.

* [What Researchers Suspect May Be Fueling Cancer Among Millennials](https://science.slashdot.org/story/25/09/30/1549226/what-researchers-suspect-may-be-fueling-cancer-among-millennials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigating potential health risks affecting younger generations.

* [BrowserPod: In-browser full-stack environments for IDEs and Agents via WASM](https://labs.leaningtech.com/blog/browserpod-annoucement) - Leveraging technology for environmental assessments.

## Historical and Academic Insights

* [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&from=rss) - Celebrating decades of advocacy for free software.

* [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/) - Influential software writings explored.

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

* [2025-09-30, 18:32:59](https://lobste.rs/s/hk8yw5/steel_bank_common_lisp_2_5_9) - [Steel Bank Common Lisp 2.5.9](https://www.sbcl.org/news.html#2.5.9)
* [2025-09-30, 18:27:00](https://tech.slashdot.org/story/25/09/30/1827229/windows-11s-2025-update-arrives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11&apos;s 2025 Update Arrives](https://tech.slashdot.org/story/25/09/30/1827229/windows-11s-2025-update-arrives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 18:12:01](https://news.ycombinator.com/item?id=45429041) - [50 Things I Know](https://rebeccadai.substack.com/p/50-things-i-know)
* [2025-09-30, 17:46:36](https://news.ycombinator.com/item?id=45428691) - [Hedge funds have to be big](https://www.bloomberg.com/opinion/newsletters/2025-09-30/hedge-funds-have-to-be-big)
* [2025-09-30, 17:31:34](https://news.ycombinator.com/item?id=45428482) - [Boeing has started working on a 737 MAX replacement](https://www.wsj.com/business/airlines/boeing-has-started-working-on-a-737-max-replacement-40a110df)
* [2025-09-30, 17:31:28](https://lobste.rs/s/cpizty/shellshock_2014_2025) - [Shellshock (2014, 2025)](https://dwheeler.com/essays/shellshock.html)
* [2025-09-30, 17:30:00](https://news.slashdot.org/story/25/09/30/1715206/imgur-pulls-out-of-uk-as-data-watchdog-threatens-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Imgur Pulls Out of UK as Data Watchdog Threatens Fine](https://news.slashdot.org/story/25/09/30/1715206/imgur-pulls-out-of-uk-as-data-watchdog-threatens-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 17:04:25](https://news.ycombinator.com/item?id=45428122) - [Sora 2](https://openai.com/index/sora-2/)
* [2025-09-30, 17:01:27](https://news.ycombinator.com/item?id=45428081) - [Bild AI (YC W25) Is Hiring](https://www.ycombinator.com/companies/bild-ai/jobs/m2ilR5L-founding-engineer-applied-ai)
* [2025-09-30, 16:57:07](https://news.ycombinator.com/item?id=45428020) - [Genomic analyses of hair from Ludwig van Beethoven](https://www.cell.com/current-biology/fulltext/S0960-9822(23)00181-1)
* [2025-09-30, 16:56:23](https://lobste.rs/s/ytwdqu/behind_y_s2_serverless_multiplayer_rooms) - [Behind y-s2: serverless multiplayer rooms](https://s2.dev/blog/durable-yjs-rooms)
* [2025-09-30, 16:55:01](https://news.ycombinator.com/item?id=45427982) - [Introducing Sora 2 [video]](https://www.youtube.com/watch?v=gzneGhpXwjU)
* [2025-09-30, 16:55:00](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Hackers Breached Foreign Ministers&apos; Emails, Palo Alto Says](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 16:31:27](https://news.ycombinator.com/item?id=45427634) - [A $196 fine-tuned 7B model outperforms OpenAI o3 on document extraction](https://arxiv.org/abs/2509.22906)
* [2025-09-30, 16:21:09](https://news.ycombinator.com/item?id=45427482) - [Launch HN: Airweave (YC X25) – Let agents search any app](https://github.com/airweave-ai/airweave)
* [2025-09-30, 16:10:00](https://science.slashdot.org/story/25/09/30/1549226/what-researchers-suspect-may-be-fueling-cancer-among-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Researchers Suspect May Be Fueling Cancer Among Millennials](https://science.slashdot.org/story/25/09/30/1549226/what-researchers-suspect-may-be-fueling-cancer-among-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 16:04:26](https://lobste.rs/s/nsmomr/city2graph) - [city2graph](https://city2graph.net/)
* [2025-09-30, 16:00:36](https://news.ycombinator.com/item?id=45427197) - [Leaked Apple M5 9 core Geekbench scores](https://browser.geekbench.com/v6/cpu/14173685)
* [2025-09-30, 15:54:14](https://news.ycombinator.com/item?id=45427111) - [Cerebras Systems Raises $1.1B Series G at $8.1B Valuation](https://www.cerebras.ai/press-release/series-g)
* [2025-09-30, 15:50:14](https://news.ycombinator.com/item?id=45427059) - [Visualizations of Random Attractors Found Using Lyapunov Exponents](https://paulbourke.net/fractals/lyapunov/)
* [2025-09-30, 15:47:19](https://lobste.rs/s/6bjcok/how_write_complete_gnome_application_lua) - [How to write a complete GNOME application in Lua](https://www.vtrlx.ca/posts/2025/howto-complete-lua-gnome-app/)
* [2025-09-30, 15:29:00](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kindle Scribe Redesign Adds Color Model and AI-powered Notebook Features](https://news.slashdot.org/story/25/09/30/1529241/kindle-scribe-redesign-adds-color-model-and-ai-powered-notebook-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 15:26:43](https://lobste.rs/s/nfuocs/more_speculations_on_arenas_c) - [More speculations on arenas in C++](https://nullprogram.com/blog/2025/09/30/)
* [2025-09-30, 15:21:38](https://lobste.rs/s/l3navw/designing_agentic_loops) - [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/)
* [2025-09-30, 15:21:23](https://news.ycombinator.com/item?id=45426680) - [Designing Agentic Loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/)
* [2025-09-30, 15:09:00](https://news.ycombinator.com/item?id=45426490) - [Kagi News](https://blog.kagi.com/kagi-news)
* [2025-09-30, 14:56:00](https://tech.slashdot.org/story/25/09/30/1456248/boeing-has-started-working-on-a-737-max-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boeing Has Started Working on a 737 MAX Replacement](https://tech.slashdot.org/story/25/09/30/1456248/boeing-has-started-working-on-a-737-max-replacement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 14:42:18](https://news.ycombinator.com/item?id=45426099) - [BrowserPod: In-browser full-stack environments for IDEs and Agents via WASM](https://labs.leaningtech.com/blog/browserpod-annoucement)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:14:28](https://news.ycombinator.com/item?id=45425746) - [Frank Chimero: I think we&apos;re in the lemon stage of the internet](https://frankchimero.com/blog/2025/selling-lemons/)
* [2025-09-30, 14:12:37](https://news.ycombinator.com/item?id=45425714) - [Deml: The Directed Acyclic Graph Elevation Markup Language](https://github.com/Mcmartelle/deml)
* [2025-09-30, 14:06:00](https://news.slashdot.org/story/25/09/30/146247/americas-elite-universities-have-lost-their-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;America&apos;s Elite Universities Have Lost Their Way&apos;](https://news.slashdot.org/story/25/09/30/146247/americas-elite-universities-have-lost-their-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 14:01:39](https://lobste.rs/s/rouky6/software_essays_shaped_me) - [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/)
* [2025-09-30, 13:46:47](https://lobste.rs/s/eijurc/deml_directed_acyclic_graph_elevation) - [deml: The Directed Acyclic Graph Elevation Markup Language](https://github.com/Mcmartelle/deml)
* [2025-09-30, 13:39:22](https://news.ycombinator.com/item?id=45425298) - [dgsh – Directed Graph Shell](https://www2.dmst.aueb.gr/dds/sw/dgsh/)
* [2025-09-30, 13:19:53](https://news.ycombinator.com/item?id=45425061) - [An opinionated critique of Duolingo](https://isomorphism.xyz/blog/2025/duolingo/)
* [2025-09-30, 13:01:05](https://news.ycombinator.com/item?id=45424888) - [Imgur pulls out of UK as data watchdog threatens fine](https://www.express.co.uk/news/uk/2115228/image-site-imgur-pulls-out)
* [2025-09-30, 13:00:00](https://news.slashdot.org/story/25/09/30/034241/swift-to-build-a-global-financial-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swift To Build a Global Financial Blockchain](https://news.slashdot.org/story/25/09/30/034241/swift-to-build-a-global-financial-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 12:53:49](https://news.ycombinator.com/item?id=45424827) - [Founder sentenced to seven years in prison for fraudulent sale to JPMorgan](https://www.cnn.com/2025/09/30/business/charlie-javice-frank-sentenced-jpmorgan-intl)
* [2025-09-30, 12:40:17](https://news.ycombinator.com/item?id=45424704) - [Pasta Cooking Time](https://www.jefftk.com/p/pasta-cooking-time)
* [2025-09-30, 12:33:43](https://news.ycombinator.com/item?id=45424648) - [How has mathematics gotten so abstract?](https://lcamtuf.substack.com/p/how-has-mathematics-gotten-so-abstract)
* [2025-09-30, 12:15:25](https://lobste.rs/s/1zmau9/radicle_1_5_0_hibiscus) - [Radicle 1.5.0 – Hibiscus](https://radicle.xyz/2025/09/30/radicle-1.5.0)
* [2025-09-30, 12:08:50](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet) - [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 12:02:32](https://lobste.rs/s/yfmq0d/expression_problem_rust) - [The expression problem and Rust](https://purplesyringa.moe/blog/the-expression-problem-and-rust/)
* [2025-09-30, 11:52:36](https://lobste.rs/s/1vew74/go_proposal_hashers) - [Go proposal: Hashers](https://antonz.org/accepted/maphash-hasher/)
* [2025-09-30, 10:37:39](https://news.ycombinator.com/item?id=45423917) - [Comprehension debt: A ticking time bomb of LLM-generated code](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/)
* [2025-09-30, 10:36:39](https://lobste.rs/s/fouac3/comprehension_debt_ticking_time_bomb_llm) - [Comprehension Debt: The Ticking Time Bomb of LLM-Generated Code](https://codemanship.wordpress.com/2025/09/30/comprehension-debt-the-ticking-time-bomb-of-llm-generated-code/)
* [2025-09-30, 10:00:00](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Backs Lunar Wi-Fi Project To Connect Astronauts and Rovers On the Moon](https://science.slashdot.org/story/25/09/30/0312213/nasa-backs-lunar-wi-fi-project-to-connect-astronauts-and-rovers-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 08:50:11](https://news.ycombinator.com/item?id=45423363) - [Can you use GDPR to circumvent BlueSky&apos;s adult content blocks?](https://shkspr.mobi/blog/2025/09/can-you-use-gdpr-to-circumvent-blueskys-adult-content-blocks/)
* [2025-09-30, 07:30:38](https://lobste.rs/s/bt97wm/bcachefs_removed_from_mainline_kernel) - [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/)
* [2025-09-30, 07:00:00](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Try To Halt Shuttle Move, Saying &apos;Little Evidence&apos; of Public Demand](https://science.slashdot.org/story/25/09/30/008214/senators-try-to-halt-shuttle-move-saying-little-evidence-of-public-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 06:50:11](https://news.ycombinator.com/item?id=45422653) - [Google CTF 2025 – webz : Exploiting zlib&apos;s Huffman Code Table](https://velog.io/@0range1337/CTF-Google-CTF-2025-webz-Exploiting-zlibs-Huffman-Code-Table-English)
* [2025-09-30, 05:38:52](https://lobste.rs/s/t3t3zr/we_move_as_1) - [we move as 1](https://stopthrowingrocks.github.io/wma1/)
* [2025-09-30, 05:27:06](https://lobste.rs/s/06ef3a/maml_new_configuration_language_similar) - [MAML - a new configuration language (similar to JSON, YAML, and TOML)](https://maml.dev/)
* [2025-09-30, 05:18:55](https://lobste.rs/s/mhczmh/pidgin_3_0_experimental_4_2_93_0_has_been) - [Pidgin 3.0 Experimental 4 (2.93.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-4-2-93-0-has-been-released/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 03:54:35](https://lobste.rs/s/keyec7/subtext_retrospective) - [Subtext Retrospective](https://www.subtext-lang.org/retrospective.html)
* [2025-09-30, 03:30:00](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Change Spurs Rare Hybrid Between Blue Jay and Green Jay](https://science.slashdot.org/story/25/09/30/000219/climate-change-spurs-rare-hybrid-between-blue-jay-and-green-jay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 02:20:00](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Mods Sued By YouTuber Ethan Klein Fight Efforts To Unmask Them](https://yro.slashdot.org/story/25/09/29/2350234/reddit-mods-sued-by-youtuber-ethan-klein-fight-efforts-to-unmask-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 01:40:00](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streameast Reclaims Domain Name Previously Seized By US Government](https://yro.slashdot.org/story/25/09/29/2344210/streameast-reclaims-domain-name-previously-seized-by-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 01:00:00](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Adds &apos;Instant Checkout&apos; To Shop Directly In Chat](https://news.slashdot.org/story/25/09/29/2119248/chatgpt-adds-instant-checkout-to-shop-directly-in-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-30, 00:20:00](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Buyers of RadioShack Accused of Running $112 Million Ponzi Scheme](https://yro.slashdot.org/story/25/09/29/2112250/buyers-of-radioshack-accused-of-running-112-million-ponzi-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-29, 21:16:41](https://lobste.rs/s/t88zhp/gameboy_emulator_runs_everywhere) - [The Gameboy emulator that runs everywhere (Terminal, Web, Desktop)](https://github.com/raphamorim/gameboy)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 16:07:52](https://lobste.rs/s/7kspja/subtleties_sqlite_indexes) - [Subtleties of SQLite Indexes](https://emschwartz.me/subtleties-of-sqlite-indexes/)
* [2025-09-29, 15:25:26](https://lobste.rs/s/rrwwar/announcing_software_you_can_love_2026) - [Announcing Software You Can Love 2026](https://mattnite.net/blog/sycl-2026-announcement/)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 11:35:01](https://lobste.rs/s/ayncvk/ai_is_writing_90_code) - [AI is writing 90% of the code](https://lucumr.pocoo.org/2025/9/29/90-percent/)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
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
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 13:19:25](https://news.ycombinator.com/item?id=45395495) - [Conway&apos;s Pinwheel Tiling](https://www.johndcook.com/blog/2025/09/25/conways-pinwheel-tiling/)
* [2025-09-27, 12:30:41](https://news.ycombinator.com/item?id=45395156) - [A Gentle Introduction to CUDA PTX](https://philipfabianek.com/posts/cuda-ptx-introduction/)
* [2025-09-27, 12:27:29](https://news.ycombinator.com/item?id=45395132) - [Computer Vision: Algorithms and Applications, 2nd ed](https://szeliski.org/Book/)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
* [2025-09-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss) - [American Kids Can’t Read or Do Math Anymore](https://soylentnews.org/article.pl?sid=25/09/26/1433207&amp;from=rss)
* [2025-09-26, 18:43:58](https://news.ycombinator.com/item?id=45389716) - [How does lossless compression in Fuji RAF files work? (2020)](https://capnfabs.net/posts/fuji-raf-compression-algorithm/)
* [2025-09-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss) - [More Than Half of World&apos;s Coastal Settlements Retreating From Rising Seas, Study Shows](https://soylentnews.org/article.pl?sid=25/09/26/1416257&amp;from=rss)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
