# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Health Advances

* [People with Severe Type 1 Diabetes are Cured in Small Trial of New Drug](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/22/0317248?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - A groundbreaking study highlights a potential cure for severe Type 1 diabetes using a novel drug.

* [The Models Were Right! Astronomers Locate Universe's 'Missing' Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/06/21/064247?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Astronomers confirm theoretical models by detecting the elusive 'missing' matter in the universe.

## Technology and Innovation

* [Good at the Job, Bad at the Interview: Time to Rethink Hiring](https://www.linkedin.com/pulse/good-job-bad-interview-time-rethink-hiring-christopher-robertson-jdnie) ([comments](https://lobste.rs/s/nxwegm/good_at_job_bad_at_interview_time_rethink)) - A compelling case for reforming traditional hiring practices to better accommodate diverse skill sets.

* [Unexpected Security Footguns in Go's Parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/) ([comments](https://lobste.rs/s/8ahj8b/unexpected_security_footguns_go_s)) - An insightful piece exposing hidden vulnerabilities in Go's parsing ecosystem.

## Cutting-Edge Computing

* [Sound As Pure Form: Music Language Inspired by Supercollider, APL, and Forth](https://github.com/lfnoise/sapf) ([comments](https://news.ycombinator.com/item?id=44342731)) - Introducing a music language that uses the foundational ideas of computer programming.

* [B Compiler Written in Crust](https://github.com/tsoding/b) ([comments](https://lobste.rs/s/lgum1v/b_compiler_written_crust)) - Highlights the creation of a B programming language compiler developed in Crust.

## Historical and Cultural Explorations

* [See Jane 128 by Arktronics Run (Featuring Magic Desk, 3-Plus-1 and the Thomson MO5)](http://oldvcr.blogspot.com/2025/06/see-jane-128-by-arktronics-run.html) ([comments](https://lobste.rs/s/ecsykp/see_jane_128_by_arktronics_run_featuring)) - A look back at retro computing with Arktronics' classic systems.

* [Gwada Negative: French Scientists Find New Blood Type in Woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html) ([comments](https://news.ycombinator.com/item?id=44335517)) - Discovery of a novel blood type introduces new possibilities for medical science.

## Global and Political Events

* [USA Bombs Iran's Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) ([comments](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)) - A report covering an escalation in geopolitical tensions.

* [German Government Moves Closer to Ditching Microsoft: "We're Done With Teams!"](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)) - Germany takes steps toward open-source alternatives to proprietary platforms.

## Entertainment and Lifestyle

* [YouTube Is Hiding An Excellent, Official High-Speed Pac-Man Mod In Plain Sight](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Featuring a little-known treasure for gaming enthusiasts on YouTube.

* [LaborBerlin: State-of-the-Art 16mm Projector](https://www.filmlabs.org/wiki/en/meetings_projects/spectral/laborberlin16mmprojector/start) ([comments](https://news.ycombinator.com/item?id=44340386)) - Reviving the artistry of analog film projection with cutting-edge techniques.

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

* [2025-06-22, 06:00:20](https://lobste.rs/s/flzrp1/basic_facts_about_gpus) - [Basic facts about GPUs](https://damek.github.io/random/basic-facts-about-gpus/)
* [2025-06-22, 05:05:07](https://news.ycombinator.com/item?id=44343840) - [Linux on the Behringer X32 [video]](https://www.youtube.com/watch?v=6CfLC5xVy90)
* [2025-06-22, 04:34:00](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People with Severe Type 1 Diabetes are Cured in Small Trial of New Drug](https://science.slashdot.org/story/25/06/22/0317248/people-with-severe-type-1-diabetes-are-cured-in-small-trial-of-new-drug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 04:28:22](https://lobste.rs/s/obalic/announcing_logtape_1_0_0) - [Announcing LogTape 1.0.0](https://hackers.pub/@hongminhee/2025/announcing-logtape-1-0)
* [2025-06-22, 04:15:00](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss) - [Man’s Health Crashes After Getting Donated Kidney](https://soylentnews.org/article.pl?sid=25/06/21/137201&amp;from=rss)
* [2025-06-22, 03:00:00](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss) - [USA Bombs Iran&apos;s Nuclear Sites](https://soylentnews.org/politics/article.pl?sid=25/06/22/0239226&amp;from=rss)
* [2025-06-22, 02:51:03](https://news.ycombinator.com/item?id=44342977) - [TPU (Tensor Processing Unit) Deep Dive](https://henryhmko.github.io/posts/tpu/tpu.html)
* [2025-06-22, 02:46:23](https://lobste.rs/s/lgum1v/b_compiler_written_crust) - [B compiler written in Crust](https://github.com/tsoding/b)
* [2025-06-22, 02:17:51](https://news.ycombinator.com/item?id=44342731) - [Sound As Pure Form: Music Language Inspired by Supercollider, APL, and Forth](https://github.com/lfnoise/sapf)
* [2025-06-22, 01:34:00](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Your Car&apos;s Touchscreen Is More Dangerous Than Your Phone](https://tech.slashdot.org/story/25/06/22/0044222/why-your-cars-touchscreen-is-more-dangerous-than-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-22, 00:00:16](https://news.ycombinator.com/item?id=44341639) - [U.S. bombs Iranian nuclear sites](https://www.bbc.co.uk/news/live/ckg3rzj8emjt)
* [2025-06-21, 23:44:25](https://lobste.rs/s/ecsykp/see_jane_128_by_arktronics_run_featuring) - [See Jane 128 by Arktronics run (featuring Magic Desk, 3-Plus-1 and the Thomson MO5)](http://oldvcr.blogspot.com/2025/06/see-jane-128-by-arktronics-run.html)
* [2025-06-21, 23:39:00](https://lobste.rs/s/mrwcem/bind_loose_reference_2020) - [To Bind and Loose a Reference (2020)](https://thephd.dev/to-bind-and-loose-a-reference-optional)
* [2025-06-21, 23:32:00](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss) - [Scientists Once Hoarded Pre-Nuclear Steel; Now We&apos;re Hoarding Pre-AI Content](https://soylentnews.org/article.pl?sid=25/06/21/1225217&amp;from=rss)
* [2025-06-21, 23:26:00](https://it.slashdot.org/story/25/06/21/2324244/ceos-have-started-warning-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Have Started Warning: AI is Coming For Your Job](https://it.slashdot.org/story/25/06/21/2324244/ceos-have-started-warning-ai-is-coming-for-your-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 22:31:11](https://lobste.rs/s/ynhp4q/application_first_media_over_quic) - [Application First - Media over QUIC](https://quic.video/blog/application-first)
* [2025-06-21, 22:30:23](https://lobste.rs/s/toboca/adding_linear_time_lookbehinds_re2) - [Adding linear-time lookbehinds to RE2](https://systemf.epfl.ch/blog/re2-lookbehinds/)
* [2025-06-21, 22:10:00](https://science.slashdot.org/story/25/06/21/2147214/casino-lights-could-be-warping-your-brain-to-take-risks-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Casino Lights Could Be Warping Your Brain To Take Risks, Scientists Warn](https://science.slashdot.org/story/25/06/21/2147214/casino-lights-could-be-warping-your-brain-to-take-risks-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 21:30:35](https://lobste.rs/s/stgeyk/rhapsody_os_installing_apple_s_lost_x86_os) - [Rhapsody OS: Installing Apple’s Lost x86 OS from 1998 on a 3.4 Ghz i7 CPU &amp; SSD](https://www.youtube.com/watch?v=uE6qp94InBM)
* [2025-06-21, 21:10:00](https://tech.slashdot.org/story/25/06/21/046247/bluesky-isnt-dying---and-theres-a-larger-ecosystem-growing-around-its-open-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BlueSky Isn&apos;t Dying - and There&apos;s a Larger Ecosystem Growing Around Its Open Protocol](https://tech.slashdot.org/story/25/06/21/046247/bluesky-isnt-dying---and-theres-a-larger-ecosystem-growing-around-its-open-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 20:08:30](https://news.ycombinator.com/item?id=44340386) - [LaborBerlin: State-of-the-Art 16mm Projector](https://www.filmlabs.org/wiki/en/meetings_projects/spectral/laborberlin16mmprojector/start)
* [2025-06-21, 19:34:00](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What are the Carbon Costs of Asking an AI a Question?](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 18:57:34](https://lobste.rs/s/nlivz4/balatro_for_nintendo_e_reader) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 18:34:00](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Invested in EV Battery Plants. Now They May Be Stranded.](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 18:21:27](https://news.ycombinator.com/item?id=44339596) - [AI is ushering in a &apos;tiny team&apos; era](https://www.bloomberg.com/news/articles/2025-06-20/ai-is-ushering-in-the-tiny-team-era-in-silicon-valley)
* [2025-06-21, 17:34:00](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Models Were Right!&apos; Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 17:09:35](https://news.ycombinator.com/item?id=44339076) - [AllTracker: Efficient Dense Point Tracking at High Resolution](https://alltracker.github.io/)
* [2025-06-21, 16:58:16](https://lobste.rs/s/nxwegm/good_at_job_bad_at_interview_time_rethink) - [Good at the Job, Bad at the Interview: Time to Rethink Hiring](https://www.linkedin.com/pulse/good-job-bad-interview-time-rethink-hiring-christopher-robertson-jdnie)
* [2025-06-21, 16:50:05](https://lobste.rs/s/bgm76q/about_plasma_s_x11_session) - [About Plasma’s X11 session](https://pointieststick.com/2025/06/21/about-plasmas-x11-session/)
* [2025-06-21, 16:34:00](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Shot To Stop HIV: MIT&apos;s Bold Vaccine Breakthrough](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 16:02:24](https://news.ycombinator.com/item?id=44338562) - [Tell HN: Beware confidentiality agreements that act as lifetime non competes](https://news.ycombinator.com/item?id=44338562)
* [2025-06-21, 15:34:00](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Deploys Multiple Claude Agents for &apos;Research&apos; Tool - Says Coding is Less Parallelizable](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 15:10:52](https://lobste.rs/s/cwxos5/remaking_celeste_s_lighting) - [Remaking Celeste&apos;s Lighting](https://noelberry.ca/posts/celeste_lighting/)
* [2025-06-21, 14:38:02](https://lobste.rs/s/gqrepd/trip_report_june_2025_iso_c_standards) - [Trip report: June 2025 ISO C++ standards meeting](https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/)
* [2025-06-21, 14:34:00](https://tech.slashdot.org/story/25/06/21/018232/bug-hits-some-threads-users-their-words-echoed-by-all-other-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bug Hits Some Threads Users:  Their Words Echoed by All Other Users](https://tech.slashdot.org/story/25/06/21/018232/bug-hits-some-threads-users-their-words-echoed-by-all-other-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 14:04:20](https://lobste.rs/s/ladobm/my_website_is_one_binary) - [my website is one binary](https://j3s.sh/thought/my-website-is-one-binary.html)
* [2025-06-21, 13:48:49](https://lobste.rs/s/sv6nzd/writing_basic_linux_device_driver_when) - [Writing a basic Linux device driver when you know nothing about Linux drivers or USB](https://crescentro.se/posts/writing-drivers/)
* [2025-06-21, 13:00:00](https://slashdot.org/story/25/06/21/0251208/intel-will-outsource-marketing-to-accenture-and-ai-laying-off-its-own-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Outsource Marketing To Accenture and AI, Laying Off Its Own Workers](https://slashdot.org/story/25/06/21/0251208/intel-will-outsource-marketing-to-accenture-and-ai-laying-off-its-own-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 12:01:38](https://lobste.rs/s/4bn3cy/why_computational_reproducibility) - [Why computational reproducibility matters](https://blog.khinsen.net/posts/2025/06/20/computational-reproducibility.html)
* [2025-06-21, 10:39:21](https://news.ycombinator.com/item?id=44336381) - [Show HN: MMOndrian](https://mmondrian.com/)
* [2025-06-21, 10:23:04](https://lobste.rs/s/pfwzfa/open_dylan_2025_1_open_dylan_release) - [Open Dylan 2025.1 - Open Dylan Release](https://opendylan.org/release-notes/2025.1.html)
* [2025-06-21, 10:01:57](https://lobste.rs/s/8ahj8b/unexpected_security_footguns_go_s) - [Unexpected security footguns in Go&apos;s parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/)
* [2025-06-21, 10:00:00](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Is Hiding An Excellent, Official High-Speed Pac-Man Mod In Plain Sight](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 09:27:08](https://lobste.rs/s/lwtxev/hare_0_25_2_released) - [Hare 0.25.2 released](https://harelang.org/blog/2025-06-21-hare-0.25.2-released/)
* [2025-06-21, 09:23:21](https://news.ycombinator.com/item?id=44336015) - [Scaling our observability platform by embracing wide events and replacing OTel](https://clickhouse.com/blog/scaling-observability-beyond-100pb-wide-events-replacing-otel)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 08:57:21](https://lobste.rs/s/5zj5e9/cosmoe_beos_class_library_on_top_wayland) - [Cosmoe: BeOS Class Library on top of Wayland](https://cosmoe.org/index.html)
* [2025-06-21, 08:10:50](https://news.ycombinator.com/item?id=44335664) - [uBlock Origin Lite Beta for Safari iOS](https://testflight.apple.com/join/JjTcThrV)
* [2025-06-21, 07:38:42](https://news.ycombinator.com/item?id=44335517) - [&apos;Gwada negative&apos;: French scientists find new blood type in woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html)
* [2025-06-21, 07:00:00](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Macron Says Europe Must Become &apos;Space Power&apos; Again](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 06:29:00](https://news.ycombinator.com/item?id=44335065) - [Delta Chat is a decentralized and secure messenger app](https://delta.chat/en/)
* [2025-06-21, 05:07:05](https://lobste.rs/s/zibhyg/praise_normal_engineers) - [In Praise of “Normal” Engineers](https://charity.wtf/2025/06/19/in-praise-of-normal-engineers/)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-21, 03:30:00](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank&apos;s Son Pitches $1 Trillion Arizona AI Hub](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 03:06:42](https://news.ycombinator.com/item?id=44334167) - [Samsung embeds IronSource spyware app on phones across WANA](https://smex.org/open-letter-to-samsung-end-forced-israeli-app-installations-in-the-wana-region/)
* [2025-06-21, 00:28:24](https://lobste.rs/s/b1xxlr/more_undervalued_hardware_companions) - [More Undervalued Hardware Companions](https://vermaden.wordpress.com/2025/06/21/more-undervalued-hardware-companions/)
* [2025-06-20, 23:54:19](https://lobste.rs/s/g3ds7c/youtube_s_new_anti_adblock_measures) - [YouTube’s new anti-adblock measures](https://iter.ca/post/yt-adblock/)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:51:57](https://lobste.rs/s/f38nbb/all_roads_lead_disaster) - [All roads lead to disaster](https://blog.jsbarretto.com/post/all-roads-lead-to-disaster)
* [2025-06-20, 22:03:21](https://lobste.rs/s/sd5nda/mozilla_is_killing_its_pocket_fakespot) - [Mozilla is killing its Pocket and Fakespot services to focus on Firefox](https://arstechnica.com/gadgets/2025/05/mozilla-is-killing-its-pocket-and-fakespot-services-to-focus-on-firefox/)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 23:48:20](https://news.ycombinator.com/item?id=44323562) - [Axolotls May Hold the Key to Regrowing Limbs](https://www.smithsonianmag.com/smart-news/axolotls-may-hold-the-key-to-regrowing-limbs-and-scientists-are-unraveling-their-secrets-to-help-humans-do-the-same-180986781/)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 16:58:50](https://news.ycombinator.com/item?id=44320435) - [Debunking NIST&apos;s calculation of the Kyber-512 security level (2023)](https://blog.cr.yp.to/20231003-countcorrectly.html)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-19, 00:02:20](https://news.ycombinator.com/item?id=44314305) - [The Nyanja new PC-Engine/TurboGrafx 16-bit console game in development](https://sarupro.itch.io/thenyanja)
* [2025-06-18, 23:49:18](https://news.ycombinator.com/item?id=44314234) - [Compact Representations for Arrays in Lua [pdf]](https://sol.sbc.org.br/index.php/sblp/article/view/30252/30059)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 18:52:24](https://news.ycombinator.com/item?id=44312363) - [Remote MCP Support in Claude Code](https://www.anthropic.com/news/claude-code-remote-mcp?campaignId=13926158&amp;source=i_email&amp;medium=email&amp;content=Oct2024AnalysisTool&amp;messageTypeId=140367)
* [2025-06-18, 15:29:30](https://news.ycombinator.com/item?id=44310763) - [Airpass – easily overcome WiFi time limits](https://airpass.tiagoalves.me/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 13:29:31](https://news.ycombinator.com/item?id=44309734) - [The bad boy of bar charts: William Playfair (2023)](https://blog.engora.com/2023/05/the-bad-boy-of-bar-charts-william.html)
* [2025-06-18, 12:27:51](https://news.ycombinator.com/item?id=44309279) - [Compiler for the B Programming Language](https://github.com/tsoding/b)
* [2025-06-18, 12:13:15](https://news.ycombinator.com/item?id=44309191) - [Denmark&apos;s Archaeology Experiment Is Paying Off in Gold and Knowledge](https://www.scientificamerican.com/article/denmark-let-amateurs-dig-for-treasure-and-it-paid-off/)
* [2025-06-18, 11:35:12](https://news.ycombinator.com/item?id=44308953) - [Unexpected security footguns in Go&apos;s parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 09:56:28](https://news.ycombinator.com/item?id=44308328) - [P-Hacking in Startups](https://briefer.cloud/blog/posts/p-hacking/)
* [2025-06-18, 08:50:30](https://news.ycombinator.com/item?id=44307976) - [Show HN: Luna Rail – treating night trains as a spatial optimization problem](https://luna-rail.com/en/home-2)
* [2025-06-18, 08:02:32](https://news.ycombinator.com/item?id=44307667) - [Type Inference Zoo](https://zoo.cuichen.cc/)
* [2025-06-18, 07:45:22](https://news.ycombinator.com/item?id=44307552) - [P2piano: A P2P collaboration space for the musically inclined](https://p2piano.com/)
* [2025-06-18, 05:25:36](https://news.ycombinator.com/item?id=44306892) - [Using Microsoft&apos;s New CLI Text Editor on Ubuntu](https://www.omgubuntu.co.uk/2025/06/microsoft-edit-text-editor-ubuntu)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
