# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/) - Delve into why the Linux kernel can be simply viewed as a program and how this perspective shapes its design and functionality. [Comments](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program)

* [folder.zone: Share end-to-end encrypted folders live](https://folder.zone) - Explore folder.zone, a unique tool enabling real-time sharing of end-to-end encrypted folders. [Comments](https://lobste.rs/s/mogfta/folder_zone_share_end_end_encrypted)

* [Schrödinger’s test: The /dev/mem case](https://elisa.tech/ambassadors/2025/12/10/schrodingers-test-the-dev-mem-case/) - Insight into a fascinating case involving testing methodologies based on the Schrödinger principle within /dev/mem environments. [Comments](https://lobste.rs/s/hq8sig/schrodinger_s_test_dev_mem_case)

* [Vigil - A clean, fast build watcher for Zig (inspired by Bacon for Rust)](https://github.com/chase-lambert/vigil) - A modern take on build watchers specifically for the Zig language, influenced by Rust's Bacon. [Comments](https://lobste.rs/s/zs8egh/vigil_clean_fast_build_watcher_for_zig)

* [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/) - An insightful exploration of the capabilities and magic behind MSBuild. [Comments](https://lobste.rs/s/hcnzsm/wonder_msbuild)

* [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs) - Introducing a compact and efficient version of the QuickJS Javascript engine. [Comments](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript)

## Privacy and Security

* [Apple Fined $116 Million Over App Privacy Prompts](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple faces a significant fine related to its app privacy disclosures. [Comments](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NPM Package With 56K Downloads Caught Stealing WhatsApp Messages](https://www.koi.ai/blog/npm-package-with-56k-downloads-malware-stealing-whatsapp-messages) - A major security breach in a popular NPM package impacts WhatsApp users. [Comments](https://lobste.rs/s/a9qem9/npm_package_with_56k_downloads_caught)

* [How a Power Outage In Colorado Caused US Official Time To Be 4.8 Microseconds](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This incident reveals the fragility of time synchronization systems during power disruptions. [Comments](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/) - PostgreSQL 18 revolutionizes database operations with its instant cloning feature. [Comments](https://lobste.rs/s/znesuz/instant_database_clones_with_postgresql)

## Global Trends and Economics

* [US To Impose Tariffs on Chips From China](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Rising tensions prompt the US to enforce tariffs on Chinese semiconductors. [Comments](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [China Bans E-commerce Platforms From Forcing Lowest Prices or Abusing Algorithms](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A crackdown on anti-competitive practices and algorithmic exploitation in China's digital market. [Comments](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-12-23, 15:53:35](https://lobste.rs/s/eqsxsc/linux_kernel_is_just_program) - [The Linux kernel is just a program](https://serversfor.dev/linux-inside-out/the-linux-kernel-is-just-a-program/)
* [2025-12-23, 15:50:04](https://lobste.rs/s/mogfta/folder_zone_share_end_end_encrypted) - [folder.zone: Share end-to-end encrypted folders live](https://folder.zone)
* [2025-12-23, 15:22:00](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Fined $116 Million Over App Privacy Prompts](https://apple.slashdot.org/story/25/12/23/151231/apple-fined-116-million-over-app-privacy-prompts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 14:57:11](https://lobste.rs/s/hcnzsm/wonder_msbuild) - [The wonder of MSBuild](https://mmagueta.capivaras.dev/blog/the-wonder-of-msbuild/)
* [2025-12-23, 14:40:00](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Impose Tariffs on Chips From China](https://news.slashdot.org/story/25/12/23/1435213/us-to-impose-tariffs-on-chips-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 14:25:17](https://lobste.rs/s/hq8sig/schrodinger_s_test_dev_mem_case) - [Schrödinger’s test: The /dev/mem case](https://elisa.tech/ambassadors/2025/12/10/schrodingers-test-the-dev-mem-case/)
* [2025-12-23, 14:02:13](https://lobste.rs/s/60fjs1/mquickjs_micro_quickjs_javascript) - [mquickjs: Micro QuickJS Javascript Engine](https://github.com/bellard/mquickjs)
* [2025-12-23, 14:01:00](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Bans E-commerce Platforms From Forcing Lowest Prices or Abusing Algorithms](https://slashdot.org/story/25/12/23/1334206/china-bans-e-commerce-platforms-from-forcing-lowest-prices-or-abusing-algorithms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 13:48:00](https://lobste.rs/s/jmj5oa/dirlock) - [dirlock](https://gitlab.steamos.cloud/holo/dirlock)
* [2025-12-23, 13:30:28](https://lobste.rs/s/zs8egh/vigil_clean_fast_build_watcher_for_zig) - [Vigil - A clean, fast build watcher for Zig (inspired by Bacon for Rust)](https://github.com/chase-lambert/vigil)
* [2025-12-23, 13:11:02](https://lobste.rs/s/ymlyce/web_engine_ci_on_shoestring_budget) - [Web engine CI on a shoestring budget](https://youtu.be/-W1mSXdlRqA)
* [2025-12-23, 13:00:00](https://tech.slashdot.org/story/25/12/22/2219206/uber-lyft-set-to-trial-robotaxis-in-the-uk-in-partnership-with-chinas-baidu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber, Lyft Set To Trial Robotaxis In the UK In Partnership With China&apos;s Baidu](https://tech.slashdot.org/story/25/12/22/2219206/uber-lyft-set-to-trial-robotaxis-in-the-uk-in-partnership-with-chinas-baidu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 12:56:50](https://news.ycombinator.com/item?id=46364973) - [Test, don&apos;t (just) verify](https://alperenkeles.com/posts/test-dont-verify/)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 11:06:45](https://lobste.rs/s/znesuz/instant_database_clones_with_postgresql) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 10:53:07](https://news.ycombinator.com/item?id=46364272) - [Ryanair fined €256M over ‘abusive strategy’ to limit ticket sales by OTAs](https://www.theguardian.com/business/2025/dec/23/ryanair-fined-limit-online-travel-agencies-ticket-sales-ota)
* [2025-12-23, 10:28:09](https://news.ycombinator.com/item?id=46364131) - [Font with Built-In Syntax Highlighting (2024)](https://blog.glyphdrawing.club/font-with-built-in-syntax-highlighting/)
* [2025-12-23, 10:05:00](https://news.ycombinator.com/item?id=46363993) - [Classical billiards can compute (2d billiard systems are Turing complete)](https://arxiv.org/abs/2512.19156)
* [2025-12-23, 10:00:00](https://science.slashdot.org/story/25/12/23/0839241/safety-panel-says-nasa-should-have-taken-starliner-incident-more-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Safety Panel Says NASA Should Have Taken Starliner Incident More Seriously](https://science.slashdot.org/story/25/12/23/0839241/safety-panel-says-nasa-should-have-taken-starliner-incident-more-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 09:54:59](https://news.ycombinator.com/item?id=46363948) - [Are We Loong Yet?](https://areweloongyet.com/en/)
* [2025-12-23, 09:52:07](https://lobste.rs/s/ef5wcv/are_we_loong_yet) - [Are we Loong yet?](https://areweloongyet.com/en/)
* [2025-12-23, 09:50:31](https://news.ycombinator.com/item?id=46363921) - [Ask HN: What are the best engineering blogs with real-world depth?](https://news.ycombinator.com/item?id=46363921)
* [2025-12-23, 09:40:53](https://lobste.rs/s/3amelj/why_quantum_cryptanalysis_is_bollocks) - [Why Quantum Cryptanalysis is Bollocks](https://youtu.be/xa4Ok7WNFHY)
* [2025-12-23, 09:17:42](https://news.ycombinator.com/item?id=46363751) - [Carnap – A formal logic framework for Haskell](https://carnap.io/)
* [2025-12-23, 07:58:25](https://news.ycombinator.com/item?id=46363360) - [Instant database clones with PostgreSQL 18](https://boringsql.com/posts/instant-database-clones/)
* [2025-12-23, 07:50:03](https://news.ycombinator.com/item?id=46363319) - [10 years bootstrapped: €6.5M revenue with a team of 13](https://www.datocms.com/blog/a-look-back-at-2025)
* [2025-12-23, 07:38:18](https://lobste.rs/s/st1mpl/lightest_notes_app_implementation_111) - [The lightest notes app implementation in 111 loc](https://github.com/antonmedv/textarea)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 07:11:39](https://lobste.rs/s/a9qem9/npm_package_with_56k_downloads_caught) - [NPM Package With 56K Downloads Caught Stealing WhatsApp Messages](https://www.koi.ai/blog/npm-package-with-56k-downloads-malware-stealing-whatsapp-messages)
* [2025-12-23, 07:00:00](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Power Outage In Colorado Caused US Official Time To Be 4.8 Microseconds](https://science.slashdot.org/story/25/12/23/018200/how-a-power-outage-in-colorado-caused-us-official-time-to-be-48-microseconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 05:17:50](https://news.ycombinator.com/item?id=46362655) - [Show HN: CineCLI – Browse and torrent movies directly from your terminal](https://github.com/eyeblech/cinecli)
* [2025-12-23, 03:30:00](https://tech.slashdot.org/story/25/12/23/0050202/garmin-emergency-autoland-has-first-save?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Garmin Emergency Autoland Has First Save](https://tech.slashdot.org/story/25/12/23/0050202/garmin-emergency-autoland-has-first-save?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-23, 02:05:38](https://lobste.rs/s/ldlty4/freebsd_closes_laptop_gap_year_one) - [FreeBSD Closes the Laptop Gap: Year One Project Update](https://freebsdfoundation.org/blog/freebsd-closes-the-laptop-gap-year-one-project-update/)
* [2025-12-23, 01:49:56](https://news.ycombinator.com/item?id=46361510) - [The Duodecimal Bulletin, Vol. 55, No. 1, Year 1209 [pdf]](https://dozenal.org/drupal/sites_bck/default/files/DuodecimalBulletinIssue551.pdf)
* [2025-12-23, 01:40:00](https://news.slashdot.org/story/25/12/23/0036201/fcc-bans-foreign-made-drones-over-national-security-spying-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Bans Foreign-Made Drones Over National Security, Spying Concerns](https://news.slashdot.org/story/25/12/23/0036201/fcc-bans-foreign-made-drones-over-national-security-spying-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 01:03:57](https://news.ycombinator.com/item?id=46361229) - [Snitch – A friendlier ss/netstat](https://github.com/karol-broda/snitch)
* [2025-12-23, 01:03:00](https://developers.slashdot.org/story/25/12/23/010200/microsoft-to-replace-all-cc-code-with-rust-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Replace All C/C++ Code With Rust By 2030](https://developers.slashdot.org/story/25/12/23/010200/microsoft-to-replace-all-cc-code-with-rust-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-23, 00:46:51](https://lobste.rs/s/mvqno1/introducing_open_forms) - [Introducing Open Forms](https://www.aryank.in/posts/2025-12-21-introducing-open-forms/)
* [2025-12-23, 00:36:27](https://news.ycombinator.com/item?id=46361024) - [Inside CECOT – 60 Minutes [video]](https://archive.org/details/insidececot)
* [2025-12-23, 00:20:00](https://news.slashdot.org/story/25/12/22/226229/alphabet-acquires-data-center-and-energy-infrastructure-company-intersect-for-475-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alphabet Acquires Data Center and Energy Infrastructure Company Intersect For $4.75 Billion](https://news.slashdot.org/story/25/12/22/226229/alphabet-acquires-data-center-and-energy-infrastructure-company-intersect-for-475-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 23:40:00](https://it.slashdot.org/story/25/12/22/2158219/cyberattack-disrupts-frances-postal-service-banking-during-christmas-rush?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Disrupts France&apos;s Postal Service, Banking During Christmas Rush](https://it.slashdot.org/story/25/12/22/2158219/cyberattack-disrupts-frances-postal-service-banking-during-christmas-rush?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 23:00:00](https://news.slashdot.org/story/25/12/22/2138243/larry-ellison-pledges-40-billion-personal-guarantee-for-paramounts-warner-bros-bid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Larry Ellison Pledges $40-Billion Personal Guarantee For Paramount&apos;s Warner Bros Bid](https://news.slashdot.org/story/25/12/22/2138243/larry-ellison-pledges-40-billion-personal-guarantee-for-paramounts-warner-bros-bid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 22:20:00](https://games.slashdot.org/story/25/12/22/2143219/call-of-duty-co-creator-respawn-co-founder-and-ea-exec-vince-zampella-killed-in-car-accident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Call of Duty Co-Creator, Respawn Co-Founder, and EA Exec Vince Zampella Killed In Car Accident](https://games.slashdot.org/story/25/12/22/2143219/call-of-duty-co-creator-respawn-co-founder-and-ea-exec-vince-zampella-killed-in-car-accident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 21:57:53](https://lobste.rs/s/bhsl9h/i_foretold_mac_app_notarization_is) - [I foretold that Mac app notarization is security theater](https://lapcatsoftware.com/articles/2025/12/5.html)
* [2025-12-22, 21:40:00](https://news.slashdot.org/story/25/12/22/2133214/us-blocks-all-offshore-wind-construction-says-reason-is-classified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Blocks All Offshore Wind Construction, Says Reason Is Classified](https://news.slashdot.org/story/25/12/22/2133214/us-blocks-all-offshore-wind-construction-says-reason-is-classified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 21:09:59](https://news.ycombinator.com/item?id=46359120) - [It&apos;s Always TCP_NODELAY](https://brooker.co.za/blog/2024/05/09/nagle.html)
* [2025-12-22, 20:42:00](https://slashdot.org/story/25/12/22/2024246/accommodating-emerging-giants-in-the-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Accommodating Emerging Giants in the Global Economy](https://slashdot.org/story/25/12/22/2024246/accommodating-emerging-giants-in-the-global-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 19:50:22](https://lobste.rs/s/qbi2ee/lua_5_5_released) - [Lua 5.5 Released](https://www.lua.org/manual/5.5/readme.html#changes)
* [2025-12-22, 19:37:34](https://news.ycombinator.com/item?id=46357945) - [Ultrasound Cancer Treatment: Sound Waves Fight Tumors](https://spectrum.ieee.org/ultrasound-cancer-treatment)
* [2025-12-22, 19:30:18](https://news.ycombinator.com/item?id=46357870) - [The Garbage Collection Handbook](https://gchandbook.org/index.html)
* [2025-12-22, 19:15:56](https://news.ycombinator.com/item?id=46357675) - [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
* [2025-12-22, 19:10:36](https://lobste.rs/s/fjlwli/what_s_new_miri_also_there_s_miri_paper) - [What&apos;s \&quot;new\&quot; in Miri (and also, there&apos;s a Miri paper!)](https://www.ralfj.de/blog/2025/12/22/miri.html)
* [2025-12-22, 18:46:32](https://news.ycombinator.com/item?id=46357287) - [GLM-4.7: Advancing the Coding Capability](https://z.ai/blog/glm-4.7)
* [2025-12-22, 18:43:37](https://lobste.rs/s/2rtmv9/from_zero_qed_informal_introduction) - [From Zero to QED: An informal introduction to formality in Lean 4](https://sdiehl.github.io/zero-to-qed/01_introduction.html)
* [2025-12-22, 18:27:57](https://lobste.rs/s/p6gjfj/uncomfortable_necessary_discussion) - [An uncomfortable but necessary discussion about the Debian bug tracker](https://nibblestew.blogspot.com/2025/12/an-uncomfortable-but-necessary.html)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 17:02:41](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat) - [Email Simplicity vs Decentralized Chat](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat)
* [2025-12-22, 17:01:28](https://news.ycombinator.com/item?id=46355949) - [NIST was 5 μs off UTC after last week&apos;s power cut](https://www.jeffgeerling.com/blog/2025/nist-was-5-μs-utc-after-last-weeks-power-cut)
* [2025-12-22, 16:31:40](https://news.ycombinator.com/item?id=46355548) - [Flock Exposed Its AI-Powered Cameras to the Internet. We Tracked Ourselves](https://www.404media.co/flock-exposed-its-ai-powered-cameras-to-the-internet-we-tracked-ourselves/)
* [2025-12-22, 15:59:01](https://news.ycombinator.com/item?id=46355165) - [Claude Code gets native LSP support](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
* [2025-12-22, 15:43:27](https://lobste.rs/s/supzy7/nature_programming_language) - [Nature Programming Language](https://nature-lang.org/)
* [2025-12-22, 15:38:37](https://news.ycombinator.com/item?id=46354970) - [Scaling LLMs to Larger Codebases](https://blog.kierangill.xyz/oversight-and-guidance)
* [2025-12-22, 15:25:57](https://lobste.rs/s/rdotp2/proposed_rust_kernel_extensions_place) - [Proposed Rust kernel extensions in place of eBPF](https://www.phoronix.com/news/Linux-Kernel-Rust-Rex)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 11:12:29](https://lobste.rs/s/zzvn7y/i_m_former_cto_here_is_15_sec_coding_test_i) - [I’m a former CTO. Here is the 15 sec coding test I used to instantly filter out 50% of unqualified applicants](https://josezarazua.com/im-a-former-cto-here-is-the-15-sec-coding-test-i-used-to-instantly-filter-out-50-of-unqualified-applicants/)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 20:05:09](https://lobste.rs/s/obiiim/thirteen_years_rust_birth_rue) - [Thirteen years of Rust and the birth of Rue](https://steveklabnik.com/writing/thirteen-years-of-rust-and-the-birth-of-rue/)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 07:47:55](https://news.ycombinator.com/item?id=46334333) - [Debian adds LoongArch as officially supported architecture](https://lists.debian.org/debian-devel-announce/2025/12/msg00004.html)
* [2025-12-20, 07:39:00](https://news.ycombinator.com/item?id=46334297) - [The Polyglot NixOS](https://x86.lol/generic/2025/12/19/polyglot.html)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 10:29:33](https://news.ycombinator.com/item?id=46324269) - [FPGAs Need a New Future](https://www.allaboutcircuits.com/industry-articles/fpgas-need-a-new-future/)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
