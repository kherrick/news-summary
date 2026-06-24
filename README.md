# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Reid Hoffman says SpaceX 'not an AI company', xAI 'complete train wreck'](https://fortune.com/2026/06/24/reid-hoffman-spacex-musk-openai-anthropic-gen-z-mistake/) ([comments](https://news.ycombinator.com/item?id=48658647))

* [Haystack: Open-Source AI Framework for Production Ready Agents, RAG](https://haystack.deepset.ai/) ([comments](https://news.ycombinator.com/item?id=48658095))

* [Intel And AMD's New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/23/0931228&from=rss))

* [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Cybersecurity and Privacy

* [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/23/0934229&from=rss))

* [How hackers reverse Math.random()](https://www.youtube.com/watch?v=XDsYPXRCXAs) ([comments](https://lobste.rs/s/kzw3rt/how_hackers_reverse_math_random))

* [29-Year-Old Squid Proxy Bug 'Squidbleed' Can Leak Cleartext HTTP Requests](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Environmental and Health Developments

* [A deadly fungus that can infect cats and people is spreading](https://www.sciencenews.org/article/deadly-fungus-cats-people-spreading) ([comments](https://news.ycombinator.com/item?id=48658186))

* [Europe: The World's Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Software and Tools

* [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54) ([comments](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996))

* [Context Makes Tests Reusable](https://trop.in/blog/context-makes-tests-reusable) ([comments](https://lobste.rs/s/idzeov/context_makes_tests_reusable))

* [Show HN: TikZ Editor – WYSIWYG editor for figures in LaTeX](https://tikz.dev/editor/) ([comments](https://news.ycombinator.com/item?id=48645437))

## Space Exploration and Astronomy

* [NASA's Nancy Grace Roman Space Telescope Arrives In Florida](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/21/2026240&from=rss))

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

* [2026-06-24, 12:23:59](https://news.ycombinator.com/item?id=48658647) - [Reid Hoffman says SpaceX &apos;not an AI company&apos;, xAI &apos;complete train wreck&apos;](https://fortune.com/2026/06/24/reid-hoffman-spacex-musk-openai-anthropic-gen-z-mistake/)
* [2026-06-24, 11:52:12](https://news.ycombinator.com/item?id=48658361) - [Minimus container images are now free](https://images.minimus.io/)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 11:38:24](https://lobste.rs/s/idzeov/context_makes_tests_reusable) - [Context Makes Tests Reusable](https://trop.in/blog/context-makes-tests-reusable)
* [2026-06-24, 11:31:20](https://news.ycombinator.com/item?id=48658186) - [A deadly fungus that can infect cats and people is spreading](https://www.sciencenews.org/article/deadly-fungus-cats-people-spreading)
* [2026-06-24, 11:24:21](https://lobste.rs/s/kzw3rt/how_hackers_reverse_math_random) - [How hackers reverse Math.random()](https://www.youtube.com/watch?v=XDsYPXRCXAs)
* [2026-06-24, 11:21:32](https://news.ycombinator.com/item?id=48658095) - [Haystack: Open-Source AI Framework for Production Ready Agents, RAG](https://haystack.deepset.ai/)
* [2026-06-24, 11:00:00](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mushroom Behind &apos;Tiny Human&apos; Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 10:59:59](https://news.ycombinator.com/item?id=48657940) - [Too many R packages: CRAN is inundated with submissions](https://rworks.dev/posts/too-many-R-packages/)
* [2026-06-24, 10:11:58](https://lobste.rs/s/6vsofh/joy_power_understanding) - [The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)
* [2026-06-24, 09:48:26](https://lobste.rs/s/a7thxr/coming_loop) - [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)
* [2026-06-24, 09:37:56](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996) - [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)
* [2026-06-24, 09:00:00](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe: The World&apos;s Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 08:50:41](https://news.ycombinator.com/item?id=48657030) - [We&apos;re making Bunny DNS free: because a faster internet won&apos;t build itself](https://bunny.net/blog/were-making-bunny-dns-free/)
* [2026-06-24, 07:01:21](https://news.ycombinator.com/item?id=48656219) - [Ashby (YC W19) Is Hiring EMEA Engineers Who Can Design](https://www.ashbyhq.com/careers?ashby_jid=87b96eef-edc1-4de4-adb6-d460126d02f8&amp;utm_source=hn)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 06:18:03](https://lobste.rs/s/dl0yiv/making_rust_supply_chain_attacks_harder) - [Making Rust supply chain attacks harder with Cackle (2023)](https://davidlattimore.github.io/posts/2023/10/09/making-supply-chain-attacks-harder.html)
* [2026-06-24, 06:00:00](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 03:33:24](https://lobste.rs/s/oyi8yy/swift_package_index_joins_apple) - [Swift Package Index joins Apple](https://swiftpackageindex.com/blog/swift-package-index-joins-apple)
* [2026-06-24, 03:17:47](https://news.ycombinator.com/item?id=48654676) - [Raspberry Pi Pico W as USB Wi-Fi Adapter](https://gitlab.com/baiyibai/pico-usb-wifi)
* [2026-06-24, 02:57:02](https://lobste.rs/s/ev9ruz/rrb_trees_efficient_immutable_vectors) - [RRB-Trees: Efficient Immutable Vectors](https://infoscience.epfl.ch/server/api/core/bitstreams/e5d662ea-1e8d-4dda-b917-8cbb8bb40bf9/content)
* [2026-06-24, 02:38:47](https://news.ycombinator.com/item?id=48654465) - [\&quot;Fix\&quot; MacBook Neo Cursor Lag: Record 1 Pixel of the Screen Every 10 Seconds](https://gist.github.com/retroplasma/ec21767d0a8380c7ea9c2fbee1c7d6bf)
* [2026-06-24, 02:21:47](https://news.ycombinator.com/item?id=48654351) - [Qwen-AgentWorld: Language World Models for General Agents](https://arxiv.org/abs/2606.24597)
* [2026-06-24, 02:18:36](https://lobste.rs/s/7q9qwr/legibility_effort) - [Legibility of Effort](https://eieio.games/blog/legibility-of-effort/)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-24, 01:36:05](https://lobste.rs/s/gfroei/adversarial_communication) - [Adversarial Communication](https://blog.glyph.im/2026/06/adversarial-communication.html)
* [2026-06-24, 00:18:29](https://lobste.rs/s/pvdvww/how_we_found_bug_hyper_http_library) - [How we found a bug in the hyper HTTP library](https://blog.cloudflare.com/hyper-bug/)
* [2026-06-24, 00:13:28](https://lobste.rs/s/yvydvs/maestro_lightweight_linux_compatible) - [maestro: Lightweight, Linux-compatible kernel, written in Rust](https://github.com/maestro-os/maestro)
* [2026-06-23, 23:42:46](https://news.ycombinator.com/item?id=48653216) - [Vulnerability reports are not special anymore](https://words.filippo.io/vuln-reports/)
* [2026-06-23, 23:00:00](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [29-Year-Old Squid Proxy Bug &apos;Squidbleed&apos; Can Leak Cleartext HTTP Requests](https://it.slashdot.org/story/26/06/23/2025211/29-year-old-squid-proxy-bug-squidbleed-can-leak-cleartext-http-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 22:00:00](https://tech.slashdot.org/story/26/06/23/2015238/china-reclaims-fastest-supercomputer-at-2-exaflops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Reclaims Fastest Supercomputer At 2 Exaflops](https://tech.slashdot.org/story/26/06/23/2015238/china-reclaims-fastest-supercomputer-at-2-exaflops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 21:00:00](https://news.slashdot.org/story/26/06/23/1948242/wikipedia-cofounder-larry-sanger-banned-from-site-for-canvassing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Cofounder Larry Sanger Banned From Site for &apos;Canvassing&apos;](https://news.slashdot.org/story/26/06/23/1948242/wikipedia-cofounder-larry-sanger-banned-from-site-for-canvassing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 20:00:00](https://slashdot.org/story/26/06/23/1935231/walmart-in-biggest-deal-in-two-years-buys-advertising-tech-firm-vibeco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart, In Biggest Deal In Two Years, Buys Advertising Tech Firm Vibe.co](https://slashdot.org/story/26/06/23/1935231/walmart-in-biggest-deal-in-two-years-buys-advertising-tech-firm-vibeco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 19:00:00](https://news.slashdot.org/story/26/06/23/179231/mark-zuckerberg-directed-meta-to-create-a-prediction-markets-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Directed Meta To Create a Prediction Markets App](https://news.slashdot.org/story/26/06/23/179231/mark-zuckerberg-directed-meta-to-create-a-prediction-markets-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 18:40:22](https://news.ycombinator.com/item?id=48649435) - [Jerry&apos;s Map](http://www.jerrysmap.com/the-map)
* [2026-06-23, 18:10:47](https://news.ycombinator.com/item?id=48648959) - [In memory of the man who put red and green squiggles under words](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451)
* [2026-06-23, 18:00:58](https://news.ycombinator.com/item?id=48648779) - [Swift Package Index joins Apple](https://swiftpackageindex.com/blog/swift-package-index-joins-apple)
* [2026-06-23, 18:00:00](https://news.slashdot.org/story/26/06/23/175226/digital-euro-expected-to-launch-by-2029-after-eu-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digital Euro Expected To Launch By 2029 After EU Backing](https://news.slashdot.org/story/26/06/23/175226/digital-euro-expected-to-launch-by-2029-after-eu-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 17:50:22](https://news.ycombinator.com/item?id=48648619) - [FUTO Swipe – A new swipe typing model](https://swipe.futo.tech/)
* [2026-06-23, 17:00:00](https://tech.slashdot.org/story/26/06/23/1658201/meta-launches-cheaper-smart-glasses-without-ray-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Launches Cheaper Smart Glasses Without Ray-Ban](https://tech.slashdot.org/story/26/06/23/1658201/meta-launches-cheaper-smart-glasses-without-ray-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 16:30:18](https://news.ycombinator.com/item?id=48647486) - [The worthlessness of Vitamin D is mildly exaggerated](https://dynomight.net/vitamin-d/)
* [2026-06-23, 16:20:31](https://lobste.rs/s/fdwnzt/cloudflare_collaborates_with_leading) - [Cloudflare Collaborates With Leading Browsers to Develop a Privacy-First Protocol For the Global Internet](https://cloudflare.net/news/news-details/2026/Cloudflare-Collaborates-With-Leading-Browsers-to-Develop-a-Privacy-First-Protocol-For-the-Global-Internet/default.aspx)
* [2026-06-23, 16:06:03](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era) - [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/)
* [2026-06-23, 16:00:00](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Cuts 21,000 Jobs As It Embraces AI](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 15:31:21](https://news.ycombinator.com/item?id=48646659) - [Krea 2 Technical Report](https://www.krea.ai/blog/krea-2-technical-report)
* [2026-06-23, 15:00:00](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Considers Forcing Social Media Firms To Prioritize Trusted News](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 14:36:54](https://lobste.rs/s/cjnnk3/how_stray_j_ruined_my_evening) - [how a stray \&quot;j\&quot; ruined my evening](https://napkins.mtmn.name/posts/stray-jay.html)
* [2026-06-23, 14:29:29](https://lobste.rs/s/fhmvsf/performance_webassembly_runtimes_2026) - [Performance of WebAssembly runtimes in 2026](https://00f.net/2026/06/23/webassembly-runtimes-2026/)
* [2026-06-23, 14:24:21](https://news.ycombinator.com/item?id=48645437) - [Show HN: TikZ Editor – WYSIWYG editor for figures in LaTeX](https://tikz.dev/editor/)
* [2026-06-23, 13:47:31](https://lobste.rs/s/bcjwwn/vulnerability_reports_are_not_special) - [Vulnerability Reports Are Not Special Anymore](https://words.filippo.io/vuln-reports/)
* [2026-06-23, 12:46:26](https://lobste.rs/s/ufml52/record_type_inference_for_dummies) - [Record type inference for dummies](https://haskellforall.com/2026/06/record-type-inference-for-dummies)
* [2026-06-23, 12:00:13](https://lobste.rs/s/leh6g3/fexprs_vs_vtable_how_lispe_interpreter) - [FEXPRs vs. vtable: how LispE interpreter works](https://github.com/naver/lispe/wiki/2.7-FEXPR-vs.-vtable)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 11:00:00](https://hardware.slashdot.org/story/26/06/23/0528230/canada-plans-nuclear-renaissance-with-up-to-10-reactors-built-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Plans &apos;Nuclear Renaissance&apos; With Up To 10 Reactors Built By 2040](https://hardware.slashdot.org/story/26/06/23/0528230/canada-plans-nuclear-renaissance-with-up-to-10-reactors-built-by-2040?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 10:29:40](https://lobste.rs/s/y4hgjd/please_keep_code_descriptions_simple) - [Please keep code descriptions simple](https://akselmo.dev/posts/please-keep-code-descriptions-simple/)
* [2026-06-23, 08:58:55](https://lobste.rs/s/f2ixyf/it_s_only_when_you_look_back) - [It’s Only When You Look Back](https://www.markround.com/blog/2026/06/17/25-its-only-when-you-look-back/)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 07:00:00](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Nancy Grace Roman Space Telescope Arrives In Florida](https://science.slashdot.org/story/26/06/23/015233/nasas-nancy-grace-roman-space-telescope-arrives-in-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 05:25:04](https://lobste.rs/s/fzz7pf/low_tech_ai_elden_ring) - [The Low-Tech AI Of Elden Ring](https://nega.tv/posts/low-tech-ai-of-elden-ring.html)
* [2026-06-23, 03:30:00](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Installs Robots At Flagship EV Factory After Laying Off 1,300 Workers](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-22, 23:20:53](https://news.ycombinator.com/item?id=48637868) - [Why eval startups fail (2025)](https://thomasliao.com/eval-startups)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 21:05:44](https://news.ycombinator.com/item?id=48636188) - [Vector Graphics in Lil](http://beyondloom.com/blog/vectorgraphics.html)
* [2026-06-22, 20:23:42](https://lobste.rs/s/wnlece/memory_man_who_put_red_green_squiggles) - [In memory of the man who put red and green squiggles under words](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451)
* [2026-06-22, 18:03:03](https://news.ycombinator.com/item?id=48633643) - [A man was gifted his dream car by Kevin Mitnick, who he helped put in prison](https://www.thedrive.com/news/this-man-was-gifted-his-dream-car-by-the-notorious-hacker-he-put-in-prison)
* [2026-06-22, 17:50:40](https://news.ycombinator.com/item?id=48633473) - [Rhombus Language 1.0](https://blog.racket-lang.org/2026/06/rhombus-v1.0.html)
* [2026-06-22, 17:19:50](https://lobste.rs/s/lz3dbc/pledging_another_400_000_zig_software) - [Pledging Another $400,000 to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 13:27:03](https://lobste.rs/s/rq2t8j/why_drawing_tablet_brands_won_t) - [Why Drawing Tablet Brands Won&apos;t Collaborate on Linux FLOSS Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)
* [2026-06-22, 13:25:15](https://news.ycombinator.com/item?id=48629810) - [Statistics that live in your SQL](https://kolistat.com/blog/the-stats-duck-v0-6-0/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-22, 01:20:26](https://news.ycombinator.com/item?id=48624462) - [Remaking BBC test cards to teach you video processing](https://www.youtube.com/watch?v=U_6HxPkrgcg)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 14:48:10](https://news.ycombinator.com/item?id=48619434) - [Cointegration and Long-Horizon Forecasting (2025)](https://www.philadelphiafed.org/the-economy/cointegration-and-long-horizon-forecasting)
* [2026-06-21, 12:49:02](https://news.ycombinator.com/item?id=48618481) - [Printing Gaussian Splats](https://www.patreon.com/DanyBittel/posts/printing-splats-161333338)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 21:51:21](https://news.ycombinator.com/item?id=48613336) - [François Englert (1932 – 2026)](https://home.cern/francois-englert-1932-2026/)
* [2026-06-20, 18:58:14](https://news.ycombinator.com/item?id=48611896) - [Dirty Little Zine – a tool for making an 8 page printable Zine](https://dirtylittlezine.com/)
* [2026-06-20, 18:24:55](https://news.ycombinator.com/item?id=48611585) - [Millimeter wave technology drills 100 meters into granite](https://www.thinkgeoenergy.com/quaise-energy-achieves-100-meters-of-drilling-using-millimeter-wave-technology/)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
