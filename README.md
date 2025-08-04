# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Tech Innovation

* [Google Tells iPhone Buyers To 'Just Change Your Phone' After Apple's AI Delays](https://tech.slashdot.org/story/25/08/04/184253/google-tells-iphone-buyers-to-just-change-your-phone-after-apples-ai-delays?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's bold stance on Apple's delayed AI advancements sparks debates about platform loyalty and phone choices.

* [Disney Struggles With How to Use AI - While Retaining Copyrights and Avoiding Legal Issues](https://games.slashdot.org/story/25/08/04/0432213/disney-struggles-with-how-to-use-ai---while-retaining-copyrights-and-avoiding-legal-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This insightful article delves into Disney's legal and ethical challenges with AI in preserving copyrights.

* [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&from=rss) - A thought-provoking exploration into how AI models inadvertently encode behavioral traits.

* [Scientists shine a laser through a human head](https://spectrum.ieee.org/optical-brain-imaging) - Breakthrough research in optical brain imaging using laser technology.

* [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&from=rss) - A significant development for macOS users running advanced Linux systems in isolated containers.

## Programming, Development, and Tools

* [A Few Things About the Anchor Element’s href You Might Not Have Known](https://blog.jim-nielsen.com/2025/href-value-possibilities/) - Unique tricks and insights into the capabilities of the humble anchor tag in web development.

* [The Generativity Pattern in Rust](https://arhan.sh/blog/the-generativity-pattern-in-rust/) - A comprehensive dive into an advanced Rust development concept.

* [A Gentle Introduction To Fortran](https://hackaday.com/2025/08/04/a-gentle-introduction-to-fortran/) - A beginner-friendly reintroduction to Fortran, a language still relevant in specific domains.

* [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify) - Google's V8 team breaks new performance grounds.

* [HTMX is hard so let's get it right](https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md) - Addressing challenges in HTMX for better web user experience.

## Social and Cultural Trends

* [Offline.kids – screen-free activities for kids](https://offline.kids/) - A curated collection of engaging offline activities for children in a digital age.

* [I Asked Four Former Friends Why We Stopped Speaking-Here's What I Learned (2023)](https://www.vogue.com/article/reconnecting-with-ex-friends) - A heartfelt exploration of friendships and reconciliation.

* [Century-Old Stone “Tsunami Stones” Dot Japan's Coastline (2015)](https://www.smithsonianmag.com/smart-news/century-old-warnings-against-tsunamis-dot-japans-coastline-180956448/) - Historical markers provide enduring lessons for disaster preparedness.

* [In the Future All Food Will Be Cooked in a Microwave, and if You Can’t Deal With That Then You Need to Get Out of the Kitchen](https://www.colincornaby.me/2025/08/in-the-future-all-food-will-be-cooked-in-a-microwave-and-if-you-cant-deal-with-that-then-you-need-to-get-out-of-the-kitchen/) - A provocative perspective on the future of culinary habits.

## Security and Ethical Issues

* [What Happens To Your Data If You Stop Paying for Cloud Storage?](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A cautionary tale about users' digital assets on subscription-based platforms.

* [Polish Train Maker Is Suing the Hackers Who Exposed Its Anti-Repair Tricks](https://www.ifixit.com/News/112008/polish-train-maker-is-suing-the-hackers-who-exposed-its-anti-repair-tricks) - A look into legal battles stemming from right-to-repair investigations.

* [How Perplexity is Evading Anti-crawling Measures](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/) - Cloudflare exposes stealth crawling techniques against no-crawl directives.

* [Century-old warnings against tsunamis dot Japan's coastline](https://www.smithsonianmag.com/smart-news/century-old-warnings-against-tsunamis-dot-japans-coastline-180956448/) - Lessons from historical preservation as tools to save lives.

## Business and Market Developments

* [Fujifilm Is Raising Camera Prices By Up To $800](https://it.slashdot.org/story/25/08/04/1245240/fujifilm-is-raising-camera-prices-by-up-to-800?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major price increase reflects the industry's challenges and market pressures.

* [Delta's Dynamic AI Pricing Plan Sounds Different Now](https://slashdot.org/story/25/08/04/1253234/deltas-dynamic-ai-pricing-plan-sounds-different-now?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis of changing dynamics in AI-driven airline fare models.

* [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&from=rss) - Geopolitical policies spike coffee market instability.

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

* [2025-08-04, 18:45:00](https://it.slashdot.org/story/25/08/04/1845243/the-great-indian-it-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Great Indian IT Squeeze](https://it.slashdot.org/story/25/08/04/1845243/the-great-indian-it-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 18:27:26](https://news.ycombinator.com/item?id=44789668) - [Circadian Justice](https://eprints.lse.ac.uk/112431/)
* [2025-08-04, 18:07:28](https://lobste.rs/s/q1vfez/generativity_pattern_rust) - [The Generativity Pattern in Rust](https://arhan.sh/blog/the-generativity-pattern-in-rust/)
* [2025-08-04, 18:04:00](https://tech.slashdot.org/story/25/08/04/184253/google-tells-iphone-buyers-to-just-change-your-phone-after-apples-ai-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tells iPhone Buyers To &apos;Just Change Your Phone&apos; After Apple&apos;s AI Delays](https://tech.slashdot.org/story/25/08/04/184253/google-tells-iphone-buyers-to-just-change-your-phone-after-apples-ai-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 17:50:05](https://news.ycombinator.com/item?id=44789192) - [Offline.kids – screen-free activities for kids](https://offline.kids/)
* [2025-08-04, 17:35:25](https://lobste.rs/s/ty7aep/few_things_about_anchor_element_s_href_you) - [A Few Things About the Anchor Element’s href You Might Not Have Known](https://blog.jim-nielsen.com/2025/href-value-possibilities/)
* [2025-08-04, 17:21:00](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens To Your Data If You Stop Paying for Cloud Storage?](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 17:18:41](https://news.ycombinator.com/item?id=44788783) - [I Asked Four Former Friends Why We Stopped Speaking-Here&apos;s What I Learned (2023)](https://www.vogue.com/article/reconnecting-with-ex-friends)
* [2025-08-04, 17:08:05](https://lobste.rs/s/0l8415/gentle_introduction_fortran) - [A Gentle Introduction To Fortran](https://hackaday.com/2025/08/04/a-gentle-introduction-to-fortran/)
* [2025-08-04, 16:40:00](https://slashdot.org/story/25/08/04/1253234/deltas-dynamic-ai-pricing-plan-sounds-different-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Dynamic AI Pricing Plan Sounds Different Now](https://slashdot.org/story/25/08/04/1253234/deltas-dynamic-ai-pricing-plan-sounds-different-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 16:27:40](https://news.ycombinator.com/item?id=44788065) - [Show HN: Kimu – Open-Source Video Editor](https://www.trykimu.com/)
* [2025-08-04, 16:16:21](https://news.ycombinator.com/item?id=44787902) - [Show HN: I spent 6 years building a ridiculous wooden pixel display](https://benholmen.com/blog/kilopixel/)
* [2025-08-04, 16:01:00](https://it.slashdot.org/story/25/08/04/1429251/microsoft-used-china-based-engineers-to-support-product-recently-hacked-by-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Used China-Based Engineers to Support Product Recently Hacked by China](https://it.slashdot.org/story/25/08/04/1429251/microsoft-used-china-based-engineers-to-support-product-recently-hacked-by-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 15:46:47](https://lobste.rs/s/fn4ozc/introducing_luzer_coverage_guided_lua) - [Introducing luzer, a coverage-guided Lua fuzzing engine](https://bronevichok.ru/posts/introducing-luzer.html)
* [2025-08-04, 15:41:30](https://news.ycombinator.com/item?id=44787374) - [Customizing tmux and making it less dreadful](https://evgeniipendragon.com/posts/customizing-tmux-and-making-it-less-dreadful/)
* [2025-08-04, 15:30:01](https://news.ycombinator.com/item?id=44787209) - [Every Visual Workflow Tool Is Just Excel for Developers Who Gave Up](https://medium.com/@mohamedalibenothmen1/every-visual-workflow-tool-is-just-excel-for-developers-who-gave-up-f7261090fbc8)
* [2025-08-04, 15:25:32](https://news.ycombinator.com/item?id=44787143) - [Show HN: Tiny logic and number games I built for my kids](https://quizmathgenius.com/)
* [2025-08-04, 15:20:00](https://tech.slashdot.org/story/25/08/04/1459240/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives-cloudflare-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity is Using Stealth, Undeclared Crawlers To Evade Website No-Crawl Directives, Cloudflare Says](https://tech.slashdot.org/story/25/08/04/1459240/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives-cloudflare-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 15:12:20](https://news.ycombinator.com/item?id=44786962) - [Part 1: A Deep Dive into Rust and C Memory Interoperability](https://notashes.me/blog/part-1-memory-management/)
* [2025-08-04, 15:11:33](https://lobste.rs/s/wk4xyi/let_s_hax0r_gc_eventually) - [Let&apos;s hax0r a GC… (eventually)](https://h4x0r.org/lets-hax0r-a-garbage-collector-eventually/)
* [2025-08-04, 14:45:16](https://lobste.rs/s/qhui4n/complex_iterators_are_slow) - [Complex Iterators are Slow](https://caolan.uk/notes/2025-07-31_complex_iterators_are_slow.cm)
* [2025-08-04, 14:40:07](https://news.ycombinator.com/item?id=44786462) - [Lidar-based GIS map of New Hampshire stone walls](https://nhgranit.maps.arcgis.com/apps/webappviewer/index.html?id=25930044fe2b4d8fb5cab3ec07565e83)
* [2025-08-04, 14:40:00](https://it.slashdot.org/story/25/08/04/1245240/fujifilm-is-raising-camera-prices-by-up-to-800?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fujifilm Is Raising Camera Prices By Up To $800](https://it.slashdot.org/story/25/08/04/1245240/fujifilm-is-raising-camera-prices-by-up-to-800?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 14:38:43](https://lobste.rs/s/fshwoc/netbsd_new_build_cluster_speeds_up_daily) - [NetBSD New build cluster speeds up daily autobuilds](https://blog.netbsd.org/tnf/entry/new_build_cluster_speeds_up)
* [2025-08-04, 14:35:53](https://lobste.rs/s/ome2lo/friendly_introduction_svg) - [A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)
* [2025-08-04, 14:18:39](https://lobste.rs/s/cihzjk/netbsd_11_0_release_process_underway) - [NetBSD 11.0 release process underway](https://blog.netbsd.org/tnf/entry/netbsd_11_0_release_process)
* [2025-08-04, 14:09:58](https://lobste.rs/s/ueocpa/how_we_made_json_stringify_more_than_twice) - [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)
* [2025-08-04, 14:00:00](https://slashdot.org/story/25/08/04/1240209/how-mckinsey-lost-its-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How McKinsey Lost Its Edge](https://slashdot.org/story/25/08/04/1240209/how-mckinsey-lost-its-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 13:59:08](https://lobste.rs/s/i81fly/how_perplexity_is_evading_anti_crawling) - [How Perplexity is Evading Anti-crawling Measures](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 13:49:00](https://news.ycombinator.com/item?id=44785759) - [The Toyota Corolla of programming](https://deprogrammaticaipsum.com/the-toyota-corolla-of-programming/)
* [2025-08-04, 13:39:30](https://news.ycombinator.com/item?id=44785636) - [Perplexity is using stealth, undeclared crawlers to evade no-crawl directives](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 13:21:02](https://lobste.rs/s/7raysa/future_all_food_will_be_cooked_microwave) - [In the Future All Food Will Be Cooked in a Microwave, and if You Can’t Deal With That Then You Need to Get Out of the Kitchen](https://www.colincornaby.me/2025/08/in-the-future-all-food-will-be-cooked-in-a-microwave-and-if-you-cant-deal-with-that-then-you-need-to-get-out-of-the-kitchen/)
* [2025-08-04, 13:12:27](https://news.ycombinator.com/item?id=44785292) - [ScreenCoder: An intelligent UI-to-code generation system](https://github.com/leigest519/ScreenCoder)
* [2025-08-04, 13:07:18](https://news.ycombinator.com/item?id=44785238) - [Scientists shine a laser through a human head](https://spectrum.ieee.org/optical-brain-imaging)
* [2025-08-04, 13:05:08](https://news.ycombinator.com/item?id=44785224) - [My Ideal Array Language](https://www.ashermancinelli.com/csblog/2025-7-20-Ideal-Array-Language.html)
* [2025-08-04, 12:59:49](https://lobste.rs/s/ge9tvj/systematic_evaluation_openbsd_s) - [A systematic evaluation of OpenBSD’s mitigations (2019)](https://isopenbsdsecu.re/)
* [2025-08-04, 12:55:03](https://lobste.rs/s/w2f51x/polish_train_maker_is_suing_hackers_who) - [Polish Train Maker Is Suing the Hackers Who Exposed Its Anti-Repair Tricks](https://www.ifixit.com/News/112008/polish-train-maker-is-suing-the-hackers-who-exposed-its-anti-repair-tricks)
* [2025-08-04, 12:51:20](https://news.ycombinator.com/item?id=44785107) - [Century-Old Stone “Tsunami Stones” Dot Japan&apos;s Coastline (2015)](https://www.smithsonianmag.com/smart-news/century-old-warnings-against-tsunamis-dot-japans-coastline-180956448/)
* [2025-08-04, 12:41:13](https://news.ycombinator.com/item?id=44785016) - [Genetic correlates of social stratification in Great Britain (2019) [pdf]](https://research.vu.nl/ws/portalfiles/portal/127420931/Genetic_correlates_of_social_stratification_in_Great_Britain.pdf)
* [2025-08-04, 12:37:54](https://lobste.rs/s/ockeh1/htmx_is_hard_so_let_s_get_it_right) - [HTMX is hard so let&apos;s get it right](https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md)
* [2025-08-04, 12:10:22](https://news.ycombinator.com/item?id=44784743) - [Drawafish.com Postmortem: Whoops](https://aldenhallak.com/blog/posts/draw-a-fish-postmortem.html)
* [2025-08-04, 11:34:00](https://it.slashdot.org/story/25/08/04/0543231/is-ai-causing-tech-worker-layoffs-its-complicated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Causing Tech Worker Layoffs? It&apos;s Complicated](https://it.slashdot.org/story/25/08/04/0543231/is-ai-causing-tech-worker-layoffs-its-complicated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 11:21:05](https://news.ycombinator.com/item?id=44784297) - [GHz spiking neuromorphic photonic chip with in-situ training](https://arxiv.org/abs/2506.14272)
* [2025-08-04, 10:55:47](https://news.ycombinator.com/item?id=44784141) - [Perfecting anti-aliasing on signed distance functions](https://blog.pkh.me/p/44-perfecting-anti-aliasing-on-signed-distance-functions.html)
* [2025-08-04, 10:33:21](https://lobste.rs/s/ye0emy/rust_python_typescript_new_trifecta) - [Rust, Python, and TypeScript: the new trifecta](https://smallcultfollowing.com/babysteps/blog/2025/07/31/rs-py-ts-trifecta/)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 10:13:41](https://lobste.rs/s/ocqd8m/minimal_scala_container_images_using_nix) - [Minimal Scala Container Images using Nix](https://blog.aiono.dev/posts/minimal-scala-container-images-using-nix.html)
* [2025-08-04, 09:27:49](https://news.ycombinator.com/item?id=44783566) - [Mastercard deflects blame for NSFW games being taken down](https://www.pcgamer.com/games/mastercard-deflects-blame-for-nsfw-games-being-taken-down-but-valve-says-payment-processors-specifically-cited-a-mastercard-rule-about-damaging-the-brand/)
* [2025-08-04, 09:13:55](https://lobste.rs/s/qqziki/more_retrocomputing_less_nostalgia) - [More retrocomputing, less nostalgia](https://datagubbe.se/retnost/)
* [2025-08-04, 08:04:20](https://news.ycombinator.com/item?id=44783155) - [Job-seekers are dodging AI interviewers](https://fortune.com/2025/08/03/ai-interviewers-job-seekers-unemployment-hiring-hr-teams/)
* [2025-08-04, 07:54:00](https://science.slashdot.org/story/25/08/04/0513249/with-flight-of-six-more-tourists-to-space-blue-origin-carries-75th-passenger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [With Flight of Six More Tourists to Space, Blue Origin Carries 75th Passenger](https://science.slashdot.org/story/25/08/04/0513249/with-flight-of-six-more-tourists-to-space-blue-origin-carries-75th-passenger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 04:34:00](https://games.slashdot.org/story/25/08/04/0432213/disney-struggles-with-how-to-use-ai---while-retaining-copyrights-and-avoiding-legal-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Struggles With How to Use AI - While Retaining Copyrights and Avoiding Legal Issues](https://games.slashdot.org/story/25/08/04/0432213/disney-struggles-with-how-to-use-ai---while-retaining-copyrights-and-avoiding-legal-issues?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 03:08:12](https://lobste.rs/s/tflj1y/so_you_want_parse_pdf) - [So you want to parse a PDF?](https://eliot-jones.com/2025/8/pdf-parsing-xref)
* [2025-08-04, 02:53:51](https://lobste.rs/s/t7osqo/q_programming_language) - [The Q Programming Language](https://git.urbach.dev/cli/q)
* [2025-08-04, 02:21:00](https://yro.slashdot.org/story/25/08/04/0146202/how-napster-inspired-a-generation-of-rule-breaking-entrepreneurs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Napster Inspired a Generation of Rule-Breaking Entrepreneurs](https://yro.slashdot.org/story/25/08/04/0146202/how-napster-inspired-a-generation-of-rule-breaking-entrepreneurs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 02:10:45](https://lobste.rs/s/gcrajk/parser_for_typescript_types_written) - [a parser for typescript types, written in typescript types](https://github.com/easrng/tsints)
* [2025-08-04, 02:08:41](https://lobste.rs/s/ddphh5/maybe_fastest_disk_usage_program_on_macos) - [Maybe the Fastest Disk Usage Program on macOS](https://healeycodes.com/maybe-the-fastest-disk-usage-program-on-macos)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
* [2025-08-04, 00:51:00](https://it.slashdot.org/story/25/08/04/0048214/a-black-hole-americas-new-graduates-discover-a-dismal-job-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;A Black Hole&apos;: America&apos;s New Graduates Discover a Dismal Job Market](https://it.slashdot.org/story/25/08/04/0048214/a-black-hole-americas-new-graduates-discover-a-dismal-job-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 00:50:49](https://lobste.rs/s/cgauwh/future_is_not_self_hosted) - [The Future is NOT Self-Hosted](https://www.drewlyton.com/story/the-future-is-not-self-hosted/)
* [2025-08-03, 23:42:00](https://tech.slashdot.org/story/25/08/03/2339217/hyundais-electric-car-sales-surged-50-over-july-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai&apos;s Electric Car Sales Surged 50% Over July 2024](https://tech.slashdot.org/story/25/08/03/2339217/hyundais-electric-car-sales-surged-50-over-july-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 22:24:29](https://news.ycombinator.com/item?id=44780353) - [So you want to parse a PDF?](https://eliot-jones.com/2025/8/pdf-parsing-xref)
* [2025-08-03, 22:19:00](https://developers.slashdot.org/story/25/08/03/2216259/winners-announced-in-2025s-international-obfuscated-c-code-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Winners Announced in 2025&apos;s &apos;International Obfuscated C Code Competition&apos;](https://developers.slashdot.org/story/25/08/03/2216259/winners-announced-in-2025s-international-obfuscated-c-code-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 20:21:54](https://news.ycombinator.com/item?id=44779428) - [Writing a good design document](https://grantslatton.com/how-to-design-document)
* [2025-08-03, 20:21:00](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss) - [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss)
* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 11:57:34](https://lobste.rs/s/ktd0ss/people_still_use_our_old_fashioned_unix) - [People still use our old-fashioned Unix login servers](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/LoginServersStillUsed)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 07:21:20](https://lobste.rs/s/uon7sc/parse_don_t_validate_2019) - [Parse, don’t validate (2019)](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-02, 20:43:07](https://news.ycombinator.com/item?id=44771268) - [Show HN: Mathpad – Physical keypad for typing 100+ math symbols anywhere](https://www.crowdsupply.com/summa-cogni/mathpad)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 19:01:58](https://news.ycombinator.com/item?id=44770372) - [Gigabyte removes PCIe 5.0 support from B650 motherboards in latest BIOS update](https://videocardz.com/newz/gigabyte-removes-unofficial-pcie-5-0-support-from-b650-motherboards-in-latest-bios-update)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 18:16:18](https://news.ycombinator.com/item?id=44760411) - [Facts will not Save You - AI, History and Soviet Sci-Fi](https://hegemon.substack.com/p/facts-will-not-save-you)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 15:41:50](https://news.ycombinator.com/item?id=44758463) - [Open IP Camera Firmware](https://openipc.org/à)
* [2025-08-01, 12:33:20](https://news.ycombinator.com/item?id=44755827) - [How we built Bluey’s world](https://www.itsnicethat.com/features/how-we-built-bluey-s-world-cartoon-background-scenery-art-director-catriona-drummond-animation-090725)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 14:56:24](https://news.ycombinator.com/item?id=44746347) - [Do LLMs identify fonts?](https://maxhalford.github.io/blog/llm-font-identification/)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
