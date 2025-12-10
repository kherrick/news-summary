# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Fragile Lock: Novel Bypasses For SAML Authentication](https://portswigger.net/research/the-fragile-lock) - Cutting-edge exploration of critical vulnerabilities in SAML authentication with advanced bypass techniques. [Comments](https://lobste.rs/s/ermqvc/fragile_lock_novel_bypasses_for_saml)

* [Nvidia Builds Location Verification Tech That Could Track Where Its AI Chips End Up](https://tech.slashdot.org/story/25/12/10/1448224/nvidia-builds-location-verification-tech-that-could-track-where-its-ai-chips-end-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia unveils technology for monitoring AI chip distribution. [Comments](https://tech.slashdot.org/story/25/12/10/1448224/nvidia-builds-location-verification-tech-that-could-track-where-its-ai-chips-end-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [RoboCrop: Teaching Robots How To Pick Tomatoes](https://hardware.slashdot.org/story/25/12/09/2323241/robocrop-teaching-robots-how-to-pick-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Robots are being trained to revolutionize agricultural efficiency. [Comments](https://hardware.slashdot.org/story/25/12/09/2323241/robocrop-teaching-robots-how-to-pick-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Climate and Environment

* [In New York City, Congestion Pricing Leads to Marked Drop in Pollution](https://e360.yale.edu/digest/new-york-congestion-pricing-pollution) - Insight into urban environmental recovery through innovative traffic policies. [Comments](https://news.ycombinator.com/item?id=46218725)

* [Food and Fossil Fuel Production Causing $5 Billion of Environmental Damage an Hour](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Alarming data on environmental costs tied to essential industries. [Comments](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Medicine

* [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - A bold initiative to secure sustainable energy sources. [Comments](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)

* [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - Groundbreaking progress in cancer treatment research. [Comments](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)

## Software and Development

* [Rust in the kernel is no longer experimental](https://lwn.net/Articles/1049831/) - Major milestone for adoption of the Rust programming language in kernel code. [Comments](https://lobste.rs/s/otc3ak/rust_kernel_is_no_longer_experimental)

* [Memory leak regression testing with V8/Node.js](https://joyeecheung.github.io/blog/2024/03/17/memory-leak-testing-v8-node-js-1/) - Advanced techniques for identifying memory leaks in web technologies. [Comments](https://lobste.rs/s/4bzvsk/memory_leak_regression_testing_with_v8)

* [Common Lisp, ASDF, and Quicklisp: packaging explained](http://cdegroot.com/programming/commonlisp/2025/11/26/cl-ql-asdf.html) - Comprehensive breakdown of packaging concepts for Common Lisp. [Comments](https://lobste.rs/s/gb6ppu/common_lisp_asdf_quicklisp_packaging)

## Social and Cultural Trends

* [How to Leave the USA](https://www.newyorker.com/magazine/2025/12/15/how-to-leave-the-usa) - Exploration of what drives Americans to seek life abroad. [Comments](https://news.ycombinator.com/item?id=46219011)

* [More People Crowdfunded Basic Needs In 2025, GoFundMe Report Shows](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into the rising use of crowdfunding to address societal gaps. [Comments](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-12-10, 15:43:43](https://news.ycombinator.com/item?id=46219011) - [How to Leave the USA](https://www.newyorker.com/magazine/2025/12/15/how-to-leave-the-usa)
* [2025-12-10, 15:37:33](https://lobste.rs/s/ermqvc/fragile_lock_novel_bypasses_for_saml) - [The Fragile Lock: Novel Bypasses For SAML Authentication](https://portswigger.net/research/the-fragile-lock)
* [2025-12-10, 15:25:05](https://news.ycombinator.com/item?id=46218725) - [In New York City, Congestion Pricing Leads to Marked Drop in Pollution](https://e360.yale.edu/digest/new-york-congestion-pricing-pollution)
* [2025-12-10, 15:25:00](https://slashdot.org/story/25/12/10/1513248/same-product-same-store-but-on-instacart-prices-might-differ?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Same Product, Same Store, but on Instacart, Prices Might Differ](https://slashdot.org/story/25/12/10/1513248/same-product-same-store-but-on-instacart-prices-might-differ?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 14:48:00](https://tech.slashdot.org/story/25/12/10/1448224/nvidia-builds-location-verification-tech-that-could-track-where-its-ai-chips-end-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Builds Location Verification Tech That Could Track Where Its AI Chips End Up](https://tech.slashdot.org/story/25/12/10/1448224/nvidia-builds-location-verification-tech-that-could-track-where-its-ai-chips-end-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 14:39:05](https://news.ycombinator.com/item?id=46218202) - [The New Kindle Scribes Are Great, but Not Great Enough](https://www.wired.com/review/kindle-scribe-colorsoft-2025/)
* [2025-12-10, 14:07:56](https://lobste.rs/s/wvgp5t/rfc_9180_hybrid_public_key_encryption) - [RFC 9180 Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180.html)
* [2025-12-10, 14:00:00](https://slashdot.org/story/25/12/10/137237/ai-slop-ad-backfires-for-mcdonalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Slop Ad Backfires For McDonald&apos;s](https://slashdot.org/story/25/12/10/137237/ai-slop-ad-backfires-for-mcdonalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 13:57:11](https://lobste.rs/s/hmecxz/gin_is_very_bad_software_library) - [Gin is a very bad software library](https://eblog.fly.dev/ginbad.html)
* [2025-12-10, 13:00:00](https://yro.slashdot.org/story/25/12/10/0059236/rubio-orders-diplomats-to-return-to-using-times-new-roman-font?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rubio Orders Diplomats To Return To Using Times New Roman Font](https://yro.slashdot.org/story/25/12/10/0059236/rubio-orders-diplomats-to-return-to-using-times-new-roman-font?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 11:51:11](https://lobste.rs/s/xzvepw/get_line_superfast_spsc_queue) - [Get in Line - superfast SPSC Queue](https://abhikja.in/blog/2025-12-07-get-in-line/)
* [2025-12-10, 11:29:01](https://lobste.rs/s/4bzvsk/memory_leak_regression_testing_with_v8) - [Memory leak regression testing with V8/Node.js](https://joyeecheung.github.io/blog/2024/03/17/memory-leak-testing-v8-node-js-1/)
* [2025-12-10, 11:08:47](https://lobste.rs/s/gb6ppu/common_lisp_asdf_quicklisp_packaging) - [Common Lisp, ASDF, and Quicklisp: packaging explained](http://cdegroot.com/programming/commonlisp/2025/11/26/cl-ql-asdf.html)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 10:00:00](https://hardware.slashdot.org/story/25/12/09/2323241/robocrop-teaching-robots-how-to-pick-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RoboCrop: Teaching Robots How To Pick Tomatoes](https://hardware.slashdot.org/story/25/12/09/2323241/robocrop-teaching-robots-how-to-pick-tomatoes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 09:42:24](https://lobste.rs/s/yrillw/revisiting_let_s_build_compiler) - [Revisiting \&quot;Let&apos;s Build a Compiler\&quot;](https://eli.thegreenplace.net/2025/revisiting-lets-build-a-compiler/)
* [2025-12-10, 08:53:54](https://lobste.rs/s/po97lh/new_tag_suggestion_genai_assisted) - [New tag suggestion: \&quot;genai-assisted\&quot;](https://lobste.rs/s/po97lh/new_tag_suggestion_genai_assisted)
* [2025-12-10, 07:04:32](https://lobste.rs/s/h7a3xy/stop_breaking_tls) - [Stop Breaking TLS](https://www.markround.com/blog/2025/12/09/stop-breaking-tls/)
* [2025-12-10, 07:00:00](https://science.slashdot.org/story/25/12/09/2318208/in-a-major-new-report-scientists-build-rationale-for-sending-astronauts-to-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a Major New Report, Scientists Build Rationale For Sending Astronauts To Mars](https://science.slashdot.org/story/25/12/09/2318208/in-a-major-new-report-scientists-build-rationale-for-sending-astronauts-to-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 06:22:19](https://news.ycombinator.com/item?id=46214693) - [Revisiting \&quot;Let&apos;s Build a Compiler\&quot;](https://eli.thegreenplace.net/2025/revisiting-lets-build-a-compiler/)
* [2025-12-10, 06:09:43](https://lobste.rs/s/bcz0ro/how_google_maps_quietly_allocates) - [How Google Maps quietly allocates survival across London’s restaurants - and how I built a dashboard to see through it](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 05:07:23](https://lobste.rs/s/ki1ihc/do_not_optimize_away) - [Do Not Optimize Away](https://matklad.github.io/2025/12/09/do-not-optimize-away.html)
* [2025-12-10, 04:25:28](https://lobste.rs/s/otc3ak/rust_kernel_is_no_longer_experimental) - [Rust in the kernel is no longer experimental](https://lwn.net/Articles/1049831/)
* [2025-12-10, 03:30:00](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Food and Fossil Fuel Production Causing $5 Billion of Environmental Damage an Hour&apos;](https://news.slashdot.org/story/25/12/09/2311256/food-and-fossil-fuel-production-causing-5-billion-of-environmental-damage-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 03:15:24](https://news.ycombinator.com/item?id=46213585) - [Rust in the kernel is no longer experimental](https://lwn.net/Articles/1049831/)
* [2025-12-10, 02:18:07](https://news.ycombinator.com/item?id=46213273) - [Cloudflare error page generator](https://github.com/donlon/cloudflare-error-page)
* [2025-12-10, 02:02:00](https://news.slashdot.org/story/25/12/09/2255209/openai-joins-the-linux-foundations-new-agentic-ai-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Joins the Linux Foundation&apos;s New Agentic AI Foundation](https://news.slashdot.org/story/25/12/09/2255209/openai-joins-the-linux-foundations-new-agentic-ai-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 01:25:00](https://yro.slashdot.org/story/25/12/09/2243222/netflix-faces-consumer-class-action-over-72-billion-warner-bros-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Faces Consumer Class Action Over $72 Billion Warner Bros Deal](https://yro.slashdot.org/story/25/12/09/2243222/netflix-faces-consumer-class-action-over-72-billion-warner-bros-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-10, 00:45:00](https://yro.slashdot.org/story/25/12/09/2235240/ask-slashdot-what-are-the-best-locally-hosted-wireless-security-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot: What Are the Best Locally-Hosted Wireless Security Cameras?](https://yro.slashdot.org/story/25/12/09/2235240/ask-slashdot-what-are-the-best-locally-hosted-wireless-security-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 00:02:00](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More People Crowdfunded Basic Needs In 2025, GoFundMe Report Shows](https://news.slashdot.org/story/25/12/09/2130256/more-people-crowdfunded-basic-needs-in-2025-gofundme-report-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 23:20:00](https://yro.slashdot.org/story/25/12/09/2123219/congress-quietly-strips-right-to-repair-provisions-from-us-military-spending-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Quietly Strips Right-To-Repair Provisions From US Military Spending Bill](https://yro.slashdot.org/story/25/12/09/2123219/congress-quietly-strips-right-to-repair-provisions-from-us-military-spending-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 22:47:36](https://news.ycombinator.com/item?id=46211802) - [Linux CVEs, more than you ever wanted to know](http://www.kroah.com/log/blog/2025/12/08/linux-cves-more-than-you-ever-wanted-to-know/)
* [2025-12-09, 22:40:00](https://tech.slashdot.org/story/25/12/09/2112230/millions-of-australian-teens-lose-access-to-social-media-as-ban-takes-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions of Australian Teens Lose Access To Social Media As Ban Takes Effect](https://tech.slashdot.org/story/25/12/09/2112230/millions-of-australian-teens-lose-access-to-social-media-as-ban-takes-effect?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 22:02:00](https://apple.slashdot.org/story/25/12/09/2118205/apples-slow-ai-pace-becomes-a-strength-as-market-grows-weary-of-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Slow AI Pace Becomes a Strength As Market Grows Weary of Spending](https://apple.slashdot.org/story/25/12/09/2118205/apples-slow-ai-pace-becomes-a-strength-as-market-grows-weary-of-spending?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 21:58:34](https://lobste.rs/s/33c6po/multiplying_our_way_out_division) - [Multiplying our way out of division](https://xania.org/202512/07-division-again)
* [2025-12-09, 21:22:00](https://news.slashdot.org/story/25/12/09/1959225/2025-will-be-worlds-second-or-third-hottest-year-on-record-eu-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2025 Will Be World&apos;s Second or Third-Hottest Year on Record, EU Scientists Say](https://news.slashdot.org/story/25/12/09/1959225/2025-will-be-worlds-second-or-third-hottest-year-on-record-eu-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-09, 20:33:14](https://news.ycombinator.com/item?id=46210240) - [Django: what’s new in 6.0](https://adamj.eu/tech/2025/12/03/django-whats-new-6.0/)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 19:53:28](https://lobste.rs/s/8utaot/10_years_let_s_encrypt_certificates) - [10 Years of Let&apos;s Encrypt Certificates](https://letsencrypt.org/2025/12/09/10-years.html)
* [2025-12-09, 19:15:09](https://lobste.rs/s/2o4yp6/my_favourite_small_hash_table) - [My favourite small hash table](https://www.corsix.org/content/my-favourite-small-hash-table)
* [2025-12-09, 18:54:55](https://news.ycombinator.com/item?id=46208962) - [10 Years of Let&apos;s Encrypt](https://letsencrypt.org/2025/12/09/10-years)
* [2025-12-09, 18:42:27](https://news.ycombinator.com/item?id=46208773) - [So you want to speak at software conferences?](https://dylanbeattie.net/2025/12/08/so-you-want-to-speak-at-software-conferences.html)
* [2025-12-09, 18:16:44](https://news.ycombinator.com/item?id=46208409) - [The stack circuitry of the Intel 8087 floating point chip, reverse-engineered](https://www.righto.com/2025/12/8087-stack-circuitry.html)
* [2025-12-09, 17:38:51](https://lobste.rs/s/lrnk2e/you_don_t_need_orm) - [You Don&apos;t Need an ORM](https://www.youtube.com/watch?v=XEJxk5VUSTs)
* [2025-12-09, 17:11:09](https://news.ycombinator.com/item?id=46207505) - [If you&apos;re going to vibe code, why not do it in C?](https://stephenramsay.net/posts/vibe-coding.html)
* [2025-12-09, 17:08:37](https://news.ycombinator.com/item?id=46207464) - [PeerTube is recognized as a digital public good by Digital Public Goods Alliance](https://www.digitalpublicgoods.net/r/peertube)
* [2025-12-09, 17:05:42](https://news.ycombinator.com/item?id=46207425) - [Donating the Model Context Protocol and establishing the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)
* [2025-12-09, 16:36:07](https://lobste.rs/s/nrjotv/why_i_think_jj_vcs_is_worth_your_time) - [why i think jj-vcs is worth your time](https://schpet.com/note/why-i-think-jj-vcs-is-worth-your-time)
* [2025-12-09, 16:06:58](https://news.ycombinator.com/item?id=46206531) - [Bruno Simon – 3D Portfolio](https://bruno-simon.com/)
* [2025-12-09, 15:51:32](https://news.ycombinator.com/item?id=46206277) - [A supersonic engine core makes the perfect power turbine](https://boomsupersonic.com/flyby/ai-needs-more-power-than-the-grid-can-deliver-supersonic-tech-can-fix-that)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 15:29:26](https://lobste.rs/s/hekuyc/css_wrapped_2025) - [CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)
* [2025-12-09, 15:03:09](https://news.ycombinator.com/item?id=46205661) - [Pebble Index 01 – External memory for your brain](https://repebble.com/blog/meet-pebble-index-01-external-memory-for-your-brain)
* [2025-12-09, 15:00:38](https://news.ycombinator.com/item?id=46205632) - [Show HN: Gemini Pro 3 hallucinates the HN front page 10 years from now](https://dosaygo-studio.github.io/hn-front-page-2035/news)
* [2025-12-09, 14:52:54](https://lobste.rs/s/gzom84/zig_asserts_are_not_c_asserts) - [Zig asserts are not C asserts](https://cryptocode.github.io/blog/docs/assert/)
* [2025-12-09, 14:51:46](https://news.ycombinator.com/item?id=46205519) - [Kaiju – General purpose 3D/2D game engine in Go and Vulkan with built in editor](https://github.com/KaijuEngine/kaiju)
* [2025-12-09, 14:47:57](https://lobste.rs/s/mvwzes/linux_kernel_version_numbers) - [Linux kernel version numbers](http://www.kroah.com/log/blog/2025/12/09/linux-kernel-version-numbers/)
* [2025-12-09, 14:45:01](https://news.ycombinator.com/item?id=46205437) - [Mistral releases Devstral2 and Mistral Vibe CLI](https://mistral.ai/news/devstral-2-vibe-cli)
* [2025-12-09, 13:14:50](https://lobste.rs/s/ekj7q2/world_needs_social_sovereignty) - [The world needs social sovereignty](https://blog.joinmastodon.org/2025/12/the-world-needs-social-sovereignty/)
* [2025-12-09, 12:37:15](https://lobste.rs/s/j92yom/go_proposal_secret_mode) - [Go proposal: Secret mode](https://antonz.org/accepted/runtime-secret/)
* [2025-12-09, 11:15:34](https://lobste.rs/s/j1epfi/join_on_call_roster_it_ll_change_your_life) - [Join the on-call roster, it’ll change your life](https://serce.me/posts/2025-12-09-join-oncall-it-will-change-your-life)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 09:26:20](https://lobste.rs/s/wft20h/factor_0_101_now_available) - [Factor 0.101 now available](https://re.factorcode.org/2025/12/factor-0-101-now-available.html)
* [2025-12-09, 09:13:56](https://news.ycombinator.com/item?id=46202921) - [30 Year Anniversary of WarCraft II: Tides of Darkness](https://www.jorsys.org/archive/december_2025.html#newsitem_2025-12-09T07:42:19Z)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 19:01:01](https://lobste.rs/s/q2gai0/jepsen_nats_2_12_1) - [Jepsen: NATS 2.12.1](https://jepsen.io/analyses/nats-2.12.1)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
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
* [2025-12-06, 06:53:00](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss) - [After Nearly 30 Years, Crucial Will Stop Selling RAM to Consumers](https://soylentnews.org/article.pl?sid=25/12/04/1134226&amp;from=rss)
* [2025-12-06, 05:36:48](https://news.ycombinator.com/item?id=46171008) - [Amazon EC2 M9g Instances](https://aws.amazon.com/ec2/instance-types/m9g/)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
