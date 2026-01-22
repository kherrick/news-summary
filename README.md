# [News Summary](https://kherrick.github.io/news-summary/)

## Education and Learning

* [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - Professors highlight increasing illiteracy among college students.

* [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html) - Discussions on adapting exams for a world influenced by AI tools.

## Technology Advancements

* [Apple Reportedly Replacing Siri Interface With Actual Chatbot Experience For iOS 27](https://apple.slashdot.org/story/26/01/21/2333212/apple-reportedly-replacing-siri-interface-with-actual-chatbot-experience-for-ios-27?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple plans to move Siri towards a chatbot interface for iOS 27.

* [TrustTunnel: AdGuard VPN protocol goes open-source](https://adguard-vpn.com/en/blog/adguard-vpn-protocol-goes-open-source-meet-trusttunnel.html) - The AdGuard VPN protocol, TrustTunnel, is now open source.

* [Building a javascript runtime in one month](https://s.tail.so/js-in-one-month) - An effort to construct a JavaScript runtime in just one month.

* [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html) - Explaining and demonstrating nested code fences in Markdown.

## AI and Automation Impact

* [Weight-Loss Drugs Could Save US Airlines $580 Million Per Year](https://science.slashdot.org/story/26/01/21/2350220/weight-loss-drugs-could-save-us-airlines-580-million-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - How weight-loss drugs could significantly trim airline fuel expenses.

* [AI Company Eightfold Sued For Helping Companies Secretly Score Job Seekers](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Eightfold AI under legal scrutiny for allegedly aiding secretive recruitment tactics.

## Security Concerns

* [FBI's Washington Post Investigation Shows How Your Printer Can Snitch On You](https://hardware.slashdot.org/story/26/01/21/2342252/fbis-washington-post-investigation-shows-how-your-printer-can-snitch-on-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - FBI reveals ways printers can breach privacy.

* [Threat actors expand abuse of Microsoft Visual Studio Code](https://www.jamf.com/blog/threat-actors-expand-abuse-of-visual-studio-code/) - Cybercriminals exploiting Microsoft's developer environment.

* [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - Proton VPN's shift to newer protocols for improved security.

## Global Environmental Challenges

* [Half of World’s CO2 Emissions Come From Just 32 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study spotlighting fossil fuel firms' contributions to global emissions.

* [China's Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - Analysis of wind farms' unexpected environmental benefits.

## Health and Medicine

* [Ozempic is Reshaping the Fast Food Industry](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A popular weight-loss drug is transforming the fast food sector.

## Open Source and Software

* [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/) - Announcing the open-sourcing of the Skip programming language.

* [pandas 3.0.0 released](https://github.com/pandas-dev/pandas/releases/tag/v3.0.0) - A major release of the pandas library with new features.

## Space and Physics

* [Building the World's First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - Scientists are developing a device to detect gravitons, with significant implications for physics.

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

* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-22, 03:30:00](https://science.slashdot.org/story/26/01/21/2350220/weight-loss-drugs-could-save-us-airlines-580-million-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weight-Loss Drugs Could Save US Airlines $580 Million Per Year](https://science.slashdot.org/story/26/01/21/2350220/weight-loss-drugs-could-save-us-airlines-580-million-per-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 02:13:53](https://lobste.rs/s/pb4kco/don_t_trip_wire_yourself_testing_error) - [Don&apos;t Trip[wire] Yourself: Testing Error Recovery in Zig](https://mitchellh.com/writing/tripwire)
* [2026-01-22, 02:02:00](https://hardware.slashdot.org/story/26/01/21/2342252/fbis-washington-post-investigation-shows-how-your-printer-can-snitch-on-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI&apos;s Washington Post Investigation Shows How Your Printer Can Snitch On You](https://hardware.slashdot.org/story/26/01/21/2342252/fbis-washington-post-investigation-shows-how-your-printer-can-snitch-on-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 01:25:00](https://news.slashdot.org/story/26/01/22/006212/america-is-slow-walking-into-a-polymarket-disaster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;America Is Slow-Walking Into a Polymarket Disaster&apos;](https://news.slashdot.org/story/26/01/22/006212/america-is-slow-walking-into-a-polymarket-disaster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 01:11:36](https://news.ycombinator.com/item?id=46713929) - [Significant US farm losses persist, despite federal assistance](https://www.fb.org/market-intel/significant-farm-losses-persist-despite-federal-assistance)
* [2026-01-22, 01:11:13](https://news.ycombinator.com/item?id=46713924) - [Internet voting is insecure and should not be used in public elections](https://blog.citp.princeton.edu/2026/01/16/internet-voting-is-insecure-and-should-not-be-used-in-public-elections/)
* [2026-01-22, 00:45:00](https://apple.slashdot.org/story/26/01/21/2333212/apple-reportedly-replacing-siri-interface-with-actual-chatbot-experience-for-ios-27?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Reportedly Replacing Siri Interface With Actual Chatbot Experience For iOS 27](https://apple.slashdot.org/story/26/01/21/2333212/apple-reportedly-replacing-siri-interface-with-actual-chatbot-experience-for-ios-27?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 00:34:20](https://news.ycombinator.com/item?id=46713704) - [I&apos;ll pass on your zoom call](https://operand.online/chronicle/pass.zoom)
* [2026-01-22, 00:12:00](https://news.ycombinator.com/item?id=46713526) - [Threat actors expand abuse of Microsoft Visual Studio Code](https://www.jamf.com/blog/threat-actors-expand-abuse-of-visual-studio-code/)
* [2026-01-22, 00:02:00](https://yro.slashdot.org/story/26/01/21/2320256/spotify-lawsuit-triggered-annas-archive-domain-name-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Lawsuit Triggered Anna&apos;s Archive Domain Name Suspensions](https://yro.slashdot.org/story/26/01/21/2320256/spotify-lawsuit-triggered-annas-archive-domain-name-suspensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 23:46:24](https://lobste.rs/s/oq8n8r/results_from_2025_go_developer_survey) - [Results from the 2025 Go Developer Survey](https://go.dev/blog/survey2025)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 23:28:35](https://lobste.rs/s/ybb9xu/inside_starrocks_why_joins_are_faster) - [Inside StarRocks: Why Joins Are Faster Than You’d Expect](https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect)
* [2026-01-21, 23:20:00](https://apple.slashdot.org/story/26/01/21/211226/apple-developing-ai-wearable-pin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Developing AI Wearable Pin](https://apple.slashdot.org/story/26/01/21/211226/apple-developing-ai-wearable-pin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 22:54:04](https://news.ycombinator.com/item?id=46712815) - [Convert potentially dangerous PDFs to safe PDFs](https://github.com/freedomofpress/dangerzone)
* [2026-01-21, 22:40:00](https://slashdot.org/story/26/01/21/2055248/nova-launcher-gets-a-new-owner-and-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nova Launcher Gets a New Owner and Ads](https://slashdot.org/story/26/01/21/2055248/nova-launcher-gets-a-new-owner-and-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 22:30:18](https://news.ycombinator.com/item?id=46712547) - [Mote: An Interactive Ecosystem Simulation [video]](https://www.youtube.com/watch?v=Hju0H3NHxVI)
* [2026-01-21, 22:02:00](https://tech.slashdot.org/story/26/01/21/2018229/ham-radio-operators-in-belarus-arrested-face-the-death-penalty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HAM Radio Operators In Belarus Arrested, Face the Death Penalty](https://tech.slashdot.org/story/26/01/21/2018229/ham-radio-operators-in-belarus-arrested-face-the-death-penalty?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 21:28:48](https://lobste.rs/s/koy1fz/fsnotes_7_remarkable_fast_plain_text) - [FSNotes 7 - Remarkable fast plain text notes](https://fsnot.es/v7/)
* [2026-01-21, 21:26:18](https://news.ycombinator.com/item?id=46711792) - [Jerry (YC S17) Is Hiring](https://www.ycombinator.com/companies/jerry-inc/jobs/QaoK3rw-software-engineer-core-automation-marketplace)
* [2026-01-21, 21:22:00](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ozempic is Reshaping the Fast Food Industry](https://science.slashdot.org/story/26/01/21/191222/ozempic-is-reshaping-the-fast-food-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 21:13:59](https://news.ycombinator.com/item?id=46711649) - [Show HN: TerabyteDeals – Compare storage prices by $/TB](https://terabytedeals.com)
* [2026-01-21, 20:45:00](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Half of World&apos;s CO2 Emissions Come From Just 32 Fossil Fuel Firms, Study Shows](https://news.slashdot.org/story/26/01/21/1913218/half-of-worlds-co2-emissions-come-from-just-32-fossil-fuel-firms-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 20:01:00](https://slashdot.org/story/26/01/21/198252/adobe-acrobat-now-lets-you-edit-files-using-prompts-generate-podcast-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Acrobat Now Lets You Edit Files Using Prompts, Generate Podcast Summaries](https://slashdot.org/story/26/01/21/198252/adobe-acrobat-now-lets-you-edit-files-using-prompts-generate-podcast-summaries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 19:22:00](https://news.slashdot.org/story/26/01/21/1922232/the-gold-plating-of-american-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Gold Plating of American Water](https://news.slashdot.org/story/26/01/21/1922232/the-gold-plating-of-american-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 19:08:37](https://news.ycombinator.com/item?id=46710042) - [Setting Up a Cluster of Tiny PCs for Parallel Computing](https://www.kenkoonwong.com/blog/parallel-computing/)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 18:44:00](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Company Eightfold Sued For Helping Companies Secretly Score Job Seekers](https://yro.slashdot.org/story/26/01/21/1841214/ai-company-eightfold-sued-for-helping-companies-secretly-score-job-seekers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 18:31:19](https://news.ycombinator.com/item?id=46709543) - [Show HN: Rails UI](https://railsui.com/)
* [2026-01-21, 18:18:27](https://lobste.rs/s/zgqp6i/how_binary_dependencies_work_across) - [How Binary Dependencies Work Across Different Languages](https://vlad.website/how-binary-dependencies-work/)
* [2026-01-21, 18:10:35](https://lobste.rs/s/wa4xqd/libcurl_memory_use_some_years_later) - [libcurl memory use some years later](https://daniel.haxx.se/blog/2026/01/21/libcurl-memory-use-some-years-later/)
* [2026-01-21, 18:04:00](https://games.slashdot.org/story/26/01/21/184240/ubisoft-cancels-six-games-slashes-guidance-in-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Cancels Six Games, Slashes Guidance in Restructuring](https://games.slashdot.org/story/26/01/21/184240/ubisoft-cancels-six-games-slashes-guidance-in-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 18:03:04](https://lobste.rs/s/t5pb5f/hate_is_strong_word_i_really_really_really) - [Hate is a strong word, but I really really really don’t like Windows 11](https://blog.urara.pl/hate-is-a-strong-word-but-i-really-really-really-don&apos;t-like-windows-11)
* [2026-01-21, 17:28:03](https://news.ycombinator.com/item?id=46708678) - [Waiting for dawn in search: Search index, Google rulings and impact on Kagi](https://blog.kagi.com/waiting-dawn-search)
* [2026-01-21, 17:25:00](https://it.slashdot.org/story/26/01/21/1639200/ireland-wants-to-give-its-cops-spyware-ability-to-crack-encrypted-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ireland Wants To Give Its Cops Spyware, Ability To Crack Encrypted Messages](https://it.slashdot.org/story/26/01/21/1639200/ireland-wants-to-give-its-cops-spyware-ability-to-crack-encrypted-messages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 17:21:26](https://news.ycombinator.com/item?id=46708601) - [TrustTunnel: AdGuard VPN protocol goes open-source](https://adguard-vpn.com/en/blog/adguard-vpn-protocol-goes-open-source-meet-trusttunnel.html)
* [2026-01-21, 17:03:31](https://news.ycombinator.com/item?id=46708351) - [Challenges in join optimization](https://www.starrocks.io/blog/inside-starrocks-why-joins-are-faster-than-youd-expect)
* [2026-01-21, 16:56:51](https://lobste.rs/s/s8un6w/pandas_3_0_0_released) - [pandas 3.0.0 released](https://github.com/pandas-dev/pandas/releases/tag/v3.0.0)
* [2026-01-21, 16:53:36](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement) - [Lobsters Blog Carnival Announcement](https://lobste.rs/s/lz7hxw/lobsters_blog_carnival_announcement)
* [2026-01-21, 16:15:06](https://news.ycombinator.com/item?id=46707708) - [Three types of LLM workloads and how to serve them](https://modal.com/llm-almanac/workloads)
* [2026-01-21, 16:13:02](https://lobste.rs/s/grm2jb/making_lsp_for_great_good) - [Making an LSP for great good](https://thunderseethe.dev/posts/lsp-base/)
* [2026-01-21, 16:04:49](https://news.ycombinator.com/item?id=46707572) - [Claude&apos;s new constitution](https://www.anthropic.com/news/claude-new-constitution)
* [2026-01-21, 15:22:10](https://lobste.rs/s/zntutr/skip_is_now_free_open_source) - [Skip Is Now Free and Open Source](https://skip.dev/blog/skip-is-free/)
* [2026-01-21, 15:20:53](https://news.ycombinator.com/item?id=46706906) - [Skip is now free and open source](https://skip.dev/blog/skip-is-free/)
* [2026-01-21, 15:19:55](https://lobste.rs/s/wee6qk/vibecoding_2) - [Vibecoding #2](https://matklad.github.io/2026/01/20/vibecoding-2.html)
* [2026-01-21, 14:58:45](https://lobste.rs/s/zjje5x/so_why_should_gnome_support_server_side) - [So, why *should* GNOME support server side decorations?](https://blister.zip/posts/gnome-ssd/)
* [2026-01-21, 14:56:32](https://news.ycombinator.com/item?id=46706564) - [A verification layer for browser agents: Amazon case study](https://www.sentienceapi.com/blog/verification-layer-amazon-case-study)
* [2026-01-21, 14:54:56](https://news.ycombinator.com/item?id=46706528) - [Show HN: ChartGPU – WebGPU-powered charting library (1M points at 60fps)](https://github.com/ChartGPU/ChartGPU)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 13:49:07](https://news.ycombinator.com/item?id=46705676) - [Tell HN: 2 years building a kids audio app as a solo dev – lessons learned](https://news.ycombinator.com/item?id=46705676)
* [2026-01-21, 13:11:23](https://lobste.rs/s/oxjhnd/foss_for_digital_sovereignty_eu) - [FOSS for digital sovereignty in the EU](https://www.more-magic.net/posts/open-source-in-the-eu.html)
* [2026-01-21, 13:08:35](https://news.ycombinator.com/item?id=46705201) - [Nested code fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 12:54:26](https://lobste.rs/s/t1mmsv/art_craftsmanship_monozukuri_age_ai) - [The Art of Craftsmanship (Monozukuri) in the Age of AI](https://rapha.land/the-art-of-craftsmanship-monozukuri-in-the-age-of-ai/)
* [2026-01-21, 12:47:52](https://lobste.rs/s/itkq4m/nested_code_fences_markdown) - [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 10:07:03](https://lobste.rs/s/hzj99p/building_blog_gleam) - [Building a Blog in Gleam](https://gearsco.de/blog/blog-in-gleam/)
* [2026-01-21, 09:50:50](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic) - [Real programming vs. interviews: A dyslexic perspective](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 07:48:06](https://news.ycombinator.com/item?id=46702411) - [Can you slim macOS down?](https://eclecticlight.co/2026/01/21/can-you-slim-macos-down/)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-21, 03:58:15](https://lobste.rs/s/v653ds/i_got_into_argument_on_discord_about_how) - [I got into an argument on Discord about how inefficient CBR/CBZ is, so I wrote a new file format](https://old.reddit.com/r/selfhosted/comments/1qi64pr/i_got_into_an_argument_on_discord_about_how/)
* [2026-01-21, 02:07:05](https://lobste.rs/s/fxrdwz/building_javascript_runtime_one_month) - [Building a javascript runtime in one month](https://s.tail.so/js-in-one-month)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 21:14:03](https://lobste.rs/s/cxwenf/i_made_zig_compute_33_million_satellite) - [I Made Zig Compute 33 Million Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:39:02](https://news.ycombinator.com/item?id=46676861) - [SIMD programming in pure Rust](https://kerkour.com/introduction-rust-simd)
* [2026-01-19, 06:19:53](https://news.ycombinator.com/item?id=46675583) - [Beowulf&apos;s opening \&quot;What\&quot; is no interjection (2013)](https://www.poetryfoundation.org/poetry-news/69208/new-research-opening-line-of-beowulf-is-not-what-weve-eternally-thunk)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 18:18:34](https://news.ycombinator.com/item?id=46670503) - [Mystery of the Head Activator](https://www.asimov.press/p/head-activator)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
