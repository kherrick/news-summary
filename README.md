# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Innovations

* [Google Launches Veo 3, an AI Video Generator That Incorporates Audio](https://tech.slashdot.org/story/25/05/20/2042219/google-launches-veo-3-an-ai-video-generator-that-incorporates-audio?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google introduces Veo 3, combining AI capabilities for audio and video generation.

* [Google's Gemini 2.5 Models Gain "Deep Think" Reasoning](https://tech.slashdot.org/story/25/05/20/1915256/googles-gemini-25-models-gain-deep-think-reasoning?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An advanced reasoning breakthrough expands Gemini's AI models.

* [Google Is Rolling Out AI Mode To Everyone In the US](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google scales up its AI integration in the U.S.

* [Robin: A multi-agent system for automating scientific discovery](https://arxiv.org/abs/2505.13400) - This multi-agent AI system aims to accelerate scientific research breakthroughs.

## Cybersecurity and Data Breaches

* [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://krebsonsecurity.com/2025/05/krebsonsecurity-hit-with-near-record-6-3-tbps-ddos/) - Leading cybersecurity blog faces an unprecedented Distributed Denial-of-Service attack.

* [Coinbase Data Breach Will 'Lead To People Dying,' TechCrunch Founder Says](https://yro.slashdot.org/story/25/05/20/2052220/coinbase-data-breach-will-lead-to-people-dying-techcrunch-founder-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Harrowing warnings follow a major data exposure at Coinbase.

* [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&from=rss) - Intel faces new vulnerabilities impacting system privacy at a hardware level.

## Advancements in Technology Infrastructure

* [KDE Is Getting a Native Virtual Machine Manager Called 'Karton'](https://tech.slashdot.org/story/25/05/20/2223215/kde-is-getting-a-native-virtual-machine-manager-called-karton?utm_source=rss1.0mainlinkanon&utm_medium=feed) - KDE introduces Karton for seamless virtualized computing experiences.

* [Litestream: Revamped](https://fly.io/blog/litestream-revamped/) - Explore the new updates and improved functionality in Litestream.

* [Jwno: a tiling WM for Windows, written in Janet](https://agent-kilo.github.io/jwno/) - A niche window manager brings lightweight tiling to Windows via the Janet language.

## Open Source and Programming Highlights

* [The Ingredients of a Productive Monorepo](https://blog.swgillespie.me/posts/monorepo-ingredients/) - Best practices for maintaining productivity in monolithic repository environments.

* [Optional Rust-In-FreeBSD Support May 2025 Status Report](https://hardenedbsd.org/article/shawn-webb/2025-05-20/optional-rust-freebsd-support-may-2025-status-report) - A dive into FreeBSD's optional Rust integration progress.

* [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/) - Learn about building a search engine without dependencies or frameworks.

## Social and Policy Issues in Technology

* [Spain Blocks More Than 65,000 Airbnb Holiday Rental Listings](https://slashdot.org/story/25/05/20/226218/spain-blocks-more-than-65000-airbnb-holiday-rental-listings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Stricter regulations target unlicensed rental properties in Spain.

* [Delta Can Sue CrowdStrike Over Global Outage That Caused 7,000 Canceled Flights](https://slashdot.org/story/25/05/20/1955255/delta-can-sue-crowdstrike-over-global-outage-that-caused-7000-canceled-flights?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal disputes emerge regarding accountability for major system outages.

* [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&from=rss) - Ethics and user choice clash in Meta's policy on AI training datasets.

## Innovative Concepts and Tools

* [Semantic search engine for ArXiv, biorxiv and medrxiv](https://arxivxplorer.com/) - Accelerating academic research with a focused semantic search platform.

* [“ZLinq”, a Zero-Allocation LINQ Library for .NET](https://neuecc.medium.com/zlinq-a-zero-allocation-linq-library-for-net-1bb0a3e5c749) - Efficiency-focused LINQ library minimizes runtime resource consumption.

* [Show HN: Text to 3D simulation on a map (does history pretty well)](https://mused.com/map/) - A powerful tool enabling historical simulations via map-based inputs.

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

* [2025-05-21, 00:50:35](https://lobste.rs/s/dmx9e3/apply_coop_matching_people_with_jobs_fit) - [apply.coop - Matching people with jobs that fit their values &amp; passions](https://apply.coop)
* [2025-05-21, 00:45:00](https://tech.slashdot.org/story/25/05/20/2223215/kde-is-getting-a-native-virtual-machine-manager-called-karton?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Is Getting a Native Virtual Machine Manager Called &apos;Karton&apos;](https://tech.slashdot.org/story/25/05/20/2223215/kde-is-getting-a-native-virtual-machine-manager-called-karton?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 00:02:00](https://tech.slashdot.org/story/25/05/20/2215258/krebsonsecurity-hit-with-near-record-63-tbps-ddos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://tech.slashdot.org/story/25/05/20/2215258/krebsonsecurity-hit-with-near-record-63-tbps-ddos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 23:33:27](https://news.ycombinator.com/item?id=44046955) - [The Value Isn&apos;t in the Code](https://jonayre.uk/blog/2022/10/30/the-real-value-isnt-in-the-code/)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 23:20:00](https://slashdot.org/story/25/05/20/226218/spain-blocks-more-than-65000-airbnb-holiday-rental-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain Blocks More Than 65,000 Airbnb Holiday Rental Listings](https://slashdot.org/story/25/05/20/226218/spain-blocks-more-than-65000-airbnb-holiday-rental-listings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 22:40:00](https://yro.slashdot.org/story/25/05/20/2052220/coinbase-data-breach-will-lead-to-people-dying-techcrunch-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Data Breach Will &apos;Lead To People Dying,&apos; TechCrunch Founder Says](https://yro.slashdot.org/story/25/05/20/2052220/coinbase-data-breach-will-lead-to-people-dying-techcrunch-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 22:29:12](https://news.ycombinator.com/item?id=44046578) - [“ZLinq”, a Zero-Allocation LINQ Library for .NET](https://neuecc.medium.com/zlinq-a-zero-allocation-linq-library-for-net-1bb0a3e5c749)
* [2025-05-20, 22:19:29](https://lobste.rs/s/srdmcg/litestream_revamped) - [Litestream: Revamped](https://fly.io/blog/litestream-revamped/)
* [2025-05-20, 22:00:00](https://tech.slashdot.org/story/25/05/20/2042219/google-launches-veo-3-an-ai-video-generator-that-incorporates-audio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches Veo 3, an AI Video Generator That Incorporates Audio](https://tech.slashdot.org/story/25/05/20/2042219/google-launches-veo-3-an-ai-video-generator-that-incorporates-audio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 21:49:36](https://news.ycombinator.com/item?id=44046277) - [Semantic search engine for ArXiv, biorxiv and medrxiv](https://arxivxplorer.com/)
* [2025-05-20, 21:43:50](https://news.ycombinator.com/item?id=44046227) - [Show HN: A Simple Server to Match Long/Lat to a TimeZone](https://github.com/LittleGreenViper/LGV_TZ_Lookup)
* [2025-05-20, 21:43:07](https://lobste.rs/s/bl1b9q/krebsonsecurity_hit_with_near_record_6_3) - [KrebsOnSecurity Hit With Near-Record 6.3 Tbps DDoS](https://krebsonsecurity.com/2025/05/krebsonsecurity-hit-with-near-record-6-3-tbps-ddos/)
* [2025-05-20, 21:20:00](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Rolling Out AI Mode To Everyone In the US](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 20:43:52](https://lobste.rs/s/08lasm/from_nitro_junction_testing_production) - [From Nitro to Junction: Testing in Production at Scale](https://www.junctionlabs.io/blog/nitro-testing-in-production)
* [2025-05-20, 20:40:00](https://news.slashdot.org/story/25/05/20/2019221/chicago-sun-times-prints-summer-reading-list-full-of-fake-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://news.slashdot.org/story/25/05/20/2019221/chicago-sun-times-prints-summer-reading-list-full-of-fake-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 20:11:26](https://lobste.rs/s/aowulr/when_rethinking_codebase_is_better_than) - [When rethinking a codebase is better than a workaround](https://sniffnet.net/news/rethink-over-workaround/)
* [2025-05-20, 19:58:27](https://news.ycombinator.com/item?id=44045292) - [Litestream: Revamped](https://fly.io/blog/litestream-revamped/)
* [2025-05-20, 19:55:00](https://slashdot.org/story/25/05/20/1955255/delta-can-sue-crowdstrike-over-global-outage-that-caused-7000-canceled-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta Can Sue CrowdStrike Over Global Outage That Caused 7,000 Canceled Flights](https://slashdot.org/story/25/05/20/1955255/delta-can-sue-crowdstrike-over-global-outage-that-caused-7000-canceled-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 19:36:41](https://lobste.rs/s/z5cyl1/ingredients_productive_monorepo) - [The Ingredients of a Productive Monorepo](https://blog.swgillespie.me/posts/monorepo-ingredients/)
* [2025-05-20, 19:15:00](https://tech.slashdot.org/story/25/05/20/1915256/googles-gemini-25-models-gain-deep-think-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Gemini 2.5 Models Gain \&quot;Deep Think\&quot; Reasoning](https://tech.slashdot.org/story/25/05/20/1915256/googles-gemini-25-models-gain-deep-think-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 19:02:33](https://lobste.rs/s/juveen/optional_rust_freebsd_support_may_2025) - [Optional Rust-In-FreeBSD Support May 2025 Status Report](https://hardenedbsd.org/article/shawn-webb/2025-05-20/optional-rust-freebsd-support-may-2025-status-report)
* [2025-05-20, 18:55:53](https://lobste.rs/s/7q3ntz/tag_proposal_concatenative) - [Tag Proposal: concatenative](https://lobste.rs/s/7q3ntz/tag_proposal_concatenative)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 18:30:18](https://news.ycombinator.com/item?id=44044459) - [The NSA Selector](https://github.com/wenzellabs/the_NSA_selector)
* [2025-05-20, 18:20:47](https://news.ycombinator.com/item?id=44044367) - [Google AI Ultra](https://blog.google/products/google-one/google-ai-ultra/)
* [2025-05-20, 18:14:02](https://news.ycombinator.com/item?id=44044306) - [Red Programming Language](https://www.red-lang.org/p/about.html)
* [2025-05-20, 18:03:32](https://news.ycombinator.com/item?id=44044199) - [Gemma 3n preview: Mobile-first AI](https://developers.googleblog.com/en/introducing-gemma-3n/)
* [2025-05-20, 18:00:00](https://tech.slashdot.org/story/25/05/20/1750258/google-brings-ai-powered-live-translation-to-meet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Brings AI-Powered Live Translation To Meet](https://tech.slashdot.org/story/25/05/20/1750258/google-brings-ai-powered-live-translation-to-meet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 17:46:36](https://news.ycombinator.com/item?id=44044043) - [Veo 3 and Imagen 4, and a new tool for filmmaking called Flow](https://blog.google/technology/ai/generative-media-models-io-2025/)
* [2025-05-20, 17:44:01](https://lobste.rs/s/rkepwy/bad_type_patterns_duplicate_duck) - [Bad Type Patterns - The Duplicate duck](https://www.schneems.com/2025/05/07/bad-type-patterns-the-duplicate-duck/)
* [2025-05-20, 17:20:00](https://slashdot.org/story/25/05/20/1710222/adobe-forces-creative-cloud-users-into-pricier-ai-focused-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Forces Creative Cloud Users Into Pricier AI-Focused Plan](https://slashdot.org/story/25/05/20/1710222/adobe-forces-creative-cloud-users-into-pricier-ai-focused-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 17:10:15](https://news.ycombinator.com/item?id=44043735) - [The Last Letter](https://aeon.co/essays/how-the-last-letters-of-the-condemned-can-teach-us-how-to-live)
* [2025-05-20, 17:04:00](https://news.ycombinator.com/item?id=44043687) - [The Dawn of Nvidia&apos;s Technology](https://blog.dshr.org/2025/05/the-dawn-of-nvidias-technology.html)
* [2025-05-20, 17:00:53](https://news.ycombinator.com/item?id=44043659) - [Ashby (YC W19) Is Hiring Engineering Managers](https://www.ashbyhq.com/careers?utm_source=hn&amp;ashby_jid=933570bc-a3d6-4fcc-991d-dc399c53a58a)
* [2025-05-20, 16:40:00](https://it.slashdot.org/story/25/05/20/1627210/microsoft-is-putting-ai-actions-into-the-windows-file-explorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Putting AI Actions Into the Windows File Explorer](https://it.slashdot.org/story/25/05/20/1627210/microsoft-is-putting-ai-actions-into-the-windows-file-explorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 16:32:58](https://news.ycombinator.com/item?id=44043421) - [Show HN: Juvio – UV Kernel for Jupyter](https://github.com/OKUA1/juvio)
* [2025-05-20, 16:21:03](https://news.ycombinator.com/item?id=44043323) - [Robin: A multi-agent system for automating scientific discovery](https://arxiv.org/abs/2505.13400)
* [2025-05-20, 16:00:00](https://news.slashdot.org/story/25/05/20/1554221/americas-college-towns-go-from-boom-to-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s College Towns Go From Boom To Bust](https://news.slashdot.org/story/25/05/20/1554221/americas-college-towns-go-from-boom-to-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 15:57:01](https://news.ycombinator.com/item?id=44043045) - [GPU-Driven Clustered Forward Renderer](https://logdahl.net/p/gpu-driven)
* [2025-05-20, 15:50:09](https://lobste.rs/s/hnqnpj/jwno_tiling_wm_for_windows_written_janet) - [Jwno: a tiling WM for Windows, written in Janet](https://agent-kilo.github.io/jwno/)
* [2025-05-20, 15:43:26](https://lobste.rs/s/79hng1/interview_chief_maintainer_qt_project_on) - [Interview: Chief maintainer of Qt project on language independence, KDE, and the pain of Qt 5 to Qt 6](https://devclass.com/2025/05/16/interview-chief-maintainer-of-qt-project-on-language-independence-kde-and-the-pain-of-qt-5-to-qt-6/)
* [2025-05-20, 15:35:29](https://news.ycombinator.com/item?id=44042791) - [Launch HN: Opusense (YC X25) – AI assistant for construction inspectors on site](https://news.ycombinator.com/item?id=44042791)
* [2025-05-20, 15:33:42](https://lobste.rs/s/dtwy2u/open_file_format_for_storing_information) - [An Open File Format for storing the information from a forge such as issues, pull/merge requests, milestones](https://f3.forgefriends.org/)
* [2025-05-20, 15:22:00](https://yro.slashdot.org/story/25/05/20/1452250/france-barred-telegram-founder-pavel-durov-from-traveling-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Barred Telegram Founder Pavel Durov From Traveling To US](https://yro.slashdot.org/story/25/05/20/1452250/france-barred-telegram-founder-pavel-durov-from-traveling-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 15:17:44](https://lobste.rs/s/6psu9y/hypervisor_as_library) - [Hypervisor as a Library](https://seiya.me/blog/hypervisor-as-a-library)
* [2025-05-20, 15:08:42](https://news.ycombinator.com/item?id=44042490) - [Show HN: A Tiling Window Manager for Windows, Written in Janet](https://agent-kilo.github.io/jwno/)
* [2025-05-20, 14:58:03](https://news.ycombinator.com/item?id=44042371) - [Show HN: 90s.dev – Game maker that runs on the web](https://90s.dev/blog/finally-releasing-90s-dev.html)
* [2025-05-20, 14:40:00](https://slashdot.org/story/25/05/20/142206/intel-explores-sale-of-networking-and-edge-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Explores Sale of Networking and Edge Unit](https://slashdot.org/story/25/05/20/142206/intel-explores-sale-of-networking-and-edge-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 14:35:10](https://lobste.rs/s/pgnpyv/compiling_ocaml_ti_84_ce_calculator) - [Compiling OCaml to the TI-84+ CE Calculator](https://farlow.dev/2025/05/17/ocaml-on-calculator)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 13:55:19](https://lobste.rs/s/viwe6p/open_source_can_t_coordinate) - [Open Source Can&apos;t Coordinate](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-05-20, 13:54:54](https://news.ycombinator.com/item?id=44041738) - [Deep Learning Is Applied Topology](https://theahura.substack.com/p/deep-learning-is-applied-topology)
* [2025-05-20, 12:56:46](https://lobste.rs/s/stmgck/lerp_smoothing_is_broken) - [Lerp smoothing is broken](https://www.youtube.com/watch?v=LSNQuFEDOyQ)
* [2025-05-20, 12:12:40](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 11:43:55](https://news.ycombinator.com/item?id=44040419) - [Show HN: Text to 3D simulation on a map (does history pretty well)](https://mused.com/map/)
* [2025-05-20, 11:42:24](https://news.ycombinator.com/item?id=44040407) - [Why does the U.S. always run a trade deficit?](https://libertystreeteconomics.newyorkfed.org/2025/05/why-does-the-u-s-always-run-a-trade-deficit/)
* [2025-05-20, 11:34:34](https://lobste.rs/s/qrrc6x/enlightenmentware) - [Enlightenmentware](https://mmapped.blog/posts/28-enlightenmentware)
* [2025-05-20, 11:17:39](https://lobste.rs/s/5mpy9w/simple_search_engine_from_scratch) - [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/)
* [2025-05-20, 10:18:15](https://news.ycombinator.com/item?id=44039864) - [The emoji problem (2022)](https://artofproblemsolving.com/community/c2532359h2760821_the_emoji_problem__part_i?srsltid=AfmBOor9TbMq_A7hGHSJGfoWaa2HNzducSYZu35d_LFlCSNLXpvt-pdS)
* [2025-05-20, 10:07:55](https://news.ycombinator.com/item?id=44039808) - [AI&apos;s energy footprint](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 21:21:54](https://lobste.rs/s/uq4igx/making_video_games_2025_without_engine) - [Making Video Games in 2025 (without an engine)](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-19, 20:32:41](https://lobste.rs/s/lptak4/building_personal_archive_web_slow_way) - [Building a personal archive of the web, the slow way](https://alexwlchan.net/2025/personal-archive-of-the-web/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 18:07:36](https://lobste.rs/s/qef6s9/microsoft_edit_is_now_open_source) - [Microsoft Edit is now open source](https://devblogs.microsoft.com/commandline/edit-is-now-open-source/)
* [2025-05-19, 16:51:55](https://lobste.rs/s/v4xwjv/windows_subsystem_for_linux_is_now_open) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 13:21:49](https://lobste.rs/s/wfpw3u/justification_filler_phrases) - [Justification Filler Phrases](https://serce.me/posts/2025-05-19-justification-filler-phrases)
* [2025-05-19, 11:23:55](https://lobste.rs/s/glybaa/don_t_guess_my_language) - [Don&apos;t Guess My Language](https://vitonsky.net/blog/2025/05/17/language-detection/)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 06:23:01](https://news.ycombinator.com/item?id=44026959) - [Linguists find proof of sweeping language pattern once deemed a &apos;hoax&apos;](https://www.scientificamerican.com/article/linguists-find-proof-of-sweeping-language-pattern-once-deemed-a-hoax/)
* [2025-05-19, 05:26:32](https://news.ycombinator.com/item?id=44026703) - [Magic of software; what makes a good engineer also makes a good engineering org](https://moxie.org/2024/09/23/a-good-engineer.html)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 21:27:40](https://news.ycombinator.com/item?id=44017098) - [Gail Wellington, former Commodore executive, has died](https://www.legacy.com/us/obituaries/name/gail-wellington-obituary?id=58418580)
* [2025-05-17, 21:19:36](https://news.ycombinator.com/item?id=44017043) - [A disk is a bunch of bits (2023)](https://www.cyberdemon.org/2023/07/19/bunch-of-bits.html)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 02:53:34](https://news.ycombinator.com/item?id=44011686) - [My favourite fonts to use with LaTeX (2022)](https://www.lfe.pt/latex/fonts/typography/2022/11/21/latex-fonts-part1.html)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-17, 00:18:40](https://news.ycombinator.com/item?id=44010980) - [New stem cell model sheds light on human amniotic sac development](https://www.crick.ac.uk/news/2025-05-15_new-stem-cell-model-sheds-light-on-human-amniotic-sac-development)
