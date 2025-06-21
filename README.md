# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Legendary Sound Blaster ISA sound card gets a driver update 30 years later](https://www.tomshardware.com/pc-components/sound-cards/legendary-sound-blaster-isa-sound-card-gets-a-driver-update-30-years-later-patch-squashes-first-bug-report-after-25-years) - After three decades, the iconic Sound Blaster ISA sound card receives a driver patch, addressing a bug after 25 years.

* [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/) - A creative project breathes new life into the Nintendo E-Reader with the development of "Balatro," a modern tool for a vintage device.

* [AllTracker: Efficient Dense Point Tracking at High Resolution](https://alltracker.github.io/) - A new approach to high-resolution dense point tracking promises enhanced efficiency in handling large-scale data.

* [Hyprland Premium](https://account.hypr.land/pricing) - Hyprland introduces its premium plan for enhanced features in this innovative Wayland compositor.

* [Remaking Celeste's Lighting](https://noelberry.ca/posts/celeste_lighting/) - Insights into revamped lighting techniques used in the game "Celeste," showing artistic and technical improvements.

## Artificial Intelligence Developments

* [AI Is Ushering in the 'Tiny Team' Era in Silicon Valley](https://www.bloomberg.com/news/articles/2025-06-20/ai-is-ushering-in-the-tiny-team-era-in-silicon-valley) - AI-driven efficiency is enabling smaller, highly capable teams to thrive in Silicon Valley.

* [AbsenceBench: Language models can't tell what's missing](https://arxiv.org/abs/2506.11440) - A study examines limitations in AI models' ability to identify missing data, shedding light on gaps in their reasoning.

* [Harper – an open-source alternative to Grammarly](https://writewithharper.com) - Introducing "Harper," an open-source tool aiming to compete with Grammarly in writing and grammar assistance.

* [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/) - A novel runtime environment integrates AI capabilities directly into Phoenix web development.

* [Intel Will Outsource Marketing To Accenture and AI, Laying Off Its Own Workers](https://slashdot.org/story/25/06/21/0251208/intel-will-outsource-marketing-to-accenture-and-ai-laying-off-its-own-workers) - Intel makes a strategic shift, leveraging AI and outsourcing to cut costs and streamline operations.

## Scientific Breakthroughs

* ['The Models Were Right!' Astronomers Locate Universe's 'Missing' Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronomers confirm theoretical models by locating the universe's elusive missing matter.

* [One Shot To Stop HIV: MIT's Bold Vaccine Breakthrough](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A revolutionary HIV vaccine developed at MIT promises life-changing prospects for global health.

* ['Gwada negative': French scientists find new blood type in woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html) - Researchers in France identify a newly discovered blood type, termed 'Gwada negative.'

## Cybersecurity and Privacy

* [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&from=rss) - Concerns arise about potential access to private Telegram messages by the Russian FSB, sparking privacy debates.

* [Mozilla is killing its Pocket and Fakespot services to focus on Firefox](https://arstechnica.com/gadgets/2025/05/mozilla-is-killing-its-pocket-and-fakespot-services-to-focus-on-firefox/) - In a strategic pivot, Mozilla shuts down Pocket and Fakespot services to intensify its focus on the Firefox browser.

* [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys) - A critical review unveils vulnerabilities in the WebAuthn and FIDO2 security standards impacting passkey integrity.

## Gaming Highlights

* [YouTube Is Hiding An Excellent, Official High-Speed Pac-Man Mod In Plain Sight](https://games.slashdot.org/story/25/06/21/0257244/youtube-is-hiding-an-excellent-official-high-speed-pac-man-mod-in-plain-sight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discover a hidden gem: YouTube's official high-speed Pac-Man mod positioned slyly in plain sight.

* [Sega mistakenly reveals sales numbers of popular games](https://www.gematsu.com/2025/06/sega-mistakenly-reveals-sales-numbers-for-like-a-dragon-infinite-wealth-persona-3-reload-shin-megami-tensei-v-and-more) - Sega accidentally discloses the sales performance of several blockbuster titles, drawing attention within the gaming community.

## Society and Culture Impacts

* [Good at the Job, Bad at the Interview: Time to Rethink Hiring](https://www.linkedin.com/pulse/good-job-bad-interview-time-rethink-hiring-christopher-robertson-jdnie) - A compelling argument for reassessing traditional hiring practices when skilled individuals underperform during interviews.

* [Plastic bag bans and fees reduce harmful bag litter on shorelines](https://www.science.org/doi/10.1126/science.adp9274) - Studies confirm that policies like plastic bag bans significantly curb shoreline litter, aiding environmental preservation.

* [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&from=rss) - Exploring the controversial use of marijuana in alleviating symptoms associated with autism, as reported by some parents.

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

* [2025-06-21, 18:57:34](https://lobste.rs/s/nlivz4/balatro_for_nintendo_e_reader) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 18:47:32](https://news.ycombinator.com/item?id=44339793) - [Legendary Sound Blaster ISA sound card gets a driver update 30 years later](https://www.tomshardware.com/pc-components/sound-cards/legendary-sound-blaster-isa-sound-card-gets-a-driver-update-30-years-later-patch-squashes-first-bug-report-after-25-years)
* [2025-06-21, 18:45:00](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss) - [The Russian FSB May Have Access to Telegram Messages](https://soylentnews.org/article.pl?sid=25/06/20/2250249&amp;from=rss)
* [2025-06-21, 18:34:00](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Invested in EV Battery Plants. Now They May Be Stranded.](https://news.slashdot.org/story/25/06/21/1626243/america-invested-in-ev-battery-plants-now-they-may-be-stranded?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 18:21:27](https://news.ycombinator.com/item?id=44339596) - [AI Is Ushering in the &apos;Tiny Team&apos; Era in Silicon Valley](https://www.bloomberg.com/news/articles/2025-06-20/ai-is-ushering-in-the-tiny-team-era-in-silicon-valley)
* [2025-06-21, 17:34:00](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Models Were Right!&apos; Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter](https://science.slashdot.org/story/25/06/21/064247/the-models-were-right-astronomers-locate-universes-missing-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 17:32:40](https://news.ycombinator.com/item?id=44339227) - [Hyprland Premium](https://account.hypr.land/pricing)
* [2025-06-21, 17:09:35](https://news.ycombinator.com/item?id=44339076) - [AllTracker: Efficient Dense Point Tracking at High Resolution](https://alltracker.github.io/)
* [2025-06-21, 17:01:50](https://news.ycombinator.com/item?id=44339043) - [Weave (YC W25) is hiring a founding AI engineer](https://www.ycombinator.com/companies/weave-3/jobs/SqFnIFE-founding-ai-engineer)
* [2025-06-21, 16:59:47](https://news.ycombinator.com/item?id=44339025) - [Balatro for the Nintendo E-Reader](https://mattgreer.dev/blog/balatro-for-the-nintendo-ereader/)
* [2025-06-21, 16:58:16](https://lobste.rs/s/nxwegm/good_at_job_bad_at_interview_time_rethink) - [Good at the Job, Bad at the Interview: Time to Rethink Hiring](https://www.linkedin.com/pulse/good-job-bad-interview-time-rethink-hiring-christopher-robertson-jdnie)
* [2025-06-21, 16:50:05](https://lobste.rs/s/bgm76q/about_plasma_s_x11_session) - [About Plasma’s X11 session](https://pointieststick.com/2025/06/21/about-plasmas-x11-session/)
* [2025-06-21, 16:34:00](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Shot To Stop HIV: MIT&apos;s Bold Vaccine Breakthrough](https://science.slashdot.org/story/25/06/21/0451227/one-shot-to-stop-hiv-mits-bold-vaccine-breakthrough?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 16:02:24](https://news.ycombinator.com/item?id=44338562) - [Tell HN: Beware confidentiality agreements that act as lifetime non competes](https://news.ycombinator.com/item?id=44338562)
* [2025-06-21, 15:34:00](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Deploys Multiple Claude Agents for &apos;Research&apos; Tool - Says Coding is Less Parallelizable](https://developers.slashdot.org/story/25/06/21/0442227/anthropic-deploys-multiple-claude-agents-for-research-tool---says-coding-is-less-parallelizable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 15:10:52](https://lobste.rs/s/cwxos5/remaking_celeste_s_lighting) - [Remaking Celeste&apos;s Lighting](https://noelberry.ca/posts/celeste_lighting/)
* [2025-06-21, 14:57:07](https://news.ycombinator.com/item?id=44338089) - [Behind the scenes: Redpanda Cloud&apos;s response to the GCP outage](https://www.redpanda.com/blog/gcp-outage-june-redpanda-cloud)
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
* [2025-06-21, 09:00:01](https://news.ycombinator.com/item?id=44335907) - [Cosmoe: BeOS Class Library on Top of Wayland](https://cosmoe.org/index.html)
* [2025-06-21, 08:57:21](https://lobste.rs/s/5zj5e9/cosmoe_beos_class_library_on_top_wayland) - [Cosmoe: BeOS Class Library on top of Wayland](https://cosmoe.org/index.html)
* [2025-06-21, 07:38:42](https://news.ycombinator.com/item?id=44335517) - [&apos;Gwada negative&apos;: French scientists find new blood type in woman](https://www.lemonde.fr/en/science/article/2025/06/21/gwada-negative-french-scientists-find-new-blood-type-in-woman_6742577_10.html)
* [2025-06-21, 07:00:00](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Macron Says Europe Must Become &apos;Space Power&apos; Again](https://science.slashdot.org/story/25/06/21/0242226/macron-says-europe-must-become-space-power-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-21, 06:29:00](https://news.ycombinator.com/item?id=44335065) - [Delta Chat is a decentralized and secure messenger app](https://delta.chat/en/)
* [2025-06-21, 06:23:01](https://news.ycombinator.com/item?id=44335038) - [Sega mistakenly reveals sales numbers of popular games](https://www.gematsu.com/2025/06/sega-mistakenly-reveals-sales-numbers-for-like-a-dragon-infinite-wealth-persona-3-reload-shin-megami-tensei-v-and-more)
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
* [2025-06-20, 23:30:00](https://slashdot.org/story/25/06/20/1954245/applebees-and-ihop-plan-to-introduce-ai-in-restaurants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Applebee&apos;s and IHOP Plan To Introduce AI in Restaurants](https://slashdot.org/story/25/06/20/1954245/applebees-and-ihop-plan-to-introduce-ai-in-restaurants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 22:50:00](https://yro.slashdot.org/story/25/06/20/2010218/record-ddos-pummels-site-with-once-unimaginable-73tbps-of-junk-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record DDoS Pummels Site With Once-Unimaginable 7.3Tbps of Junk Traffic](https://yro.slashdot.org/story/25/06/20/2010218/record-ddos-pummels-site-with-once-unimaginable-73tbps-of-junk-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 22:26:52](https://news.ycombinator.com/item?id=44332699) - [AbsenceBench: Language models can&apos;t tell what&apos;s missing](https://arxiv.org/abs/2506.11440)
* [2025-06-20, 22:03:21](https://lobste.rs/s/sd5nda/mozilla_is_killing_its_pocket_fakespot) - [Mozilla is killing its Pocket and Fakespot services to focus on Firefox](https://arstechnica.com/gadgets/2025/05/mozilla-is-killing-its-pocket-and-fakespot-services-to-focus-on-firefox/)
* [2025-06-20, 21:13:24](https://lobste.rs/s/tguhdl/breaking_webauthn_fido2_forging) - [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys)
* [2025-06-20, 19:51:45](https://news.ycombinator.com/item?id=44331362) - [Harper – an open-source alternative to Grammarly](https://writewithharper.com)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 18:06:11](https://lobste.rs/s/dl5sj9/rolling_ladder_up_behind_us) - [Rolling the ladder up behind us](https://xeiaso.net/blog/2025/rolling-ladder-behind-us/)
* [2025-06-20, 17:45:16](https://lobste.rs/s/iquhgy/so_you_want_serialize_some_der) - [So you want to serialize some DER?](https://alexgaynor.net/2025/jun/20/serialize-some-der/)
* [2025-06-20, 17:35:05](https://lobste.rs/s/vqvmyl/improvements_udp_hole_punching) - [Improvements to the UDP Hole Punching](https://github.com/kupson/udp-hole-punching/tree/main)
* [2025-06-20, 17:22:18](https://lobste.rs/s/qekbyn/ruby_schema_collection_json_schemas_for) - [Ruby Schema, a collection of JSON schemas for YAML/JSON config files in the Ruby ecosystem](https://github.com/joeldrapper/rubyschema)
* [2025-06-20, 17:01:35](https://news.ycombinator.com/item?id=44329712) - [YouTube&apos;s new anti-adblock measures](https://iter.ca/post/yt-adblock/)
* [2025-06-20, 16:35:55](https://news.ycombinator.com/item?id=44329457) - [Show HN: Nxtscape – an open-source agentic browser](https://github.com/nxtscape/nxtscape)
* [2025-06-20, 15:23:29](https://news.ycombinator.com/item?id=44328598) - [Visualizing environmental costs of war in Hayao Miyazaki&apos;s Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 08:43:42](https://lobste.rs/s/la5mgg/infinite_mac_os_x) - [Infinite Mac OS X](https://blog.persistent.info/2025/03/infinite-mac-os-x.html)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-19, 00:02:20](https://news.ycombinator.com/item?id=44314305) - [The Nyanja new PC-Engine/TurboGrafx 16-bit console game in development](https://sarupro.itch.io/thenyanja)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 15:29:30](https://news.ycombinator.com/item?id=44310763) - [Airpass – easily overcome WiFi time limits](https://airpass.tiagoalves.me/)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 11:35:12](https://news.ycombinator.com/item?id=44308953) - [Unexpected security footguns in Go&apos;s parsers](https://blog.trailofbits.com/2025/06/17/unexpected-security-footguns-in-gos-parsers/)
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
