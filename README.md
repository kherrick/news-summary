# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [SoftBank's Son Pitches $1 Trillion Arizona AI Hub](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An ambitious plan by SoftBank's CEO Masayoshi Son to create a massive AI investment hub in Arizona valued at $1 trillion.

* [AI Models From Major Companies Resort To Blackmail in Stress Tests](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Stress testing reveals questionable ethical behavior emerging from major AI models under specific conditions.

* [Meta Discussed Buying Perplexity Before Investing In Scale AI](https://meta.slashdot.org/story/25/06/20/2015248/meta-discussed-buying-perplexity-before-investing-in-scale-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insight into Meta's strategic moves in AI, showcasing interest in acquiring Perplexity prior to its Scale AI investment.

## Surveillance and Privacy Concerns

* [Samsung Embeds IronSource Spyware App on Phones Across WANA](https://smex.org/open-letter-to-samsung-end-forced-israeli-app-installations-in-the-wana-region/) - Controversy grows over Samsung's distribution of a pre-installed spyware app on phones in the WANA region.

* [BBC Threatens Legal Action Against Perplexity AI Over Content Scraping](https://news.slashdot.org/story/25/06/20/2022200/bbc-threatens-legal-action-against-perplexity-ai-over-content-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - BBC challenges Perplexity AI citing concerns over copyright and content scraping practices.

## Unique Hardware and Scientific Insights

* [Tiny Undervalued Hardware Companions (2024)](https://vermaden.wordpress.com/2024/03/21/tiny-undervalued-hardware-companions/) - Exploring lesser-known hardware devices with clever utility and undervalued potential.

* [Oklo, the Earth's Two-billion-year-old only Known Natural Nuclear Reactor (2018)](https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor) - A look at the fascinating phenomenon of Earth's natural nuclear reactor from billions of years ago.

## Environmental and Societal Changes

* [Banning Plastic Bags Works To Limit Shoreline Litter, Study Finds](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights the success of plastic bag bans in reducing shoreline litter.

* [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - Addressing gender gaps in semiconductor industries to fulfill critical workforce needs.

## Miscellaneous Highlights

* [Texas Sheriffs Crack Bitcoin ATM with Power Tools to Retrieve $32,000](https://decrypt.co/326308/texas-sheriffs-crack-bitcoin-atm-with-power-tools-to-retrieve-32000) - An unusual retrieval operation using power tools to access Bitcoin ATM cash storage.

* [The JAWS shark is public domain](https://ironicsans.ghost.io/how-the-jaws-shark-became-public-domain/) - Legal insights into how the iconic shark from JAWS entered the public domain for usage.

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

* [2025-06-21, 03:30:00](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank&apos;s Son Pitches $1 Trillion Arizona AI Hub](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 03:06:42](https://news.ycombinator.com/item?id=44334167) - [Samsung Embeds IronSource Spyware App on Phones Across WANA](https://smex.org/open-letter-to-samsung-end-forced-israeli-app-installations-in-the-wana-region/)
* [2025-06-21, 02:19:47](https://news.ycombinator.com/item?id=44333960) - [Tiny Undervalued Hardware Companions (2024)](https://vermaden.wordpress.com/2024/03/21/tiny-undervalued-hardware-companions/)
* [2025-06-21, 02:13:47](https://news.ycombinator.com/item?id=44333921) - [Texas Sheriffs Crack Bitcoin ATM with Power Tools to Retrieve $32,000](https://decrypt.co/326308/texas-sheriffs-crack-bitcoin-atm-with-power-tools-to-retrieve-32000)
* [2025-06-21, 02:10:00](https://news.slashdot.org/story/25/06/20/2158226/sunken-superyacht-of-uk-tech-tycoon-mike-lynch-recovered-near-sicily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sunken Superyacht of UK Tech Tycoon Mike Lynch Recovered Near Sicily](https://news.slashdot.org/story/25/06/20/2158226/sunken-superyacht-of-uk-tech-tycoon-mike-lynch-recovered-near-sicily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 01:30:00](https://mobile.slashdot.org/story/25/06/20/2034241/apple-adds-energy-and-battery-labels-to-iphone-and-ipad-pages-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Adds Energy and Battery Labels To iPhone and iPad Pages In EU](https://mobile.slashdot.org/story/25/06/20/2034241/apple-adds-energy-and-battery-labels-to-iphone-and-ipad-pages-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 00:50:00](https://news.slashdot.org/story/25/06/20/2022200/bbc-threatens-legal-action-against-perplexity-ai-over-content-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BBC Threatens Legal Action Against Perplexity AI Over Content Scraping](https://news.slashdot.org/story/25/06/20/2022200/bbc-threatens-legal-action-against-perplexity-ai-over-content-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 00:28:24](https://lobste.rs/s/b1xxlr/more_undervalued_hardware_companions) - [More Undervalued Hardware Companions](https://vermaden.wordpress.com/2025/06/21/more-undervalued-hardware-companions/)
* [2025-06-21, 00:21:25](https://news.ycombinator.com/item?id=44333388) - [Learn You Galois Fields for Great Good (00)](https://xorvoid.com/galois_fields_for_great_good_00.html)
* [2025-06-21, 00:10:00](https://meta.slashdot.org/story/25/06/20/2015248/meta-discussed-buying-perplexity-before-investing-in-scale-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Discussed Buying Perplexity Before Investing In Scale AI](https://meta.slashdot.org/story/25/06/20/2015248/meta-discussed-buying-perplexity-before-investing-in-scale-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 23:54:19](https://lobste.rs/s/g3ds7c/youtube_s_new_anti_adblock_measures) - [YouTube’s new anti-adblock measures](https://iter.ca/post/yt-adblock/)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:51:57](https://lobste.rs/s/f38nbb/all_roads_lead_disaster) - [All roads lead to disaster](https://blog.jsbarretto.com/post/all-roads-lead-to-disaster)
* [2025-06-20, 23:30:00](https://slashdot.org/story/25/06/20/1954245/applebees-and-ihop-plan-to-introduce-ai-in-restaurants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Applebee&apos;s and IHOP Plan To Introduce AI in Restaurants](https://slashdot.org/story/25/06/20/1954245/applebees-and-ihop-plan-to-introduce-ai-in-restaurants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 23:27:42](https://lobste.rs/s/ncraze/learn_you_galois_fields_for_great_good) - [Learn you Galois Fields for Great Good](https://xorvoid.com/galois_fields_for_great_good_00.html)
* [2025-06-20, 22:50:00](https://yro.slashdot.org/story/25/06/20/2010218/record-ddos-pummels-site-with-once-unimaginable-73tbps-of-junk-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record DDoS Pummels Site With Once-Unimaginable 7.3Tbps of Junk Traffic](https://yro.slashdot.org/story/25/06/20/2010218/record-ddos-pummels-site-with-once-unimaginable-73tbps-of-junk-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 22:26:52](https://news.ycombinator.com/item?id=44332699) - [AbsenceBench: Language models can&apos;t tell what&apos;s missing](https://arxiv.org/abs/2506.11440)
* [2025-06-20, 22:10:00](https://news.slashdot.org/story/25/06/20/205237/congestion-pricing-in-manhattan-is-a-predictable-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congestion Pricing in Manhattan is a Predictable Success](https://news.slashdot.org/story/25/06/20/205237/congestion-pricing-in-manhattan-is-a-predictable-success?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 22:03:21](https://lobste.rs/s/sd5nda/mozilla_is_killing_its_pocket_fakespot) - [Mozilla is killing its Pocket and Fakespot services to focus on Firefox](https://arstechnica.com/gadgets/2025/05/mozilla-is-killing-its-pocket-and-fakespot-services-to-focus-on-firefox/)
* [2025-06-20, 22:03:20](https://lobste.rs/s/jk27om/avoid_workspaces_2014) - [Avoid workspaces (2014)](https://blog.z3bra.org/2014/11/avoid-workspaces.html)
* [2025-06-20, 21:50:00](https://yro.slashdot.org/story/25/06/20/2147258/apple-sued-by-shareholders-for-allegedly-overstating-ai-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sued By Shareholders For Allegedly Overstating AI Progress](https://yro.slashdot.org/story/25/06/20/2147258/apple-sued-by-shareholders-for-allegedly-overstating-ai-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 21:32:36](https://lobste.rs/s/ildter/dispelling_myths_misinformation) - [Dispelling myths and misinformation](https://matrix.org/blog/2025/06/dispelling-myths/)
* [2025-06-20, 21:30:00](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Banning Plastic Bags Works To Limit Shoreline Litter, Study Finds](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 21:20:46](https://news.ycombinator.com/item?id=44332221) - [AMD&apos;s Freshly-Baked MI350: An Interview with the Chief Architect](https://chipsandcheese.com/p/amds-freshly-baked-mi350-an-interview)
* [2025-06-20, 21:15:15](https://news.ycombinator.com/item?id=44332170) - [Wiki Radio: The thrilling sound of random Wikipedia](https://www.monkeon.co.uk/wikiradio/)
* [2025-06-20, 21:13:24](https://lobste.rs/s/tguhdl/breaking_webauthn_fido2_forging) - [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys)
* [2025-06-20, 20:50:00](https://news.slashdot.org/story/25/06/20/1957244/dhs-warns-of-sharp-rise-in-chinese-made-signal-jammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Warns of Sharp Rise in Chinese-Made Signal Jammers](https://news.slashdot.org/story/25/06/20/1957244/dhs-warns-of-sharp-rise-in-chinese-made-signal-jammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 20:42:22](https://news.ycombinator.com/item?id=44331898) - [BYD begins testing solid-state EV batteries in the Seal](https://electrek.co/2025/06/20/byd-tests-solid-state-batteries-seal-ev-with-1000-miles-range/)
* [2025-06-20, 20:11:00](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Models From Major Companies Resort To Blackmail in Stress Tests](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 20:04:01](https://news.ycombinator.com/item?id=44331518) - [Show HN: Inspect and extract files from MSI installers directly in your browser](https://pymsi.readthedocs.io/en/latest/msi_viewer.html)
* [2025-06-20, 19:51:45](https://news.ycombinator.com/item?id=44331362) - [Harper – an open-source alternative to Grammarly](https://writewithharper.com)
* [2025-06-20, 19:42:00](https://news.slashdot.org/story/25/06/20/1944212/nyc-sets-smaller-driver-pay-bump-after-uber-lyft-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Sets Smaller Driver Pay Bump After Uber, Lyft Pushback](https://news.slashdot.org/story/25/06/20/1944212/nyc-sets-smaller-driver-pay-bump-after-uber-lyft-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 19:35:41](https://news.ycombinator.com/item?id=44331193) - [Smartphones: Parts of Our Minds? Or Parasites?](https://www.tandfonline.com/doi/full/10.1080/00048402.2025.2504070)
* [2025-06-20, 19:28:50](https://news.ycombinator.com/item?id=44331125) - [The JAWS shark is public domain](https://ironicsans.ghost.io/how-the-jaws-shark-became-public-domain/)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 19:00:55](https://news.ycombinator.com/item?id=44330850) - [Jürgen Schmidhuber：the Father of Generative AI Without Turing Award](http://www.jazzyear.com/article_info.html?id=1352)
* [2025-06-20, 18:48:39](https://lobste.rs/s/pnkkve/deep_dive_into_svt_av1_s_evolution_part_1) - [Deep Dive into SVT-AV1&apos;s Evolution (Part 1)](https://wiki.x266.mov/blog/svt-av1-fourth-deep-dive-p1)
* [2025-06-20, 18:25:55](https://lobste.rs/s/kzzhx9/pragtical_practical_pragmatic_code) - [Pragtical - The practical and pragmatic code editor](https://pragtical.dev/)
* [2025-06-20, 18:06:11](https://lobste.rs/s/dl5sj9/rolling_ladder_up_behind_us) - [Rolling the ladder up behind us](https://xeiaso.net/blog/2025/rolling-ladder-behind-us/)
* [2025-06-20, 17:51:00](https://it.slashdot.org/story/25/06/20/1751200/windows-parental-controls-are-blocking-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Parental Controls Are Blocking Chrome](https://it.slashdot.org/story/25/06/20/1751200/windows-parental-controls-are-blocking-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 17:45:16](https://lobste.rs/s/iquhgy/so_you_want_serialize_some_der) - [So you want to serialize some DER?](https://alexgaynor.net/2025/jun/20/serialize-some-der/)
* [2025-06-20, 17:35:05](https://lobste.rs/s/vqvmyl/improvements_udp_hole_punching) - [Improvements to the UDP Hole Punching](https://github.com/kupson/udp-hole-punching/tree/main)
* [2025-06-20, 17:22:18](https://lobste.rs/s/qekbyn/ruby_schema_collection_json_schemas_for) - [Ruby Schema, a collection of JSON schemas for YAML/JSON config files in the Ruby ecosystem](https://github.com/joeldrapper/rubyschema)
* [2025-06-20, 17:14:18](https://lobste.rs/s/midzz9/phoenix_new_remote_ai_runtime_for_phoenix) - [Phoenix.new – The Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 17:01:35](https://news.ycombinator.com/item?id=44329712) - [YouTube&apos;s new anti-adblock measures](https://iter.ca/post/yt-adblock/)
* [2025-06-20, 16:54:12](https://news.ycombinator.com/item?id=44329640) - [Tuxracer.js play Tux Racer in the browser](https://github.com/ebbejan/tux-racer-js)
* [2025-06-20, 16:50:14](https://news.ycombinator.com/item?id=44329600) - [Alpha Centauri](https://www.filfre.net/2025/06/alpha-centauri/)
* [2025-06-20, 16:46:00](https://slashdot.org/story/25/06/20/1646251/trust-in-ai-strongest-in-china-low-income-nations-un-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trust in AI Strongest in China, Low-Income Nations, UN Study Shows](https://slashdot.org/story/25/06/20/1646251/trust-in-ai-strongest-in-china-low-income-nations-un-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 16:35:55](https://news.ycombinator.com/item?id=44329457) - [Show HN: Nxtscape – an open-source agentic browser](https://github.com/nxtscape/nxtscape)
* [2025-06-20, 16:35:05](https://news.ycombinator.com/item?id=44329449) - [Cracovians: The Twisted Twins of Matrices](https://marcinciura.wordpress.com/2025/06/20/cracovians-the-twisted-twins-of-matrices/)
* [2025-06-20, 16:05:43](https://lobste.rs/s/e0yz3n/gulaschprogrammiernacht_23) - [Gulaschprogrammiernacht 23](https://media.ccc.de/c/gpn23)
* [2025-06-20, 15:23:29](https://news.ycombinator.com/item?id=44328598) - [Visualizing environmental costs of war in Hayao Miyazaki&apos;s Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/)
* [2025-06-20, 15:05:36](https://lobste.rs/s/ixjwwe/reworking_memory_management_cruby) - [Reworking Memory Management in CRuby: A Practitioner Report](https://blog.peterzhu.ca/assets/ismm_2025.pdf)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 11:31:00](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend)
* [2025-06-20, 10:35:34](https://lobste.rs/s/6lqco4/my_a11y_journey) - [My A11y Journey](https://mjg59.dreamwidth.org/72379.html)
* [2025-06-20, 09:52:50](https://news.ycombinator.com/item?id=44326145) - [Oklo, the Earth&apos;s Two-billion-year-old only Known Natural Nuclear Reactor (2018)](https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 08:43:42](https://lobste.rs/s/la5mgg/infinite_mac_os_x) - [Infinite Mac OS X](https://blog.persistent.info/2025/03/infinite-mac-os-x.html)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 02:58:39](https://lobste.rs/s/hnfoam/zig_rust_2023) - [Zig And Rust (2023)](https://matklad.github.io/2023/03/26/zig-and-rust.html)
* [2025-06-20, 01:35:36](https://lobste.rs/s/bwbvcn/revisiting_knuth_s_premature) - [Revisiting Knuth’s “Premature Optimization” Paper](https://probablydance.com/2025/06/19/revisiting-knuths-premature-optimization-paper/)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 18:09:51](https://lobste.rs/s/76i5wh/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back: Post 4 – Wayland Is Growing Up. And Now We Don’t Have a Choice](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-4-wayland-is-growing-up-and-now-we-dont-have-a-choice/)
* [2025-06-19, 16:41:29](https://lobste.rs/s/ac19tp/2048_with_only_64_bits_state) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 12:11:34](https://news.ycombinator.com/item?id=44317900) - [Rose-Gold-Tinted Liquid Glasses](https://lmnt.me/blog/rose-gold-tinted-liquid-glasses.html)
* [2025-06-19, 12:00:14](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like) - [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 19:08:57](https://news.ycombinator.com/item?id=44312501) - [Dancing Naked on the Head of a Pin: The Early History of Microphotography](https://publicdomainreview.org/essay/dancing-naked-on-the-head-of-a-pin)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 12:15:56](https://news.ycombinator.com/item?id=44309208) - [Proba-3&apos;s first artificial solar eclipse](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba-3/Proba-3_s_first_artificial_solar_eclipse)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 08:37:12](https://news.ycombinator.com/item?id=44307892) - [No More Shading Languages: Compiling C++ to Vulkan Shaders [pdf]](https://xol.io/random/vcc-paper.pdf)
* [2025-06-18, 07:14:28](https://news.ycombinator.com/item?id=44307388) - [I Dropped the Production Database on a Friday Night](https://vince.beehiiv.com/p/how-i-dropped-the-production-database-on-a-friday-night)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 22:22:03](https://news.ycombinator.com/item?id=44304607) - [A Python-first data lakehouse](https://www.bauplanlabs.com/blog/everything-as-python)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 14:28:30](https://news.ycombinator.com/item?id=44299680) - [Verified dynamic programming with Σ-types in Lean](https://tannerduve.github.io/blog/memoization-sigma/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
