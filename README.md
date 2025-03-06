# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technology and Innovations

* [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)

* [A Quarter of Startups in YC's Current Cohort Have Codebases That Are Almost Entirely AI-Generated](https://slashdot.org/story/25/03/06/159208/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [NASA is Making Sacrifices To Keep the Voyager Mission Alive](https://science.slashdot.org/story/25/03/06/1615227/nasa-is-making-sacrifices-to-keep-the-voyager-mission-alive?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Revolt: Open-Source Alternative to Discord](https://revolt.chat)

* [NASA Shuts Off Voyager Science Instrument](https://gizmodo.com/nasa-shuts-off-voyager-science-instrument-more-power-cuts-ahead-to-keep-both-probes-going-2000572202)

## AI and Automation

* [Amazon Tests AI Dubbing on Prime Video Movies, Series](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Bangladesh's factories turn to surveillance, automation; workers feel pressure](https://restofworld.org/2025/bangladesh-garment-factories-automation-surveillance/)

* [Magic Containers: Revolutionizing Edge Computing](https://bunny.net/blog/introducing-magic-containers-what-edge-computing-was-meant-to-be/)

## Cryptography and Security

* [The Combined Cipher Machine 1940's-1950's](http://chris-intel-corner.blogspot.com/2025/03/the-combined-cipher-machine-1942-1962.html)

* [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)

* [UK quietly scrubs encryption advice from government websites](https://techcrunch.com/2025/03/06/uk-quietly-scrubs-encryption-advice-from-government-websites/)

## Scientific Discoveries and Space Exploration

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)

* [Scientists crack how aspirin might stop cancers from spreading](https://www.bbc.com/news/articles/c1d4n119xr7o)

## Historical Reflections in Tech

* [50 Years in Filesystems: 1984](https://blog.koehntopp.info/2023/05/06/50-years-in-filesystems-1984.html)

* [Why 56k Modems Relied on Digital Phone Lines You Didn't Know We Had](https://hackaday.com/2025/03/06/why-56k-modems-relied-on-digital-phone-lines-you-didnt-know-we-had/)

## Entrepreneurship and Industry Trends

* [Eric Schmidt Argues Against a 'Manhattan Project for AGI'](https://slashdot.org/story/25/03/06/138259/eric-schmidt-argues-against-a-manhattan-project-for-agi?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)

## Hardware and Performance Challenges

* [Goldman Sachs: Why AI Spending Is Not Boosting GDP](https://slashdot.org/story/25/03/06/0619224/goldman-sachs-why-ai-spending-is-not-boosting-gdp?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The case of the vanishing CPU: A Linux kernel debugging story](https://clickhouse.com/blog/a-case-of-the-vanishing-cpu-a-linux-kernel-debugging-story)

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

* [2025-03-06, 18:50:00](https://news.slashdot.org/story/25/03/06/183209/us-communications-agency-to-explore-alternatives-to-gps-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Communications Agency To Explore Alternatives To GPS Systems](https://news.slashdot.org/story/25/03/06/183209/us-communications-agency-to-explore-alternatives-to-gps-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 18:48:17](https://lobste.rs/s/ehiven/succinct_data_structures) - [Succinct data structures](https://blog.startifact.com/posts/succinct/)
* [2025-03-06, 18:44:08](https://lobste.rs/s/9oetiu/types_as_design_tool) - [Types as a design tool](https://interjectedfuture.com/types-as-a-design-tool/)
* [2025-03-06, 18:34:11](https://news.ycombinator.com/item?id=43283498) - [50 Years in Filesystems: 1984](https://blog.koehntopp.info/2023/05/06/50-years-in-filesystems-1984.html)
* [2025-03-06, 18:24:37](https://news.ycombinator.com/item?id=43283367) - [Questions for William J. Rapaport](https://docs.google.com/forms/d/e/1FAIpQLScu0u_nW3S94CfrEGzaABprsGm322wVaBkiqF-ajkN_HVKHhQ/viewform?usp=header)
* [2025-03-06, 18:10:00](https://news.slashdot.org/story/25/03/06/1727237/denmark-postal-service-to-stop-delivering-letters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Denmark Postal Service To Stop Delivering Letters](https://news.slashdot.org/story/25/03/06/1727237/denmark-postal-service-to-stop-delivering-letters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 18:08:24](https://news.ycombinator.com/item?id=43283178) - [Atlassian announces end of support for Opsgenie](https://www.atlassian.com/blog/announcements/evolution-of-it-operations)
* [2025-03-06, 17:48:37](https://news.ycombinator.com/item?id=43282995) - [Succinct Data Structures](https://blog.startifact.com/posts/succinct/)
* [2025-03-06, 17:42:44](https://news.ycombinator.com/item?id=43282936) - [The Combined Cipher Machine 1940's-1950's](http://chris-intel-corner.blogspot.com/2025/03/the-combined-cipher-machine-1942-1962.html)
* [2025-03-06, 17:39:39](https://news.ycombinator.com/item?id=43282905) - [Mistral OCR](https://mistral.ai/fr/news/mistral-ocr)
* [2025-03-06, 17:38:33](https://news.ycombinator.com/item?id=43282892) - [UK quietly scrubs encryption advice from government websites](https://techcrunch.com/2025/03/06/uk-quietly-scrubs-encryption-advice-from-government-websites/)
* [2025-03-06, 17:22:01](https://lobste.rs/s/aln3cp/strobelight_profiling_service_built_on) - [Strobelight: A profiling service built on open source technology](https://engineering.fb.com/2025/01/21/production-engineering/strobelight-a-profiling-service-built-on-open-source-technology/)
* [2025-03-06, 17:20:00](https://games.slashdot.org/story/25/03/06/1719247/slashdot-asks-whats-the-most-influential-video-game-of-all-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Slashdot Asks: What's the Most Influential Video Game of All Time?](https://games.slashdot.org/story/25/03/06/1719247/slashdot-asks-whats-the-most-influential-video-game-of-all-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 17:19:44](https://news.ycombinator.com/item?id=43282668) - [Why 56k Modems Relied on Digital Phone Lines You Didn't Know We Had](https://hackaday.com/2025/03/06/why-56k-modems-relied-on-digital-phone-lines-you-didnt-know-we-had/)
* [2025-03-06, 17:14:39](https://news.ycombinator.com/item?id=43282594) - [NASA Shuts Off Voyager Science Instrument](https://gizmodo.com/nasa-shuts-off-voyager-science-instrument-more-power-cuts-ahead-to-keep-both-probes-going-2000572202)
* [2025-03-06, 17:12:08](https://lobste.rs/s/wccows/distributed_systems_without_raft_part_1) - [Distributed Systems without Raft (part 1)](https://david-delassus.medium.com/distributed-systems-without-raft-part-1-a6b0b43db7ee)
* [2025-03-06, 17:02:58](https://news.ycombinator.com/item?id=43282489) - [Mistral OCR](https://mistral.ai/news/mistral-ocr)
* [2025-03-06, 17:01:10](https://news.ycombinator.com/item?id=43282462) - [Leaping AI (YC W25) Is Hiring Founding Engineers for Self-Improving Voice AI](https://www.ycombinator.com/companies/leaping-ai/jobs/BpsfpvY-founding-full-stack-engineer)
* [2025-03-06, 16:50:00](https://news.slashdot.org/story/25/03/06/1628235/ryanair-delays-move-to-paperless-boarding-passes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ryanair Delays Move To Paperless Boarding Passes](https://news.slashdot.org/story/25/03/06/1628235/ryanair-delays-move-to-paperless-boarding-passes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 16:42:28](https://lobste.rs/s/mltpfg/xit_is_coming) - [xit is coming](https://radarroark.github.io/xit/xit-is-coming.html)
* [2025-03-06, 16:37:34](https://news.ycombinator.com/item?id=43282133) - [Anime fans stumbled upon a mathematical proof](https://www.scientificamerican.com/article/the-surprisingly-difficult-mathematical-proof-that-anime-fans-helped-solve/)
* [2025-03-06, 16:18:11](https://news.ycombinator.com/item?id=43281893) - [More thoughts on the 1670 modem's weird noises](https://rachelbythebay.com/w/2025/03/05/1670/)
* [2025-03-06, 16:15:00](https://science.slashdot.org/story/25/03/06/1615227/nasa-is-making-sacrifices-to-keep-the-voyager-mission-alive?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA is Making Sacrifices To Keep the Voyager Mission Alive](https://science.slashdot.org/story/25/03/06/1615227/nasa-is-making-sacrifices-to-keep-the-voyager-mission-alive?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 15:54:26](https://lobste.rs/s/gj6ghr/we_re_fixing_edge_computing_introducing) - [We’re fixing Edge Computing: Introducing Magic Containers](https://bunny.net/blog/introducing-magic-containers-what-edge-computing-was-meant-to-be/)
* [2025-03-06, 15:36:46](https://lobste.rs/s/vd2fxp/chat_bots_revisited) - [Chat Bots Revisited](https://blog.cofree.coffee/2025-03-05-chat-bots-revisited/)
* [2025-03-06, 15:30:00](https://news.slashdot.org/story/25/03/06/1513201/us-congressional-panel-urges-americans-to-ditch-china-made-routers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Congressional Panel Urges Americans To Ditch China-made Routers](https://news.slashdot.org/story/25/03/06/1513201/us-congressional-panel-urges-americans-to-ditch-china-made-routers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 15:10:36](https://lobste.rs/s/30etvu/my_changes_default_phoenix_boilerplate) - [My changes to the default Phoenix boilerplate](https://mediremi.com/writing/phoenix-boilerplate/)
* [2025-03-06, 14:58:00](https://slashdot.org/story/25/03/06/159208/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A Quarter of Startups in YC's Current Cohort Have Codebases That Are Almost Entirely AI-Generated](https://slashdot.org/story/25/03/06/159208/a-quarter-of-startups-in-ycs-current-cohort-have-codebases-that-are-almost-entirely-ai-generated?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 14:47:35](https://news.ycombinator.com/item?id=43280836) - [Launch HN: Cenote (YC W25) – Back Office Automation for Medical Clinics](https://news.ycombinator.com/item?id=43280836)
* [2025-03-06, 14:39:36](https://news.ycombinator.com/item?id=43280748) - [Bangladesh's factories turn to surveillance, automation; workers feel pressure](https://restofworld.org/2025/bangladesh-garment-factories-automation-surveillance/)
* [2025-03-06, 14:30:10](https://news.ycombinator.com/item?id=43280615) - [Show HN: CodeTracer – A new time-traveling debugger implemented in Nim and Rust](https://github.com/metacraft-labs/codetracer)
* [2025-03-06, 14:29:18](https://lobste.rs/s/23uu1f/writing_oled_display_driver_microzig) - [Writing an OLED display driver in MicroZig (2024)](https://andrewconl.in/blog/2024/microzig-display-driver/)
* [2025-03-06, 14:00:00](https://news.slashdot.org/story/25/03/06/1316253/china-to-publish-policy-to-boost-risc-v-chip-use-nationwide?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China To Publish Policy To Boost RISC-V Chip Use Nationwide](https://news.slashdot.org/story/25/03/06/1316253/china-to-publish-policy-to-boost-risc-v-chip-use-nationwide?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 13:35:43](https://lobste.rs/s/z5moxa/testing_causality_scientific_modelling) - [Testing Causality in Scientific Modelling Software](https://export.arxiv.org/pdf/2209.00357v2.pdf)
* [2025-03-06, 13:08:00](https://slashdot.org/story/25/03/06/138259/eric-schmidt-argues-against-a-manhattan-project-for-agi?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Eric Schmidt Argues Against a 'Manhattan Project for AGI'](https://slashdot.org/story/25/03/06/138259/eric-schmidt-argues-against-a-manhattan-project-for-agi?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 12:33:27](https://news.ycombinator.com/item?id=43279494) - [Age and cognitive skills: Use it or lose it](https://www.science.org/doi/full/10.1126/sciadv.ads1560?af=R)
* [2025-03-06, 11:53:08](https://news.ycombinator.com/item?id=43279147) - [Scientists crack how aspirin might stop cancers from spreading](https://www.bbc.com/news/articles/c1d4n119xr7o)
* [2025-03-06, 11:05:57](https://lobste.rs/s/yykwi5/50_years_filesystems_1984) - [50 years in filesystems: 1984](https://blog.koehntopp.info/2023/05/06/50-years-in-filesystems-1984.html)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 09:57:03](https://lobste.rs/s/uc6sag/case_vanishing_cpu_linux_kernel) - [The case of the vanishing CPU: A Linux kernel debugging story](https://clickhouse.com/blog/a-case-of-the-vanishing-cpu-a-linux-kernel-debugging-story)
* [2025-03-06, 09:01:00](https://yro.slashdot.org/story/25/03/06/0836227/india-grants-tax-officials-sweeping-digital-access-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India Grants Tax Officials Sweeping Digital Access Powers](https://yro.slashdot.org/story/25/03/06/0836227/india-grants-tax-officials-sweeping-digital-access-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 08:47:32](https://news.ycombinator.com/item?id=43277918) - [Revolt: Open-Source Alternative to Discord](https://revolt.chat)
* [2025-03-06, 08:08:08](https://lobste.rs/s/uaiivt/xdg_ninja_shell_script_which_checks_your) - [xdg-ninja: A shell script which checks your $HOME for unwanted files and directories](https://github.com/b3nj5m1n/xdg-ninja)
* [2025-03-06, 06:53:46](https://news.ycombinator.com/item?id=43277214) - [Apache iceberg the Hadoop of the modern-data-stack?](https://blog.det.life/apache-iceberg-the-hadoop-of-the-modern-data-stack-c83f63a4ebb9)
* [2025-03-06, 06:20:00](https://slashdot.org/story/25/03/06/0619224/goldman-sachs-why-ai-spending-is-not-boosting-gdp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ Goldman Sachs: Why AI Spending Is Not Boosting GDP](https://slashdot.org/story/25/03/06/0619224/goldman-sachs-why-ai-spending-is-not-boosting-gdp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 03:50:00](https://news.slashdot.org/story/25/03/06/0348233/utah-passes-first-us-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Utah Passes First US App Store Age Verification Law](https://news.slashdot.org/story/25/03/06/0348233/utah-passes-first-us-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 01:33:14](https://news.ycombinator.com/item?id=43275193) - [Cognitive Behaviors That Enable Self-Improving Reasoners](https://arxiv.org/abs/2503.01307)
* [2025-03-06, 01:32:56](https://lobste.rs/s/tondqc/is_it_true_what_they_say_lobsters_love) - [Is it true what they say: \"Lobsters love Guinness\"?](https://postimg.cc/phdVNwPz)
* [2025-03-06, 01:30:00](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Tests AI Dubbing on Prime Video Movies, Series](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-06, 00:13:40](https://lobste.rs/s/fsc8ki/determinate_nix_3_0) - [Determinate Nix 3.0](https://determinate.systems/posts/determinate-nix-30/)
* [2025-03-05, 23:30:00](https://tech.slashdot.org/story/25/03/05/1944216/google-is-adding-more-ai-overviews-and-a-new-ai-mode-to-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google is Adding More AI Overviews and a New 'AI Mode' To Search](https://tech.slashdot.org/story/25/03/05/1944216/google-is-adding-more-ai-overviews-and-a-new-ai-mode-to-search?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 22:01:00](https://tech.slashdot.org/story/25/03/05/1928223/europe-on-alert-over-suspected-sabotage-of-undersea-cables?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe on Alert Over Suspected Sabotage of Undersea Cables](https://tech.slashdot.org/story/25/03/05/1928223/europe-on-alert-over-suspected-sabotage-of-undersea-cables?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 21:46:35](https://lobste.rs/s/itcqle/good_memory_allocator_200_lines_code) - [A good memory allocator in 200 lines of code](https://github.com/ziglang/zig/blob/0.14.0/lib/std/heap/SmpAllocator.zig)
* [2025-03-05, 21:10:35](https://news.ycombinator.com/item?id=43272463) - [Zentool – AMD Zen Microcode Manipulation Utility](https://github.com/google/security-research/blob/master/pocs/cpus/entrysign/zentool/README.md)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 20:19:48](https://lobste.rs/s/oegolv/git_without_forge) - [Git without a forge](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/git-no-forge/)
* [2025-03-05, 19:09:39](https://news.ycombinator.com/item?id=43270843) - [QwQ-32B: Embracing the Power of Reinforcement Learning](https://qwenlm.github.io/blog/qwq-32b/)
* [2025-03-05, 18:25:35](https://lobste.rs/s/c5pgnx/what_if_we_just_didn_t_decompress_it) - [What if we just didn’t decompress it?](https://blog.spiraldb.com/what-if-we-just-didnt-decompress-it/)
* [2025-03-05, 17:42:09](https://lobste.rs/s/qnfuus/zen_art_microcode_hacking) - [Zen and the Art of Microcode Hacking](https://bughunters.google.com/blog/5424842357473280/zen-and-the-art-of-microcode-hacking)
* [2025-03-05, 17:17:55](https://news.ycombinator.com/item?id=43269475) - [GoStringUngarbler: Deobfuscating Strings in Garbled Binaries](https://cloud.google.com/blog/topics/threat-intelligence/gostringungarbler-deobfuscating-strings-in-garbled-binaries)
* [2025-03-05, 16:48:12](https://lobste.rs/s/ecmmix/defense_text_labels) - [In Defense of Text Labels](https://www.chrbutler.com/in-defense-of-text-labels)
* [2025-03-05, 15:51:57](https://lobste.rs/s/gkawzq/happy_day_for_rust) - [A Happy Day for Rust](https://steveklabnik.com/writing/a-happy-day-for-rust/)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 15:26:03](https://lobste.rs/s/wjtlv8/basecamp_release_github_extension_for) - [Basecamp release Github extension for offline CI signoff](https://github.com/basecamp/gh-signoff)
* [2025-03-05, 13:59:50](https://news.ycombinator.com/item?id=43266453) - [Apple M3 Ultra](https://www.apple.com/newsroom/2025/03/apple-reveals-m3-ultra-taking-apple-silicon-to-a-new-extreme/)
* [2025-03-05, 13:32:52](https://lobste.rs/s/0g0ulj/why_alias_is_my_last_resort_for_aliases) - [Why \"alias\" is my last resort for aliases](https://evanhahn.com/why-alias-is-my-last-resort-for-aliases/)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 08:48:19](https://lobste.rs/s/7iu9ze/zig_0_14_0_release_notes) - [Zig 0.14.0 Release Notes](https://ziglang.org/download/0.14.0/release-notes.html)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-04, 21:41:48](https://lobste.rs/s/igqzdo/tailscale_is_pretty_useful) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-04, 01:17:23](https://news.ycombinator.com/item?id=43248993) - [Game Theory and Settling the Debts of the Deceased in Ancient Times](https://politicalcalculations.blogspot.com/2025/02/game-theory-and-settling-debts-of.html)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 18:16:09](https://news.ycombinator.com/item?id=43244860) - [On the criteria to be used in decomposing systems into modules (1972)](https://dl.acm.org/doi/pdf/10.1145/361598.361623)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 15:22:01](https://news.ycombinator.com/item?id=43242587) - [Sayonara, R35: Nissan Japan has stopped taking orders for the GT-R](https://www.topgear.com/car-news/supercars/sayonara-r35-nissan-japan-has-stopped-taking-orders-gt-r)
* [2025-03-03, 13:39:04](https://news.ycombinator.com/item?id=43241589) - [Beavers Are Coming Home](https://www.wildlifetrusts.org/news/beavers-are-coming-home)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 08:26:15](https://news.ycombinator.com/item?id=43239573) - [IoT project using thermal sensors to monitor spaces](https://s2.dev/blog/iot)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
