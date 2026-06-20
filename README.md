# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Innovations and Challenges

* [OpenAI Announces Benchmarks for AI Life Sciences Research. Its Best Model Failed 63.9% of the Test](https://science.slashdot.org/story/26/06/20/202204/openai-announces-benchmarks-for-ai-life-sciences-research-its-best-model-failed-639-of-the-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI unveiled new benchmarks for AI research in life sciences, revealing that its leading model still made errors 63.9% of the time on one specific test.

* [Tech Pundit Cringely Co-Founds Startup &apos;2Brains Inc&apos; to Solve LLM Hallucinations](https://slashdot.org/story/26/06/20/0556251/tech-pundit-cringely-co-founds-startup-2brains-inc-to-solve-llm-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new startup aims to address the ongoing problem of hallucinations in large language models (LLMs) by pioneering innovative solutions.

* [We Post-Trained a Model That Pen Tests Instead of Refusing](https://www.argusred.com/cli) - A novel approach to machine learning produces a model that can pen test rather than deny tasks, showcasing an unorthodox use of AI.

## Security Incidents and Innovations

* [Unauthorized alert sent to cell phones across Brazil](https://www.cnn.com/2026/06/20/americas/brazil-hackers-unauthorized-alert-latam) - A mysterious security breach led to unauthorized messages being sent to cell phones across Brazil, raising concerns about systemic vulnerabilities.

* [Microsoft Discovers Cryptocurrency Stealer That Spreads Through USB Drives and Uses Tor](https://it.slashdot.org/story/26/06/20/0347206/microsoft-discovers-cryptocurrency-stealer-that-spreads-through-usb-drives-and-uses-tor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A malware campaign using USB drives and Tor networks has been uncovered, specifically targeting cryptocurrency to carry out theft.

* [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - A vulnerability in GitHub's Copilot allowed attackers to misappropriate users' two-factor authentication codes.

* [What has (can) the EU Cyber Resilience Act done (do) for you?](https://nxdomain.no/~peter/what_hascan_eu_cra_donedo_for_you.html) - Analysis of the European cybersecurity regulations and the tangible changes they could bring to both citizens and businesses.

## Software and Hardware Advancements

* [Linux Eliminates the Strncpy API After Six Years of Work, 360 Patches](https://www.phoronix.com/news/Linux-7.2-Drops-strncpy) - Linux developers have deprecated the strncpy API in favor of more secure alternatives after six years of effort and 360 related patches.

* [AMD will reinstate memory encryption on Ryzen 9000 CPUs via BIOS update in July](https://www.tomshardware.com/pc-components/cpus/amd-will-reinstate-memory-encryption-on-ryzen-9000-cpus-through-a-bios-update-in-july-tsme-is-coming-back-after-valuable-community-feedback) - In response to user feedback, AMD will restore memory encryption features on its Ryzen 9000 processors through an upcoming BIOS update.

* [Show HN: Tiny – An interpreted dynamic language with inline Go native functions](https://github.com/confh/Tiny) - Explore 'Tiny,' a powerful, lightweight programming language integrating dynamic typing with inline Go native functions.

## Transportation and Mobility

* [Waymo Recalls About 3,900 Robotaxis After Some Drove Into 'Freeway Construction Zones'](https://tech.slashdot.org/story/26/06/20/0621217/waymo-recalls-about-3900-robotaxis-after-some-drove-into-freeway-construction-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Waymo issues a recall for thousands of robotaxis after reports of unsafe behavior, such as driving into freeway construction zones during operation.

* [Hyundai Takes Full Control of Boston Dynamics As SoftBank Exits For $325 Million](https://hardware.slashdot.org/story/26/06/19/198218/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Hyundai solidifies its investment in robotics by acquiring full control of Boston Dynamics from SoftBank.

## Retro-Tech and Creative Applications

* [Show HN: My Windows XP portfolio with working Game Boy and iPod](https://mitchivin.com/) - A creative portfolio emulates a vintage Windows XP interface featuring fully functional Game Boy and iPod applications.

* [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/) - An innovative experiment encodes an entire website into a small favicon, showcasing unconventional ways to store and access data.

* [cssQuake - Play Quake in Your Browser](https://cssquake.com/) - Reimagine Quake in an amusing twist—fully playable within your web browser using CSS and minimal external files.

## Historical Reflections and Discoveries

* [Remembering When Alan Turing Developed a Portable Voice Encryption Device](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A tribute to Alan Turing's groundbreaking work on portable voice encryption devices during World War II.

* [The ability to regrow body parts is dormant in mammals, not lost](https://www.sciencedaily.com/releases/2026/06/260617032207.htm) - Research suggests regenerative abilities to grow body parts, found in some species, remain dormant in mammals and could potentially be unlocked.

* [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - A deep dive into the complex challenges and innovations in accurately typesetting and preserving Arabic calligraphy in print.

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

* [2026-06-20, 21:34:00](https://science.slashdot.org/story/26/06/20/202204/openai-announces-benchmarks-for-ai-life-sciences-research-its-best-model-failed-639-of-the-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Announces Benchmarks for AI Life Sciences Research. Its Best Model Failed 63.9% of the Test](https://science.slashdot.org/story/26/06/20/202204/openai-announces-benchmarks-for-ai-life-sciences-research-its-best-model-failed-639-of-the-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 21:25:10](https://news.ycombinator.com/item?id=48613112) - [Dallas Fed: 30% of housing cost increase driven by unauthorized immigration [pdf]](https://www.dallasfed.org/~/media/documents/research/papers/2026/wp2607.pdf)
* [2026-06-20, 21:09:39](https://news.ycombinator.com/item?id=48613008) - [Supermarket giant Tesco sues VMware for breach of contract](https://www.theregister.com/software/2025/09/03/supermarket-giant-tesco-sues-vmware-for-breach-of-contract/1420651)
* [2026-06-20, 20:59:40](https://news.ycombinator.com/item?id=48612943) - [Linux Eliminates the Strncpy API After Six Years of Work, 360 Patches](https://www.phoronix.com/news/Linux-7.2-Drops-strncpy)
* [2026-06-20, 20:48:04](https://news.ycombinator.com/item?id=48612859) - [Seeing the world in radio waves with the QuadRF](https://hackaday.com/2026/06/20/seeing-the-world-in-radio-waves-with-the-quadrf/)
* [2026-06-20, 20:34:00](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering When Alan Turing Developed a Portable Voice Encryption Device](https://it.slashdot.org/story/26/06/20/059229/remembering-when-alan-turing-developed-a-portable-voice-encryption-device?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 20:05:03](https://news.ycombinator.com/item?id=48612502) - [Unauthorized alert sent to cell phones across Brazil](https://www.cnn.com/2026/06/20/americas/brazil-hackers-unauthorized-alert-latam)
* [2026-06-20, 19:34:00](https://slashdot.org/story/26/06/20/0556251/tech-pundit-cringely-co-founds-startup-2brains-inc-to-solve-llm-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Pundit Cringely Co-Founds Startup &apos;2Brains Inc&apos; to Solve LLM Hallucinations](https://slashdot.org/story/26/06/20/0556251/tech-pundit-cringely-co-founds-startup-2brains-inc-to-solve-llm-hallucinations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 19:19:06](https://news.ycombinator.com/item?id=48612098) - [AMD will reinstate memory encryption on Ryzen 9000 CPUs via BIOS update in July](https://www.tomshardware.com/pc-components/cpus/amd-will-reinstate-memory-encryption-on-ryzen-9000-cpus-through-a-bios-update-in-july-tsme-is-coming-back-after-valuable-community-feedback)
* [2026-06-20, 19:18:48](https://news.ycombinator.com/item?id=48612095) - [Show HN: My Windows XP portfolio with working Game Boy and iPod](https://mitchivin.com/)
* [2026-06-20, 19:01:10](https://news.ycombinator.com/item?id=48611942) - [PostgresBench: A Reproducible Benchmark for Postgres Services](https://clickhouse.com/blog/postgresbench)
* [2026-06-20, 18:53:46](https://news.ycombinator.com/item?id=48611857) - [Show HN: Tiny – An interpeted dynamic langauge with inline Go native functions](https://github.com/confh/Tiny)
* [2026-06-20, 18:47:52](https://lobste.rs/s/s1ep1w/is_anyone_still_using_emacs) - [Is anyone still using Emacs?](https://jmmv.dev/2026/06/is-anyone-still-using-emacs.html)
* [2026-06-20, 18:34:00](https://tech.slashdot.org/story/26/06/20/0621217/waymo-recalls-about-3900-robotaxis-after-some-drove-into-freeway-construction-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Recalls About 3,900 Robotaxis After Some Drove Into &apos;Freeway Construction Zones&apos;](https://tech.slashdot.org/story/26/06/20/0621217/waymo-recalls-about-3900-robotaxis-after-some-drove-into-freeway-construction-zones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 18:17:58](https://news.ycombinator.com/item?id=48611513) - [Show HN: Make PDFs look scanned (CLI or in the browser via WASM)](https://github.com/overflowy/make-look-scanned)
* [2026-06-20, 18:05:31](https://news.ycombinator.com/item?id=48611411) - [The Wholesale Plagiarism of Obscure Sorrows](https://waxy.org/2026/06/the-wholesale-plagiarism-of-obscure-sorrows/)
* [2026-06-20, 17:34:00](https://mobile.slashdot.org/story/26/06/20/175205/cellphone-alert-system-breached-in-brazil-message-sent-in-leetspeak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cellphone Alert System Breached in Brazil, Message Sent in Leetspeak](https://mobile.slashdot.org/story/26/06/20/175205/cellphone-alert-system-breached-in-brazil-message-sent-in-leetspeak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 17:27:36](https://news.ycombinator.com/item?id=48611083) - [The ability to regrow body parts is dormant in mammals, not lost](https://www.sciencedaily.com/releases/2026/06/260617032207.htm)
* [2026-06-20, 17:11:59](https://lobste.rs/s/watrw9/ocaml_5_5_0_released) - [OCaml 5.5.0 released](https://discuss.ocaml.org/t/ocaml-5-5-0-released/18265)
* [2026-06-20, 17:04:24](https://news.ycombinator.com/item?id=48610853) - [UHF X11: X11 Built for VisionOS and Apple Vision Pro](https://www.lispm.net/apps/uhf-x11/)
* [2026-06-20, 17:02:49](https://news.ycombinator.com/item?id=48610841) - [Bun has an open PR adding shared-memory threads to JavaScriptCore](https://github.com/oven-sh/WebKit/pull/249)
* [2026-06-20, 17:01:36](https://news.ycombinator.com/item?id=48610827) - [SMPTE Makes Its Standards Freely Accessible](https://www.smpte.org/blog/smpte-makes-its-standards-freely-accessible-openingstandards-library-to-the-global-media-technology-community)
* [2026-06-20, 17:00:38](https://news.ycombinator.com/item?id=48610816) - [Ember, a native iOS Hacker News reader I built around accessibility](https://github.com/DatanoiseTV/ember-hackernews)
* [2026-06-20, 16:34:00](https://news.slashdot.org/story/26/06/20/0429254/smpte-opens-entire-standards-catalog-for-free-removing-century-old-paywall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SMPTE Opens Entire Standards Catalog for Free, Removing Century-Old Paywall](https://news.slashdot.org/story/26/06/20/0429254/smpte-opens-entire-standards-catalog-for-free-removing-century-old-paywall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 16:02:54](https://lobste.rs/s/xb4qgt/announcing_next_generation_distrobox) - [Announcing the next generation of Distrobox](https://distrobox.it/posts/announcing_distrobox_next/)
* [2026-06-20, 15:59:29](https://news.ycombinator.com/item?id=48610224) - [Show HN: StartupWiki – A Free Alternative to Crunchbase](https://startupwiki.tech/)
* [2026-06-20, 15:34:00](https://it.slashdot.org/story/26/06/20/0347206/microsoft-discovers-cryptocurrency-stealer-that-spreads-through-usb-drives-and-uses-tor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Discovers Cryptocurrency Stealer That Spreads Through USB Drives and Uses Tor](https://it.slashdot.org/story/26/06/20/0347206/microsoft-discovers-cryptocurrency-stealer-that-spreads-through-usb-drives-and-uses-tor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 15:10:03](https://news.ycombinator.com/item?id=48609766) - [DOS Game \&quot;F-15 Strike Eagle II\&quot; reversing project needs DOS test pilots](https://neuviemeporte.github.io/f15-se2/2026/06/20/needyou.html)
* [2026-06-20, 14:40:12](https://news.ycombinator.com/item?id=48609553) - [Vacation With An Artist – Mini-Apprenticeships with Artists in Their Studios](https://vawaa.com/)
* [2026-06-20, 14:34:00](https://news.slashdot.org/story/26/06/20/0321205/fsf-patches-two-year-old-vulnerability-found-by-ai-researchers-in-gnu-savannah-repository?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Patches Two-Year-Old Vulnerability Found by AI Researchers in GNU Savannah Repository](https://news.slashdot.org/story/26/06/20/0321205/fsf-patches-two-year-old-vulnerability-found-by-ai-researchers-in-gnu-savannah-repository?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 14:20:47](https://news.ycombinator.com/item?id=48609422) - [Web Browsers on PDAS](https://vale.rocks/posts/pda-browsers)
* [2026-06-20, 14:16:10](https://lobste.rs/s/pida8e/i_stored_website_favicon) - [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)
* [2026-06-20, 14:15:19](https://lobste.rs/s/apwyep/cssquake_play_quake_your_browser) - [cssQuake - Play Quake in Your Browser](https://cssquake.com/)
* [2026-06-20, 13:49:03](https://news.ycombinator.com/item?id=48609231) - [Show HN: We post-trained a model that pen tests instead of refusing](https://www.argusred.com/cli)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 11:49:16](https://lobste.rs/s/lhn5w5/reverse_engineering_qualcomm_npu) - [Reverse Engineering the Qualcomm NPU Compiler](https://datavorous.github.io/writing/qairt/)
* [2026-06-20, 11:44:52](https://news.ycombinator.com/item?id=48608515) - [The rise of South Korea’s weapons business](https://www.politico.com/news/magazine/2026/06/20/south-korea-weapons-dealer-trump-00959559)
* [2026-06-20, 11:19:05](https://news.ycombinator.com/item?id=48608394) - [Temporary Cloudflare accounts for AI agents](https://blog.cloudflare.com/temporary-accounts/)
* [2026-06-20, 11:00:00](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Student Loan Borrowers Will Get Interest Rate Cut If They Sign Up For Auto Pay](https://news.slashdot.org/story/26/06/19/232209/student-loan-borrowers-will-get-interest-rate-cut-if-they-sign-up-for-auto-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 10:55:18](https://news.ycombinator.com/item?id=48608255) - [Bootimus – A Self-Contained PXE and HTTP Boot Server](https://bootimus.com)
* [2026-06-20, 10:49:53](https://news.ycombinator.com/item?id=48608223) - [CSSQuake](https://cssquake.com/)
* [2026-06-20, 10:02:17](https://lobste.rs/s/gdwaqt/town_square_community_deserves) - [Town Square, the community deserves connection](https://cauenapier.com/blog/town-square-the-community-deserves-connection/)
* [2026-06-20, 09:00:43](https://lobste.rs/s/vpe3o6/xlibre_xserver_25_2_released) - [XLibre XServer 25.2 released](https://github.com/X11Libre/xserver/wiki/XLibre-XServer-25.2-Changes)
* [2026-06-20, 08:36:23](https://lobste.rs/s/dswkwr/meet_alice_alice_is_impatient) - [Meet Alice. Alice is impatient](https://brooker.co.za/blog/2026/06/19/waiting.html)
* [2026-06-20, 08:28:09](https://lobste.rs/s/mh9czn/cube_epicycles_human_face) - [The cube, the epicycles and the human face](https://www.andreinc.net/2026/06/15/the-cube-the-epicycles-and-the-human-face/)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 07:42:32](https://lobste.rs/s/ew22ks/there_are_no_instances_atproto) - [There Are No Instances in atproto](https://overreacted.io/there-are-no-instances-in-atproto/)
* [2026-06-20, 07:27:25](https://lobste.rs/s/xebobo/uhf_x11_x11_built_for_visionos_apple) - [UHF X11: X11 built for VisionOS and Apple Vision Pro](https://www.lispm.net/apps/uhf-x11/)
* [2026-06-20, 07:00:00](https://slashdot.org/story/26/06/19/2248239/amazon-retaliated-against-workers-who-supported-regulating-data-centers-complaint-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Retaliated Against Workers Who Supported Regulating Data Centers, Complaint Says](https://slashdot.org/story/26/06/19/2248239/amazon-retaliated-against-workers-who-supported-regulating-data-centers-complaint-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 06:28:58](https://lobste.rs/s/oy4gen/what_has_can_eu_cyber_resilience_act_done) - [What has (can) the EU Cyber Resilience Act done (do) for you?](https://nxdomain.no/~peter/what_hascan_eu_cra_donedo_for_you.html)
* [2026-06-20, 05:33:59](https://news.ycombinator.com/item?id=48606619) - [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)
* [2026-06-20, 04:16:28](https://lobste.rs/s/jmhfck/safe_simd_rust_even_on_inside) - [Safe SIMD in Rust, even on the inside](https://shnatsel.medium.com/safe-simd-in-rust-even-on-the-inside-c6f1ff381828)
* [2026-06-20, 03:30:00](https://developers.slashdot.org/story/26/06/19/2159245/using-sound-waves-to-make-espresso-could-cut-coffee-brewing-energy-use-by-75?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Using Sound Waves To Make Espresso Could Cut Coffee-Brewing Energy Use By 75%](https://developers.slashdot.org/story/26/06/19/2159245/using-sound-waves-to-make-espresso-could-cut-coffee-brewing-energy-use-by-75?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-20, 00:51:33](https://lobste.rs/s/ysxvko/i_am_dreading_our_llm_written_incident) - [I am dreading our LLM-written incident report future](https://surfingcomplexity.blog/2026/06/19/i-am-dreading-our-llm-written-incident-report-future/)
* [2026-06-19, 23:00:00](https://entertainment.slashdot.org/story/26/06/19/2146253/amazon-drops-sam-altman-movie-after-announcing-openai-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Drops Sam Altman Movie After Announcing OpenAI Partnership](https://entertainment.slashdot.org/story/26/06/19/2146253/amazon-drops-sam-altman-movie-after-announcing-openai-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 22:00:00](https://yro.slashdot.org/story/26/06/19/2140248/norway-imposes-near-ban-on-ai-in-elementary-school?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Imposes Near Ban On AI In Elementary School](https://yro.slashdot.org/story/26/06/19/2140248/norway-imposes-near-ban-on-ai-in-elementary-school?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 21:41:22](https://lobste.rs/s/k5raot/bevy_0_19) - [Bevy 0.19](https://bevy.org/news/bevy-0-19/)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 21:19:37](https://lobste.rs/s/fbsqfs/smpte_makes_its_standards_freely) - [SMPTE Makes Its Standards Freely Accessible](https://www.smpte.org/blog/smpte-makes-its-standards-freely-accessible-openingstandards-library-to-the-global-media-technology-community)
* [2026-06-19, 21:00:00](https://games.slashdot.org/story/26/06/19/1918208/doom-composer-bobby-prince-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Composer Bobby Prince Has Died](https://games.slashdot.org/story/26/06/19/1918208/doom-composer-bobby-prince-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 20:07:14](https://news.ycombinator.com/item?id=48602683) - [Coding a Brick Tower [video]](https://www.youtube.com/watch?v=DAMiS2PGTEE)
* [2026-06-19, 20:00:00](https://hardware.slashdot.org/story/26/06/19/198218/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai Takes Full Control of Boston Dynamics As SoftBank Exits For $325 Million](https://hardware.slashdot.org/story/26/06/19/198218/hyundai-takes-full-control-of-boston-dynamics-as-softbank-exits-for-325-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 16:20:51](https://lobste.rs/s/nvfvjt/i_can_haz_smoller_nixos_isos) - [I can haz smoller NixOS ISOs?](https://natkr.com/2026-06-19-nixos-but-smol/)
* [2026-06-19, 14:50:19](https://lobste.rs/s/jk5k9i/project_valhalla_explained_how_decade) - [Project Valhalla, Explained: How a Decade of Work Arrives in JDK 28](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a)
* [2026-06-19, 14:32:07](https://lobste.rs/s/9rbscj/wikispy) - [WikiSpy](https://neal.fun/wiki-spy/)
* [2026-06-19, 13:27:13](https://lobste.rs/s/dsy6r3/aspirational_clownmaxxing_joey_s) - [Aspirational Clownmaxxing and Joey&apos;s cadillac todo list](https://charlesleifer.com/blog/aspirational-clownmaxxing-and-joey-s-cadillac-todo-list/)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 10:36:25](https://lobste.rs/s/u0nv8q/diffshub) - [DiffsHub](https://diffshub.com/)
* [2026-06-19, 08:26:25](https://lobste.rs/s/heb0am/godot_4_7_lights_camera_action) - [Godot 4.7: Lights, Camera, Action](https://godotengine.org/releases/4.7/)
* [2026-06-18, 23:24:00](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss) - [Linux Kernel 7.1 Sends Intel 486 Support To Silicon Heaven](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 17:04:00](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments) - [What are your Favorite Lobste.rs Comments?](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments)
* [2026-06-18, 16:25:48](https://lobste.rs/s/5majlp/future_con_is_already_here_it_s_just_not) - [The Future of the Con Is Already Here, It&apos;s Just Not Evenly Distributed](http://manishearth.github.io/blog/2026/06/17/the-future-of-the-con-is-already-here/)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
* [2026-06-17, 23:35:00](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss) - [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)
* [2026-06-17, 20:15:57](https://news.ycombinator.com/item?id=48576217) - [Now You Don&apos;t: When Espionage Meets Magic](https://www.politicshome.com/news/article/now-dont-espionage-meets-magic)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 13:34:42](https://news.ycombinator.com/item?id=48570364) - [Show HN: Microcrad – Micrograd Reimplemented in C](https://github.com/oraziorillo/microcrad)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 18:57:29](https://news.ycombinator.com/item?id=48560227) - [Inference cost at scale with napkin math](https://injuly.in/blog/napkin-inference-cost/index.html)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
