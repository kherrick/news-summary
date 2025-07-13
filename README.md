# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Technological Breakthroughs

* [Some Gut Microbes Can Absorb and Help Expel 'Forever Chemicals', Study Shows](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Recent research highlights how gut microbes might play a critical role in neutralizing harmful 'forever chemicals'.

* [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A revolutionary satellite proposal aims to detect ancient cosmic radio waves from the moon's far side.

* [The Decipherment of the Dhofari Script](https://www.science.org/content/article/mysterious-pre-islamic-script-oman-finally-deciphered) - Researchers have cracked a mysterious pre-Islamic script in Oman, opening doors to understanding ancient cultures.

* [Underwater Turbine Spins 6.5 Years Off Scotland's Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A successful long-term underwater turbine deployment showcases the promise of tidal energy solutions.

## Cybersecurity and Technological Challenges

* [Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: A RBTree Family Drama (Part One)](https://syst3mfailure.io/rbtree-family-drama/) - Security enthusiasts demonstrate vulnerabilities in Google KernelCTF and Debian systems using a 0-day exploit.

* [How I found a bypass in Google's big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/) - An innovative bypass for Google's adblock update sparks community interest and concern.

* [NVIDIA Warns Its High-End GPUs May Be Vulnerable to Rowhammer Attacks](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NVIDIA alerts users about potential Rowhammer vulnerabilities in its high-end GPUs, raising security implications.

## Insights into Gaming and Entertainment

* [Gaming cancer: How citizen science games could help cure disease](https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/) - Innovative citizen science games contribute towards medical research and solutions to complex diseases.

* [Most people who buy games on Steam never play them](https://howtomarketagame.com/2025/06/03/most-people-who-buy-your-game-wont-play-it/) - A deep dive into player purchasing habits on Steam reveals surprising statistics.

* [DC's 'Brighter' Superman Movie Smashes Box Offices Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - DC's refreshingly upbeat Superman portrayal draws massive crowds and redefines the superhero genre.

## Innovative Engineering and Infrastructure Developments

* [China's Omoway Announces a New Self-Driving Electric Scooter Named 'Omo X'](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new entrant in autonomous mobility solutions with a self-driving electric scooter.

* [EV Sets New Record for Longest Trip on a Single Charge - 749 Miles](https://tech.slashdot.org/story/25/07/13/0113254/ev-sets-new-record-for-longest-trip-on-a-single-charge---749-miles?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Electric vehicle technology milestone achieved with a record-breaking single-charge journey.

* [Bringing Virtualization to the x86 Architecture with the Original VMware Workstation (2012)](https://web.archive.org/web/20250603150137if_/http://www.cs.columbia.edu/~cdall/candidacy/pdf/Bugnion2012.pdf) - A nostalgic look at pioneering virtualization efforts for x86 systems.

## Cultural and Historical Discoveries

* [Hungary's oldest library fighting to save 100k books from a beetle infestation](https://www.nbcnews.com/world/hungary/hungary-pannonhalma-archabbey-beetle-infestation-rcna218539) - A historic effort to save Hungary's treasured literary heritage from insect infestation.

* [Amelia Earhart's Airplane May Finally Have Been Found](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New evidence emerges about the location of Amelia Earhart's long-lost aircraft.

* [Edward Burtynsky's monumental chronicle of the human impact on the planet](https://www.newyorker.com/culture/photo-booth/earths-poet-of-scale) - The renowned photographer captures humanity's interaction with nature on a staggering scale.

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

* [2025-07-13, 18:47:00](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Enron Transforming Into a Real Texas Retail Electricity Provider?](https://hardware.slashdot.org/story/25/07/13/1837237/is-enron-transforming-into-a-real-texas-retail-electricity-provider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 18:31:47](https://news.ycombinator.com/item?id=44552414) - [GLP-1s Are Breaking Life Insurance](https://www.glp1digest.com/p/how-glp-1s-are-breaking-life-insurance)
* [2025-07-13, 18:24:53](https://news.ycombinator.com/item?id=44552362) - [Hungary&apos;s oldest library fighting to save 100k books from a beetle infestation](https://www.nbcnews.com/world/hungary/hungary-pannonhalma-archabbey-beetle-infestation-rcna218539)
* [2025-07-13, 18:21:27](https://lobste.rs/s/7o1ilj/exploiting_all_google_kernelctf) - [Exploiting All Google kernelCTF Instances And Debian 12 With A 0-Day For $82k: A RBTree Family Drama (Part One)](https://syst3mfailure.io/rbtree-family-drama/)
* [2025-07-13, 18:13:39](https://lobste.rs/s/tpekcr/linux_kernel_pipapo_set_double_free_lpe) - [Linux Kernel Pipapo Set Double Free LPE](https://ssd-disclosure.com/ssd-advisory-linux-kernel-pipapo-set-double-free-lpe/)
* [2025-07-13, 17:48:52](https://lobste.rs/s/wjdfe5/apple_trace_cache) - [Apple Trace Cache](https://www.realworldtech.com/forum/?threadid=223220)
* [2025-07-13, 17:47:08](https://news.ycombinator.com/item?id=44552095) - [Most people who buy games on Steam never play them](https://howtomarketagame.com/2025/06/03/most-people-who-buy-your-game-wont-play-it/)
* [2025-07-13, 17:47:00](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Gut Microbes Can Absorb and Help Expel &apos;Forever Chemicals&apos;, Study Shows](https://science.slashdot.org/story/25/07/13/1743232/some-gut-microbes-can-absorb-and-help-expel-forever-chemicals-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 17:19:31](https://lobste.rs/s/v9qbqc/haiku_activity_contract_report_june_2025) - [Haiku Activity &amp; Contract Report, June 2025](https://www.haiku-os.org/blog/waddlesplash/2025-07-12-haiku_activity_contract_report_june_2025/)
* [2025-07-13, 17:18:20](https://news.ycombinator.com/item?id=44551913) - [Does Showing Seconds in the System Tray Use More Power?](https://www.lttlabs.com/blog/2025/07/11/does-showing-seconds-in-the-system-tray-actually-use-more-power)
* [2025-07-13, 17:00:57](https://news.ycombinator.com/item?id=44551784) - [Infisical (YC W23) Is Hiring DevRel Engineers](https://www.ycombinator.com/companies/infisical/jobs/qCrLiJb-developer-relations)
* [2025-07-13, 16:58:03](https://lobste.rs/s/rx4vvq/algorithms_for_making_interesting) - [Algorithms for making interesting organic simulations](https://bleuje.com/physarum-explanation/)
* [2025-07-13, 16:57:48](https://news.ycombinator.com/item?id=44551762) - [Show HN: A Raycast-compatible launcher for Linux](https://github.com/ByteAtATime/raycast-linux)
* [2025-07-13, 16:57:43](https://lobste.rs/s/gjh1xi/notes_on_graham_s_ansi_common_lisp) - [Notes on Graham&apos;s ANSI Common Lisp](https://courses.cs.northwestern.edu/325/readings/graham/graham-notes.html)
* [2025-07-13, 16:45:02](https://news.ycombinator.com/item?id=44551652) - [A Technical Look at Iran&apos;s Internet Shutdowns](https://zola.ink/blog/posts/a-technical-look-at-irans-internet-shutdown)
* [2025-07-13, 16:34:00](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Underwater Turbine Spins 6.5 Years Off Scotland&apos;s Coast, Proving Viability of Tidal Energy](https://news.slashdot.org/story/25/07/12/0428216/underwater-turbine-spins-65-years-off-scotlands-coast-proving-viability-of-tidal-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 16:30:34](https://lobste.rs/s/rnwozv/detour_detour_through_linux_dynamic) - [detour: A detour through the Linux dynamic linker](https://github.com/graphitemaster/detour)
* [2025-07-13, 15:34:00](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Omoway Announces a New Self-Driving Electric Scooter Named &apos;Omo X&apos;](https://tech.slashdot.org/story/25/07/12/0624259/chinas-omoway-announces-a-new-self-driving-electric-scooter-named-omo-x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 14:34:00](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Banned Switch 2 Owner For Playing a Used Switch 1 Game They Bought Online](https://games.slashdot.org/story/25/07/13/0437254/nintendo-banned-switch-2-owner-for-playing-a-used-switch-1-game-they-bought-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 14:29:56](https://lobste.rs/s/cxucew/bringing_virtualization_x86) - [Bringing Virtualization to the x86 Architecture with the Original VMware Workstation (2012)](https://web.archive.org/web/20250603150137if_/http://www.cs.columbia.edu/~cdall/candidacy/pdf/Bugnion2012.pdf)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 14:09:06](https://news.ycombinator.com/item?id=44550572) - [How does a screen even work?](https://www.makingsoftware.com/chapters/how-a-screen-works)
* [2025-07-13, 13:48:49](https://news.ycombinator.com/item?id=44550450) - [Local Chatbot RAG with FreeBSD Knowledge](https://hackacad.net/post/2025-07-12-local-chatbot-rag-with-freebsd-knowledge/)
* [2025-07-13, 13:45:39](https://lobste.rs/s/lkbawj/local_chatbot_rag_with_freebsd_knowledge) - [Local Chatbot RAG with FreeBSD Knowledge](https://hackacad.net/post/2025-07-12-local-chatbot-rag-with-freebsd-knowledge/)
* [2025-07-13, 13:03:13](https://news.ycombinator.com/item?id=44550157) - [Show HN: Learn LLMs LeetCode Style](https://github.com/Exorust/TorchLeet)
* [2025-07-13, 11:34:00](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC&apos;s &apos;Brighter&apos; Superman Movie Smashes Box Offices Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 10:25:18](https://news.ycombinator.com/item?id=44549145) - [The Decipherment of the Dhofari Script](https://www.science.org/content/article/mysterious-pre-islamic-script-oman-finally-deciphered)
* [2025-07-13, 10:23:38](https://news.ycombinator.com/item?id=44549134) - [Gaming cancer: How citizen science games could help cure disease](https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/)
* [2025-07-13, 09:52:04](https://lobste.rs/s/lree6z/perldelta_what_is_new_for_perl_v5_42_0) - [perldelta - what is new for perl v5.42.0](https://perldoc.perl.org/5.42.0/perldelta)
* [2025-07-13, 09:44:47](https://news.ycombinator.com/item?id=44548906) - [Understanding Tool Calling in LLMs – Step-by-Step with REST and Spring AI](https://muthuishere.medium.com/understanding-tool-function-calling-in-llms-step-by-step-examples-in-rest-and-spring-ai-2149ecd6b18b)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 08:38:52](https://news.ycombinator.com/item?id=44548610) - [Let me pay for Firefox](https://discourse.mozilla.org/t/let-me-pay-for-firefox/141297)
* [2025-07-13, 08:19:04](https://lobste.rs/s/1yqzqb/design_implementation_extensible) - [The Design and Implementation of Extensible Records for Rust in CGP](https://contextgeneric.dev/blog/extensible-datatypes-part-3/)
* [2025-07-13, 08:17:48](https://lobste.rs/s/ra4nyf/dict_unpacking_at_home_can_we_have_dict) - [dict-unpacking-at-home: can we have dict unpacking in python?](https://github.com/asottile/dict-unpacking-at-home)
* [2025-07-13, 07:48:44](https://news.ycombinator.com/item?id=44548353) - [Reading Neuromancer for the first time in 2025](https://mbh4h.substack.com/p/neuromancer-2025-review-william-gibson)
* [2025-07-13, 07:34:00](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 06:20:11](https://lobste.rs/s/ubpr2o/migrating_my_nas_from_coreos_flatcar) - [Migrating my NAS from CoreOS/Flatcar Linux to NixOS](https://michael.stapelberg.ch/posts/2025-07-13-nixos-nas-network-storage-config/)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 03:34:00](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amelia Earhart&apos;s Airplane May Finally Have Been Found](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 02:47:00](https://news.ycombinator.com/item?id=44547089) - [Edward Burtynsky&apos;s monumental chronicle of the human impact on the planet](https://www.newyorker.com/culture/photo-booth/earths-poet-of-scale)
* [2025-07-13, 02:28:06](https://lobste.rs/s/hul45q/constrained_languages_are_easier) - [constrained languages are easier to optimize](https://jyn.dev/constrained-languages-are-easier-to-optimize/)
* [2025-07-13, 01:53:33](https://lobste.rs/s/pbj1da/how_i_found_bypass_google_s_big_anti) - [How I found a bypass in Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-13, 01:34:00](https://tech.slashdot.org/story/25/07/13/0113254/ev-sets-new-record-for-longest-trip-on-a-single-charge---749-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Sets New Record for Longest Trip on a Single Charge - 749 Miles](https://tech.slashdot.org/story/25/07/13/0113254/ev-sets-new-record-for-longest-trip-on-a-single-charge---749-miles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 01:12:41](https://lobste.rs/s/oqaxxt/hacking_coroutines_into_c) - [Hacking coroutines into C](https://wiomoc.de/misc/posts/hacking_coroutines_into_c.html)
* [2025-07-13, 01:12:37](https://news.ycombinator.com/item?id=44546640) - [Hacking Coroutines into C](https://wiomoc.de/misc/posts/hacking_coroutines_into_c.html)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-13, 00:13:27](https://lobste.rs/s/mtcsug/zig_s_new_async_i_o) - [Zig&apos;s New Async I/O](https://kristoff.it/blog/zig-new-async-io/)
* [2025-07-12, 23:03:41](https://news.ycombinator.com/item?id=44545949) - [Zig&apos;s New Async I/O](https://kristoff.it/blog/zig-new-async-io/)
* [2025-07-12, 22:46:58](https://lobste.rs/s/4tgs7o/simple_live_reload_for_developing_static) - [Simple live reload for developing static sites](https://leanrada.com/notes/simple-live-reload/)
* [2025-07-12, 22:34:00](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Firefox is Fine. The People Running It are Not&apos;](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 21:57:37](https://lobste.rs/s/cbchxp/don_t_animate_height) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-12, 21:45:52](https://lobste.rs/s/wmj7pg/haunted_by_legacy_discovering) - [Haunted by Legacy: Discovering and Exploiting Vulnerable Tunnelling Hosts](https://github.com/vanhoefm/tunneltester)
* [2025-07-12, 21:44:03](https://lobste.rs/s/ijyz5o/easy_dynamic_dispatch_using_glibc) - [Easy dynamic dispatch using GLIBC Hardware Capabilities](https://www.kvr.at/posts/easy-dynamic-dispatch-using-GLIBC-hardware-capabilities/)
* [2025-07-12, 21:34:00](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NVIDIA Warns Its High-End GPUs May Be Vulnerable to Rowhammer Attacks](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 20:34:00](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Up 160% in 2025, But May Face Obstacles](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 19:34:00](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Northern Arizona Resident Dies From Plague](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 19:06:09](https://news.ycombinator.com/item?id=44544266) - [Bypassing Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-12, 18:34:00](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Outlook Malfunctioned For Over 21 Hours  Wednesday and Thursday](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 17:34:00](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Much of the World&apos;s Solar Gear is Made Using Fossil Power in China](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 16:16:40](https://lobste.rs/s/f0tt1k/working_through_writing_c_compiler) - [Working through ‘Writing A C Compiler’](https://jollygoodsw.wordpress.com/2025/03/13/working-through-writing-a-c-compiler/)
* [2025-07-12, 16:00:55](https://lobste.rs/s/si4u1m/dyson_sphere_program_s_new) - [Dyson Sphere Program&apos;s new multithreading framework](https://store.steampowered.com/news/app/1366540/view/543361383085900510)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 07:01:45](https://lobste.rs/s/btcmpp/damn_small_link_forwarder_dslf_bit_ly) - [Damn Small Link Forwarder (DSLF): a bit.ly replacement written in rust](https://github.com/vpetersson/dslf)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 19:26:05](https://lobste.rs/s/ugyxdj/new_date_wtf) - [new Date(\&quot;wtf\&quot;)](https://jsdate.wtf/)
* [2025-07-11, 17:23:57](https://news.ycombinator.com/item?id=44534809) - [A Mental Model for C++ Coroutine](https://uvdn7.github.io/cpp-coro/)
* [2025-07-11, 15:11:24](https://news.ycombinator.com/item?id=44533044) - [Switching to Claude Code and VSCode Inside Docker](https://timsh.org/claude-inside-docker/)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 02:00:10](https://news.ycombinator.com/item?id=44527739) - [Chrome&apos;s hidden X-Browser-Validation header reverse engineered](https://github.com/dsekz/chrome-x-browser-validation-header)
* [2025-07-11, 00:21:16](https://news.ycombinator.com/item?id=44527172) - [Axon&apos;s Draft One AI Police Report Generator Is Designed to Defy Transparency](https://www.eff.org/deeplinks/2025/07/axons-draft-one-designed-defy-transparency)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 14:28:04](https://news.ycombinator.com/item?id=44521500) - [Multi-Player Durable Stream Playground](https://s2.dev/playground)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 11:28:04](https://news.ycombinator.com/item?id=44519776) - [Monitoring My Homelab, Simply](https://b.tuxes.uk/simple-homelab-monitoring.html)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 06:53:06](https://news.ycombinator.com/item?id=44518078) - [The Polyhedral Perspective](https://publicdomainreview.org/essay/polyhedral-perspective/)
* [2025-07-10, 05:39:46](https://news.ycombinator.com/item?id=44517649) - [The Robot Sculptors of Italy](https://www.bloomberg.com/features/2025-robot-sculptors-marble/)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
* [2025-07-09, 23:32:53](https://news.ycombinator.com/item?id=44515783) - [Notes on Graham&apos;s ANSI Common Lisp (2024)](https://courses.cs.northwestern.edu/325/readings/graham/graham-notes.html)
* [2025-07-09, 23:08:00](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss) - [How to Stop Your LG or Samsung Smart TV From Tracking You](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 16:59:30](https://news.ycombinator.com/item?id=44512350) - [The upcoming GPT-3 moment for RL](https://www.mechanize.work/blog/the-upcoming-gpt-3-moment-for-rl/)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 08:07:23](https://news.ycombinator.com/item?id=44507405) - [Parse, Don’t Validate – Some C Safety Tips](https://www.lelanthran.com/chap13/content.html)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
