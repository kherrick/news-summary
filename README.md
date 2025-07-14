# [News Summary](https://kherrick.github.io/news-summary/)

## Environmental and Renewable Energy Highlights

* [More Than Half of Carbon Credit Auditors Have Signed Off on 'Overclaimed' Benefits](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Underwater Turbine Spins 6.5 Years Off Scotland's Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&from=rss)

## Advancements and Challenges in AI and Computing

* [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424)

* [Hypercapitalism and the AI Talent Wars](https://blog.johnluttig.com/p/hypercapitalism-and-the-ai-talent)

* [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&from=rss)

## Notable Scientific Discoveries and Technical Innovations

* [The Gottorf Globe and its reconstruction](https://gottorfer-globus.de/en/the-gottorf-globe)

* [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&from=rss)

## Economic Shifts and Industry Reports

* [Investors bought 27% of US homes in Q1, as traditional buyers struggle to afford](https://abcnews.go.com/Business/wireStory/investors-snap-growing-share-us-homes-traditional-buyers-123560969)

* [Five companies now control over 90% of the restaurant food delivery market](https://marketsaintefficient.substack.com/p/five-companies-now-control-over-90)

* [GLP-1s Are Breaking Life Insurance](https://www.glp1digest.com/p/how-glp-1s-are-breaking-life-insurance)

## Software Development and Technical Tools

* [Zig's New Async I/O](https://kristoff.it/blog/zig-new-async-io/)

* [Let’s Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html)

* [Simple live reload for developing static sites](https://leanrada.com/notes/simple-live-reload/)

## Historical Restorations and Global Discoveries

* [Amelia Earhart's Airplane May Finally Have Been Found](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Derinkuyu: A Subterranean Marvel of Ancient Engineering with Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&from=rss)

* [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&from=rss)

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

* [2025-07-14, 02:02:46](https://lobste.rs/s/x9s2mu/store_tags_after_payloads) - [Store tags after payloads](https://www.scattered-thoughts.net/writing/store-tags-after-payloads/)
* [2025-07-14, 01:34:00](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than Half of Carbon Credit Auditors Have Signed Off on &apos;Overclaimed&apos; Benefits](https://news.slashdot.org/story/25/07/14/0058203/more-than-half-of-carbon-credit-auditors-have-signed-off-on-overclaimed-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 01:33:46](https://lobste.rs/s/rqewmw/let_s_learn_x86_64_assembly_part_0_setup) - [Let&apos;s Learn x86-64 Assembly! Part 0 - Setup and First Steps](https://gpfault.net/posts/asm-tut-0.txt.html)
* [2025-07-13, 23:48:00](https://yro.slashdot.org/story/25/07/13/2345250/some-amazon-warehouses-are-losing-hundreds-of-workers-after-changes-in-legal-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Amazon Warehouses are Losing Hundreds of Workers After Changes in Legal Status](https://yro.slashdot.org/story/25/07/13/2345250/some-amazon-warehouses-are-losing-hundreds-of-workers-after-changes-in-legal-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 23:46:12](https://news.ycombinator.com/item?id=44554865) - [Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs](https://arxiv.org/abs/2502.17424)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 23:21:21](https://news.ycombinator.com/item?id=44554713) - [Investors bought 27% of US homes in Q1, as traditional buyers struggle to afford](https://abcnews.go.com/Business/wireStory/investors-snap-growing-share-us-homes-traditional-buyers-123560969)
* [2025-07-13, 22:22:15](https://news.ycombinator.com/item?id=44554307) - [Let&apos;s Learn x86-64 Assembly (2020)](https://gpfault.net/posts/asm-tut-0.txt.html)
* [2025-07-13, 21:55:00](https://it.slashdot.org/story/25/07/13/2152256/why-its-time-to-invest-in-quantum-cybersecurity-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why It&apos;s Time To Invest In Quantum Cybersecurity Now](https://it.slashdot.org/story/25/07/13/2152256/why-its-time-to-invest-in-quantum-cybersecurity-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 21:35:32](https://news.ycombinator.com/item?id=44553949) - [Big Data was used to see if TCM was scientific (2023)](https://www.mcgill.ca/oss/article/medical-critical-thinking-health-and-nutrition/no-traditional-chinese-medicine-has-not-been-vindicated-science)
* [2025-07-13, 21:11:44](https://lobste.rs/s/smje5p/task_runner_census_2025) - [Task Runner Census 2025](https://aleyan.com/blog/2025-task-runners-census/)
* [2025-07-13, 21:08:47](https://news.ycombinator.com/item?id=44553752) - [OpenCut: The open-source CapCut alternative](https://github.com/OpenCut-app/OpenCut)
* [2025-07-13, 21:08:14](https://news.ycombinator.com/item?id=44553747) - [APKLab: Android Reverse-Engineering Workbench for VS Code](https://github.com/APKLab/APKLab)
* [2025-07-13, 20:47:00](https://linux.slashdot.org/story/25/07/13/1946205/gparted-live-170-linux-distro-drops-32-bit-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GParted Live 1.7.0 Linux Distro Drops 32-Bit Support](https://linux.slashdot.org/story/25/07/13/1946205/gparted-live-170-linux-distro-drops-32-bit-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 20:35:17](https://news.ycombinator.com/item?id=44553479) - [Programming Language Theory has a public relations problem](https://happyfellow.bearblog.dev/programming-language-theory-has-a-public-relations-problem/)
* [2025-07-13, 20:34:28](https://lobste.rs/s/byp59z/programming_language_theory_has_public) - [Programming Language Theory has a public relations problem](https://happyfellow.bearblog.dev/programming-language-theory-has-a-public-relations-problem/)
* [2025-07-13, 20:23:37](https://news.ycombinator.com/item?id=44553389) - [Five companies now control over 90% of the restaurant food delivery market](https://marketsaintefficient.substack.com/p/five-companies-now-control-over-90)
* [2025-07-13, 20:22:00](https://news.ycombinator.com/item?id=44553379) - [Ask HN: How much of OpenAI code is written by AI?](https://news.ycombinator.com/item?id=44553379)
* [2025-07-13, 20:09:34](https://news.ycombinator.com/item?id=44553257) - [Hypercapitalism and the AI Talent Wars](https://blog.johnluttig.com/p/hypercapitalism-and-the-ai-talent)
* [2025-07-13, 19:47:00](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Never-Ending Supply of Drones Has Frozen the Front Lines in Ukraine](https://tech.slashdot.org/story/25/07/13/1930206/a-never-ending-supply-of-drones-has-frozen-the-front-lines-in-ukraine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 19:16:07](https://news.ycombinator.com/item?id=44552730) - [The Gottorf Globe and its reconstruction](https://gottorfer-globus.de/en/the-gottorf-globe)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 18:47:00](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Enron Transforming Into a Real Texas Retail Electricity Provider?](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 18:31:47](https://news.ycombinator.com/item?id=44552414) - [GLP-1s Are Breaking Life Insurance](https://www.glp1digest.com/p/how-glp-1s-are-breaking-life-insurance)
* [2025-07-13, 18:21:27](https://lobste.rs/s/7o1ilj/exploiting_all_google_kernelctf) - [Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: A RBTree Family Drama (Part One)](https://syst3mfailure.io/rbtree-family-drama/)
* [2025-07-13, 18:13:39](https://lobste.rs/s/tpekcr/linux_kernel_pipapo_set_double_free_lpe) - [Linux Kernel Pipapo Set Double Free LPE](https://ssd-disclosure.com/ssd-advisory-linux-kernel-pipapo-set-double-free-lpe/)
* [2025-07-13, 17:48:52](https://lobste.rs/s/wjdfe5/apple_trace_cache) - [Apple Trace Cache](https://www.realworldtech.com/forum/?threadid=223220)
* [2025-07-13, 17:47:00](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Gut Microbes Can Absorb and Help Expel &apos;Forever Chemicals&apos;, Study Shows](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 17:19:31](https://lobste.rs/s/v9qbqc/haiku_activity_contract_report_june_2025) - [Haiku Activity &amp; Contract Report, June 2025](https://www.haiku-os.org/blog/waddlesplash/2025-07-12-haiku_activity_contract_report_june_2025/)
* [2025-07-13, 17:18:20](https://news.ycombinator.com/item?id=44551913) - [Does showing seconds in the system tray actually use more power?](https://www.lttlabs.com/blog/2025/07/11/does-showing-seconds-in-the-system-tray-actually-use-more-power)
* [2025-07-13, 17:00:57](https://news.ycombinator.com/item?id=44551784) - [Infisical (YC W23) Is Hiring DevRel Engineers](https://www.ycombinator.com/companies/infisical/jobs/qCrLiJb-developer-relations)
* [2025-07-13, 16:58:03](https://lobste.rs/s/rx4vvq/algorithms_for_making_interesting) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 16:57:48](https://news.ycombinator.com/item?id=44551762) - [Show HN: A Raycast-compatible launcher for Linux](https://github.com/ByteAtATime/raycast-linux)
* [2025-07-13, 16:57:43](https://lobste.rs/s/gjh1xi/notes_on_graham_s_ansi_common_lisp) - [Notes on Graham&apos;s ANSI Common Lisp](https://courses.cs.northwestern.edu/325/readings/graham/graham-notes.html)
* [2025-07-13, 16:45:02](https://news.ycombinator.com/item?id=44551652) - [A technical look at Iran&apos;s internet shutdowns](https://zola.ink/blog/posts/a-technical-look-at-irans-internet-shutdown)
* [2025-07-13, 16:34:00](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Underwater Turbine Spins 6.5 Years Off Scotland&apos;s Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:30:34](https://lobste.rs/s/rnwozv/detour_detour_through_linux_dynamic) - [detour: A detour through the Linux dynamic linker](https://github.com/graphitemaster/detour)
* [2025-07-13, 15:57:34](https://news.ycombinator.com/item?id=44551318) - [Zig&apos;s new I/O: function coloring is inevitable?](https://blog.ivnj.org/post/function-coloring-is-inevitable)
* [2025-07-13, 15:34:00](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Omoway Announces a New Self-Driving Electric Scooter Named &apos;Omo X&apos;](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 15:30:29](https://news.ycombinator.com/item?id=44551109) - [Fine dining restaurants researching guests to make their dinner unforgettable](https://www.sfgate.com/food/article/data-deep-dives-bay-area-fine-dining-restaurants-20404434.php)
* [2025-07-13, 14:34:00](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Banned Switch 2 Owner For Playing a Used Switch 1 Game They Bought Online](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 14:29:56](https://lobste.rs/s/cxucew/bringing_virtualization_x86) - [Bringing Virtualization to the x86 Architecture with the Original VMware Workstation (2012)](https://web.archive.org/web/20250603150137if_/http://www.cs.columbia.edu/~cdall/candidacy/pdf/Bugnion2012.pdf)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 14:09:06](https://news.ycombinator.com/item?id=44550572) - [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-13, 13:48:49](https://news.ycombinator.com/item?id=44550450) - [Local Chatbot RAG with FreeBSD Knowledge](https://hackacad.net/post/2025-07-12-local-chatbot-rag-with-freebsd-knowledge/)
* [2025-07-13, 13:45:39](https://lobste.rs/s/lkbawj/local_chatbot_rag_with_freebsd_knowledge) - [Local Chatbot RAG with FreeBSD Knowledge](https://hackacad.net/post/2025-07-12-local-chatbot-rag-with-freebsd-knowledge/)
* [2025-07-13, 13:03:13](https://news.ycombinator.com/item?id=44550157) - [Show HN: Learn LLMs LeetCode Style](https://github.com/Exorust/TorchLeet)
* [2025-07-13, 12:06:34](https://news.ycombinator.com/item?id=44549762) - [The North Korean fake IT worker problem is ubiquitous](https://www.theregister.com/2025/07/13/fake_it_worker_problem/)
* [2025-07-13, 11:34:00](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-office-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC&apos;s &apos;Brighter&apos; Superman Movie Smashes Box Office Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-office-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 09:52:04](https://lobste.rs/s/lree6z/perldelta_what_is_new_for_perl_v5_42_0) - [perldelta - what is new for perl v5.42.0](https://perldoc.perl.org/5.42.0/perldelta)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 08:19:04](https://lobste.rs/s/1yqzqb/design_implementation_extensible) - [The Design and Implementation of Extensible Records for Rust in CGP](https://contextgeneric.dev/blog/extensible-datatypes-part-3/)
* [2025-07-13, 08:17:48](https://lobste.rs/s/ra4nyf/dict_unpacking_at_home_can_we_have_dict) - [dict-unpacking-at-home: can we have dict unpacking in python?](https://github.com/asottile/dict-unpacking-at-home)
* [2025-07-13, 07:34:00](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 06:20:11](https://lobste.rs/s/ubpr2o/migrating_my_nas_from_coreos_flatcar) - [Migrating my NAS from CoreOS/Flatcar Linux to NixOS](https://michael.stapelberg.ch/posts/2025-07-13-nixos-nas-network-storage-config/)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 03:34:00](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amelia Earhart&apos;s Airplane May Finally Have Been Found](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 02:28:06](https://lobste.rs/s/hul45q/constrained_languages_are_easier) - [constrained languages are easier to optimize](https://jyn.dev/constrained-languages-are-easier-to-optimize/)
* [2025-07-13, 01:53:33](https://lobste.rs/s/pbj1da/how_i_found_bypass_google_s_big_anti) - [How I found a bypass in Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-13, 01:34:00](https://tech.slashdot.org/story/25/07/13/0113254/ev-sets-new-record-for-longest-trip-on-a-single-charge---749-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Sets New Record for Longest Trip on a Single Charge - 749 Miles](https://tech.slashdot.org/story/25/07/13/0113254/ev-sets-new-record-for-longest-trip-on-a-single-charge---749-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 01:12:41](https://lobste.rs/s/oqaxxt/hacking_coroutines_into_c) - [Hacking coroutines into C](https://wiomoc.de/misc/posts/hacking_coroutines_into_c.html)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-13, 00:13:27](https://lobste.rs/s/mtcsug/zig_s_new_async_i_o) - [Zig&apos;s New Async I/O](https://kristoff.it/blog/zig-new-async-io/)
* [2025-07-12, 22:46:58](https://lobste.rs/s/4tgs7o/simple_live_reload_for_developing_static) - [Simple live reload for developing static sites](https://leanrada.com/notes/simple-live-reload/)
* [2025-07-12, 22:34:00](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Firefox is Fine. The People Running It are Not&apos;](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 21:57:37](https://lobste.rs/s/cbchxp/don_t_animate_height) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-12, 21:44:03](https://lobste.rs/s/ijyz5o/easy_dynamic_dispatch_using_glibc) - [Easy dynamic dispatch using GLIBC Hardware Capabilities](https://www.kvr.at/posts/easy-dynamic-dispatch-using-GLIBC-hardware-capabilities/)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 16:16:40](https://lobste.rs/s/f0tt1k/working_through_writing_c_compiler) - [Working through ‘Writing A C Compiler’](https://jollygoodsw.wordpress.com/2025/03/13/working-through-writing-a-c-compiler/)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 14:27:42](https://news.ycombinator.com/item?id=44532527) - [C3 solved memory lifetimes with scopes](https://c3-lang.org/blog/forget-borrow-checkers-c3-solved-memory-lifetimes-with-scopes/)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 00:21:16](https://news.ycombinator.com/item?id=44527172) - [Axon’s Draft One is designed to defy transparency](https://www.eff.org/deeplinks/2025/07/axons-draft-one-designed-defy-transparency)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 20:47:34](https://news.ycombinator.com/item?id=44525405) - [How to scale RL to 10^26 FLOPs](https://blog.jxmo.io/p/how-to-scale-rl-to-1026-flops)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 16:21:13](https://news.ycombinator.com/item?id=44522683) - [Show HN: Ten years of running every day, visualized](https://nodaysoff.run)
* [2025-07-10, 13:32:49](https://news.ycombinator.com/item?id=44520855) - [Show HN: FFmpeg in plain English – LLM-assisted FFmpeg in the browser](https://vidmix.app/ffmpeg-in-plain-english/)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 11:28:04](https://news.ycombinator.com/item?id=44519776) - [Monitoring My Homelab, Simply](https://b.tuxes.uk/simple-homelab-monitoring.html)
* [2025-07-10, 10:30:42](https://news.ycombinator.com/item?id=44519395) - [The underground cathedral protecting Tokyo from floods (2018)](https://www.bbc.com/future/article/20181129-the-underground-cathedral-protecting-tokyo-from-floods)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
