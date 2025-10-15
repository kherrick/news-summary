# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity, Privacy, and Risks

* [Pixnapping Attack](https://www.pixnapping.com/) - Detailed exploration of a new 'Pixnapping' cybersecurity threat. [Comments](https://news.ycombinator.com/item?id=45588594)

* [DOJ Seizes $15 Billion In Bitcoin From Massive 'Pig Butchering' Scam Based In Cambodia](https://slashdot.org/story/25/10/14/2248208/doj-seizes-15-billion-in-bitcoin-from-massive-pig-butchering-scam-based-in-cambodia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A deep dive into the U.S. Department of Justice's recovery of substantial sums from a cryptocurrency fraud ring. [Comments](https://news.ycombinator.com/item?id=45580981)

* [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&from=rss) - Investigation into the Discord data breach affecting countless users.

## Artificial Intelligence and Computing

* [Google Announces $15 Billion Investment In AI Hub In India](https://news.slashdot.org/story/25/10/14/2112250/google-announces-15-billion-investment-in-ai-hub-in-india?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google outlines ambitious plans to advance AI development in India. [Comments](https://news.ycombinator.com/item?id=45586776)

* [Generative AI Systems Miss Vast Bodies of Human Knowledge, Study Finds](https://slashdot.org/story/25/10/14/155258/generative-ai-systems-miss-vast-bodies-of-human-knowledge-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis reveals significant gaps in generative AI systems' repositories. [Comments](https://news.ycombinator.com/item?id=45583574)

* [Why AI Sounds Biased: Accents Captured in Cluster](https://accent-explorer.boldvoice.com/) - Visualization exposing how AI systems differentiate and process accents.

## Software and Development Innovations

* [FSF announces Librephone project](https://www.fsf.org/news/librephone-project) - The Free Software Foundation's venture into creating a fully open-source mobile phone. [Comments](https://news.ycombinator.com/item?id=45586339)

* [binmoji: A compact, lossless, 64-bit emoji encoding](https://github.com/jb55/binmoji) - Introduction to a novel method of encoding emojis efficiently. [Comments](https://lobste.rs/s/p6yk6b/binmoji_compact_lossless_64_bit_emoji)

* [Mergiraf - syntax-aware git merge driver](https://mergiraf.org/) - Innovative tool to improve the precision and safety of git merges.

## Astronomy and Natural Sciences

* [Warp Speed! How Some Galaxies Can Move Away From Us Faster Than Light](https://soylentnews.org/article.pl?sid=25/10/13/1457221&from=rss) - Explaining complex cosmology behind the phenomena of galaxies traveling faster than light. [Comments](https://soylentnews.org/article.pl?sid=25/10/13/0325250&from=rss)

* [Astronomers 'image' a mysterious dark object in the distant Universe](https://www.mpg.de/25518363/1007-asph-astronomers-image-a-mysterious-dark-object-in-the-distant-universe-155031-x) - Discoveries in deep space that challenge prior astrophysical models. [Comments](https://news.ycombinator.com/item?id=45580699)

## Historical and Cultural Tech Preservation

* [Save Our Signs Preservation Project Launches Archive of 10,000 National Park Signs](https://tech.slashdot.org/story/25/10/14/2240240/save-our-signs-preservation-project-launches-archive-of-10000-national-park-signs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A project to digitally archive and preserve iconic national park signs. [Comments](https://news.ycombinator.com/item?id=45583574)

* [Cambridge University to Rescue Data Trapped on Old Floppy Disks](https://soylentnews.org/article.pl?sid=25/10/13/0313201&from=rss) - An effort to salvage valuable digital history from obsolete technology. [Comments](https://news.ycombinator.com/item?id=45578383)

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

* [2025-10-15, 06:05:51](https://news.ycombinator.com/item?id=45588594) - [Pixnapping Attack](https://www.pixnapping.com/)
* [2025-10-15, 05:51:00](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss) - [Warp Speed! How Some Galaxies Can Move Away From Us Faster Than Light](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss)
* [2025-10-15, 05:16:10](https://lobste.rs/s/yzsv13/i_am_programmer_not_rubber_stamp_approves) - [I am a programmer, not a rubber-stamp that approves Copilot generated code](https://prahladyeri.github.io/blog/2025/10/i-am-a-programmer.html)
* [2025-10-15, 05:09:44](https://news.ycombinator.com/item?id=45588283) - [I am a programmer, not a rubber-stamp that approves Copilot generated code](https://prahladyeri.github.io/blog/2025/10/i-am-a-programmer.html)
* [2025-10-15, 04:52:22](https://lobste.rs/s/g0oxmh/fsf_announces_librephone_project) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-15, 03:30:00](https://tech.slashdot.org/story/25/10/14/2240240/save-our-signs-preservation-project-launches-archive-of-10000-national-park-signs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Save Our Signs&apos; Preservation Project Launches Archive of 10,000 National Park Signs](https://tech.slashdot.org/story/25/10/14/2240240/save-our-signs-preservation-project-launches-archive-of-10000-national-park-signs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 02:20:00](https://lobste.rs/s/dnf353/from_linearity_borrowing) - [From Linearity to Borrowing](https://dl.acm.org/doi/abs/10.1145/3764117)
* [2025-10-15, 02:13:58](https://lobste.rs/s/zmysvd/old_is_gold_optimizing_single_threaded) - [Old is Gold: Optimizing Single-threaded Applications with Exgen-Malloc](https://arxiv.org/pdf/2510.10219)
* [2025-10-15, 02:04:26](https://news.ycombinator.com/item?id=45587289) - [Can we know whether a profiler is accurate?](https://stefan-marr.de/2025/10/can-we-know-whether-a-profiler-is-accurate/)
* [2025-10-15, 02:02:32](https://news.ycombinator.com/item?id=45587280) - [Disk Prices](https://diskprices.com/?locale=us)
* [2025-10-15, 02:02:00](https://slashdot.org/story/25/10/14/2248208/doj-seizes-15-billion-in-bitcoin-from-massive-pig-butchering-scam-based-in-cambodia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Seizes $15 Billion In Bitcoin From Massive &apos;Pig Butchering&apos; Scam Based In Cambodia](https://slashdot.org/story/25/10/14/2248208/doj-seizes-15-billion-in-bitcoin-from-massive-pig-butchering-scam-based-in-cambodia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 02:01:34](https://lobste.rs/s/bhakna/can_we_know_whether_profiler_is_accurate) - [Can We Know Whether a Profiler is Accurate?](https://stefan-marr.de/2025/10/can-we-know-whether-a-profiler-is-accurate/)
* [2025-10-15, 01:25:00](https://it.slashdot.org/story/25/10/14/2123205/secure-boot-bypass-risk-threatens-nearly-200000-linux-framework-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Boot Bypass Risk Threatens Nearly 200,000 Linux Framework Laptops](https://it.slashdot.org/story/25/10/14/2123205/secure-boot-bypass-risk-threatens-nearly-200000-linux-framework-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 01:02:00](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss) - [Scientists Studied Ayahuasca Users—What They Found About Death](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss)
* [2025-10-15, 00:49:25](https://news.ycombinator.com/item?id=45586776) - [Nvidia DGX Spark: great hardware, early days for the ecosystem](https://simonwillison.net/2025/Oct/14/nvidia-dgx-spark/)
* [2025-10-15, 00:45:00](https://linux.slashdot.org/story/25/10/14/2115252/nordvpn-embraces-open-source-by-releasing-its-linux-gui-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NordVPN Embraces Open Source By Releasing Its Linux GUI On GitHub](https://linux.slashdot.org/story/25/10/14/2115252/nordvpn-embraces-open-source-by-releasing-its-linux-gui-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 00:07:29](https://lobste.rs/s/p6yk6b/binmoji_compact_lossless_64_bit_emoji) - [binmoji: a compact, lossless, 64-bit emoji encoding](https://github.com/jb55/binmoji)
* [2025-10-15, 00:02:00](https://news.slashdot.org/story/25/10/14/2112250/google-announces-15-billion-investment-in-ai-hub-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces $15 Billion Investment In AI Hub In India](https://news.slashdot.org/story/25/10/14/2112250/google-announces-15-billion-investment-in-ai-hub-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 23:47:08](https://news.ycombinator.com/item?id=45586339) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-14, 23:20:00](https://yro.slashdot.org/story/25/10/14/2054250/are-ai-agents-compromised-by-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are AI Agents Compromised By Design?](https://yro.slashdot.org/story/25/10/14/2054250/are-ai-agents-compromised-by-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 22:56:17](https://lobste.rs/s/opf77k/unpacking_cloudflare_workers_cpu) - [Unpacking Cloudflare Workers CPU Performance Benchmarks](https://blog.cloudflare.com/unpacking-cloudflare-workers-cpu-performance-benchmarks/)
* [2025-10-14, 22:40:00](https://slashdot.org/story/25/10/14/2048246/walmart-chatgpt-team-up-for-shopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart, ChatGPT Team Up For Shopping](https://slashdot.org/story/25/10/14/2048246/walmart-chatgpt-team-up-for-shopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 22:36:40](https://news.ycombinator.com/item?id=45585869) - [GrapheneOS is ready to break free from Pixels](https://www.androidauthority.com/graphene-os-major-android-oem-partnership-3606853/)
* [2025-10-14, 22:30:34](https://lobste.rs/s/urs16o/ruby_community_has_dhh_problem) - [The Ruby community has a DHH problem](https://tekin.co.uk/2025/09/the-ruby-community-has-a-dhh-problem)
* [2025-10-14, 22:00:00](https://tech.slashdot.org/story/25/10/14/2043238/windows-10-support-ends-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 10 Support &apos;Ends&apos; Today](https://tech.slashdot.org/story/25/10/14/2043238/windows-10-support-ends-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 21:21:00](https://slashdot.org/story/25/10/14/1925230/salesforce-says-ai-customer-service-saves-100-million-annually?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Says AI Customer Service Saves $100 Million Annually](https://slashdot.org/story/25/10/14/1925230/salesforce-says-ai-customer-service-saves-100-million-annually?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 20:41:00](https://entertainment.slashdot.org/story/25/10/14/1323222/directv-will-soon-bring-ai-ads-to-your-screensaver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DirecTV Will Soon Bring AI Ads To Your Screensaver](https://entertainment.slashdot.org/story/25/10/14/1323222/directv-will-soon-bring-ai-ads-to-your-screensaver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 20:36:01](https://news.ycombinator.com/item?id=45584498) - [Surveillance data challenges what we thought we knew about location tracking](https://www.lighthousereports.com/investigation/surveillance-secrets/)
* [2025-10-14, 20:32:32](https://news.ycombinator.com/item?id=45584464) - [Why Is SQLite Coded In C](https://www.sqlite.org/whyc.html)
* [2025-10-14, 20:20:00](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss) - [A Unique Case of a Woman With Male Chromosomes in Her Blood](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss)
* [2025-10-14, 20:17:44](https://news.ycombinator.com/item?id=45584281) - [Unpacking Cloudflare Workers CPU Performance Benchmarks](https://blog.cloudflare.com/unpacking-cloudflare-workers-cpu-performance-benchmarks/)
* [2025-10-14, 20:11:19](https://lobste.rs/s/fpri94/dhh_problem_2014) - [The DHH Problem (2014)](https://tomstu.art/the-dhh-problem)
* [2025-10-14, 20:01:00](https://yro.slashdot.org/story/25/10/14/1542245/lawyer-caught-using-ai-while-explaining-to-court-why-he-used-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawyer Caught Using AI While Explaining to Court Why He Used AI](https://yro.slashdot.org/story/25/10/14/1542245/lawyer-caught-using-ai-while-explaining-to-court-why-he-used-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 19:27:41](https://news.ycombinator.com/item?id=45583787) - [How to turn liquid glass into a solid interface](https://tidbits.com/2025/10/09/how-to-turn-liquid-glass-into-a-solid-interface/)
* [2025-10-14, 19:22:45](https://lobste.rs/s/aueaz4/empty_intervals_are_valid_intervals) - [Empty Intervals are Valid Intervals](https://nigeltao.github.io/blog/2025/empty-intervals.html)
* [2025-10-14, 19:22:00](https://entertainment.slashdot.org/story/25/10/14/1536226/indonesias-film-industry-embraces-ai-to-make-hollywood-style-movies-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia&apos;s Film Industry Embraces AI To Make Hollywood-style Movies For Cheap](https://entertainment.slashdot.org/story/25/10/14/1536226/indonesias-film-industry-embraces-ai-to-make-hollywood-style-movies-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 19:06:27](https://news.ycombinator.com/item?id=45583574) - [Preparing for AI&apos;s economic impact: exploring policy responses](https://www.anthropic.com/research/economic-policy-responses)
* [2025-10-14, 18:56:52](https://lobste.rs/s/sxdel7/rumdl_markdown_linter_written_rust) - [rumdl: A Markdown Linter written in Rust](https://github.com/rvben/rumdl)
* [2025-10-14, 18:41:00](https://news.slashdot.org/story/25/10/14/1525220/the-world-is-producing-more-food-crops-than-ever-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World is Producing More Food Crops Than Ever Before](https://news.slashdot.org/story/25/10/14/1525220/the-world-is-producing-more-food-crops-than-ever-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 18:40:23](https://news.ycombinator.com/item?id=45583336) - [What Americans die from vs. what the news reports on](https://ourworldindata.org/does-the-news-reflect-what-we-die-from)
* [2025-10-14, 18:26:55](https://lobste.rs/s/roygg3/why_your_boss_isn_t_worried_about_ai_can_t) - [Why your boss isn&apos;t worried about AI - \&quot;can&apos;t you just turn it off?\&quot;](https://boydkane.com/essays/boss)
* [2025-10-14, 18:26:00](https://news.ycombinator.com/item?id=45583180) - [Beliefs that are true for regular software but false when applied to AI](https://boydkane.com/essays/boss)
* [2025-10-14, 18:16:35](https://lobste.rs/s/jmpata/benchmarking_postgres_17_vs_18) - [Benchmarking Postgres 17 vs 18](https://planetscale.com/blog/benchmarking-postgres-17-vs-18)
* [2025-10-14, 18:01:00](https://slashdot.org/story/25/10/14/155258/generative-ai-systems-miss-vast-bodies-of-human-knowledge-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Generative AI Systems Miss Vast Bodies of Human Knowledge, Study Finds](https://slashdot.org/story/25/10/14/155258/generative-ai-systems-miss-vast-bodies-of-human-knowledge-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 17:43:33](https://news.ycombinator.com/item?id=45582758) - [SmolBSD – build your own minimal BSD system](https://smolbsd.org)
* [2025-10-14, 17:33:05](https://lobste.rs/s/tsktg2/1_5x_2_2x_gb_s_decoding_throughput_for_delta) - [1.5x to 2.2x GB/s decoding throughput for delta, delta-of-delta and xor-with-previous codes](https://github.com/ashtonsix/perf-portfolio/tree/main/delta)
* [2025-10-14, 17:20:00](https://slashdot.org/story/25/10/14/176237/california-cracks-down-on-predatory-early-cancellation-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Cracks Down on &apos;Predatory&apos; Early Cancellation Fees](https://slashdot.org/story/25/10/14/176237/california-cracks-down-on-predatory-early-cancellation-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 17:12:10](https://news.ycombinator.com/item?id=45582462) - [How bad can a $2.97 ADC be?](https://excamera.substack.com/p/how-bad-can-a-297-adc-be)
* [2025-10-14, 16:36:43](https://lobste.rs/s/tz55w7/hot_reloading_swiftui_apps) - [Hot Reloading SwiftUI Apps](https://danielchasehooper.com/posts/hot-reloading-swiftui/)
* [2025-10-14, 16:35:53](https://lobste.rs/s/q54lep/don_t_look_up_there_are_sensitive_internal) - [Don&apos;t Look Up: There Are Sensitive Internal Links in the Clear on GEO Satellites](https://satcom.sysnet.ucsd.edu/docs/dontlookup_ccs25_fullpaper.pdf)
* [2025-10-14, 16:10:18](https://lobste.rs/s/xqk3yj/hold_off_on_litestream_0_5_0) - [Hold Off on Litestream 0.5.0](https://mtlynch.io/notes/hold-off-on-litestream-0.5.0/)
* [2025-10-14, 16:07:37](https://news.ycombinator.com/item?id=45581735) - [How AI hears accents: An audible visualization of accent clusters](https://accent-explorer.boldvoice.com/)
* [2025-10-14, 15:34:51](https://news.ycombinator.com/item?id=45581288) - [A modern approach to preventing CSRF in Go](https://www.alexedwards.net/blog/preventing-csrf-in-go)
* [2025-10-14, 15:34:00](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss) - [OpenAI and AMD Announce Multibillion-Dollar Partnership](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss)
* [2025-10-14, 15:33:00](https://lobste.rs/s/fzw9g7/modern_approach_preventing_csrf_go) - [A modern approach to preventing CSRF in Go](https://www.alexedwards.net/blog/preventing-csrf-in-go)
* [2025-10-14, 15:11:18](https://lobste.rs/s/dkazbx/nanochat_best_chatgpt_100_can_buy) - [nanochat: The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat)
* [2025-10-14, 15:08:38](https://news.ycombinator.com/item?id=45580981) - [DOJ seizes $15B in Bitcoin from &apos;pig butchering&apos; scam based in Cambodia](https://www.cnbc.com/2025/10/14/bitcoin-doj-chen-zhi-pig-butchering-scam.html)
* [2025-10-14, 14:49:56](https://news.ycombinator.com/item?id=45580771) - [Show HN: Metorial (YC F25) – Vercel for MCP](https://github.com/metorial/metorial)
* [2025-10-14, 14:45:02](https://news.ycombinator.com/item?id=45580699) - [Astronomers &apos;image&apos; a mysterious dark object in the distant Universe](https://www.mpg.de/25518363/1007-asph-astronomers-image-a-mysterious-dark-object-in-the-distant-universe-155031-x)
* [2025-10-14, 14:33:35](https://lobste.rs/s/bhrvi2/drawing_text_isn_t_simple_benchmarking) - [Drawing Text Isn&apos;t Simple: Benchmarking Console vs. Graphical Rendering](https://cv.co.hu/csabi/drawing-text-performance-graphical-vs-console.html)
* [2025-10-14, 13:42:17](https://lobste.rs/s/pkowfh/meta_news_on_lix_october_2025) - [Meta news on Lix in October 2025](https://lix.systems/blog/2025-10-13-meta-lix-news/)
* [2025-10-14, 13:24:52](https://lobste.rs/s/r8a4ax/gauguin_descartes_bayes_diurnal_golem_s) - [Gauguin, Descartes, Bayes: A Diurnal Golem’s Brain](https://dl.acm.org/doi/pdf/10.1145/3759429.3762631)
* [2025-10-14, 13:16:39](https://lobste.rs/s/8bofpm/happy_birthday_kde) - [Happy Birthday to KDE](https://kde.org/fundraisers/yearend2025/)
* [2025-10-14, 10:51:00](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss) - [Cambridge University to Rescue Data Trapped on Old Floppy Disks](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss)
* [2025-10-14, 10:38:48](https://news.ycombinator.com/item?id=45578383) - [ADS-B Exposed](https://adsb.exposed/)
* [2025-10-14, 10:29:11](https://lobste.rs/s/edejc6/mergiraf_syntax_aware_git_merge_driver) - [Mergiraf - syntax-aware git merge driver](https://mergiraf.org/)
* [2025-10-14, 06:17:42](https://lobste.rs/s/fqmjsc/django_forever) - [Django forever](https://jmduke.com/posts/post/django/)
* [2025-10-14, 06:11:00](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss) - [Salesforce Hacked With Threat to Release 1 Billion Customer Records](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss)
* [2025-10-14, 01:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss) - [When the US Gov&apos;t Built High Quality Housing for Workers...](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss)
* [2025-10-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss) - [What Past Education Tech Failures Can Teach Us About the Future of AI in Schools](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss)
* [2025-10-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss) - [Nuclear Bombs on Drones: The Next Arms Race That Has Experts &apos;Very Concerned&apos;](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss)
* [2025-10-13, 11:12:00](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss) - [Here&apos;s How to See Two Newly Discovered Comets This Month](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss)
* [2025-10-13, 06:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss) - [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss)
* [2025-10-13, 01:39:00](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss) - [Using a Litter Box to Determine a Cat&apos;s Health](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss)
* [2025-10-12, 20:50:00](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss) - [The FCC Will Allow ABC, CBS, FOX, &amp; NBC TV Stations Decide When Switch to ATSC 3.0](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss)
* [2025-10-12, 16:05:00](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss) - [“Like Putting on Glasses for the First Time”—How AI Improves Earthquake Detection](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss)
* [2025-10-12, 11:20:00](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss) - [Starlink Burns Up One to Two Satellites a Day](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss)
* [2025-10-12, 06:37:00](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss) - [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
