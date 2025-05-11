# [News Summary](https://kherrick.github.io/news-summary/)

## Security and Privacy Developments

* [CISA/DOGE Software Engineer's Login Credentials Appeared in Multiple Leaks From Info-Stealing Malware in Recent Years](https://yro.slashdot.org/story/25/05/11/0451222/cisadoge-software-engineers-login-credentials-appeared-in-multiple-leaks-from-info-stealing-malware-in-recent-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [One-Click RCE in Asus's Preinstalled Driver Software](https://mrbruh.com/asusdriverhub/)

* [eBPF agent that captures pre-encrypted network traffic](https://github.com/qpoint-io/qtap)

* [Private Internet (2024)](https://kevincox.ca/2024/08/16/private-internet/)

## Technological Innovations and Mathematical Insights

* [Absolute Zero: Reinforced Self-Play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)

* [Sierpiński triangle? In my bitwise AND?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)

* [NetBSD 10.x kernel MATH_EMULATION](https://mezzantrop.wordpress.com/2025/02/04/netbsd-10-x-kernel-math_emulation/)

## Artificial Intelligence and Future Applications

* [Exploiting Copilot AI for SharePoint](https://www.pentestpartners.com/security-blog/exploiting-copilot-ai-for-sharepoint/)

* [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&from=rss)

## Corporate and Industrial News

* [Ian Lance Taylor of the Go team leaves Google](https://www.airs.com/blog/archives/670)

* [Blizzard's 'Overwatch' Team Just Voted to Unionize](https://games.slashdot.org/story/25/05/11/0328248/blizzards-overwatch-team-just-voted-to-unionize?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Ethics and Society

* [Is Everyone Using AI to Cheat Their Way Through College?](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Thinkers and Doers](https://www.strangeloopcanon.com/p/on-thinkers-and-doers)

## Environmental and Biological Advances

* [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&from=rss)

* [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&from=rss)

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

* [2025-05-11, 08:40:45](https://lobste.rs/s/w7s0io/caching_behind_elm_s_html_lazy) - [The caching behind Elm&apos;s Html.Lazy](https://jfmengels.net/caching-behind-elm-lazy)
* [2025-05-11, 08:05:44](https://lobste.rs/s/ol4ggm/private_internet_2024) - [Private Internet (2024)](https://kevincox.ca/2024/08/16/private-internet/)
* [2025-05-11, 07:35:00](https://yro.slashdot.org/story/25/05/11/0451222/cisadoge-software-engineers-login-credentials-appeared-in-multiple-leaks-from-info-stealing-malware-in-recent-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA/DOGE Software Engineer&apos;s Login Credentials Appeared in Multiple Leaks From Info-Stealing Malware in Recent Years](https://yro.slashdot.org/story/25/05/11/0451222/cisadoge-software-engineers-login-credentials-appeared-in-multiple-leaks-from-info-stealing-malware-in-recent-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 07:07:26](https://news.ycombinator.com/item?id=43951985) - [Absolute Zero: Reinforced Self-Play Reasoning with Zero Data](https://arxiv.org/abs/2505.03335)
* [2025-05-11, 07:01:50](https://lobste.rs/s/u9hyan/xkcd_s_is_it_worth_time_considered_harmful) - [XKCD&apos;s \&quot;Is It Worth the Time?\&quot; Considered Harmful](https://will-keleher.com/posts/its-not-worth-the-time-yet.html)
* [2025-05-11, 06:56:49](https://news.ycombinator.com/item?id=43951943) - [What is it like to be a thermostat? (1996)](https://www.organism.earth/library/document/what-is-it-like-to-be-a-thermostat)
* [2025-05-11, 06:34:00](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss) - [Sunscreen Might Have Helped Early Humans Outlive Neanderthals](https://soylentnews.org/article.pl?sid=25/05/09/1729255&amp;from=rss)
* [2025-05-11, 06:26:37](https://news.ycombinator.com/item?id=43951841) - [Show HN: I’m 16 years old and working on my first startup, a study app](https://www.notiv.app/)
* [2025-05-11, 06:10:49](https://lobste.rs/s/9wvxpu/mipmap_selection_too_much_detail) - [Mipmap selection in too much detail](https://pema.dev/2025/05/09/mipmaps-too-much-detail/)
* [2025-05-11, 05:58:01](https://news.ycombinator.com/item?id=43951737) - [Thinkers and Doers](https://www.strangeloopcanon.com/p/on-thinkers-and-doers)
* [2025-05-11, 05:19:27](https://lobste.rs/s/n12xrd/sierpinski_triangle_my_bitwise) - [Sierpiński triangle? In my bitwise AND?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)
* [2025-05-11, 05:11:18](https://news.ycombinator.com/item?id=43951588) - [One-Click RCE in Asus&apos;s Preinstalled Driver Software](https://mrbruh.com/asusdriverhub/)
* [2025-05-11, 04:26:33](https://news.ycombinator.com/item?id=43951368) - [Fan Service](https://flak.tedunangst.com/post/fan-service)
* [2025-05-11, 04:23:45](https://lobste.rs/s/ngbasc/fan_service) - [fan service](https://flak.tedunangst.com/post/fan-service)
* [2025-05-11, 04:15:00](https://games.slashdot.org/story/25/05/11/0328248/blizzards-overwatch-team-just-voted-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blizzard&apos;s &apos;Overwatch&apos; Team Just Voted to Unionize](https://games.slashdot.org/story/25/05/11/0328248/blizzards-overwatch-team-just-voted-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 03:43:26](https://lobste.rs/s/vpg52c/ebpf_agent_captures_pre_encrypted) - [eBPF agent that captures pre-encrypted network traffic](https://github.com/qpoint-io/qtap)
* [2025-05-11, 03:38:30](https://lobste.rs/s/7trmcs/dotless_domains_2021) - [Dotless Domains (2021)](https://lab.avl.la/dotless/)
* [2025-05-11, 03:00:21](https://lobste.rs/s/3brire/ian_lance_taylor_go_team_leaves_google) - [Ian Lance Taylor of the Go team leaves Google](https://www.airs.com/blog/archives/670)
* [2025-05-11, 02:14:28](https://lobste.rs/s/47eqcj/netbsd_10_x_kernel_math_emulation) - [NetBSD 10.x kernel MATH_EMULATION](https://mezzantrop.wordpress.com/2025/02/04/netbsd-10-x-kernel-math_emulation/)
* [2025-05-11, 02:13:49](https://news.ycombinator.com/item?id=43950709) - [NetBSD 10.x Kernel Math_emulation](https://mezzantrop.wordpress.com/2025/02/04/netbsd-10-x-kernel-math_emulation/)
* [2025-05-11, 01:49:00](https://science.slashdot.org/story/25/05/11/0147212/theranos-fraudsters-partner-launches-his-own-blood-testing-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Theranos Fraudster&apos;s Partner Launches His Own Blood-Testing Startup](https://science.slashdot.org/story/25/05/11/0147212/theranos-fraudsters-partner-launches-his-own-blood-testing-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-11, 01:49:00](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss) - [How Hungry Fat Cells Could Someday Starve Cancer to Death](https://soylentnews.org/article.pl?sid=25/05/09/1211227&amp;from=rss)
* [2025-05-11, 01:39:47](https://lobste.rs/s/m3xjzz/organize_your_go_middleware_without) - [Organize your Go middleware without dependencies](https://www.alexedwards.net/blog/organize-your-go-middleware-without-dependencies)
* [2025-05-11, 00:00:14](https://news.ycombinator.com/item?id=43950046) - [Fandom Sells Giant Bomb to Independent Creators](https://about.fandom.com/news/fandom-sells-giant-bomb-to-independent-creators)
* [2025-05-10, 23:36:00](https://entertainment.slashdot.org/story/25/05/10/2334208/life-of-a-marathon-streamer-online-for-three-years-facing-isolation-and-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life of a Marathon Streamer: Online for Three Years, Facing Isolation and Burnout](https://entertainment.slashdot.org/story/25/05/10/2334208/life-of-a-marathon-streamer-online-for-three-years-facing-isolation-and-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 22:32:01](https://news.ycombinator.com/item?id=43949542) - [Observations from people watching](https://skincontact.substack.com/p/21-observations-from-people-watching)
* [2025-05-10, 22:30:45](https://lobste.rs/s/voxxeb/louise_polynomial_time_meta) - [louise: Polynomial-time Meta-Interpretive Learning for logic programming](https://github.com/stassa/louise)
* [2025-05-10, 22:14:00](https://developers.slashdot.org/story/25/05/10/2148230/developer-tries-resurrecting-47-year-old-apple-pascal-and-its-p-system-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Tries Resurrecting 47-Year-Old &apos;Apple Pascal&apos; (and its p-System) in Rust](https://developers.slashdot.org/story/25/05/10/2148230/developer-tries-resurrecting-47-year-old-apple-pascal-and-its-p-system-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 21:42:55](https://news.ycombinator.com/item?id=43949238) - [Sierpiński Triangle? In My Bitwise and?](https://lcamtuf.substack.com/p/sierpinski-triangle-in-my-bitwise)
* [2025-05-10, 21:25:21](https://news.ycombinator.com/item?id=43949134) - [Show HN: LoopMix128 – Fast C PRNG (.46ns), 2^128 Period, BigCrush/PractRand Pass](https://github.com/danielcota/LoopMix128)
* [2025-05-10, 21:21:23](https://lobste.rs/s/wvz30t/naked_objects) - [Naked objects](https://en.wikipedia.org/wiki/Naked_objects)
* [2025-05-10, 21:15:04](https://news.ycombinator.com/item?id=43949056) - [Why the Apple II Didn&apos;t Support Lowercase Letters (2020)](https://www.vintagecomputing.com/index.php/archives/2833/why-the-apple-ii-didnt-support-lowercase-letters)
* [2025-05-10, 21:14:00](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Everyone Using AI to Cheat Their Way Through College?](https://news.slashdot.org/story/25/05/10/2112201/is-everyone-using-ai-to-cheat-their-way-through-college?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss) - [Kuwait Declares Cryptocurrency Mining Illegal Amid Power Crisis Crackdown](https://soylentnews.org/article.pl?sid=25/05/09/1123216&amp;from=rss)
* [2025-05-10, 20:58:27](https://news.ycombinator.com/item?id=43948945) - [Show HN: Xenolab – Rasp Pi monitor for my pet carnivourus plants](https://github.com/blackrabbit17/xenolab)
* [2025-05-10, 19:34:00](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sea Levels Rose Faster Than Expected Last Year. Blame Global Warming - But What Happens Next?](https://news.slashdot.org/story/25/05/10/0830239/sea-levels-rose-faster-than-expected-last-year-blame-global-warming---but-what-happens-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 18:34:00](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;I Broke Up with Google Search. It was Surprisingly Easy.&apos;](https://tech.slashdot.org/story/25/05/10/0247242/i-broke-up-with-google-search-it-was-surprisingly-easy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 18:05:09](https://news.ycombinator.com/item?id=43947630) - [For $595, you get what nobody else can give you for twice the price (1982) [pdf]](https://s3data.computerhistory.org/brochures/commodore.commodore64.1982.102646264.pdf)
* [2025-05-10, 17:34:00](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How A Simple Question Tripped Up a North Korean Spy Interviewing for an IT Job](https://it.slashdot.org/story/25/05/10/0656226/how-a-simple-question-tripped-up-a-north-korean-spy-interviewing-for-an-it-job?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 16:39:44](https://lobste.rs/s/3edrcj/exploiting_copilot_ai_for_sharepoint) - [Exploiting Copilot AI for SharePoint](https://www.pentestpartners.com/security-blog/exploiting-copilot-ai-for-sharepoint/)
* [2025-05-10, 16:34:00](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More US Airports are Scanning Faces.  But a New Bill Could Limit the Practice](https://tech.slashdot.org/story/25/05/10/0547237/more-us-airports-are-scanning-faces-but-a-new-bill-could-limit-the-practice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 16:31:58](https://lobste.rs/s/azcfyx/announcing_lix_2_93_bici_bici) - [Announcing Lix 2.93 “Bici Bici”](https://lix.systems/blog/2025-05-06-lix-2.93-release/)
* [2025-05-10, 16:29:04](https://lobste.rs/s/biswto/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-1-built-for-control-but-not-for-people/)
* [2025-05-10, 16:23:06](https://news.ycombinator.com/item?id=43946824) - [Reverse engineering the 386 processor&apos;s prefetch queue circuitry](http://www.righto.com/2025/05/386-prefetch-circuitry-reverse-engineered.html)
* [2025-05-10, 16:22:00](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss) - [Astronomers Used Old &apos;Maps&apos; to Find What Could be a 9th Planet in Our Solar System](https://soylentnews.org/article.pl?sid=25/05/09/0353243&amp;from=rss)
* [2025-05-10, 16:20:31](https://lobste.rs/s/dicjhi/reverse_engineering_386_processor_s) - [Reverse engineering the 386 processor&apos;s prefetch queue circuitry](http://www.righto.com/2025/05/386-prefetch-circuitry-reverse-engineered.html)
* [2025-05-10, 15:59:48](https://lobste.rs/s/vlyrt4/are_we_serious_about_using_tla_for) - [Are We Serious About Using TLA+ For Statistical Properties?](https://emptysqua.re/blog/are-we-serious-about-statistical-properties-tlaplus/)
* [2025-05-10, 15:34:00](https://yro.slashdot.org/story/25/05/10/0715216/high-tariffs-become-real-for-adafruit---with-their-first-36k-bill-just-for-import-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High Tariffs Become &apos;Real&apos; For Adafruit - With Their First $36K Bill Just For Import Duties](https://yro.slashdot.org/story/25/05/10/0715216/high-tariffs-become-real-for-adafruit---with-their-first-36k-bill-just-for-import-duties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 15:21:29](https://lobste.rs/s/vuolg1/secure_by_design_google_s_perspective_on) - [Secure by Design: Google’s Perspective on Memory Safety (2024)](https://storage.googleapis.com/gweb-research2023-media/pubtools/7665.pdf)
* [2025-05-10, 14:55:52](https://news.ycombinator.com/item?id=43946149) - [Comparison of C/POSIX standard library implementations for Linux](https://www.etalabs.net/compare_libcs.html)
* [2025-05-10, 14:37:59](https://news.ycombinator.com/item?id=43945993) - [A critical look at MCP](https://raz.sh/blog/2025-05-02_a_critical_look_at_mcp)
* [2025-05-10, 14:34:00](https://tech.slashdot.org/story/25/05/10/0430217/google-will-pay-14-billion-to-texas-to-settle-claims-it-collected-user-data-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Pay $1.4 Billion to Texas to Settle Claims It Collected User Data Without Permission](https://tech.slashdot.org/story/25/05/10/0430217/google-will-pay-14-billion-to-texas-to-settle-claims-it-collected-user-data-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 14:30:04](https://lobste.rs/s/wabkap/changelog_slack_is_dead_long_live_zulip) - [Changelog Slack is dead. Long live Zulip](https://changelog.com/posts/our-slack-is-dead-long-live-zulip)
* [2025-05-10, 14:25:34](https://lobste.rs/s/gwucam/lume_3_was_released) - [Lume 3 was released](https://lume.land/blog/posts/lume-3/)
* [2025-05-10, 14:15:56](https://news.ycombinator.com/item?id=43945820) - [US vs. Google amicus curiae brief of Y Combinator in support of plaintiffs [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1300.1.pdf)
* [2025-05-10, 13:33:49](https://lobste.rs/s/3zhwyb/truenas_core_is_dead_long_live_zvault) - [TrueNAS CORE is Dead – Long Live zVault](https://vermaden.wordpress.com/2024/04/20/truenas-core-versus-truenas-scale/#truenas-core-dead-long-live-zvault)
* [2025-05-10, 13:00:00](https://it.slashdot.org/story/25/05/09/2223226/police-dismantles-botnet-selling-hacked-routers-as-residential-proxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Police Dismantles Botnet Selling Hacked Routers As Residential Proxies](https://it.slashdot.org/story/25/05/09/2223226/police-dismantles-botnet-selling-hacked-routers-as-residential-proxies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss) - [Washington the Eighth State to Pass ‘Right to Repair’ Law](https://soylentnews.org/article.pl?sid=25/05/09/0327207&amp;from=rss)
* [2025-05-10, 11:19:39](https://news.ycombinator.com/item?id=43944789) - [Embracer Games Archive is preserving 75000 video games and needs contributions](https://embracergamesarchive.com/)
* [2025-05-10, 10:00:00](https://news.slashdot.org/story/25/05/09/2216249/bill-gates-plans-to-give-away-his-wealth-shutter-foundation-over-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bill Gates Plans To Give Away His Wealth, Shutter Foundation Over Next 20 Years](https://news.slashdot.org/story/25/05/09/2216249/bill-gates-plans-to-give-away-his-wealth-shutter-foundation-over-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 09:01:33](https://lobste.rs/s/dvm2cs/bold_linker_v0_2_0_release_bold_just_got) - [bold linker v0.2.0 release - bold just got faster](https://github.com/kubkon/bold/releases/tag/v0.2.0)
* [2025-05-10, 07:00:00](https://news.slashdot.org/story/25/05/09/2210247/lithium-deposit-valued-at-15-trillion-discovered-in-oregon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lithium Deposit Valued At $1.5 Trillion Discovered In Oregon](https://news.slashdot.org/story/25/05/09/2210247/lithium-deposit-valued-at-15-trillion-discovered-in-oregon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-10, 06:52:00](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss) - [Mathematical Beauty, Truth and Proof in the Age of AI](https://soylentnews.org/article.pl?sid=25/05/09/0324231&amp;from=rss)
* [2025-05-10, 06:28:40](https://lobste.rs/s/alodyz/praise_grobi_for_auto_configuring_x11) - [In praise of grobi for auto-configuring X11 monitors](https://michael.stapelberg.ch/posts/2025-05-10-grobi-x11-monitor-autoconfig/)
* [2025-05-10, 02:04:00](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss) - [DOJ Confirms It Wants To Break Up Google&apos;s Advertising Tech Monopoly](https://soylentnews.org/article.pl?sid=25/05/08/137234&amp;from=rss)
* [2025-05-09, 21:19:00](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss) - [Software Bloat and Security: have we all Gone Mad?](https://soylentnews.org/article.pl?sid=25/05/08/1259227&amp;from=rss)
* [2025-05-09, 16:33:00](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss) - [The Future of Data Storage Might be Ceramic Glass That Can Last Thousands of Years](https://soylentnews.org/article.pl?sid=25/05/08/1156250&amp;from=rss)
* [2025-05-09, 14:29:14](https://lobste.rs/s/zozo8v/write_most_clever_code_you_possibly_can) - [Write the most clever code you possibly can](https://buttondown.com/hillelwayne/archive/write-the-most-clever-code-you-possibly-can/)
* [2025-05-09, 11:46:00](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss) - [Federal Court Says Cell Tower Dumps Violate the Fourth Amendment](https://soylentnews.org/article.pl?sid=25/05/08/1151256&amp;from=rss)
* [2025-05-09, 07:01:00](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss) - [We Have Reached the “Severed Fingers and Abductions” Stage of the Crypto Revolution ](https://soylentnews.org/article.pl?sid=25/05/07/2330241&amp;from=rss)
* [2025-05-09, 06:52:12](https://news.ycombinator.com/item?id=43934411) - [The Ecstatic Swoon](https://aeon.co/essays/what-stendhal-says-about-the-purpose-and-promise-of-art)
* [2025-05-09, 02:14:00](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss) - [OpenSUSE Joins the End of 10 Campaign](https://soylentnews.org/article.pl?sid=25/05/07/1352238&amp;from=rss)
* [2025-05-08, 22:16:05](https://news.ycombinator.com/item?id=43931925) - [Adaptive Hashing](https://quotenil.com/adaptive-hashing.html)
* [2025-05-08, 21:29:00](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss) - [Building Custom Atomic Distributions - a Step-by-Step Guide](https://soylentnews.org/article.pl?sid=25/05/07/1350218&amp;from=rss)
* [2025-05-08, 20:04:48](https://news.ycombinator.com/item?id=43930725) - [A brief history of the numeric keypad](https://www.doc.cc/articles/a-brief-history-of-the-numeric-keypad)
* [2025-05-08, 17:42:33](https://news.ycombinator.com/item?id=43928942) - [How much information is in DNA?](https://dynomight.substack.com/p/dna)
* [2025-05-08, 16:44:00](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss) - [Nvidia Warns US AI Hardware Export Rules Could Backfire Empowering Huawei To Define Global Standards](https://soylentnews.org/article.pl?sid=25/05/06/235250&amp;from=rss)
* [2025-05-08, 15:30:30](https://news.ycombinator.com/item?id=43927095) - [Arduino is at work to make bio-based PCBs](https://blog.arduino.cc/2025/04/22/arduino-is-at-work-to-make-bio-based-pcbs/)
* [2025-05-08, 14:58:41](https://news.ycombinator.com/item?id=43926713) - [When Suno covers my song (very useful) – a study with variations](http://rochus-keller.ch/?p=1350)
* [2025-05-08, 12:00:00](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss) - [Hacker Breaches Telemessage System Used By US Officials, Raising Security Concerns](https://soylentnews.org/article.pl?sid=25/05/06/2254241&amp;from=rss)
* [2025-05-08, 07:22:00](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss) - [People Trust Legal Advice Generated by ChatGPT More Than a Lawyer](https://soylentnews.org/article.pl?sid=25/05/06/1923215&amp;from=rss)
* [2025-05-08, 02:36:00](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss) - [The First Driverless Semis Have Started Running Regular Longhaul Routes](https://soylentnews.org/article.pl?sid=25/05/06/1537247&amp;from=rss)
* [2025-05-08, 01:28:38](https://news.ycombinator.com/item?id=43922216) - [Lianas are taking over the rainforests, and it&apos;s visible from space](https://phys.org/news/2025-05-lianas-rainforests-visible-space.html)
* [2025-05-07, 21:55:00](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss) - [Scientists Build First-Ever &apos;Black Hole Bomb&apos; Analog](https://soylentnews.org/article.pl?sid=25/05/06/0348250&amp;from=rss)
* [2025-05-07, 17:32:14](https://news.ycombinator.com/item?id=43918478) - [Engineers develop wearable heart attack detection technology](https://medicalxpress.com/news/2025-04-wearable-heart-technology.html)
* [2025-05-07, 17:07:00](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss) - [UK Could Require Solar Panels on Most New Homes by 2027](https://soylentnews.org/article.pl?sid=25/05/06/0338215&amp;from=rss)
* [2025-05-07, 13:32:24](https://news.ycombinator.com/item?id=43915470) - [Strain gauge made out of PCB](https://github.com/vapetrov/PCB_strain_gauge)
* [2025-05-07, 12:22:00](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss) - [Hackers Abuse IPv6 Networking Feature to Hijack Windows Software Updates](https://soylentnews.org/article.pl?sid=25/05/06/0334233&amp;from=rss)
* [2025-05-07, 08:36:57](https://news.ycombinator.com/item?id=43913414) - [Lazarus Release 4.0](https://forum.lazarus.freepascal.org/index.php?topic=71050.0)
* [2025-05-07, 07:37:00](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss) - [Mathematicians Just Solved a 125-Year-Old Problem, Uniting 3 Theories in Physics](https://soylentnews.org/article.pl?sid=25/05/06/0312252&amp;from=rss)
* [2025-05-07, 04:06:10](https://news.ycombinator.com/item?id=43912164) - [The State of SSL Stacks](https://www.haproxy.com/blog/state-of-ssl-stacks)
* [2025-05-07, 02:51:00](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss) - [PA’s Largest Coal Plant to Become 4.5GW Gas-Fired AI Hub](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss)
