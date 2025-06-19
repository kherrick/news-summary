# [News Summary](https://kherrick.github.io/news-summary/)

## Major Tech and Data Breaches

* [The 16-billion-record data breach that no one’s ever heard of](https://cybernews.com/security/billions-credentials-exposed-infostealers-data-leak/) ([comments](https://lobste.rs/s/6sbyyj/16_billion_record_data_breach_no_one_s_ever))

* [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss))

## AI and Machine Learning Innovations

* [Midjourney Launches Its First AI Video Generation Model, V1](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [MIT Experiment Finds ChatGPT-Assisted Writing Weakens Student Brain Connectivity and Memory](https://science.slashdot.org/story/25/06/19/089201/mit-experiment-finds-chatgpt-assisted-writing-weakens-student-brain-connectivity-and-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/19/089201/mit-experiment-finds-chatgpt-assisted-writing-weakens-student-brain-connectivity-and-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Programming and Software Development

* [Introduction to competitive programming in Haskell](https://byorgey.github.io/blog/posts/2025/06/10/comprog-hs-intro.html) ([comments](https://lobste.rs/s/ibk13a/introduction_competitive_programming))

* [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/) ([comments](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like))

* [Analysing Rust crates for weekend (hobbyist) vs weekday (working-dev) downloads](https://boydkane.com/projects/crates-download-ratio) ([comments](https://lobste.rs/s/mwdh7t/analysing_rust_crates_for_weekend))

## Tech Industry Updates

* [Amazon Orders Employees To Relocate To Seattle and Other Hubs](https://slashdot.org/story/25/06/19/0535202/amazon-orders-employees-to-relocate-to-seattle-and-other-hubs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/19/0535202/amazon-orders-employees-to-relocate-to-seattle-and-other-hubs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Texas Instruments To Invest $60 Billion To Make Semiconductors In US](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44314759))

## Fascinating Scientific Discoveries

* [Geochronology supports LGM age for human tracks at White Sands, New Mexico](https://www.science.org/doi/10.1126/sciadv.adv4951) ([comments](https://news.ycombinator.com/item?id=44319585))

* [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss))

## Creative and Unconventional Projects

* [Elliptic curves as art](https://elliptic-curves.art/) ([comments](https://lobste.rs/s/qc3ywx/elliptic_curves_as_art))

* [Show HN: A DOS-like hobby OS written in Rust and x86 assembly](https://github.com/krustowski/rou2exOS) ([comments](https://news.ycombinator.com/item?id=44318588))

* [Painting with Math: A Gentle Study of Raymarching](https://blog.maximeheckel.com/posts/painting-with-math-a-gentle-study-of-raymarching/) ([comments](https://news.ycombinator.com/item?id=44303194))

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

* [2025-06-19, 15:54:51](https://lobste.rs/s/6sbyyj/16_billion_record_data_breach_no_one_s_ever) - [The 16-billion-record data breach that no one’s ever heard of](https://cybernews.com/security/billions-credentials-exposed-infostealers-data-leak/)
* [2025-06-19, 15:48:01](https://lobste.rs/s/1xjwe5/programming_considered_harmful) - [Programming Considered Harmful](https://flownet.com/ron/papers/pch.html)
* [2025-06-19, 15:27:44](https://news.ycombinator.com/item?id=44319585) - [Geochronology supports LGM age for human tracks at White Sands, New Mexico](https://www.science.org/doi/10.1126/sciadv.adv4951)
* [2025-06-19, 15:25:24](https://lobste.rs/s/ibk13a/introduction_competitive_programming) - [Introduction to competitive programming in Haskell](https://byorgey.github.io/blog/posts/2025/06/10/comprog-hs-intro.html)
* [2025-06-19, 15:22:00](https://yro.slashdot.org/story/25/06/19/0711241/iran-tells-citizens-to-delete-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran Tells Citizens To Delete WhatsApp](https://yro.slashdot.org/story/25/06/19/0711241/iran-tells-citizens-to-delete-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 15:17:33](https://lobste.rs/s/jtrrow/dynamic_graph_approach_immediate_cycle) - [A Dynamic Graph Approach to Immediate Cycle Collection](https://dl.acm.org/doi/10.1145/3735950.3735953)
* [2025-06-19, 14:42:03](https://news.ycombinator.com/item?id=44319144) - [Posit floating point numbers: thin triangles and other tricks (2019)](http://marc-b-reynolds.github.io/math/2019/02/06/Posit1.html)
* [2025-06-19, 14:40:00](https://slashdot.org/story/25/06/19/0535202/amazon-orders-employees-to-relocate-to-seattle-and-other-hubs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Orders Employees To Relocate To Seattle and Other Hubs](https://slashdot.org/story/25/06/19/0535202/amazon-orders-employees-to-relocate-to-seattle-and-other-hubs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 14:13:15](https://news.ycombinator.com/item?id=44318874) - [Curved-Crease Origami Sculptures](https://erikdemaine.org/curved/)
* [2025-06-19, 14:00:00](https://science.slashdot.org/story/25/06/19/089201/mit-experiment-finds-chatgpt-assisted-writing-weakens-student-brain-connectivity-and-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Experiment Finds ChatGPT-Assisted Writing Weakens Student Brain Connectivity and Memory](https://science.slashdot.org/story/25/06/19/089201/mit-experiment-finds-chatgpt-assisted-writing-weakens-student-brain-connectivity-and-memory?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 13:38:57](https://news.ycombinator.com/item?id=44318588) - [Show HN: A DOS-like hobby OS written in Rust and x86 assembly](https://github.com/krustowski/rou2exOS)
* [2025-06-19, 13:14:32](https://news.ycombinator.com/item?id=44318420) - [Microsoft wants you to buy a new computer. Make your current one secure again?](https://endof10.org/)
* [2025-06-19, 13:01:16](https://news.ycombinator.com/item?id=44318305) - [The Scheme That Broke the Texas Lottery](https://www.newyorker.com/news/letter-from-the-southwest/the-scheme-that-broke-the-texas-lottery)
* [2025-06-19, 13:00:00](https://news.slashdot.org/story/25/06/18/2323209/new-us-visa-rules-will-force-foreign-students-to-unlock-social-media-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New US Visa Rules Will Force Foreign Students To Unlock Social Media Profiles](https://news.slashdot.org/story/25/06/18/2323209/new-us-visa-rules-will-force-foreign-students-to-unlock-social-media-profiles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 12:00:14](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like) - [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 10:27:52](https://lobste.rs/s/jnhsdh/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://stackoverflow.az1.qualtrics.com/jfe/form/SV_1MNG2CYTY2AzkAm)
* [2025-06-19, 10:22:06](https://news.ycombinator.com/item?id=44317180) - [Guess I&apos;m a Rationalist Now](https://scottaaronson.blog/?p=8908)
* [2025-06-19, 10:10:27](https://lobste.rs/s/cjnt2y/rewriting_kafka_rust_async_insights) - [Rewriting Kafka in Rust Async: Insights and Lessons Learned in Rust](https://wangjunfei.com/2025/06/18/Rewriting-Kafka-in-Rust-Async-Insights-and-Lessons-Learned/)
* [2025-06-19, 10:00:00](https://games.slashdot.org/story/25/06/19/0053207/steam-beta-enables-proton-on-linux-for-all-titles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam Beta Enables Proton On Linux For All Titles](https://games.slashdot.org/story/25/06/19/0053207/steam-beta-enables-proton-on-linux-for-all-titles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 09:46:43](https://news.ycombinator.com/item?id=44317012) - [Show HN: Claude Code Usage Monitor – real-time tracker to dodge usage cut-offs](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor)
* [2025-06-19, 09:31:14](https://news.ycombinator.com/item?id=44316920) - [Base44 sells to Wix for $80M cash](https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/)
* [2025-06-19, 09:29:28](https://news.ycombinator.com/item?id=44316909) - [From LLM to AI Agent: What&apos;s the Real Journey Behind AI System Development?](https://www.codelink.io/blog/post/ai-system-development-llm-rag-ai-workflow-agent)
* [2025-06-19, 08:52:49](https://lobste.rs/s/qc3ywx/elliptic_curves_as_art) - [Elliptic curves as art](https://elliptic-curves.art/)
* [2025-06-19, 08:39:22](https://lobste.rs/s/sk0zq9/liberux_nexx_interview_with_liberux) - [Liberux Nexx: An interview with Liberux about their made-in-EU OSHW Linux Phone](https://linmob.net/liberux-nexx-an-interview-with-liberux/)
* [2025-06-19, 07:26:04](https://lobste.rs/s/6wndbg/files_repository_file_generation_flake) - [files: In-repository file generation flake-parts module](https://github.com/mightyiam/files)
* [2025-06-19, 07:10:03](https://lobste.rs/s/tmwtbd/more_frontend_web_tricks) - [More Frontend Web Tricks](https://kaiwenwang.com/writing/more-frontend-web-tricks)
* [2025-06-19, 07:00:00](https://tech.slashdot.org/story/25/06/19/0046242/silicon-valley-execs-join-the-army-as-officers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley Execs Join the Army As Officers](https://tech.slashdot.org/story/25/06/19/0046242/silicon-valley-execs-join-the-army-as-officers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 06:37:07](https://lobste.rs/s/blwshw/charmbracelet_fang_cli_starter_kit) - [charmbracelet/fang: The CLI starter kit](https://github.com/charmbracelet/fang)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 04:49:32](https://news.ycombinator.com/item?id=44315529) - [SpaceX Starship 36 Anomaly](https://twitter.com/NASASpaceflight/status/1935548909805601020)
* [2025-06-19, 04:02:27](https://news.ycombinator.com/item?id=44315321) - [Elliptic Curves as Art](https://elliptic-curves.art/)
* [2025-06-19, 03:30:00](https://tech.slashdot.org/story/25/06/18/2317216/scammers-use-google-ads-to-inject-phony-help-lines-on-apple-microsoft-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scammers Use Google Ads To Inject Phony Help Lines On Apple, Microsoft Sites](https://tech.slashdot.org/story/25/06/18/2317216/scammers-use-google-ads-to-inject-phony-help-lines-on-apple-microsoft-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 02:42:15](https://news.ycombinator.com/item?id=44314977) - [The Zed Debugger Is Here](https://zed.dev/blog/debugger)
* [2025-06-19, 01:50:47](https://news.ycombinator.com/item?id=44314759) - [TI to invest $60B to manufacture foundational semiconductors in the U.S.](https://www.ti.com/about-ti/newsroom/news-releases/2025/texas-instruments-plans-to-invest-more-than--60-billion-to-manufacture-billions-of-foundational-semiconductors-in-the-us.html)
* [2025-06-19, 01:20:00](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Instruments To Invest $60 Billion To Make Semiconductors In US](https://news.slashdot.org/story/25/06/18/2310223/texas-instruments-to-invest-60-billion-to-make-semiconductors-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 00:41:00](https://yro.slashdot.org/story/25/06/18/1951212/major-oil-companies-face-first-climate-death-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Oil Companies Face First &apos;Climate Death&apos; Lawsuit](https://yro.slashdot.org/story/25/06/18/1951212/major-oil-companies-face-first-climate-death-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-19, 00:33:21](https://news.ycombinator.com/item?id=44314423) - [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-19, 00:07:26](https://lobste.rs/s/7l446f/should_we_design_for_iffy_internet) - [Should we design for iffy internet?](https://bytes.zone/posts/should-we-design-for-iffy-internet/)
* [2025-06-19, 00:02:00](https://mobile.slashdot.org/story/25/06/18/1945255/apple-posts-strongest-two-month-iphone-growth-since-pandemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Posts Strongest Two-Month iPhone Growth Since Pandemic](https://mobile.slashdot.org/story/25/06/18/1945255/apple-posts-strongest-two-month-iphone-growth-since-pandemic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 23:31:32](https://lobste.rs/s/s0inoo/accessibility_programming_doesn_t_feel) - [Accessibility Programming Doesn&apos;t Feel Accessible](https://acidiclight.dev/blog/accessibility-does-not-feel-accessible/)
* [2025-06-18, 23:20:00](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Launches Its First AI Video Generation Model, V1](https://slashdot.org/story/25/06/18/1935234/midjourney-launches-its-first-ai-video-generation-model-v1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 23:17:10](https://news.ycombinator.com/item?id=44314085) - [Show HN: Unregistry – “docker push” directly to servers without a registry](https://github.com/psviderski/unregistry)
* [2025-06-18, 22:53:08](https://lobste.rs/s/tuze84/s7_scheme) - [s7 scheme](https://ccrma.stanford.edu/software/snd/snd/s7.html)
* [2025-06-18, 22:40:00](https://it.slashdot.org/story/25/06/18/1930216/austrian-government-agrees-on-plan-to-allow-monitoring-of-secure-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austrian Government Agrees On Plan To Allow Monitoring of Secure Messaging](https://it.slashdot.org/story/25/06/18/1930216/austrian-government-agrees-on-plan-to-allow-monitoring-of-secure-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 22:00:00](https://yro.slashdot.org/story/25/06/18/1921253/napster-and-sonos-sued-for-millions-in-unpaid-music-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Napster and Sonos Sued For Millions In Unpaid Music Royalties](https://yro.slashdot.org/story/25/06/18/1921253/napster-and-sonos-sued-for-millions-in-unpaid-music-royalties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 21:45:46](https://news.ycombinator.com/item?id=44313550) - [The Missing 11th of the Month (2015)](https://drhagen.com/blog/the-missing-11th-of-the-month/)
* [2025-06-18, 21:39:09](https://lobste.rs/s/1nyzfj/it_s_true_we_don_t_care_about_accessibility) - [It’s True, “We” Don’t Care About Accessibility on Linux](https://tesk.page/2025/06/18/its-true-we-dont-care-about-accessibility-on-linux/)
* [2025-06-18, 21:21:26](https://news.ycombinator.com/item?id=44313379) - [Bento: A Steam Deck in a Keyboard](https://github.com/lunchbox-computer/bento)
* [2025-06-18, 21:20:00](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Now Supports Passkeys](https://yro.slashdot.org/story/25/06/18/1917222/facebook-now-supports-passkeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 21:08:20](https://lobste.rs/s/5moehg/quick_notes_on_brief_agentic_coding) - [Quick notes on a brief agentic coding experience](https://olano.dev/blog/agentic-coding-experience/)
* [2025-06-18, 20:40:45](https://news.ycombinator.com/item?id=44313107) - [In-Memory C++ Leap in Blockchain Analysis](https://caudena.com/the-in-memory-c-leap-in-blockchain-analysis/)
* [2025-06-18, 20:40:00](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo&apos;s Robotaxis Are Coming Back to New York City](https://tech.slashdot.org/story/25/06/18/1912202/waymos-robotaxis-are-coming-back-to-new-york-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-18, 20:16:53](https://lobste.rs/s/ncg3v3/lisp_icing_cake) - [Lisp: Icing or Cake?](https://dthompson.us/posts/lisp-icing-or-cake.html)
* [2025-06-18, 19:38:23](https://lobste.rs/s/qgmjfe/gcc_glibc_stack_unwinding_relocations) - [GCC, glibc, stack unwinding and relocations – A war story](https://blog.sergiodj.net/posts/gcc-glibc-stack-unwinding-relocations-bug/)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 17:57:32](https://lobste.rs/s/rwbtwd/zed_debugger_is_here) - [The Zed Debugger is Here](https://zed.dev/blog/debugger)
* [2025-06-18, 17:26:22](https://lobste.rs/s/mwdh7t/analysing_rust_crates_for_weekend) - [Analysing Rust crates for weekend (hobbyist) vs weekday (working-dev) downloads](https://boydkane.com/projects/crates-download-ratio)
* [2025-06-18, 16:26:35](https://news.ycombinator.com/item?id=44311241) - [The unreasonable effectiveness of fuzzing for porting programs](https://rjp.io/blog/2025-06-17-unreasonable-effectiveness-of-fuzzing)
* [2025-06-18, 15:49:53](https://news.ycombinator.com/item?id=44310944) - [My iPhone 8 Refuses to Die: Now It&apos;s a Solar-Powered Vision OCR Server](https://terminalbytes.com/iphone-8-solar-powered-vision-ocr-server/)
* [2025-06-18, 15:22:49](https://lobste.rs/s/boq7tt/cock_li_email_provider_data_leak_from) - [Cock.li email provider data leak from roundcube](https://mail.cock.li/)
* [2025-06-18, 15:06:53](https://lobste.rs/s/lalc7r/moving_on_from_nix) - [Moving on from Nix](https://carlosbecker.com/posts/bye-nix/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 14:05:58](https://lobste.rs/s/8t6uxp/server_doesn_t_render_anything) - [The Server Doesn&apos;t Render Anything](https://unplannedobsolescence.com/blog/the-server-doesnt-render/)
* [2025-06-18, 12:33:49](https://news.ycombinator.com/item?id=44309320) - [Show HN: Workout.cool – Open-source fitness coaching platform](https://github.com/Snouzy/workout-cool)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 04:24:56](https://lobste.rs/s/imjzlb/why_i_won_t_use_ai) - [Why I Won&apos;t Use AI](https://agentultra.com/blog/why-i-wont-use-ai/index.html)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 19:52:17](https://news.ycombinator.com/item?id=44303194) - [Painting with Math: A Gentle Study of Raymarching](https://blog.maximeheckel.com/posts/painting-with-math-a-gentle-study-of-raymarching/)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 15:49:10](https://news.ycombinator.com/item?id=44300554) - [CPU-Based Layout Design for Picker-to-Parts Pallet Warehouses](https://arxiv.org/abs/2506.04266)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 13:03:48](https://news.ycombinator.com/item?id=44298673) - [A Visual Guide to Genome Editors](https://www.asimov.press/p/a-visual-guide-to-genome-editors)
* [2025-06-17, 12:03:01](https://news.ycombinator.com/item?id=44298087) - [Finding Dead Websites](https://www.marginalia.nu/log/a_122_dead_websites/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 17:45:49](https://news.ycombinator.com/item?id=44291681) - [Show HN: TrendFi – I built AI trading signals that self-optimize](https://trend.fi)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 13:23:05](https://news.ycombinator.com/item?id=44289276) - [3D printable 6\&quot; f/5 compact travel telescope model](https://www.printables.com/model/1325533-smallest-telescope-kit-for-150750)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 09:38:00](https://news.ycombinator.com/item?id=44287926) - [Researchers are now vacuuming DNA from the air](https://www.sciencedaily.com/releases/2025/06/250603114822.htm)
* [2025-06-16, 07:02:40](https://news.ycombinator.com/item?id=44287248) - [Getting Started Strudel](https://strudel.cc/workshop/getting-started/)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
* [2025-06-15, 20:12:00](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss) - [Nematode Tower Power](https://soylentnews.org/article.pl?sid=25/06/15/0153218&amp;from=rss)
* [2025-06-15, 15:26:00](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss) - [\&quot;Impossible\&quot; Particle That Hit Earth May Have Been Dark Matter](https://soylentnews.org/article.pl?sid=25/06/15/0338222&amp;from=rss)
* [2025-06-15, 10:41:00](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss) - [RIP: Bill Atkinson, Co-Creator Of Apple Lisa And Mac](https://soylentnews.org/article.pl?sid=25/06/14/1623235&amp;from=rss)
* [2025-06-15, 05:57:00](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss) - [Navy Backs Right to Repair After $13B Carrier Goes Half-Fed](https://soylentnews.org/article.pl?sid=25/06/14/1549226&amp;from=rss)
* [2025-06-15, 01:13:00](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss) - [Stay Hungry,  Stay Foolish ... 20 Years on](https://soylentnews.org/article.pl?sid=25/06/14/1546217&amp;from=rss)
