# [News Summary](https://kherrick.github.io/news-summary/)

## Tech & Development Highlights

* [A C++ implementation of a fast hash map and hash set using hopscotch hashing](https://github.com/Tessil/hopscotch-map) ([Comments](https://news.ycombinator.com/item?id=48692090))

* [Gossamer: a Rust-flavoured language with real goroutines and pause-free memory](https://gossamer-lang.org/) ([Comments](https://news.ycombinator.com/item?id=48690231))

* [Slisp: Simple Lisp compiler (Linux/amd64)](https://github.com/skx/slisp) ([Comments](https://news.ycombinator.com/item?id=48690200))

* [How PgBouncer Works](https://www.augusteo.com/blog/how-pgbouncer-works/) ([Comments](https://lobste.rs/s/n58ygj/how_pgbouncer_works))

* [Bringing Swift to the Apple II](https://yeokhengmeng.com/2026/06/swift-on-apple-ii/) ([Comments](https://lobste.rs/s/qt6tji/bringing_swift_apple_ii))

## Privacy and Regulation

* [We Can Still Stop California&apos;s 3D Printer Surveillance Scheme](https://www.eff.org/deeplinks/2026/06/we-can-still-stop-californias-3d-printer-surveillance-scheme) ([Comments](https://news.ycombinator.com/item?id=48692051))

* [U.S. government will decide who gets to use GPT-5.6](https://www.washingtonpost.com/technology/2026/06/26/openai-says-us-government-will-vet-users-its-latest-ai-model/) ([Comments](https://news.ycombinator.com/item?id=48690101))

* [PlayStation Is Deleting 551 Movies from Customers&apos; Accounts](https://kotaku.com/playstation-store-movies-digital-studio-canal-terminator-2000711013) ([Comments](https://news.ycombinator.com/item?id=48691346))

* [Automakers Could Stop Selling Cars in California Rather Than Comply With Tracking Laws](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=48690709))

## Science & Technology Innovations

* [‘Fingerprints’ of Black Hole&apos;s Event Horizon Detected For First Time](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Reed-Solomon for OCR: error correction for messy printed codes](https://github.com/chasangchual/reed-solomon-for-ocr) ([Comments](https://news.ycombinator.com/item?id=48691395))

* [Ultrasound imaging of the brain](https://alephneuro.com/blog/ultrasound-brain) ([Comments](https://news.ycombinator.com/item?id=48685558))

## Cultural and Historical Perspectives

* [The National Parks Were Reportedly Told to Stay Silent on Deaths](https://www.outsideonline.com/outdoor-adventure/environment/nps-internal-memo-deaths/?link_source=ta_first_comment&amp;taid=6a3dae4f4d2dce00016deef8&amp;utm_content=trueanthem&amp;utm_medium=social&amp;utm_source=facebook) ([Comments](https://news.ycombinator.com/item?id=48692098))

* [The Art of Kite Flying (1430–1929)](https://publicdomainreview.org/collection/art-of-kite-flying/) ([Comments](https://news.ycombinator.com/item?id=48624591))

## Industry Insights

* [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss))

* [Data centers trigger voter backlash](https://www.newsweek.com/cost-me-the-election-data-centers-trigger-voter-backlash-12118327) ([Comments](https://news.ycombinator.com/item?id=48689275))

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

* [2026-06-26, 21:19:20](https://news.ycombinator.com/item?id=48692098) - [The National Parks Were Reportedly Told to Stay Silent on Deaths](https://www.outsideonline.com/outdoor-adventure/environment/nps-internal-memo-deaths/?link_source=ta_first_comment&amp;taid=6a3dae4f4d2dce00016deef8&amp;utm_content=trueanthem&amp;utm_medium=social&amp;utm_source=facebook)
* [2026-06-26, 21:18:28](https://news.ycombinator.com/item?id=48692090) - [A C++ implementation of a fast hash map and hash set using hopscotch hashing](https://github.com/Tessil/hopscotch-map)
* [2026-06-26, 21:14:47](https://news.ycombinator.com/item?id=48692058) - [The gap between open weights LLMs and closed source LLMs](https://blog.doubleword.ai/frontier-os-llm)
* [2026-06-26, 21:13:50](https://news.ycombinator.com/item?id=48692051) - [We Can Still Stop California&apos;s 3D Printer Surveillance Scheme](https://www.eff.org/deeplinks/2026/06/we-can-still-stop-californias-3d-printer-surveillance-scheme)
* [2026-06-26, 21:00:50](https://news.ycombinator.com/item?id=48691893) - [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers#open-positions)
* [2026-06-26, 20:37:27](https://lobste.rs/s/7jmid9/l_system) - [L-system](https://en.wikipedia.org/wiki/L-system)
* [2026-06-26, 20:12:14](https://news.ycombinator.com/item?id=48691395) - [Reed-Solomon for OCR: error correction for messy printed codes](https://github.com/chasangchual/reed-solomon-for-ocr)
* [2026-06-26, 20:07:18](https://news.ycombinator.com/item?id=48691346) - [PlayStation Is Deleting 551 Movies from Customers&apos; Accounts](https://kotaku.com/playstation-store-movies-digital-studio-canal-terminator-2000711013)
* [2026-06-26, 20:00:00](https://tech.slashdot.org/story/26/06/26/0029235/microsoft-adds-another-year-to-windows-10-extended-update-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Another Year To Windows 10 Extended Update Program](https://tech.slashdot.org/story/26/06/26/0029235/microsoft-adds-another-year-to-windows-10-extended-update-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 19:12:20](https://news.ycombinator.com/item?id=48690709) - [Long Wave radio era set to end with Droitwich switch-off](https://www.bbc.com/news/articles/c74yn7v7k4qo)
* [2026-06-26, 19:05:42](https://lobste.rs/s/y4jrtn/youre_os_game_where_you_are_computer_s_os) - [youre-the-os: A game where you are a computer&apos;s OS](https://github.com/plbrault/youre-the-os)
* [2026-06-26, 18:36:13](https://lobste.rs/s/jespwh/aria_anti_patterns_you) - [ARIA, anti-patterns, and you](https://dbushell.com/2026/06/26/aria-anti-patterns-and-you/)
* [2026-06-26, 18:32:22](https://news.ycombinator.com/item?id=48690231) - [Gossamer: a Rust-flavoured language with real goroutines and pause-free memory](https://gossamer-lang.org/)
* [2026-06-26, 18:30:11](https://news.ycombinator.com/item?id=48690200) - [Slisp: Simple Lisp compiler (Linux/amd64)](https://github.com/skx/slisp)
* [2026-06-26, 18:27:04](https://lobste.rs/s/atsrpy/making_devenv_start_fast_whole_nixpkgs) - [Making devenv start fast, and the whole nixpkgs with it - devenv](https://devenv.sh/blog/2026/06/26/making-devenv-start-fast-and-the-whole-nixpkgs-with-it/)
* [2026-06-26, 18:23:14](https://news.ycombinator.com/item?id=48690101) - [U.S. government will decide who gets to use GPT-5.6](https://www.washingtonpost.com/technology/2026/06/26/openai-says-us-government-will-vet-users-its-latest-ai-model/)
* [2026-06-26, 18:04:05](https://news.ycombinator.com/item?id=48689859) - [Pre-Modern Armies for Worldbuilders, Part III: Paying for It](https://acoup.blog/2026/06/26/collections-pre-modern-armies-for-worldbuilders-part-iii-paying-for-it/)
* [2026-06-26, 17:44:00](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss) - [Automakers Could Stop Selling Cars in California Rather Than Comply With Tracking Laws](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss)
* [2026-06-26, 17:39:46](https://lobste.rs/s/qt6tji/bringing_swift_apple_ii) - [Bringing Swift to the Apple II](https://yeokhengmeng.com/2026/06/swift-on-apple-ii/)
* [2026-06-26, 17:24:25](https://news.ycombinator.com/item?id=48689277) - [What Is a Nomogram and Why Would It Interest Me?](https://lefakkomies.github.io/pynomo-doc/introduction/introduction.html#what-is-a-nomogram-and-why-would-it-interest-me)
* [2026-06-26, 17:24:21](https://news.ycombinator.com/item?id=48689275) - [Data centers trigger voter backlash](https://www.newsweek.com/cost-me-the-election-data-centers-trigger-voter-backlash-12118327)
* [2026-06-26, 17:06:55](https://news.ycombinator.com/item?id=48689028) - [Previewing GPT‑5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol/)
* [2026-06-26, 16:40:11](https://news.ycombinator.com/item?id=48688700) - [Show HN: Smart model routing directly in Claude, Codex and Cursor](https://github.com/workweave/router)
* [2026-06-26, 15:51:19](https://news.ycombinator.com/item?id=48688081) - [What is a Lithium-ion capacitor?](https://www.jtekt.co.jp/e/products/capacitor/capacitor_about.html)
* [2026-06-26, 15:42:28](https://lobste.rs/s/6q12d7/incident_report_cve_2026_lgtm) - [Incident Report: CVE-2026-LGTM](https://nesbitt.io/2026/06/26/incident-report-cve-2026-lgtm.html)
* [2026-06-26, 15:00:00](https://tech.slashdot.org/story/26/06/25/2113249/airbus-is-ordered-to-inspect-16-jets-after-cracks-are-found-in-wings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Is Ordered To Inspect 16 Jets After Cracks Are Found In Wings](https://tech.slashdot.org/story/26/06/25/2113249/airbus-is-ordered-to-inspect-16-jets-after-cracks-are-found-in-wings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 14:58:54](https://lobste.rs/s/j2ua4f/anatomy_failed_nation_state_attack) - [Anatomy of a Failed (Nation-State?) Attack](https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack/)
* [2026-06-26, 14:10:26](https://news.ycombinator.com/item?id=48686834) - [Springer Nature has removed two studies by Max Planck](https://www.science.org/content/article/why-have-papers-one-history-s-most-famous-physicists-been-retracted)
* [2026-06-26, 13:21:48](https://lobste.rs/s/rm7qnt/guixpkgs_every_guix_package_as_nix_flake) - [GuixPkgs: every Guix package, as a Nix flake](https://fzakaria.com/2026/06/25/guixpkgs-every-guix-package-as-a-nix-flake)
* [2026-06-26, 12:55:00](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss) - [The Database That Refused to Die: How Postgres Survived its Own Creators](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss)
* [2026-06-26, 12:52:38](https://lobste.rs/s/n58ygj/how_pgbouncer_works) - [How PgBouncer Works](https://www.augusteo.com/blog/how-pgbouncer-works/)
* [2026-06-26, 11:51:11](https://news.ycombinator.com/item?id=48685558) - [Ultrasound imaging of the brain](https://alephneuro.com/blog/ultrasound-brain)
* [2026-06-26, 11:22:44](https://lobste.rs/s/7qssyu/design_patterns_suck) - [Design Patterns Suck](https://luminousmen.com/post/design-patterns-suck/)
* [2026-06-26, 11:00:00](https://slashdot.org/story/26/06/25/2038233/notion-mail-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Notion Mail Is Shutting Down](https://slashdot.org/story/26/06/25/2038233/notion-mail-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 10:36:54](https://lobste.rs/s/tjpsew/chatbots_vs_ozone) - [Chatbots vs Ozone](https://blog.dshr.org/2026/05/chatbots-vs-ozone.html)
* [2026-06-26, 09:48:57](https://lobste.rs/s/yvvhve/all_you_need_is_postgresql) - [All you need is PostgreSQL](https://ebellani.github.io/blog/2026/all-you-need-is-postgresql/)
* [2026-06-26, 08:12:59](https://lobste.rs/s/dpctyb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dpctyb/what_are_you_doing_this_weekend)
* [2026-06-26, 08:06:00](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss) - [As China Looms, Taiwan Makes More Drones for Defense and the US Military](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss)
* [2026-06-26, 07:00:00](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fingerprints&apos; of Black Hole&apos;s Event Horizon Detected For First Time](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 06:17:11](https://lobste.rs/s/bmlpaq/dspi_fully_featured_audio_dsp_firmware) - [DSPi: A fully featured audio DSP firmware for the Raspberry Pi Pico (RP2040) and Pico 2 (RP2350)](https://github.com/WeebLabs/DSPi)
* [2026-06-26, 06:16:24](https://lobste.rs/s/fs8itz/usbliter8_a12_a13_securerom_exploit) - [usbliter8: An A12/A13 SecureROM exploit](https://github.com/prdgmshift/usbliter8)
* [2026-06-26, 06:15:26](https://lobste.rs/s/aldvu9/swsim_software_sim_card) - [swsim: A software SIM card](https://github.com/tomasz-lisowski/swsim)
* [2026-06-26, 04:58:29](https://lobste.rs/s/ymhp52/spir_v_backend_progress) - [SPIR-V Backend Progress](https://ziglang.org/devlog/2026/#2026-06-26)
* [2026-06-26, 03:30:00](https://hardware.slashdot.org/story/26/06/25/2056248/spain-to-require-carriers-to-keep-mobile-networks-live-during-power-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain To Require Carriers To Keep Mobile Networks Live During Power Outages](https://hardware.slashdot.org/story/26/06/25/2056248/spain-to-require-carriers-to-keep-mobile-networks-live-during-power-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 03:24:00](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss) - [Beats Studio Buds Flaw Could Let Nearby Attackers Eavesdrop on Users](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss)
* [2026-06-26, 00:21:59](https://lobste.rs/s/48rnmd/om_malik_1966_2026) - [Om Malik, 1966-2026](https://om.co/2026/06/24/1966-2026/)
* [2026-06-25, 23:00:00](https://tech.slashdot.org/story/26/06/25/2046248/polestar-banned-from-selling-cars-in-us-from-model-year-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polestar Banned From Selling Cars In US From Model Year 2027](https://tech.slashdot.org/story/26/06/25/2046248/polestar-banned-from-selling-cars-in-us-from-model-year-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss) - [Interplanetary Fossil Find?](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss)
* [2026-06-25, 22:00:00](https://yro.slashdot.org/story/26/06/25/215241/trump-administration-asks-openai-to-stagger-release-of-new-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Asks OpenAI To Stagger Release of New Model](https://yro.slashdot.org/story/26/06/25/215241/trump-administration-asks-openai-to-stagger-release-of-new-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 21:00:00](https://linux.slashdot.org/story/26/06/25/2031228/linux-foundation-launches-akrites-to-coordinate-ai-driven-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Foundation Launches Akrites To Coordinate AI-Driven Open Source Security](https://linux.slashdot.org/story/26/06/25/2031228/linux-foundation-launches-akrites-to-coordinate-ai-driven-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 20:00:00](https://news.slashdot.org/story/26/06/25/1821255/apple-raises-prices-on-macs-ipads-and-more-by-hundreds-of-dollars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Raises Prices On Macs, iPads, and More By Hundreds of Dollars](https://news.slashdot.org/story/26/06/25/1821255/apple-raises-prices-on-macs-ipads-and-more-by-hundreds-of-dollars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 19:12:44](https://lobste.rs/s/y0sy74/oxide_rack_3d_explorer) - [Oxide Rack 3D Explorer](https://explorer.oxide.computer/)
* [2026-06-25, 19:00:00](https://yro.slashdot.org/story/26/06/25/1816247/lastpass-says-hackers-stole-customer-support-case-data-during-klue-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LastPass Says Hackers Stole Customer Support Case Data During Klue Breach](https://yro.slashdot.org/story/26/06/25/1816247/lastpass-says-hackers-stole-customer-support-case-data-during-klue-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 18:12:00](https://yro.slashdot.org/story/26/06/25/1810226/anthropic-says-alibaba-must-be-punished-for-largest-claude-cloning-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Says Alibaba Must Be Punished For Largest Claude Cloning Attack](https://yro.slashdot.org/story/26/06/25/1810226/anthropic-says-alibaba-must-be-punished-for-largest-claude-cloning-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 17:54:00](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss) - [Cory Doctorow on the Right — and Wrong — Way to Criticize AI](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss)
* [2026-06-25, 17:00:00](https://slashdot.org/story/26/06/25/1624241/ford-rehires-350-engineers-after-ai-fails-to-preserve-expertise-or-train-juniors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Rehires 350 Engineers After AI Fails To Preserve Expertise or Train Juniors](https://slashdot.org/story/26/06/25/1624241/ford-rehires-350-engineers-after-ai-fails-to-preserve-expertise-or-train-juniors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 16:00:00](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Micron Locks In Historically High Memory Prices For Five Years](https://hardware.slashdot.org/story/26/06/25/0559247/micron-locks-in-historically-high-memory-prices-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 15:07:27](https://lobste.rs/s/csgzki/exhaustion_talking_tool) - [The Exhaustion of Talking to a Tool](https://ohadravid.github.io/posts/2026-06-tool-talking/)
* [2026-06-25, 15:00:00](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Starts Lowering Play Store Fees, Making Good On Epic Games Settlement](https://news.slashdot.org/story/26/06/25/0554234/google-starts-lowering-play-store-fees-making-good-on-epic-games-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 14:45:36](https://lobste.rs/s/t9cawj/os9map_openstreetmap_for_mac_os_9) - [OS9Map: OpenStreetMap for Mac OS 9](https://yllan.org/software/OS9Map/)
* [2026-06-25, 14:11:11](https://lobste.rs/s/omq8rt/vibecoding_gets_emacs_patch_rejected) - [Vibecoding gets Emacs patch rejected](https://xlii.space/eng/honesty-gets-emacs-patch-rejected/)
* [2026-06-25, 13:58:21](https://news.ycombinator.com/item?id=48673527) - [Show HN: Autofit2 – End-to-end pipeline for multilingual text classification](https://github.com/neospe/autofit2)
* [2026-06-25, 13:57:07](https://lobste.rs/s/madoeq/font_family_recommendations) - [font-family recommendations](https://chrismorgan.info/font-family)
* [2026-06-25, 13:10:00](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss) - [Die Analysis of the 8087 Math Coprocessor&apos;s Fast Bit Shifter](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss)
* [2026-06-25, 11:21:00](https://lobste.rs/s/uge7mm/new_bitcast_semantics_llvm_backend) - [New @bitCast Semantics and LLVM Backend Improvements](https://ziglang.org/devlog/2026/?2026-06-25#2026-06-25)
* [2026-06-25, 11:00:00](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Shows That Tall Vehicle Hoods Cause Hundreds More Deaths Per Year](https://tech.slashdot.org/story/26/06/25/0531201/new-study-shows-that-tall-vehicle-hoods-cause-hundreds-more-deaths-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 08:28:00](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - [Nvidia&apos;s New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss)
* [2026-06-25, 06:20:45](https://lobste.rs/s/oyurwh/xteink_x4_e_ink_reader) - [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/)
* [2026-06-25, 03:45:00](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss) - [Brave Gives Linux Users Its Stripped Down Origin Browser for Free](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 14:29:17](https://news.ycombinator.com/item?id=48660522) - [A human postmortem of the 1996 AOL outage](https://ngrok.com/blog/aol-was-down-1996)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 08:46:16](https://news.ycombinator.com/item?id=48656986) - [Show HN: WebBase-III – dBASE III rebuilt in the browser with its own interpreter](https://github.com/DDecoene/WebBaseIII)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 20:04:33](https://news.ycombinator.com/item?id=48650550) - [LaTeX.wasm: LaTeX Engines in Browsers](https://www.swiftlatex.com/)
* [2026-06-23, 17:45:20](https://news.ycombinator.com/item?id=48648550) - [My Steam Machine is a 50ft HDMI cable](https://blog.matthewbrunelle.com/my-steam-machine-is-a-50ft-hdmi-cable/)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 12:45:09](https://news.ycombinator.com/item?id=48644111) - [The \&quot;Bizarre Headgear\&quot; exhibit at the Sam Noble museum](https://svpow.com/2026/05/15/the-bizarre-headgear-exhibit-at-the-sam-noble-museum-is-incredible/)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 11:38:25](https://news.ycombinator.com/item?id=48643459) - [Modern GPU Programming for MLSys](https://mlc.ai/modern-gpu-programming-for-mlsys/)
* [2026-06-23, 09:39:35](https://news.ycombinator.com/item?id=48642510) - [MicroVMs: Run isolated sandboxes with full lifecycle control](https://aws.amazon.com/blogs/aws/run-isolated-sandboxes-with-full-lifecycle-control-aws-lambda-introduces-microvms/)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-22, 22:43:48](https://news.ycombinator.com/item?id=48637433) - [Bipartite Matching Is in NC](https://scottaaronson.blog/?p=9851)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-22, 01:39:57](https://news.ycombinator.com/item?id=48624591) - [The Art of Kite Flying (1430–1929)](https://publicdomainreview.org/collection/art-of-kite-flying/)
