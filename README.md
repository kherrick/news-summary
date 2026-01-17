# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [As US Officials Showed Off a Self-Driving Robo-Bus - It Got Hit By a Tesla Driver](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A sensational incident involving a Tesla driver colliding with a cutting-edge self-driving bus during a demonstration, raising questions about autonomous driving safety.

* [I hotreload Rust and so can you](https://kampffrosch94.github.io/posts/hotreloading_rust/) - An intriguing post that explores hot-reloading in the Rust programming language, making real-time updates a possibility.

* [Drone Hacking Part 1: Dumping Firmware and Bruteforcing ECC](https://neodyme.io/en/blog/drone_hacking_part_1) - A fascinating dive into the world of drone hacking that uncovers firmware vulnerabilities and explores techniques like bruteforcing ECC.

## Cybersecurity and Privacy

* [Nearly 5 Million Accounts Removed Under Australia's New Social Media Ban](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An alarming story about the massive scale of account removals as Australia's new social media policy comes into force.

* [The 'untouchable hacker god' behind Finland's biggest ever crime](https://www.theguardian.com/technology/2026/jan/17/vastaamo-hack-finland-therapy-notes) - A detailed investigation into the perpetrator of Finland’s largest cybercrime involving leaked therapy records.

* [Show HN: Streaming gigabyte medical images from S3 without downloading them](https://github.com/PABannier/WSIStreamer) - An innovative project enabling the viewing of massive medical images directly from S3 storage, without files being downloaded.

## Global and Environmental Affairs

* [US electricity demand surged in 2025 – solar handled 61% of it](https://electrek.co/2026/01/16/us-electricity-demand-surged-in-2025-solar-handled-61-percent/) - Solar power plays a pivotal role, accounting for 61% of the increased electricity demand in the US in 2025.

* [Biggest Offshore Wind Project In US To Resume Construction](https://hardware.slashdot.org/story/26/01/17/0417254/biggest-offshore-wind-project-in-us-to-resume-construction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The largest offshore wind energy project in the United States is set to resume, boosting renewable energy sector developments.

## Society and Culture

* [The 600-year-old origins of the word 'hello'](https://www.bbc.com/culture/article/20260113-hello-hiya-aloha-what-our-greetings-reveal) - Discover the intriguing history and cultural significance behind the simple greeting 'hello', tracing back 600 years.

* [Map To Poster – Create Art of your favourite city](https://github.com/originalankur/maptoposter) - A creative tool that allows you to turn the map of your favorite city into stunning art.

## Developing Trends in Software

* [The recurring dream of replacing developers](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html) - An analysis of the persistent and controversial utopia of eliminating human developers through technology.

* [Pushing the smallest possible change to production](https://ankursethi.com/blog/smallest-possible-change/) - A focused guide discussing the practice of implementing minimal changes in production for better software development processes.

## Science and Ecosystems

* [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&from=rss) - A compelling look into the essential roles played by flies in maintaining ecological balance.

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

* [2026-01-17, 15:34:00](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Officials Showed Off a Self-Driving Robo-Bus - It Got Hit By a Tesla Driver](https://tech.slashdot.org/story/26/01/17/0228239/as-us-officials-showed-off-a-self-driving-robo-bus---it-got-hit-by-a-tesla-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 15:32:12](https://lobste.rs/s/87hezy/i_hotreload_rust_so_can_you) - [I hotreload Rust and so can you](https://kampffrosch94.github.io/posts/hotreloading_rust/)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 14:34:17](https://lobste.rs/s/vp39cr/ascii_characters_are_not_pixels_deep_dive) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 14:31:33](https://news.ycombinator.com/item?id=46658345) - [The recurring dream of replacing developers](https://www.caimito.net/en/blog/2025/12/07/the-recurring-dream-of-replacing-developers.html)
* [2026-01-17, 13:44:02](https://news.ycombinator.com/item?id=46658014) - [Italy investigates Activision Blizzard for pushing in-game purchases](https://techcrunch.com/2026/01/16/italy-investigates-activision-blizzard-for-pushing-in-game-purchases/)
* [2026-01-17, 13:32:55](https://lobste.rs/s/c4q8d8/fun_things_do_with_your_vm_370_machine) - [Fun things to do with your VM/370 machine](https://rbanffy.github.io/fun-with-old-mainframes.github.io/fun-with-vm370.html)
* [2026-01-17, 13:00:00](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 5 Million Accounts Removed Under Australia&apos;s New Social Media Ban](https://tech.slashdot.org/story/26/01/17/0440228/nearly-5-million-accounts-removed-under-australias-new-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 12:59:35](https://news.ycombinator.com/item?id=46657719) - [The Risks of AI in Schools Outweigh the Benefits, Report Says](https://www.npr.org/2026/01/14/nx-s1-5674741/ai-schools-education)
* [2026-01-17, 12:48:13](https://lobste.rs/s/kbkcbe/website_end_all_websites) - [A Website To End All Websites](https://henry.codes/writing/a-website-to-destroy-all-websites/)
* [2026-01-17, 12:01:29](https://lobste.rs/s/vkau8y/pushing_smallest_possible_change) - [Pushing the smallest possible change to production](https://ankursethi.com/blog/smallest-possible-change/)
* [2026-01-17, 11:51:44](https://news.ycombinator.com/item?id=46657296) - [The 600-year-old origins of the word &apos;hello&apos;](https://www.bbc.com/culture/article/20260113-hello-hiya-aloha-what-our-greetings-reveal)
* [2026-01-17, 11:18:49](https://news.ycombinator.com/item?id=46657141) - [Architecture for Disposable Systems](https://tuananh.net/2026/01/15/architecture-for-disposable-systems/)
* [2026-01-17, 11:15:26](https://news.ycombinator.com/item?id=46657122) - [ASCII characters are not pixels: a deep dive into ASCII rendering](https://alexharri.com/blog/ascii-rendering)
* [2026-01-17, 11:09:36](https://news.ycombinator.com/item?id=46657088) - [AV1 Image File Format Specification Gets an Upgrade with AVIF v1.2.0](https://aomedia.org/blog%20posts/AV1-Image-File-Format-Specification-Gets-an-Upgrade-with-AVIF/)
* [2026-01-17, 10:51:19](https://news.ycombinator.com/item?id=46656998) - [PCs refuse to shut down after Microsoft patch](https://www.theregister.com/2026/01/16/patch_tuesday_secure_launch_bug_no_shutdown/)
* [2026-01-17, 10:29:35](https://news.ycombinator.com/item?id=46656911) - [After 25 years, Wikipedia has proved that news doesn&apos;t need to look like news](https://www.niemanlab.org/2026/01/after-25-years-wikipedia-has-proved-that-news-doesnt-need-to-look-like-news/)
* [2026-01-17, 10:28:06](https://news.ycombinator.com/item?id=46656903) - [US electricity demand surged in 2025 – solar handled 61% of it](https://electrek.co/2026/01/16/us-electricity-demand-surged-in-2025-solar-handled-61-percent/)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 10:13:57](https://news.ycombinator.com/item?id=46656834) - [Map To Poster – Create Art of your favourite city](https://github.com/originalankur/maptoposter)
* [2026-01-17, 10:00:00](https://yro.slashdot.org/story/26/01/17/0428238/supreme-court-may-block-thousands-of-lawsuits-over-monsantos-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court May Block Thousands of Lawsuits Over Monsanto&apos;s Weed Killer](https://yro.slashdot.org/story/26/01/17/0428238/supreme-court-may-block-thousands-of-lawsuits-over-monsantos-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 09:15:45](https://news.ycombinator.com/item?id=46656552) - [ClickHouse acquires Langfuse](https://langfuse.com/blog/joining-clickhouse)
* [2026-01-17, 08:50:48](https://lobste.rs/s/xqsqsm/drone_hacking_part_1_dumping_firmware) - [Drone Hacking Part 1: Dumping Firmware and Bruteforcing ECC](https://neodyme.io/en/blog/drone_hacking_part_1)
* [2026-01-17, 08:46:08](https://news.ycombinator.com/item?id=46656358) - [Show HN: Streaming gigabyte medical images from S3 without downloading them](https://github.com/PABannier/WSIStreamer)
* [2026-01-17, 07:29:18](https://news.ycombinator.com/item?id=46656045) - [The &apos;untouchable hacker god&apos; behind Finland&apos;s biggest ever crime](https://www.theguardian.com/technology/2026/jan/17/vastaamo-hack-finland-therapy-notes)
* [2026-01-17, 07:23:41](https://lobste.rs/s/s55ewk/kip_programming_language_based_on) - [kip: A programming language based on grammatical cases of Turkish](https://github.com/joom/kip)
* [2026-01-17, 07:00:00](https://hardware.slashdot.org/story/26/01/17/0417254/biggest-offshore-wind-project-in-us-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Biggest Offshore Wind Project In US To Resume Construction](https://hardware.slashdot.org/story/26/01/17/0417254/biggest-offshore-wind-project-in-us-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 06:15:02](https://lobste.rs/s/n8qgs8/emoji_design_convergence_review_2018) - [Emoji Design Convergence Review: 2018 - 2026](https://blog.emojipedia.org/emoji-design-convergence-review-2018-2026/)
* [2026-01-17, 05:33:17](https://lobste.rs/s/fgdiw1/how_clickhouse_handles_strings) - [How ClickHouse handles strings](https://rushter.com/blog/clickhouse-strings/)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 03:30:00](https://science.slashdot.org/story/26/01/16/224252/pesticides-may-drastically-shorten-fish-lifespans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pesticides May Drastically Shorten Fish Lifespans, Study Finds](https://science.slashdot.org/story/26/01/16/224252/pesticides-may-drastically-shorten-fish-lifespans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 02:35:28](https://news.ycombinator.com/item?id=46654749) - [Drone Hacking Part 1: Dumping Firmware and Bruteforcing ECC](https://neodyme.io/en/blog/drone_hacking_part_1/)
* [2026-01-17, 02:29:07](https://news.ycombinator.com/item?id=46654726) - [Ask HN: Is it still worth pursuing a software startup?](https://news.ycombinator.com/item?id=46654726)
* [2026-01-17, 02:02:00](https://yro.slashdot.org/story/26/01/16/2155232/judge-orders-annas-archive-to-delete-scraped-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Orders Anna&apos;s Archive To Delete Scraped Data](https://yro.slashdot.org/story/26/01/16/2155232/judge-orders-annas-archive-to-delete-scraped-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 01:25:00](https://tech.slashdot.org/story/26/01/16/2144202/patch-tuesday-update-makes-windows-pcs-refuse-to-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Patch Tuesday Update Makes Windows PCs Refuse To Shut Down](https://tech.slashdot.org/story/26/01/16/2144202/patch-tuesday-update-makes-windows-pcs-refuse-to-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 00:45:00](https://hardware.slashdot.org/story/26/01/16/2137219/trump-wants-tech-companies-to-foot-the-bill-for-new-power-plants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Wants Tech Companies To Foot the Bill For New Power Plants](https://hardware.slashdot.org/story/26/01/16/2137219/trump-wants-tech-companies-to-foot-the-bill-for-new-power-plants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
* [2026-01-17, 00:02:00](https://tech.slashdot.org/story/26/01/16/2128242/supreme-court-hacker-posted-stolen-government-data-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Hacker Posted Stolen Government Data On Instagram](https://tech.slashdot.org/story/26/01/16/2128242/supreme-court-hacker-posted-stolen-government-data-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 23:46:42](https://lobste.rs/s/dd9ip1/myths_we_tell_ourselves_about_software) - [Myths we tell ourselves about software engineering](https://medium.com/feenk/rewilding-software-engineering-ca3ad1e612d8)
* [2026-01-16, 23:46:17](https://news.ycombinator.com/item?id=46653721) - [FLUX.2 [Klein]: Towards Interactive Visual Intelligence](https://bfl.ai/blog/flux2-klein-towards-interactive-visual-intelligence)
* [2026-01-16, 23:20:00](https://news.slashdot.org/story/26/01/16/2120240/cloudflare-acquires-team-behind-open-source-framework-astro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Acquires Team Behind Open Source Framework Astro](https://news.slashdot.org/story/26/01/16/2120240/cloudflare-acquires-team-behind-open-source-framework-astro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 22:40:00](https://news.slashdot.org/story/26/01/16/2112255/canada-reverses-tariff-on-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Reverses Tariff On Chinese EVs](https://news.slashdot.org/story/26/01/16/2112255/canada-reverses-tariff-on-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 22:00:00](https://slashdot.org/story/26/01/16/213211/tsmc-says-ai-demand-is-endless-after-record-q4-earnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TSMC Says AI Demand Is &apos;Endless&apos; After Record Q4 Earnings](https://slashdot.org/story/26/01/16/213211/tsmc-says-ai-demand-is-endless-after-record-q4-earnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 21:47:22](https://lobste.rs/s/0ashr1/i_set_all_376_vim_options_i_m_still_fool) - [I set all 376 Vim options and I&apos;m still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/)
* [2026-01-16, 21:42:24](https://news.ycombinator.com/item?id=46652617) - [Releasing rainbow tables to accelerate Net-NTLMv1 protocol deprecation](https://cloud.google.com/blog/topics/threat-intelligence/net-ntlmv1-deprecation-rainbow-tables)
* [2026-01-16, 21:20:00](https://news.slashdot.org/story/26/01/16/2021243/britain-has-moved-away-from-aligning-with-eu-regulation-financial-districts-ambassador-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Has &apos;Moved Away&apos; From Aligning With EU Regulation, Financial District&apos;s Ambassador Says](https://news.slashdot.org/story/26/01/16/2021243/britain-has-moved-away-from-aligning-with-eu-regulation-financial-districts-ambassador-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 20:44:00](https://science.slashdot.org/story/26/01/16/2014231/microplastics-from-washing-clothes-could-be-hurting-your-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microplastics From Washing Clothes Could Be Hurting Your Tomatoes](https://science.slashdot.org/story/26/01/16/2014231/microplastics-from-washing-clothes-could-be-hurting-your-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 20:05:00](https://news.slashdot.org/story/26/01/16/1916257/phd-students-taste-for-risk-mirrors-their-supervisors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhD Students&apos; Taste For Risk Mirrors Their Supervisors&apos;](https://news.slashdot.org/story/26/01/16/1916257/phd-students-taste-for-risk-mirrors-their-supervisors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 20:01:27](https://lobste.rs/s/xankns/cutting_llm_token_usage_by_80_using_repl) - [Cutting LLM token Usage by ~80% using REPL driven document analysis](https://yogthos.net/posts/2026-01-16-lattice-mcp.html)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 19:20:58](https://lobste.rs/s/ubcsl9/smalloc_simple_memory_allocator) - [smalloc: a simple memory allocator](https://github.com/zooko/smalloc)
* [2026-01-16, 19:00:55](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries) - [What are your favorite drawing libraries?](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries)
* [2026-01-16, 17:16:33](https://news.ycombinator.com/item?id=46648916) - [East Germany balloon escape](https://en.wikipedia.org/wiki/East_Germany_balloon_escape)
* [2026-01-16, 16:22:31](https://lobste.rs/s/d1m8cw/openbsd_current_now_runs_as_guest_under) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 16:03:37](https://lobste.rs/s/boyarm/6_day_ip_address_certificates_are) - [6-day and IP Address Certificates are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability.html)
* [2026-01-16, 15:57:05](https://lobste.rs/s/ajmcb6/designated_initializers_best_feature_c) - [Designated Initializers, the best feature of C++20](https://mropert.github.io/2026/01/15/designed_initializers/)
* [2026-01-16, 15:37:19](https://news.ycombinator.com/item?id=46647491) - [6-Day and IP Address Certificates Are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 15:01:31](https://lobste.rs/s/4seyoj/read_once_write_once_not_for_rust) - [READ_ONCE(), WRITE_ONCE(), but not for Rust](https://lwn.net/SubscriberLink/1053142/8ec93e58d5d3cc06/)
* [2026-01-16, 14:42:47](https://lobste.rs/s/dggcj3/astro_technology_company_joins) - [The Astro Technology Company joins Cloudflare](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:37:49](https://news.ycombinator.com/item?id=46646777) - [Cursor&apos;s latest “browser experiment” implied success without evidence](https://embedding-shapes.github.io/cursor-implied-success-without-evidence/)
* [2026-01-16, 14:25:54](https://news.ycombinator.com/item?id=46646645) - [Cloudflare acquires Astro](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:09:32](https://news.ycombinator.com/item?id=46646475) - [The Dilbert Afterlife](https://www.astralcodexten.com/p/the-dilbert-afterlife)
* [2026-01-16, 12:55:44](https://lobste.rs/s/krjjdr/patching_wii_news_channel_serve_local) - [Patching the Wii News Channel to serve local news](https://raulnegron.me/2025/wii-news-pr/)
* [2026-01-16, 10:34:11](https://lobste.rs/s/xaxgtt/modern_java) - [Modern Java](https://javabook.mccue.dev)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 10:01:31](https://lobste.rs/s/x59zd7/magic_better_software_conference) - [The Magic of the Better Software Conference](https://www.rfleury.com/p/the-magic-of-the-better-software)
* [2026-01-16, 06:24:49](https://lobste.rs/s/go7hr7/histomat_f_oss_we_should_reclaim_llms_not) - [Histomat of F/OSS: We should reclaim LLMs, not reject them](https://writings.hongminhee.org/2026/01/histomat-foss-llm/)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-16, 00:01:51](https://lobste.rs/s/esmvsj/http_ratelimit_headers) - [HTTP RateLimit headers](https://dotat.at/@/2026-01-13-http-ratelimit.html)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 16:46:50](https://news.ycombinator.com/item?id=46635309) - [LLM Structured Outputs Handbook](https://nanonets.com/cookbooks/structured-llm-outputs)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 11:01:34](https://news.ycombinator.com/item?id=46630816) - [High-Level Is the Goal](https://bvisness.me/high-level/)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 12:01:08](https://news.ycombinator.com/item?id=46615084) - [Lies, Damned Lies and Proofs: Formal Methods Are Not Slopless](https://www.lesswrong.com/posts/rhAPh3YzhPoBNpgHg/lies-damned-lies-and-proofs-formal-methods-are-not-slopless)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 17:14:14](https://news.ycombinator.com/item?id=46604067) - [Show HN: Microwave – Native iOS app for videos on ATproto](https://testflight.apple.com/join/cVxV1W3g)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
