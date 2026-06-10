# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Trojaned OpenSSH (in 2002)](http://miod.online.fr/software/openbsd/stories/trojan.html) - An intriguing revisit of a major security breach in the OpenSSH project from 2002 that impacted the open-source community.

* [How building an HTML-first site doubled our users overnight](https://mohkohn.co.uk/writing/html-first/) - A detailed recount of how focusing on an HTML-first approach led to increased user engagement and traffic.

* [17 bugs in 10 weeks from AI security scanning](https://lalitm.com/post/perfetto-security-bugs-ai/) - Insights into the effective use of AI for identifying security vulnerabilities in code.

* [A line-by-line translation of the OCaml runtime from C to Rust](https://discuss.ocaml.org/t/a-line-by-line-translation-of-the-ocaml-runtime-from-c-to-rust/18247) - A fascinating technical feat breaking down the OCaml runtime as a Rust implementation.

* [Grit: Rewriting Git in Rust with agents](https://blog.gitbutler.com/true-grit) - Investigating a Rust-powered reimagining of Git's functionality.

* [OpenCV 5 Is Here: The Biggest Leap in Years for Computer Vision](https://opencv.org/opencv-5/) - A deep dive into the enhancements brought by OpenCV 5, marking a milestone for computer vision advancements.

* [Alpine Linux 3.24.0 released](https://alpinelinux.org/posts/Alpine-3.24.0-released.html) - Announcing the release of the latest version of Alpine Linux, with improvements and new features.

## Space Exploration

* [NASA Announces Astronauts For Its Artemis III Mission](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The official announcement of astronauts participating in NASA's ambitious upcoming Artemis III lunar mission.

* [NASA's Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - A milestone in NASA's mission to explore the universe with the Nancy Grace Roman Space Telescope.

* [Russia's New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - Russia unveils its own ambitious space internet connectivity endeavor with the Rassvet satellite fleet.

## Artificial Intelligence

* [Rich Sutton on AI creativity and discovery](https://twitter.com/RichardSSutton/status/2061216087744946656) - Insights from leading AI researcher Rich Sutton on the future of AI in creativity and scientific discovery.

* [Cleaning up after AI rockstar developers](https://www.codingwithjesse.com/blog/rockstar-developers/) - Tackling the challenges of fixing issues caused by ambitious AI-focused developers.

* [Microsoft Hacked To Deliver Malware To Claude and Gemini Users](https://it.slashdot.org/story/26/06/09/1657218/microsoft-hacked-to-deliver-malware-to-claude-and-gemini-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An alarming report on Microsoft being used to distribute malware via AI services.

## Cybersecurity Concerns

* [CVE-2026-45447: Heap Use-After-Free in the OpenSSL PKCS7_verify() Function](https://openssl-library.org/news/vulnerabilities/#CVE-2026-45447) - A new critical vulnerability discovered in OpenSSL's PKCS7_verify() functionality.

* [New reCaptcha requires approved phones to pass](https://cybernews.com/privacy/google-qr-code-recaptcha-requires-approved-phone/) - Google's revised reCaptcha implementation now mandates pre-approved phones, sparking privacy concerns.

* [FCC Wants To Kill Burner Phones By Forcing Telecoms To Get All Customers' IDs](https://yro.slashdot.org/story/26/06/09/2026231/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - FCC proposes measures to eliminate untraceable burner phones by ensuring all carriers register customer information.

## Energy Innovations

* [Commonwealth Fusion Makes the Physics Case For Its 400 MW Reactor](https://hardware.slashdot.org/story/26/06/10/0319259/commonwealth-fusion-makes-the-physics-case-for-its-400-mw-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A promising exploration of the physics behind an innovative nuclear fusion reactor projected at 400 MW.

* [Mercedes-Benz starts large-scale production of electric axial flux motor](https://media.mercedes-benz.com/en/article/bebac2af-acdc-465a-9538-adb0bf3d8ccf) - A major breakthrough in automotive technology with Mercedes-Benz launching production of electric axial flux motors.

## Transportation and Infrastructure

* [All 9,300 Japanese train station, animated by the year it opened (1872–2026)](https://jivx.com/eki) - A visually engaging animation of Japan's train station history over time.

* [Datacenters May Face One-Year Ban In NY](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss) - Proposed legislation in New York aims to confront the growing environmental strain caused by data centers.

## Historical Reflections

* [The oldest surviving animated feature film at 100](https://www.bbc.com/culture/article/20260603-how-a-26-year-old-german-woman-made-the-worlds-oldest-surviving-animated-feature-film) - Exploring a century-old animated feature film and its significant cultural and historical impact.

* [The Floppy Disk Patent Was Granted Today In 1972 — When 80KB Took Up 8 Inches And Were Really Floppy](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss) - Observing the historical significance and limitations of a disk storage technology from five decades ago.

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

* [2026-06-10, 12:12:43](https://lobste.rs/s/ti42hu/trojaned_openssh_2002) - [Trojaned OpenSSH (in 2002)](http://miod.online.fr/software/openbsd/stories/trojan.html)
* [2026-06-10, 12:11:28](https://news.ycombinator.com/item?id=48475100) - [All 9,300 Japanese train station, animated by the year it opened (1872–2026)](https://jivx.com/eki)
* [2026-06-10, 11:51:24](https://lobste.rs/s/vlpi8y/macos_container_tool_v1_0_0_released) - [macOS container tool v1.0.0 released](https://github.com/apple/container)
* [2026-06-10, 11:25:00](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss) - [Russia&apos;s New ‘Starlink‑Style’ Rassvet Fleet Launches](https://soylentnews.org/article.pl?sid=26/06/09/1118255&amp;from=rss)
* [2026-06-10, 11:13:17](https://lobste.rs/s/esvncd/how_building_html_first_site_doubled_our) - [How building an HTML-first site doubled our users overnight](https://mohkohn.co.uk/writing/html-first/)
* [2026-06-10, 11:00:00](https://hardware.slashdot.org/story/26/06/10/0319259/commonwealth-fusion-makes-the-physics-case-for-its-400-mw-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Commonwealth Fusion Makes the Physics Case For Its 400 MW Reactor](https://hardware.slashdot.org/story/26/06/10/0319259/commonwealth-fusion-makes-the-physics-case-for-its-400-mw-reactor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 10:59:41](https://lobste.rs/s/5iuaxt/17_bugs_10_weeks_from_ai_security_scanning) - [17 bugs in 10 weeks from AI security scanning](https://lalitm.com/post/perfetto-security-bugs-ai/)
* [2026-06-10, 10:14:49](https://lobste.rs/s/drkeug/upcoming_breaking_changes_for_npm_v12) - [Upcoming breaking changes for npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/)
* [2026-06-10, 09:43:16](https://news.ycombinator.com/item?id=48473845) - [Show HN: macOS menu bar gauges for your Claude Code quota](https://github.com/grzegorz-raczek-unit8/claude-quota)
* [2026-06-10, 09:34:14](https://lobste.rs/s/p07gv1/new_recaptcha_requires_approved_phones) - [New reCaptcha requires approved phones to pass](https://cybernews.com/privacy/google-qr-code-recaptcha-requires-approved-phone/)
* [2026-06-10, 09:19:55](https://news.ycombinator.com/item?id=48473662) - [Port React Compiler to Rust](https://github.com/react/react/pull/36173)
* [2026-06-10, 08:29:48](https://lobste.rs/s/k85k6w/line_by_line_translation_ocaml_runtime) - [A line-by-line translation of the OCaml runtime from C to Rust](https://discuss.ocaml.org/t/a-line-by-line-translation-of-the-ocaml-runtime-from-c-to-rust/18247)
* [2026-06-10, 08:21:38](https://news.ycombinator.com/item?id=48473166) - [AWS Bedrock to require sharing data with Anthropic for Mythos and future models](https://news.ycombinator.com/item?id=48473166)
* [2026-06-10, 07:44:49](https://news.ycombinator.com/item?id=48472877) - [Mercedes‑Benz starts large‑scale production of electric axial flux motor](https://media.mercedes-benz.com/en/article/bebac2af-acdc-465a-9538-adb0bf3d8ccf)
* [2026-06-10, 07:00:00](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Announces Astronauts For Its Artemis III Mission](https://science.slashdot.org/story/26/06/10/0256248/nasa-announces-astronauts-for-its-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 06:35:00](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss) - [&apos;Please Do Not Vibe F--- Up This Software&apos;: Broken Backups Spark AI Coding Row in Rsync Project](https://soylentnews.org/article.pl?sid=26/06/08/123201&amp;from=rss)
* [2026-06-10, 05:32:16](https://lobste.rs/s/tdvu7a/blogging_with_llm_assistant) - [Blogging with an LLM assistant](https://vincent.bernat.ch/en/blog/2026-blogging-llm)
* [2026-06-10, 03:30:00](https://yro.slashdot.org/story/26/06/09/2026231/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Wants To Kill Burner Phones By Forcing Telecoms To Get All Customers&apos; IDs](https://yro.slashdot.org/story/26/06/09/2026231/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-10, 03:27:47](https://news.ycombinator.com/item?id=48471048) - [Vibe coding my way to a healthy family: Introducing Gamow Labs](https://www.ddmckinnon.com/2026/06/09/vibe-coding-my-way-to-a-healthy-family-introducing-gamow-labs/)
* [2026-06-10, 02:25:24](https://news.ycombinator.com/item?id=48470581) - [Rich Sutton on AI creativity and discovery](https://twitter.com/RichardSSutton/status/2061216087744946656)
* [2026-06-10, 01:53:00](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss) - [NASA&apos;s Nancy Grace Roman Space Telescope is Set to Launch on August 30](https://soylentnews.org/article.pl?sid=26/06/08/1134218&amp;from=rss)
* [2026-06-10, 01:44:13](https://news.ycombinator.com/item?id=48470248) - [German ruling declares Google liable for false answers in AI Overviews](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)
* [2026-06-10, 01:23:47](https://lobste.rs/s/f2fwny/if_claude_fable_stops_helping_you_you_ll) - [If Claude Fable stops helping you, you&apos;ll never know](https://jonready.com/blog/posts/claude-fable5-is-allowed-to-sabotage-your-app-if-youre-a-competitor.html)
* [2026-06-10, 01:08:08](https://lobste.rs/s/yg1xb2/cve_2026_45447_heap_use_after_free_openssl) - [CVE-2026-45447: Heap Use-After-Free in the OpenSSL PKCS7_verify() Function](https://openssl-library.org/news/vulnerabilities/#CVE-2026-45447)
* [2026-06-10, 00:29:01](https://news.ycombinator.com/item?id=48469658) - [macOS Container Machines](https://github.com/apple/container/blob/main/docs/container-machine.md)
* [2026-06-09, 23:00:00](https://tech.slashdot.org/story/26/06/09/2019231/us-labels-byd-baidu-alibaba-and-other-tech-giants-as-aiding-chinas-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Labels BYD, Baidu, Alibaba and Other Tech Giants As Aiding China&apos;s Military](https://tech.slashdot.org/story/26/06/09/2019231/us-labels-byd-baidu-alibaba-and-other-tech-giants-as-aiding-chinas-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 22:35:57](https://news.ycombinator.com/item?id=48468766) - [RIP software hackathons. Long live the hardware hackathon](https://blog.oscars.dev/posts/rip-software-hackathons-long-live-the-hardware-hackathon/)
* [2026-06-09, 22:01:15](https://news.ycombinator.com/item?id=48468370) - [Surprise, Pay $1000](https://forestwalk.ai/blog/surprise-blacksmith-costs/)
* [2026-06-09, 22:00:00](https://meta.slashdot.org/story/26/06/09/1958236/eu-orders-meta-to-open-whatsapp-to-rival-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Orders Meta To Open WhatsApp To Rival AI Chatbots](https://meta.slashdot.org/story/26/06/09/1958236/eu-orders-meta-to-open-whatsapp-to-rival-ai-chatbots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 21:19:11](https://news.ycombinator.com/item?id=48467896) - [If Claude Fable stops helping you, you&apos;ll never know](https://jonready.com/blog/posts/claude-fable5-is-allowed-to-sabotage-your-app-if-youre-a-competitor.html)
* [2026-06-09, 21:07:00](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss) - [Raspberry Pi&apos;s Profits Are Up. So is its DRAM Bill](https://soylentnews.org/article.pl?sid=26/06/08/1131238&amp;from=rss)
* [2026-06-09, 21:01:00](https://news.ycombinator.com/item?id=48467705) - [Upcoming breaking changes for npm v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/)
* [2026-06-09, 21:00:00](https://slashdot.org/story/26/06/09/1951259/anthropic-releases-claude-fable-a-safe-version-of-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Releases Claude Fable, a &apos;Safe&apos; Version of Mythos](https://slashdot.org/story/26/06/09/1951259/anthropic-releases-claude-fable-a-safe-version-of-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 20:56:40](https://lobste.rs/s/galkdh/grit_rewriting_git_rust_with_agents) - [Grit: rewriting Git in Rust with agents](https://blog.gitbutler.com/true-grit)
* [2026-06-09, 20:50:36](https://lobste.rs/s/g79vjn/alpine_linux_3_24_0_released) - [Alpine Linux 3.24.0 released](https://alpinelinux.org/posts/Alpine-3.24.0-released.html)
* [2026-06-09, 20:27:31](https://lobste.rs/s/secptg/understanding_embark_gnu_emacs_bit_some) - [Understanding Embark in GNU Emacs (a bit) and some &apos;stupid&apos; Embark tricks](https://utcc.utoronto.ca/~cks/space/blog/programming/EmacsUnderstandingEmbark)
* [2026-06-09, 20:00:00](https://it.slashdot.org/story/26/06/09/181245/high-severity-vulnerability-in-linux-caused-by-a-single-errant-character?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High-Severity Vulnerability In Linux Caused By a Single Errant Character](https://it.slashdot.org/story/26/06/09/181245/high-severity-vulnerability-in-linux-caused-by-a-single-errant-character?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 19:58:21](https://news.ycombinator.com/item?id=48466812) - [Grit: Rewriting Git in Rust with agents](https://blog.gitbutler.com/true-grit)
* [2026-06-09, 19:21:45](https://news.ycombinator.com/item?id=48466277) - [Ultrafast machine learning on FPGAs via Kolmogorov-Arnold Networks](https://aarushgupta.io/posts/kan-fpga/)
* [2026-06-09, 19:00:00](https://apple.slashdot.org/story/26/06/09/1749209/eu-says-decision-not-to-launch-siri-ai-in-europe-is-apples-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Says Decision Not to Launch Siri AI in Europe Is Apple&apos;s Alone](https://apple.slashdot.org/story/26/06/09/1749209/eu-says-decision-not-to-launch-siri-ai-in-europe-is-apples-alone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 18:45:59](https://news.ycombinator.com/item?id=48465675) - [CEOs who think AI replaces their employees are just bad CEOs](https://www.techdirt.com/2026/06/09/ceos-who-think-ai-replaces-their-employees-are-just-bad-ceos/)
* [2026-06-09, 18:00:00](https://tech.slashdot.org/story/26/06/09/1733200/meta-will-use-your-activity-on-other-websites-to-personalize-your-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Will Use Your Activity On Other Websites To Personalize Your Feeds](https://tech.slashdot.org/story/26/06/09/1733200/meta-will-use-your-activity-on-other-websites-to-personalize-your-feeds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 17:17:21](https://news.ycombinator.com/item?id=48464140) - [What it feels like to work with Mythos](https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos)
* [2026-06-09, 17:00:00](https://it.slashdot.org/story/26/06/09/1657218/microsoft-hacked-to-deliver-malware-to-claude-and-gemini-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hacked To Deliver Malware To Claude and Gemini Users](https://it.slashdot.org/story/26/06/09/1657218/microsoft-hacked-to-deliver-malware-to-claude-and-gemini-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 16:58:01](https://news.ycombinator.com/item?id=48463808) - [Claude Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)
* [2026-06-09, 16:40:11](https://lobste.rs/s/fpgqm0/open_letter_office_suite_users_just) - [An open letter to office suite users, just before the Euro-Office announcement](https://blog.documentfoundation.org/blog/2026/06/08/an-open-letter/)
* [2026-06-09, 16:32:50](https://lobste.rs/s/ncunjo/property_graphs) - [Property Graphs](https://www.postgresql.org/docs/19/ddl-property-graphs.html)
* [2026-06-09, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss) - [Canada&apos;s Next-Gen AWACS/Surveillance Planes Won&apos;t Be Coming From The USA](https://soylentnews.org/article.pl?sid=26/06/07/2331246&amp;from=rss)
* [2026-06-09, 16:05:42](https://lobste.rs/s/tgzdhf/are_we_harold_bloom) - [Are We Harold Bloom?](https://abner.page/post/are-we-harold-bloom/)
* [2026-06-09, 16:00:00](https://slashdot.org/story/26/06/08/2325249/nhs-prescribes-half-a-million-copilot-licenses-for-its-paperwork-headache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NHS Prescribes Half a Million Copilot Licenses For Its Paperwork Headache](https://slashdot.org/story/26/06/08/2325249/nhs-prescribes-half-a-million-copilot-licenses-for-its-paperwork-headache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 15:00:00](https://yro.slashdot.org/story/26/06/08/203200/uk-pm-gives-tech-firms-ultimatum-to-block-explicit-images-on-childrens-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK PM Gives Tech Firms Ultimatum To Block Explicit Images on Children&apos;s Phones](https://yro.slashdot.org/story/26/06/08/203200/uk-pm-gives-tech-firms-ultimatum-to-block-explicit-images-on-childrens-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 14:04:10](https://lobste.rs/s/cssoxa/arcan_10_years_online_obscurity) - [Arcan: 10 Years of Online Obscurity](https://arcan-fe.com/2026/06/02/arcan-10-years-of-online-obscurity/)
* [2026-06-09, 13:27:23](https://lobste.rs/s/oytnfw/catlantean_3d_making_graphics_like_it_s) - [Catlantean 3D - Making Graphics Like It&apos;s 1993](https://staniks.github.io/articles/catlantean-3d-blog-1/)
* [2026-06-09, 13:01:26](https://lobste.rs/s/srq2wf/only_bounds) - [Only Bounds](https://smallcultfollowing.com/babysteps/blog/2026/06/09/only-bounds/)
* [2026-06-09, 11:48:34](https://lobste.rs/s/pwmlvz/css_unavoidable_bad_parts) - [CSS: Unavoidable Bad Parts](https://matklad.github.io/2026/06/04/css-unavoidable-bad-parts.html)
* [2026-06-09, 11:32:00](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss) - [Code Reveals Meta Smart Glasses Can Use &apos;Faceprint&apos; Tracking, Raising Privacy Alarms](https://soylentnews.org/article.pl?sid=26/06/07/2330212&amp;from=rss)
* [2026-06-09, 11:29:27](https://lobste.rs/s/pfffbz/what_yahoo_killed_when_it_bought_maktoob) - [What Yahoo killed when it bought Maktoob](https://lr0.org/blog/p/yahoo/)
* [2026-06-09, 11:27:49](https://news.ycombinator.com/item?id=48459659) - [Test-case reducers are underappreciated debugging tools](https://tratt.net/laurie/blog/2026/test_case_reducers_are_underappreciated_debugging_tools.html)
* [2026-06-09, 11:01:23](https://lobste.rs/s/cebwpi/datatype_variable_font_turns_text_into) - [Datatype — variable font that turns text into charts](https://franktisellano.github.io/datatype/)
* [2026-06-09, 11:00:00](https://science.slashdot.org/story/26/06/08/2317255/tests-suggest-russian-satellites-can-jam-gps-on-a-continental-scale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tests Suggest Russian Satellites Can Jam GPS On a Continental Scale](https://science.slashdot.org/story/26/06/08/2317255/tests-suggest-russian-satellites-can-jam-gps-on-a-continental-scale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 10:55:01](https://lobste.rs/s/zwn4xe/test_case_reducers_are_underappreciated) - [Test-case Reducers Are Underappreciated Debugging Tools](https://tratt.net/laurie/blog/2026/test_case_reducers_are_underappreciated_debugging_tools.html)
* [2026-06-09, 07:04:13](https://lobste.rs/s/5hk3s6/decline_search_engines_is_opportunity) - [The Decline of Search Engines is an Opportunity](https://lewiscampbell.tech/blog/260609.html)
* [2026-06-09, 07:00:00](https://hardware.slashdot.org/story/26/06/08/235214/donut-labs-solid-state-battery-exposed-as-regular-li-ion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Donut Lab&apos;s &apos;Solid-State&apos; Battery Exposed As Regular Li-Ion](https://hardware.slashdot.org/story/26/06/08/235214/donut-labs-solid-state-battery-exposed-as-regular-li-ion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 06:50:00](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss) - [Datacenters May Face One-Year Ban In NY](https://soylentnews.org/article.pl?sid=26/06/07/2321211&amp;from=rss)
* [2026-06-09, 03:30:00](https://news.slashdot.org/story/26/06/08/2251201/severe-stress-on-oceans-as-rate-of-sea-level-rise-doubles-in-10-years-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Severe&apos; Stress On Oceans As Rate of Sea Level Rise Doubles In 10 Years, UN Warns](https://news.slashdot.org/story/26/06/08/2251201/severe-stress-on-oceans-as-rate-of-sea-level-rise-doubles-in-10-years-un-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-09, 02:32:38](https://lobste.rs/s/uvwcdo/cleaning_up_after_ai_rockstar_developers) - [Cleaning up after AI rockstar developers](https://www.codingwithjesse.com/blog/rockstar-developers/)
* [2026-06-09, 02:06:00](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss) - [How A USB-Connected Speaker Can Infect A PC Without Ever Being Touched](https://soylentnews.org/article.pl?sid=26/06/07/2319243&amp;from=rss)
* [2026-06-08, 21:21:00](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss) - [UK Exam Watchdog Frets Over Smart Specs Turning GCSEs Into Google Searches](https://soylentnews.org/article.pl?sid=26/06/07/1853208&amp;from=rss)
* [2026-06-08, 20:48:43](https://news.ycombinator.com/item?id=48451789) - [Hacking for Defense Stanford 2026 – Lessons Learned Presentations](https://steveblank.com/2026/06/08/g-for-defense-stanford-2026-lessons-learned-presentations/)
* [2026-06-08, 16:35:00](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss) - [Giant Data Center Plan Cut 50% Amid Protests - \&quot;We Pissed Off A Lot Of People\&quot;](https://soylentnews.org/article.pl?sid=26/06/06/1857242&amp;from=rss)
* [2026-06-08, 14:24:57](https://news.ycombinator.com/item?id=48445834) - [Lies we tell ourselves about email addresses](https://gitpush--force.com/commits/2026/06/lies-we-tell-ourselves-about-email/)
* [2026-06-08, 14:15:32](https://news.ycombinator.com/item?id=48445702) - [Who Runs Your Rust Future? Hands-On Intro to Async Rust](https://aibodh.com/posts/async-rust-chapter-1-hands-on-intro-to-async-rust/)
* [2026-06-08, 11:51:00](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss) - [Safety Officials Finally Have A Good Idea Of What A Big Rocket Explosion Can Do](https://soylentnews.org/article.pl?sid=26/06/06/1854248&amp;from=rss)
* [2026-06-08, 10:44:44](https://news.ycombinator.com/item?id=48443644) - [Reviving Papers with Code](https://paperswithcode.co/)
* [2026-06-08, 10:01:31](https://news.ycombinator.com/item?id=48443322) - [Premature Optimization Is Fun Sometimes](https://invlpg.com/posts/2025-06-19-premature-optimization.html)
* [2026-06-08, 09:05:29](https://news.ycombinator.com/item?id=48442932) - [Buy a train, bridge or tracks from the Swiss Railway](https://sbbresale.ch/)
* [2026-06-08, 07:07:00](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss) - [The Floppy Disk Patent Was Granted Today In 1972 — When 80KB Took Up 8 Inches And Were Really Floppy](https://soylentnews.org/article.pl?sid=26/06/06/1851230&amp;from=rss)
* [2026-06-08, 02:20:00](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss) - [AI Data Centers&apos; Extreme Memory Consumption Threatens Other Industries](https://soylentnews.org/article.pl?sid=26/06/06/1850206&amp;from=rss)
* [2026-06-07, 21:36:00](https://soylentnews.org/article.pl?sid=26/06/06/1848239&amp;from=rss) - [After 11 Years At Mars, NASA&apos;s MAVEN Spacecraft Went Out With A Whisper](https://soylentnews.org/article.pl?sid=26/06/06/1848239&amp;from=rss)
* [2026-06-07, 16:53:00](https://soylentnews.org/article.pl?sid=26/06/06/1843238&amp;from=rss) - [The 1N4148: The Signal Diode That Ended Up Everywhere ](https://soylentnews.org/article.pl?sid=26/06/06/1843238&amp;from=rss)
* [2026-06-07, 12:07:00](https://soylentnews.org/article.pl?sid=26/06/06/1338226&amp;from=rss) - [Small Modular Nuclear Reactor Reaches Criticality in First Test](https://soylentnews.org/article.pl?sid=26/06/06/1338226&amp;from=rss)
* [2026-06-07, 10:38:31](https://news.ycombinator.com/item?id=48433525) - [Magnetoelectric antennas could transform how underwater robots talk](https://newatlas.com/engineering/magnetoelectric-antennas-submarine-robots-communications/)
* [2026-06-07, 07:19:00](https://soylentnews.org/article.pl?sid=26/06/06/1335249&amp;from=rss) - [Anthropic Eyes an IPO as Big Tech&apos;s AI Cash Crunch Comes for Wall Street](https://soylentnews.org/article.pl?sid=26/06/06/1335249&amp;from=rss)
* [2026-06-07, 02:35:20](https://news.ycombinator.com/item?id=48431213) - [The oldest surviving animated feature film at 100](https://www.bbc.com/culture/article/20260603-how-a-26-year-old-german-woman-made-the-worlds-oldest-surviving-animated-feature-film)
* [2026-06-07, 02:31:00](https://soylentnews.org/article.pl?sid=26/06/06/1323219&amp;from=rss) - [Why Do Jets Use Generators Instead of Alternators?](https://soylentnews.org/article.pl?sid=26/06/06/1323219&amp;from=rss)
* [2026-06-06, 21:43:00](https://soylentnews.org/article.pl?sid=26/06/06/1157219&amp;from=rss) - [Bumblebees Show Advanced Problem-solving Skills in New Experiment ](https://soylentnews.org/article.pl?sid=26/06/06/1157219&amp;from=rss)
* [2026-06-06, 18:15:04](https://news.ycombinator.com/item?id=48427468) - [More Molly Guards](https://unsung.aresluna.org/more-molly-guards/)
* [2026-06-06, 16:59:00](https://soylentnews.org/article.pl?sid=26/06/05/1150257&amp;from=rss) - [US Firms Still Dominate Chip Subsidies](https://soylentnews.org/article.pl?sid=26/06/05/1150257&amp;from=rss)
* [2026-06-06, 12:10:00](https://soylentnews.org/article.pl?sid=26/06/05/1147236&amp;from=rss) - [How Human Error Became a Weapon Against Large Language Models](https://soylentnews.org/article.pl?sid=26/06/05/1147236&amp;from=rss)
* [2026-06-06, 07:25:00](https://soylentnews.org/article.pl?sid=26/06/05/1142243&amp;from=rss) - [Blue Origin CEO Says New Glenn Will Fly Again Before the Year Ends](https://soylentnews.org/article.pl?sid=26/06/05/1142243&amp;from=rss)
* [2026-06-06, 06:02:28](https://news.ycombinator.com/item?id=48421858) - [OpenCV 5 Is Here: The Biggest Leap in Years for Computer Vision](https://opencv.org/opencv-5/)
* [2026-06-06, 02:37:00](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss) - [Illinois Passes Landmark AI Regulation Law](https://soylentnews.org/article.pl?sid=26/06/05/1139233&amp;from=rss)
