# [News Summary](https://kherrick.github.io/news-summary/)

## Entertainment and Media

* [Stephen Colbert To Write Next 'Lord of the Rings' Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47520717)): Late-night TV host Stephen Colbert has reportedly been tapped to write the screenplay for the next installment in the 'Lord of the Rings' film series.

* [Tracy Kidder, Author of 'The Soul of a New Machine,' has died](https://www.nytimes.com/2026/03/25/books/tracy-kidder-dead.html) ([comments](https://news.ycombinator.com/item?id=47519802)): Pulitzer prize-winning author Tracy Kidder, famed for his influential tech book, 'The Soul of a New Machine,' has passed away.

## Legal and Social Media Developments

* [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47520717)): A groundbreaking ruling finds social media giants Meta and YouTube negligent, possibly setting a precedent for future cases involving social media responsibility.

* [Meta Loses Trial After Arguing Child Exploitation Was 'Inevitable'](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47520505)): Meta faces defeat in court as its claim that child exploitation is 'inevitable' is deemed unacceptable.

## Technology and Developer Tools

* [Your First Parser](https://davesnx.github.io/parseff/guides/first-parser/) ([comments](https://lobste.rs/s/ogjhf1/your_first_parser)): A practical guide to building and understanding your first parser, catering to beginners venturing into programming.

* [Compiler Crates](https://sdiehl.github.io/compiler-crates/) ([comments](https://lobste.rs/s/4qpylt/compiler_crates)): Learn about tools and resources for building custom compilers in the Rust ecosystem.

## Cybersecurity

* [A 32-Year-Old Bug Walks Into A Telnet Server (GNU inetutils CVE-2026-32746)](https://labs.watchtowr.com/a-32-year-old-bug-walks-into-a-telnet-server-gnu-inetutils-telnetd-cve-2026-32746/) ([comments](https://lobste.rs/s/udbivp/32_year_old_bug_walks_into_telnet_server)): An archaic bug in GNU inetutils Telnet server resurfaces after 32 years, shedding light on long-standing cybersecurity vulnerabilities.

* [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/23/1543235&from=rss)): U.S. law enforcement faces criticism for acquiring location data directly from brokers, potentially bypassing legal processes.

## Scientific Discoveries

* [Antimatter has been transported for the first time](https://www.nature.com/articles/d41586-026-00950-w) ([comments](https://news.ycombinator.com/item?id=47518171)): Scientists achieve a breakthrough by transporting antimatter for the first time, opening new doors in high-energy physics.

* [Quantization from the Ground Up](https://ngrok.com/blog/quantization) ([comments](https://news.ycombinator.com/item?id=47519295)): A foundational guide to quantization, exploring its principles and applications in machine learning.

## Exploration and Space

* [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=26/03/23/1543235&from=rss)): NASA shifts its focus to building a permanent lunar base, pausing work on its Lunar Gateway project.

* [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&utm_medium=feed)): Using the Chandra X-ray Observatory, scientists uncover new insights into why black holes stop growing.

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

* [2026-03-25, 19:08:38](https://news.ycombinator.com/item?id=47521787) - [Ball Pit](https://codepen.io/mrdoob_/full/NPRwLZd)
* [2026-03-25, 19:00:00](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stephen Colbert To Write Next &apos;Lord of the Rings&apos; Movie](https://entertainment.slashdot.org/story/26/03/25/1730218/stephen-colbert-to-write-next-lord-of-the-rings-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 18:53:18](https://lobste.rs/s/qnxnwk/apple_s_macos_unix_certification_is_lie) - [Apple’s macOS UNIX certification is a lie](https://www.osnews.com/story/141633/apples-macos-unix-certification-is-a-lie/)
* [2026-03-25, 18:26:13](https://lobste.rs/s/yeoe5q/which_design_doc_did_human_write) - [Which Design Doc Did a Human Write?](https://refactoringenglish.com/blog/ai-vs-human-design-doc/)
* [2026-03-25, 18:00:00](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://meta.slashdot.org/story/26/03/25/1745232/meta-and-youtube-found-negligent-in-landmark-social-media-addiction-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 17:43:17](https://news.ycombinator.com/item?id=47520717) - [Meta and Google found liable in social media addiction trial](https://www.bbc.co.uk/news/articles/c747x7gz249o)
* [2026-03-25, 17:35:54](https://lobste.rs/s/fagjz6/jon_gjengset_cost_concurrency) - [Jon Gjengset: The Cost of Concurrency Coordination](https://www.youtube.com/watch?v=tND-wBBZ8RY)
* [2026-03-25, 17:29:33](https://news.ycombinator.com/item?id=47520505) - [Meta and YouTube Found Negligent in Landmark Social Media Addiction Case](https://www.nytimes.com/2026/03/25/technology/social-media-trial-verdict.html)
* [2026-03-25, 17:14:43](https://lobste.rs/s/4i8uad/thoughts_on_slowing_fuck_down) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 17:02:45](https://lobste.rs/s/ogjhf1/your_first_parser) - [Your First Parser](https://davesnx.github.io/parseff/guides/first-parser/)
* [2026-03-25, 17:00:00](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Loses Trial After Arguing Child Exploitation Was &apos;Inevitable&apos;](https://meta.slashdot.org/story/26/03/25/172211/meta-loses-trial-after-arguing-child-exploitation-was-inevitable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 16:50:49](https://lobste.rs/s/tntlde/mojo_s_not_yet_python) - [Mojo&apos;s not (yet) Python](https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html)
* [2026-03-25, 16:43:08](https://news.ycombinator.com/item?id=47519802) - [Tracy Kidder, Author of &apos;The Soul of a New Machine,&apos; has died](https://www.nytimes.com/2026/03/25/books/tracy-kidder-dead.html)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 16:26:02](https://lobste.rs/s/4qpylt/compiler_crates) - [Compiler Crates](https://sdiehl.github.io/compiler-crates/)
* [2026-03-25, 16:24:15](https://news.ycombinator.com/item?id=47519519) - [Slovenian officials blame Israeli firm Black Cube for trying to manipulate vote](https://www.wsj.com/world/europe/spies-lies-and-fake-investors-in-disguise-how-plotters-tried-to-flip-a-european-election-1f42b39a)
* [2026-03-25, 16:20:18](https://lobste.rs/s/r1kw47/openbsd_on_motorola_88000_processors) - [OpenBSD on Motorola 88000 processors](http://miod.online.fr/software/openbsd/stories/m88k1.html)
* [2026-03-25, 16:06:34](https://news.ycombinator.com/item?id=47519295) - [Quantization from the Ground Up](https://ngrok.com/blog/quantization)
* [2026-03-25, 16:00:00](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Economy Is a &apos;Ponzi Scheme,&apos; Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 15:46:44](https://news.ycombinator.com/item?id=47518965) - [Musketeer d&apos;Artagnan&apos;s remains believed found under Dutch church](https://www.bbc.co.uk/news/articles/cm2rew2dgzzo)
* [2026-03-25, 15:34:02](https://news.ycombinator.com/item?id=47518785) - [Sony V. Cox Decision Reversed](https://supreme.justia.com/cases/federal/us/607/24-171/)
* [2026-03-25, 15:02:56](https://news.ycombinator.com/item?id=47518281) - [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html)
* [2026-03-25, 15:00:00](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Mass-Producing Hypersonic Missiles For $99,000](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 14:56:28](https://news.ycombinator.com/item?id=47518171) - [Antimatter has been transported for the first time](https://www.nature.com/articles/d41586-026-00950-w)
* [2026-03-25, 14:30:51](https://lobste.rs/s/ocrjck/disregard_attacks) - [\&quot;Disregard that!\&quot; attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 14:11:49](https://lobste.rs/s/b1kdqd/announcing_lix_2_95_kakigori) - [Announcing Lix 2.95 “Kakigōri”](https://lix.systems/blog/2026-03-25-lix-2.95-release/)
* [2026-03-25, 14:07:14](https://news.ycombinator.com/item?id=47517539) - [Thoughts on slowing the fuck down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 14:03:06](https://lobste.rs/s/oxkpme/introducing_gnome_fellowship_program) - [Introducing the GNOME Fellowship program](https://blogs.gnome.org/foundation/2026/03/24/introducing-gnome-fellowship/)
* [2026-03-25, 13:07:40](https://lobste.rs/s/epq3vv/introducing_ipxlat_stateless_ipv4_ipv6) - [Introducing ipxlat: a stateless IPv4/IPv6 translation device](https://lore.kernel.org/netdev/20260319151230.655687-1-ralf@mandelbit.com/)
* [2026-03-25, 12:49:14](https://news.ycombinator.com/item?id=47516650) - [Ensu – Ente’s Local LLM app](https://ente.com/blog/ensu/)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 11:07:43](https://lobste.rs/s/i8q7uf/ubuntu_looks_strip_grub_bare_minimum_for) - [Ubuntu Looks To Strip GRUB To The Bare Minimum For Better Security](https://discourse.ubuntu.com/t/streamlining-secure-boot-for-26-10/79069)
* [2026-03-25, 11:00:00](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 10:45:40](https://news.ycombinator.com/item?id=47515605) - [Building a coding agent in Swift from scratch](https://github.com/ivan-magda/swift-claude-code)
* [2026-03-25, 10:36:39](https://lobste.rs/s/xv13en/vitruvianos) - [VitruvianOS](https://v-os.dev/)
* [2026-03-25, 10:07:52](https://lobste.rs/s/zy8rgm/fyrox_1_0_0) - [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/)
* [2026-03-25, 08:37:47](https://lobste.rs/s/tponua/forking_httpx_as_httpxyz) - [Forking httpx as httpxyz](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 07:08:02](https://lobste.rs/s/udbivp/32_year_old_bug_walks_into_telnet_server) - [A 32-Year-Old Bug Walks Into A Telnet Server (GNU inetutils CVE-2026-32746)](https://labs.watchtowr.com/a-32-year-old-bug-walks-into-a-telnet-server-gnu-inetutils-telnetd-cve-2026-32746/)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 07:00:00](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 06:00:32](https://lobste.rs/s/lzxb0m/magic_link_pitfalls) - [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)
* [2026-03-25, 05:00:54](https://news.ycombinator.com/item?id=47513475) - [TurboQuant: Redefining AI efficiency with extreme compression](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/)
* [2026-03-25, 04:27:14](https://news.ycombinator.com/item?id=47513229) - [Miscellanea: The War in Iran](https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/)
* [2026-03-25, 03:30:00](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 03:17:06](https://news.ycombinator.com/item?id=47512816) - [VitruvianOS – Desktop Linux Inspired by the BeOS](https://v-os.dev)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-25, 00:44:55](https://news.ycombinator.com/item?id=47511703) - [Data centers are transitioning from AC to DC](https://spectrum.ieee.org/data-center-dc)
* [2026-03-25, 00:29:45](https://news.ycombinator.com/item?id=47511589) - [Flighty Airports](https://flighty.com/airports)
* [2026-03-24, 23:00:00](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11 Rewrites How Linux Runs Windows Games At the Kernel Level](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 22:00:00](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Android Automotive Is Moving From the Dashboard To the &apos;Brain&apos; of the Car](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 21:54:27](https://news.ycombinator.com/item?id=47509984) - [Jury finds Meta liable in case over child sexual exploitation on its platforms](https://www.cnn.com/2026/03/24/tech/meta-new-mexico-trial-jury-deliberation)
* [2026-03-24, 21:38:44](https://lobste.rs/s/7s4sjp/u_fdfd_arabic_ligature_bismillah_ar) - [\&quot;﷽\&quot; U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)](https://unicodeplus.com/U+FDFD)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 21:24:33](https://news.ycombinator.com/item?id=47509571) - [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead)
* [2026-03-24, 21:00:00](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Discontinues Sora Video Platform App](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 20:01:05](https://news.ycombinator.com/item?id=47508246) - [Goodbye to Sora](https://twitter.com/soraofficialapp/status/2036532795984715896)
* [2026-03-24, 20:00:00](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arm Unveils New AGI CPU With Meta As Debut Customer](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 19:00:00](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 18:03:48](https://news.ycombinator.com/item?id=47506713) - [Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller](https://videojs.org/blog/videojs-v10-beta-hello-world-again)
* [2026-03-24, 18:00:00](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 17:30:42](https://news.ycombinator.com/item?id=47506251) - [Arm AGI CPU](https://newsroom.arm.com/blog/introducing-arm-agi-cpu)
* [2026-03-24, 17:08:32](https://lobste.rs/s/xarlmy/go_naming_conventions_practical_guide) - [Go Naming Conventions: A Practical Guide](https://www.alexedwards.net/blog/go-naming-conventions)
* [2026-03-24, 17:00:00](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 15:58:57](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential) - [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)
* [2026-03-24, 15:58:33](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing) - [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev)
* [2026-03-24, 15:29:41](https://news.ycombinator.com/item?id=47504112) - [Apple Business](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 12:06:29](https://news.ycombinator.com/item?id=47501426) - [Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 18:49:02](https://news.ycombinator.com/item?id=47493567) - [Show HN: I built a site that maps the web from a bounty hunter&apos;s perspective](https://www.neobotnet.com/)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 21:18:30](https://news.ycombinator.com/item?id=47482259) - [Microbenchmarking Chipsets for Giggles](https://chipsandcheese.com/p/microbenchmarking-chipsets-for-giggles)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 16:44:18](https://news.ycombinator.com/item?id=47479362) - [VNDB founder Yorhel has died](https://vndb.org/t24787)
* [2026-03-22, 14:28:06](https://news.ycombinator.com/item?id=47477873) - [My Astrophotography in the Movie Project Hail Mary](https://rpastro.square.site/s/stories/phm)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 23:19:28](https://news.ycombinator.com/item?id=47472566) - [Looking at Unity made me understand the point of C++ coroutines](https://mropert.github.io/2026/03/20/unity_cpp_coroutines/)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
