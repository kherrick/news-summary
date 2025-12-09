# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries and Innovations

* [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)

* [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)

* [Cold Case Inquiries Stall After Ancestry.com Revisits Policy For Users](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Science Journal Retracts Study On Safety of Monsanto&apos;s Roundup](https://science.slashdot.org/story/25/12/09/053254/science-journal-retracts-study-on-safety-of-monsantos-roundup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The universal weight subspace hypothesis](https://arxiv.org/abs/2512.05117)

## AI and Technology Developments

* [IBM To Buy Confluent For $11 Billion To Expand AI Services](https://tech.slashdot.org/story/25/12/08/2141229/ibm-to-buy-confluent-for-11-billion-to-expand-ai-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Prediction: AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)

* [EU investigates Google over AI-generated summaries in search results](https://www.bbc.com/news/articles/crl95eg33k1o)

* [Evidence That Humans Now Speak In a Chatbot-Influenced Dialect Is Getting Stronger](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Programming and Software

* [Fighting the Client Spaghetti Monster with Rust Traits](http://www.gnunicorn.org/writings/spaghetti-monster-clients-rust-traits-final-boss/)

* [Kaiju – General purpose 3D/2D game engine in Go and Vulkan with built in editor](https://github.com/KaijuEngine/kaiju)

* [Compiler Engineering in Practice - Part 1: What is a Compiler?](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html)

* [Zig asserts are not C asserts](https://cryptocode.github.io/blog/docs/assert/)

* [Nova Programming Language](https://nova-lang.net/)

* [TextKit 2 - the promised land](https://blog.krzyzanowskim.com/2025/08/14/textkit-2-the-promised-land/)

## Hardware and Devices

* [New Pebble Device](https://repebble.com/blog/meet-pebble-index-01-external-memory-for-your-brain)

* [Lenovo&apos;s Next Gaming Laptop May Have a Rollable OLED Screen That Stretches Ultrawide](https://tech.slashdot.org/story/25/12/08/2028217/lenovos-next-gaming-laptop-may-have-a-rollable-oled-screen-that-stretches-ultrawide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)

* [Mazda suitcase car, a portable three-wheeled vehicle that fits in the luggage](https://www.designboom.com/technology/rediscover-mazda-suitcase-car-portable-three-wheeled-vehicle-fits-luggage-12-06-2025/)

## Society and Policy

* [Colleges Oversold Education. Now They Must Sell Connection](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)

* [More Than 200 Environmental Groups Demand Halt To New US Datacenters](https://news.slashdot.org/story/25/12/08/2158223/more-than-200-environmental-groups-demand-halt-to-new-us-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Taiwan Cries Censorship As Government Bans Rednote](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Historical Reflections

* [30 Year Anniversary of WarCraft II: Tides of Darkness](https://www.jorsys.org/archive/december_2025.html#newsitem_2025-12-09T07:42:19Z)

* [One too many words on AT&amp;T&apos;s $2,000 Korn shell and other Usenet topics](https://blog.gabornyeki.com/2025-12-usenet/)

* [Oliver Sacks Put Himself into His Case Studies. What Was the Cost?](https://www.newyorker.com/magazine/2025/12/15/oliver-sacks-put-himself-into-his-case-studies-what-was-the-cost)

* [Microsoft Excel Turns 40, Remains Stubbornly Unkillable](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 15:21:00](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Colleges Oversold Education. Now They Must Sell Connection&apos;](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 15:10:27](https://news.ycombinator.com/item?id=46205743) - [EU investigates Google over AI-generated summaries in search results](https://www.bbc.com/news/articles/crl95eg33k1o)
* [2025-12-09, 15:03:09](https://news.ycombinator.com/item?id=46205661) - [New Pebble Device](https://repebble.com/blog/meet-pebble-index-01-external-memory-for-your-brain)
* [2025-12-09, 14:59:01](https://lobste.rs/s/iyycuu/fighting_client_spaghetti_monster_with) - [Fighting the Client Spaghetti Monster with Rust Traits](http://www.gnunicorn.org/writings/spaghetti-monster-clients-rust-traits-final-boss/)
* [2025-12-09, 14:52:54](https://lobste.rs/s/gzom84/zig_asserts_are_not_c_asserts) - [Zig asserts are not C asserts](https://cryptocode.github.io/blog/docs/assert/)
* [2025-12-09, 14:51:46](https://news.ycombinator.com/item?id=46205519) - [Kaiju – General purpose 3D/2D game engine in Go and Vulkan with built in editor](https://github.com/KaijuEngine/kaiju)
* [2025-12-09, 14:47:20](https://news.ycombinator.com/item?id=46205461) - [My favourite small hash table](https://www.corsix.org/content/my-favourite-small-hash-table)
* [2025-12-09, 14:41:00](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Excel Turns 40, Remains Stubbornly Unkillable](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 14:01:00](https://tech.slashdot.org/story/25/12/09/141227/indias-aviation-crisis-is-all-about-too-big-to-tame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Aviation Crisis Is All About Too Big to Tame](https://tech.slashdot.org/story/25/12/09/141227/indias-aviation-crisis-is-all-about-too-big-to-tame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 14:00:00](https://lobste.rs/s/04j2mc/uringmachine_benchmarks) - [UringMachine Benchmarks](https://github.com/digital-fabric/uringmachine/blob/main/benchmark/README.md)
* [2025-12-09, 13:59:41](https://lobste.rs/s/zcve9a/textkit_2_promised_land) - [TextKit 2 - the promised land](https://blog.krzyzanowskim.com/2025/08/14/textkit-2-the-promised-land/)
* [2025-12-09, 13:45:01](https://news.ycombinator.com/item?id=46204853) - [Oliver Sacks Put Himself into His Case Studies. What Was the Cost?](https://www.newyorker.com/magazine/2025/12/15/oliver-sacks-put-himself-into-his-case-studies-what-was-the-cost)
* [2025-12-09, 13:14:50](https://lobste.rs/s/ekj7q2/world_needs_social_sovereignty) - [The world needs social sovereignty](https://blog.joinmastodon.org/2025/12/the-world-needs-social-sovereignty/)
* [2025-12-09, 13:13:29](https://lobste.rs/s/hs8wwz/semi_interactive_assembly_verification) - [Semi-Interactive Assembly Verification in Knuckledragger](https://www.philipzucker.com/asm_verify4/)
* [2025-12-09, 13:00:00](https://science.slashdot.org/story/25/12/09/053254/science-journal-retracts-study-on-safety-of-monsantos-roundup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science Journal Retracts Study On Safety of Monsanto&apos;s Roundup](https://science.slashdot.org/story/25/12/09/053254/science-journal-retracts-study-on-safety-of-monsantos-roundup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 12:37:15](https://lobste.rs/s/j92yom/go_proposal_secret_mode) - [Go proposal: Secret mode](https://antonz.org/accepted/runtime-secret/)
* [2025-12-09, 12:29:20](https://lobste.rs/s/qr32px/no_aria_is_better_than_bad_aria) - [No ARIA is better than Bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
* [2025-12-09, 12:20:24](https://news.ycombinator.com/item?id=46204139) - [Mazda suitcase car, a portable three-wheeled vehicle that fits in the luggage](https://www.designboom.com/technology/rediscover-mazda-suitcase-car-portable-three-wheeled-vehicle-fits-luggage-12-06-2025/)
* [2025-12-09, 11:54:52](https://lobste.rs/s/rvtdbd/apologia_for_lazy_evaluation) - [An apologia for lazy evaluation](https://epicandmonicisnotiso.blogspot.com/2023/03/an-apologia-of-lazy-evaluation.html)
* [2025-12-09, 11:16:10](https://news.ycombinator.com/item?id=46203611) - [Brent&apos;s Encapsulated C Programming Rules (2020)](https://retroscience.net/brents-c-programming-rules.html)
* [2025-12-09, 11:15:34](https://lobste.rs/s/j1epfi/join_on_call_roster_it_ll_change_your_life) - [Join the on-call roster, it’ll change your life](https://serce.me/posts/2025-12-09-join-oncall-it-will-change-your-life)
* [2025-12-09, 11:09:06](https://news.ycombinator.com/item?id=46203581) - [Show HN: AlgoDrill – Interactive drills to stop forgetting LeetCode patterns](https://algodrill.io)
* [2025-12-09, 10:52:58](https://news.ycombinator.com/item?id=46203499) - [ZX Spectrum Next on the Internet: Xberry Pi ESP01 and Pi Zero Upgrades](https://retrogamecoders.com/zx-spectrum-next-on-the-internet-xberry-pi-esp01-and-pi-zero-upgrades/)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 10:00:00](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Evidence That Humans Now Speak In a Chatbot-Influenced Dialect Is Getting Stronger](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 09:55:11](https://lobste.rs/s/gcjtqe/compiler_engineering_practice_part_1) - [Compiler Engineering in Practice - Part 1: What is a Compiler?](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html)
* [2025-12-09, 09:48:55](https://news.ycombinator.com/item?id=46203138) - [The Joy of Playing Grandia, on Sega Saturn](https://www.segasaturnshiro.com/2025/11/27/the-joy-of-playing-grandia-on-sega-saturn/)
* [2025-12-09, 09:26:20](https://lobste.rs/s/wft20h/factor_0_101_now_available) - [Factor 0.101 now available](https://re.factorcode.org/2025/12/factor-0-101-now-available.html)
* [2025-12-09, 09:13:56](https://news.ycombinator.com/item?id=46202921) - [30 Year Anniversary of WarCraft II: Tides of Darkness](https://www.jorsys.org/archive/december_2025.html#newsitem_2025-12-09T07:42:19Z)
* [2025-12-09, 09:01:28](https://lobste.rs/s/ztpekx/39c3_fahrplan_2025) - [39C3 Fahrplan 2025](https://fahrplan.events.ccc.de/congress/2025/fahrplan/)
* [2025-12-09, 08:41:52](https://lobste.rs/s/a79acd/xkcd_1313_regex_golf_2014) - [xkcd 1313: Regex Golf (2014)](https://nbviewer.org/url/norvig.com/ipython/xkcd1313.ipynb)
* [2025-12-09, 07:00:00](https://developers.slashdot.org/story/25/12/09/0417242/claude-code-is-coming-to-slack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code Is Coming To Slack](https://developers.slashdot.org/story/25/12/09/0417242/claude-code-is-coming-to-slack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 03:30:00](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cold Case Inquiries Stall After Ancestry.com Revisits Policy For Users](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 03:12:55](https://lobste.rs/s/yp9mou/metacode_new_standard_for_machine) - [Metacode: The new standard for machine-readable comments for Python](https://github.com/pomponchik/metacode)
* [2025-12-09, 02:00:00](https://yro.slashdot.org/story/25/12/08/2359222/193-cybercrims-arrested-accused-of-plotting-violence-as-a-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [193 Cybercrims Arrested, Accused of Plotting &apos;Violence-As-a-Service&apos;](https://yro.slashdot.org/story/25/12/08/2359222/193-cybercrims-arrested-accused-of-plotting-violence-as-a-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 01:30:00](https://hardware.slashdot.org/story/25/12/08/2351223/nvidia-can-sell-h200-chips-to-china-for-25-us-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Can Sell H200 Chips To China For 25% US Cut](https://hardware.slashdot.org/story/25/12/08/2351223/nvidia-can-sell-h200-chips-to-china-for-25-us-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-09, 01:10:00](https://news.slashdot.org/story/25/12/08/2158223/more-than-200-environmental-groups-demand-halt-to-new-us-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 200 Environmental Groups Demand Halt To New US Datacenters](https://news.slashdot.org/story/25/12/08/2158223/more-than-200-environmental-groups-demand-halt-to-new-us-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 00:30:00](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Cries Censorship As Government Bans Rednote](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 00:16:46](https://news.ycombinator.com/item?id=46199623) - [The universal weight subspace hypothesis](https://arxiv.org/abs/2512.05117)
* [2025-12-09, 00:07:42](https://news.ycombinator.com/item?id=46199530) - [Manual: Spaces](https://type.today/en/journal/spaces)
* [2025-12-08, 23:53:52](https://news.ycombinator.com/item?id=46199411) - [Kroger acknowledges that its bet on robotics went too far](https://www.grocerydive.com/news/kroger-ocado-close-automated-fulfillment-centers-robotics-grocery-ecommerce/805931/)
* [2025-12-08, 23:50:00](https://tech.slashdot.org/story/25/12/08/2141229/ibm-to-buy-confluent-for-11-billion-to-expand-ai-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM To Buy Confluent For $11 Billion To Expand AI Services](https://tech.slashdot.org/story/25/12/08/2141229/ibm-to-buy-confluent-for-11-billion-to-expand-ai-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 23:17:16](https://lobste.rs/s/zsgdbg/prediction_ai_will_make_formal) - [Prediction: AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
* [2025-12-08, 23:10:00](https://news.slashdot.org/story/25/12/08/2135208/firefox-146-now-available-with-native-fractional-scaling-on-wayland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 146 Now Available With Native Fractional Scaling On Wayland](https://news.slashdot.org/story/25/12/08/2135208/firefox-146-now-available-with-native-fractional-scaling-on-wayland?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 22:30:00](https://yro.slashdot.org/story/25/12/08/2130204/meta-pledge-to-use-less-personal-data-for-ads-gets-eu-nod-avoids-daily-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Pledge To Use Less Personal Data For Ads Gets EU Nod, Avoids Daily Fines](https://yro.slashdot.org/story/25/12/08/2130204/meta-pledge-to-use-less-personal-data-for-ads-gets-eu-nod-avoids-daily-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 22:21:26](https://news.ycombinator.com/item?id=46198430) - [Show HN: I built a system for active note-taking in regular meetings like 1-1s](https://withdocket.com)
* [2025-12-08, 21:50:00](https://tech.slashdot.org/story/25/12/08/2028217/lenovos-next-gaming-laptop-may-have-a-rollable-oled-screen-that-stretches-ultrawide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo&apos;s Next Gaming Laptop May Have a Rollable OLED Screen That Stretches Ultrawide](https://tech.slashdot.org/story/25/12/08/2028217/lenovos-next-gaming-laptop-may-have-a-rollable-oled-screen-that-stretches-ultrawide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 20:47:49](https://lobste.rs/s/pvaalr/deprecations_via_warnings_don_t_work_for) - [Deprecations via warnings don’t work for Python libraries](https://sethmlarson.dev/deprecations-via-warnings-dont-work-for-python-libraries)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 19:56:14](https://lobste.rs/s/2lglm4/disagreements_over_post_quantum) - [Disagreements over post-quantum encryption for TLS](https://lwn.net/SubscriberLink/1048978/8efe916082e53bfe/)
* [2025-12-08, 19:44:00](https://news.ycombinator.com/item?id=46196688) - [Icons in Menus Everywhere – Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 19:34:24](https://lobste.rs/s/fqsavw/addressing_linux_s_missing_pki) - [Addressing Linux&apos;s Missing PKI Infrastructure](https://discourse.ubuntu.com/t/addressing-linuxs-missing-pki-infrastructure/73314)
* [2025-12-08, 19:14:41](https://lobste.rs/s/uaswiw/new_way_watch_your_linux_system_work) - [A New Way to Watch Your Linux System Work](https://www.both.org/?p=12706)
* [2025-12-08, 19:07:59](https://news.ycombinator.com/item?id=46196308) - [Trials avoid high risk patients and underestimate drug harms](https://www.nber.org/papers/w34534)
* [2025-12-08, 19:01:01](https://lobste.rs/s/q2gai0/jepsen_nats_2_12_1) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 19:00:48](https://news.ycombinator.com/item?id=46196228) - [Has the cost of building software dropped 90%?](https://martinalderson.com/posts/has-the-cost-of-software-just-dropped-90-percent/)
* [2025-12-08, 18:51:03](https://news.ycombinator.com/item?id=46196105) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 17:32:52](https://lobste.rs/s/getto0/nova_programming_language) - [Nova Programming Language](https://nova-lang.net/)
* [2025-12-08, 17:10:14](https://news.ycombinator.com/item?id=46194828) - [Launch HN: Nia (YC S25) – Give better context to coding agents](https://www.trynia.ai/)
* [2025-12-08, 16:34:08](https://news.ycombinator.com/item?id=46194337) - [Let&apos;s put Tailscale on a jailbroken Kindle](https://tailscale.com/blog/tailscale-jailbroken-kindle)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 15:01:42](https://lobste.rs/s/qrepmu/icons_menus_everywhere_send_help) - [Icons in Menus Everywhere — Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 14:50:48](https://news.ycombinator.com/item?id=46192846) - [Strong earthquake hits northern Japan, tsunami warning issued](https://www3.nhk.or.jp/nhkworld/en/news/20251209_02/)
* [2025-12-08, 13:49:21](https://news.ycombinator.com/item?id=46192186) - [Microsoft increases Office 365 and Microsoft 365 license prices](https://office365itpros.com/2025/12/08/microsoft-365-pricing-increase/)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 10:44:35](https://lobste.rs/s/dbqbhm/one_too_many_words_on_at_t_s_2_000_korn_shell) - [One too many words on AT&amp;T&apos;s $2,000 Korn shell and other Usenet topics](https://blog.gabornyeki.com/2025-12-usenet/)
* [2025-12-08, 08:55:51](https://lobste.rs/s/urbcpw/potential_security_breach_syncthing) - [potential security breach in syncthing-fork](https://mastodon.pirateparty.be/@surfhosting/115674236291033568)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
* [2025-12-06, 21:11:00](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss)
* [2025-12-06, 16:29:00](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss) - [New DDR5 Memory Overclocking World Record Set at 13,530 MT/S](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss)
* [2025-12-06, 11:41:00](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss) - [Let’s Encrypt to Reduce Certificate Validity From 90 Days to 45 Days](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss)
* [2025-12-06, 08:42:38](https://news.ycombinator.com/item?id=46171703) - [The Gamma Language](https://lair.masot.net/gamma/)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
