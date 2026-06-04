# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [Demand Is Booming For New No Tech, Repairable Tractor](https://tech.slashdot.org/story/26/06/04/0043253/demand-is-booming-for-new-no-tech-repairable-tractor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new repairable, no-tech tractor is gaining popularity, reflecting a push towards simplicity and user serviceability in agricultural equipment.

* [A Post-Quantum Future for Let's Encrypt](https://letsencrypt.org/2026/06/03/pq-certs.html) - Let's Encrypt announces plans for post-quantum cryptography integration for future-proofing web security.

* [Elixir v1.20 released: now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/) - Elixir introduces gradual typing, expanding its capabilities and appeal to developers.

* [Google Launches 'Gemma 4 12B' AI Model That Can Run On Your Laptop](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google unveils a new lightweight AI model, 'Gemma 4 12B,' designed for running directly on laptops.

## Developments in Programming and Software

* [Floating-Point Error Handling in C++: What Actually Works](https://johnnysswlab.com/floating-point-error-handling-in-c-what-actually-works/) - A dive into robust methodologies for handling floating-point errors in C++ programming.

* [The C++ Standard Library Has Been Walking Itself Back for Fifteen Years, and the Receipts Are Public](https://hftuniversity.com/post/the-c-standard-library-has-been-walking-itself-back-for-fifteen-years-and-the-receipts-are-public) - Analysis on the evolution of the C++ Standard Library over the past 15 years.

* [Journey to JPEG XL: open-source experiments shaped the future of image coding](https://opensource.googleblog.com/2026/06/journey-to-jpeg-xl-how-open-source-experiments-shaped-the-future-of-image-coding.html) - Insights into how open-source contributions led to advancements in the JPEG XL image format.

## AI and Ethical Considerations

* [Mathematicians issue warning as AI rapidly gains ground](https://www.science.org/content/article/mathematicians-issue-warning-ai-rapidly-gains-ground) - Experts highlight concerns around the rapid advancements in AI technology and its potential implications for their discipline.

* [Artificial intelligence is not conscious – Ted Chiang](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/) - Ted Chiang discusses the misconceptions surrounding the consciousness of AI and its philosophical ramifications.

* [Failing grades soar with AI usage, dwindling math skills in Berkeley CS classes](https://www.dailycal.org/news/campus/academics/failing-grades-soar-as-professors-see-greater-ai-usage-dwindling-math-skills-in-uc-berkeley/article_16fad0bf-02cb-4b8c-8d88-888ffd9f8608.html) - The use of AI tools in academia correlates with a decline in math skills among computer science students, according to UC Berkeley professors.

## Environment and Policy Challenges

* [U.S. to dismantle system tracking Atlantic currents that are at risk of collapse](https://e360.yale.edu/digest/trump-ooi-amoc) - The U.S. plans to dismantle an ocean monitoring system crucial for tracking Atlantic currents, which play a key role in global climate stability.

* [EU Plots To Abandon US Tech](https://tech.slashdot.org/story/26/06/03/2028239/eu-plots-to-abandon-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - EU unveils plans to diverge from reliance on U.S. technology over concerns about digital sovereignty.

* [Researcher Develops 'Spray-On' Stealth Coating For Drones](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss) - A new 'spray-on' stealth technology could revolutionize drone camouflage capabilities.

## Fascinating Science and Space Updates

* [Under Notre Dame, a 'dig of the century' unearths 1,700 years of history](https://apnews.com/article/notre-dame-dig-treasures-paris-archaeology-roman-dae41f792c1402faf32a87c154cc9a77) - Archaeological excavations near Notre Dame reveal centuries-old artifacts, telling new stories about Paris's history.

* [Japanese Space Agency Names Arrival Date For BepiColombo Mercury Mission](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss) - The Japanese Space Agency sets the arrival date for its highly anticipated BepiColombo mission to Mercury.

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

* [2026-06-04, 09:32:30](https://lobste.rs/s/humg0y/what_happened_tab_autocomplete) - [What happened to tab autocomplete?](https://lobste.rs/s/humg0y/what_happened_tab_autocomplete)
* [2026-06-04, 07:58:00](https://soylentnews.org/article.pl?sid=26/06/02/0711209&amp;from=rss) - [Angry Devs Vow To Flee GitHub Copilot As Metered Billing Takes Hold](https://soylentnews.org/article.pl?sid=26/06/02/0711209&amp;from=rss)
* [2026-06-04, 07:56:40](https://lobste.rs/s/m0jxj7/working_open_comms) - [Working in the open != comms](https://gilest.org/notes/2026/open/)
* [2026-06-04, 07:52:00](https://lobste.rs/s/7jt1ix/c_standard_library_has_been_walking) - [The C++ Standard Library Has Been Walking Itself Back for Fifteen Years, and the Receipts Are Public](https://hftuniversity.com/post/the-c-standard-library-has-been-walking-itself-back-for-fifteen-years-and-the-receipts-are-public)
* [2026-06-04, 07:49:43](https://lobste.rs/s/32tphq/how_typescript_infers_type_variables) - [How TypeScript infers type variables](https://norswap.com/typescript-type-variable-inference/)
* [2026-06-04, 07:19:22](https://lobste.rs/s/r7by0p/extension_imitation_can_you_tell_valid) - [Extension or Imitation? Can you tell the valid Haskell Language Extensions, from the Impostors?](https://doscienceto.it/extension-or-imitation/)
* [2026-06-04, 07:00:00](https://entertainment.slashdot.org/story/26/06/04/0531213/amazons-new-stargate-series-is-officially-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s New Stargate Series Is Officially Dead](https://entertainment.slashdot.org/story/26/06/04/0531213/amazons-new-stargate-series-is-officially-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-04, 05:07:24](https://lobste.rs/s/uw6wmo/floating_point_error_handling_c_what) - [Floating-Point Error Handling in C++: What Actually Works](https://johnnysswlab.com/floating-point-error-handling-in-c-what-actually-works/)
* [2026-06-04, 04:28:44](https://lobste.rs/s/xwhlul/announcing_mutation_testing_haskell) - [Announcing Mutation Testing in Haskell](https://cs-syd.eu/posts/2026-06-03-mutation-testing-in-haskell)
* [2026-06-04, 03:30:00](https://tech.slashdot.org/story/26/06/04/0043253/demand-is-booming-for-new-no-tech-repairable-tractor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Demand Is Booming For New No Tech, Repairable Tractor](https://tech.slashdot.org/story/26/06/04/0043253/demand-is-booming-for-new-no-tech-repairable-tractor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-04, 03:14:00](https://soylentnews.org/article.pl?sid=26/06/02/077231&amp;from=rss) - [Distrowatch Celebrates its 25th Anniversary](https://soylentnews.org/article.pl?sid=26/06/02/077231&amp;from=rss)
* [2026-06-04, 00:56:32](https://news.ycombinator.com/item?id=48392343) - [I built a vulnerable app and spent $1,500 seeing if LLMs could hack it](https://kasra.blog/blog/i-spent-1500-seeing-if-llms-could-hack-my-app/)
* [2026-06-04, 00:44:13](https://news.ycombinator.com/item?id=48392232) - [U.S. to dismantle system tracking Atlantic currents that are at risk of collapse](https://e360.yale.edu/digest/trump-ooi-amoc)
* [2026-06-04, 00:41:09](https://news.ycombinator.com/item?id=48392203) - [Dumbphone 2](https://dumb.co/)
* [2026-06-04, 00:27:52](https://news.ycombinator.com/item?id=48392082) - [The ways we contain Claude across products](https://www.anthropic.com/engineering/how-we-contain-claude)
* [2026-06-04, 00:18:02](https://news.ycombinator.com/item?id=48392004) - [Failing grades soar with AI usage, dwindling math skills in Berkeley CS classes](https://www.dailycal.org/news/campus/academics/failing-grades-soar-as-professors-see-greater-ai-usage-dwindling-math-skills-in-uc-berkeley/article_16fad0bf-02cb-4b8c-8d88-888ffd9f8608.html)
* [2026-06-03, 23:37:18](https://news.ycombinator.com/item?id=48391611) - [They’re made out of weights](https://maxleiter.com/blog/weights)
* [2026-06-03, 23:00:00](https://linux.slashdot.org/story/26/06/03/2120212/fedora-linux-43-exposes-20-year-old-microsoft-outlook-security-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fedora Linux 43 Exposes 20-Year-Old Microsoft Outlook Security Failure](https://linux.slashdot.org/story/26/06/03/2120212/fedora-linux-43-exposes-20-year-old-microsoft-outlook-security-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 22:26:00](https://soylentnews.org/article.pl?sid=26/06/02/062240&amp;from=rss) - [An OpenAI Model Solved A Famous Math Problem That Stumped Humans For 80 Years](https://soylentnews.org/article.pl?sid=26/06/02/062240&amp;from=rss)
* [2026-06-03, 22:00:00](https://tech.slashdot.org/story/26/06/03/2028239/eu-plots-to-abandon-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Plots To Abandon US Tech](https://tech.slashdot.org/story/26/06/03/2028239/eu-plots-to-abandon-us-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 21:55:23](https://news.ycombinator.com/item?id=48390688) - [Journey to JPEG XL: open-source experiments shaped the future of image coding](https://opensource.googleblog.com/2026/06/journey-to-jpeg-xl-how-open-source-experiments-shaped-the-future-of-image-coding.html)
* [2026-06-03, 21:32:10](https://news.ycombinator.com/item?id=48390400) - [A Mathematician&apos;s Lament (2002) [pdf]](https://worrydream.com/refs/Lockhart_2002_-_A_Mathematician%27s_Lament.pdf)
* [2026-06-03, 21:00:00](https://hardware.slashdot.org/story/26/06/03/2021221/macbook-neo-is-so-popular-that-apple-reportedly-doubled-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MacBook Neo is So Popular That Apple Reportedly Doubled Production](https://hardware.slashdot.org/story/26/06/03/2021221/macbook-neo-is-so-popular-that-apple-reportedly-doubled-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 20:39:34](https://news.ycombinator.com/item?id=48389681) - [Ableton Extensions SDK](https://www.ableton.com/en/live/extensions/)
* [2026-06-03, 20:09:08](https://lobste.rs/s/g6lkw1/my_software_north_star) - [My Software North Star](https://kristoff.it/blog/north-star/)
* [2026-06-03, 20:08:33](https://news.ycombinator.com/item?id=48389284) - [A Man Who Reads Books for a Living](https://lithub.com/the-man-who-reads-books-for-a-living-one-every-two-days/)
* [2026-06-03, 20:00:00](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches &apos;Gemma 4 12B&apos; AI Model That Can Run On Your Laptop](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 19:43:37](https://news.ycombinator.com/item?id=48388909) - [Self-hosted dev sandboxes with preview URLs (Docker, Go, no K8s)](https://github.com/tastyeffectco/sandboxes)
* [2026-06-03, 19:07:13](https://lobste.rs/s/djguny/post_quantum_future_for_let_s_encrypt) - [A Post-Quantum Future for Let&apos;s Encrypt](https://letsencrypt.org/2026/06/03/pq-certs.html)
* [2026-06-03, 19:05:36](https://lobste.rs/s/wq1csk/elixir_v1_20_released_now_gradually_typed) - [Elixir v1.20 released: now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)
* [2026-06-03, 19:02:26](https://news.ycombinator.com/item?id=48388324) - [Elixir v1.20: Now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)
* [2026-06-03, 19:00:00](https://hardware.slashdot.org/story/26/06/03/1734203/google-shares-fitbit-air-blueprints-so-anyone-can-3d-print-accessories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Shares Fitbit Air Blueprints So Anyone Can 3D-Print Accessories](https://hardware.slashdot.org/story/26/06/03/1734203/google-shares-fitbit-air-blueprints-so-anyone-can-3d-print-accessories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 18:00:00](https://linux.slashdot.org/story/26/06/03/1727255/microsoft-plans-linux-tools-rtx-spark-desktop-for-windows-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans Linux Tools, RTX Spark Desktop For Windows Devs](https://linux.slashdot.org/story/26/06/03/1727255/microsoft-plans-linux-tools-rtx-spark-desktop-for-windows-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 17:51:37](https://news.ycombinator.com/item?id=48387270) - [Artificial intelligence is not conscious – Ted Chiang](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/)
* [2026-06-03, 17:51:05](https://lobste.rs/s/ejogde/bloat) - [The Bloat](https://milkandcigarettes.com/notes/devlog/the-bloat)
* [2026-06-03, 17:39:53](https://news.ycombinator.com/item?id=48387095) - [Launch HN: Hyper (YC P26) – Company brain to power agentic development](https://news.ycombinator.com/item?id=48387095)
* [2026-06-03, 17:34:00](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss) - [The USS Gerald R. Ford&apos;s Next Mission is as a Floating Nuclear Power Plant](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss)
* [2026-06-03, 17:15:00](https://yro.slashdot.org/story/26/06/03/1713239/meta-workers-can-opt-out-of-workplace-tracking-for-up-to-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Workers Can Opt Out of Workplace Tracking for Up to 30 Minutes](https://yro.slashdot.org/story/26/06/03/1713239/meta-workers-can-opt-out-of-workplace-tracking-for-up-to-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 17:12:27](https://news.ycombinator.com/item?id=48386725) - [Gooey: A GPU-accelerated UI framework for Zig](https://github.com/duanebester/gooey)
* [2026-06-03, 17:08:44](https://lobste.rs/s/5wgmnl/safe_made_easy_pt_1_single_ownership_is_not) - [Safe Made Easy Pt.1: Single Ownership is (Not) Optional](https://ergeysay.github.io/safe-made-easy-pt1.html)
* [2026-06-03, 16:10:25](https://news.ycombinator.com/item?id=48385965) - [ESP32-S31](https://www.espressif.com/en/products/socs/esp32-s31)
* [2026-06-03, 16:04:42](https://news.ycombinator.com/item?id=48385906) - [Gemma 4 12B: A unified, encoder-free multimodal model](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)
* [2026-06-03, 16:00:00](https://hardware.slashdot.org/story/26/06/03/005253/microsoft-claims-new-quantum-chip-1000-times-better-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Claims New Quantum Chip 1,000 Times Better Than Before](https://hardware.slashdot.org/story/26/06/03/005253/microsoft-claims-new-quantum-chip-1000-times-better-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 15:22:33](https://lobste.rs/s/jx44nm/parsing_xml_exif_from_avif_files_plus_rant) - [Parsing XML EXIF from .avif files (plus a rant)](https://sheep.horse/2026/6/parsing_xml_exif_from_.avif_files_(plus_a_rant).html)
* [2026-06-03, 15:07:10](https://lobste.rs/s/ovbcr4/burntsushi_discusses_personal_medical) - [burntsushi discusses personal medical diagnosis](https://burntsushi.net/encephalitis/)
* [2026-06-03, 15:06:09](https://news.ycombinator.com/item?id=48385114) - [A Post-Quantum Future for Let&apos;s Encrypt](https://letsencrypt.org/2026/06/03/pq-certs)
* [2026-06-03, 15:00:00](https://tech.slashdot.org/story/26/06/02/2357229/android-gets-fake-call-detection-that-uses-rcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android Gets Fake Call Detection That Uses RCS](https://tech.slashdot.org/story/26/06/02/2357229/android-gets-fake-call-detection-that-uses-rcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 14:18:39](https://news.ycombinator.com/item?id=48384482) - [DaVinci Resolve 21](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew)
* [2026-06-03, 14:10:06](https://news.ycombinator.com/item?id=48384355) - [I was recently diagnosed with anti-NMDA receptor encephalitis](https://burntsushi.net/encephalitis/)
* [2026-06-03, 13:36:27](https://lobste.rs/s/aduphf/mimalloc_new_high_performance_scalable) - [mimalloc: A new, high-performance, scalable memory allocator for the modern era](https://www.microsoft.com/en-us/research/blog/mimalloc-a-high-performance-scalable-memory-allocator-for-the-modern-era/)
* [2026-06-03, 13:20:13](https://lobste.rs/s/ui45py/mean_hand) - [Mean Hand](https://portfolio.anna-zhang.com/projects/mean-hand)
* [2026-06-03, 12:57:00](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss) - [Perplexity AI Says &apos;You Can&apos;t Copyright Facts&apos; In Defense Against CNN Copyright Suit](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss)
* [2026-06-03, 12:25:14](https://news.ycombinator.com/item?id=48383056) - [Uber&apos;s $1,500/month AI limit is a useful signal for AI tool pricing](https://simonwillison.net/2026/Jun/3/uber-caps-usage/)
* [2026-06-03, 11:54:11](https://lobste.rs/s/mth4mj/pwnd_blaster_hacking_your_pc_using_your) - [Pwnd Blaster: Hacking your PC using your speaker without ever touching it](https://blog.nns.ee/2026/06/03/katana-badusb/)
* [2026-06-03, 11:04:04](https://news.ycombinator.com/item?id=48382382) - [Every Byte Matters](https://fzakaria.com/2026/06/01/every-byte-matters)
* [2026-06-03, 11:00:00](https://tech.slashdot.org/story/26/06/02/2348244/thanks-to-robots-ukraine-is-now-talking-about-winning-not-just-surviving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thanks To Robots, Ukraine Is Now Talking About Winning, Not Just Surviving](https://tech.slashdot.org/story/26/06/02/2348244/thanks-to-robots-ukraine-is-now-talking-about-winning-not-just-surviving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 10:24:25](https://news.ycombinator.com/item?id=48382142) - [PlayStation Architecture](https://www.copetti.org/writings/consoles/playstation/)
* [2026-06-03, 10:17:28](https://lobste.rs/s/1bie2j/furry_top_level_domain_for_furries) - [.furry - A Top-Level Domain for furries](https://www.dotfurry.org/)
* [2026-06-03, 10:05:48](https://news.ycombinator.com/item?id=48382052) - [Mathematicians issue warning as AI rapidly gains ground](https://www.science.org/content/article/mathematicians-issue-warning-ai-rapidly-gains-ground)
* [2026-06-03, 08:03:00](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss) - [Musk Says US Military Suicide Drones Used Starlink In Violation Of SpaceX Rules](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss)
* [2026-06-03, 07:55:57](https://lobste.rs/s/aw5hgu/revealing_frontier_with_stacks_queues) - [Revealing the frontier with stacks and queues](https://dystroy.org/blog/stack-and-queues/)
* [2026-06-03, 07:00:00](https://news.slashdot.org/story/26/06/02/2336255/trump-administration-to-dismantle-ocean-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration to Dismantle Ocean Monitoring System](https://news.slashdot.org/story/26/06/02/2336255/trump-administration-to-dismantle-ocean-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 06:59:03](https://lobste.rs/s/vxveln/gleam_v1_17_single_file_gleam_beam) - [Gleam v1.17 - Single file Gleam BEAM programs with escript](https://gleam.run/news/single-file-gleam-beam-programs-with-escript/)
* [2026-06-03, 05:50:07](https://lobste.rs/s/k1b0za/rsync_outrage) - [rsync and outrage](https://medium.com/@tridge60/rsync-and-outrage-d9849599e5a0)
* [2026-06-03, 03:30:00](https://hardware.slashdot.org/story/26/06/02/2327236/microsofts-project-solara-is-an-os-for-devices-that-run-ai-agents-instead-of-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Project Solara Is an OS For Devices That Run AI Agents Instead of Apps](https://hardware.slashdot.org/story/26/06/02/2327236/microsofts-project-solara-is-an-os-for-devices-that-run-ai-agents-instead-of-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 03:21:00](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss) - [Play it again, hand...](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss)
* [2026-06-03, 00:22:59](https://lobste.rs/s/fysuyw/full_disclosure_1_click_github_token) - [Full Disclosure: 1-Click GitHub Token Stealing via a VSCode Bug](https://blog.ammaraskar.com/github-token-stealing/)
* [2026-06-02, 23:00:00](https://science.slashdot.org/story/26/06/02/192206/mathematicians-warn-of-ai-threats-to-profession-as-industry-encroaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mathematicians Warn of AI Threats to Profession As Industry Encroaches](https://science.slashdot.org/story/26/06/02/192206/mathematicians-warn-of-ai-threats-to-profession-as-industry-encroaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss) - [Researchers Say They Can Spy on Your Browsing by Measuring SSD Activity Through a Browser API](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss)
* [2026-06-02, 20:57:41](https://lobste.rs/s/rlt5x6/oils_reviewing_our_nlnet_grants_after_4) - [Oils - Reviewing Our NLnet Grants After 4 Years](https://oils.pub/blog/2026/06/grants.html)
* [2026-06-02, 18:55:14](https://lobste.rs/s/4u4znq/edsger_handwritten_clojure_repl_for) - [Edsger – a handwritten Clojure REPL for the reMarkable 2](https://handwritten.danieljanus.pl/2026-06-01-edsger.html)
* [2026-06-02, 17:52:00](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss) - [Rust Will Save Linux From AI, Says Greg Kroah-Hartman](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss)
* [2026-06-02, 16:20:18](https://lobste.rs/s/6eyhii/iddqd_hardest_kind_unsafe_rust) - [iddqd, or the hardest kind of unsafe Rust](https://oxide.computer/blog/iddqd-unsafe)
* [2026-06-02, 13:07:00](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss) - [US Law Enforcement Warns of \&quot;Anti-Tech Extremism\&quot; as AI Hatred Grows](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss)
* [2026-06-02, 11:20:10](https://news.ycombinator.com/item?id=48368725) - [Under Notre Dame, a &apos;dig of the century&apos; unearths 1,700 years of history](https://apnews.com/article/notre-dame-dig-treasures-paris-archaeology-roman-dae41f792c1402faf32a87c154cc9a77)
* [2026-06-02, 08:24:00](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss) - [Researcher Develops &apos;Spray-On&apos; Stealth Coating For Drones](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss)
* [2026-06-02, 06:29:00](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss) - [Please see kolie&apos;s journal!](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss)
* [2026-06-02, 03:39:00](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss) - [CIFSwitch Vulnerability Exposes Some Linux Distros to Local Root Access](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss)
* [2026-06-01, 22:54:00](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss) - [After $2.5 Billion Supermicro Smuggling Bust, Nvidia CEO Urges Company To Fix Export Compliance](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss)
* [2026-06-01, 20:31:24](https://news.ycombinator.com/item?id=48362255) - [Meteor Explodes over Massachusetts](https://www.nbcboston.com/news/local/meteor-explodes-over-massachusetts-what-we-know-and-where-it-landed/3957663/)
* [2026-06-01, 17:12:00](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss) - [Bezos Rocket Fell Short After Cryogenic Leak Cut Engine Thrust](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss)
* [2026-06-01, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss) - [Drone Breaks World Speed Record With 453 Mph In Test Run](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss)
* [2026-06-01, 07:37:00](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss) - [Japanese Space Agency Names Arrival Date For BepiColombo Mercury Mission](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss)
* [2026-06-01, 04:12:06](https://news.ycombinator.com/item?id=48352517) - [The Capacity of HotHands to Facilitate High-Altitude Research (2023) [pdf]](https://www.colorado.edu/center/spacegrant/sites/default/files/attached-files/B3_RRCC_BringingTheHeatTo100%2C000Feet.pdf)
* [2026-06-01, 02:58:00](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss) - [Microcode Inside the Intel 8087 Floating-point Chip: Register Exchange ](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss)
* [2026-05-31, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss) - [The End of American Science](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss)
* [2026-05-31, 20:26:43](https://news.ycombinator.com/item?id=48349404) - [Patching my guitar amp&apos;s firmware](https://mforney.org/blog/2026-05-28-patching-my-guitar-amps-firmware.html)
* [2026-05-31, 18:05:37](https://news.ycombinator.com/item?id=48348040) - [CP/M-86 &amp; MS-DOS Cross Development Environment](https://github.com/tsupplis/cpm86-crossdev)
* [2026-05-31, 17:18:00](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss) - [This AI Compressed &apos;All Human Cooking&apos; Into 2 Megabytes](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss)
* [2026-05-31, 17:16:15](https://news.ycombinator.com/item?id=48347483) - [Learn SQL Once, Use It for 30 Years](https://fagnerbrack.com/learn-sql-once-use-it-for-30-years-9aceb0bdee03)
* [2026-05-31, 12:36:00](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss) - [Blue Origin&apos;s New Glenn Rocket Explodes on its Launchpad](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss)
* [2026-05-31, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss) - [What is a Dickover?](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss)
* [2026-05-31, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss) - [‘AI Washing’: Firms Are Scrambling to Rebrand Themselves as Tech-Focused](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss)
