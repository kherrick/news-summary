# [News Summary](https://kherrick.github.io/news-summary/)

## Life Sciences Discoveries

* [Researchers just discovered a new class of life living inside humans](https://bgr.com/science/researchers-just-discovered-an-entirely-new-class-of-life-living-inside-humans/) ([comments](https://news.ycombinator.com/item?id=42904578))

## Data Breaches and Security Alerts

* [Medical billing firm Medusind discloses breach affecting 360k people](https://www.bleepingcomputer.com/news/security/medical-billing-firm-medusind-discloses-breach-affecting-360-000-people/) ([comments](https://news.ycombinator.com/item?id=42904244))

* [America's FDA Warns About Backdoor Found in Chinese Company's Patient Monitors](https://science.slashdot.org/story/25/02/01/0632248/americas-fda-warns-about-backdoor-found-in-chinese-companys-patient-monitors?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42902936))

* [Malicious PDF Links Hidden in Text Message Scam Impersonating US Postal Service](https://it.slashdot.org/story/25/02/01/207203/malicious-pdf-links-hidden-in-text-message-scam-impersonating-us-postal-service?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Innovation

* [How to Run DeepSeek R1 Distilled Reasoning Models on RyzenAI and Radeon GPUs](https://www.guru3d.com/story/amd-explains-how-to-run-deepseek-r1-distilled-reasoning-models-on-amd-ryzen-ai-and-radeon/) ([comments](https://news.ycombinator.com/item?id=42904116))

* [Apple is open sourcing Swift Build](https://www.swift.org/blog/the-next-chapter-in-swift-build-technologies/) ([comments](https://news.ycombinator.com/item?id=42899703))

* [New thermogalvanic tech paves way for more efficient fridges](https://cosmosmagazine.com/science/chemistry/improved-fridge-technology/) ([comments](https://news.ycombinator.com/item?id=42902624))

## Social Media and Open Source Developments

* [US Blocks Open Source 'Help' From These Countries](https://yro.slashdot.org/story/25/02/01/2356252/us-blocks-open-source-help-from-these-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42903803))

* [Bluesky Grows to 30 Million Users. Threads Adds 20 Million More Just in January](https://tech.slashdot.org/story/25/02/01/0749206/bluesky-grows-to-30-million-users-threads-adds-20-million-more-just-in-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Culture and Writing

* [The Power of Poetry: Why Everyone Should Write](https://domofutu.substack.com/p/the-power-of-poetry) ([comments](https://news.ycombinator.com/item?id=42903803))

* [Hell Is Overconfident Developers Writing Encryption Code](https://soatok.blog/2025/01/31/hell-is-overconfident-developers-writing-encryption-code/) ([comments](https://lobste.rs/s/sv1ulo/hell_is_overconfident_developers))

## Interesting Historical and Scientific Explorations

* [Discovery of collagen in fossil bone could unlock new insights into dinosaurs](https://news.liverpool.ac.uk/2025/01/31/discovery-of-collagen-in-fossil-bone-could-unlock-new-insights-into-dinosaurs/) ([comments](https://news.ycombinator.com/item?id=42893196))

* [The origin and unexpected evolution of the word 'mainframe'](https://www.righto.com/2025/02/origin-of-mainframe-term.html) ([comments](https://news.ycombinator.com/item?id=42901184))

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

* [2025-02-02, 01:20:54](https://news.ycombinator.com/item?id=42904578) - [Researchers just discovered an new class of life living inside humans](https://bgr.com/science/researchers-just-discovered-an-entirely-new-class-of-life-living-inside-humans/)
* [2025-02-02, 00:59:00](https://hardware.slashdot.org/story/25/02/01/2235213/one-blogger-helped-spark-nvidias-600b-stock-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [One Blogger Helped Spark NVIDIA's $600B Stock Collapse](https://hardware.slashdot.org/story/25/02/01/2235213/one-blogger-helped-spark-nvidias-600b-stock-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-02, 00:42:27](https://news.ycombinator.com/item?id=42904244) - [Medical billing firm Medusind discloses breach affecting 360k people](https://www.bleepingcomputer.com/news/security/medical-billing-firm-medusind-discloses-breach-affecting-360-000-people/)
* [2025-02-02, 00:27:05](https://news.ycombinator.com/item?id=42904116) - [How to Run DeepSeek R1 Distilled Reasoning Models on RyzenAI and Radeon GPUs](https://www.guru3d.com/story/amd-explains-how-to-run-deepseek-r1-distilled-reasoning-models-on-amd-ryzen-ai-and-radeon/)
* [2025-02-01, 23:59:00](https://yro.slashdot.org/story/25/02/01/2356252/us-blocks-open-source-help-from-these-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Blocks Open Source 'Help' From These Countries](https://yro.slashdot.org/story/25/02/01/2356252/us-blocks-open-source-help-from-these-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 23:45:48](https://news.ycombinator.com/item?id=42903803) - [The Power of Poetry: Why Everyone Should Write](https://domofutu.substack.com/p/the-power-of-poetry)
* [2025-02-01, 23:17:36](https://news.ycombinator.com/item?id=42903576) - [Avoid ISP Routers (2024)](https://routersecurity.org/ISProuters.php)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 22:24:54](https://lobste.rs/s/csiw6m/mtg_wiki_is_now_at_mtg_wiki) - [The MTG Wiki is now at mtg.wiki](https://scryfall.com/blog/the-mtg-wiki-is-now-at-mtg-wiki-hosted-by-scryfall-230)
* [2025-02-01, 22:12:00](https://science.slashdot.org/story/25/02/01/0632248/americas-fda-warns-about-backdoor-found-in-chinese-companys-patient-monitors?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's FDA Warns About Backdoor Found in Chinese Company's Patient Monitors](https://science.slashdot.org/story/25/02/01/0632248/americas-fda-warns-about-backdoor-found-in-chinese-companys-patient-monitors?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 22:11:45](https://news.ycombinator.com/item?id=42902936) - [RLHF Book](https://rlhfbook.com/)
* [2025-02-01, 21:46:16](https://news.ycombinator.com/item?id=42902691) - [Macrodata Refinement](https://lumon-industries.com/)
* [2025-02-01, 21:39:03](https://news.ycombinator.com/item?id=42902624) - [New thermogalvanic tech paves way for more efficient fridges](https://cosmosmagazine.com/science/chemistry/improved-fridge-technology/)
* [2025-02-01, 21:12:37](https://news.ycombinator.com/item?id=42902395) - [A bookmarklet to kill sticky headers (2013)](https://alisdair.mcdiarmid.org/kill-sticky-headers/)
* [2025-02-01, 21:09:00](https://it.slashdot.org/story/25/02/01/0659255/sensitive-deepseek-data-was-exposed-to-the-web-cybersecurity-firm-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sensitive DeepSeek Data Was Exposed to the Web, Cybersecurity Firm Says](https://it.slashdot.org/story/25/02/01/0659255/sensitive-deepseek-data-was-exposed-to-the-web-cybersecurity-firm-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 21:00:34](https://news.ycombinator.com/item?id=42902267) - [MindsDB (YC W20) Is Hiring an Office Manager in SF](https://grnh.se/83c3fffa7us)
* [2025-02-01, 20:55:32](https://lobste.rs/s/utupyb/allow_necromancy_avoid_reposts_enable) - [Allow Necromancy: To Avoid Reposts, Enable Comments on Old Posts](https://lobste.rs/s/utupyb/allow_necromancy_avoid_reposts_enable)
* [2025-02-01, 20:09:00](https://it.slashdot.org/story/25/02/01/207203/malicious-pdf-links-hidden-in-text-message-scam-impersonating-us-postal-service?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Malicious PDF Links Hidden in Text Message Scam Impersonating US Postal Service](https://it.slashdot.org/story/25/02/01/207203/malicious-pdf-links-hidden-in-text-message-scam-impersonating-us-postal-service?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 19:57:37](https://news.ycombinator.com/item?id=42901616) - [Python 3, Pygame, and Debian Bookworm on the Miyoo A30](https://www.jtolio.com/2025/02/py3-pygame-miyoo-a30/)
* [2025-02-01, 19:54:59](https://lobste.rs/s/u292ym/python_3_pygame_debian_bookworm_on_miyoo) - [Python 3, Pygame, and Debian Bookworm on the Miyoo A30](https://www.jtolio.com/2025/02/py3-pygame-miyoo-a30/)
* [2025-02-01, 19:11:26](https://news.ycombinator.com/item?id=42901184) - [The origin and unexpected evolution of the word \"mainframe\"](https://www.righto.com/2025/02/origin-of-mainframe-term.html)
* [2025-02-01, 19:11:12](https://news.ycombinator.com/item?id=42901182) - [YouTube audio quality – How good does it get? (2022)](https://www.audiomisc.co.uk/YouTube/SpotTheDifference.html)
* [2025-02-01, 19:10:06](https://lobste.rs/s/nbmpqe/origin_unexpected_evolution_word) - [The origin and unexpected evolution of the word \"mainframe\"](https://www.righto.com/2025/02/origin-of-mainframe-term.html)
* [2025-02-01, 18:34:00](https://hardware.slashdot.org/story/25/02/01/1831253/california-built-the-worlds-largest-solar-power-tower-plant-now-it-may-close?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Built the World's Largest Solar Power Tower Plant.  Now It May Close](https://hardware.slashdot.org/story/25/02/01/1831253/california-built-the-worlds-largest-solar-power-tower-plant-now-it-may-close?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 17:34:00](https://tech.slashdot.org/story/25/02/01/0749206/bluesky-grows-to-30-million-users-threads-adds-20-million-more-just-in-january?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bluesky Grows to 30 Million Users. Threads Adds 20 Million More Just in January](https://tech.slashdot.org/story/25/02/01/0749206/bluesky-grows-to-30-million-users-threads-adds-20-million-more-just-in-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 17:17:17](https://lobste.rs/s/wcjraq/ruby_thread_contention_is_simply_gvl) - [Ruby \"Thread Contention\" is simply GVL Queuing | Island94.org](https://island94.org/2025/01/ruby-thread-contention-simply-gvl-queuing)
* [2025-02-01, 16:46:01](https://news.ycombinator.com/item?id=42899713) - [Bzip3: A spiritual successor to BZip2](https://github.com/kspalaiologos/bzip3)
* [2025-02-01, 16:44:53](https://news.ycombinator.com/item?id=42899703) - [Apple is open sourcing Swift Build](https://www.swift.org/blog/the-next-chapter-in-swift-build-technologies/)
* [2025-02-01, 16:41:53](https://news.ycombinator.com/item?id=42899679) - [Smart fabric heats up under the sun](https://uwaterloo.ca/news/media/smart-fabric-heats-under-sun)
* [2025-02-01, 16:34:00](https://slashdot.org/story/25/02/01/0517258/were-deepseeks-development-costs-much-higher-than-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Were DeepSeek's Development Costs Much Higher Than Reported?](https://slashdot.org/story/25/02/01/0517258/were-deepseeks-development-costs-much-higher-than-reported?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 16:02:27](https://lobste.rs/s/mob1j1/extending_coreutils_project_rewriting) - [Extending the Coreutils project - Rewriting base tools in Rust](https://uutils.github.io/blog/2025-02-extending/)
* [2025-02-01, 15:59:17](https://lobste.rs/s/eazsn7/next_chapter_swift_build_technologies) - [The Next Chapter in Swift Build Technologies](https://swift.org/blog/the-next-chapter-in-swift-build-technologies/)
* [2025-02-01, 15:34:00](https://yro.slashdot.org/story/25/02/01/0431229/police-use-of-ai-facial-recognition-results-in-murder-case-being-tossed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Police Use of AI Facial Recognition Results In Murder Case Being Tossed](https://yro.slashdot.org/story/25/02/01/0431229/police-use-of-ai-facial-recognition-results-in-murder-case-being-tossed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 15:06:18](https://lobste.rs/s/si9lwe/using_serde_quote_syn_proc_macro2) - [Using serde, quote, syn and proc_macro2 to implement the Kafka protocol sans-io in Rust](https://blog.tansu.io/articles/serde-kafka-protocol)
* [2025-02-01, 14:40:39](https://lobste.rs/s/crxqgn/chatbot_software_begins_face) - [Chatbot Software Begins to Face Fundamental Limitations](https://www.quantamagazine.org/chatbot-software-begins-to-face-fundamental-limitations-20250131/)
* [2025-02-01, 13:41:19](https://news.ycombinator.com/item?id=42898201) - [Show HN: We're building a desktop app for browser-based AI agents](https://meha.ai)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 13:08:08](https://lobste.rs/s/sv1ulo/hell_is_overconfident_developers) - [Hell Is Overconfident Developers Writing Encryption Code](https://soatok.blog/2025/01/31/hell-is-overconfident-developers-writing-encryption-code/)
* [2025-02-01, 13:00:00](https://news.slashdot.org/story/25/02/01/0137256/sam-altman-openai-has-been-on-the-wrong-side-of-history-concerning-open-source?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sam Altman: OpenAI Has Been On the 'Wrong Side of History' Concerning Open Source](https://news.slashdot.org/story/25/02/01/0137256/sam-altman-openai-has-been-on-the-wrong-side-of-history-concerning-open-source?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 12:32:42](https://lobste.rs/s/w4dtvy/designing_keyboard_from_scratch) - [Designing a keyboard from scratch](https://www.masterzen.fr/2020/05/03/designing-a-keyboard-part-1/)
* [2025-02-01, 12:03:51](https://news.ycombinator.com/item?id=42897746) - [Ratzilla](https://orhun.dev/ratzilla/demo/)
* [2025-02-01, 11:52:18](https://news.ycombinator.com/item?id=42897696) - [CDC data are disappearing](https://www.theatlantic.com/health/archive/2025/01/cdc-dei-scientific-data/681531/)
* [2025-02-01, 10:59:56](https://lobste.rs/s/mcj6ic/visualizing_all_books_world_isbn_space) - [Visualizing all books of the world in ISBN-Space](https://phiresky.github.io/blog/2025/visualizing-all-books-in-isbn-space/)
* [2025-02-01, 10:00:00](https://hardware.slashdot.org/story/25/02/01/0129243/the-25-year-success-story-of-serenescreen?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 25-Year Success Story of SereneScreen](https://hardware.slashdot.org/story/25/02/01/0129243/the-25-year-success-story-of-serenescreen?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 09:27:06](https://news.ycombinator.com/item?id=42897120) - [Visualizing all books of the world in ISBN-Space](https://phiresky.github.io/blog/2025/visualizing-all-books-in-isbn-space/)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 07:00:00](https://tech.slashdot.org/story/25/02/01/018238/tiktoks-traffic-bounces-back-despite-being-pulled-off-app-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TikTok's Traffic Bounces Back Despite Being Pulled Off App Stores](https://tech.slashdot.org/story/25/02/01/018238/tiktoks-traffic-bounces-back-despite-being-pulled-off-app-stores?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 06:36:16](https://lobste.rs/s/pxl2tu/another_monthly_release_c3_0_6_6_is_here) - [Another monthly release: C3 0.6.6 is here](https://c3.handmade.network/blog/p/8983-another_monthly_release__c3_0.6.6_is_here)
* [2025-02-01, 05:04:04](https://lobste.rs/s/sdnfah/blazing_fast_iot_data_pipeline_for) - [Blazing-fast IoT data pipeline for infrared monitoring](https://s2.dev/blog/iot)
* [2025-02-01, 05:00:27](https://lobste.rs/s/fmp1vo/using_llm_write_sqlite_queries) - [Using LLM to write SQLite queries](https://amjith.com/blog/2025/llm-in-litecli-1/)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-02-01, 03:30:00](https://hardware.slashdot.org/story/25/01/31/2343230/shell-walks-away-from-major-new-jersey-offshore-wind-farm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Shell Walks Away From Major New Jersey Offshore Wind Farm](https://hardware.slashdot.org/story/25/01/31/2343230/shell-walks-away-from-major-new-jersey-offshore-wind-farm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 02:20:00](https://science.slashdot.org/story/25/01/31/2356254/fda-approves-drug-to-treat-pain-without-opioid-effects?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FDA Approves Drug To Treat Pain Without Opioid Effects](https://science.slashdot.org/story/25/01/31/2356254/fda-approves-drug-to-treat-pain-without-opioid-effects?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-01, 01:40:00](https://linux.slashdot.org/story/25/01/31/2317212/android-16s-linux-terminal-runs-doom?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Android 16's Linux Terminal Runs Doom](https://linux.slashdot.org/story/25/01/31/2317212/android-16s-linux-terminal-runs-doom?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 23:04:25](https://lobste.rs/s/fpisao/uscope_new_debugger_introspection) - [uscope: A New Debugger and Introspection Toolchain](https://www.calabro.io/uscope)
* [2025-01-31, 23:02:13](https://lobste.rs/s/lg6my5/linuxpdf_linux_running_inside_pdf_file) - [linuxpdf: Linux running inside a PDF file via a RISC-V emulator](https://github.com/ading2210/linuxpdf)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 22:42:30](https://news.ycombinator.com/item?id=42893196) - [Discovery of collagen in fossil bone could unlock new insights into dinosaurs](https://news.liverpool.ac.uk/2025/01/31/discovery-of-collagen-in-fossil-bone-could-unlock-new-insights-into-dinosaurs/)
* [2025-01-31, 20:23:00](https://lobste.rs/s/hzo4nb/guten_tiny_newspaper_printer) - [Guten: A tiny newspaper printer](https://amanvir.com/guten)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 17:48:22](https://lobste.rs/s/kwp8o8/jujutsu_vcs_introduction_patterns) - [Jujutsu VCS Introduction and Patterns](https://kubamartin.com/posts/introduction-to-the-jujutsu-vcs/)
* [2025-01-31, 17:01:45](https://lobste.rs/s/wfmynv/how_we_share_secrets_at_fully_remote) - [How we share secrets at a fully-remote startup](https://mill.plainopen.com/how-we-share-secrets-at-a-fully-remote-startup.html)
* [2025-01-31, 15:51:22](https://lobste.rs/s/tn0x0w/user_valid_pseudo_class) - [The :user-valid pseudo-class](https://html-css-tip-of-the-week.netlify.app/tip/user-valid/)
* [2025-01-31, 14:23:29](https://lobste.rs/s/tez0nf/potential_rust_inspired_simplification) - [Potential Rust-inspired simplification for Go error handling](https://github.com/golang/go/discussions/71460)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 10:45:48](https://lobste.rs/s/xpwcbe/rust_s_rand_0_9_0_is_out) - [Rust's rand 0.9.0 is out](https://github.com/rust-random/rand/releases/tag/0.9.0)
* [2025-01-31, 09:59:51](https://lobste.rs/s/asyabf/falsehoods_programmers_believe_about) - [Falsehoods programmers believe about null pointers](https://purplesyringa.moe/blog/falsehoods-programmers-believe-about-null-pointers/)
* [2025-01-31, 09:56:32](https://lobste.rs/s/9xtd4v/introducing_werk) - [Introducing Werk](https://simonask.github.io/introducing-werk/)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 02:04:14](https://news.ycombinator.com/item?id=42884099) - [A mouseless tale: trying for a keyboard-driven desktop](https://lwn.net/Articles/1005332/)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 19:40:33](https://news.ycombinator.com/item?id=42881367) - [Archivists work to save disappearing data.gov datasets](https://www.404media.co/archivists-work-to-identify-and-save-the-thousands-of-datasets-disappearing-from-data-gov/)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 15:09:08](https://news.ycombinator.com/item?id=42878450) - [Pointers Are Complicated II, or: We need better language specs (2020)](https://www.ralfj.de/blog/2020/12/14/provenance.html)
* [2025-01-30, 14:21:20](https://news.ycombinator.com/item?id=42877910) - [String of recent killings linked to Bay Area rationalist 'death cult'](https://www.sfgate.com/bayarea/article/bay-area-death-cult-zizian-murders-20064333.php)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 14:59:23](https://news.ycombinator.com/item?id=42865611) - [Enhancing your MIDI devices with Perl](https://fuzzix.org/enhancing-midi-hardware-with-perl)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-29, 01:00:03](https://news.ycombinator.com/item?id=42860172) - [LMD: A new, less wasteful metal 3D printing technique](https://www.core77.com/posts/135194/LMD-A-New-Less-Wasteful-Metal-3D-Printing-Technique)
