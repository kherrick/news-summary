# [News Summary](https://kherrick.github.io/news-summary/)

## Web and Application Development

* [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/) - Enhancing web readability using custom CSS with Stylus, offering more control over website appearance. [Comments](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus)

* [Oklch in CSS: Why We Moved From RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) - Details on a new color format for CSS and why it's superior to RGB and HSL. [Comments](https://news.ycombinator.com/item?id=43073819)

* [When is OOP a More Useful Modelling Approach than Other Paradigms?](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling) - Insight into scenarios where Object-Oriented Programming outshines other paradigms. [Comments](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling)

## Technology and Digital Privacy

* [Why Bother With Privacy When I Have Nothing to Hide?](https://hannahonprivacy.substack.com/p/why-bother-with-privacy-when-i-have) - Resolving the quintessential question on the importance of privacy in a transparent world. [Comments](https://news.ycombinator.com/item?id=43073385)

* [Critics Say New Google Rules Put Profits Over Privacy](https://www.bbc.com/news/articles/cm21g0052dno) - Concerns surrounding Google's policy changes and their impact on privacy. [Comments](https://news.ycombinator.com/item?id=43071506)

## Quantum Science and Physics

* [Opposing Arrows of Time Can Theoretically Emerge from Certain Quantum Systems](https://www.surrey.ac.uk/news/physicists-uncover-evidence-two-arrows-time-emerging-quantum-realm) - New evidence suggests time might run differently in the quantum realm. [Comments](https://news.ycombinator.com/item?id=43072483)

* [Time Flows Forward or Backward at Quantum Levels, Researchers Suggest](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploration of time reversibility at quantum scales. [Comments](https://news.ycombinator.com/item?id=43071506)

## Artificial Intelligence and Ethics

* [Lawsuit Accuses Meta Of Training AI On Torrented 82TB Dataset of Pirated Books](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal and ethical implications of AI training datasets. [Comments](https://news.ycombinator.com/item?id=43071506)

* [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - Highlights from the summit on AI's role in society. [Comments](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)

## Notable Events and Discoveries

* [All Kindles Can Now Be Jailbroken](https://old.reddit.com/r/kindle/comments/1hrwytr/all_kindles_can_now_be_jailbroken/) - The ebook ecosystem shaken by the universal jailbreak. [Comments](https://news.ycombinator.com/item?id=43073969)

* [Half-Life 2 and Dishonored Art Lead Viktor Antonov Has Died](https://www.eurogamer.net/half-life-2-and-dishonored-art-lead-viktor-antonov-dies-aged-just-52) - Celebrating the creative legacy of Viktor Antonov. [Comments](https://news.ycombinator.com/item?id=43069533)

* [Beginnings of Roman London Discovered in Office Basement](https://www.bbc.com/news/articles/cx2jdnv0ywyo) - Archaeologists uncover Roman history beneath modern-day London. [Comments](https://news.ycombinator.com/item?id=43032759)

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

* [2025-02-17, 02:05:28](https://lobste.rs/s/sag0p3/making_web_more_readable_with_stylus) - [Making the Web More Readable With Stylus](https://www.wezm.net/v2/posts/2025/stylus/)
* [2025-02-17, 02:03:52](https://lobste.rs/s/itjuhu/gitingest_prompt_friendly_codebase) - [Gitingest: Prompt-friendly codebase](https://gitingest.com)
* [2025-02-17, 01:42:12](https://news.ycombinator.com/item?id=43073969) - [All Kindles can now be jailbroken](https://old.reddit.com/r/kindle/comments/1hrwytr/all_kindles_can_now_be_jailbroken/)
* [2025-02-17, 01:25:46](https://news.ycombinator.com/item?id=43073836) - [YouTube asks channel owner to verify phone, permanently overwrites personal info](https://www.reddit.com/r/VirtualYoutubers/s/iJ1W7JUN2T)
* [2025-02-17, 01:24:04](https://news.ycombinator.com/item?id=43073819) - [Oklch in CSS: why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
* [2025-02-17, 01:17:16](https://news.ycombinator.com/item?id=43073773) - [America will collapse by 2025 (2010)](https://www.salon.com/2010/12/06/america_collapse_2025/)
* [2025-02-17, 01:09:00](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [697-Page Book Publishes a Poet's 2,000 Amazon Reviews Posthumously](https://news.slashdot.org/story/25/02/17/016217/697-page-book-publishes-a-poets-2000-amazon-reviews-posthumously?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-17, 00:39:00](https://news.ycombinator.com/item?id=43073481) - [How to add a directory to your PATH](https://jvns.ca/blog/2025/02/13/how-to-add-a-directory-to-your-path/)
* [2025-02-17, 00:27:33](https://news.ycombinator.com/item?id=43073385) - [Why bother with privacy when I have nothing to hide? (2023)](https://hannahonprivacy.substack.com/p/why-bother-with-privacy-when-i-have)
* [2025-02-17, 00:15:50](https://news.ycombinator.com/item?id=43073292) - [Her job is to remove homeless from SF's parks. Her methods are extraordinary](https://sfstandard.com/2025/02/08/golden-gate-park-ranger-homelessness/)
* [2025-02-17, 00:14:47](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling) - [When is OOP a More Useful Modelling Approach than Other Paradigms?](https://lobste.rs/s/yyju3z/when_is_oop_more_useful_modelling)
* [2025-02-17, 00:06:09](https://lobste.rs/s/tkgkfd/this_esp32_antenna_array_can_see_wifi) - [This ESP32 antenna array can see WiFi](https://www.youtube.com/watch?v=sXwDrcd1t-E)
* [2025-02-16, 23:56:16](https://news.ycombinator.com/item?id=43073149) - [Does or did COBOL default to 1875-05-20 for corrupt or missing dates?](https://retrocomputing.stackexchange.com/questions/31288/does-or-did-cobol-default-to-1875-05-20-for-corrupt-or-missing-dates)
* [2025-02-16, 23:15:59](https://news.ycombinator.com/item?id=43072790) - [Javier Milei Backtracks on $4.4B Memecoin After 'Insiders' Pocket $87M](https://www.coindesk.com/business/2025/02/15/javier-milei-backtracks-on-usd4-4b-memecoin-after-insiders-pocket-usd87m)
* [2025-02-16, 23:13:00](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Technologies of Connection Tearing Us Apart?](https://tech.slashdot.org/story/25/02/16/2311215/are-technologies-of-connection-tearing-us-apart?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 22:38:14](https://news.ycombinator.com/item?id=43072483) - [Opposing arrows of time can theoretically emerge from certain quantum systems](https://www.surrey.ac.uk/news/physicists-uncover-evidence-two-arrows-time-emerging-quantum-realm)
* [2025-02-16, 22:22:40](https://news.ycombinator.com/item?id=43072338) - [Uchū · the color scheme for internet lovers](https://uchu.style)
* [2025-02-16, 22:05:20](https://lobste.rs/s/uinlbi/seven_pillars_wisdom) - [The seven pillars of wisdom](https://interoperable-europe.ec.europa.eu/sites/default/files/discussion/attachment/2024-01/How%20could%20open%20licensing%20protect%20democracy.pdf)
* [2025-02-16, 21:41:00](https://science.slashdot.org/story/25/02/16/2138259/after-launch-by-spacex-in-january-firefly-aerospaces-lunar-lander-reaches-moon-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Launch by SpaceX in January, Firefly Aerospace's Lunar Lander Reaches Moon Orbit](https://science.slashdot.org/story/25/02/16/2138259/after-launch-by-spacex-in-january-firefly-aerospaces-lunar-lander-reaches-moon-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 21:36:21](https://news.ycombinator.com/item?id=43071934) - [Show HN: Air traffic control radio and chill music for focus](https://www.chillyatc.com/)
* [2025-02-16, 21:05:53](https://lobste.rs/s/yapvon/what_do_about_sqlite_busy_errors_despite) - [What to do about SQLITE_BUSY errors despite setting a timeout](https://berthub.eu/articles/posts/a-brief-post-on-sqlite3-database-locked-despite-timeout/)
* [2025-02-16, 21:01:52](https://lobste.rs/s/jpdtyb/simple_github_report_generator) - [A Simple Github Report Generator](https://github.com/siddharth1729/github_report_generator)
* [2025-02-16, 20:54:00](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss) - [The Guy Who Accidentally Threw Away $700 Million in Bitcoin Wants to Buy the Landfill to Find It](https://soylentnews.org/article.pl?sid=25/02/15/1518204&from=rss)
* [2025-02-16, 20:45:30](https://news.ycombinator.com/item?id=43071506) - [Critics say new Google rules put profits over privacy](https://www.bbc.com/news/articles/cm21g0052dno)
* [2025-02-16, 19:57:32](https://news.ycombinator.com/item?id=43071110) - [Portable drone jammer uses a Raspberry Pi tactical Software Defined Radio](https://www.tomshardware.com/raspberry-pi/portable-raspberry-pi-tactical-software-defines-radio-doubles-as-a-drone-jammer)
* [2025-02-16, 19:53:00](https://news.slashdot.org/story/25/02/16/1921209/argentinian-president-promotes-memecoin-it-then-crashed-95-as-insiders-cashed-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Argentinian President Promotes Memecoin. It Then Crashed 95% as Insiders Cashed Out](https://news.slashdot.org/story/25/02/16/1921209/argentinian-president-promotes-memecoin-it-then-crashed-95-as-insiders-cashed-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 19:02:58](https://lobste.rs/s/rc1hkq/dela_task_runner_delegates_work_other) - [Dela: a task runner that delegates the work to other tools](https://github.com/aleyan/dela)
* [2025-02-16, 18:53:00](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Time Flows Forward or Backward At Quantum Levels, Researchers Suggest](https://science.slashdot.org/story/25/02/16/1850213/time-flows-forward-or-backward-at-quantum-levels-researchers-suggest?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 17:56:15](https://news.ycombinator.com/item?id=43070025) - [Caddy – The Ultimate Server with Automatic HTTPS](https://caddyserver.com/)
* [2025-02-16, 17:34:00](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [What If People Like AI-Generated Art Better?](https://slashdot.org/story/25/02/15/0412246/what-if-people-like-ai-generated-art-better?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 17:29:01](https://lobste.rs/s/mk577n/civic_tech_s_third_wave) - [Civic Tech's Third Wave](https://www.jpt.sh/posts/third-wave-civic-tech/)
* [2025-02-16, 17:14:25](https://lobste.rs/s/xjrlj2/how_android_s_calculator_works_with_real) - [How Android's calculator works with real numbers](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 17:04:09](https://news.ycombinator.com/item?id=43069533) - [IPv6 Is Hard](https://techlog.jenslink.net/posts/ipv6-is-hard/)
* [2025-02-16, 17:03:52](https://lobste.rs/s/n6xa0s/unexpected_uses_gf2p8affineqb_bit) - [Unexpected uses of the GF2P8AFFINEQB bit matrix multiply instruction](https://gist.github.com/animetosho/d3ca95da2131b5813e16b5bb1b137ca0)
* [2025-02-16, 17:01:34](https://news.ycombinator.com/item?id=43069514) - [Half-Life 2 and Dishonored art lead Viktor Antonov has died](https://www.eurogamer.net/half-life-2-and-dishonored-art-lead-viktor-antonov-dies-aged-just-52)
* [2025-02-16, 16:45:26](https://news.ycombinator.com/item?id=43069399) - [United States Power Outage Map](https://poweroutage.us/)
* [2025-02-16, 16:34:00](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lawsuit Accuses Meta Of Training AI On Torrented 82TB Dataset Of Pirated Books](https://yro.slashdot.org/story/25/02/16/0346210/lawsuit-accuses-meta-of-training-ai-on-torrented-82tb-dataset-of-pirated-books?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 16:12:00](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss) - [Waste Surveillance at Just 20 Airports Could Spot the Next Pandemic](https://soylentnews.org/article.pl?sid=25/02/15/1423229&from=rss)
* [2025-02-16, 15:44:05](https://news.ycombinator.com/item?id=43068884) - [Vim after Bram: a core maintainer on how they've kept it going](https://thenewstack.io/vim-after-bram-a-core-maintainer-on-how-theyve-kept-it-going/)
* [2025-02-16, 15:34:00](https://hardware.slashdot.org/story/25/02/16/0241242/amazon-tests-robots-for-automating-fulfillment-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Tests Robots For Automating Fulfillment Centers](https://hardware.slashdot.org/story/25/02/16/0241242/amazon-tests-robots-for-automating-fulfillment-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 15:13:50](https://lobste.rs/s/wxqmyd/logis_automatic_scientific_log_your_git) - [logis - an automatic scientific log in your git commit history](https://github.com/flywhl/logis)
* [2025-02-16, 15:08:31](https://news.ycombinator.com/item?id=43068585) - [Flea-Scope: $18 Source Available USB Oscilloscope, Logic Analyzer and More [pdf]](https://rtestardi.github.io/usbte/flea-scope.pdf)
* [2025-02-16, 12:34:00](https://yro.slashdot.org/story/25/02/16/0040252/alleged-ceo-shooter-luigi-mangione-raises-297k-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alleged 'CEO Shooter' Luigi Mangione Raises $297K Online](https://yro.slashdot.org/story/25/02/16/0040252/alleged-ceo-shooter-luigi-mangione-raises-297k-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 11:40:24](https://news.ycombinator.com/item?id=43067303) - [Finding Flow: Escaping digital distractions through deep work and slow living](https://www.ssp.sh/blog/finding-flow/)
* [2025-02-16, 11:36:46](https://lobste.rs/s/ykpcqs/can_atproto_scale_down) - [Can atproto scale down?](https://bsky.bad-example.com/can-atproto-scale-down/)
* [2025-02-16, 11:27:00](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss) - [AI Reveals Hidden Interior Design Rules of the Cell](https://soylentnews.org/article.pl?sid=25/02/15/143258&from=rss)
* [2025-02-16, 10:46:14](https://lobste.rs/s/6obzpw/remco_is_lightweight_configuration) - [remco is a lightweight configuration management tool (2023)](https://github.com/HeavyHorst/remco)
* [2025-02-16, 10:16:49](https://news.ycombinator.com/item?id=43066953) - [“A calculator app? Anyone could make that”](https://chadnauseam.com/coding/random/calculator-app)
* [2025-02-16, 09:53:04](https://lobste.rs/s/vu3fsc/notes_ai_copilot_code_quality) - [Notes: AI Copilot Code Quality](https://kracekumar.com/post/ai_copilot_code_quality_paper/)
* [2025-02-16, 08:34:00](https://developers.slashdot.org/story/25/02/16/0332258/are-fast-programming-languages-gaining-in-popularity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Fast Programming Languages Gaining in Popularity?](https://developers.slashdot.org/story/25/02/16/0332258/are-fast-programming-languages-gaining-in-popularity?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 08:06:42](https://lobste.rs/s/pibsom/dsls_for_safe_ios_watchos_communication) - [DSLs for Safe iOS/watchOS Communication](https://defn.io/2025/02/16/type-safe-watchos-communication/)
* [2025-02-16, 07:20:14](https://lobste.rs/s/w7qf9o/how_i_implement_ssa_form) - [How I implement SSA form](https://gist.github.com/pizlonator/cf1e72b8600b1437dda8153ea3fdb963)
* [2025-02-16, 06:42:00](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss) - [Key Takeaways From The Paris AI Summit](https://soylentnews.org/article.pl?sid=25/02/15/1357236&from=rss)
* [2025-02-16, 05:34:00](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Bugs Could Delay Upgrades for Both Siri and Alexa](https://apple.slashdot.org/story/25/02/16/0138205/ai-bugs-could-delay-upgrades-for-both-siri-and-alexa?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 05:01:49](https://lobste.rs/s/yusi8g/modding_gulf_mexico_back_google_maps) - [Modding the Gulf of Mexico Back (in Google Maps)](https://www.youtube.com/watch?v=F5m2JxplnXk)
* [2025-02-16, 02:34:00](https://ask.slashdot.org/story/25/02/15/2047258/ask-slashdot-what-would-it-take-for-you-to-trust-an-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: What Would It Take For You to Trust an AI?](https://ask.slashdot.org/story/25/02/15/2047258/ask-slashdot-what-would-it-take-for-you-to-trust-an-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-16, 01:58:00](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss) - [If You Ever Stacked Cups In Gym Class, Blame My Dad](https://soylentnews.org/article.pl?sid=25/02/15/1351232&from=rss)
* [2025-02-16, 01:19:11](https://lobste.rs/s/7pzdgj/gulfofmexico_perfect_programming) - [GulfOfMexico: perfect programming language](https://github.com/TodePond/GulfOfMexico)
* [2025-02-16, 00:09:00](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Despite Plans for AI-Powered Search, Reddit's Stock Fell 14% This Week](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 22:47:00](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's 'Salt Typhoon' Hackers Continue to Breach Telecoms Despite US Sanctions](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 21:34:00](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The World's Most Printed 3D Model, 3DBenchy, Is Now Public Domain](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 20:54:02](https://lobste.rs/s/undbaa/nasa_has_list_10_rules_for_software) - [NASA has a list of 10 rules for software development](https://www.cs.otago.ac.nz/cosc345/resources/nasa-10-rules.htm)
* [2025-02-15, 20:36:51](https://lobste.rs/s/oxtari/fixi_js_minimal_general_hypermedia) - [fixi.js - minimal general hypermedia controls](https://github.com/bigskysoftware/fixi)
* [2025-02-15, 19:19:12](https://lobste.rs/s/1reyhf/run_llms_on_macos_using_llm_mlx_apple_s_mlx) - [Run LLMs on macOS using llm-mlx and Apple’s MLX framework](https://simonwillison.net/2025/Feb/15/llm-mlx/)
* [2025-02-15, 17:35:08](https://lobste.rs/s/cvxhqu/devenv_telemetry_warning) - [Devenv telemetry warning](https://chaos.social/@hexa/114009069746212598)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 15:47:52](https://lobste.rs/s/gnjfai/how_diablo_hackers_uncovered_speedrun) - [How Diablo hackers uncovered a speedrun scandal](https://arstechnica.com/gaming/2025/02/the-diablo-hackers-that-debunked-a-record-speedrun/)
* [2025-02-15, 14:39:58](https://lobste.rs/s/upgnyr/gemini_protocol) - [Gemini (protocol)](https://en.wikipedia.org/wiki/Gemini_(protocol))
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 14:32:55](https://news.ycombinator.com/item?id=43048698) - [Ask HN: What is the best method for turning a scanned book as a PDF into text?](https://news.ycombinator.com/item?id=43048698)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 11:19:06](https://news.ycombinator.com/item?id=43047255) - [OpenVINO AI effects [denoising and transcription] for Audacity](https://www.audacityteam.org/blog/openvino-ai-effects/)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 19:25:05](https://news.ycombinator.com/item?id=43040129) - [Gold Is Worth More in New York](https://www.bloomberg.com/opinion/articles/2025-02-13/gold-is-worth-more-in-new-york)
* [2025-02-13, 16:57:27](https://news.ycombinator.com/item?id=43038164) - [Root-inspired additive printing for fabricating robust conformal electronics](https://www.nature.com/articles/s41378-024-00840-z)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 15:34:57](https://news.ycombinator.com/item?id=43036903) - [Explaining my fast 6502 code generator (2023)](https://pubby.games/codegen.html)
* [2025-02-13, 15:23:36](https://news.ycombinator.com/item?id=43036770) - [Genesis and Sega CD – Audio Filtering](https://jsgroth.dev/blog/posts/genesis-sega-cd-audio-filtering/)
* [2025-02-13, 14:00:41](https://news.ycombinator.com/item?id=43035896) - [Publish Your Gaussian Splats with SuperSplat](https://blog.playcanvas.com/publish-your-gaussian-splats-with-supersplat/)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 04:46:26](https://news.ycombinator.com/item?id=43032759) - [Beginnings of Roman London discovered in office basement](https://www.bbc.com/news/articles/cx2jdnv0ywyo)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
