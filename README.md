# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [ArXiv Will Require English Submissions - and Says AI Translators Are Fair Game](https://science.slashdot.org/story/26/01/29/1855222/arxiv-will-require-english-submissions---and-says-ai-translators-are-fair-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Apple buys Israeli startup Q.ai as the AI race heats up](https://techcrunch.com/2026/01/29/apple-buys-israeli-startup-q-ai-as-the-ai-race-heats-up/)

* [Microsoft Admits Windows 11 Has a Trust Problem, Promises To Focus on Fixes in 2026](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Europe’s next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images)

* [Brandon Sanderson's Literary Fantasy Universe 'Cosmere' Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Software and Engineering Developments

* [Building Docs Like a Product](https://emschwartz.me/building-docs-like-a-product/)

* [Gadgetbridge](https://gadgetbridge.org)

* [Agent-shell: A native Emacs buffer to interact with LLM agents powered by ACP](https://github.com/xenodium/agent-shell)

* [Flameshot](https://github.com/flameshot-org/flameshot)

* [Narwhal: an extensible pub/sub messaging server for edge applications](https://github.com/narwhal-io/narwhal)

## Science and Innovation

* [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)

* [Heating homes with the largest particle accelerator](https://home.cern/news/news/cern/heating-homes-worlds-largest-particle-accelerator)

## Security and Legal News

* [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Waymo Robotaxi Hits a Child Near an Elementary School in Santa Monica](https://tech.slashdot.org/story/26/01/29/151223/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Corporate Insights and Market Moves

* [US Leads Record Global Surge in Gas-Fired Power Driven by AI Demands](https://news.slashdot.org/story/26/01/29/1914231/us-leads-record-global-surge-in-gas-fired-power-driven-by-ai-demands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Apple's Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-01-29, 21:22:00](https://science.slashdot.org/story/26/01/29/1855222/arxiv-will-require-english-submissions---and-says-ai-translators-are-fair-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ArXiv Will Require English Submissions - and Says AI Translators Are Fair Game](https://science.slashdot.org/story/26/01/29/1855222/arxiv-will-require-english-submissions---and-says-ai-translators-are-fair-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 21:19:58](https://lobste.rs/s/vxjeui/building_docs_like_product) - [Building Docs Like a Product](https://emschwartz.me/building-docs-like-a-product/)
* [2026-01-29, 21:02:31](https://news.ycombinator.com/item?id=46816539) - [Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT](https://openai.com/index/retiring-gpt-4o-and-older-models/)
* [2026-01-29, 20:57:07](https://lobste.rs/s/t02552/solving_fossil_s_ascii_art_captcha_171) - [Solving Fossil&apos;s ASCII art CAPTCHA in 171 characters](https://blog.nns.ee/2026/01/29/fossil-captcha-solver/)
* [2026-01-29, 20:50:00](https://news.slashdot.org/story/26/01/29/1914231/us-leads-record-global-surge-in-gas-fired-power-driven-by-ai-demands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Leads Record Global Surge in Gas-Fired Power Driven by AI Demands](https://news.slashdot.org/story/26/01/29/1914231/us-leads-record-global-surge-in-gas-fired-power-driven-by-ai-demands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 20:49:04](https://news.ycombinator.com/item?id=46816378) - [iPhone 16 Best-Selling Smartphone in 2025; Apple Takes 7 Spots in Top Models](https://counterpointresearch.com/en/insights/iphone-16-worlds-best-selling-smartphone-in-2025-apple-takes-7-spots-in-top-10-models)
* [2026-01-29, 20:37:01](https://news.ycombinator.com/item?id=46816228) - [Apple buys Israeli startup Q.ai as the AI race heats up](https://techcrunch.com/2026/01/29/apple-buys-israeli-startup-q-ai-as-the-ai-race-heats-up/)
* [2026-01-29, 20:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss) - [Four Arrested Following $1.6 Million NFT Heist in the Netherlands](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss)
* [2026-01-29, 20:15:48](https://lobste.rs/s/vt1xac/gadgetbridge) - [Gadgetbridge](https://gadgetbridge.org)
* [2026-01-29, 20:11:26](https://news.ycombinator.com/item?id=46815899) - [Agent-shell: A native Emacs buffer to interact with LLM agents powered by ACP](https://github.com/xenodium/agent-shell)
* [2026-01-29, 20:10:00](https://news.slashdot.org/story/26/01/29/199255/us-life-expectancy-jumps-to-a-record-79-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Life Expectancy Jumps To a Record 79 Years](https://news.slashdot.org/story/26/01/29/199255/us-life-expectancy-jumps-to-a-record-79-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 19:42:26](https://lobste.rs/s/9dqubn/crazy_jumpman) - [crazy-jumpman](https://codeberg.org/pgeorgi/crazy-jumpman/#english)
* [2026-01-29, 19:36:38](https://lobste.rs/s/klojnf/sentry_releases_new_cli_for_developers) - [Sentry releases new CLI for developers and agents](https://cli.sentry.dev/)
* [2026-01-29, 19:30:35](https://news.ycombinator.com/item?id=46815297) - [Flameshot](https://github.com/flameshot-org/flameshot)
* [2026-01-29, 19:22:00](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Admits Windows 11 Has a Trust Problem, Promises To Focus on Fixes in 2026](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 19:10:54](https://news.ycombinator.com/item?id=46814991) - [Networks Hold the Key to a Decades-Old Problem About Waves](https://www.quantamagazine.org/networks-hold-the-key-to-a-decades-old-problem-about-waves-20260128/)
* [2026-01-29, 18:55:38](https://news.ycombinator.com/item?id=46814743) - [PlayStation 2 Recompilation Project Is Absolutely Incredible](https://redgamingtech.com/playstation-2-recompilation-project-is-absolutely-incredible/)
* [2026-01-29, 18:50:00](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Private Equity Is Suddenly Awash With Zombie Firms](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 18:48:09](https://news.ycombinator.com/item?id=46814614) - [County pays $600k to pentesters it arrested for assessing courthouse security](https://arstechnica.com/security/2026/01/county-pays-600000-to-pentesters-it-arrested-for-assessing-courthouse-security/)
* [2026-01-29, 18:45:27](https://news.ycombinator.com/item?id=46814569) - [My Mom and Dr. DeepSeek (2025)](https://restofworld.org/2025/ai-chatbot-china-sick/)
* [2026-01-29, 18:10:00](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 17:45:00](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 17:02:39](https://news.ycombinator.com/item?id=46812933) - [Project Genie: Experimenting with infinite, interactive worlds](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/)
* [2026-01-29, 17:01:31](https://news.ycombinator.com/item?id=46812909) - [Show HN: Autonomous recovery for distributed training jobs](https://docs.tensorpool.dev/features/agent)
* [2026-01-29, 17:00:42](https://news.ycombinator.com/item?id=46812892) - [Reflex (YC W23) Senior Software Engineer Infra](https://www.ycombinator.com/companies/reflex/jobs/Jcwrz7A-lead-software-engineer-infra)
* [2026-01-29, 16:47:00](https://games.slashdot.org/story/26/01/29/1647211/xbox-hardware-revenue-craters-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Hardware Revenue Craters 32%](https://games.slashdot.org/story/26/01/29/1647211/xbox-hardware-revenue-craters-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 16:42:33](https://news.ycombinator.com/item?id=46812608) - [Launch HN: AgentMail (YC S25) – An API that gives agents their own email inboxes](https://news.ycombinator.com/item?id=46812608)
* [2026-01-29, 16:41:09](https://lobste.rs/s/gc7ase/pagelove_building_better_web_for_humans) - [Pagelove: Building a better web — for humans and machines](https://page.love/blog/04-the-shape-of-pagelove.html)
* [2026-01-29, 16:19:19](https://news.ycombinator.com/item?id=46812285) - [Show HN: Kolibri, a DIY music club in Sweden](https://kolibrinkpg.com/)
* [2026-01-29, 16:12:19](https://news.ycombinator.com/item?id=46812173) - [US cybersecurity chief leaked sensitive government files to ChatGPT: Report](https://www.dexerto.com/entertainment/us-cybersecurity-chief-leaked-sensitive-government-files-to-chatgpt-report-3311462/)
* [2026-01-29, 16:12:00](https://tech.slashdot.org/story/26/01/29/1611252/windows-11-has-reached-1-billion-users-faster-than-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Has Reached 1 Billion Users Faster Than Windows 10](https://tech.slashdot.org/story/26/01/29/1611252/windows-11-has-reached-1-billion-users-faster-than-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 16:11:04](https://news.ycombinator.com/item?id=46812159) - [Drug trio found to block tumour resistance in pancreatic cancer](https://www.drugtargetreview.com/news/192714/drug-trio-found-to-block-tumour-resistance-in-pancreatic-cancer/)
* [2026-01-29, 16:08:20](https://lobste.rs/s/zcfnh9/micropythonos_ultimate_micropython) - [MicroPythonOS - The Ultimate MicroPython Operating System](https://micropythonos.com/)
* [2026-01-29, 16:07:35](https://lobste.rs/s/b7lh3o/beta_testing_webusbunpinner_tool) - [Beta testing of WebUSBUnpinner - a tool to investigate platform worker&apos;s privacy and rights violations](https://reversing.works/posts/2026/01/help-reversing.works-empower-workers-by-testing-our-tool/)
* [2026-01-29, 15:49:04](https://news.ycombinator.com/item?id=46811762) - [Heating homes with the largest particle accelerator](https://home.cern/news/news/cern/heating-homes-worlds-largest-particle-accelerator)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives but There&apos;s &apos;A Limited Number Of Reports&apos;](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 15:37:21](https://news.ycombinator.com/item?id=46811588) - [OTelBench: AI struggles with simple SRE tasks (Opus 4.5 scores only 29%)](https://quesma.com/blog/introducing-otel-bench/)
* [2026-01-29, 15:22:00](https://tech.slashdot.org/story/26/01/29/151223/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Robotaxi Hits a Child Near an Elementary School in Santa Monica](https://tech.slashdot.org/story/26/01/29/151223/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 15:20:12](https://lobste.rs/s/g0te8h/how_choose_colors_for_your_cli) - [How to Choose Colors for Your CLI Applications (2023)](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 15:05:55](https://lobste.rs/s/x2pwi5/introducing_fluux_messenger_modern_xmpp) - [Introducing Fluux Messenger: A Modern XMPP Client Born from a Holiday Coding Session](https://www.process-one.net/blog/introducing-fluux-messenger-a-modern-xmpp-client-born-from-a-holiday-coding-session/)
* [2026-01-29, 15:02:24](https://lobste.rs/s/c0xw18/atomvm_2025_year_review) - [AtomVM 2025 Year in Review](https://substack.com/home/post/p-186191026)
* [2026-01-29, 14:49:08](https://news.ycombinator.com/item?id=46810904) - [How to Choose Colors for Your CLI Applications (2023)](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 14:43:07](https://news.ycombinator.com/item?id=46810828) - [Run Clawdbot/Moltbot on Cloudflare with Moltworker](https://blog.cloudflare.com/moltworker-self-hosted-ai-agent/)
* [2026-01-29, 14:40:00](https://mobile.slashdot.org/story/26/01/29/1431237/seven-of-the-worlds-ten-best-selling-smartphones-in-2025-were-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seven of the World&apos;s Ten Best-Selling Smartphones in 2025 Were iPhones](https://mobile.slashdot.org/story/26/01/29/1431237/seven-of-the-worlds-ten-best-selling-smartphones-in-2025-were-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 14:17:24](https://lobste.rs/s/icj2ce/narwhal_extensible_pub_sub_messaging) - [Narwhal: an extensible pub/sub messaging server for edge applications](https://github.com/narwhal-io/narwhal)
* [2026-01-29, 14:08:34](https://lobste.rs/s/9hjydz/history_greenfield_browser_wayland) - [History of Greenfield (in-browser Wayland compositor)](https://wayouttheresoftware.blogspot.com/2023/07/some-history-about-greenfield.html)
* [2026-01-29, 14:00:00](https://mobile.slashdot.org/story/26/01/29/1338204/nothing-ceo-says-company-wont-launch-new-flagship-smartphone-every-year-for-the-sake-of-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nothing CEO Says Company Won&apos;t Launch New Flagship Smartphone Every Year &apos;For the Sake of It&apos;](https://mobile.slashdot.org/story/26/01/29/1338204/nothing-ceo-says-company-wont-launch-new-flagship-smartphone-every-year-for-the-sake-of-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 13:59:07](https://news.ycombinator.com/item?id=46810282) - [Claude Code daily benchmarks for degradation tracking](https://marginlab.ai/trackers/claude-code/)
* [2026-01-29, 13:08:11](https://news.ycombinator.com/item?id=46809708) - [Compressed Agents.md &gt; Agent Skills](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)
* [2026-01-29, 13:00:00](https://tech.slashdot.org/story/26/01/29/0559255/hundreds-of-gatik-robot-delivery-trucks-headed-for-us-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Hundreds&apos; of Gatik Robot Delivery Trucks Headed For US Roads](https://tech.slashdot.org/story/26/01/29/0559255/hundreds-of-gatik-robot-delivery-trucks-headed-for-us-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 12:45:52](https://lobste.rs/s/ruibzy/looi_minimal_customizable_new_tab_page) - [Looi — A Minimal, Customizable New Tab Page for Firefox, Chrome(with Widgets &amp; GitHub Sync)](https://github.com/prinzpiuz/looi)
* [2026-01-29, 12:05:49](https://lobste.rs/s/xnjpyv/announcing_winapp_windows_app) - [Announcing winapp, the Windows App Development CLI](https://blogs.windows.com/windowsdeveloper/2026/01/22/announcing-winapp-the-windows-app-development-cli/)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 10:00:00](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 09:34:06](https://lobste.rs/s/97wsdw/phantom_obligation) - [Phantom Obligation](https://terrygodier.com/phantom-obligation)
* [2026-01-29, 09:22:36](https://lobste.rs/s/a3qcah/9front_gefs_service_pack_1_released) - [9front \&quot;GEFS SERVICE PACK 1\&quot; released](https://9front.org/releases/2026/01/24/0/)
* [2026-01-29, 09:20:16](https://lobste.rs/s/g0ep2s/30_years_reactos) - [30 years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-29, 08:28:41](https://lobste.rs/s/pimcz4/simple_http_tunnel_ngrok_alternative) - [A simple HTTP tunnel ngrok alternative (2024)](https://github.com/peter-leonov/webhooks-proxy-tunnel)
* [2026-01-29, 07:07:17](https://news.ycombinator.com/item?id=46806773) - [Europe’s next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images)
* [2026-01-29, 07:00:00](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brandon Sanderson&apos;s Literary Fantasy Universe &apos;Cosmere&apos; Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 05:31:07](https://lobste.rs/s/651hoq/bf_tree_modern_concurrent_larger_than) - [Bf-Tree A Modern Concurrent Larger-Than-Memory Range Index](https://github.com/microsoft/bf-tree/)
* [2026-01-29, 04:39:10](https://lobste.rs/s/hcw4pb/some_notes_on_starting_use_django) - [Some notes on starting to use Django](https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/)
* [2026-01-29, 01:30:42](https://lobste.rs/s/0f7x2a/i_still_don_t_understand_this_syn_attack) - [I still don&apos;t understand this SYN attack, but now I can block it easily](https://boston.conman.org/2026/01/28.2)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 19:56:09](https://lobste.rs/s/avdx9j/bootstrap_chain_for_nixos_which_builds) - [\&quot;a bootstrap chain for NixOS which builds the whole system from a small hand-auditable binary seed\&quot;](https://chaos.social/@nzbr/115973847897716839)
* [2026-01-28, 16:34:54](https://lobste.rs/s/pnrw6j/ariel_os_is_library_operating_system_for) - [Ariel OS is a library operating system for secure, memory-safe, low-power Internet of Things, written in Rust](https://github.com/ariel-os/ariel-os)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 13:44:48](https://lobste.rs/s/rcffs8/make_ts) - [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 07:53:06](https://news.ycombinator.com/item?id=46776752) - [Automating Image Compression](https://www.ramijames.com/thoughts/on-automating-image-compression)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:56:05](https://news.ycombinator.com/item?id=46772132) - [Making niche solutions is the point](https://ntietz.com/blog/making-niche-solutions-is-the-point/)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 01:09:14](https://news.ycombinator.com/item?id=46760546) - [Usenet personality](https://en.wikipedia.org/wiki/Usenet_personality)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 10:31:14](https://news.ycombinator.com/item?id=46752754) - [The Value of Things](https://journal.stuffwithstuff.com/2026/01/24/the-value-of-things/)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 06:51:49](https://news.ycombinator.com/item?id=46751460) - [Box64 Expands into RISC-V and LoongArch territory](https://boilingsteam.com/box64-expands-into-risc-v-and-loong-arch-territory/)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
