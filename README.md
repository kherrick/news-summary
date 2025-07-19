# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Tools

* [Mr Browser – Macintosh Repository file downloader that runs directly on 68k Macs](https://www.macintoshrepository.org/44146-mr-browser) [(comments)](https://news.ycombinator.com/item?id=44611320)

* [Debcraft – Easiest way to modify and build Debian packages](https://optimizedbyotto.com/post/debcraft-easy-debian-packaging/) [(comments)](https://news.ycombinator.com/item?id=44611223)

* [lsr: ls with io_uring](https://rockorager.dev/log/lsr-ls-but-with-io-uring/) [(comments)](https://news.ycombinator.com/item?id=44604050)

* [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode) [(comments)](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational)

* [Show HN: I built library management app for those who outgrew spreadsheets](https://www.librari.io/) [(comments)](https://news.ycombinator.com/item?id=44608840)

## Open Source Developments

* [Forgejo v12](https://forgejo.org/2025-07-release-v12-0/) [(comments)](https://lobste.rs/s/yv7r9s/forgejo_v12)

* [How to write Rust in the Linux kernel: part 3](https://lwn.net/SubscriberLink/1026694/3413f4b43c862629/) [(comments)](https://news.ycombinator.com/item?id=44610468)

* [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/) [(comments)](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector)

## Corporate News and Shutdowns

* [Intel Announces It&apos;s Shutting Down Clear Linux](https://www.phoronix.com/news/Intel-Ends-Clear-Linux) [(comments)](https://news.ycombinator.com/item?id=44611270)

* [Shutting Down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716) [(comments)](https://news.ycombinator.com/item?id=44611098)

## AI Progress and Ethical Concerns

* [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/) [(comments)](https://news.ycombinator.com/item?id=44608275)

* [AI capex is so big that it&apos;s affecting economic statistics](https://paulkedrosky.com/honey-ai-capex-ate-the-economy/) [(comments)](https://news.ycombinator.com/item?id=44609130)

## Scientific Breakthroughs

* [Cancer DNA is detectable in blood years before diagnosis](https://www.sciencenews.org/article/cancer-tumor-dna-blood-test-screening) [(comments)](https://news.ycombinator.com/item?id=44608295)

* [Replication of Quantum Factorisation Records with a VIC-20, an Abacus, and a Dog](https://eprint.iacr.org/2025/1237) [(comments)](https://news.ycombinator.com/item?id=44608622)

* [A New Geometry for Einstein&apos;s Theory of Relativity](https://www.quantamagazine.org/a-new-geometry-for-einsteins-theory-of-relativity-20250716/) [(comments)](https://news.ycombinator.com/item?id=44605670)

## Pop Culture and Computational Complexity

* [Super Mario Bros is (Computationally) Hard](https://www.youtube.com/watch?v=unLPk4H1hto) [(comments)](https://lobste.rs/s/pz8p8c/super_mario_bros_is_computationally_hard)

## Cybersecurity and Privacy

* [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/) [(comments)](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen)

* [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) [(comments)](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)

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

* [2025-07-19, 00:20:48](https://news.ycombinator.com/item?id=44611320) - [Mr Browser – Macintosh Repository file downloader that runs directly on 68k Macs](https://www.macintoshrepository.org/44146-mr-browser)
* [2025-07-19, 00:12:13](https://news.ycombinator.com/item?id=44611270) - [Intel Announces It&apos;s Shutting Down Clear Linux](https://www.phoronix.com/news/Intel-Ends-Clear-Linux)
* [2025-07-19, 00:04:31](https://news.ycombinator.com/item?id=44611223) - [Debcraft – Easiest way to modify and build Debian packages](https://optimizedbyotto.com/post/debcraft-easy-debian-packaging/)
* [2025-07-18, 23:45:12](https://news.ycombinator.com/item?id=44611098) - [Shutting Down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716)
* [2025-07-18, 23:43:41](https://lobste.rs/s/vaqh5i/shutting_down_clear_linux_os) - [Shutting down Clear Linux OS](https://community.clearlinux.org/t/all-good-things-come-to-an-end-shutting-down-clear-linux-os/10716)
* [2025-07-18, 23:29:11](https://lobste.rs/s/f0um5j/async_rust_is_bad_language) - [Async Rust Is A Bad Language](https://bitbashing.io/async-rust.html)
* [2025-07-18, 23:22:49](https://news.ycombinator.com/item?id=44610925) - [Ccusage: A CLI tool for analyzing Claude Code usage from local JSONL files](https://github.com/ryoppippi/ccusage)
* [2025-07-18, 22:59:53](https://lobste.rs/s/pz8p8c/super_mario_bros_is_computationally_hard) - [Super Mario Bros is (Computationally) Hard](https://www.youtube.com/watch?v=unLPk4H1hto)
* [2025-07-18, 22:45:32](https://news.ycombinator.com/item?id=44610623) - [I&apos;m Rebelling Against the Algorithm](https://varunraghu.com/im-rebelling-against-the-algorithm/)
* [2025-07-18, 22:27:17](https://news.ycombinator.com/item?id=44610468) - [How to write Rust in the Linux kernel: part 3](https://lwn.net/SubscriberLink/1026694/3413f4b43c862629/)
* [2025-07-18, 21:21:50](https://news.ycombinator.com/item?id=44609969) - [Silence Is a Commons by Ivan Illich (1983)](http://www.davidtinapple.com/illich/1983_silence_commons.html)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 20:30:36](https://news.ycombinator.com/item?id=44609479) - [Wii U SDBoot1 Exploit “paid the beak”](https://consolebytes.com/wii-u-sdboot1-exploit-paid-the-beak/)
* [2025-07-18, 20:16:10](https://lobste.rs/s/s8ldew/current_technology_is_not_ready_for) - [The current technology is not ready for proper blending](https://blog.pkh.me/p/43-the-current-technology-is-not-ready-for-proper-blending.html)
* [2025-07-18, 19:59:49](https://news.ycombinator.com/item?id=44609137) - [Multiplatform Matrix Multiplication Kernels](https://burn.dev/blog/sota-multiplatform-matmul/)
* [2025-07-18, 19:59:04](https://news.ycombinator.com/item?id=44609130) - [AI capex is so big that it&apos;s affecting economic statistics](https://paulkedrosky.com/honey-ai-capex-ate-the-economy/)
* [2025-07-18, 19:43:57](https://lobste.rs/s/ojxlqm/pimping_my_casio_part_deux) - [Pimping my Casio: Part Deux](https://blog.jgc.org/2025/07/pimping-my-casio-part-deux.html)
* [2025-07-18, 19:29:52](https://news.ycombinator.com/item?id=44608856) - [Broadcom to discontinue free Bitnami Helm charts](https://github.com/bitnami/charts/issues/35164)
* [2025-07-18, 19:28:34](https://news.ycombinator.com/item?id=44608840) - [Show HN: I built library management app for those who outgrew spreadsheets](https://www.librari.io/)
* [2025-07-18, 19:21:38](https://news.ycombinator.com/item?id=44608754) - [Asynchrony is not concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:21:17](https://lobste.rs/s/oeuohp/asynchrony_is_not_concurrency) - [Asynchrony is not Concurrency](https://kristoff.it/blog/asynchrony-is-not-concurrency/)
* [2025-07-18, 19:13:24](https://lobste.rs/s/df2azc/firefox_patch_bin_librewolf_fix_bin_zen) - [firefox-patch-bin, librewolf-fix-bin and zen-browser-patched-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 19:09:07](https://news.ycombinator.com/item?id=44608622) - [Replication of Quantum Factorisation Records with a VIC-20, an Abacus, and a Dog](https://eprint.iacr.org/2025/1237)
* [2025-07-18, 18:40:30](https://news.ycombinator.com/item?id=44608312) - [Show HN: Molab, a cloud-hosted Marimo notebook workspace](https://molab.marimo.io/notebooks)
* [2025-07-18, 18:39:06](https://news.ycombinator.com/item?id=44608295) - [Cancer DNA is detectable in blood years before diagnosis](https://www.sciencenews.org/article/cancer-tumor-dna-blood-test-screening)
* [2025-07-18, 18:39:02](https://news.ycombinator.com/item?id=44608294) - [Mango Health (YC W24) Is Hiring](https://www.ycombinator.com/companies/mango-health/jobs/3bjIHus-founding-engineer)
* [2025-07-18, 18:36:39](https://news.ycombinator.com/item?id=44608275) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-18, 17:56:37](https://news.ycombinator.com/item?id=44607838) - [Meta says it wont sign Europe AI agreement, calling it growth stunting overreach](https://www.cnbc.com/2025/07/18/meta-europe-ai-code.html)
* [2025-07-18, 17:21:49](https://news.ycombinator.com/item?id=44607403) - [The year of peak might and magic](https://www.filfre.net/2025/07/the-year-of-peak-might-and-magic/)
* [2025-07-18, 17:08:16](https://lobste.rs/s/datuh1/kap_lang) - [Kap lang](https://kapdemo.dhsdevelopments.com/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 15:56:40](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero) - [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder](https://nigeltao.github.io/blog/2020/jsonptr.html)
* [2025-07-18, 15:54:46](https://news.ycombinator.com/item?id=44606184) - [Valve confirms credit card companies pressured it to delist certain adult games](https://www.pcgamer.com/software/platforms/valve-confirms-credit-card-companies-pressured-it-to-delist-certain-adult-games-from-steam/)
* [2025-07-18, 15:49:02](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act) - [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903)
* [2025-07-18, 15:40:23](https://lobste.rs/s/bd0dek/how_i_fixed_ruby_s_most_annoying_problem_60) - [How I Fixed Ruby&apos;s Most Annoying Problem: 60-Second Gem Installs](https://mensfeld.pl/2025/07/solving-ruby-rdkafka-installation-problem/)
* [2025-07-18, 15:19:17](https://news.ycombinator.com/item?id=44605670) - [A New Geometry for Einstein&apos;s Theory of Relativity](https://www.quantamagazine.org/a-new-geometry-for-einsteins-theory-of-relativity-20250716/)
* [2025-07-18, 12:40:41](https://news.ycombinator.com/item?id=44604050) - [lsr: ls with io_uring](https://rockorager.dev/log/lsr-ls-but-with-io-uring/)
* [2025-07-18, 12:31:17](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector) - [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/)
* [2025-07-18, 12:28:26](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational) - [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:04:13](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend)
* [2025-07-18, 10:22:15](https://news.ycombinator.com/item?id=44603066) - [CP/M creator Gary Kildall&apos;s memoirs released as free download](https://spectrum.ieee.org/cpm-creator-gary-kildalls-memoirs-released-as-free-download)
* [2025-07-18, 08:35:22](https://lobste.rs/s/xzxxng/when_root_meets_immutable_openbsd) - [When Root Meets Immutable: OpenBSD chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:22:59](https://lobste.rs/s/ytnxm6/engineering_end_work) - [Engineering the End of Work](https://schmud.de/posts/2025-07-15-engineering-end-of-work.html)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 03:22:18](https://lobste.rs/s/zcizsx/how_go_1_24_s_swiss_tables_saved_us_hundreds) - [How Go 1.24&apos;s Swiss Tables saved us hundreds of gigabytes](https://www.datadoghq.com/blog/engineering/go-swiss-tables/)
* [2025-07-18, 02:25:13](https://lobste.rs/s/l8a8zq/nih_is_far_cheaper_than_wrong_dependency) - [NIH Is Far Cheaper Than The Wrong Dependency](https://lewiscampbell.tech/blog/250718.html)
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
* [2025-07-17, 13:52:14](https://news.ycombinator.com/item?id=44593441) - [Converting Integers to Floats Using Hyperfocus (2022)](https://blog.m-ou.se/floats/)
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
* [2025-07-15, 16:21:59](https://news.ycombinator.com/item?id=44572807) - [Sage: An atomic bomb kicked off the biggest computing project in history](https://www.ibm.com/history/sage)
* [2025-07-15, 15:18:48](https://news.ycombinator.com/item?id=44572068) - [Show HN: Simulating autonomous drone formations](https://github.com/sushrut141/ketu)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 11:39:18](https://news.ycombinator.com/item?id=44570113) - [C++: zero-cost static initialization](https://cofault.com/zero-cost-static.html)
* [2025-07-15, 08:11:19](https://news.ycombinator.com/item?id=44569032) - [Trying Guix: A Nixer&apos;s impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
