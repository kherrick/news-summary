# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Engineering Innovations

* [lsr: ls with io_uring](https://tangled.sh/@rockorager.dev/lsr) - A modern enhancement for the `ls` command harnessing `io_uring` for improved performance. [Discuss](https://news.ycombinator.com/item?id=44604050)

* [Polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode) - A novel method involves encoding binary files using rational polynomial functions. [Discuss](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational)

* [Supporting Faster File Load Times with Memory Optimizations in Rust](https://www.figma.com/blog/supporting-faster-file-load-times-with-memory-optimizations-in-rust/) - Optimizing Rust memory management for expedited file loading. [Discuss](https://lobste.rs/s/pz9rgk/supporting_faster_file_load_times_with)

## Advancements in Web Technologies

* [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/) - Further development transforms Servo's developer toolkit with network inspection features. [Discuss](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector)

* [Servo Web Engine Further Tuning Performance](https://www.phoronix.com/news/Servo-June-2025-Highlights) - Performance enhancements highlight Servo's capabilities as a competitive web engine. [Discuss](https://news.ycombinator.com/item?id=44603218)

## Cryptography and Security

* [Fully homomorphic encryption and the dawn of a private internet](https://bozmen.io/fhe) - Exploring the future of internet privacy through fully homomorphic encryption. [Discuss](https://news.ycombinator.com/item?id=44601023)

* [When Root Meets Immutable: OpenBSD chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/) - Security insights into OpenBSD's immutable flags combating log tampering. [Discuss](https://lobste.rs/s/xzxxng/when_root_meets_immutable_openbsd)

## AI and Industry Impacts

* [Robinhood CEO Says Majority of Company's New Code Written by AI](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai) - The AI-driven transformation in Robinhood's software development. [Discuss](https://developers.slashdot.org/story/25/07/17/1918220/robinhood-ceo-says-majority-of-companys-new-code-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [ChatGPT agent: bridging research and action](https://openai.com/index/introducing-chatgpt-agent/) - Exploring a new ChatGPT agent's applications in bridging AI with practical use cases. [Discuss](https://news.ycombinator.com/item?id=44595492)

## Historical Insights and Discoveries

* [CP/M Creator Gary Kildall's Memoirs Released as Free Download](https://spectrum.ieee.org/cpm-creator-gary-kildalls-memoirs-released-as-free-download) - A digital preservation of a computing pioneer's personal memoirs. [Discuss](https://news.ycombinator.com/item?id=44603066)

* [Astronomers Discover Rare Distant Object in Sync with Neptune](https://pweb.cfa.harvard.edu/news/astronomers-discover-rare-distant-object-sync-neptune) - A celestial discovery enriching understanding of Neptune's orbit dynamics. [Discuss](https://news.ycombinator.com/item?id=44599711)

## Societal and Economic Issues

* [House Passes Historic Crypto Bill Regulating Stablecoins](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins) - A landmark legislation shaping the future of digital currencies in the financial domain. [Discuss](https://yro.slashdot.org/story/25/07/17/2321219/house-passes-historic-crypto-bill-regulating-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Dictionary.com 'Devastated' Paid Users By Abruptly Deleting Saved Word Lists](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists) - A customer relations fallout over deleted data in a subscription-based service. [Discuss](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Health

* [Psilocybin produces substantial sustained decreases in depression and anxiety](https://pmc.ncbi.nlm.nih.gov/articles/PMC5367557/) - Research highlights the long-term mental health benefits of Psilocybin treatments. [Discuss](https://news.ycombinator.com/item?id=44603267)

* [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold) - Significant progress in cancer prevention efforts and their outcomes. [Discuss](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-07-18, 12:40:41](https://news.ycombinator.com/item?id=44604050) - [lsr: ls with io_uring](https://tangled.sh/@rockorager.dev/lsr)
* [2025-07-18, 12:31:17](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector) - [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/)
* [2025-07-18, 12:28:26](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational) - [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode)
* [2025-07-18, 12:00:47](https://news.ycombinator.com/item?id=44603739) - [Resolve (YC W15) Is Hiring an Operations and Billing Lead for Construction VR](https://news.ycombinator.com/item?id=44603739)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:10:53](https://news.ycombinator.com/item?id=44603365) - [The Most Powerful Server Embiggens a Bit with Power11](https://www.nextplatform.com/2025/07/16/the-worlds-most-powerful-server-embiggens-a-bit-with-power11/)
* [2025-07-18, 11:04:13](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend)
* [2025-07-18, 10:57:08](https://news.ycombinator.com/item?id=44603267) - [Psilocybin produces substantial sustained decreases in depression and anxiety](https://pmc.ncbi.nlm.nih.gov/articles/PMC5367557/)
* [2025-07-18, 10:48:40](https://news.ycombinator.com/item?id=44603218) - [Servo Web Engine Further Tuning Performance](https://www.phoronix.com/news/Servo-June-2025-Highlights)
* [2025-07-18, 10:22:15](https://news.ycombinator.com/item?id=44603066) - [CP/M Creator Gary Kildall&apos;s Memoirs Released as Free Download](https://spectrum.ieee.org/cpm-creator-gary-kildalls-memoirs-released-as-free-download)
* [2025-07-18, 10:10:55](https://lobste.rs/s/ccizhx/tech_promised_everything_did_it_deliver) - [Tech Promised Everything. Did it deliver?](https://www.youtube.com/watch?v=dVG8W-0p6vg)
* [2025-07-18, 08:36:47](https://news.ycombinator.com/item?id=44602532) - [When Root Meets Immutable: OpenBSD Chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:35:22](https://lobste.rs/s/xzxxng/when_root_meets_immutable_openbsd) - [When Root Meets Immutable: OpenBSD chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:22:59](https://lobste.rs/s/ytnxm6/engineering_end_work) - [Engineering the End of Work](https://schmud.de/posts/2025-07-15-engineering-end-of-work.html)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 03:49:50](https://news.ycombinator.com/item?id=44601023) - [Fully homomorphic encryption and the dawn of a private internet](https://bozmen.io/fhe)
* [2025-07-18, 03:22:18](https://lobste.rs/s/zcizsx/how_go_1_24_s_swiss_tables_saved_us_hundreds) - [How Go 1.24&apos;s Swiss Tables saved us hundreds of gigabytes](https://www.datadoghq.com/blog/engineering/go-swiss-tables/)
* [2025-07-18, 02:27:43](https://news.ycombinator.com/item?id=44600594) - [NIH is cheaper than the wrong dependency](https://lewiscampbell.tech/blog/250718.html)
* [2025-07-18, 02:25:13](https://lobste.rs/s/l8a8zq/nih_is_far_cheaper_than_wrong_dependency) - [NIH Is Far Cheaper Than The Wrong Dependency](https://lewiscampbell.tech/blog/250718.html)
* [2025-07-18, 02:24:18](https://lobste.rs/s/pz9rgk/supporting_faster_file_load_times_with) - [Supporting Faster File Load Times with Memory Optimizations in Rust](https://www.figma.com/blog/supporting-faster-file-load-times-with-memory-optimizations-in-rust/)
* [2025-07-18, 02:24:15](https://news.ycombinator.com/item?id=44600574) - [Fixing a Direct3D9 bug in Far Cry (2018)](https://houssemnasri.github.io/2018/07/07/farcry-d3d9-bug/)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:50:41](https://lobste.rs/s/yv7r9s/forgejo_v12) - [Forgejo v12](https://forgejo.org/2025-07-release-v12-0/)
* [2025-07-18, 00:45:00](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ukrainian Hackers Claim To Have Destroyed Major Russian Drone Maker&apos;s Entire Network](https://tech.slashdot.org/story/25/07/17/2350256/ukrainian-hackers-claim-to-have-destroyed-major-russian-drone-makers-entire-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-18, 00:02:00](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dictionary.com &apos;Devastated&apos; Paid Users By Abruptly Deleting Saved Word Lists](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-18, 00:01:54](https://news.ycombinator.com/item?id=44599711) - [Astronomers Discover Rare Distant Object in Sync with Neptune](https://pweb.cfa.harvard.edu/news/astronomers-discover-rare-distant-object-sync-neptune)
* [2025-07-17, 23:38:48](https://news.ycombinator.com/item?id=44599549) - [My favorite use-case for AI is writing logs](https://newsletter.vickiboykis.com/archive/my-favorite-use-case-for-ai-is-writing-logs/)
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
* [2025-07-17, 18:27:24](https://news.ycombinator.com/item?id=44596472) - [My experience with Claude Code after two weeks of adventures](https://sankalp.bearblog.dev/my-claude-code-experience-after-2-weeks-of-usage/)
* [2025-07-17, 18:08:00](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain&apos;s Bankrupt Universities Are Hunting For Cheaper Models](https://news.slashdot.org/story/25/07/17/188217/britains-bankrupt-universities-are-hunting-for-cheaper-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 17:29:46](https://news.ycombinator.com/item?id=44595824) - [Run TypeScript code without worrying about configuration](https://tsx.is/)
* [2025-07-17, 17:28:49](https://news.ycombinator.com/item?id=44595811) - [All AI models might be the same](https://blog.jxmo.io/p/there-is-only-one-model)
* [2025-07-17, 17:26:00](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Debuts AI Agent That Controls Browsers To Automate Shopping, Presentations](https://it.slashdot.org/story/25/07/17/1726216/openai-debuts-ai-agent-that-controls-browsers-to-automate-shopping-presentations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 17:01:47](https://news.ycombinator.com/item?id=44595492) - [ChatGPT agent: bridging research and action](https://openai.com/index/introducing-chatgpt-agent/)
* [2025-07-17, 16:41:00](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Sony is Still Stubborn About the Size of Its Cameras&apos;](https://slashdot.org/story/25/07/17/1635202/sony-is-still-stubborn-about-the-size-of-its-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 16:36:39](https://lobste.rs/s/a29mny/hackers_exploit_blind_spot_by_hiding) - [Hackers exploit a blind spot by hiding malware inside DNS records](https://arstechnica.com/security/2025/07/hackers-exploit-a-blind-spot-by-hiding-malware-inside-dns-records/)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:30:32](https://lobste.rs/s/tusjpx/mercury_protocol) - [The Mercury Protocol](https://raw.githubusercontent.com/floren/mercury/master/SPEC)
* [2025-07-17, 16:08:57](https://lobste.rs/s/savjgl/firefox_dev_says_intel_raptor_lake) - [Firefox dev says Intel Raptor Lake crashes are increasing with rising temperatures in record European heat wave](https://www.tomshardware.com/pc-components/cpus/firefox-dev-says-intel-raptor-lake-crashes-are-increasing-with-rising-temperatures-in-record-european-heat-wave-mozilla-staffs-tracking-overwhelmed-by-intel-crash-reports-team-disables-the-function)
* [2025-07-17, 16:02:00](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:42:57](https://lobste.rs/s/czw9yx/how_i_became_first_linux_user_india) - [How I Became the First Linux User in India](https://medium.com/@vishalmisra/how-i-became-the-first-linux-user-in-india-b86be9d2a6c5)
* [2025-07-17, 15:21:00](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:19:15](https://lobste.rs/s/lzvc21/why_pull_based_pipelines_are_faster) - [Why pull-based pipelines are faster](https://blog.sequinstream.com/why-pull-based-pipelines-are-faster/)
* [2025-07-17, 15:00:18](https://news.ycombinator.com/item?id=44594156) - [Mistral Releases Deep Research, Voice, Projects in Le Chat](https://mistral.ai/news/le-chat-dives-deep)
* [2025-07-17, 14:58:56](https://lobste.rs/s/udtfpn/zig_s_new_writer) - [Zig&apos;s new Writer](https://www.openmymind.net/Zigs-New-Writer/)
* [2025-07-17, 14:43:00](https://news.ycombinator.com/item?id=44593972) - [Self-taught engineers often outperform (2024)](https://michaelbastos.com/blog/why-self-taught-engineers-often-outperform)
* [2025-07-17, 14:40:00](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Plans 20,000 Robotaxis in Six-Year Rollout with Lucid and Nuro](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:24:13](https://lobste.rs/s/mklbl9/lsr_ls_with_io_uring) - [lsr: ls but with io_uring](https://tangled.sh/@rockorager.dev/lsr)
* [2025-07-17, 12:55:24](https://lobste.rs/s/7miuzf/terminal_trove_home_all_things_terminal) - [Terminal Trove - The $HOME of all things in the terminal](https://terminaltrove.com/)
* [2025-07-17, 12:45:01](https://lobste.rs/s/vpzlcr/defeating_dependency_duplication_tests) - [Defeating Dependency Duplication in Tests?](https://lobste.rs/s/vpzlcr/defeating_dependency_duplication_tests)
* [2025-07-17, 12:08:38](https://news.ycombinator.com/item?id=44592413) - [Hand: open-source Robot Hand](https://github.com/pollen-robotics/AmazingHand)
* [2025-07-17, 12:07:33](https://lobste.rs/s/greve7/parsing_protobuf_like_never_before) - [Parsing Protobuf Like Never Before](https://mcyoung.xyz/2025/07/16/hyperpb/)
* [2025-07-17, 12:00:04](https://lobste.rs/s/cavtz6/firefox_security_privacy_newsletter) - [Firefox Security &amp; Privacy newsletter 2025 Q2](https://attackanddefense.dev/2025/07/17/firefox-security-privacy-newsletter-2025-q2.html)
* [2025-07-17, 11:54:46](https://lobste.rs/s/s92ylk/two_simple_rules_fix_code_reviews) - [Two Simple Rules to Fix Code Reviews](https://serce.me/posts/2025-07-17-two-simple-rules-to-fix-code-reviews)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-17, 00:16:17](https://news.ycombinator.com/item?id=44588319) - [Perfume reviews](https://gwern.net/blog/2025/perfume)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 19:48:37](https://lobste.rs/s/4bhrvr/artisanal_handcrafted_git_repositories) - [Artisanal Handcrafted Git Repositories](https://drew.silcock.dev/blog/artisanal-git/)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 20:56:35](https://news.ycombinator.com/item?id=44575729) - [Fighting Brandolini&apos;s Law with Sampling](https://brady.fyi/fact-checking/)
* [2025-07-15, 18:06:31](https://news.ycombinator.com/item?id=44574107) - [Claude Code Unleashed](https://ymichael.com/2025/07/15/claude-code-unleashed)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 09:16:21](https://news.ycombinator.com/item?id=44569367) - [RisingWave: An Open‑Source Stream‑Processing and Management Platform](https://github.com/risingwavelabs/risingwave)
* [2025-07-15, 08:59:08](https://news.ycombinator.com/item?id=44569278) - [TCP-in-UDP Solution (eBPF)](https://blog.mptcp.dev/2025/07/14/TCP-in-UDP.html)
* [2025-07-15, 08:07:52](https://news.ycombinator.com/item?id=44569019) - [Inspect ANSI control codes and escape sequences](https://ansi.tools)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 07:18:32](https://news.ycombinator.com/item?id=44568761) - [15 Years If Jefit](https://www.jefit.com/our-story)
* [2025-07-15, 06:53:45](https://news.ycombinator.com/item?id=44568594) - [DIY Telescope Mods That Transformed My Astrophotography](https://www.youtube.com/watch?v=Efmzr_K4ApQ)
* [2025-07-15, 05:39:26](https://news.ycombinator.com/item?id=44568147) - [A look at IBM&apos;s short-lived \&quot;butterfly\&quot; ThinkPad 701 of 1995](https://www.fastcompany.com/91356463/ibm-thinkpad-701-butterfly-keyboard)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 16:15:41](https://news.ycombinator.com/item?id=44561895) - [Extending That XOR Trick to Billions of Rows](https://nochlin.com/blog/extending-that-xor-trick)
* [2025-07-14, 15:45:28](https://news.ycombinator.com/item?id=44561516) - [Hundred Rabbits – Low-tech living while sailing the world](https://100r.co/site/home.html)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
