# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Insights

* [I set all 376 Vim options and I'm still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/) - A developer experiments with every Vim option in a quest to understand their impact.

* [6-day and IP Address Certificates are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability.html) - Let's Encrypt announces the availability of short-lived and IP-based certificates.

* [Cutting LLM token Usage by ~80% using REPL driven document analysis](https://yogthos.net/posts/2026-01-16-lattice-mcp.html) - An exploration into optimizing large language model token usage.

* [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619) - OpenBSD demonstrates compatibility as a virtual guest on Apple's Hypervisor.

* [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html) - A dive into what makes the Zig programming language special.

## AI and Machine Learning Developments

* [Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs](https://arxiv.org/abs/2512.09742) - Insights into fresh vulnerabilities for large language models.

* [Histomat of F/OSS: We should reclaim LLMs, not reject them](https://writings.hongminhee.org/2026/01/histomat-foss-llm/) - A philosophical take on the open-source potential of LLMs.

* [Integration tests are best tests](https://jayconrod.com/posts/133/integration-tests-are-best-tests) - Discussion of optimal practices in testing for software, particularly in AI-driven algorithms.

## Scientific and Environmental Topics

* [Microplastics From Washing Clothes Could Be Hurting Your Tomatoes](https://science.slashdot.org/story/26/01/16/2014231/microplastics-from-washing-clothes-could-be-hurting-your-tomatoes) - Research on how microplastics impact plant health, focusing on crops like tomatoes.

* [Earth from Space: The Fate of a Giant](https://www.esa.int/ESA_Multimedia/Images/2026/01/Earth_from_Space_The_fate_of_a_giant) - Stunning imagery and analysis of Earth's shifting environmental health.

* [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207) - A game-changing innovation for ultra-fast communication devices.

## Cultural and Artistic Highlights

* [Michelangelo's first painting, created when he was 12 or 13](https://www.openculture.com/2026/01/discover-michelangelos-first-painting.html) - A journey through Michelangelo's debut artwork and his legacy.

* [Partly AI-Generated Folk-Pop Hit Barred From Sweden's Official Charts](https://entertainment.slashdot.org/story/26/01/16/1855241/partly-ai-generated-folk-pop-hit-barred-from-swedens-official-charts) - Debate on what constitutes authentic music creation.

## Innovative Tools and Practices

* [slop Is Everywhere for Those with Eyes to See](https://www.fromjason.xyz/p/notebook/slop-is-everywhere-for-those-with-eyes-to-see/) - An opinion piece exploring inefficiencies and waste within complex systems.

* [smalloc: a simple memory allocator](https://github.com/zooko/smalloc) - Introduction to a lightweight, straightforward memory allocator for developers.

## Historical and Niche Stories

* [East Germany balloon escape](https://en.wikipedia.org/wiki/East_Germany_balloon_escape) - Recounting the daring escape by citizens of East Germany using a homemade hot air balloon.

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243) - Astonishing discovery provides a glimpse into ancient bees' adaptive behaviors.

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

* [2026-01-16, 21:47:22](https://lobste.rs/s/0ashr1/i_set_all_376_vim_options_i_m_still_fool) - [I set all 376 Vim options and I&apos;m still a fool](https://evanhahn.com/i-set-all-376-vim-options-and-im-still-a-fool/)
* [2026-01-16, 21:20:00](https://news.slashdot.org/story/26/01/16/2021243/britain-has-moved-away-from-aligning-with-eu-regulation-financial-districts-ambassador-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Has &apos;Moved Away&apos; From Aligning With EU Regulation, Financial District&apos;s Ambassador Says](https://news.slashdot.org/story/26/01/16/2021243/britain-has-moved-away-from-aligning-with-eu-regulation-financial-districts-ambassador-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 21:13:48](https://news.ycombinator.com/item?id=46652299) - [The Engineer to Executive Translation Layer](https://refactoring.fm/p/the-engineer-executive-translation)
* [2026-01-16, 20:44:00](https://science.slashdot.org/story/26/01/16/2014231/microplastics-from-washing-clothes-could-be-hurting-your-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microplastics From Washing Clothes Could Be Hurting Your Tomatoes](https://science.slashdot.org/story/26/01/16/2014231/microplastics-from-washing-clothes-could-be-hurting-your-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 20:37:31](https://news.ycombinator.com/item?id=46651887) - [LWN is currently under the heaviest scraper attack seen yet](https://social.kernel.org/notice/B2JlhcxNTfI8oDVoyO)
* [2026-01-16, 20:05:00](https://news.slashdot.org/story/26/01/16/1916257/phd-students-taste-for-risk-mirrors-their-supervisors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhD Students&apos; Taste For Risk Mirrors Their Supervisors&apos;](https://news.slashdot.org/story/26/01/16/1916257/phd-students-taste-for-risk-mirrors-their-supervisors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 20:03:10](https://news.ycombinator.com/item?id=46651443) - [Slop Is Everywhere for Those with Eyes to See](https://www.fromjason.xyz/p/notebook/slop-is-everywhere-for-those-with-eyes-to-see/)
* [2026-01-16, 20:01:27](https://lobste.rs/s/xankns/cutting_llm_token_usage_by_80_using_repl) - [Cutting LLM token Usage by ~80% using REPL driven document analysis](https://yogthos.net/posts/2026-01-16-lattice-mcp.html)
* [2026-01-16, 20:00:00](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss) - [Meta to Cut More than 1,000 Jobs as its Shifts Focus to AI Wearables](https://soylentnews.org/article.pl?sid=26/01/16/0211255&amp;from=rss)
* [2026-01-16, 19:30:04](https://lobste.rs/s/0m2min/weird_generalization_inductive) - [Weird Generalization and Inductive Backdoors: New Ways to Corrupt LLMs](https://arxiv.org/abs/2512.09742)
* [2026-01-16, 19:25:00](https://entertainment.slashdot.org/story/26/01/16/1855241/partly-ai-generated-folk-pop-hit-barred-from-swedens-official-charts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Partly AI-Generated Folk-Pop Hit Barred From Sweden&apos;s Official Charts](https://entertainment.slashdot.org/story/26/01/16/1855241/partly-ai-generated-folk-pop-hit-barred-from-swedens-official-charts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 19:20:58](https://lobste.rs/s/ubcsl9/smalloc_simple_memory_allocator) - [smalloc: a simple memory allocator](https://github.com/zooko/smalloc)
* [2026-01-16, 19:00:55](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries) - [What are your favorite drawing libraries?](https://lobste.rs/s/dtnmwy/what_are_your_favorite_drawing_libraries)
* [2026-01-16, 18:49:29](https://news.ycombinator.com/item?id=46650347) - [Reading across books with Claude Code](https://pieterma.es/syntopic-reading-claude/)
* [2026-01-16, 18:45:00](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ads Are Coming To ChatGPT in the Coming Weeks](https://slashdot.org/story/26/01/16/1827203/ads-are-coming-to-chatgpt-in-the-coming-weeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 18:18:20](https://news.ycombinator.com/item?id=46649813) - [Earth from Space: The Fate of a Giant](https://www.esa.int/ESA_Multimedia/Images/2026/01/Earth_from_Space_The_fate_of_a_giant)
* [2026-01-16, 18:13:00](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seattle is Building Light Rail Like It&apos;s 1999](https://news.slashdot.org/story/26/01/16/1813239/seattle-is-building-light-rail-like-its-1999?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 18:02:19](https://news.ycombinator.com/item?id=46649577) - [Our approach to advertising](https://openai.com/index/our-approach-to-advertising-and-expanding-access/)
* [2026-01-16, 17:56:03](https://news.ycombinator.com/item?id=46649489) - [Emoji Use in the Electronic Health Record is Increasing](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2843883)
* [2026-01-16, 17:32:40](https://news.ycombinator.com/item?id=46649142) - [STFU](https://github.com/Pankajtanwarbanna/stfu)
* [2026-01-16, 17:25:00](https://tech.slashdot.org/story/26/01/16/179214/verizon-offers-20-credit-after-nationwide-outage-stranded-users-in-sos-mode-for-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Offers $20 Credit After Nationwide Outage Stranded Users in SOS Mode For Hours](https://tech.slashdot.org/story/26/01/16/179214/verizon-offers-20-credit-after-nationwide-outage-stranded-users-in-sos-mode-for-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 17:16:33](https://news.ycombinator.com/item?id=46648916) - [East Germany balloon escape](https://en.wikipedia.org/wiki/East_Germany_balloon_escape)
* [2026-01-16, 17:15:10](https://news.ycombinator.com/item?id=46648900) - [Ask HN: Claude Opus performance affected by time of day?](https://news.ycombinator.com/item?id=46648900)
* [2026-01-16, 17:00:29](https://news.ycombinator.com/item?id=46648714) - [Zep AI (Agent Context Engineering, YC W24) Is Hiring Forward Deployed Engineers](https://www.ycombinator.com/companies/zep-ai/jobs/)
* [2026-01-16, 16:49:00](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Has Made Salesforce Engineers More Productive, So the Company Has Stopped Hiring Them, CEO Says](https://it.slashdot.org/story/26/01/16/1650206/ai-has-made-salesforce-engineers-more-productive-so-the-company-has-stopped-hiring-them-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 16:22:31](https://lobste.rs/s/d1m8cw/openbsd_current_now_runs_as_guest_under) - [OpenBSD-current now runs as guest under Apple Hypervisor](https://www.undeadly.org/cgi?action=article;sid=20260115203619)
* [2026-01-16, 16:20:21](https://news.ycombinator.com/item?id=46648144) - [Launch HN: Indy (YC S21) – A support app designed for ADHD brains](https://www.shimmer.care/indy-redirect)
* [2026-01-16, 16:06:00](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ruby on Rails Creator Says AI Coding Tools Still Can&apos;t Match Most Junior Programmers](https://developers.slashdot.org/story/26/01/16/166254/ruby-on-rails-creator-says-ai-coding-tools-still-cant-match-most-junior-programmers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 16:03:37](https://lobste.rs/s/boyarm/6_day_ip_address_certificates_are) - [6-day and IP Address Certificates are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability.html)
* [2026-01-16, 15:57:05](https://lobste.rs/s/ajmcb6/designated_initializers_best_feature_c) - [Designated Initializers, the best feature of C++20](https://mropert.github.io/2026/01/15/designed_initializers/)
* [2026-01-16, 15:37:19](https://news.ycombinator.com/item?id=46647491) - [6-Day and IP Address Certificates Are Generally Available](https://letsencrypt.org/2026/01/15/6day-and-ip-general-availability)
* [2026-01-16, 15:26:00](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Clamps Down on High-Speed Traders, Removing Servers](https://tech.slashdot.org/story/26/01/16/1526243/china-clamps-down-on-high-speed-traders-removing-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 15:23:00](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss) - [You Need A Kitchen Slide Rule](https://soylentnews.org/article.pl?sid=26/01/16/029237&amp;from=rss)
* [2026-01-16, 15:04:22](https://news.ycombinator.com/item?id=46647059) - [Read_once(), Write_once(), but Not for Rust](https://lwn.net/SubscriberLink/1053142/8ec93e58d5d3cc06/)
* [2026-01-16, 15:01:31](https://lobste.rs/s/4seyoj/read_once_write_once_not_for_rust) - [READ_ONCE(), WRITE_ONCE(), but not for Rust](https://lwn.net/SubscriberLink/1053142/8ec93e58d5d3cc06/)
* [2026-01-16, 14:42:47](https://lobste.rs/s/dggcj3/astro_technology_company_joins) - [The Astro Technology Company joins Cloudflare](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:40:00](https://hardware.slashdot.org/story/26/01/16/1332213/hard-drive-prices-have-surged-by-an-average-of-46-since-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drive Prices Have Surged By an Average of 46% Since September](https://hardware.slashdot.org/story/26/01/16/1332213/hard-drive-prices-have-surged-by-an-average-of-46-since-september?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 14:37:49](https://news.ycombinator.com/item?id=46646777) - [Cursor&apos;s latest “browser experiment” implied success without evidence](https://embedding-shapes.github.io/cursor-implied-success-without-evidence/)
* [2026-01-16, 14:25:54](https://news.ycombinator.com/item?id=46646645) - [Cloudflare acquires Astro](https://astro.build/blog/joining-cloudflare/)
* [2026-01-16, 14:00:00](https://news.slashdot.org/story/26/01/16/1313243/codeorg-use-ai-in-an-interview-without-our-ok-and-youre-dead-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org: Use AI In an Interview Without Our OK and You&apos;re Dead To Us](https://news.slashdot.org/story/26/01/16/1313243/codeorg-use-ai-in-an-interview-without-our-ok-and-youre-dead-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 13:44:25](https://news.ycombinator.com/item?id=46646263) - [Michelangelo&apos;s first painting, created when he was 12 or 13](https://www.openculture.com/2026/01/discover-michelangelos-first-painting.html)
* [2026-01-16, 13:39:31](https://news.ycombinator.com/item?id=46646226) - [Dev-owned testing: Why it fails in practice and succeeds in theory](https://dl.acm.org/doi/10.1145/3780063.3780066)
* [2026-01-16, 13:39:06](https://lobste.rs/s/nkss2q/ergonomic_abstractions_for_numerical) - [Ergonomic abstractions for numerical computing: My story so far](http://ocramz.github.io/posts/2026-01-16-ergonomics-numerical.html)
* [2026-01-16, 13:20:20](https://news.ycombinator.com/item?id=46646091) - [psc: The ps utility, with an eBPF twist and container context](https://github.com/loresuso/psc)
* [2026-01-16, 13:00:00](https://slashdot.org/story/26/01/16/0419230/amazon-is-buying-americas-first-new-copper-output-in-more-than-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Buying America&apos;s First New Copper Output In More Than a Decade](https://slashdot.org/story/26/01/16/0419230/amazon-is-buying-americas-first-new-copper-output-in-more-than-a-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 12:55:44](https://lobste.rs/s/krjjdr/patching_wii_news_channel_serve_local) - [Patching the Wii News Channel to serve local news](https://raulnegron.me/2025/wii-news-pr/)
* [2026-01-16, 12:43:15](https://lobste.rs/s/bxwek7/glasgow_interface_explorer_code_conduct) - [Glasgow Interface Explorer Code of Conduct](https://glasgow-embedded.org/latest/conduct.html)
* [2026-01-16, 12:03:52](https://news.ycombinator.com/item?id=46645615) - [Just the Browser](https://justthebrowser.com/)
* [2026-01-16, 10:57:38](https://news.ycombinator.com/item?id=46645176) - [Why DuckDB is my first choice for data processing](https://www.robinlinacre.com/recommend_duckdb/)
* [2026-01-16, 10:34:11](https://lobste.rs/s/xaxgtt/modern_java) - [Modern Java](https://javabook.mccue.dev)
* [2026-01-16, 10:30:00](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss) - [Over Half a Million Windows Users are Switching to Linux](https://soylentnews.org/article.pl?sid=26/01/14/2313236&amp;from=rss)
* [2026-01-16, 10:01:31](https://lobste.rs/s/x59zd7/magic_better_software_conference) - [The Magic of the Better Software Conference](https://www.rfleury.com/p/the-magic-of-the-better-software)
* [2026-01-16, 10:00:00](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Star Wars&apos; Boss Kathleen Kennedy Steps Down From Lucasfilm](https://entertainment.slashdot.org/story/26/01/16/0410251/star-wars-boss-kathleen-kennedy-steps-down-from-lucasfilm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 09:25:55](https://lobste.rs/s/jkxpni/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jkxpni/what_are_you_doing_this_weekend)
* [2026-01-16, 07:00:00](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Carbon Pollution Rose In 2025, a Reversal From Prior Years](https://news.slashdot.org/story/26/01/16/043253/us-carbon-pollution-rose-in-2025-a-reversal-from-prior-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-16, 06:54:55](https://news.ycombinator.com/item?id=46643754) - [How to wrangle non-deterministic AI outputs into conventional software? (2025)](https://www.domainlanguage.com/articles/ai-components-deterministic-system/)
* [2026-01-16, 06:24:49](https://lobste.rs/s/go7hr7/histomat_f_oss_we_should_reclaim_llms_not) - [Histomat of F/OSS: We should reclaim LLMs, not reject them](https://writings.hongminhee.org/2026/01/histomat-foss-llm/)
* [2026-01-16, 05:47:00](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss) - [BreachForum Breach](https://soylentnews.org/article.pl?sid=26/01/14/238233&amp;from=rss)
* [2026-01-16, 02:14:15](https://lobste.rs/s/jqntdm/0_click_exploit_chain_for_pixel_9_part_1) - [A 0-click exploit chain for the Pixel 9, part 1: Decoding Dolby](https://projectzero.google/2026/01/pixel-0-click-part-1.html)
* [2026-01-16, 02:07:44](https://lobste.rs/s/xyiyri/integration_tests_are_best_tests) - [Integration tests are best tests](https://jayconrod.com/posts/133/integration-tests-are-best-tests)
* [2026-01-16, 01:06:00](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss) - [Survey: Even Meta And Microsoft Engineers Ditch Company AI For Claude](https://soylentnews.org/article.pl?sid=26/01/14/236237&amp;from=rss)
* [2026-01-16, 00:15:53](https://lobste.rs/s/e3xhzq/why_is_zig_so_cool) - [Why is Zig so Cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2026-01-16, 00:01:51](https://lobste.rs/s/esmvsj/http_ratelimit_headers) - [HTTP RateLimit headers](https://dotat.at/@/2026-01-13-http-ratelimit.html)
* [2026-01-15, 23:56:26](https://news.ycombinator.com/item?id=46641216) - [The Alignment Game (2023)](https://dmvaldman.github.io/alignment-game/)
* [2026-01-15, 20:17:00](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss) - [GNOME Dev Gives Fans of Linux&apos;s Middle-Click Paste the Middle Finger](https://soylentnews.org/article.pl?sid=26/01/13/1616210&amp;from=rss)
* [2026-01-15, 19:20:48](https://news.ycombinator.com/item?id=46637723) - [Show HN: 1Code – Open-source Cursor-like UI for Claude Code](https://github.com/21st-dev/1code)
* [2026-01-15, 16:46:50](https://news.ycombinator.com/item?id=46635309) - [LLM Structured Outputs Handbook](https://nanonets.com/cookbooks/structured-llm-outputs)
* [2026-01-15, 15:31:00](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss) - [Cray Customer Service – Memories (1979 to 2014) by Charles Clark](https://soylentnews.org/article.pl?sid=26/01/13/1612200&amp;from=rss)
* [2026-01-15, 14:10:40](https://lobste.rs/s/ahdtzt/forgejo_v14_0_is_available) - [Forgejo v14.0 is available](https://forgejo.org/2026-01-release-v14-0/)
* [2026-01-15, 13:19:22](https://news.ycombinator.com/item?id=46632057) - [Independent Guest Virtual Machine (IGVM) File Format](https://github.com/microsoft/igvm)
* [2026-01-15, 12:27:40](https://lobste.rs/s/pddded/why_senior_engineers_let_bad_projects) - [Why Senior Engineers Let Bad Projects Fail](https://lalitm.com/post/why-senior-engineers-let-bad-projects-fail/)
* [2026-01-15, 10:50:00](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss) - [A Fix for Frost: Engineers Use Electricity to Zap Ice Without Heat or Chemicals](https://soylentnews.org/article.pl?sid=26/01/13/166232&amp;from=rss)
* [2026-01-15, 08:38:27](https://lobste.rs/s/hshaq4/alternatives_minio_for_single_node_local) - [Alternatives to MinIO for single-node local S3](https://rmoff.net/2026/01/14/alternatives-to-minio-for-single-node-local-s3/)
* [2026-01-15, 08:10:06](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots) - [Lobsters Battlestations and Screenshots (2026)](https://lobste.rs/s/r7rdk7/lobsters_battlestations_screenshots)
* [2026-01-15, 06:12:00](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss) - [Resuscitating a 1934 Briggs &amp; Stratton Washing Machine Engine](https://soylentnews.org/article.pl?sid=26/01/13/161243&amp;from=rss)
* [2026-01-15, 02:48:00](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss) - [RIP - &apos;Dilbert&apos; Creator Scott Adams Dies at 68 After Prostate Cancer Battle](https://soylentnews.org/article.pl?sid=26/01/15/0129228&amp;from=rss)
* [2026-01-15, 01:25:00](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss) - [The AIdigest.org&apos;s AI Village](https://soylentnews.org/article.pl?sid=26/01/12/1846246&amp;from=rss)
* [2026-01-14, 20:33:00](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss) - [Tech Bloggers Switching From Windows to Linux](https://soylentnews.org/article.pl?sid=26/01/12/1844243&amp;from=rss)
* [2026-01-14, 15:49:00](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss) - [China Expected to Approve H200 Imports in Early 2026, Report Claims](https://soylentnews.org/article.pl?sid=26/01/12/1840204&amp;from=rss)
* [2026-01-14, 11:06:00](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss) - [Some Dogs Eavesdrop on Their Owners to Learn New Words](https://soylentnews.org/article.pl?sid=26/01/12/1838234&amp;from=rss)
* [2026-01-14, 06:24:00](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss) - [An Ultra-Fast Quantum Tunneling Device for the 6G Terahertz Era](https://soylentnews.org/article.pl?sid=26/01/12/1835207&amp;from=rss)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 14:24:16](https://news.ycombinator.com/item?id=46588915) - [The First PC Virus](https://www.bbc.com/audio/play/w3ct7479)
* [2026-01-12, 13:42:42](https://news.ycombinator.com/item?id=46588379) - [Lock-Picking Robot](https://github.com/etinaude/Lock-Picking-Robot)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 10:48:02](https://news.ycombinator.com/item?id=46586694) - [Feature Selection: A Primer](https://ikromshi.com/2025/12/30/feature-selection-primer.html)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
