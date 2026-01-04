# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/) - A project detailing the implementation of TLS 1.3 using only Common Lisp, showcasing its capabilities.

* [MyTorch – Minimalist autograd in 450 lines of Python](https://github.com/obround/mytorch) - An ultra-light Python autograd library with fewer than 500 lines of code.

* [SQLNet A social network that looks like Twitter but you write SQL to do anything](https://sqlnet.cc) - A unique social network based on leveraging SQL for interactions.

* [Corroded: Illegal Rust](https://github.com/buyukakyuz/corroded) - A repository and project focused on the nuances of Rust's language rules.

* [minikv: A little KV store implementation in OCaml to practice DB systems things](https://github.com/alpha-convert/minikv) - A mini key-value store implemented for practicing database concepts in OCaml.

* [Advanced Rail Energy Storage of North America](https://aresnorthamerica.com/) - Energy storage technology and infrastructure involving advanced rail systems, highlighting sustainable innovation.

* [Xr0 verifier, guarantee the safety of C programs at compile time](https://xr0.dev) - A tool ensuring the compile-time safety of C programming projects.

* [Torch.ts – building PyTorch in TypeScript from scratch to learn](https://github.com/13point5/torch.ts) - Rebuilding PyTorch using TypeScript to improve understanding of AI frameworks.

* [Is tree-sitter good enough? (2022)](https://blog.jez.io/tree-sitter-limitations/) - Exploring the capabilities and limitations of the tree-sitter language processing tool.

* [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/) - Details on the continuous efforts to enhance Linux kernel's security.

* [Developing a BLAS Library for the AMD AI Engine [pdf]](https://uni.tlaan.nl/thesis/msc_thesis_tristan_laan_aieblas.pdf) - A thesis on creating a Basic Linear Algebra Subprograms (BLAS) library optimized for AMD AI engines.

* [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/) - Report on improvements in KDE's onboarding process.

* [The C3 Programming Language](https://c3-lang.org) - An overview of the new C3 programming language catering to modern programming needs.

## Science and Innovation

* [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - Research on leveraging polaritons for atomic-level manipulation of light.

* [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - Experimenting with off-world environments for semiconductor innovation.

* [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/) - Extensive investigation into a local network-targeting botnet.

* [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - Insights into the brain's computation of spatial distances.

* [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - A breakthrough in recyclable and environmentally-friendly plastics.

* [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - A novel view on DNA rewrites in aging immune cells.

## Artificial Intelligence and Robotics

* [What Happened When Alaska&apos;s Court System Tried Answering Questions with an AI Chatbot?](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring AI chatbots within judicial settings.

* [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analyzing AI's potential to reshape workweek structures.

* [Recursive Language Models](https://arxiv.org/abs/2512.24601) - Research on improving language understanding using recursive models.

* [Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741) - A study advancing language modelling techniques for artificial intelligence.

## Cultural Insights

* [How Thomas Mann Wrote the Magic Mountain](https://www.theguardian.com/books/2025/dec/31/the-master-of-contradictions-by-morten-hi-jensen-review-how-thomas-mann-wrote-the-magic-mountain) - The writing process behind Thomas Mann's literary masterpiece.

* [The Great Gatsby is the most misunderstood novel (2021)](https://www.bbc.com/culture/article/20210209-the-worlds-most-misunderstood-novel) - A BBC exploration of the themes and misconceptions surrounding Fitzgerald's classic.

* [Amiga Desktops Worth Seeing](https://www.datagubbe.se/wbshots/) - A nostalgic look at designs from Amiga desktop environments.

* [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - A study exploring the subjective nature of perception and interpretation in various contexts.

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

* [2026-01-04, 03:28:32](https://lobste.rs/s/za0nkg/building_tls_1_3_implementation_pure) - [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/)
* [2026-01-04, 02:38:49](https://lobste.rs/s/dd21hs/street_fighter_ii_world_warrier) - [Street Fighter II, The World Warrier](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 02:34:00](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Alaska&apos;s Court System Tried Answering Questions with an AI Chatbot?](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 02:13:23](https://news.ycombinator.com/item?id=46484104) - [How Thomas Mann Wrote the Magic Mountain](https://www.theguardian.com/books/2025/dec/31/the-master-of-contradictions-by-morten-hi-jensen-review-how-thomas-mann-wrote-the-magic-mountain)
* [2026-01-04, 01:26:39](https://news.ycombinator.com/item?id=46483811) - [Developing a BLAS Library for the AMD AI Engine [pdf]](https://uni.tlaan.nl/thesis/msc_thesis_tristan_laan_aieblas.pdf)
* [2026-01-04, 01:21:56](https://news.ycombinator.com/item?id=46483776) - [MyTorch – Minimalist autograd in 450 lines of Python](https://github.com/obround/mytorch)
* [2026-01-04, 01:15:15](https://news.ycombinator.com/item?id=46483729) - [The Great Gatsby is the most misunderstood novel (2021)](https://www.bbc.com/culture/article/20210209-the-worlds-most-misunderstood-novel)
* [2026-01-04, 01:14:25](https://lobste.rs/s/1qbwf7/cost_closure_c_rest) - [The Cost of a Closure in C, The Rest](https://thephd.dev/the-cost-of-a-closure-in-c-c2y-followup)
* [2026-01-04, 01:02:46](https://news.ycombinator.com/item?id=46483657) - [SQLNet A social network that looks like Twitter but you write SQL to do anything](https://sqlnet.cc)
* [2026-01-04, 00:45:54](https://news.ycombinator.com/item?id=46483531) - [Corroded: Illegal Rust](https://github.com/buyukakyuz/corroded)
* [2026-01-04, 00:38:03](https://lobste.rs/s/7f58yw/minikv_little_kv_store_implementation) - [minikv: A little KV store implementation in OCaml to practice DB systems things](https://github.com/alpha-convert/minikv)
* [2026-01-04, 00:31:42](https://news.ycombinator.com/item?id=46483432) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-04, 00:30:46](https://lobste.rs/s/52bxvq/kde_onboarding_is_good_now) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-04, 00:15:01](https://news.ycombinator.com/item?id=46483299) - [Worst Case Optimal Joins: Graph-Join Correspondence](https://finnvolkel.com/wcoj-graph-join-correspondence)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 23:45:00](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s $250M Deal with California to Fund Newsrooms May Be Stalled](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 23:39:12](https://news.ycombinator.com/item?id=46483023) - [Swift on Android: Full Native App Development Now Possible](https://docs.swifdroid.com/app/)
* [2026-01-03, 23:24:41](https://news.ycombinator.com/item?id=46482877) - [The suck is why we&apos;re here](https://nik.art/the-suck-is-why-were-here/)
* [2026-01-03, 23:14:29](https://news.ycombinator.com/item?id=46482777) - [China DRAM Maker CXMT Targets $4.2B IPO as It Takes on Samsung, SK Hynix, Micron](https://www.ic-pcb.com/chinas-leading-dram-maker-cxmt-targets-42-billion-ipo-as-it-takes-on-samsung-sk-hynix-and-micron.html)
* [2026-01-03, 23:01:57](https://news.ycombinator.com/item?id=46482642) - [The Riven Diffs – Seeing Riven (1997) Differently](https://glthr.com/the-riven-diffs-1)
* [2026-01-03, 22:45:00](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has Microsoft Discontinued Offline Activation of Windows?](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 22:35:11](https://news.ycombinator.com/item?id=46482437) - [Advanced Rail Energy Storage of North America](https://aresnorthamerica.com/)
* [2026-01-03, 22:23:34](https://news.ycombinator.com/item?id=46482345) - [Total monthly number of StackOverflow questions over time](https://data.stackexchange.com/stackoverflow/query/1926661#graph)
* [2026-01-03, 21:58:30](https://news.ycombinator.com/item?id=46482107) - [Take One Small Step](https://thinkhuman.com/take-one-small-step/)
* [2026-01-03, 21:45:00](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Invaded Venezuela and Captured Nicol&amp;#225;s Maduro - But ChatGPT and Perplexity Disagree](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 21:34:33](https://news.ycombinator.com/item?id=46481849) - [Scaling Latent Reasoning via Looped Language Models](https://arxiv.org/abs/2510.25741)
* [2026-01-03, 21:26:07](https://lobste.rs/s/snn5k8/enterprise_integration_patterns) - [Enterprise Integration Patterns: The Routing Slip](https://james-carr.org/posts/2025-01-02-advent-of-eip-day-9-routing-slip/)
* [2026-01-03, 20:46:05](https://lobste.rs/s/kw6ndy/notes_on_expression_problem_type_design) - [Notes on the expression problem and type design](https://www.tedinski.com/2018/03/06/more-on-the-expression-problem.html)
* [2026-01-03, 20:45:00](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Lowering Orbits of 4,400 Starlink Satellites for Safety&apos;s Sake](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:45:00](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 18:10:21](https://news.ycombinator.com/item?id=46479673) - [Xr0 verifier, guarantee the safety of C programs at compile time](https://xr0.dev)
* [2026-01-03, 17:45:00](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Hundreds of Flights After U.S. Attack on Venezuela](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 17:33:29](https://lobste.rs/s/ie1366/amiga_desktops_worth_seeing) - [Amiga Desktops Worth Seeing](https://www.datagubbe.se/wbshots/)
* [2026-01-03, 17:16:24](https://lobste.rs/s/o5e7gm/who_owns_memory_part_1_what_is_object) - [Who Owns the Memory? Part 1: What is an Object?](https://lukefleed.xyz/posts/who-owns-the-memory-pt1/)
* [2026-01-03, 17:04:30](https://lobste.rs/s/jtzqxs/ken_thompson_on_how_disk_scheduling) - [Ken Thompson on How A Disk Scheduling Algorithm Became Unix](https://www.youtube.com/watch?v=8E2cCqAS9AM)
* [2026-01-03, 16:41:06](https://news.ycombinator.com/item?id=46478647) - [The C3 Programming Language](https://c3-lang.org)
* [2026-01-03, 16:34:00](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interference With America&apos;s GPS System &apos;Has Grown Dramatically&apos;](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 16:20:10](https://news.ycombinator.com/item?id=46478377) - [The Most Popular Blogs of Hacker News in 2025](https://refactoringenglish.com/blog/2025-hn-top-5/)
* [2026-01-03, 16:03:43](https://lobste.rs/s/awxarg/how_i_browse_web_2026) - [How I browse the web in 2026](https://bastiangruber.ca/posts/how-i-browse-the-web-in-2026/)
* [2026-01-03, 15:55:16](https://news.ycombinator.com/item?id=46478061) - [Show HN: Offline tiles and routing and geocoding in one Docker Compose stack](https://www.corviont.com/)
* [2026-01-03, 15:34:00](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jobs Vulnerable to AI Replacement Actually &apos;Thriving, Not Dying Out&apos;, Report Suggests](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 12:01:00](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 11:52:38](https://lobste.rs/s/c8qkpe/bypassing_rp2350_s_secure_boot) - [Bypassing RP2350&apos;s Secure Boot](https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 11:29:33](https://news.ycombinator.com/item?id=46475395) - [Recursive Language Models](https://arxiv.org/abs/2512.24601)
* [2026-01-03, 10:15:31](https://lobste.rs/s/jvqhlv/linux_kernel_security_work) - [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/)
* [2026-01-03, 09:30:00](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 09:05:32](https://lobste.rs/s/fdhsz0/freebsd_home_nas_part_2_introduction_pf) - [FreeBSD Home NAS, part 2: Introduction to the PF firewall](https://rtfm.co.ua/en/freebsd-home-nas-part-2-introduction-to-packet-filter-pf-firewall/)
* [2026-01-03, 08:31:24](https://lobste.rs/s/xxyfaq/kimwolf_botnet_is_stalking_your_local) - [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/)
* [2026-01-03, 07:36:02](https://lobste.rs/s/o085u1/benchmarking_windows_against_itself) - [Benchmarking Windows Against Itself, From Windows XP To Windows 11](https://hackaday.com/2026/01/02/benchmarking-windows-against-itself-from-windows-xp-to-windows-11/)
* [2026-01-03, 06:35:21](https://news.ycombinator.com/item?id=46473348) - [Trump says Venezuela’s Maduro captured after strikes](https://www.reuters.com/world/americas/loud-noises-heard-venezuela-capital-southern-area-without-electricity-2026-01-03/)
* [2026-01-03, 06:01:00](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 03:30:00](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell&apos;s XPS Brand May Return Just a Year After Being Retired, Report Claims](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 02:08:22](https://lobste.rs/s/opvscn/is_tree_sitter_good_enough_2022) - [Is tree-sitter good enough? (2022)](https://blog.jez.io/tree-sitter-limitations/)
* [2026-01-03, 01:30:00](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft CEO: Time To Move &apos;Beyond the Arguments of Slop vs Sophistication&apos;](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 23:34:01](https://lobste.rs/s/hptqsw/how_html_changes_epub) - [How HTML changes in ePub](https://www.htmhell.dev/adventcalendar/2025/11/)
* [2026-01-02, 23:31:00](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MTV&apos;s Music-Only Channels Go Off the Air](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 22:14:29](https://lobste.rs/s/lifxkp/why_i_switched_away_from_zig_c3) - [Why I switched away from Zig to C3](https://lowbytefox.dev/blog/from-zig-to-c3/)
* [2026-01-02, 19:36:30](https://lobste.rs/s/fcwjie/was_it_really_billion_dollar_mistake) - [Was it really a Billion Dollar Mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 17:23:34](https://lobste.rs/s/1lcrer/darktable_styles_mimicing_fujifilm_s) - [Darktable Styles mimicing Fujifilm&apos;s Film Simulations](https://jssfr.de/dtsolve/2026-01-02-darktable-styles-fujifilm.html)
* [2026-01-02, 16:09:05](https://lobste.rs/s/eulydi/which_programming_resource_changed_your) - [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 12:26:55](https://lobste.rs/s/lrx8vc/assorted_less_1_tips) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 08:49:29](https://news.ycombinator.com/item?id=46442502) - [Torch.ts – building PyTorch in TypeScript from scratch to learn](https://github.com/13point5/torch.ts)
* [2025-12-31, 05:54:06](https://news.ycombinator.com/item?id=46441781) - [Sirius DB](https://www.sirius-db.com/)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-31, 00:43:30](https://news.ycombinator.com/item?id=46440037) - [Exploring Dithering on Spectra 6-color E-Ink Displays](https://myembeddedstuff.com/e-ink-spectra-6-color)
