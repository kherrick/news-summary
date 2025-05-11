# [News Summary](https://kherrick.github.io/news-summary/)

## Cutting-Edge Technology and Software

* [The Amoeba Microkernel](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=755d25b6b7d2057206e46e91162e15ffc06bae73) - A deep dive into the Amoeba Microkernel and its architectural design. [Comments](https://lobste.rs/s/lokpxj/amoeba_microkernel)

* [Show HN: GlassFlow – OSS streaming dedup and joins from Kafka to ClickHouse](https://github.com/glassflow/clickhouse-etl) - An open source tool optimizing data pipelines handling deduplication and joins. [Comments](https://news.ycombinator.com/item?id=43953722)

* [The caching behind Elm's Html.Lazy](https://jfmengels.net/caching-behind-elm-lazy) - A thorough examination of caching mechanisms in Elm's lazy HTML rendering. [Comments](https://lobste.rs/s/w7s0io/caching_behind_elm_s_html_lazy)

* [Impressions on the new 13 inch Framework laptop](https://marius.federated.id/posts/2025/may/framework) - A detailed review of the modular Framework laptop, evaluating its flexibility and performance. [Comments](https://lobste.rs/s/kltfhx/impressions_on_new_13_inch_framework)

## Security and Cyber Threats

* [Chinese Hackers Exploit SAP NetWeaver RCE Flaw](https://it.slashdot.org/story/25/05/11/0544252/chinese-hackers-exploit-sap-netweaver-rce-flaw?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critical SAP NetWeaver vulnerability being exploited by Chinese hackers. [Comments](https://it.slashdot.org/story/25/05/11/0544252/chinese-hackers-exploit-sap-netweaver-rce-flaw?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [One-click RCE in ASUS’s preinstalled driver software](https://mrbruh.com/asusdriverhub/) - Investigating a remote code execution vulnerability in ASUS's driver software. [Comments](https://lobste.rs/s/extsy5/one_click_rce_asus_s_preinstalled_driver)

* [DNS Piracy Blocking Orders: Google, Cloudflare, and OpenDNS Respond Differently](https://torrentfreak.com/dns-piracy-blocking-orders-google-cloudflare-and-opendns-respond-differently-250511/) - A look at how major DNS providers react differently to piracy blocking orders. [Comments](https://news.ycombinator.com/item?id=43954459)

## Artificial Intelligence and Programming

* [What Happens If AI Coding Keeps Improving?](https://developers.slashdot.org/story/25/05/11/0623242/what-happens-if-ai-coding-keeps-improving?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A forward-looking piece on the implications of rapidly advancing AI coding tools. [Comments](https://developers.slashdot.org/story/25/05/11/0623242/what-happens-if-ai-coding-keeps-improving?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Writing an LLM from scratch, part 13 – attention heads are dumb](https://www.gilesthomas.com/2025/05/llm-from-scratch-13-taking-stock-part-1-attention-heads-are-dumb) - Exploring the nuances of training large language models and rethinking attention mechanisms. [Comments](https://news.ycombinator.com/item?id=43931366)

## Science and Discoveries

* [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&from=rss) - Research suggesting how environmental adaptations gave early humans an edge. [Comments](https://soylentnews.org/article.pl?sid=25/05/09/1729255&from=rss)

* [Title of work deciphered in sealed Herculaneum scroll via digital unwrapping](https://www.finebooksmagazine.com/fine-books-news/title-work-deciphered-sealed-herculaneum-scroll-digital-unwrapping) - Advanced digital unwrapping techniques applied to ancient scrolls. [Comments](https://news.ycombinator.com/item?id=43953883)

## Industry Trends and Corporate Shifts

* [Car Companies Are in a Billion-Dollar Software War, and Everyone's Losing](https://insideevs.com/features/759153/car-companies-software-companies/) - How the auto industry's software battle is costing everyone. [Comments](https://news.ycombinator.com/item?id=43955525)

* [Klarna changes its AI tune and again recruits humans for customer service](https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/) - Klarna pivots back to human customer support in a surprise strategic shift. [Comments](https://news.ycombinator.com/item?id=43955374)

## Historical and Cultural Insights

* [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&from=rss) - A humorous yet scholarly look at peculiar medieval artwork trends. [Comments](https://soylentnews.org/article.pl?sid=25/05/10/0134211&from=rss)

* [Gonzalo Guerrero](https://en.wikipedia.org/wiki/Gonzalo_Guerrero) - The fascinating story of a Spaniard who embraced Mayan culture. [Comments](https://news.ycombinator.com/item?id=43954249)

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

* [2025-05-11, 18:27:45](https://lobste.rs/s/lokpxj/amoeba_microkernel) - [The Amoeba Microkernel](https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=755d25b6b7d2057206e46e91162e15ffc06bae73)
* [2025-05-11, 18:01:00](https://developers.slashdot.org/story/25/05/11/1759213/who-needs-rusts-borrow-checking-compiler-nanny-c-devs-arent-helpless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Who Needs Rust&apos;s Borrow-Checking Compiler Nanny?  C++ Devs Aren&apos;t Helpless&apos;](https://developers.slashdot.org/story/25/05/11/1759213/who-needs-rusts-borrow-checking-compiler-nanny-c-devs-arent-helpless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 17:51:04](https://news.ycombinator.com/item?id=43955525) - [Car Companies Are in a Billion-Dollar Software War, and Everyone&apos;s Losing](https://insideevs.com/features/759153/car-companies-software-companies/)
* [2025-05-11, 17:35:22](https://news.ycombinator.com/item?id=43955374) - [Klarna changes its AI tune and again recruits humans for customer service](https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/)
* [2025-05-11, 17:28:32](https://news.ycombinator.com/item?id=43955326) - [Applications of Classical Physics](http://pmaweb.caltech.edu/Courses/ph136/yr2012/)
* [2025-05-11, 17:02:21](https://lobste.rs/s/omkgou/software_license_management_with_polar) - [Software License Management with Polar.sh](https://www.skatkov.com/posts/2025-05-11-software-license-management-for-dummies)
* [2025-05-11, 17:00:00](https://news.ycombinator.com/item?id=43955106) - [Synder (YC S21) Is Hiring](https://www.ycombinator.com/companies/synder/jobs/2Wnbc1f-business-development-representative)
* [2025-05-11, 16:52:27](https://lobste.rs/s/kltfhx/impressions_on_new_13_inch_framework) - [Impressions on the new 13 inch Framework laptop](https://marius.federated.id/posts/2025/may/framework)
* [2025-05-11, 16:34:00](https://it.slashdot.org/story/25/05/11/0544252/chinese-hackers-exploit-sap-netweaver-rce-flaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Hackers Exploit SAP NetWeaver RCE Flaw](https://it.slashdot.org/story/25/05/11/0544252/chinese-hackers-exploit-sap-netweaver-rce-flaw?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 16:31:58](https://news.ycombinator.com/item?id=43954896) - [Plain Vanilla Web – Guide for de-frameworking yourself](https://plainvanillaweb.com/index.html)
* [2025-05-11, 16:22:05](https://news.ycombinator.com/item?id=43954810) - [An $18M grant would have drastically reduced food waste. Then the EPA cut it](https://grist.org/food-and-agriculture/trump-epa-community-change-grants-program-food-waste/)
* [2025-05-11, 15:58:00](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss) - [The Bayeux Penis Count](https://soylentnews.org/article.pl?sid=25/05/10/0134211&amp;from=rss)
* [2025-05-11, 15:57:39](https://news.ycombinator.com/item?id=43954649) - [I built a native Windows Todo app in pure C (278 KB, no frameworks)](https://github.com/Efeckc17/simple-todo-c)
* [2025-05-11, 15:43:30](https://lobste.rs/s/nkikdh/super_8086_box_pc_xt_emulator_with_adlib) - [Super 8086 Box, PC XT emulator with Adlib, MPU-401, joystick and NE2000 support](https://www.toughdev.com/content/2023/08/super-8086-box-my-home-built-pc-xt-emulator-with-adlib-mpu-401-joystick-and-ne2000-support/)
* [2025-05-11, 15:34:00](https://developers.slashdot.org/story/25/05/11/0623242/what-happens-if-ai-coding-keeps-improving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens If AI Coding Keeps Improving?](https://developers.slashdot.org/story/25/05/11/0623242/what-happens-if-ai-coding-keeps-improving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 15:26:47](https://news.ycombinator.com/item?id=43954459) - [DNS Piracy Blocking Orders: Google, Cloudflare, and OpenDNS Respond Differently](https://torrentfreak.com/dns-piracy-blocking-orders-google-cloudflare-and-opendns-respond-differently-250511/)
* [2025-05-11, 15:16:11](https://lobste.rs/s/ldtzsg/review_documentation_rust_ecosystem) - [A review of documentation in the Rust ecosystem](https://www.harudagondi.space/blog/rust-documentation-ecosystem-review/)
* [2025-05-11, 14:54:56](https://news.ycombinator.com/item?id=43954249) - [Gonzalo Guerrero](https://en.wikipedia.org/wiki/Gonzalo_Guerrero)
* [2025-05-11, 14:43:09](https://news.ycombinator.com/item?id=43954178) - [JEP 515: Ahead-of-Time Method Profiling](https://openjdk.org/jeps/515)
* [2025-05-11, 14:34:00](https://it.slashdot.org/story/25/05/11/0027236/can-an-mcp-powered-ai-client-automatically-hack-a-web-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can an MCP-Powered AI Client Automatically Hack a Web Server?](https://it.slashdot.org/story/25/05/11/0027236/can-an-mcp-powered-ai-client-automatically-hack-a-web-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 14:26:49](https://news.ycombinator.com/item?id=43954054) - [Booting the RP2350 from UART](https://pfister.dev/blog/2025/rp2350-uart-bl.html)
* [2025-05-11, 14:02:03](https://news.ycombinator.com/item?id=43953883) - [Title of work deciphered in sealed Herculaneum scroll via digital unwrapping](https://www.finebooksmagazine.com/fine-books-news/title-work-deciphered-sealed-herculaneum-scroll-digital-unwrapping)
* [2025-05-11, 13:37:37](https://lobste.rs/s/myrlhi/how_cursor_indexes_codebases_fast) - [How Cursor Indexes Codebases Fast](https://read.engineerscodex.com/p/how-cursor-indexes-codebases-fast)
* [2025-05-11, 13:33:54](https://news.ycombinator.com/item?id=43953722) - [Show HN: GlassFlow – OSS streaming dedup and joins from Kafka to ClickHouse](https://github.com/glassflow/clickhouse-etl)
* [2025-05-11, 12:08:24](https://news.ycombinator.com/item?id=43953229) - [A Rust Documentation Ecosystem Review](https://www.harudagondi.space/blog/rust-documentation-ecosystem-review/)
* [2025-05-11, 11:34:00](https://games.slashdot.org/story/25/05/11/0351246/nintendo-can-render-your-switch-2-permanently-unusable-if-you-break-their-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Can Render Your Switch 2 &apos;Permanently Unusable&apos; If You Break Their Rules](https://games.slashdot.org/story/25/05/11/0351246/nintendo-can-render-your-switch-2-permanently-unusable-if-you-break-their-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 11:16:52](https://lobste.rs/s/extsy5/one_click_rce_asus_s_preinstalled_driver) - [One-click RCE in ASUS’s preinstalled driver software](https://mrbruh.com/asusdriverhub/)
* [2025-05-11, 11:11:00](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss) - [Curl Project Founder Snaps over Deluge of Time-Sucking AI Slop Bug Reports](https://soylentnews.org/article.pl?sid=25/05/10/0031230&amp;from=rss)
* [2025-05-11, 10:08:53](https://news.ycombinator.com/item?id=43952714) - [The Epochalypse Project](https://epochalypse-project.org/)
* [2025-05-11, 08:40:45](https://lobste.rs/s/w7s0io/caching_behind_elm_s_html_lazy) - [The caching behind Elm&apos;s Html.Lazy](https://jfmengels.net/caching-behind-elm-lazy)
* [2025-05-11, 08:10:38](https://news.ycombinator.com/item?id=43952239) - [Build iOS Apps on Linux and Windows (WSL)](https://forums.swift.org/t/xtool-cross-platform-xcode-replacement-build-ios-apps-on-linux-and-more/79803)
* [2025-05-11, 08:05:44](https://lobste.rs/s/ol4ggm/private_internet_2024) - [Private Internet (2024)](https://kevincox.ca/2024/08/16/private-internet/)
* [2025-05-11, 07:35:00](https://yro.slashdot.org/story/25/05/11/0451222/cisadoge-software-engineers-login-credentials-appeared-in-multiple-leaks-from-info-stealing-malware-in-recent-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA/DOGE Software Engineer&apos;s Login Credentials Appeared in Multiple Leaks From Info-Stealing Malware in Recent Years](https://yro.slashdot.org/story/25/05/11/0451222/cisadoge-software-engineers-login-credentials-appeared-in-multiple-leaks-from-info-stealing-malware-in-recent-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 07:01:50](https://lobste.rs/s/u9hyan/xkcd_s_is_it_worth_time_considered_harmful) - [XKCD&apos;s \&quot;Is It Worth the Time?\&quot; Considered Harmful](https://will-keleher.com/posts/its-not-worth-the-time-yet.html)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 06:10:49](https://lobste.rs/s/9wvxpu/mipmap_selection_too_much_detail) - [Mipmap selection in too much detail](https://pema.dev/2025/05/09/mipmaps-too-much-detail/)
* [2025-05-11, 05:19:27](https://lobste.rs/s/n12xrd/sierpinski_triangle_my_bitwise) - [Sierpiński triangle? In my bitwise AND?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)
* [2025-05-11, 04:23:45](https://lobste.rs/s/ngbasc/fan_service) - [fan service](https://flak.tedunangst.com/post/fan-service)
* [2025-05-11, 04:15:00](https://games.slashdot.org/story/25/05/11/0328248/blizzards-overwatch-team-just-voted-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blizzard&apos;s &apos;Overwatch&apos; Team Just Voted to Unionize](https://games.slashdot.org/story/25/05/11/0328248/blizzards-overwatch-team-just-voted-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 03:38:30](https://lobste.rs/s/7trmcs/dotless_domains_2021) - [Dotless Domains (2021)](https://lab.avl.la/dotless/)
* [2025-05-11, 03:01:56](https://news.ycombinator.com/item?id=43950976) - [Leaving Google](https://www.airs.com/blog/archives/670)
* [2025-05-11, 03:00:21](https://lobste.rs/s/3brire/ian_lance_taylor_go_team_leaves_google) - [Ian Lance Taylor of the Go team leaves Google](https://www.airs.com/blog/archives/670)
* [2025-05-11, 02:14:28](https://lobste.rs/s/47eqcj/netbsd_10_x_kernel_math_emulation) - [NetBSD 10.x kernel MATH_EMULATION](https://mezzantrop.wordpress.com/2025/02/04/netbsd-10-x-kernel-math_emulation/)
* [2025-05-11, 01:49:00](https://science.slashdot.org/story/25/05/11/0147212/theranos-fraudsters-partner-launches-his-own-blood-testing-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Theranos Fraudster&apos;s Partner Launches His Own Blood-Testing Startup](https://science.slashdot.org/story/25/05/11/0147212/theranos-fraudsters-partner-launches-his-own-blood-testing-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
* [2025-05-11, 01:39:47](https://lobste.rs/s/m3xjzz/organize_your_go_middleware_without) - [Organize your Go middleware without dependencies](https://www.alexedwards.net/blog/organize-your-go-middleware-without-dependencies)
* [2025-05-11, 01:38:00](https://news.ycombinator.com/item?id=43950525) - [Dotless Domains](https://lab.avl.la/dotless/)
* [2025-05-11, 00:00:14](https://news.ycombinator.com/item?id=43950046) - [Fandom sells gaming media brand Giant Bomb to long-term staff](https://about.fandom.com/news/fandom-sells-giant-bomb-to-independent-creators)
* [2025-05-10, 23:36:00](https://entertainment.slashdot.org/story/25/05/10/2334208/life-of-a-marathon-streamer-online-for-three-years-facing-isolation-and-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life of a Marathon Streamer: Online for Three Years, Facing Isolation and Burnout](https://entertainment.slashdot.org/story/25/05/10/2334208/life-of-a-marathon-streamer-online-for-three-years-facing-isolation-and-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 22:32:01](https://news.ycombinator.com/item?id=43949542) - [Observations from people-watching](https://skincontact.substack.com/p/21-observations-from-people-watching)
* [2025-05-10, 22:14:00](https://developers.slashdot.org/story/25/05/10/2148230/developer-tries-resurrecting-47-year-old-apple-pascal-and-its-p-system-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Tries Resurrecting 47-Year-Old &apos;Apple Pascal&apos; (and its p-System) in Rust](https://developers.slashdot.org/story/25/05/10/2148230/developer-tries-resurrecting-47-year-old-apple-pascal-and-its-p-system-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 21:42:55](https://news.ycombinator.com/item?id=43949238) - [Sierpiński Triangle? In My Bitwise and?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)
* [2025-05-10, 21:21:23](https://lobste.rs/s/wvz30t/naked_objects) - [Naked objects](https://en.wikipedia.org/wiki/Naked_objects)
* [2025-05-10, 21:14:00](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Everyone Using AI to Cheat Their Way Through College?](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 19:34:00](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sea Levels Rose Faster Than Expected Last Year. Blame Global Warming - But What Happens Next?](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 18:34:00](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Broke Up with Google Search. It was Surprisingly Easy.&apos;](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 18:05:09](https://news.ycombinator.com/item?id=43947630) - [For $595, you get what nobody else can give you for twice the price (1982) [pdf]](https://s3data.computerhistory.org/brochures/commodore.commodore64.1982.102646264.pdf)
* [2025-05-10, 17:34:00](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How A Simple Question Tripped Up a North Korean Spy Interviewing for an IT Job](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 16:34:00](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More US Airports are Scanning Faces.  But a New Bill Could Limit the Practice](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 16:31:58](https://lobste.rs/s/azcfyx/announcing_lix_2_93_bici_bici) - [Announcing Lix 2.93 “Bici Bici”](https://lix.systems/blog/2025-05-06-lix-2.93-release/)
* [2025-05-10, 16:29:04](https://lobste.rs/s/biswto/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-1-built-for-control-but-not-for-people/)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 15:59:48](https://lobste.rs/s/vlyrt4/are_we_serious_about_using_tla_for) - [Are We Serious About Using TLA+ For Statistical Properties?](https://emptysqua.re/blog/are-we-serious-about-statistical-properties-tlaplus/)
* [2025-05-10, 14:30:04](https://lobste.rs/s/wabkap/changelog_slack_is_dead_long_live_zulip) - [Changelog Slack is dead. Long live Zulip](https://changelog.com/posts/our-slack-is-dead-long-live-zulip)
* [2025-05-10, 14:25:34](https://lobste.rs/s/gwucam/lume_3_was_released) - [Lume 3 was released](https://lume.land/blog/posts/lume-3/)
* [2025-05-10, 14:15:56](https://news.ycombinator.com/item?id=43945820) - [US vs. Google amicus curiae brief of Y Combinator in support of plaintiffs [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1300.1.pdf)
* [2025-05-10, 13:33:49](https://lobste.rs/s/3zhwyb/truenas_core_is_dead_long_live_zvault) - [TrueNAS CORE is Dead – Long Live zVault](https://vermaden.wordpress.com/2024/04/20/truenas-core-versus-truenas-scale/#truenas-core-dead-long-live-zvault)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
* [2025-05-10, 09:01:33](https://lobste.rs/s/dvm2cs/bold_linker_v0_2_0_release_bold_just_got) - [bold linker v0.2.0 release - bold just got faster](https://github.com/kubkon/bold/releases/tag/v0.2.0)
* [2025-05-10, 06:52:00](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss) - [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss)
* [2025-05-10, 02:04:00](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss) - [DOJ Confirms It Wants To Break Up Google&apos;s Advertising Tech Monopoly](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss)
* [2025-05-09, 21:19:00](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss) - [Software Bloat and Security: have we all Gone Mad?](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss)
* [2025-05-09, 16:33:00](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss) - [The Future of Data Storage Might be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss)
* [2025-05-09, 11:46:00](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) - [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
* [2025-05-09, 01:45:16](https://news.ycombinator.com/item?id=43933091) - [The most valuable commodity in the world is friction](https://kyla.substack.com/p/the-most-valuable-commodity-in-the)
* [2025-05-09, 01:00:53](https://news.ycombinator.com/item?id=43932871) - [How to (actually) prove it – New Frontiers of Mathematics and Computing in Lean](https://kirancodes.me/posts/log-how-to-prove-it-maths.html)
* [2025-05-09, 00:26:28](https://news.ycombinator.com/item?id=43932690) - [Coupling furfural oxidation for H2 production using silicon photoelectrodes](https://www.nature.com/articles/s41467-025-58000-4)
* [2025-05-08, 21:29:00](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss) - [Building Custom Atomic Distributions - a Step-by-Step Guide](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss)
* [2025-05-08, 21:06:02](https://news.ycombinator.com/item?id=43931366) - [Writing an LLM from scratch, part 13 – attention heads are dumb](https://www.gilesthomas.com/2025/05/llm-from-scratch-13-taking-stock-part-1-attention-heads-are-dumb)
* [2025-05-08, 16:44:00](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss) - [Nvidia Warns US AI Hardware Export Rules Could Backfire Empowering Huawei To Define Global Standards](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss)
* [2025-05-08, 12:00:00](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss) - [Hacker Breaches Telemessage System Used By US Officials, Raising Security Concerns](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss)
* [2025-05-08, 07:58:33](https://news.ycombinator.com/item?id=43924082) - [An Introduction to Solid Queue for Ruby on Rails](https://blog.appsignal.com/2025/05/07/an-introduction-to-solid-queue-for-ruby-on-rails.html)
* [2025-05-08, 07:22:00](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss) - [People Trust Legal Advice Generated by ChatGPT More Than a Lawyer](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss)
* [2025-05-08, 02:36:00](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss) - [The First Driverless Semis Have Started Running Regular Longhaul Routes](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss)
* [2025-05-07, 21:55:00](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss) - [Scientists Build First-Ever &apos;Black Hole Bomb&apos; Analog](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss)
* [2025-05-07, 17:07:00](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss) - [UK Could Require Solar Panels on Most New Homes by 2027](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss)
* [2025-05-07, 15:15:50](https://news.ycombinator.com/item?id=43916818) - [Is there a balance to be struck between simple hierarchical models and](https://statmodeling.stat.columbia.edu/2024/05/26/is-there-a-balance-to-be-struck-between-simple-hierarchical-models-and-more-complex-hierarchical-models-that-augment-the-simple-frameworks-with-more-modeled-interactions-when-analyzing-real-data/)
* [2025-05-07, 12:22:00](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss) - [Hackers Abuse IPv6 Networking Feature to Hijack Windows Software Updates](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss)
* [2025-05-07, 07:37:00](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss) - [Mathematicians Just Solved a 125-Year-Old Problem, Uniting 3 Theories in Physics](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss)
* [2025-05-07, 02:51:00](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss) - [PA’s Largest Coal Plant to Become 4.5GW Gas-Fired AI Hub](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss)
