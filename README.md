# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Gmail Users May Soon Be Able To Change Their Email Address and Keep the Old One](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A potential new feature for Gmail users, allowing them to alter their email addresses while retaining access to their previous ones, could streamline updates and improve usability in digital communications.

* [Phoenix: A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/) - A new X server entirely written in the Zig programming language, promising modernized foundations for graphical computing environments.

## Groundbreaking Research and Science

* [Alzheimer’s disease can be reversed in animal models? Study](https://case.edu/news/new-study-shows-alzheimers-disease-can-be-reversed-achieve-full-neurological-recovery-not-just-prevented-or-slowed-animal-models) - A breakthrough study reveals the potential to reverse Alzheimer’s disease in animal models, showcasing progress in the fight against this debilitating condition.

* [NASA Will Soon Find Out If the Perseverance Rover Can Really Persevere On Mars](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA prepares to test the resilience of the Perseverance Rover in tackling the harsh Martian environment during its extended mission operations.

## Corporate and Economic Dynamics

* [Nvidia Buying Groq's Assets For $20 Billion in Its Largest Deal on Record](https://slashdot.org/story/25/12/25/152201/nvidia-buying-groqs-assets-for-20-billion-in-its-largest-deal-on-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia announces a record-breaking acquisition of Groq's assets for $20 billion, strengthening its position in the technology industry.

## Cultural and Societal Insights

* [We invited a man into our home at Christmas and he stayed with us for 45 years](https://www.bbc.co.uk/news/articles/cdxwllqz1l0o) - A heartwarming account of a family that took in a stranger on Christmas, leading to a unique and enduring relationship spanning decades.

* [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - New research delves into the historical and cultural significance of hammocks, tracing their development back to Indigenous communities.

## Tech Industry Challenges and Controversies

* [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fake Microsoft Activation Server (MAS) domain was used as a channel for distributing malicious PowerShell scripts, raising cybersecurity concerns.

* [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - Researchers reveal a new UEFI vulnerability that could allow cybercriminals to execute pre-boot attacks on popular motherboard brands, posing significant security risks.

## Creative Explorations and Innovative Ideas

* [One formula that demystifies 3D graphics](https://www.youtube.com/watch?v=qjWkNZ0SXfo) - An insightful exploration into the mathematical principles that simplify the complexities of 3D graphics in computing.

* [doubly dual shuffles](https://dotat.at/@/2025-12-25-shuffle.html) - An intriguing take on the concept of doubly dual shuffles, showcasing mathematical elegance and creativity.

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

* [2025-12-26, 01:55:00](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail Users May Soon Be Able To Change Their Email Address and Keep the Old One](https://it.slashdot.org/story/25/12/26/0155213/gmail-users-may-soon-be-able-to-change-their-email-address-and-keep-the-old-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 01:38:47](https://lobste.rs/s/bnvrfq/ancient_greek_geometry) - [Ancient Greek geometry](https://sciencevsmagic.net/geo/)
* [2025-12-26, 01:05:00](https://lobste.rs/s/3uzl6a/microarchitecture_what_happens_beneath) - [Microarchitecture: What Happens Beneath](https://www.youtube.com/watch?v=BVVNtG5dgks)
* [2025-12-26, 01:02:53](https://news.ycombinator.com/item?id=46388213) - [MiniMax M2.1: Built for Real-World Complex Tasks, Multi-Language Programming](https://www.minimaxi.com/news/minimax-m21)
* [2025-12-26, 00:59:00](https://lobste.rs/s/abglcr/automating_what_backblaze_lifecycle) - [Automating What Backblaze Lifecycle Rules Don&apos;t Do Instantly](https://blog.tymscar.com/posts/backblazeb2cleanup/)
* [2025-12-26, 00:39:00](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Settles Brazilian Antitrust Case, Must Allow Third-Party App Stores and External Payment Links](https://apple.slashdot.org/story/25/12/26/0039248/apple-settles-brazilian-antitrust-case-must-allow-third-party-app-stores-and-external-payment-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 00:32:15](https://news.ycombinator.com/item?id=46388059) - [When a driver challenges the kernel&apos;s assumptions](http://miod.online.fr/software/openbsd/stories/udl.html)
* [2025-12-26, 00:29:18](https://lobste.rs/s/3rkikl/when_driver_challenges_kernel_s) - [When a driver challenges the kernel&apos;s assumptions](http://miod.online.fr/software/openbsd/stories/udl.html)
* [2025-12-26, 00:07:50](https://lobste.rs/s/4ngklh/doubly_dual_shuffles) - [doubly dual shuffles](https://dotat.at/@/2025-12-25-shuffle.html)
* [2025-12-25, 23:48:08](https://news.ycombinator.com/item?id=46387838) - [No shares in company, but 550 employees received a $240M gift from their owner](https://economictimes.indiatimes.com/magazines/panache/no-shares-in-company-but-550-employees-received-a-240-million-gift-from-their-owner-for-staying-with-him-through-tough-times/articleshow/126175955.cms?from=mdr)
* [2025-12-25, 23:13:21](https://news.ycombinator.com/item?id=46387657) - [Maybe the default settings are too high](https://www.raptitude.com/2025/12/maybe-the-default-settings-are-too-high/)
* [2025-12-25, 22:00:54](https://lobste.rs/s/4fmqgd/are_two_heads_better_than_one) - [Are Two Heads Better Than One?](https://eieio.games/blog/two-heads-arent-better-than-one/)
* [2025-12-25, 21:36:48](https://news.ycombinator.com/item?id=46387192) - [Google is &apos;gradually rolling out&apos; option to change your gmail.com address](https://9to5google.com/2025/12/24/google-change-gmail-addresses/)
* [2025-12-25, 21:31:25](https://news.ycombinator.com/item?id=46387164) - [Memory Safety](https://www.memorysafety.org/)
* [2025-12-25, 21:14:56](https://lobste.rs/s/t2xoco/released_kc3_v0_1_16) - [Released KC3 v0.1.16](https://www.kmx.io/blog/released-kc3-v0.1.16)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 21:00:00](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake MAS Windows Activation Domain Used To Spread PowerShell Malware](https://it.slashdot.org/story/25/12/25/2058205/fake-mas-windows-activation-domain-used-to-spread-powershell-malware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 19:01:00](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Has Stopped Rewarding &apos;Strategic&apos; Layoffs](https://slashdot.org/story/25/12/25/1727221/wall-street-has-stopped-rewarding-strategic-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 18:40:14](https://news.ycombinator.com/item?id=46386211) - [Fahrplan – 39C3](https://fahrplan.events.ccc.de/congress/2025/fahrplan/)
* [2025-12-25, 18:06:44](https://news.ycombinator.com/item?id=46386009) - [Critical vulnerability in LangChain – CVE-2025-68664](https://cyata.ai/blog/langgrinch-langchain-core-cve-2025-68664/)
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
* [2025-12-25, 08:58:01](https://lobste.rs/s/jsd85u/self_referencing_page_tables_for_x86) - [Self-referencing Page Tables for the x86-Architecture](https://0l.de/blog/2015/01/bachelor-thesis-abstract/)
* [2025-12-25, 08:42:43](https://lobste.rs/s/tfrm9n/gleam_v1_14_happy_holidays_release_2025) - [Gleam v1.14 - the happy holidays release 2025](https://gleam.run/news/the-happy-holidays-2025-release/)
* [2025-12-25, 08:41:40](https://lobste.rs/s/ylkoln/ssh_tiny_christmas) - [ssh tiny.christmas](https://eieio.games/blog/tiny-christmas/)
* [2025-12-25, 07:00:00](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Will Soon Find Out If the Perseverance Rover Can Really Persevere On Mars](https://science.slashdot.org/story/25/12/24/2116243/nasa-will-soon-find-out-if-the-perseverance-rover-can-really-persevere-on-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 06:27:46](https://lobste.rs/s/raajxi/announcing_rules_img_faster_path) - [Announcing rules_img: a faster path to container images in Bazel](https://tweag.io/blog/2025-12-18-rules_img/)
* [2025-12-25, 06:24:29](https://lobste.rs/s/ntunpn/mathematically_extra_complicated) - [Mathematically extra-complicated Secretest Santa 2025](https://youtube.com/watch?v=4pG8_bWpmaE)
* [2025-12-25, 06:06:14](https://lobste.rs/s/ru2xgh/fucking_approachable_swift_concurrency) - [Fucking Approachable Swift Concurrency](https://fuckingapproachableswiftconcurrency.com/en/)
* [2025-12-25, 04:50:00](https://lobste.rs/s/xwebbx/ruby_4_0_0_released) - [Ruby 4.0.0 Released](https://www.ruby-lang.org/en/news/2025/12/25/ruby-4-0-0-released/)
* [2025-12-25, 03:30:00](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Developer Proposes Using Navy Reactors For Data Centers](https://hardware.slashdot.org/story/25/12/24/1920243/nuclear-developer-proposes-using-navy-reactors-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 03:29:58](https://lobste.rs/s/8ayphg/phoenix_modern_x_server_written_from) - [phoenix - A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-25, 01:49:38](https://lobste.rs/s/bygvwv/package_managers_keep_using_git_as) - [Package managers keep using git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-25, 01:25:00](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Why I Quit Streaming And Got Back Into Cassettes&apos;](https://news.slashdot.org/story/25/12/24/219224/why-i-quit-streaming-and-got-back-into-cassettes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 01:16:06](https://lobste.rs/s/qy1wrx/newtype_index_pattern_zig) - [Newtype Index Pattern In Zig](https://matklad.github.io/2025/12/23/zig-newtype-index-pattern.html)
* [2025-12-25, 00:45:00](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Allow Alternative App Stores For iOS Users In Brazil](https://apple.slashdot.org/story/25/12/24/2055236/apple-to-allow-alternative-app-stores-for-ios-users-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-25, 00:10:12](https://news.ycombinator.com/item?id=46380758) - [Who Watches the Waymos? I do [video]](https://www.youtube.com/watch?v=oYU2hAbx_Fc)
* [2025-12-24, 22:56:00](https://news.ycombinator.com/item?id=46380168) - [Tell HN: Merry Christmas](https://news.ycombinator.com/item?id=46380168)
* [2025-12-24, 22:43:53](https://news.ycombinator.com/item?id=46380075) - [Phoenix: A modern X server written from scratch in Zig](https://git.dec05eba.com/phoenix/about/)
* [2025-12-24, 22:33:17](https://lobste.rs/s/rug4vo/2025_matrix_holiday_special) - [The 2025 Matrix Holiday Special](https://matrix.org/blog/2025/12/24/matrix-holiday-special/)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 20:56:53](https://news.ycombinator.com/item?id=46379145) - [Show HN: Lamp Carousel – DIY kinetic sculpture powered by lamp heat (2024)](https://evan.widloski.com/posts/spinners/)
* [2025-12-24, 20:29:41](https://lobste.rs/s/8gpquu/my_second_year_linux_desktop_for_gaming) - [(My) Second Year of the Linux Desktop (For Gaming)](https://blog.matthewbrunelle.com/my-second-year-of-the-linux-desktop-for-gaming/)
* [2025-12-24, 19:42:25](https://news.ycombinator.com/item?id=46378554) - [Show HN: Minimalist editor that lives in browser, stores everything in the URL](https://github.com/antonmedv/textarea)
* [2025-12-24, 17:56:58](https://lobste.rs/s/4sn9j4/how_why_i_moved_from_apple_services_my_own) - [How and why I moved from Apple Services to my own server](https://bastiangruber.ca/posts/mass-quitting-apple/)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 14:03:07](https://lobste.rs/s/zrgtnx/i_m_returning_my_framework_16) - [I&apos;m returning my Framework 16](https://yorickpeterse.com/articles/im-returning-my-framework-16/)
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
* [2025-12-22, 19:55:31](https://news.ycombinator.com/item?id=46358211) - [Paperbacks and TikTok](https://calnewport.com/on-paperbacks-and-tiktok/)
* [2025-12-22, 19:52:10](https://news.ycombinator.com/item?id=46358166) - [The Program 2025 annual review: How much money does an audio drama podcast make?](https://programaudioseries.com/the-program-results-7/)
* [2025-12-22, 18:52:50](https://news.ycombinator.com/item?id=46357362) - [Archiving Git branches as tags](https://etc.octavore.com/2025/12/archiving-git-branches-as-tags/)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 14:04:19](https://news.ycombinator.com/item?id=46354192) - [Dasharo TrustRoot Ephemeral Key Incident](https://blog.3mdeb.com/2025/2025-12-18-eom-key-issue/)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
