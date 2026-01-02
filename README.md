# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technology and Development

* [State of the Server 2026](https://theorangeone.net/posts/state-of-the-server-2026/) - A comprehensive review of advancements and status within server technologies as of 2026. [Comments](https://lobste.rs/s/trudnc/state_server_2026)

* [Introducing OpenWorkers – Self-hosted Cloudflare Workers in Rust](https://openworkers.com/introducing-openworkers) - A deep dive into creating self-hosted serverless functions using Rust. [Comments](https://lobste.rs/s/hccuek/introducing_openworkers_self_hosted)

* [TinyTinyTPU: 2×2 systolic-array TPU-style matrix-multiply unit deployed on FPGA](https://github.com/Alanma23/tinytinyTPU-co) - Learn about a compact TPU implementation on an FPGA platform. [Comments](https://news.ycombinator.com/item?id=46468237)

## AI and Ethics

* ['Results Were Fudged': Departing Meta AI Chief Confirms Llama 4 Benchmark Manipulation](https://tech.slashdot.org/story/26/01/02/1449227/results-were-fudged-departing-meta-ai-chief-confirms-llama-4-benchmark-manipulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A whistleblower accuses Meta's AI team of manipulating AI benchmarks. [Comments](https://news.ycombinator.com/item?id=46466074)

* [Google AI Overviews Put People at Risk of Harm With Misleading Health Advice](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis discussing risks of misleading health information in Google AI health advice. [Comments](https://news.ycombinator.com/item?id=46469811)

## Software Development Innovations

* [Designing type-safe sync/async mode support in TypeScript](https://hackers.pub/@hongminhee/2026/typescript-sync-async-type-safety) - Insights on ensuring type safety in synchronous and asynchronous settings using TypeScript. [Comments](https://lobste.rs/s/844jrt/designing_type_safe_sync_async_mode)

* [Cursed Bundler: Using go get to install Ruby Gems](https://nesbitt.io/2025/12/25/cursed-bundler-using-go-get-to-install-ruby-gems.html) - An unconventional experiment to install Ruby Gems using 'go get'. [Comments](https://lobste.rs/s/dg03n6/cursed_bundler_using_go_get_install_ruby)

## Society and Commentary

* [I'm brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/) - Advocating for embracing Linux on the home desktop. [Comments](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if)

* [Ghana Tries To Regulate Online Prophecies](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A unique move by Ghana to regulate online prophecies. [Comments](https://news.ycombinator.com/item?id=46465327)

## Policy and Global Developments

* [Trump Signs Defense Bill Prohibiting China-Based Engineers in Pentagon IT Work](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion on the geopolitical implications of the latest U.S. defense policies. [Comments](https://news.ycombinator.com/item?id=46469811)

* [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - A significant move to classify the traditional drink kava as a food. [Comments](https://news.ycombinator.com/item?id=46468283)

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

* [2026-01-02, 21:48:59](https://news.ycombinator.com/item?id=46469811) - [Tesla sales fell by 9 percent in 2025, its second yearly decline](https://arstechnica.com/cars/2026/01/tesla-sales-fell-by-9-percent-in-2025-its-second-yearly-decline/)
* [2026-01-02, 21:30:00](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Overviews Put People at Risk of Harm With Misleading Health Advice](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 21:12:14](https://lobste.rs/s/trudnc/state_server_2026) - [State of the Server 2026](https://theorangeone.net/posts/state-of-the-server-2026/)
* [2026-01-02, 20:01:00](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Signs Defense Bill Prohibiting China-Based Engineers in Pentagon IT Work](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 19:48:25](https://news.ycombinator.com/item?id=46468600) - [Publish (On Your) Own Site, Syndicate Elsewhere](https://indieweb.org/POSSE#)
* [2026-01-02, 19:39:38](https://news.ycombinator.com/item?id=46468517) - [Jank Lang Hit Alpha](https://github.com/jank-lang/jank)
* [2026-01-02, 19:36:30](https://lobste.rs/s/fcwjie/was_it_really_billion_dollar_mistake) - [Was it really a Billion Dollar Mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)
* [2026-01-02, 19:32:16](https://lobste.rs/s/p7xyqi/webgpu_p5_js) - [WebGPU in p5.js](https://www.davepagurek.com/blog/p5-webgpu/)
* [2026-01-02, 19:30:46](https://news.ycombinator.com/item?id=46468411) - [I wrote a batch script to keep my 2011 ThinkPad alive for 24/7 streaming](https://github.com/patrick48001/ThinkPad-Stream-Sentinel-VLC-Video-Source-reset-disable-stream-shutter)
* [2026-01-02, 19:18:36](https://news.ycombinator.com/item?id=46468283) - [Unix v4 (1973) – Live Terminal](https://unixv4.dev/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 19:13:24](https://news.ycombinator.com/item?id=46468237) - [TinyTinyTPU: 2×2 systolic-array TPU-style matrix-multiply unit deployed on FPGA](https://github.com/Alanma23/tinytinyTPU-co)
* [2026-01-02, 19:01:00](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Closes in on Intel in Latest Steam Hardware Survey](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 18:18:47](https://news.ycombinator.com/item?id=46467677) - [Fighting Fire with Fire: Scalable Oral Exams](https://www.behind-the-enemy-lines.com/2025/12/fighting-fire-with-fire-scalable-oral.html)
* [2026-01-02, 18:16:07](https://news.ycombinator.com/item?id=46467651) - [Accounting for Computer Scientists (2011)](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html)
* [2026-01-02, 18:01:00](https://news.slashdot.org/story/26/01/02/1649208/reading-is-a-vice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reading is a Vice](https://news.slashdot.org/story/26/01/02/1649208/reading-is-a-vice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 17:23:34](https://lobste.rs/s/1lcrer/darktable_styles_mimicing_fujifilm_s) - [Darktable Styles mimicing Fujifilm&apos;s Film Simulations](https://jssfr.de/dtsolve/2026-01-02-darktable-styles-fujifilm.html)
* [2026-01-02, 17:22:04](https://news.ycombinator.com/item?id=46467057) - [Clicks Communicator](https://www.clicksphone.com/en/communicator)
* [2026-01-02, 17:01:00](https://news.slashdot.org/story/26/01/02/1542232/a-decade-of-bbc-question-time-data-reveals-imbalance-in-journalist-guests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Decade of BBC Question Time Data Reveals Imbalance in Journalist Guests](https://news.slashdot.org/story/26/01/02/1542232/a-decade-of-bbc-question-time-data-reveals-imbalance-in-journalist-guests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 16:56:19](https://news.ycombinator.com/item?id=46466734) - [The rsync algorithm (1996) [pdf]](https://www.andrew.cmu.edu/course/15-749/READINGS/required/cas/tridgell96.pdf)
* [2026-01-02, 16:51:28](https://lobste.rs/s/tdxrs5/releasing_fjall_3_0) - [Releasing Fjall 3.0](https://fjall-rs.github.io/post/fjall-3/)
* [2026-01-02, 16:25:38](https://lobste.rs/s/r54non/proving_liveness_with_tla) - [Proving liveness with TLA](https://roscidus.com/blog/blog/2026/01/01/tla-liveness/)
* [2026-01-02, 16:23:34](https://news.ycombinator.com/item?id=46466364) - [Punkt. Unveils MC03 Smartphone](https://www.punkt.ch/blogs/news/punkt-unveils-mc03)
* [2026-01-02, 16:09:05](https://lobste.rs/s/eulydi/which_programming_resource_changed_your) - [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)
* [2026-01-02, 16:00:42](https://news.ycombinator.com/item?id=46466074) - [Ask HN: Who is hiring? (January 2026)](https://news.ycombinator.com/item?id=46466074)
* [2026-01-02, 16:00:42](https://news.ycombinator.com/item?id=46466073) - [Ask HN: Who wants to be hired? (January 2026)](https://news.ycombinator.com/item?id=46466073)
* [2026-01-02, 16:00:00](https://tech.slashdot.org/story/26/01/02/1449227/results-were-fudged-departing-meta-ai-chief-confirms-llama-4-benchmark-manipulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Results Were Fudged&apos;: Departing Meta AI Chief Confirms Llama 4 Benchmark Manipulation](https://tech.slashdot.org/story/26/01/02/1449227/results-were-fudged-departing-meta-ai-chief-confirms-llama-4-benchmark-manipulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 15:48:05](https://lobste.rs/s/lmjuup/accounting_for_computer_scientists) - [Accounting for Computer Scientists](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html)
* [2026-01-02, 15:16:54](https://lobste.rs/s/olywvo/destination_driven_compilation) - [Destination Driven Compilation](https://tailrecursion.com/~alan/Lisp/DestinationDrivenCompilation.html)
* [2026-01-02, 15:01:00](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ghana Tries To Regulate Online Prophecies](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 14:55:09](https://news.ycombinator.com/item?id=46465327) - [IPv6 just turned 30 and still hasn&apos;t taken over the world](https://www.theregister.com/2025/12/31/ipv6_at_30/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 14:00:00](https://news.slashdot.org/story/26/01/02/074243/the-atlanta-journal-constitution-prints-final-newspaper-shifts-to-all-digital-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Atlanta Journal-Constitution Prints Final Newspaper, Shifts To All-Digital Format](https://news.slashdot.org/story/26/01/02/074243/the-atlanta-journal-constitution-prints-final-newspaper-shifts-to-all-digital-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 13:52:52](https://lobste.rs/s/0r8fgx/bespoke_software_is_future) - [Bespoke software is the future](https://fzakaria.com/2026/01/01/bespoke-software-is-the-future)
* [2026-01-02, 13:42:37](https://news.ycombinator.com/item?id=46464652) - [Parental controls aren&apos;t for parents](https://beasthacker.com/til/parental-controls-arent-for-parents.html)
* [2026-01-02, 13:17:06](https://news.ycombinator.com/item?id=46464426) - [39th Chaos Communication Congress Videos](https://media.ccc.de/b/congress/2025)
* [2026-01-02, 12:46:31](https://news.ycombinator.com/item?id=46464235) - [FracturedJson](https://github.com/j-brooke/FracturedJson/wiki)
* [2026-01-02, 12:29:23](https://news.ycombinator.com/item?id=46464120) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
* [2026-01-02, 12:26:55](https://lobste.rs/s/lrx8vc/assorted_less_1_tips) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
* [2026-01-02, 12:07:38](https://lobste.rs/s/2ztfac/my_job_as_family_admin_linux_rules_house) - [My “job” as family admin or Linux rules the house](https://blog.bembel.net/2025/12/my-job-as-family-admin-or-linux-rules-the-house/)
* [2026-01-02, 12:00:00](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Nokia Went From iPhone Victim To $1 Billion Nvidia Deal](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 11:34:27](https://lobste.rs/s/pcznch/comment_preserving_cabal_parser) - [A Comment-Preserving Cabal Parser](https://blog.haskell.org/a-comment-preserving-cabal-parser/)
* [2026-01-02, 11:07:51](https://news.ycombinator.com/item?id=46463644) - [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)
* [2026-01-02, 11:06:29](https://news.ycombinator.com/item?id=46463635) - [A small collection of text-only websites](https://shkspr.mobi/blog/2025/12/a-small-collection-of-text-only-websites/)
* [2026-01-02, 10:25:11](https://news.ycombinator.com/item?id=46463407) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-02, 10:16:11](https://lobste.rs/s/jhboxh/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jhboxh/what_are_you_doing_this_weekend)
* [2026-01-02, 10:10:46](https://news.ycombinator.com/item?id=46463315) - [HPV vaccination reduces oncogenic HPV16/18 prevalence from 16% to &lt;1% in Denmark](https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2025.30.27.2400820)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 08:42:34](https://news.ycombinator.com/item?id=46462719) - [Going immutable on macOS, using Nix-Darwin](https://carette.xyz/posts/going_immutable_macos/)
* [2026-01-02, 08:40:41](https://news.ycombinator.com/item?id=46462702) - [Standard Ebooks: Public Domain Day 2026 in Literature](https://standardebooks.org/blog/public-domain-day-2026)
* [2026-01-02, 08:31:51](https://lobste.rs/s/8wl4s5/rust9x_update_rust_1_93_0_beta) - [Rust9x update: Rust 1.93.0-beta](https://seri.tools/blog/rust9x-1-93/)
* [2026-01-02, 08:30:00](https://it.slashdot.org/story/26/01/02/0444220/asus-announces-price-hikes-starting-january-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Announces Price Hikes Starting January 5](https://it.slashdot.org/story/26/01/02/0444220/asus-announces-price-hikes-starting-january-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 06:47:13](https://lobste.rs/s/rhqfud/freebsd_home_nas_part_1_configuring_zfs) - [FreeBSD: Home NAS, part 1 – configuring ZFS mirror (RAID1)](https://rtfm.co.ua/en/freebsd-home-nas-part-1-configuring-zfs-mirror-raid1/)
* [2026-01-02, 06:27:00](https://lobste.rs/s/watv0s/10_years_personal_finances_plain_text) - [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)
* [2026-01-02, 06:18:20](https://lobste.rs/s/hccuek/introducing_openworkers_self_hosted) - [Introducing OpenWorkers – Self-hosted Cloudflare Workers in Rust](https://openworkers.com/introducing-openworkers)
* [2026-01-02, 06:04:40](https://lobste.rs/s/844jrt/designing_type_safe_sync_async_mode) - [Designing type-safe sync/async mode support in TypeScript](https://hackers.pub/@hongminhee/2026/typescript-sync-async-type-safety)
* [2026-01-02, 05:31:00](https://slashdot.org/story/26/01/01/1740215/australias-biggest-pension-fund-to-cut-global-stocks-allocation-on-ai-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Biggest Pension Fund To Cut Global Stocks Allocation on AI Concerns](https://slashdot.org/story/26/01/01/1740215/australias-biggest-pension-fund-to-cut-global-stocks-allocation-on-ai-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 04:30:26](https://lobste.rs/s/dg03n6/cursed_bundler_using_go_get_install_ruby) - [Cursed Bundler: Using go get to install Ruby Gems](https://nesbitt.io/2025/12/25/cursed-bundler-using-go-get-to-install-ruby-gems.html)
* [2026-01-02, 02:30:00](https://mobile.slashdot.org/story/26/01/01/1816240/no-standard-iphone-18-launch-this-year-reports-suggest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Standard iPhone 18 Launch This Year, Reports Suggest](https://mobile.slashdot.org/story/26/01/01/1816240/no-standard-iphone-18-launch-this-year-reports-suggest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 00:31:10](https://lobste.rs/s/tjvdxk/extensibility_100_lisp_fallacy) - [Extensibility: The \&quot;100% Lisp\&quot; Fallacy](https://kyo.iroiro.party/en/posts/100-percent-lisp/)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-02, 00:02:00](https://apple.slashdot.org/story/26/01/01/189219/idc-estimates-apple-shipped-just-45000-vision-pros-last-quarter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IDC Estimates Apple Shipped Just 45,000 Vision Pros Last Quarter](https://apple.slashdot.org/story/26/01/01/189219/idc-estimates-apple-shipped-just-45000-vision-pros-last-quarter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 22:30:00](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some of Your Cells Are Not Genetically Yours](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 21:10:00](https://slashdot.org/story/26/01/01/1752221/the-cult-of-costco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Cult of Costco&apos;](https://slashdot.org/story/26/01/01/1752221/the-cult-of-costco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 20:29:24](https://lobste.rs/s/ari1nd/reasons_love_field_programming) - [Reasons to Love the Field of Programming Languages](https://danilafe.com/blog/i_love_programming_languages/)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 13:04:07](https://lobste.rs/s/mxqift/one_number_i_trust_plain_text_accounting) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:18:53](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal) - [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
