# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [World's First Wave Power Generator Receives Certification For Regular Use](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major leap for sustainable energy as the first wave power generator is certified for consistent use.

* [Google Adds Selfie Video As a Log-In Option](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google introduces selfie-based video as a novel authentication mechanism.

* [Former OpenAI CTO Does What Altman Won't: Releases a Frontier AI Model That's Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&from=rss) - A former executive from OpenAI challenges norms by releasing an open-source frontier AI model.

* [Amazon Is Bringing Games to Prime Video](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon integrates gaming into its Prime Video service platform.

* [In a First, Apple Maps Navigation To Be Embedded In Ford UEV Pickups](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple collaborates with Ford for embedded Maps technology in electric trucks.

## Science and Environment

* [Researchers Discover First Known Transmissible Cancer In Fish](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists document the first transmissible cancer among fish, shedding new light on disease transmission.

* [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way's Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&from=rss) - Exciting discovery of sugar molecules near the center of the galaxy.

* [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&from=rss) - Discovery of amino acids in a meteorite that fell near New York City.

* [The Galaxy's Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&from=rss) - Astronomers speculate cold star-like objects could actually be advanced alien megastructures.

## Security and Privacy

* [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/) - Intriguing analysis reveals an elaborate cover during a technical interview process.

* [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/) - Concerns rise as trusted macOS app executables are silently overwritten.

* [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&from=rss) - Discovery of malicious activity spreading through multiple GitHub repositories.

## Business and Legal

* [EU Fines Google $1 Billion For Breaking Digital Antitrust Regulations](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The European Union penalizes Google over violations of digital market regulations.

* [Oracle Signs 10-Year Software Contract With Pentagon Worth Up To $7 Billion](https://developers.slashdot.org/story/26/07/23/2142251/oracle-signs-10-year-software-contract-with-pentagon-worth-up-to-7-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Oracle secures a decade-long deal with the Pentagon.

* [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Entrepreneurs rally to oppose a potential ban on Chinese open-weight AI partnerships.

## Unique and Intriguing Discoveries

* [Nothing works and everyone is euphoric](https://ptrchm.com/posts/nothing-works-and-everyone-is-euphoric/) - A philosophical take on resilience and enthusiasm in a chaotic world.

* [The day Steve Jobs dissed me in a keynote (2010)](https://sive.rs/itunes) - Anecdote from 2010 where Steve Jobs made surprising personal remarks during an Apple keynote.

* [Claude Cookbook](https://platform.claude.com/cookbook/) - A guidebook for utilizing the Claude conversational AI platform.

* [The Ever-Receding Pocket](https://zhenyi.gibber.blog/the-ever-receding-pocket) - A metaphorical discussion on fleeting opportunities.

* [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Notable discovery of a historic plane crash tied to modern aviation safety lessons.

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

* [2026-07-24, 09:40:25](https://news.ycombinator.com/item?id=49033173) - [Show HN: A static, client-side tarot calculator for Brazilian Portuguese](https://meuarcanopessoal.net/)
* [2026-07-24, 09:31:48](https://news.ycombinator.com/item?id=49033127) - [Flux 3 X Mimic: The Next Generation of Video-Action Models](https://bfl.ai/blog/flux-3-mimic)
* [2026-07-24, 09:29:44](https://news.ycombinator.com/item?id=49033110) - [Future euro banknote design proposals](https://www.ecb.europa.eu/euro/banknotes/future_banknotes/html/design-proposals.en.html)
* [2026-07-24, 09:08:17](https://news.ycombinator.com/item?id=49033004) - [Nothing works and everyone is euphoric](https://ptrchm.com/posts/nothing-works-and-everyone-is-euphoric/)
* [2026-07-24, 09:07:44](https://news.ycombinator.com/item?id=49033001) - [The day Steve Jobs dissed me in a keynote (2010)](https://sive.rs/itunes)
* [2026-07-24, 08:29:11](https://news.ycombinator.com/item?id=49032756) - [The Book Prize Index](https://book-prize-index.vercel.app)
* [2026-07-24, 08:18:30](https://news.ycombinator.com/item?id=49032660) - [It&apos;s getting harder to focus every day](https://glyphack.com/attention/)
* [2026-07-24, 07:22:47](https://news.ycombinator.com/item?id=49032225) - [The Ever-Receding Pocket](https://zhenyi.gibber.blog/the-ever-receding-pocket)
* [2026-07-24, 07:14:41](https://lobste.rs/s/ncpthq/existentials_on_leash) - [Existentials on a Leash](https://cdfa.github.io/existentials-on-a-leash)
* [2026-07-24, 07:02:43](https://news.ycombinator.com/item?id=49032095) - [The PImpl idiom and the C++26 std:indirect type](https://mariusbancila.ro/blog/2026/07/23/the-pimpl-idiom-and-the-cpp26-stdindirect-type/)
* [2026-07-24, 07:00:00](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First Wave Power Generator Receives Certification For Regular Use](https://hardware.slashdot.org/story/26/07/24/0152240/worlds-first-wave-power-generator-receives-certification-for-regular-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 06:17:08](https://news.ycombinator.com/item?id=49031796) - [Flux 3](https://bfl.ai/blog/flux-3)
* [2026-07-24, 05:41:17](https://lobste.rs/s/oiiu0u/webaim_2026_report_on_accessibility) - [WebAIM 2026 report on Accessibility errors across the top 1M web pages](https://webaim.org/projects/million/#errors)
* [2026-07-24, 05:29:28](https://lobste.rs/s/ewh4v6/making_gifs_from_35mm_film_photography) - [Making GIFs from 35mm film photography](https://blog.willgrant.org/2026/07/23/the-hardest-way-to-make-gif.html)
* [2026-07-24, 05:09:15](https://news.ycombinator.com/item?id=49031409) - [Claude Cookbook](https://platform.claude.com/cookbook/)
* [2026-07-24, 05:08:56](https://lobste.rs/s/wj5bs5/fast_synthesis_basic_oscillators) - [Fast Synthesis of Basic Oscillators](https://artemis.sh/2026/07/23/fast-synthesis-basic-oscillators.html)
* [2026-07-24, 05:05:13](https://lobste.rs/s/4cpv1m/i_regret_migrating_codeberg) - [I Regret Migrating to Codeberg](https://xn--gckvb8fzb.com/i-regret-migrating-to-codeberg/)
* [2026-07-24, 05:05:03](https://lobste.rs/s/h9gdj8/freebsd_ports_frozen) - [FreeBSD ports frozen](https://www.osnews.com/story/145593/freebsd-ports-frozen-after-someone-commits-the-entire-150mb-linux-copilot-binary/)
* [2026-07-24, 03:30:00](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Adds Selfie Video As a Log-In Option](https://yro.slashdot.org/story/26/07/24/0144247/google-adds-selfie-video-as-a-log-in-option?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 23:00:00](https://developers.slashdot.org/story/26/07/23/2142251/oracle-signs-10-year-software-contract-with-pentagon-worth-up-to-7-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Signs 10-Year Software Contract With Pentagon Worth Up To $7 Billion](https://developers.slashdot.org/story/26/07/23/2142251/oracle-signs-10-year-software-contract-with-pentagon-worth-up-to-7-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 22:30:29](https://news.ycombinator.com/item?id=49028927) - [98.css](https://jdan.github.io/98.css/#status-bar)
* [2026-07-23, 22:00:00](https://tech.slashdot.org/story/26/07/23/2137202/microsoft-responds-to-lg-monitors-installing-mcafee-ads-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Responds to LG Monitors Installing McAfee Ads On Windows](https://tech.slashdot.org/story/26/07/23/2137202/microsoft-responds-to-lg-monitors-installing-mcafee-ads-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 21:20:10](https://lobste.rs/s/badu44/fil_c_garbage_memory_safety_out) - [Fil-C: Garbage In, Memory Safety Out](https://www.youtube.com/watch?v=5F-2Y1LPRek)
* [2026-07-23, 21:10:09](https://lobste.rs/s/x3x2aw/you_should_selfhost_your_mail_2026) - [You should selfhost your mail (in 2026)](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)
* [2026-07-23, 21:00:00](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Fines Google $1 Billion For Breaking Digital Antitrust Regulations](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 20:54:31](https://lobste.rs/s/btplc7/jolt_running_clojure_on_chez_scheme) - [Jolt: running Clojure on Chez Scheme](https://yogthos.net/posts/2026-07-02-jolt.html)
* [2026-07-23, 20:00:00](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Bringing Games to Prime Video](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 19:26:01](https://news.ycombinator.com/item?id=49026810) - [Show HN: Echo – Fable-level results at 1/3 the cost using open-weight models](https://news.ycombinator.com/item?id=49026810)
* [2026-07-23, 19:00:00](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony&apos;s Decision To Ditch Discs Was Practically Inevitable, Data Shows](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 18:50:40](https://lobste.rs/s/dto1e4/software_should_work_worked) - [Software Should Work Worked](https://isaacvando.com/software-should-work-worked)
* [2026-07-23, 18:42:17](https://lobste.rs/s/oscswl/agent_shell_0_63_updates) - [agent-shell 0.63 updates](https://xenodium.com/agent-shell-0-63-updates)
* [2026-07-23, 18:08:29](https://news.ycombinator.com/item?id=49025766) - [Why Sony can&apos;t bring back its classic Walkman models](https://obsoletesony.substack.com/p/why-sony-cant-bring-back-classic-walkman)
* [2026-07-23, 18:04:14](https://lobste.rs/s/kq9oh7/prompt_caching_agents) - [Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
* [2026-07-23, 18:00:00](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a First, Apple Maps Navigation To Be Embedded In Ford UEV Pickups](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 17:00:00](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Young Mathematicians Awarded the 2026 Fields Medals](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 16:58:59](https://lobste.rs/s/gtxmc4/pimpl_idiom_c_26_std_indirect_type) - [The PImpl idiom and the C++26 std::indirect type](https://mariusbancila.ro/blog/2026/07/23/the-pimpl-idiom-and-the-cpp26-stdindirect-type/)
* [2026-07-23, 16:53:33](https://news.ycombinator.com/item?id=49024691) - [What happened to TheNumbers.com](https://stephenfollows.com/p/what-just-happened-to-thenumberscom-should-worry-us-all)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 16:00:00](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 15:33:26](https://lobste.rs/s/gpqa52/everyone_should_know_simd) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-23, 15:18:48](https://news.ycombinator.com/item?id=49023019) - [Why Software Factories Fail (or: harness engineering is not enough)](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md)
* [2026-07-23, 15:18:40](https://news.ycombinator.com/item?id=49023016) - [Startup founders urge U.S. government not to shut off Chinese open weight AI](https://www.politico.com/news/2026/07/22/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai-01008992)
* [2026-07-23, 15:11:37](https://news.ycombinator.com/item?id=49022911) - [Show HN: Palmier Pro – Open-source macOS video editor built for AI](https://github.com/palmier-io/palmier-pro)
* [2026-07-23, 15:00:00](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover First Known Transmissible Cancer In Fish](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 14:53:34](https://news.ycombinator.com/item?id=49022634) - [Learn OpenGL, extensive tutorial resource for learning Modern OpenGL](https://learnopengl.com/)
* [2026-07-23, 14:24:43](https://news.ycombinator.com/item?id=49022152) - [Writing by hand is good for your brain](https://nealstephenson.substack.com/p/writing-by-hand-is-good-for-your)
* [2026-07-23, 14:23:51](https://news.ycombinator.com/item?id=49022137) - [Fields Medals 2026](https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026)
* [2026-07-23, 14:17:40](https://news.ycombinator.com/item?id=49022038) - [Software rendering in 500 lines of bare C++](https://haqr.eu/tinyrenderer/)
* [2026-07-23, 14:06:47](https://news.ycombinator.com/item?id=49021856) - [I regret migrating to Codeberg](https://xn--gckvb8fzb.com/i-regret-migrating-to-codeberg/)
* [2026-07-23, 13:51:36](https://news.ycombinator.com/item?id=49021597) - [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16)
* [2026-07-23, 13:37:15](https://lobste.rs/s/dxaogf/silent_replacement_trusted_macos_app) - [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/)
* [2026-07-23, 13:01:28](https://lobste.rs/s/mwelmm/on_accountability) - [On Accountability](https://addisoncrump.info/research/on-accountability/)
* [2026-07-23, 12:12:50](https://lobste.rs/s/p4xo2i/software_rendering_500_lines_bare_c) - [Software rendering in 500 lines of bare C++](https://ssloy.github.io/tinyrenderer/)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 11:00:00](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verisign Is Finally Bringing&lt;nobr&gt; &lt;wbr&gt;&lt;/nobr&gt;.web Domains To the Internet](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 10:16:17](https://lobste.rs/s/nsnb4j/first_known_runaway_ai_agent_very_bad) - [The first known runaway AI agent - or a very bad marketing stunt?](https://martinalderson.com/posts/huggingface-openai-exploit/)
* [2026-07-23, 09:30:45](https://lobste.rs/s/p1jpv1/justif_knuth_plass_justification) - [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/)
* [2026-07-23, 07:00:00](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Private Mission Launches To Extend Life of Out-of-Gas Communication Satellites](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 04:51:37](https://lobste.rs/s/n0hq44/your_analytics_are_lying_you) - [Your analytics are lying to you](https://ankursethi.com/blog/your-analytics-are-lying-to-you/)
* [2026-07-23, 03:30:00](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 02:26:09](https://lobste.rs/s/fmyrgy/calm_technologies_excite_me) - [Calm technologies that excite me](https://abhi.now/blog/calm-technologies/)
* [2026-07-23, 02:09:50](https://lobste.rs/s/ap3z0l/john_c_dvorak_has_died) - [John C. Dvorak has died](http://oldvcr.blogspot.com/2026/07/john-c-dvorak-has-died.html)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-23, 01:54:48](https://lobste.rs/s/5nhto6/i_inspected_my_take_home_interview) - [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)
* [2026-07-23, 01:16:14](https://news.ycombinator.com/item?id=49015639) - [OpenAI’s accidental attack against Hugging Face is science fiction that happened](https://simonwillison.net/2026/Jul/22/openai-cyberattack/)
* [2026-07-23, 01:04:08](https://lobste.rs/s/ax914v/protecting_our_floss_commons_from_llms) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-22, 23:00:00](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Is Quietly Becoming a Subscriptions Company](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 21:33:12](https://lobste.rs/s/lv12lc/why_care_about_programming_languages) - [Why care about programming languages](https://ebellani.github.io/blog/2026/why-care-about-programming-languages/)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 14:16:44](https://news.ycombinator.com/item?id=49007221) - [The Beam Engine](https://glinscott.github.io/beam-engine/)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-21, 00:28:39](https://news.ycombinator.com/item?id=48986703) - [Quickly rewrite Git repository history](https://github.com/newren/git-filter-repo)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 20:51:31](https://news.ycombinator.com/item?id=48984715) - [Projects every RC live races and results](https://rc-replay.dev/lr/vmrc/r/6912053)
* [2026-07-20, 17:55:09](https://news.ycombinator.com/item?id=48982321) - [I could do that in a weekend (2016)](https://danluu.com/sounds-easy/)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
