# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Los Alamos Is Capturing Real-Time Images of Explosions at 7Mths of a Second](https://www.lanl.gov/media/publications/1663/dynamics-of-dynamic-imaging) ([comments](https://news.ycombinator.com/item?id=44798695))

* [Genie 3: A new frontier for world models](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/) ([comments](https://news.ycombinator.com/item?id=44798166))

* [Man Controls iPad With His Mind Using Synchron Brain Implant](https://science.slashdot.org/story/25/08/05/0040239/man-controls-ipad-with-his-mind-using-synchron-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/05/0040239/man-controls-ipad-with-his-mind-using-synchron-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Solid-State Batteries Charge in 3 Minutes:  Why Aren't They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss))

## Artificial Intelligence

* [Nearly 100,000 ChatGPT Conversations Were Searchable on Google](https://yro.slashdot.org/story/25/08/05/1535248/nearly-100000-chatgpt-conversations-were-searchable-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/08/05/1535248/nearly-100000-chatgpt-conversations-were-searchable-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [AI is not Making Engineers 10x as Productive](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/) ([comments](https://news.ycombinator.com/item?id=44798189))

* [An Illinois Bill Banning AI Therapy Has Been Signed Into Law](https://slashdot.org/story/25/08/05/148238/an-illinois-bill-banning-ai-therapy-has-been-signed-into-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/08/05/148238/an-illinois-bill-banning-ai-therapy-has-been-signed-into-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Environmental and Energy Policies

* [EPA Moves to Cancel $7B in Grants for Solar Energy](https://www.nytimes.com/2025/08/05/climate/epa-cancels-solar-energy-grants.html) ([comments](https://news.ycombinator.com/item?id=44799290))

* [Google Agrees To Pause AI Workloads To Protect the Grid When Power Demand Spikes](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Tech Tools and Software

* [Proxmox Virtual Environment 9.0 with Debian 13 released](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-0) ([comments](https://lobste.rs/s/6isvtq/proxmox_virtual_environment_9_0_with))

* [uBlock Origin Lite now available for Safari](https://apps.apple.com/app/ublock-origin-lite/id6745342698) ([comments](https://news.ycombinator.com/item?id=44795825))

* [Can you block it? A simple Ad Block Tester](https://canyoublockit.com/) ([comments](https://news.ycombinator.com/item?id=44797466))

## Scientific Discoveries and Missteps

* [Fraudulent Scientific Papers Are Rapidly Increasing, Study Finds](https://science.slashdot.org/story/25/08/05/0137204/fraudulent-scientific-papers-are-rapidly-increasing-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/05/0137204/fraudulent-scientific-papers-are-rapidly-increasing-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [NASA's Lunar Trailblazer Mission Ends In Disappointment](https://science.slashdot.org/story/25/08/05/0035201/nasas-lunar-trailblazer-mission-ends-in-disappointment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/08/05/0035201/nasas-lunar-trailblazer-mission-ends-in-disappointment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Unique and Unusual Developments

* [TSMC says employees tried to steal trade secrets on iPhone 18 chip process](https://9to5mac.com/2025/08/05/tsmc-says-employees-tried-to-steal-trade-secrets-on-iphone-18-chip-process/) ([comments](https://news.ycombinator.com/item?id=44797408))

* [The SmartBase - IoT Adjustable Bed for Comfort and Safety (2019)](https://www.hackster.io/jsinglet/the-smartbase-iot-adjustable-bed-for-comfort-and-safety-775f06) ([comments](https://lobste.rs/s/xajwed/smartbase_iot_adjustable_bed_for_comfort))

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

* [2025-08-05, 15:39:25](https://news.ycombinator.com/item?id=44799435) - [GitHub Pull Requests Are Down](https://github.com/github/site-policy/pull/582)
* [2025-08-05, 15:34:00](https://yro.slashdot.org/story/25/08/05/1535248/nearly-100000-chatgpt-conversations-were-searchable-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 100,000 ChatGPT Conversations Were Searchable on Google](https://yro.slashdot.org/story/25/08/05/1535248/nearly-100000-chatgpt-conversations-were-searchable-on-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 15:29:28](https://news.ycombinator.com/item?id=44799290) - [EPA Moves to Cancel $7B in Grants for Solar Energy](https://www.nytimes.com/2025/08/05/climate/epa-cancels-solar-energy-grants.html)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 14:47:35](https://news.ycombinator.com/item?id=44798705) - [US Coast Guard Report on Titan Submersible](https://www.news.uscg.mil/Press-Releases/Article/4265651/coast-guard-marine-board-of-investigation-releases-report-on-titan-submersible/)
* [2025-08-05, 14:47:07](https://news.ycombinator.com/item?id=44798695) - [Los Alamos Is Capturing Real-Time Images of Explosions at 7Mths of a Second](https://www.lanl.gov/media/publications/1663/dynamics-of-dynamic-imaging)
* [2025-08-05, 14:47:00](https://news.slashdot.org/story/25/08/05/1447232/deadly-titan-submersible-implosion-was-preventable-disaster-coast-guard-concludes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deadly Titan Submersible Implosion Was Preventable Disaster, Coast Guard Concludes](https://news.slashdot.org/story/25/08/05/1447232/deadly-titan-submersible-implosion-was-preventable-disaster-coast-guard-concludes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 14:38:14](https://lobste.rs/s/6isvtq/proxmox_virtual_environment_9_0_with) - [Proxmox Virtual Environment 9.0 with Debian 13 released](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-0)
* [2025-08-05, 14:30:19](https://news.ycombinator.com/item?id=44798434) - [No Comment (2010)](https://prog21.dadgum.com/57.html)
* [2025-08-05, 14:12:51](https://news.ycombinator.com/item?id=44798215) - [Enough is enough–I dumped Google&apos;s worsening search for Kagi](https://arstechnica.com/gadgets/2025/08/enough-is-enough-i-dumped-googles-worsening-search-for-kagi/)
* [2025-08-05, 14:10:42](https://news.ycombinator.com/item?id=44798189) - [AI is not Making Engineers 10x as Productive](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/)
* [2025-08-05, 14:08:52](https://news.ycombinator.com/item?id=44798166) - [Genie 3: A new frontier for world models](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/)
* [2025-08-05, 14:08:00](https://slashdot.org/story/25/08/05/148238/an-illinois-bill-banning-ai-therapy-has-been-signed-into-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Illinois Bill Banning AI Therapy Has Been Signed Into Law](https://slashdot.org/story/25/08/05/148238/an-illinois-bill-banning-ai-therapy-has-been-signed-into-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 13:57:15](https://news.ycombinator.com/item?id=44798040) - [Show HN: I built a text-based birthday reminder app](https://birthdays.app)
* [2025-08-05, 13:57:00](https://news.ycombinator.com/item?id=44798035) - [Proxmox Virtual Environment 9.0 with Debian 13 released](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-0)
* [2025-08-05, 13:46:30](https://news.ycombinator.com/item?id=44797917) - [AI Stands for Artificial Inanity](https://lambdaland.org/posts/2025-08-04_artifical_inanity/)
* [2025-08-05, 13:39:57](https://news.ycombinator.com/item?id=44797834) - [SimpleW – Web Server Library .NET Core](https://github.com/stratdev3/SimpleW)
* [2025-08-05, 13:35:42](https://news.ycombinator.com/item?id=44797784) - [Backblaze Drive Stats for Q2 2025](https://www.backblaze.com/blog/backblaze-drive-stats-for-q2-2025/)
* [2025-08-05, 13:00:00](https://science.slashdot.org/story/25/08/05/0137204/fraudulent-scientific-papers-are-rapidly-increasing-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fraudulent Scientific Papers Are Rapidly Increasing, Study Finds](https://science.slashdot.org/story/25/08/05/0137204/fraudulent-scientific-papers-are-rapidly-increasing-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 12:59:01](https://news.ycombinator.com/item?id=44797466) - [Can you block it? A simple Ad Block Tester](https://canyoublockit.com/)
* [2025-08-05, 12:53:15](https://news.ycombinator.com/item?id=44797408) - [TSMC says employees tried to steal trade secrets on iPhone 18 chip process](https://9to5mac.com/2025/08/05/tsmc-says-employees-tried-to-steal-trade-secrets-on-iphone-18-chip-process/)
* [2025-08-05, 12:34:47](https://lobste.rs/s/99dxb4/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/99dxb4/what_are_you_doing_this_week)
* [2025-08-05, 12:19:55](https://lobste.rs/s/jwyylb/what_i_wish_i_knew_when_learning_picat) - [What I Wish I Knew When Learning Picat](https://github.com/dsagman/picat)
* [2025-08-05, 12:10:08](https://lobste.rs/s/j6brbd/psf_has_paused_our_grants_program) - [The PSF has paused our Grants Program](https://pyfound.blogspot.com/2025/08/the-psf-has-paused-our-grants-program.html)
* [2025-08-05, 11:55:20](https://news.ycombinator.com/item?id=44796953) - [Build Your Own Lisp](https://www.buildyourownlisp.com/)
* [2025-08-05, 11:19:27](https://news.ycombinator.com/item?id=44796698) - [More than two hard disks in DOS](https://www.os2museum.com/wp/more-than-two-hard-disks-in-dos/)
* [2025-08-05, 10:10:17](https://lobste.rs/s/xajwed/smartbase_iot_adjustable_bed_for_comfort) - [The SmartBase - IoT Adjustable Bed for Comfort and Safety (2019)](https://www.hackster.io/jsinglet/the-smartbase-iot-adjustable-bed-for-comfort-and-safety-775f06)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 10:00:00](https://science.slashdot.org/story/25/08/05/0040239/man-controls-ipad-with-his-mind-using-synchron-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Controls iPad With His Mind Using Synchron Brain Implant](https://science.slashdot.org/story/25/08/05/0040239/man-controls-ipad-with-his-mind-using-synchron-brain-implant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 09:01:54](https://news.ycombinator.com/item?id=44795825) - [uBlock Origin Lite now available for Safari](https://apps.apple.com/app/ublock-origin-lite/id6745342698)
* [2025-08-05, 08:54:40](https://lobste.rs/s/a10ymw/pragmatism_programming_proverbs) - [Pragmatism in Programming Proverbs](https://www.gingerbill.org/article/2020/05/31/progamming-pragmatist-proverbs/)
* [2025-08-05, 07:11:20](https://lobste.rs/s/2ppwhw/cordoomceps_replacing_amiga_s_brain_with) - [Cordoomceps - replacing an Amiga&apos;s brain with Doom](https://mjg59.dreamwidth.org/73001.html)
* [2025-08-05, 07:09:02](https://lobste.rs/s/0wmqnt/getting_started_with_randomised_testing) - [Getting Started with Randomised Testing](https://lewiscampbell.tech/blog/250805.html)
* [2025-08-05, 07:00:00](https://science.slashdot.org/story/25/08/05/0035201/nasas-lunar-trailblazer-mission-ends-in-disappointment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Lunar Trailblazer Mission Ends In Disappointment](https://science.slashdot.org/story/25/08/05/0035201/nasas-lunar-trailblazer-mission-ends-in-disappointment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 06:50:48](https://lobste.rs/s/xbxuo6/lisp_interpreter_with_gc_662_lines_odin) - [Lisp interpreter with GC in 662 lines of Odin (and &lt;500 lines of C)](https://github.com/krig/LISP)
* [2025-08-05, 06:47:20](https://lobste.rs/s/jj06jz/php_8_5_adds_pipe_operator_what_it_means) - [PHP 8.5 Adds Pipe Operator: What it means](https://thephp.foundation/blog/2025/07/11/php-85-adds-pipe-operator/)
* [2025-08-05, 06:37:15](https://news.ycombinator.com/item?id=44794943) - [Where to find ideas](https://howtogrow.substack.com/p/where-to-find-ideas)
* [2025-08-05, 06:33:04](https://news.ycombinator.com/item?id=44794926) - [Apache ECharts 6](https://echarts.apache.org/handbook/en/basics/release-note/v6-feature/)
* [2025-08-05, 06:09:22](https://lobste.rs/s/xejkcr/my_ideal_array_language) - [My Ideal Array Language](https://www.ashermancinelli.com/csblog/2025-7-20-Ideal-Array-Language.html)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 05:05:23](https://news.ycombinator.com/item?id=44794508) - [Monitor your security cameras with locally processed AI](https://frigate.video/)
* [2025-08-05, 04:45:20](https://lobste.rs/s/a1njck/what_trick_trade_took_you_too_long_learn) - [What trick of the trade took you too long to learn?](https://lobste.rs/s/a1njck/what_trick_trade_took_you_too_long_learn)
* [2025-08-05, 04:13:43](https://news.ycombinator.com/item?id=44794271) - [PHP 8.5 adds pipe operator](https://thephp.foundation/blog/2025/07/11/php-85-adds-pipe-operator/)
* [2025-08-05, 03:30:00](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Expedite Plan For Nuclear Reactor On the Moon](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 02:45:50](https://lobste.rs/s/ztiaan/when_vibe_coding_isn_t_source_code_prompt) - [When vibe coding, isn&apos;t the source code the prompt?](https://boston.conman.org/2025/08/04.1)
* [2025-08-05, 01:45:00](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Agrees To Pause AI Workloads To Protect the Grid When Power Demand Spikes](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-05, 00:02:00](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Scrapped Deepfakes For Moana and Tron To Avoid &apos;Bad Publicity&apos; ](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 23:20:00](https://yro.slashdot.org/story/25/08/04/2223229/rivian-sues-to-sell-its-evs-directly-in-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian Sues To Sell Its EVs Directly In Ohio](https://yro.slashdot.org/story/25/08/04/2223229/rivian-sues-to-sell-its-evs-directly-in-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 23:13:37](https://lobste.rs/s/z3zgvi/every_reason_why_i_hate_ai) - [Every reason why I hate Ai](https://malwaretech.com/2025/08/every-reason-why-i-hate-ai.html)
* [2025-08-04, 22:40:00](https://hardware.slashdot.org/story/25/08/04/2218225/hyundai-to-help-build-nuclear-powered-datacenter-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai To Help Build Nuclear-Powered Datacenter In Texas](https://hardware.slashdot.org/story/25/08/04/2218225/hyundai-to-help-build-nuclear-powered-datacenter-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 22:22:00](https://news.ycombinator.com/item?id=44791984) - [Thingino: Open-Source Firmware for IP Cameras](https://thingino.com/)
* [2025-08-04, 22:16:41](https://lobste.rs/s/s69lnq/markdown_monster) - [Markdown Monster](https://git.sr.ht/~xigoi/markdown-monster/blob/master/monster.md)
* [2025-08-04, 22:00:00](https://it.slashdot.org/story/25/08/04/2032214/crowdstrike-investigated-320-north-korean-it-worker-cases-in-the-past-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CrowdStrike Investigated 320 North Korean IT Worker Cases In the Past Year](https://it.slashdot.org/story/25/08/04/2032214/crowdstrike-investigated-320-north-korean-it-worker-cases-in-the-past-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 21:53:33](https://lobste.rs/s/24bo0t/toyota_corolla_programming) - [The Toyota Corolla Of Programming](https://deprogrammaticaipsum.com/the-toyota-corolla-of-programming/)
* [2025-08-04, 21:20:00](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Uproar Over Vogue&apos;s AI-generated Ad Isn&apos;t Just About Fashion](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 21:00:27](https://lobste.rs/s/b5a2ii/p_fast_trie_lexically_ordered_hash_map) - [p-fast trie: lexically ordered hash map](https://dotat.at/@/2025-08-04-p-fast-trie.html)
* [2025-08-04, 20:40:00](https://slashdot.org/story/25/08/04/200209/chatgpt-nears-700-million-weekly-users-up-4x-from-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Nears 700 Million Weekly Users, Up 4x From Last Year](https://slashdot.org/story/25/08/04/200209/chatgpt-nears-700-million-weekly-users-up-4x-from-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 20:02:00](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineer Restores Pay Phones For Free Public Use](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 18:07:28](https://lobste.rs/s/q1vfez/generativity_pattern_rust) - [The Generativity Pattern in Rust](https://arhan.sh/blog/the-generativity-pattern-in-rust/)
* [2025-08-04, 17:35:25](https://lobste.rs/s/ty7aep/few_things_about_anchor_element_s_href_you) - [A Few Things About the Anchor Element’s href You Might Not Have Known](https://blog.jim-nielsen.com/2025/href-value-possibilities/)
* [2025-08-04, 16:16:21](https://news.ycombinator.com/item?id=44787902) - [Show HN: I spent 6 years building a ridiculous wooden pixel display](https://benholmen.com/blog/kilopixel/)
* [2025-08-04, 15:56:40](https://news.ycombinator.com/item?id=44787631) - [Qwen-Image: Crafting with native text rendering](https://qwenlm.github.io/blog/qwen-image/)
* [2025-08-04, 15:46:47](https://lobste.rs/s/fn4ozc/introducing_luzer_coverage_guided_lua) - [Introducing luzer, a coverage-guided Lua fuzzing engine](https://bronevichok.ru/posts/introducing-luzer.html)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 14:09:58](https://lobste.rs/s/ueocpa/how_we_made_json_stringify_more_than_twice) - [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)
* [2025-08-04, 14:09:33](https://news.ycombinator.com/item?id=44786005) - [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)
* [2025-08-04, 13:59:08](https://lobste.rs/s/i81fly/how_perplexity_is_evading_anti_crawling) - [How Perplexity is Evading Anti-crawling Measures](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 12:55:03](https://lobste.rs/s/w2f51x/polish_train_maker_is_suing_hackers_who) - [Polish Train Maker Is Suing the Hackers Who Exposed Its Anti-Repair Tricks](https://www.ifixit.com/News/112008/polish-train-maker-is-suing-the-hackers-who-exposed-its-anti-repair-tricks)
* [2025-08-04, 12:37:54](https://lobste.rs/s/ockeh1/htmx_is_hard_so_let_s_get_it_right) - [HTMX is hard so let&apos;s get it right](https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 09:13:55](https://lobste.rs/s/qqziki/more_retrocomputing_less_nostalgia) - [More retrocomputing, less nostalgia](https://datagubbe.se/retnost/)
* [2025-08-04, 06:18:24](https://news.ycombinator.com/item?id=44782596) - [The Age of Bronze and Steel](https://blog.zarfhome.com/2025/08/age-of-bronze-and-steel)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
* [2025-08-03, 20:21:00](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss) - [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss)
* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 18:45:14](https://news.ycombinator.com/item?id=44770215) - [A Carnival Attraction That Saved Premature Babies (2016)](https://www.smithsonianmag.com/history/man-who-pretended-be-doctor-ran-worlds-fair-attraction-saved-lives-thousands-premature-babies-180960200/)
* [2025-08-02, 17:32:25](https://news.ycombinator.com/item?id=44769547) - [I tried to replace myself with ChatGPT in my English class](https://lithub.com/what-happened-when-i-tried-to-replace-myself-with-chatgpt-in-my-english-classroom/)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 11:53:46](https://news.ycombinator.com/item?id=44766875) - [Chris Curry interviewed by Your Computer magazine (1981)](https://computeradsfromthepast.substack.com/p/your-computer-interviewed-chris-curry)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
