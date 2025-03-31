# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [China is Already Testing AI-Powered Humanoid Robots in Factories](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's advanced deployment of AI-powered humanoid robots in factories showcases groundbreaking integration of robotics in manufacturing.

* [Aptera Takes First 300-Mile Highway Trip in Solar-Powered EV](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Aptera's solar-powered electric vehicle successfully completes a highway trip, highlighting the potential of renewable transportation.

* [How Rust Finally Got a Specification - Thanks to a Consultancy's Open-Source Donation](https://developers.slashdot.org/story/25/03/30/198218/how-rust-finally-got-a-specification---thanks-to-a-consultancys-open-source-donation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rust programming language achieves a formal specification, thanks to a consultancy's valuable contribution to open-source initiatives.

* [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss) - A medical breakthrough as nitisinone treatment proves effective against mosquitoes, potentially revolutionizing vector-borne disease prevention.

* [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - Astronomers detect a record-breaking black hole explosion, providing valuable insights into cosmic phenomena.

## Privacy and Security

* [HTTPS Certificate Industry Adopts New Security Requirements](https://it.slashdot.org/story/25/03/31/0529220/https-certificate-industry-adopts-new-security-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New security standards bring significant changes to the HTTPS certificate industry, enhancing online trust and safety.

* [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&from=rss) - Concerns over privacy arise as 23andMe customers face challenges in removing personal genetic data.

* [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major breach exposes private photos from multiple dating apps, highlighting ongoing risks of data vulnerabilities.

## Cultural and Historical Discoveries

* [Fragments of a rare Merlin manuscript from c. 1300](https://www.cam.ac.uk/stories/merlin-manuscript-discovered-cambridge) - Cambridge researchers uncover rare fragments of a medieval Merlin manuscript, offering a glimpse into Arthurian legend.

* [George Orwell and me: Richard Blair on life with his extraordinary father](https://www.theguardian.com/books/2025/mar/19/george-orwell-me-richard-blair-life-with-extraordinary-father) - Richard Blair shares personal insights into life with his iconic father, George Orwell.

* [Digital cuneiforms: Updated tool expands access to ancient Hittite texts](https://phys.org/news/2025-03-digital-cuneiforms-tool-access-ancient.html) - A digital tool enhances accessibility to ancient Hittite texts, bridging the gap between history and modern technology.

## Business and Legal Updates

* [French antitrust watchdog fines Apple €150M for App Tracking Transparency implementation](https://www.autoritedelaconcurrence.fr/en/press-release/targeted-advertising-autorite-de-la-concurrence-imposes-fine-eu150000000-apple) - France's antitrust authority takes on Apple over its App Tracking Transparency practices with a hefty fine.

* [Village Roadshow Entertainment has filed for Chapter 11 bankruptcy protection](https://www.latimes.com/entertainment-arts/business/story/2025-03-17/joker-matrix-studio-village-roadshow-files-for-chapter-11-bankruptcy) - The prominent studio behind *The Matrix* and *Joker* undergoes financial turmoil as it files for bankruptcy.

## Programming and Development

* [Cross Compiling Swift](https://khanwinter.com/2025-03-29-Cross-Compiling-Swift/) - A comprehensive exploration of Swift's cross-compilation capabilities for diverse systems.

* [A Programmer's Reading List: 100 Articles I Enjoyed (1-50)](https://www.piglei.com/articles/en-programmer-reading-list-part-one/) - A curated reading list for programmers, featuring 100 thought-provoking tech articles.

* [syntax highlighting with tree-sitter](https://dotat.at/@/2025-03-30-hilite.html) - An introduction to syntax highlighting using the advanced Tree-Sitter library.

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

* [2025-03-31, 10:04:38](https://lobste.rs/s/ku22d5/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/ku22d5/what_are_you_doing_this_week)
* [2025-03-31, 09:35:32](https://lobste.rs/s/uw8gde/french_antitrust_watchdog_fines_apple) - [French antitrust watchdog fines Apple €150M for App Tracking Transparency implementation](https://www.autoritedelaconcurrence.fr/en/press-release/targeted-advertising-autorite-de-la-concurrence-imposes-fine-eu150000000-apple)
* [2025-03-31, 09:30:21](https://lobste.rs/s/ahkxyr/rust_on_ferris_sweep) - [Rust on the Ferris Sweep](https://gabevenberg.com/posts/rmk-ferris-sweep/)
* [2025-03-31, 09:21:05](https://news.ycombinator.com/item?id=43532893) - [UK poll: Work and money worry young people more than culture wars or climate](https://www.theguardian.com/society/2025/mar/31/work-and-money-worries-young-people-more-than-culture-wars-or-climate-uk-poll-finds)
* [2025-03-31, 08:34:56](https://lobste.rs/s/76md2p/impromptu_disaster_recovery) - [Impromptu disaster recovery](https://fasterthanli.me/articles/impromptu-disaster-recovery)
* [2025-03-31, 08:26:08](https://lobste.rs/s/r6l5s4/how_borrow_memory_2021) - [How to borrow memory (2021)](https://www.falsifian.org/blog/2021/06/04/catalytic/)
* [2025-03-31, 07:54:00](https://it.slashdot.org/story/25/03/31/0529220/https-certificate-industry-adopts-new-security-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HTTPS Certificate Industry Adopts New Security Requirements](https://it.slashdot.org/story/25/03/31/0529220/https-certificate-industry-adopts-new-security-requirements?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 07:53:00](https://lobste.rs/s/wycqyg/crate_training_tiamat_un_calling_cthulhu) - [Crate-training Tiamat, un-calling Cthulhu: Taming the UB monsters in C++](https://herbsutter.com/2025/03/30/crate-training-tiamat-un-calling-cthulhutaming-the-ub-monsters-in-c/)
* [2025-03-31, 07:52:49](https://lobste.rs/s/tn6x34/alphastation_s_srom) - [An AlphaStation's SROM](https://www.thejpster.org.uk/blog/blog-2025-03-30/)
* [2025-03-31, 07:48:37](https://news.ycombinator.com/item?id=43532298) - [HTTPS RR in Curl](https://daniel.haxx.se/blog/2025/03/31/https-rr-in-curl/)
* [2025-03-31, 07:44:07](https://lobste.rs/s/ssubpj/fjall_2_8) - [Fjall 2.8](https://fjall-rs.github.io/post/fjall-2-8/)
* [2025-03-31, 07:36:56](https://news.ycombinator.com/item?id=43532220) - [How to Secure Existing C and C++ Software Without Memory Safety [pdf]](https://arxiv.org/abs/2503.21145)
* [2025-03-31, 07:24:00](https://soylentnews.org/article.pl?sid=25/03/31/0341226&from=rss) - [Apple and Google Face Billions in Liability From Trump's Tiktok Ban Delay](https://soylentnews.org/article.pl?sid=25/03/31/0341226&from=rss)
* [2025-03-31, 07:00:19](https://news.ycombinator.com/item?id=43532009) - [Wondercraft (YC S22) Is Hiring](https://news.ycombinator.com/item?id=43532009)
* [2025-03-31, 06:45:23](https://news.ycombinator.com/item?id=43531914) - [Taming the UB Monsters in C++](https://herbsutter.com/2025/03/30/crate-training-tiamat-un-calling-cthulhutaming-the-ub-monsters-in-c/)
* [2025-03-31, 06:33:04](https://news.ycombinator.com/item?id=43531816) - [You're protecting your data wrong – Introducing the Protected Query Pattern](https://kilpi.vercel.app/blog/2025-03-27-introducing-the-protected-query-pattern/)
* [2025-03-31, 06:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss)
* [2025-03-31, 05:28:03](https://news.ycombinator.com/item?id=43531415) - [RPCEmu is an emulator of classic Acorn computer systems](https://www.marutan.net/rpcemu/index.php)
* [2025-03-31, 05:07:52](https://lobste.rs/s/6dqoey/saas_is_broken_why_bring_your_own_cloud) - [SaaS Is Broken: Why Bring Your Own Cloud (BYOC) Is the Future](https://thenewstack.io/saas-is-broken-why-bring-your-own-cloud-byoc-is-the-future/)
* [2025-03-31, 04:42:12](https://lobste.rs/s/eqtzcz/cross_compiling_swift) - [Cross Compiling Swift](https://khanwinter.com/2025-03-29-Cross-Compiling-Swift/)
* [2025-03-31, 04:34:00](https://linux.slashdot.org/story/25/03/31/0430218/linus-torvalds-gently-criticizes-build-slowing-testing-code-left-in-linux-615-rc1?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linus Torvalds Gently Criticizes Build-Slowing Testing Code Left in Linux 6.15-rc1](https://linux.slashdot.org/story/25/03/31/0430218/linus-torvalds-gently-criticizes-build-slowing-testing-code-left-in-linux-615-rc1?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 04:10:45](https://news.ycombinator.com/item?id=43530889) - [Win98-quickinstall: A framework and installer to quickly install Windows 98](https://github.com/oerg866/win98-quickinstall)
* [2025-03-31, 04:07:41](https://news.ycombinator.com/item?id=43530863) - [Lapham's Quarterly Announces New Stewardship](https://www.laphamsquarterly.org/roundtable/laphams-quarterly-announces-new-stewardship)
* [2025-03-31, 03:40:40](https://news.ycombinator.com/item?id=43530675) - [Village Roadshow Entertainment has filed for Chapter 11 bankruptcy protection](https://www.latimes.com/entertainment-arts/business/story/2025-03-17/joker-matrix-studio-village-roadshow-files-for-chapter-11-bankruptcy)
* [2025-03-31, 02:39:00](https://soylentnews.org/article.pl?sid=25/03/28/1410255&from=rss) - [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&from=rss)
* [2025-03-31, 01:34:00](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As Microsoft Turns 50, Four Employees Remember Its Early Days](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 01:27:09](https://news.ycombinator.com/item?id=43529709) - [Fragments of a rare Merlin manuscript from c. 1300](https://www.cam.ac.uk/stories/merlin-manuscript-discovered-cambridge)
* [2025-03-31, 00:34:00](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Copilot Can't Beat a 2013 'TouchDevelop' Code Generation Demo for Windows Phone](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 00:22:40](https://news.ycombinator.com/item?id=43529257) - [Installing air filters in classrooms has surprisingly large educational benefits (2020)](https://www.vox.com/2020/1/8/21051869/indoor-air-pollution-student-achievement)
* [2025-03-31, 00:07:54](https://news.ycombinator.com/item?id=43529163) - [BreezeWiki makes wiki pages on Fandom readable](https://breezewiki.com/)
* [2025-03-30, 23:59:23](https://news.ycombinator.com/item?id=43529104) - [Oka.wiki](https://oka.wiki/)
* [2025-03-30, 23:11:00](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China is Already Testing AI-Powered Humanoid Robots in Factories](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 22:14:29](https://lobste.rs/s/pmismq/baseline_implementations_should_be) - [Baseline implementations should be predictable](https://www.pvk.ca/Blog/2021/05/14/baseline-implementations-should-be-predictable/)
* [2025-03-30, 21:53:00](https://soylentnews.org/article.pl?sid=25/03/28/1431238&from=rss) - [New Utah Law Makes App Stores Responsible for Age Verification](https://soylentnews.org/article.pl?sid=25/03/28/1431238&from=rss)
* [2025-03-30, 21:21:37](https://lobste.rs/s/acgr92/file_systems_unfit_as_distributed) - [File Systems Unfit as Distributed Storage Backend (2019)](https://dl.acm.org/doi/pdf/10.1145/3341301.3359656)
* [2025-03-30, 21:20:10](https://news.ycombinator.com/item?id=43527761) - [Station: Travel Through the Four Seasons (1994)](https://blog.gingerbeardman.com/2025/03/30/station-travel-through-the-four-seasons-1994/)
* [2025-03-30, 21:17:00](https://tech.slashdot.org/story/25/03/30/2115253/microsoft-attempts-to-close-local-account-windows-11-setup-loophole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Attempts To Close Local Account Windows 11 Setup Loophole](https://tech.slashdot.org/story/25/03/30/2115253/microsoft-attempts-to-close-local-account-windows-11-setup-loophole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 20:52:39](https://news.ycombinator.com/item?id=43527521) - [Xfinity XB3 hardware mod: Disable WiFi and save 2 watts](https://gist.github.com/pmarks-net/af40dba69272806c1ec9cbe71429d2e7)
* [2025-03-30, 20:43:15](https://news.ycombinator.com/item?id=43527452) - [Ask HN: What are you working on? (March 2025)](https://news.ycombinator.com/item?id=43527452)
* [2025-03-30, 20:17:58](https://lobste.rs/s/p47bbr/surprise_multiple_dependency_graphs) - [The Surprise of Multiple Dependency Graphs](https://queue.acm.org/detail.cfm?ref=rss&id=3723000)
* [2025-03-30, 20:11:00](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bloomberg's AI-Generated News Summaries Had At Least 36 Errors Since January](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 19:54:46](https://news.ycombinator.com/item?id=43527044) - [Public secrets exposure leads to supply chain attack on GitHub CodeQL](https://www.praetorian.com/blog/codeqleaked-public-secrets-exposure-leads-to-supply-chain-attack-on-github-codeql/)
* [2025-03-30, 19:22:36](https://news.ycombinator.com/item?id=43526763) - [Introduction to System Programming in Linux (Early Access)](https://nostarch.com/introduction-system-programming-linux)
* [2025-03-30, 19:18:26](https://lobste.rs/s/pxt8lj/nix_vanity_store_paths) - [Nix vanity store paths](https://fzakaria.com/2025/03/27/nix-vanity-store-paths)
* [2025-03-30, 19:11:00](https://developers.slashdot.org/story/25/03/30/198218/how-rust-finally-got-a-specification---thanks-to-a-consultancys-open-source-donation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How Rust Finally Got a Specification - Thanks to a Consultancy's Open-Source Donation](https://developers.slashdot.org/story/25/03/30/198218/how-rust-finally-got-a-specification---thanks-to-a-consultancys-open-source-donation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 18:54:57](https://lobste.rs/s/rvlxyl/tcrf_has_been_getting_ddosed) - [TCRF has been getting DDoSed](https://blog.xkeeper.net/uncategorized/tcrf-has-been-getting-ddosed/)
* [2025-03-30, 18:35:03](https://news.ycombinator.com/item?id=43526396) - [The Nobel Duel](https://www.asimov.press/p/nobel-duel)
* [2025-03-30, 18:20:50](https://lobste.rs/s/bymbzf/missile_vs_laser_game_terminal_maneuvers) - [Missile vs. Laser: The Game of Terminal Maneuvers](https://www.ethanheilman.com/x/31/index.html)
* [2025-03-30, 17:47:50](https://lobste.rs/s/emvaw4/why_is_this_site_built_with_c) - [Why Is This Site Built With C](https://marcelofern.com/posts/c/why-is-this-site-built-with-c/index.html)
* [2025-03-30, 17:34:00](https://tech.slashdot.org/story/25/03/30/170233/what-that-facebook-whistleblowers-memoir-left-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [What that Facebook Whistleblower's Memoir Left Out](https://tech.slashdot.org/story/25/03/30/170233/what-that-facebook-whistleblowers-memoir-left-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 17:14:00](https://soylentnews.org/article.pl?sid=25/03/28/1425255&from=rss) - [DragonOS is a Lubuntu-Based Desktop Distro Which is Focused on Software Defined Radio (SDR)](https://soylentnews.org/article.pl?sid=25/03/28/1425255&from=rss)
* [2025-03-30, 16:34:00](https://it.slashdot.org/story/25/03/29/1928254/has-the-decline-of-knowledge-worker-jobs-begun?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Has the Decline of Knowledge Worker Jobs Begun?](https://it.slashdot.org/story/25/03/29/1928254/has-the-decline-of-knowledge-worker-jobs-begun?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 15:34:00](https://tech.slashdot.org/story/25/03/30/0454215/google-sunsets-two-devices-from-its-nest-smart-home-product-line?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Sunsets Two Devices From Its Nest Smart Home Product Line](https://tech.slashdot.org/story/25/03/30/0454215/google-sunsets-two-devices-from-its-nest-smart-home-product-line?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 15:30:22](https://news.ycombinator.com/item?id=43524937) - [Blue95: a desktop for your childhood home's computer room](https://github.com/winblues/blue95)
* [2025-03-30, 14:43:59](https://lobste.rs/s/cytxh8/brief_history_compression_on_macs) - [A brief history of compression on Macs](https://eclecticlight.co/2025/03/29/a-brief-history-of-compression-on-macs/)
* [2025-03-30, 14:34:00](https://developers.slashdot.org/story/25/03/30/0627205/microsoft-announces-hyperlight-wasm-speedy-vm-based-security-at-scale-with-a-webassembly-runtime?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Announces 'Hyperlight Wasm': Speedy VM-Based Security at Scale with a WebAssembly Runtime](https://developers.slashdot.org/story/25/03/30/0627205/microsoft-announces-hyperlight-wasm-speedy-vm-based-security-at-scale-with-a-webassembly-runtime?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss) - [I'm an American Software Developer and the \"Broligarchs\" Don't Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss)
* [2025-03-30, 12:02:05](https://lobste.rs/s/dqezic/koto_programming_language) - [Koto Programming Language](https://koto.dev/)
* [2025-03-30, 12:02:01](https://lobste.rs/s/g1z2pu/towards_fearless_simd_7_years_later) - [Towards fearless SIMD, 7 years later](https://linebender.org/blog/towards-fearless-simd/)
* [2025-03-30, 11:34:00](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 11:23:50](https://lobste.rs/s/tobrqw/convert_linux_windows) - [Convert Linux to Windows](https://philipbohun.com/blog/0007.html)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss)
* [2025-03-30, 07:34:00](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Samsung Unveils AI-Powered, Screen-Enabled Home Appliances](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 06:27:06](https://lobste.rs/s/q2rxjn/arpa_rdns_few_magical_icmp_hacks) - [.arpa, rDNS and a few magical ICMP hacks](https://sdomi.pl/weblog/24-arpa-hacks/)
* [2025-03-30, 03:34:00](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Aptera Takes First 300-Mile Highway Trip in Solar-Powered EV](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss)
* [2025-03-30, 01:55:08](https://lobste.rs/s/mk6n0l/syntax_highlighting_with_tree_sitter) - [syntax highlighting with tree-sitter](https://dotat.at/@/2025-03-30-hilite.html)
* [2025-03-30, 01:42:04](https://lobste.rs/s/mekrcq/programmer_s_reading_list_100_articles_i) - [A Programmer's Reading List: 100 Articles I Enjoyed (1-50)](https://www.piglei.com/articles/en-programmer-reading-list-part-one/)
* [2025-03-29, 22:04:00](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss) - [Certified Genuine Randomness](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss)
* [2025-03-29, 18:45:22](https://lobste.rs/s/a8t2pp/ente_photos_v1) - [Ente Photos v1](https://ente.io/blog/v1)
* [2025-03-29, 17:17:00](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss) - [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss)
* [2025-03-29, 09:05:33](https://news.ycombinator.com/item?id=43513967) - [How IMAP works under the hood](https://blog.lohr.dev/imap-introduction)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 06:35:04](https://news.ycombinator.com/item?id=43513301) - [One Last Ride for Antarctica's 'Ivan the Terra Bus'](https://www.atlasobscura.com/articles/antarctica-ivan-the-terra-bus-retired)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss)
* [2025-03-28, 22:42:07](https://news.ycombinator.com/item?id=43510656) - [Talkin’ about a Revolution](https://drb.ie/articles/talkin-about-a-revolution/)
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 12:25:00](https://news.ycombinator.com/item?id=43504514) - [Claim for a missing tooth](https://tf230.matteason.co.uk/)
* [2025-03-28, 09:16:41](https://news.ycombinator.com/item?id=43503185) - [The surprising powerhouse behind rapid V2X growth: electric school buses](https://electrek.co/2025/03/27/v2x-growth-electric-school-buses/)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 06:58:00](https://news.ycombinator.com/item?id=43502348) - [Finalizers are tricker than you might think. Part 2](https://sergeyteplyakov.github.io/Blog/2025/03/27/Finalizers_are_tricker_than_you_might_think_p2.html)
* [2025-03-28, 06:23:06](https://news.ycombinator.com/item?id=43502124) - [Orphan tsunami of 1700–Japanese clues to a parent earthquake in America (2015)](https://pubs.usgs.gov/publication/pp1707)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 22:21:20](https://news.ycombinator.com/item?id=43498861) - [George Orwell and me: Richard Blair on life with his extraordinary father](https://www.theguardian.com/books/2025/mar/19/george-orwell-me-richard-blair-life-with-extraordinary-father)
* [2025-03-27, 21:28:33](https://news.ycombinator.com/item?id=43498399) - [Digital cuneiforms: Updated tool expands access to ancient Hittite texts](https://phys.org/news/2025-03-digital-cuneiforms-tool-access-ancient.html)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
