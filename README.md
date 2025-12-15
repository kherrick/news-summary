# [News Summary](https://kherrick.github.io/news-summary/)

## Developments in Technology and AI

* [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - Explore the current landscape and trends in open source development.

* [Are Warnings of Superintelligence 'Inevitability' Masking a Grab for Power?](https://slashdot.org/story/25/12/15/0812238/are-warnings-of-superintelligence-inevitability-masking-a-grab-for-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A provocative discussion on the political implications of AI advancements.

* [CEOs Plan to Spend More on AI in 2026 - Despite Spotty Returns](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Corporate investment in AI rises, though with mixed results.

* [Time Magazine's 'Person of the Year': the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Recognizing major contributors in artificial intelligence.

* [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - Discover a new milestone in Linux desktop ecosystems.

## Space and Engineering News

* [SpaceX Alleges a Chinese-Deployed Satellite Risked Colliding with Starlink](https://science.slashdot.org/story/25/12/15/033255/spacex-alleges-a-chinese-deployed-satellite-risked-colliding-with-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX raises concerns over orbital safety.

* [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - Pinpointing timekeeping challenges on Mars.

* [Polar Bears are Rewiring Their Own Genetics to Survive a Warming Climate](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unpacking genetic adaptation under environmental pressures.

## Open Source Highlights

* [Jubilant: Python subprocess and Go codegen](https://benhoyt.com/writings/jubilant/) - Introducing a tool for seamless integration between Python and Go.

* [The experimental Sokol Vulkan backend](https://floooh.github.io/2025/12/01/sokol-vulkan-backend-1.html) - Breaking new ground in graphics backend development.

* [Myna v2.0.0 beta: Myna now supports bold/italic variants and even APL programming](https://github.com/sayyadirfanali/Myna/releases/tag/v2.0.0.0-beta) - Improved typography support for programming.

* [ClickHaskell 1.0.0 is out](https://github.com/KovalevDima/ClickHaskell) - A major release in Haskell tooling.

* [https://friendlybit.com/python/writing-justhtml-with-coding-agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents) - Insights on using coding agents for HTML generation.

## Key News in Social Policy and Society

* [Like Australia, Denmark Plans to Severely Restrict Social Media Use for Teenagers](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Denmark's new measures reflect growing concern over youth social media usage.

* [Repeal Section 230 and Its Platform Protections, Urges New Bipartisan US Bill](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critical look at tech platform regulations.

* [Trump Ban on Wind Energy Permits 'Unlawful', Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal perspectives on renewable energy policies.

* [Investors in Limbo - Will the TikTok Deal's Deadline Be Extended Again?](https://tech.slashdot.org/story/25/12/14/2257237/investors-in-limbo-will-the-tiktok-deals-deadline-be-extended-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into the uncertain future of TikTok ownership.

## Memorable Obituaries

* [Rob Reiner has died](https://www.hollywoodreporter.com/movies/movie-news/rob-reiner-dead-harry-met-sally-princess-bride-all-in-family-1236450387/) - Celebrating the works of the iconic filmmaker and actor.

* [John Varley has died](http://floggingbabel.blogspot.com/2025/12/john-varley-1947-2025.html) - Remembering celebrated science fiction author John Varley.

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

* [2025-12-15, 09:44:32](https://lobste.rs/s/qawuhq/30_years_br_tags) - [30 Years of &lt;br&gt; Tags](https://www.artmann.co/articles/30-years-of-br-tags)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 08:37:14](https://lobste.rs/s/khozwx/rust_s_v0_mangling_scheme_nutshell) - [Rust&apos;s v0 mangling scheme in a nutshell](https://purplesyringa.moe/blog/rusts-v0-mangling-scheme-in-a-nutshell/)
* [2025-12-15, 08:34:00](https://slashdot.org/story/25/12/15/0812238/are-warnings-of-superintelligence-inevitability-masking-a-grab-for-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Warnings of Superintelligence &apos;Inevitability&apos; Masking a Grab for Power?](https://slashdot.org/story/25/12/15/0812238/are-warnings-of-superintelligence-inevitability-masking-a-grab-for-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 08:21:58](https://lobste.rs/s/sxbxfe/experimental_sokol_vulkan_backend) - [The experimental Sokol Vulkan backend](https://floooh.github.io/2025/12/01/sokol-vulkan-backend-1.html)
* [2025-12-15, 07:43:51](https://lobste.rs/s/pitfbt/system_observability_metrics_sampling) - [System Observability: Metrics, Sampling, and Tracing](https://entropicthoughts.com/system-observability-metrics-sampling-tracing)
* [2025-12-15, 07:10:01](https://lobste.rs/s/2nbzsq/jubilant_python_subprocess_go_codegen) - [Jubilant: Python subprocess and Go codegen](https://benhoyt.com/writings/jubilant/)
* [2025-12-15, 06:05:56](https://lobste.rs/s/syj9ml/toon_token_oriented_object_notation) - [TOON: Token-Oriented Object Notation](https://toonformat.dev/)
* [2025-12-15, 05:46:35](https://news.ycombinator.com/item?id=46270882) - [Common Rust Lifetime Misconceptions](https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md)
* [2025-12-15, 05:24:00](https://science.slashdot.org/story/25/12/15/033255/spacex-alleges-a-chinese-deployed-satellite-risked-colliding-with-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Alleges a Chinese-Deployed Satellite Risked Colliding with Starlink](https://science.slashdot.org/story/25/12/15/033255/spacex-alleges-a-chinese-deployed-satellite-risked-colliding-with-starlink?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-15, 04:15:21](https://news.ycombinator.com/item?id=46270415) - [Read Something Wonderful](https://readsomethingwonderful.com/)
* [2025-12-15, 04:09:51](https://news.ycombinator.com/item?id=46270386) - [The Whole App is a Blob](https://drobinin.com/posts/the-whole-app-is-a-blob/)
* [2025-12-15, 03:57:46](https://news.ycombinator.com/item?id=46270298) - [Arborium: Tree-sitter code highlighting with Native and WASM targets](https://arborium.bearcove.eu/)
* [2025-12-15, 03:55:07](https://news.ycombinator.com/item?id=46270282) - [Unscii](http://viznut.fi/unscii/)
* [2025-12-15, 03:54:03](https://news.ycombinator.com/item?id=46270273) - [Rob Reiner has died](https://www.hollywoodreporter.com/movies/movie-news/rob-reiner-dead-harry-met-sally-princess-bride-all-in-family-1236450387/)
* [2025-12-15, 03:38:11](https://lobste.rs/s/vcjisp/l5_processing_library_lua_for) - [L5: A Processing Library in Lua for Interactive Artwork](https://l5lua.org/)
* [2025-12-15, 03:24:00](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roomba Maker &apos;iRobot&apos; Files for Bankruptcy After 35 Years](https://hardware.slashdot.org/story/25/12/15/0152212/roomba-maker-irobot-files-for-bankruptcy-after-35-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 03:04:50](https://news.ycombinator.com/item?id=46269991) - [John Varley has died](http://floggingbabel.blogspot.com/2025/12/john-varley-1947-2025.html)
* [2025-12-15, 01:24:00](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Like Australia, Denmark Plans to Severely Restrict Social Media Use for Teenagers](https://tech.slashdot.org/story/25/12/15/0120247/like-australia-denmark-plans-to-severely-restrict-social-media-use-for-teenagers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 00:39:31](https://news.ycombinator.com/item?id=46268869) - [CapROS: Capability-Based Reliable Operating System](https://www.capros.org/)
* [2025-12-15, 00:36:44](https://news.ycombinator.com/item?id=46268854) - [Roomba maker goes bankrupt, Chinese owner emerges](https://news.bloomberglaw.com/bankruptcy-law/robot-vacuum-roomba-maker-files-for-bankruptcy-after-35-years)
* [2025-12-15, 00:35:41](https://news.ycombinator.com/item?id=46268844) - [Microsoft Copilot AI Comes to LG TVs, and Can&apos;t Be Deleted](https://www.techpowerup.com/344075/microsoft-copilot-ai-comes-to-lg-tvs-and-cant-be-deleted)
* [2025-12-15, 00:17:02](https://news.ycombinator.com/item?id=46268709) - [If AI replaces workers, should it also pay taxes?](https://english.elpais.com/technology/2025-11-30/if-ai-replaces-workers-should-it-also-pay-taxes.html)
* [2025-12-15, 00:17:00](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Plan to Spend More on AI in 2026 - Despite Spotty Returns](https://it.slashdot.org/story/25/12/15/0013251/ceos-plan-to-spend-more-on-ai-in-2026---despite-spotty-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-15, 00:05:23](https://lobste.rs/s/v2p3id/let_s_write_toy_ui_library) - [Let&apos;s write a toy UI library](https://nakst.gitlab.io/tutorial/ui-part-1.html)
* [2025-12-15, 00:02:39](https://lobste.rs/s/ktfrjk/world_is_not_desktop_1994) - [The World Is Not A Desktop (1994)](https://dl.acm.org/doi/pdf/10.1145/174800.174801)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 23:48:37](https://news.ycombinator.com/item?id=46268452) - [AI agents are starting to eat SaaS](https://martinalderson.com/posts/ai-agents-are-starting-to-eat-saas/)
* [2025-12-14, 22:59:00](https://tech.slashdot.org/story/25/12/14/2257237/investors-in-limbo-will-the-tiktok-deals-deadline-be-extended-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Investors in Limbo&apos;.  Will the TikTok Deal&apos;s Deadline Be Extended Again?](https://tech.slashdot.org/story/25/12/14/2257237/investors-in-limbo-will-the-tiktok-deals-deadline-be-extended-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 22:46:31](https://lobste.rs/s/1qdc9j/my_gift_rustdoc_team) - [My gift to the rustdoc team](https://fasterthanli.me/articles/my-gift-to-the-rust-docs-team)
* [2025-12-14, 22:46:01](https://news.ycombinator.com/item?id=46267947) - [History of Declarative Programming (2021)](https://shenlanguage.org/TBoS/tbos_15.html)
* [2025-12-14, 22:45:54](https://lobste.rs/s/07fdbv/advent_swift) - [Advent of Swift](https://leahneukirchen.org/blog/archive/2025/12/advent-of-swift.html)
* [2025-12-14, 22:02:53](https://lobste.rs/s/hrmr9m/time_element_should_actually_do) - [The &lt;time&gt; element should actually do something](https://nolanlawson.com/2025/12/14/the-time-element-should-actually-do-something/)
* [2025-12-14, 21:53:13](https://news.ycombinator.com/item?id=46267385) - [Elevated errors across many models](https://status.claude.com/incidents/9g6qpr72ttbr)
* [2025-12-14, 21:34:00](https://slashdot.org/story/25/12/14/2110234/podcast-industry-under-siege-as-ai-bots-flood-airways-with-thousands-of-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Podcast Industry Under Siege as AI Bots Flood Airways with Thousands of Programs](https://slashdot.org/story/25/12/14/2110234/podcast-industry-under-siege-as-ai-bots-flood-airways-with-thousands-of-programs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 20:47:21](https://news.ycombinator.com/item?id=46266717) - [The Problem of Teaching Physics in Latin America (1963)](https://calteches.library.caltech.edu/46/2/LatinAmerica.htm)
* [2025-12-14, 20:34:00](https://developers.slashdot.org/story/25/12/14/2030215/entry-level-tech-workers-confront-an-ai-fueled-jobpocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Entry-Level Tech Workers Confront an AI-Fueled Jobpocalypse](https://developers.slashdot.org/story/25/12/14/2030215/entry-level-tech-workers-confront-an-ai-fueled-jobpocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 19:42:53](https://news.ycombinator.com/item?id=46266102) - [JSDoc is TypeScript](https://culi.bearblog.dev/jsdoc-is-typescript/)
* [2025-12-14, 19:12:00](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polar Bears are Rewiring Their Own Genetics to Survive a Warming Climate](https://news.slashdot.org/story/25/12/14/199215/polar-bears-are-rewiring-their-own-genetics-to-survive-a-warming-climate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 19:01:18](https://lobste.rs/s/duyqgm/postfix_macros_let_place) - [Postfix Macros and let place](https://nadrieril.github.io/blog/2025/12/09/postfix-macros-and-let-place.html)
* [2025-12-14, 18:18:34](https://news.ycombinator.com/item?id=46265362) - [Adafruit: Arduino’s Rules Are ‘Incompatible With Open Source’](https://thenewstack.io/adafruit-arduinos-rules-are-incompatible-with-open-source/)
* [2025-12-14, 17:34:00](https://hardware.slashdot.org/story/25/12/13/0110246/america-adds-117-gw-of-new-solar-capacity-in-q3---third-largest-quarter-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Adds 11.7 GW of New Solar Capacity in Q3 - Third Largest Quarter on Record](https://hardware.slashdot.org/story/25/12/13/0110246/america-adds-117-gw-of-new-solar-capacity-in-q3---third-largest-quarter-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 16:55:29](https://news.ycombinator.com/item?id=46264492) - [Hashcards: A plain-text spaced repetition system](https://borretti.me/article/hashcards-plain-text-spaced-repetition)
* [2025-12-14, 16:55:25](https://news.ycombinator.com/item?id=46264491) - [Ask HN: What Are You Working On? (December 2025)](https://news.ycombinator.com/item?id=46264491)
* [2025-12-14, 16:43:57](https://lobste.rs/s/hwo6rn/how_i_wrote_justhtml_using_coding_agents) - [How I wrote JustHTML using coding agents](https://friendlybit.com/python/writing-justhtml-with-coding-agents/)
* [2025-12-14, 16:35:53](https://lobste.rs/s/oiib0n/very_basic_implementation_virtual) - [A very basic implementation of a virtual continuum fingerboard](https://continuum.awalgarg.me)
* [2025-12-14, 16:35:12](https://lobste.rs/s/4ixwyf/shai_hulud_complete_post_mortem) - [Shai-Hulud: A complete post-mortem](https://trigger.dev/blog/shai-hulud-postmortem)
* [2025-12-14, 16:34:00](https://news.slashdot.org/story/25/12/14/0557226/purdue-university-approves-new-ai-requirement-for-all-undergrads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Purdue University Approves New AI Requirement For All Undergrads](https://news.slashdot.org/story/25/12/14/0557226/purdue-university-approves-new-ai-requirement-for-all-undergrads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 16:09:44](https://news.ycombinator.com/item?id=46264068) - [Price of a bot army revealed across online platforms](https://www.cam.ac.uk/stories/price-bot-army-global-index)
* [2025-12-14, 15:34:00](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Repeal Section 230 and Its Platform Protections, Urges New Bipartisan US Bill](https://news.slashdot.org/story/25/12/14/0656223/repeal-section-230-and-its-platform-protections-urges-new-bipartisan-us-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 15:18:08](https://lobste.rs/s/vp1zbg/tier_list_linux_security_mechanisms_2024) - [Tier list of Linux security mechanisms (2024)](https://blog.ce9e.org/posts/2024-06-23-linux-security-mechanisms/)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 14:07:25](https://lobste.rs/s/ues4u6/acme_device_attestation_extension) - [ACME Device Attestation Extension](https://datatracker.ietf.org/doc/draft-ietf-acme-device-attest/)
* [2025-12-14, 13:40:07](https://lobste.rs/s/7gyuha/distraction_free_writing_environment) - [A distraction-free writing environment](https://github.com/andrewmd5/dawn)
* [2025-12-14, 13:28:12](https://lobste.rs/s/qcbiec/myna_v2_0_0_beta_myna_now_supports_bold) - [Myna v2.0.0 beta: Myna now supports bold/italic variants and even APL programming](https://github.com/sayyadirfanali/Myna/releases/tag/v2.0.0.0-beta)
* [2025-12-14, 12:34:00](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Time Magazine&apos;s &apos;Person of the Year&apos;: the Architects of AI](https://news.slashdot.org/story/25/12/14/084207/time-magazines-person-of-the-year-the-architects-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 10:07:00](https://news.ycombinator.com/item?id=46262021) - [Shai-Hulud compromised a dev machine and raided GitHub org access: a post-mortem](https://trigger.dev/blog/shai-hulud-postmortem)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 08:44:00](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Ban on Wind Energy Permits &apos;Unlawful&apos;, Court Rules](https://hardware.slashdot.org/story/25/12/13/0157258/trump-ban-on-wind-energy-permits-unlawful-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 08:40:41](https://lobste.rs/s/keyz9l/clickhaskell_1_0_0_is_out) - [ClickHaskell 1.0.0 is out](https://github.com/KovalevDima/ClickHaskell)
* [2025-12-14, 07:23:52](https://lobste.rs/s/hzyyyy/stop_writing_if_statements_for_your_cli) - [Stop writing if statements for your CLI flags](https://hackers.pub/@hongminhee/2025/stop-writing-if-statements-for-your-cli-flags)
* [2025-12-14, 05:34:00](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Rule Forbids GNOME Shell Extensions Made Using AI-Generated Code](https://tech.slashdot.org/story/25/12/14/0453227/new-rule-forbids-gnome-shell-extensions-made-using-ai-generated-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 04:37:15](https://lobste.rs/s/o3daas/build_systems_la_carte_2018) - [Build Systems A La Carte (2018)](https://www.microsoft.com/en-us/research/wp-content/uploads/2018/03/build-systems.pdf)
* [2025-12-14, 00:34:07](https://lobste.rs/s/ibjihl/icl_interactive_common_lisp_enhanced) - [icl: Interactive Common Lisp: an enhanced REPL](https://github.com/atgreen/icl)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
* [2025-12-13, 19:23:00](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss) - [Scientists Finally Uncover Why the World’s Most Common Heart Drug Causes Muscle Pain](https://soylentnews.org/article.pl?sid=25/12/11/0919226&amp;from=rss)
* [2025-12-13, 17:01:32](https://lobste.rs/s/aoqsqp/i_tried_gleam_for_advent_code_i_get_hype) - [I Tried Gleam for Advent of Code, and I Get the Hype](https://blog.tymscar.com/posts/gleamaoc2025/)
* [2025-12-13, 14:37:00](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss) - [Germany Might Have Just Saved Gas Engines From a European Ban](https://soylentnews.org/article.pl?sid=25/12/11/0916209&amp;from=rss)
* [2025-12-13, 09:52:00](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss) - [Space Shuttle Lessons: Backtracks Can Create Breakthroughs](https://soylentnews.org/article.pl?sid=25/12/11/0910257&amp;from=rss)
* [2025-12-13, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss) - [USA Wants Your Social Media History If You Visit](https://soylentnews.org/article.pl?sid=25/12/11/092209&amp;from=rss)
* [2025-12-13, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss) - [Man Dies of Rabies After Kidney Transplant From Donor Who Saved Kitten From Skunk](https://soylentnews.org/article.pl?sid=25/12/11/023241&amp;from=rss)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 18:54:42](https://news.ycombinator.com/item?id=46235460) - [The History of Xerox](https://www.abortretry.fail/p/the-history-of-xerox)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 09:30:32](https://news.ycombinator.com/item?id=46229350) - [A trip through the Graphics Pipeline (2011)](https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index/)
* [2025-12-11, 08:42:22](https://news.ycombinator.com/item?id=46229030) - [$5 whale listening hydrophone making workshop](https://exclav.es/2025/08/03/dinacon-2025-passive-acoustic-listening/)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
