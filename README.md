# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Failures and Controversies

* [Meta's live staged demo fails; the "AI" recording plays before the actor acts](https://old.reddit.com/r/LivestreamFail/comments/1nkbig7/metas_live_staged_demo_fails_the_ai_recording/) ([comments](https://news.ycombinator.com/item?id=45294859))

* [FTC and Seven States Sue Ticketmaster Over Alleged Coordination With Scalpers](https://yro.slashdot.org/story/25/09/18/181207/ftc-and-seven-states-sue-ticketmaster-over-alleged-coordination-with-scalpers?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45294440))

## AI and Browser Innovations

* [Google Adds Gemini To Chrome Desktop Browser for US Users](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45292475))

* [Chrome's New AI Features](https://blog.google/products/chrome/new-ai-features-for-chrome/) ([comments](https://news.ycombinator.com/item?id=45292260))

## Historic Technology and Retrospectives

* [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/) ([comments](https://lobste.rs/s/axzxca/netscape_navigator_2_0_was_released_30))

* [Three decades in kernelland](https://youtu.be/LS2LGMRzE1I) ([comments](https://lobste.rs/s/xpbt4h/three_decades_kernelland))

* [History of the GEM Desktop Environment](https://nemanjatrifunovic.substack.com/p/history-of-the-gem-desktop-environment) ([comments](https://lobste.rs/s/ihj3xo/history_gem_desktop_environment))

## Hardware and Market Developments

* [$599 MacBook With iPhone Chip Expected To Enter Production This Year](https://apple.slashdot.org/story/25/09/18/1210236/599-macbook-with-iphone-chip-expected-to-enter-production-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45289921))

* [Samsung Brings Ads To US Fridges](https://slashdot.org/story/25/09/18/1335216/samsung-brings-ads-to-us-fridges?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45289453))

## Insights into Artificial Intelligence

* [China's DeepSeek Says Its Hit AI Model Cost Just $294,000 To Train](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45291132))

* [Learn Your Way: Reimagining Textbooks with Generative AI](https://research.google/blog/learn-your-way-reimagining-textbooks-with-generative-ai/) ([comments](https://news.ycombinator.com/item?id=45292632))

## Emerging Technologies and Tools

* [TernFS: an exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/) ([comments](https://news.ycombinator.com/item?id=45290245))

* [Shipping 100 hardware units in under eight weeks](https://farhanhossain.substack.com/p/how-we-shipped-100-hardware-units) ([comments](https://news.ycombinator.com/item?id=45294390))

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

* [2025-09-18, 21:23:29](https://lobste.rs/s/t9ipim/cache_crash) - [The Cache Crash](https://www.fastmail.com/blog/the-cache-crash/)
* [2025-09-18, 21:01:00](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Gemini To Chrome Desktop Browser for US Users](https://tech.slashdot.org/story/25/09/18/1934251/google-adds-gemini-to-chrome-desktop-browser-for-us-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 20:50:33](https://news.ycombinator.com/item?id=45294859) - [Meta&apos;s live staged demo fails; the \&quot;AI\&quot; recording plays before the actor acts](https://old.reddit.com/r/LivestreamFail/comments/1nkbig7/metas_live_staged_demo_fails_the_ai_recording/)
* [2025-09-18, 20:37:28](https://lobste.rs/s/axzxca/netscape_navigator_2_0_was_released_30) - [Netscape Navigator 2.0 was released 30 years ago today](https://www.jwz.org/blog/2025/09/netscape-navigator-2-0-was-released-30-years-ago-today/)
* [2025-09-18, 20:15:45](https://news.ycombinator.com/item?id=45294440) - [Apple: SSH and FileVault](https://keith.github.io/xcode-man-pages/apple_ssh_and_filevault.7.html)
* [2025-09-18, 20:11:29](https://news.ycombinator.com/item?id=45294390) - [Shipping 100 hardware units in under eight weeks](https://farhanhossain.substack.com/p/how-we-shipped-100-hardware-units)
* [2025-09-18, 20:01:00](https://yro.slashdot.org/story/25/09/18/181207/ftc-and-seven-states-sue-ticketmaster-over-alleged-coordination-with-scalpers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC and Seven States Sue Ticketmaster Over Alleged Coordination With Scalpers](https://yro.slashdot.org/story/25/09/18/181207/ftc-and-seven-states-sue-ticketmaster-over-alleged-coordination-with-scalpers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 19:41:50](https://news.ycombinator.com/item?id=45294058) - [U.S. already has the critical minerals it needs, according to new analysis](https://www.minesnewsroom.com/news/us-already-has-critical-minerals-it-needs-theyre-being-thrown-away-new-analysis-shows)
* [2025-09-18, 19:21:33](https://news.ycombinator.com/item?id=45293839) - [tldraw SDK 4.0](https://tldraw.dev/blog/tldraw-sdk-4-0)
* [2025-09-18, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss) - [China Bans Nvidia&apos;s AI Chips](https://soylentnews.org/article.pl?sid=25/09/17/1723242&amp;from=rss)
* [2025-09-18, 19:01:00](https://slashdot.org/story/25/09/18/1335216/samsung-brings-ads-to-us-fridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Brings Ads To US Fridges](https://slashdot.org/story/25/09/18/1335216/samsung-brings-ads-to-us-fridges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 18:53:37](https://lobste.rs/s/ttj58a/reflection_c_s_decade_defining_rocket) - [Reflection — C++’s decade-defining rocket engine](https://herbsutter.com/2025/09/18/yesterdays-talk-video-posted-reflection-cs-decade-defining-rocket-engine/)
* [2025-09-18, 18:30:37](https://news.ycombinator.com/item?id=45293273) - [When Knowing Someone at Meta Is the Only Way to Break Out of \&quot;Content Jail\&quot;](https://www.eff.org/pages/when-knowing-someone-meta-only-way-break-out-content-jail)
* [2025-09-18, 18:02:00](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s DeepSeek Says Its Hit AI Model Cost Just $294,000 To Train](https://slashdot.org/story/25/09/18/1315238/chinas-deepseek-says-its-hit-ai-model-cost-just-294000-to-train?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 17:58:23](https://lobste.rs/s/ihj3xo/history_gem_desktop_environment) - [History of the GEM Desktop Environment](https://nemanjatrifunovic.substack.com/p/history-of-the-gem-desktop-environment)
* [2025-09-18, 17:47:19](https://news.ycombinator.com/item?id=45292694) - [This map is not upside down](https://www.maps.com/this-map-is-not-upside-down/)
* [2025-09-18, 17:42:56](https://news.ycombinator.com/item?id=45292648) - [Learn Your Way: Reimagining Textbooks with Generative AI](https://research.google/blog/learn-your-way-reimagining-textbooks-with-generative-ai/)
* [2025-09-18, 17:40:13](https://lobste.rs/s/xywqtx/pocket_casts_you_altered_deal_so_i_will) - [Pocket Casts, You Altered The Deal, So I Will Alter Your App](https://blog.matthewbrunelle.com/podcasts-you-altered-the-deal-so-i-will-alter-your-app/)
* [2025-09-18, 17:29:17](https://news.ycombinator.com/item?id=45292475) - [OpenTelemetry Collector: What It Is, When You Need It, and When You Don&apos;t](https://oneuptime.com/blog/post/2025-09-18-what-is-opentelemetry-collector-and-why-use-one/view)
* [2025-09-18, 17:12:36](https://news.ycombinator.com/item?id=45292260) - [Chrome&apos;s New AI Features](https://blog.google/products/chrome/new-ai-features-for-chrome/)
* [2025-09-18, 17:01:00](https://yro.slashdot.org/story/25/09/18/0449219/amazon-violated-online-shopper-protection-law-judge-rules-ahead-of-prime-signup-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Violated Online Shopper Protection Law, Judge Rules Ahead of Prime Signup Trial](https://yro.slashdot.org/story/25/09/18/0449219/amazon-violated-online-shopper-protection-law-judge-rules-ahead-of-prime-signup-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 16:43:43](https://news.ycombinator.com/item?id=45291858) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 16:41:52](https://lobste.rs/s/vrsdxo/configuration_files_are_user_interfaces) - [Configuration files are user interfaces](https://ochagavia.nl/blog/configuration-files-are-user-interfaces/)
* [2025-09-18, 16:26:04](https://news.ycombinator.com/item?id=45291618) - [Show HN: One prompt generates an app with its own database](https://www.manyminiapps.com/)
* [2025-09-18, 16:24:19](https://news.ycombinator.com/item?id=45291590) - [OneDev – Self-hosted Git server with CI/CD, Kanban, and packages](https://onedev.io/)
* [2025-09-18, 16:01:00](https://apple.slashdot.org/story/25/09/18/1210236/599-macbook-with-iphone-chip-expected-to-enter-production-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [$599 MacBook With iPhone Chip Expected To Enter Production This Year](https://apple.slashdot.org/story/25/09/18/1210236/599-macbook-with-iphone-chip-expected-to-enter-production-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 15:59:03](https://lobste.rs/s/ndlxdv/migrating_my_existing_elixir_app_ash) - [Migrating my Existing Elixir App to Ash Framework](https://blog.1-800-rad-dude.com/posts/2025/07-11-Migrating-my-Existing-Elixir-App-to-Ash-Framework.html)
* [2025-09-18, 15:47:40](https://news.ycombinator.com/item?id=45291132) - [American Prairie unlocks another 70k acres in Montana](https://earthhope.substack.com/p/victory-for-public-access-american)
* [2025-09-18, 15:40:29](https://news.ycombinator.com/item?id=45291024) - [Launch HN: Cactus (YC S25) – AI inference on smartphones](https://github.com/cactus-compute/cactus)
* [2025-09-18, 15:01:00](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Americans View AI and Its Impact on People and Society](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 14:59:24](https://lobste.rs/s/5bkb3b/elasticsearch_search_index_not_system) - [Elasticsearch: Search Index, Not System of Record](https://www.paradedb.com/blog/elasticsearch-was-never-a-database)
* [2025-09-18, 14:46:02](https://lobste.rs/s/yn7jdd/ternfs_exabyte_scale_multi_region) - [TernFS: an exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:36:44](https://news.ycombinator.com/item?id=45290245) - [TernFS – An exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 14:24:51](https://lobste.rs/s/umwu0s/flipper_zero_geiger_counter_module) - [Flipper Zero Geiger Counter Module](https://kasiin.top/blog/2025-08-04-flipper_zero_geiger_counter_module/)
* [2025-09-18, 14:11:31](https://lobste.rs/s/nhkmkg/website_inspo_collected_at_component) - [Website Inspo - Collected at the Component Level](https://www.inspo.page/)
* [2025-09-18, 14:09:46](https://news.ycombinator.com/item?id=45289921) - [Aaron Levie: Startups win in the AI era [video]](https://www.youtube.com/watch?v=uqc_vt95GJg)
* [2025-09-18, 14:01:00](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 13:54:46](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0) - [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/)
* [2025-09-18, 13:52:50](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development) - [How can we sandbox our development machines?](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development)
* [2025-09-18, 13:38:49](https://news.ycombinator.com/item?id=45289558) - [Luau – Fast, small, safe, gradually typed scripting language derived from Lua](https://luau.org/)
* [2025-09-18, 13:28:59](https://news.ycombinator.com/item?id=45289453) - [Flipper Zero Geiger Counter](https://kasiin.top/blog/2025-08-04-flipper_zero_geiger_counter_module/)
* [2025-09-18, 13:00:00](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Leads Biggest Drop In FICO Scores Since Financial Crisis](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:52:34](https://lobste.rs/s/xpbt4h/three_decades_kernelland) - [Three decades in kernelland](https://youtu.be/LS2LGMRzE1I)
* [2025-09-18, 12:17:51](https://news.ycombinator.com/item?id=45288690) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:02:45](https://lobste.rs/s/twm4fg/making_printed_circuit_boards_with_wild) - [Making Printed Circuit Boards with Wild Clay](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial)
* [2025-09-18, 11:04:48](https://news.ycombinator.com/item?id=45288161) - [Nvidia buys $5B in Intel](https://www.tomshardware.com/pc-components/cpus/nvidia-and-intel-announce-jointly-developed-intel-x86-rtx-socs-for-pcs-with-nvidia-graphics-also-custom-nvidia-data-center-x86-processors-nvidia-buys-usd5-billion-in-intel-stock-in-seismic-deal)
* [2025-09-18, 10:00:00](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Acquires Fyre Festival Brand](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:33:07](https://news.ycombinator.com/item?id=45287551) - [CircuitHub (YC W12) Is Hiring Operations Research Engineers (UK/Remote)](https://www.ycombinator.com/companies/circuithub/jobs/UM1QSjZ-operations-research-engineer)
* [2025-09-18, 09:26:20](https://lobste.rs/s/bpk3l6/ton_roosendaal_step_down_as_blender) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-18, 08:56:37](https://lobste.rs/s/oo15ry/access_logging_2025) - [Access logging in 2025](https://neugierig.org/software/blog/2025/09/access-log.html)
* [2025-09-18, 07:00:00](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 06:53:08](https://news.ycombinator.com/item?id=45286369) - [CERN Animal Shelter for Computer Mice (2011)](https://computer-animal-shelter.web.cern.ch/index.shtml)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:55:55](https://lobste.rs/s/whxl2y/nick_wellnhofer_steps_down_as_libxml2) - [Nick Wellnhofer steps down as libxml2 maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 04:41:17](https://lobste.rs/s/hydvux/we_have_outgrown_process_model) - [We have outgrown the Process model](https://sidhion.com/blog/process_model_outgrown/)
* [2025-09-18, 03:30:00](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Sending Its World-Beating Auto Industry Into a Tailspin](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:37:11](https://news.ycombinator.com/item?id=45283887) - [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack)
* [2025-09-18, 01:25:00](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Writes Less-Secure Code For Groups China Disfavors](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:16:02](https://lobste.rs/s/xm1lqy/introducing_gnome_49_brescia) - [Introducing GNOME 49, “Brescia”](https://release.gnome.org/49/)
* [2025-09-18, 00:45:00](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Child&apos;s Trauma, Chatbot Maker Allegedly Forced Mom To Arbitration For $100 Payout](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-18, 00:02:00](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GNOME 49 &apos;Brescia&apos; Desktop Environment Released](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 22:33:26](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm) - [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages)
* [2025-09-17, 20:16:15](https://lobste.rs/s/pqt0mb/steering_committee_retrospective) - [Steering Committee Retrospective](https://www.haskellforall.com/2025/09/steering-committee-retrospective.html)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 17:52:17](https://news.ycombinator.com/item?id=45265487) - [Midcentury North American Restaurant Placemats](https://casualarchivist.substack.com/p/order-up)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 00:20:38](https://news.ycombinator.com/item?id=45256575) - [The Sagrada Família Takes Its Final Shape](https://www.newyorker.com/magazine/2025/09/22/is-the-sagrada-familia-a-masterpiece-or-kitsch)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 08:25:20](https://news.ycombinator.com/item?id=45247381) - [I Built an Event-Sourcing Database Engine: Meet Genesis DB](https://www.genesisdb.io)
* [2025-09-15, 06:17:29](https://news.ycombinator.com/item?id=45246652) - [PostgreSQL Maintenance Without Superuser](https://boringsql.com/posts/postgresql-predefined-roles/)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 01:37:41](https://news.ycombinator.com/item?id=45245181) - [TIC-80 – Tiny Computer](https://tic80.com/)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
