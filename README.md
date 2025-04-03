# [News Summary](https://kherrick.github.io/news-summary/)

## Software Development and Programming Innovations

* [C++26: Variadic friends](https://www.sandordargo.com/blog/2025/04/02/cpp26-variadic-friends) introduces enhancements in C++ programming with the inclusion of variadic friendship—offering better code modularity and reuse. [Comments](https://lobste.rs/s/vsdeih/c_26_variadic_friends)

* [DST for Async Rust](https://s2.dev/blog/dst) delves into updates in Rust's asynchronous programming framework, focusing on dynamically sized types and their potential for enhanced versatility. [Comments](https://lobste.rs/s/qftydp/dst_for_async_rust)

* [An asynchronous VsCode-like HTTP plugin for Neovim](https://github.com/blacklight/nvim-http) explores a novel way to extend Neovim functionality with dynamic asynchronous behavior. [Comments](https://lobste.rs/s/ikc5av/asynchronous_vscode_like_http_plugin_for)

## Artificial Intelligence and its Applications

* [Vibe Coded AI App Generates Recipes With Very Few Guardrails](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights a creative yet potentially risky recipe-generation tool based on artificial intelligence. [Comments](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Search-R1: Training LLMs to Reason and Leverage Search Engines with RL](https://arxiv.org/abs/2503.09516) examines advancements in training large language models for improved reasoning and web integration. [Comments](https://news.ycombinator.com/item?id=43563265)

* [Anthropic Launches an AI Chatbot Plan For Colleges and Universities](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&utm_medium=feed) explores the introduction of AI tools designed for educational institutions. [Comments](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historic and Open-Source Tech Contributions

* [FreeDOS: History, Legacy, and a Valuable Resource for Old Machines](https://machaddr.substack.com/p/freedos-history-legacy-and-a-valuable) examines the enduring appeal of FreeDOS as a resource for retrocomputing and legacy hardware. [Comments](https://lobste.rs/s/apmwct/freedos_history_legacy_valuable)

* [Bill Gates Celebrates Microsoft&apos;s 50th By Releasing Altair BASIC Source Code](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) marks a notable occasion in tech history with the release of historic programming code. [Comments](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology's Ethical and Operational Challenges

* [Tech companies are telling immigrant employees on visas not to leave the U.S.](https://www.washingtonpost.com/technology/2025/03/31/immigration-h1b-fear-siliconvalley/) discusses the precarious balancing act of policy and human impacts within the U.S.'s technology sector. [Comments](https://news.ycombinator.com/item?id=43563918)

* [European Commission Takes Aim At End-to-End Encryption and Proposes Europol Become an EU FBI](https://it.slashdot.org/story/25/04/02/1927259/european-commission-takes-aim-at-end-to-end-encryption-and-proposes-europol-become-an-eu-fbi?utm_source=rss1.0mainlinkanon&utm_medium=feed) covers potential implications of stricter regulatory stances on encryption technology. [Comments](https://it.slashdot.org/story/25/04/02/1927259/european-commission-takes-aim-at-end-to-end-encryption-and-proposes-europol-become-an-eu-fbi?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## New Tools and Implementations in Tech

* [Matrix.org Will Migrate to MAS](https://matrix.org/blog/2025/04/matrix-auth-service/) details its transition to improve authentication ecosystems within its communication network. [Comments](https://news.ycombinator.com/item?id=43558464)

* [Pico.sh – SSH powered services for developers](https://pico.sh/) unveils tools aimed at leveraging SSH for streamlined developer workflows. [Comments](https://news.ycombinator.com/item?id=43560899)

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

* [2025-04-03, 03:39:36](https://lobste.rs/s/vsdeih/c_26_variadic_friends) - [C++26: variadic friends](https://www.sandordargo.com/blog/2025/04/02/cpp26-variadic-friends)
* [2025-04-03, 03:30:00](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe Coded AI App Generates Recipes With Very Few Guardrails](https://tech.slashdot.org/story/25/04/03/0230255/vibe-coded-ai-app-generates-recipes-with-very-few-guardrails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 03:20:51](https://lobste.rs/s/08nct4/fear_tech_2024) - [Fear in Tech (2024)](https://youtu.be/_dLLIjKz9MY)
* [2025-04-03, 03:20:16](https://lobste.rs/s/apmwct/freedos_history_legacy_valuable) - [FreeDOS: History, Legacy, and a Valuable Resource for Old Machines](https://machaddr.substack.com/p/freedos-history-legacy-and-a-valuable)
* [2025-04-03, 02:40:08](https://news.ycombinator.com/item?id=43564111) - [I maintain a 17 year old ThinkPad](https://pilledtexts.com/why-i-use-a-17-year-old-thinkpad/)
* [2025-04-03, 02:17:07](https://lobste.rs/s/qftydp/dst_for_async_rust) - [DST for async Rust](https://s2.dev/blog/dst)
* [2025-04-03, 02:04:03](https://news.ycombinator.com/item?id=43563918) - [Tech companies are telling immigrant employees on visas not to leave the U.S.](https://www.washingtonpost.com/technology/2025/03/31/immigration-h1b-fear-siliconvalley/)
* [2025-04-03, 02:02:58](https://news.ycombinator.com/item?id=43563915) - [Search could be so much better. And I don&apos;t mean chatbots with web access](https://www.matterrank.ai/mission)
* [2025-04-03, 01:45:00](https://hardware.slashdot.org/story/25/04/03/0110212/open-source-tool-designed-to-throttle-pc-and-server-performance-based-on-electricity-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open-Source Tool Designed To Throttle PC and Server Performance Based On Electricity Pricing](https://hardware.slashdot.org/story/25/04/03/0110212/open-source-tool-designed-to-throttle-pc-and-server-performance-based-on-electricity-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 01:07:00](https://tech.slashdot.org/story/25/04/03/015223/nanowrimo-to-close-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NaNoWriMo To Close After 20 Years](https://tech.slashdot.org/story/25/04/03/015223/nanowrimo-to-close-after-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 00:53:39](https://news.ycombinator.com/item?id=43563533) - [The reality of working in tech: We&apos;re not hired to write code (2023)](https://idiallo.com/blog/code-for-hire)
* [2025-04-03, 00:23:29](https://news.ycombinator.com/item?id=43563396) - [An open source, self-hosted implementation of the Tailscale control server](https://github.com/juanfont/headscale)
* [2025-04-03, 00:20:00](https://tech.slashdot.org/story/25/04/02/236215/five-vpn-apps-in-the-app-store-had-links-to-chinese-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five VPN Apps In the App Store Had Links To Chinese Military](https://tech.slashdot.org/story/25/04/02/236215/five-vpn-apps-in-the-app-store-had-links-to-chinese-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-03, 00:02:16](https://news.ycombinator.com/item?id=43563265) - [Search-R1: Training LLMs to Reason and Leverage Search Engines with RL](https://arxiv.org/abs/2503.09516)
* [2025-04-02, 23:40:00](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches an AI Chatbot Plan For Colleges and Universities](https://news.slashdot.org/story/25/04/02/232215/anthropic-launches-an-ai-chatbot-plan-for-colleges-and-universities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 23:10:55](https://news.ycombinator.com/item?id=43562860) - [Web Server for AoE 1, 2 and 3 DE supporting LAN multiplayer 100% offline](https://github.com/luskaner/ageLANServer)
* [2025-04-02, 23:00:00](https://slashdot.org/story/25/04/02/2152245/india-set-for-100-billion-startup-ipo-surge-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Set For $100 Billion Startup IPO Surge By 2027](https://slashdot.org/story/25/04/02/2152245/india-set-for-100-billion-startup-ipo-surge-by-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 22:20:53](https://news.ycombinator.com/item?id=43562384) - [Multi-Token Attention](https://arxiv.org/abs/2504.00927)
* [2025-04-02, 22:20:00](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates Celebrates Microsoft&apos;s 50th By Releasing Altair BASIC Source Code](https://slashdot.org/story/25/04/02/2145238/bill-gates-celebrates-microsofts-50th-by-releasing-altair-basic-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 21:54:50](https://news.ycombinator.com/item?id=43562119) - [Are people bad at their jobs or are the jobs just bad?](https://annehelen.substack.com/p/are-people-bad-at-their-jobsor-are)
* [2025-04-02, 21:54:13](https://news.ycombinator.com/item?id=43562109) - [MIT 6.5950 Secure Hardware Design – An open-source course on hardware attacks](https://shd.mit.edu/home/)
* [2025-04-02, 21:41:00](https://yro.slashdot.org/story/25/04/02/2140214/vast-pedophile-network-shut-down-in-europols-largest-csam-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vast Pedophile Network Shut Down In Europol&apos;s Largest CSAM Operation](https://yro.slashdot.org/story/25/04/02/2140214/vast-pedophile-network-shut-down-in-europols-largest-csam-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 21:10:37](https://lobste.rs/s/oodu8j/automated_deployments_how_we_made) - [Automated deployments: how we made deploying often easy](https://www.channable.com/tech/automated-deployments)
* [2025-04-02, 21:01:48](https://news.ycombinator.com/item?id=43561524) - [UpCodes (YC S17) Is Hiring SWEs and CSMs to make construction more productive](https://up.codes/careers?utm_source=HN)
* [2025-04-02, 21:01:00](https://yro.slashdot.org/story/25/04/02/204208/global-scam-industry-evolving-at-unprecedented-scale-despite-recent-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Scam Industry Evolving at &apos;Unprecedented Scale&apos; Despite Recent Crackdown](https://yro.slashdot.org/story/25/04/02/204208/global-scam-industry-evolving-at-unprecedented-scale-despite-recent-crackdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 20:20:00](https://it.slashdot.org/story/25/04/02/1927259/european-commission-takes-aim-at-end-to-end-encryption-and-proposes-europol-become-an-eu-fbi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Commission Takes Aim At End-to-End Encryption and Proposes Europol Become an EU FBI](https://it.slashdot.org/story/25/04/02/1927259/european-commission-takes-aim-at-end-to-end-encryption-and-proposes-europol-become-an-eu-fbi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 20:02:09](https://news.ycombinator.com/item?id=43560899) - [Pico.sh – SSH powered services for developers](https://pico.sh/)
* [2025-04-02, 20:01:01](https://news.ycombinator.com/item?id=43560885) - [Mozilla launching “Thundermail” email service to take on Gmail, Microsoft 365](https://www.techradar.com/pro/mozilla-launching-thundermail-email-service-to-take-on-gmail-microsoft-365)
* [2025-04-02, 19:59:17](https://lobste.rs/s/aupah1/gerrit_gitbutler_jujutsu_projects) - [Gerrit, GitButler, and Jujutsu projects collaborating on change-id commit footer](https://lore.kernel.org/git/CAESOdVAspxUJKGAA58i0tvks4ZOfoGf1Aa5gPr0FXzdcywqUUw@mail.gmail.com/T/#u)
* [2025-04-02, 19:54:40](https://lobste.rs/s/d6x0lo/year_rust_clickhouse) - [A Year of Rust in ClickHouse](https://clickhouse.com/blog/rust)
* [2025-04-02, 19:41:00](https://it.slashdot.org/story/25/04/02/1941244/microsoft-urges-businesses-to-abandon-office-perpetual-licenses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Urges Businesses To Abandon Office Perpetual Licenses](https://it.slashdot.org/story/25/04/02/1941244/microsoft-urges-businesses-to-abandon-office-perpetual-licenses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 19:00:00](https://news.slashdot.org/story/25/04/02/1846224/cybersecurity-professor-faced-china-funding-inquiry-before-disappearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cybersecurity Professor Faced China Funding Inquiry Before Disappearing](https://news.slashdot.org/story/25/04/02/1846224/cybersecurity-professor-faced-china-funding-inquiry-before-disappearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 18:59:19](https://lobste.rs/s/ikc5av/asynchronous_vscode_like_http_plugin_for) - [An asynchronous VsCode-like HTTP plugin for Neovim](https://github.com/blacklight/nvim-http)
* [2025-04-02, 18:47:59](https://lobste.rs/s/lvofny/valkey_new_hash_table) - [Valkey - A new hash table](https://valkey.io/blog/new-hash-table/)
* [2025-04-02, 18:34:22](https://news.ycombinator.com/item?id=43559855) - [Restructuring Announcement](https://automattic.com/2025/04/02/restructuring-announcement/)
* [2025-04-02, 18:30:00](https://slashdot.org/story/25/04/02/1829253/ai-masters-minecraft-deepmind-program-finds-diamonds-without-being-taught?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Masters Minecraft: DeepMind Program Finds Diamonds Without Being Taught](https://slashdot.org/story/25/04/02/1829253/ai-masters-minecraft-deepmind-program-finds-diamonds-without-being-taught?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 18:20:39](https://lobste.rs/s/l7any5/ai_ambivalence) - [AI ambivalence](https://nolanlawson.com/2025/04/02/ai-ambivalence/)
* [2025-04-02, 18:14:44](https://news.ycombinator.com/item?id=43559605) - [Why I don&apos;t discuss politics with friends](https://shwin.co/blog/why-i-dont-discuss-politics-with-friends)
* [2025-04-02, 18:00:11](https://lobste.rs/s/twylzo/test_sizes_2010) - [Test Sizes (2010)](https://testing.googleblog.com/2010/12/test-sizes.html)
* [2025-04-02, 17:30:08](https://news.ycombinator.com/item?id=43559122) - [When Jorge Luis Borges met one of the founders of AI](https://resobscura.substack.com/p/when-jorge-luis-borges-met-one-of)
* [2025-04-02, 17:24:39](https://lobste.rs/s/s6nlac/cell_phone_opsec_for_border_crossings) - [Cell Phone OPSEC for Border Crossings](https://www.schneier.com/blog/archives/2025/04/cell-phone-opsec-for-border-crossings.html)
* [2025-04-02, 16:59:00](https://news.slashdot.org/story/25/04/02/1659237/amazon-said-to-make-a-bid-to-buy-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Said To Make a Bid To Buy TikTok in the US](https://news.slashdot.org/story/25/04/02/1659237/amazon-said-to-make-a-bid-to-buy-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 16:54:34](https://lobste.rs/s/kvganp/fast_compilation_fast_execution_just) - [Fast Compilation or Fast Execution: Just Have Both](https://cedardb.com/blog/compilation/)
* [2025-04-02, 16:49:56](https://news.ycombinator.com/item?id=43558671) - [Tell HN: Announcing tomhow as a public moderator](https://news.ycombinator.com/item?id=43558671)
* [2025-04-02, 16:37:12](https://news.ycombinator.com/item?id=43558550) - [Hacking the call records of millions of Americans](https://evanconnelly.github.io/post/hacking-call-records/)
* [2025-04-02, 16:33:53](https://news.ycombinator.com/item?id=43558517) - [Show HN: Mermaid Chart VS Code Plugin: Mermaid.js Diagrams in Visual Studio Code](https://docs.mermaidchart.com/blog/posts/mermaid-chart-vs-code-plugin-create-and-edit-mermaid-js-diagrams-in-visual-studio-code)
* [2025-04-02, 16:28:50](https://news.ycombinator.com/item?id=43558464) - [Matrix.org Will Migrate to MAS](https://matrix.org/blog/2025/04/matrix-auth-service/)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 16:11:00](https://developers.slashdot.org/story/25/04/02/1611229/95-of-code-will-be-ai-generated-within-five-years-microsoft-cto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [95% of Code Will Be AI-Generated Within Five Years, Microsoft CTO Says](https://developers.slashdot.org/story/25/04/02/1611229/95-of-code-will-be-ai-generated-within-five-years-microsoft-cto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 16:03:12](https://news.ycombinator.com/item?id=43558182) - [Digital Archivists: Protecting Public Data from Erasure](https://spectrum.ieee.org/digital-archive)
* [2025-04-02, 15:57:55](https://lobste.rs/s/8emy5x/chawan_tui_web_browser) - [chawan: TUI Web Browser](https://sr.ht/%7Ebptato/chawan/)
* [2025-04-02, 15:52:22](https://news.ycombinator.com/item?id=43558077) - [Sailing from Berkeley to Hawaii in a 19ft Sailboat](https://potter-yachters.org/stories/teplow_to_hawaii.htm)
* [2025-04-02, 15:35:25](https://news.ycombinator.com/item?id=43557873) - [Animals Made from 13 Circles (2016)](https://www.dorithegiant.com/2016/05/13-animals-made-from-13-circles.html)
* [2025-04-02, 14:47:38](https://news.ycombinator.com/item?id=43557310) - [How Google built its Gemini robotics models](https://blog.google/products/gemini/how-we-built-gemini-robotics/)
* [2025-04-02, 14:10:57](https://lobste.rs/s/oliu4b/django_5_2_released) - [Django 5.2 released](https://www.djangoproject.com/weblog/2025/apr/02/django-52-released/)
* [2025-04-02, 13:31:52](https://lobste.rs/s/fwybvc/tailscale_enterprise_plan_9_support) - [Tailscale Enterprise Plan 9 Support](https://tailscale.com/blog/tailscale-enterprise-plan-9-support)
* [2025-04-02, 13:11:55](https://lobste.rs/s/autpsf/how_crawlers_impact_operations) - [How crawlers impact the operations of the Wikimedia projects](https://diff.wikimedia.org/2025/04/01/how-crawlers-impact-the-operations-of-the-wikimedia-projects/)
* [2025-04-02, 12:19:50](https://lobste.rs/s/wqdlu7/train_weather_tracker_with_raspberry_pi_e) - [Train &amp; Weather Tracker with Raspberry Pi &amp; E-Ink](https://sambroner.com/posts/raspberry-pi-train)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 11:29:24](https://lobste.rs/s/rhkjsk/grepping_logs_remains_terrible) - [Grepping logs remains terrible](https://chronicles.mad-scientist.club/tales/grepping-logs-remains-terrible/)
* [2025-04-02, 10:28:37](https://lobste.rs/s/1xj2y2/fifth_kind_optimisation) - [The Fifth Kind of Optimisation](https://tratt.net/laurie/blog/2025/the_fifth_kind_of_optimisation.html)
* [2025-04-02, 08:58:25](https://lobste.rs/s/9r0tbx/xan_csv_magician) - [xan: The CSV magician](https://github.com/medialab/xan)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 06:28:17](https://lobste.rs/s/ctzngb/cosy) - [CoSy](https://cosy.com/)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 16:59:01](https://lobste.rs/s/8dtj3n/new_state_art_turing_test_drawing_rubik_s) - [new state of the art turing test: drawing a rubik&apos;s cube](https://gist.github.com/izabera/3fb2f510f9e29811b57d3702002fc2a2)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 15:01:11](https://news.ycombinator.com/item?id=43547611) - [Ask HN: Who is hiring? (April 2025)](https://news.ycombinator.com/item?id=43547611)
* [2025-04-01, 12:33:08](https://lobste.rs/s/kubso9/why_f) - [Why F#?](https://batsov.com/articles/2025/03/30/why-fsharp/)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 11:12:19](https://lobste.rs/s/m8zt7j/think_i_implemented_unique_feature_my) - [Think I implemented a unique feature in my feed reader](https://andregarzia.com/2025/04/think-i-implemented-a-unique-feature-in-my-feed-reader.html)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
* [2025-03-31, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss) - [NASA Early Galaxy Discovery Shines Light on &apos;Cosmic Dark Ages&apos;](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss)
* [2025-03-31, 16:55:00](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss) - [The Practical Limitations of End-to-End Encryption](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss)
* [2025-03-31, 12:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss) - [Elon Musk’s X Has a New Owner](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss)
* [2025-03-31, 08:25:20](https://news.ycombinator.com/item?id=43532551) - [Apple&apos;s Cubify Anything: Scaling Indoor 3D Object Detection](https://github.com/apple/ml-cubifyanything)
* [2025-03-31, 07:24:00](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss) - [Apple and Google Face Billions in Liability From Trump&apos;s Tiktok Ban Delay](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss)
* [2025-03-31, 06:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss)
* [2025-03-31, 02:39:00](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss) - [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss)
* [2025-03-30, 21:53:00](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss) - [New Utah Law Makes App Stores Responsible for Age Verification](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss)
* [2025-03-30, 17:14:00](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss) - [DragonOS is a Lubuntu-Based Desktop Distro Which is Focused on Software Defined Radio (SDR)](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss)
* [2025-03-30, 15:07:31](https://news.ycombinator.com/item?id=43524772) - [Efficient light control: Meta-optics replace conventional lenses](https://phys.org/news/2025-03-efficient-meta-optics-conventional-lenses.html)
* [2025-03-30, 14:25:26](https://news.ycombinator.com/item?id=43524461) - [TV Garden](https://tv.garden/)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss) - [I&apos;m an American Software Developer and the \&quot;Broligarchs\&quot; Don&apos;t Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss)
* [2025-03-30, 11:11:35](https://news.ycombinator.com/item?id=43523220) - [Minimal CSS-only blurry image placeholders](https://leanrada.com/notes/css-only-lqip/)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss)
* [2025-03-30, 07:15:56](https://news.ycombinator.com/item?id=43522060) - [Ploopy Classic 2 open source trackball](https://blog.ploopy.co/the-classic-2-is-here-186)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss)
