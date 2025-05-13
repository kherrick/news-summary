# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Firefox moves to GitHub](https://github.com/mozilla-firefox/firefox) - Mozilla's decision to move Firefox's development to GitHub aims to foster collaboration, streamline contributions, and enhance transparency. [Comments](https://lobste.rs/s/0er0sj/firefox_moves_github).

* [Preventing outages with pkill's new --require-handler flag](https://chrisdown.name/2025/05/13/safer-signal-sending-with-pkill-require-handler.html) - An update to pkill enhances reliability by ensuring handlers are in place before signals are sent. [Comments](https://lobste.rs/s/o4rqpo/preventing_outages_with_pkill_s_new).

* [Lock-Free Rust: How to Build a Rollercoaster While It’s on Fire](https://yeet.cx/blog/lock-free-rust/) - Techniques for building lock-free Rust programs explained through a captivating analogy of managing chaos. [Comments](https://lobste.rs/s/zcpnge/lock_free_rust_how_build_rollercoaster).

* [Fx v36 - JSON terminal viewer](https://github.com/antonmedv/fx/releases/tag/36.0.0) - The latest update to this JSON viewer for terminals introduces new functionality and performance improvements. [Comments](https://lobste.rs/s/bxgmid/fx_v36_json_terminal_viewer).

## AI and Technology Trends

* [Apple Wants People To Control Devices With Their Thoughts](https://apple.slashdot.org/story/25/05/13/1216217/apple-wants-people-to-control-devices-with-their-thoughts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's foray into neural input technology could reshape device interactions. [Comments](https://apple.slashdot.org/story/25/05/13/1216217/apple-wants-people-to-control-devices-with-their-thoughts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - Research highlights workplace biases against AI users. [Comments](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss).

* [Google Launches New Initiative To Back Startups Building AI](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google announces funding to encourage innovation in artificial intelligence development. [Comments](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Cybersecurity and Privacy

* [Multiple Security Issues in GNU Screen](https://www.openwall.com/lists/oss-security/2025/05/12/1) - Several critical vulnerabilities discovered in GNU Screen software. [Comments](https://news.ycombinator.com/item?id=43971716).

* [Can You Really Trust That Permission Pop-Up On macOS? (CVE-2025-31250)](https://wts.dev/posts/tcc-who/) - Some macOS permission dialogues may not be as secure as they appear. [Comments](https://lobste.rs/s/bdug4r/can_you_really_trust_permission_pop_up_on).

* [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - Alarming trends in zero-day vulnerabilities emphasize the need for robust cybersecurity defenses. [Comments](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss).

## Space and Science

* [Universe Expected To Decay Much Sooner Than Previously Thought](https://science.slashdot.org/story/25/05/13/0057207/universe-expected-to-decay-much-sooner-than-previously-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A grim prediction about the universe's stability emerges from new research. [Comments](https://science.slashdot.org/story/25/05/13/0057207/universe-expected-to-decay-much-sooner-than-previously-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [China's Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - A bold mission by China to uncover Venus's secrets through atmospheric sampling. [Comments](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss).

* [Astronomers Used Old 'Maps' to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - Scientists leverage historical star charts to hunt for a possible ninth planet. [Comments](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss).

## Historical and Analytical Insights

* [One Hundred and One Rules of Effective Living](https://mitchhorowitz.substack.com/p/101-rules-of-effective-living) - A concise guide to living a principled and fulfilling life. [Comments](https://news.ycombinator.com/item?id=43971791).

* [Why Bell Labs Worked](https://1517.substack.com/p/why-bell-labs-worked) - An exploration of the factors that made Bell Labs a hub of innovation. [Comments](https://lobste.rs/s/om8y2y/why_bell_labs_worked).

* [The world could run on older hardware if software optimization was a priority](https://twitter.com/ID_AA_Carmack/status/1922100771392520710) - John Carmack argues that better software optimization could reduce hardware waste. [Comments](https://news.ycombinator.com/item?id=43971464).

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

* [2025-05-13, 13:04:06](https://lobste.rs/s/0er0sj/firefox_moves_github) - [Firefox moves to GitHub](https://github.com/mozilla-firefox/firefox)
* [2025-05-13, 12:16:00](https://apple.slashdot.org/story/25/05/13/1216217/apple-wants-people-to-control-devices-with-their-thoughts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Wants People To Control Devices With Their Thoughts](https://apple.slashdot.org/story/25/05/13/1216217/apple-wants-people-to-control-devices-with-their-thoughts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 11:41:42](https://news.ycombinator.com/item?id=43971791) - [One Hundred and One Rules of Effective Living](https://mitchhorowitz.substack.com/p/101-rules-of-effective-living)
* [2025-05-13, 11:35:49](https://lobste.rs/s/o4rqpo/preventing_outages_with_pkill_s_new) - [Preventing outages with pkill&apos;s new --require-handler flag](https://chrisdown.name/2025/05/13/safer-signal-sending-with-pkill-require-handler.html)
* [2025-05-13, 11:28:49](https://news.ycombinator.com/item?id=43971716) - [Multiple Security Issues in GNU Screen](https://www.openwall.com/lists/oss-security/2025/05/12/1)
* [2025-05-13, 11:25:12](https://lobste.rs/s/bs3bmj/experiment_on_your_code_freely_with_git) - [Experiment on your code freely with Git worktree](https://opensource.com/article/21/4/git-worktree)
* [2025-05-13, 11:20:33](https://lobste.rs/s/c5mpmx/accessibility_update_gtk_development) - [An accessibility update – GTK Development Blog](https://blog.gtk.org/2025/05/12/an-accessibility-update/)
* [2025-05-13, 10:46:00](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss) - [75 Zero-Days Exploited in 2024 With Focus on Enterprise Tech](https://soylentnews.org/article.pl?sid=25/05/12/1123248&amp;from=rss)
* [2025-05-13, 10:31:09](https://news.ycombinator.com/item?id=43971464) - [The world could run on older hardware if software optimization was a priority](https://twitter.com/ID_AA_Carmack/status/1922100771392520710)
* [2025-05-13, 10:03:05](https://lobste.rs/s/rmavpb/how_is_stack_memory_allocated_when_using) - [How is Stack memory allocated when using &apos;push&apos; or &apos;sub&apos; x86 instructions?](https://stackoverflow.com/a/46791370)
* [2025-05-13, 10:00:00](https://slashdot.org/story/25/05/12/2124207/the-stealthy-lab-cooking-up-amazons-secret-sauce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Stealthy Lab Cooking Up Amazon&apos;s Secret Sauce](https://slashdot.org/story/25/05/12/2124207/the-stealthy-lab-cooking-up-amazons-secret-sauce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 09:02:02](https://news.ycombinator.com/item?id=43970959) - [Nextcloud cries foul over Google Play Store app rejection](https://www.theregister.com/2025/05/13/nextcloud_play_store_complaint/)
* [2025-05-13, 08:41:25](https://news.ycombinator.com/item?id=43970837) - [Ask HN: How are you acquiring your first hundred users?](https://news.ycombinator.com/item?id=43970837)
* [2025-05-13, 08:34:08](https://lobste.rs/s/b4o1h8/programming_language_made_for_me) - [A programming language made for me](https://zylinski.se/posts/a-programming-language-for-me/)
* [2025-05-13, 08:06:59](https://news.ycombinator.com/item?id=43970637) - [Anti-Personnel Computing (2023)](https://erratique.ch/writings/anti-personnel-computing)
* [2025-05-13, 07:29:19](https://lobste.rs/s/zcpnge/lock_free_rust_how_build_rollercoaster) - [Lock-Free Rust: How to Build a Rollercoaster While It’s on Fire](https://yeet.cx/blog/lock-free-rust/)
* [2025-05-13, 07:12:54](https://news.ycombinator.com/item?id=43970363) - [Trial by Fire: The crash of Aeroflot flight 1492](https://admiralcloudberg.medium.com/trial-by-fire-the-crash-of-aeroflot-flight-1492-ee61cebcf6ec)
* [2025-05-13, 07:01:04](https://lobste.rs/s/bxgmid/fx_v36_json_terminal_viewer) - [Fx v36 - JSON terminal viewer](https://github.com/antonmedv/fx/releases/tag/36.0.0)
* [2025-05-13, 07:00:00](https://science.slashdot.org/story/25/05/13/0057207/universe-expected-to-decay-much-sooner-than-previously-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Universe Expected To Decay Much Sooner Than Previously Thought](https://science.slashdot.org/story/25/05/13/0057207/universe-expected-to-decay-much-sooner-than-previously-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 06:01:00](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss) - [People Who Use AI at Work Are Perceived by Colleagues as Lazier and Less Competent, Study Finds](https://soylentnews.org/article.pl?sid=25/05/12/1114249&amp;from=rss)
* [2025-05-13, 05:30:00](https://news.slashdot.org/story/25/05/12/2033217/creatives-demand-ai-comes-clean-on-what-its-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Creatives Demand AI Comes Clean On What It&apos;s Scraping](https://news.slashdot.org/story/25/05/12/2033217/creatives-demand-ai-comes-clean-on-what-its-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 05:23:10](https://news.ycombinator.com/item?id=43969827) - [Mozilla Firefox – Official GitHub repo](https://github.com/mozilla-firefox/firefox)
* [2025-05-13, 03:30:00](https://tech.slashdot.org/story/25/05/12/2112256/reddit-turns-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Turns 20](https://tech.slashdot.org/story/25/05/12/2112256/reddit-turns-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 03:29:47](https://news.ycombinator.com/item?id=43969442) - [TransMLA: Multi-head latent attention is all you need](https://arxiv.org/abs/2502.07864)
* [2025-05-13, 02:19:27](https://lobste.rs/s/0vjs03/why_do_saturation_luminance_go_all_way_240) - [Why do Saturation and Luminance go all the way to 240, but Hue goes only to 239? And why 239 anyway?](https://devblogs.microsoft.com/oldnewthing/20151013-00/?p=91371)
* [2025-05-13, 01:33:42](https://lobste.rs/s/xjcxwe/ys_yaml_done_wisely) - [YS — YAML Done Wisely](https://yamlscript.org/)
* [2025-05-13, 01:25:00](https://developers.slashdot.org/story/25/05/12/225206/google-developing-software-ai-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Developing Software AI Agent](https://developers.slashdot.org/story/25/05/12/225206/google-developing-software-ai-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 01:16:02](https://news.ycombinator.com/item?id=43968897) - [FastVLM: Efficient vision encoding for vision language models](https://github.com/apple/ml-fastvlm)
* [2025-05-13, 01:16:00](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss) - [China&apos;s Daring Cloud Sample Mission to Venus](https://soylentnews.org/article.pl?sid=25/05/11/1440209&amp;from=rss)
* [2025-05-13, 00:42:00](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asking Chatbots For Short Answers Can Increase Hallucinations, Study Finds](https://slashdot.org/story/25/05/12/2114214/asking-chatbots-for-short-answers-can-increase-hallucinations-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-13, 00:02:00](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches New Initiative To Back Startups Building AI](https://tech.slashdot.org/story/25/05/12/2059257/google-launches-new-initiative-to-back-startups-building-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 23:33:49](https://lobste.rs/s/ba34q8/modern_microframework_for_web) - [A modern microframework for web development in C](https://github.com/savashn/ecewo)
* [2025-05-12, 23:20:00](https://hardware.slashdot.org/story/25/05/12/2041206/philips-debuts-3d-printable-components-to-repair-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Philips Debuts 3D Printable Components To Repair Products](https://hardware.slashdot.org/story/25/05/12/2041206/philips-debuts-3d-printable-components-to-repair-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-12, 22:41:30](https://news.ycombinator.com/item?id=43968141) - [Understanding LucasArts&apos; iMUSE System](https://github.com/meshula/LabMidi/blob/main/LabMuse/imuse-technical.md)
* [2025-05-12, 22:40:00](https://it.slashdot.org/story/25/05/12/2156258/vpn-firm-says-it-didnt-know-customers-had-lifetime-subscriptions-cancels-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VPN Firm Says It Didn&apos;t Know Customers Had Lifetime Subscriptions, Cancels Them](https://it.slashdot.org/story/25/05/12/2156258/vpn-firm-says-it-didnt-know-customers-had-lifetime-subscriptions-cancels-them?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2025-05-12, 18:26:44](https://news.ycombinator.com/item?id=43966089) - [Can you trust that permission pop-up on macOS?](https://wts.dev/posts/tcc-who/)
* [2025-05-12, 17:42:37](https://news.ycombinator.com/item?id=43965608) - [HealthBench – An evaluation for AI systems and human health](https://openai.com/index/healthbench/)
* [2025-05-12, 17:33:54](https://lobste.rs/s/zoudli/two_months_servo_css_nesting_shadow_dom) - [Two months in Servo: CSS nesting, Shadow DOM, Clipboard API, and more](https://servo.org/blog/2025/05/09/this-month-in-servo/)
* [2025-05-12, 17:09:56](https://lobste.rs/s/idkfrh/last_yast) - [The last of YaST?](https://lwn.net/SubscriberLink/1020408/8c022fd8256693d5/)
* [2025-05-12, 16:29:05](https://news.ycombinator.com/item?id=43964827) - [RIP Usenix ATC](https://bcantrill.dtrace.org/2025/05/11/rip-usenix-atc/)
* [2025-05-12, 16:01:31](https://news.ycombinator.com/item?id=43964505) - [Launch HN: ParaQuery (YC X25) – GPU Accelerated Spark/SQL](https://news.ycombinator.com/item?id=43964505)
* [2025-05-12, 15:46:00](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss) - [Urine-Powered Electrolysis Systems Offer Energy-Efficient Green Hydrogen Production](https://soylentnews.org/article.pl?sid=25/05/11/1335239&amp;from=rss)
* [2025-05-12, 15:32:10](https://lobste.rs/s/om8y2y/why_bell_labs_worked) - [Why Bell Labs Worked](https://1517.substack.com/p/why-bell-labs-worked)
* [2025-05-12, 15:28:38](https://news.ycombinator.com/item?id=43964136) - [The Barbican](https://arslan.io/2025/05/12/barbican-estate/)
* [2025-05-12, 14:54:01](https://lobste.rs/s/tjbgo2/hyper_typing) - [Hyper-Typing](https://pscanf.com/s/341/)
* [2025-05-12, 14:30:21](https://lobste.rs/s/vbfa75/avoid_each_with_object_generally) - [Avoid #each_with_object (generally)](https://clayshentrup.medium.com/avoid-each-with-object-generally-89e3b2800b38)
* [2025-05-12, 14:29:33](https://news.ycombinator.com/item?id=43963397) - [Reviving a modular cargo bike design from the 1930s](https://www.core77.com/posts/136773/Reviving-a-Modular-Cargo-Bike-Design-from-the-1930s)
* [2025-05-12, 14:20:45](https://lobste.rs/s/ysluw7/audio_stack_is_crime_scene) - [The Audio Stack Is a Crime Scene](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-2-the-audio-stack-is-a-crime-scene/)
* [2025-05-12, 13:39:34](https://news.ycombinator.com/item?id=43962770) - [Ruby 3.5 Feature: Namespace on read](https://bugs.ruby-lang.org/issues/21311)
* [2025-05-12, 12:21:33](https://news.ycombinator.com/item?id=43962148) - [University of Texas-led team solves a big problem for fusion energy](https://news.utexas.edu/2025/05/05/university-of-texas-led-team-solves-a-big-problem-for-fusion-energy/)
* [2025-05-12, 11:40:24](https://news.ycombinator.com/item?id=43961908) - [A community-led fork of Organic Maps](https://www.comaps.app/news/2025-05-12/3/)
* [2025-05-12, 10:57:00](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss) - [‘Tone Deaf’: US Tech Company Responsible for Global IT Outage to Cut Jobs and Use AI](https://soylentnews.org/article.pl?sid=25/05/11/1335201&amp;from=rss)
* [2025-05-12, 10:13:45](https://lobste.rs/s/lqbjgl/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lqbjgl/what_are_you_doing_this_week)
* [2025-05-12, 09:38:43](https://lobste.rs/s/4abyko/curl_s_ci_job_for_spotting_domain) - [curl&apos;s CI job for spotting domain squatting](https://mastodon.social/@bagder/114493950931893559)
* [2025-05-12, 07:00:17](https://lobste.rs/s/p6vstm/stop_saying_responsible_disclosure) - [Stop Saying \&quot;Responsible Disclosure\&quot;](https://www.da.vidbuchanan.co.uk/blog/responsible-disclosure.html)
* [2025-05-12, 06:12:00](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss) - [Into the Ethical AI Bush](https://soylentnews.org/article.pl?sid=25/05/11/1323217&amp;from=rss)
* [2025-05-12, 02:20:58](https://lobste.rs/s/jh71n7/migrating_codeberg) - [Migrating to Codeberg](https://guix.gnu.org/blog/2025/migrating-to-codeberg/)
* [2025-05-12, 01:28:00](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss) - [Skype is Officially Dead](https://soylentnews.org/article.pl?sid=25/05/10/0222240&amp;from=rss)
* [2025-05-12, 00:39:22](https://news.ycombinator.com/item?id=43958562) - [Air Traffic Control](https://computer.rip/2025-05-11-air-traffic-control.html)
* [2025-05-11, 21:03:09](https://news.ycombinator.com/item?id=43957140) - [Why are coffee stains darker at the edges?](https://www.why.is/svar.php?id=5513)
* [2025-05-11, 20:43:00](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss) - [openSUSE Removes Deepin After Long String of Security Issues and Unauthorised Security Bypass](https://soylentnews.org/article.pl?sid=25/05/10/0150220&amp;from=rss)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
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
* [2025-05-09, 07:53:54](https://news.ycombinator.com/item?id=43934682) - [How to avoid P hacking](https://www.nature.com/articles/d41586-025-01246-1)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
