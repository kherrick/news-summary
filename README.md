# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology

* [metap: A Meta-Programming Layer for Python](https://sbaziotis.com/compilers/metap.html): A deep dive into 'metap', a new meta-programming tool empowering developers with enhanced control over Python code efficiency and organization. [Comments](https://lobste.rs/s/8wrzuo/metap_meta_programming_layer_for_python).

* [TSMC to start building four new plants with 1.4nm technology](https://www.taipeitimes.com/News/front/archives/2025/07/20/2003840583): TSMC announces plans to construct cutting-edge facilities utilizing 1.4nm technology for next-gen semiconductors. [Comments](https://news.ycombinator.com/item?id=44618762).

* [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/): Servo project enhances its developer tools with networking inspection capabilities. [Comments](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector).

## Breakthroughs in Health and Science

* ['Universal cancer vaccine' trains the immune system to kill any tumor](https://newatlas.com/cancer/universal-cancer-vaccine/): Researchers reveal a groundbreaking cancer vaccine potentially capable of tackling all tumor types. [Comments](https://news.ycombinator.com/item?id=44618595).

* [Babies made using three people's DNA are born free of mitochondrial disease](https://www.bbc.com/news/articles/cn8179z199vo): New reproductive technology successfully eliminates mitochondrial diseases in newborns. [Comments](https://news.ycombinator.com/item?id=44587116).

## Cybersecurity and Vulnerabilities

* [Using leaked data to examine vulnerabilities in SMS routing and SS7 signalling](https://medium.com/@lighthousereports/using-leaked-data-to-examine-vulnerabilities-in-sms-routing-and-ss7-signalling-8e30298491d9): A critical examination of systemic flaws in SMS and SS7 technologies using exposed datasets. [Comments](https://lobste.rs/s/47ckxy/using_leaked_data_examine).

* [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/): Systems compromised through specific affected Arch Linux browser tools. [Comments](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen).

## AI and Machine Learning

* [OpenAI claims gold-medal performance at IMO 2025](https://twitter.com/alexwei_/status/1946477742855532918): OpenAI demonstrates prowess in International Math Olympiad solutions using AI systems. [Comments](https://news.ycombinator.com/item?id=44613840).

* [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/): Innovative perspectives on building user-friendly AI-driven command-line tools. [Comments](https://lobste.rs/s/czx98y/rethinking_cli_interfaces_for_ai).

## Programming and Development

* [Postgres to ClickHouse: Data Modeling Tips](https://clickhouse.com/blog/postgres-to-clickhouse-data-modeling-tips-v2): Expert suggestions on optimizing data modeling during migrations between Postgres and ClickHouse. [Comments](https://news.ycombinator.com/item?id=44617408).

* [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder (2020)](https://nigeltao.github.io/blog/2020/jsonptr.html): Insights into Wuffs' tools for refining JSON parsing performance and reliability. [Comments](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero).

## Policy and Legal Trends

* [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed): New litigation on AI model training influencing copyright laws globally. [Comments](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903): Efforts to challenge recently implemented UK legislation. [Comments](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act).

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

* [2025-07-19, 21:19:56](https://lobste.rs/s/8wrzuo/metap_meta_programming_layer_for_python) - [metap: A Meta-Programming Layer for Python](https://sbaziotis.com/compilers/metap.html)
* [2025-07-19, 20:50:40](https://news.ycombinator.com/item?id=44619258) - [The Future of Ultra-Fast Passenger Travel](https://spaceambition.substack.com/p/beyond-the-sound-barrier)
* [2025-07-19, 20:15:26](https://news.ycombinator.com/item?id=44618959) - [Trigon: Exploiting coprocessors for fun and for profit (part 2)](https://alfiecg.uk/2025/07/16/Trigon.html)
* [2025-07-19, 20:13:54](https://lobste.rs/s/toitpk/trigon_exploiting_coprocessors_for_fun) - [Trigon: exploiting coprocessors for fun and for profit (part 2)](https://alfiecg.uk/2025/07/16/Trigon.html)
* [2025-07-19, 19:52:30](https://news.ycombinator.com/item?id=44618762) - [TSMC to start building four new plants with 1.4nm technology](https://www.taipeitimes.com/News/front/archives/2025/07/20/2003840583)
* [2025-07-19, 19:43:23](https://news.ycombinator.com/item?id=44618687) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:42:23](https://news.ycombinator.com/item?id=44618679) - [2025 Infrastructure Report Card](https://infrastructurereportcard.org/)
* [2025-07-19, 19:41:15](https://lobste.rs/s/3isa6t/make_your_own_backup_system_part_1) - [Make Your Own Backup System – Part 1: Strategy Before Scripts](https://it-notes.dragas.net/2025/07/18/make-your-own-backup-system-part-1-strategy-before-scripts/)
* [2025-07-19, 19:34:19](https://news.ycombinator.com/item?id=44618595) - [&apos;Universal cancer vaccine&apos; trains the immune system to kill any tumor](https://newatlas.com/cancer/universal-cancer-vaccine/)
* [2025-07-19, 19:32:58](https://news.ycombinator.com/item?id=44618576) - [The tech that the US Post Office gave us](https://www.theverge.com/report/709749/usps-250th-anniversary-pioneer-modern-technology)
* [2025-07-19, 18:14:19](https://news.ycombinator.com/item?id=44617910) - [MCP Security Vulnerabilities and Attack Vectors](https://forgecode.dev/blog/prevent-attacks-on-mcp/)
* [2025-07-19, 17:45:20](https://lobste.rs/s/xh8lz6/faq_what_s_kevlinhenney) - [FAQ: What’s a @KevlinHenney?](https://kevlinhenney.medium.com/faq-whats-a-kevlinhenney-cc98d172f811)
* [2025-07-19, 17:31:13](https://lobste.rs/s/5f541e/legendary_software_rendering_era_with) - [Legendary Software Rendering Era with Sean Barrett](https://www.youtube.com/watch?v=T1tXepGXDDM)
* [2025-07-19, 17:24:39](https://lobste.rs/s/naiwvd/my_ultimate_self_hosting_setup) - [My Ultimate Self-hosting Setup](https://codecaptured.com/blog/my-ultimate-self-hosting-setup/)
* [2025-07-19, 17:24:32](https://news.ycombinator.com/item?id=44617408) - [Postgres to ClickHouse: Data Modeling Tips](https://clickhouse.com/blog/postgres-to-clickhouse-data-modeling-tips-v2)
* [2025-07-19, 16:58:42](https://news.ycombinator.com/item?id=44617184) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 16:57:09](https://lobste.rs/s/czx98y/rethinking_cli_interfaces_for_ai) - [Rethinking CLI interfaces for AI](https://www.notcheckmark.com/2025/07/rethinking-cli-interfaces-for-ai/)
* [2025-07-19, 16:49:02](https://news.ycombinator.com/item?id=44617078) - [Local LLMs versus offline Wikipedia](https://evanhahn.com/local-llms-versus-offline-wikipedia/)
* [2025-07-19, 16:15:17](https://news.ycombinator.com/item?id=44616760) - [The Curious Case of the Unix workstation layout](https://thejpster.org.uk/blog/blog-2025-07-19/)
* [2025-07-19, 16:07:41](https://news.ycombinator.com/item?id=44616688) - [Show HN: Am-I-vibing, detect agentic coding environments](https://github.com/ascorbic/am-i-vibing)
* [2025-07-19, 15:10:43](https://lobste.rs/s/47ckxy/using_leaked_data_examine) - [Using leaked data to examine vulnerabilities in SMS routing and SS7 signalling](https://medium.com/@lighthousereports/using-leaked-data-to-examine-vulnerabilities-in-sms-routing-and-ss7-signalling-8e30298491d9)
* [2025-07-19, 14:35:11](https://news.ycombinator.com/item?id=44615801) - [Death by AI](https://davebarry.substack.com/p/death-by-ai)
* [2025-07-19, 14:23:53](https://news.ycombinator.com/item?id=44615703) - [Why you should choose HTMX for your next web-based side project (2024)](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 12:00:23](https://news.ycombinator.com/item?id=44614788) - [Piramidal (YC W24) is hiring a full stack engineer](https://www.ycombinator.com/companies/piramidal/jobs/JfeI3uE-full-stack-engineer)
* [2025-07-19, 11:03:00](https://lobste.rs/s/cwmt11/do_you_understand_f_strings) - [Do you understand f-strings?](https://fstrings.wtf/)
* [2025-07-19, 10:52:35](https://news.ycombinator.com/item?id=44614370) - [Fstrings.wtf](https://fstrings.wtf/)
* [2025-07-19, 09:11:19](https://news.ycombinator.com/item?id=44613840) - [OpenAI claims gold-medal performance at IMO 2025](https://twitter.com/alexwei_/status/1946477742855532918)
* [2025-07-19, 08:26:45](https://news.ycombinator.com/item?id=44613625) - [A 14kb page can load much faster than a 15kb page (2022)](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/)
* [2025-07-19, 08:26:20](https://lobste.rs/s/p0ylu1/linux_secure_boot_certificate) - [Linux and Secure Boot certificate expiration](https://lwn.net/SubscriberLink/1029767/43b62a7a7408c2a9/)
* [2025-07-19, 07:58:26](https://news.ycombinator.com/item?id=44613486) - [Pimping My Casio: Part Deux](https://blog.jgc.org/2025/07/pimping-my-casio-part-deux.html)
* [2025-07-19, 04:02:57](https://news.ycombinator.com/item?id=44612487) - [Hyatt Hotels are using algorithmic Rest “smoking detectors”](https://twitter.com/_ZachGriff/status/1945959030851035223)
* [2025-07-19, 02:56:02](https://news.ycombinator.com/item?id=44612151) - [My Self-Hosting Setup](https://codecaptured.com/blog/my-ultimate-self-hosting-setup/)
* [2025-07-19, 01:03:20](https://lobste.rs/s/tihya6/frequently_asked_questions_about_fhe) - [Frequently Asked Questions about FHE](https://www.jeremykun.com/frequently-asked-questions-about-fhe/)
* [2025-07-18, 23:43:41](https://lobste.rs/s/vaqh5i/shutting_down_clear_linux_os) - [Shutting down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716)
* [2025-07-18, 23:29:11](https://lobste.rs/s/f0um5j/async_rust_is_bad_language_2023) - [Async Rust Is A Bad Language (2023)](https://bitbashing.io/async-rust.html)
* [2025-07-18, 20:16:10](https://lobste.rs/s/s8ldew/current_technology_is_not_ready_for) - [The current technology is not ready for proper blending](https://blog.pkh.me/p/43-the-current-technology-is-not-ready-for-proper-blending.html)
* [2025-07-18, 19:43:57](https://lobste.rs/s/ojxlqm/pimping_my_casio_part_deux) - [Pimping my Casio: Part Deux](https://blog.jgc.org/2025/07/pimping-my-casio-part-deux.html)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 15:56:40](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero) - [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder (2020)](https://nigeltao.github.io/blog/2020/jsonptr.html)
* [2025-07-18, 15:49:02](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act) - [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903)
* [2025-07-18, 15:40:23](https://lobste.rs/s/bd0dek/how_i_fixed_ruby_s_most_annoying_problem_60) - [How I Fixed Ruby&apos;s Most Annoying Problem: 60-Second Gem Installs](https://mensfeld.pl/2025/07/solving-ruby-rdkafka-installation-problem/)
* [2025-07-18, 12:31:17](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector) - [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/)
* [2025-07-18, 12:28:26](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational) - [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode)
* [2025-07-18, 08:22:59](https://lobste.rs/s/ytnxm6/engineering_end_work) - [Engineering the End of Work](https://schmud.de/posts/2025-07-15-engineering-end-of-work.html)
* [2025-07-18, 03:53:31](https://news.ycombinator.com/item?id=44601045) - [Linux and Secure Boot certificate expiration](https://lwn.net/SubscriberLink/1029767/08f1d17c020e8292/)
* [2025-07-18, 02:25:13](https://lobste.rs/s/l8a8zq/nih_is_far_cheaper_than_wrong_dependency) - [NIH Is Far Cheaper Than The Wrong Dependency](https://lewiscampbell.tech/blog/250718.html)
* [2025-07-18, 00:45:00](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukrainian Hackers Claim To Have Destroyed Major Russian Drone Maker&apos;s Entire Network](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-18, 00:02:00](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dictionary.com &apos;Devastated&apos; Paid Users By Abruptly Deleting Saved Word Lists](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 23:23:00](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [House Passes Historic Crypto Bill Regulating Stablecoins](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 22:20:00](https://it.slashdot.org/story/25/07/17/2049256/google-spots-tailored-backdoor-malware-aimed-at-sonicwall-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Spots Tailored Backdoor Malware Aimed At SonicWall Appliances](https://it.slashdot.org/story/25/07/17/2049256/google-spots-tailored-backdoor-malware-aimed-at-sonicwall-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 21:40:00](https://yro.slashdot.org/story/25/07/17/2044218/new-russian-law-criminalizes-online-searches-for-controversial-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Russian Law Criminalizes Online Searches For Controversial Content](https://yro.slashdot.org/story/25/07/17/2044218/new-russian-law-criminalizes-online-searches-for-controversial-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 21:00:00](https://news.slashdot.org/story/25/07/17/2029207/news-publishers-take-paywall-blocker-12ftio-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [News Publishers Take Paywall-Blocker 12ft.io Offline](https://news.slashdot.org/story/25/07/17/2029207/news-publishers-take-paywall-blocker-12ftio-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 20:39:32](https://lobste.rs/s/rnnpqm/big_oops_anatomy_thirty_five_year_mistake) - [The Big OOPs: Anatomy of a Thirty-five-year Mistake](https://www.youtube.com/watch?v=wo84LFzx5nI)
* [2025-07-17, 20:20:00](https://yro.slashdot.org/story/25/07/17/2017244/meta-investors-mark-zuckerberg-reach-settlement-to-end-8-billion-trial-over-facebook-privacy-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Investors, Mark Zuckerberg Reach Settlement To End $8 Billion Trial Over Facebook Privacy Litigation](https://yro.slashdot.org/story/25/07/17/2017244/meta-investors-mark-zuckerberg-reach-settlement-to-end-8-billion-trial-over-facebook-privacy-litigation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 20:02:41](https://news.ycombinator.com/item?id=44597550) - [How we tracked down a Go 1.24 memory regression](https://www.datadoghq.com/blog/engineering/go-memory-regression/)
* [2025-07-17, 19:25:00](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood CEO Says Majority of Company&apos;s New Code Written by AI](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 18:45:00](https://news.slashdot.org/story/25/07/17/1829201/mozilla-ships-webgpu-in-firefox-141-catching-up-to-chromes-2023-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Ships WebGPU in Firefox 141, Catching Up To Chrome&apos;s 2023 Launch](https://news.slashdot.org/story/25/07/17/1829201/mozilla-ships-webgpu-in-firefox-141-catching-up-to-chromes-2023-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 18:08:00](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain&apos;s Bankrupt Universities Are Hunting For Cheaper Models](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 17:26:00](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Debuts AI Agent That Controls Browsers To Automate Shopping, Presentations](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 16:41:00](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Sony is Still Stubborn About the Size of Its Cameras&apos;](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 16:02:00](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:21:00](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:40:00](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Plans 20,000 Robotaxis in Six-Year Rollout with Lucid and Nuro](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:08:17](https://news.ycombinator.com/item?id=44593628) - [N78 band 5G NR recordings](https://destevez.net/2025/07/n78-band-5g-nr-recordings/)
* [2025-07-16, 21:43:35](https://news.ycombinator.com/item?id=44587116) - [Babies made using three people&apos;s DNA are born free of mitochondrial disease](https://www.bbc.com/news/articles/cn8179z199vo)
* [2025-07-16, 19:16:23](https://news.ycombinator.com/item?id=44585838) - [Enhancing COBOL Code Explanations: A Multi-Agents Approach Using LLMs](https://arxiv.org/abs/2507.02182)
* [2025-07-16, 16:52:11](https://news.ycombinator.com/item?id=44584414) - [Zig Interface Revisited](https://williamw520.github.io/2025/07/13/zig-interface-revisited.html)
* [2025-07-16, 15:57:49](https://news.ycombinator.com/item?id=44583729) - [Show HN: Display Photos on a World Map](https://worldsnap.surge.sh/)
* [2025-07-15, 21:50:17](https://news.ycombinator.com/item?id=44576183) - [Piano Keys](https://www.mathpages.com/home/kmath043.htm)
