# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Microsoft's AI Chief Says All White-Collar Desk Work Will Be Automated Within 18 Months](https://slashdot.org/story/26/02/17/1932249/microsofts-ai-chief-says-all-white-collar-desk-work-will-be-automated-within-18-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47053267))

* [An AI Agent Published a Hit Piece on Me – Forensics and More Fallout](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-3/) ([comments](https://news.ycombinator.com/item?id=47051956))

* [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&from=rss) ([comments](https://news.ycombinator.com/item?id=47030509))

* [Sony Tech Can Identify Original Music in AI-Generated Songs](https://entertainment.slashdot.org/story/26/02/17/1228205/sony-tech-can-identify-original-music-in-ai-generated-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47050872))

## Data Privacy and Security

* [US Lawyers Fire Up Privacy Class Action Accusing Lenovo of Bulk Data Transfers To China](https://yro.slashdot.org/story/26/02/17/1955224/us-lawyers-fire-up-privacy-class-action-accusing-lenovo-of-bulk-data-transfers-to-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47053800))

* ["ICE Out of Our Faces Act" Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26%2F02%2F15%2F2333213&from=rss) ([comments](https://news.ycombinator.com/item?id=47049776))

* [EU Parliament Blocks AI Features Over Cyber, Privacy Fears](https://yro.slashdot.org/story/26/02/16/1738256/eu-parliament-blocks-ai-features-over-cyber-privacy-fears?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/eec8ez))

## Cultural and Economic Trends

* [Britain Lost 14,000 Pubs, a Quarter, in 13 Years](https://news.slashdot.org/story/26/02/17/1836238/britain-lost-14000-pubs-a-quarter-in-13-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47051852))

* [Canadians Promised to Boycott Travel to US. They Meant It](https://www.usatoday.com/story/travel/2026/02/12/canadian-tourism-us-decline/88632515007/) ([comments](https://news.ycombinator.com/item?id=47052119))

* [A YouTuber's $3M Movie Nearly Beat Disney's $40M Thriller at the Box Office](https://entertainment.slashdot.org/story/26/02/17/1825212/a-youtubers-3m-movie-nearly-beat-disneys-40m-thriller-at-the-box-office?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/vudtax))

## Open Source and Developer Tools

* [BarraCUDA Open-source CUDA Compiler Targeting AMD GPUs](https://github.com/Zaneham/BarraCUDA) ([comments](https://news.ycombinator.com/item?id=47052941))

* [Gentoo on Codeberg](https://www.gentoo.org/news/2026/02/16/codeberg.html) ([comments](https://news.ycombinator.com/item?id=47050067))

* [Oat, Ultra-Lightweight UI Library, Semantic, Minimal, Zero Dependencies](https://oat.ink/) ([comments](https://lobste.rs/s/eec8ez))

* [One page of async Rust](https://dotat.at/@/2026-02-16-async.html) ([comments](https://lobste.rs/s/xqld8c))

## Science and Innovations

* [Physicists Make Electrons Flow Like Water](https://www.quantamagazine.org/physicists-make-electrons-flow-like-water-20260211/) ([comments](https://news.ycombinator.com/item?id=47007117))

* [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&from=rss) ([comments](https://lobste.rs/s/yrofakecode/vectorware ))

* [Astronomers Discover the Surprising Reason for a Star's Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&from=rss) ([comments](https://news.ycombinator.com/item?id=430042018))

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

* [2026-02-17, 21:50:23](https://news.ycombinator.com/item?id=47053912) - [America&apos;s Future Leaders Are Learning to Become Grifters](https://www.robkhenderson.com/p/americas-future-leaders-are-learning)
* [2026-02-17, 21:26:00](https://yro.slashdot.org/story/26/02/17/1955224/us-lawyers-fire-up-privacy-class-action-accusing-lenovo-of-bulk-data-transfers-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Lawyers Fire Up Privacy Class Action Accusing Lenovo of Bulk Data Transfers To China](https://yro.slashdot.org/story/26/02/17/1955224/us-lawyers-fire-up-privacy-class-action-accusing-lenovo-of-bulk-data-transfers-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 21:00:30](https://news.ycombinator.com/item?id=47053267) - [Structured AI (YC F25) Is Hiring](https://www.ycombinator.com/companies/structured-ai/jobs/q3cx77y-gtm-intern)
* [2026-02-17, 20:45:00](https://news.slashdot.org/story/26/02/17/1937251/the-small-english-town-swept-up-in-the-global-ai-arms-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Small English Town Swept Up in the Global AI Arms Race](https://news.slashdot.org/story/26/02/17/1937251/the-small-english-town-swept-up-in-the-global-ai-arms-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 20:35:18](https://news.ycombinator.com/item?id=47052941) - [BarraCUDA Open-source CUDA compiler targeting AMD GPUs](https://github.com/Zaneham/BarraCUDA)
* [2026-02-17, 20:15:57](https://news.ycombinator.com/item?id=47052674) - [Show HN: I&apos;m launching a LPFM radio station](https://www.kpbj.fm/)
* [2026-02-17, 20:09:20](https://news.ycombinator.com/item?id=47052579) - [Property taxes going up? The 340B Program might be partly responsible](https://www.pricepoints.health/cp/188296406)
* [2026-02-17, 20:04:00](https://slashdot.org/story/26/02/17/1932249/microsofts-ai-chief-says-all-white-collar-desk-work-will-be-automated-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s AI Chief Says All White-Collar Desk Work Will Be Automated Within 18 Months](https://slashdot.org/story/26/02/17/1932249/microsofts-ai-chief-says-all-white-collar-desk-work-will-be-automated-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 19:42:09](https://news.ycombinator.com/item?id=47052119) - [Canadians promised to boycott travel to US. They meant it](https://www.usatoday.com/story/travel/2026/02/12/canadian-tourism-us-decline/88632515007/)
* [2026-02-17, 19:38:35](https://lobste.rs/s/xqld8c/one_page_async_rust) - [One page of async Rust](https://dotat.at/@/2026-02-16-async.html)
* [2026-02-17, 19:35:09](https://news.ycombinator.com/item?id=47052007) - [Meta to retire messenger desktop app and messenger.com in April 2026](https://dzrh.com.ph/post/meta-to-retire-messenger-desktop-app-and-messengercom-in-april-2026-users-shift-to-web-and-mobile-platforms)
* [2026-02-17, 19:31:45](https://news.ycombinator.com/item?id=47051956) - [An AI Agent Published a Hit Piece on Me – Forensics and More Fallout](https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me-part-3/)
* [2026-02-17, 19:25:00](https://news.slashdot.org/story/26/02/17/1836238/britain-lost-14000-pubs-a-quarter-in-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Lost 14,000 Pubs, a Quarter, in 13 Years](https://news.slashdot.org/story/26/02/17/1836238/britain-lost-14000-pubs-a-quarter-in-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 19:24:55](https://news.ycombinator.com/item?id=47051852) - [Show HN: AsteroidOS 2.0 – Nobody asked, we shipped anyway](https://asteroidos.org/news/2-0-release/index.html)
* [2026-02-17, 19:02:44](https://news.ycombinator.com/item?id=47051546) - [Tesla &apos;Robotaxi&apos; adds 5 more crashes in Austin in a month – 4x worse than humans](https://electrek.co/2026/02/17/tesla-robotaxi-adds-5-more-crashes-austin-month-4x-worse-than-humans/)
* [2026-02-17, 18:53:45](https://lobste.rs/s/eec8ez/oat_ultra_lightweight_ui_library) - [Oat, Ultra-lightweight UI library, Semantic, minimal, zero dependencies](https://oat.ink/)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 18:45:00](https://entertainment.slashdot.org/story/26/02/17/1825211/a-youtubers-3m-movie-nearly-beat-disneys-40m-thriller-at-the-box-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A YouTuber&apos;s $3M Movie Nearly Beat Disney&apos;s $40M Thriller at the Box Office](https://entertainment.slashdot.org/story/26/02/17/1825211/a-youtubers-3m-movie-nearly-beat-disneys-40m-thriller-at-the-box-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 18:21:22](https://lobste.rs/s/yn5zjh/terminals_should_generate_256_color) - [Terminals should generate the 256-color palette](https://gist.github.com/jake-stewart/0a8ea46159a7da2c808e5be2177e1783)
* [2026-02-17, 18:15:36](https://news.ycombinator.com/item?id=47050872) - [Show HN: Pg-typesafe – Strongly typed queries for PostgreSQL and TypeScript](https://github.com/n-e/pg-typesafe)
* [2026-02-17, 18:05:00](https://entertainment.slashdot.org/story/26/02/17/181203/blind-listening-test-finds-audiophiles-unable-to-distinguish-copper-cable-from-a-banana-or-wet-mud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blind Listening Test Finds Audiophiles Unable To Distinguish Copper Cable From a Banana or Wet Mud](https://entertainment.slashdot.org/story/26/02/17/181203/blind-listening-test-finds-audiophiles-unable-to-distinguish-copper-cable-from-a-banana-or-wet-mud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 17:48:52](https://news.ycombinator.com/item?id=47050488) - [Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
* [2026-02-17, 17:40:50](https://news.ycombinator.com/item?id=47050376) - [Discord Rival Gets Overwhelmed by Exodus of Players Fleeing Age-Verification](https://kotaku.com/discord-alternative-teamspeak-age-verification-check-rivals-2000669693)
* [2026-02-17, 17:29:49](https://news.ycombinator.com/item?id=47050227) - [Climbing Mount Fuji visualized through milestone stamps](https://fuji.halfof8.com/)
* [2026-02-17, 17:25:00](https://hardware.slashdot.org/story/26/02/17/1710225/microns-pcie-60-ssd-hits-mass-production-at-28-gbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Micron&apos;s PCIe 6.0 SSD Hits Mass Production at 28 GB/s](https://hardware.slashdot.org/story/26/02/17/1710225/microns-pcie-60-ssd-hits-mass-production-at-28-gbs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 17:21:04](https://news.ycombinator.com/item?id=47050067) - [Gentoo on Codeberg](https://www.gentoo.org/news/2026/02/16/codeberg.html)
* [2026-02-17, 17:10:44](https://lobste.rs/s/vudtax/plasma_6_6_released) - [Plasma 6.6 released](https://kde.org/announcements/plasma/6/6.6.0/)
* [2026-02-17, 17:09:18](https://lobste.rs/s/2y5l47/gentoo_on_codeberg) - [Gentoo on Codeberg](https://www.gentoo.org/news/2026/02/16/codeberg.html)
* [2026-02-17, 17:09:08](https://lobste.rs/s/m4bj7v/gpu_code_can_now_use_rust_s_async_await) - [GPU code can now use Rust&apos;s async/await](https://vectorware.com/blog/async-await-on-gpu/)
* [2026-02-17, 17:07:59](https://news.ycombinator.com/item?id=47049845) - [Chess engines do weird stuff](https://girl.surgery/chess)
* [2026-02-17, 17:03:09](https://news.ycombinator.com/item?id=47049776) - [Launch HN: Sonarly (YC W26) – AI agent to triage and fix your production alerts](https://sonarly.com/)
* [2026-02-17, 16:59:34](https://news.ycombinator.com/item?id=47049718) - [So you want to build a tunnel](https://practical.engineering/blog/2026/2/17/so-you-want-to-build-a-tunnel)
* [2026-02-17, 16:53:05](https://news.ycombinator.com/item?id=47049628) - [Async/Await on the GPU](https://www.vectorware.com/blog/async-await-on-gpu/)
* [2026-02-17, 16:48:43](https://news.ycombinator.com/item?id=47049573) - [HackMyClaw](https://hackmyclaw.com/)
* [2026-02-17, 16:44:00](https://science.slashdot.org/story/26/02/17/1644203/99-of-adults-over-40-have-shoulder-abnormalities-on-an-mri-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [99% of Adults Over 40 Have Shoulder &apos;Abnormalities&apos; on an MRI, Study Finds](https://science.slashdot.org/story/26/02/17/1644203/99-of-adults-over-40-have-shoulder-abnormalities-on-an-mri-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 16:42:35](https://news.ycombinator.com/item?id=47049479) - [Using go fix to modernize Go code](https://go.dev/blog/gofix)
* [2026-02-17, 16:30:33](https://lobste.rs/s/40ndqz/using_go_fix_modernize_go_code) - [Using go fix to modernize Go code](https://go.dev/blog/gofix)
* [2026-02-17, 16:22:49](https://news.ycombinator.com/item?id=47049227) - [Show HN: I taught LLMs to play Magic: The Gathering against each other](https://mage-bench.com/)
* [2026-02-17, 16:05:00](https://slashdot.org/story/26/02/17/1550222/china-once-stole-foreign-ideas-now-it-wants-to-protect-its-own?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Once Stole Foreign Ideas. Now It Wants To Protect Its Own](https://slashdot.org/story/26/02/17/1550222/china-once-stole-foreign-ideas-now-it-wants-to-protect-its-own?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 15:43:39](https://news.ycombinator.com/item?id=47048733) - [Show HN: I wrote a technical history book on Lisp](https://berksoft.ca/gol/)
* [2026-02-17, 15:27:00](https://tech.slashdot.org/story/26/02/17/1528202/mazda-finally-admits-its-infotainment-system-is-the-worst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mazda Finally Admits Its Infotainment System Is the Worst](https://tech.slashdot.org/story/26/02/17/1528202/mazda-finally-admits-its-infotainment-system-is-the-worst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 14:59:45](https://lobste.rs/s/vpbnek/babashka_1_12_215_revenge_tuis) - [Babashka 1.12.215: Revenge of the TUIs](https://blog.michielborkent.nl/babashka-1.12.215.html)
* [2026-02-17, 14:52:14](https://lobste.rs/s/2tpg37/how_single_typo_led_rce_firefox) - [How a single typo led to RCE in Firefox](https://kqx.io/post/firefox0day/)
* [2026-02-17, 14:45:00](https://tech.slashdot.org/story/26/02/17/1445232/software-isnt-dead-but-its-cosy-business-model-might-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Software Isn&apos;t Dead, But Its Cosy Business Model Might Be&apos;](https://tech.slashdot.org/story/26/02/17/1445232/software-isnt-dead-but-its-cosy-business-model-might-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 14:43:14](https://news.ycombinator.com/item?id=47048004) - [I converted 2D conventional flight tracking into 3D](https://aeris.edbn.me/?city=SFO)
* [2026-02-17, 14:04:09](https://lobste.rs/s/tt6ieg/vinyl_cache_has_left_github) - [Vinyl Cache has left github](https://vinyl-cache.org/organization/moving.html)
* [2026-02-17, 14:00:00](https://it.slashdot.org/story/26/02/17/1357202/valves-steam-deck-oled-will-be-intermittently-out-of-stock-because-of-the-ram-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve&apos;s Steam Deck OLED Will Be &apos;Intermittently&apos; Out of Stock Because of the RAM Crisis](https://it.slashdot.org/story/26/02/17/1357202/valves-steam-deck-oled-will-be-intermittently-out-of-stock-because-of-the-ram-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 13:53:39](https://lobste.rs/s/syv21m/dangerously_skip_reading_code) - [--dangerously-skip-reading-code](https://olano.dev/blog/dangerously-skip)
* [2026-02-17, 13:45:56](https://lobste.rs/s/hax4cv/undo_vi_its_successors) - [Undo in Vi and its successors](https://utcc.utoronto.ca/~cks/space/blog/unix/ViUndoMyViews)
* [2026-02-17, 13:44:25](https://lobste.rs/s/rvckuy/sometimes_giving_syndication_feed) - [Sometimes giving syndication feed readers good errors is a mistake](https://utcc.utoronto.ca/~cks/space/blog/web/FeedReaderErrorsProblemII)
* [2026-02-17, 12:30:00](https://entertainment.slashdot.org/story/26/02/17/1228205/sony-tech-can-identify-original-music-in-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Tech Can Identify Original Music in AI-Generated Songs](https://entertainment.slashdot.org/story/26/02/17/1228205/sony-tech-can-identify-original-music-in-ai-generated-songs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 12:00:07](https://lobste.rs/s/0xodyl/ai_agent_lands_prs_major_oss_projects) - [AI Agent Lands PRs in Major OSS Projects, Targets Maintainers via Cold Outreach](https://socket.dev/blog/ai-agent-lands-prs-in-major-oss-projects-targets-maintainers-via-cold-outreach)
* [2026-02-17, 11:48:07](https://lobste.rs/s/c6cg0b/next_version_curling_io) - [The Next Version of Curling IO](https://curling.io/blog/the-next-version-of-curling-io)
* [2026-02-17, 11:23:33](https://lobste.rs/s/stgsof/fast_sorting_branchless_by_design) - [Fast sorting, branchless by design](https://00f.net/2026/02/17/sorting-without-leaking-secrets/)
* [2026-02-17, 10:29:14](https://news.ycombinator.com/item?id=47045804) - [Is Show HN dead? No, but it&apos;s drowning](https://www.arthurcnops.blog/death-of-show-hn/)
* [2026-02-17, 10:02:36](https://news.ycombinator.com/item?id=47045612) - [GrapheneOS – Break Free from Google and Apple](https://blog.tomaszdunia.pl/grapheneos-eng/)
* [2026-02-17, 09:34:34](https://lobste.rs/s/psvif8/broken_heart) - [A Broken Heart](https://allenpike.com/2026/a-broken-heart/)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 09:00:00](https://yro.slashdot.org/story/26/02/16/1738256/eu-parliament-blocks-ai-features-over-cyber-privacy-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Parliament Blocks AI Features Over Cyber, Privacy Fears](https://yro.slashdot.org/story/26/02/16/1738256/eu-parliament-blocks-ai-features-over-cyber-privacy-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 08:35:05](https://lobste.rs/s/ulht8t/servo_project_its_impact_on_web_platform) - [The Servo project and its impact on the web platform ecosystem](https://servo.org/slides/2026-02-fosdem-servo-web-platform/)
* [2026-02-17, 07:33:44](https://lobste.rs/s/mnmell/ai_called_winter_neurosymbolic) - [An AI Called Winter: Neurosymbolic Computation or Illusion?](https://dustycloud.org/blog/an-ai-called-winter-neurosymbolic-computation-or-illusion/)
* [2026-02-17, 06:01:00](https://it.slashdot.org/story/26/02/16/1843220/secondhand-laptop-market-goes-mainstream-amid-memory-crunch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Secondhand Laptop Market Goes &apos;Mainstream&apos; Amid Memory Crunch](https://it.slashdot.org/story/26/02/16/1843220/secondhand-laptop-market-goes-mainstream-amid-memory-crunch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-17, 02:11:33](https://lobste.rs/s/ov9qvf/poor_deming_never_stood_chance) - [Poor Deming never stood a chance](https://surfingcomplexity.blog/2026/02/16/poor-deming-never-stood-a-chance/)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 23:24:39](https://lobste.rs/s/b8ec4x/rise_triforce) - [Rise of the Triforce](https://dolphin-emu.org/blog/2026/02/16/rise-of-the-triforce/)
* [2026-02-16, 22:47:58](https://lobste.rs/s/c4c5ri/modern_css_code_snippets) - [Modern CSS Code Snippets](https://modern-css.com)
* [2026-02-16, 20:21:02](https://lobste.rs/s/rjcaly/let_s_practice_bsd_rd) - [Let&apos;s practice! (bsd.rd)](https://openbsdjumpstart.org/bsd.rd/)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 15:58:51](https://lobste.rs/s/rybouo/browse_code_by_meaning) - [Browse code by meaning](https://haskellforall.com/2026/02/browse-code-by-meaning)
* [2026-02-16, 15:58:15](https://lobste.rs/s/pqn3u0/til_docker_log_rotation) - [TIL: Docker log rotation](https://ntietz.com/blog/til-docker-log-rotation/)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 03:22:31](https://news.ycombinator.com/item?id=47030509) - [Contra \&quot;Grandmaster-level chess without search\&quot; (2024)](https://cosmo.tardis.ac/files/2024-02-13-searchless.html)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
* [2026-02-15, 19:20:00](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss) - [Claude Opus 4.6 Spends $20K Trying to Write a C Compiler](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 00:32:25](https://news.ycombinator.com/item?id=47019902) - [Don&apos;t pass on small block ciphers](https://00f.net/2026/02/10/small-block-ciphers/)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
* [2026-02-13, 20:05:27](https://news.ycombinator.com/item?id=47007117) - [Physicists Make Electrons Flow Like Water](https://www.quantamagazine.org/physicists-make-electrons-flow-like-water-20260211/)
* [2026-02-13, 19:51:00](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss) - [80386 Barrel Shifter](https://soylentnews.org/article.pl?sid=26/02/13/0612228&amp;from=rss)
* [2026-02-13, 15:08:00](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss) - [Taiwan Tells Uncle Sam its Chip Ecosystem Ain&apos;t Going Anywhere](https://soylentnews.org/article.pl?sid=26/02/13/0611200&amp;from=rss)
* [2026-02-13, 14:11:42](https://news.ycombinator.com/item?id=47002926) - [Assistant to the Regional Manager](https://smallpotatoes.paulbloom.net/p/assistant-to-the-regional-manager)
* [2026-02-13, 10:26:00](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss) - [New Critique Debunks Claim That Trees Can Sense a Solar Eclipse](https://soylentnews.org/article.pl?sid=26/02/12/0346212&amp;from=rss)
* [2026-02-13, 05:38:00](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss) - [Google Recovers “Deleted” Nest Video in High-Profile Abduction Case](https://soylentnews.org/article.pl?sid=26/02/12/0319239&amp;from=rss)
* [2026-02-13, 00:47:00](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss) - [SpaceX is Pivoting to Focus on a Moon Base Before Mars](https://soylentnews.org/article.pl?sid=26/02/12/0318206&amp;from=rss)
