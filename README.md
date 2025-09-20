# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advancements

* [There Isn't an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A comprehensive analysis of the AI market suggests that multiple 'bubbles' might be inflating simultaneously rather than a singular one.

* [The LLM Lobotomy](https://learn.microsoft.com/en-us/answers/questions/5561465/the-llm-lobotomy) - Exploration of how large language models (LLMs) are being 'simplified' to specialize for specific applications.

* [LLM-Deflate: Extracting LLMs into Datasets](https://www.scalarlm.com/blog/llm-deflate-extracting-llms-into-datasets/) - A technical dive into how LLMs can be distilled into datasets for greater utility.

* [Is OpenAI's Video-Generating Tool 'Sora' Scraping Unauthorized YouTube Clips?](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Raises ethical concerns about OpenAI's new video-generation tool allegedly using unauthorized YouTube material.

* [Images over DNS](https://dgl.cx/2025/09/images-over-dns) - A fascinating technique for transmitting images through DNS queries as a proof-of-concept.

## Cybersecurity and Software Vulnerabilities

* [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike's](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Details how an NPM package worm infiltrated multiple repositories, impacting several organizations.

* [Systemd can be a cause of restrictions on daemons](https://utcc.utoronto.ca/~cks/space/blog/linux/SystemdCanBeRestrictionCause) - Discusses the constraints Systemd introduces to daemon programs in Linux environments.

* [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html) - Highlights the benefits of using Secure Enclave for encrypting data keys.

## Software Development Trends and Tools

* [I Want a Cross-Platform Tiling Window Manager](https://lgug2z.com/articles/i-want-a-cross-platform-tiling-window-manager/) - A developer's personal account of challenges and desires for a universal tiling window manager.

* [nvim-ctagtap: Neovim plugin for tap-to-navigate ctags, single-click symbol navigation and smart back-navigation (for mobile reading)](https://github.com/h2337/nvim-ctagtap) - New plugin offering enhanced navigation features for developers on Neovim.

* [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/) - Benchmarking graphical application performance between OCaml and C using Vulkan.

* [Agentic TUI for Go codebases](https://github.com/piqoni/vogte) - Introduces an interactive terminal-based user interface tailored for managing Go codebases.

## Science and Health Findings

* [Study Links Microplastic Exposure to Alzheimer's Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A troubling study reveals a potential link between microplastics and cognitive disorders in mice.

* [Are touchscreens in cars dangerous?](https://www.economist.com/science-and-technology/2025/09/19/are-touchscreens-in-cars-dangerous) - Explores the increasing safety concerns around touchscreen use in vehicles.

* [Living microbial cement supercapacitors with reactivatable energy storage](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00409-6) - A breakthrough in multifunctional energy storage using microbial cement.

## Global and Environmental Issues

* [China's 200M gig workers are a warning for the world](https://www.economist.com/leaders/2025/09/18/chinas-200m-gig-workers-are-a-warning-for-the-world) - An in-depth look at China's precarious gig labor economy and its implications for other nations.

* [Hard-Fought Treaty to Protect Ocean Life Clears a Final Hurdle](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - International agreement finalized to safeguard marine biodiversity.

## Miscellaneous Intriguing Topics

* [Librarians Are Being Asked To Find AI-Hallucinated Books](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights the absurd challenges of verifying non-existent AI-generated book citations.

* [Pentagon Demands Journalists Pledge To Not Obtain Unauthorized Material](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigative journalism faces restrictions with new Pentagon rules.

* [Sold on Walmart, Sent by Amazon: The Weird New World of Online Retail](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of a bizarre retail logistics collaboration between two giants.

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

* [2025-09-20, 18:50:00](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Isn&apos;t an AI Bubble - There Are Three](https://slashdot.org/story/25/09/20/1847246/there-isnt-an-ai-bubble---there-are-three?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 18:09:37](https://lobste.rs/s/zd6mp6/i_want_cross_platform_tiling_window) - [I Want a Cross-Platform Tiling Window Manager](https://lgug2z.com/articles/i-want-a-cross-platform-tiling-window-manager/)
* [2025-09-20, 18:07:28](https://news.ycombinator.com/item?id=45315746) - [The LLM Lobotomy](https://learn.microsoft.com/en-us/answers/questions/5561465/the-llm-lobotomy)
* [2025-09-20, 17:34:00](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Replicating Worm Affected Several Hundred NPM Packages, Including CrowdStrike&apos;s](https://it.slashdot.org/story/25/09/20/0542237/self-replicating-worm-affected-several-hundred-npm-packages-including-crowdstrikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 17:25:58](https://news.ycombinator.com/item?id=45315312) - [Designing NotebookLM](https://jasonspielman.com/notebooklm)
* [2025-09-20, 16:34:00](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C++ Committee Prioritizes &apos;Profiles&apos; Over Rust-Style Safety Model Proposal](https://developers.slashdot.org/story/25/09/20/0449252/c-committee-prioritizes-profiles-over-rust-style-safety-model-proposal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 15:57:52](https://news.ycombinator.com/item?id=45314432) - [Are touchscreens in cars dangerous?](https://www.economist.com/science-and-technology/2025/09/19/are-touchscreens-in-cars-dangerous)
* [2025-09-20, 15:34:00](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Links Microplastic Exposure to Alzheimer&apos;s Disease in Mice](https://science.slashdot.org/story/25/09/20/0332242/study-links-microplastic-exposure-to-alzheimers-disease-in-mice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 15:26:50](https://news.ycombinator.com/item?id=45314157) - [Systemd can be a cause of restrictions on daemons](https://utcc.utoronto.ca/~cks/space/blog/linux/SystemdCanBeRestrictionCause)
* [2025-09-20, 14:34:00](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI&apos;s  Video-Generating Tool &apos;Sora&apos; Scraping Unauthorized YouTube Clips?](https://news.slashdot.org/story/25/09/20/0120220/is-openais-video-generating-tool-sora-scraping-unauthorized-youtube-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 14:26:11](https://lobste.rs/s/pzhqdb/vulkan_graphics_ocaml_vs_c) - [Vulkan graphics in OCaml vs C](https://roscidus.com/blog/blog/2025/09/20/ocaml-vulkan/)
* [2025-09-20, 14:12:30](https://news.ycombinator.com/item?id=45313597) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-20, 14:08:24](https://news.ycombinator.com/item?id=45313557) - [Cormac McCarthy&apos;s tips on how to write a science paper (2019) [pdf]](https://gwern.net/doc/science/2019-savage.pdf)
* [2025-09-20, 14:07:00](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss) - [Nobody Wanted This: Samsung Fridges are Getting Ads](https://soylentnews.org/article.pl?sid=25/09/19/0444244&amp;from=rss)
* [2025-09-20, 13:51:12](https://news.ycombinator.com/item?id=45313418) - [Living microbial cement supercapacitors with reactivatable energy storage](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(25)00409-6)
* [2025-09-20, 13:50:58](https://news.ycombinator.com/item?id=45313415) - [Vapor chamber tech keeps iPhone 17 Pro cool](https://spectrum.ieee.org/iphone-17-pro-vapor-chamber)
* [2025-09-20, 13:27:29](https://news.ycombinator.com/item?id=45313194) - [Bezier Curve as Easing Function in C++](https://asawicki.info/news_1790_bezier_curve_as_easing_function_in_c)
* [2025-09-20, 13:23:59](https://lobste.rs/s/quagwg/git_introduce_rust_announce_it_will) - [Git: Introduce Rust and announce that it will become mandatory](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 13:18:16](https://news.ycombinator.com/item?id=45313127) - [China&apos;s 200M gig workers are a warning for the world](https://www.economist.com/leaders/2025/09/18/chinas-200m-gig-workers-are-a-warning-for-the-world)
* [2025-09-20, 12:52:45](https://lobste.rs/s/c4pn1d/nvim_ctagtap_neovim_plugin_for_tap) - [nvim-ctagtap: Neovim plugin for tap-to-navigate ctags, single-click symbol navigation and smart back-navigation (for mobile reading)](https://github.com/h2337/nvim-ctagtap)
* [2025-09-20, 12:40:34](https://news.ycombinator.com/item?id=45312877) - [Visa holders on vacation have 15 hours to return to US or pay $100k fee](https://timesofindia.indiatimes.com/technology/tech-news/microsoft-has-a-24-hour-deadline-warning-for-indian-and-other-foreign-employees-after-h1-b-visa-fees-hike-to-100000-strongly-recommend-h1b-visa-holders-/articleshow/124010245.cms)
* [2025-09-20, 12:20:56](https://lobste.rs/s/8kj7sz/protect_your_keys_with_secure_enclave) - [Protect your keys with the Secure Enclave](https://octet-stream.net/b/scb/2025-09-16-protect-your-keys-with-the-secure-enclave.html)
* [2025-09-20, 12:17:33](https://news.ycombinator.com/item?id=45312696) - [Git: Introduce Rust and announce it will become mandatory in the build system](https://lore.kernel.org/git/20250904-b4-pks-rust-breaking-change-v1-0-3af1d25e0be9@pks.im/)
* [2025-09-20, 12:12:00](https://lobste.rs/s/6lco9z/images_over_dns) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 12:01:00](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Librarians Are Being Asked To Find AI-Hallucinated Books](https://news.slashdot.org/story/25/09/19/203223/librarians-are-being-asked-to-find-ai-hallucinated-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 11:50:15](https://news.ycombinator.com/item?id=45312515) - [Images over DNS](https://dgl.cx/2025/09/images-over-dns)
* [2025-09-20, 11:40:28](https://news.ycombinator.com/item?id=45312447) - [Overcoming barriers of hydrogen storage with a low-temperature hydrogen battery](https://www.isct.ac.jp/en/news/okmktjxyrvdc)
* [2025-09-20, 11:20:04](https://news.ycombinator.com/item?id=45312326) - [FLX1s phone is launched](https://furilabs.com/flx1s-is-launched/)
* [2025-09-20, 10:31:00](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard-Fought Treaty To Protect Ocean Life Clears a Final Hurdle](https://news.slashdot.org/story/25/09/19/2026214/hard-fought-treaty-to-protect-ocean-life-clears-a-final-hurdle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 09:21:00](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss) - [L.A. Man Sentenced to 14 Days in Prison for Accidentally Crashing Drone Into Firefighting Plane](https://soylentnews.org/article.pl?sid=25/09/19/0435227&amp;from=rss)
* [2025-09-20, 08:01:00](https://tech.slashdot.org/story/25/09/19/1831235/africas-only-internet-cable-repair-ship-keeps-the-continent-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Africa&apos;s Only Internet Cable Repair Ship Keeps the Continent Online](https://tech.slashdot.org/story/25/09/19/1831235/africas-only-internet-cable-repair-ship-keeps-the-continent-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 07:24:25](https://lobste.rs/s/db2pcs/linux_6_17_file_system_benchmarks) - [Linux 6.17 File-System Benchmarks, Including OpenZFS &amp; Bcachefs](https://www.phoronix.com/review/linux-617-filesystems/)
* [2025-09-20, 06:59:54](https://news.ycombinator.com/item?id=45311115) - [LLM-Deflate: Extracting LLMs into Datasets](https://www.scalarlm.com/blog/llm-deflate-extracting-llms-into-datasets/)
* [2025-09-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss) - [Feds Launch Investigation Into Faulty Tesla Doors](https://soylentnews.org/article.pl?sid=25/09/19/0433202&amp;from=rss)
* [2025-09-20, 03:50:32](https://lobste.rs/s/a0zy9r/introducing_forklift_certified_license) - [Introducing the Forklift Certified License](https://aria.dog/barks/forklift-certified-license/)
* [2025-09-20, 03:42:09](https://lobste.rs/s/oxdyns/overview_modern_css_features_2025) - [Overview of Modern CSS Features (2025 Edition)](https://frontendmasters.com/blog/what-you-need-to-know-about-modern-css-2025-edition/)
* [2025-09-20, 02:56:00](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Demands Journalists Pledge To Not Obtain Unauthorized Material](https://news.slashdot.org/story/25/09/20/0255254/pentagon-demands-journalists-pledge-to-not-obtain-unauthorized-material?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:31:00](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sold on Walmart, Sent by Amazon: The Weird New World of Online Retail](https://slashdot.org/story/25/09/19/1945211/sold-on-walmart-sent-by-amazon-the-weird-new-world-of-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-20, 02:00:19](https://lobste.rs/s/crlwz2/agentic_tui_for_go_codebases) - [The Agentic TUI for Go codebases ;)](https://github.com/piqoni/vogte)
* [2025-09-20, 01:26:12](https://lobste.rs/s/js25k9/is_zig_s_new_writer_unsafe) - [Is Zig&apos;s New Writer Unsafe?](https://www.openmymind.net/Is-Zigs-New-Io-Unsafe/)
* [2025-09-20, 00:01:00](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Decline in K-12 National Reading, Math, Science Scores Probed By US Senate Panel](https://news.slashdot.org/story/25/09/19/1926203/decline-in-k-12-national-reading-math-science-scores-probed-by-us-senate-panel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss) - [Ban Social Media for Under 15s, Says French Report Warning of TikTok Dangers](https://soylentnews.org/article.pl?sid=25/09/19/0423216&amp;from=rss)
* [2025-09-19, 22:08:11](https://lobste.rs/s/dafc6l/against_protection_stocking_frames) - [Against the protection of stocking frames](https://ethanmarcotte.com/wrote/against-stocking-frames/)
* [2025-09-19, 22:02:29](https://news.ycombinator.com/item?id=45307242) - [Less is safer: How Obsidian reduces the risk of supply chain attacks](https://obsidian.md/blog/less-is-safer/)
* [2025-09-19, 22:00:00](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record-Low 35% in US Satisfied With K-12 Education Quality](https://news.slashdot.org/story/25/09/19/1921238/record-low-35-in-us-satisfied-with-k-12-education-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 21:55:43](https://news.ycombinator.com/item?id=45307166) - [Show HN: Zedis – A Redis clone I&apos;m writing in Zig](https://github.com/barddoo/zedis)
* [2025-09-19, 21:44:12](https://lobste.rs/s/fwz25e/be_simple) - [Be Simple](https://corrode.dev/blog/simple/)
* [2025-09-19, 21:37:36](https://lobste.rs/s/xtzrdg/building_3000_pi_ai_cluster_for_fun) - [Building a $3000 Pi AI cluster for fun](https://www.jeffgeerling.com/blog/2025/i-regret-building-3000-pi-ai-cluster)
* [2025-09-19, 20:37:55](https://lobste.rs/s/e69mbb/blots_programming_language) - [The Blots Programming Language](https://blots-lang.org/)
* [2025-09-19, 20:20:00](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President To Impose $100,000 Fee For H-1B Worker Visas, White House Says](https://news.slashdot.org/story/25/09/19/2020241/president-to-impose-100000-fee-for-h-1b-worker-visas-white-house-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:20:00](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hikes US Xbox Prices Citing Economic Environment](https://games.slashdot.org/story/25/09/19/1918240/microsoft-hikes-us-xbox-prices-citing-economic-environment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 19:03:00](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss) - [Latest FSR 4 Source Code &apos;Leak&apos; Lets You Run AMD&apos;s AI Upscaling Tech on Nearly Any GPU](https://soylentnews.org/article.pl?sid=25/09/19/0416215&amp;from=rss)
* [2025-09-19, 19:01:00](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pushes Into Power Trading as AI Sends Demand Soaring](https://hardware.slashdot.org/story/25/09/19/1757235/meta-pushes-into-power-trading-as-ai-sends-demand-soaring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-19, 18:38:43](https://lobste.rs/s/gtyelw/apple_ssh_filevault) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-19, 15:41:13](https://lobste.rs/s/taohb8/jazz_guitarist_stanley_jordan_wrote_apl) - [Jazz Guitarist Stanley Jordan wrote APL for Music](https://dl.acm.org/doi/pdf/10.1145/75144.75174)
* [2025-09-19, 15:20:34](https://lobste.rs/s/ogurli/myth_reality_mac_os_x_snow_leopard_2023) - [The myth and reality of Mac OS X Snow Leopard (2023)](https://lapcatsoftware.com/articles/2023/11/5.html)
* [2025-09-19, 14:16:00](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss) - [Has the Apple iPhone Air Killed Off the Sim Card?](https://soylentnews.org/article.pl?sid=25/09/19/048212&amp;from=rss)
* [2025-09-19, 12:25:50](https://news.ycombinator.com/item?id=45300865) - [Ants that seem to defy biology – They lay eggs that hatch into another species](https://www.smithsonianmag.com/smart-news/these-ant-queens-seem-to-defy-biology-they-lay-eggs-that-hatch-into-another-species-180987292/)
* [2025-09-19, 12:25:04](https://lobste.rs/s/6bo13j/type_branding_typescript) - [Type Branding in Typescript](https://azraelsec.sh/2025/09/06/Typescript-Branding/)
* [2025-09-19, 12:20:10](https://news.ycombinator.com/item?id=45300810) - [The best YouTube downloaders, and how Google silenced the press](https://windowsread.me/p/best-youtube-downloaders)
* [2025-09-19, 12:09:12](https://lobste.rs/s/bzfzyd/run_unix_command_multiple_sub_processes) - [run a UNIX command in multiple sub-processes with line-buffered I/O](https://kmx.io/blog/released-runj-v0.1-and-runj-v0.2-run-unix-command-sub-processes-with-line-buffered-io)
* [2025-09-19, 09:29:00](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss) - [New Bill Aims to Block Both Online Adult Content and VPNs](https://soylentnews.org/article.pl?sid=25/09/18/185203&amp;from=rss)
* [2025-09-19, 08:53:53](https://lobste.rs/s/6d4tae/freebsd_vs_smartos_who_s_faster_for_jails) - [FreeBSD vs. SmartOS: Who&apos;s Faster for Jails, Zones, and bhyve VMs?](https://it-notes.dragas.net/2025/09/19/freebsd-vs-smartos-whos-faster-for-jails-zones-bhyve/)
* [2025-09-19, 08:26:41](https://lobste.rs/s/jin16z/ruby_central_s_attack_on_rubygems) - [Ruby Central’s Attack on RubyGems](https://pup-e.com/goodbye-rubygems.pdf)
* [2025-09-19, 04:41:00](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss) - [The Oldest Known Mummies Have Been Found](https://soylentnews.org/article.pl?sid=25/09/17/2233242&amp;from=rss)
* [2025-09-19, 03:28:18](https://lobste.rs/s/fhltsp/dark_patterns_killed_my_wife_s_windows_11) - [Dark patterns killed my wife’s Windows 11 installation](https://www.osnews.com/story/143376/dark-patterns-killed-my-wifes-windows-11-installation/)
* [2025-09-18, 23:56:00](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss) - [GNOME 49 Arrives This Week](https://soylentnews.org/article.pl?sid=25/09/17/1730237&amp;from=rss)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 18:12:58](https://news.ycombinator.com/item?id=45293012) - [MapSCII – World Map in Terminal](https://github.com/rastapasta/mapscii)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:22:39](https://news.ycombinator.com/item?id=45287474) - [Scream cipher](https://sethmlarson.dev/scream-cipher)
* [2025-09-18, 05:16:48](https://news.ycombinator.com/item?id=45285711) - [Evals in 2025: benchmarks to build models people can use](https://github.com/huggingface/evaluation-guidebook/blob/main/yearly_dives/2025-evaluations-for-useful-models.md)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-17, 22:53:44](https://news.ycombinator.com/item?id=45282411) - [The Gentrification of Videogame History](https://felipepepe.medium.com/the-gentrification-of-video-game-history-dfe11f1e08ae)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 14:46:18](https://news.ycombinator.com/item?id=45276501) - [Show HN: Math2Tex – Convert handwritten math and complex notes to LaTeX text](https://news.ycombinator.com/item?id=45276501)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 12:30:58](https://news.ycombinator.com/item?id=45275058) - [Claude Can (Sometimes) Prove It](https://www.galois.com/articles/claude-can-sometimes-prove-it)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 07:46:36](https://news.ycombinator.com/item?id=45273032) - [Scientists find that ice generates electricity when bent](https://phys.org/news/2025-09-scientists-ice-generates-electricity-bent.html)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 21:09:47](https://news.ycombinator.com/item?id=45268084) - [PyPI Blog: Token Exfiltration Campaign via GitHub Actions Workflows](https://blog.pypi.org/posts/2025-09-16-github-actions-token-exfiltration/)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 18:08:01](https://news.ycombinator.com/item?id=45265688) - [Escapee pregnancy test frogs colonised Wales for 50 years](https://www.bbc.com/news/uk-wales-44886585)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:33:45](https://news.ycombinator.com/item?id=45259623) - [If all the world were a monorepo](https://jtibs.substack.com/p/if-all-the-world-were-a-monorepo)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
