# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Programming

* [Build your own programming language (2020)](https://thesephist.com/posts/pl/) - A guide for creating your own programming language presented with a comprehensive structure. [Comments here](https://lobste.rs/s/ummoom/build_your_own_programming_language_2020)

* [The Gleam Programming Language](https://gleam.run/) - Introduction to Gleam, a type-safe language for the Erlang VM. [Comments here](https://news.ycombinator.com/item?id=46611667)

* [Rust at Volvo Cars](https://www.youtube.com/watch?v=vBofCW8j70A) - A presentation on how Volvo Cars utilizes the Rust programming language. [Comments here](https://lobste.rs/s/pfj3mi/rust_at_volvo_cars)

* [Stop using natural language interfaces](https://tidepool.leaflet.pub/3mcbegnuf2k2i) - A critique of natural language interfaces in software. [Comments here](https://lobste.rs/s/7eokzy/stop_using_natural_language_interfaces) or [here](https://news.ycombinator.com/item?id=46611550)

* [Show HN: Cachekit – High performance caching policies library in Rust](https://github.com/OxidizeLabs/cachekit) - A new high-performance Rust library to handle caching policies efficiently. [Comments here](https://news.ycombinator.com/item?id=46611548)

* [Show HN: Axis – A systems programming language with Python syntax](https://github.com/AGDNoob/axis-lang) - Introducing Axis, a systems programming language that adopts Python syntax. [Comments here](https://news.ycombinator.com/item?id=46611379)

## AI and Data

* [Show HN: OSS AI agent that indexes and searches the Epstein files](https://epstein.trynia.ai/) - An open-source AI tool designed to index and search through the Epstein files. [Comments here](https://news.ycombinator.com/item?id=46611348)

* [AI generated music barred from Bandcamp](https://old.reddit.com/r/BandCamp/comments/1qbw8ba/ai_generated_music_on_bandcamp/) - Discussion about the ban of AI-generated music on Bandcamp. [Comments here](https://news.ycombinator.com/item?id=46605490)

* [Anthropic Invests $1.5 Million in the Python Software Foundation and Open Source Security](https://developers.slashdot.org/story/26/01/13/1613232/anthropic-invests-15-million-in-the-python-software-foundation-and-open-source-security) - Investment to support Python ecosystem and enhance security in open-source software. [Comments here](https://lobste.rs/s/mb07nn/anthropic_invests_1_5_million_python)

## Global Challenges and Research

* [Doubt Cast On Discovery of Microplastics Throughout Human Body](https://science.slashdot.org/story/26/01/14/004231/doubt-cast-on-discovery-of-microplastics-throughout-human-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scrutiny over the validity of microplastic discovery reports involving the human body. [Comments here](https://science.slashdot.org/story/26/01/14/004231/doubt-cast-on-discovery-of-microplastics-throughout-human-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Pentagon Device Linked To Havana Syndrome](https://yro.slashdot.org/story/26/01/13/2340202/pentagon-device-linked-to-havana-syndrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Speculation on a Pentagon device's connection to the mysterious Havana Syndrome. [Comments here](https://yro.slashdot.org/story/26/01/13/2340202/pentagon-device-linked-to-havana-syndrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [A university got itself banned from the Linux kernel (2021)](https://www.theverge.com/2021/4/30/22410164/linux-kernel-university-of-minnesota-banned-open-source) - Insight on why a university faced a ban from the Linux kernel community. [Comments here](https://news.ycombinator.com/item?id=46605950)

## Significant Global and Social Events

* [Senate Passes a Bill That Would Let Nonconsensual Deepfake Victims Sue](https://yro.slashdot.org/story/26/01/13/2347221/senate-passes-a-bill-that-would-let-nonconsensual-deepfake-victims-sue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New legislation enabling victims to legally address nonconsensual deepfakes. [Comments here](https://yro.slashdot.org/story/26/01/13/2347221/senate-passes-a-bill-that-would-let-nonconsensual-deepfake-victims-sue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - Volkswagen responds to public demand by reintegrating physical buttons into their EV dashboards. [Comments here](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)

## Software and Tools

* [HiTeX Press: A spam factory for AI-generated books](https://laurent.le-brun.eu/blog/hitex-a-spam-factory-for-ai-generated-books) - Exploring the proliferation of AI-generated book spam. [Comments here](https://lobste.rs/s/qgfhc3/hitex_press_spam_factory_for_ai_generated)

* [Nogic – VS Code extension that visualizes your codebase as a graph](https://marketplace.visualstudio.com/items?itemName=Nogic.nogic) - Tool for visualizing codebases in VS Code. [Comments here](https://news.ycombinator.com/item?id=46605675)

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

* [2026-01-14, 03:47:56](https://lobste.rs/s/ummoom/build_your_own_programming_language_2020) - [Build your own programming language (2020)](https://thesephist.com/posts/pl/)
* [2026-01-14, 03:30:00](https://science.slashdot.org/story/26/01/14/004231/doubt-cast-on-discovery-of-microplastics-throughout-human-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doubt Cast On Discovery of Microplastics Throughout Human Body](https://science.slashdot.org/story/26/01/14/004231/doubt-cast-on-discovery-of-microplastics-throughout-human-body?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 02:49:25](https://news.ycombinator.com/item?id=46611667) - [The Gleam Programming Language](https://gleam.run/)
* [2026-01-14, 02:44:21](https://lobste.rs/s/pfj3mi/rust_at_volvo_cars) - [Rust at Volvo Cars](https://www.youtube.com/watch?v=vBofCW8j70A)
* [2026-01-14, 02:42:41](https://lobste.rs/s/cgzwem/how_40_line_fix_eliminated_400x) - [How a 40-Line Fix Eliminated a 400x Performance Gap](https://questdb.com/blog/jvm-current-thread-user-time/)
* [2026-01-14, 02:29:08](https://news.ycombinator.com/item?id=46611550) - [Stop using natural language interfaces](https://tidepool.leaflet.pub/3mcbegnuf2k2i)
* [2026-01-14, 02:28:57](https://lobste.rs/s/7eokzy/stop_using_natural_language_interfaces) - [Stop using natural language interfaces](https://tidepool.leaflet.pub/3mcbegnuf2k2i)
* [2026-01-14, 02:28:52](https://news.ycombinator.com/item?id=46611548) - [Show HN: Cachekit – High performance caching policies library in Rust](https://github.com/OxidizeLabs/cachekit)
* [2026-01-14, 02:20:42](https://news.ycombinator.com/item?id=46611507) - [ASCII Clouds](https://caidan.dev/portfolio/ascii_clouds/)
* [2026-01-14, 02:02:00](https://yro.slashdot.org/story/26/01/13/2340202/pentagon-device-linked-to-havana-syndrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Device Linked To Havana Syndrome](https://yro.slashdot.org/story/26/01/13/2340202/pentagon-device-linked-to-havana-syndrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 02:01:17](https://news.ycombinator.com/item?id=46611379) - [Show HN: Axis – A systems programming language with Python syntax](https://github.com/AGDNoob/axis-lang)
* [2026-01-14, 01:56:52](https://news.ycombinator.com/item?id=46611348) - [Show HN: OSS AI agent that indexes and searches the Epstein files](https://epstein.trynia.ai/)
* [2026-01-14, 01:41:00](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss) - [Volkswagen is Bringing Physical Buttons Back to the Dashboard With the Polo EV](https://soylentnews.org/article.pl?sid=26/01/12/0137238&amp;from=rss)
* [2026-01-14, 01:25:00](https://games.slashdot.org/story/26/01/13/2356235/meta-closes-three-vr-studios-as-part-of-its-metaverse-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Closes Three VR Studios As Part of Its Metaverse Cuts](https://games.slashdot.org/story/26/01/13/2356235/meta-closes-three-vr-studios-as-part-of-its-metaverse-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 01:13:59](https://news.ycombinator.com/item?id=46611063) - [Exa-d: How to store the web in S3](https://exa.ai/blog/exa-d)
* [2026-01-14, 01:06:45](https://news.ycombinator.com/item?id=46611017) - [Vanderbilt University plans new campus in San Francisco](https://www.wsj.com/us-news/education/vanderbilt-san-francisco-cca-california-college-arts-expansion-lurie-8b6528b0)
* [2026-01-14, 01:01:12](https://news.ycombinator.com/item?id=46610967) - [Sei (YC W22) Is Hiring a DevOps Engineer (India/In-Office/Chennai/Gurgaon)](https://www.ycombinator.com/companies/sei/jobs/Rn0KPXR-devops-platform-ai-infrastructure-engineer)
* [2026-01-14, 00:45:00](https://yro.slashdot.org/story/26/01/13/2347221/senate-passes-a-bill-that-would-let-nonconsensual-deepfake-victims-sue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senate Passes a Bill That Would Let Nonconsensual Deepfake Victims Sue](https://yro.slashdot.org/story/26/01/13/2347221/senate-passes-a-bill-that-would-let-nonconsensual-deepfake-victims-sue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-14, 00:17:19](https://news.ycombinator.com/item?id=46610557) - [The $LANG Programming Language](https://news.ycombinator.com/item?id=46610557)
* [2026-01-14, 00:02:00](https://tech.slashdot.org/story/26/01/13/2046204/global-tech-sector-layoffs-surpass-244000-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Tech-Sector Layoffs Surpass 244,000 In 2025](https://tech.slashdot.org/story/26/01/13/2046204/global-tech-sector-layoffs-surpass-244000-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 23:20:00](https://tech.slashdot.org/story/26/01/13/2035229/wine-110-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11.0 Released](https://tech.slashdot.org/story/26/01/13/2035229/wine-110-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 23:00:36](https://news.ycombinator.com/item?id=46609630) - [A 40-line fix eliminated a 400x performance gap](https://questdb.com/blog/jvm-current-thread-user-time/)
* [2026-01-13, 22:49:51](https://news.ycombinator.com/item?id=46609492) - [When hardware goes end-of-life, companies need to open-source the software](https://www.marcia.no/words/eol)
* [2026-01-13, 22:40:00](https://slashdot.org/story/26/01/13/2026229/jpeg-xl-image-support-returns-to-latest-chromechromium-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPEG-XL Image Support Returns To Latest Chrome/Chromium Code](https://slashdot.org/story/26/01/13/2026229/jpeg-xl-image-support-returns-to-latest-chromechromium-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 22:02:00](https://tech.slashdot.org/story/26/01/13/2019228/apple-bundles-creative-apps-into-a-single-subscription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Bundles Creative Apps Into a Single Subscription](https://tech.slashdot.org/story/26/01/13/2019228/apple-bundles-creative-apps-into-a-single-subscription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 21:57:32](https://news.ycombinator.com/item?id=46608840) - [We can&apos;t have nice things because of AI scrapers](https://blog.metabrainz.org/2025/12/11/we-cant-have-nice-things-because-of-ai-scrapers/)
* [2026-01-13, 21:53:41](https://lobste.rs/s/gv8v8s/small_kafka_tansu_sqlite_on_free_t3_micro) - [Small Kafka: Tansu + SQLite on a free t3.micro (AWS Free Tier)](https://blog.tansu.io/articles/broker-aws-free-tier)
* [2026-01-13, 21:46:21](https://lobste.rs/s/k5yvju/bevy_0_18) - [Bevy 0.18](https://bevy.org/news/bevy-0-18/)
* [2026-01-13, 21:21:00](https://slashdot.org/story/26/01/13/206221/taiwan-issues-arrest-warrant-for-oneplus-ceo-for-china-hires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Issues Arrest Warrant for OnePlus CEO for China Hires](https://slashdot.org/story/26/01/13/206221/taiwan-issues-arrest-warrant-for-oneplus-ceo-for-china-hires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 21:13:19](https://lobste.rs/s/pwj9ue/truffleruby_33_is_released) - [TruffleRuby 33 is Released](https://truffleruby.dev/blog/truffleruby-33-is-released)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 20:44:00](https://tech.slashdot.org/story/26/01/13/1941214/ev-roadside-repairs-easier-than-petrol-or-diesel-new-data-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Roadside Repairs Easier Than Petrol or Diesel, New Data Suggests](https://tech.slashdot.org/story/26/01/13/1941214/ev-roadside-repairs-easier-than-petrol-or-diesel-new-data-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 20:04:00](https://tech.slashdot.org/story/26/01/13/1928228/apple-you-still-dont-understand-the-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple: You (Still) Don&apos;t Understand the Vision Pro](https://tech.slashdot.org/story/26/01/13/1928228/apple-you-still-dont-understand-the-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 19:22:00](https://tech.slashdot.org/story/26/01/13/194208/mercedes-temporarily-scraps-its-level-3-eyes-off-driving-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mercedes Temporarily Scraps Its Level 3 &apos;Eyes-off&apos; Driving Feature](https://tech.slashdot.org/story/26/01/13/194208/mercedes-temporarily-scraps-its-level-3-eyes-off-driving-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 18:58:55](https://news.ycombinator.com/item?id=46605950) - [A university got itself banned from the Linux kernel (2021)](https://www.theverge.com/2021/4/30/22410164/linux-kernel-university-of-minnesota-banned-open-source)
* [2026-01-13, 18:54:30](https://news.ycombinator.com/item?id=46605854) - [No management needed: anti-patterns in early-stage engineering teams](https://www.ablg.io/blog/no-management-needed)
* [2026-01-13, 18:44:00](https://slashdot.org/story/26/01/13/1845204/verizon-to-stop-automatic-unlocking-of-phones-as-fcc-ends-60-day-unlock-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon To Stop Automatic Unlocking of Phones as FCC Ends 60-Day Unlock Rule](https://slashdot.org/story/26/01/13/1845204/verizon-to-stop-automatic-unlocking-of-phones-as-fcc-ends-60-day-unlock-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 18:43:28](https://news.ycombinator.com/item?id=46605675) - [Show HN: Nogic – VS Code extension that visualizes your codebase as a graph](https://marketplace.visualstudio.com/items?itemName=Nogic.nogic)
* [2026-01-13, 18:31:50](https://news.ycombinator.com/item?id=46605490) - [AI generated music barred from Bandcamp](https://old.reddit.com/r/BandCamp/comments/1qbw8ba/ai_generated_music_on_bandcamp/)
* [2026-01-13, 18:30:59](https://lobste.rs/s/flirvs/server_first_web_component_architecture) - [Server-First Web Component Architecture: SXO + Reactive Component](https://dev.to/gc-victor/the-server-first-web-component-architecture-sxo-reactive-components-n4p)
* [2026-01-13, 18:22:00](https://news.ycombinator.com/item?id=46605332) - [The truth behind the 2026 J.P. Morgan Healthcare Conference](https://www.owlposting.com/p/the-truth-behind-the-2026-jp-morgan)
* [2026-01-13, 18:04:00](https://hardware.slashdot.org/story/26/01/13/1732222/americas-biggest-power-grid-operator-has-an-ai-problem---too-many-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Biggest Power Grid Operator Has an AI Problem - Too Many Data Centers](https://hardware.slashdot.org/story/26/01/13/1732222/americas-biggest-power-grid-operator-has-an-ai-problem---too-many-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 17:25:00](https://developers.slashdot.org/story/26/01/13/1613232/anthropic-invests-15-million-in-the-python-software-foundation-and-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Invests $1.5 Million in the Python Software Foundation and Open Source Security](https://developers.slashdot.org/story/26/01/13/1613232/anthropic-invests-15-million-in-the-python-software-foundation-and-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 17:23:46](https://news.ycombinator.com/item?id=46604250) - [How to make a damn website (2024)](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-13, 17:14:14](https://news.ycombinator.com/item?id=46604067) - [Show HN: Microwave – Native iOS app for videos on ATproto](https://testflight.apple.com/join/cVxV1W3g)
* [2026-01-13, 17:10:42](https://news.ycombinator.com/item?id=46603995) - [The Tulip Creative Computer](https://github.com/shorepine/tulipcc)
* [2026-01-13, 17:09:26](https://lobste.rs/s/zymqza/forklifts_facts_functions_building) - [Forklifts, Facts, and Functions: Building a Warehouse Management System with Clojure+Datomic](https://www.youtube.com/watch?v=NV02r1Y1B-8)
* [2026-01-13, 16:28:04](https://lobste.rs/s/mb07nn/anthropic_invests_1_5_million_python) - [Anthropic invests $1.5 million in the Python Software Foundation and open source security](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html)
* [2026-01-13, 16:24:44](https://lobste.rs/s/3bhiap/signal_creator_moxie_marlinspike_wants) - [Signal creator Moxie Marlinspike wants to do for AI what he did for messaging](https://arstechnica.com/security/2026/01/signal-creator-moxie-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging/)
* [2026-01-13, 16:23:31](https://lobste.rs/s/sfhgtx/cathedral_megachurch_bazaar) - [The Cathedral, the Megachurch, and the Bazaar](https://opensourcesecurity.io/2026/01-cathedral-megachurch-bazaar/)
* [2026-01-13, 16:22:59](https://news.ycombinator.com/item?id=46603111) - [Are two heads better than one?](https://eieio.games/blog/two-heads-arent-better-than-one/)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 15:59:59](https://news.ycombinator.com/item?id=46602737) - [vLLM large scale serving: DeepSeek 2.2k tok/s/h200 with wide-ep](https://blog.vllm.ai/2025/12/17/large-scale-serving.html)
* [2026-01-13, 15:52:33](https://news.ycombinator.com/item?id=46602591) - [Every GitHub object has two IDs](https://www.greptile.com/blog/github-ids)
* [2026-01-13, 15:38:45](https://lobste.rs/s/6skrep/ai_coding_assistants_are_getting_worse) - [AI Coding Assistants Are Getting Worse](https://spectrum.ieee.org/ai-coding-degrades)
* [2026-01-13, 15:18:43](https://news.ycombinator.com/item?id=46602102) - [Scott Adams has died](https://www.youtube.com/watch?v=Rs_JrOIo3SE)
* [2026-01-13, 13:47:21](https://lobste.rs/s/pk3rnu/solving_factorio_with_terraform) - [Solving Factorio with Terraform](https://www.youtube.com/watch?v=uU06vKlCNXk)
* [2026-01-13, 13:42:52](https://lobste.rs/s/07xsx9/hybrid_quota_linear_rate_limiter) - [hybrid quota-linear rate limiter](https://dotat.at/@/2026-01-12-hqlr.html)
* [2026-01-13, 12:55:31](https://lobste.rs/s/bufy06/win8de_windows_8_like_de_for_linux) - [Win8DE: windows 8 like de for linux](https://github.com/er-bharat/Win8DE)
* [2026-01-13, 12:29:27](https://lobste.rs/s/qgfhc3/hitex_press_spam_factory_for_ai_generated) - [HiTeX Press: A spam factory for AI-generated books](https://laurent.le-brun.eu/blog/hitex-a-spam-factory-for-ai-generated-books)
* [2026-01-13, 11:38:59](https://lobste.rs/s/5ttvyj/more_assorted_notes_on_liquid_glass_2025) - [More assorted notes on Liquid Glass (2025)](https://morrick.me/archives/10068)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 10:14:59](https://lobste.rs/s/zkvvo9/hidden_cost_postgresql_arrays) - [The hidden cost of PostgreSQL arrays](https://boringsql.com/posts/good-bad-arrays/)
* [2026-01-13, 09:31:45](https://lobste.rs/s/ui99tz/date_is_out_temporal_is) - [Date is out, Temporal is in](https://piccalil.li/blog/date-is-out-and-temporal-is-in/)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 05:03:35](https://lobste.rs/s/5se1tq/your_cli_s_completion_should_know_what) - [Your CLI&apos;s completion should know what options you&apos;ve already typed](https://hackers.pub/@hongminhee/2026/optique-context-aware-cli-completion)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-12, 23:02:27](https://news.ycombinator.com/item?id=46595393) - [A deep dive on agent sandboxes](https://pierce.dev/notes/a-deep-dive-on-agent-sandboxes)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 20:15:19](https://lobste.rs/s/h5e24r/how_stick_with_your_projects_even_when) - [How to stick with your projects, even when they&apos;re janky](https://www.youtube.com/watch?v=Alfq8RG80Ns)
* [2026-01-12, 17:50:01](https://news.ycombinator.com/item?id=46591810) - [There&apos;s a ridiculous amount of tech in a disposable vape](https://blog.jgc.org/2026/01/theres-ridiculous-amount-of-tech-in.html)
* [2026-01-12, 17:17:35](https://lobste.rs/s/ygqmfr/bad_dye_job) - [Bad Dye Job](https://daringfireball.net/2025/12/bad_dye_job)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 15:36:36](https://news.ycombinator.com/item?id=46589842) - [Why we built our own background agent](https://builders.ramp.com/post/why-we-built-our-background-agent)
* [2026-01-12, 14:04:57](https://lobste.rs/s/70isfv/how_make_damn_website) - [How to Make a Damn Website](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-12, 13:19:17](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site) - [we rolled our own documentation site](https://blog.tangled.org/docs)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 06:37:26](https://news.ycombinator.com/item?id=46584864) - [The Emacs Widget Library: A Critique and Case Study](https://www.d12frosted.io/posts/2025-11-26-emacs-widget-library)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
