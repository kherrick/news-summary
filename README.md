# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations in Technology and AI

* [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - Details an innovative farm entirely operated by AI and robotic systems.

* [Hush: Holistic Panoramic 3D Scene Understanding Using Spherical Harmonics](https://vision3d-lab.github.io/hush/) - Introduces a novel 3D scene understanding framework leveraging spherical harmonics.

* [How Go 1.24's Swiss Tables saved us hundreds of gigabytes](https://www.datadoghq.com/blog/engineering/go-swiss-tables/) - Explains how the Swiss Tables feature in Go has significantly improved efficiency in software engineering.

* [Supporting Faster File Load Times with Memory Optimizations in Rust](https://www.figma.com/blog/supporting-faster-file-load-times-with-memory-optimizations-in-rust/) - Highlights memory optimization strategies in Rust to enhance file loading speeds.

## AI Impact on Human Life

* [Exhausted man defeats AI model in world coding championship](https://arstechnica.com/ai/2025/07/exhausted-man-defeats-ai-model-in-world-coding-championship/) - Chronicles a coding competition where a human coder triumphs over a leading AI system.

* [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - Discusses the potential risks of relying on AI therapy bots for mental health.

* [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - Examines the unintended consequences of AI tools in software development.

## Security and Ethical Concerns

* [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - Describes a novel security threat targeting Nvidia GPUs using Rowhammer exploits.

* [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/) - Warns users of malware found in popular Arch Linux AUR packages.

* [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Updates on a major legal case concerning AI ethics and copyright infringement.

## Scientific Advancements

* [Replication of Quantum Factorisation Records with a VIC-20, an Abacus, and a Dog](https://eprint.iacr.org/2025/1237) - Reports a unique experiment in replicating quantum factorization using unconventional tools.

* [Cancer DNA is detectable in blood years before diagnosis](https://www.sciencenews.org/article/cancer-tumor-dna-blood-test-screening) - Breakthrough research showing early cancer detection through blood DNA analysis.

* [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - Explores the mechanisms behind star nucleosynthesis creating heavy elements.

## Cultural and Historical Perspectives

* [Silence Is a Commons by Ivan Illich (1983)](http://www.davidtinapple.com/illich/1983_silence_commons.html) - A thought-provoking essay reflecting on the cultural importance of preserving silence.

* [The Big OOPs: Anatomy of a Thirty-five-year Mistake](https://www.youtube.com/watch?v=wo84LFzx5nI) - Examines decades of errors in object-oriented programming design philosophy.

* [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - Details a historic merger of two enormous black holes observed by astronomers.

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

* [2025-07-18, 21:21:50](https://news.ycombinator.com/item?id=44609969) - [Silence Is a Commons by Ivan Illich (1983)](http://www.davidtinapple.com/illich/1983_silence_commons.html)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 20:43:12](https://news.ycombinator.com/item?id=44609616) - [Exhausted man defeats AI model in world coding championship](https://arstechnica.com/ai/2025/07/exhausted-man-defeats-ai-model-in-world-coding-championship/)
* [2025-07-18, 20:32:47](https://news.ycombinator.com/item?id=44609508) - [Hush: Holistic Panoramic 3D Scene Understanding Using Spherical Harmonics](https://vision3d-lab.github.io/hush/)
* [2025-07-18, 20:30:36](https://news.ycombinator.com/item?id=44609479) - [Wii U SDBoot1 Exploit \&quot;paid the beak\&quot;](https://consolebytes.com/wii-u-sdboot1-exploit-paid-the-beak/)
* [2025-07-18, 20:16:10](https://lobste.rs/s/s8ldew/current_technology_is_not_ready_for) - [The current technology is not ready for proper blending](https://blog.pkh.me/p/43-the-current-technology-is-not-ready-for-proper-blending.html)
* [2025-07-18, 19:59:49](https://news.ycombinator.com/item?id=44609137) - [Multiplatform Matrix Multiplication Kernels](https://burn.dev/blog/sota-multiplatform-matmul/)
* [2025-07-18, 19:59:04](https://news.ycombinator.com/item?id=44609130) - [AI capex is so big that it&apos;s affecting economic statistics](https://paulkedrosky.com/honey-ai-capex-ate-the-economy/)
* [2025-07-18, 19:44:48](https://news.ycombinator.com/item?id=44608998) - [Trying to send a sticker in Steam Chat burned through a month of mobile data](https://old.reddit.com/r/Steam/comments/1m000kp/trying_to_send_a_sticker_in_steam_chat_burned/)
* [2025-07-18, 19:43:57](https://lobste.rs/s/ojxlqm/pimping_my_casio_part_deux) - [Pimping my Casio: Part Deux](https://blog.jgc.org/2025/07/pimping-my-casio-part-deux.html)
* [2025-07-18, 19:29:52](https://news.ycombinator.com/item?id=44608856) - [Broadcom to discontinue free Bitnami Helm charts](https://github.com/bitnami/charts/issues/35164)
* [2025-07-18, 19:28:34](https://news.ycombinator.com/item?id=44608840) - [Show HN: I built library management app for those who outgrew spreadsheets](https://www.librari.io/)
* [2025-07-18, 19:26:35](https://news.ycombinator.com/item?id=44608814) - [Evolution Mail Users Easily Trackable Part 2](https://www.grepular.com/Evolution%20Mail%20Users%20Easily%20Trackable%20Part%202)
* [2025-07-18, 19:21:38](https://news.ycombinator.com/item?id=44608754) - [Asynchrony Is Not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 19:09:07](https://news.ycombinator.com/item?id=44608622) - [Replication of Quantum Factorisation Records with a VIC-20, an Abacus, and a Dog](https://eprint.iacr.org/2025/1237)
* [2025-07-18, 19:05:32](https://lobste.rs/s/t8dsm3/how_do_you_compute_midpoint_interval_2014) - [How do you compute the midpoint of an interval? (2014)](https://hal.science/file/index/docid/576641/filename/computing-midpoint.pdf)
* [2025-07-18, 18:40:30](https://news.ycombinator.com/item?id=44608312) - [Show HN: Molab, a cloud-hosted Marimo notebook workspace](https://molab.marimo.io/notebooks)
* [2025-07-18, 18:39:06](https://news.ycombinator.com/item?id=44608295) - [Cancer DNA is detectable in blood years before diagnosis](https://www.sciencenews.org/article/cancer-tumor-dna-blood-test-screening)
* [2025-07-18, 18:39:02](https://news.ycombinator.com/item?id=44608294) - [Mango Health (YC W24) Is Hiring](https://www.ycombinator.com/companies/mango-health/jobs/3bjIHus-founding-engineer)
* [2025-07-18, 18:36:39](https://news.ycombinator.com/item?id=44608275) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-18, 18:26:22](https://news.ycombinator.com/item?id=44608170) - [Third patient dies from acute liver failure caused by a Sarepta gene therapy](https://www.biocentury.com/article/656520/third-death-from-a-sarepta-gene-therapy)
* [2025-07-18, 18:07:57](https://news.ycombinator.com/item?id=44607961) - [Section 174 is reversed, mostly](https://newsletter.pragmaticengineer.com/p/the-pulse-section-174-is-reversed)
* [2025-07-18, 17:21:49](https://news.ycombinator.com/item?id=44607403) - [The year of peak might and magic](https://www.filfre.net/2025/07/the-year-of-peak-might-and-magic/)
* [2025-07-18, 17:08:16](https://lobste.rs/s/datuh1/kap_lang) - [Kap lang](https://kapdemo.dhsdevelopments.com/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 15:56:40](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero) - [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder](https://nigeltao.github.io/blog/2020/jsonptr.html)
* [2025-07-18, 15:49:02](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act) - [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903)
* [2025-07-18, 15:40:23](https://lobste.rs/s/bd0dek/how_i_fixed_ruby_s_most_annoying_problem_60) - [How I Fixed Ruby&apos;s Most Annoying Problem: 60-Second Gem Installs](https://mensfeld.pl/2025/07/solving-ruby-rdkafka-installation-problem/)
* [2025-07-18, 15:19:17](https://news.ycombinator.com/item?id=44605670) - [A New Geometry for Einstein&apos;s Theory of Relativity](https://www.quantamagazine.org/a-new-geometry-for-einsteins-theory-of-relativity-20250716/)
* [2025-07-18, 14:44:57](https://news.ycombinator.com/item?id=44605213) - [I&apos;m Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=44605213)
* [2025-07-18, 12:40:41](https://news.ycombinator.com/item?id=44604050) - [lsr: ls with io_uring](https://rockorager.dev/log/lsr-ls-but-with-io-uring/)
* [2025-07-18, 12:31:17](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector) - [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/)
* [2025-07-18, 12:28:26](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational) - [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:04:13](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend)
* [2025-07-18, 10:22:15](https://news.ycombinator.com/item?id=44603066) - [CP/M creator Gary Kildall&apos;s memoirs released as free download](https://spectrum.ieee.org/cpm-creator-gary-kildalls-memoirs-released-as-free-download)
* [2025-07-18, 08:36:47](https://news.ycombinator.com/item?id=44602532) - [When root meets immutable: OpenBSD chflags vs. log tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:35:22](https://lobste.rs/s/xzxxng/when_root_meets_immutable_openbsd) - [When Root Meets Immutable: OpenBSD chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:22:59](https://lobste.rs/s/ytnxm6/engineering_end_work) - [Engineering the End of Work](https://schmud.de/posts/2025-07-15-engineering-end-of-work.html)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 03:22:18](https://lobste.rs/s/zcizsx/how_go_1_24_s_swiss_tables_saved_us_hundreds) - [How Go 1.24&apos;s Swiss Tables saved us hundreds of gigabytes](https://www.datadoghq.com/blog/engineering/go-swiss-tables/)
* [2025-07-18, 02:25:13](https://lobste.rs/s/l8a8zq/nih_is_far_cheaper_than_wrong_dependency) - [NIH Is Far Cheaper Than The Wrong Dependency](https://lewiscampbell.tech/blog/250718.html)
* [2025-07-18, 02:24:18](https://lobste.rs/s/pz9rgk/supporting_faster_file_load_times_with) - [Supporting Faster File Load Times with Memory Optimizations in Rust](https://www.figma.com/blog/supporting-faster-file-load-times-with-memory-optimizations-in-rust/)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:50:41](https://lobste.rs/s/yv7r9s/forgejo_v12) - [Forgejo v12](https://forgejo.org/2025-07-release-v12-0/)
* [2025-07-18, 00:45:00](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukrainian Hackers Claim To Have Destroyed Major Russian Drone Maker&apos;s Entire Network](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-18, 00:02:00](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dictionary.com &apos;Devastated&apos; Paid Users By Abruptly Deleting Saved Word Lists](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 23:23:00](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Passes Historic Crypto Bill Regulating Stablecoins](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 23:22:56](https://lobste.rs/s/dyvmbe/magic_gathering_deal_infinite_damage_for) - [Magic The Gathering - Deal infinite damage for 4GRU, as long as the twin primes conjecture is true](https://www.reddit.com/r/BadMtgCombos/comments/1feps3y/deal_infinite_damage_for_4gru_as_long_as_the_twin/)
* [2025-07-17, 22:20:00](https://it.slashdot.org/story/25/07/17/2049256/google-spots-tailored-backdoor-malware-aimed-at-sonicwall-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Spots Tailored Backdoor Malware Aimed At SonicWall Appliances](https://it.slashdot.org/story/25/07/17/2049256/google-spots-tailored-backdoor-malware-aimed-at-sonicwall-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 21:40:00](https://yro.slashdot.org/story/25/07/17/2044218/new-russian-law-criminalizes-online-searches-for-controversial-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Russian Law Criminalizes Online Searches For Controversial Content](https://yro.slashdot.org/story/25/07/17/2044218/new-russian-law-criminalizes-online-searches-for-controversial-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 21:00:00](https://news.slashdot.org/story/25/07/17/2029207/news-publishers-take-paywall-blocker-12ftio-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [News Publishers Take Paywall-Blocker 12ft.io Offline](https://news.slashdot.org/story/25/07/17/2029207/news-publishers-take-paywall-blocker-12ftio-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 20:39:32](https://lobste.rs/s/rnnpqm/big_oops_anatomy_thirty_five_year_mistake) - [The Big OOPs: Anatomy of a Thirty-five-year Mistake](https://www.youtube.com/watch?v=wo84LFzx5nI)
* [2025-07-17, 20:20:00](https://yro.slashdot.org/story/25/07/17/2017244/meta-investors-mark-zuckerberg-reach-settlement-to-end-8-billion-trial-over-facebook-privacy-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Investors, Mark Zuckerberg Reach Settlement To End $8 Billion Trial Over Facebook Privacy Litigation](https://yro.slashdot.org/story/25/07/17/2017244/meta-investors-mark-zuckerberg-reach-settlement-to-end-8-billion-trial-over-facebook-privacy-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 19:25:00](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood CEO Says Majority of Company&apos;s New Code Written by AI](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 18:45:00](https://news.slashdot.org/story/25/07/17/1829201/mozilla-ships-webgpu-in-firefox-141-catching-up-to-chromes-2023-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Ships WebGPU in Firefox 141, Catching Up To Chrome&apos;s 2023 Launch](https://news.slashdot.org/story/25/07/17/1829201/mozilla-ships-webgpu-in-firefox-141-catching-up-to-chromes-2023-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 18:08:00](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain&apos;s Bankrupt Universities Are Hunting For Cheaper Models](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 17:26:00](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Debuts AI Agent That Controls Browsers To Automate Shopping, Presentations](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 16:41:00](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Sony is Still Stubborn About the Size of Its Cameras&apos;](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:08:57](https://lobste.rs/s/savjgl/firefox_dev_says_intel_raptor_lake) - [Firefox dev says Intel Raptor Lake crashes are increasing with rising temperatures in record European heat wave](https://www.tomshardware.com/pc-components/cpus/firefox-dev-says-intel-raptor-lake-crashes-are-increasing-with-rising-temperatures-in-record-european-heat-wave-mozilla-staffs-tracking-overwhelmed-by-intel-crash-reports-team-disables-the-function)
* [2025-07-17, 16:02:00](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:21:00](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:58:56](https://lobste.rs/s/udtfpn/zig_s_new_writer) - [Zig&apos;s new Writer](https://www.openmymind.net/Zigs-New-Writer/)
* [2025-07-17, 14:40:00](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Plans 20,000 Robotaxis in Six-Year Rollout with Lucid and Nuro](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:24:13](https://lobste.rs/s/mklbl9/lsr_ls_with_io_uring) - [lsr: ls but with io_uring](https://tangled.sh/@rockorager.dev/lsr)
* [2025-07-17, 12:07:33](https://lobste.rs/s/greve7/parsing_protobuf_like_never_before) - [Parsing Protobuf Like Never Before](https://mcyoung.xyz/2025/07/16/hyperpb/)
* [2025-07-17, 11:54:46](https://lobste.rs/s/s92ylk/two_simple_rules_fix_code_reviews) - [Two Simple Rules to Fix Code Reviews](https://serce.me/posts/2025-07-17-two-simple-rules-to-fix-code-reviews)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 15:18:48](https://news.ycombinator.com/item?id=44572068) - [Show HN: Simulating autonomous drone formations](https://github.com/sushrut141/ketu)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 11:36:08](https://news.ycombinator.com/item?id=44570089) - [How to Get Foreign Keys Horribly Wrong](https://hakibenita.com/django-foreign-keys)
* [2025-07-15, 10:48:34](https://news.ycombinator.com/item?id=44569819) - [Making a StringBuffer in C, and questioning my sanity](https://briandouglas.ie/string-buffer-c/)
* [2025-07-15, 08:11:19](https://news.ycombinator.com/item?id=44569032) - [Trying Guix: A Nixer&apos;s impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-15, 00:19:04](https://news.ycombinator.com/item?id=44566673) - [Benben: An audio player for the terminal, written in Common Lisp](https://chiselapp.com/user/MistressRemilia/repository/benben/home)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 15:45:28](https://news.ycombinator.com/item?id=44561516) - [Hundred Rabbits – Low-tech living while sailing the world](https://100r.co/site/home.html)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
