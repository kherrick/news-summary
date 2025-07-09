# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [HyAB k-means for color quantization](https://30fps.net/pages/hyab-kmeans/) - A detailed exploration of a new color quantization method using HyAB k-means. [Comments](https://news.ycombinator.com/item?id=44514946)

* [AMD Warns of New Meltdown, Spectre-like Bugs Affecting CPUs](https://it.slashdot.org/story/25/07/09/1835230/amd-warns-of-new-meltdown-spectre-like-bugs-affecting-cpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AMD alerts users to potential vulnerabilities akin to Meltdown and Spectre. [Comments](https://news.ycombinator.com/item?id=44514559)

* [Microsoft Touts $500 Million in AI Savings While Slashing Jobs](https://tech.slashdot.org/story/25/07/09/1831232/microsoft-touts-500-million-in-ai-savings-while-slashing-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft's focus on AI efficiency accompanies significant workforce reductions. [Comments](https://news.ycombinator.com/item?id=44513843)

* [OpenAI To Release AI Web Browser in Challenge To Chrome](https://tech.slashdot.org/story/25/07/09/1818249/openai-to-release-ai-web-browser-in-challenge-to-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI announces a new AI-driven browser, aiming to rival Google Chrome. [Comments](https://news.ycombinator.com/item?id=44513843)

* [Biomni: A General-Purpose Biomedical AI Agent](https://github.com/snap-stanford/Biomni) - Introduction to Biomni, a versatile biomedical AI tool. [Comments](https://news.ycombinator.com/item?id=44513843)

## Security and Data Breaches

* [McDonald&apos;s AI Hiring Bot Exposed Millions of Applicants&apos; Data To Hackers](https://yro.slashdot.org/story/25/07/09/2014234/mcdonalds-ai-hiring-bot-exposed-millions-of-applicants-data-to-hackers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant data breach reveals vulnerabilities in McDonald's AI hiring systems. [Comments](https://news.ycombinator.com/item?id=44513940)

* [Would You Like an IDOR With That? Leaking 64m McDonald&apos;s Job Applications](https://ian.sh/mcdonalds) - Highlights the risks of insecure IDOR implementations and their application to McDonald’s data. [Comments](https://news.ycombinator.com/item?id=44513940)

* [Helm local code execution via a malicious chart](https://github.com/helm/helm/security/advisories/GHSA-557j-xg8c-q2mm) - A critical security advisory about Helm’s susceptibility to local code execution attacks. [Comments](https://news.ycombinator.com/item?id=44506696)

## Science and Innovations

* [A fast 3D collision detection algorithm](https://cairno.substack.com/p/improvements-to-the-separating-axis) - Breakthroughs in 3D collision algorithms enhance computational geometry. [Comments](https://news.ycombinator.com/item?id=44510282)

* [Nuclear Waste Reprocessing Gains Momentum in the U.S.](https://spectrum.ieee.org/nuclear-waste-reprocessing-transmutation) - The U.S. explores advancements in nuclear waste recycling. [Comments](https://news.ycombinator.com/item?id=44511282)

* [The most otherworldly, mysterious forms of lightning on Earth](https://www.nationalgeographic.com/science/article/lightning-sprites-transient-luminous-events-thunderstorms) - Discovering rare and unexplained lightning phenomena. [Comments](https://news.ycombinator.com/item?id=44480363)

## Historical and Cultural Insights

* [Frame of preference – A history of Mac settings, 1984–2004](https://aresluna.org/frame-of-preference/) - A curated history of how Mac OS settings evolved over two decades. [Comments](https://lobste.rs/s/vwlbig/frame_preference_history_mac_settings)

* [Archaeologists unveil 3,500-year-old city in Peru](https://www.bbc.co.uk/news/articles/c07dmx38kyeo) - New archaeological discoveries shed light on ancient Peruvian civilizations. [Comments](https://news.ycombinator.com/item?id=44487451)

* [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&from=rss) - Genetic studies reveal insights into ancient Roman culinary practices. [Comments](https://news.ycombinator.com/item?id=44479302)

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

* [2025-07-09, 21:34:30](https://news.ycombinator.com/item?id=44514946) - [HyAB k-means for color quantization](https://30fps.net/pages/hyab-kmeans/)
* [2025-07-09, 21:20:00](https://yro.slashdot.org/story/25/07/09/2014234/mcdonalds-ai-hiring-bot-exposed-millions-of-applicants-data-to-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [McDonald&apos;s AI Hiring Bot Exposed Millions of Applicants&apos; Data To Hackers](https://yro.slashdot.org/story/25/07/09/2014234/mcdonalds-ai-hiring-bot-exposed-millions-of-applicants-data-to-hackers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 21:06:38](https://news.ycombinator.com/item?id=44514753) - [Show HN: MCP server for searching and downloading documents from Anna&apos;s Archive](https://github.com/iosifache/annas-mcp)
* [2025-07-09, 20:45:19](https://news.ycombinator.com/item?id=44514559) - [QRS: Epsilon Wrangling](https://www.tbray.org/ongoing/When/202x/2025/07/07/Epsilon-Wrangling)
* [2025-07-09, 20:41:00](https://it.slashdot.org/story/25/07/09/1835230/amd-warns-of-new-meltdown-spectre-like-bugs-affecting-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Warns of New Meltdown, Spectre-like Bugs Affecting CPUs](https://it.slashdot.org/story/25/07/09/1835230/amd-warns-of-new-meltdown-spectre-like-bugs-affecting-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 20:02:00](https://tech.slashdot.org/story/25/07/09/1831232/microsoft-touts-500-million-in-ai-savings-while-slashing-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Touts $500 Million in AI Savings While Slashing Jobs](https://tech.slashdot.org/story/25/07/09/1831232/microsoft-touts-500-million-in-ai-savings-while-slashing-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 19:40:06](https://lobste.rs/s/n8wej0/hare_by_example) - [Hare by Example](https://harebyexample.org)
* [2025-07-09, 19:31:46](https://news.ycombinator.com/item?id=44513940) - [Would You Like an IDOR With That? Leaking 64m McDonald&apos;s Job Applications](https://ian.sh/mcdonalds)
* [2025-07-09, 19:25:00](https://news.slashdot.org/story/25/07/09/1826228/western-europe-sees-hottest-june-on-record-amid-extreme-heatwaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Western Europe Sees Hottest June on Record Amid Extreme Heatwaves](https://news.slashdot.org/story/25/07/09/1826228/western-europe-sees-hottest-june-on-record-amid-extreme-heatwaves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 19:20:08](https://news.ycombinator.com/item?id=44513843) - [Biomni: A General-Purpose Biomedical AI Agent](https://github.com/snap-stanford/Biomni)
* [2025-07-09, 19:16:55](https://news.ycombinator.com/item?id=44513801) - [Let Kids Be Loud](https://www.afterbabel.com/p/let-kids-be-loud)
* [2025-07-09, 19:11:46](https://news.ycombinator.com/item?id=44513750) - [Google fails to dismiss wiretapping claims on SJ, settles with app users](https://news.ycombinator.com/item?id=44513750)
* [2025-07-09, 18:40:00](https://tech.slashdot.org/story/25/07/09/1818249/openai-to-release-ai-web-browser-in-challenge-to-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI To Release AI Web Browser in Challenge To Chrome](https://tech.slashdot.org/story/25/07/09/1818249/openai-to-release-ai-web-browser-in-challenge-to-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 18:05:00](https://apple.slashdot.org/story/25/07/09/1731248/apple-working-on-updated-vision-pro-with-m4-chip-as-early-as-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Working on Updated Vision Pro With M4 Chip as Early as 2025](https://apple.slashdot.org/story/25/07/09/1731248/apple-working-on-updated-vision-pro-with-m4-chip-as-early-as-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 18:04:14](https://news.ycombinator.com/item?id=44513083) - [Desktop Publishing Tools That Didn&apos;t Make It (2022)](https://tedium.co/2022/10/12/forgotten-desktop-publishing-tools-history/)
* [2025-07-09, 17:54:25](https://lobste.rs/s/2tx1mx/get_location_iss_using_dns) - [Get the location of the ISS using DNS](https://shkspr.mobi/blog/2025/07/get-the-location-of-the-iss-using-dns/)
* [2025-07-09, 17:36:10](https://lobste.rs/s/nmu0qm/online_searchable_reference_tool_for_c) - [An online searchable reference tool for C intrinsics of all major SIMD engines](https://simd.info/)
* [2025-07-09, 17:34:09](https://news.ycombinator.com/item?id=44512763) - [Show HN: FlopperZiro – A DIY open-source Flipper Zero clone](https://github.com/lraton/FlopperZiro)
* [2025-07-09, 17:30:54](https://lobste.rs/s/plwg9q/variadic_generics_ideas_won_t_work_for) - [Variadic Generics ideas that won’t work for Rust](https://poignardazur.github.io//2025/07/09/variadic-generics-dead-ends/)
* [2025-07-09, 17:26:50](https://news.ycombinator.com/item?id=44512684) - [Evolution Mail Users Easily Trackable](https://www.grepular.com/Evolution_Mail_Users_Easily_Trackable)
* [2025-07-09, 17:25:00](https://slashdot.org/story/25/07/09/176219/microsoft-pledges-4-billion-for-ai-education-training-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pledges $4 Billion for AI Education Training Programs](https://slashdot.org/story/25/07/09/176219/microsoft-pledges-4-billion-for-ai-education-training-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 17:08:54](https://news.ycombinator.com/item?id=44512470) - [Configuring Split Horizon DNS with Pi-Hole and Tailscale](https://www.bentasker.co.uk/posts/blog/general/configuring-pihole-to-serve-different-records-to-different-clients.html)
* [2025-07-09, 16:53:10](https://lobste.rs/s/fvorwd/quite_few_words_about_async) - [(Quite) A Few Words About Async](https://yoric.github.io/post/quite-a-few-words-about-async/)
* [2025-07-09, 16:48:00](https://science.slashdot.org/story/25/07/09/1649202/animal-diseases-leapt-to-humans-when-we-started-keeping-livestock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Animal Diseases Leapt To Humans When We Started Keeping Livestock](https://science.slashdot.org/story/25/07/09/1649202/animal-diseases-leapt-to-humans-when-we-started-keeping-livestock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 16:05:00](https://entertainment.slashdot.org/story/25/07/09/164254/restaurants-bars-say-theyre-getting-squeezed-by-rising-music-licensing-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Restaurants, Bars Say They&apos;re Getting Squeezed by Rising Music Licensing Costs](https://entertainment.slashdot.org/story/25/07/09/164254/restaurants-bars-say-theyre-getting-squeezed-by-rising-music-licensing-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 16:00:20](https://lobste.rs/s/9hzhgi/roll_your_own_game_ui_with_clay_nanovg) - [Roll your own in-game UI with Clay and NanoVG](https://dev.to/linkdd/roll-your-own-in-game-ui-with-clay-and-nanovg-part-2-25pf)
* [2025-07-09, 15:28:58](https://news.ycombinator.com/item?id=44511282) - [Nuclear Waste Reprocessing Gains Momentum in the U.S.](https://spectrum.ieee.org/nuclear-waste-reprocessing-transmutation)
* [2025-07-09, 15:25:00](https://yro.slashdot.org/story/25/07/09/152205/court-nullifies-click-to-cancel-rule-that-required-easy-methods-of-cancellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Court Nullifies &apos;Click-To-Cancel&apos; Rule That Required Easy Methods of Cancellation](https://yro.slashdot.org/story/25/07/09/152205/court-nullifies-click-to-cancel-rule-that-required-easy-methods-of-cancellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 15:08:29](https://lobste.rs/s/iq4abk/is_doc_bot_docs_not) - [Is the doc bot docs, or not?](https://www.robinsloan.com/lab/what-are-we-even-doing-here/)
* [2025-07-09, 14:52:04](https://news.ycombinator.com/item?id=44510731) - [X Chief Says She Is Leaving the Social Media Platform](https://www.nytimes.com/2025/07/09/technology/linda-yaccarino-x-steps-down.html)
* [2025-07-09, 14:45:00](https://news.slashdot.org/story/25/07/09/1443248/teachers-urge-parents-not-to-buy-children-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Teachers Urge Parents Not To Buy Children Smartphones](https://news.slashdot.org/story/25/07/09/1443248/teachers-urge-parents-not-to-buy-children-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 14:40:24](https://news.ycombinator.com/item?id=44510600) - [Tree Borrows](https://plf.inf.ethz.ch/research/pldi25-tree-borrows.html)
* [2025-07-09, 14:12:16](https://news.ycombinator.com/item?id=44510282) - [A fast 3D collision detection algorithm](https://cairno.substack.com/p/improvements-to-the-separating-axis)
* [2025-07-09, 14:09:00](https://slashdot.org/story/25/07/09/149217/nvidia-hits-4-trillion-market-cap-first-company-to-do-so?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Hits $4 Trillion Market Cap, First Company To Do So](https://slashdot.org/story/25/07/09/149217/nvidia-hits-4-trillion-market-cap-first-company-to-do-so?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 13:55:56](https://lobste.rs/s/cjqmee/summary_may_2025_tc39_plenary) - [Summary of the May 2025 TC39 plenary](https://blogs.igalia.com/compilers/2025/07/03/summary-of-the-may-2025-tc39-plenary/)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 13:08:59](https://lobste.rs/s/nreqbn/hyab_k_means_for_color_quantization) - [HyAB k-means for color quantization](https://30fps.net/pages/hyab-kmeans/)
* [2025-07-09, 13:00:00](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Setting Dark Matter Detector Comes Up Empty -- and That&apos;s Good News](https://science.slashdot.org/story/25/07/08/2255240/record-setting-dark-matter-detector-comes-up-empty----and-thats-good-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 11:51:43](https://lobste.rs/s/cil4ao/brut_new_web_framework_for_ruby) - [Brut: A New Web Framework for Ruby](https://naildrivin5.com/blog/2025/07/08/brut-a-new-web-framework-for-ruby.html)
* [2025-07-09, 11:29:05](https://lobste.rs/s/cga7nb/oregon_programming_languages_summer) - [Oregon Programming Languages Summer School (OPLSS) 2025: Types, Logic, and Formal Methods](https://www.cs.uoregon.edu/research/summerschool/summer25/topics.php)
* [2025-07-09, 10:13:28](https://lobste.rs/s/1tzmmj/client_side_epub_generation) - [Client-side epub generation](https://little.webby.press/)
* [2025-07-09, 10:00:00](https://hardware.slashdot.org/story/25/07/08/220238/uk-police-dangle-102-million-to-digitize-its-vhs-tape-archives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police Dangle $102 Million To Digitize Its VHS Tape Archives](https://hardware.slashdot.org/story/25/07/08/220238/uk-police-dangle-102-million-to-digitize-its-vhs-tape-archives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 08:20:49](https://lobste.rs/s/baio5y/tree_borrows_paper_is_finally_published) - [The Tree Borrows paper is finally published](https://www.ralfj.de/blog/2025/07/07/tree-borrows-paper.html)
* [2025-07-09, 08:16:47](https://lobste.rs/s/1riirw/supabase_mcp_can_leak_your_entire_sql) - [Supabase MCP can leak your entire SQL database](https://www.generalanalysis.com/blog/supabase-mcp-blog)
* [2025-07-09, 07:27:51](https://lobste.rs/s/vwlbig/frame_preference_history_mac_settings) - [Frame of preference – A history of Mac settings, 1984–2004](https://aresluna.org/frame-of-preference/)
* [2025-07-09, 07:04:36](https://news.ycombinator.com/item?id=44507076) - [Most RESTful APIs aren&apos;t really RESTful](https://florian-kraemer.net//software-architecture/2025/07/07/Most-RESTful-APIs-are-not-really-RESTful.html)
* [2025-07-09, 07:00:00](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Satellites Complete First High-Altitude Rendezvous For Possible Groundbreaking Refueling](https://tech.slashdot.org/story/25/07/08/2239218/chinese-satellites-complete-first-high-altitude-rendezvous-for-possible-groundbreaking-refueling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-09, 05:49:52](https://news.ycombinator.com/item?id=44506696) - [Helm local code execution via a malicious chart](https://github.com/helm/helm/security/advisories/GHSA-557j-xg8c-q2mm)
* [2025-07-09, 04:04:45](https://news.ycombinator.com/item?id=44506251) - [Phrase origin: Why do we \&quot;call\&quot; functions?](https://quuxplusone.github.io/blog/2025/04/04/etymology-of-call/)
* [2025-07-09, 03:53:59](https://lobste.rs/s/8ixtyt/agents_don_t_have_agency) - [Agents don&apos;t have agency](https://kconner.com/2025/07/08/agents-dont-have-agency.html)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
* [2025-07-09, 02:55:35](https://lobste.rs/s/zjlygh/phrase_origin_why_do_we_call_functions) - [Phrase origin: Why do we “call” functions?](https://quuxplusone.github.io/blog/2025/04/04/etymology-of-call/)
* [2025-07-09, 02:37:28](https://news.ycombinator.com/item?id=44505876) - [RapidRAW: A non-destructive and GPU-accelerated RAW image editor](https://github.com/CyberTimon/RapidRAW)
* [2025-07-09, 01:11:12](https://lobste.rs/s/tp5eoc/hippocratic_license) - [Hippocratic License](https://firstdonoharm.dev/version/3/0/cl-eco-media-my-tal-xuar.txt)
* [2025-07-09, 00:55:00](https://lobste.rs/s/xjttka/toml_v0_9) - [toml v0.9](https://epage.github.io/blog/2025/07/toml-09/)
* [2025-07-08, 23:02:00](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss) - [A New Diabetes Treatment Could Free People From Insulin Injections](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss)
* [2025-07-08, 21:14:37](https://lobste.rs/s/os54bi/systemd_has_been_complete_utter) - [systemd has been a complete, utter, unmitigated success](https://blog.tjll.net/the-systemd-revolution-has-been-a-success/)
* [2025-07-08, 19:06:11](https://lobste.rs/s/s468u9/ibm_power11_hits_market_this_month) - [IBM Power11 hits the market this month](https://www.talospace.com/2025/07/power11-hits-market-this-month.html)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 16:37:55](https://lobste.rs/s/sd5w2g/announcing_foks_federated_open_key) - [Announcing FOKS, the Federated Open Key Service](https://blog.foks.pub/posts/introducing/)
* [2025-07-08, 14:21:56](https://lobste.rs/s/zlm4fp/how_i_build_software_quickly) - [How I build software quickly](https://evanhahn.com/how-i-build-software-quickly/)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 10:40:03](https://news.ycombinator.com/item?id=44498766) - [Why LLMs Can&apos;t Write Q/Kdb+: Writing Code Right-to-Left](https://medium.com/@gabiteodoru/why-llms-cant-write-q-kdb-writing-code-right-to-left-ea6df68af443)
* [2025-07-08, 10:14:02](https://lobste.rs/s/9vvhzr/two_weeks_wayback) - [Two weeks of wayback](https://ariadne.space/2025/07/07/two-weeks-of-wayback.html)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 22:58:45](https://news.ycombinator.com/item?id=44495428) - [Bootstrapping a side project into a profitable seven-figure business](https://projectionlab.com/blog/we-reached-1m-arr-with-zero-funding)
* [2025-07-07, 20:48:55](https://lobste.rs/s/yctrpk/adding_feature_because_chatgpt) - [Adding a feature because ChatGPT incorrectly thinks it exists](https://www.holovaty.com/writing/chatgpt-fake-feature/)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 11:52:10](https://news.ycombinator.com/item?id=44489359) - [7-Zip for Windows can now use more than 64 CPU threads for compression](https://www.7-zip.org/history.txt)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 06:58:10](https://news.ycombinator.com/item?id=44487451) - [Archaeologists unveil 3,500-year-old city in Peru](https://www.bbc.co.uk/news/articles/c07dmx38kyeo)
* [2025-07-07, 05:39:17](https://news.ycombinator.com/item?id=44487110) - [I Ported SAP to a 1976 CPU. It Wasn&apos;t That Slow](https://github.com/oisee/zvdb-z80/blob/master/ZVDB-Z80-ABAP.md)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 16:56:42](https://news.ycombinator.com/item?id=44482273) - [Jank Programming Language](https://jank-lang.org/)
* [2025-07-06, 16:53:41](https://news.ycombinator.com/item?id=44482245) - [TaIrTe₄ photodetectors show promise for sensitive room-temperature THz sensing](https://phys.org/news/2025-07-tairte-photodetectors-highly-sensitive-room.html)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 13:56:04](https://news.ycombinator.com/item?id=44480852) - [Making Explainable Minesweeper](https://sublevelgames.github.io/blogs/2025-07-06-making-explainable-minesweeper/)
* [2025-07-06, 12:49:31](https://news.ycombinator.com/item?id=44480363) - [The most otherworldly, mysterious forms of lightning on Earth](https://www.nationalgeographic.com/science/article/lightning-sprites-transient-luminous-events-thunderstorms)
* [2025-07-06, 09:58:26](https://news.ycombinator.com/item?id=44479302) - [Ruby 3.4 frozen string literals: What Rails developers need to know](https://www.prateekcodes.dev/ruby-34-frozen-string-literals-rails-upgrade-guide/)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
* [2025-07-06, 00:57:57](https://news.ycombinator.com/item?id=44476848) - [A Emoji Reverse Polish Notation Calculator Written in COBOL](https://github.com/ghuntley/cobol-emoji-rpn-calculator)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
