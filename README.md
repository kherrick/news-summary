# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Development

* [Show HN: I built a web framework in C](https://github.com/ashtonjamesd/lavandula) ([comments](https://news.ycombinator.com/item?id=45526890))

* [Introducing the React Foundation: The New Home for React & React Native](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/) ([comments](https://lobste.rs/s/fysgz3/introducing_react_foundation_new_home), [comments](https://news.ycombinator.com/item?id=45524624))

* [McKinsey wonders how to sell AI apps with no measurable benefits](https://www.theregister.com/2025/10/09/mckinsey_ai_monetization/) ([comments](https://news.ycombinator.com/item?id=45526589))

* [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&from=rss) ([comments](https://news.ycombinator.com/item?id=45525336))

* [Two things LLM coding agents are still bad at](https://kix.dev/two-things-llm-coding-agents-are-still-bad-at/) ([comments](https://news.ycombinator.com/item?id=45523537))

## Cybersecurity and Privacy

* [Discord Says 70,000 Users May Have Had Their Government IDs Leaked In Breach](https://yro.slashdot.org/story/25/10/08/2259252/discord-says-70000-users-may-have-had-their-government-ids-leaked-in-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45527156))

* [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&from=rss) ([comments](https://news.ycombinator.com/item?id=45526589))

* [Insurers Balk At Paying Out Huge Settlements For Claims Against AI Firms](https://news.slashdot.org/story/25/10/08/207203/insurers-balk-at-paying-out-huge-settlements-for-claims-against-ai-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45525303))

## Scientific Discoveries and Achievements

* [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&from=rss) ([comments](https://science.slashdot.org/story/25/10/08/2047253/eu-lawmakers-push-to-ban-plant-based-food-terms?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/06/1151211&from=rss))

* [Nobel Prize in Literature 2025: László Krasznahorkai](https://www.nobelprize.org/prizes/literature/2025/press-release/) ([comments](https://news.ycombinator.com/item?id=45527003))

* [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/06/0111221&from=rss) ([comments](https://news.ycombinator.com/item?id=45489191))

## Engineering and Design

* [Designing a Low Latency 10G Ethernet Core](https://ttchisholm.github.io/ethernet/2023/05/01/designing-10g-eth-1.html) ([comments](https://news.ycombinator.com/item?id=45522406))

* [One-man campaign ravages EU 'Chat Control' bill](https://www.politico.eu/article/one-man-spam-campaign-ravages-eu-chat-control-bill-fight-chat-control/) ([comments](https://news.ycombinator.com/item?id=45517134))

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

* [2025-10-09, 13:05:54](https://news.ycombinator.com/item?id=45527156) - [The C++ programmer and educator Rainer Grimm has passed away](https://www.modernescpp.com/index.php/my-als-journey-31-31-the-end/)
* [2025-10-09, 13:00:00](https://yro.slashdot.org/story/25/10/08/2259252/discord-says-70000-users-may-have-had-their-government-ids-leaked-in-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Says 70,000 Users May Have Had Their Government IDs Leaked In Breach](https://yro.slashdot.org/story/25/10/08/2259252/discord-says-70000-users-may-have-had-their-government-ids-leaked-in-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 12:54:18](https://news.ycombinator.com/item?id=45527003) - [Nobel Prize in Literature 2025: László Krasznahorkai](https://www.nobelprize.org/prizes/literature/2025/press-release/)
* [2025-10-09, 12:45:28](https://news.ycombinator.com/item?id=45526890) - [Show HN: I built a web framework in C](https://github.com/ashtonjamesd/lavandula)
* [2025-10-09, 12:19:20](https://news.ycombinator.com/item?id=45526589) - [McKinsey wonders how to sell AI apps with no measurable benefits](https://www.theregister.com/2025/10/09/mckinsey_ai_monetization/)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 11:07:29](https://news.ycombinator.com/item?id=45526042) - [Zippers: Making Functional \&quot;Updates\&quot; Efficient (2010)](http://www.goodmath.org/blog/2010/01/13/zippers-making-functional-updates-efficient/)
* [2025-10-09, 10:35:21](https://lobste.rs/s/yjipld/1k_leds_is_no_limit) - [1k LEDs Is No Limit](https://xayax.net/1k_leds_is_no_limit/)
* [2025-10-09, 10:29:38](https://lobste.rs/s/fysgz3/introducing_react_foundation_new_home) - [Introducing the React Foundation: The New Home for React &amp; React Native](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/)
* [2025-10-09, 10:00:00](https://news.slashdot.org/story/25/10/08/2253241/internet-archive-ordered-to-block-books-in-belgium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Ordered to Block Books in Belgium](https://news.slashdot.org/story/25/10/08/2253241/internet-archive-ordered-to-block-books-in-belgium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 09:55:56](https://lobste.rs/s/n6jiog/how_i_learned_code_using_japanese_method) - [How I Learned to Code (using Japanese Method)](https://blog.stackademic.com/how-i-learned-to-code-using-japanese-method-a01a74c35224)
* [2025-10-09, 09:52:27](https://lobste.rs/s/ivx7ex/interval_calculator) - [Interval Calculator](https://victorpoughon.github.io/interval-calculator/)
* [2025-10-09, 09:19:18](https://news.ycombinator.com/item?id=45525336) - [N8n raises $180M](https://blog.n8n.io/series-c/)
* [2025-10-09, 09:14:58](https://news.ycombinator.com/item?id=45525303) - [QUIC and the End of TCP Sockets](https://codemia.io/blog/path/QUIC-and-the-End-of-TCP-Sockets-How-User-Space-Transport-Rewrites-Flow-Control)
* [2025-10-09, 07:30:12](https://news.ycombinator.com/item?id=45524624) - [The React Foundation](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 07:01:07](https://news.ycombinator.com/item?id=45524437) - [The Forecasting Company (YC S24) Is Hiring a Machine Learning Engineer](https://www.ycombinator.com/companies/the-forecasting-company/jobs/cXJzAhA-founding-machine-learning-engineer)
* [2025-10-09, 07:00:00](https://science.slashdot.org/story/25/10/08/2237234/the-worlds-biggest-citizen-science-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Biggest Citizen Science Project](https://science.slashdot.org/story/25/10/08/2237234/the-worlds-biggest-citizen-science-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 06:39:30](https://news.ycombinator.com/item?id=45524293) - [The Unknotting Number Is Not Additive](https://divisbyzero.com/2025/10/08/the-unknotting-number-is-not-additive/)
* [2025-10-09, 06:37:22](https://lobste.rs/s/tqgnx9/fuzzing_as_basis_for_effective) - [Fuzzing as the basis for effective development a case study of LuaJIT](https://www.youtube.com/watch?v=GwHZaynqh98)
* [2025-10-09, 04:33:48](https://news.ycombinator.com/item?id=45523537) - [Two things LLM coding agents are still bad at](https://kix.dev/two-things-llm-coding-agents-are-still-bad-at/)
* [2025-10-09, 03:30:00](https://science.slashdot.org/story/25/10/08/2047253/eu-lawmakers-push-to-ban-plant-based-food-terms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Lawmakers Push To Ban Plant-Based Food Terms](https://science.slashdot.org/story/25/10/08/2047253/eu-lawmakers-push-to-ban-plant-based-food-terms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
* [2025-10-09, 01:25:00](https://tech.slashdot.org/story/25/10/08/2043210/germany-to-allow-police-to-shoot-down-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany To Allow Police To Shoot Down Drones](https://tech.slashdot.org/story/25/10/08/2043210/germany-to-allow-police-to-shoot-down-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 01:17:20](https://news.ycombinator.com/item?id=45522406) - [Designing a Low Latency 10G Ethernet Core (2023)](https://ttchisholm.github.io/ethernet/2023/05/01/designing-10g-eth-1.html)
* [2025-10-09, 00:45:00](https://news.slashdot.org/story/25/10/08/2033241/polymarket-founder-is-youngest-self-made-billionaire-after-deal-with-nyse-owner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Founder Is Youngest Self-Made Billionaire After Deal With NYSE Owner](https://news.slashdot.org/story/25/10/08/2033241/polymarket-founder-is-youngest-self-made-billionaire-after-deal-with-nyse-owner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 00:02:00](https://mobile.slashdot.org/story/25/10/08/2027258/verizon-buys-isp-starry-to-expand-wireless-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Buys ISP Starry To Expand Wireless Broadband](https://mobile.slashdot.org/story/25/10/08/2027258/verizon-buys-isp-starry-to-expand-wireless-broadband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 23:48:28](https://news.ycombinator.com/item?id=45521920) - [A competitor crippled a $23.5M bootcamp by becoming a Reddit moderator](https://larslofgren.com/codesmith-reddit-reputation-attack/)
* [2025-10-08, 23:20:13](https://news.ycombinator.com/item?id=45521738) - [Discord says 70k users may have had their government IDs leaked in breach](https://www.theverge.com/news/797051/discord-government-ids-leaked-data-breach)
* [2025-10-08, 23:20:00](https://yro.slashdot.org/story/25/10/08/2020255/teens-arrested-in-london-preschool-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Teens Arrested In London Preschool Ransomware Attack](https://yro.slashdot.org/story/25/10/08/2020255/teens-arrested-in-london-preschool-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 22:40:00](https://hardware.slashdot.org/story/25/10/08/2014226/pc-sales-explode-in-q3-as-windows-11-deadlines-force-millions-to-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PC Sales Explode In Q3 As Windows 11 Deadlines Force Millions To Upgrade](https://hardware.slashdot.org/story/25/10/08/2014226/pc-sales-explode-in-q3-as-windows-11-deadlines-force-millions-to-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 22:15:53](https://lobste.rs/s/obvyuo/oral_history_ken_thompson) - [Oral History of Ken Thompson](https://www.youtube.com/watch?v=OmVHkL0IWk4)
* [2025-10-08, 22:00:00](https://science.slashdot.org/story/25/10/08/2011229/amazon-installing-automated-medication-kiosks-at-clinics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Installing Automated Medication Kiosks At Clinics](https://science.slashdot.org/story/25/10/08/2011229/amazon-installing-automated-medication-kiosks-at-clinics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 21:58:00](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss) - [Google Clarifies That Owners Will Still Be Able To Sideload Unverified Apps](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss)
* [2025-10-08, 21:20:00](https://news.slashdot.org/story/25/10/08/207203/insurers-balk-at-paying-out-huge-settlements-for-claims-against-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Insurers Balk At Paying Out Huge Settlements For Claims Against AI Firms](https://news.slashdot.org/story/25/10/08/207203/insurers-balk-at-paying-out-huge-settlements-for-claims-against-ai-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 20:44:00](https://yro.slashdot.org/story/25/10/08/208202/salesforce-says-it-wont-pay-extortion-demand-in-1-billion-records-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Salesforce Says It Won&apos;t Pay Extortion Demand in 1 Billion Records Breach](https://yro.slashdot.org/story/25/10/08/208202/salesforce-says-it-wont-pay-extortion-demand-in-1-billion-records-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 20:04:00](https://news.slashdot.org/story/25/10/08/1928248/national-security-threatened-by-climate-crisis-uk-intelligence-chiefs-due-to-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [National Security Threatened By Climate Crisis, UK Intelligence Chiefs Due To Warn](https://news.slashdot.org/story/25/10/08/1928248/national-security-threatened-by-climate-crisis-uk-intelligence-chiefs-due-to-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 19:36:03](https://lobste.rs/s/ilcane/huml_human_oriented_markup_language) - [HUML :: Human-oriented Markup Language](https://huml.io)
* [2025-10-08, 19:25:00](https://science.slashdot.org/story/25/10/08/1852221/nobel-prize-in-chemistry-awarded-to-architects-of-metal-organic-frameworks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel Prize in Chemistry Awarded To Architects of Metal-Organic Frameworks](https://science.slashdot.org/story/25/10/08/1852221/nobel-prize-in-chemistry-awarded-to-architects-of-metal-organic-frameworks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 18:46:53](https://lobste.rs/s/xg9xxx/julia_v1_12_release_highlights) - [Julia v1.12 release highlights](https://julialang.org/blog/2025/10/julia-1.12-highlights/)
* [2025-10-08, 18:45:00](https://tech.slashdot.org/story/25/10/08/1831202/logitech-will-brick-its-100-pop-smart-home-buttons-on-october-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Will Brick Its $100 Pop Smart Home Buttons on October 15](https://tech.slashdot.org/story/25/10/08/1831202/logitech-will-brick-its-100-pop-smart-home-buttons-on-october-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-08, 17:57:34](https://lobste.rs/s/h3olai/c_26_range_support_for_std_optional) - [C++26: range support for std::optional](https://www.sandordargo.com/blog/2025/10/08/cpp26-range-support-for-std-optional)
* [2025-10-08, 17:56:32](https://news.ycombinator.com/item?id=45518813) - [WinBoat: Windows apps on Linux with seamless integration](https://www.winboat.app/)
* [2025-10-08, 17:14:00](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss) - [Ultra-Thin Sodium Films Offer Low-Cost Alternative to Gold and Silver in Optical Technologies](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss)
* [2025-10-08, 17:10:37](https://lobste.rs/s/jljxt2/citizen_protest_halts_chat_control) - [Citizen Protest Halts Chat Control](https://www.patrick-breyer.de/en/citizen-protest-halts-chat-control-breyer-celebrates-major-victory-for-digital-privacy/)
* [2025-10-08, 15:59:19](https://lobste.rs/s/0tviwm/beyond_indexes_how_open_table_formats) - [Beyond Indexes: How Open Table Formats Optimize Query Performance](https://jack-vanlightly.com/blog/2025/10/8/beyond-indexes-how-open-table-formats-optimize-query-performance)
* [2025-10-08, 15:45:53](https://lobste.rs/s/kijyiv/you_re_doing_rails_wrong) - [You&apos;re doing Rails wrong](https://www.bananacurvingmachine.com/articles/you-re-doing-rails-wrong)
* [2025-10-08, 15:35:55](https://lobste.rs/s/uaaunl/who_needs_git_when_you_have_1m_context) - [Who needs git when you have 1M context windows?](https://www.alexmolas.com/2025/07/28/unexpected-benefit-llm.html)
* [2025-10-08, 15:17:36](https://news.ycombinator.com/item?id=45517134) - [The RSS feed reader landscape](https://lighthouseapp.io/blog/feed-reader-deep-dive)
* [2025-10-08, 14:18:02](https://lobste.rs/s/85kfgv/next_steps_for_bpf_support_gnu_toolchain) - [Next steps for BPF support in the GNU toolchain](https://lwn.net/SubscriberLink/1039827/538da8eaa032755e/)
* [2025-10-08, 14:13:14](https://lobste.rs/s/q4g0o0/crowdsourced_console_clocks_proving) - [Crowdsourced console clocks - proving that SNES sound chips run fast with real data](https://www.youtube.com/watch?v=ECMa7rFnQ2w)
* [2025-10-08, 13:52:18](https://lobste.rs/s/wl2tp2/how_we_found_bug_go_s_arm64_compiler) - [How we found a bug in Go&apos;s arm64 compiler](https://blog.cloudflare.com/how-we-found-a-bug-in-gos-arm64-compiler/)
* [2025-10-08, 13:33:15](https://news.ycombinator.com/item?id=45516000) - [We found a bug in Go&apos;s ARM64 compiler](https://blog.cloudflare.com/how-we-found-a-bug-in-gos-arm64-compiler/)
* [2025-10-08, 13:05:00](https://lobste.rs/s/dzv8ff/devenv_1_10_monorepo_nix_support_with) - [devenv 1.10: monorepo Nix support with devenv.yaml imports - devenv](https://devenv.sh/blog/2025/10/07/devenv-110-monorepo-nix-support-with-devenvyaml-imports/)
* [2025-10-08, 12:31:00](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss) - [Apple Removes ICE Tracking Apps After Pressure by Trump Administration](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss)
* [2025-10-08, 12:25:24](https://lobste.rs/s/ykwhqs/programmer_identity_crisis) - [The Programmer Identity Crisis](https://hojberg.xyz/the-programmer-identity-crisis/)
* [2025-10-08, 11:15:17](https://lobste.rs/s/jwvbsq/falsehoods_programmers_believe_about) - [Falsehoods Programmers Believe About Reality](https://www.youtube.com/watch?v=GBHGHrlRlKs)
* [2025-10-08, 10:26:05](https://news.ycombinator.com/item?id=45514433) - [One-man campaign ravages EU &apos;Chat Control&apos; bill](https://www.politico.eu/article/one-man-spam-campaign-ravages-eu-chat-control-bill-fight-chat-control/)
* [2025-10-08, 09:12:47](https://lobste.rs/s/fygpwl/aspipes_working_pipelines_today_pure) - [asPipes: working pipelines today in pure JavaScript](https://github.com/irony/aspipes)
* [2025-10-08, 07:44:00](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss) - [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss)
* [2025-10-08, 05:23:12](https://lobste.rs/s/kiksdn/half_year_on_alpine_just_musl_aside) - [Half an year on Alpine: just musl aside](https://blog.jutty.dev/posts/half-an-year-on-alpine/)
* [2025-10-08, 03:13:35](https://lobste.rs/s/emvkea/why_we_didn_t_rewrite_our_feed_handler_rust) - [Why we didn&apos;t rewrite our feed handler in Rust](https://databento.com/blog/why-we-didnt-rewrite-our-feed-handler-in-rust)
* [2025-10-08, 03:03:00](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss) - [Instagram Says It is Not Listening to Users’ Microphones to Serve Ads](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss)
* [2025-10-07, 22:17:00](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss) - [New Test to Track How Medicines &apos;Hitchhike&apos; on Cholesterol](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss)
* [2025-10-07, 17:32:00](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss) - [US-Made Leonidas Microwave Weapon Takes Down 49 Drones With a Single Blast](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss)
* [2025-10-07, 15:45:09](https://lobste.rs/s/judd2f/handle_trait) - [The Handle trait](https://smallcultfollowing.com/babysteps/blog/2025/10/07/the-handle-trait/)
* [2025-10-07, 15:38:51](https://lobste.rs/s/xbxhvq/vibe_engineering) - [Vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/)
* [2025-10-07, 12:49:00](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss) - [Twisted Graphene Reveals Double-Dome Superconductivity Controlled by Electric Field](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss)
* [2025-10-07, 11:49:19](https://lobste.rs/s/6uemc8/seeing_like_software_company) - [Seeing like a software company](https://www.seangoedecke.com/seeing-like-a-software-company/)
* [2025-10-07, 07:58:00](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss) - [Harvard Researchers Develop First Ever Continuously Operating Quantum Computer](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss)
* [2025-10-07, 03:16:00](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss) - [Venture Capital Valuations of AI Startups Surge and Raise Fears of an AI Bubble Forming](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss)
* [2025-10-06, 22:31:00](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss) - [Earth&apos;s Crust is Tearing Apart Off the Pacific Northwest—and That&apos;s Not Necessarily Bad News](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss)
* [2025-10-06, 19:59:58](https://news.ycombinator.com/item?id=45495607) - [Talk Python in Production](https://talkpython.fm/books/python-in-production)
* [2025-10-06, 17:44:00](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss) - [Flock’s Gunshot Detection Microphones Will Start Listening for Human Voices](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss)
* [2025-10-06, 13:04:53](https://news.ycombinator.com/item?id=45490957) - [Real-time Nvidia GPU dashboard](https://github.com/psalias2006/gpu-hot)
* [2025-10-06, 12:59:00](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss) - [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)
* [2025-10-06, 12:28:49](https://news.ycombinator.com/item?id=45490627) - [Thoughts on the Word Spec in Rust](https://tritium.legal/blog/word)
* [2025-10-06, 09:56:03](https://news.ycombinator.com/item?id=45489625) - [The Debugging Book](https://www.debuggingbook.org/)
* [2025-10-06, 08:51:02](https://news.ycombinator.com/item?id=45489191) - [A Tissue Therapeutics Revolution](https://cutiss.swiss/)
* [2025-10-06, 08:13:47](https://news.ycombinator.com/item?id=45488892) - [A History of Large Language Models](https://gregorygundersen.com/blog/2025/10/01/large-language-models/)
* [2025-10-06, 08:13:00](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss) - [How Can We Keep Livestock Safe as Wolves Return?](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss)
* [2025-10-06, 07:38:03](https://news.ycombinator.com/item?id=45488647) - [Vec&lt;T&gt;](https://marma.dev/articles/2025/under-the-hood-vec-t)
* [2025-10-06, 07:26:54](https://news.ycombinator.com/item?id=45488569) - [Representation Engineering (2024)](https://vgel.me/posts/representation-engineering/)
* [2025-10-06, 03:30:00](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss) - [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)
* [2025-10-06, 03:10:13](https://news.ycombinator.com/item?id=45487310) - [Why we need SIMD](https://parallelprogrammer.substack.com/p/why-we-need-simd-the-real-reason)
* [2025-10-06, 00:52:26](https://news.ycombinator.com/item?id=45486622) - [Rejected announces from libtorrent clients proxying through SOCKS](https://catgirl.online/2025/10/01/libtorrent-socks-woes)
* [2025-10-05, 22:43:00](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)
* [2025-10-05, 18:02:00](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss) - [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)
* [2025-10-05, 16:03:00](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss) - [The Site is Experiencing 50x Problems](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss)
* [2025-10-05, 15:23:21](https://news.ycombinator.com/item?id=45482198) - [Birth of Prettier](https://blog.vjeux.com/2025/javascript/birth-of-prettier.html)
* [2025-10-05, 13:16:00](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss) - [First Wolf-Dog Hybrid Confirmed in Greece](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss)
* [2025-10-05, 08:26:00](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss) - [Meta Advertisment Based on AI Chats](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss)
* [2025-10-05, 03:45:00](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss) - [Hosting a WebSite on a Disposable Vape](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss)
