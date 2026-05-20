# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Software Vulnerabilities

* [Google Publishes Exploit Code Threatening Millions of Chromium Users](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google raises concerns by publishing a previously undisclosed exploit code, potentially jeopardizing millions of Chromium users.

* [GitHub's Internal Repos Breached Via Employee's Use of Malicious VS Code Extension](https://it.slashdot.org/story/26/05/20/197246/githubs-internal-repos-breached-via-employees-use-of-malicious-vs-code-extension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - GitHub investigates a breach affecting internal repositories due to an employee inadvertently using a malicious VS Code extension.

* [Logic bug in the Linux kernel's __ptrace_may_access() function (CVE-2026-46333)](https://cdn2.qualys.com/advisory/2026/05/20/cve-2026-46333-ptrace.txt) - A critical vulnerability in the Linux kernel's `__ptrace_may_access()` function, CVE-2026-46333, has been identified and could pose severe security risks.

* [Chromium publishes fixed exploit 4 years later, turns out it's actually unfixed](https://infosec.exchange/@rebane2001/116606719764376414) - Chromium faces backlash after a previously reported exploit was believed to be fixed, only to discover it's still unfixed four years later.

* [GitHub confirms breach of 3,800 repos via malicious VSCode extension](https://www.bleepingcomputer.com/news/security/github-confirms-breach-of-3-800-repos-via-malicious-vscode-extension/) - Malicious VSCode extensions have reportedly led to a breach of around 3,800 repositories on GitHub.

* [Yearslong fight over users' right to tweak smart TV software heads to trial](https://arstechnica.com/gadgets/2026/05/inside-the-fight-to-force-vizio-to-share-linux-based-source-code-for-its-tvs-os/) - A legal battle over user rights to tweak Linux-based smart TV software moves to trial.

* [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - A widely-downloaded open-source package faces scrutiny after reports of stolen user credentials.

## Artificial Intelligence and Machine Learning Advances

* [PopuLoRA: Co-Evolving LLM Populations for Reasoning Self-Play](https://vmax.ai/team/populora-co-evolving-llm-populations-for-reasoning-self-play) - Researchers discuss PopuLoRA, a framework for co-evolving large language models (LLMs) to enhance reasoning capabilities.

* [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) - A cutting-edge OpenAI model challenges conventional wisdom by disproving a foundational conjecture in mathematic geometry.

* [Google’s AI Studio Now Lets Anyone Build Android Apps In Minutes](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's AI Studio introduces an innovative solution for creating Android apps rapidly using artificial intelligence.

## Space Exploration and Frontiers

* [Webb Discovers One of the Universe's First Galaxies](https://science.slashdot.org/story/26/05/20/022206/webb-discovers-one-of-the-universes-first-galaxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The James Webb Space Telescope has identified one of the earliest galaxies formed in the universe, giving insights into the origins of cosmic structures.

* [Starship's Twelfth Flight Test](https://www.spacex.com/launches/starship-flight-12) - SpaceX's Starship undergoes its twelfth flight test, showcasing advancements in space travel.

* [NASA's Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - NASA highlights how the Psyche spacecraft leveraged Mars' gravitational pull for its journey to study a metal asteroid.

## Emerging Trends in Technology and Development

* [Node.js 26.0.0 (Now with Temporal)](https://nodejs.org/en/blog/release/v26.0.0) - The latest release of Node.js introduces native support for Temporal, enhancing date and time handling.

* [Regional Winners of Prestigious Literary Prize Suspected of Using Chatbots](https://slashdot.org/story/26/05/20/0636240/regional-winners-of-prestigious-literary-prize-suspected-of-using-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy erupts as chatbot usage is suspected among winning authors of a renowned literary competition.

* [RHEL 10.2 Released With New AI Command Line Assistance](https://linux.slashdot.org/story/26/05/20/203252/rhel-102-released-with-new-ai-command-line-assistance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Red Hat unveils RHEL 10.2, introducing AI-powered command-line assistance for enhanced usability.

* [Show HN: CPU-only transcription for YouTube, TikTok, X, Instagram videos](https://github.com/kouhxp/yapsnap) - A new tool offers CPU-based transcription for popular platform videos without requiring GPUs.

## Cultural and Social Impacts of Technology

* [Meta blocks human rights accounts from reaching audiences in Saudi Arabia, UAE](https://www.alqst.org/ar/posts/1190) - Meta faces criticism for allegedly restricting human rights advocacy accounts from accessing audiences in Saudi Arabia and the UAE.

* [Minnesota Becomes First State To Ban Prediction Markets](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Minnesota leads the nation in prohibiting prediction markets, exploring its economic and ethical implications.

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

* [2026-05-20, 22:00:00](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Publishes Exploit Code Threatening Millions of Chromium Users](https://it.slashdot.org/story/26/05/20/2013252/google-publishes-exploit-code-threatening-millions-of-chromium-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 21:41:54](https://news.ycombinator.com/item?id=48214558) - [Starship&apos;s Twelfth Flight Test](https://www.spacex.com/launches/starship-flight-12)
* [2026-05-20, 21:33:18](https://news.ycombinator.com/item?id=48214449) - [Google Declaring War on the Web](https://tante.cc/2026/05/20/on-google-declaring-war-on-the-web/)
* [2026-05-20, 21:28:28](https://news.ycombinator.com/item?id=48214399) - [Show HN: CPU-only transcription for YouTube, TikTok, X, Instagram videos](https://github.com/kouhxp/yapsnap)
* [2026-05-20, 21:14:03](https://news.ycombinator.com/item?id=48214215) - [GitHub&apos;s take on age assurance for developers](https://github.blog/news-insights/policy-news-and-insights/why-age-assurance-laws-matter-for-developers/)
* [2026-05-20, 21:11:55](https://news.ycombinator.com/item?id=48214188) - [PopuLoRA: Co-Evolving LLM Populations for Reasoning Self- Play](https://vmax.ai/team/populora-co-evolving-llm-populations-for-reasoning-self-play)
* [2026-05-20, 21:00:00](https://linux.slashdot.org/story/26/05/20/203252/rhel-102-released-with-new-ai-command-line-assistance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RHEL 10.2 Released With New AI Command Line Assistance](https://linux.slashdot.org/story/26/05/20/203252/rhel-102-released-with-new-ai-command-line-assistance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 20:49:59](https://news.ycombinator.com/item?id=48213933) - [SpaceX S-1](https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm)
* [2026-05-20, 20:29:05](https://lobste.rs/s/e7lsqn/chromium_publishes_fixed_exploit_4_years) - [Chromium publishes fixed exploit 4 years later, turns out it&apos;s actually unfixed](https://infosec.exchange/@rebane2001/116606719764376414)
* [2026-05-20, 20:28:18](https://news.ycombinator.com/item?id=48213651) - [Colorado Amended SB051 (Age Verification Bill) to Exclude Open Source Projects](https://legiscan.com/CO/bill/SB051/2026)
* [2026-05-20, 20:13:46](https://lobste.rs/s/omounu/who_builds_house_without_drawing) - [Who Builds a House Without Drawing Blueprints? (2015)](https://cacm.acm.org/opinion/who-builds-a-house-without-drawing-blueprints/)
* [2026-05-20, 20:12:38](https://lobste.rs/s/garq37/why_does_arrow_operator_c_exist) - [Why does the arrow (-&gt;) operator in C exist?](https://stackoverflow.com/questions/13366083/why-does-the-arrow-operator-in-c-exist)
* [2026-05-20, 20:00:00](https://it.slashdot.org/story/26/05/20/197246/githubs-internal-repos-breached-via-employees-use-of-malicious-vs-code-extension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub&apos;s Internal Repos Breached Via Employee&apos;s Use of Malicious VS Code Extension](https://it.slashdot.org/story/26/05/20/197246/githubs-internal-repos-breached-via-employees-use-of-malicious-vs-code-extension?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 19:38:25](https://news.ycombinator.com/item?id=48212992) - [Not alive, but not dead: disembodied human brains used for drug testing](https://www.science.org/content/article/not-alive-not-dead-disembodied-human-brains-used-drug-testing)
* [2026-05-20, 19:20:32](https://lobste.rs/s/k8mkgs/xss_is_deadly_for_passkeys_hidden_risk) - [XSS Is Deadly for Passkeys: The Hidden Risk of Attestation None](https://scotthelme.co.uk/xss-is-deadly-for-passkeys-the-hidden-risk-of-attestation-none/)
* [2026-05-20, 19:05:30](https://news.ycombinator.com/item?id=48212493) - [An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
* [2026-05-20, 19:04:37](https://lobste.rs/s/nwdn3w/logic_bug_linux_kernel_s_ptrace_may_access) - [Logic bug in the Linux kernel&apos;s __ptrace_may_access() function (CVE-2026-46333)](https://cdn2.qualys.com/advisory/2026/05/20/cve-2026-46333-ptrace.txt)
* [2026-05-20, 19:00:00](https://yro.slashdot.org/story/26/05/20/1853257/annas-archive-hit-with-global-domain-takedown-order?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anna&apos;s Archive Hit With Global Domain Takedown Order](https://yro.slashdot.org/story/26/05/20/1853257/annas-archive-hit-with-global-domain-takedown-order?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 18:57:27](https://lobste.rs/s/rimd7l/yearslong_fight_over_users_right_tweak) - [Yearslong fight over users&apos; right to tweak smart TV software heads to trial](https://arstechnica.com/gadgets/2026/05/inside-the-fight-to-force-vizio-to-share-linux-based-source-code-for-its-tvs-os/)
* [2026-05-20, 18:52:40](https://lobste.rs/s/akyfrt/notes_on_i2c) - [Notes on I2C](https://rana-emaan.com/read/notes/i2c/)
* [2026-05-20, 18:50:59](https://news.ycombinator.com/item?id=48212279) - [Tracking Starbucks&apos; &apos;widely recyclable&apos; cups: none ended up at recycling](https://www.beyondplastics.org/press-releases/starbucks-cups-recyclable-report)
* [2026-05-20, 18:48:30](https://news.ycombinator.com/item?id=48212242) - [Node.js 26.0.0 (Now with Temporal)](https://nodejs.org/en/blog/release/v26.0.0)
* [2026-05-20, 18:33:56](https://news.ycombinator.com/item?id=48212046) - [Flipper One Tech Specs](https://docs.flipper.net/one/general/tech-specs)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 18:00:00](https://hardware.slashdot.org/story/26/05/20/1637247/seagate-sparks-memory-sell-off-as-ceo-says-it-would-take-too-long-to-build-new-factories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seagate Sparks Memory Sell-Off As CEO Says It Would &apos;Take Too Long&apos; To Build New Factories](https://hardware.slashdot.org/story/26/05/20/1637247/seagate-sparks-memory-sell-off-as-ceo-says-it-would-take-too-long-to-build-new-factories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 17:48:52](https://news.ycombinator.com/item?id=48211409) - [Qian Xuesen: The missile genius America lost and China gained (2025)](https://www.usni.org/magazines/naval-history/2025/december/missile-genius-america-lost-and-china-gained)
* [2026-05-20, 17:30:15](https://news.ycombinator.com/item?id=48211134) - [Why is Inkwell stuck in review](https://www.manton.org/2026/05/19/why-is-inkwell-stuck-in.html)
* [2026-05-20, 17:00:00](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Yearslong Fight Over Users&apos; Right To Tweak Smart TV Software Heads To Trial](https://yro.slashdot.org/story/26/05/20/1625205/yearslong-fight-over-users-right-to-tweak-smart-tv-software-heads-to-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 16:53:07](https://news.ycombinator.com/item?id=48210615) - [Show HN: Dari-docs – Optimize your docs using parallel coding agents](https://github.com/mupt-ai/dari-docs)
* [2026-05-20, 16:11:09](https://lobste.rs/s/bb8f7o/how_cross_thread_double_free_detection) - [How cross-thread double free detection could work in glibc malloc](https://kallus.org/blog_tcache_key.html)
* [2026-05-20, 16:00:00](https://slashdot.org/story/26/05/20/0636240/regional-winners-of-prestigious-literary-prize-suspected-of-using-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Regional Winners of Prestigious Literary Prize Suspected of Using Chatbots](https://slashdot.org/story/26/05/20/0636240/regional-winners-of-prestigious-literary-prize-suspected-of-using-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 15:39:48](https://news.ycombinator.com/item?id=48209558) - [SBCL: the ultimate assembly code breadboard (2014)](https://pvk.ca/Blog/2014/03/15/sbcl-the-ultimate-assembly-code-breadboard/)
* [2026-05-20, 15:25:45](https://news.ycombinator.com/item?id=48209323) - [Formal Verification Gates for AI Coding Loops](https://reubenbrooks.dev/blog/structural-backpressure-beats-smarter-agents/)
* [2026-05-20, 15:02:39](https://lobste.rs/s/2ruarm/may_2026_fedi_software_vulnerability) - [the may 2026 fedi software vulnerability](https://w.on-t.work/activitypub/may-2026-vulnerability)
* [2026-05-20, 15:00:00](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Studio Now Lets Anyone Build Android Apps In Minutes](https://tech.slashdot.org/story/26/05/20/0224236/googles-ai-studio-now-lets-anyone-build-android-apps-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-20, 14:52:47](https://lobste.rs/s/wqeqgc/c_26_more_function_wrappers) - [C++26: More function wrappers](https://www.sandordargo.com/blog/2026/05/20/cpp26-copyable-function)
* [2026-05-20, 14:46:53](https://lobste.rs/s/xugaho/modulejail_proactively_shrink_linux) - [modulejail: Proactively shrink a Linux host&apos;s kernel-module attack surface by blacklisting every module not currently in use](https://github.com/jnuyens/modulejail/)
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
* [2026-05-20, 04:45:34](https://lobste.rs/s/2xm9a2/if_you_re_just_going_sit_there_doing) - [If you&apos;re just going to sit there doing nothing, at least do nothing correctly (2024)](https://devblogs.microsoft.com/oldnewthing/20240216-00/?p=109409)
* [2026-05-20, 04:25:35](https://lobste.rs/s/n1gytv/why_ruby_still_feels_like_home_after_all) - [Why Ruby Still Feels Like Home After All These Years](https://caio.ca/blog/why-ruby-still-feels-like-home)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-20, 03:30:00](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minnesota Becomes First State To Ban Prediction Markets](https://yro.slashdot.org/story/26/05/20/0121248/minnesota-becomes-first-state-to-ban-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 23:00:00](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Triples Lifetime Subscription Cost To $750](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 22:00:00](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Changes Its Search Box for the First Time in 25 Years](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 21:00:00](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NextEra and Dominion&apos;s $67 Billion Mega-Merger Is All About the Data Centers](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 20:06:09](https://lobste.rs/s/2fqahd/i_am_not_software_engineer) - [I am not a Software Engineer](https://huronbikes.mataroa.blog/blog/i-am-not-a-software-engineer/)
* [2026-05-19, 20:00:00](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Co-Founder Andrej Karpathy Joins Anthropic](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 18:45:35](https://lobste.rs/s/wefsg8/pokemon_gen2_compression_myth) - [Pokemon Gen2 compression myth](https://www.reddit.com/r/TruePokemon/comments/hwluk9/while_it_is_true_that_iwata_did_write_a_new/)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 17:02:39](https://lobste.rs/s/r4xf2n/better_generated_branch_names_with_jj) - [Better generated branch names with jj](https://ddbeck.com/notes/jj-git-push-bookmark-template/)
* [2026-05-19, 14:37:27](https://lobste.rs/s/zotppg/type_out_code) - [Type out the code](https://haskellforall.com/2026/05/type-out-the-code)
* [2026-05-19, 14:29:40](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge) - [What would you want from a forge?](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 13:30:09](https://lobste.rs/s/wwcjoc/openbsd_7_9_released) - [OpenBSD 7.9 released](https://www.openbsd.org/79.html)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
* [2026-05-18, 23:22:00](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss)
* [2026-05-18, 22:33:47](https://news.ycombinator.com/item?id=48186730) - [LoRA and Weight Decay (2023)](https://irhum.github.io/blog/lorawd/)
* [2026-05-18, 18:37:00](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss) - [What Will It Take to Modernize the US Power Grid?](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss)
* [2026-05-18, 14:10:50](https://news.ycombinator.com/item?id=48180173) - [Sharla Boehm, the programmer whose code underpins the Internet](https://www.scientificamerican.com/article/the-programmer-whose-code-underpins-the-internet/)
* [2026-05-18, 13:51:00](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss) - [China Court Rules Against Job Cut From AI](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss)
* [2026-05-18, 09:05:00](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss) - [The Context Window Has Been Shattered: Subquadratic Debuts a 12-Million-Token Window](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss)
* [2026-05-18, 04:38:58](https://news.ycombinator.com/item?id=48175637) - [Étienne Ghys: The Shape of Letters: From Leonardo da Vinci to Donald Knuth](https://www.youtube.com/watch?v=1OIxzewWilc)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-18, 02:04:38](https://news.ycombinator.com/item?id=48174920) - [How fast is N tokens per second really?](https://mikeveerman.github.io/tokenspeed/)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 20:46:57](https://news.ycombinator.com/item?id=48173042) - [Long-term editing of brain circuits using an engineered electrical synapse](https://www.nature.com/articles/s41586-026-10501-y)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
* [2026-05-16, 23:51:00](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss) - [AISLE Discovers CVE-2026-42511: a 21-Year-Old FreeBSD Remote Command Execution Vulnerability](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss)
* [2026-05-16, 19:17:00](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss) - [HP Stuffed a PC Into a Keyboard. We Took it for a Spin](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss)
* [2026-05-16, 14:28:00](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss) - [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
