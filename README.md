# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [Apple Bundles Creative Apps Into a Single Subscription](https://tech.slashdot.org/story/26/01/13/2019228/apple-bundles-creative-apps-into-a-single-subscription?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple introduces a unified subscription service for its creative apps, simplifying access for users.

* [Researchers Beam Power From a Moving Airplane](https://mobile.slashdot.org/story/26/01/13/049230/researchers-beam-power-from-a-moving-airplane?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Groundbreaking research demonstrates the successful transfer of power to an aircraft in motion.

* [Signal creator Moxie Marlinspike wants to do for AI what he did for messaging](https://arstechnica.com/security/2026/01/signal-creator-moxie-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging/) - Moxie Marlinspike discusses his vision to make AI secure, reliable, and ethical, akin to Signal's impact on encrypted messaging.

* [EV Roadside Repairs Easier Than Petrol or Diesel, New Data Suggests](https://tech.slashdot.org/story/26/01/13/1941214/ev-roadside-repairs-easier-than-petrol-or-diesel-new-data-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New data supports that electric vehicle roadside repairs can be simpler compared to traditional fuel-powered cars.

## Artificial Intelligence Developments

* [Signal leaders warn agentic AI is an insecure, unreliable surveillance risk](https://coywolf.com/news/productivity/signal-president-and-vp-warn-agentic-ai-is-insecure-unreliable-and-a-surveillance-nightmare/) - Leaders from Signal highlight the potential dangers posed by agentic artificial intelligence in cybersecurity and privacy.

* [AI Coding Assistants Are Getting Worse](https://spectrum.ieee.org/ai-coding-degrades) - A critique of the declining performance of AI coding tools and their impact on developers.

* [Anthropic blocks third-party tools using Claude Code OAuth tokens](https://archaeologist.dev/artifacts/anthropic) - A detailed report on Anthropic's decision to restrict third-party tools using its AI technology.

## Sustainability and Environmental Issues

* [America's Biggest Power Grid Operator Has an AI Problem - Too Many Data Centers](https://hardware.slashdot.org/story/26/01/13/1732222/americas-biggest-power-grid-operator-has-an-ai-problem---too-many-data-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - America’s primary power grid struggles to balance the growth of data centers with energy resources.

* [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&from=rss) - Research on durable microbes paves the way for sustainable construction on Mars.

* [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&from=rss) - Study reveals the impact of microplastics on oceans' ability to absorb carbon dioxide effectively.

## Science and Health Discoveries

* [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer's](https://soylentnews.org/article.pl?sid=26/01/08/0325201&from=rss) - A breakthrough in Alzheimer’s research shows potential for brain recovery.

* [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&from=rss) - A rare condition, auto-brewery syndrome, is explained by recent scientific discoveries.

* [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&from=rss) - Research unveils the detrimental effects of microplastics on oceanic carbon absorption.

## Web and Software Development

* [Your CLI's completion should know what options you've already typed](https://hackers.pub/@hongminhee/2026/optique-context-aware-cli-completion) - An innovative proposal for context-aware autocompletion for command-line tools.

* [Volumetric Cloud Rendering](https://www.jacktollenaar.top/articles/clouds.html) - An exploration of the evolving techniques in rendering realistic volumetric clouds.

* [The hidden cost of PostgreSQL arrays](https://boringsql.com/posts/good-bad-arrays/) - Delving into the underlying costs of using arrays in PostgreSQL.

## Historical and Scientific Curiosities

* [An Archaeology of Tracking on Government Websites](https://www.flux.utah.edu/paper/singh-pets26) - A deep dive into the history and implications of data tracking on government platforms.

* [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&from=rss) - A novel approach to categorizing AI technologies using the periodic table as an analogy.

* [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&from=rss) - A look at how literary significance may not always align with public ratings.

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

* [2026-01-13, 22:02:00](https://tech.slashdot.org/story/26/01/13/2019228/apple-bundles-creative-apps-into-a-single-subscription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Bundles Creative Apps Into a Single Subscription](https://tech.slashdot.org/story/26/01/13/2019228/apple-bundles-creative-apps-into-a-single-subscription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 21:55:29](https://news.ycombinator.com/item?id=46608802) - [An Archaeology of Tracking on Government Websites](https://www.flux.utah.edu/paper/singh-pets26)
* [2026-01-13, 21:50:22](https://news.ycombinator.com/item?id=46608731) - [Running Lean at Scale](https://harmonic.fun/news#blog-post-lean)
* [2026-01-13, 21:46:21](https://lobste.rs/s/k5yvju/bevy_0_18) - [Bevy 0.18](https://bevy.org/news/bevy-0-18/)
* [2026-01-13, 21:21:00](https://slashdot.org/story/26/01/13/206221/taiwan-issues-arrest-warrant-for-oneplus-ceo-for-china-hires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Issues Arrest Warrant for OnePlus CEO for China Hires](https://slashdot.org/story/26/01/13/206221/taiwan-issues-arrest-warrant-for-oneplus-ceo-for-china-hires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 21:13:19](https://lobste.rs/s/pwj9ue/truffleruby_33_is_released) - [TruffleRuby 33 is Released](https://truffleruby.dev/blog/truffleruby-33-is-released)
* [2026-01-13, 20:52:00](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss) - [A Sit-Stand Ratio ‘Sweet Spot’ May Boost Office Productivity](https://soylentnews.org/article.pl?sid=26/01/12/0132243&amp;from=rss)
* [2026-01-13, 20:45:43](https://news.ycombinator.com/item?id=46607681) - [Games Workshop bans staff from using AI, management not excited about the tech](https://www.ign.com/articles/warhammer-maker-games-workshop-bans-its-staff-from-using-ai-in-its-content-or-designs-says-none-of-its-senior-managers-are-currently-excited-about-the-tech)
* [2026-01-13, 20:44:00](https://tech.slashdot.org/story/26/01/13/1941214/ev-roadside-repairs-easier-than-petrol-or-diesel-new-data-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Roadside Repairs Easier Than Petrol or Diesel, New Data Suggests](https://tech.slashdot.org/story/26/01/13/1941214/ev-roadside-repairs-easier-than-petrol-or-diesel-new-data-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 20:04:00](https://tech.slashdot.org/story/26/01/13/1928228/apple-you-still-dont-understand-the-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple: You (Still) Don&apos;t Understand the Vision Pro](https://tech.slashdot.org/story/26/01/13/1928228/apple-you-still-dont-understand-the-vision-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 19:56:37](https://news.ycombinator.com/item?id=46606902) - [Open sourcing Dicer: Databricks&apos;s auto-sharder](https://www.databricks.com/blog/open-sourcing-dicer-databricks-auto-sharder)
* [2026-01-13, 19:53:07](https://news.ycombinator.com/item?id=46606854) - [Ask HN: Vxlan over WireGuard or WireGuard over Vxlan?](https://news.ycombinator.com/item?id=46606854)
* [2026-01-13, 19:44:44](https://news.ycombinator.com/item?id=46606715) - [Ask HN: Discrepancy between Lichess and Stockfish](https://news.ycombinator.com/item?id=46606715)
* [2026-01-13, 19:22:00](https://tech.slashdot.org/story/26/01/13/194208/mercedes-temporarily-scraps-its-level-3-eyes-off-driving-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mercedes Temporarily Scraps Its Level 3 &apos;Eyes-off&apos; Driving Feature](https://tech.slashdot.org/story/26/01/13/194208/mercedes-temporarily-scraps-its-level-3-eyes-off-driving-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 18:58:55](https://news.ycombinator.com/item?id=46605950) - [A university got itself banned from the Linux kernel (2021)](https://www.theverge.com/2021/4/30/22410164/linux-kernel-university-of-minnesota-banned-open-source)
* [2026-01-13, 18:54:30](https://news.ycombinator.com/item?id=46605854) - [No management needed: anti-patterns in early-stage engineering teams](https://www.ablg.io/blog/no-management-needed)
* [2026-01-13, 18:46:06](https://news.ycombinator.com/item?id=46605716) - [Choosing learning over autopilot](https://anniecherkaev.com/choosing-learning-over-autopilot)
* [2026-01-13, 18:44:00](https://slashdot.org/story/26/01/13/1845204/verizon-to-stop-automatic-unlocking-of-phones-as-fcc-ends-60-day-unlock-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon To Stop Automatic Unlocking of Phones as FCC Ends 60-Day Unlock Rule](https://slashdot.org/story/26/01/13/1845204/verizon-to-stop-automatic-unlocking-of-phones-as-fcc-ends-60-day-unlock-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 18:43:28](https://news.ycombinator.com/item?id=46605675) - [Show HN: Nogic – VS Code extension that visualizes your codebase as a graph](https://marketplace.visualstudio.com/items?itemName=Nogic.nogic)
* [2026-01-13, 18:35:52](https://news.ycombinator.com/item?id=46605553) - [Signal leaders warn agentic AI is an insecure, unreliable surveillance risk](https://coywolf.com/news/productivity/signal-president-and-vp-warn-agentic-ai-is-insecure-unreliable-and-a-surveillance-nightmare/)
* [2026-01-13, 18:31:50](https://news.ycombinator.com/item?id=46605490) - [AI Generated Music Barred from Bandcamp](https://old.reddit.com/r/BandCamp/comments/1qbw8ba/ai_generated_music_on_bandcamp/)
* [2026-01-13, 18:30:59](https://lobste.rs/s/flirvs/server_first_web_component_architecture) - [Server-First Web Component Architecture: SXO + Reactive Component](https://dev.to/gc-victor/the-server-first-web-component-architecture-sxo-reactive-components-n4p)
* [2026-01-13, 18:04:00](https://hardware.slashdot.org/story/26/01/13/1732222/americas-biggest-power-grid-operator-has-an-ai-problem---too-many-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Biggest Power Grid Operator Has an AI Problem - Too Many Data Centers](https://hardware.slashdot.org/story/26/01/13/1732222/americas-biggest-power-grid-operator-has-an-ai-problem---too-many-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 17:55:37](https://news.ycombinator.com/item?id=46604862) - [Show HN: Ayder – HTTP-native durable event log written in C (curl as client)](https://github.com/A1darbek/ayder)
* [2026-01-13, 17:53:31](https://news.ycombinator.com/item?id=46604828) - [Ask HN: Iran&apos;s 120h internet shutdown, phones back. How to stay resilient?](https://news.ycombinator.com/item?id=46604828)
* [2026-01-13, 17:25:00](https://developers.slashdot.org/story/26/01/13/1613232/anthropic-invests-15-million-in-the-python-software-foundation-and-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Invests $1.5 Million in the Python Software Foundation and Open Source Security](https://developers.slashdot.org/story/26/01/13/1613232/anthropic-invests-15-million-in-the-python-software-foundation-and-open-source-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 17:23:46](https://news.ycombinator.com/item?id=46604250) - [How to make a damn website (2024)](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-13, 17:10:42](https://news.ycombinator.com/item?id=46603995) - [The Tulip Creative Computer](https://github.com/shorepine/tulipcc)
* [2026-01-13, 17:09:26](https://lobste.rs/s/zymqza/forklifts_facts_functions_building) - [Forklifts, Facts, and Functions: Building a Warehouse Management System with Clojure+Datomic](https://www.youtube.com/watch?v=NV02r1Y1B-8)
* [2026-01-13, 17:01:55](https://news.ycombinator.com/item?id=46603829) - [Legion Health (YC S21) Hiring Cracked Founding Eng for AI-Native Ops](https://jobs.ashbyhq.com/legionhealth/ffdd2b52-eb21-489e-b124-3c0804231424)
* [2026-01-13, 16:51:10](https://lobste.rs/s/njh5jz/i_made_typescript_native_code_compiler) - [I made a TypeScript to native code compiler via CLR and NativeAOT](https://github.com/tsoniclang/tsonic)
* [2026-01-13, 16:47:39](https://news.ycombinator.com/item?id=46603535) - [Influencers and OnlyFans models are dominating U.S. O-1 visa requests](https://www.theguardian.com/us-news/2026/jan/11/onlyfans-influencers-us-o-1-visa)
* [2026-01-13, 16:28:04](https://lobste.rs/s/mb07nn/anthropic_invests_1_5_million_python) - [Anthropic invests $1.5 million in the Python Software Foundation and open source security](https://pyfound.blogspot.com/2025/12/anthropic-invests-in-python.html)
* [2026-01-13, 16:24:44](https://lobste.rs/s/3bhiap/signal_creator_moxie_marlinspike_wants) - [Signal creator Moxie Marlinspike wants to do for AI what he did for messaging](https://arstechnica.com/security/2026/01/signal-creator-moxie-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging/)
* [2026-01-13, 16:22:59](https://news.ycombinator.com/item?id=46603111) - [Are two heads better than one?](https://eieio.games/blog/two-heads-arent-better-than-one/)
* [2026-01-13, 16:20:00](https://news.slashdot.org/story/26/01/13/1619251/scott-adams-creator-of-the-dilbert-comic-strip-dies-at-68?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scott Adams, Creator of the &apos;Dilbert&apos; Comic Strip, Dies at 68](https://news.slashdot.org/story/26/01/13/1619251/scott-adams-creator-of-the-dilbert-comic-strip-dies-at-68?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss) - [Poul-Henning Kamp&apos;s Feedback to the EU on Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/12/0131237&amp;from=rss)
* [2026-01-13, 16:05:00](https://slashdot.org/story/26/01/13/165244/jpmorgan-warns-10-credit-card-rate-cap-would-backfire-on-consumers-and-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Warns 10% Credit Card Rate Cap Would Backfire on Consumers and Economy](https://slashdot.org/story/26/01/13/165244/jpmorgan-warns-10-credit-card-rate-cap-would-backfire-on-consumers-and-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 15:38:45](https://lobste.rs/s/6skrep/ai_coding_assistants_are_getting_worse) - [AI Coding Assistants Are Getting Worse](https://spectrum.ieee.org/ai-coding-degrades)
* [2026-01-13, 15:35:09](https://news.ycombinator.com/item?id=46602324) - [Show HN: Self-host Reddit – 2.38B posts, works offline, yours forever](https://github.com/19-84/redd-archiver)
* [2026-01-13, 15:29:00](https://slashdot.org/story/26/01/13/1529250/signal-creator-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Creator Marlinspike Wants To Do For AI What He Did For Messaging](https://slashdot.org/story/26/01/13/1529250/signal-creator-marlinspike-wants-to-do-for-ai-what-he-did-for-messaging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 15:18:43](https://news.ycombinator.com/item?id=46602102) - [Scott Adams has died](https://www.youtube.com/watch?v=Rs_JrOIo3SE)
* [2026-01-13, 14:45:44](https://news.ycombinator.com/item?id=46601631) - [Show HN: FastScheduler – Decorator-first Python task scheduler, async support](https://github.com/MichielMe/fastscheduler)
* [2026-01-13, 14:44:00](https://tech.slashdot.org/story/26/01/13/1443226/meta-begins-job-cuts-as-it-shifts-from-metaverse-to-ai-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Begins Job Cuts as It Shifts From Metaverse to AI Devices](https://tech.slashdot.org/story/26/01/13/1443226/meta-begins-job-cuts-as-it-shifts-from-metaverse-to-ai-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 14:22:40](https://lobste.rs/s/svclo4/volumetric_cloud_rendering) - [Volumetric Cloud Rendering](https://www.jacktollenaar.top/articles/clouds.html)
* [2026-01-13, 14:14:18](https://news.ycombinator.com/item?id=46601157) - [Apple Creator Studio](https://www.apple.com/newsroom/2026/01/introducing-apple-creator-studio-an-inspiring-collection-of-creative-apps/)
* [2026-01-13, 14:06:00](https://it.slashdot.org/story/26/01/13/146211/microsoft-pledges-full-power-costs-no-tax-breaks-in-response-to-ai-data-center-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pledges Full Power Costs, No Tax Breaks in Response To AI Data Center Backlash](https://it.slashdot.org/story/26/01/13/146211/microsoft-pledges-full-power-costs-no-tax-breaks-in-response-to-ai-data-center-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 13:47:21](https://lobste.rs/s/pk3rnu/solving_factorio_with_terraform) - [Solving Factorio with Terraform](https://www.youtube.com/watch?v=uU06vKlCNXk)
* [2026-01-13, 13:42:52](https://lobste.rs/s/07xsx9/hybrid_quota_linear_rate_limiter) - [hybrid quota-linear rate limiter](https://dotat.at/@/2026-01-12-hqlr.html)
* [2026-01-13, 13:00:00](https://hardware.slashdot.org/story/26/01/13/0416241/trump-says-microsoft-to-make-changes-to-curb-data-center-power-costs-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Says Microsoft To Make Changes To Curb Data Center Power Costs For Americans](https://hardware.slashdot.org/story/26/01/13/0416241/trump-says-microsoft-to-make-changes-to-curb-data-center-power-costs-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 12:55:31](https://lobste.rs/s/bufy06/win8de_windows_8_like_de_for_linux) - [Win8DE: windows 8 like de for linux](https://github.com/er-bharat/Win8DE)
* [2026-01-13, 12:29:27](https://lobste.rs/s/qgfhc3/hitex_press_spam_factory_for_ai_generated) - [HiTeX Press: A spam factory for AI-generated books](https://laurent.le-brun.eu/blog/hitex-a-spam-factory-for-ai-generated-books)
* [2026-01-13, 11:38:59](https://lobste.rs/s/5ttvyj/more_assorted_notes_on_liquid_glass_2025) - [More assorted notes on Liquid Glass (2025)](https://morrick.me/archives/10068)
* [2026-01-13, 11:26:00](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss) - [A 2,000-Year-Old Fingerprint May Solve Mystery of Scandinavia&apos;s Oldest Wooden Boat](https://soylentnews.org/article.pl?sid=26/01/12/0127259&amp;from=rss)
* [2026-01-13, 10:44:39](https://news.ycombinator.com/item?id=46599341) - [Show HN: An iOS budget app I&apos;ve been maintaining since 2011](https://primoco.me/en/)
* [2026-01-13, 10:14:59](https://lobste.rs/s/zkvvo9/hidden_cost_postgresql_arrays) - [The hidden cost of PostgreSQL arrays](https://boringsql.com/posts/good-bad-arrays/)
* [2026-01-13, 10:00:00](https://mobile.slashdot.org/story/26/01/13/049230/researchers-beam-power-from-a-moving-airplane?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Beam Power From a Moving Airplane](https://mobile.slashdot.org/story/26/01/13/049230/researchers-beam-power-from-a-moving-airplane?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-13, 09:31:45](https://lobste.rs/s/ui99tz/date_is_out_temporal_is) - [Date is out, Temporal is in](https://piccalil.li/blog/date-is-out-and-temporal-is-in/)
* [2026-01-13, 08:47:47](https://lobste.rs/s/2q9tel/state_datahaskell_q1_2026) - [State of DataHaskell Q1 2026](https://datahaskell.org/blog/2026/01/12/state-of-datahaskell-q1-2026.html)
* [2026-01-13, 06:45:00](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss) - [How Doubting Your Doubts May Increase Commitment to Goals](https://soylentnews.org/article.pl?sid=26/01/12/0126219&amp;from=rss)
* [2026-01-13, 05:03:35](https://lobste.rs/s/5se1tq/your_cli_s_completion_should_know_what) - [Your CLI&apos;s completion should know what options you&apos;ve already typed](https://hackers.pub/@hongminhee/2026/optique-context-aware-cli-completion)
* [2026-01-13, 01:52:00](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss) - [The Book Only Gets 3 Stars, but is Considered Great Literature](https://soylentnews.org/article.pl?sid=26/01/12/013252&amp;from=rss)
* [2026-01-13, 00:19:34](https://lobste.rs/s/o0lw2d/grounding_llms_with_recursive_code) - [Grounding LLMs with Recursive Code Execution](https://yogthos.net/posts/2026-01-12-recursive-language-model.html)
* [2026-01-12, 21:11:00](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss) - [NASA Postponed ISS Spacewalk Over Medical Issue, Crew Will Return Early](https://soylentnews.org/article.pl?sid=26/01/10/2227246&amp;from=rss)
* [2026-01-12, 20:15:19](https://lobste.rs/s/h5e24r/how_stick_with_your_projects_even_when) - [How to stick with your projects, even when they&apos;re janky](https://www.youtube.com/watch?v=Alfq8RG80Ns)
* [2026-01-12, 18:38:39](https://news.ycombinator.com/item?id=46592424) - [Superhuman AI Exfiltrates Emails](https://www.promptarmor.com/resources/superhuman-ai-exfiltrates-emails)
* [2026-01-12, 17:41:52](https://lobste.rs/s/atz78i/text_based_web_browsers) - [Text-based web browsers](https://cssence.com/2026/text-based-web-browsers/)
* [2026-01-12, 17:17:35](https://lobste.rs/s/ygqmfr/bad_dye_job) - [Bad Dye Job](https://daringfireball.net/2025/12/bad_dye_job)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 14:04:57](https://lobste.rs/s/70isfv/how_make_damn_website) - [How to Make a Damn Website](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-12, 13:19:17](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site) - [we rolled our own documentation site](https://blog.tangled.org/docs)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 11:04:44](https://lobste.rs/s/mhgog9/anthropic_blocks_third_party_tools_using) - [Anthropic blocks third-party tools using Claude Code OAuth tokens](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 21:01:13](https://news.ycombinator.com/item?id=46559266) - [Why Real Life is better than IRC (2000)](https://everything2.com/node/e2node/Why%20Real%20Life%20is%20better%20than%20IRC)
* [2026-01-09, 18:35:13](https://news.ycombinator.com/item?id=46557312) - [Going for Gold: The Story of the Golden Lego RCX and NXT](https://bricknerd.com/home/going-for-gold-the-story-of-the-golden-lego-rcx-and-nxt-9-9-21)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 16:05:26](https://news.ycombinator.com/item?id=46555297) - [Inlining – The Ultimate Optimisation](https://xania.org/202512/17-inlining-the-ultimate-optimisation)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
