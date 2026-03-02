# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [JSON Documents Performance, Storage and Search: MongoDB vs PostgreSQL](https://binaryigor.com/json-documents-mongodb-vs-postgresql.html) - A comparison of JSON handling in MongoDB and PostgreSQL, focusing on performance, storage, and search capabilities. [Comments](https://lobste.rs/s/rjgpkd/json_documents_performance_storage)

* [Narwhal v0.5.0 – pub/sub messaging server, now powered by io_uring](https://github.com/narwhal-io/narwhal/releases/tag/narwhal-0.5.0) - Explore the latest release of Narwhal, a pub/sub messaging server utilizing io_uring for performance enhancements. [Comments](https://lobste.rs/s/fztjyg/narwhal_v0_5_0_pub_sub_messaging_server_now)

* [Espanso - an open-source, cross-platform text expander](https://github.com/espanso/espanso) - Learn about this open-source tool for text expansion across multiple platforms. [Comments](https://lobste.rs/s/7vzrm3/espanso_open_source_cross_platform_text)

* [WebMCP is available for early preview](https://developer.chrome.com/blog/webmcp-epp) - A new tool for developers is now available for early feedback, showcasing innovative capabilities. [Comments](https://news.ycombinator.com/item?id=47211249)

## Artificial Intelligence Innovations and Challenges

* [Stack Overflow Adds New Features (Including AI Assist), Rethinks 'Look and Feel'](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Stack Overflow introduces AI-assistant features while overhauling its interface. [Comments](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Omni – Open-source workplace search and chat, built on Postgres](https://github.com/getomnico/omni) - A new open-source project aims to enhance workplace productivity. [Comments](https://news.ycombinator.com/item?id=47215427)

* [If AI writes code, should the session be part of the commit?](https://github.com/mandel-macaque/memento) - Exploring the implications of AI-generated code contributions in software development control systems. [Comments](https://news.ycombinator.com/item?id=47212355)

## Privacy, Security, and Controversial Policies

* [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - An overview of the decision to exclude specific AI services from federal use. [Comments](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)

* [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - Details of a newly uncovered security vulnerability in widespread Wi-Fi technologies. [Comments](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)

* [U.S. science agency moves to restrict foreign scientists from its labs](https://www.science.org/content/article/nist-moves-restrict-foreign-scientists-its-labs) - Examining new restrictions on foreign scientists in US government laboratories. [Comments](https://news.ycombinator.com/item?id=47215565)

## Space and Science Discoveries

* [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A potential groundbreaking explanation for Saturn's enigmatic features. [Comments](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Chronic Ocean Heating Fuels 'Staggering' Loss of Marine Life, Study Finds](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A troubling study revealing the effects of ocean heating on marine biodiversity. [Comments](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - Insights from research where human brain cells on a chip mastered a video game. [Comments](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)

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

* [2026-03-02, 13:05:37](https://news.ycombinator.com/item?id=47217491) - [Microslop Manifesto](http://microslop.com/)
* [2026-03-02, 13:04:55](https://lobste.rs/s/rjgpkd/json_documents_performance_storage) - [JSON Documents Performance, Storage and Search: MongoDB vs PostgreSQL](https://binaryigor.com/json-documents-mongodb-vs-postgresql.html)
* [2026-03-02, 12:45:23](https://lobste.rs/s/7fdbnh/apt_graph_colouring) - [APT Graph Colouring](https://github.com/RyanGibb/apt-graph-colouring)
* [2026-03-02, 12:34:00](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Adds New Features (Including AI Assist), Rethinks &apos;Look and Feel&apos;](https://developers.slashdot.org/story/26/03/02/069217/stack-overflow-adds-new-features-including-ai-assist-rethinks-look-and-feel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 12:26:44](https://lobste.rs/s/fztjyg/narwhal_v0_5_0_pub_sub_messaging_server_now) - [Narwhal v0.5.0 – pub/sub messaging server, now powered by io_uring](https://github.com/narwhal-io/narwhal/releases/tag/narwhal-0.5.0)
* [2026-03-02, 11:47:44](https://news.ycombinator.com/item?id=47216773) - [Show HN: Web Audio Studio – A Visual Debugger for Web Audio API Graphs](https://webaudio.studio/)
* [2026-03-02, 11:21:20](https://lobste.rs/s/rlof2z/libxml2_enterprise_edition_agpl_from) - [libxml2 Enterprise Edition (AGPL, from the previous maintainer)](https://codeberg.org/nwellnhof/libxml2-ee)
* [2026-03-02, 10:46:59](https://lobste.rs/s/uqpww1/building_quake_pc) - [Building a Quake PC](https://fabiensanglard.net/quake_pc/)
* [2026-03-02, 10:41:45](https://lobste.rs/s/lroieg/sabela_reactive_haskell_notebook) - [Sabela: A Reactive Haskell Notebook](https://datahaskell.org/blog/2026/03/01/sabela-reactive-haskell-notebooks.html)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 10:23:06](https://news.ycombinator.com/item?id=47216047) - [Microsoft bans the word \&quot;Microslop\&quot; on its Discord, then locks the server](https://www.windowslatest.com/2026/03/02/microsoft-gets-tired-of-microslop-bans-the-word-on-its-discord-then-locks-the-server-after-backlash/)
* [2026-03-02, 10:21:24](https://news.ycombinator.com/item?id=47216037) - [Jolla phone – a full-stack European alternative](https://commerce.jolla.com/products/jolla-phone-sept-26)
* [2026-03-02, 09:24:21](https://lobste.rs/s/esugjv/hardware_hotplug_events_on_linux_gory) - [Hardware hotplug events on Linux, the gory details](https://arcanenibble.github.io/hardware-hotplug-events-on-linux-the-gory-details.html)
* [2026-03-02, 09:20:06](https://news.ycombinator.com/item?id=47215565) - [U.S. science agency moves to restrict foreign scientists from its labs](https://www.science.org/content/article/nist-moves-restrict-foreign-scientists-its-labs)
* [2026-03-02, 09:15:06](https://lobste.rs/s/dppelv/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/dppelv/what_are_you_doing_this_week)
* [2026-03-02, 09:09:44](https://news.ycombinator.com/item?id=47215489) - [/e/OS is a complete \&quot;deGoogled\&quot;, mobile ecosystem](https://e.foundation/e-os/)
* [2026-03-02, 08:58:14](https://news.ycombinator.com/item?id=47215427) - [Show HN: Omni – Open-source workplace search and chat, built on Postgres](https://github.com/getomnico/omni)
* [2026-03-02, 08:50:11](https://lobste.rs/s/zxtpos/hacking_super_mario_64_using_covering) - [Hacking Super Mario 64 using covering spaces (+ hyperbolic geometry)](https://happel.ai/posts/covering-spaces-geometries-visualized/)
* [2026-03-02, 08:36:00](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a New Theory Finally Explain the Mysteries of the Planet Saturn?](https://science.slashdot.org/story/26/03/02/0636232/does-a-new-theory-finally-explain-the-mysteries-of-the-planet-saturn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 08:16:47](https://lobste.rs/s/awwhqz/motorola_s_new_partnership_with) - [Motorola&apos;s new partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 08:12:13](https://lobste.rs/s/yyqowj/gram_zed_fork_without_all_ai) - [GRAM: A Zed fork without all the AI](https://gram.liten.app/)
* [2026-03-02, 07:30:12](https://news.ycombinator.com/item?id=47214864) - [How to talk to anyone and why you should](https://www.theguardian.com/lifeandstyle/2026/feb/24/stranger-secret-how-to-talk-to-anyone-why-you-should)
* [2026-03-02, 06:48:07](https://news.ycombinator.com/item?id=47214645) - [Motorola announces a partnership with GrapheneOS Foundation](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 05:59:03](https://news.ycombinator.com/item?id=47214367) - [An interactive intro to Elliptic Curve Cryptography](https://growingswe.com/blog/elliptic-curve-cryptography)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 05:39:36](https://news.ycombinator.com/item?id=47214250) - [Evolving descriptive text of mental content from human brain activity](https://www.bbc.com/future/article/20260226-how-ai-can-read-your-thoughts)
* [2026-03-02, 05:35:00](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Unveils an Attachable AI Agent &apos;Companion&apos;  for Their Laptops ](https://mobile.slashdot.org/story/26/03/02/0530232/lenovo-unveils-an-attachable-ai-agent-companion-for-their-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 05:01:08](https://news.ycombinator.com/item?id=47214063) - [Process-Based Concurrency: Why Beam and OTP Keep Being Right](https://variantsystems.io/blog/beam-otp-process-concurrency)
* [2026-03-02, 04:23:53](https://news.ycombinator.com/item?id=47213866) - [Computer-generated dream world: Virtual reality for a 286 processor](https://deadlime.hu/en/2026/02/22/computer-generated-dream-world/)
* [2026-03-02, 04:21:55](https://lobste.rs/s/xgyxgd/c64_copy_protection) - [C64 copy protection](https://www.commodoregames.net/copyprotection/)
* [2026-03-02, 04:18:44](https://lobste.rs/s/dqb6hx/process_based_concurrency_why_beam_otp) - [Process-Based Concurrency: Why BEAM and OTP Keep Being Right](https://variantsystems.io/blog/beam-otp-process-concurrency)
* [2026-03-02, 04:15:16](https://news.ycombinator.com/item?id=47213819) - [How to record and retrieve anything you&apos;ve ever had to look up twice](https://ellanew.com/2026/03/02/ptpl-197-record-retrieve-from-a-personal-knowledgebase)
* [2026-03-02, 04:06:00](https://news.ycombinator.com/item?id=47213764) - [Everett shuts down Flock camera network after judge rules footage public record](https://www.wltx.com/article/news/nation-world/281-53d8693e-77a4-42ad-86e4-3426a30d25ae)
* [2026-03-02, 03:20:06](https://lobste.rs/s/mnvpnc/xuv_x11_user_daemon_automatically_run) - [xuv: X11 user daemon to automatically run commands triggered by user specified events](https://codeberg.org/NRK/xuv)
* [2026-03-02, 02:34:00](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does a Gas-Guzzler Revival Risk Dead-End Futures for US Automakers?](https://tech.slashdot.org/story/26/03/02/023210/does-a-gas-guzzler-revival-risk-dead-end-futures-for-us-automakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 01:57:21](https://lobste.rs/s/7vzrm3/espanso_open_source_cross_platform_text) - [Espanso - an open-source, cross-platform text expander](https://github.com/espanso/espanso)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-02, 00:57:40](https://news.ycombinator.com/item?id=47212576) - [Show HN: Timber – Ollama for classical ML models, 336x faster than Python](https://github.com/kossisoroyce/timber)
* [2026-03-02, 00:27:52](https://news.ycombinator.com/item?id=47212355) - [If AI writes code, should the session be part of the commit?](https://github.com/mandel-macaque/memento)
* [2026-03-01, 23:46:00](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway&apos;s Consumer Council Calls for Right to Repair and Antitrust Enforcement - and Mocks &apos;Enshittification&apos;](https://news.slashdot.org/story/26/03/01/2332240/norways-consumer-council-calls-for-right-to-repair-and-antitrust-enforcement---and-mocks-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 23:15:16](https://news.ycombinator.com/item?id=47211830) - [Right-sizes LLM models to your system&apos;s RAM, CPU, and GPU](https://github.com/AlexsJones/llmfit)
* [2026-03-01, 22:46:00](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AIs Can&apos;t Stop Recommending Nuclear Strikes In War Game Simulations](https://slashdot.org/story/26/03/01/1924223/ais-cant-stop-recommending-nuclear-strikes-in-war-game-simulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 22:18:10](https://news.ycombinator.com/item?id=47211280) - [Little Free Library](https://littlefreelibrary.org/)
* [2026-03-01, 22:13:58](https://news.ycombinator.com/item?id=47211249) - [WebMCP is available for early preview](https://developer.chrome.com/blog/webmcp-epp)
* [2026-03-01, 21:39:00](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chronic Ocean Heating Fuels &apos;Staggering&apos; Loss of Marine Life, Study Finds](https://news.slashdot.org/story/26/03/01/2136222/chronic-ocean-heating-fuels-staggering-loss-of-marine-life-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 20:59:00](https://slashdot.org/story/26/02/28/2046221/anthropics-claude-passes-chatgpt-now-1-on-apples-top-apps-chart-after-pentagon-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Passes ChatGPT, Now #1, on Apple&apos;s &apos;Top Apps&apos; Chart After Pentagon Controversy](https://slashdot.org/story/26/02/28/2046221/anthropics-claude-passes-chatgpt-now-1-on-apples-top-apps-chart-after-pentagon-controversy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 19:53:48](https://lobste.rs/s/zuh3zm/qman_more_modern_man_page_viewer_for_our) - [qman: A more modern man page viewer for our terminals](https://github.com/plp13/qman)
* [2026-03-01, 19:47:00](https://tech.slashdot.org/story/26/03/01/1945208/america-used-anthropics-ai-for-its-attack-on-iran-one-day-after-banning-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Used Anthropic&apos;s AI for Its Attack On Iran, One Day After Banning It](https://tech.slashdot.org/story/26/03/01/1945208/america-used-anthropics-ai-for-its-attack-on-iran-one-day-after-banning-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 19:25:04](https://news.ycombinator.com/item?id=47209788) - [Why does C have the best file API](https://maurycyz.com/misc/c_files/)
* [2026-03-01, 19:22:52](https://lobste.rs/s/pf4r2b/aws_middle_east_central_zone_uae_down) - [AWS Middle East Central Zone (UAE) down, apparently struck in war](https://health.aws.amazon.com/health/status)
* [2026-03-01, 19:19:08](https://lobste.rs/s/zwdukd/tsink_embedded_time_series_database_for) - [tsink - Embedded Time-Series Database for Rust](https://saturnine.cc/tsink)
* [2026-03-01, 18:34:00](https://tech.slashdot.org/story/26/03/01/054233/americans-listen-to-podcasts-more-than-talk-radio-now-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Listen to Podcasts More Than Talk Radio Now, Study Shows](https://tech.slashdot.org/story/26/03/01/054233/americans-listen-to-podcasts-more-than-talk-radio-now-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 18:04:31](https://lobste.rs/s/bvuwss/what_even_are_breeze_qtquick_qtwidget) - [What even are Breeze, QtQuick, QtWidget, Union..?](https://akselmo.dev/posts/what-are-breeze-widgets-quick-union/)
* [2026-03-01, 17:34:00](https://news.slashdot.org/story/26/03/01/0332257/north-americas-bird-populations-are-shrinking-faster-blame-climate-change-and-agriculture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [North America&apos;s Bird Populations Are Shrinking Faster.  Blame Climate Change and Agriculture](https://news.slashdot.org/story/26/03/01/0332257/north-americas-bird-populations-are-shrinking-faster-blame-climate-change-and-agriculture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 16:34:00](https://news.slashdot.org/story/26/03/01/042207/collabora-clashes-with-libreoffice-over-move-to-revive-libreoffice-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Collabora Clashes With LibreOffice Over Move To Revive LibreOffice Online](https://news.slashdot.org/story/26/03/01/042207/collabora-clashes-with-libreoffice-over-move-to-revive-libreoffice-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 15:52:57](https://lobste.rs/s/6a5wiw/fooling_go_s_x_509_certificate) - [Fooling Go&apos;s X.509 Certificate Verification](https://danielmangum.com/posts/fooling-go-x509-certificate-verification/)
* [2026-03-01, 15:40:29](https://lobste.rs/s/39kel0/why_does_c_have_best_file_api) - [Why does C have the best file API?](https://maurycyz.com/misc/c_files/)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 15:34:00](https://science.slashdot.org/story/26/02/28/0419233/galileos-handwritten-notes-discovered-in-a-medieval-astronomy-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Galileo&apos;s Handwritten Notes Discovered in a Medieval Astronomy Text](https://science.slashdot.org/story/26/02/28/0419233/galileos-handwritten-notes-discovered-in-a-medieval-astronomy-text?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 12:56:37](https://lobste.rs/s/8ixvz2/real_cost_random_i_o) - [The real cost of random I/O](https://vondra.me/posts/the-real-cost-of-random-io/)
* [2026-03-01, 12:13:03](https://news.ycombinator.com/item?id=47206009) - [Ghostty – Terminal Emulator](https://ghostty.org/docs)
* [2026-03-01, 11:34:00](https://linux.slashdot.org/story/26/03/01/0429234/some-linux-lts-kernels-will-be-supported-even-longer-announces-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Linux LTS Kernels Will Be Supported Even Longer, Announces Greg Kroah-Hartman](https://linux.slashdot.org/story/26/03/01/0429234/some-linux-lts-kernels-will-be-supported-even-longer-announces-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 09:39:40](https://lobste.rs/s/98geyn/64_bit_hurd_has_landed_guix) - [The 64-bit Hurd has landed in Guix](https://guix.gnu.org/en/blog/2026/the-64-bit-hurd/)
* [2026-03-01, 08:55:52](https://news.ycombinator.com/item?id=47204964) - [Decision trees – the unreasonable power of nested decision rules](https://mlu-explain.github.io/decision-tree/)
* [2026-03-01, 08:50:23](https://lobste.rs/s/xuv0vn/enshittificator) - [The Enshittificator](https://vimeo.com/1168468796)
* [2026-03-01, 07:08:49](https://lobste.rs/s/r9xqns/you_can_use_newline_characters_urls) - [You can use newline characters in URLs](https://lemire.me/blog/2026/02/28/you-can-use-newline-characters-in-urls/)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 05:34:00](https://slashdot.org/story/26/03/01/011246/silicon-valleys-ideas-mocked-over-penchant-for-favoring-young-entrepreneurs-with-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley&apos;s Ideas Mocked Over Penchant for Favoring Young Entrepreneurs with &apos;Agency&apos;](https://slashdot.org/story/26/03/01/011246/silicon-valleys-ideas-mocked-over-penchant-for-favoring-young-entrepreneurs-with-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-27, 21:31:39](https://news.ycombinator.com/item?id=47185911) - [Neocaml – Rubocop Creator&apos;s New OCaml Mode for Emacs](https://github.com/bbatsov/neocaml)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 17:41:51](https://news.ycombinator.com/item?id=47183196) - [Enable CORS for Your Blog](https://www.blogsareback.com/guides/enable-cors)
* [2026-02-27, 16:17:53](https://news.ycombinator.com/item?id=47182284) - [Tove Jansson&apos;s criticized illustrations of The Hobbit (2023)](https://tovejansson.com/hobbit-tolkien/)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 15:28:57](https://news.ycombinator.com/item?id=47181656) - [Mondrian Entered the Public Domain. The Estate Disagrees](https://copyrightlately.com/mondrian-public-domain-controversy/)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 08:31:57](https://news.ycombinator.com/item?id=47178077) - [Pluralism and the Modern Poet](https://www.lrb.co.uk/the-paper/v48/n03/seamus-perry/pluralism-and-the-modern-poet)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 04:38:15](https://news.ycombinator.com/item?id=47176576) - [Making Video Games in 2025 (without an engine)](https://www.noelberry.ca/posts/making_games_in_2025/)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
* [2026-02-26, 21:17:00](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss) - [Tesla &apos;Robotaxi&apos; Adds 5 More Crashes in Austin in a Month](https://soylentnews.org/article.pl?sid=26/02/25/1612247&amp;from=rss)
* [2026-02-26, 16:34:00](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss) - [SpaceX&apos;s Faulty Falcon Spewed Massive Lithium Plume Over Europe, Say Scientists](https://soylentnews.org/article.pl?sid=26/02/25/1553206&amp;from=rss)
* [2026-02-26, 11:48:00](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss) - [Michael Pollan Says AI May &apos;Think&apos; — but It Will Never be Conscious](https://soylentnews.org/article.pl?sid=26/02/25/1551209&amp;from=rss)
* [2026-02-26, 07:06:00](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss) - [80386 Protection](https://soylentnews.org/article.pl?sid=26/02/25/1546252&amp;from=rss)
* [2026-02-26, 02:20:00](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss) - [AI Bot Seemingly Shames Developer for Rejected Pull Request](https://soylentnews.org/article.pl?sid=26/02/25/1544219&amp;from=rss)
* [2026-02-26, 00:17:52](https://news.ycombinator.com/item?id=47160065) - [Go-Native Durable Execution](https://www.dbos.dev/blog/how-we-built-golang-native-durable-execution)
