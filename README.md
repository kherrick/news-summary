# [News Summary](https://kherrick.github.io/news-summary/)

## Technology & Innovations

* [Google Launches 'Gemma 4 12B' AI Model That Can Run On Your Laptop](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking AI model by Google, 'Gemma 4 12B', can now run directly on laptops.

* [Elixir v1.20 released: now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/) - The latest version of Elixir introduces gradual typing, providing developers with enhanced flexibility.

* [Microsoft Claims New Quantum Chip 1,000 Times Better Than Before](https://hardware.slashdot.org/story/26/06/03/005253/microsoft-claims-new-quantum-chip-1000-times-better-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft's new quantum chip reportedly delivers an unprecedented leap in computing power.

* [Microsoft Plans Linux Tools, RTX Spark Desktop For Windows Devs](https://linux.slashdot.org/story/26/06/03/1727255/microsoft-plans-linux-tools-rtx-spark-desktop-for-windows-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft announces Linux tools alongside the RTX Spark Desktop targeted at Windows developers.

## Security & Privacy

* [A Post-Quantum Future for Let's Encrypt](https://letsencrypt.org/2026/06/03/pq-certs.html) - Let's Encrypt discusses preparation plans for a post-quantum cryptography landscape.

* [Full Disclosure: 1-Click GitHub Token Stealing via a VSCode Bug](https://blog.ammaraskar.com/github-token-stealing/) - A serious vulnerability in VSCode exposed users to GitHub token theft.

* [Artificial intelligence is not conscious – Ted Chiang](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/) - Science fiction author Ted Chiang critiques the perception of AI consciousness and its implications.

## Hardware & Software

* [MacBook Neo is So Popular That Apple Reportedly Doubled Production](https://hardware.slashdot.org/story/26/06/03/2021221/macbook-neo-is-so-popular-that-apple-reportedly-doubled-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple boosts production to meet soaring demand for the innovative MacBook Neo.

* [Rootshell: A new E2EE email service hosted in Iceland](https://rootshell.is) - A launch of a new end-to-end encrypted email service prioritizing privacy.

* [Gooey: A GPU-accelerated UI framework for Zig](https://github.com/duanebester/gooey) - Introducing Gooey, a blazing-fast user interface framework for the Zig programming language.

* [Parsing XML EXIF from .avif files (plus a rant)](https://sheep.horse/2026/6/parsing_xml_exif_from_.avif_files_(plus_a_rant).html) - Exploration of parsing EXIF data from AVIF files, accompanied by a critical look at related challenges.

## AI & Ethics

* [Mathematicians issue warning as AI rapidly gains ground](https://www.science.org/content/article/mathematicians-issue-warning-ai-rapidly-gains-ground) - Mathematicians voice concern about the rapid advancements and impact of AI on mathematics.

* [Rust Will Save Linux From AI, Says Greg Kroah-Hartman](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss) - Linux kernel maintainer reflects on Rust's potential impact on ensuring Linux's compatibility with AI developments.

## Military & Geopolitics

* [Musk Says US Military Suicide Drones Used Starlink In Violation Of SpaceX Rules](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss) - Elon Musk alleges the misuse of Starlink by the US military, raising questions on ethical tech use in warfare.

* [The USS Gerald R. Ford's Next Mission is as a Floating Nuclear Power Plant](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss) - The USS Gerald R. Ford carrier is set to serve as a floating nuclear power facility.

## Emerging Concepts & Explorations

* [Revealing the frontier with stacks and queues](https://dystroy.org/blog/stack-and-queues/) - A deep dive into the roles of stacks and queues in computational processes.

* [The lone lisp heap](https://www.matheusmoreira.com/articles/lone-lisp-heap) - A unique perspective on using a single heap for data structures in the Lisp programming language.

* [Every Byte Matters](https://fzakaria.com/2026/06/01/every-byte-matters) - An exploration of optimization and the importance of precision in computational processes.

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

* [2026-06-03, 21:00:00](https://hardware.slashdot.org/story/26/06/03/2021221/macbook-neo-is-so-popular-that-apple-reportedly-doubled-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MacBook Neo is So Popular That Apple Reportedly Doubled Production](https://hardware.slashdot.org/story/26/06/03/2021221/macbook-neo-is-so-popular-that-apple-reportedly-doubled-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 20:09:08](https://lobste.rs/s/g6lkw1/my_software_north_star) - [My Software North Star](https://kristoff.it/blog/north-star/)
* [2026-06-03, 20:00:00](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches &apos;Gemma 4 12B&apos; AI Model That Can Run On Your Laptop](https://hardware.slashdot.org/story/26/06/03/1849210/google-launches-gemma-4-12b-ai-model-that-can-run-on-your-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 19:41:21](https://news.ycombinator.com/item?id=48388870) - [Brume is a 24-voice multi-timbral desktop synth for the CM5](https://brume.aftertone.co/)
* [2026-06-03, 19:30:12](https://news.ycombinator.com/item?id=48388710) - [Building iOS Apps with Doom Emacs](https://wassimans.com/blog/building-ios-apps-with-doom-emacs/)
* [2026-06-03, 19:07:13](https://lobste.rs/s/djguny/post_quantum_future_for_let_s_encrypt) - [A Post-Quantum Future for Let&apos;s Encrypt](https://letsencrypt.org/2026/06/03/pq-certs.html)
* [2026-06-03, 19:05:36](https://lobste.rs/s/wq1csk/elixir_v1_20_released_now_gradually_typed) - [Elixir v1.20 released: now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)
* [2026-06-03, 19:02:26](https://news.ycombinator.com/item?id=48388324) - [Elixir v1.20: Now a gradually typed language](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)
* [2026-06-03, 19:00:00](https://hardware.slashdot.org/story/26/06/03/1734203/google-shares-fitbit-air-blueprints-so-anyone-can-3d-print-accessories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Shares Fitbit Air Blueprints So Anyone Can 3D-Print Accessories](https://hardware.slashdot.org/story/26/06/03/1734203/google-shares-fitbit-air-blueprints-so-anyone-can-3d-print-accessories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 18:58:05](https://news.ycombinator.com/item?id=48388253) - [Rootshell: A new E2EE email service hosted in Iceland](https://rootshell.is)
* [2026-06-03, 18:00:00](https://linux.slashdot.org/story/26/06/03/1727255/microsoft-plans-linux-tools-rtx-spark-desktop-for-windows-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans Linux Tools, RTX Spark Desktop For Windows Devs](https://linux.slashdot.org/story/26/06/03/1727255/microsoft-plans-linux-tools-rtx-spark-desktop-for-windows-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 17:51:37](https://news.ycombinator.com/item?id=48387270) - [Artificial intelligence is not conscious – Ted Chiang](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/)
* [2026-06-03, 17:51:05](https://lobste.rs/s/ejogde/bloat) - [The Bloat](https://milkandcigarettes.com/notes/devlog/the-bloat)
* [2026-06-03, 17:50:16](https://news.ycombinator.com/item?id=48387251) - [Embryos shape their limbs: a key discovery of \&quot;genetic brakes\&quot;](https://nouvelles.umontreal.ca/en/article/2026/06/02/how-embryos-shape-their-limbs-a-key-discovery-of-genetic-brakes)
* [2026-06-03, 17:43:00](https://news.ycombinator.com/item?id=48387144) - [Bot vs human traffic](https://radar.cloudflare.com/traffic#bot-vs-human)
* [2026-06-03, 17:39:53](https://news.ycombinator.com/item?id=48387095) - [Launch HN: Hyper (YC P26) – Company brain to power agentic development](https://news.ycombinator.com/item?id=48387095)
* [2026-06-03, 17:34:00](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss) - [The USS Gerald R. Ford&apos;s Next Mission is as a Floating Nuclear Power Plant](https://soylentnews.org/article.pl?sid=26/06/02/060223&amp;from=rss)
* [2026-06-03, 17:15:00](https://yro.slashdot.org/story/26/06/03/1713239/meta-workers-can-opt-out-of-workplace-tracking-for-up-to-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Workers Can Opt Out of Workplace Tracking for Up to 30 Minutes](https://yro.slashdot.org/story/26/06/03/1713239/meta-workers-can-opt-out-of-workplace-tracking-for-up-to-30-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 17:12:27](https://news.ycombinator.com/item?id=48386725) - [Gooey: A GPU-accelerated UI framework for Zig](https://github.com/duanebester/gooey)
* [2026-06-03, 17:08:44](https://lobste.rs/s/5wgmnl/safe_made_easy_pt_1_single_ownership_is_not) - [Safe Made Easy Pt.1: Single Ownership is (Not) Optional](https://ergeysay.github.io/safe-made-easy-pt1.html)
* [2026-06-03, 17:01:00](https://news.ycombinator.com/item?id=48386588) - [Skyvern (YC S23) Is Hiring Open-Source Loving DevRel Engineers](https://www.ycombinator.com/companies/skyvern/jobs/1qRTlVx-founding-developer-marketing-open-source-ai)
* [2026-06-03, 16:51:49](https://news.ycombinator.com/item?id=48386463) - [Angular v22](https://blog.angular.dev/announcing-angular-v22-c52bb83a4664)
* [2026-06-03, 16:25:08](https://news.ycombinator.com/item?id=48386133) - [New Texas Instruments 5532 chips are not the 5532&apos;s we&apos;ve used for decades](https://groupdiy.com/threads/the-new-ti-5532-chips-are-not-5532s-weve-used-for-decades.93707/)
* [2026-06-03, 16:10:25](https://news.ycombinator.com/item?id=48385965) - [ESP32-S31](https://www.espressif.com/en/products/socs/esp32-s31)
* [2026-06-03, 16:04:42](https://news.ycombinator.com/item?id=48385906) - [Gemma 4 12B: A unified, encoder-free multimodal model](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)
* [2026-06-03, 16:00:00](https://hardware.slashdot.org/story/26/06/03/005253/microsoft-claims-new-quantum-chip-1000-times-better-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Claims New Quantum Chip 1,000 Times Better Than Before](https://hardware.slashdot.org/story/26/06/03/005253/microsoft-claims-new-quantum-chip-1000-times-better-than-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 15:22:33](https://lobste.rs/s/jx44nm/parsing_xml_exif_from_avif_files_plus_rant) - [Parsing XML EXIF from .avif files (plus a rant)](https://sheep.horse/2026/6/parsing_xml_exif_from_.avif_files_(plus_a_rant).html)
* [2026-06-03, 15:07:10](https://lobste.rs/s/ovbcr4/burntsushi_discusses_personal_medical) - [burntsushi discusses personal medical diagnosis](https://burntsushi.net/encephalitis/)
* [2026-06-03, 15:06:09](https://news.ycombinator.com/item?id=48385114) - [A Post-Quantum Future for Let&apos;s Encrypt](https://letsencrypt.org/2026/06/03/pq-certs)
* [2026-06-03, 15:00:00](https://tech.slashdot.org/story/26/06/02/2357229/android-gets-fake-call-detection-that-uses-rcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android Gets Fake Call Detection That Uses RCS](https://tech.slashdot.org/story/26/06/02/2357229/android-gets-fake-call-detection-that-uses-rcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 14:56:16](https://lobste.rs/s/4h8pnc/kotlin_2_4_0_released) - [Kotlin 2.4.0 Released](https://blog.jetbrains.com/kotlin/2026/06/kotlin-2-4-0-released/)
* [2026-06-03, 14:18:39](https://news.ycombinator.com/item?id=48384482) - [DaVinci Resolve 21](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew)
* [2026-06-03, 14:10:06](https://news.ycombinator.com/item?id=48384355) - [I was recently diagnosed with anti-NMDA receptor encephalitis](https://burntsushi.net/encephalitis/)
* [2026-06-03, 13:36:27](https://lobste.rs/s/aduphf/mimalloc_new_high_performance_scalable) - [mimalloc: A new, high-performance, scalable memory allocator for the modern era](https://www.microsoft.com/en-us/research/blog/mimalloc-a-high-performance-scalable-memory-allocator-for-the-modern-era/)
* [2026-06-03, 13:20:13](https://lobste.rs/s/ui45py/mean_hand) - [Mean Hand](https://portfolio.anna-zhang.com/projects/mean-hand)
* [2026-06-03, 12:57:00](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss) - [Perplexity AI Says &apos;You Can&apos;t Copyright Facts&apos; In Defense Against CNN Copyright Suit](https://soylentnews.org/article.pl?sid=26/06/02/0359202&amp;from=rss)
* [2026-06-03, 12:43:43](https://news.ycombinator.com/item?id=48383241) - [32GB of DDR5 now costs $375 – AI shortage continues to squeeze PC building](https://www.tomshardware.com/pc-components/ddr5/32gb-of-ddr5-now-costs-usd375-minimum-ai-shortage-continues-to-squeeze-pc-building)
* [2026-06-03, 12:42:07](https://news.ycombinator.com/item?id=48383220) - [Meta workers can opt out of being tracked at work up to 30 min](https://www.bbc.com/news/articles/c93x0k194yno)
* [2026-06-03, 12:25:14](https://news.ycombinator.com/item?id=48383056) - [Uber&apos;s $1,500/month AI limit is a useful signal for AI tool pricing](https://simonwillison.net/2026/Jun/3/uber-caps-usage/)
* [2026-06-03, 11:54:11](https://lobste.rs/s/mth4mj/pwnd_blaster_hacking_your_pc_using_your) - [Pwnd Blaster: Hacking your PC using your speaker without ever touching it](https://blog.nns.ee/2026/06/03/katana-badusb/)
* [2026-06-03, 11:04:04](https://news.ycombinator.com/item?id=48382382) - [Every Byte Matters](https://fzakaria.com/2026/06/01/every-byte-matters)
* [2026-06-03, 11:00:00](https://tech.slashdot.org/story/26/06/02/2348244/thanks-to-robots-ukraine-is-now-talking-about-winning-not-just-surviving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thanks To Robots, Ukraine Is Now Talking About Winning, Not Just Surviving](https://tech.slashdot.org/story/26/06/02/2348244/thanks-to-robots-ukraine-is-now-talking-about-winning-not-just-surviving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 10:53:00](https://news.ycombinator.com/item?id=48382310) - [Hacking your PC using your speaker without ever touching it](https://blog.nns.ee/2026/06/03/katana-badusb/)
* [2026-06-03, 10:51:29](https://news.ycombinator.com/item?id=48382305) - [What I&apos;ve learned about the trombone](http://bryanhu.com/blog/posts/what-ive-learned-about-the-trombone/)
* [2026-06-03, 10:24:25](https://news.ycombinator.com/item?id=48382142) - [PlayStation Architecture](https://www.copetti.org/writings/consoles/playstation/)
* [2026-06-03, 10:17:28](https://lobste.rs/s/1bie2j/furry_top_level_domain_for_furries) - [.furry - A Top-Level Domain for furries](https://www.dotfurry.org/)
* [2026-06-03, 10:15:13](https://lobste.rs/s/his6ee/wsl_containers_coreutils_for_windows) - [WSL containers, Coreutils for Windows, and agents](https://blogs.windows.com/windowsdeveloper/2026/06/02/build-2026-furthering-windows-as-the-trusted-platform-for-development/)
* [2026-06-03, 10:05:48](https://news.ycombinator.com/item?id=48382052) - [Mathematicians issue warning as AI rapidly gains ground](https://www.science.org/content/article/mathematicians-issue-warning-ai-rapidly-gains-ground)
* [2026-06-03, 08:03:00](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss) - [Musk Says US Military Suicide Drones Used Starlink In Violation Of SpaceX Rules](https://soylentnews.org/article.pl?sid=26/06/02/0356255&amp;from=rss)
* [2026-06-03, 07:55:57](https://lobste.rs/s/aw5hgu/revealing_frontier_with_stacks_queues) - [Revealing the frontier with stacks and queues](https://dystroy.org/blog/stack-and-queues/)
* [2026-06-03, 07:00:00](https://news.slashdot.org/story/26/06/02/2336255/trump-administration-to-dismantle-ocean-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration to Dismantle Ocean Monitoring System](https://news.slashdot.org/story/26/06/02/2336255/trump-administration-to-dismantle-ocean-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 06:59:03](https://lobste.rs/s/vxveln/gleam_v1_17_single_file_gleam_beam) - [Gleam v1.17 - Single file Gleam BEAM programs with escript](https://gleam.run/news/single-file-gleam-beam-programs-with-escript/)
* [2026-06-03, 05:50:07](https://lobste.rs/s/k1b0za/rsync_outrage) - [rsync and outrage](https://medium.com/@tridge60/rsync-and-outrage-d9849599e5a0)
* [2026-06-03, 04:55:26](https://lobste.rs/s/xxkmtf/lone_lisp_heap) - [The lone lisp heap](https://www.matheusmoreira.com/articles/lone-lisp-heap)
* [2026-06-03, 03:30:00](https://hardware.slashdot.org/story/26/06/02/2327236/microsofts-project-solara-is-an-os-for-devices-that-run-ai-agents-instead-of-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Project Solara Is an OS For Devices That Run AI Agents Instead of Apps](https://hardware.slashdot.org/story/26/06/02/2327236/microsofts-project-solara-is-an-os-for-devices-that-run-ai-agents-instead-of-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-03, 03:21:00](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss) - [Play it again, hand...](https://soylentnews.org/article.pl?sid=26/06/02/0353213&amp;from=rss)
* [2026-06-03, 00:22:59](https://lobste.rs/s/fysuyw/full_disclosure_1_click_github_token) - [Full Disclosure: 1-Click GitHub Token Stealing via a VSCode Bug](https://blog.ammaraskar.com/github-token-stealing/)
* [2026-06-02, 23:00:00](https://science.slashdot.org/story/26/06/02/192206/mathematicians-warn-of-ai-threats-to-profession-as-industry-encroaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mathematicians Warn of AI Threats to Profession As Industry Encroaches](https://science.slashdot.org/story/26/06/02/192206/mathematicians-warn-of-ai-threats-to-profession-as-industry-encroaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss) - [Researchers Say They Can Spy on Your Browsing by Measuring SSD Activity Through a Browser API](https://soylentnews.org/article.pl?sid=26/06/01/120212&amp;from=rss)
* [2026-06-02, 22:00:00](https://tech.slashdot.org/story/26/06/02/1840204/european-parliament-ditches-google-for-french-search-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Parliament Ditches Google For French Search Firm](https://tech.slashdot.org/story/26/06/02/1840204/european-parliament-ditches-google-for-french-search-firm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 21:34:11](https://lobste.rs/s/b4fy6z/pacever_alternative_semver_for_mobile) - [PaceVer (an alternative to SemVer, for mobile apps)](https://pacever.org/)
* [2026-06-02, 21:00:00](https://yro.slashdot.org/story/26/06/02/1714238/russian-spy-agency-says-foreign-spies-turned-officials-smartphones-into-surveillance-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Spy Agency Says Foreign Spies Turned Officials&apos; Smartphones Into Surveillance Devices](https://yro.slashdot.org/story/26/06/02/1714238/russian-spy-agency-says-foreign-spies-turned-officials-smartphones-into-surveillance-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 20:57:41](https://lobste.rs/s/rlt5x6/oils_reviewing_our_nlnet_grants_after_4) - [Oils - Reviewing Our NLnet Grants After 4 Years](https://oils.pub/blog/2026/06/grants.html)
* [2026-06-02, 20:00:00](https://tech.slashdot.org/story/26/06/02/1725210/microsoft-deliberately-bricking-all-office-for-mac-20192021-installations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Deliberately Bricking All Office For Mac 2019/2021 Installations](https://tech.slashdot.org/story/26/06/02/1725210/microsoft-deliberately-bricking-all-office-for-mac-20192021-installations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 19:00:00](https://build.slashdot.org/story/26/06/02/1835229/microsoft-unveils-scout-an-autonomous-ai-agent-built-on-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Unveils Scout, an Autonomous AI Agent Built On OpenClaw](https://build.slashdot.org/story/26/06/02/1835229/microsoft-unveils-scout-an-autonomous-ai-agent-built-on-openclaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-02, 18:55:14](https://lobste.rs/s/4u4znq/edsger_handwritten_clojure_repl_for) - [Edsger – a handwritten Clojure REPL for the reMarkable 2](https://handwritten.danieljanus.pl/2026-06-01-edsger.html)
* [2026-06-02, 18:52:52](https://news.ycombinator.com/item?id=48374552) - [Show HN: Edsger – A handwritten Clojure REPL for the reMarkable 2](https://handwritten.danieljanus.pl/2026-06-01-edsger.html)
* [2026-06-02, 17:52:00](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss) - [Rust Will Save Linux From AI, Says Greg Kroah-Hartman](https://soylentnews.org/article.pl?sid=26/06/01/1154226&amp;from=rss)
* [2026-06-02, 17:39:22](https://lobste.rs/s/ikkx3r/revo_programming_language) - [revo, the programming language](https://gills.pages.dev/revo/)
* [2026-06-02, 16:20:18](https://lobste.rs/s/6eyhii/iddqd_hardest_kind_unsafe_rust) - [iddqd, or the hardest kind of unsafe Rust](https://oxide.computer/blog/iddqd-unsafe)
* [2026-06-02, 13:07:00](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss) - [US Law Enforcement Warns of \&quot;Anti-Tech Extremism\&quot; as AI Hatred Grows](https://soylentnews.org/politics/article.pl?sid=26/06/01/1149213&amp;from=rss)
* [2026-06-02, 11:53:01](https://lobste.rs/s/6xwqvv/vim_classic_8_3_released) - [Vim Classic 8.3 released](https://vim-classic.org/news/vim-8.3-released.html)
* [2026-06-02, 09:11:39](https://lobste.rs/s/8ohth3/quality_age_slop) - [Quality in the Age of Slop](https://sinclairtarget.com/blog/2026/06/01/quality-in-the-age-of-slop/)
* [2026-06-02, 08:24:00](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss) - [Researcher Develops &apos;Spray-On&apos; Stealth Coating For Drones](https://soylentnews.org/article.pl?sid=26/06/01/1138224&amp;from=rss)
* [2026-06-02, 06:29:00](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss) - [Please see kolie&apos;s journal!](https://soylentnews.org/meta/article.pl?sid=26/06/02/0621229&amp;from=rss)
* [2026-06-02, 03:39:00](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss) - [CIFSwitch Vulnerability Exposes Some Linux Distros to Local Root Access](https://soylentnews.org/article.pl?sid=26/06/01/1131223&amp;from=rss)
* [2026-06-02, 03:08:02](https://news.ycombinator.com/item?id=48365509) - [GoPro warned it may not survive](https://thenextweb.com/news/gopro-going-concern-ai-memory-crisis-default)
* [2026-06-01, 22:54:00](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss) - [After $2.5 Billion Supermicro Smuggling Bust, Nvidia CEO Urges Company To Fix Export Compliance](https://soylentnews.org/article.pl?sid=26/06/01/027245&amp;from=rss)
* [2026-06-01, 17:12:00](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss) - [Bezos Rocket Fell Short After Cryogenic Leak Cut Engine Thrust](https://soylentnews.org/article.pl?sid=26/06/01/023237&amp;from=rss)
* [2026-06-01, 13:16:51](https://news.ycombinator.com/item?id=48356449) - [Stop Killing Games](https://jxself.org/stop-killing-games.shtml)
* [2026-06-01, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss) - [Drone Breaks World Speed Record With 453 Mph In Test Run](https://soylentnews.org/article.pl?sid=26/06/01/021214&amp;from=rss)
* [2026-06-01, 07:37:00](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss) - [Japanese Space Agency Names Arrival Date For BepiColombo Mercury Mission](https://soylentnews.org/article.pl?sid=26/05/31/0238226&amp;from=rss)
* [2026-06-01, 02:58:00](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss) - [Microcode Inside the Intel 8087 Floating-point Chip: Register Exchange ](https://soylentnews.org/article.pl?sid=26/05/31/0236235&amp;from=rss)
* [2026-06-01, 01:18:16](https://news.ycombinator.com/item?id=48351579) - [Nabokov&apos;s pale fire: the lost &apos;father of all hypertext demos&apos;? (2011)](https://dl.acm.org/doi/pdf/10.1145/1995966.1996008)
* [2026-05-31, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss) - [The End of American Science](https://soylentnews.org/article.pl?sid=26/05/31/0233244&amp;from=rss)
* [2026-05-31, 17:18:00](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss) - [This AI Compressed &apos;All Human Cooking&apos; Into 2 Megabytes](https://soylentnews.org/article.pl?sid=26/05/30/1431200&amp;from=rss)
* [2026-05-31, 12:36:00](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss) - [Blue Origin&apos;s New Glenn Rocket Explodes on its Launchpad](https://soylentnews.org/article.pl?sid=26/05/30/1418232&amp;from=rss)
* [2026-05-31, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss) - [What is a Dickover?](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss)
* [2026-05-31, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss) - [‘AI Washing’: Firms Are Scrambling to Rebrand Themselves as Tech-Focused](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss)
* [2026-05-30, 22:23:00](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss) - [The LLM Permission Slip](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss)
* [2026-05-30, 17:38:00](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss) - [Researchers Develop A New Process To Get Lithium Out Of Rocks](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss)
* [2026-05-30, 16:46:38](https://news.ycombinator.com/item?id=48338215) - [Fluid Simulation for Dummies (2006)](https://www.mikeash.com/pyblog/fluid-simulation-for-dummies.html)
* [2026-05-30, 12:52:00](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss) - [Finding a Parking Spot in Pyongyang-Chinese Cars in N. Korea](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss)
* [2026-05-30, 08:02:00](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss) - [AI Code Increasingly Leads to Production Failures](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss)
* [2026-05-30, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss)
