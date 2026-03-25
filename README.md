# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Compiler Crates](https://sdiehl.github.io/compiler-crates/) highlights a collection of essential libraries for building compilers. [Comments](https://lobste.rs/s/4qpylt/compiler_crates)

* [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/) introduces the latest features in the popular programming language. [Comments](https://lobste.rs/s/hb04np/announcing_typescript_6_0)

* [Swift 6.3 Released](https://swift.org/blog/swift-6.3-released/) announces significant updates in Swift development. [Comments](https://lobste.rs/s/bfgcx7/swift_6_3_released)

* [Wine 11 Rewrites How Linux Runs Windows Games at the Kernel Level](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) introduces groundbreaking advancements for running Windows games on Linux.

* [Adding Structured Concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js) proposes a transformative approach to coding in JavaScript. [Comments](https://lobste.rs/s/xt8q7u/adding_structured_concurrency)

## Science and Space Exploration

* [Hubble Snaps a New Dazzling Photo of the Crab Nebula](https://nautil.us/hubble-snaps-a-new-dazzling-photo-of-the-crab-nebula-1279203) showcases a stunning glimpse into our universe. [Comments](https://news.ycombinator.com/item?id=47518649)

* [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) offers new insights into black hole behavior.

* [Antimatter has been transported for the first time](https://www.nature.com/articles/d41586-026-00950-w) marks a significant breakthrough in particle physics. [Comments](https://news.ycombinator.com/item?id=47518171)

## AI and Machine Learning Innovations

* [AI Economy is a 'Ponzi Scheme,' Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) provides a critical perspective on the growing AI economy.

* [TurboQuant: Redefining AI Efficiency with Extreme Compression](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/) introduces techniques to make AI faster and more efficient. [Comments](https://news.ycombinator.com/item?id=47513475)

## Historical Discoveries

* [Musketeer d'Artagnan's Remains Believed Found Under Dutch Church](https://www.bbc.co.uk/news/articles/cm2rew2dgzzo) uncovers historical secrets about the famed figure. [Comments](https://news.ycombinator.com/item?id=47518965)

* [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) reveals groundbreaking findings in particle physics.

## OpenBSD, Security, and Privacy Updates

* [OpenBSD on Motorola 88000 Processors](http://miod.online.fr/software/openbsd/stories/m88k1.html) revisits a notable era in processor and OS compatibility. [Comments](https://lobste.rs/s/r1kw47/openbsd_on_motorola_88000_processors)

* [A 32-Year-Old Bug Walks Into A Telnet Server](https://labs.watchtowr.com/a-32-year-old-bug-walks-into-a-telnet-server-gnu-inetutils-telnetd-cve-2026-32746) exposes a decades-old vulnerability in GNU Telnet. [Comments](https://lobste.rs/s/udbivp/32_year_old_bug_walks_into_telnet_server)

## Creative Tools and Platforms

* [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/) marks a new milestone for game development tools. [Comments](https://lobste.rs/s/zy8rgm/fyrox_1_0_0)

* [Introducing the GNOME Fellowship Program](https://blogs.gnome.org/foundation/2026/03/24/introducing-gnome-fellowship/) introduces a new avenue to support open-source contributors. [Comments](https://lobste.rs/s/oxkpme/introducing_gnome_fellowship_program)

## Cultural Shifts and Opinions

* [Apple Just Lost Me](https://andregarzia.com/2026/03/apple-just-lost-me.html) provides a candid personal reflection on Apple's practices. [Comments](https://news.ycombinator.com/item?id=47517701)

* [A Eulogy for Vim](https://drewdevault.com/2026/03/25/2026-03-25-Forking-vim.html) laments the evolution of the beloved text editor. [Comments](https://news.ycombinator.com/item?id=47519308)

## Military and Strategic Developments

* [China Is Mass-Producing Hypersonic Missiles For $99,000](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) highlights potential shifts in global defense economies.

## Legal Decisions and Controversies

* [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html) makes waves in the music industry regarding copyright laws. [Comments](https://news.ycombinator.com/item?id=47518281)

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

* [2026-03-25, 16:26:02](https://lobste.rs/s/4qpylt/compiler_crates) - [Compiler Crates](https://sdiehl.github.io/compiler-crates/)
* [2026-03-25, 16:20:18](https://lobste.rs/s/r1kw47/openbsd_on_motorola_88000_processors) - [OpenBSD on Motorola 88000 processors](http://miod.online.fr/software/openbsd/stories/m88k1.html)
* [2026-03-25, 16:07:12](https://news.ycombinator.com/item?id=47519308) - [A Eulogy for Vim](https://drewdevault.com/2026/03/25/2026-03-25-Forking-vim.html)
* [2026-03-25, 16:00:00](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Economy Is a &apos;Ponzi Scheme,&apos; Says AI Doc Director](https://entertainment.slashdot.org/story/26/03/24/2343243/ai-economy-is-a-ponzi-scheme-says-ai-doc-director?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 15:46:44](https://news.ycombinator.com/item?id=47518965) - [Musketeer d&apos;Artagnan&apos;s remains believed found under Dutch church](https://www.bbc.co.uk/news/articles/cm2rew2dgzzo)
* [2026-03-25, 15:34:02](https://news.ycombinator.com/item?id=47518785) - [Sony V. Cox Decision Reversed](https://supreme.justia.com/cases/federal/us/607/24-171/)
* [2026-03-25, 15:26:01](https://news.ycombinator.com/item?id=47518649) - [Hubble Snaps a New Dazzling Photo of the Crab Nebula](https://nautil.us/hubble-snaps-a-new-dazzling-photo-of-the-crab-nebula-1279203)
* [2026-03-25, 15:02:56](https://news.ycombinator.com/item?id=47518281) - [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html)
* [2026-03-25, 15:00:00](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Mass-Producing Hypersonic Missiles For $99,000](https://tech.slashdot.org/story/26/03/24/2329218/china-is-mass-producing-hypersonic-missiles-for-99000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 14:56:28](https://news.ycombinator.com/item?id=47518171) - [Antimatter has been transported for the first time](https://www.nature.com/articles/d41586-026-00950-w)
* [2026-03-25, 14:34:09](https://news.ycombinator.com/item?id=47517885) - [Ubuntu wants to strip some of GRUB features in 26.10 for security purposes](https://discourse.ubuntu.com/t/streamlining-secure-boot-for-26-10/79069)
* [2026-03-25, 14:30:51](https://lobste.rs/s/ocrjck/disregard_attacks) - [\&quot;Disregard that!\&quot; attacks](https://calpaterson.com/disregard.html)
* [2026-03-25, 14:20:24](https://news.ycombinator.com/item?id=47517701) - [Apple Just Lost Me](https://andregarzia.com/2026/03/apple-just-lost-me.html)
* [2026-03-25, 14:11:49](https://lobste.rs/s/b1kdqd/announcing_lix_2_95_kakigori) - [Announcing Lix 2.95 “Kakigōri”](https://lix.systems/blog/2026-03-25-lix-2.95-release/)
* [2026-03-25, 14:07:14](https://news.ycombinator.com/item?id=47517539) - [Thoughts on Slowing the Fuck Down](https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/)
* [2026-03-25, 14:03:06](https://lobste.rs/s/oxkpme/introducing_gnome_fellowship_program) - [Introducing the GNOME Fellowship program](https://blogs.gnome.org/foundation/2026/03/24/introducing-gnome-fellowship/)
* [2026-03-25, 13:07:40](https://lobste.rs/s/epq3vv/introducing_ipxlat_stateless_ipv4_ipv6) - [Introducing ipxlat: a stateless IPv4/IPv6 translation device](https://lore.kernel.org/netdev/20260319151230.655687-1-ralf@mandelbit.com/)
* [2026-03-25, 12:49:14](https://news.ycombinator.com/item?id=47516650) - [Local LLM App by Ente](https://ente.com/blog/ensu/)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 11:07:43](https://lobste.rs/s/i8q7uf/ubuntu_looks_strip_grub_bare_minimum_for) - [Ubuntu Looks To Strip GRUB To The Bare Minimum For Better Security](https://discourse.ubuntu.com/t/streamlining-secure-boot-for-26-10/79069)
* [2026-03-25, 11:00:00](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chandra Resolves Why Black Holes Hit the Brakes On Growth](https://science.slashdot.org/story/26/03/24/2334230/chandra-resolves-why-black-holes-hit-the-brakes-on-growth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 10:45:40](https://news.ycombinator.com/item?id=47515605) - [Building a coding agent in Swift from scratch](https://github.com/ivan-magda/swift-claude-code)
* [2026-03-25, 10:36:39](https://lobste.rs/s/xv13en/vitruvianos) - [VitruvianOS](https://v-os.dev/)
* [2026-03-25, 10:07:52](https://lobste.rs/s/zy8rgm/fyrox_1_0_0) - [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/)
* [2026-03-25, 08:52:50](https://news.ycombinator.com/item?id=47514916) - [Meta told to pay $375M for misleading users over child safety](https://www.bbc.com/news/articles/cql75dn07n2o)
* [2026-03-25, 08:37:47](https://lobste.rs/s/tponua/forking_httpx_as_httpxyz) - [Forking httpx as httpxyz](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 08:05:17](https://news.ycombinator.com/item?id=47514603) - [Why I forked httpx](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 07:08:02](https://lobste.rs/s/udbivp/32_year_old_bug_walks_into_telnet_server) - [A 32-Year-Old Bug Walks Into A Telnet Server (GNU inetutils CVE-2026-32746)](https://labs.watchtowr.com/a-32-year-old-bug-walks-into-a-telnet-server-gnu-inetutils-telnetd-cve-2026-32746/)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 07:00:00](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 06:00:32](https://lobste.rs/s/lzxb0m/magic_link_pitfalls) - [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)
* [2026-03-25, 05:00:54](https://news.ycombinator.com/item?id=47513475) - [TurboQuant: Redefining AI efficiency with extreme compression](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/)
* [2026-03-25, 04:27:14](https://news.ycombinator.com/item?id=47513229) - [Miscellanea: The War in Iran](https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/)
* [2026-03-25, 03:30:00](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 03:17:06](https://news.ycombinator.com/item?id=47512816) - [VitruvianOS – Desktop Linux Inspired by the BeOS](https://v-os.dev)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-25, 02:00:03](https://lobste.rs/s/67mppl/amiga_directory_bomb) - [Amiga directory… bomb?](https://heckmeck.de/blog/amiga-directory-bomb/)
* [2026-03-25, 00:44:55](https://news.ycombinator.com/item?id=47511703) - [Data centers are transitioning from AC to DC](https://spectrum.ieee.org/data-center-dc)
* [2026-03-25, 00:29:45](https://news.ycombinator.com/item?id=47511589) - [Flighty Airports](https://flighty.com/airports)
* [2026-03-24, 23:46:36](https://lobste.rs/s/bfgcx7/swift_6_3_released) - [Swift 6.3 released](https://swift.org/blog/swift-6.3-released/)
* [2026-03-24, 23:00:00](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11 Rewrites How Linux Runs Windows Games At the Kernel Level](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 22:00:00](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Android Automotive Is Moving From the Dashboard To the &apos;Brain&apos; of the Car](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 21:38:44](https://lobste.rs/s/7s4sjp/u_fdfd_arabic_ligature_bismillah_ar) - [\&quot;﷽\&quot; U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)](https://unicodeplus.com/U+FDFD)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 21:24:33](https://news.ycombinator.com/item?id=47509571) - [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead)
* [2026-03-24, 21:00:00](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Discontinues Sora Video Platform App](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 20:01:05](https://news.ycombinator.com/item?id=47508246) - [Goodbye to Sora](https://twitter.com/soraofficialapp/status/2036532795984715896)
* [2026-03-24, 20:00:00](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arm Unveils New AGI CPU With Meta As Debut Customer](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 19:00:00](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 18:03:48](https://news.ycombinator.com/item?id=47506713) - [Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller](https://videojs.org/blog/videojs-v10-beta-hello-world-again)
* [2026-03-24, 18:00:00](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 17:46:49](https://lobste.rs/s/xt8q7u/adding_structured_concurrency) - [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js)
* [2026-03-24, 17:30:42](https://news.ycombinator.com/item?id=47506251) - [Arm AGI CPU](https://newsroom.arm.com/blog/introducing-arm-agi-cpu)
* [2026-03-24, 17:08:32](https://lobste.rs/s/xarlmy/go_naming_conventions_practical_guide) - [Go Naming Conventions: A Practical Guide](https://www.alexedwards.net/blog/go-naming-conventions)
* [2026-03-24, 17:00:00](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 16:11:42](https://lobste.rs/s/f0xdeo/missile_defense_is_np_complete) - [Missile Defense is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 16:00:00](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 15:58:57](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential) - [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)
* [2026-03-24, 15:58:33](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing) - [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev)
* [2026-03-24, 15:58:18](https://lobste.rs/s/gmss5r/inside_ohm_s_peg_wasm_compiler) - [Inside Ohm&apos;s PEG-to-Wasm compiler](https://ohmjs.org/blog/2026/03/12/peg-to-wasm)
* [2026-03-24, 15:29:41](https://news.ycombinator.com/item?id=47504112) - [Apple Business](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
* [2026-03-24, 15:00:00](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Beats FTC In Court, Ending Restrictions On &apos;Free&apos; TurboTax Ads](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 14:45:31](https://lobste.rs/s/zbe88n/pine64_fosdem_2026_update) - [Pine64 FOSDEM 2026 Update](https://pine64.org/2026/03/24/march_2026_fosdem/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 12:06:29](https://news.ycombinator.com/item?id=47501426) - [Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
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
* [2026-03-21, 22:12:47](https://news.ycombinator.com/item?id=47472039) - [The Last Testaments of Richard II and Henry IV](https://www.historytoday.com/archive/feature/last-testaments-richard-ii-and-henry-iv)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-21, 02:47:26](https://news.ycombinator.com/item?id=47463548) - [Algorithm Visualizer](https://algorithm-visualizer.org/)
