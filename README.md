# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Open Source

* [Couple pay >$800k for a gene-editing therapy for their daughter. She died.](https://www.science.org/content/article/exclusive-death-girl-chinese-gene-editing-trial-was-never-made-public) ([comments](https://news.ycombinator.com/item?id=49027892))

* [The arguments against open source AI are bad](https://tombedor.dev/arguments-against-open-source-ai-are-very-bad) ([comments](https://news.ycombinator.com/item?id=49024643))

* [The first known runaway AI agent - or a very bad marketing stunt?](https://martinalderson.com/posts/huggingface-openai-exploit/) ([comments](https://lobste.rs/s/nsnb4j/first_known_runaway_ai_agent_very_bad))

* [Startup founders urge U.S. government not to shut off Chinese open weight AI](https://www.politico.com/news/2026/07/22/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai-01008992) ([comments](https://news.ycombinator.com/item?id=49023016))

* [AI Companies Are Trying to Hide a Staggering Amount of Debt](https://futurism.com/artificial-intelligence/ai-companies-hide-debt-off-balance-sheet) ([comments](https://news.ycombinator.com/item?id=49020999))

## Technology and Innovation

* [NASA's Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&from=rss) ([comments](https://lobste.rs/s/oscswl/agent_shell_0_63_updates))

* [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/) ([comments](https://lobste.rs/s/dxaogf/silent_replacement_trusted_macos_app))

* [Hybrid-Electric Aircraft Engine Targeting 30% Fuel Efficiency](https://www.rtx.com/news/news-center/2026/07/21/rtxs-pratt-whitney-canada-advances-hybrid-electric-technology-development) ([comments](https://news.ycombinator.com/item?id=49021868))

* [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16) ([comments](https://news.ycombinator.com/item?id=49021597))

## Digital Sovereignty and Antitrust

* [EU Fines Google $1 Billion For Breaking Digital Antitrust Regulations](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=49028037))

* [Airbus Migrating 70 Critical Apps From AWS To France's Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&from=rss) ([comments](https://news.ycombinator.com/item?id=48989065))

## Gaming and Entertainment

* [Amazon Is Bringing Games to Prime Video](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows))

* [Sony's Decision To Ditch Discs Was Practically Inevitable, Data Shows](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows))

## Science and Discoveries

* [Four Young Mathematicians Awarded the 2026 Fields Medals](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=49022137))

* [Astronomers may have found the first exomoon](https://www.eso.org/public/news/eso2610/) ([comments](https://news.ycombinator.com/item?id=49021783))

* [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way's Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/23/023217&from=rss))

## Consumer Concerns and Privacy

* [Namecheap Gave My Account to an Unverified Third Party Just Because They Asked](https://news.ycombinator.com/item?id=49028037) ([comments](https://news.ycombinator.com/item?id=49028037))

* [Selfie for sign-in: a new, easy way to access your Google Account](https://blog.google/innovation-and-ai/technology/safety-security/selfie-video-sign-in/) ([comments](https://blog.google/innovation-and-ai/technology/safety-security/selfie-video-sign-in/))

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

* [2026-07-23, 21:20:10](https://lobste.rs/s/badu44/fil_c_garbage_memory_safety_out) - [Fil-C: Garbage In, Memory Safety Out](https://www.youtube.com/watch?v=5F-2Y1LPRek)
* [2026-07-23, 21:10:09](https://lobste.rs/s/x3x2aw/you_should_selfhost_your_mail_2026) - [You should selfhost your mail (in 2026)](https://blog.haschek.at/2026/you-should-selfhost-your-mail.html)
* [2026-07-23, 21:05:29](https://news.ycombinator.com/item?id=49028037) - [Namecheap Gave My Account to an Unverified Third Party Just Because They Asked](https://news.ycombinator.com/item?id=49028037)
* [2026-07-23, 21:00:00](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Fines Google $1 Billion For Breaking Digital Antitrust Regulations](https://search.slashdot.org/story/26/07/23/2034235/eu-fines-google-1-billion-for-breaking-digital-antitrust-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 20:54:31](https://lobste.rs/s/btplc7/jolt_running_clojure_on_chez_scheme) - [Jolt: running Clojure on Chez Scheme](https://yogthos.net/posts/2026-07-02-jolt.html)
* [2026-07-23, 20:52:19](https://news.ycombinator.com/item?id=49027892) - [Couple pay &gt;$800k for a gene-editing therapy for their daughter. She died.](https://www.science.org/content/article/exclusive-death-girl-chinese-gene-editing-trial-was-never-made-public)
* [2026-07-23, 20:00:00](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Is Bringing Games to Prime Video](https://games.slashdot.org/story/26/07/23/1830257/amazon-is-bringing-games-to-prime-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 19:53:40](https://lobste.rs/s/auk6ft/improving_std_simd_swizzle_dyn) - [Improving std::simd::swizzle_dyn](https://shnatsel.github.io/improving-std-simd-swizzle-dyn/)
* [2026-07-23, 19:26:01](https://news.ycombinator.com/item?id=49026810) - [Show HN: Echo – Fable-level results at 1/3 the cost using open-weight models](https://news.ycombinator.com/item?id=49026810)
* [2026-07-23, 19:00:34](https://news.ycombinator.com/item?id=49026482) - [Selfie for sign-in: a new, easy way to access your Google Account](https://blog.google/innovation-and-ai/technology/safety-security/selfie-video-sign-in/)
* [2026-07-23, 19:00:00](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony&apos;s Decision To Ditch Discs Was Practically Inevitable, Data Shows](https://games.slashdot.org/story/26/07/23/1825217/sonys-decision-to-ditch-discs-was-practically-inevitable-data-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 18:50:40](https://lobste.rs/s/dto1e4/software_should_work_worked) - [Software Should Work Worked](https://isaacvando.com/software-should-work-worked)
* [2026-07-23, 18:42:17](https://lobste.rs/s/oscswl/agent_shell_0_63_updates) - [agent-shell 0.63 updates](https://xenodium.com/agent-shell-0-63-updates)
* [2026-07-23, 18:23:50](https://news.ycombinator.com/item?id=49025984) - [Building on ATProto](https://lukekanies.com/writing/building-on-atproto/)
* [2026-07-23, 18:13:03](https://news.ycombinator.com/item?id=49025831) - [A solid-state “atomic channel” for separating rare earth elements](https://pme.uchicago.edu/news-events/news/cleaner-route-purifying-rare-earth-elements)
* [2026-07-23, 18:11:46](https://news.ycombinator.com/item?id=49025812) - [Geekbench 7](https://www.geekbench.com/blog/2026/07/geekbench-7/)
* [2026-07-23, 18:04:14](https://lobste.rs/s/kq9oh7/prompt_caching_agents) - [Prompt Caching In Agents](https://earendil.com/posts/prompt-caching/)
* [2026-07-23, 18:00:00](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a First, Apple Maps Navigation To Be Embedded In Ford UEV Pickups](https://tech.slashdot.org/story/26/07/23/1626218/in-a-first-apple-maps-navigation-to-be-embedded-in-ford-uev-pickups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 17:00:00](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Young Mathematicians Awarded the 2026 Fields Medals](https://science.slashdot.org/story/26/07/23/1616208/four-young-mathematicians-awarded-the-2026-fields-medals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 16:58:59](https://lobste.rs/s/gtxmc4/pimpl_idiom_c_26_std_indirect_type) - [The PImpl idiom and the C++26 std::indirect type](https://mariusbancila.ro/blog/2026/07/23/the-pimpl-idiom-and-the-cpp26-stdindirect-type/)
* [2026-07-23, 16:53:33](https://news.ycombinator.com/item?id=49024691) - [What happened to TheNumbers.com](https://stephenfollows.com/p/what-just-happened-to-thenumberscom-should-worry-us-all)
* [2026-07-23, 16:49:57](https://news.ycombinator.com/item?id=49024643) - [The arguments against open source AI are bad](https://tombedor.dev/arguments-against-open-source-ai-are-very-bad/)
* [2026-07-23, 16:48:38](https://news.ycombinator.com/item?id=49024620) - [Launch HN: Screenpipe (YC S26) – Record how you work and turn that into agents](https://news.ycombinator.com/item?id=49024620)
* [2026-07-23, 16:26:34](https://lobste.rs/s/uy8soh/how_ai_is_changing_open_source) - [How AI Is Changing Open Source](https://enblog.eischmann.cz/2026/07/23/how-ai-is-changing-open-source/)
* [2026-07-23, 16:14:57](https://lobste.rs/s/6kkxbx/how_mvcc_transactions_work_rocksdb) - [How MVCC and Transactions Work in RocksDB](https://artem.krylysov.com/blog/2026/07/23/how-mvcc-and-transactions-work-in-rocksdb/)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 16:01:02](https://news.ycombinator.com/item?id=49023809) - [JEP 540: Simple JSON API (Now in Incubator)](https://openjdk.org/jeps/540)
* [2026-07-23, 16:00:00](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 15:42:40](https://news.ycombinator.com/item?id=49023427) - [Show HN: OneCLI – OSS credential gateway that keeps secrets out of AI agents](https://github.com/onecli/onecli)
* [2026-07-23, 15:33:26](https://lobste.rs/s/gpqa52/everyone_should_know_simd) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-23, 15:18:40](https://news.ycombinator.com/item?id=49023016) - [Startup founders urge U.S. government not to shut off Chinese open weight AI](https://www.politico.com/news/2026/07/22/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai-01008992)
* [2026-07-23, 15:11:37](https://news.ycombinator.com/item?id=49022911) - [Show HN: Palmier Pro – Open-source macOS video editor built for AI](https://github.com/palmier-io/palmier-pro)
* [2026-07-23, 15:00:00](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover First Known Transmissible Cancer In Fish](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 14:55:32](https://news.ycombinator.com/item?id=49022663) - [Learn WebGPU for C++](https://eliemichel.github.io/LearnWebGPU/)
* [2026-07-23, 14:53:34](https://news.ycombinator.com/item?id=49022634) - [Learn OpenGL, extensive tutorial resource for learning Modern OpenGL](https://learnopengl.com/)
* [2026-07-23, 14:24:43](https://news.ycombinator.com/item?id=49022152) - [Writing by hand is good for your brain](https://nealstephenson.substack.com/p/writing-by-hand-is-good-for-your)
* [2026-07-23, 14:23:51](https://news.ycombinator.com/item?id=49022137) - [Fields Medals 2026](https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026)
* [2026-07-23, 14:17:40](https://news.ycombinator.com/item?id=49022038) - [Software rendering in 500 lines of bare C++](https://haqr.eu/tinyrenderer/)
* [2026-07-23, 14:07:38](https://news.ycombinator.com/item?id=49021868) - [Hybrid-Electric Aicraft Engine Targeting 30% Fuel Efficiency](https://www.rtx.com/news/news-center/2026/07/21/rtxs-pratt-whitney-canada-advances-hybrid-electric-technology-development)
* [2026-07-23, 14:02:45](https://news.ycombinator.com/item?id=49021786) - [Emacs Is a Lispboard](https://en.andros.dev/blog/06bfd107/emacs-is-a-lispboard/)
* [2026-07-23, 14:02:24](https://news.ycombinator.com/item?id=49021783) - [Astronomers may have found the first exomoon](https://www.eso.org/public/news/eso2610/)
* [2026-07-23, 13:51:36](https://news.ycombinator.com/item?id=49021597) - [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16)
* [2026-07-23, 13:37:15](https://lobste.rs/s/dxaogf/silent_replacement_trusted_macos_app) - [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/)
* [2026-07-23, 13:09:10](https://news.ycombinator.com/item?id=49020999) - [AI Companies Are Trying to Hide a Staggering Amount of Debt](https://futurism.com/artificial-intelligence/ai-companies-hide-debt-off-balance-sheet)
* [2026-07-23, 13:01:28](https://lobste.rs/s/mwelmm/on_accountability) - [On Accountability](https://addisoncrump.info/research/on-accountability/)
* [2026-07-23, 12:12:50](https://lobste.rs/s/p4xo2i/software_rendering_500_lines_bare_c) - [Software rendering in 500 lines of bare C++](https://ssloy.github.io/tinyrenderer/)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 11:00:00](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verisign Is Finally Bringing&lt;nobr&gt; &lt;wbr&gt;&lt;/nobr&gt;.web Domains To the Internet](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 10:16:17](https://lobste.rs/s/nsnb4j/first_known_runaway_ai_agent_very_bad) - [The first known runaway AI agent - or a very bad marketing stunt?](https://martinalderson.com/posts/huggingface-openai-exploit/)
* [2026-07-23, 09:47:37](https://lobste.rs/s/gb2xwu/spatial_languages_writing_code_2d) - [Spatial languages: writing code in 2D](https://shukla.io/blog/2026-07/cccx.html)
* [2026-07-23, 09:30:45](https://lobste.rs/s/p1jpv1/justif_knuth_plass_justification) - [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/)
* [2026-07-23, 07:00:00](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Private Mission Launches To Extend Life of Out-of-Gas Communication Satellites](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 04:51:37](https://lobste.rs/s/n0hq44/your_analytics_are_lying_you) - [Your analytics are lying to you](https://ankursethi.com/blog/your-analytics-are-lying-to-you/)
* [2026-07-23, 03:30:00](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 02:26:09](https://lobste.rs/s/fmyrgy/calm_technologies_excite_me) - [Calm technologies that excite me](https://abhi.now/blog/calm-technologies/)
* [2026-07-23, 02:09:50](https://lobste.rs/s/ap3z0l/john_c_dvorak_has_died) - [John C. Dvorak has died](http://oldvcr.blogspot.com/2026/07/john-c-dvorak-has-died.html)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-23, 01:54:48](https://lobste.rs/s/5nhto6/i_inspected_my_take_home_interview) - [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)
* [2026-07-23, 01:04:08](https://lobste.rs/s/ax914v/protecting_our_floss_commons_from_llms) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-22, 23:00:00](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Is Quietly Becoming a Subscriptions Company](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 22:00:00](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 27 Code Suggests Apple Could Restrict Leased Devices After Missed Payments](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 21:33:12](https://lobste.rs/s/lv12lc/why_care_about_programming_languages) - [Why care about programming languages](https://ebellani.github.io/blog/2026/why-care-about-programming-languages/)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:00:00](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Team Publishes 432 CVEs In Two Days](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 20:00:00](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 19:00:00](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Army Is Burning Through Its AI Tokens](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 15:01:49](https://lobste.rs/s/53g8f7/pypi_releases_now_reject_new_files_after) - [PyPI releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 14:39:10](https://news.ycombinator.com/item?id=49007574) - [Show HN: Trifle – Open-source analytics that stores answers, not events](https://trifle.io/)
* [2026-07-22, 14:16:44](https://news.ycombinator.com/item?id=49007221) - [The Beam Engine](https://glinscott.github.io/beam-engine/)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 08:48:18](https://lobste.rs/s/gqdvdt/so_reddit_has_decided_plain_html_is_unsafe) - [So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 07:10:49](https://news.ycombinator.com/item?id=48989065) - [Escape Analysis in Go: Stack vs. Heap Allocations Explained](https://blog.jetbrains.com/go/2026/07/20/escape-analysis/)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 20:54:56](https://news.ycombinator.com/item?id=48984760) - [Converting Files into Minecraft Worlds](https://wuemeli.com/blog/sulfur-part-1/)
* [2026-07-20, 20:16:00](https://news.ycombinator.com/item?id=48984312) - [Hitchcock and Herrmann: The Friendship and Film Scores That Changed Cinema](https://www.lrb.co.uk/the-paper/v48/n13/jonathan-coe/where-was-the-drum-kit)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 13:59:49](https://news.ycombinator.com/item?id=48978989) - [Meta Garbage Collection: Using OCaml&apos;s GC to GC Rust](https://soteria-tools.com/blog/meta-garbage-collection)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
