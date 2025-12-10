# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [Dependable C](https://dependablec.org/) - An exploration of design principles for building reliable software systems using C.

* [Post-transformer inference: 224× compression of Llama-70B with improved accuracy](https://zenodo.org/records/17873275) - A breakthrough in model compression for AI systems, achieving significant size reduction with improved accuracy.

* [10 Years of Let's Encrypt Certificates](https://letsencrypt.org/2025/12/09/10-years.html) - Celebrating a decade of providing free, automated SSL/TLS certificates to improve web security.

* [Go proposal: Secret mode](https://antonz.org/accepted/runtime-secret/) - A proposal for hiding runtime information in Go applications to enhance security.

* [International Workshop on Plan 9: 2026 Edition](https://iwp9.org) - Announcing the upcoming 2026 edition of the workshop focused on Plan 9, the operating system for distributed systems.

* [Debugging Qt WebAssembly](http://qtandeverything.blogspot.com/2025/12/debugging-qt-webassembly-dwarf.html) - Techniques and insights into debugging Qt applications compiled to WebAssembly.

## AI and Algorithmic Innovations

* [OpenEvolve: Teaching LLMs to Discover Algorithms Through Evolution](https://algorithmicsuperintelligence.ai/blog/openevolve-overview/index.html) - A pioneering project introducing algorithm discovery through evolutionary methods for large language models.

* [Agentic AI Foundation](https://block.xyz/inside/block-anthropic-and-openai-launch-the-agentic-ai-foundation) - Collaborative efforts by major tech entities to establish an ethical framework for advanced artificial intelligence.

* [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) - Initiatives to standardize and promote responsible AI through collaborative governance.

## Security and Privacy Concerns

* [Stop Breaking TLS](https://www.markround.com/blog/2025/12/09/stop-breaking-tls/) - A critical examination of security practices that undermine the integrity of TLS implementations.

* [Fear of the Walking Zig: The Security Audit Gap](https://generativeai.pub/fear-of-the-walking-zig-the-security-audit-gap-707aec6ceb92) - Analyzing the security challenges surrounding the Zig programming language and its ecosystem.

* [Show all your application error using Cloudflare Error Page](https://github.com/donlon/cloudflare-error-page) - A tool to enhance visibility and debugging of application errors using Cloudflare's infrastructure.

## Climate and Environmental Issues

* [Food and Fossil Fuel Production Causing $5 Billion of Environmental Damage an Hour](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examination of the environmental costs of food and energy production.

* [2025 Will Be World's Second or Third-Hottest Year on Record, EU Scientists Say](https://news.slashdot.org/story/25/12/09/1959225/2025-will-be-worlds-second-or-third-hottest-year-on-record-eu-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - EU scientists report record-breaking global temperatures as a climate crisis looms.

## Economic, Social, and Regulatory Developments

* [Netflix Faces Consumer Class Action Over $72 Billion Warner Bros Deal](https://yro.slashdot.org/story/25/12/09/2243222/netflix-faces-consumer-class-action-over-72-billion-warner-bros-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal challenges faced by Netflix regarding its Warner Bros acquisition.

* [Congress Quietly Strips Right-To-Repair Provisions From US Military Spending Bill](https://yro.slashdot.org/story/25/12/09/2123219/congress-quietly-strips-right-to-repair-provisions-from-us-military-spending-bill?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversial policy changes impacting the right-to-repair movement.

## Science and Health Advances

* [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&from=rss) - Research into cellular mechanisms with potential dual impact on cancer progression and treatment.

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

* [2025-12-10, 07:04:32](https://lobste.rs/s/h7a3xy/stop_breaking_tls) - [Stop Breaking TLS](https://www.markround.com/blog/2025/12/09/stop-breaking-tls/)
* [2025-12-10, 06:09:43](https://lobste.rs/s/bcz0ro/how_google_maps_quietly_allocates) - [How Google Maps quietly allocates survival across London’s restaurants - and how I built a dashboard to see through it](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 05:07:23](https://lobste.rs/s/ki1ihc/do_not_optimize_away) - [Do Not Optimize Away](https://matklad.github.io/2025/12/09/do-not-optimize-away.html)
* [2025-12-10, 04:29:30](https://news.ycombinator.com/item?id=46214091) - [Dependable C](https://dependablec.org/)
* [2025-12-10, 04:25:28](https://lobste.rs/s/otc3ak/rust_kernel_is_no_longer_experimental) - [Rust in the kernel is no longer experimental](https://lwn.net/Articles/1049831/)
* [2025-12-10, 03:33:14](https://news.ycombinator.com/item?id=46213709) - [&apos;Source available&apos; is not open source (and that&apos;s okay)](https://dri.es/source-available-is-not-open-source-and-that-is-okay)
* [2025-12-10, 03:30:00](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Food and Fossil Fuel Production Causing $5 Billion of Environmental Damage an Hour&apos;](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 03:15:24](https://news.ycombinator.com/item?id=46213585) - [The end of the kernel Rust experiment](https://lwn.net/Articles/1049831/)
* [2025-12-10, 02:18:07](https://news.ycombinator.com/item?id=46213273) - [Show all your application error using Cloudflare Error Page](https://github.com/donlon/cloudflare-error-page)
* [2025-12-10, 02:02:00](https://news.slashdot.org/story/25/12/09/2255209/openai-joins-the-linux-foundations-new-agentic-ai-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Joins the Linux Foundation&apos;s New Agentic AI Foundation](https://news.slashdot.org/story/25/12/09/2255209/openai-joins-the-linux-foundations-new-agentic-ai-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 01:25:00](https://news.ycombinator.com/item?id=46212969) - [Post-transformer inference: 224× compression of Llama-70B with improved accuracy](https://zenodo.org/records/17873275)
* [2025-12-10, 01:25:00](https://yro.slashdot.org/story/25/12/09/2243222/netflix-faces-consumer-class-action-over-72-billion-warner-bros-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Faces Consumer Class Action Over $72 Billion Warner Bros Deal](https://yro.slashdot.org/story/25/12/09/2243222/netflix-faces-consumer-class-action-over-72-billion-warner-bros-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-10, 00:45:00](https://yro.slashdot.org/story/25/12/09/2235240/ask-slashdot-what-are-the-best-locally-hosted-wireless-security-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: What Are the Best Locally-Hosted Wireless Security Cameras?](https://yro.slashdot.org/story/25/12/09/2235240/ask-slashdot-what-are-the-best-locally-hosted-wireless-security-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 00:41:26](https://lobste.rs/s/yddim2/fear_walking_zig_security_audit_gap) - [Fear of the Walking Zig: The Security Audit Gap](https://generativeai.pub/fear-of-the-walking-zig-the-security-audit-gap-707aec6ceb92)
* [2025-12-10, 00:02:00](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More People Crowdfunded Basic Needs In 2025, GoFundMe Report Shows](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 23:20:00](https://yro.slashdot.org/story/25/12/09/2123219/congress-quietly-strips-right-to-repair-provisions-from-us-military-spending-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Quietly Strips Right-To-Repair Provisions From US Military Spending Bill](https://yro.slashdot.org/story/25/12/09/2123219/congress-quietly-strips-right-to-repair-provisions-from-us-military-spending-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 22:54:33](https://news.ycombinator.com/item?id=46211861) - [OpenEvolve: Teaching LLMs to Discover Algorithms Through Evolution](https://algorithmicsuperintelligence.ai/blog/openevolve-overview/index.html)
* [2025-12-09, 22:47:36](https://news.ycombinator.com/item?id=46211802) - [Linux CVEs, more than you ever wanted to know](http://www.kroah.com/log/blog/2025/12/08/linux-cves-more-than-you-ever-wanted-to-know/)
* [2025-12-09, 22:40:00](https://tech.slashdot.org/story/25/12/09/2112230/millions-of-australian-teens-lose-access-to-social-media-as-ban-takes-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions of Australian Teens Lose Access To Social Media As Ban Takes Effect](https://tech.slashdot.org/story/25/12/09/2112230/millions-of-australian-teens-lose-access-to-social-media-as-ban-takes-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 22:02:00](https://apple.slashdot.org/story/25/12/09/2118205/apples-slow-ai-pace-becomes-a-strength-as-market-grows-weary-of-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Slow AI Pace Becomes a Strength As Market Grows Weary of Spending](https://apple.slashdot.org/story/25/12/09/2118205/apples-slow-ai-pace-becomes-a-strength-as-market-grows-weary-of-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 21:58:34](https://lobste.rs/s/33c6po/multiplying_our_way_out_division) - [Multiplying our way out of division](https://xania.org/202512/07-division-again)
* [2025-12-09, 21:22:00](https://news.slashdot.org/story/25/12/09/1959225/2025-will-be-worlds-second-or-third-hottest-year-on-record-eu-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Will Be World&apos;s Second or Third-Hottest Year on Record, EU Scientists Say](https://news.slashdot.org/story/25/12/09/1959225/2025-will-be-worlds-second-or-third-hottest-year-on-record-eu-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 21:19:37](https://news.ycombinator.com/item?id=46210806) - [Qt, Linux and everything: Debugging Qt WebAssembly](http://qtandeverything.blogspot.com/2025/12/debugging-qt-webassembly-dwarf.html)
* [2025-12-09, 20:41:00](https://it.slashdot.org/story/25/12/09/1953225/microsoft-365-prices-rising-for-businesses-and-governments-in-july-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Prices Rising For Businesses and Governments in July 2026](https://it.slashdot.org/story/25/12/09/1953225/microsoft-365-prices-rising-for-businesses-and-governments-in-july-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 20:33:14](https://news.ycombinator.com/item?id=46210240) - [Django: what’s new in 6.0](https://adamj.eu/tech/2025/12/03/django-whats-new-6.0/)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 20:01:00](https://slashdot.org/story/25/12/09/1941236/the-inevitable-shape-of-cheap-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Inevitable Shape of Cheap Online Retail](https://slashdot.org/story/25/12/09/1941236/the-inevitable-shape-of-cheap-online-retail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 20:00:39](https://news.ycombinator.com/item?id=46209846) - [Agentic AI Foundation](https://block.xyz/inside/block-anthropic-and-openai-launch-the-agentic-ai-foundation)
* [2025-12-09, 19:53:28](https://lobste.rs/s/8utaot/10_years_let_s_encrypt_certificates) - [10 Years of Let&apos;s Encrypt Certificates](https://letsencrypt.org/2025/12/09/10-years.html)
* [2025-12-09, 19:28:00](https://games.slashdot.org/story/25/12/09/1928240/how-pokemon-cards-became-a-stock-market-for-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Pokemon Cards Became a Stock Market For Millennials](https://games.slashdot.org/story/25/12/09/1928240/how-pokemon-cards-became-a-stock-market-for-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 19:15:09](https://lobste.rs/s/2o4yp6/my_favourite_small_hash_table) - [My favourite small hash table](https://www.corsix.org/content/my-favourite-small-hash-table)
* [2025-12-09, 18:54:55](https://news.ycombinator.com/item?id=46208962) - [10 Years of Let&apos;s Encrypt](https://letsencrypt.org/2025/12/09/10-years)
* [2025-12-09, 18:42:27](https://news.ycombinator.com/item?id=46208773) - [So you want to speak at software conferences?](https://dylanbeattie.net/2025/12/08/so-you-want-to-speak-at-software-conferences.html)
* [2025-12-09, 18:16:44](https://news.ycombinator.com/item?id=46208409) - [The stack circuitry of the Intel 8087 floating point chip, reverse-engineered](https://www.righto.com/2025/12/8087-stack-circuitry.html)
* [2025-12-09, 18:15:00](https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Invest $17.5 Billion in India](https://slashdot.org/story/25/12/09/1815211/microsoft-to-invest-175-billion-in-india?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 17:38:51](https://lobste.rs/s/lrnk2e/you_don_t_need_orm) - [You Don&apos;t Need an ORM](https://www.youtube.com/watch?v=XEJxk5VUSTs)
* [2025-12-09, 17:25:00](https://news.slashdot.org/story/25/12/09/173219/what-happens-when-an-infinite-money-machine-unravels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When an &apos;Infinite-Money Machine&apos; Unravels](https://news.slashdot.org/story/25/12/09/173219/what-happens-when-an-infinite-money-machine-unravels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 17:11:09](https://news.ycombinator.com/item?id=46207505) - [If you&apos;re going to vibe code, why not do it in C?](https://stephenramsay.net/posts/vibe-coding.html)
* [2025-12-09, 17:08:37](https://news.ycombinator.com/item?id=46207464) - [PeerTube is recognized as a digital public good by Digital Public Goods Alliance](https://www.digitalpublicgoods.net/r/peertube)
* [2025-12-09, 17:05:42](https://news.ycombinator.com/item?id=46207425) - [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
* [2025-12-09, 16:50:00](https://games.slashdot.org/story/25/12/09/1630206/xbox-is-bleeding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Is Bleeding Out](https://games.slashdot.org/story/25/12/09/1630206/xbox-is-bleeding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 16:36:07](https://lobste.rs/s/nrjotv/why_i_think_jj_vcs_is_worth_your_time) - [why i think jj-vcs is worth your time](https://schpet.com/note/why-i-think-jj-vcs-is-worth-your-time)
* [2025-12-09, 16:28:58](https://lobste.rs/s/y5vgj7/international_workshop_on_plan_9_2026) - [International Workshop on Plan 9: 2026 Edition](https://iwp9.org)
* [2025-12-09, 16:06:58](https://news.ycombinator.com/item?id=46206531) - [Handsdown one of the coolest 3D websites](https://bruno-simon.com/)
* [2025-12-09, 15:51:32](https://news.ycombinator.com/item?id=46206277) - [A supersonic engine core makes the perfect power turbine](https://boomsupersonic.com/flyby/ai-needs-more-power-than-the-grid-can-deliver-supersonic-tech-can-fix-that)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 15:29:26](https://lobste.rs/s/hekuyc/css_wrapped_2025) - [CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)
* [2025-12-09, 15:08:24](https://news.ycombinator.com/item?id=46205724) - [Apple&apos;s slow AI pace becomes a strength as market grows weary of spending](https://finance.yahoo.com/news/apple-slow-ai-pace-becomes-104658095.html)
* [2025-12-09, 15:03:09](https://news.ycombinator.com/item?id=46205661) - [Pebble Index 01 – External memory for your brain](https://repebble.com/blog/meet-pebble-index-01-external-memory-for-your-brain)
* [2025-12-09, 15:00:38](https://news.ycombinator.com/item?id=46205632) - [Show HN: Gemini Pro 3 hallucinates the HN front page 10 years from now](https://dosaygo-studio.github.io/hn-front-page-2035/news)
* [2025-12-09, 14:59:01](https://lobste.rs/s/iyycuu/fighting_client_spaghetti_monster_with) - [Fighting the Client Spaghetti Monster with Rust Traits](http://www.gnunicorn.org/writings/spaghetti-monster-clients-rust-traits-final-boss/)
* [2025-12-09, 14:52:54](https://lobste.rs/s/gzom84/zig_asserts_are_not_c_asserts) - [Zig asserts are not C asserts](https://cryptocode.github.io/blog/docs/assert/)
* [2025-12-09, 14:51:46](https://news.ycombinator.com/item?id=46205519) - [Kaiju – General purpose 3D/2D game engine in Go and Vulkan with built in editor](https://github.com/KaijuEngine/kaiju)
* [2025-12-09, 14:47:57](https://lobste.rs/s/mvwzes/linux_kernel_version_numbers) - [Linux kernel version numbers](http://www.kroah.com/log/blog/2025/12/09/linux-kernel-version-numbers/)
* [2025-12-09, 14:45:01](https://news.ycombinator.com/item?id=46205437) - [Mistral releases Devstral2 and Mistral Vibe CLI](https://mistral.ai/news/devstral-2-vibe-cli)
* [2025-12-09, 13:14:50](https://lobste.rs/s/ekj7q2/world_needs_social_sovereignty) - [The world needs social sovereignty](https://blog.joinmastodon.org/2025/12/the-world-needs-social-sovereignty/)
* [2025-12-09, 12:37:15](https://lobste.rs/s/j92yom/go_proposal_secret_mode) - [Go proposal: Secret mode](https://antonz.org/accepted/runtime-secret/)
* [2025-12-09, 12:29:20](https://lobste.rs/s/qr32px/no_aria_is_better_than_bad_aria) - [No ARIA is better than Bad ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
* [2025-12-09, 11:15:34](https://lobste.rs/s/j1epfi/join_on_call_roster_it_ll_change_your_life) - [Join the on-call roster, it’ll change your life](https://serce.me/posts/2025-12-09-join-oncall-it-will-change-your-life)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 09:26:20](https://lobste.rs/s/wft20h/factor_0_101_now_available) - [Factor 0.101 now available](https://re.factorcode.org/2025/12/factor-0-101-now-available.html)
* [2025-12-09, 09:13:56](https://news.ycombinator.com/item?id=46202921) - [30 Year Anniversary of WarCraft II: Tides of Darkness](https://www.jorsys.org/archive/december_2025.html#newsitem_2025-12-09T07:42:19Z)
* [2025-12-09, 09:01:28](https://lobste.rs/s/ztpekx/39c3_fahrplan_2025) - [39C3 Fahrplan 2025](https://fahrplan.events.ccc.de/congress/2025/fahrplan/)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 03:12:55](https://lobste.rs/s/yp9mou/metacode_new_standard_for_machine) - [Metacode: The new standard for machine-readable comments for Python](https://github.com/pomponchik/metacode)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-08, 23:17:16](https://lobste.rs/s/zsgdbg/prediction_ai_will_make_formal) - [Prediction: AI will make formal verification go mainstream](https://martin.kleppmann.com/2025/12/08/ai-formal-verification.html)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 19:01:01](https://lobste.rs/s/q2gai0/jepsen_nats_2_12_1) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 15:01:42](https://lobste.rs/s/qrepmu/icons_menus_everywhere_send_help) - [Icons in Menus Everywhere — Send Help](https://blog.jim-nielsen.com/2025/icons-in-menus/)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
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
* [2025-12-06, 09:13:02](https://news.ycombinator.com/item?id=46171844) - [Distributed ID Formats Are Architectural Commitments, Not Just Data Types](https://piljoong.dev/posts/distributed-id-generation-complicated/)
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-06, 01:08:04](https://news.ycombinator.com/item?id=46169508) - [Are We over the \&quot;Jaws Effect?\&quot;](https://nautil.us/are-we-finally-over-the-jaws-effect-1253001/)
