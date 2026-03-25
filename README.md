# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Advances

* [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/) - A new release of Fyrox, a game engine focused on providing high performance and ease of use for game developers. [Discuss on Lobste.rs](https://lobste.rs/s/zy8rgm/fyrox_1_0_0).

* [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - The discovery of a particle at CERN addresses a mystery in particle physics that has perplexed scientists for two decades. [Discuss on SoylentNews](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss).

* [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA reshuffles its priorities, focusing on lunar base development over the planned Gateway program. [Discuss on Slashdot](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Cybersecurity and Privacy

* [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - A report reveals that the FBI has been purchasing location data of American citizens rather than obtaining warrants. [Discuss on SoylentNews](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss).

* [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversial new rules in Hong Kong grant police the authority to demand access to passwords. [Discuss on Slashdot](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/) - Discussion of vulnerabilities and challenges in implementing magic links for user authentication. [Discuss on Lobste.rs](https://lobste.rs/s/lzxb0m/magic_link_pitfalls).

## Open Source and Development

* [acwj: A Compiler Writing Journey](https://github.com/DoctorWkt/acwj) - A detailed log of creating a C compiler from scratch, valuable for enthusiasts and professionals alike. [Discuss on Lobste.rs](https://lobste.rs/s/vlnjkf/acwj_compiler_writing_journey).

* [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/) - A fascinating exploration of utilizing Rust for parallel computing on GPUs. [Discuss on Lobste.rs](https://lobste.rs/s/wjhc9g/rust_threads_on_gpu).

* [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js) - Exploration of integrating structured concurrency mechanisms into the JavaScript ecosystem. [Discuss on Lobste.rs](https://lobste.rs/s/xt8q7u/adding_structured_concurrency).

## Innovative AI Applications

* [TurboQuant: Redefining AI efficiency with extreme compression](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/) - Google's new model compression method promises significant efficiency improvements in AI applications. [Discuss on Hacker News](https://news.ycombinator.com/item?id=47513475).

* [Show HN: DuckDB community extension for prefiltered HNSW using ACORN-1](https://github.com/cigrainger/duckdb-hnsw-acorn) - A novel community extension integrating DuckDB with high-speed nearest neighbor search using HNSW. [Discuss on Hacker News](https://news.ycombinator.com/item?id=47512891).

* [Show HN: AI Roundtable – Let 200 models debate your question](https://opper.ai/ai-roundtable/) - A platform where multiple AI models weigh in collectively on user-submitted questions. [Discuss on Hacker News](https://news.ycombinator.com/item?id=47507666).

## Notable Insights and Stories

* [Missile Defense is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/) - A mathematical look into why designing missile defense systems is computationally complex. [Discuss on Lobste.rs](https://lobste.rs/s/f0xdeo/missile_defense_is_np_complete).

* [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead) - A personal account of practical immersion before software development. [Discuss on Hacker News](https://news.ycombinator.com/item?id=47509571).

* [In Edison’s Revenge, Data Centers Are Transitioning From AC to DC](https://spectrum.ieee.org/data-center-dc) - Data centers are increasingly switching back to direct current, mirroring historic electrical currents debates. [Discuss on Hacker News](https://news.ycombinator.com/item?id=47511703).

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

* [2026-03-25, 10:07:52](https://lobste.rs/s/zy8rgm/fyrox_1_0_0) - [Fyrox 1.0.0](https://fyrox.rs/blog/post/fyrox-game-engine-1-0-0/)
* [2026-03-25, 08:37:47](https://lobste.rs/s/tponua/forking_httpx_as_httpxyz) - [Forking httpx as httpxyz](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 08:05:17](https://news.ycombinator.com/item?id=47514603) - [Why I forked httpx](https://tildeweb.nl/~michiel/httpxyz.html)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 07:00:00](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Halts Work On Gateway To Develop a Lunar Base](https://science.slashdot.org/story/26/03/24/2145230/nasa-halts-work-on-gateway-to-develop-a-lunar-base?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 06:00:32](https://lobste.rs/s/lzxb0m/magic_link_pitfalls) - [Magic Link Pitfalls](https://etodd.io/2026/03/22/magic-link-pitfalls/)
* [2026-03-25, 05:42:09](https://news.ycombinator.com/item?id=47513728) - [Implementing automatic eSIM installation on Android](https://medium.com/proandroiddev/integration-of-automatic-esim-installation-on-android-6c5f6d7124cb)
* [2026-03-25, 05:32:47](https://lobste.rs/s/vlnjkf/acwj_compiler_writing_journey) - [acwj: A Compiler Writing Journey](https://github.com/DoctorWkt/acwj)
* [2026-03-25, 05:32:47](https://lobste.rs/s/frsbgh/istat_menus_7_20_5_local_privilege) - [iStat Menus &lt; 7.20.5 local privilege escalation](https://markuta.com/istat-menus-local-privilege-escalation/)
* [2026-03-25, 05:00:54](https://news.ycombinator.com/item?id=47513475) - [TurboQuant: Redefining AI efficiency with extreme compression](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/)
* [2026-03-25, 03:30:00](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hong Kong Police Can Demand Passwords Under New National Security Rules](https://yro.slashdot.org/story/26/03/24/2138225/hong-kong-police-can-demand-passwords-under-new-national-security-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-25, 03:28:04](https://news.ycombinator.com/item?id=47512891) - [Show HN: DuckDB community extension for prefiltered HNSW using ACORN-1](https://github.com/cigrainger/duckdb-hnsw-acorn)
* [2026-03-25, 03:17:06](https://news.ycombinator.com/item?id=47512816) - [VitruvianOS – Desktop Linux Inspired by the BeOS](https://v-os.dev)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-25, 02:00:03](https://lobste.rs/s/67mppl/amiga_directory_bomb) - [Amiga directory… bomb?](https://heckmeck.de/blog/amiga-directory-bomb/)
* [2026-03-25, 00:44:55](https://news.ycombinator.com/item?id=47511703) - [In Edison’s Revenge, Data Centers Are Transitioning From AC to DC](https://spectrum.ieee.org/data-center-dc)
* [2026-03-25, 00:29:45](https://news.ycombinator.com/item?id=47511589) - [Flighty Airports](https://flighty.com/airports)
* [2026-03-24, 23:46:36](https://lobste.rs/s/bfgcx7/swift_6_3_released) - [Swift 6.3 released](https://swift.org/blog/swift-6.3-released/)
* [2026-03-24, 23:44:47](https://news.ycombinator.com/item?id=47511208) - [A Compiler Writing Journey](https://github.com/DoctorWkt/acwj)
* [2026-03-24, 23:00:00](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11 Rewrites How Linux Runs Windows Games At the Kernel Level](https://tech.slashdot.org/story/26/03/24/1946246/wine-11-rewrites-how-linux-runs-windows-games-at-the-kernel-level?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 22:26:48](https://lobste.rs/s/oemks0/status_update_2026_02) - [Status update 2026-02](https://whynothugo.nl/journal/2026/02/28/status-update-2026-02/)
* [2026-03-24, 22:00:00](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Android Automotive Is Moving From the Dashboard To the &apos;Brain&apos; of the Car](https://tech.slashdot.org/story/26/03/24/1958223/googles-android-automotive-is-moving-from-the-dashboard-to-the-brain-of-the-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 21:38:44](https://lobste.rs/s/7s4sjp/u_fdfd_arabic_ligature_bismillah_ar) - [\&quot;﷽\&quot; U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)](https://unicodeplus.com/U+FDFD)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 21:24:33](https://news.ycombinator.com/item?id=47509571) - [I wanted to build vertical SaaS for pest control, so I took a technician job](https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead)
* [2026-03-24, 21:00:00](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Discontinues Sora Video Platform App](https://slashdot.org/story/26/03/24/2050222/openai-discontinues-sora-video-platform-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 20:01:05](https://news.ycombinator.com/item?id=47508246) - [Goodbye to Sora](https://twitter.com/soraofficialapp/status/2036532795984715896)
* [2026-03-24, 20:00:00](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arm Unveils New AGI CPU With Meta As Debut Customer](https://hardware.slashdot.org/story/26/03/24/1933211/arm-unveils-new-agi-cpu-with-meta-as-debut-customer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 19:15:27](https://news.ycombinator.com/item?id=47507666) - [Show HN: AI Roundtable – Let 200 models debate your question](https://opper.ai/ai-roundtable/)
* [2026-03-24, 19:04:48](https://lobste.rs/s/4sfusf/choose_boring_technology_innovative) - [Choose Boring Technology and Innovative Practices](https://buttondown.com/hillelwayne/archive/choose-boring-technology-and-innovative-practices/)
* [2026-03-24, 19:00:00](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Claude Can Now Use Your Computer To Finish Tasks](https://slashdot.org/story/26/03/24/1649222/anthropics-claude-can-now-use-your-computer-to-finish-tasks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 18:34:52](https://news.ycombinator.com/item?id=47507150) - [Wine 11 rewrites how Linux runs Windows games at kernel with massive speed gains](https://www.xda-developers.com/wine-11-rewrites-linux-runs-windows-games-speed-gains/)
* [2026-03-24, 18:03:48](https://news.ycombinator.com/item?id=47506713) - [Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller](https://videojs.org/blog/videojs-v10-beta-hello-world-again)
* [2026-03-24, 18:00:00](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Self-Propagating Malware Poisons Open Source Software, Wipes Iran-Based Machines](https://news.slashdot.org/story/26/03/24/1638228/self-propagating-malware-poisons-open-source-software-wipes-iran-based-machines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 17:46:49](https://lobste.rs/s/xt8q7u/adding_structured_concurrency) - [Adding structured concurrency to JavaScript](https://github.com/bakkot/structured-concurrency-for-js)
* [2026-03-24, 17:30:42](https://news.ycombinator.com/item?id=47506251) - [Arm AGI CPU](https://newsroom.arm.com/blog/introducing-arm-agi-cpu)
* [2026-03-24, 17:24:59](https://lobste.rs/s/qzf76s/addressing_global_removal_race_wayland) - [Addressing global removal race in Wayland](https://blog.vladzahorodnii.com/2026/03/24/addressing-global-removal-race-in-wayland/)
* [2026-03-24, 17:08:32](https://lobste.rs/s/xarlmy/go_naming_conventions_practical_guide) - [Go Naming Conventions: A Practical Guide](https://www.alexedwards.net/blog/go-naming-conventions)
* [2026-03-24, 17:00:00](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic Games To Cut More Than 1,000 Jobs As Fortnite Usage Falls](https://games.slashdot.org/story/26/03/24/1628213/epic-games-to-cut-more-than-1000-jobs-as-fortnite-usage-falls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 16:26:03](https://lobste.rs/s/swmqhe/announcing_guile_knots) - [Announcing Guile Knots](https://www.cbaines.net/posts/announcing_guile_knots/)
* [2026-03-24, 16:26:00](https://news.ycombinator.com/item?id=47505144) - [Show HN: Email.md – Markdown to responsive, email-safe HTML](https://www.emailmd.dev/)
* [2026-03-24, 16:11:42](https://lobste.rs/s/f0xdeo/missile_defense_is_np_complete) - [Missile Defense is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 16:02:22](https://news.ycombinator.com/item?id=47504695) - [Hypura – A storage-tier-aware LLM inference scheduler for Apple Silicon](https://github.com/t8/hypura)
* [2026-03-24, 16:00:00](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Bans Imports of New Foreign-Made Routers, Citing Security Concerns](https://mobile.slashdot.org/story/26/03/24/0435224/fcc-bans-imports-of-new-foreign-made-routers-citing-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 15:58:57](https://lobste.rs/s/plmvuv/litellm_compromised_by_credential) - [LiteLLM Compromised by Credential Stealer](https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/)
* [2026-03-24, 15:58:33](https://lobste.rs/s/juc8ix/hegel_universal_property_based_testing) - [Hegel, a universal property-based testing protocol and family of PBT libraries](https://hegel.dev)
* [2026-03-24, 15:58:18](https://lobste.rs/s/gmss5r/inside_ohm_s_peg_wasm_compiler) - [Inside Ohm&apos;s PEG-to-Wasm compiler](https://ohmjs.org/blog/2026/03/12/peg-to-wasm)
* [2026-03-24, 15:32:35](https://lobste.rs/s/ftfy60/proposing_botwatch) - [Proposing Botwatch](https://7hird.dev/3mhr2nnuhh22m)
* [2026-03-24, 15:29:41](https://news.ycombinator.com/item?id=47504112) - [Apple Business](https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/)
* [2026-03-24, 15:28:17](https://news.ycombinator.com/item?id=47504094) - [Hypothesis, Antithesis, synthesis](https://antithesis.com/blog/2026/hegel/)
* [2026-03-24, 15:00:00](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intuit Beats FTC In Court, Ending Restrictions On &apos;Free&apos; TurboTax Ads](https://yro.slashdot.org/story/26/03/23/2334252/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 14:58:27](https://news.ycombinator.com/item?id=47503617) - [Show HN: Gemini can now natively embed video, so I built sub-second video search](https://github.com/ssrajadh/sentrysearch)
* [2026-03-24, 14:45:31](https://lobste.rs/s/zbe88n/pine64_fosdem_2026_update) - [Pine64 FOSDEM 2026 Update](https://pine64.org/2026/03/24/march_2026_fosdem/)
* [2026-03-24, 14:37:29](https://lobste.rs/s/wjhc9g/rust_threads_on_gpu) - [Rust threads on the GPU](https://vectorware.com/blog/threads-on-gpu/)
* [2026-03-24, 13:00:38](https://news.ycombinator.com/item?id=47501950) - [Missile defense is NP-complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 12:06:29](https://news.ycombinator.com/item?id=47501426) - [Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 07:00:00](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack on a Car Breathalyzer Firm Leaves Drivers Stuck](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 05:24:40](https://lobste.rs/s/aewrgf/can_it_resolve_doom_game_engine_2_000_dns) - [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/)
* [2026-03-24, 03:30:00](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 23:00:00](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Says He&apos;s &apos;Empathetic&apos; To DLSS 5 Concerns](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 16:44:18](https://news.ycombinator.com/item?id=47479362) - [VNDB founder Yorhel has died](https://vndb.org/t24787)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:43:49](https://news.ycombinator.com/item?id=47472286) - [Fun with CSF firmware (RK3588 GPU firmware)](https://icecream95.gitlab.io/fun-with-csf-firmware.html)
* [2026-03-21, 22:20:25](https://news.ycombinator.com/item?id=47472120) - [An Aural Companion for Decades, CBS News Radio Crackles to a Close](https://www.nytimes.com/2026/03/21/business/media/cbs-news-radio-appraisal.html)
* [2026-03-21, 22:12:47](https://news.ycombinator.com/item?id=47472039) - [The Last Testaments of Richard II and Henry IV](https://www.historytoday.com/archive/feature/last-testaments-richard-ii-and-henry-iv)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 08:35:51](https://news.ycombinator.com/item?id=47465197) - [Intel Device Modeling Language for virtual platforms](https://github.com/intel/device-modeling-language)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-21, 02:47:26](https://news.ycombinator.com/item?id=47463548) - [Algorithm Visualizer](https://algorithm-visualizer.org/)
