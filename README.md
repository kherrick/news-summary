# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Astronomy

* [Saturn Gains 128 New Moons, Bringing Its Total to 274](https://www.nytimes.com/2025/03/11/science/saturn-new-moons.html) ([comments](https://news.ycombinator.com/item?id=43337151))

* [NASA to launch space observatory that will map 450M galaxies](https://www.nbcnews.com/science/space/nasa-spherex-space-observatory-launch-map-galaxies-universe-rcna190877) ([comments](https://news.ycombinator.com/item?id=43296184))

* [Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)

## Technology and Cybersecurity

* [Thousands of TP-Link Routers Have Been Infected By a Botnet To Spread Malware](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)

* [NIST selects HQC as fifth algorithm for post-quantum encryption](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption) ([comments](https://news.ycombinator.com/item?id=43332944))

## Artificial Intelligence

* [Spain To Impose Massive Fines For Not Labeling AI-Generated Content](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI-Generated Voice Evidence Poses Dangers in Court](https://www.lawfaremedia.org/article/ai-generated-voice-evidence-poses-dangers-in-court) ([comments](https://news.ycombinator.com/item?id=43333484))

* [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)

## Programming and Software

* [UNIX Needs A True Integrated Environment: CASE Closed (1989)](http://www.bitsavers.org/pdf/xerox/parc/techReports/CSL-89-4_UNIX_Needs_A_True_Integrated_Environment.pdf) ([comments](https://lobste.rs/s/pbqsop/unix_needs_true_integrated_environment))

* [owi: Cross-language Bugfinder](https://github.com/OCamlPro/owi) ([comments](https://lobste.rs/s/qsmfvf/owi_cross_language_bugfinder))

* [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) ([comments](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code))

## Science and Environment

* [Microplastics Hinder Plant Photosynthesis, Study Finds](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Southwest Airlines To End Free Checked Bags Policy For First Time in Its 54-Year History](https://news.slashdot.org/story/25/03/11/1859238/southwest-airlines-to-end-free-checked-bags-policy-for-first-time-in-its-54-year-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)

## Miscellaneous Developments

* [The US island that speaks Elizabethan English](https://www.bbc.com/travel/article/20190623-the-us-island-that-speaks-elizabethan-english) ([comments](https://news.ycombinator.com/item?id=43332752))

* [Happy 20th Birthday, Y Combinator](https://twitter.com/garrytan/status/1899092996702048709) ([comments](https://news.ycombinator.com/item?id=43332658))

* [Short Conversations with Poets: Dong Li](https://www.mcsweeneys.net/articles/dong-li) ([comments](https://news.ycombinator.com/item?id=43333091))

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

* [2025-03-11, 21:23:54](https://news.ycombinator.com/item?id=43337151) - [Saturn Gains 128 New Moons, Bringing Its Total to 274](https://www.nytimes.com/2025/03/11/science/saturn-new-moons.html)
* [2025-03-11, 21:22:01](https://lobste.rs/s/pbqsop/unix_needs_true_integrated_environment) - [UNIX Needs A True Integrated Environment: CASE Closed (1989)](http://www.bitsavers.org/pdf/xerox/parc/techReports/CSL-89-4_UNIX_Needs_A_True_Integrated_Environment.pdf)
* [2025-03-11, 21:20:00](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of TP-Link Routers Have Been Infected By a Botnet To Spread Malware](https://it.slashdot.org/story/25/03/11/207242/thousands-of-tp-link-routers-have-been-infected-by-a-botnet-to-spread-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 21:09:56](https://news.ycombinator.com/item?id=43337028) - [Ask HN: How do you have effective 1:1s with your manager?](https://news.ycombinator.com/item?id=43337028)
* [2025-03-11, 21:01:39](https://news.ycombinator.com/item?id=43336957) - [Continue (YC S23) Is Hiring a Software Engineer in San Francisco](https://www.ycombinator.com/companies/continue/jobs/smcxRnM-software-engineer)
* [2025-03-11, 20:59:46](https://lobste.rs/s/qsmfvf/owi_cross_language_bugfinder) - [owi: Cross-language Bugfinder](https://github.com/OCamlPro/owi)
* [2025-03-11, 20:57:41](https://lobste.rs/s/kgdcna/r7rs_large_stygian_blue_reddish_green) - [R7RS Large Stygian Blue/Reddish Green ballot](https://surveys.nonceword.org/?r=survey/index&sid=242775&lang=en)
* [2025-03-11, 20:40:00](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Spain To Impose Massive Fines For Not Labeling AI-Generated Content](https://news.slashdot.org/story/25/03/11/200242/spain-to-impose-massive-fines-for-not-labeling-ai-generated-content?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 20:37:56](https://lobste.rs/s/rf4qpg/goatdb_lightweight_nodb_for_deno_react) - [goatdb: Lightweight NoDB for Deno & React](https://github.com/goatplatform/goatdb)
* [2025-03-11, 20:08:58](https://lobste.rs/s/oi1vqm/rust_trait_object_layout) - [Rust trait object layout](https://neugierig.org/software/blog/2025/03/trait-object-layout.html)
* [2025-03-11, 20:00:00](https://slashdot.org/story/25/03/11/1953254/vodafone-tells-employees-to-follow-rto-policy-or-lose-bonuses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Vodafone Tells Employees To Follow RTO Policy Or Lose Bonuses](https://slashdot.org/story/25/03/11/1953254/vodafone-tells-employees-to-follow-rto-policy-or-lose-bonuses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 19:57:53](https://lobste.rs/s/jgpcfa/rsync_over_grpc_demo_program_rsync_file) - [rsync-over-grpc: demo program: rsync file transfer (with the gokrazy/rsync module) over gRPC transport](https://github.com/stapelberg/rsync-over-grpc)
* [2025-03-11, 19:53:24](https://news.ycombinator.com/item?id=43336381) - [\"It has been determined\" that infected dairy herd serology can be disclosed](https://hogvet51.substack.com/p/one-year-later-it-has-been-determined)
* [2025-03-11, 19:25:09](https://lobste.rs/s/mwoxoe/every_line_code_is_always_documented_2014) - [Every line of code is always documented (2014)](https://mislav.net/2014/02/hidden-documentation/)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 18:59:00](https://news.slashdot.org/story/25/03/11/1859238/southwest-airlines-to-end-free-checked-bags-policy-for-first-time-in-its-54-year-history?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Southwest Airlines To End Free Checked Bags Policy For First Time in Its 54-Year History](https://news.slashdot.org/story/25/03/11/1859238/southwest-airlines-to-end-free-checked-bags-policy-for-first-time-in-its-54-year-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 18:43:01](https://news.ycombinator.com/item?id=43335695) - [Percolation Theory [pdf]](https://web.mit.edu/ceder/publications/Percolation.pdf)
* [2025-03-11, 18:40:54](https://news.ycombinator.com/item?id=43335679) - [How do we tell truths that might hurt?](https://www.cs.virginia.edu/~evans/cs655/readings/ewd498.html)
* [2025-03-11, 18:30:47](https://news.ycombinator.com/item?id=43335586) - [Truth Functional Logic for Hackers](https://lagomor.ph/2025/02/truth-functional-logic-for-hackers-part-one/)
* [2025-03-11, 18:05:00](https://science.slashdot.org/story/25/03/11/1755217/the-surprising-impact-of-qr-code-menus-on-diminishing-customer-loyalty?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Surprising Impact of QR Code Menus on Diminishing Customer Loyalty](https://science.slashdot.org/story/25/03/11/1755217/the-surprising-impact-of-qr-code-menus-on-diminishing-customer-loyalty?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 17:49:11](https://lobste.rs/s/mewqa9/thoughts_about_naming_things) - [Thoughts About Naming Things](http://11spades.net/posts/on-naming-things/)
* [2025-03-11, 17:46:01](https://news.ycombinator.com/item?id=43335110) - [Backyard Cyanide](https://suziepetryk.com/blog/cyanide.html)
* [2025-03-11, 17:26:00](https://it.slashdot.org/story/25/03/11/1726218/why-extracting-data-from-pdfs-remains-a-nightmare-for-data-experts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Extracting Data from PDFs Remains a Nightmare for Data Experts](https://it.slashdot.org/story/25/03/11/1726218/why-extracting-data-from-pdfs-remains-a-nightmare-for-data-experts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 17:04:57](https://news.ycombinator.com/item?id=43334644) - [New tools for building agents](https://openai.com/index/new-tools-for-building-agents/)
* [2025-03-11, 17:00:46](https://news.ycombinator.com/item?id=43334589) - [Launch HN: Sift Dev (YC W25) – AI-Powered Datadog Alternative](https://news.ycombinator.com/item?id=43334589)
* [2025-03-11, 16:47:00](https://news.slashdot.org/story/25/03/11/1648211/only-seven-countries-worldwide-meet-who-dirty-air-guidelines-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Only Seven Countries Worldwide Meet WHO Dirty Air Guidelines, Study Shows](https://news.slashdot.org/story/25/03/11/1648211/only-seven-countries-worldwide-meet-who-dirty-air-guidelines-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 16:44:39](https://lobste.rs/s/y1dvmd/representing_type_lattices_compactly) - [Representing type lattices compactly](https://bernsteinbear.com/blog/lattice-bitset/)
* [2025-03-11, 16:33:28](https://news.ycombinator.com/item?id=43334192) - [Show HN: Program Explorer, a container playground](https://programexplorer.org/)
* [2025-03-11, 16:33:24](https://news.ycombinator.com/item?id=43334190) - [Fastplotlib: GPU-accelerated, fast, and interactive plotting library](https://medium.com/@caitlin9165/fastplotlib-driving-scientific-discovery-through-data-visualization-418f8bff094c)
* [2025-03-11, 16:12:43](https://news.ycombinator.com/item?id=43333946) - [Show HN: Krep a High-Performance String Search Utility Written in C](https://davidesantangelo.github.io/krep/)
* [2025-03-11, 16:05:00](https://slashdot.org/story/25/03/11/166203/half-past-four-is-the-new-five-oclock-in-more-efficient-workday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Half-Past Four Is the New Five O'Clock in More Efficient Workday](https://slashdot.org/story/25/03/11/166203/half-past-four-is-the-new-five-oclock-in-more-efficient-workday?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 15:48:33](https://news.ycombinator.com/item?id=43333661) - [Show HN: We built a Plug-in Home Battery for the 99.7% of us without Powerwalls](https://pilaenergy.com)
* [2025-03-11, 15:32:46](https://news.ycombinator.com/item?id=43333484) - [AI-Generated Voice Evidence Poses Dangers in Court](https://www.lawfaremedia.org/article/ai-generated-voice-evidence-poses-dangers-in-court)
* [2025-03-11, 15:20:00](https://news.slashdot.org/story/25/03/11/1446251/firefox-certificate-expiration-threatens-add-ons-streaming-on-march-14?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefox Certificate Expiration Threatens Add-ons, Streaming on March 14](https://news.slashdot.org/story/25/03/11/1446251/firefox-certificate-expiration-threatens-add-ons-streaming-on-march-14?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 14:56:37](https://news.ycombinator.com/item?id=43333091) - [Short Conversations with Poets: Dong Li](https://www.mcsweeneys.net/articles/dong-li)
* [2025-03-11, 14:54:33](https://lobste.rs/s/gdmnho/javascript_fatigue_strikes_back) - [JavaScript Fatigue Strikes Back](https://allenpike.com/2025/javascript-fatigue-ssr)
* [2025-03-11, 14:49:30](https://lobste.rs/s/ee6kb4/can_i_use_secure_curves_web_platform) - [Can I use Secure Curves in the Web Platform?](https://blogs.igalia.com/jfernandez/2025/02/28/can-i-use-secure-curves-in-the-web-platform/)
* [2025-03-11, 14:44:44](https://news.ycombinator.com/item?id=43332944) - [NIST selects HQC as fifth algorithm for post-quantum encryption](https://www.nist.gov/news-events/news/2025/03/nist-selects-hqc-fifth-algorithm-post-quantum-encryption)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:40:00](https://news.slashdot.org/story/25/03/11/1436211/california-pension-fund-labels-chevron-and-saudi-aramco-as-climate-investments?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Pension Fund Labels Chevron and Saudi Aramco as Climate Investments](https://news.slashdot.org/story/25/03/11/1436211/california-pension-fund-labels-chevron-and-saudi-aramco-as-climate-investments?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 14:32:23](https://news.ycombinator.com/item?id=43332830) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:24:48](https://news.ycombinator.com/item?id=43332752) - [The US island that speaks Elizabethan English](https://www.bbc.com/travel/article/20190623-the-us-island-that-speaks-elizabethan-english)
* [2025-03-11, 14:16:54](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code) - [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
* [2025-03-11, 14:15:21](https://lobste.rs/s/nmoyud/pytest_netbox_docker_pytest_plugin) - [pytest-netbox-docker: Pytest plugin that provides fixtures to start a complete Netbox infrastructure using Docker](https://github.com/link-society/pytest-netbox-docker)
* [2025-03-11, 14:14:35](https://news.ycombinator.com/item?id=43332658) - [Happy 20th Birthday, Y Combinator](https://twitter.com/garrytan/status/1899092996702048709)
* [2025-03-11, 14:00:00](https://tech.slashdot.org/story/25/03/11/1125227/spacex-readies-starlink-india-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SpaceX Readies Starlink India Launch](https://tech.slashdot.org/story/25/03/11/1125227/spacex-readies-starlink-india-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 13:50:22](https://news.ycombinator.com/item?id=43332424) - [Mapping the University of Chicago's 135-year expansion into Hyde Park and beyond](https://chicagomaroon.github.io/data-visualizations/2025/uchicago-property/)
* [2025-03-11, 13:15:40](https://lobste.rs/s/paim15/beyond_bad_output) - [Beyond Bad Output](https://hey.paris/posts/beyond-bad-output/)
* [2025-03-11, 13:00:00](https://tech.slashdot.org/story/25/03/11/0018244/facebook-was-hand-in-glove-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Facebook Was 'Hand In Glove' With China](https://tech.slashdot.org/story/25/03/11/0018244/facebook-was-hand-in-glove-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 12:50:02](https://news.ycombinator.com/item?id=43331914) - [Representing Type Lattices Compactly](https://bernsteinbear.com/blog/lattice-bitset/)
* [2025-03-11, 12:02:02](https://news.ycombinator.com/item?id=43331582) - [Show HN: Factorio Learning Environment – Agents Build Factories](https://jackhopkins.github.io/factorio-learning-environment/)
* [2025-03-11, 11:49:22](https://lobste.rs/s/clt1it/small_template_engine_for_c) - [A small template engine for C](https://www.omarpolo.com/post/template.html)
* [2025-03-11, 11:44:27](https://lobste.rs/s/j6bb5k/implementation_j_roger_hui) - [An Implementation of J - Roger Hui](https://www.jsoftware.com/books/pdf/aioj.pdf)
* [2025-03-11, 11:25:13](https://news.ycombinator.com/item?id=43331358) - [America Is Missing The New Labor Economy – Robotics Part 1](https://semianalysis.com/2025/03/11/america-is-missing-the-new-labor-economy-robotics-part-1/)
* [2025-03-11, 10:07:17](https://news.ycombinator.com/item?id=43330900) - [What makes code hard to read: Visual patterns of complexity (2023)](https://seeinglogic.com/posts/visual-readability-patterns/)
* [2025-03-11, 10:00:00](https://science.slashdot.org/story/25/03/11/0032245/former-google-ceo-eric-schmidt-is-the-new-leader-of-relativity-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Former Google CEO Eric Schmidt Is the New Leader of Relativity Space](https://science.slashdot.org/story/25/03/11/0032245/former-google-ceo-eric-schmidt-is-the-new-leader-of-relativity-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 07:51:34](https://lobste.rs/s/fwcnkf/early_look_at_nix_dynamic_derivations) - [An early look at Nix Dynamic Derivations](https://fzakaria.com/2025/03/10/an-early-look-at-nix-dynamic-derivations)
* [2025-03-11, 07:00:00](https://science.slashdot.org/story/25/03/11/004258/nasa-eliminates-chief-scientist-and-other-jobs-at-its-headquarters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA Eliminates Chief Scientist and Other Jobs At Its Headquarters](https://science.slashdot.org/story/25/03/11/004258/nasa-eliminates-chief-scientist-and-other-jobs-at-its-headquarters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 04:09:03](https://lobste.rs/s/qnmkqa/ocaml_game_engine_ecs) - [OCaml Game Engine: ECS](https://edwardwibowo.com/blog/ocaml-game-engine-ecs/)
* [2025-03-11, 04:03:51](https://lobste.rs/s/jalbsf/how_i_built_this_website_on_raspberry_pi) - [How I built this website on a Raspberry Pi](https://mirawelner.com/posts/website_howto.html)
* [2025-03-11, 03:30:00](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Hinder Plant Photosynthesis, Study Finds](https://news.slashdot.org/story/25/03/10/2349232/microplastics-hinder-plant-photosynthesis-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 01:05:10](https://news.ycombinator.com/item?id=43328095) - [Show HN: Seven39, a social media app that is only open for 3 hours every evening](https://www.seven39.com)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-11, 00:09:56](https://lobste.rs/s/0t5vg7/common_lisp_error_exception_handling) - [Common Lisp Error and Exception Handling](https://lispcookbook.github.io/cl-cookbook/error_handling.html)
* [2025-03-10, 20:01:55](https://lobste.rs/s/ekuzbe/introducing_sidekiq_8_0) - [Introducing Sidekiq 8.0](https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 17:24:24](https://lobste.rs/s/rftm88/scroll_buddy) - [Scroll buddy](https://scrollbuddy.com/)
* [2025-03-10, 14:53:28](https://lobste.rs/s/a46njy/rust_2025_targeting_foundational) - [Rust in 2025: Targeting foundational software](https://smallcultfollowing.com/babysteps/blog/2025/03/10/rust-2025-intro/)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 10:07:33](https://lobste.rs/s/okqjn5/20_years_linux_on_desktop_part_3) - [20 years of Linux on the Desktop (part 3)](https://ploum.net/2025-03-08-linux_desktop3.html)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 07:42:24](https://news.ycombinator.com/item?id=43317889) - [Snapshots of Modern Mathematics from Oberwolfach](https://www.imaginary.org/snapshots)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 03:15:51](https://news.ycombinator.com/item?id=43305842) - [In contrast to Earth, Mars's middle atmosphere appears driven by gravity waves](https://phys.org/news/2025-03-contrast-earth-mars-middle-atmosphere.html)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 18:48:23](https://news.ycombinator.com/item?id=43302436) - [Smart researchers pioneer nanosensor for real-time iron detection in plants](https://news.mit.edu/2025/smart-researchers-pioneer-nanosensor-real-time-iron-detection-plants-0306)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:07:15](https://news.ycombinator.com/item?id=43296184) - [NASA to launch space observatory that will map 450M galaxies](https://www.nbcnews.com/science/space/nasa-spherex-space-observatory-launch-map-galaxies-universe-rcna190877)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
