# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Developments

* [Anthropic Bags Key 'Fair Use' Win For AI Platforms, But Faces Trial Over Damages For Millions of Pirated Works](https://yro.slashdot.org/story/25/06/24/1519209/anthropic-bags-key-fair-use-win-for-ai-platforms-but-faces-trial-over-damages-for-millions-of-pirated-works?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Anthropic, OpenAI and Others Discover AI Models Give Answers That Contradict Their Own Reasoning](https://slashdot.org/story/25/06/24/1359202/anthropic-openai-and-others-discover-ai-models-give-answers-that-contradict-their-own-reasoning?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Goldman Sachs Launches AI Assistant Firmwide, With 10,000 Employees Already Using It](https://slashdot.org/story/25/06/24/006220/goldman-sachs-launches-ai-assistant-firmwide-with-10000-employees-already-using-it?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Software Updates

* [Fixes for five Lix CVEs](https://lix.systems/blog/2025-06-24-lix-cves/)

* [New Firefox Add-On Policies](https://blog.mozilla.org/addons/2025/06/23/updated-add-on-policies-simplified-clarified/)

* [Firefox 140 Released With "Unload Tab", CSS Custom Highlighting API](https://www.phoronix.com/news/Firefox-140)

## Unique Finds and Historical Discoveries

* [Finding a 27-year-old easter egg in the Power Mac G3 ROM](https://www.downtowndougbrown.com/2025/06/finding-a-27-year-old-easter-egg-in-the-power-mac-g3-rom/)

* [Skip the Design Patterns Architecting with Nouns and Verbs](https://www.youtube.com/watch?v=v-N6r8lcsNc)

* [Interesting Bits of Postgres Grammar](https://steve.dignam.xyz/2025/06/20/interesting-bits-of-postgres-grammar/)

## Technology and Tools Innovations

* [Show HN: Oasis – an open-source, 3D-printed smart terrarium](https://github.com/justbuchanan/oasis)

* [Blockdiff: How we built our own file format for VM disk snapshots](https://cognition.ai/blog/blockdiff)

* [Starship: The minimal, fast, and customizable prompt for any shell](https://starship.rs/)

* [Show HN: Autumn – Open-source infra over Stripe](https://github.com/useautumn/autumn)

## Environment and Sustainability

* [Amazon Bringing Same-Day Delivery To 'Millions' of Rural Customers](https://slashdot.org/story/25/06/24/1440237/amazon-bringing-same-day-delivery-to-millions-of-rural-customers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China Smashes Solar Installation Record In May](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Human Interest and Societal Impacts

* [The United States has lower life expectancy than most similarly wealthy nations](https://www.nature.com/articles/d41586-025-01969-1)

* [PlasticList – Plastic Levels in Foods](https://www.plasticlist.org/)

* [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&from=rss)

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

* [2025-06-24, 15:31:56](https://lobste.rs/s/ihlmb2/fixes_for_five_lix_cves) - [Fixes for five Lix CVEs](https://lix.systems/blog/2025-06-24-lix-cves/)
* [2025-06-24, 15:28:13](https://lobste.rs/s/xzoth8/nix_development_setup_for_factor) - [Nix Development Setup for Factor](https://toast.al/posts/softwarecraft/2025-06-24_factor-nix-dev-environment/)
* [2025-06-24, 15:20:00](https://yro.slashdot.org/story/25/06/24/1519209/anthropic-bags-key-fair-use-win-for-ai-platforms-but-faces-trial-over-damages-for-millions-of-pirated-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Bags Key &apos;Fair Use&apos; Win For AI Platforms, But Faces Trial Over Damages For Millions of Pirated Works](https://yro.slashdot.org/story/25/06/24/1519209/anthropic-bags-key-fair-use-win-for-ai-platforms-but-faces-trial-over-damages-for-millions-of-pirated-works?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 15:09:12](https://news.ycombinator.com/item?id=44367084) - [Writing toy software is a joy](https://blog.jsbarretto.com/post/software-is-joy)
* [2025-06-24, 15:07:49](https://news.ycombinator.com/item?id=44367071) - [Nordic Semiconductor Acquires Memfault](https://www.nordicsemi.com/Nordic-news/2025/06/Nordic-Semiconductor-acquires-Memfault)
* [2025-06-24, 14:59:38](https://news.ycombinator.com/item?id=44366987) - [New Firefox Add-On Policies](https://blog.mozilla.org/addons/2025/06/23/updated-add-on-policies-simplified-clarified/)
* [2025-06-24, 14:40:00](https://slashdot.org/story/25/06/24/1440237/amazon-bringing-same-day-delivery-to-millions-of-rural-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Bringing Same-Day Delivery To &apos;Millions&apos; of Rural Customers](https://slashdot.org/story/25/06/24/1440237/amazon-bringing-same-day-delivery-to-millions-of-rural-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 14:30:50](https://news.ycombinator.com/item?id=44366679) - [The United States has lower life expectancy than most similarly wealthy nations](https://www.nature.com/articles/d41586-025-01969-1)
* [2025-06-24, 14:18:11](https://news.ycombinator.com/item?id=44366548) - [PlasticList – Plastic Levels in Foods](https://www.plasticlist.org/)
* [2025-06-24, 14:14:03](https://news.ycombinator.com/item?id=44366494) - [The Bitter Lesson is coming for Tokenization](https://lucalp.dev/bitter-lesson-tokenization-and-blt/)
* [2025-06-24, 14:12:06](https://lobste.rs/s/hyyggn/bitter_lesson_is_coming_for_tokenization) - [The Bitter Lesson is coming for Tokenization](https://lucalp.dev/bitter-lesson-tokenization-and-blt)
* [2025-06-24, 14:08:38](https://lobste.rs/s/onhha0/everyone_should_copy_thunderbird_s) - [Everyone should copy Thunderbird&apos;s donation model](https://blog.cyrneko.eu/everyone-should-copy-thunderbird)
* [2025-06-24, 14:05:10](https://news.ycombinator.com/item?id=44366409) - [Gemini Robotics On-Device brings AI to local robotic devices](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/)
* [2025-06-24, 14:03:41](https://news.ycombinator.com/item?id=44366395) - [Show HN: Oasis – an open-source, 3D-printed smart terrarium](https://github.com/justbuchanan/oasis)
* [2025-06-24, 14:00:00](https://slashdot.org/story/25/06/24/1359202/anthropic-openai-and-others-discover-ai-models-give-answers-that-contradict-their-own-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic, OpenAI and Others Discover AI Models Give Answers That Contradict Their Own Reasoning](https://slashdot.org/story/25/06/24/1359202/anthropic-openai-and-others-discover-ai-models-give-answers-that-contradict-their-own-reasoning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 13:58:37](https://lobste.rs/s/vyxvaf/finding_27_year_old_easter_egg_power_mac_g3) - [Finding a 27-year-old easter egg in the Power Mac G3 ROM](https://www.downtowndougbrown.com/2025/06/finding-a-27-year-old-easter-egg-in-the-power-mac-g3-rom/)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 13:06:45](https://news.ycombinator.com/item?id=44365806) - [Finding a 27-year-old easter egg in the Power Mac G3 ROM](https://www.downtowndougbrown.com/2025/06/finding-a-27-year-old-easter-egg-in-the-power-mac-g3-rom/)
* [2025-06-24, 12:48:48](https://news.ycombinator.com/item?id=44365620) - [Show HN: Autumn – Open-source infra over Stripe](https://github.com/useautumn/autumn)
* [2025-06-24, 12:33:05](https://lobste.rs/s/jtaxsr/blockdiff_how_we_built_our_own_file_format) - [Blockdiff: How we built our own file format for VM disk snapshots](https://cognition.ai/blog/blockdiff)
* [2025-06-24, 12:15:12](https://news.ycombinator.com/item?id=44365320) - [Basic Facts about GPUs](https://damek.github.io/random/basic-facts-about-gpus/)
* [2025-06-24, 12:14:39](https://lobste.rs/s/k51zlb/waiting_for_sql_202y_vectors) - [Waiting for SQL:202y: Vectors](http://peter.eisentraut.org/blog/2025/06/24/waiting-for-sql-202y-vectors)
* [2025-06-24, 11:11:52](https://news.ycombinator.com/item?id=44364874) - [Starship: The minimal, fast, and customizable prompt for any shell](https://starship.rs/)
* [2025-06-24, 10:38:37](https://lobste.rs/s/odv1yf/lr_1_parse_tables_generator) - [LR(1) parse-tables generator](https://github.com/wldfngrs/parser-generator)
* [2025-06-24, 10:10:42](https://news.ycombinator.com/item?id=44364541) - [Circular Microcomputers embedded and powered by repurposed smartphone components](https://citronics.eu/)
* [2025-06-24, 10:00:00](https://hardware.slashdot.org/story/25/06/23/2348224/ford-plows-ahead-on-ev-battery-factory-amid-political-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Plows Ahead On EV Battery Factory Amid Political Storm](https://hardware.slashdot.org/story/25/06/23/2348224/ford-plows-ahead-on-ev-battery-factory-amid-political-storm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 09:46:27](https://news.ycombinator.com/item?id=44364406) - [Switching Pip to Uv in a Dockerized Flask / Django App](https://nickjanetakis.com/blog/switching-pip-to-uv-in-a-dockerized-flask-or-django-app)
* [2025-06-24, 09:45:37](https://lobste.rs/s/t3lq2k/bazel_s_original_sins) - [Bazel’s Original Sins](https://fzakaria.com/2025/06/22/bazel-s-original-sins)
* [2025-06-24, 09:11:32](https://news.ycombinator.com/item?id=44364216) - [Retrieval Augmented Generation Based on SQLite](https://github.com/ggozad/haiku.rag)
* [2025-06-24, 08:52:32](https://lobste.rs/s/ove4dc/lifetime_dispersion_generational_gc) - [Lifetime Dispersion and Generational GC: An Intellectual Abstract](https://dl.acm.org/doi/10.1145/3735950.3735958)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 08:14:47](https://lobste.rs/s/gusint/onion_services_design_protocol) - [Onion Services: Design, Protocol and Implementation](https://media.ccc.de/v/gpn23-52-onion-services-design-protocol-and-implementation)
* [2025-06-24, 07:29:08](https://news.ycombinator.com/item?id=44363696) - [Solving LinkedIn Queens Using Haskell](https://imiron.io/post/linkedin-queens/)
* [2025-06-24, 07:00:00](https://slashdot.org/story/25/06/24/006220/goldman-sachs-launches-ai-assistant-firmwide-with-10000-employees-already-using-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Goldman Sachs Launches AI Assistant Firmwide, With 10,000 Employees Already Using It](https://slashdot.org/story/25/06/24/006220/goldman-sachs-launches-ai-assistant-firmwide-with-10000-employees-already-using-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 06:43:19](https://lobste.rs/s/y84yvs/why_do_some_language_models_fake) - [Why Do Some Language Models Fake Alignment While Others Don’t?](https://arxiv.org/html/2506.18032v1)
* [2025-06-24, 06:25:10](https://lobste.rs/s/gqhd8m/firefox_140_released_with_unload_tab_css) - [Firefox 140 Released With \&quot;Unload Tab\&quot;, CSS Custom Highlighting API](https://www.phoronix.com/news/Firefox-140)
* [2025-06-24, 04:23:18](https://lobste.rs/s/zstycv/skip_design_patterns_architecting_with) - [Skip the Design Patterns Architecting with Nouns and Verbs](https://www.youtube.com/watch?v=v-N6r8lcsNc)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
* [2025-06-24, 03:30:00](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Smashes Solar Installation Record In May](https://hardware.slashdot.org/story/25/06/23/2342253/china-smashes-solar-installation-record-in-may?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 02:13:02](https://news.ycombinator.com/item?id=44362272) - [Can your terminal do emojis? How big?](https://dgl.cx/2025/06/can-your-terminal-do-emojis)
* [2025-06-24, 01:28:37](https://lobste.rs/s/r0txxp/interesting_bits_postgres_grammar) - [Interesting Bits of Postgres Grammar](https://steve.dignam.xyz/2025/06/20/interesting-bits-of-postgres-grammar/)
* [2025-06-24, 01:25:00](https://games.slashdot.org/story/25/06/23/2356213/xbox-app-for-pc-now-integrates-your-steam-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox App For PC Now Integrates Your Steam Games](https://games.slashdot.org/story/25/06/23/2356213/xbox-app-for-pc-now-integrates-your-steam-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:45:00](https://tech.slashdot.org/story/25/06/23/2140208/microsoft-sets-new-60-day-limit-for-system-restore-points-in-windows-11-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Sets New 60-Day Limit For System Restore Points In Windows 11 Update](https://tech.slashdot.org/story/25/06/23/2140208/microsoft-sets-new-60-day-limit-for-system-restore-points-in-windows-11-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:20:00](https://slashdot.org/story/25/06/23/2324250/hinge-ceo-says-dating-ai-chatbots-is-playing-with-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hinge CEO Says Dating AI Chatbots Is &apos;Playing With Fire&apos;](https://slashdot.org/story/25/06/23/2324250/hinge-ceo-says-dating-ai-chatbots-is-playing-with-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-24, 00:03:56](https://news.ycombinator.com/item?id=44361494) - [FICO to incorporate buy-now-pay-later loans into credit scores](https://www.axios.com/2025/06/23/fico-credit-scores-bnpl-buy-now-pay-later)
* [2025-06-24, 00:02:00](https://news.slashdot.org/story/25/06/23/2054229/magic-lantern-software-for-canon-cameras-is-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Magic Lantern Software for Canon Cameras Is Back](https://news.slashdot.org/story/25/06/23/2054229/magic-lantern-software-for-canon-cameras-is-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 23:40:00](https://ask.slashdot.org/story/25/06/23/2313202/ask-slashdot-printer-recommendation-for-family-with-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Printer Recommendation For Family With Kids?](https://ask.slashdot.org/story/25/06/23/2313202/ask-slashdot-printer-recommendation-for-family-with-kids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 23:20:00](https://news.slashdot.org/story/25/06/23/2046259/ubuntu-to-disable-intel-graphics-security-mitigations-to-boost-gpu-performance-by-up-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu To Disable Intel Graphics Security Mitigations To Boost GPU Performance By Up To 20%](https://news.slashdot.org/story/25/06/23/2046259/ubuntu-to-disable-intel-graphics-security-mitigations-to-boost-gpu-performance-by-up-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 22:52:00](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss)
* [2025-06-23, 22:40:00](https://yro.slashdot.org/story/25/06/23/2039253/judge-denies-creating-mass-surveillance-program-harming-all-chatgpt-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Denies Creating &apos;Mass Surveillance Program&apos; Harming All ChatGPT Users](https://yro.slashdot.org/story/25/06/23/2039253/judge-denies-creating-mass-surveillance-program-harming-all-chatgpt-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 22:00:00](https://apple.slashdot.org/story/25/06/23/2023213/ios-26-allows-you-to-restore-any-iphone-without-a-mac-or-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26 Allows You To Restore Any iPhone Without a Mac or PC](https://apple.slashdot.org/story/25/06/23/2023213/ios-26-allows-you-to-restore-any-iphone-without-a-mac-or-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 21:22:00](https://science.slashdot.org/story/25/06/23/2015258/phd-graduates-far-exceed-academic-job-openings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhD Graduates Far Exceed Academic Job Openings](https://science.slashdot.org/story/25/06/23/2015258/phd-graduates-far-exceed-academic-job-openings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-23, 19:56:58](https://lobste.rs/s/ybf4ss/alden_detachable_terminal_sessions) - [alden: detachable terminal sessions without breaking scrollback](https://ansuz.sooke.bc.ca/entry/389)
* [2025-06-23, 19:09:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss) - [US and Allied Base  Al Udeid in Qatar Attacked](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss)
* [2025-06-23, 18:08:00](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss)
* [2025-06-23, 17:21:57](https://lobste.rs/s/6pk5gf/moonbase_alpha_time_nasa_made_meme_video) - [Moonbase Alpha: That time NASA made a meme video game](https://www.spacebar.news/moonbase-alpha-nasa-video-game/)
* [2025-06-23, 16:25:48](https://news.ycombinator.com/item?id=44357391) - [Show HN: Weather Watching](https://walzr.com/weather-watching)
* [2025-06-23, 15:41:00](https://news.ycombinator.com/item?id=44356890) - [Vera C. Rubin Observatory first images](https://rubinobservatory.org/news/rubin-first-look/cosmic-treasure-chest)
* [2025-06-23, 15:22:07](https://lobste.rs/s/hvrgxz/go_should_be_more_opinionated) - [Go should be more opinionated](https://eltonminetto.dev/en/post/2025-06-19-go-more-opinated/)
* [2025-06-23, 15:14:29](https://news.ycombinator.com/item?id=44356646) - [How I use my terminal](https://jyn.dev/how-i-use-my-terminal/)
* [2025-06-23, 14:46:30](https://lobste.rs/s/ygd1d8/making_tramp_go_brrrr) - [Making TRAMP go Brrrr…](https://coredumped.dev/2025/06/18/making-tramp-go-brrrr./)
* [2025-06-23, 14:26:42](https://lobste.rs/s/hacouy/how_i_use_my_terminal) - [how i use my terminal](https://jyn.dev/how-i-use-my-terminal/)
* [2025-06-23, 14:00:53](https://lobste.rs/s/obsh1m/how_store_go_pointers_from_assembly) - [How to store Go pointers from assembly](https://mazzo.li/posts/go-asm-pointers.html)
* [2025-06-23, 13:30:58](https://lobste.rs/s/9gqnkj/solving_linkedin_queens_using_minizinc) - [Solving LinkedIn Queens using MiniZinc](https://zayenz.se/blog/post/linkedin-queens/)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 12:45:39](https://lobste.rs/s/ib1hj9/family_openssl_forks) - [A family of OpenSSL forks](https://daniel.haxx.se/blog/2025/06/23/a-family-of-forks/)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 06:39:20](https://news.ycombinator.com/item?id=44353055) - [Timdle – Place historical events in chronological order](https://www.timdle.com/)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
* [2025-06-22, 23:20:00](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss) - [Gartner: ‘AI is Not Doing its Job and Should Leave Us Alone’](https://soylentnews.org/article.pl?sid=25/06/22/0326239&amp;from=rss)
* [2025-06-22, 21:10:35](https://lobste.rs/s/pdrso1/i_wrote_my_phd_thesis_typst) - [I wrote my PhD Thesis in Typst](https://fransskarman.com/phd_thesis_in_typst.html)
* [2025-06-22, 18:35:00](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss) - [Book Documents the Rise and Fall of the Concept of the Private Life](https://soylentnews.org/article.pl?sid=25/06/22/0319216&amp;from=rss)
* [2025-06-22, 17:06:42](https://lobste.rs/s/a9ve6f/my_first_impressions_gleam) - [My First Impressions of Gleam](https://mtlynch.io/notes/gleam-first-impressions/)
* [2025-06-22, 13:51:00](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss) - [Dr. Demento Announces Retirement From Radio After 55 Years](https://soylentnews.org/article.pl?sid=25/06/21/1934229&amp;from=rss)
* [2025-06-22, 09:04:00](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss) - [Dead NASA Satellite Unexpectedly Emits Powerful Radio Pulse](https://soylentnews.org/article.pl?sid=25/06/21/1928245&amp;from=rss)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [UPDATED: USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 16:30:40](https://news.ycombinator.com/item?id=44338793) - [MCP is eating the world](https://www.stainless.com/blog/mcp-is-eating-the-world--and-its-here-to-stay)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 08:18:39](https://news.ycombinator.com/item?id=44335701) - [A brief history of hardware epidemics](https://eclecticlight.co/2025/06/21/a-brief-history-of-hardware-epidemics/)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:19:52](https://news.ycombinator.com/item?id=44333033) - [The FPGA turns 40](https://www.adiuvoengineering.com/post/the-fpga-turns-40)
* [2025-06-20, 20:34:28](https://news.ycombinator.com/item?id=44331827) - [Svalboard: Datahand Lives](https://svalboard.com/)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 18:34:21](https://news.ycombinator.com/item?id=44330585) - [How Cloudflare blocked a monumental 7.3 Tbps DDoS attack](https://blog.cloudflare.com/defending-the-internet-how-cloudflare-blocked-a-monumental-7-3-tbps-ddos/)
* [2025-06-20, 16:55:39](https://news.ycombinator.com/item?id=44329658) - [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys)
* [2025-06-20, 15:21:26](https://news.ycombinator.com/item?id=44328575) - [Is mathematics mostly chaos or mostly order?](https://www.quantamagazine.org/is-mathematics-mostly-chaos-or-mostly-order-20250620/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 14:14:05](https://news.ycombinator.com/item?id=44327942) - [Amoeba: A distributed operating system for the 1990s (1990) [pdf]](https://www.cs.cornell.edu/home/rvr/papers/Amoeba1990s.pdf)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
