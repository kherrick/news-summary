# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43299011))

* [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43297574))

* [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) ([Comments](https://news.ycombinator.com/item?id=43299508))

## Policy and Privacy

* [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) ([Comments](https://news.ycombinator.com/item?id=43298054))

* [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43298048))

* [Age Verification Laws: A Backdoor to Surveillance](https://www.eff.org/deeplinks/2025/03/first-porn-now-skin-cream-age-verification-bills-are-out-control) ([Comments](https://news.ycombinator.com/item?id=43292820))

## International Affairs

* [US support to maintain UK's nuclear arsenal is in doubt](https://www.theguardian.com/world/2025/mar/08/us-support-uk-nuclear-arsenal-in-doubt-trident-france) ([Comments](https://news.ycombinator.com/item?id=43297590))

* [Trump Signs Order To Establish Strategic Bitcoin Reserve](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43297574))

## Developer and Engineering

* [Meta-compilation of Baseline JIT Compilers with Druid](https://programming-journal.org/2025/10/9/) ([Comments](https://lobste.rs/s/mued7d/meta_compilation_baseline_jit_compilers))

* [Why I Still Use Ruby on Rails](https://medium.com/@shaffanm/why-i-still-use-ruby-on-rails-7581464b86be) ([Comments](https://lobste.rs/s/jmcge1/why_i_still_use_ruby_on_rails))

* [Optimistic Locking in B-Trees](https://cedardb.com/blog/optimistic_btrees/) ([Comments](https://news.ycombinator.com/item?id=43292056))

## Scientific Exploration

* [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) ([Comments](https://news.ycombinator.com/item?id=43298475))

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) ([Comments](https://news.ycombinator.com/item?id=43297500))

## Retro Tech Playback

* [Volkswagen reintroducing physical controls for vital functions](https://www.autocar.co.uk/car-news/new-cars/volkswagen-reintroducing-physical-controls-vital-functions) ([Comments](https://news.ycombinator.com/item?id=43298271))

* [Dropbox for Dropbox haters](https://danmackinlay.name/notebook/synchronising_files) ([Comments](https://lobste.rs/s/u8kbix/dropbox_for_dropbox_haters))

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

* [2025-03-08, 12:19:59](https://news.ycombinator.com/item?id=43299635) - [What We Lose When Our Memories Exist in Our Phones](https://www.bloomberg.com/news/articles/2025-03-07/the-case-for-ditching-digital-memories-for-physical-objects)
* [2025-03-08, 12:00:45](https://news.ycombinator.com/item?id=43299508) - [Extend (YC W23) is hiring engineers to build LLM document processing](https://jobs.ashbyhq.com/extend/9d4d8974-bd9b-432d-84ec-8268e5a8ed37)
* [2025-03-08, 11:57:42](https://lobste.rs/s/v8izex/list_brave_browser_controversies) - [List of Brave browser controversies](https://old.reddit.com/r/browsers/comments/1j1pq7b/list_of_brave_browser_controversies)
* [2025-03-08, 10:19:55](https://news.ycombinator.com/item?id=43299011) - [US support to maintain UK's nuclear arsenal is in doubt](https://www.theguardian.com/world/2025/mar/08/us-support-uk-nuclear-arsenal-in-doubt-trident-france)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 10:00:00](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA's SPHEREx Is Poised To Launch Mission To Map 450 Million Galaxies In Color](https://science.slashdot.org/story/25/03/08/0152240/nasas-spherex-is-poised-to-launch-mission-to-map-450-million-galaxies-in-color?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 08:53:39](https://lobste.rs/s/3z1fmg/ai_where_loop_should_humans_go) - [AI: Where in the Loop Should Humans Go?](https://ferd.ca/ai-where-in-the-loop-should-humans-go.html)
* [2025-03-08, 07:35:00](https://lobste.rs/s/mued7d/meta_compilation_baseline_jit_compilers) - [Meta-compilation of Baseline JIT Compilers with Druid](https://programming-journal.org/2025/10/9/)
* [2025-03-08, 07:32:19](https://lobste.rs/s/az2qlz/epic_treatise_on_error_models_for_systems) - [An epic treatise on error models for systems programming languages](https://typesanitizer.com/blog/errors.html)
* [2025-03-08, 07:26:20](https://news.ycombinator.com/item?id=43298275) - [Ask HN: Is Cursor deleting working code for you too or is it just me?](https://news.ycombinator.com/item?id=43298275)
* [2025-03-08, 07:25:49](https://news.ycombinator.com/item?id=43298271) - [Volkswagen reintroducing physical controls for vital functions](https://www.autocar.co.uk/car-news/new-cars/volkswagen-reintroducing-physical-controls-vital-functions)
* [2025-03-08, 07:00:00](https://science.slashdot.org/story/25/03/08/0145217/athena-spacecraft-declared-dead-after-toppling-over-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Athena Spacecraft Declared Dead After Toppling Over On Moon](https://science.slashdot.org/story/25/03/08/0145217/athena-spacecraft-declared-dead-after-toppling-over-on-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 06:43:22](https://news.ycombinator.com/item?id=43298054) - [PayPal honey extension has again \"featured\" flag in Chrome web store](https://chromewebstore.google.com/detail/paypal-honey-automatic-co/bmnlcjabgnpnenekpadlanbbkooimhnj/reviews)
* [2025-03-08, 06:41:34](https://news.ycombinator.com/item?id=43298048) - [Svelte5: A Less Favorable Vue3](https://gist.github.com/rxliuli/c886198390a9fd1138853d0e260025f3)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 04:51:25](https://news.ycombinator.com/item?id=43297590) - [Falkon: A KDE Web Browser](https://www.falkon.org)
* [2025-03-08, 04:46:33](https://news.ycombinator.com/item?id=43297574) - [An epic treatise on error models for systems programming languages](https://typesanitizer.com/blog/errors.html)
* [2025-03-08, 03:30:00](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 02:12:13](https://news.ycombinator.com/item?id=43296918) - [Show HN: Open-Source DocumentAI with Ollama](https://rlama.dev/)
* [2025-03-08, 02:02:00](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reportedly Develops LLM Series That Can Rival OpenAI, Anthropic Models](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 01:52:01](https://lobste.rs/s/jmcge1/why_i_still_use_ruby_on_rails) - [Why I Still Use Ruby on Rails](https://medium.com/@shaffanm/why-i-still-use-ruby-on-rails-7581464b86be)
* [2025-03-08, 01:26:33](https://news.ycombinator.com/item?id=43296656) - [Feds Link $150M Cyberheist to 2022 LastPass Hacks](https://krebsonsecurity.com/2025/03/feds-link-150m-cyberheist-to-2022-lastpass-hacks/)
* [2025-03-08, 01:25:00](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:45:00](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BBC Radio's Streaming Changes Leave Long-Time Listeners In the Lurch](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:16:26](https://lobste.rs/s/9sscit/why_i_choose_lua_for_this_blog) - [Why I choose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-03-08, 00:08:01](https://lobste.rs/s/2xixj1/staff_performance_cliff) - [The Staff+ Performance Cliff](https://sylormiller.com/posts/2025/staff-plus-cliff/)
* [2025-03-08, 00:02:00](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Feds Arrest Man For Sharing DVD Rip of Spider-Man Movie With Millions Online](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 23:39:21](https://lobste.rs/s/u8kbix/dropbox_for_dropbox_haters) - [Dropbox for Dropbox haters](https://danmackinlay.name/notebook/synchronising_files)
* [2025-03-07, 23:20:00](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order To Establish Strategic Bitcoin Reserve](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 23:18:50](https://lobste.rs/s/nzfyoa/why_do_i_find_rust_inadequate_for_text) - [Why do I find Rust inadequate for text compression codecs?](https://palaiologos.rocks/posts/rust-codecs/)
* [2025-03-07, 23:08:01](https://lobste.rs/s/mpvjj8/standards_for_ansi_escape_codes) - [Standards for ANSI escape codes](https://jvns.ca/blog/2025/03/07/escape-code-standards/)
* [2025-03-07, 23:07:19](https://lobste.rs/s/ffjijn/git_zed_natively) - [Git in Zed, natively](https://zed.dev/git)
* [2025-03-07, 22:40:00](https://slashdot.org/story/25/03/07/229224/70-of-large-vmware-customers-bought-broadcoms-biggest-bundle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [70% of Large VMware Customers Bought Broadcom's Biggest Bundle](https://slashdot.org/story/25/03/07/229224/70-of-large-vmware-customers-bought-broadcoms-biggest-bundle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 22:04:00](https://tech.slashdot.org/story/25/03/07/221238/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Music Labels Will Regret Coming For the Internet Archive, Sound Historian Says](https://tech.slashdot.org/story/25/03/07/221238/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 21:33:43](https://news.ycombinator.com/item?id=43294974) - [Letta: Letta is a framework for creating LLM services with memory](https://github.com/letta-ai/letta)
* [2025-03-07, 20:57:46](https://news.ycombinator.com/item?id=43294566) - [Polars Cloud: The Distributed Cloud Architecture to Run Polars Anywhere](https://pola.rs/posts/polars-cloud-what-we-are-building/)
* [2025-03-07, 20:40:00](https://news.slashdot.org/story/25/03/07/1825257/the-spectacular-synapse-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Spectacular Synapse Collapse](https://news.slashdot.org/story/25/03/07/1825257/the-spectacular-synapse-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 20:37:14](https://lobste.rs/s/wfxu5j/vtm_text_based_desktop_environment) - [vtm: Text-based desktop environment](https://github.com/directvt/vtm)
* [2025-03-07, 20:11:20](https://lobste.rs/s/ambxwc/how_get_common_lisp_job_2055) - [How To Get A Common Lisp Job In 2055](https://sebastiancarlos.medium.com/common-lisp-in-2055-f3debf4df01c)
* [2025-03-07, 20:00:00](https://tech.slashdot.org/story/25/03/07/1817251/why-most-countries-are-struggling-to-shut-down-2g?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Most Countries Are Struggling To Shut Down 2G](https://tech.slashdot.org/story/25/03/07/1817251/why-most-countries-are-struggling-to-shut-down-2g?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 19:21:00](https://hardware.slashdot.org/story/25/03/07/1846204/wb-offers-replacements-not-refunds-for-hundreds-of-rotting-dvds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WB Offers Replacements, Not Refunds, for Hundreds of Rotting DVDs](https://hardware.slashdot.org/story/25/03/07/1846204/wb-offers-replacements-not-refunds-for-hundreds-of-rotting-dvds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 19:00:32](https://lobste.rs/s/tff49a/javascript_best_practice_use_return) - [JavaScript best practice: use return await](https://advancedweb.hu/shorts/javascript-best-practice-use-return-await/)
* [2025-03-07, 18:34:02](https://news.ycombinator.com/item?id=43292820) - [Age Verification Laws: A Backdoor to Surveillance](https://www.eff.org/deeplinks/2025/03/first-porn-now-skin-cream-age-verification-bills-are-out-control)
* [2025-03-07, 18:33:00](https://apple.slashdot.org/story/25/03/07/1833202/apple-delays-more-personalized-siri-apple-intelligence-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Delays 'More Personalized Siri' Apple Intelligence Features](https://apple.slashdot.org/story/25/03/07/1833202/apple-delays-more-personalized-siri-apple-intelligence-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 18:27:31](https://lobste.rs/s/ssvr4r/apple_has_90_days_allow_app_sideloading) - [Apple has 90 days to allow app sideloading in Brazil](https://www.theverge.com/news/625753/apple-ios-alternative-app-stores-sideloading-brazil)
* [2025-03-07, 18:06:45](https://news.ycombinator.com/item?id=43292471) - [Athena spacecraft declared dead after toppling over on moon](https://www.theguardian.com/science/2025/mar/07/athena-spacecraft-mission-dead)
* [2025-03-07, 18:00:00](https://slashdot.org/story/25/03/07/1755246/eu-denies-picking-on-us-tech-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Denies Picking on US Tech Giants](https://slashdot.org/story/25/03/07/1755246/eu-denies-picking-on-us-tech-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 17:24:02](https://news.ycombinator.com/item?id=43292056) - [Introducing command And commandfor In HTML](https://developer.chrome.com/blog/command-and-commandfor)
* [2025-03-07, 17:23:28](https://news.ycombinator.com/item?id=43292050) - [Optimistic Locking in B-Trees](https://cedardb.com/blog/optimistic_btrees/)
* [2025-03-07, 17:12:30](https://news.ycombinator.com/item?id=43291946) - [Vtm: Text-Based Desktop Environment](https://github.com/directvt/vtm)
* [2025-03-07, 17:09:20](https://news.ycombinator.com/item?id=43291922) - [Ask HN: Do your eyes bug you even though your prescription is \"correct\"?](https://news.ycombinator.com/item?id=43291922)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:43:24](https://news.ycombinator.com/item?id=43290555) - [Strobelight: A profiling service built on open source technology](https://engineering.fb.com/2025/01/21/production-engineering/strobelight-a-profiling-service-built-on-open-source-technology/)
* [2025-03-07, 14:38:26](https://lobste.rs/s/su44v6/balatro_timeline) - [The Balatro Timeline](https://localthunk.com/blog/balatro-timeline-3aarh)
* [2025-03-07, 14:22:42](https://lobste.rs/s/rtmte0/balancing_costs_count_ux) - [Balancing the costs of count(*) and UX](https://frappe.io/blog/engineering/balancing-the-costs-of-count-and-ux)
* [2025-03-07, 13:36:59](https://lobste.rs/s/xrw9nn/this_month_redox_february_2025) - [This Month in Redox - February 2025](https://www.redox-os.org/news/this-month-250228/)
* [2025-03-07, 13:35:09](https://lobste.rs/s/usdefp/how_write_useful_commit_messages) - [How to Write Useful Commit Messages](https://refactoringenglish.com/chapters/commit-messages/)
* [2025-03-07, 13:28:59](https://lobste.rs/s/q7ujau/qt_6_for_c_zig) - [Qt 6 for C & Zig](https://gist.github.com/rcalixte/339ede66703a988760829ecde2dc2c88)
* [2025-03-07, 13:10:39](https://lobste.rs/s/yhavca/why_local_first_software_is_future_its) - [Why Local-First Software Is the Future and its Limitations](https://rxdb.info/articles/local-first-future.html)
* [2025-03-07, 11:52:35](https://lobste.rs/s/99mmi2/oss_maintainers_what_s_most_audacious) - [OSS maintainers: what’s the most audacious work a company has ever asked you to do for free?](https://hachyderm.io/@hazelweakly/114112956589304873)
* [2025-03-07, 11:44:13](https://lobste.rs/s/kacsw3/landscape_lisp) - [The Landscape of Lisp](https://churchofturing.github.io/landscapeoflisp.html)
* [2025-03-07, 11:22:43](https://lobste.rs/s/8pk7n3/zig_s_dot_star_syntax_value) - [Zig's dot star syntax (value.*)](https://www.openmymind.net/Zig-Dot-Star-Syntax/)
* [2025-03-07, 10:38:29](https://lobste.rs/s/fieewa/ultimate_thinkpad_x230) - [The \"ultimate\" Thinkpad X230](https://calbryant.uk/blog/the-ultimate-thinkpad-x230/#working-boot-splash-image-done)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 07:46:50](https://news.ycombinator.com/item?id=43277550) - [Forces deep underground seem to be deforming Earth's inner core](https://www.newscientist.com/article/2467491-forces-deep-underground-seem-to-be-deforming-earths-inner-core/)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-05, 21:16:24](https://news.ycombinator.com/item?id=43272549) - [A game of learning your homelab into a cyberpunk mystery adventure](https://github.com/Fimeg/NetworkChronicles)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 18:59:04](https://news.ycombinator.com/item?id=43270712) - [Postgres Just Cracked the Top Fastest Databases for Analytics](https://www.mooncake.dev/blog/clickbench-v0.1)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 14:07:24](https://news.ycombinator.com/item?id=43266546) - [The features of Python's help() function](https://www.pythonmorsels.com/help-features/)
* [2025-03-05, 13:49:28](https://news.ycombinator.com/item?id=43266327) - [Qualcomm Claims New X85 Modem Creates 'Huge Delta' in Performance versus Apple](https://www.macrumors.com/2025/03/05/qualcomm-claims-x85-modem-better-than-apple/)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-04, 23:34:00](https://news.ycombinator.com/item?id=43260890) - [\"Wooly mice\" a test run for mammoth gene editing](https://arstechnica.com/science/2025/03/wooly-mice-a-test-run-for-mammoth-gene-editing/)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 19:01:20](https://news.ycombinator.com/item?id=43258670) - [AI models makes precise copies of cuneiform characters](https://news.cornell.edu/stories/2025/03/ai-models-makes-precise-copies-cuneiform-characters)
* [2025-03-04, 17:19:26](https://news.ycombinator.com/item?id=43257506) - [Mountains, Cliffs, and Caves: A Guide to Using Perlin Noise for Procedural Gen](https://jdhwilkins.com/mountains-cliffs-and-caves-a-comprehensive-guide-to-using-perlin-noise-for-procedural-generation/)
* [2025-03-04, 16:25:54](https://news.ycombinator.com/item?id=43256802) - [(Reasonably) secure Azure Pipelines on-prem deployments](https://rewiring.bearblog.dev/azure-devops-in-action-pt-iii-reasonably-secure-deploys-to-iis/)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
