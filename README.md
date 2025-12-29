# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Technology Incidents

* [Breach Forces Ubisoft to Take 'Rainbow Six Siege' Offline](https://games.slashdot.org/story/25/12/29/0637253/breach-forces-ubisoft-to-take-rainbow-six-siege-offline?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Chatbots May Be Linked to Psychosis, Say Doctors](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft To Replace All C/C++ With Rust By 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&from=rss)

## Innovative Technologies and Tools

* [Show HN: Z80-μLM, a 'Conversational AI' That Fits in 40KB](https://github.com/HarryR/z80ai)

* [Kiorg v1.4.1 - A modern battery included file manager with vim inspired keybind](https://github.com/houqp/kiorg/releases/tag/v1.4.1)

* [A Practical Introduction to Finger Trees](https://chrispenner.ca/posts/intro-to-finger-trees)

## Explorations on AI and Censorship

* [Staying ahead of censors in 2025](https://forum.torproject.org/t/staying-ahead-of-censors-in-2025-what-weve-learned-from-fighting-censorship-in-iran-and-russia/20898)

* [Rob Pike Angered by 'AI Slop' Spam Sent By Agent Experiment](https://it.slashdot.org/story/25/12/29/004243/rob-pike-angered-by-ai-slop-spam-sent-by-agent-experiment?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Insights on Sustainability and Environment

* [There Was Some Good News on Green Energy in 2025](https://news.slashdot.org/story/25/12/28/2329200/there-was-some-good-news-on-green-energy-in-2025?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Military Planners Dread the Arctic, 'Where Drones Drop Dead and GPS Goes Haywire'](https://tech.slashdot.org/story/25/12/28/0040238/military-planners-dread-the-arctic-where-drones-drop-dead-and-gps-goes-haywire?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-12-29, 08:44:00](https://games.slashdot.org/story/25/12/29/0637253/breach-forces-ubisoft-to-take-rainbow-six-siege-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Breach Forces Ubisoft to Take &apos;Rainbow Six Siege&apos; Offline](https://games.slashdot.org/story/25/12/29/0637253/breach-forces-ubisoft-to-take-rainbow-six-siege-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 08:43:11](https://lobste.rs/s/cp4qw3/measuring_out_sync_clocks_on_internet) - [Measuring out-of-sync clocks on the Internet](https://alexsci.com/blog/clock-skew/)
* [2025-12-29, 08:12:04](https://lobste.rs/s/tqeked/shower_thoughts) - [Shower thoughts](https://www.patreon.com/posts/shower-thoughts-146872033)
* [2025-12-29, 07:50:05](https://lobste.rs/s/l4uvzn/kiorg_v1_4_1_modern_battery_included_file) - [Kiorg v1.4.1 - A modern battery included file manager with vim inspired keybind](https://github.com/houqp/kiorg/releases/tag/v1.4.1)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft To Replace All C/C++ With Rust By 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 05:55:00](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chatbots May Be Linked to Psychosis, Say Doctors](https://slashdot.org/story/25/12/29/0553256/ai-chatbots-may-be-linked-to-psychosis-say-doctors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 05:47:40](https://news.ycombinator.com/item?id=46417844) - [Staying ahead of censors in 2025](https://forum.torproject.org/t/staying-ahead-of-censors-in-2025-what-weve-learned-from-fighting-censorship-in-iran-and-russia/20898)
* [2025-12-29, 05:41:24](https://news.ycombinator.com/item?id=46417815) - [Show HN: Z80-μLM, a &apos;Conversational AI&apos; That Fits in 40KB](https://github.com/HarryR/z80ai)
* [2025-12-29, 05:35:17](https://news.ycombinator.com/item?id=46417791) - [Binaries](https://fzakaria.com/2025/12/28/huge-binaries)
* [2025-12-29, 05:35:06](https://lobste.rs/s/vyf7cf/my_first_meshtastic_network) - [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)
* [2025-12-29, 05:33:56](https://lobste.rs/s/mytglj/huge_binaries) - [Huge binaries](https://fzakaria.com/2025/12/28/huge-binaries)
* [2025-12-29, 05:25:25](https://news.ycombinator.com/item?id=46417748) - [Show HN: My not-for-profit search engine with no ads, no AI, &amp; all DDG bangs](https://nilch.org)
* [2025-12-29, 05:16:18](https://lobste.rs/s/wwczpv/practical_introduction_finger_trees) - [A Practical Introduction to Finger Trees](https://chrispenner.ca/posts/intro-to-finger-trees)
* [2025-12-29, 05:12:58](https://news.ycombinator.com/item?id=46417676) - [My First Meshtastic Network](https://rickcarlino.com/notes/electronics/my-first-meshtastic-network.html)
* [2025-12-29, 03:39:42](https://news.ycombinator.com/item?id=46417227) - [Fast GPU Interconnect over Radio](https://spectrum.ieee.org/rf-over-fiber)
* [2025-12-29, 03:32:58](https://lobste.rs/s/nik5n0/2d_distance_functions) - [2D Distance Functions](https://iquilezles.org)
* [2025-12-29, 02:47:44](https://news.ycombinator.com/item?id=46416945) - [You can make up HTML tags](https://maurycyz.com/misc/make-up-tags/)
* [2025-12-29, 02:45:47](https://lobste.rs/s/asstpu/you_can_make_up_html_tags) - [You can make up HTML tags](https://maurycyz.com/misc/make-up-tags/)
* [2025-12-29, 02:34:37](https://lobste.rs/s/wxgtha/consider_nix_flake_for_your_windows_rs) - [Consider a Nix Flake for your windows-rs Project](https://lgug2z.com/articles/consider-a-nix-flake-for-your-windows-rs-project/)
* [2025-12-29, 02:34:00](https://it.slashdot.org/story/25/12/29/004243/rob-pike-angered-by-ai-slop-spam-sent-by-agent-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rob Pike Angered by &apos;AI Slop&apos; Spam Sent By Agent Experiment](https://it.slashdot.org/story/25/12/29/004243/rob-pike-angered-by-ai-slop-spam-sent-by-agent-experiment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-29, 00:01:26](https://news.ycombinator.com/item?id=46415819) - [Show HN: My app just won best iOS Japanese learning tool of 2025 award (blog)](https://skerritt.blog/best-japanese-learning-tools-2025-award-show/)
* [2025-12-28, 23:52:24](https://lobste.rs/s/nqawul/what_unprocessed_photo_looks_like) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 23:40:00](https://news.slashdot.org/story/25/12/28/2329200/there-was-some-good-news-on-green-energy-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Was Some Good News on Green Energy in 2025](https://news.slashdot.org/story/25/12/28/2329200/there-was-some-good-news-on-green-energy-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 23:30:10](https://news.ycombinator.com/item?id=46415570) - [Fast CVVDP implementation in C](https://github.com/halidecx/fcvvdp)
* [2025-12-28, 23:23:21](https://news.ycombinator.com/item?id=46415522) - [How to complain (2024)](https://outerproduct.net/trivial/2024-03-25_complain.html)
* [2025-12-28, 23:11:50](https://news.ycombinator.com/item?id=46415458) - [Spherical Cow](https://lib.rs/crates/spherical-cow)
* [2025-12-28, 23:10:13](https://news.ycombinator.com/item?id=46415448) - [Slaughtering Competition Problems with Quantifier Elimination (2021)](https://grossack.site/2021/12/22/qe-competition.html)
* [2025-12-28, 23:09:20](https://lobste.rs/s/lem8bj/slaughtering_competition_problems_with) - [Slaughtering Competition Problems with Quantifier Elimination](https://grossack.site/2021/12/22/qe-competition.html)
* [2025-12-28, 22:52:21](https://news.ycombinator.com/item?id=46415338) - [As AI gobbles up chips, prices for devices may rise](https://www.npr.org/2025/12/28/nx-s1-5656190/ai-chips-memory-prices-ram)
* [2025-12-28, 22:40:00](https://entertainment.slashdot.org/story/25/12/28/2238219/no-happy-ending-for-movie-theatres-argues-wsj---no-matter-who-wins-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;No Happy Ending for Movie Theatres&apos;, Argues WSJ - No Matter Who Wins Warner Bros.](https://entertainment.slashdot.org/story/25/12/28/2238219/no-happy-ending-for-movie-theatres-argues-wsj---no-matter-who-wins-warner-bros?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 22:35:02](https://news.ycombinator.com/item?id=46415225) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 22:23:33](https://news.ycombinator.com/item?id=46415129) - [Researchers discover molecular difference in autistic brains](https://medicine.yale.edu/news-article/molecular-difference-in-autistic-brains/)
* [2025-12-28, 22:17:33](https://lobste.rs/s/eikvgi/experiment_vibe_coding) - [An experiment in vibe coding](https://nolanlawson.com/2025/12/28/an-experiment-in-vibe-coding/)
* [2025-12-28, 21:45:44](https://news.ycombinator.com/item?id=46414837) - [Why I Disappeared – My week with minimal internet in a remote island chain](https://www.kenklippenstein.com/p/why-i-disappeared)
* [2025-12-28, 21:41:42](https://news.ycombinator.com/item?id=46414819) - [Unity&apos;s Mono problem: Why your C# code runs slower than it should](https://marekfiser.com/blog/mono-vs-dot-net-in-unity/)
* [2025-12-28, 21:29:32](https://news.ycombinator.com/item?id=46414723) - [Software engineers should be a little bit cynical](https://www.seangoedecke.com/a-little-bit-cynical/)
* [2025-12-28, 21:03:03](https://news.ycombinator.com/item?id=46414475) - [MongoBleed Explained Simply](https://bigdata.2minutestreaming.com/p/mongobleed-explained-simply)
* [2025-12-28, 21:00:00](https://apple.slashdot.org/story/25/12/28/2048225/did-tim-cook-post-ai-slop-in-his-christmas-message-promoting-pluribus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Tim Cook Post AI Slop in His Christmas Message Promoting &apos;Pluribus&apos;?](https://apple.slashdot.org/story/25/12/28/2048225/did-tim-cook-post-ai-slop-in-his-christmas-message-promoting-pluribus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 20:02:50](https://news.ycombinator.com/item?id=46413975) - [PySDR: A Guide to SDR and DSP Using Python](https://pysdr.org/content/intro.html)
* [2025-12-28, 20:00:00](https://mobile.slashdot.org/story/25/12/28/197250/texas-father-rescues-kidnapped-15-year-old-daughter-after-tracking-her-phones-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Father Rescues Kidnapped 15-Year-Old Daughter After Tracking Her Phone&apos;s Location ](https://mobile.slashdot.org/story/25/12/28/197250/texas-father-rescues-kidnapped-15-year-old-daughter-after-tracking-her-phones-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 19:09:51](https://lobste.rs/s/cogzfg/parsing_advances) - [Parsing Advances](https://matklad.github.io/2025/12/28/parsing-advances.html)
* [2025-12-28, 18:58:00](https://news.slashdot.org/story/25/12/28/1855208/up-next-for-arduino-after-qualcomm-acquisition-high-performance-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Up Next for Arduino After Qualcomm Acquisition: High-Performance Computing](https://news.slashdot.org/story/25/12/28/1855208/up-next-for-arduino-after-qualcomm-acquisition-high-performance-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 18:43:54](https://news.ycombinator.com/item?id=46413365) - [Remembering Lou Gerstner](https://newsroom.ibm.com/2025-12-28-Remembering-Lou-Gerstner)
* [2025-12-28, 17:34:26](https://lobste.rs/s/ysubgx/haskelling_my_typst) - [Haskelling My Typst](https://unnamed.website/posts/haskelling-my-typst/)
* [2025-12-28, 17:34:00](https://tech.slashdot.org/story/25/12/28/035234/googles-ai-overview-wrongly-accused-a-musician-of-being-a-sex-offender?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;AI Overview&apos; Wrongly Accused a Musician of Being a Sex Offender](https://tech.slashdot.org/story/25/12/28/035234/googles-ai-overview-wrongly-accused-a-musician-of-being-a-sex-offender?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 17:21:07](https://lobste.rs/s/xs3arv/tiny_types_first_schema_validation_for) - [Tiny, types-first schema validation for TypeScript](https://github.com/easrng/schema)
* [2025-12-28, 17:11:29](https://lobste.rs/s/u8fjey/solve_hi_q_with_alphazero_curriculum) - [Solve Hi-Q with AlphaZero and Curriculum Learning](https://www.robw.fyi/2025/12/28/solve-hi-q-with-alphazero-and-curriculum-learning/)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 16:34:00](https://hardware.slashdot.org/story/25/12/28/0524219/how-will-rising-ram-prices-affect-laptop-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Will Rising RAM Prices Affect Laptop Companies?](https://hardware.slashdot.org/story/25/12/28/0524219/how-will-rising-ram-prices-affect-laptop-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 15:34:00](https://yro.slashdot.org/story/25/12/28/0642206/challenges-face-european-governments-pursuing-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Challenges Face European Governments Pursuing &apos;Digital Sovereignty&apos;](https://yro.slashdot.org/story/25/12/28/0642206/challenges-face-european-governments-pursuing-digital-sovereignty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 14:03:56](https://lobste.rs/s/88f05r/i_was_wrong_about_typescript_part_1) - [I was wrong about typescript part 1](https://chefama.blog/blog/posts/i-was-wrong-about-typescript-1)
* [2025-12-28, 12:34:00](https://science.slashdot.org/story/25/12/28/0234206/is-dark-energy-weakening?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Dark Energy Weakening?](https://science.slashdot.org/story/25/12/28/0234206/is-dark-energy-weakening?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 08:37:00](https://it.slashdot.org/story/25/12/28/023202/sal-khan-companies-should-give-1-of-profits-to-retrain-workers-displaced-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sal Khan: Companies Should Give 1% of Profits To Retrain Workers Displaced By AI](https://it.slashdot.org/story/25/12/28/023202/sal-khan-companies-should-give-1-of-profits-to-retrain-workers-displaced-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 08:16:05](https://lobste.rs/s/h5nde9/modern_recommender_model_architecture) - [A Modern Recommender Model Architecture](https://cprimozic.net/blog/anime-recommender-model-architecture/)
* [2025-12-28, 08:08:16](https://lobste.rs/s/l9jl7h/dangers_ssl_certificates) - [The dangers of SSL certificates](https://surfingcomplexity.blog/2025/12/27/the-dangers-of-ssl-certificates/)
* [2025-12-28, 06:43:25](https://news.ycombinator.com/item?id=46408988) - [Growing up in “404 Not Found”: China&apos;s nuclear city in the Gobi Desert](https://substack.com/inbox/post/182743659)
* [2025-12-28, 06:42:53](https://news.ycombinator.com/item?id=46408984) - [C++ says “We have try... finally at home”](https://devblogs.microsoft.com/oldnewthing/20251222-00/?p=111890)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 04:44:00](https://tech.slashdot.org/story/25/12/28/0040238/military-planners-dread-the-arctic-where-drones-drop-dead-and-gps-goes-haywire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military Planners Dread the Arctic, &apos;Where Drones Drop Dead and GPS Goes Haywire&apos;](https://tech.slashdot.org/story/25/12/28/0040238/military-planners-dread-the-arctic-where-drones-drop-dead-and-gps-goes-haywire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 04:24:51](https://lobste.rs/s/fng667/replacing_js_with_just_html) - [Replacing JS with just HTML](https://www.htmhell.dev/adventcalendar/2025/27/)
* [2025-12-28, 04:23:56](https://lobste.rs/s/c7jhl3/production_bug_made_me_care_about) - [The production bug that made me care about undefined behavior](https://gaultier.github.io/blog/the_production_bug_that_made_me_care_about_undefined_behavior.html)
* [2025-12-28, 04:12:07](https://lobste.rs/s/xcjlvw/rust_errors_without_dependencies) - [Rust Errors Without Dependencies](https://vincents.dev/blog/rust-errors-without-dependencies/)
* [2025-12-28, 01:34:00](https://slashdot.org/story/25/12/27/2347200/openai-is-hiring-a-new-head-of-preparedness-to-predictmitigate-ais-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI is Hiring a New &apos;Head of Preparedness&apos; to Predict/Mitigate AI&apos;s Harms](https://slashdot.org/story/25/12/27/2347200/openai-is-hiring-a-new-head-of-preparedness-to-predictmitigate-ais-harms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-27, 22:28:50](https://lobste.rs/s/dl3hxi/39c3_sign_not_sign_practical) - [39C3: To sign or not to sign: Practical vulnerabilities in GPG &amp; friends](https://media.ccc.de/v/39c3-to-sign-or-not-to-sign-practical-vulnerabilities-i)
* [2025-12-27, 20:56:37](https://lobste.rs/s/387hab/on_llms_programming) - [On LLMs in programming](https://blog.danieljanus.pl/2025/12/27/llms/)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 15:00:28](https://lobste.rs/s/byxxmk/why_is_calling_my_asm_function_from_rust) - [Why is calling my asm function from Rust slower than calling it from C?](https://ohadravid.github.io/posts/2025-12-rav1d-faster-asm/)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 09:52:03](https://news.ycombinator.com/item?id=46400564) - [Formulaic Delimiters in the Iliad and the Odyssey](https://glthr.com/formulaic-delimiters-in-the-iliad-and-the-odyssey)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-26, 22:15:52](https://news.ycombinator.com/item?id=46396912) - [Mouse: Computer Programming Language](http://mouse.davidgsimpson.com/)
* [2025-12-26, 22:06:15](https://news.ycombinator.com/item?id=46396824) - [Developing a Beautiful and Performant Block Editor in Qt C++ and QML](https://rubymamistvalove.com/block-editor)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 10:42:46](https://news.ycombinator.com/item?id=46383593) - [Line scan camera image processing](https://daniel.lawrence.lu/blog/2025-09-21-line-scan-camera-image-processing/)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
