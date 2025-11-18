# [News Summary](https://kherrick.github.io/news-summary/)

## Satellite and Space Technology

* [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)

## Privacy Concerns in Technology

* [Google Is Collecting Troves of Data From Downgraded Nest Thermostats](https://tech.slashdot.org/story/25/11/17/225229/google-is-collecting-troves-of-data-from-downgraded-nest-thermostats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Windows 11 adds AI agent that runs in background with access to personal folders](https://www.windowslatest.com/2025/11/18/windows-11-to-add-an-ai-agent-that-runs-in-background-with-access-to-personal-folders-warns-of-security-risk/)

## Cybersecurity and DDoS Attacks

* [Microsoft Mitigated the Largest Cloud DDoS Ever Recorded, 15.7 Tbps](https://it.slashdot.org/story/25/11/17/2121230/microsoft-mitigated-the-largest-cloud-ddos-ever-recorded-157-tbps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Azure hit by 15 Tbps DDoS attack using 500k IP addresses](https://www.bleepingcomputer.com/news/microsoft/microsoft-aisuru-botnet-used-500-000-ips-in-15-tbps-azure-ddos-attack/)

## AI and Automation

* [An AI Podcasting Machine Is Churning Out 3,000 Episodes a Week](https://slashdot.org/story/25/11/17/2114208/an-ai-podcasting-machine-is-churning-out-3000-episodes-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Use in 'Call of Duty: Black Ops 7' Draws Fire From US Lawmaker](https://games.slashdot.org/story/25/11/17/1743203/ai-use-in-call-of-duty-black-ops-7-draws-fire-from-us-lawmaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Development Tools

* [Show HN: Parqeye – A CLI tool to visualize and inspect Parquet files](https://github.com/kaushiksrini/parqeye)

* [Programming a Program-Oriented-Language](https://www.btbytes.com/docs/POL.pdf)

* [strace-macos: A clone of the strace command for macOS](https://github.com/Mic92/strace-macos)

## Scientific Innovations and Discoveries

* [Towards interplanetary QUIC traffic](https://ochagavia.nl/blog/towards-interplanetary-quic-traffic)

* [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)

## Environmental and Sustainability Efforts

* [Iran Begins Cloud Seeding To Induce Rain Amid Historic Drought](https://news.slashdot.org/story/25/11/17/1749243/iran-begins-cloud-seeding-to-induce-rain-amid-historic-drought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The time has finally come for geothermal energy](https://www.newyorker.com/magazine/2025/11/24/why-the-time-has-finally-come-for-geothermal-energy)

* [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)

## Notable Industry Trends

* [Take-Two CEO Says Consoles Aren't Going Away, But Gaming is Moving Toward PCs](https://games.slashdot.org/story/25/11/17/1648254/take-two-ceo-says-consoles-arent-going-away-but-gaming-is-moving-toward-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Lawmakers Want to Ban VPNs—And They Have No Idea What They're Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)

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

* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-18, 00:45:00](https://tech.slashdot.org/story/25/11/17/225229/google-is-collecting-troves-of-data-from-downgraded-nest-thermostats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Collecting Troves of Data From Downgraded Nest Thermostats](https://tech.slashdot.org/story/25/11/17/225229/google-is-collecting-troves-of-data-from-downgraded-nest-thermostats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 00:02:00](https://it.slashdot.org/story/25/11/17/2121230/microsoft-mitigated-the-largest-cloud-ddos-ever-recorded-157-tbps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Mitigated the Largest Cloud DDoS Ever Recorded, 15.7 Tbps](https://it.slashdot.org/story/25/11/17/2121230/microsoft-mitigated-the-largest-cloud-ddos-ever-recorded-157-tbps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 23:47:27](https://news.ycombinator.com/item?id=45959795) - [Windows 11 adds AI agent that runs in background with access to personal folders](https://www.windowslatest.com/2025/11/18/windows-11-to-add-an-ai-agent-that-runs-in-background-with-access-to-personal-folders-warns-of-security-risk/)
* [2025-11-17, 23:45:42](https://news.ycombinator.com/item?id=45959780) - [Show HN: Parqeye – A CLI tool to visualize and inspect Parquet files](https://github.com/kaushiksrini/parqeye)
* [2025-11-17, 23:30:49](https://lobste.rs/s/o933h4/programming_program_oriented_language) - [Programming a Program-Oriented-Language](https://www.btbytes.com/docs/POL.pdf)
* [2025-11-17, 23:20:00](https://slashdot.org/story/25/11/17/2114208/an-ai-podcasting-machine-is-churning-out-3000-episodes-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An AI Podcasting Machine Is Churning Out 3,000 Episodes a Week](https://slashdot.org/story/25/11/17/2114208/an-ai-podcasting-machine-is-churning-out-3000-episodes-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 22:40:00](https://yro.slashdot.org/story/25/11/17/215259/netchoice-sues-virginia-to-block-its-one-hour-social-media-limit-for-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NetChoice Sues Virginia To Block Its One-Hour Social Media Limit For Kids](https://yro.slashdot.org/story/25/11/17/215259/netchoice-sues-virginia-to-block-its-one-hour-social-media-limit-for-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 22:34:19](https://lobste.rs/s/ijt1su/there_are_no_upsides_object_oriented) - [There are no Upsides to Object Oriented Programming](https://maldus512.medium.com/there-are-no-upsides-to-object-oriented-programming-7ba965786894)
* [2025-11-17, 22:29:05](https://lobste.rs/s/uipd87/450_kb_static_site_generator_based_on) - [A 450 KB static site generator based on Markdown and Lua](https://log.schemescape.com/posts/static-site-generators/smallest-static-site-generator.html)
* [2025-11-17, 22:22:20](https://lobste.rs/s/y8nwa2/building_database_from_scratch) - [Building a Database From Scratch](https://stym06.github.io/posts/build-a-db-from-scratch/)
* [2025-11-17, 22:00:00](https://slashdot.org/story/25/11/17/2056254/tech-giants-cloud-power-probed-as-eu-weighs-inclusion-in-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Giants&apos; Cloud Power Probed As EU Weighs Inclusion In DMA](https://slashdot.org/story/25/11/17/2056254/tech-giants-cloud-power-probed-as-eu-weighs-inclusion-in-dma?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 21:56:58](https://news.ycombinator.com/item?id=45958815) - [Ion: Modern System Shell in Rust](https://github.com/redox-os/ion)
* [2025-11-17, 21:46:06](https://news.ycombinator.com/item?id=45958717) - [Run ancient Unix on modern hardware](https://github.com/felipenlunkes/run-ancient-unix)
* [2025-11-17, 21:42:24](https://lobste.rs/s/wqrzcy/chuck_moore_retires_from_colorforth) - [Chuck Moore retires from colorforth after latest Windows breaks rendering](https://www.youtube.com/watch?v=MvkGBWXb2oQ)
* [2025-11-17, 21:20:00](https://news.slashdot.org/story/25/11/17/1851247/buy-now-pay-later-is-expanding-fast-and-that-should-worry-everyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Buy Now, Pay Later&apos; is Expanding Fast, and That Should Worry Everyone](https://news.slashdot.org/story/25/11/17/1851247/buy-now-pay-later-is-expanding-fast-and-that-should-worry-everyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 21:07:28](https://lobste.rs/s/jrvtgn/add_vlan_opnsense_just_26_clicks_across_6) - [Add a VLAN to OPNsense in Just 26 Clicks Across 6 Screens](https://mtlynch.io/notes/opnsense-clicks/)
* [2025-11-17, 20:41:00](https://slashdot.org/story/25/11/17/1834233/harvard-has-almost-half-a-billion-dollars-in-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Harvard Has Almost Half a Billion Dollars in Crypto](https://slashdot.org/story/25/11/17/1834233/harvard-has-almost-half-a-billion-dollars-in-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 20:22:43](https://lobste.rs/s/plohjq/garbage_collection_is_useful) - [Garbage collection is useful](https://dubroy.com/blog/garbage-collection-is-useful/)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 20:04:49](https://news.ycombinator.com/item?id=45957629) - [Compiling Ruby to machine language](https://patshaughnessy.net/2025/11/17/compiling-ruby-to-machine-language)
* [2025-11-17, 20:01:00](https://news.slashdot.org/story/25/11/17/1810213/is-video-watching-bad-for-kids-the-effect-of-video-watching-on-childrens-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Video Watching Bad for Kids? The Effect of Video Watching on Children&apos;s Skills](https://news.slashdot.org/story/25/11/17/1810213/is-video-watching-bad-for-kids-the-effect-of-video-watching-on-childrens-skills?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 19:58:18](https://lobste.rs/s/1xkqad/compiling_ruby_machine_language) - [Compiling Ruby To Machine Language](https://patshaughnessy.net/2025/11/17/compiling-ruby-to-machine-language)
* [2025-11-17, 19:45:00](https://news.ycombinator.com/item?id=45957402) - [Show HN: PrinceJS – 19,200 req/s Bun framework in 2.8 kB (built by a 13yo)](https://princejs.vercel.app)
* [2025-11-17, 19:21:00](https://news.slashdot.org/story/25/11/17/1749243/iran-begins-cloud-seeding-to-induce-rain-amid-historic-drought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Begins Cloud Seeding To Induce Rain Amid Historic Drought](https://news.slashdot.org/story/25/11/17/1749243/iran-begins-cloud-seeding-to-induce-rain-amid-historic-drought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 18:59:01](https://lobste.rs/s/w0qf6j/sozu_http_reverse_proxy) - [Sōzu HTTP reverse proxy](https://github.com/sozu-proxy/sozu)
* [2025-11-17, 18:54:27](https://lobste.rs/s/bevihc/memory_corrupting_pong) - [Memory-corrupting Pong](https://arhan.sh/blog/memory-corrupting-pong/)
* [2025-11-17, 18:40:00](https://games.slashdot.org/story/25/11/17/1743203/ai-use-in-call-of-duty-black-ops-7-draws-fire-from-us-lawmaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use in &apos;Call of Duty: Black Ops 7&apos; Draws Fire From US Lawmaker](https://games.slashdot.org/story/25/11/17/1743203/ai-use-in-call-of-duty-black-ops-7-draws-fire-from-us-lawmaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 18:32:55](https://lobste.rs/s/lijpxq/towards_interplanetary_quic_traffic) - [Towards interplanetary QUIC traffic](https://ochagavia.nl/blog/towards-interplanetary-quic-traffic/)
* [2025-11-17, 18:07:17](https://news.ycombinator.com/item?id=45956176) - [An official atlas of North Korea](https://www.cartographerstale.com/p/an-official-atlas-of-north-korea)
* [2025-11-17, 18:05:29](https://news.ycombinator.com/item?id=45956154) - [Show HN: Kalendis – Scheduling API (keep your UI, we handle timezones/DST)](https://kalendis.dev)
* [2025-11-17, 18:01:00](https://games.slashdot.org/story/25/11/17/1648254/take-two-ceo-says-consoles-arent-going-away-but-gaming-is-moving-toward-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Take-Two CEO Says Consoles Aren&apos;t Going Away, But Gaming is Moving Toward PCs](https://games.slashdot.org/story/25/11/17/1648254/take-two-ceo-says-consoles-arent-going-away-but-gaming-is-moving-toward-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 17:39:15](https://news.ycombinator.com/item?id=45955900) - [Azure hit by 15 Tbps DDoS attack using 500k IP addresses](https://www.bleepingcomputer.com/news/microsoft/microsoft-aisuru-botnet-used-500-000-ips-in-15-tbps-azure-ddos-attack/)
* [2025-11-17, 17:21:00](https://news.slashdot.org/story/25/11/17/1631207/uk-cyber-ransom-ban-risks-collapse-of-essential-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Cyber Ransom Ban Risks Collapse of Essential Services](https://news.slashdot.org/story/25/11/17/1631207/uk-cyber-ransom-ban-risks-collapse-of-essential-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 17:18:43](https://lobste.rs/s/90ppkk/pre_pep_rust_for_cpython) - [Pre-PEP: Rust for CPython](https://discuss.python.org/t/pre-pep-rust-for-cpython/104906)
* [2025-11-17, 17:07:17](https://news.ycombinator.com/item?id=45955565) - [How when AWS was down, we were not](https://authress.io/knowledge-base/articles/2025/11/01/how-we-prevent-aws-downtime-impacts)
* [2025-11-17, 16:50:28](https://lobste.rs/s/5vfbpu/launching_2025_state_rust_survey) - [Launching the 2025 State of Rust Survey](https://blog.rust-lang.org/2025/11/17/launching-the-2025-state-of-rust-survey/)
* [2025-11-17, 16:41:00](https://tech.slashdot.org/story/25/11/17/1620236/global-web-freedoms-tumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Web Freedoms Tumble](https://tech.slashdot.org/story/25/11/17/1620236/global-web-freedoms-tumble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 16:30:57](https://lobste.rs/s/wmaczg/google_is_killing_open_web_part_2) - [Google is killing the open web, part 2](https://wok.oblomov.eu/tecnologia/google-killing-open-web-2/)
* [2025-11-17, 16:26:28](https://lobste.rs/s/q50ecd/strace_macos_clone_strace_command_for) - [strace-macos: A clone of the strace command for macOS](https://github.com/Mic92/strace-macos)
* [2025-11-17, 16:04:00](https://slashdot.org/story/25/11/17/1541210/why-hotel-room-cancellations-disappeared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Hotel-Room Cancellations Disappeared](https://slashdot.org/story/25/11/17/1541210/why-hotel-room-cancellations-disappeared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 15:50:04](https://news.ycombinator.com/item?id=45954640) - [Project Gemini](https://geminiprotocol.net/)
* [2025-11-17, 15:49:38](https://news.ycombinator.com/item?id=45954638) - [How to escape the Linux networking stack](https://blog.cloudflare.com/so-long-and-thanks-for-all-the-fish-how-to-escape-the-linux-networking-stack/)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 15:20:00](https://tech.slashdot.org/story/25/11/17/1518202/anthropic-ceo-says-hes-deeply-uncomfortable-with-unelected-tech-elites-shaping-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic CEO Says He&apos;s &apos;Deeply Uncomfortable&apos; With Unelected Tech Elites Shaping AI](https://tech.slashdot.org/story/25/11/17/1518202/anthropic-ceo-says-hes-deeply-uncomfortable-with-unelected-tech-elites-shaping-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-17, 15:04:26](https://news.ycombinator.com/item?id=45954210) - [WeatherNext 2: Our most advanced weather forecasting model](https://blog.google/technology/google-deepmind/weathernext-2/)
* [2025-11-17, 14:58:38](https://lobste.rs/s/0h7d8k/typechecking_is_undecideable_when_type) - [Typechecking is undecideable when &apos;type&apos; is a type (1989)](https://dspace.mit.edu/bitstream/handle/1721.1/149366/MIT-LCS-TR-458.pdf)
* [2025-11-17, 14:57:33](https://news.ycombinator.com/item?id=45954140) - [Aldous Huxley predicts Adderall and champions alternative therapies](https://angadh.com/inkhaven-7)
* [2025-11-17, 14:40:54](https://news.ycombinator.com/item?id=45953977) - [Show HN: ESPectre – Motion detection based on Wi-Fi spectre analysis](https://github.com/francescopace/espectre)
* [2025-11-17, 13:55:53](https://news.ycombinator.com/item?id=45953568) - [The time has finally come for geothermal energy](https://www.newyorker.com/magazine/2025/11/24/why-the-time-has-finally-come-for-geothermal-energy)
* [2025-11-17, 13:40:40](https://news.ycombinator.com/item?id=45953452) - [FreeMDU: Open-source Miele appliance diagnostic tools](https://github.com/medusalix/FreeMDU)
* [2025-11-17, 12:34:24](https://lobste.rs/s/sneljx/what_if_everything_was_async_nothing) - [What if everything was \&quot;Async\&quot;, but nothing needed \&quot;Await\&quot;?](https://www.youtube.com/watch?v=tpICs7uG3n8)
* [2025-11-17, 12:23:58](https://lobste.rs/s/ts2xa7/giving_c_superpower_custom_header_file) - [Giving C a Superpower: custom header file (safe_c.h)](https://hwisnu.bearblog.dev/giving-c-a-superpower-custom-header-file-safe_ch/)
* [2025-11-17, 12:06:37](https://news.ycombinator.com/item?id=45952890) - [Are you stuck in movie logic?](https://usefulfictions.substack.com/p/are-you-stuck-in-movie-logic)
* [2025-11-17, 11:07:37](https://lobste.rs/s/7wukhf/jupyterlite_kernel_for_haskell_powered) - [JupyterLite kernel for Haskell, powered by WebAssembly](https://github.com/tani/xeus-haskell)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 10:40:55](https://news.ycombinator.com/item?id=45952428) - [Giving C a superpower: custom header file (safe_c.h)](https://hwisnu.bearblog.dev/giving-c-a-superpower-custom-header-file-safe_ch/)
* [2025-11-17, 10:40:55](https://lobste.rs/s/eefzex/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/eefzex/what_are_you_doing_this_week)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 03:01:30](https://lobste.rs/s/ixt2po/cameras_tracking_you_security_nightmare) - [The Cameras Tracking You = A Security Nightmare](https://www.youtube.com/watch?v=uB0gr7Fh6lY)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-17, 00:50:34](https://lobste.rs/s/l1uoqb/javascript_engines_zoo) - [JavaScript engines zoo](https://ivankra.github.io/javascript-zoo/)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 16:39:57](https://lobste.rs/s/grands/i_think_nobody_wants_ai_firefox_mozilla) - [I think nobody wants AI in Firefox, Mozilla](https://manualdousuario.net/en/mozilla-firefox-window-ai/)
* [2025-11-16, 16:12:52](https://lobste.rs/s/qku1qr/living_my_best_sun_microsystems) - [Living my best Sun Microsystems ecosystem life in 2025](https://www.osnews.com/story/143570/living-my-best-sun-microsystems-ecosystem-life-in-2025/)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 14:29:30](https://lobste.rs/s/ddhd8c/brimstone_new_javascript_engine_written) - [brimstone: New JavaScript engine written in Rust](https://github.com/Hans-Halverson/brimstone)
* [2025-11-16, 13:45:45](https://news.ycombinator.com/item?id=45945114) - [Where do the children play?](https://unpublishablepapers.substack.com/p/where-do-the-children-play)
* [2025-11-16, 11:02:25](https://news.ycombinator.com/item?id=45944158) - [Astrophotographer snaps skydiver falling in front of the sun](https://www.iflscience.com/the-fall-of-icarus-you-have-never-seen-an-astrophotography-picture-like-this-81570)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 16:27:49](https://news.ycombinator.com/item?id=45938517) - [Show HN: Continuous Claude – run Claude Code in a loop](https://github.com/AnandChowdhary/continuous-claude)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 13:24:54](https://news.ycombinator.com/item?id=45937302) - [My stages of learning to be a socially normal person](https://sashachapin.substack.com/p/my-six-stages-of-learning-to-be-a)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 07:27:21](https://news.ycombinator.com/item?id=45935687) - [A graph explorer of the Epstein emails](https://epstein-doc-explorer-1.onrender.com/)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-14, 21:12:00](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss) - [What Do We Do If SETI is Successful?](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss)
* [2025-11-14, 16:31:00](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss) - [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
* [2025-11-14, 01:57:57](https://news.ycombinator.com/item?id=45922997) - [Our dogs&apos; diversity can be traced back to the Stone Age](https://www.bbc.com/news/articles/ce9d7j89ykro)
