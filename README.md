# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [TikTok Deal 'Framework' Reached With China](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=45255132)

* [Microsoft's Office Apps Now Have Free Copilot Chat Features](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=45253458)

* [GPT-5-Codex and upgrades to Codex](https://simonwillison.net/2025/Sep/15/gpt-5-codex/) - [Comments](https://news.ycombinator.com/item?id=45253807)

## Privacy and Surveillance

* [Airlines Sell 5 Billion Plane Ticket Records To the Government For Warrantless Searching](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=45255137)

* [Toxic Fumes Are Leaking Into Airplanes, Sickening Crews and Passengers](https://news.slashdot.org/story/25/09/15/1840218/toxic-fumes-are-leaking-into-airplanes-sickening-crews-and-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=45253775)

## Space and Exploration

* [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [Comments](https://news.ycombinator.com/item?id=45253458)

## Unique and Experimental Projects

* [Hosting a website on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/) - [Comments](https://news.ycombinator.com/item?id=45252817)

## Web Development Trends

* [React Won by Default – And It's Killing Frontend Innovation](https://www.lorenstew.art/blog/react-won-by-default/) - [Comments](https://news.ycombinator.com/item?id=45252715)

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

* [2025-09-15, 21:28:01](https://news.ycombinator.com/item?id=45255137) - [William Gibson Reads Neuromancer](http://bearcave.com/bookrev/neuromancer/neuromancer_audio.html)
* [2025-09-15, 21:27:37](https://news.ycombinator.com/item?id=45255132) - [Imperial Tyranny, Korean Humiliation](https://english.hani.co.kr/arti/english_edition/english_editorials/1218475.html)
* [2025-09-15, 21:20:00](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airlines Sell 5 Billion Plane Ticket Records To the Government For Warrantless Searching](https://news.slashdot.org/story/25/09/15/1850226/airlines-sell-5-billion-plane-ticket-records-to-the-government-for-warrantless-searching?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 21:00:00](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Deal &apos;Framework&apos; Reached With China](https://tech.slashdot.org/story/25/09/15/2040255/tiktok-deal-framework-reached-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:44:00](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Office Apps Now Have Free Copilot Chat Features](https://it.slashdot.org/story/25/09/15/1751254/microsofts-office-apps-now-have-free-copilot-chat-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 20:28:32](https://news.ycombinator.com/item?id=45254540) - [Deaths are projected to exceed births in 2031](https://www.cbo.gov/publication/61390)
* [2025-09-15, 20:07:48](https://news.ycombinator.com/item?id=45254330) - [Scryer Prolog Meetup 2025](https://hsd-pbsa.de/veranstaltung/scryer-prolog-meetup-2025/)
* [2025-09-15, 20:01:00](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drive Shortage Intensifies as AI Training Data Pushes Lead Times Beyond 12 Months](https://hardware.slashdot.org/story/25/09/15/1823230/hard-drive-shortage-intensifies-as-ai-training-data-pushes-lead-times-beyond-12-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:41:07](https://lobste.rs/s/b2nqkr/webkit_features_safari_26_0) - [WebKit Features in Safari 26.0](https://webkit.org/blog/17333/webkit-features-in-safari-26-0/)
* [2025-09-15, 19:21:00](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [President Calls for Six-Month Corporate Reporting Cycle, Citing Cost Savings](https://news.slashdot.org/story/25/09/15/1815211/president-calls-for-six-month-corporate-reporting-cycle-citing-cost-savings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 19:17:35](https://news.ycombinator.com/item?id=45253807) - [GPT‑5-Codex and upgrades to Codex](https://simonwillison.net/2025/Sep/15/gpt-5-codex/)
* [2025-09-15, 19:14:58](https://lobste.rs/s/bggqkn/rendezvous_hashing_explained_2020) - [Rendezvous Hashing Explained (2020)](https://randorithms.com/2020/12/26/rendezvous-hashing.html)
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
* [2025-09-15, 16:06:30](https://news.ycombinator.com/item?id=45251375) - [Asciinema CLI 3.0 rewritten in Rust, adds live streaming, upgrades file format](https://blog.asciinema.org/post/three-point-o/)
* [2025-09-15, 16:05:00](https://slashdot.org/story/25/09/15/1520249/anthropic-finds-businesses-are-mainly-using-ai-to-automate-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Finds Businesses Are Mainly Using AI To Automate Work](https://slashdot.org/story/25/09/15/1520249/anthropic-finds-businesses-are-mainly-using-ai-to-automate-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 15:51:28](https://news.ycombinator.com/item?id=45251178) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-09-15, 15:44:29](https://news.ycombinator.com/item?id=45251093) - [Boring work needs tension](https://iaziz786.com/blog/boring-work-needs-tension/)
* [2025-09-15, 15:21:00](https://it.slashdot.org/story/25/09/15/1510250/usb-a-isnt-going-anywhere-so-stop-removing-the-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;USB-A Isn&apos;t Going Anywhere, So Stop Removing the Port&apos;](https://it.slashdot.org/story/25/09/15/1510250/usb-a-isnt-going-anywhere-so-stop-removing-the-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 15:20:18](https://news.ycombinator.com/item?id=45250720) - [Launch HN: Trigger.dev (YC W23) – Open-source platform to build reliable AI apps](https://news.ycombinator.com/item?id=45250720)
* [2025-09-15, 15:14:35](https://lobste.rs/s/6hzayo/varnish_8_0_0_with_bonus_project_news) - [Varnish: 8.0.0 with bonus project news](https://varnish-cache.org/#new-release-8-0-0-with-bonus-project-news)
* [2025-09-15, 15:02:14](https://lobste.rs/s/ccy3b6/pirate_based_logic_rust_shared) - [The pirate-based logic of Rust shared references](http://ais523.me.uk/blog/logic-of-shared-references.html)
* [2025-09-15, 14:45:45](https://news.ycombinator.com/item?id=45250328) - [GuitarPie: Electric Guitar Fretboard Pie Menus](https://andreasfender.com/publications.php)
* [2025-09-15, 14:44:00](https://tech.slashdot.org/story/25/09/15/1444225/google-shifts-android-security-updates-to-risk-based-triage-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Shifts Android Security Updates To Risk-Based Triage System](https://tech.slashdot.org/story/25/09/15/1444225/google-shifts-android-security-updates-to-risk-based-triage-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 14:33:41](https://news.ycombinator.com/item?id=45250202) - [How to self-host a web font from Google Fonts](https://blog.velocifyer.com/Posts/3,0,0,2025-8-13,+how+to+self+host+a+font+from+google+fonts.html)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 14:04:47](https://news.ycombinator.com/item?id=45249915) - [PayPal to support Ethereum and Bitcoin](https://newsroom.paypal-corp.com/2025-09-15-PayPal-Ushers-in-a-New-Era-of-Peer-to-Peer-Payments,-Reimagining-How-Money-Moves-to-Anyone,-Anywhere)
* [2025-09-15, 14:02:02](https://news.ycombinator.com/item?id=45249878) - [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space)
* [2025-09-15, 14:01:00](https://slashdot.org/story/25/09/15/0718258/ai-triggers-70-collapse-in-fresh-graduate-hiring-at-indias-it-giants-that-employ-54-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Triggers 70% Collapse in Fresh Graduate Hiring at India&apos;s IT Giants That Employ 5.4 Million](https://slashdot.org/story/25/09/15/0718258/ai-triggers-70-collapse-in-fresh-graduate-hiring-at-indias-it-giants-that-employ-54-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 13:59:11](https://lobste.rs/s/d26qtj/e_language) - [The E Language](http://erights.org/elang/index.html)
* [2025-09-15, 13:55:45](https://lobste.rs/s/dnfqkp/waterpark_transforming_healthcare_with) - [Waterpark: Transforming Healthcare with Distributed Actors](https://youtu.be/hdBm4K-vvt0)
* [2025-09-15, 12:33:28](https://news.ycombinator.com/item?id=45248899) - [How big a solar battery do I need to store all my home&apos;s electricity?](https://shkspr.mobi/blog/2025/09/how-big-a-solar-battery-do-i-need-to-store-all-my-homes-electricity/)
* [2025-09-15, 12:05:09](https://lobste.rs/s/zvngj0/beyond_orthogonality_how_language) - [Beyond Orthogonality: How Language Models Pack Billions of Concepts into 12,000 Dimensions](https://nickyoder.com/johnson-lindenstrauss/)
* [2025-09-15, 11:39:33](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week)
* [2025-09-15, 11:34:00](https://hardware.slashdot.org/story/25/09/15/0224231/if-we-want-bigger-wind-turbines-were-gonna-need-bigger-airplanes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;If We Want Bigger Wind Turbines, We&apos;re Gonna Need Bigger Airplanes&apos;](https://hardware.slashdot.org/story/25/09/15/0224231/if-we-want-bigger-wind-turbines-were-gonna-need-bigger-airplanes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 10:12:00](https://lobste.rs/s/jxprbr/algebraic_types_are_not_scary_actually) - [Algebraic Types are not Scary, Actually](https://blog.aiono.dev/posts/algebraic-types-are-not-scary,-actually.html)
* [2025-09-15, 09:47:18](https://news.ycombinator.com/item?id=45247890) - [RustGPT: A pure-Rust transformer LLM built from scratch](https://github.com/tekaratzas/RustGPT)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 09:04:38](https://lobste.rs/s/lq0now/org_social_preview_generator) - [Org Social Preview Generator](https://github.com/tanrax/org-social-preview)
* [2025-09-15, 08:52:12](https://lobste.rs/s/70eqvf/rye_tables_vs_python_pandas_different_way) - [Rye Tables vs Python/Pandas: A Different Way to Wrangle Data](https://ryelang.org/blog/posts/comparing_tables_to_python/)
* [2025-09-15, 08:05:55](https://lobste.rs/s/ylbxri/protecting_rust_against_supply_chain) - [Protecting Rust against supply chain attacks](https://kerkour.com/rust-supply-chain-attacks)
* [2025-09-15, 07:34:00](https://tech.slashdot.org/story/25/09/15/050241/what-happens-after-the-death-of-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens After the Death of Social Media?](https://tech.slashdot.org/story/25/09/15/050241/what-happens-after-the-death-of-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 07:14:13](https://news.ycombinator.com/item?id=45246971) - [The Mac App Flea Market](https://blog.jim-nielsen.com/2025/mac-app-flea-market/)
* [2025-09-15, 07:10:03](https://news.ycombinator.com/item?id=45246953) - [Folks, we have the best π](https://lcamtuf.substack.com/p/folks-we-have-the-best)
* [2025-09-15, 06:49:01](https://lobste.rs/s/jkc7xi/linking_text_fragments_with_bookmarklet) - [Linking to text fragments with a bookmarklet](https://alexwlchan.net/2025/text-fragments-bookmarklet)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 04:05:11](https://lobste.rs/s/vioikp/moonbit_developers_are_lying_you) - [Moonbit developers are lying to you](https://bitemyapp.com/blog/moonbit-developers-are-lying-to-you/)
* [2025-09-15, 03:59:39](https://lobste.rs/s/465hcl/smalltalk_lambda_calculus) - [Smalltalk and Lambda Calculus](https://blog.ielliott.io/smalltalk-and-lambda-calculus)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 21:49:56](https://lobste.rs/s/7qw4xw/rating_26_years_java_changes) - [Rating 26 years of Java changes](https://neilmadden.blog/2025/09/12/rating-26-years-of-java-changes/)
* [2025-09-14, 21:17:56](https://news.ycombinator.com/item?id=45243320) - [Show HN: AI-powered web service combining FastAPI, Pydantic-AI, and MCP servers](https://github.com/Aherontas/Pycon_Greece_2025_Presentation_Agents)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 17:28:38](https://lobste.rs/s/yrtjug/unreasonable_effectiveness_modern_sort) - [The unreasonable effectiveness of modern sort algorithms](https://github.com/Voultapher/sort-research-rs/blob/main/writeup/unreasonable/text.md)
* [2025-09-14, 16:21:14](https://lobste.rs/s/bvg2mx/gleam_is_my_new_obsession) - [Gleam is my new obsession](https://ericcodes.io/blog/gleam-my-new-obsession.html)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 19:36:09](https://news.ycombinator.com/item?id=45234707) - [Turgot Map of Paris](https://en.wikipedia.org/wiki/Turgot_map_of_Paris)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:45:31](https://news.ycombinator.com/item?id=45228314) - [California’s Alo Slebir unofficially broke the big wave surfing world record](https://www.sfgate.com/sports/article/alo-slebir-mavericks-big-wave-surf-record-21041864.php)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 16:25:11](https://news.ycombinator.com/item?id=45223827) - [Removing newlines in FASTA file increases ZSTD compression ratio by 10x](https://log.bede.im/2025/09/12/zstandard-long-range-genomes.html)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 02:28:15](https://news.ycombinator.com/item?id=45218080) - [When Your Father Is a Magician, What Do You Believe?](https://thereader.mitpress.mit.edu/when-your-father-is-a-magician-what-do-you-believe/)
* [2025-09-12, 02:22:22](https://news.ycombinator.com/item?id=45218046) - [Researchers revive the pinhole camera for next-gen infrared imaging](https://phys.org/news/2025-09-revive-pinhole-camera-gen-infrared.html)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
