# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Running on Empty: Copper](https://thehonestsorcerer.substack.com/p/running-on-empty-copper) explores the potential impacts of copper shortages, a critical material in the tech industry. [Comments](https://news.ycombinator.com/item?id=46198177).

* [Google Says First AI Glasses With Gemini Will Arrive in 2026](https://tech.slashdot.org/story/25/12/08/1842237/google-says-first-ai-glasses-with-gemini-will-arrive-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses Google’s advancements in AI-powered augmented reality. [Comments](https://news.ycombinator.com/item?id=46196076).

* [150.000 nodes in a Virtual DOM? No problem](https://www.youtube.com/watch?v=P4ACFrznLOg) demonstrates a technical feat in optimizing virtual DOM handling for large-scale data. [Comments](https://lobste.rs/s/tnlaka/150_000_nodes_virtual_dom_no_problem).

## Society and Economics

* [Social Media's Relentless Shopping Machine Has Created an Army of Debt-Laden Buyers](https://tech.slashdot.org/story/25/12/08/200230/social-medias-relentless-shopping-machine-has-created-an-army-of-debt-laden-buyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) examines the financial traps of social media-driven consumer habits. [Comments](https://tech.slashdot.org/story/25/12/08/200230/social-medias-relentless-shopping-machine-has-created-an-army-of-debt-laden-buyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Denmark Posts Its Last Letters as Hallowed National Mail Ends](https://news.slashdot.org/story/25/12/08/197230/denmark-posts-its-last-letters-as-hallowed-national-mail-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) marks the end of traditional mail service in Denmark. [Comments](https://news.slashdot.org/story/25/12/08/197230/denmark-posts-its-last-letters-as-hallowed-national-mail-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [How the Dollar-Store Industry Overcharges Cash-Strapped Customers While Promising Low Prices](https://slashdot.org/story/25/12/08/1858239/how-the-dollar-store-industry-overcharges-cash-strapped-customers-while-promising-low-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) highlights exploitative practices in budget retail. [Comments](https://slashdot.org/story/25/12/08/1858239/how-the-dollar-store-industry-overcharges-cash-strapped-customers-while-promising-low-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Science and Environment

* [Can This Simple Invention Convert Waste Heat Into Electricity?](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) evaluates a promising energy innovation for waste heat conversion. [Comments](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Idaho Lab Produces World's First Molten Salt Fuel for Nuclear Reactors](https://hardware.slashdot.org/story/25/12/07/2231215/idaho-lab-produces-worlds-first-molten-salt-fuel-for-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) details a groundbreaking development in nuclear energy resources. [Comments](https://hardware.slashdot.org/story/25/12/07/2231215/idaho-lab-produces-worlds-first-molten-salt-fuel-for-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Cybersecurity and Privacy

* [Google Confirms Android Attacks; No Fix for Most Samsung Users](https://www.forbes.com/sites/zakdoffman/2025/12/08/google-confirms-android-attacks-no-fix-for-most-samsung-users/) alerts readers to critical security vulnerabilities affecting Android devices. [Comments](https://news.ycombinator.com/item?id=46194315).

* [Potential Security Breach in Syncthing-Fork](https://mastodon.pirateparty.be/@surfhosting/115674236291033568) raises concerns about a possible security incident in a popular synchronization tool. [Comments](https://lobste.rs/s/urbcpw/potential_security_breach_syncthing).

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

* [2025-12-08, 21:54:12](https://news.ycombinator.com/item?id=46198177) - [Running on Empty: Copper](https://thehonestsorcerer.substack.com/p/running-on-empty-copper)
* [2025-12-08, 21:10:00](https://tech.slashdot.org/story/25/12/08/200230/social-medias-relentless-shopping-machine-has-created-an-army-of-debt-laden-buyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media&apos;s Relentless Shopping Machine Has Created an Army of Debt-Laden Buyers](https://tech.slashdot.org/story/25/12/08/200230/social-medias-relentless-shopping-machine-has-created-an-army-of-debt-laden-buyers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 20:47:49](https://lobste.rs/s/pvaalr/deprecations_via_warnings_don_t_work_for) - [Deprecations via warnings don’t work for Python libraries](https://sethmlarson.dev/deprecations-via-warnings-dont-work-for-python-libraries)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 20:30:00](https://slashdot.org/story/25/12/08/1932222/chinas-growth-is-coming-at-the-rest-of-the-worlds-expense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Growth Is Coming at the Rest of the World&apos;s Expense](https://slashdot.org/story/25/12/08/1932222/chinas-growth-is-coming-at-the-rest-of-the-worlds-expense?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 19:58:41](https://news.ycombinator.com/item?id=46196831) - [GitHub no longer uses Toasts](https://primer.style/accessibility/toasts/)
* [2025-12-08, 19:56:14](https://lobste.rs/s/2lglm4/disagreements_over_post_quantum) - [Disagreements over post-quantum encryption for TLS](https://lwn.net/SubscriberLink/1048978/8efe916082e53bfe/)
* [2025-12-08, 19:50:00](https://news.slashdot.org/story/25/12/08/197230/denmark-posts-its-last-letters-as-hallowed-national-mail-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Posts Its Last Letters as Hallowed National Mail Ends](https://news.slashdot.org/story/25/12/08/197230/denmark-posts-its-last-letters-as-hallowed-national-mail-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 19:44:00](https://news.ycombinator.com/item?id=46196688) - [Icons in Menus Everywhere – Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 19:34:24](https://lobste.rs/s/fqsavw/addressing_linux_s_missing_pki) - [Addressing Linux&apos;s Missing PKI Infrastructure](https://discourse.ubuntu.com/t/addressing-linuxs-missing-pki-infrastructure/73314)
* [2025-12-08, 19:30:28](https://news.ycombinator.com/item?id=46196545) - [Cancer is surging, bringing a debate about whether to look for it](https://www.nytimes.com/2025/12/08/health/cancer-young-people-deaths.html)
* [2025-12-08, 19:15:00](https://slashdot.org/story/25/12/08/1858239/how-the-dollar-store-industry-overcharges-cash-strapped-customers-while-promising-low-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Dollar-Store Industry Overcharges Cash-Strapped Customers While Promising Low Prices](https://slashdot.org/story/25/12/08/1858239/how-the-dollar-store-industry-overcharges-cash-strapped-customers-while-promising-low-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 19:14:41](https://lobste.rs/s/uaswiw/new_way_watch_your_linux_system_work) - [A New Way to Watch Your Linux System Work](https://www.both.org/?p=12706)
* [2025-12-08, 19:07:59](https://news.ycombinator.com/item?id=46196308) - [Trials avoid high risk patients and underestimate drug harms](https://www.nber.org/papers/w34534)
* [2025-12-08, 19:01:01](https://lobste.rs/s/q2gai0/jepsen_nats_2_12_1) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 19:00:48](https://news.ycombinator.com/item?id=46196228) - [Has the cost of building software dropped 90%?](https://martinalderson.com/posts/has-the-cost-of-software-just-dropped-90-percent/)
* [2025-12-08, 18:51:03](https://news.ycombinator.com/item?id=46196105) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 18:48:27](https://news.ycombinator.com/item?id=46196076) - [Deep dive on Nvidia circular funding](https://philippeoger.com/pages/deep-dive-into-nvidias-virtuous-cycle)
* [2025-12-08, 18:42:00](https://tech.slashdot.org/story/25/12/08/1842237/google-says-first-ai-glasses-with-gemini-will-arrive-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says First AI Glasses With Gemini Will Arrive in 2026](https://tech.slashdot.org/story/25/12/08/1842237/google-says-first-ai-glasses-with-gemini-will-arrive-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 18:37:48](https://lobste.rs/s/v41nn1/yew_0_22_for_real_this_time) - [Yew 0.22 - For Real This Time](https://yew.rs/blog/2025/11/29/release-0-22)
* [2025-12-08, 18:20:08](https://lobste.rs/s/xk3zqh/readable_code_is_unreadable) - [Readable Code is Unreadable](https://blog.wilsonb.com/posts/2025-06-06-readable-code-is-unreadable.html)
* [2025-12-08, 17:39:55](https://news.ycombinator.com/item?id=46195225) - [Quanta to publish popular math and physics books by Terence Tao and David Tong](https://www.simonsfoundation.org/2025/12/08/quanta-books-to-publish-popular-math-and-physics-titles-by-terence-tao-and-david-tong/)
* [2025-12-08, 17:38:34](https://news.ycombinator.com/item?id=46195198) - [AI should only run as fast as we can catch up](https://higashi.blog/2025/12/07/ai-verification/)
* [2025-12-08, 17:33:13](https://news.ycombinator.com/item?id=46195109) - [We collected 10k hours of neuro-language data in our basement](https://condu.it/thought/10k-hours)
* [2025-12-08, 17:32:52](https://lobste.rs/s/getto0/nova_programming_language) - [Nova Programming Language](https://nova-lang.net/)
* [2025-12-08, 17:25:54](https://news.ycombinator.com/item?id=46195007) - [Show HN: DuckDB for Kafka Stream Processing](https://sql-flow.com/docs/tutorials/intro/)
* [2025-12-08, 17:25:04](https://lobste.rs/s/bwhgfe/advent_management) - [Advent of Management](https://github.com/thehammer/advent-of-management)
* [2025-12-08, 17:10:14](https://news.ycombinator.com/item?id=46194828) - [Launch HN: Nia (YC S25) – Give better context to coding agents](https://www.trynia.ai/)
* [2025-12-08, 17:01:11](https://news.ycombinator.com/item?id=46194720) - [Legion Health (YC S21) is hiring a founding engineer (SF, in-person)](https://news.ycombinator.com/item?id=46194720)
* [2025-12-08, 16:57:00](https://slashdot.org/story/25/12/08/1657214/japan-issues-tsunami-warning-after-magnitude-76-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Issues Tsunami Warning After Magnitude 7.6 Earthquake](https://slashdot.org/story/25/12/08/1657214/japan-issues-tsunami-warning-after-magnitude-76-earthquake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 16:44:42](https://news.ycombinator.com/item?id=46194477) - [A series of tricks and techniques I learned doing tiny GLSL demos](https://blog.pkh.me/p/48-a-series-of-tricks-and-techniques-i-learned-doing-tiny-glsl-demos.html)
* [2025-12-08, 16:38:08](https://news.ycombinator.com/item?id=46194384) - [Hunting for North Korean Fiber Optic Cables](https://nkinternet.com/2025/12/08/hunting-for-north-korean-fiber-optic-cables/)
* [2025-12-08, 16:34:08](https://news.ycombinator.com/item?id=46194337) - [Let&apos;s put Tailscale on a jailbroken Kindle](https://tailscale.com/blog/tailscale-jailbroken-kindle)
* [2025-12-08, 16:32:50](https://news.ycombinator.com/item?id=46194315) - [Google confirms Android attacks; no fix for most Samsung users](https://www.forbes.com/sites/zakdoffman/2025/12/08/google-confirms-android-attacks-no-fix-for-most-samsung-users/)
* [2025-12-08, 16:14:52](https://news.ycombinator.com/item?id=46194063) - [No more O&apos;Reilly subscriptions for me](https://zerokspot.com/weblog/2025/12/05/no-more-oreilly-subscriptions-for-me/)
* [2025-12-08, 16:06:14](https://news.ycombinator.com/item?id=46193931) - [AMD GPU Debugger](https://thegeeko.me/blog/amd-gpu-debugging/)
* [2025-12-08, 16:05:00](https://news.slashdot.org/story/25/12/08/1545253/how-a-cryptocurrency-helps-criminals-launder-money-and-evade-sanctions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Cryptocurrency Helps Criminals Launder Money and Evade Sanctions](https://news.slashdot.org/story/25/12/08/1545253/how-a-cryptocurrency-helps-criminals-launder-money-and-evade-sanctions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 15:30:00](https://tech.slashdot.org/story/25/12/08/1530255/the-accounting-uproar-over-how-fast-an-ai-chip-depreciates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Accounting Uproar Over How Fast an AI Chip Depreciates](https://tech.slashdot.org/story/25/12/08/1530255/the-accounting-uproar-over-how-fast-an-ai-chip-depreciates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 15:01:42](https://lobste.rs/s/qrepmu/icons_menus_everywhere_send_help) - [Icons in Menus Everywhere — Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 14:50:48](https://news.ycombinator.com/item?id=46192846) - [Strong earthquake hits northern Japan, tsunami warning issued](https://www3.nhk.or.jp/nhkworld/en/news/20251209_02/)
* [2025-12-08, 14:30:00](https://entertainment.slashdot.org/story/25/12/08/1429227/paramount-skydance-launches-hostile-bid-for-wbd-after-netflix-wins-bidding-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paramount Skydance Launches Hostile Bid For WBD After Netflix Wins Bidding War](https://entertainment.slashdot.org/story/25/12/08/1429227/paramount-skydance-launches-hostile-bid-for-wbd-after-netflix-wins-bidding-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 14:23:48](https://lobste.rs/s/zbruc2/ray_marching_soft_shadows_2d) - [Ray Marching Soft Shadows in 2D](http://www.rykap.com/2020/09/23/distance-fields/)
* [2025-12-08, 14:16:34](https://news.ycombinator.com/item?id=46192459) - [Paramount launches hostile bid for Warner Bros](https://www.cnbc.com/2025/12/08/paramount-skydance-hostile-bid-wbd-netflix.html)
* [2025-12-08, 14:00:00](https://slashdot.org/story/25/12/08/141202/amazon-pitches-ai-tools-as-co-workers-while-axing-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Pitches AI Tools as Co-Workers While Axing Jobs](https://slashdot.org/story/25/12/08/141202/amazon-pitches-ai-tools-as-co-workers-while-axing-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 13:49:21](https://news.ycombinator.com/item?id=46192186) - [Microsoft increases Office 365 and Microsoft 365 license prices](https://office365itpros.com/2025/12/08/microsoft-365-pricing-increase/)
* [2025-12-08, 13:43:59](https://news.ycombinator.com/item?id=46192130) - [IBM to acquire Confluent](https://www.confluent.io/blog/ibm-to-acquire-confluent/)
* [2025-12-08, 13:23:29](https://news.ycombinator.com/item?id=46191933) - [Alignment is capability](https://www.off-policy.com/alignment-is-capability/)
* [2025-12-08, 13:08:38](https://news.ycombinator.com/item?id=46191763) - [Flow: Actor-based language for C++, used by FoundationDB](https://github.com/apple/foundationdb/tree/main/flow)
* [2025-12-08, 12:34:00](https://hardware.slashdot.org/story/25/12/07/2231215/idaho-lab-produces-worlds-first-molten-salt-fuel-for-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Idaho Lab Produces World&apos;s First Molten Salt Fuel for Nuclear Reactors](https://hardware.slashdot.org/story/25/12/07/2231215/idaho-lab-produces-worlds-first-molten-salt-fuel-for-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 12:00:40](https://lobste.rs/s/tnlaka/150_000_nodes_virtual_dom_no_problem) - [150.000 nodes in a Virtual DOM? No problem](https://www.youtube.com/watch?v=P4ACFrznLOg)
* [2025-12-08, 11:08:29](https://lobste.rs/s/s3ez2s/practical_guide_xhtml_2021) - [Practical guide to XHTML (2021)](https://www.nayuki.io/page/practical-guide-to-xhtml)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 10:53:43](https://lobste.rs/s/lx05cl/internet_forgets_i_don_t_want) - [The Internet forgets, but I don’t want to](https://alexwlchan.net/2025/social-media-scrapbook/)
* [2025-12-08, 10:44:35](https://lobste.rs/s/dbqbhm/one_too_many_words_on_at_t_s_2_000_korn_shell) - [One too many words on AT&amp;T&apos;s $2,000 Korn shell and other Usenet topics](https://blog.gabornyeki.com/2025-12-usenet/)
* [2025-12-08, 10:11:52](https://lobste.rs/s/zwzwqn/state_elixir_2025_community_survey) - [State of Elixir 2025 - Community Survey Results](https://elixir-hub.com/surveys/2025)
* [2025-12-08, 09:16:50](https://lobste.rs/s/j78zip/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/j78zip/what_are_you_doing_this_week)
* [2025-12-08, 08:55:51](https://lobste.rs/s/urbcpw/potential_security_breach_syncthing) - [potential security breach in syncthing-fork](https://mastodon.pirateparty.be/@surfhosting/115674236291033568)
* [2025-12-08, 08:34:00](https://tech.slashdot.org/story/25/12/08/0625216/was-the-airbus-a320-recall-caused-by-cosmic-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Was the Airbus A320 Recall Caused By Cosmic Rays?](https://tech.slashdot.org/story/25/12/08/0625216/was-the-airbus-a320-recall-caused-by-cosmic-rays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 08:15:32](https://news.ycombinator.com/item?id=46189692) - [GitHub Actions has a package manager, and it might be the worst](https://nesbitt.io/2025/12/06/github-actions-package-manager.html)
* [2025-12-08, 08:14:28](https://lobste.rs/s/n6rfvu/adding_unpack_syntax_rcl) - [Adding unpack syntax to RCL](https://ruudvanasseldonk.com/2025/adding-unpack-to-rcl)
* [2025-12-08, 07:58:21](https://lobste.rs/s/cae1mg/from_azure_functions_freebsd) - [From Azure Functions to FreeBSD](https://jmmv.dev/2025/12/from-azure-functions-to-freebsd.html)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 04:36:00](https://tech.slashdot.org/story/25/12/08/0310242/all-of-russias-porsches-were-bricked-by-a-mysterious-satellite-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All of Russia&apos;s Porsches Were Bricked By a Mysterious Satellite Outage](https://tech.slashdot.org/story/25/12/08/0310242/all-of-russias-porsches-were-bricked-by-a-mysterious-satellite-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 02:40:00](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can This Simple Invention Convert Waste Heat Into Electricity?](https://hardware.slashdot.org/story/25/12/08/0236259/can-this-simple-invention-convert-waste-heat-into-electricity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-08, 01:35:00](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Meetings Can Harm Employee Well-Being](https://it.slashdot.org/story/25/12/08/0132210/why-meetings-can-harm-employee-well-being?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 00:22:52](https://lobste.rs/s/iuzgps/attempt_at_compelling_articulation) - [An Attempt at a Compelling Articulation of Forth&apos;s Practical Strengths and Eternal Usefulness](https://im-just-lee.ing/forth-why-cb234c03.txt)
* [2025-12-07, 23:18:13](https://lobste.rs/s/iohaag/pulldash_fast_filterable_github_pr) - [Pulldash: Fast, filterable GitHub PR review. Entirely client-side](https://github.com/coder/pulldash)
* [2025-12-07, 21:16:39](https://lobste.rs/s/fiakvo/why_sanitizer_api_is_just_sethtml) - [Why the Sanitizer API is just `setHTML()`](https://frederikbraun.de/why-sethtml.html)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 18:57:17](https://lobste.rs/s/loqwsc/f35_fighter_jet_s_c_coding_standards) - [F35 Fighter Jet’s C++ Coding Standards](https://www.stroustrup.com/JSF-AV-rules.pdf)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 13:14:01](https://lobste.rs/s/ml4som/it_is_worth_it_optimize_images_for_your) - [It Is Worth It To Optimize Images For Your Site](https://brainbaking.com/post/2025/10/is-it-worth-it-to-optimize-images-for-your-site/)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
* [2025-12-06, 21:11:00](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss)
* [2025-12-06, 16:29:00](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss) - [New DDR5 Memory Overclocking World Record Set at 13,530 MT/S](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss)
* [2025-12-06, 11:41:00](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss) - [Let’s Encrypt to Reduce Certificate Validity From 90 Days to 45 Days](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 19:33:28](https://news.ycombinator.com/item?id=46166178) - [Microsoft Download Center Archive](https://legacyupdate.net/download-center/)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 08:08:42](https://news.ycombinator.com/item?id=46157914) - [Word spacing](https://en.wikipedia.org/wiki/Word_spacing)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 13:16:54](https://news.ycombinator.com/item?id=46147329) - [Show HN: Fanfa – Interactive and animated Mermaid diagrams](https://fanfa.dev/)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
