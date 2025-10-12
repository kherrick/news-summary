# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Advances

* [In Copilot In Excel Demo, AI Told Teacher a 27% Exam Score Is of No Concern](https://slashdot.org/story/25/10/12/0328228/in-copilot-in-excel-demo-ai-told-teacher-a-27-exam-score-is-of-no-concern?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft only lets you opt out of AI photo scanning 3x a year](https://hardware.slashdot.org/story/25/10/11/0238213/microsofts-onedrive-begins-testing-face-recognizing-ai-for-photos-for-some-preview-users)

* [Anthropic's Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)

## Environmental Discoveries and Impacts

* [New Large Coral Reef Discovered Off Naples Containing Rare Ancient Corals](https://science.slashdot.org/story/25/10/11/2241202/new-large-coral-reef-discovered-off-naples-containing-rare-ancient-corals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Japan's summers have lengthened by 3 weeks over 42 years, say researchers](https://english.kyodonews.net/articles/-/62626)

## Technological Innovations

* [Show HN: rift – a tiling window manager for macOS](https://github.com/acsandmann/rift)

* [Paper2Video: Automatic Video Generation from Scientific Papers](https://arxiv.org/abs/2510.05096)

* [Microsoft To Provide Free AI Tools For Washington State Schools](https://news.slashdot.org/story/25/10/11/0012220/microsoft-to-provide-free-ai-tools-for-washington-state-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Privacy and Security

* [New California Privacy Law Will Require Chrome/Edge/Safari to Offer Easy Opt-Outs for Data Sharing](https://yro.slashdot.org/story/25/10/11/0513252/new-california-privacy-law-will-require-chromeedgesafari-to-offer-easy-opt-outs-for-data-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Covert Eavesdropping Through Computer Mice - the 'Mic-E-Mouse'](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)

## Rare Earth and Resources

* [China's New Rare Earth and Magnet Restrictions Threaten US Defense Supply Chains](https://www.csis.org/analysis/chinas-new-rare-earth-and-magnet-restrictions-threaten-us-defense-supply-chains)

## Software and Computing

* [LineageOS 23 released](https://lineageos.org/Changelog-30/)

* [WSL-For-FreeBSD: Experimental project to FreeBSD in WSL2](https://github.com/BalajeS/WSL-For-FreeBSD)

## Economic Insights

* [Bitcoin and Other Cryptocurrencies Had Double-Digit Drops Friday, Largest Liquidation Event Ever](https://slashdot.org/story/25/10/11/1936222/bitcoin-and-other-cryptocurrencies-had-double-digit-drops-friday-largest-liquidation-event-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)

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

* [2025-10-12, 03:37:00](https://slashdot.org/story/25/10/12/0328228/in-copilot-in-excel-demo-ai-told-teacher-a-27-exam-score-is-of-no-concern?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Copilot In Excel Demo, AI Told Teacher a 27% Exam Score Is of No Concern](https://slashdot.org/story/25/10/12/0328228/in-copilot-in-excel-demo-ai-told-teacher-a-27-exam-score-is-of-no-concern?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 02:37:00](https://science.slashdot.org/story/25/10/11/2241202/new-large-coral-reef-discovered-off-naples-containing-rare-ancient-corals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Large Coral Reef Discovered Off Naples Containing Rare Ancient Corals](https://science.slashdot.org/story/25/10/11/2241202/new-large-coral-reef-discovered-off-naples-containing-rare-ancient-corals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-12, 01:37:37](https://news.ycombinator.com/item?id=45554369) - [China&apos;s New Rare Earth and Magnet Restrictions Threaten US Defense Supply Chains](https://www.csis.org/analysis/chinas-new-rare-earth-and-magnet-restrictions-threaten-us-defense-supply-chains)
* [2025-10-12, 00:51:00](https://tech.slashdot.org/story/25/10/12/0048226/tron-ares-mode-turns-teslas-into-glowing-light-cycles-despite-bad-box-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tron: Ares&apos; Mode Turns Teslas Into Glowing Light Cycles &amp;mdash; Despite Bad Box Office](https://tech.slashdot.org/story/25/10/12/0048226/tron-ares-mode-turns-teslas-into-glowing-light-cycles-despite-bad-box-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 00:22:15](https://news.ycombinator.com/item?id=45553995) - [Show HN: rift – a tiling window manager for macOS](https://github.com/acsandmann/rift)
* [2025-10-11, 23:54:00](https://lobste.rs/s/iktkkz/lineageos_23_released) - [LineageOS 23 released](https://lineageos.org/Changelog-30/)
* [2025-10-11, 23:53:17](https://news.ycombinator.com/item?id=45553835) - [LineageOS 23](https://lineageos.org/Changelog-30/)
* [2025-10-11, 23:43:42](https://news.ycombinator.com/item?id=45553783) - [Vancouver Stock Exchange: Scam capital of the world (1989) [pdf]](https://scamcouver.wordpress.com/wp-content/uploads/2012/04/scam-capital.pdf)
* [2025-10-11, 23:41:00](https://news.ycombinator.com/item?id=45553764) - [Google blocks Android hack that let Pixel users enable VoLTE anywhere](https://www.androidauthority.com/pixel-ims-broken-october-update-3606444/)
* [2025-10-11, 23:32:25](https://news.ycombinator.com/item?id=45553701) - [Paper2Video: Automatic Video Generation from Scientific Papers](https://arxiv.org/abs/2510.05096)
* [2025-10-11, 23:16:05](https://news.ycombinator.com/item?id=45553577) - [Meta Superintelligence&apos;s surprising first paper](https://paddedinputs.substack.com/p/meta-superintelligences-surprising)
* [2025-10-11, 22:59:00](https://linux.slashdot.org/story/25/10/11/2254200/german-state-of-schlesiwg-holstein-migrates-to-foss-groupware-next-up-linux-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German State of Schlesiwg-Holstein Migrates To FOSS Groupware. Next Up: Linux OS](https://linux.slashdot.org/story/25/10/11/2254200/german-state-of-schlesiwg-holstein-migrates-to-foss-groupware-next-up-linux-os?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 22:45:23](https://lobste.rs/s/juxp61/testing_two_18_tb_white_label_sata_hard) - [Testing two 18 TB white label SATA hard drives from datablocks.dev](https://ounapuu.ee/posts/2025/10/06/datablocks-white-label-drives/)
* [2025-10-11, 22:43:58](https://news.ycombinator.com/item?id=45553296) - [Heroin Addicts Often Seem Normal](https://justismills.substack.com/p/heroin-addicts-often-seem-normal)
* [2025-10-11, 22:16:18](https://news.ycombinator.com/item?id=45553132) - [Ask HN: Abandoned/dead projects you think died before their time and why?](https://news.ycombinator.com/item?id=45553132)
* [2025-10-11, 22:05:46](https://lobste.rs/s/qh6frl/tinymist_is_integrated_language_service) - [Tinymist is an integrated language service for Typst](https://myriad-dreamin.github.io/tinymist/)
* [2025-10-11, 21:35:33](https://news.ycombinator.com/item?id=45552913) - [The story of X-Copy on the Amiga](https://spillhistorie.no/2025/10/10/the-story-of-x-copy-on-the-amiga/)
* [2025-10-11, 21:10:55](https://lobste.rs/s/qar3sx/burrows_wheeler_transform_bwt) - [Burrows-Wheeler Transform (BWT)](https://sandbox.bio/concepts/bwt)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 20:51:03](https://news.ycombinator.com/item?id=45552578) - [Japan&apos;s summers have lengthened by 3 weeks over 42 years, say resaerchers](https://english.kyodonews.net/articles/-/62626)
* [2025-10-11, 20:38:00](https://yro.slashdot.org/story/25/10/11/0513252/new-california-privacy-law-will-require-chromeedgesafari-to-offer-easy-opt-outs-for-data-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New California Privacy Law Will Require Chrome/Edge/Safari to Offer Easy Opt-Outs for Data Sharing](https://yro.slashdot.org/story/25/10/11/0513252/new-california-privacy-law-will-require-chromeedgesafari-to-offer-easy-opt-outs-for-data-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 19:41:27](https://news.ycombinator.com/item?id=45552049) - [A Guide for WireGuard VPN Setup with Pi-Hole Adblock and Unbound DNS](https://psyonik.tech/posts/a-guide-for-wireguard-vpn-setup-with-pi-hole-adblock-and-unbound-dns/)
* [2025-10-11, 19:38:00](https://slashdot.org/story/25/10/11/1936222/bitcoin-and-other-cryptocurrencies-had-double-digit-drops-friday-largest-liquidation-event-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin and Other Cryptocurrencies Had Double-Digit Drops Friday, Largest Liquidation Event Ever](https://slashdot.org/story/25/10/11/1936222/bitcoin-and-other-cryptocurrencies-had-double-digit-drops-friday-largest-liquidation-event-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 19:33:27](https://news.ycombinator.com/item?id=45551995) - [Is Odin just a more boring C?](https://dayvster.com/blog/is-odin-just-a-more-boring-c/)
* [2025-10-11, 18:36:51](https://news.ycombinator.com/item?id=45551504) - [Microsoft only lets you opt out of AI photo scanning 3x a year](https://hardware.slashdot.org/story/25/10/11/0238213/microsofts-onedrive-begins-testing-face-recognizing-ai-for-photos-for-some-preview-users)
* [2025-10-11, 18:34:00](https://slashdot.org/story/25/10/11/1819237/circular-ai-mega-deals-by-ai-and-hardware-giants-are-raising-eyebrows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Circular&apos; AI Mega-Deals by AI and Hardware Giants are Raising Eyebrows](https://slashdot.org/story/25/10/11/1819237/circular-ai-mega-deals-by-ai-and-hardware-giants-are-raising-eyebrows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 18:29:27](https://news.ycombinator.com/item?id=45551450) - [Rating 26 years of Java changes](https://neilmadden.blog/2025/09/12/rating-26-years-of-java-changes/)
* [2025-10-11, 18:06:40](https://news.ycombinator.com/item?id=45551260) - [Anthropic&apos;s Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)
* [2025-10-11, 17:41:45](https://news.ycombinator.com/item?id=45551081) - [People regret buying Amazon smart displays after being bombarded with ads](https://arstechnica.com/gadgets/2025/10/people-regret-buying-amazon-smart-displays-after-being-bombarded-with-ads/)
* [2025-10-11, 17:34:00](https://news.slashdot.org/story/25/10/11/070237/i-tracked-amazons-prime-day-prices-weve-been-played?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Tracked Amazon&apos;s Prime Day Prices. We&apos;ve Been Played&apos;](https://news.slashdot.org/story/25/10/11/070237/i-tracked-amazons-prime-day-prices-weve-been-played?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 17:23:46](https://lobste.rs/s/nhbkr0/less_is_more_recursive_reasoning_with) - [Less is More: Recursive Reasoning with Tiny Networks](https://alexiajm.github.io/2025/09/29/tiny_recursive_models.html)
* [2025-10-11, 16:34:00](https://slashdot.org/story/25/10/11/0414243/is-openai-planning-to-turn-chatgpt-into-an-ad-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Planning to Turn ChatGPT Into an Ad Platform?](https://slashdot.org/story/25/10/11/0414243/is-openai-planning-to-turn-chatgpt-into-an-ad-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 16:16:43](https://lobste.rs/s/favaj0/wsl_for_freebsd_experimental_project) - [WSL-For-FreeBSD: Experimental project to FreeBSD in WSL2](https://github.com/BalajeS/WSL-For-FreeBSD)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 15:47:22](https://news.ycombinator.com/item?id=45550049) - [GNU Health](https://www.gnuhealth.org/about-us.html)
* [2025-10-11, 15:34:00](https://hardware.slashdot.org/story/25/10/11/0238213/microsofts-onedrive-begins-testing-face-recognizing-ai-for-photos-for-some-preview-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s OneDrive Begins Testing Face-Recognizing AI for Photos (for Some Preview Users)](https://hardware.slashdot.org/story/25/10/11/0238213/microsofts-onedrive-begins-testing-face-recognizing-ai-for-photos-for-some-preview-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 15:09:47](https://lobste.rs/s/kmx1md/monument_engine_jx) - [Monument Engine: Jx](https://www.monument.ai/m/parallel)
* [2025-10-11, 15:02:50](https://lobste.rs/s/pkqgq6/vibing_non_trivial_ghostty_feature) - [Vibing a Non-Trivial Ghostty Feature](https://mitchellh.com/writing/non-trivial-vibing)
* [2025-10-11, 14:34:00](https://yro.slashdot.org/story/25/10/11/0621234/chatgpt-iphone-history-found-for-uber-driver-charged-with-starting-californias-palisades-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT, iPhone History Found for Uber Driver Charged With Starting California&apos;s Palisades Fire ](https://yro.slashdot.org/story/25/10/11/0621234/chatgpt-iphone-history-found-for-uber-driver-charged-with-starting-californias-palisades-fire?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 14:31:15](https://news.ycombinator.com/item?id=45549434) - [Vibing a non-trivial Ghostty feature](https://mitchellh.com/writing/non-trivial-vibing)
* [2025-10-11, 14:01:35](https://lobste.rs/s/tvxihj/european_accessibility_act_will_make_web) - [The European Accessibility Act will make the Web Better for Everyone](https://denodell.com/blog/a-better-web-for-everyone-everywhere)
* [2025-10-11, 13:00:00](https://mobile.slashdot.org/story/25/10/11/0036214/more-screen-time-linked-to-lower-test-scores-for-elementary-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Screen Time Linked To Lower Test Scores For Elementary Students](https://mobile.slashdot.org/story/25/10/11/0036214/more-screen-time-linked-to-lower-test-scores-for-elementary-students?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 12:03:46](https://lobste.rs/s/lcfs1n/dijkstra_on_foolishness_natural) - [Dijkstra on the foolishness of natural language programming (1978)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html)
* [2025-10-11, 11:44:57](https://lobste.rs/s/vulmn4/liquid_glass_is_cracked_usability) - [Liquid Glass Is Cracked, and Usability Suffers in iOS 26](https://www.nngroup.com/articles/liquid-glass/)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 10:51:44](https://lobste.rs/s/jlbbjo/on_health_effects_electromagnetic) - [On the Health Effects of Electromagnetic Radiation](https://huijzer.xyz/posts/98/printing-a-book-at-home-with-minimal-equipment)
* [2025-10-11, 10:00:51](https://lobste.rs/s/9xnt9k/eon_effects_based_ocaml_nameserver) - [Eon -  an Effects-based OCaml Nameserver](https://ryan.freumh.org/eon.html)
* [2025-10-11, 10:00:00](https://news.slashdot.org/story/25/10/11/0012220/microsoft-to-provide-free-ai-tools-for-washington-state-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Provide Free AI Tools For Washington State Schools](https://news.slashdot.org/story/25/10/11/0012220/microsoft-to-provide-free-ai-tools-for-washington-state-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 08:27:26](https://news.ycombinator.com/item?id=45547566) - [The &lt;output&gt; Tag](https://denodell.com/blog/html-best-kept-secret-output-tag)
* [2025-10-11, 08:25:20](https://lobste.rs/s/eakigd/html_s_best_kept_secret_output_tag) - [HTML’s Best Kept Secret: The output Tag](https://denodell.com/blog/html-best-kept-secret-output-tag)
* [2025-10-11, 08:05:45](https://lobste.rs/s/uljytl/debdroid_debian_on_android_v1_1) - [DebDroid - Debian on Android (v1.1)](https://github.com/NICUP14/DebDroid)
* [2025-10-11, 07:32:08](https://news.ycombinator.com/item?id=45547359) - [Windows Subsystem for FreeBSD](https://github.com/BalajeS/WSL-For-FreeBSD)
* [2025-10-11, 07:29:23](https://news.ycombinator.com/item?id=45547344) - [Superpowers: How I&apos;m using coding agents in October 2025](https://blog.fsck.com/2025/10/09/superpowers/)
* [2025-10-11, 07:22:09](https://lobste.rs/s/nbfgjk/lavandula_fast_lightweight_web) - [lavandula: A fast, lightweight web framework in C for building modern web applications](https://github.com/ashtonjamesd/lavandula)
* [2025-10-11, 07:00:00](https://games.slashdot.org/story/25/10/11/0050217/sony-teases-new-gpu-tech-for-the-ps6?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Teases New GPU Tech For the PS6](https://games.slashdot.org/story/25/10/11/0050217/sony-teases-new-gpu-tech-for-the-ps6?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 06:59:16](https://lobste.rs/s/fuzdrf/ocaml_5_4_release_new_features_fixes_more) - [OCaml 5.4 Release: New Features, Fixes, and More](https://tarides.com/blog/2025-10-10-ocaml-5-4-release-new-features-fixes-and-more/)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 04:48:04](https://lobste.rs/s/nlx08o/why_it_took_4_years_get_lock_files) - [Why it took 4 years to get a lock files specification](https://snarky.ca/why-it-took-4-years-to-get-a-lock-files-specification/)
* [2025-10-11, 04:27:52](https://lobste.rs/s/jrb9as/bun_1_3) - [Bun 1.3](https://bun.com/blog/bun-v1.3)
* [2025-10-11, 03:30:00](https://entertainment.slashdot.org/story/25/10/11/005219/bose-soundtouch-home-theater-systems-regress-into-dumb-speakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bose SoundTouch Home Theater Systems Regress Into Dumb Speakers](https://entertainment.slashdot.org/story/25/10/11/005219/bose-soundtouch-home-theater-systems-regress-into-dumb-speakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
* [2025-10-10, 23:13:38](https://lobste.rs/s/597wpm/beyond_ai_hype_guido_van_rossum_on_python_s) - [Beyond the AI Hype: Guido van Rossum on Python’s Philosophy, Simplicity, and the Future of Programming](https://www.odbms.org/blog/2025/10/beyond-the-ai-hype-guido-van-rossum-on-pythons-philosophy-simplicity-and-the-future-of-programming/)
* [2025-10-10, 21:14:00](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) - [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss)
* [2025-10-10, 16:31:00](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) - [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss)
* [2025-10-10, 15:20:04](https://lobste.rs/s/rahklm/notes_on_switching_helix_from_vim) - [Notes on switching to Helix from vim](https://jvns.ca/blog/2025/10/10/notes-on-switching-to-helix-from-vim/)
* [2025-10-10, 13:23:09](https://lobste.rs/s/wtmahb/year_gentoo) - [A Year of Gentoo](https://arch.dog/bark/year-of-gentoo)
* [2025-10-10, 12:45:22](https://lobste.rs/s/cireck/how_check_for_overlapping_intervals) - [How to check for overlapping intervals](https://zayenz.se/blog/post/how-to-check-for-overlapping-intervals/)
* [2025-10-10, 12:23:57](https://lobste.rs/s/bo0chl/new_breed_analyzers) - [A new breed of analyzers](https://daniel.haxx.se/blog/2025/10/10/a-new-breed-of-analyzers/)
* [2025-10-10, 11:47:00](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss) - [The Transistor Was Patented 75 Years Ago Today](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss)
* [2025-10-10, 11:11:00](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss) - [Nobel Prizes 2025 - Venezuelan Opposition Leader María Corina Machado Awarded Peace Prize](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss)
* [2025-10-10, 09:44:44](https://lobste.rs/s/whbfzn/programming_sun_year_with_daylight) - [Programming in the Sun: A Year with the Daylight Computer](https://wickstrom.tech/2025-10-10-programming-in-the-sun-a-year-with-the-daylight-computer.html)
* [2025-10-10, 07:03:00](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss) - [Windows 7 Usage Jumps as Users Refuse to Upgrade to Windows 11 in Wake of Windows 10 End of Support](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss)
* [2025-10-10, 02:21:00](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) - [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss)
* [2025-10-09, 21:43:00](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss) - [Here&apos;s the Real Reason Endurance Sank](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss)
* [2025-10-09, 16:55:00](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss) - [Forensic Test Recovers Fingerprints From Fired Ammunition Casings Despite Intense Heat](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
* [2025-10-08, 21:58:00](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss) - [Google Clarifies That Owners Will Still Be Able To Sideload Unverified Apps](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss)
* [2025-10-08, 17:14:00](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss) - [Ultra-Thin Sodium Films Offer Low-Cost Alternative to Gold and Silver in Optical Technologies](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss)
* [2025-10-08, 16:50:12](https://news.ycombinator.com/item?id=45518159) - [Show HN: Solving the cluster 1 problem with vCluster standalone](https://www.vcluster.com/blog/vcluster-standalone-multi-tenancy-kubernetes)
* [2025-10-08, 12:31:00](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss) - [Apple Removes ICE Tracking Apps After Pressure by Trump Administration](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss)
* [2025-10-08, 07:44:00](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss) - [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss)
* [2025-10-08, 03:03:00](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss) - [Instagram Says It is Not Listening to Users’ Microphones to Serve Ads](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss)
