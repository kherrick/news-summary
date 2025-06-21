# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Research

* [Rhapsody OS: Installing Apple’s Lost x86 OS from 1998 on a 3.4 GHz i7 CPU & SSD](https://www.youtube.com/watch?v=uE6qp94InBM) - Exploring a vintage operating system resurrected on modern hardware offers intriguing insights into Apple's history. [Comments](https://lobste.rs/s/stgeyk/rhapsody_os_installing_apple_s_lost_x86_os)

* [Researchers using the same data and hypothesis arrive at different conclusions](https://www.pnas.org/doi/10.1073/pnas.2203150119) - An important study highlighting the variability in scientific interpretations. [Comments](https://news.ycombinator.com/item?id=44340461)

* [AI Is Ushering in the 'Tiny Team' Era in Silicon Valley](https://www.bloomberg.com/news/articles/2025-06-20/ai-is-ushering-in-the-tiny-team-era-in-silicon-valley) - Exploring AI’s role in redefining the dynamics of team sizes and innovation. [Comments](https://news.ycombinator.com/item?id=44339596)

* ['The Models Were Right!' Astronomers Locate Universe's 'Missing' Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronomical breakthrough confirms long-standing predictions about missing matter. [Comments](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Technology Ethics

* [What are the Carbon Costs of Asking an AI a Question?](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A must-read on the environmental impact of AI interactions. [Comments](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Tell HN: Beware confidentiality agreements that act as lifetime non competes](https://news.ycombinator.com/item?id=44338562) - Raises a red flag on the abuse of legal agreements in the tech industry.

## Healthcare and Biological Discoveries

* [One Shot To Stop HIV: MIT's Bold Vaccine Breakthrough](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A potential game-changer in the fight against HIV. [Comments](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* ['Gwada Negative': French scientists find new blood type in woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html) - Discovery of a new blood type with significant medical implications. [Comments](https://news.ycombinator.com/item?id=44335517)

## Environmental and Energy Concerns

* [America Invested in EV Battery Plants. Now They May Be Stranded.](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A worrying development in clean energy investment. [Comments](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Unique and Creative Endeavors

* [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/) - A creative throwback to a unique piece of gaming history. [Comments](https://lobste.rs/s/nlivz4/balatro_for_nintendo_e_reader)

* [my website is one binary](https://j3s.sh/thought/my-website-is-one-binary.html) - A fascinating minimalist approach to web design. [Comments](https://lobste.rs/s/ladobm/my_website_is_one_binary)

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

* [2025-06-21, 21:30:35](https://lobste.rs/s/stgeyk/rhapsody_os_installing_apple_s_lost_x86_os) - [Rhapsody OS: Installing Apple’s Lost x86 OS from 1998 on a 3.4 Ghz i7 CPU &amp; SSD](https://www.youtube.com/watch?v=uE6qp94InBM)
* [2025-06-21, 21:16:44](https://news.ycombinator.com/item?id=44340790) - [Apple typewriter ban memo](http://writingball.blogspot.com/2020/02/the-infamous-apple-typewriter-memo-is.html)
* [2025-06-21, 21:10:00](https://tech.slashdot.org/story/25/06/21/046247/bluesky-isnt-dying---and-theres-a-larger-ecosystem-growing-around-its-open-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BlueSky Isn&apos;t Dying - and There&apos;s a Larger Ecosystem Growing Around Its Open Protocol](https://tech.slashdot.org/story/25/06/21/046247/bluesky-isnt-dying---and-theres-a-larger-ecosystem-growing-around-its-open-protocol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 20:41:07](https://lobste.rs/s/injt6g/is_supabase_good_for_managing_oauth_on_ios) - [Is supabase good for managing oauth on ios or should i go with firebase?](https://lobste.rs/s/injt6g/is_supabase_good_for_managing_oauth_on_ios)
* [2025-06-21, 20:19:14](https://news.ycombinator.com/item?id=44340461) - [Researchers using the same data and hypothesis arrive at different conclusions](https://www.pnas.org/doi/10.1073/pnas.2203150119)
* [2025-06-21, 20:08:30](https://news.ycombinator.com/item?id=44340386) - [LaborBerlin: State-of-the-Art 16mm Projector](https://www.filmlabs.org/wiki/en/meetings_projects/spectral/laborberlin16mmprojector/start)
* [2025-06-21, 19:34:00](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What are the Carbon Costs of Asking an AI a Question?](https://news.slashdot.org/story/25/06/21/1844252/what-are-the-carbon-costs-of-asking-an-ai-a-question?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 18:57:34](https://lobste.rs/s/nlivz4/balatro_for_nintendo_e_reader) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 18:34:00](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Invested in EV Battery Plants. Now They May Be Stranded.](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 18:21:27](https://news.ycombinator.com/item?id=44339596) - [AI Is Ushering in the &apos;Tiny Team&apos; Era in Silicon Valley](https://www.bloomberg.com/news/articles/2025-06-20/ai-is-ushering-in-the-tiny-team-era-in-silicon-valley)
* [2025-06-21, 17:34:00](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Models Were Right!&apos; Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 17:09:35](https://news.ycombinator.com/item?id=44339076) - [AllTracker: Efficient Dense Point Tracking at High Resolution](https://alltracker.github.io/)
* [2025-06-21, 17:01:50](https://news.ycombinator.com/item?id=44339043) - [Weave (YC W25) is hiring a founding AI engineer](https://www.ycombinator.com/companies/weave-3/jobs/SqFnIFE-founding-ai-engineer)
* [2025-06-21, 16:59:47](https://news.ycombinator.com/item?id=44339025) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 16:58:16](https://lobste.rs/s/nxwegm/good_at_job_bad_at_interview_time_rethink) - [Good at the Job, Bad at the Interview: Time to Rethink Hiring](https://www.linkedin.com/pulse/good-job-bad-interview-time-rethink-hiring-christopher-robertson-jdnie)
* [2025-06-21, 16:50:05](https://lobste.rs/s/bgm76q/about_plasma_s_x11_session) - [About Plasma’s X11 session](https://pointieststick.com/2025/06/21/about-plasmas-x11-session/)
* [2025-06-21, 16:39:42](https://news.ycombinator.com/item?id=44338862) - [ARIA, the UK&apos;s Bet to Build Scientific Revolutions](https://www.asimov.press/p/aria)
* [2025-06-21, 16:34:00](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Shot To Stop HIV: MIT&apos;s Bold Vaccine Breakthrough](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 16:02:24](https://news.ycombinator.com/item?id=44338562) - [Tell HN: Beware confidentiality agreements that act as lifetime non competes](https://news.ycombinator.com/item?id=44338562)
* [2025-06-21, 15:34:00](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Deploys Multiple Claude Agents for &apos;Research&apos; Tool - Says Coding is Less Parallelizable](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 15:10:52](https://lobste.rs/s/cwxos5/remaking_celeste_s_lighting) - [Remaking Celeste&apos;s Lighting](https://noelberry.ca/posts/celeste_lighting/)
* [2025-06-21, 15:00:39](https://lobste.rs/s/zvnxst/reflection_open_implementations_2006) - [Reflection and open implementations (2006)](https://www.dcc.uchile.cl/~etanter/courses/cc71p/2006/reflection_oi.pdf)
* [2025-06-21, 14:41:04](https://lobste.rs/s/rj5w1b/color_everything_css) - [Color Everything in CSS](https://css-tricks.com/color-everything-in-css/)
* [2025-06-21, 14:38:02](https://lobste.rs/s/gqrepd/trip_report_june_2025_iso_c_standards) - [Trip report: June 2025 ISO C++ standards meeting](https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/)
* [2025-06-21, 14:34:00](https://tech.slashdot.org/story/25/06/21/018232/bug-hits-some-threads-users-their-words-echoed-by-all-other-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bug Hits Some Threads Users:  Their Words Echoed by All Other Users](https://tech.slashdot.org/story/25/06/21/018232/bug-hits-some-threads-users-their-words-echoed-by-all-other-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 14:09:00](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss) - [Penn State Research Team Builds 2D CMOS System](https://soylentnews.org/article.pl?sid=25/06/19/2351241&amp;from=rss)
* [2025-06-21, 14:04:20](https://lobste.rs/s/ladobm/my_website_is_one_binary) - [my website is one binary](https://j3s.sh/thought/my-website-is-one-binary.html)
* [2025-06-21, 13:00:00](https://slashdot.org/story/25/06/21/0251208/intel-will-outsource-marketing-to-accenture-and-ai-laying-off-its-own-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Will Outsource Marketing To Accenture and AI, Laying Off Its Own Workers](https://slashdot.org/story/25/06/21/0251208/intel-will-outsource-marketing-to-accenture-and-ai-laying-off-its-own-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 12:06:15](https://news.ycombinator.com/item?id=44336915) - [Microsoft suspended the email account of an ICC prosecutor at The Hague](https://www.nytimes.com/2025/06/20/technology/us-tech-europe-microsoft-trump-icc.html)
* [2025-06-21, 12:01:38](https://lobste.rs/s/4bn3cy/why_computational_reproducibility) - [Why computational reproducibility matters](https://blog.khinsen.net/posts/2025/06/20/computational-reproducibility.html)
* [2025-06-21, 10:39:21](https://news.ycombinator.com/item?id=44336381) - [Show HN: MMOndrian](https://mmondrian.com/)
* [2025-06-21, 10:33:12](https://lobste.rs/s/5ubtft/scaling_our_observability_platform) - [Scaling our Observability platform beyond 100 Petabytes by embracing wide events and replacing OTel](https://clickhouse.com/blog/scaling-observability-beyond-100pb-wide-events-replacing-otel)
* [2025-06-21, 10:23:04](https://lobste.rs/s/pfwzfa/open_dylan_2025_1_open_dylan_release) - [Open Dylan 2025.1 - Open Dylan Release](https://opendylan.org/release-notes/2025.1.html)
* [2025-06-21, 10:01:57](https://lobste.rs/s/8ahj8b/unexpected_security_footguns_go_s) - [Unexpected security footguns in Go&apos;s parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/)
* [2025-06-21, 10:00:00](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Is Hiding An Excellent, Official High-Speed Pac-Man Mod In Plain Sight](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 09:27:08](https://lobste.rs/s/lwtxev/hare_0_25_2_released) - [Hare 0.25.2 released](https://harelang.org/blog/2025-06-21-hare-0.25.2-released/)
* [2025-06-21, 09:23:21](https://news.ycombinator.com/item?id=44336015) - [Scaling our observability platform by embracing wide events and replacing OTel](https://clickhouse.com/blog/scaling-observability-beyond-100pb-wide-events-replacing-otel)
* [2025-06-21, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss) - [This is Your Brain on ChatGPT](https://soylentnews.org/article.pl?sid=25/06/19/2344222&amp;from=rss)
* [2025-06-21, 08:57:21](https://lobste.rs/s/5zj5e9/cosmoe_beos_class_library_on_top_wayland) - [Cosmoe: BeOS Class Library on top of Wayland](https://cosmoe.org/index.html)
* [2025-06-21, 07:38:42](https://news.ycombinator.com/item?id=44335517) - [&apos;Gwada negative&apos;: French scientists find new blood type in woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html)
* [2025-06-21, 07:00:00](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Macron Says Europe Must Become &apos;Space Power&apos; Again](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 06:29:00](https://news.ycombinator.com/item?id=44335065) - [Delta Chat is a decentralized and secure messenger app](https://delta.chat/en/)
* [2025-06-21, 05:07:05](https://lobste.rs/s/zibhyg/praise_normal_engineers) - [In Praise of “Normal” Engineers](https://charity.wtf/2025/06/19/in-praise-of-normal-engineers/)
* [2025-06-21, 04:44:14](https://lobste.rs/s/urjnnp/course_ml_has_monads_2011) - [Of Course ML Has Monads! (2011)](https://existentialtype.wordpress.com/2011/05/01/of-course-ml-has-monads/)
* [2025-06-21, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss) - [German Government Moves Closer to Ditching Microsoft: \&quot;We&apos;re Done With Teams!\&quot;](https://soylentnews.org/article.pl?sid=25/06/19/2318221&amp;from=rss)
* [2025-06-21, 04:04:56](https://news.ycombinator.com/item?id=44334403) - [Augmented Vertex Block Descent (AVBD)](https://graphics.cs.utah.edu/research/projects/avbd/)
* [2025-06-21, 03:30:00](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank&apos;s Son Pitches $1 Trillion Arizona AI Hub](https://news.slashdot.org/story/25/06/20/2212217/softbanks-son-pitches-1-trillion-arizona-ai-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 03:06:42](https://news.ycombinator.com/item?id=44334167) - [Samsung embeds IronSource spyware app on phones across WANA](https://smex.org/open-letter-to-samsung-end-forced-israeli-app-installations-in-the-wana-region/)
* [2025-06-21, 02:10:00](https://news.slashdot.org/story/25/06/20/2158226/sunken-superyacht-of-uk-tech-tycoon-mike-lynch-recovered-near-sicily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sunken Superyacht of UK Tech Tycoon Mike Lynch Recovered Near Sicily](https://news.slashdot.org/story/25/06/20/2158226/sunken-superyacht-of-uk-tech-tycoon-mike-lynch-recovered-near-sicily?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 01:30:00](https://mobile.slashdot.org/story/25/06/20/2034241/apple-adds-energy-and-battery-labels-to-iphone-and-ipad-pages-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Adds Energy and Battery Labels To iPhone and iPad Pages In EU](https://mobile.slashdot.org/story/25/06/20/2034241/apple-adds-energy-and-battery-labels-to-iphone-and-ipad-pages-in-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 00:50:00](https://news.slashdot.org/story/25/06/20/2022200/bbc-threatens-legal-action-against-perplexity-ai-over-content-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BBC Threatens Legal Action Against Perplexity AI Over Content Scraping](https://news.slashdot.org/story/25/06/20/2022200/bbc-threatens-legal-action-against-perplexity-ai-over-content-scraping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 00:28:24](https://lobste.rs/s/b1xxlr/more_undervalued_hardware_companions) - [More Undervalued Hardware Companions](https://vermaden.wordpress.com/2025/06/21/more-undervalued-hardware-companions/)
* [2025-06-21, 00:10:00](https://meta.slashdot.org/story/25/06/20/2015248/meta-discussed-buying-perplexity-before-investing-in-scale-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Discussed Buying Perplexity Before Investing In Scale AI](https://meta.slashdot.org/story/25/06/20/2015248/meta-discussed-buying-perplexity-before-investing-in-scale-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 23:54:19](https://lobste.rs/s/g3ds7c/youtube_s_new_anti_adblock_measures) - [YouTube’s new anti-adblock measures](https://iter.ca/post/yt-adblock/)
* [2025-06-20, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss) - [Women in Semiconductors: A Critical Workforce Need](https://soylentnews.org/article.pl?sid=25/06/19/2339244&amp;from=rss)
* [2025-06-20, 23:51:57](https://lobste.rs/s/f38nbb/all_roads_lead_disaster) - [All roads lead to disaster](https://blog.jsbarretto.com/post/all-roads-lead-to-disaster)
* [2025-06-20, 23:46:50](https://news.ycombinator.com/item?id=44333187) - [Plastic bag bans and fees reduce harmful bag litter on shorelines](https://www.science.org/doi/10.1126/science.adp9274)
* [2025-06-20, 22:26:52](https://news.ycombinator.com/item?id=44332699) - [AbsenceBench: Language models can&apos;t tell what&apos;s missing](https://arxiv.org/abs/2506.11440)
* [2025-06-20, 22:03:21](https://lobste.rs/s/sd5nda/mozilla_is_killing_its_pocket_fakespot) - [Mozilla is killing its Pocket and Fakespot services to focus on Firefox](https://arstechnica.com/gadgets/2025/05/mozilla-is-killing-its-pocket-and-fakespot-services-to-focus-on-firefox/)
* [2025-06-20, 19:51:45](https://news.ycombinator.com/item?id=44331362) - [Harper – an open-source alternative to Grammarly](https://writewithharper.com)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 18:06:11](https://lobste.rs/s/dl5sj9/rolling_ladder_up_behind_us) - [Rolling the ladder up behind us](https://xeiaso.net/blog/2025/rolling-ladder-behind-us/)
* [2025-06-20, 17:45:16](https://lobste.rs/s/iquhgy/so_you_want_serialize_some_der) - [So you want to serialize some DER?](https://alexgaynor.net/2025/jun/20/serialize-some-der/)
* [2025-06-20, 17:22:18](https://lobste.rs/s/qekbyn/ruby_schema_collection_json_schemas_for) - [Ruby Schema, a collection of JSON schemas for YAML/JSON config files in the Ruby ecosystem](https://github.com/joeldrapper/rubyschema)
* [2025-06-20, 16:35:55](https://news.ycombinator.com/item?id=44329457) - [Show HN: Nxtscape – an open-source agentic browser](https://github.com/nxtscape/nxtscape)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 23:48:20](https://news.ycombinator.com/item?id=44323562) - [Axolotls May Hold the Key to Regrowing Limbs](https://www.smithsonianmag.com/smart-news/axolotls-may-hold-the-key-to-regrowing-limbs-and-scientists-are-unraveling-their-secrets-to-help-humans-do-the-same-180986781/)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-19, 00:02:20](https://news.ycombinator.com/item?id=44314305) - [The Nyanja new PC-Engine/TurboGrafx 16-bit console game in development](https://sarupro.itch.io/thenyanja)
* [2025-06-18, 23:49:18](https://news.ycombinator.com/item?id=44314234) - [Compact Representations for Arrays in Lua [pdf]](https://sol.sbc.org.br/index.php/sblp/article/view/30252/30059)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 16:43:26](https://news.ycombinator.com/item?id=44311393) - [The Brute Squad](https://sourcegraph.com/blog/the-brute-squad)
* [2025-06-18, 15:29:30](https://news.ycombinator.com/item?id=44310763) - [Airpass – easily overcome WiFi time limits](https://airpass.tiagoalves.me/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 12:13:15](https://news.ycombinator.com/item?id=44309191) - [Denmark&apos;s Archaeology Experiment Is Paying Off in Gold and Knowledge](https://www.scientificamerican.com/article/denmark-let-amateurs-dig-for-treasure-and-it-paid-off/)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 05:25:36](https://news.ycombinator.com/item?id=44306892) - [Using Microsoft&apos;s New CLI Text Editor on Ubuntu](https://www.omgubuntu.co.uk/2025/06/microsoft-edit-text-editor-ubuntu)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 20:46:35](https://news.ycombinator.com/item?id=44303767) - [Captain Cook&apos;s missing ship found after sinking 250 years ago](https://www.independent.co.uk/news/science/captain-cook-missing-ship-found-hms-endeavour-b2771322.html)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 13:03:36](https://news.ycombinator.com/item?id=44298666) - [Life as Slime](https://www.asimov.press/p/slime)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
