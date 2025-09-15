# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Apple Ships iOS 26, iPadOS 26 and macOS Tahoe 26 With 'Liquid Glass' UI Overhaul](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple's latest operating systems make bold visual and functional upgrades with a 'Liquid Glass' UI, promising a refined user experience.

* [Microsoft to force install the Microsoft 365 Copilot app in October](https://www.bleepingcomputer.com/news/microsoft/microsoft-to-force-install-the-microsoft-365-copilot-app-in-october/) - Microsoft plans to push its AI-powered Copilot app to devices, driving discussions on user control and corporate policies.

* [A Third of UK Firms Using 'Bossware' To Monitor Workers' Activity, Survey Reveals](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The extensive use of surveillance software by companies raises privacy concerns in the workplace.

* [Ghostty 1.2.0 - Release Notes](https://ghostty.org/docs/install/release-notes/1-2-0) - The latest Ghostty update introduces new features and improvements aimed at enhancing developer productivity.

* [Introducing the Constexpr Debugger](https://blog.jetbrains.com/clion/2025/09/introducing-constexpr-debugger/) - A debugger capable of evaluating C++ expressions at compile-time changes the developer debugging experience.

* [React Won by Default – And It's Killing Frontend Innovation](https://www.lorenstew.art/blog/react-won-by-default/) - A critique on the dominance of React in the frontend ecosystem and its impact on innovation.

* [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&from=rss) - A novel approach to slimming down Windows 11's footprint by removing nonessential components.

## Scientific Discoveries and Insights

* [A New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An innovative nuclear rocket design offers the potential to greatly accelerate interplanetary travel.

* [Programming Deflation](https://tidyfirst.substack.com/p/programming-deflation) - Exploration of lessons from deflationary concepts applied to software programming.

* [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&from=rss) - A fascinating breakthrough allows researchers to observe time crystals, offering practical insights into quantum physics.

* [AI Triggers 70% Collapse in Fresh Graduate Hiring at India's IT Giants That Employ 5.4 Million](https://slashdot.org/story/25/09/15/0718258/ai-triggers-70-collapse-in-fresh-graduate-hiring-at-indias-it-giants-that-employ-54-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI's labor market disruptions raise critical questions about employment in the tech sector.

## Unconventional Hosting and Computing

* [Hosting a Website on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/) - A unique project demonstrates how a disposable vape can be turned into a web server.

* [RustGPT: A pure-Rust transformer LLM built from scratch](https://github.com/tekaratzas/RustGPT) - An ambitious effort to construct an open-source transformer model entirely in Rust.

* [Creating a VGA Signal in Hubris](https://lasernoises.com/blog/hubris-vga/) - A deep dive into producing graphical signals in the Hubris operating system showcases technical ingenuity.

## Privacy and Surveillance

* [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/) - A story that highlights how consumer tech can unintentionally breach privacy.

* [UK's Data Watchdog Warns Students Are Breaching Their Schools' IT Systems](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns rise over student hacking incidents in schools and their implications on cybersecurity.

* [Protecting Rust against supply chain attacks](https://kerkour.com/rust-supply-chain-attacks) - New measures aim to shield Rust projects from vulnerabilities in the software supply chain.

## Environmental and Industrial Developments

* ['If We Want Bigger Wind Turbines, We're Gonna Need Bigger Airplanes'](https://hardware.slashdot.org/story/25/09/15/0224231/if-we-want-bigger-wind-turbines-were-gonna-need-bigger-airplanes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The advancement of wind technology faces logistical challenges, prompting innovative solutions.

* [The World's EV Owners Discover Unheated Batteries Lose Distance in Freezing Weather](https://hardware.slashdot.org/story/25/09/15/0035239/the-worlds-ev-owners-discover-unheated-batteries-lose-distance-in-freezing-weather?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Electric vehicle performance issues in cold climates become prominent.

## Creative and Educational Tools

* [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space) - How small satellites inspire education and innovation in the space sector.

* [The Mac App Flea Market](https://blog.jim-nielsen.com/2025/mac-app-flea-market/) - A whimsical look at collecting old Mac software.

* [Folks, we have the best π](https://lcamtuf.substack.com/p/folks-we-have-the-best) - A detailed exploration of pi calculations and their significance in mathematical contexts.

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

* [2025-09-15, 18:40:00](https://news.slashdot.org/story/25/09/15/1840218/toxic-fumes-are-leaking-into-airplanes-sickening-crews-and-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toxic Fumes Are Leaking Into Airplanes, Sickening Crews and Passengers](https://news.slashdot.org/story/25/09/15/1840218/toxic-fumes-are-leaking-into-airplanes-sickening-crews-and-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 18:38:47](https://lobste.rs/s/eb404t/ghostty_1_2_0_release_notes) - [Ghostty 1.2.0 - Release Notes](https://ghostty.org/docs/install/release-notes/1-2-0)
* [2025-09-15, 18:20:27](https://lobste.rs/s/at72xo/asciinema_3_0_adds_live_streaming_local) - [asciinema 3.0 adds live streaming and local-first recording](https://blog.asciinema.org/post/three-point-o/)
* [2025-09-15, 18:05:00](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Third of UK Firms Using &apos;Bossware&apos; To Monitor Workers&apos; Activity, Survey Reveals](https://tech.slashdot.org/story/25/09/15/1747238/a-third-of-uk-firms-using-bossware-to-monitor-workers-activity-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 17:53:19](https://news.ycombinator.com/item?id=45252817) - [Hosting a website on a disposable vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 17:47:06](https://lobste.rs/s/zqgfuo/react_won_by_default_it_s_killing_frontend) - [React Won by Default – And It&apos;s Killing Frontend Innovation](https://www.lorenstew.art/blog/react-won-by-default/)
* [2025-09-15, 17:44:55](https://news.ycombinator.com/item?id=45252701) - [AOMedia Announces Year-End Launch of Next-Gen Video Codec AV2](https://aomedia.org/press%20releases/AOMedia-Announces-Year-End-Launch-of-Next-Generation-Video-Codec-AV2-on-10th-Anniversary/)
* [2025-09-15, 17:27:00](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Ships iOS 26, iPadOS 26 and macOS Tahoe 26 With &apos;Liquid Glass&apos; UI Overhaul](https://apple.slashdot.org/story/25/09/15/1727213/apple-ships-ios-26-ipados-26-and-macos-tahoe-26-with-liquid-glass-ui-overhaul?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 16:49:00](https://news.slashdot.org/story/25/09/15/1649210/ais-economic-boost-isnt-showing-up-in-us-gdp-goldman-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Economic Boost Isn&apos;t Showing Up in US GDP, Goldman Says](https://news.slashdot.org/story/25/09/15/1649210/ais-economic-boost-isnt-showing-up-in-us-gdp-goldman-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 16:45:15](https://lobste.rs/s/kilgon/introducing_constexpr_debugger) - [Introducing the Constexpr Debugger](https://blog.jetbrains.com/clion/2025/09/introducing-constexpr-debugger/)
* [2025-09-15, 16:28:54](https://news.ycombinator.com/item?id=45251690) - [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/)
* [2025-09-15, 16:22:23](https://news.ycombinator.com/item?id=45251593) - [Microsoft to force install the Microsoft 365 Copilot app in October](https://www.bleepingcomputer.com/news/microsoft/microsoft-to-force-install-the-microsoft-365-copilot-app-in-october/)
* [2025-09-15, 16:06:30](https://news.ycombinator.com/item?id=45251375) - [Asciinema CLI 3.0 rewritten in Rust, adds live streaming, upgrades file format](https://blog.asciinema.org/post/three-point-o/)
* [2025-09-15, 16:05:00](https://slashdot.org/story/25/09/15/1520249/anthropic-finds-businesses-are-mainly-using-ai-to-automate-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Finds Businesses Are Mainly Using AI To Automate Work](https://slashdot.org/story/25/09/15/1520249/anthropic-finds-businesses-are-mainly-using-ai-to-automate-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 15:51:28](https://news.ycombinator.com/item?id=45251178) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-09-15, 15:44:29](https://news.ycombinator.com/item?id=45251093) - [Boring work needs tension](https://iaziz786.com/blog/boring-work-needs-tension/)
* [2025-09-15, 15:21:00](https://it.slashdot.org/story/25/09/15/1510250/usb-a-isnt-going-anywhere-so-stop-removing-the-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;USB-A Isn&apos;t Going Anywhere, So Stop Removing the Port&apos;](https://it.slashdot.org/story/25/09/15/1510250/usb-a-isnt-going-anywhere-so-stop-removing-the-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 15:20:18](https://news.ycombinator.com/item?id=45250720) - [Launch HN: Trigger.dev (YC W23) – Open-source platform to build reliable AI apps](https://news.ycombinator.com/item?id=45250720)
* [2025-09-15, 15:14:35](https://lobste.rs/s/6hzayo/varnish_8_0_0_with_bonus_project_news) - [Varnish: 8.0.0 with bonus project news](https://varnish-cache.org/#new-release-8-0-0-with-bonus-project-news)
* [2025-09-15, 15:04:24](https://news.ycombinator.com/item?id=45250540) - [Creating a VGA Signal in Hubris](https://lasernoises.com/blog/hubris-vga/)
* [2025-09-15, 15:02:14](https://lobste.rs/s/ccy3b6/pirate_based_logic_rust_shared) - [The pirate-based logic of Rust shared references](http://ais523.me.uk/blog/logic-of-shared-references.html)
* [2025-09-15, 14:49:00](https://news.ycombinator.com/item?id=45250370) - [Apple has a private CSS property to add Liquid Glass effects to web content](https://alastair.is/apple-has-a-private-css-property-to-add-liquid-glass-effects-to-web-content/)
* [2025-09-15, 14:44:00](https://tech.slashdot.org/story/25/09/15/1444225/google-shifts-android-security-updates-to-risk-based-triage-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Shifts Android Security Updates To Risk-Based Triage System](https://tech.slashdot.org/story/25/09/15/1444225/google-shifts-android-security-updates-to-risk-based-triage-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 14:33:41](https://news.ycombinator.com/item?id=45250202) - [How to self-host a web font from Google Fonts](https://blog.velocifyer.com/Posts/3,0,0,2025-8-13,+how+to+self+host+a+font+from+google+fonts.html)
* [2025-09-15, 14:33:14](https://news.ycombinator.com/item?id=45250200) - [Show HN: MCP Server Installation Instructions Generator](https://hyprmcp.com/mcp-install-instructions-generator/)
* [2025-09-15, 14:32:22](https://news.ycombinator.com/item?id=45250193) - [Show HN: Daffodil – Open-Source Ecommerce Framework to connect to any platform](https://github.com/graycoreio/daffodil)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 14:11:43](https://news.ycombinator.com/item?id=45249985) - [Programming Deflation](https://tidyfirst.substack.com/p/programming-deflation)
* [2025-09-15, 14:04:47](https://news.ycombinator.com/item?id=45249915) - [PayPal to support Ethereum and Bitcoin](https://newsroom.paypal-corp.com/2025-09-15-PayPal-Ushers-in-a-New-Era-of-Peer-to-Peer-Payments,-Reimagining-How-Money-Moves-to-Anyone,-Anywhere)
* [2025-09-15, 14:02:02](https://news.ycombinator.com/item?id=45249878) - [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space)
* [2025-09-15, 14:01:00](https://slashdot.org/story/25/09/15/0718258/ai-triggers-70-collapse-in-fresh-graduate-hiring-at-indias-it-giants-that-employ-54-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Triggers 70% Collapse in Fresh Graduate Hiring at India&apos;s IT Giants That Employ 5.4 Million](https://slashdot.org/story/25/09/15/0718258/ai-triggers-70-collapse-in-fresh-graduate-hiring-at-indias-it-giants-that-employ-54-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 13:59:11](https://lobste.rs/s/d26qtj/e_language) - [The E Language](http://erights.org/elang/index.html)
* [2025-09-15, 13:55:45](https://lobste.rs/s/dnfqkp/waterpark_transforming_healthcare_with) - [Waterpark: Transforming Healthcare with Distributed Actors](https://youtu.be/hdBm4K-vvt0)
* [2025-09-15, 13:45:56](https://news.ycombinator.com/item?id=45249697) - [Show HN: Semlib – Semantic Data Processing](https://github.com/anishathalye/semlib)
* [2025-09-15, 12:33:28](https://news.ycombinator.com/item?id=45248899) - [How big a solar battery do I need to store all my home&apos;s electricity?](https://shkspr.mobi/blog/2025/09/how-big-a-solar-battery-do-i-need-to-store-all-my-homes-electricity/)
* [2025-09-15, 12:05:09](https://lobste.rs/s/zvngj0/beyond_orthogonality_how_language) - [Beyond Orthogonality: How Language Models Pack Billions of Concepts into 12,000 Dimensions](https://nickyoder.com/johnson-lindenstrauss/)
* [2025-09-15, 11:39:33](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/z5vm7k/what_are_you_doing_this_week)
* [2025-09-15, 11:34:00](https://hardware.slashdot.org/story/25/09/15/0224231/if-we-want-bigger-wind-turbines-were-gonna-need-bigger-airplanes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;If We Want Bigger Wind Turbines, We&apos;re Gonna Need Bigger Airplanes&apos;](https://hardware.slashdot.org/story/25/09/15/0224231/if-we-want-bigger-wind-turbines-were-gonna-need-bigger-airplanes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 10:12:00](https://lobste.rs/s/jxprbr/algebraic_types_are_not_scary_actually) - [Algebraic Types are not Scary, Actually](https://blog.aiono.dev/posts/algebraic-types-are-not-scary,-actually.html)
* [2025-09-15, 09:47:18](https://news.ycombinator.com/item?id=45247890) - [RustGPT: A pure-Rust transformer LLM built from scratch](https://github.com/tekaratzas/RustGPT)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 09:04:38](https://lobste.rs/s/lq0now/org_social_preview_generator) - [Org Social Preview Generator](https://github.com/tanrax/org-social-preview)
* [2025-09-15, 08:52:12](https://lobste.rs/s/70eqvf/rye_tables_vs_python_pandas_different_way) - [Rye Tables vs Python/Pandas: A Different Way to Wrangle Data](https://ryelang.org/blog/posts/comparing_tables_to_python/)
* [2025-09-15, 08:28:09](https://news.ycombinator.com/item?id=45247396) - [Show HN: I reverse engineered macOS to allow custom Lock Screen wallpapers](https://cindori.com/backdrop)
* [2025-09-15, 08:05:55](https://lobste.rs/s/ylbxri/protecting_rust_against_supply_chain) - [Protecting Rust against supply chain attacks](https://kerkour.com/rust-supply-chain-attacks)
* [2025-09-15, 07:34:00](https://tech.slashdot.org/story/25/09/15/050241/what-happens-after-the-death-of-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens After the Death of Social Media?](https://tech.slashdot.org/story/25/09/15/050241/what-happens-after-the-death-of-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 07:14:13](https://news.ycombinator.com/item?id=45246971) - [The Mac App Flea Market](https://blog.jim-nielsen.com/2025/mac-app-flea-market/)
* [2025-09-15, 07:10:03](https://news.ycombinator.com/item?id=45246953) - [Folks, we have the best π](https://lcamtuf.substack.com/p/folks-we-have-the-best)
* [2025-09-15, 06:49:01](https://lobste.rs/s/jkc7xi/linking_text_fragments_with_bookmarklet) - [Linking to text fragments with a bookmarklet](https://alexwlchan.net/2025/text-fragments-bookmarklet)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 04:34:00](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 04:05:11](https://lobste.rs/s/vioikp/moonbit_developers_are_lying_you) - [Moonbit developers are lying to you](https://bitemyapp.com/blog/moonbit-developers-are-lying-to-you/)
* [2025-09-15, 03:59:39](https://lobste.rs/s/465hcl/smalltalk_lambda_calculus) - [Smalltalk and Lambda Calculus](https://blog.ielliott.io/smalltalk-and-lambda-calculus)
* [2025-09-15, 03:58:23](https://news.ycombinator.com/item?id=45245962) - [A qualitative analysis of pig-butchering scams](https://arxiv.org/abs/2503.20821)
* [2025-09-15, 03:54:20](https://news.ycombinator.com/item?id=45245948) - [Language models pack billions of concepts into 12k dimensions](https://nickyoder.com/johnson-lindenstrauss/)
* [2025-09-15, 03:03:18](https://news.ycombinator.com/item?id=45245678) - [Which NPM package has the largest version number?](https://adamhl.dev/blog/largest-number-in-npm-package/)
* [2025-09-15, 02:34:00](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK&apos;s Data Watchdog Warns Students Are Breaching Their Schools&apos; IT Systems](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 00:40:00](https://hardware.slashdot.org/story/25/09/15/0035239/the-worlds-ev-owners-discover-unheated-batteries-lose-distance-in-freezing-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s EV Owners Discover Unheated Batteries Lose Distance in Freezing Weather](https://hardware.slashdot.org/story/25/09/15/0035239/the-worlds-ev-owners-discover-unheated-batteries-lose-distance-in-freezing-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 23:37:00](https://tech.slashdot.org/story/25/09/14/2334214/tens-of-thousands-of-us-emergency-workers-trained-on-how-to-handle-a-robotaxi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tens of Thousands of US Emergency Workers Trained on How to Handle a Robotaxi](https://tech.slashdot.org/story/25/09/14/2334214/tens-of-thousands-of-us-emergency-workers-trained-on-how-to-handle-a-robotaxi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 22:10:00](https://apple.slashdot.org/story/25/09/14/228211/apple-claims-most-significant-upgrade-to-memory-safety-in-os-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Claims &apos;Most Significant Upgrade to Memory Safety&apos; in OS History](https://apple.slashdot.org/story/25/09/14/228211/apple-claims-most-significant-upgrade-to-memory-safety-in-os-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 21:49:56](https://lobste.rs/s/7qw4xw/rating_26_years_java_changes) - [Rating 26 years of Java changes](https://neilmadden.blog/2025/09/12/rating-26-years-of-java-changes/)
* [2025-09-14, 21:43:24](https://lobste.rs/s/unnfbb/tsink_embedded_time_series_database_for) - [tsink: Embedded time-series database for Rust](https://github.com/h2337/tsink)
* [2025-09-14, 21:17:56](https://news.ycombinator.com/item?id=45243320) - [Show HN: AI-powered web service combining FastAPI, Pydantic-AI, and MCP servers](https://github.com/Aherontas/Pycon_Greece_2025_Presentation_Agents)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 17:28:38](https://lobste.rs/s/yrtjug/unreasonable_effectiveness_modern_sort) - [The unreasonable effectiveness of modern sort algorithms](https://github.com/Voultapher/sort-research-rs/blob/main/writeup/unreasonable/text.md)
* [2025-09-14, 16:21:14](https://lobste.rs/s/bvg2mx/gleam_is_my_new_obsession) - [Gleam is my new obsession](https://ericcodes.io/blog/gleam-my-new-obsession.html)
* [2025-09-14, 15:42:02](https://lobste.rs/s/aokjpu/writing_operating_system_kernel_from) - [Writing an operating system kernel from scratch](https://popovicu.com/posts/writing-an-operating-system-kernel-from-scratch/)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 07:15:21](https://lobste.rs/s/3gfgfs/many_broken_feeds) - [The Many Broken Feeds](https://notes.abhinavsarkar.net/2025/broken-feeds)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 16:25:11](https://news.ycombinator.com/item?id=45223827) - [Removing newlines in FASTA file increases ZSTD compression ratio by 10x](https://log.bede.im/2025/09/12/zstandard-long-range-genomes.html)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 11:46:57](https://news.ycombinator.com/item?id=45221112) - [Death to type classes](https://jappie.me/death-to-type-classes.html)
* [2025-09-12, 11:15:56](https://news.ycombinator.com/item?id=45220939) - [Self-Assembly Gets Automated in Reverse of &apos;Game of Life&apos;](https://www.quantamagazine.org/self-assembly-gets-automated-in-reverse-of-game-of-life-20250910/)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 02:22:22](https://news.ycombinator.com/item?id=45218046) - [Researchers revive the pinhole camera for next-gen infrared imaging](https://phys.org/news/2025-09-revive-pinhole-camera-gen-infrared.html)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
