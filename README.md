# [News Summary](https://kherrick.github.io/news-summary/)

## Military, Security, and Geopolitical Developments

* [Pentagon Formally Designates Anthropic a Supply-Chain Risk](https://slashdot.org/story/26/03/05/2233247/pentagon-formally-designates-anthropic-a-supply-chain-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/26/03/05/2233247/pentagon-formally-designates-anthropic-a-supply-chain-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Ethiopia gets $350M World Bank financing for its digital ID project (2024)](https://www.mariblock.com/stories/ethiopia-to-get-350-million-world-bank-financing-for-its-digital-id-project) ([comments](https://news.ycombinator.com/item?id=47267694))

* [Trump's TikTok Deal Benefited Firms That 'Personally Enriched' Him, Lawsuit Says](https://yro.slashdot.org/story/26/03/05/2041222/trumps-tiktok-deal-benefited-firms-that-personally-enriched-him-lawsuit-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/03/05/2041222/trumps-tiktok-deal-benefited-firms-that-personally-enriched-him-lawsuit-says?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Technology and Innovations

* [GLiNER2: Unified Schema-Based Information Extraction](https://github.com/fastino-ai/GLiNER2) ([comments](https://news.ycombinator.com/item?id=47266736))

* [OpenTitan Shipping in Production](https://opensource.googleblog.com/2026/03/opentitan-shipping-in-production.html) ([comments](https://news.ycombinator.com/item?id=47265619))

* [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) ([comments](https://news.ycombinator.com/item?id=47265045))

## Developments in Hardware

* [Mac Studio 512GB RAM Option Disappears Amid Global DRAM Shortage](https://hardware.slashdot.org/story/26/03/05/216223/mac-studio-512gb-ram-option-disappears-amid-global-dram-shortage?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/03/05/216223/mac-studio-512gb-ram-option-disappears-amid-global-dram-shortage?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AMD Will Bring Its 'Ryzen AI' Processors To Standard Desktop PCs For First Time](https://hardware.slashdot.org/story/26/03/05/2035216/amd-will-bring-its-ryzen-ai-processors-to-standard-desktop-pcs-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/03/05/2035216/amd-will-bring-its-ryzen-ai-processors-to-standard-desktop-pcs-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## AI Ethics and Security

* [A standard protocol to handle and discard low-effort, AI-Generated pull requests](https://406.fail/) ([comments](https://news.ycombinator.com/item?id=47267947))

* [Proton Mail Helped FBI Unmask Anonymous 'Stop Cop City' Protester](https://www.404media.co/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protestor/) ([comments](https://news.ycombinator.com/item?id=47267628))

* [A GitHub Issue Title Compromised 4,000 Developer Machines](https://grith.ai/blog/clinejection-when-your-ai-tool-installs-another) ([comments](https://lobste.rs/s/efkl8m/github_issue_title_compromised_4_000))

## Tutorials and Technical Insights

* [How to Install and Start Using LineageOS on your Phone](https://lockywolf.net/2026-02-19_How-to-install-and-start-using-LineageOS-on-your-phone.d/index.html) ([comments](https://lobste.rs/s/fhhg1v/how_install_start_using_lineageos_on_your))

* [Building a Database on S3](http://muratbuffalo.blogspot.com/2026/03/building-database-on-s3.html) ([comments](https://lobste.rs/s/gvo1uo/building_database_on_s3))

* [Datasets for Reconstructing Visual Perception from Brain Data](https://github.com/seelikat/neuro-visual-reconstruction-dataset-index) ([comments](https://news.ycombinator.com/item?id=47263661))

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

* [2026-03-06, 01:00:00](https://slashdot.org/story/26/03/05/2233247/pentagon-formally-designates-anthropic-a-supply-chain-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Formally Designates Anthropic a Supply-Chain Risk](https://slashdot.org/story/26/03/05/2233247/pentagon-formally-designates-anthropic-a-supply-chain-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-06, 00:40:41](https://news.ycombinator.com/item?id=47269263) - [Where things stand with the Department of War](https://www.anthropic.com/news/where-stand-department-war)
* [2026-03-06, 00:35:45](https://lobste.rs/s/fhhg1v/how_install_start_using_lineageos_on_your) - [How to Install and Start Using LineageOS on your Phone](https://lockywolf.net/2026-02-19_How-to-install-and-start-using-LineageOS-on-your-phone.d/index.html)
* [2026-03-05, 23:26:52](https://news.ycombinator.com/item?id=47268662) - [The next generations of Bubble Tea, Lip Gloss, and Bubbles are available now](https://charm.land/blog/v2/)
* [2026-03-05, 23:00:00](https://hardware.slashdot.org/story/26/03/05/216223/mac-studio-512gb-ram-option-disappears-amid-global-dram-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mac Studio 512GB RAM Option Disappears Amid Global DRAM Shortage](https://hardware.slashdot.org/story/26/03/05/216223/mac-studio-512gb-ram-option-disappears-amid-global-dram-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 22:04:59](https://news.ycombinator.com/item?id=47267947) - [A standard protocol to handle and discard low-effort, AI-Generated pull requests](https://406.fail/)
* [2026-03-05, 22:00:00](https://tech.slashdot.org/story/26/03/05/2049220/united-airlines-can-now-boot-passengers-who-refuse-to-use-headphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [United Airlines Can Now Boot Passengers Who Refuse To Use Headphones](https://tech.slashdot.org/story/26/03/05/2049220/united-airlines-can-now-boot-passengers-who-refuse-to-use-headphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 21:41:31](https://news.ycombinator.com/item?id=47267694) - [Ethiopia gets $350M World Bank financing for its digital ID project (2024)](https://www.mariblock.com/stories/ethiopia-to-get-350-million-world-bank-financing-for-its-digital-id-project)
* [2026-03-05, 21:38:29](https://lobste.rs/s/iqfdk8/ladybird_browser_update_february_2026) - [Ladybird browser update (February 2026)](https://www.youtube.com/watch?v=Y3tteHSrJlY)
* [2026-03-05, 21:35:40](https://news.ycombinator.com/item?id=47267628) - [Proton Mail Helped FBI Unmask Anonymous &apos;Stop Cop City&apos; Protester](https://www.404media.co/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protestor/)
* [2026-03-05, 21:25:03](https://lobste.rs/s/t429kz/async_programming_is_just_inject_time) - [Async Programming Is Just @Inject Time](https://willhbr.net/2026/03/02/async-inject-and-effects/)
* [2026-03-05, 21:00:00](https://yro.slashdot.org/story/26/03/05/2041222/trumps-tiktok-deal-benefited-firms-that-personally-enriched-him-lawsuit-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump&apos;s TikTok Deal Benefited Firms That &apos;Personally Enriched&apos; Him, Lawsuit Says](https://yro.slashdot.org/story/26/03/05/2041222/trumps-tiktok-deal-benefited-firms-that-personally-enriched-him-lawsuit-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 20:28:22](https://lobste.rs/s/lrgfpo/crosspoint_reader_firmware_for_xteink_x4) - [crosspoint-reader: Firmware for the Xteink X4 e-paper display reader](https://github.com/crosspoint-reader/crosspoint-reader)
* [2026-03-05, 20:26:51](https://lobste.rs/s/efkl8m/github_issue_title_compromised_4_000) - [A GitHub Issue Title Compromised 4,000 Developer Machines](https://grith.ai/blog/clinejection-when-your-ai-tool-installs-another)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 20:18:37](https://news.ycombinator.com/item?id=47266736) - [GLiNER2: Unified Schema-Based Information Extraction](https://github.com/fastino-ai/GLiNER2)
* [2026-03-05, 20:00:00](https://hardware.slashdot.org/story/26/03/05/2035216/amd-will-bring-its-ryzen-ai-processors-to-standard-desktop-pcs-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Will Bring Its &apos;Ryzen AI&apos; Processors To Standard Desktop PCs For First Time](https://hardware.slashdot.org/story/26/03/05/2035216/amd-will-bring-its-ryzen-ai-processors-to-standard-desktop-pcs-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 19:29:42](https://lobste.rs/s/zonhzr/message_passing_is_shared_mutable_state) - [Message Passing Is Shared Mutable State](https://causality.blog/essays/message-passing-is-shared-mutable-state/)
* [2026-03-05, 19:21:47](https://lobste.rs/s/i9akff/announcing_rust_1_94_0) - [Announcing Rust 1.94.0](https://blog.rust-lang.org/2026/03/05/Rust-1.94.0/)
* [2026-03-05, 19:21:03](https://news.ycombinator.com/item?id=47266030) - [Let&apos;s Get Physical](https://m4iler.cloud/posts/lets-get-physical/)
* [2026-03-05, 19:05:31](https://lobste.rs/s/pfu01n/tracing_discord_s_elixir_systems_without) - [Tracing Discord&apos;s Elixir Systems (Without Melting Everything)](https://discord.com/blog/tracing-discords-elixir-systems-without-melting-everything)
* [2026-03-05, 19:00:00](https://slashdot.org/story/26/03/05/1859243/openai-releases-new-chatgpt-model-for-working-in-excel-and-google-sheets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases New ChatGPT Model For Working In Excel and Google Sheets](https://slashdot.org/story/26/03/05/1859243/openai-releases-new-chatgpt-model-for-working-in-excel-and-google-sheets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 18:50:33](https://news.ycombinator.com/item?id=47265619) - [OpenTitan Shipping in Production](https://opensource.googleblog.com/2026/03/opentitan-shipping-in-production.html)
* [2026-03-05, 18:43:59](https://news.ycombinator.com/item?id=47265521) - [Remotely unlocking an encrypted hard disk](https://jyn.dev/remotely-unlocking-an-encrypted-hard-disk/)
* [2026-03-05, 18:31:12](https://lobste.rs/s/zpvdwb/telemetry_helps_you_still_get_turn_it_off) - [telemetry helps. you still get to turn it off](https://ritter.vg/blog-telemetry.html)
* [2026-03-05, 18:17:39](https://lobste.rs/s/6zdvb7/new_major_release_devenv) - [New major release of devenv](https://devenv.sh/blog/2026/03/05/devenv-20-a-fresh-interface-to-nix/)
* [2026-03-05, 18:08:10](https://news.ycombinator.com/item?id=47265045) - [GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
* [2026-03-05, 18:00:00](https://yro.slashdot.org/story/26/03/05/1753259/tim-sweeney-signed-away-his-right-to-criticize-google-until-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Sweeney Signed Away His Right To Criticize Google Until 2032](https://yro.slashdot.org/story/26/03/05/1753259/tim-sweeney-signed-away-his-right-to-criticize-google-until-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 17:45:15](https://lobste.rs/s/gvo1uo/building_database_on_s3) - [Building a Database on S3](http://muratbuffalo.blogspot.com/2026/03/building-database-on-s3.html)
* [2026-03-05, 17:44:10](https://news.ycombinator.com/item?id=47264756) - [The Brand Age](https://paulgraham.com/brandage.html)
* [2026-03-05, 17:43:31](https://news.ycombinator.com/item?id=47264741) - [Launch HN: Vela (YC W26) – AI for complex scheduling](https://news.ycombinator.com/item?id=47264741)
* [2026-03-05, 17:01:47](https://news.ycombinator.com/item?id=47264138) - [Show HN: PageAgent, A GUI agent that lives inside your web app](https://alibaba.github.io/page-agent/)
* [2026-03-05, 17:00:00](https://tech.slashdot.org/story/26/03/05/1619253/anthropic-ceo-dario-amodei-calls-openais-messaging-around-military-deal-straight-up-lies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Dario Amodei Calls OpenAI&apos;s Messaging Around Military Deal &apos;Straight Up Lies&apos;](https://tech.slashdot.org/story/26/03/05/1619253/anthropic-ceo-dario-amodei-calls-openais-messaging-around-military-deal-straight-up-lies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 16:26:29](https://news.ycombinator.com/item?id=47263661) - [Datasets for Reconstructing Visual Perception from Brain Data](https://github.com/seelikat/neuro-visual-reconstruction-dataset-index)
* [2026-03-05, 16:22:01](https://news.ycombinator.com/item?id=47263595) - [A GitHub Issue Title Compromised 4k Developer Machines](https://grith.ai/blog/clinejection-when-your-ai-tool-installs-another)
* [2026-03-05, 16:12:34](https://lobste.rs/s/vwqn0j/kill_cats_with_javascript_rts_game) - [Kill cats with JavaScript (RTS game)](https://yare.io)
* [2026-03-05, 16:04:54](https://news.ycombinator.com/item?id=47263323) - [Wikipedia was in read-only mode following mass admin account compromise](https://www.wikimediastatus.net)
* [2026-03-05, 16:00:00](https://tech.slashdot.org/story/26/03/05/0548253/amazons-bahrain-data-center-targeted-by-iran-for-us-military-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Bahrain Data Center Targeted By Iran For US Military Support](https://tech.slashdot.org/story/26/03/05/0548253/amazons-bahrain-data-center-targeted-by-iran-for-us-military-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 15:48:52](https://news.ycombinator.com/item?id=47263036) - [Show HN: Jido 2.0, Elixir Agent Framework](https://jido.run/blog/jido-2-0-is-here)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway.](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 15:00:00](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Firms Pledge At White House To Bear Costs of Energy For Datacenters](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 14:05:46](https://news.ycombinator.com/item?id=47261688) - [Judge orders government to begin refunding more than $130B in tariffs](https://www.wsj.com/politics/policy/judge-orders-government-to-begin-refunding-more-than-130-billion-in-tariffs-fdc1e62c)
* [2026-03-05, 14:00:00](https://slashdot.org/story/26/03/05/0531212/jensen-huang-says-nvidia-is-pulling-back-from-openai-and-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jensen Huang Says Nvidia Is Pulling Back From OpenAI and Anthropic](https://slashdot.org/story/26/03/05/0531212/jensen-huang-says-nvidia-is-pulling-back-from-openai-and-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 13:53:57](https://lobste.rs/s/9pcxko/espflash_go_cli_library_for_flashing) - [espflash: Go CLI and library for flashing firmware to Espressif ESP8266 and ESP32-family microcontrollers](https://github.com/tinygo-org/espflash)
* [2026-03-05, 13:52:43](https://news.ycombinator.com/item?id=47261561) - [Good software knows when to stop](https://ogirardot.writizzy.com/p/good-software-knows-when-to-stop)
* [2026-03-05, 13:25:12](https://lobste.rs/s/ncsx3a/gpl_upgrades_via_section_14_proxy) - [GPL upgrades via section 14 proxy delegation](https://runxiyu.org/comp/gplproxy/)
* [2026-03-05, 13:00:00](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar In Poor Countries Is Creating a Huge Lead Hazard](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 11:50:24](https://lobste.rs/s/0fuvw8/illustrated_tls_1_2_connection) - [The Illustrated TLS 1.2 Connection](https://tls12.xargs.org/)
* [2026-03-05, 11:44:01](https://lobste.rs/s/qepjb9/microslop_microsoft_s_ai_slop_manifesto) - [MICROSLOP — Microsoft&apos;s AI Slop Manifesto](https://microslop.com/)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 10:00:00](https://games.slashdot.org/story/26/03/04/2245259/humble-games-former-bosses-buy-the-studios-back-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humble Games&apos; Former Bosses Buy the Studio&apos;s Back Catalog](https://games.slashdot.org/story/26/03/04/2245259/humble-games-former-bosses-buy-the-studios-back-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 09:36:20](https://lobste.rs/s/xew97m/openbsd_on_sgi_rollercoaster_story) - [OpenBSD on SGI: a rollercoaster story](http://miod.online.fr/software/openbsd/stories/sgiall.html)
* [2026-03-05, 07:00:00](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cybersecurity Adds Exploited VMware Aria Operations To KEV Catalog](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 05:07:03](https://lobste.rs/s/jr3zym/relicensing_with_ai_assisted_rewrite) - [Relicensing with AI-assisted rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)
* [2026-03-05, 04:24:28](https://lobste.rs/s/ma7lsz/your_ai_slop_bores_me) - [your ai slop bores me](https://www.youraislopbores.me/)
* [2026-03-05, 03:00:00](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Nuclear Reactor Backed By Bill Gates Gets Federal Approval To Start Building](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 01:57:21](https://lobste.rs/s/kjb4gb/just_use_postgres) - [Just Use Postgres](http://amattn.com/p/just_use_postgres.html)
* [2026-03-05, 01:00:31](https://lobste.rs/s/xhoyg7/grand_vision_for_rust) - [A grand vision for Rust](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-04, 23:28:48](https://lobste.rs/s/1rh6f3/introducing_wgsl_rs) - [Introducing wgsl-rs](https://renderling.xyz/articles/introducing-wgsl-rs.html)
* [2026-03-04, 23:10:13](https://lobste.rs/s/dghhq8/you_bought_zuck_s_ray_bans_now_someone) - [You Bought Zuck’s Ray-Bans. Now Someone in Nairobi Is Watching You Poop](https://blog.adafruit.com/2026/03/04/you-bought-zucks-ray-bans-now-someone-in-nairobi-is-watching-you-poop/)
* [2026-03-04, 19:58:24](https://news.ycombinator.com/item?id=47252971) - [10% of Firefox crashes are caused by bitflips](https://mas.to/@gabrielesvelto/116171750653898304)
* [2026-03-04, 19:49:16](https://lobste.rs/s/dmdttx/jj_v0_39_0_released) - [jj v0.39.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.39.0)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 16:48:36](https://lobste.rs/s/nbsppn/au_revoir_eleventy) - [Au revoir, Eleventy](https://hamatti.org/posts/au-revoir-eleventy/)
* [2026-03-04, 15:57:29](https://news.ycombinator.com/item?id=47249387) - [CBP tapped into the online advertising ecosystem to track peoples’ movements](https://www.404media.co/cbp-tapped-into-the-online-advertising-ecosystem-to-track-peoples-movements/)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 23:09:21](https://news.ycombinator.com/item?id=47240424) - [A man who broke into jail](https://www.newyorker.com/magazine/2026/03/09/alexander-friedmann-profile-prison-reform)
* [2026-03-03, 20:14:03](https://news.ycombinator.com/item?id=47238272) - [A ternary plot of citrus geneology](https://www.jlauf.com/writing/citrus/)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 08:55:08](https://news.ycombinator.com/item?id=47229931) - [Show HN: Kanon 2 Enricher – the first hierarchical graphitization model](https://isaacus.com/blog/kanon-2-enricher)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 04:33:50](https://news.ycombinator.com/item?id=47228091) - [Optimizing Recommendation Systems with JDK&apos;s Vector API](https://netflixtechblog.com/optimizing-recommendation-systems-with-jdks-vector-api-30d2830401ec)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 17:05:18](https://news.ycombinator.com/item?id=47220739) - [A rabbit hole in 5 commits](https://www.codingwithjesse.com/blog/a-rabbit-hole-in-5-commits/)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 14:30:51](https://news.ycombinator.com/item?id=47218397) - [Greg Kroah-Hartman Stretches Support Periods for Key Linux LTS Kernels](https://fossforce.com/2026/03/greg-kroah-hartman-stretches-support-periods-for-key-linux-lts-kernels/)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 09:26:04](https://news.ycombinator.com/item?id=47215602) - [Hardware hotplug events on Linux, the gory details](https://arcanenibble.github.io/hardware-hotplug-events-on-linux-the-gory-details.html)
* [2026-03-02, 08:16:55](https://news.ycombinator.com/item?id=47215180) - [Converting dash cam videos into Panoramax images](https://www.openstreetmap.org/user/FeetAndInches/diary/408268)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
