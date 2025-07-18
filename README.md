# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Computing

* [Meta says it won’t sign Europe AI agreement, calling it growth stunting overreach](https://www.cnbc.com/2025/07/18/meta-europe-ai-code.html) ([comments](https://news.ycombinator.com/item?id=44607838))

* [Fully homomorphic encryption and the dawn of a private internet](https://bozmen.io/fhe) ([comments](https://news.ycombinator.com/item?id=44601023))

* [DuckDuckGo now lets you hide AI-generated images in search results](https://techcrunch.com/2025/07/18/duckduckgo-now-lets-you-hide-ai-generated-images-in-search-results/) ([comments](https://news.ycombinator.com/item?id=44606803))

* [A New Geometry for Einstein's Theory of Relativity](https://www.quantamagazine.org/a-new-geometry-for-einsteins-theory-of-relativity-20250716/) ([comments](https://news.ycombinator.com/item?id=44605670))

## Cybersecurity and Privacy

* [Firefox-patch-bin, librewolf-fix-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/) ([comments](https://news.ycombinator.com/item?id=44607740))

* [ICE is getting unprecedented access to Medicaid data](https://www.wired.com/story/ice-access-medicaid-data/) ([comments](https://news.ycombinator.com/item?id=44605618))

* [DOGE Staffer With Access to Americans’ Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=44605670))

* [When root meets immutable: OpenBSD chflags vs. log tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/) ([comments](https://news.ycombinator.com/item?id=44602532))

## Science and Mathematics

* [Psilocybin decreases depression and anxiety in cancer patients (2016)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5367557/) ([comments](https://news.ycombinator.com/item?id=44603267))

* [Brute-forcing Langley’s geometry problem with field extensions](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/adventitious/) ([comments](https://lobste.rs/s/u22ato/brute_forcing_langley_s_geometry_problem))

* [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss))

## Technology and Software

* [LibreOffice slams Microsoft for locking in Office users w/ complex file formats](https://www.neowin.net/news/libreoffice-calls-out-microsoft-for-using-complex-file-formats-to-lock-in-office-users/) ([comments](https://news.ycombinator.com/item?id=44606646))

* [Supporting Faster File Load Times with Memory Optimizations in Rust](https://www.figma.com/blog/supporting-faster-file-load-times-with-memory-optimizations-in-rust/) ([comments](https://lobste.rs/s/pz9rgk/supporting_faster_file_load_times_with))

* [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder](https://nigeltao.github.io/blog/2020/jsonptr.html) ([comments](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero))

* [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/) ([comments](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector))

## Noteworthy Legal and Policy Changes

* [Section 174 is reversed! Mostly, that is.](https://newsletter.pragmaticengineer.com/p/the-pulse-section-174-is-reversed) ([comments](https://news.ycombinator.com/item?id=44607961))

* [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903) ([comments](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act))

* [Dictionary.com 'Devastated' Paid Users By Abruptly Deleting Saved Word Lists](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/07/17/2329217/dictionarycom-devastated-paid-users-by-abruptly-deleting-saved-word-lists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2025-07-18, 18:39:02](https://news.ycombinator.com/item?id=44608294) - [Mango Health (YC W24) Is Hiring](https://www.ycombinator.com/companies/mango-health/jobs/3bjIHus-founding-engineer)
* [2025-07-18, 18:07:57](https://news.ycombinator.com/item?id=44607961) - [Section 174 is reversed! Mostly, that is.](https://newsletter.pragmaticengineer.com/p/the-pulse-section-174-is-reversed)
* [2025-07-18, 17:56:37](https://news.ycombinator.com/item?id=44607838) - [Meta says it wont sign Europe AI agreement, calling it growth stunting overreach](https://www.cnbc.com/2025/07/18/meta-europe-ai-code.html)
* [2025-07-18, 17:48:48](https://news.ycombinator.com/item?id=44607740) - [Firefox-patch-bin, librewolf-fix-bin AUR packages contain malware](https://lists.archlinux.org/archives/list/aur-general@lists.archlinux.org/thread/7EZTJXLIAQLARQNTMEW2HBWZYE626IFJ/)
* [2025-07-18, 17:12:05](https://news.ycombinator.com/item?id=44607252) - [Starbase injury rates outpace rivals as SpaceX chases its Mars moonshot](https://techcrunch.com/2025/07/18/starbase-injury-rates-outpace-rivals-as-spacex-chases-its-mars-moonshot/)
* [2025-07-18, 17:08:16](https://lobste.rs/s/datuh1/kap_lang) - [Kap lang](https://kapdemo.dhsdevelopments.com/)
* [2025-07-18, 16:41:52](https://news.ycombinator.com/item?id=44606803) - [DuckDuckGo now lets you hide AI-generated images in search results](https://techcrunch.com/2025/07/18/duckduckgo-now-lets-you-hide-ai-generated-images-in-search-results/)
* [2025-07-18, 16:30:58](https://news.ycombinator.com/item?id=44606646) - [LibreOffice slams Microsoft for locking in Office users w/ complex file formats](https://www.neowin.net/news/libreoffice-calls-out-microsoft-for-using-complex-file-formats-to-lock-in-office-users/)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 16:09:33](https://lobste.rs/s/mae4yg/enough_unix_get_by) - [Enough unix to get by](https://thoughtbot.com/blog/enough-unix-to-get-by)
* [2025-07-18, 15:56:40](https://lobste.rs/s/fzjq4y/jsonptr_using_wuffs_memory_safe_zero) - [Jsonptr: Using Wuffs’ Memory-Safe, Zero-Allocation JSON Decoder](https://nigeltao.github.io/blog/2020/jsonptr.html)
* [2025-07-18, 15:49:02](https://lobste.rs/s/hoxhnw/petition_repeal_online_safety_act) - [Petition: Repeal the Online Safety Act](https://petition.parliament.uk/petitions/722903)
* [2025-07-18, 15:40:23](https://lobste.rs/s/bd0dek/how_i_fixed_ruby_s_most_annoying_problem_60) - [How I Fixed Ruby&apos;s Most Annoying Problem: 60-Second Gem Installs](https://mensfeld.pl/2025/07/solving-ruby-rdkafka-installation-problem/)
* [2025-07-18, 15:39:51](https://news.ycombinator.com/item?id=44605946) - [Dear valued user, You have reached the error page for the error page](https://imgur.com/a/2H7HVcU)
* [2025-07-18, 15:23:53](https://news.ycombinator.com/item?id=44605732) - [Ask HN: GCP Outage?](https://news.ycombinator.com/item?id=44605732)
* [2025-07-18, 15:19:17](https://news.ycombinator.com/item?id=44605670) - [A New Geometry for Einstein&apos;s Theory of Relativity](https://www.quantamagazine.org/a-new-geometry-for-einsteins-theory-of-relativity-20250716/)
* [2025-07-18, 15:15:58](https://news.ycombinator.com/item?id=44605618) - [ICE is getting unprecedented access to Medicaid data](https://www.wired.com/story/ice-access-medicaid-data/)
* [2025-07-18, 14:46:32](https://lobste.rs/s/ezdxus/losing_language_features_some_stories) - [losing language features: some stories about disjoint unions](https://graydon2.dreamwidth.org/318788.html)
* [2025-07-18, 14:44:57](https://news.ycombinator.com/item?id=44605213) - [I&apos;m Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=44605213)
* [2025-07-18, 13:38:53](https://lobste.rs/s/u22ato/brute_forcing_langley_s_geometry_problem) - [Brute-forcing Langley’s geometry problem with field extensions](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/adventitious/)
* [2025-07-18, 13:29:50](https://news.ycombinator.com/item?id=44604453) - [Exposed MCP servers across the internet](https://www.knostic.ai/blog/mapping-mcp-servers-study)
* [2025-07-18, 13:05:55](https://news.ycombinator.com/item?id=44604257) - [Ask HN: Any active COBOL devs here? What are you working on?](https://news.ycombinator.com/item?id=44604257)
* [2025-07-18, 12:40:41](https://news.ycombinator.com/item?id=44604050) - [lsr: ls with io_uring](https://rockorager.dev/log/lsr-ls-but-with-io-uring/)
* [2025-07-18, 12:31:17](https://lobste.rs/s/99mqr2/servo_adds_support_for_network_inspector) - [Servo adds support for network inspector devtools](https://servo.org/blog/2025/07/17/this-month-in-servo/)
* [2025-07-18, 12:28:26](https://lobste.rs/s/jwbvyr/polycode_encode_binary_file_as_rational) - [polycode: Encode a binary file as a rational polynomial function](https://codeberg.org/cve/polycode)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:04:13](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dw7vlt/what_are_you_doing_this_weekend)
* [2025-07-18, 10:57:08](https://news.ycombinator.com/item?id=44603267) - [Psilocybin decreases depression and anxiety in cancer patients (2016)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5367557/)
* [2025-07-18, 10:22:15](https://news.ycombinator.com/item?id=44603066) - [CP/M creator Gary Kildall&apos;s memoirs released as free download](https://spectrum.ieee.org/cpm-creator-gary-kildalls-memoirs-released-as-free-download)
* [2025-07-18, 08:36:47](https://news.ycombinator.com/item?id=44602532) - [When root meets immutable: OpenBSD chflags vs. log tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:35:22](https://lobste.rs/s/xzxxng/when_root_meets_immutable_openbsd) - [When Root Meets Immutable: OpenBSD chflags vs. Log Tampering](https://rsadowski.de/posts/2025/openbsd-immutable-system-logs/)
* [2025-07-18, 08:22:59](https://lobste.rs/s/ytnxm6/engineering_end_work) - [Engineering the End of Work](https://schmud.de/posts/2025-07-15-engineering-end-of-work.html)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 03:49:50](https://news.ycombinator.com/item?id=44601023) - [Fully homomorphic encryption and the dawn of a private internet](https://bozmen.io/fhe)
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
* [2025-07-17, 16:30:32](https://lobste.rs/s/tusjpx/mercury_protocol) - [The Mercury Protocol](https://raw.githubusercontent.com/floren/mercury/master/SPEC)
* [2025-07-17, 16:08:57](https://lobste.rs/s/savjgl/firefox_dev_says_intel_raptor_lake) - [Firefox dev says Intel Raptor Lake crashes are increasing with rising temperatures in record European heat wave](https://www.tomshardware.com/pc-components/cpus/firefox-dev-says-intel-raptor-lake-crashes-are-increasing-with-rising-temperatures-in-record-european-heat-wave-mozilla-staffs-tracking-overwhelmed-by-intel-crash-reports-team-disables-the-function)
* [2025-07-17, 16:02:00](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows Nationwide Class Action Against Anthropic Over Alleged Piracy of 7 Million Books For AI Training](https://yro.slashdot.org/story/25/07/17/1548245/judge-allows-nationwide-class-action-against-anthropic-over-alleged-piracy-of-7-million-books-for-ai-training?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 15:42:57](https://lobste.rs/s/czw9yx/how_i_became_first_linux_user_india) - [How I Became the First Linux User in India](https://medium.com/@vishalmisra/how-i-became-the-first-linux-user-in-india-b86be9d2a6c5)
* [2025-07-17, 15:21:00](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Death Rates Fall One-Third in US Since 1990s as Prevention Efforts Take Hold](https://science.slashdot.org/story/25/07/17/1455213/cancer-death-rates-fall-one-third-in-us-since-1990s-as-prevention-efforts-take-hold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:58:56](https://lobste.rs/s/udtfpn/zig_s_new_writer) - [Zig&apos;s new Writer](https://www.openmymind.net/Zigs-New-Writer/)
* [2025-07-17, 14:40:00](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Plans 20,000 Robotaxis in Six-Year Rollout with Lucid and Nuro](https://tech.slashdot.org/story/25/07/17/145222/uber-plans-20000-robotaxis-in-six-year-rollout-with-lucid-and-nuro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-17, 14:24:13](https://lobste.rs/s/mklbl9/lsr_ls_with_io_uring) - [lsr: ls but with io_uring](https://tangled.sh/@rockorager.dev/lsr)
* [2025-07-17, 12:07:33](https://lobste.rs/s/greve7/parsing_protobuf_like_never_before) - [Parsing Protobuf Like Never Before](https://mcyoung.xyz/2025/07/16/hyperpb/)
* [2025-07-17, 11:54:46](https://lobste.rs/s/s92ylk/two_simple_rules_fix_code_reviews) - [Two Simple Rules to Fix Code Reviews](https://serce.me/posts/2025-07-17-two-simple-rules-to-fix-code-reviews)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
* [2025-07-17, 00:16:17](https://news.ycombinator.com/item?id=44588319) - [Perfume reviews](https://gwern.net/blog/2025/perfume)
* [2025-07-16, 21:33:00](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss) - [Nvidia CEO says China&apos;s Military Will Avoid U.S. AI Tech](https://soylentnews.org/article.pl?sid=25/07/15/1642247&amp;from=rss)
* [2025-07-16, 16:53:00](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss) - [Texas Governor Says His Emails With Elon Musk are Too ‘Intimate or Embarrassing’ to Release](https://soylentnews.org/article.pl?sid=25/07/15/1528250&amp;from=rss)
* [2025-07-16, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss) - [Secretive Chinese Satellite Emerges in Surprising Orbit After 6-Day Vanishing Act](https://soylentnews.org/article.pl?sid=25/07/15/0229246&amp;from=rss)
* [2025-07-16, 07:34:00](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss) - [Stopping The Rot When Good Software Goes Bad Means New Rules](https://soylentnews.org/article.pl?sid=25/07/14/1828216&amp;from=rss)
* [2025-07-16, 02:51:00](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss) - [GPS On The Fritz? Britain And France Plot A Backup Plan](https://soylentnews.org/article.pl?sid=25/07/14/1819237&amp;from=rss)
* [2025-07-15, 22:13:00](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss) - [Snot-Filtering Tech Could Be The Answer To A Dust-Free PC](https://soylentnews.org/article.pl?sid=25/07/14/188221&amp;from=rss)
* [2025-07-15, 17:24:00](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss) - [Princeton Study Maps 200,000 years of Human–Neanderthal Interbreeding](https://soylentnews.org/article.pl?sid=25/07/14/1758208&amp;from=rss)
* [2025-07-15, 15:05:59](https://news.ycombinator.com/item?id=44571908) - [CoCo1 composite video](https://www.leadedsolder.com/2025/07/15/tandy-trs80-coco-composite-mod-aquarius.html)
* [2025-07-15, 14:32:21](https://news.ycombinator.com/item?id=44571549) - [HathiTrust Digital Library](https://www.hathitrust.org/)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 11:36:08](https://news.ycombinator.com/item?id=44570089) - [How to Get Foreign Keys Horribly Wrong](https://hakibenita.com/django-foreign-keys)
* [2025-07-15, 08:11:19](https://news.ycombinator.com/item?id=44569032) - [Trying Guix: A Nixer&apos;s impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:07:52](https://news.ycombinator.com/item?id=44569019) - [Inspect ANSI control codes and escape sequences](https://ansi.tools)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 07:18:32](https://news.ycombinator.com/item?id=44568761) - [15 Years of Building Jefit](https://www.jefit.com/our-story)
* [2025-07-15, 06:53:45](https://news.ycombinator.com/item?id=44568594) - [DIY Telescope Mods That Transformed My Astrophotography](https://www.youtube.com/watch?v=Efmzr_K4ApQ)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-14, 23:40:17](https://news.ycombinator.com/item?id=44566510) - [The Art of Roland-Garros](https://www.garros.gallery/)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 18:50:31](https://news.ycombinator.com/item?id=44563867) - [Row Polymorphic Programming](https://www.stranger.systems/posts/by-slug/row-polymorphic-programming.html)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 15:45:28](https://news.ycombinator.com/item?id=44561516) - [Hundred Rabbits – Low-tech living while sailing the world](https://100r.co/site/home.html)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
