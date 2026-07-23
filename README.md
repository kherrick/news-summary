# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A group of startup founders asks the Trump administration to reconsider policies that could severely limit collaboration on AI technologies with Chinese firms. [Comments](https://news.ycombinator.com/item?id=49023016).

* [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16) - A new milestone in military AI as DARPA and the U.S. Air Force successfully test an AI-controlled F-16 fighter jet. [Comments](https://news.ycombinator.com/item?id=49021597).

* [AI Companies Are Trying to Hide a Staggering Amount of Debt](https://futurism.com/artificial-intelligence/ai-companies-hide-debt-off-balance-sheet) - Investigations reveal questionable financial practices by AI companies to conceal debt. [Comments](https://news.ycombinator.com/item?id=49020999).

## Science and Innovation

* [Researchers Discover First Known Transmissible Cancer In Fish](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking discovery demonstrates cancer transmissibility in fish species for the first time. [Comments](https://news.ycombinator.com/item?id=49022838).

* [Astronomers may have found the first exomoon](https://www.eso.org/public/news/eso2610/) - Researchers explore evidence for what could be the first exomoon discovered outside our solar system. [Comments](https://news.ycombinator.com/item?id=49021783).

* [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - Astronomers uncover sugar molecules near the galactic center, hinting at possible origins of life. [Comments](https://news.ycombinator.com/item?id=49022663).

## Energy and Sustainability

* [UK households free to install plug-in balcony solar panels from end of August](https://www.theguardian.com/money/2026/jul/23/uk-households-free-install-plug-in-balcony-solar-panels) - The UK government announces changes allowing households to adopt small-scale solar solutions more easily. [Comments](https://news.ycombinator.com/item?id=49023291).

* [Hybrid-Electric Aircraft Engine Targeting 30% Fuel Efficiency](https://www.rtx.com/news/news-center/2026/07/21/rtxs-pratt-whitney-canada-advances-hybrid-electric-technology-development) - Pratt & Whitney Canada develops a game-changing hybrid-electric aircraft engine. [Comments](https://news.ycombinator.com/item?id=49021868).

## Open Source and Development Tools

* [Learn WebGPU for C++](https://eliemichel.github.io/LearnWebGPU/) - A comprehensive resource for learning WebGPU programming in C++. [Comments](https://news.ycombinator.com/item?id=49022663).

* [Software rendering in 500 lines of bare C++](https://haqr.eu/tinyrenderer/) - Insights into creating software renderers with minimal code. [Comments](https://news.ycombinator.com/item?id=49022038).

* [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html) - Challenges and strategies for guarding open-source projects against exploitation by large language models. [Comments](https://news.ycombinator.com/item?id=49015639).

## Miscellaneous Discoveries

* [The first known runaway AI agent - or a very bad marketing stunt?](https://martinalderson.com/posts/huggingface-openai-exploit/) - Discussion arises around rumors of a rogue AI agent discovered by OpenAI and HuggingFace. [Comments](https://lobste.rs/s/nsnb4j/first_known_runaway_ai_agent_very_bad).

* [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - A misconfigured NTP server brings time chaos to Australian mobile networks. [Comments](https://news.ycombinator.com/item?id=49015123).

* [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A historic Pan Am crash site has been located after decades of exploration efforts.

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

* [2026-07-23, 16:00:00](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Founders Urge Trump Not to Shut Off Chinese Open Weight AI](https://slashdot.org/story/26/07/23/0623233/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 15:45:51](https://news.ycombinator.com/item?id=49023486) - [Free way to get your data out of ChatGPT Business accounts](https://github.com/Conradqh/scrapemychats)
* [2026-07-23, 15:35:33](https://news.ycombinator.com/item?id=49023291) - [UK households free to install plug-in balcony solar panels from end of August](https://www.theguardian.com/money/2026/jul/23/uk-households-free-install-plug-in-balcony-solar-panels)
* [2026-07-23, 15:33:26](https://lobste.rs/s/gpqa52/everyone_should_know_simd) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-23, 15:18:40](https://news.ycombinator.com/item?id=49023016) - [Startup founders urge Trump not to shut off Chinese open weight AI](https://www.politico.com/news/2026/07/22/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai-01008992)
* [2026-07-23, 15:16:31](https://news.ycombinator.com/item?id=49022990) - [Ask HN: Is there a website that tracks excessive writes to SSDs in OS/app betas?](https://news.ycombinator.com/item?id=49022990)
* [2026-07-23, 15:05:44](https://news.ycombinator.com/item?id=49022838) - [Writing fingerprint analysis of responses reveals Kimi&apos;s similarity to Claude](https://typebulb.com/u/lab/you-re-relatively-right/full)
* [2026-07-23, 15:02:27](https://news.ycombinator.com/item?id=49022790) - [NerdLens: Mirror your computer with cardboard VR](https://github.com/ThatXliner/NerdLens)
* [2026-07-23, 15:00:00](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover First Known Transmissible Cancer In Fish](https://science.slashdot.org/story/26/07/23/0610239/researchers-discover-first-known-transmissible-cancer-in-fish?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 14:55:45](https://news.ycombinator.com/item?id=49022668) - [Encryption and Globalization 15 Years Later: E2EE and the \&quot;Going Dark\&quot; Debate](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6959699)
* [2026-07-23, 14:55:32](https://news.ycombinator.com/item?id=49022663) - [Learn WebGPU for C++](https://eliemichel.github.io/LearnWebGPU/)
* [2026-07-23, 14:54:09](https://news.ycombinator.com/item?id=49022644) - [Vulkan Tutorial](https://vulkan-tutorial.com/)
* [2026-07-23, 14:53:34](https://news.ycombinator.com/item?id=49022634) - [Learn OpenGL, extensive tutorial resource for learning Modern OpenGL](https://learnopengl.com/)
* [2026-07-23, 14:40:30](https://news.ycombinator.com/item?id=49022412) - [How much energy do data centers and artificial intelligence use?](https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use)
* [2026-07-23, 14:37:58](https://lobste.rs/s/wbgmem/beyond_single_number_evaluating) - [Beyond a Single Number: Evaluating Quantized Models for Deployment](https://byteshape.com/blogs/Evaluating-Quantized-Models/)
* [2026-07-23, 14:37:54](https://news.ycombinator.com/item?id=49022371) - [Show HN: Whetuu – a zero-config cross-shell prompt written in Zig](https://yamafaktory.github.io/whetuu/)
* [2026-07-23, 14:32:53](https://news.ycombinator.com/item?id=49022302) - [Show HN: macOS menu-bar manager for SSH port forwards](https://github.com/lx2026/RelayBar)
* [2026-07-23, 14:31:26](https://news.ycombinator.com/item?id=49022284) - [Show HN: Remux – an open-source tmux workspace designed for iPhone](https://github.com/h3nock/remux)
* [2026-07-23, 14:24:43](https://news.ycombinator.com/item?id=49022152) - [Writing by hand is good for your brain](https://nealstephenson.substack.com/p/writing-by-hand-is-good-for-your)
* [2026-07-23, 14:23:51](https://news.ycombinator.com/item?id=49022137) - [Fields Medals 2026](https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026)
* [2026-07-23, 14:17:40](https://news.ycombinator.com/item?id=49022038) - [Software rendering in 500 lines of bare C++](https://haqr.eu/tinyrenderer/)
* [2026-07-23, 14:07:38](https://news.ycombinator.com/item?id=49021868) - [Hybrid-Electric Aicraft Engine Targeting 30% Fuel Efficiency](https://www.rtx.com/news/news-center/2026/07/21/rtxs-pratt-whitney-canada-advances-hybrid-electric-technology-development)
* [2026-07-23, 14:02:24](https://news.ycombinator.com/item?id=49021783) - [Astronomers may have found the first exomoon](https://www.eso.org/public/news/eso2610/)
* [2026-07-23, 13:55:10](https://news.ycombinator.com/item?id=49021647) - [Brow6el: A full-featured web browser for the terminal using Chromium](https://tangled.org/janantos.tngl.sh/brow6el)
* [2026-07-23, 13:51:36](https://news.ycombinator.com/item?id=49021597) - [DARPA, U.S. Air Force fly AI-controlled F-16](https://www.darpa.mil/news/2026/darpa-us-air-force-fly-ai-controlled-f-16)
* [2026-07-23, 13:49:17](https://news.ycombinator.com/item?id=49021569) - [What happens when the information runs out](https://blog.jimgrey.net/2026/06/30/what-happens-when-the-information-runs-out/)
* [2026-07-23, 13:37:15](https://lobste.rs/s/dxaogf/silent_replacement_trusted_macos_app) - [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/)
* [2026-07-23, 13:36:15](https://news.ycombinator.com/item?id=49021361) - [Silent Replacement of Trusted macOS App Executables](https://mysk.blog/2026/07/23/macos-overwrite-app-executables/)
* [2026-07-23, 13:09:10](https://news.ycombinator.com/item?id=49020999) - [AI Companies Are Trying to Hide a Staggering Amount of Debt](https://futurism.com/artificial-intelligence/ai-companies-hide-debt-off-balance-sheet)
* [2026-07-23, 13:01:28](https://lobste.rs/s/mwelmm/on_accountability) - [On Accountability](https://addisoncrump.info/research/on-accountability/)
* [2026-07-23, 12:12:50](https://lobste.rs/s/p4xo2i/software_rendering_500_lines_bare_c) - [Software rendering in 500 lines of bare C++](https://ssloy.github.io/tinyrenderer/)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 11:00:00](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verisign Is Finally Bringing&lt;nobr&gt; &lt;wbr&gt;&lt;/nobr&gt;.web Domains To the Internet](https://tech.slashdot.org/story/26/07/23/0542238/verisign-is-finally-bringing-web-domains-to-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 10:16:17](https://lobste.rs/s/nsnb4j/first_known_runaway_ai_agent_very_bad) - [The first known runaway AI agent - or a very bad marketing stunt?](https://martinalderson.com/posts/huggingface-openai-exploit/)
* [2026-07-23, 09:47:37](https://lobste.rs/s/gb2xwu/spatial_languages_writing_code_2d) - [Spatial languages: writing code in 2D](https://shukla.io/blog/2026-07/cccx.html)
* [2026-07-23, 09:31:22](https://lobste.rs/s/urhpbn/wanix_wasm_native_unix_sandboxing_for_web) - [Wanix — Wasm-native Unix sandboxing for the web](https://wanix.dev/)
* [2026-07-23, 09:30:45](https://lobste.rs/s/p1jpv1/justif_knuth_plass_justification) - [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/)
* [2026-07-23, 07:00:00](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Private Mission Launches To Extend Life of Out-of-Gas Communication Satellites](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 05:50:21](https://lobste.rs/s/wh1vv3/pip_26_2_only_deps_solves_16_years_app) - [Pip 26.2: –only-deps solves 16 years of app deployment hacks](https://jamesoclaire.com/2026/07/23/pip-26-2-only-deps-solves-16-years-of-app-deployment-hacks/)
* [2026-07-23, 05:40:20](https://news.ycombinator.com/item?id=49017344) - [Cruller: Bun&apos;s Zig Runtime, Continued on Zig 0.16](https://ziggit.dev/t/cruller-buns-zig-runtime-continued-on-zig-0-16/16734)
* [2026-07-23, 04:51:37](https://lobste.rs/s/n0hq44/your_analytics_are_lying_you) - [Your analytics are lying to you](https://ankursethi.com/blog/your-analytics-are-lying-to-you/)
* [2026-07-23, 04:02:57](https://lobste.rs/s/wwelib/what_rose_petals_teach_us_about_induction) - [What Rose Petals Teach Us about Induction](https://www.oranlooney.com/post/rose-petals/)
* [2026-07-23, 03:30:00](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 02:26:09](https://lobste.rs/s/fmyrgy/calm_technologies_excite_me) - [Calm technologies that excite me](https://abhi.now/blog/calm-technologies/)
* [2026-07-23, 02:09:50](https://lobste.rs/s/ap3z0l/john_c_dvorak_has_died) - [John C. Dvorak has died](http://oldvcr.blogspot.com/2026/07/john-c-dvorak-has-died.html)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-23, 01:54:48](https://lobste.rs/s/5nhto6/i_inspected_my_take_home_interview) - [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)
* [2026-07-23, 01:16:14](https://news.ycombinator.com/item?id=49015639) - [OpenAI’s accidental attack against Hugging Face is science fiction that happened](https://simonwillison.net/2026/Jul/22/openai-cyberattack/)
* [2026-07-23, 01:04:08](https://lobste.rs/s/ax914v/protecting_our_floss_commons_from_llms) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-22, 23:00:00](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Is Quietly Becoming a Subscriptions Company](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 22:00:00](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 27 Code Suggests Apple Could Restrict Leased Devices After Missed Payments](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 21:33:17](https://lobste.rs/s/mush3s/taking_ocaml_eio_for_spin) - [Taking OCaml and Eio for a spin](https://mattjhall.co.uk/posts/taking-ocaml-eio-for-a-spin.html)
* [2026-07-22, 21:33:12](https://lobste.rs/s/lv12lc/why_care_about_programming_languages) - [Why care about programming languages](https://ebellani.github.io/blog/2026/why-care-about-programming-languages/)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:00:00](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Team Publishes 432 CVEs In Two Days](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 20:24:10](https://lobste.rs/s/tltlwf/refluxfs_linux_kernel_local_privilege) - [RefluXFS: A Linux Kernel Local Privilege Escalation to Root in XFS (CVE-2026-64600)](https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600)
* [2026-07-22, 20:00:00](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 19:00:00](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Army Is Burning Through Its AI Tokens](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 18:00:00](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Announces Xbox Backward Compatibility For PC](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 17:00:00](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy Z Fold 8 Announced to Compete With Future iPhone Fold](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 16:00:00](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG To Ban Residential Proxies From Smart TV Apps](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 15:01:49](https://lobste.rs/s/53g8f7/pypi_releases_now_reject_new_files_after) - [PyPI releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 15:00:00](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Takes On Slack and GitHub With New AI Workplace Platform &apos;Buzz&apos;](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 12:39:57](https://lobste.rs/s/tsp3fq/unranked_systemd_crawls) - [Unranked, systemd, crawls](https://www.marginalia.nu/log/a_138_systemdocker/)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 11:00:00](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long Presumed Dead, a Thriving Coral Reef Is Discovered in West Africa](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 10:00:55](https://lobste.rs/s/gkcjic/simd_for_collision) - [SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)
* [2026-07-22, 09:11:49](https://lobste.rs/s/pa54mh/log_is_non_monotonic_php_lua) - [log is non-monotonic in PHP and Lua](https://purplesyringa.moe/blog/log-is-non-monotonous-in-php-and-lua/)
* [2026-07-22, 08:48:18](https://lobste.rs/s/gqdvdt/so_reddit_has_decided_plain_html_is_unsafe) - [So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 05:56:08](https://lobste.rs/s/ny0yzm/lg_ban_residential_proxies_from_smart_tv) - [LG to Ban Residential Proxies from Smart TV Apps](https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 17:51:57](https://news.ycombinator.com/item?id=48995712) - [The Unity CLI: manage Unity from your terminal](https://unity.com/blog/meet-the-unity-cli)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-20, 23:30:31](https://news.ycombinator.com/item?id=48986223) - [The Telegarden (1995-2004)](https://goldberg.berkeley.edu/garden/)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 13:19:26](https://news.ycombinator.com/item?id=48968010) - [OpenStreetMap: Admin_level for All Countries](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dadministrative#Table_:_Admin_level_for_all_countries)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
