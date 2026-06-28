# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [A Typed, Algebraic Approach to Parsing](https://www.cl.cam.ac.uk/~nk480/parsing.pdf) - Explore a structured and mathematical approach to parsing using typed algebra in programming contexts. [Comments](https://lobste.rs/s/ljvfaf/typed_algebraic_approach_parsing)

* [Installing SerenityOS on My Old ThinkPad T60](https://btxx.org/posts/serenity-t60/) - A technician recounts their experience of giving new life to an old ThinkPad using the SerenityOS. [Comments](https://lobste.rs/s/igaqk9/installing_serenityos_on_my_old_thinkpad)

* [Towards Understandable Software](https://gracefulliberty.com/articles/towards-understandable-software/) - A critical look at how software can be designed and developed to be more comprehensible and user-friendly. [Comments](https://lobste.rs/s/vgqcgi/towards_understandable_software)

* [Nourish - a wayland compositor with infinite zoom and pan](https://github.com/y5-snowies/nourish) - A new dynamic Wayland compositor that offers unique navigation features like infinite zooming and panning. [Comments](https://lobste.rs/s/cychnm/nourish_wayland_compositor_with)

* [How VictoriaLogs Stores Your Logs in a Columnar Layout](https://victoriametrics.com/blog/victorialogs-internals-columnar-storage-on-disk/) - An exploration into data storage efficiency through a columnar layout for logs in VictoriaLogs. [Comments](https://lobste.rs/s/2m10ql/how_victorialogs_stores_your_logs)

* [MAX models can now run on Apple silicon GPUs](https://forum.modular.com/t/max-models-can-now-run-on-apple-silicon-gpus/3283) - An advancement in leveraging Apple silicon GPUs for running MAX models, enhancing their functionality. [Comments](https://lobste.rs/s/4srepl/max_models_can_now_run_on_apple_silicon)

* [Wayfinder Router: deterministic routing of queries between local and hosted LLM](https://github.com/itsthelore/wayfinder-router) - Introduction of a novel approach to routing queries for large language models using deterministic methods. [Comments](https://news.ycombinator.com/item?id=48704373)

## Artificial Intelligence and Computing

* [We have Mythos at Home: GLM 5.2 beats Claude in our Cyber Benchmarks](https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks) - Analysis of how GLM 5.2 outperforms Claude AI in recent cybersecurity benchmarks. [Comments](https://lobste.rs/s/tinc3e/we_have_mythos_at_home_glm_5_2_beats_claude)

* [Developer AI Token Costs Could Exceed Their Salaries in Two Years](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into the growing cost of AI tokens and their economic impact on software developers. [Comments](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google limits Meta&apos;s use of its Gemini AI models](https://www.cnbc.com/2026/06/28/google-limits-metas-use-of-its-gemini-ai-models-ft-reports.html) - Google imposes restrictions on Meta for using its proprietary Gemini AI systems. [Comments](https://news.ycombinator.com/item?id=48707103)

## Privacy and Surveillance

* [California legislature agrees to upload driver&apos;s licenses to national database](https://papersplease.org/wp/2026/06/27/california-legislature-agrees-to-upload-drivers-licenses-to-national-database/) - Discussion on new legislation mandating the upload of driver’s license data to a national database. [Comments](https://news.ycombinator.com/item?id=48708139)

* [Flock cameras track more than your license plate, and they&apos;re spreading fast](https://www.engadget.com/2203000/flock-cameras-recording-license-plate/) - The increasing presence and scope of license plate tracking cameras. [Comments](https://news.ycombinator.com/item?id=48707673)

* [EU to legislate about Chat Control behind closed doors](https://www.patrick-breyer.de/en/double-threat-to-private-communications-undemocratic-chat-control-backroom-deals-and-imminent-concessions-spark-relaunch-of-fightchatcontrol-eu/) - Concerns over private communication legislation being negotiated without transparency in the EU. [Comments](https://news.ycombinator.com/item?id=48707719)

## Historical and Scientific Discoveries

* [Scroll Burned in 79 AD Volcanic Eruption Finally Deciphered Using AI](https://science.slashdot.org/story/26/06/27/1825220/scroll-burned-in-79-ad-volcanic-eruption-finally-deciphered-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Use of AI to uncover the text within ancient scrolls damaged by a volcanic eruption nearly 2000 years ago. [Comments](https://science.slashdot.org/story/26/06/27/1825220/scroll-burned-in-79-ad-volcanic-eruption-finally-deciphered-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-06-28, 15:45:12](https://lobste.rs/s/ljvfaf/typed_algebraic_approach_parsing) - [A Typed, Algebraic Approach to Parsing](https://www.cl.cam.ac.uk/~nk480/parsing.pdf)
* [2026-06-28, 15:34:00](https://entertainment.slashdot.org/story/26/06/27/0420250/supergirl-movie-criticized-for-script-poor-visual-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Supergirl&apos; Movie Criticized for Script, Poor Visual Effects](https://entertainment.slashdot.org/story/26/06/27/0420250/supergirl-movie-criticized-for-script-poor-visual-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 15:26:14](https://news.ycombinator.com/item?id=48708182) - [Show HN: Zanagrams](https://zanagrams.com/)
* [2026-06-28, 15:22:51](https://news.ycombinator.com/item?id=48708139) - [California legislature agrees to upload driver&apos;s licenses to national database](https://papersplease.org/wp/2026/06/27/california-legislature-agrees-to-upload-drivers-licenses-to-national-database/)
* [2026-06-28, 15:03:59](https://lobste.rs/s/igaqk9/installing_serenityos_on_my_old_thinkpad) - [Installing SerenityOS on My Old ThinkPad T60](https://btxx.org/posts/serenity-t60/)
* [2026-06-28, 14:58:01](https://lobste.rs/s/tinc3e/we_have_mythos_at_home_glm_5_2_beats_claude) - [We have Mythos at Home: GLM 5.2 beats Claude in our Cyber Benchmarks](https://semgrep.dev/blog/2026/we-have-mythos-at-home-glm-52-beats-claude-in-our-cyber-benchmarks)
* [2026-06-28, 14:50:20](https://lobste.rs/s/vgqcgi/towards_understandable_software) - [Towards Understandable Software](https://gracefulliberty.com/articles/towards-understandable-software/)
* [2026-06-28, 14:46:03](https://news.ycombinator.com/item?id=48707769) - [Michigan bill would bar employers from requiring after-hours coms with workers](https://www.cbsnews.com/detroit/news/workplace-boundaries-act-employees-after-hours/)
* [2026-06-28, 14:44:56](https://news.ycombinator.com/item?id=48707763) - [5k Restaurant Menus, Years 1880-1920](https://pudding.cool/2026/06/menu-collection/)
* [2026-06-28, 14:40:13](https://news.ycombinator.com/item?id=48707719) - [EU to legislate about Chat Control behind closed doors](https://www.patrick-breyer.de/en/double-threat-to-private-communications-undemocratic-chat-control-backroom-deals-and-imminent-concessions-spark-relaunch-of-fightchatcontrol-eu/)
* [2026-06-28, 14:35:26](https://news.ycombinator.com/item?id=48707673) - [Flock cameras track more than your license plate, and they&apos;re spreading fast](https://www.engadget.com/2203000/flock-cameras-recording-license-plate/)
* [2026-06-28, 14:05:47](https://news.ycombinator.com/item?id=48707361) - [EU Open Sources Ten-Year Network Development Planning Tools](https://github.com/open-energy-transition/open-tyndp)
* [2026-06-28, 13:34:14](https://news.ycombinator.com/item?id=48707146) - [Austria Lobbies EU to Host Anthropic After US Access Curbs](https://www.bloomberg.com/news/articles/2026-06-28/austria-lobbies-eu-to-host-anthropic-after-us-access-curbs)
* [2026-06-28, 13:30:06](https://news.ycombinator.com/item?id=48707103) - [Google limits Meta&apos;s use of its Gemini AI models](https://www.cnbc.com/2026/06/28/google-limits-metas-use-of-its-gemini-ai-models-ft-reports.html)
* [2026-06-28, 13:18:41](https://lobste.rs/s/mq245g/regular_expressions_work_everywhere) - [Regular expressions that work “everywhere”](https://www.johndcook.com/blog/2026/06/23/regex-everywhere/)
* [2026-06-28, 12:55:36](https://news.ycombinator.com/item?id=48706877) - [The origins of the school system aimed to produce independent, critical thinkers](https://www.cbc.ca/radio/ideas/humboldt-education-system-bildung-1.7172093)
* [2026-06-28, 12:44:24](https://news.ycombinator.com/item?id=48706814) - [The curious case of the disappearing Polish S (2015)](https://aresluna.org/the-curious-case-of-the-disappearing-polish-s/)
* [2026-06-28, 12:41:45](https://news.ycombinator.com/item?id=48706796) - [The MUMPS 76 Primer – anniversary edition](https://github.com/rochus-keller/MUMPS/blob/main/docs/MUMPS_Primer.adoc)
* [2026-06-28, 12:27:33](https://news.ycombinator.com/item?id=48706714) - [A way to exclude sensitive files issue still open for OpenAI Codex](https://github.com/openai/codex/issues/2847)
* [2026-06-28, 12:23:53](https://lobste.rs/s/2m10ql/how_victorialogs_stores_your_logs) - [How VictoriaLogs Stores Your Logs in a Columnar Layout](https://victoriametrics.com/blog/victorialogs-internals-columnar-storage-on-disk/)
* [2026-06-28, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss) - [‘Cost Me the Election’: Data Centers Trigger Voter Backlash](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss)
* [2026-06-28, 11:34:00](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer AI Token Costs Could Exceed Their Salaries in Two Years](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 09:53:58](https://news.ycombinator.com/item?id=48705910) - [DLL that was not present in memory despite not being formally unloaded](https://devblogs.microsoft.com/oldnewthing/20260625-00/?p=112467)
* [2026-06-28, 09:21:19](https://lobste.rs/s/4srepl/max_models_can_now_run_on_apple_silicon) - [MAX models can now run on Apple silicon GPUs](https://forum.modular.com/t/max-models-can-now-run-on-apple-silicon-gpus/3283)
* [2026-06-28, 07:56:46](https://lobste.rs/s/cychnm/nourish_wayland_compositor_with) - [Nourish - a wayland compositor with infinite zoom and pan](https://github.com/y5-snowies/nourish)
* [2026-06-28, 07:36:00](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss) - [I Stored a Website in a Favicon](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss)
* [2026-06-28, 07:34:00](https://yro.slashdot.org/story/26/06/28/0459214/an-amazon-seller-says-they-were-offered-a-way-to-bribe-an-amazon-employee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Amazon Seller Says They Were Offered a Way to Bribe an Amazon Employee](https://yro.slashdot.org/story/26/06/28/0459214/an-amazon-seller-says-they-were-offered-a-way-to-bribe-an-amazon-employee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 05:51:51](https://lobste.rs/s/64s29h/call_for_participation) - [Call for participation](https://emacsconf.org/2026/cfp/)
* [2026-06-28, 04:57:23](https://lobste.rs/s/qr1zhy/building_open_source_robot_vacuum_meet) - [Building an Open-Source Robot Vacuum — Meet oomwoo](https://makerspet.com/blog/building-an-open-source-robot-vacuum-meet-oomwoo/)
* [2026-06-28, 04:48:32](https://news.ycombinator.com/item?id=48704454) - [Bashblog – a single bash script to create blogs](https://github.com/cfenollosa/bashblog)
* [2026-06-28, 04:34:00](https://hardware.slashdot.org/story/26/06/28/032226/ibm-is-getting-ready-to-scale-quantum-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM is Getting Ready to Scale Quantum Computing](https://hardware.slashdot.org/story/26/06/28/032226/ibm-is-getting-ready-to-scale-quantum-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 04:31:18](https://news.ycombinator.com/item?id=48704373) - [Wayfinder Router: deterministic routing of queries between local and hosted LLM](https://github.com/itsthelore/wayfinder-router)
* [2026-06-28, 03:12:48](https://lobste.rs/s/xsig5e/working_around_dragons_with_lemote) - [Working around dragons with the Lemote Yeeloong laptop and OpenBSD](http://oldvcr.blogspot.com/2026/06/working-around-dragons-with-lemote.html)
* [2026-06-28, 02:54:00](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss) - [ASML Denies US Government Report That its EUV Chipmaking Tool Was Shipped to China](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss)
* [2026-06-28, 02:23:08](https://news.ycombinator.com/item?id=48703759) - [Marfa Public Radio Puts You to Sleep](https://www.marfapublicradio.org/podcast/marfa-public-radio-puts-you-to-sleep)
* [2026-06-28, 01:34:00](https://hardware.slashdot.org/story/26/06/28/0020230/renewable-energy-just-hit-30-of-americas-electricity-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Renewable Energy Just Hit 30% of America&apos;s Electricity Generation](https://hardware.slashdot.org/story/26/06/28/0020230/renewable-energy-just-hit-30-of-americas-electricity-generation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 01:22:30](https://news.ycombinator.com/item?id=48703418) - [Turning music into a chore is how I became a musician (2022)](https://the.scapegoat.dev/turning-music-into-a-chore-is-what-made-me-an-artist/)
* [2026-06-28, 01:21:20](https://news.ycombinator.com/item?id=48703412) - [Show HN: Decomp Academy – Learn to decompile GameCube games into matching C](https://decomp-academy.dev)
* [2026-06-28, 00:46:52](https://news.ycombinator.com/item?id=48703258) - [AMD Strix Halo RDMA Cluster Setup Guide](https://github.com/kyuz0/amd-strix-halo-vllm-toolboxes/blob/main/rdma_cluster/setup_guide.md)
* [2026-06-27, 23:32:58](https://news.ycombinator.com/item?id=48702848) - [WAL-RUS: a Rust Rewrite of WAL-G for PostgreSQL Backups](https://clickhouse.com/blog/walrus-postgres-backups-in-rust)
* [2026-06-27, 22:52:00](https://slashdot.org/story/26/06/27/2249212/how-a-seemingly-harmless-image-can-jailbreak-vision-language-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Seemingly Harmless Image Can Jailbreak Vision-Language AI Models](https://slashdot.org/story/26/06/27/2249212/how-a-seemingly-harmless-image-can-jailbreak-vision-language-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 22:42:05](https://lobste.rs/s/xz51yj/it_s_dead_jim_uefi_ca_expiry) - [It&apos;s dead, Jim! (UEFI CA expiry)](https://blog.einval.com/2026/06/27#its_dead_jim)
* [2026-06-27, 22:21:56](https://lobste.rs/s/klkabn/old_computer_challenge) - [The Old Computer Challenge](http://occ.sdf.org/)
* [2026-06-27, 22:11:28](https://news.ycombinator.com/item?id=48702273) - [Choosing a Public DNS Resolver](https://evilbit.de/dns-resolver-guide.html)
* [2026-06-27, 22:10:00](https://soylentnews.org/article.pl?sid=26/06/26/1431252&amp;from=rss) - [Cloudflare Teams Up With Big Browsers to Help Websites Tell Welcome From Unwelcome Visitors](https://soylentnews.org/article.pl?sid=26/06/26/1431252&amp;from=rss)
* [2026-06-27, 21:48:00](https://news.slashdot.org/story/26/06/27/2146244/frances-heat-this-week-was-worse-than-a-dire-scenario-imagined-for-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France&apos;s Heat This Week Was Worse Than a Dire Scenario Imagined For 2050](https://news.slashdot.org/story/26/06/27/2146244/frances-heat-this-week-was-worse-than-a-dire-scenario-imagined-for-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 21:07:28](https://lobste.rs/s/51qnh7/feature_oxcaml_more_languages_should) - [The feature in OxCaml that more languages should steal](https://theconsensus.dev/p/2026/06/27/the-feature-in-oxcaml-more-languages-should-steal.html)
* [2026-06-27, 20:43:00](https://science.slashdot.org/story/26/06/27/2042204/max-planck-slapped-with-two-paper-retractions-by-suspected-rogue-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Max Planck Slapped With Two Paper Retractions By Suspected Rogue Algorithm](https://science.slashdot.org/story/26/06/27/2042204/max-planck-slapped-with-two-paper-retractions-by-suspected-rogue-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 19:47:00](https://soylentnews.org/article.pl?sid=26/06/26/1429216&amp;from=rss) - [OpenC6 BIOS Project Brings PC-Like Firmware to ESP32-C6 MCU](https://soylentnews.org/article.pl?sid=26/06/26/1429216&amp;from=rss)
* [2026-06-27, 19:39:10](https://lobste.rs/s/bgnc5q/prism_impure_functional_language_with) - [Prism: An Impure Functional Language With Typed Effects](https://www.stephendiehl.com/posts/prism/)
* [2026-06-27, 19:34:00](https://science.slashdot.org/story/26/06/27/1825220/scroll-burned-in-79-ad-volcanic-eruption-finally-deciphered-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scroll Burned in 79 AD Volcanic Eruption Finally Deciphered Using AI](https://science.slashdot.org/story/26/06/27/1825220/scroll-burned-in-79-ad-volcanic-eruption-finally-deciphered-using-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 18:34:00](https://yro.slashdot.org/story/26/06/27/0635220/california-sheriff-says-their-drone-disarmed-a-suspect-shares-video-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Sheriff Says Their Drone Disarmed a Suspect, Shares Video on Instagram](https://yro.slashdot.org/story/26/06/27/0635220/california-sheriff-says-their-drone-disarmed-a-suspect-shares-video-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 17:34:00](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Non-Invasive Stimulation of the Brain Ended Opioid Addiction, Cigarette Craving](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 17:24:00](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss) - [Goalkeepers Beware: Trionda World Cup Ball Hits ‘Crisis’ Point at Certain Speed](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss)
* [2026-06-27, 16:34:00](https://news.slashdot.org/story/26/06/27/0538246/fsf-librelocal-organized-from-prison-by-iranian-man-jailed-for-cyber-crimes-after-promoting-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF &apos;LibreLocal&apos; Organized From Prison by Iranian Man Jailed for &apos;Cyber-Crimes&apos; After Promoting Free Software](https://news.slashdot.org/story/26/06/27/0538246/fsf-librelocal-organized-from-prison-by-iranian-man-jailed-for-cyber-crimes-after-promoting-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 16:19:10](https://lobste.rs/s/b2emi7/guards_guards) - [Guards! Guards](https://hauleth.dev/post/guards-guards/)
* [2026-06-27, 15:34:00](https://developers.slashdot.org/story/26/06/25/0546238/forget-prompt-engineering-loop-engineering-is-all-the-rage-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Forget Prompt Engineering: &apos;Loop Engineering&apos; Is All the Rage Now](https://developers.slashdot.org/story/26/06/25/0546238/forget-prompt-engineering-loop-engineering-is-all-the-rage-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 15:10:14](https://lobste.rs/s/boap41/peek_into_reddit_s_anti_spam_internals) - [A peek into Reddit&apos;s anti-spam internals](https://lyra.horse/blog/2026/06/reddit-spam-internals/)
* [2026-06-27, 14:31:00](https://news.ycombinator.com/item?id=48698617) - [Anonymous GitHub account mass-dropping undisclosed 0-days](https://github.com/bikini/exploitarium)
* [2026-06-27, 14:29:27](https://lobste.rs/s/ciwbiq/linux_7_2_improves_anonymous_unnamed_pipe) - [Linux 7.2 Improves Anonymous/Unnamed Pipe Performance For Shell Pipelines &amp; More](https://www.phoronix.com/news/Linux-72-Faster-Anon-Pipe-Write)
* [2026-06-27, 14:18:23](https://lobste.rs/s/xmsj3r/data_access_patterns_makes_your_cpu) - [Data Access Patterns That Makes Your CPU Really Angry](https://blog.weineng.me/posts/slowest_add/)
* [2026-06-27, 12:53:26](https://lobste.rs/s/z7eoo7/excessive_nil_pointer_checks_go) - [Excessive nil pointer checks in Go](https://konradreiche.com/blog/excessive-nil-pointer-checks-in-go/)
* [2026-06-27, 12:43:00](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss) - [The Memory Crisis Is Getting So Bad That Even Retro RAM Prices Are Becoming Ridiculous](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss)
* [2026-06-27, 12:40:25](https://lobste.rs/s/oaq69a/shard_your_locks_benchmarking_6_go_cache) - [Shard your locks: benchmarking 6 Go cache designs](https://strebkov.dev/posts/shard-your-locks/)
* [2026-06-27, 12:00:00](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Plans To Build &apos;Starpipe&apos; Natural Gas Pipeline To Fuel Starship Rockets](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 09:17:42](https://lobste.rs/s/n2r6r6/how_think_about_ai_cory_doctorow_on_big) - [\&quot;How to Think About AI\&quot;: Cory Doctorow on Big Tech, Understanding AI, Labor Automation &amp; More](https://www.youtube.com/watch?v=OBUzl_IaWIw)
* [2026-06-27, 09:02:59](https://lobste.rs/s/zxt3em/openzl) - [OpenZL](https://openzl.org/)
* [2026-06-27, 08:00:00](https://news.slashdot.org/story/26/06/27/0257237/bitcoin-drops-again-skeptical-investment-strategist-calls-it-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Drops Again. Skeptical Investment Strategist Calls It &apos;Useless&apos;](https://news.slashdot.org/story/26/06/27/0257237/bitcoin-drops-again-skeptical-investment-strategist-calls-it-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss) - [Wikipedia Cofounder Larry Sanger Blocked From Editing Wikipedia](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss)
* [2026-06-27, 07:54:36](https://lobste.rs/s/klhhzq/fifa_interactive_bracket_world_cup) - [FIFA Interactive Bracket (World Cup)](https://worldcup.reeseric.ci)
* [2026-06-27, 03:13:00](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss) - [Pluralistic: Spying on Kids to Save Kids From Spying is Very, Very Stupid](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss)
* [2026-06-27, 00:08:45](https://lobste.rs/s/s138jl/nlnet_labs_llm_policy) - [NLNet Labs LLM Policy](https://nlnetlabs.nl/llm-policy/)
* [2026-06-26, 22:26:00](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss) - [Day-to-Day Cyber Disruptions Driving Loss for SMEs, Finds Report](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss)
* [2026-06-26, 18:53:40](https://news.ycombinator.com/item?id=48690481) - [Designing a Personal Pebble Watchface](https://www.jonashietala.se/blog/2026/06/26/designing_a_personal_pebble_watchface/)
* [2026-06-26, 17:44:00](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss) - [Automakers Could Stop Selling Cars in California Rather Than Comply With Tracking Laws](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss)
* [2026-06-26, 12:55:00](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss) - [The Database That Refused to Die: How Postgres Survived its Own Creators](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss)
* [2026-06-26, 12:49:48](https://news.ycombinator.com/item?id=48686032) - [Space Shuttle Endeavour&apos;s 20-story vertical display](https://californiasciencecenter.org/about-us/samuel-oschin-air-and-space-center/go-for-stack)
* [2026-06-26, 12:41:31](https://news.ycombinator.com/item?id=48685967) - [Engineering for Bounded Cognition](https://shapeofthesystem.com/posts/2026/02/03/bounded-cognition)
* [2026-06-26, 08:06:00](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss) - [As China Looms, Taiwan Makes More Drones for Defense and the US Military](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss)
* [2026-06-26, 03:24:00](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss) - [Beats Studio Buds Flaw Could Let Nearby Attackers Eavesdrop on Users](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss)
* [2026-06-25, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss) - [Interplanetary Fossil Find?](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss)
* [2026-06-25, 17:54:00](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss) - [Cory Doctorow on the Right — and Wrong — Way to Criticize AI](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss)
* [2026-06-25, 14:48:07](https://news.ycombinator.com/item?id=48674290) - [Do Babies Dream of Baby Sheep?](https://devz.cl/posts/do-babies-dream-of-electric-sheep/)
* [2026-06-25, 13:10:00](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss) - [Die Analysis of the 8087 Math Coprocessor&apos;s Fast Bit Shifter](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss)
* [2026-06-25, 12:13:24](https://news.ycombinator.com/item?id=48672232) - [Regular expressions that work “everywhere”](https://www.johndcook.com/blog/2026/06/23/regex-everywhere/)
* [2026-06-25, 08:28:00](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - [Nvidia&apos;s New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss)
* [2026-06-25, 08:26:54](https://news.ycombinator.com/item?id=48670579) - [Bringing Swift to the Apple ][](https://yeokhengmeng.com/2026/06/swift-on-apple-ii/)
* [2026-06-25, 03:45:00](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss) - [Brave Gives Linux Users Its Stripped Down Origin Browser for Free](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
