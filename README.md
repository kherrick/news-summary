# [News Summary](https://kherrick.github.io/news-summary/)

## Elections and Voter Data

* [Maine Woman Discovers Election Ballots in Amazon Package](https://www.themainewire.com/2025/10/maine-woman-discovers-hundreds-of-election-ballots-in-amazon-package-as-state-considers-voter-id) ([comments](https://news.ycombinator.com/item?id=45445331))

## Consumer Technology Challenges

* [AirPods Pro 3 Impossible To Repair, Earn Score of 0 In iFixit Teardown](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [UK Once Again Demands Backdoor To Apple's Encrypted Cloud Storage](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Artificial Intelligence Impacts

* [Evaluating the impact of AI on the labor market: Current state of affairs](https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs) ([comments](https://news.ycombinator.com/item?id=45442743))

* [A 'Godfather of AI' Remains Concerned as Ever About Human Extinction](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Tributes and Loss

* [Jane Goodall, Famed Primatologist and Conservationist, Dies At 91](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45441069))

## Developments in Technology

* [Implementing /Usr Merge in Alpine](https://alpinelinux.org/posts/2025-10-01-usr-merge.html) ([comments](https://news.ycombinator.com/item?id=45443200))

* [DARPA project for automated translation from C to Rust (2024)](https://www.darpa.mil/news/2024/memory-safety-vulnerabilities) ([comments](https://news.ycombinator.com/item?id=45443368))

* [Edge264 – Minimalist, high-performance software decoder for H.264/AVC video](https://github.com/tvlabs/edge264) ([comments](https://news.ycombinator.com/item?id=45443462))

## Environmental and Global Issues

* [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) ([comments](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return))

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

* [2025-10-02, 00:53:20](https://news.ycombinator.com/item?id=45445331) - [Maine Woman Discovers Election Ballots in Amazon Package](https://www.themainewire.com/2025/10/maine-woman-discovers-hundreds-of-election-ballots-in-amazon-package-as-state-considers-voter-id/)
* [2025-10-02, 00:45:00](https://apple.slashdot.org/story/25/10/01/221223/apple-shelves-vision-headset-revamp-to-prioritize-meta-like-ai-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Shelves Vision Headset Revamp to Prioritize Meta-Like AI Glasses](https://apple.slashdot.org/story/25/10/01/221223/apple-shelves-vision-headset-revamp-to-prioritize-meta-like-ai-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 00:38:38](https://news.ycombinator.com/item?id=45445260) - [The biggest semantic mess in Futhark](https://futhark-lang.org/blog/2025-09-26-the-biggest-semantic-mess.html)
* [2025-10-02, 00:37:54](https://lobste.rs/s/m2ovuo/biggest_semantic_mess_futhark) - [The biggest semantic mess in Futhark](https://futhark-lang.org/blog/2025-09-26-the-biggest-semantic-mess.html)
* [2025-10-02, 00:02:00](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AirPods Pro 3 Impossible To Repair, Earn Score of 0 In iFixit Teardown](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 23:48:58](https://lobste.rs/s/9o8m3u/primitive_overloading) - [Primitive overloading](https://mlochbaum.github.io/BQN/commentary/overload.html)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 23:34:33](https://lobste.rs/s/dopdda/jujutsu_v0_34_0_released) - [jujutsu v0.34.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.34.0)
* [2025-10-01, 23:20:00](https://meta.slashdot.org/story/25/10/01/2113247/meta-plans-to-sell-targeted-ads-based-on-data-in-your-ai-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans To Sell Targeted Ads Based On Data In Your AI Chats](https://meta.slashdot.org/story/25/10/01/2113247/meta-plans-to-sell-targeted-ads-based-on-data-in-your-ai-chats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 23:06:55](https://news.ycombinator.com/item?id=45444694) - [Cormac McCarthy&apos;s personal library](https://www.smithsonianmag.com/arts-culture/two-years-cormac-mccarthys-death-rare-access-to-personal-library-reveals-man-behind-myth-180987150/)
* [2025-10-01, 22:40:00](https://tech.slashdot.org/story/25/10/01/180206/a-bullet-crashed-the-internet-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Bullet Crashed the Internet In Texas](https://tech.slashdot.org/story/25/10/01/180206/a-bullet-crashed-the-internet-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 22:00:00](https://entertainment.slashdot.org/story/25/10/01/2056237/cable-nostalgia-persists-as-streaming-gets-more-expensive-fragmented?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cable Nostalgia Persists As Streaming Gets More Expensive, Fragmented](https://entertainment.slashdot.org/story/25/10/01/2056237/cable-nostalgia-persists-as-streaming-gets-more-expensive-fragmented?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 21:57:04](https://lobste.rs/s/pxovor/immich_v2_0_0_stable_release) - [Immich v2.0.0 - Stable Release](https://github.com/immich-app/immich/releases/tag/v2.0.0)
* [2025-10-01, 21:54:46](https://news.ycombinator.com/item?id=45444004) - [Egg-Shaped Curves (2007)](https://nyjp07.com/index_egg_E.html)
* [2025-10-01, 21:20:00](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jane Goodall, Famed Primatologist and Conservationist, Dies At 91](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 21:00:18](https://news.ycombinator.com/item?id=45443462) - [Edge264 – Minimalist, high-performance software decoder for H.264/AVC video](https://github.com/tvlabs/edge264)
* [2025-10-01, 20:53:17](https://news.ycombinator.com/item?id=45443368) - [DARPA project for automated translation from C to Rust (2024)](https://www.darpa.mil/news/2024/memory-safety-vulnerabilities)
* [2025-10-01, 20:47:55](https://news.ycombinator.com/item?id=45443298) - [The Company Man](https://www.lesswrong.com/posts/JH6tJhYpnoCfFqAct/the-company-man)
* [2025-10-01, 20:42:00](https://news.slashdot.org/story/25/10/01/1755259/filipinos-are-addicted-to-online-gambling-so-is-their-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Filipinos Are Addicted to Online Gambling. So Is Their Government](https://news.slashdot.org/story/25/10/01/1755259/filipinos-are-addicted-to-online-gambling-so-is-their-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 20:40:19](https://news.ycombinator.com/item?id=45443200) - [Implementing /Usr Merge in Alpine](https://alpinelinux.org/posts/2025-10-01-usr-merge.html)
* [2025-10-01, 20:07:44](https://news.ycombinator.com/item?id=45442743) - [Evaluating the impact of AI on the labor market: Current state of affairs](https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs)
* [2025-10-01, 20:01:00](https://apple.slashdot.org/story/25/10/01/1740257/samsung-confirms-plan-to-make-foldable-displays-for-major-american-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Confirms Plan To Make Foldable Displays for Major American Company](https://apple.slashdot.org/story/25/10/01/1740257/samsung-confirms-plan-to-make-foldable-displays-for-major-american-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 19:36:00](https://lobste.rs/s/vawrag/ip_over_lasers) - [IP Over Lasers](https://www.mikekohn.net/micro/ip_over_lasers.php)
* [2025-10-01, 19:21:00](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Once Again Demands Backdoor To Apple&apos;s Encrypted Cloud Storage](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 19:11:17](https://lobste.rs/s/va0frj/serving_half_billion_requests_per_day) - [Serving a half billion requests per day with Rust + CGI](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 18:42:19](https://lobste.rs/s/liw1e8/we_tried_go_s_experimental_green_tea) - [We tried Go&apos;s experimental Green Tea garbage collector and it didn&apos;t help performance](https://www.dolthub.com/blog/2025-09-26-greentea-gc-with-dolt/)
* [2025-10-01, 18:41:00](https://entertainment.slashdot.org/story/25/10/01/1530239/indian-court-tells-doctors-to-fix-their-handwriting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian Court Tells Doctors To Fix Their Handwriting](https://entertainment.slashdot.org/story/25/10/01/1530239/indian-court-tells-doctors-to-fix-their-handwriting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 18:20:49](https://news.ycombinator.com/item?id=45441222) - [Increasing your practice surface area](https://www.indiehackers.com/post/lifestyle/increasing-your-practice-surface-area-agxYGi9bL0gd1WYYQZAu)
* [2025-10-01, 18:20:41](https://news.ycombinator.com/item?id=45441219) - [Announcing Tinker](https://thinkingmachines.ai/blog/announcing-tinker/)
* [2025-10-01, 18:10:39](https://news.ycombinator.com/item?id=45441069) - [Jane Goodall has died](https://www.latimes.com/obituaries/story/2025-10-01/jane-goodall-chimpanzees-dead)
* [2025-10-01, 18:01:00](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A &apos;Godfather of AI&apos; Remains Concerned as Ever About Human Extinction](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 17:37:05](https://lobste.rs/s/w8xado/is_tech_inevitable) - [is tech inevitable](https://deviantabstraction.com/2025/09/29/against-the-tech-inevitability/)
* [2025-10-01, 17:36:43](https://news.ycombinator.com/item?id=45440571) - [Don&apos;t avoid workplace politics](https://terriblesoftware.org/2025/10/01/stop-avoiding-politics/)
* [2025-10-01, 17:25:33](https://news.ycombinator.com/item?id=45440431) - [OpenTSLM: Language models that understand time series](https://www.opentslm.com/)
* [2025-10-01, 17:21:00](https://news.slashdot.org/story/25/10/01/175234/britain-is-slowly-going-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain is Slowly Going Bust](https://news.slashdot.org/story/25/10/01/175234/britain-is-slowly-going-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 16:41:00](https://games.slashdot.org/story/25/10/01/1515205/microsoft-raises-xbox-game-pass-top-subscription-50-to-30-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Raises Xbox Game Pass Top Subscription 50% To $30 Monthly](https://games.slashdot.org/story/25/10/01/1515205/microsoft-raises-xbox-game-pass-top-subscription-50-to-30-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 16:01:00](https://tech.slashdot.org/story/25/10/01/1534253/nadella-appoints-new-ceo-to-run-microsofts-biggest-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nadella Appoints New CEO To Run Microsoft&apos;s Biggest Businesses](https://tech.slashdot.org/story/25/10/01/1534253/nadella-appoints-new-ceo-to-run-microsofts-biggest-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 15:57:47](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025) - [Who&apos;s Hiring? Q4 2025](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025)
* [2025-10-01, 15:40:23](https://lobste.rs/s/8nyk1p/stop_trusting_nix_caches) - [Stop Trusting Nix Caches](https://garnix.io/blog/stop-trusting-nix-caches)
* [2025-10-01, 15:21:00](https://slashdot.org/story/25/10/01/139248/chinas-k-visa-plans-spark-worries-of-a-talent-flood?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s K-visa Plans Spark Worries of a Talent Flood](https://slashdot.org/story/25/10/01/139248/chinas-k-visa-plans-spark-worries-of-a-talent-flood?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 15:15:44](https://news.ycombinator.com/item?id=45438704) - [Long-distance and wide-area detection of gene expression in living bacteria](https://www.asimov.press/p/hyperspectral)
* [2025-10-01, 15:01:06](https://news.ycombinator.com/item?id=45438503) - [Ask HN: Who is hiring? (October 2025)](https://news.ycombinator.com/item?id=45438503)
* [2025-10-01, 15:01:06](https://news.ycombinator.com/item?id=45438501) - [Ask HN: Who wants to be hired? (October 2025)](https://news.ycombinator.com/item?id=45438501)
* [2025-10-01, 15:00:41](https://news.ycombinator.com/item?id=45438496) - [Building the heap: racking 30 petabytes of hard drives for pretraining](https://si.inc/posts/the-heap/)
* [2025-10-01, 14:48:31](https://news.ycombinator.com/item?id=45438346) - [Show HN: Autism Simulator](https://autism-simulator.vercel.app/)
* [2025-10-01, 14:46:43](https://lobste.rs/s/85yaxi/as_gopher_i_m_excited_about_gleam_maybe_you) - [As a Gopher I&apos;m excited about Gleam, maybe you&apos;ll be too](https://www.youtube.com/watch?v=ctiRV4rRYYc)
* [2025-10-01, 14:32:17](https://lobste.rs/s/ih9wnq/gernot_s_list_systems_benchmarking) - [Gernot&apos;s List of Systems Benchmarking Crimes](https://gernot-heiser.org/benchmarking-crimes.html)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 14:05:45](https://news.ycombinator.com/item?id=45437893) - [Unix philosophy and filesystem access makes Claude Code amazing](https://www.alephic.com/writing/the-magic-of-claude-code)
* [2025-10-01, 13:59:32](https://lobste.rs/s/jai4yu/nix_steering_committee_vote_no) - [Nix Steering Committee vote of no confidence](https://www.haskellforall.com/2025/10/nix-steering-committee-vote-of-no.html)
* [2025-10-01, 13:53:03](https://lobste.rs/s/fygftm/f3_open_source_data_file_format_for_future) - [F3: The Open-Source Data File Format for the Future](https://db.cs.cmu.edu/papers/2025/zeng-sigmod2025.pdf)
* [2025-10-01, 13:52:41](https://news.ycombinator.com/item?id=45437759) - [F3: Open-source data file format for the future [pdf]](https://db.cs.cmu.edu/papers/2025/zeng-sigmod2025.pdf)
* [2025-10-01, 13:38:36](https://news.ycombinator.com/item?id=45437594) - [Show HN: ChartDB Agent – Cursor for DB schema design](https://app.chartdb.io/ai)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 09:20:46](https://lobste.rs/s/nisytd/our_efforts_part_define_us) - [Our efforts, in part, define us](https://weakty.com/posts/efforts/)
* [2025-10-01, 08:04:08](https://lobste.rs/s/cetldx/register_allocation_go_compiler_2024) - [Register allocation in the Go compiler [2024]](https://vnmakarov.github.io/2024/09/24/register-allocation-in-the-go-compiler.html)
* [2025-10-01, 08:00:11](https://lobste.rs/s/ufpajh/category_theory_illustrated_natural) - [Category Theory Illustrated - Natural transformations](https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/)
* [2025-10-01, 06:19:11](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return) - [What was the longest time you ever took to return to a software project?](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 21:08:02](https://lobste.rs/s/gxdnb7/bevy_0_17) - [Bevy 0.17](https://bevy.org/news/bevy-0-17/)
* [2025-09-30, 20:29:18](https://lobste.rs/s/vgcxcw/systems_programming_with_zig) - [Systems Programming with Zig](https://www.manning.com/books/systems-programming-with-zig)
* [2025-09-30, 20:03:19](https://lobste.rs/s/fcimmd/organize_your_slack_channels_by_how_often) - [Organize your Slack channels by “How Often”, not “What”](https://aggressivelyparaphrasing.me/2025/09/30/organize-your-slack-channels-by-how-often-not-what/)
* [2025-09-30, 19:55:31](https://lobste.rs/s/lm3isi/glide_extensible_keyboard_focused_web) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:43:08](https://news.ycombinator.com/item?id=45430294) - [Show HN: Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 18:32:59](https://lobste.rs/s/hk8yw5/steel_bank_common_lisp_2_5_9) - [Steel Bank Common Lisp 2.5.9](https://www.sbcl.org/news.html#2.5.9)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:01:39](https://lobste.rs/s/rouky6/software_essays_shaped_me) - [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/)
* [2025-09-30, 12:08:50](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet) - [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 14:35:56](https://news.ycombinator.com/item?id=45414362) - [What Every Programmer Positively Needs to Know About Encodings ...](https://kunststube.net/encoding/)
* [2025-09-29, 13:13:29](https://news.ycombinator.com/item?id=45413330) - [CSS Unit Might Be a Combination](https://www.oddbird.net/2025/09/23/type-units/)
* [2025-09-29, 13:11:46](https://news.ycombinator.com/item?id=45413294) - [Tactility: An ESP32 OS](https://tactility.one)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 22:00:47](https://news.ycombinator.com/item?id=45408473) - [\&quot;DSEG\&quot;: Original 7-segment and 14-segment fonts (2014)](https://www.keshikan.net/fonts-e.html)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 14:00:57](https://news.ycombinator.com/item?id=45404378) - [A replica of Citizen Quartz watch based on Harel&apos;s paper introducing statecharts](https://andyjakubowski.github.io/statechart-watch/)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
