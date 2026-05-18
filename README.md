# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Calvin - Determinism, Distributed ACID transactions (2020)](https://www.mydistributed.systems/2020/08/calvin.html) - Explore the applications of distributed databases and deterministic transaction processing.

* [spr: Stacked Pull Requests on GitHub](https://github.com/ejoffe/spr) - An open-source GitHub tool designed to manage and streamline stacked pull requests.

* [Rust async and the ARM generic timer](https://thejpster.org.uk/blog/blog-2026-05-17/) - Insights into pairing Rust's async model with ARM generic timer hardware.

* [Fits on a Floppy - A Manifesto for Small Software](https://fitsonafloppy.com) - A perspective advocating for minimal software design in today's complex tech environment.

* [Prolog Coding Horror](https://www.metalevel.at/prolog/horror) - A humorous journey through Prolog programming pitfalls.

* [Hyperpolyglot Lisp: Common Lisp, Racket, Clojure, Emacs Lisp](https://hyperpolyglot.org/lisp) - A helpful resource comparing multiple Lisp variants for developers.

* [Async I/O in Zig 0.16, today](https://lalinsky.com/2026/05/11/async-io-in-zig-016-today.html) - An in-depth look at Zig 0.16's handling of asynchronous input/output.

## Artificial Intelligence and Ethics

* [Linus Torvalds: AI-Detected Bug Reports Make Kernel Security List 'Almost Entirely Unmanageable'](https://linux.slashdot.org/story/26/05/18/0238214/linus-torvalds-ai-detected-bug-reports-make-kernel-security-list-almost-entirely-unmanageable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Linus Torvalds criticizes the deluge of AI-generated kernel bug reports.

* [Researcher says Microsoft secretly built a backdoor into BitLocker](https://www.techspot.com/news/112410-security-researcher-microsoft-secretly-built-backdoor-bitlocker-releases.html) - Allegations of a hidden backdoor in Microsoft's BitLocker spark security concerns.

* [Trials on veterans suggest ibogaine could provide a new treatment for PTSD](https://www.bbc.com/future/article/20260514-how-hallucinogenic-ibogaine-helps-veterans-overcome-ptsd) - Study examines hallucinogenic ibogaine as a potential PTSD treatment.

* [We Still Can't See Dark Matter. But What If We Can Hear It?](https://science.slashdot.org/story/26/05/17/198215/we-still-cant-see-dark-matter-but-what-if-we-can-hear-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Novel ideas about detecting dark matter using sound.

* [The Great Zombification: AI in the Ivory Tower](https://soylentnews.org/article.pl?sid=26/05/14/0321244&from=rss) - Examines the impact of AI on academia and intellectual environments.

## Science and Innovation

* [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&from=rss) - NASA achieves a major milestone with its Mars Helicopter.

* [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&from=rss) - New insights into disease progression could alter Parkinson's treatments.

* [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&from=rss) - An ancient manuscript rediscovered, shedding new light on history.

* [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&from=rss) - A breakthrough in material science with mysterious high-performance steel.

## Social Commentary and Historical Retrospectives

* [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&from=rss) - Discusses how Steam OS influenced Microsoft's OS design policy.

* [Amazon Stops Supporting Pre-2013 Kindles Today. Some Owners Turn to Jailbreaking](https://news.slashdot.org/story/26/05/17/0014220/amazon-stops-supporting-pre-2013-kindles-today-some-owners-turn-to-jailbreaking?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis on the implications of support termination for older devices.

* [VoIP brings back old-fashioned pay phones to rural Vermont (2025)](https://spectrum.ieee.org/payphone-voip) - Exploring the unexpected resurgence of retro telephony.

* [Magical Realism: 'Northern Exposure' 25 Years Later (2015)](https://www.rogerebert.com/streaming/magical-realism-nothern-exposure-25-years-later) - A nostalgic look at the surreal TV series 'Northern Exposure'.

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

* [2026-05-18, 08:19:21](https://news.ycombinator.com/item?id=48176762) - [Why is Google Maps back to showing old satellite images of Altadena?](https://www.reddit.com/r/pasadena/s/94BHlkE84r)
* [2026-05-18, 07:34:00](https://tech.slashdot.org/story/26/05/18/0613223/iran-now-threatens-fees-for-subsea-internet-cables-in-the-strait-of-hormuz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Now Threatens Fees for Subsea Internet Cables in the Strait of Hormuz](https://tech.slashdot.org/story/26/05/18/0613223/iran-now-threatens-fees-for-subsea-internet-cables-in-the-strait-of-hormuz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 06:42:29](https://lobste.rs/s/z306ya/occasional_econnreset) - [The occasional `ECONNRESET`](https://movq.de/blog/postings/2026-05-05/1/POSTING-en.html)
* [2026-05-18, 06:35:14](https://lobste.rs/s/k6e1ma/calvin_determinism_distributed_acid) - [Calvin - Determinism, Distributed ACID transactions (2020)](https://www.mydistributed.systems/2020/08/calvin.html)
* [2026-05-18, 04:38:58](https://news.ycombinator.com/item?id=48175637) - [Étienne Ghys: The Shape of Letters: From Leonardo da Vinci to Donald Knuth](https://www.youtube.com/watch?v=1OIxzewWilc)
* [2026-05-18, 04:28:13](https://lobste.rs/s/dvsuag/review_sylve_on_freebsd) - [Review: Sylve on FreeBSD](https://distrowatch.com/weekly-mobile.php?issue=20260518#sylve)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-18, 04:22:48](https://lobste.rs/s/txnyjt/spr_stacked_pull_requests_on_github) - [spr: Stacked Pull Requests on GitHub](https://github.com/ejoffe/spr)
* [2026-05-18, 03:34:00](https://linux.slashdot.org/story/26/05/18/0238214/linus-torvalds-ai-detected-bug-reports-make-kernel-security-list-almost-entirely-unmanageable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds: AI-Detected Bug Reports Make Kernel Security List &apos;Almost Entirely Unmanageable&apos;](https://linux.slashdot.org/story/26/05/18/0238214/linus-torvalds-ai-detected-bug-reports-make-kernel-security-list-almost-entirely-unmanageable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 03:06:03](https://lobste.rs/s/ynxkj6/researcher_says_microsoft_secretly) - [Researcher says Microsoft secretly built a backdoor into BitLocker](https://www.techspot.com/news/112410-security-researcher-microsoft-secretly-built-backdoor-bitlocker-releases.html)
* [2026-05-18, 02:59:34](https://news.ycombinator.com/item?id=48175140) - [It is time to give up the dualism introduced by the debate on consciousness](https://www.noemamag.com/there-is-no-hard-problem-of-consciousness/)
* [2026-05-18, 02:13:10](https://lobste.rs/s/b5hrqb/reverse_engineering_android_malware) - [Reverse engineering Android malware with Claude Code](https://zanestjohn.com/blog/reing-with-claude-code)
* [2026-05-18, 01:46:23](https://lobste.rs/s/61uxxo/reversing_grateful_dead_d2s2_on_mac_2022) - [Reversing ‘Grateful Dead: D2S2’ on Mac (2022)](https://blog.os9.ca/2022/04/21/001-reversing-grateful-dead-d2s2/)
* [2026-05-18, 01:34:00](https://games.slashdot.org/story/26/05/18/0130213/americas-library-of-congress-officially-inducts-the-soundtrack-for-the-videogame-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Library of Congress Officially Inducts... the Soundtrack for the Videogame &apos;Doom&apos;](https://games.slashdot.org/story/26/05/18/0130213/americas-library-of-congress-officially-inducts-the-soundtrack-for-the-videogame-doom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 00:28:51](https://lobste.rs/s/eeqdfc/rust_async_arm_generic_timer) - [Rust async and the ARM generic timer](https://thejpster.org.uk/blog/blog-2026-05-17/)
* [2026-05-17, 23:46:00](https://slashdot.org/story/26/05/17/2343248/former-google-ceo-eric-schmidt-booed-during-graduation-speech-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Google CEO Eric Schmidt Booed During Graduation Speech About AI](https://slashdot.org/story/26/05/17/2343248/former-google-ceo-eric-schmidt-booed-during-graduation-speech-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 23:41:06](https://lobste.rs/s/96kz5p/may_i_recommend_eww_for_emacs_s_innovative) - [May I recommend eww for Emacs’s innovative UI?](https://www.matem.unam.mx/~omar/apropos-emacs.html#may-i-recommend-eww-for-emacs-innovative-ui)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 23:10:09](https://news.ycombinator.com/item?id=48173962) - [WriteUp: 16 Bytes of x86 that turn Matrix rain into sound](https://hellmood.111mb.de//wake_up_16b_writeup.html)
* [2026-05-17, 22:39:00](https://yro.slashdot.org/story/26/05/17/2236232/small-town-fights-over-flocks-ai-enhanced-network-of-license-plate-reading-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small Town Fights Over Flock&apos;s AI-Enhanced Network of License Plate-Reading Cameras](https://yro.slashdot.org/story/26/05/17/2236232/small-town-fights-over-flocks-ai-enhanced-network-of-license-plate-reading-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 21:45:30](https://news.ycombinator.com/item?id=48173468) - [Two EA-18 fighter jets collide at Mountain Home airshow, pilots ejected safely](https://idahonews.com/news/local/two-f-18-fighter-jets-have-crashed-during-an-airshow-at-mountain-home-air-force-base)
* [2026-05-17, 21:40:35](https://news.ycombinator.com/item?id=48173429) - [GenCAD](https://gencad.github.io/)
* [2026-05-17, 21:15:51](https://news.ycombinator.com/item?id=48173268) - [Prolog Coding Horror](https://www.metalevel.at/prolog/horror)
* [2026-05-17, 21:14:23](https://lobste.rs/s/sdylhl/fits_on_floppy_manifesto_for_small) - [Fits on a Floppy - A Manifesto for Small Software](https://fitsonafloppy.com)
* [2026-05-17, 20:56:00](https://it.slashdot.org/story/26/05/17/2053257/microsoft-exchange-server-vulnerability-actively-exploited-in-a-bad-week-for-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Exchange Server Vulnerability Actively Exploited, in a Bad Week for Microsoft](https://it.slashdot.org/story/26/05/17/2053257/microsoft-exchange-server-vulnerability-actively-exploited-in-a-bad-week-for-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 19:39:10](https://news.ycombinator.com/item?id=48172505) - [VoIP brings back old-fashioned pay phones to rural Vermont (2025)](https://spectrum.ieee.org/payphone-voip)
* [2026-05-17, 19:09:00](https://science.slashdot.org/story/26/05/17/198215/we-still-cant-see-dark-matter-but-what-if-we-can-hear-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We Still Can&apos;t See Dark Matter. But What If We Can Hear It?&apos;](https://science.slashdot.org/story/26/05/17/198215/we-still-cant-see-dark-matter-but-what-if-we-can-hear-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 18:36:41](https://lobste.rs/s/03djyt/new_design_for_freebsd_website) - [New design for the FreeBSD website](https://www.freebsd.org/)
* [2026-05-17, 18:18:38](https://lobste.rs/s/hg4sew/bitsocial_open_source_p2p_network_for) - [Bitsocial: Open Source P2P Network for Social Apps](https://bitsocial.net/)
* [2026-05-17, 17:34:00](https://news.slashdot.org/story/26/05/17/1729245/us-mathreading-scores-continue-13-year-decline-researchers-blame-reduced-testing-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Math/Reading Scores Continue 13-Year Decline. Researchers Blame Reduced Testing and Social Media](https://news.slashdot.org/story/26/05/17/1729245/us-mathreading-scores-continue-13-year-decline-researchers-blame-reduced-testing-and-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 16:37:47](https://lobste.rs/s/9hiu10/bun_s_problem_may_be_developing_open) - [Bun&apos;s problem may be developing in the open](https://00f.net/2026/05/17/developping-in-the-open/)
* [2026-05-17, 16:34:00](https://tech.slashdot.org/story/26/05/16/2318249/how-owners-of-evs-from-bankrupt-fisker-saved-their-cars-with-an-open-source-nonprofit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Owners of EVs from Bankrupt Fisker Saved Their Cars With an Open Source Nonprofit](https://tech.slashdot.org/story/26/05/16/2318249/how-owners-of-evs-from-bankrupt-fisker-saved-their-cars-with-an-open-source-nonprofit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 16:28:54](https://lobste.rs/s/dt92ad/don_t_answer_first_question) - [Don&apos;t answer the first question](https://lalitm.com/post/dont-answer-the-first-question/)
* [2026-05-17, 15:40:32](https://lobste.rs/s/6fc7qu/reviewing_so_called_pull_requests_at) - [Reviewing so called Pull Requests at $dayjob](https://rkta.de/dayjob-pr-review.html)
* [2026-05-17, 15:37:07](https://news.ycombinator.com/item?id=48169874) - [Show HN: Semble – Code search for agents that uses 98% fewer tokens than grep](https://github.com/MinishLab/semble)
* [2026-05-17, 15:34:00](https://news.slashdot.org/story/26/05/16/2110220/sysadmin-creates-modulejail-to-automatically-blacklist-unused-kernel-modules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sysadmin Creates &apos;ModuleJail&apos; To Automatically Blacklist Unused Kernel Modules](https://news.slashdot.org/story/26/05/16/2110220/sysadmin-creates-modulejail-to-automatically-blacklist-unused-kernel-modules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 15:28:30](https://lobste.rs/s/huqdtj/coding_on_paper) - [Coding on Paper](https://wickstrom.tech/2026-05-16-coding-on-paper.html)
* [2026-05-17, 14:34:00](https://developers.slashdot.org/story/26/05/17/0252216/python-stays-1-r-rises-in-popularity-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python Stays #1, R Rises in Popularity, Says TIOBE](https://developers.slashdot.org/story/26/05/17/0252216/python-stays-1-r-rises-in-popularity-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 13:16:27](https://news.ycombinator.com/item?id=48168668) - [I turned a $80 RK3562 Android tablet into a Debian Linux workstation](https://github.com/tech4bot/rk3562deb)
* [2026-05-17, 12:58:13](https://lobste.rs/s/l34yuj/claude_code_managed_get_adobe_lightroom) - [Claude Code managed to get Adobe Lightroom working on Linux](https://github.com/sander110419/lightroom-cc-on-linux)
* [2026-05-17, 12:57:07](https://lobste.rs/s/neclbs/native_all_way_until_you_need_text) - [Native all the way, until you need text](https://justsitandgrin.im/posts/native-all-the-way-until-you-need-text/)
* [2026-05-17, 12:52:06](https://news.ycombinator.com/item?id=48168485) - [CUDA Books](https://github.com/alternbits/awesome-cuda-books)
* [2026-05-17, 12:13:45](https://news.ycombinator.com/item?id=48168221) - [I don&apos;t think AI will make your processes go faster](https://frederickvanbrabant.com/blog/2026-05-15-i-dont-think-ai-will-make-your-processes-go-faster/)
* [2026-05-17, 12:03:58](https://lobste.rs/s/btrxft/go_european_discover_european_products) - [Go European — Discover European products and services](https://www.goeuropean.org/)
* [2026-05-17, 12:03:04](https://news.ycombinator.com/item?id=48168159) - [Trials on veterans suggest ibogaine could provide a new treatment for PTSD](https://www.bbc.com/future/article/20260514-how-hallucinogenic-ibogaine-helps-veterans-overcome-ptsd)
* [2026-05-17, 11:34:00](https://developers.slashdot.org/story/26/05/17/0214254/elon-musks-xai-launches-grok-build-its-first-ai-coding-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk&apos;s xAI Launches &apos;Grok Build&apos;, Its First AI Coding Agent ](https://developers.slashdot.org/story/26/05/17/0214254/elon-musks-xai-launches-grok-build-its-first-ai-coding-agent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 07:44:16](https://news.ycombinator.com/item?id=48166856) - [kharp – k version 3 Language Interpreter in C#](https://github.com/ERufian/ksharp)
* [2026-05-17, 07:34:00](https://news.slashdot.org/story/26/05/16/1854222/the-uk-finally-starts-reforming-its-computer-misuse-act?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The UK Finally Starts Reforming Its &apos;Computer Misuse Act&apos;](https://news.slashdot.org/story/26/05/16/1854222/the-uk-finally-starts-reforming-its-computer-misuse-act?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 06:15:12](https://lobste.rs/s/wycfiy/deepseek_v4_flash_means_llm_steering_is) - [DeepSeek-V4-Flash means LLM steering is interesting again](https://www.seangoedecke.com/steering-vectors/)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
* [2026-05-17, 04:09:52](https://news.ycombinator.com/item?id=48165980) - [Tesla Solar Roof is on life support as it pivot to panels](https://electrek.co/2026/05/14/tesla-solar-roof-promise-vs-reality-pivot-panels/)
* [2026-05-17, 03:34:00](https://news.slashdot.org/story/26/05/17/0014220/amazon-stops-supporting-pre-2013-kindles-today-some-owners-turn-to-jailbreaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Stops Supporting Pre-2013 Kindles Today. Some Owners Turn to Jailbreaking](https://news.slashdot.org/story/26/05/17/0014220/amazon-stops-supporting-pre-2013-kindles-today-some-owners-turn-to-jailbreaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 03:20:45](https://lobste.rs/s/dg2sx7/hyperpolyglot_lisp_common_lisp_racket) - [Hyperpolyglot Lisp: Common Lisp, Racket, Clojure, Emacs Lisp](https://hyperpolyglot.org/lisp)
* [2026-05-17, 01:34:00](https://hardware.slashdot.org/story/26/05/17/0125222/some-datacenters-divert-power-from-homes-will-it-drive-homeowners-to-solar-and-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Datacenters Divert Power from Homes.  Will It Drive Homeowners to Solar and Batteries?](https://hardware.slashdot.org/story/26/05/17/0125222/some-datacenters-divert-power-from-homes-will-it-drive-homeowners-to-solar-and-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-17, 00:20:51](https://lobste.rs/s/1udl0j/async_i_o_zig_0_16_today) - [Async I/O in Zig 0.16, today](https://lalinsky.com/2026/05/11/async-io-in-zig-016-today.html)
* [2026-05-16, 23:51:00](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss) - [AISLE Discovers CVE-2026-42511: a 21-Year-Old FreeBSD Remote Command Execution Vulnerability](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss)
* [2026-05-16, 22:45:16](https://news.ycombinator.com/item?id=48164432) - [A nicer voltmeter clock](https://lcamtuf.substack.com/p/a-nicer-voltmeter-clock)
* [2026-05-16, 19:17:00](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss) - [HP Stuffed a PC Into a Keyboard. We Took it for a Spin](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss)
* [2026-05-16, 17:54:27](https://lobste.rs/s/obxoph/futility_lava_lamps_what_random_really) - [The Futility of Lava Lamps: What Random Really Means](https://loup-vaillant.fr/articles/lava-lamps-and-randomness)
* [2026-05-16, 15:18:23](https://news.ycombinator.com/item?id=48160964) - [Profunctor Equipment in Haskell](https://bartoszmilewski.com/2026/05/16/profunctor-equipment-in-haskell/)
* [2026-05-16, 14:28:00](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss) - [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss)
* [2026-05-16, 14:18:47](https://lobste.rs/s/kep6ok/recent_kernel_exploits_attack_surface) - [Recent Kernel exploits, attack surface reduction, example IPSEC](https://www.openwall.com/lists/oss-security/2026/05/16/3)
* [2026-05-16, 09:45:51](https://lobste.rs/s/4g74mw/ascetic_computing) - [Ascetic Computing](https://ratfactor.com/ascetic-computing)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 05:56:41](https://news.ycombinator.com/item?id=48157229) - [A Good Lemma Is Worth a Thousand Theorems (2007)](https://sites.math.rutgers.edu/~zeilberg/Opinion82.html)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 01:25:29](https://news.ycombinator.com/item?id=48155936) - [Magical Realism: “Northern Exposure” 25 Years Later (2015)](https://www.rogerebert.com/streaming/magical-realism-nothern-exposure-25-years-later)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
* [2026-05-15, 23:54:33](https://news.ycombinator.com/item?id=48155450) - [Crystals found inside wreckage from the first nuclear bomb test](https://www.scientificamerican.com/article/strange-crystals-found-inside-wreckage-from-the-first-nuclear-bomb-test/)
* [2026-05-15, 19:25:43](https://news.ycombinator.com/item?id=48152754) - [Ask an Astronaut: 333 hours of Q&amp;A footage with astronauts](https://askanastronaut.issinrealtime.org/)
* [2026-05-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss) - [A Wikipedia Clone Built on AI Hallucinations is Here to Hasten Along the Death of the Internet](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss)
* [2026-05-15, 17:17:04](https://news.ycombinator.com/item?id=48151251) - [Jank now has its own custom IR](https://jank-lang.org/blog/2026-05-08-optimization/)
* [2026-05-15, 16:36:30](https://news.ycombinator.com/item?id=48150690) - [Build a Radio Wave Detector with Balls of Aluminum Foil](https://www.wired.com/story/build-a-radio-wave-detector-with-balls-of-aluminum-foil/)
* [2026-05-15, 14:53:53](https://news.ycombinator.com/item?id=48149461) - [Show HN: Mezz, a curl-able WiFi sandbox for IoT pentesting](https://github.com/ABGEO/mezz)
* [2026-05-15, 14:45:00](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss) - [Linux Kernel Maintainers Pitch Emergency Killswitch After CopyFail and Dirty Frag Chaos](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss)
* [2026-05-15, 14:05:25](https://news.ycombinator.com/item?id=48148766) - [The SGI Buyer&apos;s Guide (2003)](https://hardware.majix.org/computers/sgi/buyers-guide.shtml)
* [2026-05-15, 11:02:14](https://news.ycombinator.com/item?id=48147091) - [Prolog Basics Explained with Pokémon](https://unplannedobsolescence.com/blog/prolog-basics-pokemon/)
* [2026-05-15, 09:59:00](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss) - [The Great Zombification: AI in the Ivory Tower](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss)
* [2026-05-15, 05:16:00](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss) - [The New Wild West of AI Kids’ Toys](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss)
* [2026-05-15, 00:25:00](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss) - [Scientists Solve 100-Year-Old Schrödinger Mystery About Color Perception](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss)
* [2026-05-14, 22:30:16](https://news.ycombinator.com/item?id=48142115) - [Colossus: The Forbin Project](https://en.wikipedia.org/wiki/Colossus:_The_Forbin_Project)
* [2026-05-14, 22:12:45](https://news.ycombinator.com/item?id=48141960) - [Cannibalistic attacks between gray seals leave telltale “corkscrew” injuries](https://www.science.org/content/article/scientists-id-corkscrew-killer-behind-gruesome-seal-deaths)
* [2026-05-14, 20:08:12](https://news.ycombinator.com/item?id=48140556) - [Hindenburg’s Smoking Room](https://www.airships.net/hindenburg-smoking-room/)
* [2026-05-14, 19:41:00](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss) - [GM Agrees to Pay $12.75 Million to Settle California Lawsuit Over Misuse of Customers&apos; Driving Data](https://soylentnews.org/article.pl?sid=26/05/14/032218&amp;from=rss)
* [2026-05-14, 14:54:00](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss) - [Both Fedora and Ubuntu Will Get AI Support – Soon](https://soylentnews.org/article.pl?sid=26/05/14/0258245&amp;from=rss)
* [2026-05-14, 10:08:04](https://news.ycombinator.com/item?id=48133293) - [High-Entropy Alloy](https://en.wikipedia.org/wiki/High-entropy_alloy)
* [2026-05-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss) - [Google Says Hackers Used AI to Develop a Major Security Flaw](https://soylentnews.org/article.pl?sid=26/05/14/0248229&amp;from=rss)
* [2026-05-14, 05:23:00](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss) - [“Cannot be Explained” – New Ultra Stainless Steel Stuns Researchers](https://soylentnews.org/article.pl?sid=26/05/13/215223&amp;from=rss)
* [2026-05-14, 00:35:00](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss) - [What&apos;s Up With UPSs?](https://soylentnews.org/article.pl?sid=26/05/13/2054254&amp;from=rss)
