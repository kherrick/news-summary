# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology

* [NASA Chief Classifies Starliner Flight As 'Type A' Mishap, Says Agency Made Mistakes](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA's chief critiques their handling of the Starliner flight, marking it as a significant error.

* [Trump Directs US Government To Prepare Release of Files on Aliens and UFOs](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Eye-catching directive to unveil UFO and alien-related government files.

* [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&from=rss) - Insightful review showing shortfalls in password manager security.

## Developer Tools and Platforms

* [Show HN: Fostrom, an IoT Cloud Platform built for developers](https://fostrom.io/) - Introducing a new cloud platform aimed at IoT developers.

* [Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit](https://github.com/olvvier/apple-silicon-accelerometer) - A deep dive into accelerometer capabilities hiding in Apple Silicon MacBooks.

* [An ARM Homelab Server, or a Minisforum MS-R1 Review](https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/) - A firsthand evaluation of a cost-effective ARM-based homelab server.

## AI and Machine Learning

* [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models) - Promising breakthroughs in speeding up diffusion language models.

* [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/) - A startling account from someone targeted by an AI-generated article.

* [OpenClaw Security Fears Lead Meta, Other AI Firms To Restrict Its Use](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Growing concerns over the security and misuse of AI tools.

## Gaming Innovations

* [Minecraft Java Is Switching From OpenGL To Vulkan](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Transition impacts for Minecraft's rendering framework.

* [How I made a shooter game in 64 KB](https://youtu.be/qht68vFaa1M) - Step inside the process of crafting a compact shooter game.

## Society and Stories

* [Mystery donor gives Japanese city $3.6M in gold bars to fix water system](https://www.bbc.com/news/articles/c3ew5jlqz87o) - An anonymous act of kindness for public infrastructure.

* [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&from=rss) - Controversial Super Bowl campaign cancellation story.

* [China's Hottest App of 2026 Just Asks If You're Still Alive](https://slashdot.org/story/26/02/19/1945205/chinas-hottest-app-of-2026-just-asks-if-youre-still-alive?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploring the rise of an unusual popular app in China.

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

* [2026-02-20, 07:00:00](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Chief Classifies Starliner Flight As &apos;Type A&apos; Mishap, Says Agency Made Mistakes](https://science.slashdot.org/story/26/02/19/2353238/nasa-chief-classifies-starliner-flight-as-type-a-mishap-says-agency-made-mistakes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 06:20:34](https://news.ycombinator.com/item?id=47084431) - [Show HN: Fostrom, an IoT Cloud Platform built for developers](https://fostrom.io/)
* [2026-02-20, 05:06:40](https://news.ycombinator.com/item?id=47084000) - [Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit](https://github.com/olvvier/apple-silicon-accelerometer)
* [2026-02-20, 05:00:00](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Directs US Government To Prepare Release of Files on Aliens and UFOs](https://news.slashdot.org/story/26/02/20/0450230/trump-directs-us-government-to-prepare-release-of-files-on-aliens-and-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 04:46:37](https://news.ycombinator.com/item?id=47083882) - [Fast KV Compaction via Attention Matching](https://arxiv.org/abs/2602.16284)
* [2026-02-20, 04:39:29](https://lobste.rs/s/jmxzcr/how_i_made_shooter_game_64_kb) - [How I made a shooter game in 64 KB](https://youtu.be/qht68vFaa1M)
* [2026-02-20, 04:27:51](https://news.ycombinator.com/item?id=47083735) - [Mystery donor gives Japanese city $3.6M in gold bars to fix water system](https://www.bbc.com/news/articles/c3ew5jlqz87o)
* [2026-02-20, 04:15:58](https://news.ycombinator.com/item?id=47083648) - [Consistency diffusion language models: Up to 14x faster, no quality loss](https://www.together.ai/blog/consistency-diffusion-language-models)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-20, 03:36:56](https://lobste.rs/s/zddzgo/dillo_appreciation_post) - [The Dillo Appreciation Post](https://bobbyhiltz.com/posts/2026/02/dillo-appreciation/)
* [2026-02-20, 03:30:00](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newborn Chicks Connect Sounds With Shapes Just Like Humans, Study Finds](https://science.slashdot.org/story/26/02/19/2254229/newborn-chicks-connect-sounds-with-shapes-just-like-humans-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 03:05:08](https://news.ycombinator.com/item?id=47083145) - [An AI Agent Published a Hit Piece on Me – The Operator Came Forward](https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/)
* [2026-02-20, 02:20:06](https://news.ycombinator.com/item?id=47082854) - [Pi for Excel: AI sidebar add-in for Excel](https://github.com/tmustier/pi-for-excel)
* [2026-02-20, 02:02:00](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Plans Online Portal To Bypass Content Bans In Europe and Elsewhere](https://yro.slashdot.org/story/26/02/19/2247257/us-plans-online-portal-to-bypass-content-bans-in-europe-and-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 01:33:36](https://news.ycombinator.com/item?id=47082548) - [An ARM Homelab Server, or a Minisforum MS-R1 Review](https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/)
* [2026-02-20, 01:31:28](https://lobste.rs/s/b80lmi/reading_undocumented_mems) - [reading the undocumented mems accelerometer on apple silicon macbooks via iokit hid](https://github.com/olvvier/apple-silicon-accelerometer)
* [2026-02-20, 01:28:47](https://news.ycombinator.com/item?id=47082496) - [MuMu Player (NetEase) silently runs 17 reconnaissance commands every 30 minutes](https://gist.github.com/interpiduser5/547d8a7baec436f24b7cce89dd4ae1ea)
* [2026-02-20, 01:25:00](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s New Bill Requires DOJ-Approved 3D Printers That Report on Themselves](https://hardware.slashdot.org/story/26/02/19/2219256/californias-new-bill-requires-doj-approved-3d-printers-that-report-on-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:45:00](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Gemini 3.1 Pro For &apos;Complex Problem-Solving&apos;](https://tech.slashdot.org/story/26/02/19/226258/google-announces-gemini-31-pro-for-complex-problem-solving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 00:05:09](https://lobste.rs/s/zzlxaa/lindenmayer_systems) - [Lindenmayer Systems](https://justinpombrio.net/2026/02/16/l-systems.html)
* [2026-02-20, 00:02:00](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenClaw Security Fears Lead Meta, Other AI Firms To Restrict Its Use](https://it.slashdot.org/story/26/02/19/223226/openclaw-security-fears-lead-meta-other-ai-firms-to-restrict-its-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 23:20:00](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Minecraft Java Is Switching From OpenGL To Vulkan](https://developers.slashdot.org/story/26/02/19/2156234/minecraft-java-is-switching-from-opengl-to-vulkan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 23:12:15](https://lobste.rs/s/odtjwd/scheme_shell_1994) - [A Scheme Shell (1994)](https://publications.csail.mit.edu/lcs/pubs/pdf/MIT-LCS-TR-635.pdf)
* [2026-02-19, 23:09:03](https://lobste.rs/s/zpotiy/hold_on_your_hardware) - [Hold on to Your Hardware](https://マリウス.com/hold-on-to-your-hardware/)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 22:54:28](https://news.ycombinator.com/item?id=47080873) - [Show HN: A small, simple music theory library in C99](https://github.com/thelowsunoverthemoon/mahler.c)
* [2026-02-19, 22:40:00](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Loses 40% of IT Staff, 80% of Tech Leaders In &apos;Efficiency&apos; Shakeup](https://it.slashdot.org/story/26/02/19/2151205/irs-loses-40-of-it-staff-80-of-tech-leaders-in-efficiency-shakeup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 22:11:50](https://lobste.rs/s/9zos31/every_app_you_ve_built_is_etl_pipeline_you) - [Every app you&apos;ve built is an ETL pipeline (you just didn&apos;t call it that)](https://www.inngest.com/blog/etl-via-inngest)
* [2026-02-19, 22:02:00](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Grilled On Usage Goals and Underage Users At California Trial](https://tech.slashdot.org/story/26/02/19/2145254/mark-zuckerberg-grilled-on-usage-goals-and-underage-users-at-california-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 21:30:04](https://news.ycombinator.com/item?id=47079718) - [Show HN: Ghostty-based terminal with vertical tabs and notifications](https://github.com/manaflow-ai/cmux)
* [2026-02-19, 21:21:00](https://slashdot.org/story/26/02/19/1945205/chinas-hottest-app-of-2026-just-asks-if-youre-still-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Hottest App of 2026 Just Asks If You&apos;re Still Alive](https://slashdot.org/story/26/02/19/1945205/chinas-hottest-app-of-2026-just-asks-if-youre-still-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 20:45:00](https://hardware.slashdot.org/story/26/02/19/1939246/microsofts-new-10000-year-data-storage-medium-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s New 10,000-Year Data Storage Medium: Glass](https://hardware.slashdot.org/story/26/02/19/1939246/microsofts-new-10000-year-data-storage-medium-glass?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 20:21:23](https://lobste.rs/s/df1p8i/resurrecting_why_s_dream) - [Resurrecting _why&apos;s Dream](https://schwadlabs.io/blog/resurrecting-whys-dream)
* [2026-02-19, 20:05:00](https://tech.slashdot.org/story/26/02/19/1924208/europes-labor-laws-are-strangling-its-ability-to-innovate-new-analysis-argues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Labor Laws Are Strangling Its Ability To Innovate, New Analysis Argues](https://tech.slashdot.org/story/26/02/19/1924208/europes-labor-laws-are-strangling-its-ability-to-innovate-new-analysis-argues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 19:42:31](https://news.ycombinator.com/item?id=47078167) - [Micropayments as a reality check for news sites](https://blog.zgp.org/micropayments-as-a-reality-check-for-news-sites/)
* [2026-02-19, 19:25:00](https://entertainment.slashdot.org/story/26/02/19/1911203/bafta-to-reward-human-creativity-as-film-and-tv-grapples-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bafta To Reward &apos;Human Creativity&apos; as Film and TV Grapples With AI](https://entertainment.slashdot.org/story/26/02/19/1911203/bafta-to-reward-human-creativity-as-film-and-tv-grapples-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 19:09:38](https://lobste.rs/s/qsypky/concrete_syntax_matters_actually) - [Concrete syntax matters, actually](https://www.youtube.com/live/kQjrcSMYpaA)
* [2026-02-19, 18:45:21](https://lobste.rs/s/fgkcxo/ai_makes_you_boring) - [AI makes you boring](https://www.marginalia.nu/log/a_132_ai_bores/)
* [2026-02-19, 18:45:00](https://it.slashdot.org/story/26/02/19/1842201/llm-generated-passwords-look-strong-but-crack-in-hours-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LLM-Generated Passwords Look Strong but Crack in Hours, Researchers Find](https://it.slashdot.org/story/26/02/19/1842201/llm-generated-passwords-look-strong-but-crack-in-hours-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 18:31:50](https://news.ycombinator.com/item?id=47077245) - [Archaeologists find possible first direct evidence of Hannibal&apos;s war elephants](https://www.smithsonianmag.com/smart-news/archaeologists-unearthed-a-2200-year-old-bone-they-say-it-could-be-the-first-direct-evidence-of-hannibals-legendary-war-elephants-180988185/)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:47:25](https://news.ycombinator.com/item?id=47076659) - [A terminal weather app with ASCII animations driven by real-time weather data](https://github.com/Veirt/weathr)
* [2026-02-19, 17:15:20](https://lobste.rs/s/q4ykw7/missing_semester_your_cs_education) - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
* [2026-02-19, 17:04:20](https://lobste.rs/s/ailcbn/netbase_port_netbsd_utilities_for_linux) - [Netbase a port of the netbsd utilities for linux](https://github.com/littlefly365/Netbase)
* [2026-02-19, 16:54:23](https://lobste.rs/s/jkvtew/choosing_language_based_on_its_syntax) - [Choosing a Language Based on its Syntax?](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)
* [2026-02-19, 16:13:36](https://lobste.rs/s/vrru3d/using_browser_s_canvas_for_data) - [Using the Browser’s &lt;canvas&gt; for Data Compression](https://jstrieb.github.io/posts/canvas-compress/)
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
* [2026-02-19, 12:16:07](https://lobste.rs/s/bzqteq/paged_out_8) - [Paged Out! #8](https://pagedout.institute/download/PagedOut_008.pdf)
* [2026-02-19, 12:13:44](https://news.ycombinator.com/item?id=47072968) - [Paged Out Issue #8 [pdf]](https://pagedout.institute/download/PagedOut_008.pdf)
* [2026-02-19, 10:57:56](https://lobste.rs/s/eos5kb/pg_here_run_local_postgresql_instance) - [pg-here: Run a local PostgreSQL instance in your project folder with one command](https://github.com/mayfer/pg-here)
* [2026-02-19, 09:59:09](https://lobste.rs/s/h75wx0/state_clojure_2025_results) - [State of Clojure 2025 Results](https://clojure.org/news/2026/02/18/state-of-clojure-2025)
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
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 07:42:05](https://news.ycombinator.com/item?id=47058350) - [A Famous Enigma: On Alexandre Kojève](https://clereviewofbooks.com/isabel-jacobs-boris-groys-marco-filoni/)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 12:57:38](https://news.ycombinator.com/item?id=47047010) - [FreeCAD](https://www.freecad.org/index.php)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-17, 03:23:16](https://news.ycombinator.com/item?id=47043345) - [Almost Every infrastructure decision I endorse or regret after 4 years](https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 22:35:50](https://news.ycombinator.com/item?id=47041294) - [My 1981 adventure game is now a multimedia extravaganza](https://technologizer.com/home/2026/02/16/arctic-adventure-2026/)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 17:57:46](https://news.ycombinator.com/item?id=47038032) - [Don&apos;t Trust the Salt: AI Summarization, Multilingual Safety, and LLM Guardrails](https://royapakzad.substack.com/p/multilingual-llm-evaluation-to-guardrails)
* [2026-02-16, 14:49:24](https://news.ycombinator.com/item?id=47035698) - [Lindenmayer.jl: Defining recursive patterns in Julia](https://cormullion.github.io/Lindenmayer.jl/stable/)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 05:27:35](https://news.ycombinator.com/item?id=47031197) - [Defer available in gcc and clang](https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:31:01](https://news.ycombinator.com/item?id=47029368) - [A beginner&apos;s guide to split keyboards](https://www.justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
