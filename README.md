# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Innovations

* [Google Is Rolling Out AI Mode To Everyone In the US](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/20/0737207&from=rss))

* [Gemma 3n preview: Mobile-first AI](https://developers.googleblog.com/en/introducing-gemma-3n/) ([comments](https://news.ycombinator.com/item?id=44044199))

* [Microsoft is Putting AI Actions Into the Windows File Explorer](https://it.slashdot.org/story/25/05/20/1627210/microsoft-is-putting-ai-actions-into-the-windows-file-explorer?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/05/20/1627210/microsoft-is-putting-ai-actions-into-the-windows-file-explorer?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google AI Ultra](https://blog.google/products/google-one/google-ai-ultra/) ([comments](https://news.ycombinator.com/item?id=44044367))

* [Google Brings AI-Powered Live Translation To Meet](https://tech.slashdot.org/story/25/05/20/1750258/google-brings-ai-powered-live-translation-to-meet?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/05/20/1750258/google-brings-ai-powered-live-translation-to-meet?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Open Source and Developer Tools

* [Litestream: Revamped](https://fly.io/blog/litestream-revamped/) ([comments](https://news.ycombinator.com/item?id=44045292))

* [Hypervisor as a Library](https://seiya.me/blog/hypervisor-as-a-library) ([comments](https://lobste.rs/s/6psu9y/hypervisor_as_library))

* [Reports of Deno's Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated) ([comments](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly))

* [Juven: UV Kernel for Jupyter](https://github.com/OKUA1/juvio) ([comments](https://news.ycombinator.com/item?id=44043421))

* [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/) ([comments](https://news.ycombinator.com/item?id=44039744))

## Legal and Policy Issues

* [Photos in a Similar Style Aren't Copyright-Infringing–Woodland vs. Lil Nas X](https://blog.ericgoldman.org/archives/2025/05/photos-in-a-similar-style-arent-copyright-infringing-woodland-v-lil-nas-x.htm) ([comments](https://news.ycombinator.com/item?id=44045691))

* [Delta Can Sue CrowdStrike Over Global Outage That Caused 7,000 Canceled Flights](https://slashdot.org/story/25/05/20/1955255/delta-can-sue-crowdstrike-over-global-outage-that-caused-7000-canceled-flights?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/05/20/1955255/delta-can-sue-crowdstrike-over-global-outage-that-caused-7000-canceled-flights?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [France Barred Telegram Founder Pavel Durov From Traveling To US](https://yro.slashdot.org/story/25/05/20/1452250/france-barred-telegram-founder-pavel-durov-from-traveling-to-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/05/20/1452250/france-barred-telegram-founder-pavel-durov-from-traveling-to-us?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Education and Knowledge

* [The Last Letter](https://aeon.co/essays/how-the-last-letters-of-the-condemned-can-teach-us-how-to-live) ([comments](https://news.ycombinator.com/item?id=44043735))

* [Compiling OCaml to the TI-84+ CE Calculator](https://farlow.dev/2025/05/17/ocaml-on-calculator) ([comments](https://lobste.rs/s/pgnpyv/compiling_ocaml_ti_84_ce_calculator))

* [Finding hard 24 puzzles with planner programming](https://buttondown.com/hillelwayne/archive/finding-hard-24-puzzles-with-planner-programming/) ([comments](https://lobste.rs/s/0v2f97/finding_hard_24_puzzles_with_planner))

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

* [2025-05-20, 21:43:50](https://news.ycombinator.com/item?id=44046227) - [Show HN: A Simple Server to Match Long/Lat to a TimeZone](https://github.com/LittleGreenViper/LGV_TZ_Lookup)
* [2025-05-20, 21:20:00](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Rolling Out AI Mode To Everyone In the US](https://tech.slashdot.org/story/25/05/20/2035200/google-is-rolling-out-ai-mode-to-everyone-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 20:48:15](https://news.ycombinator.com/item?id=44045767) - [Show HN: I made IP-to-Geo location data library for developers](https://ip2geo.framer.website/)
* [2025-05-20, 20:40:36](https://news.ycombinator.com/item?id=44045691) - [Photos in a Similar Style Aren&apos;t Copyright-Infringing–Woodland vs. Lil Nas X](https://blog.ericgoldman.org/archives/2025/05/photos-in-a-similar-style-arent-copyright-infringing-woodland-v-lil-nas-x.htm)
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
* [2025-05-20, 18:39:04](https://lobste.rs/s/0v2f97/finding_hard_24_puzzles_with_planner) - [Finding hard 24 puzzles with planner programming](https://buttondown.com/hillelwayne/archive/finding-hard-24-puzzles-with-planner-programming/)
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
* [2025-05-20, 15:56:04](https://news.ycombinator.com/item?id=44043034) - [The Fractured Entangled Representation Hypothesis](https://github.com/akarshkumar0101/fer)
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
* [2025-05-20, 14:00:00](https://slashdot.org/story/25/05/20/1030208/the-quiet-collapse-of-surveys-fewer-humans-and-more-ai-agents-are-answering-survey-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Quiet Collapse of Surveys: Fewer Humans (and More AI Agents) Are Answering Survey Questions](https://slashdot.org/story/25/05/20/1030208/the-quiet-collapse-of-surveys-fewer-humans-and-more-ai-agents-are-answering-survey-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 13:55:19](https://lobste.rs/s/viwe6p/open_source_can_t_coordinate) - [Open Source Can&apos;t Coordinate](https://matklad.github.io/2025/05/20/open-source-cant-coordinate.html)
* [2025-05-20, 13:54:54](https://news.ycombinator.com/item?id=44041738) - [Deep Learning Is Applied Topology](https://theahura.substack.com/p/deep-learning-is-applied-topology)
* [2025-05-20, 13:38:07](https://news.ycombinator.com/item?id=44041515) - [The Lisp in the Cellar: Dependent types that live upstairs [pdf]](https://zenodo.org/records/15424968)
* [2025-05-20, 12:56:46](https://lobste.rs/s/stmgck/lerp_smoothing_is_broken) - [Lerp smoothing is broken](https://www.youtube.com/watch?v=LSNQuFEDOyQ)
* [2025-05-20, 12:12:40](https://lobste.rs/s/glfslx/reports_deno_s_demise_have_been_greatly) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 12:00:00](https://tech.slashdot.org/story/25/05/20/0947254/tech-job-market-is-shrinking-as-ai-reshapes-industry-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Job Market Is Shrinking as AI Reshapes Industry Requirements](https://tech.slashdot.org/story/25/05/20/0947254/tech-job-market-is-shrinking-as-ai-reshapes-industry-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 11:34:34](https://lobste.rs/s/qrrc6x/enlightenmentware) - [Enlightenmentware](https://mmapped.blog/posts/28-enlightenmentware)
* [2025-05-20, 11:33:14](https://news.ycombinator.com/item?id=44040332) - [Reports of Deno&apos;s Demise Have Been Greatly Exaggerated](https://deno.com/blog/greatly-exaggerated)
* [2025-05-20, 11:17:39](https://lobste.rs/s/5mpy9w/simple_search_engine_from_scratch) - [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/)
* [2025-05-20, 10:18:15](https://news.ycombinator.com/item?id=44039864) - [The emoji problem (2022)](https://artofproblemsolving.com/community/c2532359h2760821_the_emoji_problem__part_i?srsltid=AfmBOor9TbMq_A7hGHSJGfoWaa2HNzducSYZu35d_LFlCSNLXpvt-pdS)
* [2025-05-20, 10:07:55](https://news.ycombinator.com/item?id=44039808) - [AI&apos;s energy footprint](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)
* [2025-05-20, 10:00:00](https://news.slashdot.org/story/25/05/20/096258/klarnas-losses-widen-after-more-consumers-fail-to-repay-loans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna&apos;s Losses Widen After More Consumers Fail To Repay Loans](https://news.slashdot.org/story/25/05/20/096258/klarnas-losses-widen-after-more-consumers-fail-to-repay-loans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 09:58:56](https://news.ycombinator.com/item?id=44039744) - [A simple search engine from scratch](https://bernsteinbear.com/blog/simple-search/)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 07:00:00](https://entertainment.slashdot.org/story/25/05/19/2245207/sag-aftra-calls-out-fortnite-over-darth-vader-ai-voice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SAG-AFTRA Calls Out Fortnite Over Darth Vader AI Voice](https://entertainment.slashdot.org/story/25/05/19/2245207/sag-aftra-calls-out-fortnite-over-darth-vader-ai-voice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-20, 06:24:57](https://lobste.rs/s/xcpfpk/palette_lighting_tricks_on_nintendo_64) - [Palette Lighting Tricks on the Nintendo 64](https://30fps.net/pages/palette-lighting-tricks-n64/)
* [2025-05-20, 05:54:58](https://news.ycombinator.com/item?id=44038209) - [Making video games (without an engine) in 2025](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-20, 03:30:00](https://science.slashdot.org/story/25/05/19/2124234/cern-gears-up-to-ship-antimatter-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CERN Gears Up To Ship Antimatter Across Europe](https://science.slashdot.org/story/25/05/19/2124234/cern-gears-up-to-ship-antimatter-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 21:21:54](https://lobste.rs/s/uq4igx/making_video_games_2025_without_engine) - [Making Video Games in 2025 (without an engine)](https://noelberry.ca/posts/making_games_in_2025/)
* [2025-05-19, 20:32:41](https://lobste.rs/s/lptak4/building_personal_archive_web_slow_way) - [Building a personal archive of the web, the slow way](https://alexwlchan.net/2025/personal-archive-of-the-web/)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 18:07:36](https://lobste.rs/s/qef6s9/microsoft_edit_is_now_open_source) - [Microsoft Edit is now open source](https://devblogs.microsoft.com/commandline/edit-is-now-open-source/)
* [2025-05-19, 16:51:55](https://lobste.rs/s/v4xwjv/windows_subsystem_for_linux_is_now_open) - [The Windows Subsystem for Linux is now open source](https://blogs.windows.com/windowsdeveloper/2025/05/19/the-windows-subsystem-for-linux-is-now-open-source/)
* [2025-05-19, 15:28:30](https://lobste.rs/s/4hqkqt/is_winter_coming) - [Is Winter Coming?](https://www.datagubbe.se/winter/)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 13:21:49](https://lobste.rs/s/wfpw3u/justification_filler_phrases) - [Justification Filler Phrases](https://serce.me/posts/2025-05-19-justification-filler-phrases)
* [2025-05-19, 11:23:55](https://lobste.rs/s/glybaa/don_t_guess_my_language) - [Don&apos;t Guess My Language](https://vitonsky.net/blog/2025/05/17/language-detection/)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 08:00:42](https://lobste.rs/s/acpxje/coding_without_laptop_two_weeks_with_ar) - [Coding Without a Laptop - Two Weeks with AR Glasses and Linux on Android](https://holdtherobot.com/blog/2025/05/11/linux-on-android-with-ar-glasses/)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
* [2025-05-17, 21:27:40](https://news.ycombinator.com/item?id=44017098) - [Gail Wellington, former Commodore executive, has died](https://www.legacy.com/us/obituaries/name/gail-wellington-obituary?id=58418580)
* [2025-05-17, 19:39:00](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss) - [NCSC and Industry at Odds Over How to Tackle Shoddy Software](https://soylentnews.org/article.pl?sid=25/05/16/0247204&amp;from=rss)
* [2025-05-17, 14:50:00](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss) - [EU Bug Database Fully Operational as US Slashes Infosec](https://soylentnews.org/article.pl?sid=25/05/16/0232204&amp;from=rss)
* [2025-05-17, 12:27:35](https://news.ycombinator.com/item?id=44013781) - [Animations Using Math Editor](https://luiscristovao.github.io/CSS-Animation-Engine/crazy_animations/game.html)
* [2025-05-17, 11:15:52](https://news.ycombinator.com/item?id=44013470) - [Google is giving Amazon a leg up in digital book sales](https://www.washingtonpost.com/technology/2025/05/16/google-amazon-ebooks-apps/)
* [2025-05-17, 10:05:00](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss) - [A US Court Just Put Ownership of CRISPR Back in Play](https://soylentnews.org/article.pl?sid=25/05/16/0227217&amp;from=rss)
* [2025-05-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss) - [Bluetooth 6.1 Enhances Privacy With Randomized RPA Timing](https://soylentnews.org/article.pl?sid=25/05/16/0218214&amp;from=rss)
* [2025-05-17, 02:53:34](https://news.ycombinator.com/item?id=44011686) - [My favourite fonts to use with LaTeX (2022)](https://www.lfe.pt/latex/fonts/typography/2022/11/21/latex-fonts-part1.html)
* [2025-05-17, 00:31:00](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss) - [Nvidia Reportedly Raises GPU Prices by 10-15% as Tariffs and TSMC Price Hikes Filter Down](https://soylentnews.org/article.pl?sid=25/05/16/0212240&amp;from=rss)
* [2025-05-16, 19:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss) - [Scientists Find Lead Really Can Be Turned Into Gold (With Help From The LHC)](https://soylentnews.org/article.pl?sid=25/05/15/0827220&amp;from=rss)
* [2025-05-16, 15:01:00](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss) - [Why Bell Labs Worked](https://soylentnews.org/article.pl?sid=25/05/14/2259213&amp;from=rss)
* [2025-05-16, 10:20:00](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss) - [A Chemical in Plastics is Tied to Heart Disease Deaths](https://soylentnews.org/article.pl?sid=25/05/15/0224241&amp;from=rss)
* [2025-05-16, 05:32:00](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss) - [FTC Pushes The Enforcement Of Its &apos;Click-To-Cancel&apos; Rule Back To July](https://soylentnews.org/article.pl?sid=25/05/15/0157228&amp;from=rss)
* [2025-05-16, 00:45:00](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss) - [When Your Favorite Song Plays, Your Brain ‘Physically Embodies’ Music](https://soylentnews.org/article.pl?sid=25/05/15/0147219&amp;from=rss)
