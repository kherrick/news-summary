# [News Summary](https://kherrick.github.io/news-summary/)

## Data Privacy and Legal Actions

* [German Court Rules Meta Tracking Tech Violates EU Privacy Laws](https://yro.slashdot.org/story/25/07/10/2056216/german-court-rules-meta-tracking-tech-violates-eu-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A German court ruled against Meta's tracking technology, citing violations of stringent EU privacy laws.

* [Swedish Bodyguards Reveal Prime Minister's Location on Fitness App](https://yro.slashdot.org/story/25/07/10/168215/swedish-bodyguards-reveal-prime-ministers-location-on-fitness-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Swedish bodyguards inadvertently revealed sensitive location data using a fitness app.

* [Judge Throws Out Lawsuit Accusing Apple of Taking Bribes To Avoid Competing With Visa and Mastercard](https://yro.slashdot.org/story/25/07/10/1659205/judge-throws-out-lawsuit-accusing-apple-of-taking-bribes-to-avoid-competing-with-visa-and-mastercard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Technology Advances

* [Launch HN: Leaping (YC W25) – Self-Improving Voice AI](https://news.ycombinator.com/item?id=44523523) - A startup introduces an adaptive voice AI system, promising continuous self-improvement.

* [Gemini Can Now Turn Your Photos Into Video With Veo 3](https://tech.slashdot.org/story/25/07/10/180230/gemini-can-now-turn-your-photos-into-video-with-veo-3?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Gemini introduces Veo 3, enabling users to transform static photos into compelling video narratives.

* [Diffusion Elites: surprisingly good, simple and embarrassingly parallel](https://blog.christianperone.com/2025/07/diffusion-elites/) - Insights on simplifying and enhancing efficiency in machine learning techniques.

## Emerging Climate and Clean Energy Trends

* [China is Building 74% of All Current Solar and Wind Projects](https://news.slashdot.org/story/25/07/10/1614230/china-is-building-74-of-all-current-solar-and-wind-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A staggering report highlights China’s dominance in global renewable energy projects.

* [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - Scientists find an alarming acceleration of ocean warming due to disappearing Antarctic sea ice.

## Significant Tech Incidents and Bugs

* [Final report on Alaska Airlines Flight 1282 in-flight exit door plug separation](https://www.ntsb.gov:443/investigations/Pages/DCA24MA063.aspx) - A new report delves into the technical failure that led to an aircraft’s exit door separation mid-flight.

* [An (almost) catastrophic OpenZFS bug and the humans that made it (and Rust is here too)](https://despairlabs.com/blog/posts/2025-07-10-an-openzfs-bug-and-the-humans-that-made-it/) - A detailed account of a nearly disastrous OpenZFS bug and its eventual resolution.

## Quantum and Future Computing Research

* [Holographic memory storage and information processing in Quantum Brain Dynamics](https://www.researchgate.net/publication/381542637_Quantum_Brain_Dynamics_Optical_and_Acoustic_Super-Radiance_via_a_Microtubule) - Researchers explore quantum brain dynamics and its revolutionary potential in memory storage.

* [Writing a very simple JIT Compiler in about 1000 lines of C](https://kuterdinel.com/writing-a-very-simple-jit-compiler-in-about-1000-lines-of-c.html) - A guide illustrating the development of a foundational JIT compiler in C.

* [Using fs_usage to see what files a process is using](https://til.simonwillison.net/macos/fs-usage) - An insightful breakdown on monitoring file access by processes.

## Societal and Ethical Considerations

* [Millions of Cars Exposed to Remote Hacking via PerfektBlue Attack](https://www.securityweek.com/millions-of-cars-exposed-to-remote-hacking-via-perfektblue-attack/) - A report uncovers a vulnerability exposing millions of vehicles to potential hacking.

* [CoverDrop: Blowing the Whistle Through A News App](https://www.coverdrop.org/) - A new app empowers whistleblowers to reveal information securely.

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

* [2025-07-10, 22:00:00](https://yro.slashdot.org/story/25/07/10/2056216/german-court-rules-meta-tracking-tech-violates-eu-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Court Rules Meta Tracking Tech Violates EU Privacy Laws](https://yro.slashdot.org/story/25/07/10/2056216/german-court-rules-meta-tracking-tech-violates-eu-privacy-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 21:22:00](https://it.slashdot.org/story/25/07/10/1833225/russia-blocks-ethical-hacking-legislation-over-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Blocks Ethical Hacking Legislation Over Security Concerns](https://it.slashdot.org/story/25/07/10/1833225/russia-blocks-ethical-hacking-legislation-over-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 20:51:45](https://news.ycombinator.com/item?id=44525468) - [Final report on Alaska Airlines Flight 1282 in-flight exit door plug separation](https://www.ntsb.gov:443/investigations/Pages/DCA24MA063.aspx)
* [2025-07-10, 20:41:00](https://tech.slashdot.org/story/25/07/10/180230/gemini-can-now-turn-your-photos-into-video-with-veo-3?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini Can Now Turn Your Photos Into Video With Veo 3](https://tech.slashdot.org/story/25/07/10/180230/gemini-can-now-turn-your-photos-into-video-with-veo-3?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 20:11:28](https://lobste.rs/s/jjqmuu/almost_catastrophic_openzfs_bug_humans) - [An (almost) catastrophic OpenZFS bug and the humans that made it (and Rust is here too)](https://despairlabs.com/blog/posts/2025-07-10-an-openzfs-bug-and-the-humans-that-made-it/)
* [2025-07-10, 20:01:00](https://slashdot.org/story/25/07/10/1756200/indeed-glassdoor-to-cut-1300-jobs-in-ai-focused-consolidation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indeed, Glassdoor To Cut 1,300 Jobs in AI-Focused Consolidation](https://slashdot.org/story/25/07/10/1756200/indeed-glassdoor-to-cut-1300-jobs-in-ai-focused-consolidation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 19:49:47](https://news.ycombinator.com/item?id=44524757) - [Holographic memory storage and information processing in Quantum Brain Dynamics](https://www.researchgate.net/publication/381542637_Quantum_Brain_Dynamics_Optical_and_Acoustic_Super-Radiance_via_a_Microtubule)
* [2025-07-10, 19:20:59](https://news.ycombinator.com/item?id=44524544) - [Show HN: Cactus – Ollama for Smartphones](https://news.ycombinator.com/item?id=44524544)
* [2025-07-10, 19:20:00](https://tech.slashdot.org/story/25/07/10/1752220/physical-buttons-make-comeback-on-mazda-steering-wheels-as-company-adopts-first-touchscreen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physical Buttons Make Comeback on Mazda Steering Wheels as Company Adopts First Touchscreen](https://tech.slashdot.org/story/25/07/10/1752220/physical-buttons-make-comeback-on-mazda-steering-wheels-as-company-adopts-first-touchscreen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 19:12:09](https://lobste.rs/s/jsjdll/ai_con) - [The AI Con](https://thecon.ai/)
* [2025-07-10, 19:10:28](https://news.ycombinator.com/item?id=44524430) - [eBPF: Connecting with Container Runtimes](https://h0x0er.github.io/blog/2025/06/29/ebpf-connecting-with-container-runtimes/)
* [2025-07-10, 18:41:00](https://yro.slashdot.org/story/25/07/10/1659205/judge-throws-out-lawsuit-accusing-apple-of-taking-bribes-to-avoid-competing-with-visa-and-mastercard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Throws Out Lawsuit Accusing Apple of Taking Bribes To Avoid Competing With Visa and Mastercard](https://yro.slashdot.org/story/25/07/10/1659205/judge-throws-out-lawsuit-accusing-apple-of-taking-bribes-to-avoid-competing-with-visa-and-mastercard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 18:32:05](https://news.ycombinator.com/item?id=44524063) - [Belkin ending support for older Wemo products](https://www.belkin.com/support-article/?articleNum=335419)
* [2025-07-10, 18:13:14](https://news.ycombinator.com/item?id=44523885) - [Millions of Cars Exposed to Remote Hacking via PerfektBlue Attack](https://www.securityweek.com/millions-of-cars-exposed-to-remote-hacking-via-perfektblue-attack/)
* [2025-07-10, 18:01:00](https://news.slashdot.org/story/25/07/10/1614230/china-is-building-74-of-all-current-solar-and-wind-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is Building 74% of All Current Solar and Wind Projects](https://news.slashdot.org/story/25/07/10/1614230/china-is-building-74-of-all-current-solar-and-wind-projects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 17:58:59](https://news.ycombinator.com/item?id=44523722) - [Orwell Diaries 1938-1942](https://orwelldiaries.wordpress.com/page/2/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 17:44:13](https://news.ycombinator.com/item?id=44523539) - [Retail cyber attacks: NCA arrest four for attacks on M&amp;S, Co-op and Harrods](https://www.nationalcrimeagency.gov.uk/news/retail-cyber-attacks-nca-arrest-four-for-attacks-on-m-s-co-op-and-harrods)
* [2025-07-10, 17:42:54](https://news.ycombinator.com/item?id=44523523) - [Launch HN: Leaping (YC W25) – Self-Improving Voice AI](https://news.ycombinator.com/item?id=44523523)
* [2025-07-10, 17:33:07](https://news.ycombinator.com/item?id=44523409) - [Show HN: Open source alternative to Perplexity Comet](https://www.browseros.com/)
* [2025-07-10, 17:24:35](https://lobste.rs/s/1batvy/measuring_impact_early_2025_ai_on) - [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
* [2025-07-10, 17:24:00](https://yro.slashdot.org/story/25/07/10/168215/swedish-bodyguards-reveal-prime-ministers-location-on-fitness-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swedish Bodyguards Reveal Prime Minister&apos;s Location on Fitness App](https://yro.slashdot.org/story/25/07/10/168215/swedish-bodyguards-reveal-prime-ministers-location-on-fitness-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 17:04:00](https://news.ycombinator.com/item?id=44523094) - [Show HN: asyncmcp – Run MCP over async transport via AWS SNS+SQS](https://github.com/bh-rat/asyncmcp)
* [2025-07-10, 17:02:20](https://lobste.rs/s/gm4vnt/vibe_coding_casino_rise_programming_by) - [Vibe Coding Casino: Rise of programming by slot machine](https://evrim.zone/blog/opinion/vibes_casino)
* [2025-07-10, 16:40:00](https://news.slashdot.org/story/25/07/10/1533207/why-america-still-cant-get-disaster-alerts-right?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why America Still Can&apos;t Get Disaster Alerts Right](https://news.slashdot.org/story/25/07/10/1533207/why-america-still-cant-get-disaster-alerts-right?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 16:29:18](https://news.ycombinator.com/item?id=44522772) - [Measuring the impact of AI on experienced open-source developer productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
* [2025-07-10, 16:02:40](https://news.ycombinator.com/item?id=44522505) - [Graphical Linear Algebra](https://graphicallinearalgebra.net/)
* [2025-07-10, 16:01:00](https://science.slashdot.org/story/25/07/10/161254/senators-signal-theyre-prepared-to-push-back-against-nasa-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Signal They&apos;re Prepared To Push Back Against NASA Cuts](https://science.slashdot.org/story/25/07/10/161254/senators-signal-theyre-prepared-to-push-back-against-nasa-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 15:46:42](https://lobste.rs/s/fkkoys/coverdrop_blowing_whistle_through_news) - [CoverDrop: Blowing the Whistle Through A News App](https://www.coverdrop.org/)
* [2025-07-10, 15:25:56](https://news.ycombinator.com/item?id=44522076) - [Bret Victor on why current trend of AIs is at odds with his work](https://dynamicland.org/2024/FAQ/#What_is_Realtalks_relationship_to_AI)
* [2025-07-10, 15:21:38](https://lobste.rs/s/0yqrym/lessons_from_creating_my_first_text) - [Lessons From Creating My First Text Adventure](https://entropicthoughts.com/lessons-from-creating-first-text-adventure)
* [2025-07-10, 15:20:00](https://tech.slashdot.org/story/25/07/10/1449202/new-eu-regulations-require-transparency-copyright-protection-from-powerful-ai-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New EU Regulations Require Transparency, Copyright Protection From Powerful AI Systems](https://tech.slashdot.org/story/25/07/10/1449202/new-eu-regulations-require-transparency-copyright-protection-from-powerful-ai-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 15:10:59](https://lobste.rs/s/eaumem/jai_demo_design_explanation) - [Jai Demo and Design Explanation](https://www.youtube.com/watch?v=IdpD5QIVOKQ)
* [2025-07-10, 15:01:42](https://news.ycombinator.com/item?id=44521871) - [Red Hat Technical Writing Style Guide](https://stylepedia.net/style/)
* [2025-07-10, 14:50:25](https://lobste.rs/s/5l2kgz/diffusion_elites_surprisingly_good) - [Diffusion Elites: surprisingly good, simple and embarrassingly parallel](https://blog.christianperone.com/2025/07/diffusion-elites/)
* [2025-07-10, 14:42:00](https://slashdot.org/story/25/07/10/1430209/intel-ceo-says-company-has-fallen-from-top-10-semiconductor-firms-too-late-to-catch-nvidia-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel CEO Says Company Has Fallen From &apos;Top 10&apos; Semiconductor Firms, &apos;Too Late&apos; To Catch Nvidia in AI](https://slashdot.org/story/25/07/10/1430209/intel-ceo-says-company-has-fallen-from-top-10-semiconductor-firms-too-late-to-catch-nvidia-in-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 14:36:01](https://lobste.rs/s/ta3s2j/what_s_go_nosplit_for) - [What&apos;s //go:nosplit for?](https://mcyoung.xyz/2025/07/07/nosplit/)
* [2025-07-10, 14:32:23](https://lobste.rs/s/uohkhq/multi_player_durable_stream_playground) - [Multi-player Durable Stream Playground](https://s2.dev/playground)
* [2025-07-10, 14:02:04](https://news.ycombinator.com/item?id=44521224) - [Flix – A powerful effect-oriented programming language](https://flix.dev/)
* [2025-07-10, 14:02:00](https://science.slashdot.org/story/25/07/10/142250/millions-of-tonnes-of-nanoplastics-are-polluting-the-ocean?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions of Tonnes of Nanoplastics Are Polluting the Ocean](https://science.slashdot.org/story/25/07/10/142250/millions-of-tonnes-of-nanoplastics-are-polluting-the-ocean?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 13:51:21](https://lobste.rs/s/ixn7eb/haskell_lenses_from_scratch_2021) - [Haskell Lenses From Scratch (2021)](https://www.youtube.com/watch?v=3kduOmZ2Wxw)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 13:00:00](https://it.slashdot.org/story/25/07/10/0117206/jack-dorsey-says-his-secure-new-bitchat-app-has-not-been-tested-for-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Says His &apos;Secure&apos; New Bitchat App Has Not Been Tested For Security](https://it.slashdot.org/story/25/07/10/0117206/jack-dorsey-says-his-secure-new-bitchat-app-has-not-been-tested-for-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 12:57:49](https://lobste.rs/s/ofymzw/computer_scientists_figure_out_how_prove) - [Computer Scientists Figure Out How To Prove Lies](https://www.quantamagazine.org/computer-scientists-figure-out-how-to-prove-lies-20250709/)
* [2025-07-10, 12:51:19](https://news.ycombinator.com/item?id=44520438) - [Diffsitter – A Tree-sitter based AST difftool to get meaningful semantic diffs](https://github.com/afnanenayet/diffsitter)
* [2025-07-10, 12:49:21](https://news.ycombinator.com/item?id=44520419) - [FOKS: Federated Open Key Service](https://foks.pub/)
* [2025-07-10, 12:35:21](https://news.ycombinator.com/item?id=44520292) - [Is Gemini 2.5 good at bounding boxes?](https://simedw.com/2025/07/10/gemini-bounding-boxes/)
* [2025-07-10, 11:26:12](https://lobste.rs/s/hngren/monitoring_my_homelab_simply) - [Monitoring my Homelab, Simply](https://b.tuxes.uk/simple-homelab-monitoring.html)
* [2025-07-10, 10:39:45](https://lobste.rs/s/bvsulo/about_clew) - [About Clew](https://clew.se/about/)
* [2025-07-10, 10:00:00](https://linux.slashdot.org/story/25/07/10/0112201/red-hat-gives-developers-free-access-to-enterprise-linux-for-business-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Gives Developers Free Access To Enterprise Linux For Business Use](https://linux.slashdot.org/story/25/07/10/0112201/red-hat-gives-developers-free-access-to-enterprise-linux-for-business-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-10, 09:48:09](https://news.ycombinator.com/item?id=44519175) - [How to prove false statements: Practical attacks on Fiat-Shamir](https://www.quantamagazine.org/computer-scientists-figure-out-how-to-prove-lies-20250709/)
* [2025-07-10, 09:27:02](https://news.ycombinator.com/item?id=44519034) - [Optimizing a Math Expression Parser in Rust](https://rpallas.xyz/math-parser/)
* [2025-07-10, 09:02:51](https://news.ycombinator.com/item?id=44518898) - [Show HN: Typeform was too expensive so I built my own forms](https://www.ikiform.com/)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 07:24:30](https://news.ycombinator.com/item?id=44518269) - [Matt Trout has died](https://www.shadowcat.co.uk/2025/07/09/ripples-they-cause-in-the-world/)
* [2025-07-10, 06:26:27](https://lobste.rs/s/migsbj/unveiling_open_source_heroes_power_our) - [Unveiling the Open Source heroes that power our digital infrastructure](https://maintaine.rs/)
* [2025-07-10, 05:43:43](https://lobste.rs/s/nxb8ar/kubernetes_is_not_just_for_black_friday) - [Kubernetes is not just for Black Friday](https://ergaster.org/posts/2025/07/09-kubernetes-black-friday/)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
* [2025-07-10, 02:09:46](https://lobste.rs/s/bhnto9/closures_for_hare) - [Closures for Hare](https://lists.sr.ht/~sircmpwn/hare-rfc/%3CDB54BK1QFAMO.VURD1415NHT3@ddevault.org%3E)
* [2025-07-10, 01:49:33](https://lobste.rs/s/idkqmw/writing_very_simple_jit_compiler_about) - [Writing a very simple JIT Compiler in about 1000 lines of C](https://kuterdinel.com/writing-a-very-simple-jit-compiler-in-about-1000-lines-of-c.html)
* [2025-07-10, 00:31:42](https://lobste.rs/s/jb8xjy/using_fs_usage_see_what_files_process_is) - [Using fs_usage to see what files a process is using](https://til.simonwillison.net/macos/fs-usage)
* [2025-07-09, 23:08:00](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss) - [How to Stop Your LG or Samsung Smart TV From Tracking You](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss)
* [2025-07-09, 22:55:52](https://lobste.rs/s/ak9mmk/microhs_tiny_haskell_compiler) - [MicroHs, a tiny Haskell Compiler](https://www.youtube.com/watch?v=SJwvPEq4Mok)
* [2025-07-09, 19:40:06](https://lobste.rs/s/n8wej0/hare_by_example) - [Hare by Example](https://harebyexample.org)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 17:54:25](https://lobste.rs/s/2tx1mx/get_location_iss_using_dns) - [Get the location of the ISS using DNS](https://shkspr.mobi/blog/2025/07/get-the-location-of-the-iss-using-dns/)
* [2025-07-09, 17:30:54](https://lobste.rs/s/plwg9q/variadic_generics_ideas_won_t_work_for) - [Variadic Generics ideas that won’t work for Rust](https://poignardazur.github.io//2025/07/09/variadic-generics-dead-ends/)
* [2025-07-09, 16:53:10](https://lobste.rs/s/fvorwd/quite_few_words_about_async) - [(Quite) A Few Words About Async](https://yoric.github.io/post/quite-a-few-words-about-async/)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
* [2025-07-08, 23:02:00](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss) - [A New Diabetes Treatment Could Free People From Insulin Injections](https://soylentnews.org/article.pl?sid=25/07/07/0143225&amp;from=rss)
* [2025-07-08, 21:14:37](https://lobste.rs/s/os54bi/systemd_has_been_complete_utter) - [systemd has been a complete, utter, unmitigated success](https://blog.tjll.net/the-systemd-revolution-has-been-a-success/)
* [2025-07-08, 18:11:00](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss) - [Why Don’t Bats Get Cancer? Researchers Discover Protection From Genes and Strong Immune Systems](https://soylentnews.org/article.pl?sid=25/07/07/0139229&amp;from=rss)
* [2025-07-08, 13:30:00](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss) - [The European Commission&apos;s Call for Technical Advisors: Save Privacy](https://soylentnews.org/article.pl?sid=25/07/06/2318236&amp;from=rss)
* [2025-07-08, 08:45:00](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss) - [First Leisure Swim for Parisians Into the Seine in More Than a Century](https://soylentnews.org/article.pl?sid=25/07/06/2238227&amp;from=rss)
* [2025-07-08, 04:31:00](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss) - [UK Eyes New Laws Over Cable Sabotage](https://soylentnews.org/article.pl?sid=25/07/06/1323229&amp;from=rss)
* [2025-07-08, 02:55:04](https://news.ycombinator.com/item?id=44496537) - [Analyzing database trends through 1.8M Hacker News headlines](https://camelai.com/blog/hn-database-hype/)
* [2025-07-08, 00:14:24](https://news.ycombinator.com/item?id=44495807) - [Bear-Sized Giant Beavers Once Roamed North America](https://www.smithsonianmag.com/smart-news/bear-sized-giant-beaver-once-roamed-north-america-and-theyre-now-the-official-state-fossil-of-minnesota-180986937/)
* [2025-07-07, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss) - [Sniffnet - Comfortably Monitor Your Internet Traffic](https://soylentnews.org/article.pl?sid=25/07/06/1317252&amp;from=rss)
* [2025-07-07, 21:24:53](https://news.ycombinator.com/item?id=44494813) - [Regarding Prollyferation: Followup to \&quot;People Keep Inventing Prolly Trees\&quot;](https://www.dolthub.com/blog/2025-07-03-regarding-prollyferation/)
* [2025-07-07, 18:58:00](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss) - [See How the Herpes Virus Reshapes Our Cells’ DNA in Just Eight Hours](https://soylentnews.org/article.pl?sid=25/07/06/1311241&amp;from=rss)
* [2025-07-07, 14:14:00](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss) - [The Terrifying Truth About Why Tesla&apos;s Cars Keep Crashing](https://soylentnews.org/article.pl?sid=25/07/06/136235&amp;from=rss)
* [2025-07-07, 14:05:06](https://news.ycombinator.com/item?id=44490510) - [Postgres LISTEN/NOTIFY does not scale](https://www.recall.ai/blog/postgres-listen-notify-does-not-scale)
* [2025-07-07, 13:43:22](https://news.ycombinator.com/item?id=44490308) - [The ChompSaw: A Benchtop Power Tool That&apos;s Safe for Kids to Use](https://www.core77.com/posts/137602/The-ChompSaw-A-Benchtop-Power-Tool-Thats-Safe-for-Kids-to-Use)
* [2025-07-07, 10:29:56](https://news.ycombinator.com/item?id=44488731) - [Radiocarbon dating reveals Rapa Nui not as isolated as previously thought](https://phys.org/news/2025-06-radiocarbon-dating-reveals-rapa-nui.html)
* [2025-07-07, 09:31:00](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss) - [How to Fully Incapacitate Google Tag Manager and Why You Should (2022)](https://soylentnews.org/article.pl?sid=25/07/06/131253&amp;from=rss)
* [2025-07-07, 06:06:46](https://news.ycombinator.com/item?id=44487221) - [Show HN: CXXStateTree – A modern C++ library for hierarchical state machines](https://github.com/ZigRazor/CXXStateTree)
* [2025-07-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss) - [CISPE Warns EU Against Over-Regulation of Water](https://soylentnews.org/article.pl?sid=25/07/06/1250244&amp;from=rss)
* [2025-07-07, 00:00:00](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss) - [Verizon Denies Legitimacy of 61 Million Records for Sale](https://soylentnews.org/article.pl?sid=25/07/06/1241242&amp;from=rss)
* [2025-07-06, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss) - [Inside Elon Musk&apos;s Stellar Year at the Texas Capitol](https://soylentnews.org/article.pl?sid=25/07/05/1910216&amp;from=rss)
* [2025-07-06, 14:30:00](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss) - [Bezos-Funded Satellite Tracking Methane Emissions Loses Power in Space](https://soylentnews.org/article.pl?sid=25/07/05/1341208&amp;from=rss)
* [2025-07-06, 09:48:00](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss) - [Ancient DNA Reveals Make-Up of Roman Empire&apos;s Favourite Sauce](https://soylentnews.org/article.pl?sid=25/07/05/1339218&amp;from=rss)
* [2025-07-06, 05:45:00](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss) - [Where Does Time Actually Come From?](https://soylentnews.org/article.pl?sid=25/07/04/2251218&amp;from=rss)
* [2025-07-06, 01:30:00](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss) - [On July 7 Google Gemini Will Have Access to Your Android Apps, Even If You Turned It Off](https://soylentnews.org/article.pl?sid=25/07/04/2154255&amp;from=rss)
