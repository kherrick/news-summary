# [News Summary](https://kherrick.github.io/news-summary/)

## Innovation in Technology

* [Half-Life 2 in a Browser](https://hl2.slqnt.dev/) - Experience the iconic game Half-Life 2 directly in your browser, pushing the boundaries of online gaming technology and accessibility. [Comments](https://news.ycombinator.com/item?id=48669534).

* [tropius: detect AI tropes in prose](https://tangled.org/desertthunder.dev/tropius) - Explore an AI system designed to analyze and detect recurring narrative tropes within text. [Comments](https://lobste.rs/s/schop7/tropius_detect_ai_tropes_prose).

## Artificial Intelligence and Computational Advancements

* [Nvidia's New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - Efficient cooling innovation tailored for next-generation AI workloads. [Comments](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss).

* [Aisle Discovers 6 New CVEs in Curl, Including the Oldest Issue Ever Reported](https://aisle.com/blog/aisle-discovers-6-new-cves-in-curl-including-the-oldest-issue-ever-reported) - Security findings expose long-standing vulnerabilities in the widely used libcurl. [Comments](https://news.ycombinator.com/item?id=48670411).

* [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/) - OpenAI announces their entrance into the hardware domain in collaboration with Broadcom. [Comments](https://news.ycombinator.com/item?id=48663324).

## Scientific Discoveries and Space Exploration

* [NASA Rover Detects Potential Signatures of Ancient Microbial Life On Mars](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mars exploration moves forward with new signs of possible ancient microbial activity. [Comments](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - Milestone in space exploration as Voyager 1 continues its journey into deep space. [Comments](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss).

## Work and Society

* [Wikipedia Workers in Britain set global first by seeking union recognition](https://utaw.tech/news/wikipedia-recognition) - Wikipedia workers in Britain make history as they push for union recognition. [Comments](https://news.ycombinator.com/item?id=48669932).

* [Medical students are using popular research tool to pump out misleading studies](https://www.science.org/content/article/medical-students-are-using-popular-research-tool-pump-out-misleading-studies) - Investigative report reveals concerning misuse of academic research tools by medical students. [Comments](https://news.ycombinator.com/item?id=48668119).

## Energy and Environment

* [Walmart's First Nuclear Deal Shows Demand Beyond AI Data Centers](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Walmart's commitment to nuclear energy highlights its growing relevance beyond traditional sectors. [Comments](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Europe: The World's Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Alarming study reveals that Europe is warming faster than any other continent. [Comments](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2026-06-25, 09:23:21](https://lobste.rs/s/schop7/tropius_detect_ai_tropes_prose) - [tropius: detect AI tropes in prose](https://tangled.org/desertthunder.dev/tropius)
* [2026-06-25, 08:28:00](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - [Nvidia&apos;s New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss)
* [2026-06-25, 08:07:54](https://news.ycombinator.com/item?id=48670411) - [Aisle Discovers 6 New CVEs in Curl, Including the Oldest Issue Ever Reported](https://aisle.com/blog/aisle-discovers-6-new-cves-in-curl-including-the-oldest-issue-ever-reported)
* [2026-06-25, 07:02:37](https://news.ycombinator.com/item?id=48669932) - [Wikipedia Workers in Britain set global first by seeking union recognition](https://utaw.tech/news/wikipedia-recognition)
* [2026-06-25, 07:00:00](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Rover Detects Potential Signatures of Ancient Microbial Life On Mars](https://science.slashdot.org/story/26/06/25/0516211/nasa-rover-detects-potential-signatures-of-ancient-microbial-life-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 06:20:45](https://lobste.rs/s/oyurwh/xteink_x4_e_ink_reader) - [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/)
* [2026-06-25, 06:00:04](https://news.ycombinator.com/item?id=48669534) - [Half-Life 2 in a Browser](https://hl2.slqnt.dev/)
* [2026-06-25, 04:27:35](https://lobste.rs/s/elhkrh/deno_desktop) - [Deno Desktop](https://ankursethi.com/blog/deno-desktop/)
* [2026-06-25, 03:45:00](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss) - [Brave Gives Linux Users Its Stripped Down Origin Browser for Free](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss)
* [2026-06-25, 03:30:00](https://science.slashdot.org/story/26/06/24/1710253/stripe-anthropic-and-openai-are-backing-effort-to-stop-respiratory-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stripe, Anthropic, and OpenAI Are Backing Effort To Stop Respiratory Infections](https://science.slashdot.org/story/26/06/24/1710253/stripe-anthropic-and-openai-are-backing-effort-to-stop-respiratory-infections?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 02:51:29](https://news.ycombinator.com/item?id=48668255) - [The Unbearable Cheapness of Open Weight Models](https://jamesoclaire.com/2026/06/25/the-unbearable-cheapness-of-open-weight-models/)
* [2026-06-25, 02:30:18](https://news.ycombinator.com/item?id=48668119) - [Medical students are using popular research tool to pump out misleading studies](https://www.science.org/content/article/medical-students-are-using-popular-research-tool-pump-out-misleading-studies)
* [2026-06-25, 02:18:10](https://news.ycombinator.com/item?id=48668033) - [Cloudflare launched self-managed OAuth for all](https://blog.cloudflare.com/oauth-for-all/)
* [2026-06-25, 02:16:15](https://news.ycombinator.com/item?id=48668020) - [Zombie unicorns are haunting Silicon Valley](https://www.economist.com/business/2026/06/21/zombie-unicorns-are-haunting-silicon-valley)
* [2026-06-25, 01:14:12](https://lobste.rs/s/ekeur9/free_threaded_python_past_present_future) - [Free-threaded Python: past, present, and future](https://lwn.net/SubscriberLink/1078367/eaa511915870fdb2/)
* [2026-06-25, 01:11:10](https://news.ycombinator.com/item?id=48667560) - [Mixing Visual and Textual Code](https://arxiv.org/abs/2603.15855)
* [2026-06-25, 00:41:43](https://news.ycombinator.com/item?id=48667336) - [LuaJIT 3.0 proposed syntax extensions](https://github.com/LuaJIT/LuaJIT/issues/1475)
* [2026-06-25, 00:28:15](https://lobste.rs/s/ebqmzl/are_we_globalshortcuts_yet) - [Are We GlobalShortcuts Yet?](https://areweglobalshortcutsyet.github.io)
* [2026-06-24, 23:46:37](https://news.ycombinator.com/item?id=48666927) - [Blogging can just be stating the obvious](https://blog.jim-nielsen.com/2026/blogging-stating-the-obvious/)
* [2026-06-24, 23:00:00](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slate Auto&apos;s Radically Simple Electric Truck Starts At $24,950](https://tech.slashdot.org/story/26/06/24/2113207/slate-autos-radically-simple-electric-truck-starts-at-24950?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 22:00:00](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pauses Employee-Tracking Program Following Internal Data Leak](https://yro.slashdot.org/story/26/06/24/216239/meta-pauses-employee-tracking-program-following-internal-data-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 21:00:00](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GTA VI Is a Worrying Sign For the Future of Physical Games](https://games.slashdot.org/story/26/06/24/2053235/gta-vi-is-a-worrying-sign-for-the-future-of-physical-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 20:11:44](https://lobste.rs/s/zijb20/scaling_rails_41m_req_hour_8_dbs_disable) - [Scaling Rails: 41M Req/Hour, 8 DBs, disable_joins: true](https://andyatkinson.com/how-aura-frames-scales-for-peak-load-ruby-on-rails)
* [2026-06-24, 20:04:18](https://lobste.rs/s/3orizi/http_query_method) - [The HTTP QUERY Method](https://httpwg.org/http-extensions/draft-ietf-httpbis-safe-method-w-body.html#section-1-5.2)
* [2026-06-24, 20:03:57](https://lobste.rs/s/gkqien/sacr3d_rendering_engine_toolbox_do_3d) - [Sacr3d: A rendering engine toolbox to do 3D graphics in Scheme](https://teddd.srht.site/sacr3d/)
* [2026-06-24, 20:00:00](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Unveils First Chip As Part of Broadcom Deal](https://hardware.slashdot.org/story/26/06/24/1755203/openai-unveils-first-chip-as-part-of-broadcom-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 19:48:01](https://news.ycombinator.com/item?id=48664814) - [Anthropic says Alibaba illicitly extracted Claude AI model capabilities](https://www.reuters.com/world/china/anthropic-says-alibaba-illicitly-extracted-claude-ai-model-capabilities-2026-06-24/)
* [2026-06-24, 19:40:31](https://lobste.rs/s/pcuxjt/ignore_dnssec_if_you_like_mitm_attacks) - [Ignore DNSSEC if you like MITM attacks](https://whynothugo.nl/journal/2026/06/24/ignore-dnssec-if-you-like-mitm-attacks/)
* [2026-06-24, 19:20:05](https://lobste.rs/s/qczicy/microspeak_elaborated_isn_t_escrow_just) - [Microspeak elaborated: Isn&apos;t escrow just a release candidate by another name?](https://devblogs.microsoft.com/oldnewthing/20260623-00/?p=112462)
* [2026-06-24, 19:00:00](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart&apos;s First Nuclear Deal Shows Demand Beyond AI Data Centers](https://hardware.slashdot.org/story/26/06/24/175214/walmarts-first-nuclear-deal-shows-demand-beyond-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 18:37:10](https://lobste.rs/s/rl7aid/exploiting_vulnerabilities_johnson) - [Exploiting vulnerabilities in Johnson &amp; Johnson web apps](https://eaton-works.com/2026/06/24/jnj-webapp-hacks/)
* [2026-06-24, 18:31:10](https://lobste.rs/s/wlodc0/i_fed_people_building_metaverse) - [I Fed the People Building the Metaverse](https://yeastconfections.substack.com/p/i-fed-the-people-building-the-metaverse)
* [2026-06-24, 18:00:00](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bob Iger&apos;s Disney Wanted Apple, Twitter, and 007](https://apple.slashdot.org/story/26/06/24/170227/bob-igers-disney-wanted-apple-twitter-and-007?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 17:47:00](https://news.ycombinator.com/item?id=48663324) - [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
* [2026-06-24, 17:21:34](https://news.ycombinator.com/item?id=48662999) - [Computer use in Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/)
* [2026-06-24, 17:13:20](https://lobste.rs/s/uydwch/blamba) - [Blåmba](https://kittenlabs.de/blamba/)
* [2026-06-24, 17:00:00](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffin Claims Microsoft&apos;s &apos;Quantum Leap&apos; Is Invalid Due To &apos;Basic Python Errors&apos;](https://developers.slashdot.org/story/26/06/24/1644216/boffin-claims-microsofts-quantum-leap-is-invalid-due-to-basic-python-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 16:36:06](https://lobste.rs/s/a72qhh/announcing_rubyconf_vip_raffle) - [Announcing the RubyConf VIP Raffle](https://rubycentral.org/news/announcing-the-rubyconf-vip-raffle/)
* [2026-06-24, 16:35:56](https://news.ycombinator.com/item?id=48662381) - [The Xteink X4 E-Ink Reader](https://blog.omgmog.net/post/xteink-x4-e-ink-reader/)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 16:09:01](https://lobste.rs/s/kmx6wx/how_write_effective_software_design) - [How to Write an Effective Software Design Document](https://refactoringenglish.com/excerpts/write-an-effective-design-doc/)
* [2026-06-24, 16:00:00](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Announces $17.5 Billion In Loans For 10 New Large Nuclear Reactors](https://hardware.slashdot.org/story/26/06/24/0639241/trump-admin-announces-175-billion-in-loans-for-10-new-large-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 15:56:58](https://lobste.rs/s/j3s5og/uk_wikipedia_workers_seek_union) - [UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition)
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
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 11:00:00](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mushroom Behind &apos;Tiny Human&apos; Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 10:11:58](https://lobste.rs/s/6vsofh/joy_power_understanding) - [The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)
* [2026-06-24, 09:48:26](https://lobste.rs/s/a7thxr/coming_loop) - [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)
* [2026-06-24, 09:37:56](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996) - [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)
* [2026-06-24, 09:00:00](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe: The World&apos;s Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 06:00:00](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-24, 01:36:05](https://lobste.rs/s/gfroei/adversarial_communication) - [Adversarial Communication](https://blog.glyph.im/2026/06/adversarial-communication.html)
* [2026-06-23, 23:00:00](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [29-Year-Old Squid Proxy Bug &apos;Squidbleed&apos; Can Leak Cleartext HTTP Requests](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 16:06:03](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era) - [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/)
* [2026-06-23, 15:09:15](https://news.ycombinator.com/item?id=48646239) - [Show HN: Nimic – Pure Python as a systems language with AOT compilation](https://github.com/dima-quant/nimic)
* [2026-06-23, 15:00:02](https://news.ycombinator.com/item?id=48646077) - [Markdy: Like Mermaid Diagrams, but for Motion](https://markdy.com)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 03:23:28](https://news.ycombinator.com/item?id=48639840) - [GLM-5.2 is a step change for open agents](https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open)
* [2026-06-23, 02:27:20](https://news.ycombinator.com/item?id=48639429) - [Lies, Damn Lies and Database Benchmarks](https://questdb.com/blog/lies-damn-lies-and-database-benchmarks/)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-23, 01:30:59](https://news.ycombinator.com/item?id=48639018) - [Matt&apos;s Script Archive: The Scripts That Reshaped the Web](https://tedium.co/2026/06/22/matts-script-archive-retrospective/)
* [2026-06-23, 01:05:50](https://news.ycombinator.com/item?id=48638820) - [Shall We Play a Coordination Game?](https://kellyshortridge.com/blog/posts/shall-we-play-a-coordination-game/)
* [2026-06-22, 21:52:54](https://news.ycombinator.com/item?id=48636753) - [Bohemia Interactive: Cold War Assault Remastered Source Code on GitHub](https://github.com/BohemiaInteractive/CWR)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 15:15:38](https://news.ycombinator.com/item?id=48631366) - [Dostoyevsky isn&apos;t difficult](https://www.autodidacts.io/dostoyevsky-isnt-difficult/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
