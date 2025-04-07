# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [Watch Antimatter Fall: Scientists Capture Gravity's Pull with a 3840MP Camera](https://scitechdaily.com/watch-antimatter-fall-scientists-capture-gravitys-pull-with-a-3840mp-camera/) ([comments](https://news.ycombinator.com/item?id=43610760))

* [certicoq: A Verified Compiler for Gallina, Written in Gallina](https://github.com/CertiCoq/certicoq) ([comments](https://lobste.rs/s/ln0ri7/certicoq_verified_compiler_for_gallina))

* [Could We Reach Mars Faster With Nuclear Fusion-Powered Rockets?](https://science.slashdot.org/story/25/04/06/2255204/could-we-reach-mars-faster-with-nuclear-fusion-powered-rockets?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/comments.pl?sid=2255204))

* [America's NIH Scientists Have a Cancer Breakthrough. Layoffs are Delaying It.](https://science.slashdot.org/story/25/04/07/0444201/americas-nih-scientists-have-a-cancer-breakthrough-layoffs-are-delaying-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/comments.pl?sid=0444201))

## Artificial Intelligence and Software Development

* [LLMs Understand Nullability](https://dmodel.ai/nullability-gentle/) ([comments](https://news.ycombinator.com/item?id=43612211))

* [Microsoft AI Chief Sees Advantage in Building Models '3 or 6 Months Behind'](https://tech.slashdot.org/story/25/04/07/1354220/microsoft-ai-chief-sees-advantage-in-building-models-3-or-6-months-behind?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/comments.pl?sid=1354220))

* [MonkeysPaw - a prompt-driven web framework in Ruby](https://worksonmymachine.substack.com/p/introducing-monkeyspaw-a-prompt-driven) ([comments](https://lobste.rs/s/rlfgn4/monkeyspaw_prompt_driven_web_framework))

* [Meta Releases New Benchmark-Beating Llama 4 Models](https://news.slashdot.org/story/25/04/06/182233/in-milestone-for-open-source-meta-releases-new-benchmark-beating-llama-4-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/comments.pl?sid=182233))

## Consumer and Cultural Insights

* [The Tumblr Revival is Real - and Gen Z is Leading the Charge](https://tech.slashdot.org/story/25/04/07/0350213/the-tumblr-revival-is-real---and-gen-z-is-leading-the-charge?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/comments.pl?sid=0350213))

* [Can Using a Dumber Phone Cure 'Brain Rot'?](https://mobile.slashdot.org/story/25/04/07/0552241/can-using-a-dumber-phone-cure-brain-rot?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://mobile.slashdot.org/comments.pl?sid=0552241))

* [Inside One of America's Last Pencil Factories (2018)](https://www.nytimes.com/2018/01/12/magazine/inside-one-of-americas-last-pencil-factories.html) ([comments](https://news.ycombinator.com/item?id=43610187))

* [Why Catullus Continues to Seduce Us](https://www.newyorker.com/magazine/2025/04/07/catullus-poems-book-review-stephen-mitchell-isobel-williams) ([comments](https://news.ycombinator.com/item?id=43612807))

## Cryptography and Security

* [UK Effort To Keep Apple Encryption Fight Secret Is Blocked](https://apple.slashdot.org/story/25/04/07/1444256/uk-effort-to-keep-apple-encryption-fight-secret-is-blocked?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://apple.slashdot.org/comments.pl?sid=1444256))

* [Decoding the 90s: Cryptography in Early Software Development (2023)](https://www.botanica.software/post/decoding-the-90s) ([comments](https://news.ycombinator.com/item?id=43612102))

* [Cell Phone OPSEC for Border Crossings](https://soylentnews.org/article.pl?sid=25/04/06/130257&from=rss) ([comments](https://soylentnews.org/comments.pl?sid=130257))

## Programming and Software Engineering

* [Writing C for curl](https://daniel.haxx.se/blog/2025/04/07/writing-c-for-curl/) ([comments](https://lobste.rs/s/jooshq/writing_c_for_curl))

* [My Journey to FreeBSD: Building a 'Just Focus' Laptop](https://stevengharms.com/longform/my-first-freebsd) ([comments](https://lobste.rs/s/lq8w47/my_journey_freebsd_building_just_focus))

* [One Does Not Simply Update One's Dependencies](https://rosswintle.uk/2025/04/one-does-not-simply-update-ones-dependencies/) ([comments](https://lobste.rs/s/crhvi0/one_does_not_simply_update_one_s))

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

* [2025-04-07, 15:49:05](https://news.ycombinator.com/item?id=43612807) - [Why Catullus Continues to Seduce Us](https://www.newyorker.com/magazine/2025/04/07/catullus-poems-book-review-stephen-mitchell-isobel-williams)
* [2025-04-07, 15:28:00](https://news.slashdot.org/story/25/04/07/1558211/trump-opens-trade-talks-window-while-threatening-china-with-steeper-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Opens Trade Talks Window While Threatening China With Steeper Tariffs](https://news.slashdot.org/story/25/04/07/1558211/trump-opens-trade-talks-window-while-threatening-china-with-steeper-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 14:52:52](https://news.ycombinator.com/item?id=43612211) - [LLMs Understand Nullability](https://dmodel.ai/nullability-gentle/)
* [2025-04-07, 14:44:00](https://apple.slashdot.org/story/25/04/07/1444256/uk-effort-to-keep-apple-encryption-fight-secret-is-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Effort To Keep Apple Encryption Fight Secret Is Blocked](https://apple.slashdot.org/story/25/04/07/1444256/uk-effort-to-keep-apple-encryption-fight-secret-is-blocked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 14:43:17](https://news.ycombinator.com/item?id=43612102) - [Decoding the 90s: Cryptography in Early Software Development (2023)](https://www.botanica.software/post/decoding-the-90s)
* [2025-04-07, 14:40:01](https://lobste.rs/s/oyidg2/git_links_org) - [Git Links in Org](https://nothingissimple.ablatedsprocket.com/posts/git-links-in-org.html)
* [2025-04-07, 14:01:00](https://tech.slashdot.org/story/25/04/07/1354220/microsoft-ai-chief-sees-advantage-in-building-models-3-or-6-months-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft AI Chief Sees Advantage in Building Models &apos;3 or 6 Months Behind&apos;](https://tech.slashdot.org/story/25/04/07/1354220/microsoft-ai-chief-sees-advantage-in-building-models-3-or-6-months-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 13:02:14](https://lobste.rs/s/jooshq/writing_c_for_curl) - [Writing C for curl](https://daniel.haxx.se/blog/2025/04/07/writing-c-for-curl/)
* [2025-04-07, 12:58:09](https://news.ycombinator.com/item?id=43610760) - [Watch Antimatter Fall: Scientists Capture Gravity&apos;s Pull with a 3840MP Camera](https://scitechdaily.com/watch-antimatter-fall-scientists-capture-gravitys-pull-with-a-3840mp-camera/)
* [2025-04-07, 12:41:00](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss) - [UK Threatens £100K-A-Day Fines Under New Cyber Bill](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss)
* [2025-04-07, 12:14:16](https://lobste.rs/s/s3ize0/best_programmers_i_know) - [The Best Programmers I Know](https://endler.dev/2025/best-programmers/)
* [2025-04-07, 11:53:03](https://lobste.rs/s/vgbf9y/testing_frameworks_mini_languages) - [Testing Frameworks and Mini-Languages](https://matttproud.com/blog/posts/testing-frameworks-and-mini-languages.html)
* [2025-04-07, 11:52:06](https://lobste.rs/s/lpd2wj/gobolinux_017_01_most_experimental_linux) - [GoboLinux 017.01: the most experimental Linux&apos;s first new release in about 5Y](https://gobolinux.org/release_notes_017.01.html)
* [2025-04-07, 11:46:37](https://lobste.rs/s/lq8w47/my_journey_freebsd_building_just_focus) - [My Journey to FreeBSD: Building a &apos;Just Focus&apos; Laptop](https://stevengharms.com/longform/my-first-freebsd)
* [2025-04-07, 11:43:46](https://news.ycombinator.com/item?id=43610187) - [Inside One of America&apos;s Last Pencil Factories (2018)](https://www.nytimes.com/2018/01/12/magazine/inside-one-of-americas-last-pencil-factories.html)
* [2025-04-07, 11:34:00](https://science.slashdot.org/story/25/04/07/0444201/americas-nih-scientists-have-a-cancer-breakthrough-layoffs-are-delaying-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s NIH Scientists Have a Cancer Breakthrough. Layoffs are Delaying It.](https://science.slashdot.org/story/25/04/07/0444201/americas-nih-scientists-have-a-cancer-breakthrough-layoffs-are-delaying-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 11:22:05](https://lobste.rs/s/pccrtt/apple_s_darwin_os_xnu_kernel_deep_dive) - [Apple’s Darwin OS and XNU Kernel Deep Dive](https://tansanrao.com/blog/2025/04/xnu-kernel-and-darwin-evolution-and-architecture/)
* [2025-04-07, 10:43:11](https://lobste.rs/s/w7r0yp/small_haskell_task) - [A small Haskell task](https://abuseofnotation.github.io/haskell-task/)
* [2025-04-07, 09:46:48](https://lobste.rs/s/wtavh6/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/wtavh6/what_are_you_doing_this_week)
* [2025-04-07, 08:57:14](https://lobste.rs/s/vgdbfm/airfone) - [Airfone](https://computer.rip/2025-04-06-Airfone.html)
* [2025-04-07, 08:42:43](https://news.ycombinator.com/item?id=43609242) - [A startup doesn&apos;t need to be a unicorn](https://mattgiustwilliamson.substack.com/p/your-startup-doesnt-need-to-be-a)
* [2025-04-07, 07:56:00](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss) - [Cell Phone OPSEC for Border Crossings](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss)
* [2025-04-07, 07:34:00](https://mobile.slashdot.org/story/25/04/07/0552241/can-using-a-dumber-phone-cure-brain-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Using a Dumber Phone Cure &apos;Brain Rot&apos;?](https://mobile.slashdot.org/story/25/04/07/0552241/can-using-a-dumber-phone-cure-brain-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 07:20:09](https://lobste.rs/s/rlfgn4/monkeyspaw_prompt_driven_web_framework) - [MonkeysPaw - a prompt-driven web framework in Ruby](https://worksonmymachine.substack.com/p/introducing-monkeyspaw-a-prompt-driven)
* [2025-04-07, 07:07:54](https://lobste.rs/s/1zyk3d/launching_bssg_my_journey_from_dynamic) - [Launching BSSG - My Journey from Dynamic CMS to Bash Static Site Generator](https://it-notes.dragas.net/2025/04/07/launching-bssg-my-journey-from-dynamic-cms-to-bash-static-site-generator/)
* [2025-04-07, 06:37:54](https://lobste.rs/s/tnozei/resize_observer_api_with_stimulus) - [Resize Observer API with Stimulus](https://avohq.io/blog/resize-observer-stimulus)
* [2025-04-07, 04:37:19](https://news.ycombinator.com/item?id=43607744) - [Show HN: Uncurl.dev – Convert curl commands to a shareable, executable UI](https://uncurl.dev/)
* [2025-04-07, 04:10:00](https://tech.slashdot.org/story/25/04/07/0350213/the-tumblr-revival-is-real---and-gen-z-is-leading-the-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Tumblr Revival is Real - and Gen Z is Leading the Charge](https://tech.slashdot.org/story/25/04/07/0350213/the-tumblr-revival-is-real---and-gen-z-is-leading-the-charge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 03:48:23](https://lobste.rs/s/ln0ri7/certicoq_verified_compiler_for_gallina) - [certicoq: A Verified Compiler for Gallina, Written in Gallina](https://github.com/CertiCoq/certicoq)
* [2025-04-07, 03:11:15](https://lobste.rs/s/hwynua/vector_sets_are_part_redis) - [Vector Sets are part of Redis](https://antirez.com/news/149)
* [2025-04-07, 03:10:00](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss) - [New Zealand Start-Up Aims to Take Space Transport to New Heights](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss)
* [2025-04-07, 03:08:28](https://lobste.rs/s/crhvi0/one_does_not_simply_update_one_s) - [One does not simply update one&apos;s dependencies](https://rosswintle.uk/2025/04/one-does-not-simply-update-ones-dependencies/)
* [2025-04-07, 01:10:00](https://yro.slashdot.org/story/25/04/07/018218/as-stocks-and-cryptocurrencies-drop-after-tariffs-france-considers-retaliating-against-us-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Stocks (and Cryptocurrencies) Drop After Tariffs, France Considers Retaliating Against US Big Tech](https://yro.slashdot.org/story/25/04/07/018218/as-stocks-and-cryptocurrencies-drop-after-tariffs-france-considers-retaliating-against-us-big-tech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-07, 01:07:45](https://lobste.rs/s/qorexc/more_contrast_please) - [More Contrast, Please](https://susam.net/more-contrast-please.html)
* [2025-04-06, 23:57:00](https://entertainment.slashdot.org/story/25/04/06/2335230/microsofts-copilot-roasts-bill-gates-steve-ballmer-and-satya-nadella?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Copilot Roasts Bill Gates, Steve Ballmer, and Satya Nadella](https://entertainment.slashdot.org/story/25/04/06/2335230/microsofts-copilot-roasts-bill-gates-steve-ballmer-and-satya-nadella?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 23:47:21](https://news.ycombinator.com/item?id=43606027) - [Glamorous Toolkit](https://gtoolkit.com//)
* [2025-04-06, 23:06:26](https://news.ycombinator.com/item?id=43605731) - [Baby Steps into Genetic Programming](https://aerique.blogspot.com/2011/01/baby-steps-into-genetic-programming.html)
* [2025-04-06, 22:57:00](https://science.slashdot.org/story/25/04/06/2255204/could-we-reach-mars-faster-with-nuclear-fusion-powered-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could We Reach Mars Faster With Nuclear Fusion-Powered Rockets?](https://science.slashdot.org/story/25/04/06/2255204/could-we-reach-mars-faster-with-nuclear-fusion-powered-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 22:22:00](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss) - [Brain-Computer Interfaces Face a Critical Test](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss)
* [2025-04-06, 21:40:00](https://entertainment.slashdot.org/story/25/04/06/2137219/minecraft-movie-scores-biggest-videogame-movie-opening-ever-faces-early-leaks-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Minecraft Movie&apos; Scores Biggest Videogame Movie Opening Ever, Faces Early Leaks Online](https://entertainment.slashdot.org/story/25/04/06/2137219/minecraft-movie-scores-biggest-videogame-movie-opening-ever-faces-early-leaks-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 21:30:33](https://news.ycombinator.com/item?id=43605120) - [Microcomputers – The First Wave: Responding to Altair](https://technicshistory.com/2025/04/06/microcomputers-the-first-wave-responding-to-altair/)
* [2025-04-06, 21:14:14](https://lobste.rs/s/tz89ak/insanity_being_software_engineer) - [The Insanity of Being a Software Engineer](https://0x1.pt/2025/04/06/the-insanity-of-being-a-software-engineer/)
* [2025-04-06, 21:14:09](https://news.ycombinator.com/item?id=43605003) - [Rsync replaced with openrsync on macOS Sequoia](https://derflounder.wordpress.com/2025/04/06/rsync-replaced-with-openrsync-on-macos-sequoia/)
* [2025-04-06, 19:34:00](https://news.slashdot.org/story/25/04/06/1932242/nfl-adopts-sonys-virtual-measurements-for-footballs-first-downs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NFL Adopts Sony&apos;s &apos;Virtual Measurements&apos; for Football&apos;s First Downs](https://news.slashdot.org/story/25/04/06/1932242/nfl-adopts-sonys-virtual-measurements-for-footballs-first-downs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 18:25:36](https://news.ycombinator.com/item?id=43603646) - [Knowing where your engineer salary comes from](https://www.seangoedecke.com/where-the-money-comes-from/)
* [2025-04-06, 18:05:00](https://news.slashdot.org/story/25/04/06/182233/in-milestone-for-open-source-meta-releases-new-benchmark-beating-llama-4-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In &apos;Milestone&apos; for Open Source, Meta Releases New Benchmark-Beating Llama 4 Models](https://news.slashdot.org/story/25/04/06/182233/in-milestone-for-open-source-meta-releases-new-benchmark-beating-llama-4-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 17:34:00](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss) - [Rapidus to Begin Trial Production of its 2nm Process This Month](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss)
* [2025-04-06, 16:34:00](https://linux.slashdot.org/story/25/04/06/0037234/forget-snow-sequoia-now-im-cheering-for-better-linux-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Forget &apos;Snow Sequoia&apos;.  Now I&apos;m Cheering for Better Linux Hardware](https://linux.slashdot.org/story/25/04/06/0037234/forget-snow-sequoia-now-im-cheering-for-better-linux-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 16:28:03](https://lobste.rs/s/szggka/hiding_elements_require_javascript) - [Hiding elements that require JavaScript without JavaScript](https://0xda.de/blog/2025/04/hiding-elements-that-require-javascript-without-javascript/)
* [2025-04-06, 15:34:00](https://science.slashdot.org/story/25/04/06/0258203/after-48-years-voyager-scientist-confronts-the-missions-final-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 48 Years, Voyager Scientist Confronts the Mission&apos;s Final Years](https://science.slashdot.org/story/25/04/06/0258203/after-48-years-voyager-scientist-confronts-the-missions-final-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 15:10:44](https://lobste.rs/s/pkjyww/short_story_my_programming_language) - [A short story of my programming language Easylang](https://easylang.online/apps/story.html)
* [2025-04-06, 14:34:00](https://slashdot.org/story/25/04/05/0414240/new-tinder-game-lets-you-flirt-with-ai-characters-three-of-them-dumped-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Tinder Game &apos;Lets You Flirt With AI Characters. Three of Them Dumped Me&apos;](https://slashdot.org/story/25/04/05/0414240/new-tinder-game-lets-you-flirt-with-ai-characters-three-of-them-dumped-me?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 14:28:50](https://news.ycombinator.com/item?id=43601624) - [MonkeysPaw – A prompt-driven web framework in Ruby](https://worksonmymachine.substack.com/p/introducing-monkeyspaw-a-prompt-driven)
* [2025-04-06, 13:37:49](https://lobste.rs/s/pawabv/ran_out_infrastructure_titles) - [Ran out of infrastructure titles](https://arch.dog/bark/2025-03-30-infrastructure)
* [2025-04-06, 13:18:06](https://lobste.rs/s/1ldtix/nix_derivations_by_hand_without_guessing) - [Nix derivations by hand, without guessing](https://bernsteinbear.com/blog/nix-by-hand/)
* [2025-04-06, 12:47:00](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss) - [CISPE Pumps €1 Million Of Microsoft&apos;s Money Into Fulcrum](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss)
* [2025-04-06, 11:16:31](https://news.ycombinator.com/item?id=43600582) - [The Insanity of Being a Software Engineer](https://0x1.pt/2025/04/06/the-insanity-of-being-a-software-engineer/)
* [2025-04-06, 09:42:28](https://news.ycombinator.com/item?id=43600192) - [The “S” in MCP Stands for Security](https://elenacross7.medium.com/%EF%B8%8F-the-s-in-mcp-stands-for-security-91407b33ed6b)
* [2025-04-06, 09:11:20](https://lobste.rs/s/litpqn/order_files_etc_ssh_sshd_config_d_matters) - [The order of files in /etc/ssh/sshd_config.d/ matters (and may surprise you)](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenSSHConfigOrderMatters)
* [2025-04-06, 08:02:00](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss) - [Open-Source Tool Designed To Throttle PC And Server Performance Based On Electricity Pricing](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss)
* [2025-04-06, 07:07:44](https://lobste.rs/s/wyjtwq/done_with_github_actions_supply_chain) - [Done with GitHub Actions Supply Chain Attacks](https://huijzer.xyz/posts/jas/)
* [2025-04-06, 04:55:30](https://lobste.rs/s/vwrai2/maclynx_beta_6_back_power_mac) - [MacLynx beta 6: back to the Power Mac](http://oldvcr.blogspot.com/2025/04/maclynx-beta-6-back-to-power-mac.html)
* [2025-04-06, 03:16:00](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss) - [A New Antifungal Drug Works in a Surprising Way](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss)
* [2025-04-05, 22:28:00](https://soylentnews.org/politics/article.pl?sid=25/04/04/0831206&amp;from=rss) - [US To Squeeze Firms For Investment To Get Chips Act Cash](https://soylentnews.org/politics/article.pl?sid=25/04/04/0831206&amp;from=rss)
* [2025-04-05, 17:46:00](https://soylentnews.org/article.pl?sid=25/04/04/0827202&amp;from=rss) - [Web 3.0 Requires Data Integrity](https://soylentnews.org/article.pl?sid=25/04/04/0827202&amp;from=rss)
* [2025-04-05, 15:03:00](https://soylentnews.org/article.pl?sid=25/04/04/0824242&amp;from=rss) - [Two Guys From Andromeda Ship SpaceVenture After 13 Years](https://soylentnews.org/article.pl?sid=25/04/04/0824242&amp;from=rss)
* [2025-04-05, 12:54:00](https://soylentnews.org/article.pl?sid=25/04/04/081240&amp;from=rss) - [Tracing the Thoughts of a Large Language Model](https://soylentnews.org/article.pl?sid=25/04/04/081240&amp;from=rss)
* [2025-04-05, 09:27:00](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss) - [Problem with the Poll](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss)
* [2025-04-05, 08:12:00](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss) - [Intel and TSMC Join Forces for Groundbreaking Chipmaking Venture](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss)
* [2025-04-05, 03:27:00](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss) - [Waste Fires Are on the Rise Largely Thanks to the Lithium-Ion Batteries in Vape Pens](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss)
* [2025-04-05, 00:38:20](https://news.ycombinator.com/item?id=43589214) - [Charging electric vehicles 5x faster in subfreezing temps](https://news.umich.edu/charging-electric-vehicles-5x-faster-in-subfreezing-temps/)
* [2025-04-04, 22:41:00](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss) - [How Perceptions Are Influenced by Expectations: Songbird Study Draws Parallels With Human Speech](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss)
* [2025-04-04, 18:54:41](https://news.ycombinator.com/item?id=43586380) - [Benchmarking LLM social skills with an elimination game](https://github.com/lechmazur/elimination_game)
* [2025-04-04, 18:23:20](https://news.ycombinator.com/item?id=43586043) - [New Theoretical Research Trends in Cartography (2001)](https://www.researchgate.net/publication/26467883_NEW_THEORETICAL_RESEARCH_TRENDS_IN_CARTOGRAPHY)
* [2025-04-04, 17:53:00](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss)
* [2025-04-04, 17:47:05](https://news.ycombinator.com/item?id=43585649) - [The Mathematics of Crochet](https://hellohartblog.wordpress.com/2015/05/25/the-mathematics-of-crochet/)
* [2025-04-04, 16:06:47](https://news.ycombinator.com/item?id=43584422) - [I&apos;m manually transcribing the AltairBASIC source, ten lines a day starting today](https://codeberg.org/luciofstars/altabasic)
* [2025-04-04, 15:40:50](https://news.ycombinator.com/item?id=43584015) - [AI masters Minecraft: DeepMind program finds diamonds without being taught](https://www.nature.com/articles/d41586-025-01019-w)
* [2025-04-04, 13:17:11](https://news.ycombinator.com/item?id=43581900) - [Deterministic simulation testing for async Rust](https://s2.dev/blog/dst)
* [2025-04-04, 13:10:00](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss) - [Notes on the Pentium&apos;s Microcode Circuitry](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss)
* [2025-04-04, 11:41:32](https://news.ycombinator.com/item?id=43580815) - [We asked camera companies why their RAW formats are all different and confusing](https://www.theverge.com/tech/640119/camera-raw-spec-format-explained-adobe-dng-canon-nikon-sony-fujifilm)
* [2025-04-04, 09:41:13](https://news.ycombinator.com/item?id=43580012) - [Use the Gemini API with OpenAI Fallback in TypeScript](https://sometechblog.com/posts/try-gemini-api-with-openai-fallback/)
* [2025-04-04, 08:28:00](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss) - [What Drives Our Cravings for Food and Drink? Neurons in the Amygdala May Play a Key Role](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss)
* [2025-04-04, 03:43:00](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss) - [AI Bots Strain Wikimedia as Bandwidth Surges 50%](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss)
* [2025-04-04, 01:13:11](https://news.ycombinator.com/item?id=43577338) - [Reinventing Feathering for the Vectorian Era](https://rive.app/blog/how-rive-reinvented-feathering-for-the-vectorian-era)
* [2025-04-03, 23:14:42](https://news.ycombinator.com/item?id=43576602) - [The Untold Mystery Upending Egon Schiele&apos;s Legacy](https://www.wsj.com/style/egon-schiele-artist-history-eb2480e8)
* [2025-04-03, 23:08:56](https://news.ycombinator.com/item?id=43576559) - [AEgIS turns phone sensors into antimatter camera of unprecedented resolution](https://home.cern/news/news/experiments/aegis-transforms-smartphone-sensors-antimatter-camera-unprecedented)
* [2025-04-03, 23:04:00](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss) - [Does Listening Really Change Minds? New Study Challenges Common Assumptions](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss)
* [2025-04-03, 18:17:00](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss) - [The April Fools Joke That Might Have Got Me Fired](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss)
* [2025-04-03, 17:00:21](https://news.ycombinator.com/item?id=43572511) - [Journey to Optimize Cloudflare D1 Database Queries](https://gist.github.com/rxliuli/be31cbded41ef7eac6ae0da9070c8ef8)
* [2025-04-03, 15:42:06](https://news.ycombinator.com/item?id=43571332) - [Cursed Excel: \&quot;1/2\&quot;+1=45660](https://www.quadratichq.com/blog/cursed-excel-datetime-math)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 07:07:48](https://news.ycombinator.com/item?id=43565891) - [A Multiwavelength Look at Proxima Centauri&apos;s Flares](https://www.centauri-dreams.org/2025/04/01/a-multiwavelength-look-at-proxima-centauris-flares/)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
