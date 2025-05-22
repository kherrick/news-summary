# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations in Technology and AI

* [Anthropic Releases Claude 4 Models That Can Autonomously Work For Nearly a Full Corporate Workday](https://slashdot.org/story/25/05/22/1653257/anthropic-releases-claude-4-models-that-can-autonomously-work-for-nearly-a-full-corporate-workday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44063403))

* [Show HN: DockFlow – Switch between multiple macOS Dock layouts instantly](https://dockflow.appitstudio.com/) ([comments](https://news.ycombinator.com/item?id=44064057))

* [Show HN: SQLite JavaScript - extend your database with JavaScript](https://github.com/sqliteai/sqlite-js) ([comments](https://news.ycombinator.com/item?id=44061836))

* [Near-infrared spatiotemporal color vision enabled by upconversion contact lenses](https://www.cell.com/cell/fulltext/S0092-8674(25)00454-4) ([comments](https://news.ycombinator.com/item?id=44063051))

## AI in Practical Applications

* [Mozilla to shut down Pocket on July 8](https://support.mozilla.org/en-US/kb/future-of-pocket) ([comments](https://news.ycombinator.com/item?id=44063662))

* [Launch HN: WorkDone (YC X25) – AI Audit of Medical Charts](https://news.ycombinator.com/item?id=44063000)

* [Google Has a Big AI Advantage: It Already Knows Everything About You](https://tech.slashdot.org/story/25/05/22/1436255/google-has-a-big-ai-advantage-it-already-knows-everything-about-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Data Security and Privacy

* [Signal Deploys DRM To Block Microsoft Recall&apos;s Invasive Screenshot Collection](https://yro.slashdot.org/story/25/05/22/1414235/signal-deploys-drm-to-block-microsoft-recalls-invasive-screenshot-collection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/lbf9mb/by_default_signal_doesn_t_recall))

* [Phone Companies Failed To Warn Senators About Surveillance, Wyden Says](https://tech.slashdot.org/story/25/05/22/0156227/phone-companies-failed-to-warn-senators-about-surveillance-wyden-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Software Development and Debugging

* [Fast Allocations in Ruby 3.5](https://railsatscale.com/2025-05-21-fast-allocations-in-ruby-3-5/) ([comments](https://news.ycombinator.com/item?id=44062160))

* [Practicing graphical debugging using visualizations of the Hilbert curve](https://akkartik.name/debugUIs.html) ([comments](https://news.ycombinator.com/item?id=44065146))

* [How to Get Your Research Paper Accepted](https://maxwellforbes.com/posts/how-to-get-a-paper-accepted) ([comments](https://lobste.rs/s/ffsgv1/how_get_your_research_paper_accepted))

## Sustainability and Science

* [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=44060800))

* [Wisk Aero, NASA Sign 5-Year Partnership To Advance Sustainable Autonomous Flights](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Legal and Ethical Debates

* [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)

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

* [2025-05-22, 18:42:33](https://news.ycombinator.com/item?id=44065299) - [Kangaroo: A flash cache optimized for tiny objects (2021)](https://engineering.fb.com/2021/10/26/core-infra/kangaroo/)
* [2025-05-22, 18:40:00](https://tech.slashdot.org/story/25/05/22/1759238/mozilla-is-shutting-down-pocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Is Shutting Down Pocket](https://tech.slashdot.org/story/25/05/22/1759238/mozilla-is-shutting-down-pocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 18:29:40](https://news.ycombinator.com/item?id=44065146) - [Practicing graphical debugging using visualizations of the Hilbert curve](https://akkartik.name/debugUIs.html)
* [2025-05-22, 18:25:07](https://news.ycombinator.com/item?id=44065094) - [How to cheat at settlers by loading the dice (2017)](https://izbicki.me/blog/how-to-cheat-at-settlers-of-catan-by-loading-the-dice-and-prove-it-with-p-values.html)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 18:06:37](https://news.ycombinator.com/item?id=44064875) - [Loading Pydantic models from JSON without running out of memory](https://pythonspeed.com/articles/pydantic-json-memory/)
* [2025-05-22, 18:06:25](https://lobste.rs/s/ijzow0/loading_pydantic_models_from_json) - [Loading Pydantic models from JSON without running out of memory](https://pythonspeed.com/articles/pydantic-json-memory/)
* [2025-05-22, 17:59:29](https://lobste.rs/s/qq1y1i/closures_objects_are_equivalent_2013) - [Closures And Objects Are Equivalent (2013)](https://wiki.c2.com/?ClosuresAndObjectsAreEquivalent)
* [2025-05-22, 17:45:00](https://news.slashdot.org/story/25/05/22/1742234/us-treasury-unveils-plan-to-kill-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Treasury Unveils Plan To Kill the Penny](https://news.slashdot.org/story/25/05/22/1742234/us-treasury-unveils-plan-to-kill-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 17:37:50](https://news.ycombinator.com/item?id=44064504) - [The \&quot;AI 2027\&quot; Scenario: How realistic is it?](https://garymarcus.substack.com/p/the-ai-2027-scenario-how-realistic)
* [2025-05-22, 17:20:00](https://slashdot.org/story/25/05/22/1653257/anthropic-releases-claude-4-models-that-can-autonomously-work-for-nearly-a-full-corporate-workday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Releases Claude 4 Models That Can Autonomously Work For Nearly a Full Corporate Workday](https://slashdot.org/story/25/05/22/1653257/anthropic-releases-claude-4-models-that-can-autonomously-work-for-nearly-a-full-corporate-workday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 17:03:53](https://lobste.rs/s/ffsgv1/how_get_your_research_paper_accepted) - [How to Get Your Research Paper Accepted](https://maxwellforbes.com/posts/how-to-get-a-paper-accepted)
* [2025-05-22, 17:00:32](https://news.ycombinator.com/item?id=44064057) - [Show HN: DockFlow – Switch between multiple macOS Dock layouts instantly](https://dockflow.appitstudio.com/)
* [2025-05-22, 16:40:00](https://yro.slashdot.org/story/25/05/22/1623235/russia-to-enforce-location-tracking-app-on-all-foreigners-in-moscow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia To Enforce Location Tracking App On All Foreigners in Moscow](https://yro.slashdot.org/story/25/05/22/1623235/russia-to-enforce-location-tracking-app-on-all-foreigners-in-moscow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 16:34:42](https://news.ycombinator.com/item?id=44063703) - [Claude 4](https://www.anthropic.com/news/claude-4)
* [2025-05-22, 16:30:18](https://news.ycombinator.com/item?id=44063662) - [Mozilla to shut down Pocket on July 8](https://support.mozilla.org/en-US/kb/future-of-pocket)
* [2025-05-22, 16:00:00](https://tech.slashdot.org/story/25/05/22/160217/verizon-asks-for-an-end-to-its-phone-unlocking-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Asks For An End To Its Phone Unlocking Requirements](https://tech.slashdot.org/story/25/05/22/160217/verizon-asks-for-an-end-to-its-phone-unlocking-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 15:50:16](https://news.ycombinator.com/item?id=44063248) - [That fractal that&apos;s been up on my wall for 12 years](https://chriskw.xyz/2025/05/21/Fractal/)
* [2025-05-22, 15:46:11](https://lobste.rs/s/yobqtg/everything_s_bug_issue) - [Everything’s a bug (or an issue)](https://www.bozemanpass.com/everythings-a-bug-or-an-issue/)
* [2025-05-22, 15:39:49](https://news.ycombinator.com/item?id=44063141) - [MCP explained without hype or fluff](https://blog.nilenso.com/blog/2025/05/12/mcp-explained-without-hype-or-fluff/)
* [2025-05-22, 15:30:24](https://news.ycombinator.com/item?id=44063051) - [Near-infrared spatiotemporal color vision enabled by upconversion contact lenses](https://www.cell.com/cell/fulltext/S0092-8674(25)00454-4)
* [2025-05-22, 15:23:40](https://news.ycombinator.com/item?id=44063000) - [Launch HN: WorkDone (YC X25) – AI Audit of Medical Charts](https://news.ycombinator.com/item?id=44063000)
* [2025-05-22, 15:22:00](https://tech.slashdot.org/story/25/05/22/1436255/google-has-a-big-ai-advantage-it-already-knows-everything-about-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Has a Big AI Advantage: It Already Knows Everything About You](https://tech.slashdot.org/story/25/05/22/1436255/google-has-a-big-ai-advantage-it-already-knows-everything-about-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 15:15:27](https://news.ycombinator.com/item?id=44062919) - [Show HN: Whenish – Plan Group Events in iMessages](https://apps.apple.com/us/app/whenish/id6745035749)
* [2025-05-22, 14:40:00](https://yro.slashdot.org/story/25/05/22/1414235/signal-deploys-drm-to-block-microsoft-recalls-invasive-screenshot-collection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Deploys DRM To Block Microsoft Recall&apos;s Invasive Screenshot Collection](https://yro.slashdot.org/story/25/05/22/1414235/signal-deploys-drm-to-block-microsoft-recalls-invasive-screenshot-collection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 14:09:25](https://news.ycombinator.com/item?id=44062227) - [I Built My Own Audio Player](https://nexo.sh/posts/why-i-built-a-native-mp3-player-in-swiftui/)
* [2025-05-22, 14:06:00](https://slashdot.org/story/25/05/22/146257/openai-targets-100-million-ai-device-shipments-in-record-time-after-65-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Targets 100 Million AI Device Shipments in Record Time After $6.5 Billion Deal](https://slashdot.org/story/25/05/22/146257/openai-targets-100-million-ai-device-shipments-in-record-time-after-65-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 14:02:53](https://lobste.rs/s/73eclo/fast_allocations_ruby_3_5) - [Fast Allocations in Ruby 3.5](https://railsatscale.com/2025-05-21-fast-allocations-in-ruby-3-5/)
* [2025-05-22, 14:01:55](https://news.ycombinator.com/item?id=44062160) - [Fast Allocations in Ruby 3.5](https://railsatscale.com/2025-05-21-fast-allocations-in-ruby-3-5/)
* [2025-05-22, 13:59:25](https://news.ycombinator.com/item?id=44062130) - [Adventures in Symbolic Algebra with Model Context Protocol](https://www.stephendiehl.com/posts/computer_algebra_mcp/)
* [2025-05-22, 13:42:11](https://lobste.rs/s/4xjsp2/future_customer_support_is_lies_i_guess) - [The Future of Customer Support is Lies, I Guess](https://aphyr.com/posts/387-the-future-of-customer-support-is-lies-i-guess)
* [2025-05-22, 13:36:30](https://lobste.rs/s/jld6td/another_tale_go_mod_bloat) - [another tale of go.mod bloat](https://flak.tedunangst.com/post/another-tale-of-gomod-bloat)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 13:25:33](https://news.ycombinator.com/item?id=44061836) - [Show HN: SQLite JavaScript - extend your database with JavaScript](https://github.com/sqliteai/sqlite-js)
* [2025-05-22, 13:09:15](https://news.ycombinator.com/item?id=44061698) - [The Philosophy of Byung-Chul Han (2020)](https://newintrigue.com/2020/06/29/the-philosophy-of-byung-chul-han/)
* [2025-05-22, 13:00:00](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Usage of Semicolons In English Books Down Almost Half In Two Decades](https://news.slashdot.org/story/25/05/21/2122224/usage-of-semicolons-in-english-books-down-almost-half-in-two-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 12:57:55](https://news.ycombinator.com/item?id=44061604) - [Free-Threaded Python Library Compatibility Checker](https://ft-checker.com/)
* [2025-05-22, 12:31:48](https://news.ycombinator.com/item?id=44061414) - [Show HN: Pi Co-pilot – Evaluation of AI apps made easy](https://withpi.ai/)
* [2025-05-22, 11:59:03](https://news.ycombinator.com/item?id=44061160) - [Improving performance of rav1d video decoder](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:56:47](https://lobste.rs/s/j3mzif/making_rav1d_video_decoder_1_faster) - [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:53:38](https://lobste.rs/s/ngsbdq/3_years_extremely_remote_work) - [3 Years of Extremely Remote Work](https://www.brendangregg.com/blog/2025-05-22/3-years-of-extremely-remote-work.html)
* [2025-05-22, 11:43:57](https://lobste.rs/s/h0roqw/whippet_gc_notes_on_guile_heuristics_heap) - [Whippet GC notes on Guile, heuristics, and heap growth](https://wingolog.org/archives/2025/05/22/whippet-lab-notebook-guile-heuristics-and-heap-growth)
* [2025-05-22, 11:42:04](https://lobste.rs/s/qx0wzy/transpiler_is_meaningless_word_2023) - [Transpiler is a meaningless word (2023)](https://people.csail.mit.edu/rachit/post/transpiler/)
* [2025-05-22, 11:40:02](https://lobste.rs/s/zgnlne/machinist_machine) - [Machinist and Machine](https://punkx.org/jackdoe/misery.html)
* [2025-05-22, 10:52:44](https://news.ycombinator.com/item?id=44060772) - [Show HN: Curved Space Shader in Three.js (via 4D sphere projection)](https://github.com/bntre/CurvedSpaceShader)
* [2025-05-22, 10:00:00](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wisk Aero, NASA Sign 5-Year Partnership To Advance Sustainable Autonomous Flights](https://science.slashdot.org/story/25/05/21/2114243/wisk-aero-nasa-sign-5-year-partnership-to-advance-sustainable-autonomous-flights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 09:17:57](https://news.ycombinator.com/item?id=44060305) - [Planetfall](https://somethingaboutmaps.wordpress.com/2025/05/20/planetfall/)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 07:00:55](https://lobste.rs/s/lbf9mb/by_default_signal_doesn_t_recall) - [By Default, Signal Doesn&apos;t Recall](https://signal.org/blog/signal-doesnt-recall/)
* [2025-05-22, 07:00:22](https://lobste.rs/s/5imt51/oodle_2_9_14_intel_13th_14th_gen_cpus) - [Oodle 2.9.14 and Intel 13th/14th gen CPUs](https://fgiesen.wordpress.com/2025/05/21/oodle-2-9-14-and-intel-13th-14th-gen-cpus/)
* [2025-05-22, 07:00:00](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Bacteria Have Been Discovered on a Chinese Space Station](https://science.slashdot.org/story/25/05/21/216255/new-bacteria-have-been-discovered-on-a-chinese-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 06:43:04](https://lobste.rs/s/vo1ue5/libinput_preparing_introduce_lua_based) - [libinput Preparing To Introduce A Lua-Based Plugin System For Modifying Devices/Events](https://www.phoronix.com/news/libinput-Lua-Plugin-System)
* [2025-05-22, 06:24:07](https://lobste.rs/s/fw1rhp/recent_disruptive_changes_from) - [Recent disruptive changes from Setuptools](https://lwn.net/SubscriberLink/1020576/fcef31015579a9b1/)
* [2025-05-22, 05:00:00](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denver Detectives Crack Deadly Arson Case Using Teens&apos; Google Search Histories](https://tech.slashdot.org/story/25/05/22/0226258/denver-detectives-crack-deadly-arson-case-using-teens-google-search-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 04:24:33](https://news.ycombinator.com/item?id=44058778) - [The scientific “unit” we call the decibel](https://lcamtuf.substack.com/p/decibels-are-ridiculous)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-22, 03:30:00](https://tech.slashdot.org/story/25/05/21/211204/brembos-new-brakes-cut-particulate-emissions-by-90-percent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brembo&apos;s New Brakes Cut Particulate Emissions By 90 Percent](https://tech.slashdot.org/story/25/05/21/211204/brembos-new-brakes-cut-particulate-emissions-by-90-percent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 02:45:02](https://lobste.rs/s/dtzhkh/kotlin_lsp_kotlin_language_server_plugin) - [kotlin-lsp: Kotlin Language Server and plugin for Visual Studio Code](https://github.com/Kotlin/kotlin-lsp)
* [2025-05-22, 02:00:00](https://tech.slashdot.org/story/25/05/22/0156227/phone-companies-failed-to-warn-senators-about-surveillance-wyden-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Phone Companies Failed To Warn Senators About Surveillance, Wyden Says](https://tech.slashdot.org/story/25/05/22/0156227/phone-companies-failed-to-warn-senators-about-surveillance-wyden-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 01:13:50](https://news.ycombinator.com/item?id=44057820) - [Gemini Diffusion](https://simonwillison.net/2025/May/21/gemini-diffusion/)
* [2025-05-22, 00:44:38](https://lobste.rs/s/asm7t8/typeid_lua) - [TypeID in Lua](https://push.cx/typeid-in-lua)
* [2025-05-22, 00:02:00](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Sues Crypto Startup Unicoin and Its Executives For Fraud](https://yro.slashdot.org/story/25/05/21/2055220/sec-sues-crypto-startup-unicoin-and-its-executives-for-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-21, 23:58:50](https://lobste.rs/s/ih8sng/tales_from_mainframe_modernization) - [Tales From Mainframe Modernization](https://oppi.li/posts/tales_from_mainframe_modernization/)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 22:37:05](https://lobste.rs/s/dgxae8/chatgpt_heard_about_eagles_fans) - [ChatGPT Heard About Eagles Fans](https://www.dbreunig.com/2025/05/21/chatgpt-heard-about-eagles-fans.html)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 16:59:08](https://lobste.rs/s/m3wugb/my_technological_regrets) - [My Technological Regrets](https://jezenthomas.com/2025/01/my-technological-regrets/)
* [2025-05-21, 16:18:30](https://lobste.rs/s/nxroup/introduction_bases_obsidian_help) - [Introduction to Bases - Obsidian Help](https://help.obsidian.md/bases)
* [2025-05-21, 15:33:09](https://lobste.rs/s/eyceuf/vim_vs_kakoune_puzzles) - [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 11:19:59](https://news.ycombinator.com/item?id=44050269) - [A South Korean grand master on the art of the perfect soy sauce](https://www.theguardian.com/world/2025/may/21/without-time-there-is-no-flavour-a-south-korean-grand-master-on-the-art-of-the-perfect-soy-sauce)
* [2025-05-21, 10:14:45](https://lobste.rs/s/96ttp9/reading_code_is_still_most_effective) - [Reading code is still the most effective method to debug multi-thread bug](https://nanxiao.me/en/reading-code-is-still-the-most-effective-method-to-debug-multi-thread-bug/)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-21, 00:50:35](https://lobste.rs/s/dmx9e3/apply_coop_matching_people_with_jobs_fit) - [apply.coop - Matching people with jobs that fit their values &amp; passions](https://apply.coop)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 03:44:30](https://news.ycombinator.com/item?id=44026364) - [Four years of sight reading practice](https://sandrock.co.za/carl/2025/05/four-years-of-sight-reading-pracice/)
* [2025-05-19, 02:11:12](https://news.ycombinator.com/item?id=44025979) - [Poireau: A Sampling Allocation Debugger](https://github.com/backtrace-labs/poireau)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
* [2025-05-19, 00:04:22](https://news.ycombinator.com/item?id=44025283) - [Benchmarking Crimes Meet Formal Verification](https://microkerneldude.org/2025/04/27/benchmarking-crimes-meet-formal-verification/)
* [2025-05-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss) - [U.S. Inks Bill to Force Geo-Tracking Tech for High-End Gaming and AI GPUs](https://soylentnews.org/article.pl?sid=25/05/17/0548228&amp;from=rss)
* [2025-05-18, 14:38:00](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss) - [NASA Keeps Ancient Voyager 1 Spacecraft Alive With Hail Mary Thruster Fix](https://soylentnews.org/article.pl?sid=25/05/16/1759244&amp;from=rss)
* [2025-05-18, 09:53:00](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss) - [White House Scraps Plan to Block Data Brokers From Selling Americans’ Sensitive Data](https://soylentnews.org/article.pl?sid=25/05/16/1754242&amp;from=rss)
* [2025-05-18, 09:32:39](https://news.ycombinator.com/item?id=44020107) - [Inigo Quilez: computer graphics, mathematics, shaders, fractals, demoscene](https://iquilezles.org/articles/)
* [2025-05-18, 05:12:00](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss) - [China&apos;s Hygon Details C86-5G: A 128-Core X86 CPU with Advanced Features and Four-Way SMT](https://soylentnews.org/article.pl?sid=25/05/16/1710236&amp;from=rss)
* [2025-05-18, 00:24:00](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss) - [Oniux by Tor: Isolating Linux Applications at the Kernel Level for Secure Connections](https://soylentnews.org/article.pl?sid=25/05/16/1648245&amp;from=rss)
