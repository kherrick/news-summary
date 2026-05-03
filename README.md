# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Linux Kernel Tree About to Hit 40 Million Lines, AMD Driver Above 6 Million Lines](https://soylentnews.org/article.pl?sid=26/05/01/079248&from=rss) - Amid rapid technological advancements, the Linux Kernel is soon set to reach a massive milestone of 40 million lines of code, with the AMD driver alone surpassing 6 million lines.

* [Why TUIs Are Back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/) - Terminal User Interfaces are making a resurgence in the tech world, and this article digs into the key reasons behind this trend.

* [This Wasm interpreter fits in a QR code](https://purplesyringa.moe/blog/this-wasm-interpreter-fits-in-a-qr-code/) - Explore the innovative creation of a WebAssembly interpreter compact enough to fit inside a QR code.

* [I recreated the Apple Lisa computer inside an FPGA [video]](https://www.youtube.com/watch?v=8jNQDcpHc68) - A detailed journey of recreating the Apple Lisa computer within an FPGA framework.

## Artificial Intelligence

* [How Kepler built verifiable AI for financial services with Claude](https://claude.com/blog/how-kepler-built-verifiable-ai-for-financial-services-with-claude) - Discover how Kepler used the capabilities of AI to create a reliable financial service system.

* [ChatGPT Became So Obsessed With Goblins That OpenAI Had to Intervene](https://slashdot.org/story/26/05/03/0627248/chatgpt-became-so-obsessed-with-goblins-that-openai-had-to-intervene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explore the peculiar story of how OpenAI addressed ChatGPT's peculiar fixation with goblins.

* [Claude, Microsoft Copilot Fail Again to Predict the Winners of the Kentucky Derby](https://slashdot.org/story/26/05/03/0531224/claude-microsoft-copilot-fail-again-to-predict-the-winners-of-the-kentucky-derby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An amusing dive into the repeated inability of AI systems to predict the Kentucky Derby results.

* [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating account of a layperson solving a long-unsolved math problem with the help of artificial intelligence.

## Corporate and Policy Insights

* [Former Nintendo Executive Says Amazon Once Requested 'Illegal' Price Discounts](https://games.slashdot.org/story/26/05/03/1826206/former-nintendo-executive-says-amazon-once-requested-illegal-price-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A former Nintendo executive has stated that Amazon had allegedly requested improper and unlawful price discounts.

* [South Africa's Draft AI Policy Withdrawn Due to 'Fictitious' AI-Generated Citations](https://yro.slashdot.org/story/26/05/03/0019210/south-africas-draft-ai-policy-withdrawn-due-to-fictitious-ai-generated-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The withdrawal of South Africa's draft AI policy shines a light on concerns over the misuse of AI-generated content in policy frameworks.

* [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - Microsoft appears to be replacing experienced talent domestically with hires to foster its AI initiatives.

## Programming and Development

* [NetHack 5.0.0](https://nethack.org/v500/release.html) - The latest version of the classic open-source roguelike, NetHack, has been released, offering new features and updates.

* [GIT - the stupid content tracker](https://raw.githubusercontent.com/git/git/e83c5163316f89bfbde7d9ab23ca2e25604af290/README) - A look back at GIT's origins and how it became known as the 'stupid content tracker.'

* [Your Container Is Not a Sandbox](https://emirb.github.io/blog/microvm-2026/) - Dive into an exploration of the myths and realities of container security.

## Leaked and Compromised Data

* [Metal Gear Solid 2's source code has been leaked on 4chan](https://www.thegamer.com/mgs2-hd-edition-source-code-massive-leak/) - A major leak reveals the source code for Metal Gear Solid 2 HD Edition on 4chan.

* [pgBackRest is dead. Now what?](https://mydbanotebook.org/posts/pgbackrest-is-dead.-now-what/) - The announcement that pgBackRest is no longer supported raises questions for database administrators relying on the tool.

## Future of Technology and Society

* [Underwater robot tracks sperm whale conversations in real time](https://www.reuters.com/business/environment/underwater-robot-tracks-sperm-whale-conversations-real-time-2026-05-01/) - A fascinating innovation allows an underwater robot to track sperm whale vocalizations in real time.

* [Chinese Exports of Green Technologies Surged to Record Levels After Iran War Began](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Following the onset of the Iran conflict, China's green technology exports saw a dramatic increase.

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

* [2026-05-03, 19:19:00](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss) - [The Linux Kernel Tree About to Hit 40 Million Lines, AMD Driver Above 6 Million Lines](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss)
* [2026-05-03, 18:42:28](https://news.ycombinator.com/item?id=48000028) - [Why TUIs Are Back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)
* [2026-05-03, 18:28:06](https://news.ycombinator.com/item?id=47999880) - [The Death of Scrum – Built for a slower world, performed by those who left](https://death-of-scrum.net/)
* [2026-05-03, 18:28:00](https://games.slashdot.org/story/26/05/03/1826206/former-nintendo-executive-says-amazon-once-requested-illegal-price-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Nintendo Executive Says Amazon Once Requested &apos;Illegal&apos; Price Discounts](https://games.slashdot.org/story/26/05/03/1826206/former-nintendo-executive-says-amazon-once-requested-illegal-price-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 18:14:56](https://news.ycombinator.com/item?id=47999754) - [How Kepler built verifiable AI for financial services with Claude](https://claude.com/blog/how-kepler-built-verifiable-ai-for-financial-services-with-claude)
* [2026-05-03, 18:03:14](https://news.ycombinator.com/item?id=47999636) - [BYOMesh – New LoRa mesh radio offers 100x the bandwidth](https://partyon.xyz/@nullagent/116499715071759135)
* [2026-05-03, 18:00:05](https://lobste.rs/s/bmhm7k/this_wasm_interpreter_fits_qr_code) - [This Wasm interpreter fits in a QR code](https://purplesyringa.moe/blog/this-wasm-interpreter-fits-in-a-qr-code/)
* [2026-05-03, 17:45:47](https://news.ycombinator.com/item?id=47999460) - [I recreated the Apple Lisa computer inside an FPGA [video]](https://www.youtube.com/watch?v=8jNQDcpHc68)
* [2026-05-03, 17:34:49](https://lobste.rs/s/xvtq0l/fake_notepad_for_mac) - [Fake Notepad++ for Mac](https://notepad-plus-plus.org/news/npp-trademark-infringement/)
* [2026-05-03, 17:05:58](https://news.ycombinator.com/item?id=47999006) - [How far behind is each major Chromium browser?](https://chromium-drift.pages.dev/)
* [2026-05-03, 17:02:13](https://news.ycombinator.com/item?id=47998946) - [Southwest Headquarters Tour](https://katherinemichel.github.io/blog/travel/southwest-headquarters-tour-2026.html)
* [2026-05-03, 16:48:53](https://lobste.rs/s/mkwtsj/for_thirty_years_i_programmed_with_phish) - [For thirty years I programmed with Phish on, every day. In 2026, the music is out of phase with the work](https://christophermeiklejohn.com/ai/personal/phish/flow/agents/2026/05/03/rift.html)
* [2026-05-03, 16:48:11](https://news.ycombinator.com/item?id=47998790) - [Metal Gear Solid 2&apos;s source code has been leaked on 4chan](https://www.thegamer.com/mgs2-hd-edition-source-code-massive-leak/)
* [2026-05-03, 16:35:20](https://news.ycombinator.com/item?id=47998664) - [Underwater robot tracks sperm whale conversations in real time](https://www.reuters.com/business/environment/underwater-robot-tracks-sperm-whale-conversations-real-time-2026-05-01/)
* [2026-05-03, 16:34:00](https://slashdot.org/story/26/05/03/0627248/chatgpt-became-so-obsessed-with-goblins-that-openai-had-to-intervene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Became So Obsessed With Goblins That OpenAI Had to Intervene](https://slashdot.org/story/26/05/03/0627248/chatgpt-became-so-obsessed-with-goblins-that-openai-had-to-intervene?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 16:15:49](https://news.ycombinator.com/item?id=47998449) - [Bad Connection: Global telecom exploitation by covert surveillance actors](https://citizenlab.ca/research/uncovering-global-telecom-exploitation-by-covert-surveillance-actors/)
* [2026-05-03, 15:55:59](https://news.ycombinator.com/item?id=47998225) - [For thirty years I programmed with Phish on, every day](https://christophermeiklejohn.com/ai/personal/phish/flow/agents/2026/05/03/rift.html)
* [2026-05-03, 15:48:56](https://lobste.rs/s/bznmaf/your_container_is_not_sandbox) - [Your Container Is Not a Sandbox](https://emirb.github.io/blog/microvm-2026/)
* [2026-05-03, 15:34:00](https://yro.slashdot.org/story/26/05/03/0019210/south-africas-draft-ai-policy-withdrawn-due-to-fictitious-ai-generated-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Africa&apos;s Draft AI Policy Withdrawn Due to &apos;Fictitious&apos; AI-Generated Citations](https://yro.slashdot.org/story/26/05/03/0019210/south-africas-draft-ai-policy-withdrawn-due-to-fictitious-ai-generated-citations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 15:32:05](https://news.ycombinator.com/item?id=47997947) - [A desktop made for one](https://isene.org/2026/05/Audience-of-One.html)
* [2026-05-03, 15:21:24](https://lobste.rs/s/a2mdys/c8s_confidential_kubernetes) - [C8s: A Confidential Kubernetes Architecture](https://arxiv.org/abs/2604.26974)
* [2026-05-03, 14:49:56](https://news.ycombinator.com/item?id=47997486) - [Security through obscurity is not bad](https://mobeigi.com/blog/security/security-through-obscurity-is-not-bad/)
* [2026-05-03, 14:49:25](https://lobste.rs/s/klw6bu/desktop_made_for_one) - [A desktop made for one](https://isene.org/2026/05/Audience-of-One.html)
* [2026-05-03, 14:43:27](https://news.ycombinator.com/item?id=47997418) - [Mercedes-Benz commits to bringing back physical buttons](https://www.drive.com.au/news/mercedes-benz-commits-to-bringing-back-phycial-buttons/)
* [2026-05-03, 14:35:00](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss) - [There&apos;s a Good Reason Semi Trucks Don&apos;t Use V8s](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss)
* [2026-05-03, 14:34:00](https://it.slashdot.org/story/26/05/02/234244/ransomware-is-getting-uglier-as-cybercriminals-fake-leaks-and-skip-encryption-entirely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ransomware Is Getting Uglier As Cybercriminals Fake Leaks and Skip Encryption Entirely](https://it.slashdot.org/story/26/05/02/234244/ransomware-is-getting-uglier-as-cybercriminals-fake-leaks-and-skip-encryption-entirely?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 14:13:23](https://news.ycombinator.com/item?id=47997138) - [Porsche will contest Laguna Seca in historic colors of the Apple Computer livery](https://newsroom.porsche.com/en_US/2026/motorsport/porsche-will-contest-laguna-seca-in-historic-colors-of-the-apple-computer-livery.html)
* [2026-05-03, 14:02:33](https://news.ycombinator.com/item?id=47997059) - [Modern jet engine turbines: each blade a single crystal (2015)](https://www.americanscientist.org/article/each-blade-a-single-crystal)
* [2026-05-03, 14:02:23](https://news.ycombinator.com/item?id=47997056) - [Alert-driven monitoring](https://simpleobservability.com/docs/alert-driven-monitoring)
* [2026-05-03, 13:59:30](https://lobste.rs/s/pwwn0j/git_async_web_demo_git_browser_browser) - [git-async web demo - A git browser in the browser](https://git-async.donk.systems/)
* [2026-05-03, 13:50:54](https://lobste.rs/s/cfgtdp/minimal_viable_zig_error_contexts) - [Minimal Viable Zig Error Contexts](https://matklad.github.io/2026/05/03/zig-error-context.html)
* [2026-05-03, 12:43:53](https://lobste.rs/s/ffu7l8/my_favorite_device_is_chromebook_without) - [My favorite device is a Chromebook, without ChromeOS](https://kokada.dev/blog/my-favorite-device-is-a-chromebook-without-chromeos/)
* [2026-05-03, 12:03:54](https://lobste.rs/s/ifbdw1/text_mode_lie_why_modern_tuis_are) - [The text mode lie: why modern TUIs are a nightmare for accessibility](https://xogium.me/the-text-mode-lie-why-modern-tuis-are-a-nightmare-for-accessibility)
* [2026-05-03, 11:34:00](https://tech.slashdot.org/story/26/05/03/0558226/smuggled-starlink-terminals-are-beating-irans-internet-blackout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smuggled Starlink Terminals are Beating Iran&apos;s Internet Blackout](https://tech.slashdot.org/story/26/05/03/0558226/smuggled-starlink-terminals-are-beating-irans-internet-blackout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 11:12:29](https://news.ycombinator.com/item?id=47995757) - [Nuclear receptor 4A1 linked to health effects of coffee: study](https://sciencex.com/news/2026-04-coffee-doesnt-key-biological-pathway.html)
* [2026-05-03, 10:06:50](https://lobste.rs/s/nthsyb/git_stupid_content_tracker) - [GIT - the stupid content tracker](https://raw.githubusercontent.com/git/git/e83c5163316f89bfbde7d9ab23ca2e25604af290/README)
* [2026-05-03, 09:52:00](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss) - [Ghostty Is Leaving GitHub - Ghostty Developer Loses Confidence in GitHub’s Reliability](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss)
* [2026-05-03, 09:38:28](https://lobste.rs/s/dp3tdn/pgbackrest_is_dead_now_what) - [pgBackRest is dead. Now what?](https://mydbanotebook.org/posts/pgbackrest-is-dead.-now-what/)
* [2026-05-03, 09:14:56](https://news.ycombinator.com/item?id=47995037) - [Show HN: Apple&apos;s SHARP running in the browser via ONNX runtime web](https://github.com/bring-shrubbery/ml-sharp-web)
* [2026-05-03, 07:34:00](https://slashdot.org/story/26/05/03/0531224/claude-microsoft-copilot-fail-again-to-predict-the-winners-of-the-kentucky-derby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude, Microsoft Copilot Fail Again to Predict the Winners of the Kentucky Derby](https://slashdot.org/story/26/05/03/0531224/claude-microsoft-copilot-fail-again-to-predict-the-winners-of-the-kentucky-derby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 06:52:34](https://lobste.rs/s/bnfmcw/testing_macos_on_apple_network_server_2_0) - [Testing MacOS on the Apple Network Server 2.0 ROMs](http://oldvcr.blogspot.com/2026/05/testing-macos-on-apple-network-server.html)
* [2026-05-03, 05:10:00](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss) - [Round Up of Latest OS and Browser Releases](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss)
* [2026-05-03, 03:34:00](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Exports of Green Technologies Surged to Record Levels After Iran War Began](https://hardware.slashdot.org/story/26/05/03/0112257/chinese-exports-of-green-technologies-surged-to-record-levels-after-iran-war-began?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 03:26:59](https://lobste.rs/s/crcktq/adding_author_context_rss) - [Adding author context to RSS](https://coywolf.com/notes/adding-author-context-to-rss/)
* [2026-05-03, 01:34:00](https://science.slashdot.org/story/26/05/02/2252228/former-nasa-engineers-create-ingenious-way-to-save-homes-from-wildfires-using-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former NASA Engineers Create Ingenious Way To Save Homes From Wildfires Using Noise](https://science.slashdot.org/story/26/05/02/2252228/former-nasa-engineers-create-ingenious-way-to-save-homes-from-wildfires-using-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-03, 01:28:31](https://lobste.rs/s/jhuf5a/nethack_5_0_0) - [NetHack 5.0.0](https://nethack.org/v500/release.html)
* [2026-05-03, 01:27:10](https://lobste.rs/s/ba3cac/this_month_ladybird_april_2026) - [This Month in Ladybird - April 2026](https://ladybird.org/newsletter/2026-04-30/)
* [2026-05-03, 00:35:18](https://lobste.rs/s/bwppor/github_for_maintainers) - [A GitHub for maintainers](https://nesbitt.io/2026/05/02/a-github-for-maintainers.html)
* [2026-05-03, 00:27:00](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss) - [The Resurrected Commodore 64 is Getting a Facelift Like the Original](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss)
* [2026-05-03, 00:01:14](https://news.ycombinator.com/item?id=47991802) - [A couple million lines of Haskell: Production engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/)
* [2026-05-02, 22:34:00](https://news.slashdot.org/story/26/05/02/1914208/ask-slashdot-are-youtubes-subtitles-appallingly-bad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: Are YouTube&apos;s Subtitles &apos;Appallingly Bad&apos;?](https://news.slashdot.org/story/26/05/02/1914208/ask-slashdot-are-youtubes-subtitles-appallingly-bad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 22:11:49](https://lobste.rs/s/bzltqt/unsigned_sizes_five_year_mistake) - [Unsigned sizes: a five year mistake](https://c3-lang.org/blog/unsigned-sizes-a-five-year-mistake/)
* [2026-05-02, 22:06:04](https://lobste.rs/s/rp1lti/open_source_does_not_imply_open_community) - [Open Source Does Not Imply Open Community](https://blog.feld.me/posts/2026/04/open-source-does-not-imply-open-community/)
* [2026-05-02, 21:34:00](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The $19B \&quot;Nuclear AI\&quot; Energy Startup That Couldn&apos;t Sign a Single Client](https://hardware.slashdot.org/story/26/05/02/1828217/the-19b-nuclear-ai-energy-startup-that-couldnt-sign-a-single-client?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 21:21:27](https://news.ycombinator.com/item?id=47990675) - [The agent harness belongs outside the sandbox](https://www.mendral.com/blog/agent-harness-belongs-outside-sandbox)
* [2026-05-02, 21:14:29](https://news.ycombinator.com/item?id=47990606) - [Six years perfecting maps on watchOS](https://www.david-smith.org/blog/2026/04/29/maps-on-watchos/)
* [2026-05-02, 20:46:30](https://news.ycombinator.com/item?id=47990318) - [This Month in Ladybird – April 2026](https://ladybird.org/newsletter/2026-04-30/)
* [2026-05-02, 20:34:00](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Using Drones for Cloud-Seeding Can Trigger Rain, Company Claims](https://news.slashdot.org/story/26/05/02/1556244/using-drones-for-cloud-seeding-can-trigger-rain-company-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 19:42:00](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss) - [Drone Pilot Makes US Rescind No-Fly Zones Around Unmarked, Moving ICE Vehicles](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss)
* [2026-05-02, 19:34:00](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What if Tech Company Layoffs Aren&apos;t All About AI?](https://it.slashdot.org/story/26/05/02/0338227/what-if-tech-company-layoffs-arent-all-about-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:34:00](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Amateur Just Solved a 60-Year-Old Math Problem - by Asking AI](https://science.slashdot.org/story/26/05/02/0433231/an-amateur-just-solved-a-60-year-old-math-problem---by-asking-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 18:13:57](https://lobste.rs/s/qp0vi5/nhs_goes_war_against_open_source) - [NHS Goes To War Against Open Source](https://shkspr.mobi/blog/2026/05/nhs-goes-to-war-against-open-source/)
* [2026-05-02, 17:34:00](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Costumed Crowd &apos;Speedruns&apos; Scientology Building For Social Media Trend](https://tech.slashdot.org/story/26/05/02/0552238/costumed-crowd-speedruns-scientology-building-for-social-media-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 17:32:29](https://news.ycombinator.com/item?id=47988504) - [Dav2d](https://code.videolan.org/videolan/dav2d)
* [2026-05-02, 17:26:59](https://lobste.rs/s/mi9xrw/pep_661_sentinel_values_accepted_5_years) - [PEP 661 – Sentinel Values, accepted 5 years later](https://peps.python.org/pep-0661/)
* [2026-05-02, 17:05:19](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know) - [What fun websites do you know?](https://lobste.rs/s/ncngka/what_fun_websites_do_you_know)
* [2026-05-02, 16:34:00](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retina Scan for Diabetes Could Also Reduce Deaths During Pregnancy in Developing Countries](https://science.slashdot.org/story/26/04/30/1548214/retina-scan-for-diabetes-could-also-reduce-deaths-during-pregnancy-in-developing-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 14:56:00](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss) - [Linux Cryptographic Code Flaw Offers Fast Route to Root](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss)
* [2026-05-02, 12:18:38](https://lobste.rs/s/aunywc/screw_you_realtek) - [Screw you Realtek](https://www.growse.com/2026/05/02/screw-you-realtek.html)
* [2026-05-02, 10:17:09](https://lobste.rs/s/quulrs/why_tuis_are_back) - [Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 06:39:18](https://lobste.rs/s/miwd1w/i_do_not_recommend_bitwarden) - [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 09:56:47](https://news.ycombinator.com/item?id=47972922) - [What is Z-Angle Memory and why is Intel developing it?](https://www.hpcwire.com/2026/02/05/what-is-z-angle-memory-and-why-is-intel-developing-it/)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 01:48:15](https://news.ycombinator.com/item?id=47970497) - [Text-to-CAD](https://github.com/earthtojake/text-to-cad)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
* [2026-04-30, 22:35:36](https://news.ycombinator.com/item?id=47969142) - [Group averages obscure how an individual&apos;s brain controls behavior: study](https://med.stanford.edu/news/all-news/2026/04/brain-scans-individual-versus-group.html)
* [2026-04-30, 20:13:00](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss) - [Gone in Nine Seconds](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss)
* [2026-04-30, 15:24:00](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss) - [Electrical Current Might be the Key to a Better Cup of Coffee](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 13:40:20](https://news.ycombinator.com/item?id=47948338) - [Cordouan Lighthouse](https://en.wikipedia.org/wiki/Cordouan_Lighthouse)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 02:42:46](https://news.ycombinator.com/item?id=47943632) - [I built my own hair electrolysis machine](https://www.scd31.com/posts/diy-hair-electrolysis-machine)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
