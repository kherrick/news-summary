# [News Summary](https://kherrick.github.io/news-summary/)

## Security and Vulnerabilities

* [XSS Is Deadly for Passkeys: The Hidden Risk of Attestation None](https://scotthelme.co.uk/xss-is-deadly-for-passkeys-the-hidden-risk-of-attestation-none/) ([Comments](https://lobste.rs/s/k8mkgs/xss_is_deadly_for_passkeys_hidden_risk))

* [Logic bug in the Linux kernel's __ptrace_may_access() function (CVE-2026-46333)](https://cdn2.qualys.com/advisory/2026/05/20/cve-2026-46333-ptrace.txt) ([Comments](https://lobste.rs/s/nwdn3w/logic_bug_linux_kernel_s_ptrace_may_access))

* [GitHub confirms breach of 3,800 repos via malicious VSCode extension](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/) ([Comments](https://news.ycombinator.com/item?id=48207660))

* [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/05/19/0438213&from=rss))

* [modulejail: Proactively shrink a Linux host's kernel-module attack surface by blacklisting every module not currently in use](https://github.com/jnuyens/modulejail/) ([Comments](https://lobste.rs/s/xugaho/modulejail_proactively_shrink_linux))

## AI and Technology Developments

* [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) ([Comments](https://news.ycombinator.com/item?id=48212493))

* [Google's AI Studio Now Lets Anyone Build Android Apps In Minutes](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Node.js 26.0.0 (Now with Temporal)](https://nodejs.org/en/blog/release/v26.0.0) ([Comments](https://news.ycombinator.com/item?id=48212242))

* [Show HN: Lance – image/video generation and understanding in one model](https://github.com/bytedance/Lance) ([Comments](https://news.ycombinator.com/item?id=48209668))

## Science and Space Exploration

* [Webb Discovers One of the Universe's First Galaxies](https://science.slashdot.org/story/26/05/20/022206/webb-discovers-one-of-the-universes-first-galaxies?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/05/20/022206/webb-discovers-one-of-the-universes-first-galaxies?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA's Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/05/18/1730215&from=rss))

## Legal and Regulatory Affairs

* [Yearslong Fight Over Users' Right To Tweak Smart TV Software Heads To Trial](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Tennessee man jailed 37 days for Trump meme wins settlement after lawsuit](https://www.fire.org/news/victory-tennessee-man-jailed-37-days-trump-meme-wins-835000-settlement-after-first-amendment) ([Comments](https://news.ycombinator.com/item?id=48208502))

* [Minnesota Becomes First State To Ban Prediction Markets](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Environmental and Social Issues

* [Tracking Starbucks' 'widely recyclable' cups: none ended up at recycling](https://www.beyondplastics.org/press-releases/starbucks-cups-recyclable-report) ([Comments](https://news.ycombinator.com/item?id=48212279))

* [Meta blocks human rights accounts from reaching audiences in Saudi Arabia, UAE](https://www.alqst.org/ar/posts/1190) ([Comments](https://news.ycombinator.com/item?id=48206768))

* [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=26/05/18/1728202&from=rss))

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

* [2026-05-20, 19:20:32](https://lobste.rs/s/k8mkgs/xss_is_deadly_for_passkeys_hidden_risk) - [XSS Is Deadly for Passkeys: The Hidden Risk of Attestation None](https://scotthelme.co.uk/xss-is-deadly-for-passkeys-the-hidden-risk-of-attestation-none/)
* [2026-05-20, 19:05:30](https://news.ycombinator.com/item?id=48212493) - [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
* [2026-05-20, 19:04:37](https://lobste.rs/s/nwdn3w/logic_bug_linux_kernel_s_ptrace_may_access) - [Logic bug in the Linux kernel&apos;s __ptrace_may_access() function (CVE-2026-46333)](https://cdn2.qualys.com/advisory/2026/05/20/cve-2026-46333-ptrace.txt)
* [2026-05-20, 19:00:00](https://yro.slashdot.org/story/26/05/20/1853257/annas-archive-hit-with-global-domain-takedown-order?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Hit With Global Domain Takedown Order](https://yro.slashdot.org/story/26/05/20/1853257/annas-archive-hit-with-global-domain-takedown-order?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 18:52:40](https://lobste.rs/s/akyfrt/notes_on_i2c) - [Notes on I2C](https://rana-emaan.com/read/notes/i2c/)
* [2026-05-20, 18:50:59](https://news.ycombinator.com/item?id=48212279) - [Tracking Starbucks&apos; &apos;widely recyclable&apos; cups: none ended up at recycling](https://www.beyondplastics.org/press-releases/starbucks-cups-recyclable-report)
* [2026-05-20, 18:48:30](https://news.ycombinator.com/item?id=48212242) - [Node.js 26.0.0 (Now with Temporal)](https://nodejs.org/en/blog/release/v26.0.0)
* [2026-05-20, 18:33:56](https://news.ycombinator.com/item?id=48212046) - [Flipper One Tech Specs](https://docs.flipper.net/one/general/tech-specs)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 18:00:00](https://hardware.slashdot.org/story/26/05/20/1637247/seagate-sparks-memory-sell-off-as-ceo-says-it-would-take-too-long-to-build-new-factories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate Sparks Memory Sell-Off As CEO Says It Would &apos;Take Too Long&apos; To Build New Factories](https://hardware.slashdot.org/story/26/05/20/1637247/seagate-sparks-memory-sell-off-as-ceo-says-it-would-take-too-long-to-build-new-factories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 17:48:52](https://news.ycombinator.com/item?id=48211409) - [Qian Xuesen: The missile genius America lost and China gained (2025)](https://www.usni.org/magazines/naval-history/2025/december/missile-genius-america-lost-and-china-gained)
* [2026-05-20, 17:30:15](https://news.ycombinator.com/item?id=48211134) - [Why is Inkwell stuck in review](https://www.manton.org/2026/05/19/why-is-inkwell-stuck-in.html)
* [2026-05-20, 17:00:00](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Yearslong Fight Over Users&apos; Right To Tweak Smart TV Software Heads To Trial](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 16:27:25](https://news.ycombinator.com/item?id=48210263) - [Apparently Google hates us now](https://twitter.com/pokemoncentral/status/2057123807404638250)
* [2026-05-20, 16:11:09](https://lobste.rs/s/bb8f7o/how_cross_thread_double_free_detection) - [How cross-thread double free detection could work in glibc malloc](https://kallus.org/blog_tcache_key.html)
* [2026-05-20, 16:00:00](https://slashdot.org/story/26/05/20/0636240/regional-winners-of-prestigious-literary-prize-suspected-of-using-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Regional Winners of Prestigious Literary Prize Suspected of Using Chatbots](https://slashdot.org/story/26/05/20/0636240/regional-winners-of-prestigious-literary-prize-suspected-of-using-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 15:45:32](https://news.ycombinator.com/item?id=48209668) - [Show HN: Lance – image/video generation and understanding in one model](https://github.com/bytedance/Lance)
* [2026-05-20, 15:39:48](https://news.ycombinator.com/item?id=48209558) - [SBCL: the ultimate assembly code breadboard (2014)](https://pvk.ca/Blog/2014/03/15/sbcl-the-ultimate-assembly-code-breadboard/)
* [2026-05-20, 15:25:45](https://news.ycombinator.com/item?id=48209323) - [Formal Verification Gates for AI Coding Loops](https://reubenbrooks.dev/blog/structural-backpressure-beats-smarter-agents/)
* [2026-05-20, 15:10:05](https://news.ycombinator.com/item?id=48209105) - [Stable Audio 3](https://arxiv.org/abs/2605.17991)
* [2026-05-20, 15:02:39](https://lobste.rs/s/2ruarm/may_2026_fedi_software_vulnerability) - [the may 2026 fedi software vulnerability](https://w.on-t.work/activitypub/may-2026-vulnerability)
* [2026-05-20, 15:00:00](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Studio Now Lets Anyone Build Android Apps In Minutes](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 14:52:47](https://lobste.rs/s/wqeqgc/c_26_more_function_wrappers) - [C++26: More function wrappers](https://www.sandordargo.com/blog/2026/05/20/cpp26-copyable-function)
* [2026-05-20, 14:51:00](https://news.ycombinator.com/item?id=48208834) - [Show HN: Hocuspocus 4 – self-hosted Yjs collaboration backend](https://github.com/ueberdosis/hocuspocus)
* [2026-05-20, 14:46:53](https://lobste.rs/s/xugaho/modulejail_proactively_shrink_linux) - [modulejail: Proactively shrink a Linux host&apos;s kernel-module attack surface by blacklisting every module not currently in use](https://github.com/jnuyens/modulejail/)
* [2026-05-20, 14:40:42](https://news.ycombinator.com/item?id=48208685) - [Testing distributed systems with AI agents](https://github.com/shenli/distributed-system-testing)
* [2026-05-20, 14:30:47](https://news.ycombinator.com/item?id=48208502) - [Tennessee man jailed 37 days for Trump meme wins settlement after lawsuit](https://www.fire.org/news/victory-tennessee-man-jailed-37-days-trump-meme-wins-835000-settlement-after-first-amendment)
* [2026-05-20, 14:05:11](https://lobste.rs/s/agojmb/golfing_zig_elf_binaries_2025) - [Golfing Zig ELF Binaries (2025)](https://ctf.gg/blog/zig-binary-golfing)
* [2026-05-20, 13:45:05](https://lobste.rs/s/asu0u9/erasing_existentials) - [Erasing Existentials](https://wolfgirl.dev/blog/2026-05-20-erasing-existentials/)
* [2026-05-20, 13:43:37](https://news.ycombinator.com/item?id=48207660) - [GitHub confirms breach of 3,800 repos via malicious VSCode extension](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/)
* [2026-05-20, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - [NASA&apos;s Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss)
* [2026-05-20, 12:57:56](https://lobste.rs/s/anamgr/saying_goodbye_asm_js) - [Saying goodbye to asm.js](https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html)
* [2026-05-20, 12:43:41](https://news.ycombinator.com/item?id=48206768) - [Meta blocks human rights accounts from reaching audiences in Saudi Arabia, UAE](https://www.alqst.org/ar/posts/1190)
* [2026-05-20, 12:20:23](https://lobste.rs/s/i1xwo5/llemdashes) - [LLemdashes](https://wil.to/posts/llemdashes/)
* [2026-05-20, 12:01:56](https://news.ycombinator.com/item?id=48206340) - [Saying Goodbye to Asm.js](https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html)
* [2026-05-20, 11:00:00](https://tech.slashdot.org/story/26/05/20/0212227/google-accused-of-pushing-free-for-life-g-suite-users-onto-paid-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Accused of Pushing &apos;Free For Life&apos; G Suite Users Onto Paid Plans](https://tech.slashdot.org/story/26/05/20/0212227/google-accused-of-pushing-free-for-life-g-suite-users-onto-paid-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 10:57:09](https://news.ycombinator.com/item?id=48205782) - [Google&apos;s AI is being manipulated. The search giant is quietly fighting back](https://www.bbc.com/future/article/20260519-google-tackles-attempts-to-hack-its-ai-results)
* [2026-05-20, 10:47:20](https://news.ycombinator.com/item?id=48205699) - [Map of Metal](https://mapofmetal.com/)
* [2026-05-20, 10:35:02](https://news.ycombinator.com/item?id=48205626) - [Qwen3.7-Max: The Agent Frontier](https://qwen.ai/blog?id=qwen3.7)
* [2026-05-20, 08:37:55](https://news.ycombinator.com/item?id=48204770) - [Incident Report: May 19, 2026 – GCP Account Suspension](https://blog.railway.com/p/incident-report-may-19-2026-gcp-account-outage)
* [2026-05-20, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss) - [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss)
* [2026-05-20, 07:26:17](https://lobste.rs/s/dtcfd6/everything_c_is_undefined_behavior) - [Everything in C is undefined behavior](https://blog.habets.se/2026/05/Everything-in-C-is-undefined-behavior.html)
* [2026-05-20, 07:08:51](https://lobste.rs/s/ges2gt/github_source_code_breach_teampcp_claims) - [GitHub Source Code Breach - TeamPCP Claims Access to Internal Source Code](https://cybersecuritynews.com/github-source-code-breach/)
* [2026-05-20, 07:00:00](https://science.slashdot.org/story/26/05/20/022206/webb-discovers-one-of-the-universes-first-galaxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Webb Discovers One of the Universe&apos;s First Galaxies](https://science.slashdot.org/story/26/05/20/022206/webb-discovers-one-of-the-universes-first-galaxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 06:07:22](https://news.ycombinator.com/item?id=48203698) - [Everything in C is undefined behavior](https://blog.habets.se/2026/05/Everything-in-C-is-undefined-behavior.html)
* [2026-05-20, 04:45:34](https://lobste.rs/s/2xm9a2/if_you_re_just_going_sit_there_doing) - [If you&apos;re just going to sit there doing nothing, at least do nothing correctly (2024)](https://devblogs.microsoft.com/oldnewthing/20240216-00/?p=109409)
* [2026-05-20, 04:25:35](https://lobste.rs/s/n1gytv/why_ruby_still_feels_like_home_after_all) - [Why Ruby Still Feels Like Home After All These Years](https://caio.ca/blog/why-ruby-still-feels-like-home)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-20, 03:30:00](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minnesota Becomes First State To Ban Prediction Markets](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 02:04:54](https://lobste.rs/s/vlrgls/i_ve_built_virtual_museum_with_nearly) - [I&apos;ve built a virtual museum with nearly every operating system you can think of](https://www.youtube.com/watch?v=jqcuqWTxTNw)
* [2026-05-20, 01:43:06](https://news.ycombinator.com/item?id=48202047) - [Japan is gripped by mass allergies. A 1950s project is to blame](https://www.bbc.com/future/article/20260515-the-1950s-blunder-which-causes-mass-hay-fever-in-japan)
* [2026-05-19, 23:13:22](https://lobste.rs/s/b4vpj6/emacs_after_magit) - [Emacs after Magit](https://sdf.org/~pkal/blog/emacs/sans-magit.html)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 23:00:00](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Triples Lifetime Subscription Cost To $750](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 22:00:00](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Changes Its Search Box for the First Time in 25 Years](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 21:00:00](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NextEra and Dominion&apos;s $67 Billion Mega-Merger Is All About the Data Centers](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 20:06:09](https://lobste.rs/s/2fqahd/i_am_not_software_engineer) - [I am not a Software Engineer](https://huronbikes.mataroa.blog/blog/i-am-not-a-software-engineer/)
* [2026-05-19, 20:00:00](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Co-Founder Andrej Karpathy Joins Anthropic](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 19:24:51](https://lobste.rs/s/z2pm16/pgbackrest_will_continue) - [pgBackRest will continue](https://pgbackrest.org/news.html#will-continue)
* [2026-05-19, 19:00:00](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [StanChart To Cut Over 7,000 Jobs, Boost AI To Replace &apos;Lower-Value Human Capital&apos;](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 18:45:35](https://lobste.rs/s/wefsg8/pokemon_gen2_compression_myth) - [Pokemon Gen2 compression myth](https://www.reddit.com/r/TruePokemon/comments/hwluk9/while_it_is_true_that_iwata_did_write_a_new/)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 18:00:00](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Admin Leaked AWS GovCloud Keys On Github](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 17:02:39](https://lobste.rs/s/r4xf2n/better_generated_branch_names_with_jj) - [Better generated branch names with jj](https://ddbeck.com/notes/jj-git-push-bookmark-template/)
* [2026-05-19, 17:00:00](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches Surface Pro 12, Surface Laptop 8 With Intel Chips](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 14:37:27](https://lobste.rs/s/zotppg/type_out_code) - [Type out the code](https://haskellforall.com/2026/05/type-out-the-code)
* [2026-05-19, 14:29:40](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge) - [What would you want from a forge?](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 13:30:09](https://lobste.rs/s/wwcjoc/openbsd_7_9_released) - [OpenBSD 7.9 released](https://www.openbsd.org/79.html)
* [2026-05-19, 12:29:28](https://lobste.rs/s/zsjasr/my_domain_got_abused_on_github_pages) - [My domain got abused on Github Pages](https://meertens.dev/blog/github-enables-domain-abuse/)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
* [2026-05-18, 23:22:00](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss)
* [2026-05-18, 22:33:47](https://news.ycombinator.com/item?id=48186730) - [LoRA and Weight Decay (2023)](https://irhum.github.io/blog/lorawd/)
* [2026-05-18, 18:37:00](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss) - [What Will It Take to Modernize the US Power Grid?](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss)
* [2026-05-18, 14:10:50](https://news.ycombinator.com/item?id=48180173) - [Sharla Boehm, the programmer whose code underpins the Internet](https://www.scientificamerican.com/article/the-programmer-whose-code-underpins-the-internet/)
* [2026-05-18, 14:10:47](https://news.ycombinator.com/item?id=48180172) - [When Fast Fourier Transform Meets Transformer for Image Restoration (2024)](https://github.com/deng-ai-lab/SFHformer)
* [2026-05-18, 13:51:00](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss) - [China Court Rules Against Job Cut From AI](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss)
* [2026-05-18, 09:05:00](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss) - [The Context Window Has Been Shattered: Subquadratic Debuts a 12-Million-Token Window](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-18, 02:04:38](https://news.ycombinator.com/item?id=48174920) - [How fast is N tokens per second really?](https://mikeveerman.github.io/tokenspeed/)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 20:07:14](https://news.ycombinator.com/item?id=48172747) - [Autoregressive next token prediction and KV Cache in transformers](https://medium.com/advanced-deep-learning/autoregressive-next-token-prediction-kv-cache-in-transformers-afad22285baf)
* [2026-05-17, 19:22:42](https://news.ycombinator.com/item?id=48172336) - [Smartmedia Card Spec Opened, available free (2000)](https://www.edn.com/smartmedia-card-interface-spec-opened-available-for-free/#google_vignette)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 15:31:03](https://news.ycombinator.com/item?id=48169818) - [Handling the great code forge fragmentation](https://www.alexselimov.com/posts/forge_fragmentation/)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
* [2026-05-16, 23:51:00](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss) - [AISLE Discovers CVE-2026-42511: a 21-Year-Old FreeBSD Remote Command Execution Vulnerability](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss)
* [2026-05-16, 19:17:00](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss) - [HP Stuffed a PC Into a Keyboard. We Took it for a Spin](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss)
* [2026-05-16, 14:28:00](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss) - [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
