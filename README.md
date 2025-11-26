# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The EU made Apple adopt new Wi-Fi standards, and now Android can support AirDrop](https://arstechnica.com/gadgets/2025/11/the-eu-made-apple-adopt-new-wi-fi-standards-and-now-android-can-support-airdrop/) ([comments](https://news.ycombinator.com/item?id=46062504))

* [S&box is now an open source game engine](https://sbox.game/news/update-25-11-26) ([comments](https://news.ycombinator.com/item?id=46061682))

* [NASA Rover Makes a Shocking Discovery: Lightning on Mars](https://science.slashdot.org/story/25/11/26/1728223/nasa-rover-makes-a-shocking-discovery-lightning-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46059737))

* [Qiskit open-source SDK for working with quantum computers](https://github.com/Qiskit/qiskit) ([comments](https://news.ycombinator.com/item?id=46056757))

* [Image Diffusion Models Exhibit Emergent Temporal Propagation in Videos](https://arxiv.org/abs/2511.19936) ([comments](https://news.ycombinator.com/item?id=46055177))

## AI and Digital Trends

* [More Than Half of New Articles On the Internet Are Being Written By AI](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46059737))

* [OpenAI Needs At Least $207 Billion By 2030 Just To Keep Losing Money, HSBC Estimates](https://news.slashdot.org/story/25/11/26/1842249/openai-needs-at-least-207-billion-by-2030-just-to-keep-losing-money-hsbc-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46058065))

* [World's Central Banks Are Wary of AI and Struggling To Quit the Dollar, Survey Shows](https://tech.slashdot.org/story/25/11/26/1456209/worlds-central-banks-are-wary-of-ai-and-struggling-to-quit-the-dollar-survey-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46058065))

* [Microsoft Warns its New “AI" Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)

## Science and Exploration

* [Voyager 1 is about to reach one light-day from earth](https://scienceclock.com/voyager-1-is-about-to-reach-one-light-day-from-earth/) ([comments](https://news.ycombinator.com/item?id=46057488))

* [Study Claims To Provide First Direct Evidence of Dark Matter](https://science.slashdot.org/story/25/11/26/0018227/study-claims-to-provide-first-direct-evidence-of-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46057177))

* [A cell so minimal that it challenges definitions of life](https://www.quantamagazine.org/a-cell-so-minimal-that-it-challenges-definitions-of-life-20251124/) ([comments](https://news.ycombinator.com/item?id=46055935))

## Security and Technology Ethics

* [Crews claim Boring Company failed to pay workers and snubbed OSHA concerns](https://nashvillebanner.com/2025/11/25/boring-company-nashville-shane-trucking-and-excavating/) ([comments](https://news.ycombinator.com/item?id=46061840))

* [Texas Buys $5 Million In BTC ETF As States Edge Toward First Government Crypto Reserves](https://yro.slashdot.org/story/25/11/26/0010222/texas-buys-5-million-in-btc-etf-as-states-edge-toward-first-government-crypto-reserves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46061239))

* [Ring's New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)

## Engineering and Design

* [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/) ([comments](https://news.ycombinator.com/item?id=46059069))

* [Alan.app – Add a Border to macOS Active Window](https://tyler.io/2025/11/alan/) ([comments](https://news.ycombinator.com/item?id=46061239))

* [Building a 64-bit OS from Scratch with Claude Code](https://isene.org/2025/11/SimplicityOS.html) ([comments](https://news.ycombinator.com/item?id=46057488))

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

* [2025-11-26, 21:25:36](https://news.ycombinator.com/item?id=46062504) - [The EU made Apple adopt new Wi-Fi standards, and now Android can support AirDrop](https://arstechnica.com/gadgets/2025/11/the-eu-made-apple-adopt-new-wi-fi-standards-and-now-android-can-support-airdrop/)
* [2025-11-26, 21:25:00](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Lawmakers Seek EU-Wide Minimum Age To Access AI Chatbots, Social Media](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 21:24:09](https://news.ycombinator.com/item?id=46062483) - [AirDrop support for Pixel 10 likely exists because of the EU ruling](https://9to5google.com/2025/11/21/googles-airdrop-support-for-pixel-10-likely-exists-because-of-the-eus-apple-ruling/)
* [2025-11-26, 20:45:00](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than Half of New Articles On the Internet Are Being Written By AI](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 20:14:17](https://news.ycombinator.com/item?id=46061840) - [Crews claim Boring Company failed to pay workers and snubbed OSHA concerns](https://nashvillebanner.com/2025/11/25/boring-company-nashville-shane-trucking-and-excavating/)
* [2025-11-26, 20:05:00](https://slashdot.org/story/25/11/26/1930205/sec-must-not-let-crypto-companies-bypass-rules-stock-exchanges-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Must Not Let Crypto Companies &apos;Bypass&apos; Rules, Stock Exchanges Say](https://slashdot.org/story/25/11/26/1930205/sec-must-not-let-crypto-companies-bypass-rules-stock-exchanges-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 19:58:27](https://news.ycombinator.com/item?id=46061682) - [S&amp;box is now an open source game engine](https://sbox.game/news/update-25-11-26)
* [2025-11-26, 19:51:52](https://news.ycombinator.com/item?id=46061623) - [Don&apos;t Download Apps](https://blog.calebjay.com/posts/dont-download-apps/)
* [2025-11-26, 19:44:20](https://lobste.rs/s/nfkli6/liber_indigo_affordances_magic) - [Liber Indigo: The Affordances of Magic](https://www.youtube.com/watch?v=pGpBQgZ5IsI&amp;list=PLsfH1Ahi4SzE-QmrsrtyZubGmi66iP45V)
* [2025-11-26, 19:26:00](https://tech.slashdot.org/story/25/11/26/1926201/pentagon-cited-alibaba-on-china-military-aid-in-oct-7-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Cited Alibaba on China Military Aid in Oct. 7 Letter](https://tech.slashdot.org/story/25/11/26/1926201/pentagon-cited-alibaba-on-china-military-aid-in-oct-7-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 19:12:40](https://news.ycombinator.com/item?id=46061239) - [Alan.app – Add a Border to macOS Active Window](https://tyler.io/2025/11/alan/)
* [2025-11-26, 18:51:16](https://lobste.rs/s/jhi104/releasing_packages_with_valet_key_npm) - [Releasing Packages with a Valet Key: npm, PyPI, and beyond](https://byk.im/posts/releasing-packages/)
* [2025-11-26, 18:45:00](https://news.slashdot.org/story/25/11/26/1842249/openai-needs-at-least-207-billion-by-2030-just-to-keep-losing-money-hsbc-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Needs At Least $207 Billion By 2030 Just To Keep Losing Money, HSBC Estimates](https://news.slashdot.org/story/25/11/26/1842249/openai-needs-at-least-207-billion-by-2030-just-to-keep-losing-money-hsbc-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 18:34:41](https://lobste.rs/s/7fsqgl/ulid_only_identifier_you_should_use) - [ULID - the ONLY identifier you should use?](https://www.youtube.com/watch?v=otW7nLd8P04)
* [2025-11-26, 18:11:00](https://slashdot.org/story/25/11/26/1811238/chinas-dual-squeeze-on-european-industry-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Dual Squeeze on European Industry Intensifies](https://slashdot.org/story/25/11/26/1811238/chinas-dual-squeeze-on-european-industry-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 18:08:02](https://news.ycombinator.com/item?id=46060508) - [Gemini CLI Tips and Tricks for Agentic Coding](https://github.com/addyosmani/gemini-cli-tips)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 17:28:00](https://lobste.rs/s/pphczb/how_stealth_addresses_work_monero) - [How stealth addresses work in Monero](https://www.johndcook.com/blog/2025/11/24/monero-stealth-addresses/)
* [2025-11-26, 17:28:00](https://science.slashdot.org/story/25/11/26/1728223/nasa-rover-makes-a-shocking-discovery-lightning-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Rover Makes a Shocking Discovery: Lightning on Mars](https://science.slashdot.org/story/25/11/26/1728223/nasa-rover-makes-a-shocking-discovery-lightning-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 17:12:01](https://news.ycombinator.com/item?id=46059737) - [DRAM prices are spiking, but I don&apos;t trust the industry&apos;s why](https://www.xda-developers.com/dram-prices-spiking-dont-trust-industry-reasons/)
* [2025-11-26, 17:03:21](https://news.ycombinator.com/item?id=46059620) - [Optery (YC W22) Hiring CISO, Release Manager, Tech Lead (Node), Full Stack Eng](https://www.optery.com/careers/)
* [2025-11-26, 16:53:00](https://tech.slashdot.org/story/25/11/26/1653232/dell-says-windows-11-transition-is-far-slower-than-windows-10-shift-as-pc-sales-stall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Says Windows 11 Transition is Far Slower Than Windows 10 Shift as PC Sales Stall](https://tech.slashdot.org/story/25/11/26/1653232/dell-says-windows-11-transition-is-far-slower-than-windows-10-shift-as-pc-sales-stall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 16:24:29](https://news.ycombinator.com/item?id=46059069) - [Slop Detective – Fight the Slop Syndicate](https://slopdetective.kagi.com/)
* [2025-11-26, 16:24:00](https://mobile.slashdot.org/story/25/11/26/1624232/apple-set-to-become-worlds-top-phone-maker-overtaking-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Set To Become World&apos;s Top Phone Maker, Overtaking Samsung](https://mobile.slashdot.org/story/25/11/26/1624232/apple-set-to-become-worlds-top-phone-maker-overtaking-samsung?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 15:59:00](https://lobste.rs/s/vf6xi8/llmfuse_self_compressing_filesystem) - [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/)
* [2025-11-26, 15:49:11](https://news.ycombinator.com/item?id=46058600) - [From blood sugar to brain relief: GLP-1 therapy slashes migraine frequency](https://www.medlink.com/news/from-blood-sugar-to-brain-relief-glp-1-therapy-slashes-migraine-frequency)
* [2025-11-26, 15:22:00](https://tech.slashdot.org/story/25/11/26/1456209/worlds-central-banks-are-wary-of-ai-and-struggling-to-quit-the-dollar-survey-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Central Banks Are Wary of AI and Struggling To Quit the Dollar, Survey Shows](https://tech.slashdot.org/story/25/11/26/1456209/worlds-central-banks-are-wary-of-ai-and-struggling-to-quit-the-dollar-survey-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 15:06:37](https://news.ycombinator.com/item?id=46058065) - [OpenAI needs to raise at least $207B by 2030](https://ft.com/content/23e54a28-6f63-4533-ab96-3756d9c88bad)
* [2025-11-26, 14:53:14](https://lobste.rs/s/yxrkzt/solving_partridge_packing_problem_using) - [Solving the Partridge Packing Problem using MiniZinc](https://zayenz.se/blog/post/partridge-packing/)
* [2025-11-26, 14:48:00](https://tech.slashdot.org/story/25/11/26/1448212/the-underwater-cables-that-carry-the-internet-are-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Underwater Cables That Carry the Internet Are in Trouble](https://tech.slashdot.org/story/25/11/26/1448212/the-underwater-cables-that-carry-the-internet-are-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 14:40:46](https://lobste.rs/s/h56bfm/how_get_hired_2025) - [How to get hired in 2025](https://tonsky.me/blog/hiring-ai/)
* [2025-11-26, 14:16:17](https://lobste.rs/s/iwzqi3/kde_going_all_on_wayland_future) - [KDE going all-in on a Wayland future](https://blogs.kde.org/2025/11/26/going-all-in-on-a-wayland-future/)
* [2025-11-26, 14:02:46](https://news.ycombinator.com/item?id=46057488) - [Voyager 1 is about to reach one light-day from earth](https://scienceclock.com/voyager-1-is-about-to-reach-one-light-day-from-earth/)
* [2025-11-26, 14:00:00](https://news.slashdot.org/story/25/11/26/1332218/malaysias-johor-bans-low-tier-data-centers-over-water-strain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Malaysia&apos;s Johor Bans Low-Tier Data Centers Over Water Strain](https://news.slashdot.org/story/25/11/26/1332218/malaysias-johor-bans-low-tier-data-centers-over-water-strain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 13:51:07](https://lobste.rs/s/ilnv7s/building_64_bit_os_from_scratch_with) - [Building a 64-bit OS from Scratch with Claude Code](https://isene.org/2025/11/SimplicityOS.html)
* [2025-11-26, 13:26:13](https://lobste.rs/s/ru1n6p/why_strong_consistency) - [Why Strong Consistency?](https://brooker.co.za/blog/2025/11/18/consistency.html)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 13:00:00](https://yro.slashdot.org/story/25/11/26/0010222/texas-buys-5-million-in-btc-etf-as-states-edge-toward-first-government-crypto-reserves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Buys $5 Million In BTC ETF As States Edge Toward First Government Crypto Reserves](https://yro.slashdot.org/story/25/11/26/0010222/texas-buys-5-million-in-btc-etf-as-states-edge-toward-first-government-crypto-reserves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 12:49:37](https://lobste.rs/s/yycuct/go_proposal_goroutine_metrics) - [Go proposal: Goroutine metrics](https://antonz.org/accepted/goroutine-metrics/)
* [2025-11-26, 12:26:49](https://news.ycombinator.com/item?id=46056757) - [Qiskit open-source SDK for working with quantum computers](https://github.com/Qiskit/qiskit)
* [2025-11-26, 12:03:20](https://lobste.rs/s/3kp1vt/url_c_puzzle) - [URL in C Puzzle](https://susam.net/url-in-c.html)
* [2025-11-26, 11:59:46](https://lobste.rs/s/zl2ktl/secretspec_0_4_0) - [SecretSpec 0.4.0](https://devenv.sh/blog/2025/11/26/devenv-111-module-changelogs-and-secretspec-040/#secretspec-040)
* [2025-11-26, 10:06:41](https://news.ycombinator.com/item?id=46055935) - [A cell so minimal that it challenges definitions of life](https://www.quantamagazine.org/a-cell-so-minimal-that-it-challenges-definitions-of-life-20251124/)
* [2025-11-26, 10:00:00](https://science.slashdot.org/story/25/11/26/0018227/study-claims-to-provide-first-direct-evidence-of-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Claims To Provide First Direct Evidence of Dark Matter](https://science.slashdot.org/story/25/11/26/0018227/study-claims-to-provide-first-direct-evidence-of-dark-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 09:24:06](https://lobste.rs/s/jucg4w/i_don_t_care_how_well_your_ai_works) - [I don&apos;t care how well your \&quot;AI\&quot; works](https://fokus.cool/2025/11/25/i-dont-care-how-well-your-ai-works.html)
* [2025-11-26, 08:40:29](https://news.ycombinator.com/item?id=46055421) - [Statistical Process Control in Python](https://timothyfraser.com/sigma/statistical-process-control-in-python.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 07:55:49](https://news.ycombinator.com/item?id=46055177) - [Image Diffusion Models Exhibit Emergent Temporal Propagation in Videos](https://arxiv.org/abs/2511.19936)
* [2025-11-26, 07:00:00](https://science.slashdot.org/story/25/11/26/005203/china-launches-an-emergency-lifeboat-to-bring-three-astronauts-back-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches An Emergency Lifeboat To Bring Three Astronauts Back To Earth](https://science.slashdot.org/story/25/11/26/005203/china-launches-an-emergency-lifeboat-to-bring-three-astronauts-back-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 05:54:10](https://lobste.rs/s/f328hy/libinput_1_30_released_with_support_for) - [libinput 1.30 Released With Support For Writing Plug-Ins In Lua](https://www.phoronix.com/news/libinput-1.30-Released)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-26, 00:33:29](https://news.ycombinator.com/item?id=46052685) - [CS234: Reinforcement Learning Winter 2025](https://web.stanford.edu/class/cs234/)
* [2025-11-26, 00:27:49](https://lobste.rs/s/vvy1o7/what_they_don_t_tell_you_about_maintaining) - [What They Don&apos;t Tell You About Maintaining an Open Source Project](https://andrej.sh/blog/maintaining-open-source-project/)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 22:30:24](https://lobste.rs/s/tt7izg/stop_hacklore_open_letter) - [Stop Hacklore - An Open Letter](https://www.hacklore.org/letter)
* [2025-11-25, 22:13:35](https://news.ycombinator.com/item?id=46051449) - [Show HN: KiDoom – Running DOOM on PCB Traces](https://www.mikeayles.com/#kidoom)
* [2025-11-25, 19:40:40](https://lobste.rs/s/0rvqxt/look_at_rust_from_2012) - [A look at Rust from 2012](https://purplesyringa.moe/blog/a-look-at-rust-from-2012/)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 17:47:05](https://lobste.rs/s/8inolx/we_rewrote_our_startup_from_php_gleam_3) - [We Rewrote Our Startup from PHP to Gleam in 3 Weeks](https://www.radical-elements.com/minor-epiphanies/we-rewrote-our-startup-from-php-to-gleam-in-3-weeks)
* [2025-11-25, 17:33:50](https://news.ycombinator.com/item?id=46048252) - [Show HN: We built an open source, zero webhooks payment processor](https://github.com/flowglad/flowglad)
* [2025-11-25, 17:05:43](https://lobste.rs/s/iq1zrm/unifying_wikipedia_mobile_desktop) - [Unifying Wikipedia mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 16:39:23](https://lobste.rs/s/igvnnq/stop_telling_us_xmpp_should_use_json) - [Stop Telling Us XMPP Should Use JSON](https://www.process-one.net/blog/stop-telling-us-xmpp-should-use-json/)
* [2025-11-25, 16:13:54](https://lobste.rs/s/90inaz/orion_1_0) - [Orion 1.0](https://blog.kagi.com/orion)
* [2025-11-25, 14:16:22](https://lobste.rs/s/jcjp34/apt_rust_requirement_raises_questions) - [APT Rust requirement raises questions](https://lwn.net/SubscriberLink/1046841/5bbf1fc049a18947/)
* [2025-11-25, 14:03:08](https://lobste.rs/s/occlzx/constant_time_support_lands_llvm) - [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 06:09:05](https://news.ycombinator.com/item?id=46042810) - [Jakarta is now the biggest city in the world](https://www.axios.com/2025/11/24/jakarta-tokyo-worlds-biggest-city-population)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 22:14:14](https://news.ycombinator.com/item?id=46027878) - [Show HN: Safe-NPM – only install packages that are +90 days old](https://github.com/kevinslin/safe-npm)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 17:17:19](https://news.ycombinator.com/item?id=46025223) - [JOPA: Java compiler in C++, Jikes modernized to Java 6 with Claude](https://github.com/7mind/jopa)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 07:40:26](https://news.ycombinator.com/item?id=46021577) - [Surprisingly, Emacs on Android is pretty good](https://kristofferbalintona.me/posts/202505291438/)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 02:27:16](https://news.ycombinator.com/item?id=46020193) - [A Fast 64-Bit Date Algorithm (30–40% faster by counting dates backwards)](https://www.benjoffe.com/fast-date-64)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 20:11:25](https://news.ycombinator.com/item?id=46017830) - [A Woman on a Mission to Photograph Every Species of Hummingbird](https://www.audubon.org/magazine/meet-woman-mission-photograph-every-species-of-hummingbird-world)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 18:16:59](https://news.ycombinator.com/item?id=46016902) - [How to repurpose your old phone into a web server](https://far.computer/how-to/)
* [2025-11-22, 17:11:52](https://news.ycombinator.com/item?id=46016288) - [Show HN: I turned algae into a bio-altimeter and put it on a weather balloon](https://radi8.dev/blog/stratospore/)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
