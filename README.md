# [News Summary](https://kherrick.github.io/news-summary/)

## Corporate Acquisitions and Funding

* [SpaceX in Talks for Share Sale That Would Boost Valuation to $800B](https://www.wsj.com/business/spacex-in-talks-for-share-sale-that-would-boost-valuation-to-800-billion-b2852191) ([comments](https://news.ycombinator.com/item?id=46165513))

* [Netflix To Buy Warner Bros. In $72 Billion Cash, Stock Deal](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Innovations in Computing and Design

* [Framework Laptop 13 gets ARM processor with 12 cores via third-party upgrade kit](https://www.notebookcheck.net/Framework-Laptop-13-gets-ARM-processor-with-12-cores-via-upgrade-kit.1177930.0.html) ([comments](https://lobste.rs/s/cgohab/framework_laptop_13_gets_arm_processor))

* [The Resonant Computing Manifesto](https://resonantcomputing.org/) ([comments](https://lobste.rs/s/fxccgk/resonant_computing_manifesto))

* [Synadia and TigerBeetle Pledge $512,000 to the Zig Software Foundation](https://tigerbeetle.com/blog/2025-10-25-synadia-and-tigerbeetle-pledge-512k-to-the-zig-software-foundation/) ([comments](https://news.ycombinator.com/item?id=46163804))

* [Making RSS More Fun](https://matduggan.com/making-rss-more-fun/) ([comments](https://news.ycombinator.com/item?id=46160698))

## AI, Technology, and Ethics

* [Wall Street races to protect itself from AI bubble](https://rollingout.com/2025/12/05/wall-street-protects-itself-ai-bubble/) ([comments](https://news.ycombinator.com/item?id=46165122))

* [AI Chatbots Can Sway Voters Better Than Political Ads](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46160824))

* [Gemini 3 Pro: the frontier of vision AI](https://blog.google/technology/developers/gemini-3-pro-vision/) ([comments](https://news.ycombinator.com/item?id=46163308))

## Medical and Scientific Advancements

* [Shingles vaccination prevented or delayed dementia](https://www.cell.com/cell/fulltext/S0092-8674(25)01256-5) ([comments](https://news.ycombinator.com/item?id=46164646))

* [Sugars, 'Gum,' Stardust Found In NASA's Asteroid Bennu Samples](https://science.slashdot.org/story/25/12/04/2237242/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46157594))

## Cultural and Societal Insights

* [Kenyan court declares law banning seed sharing unconstitutional](https://apnews.com/article/kenya-seed-sharing-law-ruling-ad4df5a364299b3a9f8515c0f52d5f80) ([comments](https://news.ycombinator.com/item?id=46158578))

* [Lobsters Interview with Aks](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks) ([comments](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks))

* [RoboCop Statue Rises In Detroit](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-12-05, 18:49:07](https://news.ycombinator.com/item?id=46165513) - [SpaceX in Talks for Share Sale That Would Boost Valuation to $800B](https://www.wsj.com/business/spacex-in-talks-for-share-sale-that-would-boost-valuation-to-800-billion-b2852191)
* [2025-12-05, 18:30:48](https://lobste.rs/s/cgohab/framework_laptop_13_gets_arm_processor) - [Framework Laptop 13 gets ARM processor with 12 cores via third-party upgrade kit](https://www.notebookcheck.net/Framework-Laptop-13-gets-ARM-processor-with-12-cores-via-upgrade-kit.1177930.0.html)
* [2025-12-05, 18:30:06](https://news.ycombinator.com/item?id=46165251) - [Show HN: SerpApi MCP Server](https://github.com/serpapi/serpapi-mcp)
* [2025-12-05, 18:29:50](https://news.ycombinator.com/item?id=46165249) - [We Built Lightpanda in Zig](https://lightpanda.io/blog/posts/why-we-built-lightpanda-in-zig)
* [2025-12-05, 18:21:43](https://news.ycombinator.com/item?id=46165122) - [Wall Street races to protect itself from AI bubble](https://rollingout.com/2025/12/05/wall-street-protects-itself-ai-bubble/)
* [2025-12-05, 18:18:00](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix To Buy Warner Bros. In $72 Billion Cash, Stock Deal](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 18:08:19](https://news.ycombinator.com/item?id=46164952) - [WikiFlix: Full Movies Hosted on Wikimedia Commons](https://commons.wikimedia.org/wiki/User:Spinster/WikiFlix)
* [2025-12-05, 17:47:16](https://news.ycombinator.com/item?id=46164646) - [Shingles vaccination prevented or delayed dementia](https://www.cell.com/cell/fulltext/S0092-8674(25)01256-5)
* [2025-12-05, 17:34:24](https://lobste.rs/s/fxccgk/resonant_computing_manifesto) - [The Resonant Computing Manifesto](https://resonantcomputing.org/)
* [2025-12-05, 17:17:00](https://hardware.slashdot.org/story/25/12/05/0315226/why-one-man-is-fighting-for-our-right-to-control-our-garage-door-openers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why One Man Is Fighting For Our Right To Control Our Garage Door Openers](https://hardware.slashdot.org/story/25/12/05/0315226/why-one-man-is-fighting-for-our-right-to-control-our-garage-door-openers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 17:05:27](https://lobste.rs/s/jjkbno/eventual_rust_cpython) - [Eventual Rust in CPython](https://lwn.net/SubscriberLink/1046933/d13433b823f559c0/)
* [2025-12-05, 17:00:10](https://news.ycombinator.com/item?id=46163977) - [Onlook (YC W25) the Cursor for Designers Is Hiring a Founding Fullstack Engineer](https://news.ycombinator.com/item?id=46163977)
* [2025-12-05, 16:48:44](https://news.ycombinator.com/item?id=46163804) - [Jony Ive&apos;s OpenAI Device Barred from Using &apos;Io&apos; Name](https://www.macrumors.com/2025/12/05/openai-device-barred-from-io-name/)
* [2025-12-05, 16:38:30](https://news.ycombinator.com/item?id=46163671) - [Synadia and TigerBeetle Pledge $512,000 to the Zig Software Foundation](https://tigerbeetle.com/blog/2025-10-25-synadia-and-tigerbeetle-pledge-512k-to-the-zig-software-foundation/)
* [2025-12-05, 16:38:03](https://lobste.rs/s/brah61/when_square_pixels_aren_t_square) - [When square pixels aren’t square](https://alexwlchan.net/2025/square-pixels/)
* [2025-12-05, 16:34:25](https://news.ycombinator.com/item?id=46163609) - [Patterns for Defensive Programming in Rust](https://corrode.dev/blog/defensive-programming/)
* [2025-12-05, 16:16:00](https://news.slashdot.org/story/25/12/05/031249/quicktime-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [QuickTime Turns 34](https://news.slashdot.org/story/25/12/05/031249/quicktime-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 16:15:10](https://news.ycombinator.com/item?id=46163308) - [Gemini 3 Pro: the frontier of vision AI](https://blog.google/technology/developers/gemini-3-pro-vision/)
* [2025-12-05, 16:04:20](https://news.ycombinator.com/item?id=46163121) - [I&apos;m Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=46163121)
* [2025-12-05, 15:49:56](https://news.ycombinator.com/item?id=46162872) - [Framework Laptop 13 gets ARM processor with 12 cores via upgrade kit](https://www.notebookcheck.net/Framework-Laptop-13-gets-ARM-processor-with-12-cores-via-upgrade-kit.1177930.0.html)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 15:35:43](https://news.ycombinator.com/item?id=46162656) - [Cloudflare outage on December 5, 2025](https://blog.cloudflare.com/5-december-2025-outage/)
* [2025-12-05, 15:15:00](https://yro.slashdot.org/story/25/12/05/0251201/contractors-with-hacking-records-accused-of-wiping-96-government-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Contractors With Hacking Records Accused of Wiping 96 Government Databases](https://yro.slashdot.org/story/25/12/05/0251201/contractors-with-hacking-records-accused-of-wiping-96-government-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 15:07:51](https://lobste.rs/s/nux2xg/typewriter_plotters) - [Typewriter plotters](https://biosrhythm.com/?p=2143)
* [2025-12-05, 14:14:00](https://news.slashdot.org/story/25/12/05/0146253/av1-open-video-codec-now-powers-30-of-netflix-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AV1 Open Video Codec Now Powers 30% of Netflix Streaming](https://news.slashdot.org/story/25/12/05/0146253/av1-open-video-codec-now-powers-30-of-netflix-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 13:27:25](https://lobste.rs/s/9i16af/layoutz_simple_beautiful_cli_output_for) - [Layoutz – Simple, beautiful CLI output for Haskell 🪶](https://flora.pm/packages/@hackage/layoutz)
* [2025-12-05, 13:13:03](https://news.ycombinator.com/item?id=46160824) - [Show HN: Pbnj – A minimal, self-hosted pastebin you can deploy in 60 seconds](https://pbnj.sh/)
* [2025-12-05, 13:13:00](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chatbots Can Sway Voters Better Than Political Ads](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 13:07:59](https://news.ycombinator.com/item?id=46160773) - [Most technical problems are people problems](https://blog.joeschrag.com/2023/11/most-technical-problems-are-really.html)
* [2025-12-05, 13:02:50](https://lobste.rs/s/gv0fzl/golang_s_big_miss_on_memory_arenas) - [Golang’s Big Miss on Memory Arenas](https://avittig.medium.com/golangs-big-miss-on-memory-arenas-f1375524cc90)
* [2025-12-05, 13:00:28](https://news.ycombinator.com/item?id=46160698) - [Making RSS More Fun](https://matduggan.com/making-rss-more-fun/)
* [2025-12-05, 12:43:01](https://lobste.rs/s/gdtbbh/performance_revolution_javascript) - [The Performance Revolution in JavaScript Tooling](https://blog.appsignal.com/2025/12/03/the-performance-revolution-in-javascript-tooling.html)
* [2025-12-05, 12:21:19](https://news.ycombinator.com/item?id=46160315) - [Netflix to Acquire Warner Bros](https://about.netflix.com/en/news/netflix-to-acquire-warner-bros)
* [2025-12-05, 11:12:00](https://lobste.rs/s/lm8vm2/lisp_style_design) - [LISP Style &amp; Design](https://archive.org/details/miller-and-benson-1990-lisp-style-design)
* [2025-12-05, 10:54:28](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 10:10:00](https://news.slashdot.org/story/25/12/05/0135228/satellite-captures-the-first-detailed-look-at-a-massive-tsunami?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellite Captures the First Detailed Look At a Massive Tsunami](https://news.slashdot.org/story/25/12/05/0135228/satellite-captures-the-first-detailed-look-at-a-massive-tsunami?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 09:09:25](https://news.ycombinator.com/item?id=46158578) - [Kenyan court declares law banning seed sharing unconstitutional](https://apnews.com/article/kenya-seed-sharing-law-ruling-ad4df5a364299b3a9f8515c0f52d5f80)
* [2025-12-05, 07:45:11](https://lobste.rs/s/dgxkdx/unredacted_magazine_issue_008_sep_2025) - [Unredacted Magazine Issue 008 SEP 2025](https://unredactedmagazine.com/issues/008.pdf)
* [2025-12-05, 07:07:00](https://science.slashdot.org/story/25/12/04/2237242/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sugars, &apos;Gum,&apos; Stardust Found In NASA&apos;s Asteroid Bennu Samples](https://science.slashdot.org/story/25/12/04/2237242/sugars-gum-stardust-found-in-nasas-asteroid-bennu-samples?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 07:06:38](https://news.ycombinator.com/item?id=46157594) - [UniFi 5G](https://blog.ui.com/article/introducing-unifi-5g)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 05:12:20](https://lobste.rs/s/ihrynz/how_speed_up_rust_compiler_december_2025) - [How to speed up the Rust compiler in December 2025](https://nnethercote.github.io/2025/12/05/how-to-speed-up-the-rust-compiler-in-december-2025.html)
* [2025-12-05, 03:33:00](https://politics.slashdot.org/story/25/12/04/2228233/republicans-drop-trump-ordered-block-on-state-ai-laws-from-defense-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Republicans Drop Trump-Ordered Block On State AI Laws From Defense Bill](https://politics.slashdot.org/story/25/12/04/2228233/republicans-drop-trump-ordered-block-on-state-ai-laws-from-defense-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 02:45:11](https://lobste.rs/s/whiefr/thoughts_on_go_vs_rust_vs_zig) - [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)
* [2025-12-05, 02:41:30](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks) - [Lobsters Interview with Aks](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks)
* [2025-12-05, 02:02:00](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RoboCop Statue Rises In Detroit](https://entertainment.slashdot.org/story/25/12/04/2211225/robocop-statue-rises-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-05, 01:05:57](https://news.ycombinator.com/item?id=46155619) - [BMW PHEV: Safety fuse replacement is extremely expensive](https://evclinic.eu/2025/12/04/2021-phev-bmw-ibmucp-21f37e-post-crash-recovery-when-eu-engineering-becomes-a-synonym-for-unrepairable-generating-waste/)
* [2025-12-05, 01:01:00](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Probes Reports Waymo Self-Driving Cars Illegally Passed School Buses 19 Times](https://tech.slashdot.org/story/25/12/04/2158221/us-probes-reports-waymo-self-driving-cars-illegally-passed-school-buses-19-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 00:09:57](https://news.ycombinator.com/item?id=46155135) - [Netflix’s AV1 Journey: From Android to TVs and Beyond](https://netflixtechblog.com/av1-now-powering-30-of-netflix-streaming-02f592242d80)
* [2025-12-05, 00:03:36](https://news.ycombinator.com/item?id=46155085) - [Trick users and bypass warnings – Modern SVG Clickjacking attacks](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-05, 00:00:00](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Faces New Complaint For Unlawfully Processing Data On Behalf of Israeli Military](https://yro.slashdot.org/story/25/12/04/2153226/microsoft-faces-new-complaint-for-unlawfully-processing-data-on-behalf-of-israeli-military?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 23:23:00](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plane Crashed After 3D-Printed Part Collapsed](https://hardware.slashdot.org/story/25/12/04/2125206/plane-crashed-after-3d-printed-part-collapsed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 22:22:00](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Blocks Roblox, Apple&apos;s FaceTime](https://yro.slashdot.org/story/25/12/04/186254/russia-blocks-roblox-apples-facetime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 21:46:54](https://lobste.rs/s/x7glis/jujutsu_v0_36_0_released) - [jujutsu v0.36.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.36.0)
* [2025-12-04, 21:21:00](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Hits Meta With Antitrust Probe Over Plans To Block AI Rivals From WhatsApp](https://yro.slashdot.org/story/25/12/04/181250/eu-hits-meta-with-antitrust-probe-over-plans-to-block-ai-rivals-from-whatsapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-04, 21:01:47](https://lobste.rs/s/v82ecm/javascript_announced_30_years_ago) - [JavaScript Announced 30 Years Ago](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)
* [2025-12-04, 20:42:13](https://lobste.rs/s/wkuvhx/hello_blog) - [][ Hello blog](https://nobloat.org/articles/2025-07-01-hello-blog.html)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 20:41:13](https://lobste.rs/s/4pvwma/fairphone_open_sources_fairphone_5_6) - [Fairphone open-sources Fairphone 5 and 6 software, and Moments switch](https://www.fairphone.com/en/2025/12/04/were-big-fans-of-open-source-buildable-code-at-fairphone-heres-why/)
* [2025-12-04, 20:04:42](https://lobste.rs/s/lmyqtn/bcachefs_1_33_0_reconcile) - [bcachefs 1.33.0 - reconcile](https://lore.kernel.org/linux-bcachefs/slvis5ybvo7ch3vxh5yb6turapyq7hai2tddwjriicfxqivnpn@xdpb25wey5xd/)
* [2025-12-04, 19:18:10](https://lobste.rs/s/ojl8fn/why_ed_1) - [Why ed(1)?](https://blog.thechases.com/posts/cli/why-ed1/)
* [2025-12-04, 18:49:20](https://news.ycombinator.com/item?id=46151299) - [I have been writing a niche history blog for 15 years](https://resobscura.substack.com/p/why-i-have-been-writing-a-niche-history)
* [2025-12-04, 16:20:11](https://lobste.rs/s/u0k1h6/django_6_0_released) - [Django 6.0 released](https://www.djangoproject.com/weblog/2025/dec/03/django-60-released/)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 14:04:13](https://lobste.rs/s/omnyrf/svg_filters_clickjacking_2_0) - [SVG Filters - Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-04, 11:34:59](https://lobste.rs/s/xdjgbd/why_i_ignore_spotlight_as_staff_engineer) - [Why I Ignore The Spotlight as a Staff Engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:33:55](https://lobste.rs/s/abxtov/pglite_embeddable_postgres) - [PGlite - Embeddable Postgres](https://pglite.dev/)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 07:35:10](https://news.ycombinator.com/item?id=46144801) - [Show HN: Kraa – Writing App for Everything](https://kraa.io/about)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
* [2025-12-03, 20:59:16](https://lobste.rs/s/dxqyh4/ghostty_is_now_non_profit) - [Ghostty Is Now Non-Profit](https://mitchellh.com/writing/ghostty-non-profit)
* [2025-12-03, 20:49:00](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss) - [Rapidus to Start Construction on 1.4nm Fab in 2027 — R&amp;D on Node Begins Next Year](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss)
* [2025-12-03, 16:02:00](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss) - [openSUSE Tumbleweed to update GRUB package and enable full disk encryption](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-02, 00:39:41](https://news.ycombinator.com/item?id=46115758) - [Nimony (Nim 3.0) Design Principles](https://nim-lang.org/araq/nimony.html)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 17:13:29](https://news.ycombinator.com/item?id=46109978) - [After 40 years of adventure games, Ron Gilbert pivots to outrunning Death](https://arstechnica.com/gaming/2025/12/after-40-years-of-adventure-games-ron-gilbert-pivots-to-outrunning-death/)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-12-01, 01:48:15](https://news.ycombinator.com/item?id=46102546) - [Building a Copying GC for the Plush Programming Language](https://pointersgonewild.com/2025-11-29-building-a-copying-gc-for-the-plush-programming-language/)
