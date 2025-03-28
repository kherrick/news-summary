# [News Summary](https://kherrick.github.io/news-summary/)

## Politics and Economic Concerns

* [Trump's FCC Starts Harassing Public Broadcasters with Bogus Investigations](https://www.techdirt.com/2025/03/28/trumps-fcc-starts-harassing-public-broadcasters-with-bogus-investigations/) ([comments](https://news.ycombinator.com/item?id=43504765))

* [IBM US Cuts May Run Deeper Than Feared - and the Jobs Are Heading To India](https://slashdot.org/story/25/03/28/0623217/ibm-us-cuts-may-run-deeper-than-feared---and-the-jobs-are-heading-to-india?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43503265))

## Technology Advancements and Challenges

* [OpenAI Says 'Our GPUs Are Melting' As It Limits ChatGPT Image Generation Requests](https://slashdot.org/story/25/03/28/003227/openai-says-our-gpus-are-melting-as-it-limits-chatgpt-image-generation-requests?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43499823))

* [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) ([comments](https://news.ycombinator.com/item?id=43504322))

## Science and Global Events

* [7.7 magnitude earthquake hits Southeast Asia, affecting Myanmar and Thailand](https://twitter.com/TaraBull808/status/1905534938558157139) ([comments](https://news.ycombinator.com/item?id=43502037))

* [Mid-pregnancy pollution exposure linked to postpartum depression](https://www.bps.org.uk/research-digest/mid-pregnancy-pollution-exposure-linked-postpartum-depression-new-study-suggests) ([comments](https://news.ycombinator.com/item?id=43502510))

## Cultural and Social Insights

* [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) ([comments](https://news.ycombinator.com/item?id=43498338))

* [I drove 300 miles, then asked police to send me surveillance footage of my car.](https://cardinalnews.org/2025/03/28/i-drove-300-miles-in-rural-virginia-then-asked-police-to-send-me-their-public-surveillance-footage-of-my-car-heres-what-i-learned/) ([comments](https://news.ycombinator.com/item?id=43504413))

## Scientific Discoveries and Developments

* [Giant, fungus-like organism may be a completely unknown branch of life](https://www.livescience.com/animals/giant-fungus-like-organism-may-be-a-completely-unknown-branch-of-life) ([comments](https://news.ycombinator.com/item?id=43499342))

* [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) ([comments](https://news.ycombinator.com/item?id=43469393))

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

* [2025-03-28, 12:52:12](https://news.ycombinator.com/item?id=43504765) - [Trump's FCC Starts Harassing Public Broadcasters with Bogus Investigations](https://www.techdirt.com/2025/03/28/trumps-fcc-starts-harassing-public-broadcasters-with-bogus-investigations/)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 12:42:41](https://lobste.rs/s/05vftn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/05vftn/what_are_you_doing_this_weekend)
* [2025-03-28, 12:30:00](https://apple.slashdot.org/story/25/03/28/0634230/apple-needs-a-snow-sequoia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Apple Needs a Snow Sequoia'](https://apple.slashdot.org/story/25/03/28/0634230/apple-needs-a-snow-sequoia?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 12:19:32](https://lobste.rs/s/flbzsd/benchmarking_distribution_some_o3) - [Benchmarking a distribution (and some -O3 results)](https://discourse.ubuntu.com/t/benchmarking-a-distribution-and-some-o3-results/58027)
* [2025-03-28, 12:14:06](https://news.ycombinator.com/item?id=43504413) - [I drove 300 miles, then asked police to send me surveillance footage of my car.](https://cardinalnews.org/2025/03/28/i-drove-300-miles-in-rural-virginia-then-asked-police-to-send-me-their-public-surveillance-footage-of-my-car-heres-what-i-learned/)
* [2025-03-28, 12:04:53](https://news.ycombinator.com/item?id=43504322) - [Nobody should be a \"content creator\"](https://christianheilmann.com/2025/03/12/nobody-should-be-a-content-creator/)
* [2025-03-28, 12:02:32](https://news.ycombinator.com/item?id=43504299) - [PermitFlow (YC W22) Is Hiring Senior/Staff Engineers in NYC](https://jobs.ashbyhq.com/permitflow?departmentId=d33195eb-8978-4439-abc6-5a8a072de808)
* [2025-03-28, 11:50:51](https://lobste.rs/s/7gswhq/calculate_throughput_with_llvm_s) - [Calculate Throughput with LLVM's Scheduling Model](https://myhsu.xyz/llvm-sched-interval-throughput/)
* [2025-03-28, 11:24:10](https://lobste.rs/s/gvz2wn/let_s_take_look_at_jep_483_ahead_time_class) - [Let's Take a Look at... JEP 483: Ahead-of-Time Class Loading & Linking](https://www.morling.dev/blog/jep-483-aot-class-loading-linking/)
* [2025-03-28, 11:17:35](https://lobste.rs/s/ej4ps3/safeishly_use_non_reentrant_libraries) - [Safeishly use non-reentrant libraries with POSIX threads](https://git.sr.ht/~runxiyu/dlcage)
* [2025-03-28, 11:11:55](https://news.ycombinator.com/item?id=43503960) - [Let's Take a Look at JEP 483: Ahead-of-Time Class Loading and Linking](https://www.morling.dev/blog/jep-483-aot-class-loading-linking/)
* [2025-03-28, 11:04:40](https://news.ycombinator.com/item?id=43503897) - [MilliForth-6502: The smallest Forth real programming language for 6502](https://github.com/agsb/milliForth-6502)
* [2025-03-28, 11:02:51](https://news.ycombinator.com/item?id=43503881) - [Jevons Paradox: A Personal Perspective](https://fakepixels.substack.com/p/jevons-paradox-a-personal-perspective)
* [2025-03-28, 10:47:02](https://news.ycombinator.com/item?id=43503779) - [iPhone users can now set WhatsApp as their default calling and texting app](https://www.theverge.com/news/637489/iphone-whatsapp-default-calling-texting-app)
* [2025-03-28, 10:26:26](https://lobste.rs/s/i3ya4n/apple_needs_snow_sequoia) - [Apple Needs a Snow Sequoia](https://reviews.ofb.biz/safari/article/1300.html)
* [2025-03-28, 09:45:00](https://slashdot.org/story/25/03/28/0623217/ibm-us-cuts-may-run-deeper-than-feared---and-the-jobs-are-heading-to-india?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [IBM US Cuts May Run Deeper Than Feared - and the Jobs Are Heading To India](https://slashdot.org/story/25/03/28/0623217/ibm-us-cuts-may-run-deeper-than-feared---and-the-jobs-are-heading-to-india?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 09:32:04](https://news.ycombinator.com/item?id=43503265) - [7.7 magnitude earthquake hits Southeast Asia, affecting Myanmar and Thailand](https://twitter.com/TaraBull808/status/1905534938558157139)
* [2025-03-28, 08:00:00](https://science.slashdot.org/story/25/03/28/0720237/as-nasa-faces-cuts-china-reveals-ambitious-plans-for-planetary-exploration?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As NASA Faces Cuts, China Reveals Ambitious Plans For Planetary Exploration](https://science.slashdot.org/story/25/03/28/0720237/as-nasa-faces-cuts-china-reveals-ambitious-plans-for-planetary-exploration?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 07:25:35](https://news.ycombinator.com/item?id=43502510) - [Mid-pregnancy pollution exposure linked to postpartum depression](https://www.bps.org.uk/research-digest/mid-pregnancy-pollution-exposure-linked-postpartum-depression-new-study-suggests)
* [2025-03-28, 06:54:03](https://lobste.rs/s/ment9k/xee_modern_xpath_xslt_engine_rust) - [Xee: A Modern XPath and XSLT Engine in Rust](https://blog.startifact.com/posts/xee/)
* [2025-03-28, 06:14:00](https://slashdot.org/story/25/03/28/0614200/anthropic-maps-ai-model-thought-processes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Maps AI Model 'Thought' Processes](https://slashdot.org/story/25/03/28/0614200/anthropic-maps-ai-model-thought-processes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 06:07:39](https://news.ycombinator.com/item?id=43502037) - [Estimating Camera Motion from a Single Motion-Blurred Image](https://jerredchen.github.io/image-as-imu/)
* [2025-03-28, 05:57:27](https://news.ycombinator.com/item?id=43501989) - [Architecture Patterns with Python](https://www.cosmicpython.com/book/preface.html)
* [2025-03-28, 04:30:00](https://it.slashdot.org/story/25/03/28/0421236/labor-arbitrage-rip?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Labor Arbitrage RIP](https://it.slashdot.org/story/25/03/28/0421236/labor-arbitrage-rip?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 03:30:00](https://tech.slashdot.org/story/25/03/28/0019211/virginia-will-punish-fast-drivers-with-devices-that-limit-their-speed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Virginia Will Punish Fast Drivers With Devices That Limit Their Speed](https://tech.slashdot.org/story/25/03/28/0019211/virginia-will-punish-fast-drivers-with-devices-that-limit-their-speed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 03:20:28](https://lobste.rs/s/qqvrip/way_we_re_thinking_about_breaking_changes) - [The way we're thinking about breaking changes is really silly](https://welltypedwitch.bearblog.dev/the-way-were-thinking-about-breaking-changes-is-really-silly/)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-28, 01:24:30](https://lobste.rs/s/uxrjr6/milliforth_for_6502) - [milliForth for the 6502](https://github.com/agsb/milliForth-6502)
* [2025-03-28, 01:06:47](https://lobste.rs/s/f8x4c6/spectec_has_been_adopted) - [SpecTec has been adopted](https://webassembly.org/news/2025-03-27-spectec/)
* [2025-03-28, 00:38:53](https://news.ycombinator.com/item?id=43499992) - [Things I would have told myself before building an autorouter](https://blog.autorouting.com/p/13-things-i-would-have-told-myself)
* [2025-03-28, 00:30:00](https://slashdot.org/story/25/03/28/003227/openai-says-our-gpus-are-melting-as-it-limits-chatgpt-image-generation-requests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Says 'Our GPUs Are Melting' As It Limits ChatGPT Image Generation Requests](https://slashdot.org/story/25/03/28/003227/openai-says-our-gpus-are-melting-as-it-limits-chatgpt-image-generation-requests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-28, 00:16:29](https://news.ycombinator.com/item?id=43499823) - [A note on the USB-to-PS/2 mouse adapter that came with Microsoft mouse devices](https://devblogs.microsoft.com/oldnewthing/20250325-00/?p=110993)
* [2025-03-28, 00:00:16](https://lobste.rs/s/xfojey/sjs_static_aot_compiler_for_subset) - [SJS: a static AOT compiler for a subset of JavaScript (2016)](https://github.com/Samsung/SJS)
* [2025-03-27, 23:58:05](https://lobste.rs/s/ki4dkb/take_this_on_call_rotation_shove_it) - [Take this on-call rotation and shove it](https://www.scottsmitelli.com/articles/take-oncall-and-shove-it/)
* [2025-03-27, 23:55:00](https://hardware.slashdot.org/story/25/03/27/2351255/us-robotics-companies-push-for-national-strategy-to-compete-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Robotics Companies Push For National Strategy To Compete With China](https://hardware.slashdot.org/story/25/03/27/2351255/us-robotics-companies-push-for-national-strategy-to-compete-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 23:15:28](https://news.ycombinator.com/item?id=43499342) - [Giant, fungus-like organism may be a completely unknown branch of life](https://www.livescience.com/animals/giant-fungus-like-organism-may-be-a-completely-unknown-branch-of-life)
* [2025-03-27, 23:10:00](https://slashdot.org/story/25/03/27/239223/ubisoft-spins-out-subsidiary-with-a-billion-dollar-investment-from-tencent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ubisoft Spins Out Subsidiary With a Billion-Dollar Investment From Tencent](https://slashdot.org/story/25/03/27/239223/ubisoft-spins-out-subsidiary-with-a-billion-dollar-investment-from-tencent?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 22:39:51](https://news.ycombinator.com/item?id=43499045) - [Most promoted and blocked domains on Kagi](https://kagi.com/stats?stat=leaderboard)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 22:00:00](https://tech.slashdot.org/story/25/03/27/2058218/hm-to-use-digital-clones-of-models-in-ads-and-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [H&amp;M To Use Digital Clones of Models In Ads and Social Media](https://tech.slashdot.org/story/25/03/27/2058218/hm-to-use-digital-clones-of-models-in-ads-and-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 21:37:46](https://news.ycombinator.com/item?id=43498481) - [Golang on the Playstation 2](https://rgsilva.com/blog/ps2-go-part-1/)
* [2025-03-27, 21:22:42](https://news.ycombinator.com/item?id=43498338) - [I genuinely don't understand why some people are still bullish about LLMs](https://twitter.com/skdh/status/1905132853672784121)
* [2025-03-27, 21:20:00](https://tech.slashdot.org/story/25/03/27/2052222/google-maps-can-soon-scan-your-screenshots-to-plan-your-vacation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Maps Can Soon Scan Your Screenshots To Plan Your Vacation](https://tech.slashdot.org/story/25/03/27/2052222/google-maps-can-soon-scan-your-screenshots-to-plan-your-vacation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 20:45:13](https://news.ycombinator.com/item?id=43497954) - [Learning Theory from First Principles [pdf]](https://www.di.ens.fr/~fbach/ltfp_book.pdf)
* [2025-03-27, 20:40:00](https://news.slashdot.org/story/25/03/27/1958240/columbia-university-suspends-student-behind-interview-cheating-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Columbia University Suspends Student Behind Interview Cheating AI](https://news.slashdot.org/story/25/03/27/1958240/columbia-university-suspends-student-behind-interview-cheating-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 20:19:38](https://news.ycombinator.com/item?id=43497719) - [How to Use Em Dashes (–), En Dashes (–), and Hyphens (-)](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use)
* [2025-03-27, 20:00:00](https://tech.slashdot.org/story/25/03/27/1923257/nvidias-geforce-rtx-5090-laptop-graphics-benchmarks-revealed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia's GeForce RTX 5090 Laptop Graphics Benchmarks Revealed](https://tech.slashdot.org/story/25/03/27/1923257/nvidias-geforce-rtx-5090-laptop-graphics-benchmarks-revealed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 19:49:28](https://news.ycombinator.com/item?id=43497394) - [I tried making artificial sunlight at home](https://victorpoughon.fr/i-tried-making-artificial-sunlight-at-home/)
* [2025-03-27, 19:36:39](https://lobste.rs/s/oqbluo/roadmap_for_modern_plasma_login_manager) - [A Roadmap for a modern Plasma Login Manager](https://blog.davidedmundson.co.uk/blog/a-roadmap-for-a-modern-plasma-login-manager/)
* [2025-03-27, 19:20:00](https://yro.slashdot.org/story/25/03/27/1918205/oracle-customers-confirm-data-stolen-in-alleged-cloud-breach-is-valid?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle Customers Confirm Data Stolen In Alleged Cloud Breach Is Valid](https://yro.slashdot.org/story/25/03/27/1918205/oracle-customers-confirm-data-stolen-in-alleged-cloud-breach-is-valid?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 19:06:54](https://lobste.rs/s/c0ezfx/open_letter_meta_support_true_messaging) - [Open Letter to Meta: Support True Messaging Interoperability with XMPP](https://xmpp.org/announcements/open-letter-meta-dma/)
* [2025-03-27, 18:14:18](https://lobste.rs/s/aygeaq/atom_vs_rss_2013) - [Atom vs. RSS (2013)](https://nullprogram.com/blog/2013/09/23/)
* [2025-03-27, 18:10:00](https://it.slashdot.org/story/25/03/27/1727252/new-windows-scheduled-task-will-launch-office-apps-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Windows Scheduled Task Will Launch Office Apps Faster](https://it.slashdot.org/story/25/03/27/1727252/new-windows-scheduled-task-will-launch-office-apps-faster?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 17:37:44](https://lobste.rs/s/g8pxhy/things_go_wrong_with_disk_io) - [Things that go wrong with disk IO](https://notes.eatonphil.com/2025-03-27-things-that-go-wrong-with-disk-io.html)
* [2025-03-27, 17:09:13](https://news.ycombinator.com/item?id=43495644) - [Abundance isn't going to happen unless politicians are scared of the status quo](https://inpractice.yimbyaction.org/p/abundance-isnt-going-to-happen-unless)
* [2025-03-27, 17:05:36](https://news.ycombinator.com/item?id=43495617) - [Tracing the thoughts of a large language model](https://www.anthropic.com/research/tracing-thoughts-language-model)
* [2025-03-27, 16:24:49](https://lobste.rs/s/69ct0v/tag_proposal_logicprogramming) - [Tag Proposal: logicprogramming](https://lobste.rs/s/69ct0v/tag_proposal_logicprogramming)
* [2025-03-27, 16:10:00](https://lobste.rs/s/2tfh34/spade_hardware_description_language) - [Spade, a hardware description language inspired by modern software languages](https://spade-lang.org/)
* [2025-03-27, 15:26:13](https://lobste.rs/s/czhpip/normal_engineers_are_key_great_teams) - [“Normal” engineers are the key to great teams](https://spectrum.ieee.org/10x-engineer)
* [2025-03-27, 15:17:40](https://lobste.rs/s/ztrpkk/piranesi_s_perspective_trick) - [Piranesi’s Perspective Trick](https://medium.com/@brunopostle/piranesis-perspective-trick-6bcd7a754da9)
* [2025-03-27, 15:06:26](https://news.ycombinator.com/item?id=43494427) - [Launch HN: Continue (YC S23) – Create custom AI code assistants](https://hub.continue.dev/explore/assistants)
* [2025-03-27, 13:26:01](https://lobste.rs/s/youq7y/how_write_blog_posts_developers_read) - [How to Write Blog Posts that Developers Read](https://refactoringenglish.com/chapters/write-blog-posts-developers-read/)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 09:50:25](https://lobste.rs/s/ye8vcd/prepare_ing_for_execution_new_api_for) - [prepare()-ing for execution: a new API for process creation](https://gist.github.com/clausecker/721cda7172b82c179032859f3216a8ee)
* [2025-03-27, 09:05:35](https://lobste.rs/s/pntonn/war_story_hardest_bug_i_ever_debugged) - [War story: the hardest bug I ever debugged](https://www.clientserver.dev/p/war-story-the-hardest-bug-i-ever)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
* [2025-03-26, 22:44:00](https://lobste.rs/s/b2yv9c/google_will_now_develop_android_os) - [Google will now develop the Android OS in private](https://www.androidauthority.com/google-android-development-aosp-3538503/)
* [2025-03-26, 20:20:00](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss) - [Producing Wafers at TSMC Arizona is Only 10% More Expensive Than in Taiwan](https://soylentnews.org/article.pl?sid=25/03/26/0237223&from=rss)
* [2025-03-26, 16:50:47](https://lobste.rs/s/tzqlyn/ferrous_systems_donates_ferrocene) - [Ferrous Systems Donates Ferrocene Language Specification to Rust Project](https://rustfoundation.org/media/ferrous-systems-donates-ferrocene-language-specification-to-rust-project/)
* [2025-03-26, 15:35:00](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss) - [4-Day Work-Week UK Pilot Due in Tech Land by Early Summer](https://soylentnews.org/article.pl?sid=25/03/26/0243240&from=rss)
* [2025-03-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss) - [European Coalition Pushes For Second Chips Act Funding To Boost Semiconductor Sector](https://soylentnews.org/article.pl?sid=25/03/24/1817219&from=rss)
* [2025-03-26, 06:10:00](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss) - [Harnessing Nature's Fractals for Flexible Electronics: Biomimetic Fabrication Technique Uses Leaf](https://soylentnews.org/article.pl?sid=25/03/24/1815205&from=rss)
* [2025-03-26, 01:25:00](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss) - [The 25 Years of Finnix](https://soylentnews.org/article.pl?sid=25/03/24/1812238&from=rss)
* [2025-03-25, 20:38:00](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss) - [Device Enables Direct Communication Among Multiple Quantum Processors](https://soylentnews.org/article.pl?sid=25/03/24/154217&from=rss)
* [2025-03-25, 15:52:00](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss) - [Decades-Long Quest Leads to New Antibiotic Compounds](https://soylentnews.org/article.pl?sid=25/03/24/1454238&from=rss)
* [2025-03-25, 12:20:38](https://news.ycombinator.com/item?id=43470339) - [Entropy Attacks](https://blog.cr.yp.to/20140205-entropy.html)
* [2025-03-25, 11:54:19](https://news.ycombinator.com/item?id=43470146) - [How I Choose What to Work On (2023)](https://tynan.com/workonwhat/)
* [2025-03-25, 11:53:30](https://news.ycombinator.com/item?id=43470138) - [Preschoolers can reason better than we think, study suggests](https://phys.org/news/2025-03-preschoolers.html)
* [2025-03-25, 11:09:00](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss) - [Squirrels Inspire Leaping Strategy for Salto Robot](https://soylentnews.org/article.pl?sid=25/03/24/0347235&from=rss)
* [2025-03-25, 09:28:24](https://news.ycombinator.com/item?id=43469393) - [Plasmonic Modulators Break Wireless Terahertz Barrier](https://spectrum.ieee.org/terahertz-waves-2671362433)
* [2025-03-25, 06:24:00](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss) - [Sperm Donation Giant California Cryobank Warns of a Data Breach](https://soylentnews.org/article.pl?sid=25/03/24/0335233&from=rss)
* [2025-03-25, 01:37:00](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss) - [Cement Sand Substitute Made Directly From Seawater, Electricity and CO2](https://soylentnews.org/article.pl?sid=25/03/23/1454225&from=rss)
* [2025-03-24, 20:52:00](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss) - [\"Old Stump\" in Texas Turns Out to be Incredibly Rare Mammoth Tusk](https://soylentnews.org/article.pl?sid=25/03/23/1444231&from=rss)
* [2025-03-24, 16:09:00](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss) - [AMD Launches Gaia Open Source Project for Running LLMs Locally on Any PC](https://soylentnews.org/article.pl?sid=25/03/23/1439235&from=rss)
* [2025-03-24, 15:01:15](https://news.ycombinator.com/item?id=43461885) - [Retreating Glaciers Expose 1,500 Miles of Coastline](https://e360.yale.edu/digest/climate-glaciers-coastline-study)
* [2025-03-24, 12:48:16](https://news.ycombinator.com/item?id=43460455) - [Every Flop Counts: Scaling a 300B LLM Without Premium GPUs](https://arxiv.org/abs/2503.05139)
* [2025-03-24, 11:27:00](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss) - [Italy Demands Google Poison DNS Under Strict Piracy Shield Law](https://soylentnews.org/article.pl?sid=25/03/23/1437244&from=rss)
* [2025-03-24, 06:42:00](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss) - [Microsoft Trust Signing Service Abused to Code-Sign Malware](https://soylentnews.org/article.pl?sid=25/03/23/1435254&from=rss)
* [2025-03-24, 01:55:00](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss) - [Autopsies Can Reveal Intimate Health Details. Should They be Kept Private?](https://soylentnews.org/article.pl?sid=25/03/23/1422252&from=rss)
