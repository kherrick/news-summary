# [News Summary](https://kherrick.github.io/news-summary/)

## Technology & Innovation

* [Google Announces Gemini 3.1 Pro For 'Complex Problem-Solving'](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's latest AI advancement, Gemini 3.1 Pro, aims to tackle complex problem-solving challenges, showcasing cutting-edge capabilities in artificial intelligence.

* [OpenClaw Security Fears Lead Meta, Other AI Firms To Restrict Its Use](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns over OpenClaw's security have led companies like Meta to limit the tool's application, highlighting ongoing debates around AI and safety.

* [Minecraft Java Is Switching From OpenGL To Vulkan](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The popular game transitions its graphics backend to Vulkan for better performance and potential feature expansions.

* [Microsoft's New 10,000-Year Data Storage Medium: Glass](https://hardware.slashdot.org/story/26/02/19/1939246/microsofts-new-10000-year-data-storage-medium-glass?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft unveils a revolutionary glass-based medium capable of preserving data for millennia.

* [AI is not a coworker, it's an exoskeleton](https://www.kasava.dev/blog/ai-as-exoskeleton) - An argument highlighting AI as a tool augmenting human abilities rather than replacing jobs.

## Artificial Intelligence and Ethics

* [Accenture Links Staff Promotions To Use of AI Tools](https://slashdot.org/story/26/02/19/1622257/accenture-links-staff-promotions-to-use-of-ai-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Accenture incorporates AI usage into its employee performance evaluations.

* [New Study Tracks How Businesses Quietly Replaced Freelancers With AI Tools](https://slashdot.org/story/26/02/19/1735218/new-study-tracks-how-businesses-quietly-replaced-freelancers-with-ai-tools?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study charts the paradigm shift as businesses opt for AI over human freelancers.

* [LLM-Generated Passwords Look Strong but Crack in Hours, Researchers Find](https://it.slashdot.org/story/26/02/19/1842201/llm-generated-passwords-look-strong-but-crack-in-hours-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research reveals vulnerabilities in AI-generated passwords, calling into question their security.

* [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/) - Criticism of AI's impact on human creativity and mundane overreliance.

## Policy and Regulation

* [US Plans Online Portal To Bypass Content Bans In Europe and Elsewhere](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The US strategizes on developing a portal to sidestep content restrictions globally.

* [California's New Bill Requires DOJ-Approved 3D Printers That Report on Themselves](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - California introduces legislation enforcing self-reporting mechanisms for 3D printers.

* [IRS Loses 40% of IT Staff, 80% of Tech Leaders In 'Efficiency' Shakeup](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major tech overhaul at the IRS sees a significant reduction in staff and leadership.

## Society and Culture

* [Single vaccine could protect against all coughs, colds and flus](https://www.bbc.com/news/articles/cx2g8rz7yedo) - Scientists develop a universal vaccine to tackle common respiratory illnesses.

* [Bafta To Reward 'Human Creativity' as Film and TV Grapples With AI](https://entertainment.slashdot.org/story/26/02/19/1911203/bafta-to-reward-human-creativity-as-film-and-tv-grapples-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - BAFTA adds a new category to recognize and uphold uniquely human creativity in an era of increasing AI involvement.

* [Dinosaur Food: 100M year old foods we still eat today (2022)](https://borischerny.com/food/2022/01/17/Dinosaur-food.html) - A glimpse into ancient diets and their lasting impact on today's culinary choices.

## Historical and Scientific Discoveries

* [Archaeologists find possible first direct evidence of Hannibal's war elephants](https://www.smithsonianmag.com/smart-news/archaeologists-unearthed-a-2200-year-old-bone-they-say-it-could-be-the-first-direct-evidence-of-hannibals-legendary-war-elephants-180988185/) - New discoveries could confirm the use of war elephants by the Carthaginian general Hannibal over two millennia ago.

* [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&from=rss) - Scientists showcase a fluid capable of storing solar energy for long-term usage.

* [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&from=rss) - A dazzling exhibition of China's advancements in humanoid robotics during their major cultural celebration.

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

* [2026-02-20, 02:02:00](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Plans Online Portal To Bypass Content Bans In Europe and Elsewhere](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 01:25:00](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s New Bill Requires DOJ-Approved 3D Printers That Report on Themselves](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:45:00](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Gemini 3.1 Pro For &apos;Complex Problem-Solving&apos;](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:05:09](https://lobste.rs/s/zzlxaa/lindenmayer_systems) - [Lindenmayer Systems](https://justinpombrio.net/2026/02/16/l-systems.html)
* [2026-02-20, 00:02:00](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenClaw Security Fears Lead Meta, Other AI Firms To Restrict Its Use](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 23:20:00](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minecraft Java Is Switching From OpenGL To Vulkan](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 23:12:15](https://lobste.rs/s/odtjwd/scheme_shell_1994) - [A Scheme Shell (1994)](https://publications.csail.mit.edu/lcs/pubs/pdf/MIT-LCS-TR-635.pdf)
* [2026-02-19, 23:09:03](https://lobste.rs/s/zpotiy/hold_on_your_hardware) - [Hold on to Your Hardware](https://マリウス.com/hold-on-to-your-hardware/)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 22:40:00](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Loses 40% of IT Staff, 80% of Tech Leaders In &apos;Efficiency&apos; Shakeup](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 22:11:50](https://lobste.rs/s/9zos31/every_app_you_ve_built_is_etl_pipeline_you) - [Every app you&apos;ve built is an ETL pipeline (you just didn&apos;t call it that)](https://www.inngest.com/blog/etl-via-inngest)
* [2026-02-19, 22:08:24](https://news.ycombinator.com/item?id=47080267) - [Single vaccine could protect against all coughs, colds and flus](https://www.bbc.com/news/articles/cx2g8rz7yedo)
* [2026-02-19, 22:02:00](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Grilled On Usage Goals and Underage Users At California Trial](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 21:55:53](https://lobste.rs/s/7xjjol/towards_real_world_industrial_scale) - [Towards Real-World Industrial-Scale Verification: LLM-Driven Theorem Proving on seL4](https://arxiv.org/abs/2602.08384)
* [2026-02-19, 21:30:04](https://news.ycombinator.com/item?id=47079718) - [Show HN: Ghostty-based terminal with vertical tabs and notifications](https://github.com/manaflow-ai/cmux)
* [2026-02-19, 21:21:00](https://slashdot.org/story/26/02/19/1945205/chinas-hottest-app-of-2026-just-asks-if-youre-still-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Hottest App of 2026 Just Asks If You&apos;re Still Alive](https://slashdot.org/story/26/02/19/1945205/chinas-hottest-app-of-2026-just-asks-if-youre-still-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 20:56:23](https://news.ycombinator.com/item?id=47079222) - [We&apos;re no longer attracting top talent: the brain drain killing American science](https://www.theguardian.com/us-news/2026/feb/19/trump-science-funding-cuts)
* [2026-02-19, 20:45:00](https://hardware.slashdot.org/story/26/02/19/1939246/microsofts-new-10000-year-data-storage-medium-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s New 10,000-Year Data Storage Medium: Glass](https://hardware.slashdot.org/story/26/02/19/1939246/microsofts-new-10000-year-data-storage-medium-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 20:32:09](https://news.ycombinator.com/item?id=47078840) - [Overall, the colorectal cancer story is encouraging](https://www.hankgreen.com/crc)
* [2026-02-19, 20:21:23](https://lobste.rs/s/df1p8i/resurrecting_why_s_dream) - [Resurrecting _why&apos;s Dream](https://schwadlabs.io/blog/resurrecting-whys-dream)
* [2026-02-19, 20:05:00](https://tech.slashdot.org/story/26/02/19/1924208/europes-labor-laws-are-strangling-its-ability-to-innovate-new-analysis-argues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Labor Laws Are Strangling Its Ability To Innovate, New Analysis Argues](https://tech.slashdot.org/story/26/02/19/1924208/europes-labor-laws-are-strangling-its-ability-to-innovate-new-analysis-argues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 19:55:11](https://news.ycombinator.com/item?id=47078324) - [AI is not a coworker, it&apos;s an exoskeleton](https://www.kasava.dev/blog/ai-as-exoskeleton)
* [2026-02-19, 19:42:31](https://news.ycombinator.com/item?id=47078167) - [Micropayments as a reality check for news sites](https://blog.zgp.org/micropayments-as-a-reality-check-for-news-sites/)
* [2026-02-19, 19:25:00](https://entertainment.slashdot.org/story/26/02/19/1911203/bafta-to-reward-human-creativity-as-film-and-tv-grapples-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bafta To Reward &apos;Human Creativity&apos; as Film and TV Grapples With AI](https://entertainment.slashdot.org/story/26/02/19/1911203/bafta-to-reward-human-creativity-as-film-and-tv-grapples-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 19:09:38](https://lobste.rs/s/qsypky/concrete_syntax_matters_actually) - [Concrete syntax matters, actually](https://www.youtube.com/live/kQjrcSMYpaA)
* [2026-02-19, 18:45:21](https://lobste.rs/s/fgkcxo/ai_makes_you_boring) - [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/)
* [2026-02-19, 18:45:00](https://it.slashdot.org/story/26/02/19/1842201/llm-generated-passwords-look-strong-but-crack-in-hours-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LLM-Generated Passwords Look Strong but Crack in Hours, Researchers Find](https://it.slashdot.org/story/26/02/19/1842201/llm-generated-passwords-look-strong-but-crack-in-hours-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 18:42:51](https://news.ycombinator.com/item?id=47077383) - [Farewell, Rust for web](https://yieldcode.blog/post/farewell-rust/)
* [2026-02-19, 18:31:50](https://news.ycombinator.com/item?id=47077245) - [Archaeologists find possible first direct evidence of Hannibal&apos;s war elephants](https://www.smithsonianmag.com/smart-news/archaeologists-unearthed-a-2200-year-old-bone-they-say-it-could-be-the-first-direct-evidence-of-hannibals-legendary-war-elephants-180988185/)
* [2026-02-19, 18:12:16](https://news.ycombinator.com/item?id=47076966) - [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/)
* [2026-02-19, 18:10:00](https://news.slashdot.org/story/26/02/19/182207/a-half-century-of-us-labor-data-shows-steady-retreat-from-evening-and-night-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Half-Century of US Labor Data Shows Steady Retreat From Evening and Night Work](https://news.slashdot.org/story/26/02/19/182207/a-half-century-of-us-labor-data-shows-steady-retreat-from-evening-and-night-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:47:25](https://news.ycombinator.com/item?id=47076659) - [A terminal weather app with ASCII animations driven by real-time weather data](https://github.com/Veirt/weathr)
* [2026-02-19, 17:35:00](https://slashdot.org/story/26/02/19/1735218/new-study-tracks-how-businesses-quietly-replaced-freelancers-with-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Tracks How Businesses Quietly Replaced Freelancers With AI Tools](https://slashdot.org/story/26/02/19/1735218/new-study-tracks-how-businesses-quietly-replaced-freelancers-with-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 17:15:20](https://lobste.rs/s/q4ykw7/missing_semester_your_cs_education) - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
* [2026-02-19, 17:04:20](https://lobste.rs/s/ailcbn/netbase_port_netbsd_utilities_for_linux) - [Netbase a port of the netbsd utilities for linux](https://github.com/littlefly365/Netbase)
* [2026-02-19, 16:54:23](https://lobste.rs/s/jkvtew/choosing_language_based_on_its_syntax) - [Choosing a Language Based on its Syntax?](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)
* [2026-02-19, 16:45:00](https://slashdot.org/story/26/02/19/1622257/accenture-links-staff-promotions-to-use-of-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Accenture Links Staff Promotions To Use of AI Tools](https://slashdot.org/story/26/02/19/1622257/accenture-links-staff-promotions-to-use-of-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 16:13:36](https://lobste.rs/s/vrru3d/using_browser_s_canvas_for_data) - [Using the Browser’s &lt;canvas&gt; for Data Compression](https://jstrieb.github.io/posts/canvas-compress/)
* [2026-02-19, 16:07:14](https://news.ycombinator.com/item?id=47075245) - [Mark Zuckerberg grilled on usage goals and underage users at California trial](https://www.wsj.com/us-news/law/meta-mark-zuckerberg-social-media-trial-0e9a7fa0)
* [2026-02-19, 15:54:14](https://news.ycombinator.com/item?id=47075124) - [Show HN: Micasa – track your house from the terminal](https://micasa.dev)
* [2026-02-19, 15:30:42](https://news.ycombinator.com/item?id=47074869) - [Dinosaur Food: 100M year old foods we still eat today (2022)](https://borischerny.com/food/2022/01/17/Dinosaur-food.html)
* [2026-02-19, 15:25:00](https://lobste.rs/s/rn4g9a/linux_cve_assignment_process) - [Linux CVE assignment process](http://www.kroah.com/log/blog/2026/02/16/linux-cve-assignment-process/)
* [2026-02-19, 15:19:57](https://news.ycombinator.com/item?id=47074735) - [Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
* [2026-02-19, 14:52:18](https://news.ycombinator.com/item?id=47074389) - [America vs. Singapore: You can&apos;t save your way out of economic shocks](https://www.governance.fyi/p/america-vs-singapore-you-cant-save)
* [2026-02-19, 14:14:14](https://news.ycombinator.com/item?id=47073947) - [Measuring AI agent autonomy in practice](https://www.anthropic.com/research/measuring-agent-autonomy)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 13:23:02](https://lobste.rs/s/pz9jrj/salt_systems_programming) - [Salt: Systems programming, mathematically verified](https://salt-lang.dev/)
* [2026-02-19, 12:43:22](https://lobste.rs/s/uejqpb/lilush_static_luajit_runtime_with) - [Lilush: A static LuaJIT runtime with batteries](https://lilush.link/)
* [2026-02-19, 12:36:00](https://news.ycombinator.com/item?id=47073112) - [Pebble Production: February Update](https://repebble.com/blog/february-pebble-production-and-software-updates)
* [2026-02-19, 12:24:33](https://news.ycombinator.com/item?id=47073044) - [Coding Tricks Used in the C64 Game Seawolves (2025)](https://kodiak64.co.uk/blog/seawolves-technical-tricks)
* [2026-02-19, 12:16:07](https://lobste.rs/s/bzqteq/paged_out_8) - [Paged Out! #8](https://pagedout.institute/download/PagedOut_008.pdf)
* [2026-02-19, 12:13:44](https://news.ycombinator.com/item?id=47072968) - [Paged Out Issue #8 [pdf]](https://pagedout.institute/download/PagedOut_008.pdf)
* [2026-02-19, 11:54:21](https://news.ycombinator.com/item?id=47072863) - [Show HN: Mini-Diarium - An encrypted, local, cross-platform journaling app](https://github.com/fjrevoredo/mini-diarium)
* [2026-02-19, 11:07:15](https://news.ycombinator.com/item?id=47072539) - [Bridging Elixir and Python with Oban](https://oban.pro/articles/bridging-with-oban)
* [2026-02-19, 10:57:56](https://lobste.rs/s/eos5kb/pg_here_run_local_postgresql_instance) - [pg-here: Run a local PostgreSQL instance in your project folder with one command](https://github.com/mayfer/pg-here)
* [2026-02-19, 10:55:13](https://news.ycombinator.com/item?id=47072444) - [Show HN: A physically-based GPU ray tracer written in Julia](https://makie.org/website/blogposts/raytracing/)
* [2026-02-19, 09:59:09](https://lobste.rs/s/h75wx0/state_clojure_2025_results) - [State of Clojure 2025 Results](https://clojure.org/news/2026/02/18/state-of-clojure-2025)
* [2026-02-19, 08:44:35](https://lobste.rs/s/6b26dm/tuple_spaces) - [Tuple Spaces](https://www.mcs.anl.gov/~itf/dbpp/text/node44.html#SECTION02550000000000000000)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-19, 01:09:04](https://lobste.rs/s/yyqxg6/how_openai_us_government_persona_built) - [how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds](https://vmfunc.re/blog/persona/)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 22:34:38](https://lobste.rs/s/rrlcfb/why_i_don_t_think_agi_is_imminent) - [Why I don&apos;t think AGI is imminent](https://dlants.me/agi-not-imminent.html)
* [2026-02-18, 22:25:13](https://news.ycombinator.com/item?id=47067270) - [US plans online portal to bypass content bans in Europe and elsewhere](https://www.reuters.com/world/us-plans-online-portal-bypass-content-bans-europe-elsewhere-2026-02-18/)
* [2026-02-18, 22:21:39](https://lobste.rs/s/zpifkh/notes_on_clarifying_man_pages) - [Notes on clarifying man pages](https://jvns.ca/blog/2026/02/18/man-pages/)
* [2026-02-18, 20:17:21](https://lobste.rs/s/m2ouss/current_rss_reader) - [Current - An RSS reader](https://www.terrygodier.com/current)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 17:48:18](https://lobste.rs/s/zk2u9e/dns_persist_01_new_model_for_dns_based) - [DNS-PERSIST-01: A New Model for DNS-based Challenge Validation](https://letsencrypt.org/2026/02/18/dns-persist-01.html)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 09:28:29](https://lobste.rs/s/rfcbij/15_years_later_microsoft_morged_my) - [15+ years later, Microsoft morged my diagram](https://nvie.com/posts/15-years-later/)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 16:14:50](https://news.ycombinator.com/item?id=47049121) - [Level of Detail](https://phinze.com/writing/level-of-detail)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-17, 03:23:16](https://news.ycombinator.com/item?id=47043345) - [Almost Every infrastructure decision I endorse or regret after 4 years](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 22:35:50](https://news.ycombinator.com/item?id=47041294) - [My 1981 adventure game is now a multimedia extravaganza](https://technologizer.com/home/2026/02/16/arctic-adventure-2026/)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 18:37:39](https://news.ycombinator.com/item?id=47038491) - [Type-based alias analysis in the Toy Optimizer](https://bernsteinbear.com/blog/toy-tbaa/)
* [2026-02-16, 17:57:46](https://news.ycombinator.com/item?id=47038032) - [Don&apos;t Trust the Salt: AI Summarization, Multilingual Safety, and LLM Guardrails](https://royapakzad.substack.com/p/multilingual-llm-evaluation-to-guardrails)
* [2026-02-16, 17:35:00](https://news.ycombinator.com/item?id=47037781) - [Zero downtime migrations at petabyte scale (2024)](https://planetscale.com/blog/zero-downtime-migrations-at-petabyte-scale)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
