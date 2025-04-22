# [News Summary](https://kherrick.github.io/news-summary/)

## Workplace Innovations

* [Companies Ditch Fluorescent Lights in Battle for Office Return](https://slashdot.org/story/25/04/22/1542204/companies-ditch-fluorescent-lights-in-battle-for-office-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Many companies are removing fluorescent lighting from offices as part of an effort to make workspaces more appealing post-pandemic.

* [Google Chrome To Continue To Use Third-Party Cookies in Major Reversal](https://tech.slashdot.org/story/25/04/22/172221/google-chrome-to-continue-to-use-third-party-cookies-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google reverses a plan to phase out third-party cookies, impacting digital marketing and analytics industries.

* [Microsoft Implements Stricter Performance Management System With Two-Year Rehire Ban](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft adopts a new performance management system aimed at improving employee accountability.

## Artificial Intelligence Applications and Concerns

* [AI Floods Amazon With Strange Political Books Before Canadian Election](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An influx of AI-generated political books on Amazon raises potential issues with misinformation and manipulation ahead of the Canadian elections.

* [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Academy of Motion Picture Arts and Sciences confirms that films utilizing AI tools are eligible for Oscars.

* [AI Hallucinations Lead To a New Cyber Threat: Slopsquatting](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI-generated domain name errors, dubbed 'slopsquatting,' are identified as a growing cyber threat.

## Technological Innovations

* [Sapphire: Rust based package manager for macOS (homebrew replacement)](https://github.com/alexykn/sapphire) - Sapphire emerges as a Rust-powered alternative to Homebrew for macOS users.

* [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization) - ClickHouse improves its database performance with 'lazy materialization,' accelerating query processing times.

* [Rowboat – Open-source IDE for multi-agent systems](https://github.com/rowboatlabs/rowboat) - A decentralized open-source platform for building and managing multi-agent systems is now available.

* [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro) - A detailed exploration of techniques to determine if an expression is constant in C programming.

## Science and Exploration

* [The complex origin story of domestic cats](https://phys.org/news/2025-04-complex-story-domestic-cats-tunisia.html) - A new study traces the domestication and cultural intersection of cats across ancient civilizations.

* [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - A historic occasion marks the return of NASA's oldest astronaut after breaking records in space.

* [Using physics simulations to find targeting strategies in tenpin bowling](https://pubs.aip.org/aip/adv/article/15/4/045222/3344017/Using-physics-simulations-to-find-targeting) - Advanced physics simulations identify better aiming strategies for tenpin bowling enthusiasts.

## Historical and Cultural Insights

* [The Truth about Atlantis (2019)](https://talesoftimesforgotten.com/2019/03/26/the-truth-about-atlantis/) - A critical investigation separates myth from reality in the enduring fascination with Atlantis.

* [An Utterly Incomplete Look at Research from 1825](http://bcmullins.github.io/research-from-1825/) - This article delves into significant yet overlooked research from the year 1825.

* [The raccoons who made computer magazine ads great](https://technologizer.com/home/2025/04/22/pc-connection-ads-raccoons/) - A nostalgic look back at the whimsical advertisements of PC Connection, featuring raccoons.

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

* [2025-04-22, 18:40:00](https://slashdot.org/story/25/04/22/1542204/companies-ditch-fluorescent-lights-in-battle-for-office-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Companies Ditch Fluorescent Lights in Battle for Office Return](https://slashdot.org/story/25/04/22/1542204/companies-ditch-fluorescent-lights-in-battle-for-office-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 18:39:20](https://news.ycombinator.com/item?id=43765011) - [Sapphire: Rust based package manager for macOS (homebrew replacement)](https://github.com/alexykn/sapphire)
* [2025-04-22, 18:08:42](https://news.ycombinator.com/item?id=43764783) - [The Truth about Atlantis (2019)](https://talesoftimesforgotten.com/2019/03/26/the-truth-about-atlantis/)
* [2025-04-22, 18:07:32](https://news.ycombinator.com/item?id=43764771) - [The complex origin story of domestic cats](https://phys.org/news/2025-04-complex-story-domestic-cats-tunisia.html)
* [2025-04-22, 18:00:00](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Floods Amazon With Strange Political Books Before Canadian Election](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 17:57:08](https://news.ycombinator.com/item?id=43764705) - [I started a devblog about mixing SwiftUI and C++ to make a Twitch app](https://www.kulve.org/blog/tech_stack)
* [2025-04-22, 17:53:34](https://news.ycombinator.com/item?id=43764677) - [Parcom: CL Parser Combinators](https://github.com/fosskers/parcom)
* [2025-04-22, 17:52:47](https://lobste.rs/s/abrezi/parcom_cl_parser_combinators) - [parcom: CL Parser Combinators](https://github.com/fosskers/parcom)
* [2025-04-22, 17:29:31](https://news.ycombinator.com/item?id=43764439) - [π0.5: A VLA with open-world generalization](https://pi.website/blog/pi05)
* [2025-04-22, 17:20:00](https://tech.slashdot.org/story/25/04/22/172221/google-chrome-to-continue-to-use-third-party-cookies-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome To Continue To Use Third-Party Cookies in Major Reversal](https://tech.slashdot.org/story/25/04/22/172221/google-chrome-to-continue-to-use-third-party-cookies-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 17:01:01](https://news.ycombinator.com/item?id=43764185) - [Recover (YC W21) Is Hiring](https://www.ycombinator.com/companies/recover/jobs/76dMle9-head-of-finance)
* [2025-04-22, 16:51:24](https://news.ycombinator.com/item?id=43764122) - [Show HN: I built a Ruby gem that handles memoization with a ttl](https://github.com/mishalzaman/memo_ttl)
* [2025-04-22, 16:49:55](https://news.ycombinator.com/item?id=43764101) - [Are polynomial features the root of all evil? (2024)](https://alexshtf.github.io/2024/01/21/Bernstein.html)
* [2025-04-22, 16:46:19](https://news.ycombinator.com/item?id=43764076) - [I should have loved biology too](https://nehalslearnings.substack.com/p/i-should-have-loved-biology-too)
* [2025-04-22, 16:40:00](https://tech.slashdot.org/story/25/04/22/1521238/the-effect-of-deactivating-facebook-and-instagram-on-users-emotional-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Effect of Deactivating Facebook and Instagram on Users&apos; Emotional State](https://tech.slashdot.org/story/25/04/22/1521238/the-effect-of-deactivating-facebook-and-instagram-on-users-emotional-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 16:33:21](https://news.ycombinator.com/item?id=43763967) - [Show HN: Rowboat – Open-source IDE for multi-agent systems](https://github.com/rowboatlabs/rowboat)
* [2025-04-22, 16:18:41](https://news.ycombinator.com/item?id=43763814) - [Show HN: Morphik – Open-source RAG that understands PDF images, runs locally](https://github.com/morphik-org/morphik-core)
* [2025-04-22, 16:13:59](https://news.ycombinator.com/item?id=43763778) - [An Utterly Incomplete Look at Research from 1825](http://bcmullins.github.io/research-from-1825/)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 16:03:32](https://news.ycombinator.com/item?id=43763688) - [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
* [2025-04-22, 16:00:00](https://apple.slashdot.org/story/25/04/22/159236/apple-removes-available-now-claim-from-intelligence-page-following-nad-review?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Removes &apos;Available Now&apos; Claim from Intelligence Page Following NAD Review](https://apple.slashdot.org/story/25/04/22/159236/apple-removes-available-now-claim-from-intelligence-page-following-nad-review?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 15:55:12](https://news.ycombinator.com/item?id=43763614) - [Algebraic Semantics for Machine Knitting](https://uwplse.org/2025/03/31/Algebraic-Knitting.html)
* [2025-04-22, 15:24:53](https://news.ycombinator.com/item?id=43763291) - [Surprises in Logic (2016)](https://math.ucr.edu/home/baez/surprises.html)
* [2025-04-22, 15:20:00](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 15:17:23](https://news.ycombinator.com/item?id=43763225) - [Supabase raises $200M Series D at $2B valuation](https://finance.yahoo.com/news/exclusive-supabase-raises-200-million-112154867.html)
* [2025-04-22, 15:17:21](https://news.ycombinator.com/item?id=43763223) - [David Tong Lectures on Theoretical Physics](https://www.damtp.cam.ac.uk/user/tong/books.html)
* [2025-04-22, 15:11:15](https://lobste.rs/s/84ysx5/start_with_clean_slate_integration) - [Start with a clean slate: Integration testing with PostgreSQL](https://blog.dogac.dev/pg-test-table-track/)
* [2025-04-22, 14:59:53](https://news.ycombinator.com/item?id=43763026) - [Launch HN: Infra.new (YC W23) – DevOps copilot with guardrails built in](https://news.ycombinator.com/item?id=43763026)
* [2025-04-22, 14:40:00](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Scientists Flee Abroad as Research Funding Cuts Deepen: Nature](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 14:14:28](https://news.ycombinator.com/item?id=43762451) - [Using physics simulations to find targeting strategies in tenpin bowling](https://pubs.aip.org/aip/adv/article/15/4/045222/3344017/Using-physics-simulations-to-find-targeting)
* [2025-04-22, 14:10:59](https://news.ycombinator.com/item?id=43762409) - [Show HN: I open-sourced my AI toy company that runs on ESP32 and OpenAI realtime](https://github.com/akdeb/ElatoAI)
* [2025-04-22, 14:00:00](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Pays Samsung &apos;Enormous Sums&apos; for Gemini AI App Installs](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 13:36:13](https://lobste.rs/s/aafqoa/detecting_if_expression_is_constant_c) - [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro)
* [2025-04-22, 13:35:47](https://news.ycombinator.com/item?id=43761998) - [Abusing DuckDB-WASM by making SQL draw 3D graphics (Sort Of)](https://www.hey.earth/posts/duckdb-doom)
* [2025-04-22, 13:34:27](https://news.ycombinator.com/item?id=43761976) - [Join the W3C Exploration Interest Group: where standards start](https://www.w3.org/blog/2025/join-the-w3c-exploration-interest-group-where-standards-start/)
* [2025-04-22, 13:06:30](https://news.ycombinator.com/item?id=43761633) - [The raccoons who made computer magazine ads great](https://technologizer.com/home/2025/04/22/pc-connection-ads-raccoons/)
* [2025-04-22, 13:00:00](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Quietly Raises Prices By Up To 25%](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 12:53:45](https://lobste.rs/s/yjypaz/event_hidden_architectures) - [Event-Hidden Architectures](https://skiplabs.io/blog/event-hidden-arch)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 10:00:45](https://lobste.rs/s/wnuoeu/evertop_e_ink_ibm_xt_clone_with_solar_power) - [Evertop: E-ink IBM XT clone with solar power, ultra low power consumption, and ultra long battery life](https://github.com/ericjenott/Evertop)
* [2025-04-22, 10:00:00](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says DOJ Breakup Would Harm US In &apos;Global Race With China&apos;](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 09:27:20](https://news.ycombinator.com/item?id=43760357) - [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro)
* [2025-04-22, 09:12:57](https://lobste.rs/s/c8irws/adding_shortcodes_marksmith_editor) - [Adding shortcodes to the Marksmith editor](https://avohq.io/blog/marksmith-shortcodes)
* [2025-04-22, 08:56:10](https://lobste.rs/s/tlbyzv/make_your_own_internet_presence_with) - [Make Your Own Internet Presence with NetBSD and a 1 euro VPS – Part 1: Your Blog](https://it-notes.dragas.net/2025/04/22/make-your-own-internet-presence-with-netbsd-and-a-1-euro-vps-part-1-your-blog/)
* [2025-04-22, 07:00:00](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Oldest Astronaut Celebrates 70th Birthday With Return To Earth](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:31:29](https://lobste.rs/s/ydxus1/pipelining_might_be_my_favorite) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 04:27:40](https://news.ycombinator.com/item?id=43759073) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:27:02](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:01:59](https://lobste.rs/s/naazom/cheating_reaper_go) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-22, 03:30:00](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Quest To Build Islands With Ocean Currents In the Maldives](https://news.slashdot.org/story/25/04/21/2056255/the-quest-to-build-islands-with-ocean-currents-in-the-maldives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-22, 01:40:00](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Hallucinations Lead To a New Cyber Threat: Slopsquatting](https://it.slashdot.org/story/25/04/22/0118200/ai-hallucinations-lead-to-a-new-cyber-threat-slopsquatting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:19:50](https://lobste.rs/s/klqcce/decentralizing_schemes) - [Decentralizing Schemes](https://www.tbray.org/ongoing/When/202x/2025/04/16/Decentralized-Schemes)
* [2025-04-22, 01:12:00](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbnb Now Shows the Full Price of Your Stay By Default](https://news.slashdot.org/story/25/04/22/0110251/airbnb-now-shows-the-full-price-of-your-stay-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 01:08:00](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Implements Stricter Performance Management System With Two-Year Rehire Ban](https://slashdot.org/story/25/04/22/018236/microsoft-implements-stricter-performance-management-system-with-two-year-rehire-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 00:23:26](https://lobste.rs/s/llxpp7/first_impressions_pocket_flow_s_tutorial) - [First impressions of Pocket Flow’s tutorial generator](https://technicalwriting.dev/ml/pocketflow/index.html)
* [2025-04-21, 23:06:49](https://lobste.rs/s/gt4wye/record_tuple_ecmascript_proposal_has) - [The Record/Tuple ECMAScript Proposal has been withdrawn](https://github.com/tc39/proposal-record-tuple)
* [2025-04-21, 22:15:40](https://lobste.rs/s/z2jpjn/building_website_fit_for_1999) - [Building a Website Fit for 1999](https://www.wezm.net/v2/posts/2025/website-fit-for-1999/)
* [2025-04-21, 21:13:47](https://lobste.rs/s/ld1kzl/separating_work_personal_config) - [Separating work and personal config](https://www.emoses.org/posts/keeping-work-separate/)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 18:33:02](https://lobste.rs/s/awsduo/new_form_verification_on_bluesky) - [A New Form of Verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 16:37:51](https://lobste.rs/s/ymcuvb/retracing_google_s_steps_recreating) - [Retracing Google’s steps: recreating the Webtable in Rust](https://fjall-rs.github.io/post/recreating-webtable/)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 12:37:19](https://lobste.rs/s/mdshkf/getting_forked_by_microsoft) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 17:33:05](https://news.ycombinator.com/item?id=43737916) - [Libro: a command-line tool to track your books](https://github.com/mkaz/libro)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 07:59:05](https://news.ycombinator.com/item?id=43734938) - [Pike – a dynamic programming language with a syntax similar to Java and C](https://pike.lysator.liu.se/)
* [2025-04-19, 07:02:43](https://news.ycombinator.com/item?id=43734751) - [WebAssembly: How to Allocate Your Allocator](https://nullprogram.com/blog/2025/04/19/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 23:22:46](https://news.ycombinator.com/item?id=43732767) - [Native American names extend earthquake history of northeastern North America](https://phys.org/news/2025-04-native-american-earthquake-history-northeastern.html)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
