# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [Reverse Engineering iWork](https://andrews.substack.com/p/reverse-engineering-iwork) - An intriguing dive into Apple's proprietary file formats to uncover their inner workings and functionality. [Comments](https://lobste.rs/s/1kweb2/reverse_engineering_iwork)

* [FSF Announces the LibrePhone Project](https://news.slashdot.org/story/25/10/15/0312206/fsf-announces-the-librephone-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Free Software Foundation reveals their open-source phone initiative promoting freedom and user privacy. [Comments](https://lobste.rs/s/g0oxmh/fsf_announces_librephone_project)

* [binmoji: a compact, lossless, 64-bit emoji encoding](https://github.com/jb55/binmoji) - Introducing an innovative approach to emoji encoding ensuring compactness and data integrity for efficient communication. [Comments](https://lobste.rs/s/p6yk6b/binmoji_compact_lossless_64_bit_emoji)

## AI and Computational Advancements

* [Show HN: Scriber Pro – Transcribe 4.5hr video in 3.5min, 100% offline on Mac](https://scriberpro.cc/hn/) - A cutting-edge transcription tool setting a new bar for speed and privacy with offline functionality. [Comments](https://news.ycombinator.com/item?id=45591222)

* [How AI hears accents: An audible visualization of accent clusters](https://accent-explorer.boldvoice.com/) - Explore how AI deciphers and clusters accents audibly, offering insights into linguistic diversity. [Comments](https://news.ycombinator.com/item?id=45581735)

* [Artisanal shims for the bitter lesson age](https://blog.nilenso.com/blog/2025/10/14/bitter-lesson-applied-ai/) - A discussion on leveraging 'bitter lessons' in AI to craft effective and human-centered solutions. [Comments](https://lobste.rs/s/wo7s6i/artisanal_shims_for_bitter_lesson_age)

## Cybersecurity and Vulnerabilities

* [CVE-2025-55315: Asp.net Security Feature Bypass Vulnerability [9.9 Critical]](https://nvd.nist.gov/vuln/detail/CVE-2025-55315) - A critical security issue that could expose ASP.NET applications to potential breaches. [Comments](https://news.ycombinator.com/item?id=45590302)

* [Pixnapping Attack](https://www.pixnapping.com/) - Insights into a novel attack exploiting visual-based vulnerabilities in digital systems. [Comments](https://news.ycombinator.com/item?id=45588594)

* [Secure Boot Bypass Risk Threatens Nearly 200,000 Linux Framework Laptops](https://it.slashdot.org/story/25/10/14/2123205/secure-boot-bypass-risk-threatens-nearly-200000-linux-framework-laptops?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critical threat impacting Linux laptops due to a secure boot bypass vulnerability. [Comments](https://news.ycombinator.com/item?id=45587289)

## Privacy and Surveillance

* [Irish privacy regulator picks ex-Meta lobbyist as third commissioner](https://www.euractiv.com/news/irish-privacy-regulator-picks-ex-meta-lobbyist-as-third-commissioner/) - A controversial appointment raising questions about conflicts of interest in overseeing data privacy. [Comments](https://news.ycombinator.com/item?id=45591085)

* [Just Talk to It – The No-Bs Way of Agentic Engineering](https://steipete.me/posts/just-talk-to-it) - Exploring a straightforward approach to agentic systems engineering and human-agent interactions. [Comments](https://news.ycombinator.com/item?id=45588689)

## Economic and Social Insights

* [Ireland Is Making Basic Income for Artists Program Permanent](https://www.artnews.com/art-news/news/ireland-basic-income-artists-program-permanent-1234756981/) - A groundbreaking effort to financially support artists and cultural workers. [Comments](https://news.ycombinator.com/item?id=45590900)

* [Britain has wasted £1,112,293,718 switching off wind turbines in 2025](https://wastedwind.energy/) - A critical look at the financial and environmental costs of wind energy mismanagement in the UK. [Comments](https://news.ycombinator.com/item?id=45590236)

## Scientific Discoveries and Space

* [Common Yeast Can Survive Martian Conditions](https://science.slashdot.org/story/25/10/15/032207/common-yeast-can-survive-martian-conditions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A surprising find bolstering the possibility of life-supporting organisms on Mars. [Comments](https://news.ycombinator.com/item?id=45590236)

* [Astronomers 'image' a mysterious dark object in the distant Universe](https://www.mpg.de/25518363/1007-asph-astronomers-image-a-mysterious-dark-object-in-the-distant-universe-155031-x) - A remarkable astronomical achievement shedding light on previously unseen cosmic phenomena. [Comments](https://news.ycombinator.com/item?id=45580699)

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

* [2025-10-15, 12:50:12](https://lobste.rs/s/1kweb2/reverse_engineering_iwork) - [Reverse Engineering iWork](https://andrews.substack.com/p/reverse-engineering-iwork)
* [2025-10-15, 12:16:16](https://news.ycombinator.com/item?id=45591222) - [Show HN: Scriber Pro – Transcribe 4.5hr video in 3.5min, 100% offline on Mac](https://scriberpro.cc/hn/)
* [2025-10-15, 12:07:35](https://lobste.rs/s/w3yzd2/garbage_collection_for_rust_finalizer) - [Garbage Collection for Rust: The Finalizer Frontier](https://soft-dev.org/pubs/html/hughes_tratt__garbage_collection_for_rust_the_finalizer_frontier/)
* [2025-10-15, 12:01:05](https://news.ycombinator.com/item?id=45591085) - [Irish privacy regulator picks ex-Meta lobbyist as third commissioner](https://www.euractiv.com/news/irish-privacy-regulator-picks-ex-meta-lobbyist-as-third-commissioner/)
* [2025-10-15, 12:00:35](https://news.ycombinator.com/item?id=45591082) - [Helpcare AI (YC F24) Is Hiring](https://news.ycombinator.com/item?id=45591082)
* [2025-10-15, 12:00:06](https://lobste.rs/s/twvpz9/osm_perfect_intersection_editor) - [OSM Perfect Intersection Editor](https://www.openstreetmap.org/user/Mikhail%20Kuzin/diary/407577)
* [2025-10-15, 11:45:47](https://news.ycombinator.com/item?id=45590949) - [Show HN: Halloy – the modern IRC client I hope will outlive me](https://github.com/squidowl/halloy)
* [2025-10-15, 11:40:09](https://news.ycombinator.com/item?id=45590900) - [Ireland Is Making Basic Income for Artists Program Permanent](https://www.artnews.com/art-news/news/ireland-basic-income-artists-program-permanent-1234756981/)
* [2025-10-15, 11:26:41](https://news.ycombinator.com/item?id=45590800) - [Esports scholarship at Deutsche Bahn (German railways)](https://db.jobs/de-de/esports-11092734)
* [2025-10-15, 11:20:35](https://news.ycombinator.com/item?id=45590756) - [Why We&apos;re Leaving Serverless](https://www.unkey.com/blog/serverless-exit)
* [2025-10-15, 11:11:41](https://news.ycombinator.com/item?id=45590681) - [I analyzed 200 e-commerce sites and found 73% of their traffic is fake](https://joindatacops.com/resources/how-73-of-your-e-commerce-visitors-could-be-fake)
* [2025-10-15, 10:53:13](https://lobste.rs/s/zqiy8l/why_export_templates_would_be_useful_c) - [Why export templates would be useful in C++ (2010)](http://warp.povusers.org/programming/export_templates.html)
* [2025-10-15, 10:35:00](https://soylentnews.org/article.pl?sid=25/10/13/1540238&amp;from=rss) - [Nobel Economics Prize Goes to 3 Researchers for Explaining Innovation-Driven Economic Growth](https://soylentnews.org/article.pl?sid=25/10/13/1540238&amp;from=rss)
* [2025-10-15, 10:19:21](https://news.ycombinator.com/item?id=45590302) - [CVE-2025-55315: Asp.net Security Feature Bypass Vulnerability [9.9 Critical]](https://nvd.nist.gov/vuln/detail/CVE-2025-55315)
* [2025-10-15, 10:10:20](https://news.ycombinator.com/item?id=45590236) - [Britain has wasted £1,112,293,718 switching off wind turbines in 2025](https://wastedwind.energy/)
* [2025-10-15, 10:00:00](https://news.slashdot.org/story/25/10/15/0312206/fsf-announces-the-librephone-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Announces the LibrePhone Project](https://news.slashdot.org/story/25/10/15/0312206/fsf-announces-the-librephone-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 09:34:29](https://lobste.rs/s/gbp005/when_you_opened_screen_shot_video_paint) - [When you opened a screen shot of a video in Paint, the video was playing in it](https://devblogs.microsoft.com/oldnewthing/20251014-00/?p=111681)
* [2025-10-15, 08:36:25](https://lobste.rs/s/wo7s6i/artisanal_shims_for_bitter_lesson_age) - [Artisanal shims for the bitter lesson age](https://blog.nilenso.com/blog/2025/10/14/bitter-lesson-applied-ai/)
* [2025-10-15, 07:01:53](https://news.ycombinator.com/item?id=45588959) - [Show HN: Firm, a text-based work management system](https://github.com/42futures/firm)
* [2025-10-15, 07:00:00](https://science.slashdot.org/story/25/10/15/032207/common-yeast-can-survive-martian-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Common Yeast Can Survive Martian Conditions](https://science.slashdot.org/story/25/10/15/032207/common-yeast-can-survive-martian-conditions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 06:33:18](https://lobste.rs/s/0midxc/api_design_principle_don_t_tempt_people) - [API design principle: Don&apos;t tempt people to divide by zero](https://devblogs.microsoft.com/oldnewthing/20251013-00/?p=111677)
* [2025-10-15, 06:21:04](https://news.ycombinator.com/item?id=45588689) - [Just Talk to It – The No-Bs Way of Agentic Engineering](https://steipete.me/posts/just-talk-to-it)
* [2025-10-15, 06:05:51](https://news.ycombinator.com/item?id=45588594) - [Pixnapping Attack](https://www.pixnapping.com/)
* [2025-10-15, 05:51:00](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss) - [Warp Speed! How Some Galaxies Can Move Away From Us Faster Than Light](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss)
* [2025-10-15, 05:16:10](https://lobste.rs/s/yzsv13/i_am_programmer_not_rubber_stamp_approves) - [I am a programmer, not a rubber-stamp that approves Copilot generated code](https://prahladyeri.github.io/blog/2025/10/i-am-a-programmer.html)
* [2025-10-15, 04:52:22](https://lobste.rs/s/g0oxmh/fsf_announces_librephone_project) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-15, 03:30:00](https://tech.slashdot.org/story/25/10/14/2240240/save-our-signs-preservation-project-launches-archive-of-10000-national-park-signs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Save Our Signs&apos; Preservation Project Launches Archive of 10,000 National Park Signs](https://tech.slashdot.org/story/25/10/14/2240240/save-our-signs-preservation-project-launches-archive-of-10000-national-park-signs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 02:20:00](https://lobste.rs/s/dnf353/from_linearity_borrowing) - [From Linearity to Borrowing](https://dl.acm.org/doi/abs/10.1145/3764117)
* [2025-10-15, 02:04:26](https://news.ycombinator.com/item?id=45587289) - [Can we know whether a profiler is accurate?](https://stefan-marr.de/2025/10/can-we-know-whether-a-profiler-is-accurate/)
* [2025-10-15, 02:02:00](https://slashdot.org/story/25/10/14/2248208/doj-seizes-15-billion-in-bitcoin-from-massive-pig-butchering-scam-based-in-cambodia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Seizes $15 Billion In Bitcoin From Massive &apos;Pig Butchering&apos; Scam Based In Cambodia](https://slashdot.org/story/25/10/14/2248208/doj-seizes-15-billion-in-bitcoin-from-massive-pig-butchering-scam-based-in-cambodia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 01:25:00](https://it.slashdot.org/story/25/10/14/2123205/secure-boot-bypass-risk-threatens-nearly-200000-linux-framework-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secure Boot Bypass Risk Threatens Nearly 200,000 Linux Framework Laptops](https://it.slashdot.org/story/25/10/14/2123205/secure-boot-bypass-risk-threatens-nearly-200000-linux-framework-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 01:02:00](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss) - [Scientists Studied Ayahuasca Users—What They Found About Death](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss)
* [2025-10-15, 00:45:00](https://linux.slashdot.org/story/25/10/14/2115252/nordvpn-embraces-open-source-by-releasing-its-linux-gui-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NordVPN Embraces Open Source By Releasing Its Linux GUI On GitHub](https://linux.slashdot.org/story/25/10/14/2115252/nordvpn-embraces-open-source-by-releasing-its-linux-gui-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 00:07:29](https://lobste.rs/s/p6yk6b/binmoji_compact_lossless_64_bit_emoji) - [binmoji: a compact, lossless, 64-bit emoji encoding](https://github.com/jb55/binmoji)
* [2025-10-15, 00:02:00](https://news.slashdot.org/story/25/10/14/2112250/google-announces-15-billion-investment-in-ai-hub-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces $15 Billion Investment In AI Hub In India](https://news.slashdot.org/story/25/10/14/2112250/google-announces-15-billion-investment-in-ai-hub-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 23:47:08](https://news.ycombinator.com/item?id=45586339) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-14, 23:20:00](https://yro.slashdot.org/story/25/10/14/2054250/are-ai-agents-compromised-by-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are AI Agents Compromised By Design?](https://yro.slashdot.org/story/25/10/14/2054250/are-ai-agents-compromised-by-design?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 22:56:17](https://lobste.rs/s/opf77k/unpacking_cloudflare_workers_cpu) - [Unpacking Cloudflare Workers CPU Performance Benchmarks](https://blog.cloudflare.com/unpacking-cloudflare-workers-cpu-performance-benchmarks/)
* [2025-10-14, 22:40:00](https://slashdot.org/story/25/10/14/2048246/walmart-chatgpt-team-up-for-shopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart, ChatGPT Team Up For Shopping](https://slashdot.org/story/25/10/14/2048246/walmart-chatgpt-team-up-for-shopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 22:00:00](https://tech.slashdot.org/story/25/10/14/2043238/windows-10-support-ends-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 10 Support &apos;Ends&apos; Today](https://tech.slashdot.org/story/25/10/14/2043238/windows-10-support-ends-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 21:21:00](https://slashdot.org/story/25/10/14/1925230/salesforce-says-ai-customer-service-saves-100-million-annually?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Says AI Customer Service Saves $100 Million Annually](https://slashdot.org/story/25/10/14/1925230/salesforce-says-ai-customer-service-saves-100-million-annually?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 20:41:00](https://entertainment.slashdot.org/story/25/10/14/1323222/directv-will-soon-bring-ai-ads-to-your-screensaver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DirecTV Will Soon Bring AI Ads To Your Screensaver](https://entertainment.slashdot.org/story/25/10/14/1323222/directv-will-soon-bring-ai-ads-to-your-screensaver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 20:20:00](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss) - [A Unique Case of a Woman With Male Chromosomes in Her Blood](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss)
* [2025-10-14, 20:17:44](https://news.ycombinator.com/item?id=45584281) - [Unpacking Cloudflare Workers CPU Performance Benchmarks](https://blog.cloudflare.com/unpacking-cloudflare-workers-cpu-performance-benchmarks/)
* [2025-10-14, 20:11:19](https://lobste.rs/s/fpri94/dhh_problem_2014) - [The DHH Problem (2014)](https://tomstu.art/the-dhh-problem)
* [2025-10-14, 20:01:00](https://yro.slashdot.org/story/25/10/14/1542245/lawyer-caught-using-ai-while-explaining-to-court-why-he-used-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawyer Caught Using AI While Explaining to Court Why He Used AI](https://yro.slashdot.org/story/25/10/14/1542245/lawyer-caught-using-ai-while-explaining-to-court-why-he-used-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 19:22:45](https://lobste.rs/s/aueaz4/empty_intervals_are_valid_intervals) - [Empty Intervals are Valid Intervals](https://nigeltao.github.io/blog/2025/empty-intervals.html)
* [2025-10-14, 19:22:00](https://entertainment.slashdot.org/story/25/10/14/1536226/indonesias-film-industry-embraces-ai-to-make-hollywood-style-movies-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia&apos;s Film Industry Embraces AI To Make Hollywood-style Movies For Cheap](https://entertainment.slashdot.org/story/25/10/14/1536226/indonesias-film-industry-embraces-ai-to-make-hollywood-style-movies-for-cheap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 18:56:52](https://lobste.rs/s/sxdel7/rumdl_markdown_linter_written_rust) - [rumdl: A Markdown Linter written in Rust](https://github.com/rvben/rumdl)
* [2025-10-14, 18:41:00](https://news.slashdot.org/story/25/10/14/1525220/the-world-is-producing-more-food-crops-than-ever-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World is Producing More Food Crops Than Ever Before](https://news.slashdot.org/story/25/10/14/1525220/the-world-is-producing-more-food-crops-than-ever-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-14, 18:30:57](https://news.ycombinator.com/item?id=45583243) - [Intel Announces Inference-Optimized Xe3P Graphics Card with 160GB VRAM](https://www.phoronix.com/review/intel-crescent-island)
* [2025-10-14, 18:26:55](https://lobste.rs/s/roygg3/why_your_boss_isn_t_worried_about_ai_can_t) - [Why your boss isn&apos;t worried about AI - \&quot;can&apos;t you just turn it off?\&quot;](https://boydkane.com/essays/boss)
* [2025-10-14, 18:26:00](https://news.ycombinator.com/item?id=45583180) - [Beliefs that are true for regular software but false when applied to AI](https://boydkane.com/essays/boss)
* [2025-10-14, 17:43:33](https://news.ycombinator.com/item?id=45582758) - [SmolBSD – build your own minimal BSD system](https://smolbsd.org)
* [2025-10-14, 17:33:05](https://lobste.rs/s/tsktg2/1_5x_2_2x_gb_s_decoding_throughput_for_delta) - [1.5x to 2.2x GB/s decoding throughput for delta, delta-of-delta and xor-with-previous codes](https://github.com/ashtonsix/perf-portfolio/tree/main/delta)
* [2025-10-14, 17:12:10](https://news.ycombinator.com/item?id=45582462) - [How bad can a $2.97 ADC be?](https://excamera.substack.com/p/how-bad-can-a-297-adc-be)
* [2025-10-14, 16:10:18](https://lobste.rs/s/xqk3yj/hold_off_on_litestream_0_5_0) - [Hold Off on Litestream 0.5.0](https://mtlynch.io/notes/hold-off-on-litestream-0.5.0/)
* [2025-10-14, 16:07:37](https://news.ycombinator.com/item?id=45581735) - [How AI hears accents: An audible visualization of accent clusters](https://accent-explorer.boldvoice.com/)
* [2025-10-14, 15:34:00](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss) - [OpenAI and AMD Announce Multibillion-Dollar Partnership](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss)
* [2025-10-14, 15:33:00](https://lobste.rs/s/fzw9g7/modern_approach_preventing_csrf_go) - [A modern approach to preventing CSRF in Go](https://www.alexedwards.net/blog/preventing-csrf-in-go)
* [2025-10-14, 15:11:18](https://lobste.rs/s/dkazbx/nanochat_best_chatgpt_100_can_buy) - [nanochat: The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat)
* [2025-10-14, 15:08:38](https://news.ycombinator.com/item?id=45580981) - [DOJ seizes $15B in Bitcoin from &apos;pig butchering&apos; scam based in Cambodia](https://www.cnbc.com/2025/10/14/bitcoin-doj-chen-zhi-pig-butchering-scam.html)
* [2025-10-14, 14:45:02](https://news.ycombinator.com/item?id=45580699) - [Astronomers &apos;image&apos; a mysterious dark object in the distant Universe](https://www.mpg.de/25518363/1007-asph-astronomers-image-a-mysterious-dark-object-in-the-distant-universe-155031-x)
* [2025-10-14, 14:33:35](https://lobste.rs/s/bhrvi2/drawing_text_isn_t_simple_benchmarking) - [Drawing Text Isn&apos;t Simple: Benchmarking Console vs. Graphical Rendering](https://cv.co.hu/csabi/drawing-text-performance-graphical-vs-console.html)
* [2025-10-14, 13:42:17](https://lobste.rs/s/pkowfh/meta_news_on_lix_october_2025) - [Meta news on Lix in October 2025](https://lix.systems/blog/2025-10-13-meta-lix-news/)
* [2025-10-14, 13:24:52](https://lobste.rs/s/r8a4ax/gauguin_descartes_bayes_diurnal_golem_s) - [Gauguin, Descartes, Bayes: A Diurnal Golem’s Brain](https://dl.acm.org/doi/pdf/10.1145/3759429.3762631)
* [2025-10-14, 13:16:39](https://lobste.rs/s/8bofpm/happy_birthday_kde) - [Happy Birthday to KDE](https://kde.org/fundraisers/yearend2025/)
* [2025-10-14, 10:51:00](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss) - [Cambridge University to Rescue Data Trapped on Old Floppy Disks](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss)
* [2025-10-14, 10:29:11](https://lobste.rs/s/edejc6/mergiraf_syntax_aware_git_merge_driver) - [Mergiraf - syntax-aware git merge driver](https://mergiraf.org/)
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
* [2025-10-12, 06:19:54](https://news.ycombinator.com/item?id=45555749) - [Updating Desktop Rust](https://tritium.legal/blog/update)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
