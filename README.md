# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Highlights

* [A detailed review of macOS 26 Tahoe](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/) ([comments](https://lobste.rs/s/etufe3/detailed_review_macos_26_tahoe))

* [Self Propagating NPM Malware Compromises over 40 Packages](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised) ([comments](https://news.ycombinator.com/item?id=45260741))

* [Swift 6.2 Released](https://www.swift.org/blog/swift-6.2-released/) ([comments](https://lobste.rs/s/otiuw4/swift_6_2_released))

* [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&from=rss) ([comments](https://soylentnews.org/article.pl))

* [Robinhood Plans To Launch a Startups Fund Open To All Retail Investors](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org))

* [Meta Ray-Ban Display Glasses Design, HUD Clips Leak](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org))

## Security and Privacy Concerns

* [FBI couldn't get my husband to decrypt his Tor node so he was jailed for 3 years](https://old.reddit.com/r/TOR/comments/1ni5drm/the_fbi_couldnt_get_my_husband_to_decrypt_his_tor/) ([comments](https://news.ycombinator.com/item?id=45261163))

* [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/) ([comments](https://lobste.rs/s/6z2p0h/wanted_spy_on_my_dog_ended_up_spying_on_tp))

* [FTC Probes Whether Ticketmaster Does Enough To Stop Resale Bots](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org))

## Scientific Discoveries and Innovations

* [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&from=rss) ([comments](https://soylentnews.org))

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&from=rss) ([comments](https://soylentnews.org))

* [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&from=rss) ([comments](https://soylentnews.org))

## Creative and Educational Projects

* [Just for fun: animating a mosaic of 90s GIFs](https://alexplescan.com/posts/2025/09/15/gifs/) ([comments](https://lobste.rs/s/jpwfu5/just_for_fun_animating_mosaic_90s_gifs))

* [Linux phones are more important now than ever](https://feddit.org/post/18353777) ([comments](https://news.ycombinator.com/item?id=45256651))

* [How I Use AI](https://timkellogg.me/blog/2025/09/15/ai-tools) ([comments](https://lobste.rs/s/70n6tf/how_i_use_ai))

## Entertainment and Culture

* [Robert Redford Has Died](https://www.nytimes.com/2025/09/16/movies/robert-redford-dead.html) ([comments](https://news.ycombinator.com/item?id=45261159))

* [William Gibson Reads Neuromancer (2004)](http://bearcave.com/bookrev/neuromancer/neuromancer_audio.html) ([comments](https://news.ycombinator.com/item?id=45255137))

* [Scientists uncover extreme life inside the Arctic ice](https://news.stanford.edu/stories/2025/09/extreme-life-arctic-ice-diatoms-ecological-discovery) ([comments](https://news.ycombinator.com/item?id=45228231))

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

* [2025-09-16, 12:42:36](https://lobste.rs/s/etufe3/detailed_review_macos_26_tahoe) - [A detailed review of macOS 26 Tahoe](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/)
* [2025-09-16, 12:10:49](https://news.ycombinator.com/item?id=45261163) - [FBI couldn&apos;t get my husband to decrypt his Tor node so he was jailed for 3 years](https://old.reddit.com/r/TOR/comments/1ni5drm/the_fbi_couldnt_get_my_husband_to_decrypt_his_tor/)
* [2025-09-16, 12:10:31](https://news.ycombinator.com/item?id=45261159) - [Robert Redford Has Died](https://www.nytimes.com/2025/09/16/movies/robert-redford-dead.html)
* [2025-09-16, 11:59:47](https://lobste.rs/s/ssnzbl/painful_road_java_modularity_with_osgi) - [A painful road to Java modularity with OSGi](https://blog.enioka.com/2025/06/18/a-painful-road-to-java-modularity/)
* [2025-09-16, 11:51:18](https://news.ycombinator.com/item?id=45260969) - [Ask HN: Generalists, when do you say \&quot;I know enough\&quot; about any particular topic?](https://news.ycombinator.com/item?id=45260969)
* [2025-09-16, 11:22:03](https://news.ycombinator.com/item?id=45260741) - [Self Propagating NPM Malware Compromises over 40 Packages](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)
* [2025-09-16, 10:55:53](https://lobste.rs/s/70n6tf/how_i_use_ai) - [How I Use AI](https://timkellogg.me/blog/2025/09/15/ai-tools)
* [2025-09-16, 10:42:38](https://lobste.rs/s/3pyir2/task_v3_45_released) - [Task v3.45 released](https://github.com/go-task/task/releases/tag/v3.45.3)
* [2025-09-16, 09:37:12](https://lobste.rs/s/otiuw4/swift_6_2_released) - [Swift 6.2 Released](https://www.swift.org/blog/swift-6.2-released/)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:26:32](https://lobste.rs/s/cly8x2/automating_distro_updates_ci) - [Automating Distro Updates in CI](https://paretosecurity.com/blog/automating-distro-updates-in-ci/)
* [2025-09-16, 06:54:17](https://lobste.rs/s/kenxsl/winboat_run_windows_apps_on_linux_with) - [winboat: Run Windows apps on Linux with seamless integration](https://github.com/TibixDev/winboat)
* [2025-09-16, 06:35:53](https://lobste.rs/s/t5kbvv/dolphin_progress_report_release_2509) - [Dolphin Progress Report: Release 2509](https://dolphin-emu.org/blog/2025/09/16/dolphin-progress-report-release-2509/)
* [2025-09-16, 06:15:22](https://lobste.rs/s/6z2p0h/wanted_spy_on_my_dog_ended_up_spying_on_tp) - [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 04:08:00](https://news.ycombinator.com/item?id=45257929) - [Show HN: Pyproc – Call Python from Go Without CGO or Microservices](https://github.com/YuminosukeSato/pyproc)
* [2025-09-16, 03:29:54](https://lobste.rs/s/jpwfu5/just_for_fun_animating_mosaic_90s_gifs) - [Just for fun: animating a mosaic of 90s GIFs](https://alexplescan.com/posts/2025/09/15/gifs/)
* [2025-09-16, 03:05:53](https://news.ycombinator.com/item?id=45257627) - [\&quot;Your\&quot; vs. \&quot;My\&quot; in user interfaces](https://adamsilver.io/blog/your-vs-my-in-user-interfaces/)
* [2025-09-16, 01:25:00](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Probes Whether Ticketmaster Does Enough To Stop Resale Bots](https://yro.slashdot.org/story/25/09/15/2213254/ftc-probes-whether-ticketmaster-does-enough-to-stop-resale-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:45:00](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Meta Ray-Ban Display&apos; Glasses Design, HUD Clips Leak](https://hardware.slashdot.org/story/25/09/15/2049228/meta-ray-ban-display-glasses-design-hud-clips-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 00:33:12](https://news.ycombinator.com/item?id=45256651) - [Linux phones are more important now than ever](https://feddit.org/post/18353777)
* [2025-09-16, 00:30:13](https://lobste.rs/s/uaz1d9/godot_4_5_release) - [Godot 4.5 release](https://godotengine.org/releases/4.5/)
* [2025-09-16, 00:20:59](https://news.ycombinator.com/item?id=45256577) - [I feel Apple has lost its alignment with me and other long-time customers](https://morrick.me/archives/10137)
* [2025-09-16, 00:16:03](https://lobste.rs/s/zxkefm/be_careful_when_assigning) - [Be Careful When Assigning ArenaAllocators (2024)](https://www.openmymind.net/Be-Careful-When-Assigning-ArenaAllocators/)
* [2025-09-16, 00:02:00](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robinhood Plans To Launch a Startups Fund Open To All Retail Investors](https://news.slashdot.org/story/25/09/15/2159203/robinhood-plans-to-launch-a-startups-fund-open-to-all-retail-investors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 23:20:00](https://developers.slashdot.org/story/25/09/15/2056250/vibe-coding-has-turned-senior-devs-into-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe Coding Has Turned Senior Devs Into &apos;AI Babysitters&apos;](https://developers.slashdot.org/story/25/09/15/2056250/vibe-coding-has-turned-senior-devs-into-ai-babysitters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 23:02:31](https://news.ycombinator.com/item?id=45256043) - [Why do we keep gravitating toward complexity?](https://kyrylo.org/software/2025/08/21/why-do-software-developers-love-complexity.html)
* [2025-09-15, 22:40:00](https://yro.slashdot.org/story/25/09/15/228226/internet-archive-ends-legal-battle-with-record-labels-over-historic-recordings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Ends Legal Battle With Record Labels Over Historic Recordings](https://yro.slashdot.org/story/25/09/15/228226/internet-archive-ends-legal-battle-with-record-labels-over-historic-recordings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 22:00:00](https://tech.slashdot.org/story/25/09/15/2034227/how-california-reached-a-union-deal-with-tech-giants-uber-and-lyft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How California Reached a Union Deal With Tech Giants Uber and Lyft](https://tech.slashdot.org/story/25/09/15/2034227/how-california-reached-a-union-deal-with-tech-giants-uber-and-lyft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 21:28:01](https://news.ycombinator.com/item?id=45255137) - [William Gibson Reads Neuromancer (2004)](http://bearcave.com/bookrev/neuromancer/neuromancer_audio.html)
* [2025-09-15, 21:20:00](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Sell 5 Billion Plane Ticket Records To the Government For Warrantless Searching](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 21:00:00](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Deal &apos;Framework&apos; Reached With China](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:44:00](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Office Apps Now Have Free Copilot Chat Features](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:01:00](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drive Shortage Intensifies as AI Training Data Pushes Lead Times Beyond 12 Months](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:41:07](https://lobste.rs/s/b2nqkr/webkit_features_safari_26_0) - [WebKit Features in Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
* [2025-09-15, 19:21:00](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President Calls for Six-Month Corporate Reporting Cycle, Citing Cost Savings](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:14:28](https://news.ycombinator.com/item?id=45253775) - [How People Use ChatGPT [pdf]](https://cdn.openai.com/pdf/a253471f-8260-40c6-a2cc-aa93fe9f142e/economic-research-chatgpt-usage-paper.pdf)
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
* [2025-09-15, 15:20:18](https://news.ycombinator.com/item?id=45250720) - [Launch HN: Trigger.dev (YC W23) – Open-source platform to build reliable AI apps](https://news.ycombinator.com/item?id=45250720)
* [2025-09-15, 15:14:35](https://lobste.rs/s/6hzayo/varnish_8_0_0_with_bonus_project_news) - [Varnish: 8.0.0 with bonus project news](https://varnish-cache.org/#new-release-8-0-0-with-bonus-project-news)
* [2025-09-15, 15:02:14](https://lobste.rs/s/ccy3b6/pirate_based_logic_rust_shared) - [The pirate-based logic of Rust shared references](http://ais523.me.uk/blog/logic-of-shared-references.html)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 14:04:47](https://news.ycombinator.com/item?id=45249915) - [PayPal to support Ethereum and Bitcoin](https://newsroom.paypal-corp.com/2025-09-15-PayPal-Ushers-in-a-New-Era-of-Peer-to-Peer-Payments,-Reimagining-How-Money-Moves-to-Anyone,-Anywhere)
* [2025-09-15, 14:02:02](https://news.ycombinator.com/item?id=45249878) - [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space)
* [2025-09-15, 13:59:11](https://lobste.rs/s/d26qtj/e_language) - [The E Language](http://erights.org/elang/index.html)
* [2025-09-15, 12:33:28](https://news.ycombinator.com/item?id=45248899) - [How big a solar battery do I need to store all my home&apos;s electricity?](https://shkspr.mobi/blog/2025/09/how-big-a-solar-battery-do-i-need-to-store-all-my-homes-electricity/)
* [2025-09-15, 10:12:00](https://lobste.rs/s/jxprbr/algebraic_types_are_not_scary_actually) - [Algebraic Types are not Scary, Actually](https://blog.aiono.dev/posts/algebraic-types-are-not-scary,-actually.html)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 08:52:12](https://lobste.rs/s/70eqvf/rye_tables_vs_python_pandas_different_way) - [Rye Tables vs Python/Pandas: A Different Way to Wrangle Data](https://ryelang.org/blog/posts/comparing_tables_to_python/)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 12:43:54](https://news.ycombinator.com/item?id=45231614) - [60 years after Gemini, newly processed images reveal details](https://arstechnica.com/space/2025/09/60-years-after-gemini-newly-processed-images-reveal-incredible-details/)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 10:09:30](https://news.ycombinator.com/item?id=45230840) - [The Mythical Creatures of London](https://londonist.com/london/history/the-mythical-creatures-of-london)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 03:05:57](https://news.ycombinator.com/item?id=45228981) - [Basics of Equality Saturation](https://egglog-python.readthedocs.io/latest/tutorials/tut_1_basics.html)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-13, 00:30:47](https://news.ycombinator.com/item?id=45228231) - [Scientists uncover extreme life inside the Arctic ice](https://news.stanford.edu/stories/2025/09/extreme-life-arctic-ice-diatoms-ecological-discovery)
* [2025-09-12, 22:51:19](https://news.ycombinator.com/item?id=45227679) - [People Who Hunt Down Old TVs](https://www.bbc.com/future/article/20250911-the-people-who-hunt-down-old-tvs)
* [2025-09-12, 20:05:05](https://news.ycombinator.com/item?id=45226135) - [I wish my web server were in the corner of my room (2022)](https://interconnected.org/home/2022/10/10/servers)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 18:41:36](https://news.ycombinator.com/item?id=45225217) - [Migrating to React Native&apos;s New Architecture](https://shopify.engineering/react-native-new-architecture)
* [2025-09-12, 16:25:11](https://news.ycombinator.com/item?id=45223827) - [Removing newlines in FASTA file increases ZSTD compression ratio by 10x](https://log.bede.im/2025/09/12/zstandard-long-range-genomes.html)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 12:51:46](https://news.ycombinator.com/item?id=45221567) - [Learn x86-64 assembly by writing a GUI from scratch (2023)](https://gaultier.github.io/blog/x11_x64.html)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
