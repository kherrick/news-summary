# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Developments

* [Anthropic, Google, OpenAI and XAI Granted Up to $200M from Defense Department](https://www.cnbc.com/2025/07/14/anthropic-google-openai-xai-granted-up-to-200-million-from-dod.html) - [Comments](https://news.ycombinator.com/item?id=44565416)

* [Apple Faces Calls To Reboot AI Strategy With Shares Slumping](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://research.trychroma.com/context-rot) - [Comments](https://lobste.rs/s/untq6g/context_rot_how_increasing_input_tokens)

* [Cognition AI Buys Windsurf as AI Frenzy Escalates](https://slashdot.org/story/25/07/14/1820248/cognition-ai-buys-windsurf-as-ai-frenzy-escalates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44563324)

* [Zuckerberg Pledges Hundreds of Billions For AI Data Centers in Superintelligence Push](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific Advancements and Discoveries

* [LIGO detects most massive black hole merger to date](https://www.caltech.edu/about/news/ligo-detects-most-massive-black-hole-merger-to-date) - [Comments](https://news.ycombinator.com/item?id=44564656)

* [COVID-19 Vaccine's mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Unique and Quirky Innovations

* [Show HN: The HTML Maze - Escape an eerie labyrinth built with HTML pages](https://htmlmaze.com/) - [Comments](https://news.ycombinator.com/item?id=44565004)

* [Japanese grandparents create life-size Totoro with bus stop for grandkids (2020)](https://mymodernmet.com/totoro-sculpture-bus-stop/) - [Comments](https://news.ycombinator.com/item?id=44561818)

* [Using a USB Foot Pedal for Vibe Coding](https://coding.napolux.com/using-a-usb-foot-pedal-for-vibe-coding/) - [Comments](https://lobste.rs/s/1hizee/using_usb_foot_pedal_for_vibe_coding)

## Cybersecurity and Technology Concerns

* [MoonPay Executives May Have Sent $250,000 To Nigerian Scammer, DoJ Filing Suggests](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Data brokers are selling flight information to CBP and ICE](https://www.eff.org/deeplinks/2025/07/data-brokers-are-selling-your-flight-information-cbp-and-ice) - [Comments](https://news.ycombinator.com/item?id=44561736)

* [Bay Area Restaurants Are Vetting Your Social Media Before You Even Walk In](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Highlights

* [Armagh Observatory Marks 230 Years of Recording Weather](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/07/13/008207&from=rss)

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

* [2025-07-14, 21:30:00](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces Calls To Reboot AI Strategy With Shares Slumping](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 21:16:19](https://news.ycombinator.com/item?id=44565416) - [Anthropic, Google, OpenAI and XAI Granted Up to $200M from Defense Department](https://www.cnbc.com/2025/07/14/anthropic-google-openai-xai-granted-up-to-200-million-from-dod.html)
* [2025-07-14, 20:50:00](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Armagh Observatory Marks 230 Years of Recording Weather](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 20:42:29](https://news.ycombinator.com/item?id=44565004) - [Show HN: The HTML Maze - Escape an eerie labyrinth built with HTML pages](https://htmlmaze.com/)
* [2025-07-14, 20:25:07](https://lobste.rs/s/untq6g/context_rot_how_increasing_input_tokens) - [Context Rot: How Increasing Input Tokens Impacts LLM Performance](https://research.trychroma.com/context-rot)
* [2025-07-14, 20:10:00](https://tech.slashdot.org/story/25/07/14/1844246/are-a-few-people-ruining-the-internet-for-the-rest-of-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are a Few People Ruining the Internet For the Rest of Us?](https://tech.slashdot.org/story/25/07/14/1844246/are-a-few-people-ruining-the-internet-for-the-rest-of-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 20:06:51](https://news.ycombinator.com/item?id=44564656) - [LIGO detects most massive black hole merger to date](https://www.caltech.edu/about/news/ligo-detects-most-massive-black-hole-merger-to-date)
* [2025-07-14, 19:54:26](https://news.ycombinator.com/item?id=44564531) - [NeuralOS: An operating system powered by neural networks](https://neural-os.com/)
* [2025-07-14, 19:30:00](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MoonPay Executives May Have Sent $250,000 To Nigerian Scammer, DoJ Filing Suggests](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 19:25:15](https://news.ycombinator.com/item?id=44564248) - [Context Rot: How increasing input tokens impacts LLM performance](https://research.trychroma.com/context-rot)
* [2025-07-14, 19:23:46](https://lobste.rs/s/l3mnv9/guessing_player_s_sunrise) - [Guessing the player&apos;s sunrise](https://docs.getlost.gg/latest/blog/sun-time/)
* [2025-07-14, 19:13:16](https://lobste.rs/s/qtfnlu/embedding_user_defined_indexes_apache) - [Embedding User-Defined Indexes in Apache Parquet Files](https://datafusion.apache.org/blog/2025/07/14/user-defined-parquet-indexes/)
* [2025-07-14, 18:50:00](https://slashdot.org/story/25/07/14/1820248/cognition-ai-buys-windsurf-as-ai-frenzy-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cognition AI Buys Windsurf as AI Frenzy Escalates](https://slashdot.org/story/25/07/14/1820248/cognition-ai-buys-windsurf-as-ai-frenzy-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 18:46:44](https://lobste.rs/s/qov0vo/row_polymorphic_programming) - [Row Polymorphic Programming](https://www.stranger.systems/posts/by-slug/row-polymorphic-programming.html)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 18:42:16](https://lobste.rs/s/alrfrd/best_c_library) - [The Best C++ Library](https://mcyoung.xyz/2025/07/14/best/#fnref:terrible-people)
* [2025-07-14, 18:11:25](https://news.ycombinator.com/item?id=44563364) - [Cidco MailStation as a Z80 Development Platform (2019)](https://jcs.org/2019/05/03/mailstation)
* [2025-07-14, 18:10:00](https://news.slashdot.org/story/25/07/14/187209/air-india-chief-says-preliminary-crash-report-raises-fresh-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air India Chief Says Preliminary Crash Report Raises Fresh Questions](https://news.slashdot.org/story/25/07/14/187209/air-india-chief-says-preliminary-crash-report-raises-fresh-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 18:07:15](https://news.ycombinator.com/item?id=44563324) - [Cognition (Devin AI) to Acquire Windsurf](https://cognition.ai/blog/windsurf)
* [2025-07-14, 17:36:00](https://science.slashdot.org/story/25/07/14/1736243/quality-of-scientific-papers-questioned-as-academics-overwhelmed-by-the-millions-published?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quality of Scientific Papers Questioned as Academics &apos;Overwhelmed&apos; By the Millions Published](https://science.slashdot.org/story/25/07/14/1736243/quality-of-scientific-papers-questioned-as-academics-overwhelmed-by-the-millions-published?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 17:30:20](https://lobste.rs/s/1l3beg/panasonic_openbsd_3) - [Panasonic + OpenBSD = &lt;3](https://x61.sh/log/2025/07/03072025160538-panasonic_openbsd.html)
* [2025-07-14, 17:10:04](https://lobste.rs/s/75zw2o/strategies_for_very_fast_lexers) - [Strategies for very fast Lexers](https://xnacly.me/posts/2025/fast-lexer-strategies/)
* [2025-07-14, 17:01:54](https://news.ycombinator.com/item?id=44562488) - [Meticulous (YC S21) is hiring in UK to redefine software dev](https://tinyurl.com/join-meticulous)
* [2025-07-14, 17:01:08](https://lobste.rs/s/qhgjks/using_elm_2025) - [Using Elm in 2025](https://engagesoftware.com/news/post/7033/using-elm-in-2025)
* [2025-07-14, 16:45:00](https://tech.slashdot.org/story/25/07/14/1617251/google-plans-to-combine-chromeos-and-android-into-single-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Plans To Combine ChromeOS and Android Into Single Platform](https://tech.slashdot.org/story/25/07/14/1617251/google-plans-to-combine-chromeos-and-android-into-single-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 16:29:02](https://news.ycombinator.com/item?id=44562036) - [Embedding user-defined indexes in Apache Parquet](https://datafusion.apache.org/blog/2025/07/14/user-defined-parquet-indexes/)
* [2025-07-14, 16:09:14](https://news.ycombinator.com/item?id=44561818) - [Japanese grandparents create life-size Totoro with bus stop for grandkids (2020)](https://mymodernmet.com/totoro-sculpture-bus-stop/)
* [2025-07-14, 16:05:00](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg Pledges Hundreds of Billions For AI Data Centers in Superintelligence Push](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 16:02:36](https://news.ycombinator.com/item?id=44561736) - [Data brokers are selling flight information to CBP and ICE](https://www.eff.org/deeplinks/2025/07/data-brokers-are-selling-your-flight-information-cbp-and-ice)
* [2025-07-14, 15:45:32](https://news.ycombinator.com/item?id=44561520) - [Two guys hated using Comcast, so they built their own fiber ISP](https://arstechnica.com/tech-policy/2025/07/two-guys-hated-using-comcast-so-they-built-their-own-fiber-isp/)
* [2025-07-14, 15:30:31](https://news.ycombinator.com/item?id=44561354) - [Building Modular Rails Applications: A Deep Dive into Rails Engines](https://www.panasiti.me/blog/modular-rails-applications-rails-engines-active-storage-dashboard/)
* [2025-07-14, 15:28:36](https://news.ycombinator.com/item?id=44561328) - [Why random selection is necessary to create stable meritocratic institutions](https://assemblingamerica.substack.com/p/there-is-no-meritocracy-without-lottocracy)
* [2025-07-14, 15:20:00](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BulletVPN Shuts Down, Killing Lifetime Members&apos; Subscriptions](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 15:07:31](https://news.ycombinator.com/item?id=44561104) - [Lightning Detector Circuits](https://techlib.com/electronics/lightningnew.htm)
* [2025-07-14, 15:02:43](https://news.ycombinator.com/item?id=44561060) - [You Are in a Box](https://jyn.dev/you-are-in-a-box/)
* [2025-07-14, 15:00:39](https://lobste.rs/s/hhxj7i/you_are_box) - [you are in a box](https://jyn.dev/you-are-in-a-box/)
* [2025-07-14, 14:42:54](https://news.ycombinator.com/item?id=44560871) - [Strategies for Fast Lexers](https://xnacly.me/posts/2025/fast-lexer-strategies/)
* [2025-07-14, 14:40:00](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area Restaurants Are Vetting Your Social Media Before You Even Walk In](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 14:24:40](https://news.ycombinator.com/item?id=44560662) - [Kiro: A new agentic IDE](https://kiro.dev/blog/introducing-kiro/)
* [2025-07-14, 14:23:29](https://lobste.rs/s/q6comq/binding_application_idris) - [Binding Application in Idris](https://andrevidela.com/blog/2025/binding-application/)
* [2025-07-14, 14:00:00](https://slashdot.org/story/25/07/14/1324237/japanese-ai-adoption-remains-drastically-below-global-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese AI Adoption Remains Drastically Below Global Leaders](https://slashdot.org/story/25/07/14/1324237/japanese-ai-adoption-remains-drastically-below-global-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 12:45:49](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized) - [Ten years of running every day, visualized](https://nodaysoff.run/)
* [2025-07-14, 12:11:40](https://lobste.rs/s/plrsmw/data_alignment_for_speed_myth_reality) - [Data alignment for speed: myth or reality? (2012)](https://lemire.me/blog/2012/05/31/data-alignment-for-speed-myth-or-reality/)
* [2025-07-14, 11:38:15](https://lobste.rs/s/omytrc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/omytrc/what_are_you_doing_this_week)
* [2025-07-14, 11:34:00](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [COVID-19 Vaccine&apos;s mRNA Technology Adapted for First Antibiotic-Resistant Bacteria Vaccine](https://science.slashdot.org/story/25/07/14/0420225/covid-19-vaccines-mrna-technology-adapted-for-first-antibiotic-resistant-bacteria-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 11:00:21](https://news.ycombinator.com/item?id=44558646) - [Impacts of adding PV solar system to internal combustion engine vehicles](https://www.jstor.org/stable/26169128)
* [2025-07-14, 10:32:25](https://lobste.rs/s/x3y6ls/upyo_simple_modern_email_sending_library) - [Upyo: Simple and modern email sending library for JavaScript](https://upyo.org/)
* [2025-07-14, 10:25:32](https://lobste.rs/s/y1a8dk/llm_for_software_yo_yo) - [The LLM-for-software Yo-yo](https://tratt.net/laurie/blog/2025/the_llm_for_software_yoyo.html)
* [2025-07-14, 09:40:51](https://lobste.rs/s/j1ps6w/hunt_for_perfect_laptop_continues) - [The hunt for a perfect laptop continues](https://pointieststick.com/2025/07/13/the-hunt-for-a-perfect-laptop-continues/)
* [2025-07-14, 09:30:37](https://news.ycombinator.com/item?id=44558034) - [East Asian aerosol cleanup has likely contributed to global warming](https://www.nature.com/articles/s43247-025-02527-3)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 08:49:01](https://lobste.rs/s/kidktn/bash_patch_add_shopt_for_implicit_place) - [Bash patch - Add shopt for implicit &amp;&amp; in place of ; for functions end of lines](https://savannah.gnu.org/patch/?10534)
* [2025-07-14, 08:04:00](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender Studio Releases Free New Game &apos;Dogwalk&apos; to Showcase Its Open Source Godot Game Engine](https://games.slashdot.org/story/25/07/14/0513223/blender-studio-releases-free-new-game-dogwalk-to-showcase-its-open-source-godot-game-engine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 07:18:52](https://lobste.rs/s/1hizee/using_usb_foot_pedal_for_vibe_coding) - [Using a USB Foot Pedal for Vibe Coding](https://coding.napolux.com/using-a-usb-foot-pedal-for-vibe-coding/)
* [2025-07-14, 07:14:01](https://lobste.rs/s/e2mor6/how_bring_data_centre_like_connectivity) - [How to bring data centre-like connectivity to your home with IPTTTH](https://www.daryllswer.com/how-to-bring-data-centre-like-connectivity-to-your-home-with-ipttth/)
* [2025-07-14, 06:13:27](https://lobste.rs/s/zyiibk/stepanov_s_biggest_blunder) - [Stepanov’s biggest blunder](https://mmapped.blog/posts/43-stepanovs-biggest-blunder)
* [2025-07-14, 05:57:15](https://lobste.rs/s/hvo6lf/improving_avif_open_source) - [Improving AVIF in Open Source](https://halide.cx/blog/improving-avif-in-open-source/index.html)
* [2025-07-14, 05:36:50](https://lobste.rs/s/2gmuhq/how_does_screen_work) - [How does a screen work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-14, 05:12:18](https://news.ycombinator.com/item?id=44556684) - [Show HN: Refine – A Local Alternative to Grammarly](https://refine.sh)
* [2025-07-14, 04:59:00](https://developers.slashdot.org/story/25/07/14/0456224/ada-beats-sql-perl-and-fortan-for-10-spot-on-programming-language-popularity-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ada Beats SQL, Perl, and Fortan for #10 Spot on Programming Language Popularity Index](https://developers.slashdot.org/story/25/07/14/0456224/ada-beats-sql-perl-and-fortan-for-10-spot-on-programming-language-popularity-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-14, 02:02:46](https://lobste.rs/s/x9s2mu/store_tags_after_payloads) - [Store tags after payloads](https://www.scattered-thoughts.net/writing/store-tags-after-payloads/)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 20:34:28](https://lobste.rs/s/byp59z/programming_language_theory_has_public) - [Programming Language Theory has a public relations problem](https://happyfellow.bearblog.dev/programming-language-theory-has-a-public-relations-problem/)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 16:58:03](https://lobste.rs/s/rx4vvq/algorithms_for_making_interesting) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 18:17:22](https://news.ycombinator.com/item?id=44535378) - [Six Game Devs Speak to Computer Games Mag (1984)](https://computeradsfromthepast.substack.com/p/six-game-devs-speak-to-computer-games)
* [2025-07-11, 18:00:01](https://news.ycombinator.com/item?id=44535202) - [Replicube: 3D shader puzzle game, online demo](https://replicube.xyz/staging/)
* [2025-07-11, 17:30:53](https://news.ycombinator.com/item?id=44534890) - [It took 45 years, but spreadsheet legend Mitch Kapor finally got his MIT degree](https://www.bostonglobe.com/2025/06/24/business/mitch-kapor-mit-degree-bill-aulet/)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 14:44:54](https://news.ycombinator.com/item?id=44532718) - [The Corset X-Rays of Dr Ludovic O&apos;Followell (1908)](https://publicdomainreview.org/collection/the-corset-x-rays-of-dr-ludovic-o-followell-1908/)
* [2025-07-11, 10:26:32](https://news.ycombinator.com/item?id=44530518) - [SQLite async connection pool for high-performance](https://github.com/slaily/aiosqlitepool)
* [2025-07-11, 09:35:55](https://news.ycombinator.com/item?id=44530179) - [Tandy Corporation, Part 3 Becoming IBM Compatible](https://www.abortretry.fail/p/tandy-corporation-part-3)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 22:20:18](https://news.ycombinator.com/item?id=44526322) - [Show HN: Bedrock – An 8-bit computing system for running programs anywhere](https://benbridle.com/projects/bedrock.html)
* [2025-07-10, 18:12:21](https://news.ycombinator.com/item?id=44523876) - [Lossless Float Image Compression](https://aras-p.info/blog/2025/07/08/Lossless-Float-Image-Compression/)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 10:41:58](https://news.ycombinator.com/item?id=44519470) - [A Century of Quantum Mechanics](https://home.cern/news/news/physics/century-quantum-mechanics)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
