# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Data Privacy

* [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [An AI Toy Exposed 50K Logs of Its Chats With Kids To Anyone With a Gmail Account](https://yro.slashdot.org/story/26/01/29/227207/an-ai-toy-exposed-50k-logs-of-its-chats-with-kids-to-anyone-with-a-gmail-account?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Starlink Now Uses Customers' Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&from=rss)

## Technologies Shaping the Future

* [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&from=rss)

* [Google's Project Genie Lets You Generate Your Own Interactive Worlds](https://games.slashdot.org/story/26/01/29/2157233/googles-project-genie-lets-you-generate-your-own-interactive-worlds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&from=rss)

## Impacts of AI on Society and Jobs

* [Musk's X Releases Source Code for Platform's Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&from=rss)

* [Universal Basic Income Could Be Used To Soften Hit From AI Job Losses In UK, Minister Says](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing "Social Permission"](https://soylentnews.org/article.pl?sid=26/01/25/1435251&from=rss)

## Game Development and Interactive Applications

* [Linux Gaming Developers Join Forces To Form the Open Gaming Collective](https://games.slashdot.org/story/26/01/29/2252203/linux-gaming-developers-join-forces-to-form-the-open-gaming-collective?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [PlayStation 2 Recompilation Project Is Absolutely Incredible](https://redgamingtech.com/playstation-2-recompilation-project-is-absolutely-incredible/)

* [Show HN: Mystral Native – Run JavaScript games natively with WebGPU (no browser)](https://github.com/mystralengine/mystralnative)

## Software Development and Innovation

* [10 Years of Wasm: A Retrospective](https://bytecodealliance.org/articles/ten-years-of-webassembly-a-retrospective)

* [Introducing Fluux Messenger: A Modern XMPP Client Born from a Holiday Coding Session](https://www.process-one.net/blog/introducing-fluux-messenger-a-modern-xmpp-client-born-from-a-holiday-coding-session/)

* [Doin' It with a 555: One Chip to Rule Them All](https://aashvik.com/posts/555-revolution/)

## Corporate and Economic Trends

* [Apple's Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Why Private Equity Is Suddenly Awash With Zombie Firms](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Admits Windows 11 Has a Trust Problem, Promises To Focus on Fixes in 2026](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-01-30, 07:00:08](https://news.ycombinator.com/item?id=46821326) - [Photoroom (YC S20) Is Hiring a Head of Cross-Platform (Rust) in Paris](https://jobs.ashbyhq.com/photoroom/dc994a7c-e104-46e1-81c3-b88d635398b9)
* [2026-01-30, 06:48:08](https://lobste.rs/s/2skyzm/clojurewasmbeta) - [ClojureWasmBeta](https://github.com/chaploud/ClojureWasmBeta)
* [2026-01-30, 06:10:18](https://lobste.rs/s/0r26qz/backseat_software) - [Backseat Software](https://blog.mikeswanson.com/backseat-software/)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 04:24:57](https://lobste.rs/s/js7tql/google_disrupts_large_residential_proxy) - [Google Disrupts Large Residential Proxy Network](https://cloud.google.com/blog/topics/threat-intelligence/disrupting-largest-residential-proxy-network)
* [2026-01-30, 04:17:38](https://news.ycombinator.com/item?id=46820468) - [The Dank Case for Scrolling Window Managers](https://tedium.co/2026/01/29/niri-danklinux-scrolling-window-managers/)
* [2026-01-30, 03:57:31](https://lobste.rs/s/pou5h2/dank_case_for_scrolling_window_managers) - [The Dank Case For Scrolling Window Managers](https://tedium.co/2026/01/29/niri-danklinux-scrolling-window-managers/)
* [2026-01-30, 03:55:34](https://news.ycombinator.com/item?id=46820360) - [Moltbook](https://www.moltbook.com/)
* [2026-01-30, 03:30:00](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Universal Basic Income Could Be Used To Soften Hit From AI Job Losses In UK, Minister Says](https://news.slashdot.org/story/26/01/29/2330216/universal-basic-income-could-be-used-to-soften-hit-from-ai-job-losses-in-uk-minister-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 03:11:43](https://news.ycombinator.com/item?id=46820113) - [Stargaze: SpaceX&apos;s Space Situational Awareness System](https://starlink.com/updates/stargaze)
* [2026-01-30, 02:16:21](https://news.ycombinator.com/item?id=46819809) - [Two days of oatmeal reduce cholesterol level](https://www.uni-bonn.de/en/news/017-2026)
* [2026-01-30, 02:02:00](https://tech.slashdot.org/story/26/01/29/2324200/comcast-keeps-losing-customers-despite-price-guarantee-unlimited-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comcast Keeps Losing Customers Despite Price Guarantee, Unlimited Data](https://tech.slashdot.org/story/26/01/29/2324200/comcast-keeps-losing-customers-despite-price-guarantee-unlimited-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 01:43:25](https://lobste.rs/s/izh4dt/no_cloudflare_s_matrix_server_isn_t) - [No, Cloudflare&apos;s Matrix server isn&apos;t an earnest project](https://nexy.blog/2026/01/28/cf-matrix-workers/)
* [2026-01-30, 01:25:00](https://news.slashdot.org/story/26/01/29/230246/cory-doctorow-on-tariffs-and-the-dmca-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow On Tariffs and the DMCA In Canada](https://news.slashdot.org/story/26/01/29/230246/cory-doctorow-on-tariffs-and-the-dmca-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
* [2026-01-30, 00:45:00](https://games.slashdot.org/story/26/01/29/2252203/linux-gaming-developers-join-forces-to-form-the-open-gaming-collective?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Gaming Developers Join Forces To Form the Open Gaming Collective](https://games.slashdot.org/story/26/01/29/2252203/linux-gaming-developers-join-forces-to-form-the-open-gaming-collective?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-30, 00:37:02](https://lobste.rs/s/fxro47/10_years_wasm_retrospective) - [10 Years of Wasm: A Retrospective](https://bytecodealliance.org/articles/ten-years-of-webassembly-a-retrospective)
* [2026-01-30, 00:06:53](https://lobste.rs/s/lrlmqz/litestream_writable_vfs) - [Litestream Writable VFS](https://fly.io/blog/litestream-writable-vfs/)
* [2026-01-30, 00:02:00](https://yro.slashdot.org/story/26/01/29/227207/an-ai-toy-exposed-50k-logs-of-its-chats-with-kids-to-anyone-with-a-gmail-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An AI Toy Exposed 50K Logs of Its Chats With Kids To Anyone With a Gmail Account](https://yro.slashdot.org/story/26/01/29/227207/an-ai-toy-exposed-50k-logs-of-its-chats-with-kids-to-anyone-with-a-gmail-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 23:20:00](https://games.slashdot.org/story/26/01/29/2157233/googles-project-genie-lets-you-generate-your-own-interactive-worlds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Project Genie Lets You Generate Your Own Interactive Worlds](https://games.slashdot.org/story/26/01/29/2157233/googles-project-genie-lets-you-generate-your-own-interactive-worlds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 23:15:55](https://lobste.rs/s/wmsanp/colorblind_friendly_design_guide_for) - [Colorblind-Friendly Design Guide for Developing Apps](https://github.com/Terryc21/XcodeResources/blob/main/Colorblind_Accessibility_Guide.md)
* [2026-01-29, 23:06:34](https://news.ycombinator.com/item?id=46818154) - [Software is mostly all you need](https://softwarefordays.com/post/software-is-mostly-all-you-need/)
* [2026-01-29, 22:49:40](https://news.ycombinator.com/item?id=46817963) - [Employers, please use postmarked letters for job applications (2025)](https://soapstone.mradford.com/employers-use-letters-for-job-applications/)
* [2026-01-29, 22:40:00](https://games.slashdot.org/story/26/01/29/2152239/nvidia-geforce-now-is-now-available-natively-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia GeForce NOW Is Now Available Natively On Linux](https://games.slashdot.org/story/26/01/29/2152239/nvidia-geforce-now-is-now-available-natively-on-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 22:38:57](https://news.ycombinator.com/item?id=46817813) - [Grid: Free, local-first, browser-based 3D printing/CNC/laser slicer](https://grid.space/stem/)
* [2026-01-29, 22:10:07](https://news.ycombinator.com/item?id=46817452) - [Backseat Software](https://blog.mikeswanson.com/backseat-software/)
* [2026-01-29, 22:02:00](https://it.slashdot.org/story/26/01/29/2147207/county-pays-600000-to-pentesters-it-arrested-for-assessing-courthouse-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [County Pays $600,000 To Pentesters It Arrested For Assessing Courthouse Security](https://it.slashdot.org/story/26/01/29/2147207/county-pays-600000-to-pentesters-it-arrested-for-assessing-courthouse-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 21:22:00](https://science.slashdot.org/story/26/01/29/1855222/arxiv-will-require-english-submissions---and-says-ai-translators-are-fair-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ArXiv Will Require English Submissions - and Says AI Translators Are Fair Game](https://science.slashdot.org/story/26/01/29/1855222/arxiv-will-require-english-submissions---and-says-ai-translators-are-fair-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 21:19:58](https://lobste.rs/s/vxjeui/building_docs_like_product) - [Building Docs Like a Product](https://emschwartz.me/building-docs-like-a-product/)
* [2026-01-29, 21:02:31](https://news.ycombinator.com/item?id=46816539) - [Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT](https://openai.com/index/retiring-gpt-4o-and-older-models/)
* [2026-01-29, 20:57:07](https://lobste.rs/s/t02552/solving_fossil_s_ascii_art_captcha_171) - [Solving Fossil&apos;s ASCII art CAPTCHA in 171 characters](https://blog.nns.ee/2026/01/29/fossil-captcha-solver/)
* [2026-01-29, 20:50:00](https://news.slashdot.org/story/26/01/29/1914231/us-leads-record-global-surge-in-gas-fired-power-driven-by-ai-demands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Leads Record Global Surge in Gas-Fired Power Driven by AI Demands](https://news.slashdot.org/story/26/01/29/1914231/us-leads-record-global-surge-in-gas-fired-power-driven-by-ai-demands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 20:47:36](https://news.ycombinator.com/item?id=46816357) - [The WiFi only works when it&apos;s raining (2024)](https://predr.ag/blog/wifi-only-works-when-its-raining/)
* [2026-01-29, 20:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss) - [Four Arrested Following $1.6 Million NFT Heist in the Netherlands](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss)
* [2026-01-29, 20:15:48](https://lobste.rs/s/vt1xac/gadgetbridge) - [Gadgetbridge](https://gadgetbridge.org)
* [2026-01-29, 20:10:00](https://news.slashdot.org/story/26/01/29/199255/us-life-expectancy-jumps-to-a-record-79-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Life Expectancy Jumps To a Record 79 Years](https://news.slashdot.org/story/26/01/29/199255/us-life-expectancy-jumps-to-a-record-79-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 19:42:26](https://lobste.rs/s/9dqubn/crazy_jumpman) - [crazy-jumpman](https://codeberg.org/pgeorgi/crazy-jumpman/#english)
* [2026-01-29, 19:30:35](https://news.ycombinator.com/item?id=46815297) - [Flameshot](https://github.com/flameshot-org/flameshot)
* [2026-01-29, 19:22:00](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Admits Windows 11 Has a Trust Problem, Promises To Focus on Fixes in 2026](https://it.slashdot.org/story/26/01/29/1923222/microsoft-admits-windows-11-has-a-trust-problem-promises-to-focus-on-fixes-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 18:55:38](https://news.ycombinator.com/item?id=46814743) - [PlayStation 2 Recompilation Project Is Absolutely Incredible](https://redgamingtech.com/playstation-2-recompilation-project-is-absolutely-incredible/)
* [2026-01-29, 18:50:00](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Private Equity Is Suddenly Awash With Zombie Firms](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 18:45:27](https://news.ycombinator.com/item?id=46814569) - [My Mom and Dr. DeepSeek (2025)](https://restofworld.org/2025/ai-chatbot-china-sick/)
* [2026-01-29, 18:10:00](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 17:45:00](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 17:02:39](https://news.ycombinator.com/item?id=46812933) - [Project Genie: Experimenting with infinite, interactive worlds](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/)
* [2026-01-29, 16:42:33](https://news.ycombinator.com/item?id=46812608) - [Launch HN: AgentMail (YC S25) – An API that gives agents their own email inboxes](https://news.ycombinator.com/item?id=46812608)
* [2026-01-29, 16:41:09](https://lobste.rs/s/gc7ase/pagelove_building_better_web_for_humans) - [Pagelove: Building a better web — for humans and machines](https://page.love/blog/04-the-shape-of-pagelove.html)
* [2026-01-29, 16:08:20](https://lobste.rs/s/zcfnh9/micropythonos_ultimate_micropython) - [MicroPythonOS - The Ultimate MicroPython Operating System](https://micropythonos.com/)
* [2026-01-29, 16:07:35](https://lobste.rs/s/b7lh3o/beta_testing_webusbunpinner_tool) - [Beta testing of WebUSBUnpinner - a tool to investigate platform worker&apos;s privacy and rights violations](https://reversing.works/posts/2026/01/help-reversing.works-empower-workers-by-testing-our-tool/)
* [2026-01-29, 15:42:57](https://news.ycombinator.com/item?id=46811664) - [Is the RAM shortage killing small VPS hosts?](https://www.fourplex.net/2026/01/29/is-the-ram-shortage-killing-small-vps-hosts/)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives but There&apos;s &apos;A Limited Number Of Reports&apos;](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 15:20:12](https://lobste.rs/s/g0te8h/how_choose_colors_for_your_cli) - [How to Choose Colors for Your CLI Applications (2023)](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 15:05:55](https://lobste.rs/s/x2pwi5/introducing_fluux_messenger_modern_xmpp) - [Introducing Fluux Messenger: A Modern XMPP Client Born from a Holiday Coding Session](https://www.process-one.net/blog/introducing-fluux-messenger-a-modern-xmpp-client-born-from-a-holiday-coding-session/)
* [2026-01-29, 14:43:07](https://news.ycombinator.com/item?id=46810828) - [Moltworker: a self-hosted personal AI agent, minus the minis](https://blog.cloudflare.com/moltworker-self-hosted-ai-agent/)
* [2026-01-29, 14:17:24](https://lobste.rs/s/icj2ce/narwhal_extensible_pub_sub_messaging) - [Narwhal: an extensible pub/sub messaging server for edge applications](https://github.com/narwhal-io/narwhal)
* [2026-01-29, 14:08:56](https://news.ycombinator.com/item?id=46810401) - [Waymo robotaxi hits a child near an elementary school in Santa Monica](https://techcrunch.com/2026/01/29/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica/)
* [2026-01-29, 13:59:07](https://news.ycombinator.com/item?id=46810282) - [Claude Code daily benchmarks for degradation tracking](https://marginlab.ai/trackers/claude-code/)
* [2026-01-29, 13:36:54](https://news.ycombinator.com/item?id=46810027) - [A lot of population numbers are fake](https://davidoks.blog/p/a-lot-of-population-numbers-are-fake)
* [2026-01-29, 13:08:11](https://news.ycombinator.com/item?id=46809708) - [AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)
* [2026-01-29, 12:05:49](https://lobste.rs/s/xnjpyv/announcing_winapp_windows_app) - [Announcing winapp, the Windows App Development CLI](https://blogs.windows.com/windowsdeveloper/2026/01/22/announcing-winapp-the-windows-app-development-cli/)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 09:34:06](https://lobste.rs/s/97wsdw/phantom_obligation) - [Phantom Obligation](https://terrygodier.com/phantom-obligation)
* [2026-01-29, 09:22:36](https://lobste.rs/s/a3qcah/9front_gefs_service_pack_1_released) - [9front \&quot;GEFS SERVICE PACK 1\&quot; released](https://9front.org/releases/2026/01/24/0/)
* [2026-01-29, 09:20:16](https://lobste.rs/s/g0ep2s/30_years_reactos) - [30 years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 04:39:10](https://lobste.rs/s/hcw4pb/some_notes_on_starting_use_django) - [Some notes on starting to use Django](https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/)
* [2026-01-29, 01:30:42](https://lobste.rs/s/0f7x2a/i_still_don_t_understand_this_syn_attack) - [I still don&apos;t understand this SYN attack, but now I can block it easily](https://boston.conman.org/2026/01/28.2)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 19:56:09](https://lobste.rs/s/avdx9j/bootstrap_chain_for_nixos_which_builds) - [\&quot;a bootstrap chain for NixOS which builds the whole system from a small hand-auditable binary seed\&quot;](https://chaos.social/@nzbr/115973847897716839)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-27, 22:24:33](https://news.ycombinator.com/item?id=46787959) - [The paper model houses of Peter Fritz (2013)](https://socks-studio.com/2013/12/06/the-imaginary-town-of-an-unconscious-architect-the-387-paper-models-houses-of-peter-fritz/)
* [2026-01-27, 21:02:36](https://news.ycombinator.com/item?id=46786672) - [CISA’s acting head uploaded sensitive files into public version of ChatGPT](https://www.politico.com/news/2026/01/27/cisa-madhu-gottumukkala-chatgpt-00749361)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 18:33:05](https://news.ycombinator.com/item?id=46784221) - [Show HN: Mystral Native – Run JavaScript games natively with WebGPU (no browser)](https://github.com/mystralengine/mystralnative)
* [2026-01-27, 18:27:01](https://news.ycombinator.com/item?id=46784130) - [Nannou – A creative coding framework for Rust](https://github.com/nannou-org/nannou)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 15:02:01](https://news.ycombinator.com/item?id=46780891) - [Doin&apos; It with a 555: One Chip to Rule Them All](https://aashvik.com/posts/555-revolution/)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 20:45:42](https://news.ycombinator.com/item?id=46771272) - [Skapa, a parametric 3D printing app like an IKEA manual (2025)](https://nmattia.com/posts/2025-03-24-skapa-intro/)
* [2026-01-26, 19:35:30](https://news.ycombinator.com/item?id=46770411) - [The Home Computer Hybrids: Atari, TI, and the FCC](https://technicshistory.com/2026/01/25/the-home-computer-hybrids/)
* [2026-01-26, 18:19:45](https://news.ycombinator.com/item?id=46769422) - [Show HN: Ourguide – OS wide task guidance system that shows you where to click](https://ourguide.ai)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
