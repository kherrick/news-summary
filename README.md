# [News Summary](https://kherrick.github.io/news-summary/)

## Legal and Governmental Issues

* [FTC Probes Whether Ticketmaster Does Enough To Stop Resale Bots](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Internet Archive Ends Legal Battle With Record Labels Over Historic Recordings](https://yro.slashdot.org/story/25/09/15/228226/internet-archive-ends-legal-battle-with-record-labels-over-historic-recordings?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How California Reached a Union Deal With Tech Giants Uber and Lyft](https://tech.slashdot.org/story/25/09/15/2034227/how-california-reached-a-union-deal-with-tech-giants-uber-and-lyft?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Airlines Sell 5 Billion Plane Ticket Records To the Government For Warrantless Searching](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Innovation

* ['Meta Ray-Ban Display' Glasses Design, HUD Clips Leak](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft's Office Apps Now Have Free Copilot Chat Features](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Vibe Coding Has Turned Senior Devs Into 'AI Babysitters'](https://developers.slashdot.org/story/25/09/15/2056250/vibe-coding-has-turned-senior-devs-into-ai-babysitters?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple Ships iOS 26, iPadOS 26 and macOS Tahoe 26 With 'Liquid Glass' UI Overhaul](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Hard Drive Shortage Intensifies as AI Training Data Pushes Lead Times Beyond 12 Months](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence and Machine Learning

* [GPT‑5-Codex and upgrades to Codex](https://simonwillison.net/2025/Sep/15/gpt-5-codex/)

* [Addendum to GPT-5 system card: GPT-5-Codex](https://openai.com/index/gpt-5-system-card-addendum-gpt-5-codex/)

* [A Third of UK Firms Using 'Bossware' To Monitor Workers' Activity, Survey Reveals](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Hacking and Innovation Experiments

* [Hosting a website on a disposable vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)

* [Rendezvous Hashing Explained (2020)](https://randorithms.com/2020/12/26/rendezvous-hashing.html)

## Environment and Science

* [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)

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

* [2025-09-16, 01:25:00](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Probes Whether Ticketmaster Does Enough To Stop Resale Bots](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:45:00](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Meta Ray-Ban Display&apos; Glasses Design, HUD Clips Leak](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:33:12](https://news.ycombinator.com/item?id=45256651) - [Linux phones are more important now than ever](https://feddit.org/post/18353777)
* [2025-09-16, 00:20:59](https://news.ycombinator.com/item?id=45256577) - [The awe keeps dropping](https://morrick.me/archives/10137)
* [2025-09-16, 00:02:00](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Plans To Launch a Startups Fund Open To All Retail Investors](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 23:32:01](https://news.ycombinator.com/item?id=45256229) - [Fighting human trafficking with self-contained applications](https://lwn.net/SubscriberLink/1036916/2b10f1356b7ab0e7/)
* [2025-09-15, 23:20:00](https://developers.slashdot.org/story/25/09/15/2056250/vibe-coding-has-turned-senior-devs-into-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe Coding Has Turned Senior Devs Into &apos;AI Babysitters&apos;](https://developers.slashdot.org/story/25/09/15/2056250/vibe-coding-has-turned-senior-devs-into-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 22:40:00](https://yro.slashdot.org/story/25/09/15/228226/internet-archive-ends-legal-battle-with-record-labels-over-historic-recordings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Ends Legal Battle With Record Labels Over Historic Recordings](https://yro.slashdot.org/story/25/09/15/228226/internet-archive-ends-legal-battle-with-record-labels-over-historic-recordings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 22:00:00](https://tech.slashdot.org/story/25/09/15/2034227/how-california-reached-a-union-deal-with-tech-giants-uber-and-lyft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How California Reached a Union Deal With Tech Giants Uber and Lyft](https://tech.slashdot.org/story/25/09/15/2034227/how-california-reached-a-union-deal-with-tech-giants-uber-and-lyft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 21:51:55](https://news.ycombinator.com/item?id=45255400) - [Massive Attack turns concert into facial recognition surveillance experiment](https://www.gadgetreview.com/massive-attack-turns-concert-into-facial-recognition-surveillance-experiment)
* [2025-09-15, 21:46:19](https://news.ycombinator.com/item?id=45255337) - [Show HN: Pooshit – Sync local code to remote Docker containers](https://news.ycombinator.com/item?id=45255337)
* [2025-09-15, 21:29:40](https://news.ycombinator.com/item?id=45255155) - [The Revised Report on Scheme or An UnCommon Lisp (1985) [pdf]](https://dspace.mit.edu/bitstream/handle/1721.1/5600/AIM-848.pdf)
* [2025-09-15, 21:28:01](https://news.ycombinator.com/item?id=45255137) - [William Gibson Reads Neuromancer (2004)](http://bearcave.com/bookrev/neuromancer/neuromancer_audio.html)
* [2025-09-15, 21:20:00](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Sell 5 Billion Plane Ticket Records To the Government For Warrantless Searching](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 21:00:00](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Deal &apos;Framework&apos; Reached With China](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:44:00](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Office Apps Now Have Free Copilot Chat Features](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:33:10](https://lobste.rs/s/dpysiq/generating_mazes_with_three_algorithms) - [Generating Mazes with Three Algorithms](https://healeycodes.com/generating-mazes)
* [2025-09-15, 20:25:26](https://news.ycombinator.com/item?id=45254505) - [Ghost Kitchens Are Dying. Here&apos;s the $15B Lesson Every Restaurateur Must Learn](https://davidrmann3.substack.com/p/ghost-kitchens-are-dying-heres-the)
* [2025-09-15, 20:07:48](https://news.ycombinator.com/item?id=45254330) - [Scryer Prolog Meetup 2025](https://hsd-pbsa.de/veranstaltung/scryer-prolog-meetup-2025/)
* [2025-09-15, 20:01:00](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drive Shortage Intensifies as AI Training Data Pushes Lead Times Beyond 12 Months](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:41:07](https://lobste.rs/s/b2nqkr/webkit_features_safari_26_0) - [WebKit Features in Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
* [2025-09-15, 19:21:00](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President Calls for Six-Month Corporate Reporting Cycle, Citing Cost Savings](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:17:35](https://news.ycombinator.com/item?id=45253807) - [GPT‑5-Codex and upgrades to Codex](https://simonwillison.net/2025/Sep/15/gpt-5-codex/)
* [2025-09-15, 19:14:58](https://lobste.rs/s/bggqkn/rendezvous_hashing_explained_2020) - [Rendezvous Hashing Explained (2020)](https://randorithms.com/2020/12/26/rendezvous-hashing.html)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 19:00:09](https://lobste.rs/s/hdoo8z/why_is_name_microsoft_wireless_notebook) - [Why is the name of the Microsoft Wireless Notebook Presenter Mouse 8000 hard-coded into the Bluetooth drivers?](https://devblogs.microsoft.com/oldnewthing/20250915-00/?p=111599)
* [2025-09-15, 18:45:32](https://news.ycombinator.com/item?id=45253458) - [Addendum to GPT-5 system card: GPT-5-Codex](https://openai.com/index/gpt-5-system-card-addendum-gpt-5-codex/)
* [2025-09-15, 18:40:00](https://news.slashdot.org/story/25/09/15/1840218/toxic-fumes-are-leaking-into-airplanes-sickening-crews-and-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toxic Fumes Are Leaking Into Airplanes, Sickening Crews and Passengers](https://news.slashdot.org/story/25/09/15/1840218/toxic-fumes-are-leaking-into-airplanes-sickening-crews-and-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 18:38:47](https://lobste.rs/s/eb404t/ghostty_1_2_0_release_notes) - [Ghostty 1.2.0 - Release Notes](https://ghostty.org/docs/install/release-notes/1-2-0)
* [2025-09-15, 18:20:27](https://lobste.rs/s/at72xo/asciinema_3_0_adds_live_streaming_local) - [asciinema 3.0 adds live streaming and local-first recording](https://blog.asciinema.org/post/three-point-o/)
* [2025-09-15, 18:05:00](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Third of UK Firms Using &apos;Bossware&apos; To Monitor Workers&apos; Activity, Survey Reveals](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 17:53:19](https://news.ycombinator.com/item?id=45252817) - [Hosting a website on a disposable vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 17:47:06](https://lobste.rs/s/zqgfuo/react_won_by_default_it_s_killing_frontend) - [React Won by Default – And It&apos;s Killing Frontend Innovation](https://www.lorenstew.art/blog/react-won-by-default/)
* [2025-09-15, 17:46:01](https://news.ycombinator.com/item?id=45252715) - [React is winning by default and slowing innovation](https://www.lorenstew.art/blog/react-won-by-default/)
* [2025-09-15, 17:27:00](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Ships iOS 26, iPadOS 26 and macOS Tahoe 26 With &apos;Liquid Glass&apos; UI Overhaul](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 17:16:42](https://news.ycombinator.com/item?id=45252378) - [macOS Tahoe](https://www.apple.com/os/macos/)
* [2025-09-15, 17:10:39](https://news.ycombinator.com/item?id=45252301) - [GPT-5-Codex](https://openai.com/index/introducing-upgrades-to-codex/)
* [2025-09-15, 16:49:00](https://news.slashdot.org/story/25/09/15/1649210/ais-economic-boost-isnt-showing-up-in-us-gdp-goldman-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Economic Boost Isn&apos;t Showing Up in US GDP, Goldman Says](https://news.slashdot.org/story/25/09/15/1649210/ais-economic-boost-isnt-showing-up-in-us-gdp-goldman-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 16:45:15](https://lobste.rs/s/kilgon/introducing_constexpr_debugger) - [Introducing the Constexpr Debugger](https://blog.jetbrains.com/clion/2025/09/introducing-constexpr-debugger/)
* [2025-09-15, 16:28:54](https://news.ycombinator.com/item?id=45251690) - [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/)
* [2025-09-15, 15:44:29](https://news.ycombinator.com/item?id=45251093) - [Boring work needs tension](https://iaziz786.com/blog/boring-work-needs-tension/)
* [2025-09-15, 15:20:18](https://news.ycombinator.com/item?id=45250720) - [Launch HN: Trigger.dev (YC W23) – Open-source platform to build reliable AI apps](https://news.ycombinator.com/item?id=45250720)
* [2025-09-15, 15:14:35](https://lobste.rs/s/6hzayo/varnish_8_0_0_with_bonus_project_news) - [Varnish: 8.0.0 with bonus project news](https://varnish-cache.org/#new-release-8-0-0-with-bonus-project-news)
* [2025-09-15, 15:02:14](https://lobste.rs/s/ccy3b6/pirate_based_logic_rust_shared) - [The pirate-based logic of Rust shared references](http://ais523.me.uk/blog/logic-of-shared-references.html)
* [2025-09-15, 14:45:45](https://news.ycombinator.com/item?id=45250328) - [GuitarPie: Electric Guitar Fretboard Pie Menus](https://andreasfender.com/publications.php)
* [2025-09-15, 14:33:41](https://news.ycombinator.com/item?id=45250202) - [How to self-host a web font from Google Fonts](https://blog.velocifyer.com/Posts/3,0,0,2025-8-13,+how+to+self+host+a+font+from+google+fonts.html)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 14:04:47](https://news.ycombinator.com/item?id=45249915) - [PayPal to support Ethereum and Bitcoin](https://newsroom.paypal-corp.com/2025-09-15-PayPal-Ushers-in-a-New-Era-of-Peer-to-Peer-Payments,-Reimagining-How-Money-Moves-to-Anyone,-Anywhere)
* [2025-09-15, 14:02:02](https://news.ycombinator.com/item?id=45249878) - [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space)
* [2025-09-15, 13:59:11](https://lobste.rs/s/d26qtj/e_language) - [The E Language](http://erights.org/elang/index.html)
* [2025-09-15, 13:55:45](https://lobste.rs/s/dnfqkp/waterpark_transforming_healthcare_with) - [Waterpark: Transforming Healthcare with Distributed Actors](https://youtu.be/hdBm4K-vvt0)
* [2025-09-15, 12:33:28](https://news.ycombinator.com/item?id=45248899) - [How big a solar battery do I need to store all my home&apos;s electricity?](https://shkspr.mobi/blog/2025/09/how-big-a-solar-battery-do-i-need-to-store-all-my-homes-electricity/)
* [2025-09-15, 12:05:09](https://lobste.rs/s/zvngj0/beyond_orthogonality_how_language) - [Beyond Orthogonality: How Language Models Pack Billions of Concepts into 12,000 Dimensions](https://nickyoder.com/johnson-lindenstrauss/)
* [2025-09-15, 11:39:33](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week)
* [2025-09-15, 10:12:00](https://lobste.rs/s/jxprbr/algebraic_types_are_not_scary_actually) - [Algebraic Types are not Scary, Actually](https://blog.aiono.dev/posts/algebraic-types-are-not-scary,-actually.html)
* [2025-09-15, 09:47:18](https://news.ycombinator.com/item?id=45247890) - [RustGPT: A pure-Rust transformer LLM built from scratch](https://github.com/tekaratzas/RustGPT)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 09:04:38](https://lobste.rs/s/lq0now/org_social_preview_generator) - [Org Social Preview Generator](https://github.com/tanrax/org-social-preview)
* [2025-09-15, 08:52:12](https://lobste.rs/s/70eqvf/rye_tables_vs_python_pandas_different_way) - [Rye Tables vs Python/Pandas: A Different Way to Wrangle Data](https://ryelang.org/blog/posts/comparing_tables_to_python/)
* [2025-09-15, 08:05:55](https://lobste.rs/s/ylbxri/protecting_rust_against_supply_chain) - [Protecting Rust against supply chain attacks](https://kerkour.com/rust-supply-chain-attacks)
* [2025-09-15, 07:14:13](https://news.ycombinator.com/item?id=45246971) - [The Mac App Flea Market](https://blog.jim-nielsen.com/2025/mac-app-flea-market/)
* [2025-09-15, 06:49:01](https://lobste.rs/s/jkc7xi/linking_text_fragments_with_bookmarklet) - [Linking to text fragments with a bookmarklet](https://alexwlchan.net/2025/text-fragments-bookmarklet)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 04:05:11](https://lobste.rs/s/vioikp/moonbit_developers_are_lying_you) - [Moonbit developers are lying to you](https://bitemyapp.com/blog/moonbit-developers-are-lying-to-you/)
* [2025-09-15, 03:59:39](https://lobste.rs/s/465hcl/smalltalk_lambda_calculus) - [Smalltalk and Lambda Calculus](https://blog.ielliott.io/smalltalk-and-lambda-calculus)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 21:49:56](https://lobste.rs/s/7qw4xw/rating_26_years_java_changes) - [Rating 26 years of Java changes](https://neilmadden.blog/2025/09/12/rating-26-years-of-java-changes/)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 16:21:14](https://lobste.rs/s/bvg2mx/gleam_is_my_new_obsession) - [Gleam is my new obsession](https://ericcodes.io/blog/gleam-my-new-obsession.html)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-12, 20:55:18](https://news.ycombinator.com/item?id=45226657) - [Debian Upgrade Marathon: 3.1 Sarge](https://wrongthink.link/posts/debian-upgrade-marathon-sarge/)
* [2025-09-12, 20:05:05](https://news.ycombinator.com/item?id=45226135) - [I wish my web server were in the corner of my room (2022)](https://interconnected.org/home/2022/10/10/servers)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 16:25:11](https://news.ycombinator.com/item?id=45223827) - [Removing newlines in FASTA file increases ZSTD compression ratio by 10x](https://log.bede.im/2025/09/12/zstandard-long-range-genomes.html)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 10:30:45](https://news.ycombinator.com/item?id=45220697) - [The Rising Sea: Foundations of Algebraic Geometry Notes](https://math.stanford.edu/~vakil/216blog/)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 02:28:15](https://news.ycombinator.com/item?id=45218080) - [When Your Father Is a Magician, What Do You Believe?](https://thereader.mitpress.mit.edu/when-your-father-is-a-magician-what-do-you-believe/)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
