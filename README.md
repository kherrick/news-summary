# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Developments

* [FastVLM: Efficient Vision Encoding for Vision Language Models](https://github.com/apple/ml-fastvlm) ([comments](https://lobste.rs/s/yiwfwj/fastvlm_efficient_vision_encoding_for))

* [Asking Chatbots For Short Answers Can Increase Hallucinations, Study Finds](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [HealthBench – An evaluation for AI systems and human health](https://openai.com/index/healthbench/) ([comments](https://news.ycombinator.com/item?id=43965608))

* [Google Developing Software AI Agent](https://developers.slashdot.org/story/25/05/12/225206/google-developing-software-ai-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43968897))

## Emerging Tech and Innovations

* [China Just Made the World's Fastest Transistor and It Is Not Made of Silicon](https://www.zmescience.com/science/news-science/china-just-made-the-worlds-fastest-transistor-and-it-is-not-made-of-silicon/) ([comments](https://lobste.rs/s/tm1x6a/china_just_made_world_s_fastest))

* [Modular verification of MongoDB Transactions using TLA+](http://muratbuffalo.blogspot.com/2025/05/modular-verification-of-mongodb.html) ([comments](https://lobste.rs/s/3h4f6t/modular_verification_mongodb))

* [Nvidia Reportedly Raises GPU Prices by 10-15%](https://hardware.slashdot.org/story/25/05/12/1733225/nvidia-reportedly-raises-gpu-prices-by-10-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43964827))

* [Philips Debuts 3D Printable Components To Repair Products](https://hardware.slashdot.org/story/25/05/12/2041206/philips-debuts-3d-printable-components-to-repair-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/om8y2y/why_bell_labs_worked))

## Policy, Regulations, and Social Impact

* [Texas Senate passes bill requiring solar plants to provide power at night](https://thehill.com/policy/equilibrium-sustainability/5292792-texas-senate-bill-power-cost/) ([comments](https://news.ycombinator.com/item?id=43970003))

* [Nations Meet At UN For 'Killer Robot' Talks](https://tech.slashdot.org/story/25/05/12/2023237/nations-meet-at-un-for-killer-robot-talks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/25/05/12/2156258/vpn-firm-says-it-didnt-know-customers-had-lifetime-subscriptions-cancels-them))

* [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss))

* [Chegg To Lay Off 22% of Workforce as AI Tools Shake Up Edtech Industry](https://slashdot.org/story/25/05/12/1649229/chegg-to-lay-off-22-of-workforce-as-ai-tools-shake-up-edtech-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43964505))

## IT and Software Trends

* [Firefox Moves to GitHub](https://github.com/mozilla-firefox/firefox) ([comments](https://news.ycombinator.com/item?id=43969827))

* [Understanding LucasArts' iMUSE System](https://github.com/meshula/LabMidi/blob/main/LabMuse/imuse-technical.md) ([comments](https://news.ycombinator.com/item?id=43968141))

* [Spall: a code profiler that runs in your browser](https://gravitymoth.com/spall/spall-web.html) ([comments](https://lobste.rs/s/oagdxa/spall_code_profiler_runs_your_browser))

* [Reverse Engineering the 386 Processor's Prefetch Queue Circuitry](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/11/13342024))

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

* [2025-05-13, 06:50:25](https://lobste.rs/s/yiwfwj/fastvlm_efficient_vision_encoding_for) - [FastVLM: Efficient Vision Encoding for Vision Language Models](https://github.com/apple/ml-fastvlm)
* [2025-05-13, 06:34:26](https://news.ycombinator.com/item?id=43970104) - [Persuasion Methods for Engineering Managers](https://newsletter.manager.dev/p/5-powerful-persuasion-methods-for)
* [2025-05-13, 06:08:38](https://news.ycombinator.com/item?id=43970003) - [Texas Senate passes bill requiring solar plants to provide power at night](https://thehill.com/policy/equilibrium-sustainability/5292792-texas-senate-bill-power-cost/)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 05:57:46](https://news.ycombinator.com/item?id=43969950) - [Twitch star HasanAbi says he was detained, questioned by border agents](https://www.washingtonpost.com/immigration/2025/05/12/hasan-piker-detained-border-agents-twitch/)
* [2025-05-13, 05:30:00](https://news.slashdot.org/story/25/05/12/2033217/creatives-demand-ai-comes-clean-on-what-its-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Creatives Demand AI Comes Clean On What It&apos;s Scraping](https://news.slashdot.org/story/25/05/12/2033217/creatives-demand-ai-comes-clean-on-what-its-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 05:23:10](https://news.ycombinator.com/item?id=43969827) - [Firefox Moves to GitHub](https://github.com/mozilla-firefox/firefox)
* [2025-05-13, 03:30:00](https://tech.slashdot.org/story/25/05/12/2112256/reddit-turns-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Turns 20](https://tech.slashdot.org/story/25/05/12/2112256/reddit-turns-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 03:29:47](https://news.ycombinator.com/item?id=43969442) - [TransMLA: Multi-head latent attention is all you need](https://arxiv.org/abs/2502.07864)
* [2025-05-13, 02:19:27](https://lobste.rs/s/0vjs03/why_do_saturation_luminance_go_all_way_240) - [Why do Saturation and Luminance go all the way to 240, but Hue goes only to 239? And why 239 anyway?](https://devblogs.microsoft.com/oldnewthing/20151013-00/?p=91371)
* [2025-05-13, 01:33:42](https://lobste.rs/s/xjcxwe/ys_yaml_done_wisely) - [YS — YAML Done Wisely](https://yamlscript.org/)
* [2025-05-13, 01:25:00](https://developers.slashdot.org/story/25/05/12/225206/google-developing-software-ai-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Developing Software AI Agent](https://developers.slashdot.org/story/25/05/12/225206/google-developing-software-ai-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 01:16:02](https://news.ycombinator.com/item?id=43968897) - [Fastvlm: Efficient vision encoding for vision language models](https://github.com/apple/ml-fastvlm)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
* [2025-05-13, 00:42:00](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asking Chatbots For Short Answers Can Increase Hallucinations, Study Finds](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 00:30:35](https://news.ycombinator.com/item?id=43968713) - [FedRAMP 20x – One Month in and Moving Fast](https://www.fedramp.gov/2025-04-24-fedramp-20x-one-month-in-and-moving-fast/)
* [2025-05-13, 00:02:00](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches New Initiative To Back Startups Building AI](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 23:33:49](https://lobste.rs/s/ba34q8/modern_microframework_for_web) - [A modern microframework for web development in C](https://github.com/savashn/ecewo)
* [2025-05-12, 23:20:00](https://hardware.slashdot.org/story/25/05/12/2041206/philips-debuts-3d-printable-components-to-repair-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Philips Debuts 3D Printable Components To Repair Products](https://hardware.slashdot.org/story/25/05/12/2041206/philips-debuts-3d-printable-components-to-repair-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 22:41:30](https://news.ycombinator.com/item?id=43968141) - [Understanding LucasArts&apos; iMUSE System](https://github.com/meshula/LabMidi/blob/main/LabMuse/imuse-technical.md)
* [2025-05-12, 22:40:00](https://it.slashdot.org/story/25/05/12/2156258/vpn-firm-says-it-didnt-know-customers-had-lifetime-subscriptions-cancels-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VPN Firm Says It Didn&apos;t Know Customers Had Lifetime Subscriptions, Cancels Them](https://it.slashdot.org/story/25/05/12/2156258/vpn-firm-says-it-didnt-know-customers-had-lifetime-subscriptions-cancels-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 22:15:12](https://news.ycombinator.com/item?id=43967962) - [Wtfis: Passive hostname, domain and IP lookup tool for non-robots](https://github.com/pirxthepilot/wtfis)
* [2025-05-12, 22:06:04](https://lobste.rs/s/3h4f6t/modular_verification_mongodb) - [Modular verification of MongoDB Transactions using TLA+](http://muratbuffalo.blogspot.com/2025/05/modular-verification-of-mongodb.html)
* [2025-05-12, 22:02:00](https://tech.slashdot.org/story/25/05/12/2023237/nations-meet-at-un-for-killer-robot-talks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nations Meet At UN For &apos;Killer Robot&apos; Talks](https://tech.slashdot.org/story/25/05/12/2023237/nations-meet-at-un-for-killer-robot-talks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 21:20:00](https://tech.slashdot.org/story/25/05/12/2012210/google-updating-its-g-icon-for-the-first-time-in-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Updating Its &apos;G&apos; Icon For the First Time In 10 Years](https://tech.slashdot.org/story/25/05/12/2012210/google-updating-its-g-icon-for-the-first-time-in-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 21:17:47](https://lobste.rs/s/kzg0jv/multiple_security_issues_screen) - [Multiple Security Issues in Screen](https://security.opensuse.org/2025/05/12/screen-security-issues.html)
* [2025-05-12, 20:40:00](https://news.slashdot.org/story/25/05/12/205228/ticketmaster-now-shows-full-price-of-tickets-up-front?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ticketmaster Now Shows Full Price of Tickets Up Front](https://news.slashdot.org/story/25/05/12/205228/ticketmaster-now-shows-full-price-of-tickets-up-front?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 20:37:45](https://lobste.rs/s/tm1x6a/china_just_made_world_s_fastest) - [China Just Made the World&apos;s Fastest Transistor and It Is Not Made of Silicon](https://www.zmescience.com/science/news-science/china-just-made-the-worlds-fastest-transistor-and-it-is-not-made-of-silicon/)
* [2025-05-12, 20:20:04](https://lobste.rs/s/p51plh/buckaroo_table_ui_expedite_data_analysis) - [Buckaroo - a Table UI to expedite data analysis for notebook environments](https://github.com/paddymul/buckaroo)
* [2025-05-12, 20:12:21](https://lobste.rs/s/bdug4r/can_you_really_trust_permission_pop_up_on) - [Can You Really Trust That Permission Pop-Up On macOS? (CVE-2025-31250)](https://wts.dev/posts/tcc-who/)
* [2025-05-12, 20:02:00](https://slashdot.org/story/25/05/12/1959202/new-pope-chose-his-name-based-on-ais-threats-to-human-dignity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Pope Chose His Name Based On AI&apos;s Threats To &apos;Human Dignity&apos;](https://slashdot.org/story/25/05/12/1959202/new-pope-chose-his-name-based-on-ais-threats-to-human-dignity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 19:52:40](https://news.ycombinator.com/item?id=43966843) - [A conversation about AI for science with Jason Pruet](https://www.lanl.gov/media/publications/1663/0125-qa-jason-pruet)
* [2025-05-12, 19:33:00](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss) - [Reverse Engineering the 386 Processor&apos;s Prefetch Queue Circuitry](https://soylentnews.org/article.pl?sid=25/05/11/1444208&amp;from=rss)
* [2025-05-12, 19:15:00](https://apple.slashdot.org/story/25/05/12/1915237/apple-to-lean-on-ai-tool-to-help-iphone-battery-lifespan-for-devices-in-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Lean on AI Tool To Help iPhone Battery Lifespan for Devices in iOS 19](https://apple.slashdot.org/story/25/05/12/1915237/apple-to-lean-on-ai-tool-to-help-iphone-battery-lifespan-for-devices-in-ios-19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 19:05:03](https://news.ycombinator.com/item?id=43966471) - [Show HN: Lumoar – Free SOC 2 tool for SaaS startups](https://www.lumoar.com)
* [2025-05-12, 18:26:44](https://news.ycombinator.com/item?id=43966089) - [Can you trust that permission pop-up on macOS?](https://wts.dev/posts/tcc-who/)
* [2025-05-12, 17:42:37](https://news.ycombinator.com/item?id=43965608) - [HealthBench – An evaluation for AI systems and human health](https://openai.com/index/healthbench/)
* [2025-05-12, 17:33:54](https://lobste.rs/s/zoudli/two_months_servo_css_nesting_shadow_dom) - [Two months in Servo: CSS nesting, Shadow DOM, Clipboard API, and more](https://servo.org/blog/2025/05/09/this-month-in-servo/)
* [2025-05-12, 17:33:00](https://hardware.slashdot.org/story/25/05/12/1733225/nvidia-reportedly-raises-gpu-prices-by-10-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Reportedly Raises GPU Prices by 10-15%](https://hardware.slashdot.org/story/25/05/12/1733225/nvidia-reportedly-raises-gpu-prices-by-10-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 17:09:56](https://lobste.rs/s/idkfrh/last_yast) - [The last of YaST?](https://lwn.net/SubscriberLink/1020408/8c022fd8256693d5/)
* [2025-05-12, 16:49:00](https://slashdot.org/story/25/05/12/1649229/chegg-to-lay-off-22-of-workforce-as-ai-tools-shake-up-edtech-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chegg To Lay Off 22% of Workforce as AI Tools Shake Up Edtech Industry](https://slashdot.org/story/25/05/12/1649229/chegg-to-lay-off-22-of-workforce-as-ai-tools-shake-up-edtech-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 16:35:19](https://lobste.rs/s/oagdxa/spall_code_profiler_runs_your_browser) - [Spall: a code profiler that runs in your browser](https://gravitymoth.com/spall/spall-web.html)
* [2025-05-12, 16:29:05](https://news.ycombinator.com/item?id=43964827) - [RIP Usenix ATC](https://bcantrill.dtrace.org/2025/05/11/rip-usenix-atc/)
* [2025-05-12, 16:01:31](https://news.ycombinator.com/item?id=43964505) - [Launch HN: ParaQuery (YC X25) – GPU Accelerated Spark/SQL](https://news.ycombinator.com/item?id=43964505)
* [2025-05-12, 16:00:00](https://news.slashdot.org/story/25/05/12/1535204/climate-crisis-threatens-the-banana-the-worlds-most-popular-fruit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Crisis Threatens the Banana, the World&apos;s Most Popular Fruit](https://news.slashdot.org/story/25/05/12/1535204/climate-crisis-threatens-the-banana-the-worlds-most-popular-fruit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 15:46:00](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) - [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss)
* [2025-05-12, 15:32:10](https://lobste.rs/s/om8y2y/why_bell_labs_worked) - [Why Bell Labs Worked](https://1517.substack.com/p/why-bell-labs-worked)
* [2025-05-12, 15:28:38](https://news.ycombinator.com/item?id=43964136) - [The Barbican](https://arslan.io/2025/05/12/barbican-estate/)
* [2025-05-12, 14:54:31](https://news.ycombinator.com/item?id=43963747) - [Demonstrably Secure Software Supply Chains with Nix](https://nixcademy.com/posts/secure-supply-chain-with-nix/)
* [2025-05-12, 14:54:01](https://lobste.rs/s/tjbgo2/hyper_typing) - [Hyper-Typing](https://pscanf.com/s/341/)
* [2025-05-12, 14:41:15](https://lobste.rs/s/kvhhsa/why_vibe_when_you_can_fly_machtiani_is_now) - [Why Vibe When you Can Fly! Machtiani is now Open Source](https://github.com/tursomari/machtiani)
* [2025-05-12, 14:30:21](https://lobste.rs/s/vbfa75/avoid_each_with_object_generally) - [Avoid #each_with_object (generally)](https://clayshentrup.medium.com/avoid-each-with-object-generally-89e3b2800b38)
* [2025-05-12, 14:29:33](https://news.ycombinator.com/item?id=43963397) - [Reviving a modular cargo bike design from the 1930s](https://www.core77.com/posts/136773/Reviving-a-Modular-Cargo-Bike-Design-from-the-1930s)
* [2025-05-12, 14:20:45](https://lobste.rs/s/ysluw7/audio_stack_is_crime_scene) - [The Audio Stack Is a Crime Scene](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-2-the-audio-stack-is-a-crime-scene/)
* [2025-05-12, 13:39:34](https://news.ycombinator.com/item?id=43962770) - [Ruby 3.5 Feature: Namespace on read](https://bugs.ruby-lang.org/issues/21311)
* [2025-05-12, 12:21:33](https://news.ycombinator.com/item?id=43962148) - [University of Texas-led team solves a big problem for fusion energy](https://news.utexas.edu/2025/05/05/university-of-texas-led-team-solves-a-big-problem-for-fusion-energy/)
* [2025-05-12, 11:40:24](https://news.ycombinator.com/item?id=43961908) - [A community-led fork of Organic Maps](https://www.comaps.app/news/2025-05-12/3/)
* [2025-05-12, 10:57:00](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) - [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss)
* [2025-05-12, 10:13:45](https://lobste.rs/s/lqbjgl/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lqbjgl/what_are_you_doing_this_week)
* [2025-05-12, 09:46:36](https://news.ycombinator.com/item?id=43961226) - [Universe expected to decay in 10⁷⁸ years, much sooner than previously thought](https://phys.org/news/2025-05-universe-decay-years-sooner-previously.html)
* [2025-05-12, 09:38:43](https://lobste.rs/s/4abyko/curl_s_ci_job_for_spotting_domain) - [curl&apos;s CI job for spotting domain squatting](https://mastodon.social/@bagder/114493950931893559)
* [2025-05-12, 08:35:00](https://lobste.rs/s/fj4g2x/patela_basement_full_amnesic_servers) - [Patela: A basement full of amnesic servers](https://osservatorionessuno.org/blog/2025/05/patela-a-basement-full-of-amnesic-servers/)
* [2025-05-12, 07:00:17](https://lobste.rs/s/p6vstm/stop_saying_responsible_disclosure) - [Stop Saying \&quot;Responsible Disclosure\&quot;](https://www.da.vidbuchanan.co.uk/blog/responsible-disclosure.html)
* [2025-05-12, 06:12:00](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss) - [Into the Ethical AI Bush](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss)
* [2025-05-12, 02:20:58](https://lobste.rs/s/jh71n7/migrating_codeberg) - [Migrating to Codeberg](https://guix.gnu.org/blog/2025/migrating-to-codeberg/)
* [2025-05-12, 01:28:00](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss) - [Skype is Officially Dead](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss)
* [2025-05-12, 00:39:22](https://news.ycombinator.com/item?id=43958562) - [Air Traffic Control](https://computer.rip/2025-05-11-air-traffic-control.html)
* [2025-05-12, 00:38:49](https://lobste.rs/s/nll8cd/windows_todo_application_built_with_pure) - [Windows Todo application built with pure C and the Win32 API](https://github.com/Efeckc17/simple-todo-c)
* [2025-05-11, 20:43:00](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss) - [openSUSE Removes Deepin After Long String of Security Issues and Unauthorised Security Bypass](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss)
* [2025-05-11, 20:23:34](https://lobste.rs/s/xq41xg/plain_vanilla_web) - [Plain Vanilla Web](https://plainvanillaweb.com/index.html)
* [2025-05-11, 16:52:27](https://lobste.rs/s/kltfhx/impressions_on_new_13_inch_framework) - [Impressions on the new 13 inch Framework laptop](https://marius.federated.id/posts/2025/may/framework)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
* [2025-05-10, 10:40:49](https://news.ycombinator.com/item?id=43944639) - [Policy of Transience](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/transience/)
* [2025-05-10, 08:10:18](https://news.ycombinator.com/item?id=43944007) - [Writing N-body gravity simulations code in Python](https://alvinng4.github.io/grav_sim/5_steps_to_n_body_simulation/)
* [2025-05-10, 07:51:30](https://news.ycombinator.com/item?id=43943942) - [15 Years of Shader Minification](https://www.ctrl-alt-test.fr/2025/15-years-of-shader-minification/)
* [2025-05-10, 06:52:00](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss) - [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss)
* [2025-05-10, 02:04:00](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss) - [DOJ Confirms It Wants To Break Up Google&apos;s Advertising Tech Monopoly](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss)
* [2025-05-09, 21:19:00](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss) - [Software Bloat and Security: have we all Gone Mad?](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss)
* [2025-05-09, 19:25:05](https://news.ycombinator.com/item?id=43940172) - [NASA study reveals Venus crust surprise](https://science.nasa.gov/science-research/astromaterials/nasa-study-reveals-venus-crust-surprise/)
* [2025-05-09, 18:48:03](https://news.ycombinator.com/item?id=43939877) - [The Beam](https://www.erlang-solutions.com/blog/the-beam-erlangs-virtual-machine/)
* [2025-05-09, 16:33:00](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss) - [The Future of Data Storage Might be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss)
* [2025-05-09, 13:44:04](https://news.ycombinator.com/item?id=43936661) - [Revisiting Image Maps](https://css-tricks.com/revisiting-image-maps/)
* [2025-05-09, 11:46:00](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) - [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss)
* [2025-05-09, 08:34:56](https://news.ycombinator.com/item?id=43934869) - [Open Hardware Ethernet Switch project, part 1](https://serd.es/2025/05/08/Switch-project-pt1.html)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
