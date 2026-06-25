# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Source Developments

* [LuaJIT 3.0 proposed syntax extensions](https://github.com/LuaJIT/LuaJIT/issues/1475) ([comments](https://news.ycombinator.com/item?id=48667336))

* [Zero-Downtime Deployments with Docker Compose – No Kubernetes Required](https://statusdude.com/blog/zero-downtime-docker-compose) ([comments](https://news.ycombinator.com/item?id=48665130))

* [PostgreSQL is enough (2024)](https://gist.github.com/cpursley/c8fb81fe8a7e5df038158bdfe0f06dbb) ([comments](https://news.ycombinator.com/item?id=48666433))

* [RubyLLM: A Ruby framework for all major AI providers](https://rubyllm.com/) ([comments](https://news.ycombinator.com/item?id=48660711))

* [The HTTP QUERY Method](https://httpwg.org/http-extensions/draft-ietf-httpbis-safe-method-w-body.html#section-1-5.2) ([comments](https://lobste.rs/s/3orizi/http_query_method))

* [Porting WINE to a new Hobby OS](https://astral-os.org/posts/2026/04/03/wine-on-astral.html) ([comments](https://lobste.rs/s/aj0e9u/porting_wine_new_hobby_os))

* [I rewrote PostHog's SQL parser, 70x faster, while barely looking at the code](https://posthog.com/blog/sql-parser) ([comments](https://news.ycombinator.com/item?id=48663544))

* [Announcing the RubyConf VIP Raffle](https://rubycentral.org/news/announcing-the-rubyconf-vip-raffle) ([comments](https://lobste.rs/s/a72qhh/announcing_rubyconf_vip_raffle))

## AI and Computational Innovations

* [OpenAI Unveils First Chip As Part of Broadcom Deal](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48663324))

* [Boffin Claims Microsoft's 'Quantum Leap' Is Invalid Due To 'Basic Python Errors'](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48659483))

* [Intel And AMD's New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48643051))

## Cybersecurity and Privacy

* [Meta Pauses Employee-Tracking Program Following Internal Data Leak](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48666100))

* [Ignore DNSSEC if you like MITM attacks](https://whynothugo.nl/journal/2026/06/24/ignore-dnssec-if-you-like-mitm-attacks/) ([comments](https://lobste.rs/s/pcuxjt/ignore_dnssec_if_you_like_mitm_attacks))

* [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48657030))

* [Exploiting vulnerabilities in Johnson & Johnson web apps](https://eaton-works.com/2026/06/24/jnj-webapp-hacks/) ([comments](https://lobste.rs/s/rl7aid/exploiting_vulnerabilities_johnson))

## Workforce and Economic Insights

* [Elastic lays off 7% of employees](https://www.elastic.co/blog/ceo-ash-kulkarni-announcement-to-elastic-employees) ([comments](https://news.ycombinator.com/item?id=48666100))

* [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48657030))

## Innovations in Energy and Environment

* [Walmart's First Nuclear Deal Shows Demand Beyond AI Data Centers](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48664733))

* [45°C cooling design cuts data center water use to near zero](https://blogs.nvidia.com/blog/liquid-cooling-ai-factories/) ([comments](https://news.ycombinator.com/item?id=48660178))

* [Trump Admin Announces $17.5 Billion In Loans For 10 New Large Nuclear Reactors](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48663340))

* [Mushroom Behind 'Tiny Human' Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48659221))

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

* [2026-06-25, 00:41:43](https://news.ycombinator.com/item?id=48667336) - [LuaJIT 3.0 proposed syntax extensions](https://github.com/LuaJIT/LuaJIT/issues/1475)
* [2026-06-25, 00:28:15](https://lobste.rs/s/ebqmzl/are_we_globalshortcuts_yet) - [Are We GlobalShortcuts Yet?](https://areweglobalshortcutsyet.github.io)
* [2026-06-24, 23:46:37](https://news.ycombinator.com/item?id=48666927) - [Blogging Can Just Be Stating the Obvious](https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/)
* [2026-06-24, 23:00:00](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slate Auto&apos;s Radically Simple Electric Truck Starts At $24,950](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 22:39:37](https://news.ycombinator.com/item?id=48666433) - [PostgreSQL is enough (2024)](https://gist.github.com/cpursley/c8fb81fe8a7e5df038158bdfe0f06dbb)
* [2026-06-24, 22:00:00](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pauses Employee-Tracking Program Following Internal Data Leak](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 21:57:30](https://news.ycombinator.com/item?id=48666100) - [Elastic lays off 7% of employees](https://www.elastic.co/blog/ceo-ash-kulkarni-announcement-to-elastic-employees)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 21:00:00](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GTA VI Is a Worrying Sign For the Future of Physical Games](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 20:20:33](https://news.ycombinator.com/item?id=48665130) - [Zero-Downtime Deployments with Docker Compose – No Kubernetes Required](https://statusdude.com/blog/zero-downtime-docker-compose)
* [2026-06-24, 20:11:44](https://lobste.rs/s/zijb20/scaling_rails_41m_req_hour_8_dbs_disable) - [Scaling Rails: 41M Req/Hour, 8 DBs, disable_joins: true](https://andyatkinson.com/how-aura-frames-scales-for-peak-load-ruby-on-rails)
* [2026-06-24, 20:04:18](https://lobste.rs/s/3orizi/http_query_method) - [The HTTP QUERY Method](https://httpwg.org/http-extensions/draft-ietf-httpbis-safe-method-w-body.html#section-1-5.2)
* [2026-06-24, 20:03:57](https://lobste.rs/s/gkqien/sacr3d_rendering_engine_toolbox_do_3d) - [Sacr3d: A rendering engine toolbox to do 3D graphics in Scheme](https://teddd.srht.site/sacr3d/)
* [2026-06-24, 20:00:00](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Unveils First Chip As Part of Broadcom Deal](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 19:40:31](https://lobste.rs/s/pcuxjt/ignore_dnssec_if_you_like_mitm_attacks) - [Ignore DNSSEC if you like MITM attacks](https://whynothugo.nl/journal/2026/06/24/ignore-dnssec-if-you-like-mitm-attacks/)
* [2026-06-24, 19:40:11](https://news.ycombinator.com/item?id=48664733) - [GitHub shouldn&apos;t be a dependency for publishing Rust on crates.io](https://infosec.exchange/@mttaggart/116806641273303255)
* [2026-06-24, 19:20:05](https://lobste.rs/s/qczicy/microspeak_elaborated_isn_t_escrow_just) - [Microspeak elaborated: Isn&apos;t escrow just a release candidate by another name?](https://devblogs.microsoft.com/oldnewthing/20260623-00/?p=112462)
* [2026-06-24, 19:00:00](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart&apos;s First Nuclear Deal Shows Demand Beyond AI Data Centers](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 18:37:10](https://lobste.rs/s/rl7aid/exploiting_vulnerabilities_johnson) - [Exploiting vulnerabilities in Johnson &amp; Johnson web apps](https://eaton-works.com/2026/06/24/jnj-webapp-hacks/)
* [2026-06-24, 18:31:10](https://lobste.rs/s/wlodc0/i_fed_people_building_metaverse) - [I Fed the People Building the Metaverse](https://yeastconfections.substack.com/p/i-fed-the-people-building-the-metaverse)
* [2026-06-24, 18:05:33](https://news.ycombinator.com/item?id=48663544) - [I rewrote PostHog&apos;s SQL parser, 70x faster, while barely looking at the code](https://posthog.com/blog/sql-parser)
* [2026-06-24, 18:00:00](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bob Iger&apos;s Disney Wanted Apple, Twitter, and 007](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 17:47:00](https://news.ycombinator.com/item?id=48663324) - [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
* [2026-06-24, 17:21:34](https://news.ycombinator.com/item?id=48662999) - [Computer use in Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/)
* [2026-06-24, 17:13:20](https://lobste.rs/s/uydwch/blamba) - [Blåmba](https://kittenlabs.de/blamba/)
* [2026-06-24, 17:08:52](https://lobste.rs/s/frfsss/using_gini_coefficient_plan_edge) - [Using the Gini Coefficient to Plan Edge Capacity](https://www.fastly.com/blog/using-gini-coefficient-plan-edge-capacity)
* [2026-06-24, 17:00:00](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffin Claims Microsoft&apos;s &apos;Quantum Leap&apos; Is Invalid Due To &apos;Basic Python Errors&apos;](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 16:36:06](https://lobste.rs/s/a72qhh/announcing_rubyconf_vip_raffle) - [Announcing the RubyConf VIP Raffle](https://rubycentral.org/news/announcing-the-rubyconf-vip-raffle/)
* [2026-06-24, 16:35:56](https://news.ycombinator.com/item?id=48662381) - [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 16:09:01](https://lobste.rs/s/kmx6wx/how_write_effective_software_design) - [How to Write an Effective Software Design Document](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/)
* [2026-06-24, 16:00:00](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Announces $17.5 Billion In Loans For 10 New Large Nuclear Reactors](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 15:56:58](https://lobste.rs/s/j3s5og/uk_wikipedia_workers_seek_union) - [UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition)
* [2026-06-24, 15:56:19](https://news.ycombinator.com/item?id=48661825) - [There are a few things that I look back on as my mistakes in the early days](https://twitter.com/ID_AA_Carmack/status/2069799283369345247)
* [2026-06-24, 15:48:03](https://lobste.rs/s/ttuhgn/introducing_mdn_mcp_server) - [Introducing the MDN MCP server](https://developer.mozilla.org/en-US/blog/introducing-mdn-mcp-server/)
* [2026-06-24, 15:00:00](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A 25-Year-Old Blog Looks Back At 40 Years of Computing](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 14:52:52](https://lobste.rs/s/hygtig/slint_1_17_released) - [Slint 1.17 Released](https://slint.dev/blog/slint-1.17-released)
* [2026-06-24, 14:41:41](https://news.ycombinator.com/item?id=48660711) - [RubyLLM: A Ruby framework for all major AI providers](https://rubyllm.com/)
* [2026-06-24, 14:32:12](https://news.ycombinator.com/item?id=48660579) - [PR spam today looks like email spam in the early 2000s](https://www.greptile.com/blog/prs-on-openclaw)
* [2026-06-24, 14:27:02](https://lobste.rs/s/aj0e9u/porting_wine_new_hobby_os) - [Porting WINE to a new Hobby OS](https://astral-os.org/posts/2026/04/03/wine-on-astral.html)
* [2026-06-24, 14:14:18](https://news.ycombinator.com/item?id=48660267) - [Show HN: Nub – A Bun-like all-in-one toolkit for Node.js](https://github.com/nubjs/nub)
* [2026-06-24, 14:10:11](https://news.ycombinator.com/item?id=48660178) - [45°C cooling design cuts data center water use to near zero](https://blogs.nvidia.com/blog/liquid-cooling-ai-factories/)
* [2026-06-24, 13:57:08](https://lobste.rs/s/0qfxpj/aol_was_down_1996_2026) - [AOL was down (1996) (2026)](https://ngrok.com/blog/aol-was-down-1996)
* [2026-06-24, 13:49:16](https://news.ycombinator.com/item?id=48659798) - [Qualcomm to Acquire Modular](https://www.reuters.com/business/qualcomm-buy-ai-startup-modular-2026-06-24/)
* [2026-06-24, 13:29:18](https://news.ycombinator.com/item?id=48659483) - [Show HN: LookAway, a Mac break reminder that knows when not to interrupt](https://lookaway.com)
* [2026-06-24, 13:08:52](https://news.ycombinator.com/item?id=48659165) - [Stealing Is a Skill](https://ben-mini.com/2026/stealing-is-a-skill)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 11:00:00](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mushroom Behind &apos;Tiny Human&apos; Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 10:11:58](https://lobste.rs/s/6vsofh/joy_power_understanding) - [The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)
* [2026-06-24, 09:48:26](https://lobste.rs/s/a7thxr/coming_loop) - [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)
* [2026-06-24, 09:37:56](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996) - [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)
* [2026-06-24, 09:00:00](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe: The World&apos;s Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 08:50:41](https://news.ycombinator.com/item?id=48657030) - [We’re making Bunny DNS free](https://bunny.net/blog/were-making-bunny-dns-free/)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 06:00:00](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 02:57:02](https://lobste.rs/s/ev9ruz/rrb_trees_efficient_immutable_vectors) - [RRB-Trees: Efficient Immutable Vectors](https://infoscience.epfl.ch/server/api/core/bitstreams/e5d662ea-1e8d-4dda-b917-8cbb8bb40bf9/content)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-24, 01:36:05](https://lobste.rs/s/gfroei/adversarial_communication) - [Adversarial Communication](https://blog.glyph.im/2026/06/adversarial-communication.html)
* [2026-06-24, 00:18:29](https://lobste.rs/s/pvdvww/how_we_found_bug_hyper_http_library) - [How we found a bug in the hyper HTTP library](https://blog.cloudflare.com/hyper-bug/)
* [2026-06-23, 23:00:00](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [29-Year-Old Squid Proxy Bug &apos;Squidbleed&apos; Can Leak Cleartext HTTP Requests](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 22:00:00](https://tech.slashdot.org/story/26/06/23/2015238/china-reclaims-fastest-supercomputer-at-2-exaflops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Reclaims Fastest Supercomputer At 2 Exaflops](https://tech.slashdot.org/story/26/06/23/2015238/china-reclaims-fastest-supercomputer-at-2-exaflops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 21:00:00](https://news.slashdot.org/story/26/06/23/1948242/wikipedia-cofounder-larry-sanger-banned-from-site-for-canvassing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Cofounder Larry Sanger Banned From Site for &apos;Canvassing&apos;](https://news.slashdot.org/story/26/06/23/1948242/wikipedia-cofounder-larry-sanger-banned-from-site-for-canvassing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 16:06:03](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era) - [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/)
* [2026-06-23, 15:31:21](https://news.ycombinator.com/item?id=48646659) - [Krea 2: SOTA open-weights 12B image model](https://www.krea.ai/blog/krea-2-technical-report)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 10:52:31](https://news.ycombinator.com/item?id=48643051) - [It&apos;s Only When You Look Back](https://www.markround.com/blog/2026/06/17/25-its-only-when-you-look-back/)
* [2026-06-23, 10:29:40](https://lobste.rs/s/y4hgjd/please_keep_code_descriptions_simple) - [Please keep code descriptions simple](https://akselmo.dev/posts/please-keep-code-descriptions-simple/)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 03:23:28](https://news.ycombinator.com/item?id=48639840) - [GLM-5.2 is a step change for open agents](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 15:15:38](https://news.ycombinator.com/item?id=48631366) - [Dostoyevsky isn&apos;t difficult](https://www.autodidacts.io/dostoyevsky-isnt-difficult/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 14:12:48](https://news.ycombinator.com/item?id=48619159) - [Crawling BitTorrent DHTs for Fun and Profit [pdf]](https://www.usenix.org/legacy/event/woot10/tech/full_papers/Wolchok.pdf)
* [2026-06-21, 12:57:10](https://news.ycombinator.com/item?id=48618555) - [Robotics Teams Are Rebuilding the Data Stack from Scratch](https://rerun.io/blog/data-layer-tax)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-21, 00:00:18](https://news.ycombinator.com/item?id=48614309) - [Pondering routing more of my traffic via nodes outside the UK](https://neilzone.co.uk/2026/06/pondering-routing-more-of-my-traffic-via-nodes-outside-the-uk-because-of-the-direction-of-uk-online-safety-policy/)
