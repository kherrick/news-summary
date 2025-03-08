# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers develop a genetically engineered banana that resists browning, aiming to decrease food wastage.

* [Auntie PDF – an open source app built using Mistral OCR](https://www.auntiepdf.com/) - Introducing a tool that leverages OCR for smarter document handling.

* [Show HN: Open-Source DocumentAI with Ollama](https://rlama.dev/) - A platform offering open-source AI solutions for document processing.

* [Reflection AI launches with $130M in funding](https://siliconangle.com/2025/03/07/superintelligence-startup-reflection-ai-launches-130m-funding/) - A new entrant in the superintelligence space garners significant investor interest.

* [Microsoft Reportedly Develops LLM Series That Can Rival OpenAI, Anthropic Models](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft seeks to compete with leading generative AI models with its own series of large language models.

## Security and Privacy Concerns

* [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Signal president warns against potential dangers of AI entities.

* [Feds Link $150M Cyberheist to 2022 LastPass Hacks](https://krebsonsecurity.com/2025/03/feds-link-150m-cyberheist-to-2022-lastpass-hacks/) - Investigation connects major cybertheft to earlier password manager breaches.

* [Developer sabotaged ex-employer with kill switch that activated when fired](https://www.theregister.com/2025/03/08/developer_server_kill_switch/) - IT drama highlights vulnerabilities in insider threats.

* [Age Verification Laws: A Backdoor to Surveillance](https://www.eff.org/deeplinks/2025/03/first-porn-now-skin-cream-age-verification-bills-are-out-control) - How age verification mandates could pave the way for broader surveillance.

## Space and Science Updates

* [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - Questions arise over the environmental sterility aboard the ISS.

* [Athena spacecraft declared dead after toppling over on moon](https://www.theguardian.com/science/2025/mar/07/athena-spacecraft-mission-dead) - Tragedy strikes an ambitious lunar mission as a critical milestone is missed.

* [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - Shifting perspectives on the catastrophic long-term consequences of volcanic events.

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - New analysis suggests interstellar origins for certain meteorite samples.

## Industry and Business Insights

* [70% of Large VMware Customers Bought Broadcom's Biggest Bundle](https://slashdot.org/story/25/03/07/229224/70-of-large-vmware-customers-bought-broadcoms-biggest-bundle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Popularity grows for Broadcom's bundled corporate solutions.

* [Microsoft is plotting a future without OpenAI](https://techstartups.com/2025/03/07/microsoft-is-plotting-a-future-without-openai/) - Speculation about Microsoft's evolving stance towards AI partnerships.

* [Trump Signs Order To Establish Strategic Bitcoin Reserve](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Policy signals push towards cryptocurrency as a national asset.

* [WB Offers Replacements, Not Refunds, for Hundreds of Rotting DVDs](https://hardware.slashdot.org/story/25/03/07/1846204/wb-offers-replacements-not-refunds-for-hundreds-of-rotting-dvds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Consumer backlash grows over defective physical media replacements.

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

* [2025-03-08, 03:30:00](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gene-Edited Non-Browning Banana Could Cut Food Waste, Scientists Say](https://science.slashdot.org/story/25/03/08/0140247/gene-edited-non-browning-banana-could-cut-food-waste-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 03:15:27](https://news.ycombinator.com/item?id=43297174) - [Auntie PDF – an open source app built using Mistral OCR](https://www.auntiepdf.com/)
* [2025-03-08, 02:12:13](https://news.ycombinator.com/item?id=43296918) - [Show HN: Open-Source DocumentAI with Ollama](https://rlama.dev/)
* [2025-03-08, 02:06:47](https://news.ycombinator.com/item?id=43296886) - [Take It Down Act: A Flawed Attempt to Protect Victims That'll Lead to Censorship](https://www.eff.org/deeplinks/2025/02/take-it-down-act-flawed-attempt-protect-victims-will-lead-censorship)
* [2025-03-08, 02:02:00](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Reportedly Develops LLM Series That Can Rival OpenAI, Anthropic Models](https://slashdot.org/story/25/03/08/0018225/microsoft-reportedly-develops-llm-series-that-can-rival-openai-anthropic-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 01:52:01](https://lobste.rs/s/jmcge1/why_i_still_use_ruby_on_rails) - [Why I Still Use Ruby on Rails](https://medium.com/@shaffanm/why-i-still-use-ruby-on-rails-7581464b86be)
* [2025-03-08, 01:41:56](https://news.ycombinator.com/item?id=43296738) - [Developer sabotaged ex-employer with kill switch that activated when fired](https://www.theregister.com/2025/03/08/developer_server_kill_switch/)
* [2025-03-08, 01:26:33](https://news.ycombinator.com/item?id=43296656) - [Feds Link $150M Cyberheist to 2022 LastPass Hacks](https://krebsonsecurity.com/2025/03/feds-link-150m-cyberheist-to-2022-lastpass-hacks/)
* [2025-03-08, 01:25:00](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Signal President Calls Out Agentic AI As Having 'Profound' Security and Privacy Issues](https://yro.slashdot.org/story/25/03/07/2310205/signal-president-calls-out-agentic-ai-as-having-profound-security-and-privacy-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:57:42](https://news.ycombinator.com/item?id=43296513) - [Superintelligence startup Reflection AI launches with $130M in funding](https://siliconangle.com/2025/03/07/superintelligence-startup-reflection-ai-launches-130m-funding/)
* [2025-03-08, 00:45:00](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BBC Radio's Streaming Changes Leave Long-Time Listeners In the Lurch](https://news.slashdot.org/story/25/03/07/2250209/bbc-radios-streaming-changes-leave-long-time-listeners-in-the-lurch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-08, 00:16:26](https://lobste.rs/s/9sscit/why_i_choose_lua_for_this_blog) - [Why I choose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-03-08, 00:08:01](https://lobste.rs/s/2xixj1/staff_performance_cliff) - [The Staff+ Performance Cliff](https://sylormiller.com/posts/2025/staff-plus-cliff/)
* [2025-03-08, 00:02:00](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Feds Arrest Man For Sharing DVD Rip of Spider-Man Movie With Millions Online](https://yro.slashdot.org/story/25/03/07/2242250/feds-arrest-man-for-sharing-dvd-rip-of-spider-man-movie-with-millions-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 23:52:49](https://news.ycombinator.com/item?id=43296103) - [GeoCities in 1995: Building a Home Page on the Internet](https://cybercultural.com/p/geocities-1995/)
* [2025-03-07, 23:20:45](https://news.ycombinator.com/item?id=43295908) - [Rust inadequate for text compression codecs?](https://palaiologos.rocks/posts/rust-codecs/)
* [2025-03-07, 23:20:00](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trump Signs Order To Establish Strategic Bitcoin Reserve](https://yro.slashdot.org/story/25/03/07/2224215/trump-signs-order-to-establish-strategic-bitcoin-reserve?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 23:18:50](https://lobste.rs/s/nzfyoa/why_do_i_find_rust_inadequate_for_text) - [Why do I find Rust inadequate for text compression codecs?](https://palaiologos.rocks/posts/rust-codecs/)
* [2025-03-07, 23:14:36](https://news.ycombinator.com/item?id=43295865) - [How did places like Bell Labs know how to ask the right questions? (2023)](https://www.freaktakes.com/p/how-did-places-like-bell-labs-know)
* [2025-03-07, 23:08:01](https://lobste.rs/s/mpvjj8/standards_for_ansi_escape_codes) - [Standards for ANSI escape codes](https://jvns.ca/blog/2025/03/07/escape-code-standards/)
* [2025-03-07, 23:07:19](https://lobste.rs/s/ffjijn/git_zed_natively) - [Git in Zed, natively](https://zed.dev/git)
* [2025-03-07, 22:40:00](https://slashdot.org/story/25/03/07/229224/70-of-large-vmware-customers-bought-broadcoms-biggest-bundle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [70% of Large VMware Customers Bought Broadcom's Biggest Bundle](https://slashdot.org/story/25/03/07/229224/70-of-large-vmware-customers-bought-broadcoms-biggest-bundle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 22:04:00](https://tech.slashdot.org/story/25/03/07/221238/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Music Labels Will Regret Coming For the Internet Archive, Sound Historian Says](https://tech.slashdot.org/story/25/03/07/221238/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 21:33:43](https://news.ycombinator.com/item?id=43294974) - [Letta: Letta is a framework for creating LLM services with memory](https://github.com/letta-ai/letta)
* [2025-03-07, 21:01:16](https://news.ycombinator.com/item?id=43294602) - [ParadeDB (YC S23) Is Hiring a Rust Database Engineer](https://paradedb.notion.site/ParadeDB-Job-Board-50b45af7a2834e22958b171ffa008e00)
* [2025-03-07, 20:57:46](https://news.ycombinator.com/item?id=43294566) - [Polars Cloud: The Distributed Cloud Architecture to Run Polars Anywhere](https://pola.rs/posts/polars-cloud-what-we-are-building/)
* [2025-03-07, 20:50:45](https://news.ycombinator.com/item?id=43294489) - ['Next-Level' Chaos Traces the True Limit of Predictability](https://www.quantamagazine.org/next-level-chaos-traces-the-true-limit-of-predictability-20250307/)
* [2025-03-07, 20:40:00](https://news.slashdot.org/story/25/03/07/1825257/the-spectacular-synapse-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Spectacular Synapse Collapse](https://news.slashdot.org/story/25/03/07/1825257/the-spectacular-synapse-collapse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 20:37:14](https://lobste.rs/s/wfxu5j/vtm_text_based_desktop_environment) - [vtm: Text-based desktop environment](https://github.com/directvt/vtm)
* [2025-03-07, 20:11:20](https://lobste.rs/s/ambxwc/how_get_common_lisp_job_2055) - [How To Get A Common Lisp Job In 2055](https://sebastiancarlos.medium.com/common-lisp-in-2055-f3debf4df01c)
* [2025-03-07, 20:00:00](https://tech.slashdot.org/story/25/03/07/1817251/why-most-countries-are-struggling-to-shut-down-2g?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Most Countries Are Struggling To Shut Down 2G](https://tech.slashdot.org/story/25/03/07/1817251/why-most-countries-are-struggling-to-shut-down-2g?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 19:28:31](https://news.ycombinator.com/item?id=43293487) - [Europe's most wanted man plotted my murder and that of my colleague](https://theins.press/en/inv/279034)
* [2025-03-07, 19:21:00](https://hardware.slashdot.org/story/25/03/07/1846204/wb-offers-replacements-not-refunds-for-hundreds-of-rotting-dvds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WB Offers Replacements, Not Refunds, for Hundreds of Rotting DVDs](https://hardware.slashdot.org/story/25/03/07/1846204/wb-offers-replacements-not-refunds-for-hundreds-of-rotting-dvds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 19:00:32](https://lobste.rs/s/tff49a/javascript_best_practice_use_return) - [JavaScript best practice: use return await](https://advancedweb.hu/shorts/javascript-best-practice-use-return-await/)
* [2025-03-07, 18:44:34](https://news.ycombinator.com/item?id=43292946) - [Microsoft is plotting a future without OpenAI](https://techstartups.com/2025/03/07/microsoft-is-plotting-a-future-without-openai/)
* [2025-03-07, 18:34:02](https://news.ycombinator.com/item?id=43292820) - [Age Verification Laws: A Backdoor to Surveillance](https://www.eff.org/deeplinks/2025/03/first-porn-now-skin-cream-age-verification-bills-are-out-control)
* [2025-03-07, 18:33:00](https://apple.slashdot.org/story/25/03/07/1833202/apple-delays-more-personalized-siri-apple-intelligence-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Delays 'More Personalized Siri' Apple Intelligence Features](https://apple.slashdot.org/story/25/03/07/1833202/apple-delays-more-personalized-siri-apple-intelligence-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 18:27:31](https://lobste.rs/s/ssvr4r/apple_has_90_days_allow_app_sideloading) - [Apple has 90 days to allow app sideloading in Brazil](https://www.theverge.com/news/625753/apple-ios-alternative-app-stores-sideloading-brazil)
* [2025-03-07, 18:06:45](https://news.ycombinator.com/item?id=43292471) - [Athena spacecraft declared dead after toppling over on moon](https://www.theguardian.com/science/2025/mar/07/athena-spacecraft-mission-dead)
* [2025-03-07, 18:00:00](https://slashdot.org/story/25/03/07/1755246/eu-denies-picking-on-us-tech-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Denies Picking on US Tech Giants](https://slashdot.org/story/25/03/07/1755246/eu-denies-picking-on-us-tech-giants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 17:24:02](https://news.ycombinator.com/item?id=43292056) - [Introducing command And commandfor In HTML](https://developer.chrome.com/blog/command-and-commandfor)
* [2025-03-07, 17:23:28](https://news.ycombinator.com/item?id=43292050) - [Optimistic Locking in B-Trees](https://cedardb.com/blog/optimistic_btrees/)
* [2025-03-07, 17:20:00](https://science.slashdot.org/story/25/03/07/1717212/study-reveals-lab-size-impacts-phd-students-academic-careers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Study Reveals Lab Size Impacts PhD Students' Academic Careers](https://science.slashdot.org/story/25/03/07/1717212/study-reveals-lab-size-impacts-phd-students-academic-careers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 17:12:30](https://news.ycombinator.com/item?id=43291946) - [Vtm: Text-Based Desktop Environment](https://github.com/directvt/vtm)
* [2025-03-07, 17:09:20](https://news.ycombinator.com/item?id=43291922) - [Ask HN: Do your eyes bug you even though your prescription is \"correct\"?](https://news.ycombinator.com/item?id=43291922)
* [2025-03-07, 16:40:00](https://news.slashdot.org/story/25/03/07/1616237/us-likely-to-ban-chinese-app-deepseek-from-government-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Likely To Ban Chinese App DeepSeek From Government Devices](https://news.slashdot.org/story/25/03/07/1616237/us-likely-to-ban-chinese-app-deepseek-from-government-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 15:25:13](https://news.ycombinator.com/item?id=43290892) - [Betting on the Pope was the original prediction market](https://nodumbideas.com/p/betting-on-the-pope-was-the-original)
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
* [2025-03-07, 10:16:25](https://lobste.rs/s/jxy1fj/einstein_ai_model_why_ai_won_t_bring) - [The Einstein AI model (why AI won't bring a \"compressed 21st century\")](https://thomwolf.io/blog/scientific-ai.html)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 05:33:38](https://lobste.rs/s/5pceqb/delta_chat_messenger_which_is_cross) - [Delta Chat: A Messenger which is cross compatible with email and PGP](https://delta.chat/en/help)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 23:36:51](https://lobste.rs/s/4winzr/five_years_home_cooked_apps) - [Five years of home-cooked apps](https://www.robinsloan.com/lab/five-years-of-home-cooked-apps/)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 18:48:17](https://lobste.rs/s/ehiven/succinct_data_structures) - [Succinct data structures](https://blog.startifact.com/posts/succinct/)
* [2025-03-06, 16:42:28](https://lobste.rs/s/mltpfg/xit_is_coming) - [xit is coming](https://radarroark.github.io/xit/xit-is-coming.html)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 13:08:09](https://news.ycombinator.com/item?id=43279773) - [Portable MRI Scans Patients for Signs of Stroke](https://spectrum.ieee.org/stroke-mri)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-05, 21:16:24](https://news.ycombinator.com/item?id=43272549) - [A game of learning your homelab into a cyberpunk mystery adventure](https://github.com/Fimeg/NetworkChronicles)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 14:07:24](https://news.ycombinator.com/item?id=43266546) - [The features of Python's help() function](https://www.pythonmorsels.com/help-features/)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 02:18:21](https://news.ycombinator.com/item?id=43261825) - [Integrated sensing and communication based on space-time-coding metasurfaces](https://www.nature.com/articles/s41467-025-57137-6)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-04, 22:00:08](https://news.ycombinator.com/item?id=43260251) - [Show HN: I Built a Telegraph Simulator](https://telegraph.13ug1mb.com)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 17:19:26](https://news.ycombinator.com/item?id=43257506) - [Mountains, Cliffs, and Caves: A Guide to Using Perlin Noise for Procedural Gen](https://jdhwilkins.com/mountains-cliffs-and-caves-a-comprehensive-guide-to-using-perlin-noise-for-procedural-generation/)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
