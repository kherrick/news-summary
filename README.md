# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [Dela: a task runner that delegates the work to other tools](https://github.com/aleyan/dela) ([article](https://lobste.rs/s/rc1hkq/dela_task_runner_delegates_work_other), [comments](https://lobste.rs/s/rc1hkq/dela_task_runner_delegates_work_other))

* [logis - an automatic scientific log in your git commit history](https://github.com/flywhl/logis) ([article](https://lobste.rs/s/wxqmyd/logis_automatic_scientific_log_your_git), [comments](https://lobste.rs/s/wxqmyd/logis_automatic_scientific_log_your_git))

* [Flea-Scope: $18 Source Available USB Oscilloscope, Logic Analyzer and More [pdf]](https://rtestardi.github.io/usbte/flea-scope.pdf) ([article](https://news.ycombinator.com/item?id=43068585), [comments](https://news.ycombinator.com/item?id=43068585))

## Science and Research

* [Time Flows Forward or Backward At Quantum Levels, Researchers Suggest](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([article](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed), [comments](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) ([article](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss), [comments](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss))

## Tech Commentary and Critique

* [IPv6 Is Hard](https://techlog.jenslink.net/posts/ipv6-is-hard/) ([article](https://news.ycombinator.com/item?id=43069533), [comments](https://news.ycombinator.com/item?id=43069533))

* [Why I'm leaving Elm (2020)](https://lukeplant.me.uk/blog/posts/why-im-leaving-elm/) ([article](https://news.ycombinator.com/item?id=43069475), [comments](https://news.ycombinator.com/item?id=43069475))

* [AI Bugs Could Delay Upgrades for Both Siri and Alexa](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([article](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed), [comments](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Artificial Intelligence

* [Lawsuit Accuses Meta Of Training AI On Torrented 82TB Dataset Of Pirated Books](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([article](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed), [comments](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Notes: AI Copilot Code Quality](https://kracekumar.com/post/ai_copilot_code_quality_paper/) ([article](https://lobste.rs/s/vu3fsc/notes_ai_copilot_code_quality), [comments](https://lobste.rs/s/vu3fsc/notes_ai_copilot_code_quality))

## Cultural and Artistic Reflections

* [What If People Like AI-Generated Art Better?](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([article](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed), [comments](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Half-Life 2 and Dishonored art lead Viktor Antonov has died](https://www.eurogamer.net/half-life-2-and-dishonored-art-lead-viktor-antonov-dies-aged-just-52) ([article](https://news.ycombinator.com/item?id=43069514), [comments](https://news.ycombinator.com/item?id=43069514))

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

* [2025-02-16, 19:02:58](https://lobste.rs/s/rc1hkq/dela_task_runner_delegates_work_other) - [Dela: a task runner that delegates the work to other tools](https://github.com/aleyan/dela)
* [2025-02-16, 18:53:00](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Time Flows Forward or Backward At Quantum Levels, Researchers Suggest](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 18:13:21](https://news.ycombinator.com/item?id=43070155) - [Kindle is removing download and transfer option on Feb 26th](https://old.reddit.com/r/kindle/comments/1inr9uy/fyi_amazon_is_removing_download_transfer_option/)
* [2025-02-16, 18:07:11](https://lobste.rs/s/g8sxsf/arithmetic_with_continued_fractions) - [Arithmetic with Continued Fractions](https://perl.plover.com/yak/cftalk/)
* [2025-02-16, 17:56:15](https://news.ycombinator.com/item?id=43070025) - [Caddy – The Ultimate Server with Automatic HTTPS](https://caddyserver.com/)
* [2025-02-16, 17:34:00](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [What If People Like AI-Generated Art Better?](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 17:29:01](https://lobste.rs/s/mk577n/civic_tech_s_third_wave) - [Civic Tech's Third Wave](https://www.jpt.sh/posts/third-wave-civic-tech/)
* [2025-02-16, 17:14:25](https://lobste.rs/s/xjrlj2/how_android_s_calculator_works_with_real) - [How Android's calculator works with real numbers](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 17:04:09](https://news.ycombinator.com/item?id=43069533) - [IPv6 Is Hard](https://techlog.jenslink.net/posts/ipv6-is-hard/)
* [2025-02-16, 17:03:52](https://lobste.rs/s/n6xa0s/unexpected_uses_gf2p8affineqb_bit) - [Unexpected uses of the GF2P8AFFINEQB bit matrix multiply instruction](https://gist.github.com/animetosho/d3ca95da2131b5813e16b5bb1b137ca0)
* [2025-02-16, 17:01:34](https://news.ycombinator.com/item?id=43069514) - [Half-Life 2 and Dishonored art lead Viktor Antonov has died](https://www.eurogamer.net/half-life-2-and-dishonored-art-lead-viktor-antonov-dies-aged-just-52)
* [2025-02-16, 16:57:05](https://news.ycombinator.com/item?id=43069475) - [Why I'm leaving Elm (2020)](https://lukeplant.me.uk/blog/posts/why-im-leaving-elm/)
* [2025-02-16, 16:49:27](https://news.ycombinator.com/item?id=43069424) - [Doubts remain over reliability of Texas power grid](https://www.npr.org/2025/02/14/nx-s1-5289877/texas-power-grid-after-outage)
* [2025-02-16, 16:45:26](https://news.ycombinator.com/item?id=43069399) - [United States Power Outage Map](https://poweroutage.us/)
* [2025-02-16, 16:34:00](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lawsuit Accuses Meta Of Training AI On Torrented 82TB Dataset Of Pirated Books](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 15:44:05](https://news.ycombinator.com/item?id=43068884) - [Vim after Bram: a core maintainer on how they've kept it going](https://thenewstack.io/vim-after-bram-a-core-maintainer-on-how-theyve-kept-it-going/)
* [2025-02-16, 15:34:00](https://hardware.slashdot.org/story/25/02/16/0241242/amazon-tests-robots-for-automating-fulfillment-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Tests Robots For Automating Fulfillment Centers](https://hardware.slashdot.org/story/25/02/16/0241242/amazon-tests-robots-for-automating-fulfillment-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 15:13:50](https://lobste.rs/s/wxqmyd/logis_automatic_scientific_log_your_git) - [logis - an automatic scientific log in your git commit history](https://github.com/flywhl/logis)
* [2025-02-16, 15:08:31](https://news.ycombinator.com/item?id=43068585) - [Flea-Scope: $18 Source Available USB Oscilloscope, Logic Analyzer and More [pdf]](https://rtestardi.github.io/usbte/flea-scope.pdf)
* [2025-02-16, 14:26:55](https://news.ycombinator.com/item?id=43068283) - [Rethinking the C Time API](https://oliverkwebb.github.io/articles/newtime/)
* [2025-02-16, 12:34:00](https://yro.slashdot.org/story/25/02/16/0040252/alleged-ceo-shooter-luigi-mangione-raises-297k-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alleged 'CEO Shooter' Luigi Mangione Raises $297K Online](https://yro.slashdot.org/story/25/02/16/0040252/alleged-ceo-shooter-luigi-mangione-raises-297k-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 11:40:24](https://news.ycombinator.com/item?id=43067303) - [Finding Flow: Escaping digital distractions through deep work and slow living](https://www.ssp.sh/blog/finding-flow/)
* [2025-02-16, 11:36:46](https://lobste.rs/s/ykpcqs/can_atproto_scale_down) - [Can atproto scale down?](https://bsky.bad-example.com/can-atproto-scale-down/)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 10:46:14](https://lobste.rs/s/6obzpw/remco_is_lightweight_configuration) - [remco is a lightweight configuration management tool (2023)](https://github.com/HeavyHorst/remco)
* [2025-02-16, 10:16:49](https://news.ycombinator.com/item?id=43066953) - [“A calculator app? Anyone could make that”](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 09:55:58](https://news.ycombinator.com/item?id=43066842) - [Langfuse (YC W23) Is Hiring Product Engineers in Berlin](https://langfuse.com/careers)
* [2025-02-16, 09:53:04](https://lobste.rs/s/vu3fsc/notes_ai_copilot_code_quality) - [Notes: AI Copilot Code Quality](https://kracekumar.com/post/ai_copilot_code_quality_paper/)
* [2025-02-16, 09:31:02](https://news.ycombinator.com/item?id=43066720) - [50 Years of Travel Tips](https://kk.org/thetechnium/50-years-of-travel-tips/)
* [2025-02-16, 08:34:00](https://developers.slashdot.org/story/25/02/16/0332258/are-fast-programming-languages-gaining-in-popularity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Fast Programming Languages Gaining in Popularity?](https://developers.slashdot.org/story/25/02/16/0332258/are-fast-programming-languages-gaining-in-popularity?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 08:06:42](https://lobste.rs/s/pibsom/dsls_for_safe_ios_watchos_communication) - [DSLs for Safe iOS/watchOS Communication](https://defn.io/2025/02/16/type-safe-watchos-communication/)
* [2025-02-16, 07:20:14](https://lobste.rs/s/w7qf9o/how_i_implement_ssa_form) - [How I implement SSA form](https://gist.github.com/pizlonator/cf1e72b8600b1437dda8153ea3fdb963)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 05:34:00](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Bugs Could Delay Upgrades for Both Siri and Alexa](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 05:01:49](https://lobste.rs/s/yusi8g/modding_gulf_mexico_back_google_maps) - [Modding the Gulf of Mexico Back (in Google Maps)](https://www.youtube.com/watch?v=F5m2JxplnXk)
* [2025-02-16, 04:06:04](https://news.ycombinator.com/item?id=43065217) - [Gixy: Nginx Configuration Static Analyzer](https://github.com/dvershinin/gixy)
* [2025-02-16, 02:34:00](https://ask.slashdot.org/story/25/02/15/2047258/ask-slashdot-what-would-it-take-for-you-to-trust-an-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: What Would It Take For You to Trust an AI?](https://ask.slashdot.org/story/25/02/15/2047258/ask-slashdot-what-would-it-take-for-you-to-trust-an-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-16, 01:19:11](https://lobste.rs/s/7pzdgj/gulfofmexico_perfect_programming) - [GulfOfMexico: perfect programming language](https://github.com/TodePond/GulfOfMexico)
* [2025-02-16, 01:06:11](https://news.ycombinator.com/item?id=43064273) - [The Sims Game Design Documents (1997)](https://donhopkins.com/home/TheSimsDesignDocuments/)
* [2025-02-16, 00:22:01](https://news.ycombinator.com/item?id=43063970) - [Show HN: Blunderchess.net – blunder for your opponent every five moves](https://blunderchess.net)
* [2025-02-16, 00:09:00](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Despite Plans for AI-Powered Search, Reddit's Stock Fell 14% This Week](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 22:47:00](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's 'Salt Typhoon' Hackers Continue to Breach Telecoms Despite US Sanctions](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 21:37:58](https://lobste.rs/s/cxpiaj/taichi_high_performance_parallel) - [Taichi: High-performance Parallel Programming in Python](https://www.taichi-lang.org/)
* [2025-02-15, 21:34:00](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The World's Most Printed 3D Model, 3DBenchy, Is Now Public Domain](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 21:32:13](https://news.ycombinator.com/item?id=43062546) - [Watt The Fox?](https://h.43z.one/blog/2025-02-12/)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 20:54:02](https://lobste.rs/s/undbaa/nasa_has_list_10_rules_for_software) - [NASA has a list of 10 rules for software development](https://www.cs.otago.ac.nz/cosc345/resources/nasa-10-rules.htm)
* [2025-02-15, 20:36:51](https://lobste.rs/s/oxtari/fixi_js_minimal_general_hypermedia) - [fixi.js - minimal general hypermedia controls](https://github.com/bigskysoftware/fixi)
* [2025-02-15, 20:34:00](https://it.slashdot.org/story/25/02/15/1716204/americas-office-occupancy-rates-drop-by-double-digits---and-more-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's Office-Occupancy Rates Drop by Double Digits - and More in San Francisco](https://it.slashdot.org/story/25/02/15/1716204/americas-office-occupancy-rates-drop-by-double-digits---and-more-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 20:07:39](https://news.ycombinator.com/item?id=43061827) - [Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research)
* [2025-02-15, 19:34:29](https://news.ycombinator.com/item?id=43061498) - [My Life in Weeks](https://weeks.ginatrapani.org/)
* [2025-02-15, 19:34:00](https://apple.slashdot.org/story/25/02/15/0610248/apple-invites-its-users-into-major-years-long-health-study?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Invites Its Users Into Major Years-Long Health Study](https://apple.slashdot.org/story/25/02/15/0610248/apple-invites-its-users-into-major-years-long-health-study?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 19:19:12](https://lobste.rs/s/1reyhf/run_llms_on_macos_using_llm_mlx_apple_s_mlx) - [Run LLMs on macOS using llm-mlx and Apple’s MLX framework](https://simonwillison.net/2025/Feb/15/llm-mlx/)
* [2025-02-15, 19:00:38](https://news.ycombinator.com/item?id=43061183) - [Schemesh: Fusion between Unix shell and Lisp REPL](https://github.com/cosmos72/schemesh)
* [2025-02-15, 18:51:17](https://lobste.rs/s/mt3tso/cracking_old_zip_file_help_open_source_anc) - [Cracking an old ZIP file to help open source the ANC's \"Operation Vula\" secret crypto code](https://blog.jgc.org/2024/09/cracking-old-zip-file-to-help-open.html)
* [2025-02-15, 18:34:00](https://games.slashdot.org/story/25/02/15/053254/bored-with-chess-magnus-carlsen-wants-to-remake-the-game?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bored With Chess? Magnus Carlsen Wants to Remake the Game](https://games.slashdot.org/story/25/02/15/053254/bored-with-chess-magnus-carlsen-wants-to-remake-the-game?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 17:35:08](https://lobste.rs/s/cvxhqu/devenv_telemetry_warning) - [Devenv telemetry warning](https://chaos.social/@hexa/114009069746212598)
* [2025-02-15, 17:34:00](https://slashdot.org/story/25/02/15/0351257/mass-theft-thousands-of-artists-call-for-ai-art-auction-to-be-cancelled?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Mass Theft': Thousands of Artists Call for AI Art Auction to be Cancelled](https://slashdot.org/story/25/02/15/0351257/mass-theft-thousands-of-artists-call-for-ai-art-auction-to-be-cancelled?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 16:36:50](https://lobste.rs/s/9kehva/transient_feed_aggregator_built_with) - [A transient feed aggregator built with Gleam](https://github.com/facundoolano/news.olano.dev)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 15:47:52](https://lobste.rs/s/gnjfai/how_diablo_hackers_uncovered_speedrun) - [How Diablo hackers uncovered a speedrun scandal](https://arstechnica.com/gaming/2025/02/the-diablo-hackers-that-debunked-a-record-speedrun/)
* [2025-02-15, 14:39:58](https://lobste.rs/s/upgnyr/gemini_protocol) - [Gemini (protocol)](https://en.wikipedia.org/wiki/Gemini_(protocol))
* [2025-02-15, 12:39:37](https://lobste.rs/s/gfjbhp/how_backdoor_large_language_models) - [How to Backdoor Large Language Models](https://blog.sshh.io/p/how-to-backdoor-large-language-models)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 09:36:53](https://lobste.rs/s/tx5ro4/ai_is_stifling_tech_adoption) - [AI is Stifling Tech Adoption](https://vale.rocks/posts/ai-is-stifling-tech-adoption)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-15, 00:02:05](https://lobste.rs/s/abkeck/hardest_working_font_manhattan) - [The hardest working font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 14:32:55](https://news.ycombinator.com/item?id=43048698) - [Ask HN: What is the best method for turning a scanned book as a PDF into text?](https://news.ycombinator.com/item?id=43048698)
* [2025-02-14, 13:47:53](https://news.ycombinator.com/item?id=43048190) - [Show HN: Tetris Variant in a Rotating / Flipping Square](https://ihopethisisfun.franzai.com/)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 11:19:06](https://news.ycombinator.com/item?id=43047255) - [OpenVINO AI effects [denoising and transcription] for Audacity](https://www.audacityteam.org/blog/openvino-ai-effects/)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-14, 01:40:53](https://news.ycombinator.com/item?id=43043724) - [History 2701 Wiki](https://history2701.fandom.com/wiki/History_2701_Wiki)
* [2025-02-13, 21:16:36](https://news.ycombinator.com/item?id=43041477) - [AI can interpret animal emotions better than humans](https://www.science.org/content/article/can-ai-read-pain-and-other-emotions-your-dog-s-face)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 04:46:26](https://news.ycombinator.com/item?id=43032759) - [Beginnings of Roman London discovered in office basement](https://www.bbc.com/news/articles/cx2jdnv0ywyo)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
* [2025-02-12, 21:28:00](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss) - [Want the News Summarized Accurately?  Don't Ask an \"AI\".](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss)
* [2025-02-12, 19:12:14](https://news.ycombinator.com/item?id=43028650) - [How Hans Bethe stumbled upon perfect quantum theories](https://www.quantamagazine.org/how-hans-bethe-stumbled-upon-perfect-quantum-theories-20250212/)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 14:58:52](https://news.ycombinator.com/item?id=43026001) - [Spanish 'running of the bulls' festival reveals crowd movements can be predicted](https://phys.org/news/2025-02-spanish-bulls-festival-reveals-crowd.html)
* [2025-02-12, 13:26:12](https://news.ycombinator.com/item?id=43025176) - [Writing a Gimp 3.0 Plugin](https://schoenitzer.de/blog/2025/Gimp%203.0%20Plugin%20Ressources.html)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
