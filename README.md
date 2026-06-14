# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [zinnia: a modular 64-bit Unix-like kernel written in Rust](https://zinnia-os.org/) ([Comments](https://lobste.rs/s/0ichrt/zinnia_modular_64_bit_unix_like_kernel))

* [Yserver: A modern X11 server written in Rust](https://github.com/joske/yserver) ([Comments](https://news.ycombinator.com/item?id=48531394))

* [Will Meta's $14 Billion Bet on AI Ever Pay Off?](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Show HN: Kage – Shadow any website to a single binary for offline viewing](https://github.com/tamnd/kage) ([Comments](https://news.ycombinator.com/item?id=48529990))

* [TorchCodec 0.14: HDR Video Decoding for CPU and CUDA, and Fast Wav Decoder](https://github.com/meta-pytorch/torchcodec/releases/tag/v0.14.0) ([Comments](https://news.ycombinator.com/item?id=48476539))

## Artificial Intelligence

* [Not everyone is using AI for everything](https://gabrielweinberg.com/p/people-are-consuming-ai-like-they) ([Comments](https://news.ycombinator.com/item?id=48527700))

* [The future of Siri, or: why private inference isn't private enough](https://blog.cryptographyengineering.com/2026/06/09/apples-siri-ai-or-more-shouting-into-the-void-about-private-agents/) ([Comments](https://lobste.rs/s/tylzdy/future_siri_why_private_inference_isn_t))

* [Webxdc - Secure mini apps for chats](https://webxdc.org/) ([Comments](https://lobste.rs/s/bilqbs/webxdc_secure_mini_apps_for_chats))

* [NASA's Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss))

## Science and Exploration

* [Scientists Gave an Octopus a Mirror. Here's What Happened Next](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss))

* [Global density and biomass of arbuscular mycorrhizal fungal networks](https://www.science.org/doi/10.1126/science.adu4373) ([Comments](https://news.ycombinator.com/item?id=48519102))

* [The Birth and Death of JavaScript (2014)](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) ([Comments](https://news.ycombinator.com/item?id=48526661))

## Cybersecurity and Privacy

* [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss))

* [Arch Linux Malware Incident: Malicious Commits Found in 1,579 Packages](https://linux.slashdot.org/story/26/06/13/1817206/arch-linux-malware-incident-malicious-commits-found-in-1579-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://linux.slashdot.org/story/26/06/13/1817206/arch-linux-malware-incident-malicious-commits-found-in-1579-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss))

## Business and Industry

* [Bitcoin Has Lost Nearly Half Its Value in 11 Months](https://slashdot.org/story/26/06/14/0817238/bitcoin-has-lost-nearly-half-its-value-in-11-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://slashdot.org/story/26/06/14/0817238/bitcoin-has-lost-nearly-half-its-value-in-11-months?utm-source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [ASML Becomes Europe's Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss))

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

* [2026-06-14, 21:50:55](https://lobste.rs/s/of8l9y/senior_game_security_engineer_includes) - [Senior Game Security Engineer (Includes Linux Anti-Cheat)](https://www.epicgames.com/site/careers/jobs/6019148004)
* [2026-06-14, 21:35:00](https://mobile.slashdot.org/story/26/06/14/2132212/uk-scientists-see-little-evidence-for-claims-smartphones-are-rewiring-kids-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scientists See Little Evidence for Claims Smartphones Are Rewiring Kids&apos; Brains](https://mobile.slashdot.org/story/26/06/14/2132212/uk-scientists-see-little-evidence-for-claims-smartphones-are-rewiring-kids-brains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 21:06:41](https://news.ycombinator.com/item?id=48532722) - [Abu Fanous](https://en.wikipedia.org/wiki/Abu_Fanous)
* [2026-06-14, 21:05:27](https://lobste.rs/s/0ichrt/zinnia_modular_64_bit_unix_like_kernel) - [zinnia: a modular 64-bit Unix-like kernel written in Rust](https://zinnia-os.org/)
* [2026-06-14, 21:04:46](https://news.ycombinator.com/item?id=48532705) - [Zinnia: A modular 64-bit Unix-like kernel written in Rust](https://zinnia-os.org/)
* [2026-06-14, 20:12:42](https://news.ycombinator.com/item?id=48532116) - [Vibe Coder vs. Software Engineer](https://yusufaytas.com/vibe-coder-vs-software-engineer)
* [2026-06-14, 20:11:00](https://entertainment.slashdot.org/story/26/06/14/208255/as-disclosure-day-premieres-steven-spielberg-says-he-believes-aliens-really-have-visited-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As &apos;Disclosure Day&apos; Premieres, Steven Spielberg Says He Believes Aliens Really Have Visited Earth](https://entertainment.slashdot.org/story/26/06/14/208255/as-disclosure-day-premieres-steven-spielberg-says-he-believes-aliens-really-have-visited-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 19:14:21](https://news.ycombinator.com/item?id=48531449) - [Chaosnet (1981)](https://tumbleweed.nu/r/lm-3/uv/amber.html)
* [2026-06-14, 19:10:35](https://news.ycombinator.com/item?id=48531394) - [Yserver: A modern X11 server written in Rust](https://github.com/joske/yserver)
* [2026-06-14, 18:43:40](https://lobste.rs/s/wwbl1n/even_more_batteries_included_with_emacs) - [Even More Batteries Included With Emacs](https://karthinks.com/software/even-more-batteries-included-with-emacs/)
* [2026-06-14, 18:43:00](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Meta&apos;s $14 Billion Bet on AI Ever Pay Off?](https://tech.slashdot.org/story/26/06/14/1842208/will-metas-14-billion-bet-on-ai-ever-pay-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 17:54:17](https://news.ycombinator.com/item?id=48530382) - [Show HN: Discover Wikipedia articles popular on Hacker News](https://www.orangecrumbs.com/)
* [2026-06-14, 17:43:02](https://lobste.rs/s/7bujlv/erd_generator_from_sql) - [ERD Generator from SQL](https://sqltoerdiagram.com/)
* [2026-06-14, 17:25:38](https://news.ycombinator.com/item?id=48529990) - [Show HN: Kage – Shadow any website to a single binary for offline viewing](https://github.com/tamnd/kage)
* [2026-06-14, 17:12:27](https://lobste.rs/s/daehjf/ffi_miri_at_8000_segfaults_per_second) - [FFI in Miri at 8000 segfaults per second](https://youtu.be/9X-ngiKo_Y0)
* [2026-06-14, 17:07:42](https://lobste.rs/s/lvodx4/deconstructing_datalog) - [Deconstructing Datalog](https://www.rntz.net/post/my-thesis.html)
* [2026-06-14, 16:34:00](https://linux.slashdot.org/story/26/06/14/0641257/vintage-amd-r600-graphics-driver-sees-code-cleanups-thanks-to-github-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Vintage AMD R600 Graphics Driver Sees Code Cleanups Thanks To GitHub Copilot](https://linux.slashdot.org/story/26/06/14/0641257/vintage-amd-r600-graphics-driver-sees-code-cleanups-thanks-to-github-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 16:05:28](https://news.ycombinator.com/item?id=48528779) - [Ask HN: What are you working on? (June 2026)](https://news.ycombinator.com/item?id=48528779)
* [2026-06-14, 16:01:30](https://news.ycombinator.com/item?id=48528729) - [Linux 7.1](https://lore.kernel.org/lkml/CAHk-=wi4BF4bMhZNZ1tqs+FFV4OuZRe3ZqdWB+LxRLmRweUzQw@mail.gmail.com/T/#u)
* [2026-06-14, 15:38:31](https://lobste.rs/s/zkj0qs/write_heavy_sysbench_tests_large_server) - [Write-heavy sysbench tests, a large server, modern Postgres and MySQL](http://smalldatum.blogspot.com/2026/06/write-heavy-sysbench-tests-large-server.html)
* [2026-06-14, 15:37:31](https://news.ycombinator.com/item?id=48528371) - [Rio de Janeiro&apos;s \&quot;homegrown\&quot; LLM appears to be a merge of an existing model](https://github.com/nex-agi/Nex-N2/issues/4)
* [2026-06-14, 15:34:00](https://yro.slashdot.org/story/26/06/14/0354205/how-americas-energy-department-is-building-a-national-platform-for-doing-science-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How America&apos;s Energy Department is Building a National Platform for Doing Science with AI](https://yro.slashdot.org/story/26/06/14/0354205/how-americas-energy-department-is-building-a-national-platform-for-doing-science-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 15:13:57](https://news.ycombinator.com/item?id=48528029) - [I indexed 669 GB of my GoPro videos using my M1 Max computer and local ML models](https://news.ycombinator.com/item?id=48528029)
* [2026-06-14, 14:56:56](https://news.ycombinator.com/item?id=48527820) - [Perlisisms (1982)](https://www.cs.yale.edu/homes/perlis-alan/quotes.html)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 14:44:29](https://news.ycombinator.com/item?id=48527700) - [Not everyone is using AI for everything](https://gabrielweinberg.com/p/people-are-consuming-ai-like-they)
* [2026-06-14, 14:34:00](https://games.slashdot.org/story/26/06/14/0743231/blizzard-sues-to-take-down-another-private-world-of-warcraft-server-project-ascension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blizzard Sues To Take Down Another Private World of Warcraft Server, Project Ascension ](https://games.slashdot.org/story/26/06/14/0743231/blizzard-sues-to-take-down-another-private-world-of-warcraft-server-project-ascension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 14:09:29](https://news.ycombinator.com/item?id=48527360) - [FarOutCompany](https://faroutcompany.com/)
* [2026-06-14, 13:43:08](https://news.ycombinator.com/item?id=48527145) - [Caddy compatibility for zeroserve: 3x throughput and 70% lower latency](https://su3.io/posts/zeroserve-caddy-compat)
* [2026-06-14, 12:38:31](https://news.ycombinator.com/item?id=48526661) - [The Birth and Death of JavaScript (2014)](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
* [2026-06-14, 12:36:03](https://lobste.rs/s/bbwiob/simplifying_weak_reference_processing) - [Simplifying Weak Reference Processing in ZGC](https://inside.java/2026/06/11/thesis-simplify-weak-reference-processing-zgc/)
* [2026-06-14, 12:35:27](https://news.ycombinator.com/item?id=48526633) - [Formal methods and the future of programming](https://blog.janestreet.com/formal-methods-at-jane-street-index/?from_theconsensus=1)
* [2026-06-14, 11:50:48](https://news.ycombinator.com/item?id=48526360) - [How to earn a billion dollars](https://paulgraham.com/earn.html)
* [2026-06-14, 11:39:41](https://lobste.rs/s/7rmbd0/point_cloud_sound_for_irregular_shaped) - [Point Cloud Sound for irregular shaped audio sources](https://blog.runevision.com/2026/06/point-cloud-sound-for-irregular-shaped.html)
* [2026-06-14, 11:34:00](https://slashdot.org/story/26/06/14/0817238/bitcoin-has-lost-nearly-half-its-value-in-11-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Has Lost Nearly Half Its Value in 11 Months](https://slashdot.org/story/26/06/14/0817238/bitcoin-has-lost-nearly-half-its-value-in-11-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 11:09:16](https://lobste.rs/s/dq7toq/pkgcli_command_line_interface_for) - [pkgcli: A command-line interface for PackageKit](https://blog.tenstral.net/2026/06/introducing-pkgcli-a-nicer-command-line-interface-for-packagekit.html)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 07:34:00](https://developers.slashdot.org/story/26/06/14/0534214/four-lts-java-versions-get-end-of-support-in-a-three-year-window-2029-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four LTS Java Versions Get End-of-Support in a Three-Year Window (2029-2032)](https://developers.slashdot.org/story/26/06/14/0534214/four-lts-java-versions-get-end-of-support-in-a-three-year-window-2029-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 04:34:00](https://news.slashdot.org/story/26/06/14/0317211/uk-police-officer-accused-of-using-ai-to-fake-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police Officer Accused of Using AI to Fake Evidence](https://news.slashdot.org/story/26/06/14/0317211/uk-police-officer-accused-of-using-ai-to-fake-evidence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 03:50:26](https://lobste.rs/s/tylzdy/future_siri_why_private_inference_isn_t) - [The future of Siri, or: why private inference isn’t private enough](https://blog.cryptographyengineering.com/2026/06/09/apples-siri-ai-or-more-shouting-into-the-void-about-private-agents/)
* [2026-06-14, 01:47:00](https://news.slashdot.org/story/26/06/13/0441221/how-author-dave-eggers-avoids-smartphones-internet-access-and-flock-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Author Dave Eggers Avoids Smartphones, Internet Access, and Flock Cameras](https://news.slashdot.org/story/26/06/13/0441221/how-author-dave-eggers-avoids-smartphones-internet-access-and-flock-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-14, 01:28:51](https://lobste.rs/s/jdaf1d/building_serial_vga_everything_console) - [Building a serial and VGA \&quot;everything console\&quot;](http://oldvcr.blogspot.com/2026/06/building-serial-and-vga-everything.html)
* [2026-06-14, 01:01:08](https://lobste.rs/s/matdjp/reactos_open_source_windows_reaches) - [ReactOS \&quot;Open-Source Windows\&quot; Reaches The Milestone Of Being Able To Run Half-Life](https://www.phoronix.com/news/ReactOS-Running-Half-Life)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
* [2026-06-13, 22:34:00](https://news.slashdot.org/story/26/06/13/2227234/amazon-ceos-talks-with-us-officials-triggered-crackdown-on-anthropic-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO&apos;s Talks with U.S. Officials Triggered Crackdown on Anthropic Models](https://news.slashdot.org/story/26/06/13/2227234/amazon-ceos-talks-with-us-officials-triggered-crackdown-on-anthropic-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 22:27:49](https://lobste.rs/s/azz673/pyodide_314_0_webassembly_wheels_for_pypi) - [Pyodide 314.0: WebAssembly wheels for PyPI](https://blog.pyodide.org/posts/314-release/)
* [2026-06-13, 21:34:55](https://lobste.rs/s/f1qxka/adder_at_heart_intel_s_8087_floating_point) - [The adder at the heart of Intel&apos;s 8087 floating-point chip](http://www.righto.com/2026/06/intel-8087-adder-reverse-engineered.html)
* [2026-06-13, 21:34:00](https://slashdot.org/story/26/06/13/1911226/shutterstock-evolves-into-human-led-ai-powered-creative-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shutterstock &apos;Evolves&apos; Into &apos;Human-Led, AI-Powered Creative Platform&apos;](https://slashdot.org/story/26/06/13/1911226/shutterstock-evolves-into-human-led-ai-powered-creative-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 20:41:58](https://news.ycombinator.com/item?id=48521236) - [Show HN: Trace – Offline Mac meeting transcripts you can flag mid-call](https://traceapp.info)
* [2026-06-13, 20:34:00](https://hardware.slashdot.org/story/26/06/13/0224235/gm-updates-250000-evs-with-vehicle-to-grid-firmware-announces-grid-scale-sodium-ion-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Updates 250,000 EVs with Vehicle-to-Grid Firmware, Announces Grid-Scale Sodium-Ion Batteries](https://hardware.slashdot.org/story/26/06/13/0224235/gm-updates-250000-evs-with-vehicle-to-grid-firmware-announces-grid-scale-sodium-ion-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 20:32:10](https://lobste.rs/s/rnmkrg/extinction_level_capitalism) - [Extinction-level capitalism](https://matthewbutterick.com/extinction-level-capitalism.html)
* [2026-06-13, 20:04:04](https://lobste.rs/s/bilqbs/webxdc_secure_mini_apps_for_chats) - [Webxdc - Secure mini apps for chats](https://webxdc.org/)
* [2026-06-13, 19:54:00](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss) - [Intel Intro&apos;d ‘The First Processor In The X86 Series And The First 8086 Microprocessor’ On This Day](https://soylentnews.org/article.pl?sid=26/06/12/1645227&amp;from=rss)
* [2026-06-13, 19:39:15](https://lobste.rs/s/p78ttt/emacs_rec_mode_all_text_database_system) - [Emacs rec mode, an all-text database system](https://www.homepages.ucl.ac.uk/~ucecesf/blog/20260602.html)
* [2026-06-13, 19:34:00](https://news.slashdot.org/story/26/06/13/0524209/vim-classic-83-launched-as-an-ai-free-vim-fork?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vim Classic 8.3 Launched as an AI-Free Vim Fork](https://news.slashdot.org/story/26/06/13/0524209/vim-classic-83-launched-as-an-ai-free-vim-fork?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 18:34:00](https://linux.slashdot.org/story/26/06/13/1817206/arch-linux-malware-incident-malicious-commits-found-in-1579-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arch Linux Malware Incident: Malicious Commits Found in 1,579 Packages](https://linux.slashdot.org/story/26/06/13/1817206/arch-linux-malware-incident-malicious-commits-found-in-1579-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-13, 16:58:52](https://news.ycombinator.com/item?id=48519102) - [Global density and biomass of arbuscular mycorrhizal fungal networks](https://www.science.org/doi/10.1126/science.adu4373)
* [2026-06-13, 15:37:16](https://lobste.rs/s/7s8fwa/repo_slopscore_detecting_ai_llm) - [repo-slopscore: Detecting AI/LLM contributions in git repositories via commit history analysis](https://slopscan.ava.pet/)
* [2026-06-13, 15:31:46](https://lobste.rs/s/4rcwmh/talk_more_your_coding_agents) - [Talk more to your coding agents](https://www.datawill.io/posts/2026-06-my-agent-workflow/)
* [2026-06-13, 15:24:13](https://lobste.rs/s/jcpzqt/banning_noise_will_be_disaster_for) - [Banning noise will be a disaster for statistical data products](https://desfontain.es/blog/banning-noise.html)
* [2026-06-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss) - [Researchers Put AI Chatbots in Charge of a Simulated World. This One Destroyed Everything in 4 Days](https://soylentnews.org/article.pl?sid=26/06/12/1339210&amp;from=rss)
* [2026-06-13, 15:07:09](https://lobste.rs/s/bt7rtp/every_frame_perfect) - [Every Frame Perfect](https://tonsky.me/blog/every-frame-perfect/)
* [2026-06-13, 10:25:00](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss) - [Officials Powerless to Stop 8 New Data Centers That Could Transform Small Texas County](https://soylentnews.org/article.pl?sid=26/06/12/1337219&amp;from=rss)
* [2026-06-13, 10:24:09](https://lobste.rs/s/sqh2uq/opensource_ai_must_win) - [Opensource AI Must Win](https://opensourceaimustwin.com)
* [2026-06-13, 05:39:00](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss) - [Cities Can&apos;t Figure Out How to Turn Off Flock Cameras, So They&apos;re Using Trash Bags](https://soylentnews.org/article.pl?sid=26/06/12/1141258&amp;from=rss)
* [2026-06-13, 03:33:10](https://lobste.rs/s/nbaa0n/statement_on_us_government_directive) - [Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://www.anthropic.com/news/fable-mythos-access)
* [2026-06-13, 02:17:01](https://lobste.rs/s/tigq8d/rejected_emoji_proposals) - [Rejected Emoji Proposals](https://charlottebuff.com/unicode/misc/rejected-emoji-proposals/)
* [2026-06-13, 00:56:00](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss) - [Yoti Flagged a Playstation User to Authorities for Running GrapheneOS on Their Phone](https://soylentnews.org/article.pl?sid=26/06/12/1136247&amp;from=rss)
* [2026-06-12, 20:12:00](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss) - [Finland Deploys New System to Detect Threats to Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/12/1133204&amp;from=rss)
* [2026-06-12, 15:29:00](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss) - [Google Liable for AI Overview Falsehoods](https://soylentnews.org/article.pl?sid=26/06/11/0213228&amp;from=rss)
* [2026-06-12, 10:43:00](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss) - [You Can Now Get a Religious Exemption From Using AI at Work](https://soylentnews.org/article.pl?sid=26/06/11/022206&amp;from=rss)
* [2026-06-12, 10:02:21](https://news.ycombinator.com/item?id=48502053) - [The first game engine for robotics](https://luckyrobots.com/)
* [2026-06-12, 05:51:00](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss) - [Lexar Regional Manager Says That RAM Prices Are Expected To Double By The End Of The Year ](https://soylentnews.org/article.pl?sid=26/06/11/027248&amp;from=rss)
* [2026-06-12, 01:18:00](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss) - [62 Year Old Dutch Man Marries The Chatbot Of His Dreams](https://soylentnews.org/article.pl?sid=26/06/11/020204&amp;from=rss)
* [2026-06-11, 20:28:00](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss) - [DUPE: World’s First Wind-powered Underwater Datacentre Starts Operating in China](https://soylentnews.org/article.pl?sid=26/06/10/186244&amp;from=rss)
* [2026-06-11, 16:48:49](https://news.ycombinator.com/item?id=48492822) - [The only scalable delete in Postgres is DROP TABLE](https://planetscale.com/blog/the-only-scalable-delete)
* [2026-06-11, 15:43:00](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss) - [Donut Labs Much Reported &apos;Solid-State Sodium Ion Battery&apos; Appears to be Lithium Ion, After All](https://soylentnews.org/article.pl?sid=26/06/10/183253&amp;from=rss)
* [2026-06-11, 14:43:11](https://news.ycombinator.com/item?id=48491048) - [Lisp&apos;s Influence on Ruby](https://blog.tacoda.dev/lisps-influence-on-ruby-6a54f1a7740e)
* [2026-06-11, 12:50:29](https://news.ycombinator.com/item?id=48489636) - [Segmented type appreciation corner (2018)](https://aresluna.org/segmented-type/)
* [2026-06-11, 10:58:00](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss) - [Google Signs $920M Monthly Compute Deal With SpaceX ](https://soylentnews.org/article.pl?sid=26/06/10/1134227&amp;from=rss)
* [2026-06-11, 06:13:00](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss) - [Canonical Sends Ubuntu Into the AI Agent Era](https://soylentnews.org/article.pl?sid=26/06/10/1126222&amp;from=rss)
* [2026-06-11, 01:43:19](https://news.ycombinator.com/item?id=48485277) - [Inverse Rubric Optimization: A testbed for agent science](https://fulcrum.inc/2026/06/09/inverse-rubric-optimization.html)
* [2026-06-11, 01:30:00](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss) - [S&amp;P 500 Rejects SpaceX, Also Blocking Entry for OpenAI and Anthropic](https://soylentnews.org/article.pl?sid=26/06/10/1111258&amp;from=rss)
* [2026-06-11, 00:13:12](https://news.ycombinator.com/item?id=48484608) - [Lattice Triangles Are Rare](https://axiommath.ai/territory/the-reveal)
* [2026-06-10, 20:44:00](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss) - [Cyberdecks Are Having a Moment, Rejecting Big Tech Surveillance With Style and Substance](https://soylentnews.org/article.pl?sid=26/06/10/116251&amp;from=rss)
* [2026-06-10, 16:01:00](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss) - [UC Faculty Demand a Return to SAT Tests for STEM Applicants](https://soylentnews.org/article.pl?sid=26/06/10/0054230&amp;from=rss)
* [2026-06-10, 14:08:36](https://news.ycombinator.com/item?id=48476539) - [TorchCodec 0.14: HDR Video Decoding for CPU and CUDA, and Fast Wav Decoder](https://github.com/meta-pytorch/torchcodec/releases/tag/v0.14.0)
* [2026-06-10, 11:57:21](https://news.ycombinator.com/item?id=48474982) - [Quivers: A year of linear algebra by drawing arrows](https://lisyarus.github.io/blog/posts/quivers-a-year-of-linear-algebra-by-drawing-arrows.html)
* [2026-06-10, 11:25:00](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - [Russia&apos;s New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)
* [2026-06-10, 06:35:00](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss) - [&apos;Please Do Not Vibe F--- Up This Software&apos;: Broken Backups Spark AI Coding Row in Rsync Project](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss)
* [2026-06-10, 05:01:31](https://news.ycombinator.com/item?id=48471638) - [Firewood Splitting Simulator](https://screen.toys/firewood/)
* [2026-06-10, 01:53:00](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - [NASA&apos;s Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)
