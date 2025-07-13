# [News Summary](https://kherrick.github.io/news-summary/)

## Culture and Literature

* [Ursula K. Le Guin: Still Battling the Powers That Be](https://www.wired.com/2012/07/geeks-guide-ursula-k-le-guin/) ([comments](https://news.ycombinator.com/item?id=44549953)) - A retrospective on Ursula K. Le Guin, the renowned author celebrated for challenging societal norms through her speculative fiction.

## Science and Space

* [Mysterious pre-Islamic script from Oman finally deciphered](https://www.science.org/content/article/mysterious-pre-islamic-script-oman-finally-deciphered) ([comments](https://news.ycombinator.com/item?id=44549145)) - Researchers unveil the mysteries of an ancient script, offering new insights into pre-Islamic history.

* [Astronomers Plan Far Side of the Moon Satellite to Hear Billion-Year-Old Radio Waves](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/13/031226/astronomers-plan-far-side-of-the-moon-satellite-to-hear-billion-year-old-radio-waves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Aiming to unlock the distant past of the universe, astronomers propose a satellite stationed on the Moon's far side.

## Technology and Programming

* [Gaming Cancer: How Citizen Science Games Could Help Cure Disease](https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/) ([comments](https://news.ycombinator.com/item?id=44549134)) - An exploration of how collaborative citizen science gaming platforms are contributing to medical discoveries.

* [Let Me Pay for Firefox](https://discourse.mozilla.org/t/let-me-pay-for-firefox/141297) ([comments](https://news.ycombinator.com/item?id=44548610)) - A user advocates for a revenue model to support Firefox’s continued independence and innovation.

* [Hacking Coroutines into C](https://wiomoc.de/misc/posts/hacking_coroutines_into_c.html) ([comments](https://news.ycombinator.com/item?id=44546640)) - A dive into adding coroutine support in C programming for async solutions.

* [Zig's New Async I/O](https://kristoff.it/blog/zig-new-async-io/) ([comments](https://lobste.rs/s/mtcsug/zig_s_new_async_i_o)) - An update on Zig's advancements with a new model for asynchronous input/output operations.

## Entertainment and Media

* [Reading Neuromancer for the first time in 2025](https://mbh4h.substack.com/p/neuromancer-2025-review-william-gibson) ([comments](https://news.ycombinator.com/item?id=44548353)) - Reflections on William Gibson's iconic cyberpunk novel and its relevance in today's context.

* [DC's 'Brighter' Superman Movie Smashes Box Offices Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - The latest Superman installment marks its return with a refreshing take and a surprising blockbuster performance.

## Security and Vulnerabilities

* [How I found a bypass in Google's big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/) ([comments](https://news.ycombinator.com/item?id=44547089)) - Insights into circumventing Google’s adblock restrictions, highlighting ongoing tactics in online ad wars.

* [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)) - Experts debunk lingering myths about reviving the extinct Moa species.

## Environment and Innovation

* [Amelia Earhart's Airplane May Finally Have Been Found](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/07/13/0215218/amelia-earharts-airplane-may-finally-have-been-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - A potential breakthrough in the longstanding mystery of aviation history.

* [Edward Burtynsky's monumental chronicle of the human impact on the planet](https://www.newyorker.com/culture/photo-booth/earths-poet-of-scale) ([comments](https://news.ycombinator.com/item?id=44547089)) - A photo project documenting humanity's environmental footprint on an unprecedented scale.

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

* [2025-07-13, 12:34:33](https://news.ycombinator.com/item?id=44549953) - [Ursula K. Le Guin: Still Battling the Powers That Be](https://www.wired.com/2012/07/geeks-guide-ursula-k-le-guin/)
* [2025-07-13, 12:06:34](https://news.ycombinator.com/item?id=44549762) - [You have a fake North Korean IT worker problem](https://www.theregister.com/2025/07/13/fake_it_worker_problem/)
* [2025-07-13, 11:34:00](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC&apos;s &apos;Brighter&apos; Superman Movie Smashes Box Offices Expectations](https://entertainment.slashdot.org/story/25/07/12/2317208/dcs-brighter-superman-movie-smashes-box-offices-expectations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-13, 10:25:18](https://news.ycombinator.com/item?id=44549145) - [Mysterious pre-Islamic script from Oman finally deciphered](https://www.science.org/content/article/mysterious-pre-islamic-script-oman-finally-deciphered)
* [2025-07-13, 10:23:38](https://news.ycombinator.com/item?id=44549134) - [Gaming Cancer: How Citizen Science Games Could Help Cure Disease](https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/)
* [2025-07-13, 09:52:04](https://lobste.rs/s/lree6z/perldelta_what_is_new_for_perl_v5_42_0) - [perldelta - what is new for perl v5.42.0](https://perldoc.perl.org/perldelta)
* [2025-07-13, 09:44:47](https://news.ycombinator.com/item?id=44548906) - [Understanding Tool Calling in LLMs – Step-by-Step with REST and Spring AI](https://muthuishere.medium.com/understanding-tool-function-calling-in-llms-step-by-step-examples-in-rest-and-spring-ai-2149ecd6b18b)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 08:38:52](https://news.ycombinator.com/item?id=44548610) - [Let Me Pay for Firefox](https://discourse.mozilla.org/t/let-me-pay-for-firefox/141297)
* [2025-07-13, 08:19:04](https://lobste.rs/s/1yqzqb/design_implementation_extensible) - [The Design and Implementation of Extensible Records for Rust in CGP](https://contextgeneric.dev/blog/extensible-datatypes-part-3/)
* [2025-07-13, 08:17:48](https://lobste.rs/s/ra4nyf/dict_unpacking_at_home_can_we_have_dict) - [dict-unpacking-at-home: can we have dict unpacking in python?](https://github.com/asottile/dict-unpacking-at-home)
* [2025-07-13, 08:16:02](https://news.ycombinator.com/item?id=44548503) - [Why Lua Beats MicroPython for Serious Embedded Devs](https://www.embedded.com/why-lua-beats-micropython-for-serious-embedded-devs)
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
* [2025-07-12, 23:08:42](https://lobste.rs/s/acowbz/sca_fuzzer_revizor_fuzzer_search_for) - [sca-fuzzer: Revizor - a fuzzer to search for microarchitectural leaks in CPUs](https://github.com/microsoft/sca-fuzzer)
* [2025-07-12, 23:03:41](https://news.ycombinator.com/item?id=44545949) - [Zig&apos;s New Async I/O](https://kristoff.it/blog/zig-new-async-io/)
* [2025-07-12, 22:46:58](https://lobste.rs/s/4tgs7o/simple_live_reload_for_developing_static) - [Simple live reload for developing static sites](https://leanrada.com/notes/simple-live-reload/)
* [2025-07-12, 22:34:00](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Firefox is Fine. The People Running It are Not&apos;](https://news.slashdot.org/story/25/07/12/0534248/firefox-is-fine-the-people-running-it-are-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 21:57:37](https://lobste.rs/s/cbchxp/don_t_animate_height) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-12, 21:45:52](https://lobste.rs/s/wmj7pg/haunted_by_legacy_discovering) - [Haunted by Legacy: Discovering and Exploiting Vulnerable Tunnelling Hosts](https://github.com/vanhoefm/tunneltester)
* [2025-07-12, 21:44:03](https://lobste.rs/s/ijyz5o/easy_dynamic_dispatch_using_glibc) - [Easy dynamic dispatch using GLIBC Hardware Capabilities](https://www.kvr.at/posts/easy-dynamic-dispatch-using-GLIBC-hardware-capabilities/)
* [2025-07-12, 21:34:00](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NVIDIA Warns Its High-End GPUs May Be Vulnerable to Rowhammer Attacks](https://hardware.slashdot.org/story/25/07/12/199238/nvidia-warns-its-high-end-gpus-may-be-vulnerable-to-rowhammer-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 20:34:00](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Up 160% in 2025, But May Face Obstacles](https://news.slashdot.org/story/25/07/12/1559255/robinhood-up-160-in-2025-but-may-face-obstacles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 20:25:18](https://news.ycombinator.com/item?id=44544862) - [Aeron: Efficient reliable UDP unicast, UDP multicast, and IPC message transport](https://github.com/aeron-io/aeron)
* [2025-07-12, 20:23:05](https://lobste.rs/s/9wf7sc/aeron_efficient_reliable_udp_unicast_udp) - [aeron: Efficient reliable UDP unicast, UDP multicast, and IPC message transport](https://github.com/aeron-io/aeron)
* [2025-07-12, 20:08:20](https://lobste.rs/s/ip3wbn/angr_open_source_binary_analysis) - [angr (open-source binary analysis platform for Python)](https://angr.io/)
* [2025-07-12, 19:34:00](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Northern Arizona Resident Dies From Plague](https://science.slashdot.org/story/25/07/12/1834224/northern-arizona-resident-dies-from-plague?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 19:06:09](https://news.ycombinator.com/item?id=44544266) - [Bypassing Google&apos;s big anti-adblock update](https://0x44.xyz/blog/web-request-blocking/)
* [2025-07-12, 18:34:00](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Outlook Malfunctioned For Over 21 Hours  Wednesday and Thursday](https://slashdot.org/story/25/07/12/1730242/microsoft-outlook-malfunctioned-for-over-21-hours-wednesday-and-thursday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 17:34:00](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Much of the World&apos;s Solar Gear is Made Using Fossil Power in China](https://hardware.slashdot.org/story/25/07/12/044242/much-of-the-worlds-solar-gear-is-made-using-fossil-power-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 16:45:45](https://news.ycombinator.com/item?id=44543240) - [Lost Chapter of Automate the Boring Stuff: Audio, Video, and Webcams in Python](https://inventwithpython.com/blog/lost-av-chapter.html)
* [2025-07-12, 16:34:00](https://slashdot.org/story/25/07/12/1550205/bitcoin-hits-an-all-time-high-of-118000-up-21-for-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Hits an All-Time High of $118,000, Up 21% for 2025](https://slashdot.org/story/25/07/12/1550205/bitcoin-hits-an-all-time-high-of-118000-up-21-for-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 16:16:40](https://lobste.rs/s/f0tt1k/working_through_writing_c_compiler) - [Working through ‘Writing A C Compiler’](https://jollygoodsw.wordpress.com/2025/03/13/working-through-writing-a-c-compiler/)
* [2025-07-12, 16:00:55](https://lobste.rs/s/si4u1m/dyson_sphere_program_s_new) - [Dyson Sphere Program&apos;s new multithreading framework](https://store.steampowered.com/news/app/1366540/view/543361383085900510)
* [2025-07-12, 15:34:00](https://tech.slashdot.org/story/25/07/12/0559241/fcc-chair-accused-of-political-theater-to-please-net-neutralitys-foes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Chair Accused of &apos;Political Theater&apos; to Please Net Neutrality&apos;s Foes](https://tech.slashdot.org/story/25/07/12/0559241/fcc-chair-accused-of-political-theater-to-please-net-neutralitys-foes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 14:34:00](https://tech.slashdot.org/story/25/07/12/0326234/before-air-india-boeing-787-crash-fuel-switches-were-cut-off-preliminary-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Air India Boeing 787 Crash, Fuel Switches Were Cut Off, Preliminary Report Says](https://tech.slashdot.org/story/25/07/12/0326234/before-air-india-boeing-787-crash-fuel-switches-were-cut-off-preliminary-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 13:00:00](https://developers.slashdot.org/story/25/07/12/016247/ai-slows-down-some-experienced-software-developers-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Slows Down Some Experienced Software Developers, Study Finds](https://developers.slashdot.org/story/25/07/12/016247/ai-slows-down-some-experienced-software-developers-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 12:25:28](https://news.ycombinator.com/item?id=44541576) - [The fish kick may be the fastest subsurface swim stroke yet (2015)](https://nautil.us/is-this-new-swim-stroke-the-fastest-yet-235511/)
* [2025-07-12, 10:00:00](https://science.slashdot.org/story/25/07/12/0052223/please-dont-cut-funds-for-space-traffic-control-industry-begs-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Please Don&apos;t Cut Funds For Space Traffic Control, Industry Begs Congress](https://science.slashdot.org/story/25/07/12/0052223/please-dont-cut-funds-for-space-traffic-control-industry-begs-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 08:45:15](https://news.ycombinator.com/item?id=44540402) - [MacPaint Art from the Mid-80s Still Looks Great Today](https://blog.decryption.net.au/posts/macpaint.html)
* [2025-07-12, 08:14:02](https://news.ycombinator.com/item?id=44540241) - [New Date(\&quot;wtf\&quot;) – How well do you know JavaScript&apos;s Date class?](https://jsdate.wtf)
* [2025-07-12, 07:01:45](https://lobste.rs/s/btcmpp/damn_small_link_forwarder_dslf_bit_ly) - [Damn Small Link Forwarder (DSLF): a bit.ly replacement written in rust](https://github.com/vpetersson/dslf)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 01:08:39](https://lobste.rs/s/gw7wq0/hanami_elephant_room) - [Hanami and the elephant in the room](https://hanamirb.org/blog/2025/07/11/hanami-and-the-elephant-in-the-room/)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 22:55:47](https://lobste.rs/s/s6yydx/faking_jpeg) - [Faking a JPEG](https://www.ty-penguin.org.uk/~auj/blog/2025/03/25/fake-jpeg/)
* [2025-07-11, 19:53:43](https://lobste.rs/s/ogfcwa/measuring_power_network_frequency_using) - [Measuring power network frequency using junk you have in your closet](https://halcy.de/blog/2025/02/09/measuring-power-network-frequency-using-junk-you-have-in-your-closet/)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 19:26:05](https://lobste.rs/s/ugyxdj/new_date_wtf) - [new Date(\&quot;wtf\&quot;)](https://jsdate.wtf/)
* [2025-07-11, 17:21:43](https://lobste.rs/s/eagdbx/jank_is_c) - [jank is C++](https://jank-lang.org/blog/2025-07-11-jank-is-cpp/)
* [2025-07-11, 17:19:55](https://lobste.rs/s/ccyux0/building_simple_router_with_openbsd) - [Building a Simple Router with OpenBSD](https://btxx.org/posts/openbsd-router/)
* [2025-07-11, 15:38:58](https://news.ycombinator.com/item?id=44533403) - [Kimi K2 is a state-of-the-art mixture-of-experts (MoE) language model](https://twitter.com/Kimi_Moonshot/status/1943687594560332025)
* [2025-07-11, 15:11:24](https://news.ycombinator.com/item?id=44533044) - [Switching to Claude Code and VSCode Inside Docker](https://timsh.org/claude-inside-docker/)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 07:27:47](https://news.ycombinator.com/item?id=44529274) - [C++: Maps on Chains](http://bannalia.blogspot.com/2025/07/maps-on-chains.html)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
* [2025-07-11, 02:00:10](https://news.ycombinator.com/item?id=44527739) - [Chrome&apos;s hidden X-Browser-Validation header reverse engineered](https://github.com/dsekz/chrome-x-browser-validation-header)
* [2025-07-11, 00:38:06](https://lobste.rs/s/aa7ske/anubis_now_supports_non_js_challenges) - [Anubis now supports non-JS challenges](https://anubis.techaro.lol/blog/release/v1.20.0/#no-js-challenge)
* [2025-07-11, 00:21:16](https://news.ycombinator.com/item?id=44527172) - [Axon&apos;s Draft One AI Police Report Generator Is Designed to Defy Transparency](https://www.eff.org/deeplinks/2025/07/axons-draft-one-designed-defy-transparency)
* [2025-07-10, 22:43:00](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss) - [AI is Scraping the Web, but the Web is Fighting Back](https://soylentnews.org/article.pl?sid=25/07/09/1114240&amp;from=rss)
* [2025-07-10, 17:58:00](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss) - [Earth is Going to Spin Much Faster Over the Next Few Months](https://soylentnews.org/article.pl?sid=25/07/09/116236&amp;from=rss)
* [2025-07-10, 13:14:00](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss) - [Compact GeV Proton Acceleration Using Ultra-Intense Lasers](https://soylentnews.org/article.pl?sid=25/07/09/1058230&amp;from=rss)
* [2025-07-10, 12:26:32](https://news.ycombinator.com/item?id=44520218) - [Programming Affordances That Invite Mistakes](https://thetechenabler.substack.com/p/programming-affordance-when-a-languages)
* [2025-07-10, 11:59:35](https://news.ycombinator.com/item?id=44520000) - [HNSW as abstract data structure: video intro to Redis vector sets](https://www.youtube.com/watch?v=kVApsFUeuEA)
* [2025-07-10, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss) - [Shrinking Antarctic Sea Ice Is Warming The Ocean Faster Than Expected](https://soylentnews.org/article.pl?sid=25/07/08/2330230&amp;from=rss)
* [2025-07-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss) - [The Curious Rise of Giant Tablets on Wheels](https://soylentnews.org/article.pl?sid=25/07/08/1724218&amp;from=rss)
* [2025-07-09, 23:32:53](https://news.ycombinator.com/item?id=44515783) - [Notes on Graham&apos;s ANSI Common Lisp](https://courses.cs.northwestern.edu/325/readings/graham/graham-notes.html)
* [2025-07-09, 23:08:00](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss) - [How to Stop Your LG or Samsung Smart TV From Tracking You](https://soylentnews.org/article.pl?sid=25/07/08/1129207&amp;from=rss)
* [2025-07-09, 22:32:41](https://news.ycombinator.com/item?id=44515379) - [Capturing the International Space Station (2022)](https://cosmicbackground.io/blogs/learn-about-how-these-are-captured/capturing-the-international-space-station)
* [2025-07-09, 22:10:37](https://news.ycombinator.com/item?id=44515210) - [Two-step system makes plastic from carbon dioxide, water and electricity](https://phys.org/news/2025-06-plastic-carbon-dioxide-electricity.html)
* [2025-07-09, 18:18:00](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss) - [EU Rattles its Purse and AI Datacenter Builders Come Running](https://soylentnews.org/article.pl?sid=25/07/08/1122201&amp;from=rss)
* [2025-07-09, 16:59:30](https://news.ycombinator.com/item?id=44512350) - [The upcoming GPT-3 moment for RL](https://www.mechanize.work/blog/the-upcoming-gpt-3-moment-for-rl/)
* [2025-07-09, 13:28:00](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss) - [MIT Engineers Develop Electrochemical Sensors for Cheap, Disposable Diagnostics](https://soylentnews.org/article.pl?sid=25/07/08/1113258&amp;from=rss)
* [2025-07-09, 09:33:57](https://news.ycombinator.com/item?id=44507931) - [Experimental imperative-style music sequence generator engine](https://github.com/renoise/pattrns)
* [2025-07-09, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss) - [Stop Killing Games Finally Reaches One Million Signature Milestone, but There&apos;s a Pretty Big Catch](https://soylentnews.org/article.pl?sid=25/07/07/2242255&amp;from=rss)
* [2025-07-09, 08:07:23](https://news.ycombinator.com/item?id=44507405) - [Parse, Don&apos;t Validate (For C)](https://www.lelanthran.com/chap13/content.html)
* [2025-07-09, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss) - [Inside the Australian Lab Growing a Biological Computer](https://soylentnews.org/article.pl?sid=25/07/07/2215236&amp;from=rss)
