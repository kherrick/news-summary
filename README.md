# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and its Impacts

* [An AI Agent Published a Hit Piece on Me – More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/) - A personal account of an individual targeted by an AI for creating a 'hit piece'.

* [Autonomous AI Agent Apparently Tries to Blackmail Maintainer Who Rejected Its Code](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights strange and concerning behavior displayed by an autonomous AI agent.

* [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - Explores issues caused by AI-generated text and the rise of AI detectors.

* [Your Friends Could Be Sharing Your Phone Number with ChatGPT](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discusses privacy concerns regarding shared data in relation to ChatGPT.

* [Dates with AI Companions Plagued by Lag, Miscommunications - and General Creepiness](https://slashdot.org/story/26/02/14/2124229/dates-with-ai-companions-plagued-by-lag-miscommunications---and-general-creepiness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports on awkward and flawed interactions with AI-generated companions.

* [News publishers limit Internet Archive access due to AI scraping concerns](https://www.niemanlab.org/2026/01/news-publishers-limit-internet-archive-access-due-to-ai-scraping-concerns/) - Discusses how AI scraping leads publishers to restrict access to archival resources.

* [Anthropic's Claude Got 11% User Boost from Super Bowl Ad Mocking ChatGPT's Advertising](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI project sees significant user growth thanks to a Super Bowl campaign targeting ChatGPT.

## Advancements in Technology and Software Releases

* [Zig landed io_uring and Grand Central Dispatch std.Io implementations](https://ziglang.org/devlog/2026/?20260213#2026-02-13) - Details on significant advancements in the Zig programming language.

* [Colored Petri Nets, LLMs, and distributed applications](https://blog.sao.dev/cpns-llms-distributed-apps/) - Explores the intersection of computational models, machine learning, and distributed systems.

* [Vim 9.2 released](https://www.vim.org/vim-9.2-released.php) - Announcement regarding the latest iteration of the popular text editor.

* [Zvec: A lightweight, fast, in-process vector database](https://github.com/alibaba/zvec) - Introduction to a new, efficient vector database.

* [microgpt](http://karpathy.github.io/2026/02/12/microgpt/) - A minimalist GPT model with a focus on lean and simple implementation.

* [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/) - Updates from the development of the Hare programming language.

* [Evolving Git for the next decade](https://lwn.net/SubscriberLink/1057561/bddc1e61152fadf6/) - Insights into the future roadmap of the Git version control system.

* [Font Rendering from First Principles](https://mccloskeybr.com/articles/font_rendering.html) - A deep dive into the technical aspects of font rendering.

## Ecological and Environmental Concerns

* [Earth is Warming Faster Than Ever. But Why?](https://news.slashdot.org/story/26/02/14/070222/earth-is-warming-faster-than-ever-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of the rapid pace of climate change.

* [US Government Will Stop Pollution-Reduction Credits for Cars With 'Start-Stop' Systems](https://tech.slashdot.org/story/26/02/14/2248251/us-government-will-stop-pollution-reduction-credits-for-cars-with-start-stop-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Policy change affecting pollution control measures in automotive technology.

* [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - New research challenges the idea that trees respond to solar eclipses.

## Creative and Unique Innovations

* [Show HN: Sameshi – a ~1200 Elo chess engine that fits within 2KB](https://github.com/datavorous/sameshi) - An ultra-compact chess engine with impressive efficiency.

* [Unicorn Jelly](https://unicornjelly.com/) - A quirky and unique webcomic.

* [Floppy Disks: the best TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/) - Creative use of floppy disks as a unique TV remote.

## Science and Research

* [5,300-year-old 'bow drill' rewrites story of ancient Egyptian tools](https://www.ncl.ac.uk/press/articles/latest/2026/02/ancientegyptiandrillbit/) - Discovery redefines the history of Egyptian toolmaking.

* [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - Breakthrough in superconducting research using innovative microscopy.

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

* [2026-02-15, 02:34:00](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Your Friends Could Be Sharing Your Phone Number with ChatGPT](https://yro.slashdot.org/story/26/02/15/0040259/your-friends-could-be-sharing-your-phone-number-with-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-15, 00:57:23](https://lobste.rs/s/av1it1/zig_landed_io_uring_grand_central) - [Zig landed io_uring and Grand Central Dispatch std.Io implementations](https://ziglang.org/devlog/2026/?20260213#2026-02-13)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 23:52:00](https://hardware.slashdot.org/story/26/02/14/2330259/small-crowd-pays-to-watch-a-boxing-match-between-80-pound-chinese-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small Crowd Pays to Watch a Boxing Match Between 80-Pound Chinese Robots](https://hardware.slashdot.org/story/26/02/14/2330259/small-crowd-pays-to-watch-a-boxing-match-between-80-pound-chinese-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 22:52:00](https://tech.slashdot.org/story/26/02/14/2248251/us-government-will-stop-pollution-reduction-credits-for-cars-with-start-stop-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Will Stop Pollution-Reduction Credits for Cars With &apos;Start-Stop&apos; Systems](https://tech.slashdot.org/story/26/02/14/2248251/us-government-will-stop-pollution-reduction-credits-for-cars-with-start-stop-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 22:39:24](https://news.ycombinator.com/item?id=47019133) - [Show HN: Off Grid – Run AI text, image gen, vision offline on your phone](https://github.com/alichherawalla/off-grid-mobile)
* [2026-02-14, 22:21:17](https://lobste.rs/s/yzvbbt/rfc_9110_http_semantics) - [RFC 9110: HTTP Semantics](https://datatracker.ietf.org/doc/html/rfc9110)
* [2026-02-14, 22:03:48](https://lobste.rs/s/unpaan/arborium_is_ai_slopware_should_not_be) - [Arborium is AI slopware and should not be trusted](https://ewie.online/posts/20260214-arborium-is-ai-slopw/)
* [2026-02-14, 21:55:10](https://lobste.rs/s/xgoe2y/windows_nt_design_workbook_1990) - [Windows NT Design Workbook (1990)](https://computernewb.com/~lily/files/Documents/NTDesignWorkbook/)
* [2026-02-14, 21:52:00](https://slashdot.org/story/26/02/14/2124229/dates-with-ai-companions-plagued-by-lag-miscommunications---and-general-creepiness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dates with AI Companions Plagued by Lag, Miscommunications - and General Creepiness](https://slashdot.org/story/26/02/14/2124229/dates-with-ai-companions-plagued-by-lag-miscommunications---and-general-creepiness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 21:14:32](https://lobste.rs/s/x4vtpq/hacking_pharmacy_get_free_prescription) - [Hacking a pharmacy to get free prescription drugs and more](https://eaton-works.com/2026/02/13/dava-india-hack/)
* [2026-02-14, 21:08:08](https://news.ycombinator.com/item?id=47018405) - [Colored Petri Nets, LLMs, and distributed applications](https://blog.sao.dev/cpns-llms-distributed-apps/)
* [2026-02-14, 20:52:00](https://tech.slashdot.org/story/26/02/14/0733246/social-networks-agree-to-be-rated-on-their-teen-safety-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Networks Agree to Be Rated On Their Teen Safety Efforts](https://tech.slashdot.org/story/26/02/14/0733246/social-networks-agree-to-be-rated-on-their-teen-safety-efforts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 20:35:48](https://lobste.rs/s/7kjrtz/ublock_filter_list_hide_all_youtube) - [uBlock filter list to hide all YouTube Shorts](https://github.com/i5heu/ublock-hide-yt-shorts)
* [2026-02-14, 19:34:00](https://slashdot.org/story/26/02/14/0313259/bytedances-seedance-2-criticized-over-ai-generated-video-of-tom-cruise-fighting-brad-pitt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ByteDance&apos;s Seedance 2 Criticized Over AI-Generated Video of Tom Cruise Fighting Brad Pitt](https://slashdot.org/story/26/02/14/0313259/bytedances-seedance-2-criticized-over-ai-generated-video-of-tom-cruise-fighting-brad-pitt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 19:33:24](https://news.ycombinator.com/item?id=47017545) - [Descent, ported to the web](https://mrdoob.github.io/three-descent/)
* [2026-02-14, 19:32:17](https://lobste.rs/s/tmdwac/borrowed_tuple_indexing_for_hashmap) - [Borrowed tuple indexing for HashMap](https://traxys.me/tuple_borrow.html)
* [2026-02-14, 19:09:26](https://lobste.rs/s/zao3mz/leaning_into_coding_interview_lean_4_vs) - [Leaning Into the Coding Interview: Lean 4 vs Dafny cage-match](https://ntaylor.ca/posts/proving-the-coding-interview-lean/)
* [2026-02-14, 18:53:57](https://lobste.rs/s/m8imnx/gitdatamodel_documentation) - [gitdatamodel documentation](https://git-scm.com/docs/gitdatamodel)
* [2026-02-14, 18:46:32](https://news.ycombinator.com/item?id=47017138) - [News publishers limit Internet Archive access due to AI scraping concerns](https://www.niemanlab.org/2026/01/news-publishers-limit-internet-archive-access-due-to-ai-scraping-concerns/)
* [2026-02-14, 18:34:00](https://news.slashdot.org/story/26/02/14/070222/earth-is-warming-faster-than-ever-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth is Warming Faster Than Ever. But Why?](https://news.slashdot.org/story/26/02/14/070222/earth-is-warming-faster-than-ever-but-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 17:45:09](https://news.ycombinator.com/item?id=47016530) - [A header-only C vector database library](https://github.com/abdimoallim/vdb)
* [2026-02-14, 17:36:45](https://news.ycombinator.com/item?id=47016443) - [uBlock filter list to hide all YouTube Shorts](https://github.com/i5heu/ublock-hide-yt-shorts/)
* [2026-02-14, 17:34:00](https://tech.slashdot.org/story/26/02/13/1847236/the-eu-moves-to-kill-infinite-scrolling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The EU Moves To Kill Infinite Scrolling](https://tech.slashdot.org/story/26/02/13/1847236/the-eu-moves-to-kill-infinite-scrolling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 17:01:16](https://lobste.rs/s/gz3pa6/font_rendering_from_first_principles) - [Font Rendering from First Principles](https://mccloskeybr.com/articles/font_rendering.html)
* [2026-02-14, 16:50:47](https://news.ycombinator.com/item?id=47016008) - [Amsterdam Compiler Kit](https://github.com/davidgiven/ack)
* [2026-02-14, 16:34:00](https://tech.slashdot.org/story/26/02/14/0447228/sudden-telnet-traffic-drop-are-telcos-filtering-ports-to-block-critical-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sudden Telnet Traffic Drop. Are Telcos Filtering Ports to Block Critical Vulnerability?](https://tech.slashdot.org/story/26/02/14/0447228/sudden-telnet-traffic-drop-are-telcos-filtering-ports-to-block-critical-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 16:22:54](https://lobste.rs/s/k5dqmn/new_repository_settings_for_configuring) - [New repository settings for configuring pull request access](https://github.blog/changelog/2026-02-13-new-repository-settings-for-configuring-pull-request-access/)
* [2026-02-14, 16:07:44](https://news.ycombinator.com/item?id=47015579) - [A review of M Disc archival capability with long term testing results (2016)](http://www.microscopy-uk.org.uk/mag/artsep16/mol-mdisc-review.html)
* [2026-02-14, 16:06:04](https://lobste.rs/s/mn4o1h/sharing_dada) - [Sharing in Dada](https://smallcultfollowing.com/babysteps/blog/2026/02/14/sharing-in-dada/)
* [2026-02-14, 15:52:11](https://lobste.rs/s/wukx2g/vim_9_2_released) - [Vim 9.2 released](https://www.vim.org/vim-9.2-released.php)
* [2026-02-14, 15:39:43](https://news.ycombinator.com/item?id=47015330) - [Vim 9.2](https://www.vim.org/vim-9.2-released.php)
* [2026-02-14, 15:35:47](https://news.ycombinator.com/item?id=47015294) - [My smart sleep mask broadcasts users&apos; brainwaves to an open MQTT broker](https://aimilios.bearblog.dev/reverse-engineering-sleep-mask/)
* [2026-02-14, 15:34:00](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Got 11% User Boost from Super Bowl Ad Mocking ChatGPT&apos;s Advertising](https://slashdot.org/story/26/02/14/0235231/anthropics-claude-got-11-user-boost-from-super-bowl-ad-mocking-chatgpts-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 14:32:42](https://lobste.rs/s/q57iuj/i_love_work_archwiki_maintainers) - [I love the work of the ArchWiki maintainers](https://k7r.eu/i-love-the-work-of-the-archwiki-maintainers/)
* [2026-02-14, 13:47:44](https://news.ycombinator.com/item?id=47014500) - [Show HN: Sameshi – a ~1200 Elo chess engine that fits within 2KB](https://github.com/datavorous/sameshi)
* [2026-02-14, 13:40:20](https://news.ycombinator.com/item?id=47014449) - [Ooh.directory: a place to find good blogs that interest you](https://ooh.directory/)
* [2026-02-14, 13:33:03](https://news.ycombinator.com/item?id=47014405) - [How many registers does an x86-64 CPU have? (2020)](https://blog.yossarian.net/2020/11/30/How-many-registers-does-an-x86-64-cpu-have)
* [2026-02-14, 13:08:35](https://news.ycombinator.com/item?id=47014260) - [Unicorn Jelly](https://unicornjelly.com/)
* [2026-02-14, 12:19:34](https://lobste.rs/s/m1mkjm/programmer_s_loss_identity) - [A programmer&apos;s loss of identity](https://ratfactor.com/tech-nope2)
* [2026-02-14, 12:00:00](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Israeli Soldiers Accused of Using Polymarket To Bet on Strikes](https://news.slashdot.org/story/26/02/13/1949236/israeli-soldiers-accused-of-using-polymarket-to-bet-on-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 09:10:15](https://news.ycombinator.com/item?id=47012964) - [YouTube as Storage](https://github.com/PulseBeat02/yt-media-storage)
* [2026-02-14, 08:35:39](https://lobste.rs/s/qt3xs1/understanding_go_runtime_bootstrap) - [Understanding the Go Runtime: The Bootstrap](https://internals-for-interns.com/posts/understanding-go-runtime/)
* [2026-02-14, 08:30:00](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autonomous AI Agent Apparently Tries to Blackmail Maintainer Who Rejected Its Code](https://news.slashdot.org/story/26/02/14/0553208/autonomous-ai-agent-apparently-tries-to-blackmail-maintainer-who-rejected-its-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 06:33:08](https://lobste.rs/s/fbaxhc/ai_agent_published_hit_piece_on_me_more) - [An AI Agent Published a Hit Piece on Me – More Things Have Happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 05:00:00](https://tech.slashdot.org/story/26/02/13/1921232/600-memory-price-surge-threatens-telcos-broadband-router-set-top-box-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [600% Memory Price Surge Threatens Telcos&apos; Broadband Router, Set-Top Box Supply](https://tech.slashdot.org/story/26/02/13/1921232/600-memory-price-surge-threatens-telcos-broadband-router-set-top-box-supply?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 03:31:32](https://lobste.rs/s/rkobr1/floppy_disks_best_tv_remote_for_kids) - [Floppy Disks: the best TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/)
* [2026-02-14, 02:00:00](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Quietly &apos;Releases&apos; Millions of Spotify Tracks, Despite Legal Pushback](https://yro.slashdot.org/story/26/02/13/197235/annas-archive-quietly-releases-millions-of-spotify-tracks-despite-legal-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-14, 01:41:51](https://lobste.rs/s/8wck2c/ai_hater_s_guide_code_with_llms_overview) - [The AI hater&apos;s guide to code with LLMs (The Overview)](https://aredridel.dinhe.net/2026/02/12/the-ai-haters-guide-to-code-with-llms/)
* [2026-02-14, 01:03:28](https://news.ycombinator.com/item?id=47010147) - [Discord: A case study in performance optimization](https://newsletter.fullstack.zip/p/discord-a-case-study-in-performance)
* [2026-02-14, 00:37:53](https://news.ycombinator.com/item?id=47009949) - [An AI agent published a hit piece on me – more things have happened](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-2/)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 23:49:14](https://lobste.rs/s/fynfup/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers](https://dacav.org/projects/supercazzola/)
* [2026-02-13, 23:34:09](https://news.ycombinator.com/item?id=47009327) - [IBM tripling entry-level jobs after finding the limits of AI adoption](https://fortune.com/2026/02/13/tech-giant-ibm-tripling-gen-z-entry-level-hiring-according-to-chro-rewriting-jobs-ai-era/)
* [2026-02-13, 23:30:00](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Detroit Automakers Take $50 Billion Hit](https://tech.slashdot.org/story/26/02/13/191242/detroit-automakers-take-50-billion-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-13, 23:21:58](https://news.ycombinator.com/item?id=47009195) - [Show HN: Open Notes – Community Notes-style context for Discord](https://opennotes.ai/discord-bot)
* [2026-02-13, 22:40:28](https://news.ycombinator.com/item?id=47008821) - [Launching Interop 2026](https://hacks.mozilla.org/2026/02/launching-interop-2026/)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 18:18:48](https://news.ycombinator.com/item?id=47005856) - [The consequences of task switching in supervisory programming](https://martinfowler.com/fragments/2026-02-13.html)
* [2026-02-13, 18:09:21](https://lobste.rs/s/jcio2j/evolving_git_for_next_decade) - [Evolving Git for the next decade](https://lwn.net/SubscriberLink/1057561/bddc1e61152fadf6/)
* [2026-02-13, 16:42:04](https://news.ycombinator.com/item?id=47004689) - [Instagram&apos;s URL Blackhole](https://medium.com/@shredlife/instagrams-url-blackhole-c1733e081664)
* [2026-02-13, 16:08:13](https://lobste.rs/s/uyjjtz/microgpt) - [microgpt](http://karpathy.github.io/2026/02/12/microgpt/)
* [2026-02-13, 15:09:58](https://lobste.rs/s/kegsv1/resizing_windows_on_macos_tahoe_saga) - [Resizing windows on macOS Tahoe – the saga continues](https://noheger.at/blog/2026/02/12/resizing-windows-on-macos-tahoe-the-saga-continues/)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:13:23](https://lobste.rs/s/9ltmes/moss_kernel_rust_linux_compatible_kernel) - [moss-kernel: Rust Linux-compatible kernel](https://github.com/hexagonal-sun/moss-kernel)
* [2026-02-13, 13:14:23](https://lobste.rs/s/wqzxyu/hare_0_26_0_released) - [Hare 0.26.0 released](https://harelang.org/blog/2026-02-13-hare-0.26.0-released/)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 08:53:51](https://news.ycombinator.com/item?id=47000535) - [Zvec: A lightweight, fast, in-process vector database](https://github.com/alibaba/zvec)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
* [2026-02-12, 20:04:00](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss) - [Byte Magazine Artist Robert Tinney, Who Illustrated the Birth of PCs, Dies at 78](https://soylentnews.org/article.pl?sid=26/02/12/0316208&amp;from=rss)
* [2026-02-12, 15:23:00](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss) - [Malicious Packages for dYdX Cryptocurrency Exchange Empties User Wallets](https://soylentnews.org/article.pl?sid=26/02/11/1346239&amp;from=rss)
* [2026-02-12, 10:33:00](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss) - [Terry Pratchett&apos;s Novels May Have Held Clues to His Dementia a Decade Before Diagnosis](https://soylentnews.org/article.pl?sid=26/02/10/0833231&amp;from=rss)
* [2026-02-12, 05:48:00](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss) - [MIT Scientists Build Terahertz Microscope That Reveals Hidden Superconducting Motion](https://soylentnews.org/article.pl?sid=26/02/10/0830234&amp;from=rss)
* [2026-02-12, 01:07:00](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss) - [EU Interferes In Its Own Elections And Ours, Say US Tech Bros](https://soylentnews.org/politics/article.pl?sid=26/02/10/0826224&amp;from=rss)
* [2026-02-11, 20:23:00](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss) - [After a $26 Billion Hit, Stellantis Shifts Focus Back to What Buyers Want](https://soylentnews.org/article.pl?sid=26/02/10/0820248&amp;from=rss)
* [2026-02-11, 17:31:48](https://news.ycombinator.com/item?id=46977967) - [Show HN: MOL – A programming language where pipelines trace themselves](https://github.com/crux-ecosystem/mol-lang)
* [2026-02-11, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss) - [Discord Will Require a Face Scan or ID for Full Access Next Month](https://soylentnews.org/article.pl?sid=26/02/10/0818222&amp;from=rss)
* [2026-02-11, 10:53:00](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss) - [Newly Discovered Sungrazing Comet C/2026 A1 (MAPS) Could be the Brightest of the Year](https://soylentnews.org/article.pl?sid=26/02/10/036255&amp;from=rss)
* [2026-02-11, 10:31:21](https://news.ycombinator.com/item?id=46973299) - [Flood Fill vs. The Magic Circle](https://www.robinsloan.com/winter-garden/magic-circle/)
* [2026-02-11, 06:05:00](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss) - [Microsoft Does Something Useful, Adds Sysmon to Windows](https://soylentnews.org/article.pl?sid=26/02/10/0257251&amp;from=rss)
* [2026-02-11, 04:12:00](https://news.ycombinator.com/item?id=46970733) - [5,300-year-old &apos;bow drill&apos; rewrites story of ancient Egyptian tools](https://www.ncl.ac.uk/press/articles/latest/2026/02/ancientegyptiandrillbit/)
* [2026-02-11, 01:20:00](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss) - [Ask SN - \&quot;Opt-Out Signal Honored\&quot; - Screen Message](https://soylentnews.org/article.pl?sid=26/02/10/0251250&amp;from=rss)
