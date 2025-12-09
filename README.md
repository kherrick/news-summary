# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Microsoft To Invest $17.5 Billion in India](https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft announces a major investment in India, aiming to enhance technological and infrastructure capabilities.

* [You Don&apos;t Need an ORM](https://www.youtube.com/watch?v=XEJxk5VUSTs) - A perspective on simplifying development by avoiding the complexities of ORMs.

* [PeerTube is recognized as a digital public good by Digital Public Goods Alliance](https://www.digitalpublicgoods.net/r/peertube) - PeerTube receives recognition for its contribution to public digital infrastructure.

* [Microsoft Excel Turns 40, Remains Stubbornly Unkillable](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Celebrating 40 years of Microsoft Excel, renowned for its resilience and widespread adoption.

* [Evidence That Humans Now Speak In a Chatbot-Influenced Dialect Is Getting Stronger](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A report on how chatbot interactions are shaping human communication.

* [Nvidia Can Sell H200 Chips To China For 25% US Cut](https://hardware.slashdot.org/story/25/12/08/2351223/nvidia-can-sell-h200-chips-to-china-for-25-us-cut?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia navigates geopolitical constraints to market its advanced chips in China.

## Science and Health

* [The Rarest of All Diseases Are Becoming Treatable](https://science.slashdot.org/story/25/12/09/1612202/the-rarest-of-all-diseases-are-becoming-treatable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advances in medicine are making previously untreatable diseases manageable.

* [Cold Case Inquiries Stall After Ancestry.com Revisits Policy For Users](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Policy changes at Ancestry.com hinder progress on cold case investigations.

* [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&from=rss) - A study reveals that complex life could have emerged far earlier than previously believed.

* [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&from=rss) - A new protein design tool with groundbreaking applications is unveiled by Nobel laureates.

* [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&from=rss) - Innovation in quantum calculations bridges the gap with classical computing.

* [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&from=rss) - The latest FreeBSD release introduces significant updates for developers and users.

## Economics and Business

* [How private equity is changing housing](https://www.theatlantic.com/ideas/2025/12/private-equity-housing-changes/685138/) - Examining the impact of private equity on the housing market and related challenges.

* [Colleges Oversold Education. Now They Must Sell Connection](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Colleges reassess their strategies as education overselling proves unsustainable.

* [Apple&apos;s slow AI pace becomes a strength as market grows weary of spending](https://finance.yahoo.com/news/apple-slow-ai-pace-becomes-104658095.html) - Apple's cautious approach to AI investments pays off amid market fatigue.

* [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&from=rss) - Insights into the commercial potential of private space stations.

## Society and Global Events

* [193 Cybercrims Arrested, Accused of Plotting &apos;Violence-As-a-Service&apos;](https://yro.slashdot.org/story/25/12/08/2359222/193-cybercrims-arrested-accused-of-plotting-violence-as-a-service?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Authorities arrest culprits linked to organized 'Violence-As-a-Service' operations.

* [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&from=rss) - Legal action against corporations for health concerns related to ultraprocessed foods.

* [Taiwan Cries Censorship As Government Bans Rednote](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy grows over a ban on the platform 'Rednote' in Taiwan.

* [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&from=rss) - Concerns about the ecological and financial sustainability of massive AI infrastructure investments.

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

* [2025-12-09, 18:15:00](https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Invest $17.5 Billion in India](https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 17:57:55](https://news.ycombinator.com/item?id=46208160) - [\&quot;The Matilda Effect\&quot;: Pioneering Women Scientists Written Out of Science History](https://www.openculture.com/2025/12/matilda-effect.html)
* [2025-12-09, 17:38:51](https://lobste.rs/s/lrnk2e/you_don_t_need_orm) - [You Don&apos;t Need an ORM](https://www.youtube.com/watch?v=XEJxk5VUSTs)
* [2025-12-09, 17:35:35](https://news.ycombinator.com/item?id=46207852) - [Show HN: Detail, a Bug Finder](https://detail.dev/)
* [2025-12-09, 17:26:33](https://news.ycombinator.com/item?id=46207727) - [How private equity is changing housing](https://www.theatlantic.com/ideas/2025/12/private-equity-housing-changes/685138/)
* [2025-12-09, 17:25:00](https://news.slashdot.org/story/25/12/09/173219/what-happens-when-an-infinite-money-machine-unravels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When an &apos;Infinite-Money Machine&apos; Unravels](https://news.slashdot.org/story/25/12/09/173219/what-happens-when-an-infinite-money-machine-unravels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 17:11:09](https://news.ycombinator.com/item?id=46207505) - [If you&apos;re going to vibe code, why not do it in C?](https://stephenramsay.net/posts/vibe-coding.html)
* [2025-12-09, 17:08:37](https://news.ycombinator.com/item?id=46207464) - [PeerTube is recognized as a digital public good by Digital Public Goods Alliance](https://www.digitalpublicgoods.net/r/peertube)
* [2025-12-09, 17:05:42](https://news.ycombinator.com/item?id=46207425) - [Donating the Model Context Protocol and Establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
* [2025-12-09, 17:01:11](https://news.ycombinator.com/item?id=46207360) - [Clearspace (YC W23) Is Hiring a Founding Designer](https://www.ycombinator.com/companies/clearspace/jobs/yamWTLr-founding-designer-at-clearspace)
* [2025-12-09, 16:50:00](https://games.slashdot.org/story/25/12/09/1630206/xbox-is-bleeding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Is Bleeding Out](https://games.slashdot.org/story/25/12/09/1630206/xbox-is-bleeding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 16:37:55](https://news.ycombinator.com/item?id=46207017) - [Launch HN: Mentat (YC F24) – Controlling LLMs with Runtime Intervention](https://playground.ctgt.ai)
* [2025-12-09, 16:36:07](https://lobste.rs/s/nrjotv/why_i_think_jj_vcs_is_worth_your_time) - [why i think jj-vcs is worth your time](https://schpet.com/note/why-i-think-jj-vcs-is-worth-your-time)
* [2025-12-09, 16:28:58](https://lobste.rs/s/y5vgj7/international_workshop_on_plan_9_2026) - [International Workshop on Plan 9: 2026 Edition](https://iwp9.org)
* [2025-12-09, 16:11:00](https://science.slashdot.org/story/25/12/09/1612202/the-rarest-of-all-diseases-are-becoming-treatable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Rarest of All Diseases Are Becoming Treatable](https://science.slashdot.org/story/25/12/09/1612202/the-rarest-of-all-diseases-are-becoming-treatable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 16:06:58](https://news.ycombinator.com/item?id=46206531) - [Handsdown one of the coolest 3D websites](https://bruno-simon.com/)
* [2025-12-09, 16:02:37](https://news.ycombinator.com/item?id=46206457) - [Ask HN: Should \&quot;I asked $AI, and it said\&quot; replies be forbidden in HN guidelines?](https://news.ycombinator.com/item?id=46206457)
* [2025-12-09, 15:51:32](https://news.ycombinator.com/item?id=46206277) - [AI needs more power than the grid can deliver – supersonic tech can fix that](https://boomsupersonic.com/flyby/ai-needs-more-power-than-the-grid-can-deliver-supersonic-tech-can-fix-that)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 15:29:26](https://lobste.rs/s/hekuyc/css_wrapped_2025) - [CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)
* [2025-12-09, 15:21:00](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Colleges Oversold Education. Now They Must Sell Connection&apos;](https://news.slashdot.org/story/25/12/09/1511224/colleges-oversold-education-now-they-must-sell-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 15:08:24](https://news.ycombinator.com/item?id=46205724) - [Apple&apos;s slow AI pace becomes a strength as market grows weary of spending](https://finance.yahoo.com/news/apple-slow-ai-pace-becomes-104658095.html)
* [2025-12-09, 15:03:09](https://news.ycombinator.com/item?id=46205661) - [Pebble Index 01 – External memory for your brain](https://repebble.com/blog/meet-pebble-index-01-external-memory-for-your-brain)
* [2025-12-09, 15:00:38](https://news.ycombinator.com/item?id=46205632) - [Show HN: Gemini Pro 3 hallucinates the HN front page 10 years from now](https://dosaygo-studio.github.io/hn-front-page-2035/news)
* [2025-12-09, 14:59:01](https://lobste.rs/s/iyycuu/fighting_client_spaghetti_monster_with) - [Fighting the Client Spaghetti Monster with Rust Traits](http://www.gnunicorn.org/writings/spaghetti-monster-clients-rust-traits-final-boss/)
* [2025-12-09, 14:52:54](https://lobste.rs/s/gzom84/zig_asserts_are_not_c_asserts) - [Zig asserts are not C asserts](https://cryptocode.github.io/blog/docs/assert/)
* [2025-12-09, 14:51:46](https://news.ycombinator.com/item?id=46205519) - [Kaiju – General purpose 3D/2D game engine in Go and Vulkan with built in editor](https://github.com/KaijuEngine/kaiju)
* [2025-12-09, 14:47:57](https://lobste.rs/s/mvwzes/linux_kernel_version_numbers) - [Linux kernel version numbers](http://www.kroah.com/log/blog/2025/12/09/linux-kernel-version-numbers/)
* [2025-12-09, 14:47:20](https://news.ycombinator.com/item?id=46205461) - [My favourite small hash table](https://www.corsix.org/content/my-favourite-small-hash-table)
* [2025-12-09, 14:45:01](https://news.ycombinator.com/item?id=46205437) - [Mistral Releases Devstral 2 (72.2% SWE-Bench Verified) and Vibe CLI](https://mistral.ai/news/devstral-2-vibe-cli)
* [2025-12-09, 14:41:00](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Excel Turns 40, Remains Stubbornly Unkillable](https://it.slashdot.org/story/25/12/09/1428239/microsoft-excel-turns-40-remains-stubbornly-unkillable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 14:01:00](https://tech.slashdot.org/story/25/12/09/141227/indias-aviation-crisis-is-all-about-too-big-to-tame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Aviation Crisis Is All About Too Big to Tame](https://tech.slashdot.org/story/25/12/09/141227/indias-aviation-crisis-is-all-about-too-big-to-tame?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 14:00:00](https://lobste.rs/s/04j2mc/uringmachine_benchmarks) - [UringMachine Benchmarks](https://github.com/digital-fabric/uringmachine/blob/main/benchmark/README.md)
* [2025-12-09, 13:59:41](https://lobste.rs/s/zcve9a/textkit_2_promised_land) - [TextKit 2 - the promised land](https://blog.krzyzanowskim.com/2025/08/14/textkit-2-the-promised-land/)
* [2025-12-09, 13:45:01](https://news.ycombinator.com/item?id=46204853) - [Oliver Sacks Put Himself into His Case Studies. What Was the Cost?](https://www.newyorker.com/magazine/2025/12/15/oliver-sacks-put-himself-into-his-case-studies-what-was-the-cost)
* [2025-12-09, 13:14:50](https://lobste.rs/s/ekj7q2/world_needs_social_sovereignty) - [The world needs social sovereignty](https://blog.joinmastodon.org/2025/12/the-world-needs-social-sovereignty/)
* [2025-12-09, 13:00:00](https://science.slashdot.org/story/25/12/09/053254/science-journal-retracts-study-on-safety-of-monsantos-roundup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science Journal Retracts Study On Safety of Monsanto&apos;s Roundup](https://science.slashdot.org/story/25/12/09/053254/science-journal-retracts-study-on-safety-of-monsantos-roundup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 12:37:15](https://lobste.rs/s/j92yom/go_proposal_secret_mode) - [Go proposal: Secret mode](https://antonz.org/accepted/runtime-secret/)
* [2025-12-09, 12:29:20](https://lobste.rs/s/qr32px/no_aria_is_better_than_bad_aria) - [No ARIA is better than Bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
* [2025-12-09, 11:54:52](https://lobste.rs/s/rvtdbd/apologia_for_lazy_evaluation) - [An apologia for lazy evaluation](https://epicandmonicisnotiso.blogspot.com/2023/03/an-apologia-of-lazy-evaluation.html)
* [2025-12-09, 11:16:10](https://news.ycombinator.com/item?id=46203611) - [Brent&apos;s Encapsulated C Programming Rules (2020)](https://retroscience.net/brents-c-programming-rules.html)
* [2025-12-09, 11:15:34](https://lobste.rs/s/j1epfi/join_on_call_roster_it_ll_change_your_life) - [Join the on-call roster, it’ll change your life](https://serce.me/posts/2025-12-09-join-oncall-it-will-change-your-life)
* [2025-12-09, 11:09:06](https://news.ycombinator.com/item?id=46203581) - [Show HN: AlgoDrill – Interactive drills to stop forgetting LeetCode patterns](https://algodrill.io)
* [2025-12-09, 10:52:58](https://news.ycombinator.com/item?id=46203499) - [ZX Spectrum Next on the Internet: Xberry Pi ESP01 and Pi Zero Upgrades](https://retrogamecoders.com/zx-spectrum-next-on-the-internet-xberry-pi-esp01-and-pi-zero-upgrades/)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 10:00:00](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Evidence That Humans Now Speak In a Chatbot-Influenced Dialect Is Getting Stronger](https://tech.slashdot.org/story/25/12/09/0440240/evidence-that-humans-now-speak-in-a-chatbot-influenced-dialect-is-getting-stronger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 09:55:11](https://lobste.rs/s/gcjtqe/compiler_engineering_practice_part_1) - [Compiler Engineering in Practice - Part 1: What is a Compiler?](https://chisophugis.github.io/2025/12/08/compiler-engineering-in-practice-part-1-what-is-a-compiler.html)
* [2025-12-09, 09:48:55](https://news.ycombinator.com/item?id=46203138) - [The Joy of Playing Grandia, on Sega Saturn](https://www.segasaturnshiro.com/2025/11/27/the-joy-of-playing-grandia-on-sega-saturn/)
* [2025-12-09, 09:26:20](https://lobste.rs/s/wft20h/factor_0_101_now_available) - [Factor 0.101 now available](https://re.factorcode.org/2025/12/factor-0-101-now-available.html)
* [2025-12-09, 09:13:56](https://news.ycombinator.com/item?id=46202921) - [30 Year Anniversary of WarCraft II: Tides of Darkness](https://www.jorsys.org/archive/december_2025.html#newsitem_2025-12-09T07:42:19Z)
* [2025-12-09, 09:01:28](https://lobste.rs/s/ztpekx/39c3_fahrplan_2025) - [39C3 Fahrplan 2025](https://fahrplan.events.ccc.de/congress/2025/fahrplan/)
* [2025-12-09, 08:41:52](https://lobste.rs/s/a79acd/xkcd_1313_regex_golf_2014) - [xkcd 1313: Regex Golf (2014)](https://nbviewer.org/url/norvig.com/ipython/xkcd1313.ipynb)
* [2025-12-09, 07:00:00](https://developers.slashdot.org/story/25/12/09/0417242/claude-code-is-coming-to-slack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code Is Coming To Slack](https://developers.slashdot.org/story/25/12/09/0417242/claude-code-is-coming-to-slack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 03:30:00](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cold Case Inquiries Stall After Ancestry.com Revisits Policy For Users](https://science.slashdot.org/story/25/12/09/008255/cold-case-inquiries-stall-after-ancestrycom-revisits-policy-for-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 03:12:55](https://lobste.rs/s/yp9mou/metacode_new_standard_for_machine) - [Metacode: The new standard for machine-readable comments for Python](https://github.com/pomponchik/metacode)
* [2025-12-09, 02:00:00](https://yro.slashdot.org/story/25/12/08/2359222/193-cybercrims-arrested-accused-of-plotting-violence-as-a-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [193 Cybercrims Arrested, Accused of Plotting &apos;Violence-As-a-Service&apos;](https://yro.slashdot.org/story/25/12/08/2359222/193-cybercrims-arrested-accused-of-plotting-violence-as-a-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 01:30:00](https://hardware.slashdot.org/story/25/12/08/2351223/nvidia-can-sell-h200-chips-to-china-for-25-us-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Can Sell H200 Chips To China For 25% US Cut](https://hardware.slashdot.org/story/25/12/08/2351223/nvidia-can-sell-h200-chips-to-china-for-25-us-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-09, 01:10:00](https://news.slashdot.org/story/25/12/08/2158223/more-than-200-environmental-groups-demand-halt-to-new-us-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 200 Environmental Groups Demand Halt To New US Datacenters](https://news.slashdot.org/story/25/12/08/2158223/more-than-200-environmental-groups-demand-halt-to-new-us-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 00:30:00](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan Cries Censorship As Government Bans Rednote](https://yro.slashdot.org/story/25/12/08/2148249/taiwan-cries-censorship-as-government-bans-rednote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-08, 23:17:16](https://lobste.rs/s/zsgdbg/prediction_ai_will_make_formal) - [Prediction: AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
* [2025-12-08, 20:47:49](https://lobste.rs/s/pvaalr/deprecations_via_warnings_don_t_work_for) - [Deprecations via warnings don’t work for Python libraries](https://sethmlarson.dev/deprecations-via-warnings-dont-work-for-python-libraries)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 19:44:00](https://news.ycombinator.com/item?id=46196688) - [Icons in Menus Everywhere – Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 19:01:01](https://lobste.rs/s/q2gai0/jepsen_nats_2_12_1) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 17:32:52](https://lobste.rs/s/getto0/nova_programming_language) - [Nova Programming Language](https://nova-lang.net/)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 15:01:42](https://lobste.rs/s/qrepmu/icons_menus_everywhere_send_help) - [Icons in Menus Everywhere — Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 10:44:35](https://lobste.rs/s/dbqbhm/one_too_many_words_on_at_t_s_2_000_korn_shell) - [One too many words on AT&amp;T&apos;s $2,000 Korn shell and other Usenet topics](https://blog.gabornyeki.com/2025-12-usenet/)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
* [2025-12-06, 21:11:00](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss) - [OpenAI Desperate to Avoid Explaining Why It Deleted Pirated Book Datasets](https://soylentnews.org/article.pl?sid=25/12/05/0728256&amp;from=rss)
* [2025-12-06, 16:29:00](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss) - [New DDR5 Memory Overclocking World Record Set at 13,530 MT/S](https://soylentnews.org/article.pl?sid=25/12/05/0720258&amp;from=rss)
* [2025-12-06, 11:41:00](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss) - [Let’s Encrypt to Reduce Certificate Validity From 90 Days to 45 Days](https://soylentnews.org/article.pl?sid=25/12/04/1138209&amp;from=rss)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
