# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Released KC3 v0.1.16](https://www.kmx.io/blog/released-kc3-v0.1.16) - A new version of the KC3 application has been released, packed with improvements and updates.

* [The HTML Elements Time Forgot](https://htmhell.dev/adventcalendar/2025/22/) - A deep dive into lesser-known HTML elements that offer functionality most developers might not be aware of.

* [Gleam v1.14 - the happy holidays release 2025](https://gleam.run/news/the-happy-holidays-2025-release/) - Introducing the latest version of the Gleam programming language with holiday-inspired updates.

* [Announcing rules_img: a faster path to container images in Bazel](https://tweag.io/blog/2025-12-18-rules_img/) - Introducing `rules_img`, a new method for creating container images more efficiently in Bazel.

* [Ruby 4.0.0 Released](https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/) - The latest version of the Ruby programming language has been officially released with notable new features.

* [phoenix - A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/) - A modern take on designing an X server, built entirely with the Zig programming language.

## Cybersecurity Insights

* [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New threats emerge as attackers utilize a fake Windows activation domain to deploy malware via PowerShell.

* [LangGrinch hits LangChain Core](https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/) - A new vulnerability has affected LangChain Core, leaving data secrets exposed.

* [Microsoft Is Finally Killing RC4](https://www.schneier.com/blog/archives/2025/12/microsoft-is-finally-killing-rc4.html) - Microsoft is officially retiring the outdated RC4 encryption algorithm.

* [Quantum Error Correction Goes FOOM](https://algassert.com/post/2503) - Advancements in quantum error correction continue to move forward with significant progress.

* [Python 3.15’s interpreter for Windows x86-64 should hopefully be 15% faster](https://fidget-spinner.github.io/posts/no-longer-sorry.html) - The performance of Python 3.15's interpreter has seen a 15% improvement for Windows x86-64.

* [CSRF protection without tokens or hidden form fields](https://blog.miguelgrinberg.com/post/csrf-protection-without-tokens-or-hidden-form-fields) - A novel approach avoids hidden form fields and tokens for securing web forms.

## Notable Scientific and Technological Achievements

* [Alzheimer’s disease can be reversed in animal models? Study](https://case.edu/news/new-study-shows-alzheimers-disease-can-be-reversed-achieve-full-neurological-recovery-not-just-prevented-or-slowed-animal-models) - Research suggests Alzheimer's disease may be reversible in animal models, signifying potential breakthroughs in treatment.

* [NASA Will Soon Find Out If the Perseverance Rover Can Really Persevere On Mars](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA is set to determine the long-term durability of its Mars rover, Perseverance.

* [The Secret Life of Moles: What They’re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - A surprising glimpse at the hidden behaviors and ecological impact of moles.

* [Titan’s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - New research delves into the slushy oceans beneath Titan's icy crust.

## Cultural and Social Issues

* [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - A major step by the U.S. government to loosen restrictions on cannabis.

* [Chinese Social Media Users Criticize Authorities in Rare Sign of Dissent](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An unprecedented display of public dissent emerges on Chinese social media platforms.

* [Why I Quit Streaming And Got Back Into Cassettes](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A piece reflecting on a shift from digital to analog music formats for a more personal touch.

* [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - A historic decision by Denmark's postal service to cease letter deliveries after serving for centuries.

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

* [2025-12-25, 21:14:56](https://lobste.rs/s/t2xoco/released_kc3_v0_1_16) - [Released KC3 v0.1.16](https://www.kmx.io/blog/released-kc3-v0.1.16)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 21:00:00](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 20:27:45](https://news.ycombinator.com/item?id=46386835) - [URL Pattern API](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API)
* [2025-12-25, 19:01:00](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Has Stopped Rewarding &apos;Strategic&apos; Layoffs](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 18:06:44](https://news.ycombinator.com/item?id=46386009) - [All I Want for Christmas Is Your Secrets: LangGrinch hits LangChain Core](https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/)
* [2025-12-25, 18:00:00](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Social Media Users Criticize Authorities in Rare Sign of Dissent](https://tech.slashdot.org/story/25/12/25/1632226/chinese-social-media-users-criticize-authorities-in-rare-sign-of-dissent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 17:01:29](https://news.ycombinator.com/item?id=46385600) - [Clearspace (YC W23) Is Hiring a Founding Network Engineer (VPN and Proxy)](https://www.ycombinator.com/companies/clearspace/jobs/5LtM86I-founding-network-engineer-at-clearspace)
* [2025-12-25, 17:01:00](https://it.slashdot.org/story/25/12/25/1627223/framework-raises-memory-prices-again-suggests-customers-bring-their-own-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Raises Memory Prices Again, Suggests Customers Bring Their Own RAM](https://it.slashdot.org/story/25/12/25/1627223/framework-raises-memory-prices-again-suggests-customers-bring-their-own-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 16:24:45](https://news.ycombinator.com/item?id=46385308) - [I sell onions on the Internet (2019)](https://www.deepsouthventures.com/i-sell-onions-on-the-internet/)
* [2025-12-25, 16:01:00](https://tech.slashdot.org/story/25/12/25/1541258/waymo-pays-workers-22-to-close-doors-on-stranded-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Pays Workers $22 To Close Doors on Stranded Robotaxis](https://tech.slashdot.org/story/25/12/25/1541258/waymo-pays-workers-22-to-close-doors-on-stranded-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 15:22:36](https://news.ycombinator.com/item?id=46384919) - [Alzheimer’s disease can be reversed in animal models? Study](https://case.edu/news/new-study-shows-alzheimers-disease-can-be-reversed-achieve-full-neurological-recovery-not-just-prevented-or-slowed-animal-models)
* [2025-12-25, 15:14:42](https://lobste.rs/s/kplced/html_elements_time_forgot) - [The HTML Elements Time Forgot](https://htmhell.dev/adventcalendar/2025/22/)
* [2025-12-25, 15:01:00](https://slashdot.org/story/25/12/25/152201/nvidia-buying-groqs-assets-for-20-billion-in-its-largest-deal-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Buying Groq&apos;s Assets For $20 Billion in Its Largest Deal on Record](https://slashdot.org/story/25/12/25/152201/nvidia-buying-groqs-assets-for-20-billion-in-its-largest-deal-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 14:20:29](https://news.ycombinator.com/item?id=46384565) - [Asahi Linux with Sway on the MacBook Air M2 (2024)](https://daniel.lawrence.lu/blog/2024-12-01-asahi-linux-with-sway-on-the-macbook-air-m2/)
* [2025-12-25, 14:00:00](https://news.slashdot.org/story/25/12/25/0929209/trump-administration-to-overhaul-lottery-system-for-h-1b-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Overhaul Lottery System For H-1B Visas](https://news.slashdot.org/story/25/12/25/0929209/trump-administration-to-overhaul-lottery-system-for-h-1b-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 13:44:32](https://lobste.rs/s/8bvbgm/microsoft_is_finally_killing_rc4) - [Microsoft Is Finally Killing RC4](https://www.schneier.com/blog/archives/2025/12/microsoft-is-finally-killing-rc4.html)
* [2025-12-25, 13:09:09](https://lobste.rs/s/5mvar3/python_3_15_s_interpreter_for_windows_x86) - [Python 3.15’s interpreter for Windows x86-64 should hopefully be 15% faster](https://fidget-spinner.github.io/posts/no-longer-sorry.html)
* [2025-12-25, 13:02:46](https://news.ycombinator.com/item?id=46384167) - [Python 3.15’s interpreter for Windows x86-64 should hopefully be 15% faster](https://fidget-spinner.github.io/posts/no-longer-sorry.html)
* [2025-12-25, 13:00:00](https://slashdot.org/story/25/12/24/2125245/bitcoin-miners-pivot-to-ai-has-lifted-bitcoin-mining-etf-by-about-90-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Miners&apos; Pivot To AI Has Lifted Bitcoin-Mining ETF By About 90% This Year](https://slashdot.org/story/25/12/24/2125245/bitcoin-miners-pivot-to-ai-has-lifted-bitcoin-mining-etf-by-about-90-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 11:51:40](https://lobste.rs/s/m7rjvj/one_formula_demystifies_3d_graphics) - [One formula that demystifies 3D graphics](https://www.youtube.com/watch?v=qjWkNZ0SXfo)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 10:35:34](https://news.ycombinator.com/item?id=46383552) - [We invited a man into our home at Christmas and he stayed with us for 45 years](https://www.bbc.co.uk/news/articles/cdxwllqz1l0o)
* [2025-12-25, 10:00:00](https://slashdot.org/story/25/12/24/2133243/fake-video-claiming-coup-in-france-goes-viral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Video Claiming &apos;Coup In France&apos; Goes Viral](https://slashdot.org/story/25/12/24/2133243/fake-video-claiming-coup-in-france-goes-viral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 09:18:15](https://news.ycombinator.com/item?id=46383233) - [Quantum Error Correction Goes FOOM](https://algassert.com/post/2503)
* [2025-12-25, 08:58:23](https://news.ycombinator.com/item?id=46383139) - [Self-referencing Page Tables for the x86-Architecture](https://0l.de/blog/2015/01/bachelor-thesis-abstract/)
* [2025-12-25, 08:58:01](https://lobste.rs/s/jsd85u/self_referencing_page_tables_for_x86) - [Self-referencing Page Tables for the x86-Architecture](https://0l.de/blog/2015/01/bachelor-thesis-abstract/)
* [2025-12-25, 08:42:43](https://lobste.rs/s/tfrm9n/gleam_v1_14_happy_holidays_release_2025) - [Gleam v1.14 - the happy holidays release 2025](https://gleam.run/news/the-happy-holidays-2025-release/)
* [2025-12-25, 08:41:40](https://lobste.rs/s/ylkoln/ssh_tiny_christmas) - [ssh tiny.christmas](https://eieio.games/blog/tiny-christmas/)
* [2025-12-25, 07:00:00](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Will Soon Find Out If the Perseverance Rover Can Really Persevere On Mars](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 06:27:46](https://lobste.rs/s/raajxi/announcing_rules_img_faster_path) - [Announcing rules_img: a faster path to container images in Bazel](https://tweag.io/blog/2025-12-18-rules_img/)
* [2025-12-25, 06:24:29](https://lobste.rs/s/ntunpn/mathematically_extra_complicated) - [Mathematically extra-complicated Secretest Santa 2025](https://youtube.com/watch?v=4pG8_bWpmaE)
* [2025-12-25, 06:06:14](https://lobste.rs/s/ru2xgh/fucking_approachable_swift_concurrency) - [Fucking Approachable Swift Concurrency](https://fuckingapproachableswiftconcurrency.com/en/)
* [2025-12-25, 04:50:00](https://lobste.rs/s/xwebbx/ruby_4_0_0_released) - [Ruby 4.0.0 Released](https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/)
* [2025-12-25, 04:13:00](https://news.ycombinator.com/item?id=46382011) - [Ruby 4.0.0](https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/)
* [2025-12-25, 03:40:12](https://lobste.rs/s/z5ae9q/load_store_forwarding_toy_optimizer) - [Load and store forwarding in the Toy Optimizer](https://bernsteinbear.com/blog/toy-load-store/)
* [2025-12-25, 03:30:00](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Developer Proposes Using Navy Reactors For Data Centers](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 03:29:58](https://lobste.rs/s/8ayphg/phoenix_modern_x_server_written_from) - [phoenix - A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-25, 01:49:38](https://lobste.rs/s/bygvwv/package_managers_keep_using_git_as) - [Package managers keep using git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-25, 01:25:00](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why I Quit Streaming And Got Back Into Cassettes&apos;](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 01:16:06](https://lobste.rs/s/qy1wrx/newtype_index_pattern_zig) - [Newtype Index Pattern In Zig](https://matklad.github.io/2025/12/23/zig-newtype-index-pattern.html)
* [2025-12-25, 00:45:00](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Allow Alternative App Stores For iOS Users In Brazil](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 00:10:12](https://news.ycombinator.com/item?id=46380758) - [Who Watches the Waymos? I do [video]](https://www.youtube.com/watch?v=oYU2hAbx_Fc)
* [2025-12-25, 00:02:00](https://developers.slashdot.org/story/25/12/24/1957228/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s App Course Runs $20,000 a Student. Is It Really Worth It?](https://developers.slashdot.org/story/25/12/24/1957228/apples-app-course-runs-20000-a-student-is-it-really-worth-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 23:25:37](https://news.ycombinator.com/item?id=46380399) - [Asterisk AI Voice Agent](https://github.com/hkjarral/Asterisk-AI-Voice-Agent)
* [2025-12-24, 23:20:00](https://tech.slashdot.org/story/25/12/24/1952241/the-phone-based-retirement-is-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Phone-Based Retirement Is Here](https://tech.slashdot.org/story/25/12/24/1952241/the-phone-based-retirement-is-here?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-24, 22:56:00](https://news.ycombinator.com/item?id=46380168) - [Tell HN: Merry Christmas](https://news.ycombinator.com/item?id=46380168)
* [2025-12-24, 22:43:53](https://news.ycombinator.com/item?id=46380075) - [Phoenix: A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-24, 22:33:17](https://lobste.rs/s/rug4vo/2025_matrix_holiday_special) - [The 2025 Matrix Holiday Special](https://matrix.org/blog/2025/12/24/matrix-holiday-special/)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 21:20:13](https://lobste.rs/s/0zxfoh/how_jpeg_screenshots_defeated_our) - [How JPEG Screenshots Defeated Our Beautiful H.264 WebCodecs Pipeline](https://blog.helix.ml/p/we-mass-deployed-15-year-old-screen)
* [2025-12-24, 20:56:53](https://news.ycombinator.com/item?id=46379145) - [Show HN: Lamp Carousel – DIY kinetic sculpture powered by lamp heat (2024)](https://evan.widloski.com/posts/spinners/)
* [2025-12-24, 20:36:49](https://lobste.rs/s/nfakle/wayback_0_3_released) - [Wayback 0.3 Released](https://wayback.freedesktop.org/news/2025/12/22/wayback-0.3-released/)
* [2025-12-24, 20:29:41](https://lobste.rs/s/8gpquu/my_second_year_linux_desktop_for_gaming) - [(My) Second Year of the Linux Desktop (For Gaming)](https://blog.matthewbrunelle.com/my-second-year-of-the-linux-desktop-for-gaming/)
* [2025-12-24, 19:42:25](https://news.ycombinator.com/item?id=46378554) - [Show HN: Minimalist editor that lives in browser, stores everything in the URL](https://github.com/antonmedv/textarea)
* [2025-12-24, 19:05:16](https://lobste.rs/s/g1wsya/cjanet) - [cjanet](https://github.com/janet-lang/spork/blob/cjanet-jit/spork/cjanet.janet)
* [2025-12-24, 18:17:47](https://news.ycombinator.com/item?id=46377862) - [Fabrice Bellard: Biography (2009) [pdf]](https://www.ipaidia.gr/wp-content/uploads/2020/12/117-2020-fabrice-bellard.pdf)
* [2025-12-24, 18:03:34](https://lobste.rs/s/fexaye/zippop_space_conserving_unzipping) - [ZipPop: a space conserving unzipping script](https://github.com/th0ma5w/ZipPop)
* [2025-12-24, 17:56:58](https://lobste.rs/s/4sn9j4/how_why_i_moved_from_apple_services_my_own) - [How and why I moved from Apple Services to my own server](https://bastiangruber.ca/posts/mass-quitting-apple/)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 14:03:07](https://lobste.rs/s/zrgtnx/i_m_returning_my_framework_16) - [I&apos;m returning my Framework 16](https://yorickpeterse.com/articles/im-returning-my-framework-16/)
* [2025-12-24, 12:46:10](https://lobste.rs/s/mi8vrp/avoid_mini_frameworks) - [Avoid mini-frameworks](https://laike9m.com/blog/avoid-mini-frameworks,171/)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 17:33:42](https://news.ycombinator.com/item?id=46367224) - [Fabrice Bellard Releases MicroQuickJS](https://github.com/bellard/mquickjs/blob/main/README.md)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
* [2025-12-22, 22:02:00](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss) - [Communities Are Rising Up Against Data Centers — and Winning](https://soylentnews.org/article.pl?sid=25/12/21/099243&amp;from=rss)
* [2025-12-22, 18:52:50](https://news.ycombinator.com/item?id=46357362) - [Archiving Git branches as tags](https://etc.octavore.com/2025/12/archiving-git-branches-as-tags/)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 09:34:28](https://news.ycombinator.com/item?id=46352588) - [The Inner-Platform Effect (2006)](https://thedailywtf.com/articles/The_Inner-Platform_Effect)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 05:38:33](https://news.ycombinator.com/item?id=46351666) - [CSRF protection without tokens or hidden form fields](https://blog.miguelgrinberg.com/post/csrf-protection-without-tokens-or-hidden-form-fields)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
