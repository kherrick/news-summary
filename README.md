# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Furiosa's Energy-Efficient 'NPU' AI Chips Start Mass Production This Month, Challenging Nvidia](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Nightshade: Make images unsuitable for model training](https://nightshade.cs.uchicago.edu/whatis.html) ([comments](https://news.ycombinator.com/item?id=46487342))

* [Show HN: An interactive guide to how browsers work](https://howbrowserswork.com/) ([comments](https://news.ycombinator.com/item?id=46488654))

* [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/) ([comments](https://lobste.rs/s/gmtpog/my_llm_coding_workflow_going_into_2026))

## Health and Science Breakthroughs

* [Anti-Aging Injection Regrows Knee Cartilage and Prevents Arthritis](https://scitechdaily.com/anti-aging-injection-regrows-knee-cartilage-and-prevents-arthritis/) ([comments](https://news.ycombinator.com/item?id=46488711))

* [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/0059210&from=rss))

## Security and Privacy

* [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/018201&from=rss))

* [Is Proton Leaving Switzerland? "Legal Uncertainty" of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/29/1742252&from=rss))

## Art and Creativity

* [Moiré Explorer](https://play.ertdfgcvb.xyz/#/src/demos/moire_explorer) ([comments](https://news.ycombinator.com/item?id=46487472))

* [3D printed origami](https://youtu.be/FNVBK7-h9Fs) ([comments](https://lobste.rs/s/qlnufk/3d_printed_origami))

* [The Unbearable Joy of Sitting Alone in a Café](https://candost.blog/the-unbearable-joy-of-sitting-alone-in-a-cafe/) ([comments](https://news.ycombinator.com/item?id=46488355))

## AI and Machine Learning

* [AI Sycophancy Panic](https://github.com/firasd/vibesbench/blob/main/docs/ai-sycophancy-panic.md) ([comments](https://news.ycombinator.com/item?id=46488396))

* [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html) ([comments](https://lobste.rs/s/gtm6o1/neural_networks_zero_hero))

* [Anatomy of BoltzGen](https://huggingface.co/spaces/ludocomito/anatomy-of-boltzgen) ([comments](https://news.ycombinator.com/item?id=46486681))

## Space and Exploration

* [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/016205&from=rss))

* [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/02/0056200&from=rss))

## Technological Trends and Social Media

* [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google's Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46486135))

* [How I browses the web in 2026](https://bastiangruber.ca/posts/how-i-browse-the-web-in-2026/) ([comments](https://lobste.rs/s/awxarg/how_i_browse_web_2026))

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

* [2026-01-04, 15:49:36](https://lobste.rs/s/gmtpog/my_llm_coding_workflow_going_into_2026) - [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)
* [2026-01-04, 15:38:55](https://lobste.rs/s/b19ydv/audio_dongles_ghost_usb_1) - [Audio dongles and the ghost of USB 1](http://epenguin.imalone.co.uk/2025/06/audio-dongles-and-ghost-of-usb-1.html)
* [2026-01-04, 15:34:00](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Furiosa&apos;s Energy-Efficient &apos;NPU&apos; AI Chips Start Mass Production This Month, Challenging Nvidia](https://hardware.slashdot.org/story/26/01/03/2220248/furiosas-energy-efficient-npu-ai-chips-start-mass-production-this-month-challenging-nvidia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 15:32:54](https://lobste.rs/s/v4a1sp/win32_on_macos_2019) - [win32 on macOS (2019)](https://www.winehq.org/pipermail/wine-devel/2019-December/156602.html)
* [2026-01-04, 15:30:00](https://lobste.rs/s/ntkyts/on_scannerless_parsing_again) - [On scannerless parsing again](https://wareya.wordpress.com/2026/01/04/short-bit-on-scannerless-parsing-again/)
* [2026-01-04, 15:13:18](https://news.ycombinator.com/item?id=46488711) - [Anti-Aging Injection Regrows Knee Cartilage and Prevents Arthritis](https://scitechdaily.com/anti-aging-injection-regrows-knee-cartilage-and-prevents-arthritis/)
* [2026-01-04, 15:11:19](https://news.ycombinator.com/item?id=46488696) - [How I archived 10 years of memories using Spotify](https://notes.xdavidhu.me/notes/how-i-archived-10-years-of-memories-using-spotify)
* [2026-01-04, 15:08:02](https://news.ycombinator.com/item?id=46488654) - [Show HN: An interactive guide to how browsers work](https://howbrowserswork.com/)
* [2026-01-04, 15:00:18](https://news.ycombinator.com/item?id=46488576) - [Web development is fun again](https://ma.ttias.be/web-development-is-fun-again/)
* [2026-01-04, 14:41:28](https://news.ycombinator.com/item?id=46488396) - [AI Sycophancy Panic](https://github.com/firasd/vibesbench/blob/main/docs/ai-sycophancy-panic.md)
* [2026-01-04, 14:37:58](https://news.ycombinator.com/item?id=46488355) - [The Unbearable Joy of Sitting Alone in a Café](https://candost.blog/the-unbearable-joy-of-sitting-alone-in-a-cafe/)
* [2026-01-04, 14:30:29](https://news.ycombinator.com/item?id=46488278) - [Street Fighter II, the World Warrier (2021)](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 14:28:56](https://news.ycombinator.com/item?id=46488261) - [Cold-Blooded Software (2023)](https://dubroy.com/blog/cold-blooded-software/)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 14:03:22](https://lobste.rs/s/garkqn/maybe_comments_should_explain_what_2017) - [Maybe Comments SHOULD Explain &apos;What&apos; (2017)](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 13:49:04](https://news.ycombinator.com/item?id=46487921) - [Understanding the bin, sbin, usr/bin, usr/sbin split (2010)](https://lists.busybox.net/pipermail/busybox/2010-December/074114.html)
* [2026-01-04, 13:29:51](https://lobste.rs/s/n9tev4/who_owns_memory_part_2_who_calls_free) - [Who Owns the Memory? Part 2: Who Calls Free?](https://lukefleed.xyz/posts/who-owns-the-memory-pt2/)
* [2026-01-04, 13:08:33](https://lobste.rs/s/rgkpv3/javascript_engines_zoo) - [JavaScript engines zoo](https://zoo.js.org/)
* [2026-01-04, 12:57:40](https://news.ycombinator.com/item?id=46487498) - [Jeffgeerling.com has been Migrated to Hugo](https://www.jeffgeerling.com/blog/2026/migrated-to-hugo/)
* [2026-01-04, 12:54:20](https://news.ycombinator.com/item?id=46487472) - [Moiré Explorer](https://play.ertdfgcvb.xyz/#/src/demos/moire_explorer)
* [2026-01-04, 12:34:14](https://news.ycombinator.com/item?id=46487351) - [YouTube Playlist Downloader](https://github.com/Linuxmaster14/yt-playlist-downloader)
* [2026-01-04, 12:34:00](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Effort to Break China&apos;s Rare-Earth Monopoly](https://hardware.slashdot.org/story/26/01/04/0515201/the-us-effort-to-break-chinas-rare-earth-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 12:32:30](https://news.ycombinator.com/item?id=46487342) - [Nightshade: Make images unsuitable for model training](https://nightshade.cs.uchicago.edu/whatis.html)
* [2026-01-04, 12:20:19](https://news.ycombinator.com/item?id=46487276) - [A New Year&apos;s letter to a young person](https://www.siliconcontinent.com/p/a-new-years-letter-to-a-young-person)
* [2026-01-04, 12:12:19](https://lobste.rs/s/qlnufk/3d_printed_origami) - [3D printed origami](https://youtu.be/FNVBK7-h9Fs)
* [2026-01-04, 12:10:20](https://lobste.rs/s/nmsoao/quick_easy_gpu_random_numbers_d3d11_2013) - [Quick And Easy GPU Random Numbers In D3D11 (2013)](https://www.reedbeta.com/blog/quick-and-easy-gpu-random-numbers-in-d3d11/)
* [2026-01-04, 11:55:34](https://news.ycombinator.com/item?id=46487120) - [FreeBSD Home NAS, part 3: WireGuard VPN, routing, and Linux peers](https://rtfm.co.ua/en/freebsd-home-nas-part-3-wireguard-vpn-linux-peer-and-routing/)
* [2026-01-04, 11:52:41](https://lobste.rs/s/jxub7u/freebsd_home_nas_part_3_wireguard_vpn) - [FreeBSD Home NAS, part 3: WireGuard VPN, routing, and Linux peers](https://rtfm.co.ua/en/freebsd-home-nas-part-3-wireguard-vpn-linux-peer-and-routing/)
* [2026-01-04, 11:23:23](https://news.ycombinator.com/item?id=46486978) - [JavaScript engines zoo – Compare every JavaScript engine](https://zoo.js.org/)
* [2026-01-04, 10:47:31](https://lobste.rs/s/gxiqwv/saying_goodbye_servers_at_our_physical) - [Saying goodbye to the servers at our physical datacenter - Stack Overflow](https://stackoverflow.blog/2025/12/24/the-great-unracking-saying-goodbye-to-the-servers-at-our-physical-datacenter/)
* [2026-01-04, 10:43:38](https://news.ycombinator.com/item?id=46486780) - [Maybe comments should explain &apos;what&apos; (2017)](https://www.hillelwayne.com/post/what-comments/)
* [2026-01-04, 10:35:41](https://lobste.rs/s/gtm6o1/neural_networks_zero_hero) - [Neural Networks: Zero To Hero](https://karpathy.ai/zero-to-hero.html)
* [2026-01-04, 10:28:49](https://news.ycombinator.com/item?id=46486681) - [Anatomy of BoltzGen](https://huggingface.co/spaces/ludocomito/anatomy-of-boltzgen)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 09:11:47](https://news.ycombinator.com/item?id=46486326) - [The PGP problem (2019)](https://www.latacora.com/blog/2019/07/16/the-pgp-problem/)
* [2026-01-04, 08:35:42](https://news.ycombinator.com/item?id=46486135) - [The Gentle Seduction (1989)](http://www.skyhunter.com/marcs/GentleSeduction.html)
* [2026-01-04, 08:34:00](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Surges in Popularity to Overtake TikTok in the UK - Thanks to Google&apos;s Algorithm?](https://tech.slashdot.org/story/26/01/04/0547242/reddit-surges-in-popularity-to-overtake-tiktok-in-the-uk---thanks-to-googles-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 08:11:22](https://news.ycombinator.com/item?id=46485989) - [Can I start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 08:11:07](https://lobste.rs/s/wewhgh/can_i_finally_start_using_wayland_2026) - [Can I finally start using Wayland in 2026?](https://michael.stapelberg.ch/posts/2026-01-04-wayland-sway-in-2026/)
* [2026-01-04, 07:15:46](https://lobste.rs/s/k41lgd/where_good_ideas_come_from_for_coding) - [Where good ideas come from (for coding agents)](https://sunilpai.dev/posts/seven-ways/)
* [2026-01-04, 05:45:20](https://lobste.rs/s/swytpz/unsigned_char_std_basic_string_c) - [Unsigned char std::basic_string&lt;&gt; in C++](https://berthub.eu/articles/posts/unsigned-char-std-string-cpp/)
* [2026-01-04, 05:34:00](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Tesla Video Shows Tesla Semi Electric Truck Charging at 1.2 MW](https://hardware.slashdot.org/story/26/01/03/238257/new-tesla-video-shows-tesla-semi-electric-truck-charging-at-12-mw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 05:02:16](https://news.ycombinator.com/item?id=46485090) - [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-04, 03:44:23](https://news.ycombinator.com/item?id=46484662) - [Gershwin-desktop: OS X-like Desktop Environment based on GNUStep](https://github.com/gershwin-desktop/gershwin-desktop)
* [2026-01-04, 03:28:32](https://lobste.rs/s/za0nkg/building_tls_1_3_implementation_pure) - [Building a TLS 1.3 Implementation in Pure Common Lisp](https://atgreen.github.io/repl-yell/posts/pure-tls/)
* [2026-01-04, 02:38:49](https://lobste.rs/s/dd21hs/street_fighter_ii_world_warrier_2021) - [Street Fighter II, The World Warrier (2021)](https://fabiensanglard.net/sf2_warrier/)
* [2026-01-04, 02:34:00](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Alaska&apos;s Court System Tried Answering Questions with an AI Chatbot?](https://science.slashdot.org/story/26/01/03/2114246/what-happened-when-alaskas-court-system-tried-answering-questions-with-an-ai-chatbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-04, 00:38:03](https://lobste.rs/s/7f58yw/minikv_little_kv_store_implementation) - [minikv: A little KV store implementation in OCaml to practice DB systems things](https://github.com/alpha-convert/minikv)
* [2026-01-04, 00:30:46](https://lobste.rs/s/52bxvq/kde_onboarding_is_good_now) - [KDE onboarding is good now](https://rabbitictranslator.com/kde-onboarding/)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 23:45:00](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s $250M Deal with California to Fund Newsrooms May Be Stalled](https://tech.slashdot.org/story/26/01/03/0351247/googles-250m-deal-with-california-to-fund-newsrooms-may-be-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 23:39:12](https://news.ycombinator.com/item?id=46483023) - [Swift on Android: Full Native App Development Now Possible](https://docs.swifdroid.com/app/)
* [2026-01-03, 23:24:41](https://news.ycombinator.com/item?id=46482877) - [The suck is why we&apos;re here](https://nik.art/the-suck-is-why-were-here/)
* [2026-01-03, 22:45:00](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has Microsoft Discontinued Offline Activation of Windows?](https://tech.slashdot.org/story/26/01/03/1947258/has-microsoft-discontinued-offline-activation-of-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 22:23:34](https://news.ycombinator.com/item?id=46482345) - [Total monthly number of StackOverflow questions over time](https://data.stackexchange.com/stackoverflow/query/1926661#graph)
* [2026-01-03, 21:45:00](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Invaded Venezuela and Captured Nicol&amp;#225;s Maduro - But ChatGPT and Perplexity Disagree](https://slashdot.org/story/26/01/03/200236/the-us-invaded-venezuela-and-captured-nicols-maduro---but-chatgpt-and-perplexity-disagree?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 21:26:07](https://lobste.rs/s/snn5k8/enterprise_integration_patterns) - [Enterprise Integration Patterns: The Routing Slip](https://james-carr.org/posts/2025-01-02-advent-of-eip-day-9-routing-slip/)
* [2026-01-03, 20:45:00](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Lowering Orbits of 4,400 Starlink Satellites for Safety&apos;s Sake](https://science.slashdot.org/story/26/01/03/075205/spacex-lowering-orbits-of-4400-starlink-satellites-for-safetys-sake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:45:00](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could AI Bring Us Four-Day Workweeks?](https://it.slashdot.org/story/26/01/03/0510258/could-ai-bring-us-four-day-workweeks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 17:45:00](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Cancel Hundreds of Flights After U.S. Attack on Venezuela](https://news.slashdot.org/story/26/01/03/1740239/airlines-cancel-hundreds-of-flights-after-us-attack-on-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 17:33:29](https://lobste.rs/s/ie1366/amiga_desktops_worth_seeing) - [Amiga Desktops Worth Seeing](https://www.datagubbe.se/wbshots/)
* [2026-01-03, 17:16:24](https://lobste.rs/s/o5e7gm/who_owns_memory_part_1_what_is_object) - [Who Owns the Memory? Part 1: What is an Object?](https://lukefleed.xyz/posts/who-owns-the-memory-pt1/)
* [2026-01-03, 16:34:00](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Interference With America&apos;s GPS System &apos;Has Grown Dramatically&apos;](https://news.slashdot.org/story/26/01/03/0429234/interference-with-americas-gps-system-has-grown-dramatically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 16:03:43](https://lobste.rs/s/awxarg/how_i_browse_web_2026) - [How I browse the web in 2026](https://bastiangruber.ca/posts/how-i-browse-the-web-in-2026/)
* [2026-01-03, 15:34:00](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jobs Vulnerable to AI Replacement Actually &apos;Thriving, Not Dying Out&apos;, Report Suggests](https://it.slashdot.org/story/26/01/03/0259241/jobs-vulnerable-to-ai-replacement-actually-thriving-not-dying-out-report-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 12:01:00](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 09:30:00](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 16:10:52](https://news.ycombinator.com/item?id=46445393) - [One Formula That Demystifies 3D Graphics](https://www.youtube.com/watch?v=qjWkNZ0SXfo)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
