# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Launch HN: Lucidic (YC W25) – Debug, test, and evaluate AI agents in production](https://news.ycombinator.com/item?id=44735843)

* [Big Tech Killed the Golden Age of Programming](https://www.taylor.gl/blog/29) ([comments](https://news.ycombinator.com/item?id=44735081))

* [Zuckerberg Says Meta&apos;s AI Systems Have Begun Improving Themselves, And Developing Superintelligence is Now in Sight](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Execs Say Employees Have To &apos;Be More AI-Savvy&apos;](https://tech.slashdot.org/story/25/07/30/0333248/google-execs-say-employees-have-to-be-more-ai-savvy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Cheyenne To Host Massive AI Datacenter Using More Electricity Than All Wyoming Homes Combined](https://hardware.slashdot.org/story/25/07/29/2246259/cheyenne-to-host-massive-ai-datacenter-using-more-electricity-than-all-wyoming-homes-combined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## HTML, RISC, and Hypervisor Developments

* [HTML Day 2025: August 2nd](https://html.energy/html-day/2025/index.html) ([comments](https://lobste.rs/s/k1jqch/html_day_2025_august_2nd))

* [Verified Assembly 2: Memory, RISC-V, Cuts for Invariants, and Ghost Code](https://www.philipzucker.com/asm_verify2/) ([comments](https://lobste.rs/s/scar6u/verified_assembly_2_memory_risc_v_cuts_for))

* [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now) ([comments](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust))

## Surveys and State of Technology

* [State of HTML 2025 survey](https://survey.devographics.com/en-US/survey/state-of-html/2025) ([comments](https://lobste.rs/s/eqbygf/state_html_2025_survey))

* [2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/) ([comments](https://lobste.rs/s/jyq5hg/2025_stack_overflow_developer_survey))

## Finance and Corporate Strategies

* [JPMorgan Spooks Fintechs With Plans To Charge For Access To Customer Data](https://slashdot.org/story/25/07/30/1456243/jpmorgan-spooks-fintechs-with-plans-to-charge-for-access-to-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Our $100M Series B](https://oxide.computer/blog/our-100m-series-b) ([comments](https://lobste.rs/s/y5va3r/our_100m_series_b))

## Programming and Tools

* [Words about Arrays and Tables](https://buttondown.com/hillelwayne/archive/2000-words-about-arrays-and-tables/) ([comments](https://news.ycombinator.com/item?id=44735334))

* [Making Libcurl Work in WebAssembly](https://jeroen.github.io/notes/webassembly-curl/) ([comments](https://news.ycombinator.com/item?id=44733734))

* [Bitmapist: We built an open-source cohorts analytics tool that saved millions](https://www.doist.dev/bitmapist/) ([comments](https://news.ycombinator.com/item?id=44733983))

## Science and Health Insights

* [Sleep all comes down to the mitochondria](https://www.science.org/content/blog-post/it-all-comes-down-mitochondria) ([comments](https://news.ycombinator.com/item?id=44732020))

* [Famous Double-Slit Experiment Holds Up When Stripped To Its Quantum Essentials](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A Pill for Sleep Apnea Could Be on the Horizon](https://science.slashdot.org/story/25/07/30/0314210/a-pill-for-sleep-apnea-could-be-on-the-horizon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Security and Cyber Events

* [Minnesota Activates National Guard After St. Paul Cyberattack](https://it.slashdot.org/story/25/07/29/2229221/minnesota-activates-national-guard-after-st-paul-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)

## Emerging Economic and Political Topics

* [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)

* [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)

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

* [2025-07-30, 15:54:02](https://news.ycombinator.com/item?id=44735843) - [Launch HN: Lucidic (YC W25) – Debug, test, and evaluate AI agents in production](https://news.ycombinator.com/item?id=44735843)
* [2025-07-30, 15:50:48](https://lobste.rs/s/scar6u/verified_assembly_2_memory_risc_v_cuts_for) - [Verified Assembly 2: Memory, RISC-V, Cuts for Invariants, and Ghost Code](https://www.philipzucker.com/asm_verify2/)
* [2025-07-30, 15:42:49](https://lobste.rs/s/k1jqch/html_day_2025_august_2nd) - [HTML Day 2025: August 2nd](https://html.energy/html-day/2025/index.html)
* [2025-07-30, 15:33:35](https://lobste.rs/s/oh2hzs/rfc_upstream_target_support_for_cheri) - [[RFC] Upstream target support for CHERI-enabled architectures](https://discourse.llvm.org/t/rfc-upstream-target-support-for-cheri-enabled-architectures/87623)
* [2025-07-30, 15:26:16](https://lobste.rs/s/eqbygf/state_html_2025_survey) - [State of HTML 2025 survey](https://survey.devographics.com/en-US/survey/state-of-html/2025)
* [2025-07-30, 15:20:00](https://slashdot.org/story/25/07/30/1456243/jpmorgan-spooks-fintechs-with-plans-to-charge-for-access-to-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Spooks Fintechs With Plans To Charge For Access To Customer Data](https://slashdot.org/story/25/07/30/1456243/jpmorgan-spooks-fintechs-with-plans-to-charge-for-access-to-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 15:15:30](https://news.ycombinator.com/item?id=44735334) - [Words about Arrays and Tables](https://buttondown.com/hillelwayne/archive/2000-words-about-arrays-and-tables/)
* [2025-07-30, 14:58:04](https://news.ycombinator.com/item?id=44735081) - [Big Tech Killed the Golden Age of Programming](https://www.taylor.gl/blog/29)
* [2025-07-30, 14:55:52](https://lobste.rs/s/y5va3r/our_100m_series_b) - [Our $100M Series B](https://oxide.computer/blog/our-100m-series-b)
* [2025-07-30, 14:51:10](https://news.ycombinator.com/item?id=44734983) - [Show HN: A High-Altitude Low-Power Flight Computer for High-Altitude Balloons](https://github.com/New-England-Weather-Balloon-Society/Tiny4FSK)
* [2025-07-30, 14:44:08](https://lobste.rs/s/mrzwqr/writing_memory_efficient_c_structs) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 14:40:00](https://slashdot.org/story/25/07/30/1440256/only-27-of-managers-worldwide-feel-engaged-at-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Only 27% of Managers Worldwide Feel Engaged at Work](https://slashdot.org/story/25/07/30/1440256/only-27-of-managers-worldwide-feel-engaged-at-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 14:02:15](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust) - [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now)
* [2025-07-30, 14:00:00](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg Says Meta&apos;s AI Systems Have Begun Improving Themselves, And Developing Superintelligence is Now in Sight](https://tech.slashdot.org/story/25/07/30/1359201/zuckerberg-says-metas-ai-systems-have-begun-improving-themselves-and-developing-superintelligence-is-now-in-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 13:55:25](https://news.ycombinator.com/item?id=44734260) - [NMDA Receptor Antagonists: Slightly More Than You Wanted to Know](https://grillbert.substack.com/p/nmda-receptor-antagonists-a-bit-more)
* [2025-07-30, 13:33:37](https://news.ycombinator.com/item?id=44733983) - [Bitmapist: We built an open-source cohorts analytics tool that saved millions](https://www.doist.dev/bitmapist/)
* [2025-07-30, 13:32:23](https://news.ycombinator.com/item?id=44733968) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 13:26:10](https://lobste.rs/s/p9axqd/rfc_862_echo_protocol) - [RFC 862: Echo Protocol](https://datatracker.ietf.org/doc/html/rfc862)
* [2025-07-30, 13:24:10](https://news.ycombinator.com/item?id=44733888) - [Try the Mosquito Bucket of Death](https://www.energyvanguard.com/blog/try-the-mosquito-bucket-of-death/)
* [2025-07-30, 13:17:28](https://news.ycombinator.com/item?id=44733817) - [Our $100M Series B](https://oxide.computer/blog/our-100m-series-b)
* [2025-07-30, 13:11:06](https://news.ycombinator.com/item?id=44733742) - [Show HN: MoebiusXBIN – ASCII and text-mode art editor with custom font support](https://blog.glyphdrawing.club/moebiusxbin-ascii-and-text-mode-art-editor-with-custom-font-support/)
* [2025-07-30, 13:09:27](https://news.ycombinator.com/item?id=44733734) - [Making Libcurl Work in WebAssembly](https://jeroen.github.io/notes/webassembly-curl/)
* [2025-07-30, 13:05:22](https://lobste.rs/s/uyudor/optimize_cpu_performance_with) - [Optimize CPU performance with Instruments](https://developer.apple.com/videos/play/wwdc2025/308/)
* [2025-07-30, 13:00:00](https://tech.slashdot.org/story/25/07/30/0333248/google-execs-say-employees-have-to-be-more-ai-savvy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Execs Say Employees Have To &apos;Be More AI-Savvy&apos;](https://tech.slashdot.org/story/25/07/30/0333248/google-execs-say-employees-have-to-be-more-ai-savvy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 12:29:52](https://news.ycombinator.com/item?id=44733341) - [Problem Solving Is Often a Matter of Cooking Up an Appropriate Markov Chain](https://www.jstor.org/stable/41548580)
* [2025-07-30, 12:03:54](https://news.ycombinator.com/item?id=44733119) - [The HTML Hobbyist](https://www.htmlhobbyist.com/)
* [2025-07-30, 12:01:10](https://news.ycombinator.com/item?id=44733094) - [Blog series on creating an OS in Rust](https://os.phil-opp.com/)
* [2025-07-30, 12:00:30](https://news.ycombinator.com/item?id=44733086) - [Cedana (YC S23) Is Hiring a Systems Engineer](https://www.ycombinator.com/companies/cedana/jobs/zRmK2by-systems-engineer-advanced-orchestration)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 11:43:01](https://lobste.rs/s/wdbnkt/taming_bias_unbiased_safepoint_based) - [Taming the Bias: Unbiased* Safepoint-Based Stack Walking in JFR](https://mostlynerdless.de/blog/2025/05/20/taming-the-bias-unbiased-safepoint-based-stack-walking-in-jfr/)
* [2025-07-30, 11:02:23](https://lobste.rs/s/nadv6h/activity_monitor_anatomy) - [Activity Monitor Anatomy](https://www.bazhenov.me/posts/activity-monitor-anatomy/)
* [2025-07-30, 10:50:39](https://news.ycombinator.com/item?id=44732700) - [Moneybadger and Peach Payments partner to enable Bitcoin payments](https://bitcoinke.io/2025/07/moneybadger-peach-payments-partnership/)
* [2025-07-30, 10:03:14](https://lobste.rs/s/iubohk/phoenix_liveview_v1_1_0) - [Phoenix LiveView v1.1.0](https://hexdocs.pm/phoenix_live_view/changelog.html)
* [2025-07-30, 10:00:00](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Famous Double-Slit Experiment Holds Up When Stripped To Its Quantum Essentials](https://science.slashdot.org/story/25/07/30/0322225/famous-double-slit-experiment-holds-up-when-stripped-to-its-quantum-essentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 08:34:10](https://news.ycombinator.com/item?id=44732020) - [Sleep all comes down to the mitochondria](https://www.science.org/content/blog-post/it-all-comes-down-mitochondria)
* [2025-07-30, 08:19:46](https://news.ycombinator.com/item?id=44731958) - [Oscar-Winning &apos;No Other Land&apos; Awdah Hathaleen Killed by Israeli Settler](https://www.latimes.com/entertainment-arts/story/2025-07-29/awdah-hathaleen-killed-no-other-land-palestinian-activist-israeli-settler)
* [2025-07-30, 07:41:55](https://lobste.rs/s/2qrwtx/nadim_kobeissi_s_applied_cryptography) - [Nadim Kobeissi&apos;s Applied Cryptography Course](https://www.youtube.com/watch?v=z6kK7rIbyB0)
* [2025-07-30, 07:15:08](https://lobste.rs/s/70mi93/month_using_xmpp_for_every_call_chat_2023) - [A month using XMPP for every call and chat (2023)](https://neilzone.co.uk/2023/08/a-month-using-xmpp-using-snikket-for-every-call-and-chat/)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 07:00:00](https://science.slashdot.org/story/25/07/30/0314210/a-pill-for-sleep-apnea-could-be-on-the-horizon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Pill for Sleep Apnea Could Be on the Horizon](https://science.slashdot.org/story/25/07/30/0314210/a-pill-for-sleep-apnea-could-be-on-the-horizon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 06:43:00](https://lobste.rs/s/5n6jcp/flat_design_vs_realistic_skeuomorphic) - [Flat design vs realistic (“skeuomorphic”) design](https://www.flatisbad.com/)
* [2025-07-30, 06:16:09](https://lobste.rs/s/ikhfqq/pkgbase_removes_freebsd_base_system) - [PKGBASE Removes FreeBSD Base System Feature](https://lists.freebsd.org/archives/freebsd-pkgbase/2025-July/000590.html)
* [2025-07-30, 06:15:00](https://tech.slashdot.org/story/25/07/30/0612248/indias-one-airline-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s One-Airline State](https://tech.slashdot.org/story/25/07/30/0612248/indias-one-airline-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 04:56:43](https://lobste.rs/s/bpeob3/bookmarkfs_fuse_based_pseudo_filesystem) - [bookmarkfs: FUSE-based pseudo-filesystem for managing web browser bookmarks](https://sr.ht/~cismonx/bookmarkfs/)
* [2025-07-30, 03:53:52](https://lobste.rs/s/o7avvq/i_want_defend_wayland_here_explain) - [I want to defend Wayland here and explain a crucial piece that I think people are missing](https://ordinary.cafe/@technobaboo/114935252929285259)
* [2025-07-30, 03:30:00](https://hardware.slashdot.org/story/25/07/29/2246259/cheyenne-to-host-massive-ai-datacenter-using-more-electricity-than-all-wyoming-homes-combined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheyenne To Host Massive AI Datacenter Using More Electricity Than All Wyoming Homes Combined](https://hardware.slashdot.org/story/25/07/29/2246259/cheyenne-to-host-massive-ai-datacenter-using-more-electricity-than-all-wyoming-homes-combined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-30, 01:40:00](https://politics.slashdot.org/story/25/07/29/2259223/apples-ios-26-text-filters-could-cost-political-campaigns-millions-of-dollars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s iOS 26 Text Filters Could Cost Political Campaigns Millions of Dollars](https://politics.slashdot.org/story/25/07/29/2259223/apples-ios-26-text-filters-could-cost-political-campaigns-millions-of-dollars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 01:00:00](https://news.slashdot.org/story/25/07/29/2237252/youtube-rolls-out-age-estimation-tech-to-identify-us-teens-apply-additional-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Rolls Out Age-Estimation Tech To Identify US Teens, Apply Additional Protections](https://news.slashdot.org/story/25/07/29/2237252/youtube-rolls-out-age-estimation-tech-to-identify-us-teens-apply-additional-protections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 00:38:25](https://news.ycombinator.com/item?id=44729865) - [M8.7 earthquake in Western Pacific, tsunami warning issued](https://earthquake.usgs.gov/earthquakes/eventpage/us6000qw60/executive)
* [2025-07-30, 00:20:00](https://it.slashdot.org/story/25/07/29/2229221/minnesota-activates-national-guard-after-st-paul-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minnesota Activates National Guard After St. Paul Cyberattack](https://it.slashdot.org/story/25/07/29/2229221/minnesota-activates-national-guard-after-st-paul-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 23:40:00](https://linux.slashdot.org/story/25/07/29/2118206/linux-616-brings-faster-file-systems-improved-confidential-memory-support-and-more-rust-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux 6.16 Brings Faster File Systems, Improved Confidential Memory Support, and More Rust Support](https://linux.slashdot.org/story/25/07/29/2118206/linux-616-brings-faster-file-systems-improved-confidential-memory-support-and-more-rust-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 23:00:00](https://mobile.slashdot.org/story/25/07/29/216224/jack-dorseys-bluetooth-messaging-app-bitchat-now-on-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Bluetooth Messaging App Bitchat Now On App Store](https://mobile.slashdot.org/story/25/07/29/216224/jack-dorseys-bluetooth-messaging-app-bitchat-now-on-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 22:20:00](https://linux.slashdot.org/story/25/07/29/2053245/cisco-donates-the-agntcy-project-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cisco Donates the AGNTCY Project to the Linux Foundation](https://linux.slashdot.org/story/25/07/29/2053245/cisco-donates-the-agntcy-project-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 22:09:48](https://news.ycombinator.com/item?id=44728833) - [URL-Driven State in HTMX](https://www.lorenstew.art/blog/bookmarkable-by-design-url-state-htmx/)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 21:40:00](https://news.slashdot.org/story/25/07/29/2042244/chatgpts-new-study-mode-is-designed-to-help-you-learn-not-just-give-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT&apos;s New Study Mode Is Designed To Help You Learn, Not Just Give Answers](https://news.slashdot.org/story/25/07/29/2042244/chatgpts-new-study-mode-is-designed-to-help-you-learn-not-just-give-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 20:57:47](https://news.ycombinator.com/item?id=44728188) - [RIP Shunsaku Tamiya, the man who made plastic model kits a global obsession](https://JapaneseNostalgicCar.com/rip-shunsaku-tamiya-plastic-model-kits/)
* [2025-07-29, 19:36:02](https://lobste.rs/s/xdw1ns/typechecking_is_undecidable_when_type_is) - [Typechecking Is Undecidable When &apos;Type&apos; Is a Type (1989)](https://dspace.mit.edu/bitstream/handle/1721.1/149366/MIT-LCS-TR-458.pdf?sequence=6)
* [2025-07-29, 17:17:58](https://news.ycombinator.com/item?id=44725966) - [ACM Transitions to Full Open Access](https://www.acm.org/publications/openaccess)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 17:01:14](https://news.ycombinator.com/item?id=44725764) - [Study mode](https://openai.com/index/chatgpt-study-mode/)
* [2025-07-29, 16:24:08](https://news.ycombinator.com/item?id=44725306) - [Launch HN: Hyprnote (YC S25) – An open-source AI meeting notetaker](https://news.ycombinator.com/item?id=44725306)
* [2025-07-29, 16:07:13](https://lobste.rs/s/jyq5hg/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/)
* [2025-07-29, 15:44:51](https://lobste.rs/s/ullr4n/printing_book_at_home_with_minimal) - [Printing a Book at Home with Minimal Equipment](https://huijzer.xyz/posts/98/printing-a-book-at-home-with-minimal-equipment)
* [2025-07-29, 15:30:34](https://lobste.rs/s/xqdty6/pretty_nice_web_framework) - [A pretty nice web framework](https://github.com/blaix/prettynice)
* [2025-07-29, 13:58:06](https://news.ycombinator.com/item?id=44723461) - [iPhone 16 cameras vs. traditional digital cameras](https://candid9.com/phone-camera/)
* [2025-07-29, 13:14:41](https://lobste.rs/s/wd6fhe/ethersync_peer_peer_collaborative) - [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 12:03:14](https://lobste.rs/s/dp1rdd/i_m_never_going_back_matrix) - [I&apos;m never going back to Matrix](https://shkspr.mobi/blog/2025/07/im-never-going-back-to-matrix/)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 02:52:58](https://lobste.rs/s/vmqywc/no_more_erlang_manuals) - [No more Erlang manuals](https://blog.whenhen.com/posts/no-more-erlang-manuals.html)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 18:02:13](https://news.ycombinator.com/item?id=44703210) - [Show HN: Dlg – Zero-cost printf-style debugging for Go](https://github.com/vvvvv/dlg)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 05:53:40](https://news.ycombinator.com/item?id=44699174) - [.NET 10 Preview 6 brings JIT improvements, one-shot tool execution](https://www.infoworld.com/article/4023654/net-10-preview-6-brings-jit-improvements-one-shot-tool-execution.html)
* [2025-07-27, 02:22:51](https://news.ycombinator.com/item?id=44698413) - [A Python dict that can report which keys you did not use](https://www.peterbe.com/plog/a-python-dict-that-can-report-which-keys-you-did-not-use)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-27, 00:35:46](https://news.ycombinator.com/item?id=44698007) - [Show HN: Convert from MIDI file to ASCII tablature (and more)](https://github.com/scottvr/gtrsnipe/blob/main/README.md)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 14:58:49](https://news.ycombinator.com/item?id=44694606) - [Clj-coll: Clojure collections and sequences in Common Lisp](https://github.com/dtenny/clj-coll)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
