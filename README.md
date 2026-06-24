# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [I taught a bucket to speak Git](https://www.tigrisdata.com/blog/objgit/) ([Comments](https://news.ycombinator.com/item?id=48661938)) - A quirky project turns a seemingly mundane everyday object, a bucket, into a Git repository showcasing creativity and technical ingenuity.

* [Introducing the MDN MCP server](https://developer.mozilla.org/en-US/blog/introducing-mdn-mcp-server/) ([Comments](https://lobste.rs/s/ttuhgn/introducing_mdn_mcp_server)) - Mozilla introduces a new MDN MCP server, advancing their developer tools for web developers.

* [Raspberry Pi Pico W as USB Wi-Fi Adapter](https://gitlab.com/baiyibai/pico-usb-wifi) ([Comments](https://news.ycombinator.com/item?id=48654676)) - A clever new use for the Raspberry Pi Pico W: transforming it into a functional USB Wi-Fi adapter.

* [RubyLLM: A Ruby framework for all major AI providers](https://rubyllm.com/) ([Comments](https://news.ycombinator.com/item?id=48660711)) - A new Ruby framework that simplifies integration with leading AI providers.

## Cultural and Societal Updates

* [Quebec town recognizes trees as living beings with rights](https://www.cbc.ca/news/canada/montreal/terrasse-vaudreil-quebec-tree-rights-9.7243634) ([Comments](https://news.ycombinator.com/item?id=48661536)) - An innovative move in Quebec recognizes trees as entities with legal rights, symbolizing a step towards environmental ethics.

* [UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition) ([Comments](https://lobste.rs/s/j3s5og/uk_wikipedia_workers_seek_union)) - Workers on Wikipedia push for union recognition, a significant step in the gig-work economy.

## Historical and Retrospective

* [A 25-Year-Old Blog Looks Back At 40 Years of Computing](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A retrospective covering how computing, and a specific blog chronicling its developments, have evolved over four decades.

* [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54) ([Comments](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996)) - Explore the GIMP 0.54.1 version from 1996 now available as a Flatpak package for vintage software enthusiasts.

* [Edsger Dijkstra's Library (Housed and Archived in Leuven, Belgium)](https://www.dijkstrascry.com/inventory) ([Comments](https://news.ycombinator.com/item?id=48661179)) - A look at the late computer scientist Edsger Dijkstra's library preserved in Leuven, Belgium.

## Science and Environment

* [Europe: The World's Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A study reveals Europe as the fastest-warming continent, emphasizing the urgency to tackle climate change.

* [Mushroom Behind 'Tiny Human' Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&utm_medium=feed)) - A mysterious fungus causing unexplainable visual effects has puzzled scientists, as it lacks the typical psychedelic genes.

## Technical Failures and Glitches

* [Boffin claims Microsoft's 'quantum leap' is invalid due to 'basic Python errors'](https://www.theregister.com/research/2026/06/24/boffin-claims-microsofts-supposed-quantum-leap-does-not-compute-due-to-basic-python-errors/5260489) ([Comments](https://news.ycombinator.com/item?id=48661535)) - A researcher's analysis questions Microsoft's recent quantum achievement due to alleged Python coding errors.

## Notable Industry Changes

* [Venezuela reveals $240B in debt it cannot pay (~$100B more than expected)](https://www.euronews.com/business/2026/06/24/venezuela-plans-biggest-debt-restructuring-in-history-after-maduros-fall) ([Comments](https://news.ycombinator.com/item?id=48661095)) - Venezuela faces revelations about a larger-than-expected national debt as it plans for a historic restructuring.

* [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/) ([Comments](https://news.ycombinator.com/item?id=48659257)) - A new AI-focused chip developed jointly by OpenAI and Broadcom promises optimized inference for large language models.

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

* [2026-06-24, 16:04:26](https://news.ycombinator.com/item?id=48661938) - [I taught a bucket to speak Git](https://www.tigrisdata.com/blog/objgit/)
* [2026-06-24, 15:56:58](https://lobste.rs/s/j3s5og/uk_wikipedia_workers_seek_union) - [UK Wikipedia Workers seek union recognition](https://utaw.tech/news/wikipedia-recognition)
* [2026-06-24, 15:56:19](https://news.ycombinator.com/item?id=48661825) - [John Carmack on the mistakes around Quake that ruined id software](https://twitter.com/ID_AA_Carmack/status/2069799283369345247)
* [2026-06-24, 15:48:03](https://lobste.rs/s/ttuhgn/introducing_mdn_mcp_server) - [Introducing the MDN MCP server](https://developer.mozilla.org/en-US/blog/introducing-mdn-mcp-server/)
* [2026-06-24, 15:37:20](https://news.ycombinator.com/item?id=48661536) - [Quebec town recognizes trees as living beings with rights](https://www.cbc.ca/news/canada/montreal/terrasse-vaudreil-quebec-tree-rights-9.7243634)
* [2026-06-24, 15:37:18](https://news.ycombinator.com/item?id=48661535) - [Boffin claims Microsoft&apos;s \&quot;quantum leap\&quot; is invalid due to \&quot;basic Python errors\&quot;](https://www.theregister.com/research/2026/06/24/boffin-claims-microsofts-supposed-quantum-leap-does-not-compute-due-to-basic-python-errors/5260489)
* [2026-06-24, 15:10:27](https://news.ycombinator.com/item?id=48661179) - [Edsger Dijkstra&apos;s Library (Housed and Archived in Leuven, Belgium)](https://www.dijkstrascry.com/inventory)
* [2026-06-24, 15:05:41](https://news.ycombinator.com/item?id=48661095) - [Venezuela reveals $240B in debt it cannot pay (~$100B more than expected)](https://www.euronews.com/business/2026/06/24/venezuela-plans-biggest-debt-restructuring-in-history-after-maduros-fall)
* [2026-06-24, 15:00:00](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A 25-Year-Old Blog Looks Back At 40 Years of Computing](https://hardware.slashdot.org/story/26/06/24/0616251/a-25-year-old-blog-looks-back-at-40-years-of-computing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 14:52:52](https://lobste.rs/s/hygtig/slint_1_17_released) - [Slint 1.17 Released](https://slint.dev/blog/slint-1.17-released)
* [2026-06-24, 14:41:41](https://news.ycombinator.com/item?id=48660711) - [RubyLLM: A Ruby framework for all major AI providers](https://rubyllm.com/)
* [2026-06-24, 14:38:30](https://news.ycombinator.com/item?id=48660671) - [Running Windows Games on a Hobby OS with Wine](https://astral-os.org/posts/2026/04/03/wine-on-astral.html)
* [2026-06-24, 14:32:12](https://news.ycombinator.com/item?id=48660579) - [PR spam today looks like email spam in the early 2000s](https://www.greptile.com/blog/prs-on-openclaw)
* [2026-06-24, 14:27:02](https://lobste.rs/s/aj0e9u/porting_wine_new_hobby_os) - [Porting WINE to a new Hobby OS](https://astral-os.org/posts/2026/04/03/wine-on-astral.html)
* [2026-06-24, 14:14:18](https://news.ycombinator.com/item?id=48660267) - [Show HN: Nub – A Bun-like all-in-one toolkit for Node.js](https://github.com/nubjs/nub)
* [2026-06-24, 13:57:08](https://lobste.rs/s/0qfxpj/aol_was_down_1996) - [AOL was down (1996)](https://ngrok.com/blog/aol-was-down-1996)
* [2026-06-24, 13:14:39](https://news.ycombinator.com/item?id=48659257) - [OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip/)
* [2026-06-24, 13:08:52](https://news.ycombinator.com/item?id=48659165) - [Stealing Is a Skill](https://ben-mini.com/2026/stealing-is-a-skill)
* [2026-06-24, 12:57:31](https://news.ycombinator.com/item?id=48659040) - [Systems optimization should be part of CI/CD](https://ucbskyadrs.github.io/blog/levi/)
* [2026-06-24, 12:31:43](https://news.ycombinator.com/item?id=48658718) - [Founding a company in Germany: €9600, 152 days and I still can&apos;t send an invoice](https://paolino.me/founding-a-company-in-germany/)
* [2026-06-24, 11:52:12](https://news.ycombinator.com/item?id=48658361) - [Minimus container images are now free](https://images.minimus.io/)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 11:24:21](https://lobste.rs/s/kzw3rt/how_hackers_reverse_math_random) - [How hackers reverse Math.random()](https://www.youtube.com/watch?v=XDsYPXRCXAs)
* [2026-06-24, 11:21:32](https://news.ycombinator.com/item?id=48658095) - [Haystack: Open-Source AI Framework for Production Ready Agents, RAG](https://haystack.deepset.ai/)
* [2026-06-24, 11:00:00](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mushroom Behind &apos;Tiny Human&apos; Visions Lacks Genes For Known Psychedelics](https://science.slashdot.org/story/26/06/24/0624256/mushroom-behind-tiny-human-visions-lacks-genes-for-known-psychedelics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 10:11:58](https://lobste.rs/s/6vsofh/joy_power_understanding) - [The Joy and Power of Understanding](https://binaryigor.com/the-joy-and-power-of-understanding.html)
* [2026-06-24, 09:48:26](https://lobste.rs/s/a7thxr/coming_loop) - [The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)
* [2026-06-24, 09:37:56](https://lobste.rs/s/cmcklp/flatpak_package_for_gimp_0_54_1_1996) - [Flatpak package for GIMP 0.54.1 (1996)](https://gitlab.gnome.org/balooii/gimp-0.54)
* [2026-06-24, 09:00:00](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe: The World&apos;s Fastest-Warming Continent](https://news.slashdot.org/story/26/06/24/066249/europe-the-worlds-fastest-warming-continent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-24, 08:50:41](https://news.ycombinator.com/item?id=48657030) - [We’re making Bunny DNS free](https://bunny.net/blog/were-making-bunny-dns-free/)
* [2026-06-24, 07:01:21](https://news.ycombinator.com/item?id=48656219) - [Ashby (YC W19) Is Hiring EMEA Engineers Who Can Design](https://www.ashbyhq.com/careers?ashby_jid=87b96eef-edc1-4de4-adb6-d460126d02f8&amp;utm_source=hn)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 06:18:03](https://lobste.rs/s/dl0yiv/making_rust_supply_chain_attacks_harder) - [Making Rust supply chain attacks harder with Cackle (2023)](https://davidlattimore.github.io/posts/2023/10/09/making-supply-chain-attacks-harder.html)
* [2026-06-24, 06:00:00](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US AI Stock Sell-Off Shakes Markets From Wall Street To Asia](https://news.slashdot.org/story/26/06/24/0551205/us-ai-stock-sell-off-shakes-markets-from-wall-street-to-asia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2026-06-23, 18:00:00](https://news.slashdot.org/story/26/06/23/175226/digital-euro-expected-to-launch-by-2029-after-eu-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digital Euro Expected To Launch By 2029 After EU Backing](https://news.slashdot.org/story/26/06/23/175226/digital-euro-expected-to-launch-by-2029-after-eu-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 17:00:00](https://tech.slashdot.org/story/26/06/23/1658201/meta-launches-cheaper-smart-glasses-without-ray-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Launches Cheaper Smart Glasses Without Ray-Ban](https://tech.slashdot.org/story/26/06/23/1658201/meta-launches-cheaper-smart-glasses-without-ray-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 16:20:31](https://lobste.rs/s/fdwnzt/cloudflare_collaborates_with_leading) - [Cloudflare Collaborates With Leading Browsers to Develop a Privacy-First Protocol For the Global Internet](https://cloudflare.net/news/news-details/2026/Cloudflare-Collaborates-With-Leading-Browsers-to-Develop-a-Privacy-First-Protocol-For-the-Global-Internet/default.aspx)
* [2026-06-23, 16:06:03](https://lobste.rs/s/sdqqbb/keeping_web_open_private_bot_era) - [Keeping the Web Open and Private in the Bot Era](https://blog.mozilla.org/en/privacy-security/keeping-the-web-open-and-private-in-the-bot-era/)
* [2026-06-23, 16:00:00](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Cuts 21,000 Jobs As It Embraces AI](https://developers.slashdot.org/story/26/06/23/0548201/oracle-cuts-21000-jobs-as-it-embraces-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 15:31:21](https://news.ycombinator.com/item?id=48646659) - [Krea 2: SOTA open-weights 12B image model](https://www.krea.ai/blog/krea-2-technical-report)
* [2026-06-23, 15:00:00](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Considers Forcing Social Media Firms To Prioritize Trusted News](https://tech.slashdot.org/story/26/06/23/0539208/uk-considers-forcing-social-media-firms-to-prioritize-trusted-news?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 14:36:54](https://lobste.rs/s/cjnnk3/how_stray_j_ruined_my_evening) - [how a stray \&quot;j\&quot; ruined my evening](https://napkins.mtmn.name/posts/stray-jay.html)
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
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 17:50:40](https://news.ycombinator.com/item?id=48633473) - [Rhombus Language 1.0](https://blog.racket-lang.org/2026/06/rhombus-v1.0.html)
* [2026-06-22, 17:19:50](https://lobste.rs/s/lz3dbc/pledging_another_400_000_zig_software) - [Pledging Another $400,000 to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 14:00:35](https://news.ycombinator.com/item?id=48630254) - [Genuinely, my all-time favourite image: Mamenchisaurus hochuanensis](https://svpow.com/2026/06/04/genuinely-my-all-time-favourite-image-mamenchisaurus-hochuanensis/)
* [2026-06-22, 13:25:15](https://news.ycombinator.com/item?id=48629810) - [Statistics that live in your SQL](https://kolistat.com/blog/the-stats-duck-v0-6-0/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 17:36:23](https://news.ycombinator.com/item?id=48620848) - [Show HN: Pure Effect – Reproduce production bugs on your laptop without a DB](https://pure-effect.org)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 12:49:02](https://news.ycombinator.com/item?id=48618481) - [Printing Gaussian Splats](https://www.patreon.com/DanyBittel/posts/printing-splats-161333338)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 21:51:21](https://news.ycombinator.com/item?id=48613336) - [François Englert (1932 – 2026)](https://home.cern/francois-englert-1932-2026/)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 03:55:19](https://news.ycombinator.com/item?id=48606222) - [A Practical Guide to SSH Tunnels: Local and Remote Port Forwarding](https://labs.iximiuz.com/tutorials/ssh-tunnels)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
