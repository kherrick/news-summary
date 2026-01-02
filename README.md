# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [FracturedJson](https://github.com/j-brooke/FracturedJson/wiki) offers a robust JSON formatter to meet various formatting requirements. [Comments here](https://news.ycombinator.com/item?id=46464235).

* [Designing type-safe sync/async mode support in TypeScript](https://hackers.pub/@hongminhee/2026/typescript-sync-async-type-safety) explores challenges and strategies for balancing TypeScript's asynchronous modes. [Join the discussion here](https://lobste.rs/s/844jrt/designing_type_safe_sync_async_mode).

* [Rust9x update: Rust 1.93.0-beta](https://seri.tools/blog/rust9x-1-93/) presents updates to Rust programming with new features and enhancements. [Details here](https://lobste.rs/s/8wl4s5/rust9x_update_rust_1_93_0_beta).

* [Introducing OpenWorkers – Self-hosted Cloudflare Workers in Rust](https://openworkers.com/introducing-openworkers) offers insights into decentralized serverless computing. [Discuss this project](https://lobste.rs/s/hccuek/introducing_openworkers_self_hosted).

* [Cursed Bundler: Using go get to install Ruby Gems](https://nesbitt.io/2025/12/25/cursed-bundler-using-go-get-to-install-ruby-gems.html) describes an unconventional approach to manage Ruby dependencies. [Check the commentary](https://lobste.rs/s/dg03n6/cursed_bundler_using_go_get_install_ruby).

## Personal Stories and Reflections

* [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/) recounts a decade-long experiment in personal accounting. [Read the discussion](https://news.ycombinator.com/item?id=46463644).

* [Linux is good now](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/) boasts the recent improvements in Linux and its growing user base, encouraging users to adopt it. [Learn more here](https://news.ycombinator.com/item?id=46457770).

* [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html) offers a personal perspective on re-evaluating creative commitments. [Join the discussion](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal).

## Health and Science Highlights

* [HPV vaccination reduces oncogenic HPV16/18 prevalence from 16% to <1% in Denmark](https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2025.30.27.2400820) demonstrates the impact of national vaccination programs. [Comment here](https://news.ycombinator.com/item?id=46463315).

* [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) discusses groundbreaking findings on how brains naturally measure distances. [Insightful reader comments here](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss).

* [Some of Your Cells Are Not Genetically Yours](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses recent discoveries about cellular life sharing genetic diversities. [Discussion available](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Cultural and Societal Insights

* [Extensibility: The "100% Lisp" Fallacy](https://kyo.iroiro.party/en/posts/100-percent-lisp/) critiques the philosophy surrounding pure Lisp programming. [Join the conversation here](https://news.ycombinator.com/item?id=46460394).

* [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) proposes solutions for rethinking the current scientific publishing models. [Read the discussion](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss).

* [Public Domain Day 2026 Brings Betty Boop, Nancy Drew and 'I Got Rhythm' Into the Commons](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) celebrates the expansion of Public Domain works. [Commentary here](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2026-01-02, 12:46:31](https://news.ycombinator.com/item?id=46464235) - [FracturedJson](https://github.com/j-brooke/FracturedJson/wiki)
* [2026-01-02, 12:26:55](https://lobste.rs/s/lrx8vc/assorted_less_1_tips) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
* [2026-01-02, 12:07:38](https://lobste.rs/s/2ztfac/my_job_as_family_admin_linux_rules_house) - [My “job” as family admin or Linux rules the house](https://blog.bembel.net/2025/12/my-job-as-family-admin-or-linux-rules-the-house/)
* [2026-01-02, 12:07:00](https://news.ycombinator.com/item?id=46463992) - [Show HN: I built a clipboard tool to strip/keep specific formatting like Italics](https://custompaste.com)
* [2026-01-02, 12:00:00](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Nokia Went From iPhone Victim To $1 Billion Nvidia Deal](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 11:34:27](https://lobste.rs/s/pcznch/comment_preserving_cabal_parser) - [A Comment-Preserving Cabal Parser](https://blog.haskell.org/a-comment-preserving-cabal-parser/)
* [2026-01-02, 11:15:52](https://news.ycombinator.com/item?id=46463683) - [High-Fidelity 3D Shape Generation](https://pku-yuangroup.github.io/UltraShape-1.0/)
* [2026-01-02, 11:07:51](https://news.ycombinator.com/item?id=46463644) - [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)
* [2026-01-02, 10:25:11](https://news.ycombinator.com/item?id=46463407) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-02, 10:16:11](https://lobste.rs/s/jhboxh/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jhboxh/what_are_you_doing_this_weekend)
* [2026-01-02, 10:10:46](https://news.ycombinator.com/item?id=46463315) - [HPV vaccination reduces oncogenic HPV16/18 prevalence from 16% to &lt;1% in Denmark](https://www.eurosurveillance.org/content/10.2807/1560-7917.ES.2025.30.27.2400820)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 08:42:34](https://news.ycombinator.com/item?id=46462719) - [Going immutable on macOS, using Nix-Darwin](https://carette.xyz/posts/going_immutable_macos/)
* [2026-01-02, 08:40:41](https://news.ycombinator.com/item?id=46462702) - [Standard Ebooks: Public Domain Day 2026 in Literature](https://standardebooks.org/blog/public-domain-day-2026)
* [2026-01-02, 08:31:51](https://lobste.rs/s/8wl4s5/rust9x_update_rust_1_93_0_beta) - [Rust9x update: Rust 1.93.0-beta](https://seri.tools/blog/rust9x-1-93/)
* [2026-01-02, 08:30:00](https://it.slashdot.org/story/26/01/02/0444220/asus-announces-price-hikes-starting-january-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Announces Price Hikes Starting January 5](https://it.slashdot.org/story/26/01/02/0444220/asus-announces-price-hikes-starting-january-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 08:16:21](https://news.ycombinator.com/item?id=46462592) - [Round the tree, yes, but not round the squirrel](https://www.futilitycloset.com/2026/01/02/round-and-round/)
* [2026-01-02, 06:48:32](https://news.ycombinator.com/item?id=46462108) - [FreeBSD: Home NAS, part 1 – configuring ZFS mirror (RAID1)](https://rtfm.co.ua/en/freebsd-home-nas-part-1-configuring-zfs-mirror-raid1/)
* [2026-01-02, 06:47:13](https://lobste.rs/s/rhqfud/freebsd_home_nas_part_1_configuring_zfs) - [FreeBSD: Home NAS, part 1 – configuring ZFS mirror (RAID1)](https://rtfm.co.ua/en/freebsd-home-nas-part-1-configuring-zfs-mirror-raid1/)
* [2026-01-02, 06:27:00](https://lobste.rs/s/watv0s/10_years_personal_finances_plain_text) - [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)
* [2026-01-02, 06:18:20](https://lobste.rs/s/hccuek/introducing_openworkers_self_hosted) - [Introducing OpenWorkers – Self-hosted Cloudflare Workers in Rust](https://openworkers.com/introducing-openworkers)
* [2026-01-02, 06:04:40](https://lobste.rs/s/844jrt/designing_type_safe_sync_async_mode) - [Designing type-safe sync/async mode support in TypeScript](https://hackers.pub/@hongminhee/2026/typescript-sync-async-type-safety)
* [2026-01-02, 05:31:00](https://slashdot.org/story/26/01/01/1740215/australias-biggest-pension-fund-to-cut-global-stocks-allocation-on-ai-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Biggest Pension Fund To Cut Global Stocks Allocation on AI Concerns](https://slashdot.org/story/26/01/01/1740215/australias-biggest-pension-fund-to-cut-global-stocks-allocation-on-ai-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 04:30:26](https://lobste.rs/s/dg03n6/cursed_bundler_using_go_get_install_ruby) - [Cursed Bundler: Using go get to install Ruby Gems](https://nesbitt.io/2025/12/25/cursed-bundler-using-go-get-to-install-ruby-gems.html)
* [2026-01-02, 02:30:00](https://mobile.slashdot.org/story/26/01/01/1816240/no-standard-iphone-18-launch-this-year-reports-suggest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Standard iPhone 18 Launch This Year, Reports Suggest](https://mobile.slashdot.org/story/26/01/01/1816240/no-standard-iphone-18-launch-this-year-reports-suggest?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 02:21:57](https://news.ycombinator.com/item?id=46460676) - [Marmot – A distributed SQLite server with MySQL wire compatible interface](https://github.com/maxpert/marmot)
* [2026-01-02, 01:42:16](https://news.ycombinator.com/item?id=46460440) - [Happy Public Domain Day 2026](https://publicdomainreview.org/blog/2026/01/public-domain-day-2026/)
* [2026-01-02, 01:36:25](https://news.ycombinator.com/item?id=46460394) - [Extensibility: The \&quot;100% Lisp\&quot; Fallacy](https://kyo.iroiro.party/en/posts/100-percent-lisp/)
* [2026-01-02, 01:24:51](https://news.ycombinator.com/item?id=46460319) - [Why users cannot create Issues directly](https://github.com/ghostty-org/ghostty/issues/3558)
* [2026-01-02, 00:31:10](https://lobste.rs/s/tjvdxk/extensibility_100_lisp_fallacy) - [Extensibility: The \&quot;100% Lisp\&quot; Fallacy](https://kyo.iroiro.party/en/posts/100-percent-lisp/)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-02, 00:02:00](https://apple.slashdot.org/story/26/01/01/189219/idc-estimates-apple-shipped-just-45000-vision-pros-last-quarter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IDC Estimates Apple Shipped Just 45,000 Vision Pros Last Quarter](https://apple.slashdot.org/story/26/01/01/189219/idc-estimates-apple-shipped-just-45000-vision-pros-last-quarter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 22:46:25](https://lobste.rs/s/cvfbto/xcc700_mini_c_compiler_for_esp32) - [xcc700: mini C compiler for esp32](https://github.com/valdanylchuk/xcc700)
* [2026-01-01, 22:30:00](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some of Your Cells Are Not Genetically Yours](https://science.slashdot.org/story/26/01/01/1758214/some-of-your-cells-are-not-genetically-yours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 21:52:27](https://lobste.rs/s/gzzfoo/gdb_jit_interface) - [The GDB JIT interface](https://bernsteinbear.com/blog/gdb-jit/)
* [2026-01-01, 21:37:10](https://news.ycombinator.com/item?id=46458302) - [Can Bundler be as fast as uv?](https://tenderlovemaking.com/2025/12/29/can-bundler-be-as-fast-as-uv/)
* [2026-01-01, 21:10:00](https://slashdot.org/story/26/01/01/1752221/the-cult-of-costco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Cult of Costco&apos;](https://slashdot.org/story/26/01/01/1752221/the-cult-of-costco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 21:07:43](https://lobste.rs/s/9evpnj/sorting_with_fibonacci_numbers_knuth) - [Sorting with Fibonacci Numbers and a Knuth Reward Check](https://orlp.net/blog/fibonacci-sort/)
* [2026-01-01, 20:36:46](https://news.ycombinator.com/item?id=46457784) - [A website to destroy all websites](https://henry.codes/writing/a-website-to-destroy-all-websites/)
* [2026-01-01, 20:35:11](https://news.ycombinator.com/item?id=46457770) - [Linux is good now](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-01, 20:29:24](https://lobste.rs/s/ari1nd/reasons_love_field_programming) - [Reasons to Love the Field of Programming Languages](https://danilafe.com/blog/i_love_programming_languages/)
* [2026-01-01, 20:11:00](https://news.slashdot.org/story/26/01/01/1744208/iran-offers-to-sell-advanced-weapons-systems-for-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Offers To Sell Advanced Weapons Systems For Crypto](https://news.slashdot.org/story/26/01/01/1744208/iran-offers-to-sell-advanced-weapons-systems-for-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 18:40:00](https://tech.slashdot.org/story/26/01/01/1833202/ipv6-just-turned-30-and-still-hasnt-taken-over-the-world-but-dont-call-it-a-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;IPv6 Just Turned 30 and Still Hasn&apos;t Taken Over the World, But Don&apos;t Call It a Failure&apos;](https://tech.slashdot.org/story/26/01/01/1833202/ipv6-just-turned-30-and-still-hasnt-taken-over-the-world-but-dont-call-it-a-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 18:33:50](https://lobste.rs/s/gc8x9v/email_privacy_tester) - [Email Privacy Tester](https://www.emailprivacytester.com/)
* [2026-01-01, 18:11:00](https://news.slashdot.org/story/26/01/01/1736221/dhs-says-real-id-which-dhs-certifies-is-too-unreliable-to-confirm-us-citizenship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Says REAL ID, Which DHS Certifies, Is Too Unreliable To Confirm US Citizenship](https://news.slashdot.org/story/26/01/01/1736221/dhs-says-real-id-which-dhs-certifies-is-too-unreliable-to-confirm-us-citizenship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 17:18:01](https://news.ycombinator.com/item?id=46455872) - [Cameras and Lenses (2020)](https://ciechanow.ski/cameras-and-lenses/)
* [2026-01-01, 17:12:00](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Domain Day 2026 Brings Betty Boop, Nancy Drew and &apos;I Got Rhythm&apos; Into the Commons](https://news.slashdot.org/story/26/01/01/1712212/public-domain-day-2026-brings-betty-boop-nancy-drew-and-i-got-rhythm-into-the-commons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 16:01:00](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Space Agency Acknowledges Another Breach as Criminals Claim 200 GB Data Haul](https://it.slashdot.org/story/26/01/01/1525235/european-space-agency-acknowledges-another-breach-as-criminals-claim-200-gb-data-haul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 15:49:42](https://news.ycombinator.com/item?id=46454977) - [BYD Sells 4.6M Vehicles in 2025, Meets Revised Sales Goal](https://www.bloomberg.com/news/articles/2026-01-01/byd-sells-4-6-million-vehicles-in-2025-meets-revised-sales-goal)
* [2026-01-01, 15:45:25](https://news.ycombinator.com/item?id=46454944) - [50% of U.S. vinyl buyers don&apos;t own a record player](https://lightcapai.medium.com/the-great-return-from-digital-abundance-to-analog-meaning-cfda9e428752)
* [2026-01-01, 15:09:06](https://news.ycombinator.com/item?id=46454693) - [Show HN: OpenWorkers – Self-hosted Cloudflare workers in Rust](https://openworkers.com/introducing-openworkers)
* [2026-01-01, 15:00:00](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Man Taking Over the Large Hadron Collider](https://science.slashdot.org/story/26/01/01/1455227/the-man-taking-over-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 14:39:23](https://news.ycombinator.com/item?id=46454470) - [Python numbers every programmer should know](https://mkennedy.codes/posts/python-numbers-every-programmer-should-know/)
* [2026-01-01, 14:32:12](https://news.ycombinator.com/item?id=46454413) - [2025 Letter](https://danwang.co/2025-letter/)
* [2026-01-01, 14:14:14](https://lobste.rs/s/kgbaoc/software_taketh_away_faster_than) - [Software taketh away faster than hardware giveth: Why C++ programmers keep growing fast despite competition, safety, and AI](https://herbsutter.com/2025/12/30/software-taketh-away-faster-than-hardware-giveth-why-c-programmers-keep-growing-fast-despite-competition-safety-and-ai/)
* [2026-01-01, 14:12:42](https://news.ycombinator.com/item?id=46454274) - [Joseph Campbell Meets George Lucas – Part I (2015)](https://www.starwars.com/news/mythic-discovery-within-the-inner-reaches-of-outer-space-joseph-campbell-meets-george-lucas-part-i)
* [2026-01-01, 14:00:00](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can&apos;t Trust Your Eyes To Tell You What&apos;s Real Anymore, Says Instagram Head](https://tech.slashdot.org/story/26/01/01/1355226/you-cant-trust-your-eyes-to-tell-you-whats-real-anymore-says-instagram-head?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 13:04:07](https://lobste.rs/s/mxqift/one_number_i_trust_plain_text_accounting) - [One Number I Trust: Plain-Text Accounting for a Multi-Currency Household](https://lalitm.com/post/one-number-i-trust/)
* [2026-01-01, 13:00:00](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymos Are Now Coming For Your Coveted San Francisco Parking Spots](https://tech.slashdot.org/story/25/12/31/2232231/waymos-are-now-coming-for-your-coveted-san-francisco-parking-spots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 11:17:18](https://news.ycombinator.com/item?id=46453204) - [Bluetooth Headphone Jacking: A Key to Your Phone [video]](https://media.ccc.de/v/39c3-bluetooth-headphone-jacking-a-key-to-your-phone)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 09:37:54](https://lobste.rs/s/ki1qtn/writing_windows_95_software_2025) - [Writing Windows 95 software in 2025](https://tlxdev.hashnode.dev/writing-windows-95-software-in-2025)
* [2026-01-01, 05:53:53](https://lobste.rs/s/ukybhb/pidgin_3_0_experimental_5_2_94_0_has_been) - [Pidgin 3.0 Experimental 5 (2.94.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-5-2-94-0-has-been-released/338)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 04:49:09](https://lobste.rs/s/fq0fyl/statically_linking_pipewire) - [Statically Linking PipeWire](https://gamesbymason.com/blog/2025/statically-linking-pipewire/)
* [2026-01-01, 02:25:12](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted) - [How do you secure access to your self-hosted/homelab services?](https://lobste.rs/s/rmenr4/how_do_you_secure_access_your_self_hosted)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:23:54](https://news.ycombinator.com/item?id=46449852) - [Show HN: Enroll, a tool to reverse-engineer servers into Ansible config mgmt](https://enroll.sh)
* [2026-01-01, 00:18:53](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal) - [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 23:58:28](https://lobste.rs/s/hj01zc/hp_ux_hits_end_life_today_i_m_sad) - [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 09:49:46](https://lobste.rs/s/3cwha2/solid_load_bull) - [A SOLID Load of Bull](https://loup-vaillant.fr/articles/solid-bull)
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
* [2025-12-29, 10:28:38](https://news.ycombinator.com/item?id=46419196) - [Can I throw a C++ exception from a structured exception?](https://devblogs.microsoft.com/oldnewthing/20170728-00/?p=96706)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
