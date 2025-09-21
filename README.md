# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Artificial Intelligence

* [Google Temporarily Pauses AI-Powered 'Homework Helper' Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's temporary halt on its AI feature in Chrome raises ethical concerns about academic dishonesty.

* [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - Discussion on the irony of a report about ethical AI that includes fabricated references.

* [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A major milestone in lunar resource utilization, with implications for quantum computing.

* [There Isn't an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of different 'micro-bubbles' forming within AI industries.

* [NotebookLM Design](https://jasonspielman.com/notebooklm) - Exploring the design and development of an emerging notebook-based AI model.

## Cybersecurity and Incidents

* [Teen Suspect Surrenders in 2023 Las Vegas Casino Cyberattack Case](https://www.casino.org/news/teen-suspect-surrenders-in-2023-las-vegas-strip-cyberattack-case/) - Update on investigations into a significant cyberattack.

* [Cyberattack Delays Flights at Several of Europe's Major Airports](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cyberattacks continue to disrupt major infrastructure.

* [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike's](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Vulnerability in NPM ecosystem highlights risks in software dependencies.

## Innovations and Unusual Projects

* [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html) - Nostalgia meets technology in an innovative time machine concept.

* [Ultrasonic Chef's Knife](https://seattleultrasonics.com/) - A cutting-edge innovation bringing ultrasonics to kitchen tools.

* [Philips Announces Digital Pathology Scanner with Native DICOM JPEG XL Output](https://www.philips.com/a-w/about/news/archive/standard/news/articles/2025/philips-announces-digital-pathology-scanner-with-native-configurable-dicom-jpeg-and-jpeg-xl-output-in-world-first.html) - Advanced medical imaging technology with groundbreaking specifications.

* [The Napkin Project](https://web.evanchen.cc/napkin.html) - Creative approaches to collaboration and problem-solving via tangible tools.

* [Images over DNS](https://dgl.cx/2025/09/images-over-dns) - Exploration of transmitting image data through unconventional methods like DNS queries.

## Astronomy and Natural Sciences

* [Doomed 'Cannibal' Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of an impending supernova likely to produce spectacular visible effects.

* [Study Links Microplastic Exposure to Alzheimer's Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research revealing potential health risks associated with microplastic exposure.

## Miscellaneous

* [A Revolution in English Bell Ringing](https://harpers.org/archive/2025/10/a-change-of-tune-veronique-greenwood-bell-ringing/) - An exploration of innovation and tradition in historical bell-ringing practices.

* [Cormac McCarthy's Tips on How to Write a Science Paper](https://gwern.net/doc/science/2019-savage.pdf) - A rare, insightful glimpse into effective academic writing from a literary giant.

* [Sold on Walmart, Sent by Amazon: The Weird New World of Online Retail](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Trend of cross-platform partnerships and its implications for consumers.

* [Protect Your Keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html) - Security insights into leveraging device enclaves for cryptographic operations.

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

* [2025-09-21, 01:34:00](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Temporarily Pauses AI-Powered &apos;Homework Helper&apos; Button in Chrome Over Cheating Concerns](https://news.slashdot.org/story/25/09/20/029249/google-temporarily-pauses-ai-powered-homework-helper-button-in-chrome-over-cheating-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 23:38:02](https://news.ycombinator.com/item?id=45318604) - [macOS becomes iOS: Safari video controls](https://underpassapp.com/news/2025/9/8.html)
* [2025-09-20, 23:38:00](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss) - [Education Report Calling for Ethical AI Use Contains Over 15 Fake Sources](https://soylentnews.org/article.pl?sid=25/09/19/0459228&amp;from=rss)
* [2025-09-20, 23:29:57](https://news.ycombinator.com/item?id=45318559) - [Teen Suspect Surrenders in 2023 Las Vegas Casino Cyberattack Case](https://www.casino.org/news/teen-suspect-surrenders-in-2023-las-vegas-strip-cyberattack-case/)
* [2025-09-20, 23:22:00](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interlune Signs $300M Deal to Harvest Helium-3 for Quantum Computing from the Moon](https://science.slashdot.org/story/25/09/20/0254249/interlune-signs-300m-deal-to-harvest-helium-3-for-quantum-computing-from-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 22:22:03](https://news.ycombinator.com/item?id=45318140) - [Bazel and Glibc Versions](https://blogsystem5.substack.com/p/glibc-versions-bazel)
* [2025-09-20, 22:22:00](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [6,000 Evacuated During Defusing of American WWII Bomb Found Buried in Hong Kong](https://tech.slashdot.org/story/25/09/20/2215203/6000-evacuated-during-defusing-of-american-wwii-bomb-found-buried-in-hong-kong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:46:11](https://news.ycombinator.com/item?id=45317870) - [Why do some gamers invert their controls?](https://www.theguardian.com/games/2025/sep/18/why-do-some-gamers-invert-their-controls-scientists-now-have-answers-but-theyre-not-what-you-think)
* [2025-09-20, 21:23:57](https://lobste.rs/s/dmhcgv/7_stages_software_tech_stack_adoption_you) - [7 Stages of Software Tech Stack Adoption (You&apos;re Probably in Stage 5)](https://robbyonrails.com/articles/2025/09/20/seven-stages-of-tech-stack-adoption/)
* [2025-09-20, 21:22:00](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Delays Flights at Several of Europe&apos;s Major Airports](https://tech.slashdot.org/story/25/09/20/2119232/cyberattack-delays-flights-at-several-of-europes-major-airports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 21:05:14](https://lobste.rs/s/fffvzx/brief_history_threads_threading) - [A brief history of threads and threading](https://eclecticlight.co/2025/09/20/a-brief-history-of-threads-and-threading/)
* [2025-09-20, 21:04:47](https://news.ycombinator.com/item?id=45317527) - [$2 WeAct Display FS adds a 0.96-inch USB information display to your computer](https://www.cnx-software.com/2025/09/18/2-weact-display-fs-adds-a-0-96-inch-usb-information-display-to-your-computer/)
* [2025-09-20, 21:04:38](https://news.ycombinator.com/item?id=45317526) - [A brief history of threads and threading](https://eclecticlight.co/2025/09/20/a-brief-history-of-threads-and-threading/)
* [2025-09-20, 20:46:01](https://lobste.rs/s/a8ey4q/napkin_project) - [The Napkin project](https://web.evanchen.cc/napkin.html)
* [2025-09-20, 20:00:11](https://news.ycombinator.com/item?id=45316833) - [Philips announces digital pathology scanner with native DICOM JPEG XL output](https://www.philips.com/a-w/about/news/archive/standard/news/articles/2025/philips-announces-digital-pathology-scanner-with-native-configurable-dicom-jpeg-and-jpeg-xl-output-in-world-first.html)
* [2025-09-20, 19:51:36](https://news.ycombinator.com/item?id=45316744) - [A revolution in English bell ringing](https://harpers.org/archive/2025/10/a-change-of-tune-veronique-greenwood-bell-ringing/)
* [2025-09-20, 19:50:00](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doomed &apos;Cannibal&apos; Star Could Explode In a Supernova Visible During Day](https://science.slashdot.org/story/25/09/20/1927253/doomed-cannibal-star-could-explode-in-a-supernova-visible-during-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 19:37:21](https://lobste.rs/s/lin8d0/self_reliant_programmer_manifesto) - [self-reliant programmer manifesto](https://yobibyte.github.io/self_reliant_programmer.html)
* [2025-09-20, 19:06:03](https://lobste.rs/s/ihggth/tv_time_machine_raspberry_pi_plays_random) - [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html)
* [2025-09-20, 18:59:51](https://news.ycombinator.com/item?id=45316244) - [TV Time Machine: A Raspberry Pi That Plays Random 90s TV](https://quarters.captaintouch.com/blog/posts/2025-09-20-tv-time-machine-a-raspberry-pi-that-plays-random-90s-tv.html)
* [2025-09-20, 18:51:00](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss) - [Scientists: It&apos;s Do or Die Time for America&apos;s Primacy Exploring the Solar System](https://soylentnews.org/article.pl?sid=25/09/19/0456242&amp;from=rss)
* [2025-09-20, 18:50:00](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Isn&apos;t an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:34:00](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike&apos;s](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:25:58](https://news.ycombinator.com/item?id=45315312) - [Designing NotebookLM](https://jasonspielman.com/notebooklm)
* [2025-09-20, 16:34:00](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C++ Committee Prioritizes &apos;Profiles&apos; Over Rust-Style Safety Model Proposal](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 16:12:56](https://news.ycombinator.com/item?id=45314592) - [Ultrasonic Chef&apos;s Knife](https://seattleultrasonics.com/)
* [2025-09-20, 15:34:00](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Links Microplastic Exposure to Alzheimer&apos;s Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:34:00](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI&apos;s  Video-Generating Tool &apos;Sora&apos; Scraping Unauthorized YouTube Clips?](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:08:24](https://news.ycombinator.com/item?id=45313557) - [Cormac McCarthy&apos;s tips on how to write a science paper (2019) [pdf]](https://gwern.net/doc/science/2019-savage.pdf)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:51:12](https://news.ycombinator.com/item?id=45313418) - [Living microbial cement supercapacitors with reactivatable energy storage](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00409-6)
* [2025-09-20, 13:50:58](https://news.ycombinator.com/item?id=45313415) - [Vapor chamber tech keeps iPhone 17 Pro cool](https://spectrum.ieee.org/iphone-17-pro-vapor-chamber)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:52:45](https://lobste.rs/s/c4pn1d/nvim_ctagtap_neovim_plugin_for_tap) - [nvim-ctagtap: Neovim plugin for tap-to-navigate ctags, single-click symbol navigation and smart back-navigation (for mobile reading)](https://github.com/h2337/nvim-ctagtap)
* [2025-09-20, 12:20:56](https://lobste.rs/s/8kj7sz/protect_your_keys_with_secure_enclave) - [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html)
* [2025-09-20, 12:12:00](https://lobste.rs/s/6lco9z/images_over_dns) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 12:01:00](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Librarians Are Being Asked To Find AI-Hallucinated Books](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 11:50:15](https://news.ycombinator.com/item?id=45312515) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 11:20:04](https://news.ycombinator.com/item?id=45312326) - [FLX1s phone is launched](https://furilabs.com/flx1s-is-launched/)
* [2025-09-20, 10:31:00](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard-Fought Treaty To Protect Ocean Life Clears a Final Hurdle](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 08:01:00](https://tech.slashdot.org/story/25/09/19/1831235/africas-only-internet-cable-repair-ship-keeps-the-continent-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Africa&apos;s Only Internet Cable Repair Ship Keeps the Continent Online](https://tech.slashdot.org/story/25/09/19/1831235/africas-only-internet-cable-repair-ship-keeps-the-continent-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 07:24:25](https://lobste.rs/s/db2pcs/linux_6_17_file_system_benchmarks) - [Linux 6.17 File-System Benchmarks, Including OpenZFS &amp; Bcachefs](https://www.phoronix.com/review/linux-617-filesystems/)
* [2025-09-20, 06:37:01](https://news.ycombinator.com/item?id=45310995) - [PYREX vs. pyrex: What&apos;s the difference?](https://www.corning.com/worldwide/en/products/life-sciences/resources/stories/in-the-field/pyrex-vs-pyrex-whats-the-difference.html)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
* [2025-09-20, 03:42:09](https://lobste.rs/s/oxdyns/overview_modern_css_features_2025) - [Overview of Modern CSS Features (2025 Edition)](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-2025-edition/)
* [2025-09-20, 02:56:00](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Demands Journalists Pledge To Not Obtain Unauthorized Material](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:31:00](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sold on Walmart, Sent by Amazon: The Weird New World of Online Retail](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:00:19](https://lobste.rs/s/crlwz2/agentic_tui_for_go_codebases) - [The Agentic TUI for Go codebases](https://github.com/piqoni/vogte)
* [2025-09-20, 01:26:12](https://lobste.rs/s/js25k9/is_zig_s_new_writer_unsafe) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 21:37:36](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun) - [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 18:38:43](https://lobste.rs/s/gtyelw/apple_ssh_filevault) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-19, 15:41:13](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl) - [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174)
* [2025-09-19, 15:20:34](https://lobste.rs/s/ogurli/myth_reality_mac_os_x_snow_leopard_2023) - [The myth and reality of Mac OS X Snow Leopard (2023)](https://lapcatsoftware.com/articles/2023/11/5.html)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 12:25:04](https://lobste.rs/s/6bo13j/type_branding_typescript) - [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 08:53:53](https://lobste.rs/s/6d4tae/freebsd_vs_smartos_who_s_faster_for_jails) - [FreeBSD vs. SmartOS: Who&apos;s Faster for Jails, Zones, and bhyve VMs?](https://it-notes.dragas.net/2025/09/19/freebsd-vs-smartos-whos-faster-for-jails-zones-bhyve/)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 03:28:18](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11) - [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:12:58](https://news.ycombinator.com/item?id=45293012) - [MapSCII – World map in terminal](https://github.com/rastapasta/mapscii)
* [2025-09-18, 16:47:15](https://news.ycombinator.com/item?id=45291903) - [Show HN: I Parallelized RNN Training from O(T) to O(log T) Using CUDA](https://dhruvmsheth.github.io/projects/gpu_pogramming_curnn/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 13:04:27](https://news.ycombinator.com/item?id=45289150) - [Teardown of Apple 40W dynamic power adapter with 60W max](https://www.chargerlab.com/teardown-of-apple-40w-dynamic-power-adapter-with-60w-max-a3365/)
* [2025-09-18, 10:16:54](https://news.ycombinator.com/item?id=45287838) - [After Babel Fish: The promise of cheap translations at the speed of the Web](https://hedgehogreview.com/issues/lessons-of-babel/articles/after-babel-fish)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:22:39](https://news.ycombinator.com/item?id=45287474) - [Scream cipher](https://sethmlarson.dev/scream-cipher)
* [2025-09-18, 05:16:48](https://news.ycombinator.com/item?id=45285711) - [Evals in 2025: going beyond simple benchmarks to build models people can use](https://github.com/huggingface/evaluation-guidebook/blob/main/yearly_dives/2025-evaluations-for-useful-models.md)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 15:30:51](https://news.ycombinator.com/item?id=45277052) - [Knitted Anatomy](https://www.knitted-anatomy.at/cardiovascular-system/)
* [2025-09-17, 14:46:18](https://news.ycombinator.com/item?id=45276501) - [Show HN: Math2Tex – Convert handwritten math and complex notes to LaTeX text](https://news.ycombinator.com/item?id=45276501)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 12:30:58](https://news.ycombinator.com/item?id=45275058) - [Claude can sometimes prove it](https://www.galois.com/articles/claude-can-sometimes-prove-it)
* [2025-09-17, 12:03:20](https://news.ycombinator.com/item?id=45274779) - [I Once Appeared in the Old New Thing](https://mtlynch.io/my-old-new-thing-cameo/)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:22:21](https://news.ycombinator.com/item?id=45272022) - [Solving a wooden puzzle using Haskell](https://glocq.github.io/en/blog/20250428/)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
