# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The case of the vanishing CPU: A Linux kernel debugging story](https://clickhouse.com/blog/a-case-of-the-vanishing-cpu-a-linux-kernel-debugging-story) - A fascinating look into troubleshooting disappearing CPU issues in the Linux Kernel. [Comments](https://lobste.rs/s/uc6sag/case_vanishing_cpu_linux_kernel)

* [Revolt: Open-Source Alternative to Discord](https://revolt.chat) - Open-source team communication app offers an alternative to Discord. [Comments](https://news.ycombinator.com/item?id=43277918)

* [xdg-ninja: A shell script which checks your $HOME for unwanted files and directories](https://github.com/b3nj5m1n/xdg-ninja) - A tool to keep your home directory clean and organized. [Comments](https://lobste.rs/s/uaiivt/xdg_ninja_shell_script_which_checks_your)

* [Zen and the Art of Microcode Hacking](https://bughunters.google.com/blog/5424842357473280/zen-and-the-art-of-microcode-hacking) - Delving into the intricacies of AMD Zen microcode manipulation. [Comments](https://lobste.rs/s/qnfuus/zen_art_microcode_hacking)

* [Git without a forge](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/git-no-forge/) - Exploring decentralized workflows for Git repositories. [Comments](https://lobste.rs/s/oegolv/git_without_forge)

* [Pokemon Red (Reinforcement Learning Edition)](https://drubinstein.github.io/pokerl/) - Using reinforcement learning models to play a classic Pokemon game. [Comments](https://lobste.rs/s/fyxiao/pokemon_red_reinforcement_learning)

## Artificial Intelligence Developments

* [Amazon Tests AI Dubbing on Prime Video Movies, Series](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon applies AI for automated dubbing of entertainment content. [Comments](https://news.ycombinator.com/item?id=43277806)

* [OpenAI Plots Charging $20,000 a Month For PhD-Level Agents](https://slashdot.org/story/25/03/05/1559207/openai-plots-charging-20000-a-month-for-phd-level-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - High pricing strategy by OpenAI for specialized AI applications. [Comments](https://soylentnews.org/article.pl?sid=25/03/04/1358203)

* [Demos of Stream Processing Solving Real-World Problems](https://github.com/risingwavelabs/awesome-stream-processing) - A comprehensive showcase of stream processing applications. [Comments](https://news.ycombinator.com/item?id=43278036)

## Unusual Discoveries and Historical Insights

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - Evidence suggests meteors originating from outside the Solar System. [Comments](https://slashdot.org/story/25/03/05/1230232/suspected-interstellar-meteors-analysis)

* [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250) - An archaeological find showcasing ancient transportation innovation. [Comments](https://news.ycombinator.com/item?id=43277356)

* [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226) - A shocking result of a volcanic eruption's intense heat. [Comments](https://news.slashdot.org/story/25/03/04/181036/explanatory-cross-links-vesuvious)

## Global Policy and Social Shifts

* [Utah Passes First US App Store Age Verification Law](https://news.slashdot.org/story/25/03/06/0348233/utah-passes-first-us-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Newest regulatory measure targets underage app usage. [Comments](https://lobste.rs/s/jovktg/app-regulation-policies)

* [India Grants Tax Officials Sweeping Digital Access Powers](https://yro.slashdot.org/story/25/03/06/0836227/india-grants-tax-officials-sweeping-digital-access-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Widespread digital access raises privacy concerns. [Comments](https://news.ycombinator.com/item?id=43270392)

* [Europe on Alert Over Suspected Sabotage of Undersea Cables](https://tech.slashdot.org/story/25/03/05/1928223/europe-on-alert-over-suspected-sabotage-of-undersea-cables?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Vital infrastructure under threat as fears escalate. [Comments](https://news.ycombinator.com/item?id=43270012)

## Environmental and Scientific Explorations

* [NASA Uses GPS On the Moon For the First Time](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough satellite navigation marks a milestone in lunar exploration. [Comments](https://lobste.rs/s/rve103/gps-at-moon-achievement)

* [Half of World's CO2 Emissions Come From 36 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/25/03/05/181204/half-of-worlds-co2-emissions-come-from-36-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Shocking statistics about corporate impact on climate change. [Comments](https://soylentnews.org/article.pl?sid=25/03/04/1359052)

* [The Tiny Star Explosions Powering Moore's Law](https://spectrum.ieee.org/euv-light-source) - EUV Lithography's intricate technology backing computational evolution. [Comments](https://lobste.rs/s/uioae7/moore-exploding-star-metaphors)

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

* [2025-03-06, 09:57:03](https://lobste.rs/s/uc6sag/case_vanishing_cpu_linux_kernel) - [The case of the vanishing CPU: A Linux kernel debugging story](https://clickhouse.com/blog/a-case-of-the-vanishing-cpu-a-linux-kernel-debugging-story)
* [2025-03-06, 09:04:38](https://news.ycombinator.com/item?id=43278036) - [Demos of Stream Processing Solving Real-World Problems](https://github.com/risingwavelabs/awesome-stream-processing)
* [2025-03-06, 09:01:00](https://yro.slashdot.org/story/25/03/06/0836227/india-grants-tax-officials-sweeping-digital-access-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India Grants Tax Officials Sweeping Digital Access Powers](https://yro.slashdot.org/story/25/03/06/0836227/india-grants-tax-officials-sweeping-digital-access-powers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 08:48:13](https://news.ycombinator.com/item?id=43277924) - [Forget Twitter Threads; Write a Blog Post Instead](https://kevquirk.com/blog/forget-twitter-threads-write-a-blog-post-instead)
* [2025-03-06, 08:47:32](https://news.ycombinator.com/item?id=43277918) - [Revolt: Open-Source Alternative to Discord](https://revolt.chat)
* [2025-03-06, 08:16:41](https://news.ycombinator.com/item?id=43277748) - [Due to new tariffs, many more physical game discs may \"simply not get made\"](https://arstechnica.com/gaming/2025/03/thanks-to-new-tariffs-many-more-physical-game-discs-may-simply-not-get-made/)
* [2025-03-06, 08:08:08](https://lobste.rs/s/uaiivt/xdg_ninja_shell_script_which_checks_your) - [xdg-ninja: A shell script which checks your $HOME for unwanted files and directories](https://github.com/b3nj5m1n/xdg-ninja)
* [2025-03-06, 07:00:13](https://news.ycombinator.com/item?id=43277250) - [Arva AI (YC S24) Is Hiring an AI Product Engineer](https://www.ycombinator.com/companies/arva-ai/jobs/OBPwCiU-ai-product-engineer)
* [2025-03-06, 06:53:46](https://news.ycombinator.com/item?id=43277214) - [Apache iceberg the Hadoop of the modern-data-stack?](https://blog.det.life/apache-iceberg-the-hadoop-of-the-modern-data-stack-c83f63a4ebb9)
* [2025-03-06, 06:20:00](https://slashdot.org/story/25/03/06/0619224/goldman-sachs-why-ai-spending-is-not-boosting-gdp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ Goldman Sachs: Why AI Spending Is Not Boosting GDP](https://slashdot.org/story/25/03/06/0619224/goldman-sachs-why-ai-spending-is-not-boosting-gdp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 03:50:00](https://news.slashdot.org/story/25/03/06/0348233/utah-passes-first-us-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Utah Passes First US App Store Age Verification Law](https://news.slashdot.org/story/25/03/06/0348233/utah-passes-first-us-app-store-age-verification-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 01:33:14](https://news.ycombinator.com/item?id=43275193) - [Cognitive Behaviors That Enable Self-Improving Reasoners](https://arxiv.org/abs/2503.01307)
* [2025-03-06, 01:32:56](https://lobste.rs/s/tondqc/is_it_true_what_they_say_lobsters_love) - [Is it true what they say: \"Lobsters love Guinness\"?](https://postimg.cc/phdVNwPz)
* [2025-03-06, 01:30:00](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Tests AI Dubbing on Prime Video Movies, Series](https://slashdot.org/story/25/03/05/1954215/amazon-tests-ai-dubbing-on-prime-video-movies-series?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-06, 00:53:32](https://news.ycombinator.com/item?id=43274821) - [The US stops sharing air quality data from embassies worldwide](https://apnews.com/article/us-air-quality-monitors-8270927bbd0f166238243ac9d14bce03)
* [2025-03-06, 00:23:33](https://news.ycombinator.com/item?id=43274613) - [DeepSeek-R1-671B-Q4_K_M with 1 or 2 Arc A770 on Xeon](https://github.com/intel/ipex-llm/blob/main/docs/mddocs/Quickstart/llamacpp_portable_zip_gpu_quickstart.md)
* [2025-03-06, 00:13:40](https://lobste.rs/s/fsc8ki/determinate_nix_3_0) - [Determinate Nix 3.0](https://determinate.systems/posts/determinate-nix-30/)
* [2025-03-05, 23:30:00](https://tech.slashdot.org/story/25/03/05/1944216/google-is-adding-more-ai-overviews-and-a-new-ai-mode-to-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google is Adding More AI Overviews and a New 'AI Mode' To Search](https://tech.slashdot.org/story/25/03/05/1944216/google-is-adding-more-ai-overviews-and-a-new-ai-mode-to-search?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 22:01:00](https://tech.slashdot.org/story/25/03/05/1928223/europe-on-alert-over-suspected-sabotage-of-undersea-cables?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Europe on Alert Over Suspected Sabotage of Undersea Cables](https://tech.slashdot.org/story/25/03/05/1928223/europe-on-alert-over-suspected-sabotage-of-undersea-cables?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 21:48:39](https://news.ycombinator.com/item?id=43273034) - [Exploring the Paramilitary Leaks](https://micahflee.com/exploring-the-paramilitary-leaks/)
* [2025-03-05, 21:46:35](https://lobste.rs/s/itcqle/good_memory_allocator_200_lines_code) - [A good memory allocator in 200 lines of code](https://github.com/ziglang/zig/blob/0.14.0/lib/std/heap/SmpAllocator.zig)
* [2025-03-05, 21:10:35](https://news.ycombinator.com/item?id=43272463) - [Zentool – AMD Zen Microcode Manipulation Utility](https://github.com/google/security-research/blob/master/pocs/cpus/entrysign/zentool/README.md)
* [2025-03-05, 21:00:00](https://games.slashdot.org/story/25/03/05/1842243/nintendo-says-latest-legal-win-against-piracy-significant-for-entire-games-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nintendo Says Latest Legal Win Against Piracy 'Significant' For 'Entire Games Industry'](https://games.slashdot.org/story/25/03/05/1842243/nintendo-says-latest-legal-win-against-piracy-significant-for-entire-games-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 20:56:25](https://news.ycombinator.com/item?id=43272275) - [Git without a forge](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/git-no-forge/)
* [2025-03-05, 20:33:03](https://lobste.rs/s/fyxiao/pokemon_red_reinforcement_learning) - [Pokemon Red (Reinforcement Learning Edition)](https://drubinstein.github.io/pokerl/)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 20:19:48](https://lobste.rs/s/oegolv/git_without_forge) - [Git without a forge](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/git-no-forge/)
* [2025-03-05, 20:00:00](https://science.slashdot.org/story/25/03/05/1822239/could-new-clocks-keep-airplanes-safe-from-gps-jamming?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Could New Clocks Keep Airplanes Safe From GPS Jamming?](https://science.slashdot.org/story/25/03/05/1822239/could-new-clocks-keep-airplanes-safe-from-gps-jamming?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 19:38:29](https://lobste.rs/s/9dzgsp/take_break_rust_match_has_fallthrough) - [Take a break: Rust match has fallthrough](https://huonw.github.io/blog/2025/03/rust-fallthrough/)
* [2025-03-05, 19:09:39](https://news.ycombinator.com/item?id=43270843) - [QwQ-32B: Embracing the Power of Reinforcement Learning](https://qwenlm.github.io/blog/qwq-32b/)
* [2025-03-05, 19:09:19](https://news.ycombinator.com/item?id=43270835) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-05, 19:05:15](https://lobste.rs/s/j4x4bi/constantly_divisionless_random_numbers) - [constantly divisionless random numbers](https://dotat.at/@/2025-03-05-lemire-inline.html)
* [2025-03-05, 19:00:00](https://news.slashdot.org/story/25/03/05/181204/half-of-worlds-co2-emissions-come-from-36-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Half of World's CO2 Emissions Come From 36 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/25/03/05/181204/half-of-worlds-co2-emissions-come-from-36-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 18:25:35](https://lobste.rs/s/c5pgnx/what_if_we_just_didn_t_decompress_it) - [What if we just didn’t decompress it?](https://blog.spiraldb.com/what-if-we-just-didnt-decompress-it/)
* [2025-03-05, 18:07:06](https://news.ycombinator.com/item?id=43270079) - [Apple takes UK to court over 'backdoor' order](https://www.theregister.com/2025/03/05/apple_reportedly_ipt_complaint/)
* [2025-03-05, 18:00:00](https://slashdot.org/story/25/03/05/1743246/microsoft-warns-of-chinese-hackers-spying-on-cloud-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Warns of Chinese Hackers Spying on Cloud Technology](https://slashdot.org/story/25/03/05/1743246/microsoft-warns-of-chinese-hackers-spying-on-cloud-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 17:55:29](https://news.ycombinator.com/item?id=43269928) - [Show HN: Leaflet.pub – a web app for creating and sharing rich documents](https://news.ycombinator.com/item?id=43269928)
* [2025-03-05, 17:49:13](https://news.ycombinator.com/item?id=43269846) - [There Was a Texas Lottery Arbitrage](https://www.bloomberg.com/opinion/articles/2025-03-05/there-was-a-texas-lottery-arbitrage)
* [2025-03-05, 17:42:09](https://lobste.rs/s/qnfuus/zen_art_microcode_hacking) - [Zen and the Art of Microcode Hacking](https://bughunters.google.com/blog/5424842357473280/zen-and-the-art-of-microcode-hacking)
* [2025-03-05, 17:09:41](https://news.ycombinator.com/item?id=43269368) - [The Tiny Star Explosions Powering Moore's Law](https://spectrum.ieee.org/euv-light-source)
* [2025-03-05, 17:07:09](https://news.ycombinator.com/item?id=43269330) - [Show HN: Beating Pokemon Red with RL and <10M Parameters](https://drubinstein.github.io/pokerl/)
* [2025-03-05, 17:00:00](https://slashdot.org/story/25/03/05/1559207/openai-plots-charging-20000-a-month-for-phd-level-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Plots Charging $20,000 a Month For PhD-Level Agents](https://slashdot.org/story/25/03/05/1559207/openai-plots-charging-20000-a-month-for-phd-level-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 16:48:12](https://lobste.rs/s/ecmmix/defense_text_labels) - [In Defense of Text Labels](https://www.chrbutler.com/in-defense-of-text-labels)
* [2025-03-05, 16:00:00](https://apple.slashdot.org/story/25/03/05/1522201/apple-refreshes-macbook-air-with-m4-chip-lower-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Refreshes MacBook Air With M4 Chip, Lower Pricing](https://apple.slashdot.org/story/25/03/05/1522201/apple-refreshes-macbook-air-with-m4-chip-lower-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 15:51:57](https://lobste.rs/s/gkawzq/happy_day_for_rust) - [A Happy Day for Rust](https://steveklabnik.com/writing/a-happy-day-for-rust/)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 15:26:03](https://lobste.rs/s/wjtlv8/basecamp_release_github_extension_for) - [Basecamp release Github extension for offline CI signoff](https://github.com/basecamp/gh-signoff)
* [2025-03-05, 15:13:08](https://lobste.rs/s/gwcalu/dude_where_are_your_syscalls) - [dude, where are your syscalls?](https://flak.tedunangst.com/post/dude-where-are-your-syscalls)
* [2025-03-05, 15:00:00](https://tech.slashdot.org/story/25/03/05/1355244/google-urges-doj-to-reverse-course-on-breaking-up-company?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Urges DOJ To Reverse Course on Breaking Up Company](https://tech.slashdot.org/story/25/03/05/1355244/google-urges-doj-to-reverse-course-on-breaking-up-company?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 14:44:04](https://news.ycombinator.com/item?id=43267095) - [Things we've learned about building products](https://newsletter.posthog.com/p/50-things-weve-learned-about-building)
* [2025-03-05, 14:40:17](https://lobste.rs/s/myndiy/lynx_unlock_native_for_more) - [Lynx: Unlock Native for More](https://lynxjs.org/blog/lynx-unlock-native-for-more.html)
* [2025-03-05, 14:06:54](https://news.ycombinator.com/item?id=43266537) - [MacBook Air M4](https://www.apple.com/macbook-air/)
* [2025-03-05, 14:00:00](https://slashdot.org/story/25/03/05/1330242/turing-award-winners-sound-alarm-on-hasty-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Turing Award Winners Sound Alarm on Hasty AI Deployment](https://slashdot.org/story/25/03/05/1330242/turing-award-winners-sound-alarm-on-hasty-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 13:59:50](https://news.ycombinator.com/item?id=43266453) - [Apple M3 Ultra](https://www.apple.com/newsroom/2025/03/apple-reveals-m3-ultra-taking-apple-silicon-to-a-new-extreme/)
* [2025-03-05, 13:32:52](https://lobste.rs/s/0g0ulj/why_alias_is_my_last_resort_for_aliases) - [Why \"alias\" is my last resort for aliases](https://evanhahn.com/why-alias-is-my-last-resort-for-aliases/)
* [2025-03-05, 13:30:35](https://lobste.rs/s/dwvrsk/floating_points_boxes) - [Floating Points & Boxes](https://blog.toast.cafe/floating-points-boxes)
* [2025-03-05, 13:00:00](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Uses GPS On the Moon For the First Time](https://science.slashdot.org/story/25/03/05/0155218/nasa-uses-gps-on-the-moon-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 10:46:08](https://lobste.rs/s/nurzov/pitchfork_story) - [The Pitchfork Story](https://byroot.github.io/ruby/performance/2025/03/04/the-pitchfork-story.html)
* [2025-03-05, 09:13:29](https://lobste.rs/s/qjsefo/bad_apple_it_s_ssh_keys) - [bad apple but it's ssh keys](https://www.5snb.club/posts/2025/bad-apple-but-its-ssh-keys/)
* [2025-03-05, 08:48:19](https://lobste.rs/s/7iu9ze/zig_0_14_0_release_notes) - [Zig 0.14.0 Release Notes](https://ziglang.org/download/0.14.0/release-notes.html)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 04:19:16](https://lobste.rs/s/m7gwia/as_code) - [\"As Code\"](https://mitchellh.com/writing/as-code)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-05, 00:38:25](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless) - [Bayleaf: Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-04, 21:41:48](https://lobste.rs/s/igqzdo/tailscale_is_pretty_useful) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 20:36:10](https://lobste.rs/s/icz96h/hytradboi_2025_postmortem) - [HYTRADBOI 2025 postmortem](https://www.scattered-thoughts.net/writing/hytradboi-2025-postmortem/)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 06:25:07](https://news.ycombinator.com/item?id=43250986) - [HYTRADBOI 2025 Conference Postmortem](https://www.scattered-thoughts.net/writing/hytradboi-2025-postmortem/)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-03, 23:56:16](https://news.ycombinator.com/item?id=43248359) - [Show HN: Search and analyze millions of SEC filings with AI.](https://www.publicview.ai/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 18:41:37](https://news.ycombinator.com/item?id=43245172) - [Solving First Order Differential Equations with Julia](https://ritog.github.io/posts/1st-order-DE-julia/1st_order_DE_julia.html)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 13:27:07](https://news.ycombinator.com/item?id=43241499) - [Math Academy pulled me out of the Valley of Despair](https://mikelikejordan.bearblog.dev/how-math-academy-pulled-me-out-of-the-valley-of-despair/)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 14:34:50](https://news.ycombinator.com/item?id=43230864) - [Tiny Ten DSP-Based HF Transceiver](https://www.janbob.com/electron/TinyTen/TinyTen.htm)
* [2025-03-02, 14:21:50](https://news.ycombinator.com/item?id=43230764) - [Citronics built a router based on the Fairphone 2 mainboard](https://www.cnx-software.com/2025/03/02/citronics-built-a-router-based-on-the-fairphone-2-mainboard/)
* [2025-03-02, 13:56:01](https://news.ycombinator.com/item?id=43230510) - [Yoke: Infrastructure as code, but actually](https://xeiaso.net/blog/2025/yoke-k8s/)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 03:06:39](https://news.ycombinator.com/item?id=43226792) - [Nebu: A Spreadsheet Editor for Varvara](https://wiki.xxiivv.com/site/nebu)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
