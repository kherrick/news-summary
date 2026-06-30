# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Intel's Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W—May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) [comments](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)

* [Zluda 6 release (run unmodified CUDA applications on non-Nvidia GPUs)](https://vosen.github.io/ZLUDA/blog/zluda-update-q1q2-2026/) [comments](https://news.ycombinator.com/item?id=48730713)

* [Antares Achieves Criticality of Mark-0 Reactor](https://antaresindustries.com/updates/antares-achieves-criticality) [comments](https://news.ycombinator.com/item?id=48730246)

* [Apple Neural Engine: Architecture, Programming, and Performance](https://arxiv.org/abs/2606.22283) [comments](https://news.ycombinator.com/item?id=48702825)

## Artificial Intelligence

* [Microsoft Slammed for Building Copyright-Infringing Supercomputer for OpenAI in New Court Filing](https://yro.slashdot.org/story/26/06/28/2256226/microsoft-slammed-for-building-copyright-infringing-supercomputer-for-openai-in-new-court-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [comments](https://yro.slashdot.org/story/26/06/28/2256226/microsoft-slammed-for-building-copyright-infringing-supercomputer-for-openai-in-new-court-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Ex-Governors, Big Tech Launch Coalition To Help Workers 'Navigate the AI Economy'](https://yro.slashdot.org/story/26/06/29/0548210/ex-governors-big-tech-launch-coalition-to-help-workers-navigate-the-ai-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [comments](https://news.ycombinator.com/item?id=48725212)

## Cybersecurity and Privacy

* [Sony erases digital content from libraries; reminded we don't own what we buy](https://arstechnica.com/gadgets/2026/06/sony-erases-digital-content-from-libraries-were-reminded-we-dont-own-what-we-buy/) [comments](https://news.ycombinator.com/item?id=48730904)

* [Five Eyes Spooks Warn AI Means Infosec Incidents Can Become 'Major Operational and Financial Crises'](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss) [comments](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss)

## Science and Exploration

* [Scientists Think Neptune and Uranus May Not Be the Ice Giants We Imagined](https://science.slashdot.org/story/26/06/29/0135220/scientists-think-neptune-and-uranus-may-not-be-the-ice-giants-we-imagined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [comments](https://news.ycombinator.com/item?id=48723000)

## Society and Policy

* [30-year sentence for transporting zines is a five-alarm fire for free speech](https://theintercept.com/2026/06/26/daniel-sanchez-estrada-zines-prairieland-free-speech/) [comments](https://news.ycombinator.com/item?id=48711981)

* [US Supreme Court rules geofence warrants require constitutional protections](https://www.theguardian.com/us-news/2026/jun/29/supreme-court-geofence-warrants-case-decision) [comments](https://news.ycombinator.com/item?id=48720924)

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

* [2026-06-30, 11:49:00](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) - [Intel&apos;s Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W — May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)
* [2026-06-30, 11:42:32](https://lobste.rs/s/sk7fsc/waiting_for_sql_202y_stockholm_bma) - [Waiting for SQL:202y: Stockholm (BMA) meeting report](http://peter.eisentraut.org/blog/2026/06/30/waiting-for-sql-202y-stockholm-meeting-report)
* [2026-06-30, 11:13:06](https://lobste.rs/s/rrtmck/diagrams_for_penrose_tiles) - [Diagrams for Penrose Tiles](https://readerunner.wordpress.com/2021/09/13/diagrams-for-penrose-tiles/)
* [2026-06-30, 11:10:41](https://lobste.rs/s/s61wns/proving_fundamental_theorem_arithmetic) - [Proving the Fundamental Theorem of Arithmetic in Agda](https://byorgey.github.io/blog/posts/2026/06/26/FTA.lagda.html)
* [2026-06-30, 11:02:10](https://news.ycombinator.com/item?id=48730904) - [Sony erases digital content from libraries; reminded we don&apos;t own what we buy](https://arstechnica.com/gadgets/2026/06/sony-erases-digital-content-from-libraries-were-reminded-we-dont-own-what-we-buy/)
* [2026-06-30, 10:48:23](https://news.ycombinator.com/item?id=48730818) - [Parse, Don&apos;t Validate – In a Language That Doesn&apos;t Want You To](https://cekrem.github.io/posts/parse-dont-validate-typescript/)
* [2026-06-30, 10:36:23](https://news.ycombinator.com/item?id=48730729) - [European digital ID wallets are a gift to Google and Apple](https://waag.org/en/article/european-digital-id-wallets-are-gift-google-and-apple/)
* [2026-06-30, 10:34:25](https://news.ycombinator.com/item?id=48730713) - [Zluda 6 release (run unmodified CUDA applications on non-Nvidia GPUs)](https://vosen.github.io/ZLUDA/blog/zluda-update-q1q2-2026/)
* [2026-06-30, 10:34:00](https://slashdot.org/story/26/06/29/0642256/remembering-how-microsofts-fake-windows-error-ended-in-a-280-million-secret-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering How Microsoft&apos;s Fake Windows Error Ended In a $280 Million Secret Settlement](https://slashdot.org/story/26/06/29/0642256/remembering-how-microsofts-fake-windows-error-ended-in-a-280-million-secret-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-30, 10:31:02](https://news.ycombinator.com/item?id=48730694) - [Exercise intensity influences body composition in healthy older adults (2025)](https://www.maturitas.org/article/S0378-5122(25)00571-7/fulltext)
* [2026-06-30, 10:15:15](https://news.ycombinator.com/item?id=48730608) - [The US ambassador had Belgian police stop our reporting](https://europeancorrespondent.com/en/r/the-us-ambassador-had-belgian-police-stop-our-reporting)
* [2026-06-30, 09:58:16](https://lobste.rs/s/4rfzbl/local_reasoning_for_global_properties) - [Local Reasoning for Global Properties](https://tratt.net/laurie/blog/2026/local_reasoning_for_global_properties.html)
* [2026-06-30, 09:38:50](https://lobste.rs/s/r3ln3z/furality_ultra_club_v_writeup) - [Furality Ultra Club A/V Writeup](https://value.gay/blog/furality-ultra-av)
* [2026-06-30, 09:15:21](https://news.ycombinator.com/item?id=48730246) - [Antares Achieves Criticality of Mark-0 Reactor](https://antaresindustries.com/updates/antares-achieves-criticality)
* [2026-06-30, 08:47:25](https://lobste.rs/s/fg3sgh/jj_tui_terminal_user_interface_jujutsu) - [jj_tui: terminal user interface to jujutsu focused on speed and clarity](https://tangled.org/elidowling.com/jj_tui)
* [2026-06-30, 07:33:16](https://lobste.rs/s/edml2s/platform_support_for_gnu_extensions) - [Platform Support for GNU Extensions to Basic Regular Expressions](https://www.wezm.net/v2/posts/2026/bre/)
* [2026-06-30, 07:05:00](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss) - [Mark Zuckerberg Is Selflessly Building Yet Another Horrible Product Nobody Asked For](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss)
* [2026-06-30, 06:34:57](https://lobste.rs/s/wenqxh/investigating_linux_graphics_2025) - [Investigating Linux graphics (2025)](https://roscidus.com/blog/blog/2025/06/24/graphics/)
* [2026-06-30, 05:34:00](https://tech.slashdot.org/story/26/06/29/0321238/ford-rehires-gray-beard-engineers-after-ai-falls-short?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Rehires &apos;Gray Beard&apos; Engineers After AI Falls Short](https://tech.slashdot.org/story/26/06/29/0321238/ford-rehires-gray-beard-engineers-after-ai-falls-short?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-30, 03:29:10](https://lobste.rs/s/ewgrd8/native_graphical_shell_for_ssh) - [A native graphical shell for SSH](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html)
* [2026-06-30, 02:18:00](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss) - [The Boeing 747 Begins Its Final Descent](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss)
* [2026-06-30, 02:11:09](https://lobste.rs/s/1ggr8a/memory_safe_context_switching) - [Memory Safe Context Switching](https://fil-c.org/context_switches)
* [2026-06-30, 01:28:05](https://lobste.rs/s/cxxgbt/revisiting_yliluoma_s_ordered_dither) - [Revisiting Yliluoma’s ordered dither algorithm](https://30fps.net/pages/revisiting-yliluoma-2/)
* [2026-06-30, 00:56:42](https://news.ycombinator.com/item?id=48727323) - [Exploring PDP-1 Lisp (1960)](https://obsolescence.dev/pdp1-lisp-introduction.html)
* [2026-06-30, 00:38:19](https://news.ycombinator.com/item?id=48727177) - [Memory Safe Context Switching](https://fil-c.org/context_switches)
* [2026-06-30, 00:34:00](https://tech.slashdot.org/story/26/06/29/0228207/south-korea-plans-to-train-entire-military-as-drone-warriors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Plans To Train Entire Military As &apos;Drone Warriors&apos;](https://tech.slashdot.org/story/26/06/29/0228207/south-korea-plans-to-train-entire-military-as-drone-warriors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-30, 00:30:11](https://news.ycombinator.com/item?id=48727116) - [LongCat-2.0, a large-scale MoE model with 1.6T total and 48B Active](https://longcat.chat/blog/longcat-2.0/)
* [2026-06-30, 00:14:40](https://lobste.rs/s/pjcplu/end_aarch64_desktopexperiment) - [The end of the AArch64 desktopexperiment](https://marcin.juszkiewicz.com.pl/2026/06/26/the-end-of-the-aarch64-desktop-experiment/)
* [2026-06-29, 22:31:57](https://lobste.rs/s/ybcofm/spindle_s_new_microvm_engine) - [Spindle&apos;s new microVM engine](https://blog.tangled.org/spindle-microvm/)
* [2026-06-29, 22:27:17](https://lobste.rs/s/29laqs/what_s_wrong_with_eu_age_verification) - [What&apos;s wrong with EU age verification? (Nothing)](https://blog.vrypan.net/2026/06/29/260629-whats-wrong-with-eu-age-verification/)
* [2026-06-29, 21:33:00](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss) - [Administration Tells US Techies It Expects American Quantum Computer by 2028](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss)
* [2026-06-29, 20:34:46](https://lobste.rs/s/7fjqgc/at_uri_syntax_mess) - [The AT-URI Syntax Mess](https://bnewbold.leaflet.pub/3mph4hzvbdc2v)
* [2026-06-29, 19:49:28](https://news.ycombinator.com/item?id=48724230) - [.self: A new top-level domain designed to support self-hosting](https://hccf.onmy.cloud/2026/06/21/reclaiming-our-digital-selves-hccfs-vision-for-a-human-centered-top-level-domain/)
* [2026-06-29, 19:34:00](https://yro.slashdot.org/story/26/06/29/0548210/ex-governors-big-tech-launch-coalition-to-help-workers-navigate-the-ai-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-Governors, Big Tech Launch Coalition To Help Workers &apos;Navigate the AI Economy&apos;](https://yro.slashdot.org/story/26/06/29/0548210/ex-governors-big-tech-launch-coalition-to-help-workers-navigate-the-ai-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-29, 17:16:17](https://news.ycombinator.com/item?id=48722052) - [Ornith-1.0: self-improving open-source models for agentic coding](https://github.com/deepreinforce-ai/Ornith-1)
* [2026-06-29, 17:05:16](https://news.ycombinator.com/item?id=48721903) - [Qwen 3.6 27B is the sweet spot for local development](https://quesma.com/blog/qwen-36-is-awesome/)
* [2026-06-29, 16:48:00](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss) - [Brits Still Reckon Big Tech Isn&apos;t Paying Enough Tax](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss)
* [2026-06-29, 16:37:43](https://lobste.rs/s/ltzfkv/what_is_std_pin_pin_rust) - [What is `std::pin::Pin` in Rust?](https://vrong.me/blog/what-is-pinning-in-rust/)
* [2026-06-29, 16:13:23](https://lobste.rs/s/r1uxyo/type_checked_non_empty_strings) - [Type-checked non-empty strings](https://exploring-better-ways.bellroy.com/haskell-koan-type-checked-non-empty-strings.html)
* [2026-06-29, 15:54:24](https://news.ycombinator.com/item?id=48720924) - [US Supreme Court rules geofence warrants require constitutional protections](https://www.theguardian.com/us-news/2026/jun/29/supreme-court-geofence-warrants-case-decision)
* [2026-06-29, 15:07:10](https://lobste.rs/s/krqeoc/wataboy_jit_ing_game_boy_instructions) - [WATaBoy: JIT-ing Game Boy Instructions to Wasm Beats a Native Interpreter](https://humphri.es/blog/WATaBoy/)
* [2026-06-29, 15:01:39](https://news.ycombinator.com/item?id=48720186) - [Linux for the Sega MegaDrive](https://github.com/LinuxMD/linuxmd)
* [2026-06-29, 14:47:07](https://lobste.rs/s/0p04p0/evaluation_order_nontermination_query) - [Evaluation order and nontermination in query languages](https://www.rntz.net/post/2026-06-11-datalog-nontermination.html)
* [2026-06-29, 14:34:00](https://hardware.slashdot.org/story/26/06/29/0049218/ibm-says-it-can-fit-nearly-100-billion-transistors-on-a-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Says It Can Fit Nearly 100 Billion Transistors On a Chip ](https://hardware.slashdot.org/story/26/06/29/0049218/ibm-says-it-can-fit-nearly-100-billion-transistors-on-a-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-29, 14:09:24](https://news.ycombinator.com/item?id=48719485) - [Rocketlab acquires Iridium](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully)
* [2026-06-29, 14:08:54](https://lobste.rs/s/uofjjs/loko_scheme_0_13_0) - [Loko Scheme 0.13.0](https://weinholt.se/articles/loko-scheme-0-13-0/)
* [2026-06-29, 13:57:28](https://lobste.rs/s/hj0exw/typst_designing_for_incrementality) - [Typst: Designing for Incrementality](https://youtu.be/yWWVhbyOWWE)
* [2026-06-29, 13:15:52](https://lobste.rs/s/fok2dp/when_impressive_performance_gains_do_not) - [When Impressive Performance Gains Do Not Matter](https://blog.colinbreck.com/when-impressive-performance-gains-do-not-matter/)
* [2026-06-29, 13:11:08](https://news.ycombinator.com/item?id=48718863) - [What happens when you run a CUDA kernel?](https://fergusfinn.com/blog/what-happens-when-you-run-a-gpu-kernel/)
* [2026-06-29, 12:02:00](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss) - [Five Eyes Spooks Warn AI Means Infosec Incidents Can Become &apos;Major Operational and Financial Crises&apos;](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss)
* [2026-06-29, 09:34:00](https://science.slashdot.org/story/26/06/29/0135220/scientists-think-neptune-and-uranus-may-not-be-the-ice-giants-we-imagined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Think Neptune and Uranus May Not Be the Ice Giants We Imagined ](https://science.slashdot.org/story/26/06/29/0135220/scientists-think-neptune-and-uranus-may-not-be-the-ice-giants-we-imagined?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-29, 07:24:49](https://lobste.rs/s/dkky2i/canvas_patch_we_need_testers) - [Canvas patch: we need testers](https://monadicsheep.org/blog/call-for-canvas-patch-testers.html)
* [2026-06-29, 07:16:00](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss) - [SK Telecom Named as the Korean Carrier at the Center of Anthropic&apos;s Mythos Export Controls](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss)
* [2026-06-29, 04:34:00](https://news.slashdot.org/story/26/06/29/0115229/trump-shuttered-climate-change-site-now-back-online-in-nonprofit-hands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump-Shuttered Climate Change Site Now Back Online In Nonprofit Hands ](https://news.slashdot.org/story/26/06/29/0115229/trump-shuttered-climate-change-site-now-back-online-in-nonprofit-hands?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-29, 02:32:00](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss) - [Photoshop Now Censors Your Art as You Edit](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss)
* [2026-06-29, 01:37:32](https://lobste.rs/s/vv4fhi/ante_new_way_blend_borrow_checking) - [Ante: New Way to Blend Borrow Checking and Reference Counting](https://verdagon.dev/blog/ante-blending-borrowing-rc)
* [2026-06-28, 23:34:00](https://yro.slashdot.org/story/26/06/28/2256226/microsoft-slammed-for-building-copyright-infringing-supercomputer-for-openai-in-new-court-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Slammed for Building Copyright-Infringing Supercomputer for OpenAI in New Court Filing](https://yro.slashdot.org/story/26/06/28/2256226/microsoft-slammed-for-building-copyright-infringing-supercomputer-for-openai-in-new-court-filing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 22:05:00](https://science.slashdot.org/story/26/06/28/222254/spain-backed-fund-joins-fossas-sovereign-satellite-communications-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain-Backed Fund Joins FOSSA&apos;s Sovereign Satellite Communications Push ](https://science.slashdot.org/story/26/06/28/222254/spain-backed-fund-joins-fossas-sovereign-satellite-communications-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 21:48:00](https://soylentnews.org/article.pl?sid=26/06/27/1833254&amp;from=rss) - [Acoustic Mapping App Uses Thousands of Networked Old Android Phones to Hunt Shahed Drones](https://soylentnews.org/article.pl?sid=26/06/27/1833254&amp;from=rss)
* [2026-06-28, 21:42:39](https://news.ycombinator.com/item?id=48711981) - [30-year sentence for transporting zines is a five-alarm fire for free speech](https://theintercept.com/2026/06/26/daniel-sanchez-estrada-zines-prairieland-free-speech/)
* [2026-06-28, 21:04:00](https://slashdot.org/story/26/06/28/1922225/chinas-ai-matches-anthropic-in-cybersecurity-causing-worry-over-us-restrictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s AI Matches Anthropic in Cybersecurity, Causing Worry Over US Restrictions](https://slashdot.org/story/26/06/28/1922225/chinas-ai-matches-anthropic-in-cybersecurity-causing-worry-over-us-restrictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 19:48:34](https://lobste.rs/s/tw0v1d/double_threat_private_communications) - [“Double Threat” to Private Communications: Undemocratic Chat Control Backroom Deals and Imminent Concessions Spark Relaunch of fightchatcontrol.eu](https://www.patrick-breyer.de/en/double-threat-to-private-communications-undemocratic-chat-control-backroom-deals-and-imminent-concessions-spark-relaunch-of-fightchatcontrol-eu/)
* [2026-06-28, 19:34:00](https://news.slashdot.org/story/26/06/28/1016244/are-checks-sent-through-the-mail-vulnerable-to-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Checks Sent Through the Mail Vulnerable to Theft?](https://news.slashdot.org/story/26/06/28/1016244/are-checks-sent-through-the-mail-vulnerable-to-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 17:34:00](https://news.slashdot.org/story/26/06/28/0546256/us-agency-cancels-contract-for-warrantless-tracking-of-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Agency Cancels Contract For Warrantless Tracking of Mobile Devices](https://news.slashdot.org/story/26/06/28/0546256/us-agency-cancels-contract-for-warrantless-tracking-of-mobile-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 17:01:00](https://soylentnews.org/article.pl?sid=26/06/27/1825233&amp;from=rss) - [How Do Airbags Deploy So Quickly in a Crash? The Physics, Explained](https://soylentnews.org/article.pl?sid=26/06/27/1825233&amp;from=rss)
* [2026-06-28, 16:34:00](https://news.slashdot.org/story/26/06/27/1926233/students-around-the-world-are-using-ai-powered-smart-glasses-to-cheat-on-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Students Around the World are Using AI-Powered Smart Glasses to Cheat on Tests](https://news.slashdot.org/story/26/06/27/1926233/students-around-the-world-are-using-ai-powered-smart-glasses-to-cheat-on-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 15:34:00](https://entertainment.slashdot.org/story/26/06/27/0420250/supergirl-movie-criticized-for-script-poor-visual-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Supergirl&apos; Movie Criticized for Script, Poor Visual Effects](https://entertainment.slashdot.org/story/26/06/27/0420250/supergirl-movie-criticized-for-script-poor-visual-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss) - [‘Cost Me the Election’: Data Centers Trigger Voter Backlash](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss)
* [2026-06-28, 11:34:00](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer AI Token Costs Could Exceed Their Salaries in Two Years](https://it.slashdot.org/story/26/06/28/0519223/developer-ai-token-costs-could-exceed-their-salaries-in-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-28, 11:22:49](https://news.ycombinator.com/item?id=48706389) - [One million passports leaked online](https://www.theverge.com/tech/947157/passports-data-breach-cannabis-club-systems-nefos-puffpal)
* [2026-06-28, 07:36:00](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss) - [I Stored a Website in a Favicon](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss)
* [2026-06-28, 04:17:44](https://news.ycombinator.com/item?id=48704289) - [Building a custom octocopter from scratch with no prior hardware experience](https://karolina.mgdubiel.com/drone/)
* [2026-06-28, 02:54:00](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss) - [ASML Denies US Government Report That its EUV Chipmaking Tool Was Shipped to China](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss)
* [2026-06-27, 23:30:14](https://news.ycombinator.com/item?id=48702825) - [Apple Neural Engine: Architecture, Programming, and Performance](https://arxiv.org/abs/2606.22283)
* [2026-06-27, 22:18:50](https://news.ycombinator.com/item?id=48702320) - [Old Computer Challenge](http://occ.sdf.org/)
* [2026-06-27, 22:10:00](https://soylentnews.org/article.pl?sid=26/06/26/1431252&amp;from=rss) - [Cloudflare Teams Up With Big Browsers to Help Websites Tell Welcome From Unwelcome Visitors](https://soylentnews.org/article.pl?sid=26/06/26/1431252&amp;from=rss)
* [2026-06-27, 19:47:00](https://soylentnews.org/article.pl?sid=26/06/26/1429216&amp;from=rss) - [OpenC6 BIOS Project Brings PC-Like Firmware to ESP32-C6 MCU](https://soylentnews.org/article.pl?sid=26/06/26/1429216&amp;from=rss)
* [2026-06-27, 17:24:00](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss) - [Goalkeepers Beware: Trionda World Cup Ball Hits ‘Crisis’ Point at Certain Speed](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss)
* [2026-06-27, 15:05:17](https://news.ycombinator.com/item?id=48698908) - [Free the Icons](https://weblog.rogueamoeba.com/2026/06/26/free-the-icons/)
* [2026-06-27, 12:43:00](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss) - [The Memory Crisis Is Getting So Bad That Even Retro RAM Prices Are Becoming Ridiculous](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss)
* [2026-06-27, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss) - [Wikipedia Cofounder Larry Sanger Blocked From Editing Wikipedia](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss)
* [2026-06-27, 06:00:38](https://news.ycombinator.com/item?id=48695585) - [All Logic, No Bite](https://lcamtuf.substack.com/p/all-logic-no-bite)
* [2026-06-27, 03:13:00](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss) - [Pluralistic: Spying on Kids to Save Kids From Spying is Very, Very Stupid](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss)
* [2026-06-26, 22:26:00](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss) - [Day-to-Day Cyber Disruptions Driving Loss for SMEs, Finds Report](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss)
* [2026-06-26, 18:05:39](https://news.ycombinator.com/item?id=48689885) - [How to corrupt an SQLite database file](https://www.sqlite.org/howtocorrupt.html)
* [2026-06-26, 17:44:00](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss) - [Automakers Could Stop Selling Cars in California Rather Than Comply With Tracking Laws](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss)
* [2026-06-26, 12:55:00](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss) - [The Database That Refused to Die: How Postgres Survived its Own Creators](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss)
* [2026-06-26, 08:06:00](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss) - [As China Looms, Taiwan Makes More Drones for Defense and the US Military](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss)
* [2026-06-26, 06:35:17](https://news.ycombinator.com/item?id=48683098) - [Open Source Low Tech](https://opensourcelowtech.org/)
* [2026-06-26, 03:24:00](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss) - [Beats Studio Buds Flaw Could Let Nearby Attackers Eavesdrop on Users](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss)
* [2026-06-26, 01:57:37](https://news.ycombinator.com/item?id=48681499) - [Why Problem Statements Aren&apos;t Enough](https://letters.unchartedpathbreakthroughs.com/posts/why-problem-statements-arent-enough)
