# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Technology

* [US To Expedite Plan For Nuclear Reactor On the Moon](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. accelerates its vision for a nuclear-powered infrastructure on the Moon, signaling a significant leap in space technology. [Comments](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [NASA's Curiosity picks up new skills](https://www.jpl.nasa.gov/news/marking-13-years-on-mars-nasas-curiosity-picks-up-new-skills/) - As it celebrates 13 years on Mars, the Curiosity rover showcases fresh capabilities in space exploration. [Comments](https://news.ycombinator.com/item?id=44790271).

## Artificial Intelligence

* [Google Agrees To Pause AI Workloads To Protect the Grid When Power Demand Spikes](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google takes a responsible approach to ease grid stress by pausing AI processes during energy spikes. [Comments](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [The Uproar Over Vogue's AI-generated Ad Isn't Just About Fashion](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Vogue finds itself at the center of debates as the intersection of AI and creativity continues to stir controversy. [Comments](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Every reason why I hate AI](https://malwaretech.com/2025/08/every-reason-why-i-hate-ai.html) - A deep dive into the fears and ethical concerns surrounding artificial intelligence. [Comments](https://lobste.rs/s/z3zgvi/every_reason_why_i_hate_ai).

## Innovative Computing

* [Markdown Monster](https://git.sr.ht/~xigoi/markdown-monster/blob/master/monster.md) - Explore the potential of Markdown Monster, a tool aimed at simplifying documentation workflows. [Comments](https://lobste.rs/s/s69lnq/markdown_monster).

* [Getting an LLM to Play Text Adventures](https://entropicthoughts.com/getting-an-llm-to-play-text-adventures) - A creative experiment in using language models to navigate text-based adventures. [Comments](https://lobste.rs/s/vfjld7/getting_llm_play_text_adventures).

* [3D Line Drawings](https://amritkwatra.com/experiments/3d-line-drawings) - Delve into an artistic exploration of creating 3D illusions using line art. [Comments](https://news.ycombinator.com/item?id=44792441).

## Culture and Entertainment

* [Disney Scrapped Deepfakes For Moana and Tron To Avoid 'Bad Publicity'](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Disney reevaluates using deepfake technology in its franchises to avoid potential backlash. [Comments](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [Show HN: I spent 6 years building a ridiculous wooden pixel display](https://benholmen.com/blog/kilopixel/) - An intricate pixel display crafted from wood mesmerizes with its unique execution. [Comments](https://news.ycombinator.com/item?id=44787902).

* [DrawAFish.com Postmortem](https://aldenhallak.com/blog/posts/draw-a-fish-postmortem.html) - Behind the scenes of a creative platform for communal cartoon fish drawing. [Comments](https://news.ycombinator.com/item?id=44784743).

## Technology Impact on Society

* [Engineer Restores Pay Phones For Free Public Use](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The nostalgic return of pay phones in a modern, service-oriented twist. [Comments](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&utm_medium=feed).

* [What Happens To Your Data If You Stop Paying for Cloud Storage?](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining the risks tied to unpaid cloud services and data retention. [Comments](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed).

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

* [2025-08-05, 03:30:00](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US To Expedite Plan For Nuclear Reactor On the Moon](https://science.slashdot.org/story/25/08/04/2232239/us-to-expedite-plan-for-nuclear-reactor-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 02:45:50](https://lobste.rs/s/ztiaan/when_vibe_coding_isn_t_source_code_prompt) - [When vibe coding, isn&apos;t the source code the prompt?](https://boston.conman.org/2025/08/04.1)
* [2025-08-05, 01:45:00](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Agrees To Pause AI Workloads To Protect the Grid When Power Demand Spikes](https://tech.slashdot.org/story/25/08/05/0144232/google-agrees-to-pause-ai-workloads-to-protect-the-grid-when-power-demand-spikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-05, 00:02:00](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Scrapped Deepfakes For Moana and Tron To Avoid &apos;Bad Publicity&apos; ](https://entertainment.slashdot.org/story/25/08/04/235206/disney-scrapped-deepfakes-for-moana-and-tron-to-avoid-bad-publicity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 23:20:00](https://yro.slashdot.org/story/25/08/04/2223229/rivian-sues-to-sell-its-evs-directly-in-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rivian Sues To Sell Its EVs Directly In Ohio](https://yro.slashdot.org/story/25/08/04/2223229/rivian-sues-to-sell-its-evs-directly-in-ohio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 23:16:12](https://news.ycombinator.com/item?id=44792441) - [3D Line Drawings](https://amritkwatra.com/experiments/3d-line-drawings)
* [2025-08-04, 23:13:37](https://lobste.rs/s/z3zgvi/every_reason_why_i_hate_ai) - [Every reason why I hate Ai](https://malwaretech.com/2025/08/every-reason-why-i-hate-ai.html)
* [2025-08-04, 23:10:51](https://news.ycombinator.com/item?id=44792399) - [EconTeen – Financial literacy lessons and tools for teens](https://econteen.com/)
* [2025-08-04, 22:40:00](https://hardware.slashdot.org/story/25/08/04/2218225/hyundai-to-help-build-nuclear-powered-datacenter-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai To Help Build Nuclear-Powered Datacenter In Texas](https://hardware.slashdot.org/story/25/08/04/2218225/hyundai-to-help-build-nuclear-powered-datacenter-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 22:24:20](https://news.ycombinator.com/item?id=44792005) - [Show HN: I&apos;ve been building an ERP for manufacturing for the last 3 years](https://github.com/crbnos/carbon)
* [2025-08-04, 22:22:00](https://news.ycombinator.com/item?id=44791984) - [Thingino: Open-Source Firmware for IP Cameras](https://thingino.com/)
* [2025-08-04, 22:16:41](https://lobste.rs/s/s69lnq/markdown_monster) - [Markdown Monster](https://git.sr.ht/~xigoi/markdown-monster/blob/master/monster.md)
* [2025-08-04, 22:00:00](https://it.slashdot.org/story/25/08/04/2032214/crowdstrike-investigated-320-north-korean-it-worker-cases-in-the-past-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CrowdStrike Investigated 320 North Korean IT Worker Cases In the Past Year](https://it.slashdot.org/story/25/08/04/2032214/crowdstrike-investigated-320-north-korean-it-worker-cases-in-the-past-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 21:53:33](https://lobste.rs/s/24bo0t/toyota_corolla_programming) - [The Toyota Corolla Of Programming](https://deprogrammaticaipsum.com/the-toyota-corolla-of-programming/)
* [2025-08-04, 21:20:00](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Uproar Over Vogue&apos;s AI-generated Ad Isn&apos;t Just About Fashion](https://tech.slashdot.org/story/25/08/04/208259/the-uproar-over-vogues-ai-generated-ad-isnt-just-about-fashion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 21:00:27](https://lobste.rs/s/b5a2ii/p_fast_trie_lexically_ordered_hash_map) - [p-fast trie: lexically ordered hash map](https://dotat.at/@/2025-08-04-p-fast-trie.html)
* [2025-08-04, 20:40:00](https://slashdot.org/story/25/08/04/200209/chatgpt-nears-700-million-weekly-users-up-4x-from-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Nears 700 Million Weekly Users, Up 4x From Last Year](https://slashdot.org/story/25/08/04/200209/chatgpt-nears-700-million-weekly-users-up-4x-from-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 20:23:20](https://news.ycombinator.com/item?id=44790944) - [Once a death sentence, cardiac amyloidosis is finally treatable](https://www.nytimes.com/2025/08/04/well/cardiac-amyloidosis.html)
* [2025-08-04, 20:02:00](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineer Restores Pay Phones For Free Public Use](https://mobile.slashdot.org/story/25/08/04/1948238/engineer-restores-pay-phones-for-free-public-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 19:32:11](https://news.ycombinator.com/item?id=44790422) - [Content-Aware Spaced Repetition](https://www.giacomoran.com/blog/content-aware-sr/)
* [2025-08-04, 19:29:47](https://news.ycombinator.com/item?id=44790385) - [Passkeys are just passwords that require a password manager](https://danfabulich.medium.com/passkeys-are-just-passwords-that-require-a-password-manager-ebb7f2fdcadf)
* [2025-08-04, 19:24:00](https://science.slashdot.org/story/25/08/04/1924249/world-in-15-trillion-plastics-crisis-hitting-health-from-infancy-to-old-age-report-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World in $1.5 Trillion &apos;Plastics Crisis&apos; Hitting Health From Infancy To Old Age, Report Warns](https://science.slashdot.org/story/25/08/04/1924249/world-in-15-trillion-plastics-crisis-hitting-health-from-infancy-to-old-age-report-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 19:23:57](https://lobste.rs/s/vfjld7/getting_llm_play_text_adventures) - [Getting an LLM to Play Text Adventures](https://entropicthoughts.com/getting-an-llm-to-play-text-adventures)
* [2025-08-04, 19:20:38](https://news.ycombinator.com/item?id=44790271) - [NASA&apos;s Curiosity picks up new skills](https://www.jpl.nasa.gov/news/marking-13-years-on-mars-nasas-curiosity-picks-up-new-skills/)
* [2025-08-04, 18:45:00](https://it.slashdot.org/story/25/08/04/1845243/the-great-indian-it-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Great Indian IT Squeeze](https://it.slashdot.org/story/25/08/04/1845243/the-great-indian-it-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 18:07:28](https://lobste.rs/s/q1vfez/generativity_pattern_rust) - [The Generativity Pattern in Rust](https://arhan.sh/blog/the-generativity-pattern-in-rust/)
* [2025-08-04, 18:04:00](https://tech.slashdot.org/story/25/08/04/184253/google-tells-iphone-buyers-to-just-change-your-phone-after-apples-ai-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tells iPhone Buyers To &apos;Just Change Your Phone&apos; After Apple&apos;s AI Delays](https://tech.slashdot.org/story/25/08/04/184253/google-tells-iphone-buyers-to-just-change-your-phone-after-apples-ai-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 17:39:59](https://news.ycombinator.com/item?id=44789068) - [Ask HN: What trick of the trade took you too long to learn?](https://news.ycombinator.com/item?id=44789068)
* [2025-08-04, 17:35:25](https://lobste.rs/s/ty7aep/few_things_about_anchor_element_s_href_you) - [A Few Things About the Anchor Element’s href You Might Not Have Known](https://blog.jim-nielsen.com/2025/href-value-possibilities/)
* [2025-08-04, 17:21:00](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens To Your Data If You Stop Paying for Cloud Storage?](https://hardware.slashdot.org/story/25/08/04/1649224/what-happens-to-your-data-if-you-stop-paying-for-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 16:40:00](https://slashdot.org/story/25/08/04/1253234/deltas-dynamic-ai-pricing-plan-sounds-different-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Dynamic AI Pricing Plan Sounds Different Now](https://slashdot.org/story/25/08/04/1253234/deltas-dynamic-ai-pricing-plan-sounds-different-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 16:16:21](https://news.ycombinator.com/item?id=44787902) - [Show HN: I spent 6 years building a ridiculous wooden pixel display](https://benholmen.com/blog/kilopixel/)
* [2025-08-04, 16:01:00](https://it.slashdot.org/story/25/08/04/1429251/microsoft-used-china-based-engineers-to-support-product-recently-hacked-by-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Used China-Based Engineers to Support Product Recently Hacked by China](https://it.slashdot.org/story/25/08/04/1429251/microsoft-used-china-based-engineers-to-support-product-recently-hacked-by-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-04, 15:56:40](https://news.ycombinator.com/item?id=44787631) - [Qwen-Image: Crafting with native text rendering](https://qwenlm.github.io/blog/qwen-image/)
* [2025-08-04, 15:46:47](https://lobste.rs/s/fn4ozc/introducing_luzer_coverage_guided_lua) - [Introducing luzer, a coverage-guided Lua fuzzing engine](https://bronevichok.ru/posts/introducing-luzer.html)
* [2025-08-04, 15:41:30](https://news.ycombinator.com/item?id=44787374) - [Customizing tmux](https://evgeniipendragon.com/posts/customizing-tmux-and-making-it-less-dreadful/)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 14:45:16](https://lobste.rs/s/qhui4n/complex_iterators_are_slow) - [Complex Iterators are Slow](https://caolan.uk/notes/2025-07-31_complex_iterators_are_slow.cm)
* [2025-08-04, 14:38:43](https://lobste.rs/s/fshwoc/netbsd_new_build_cluster_speeds_up_daily) - [NetBSD New build cluster speeds up daily autobuilds](https://blog.netbsd.org/tnf/entry/new_build_cluster_speeds_up)
* [2025-08-04, 14:35:53](https://lobste.rs/s/ome2lo/friendly_introduction_svg) - [A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)
* [2025-08-04, 14:33:49](https://news.ycombinator.com/item?id=44786367) - [Objects should shut up](https://dustri.org/b/objects-should-shut-the-fuck-up.html)
* [2025-08-04, 14:18:39](https://lobste.rs/s/cihzjk/netbsd_11_0_release_process_underway) - [NetBSD 11.0 release process underway](https://blog.netbsd.org/tnf/entry/netbsd_11_0_release_process)
* [2025-08-04, 14:09:58](https://lobste.rs/s/ueocpa/how_we_made_json_stringify_more_than_twice) - [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)
* [2025-08-04, 14:09:33](https://news.ycombinator.com/item?id=44786005) - [How we made JSON.stringify more than twice as fast](https://v8.dev/blog/json-stringify)
* [2025-08-04, 13:59:08](https://lobste.rs/s/i81fly/how_perplexity_is_evading_anti_crawling) - [How Perplexity is Evading Anti-crawling Measures](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 13:39:30](https://news.ycombinator.com/item?id=44785636) - [Perplexity is using stealth, undeclared crawlers to evade no-crawl directives](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 13:21:02](https://lobste.rs/s/7raysa/future_all_food_will_be_cooked_microwave) - [In the Future All Food Will Be Cooked in a Microwave, and if You Can’t Deal With That Then You Need to Get Out of the Kitchen](https://www.colincornaby.me/2025/08/in-the-future-all-food-will-be-cooked-in-a-microwave-and-if-you-cant-deal-with-that-then-you-need-to-get-out-of-the-kitchen/)
* [2025-08-04, 13:05:08](https://news.ycombinator.com/item?id=44785224) - [My Ideal Array Language](https://www.ashermancinelli.com/csblog/2025-7-20-Ideal-Array-Language.html)
* [2025-08-04, 12:59:49](https://lobste.rs/s/ge9tvj/systematic_evaluation_openbsd_s) - [A systematic evaluation of OpenBSD’s mitigations (2019)](https://isopenbsdsecu.re/)
* [2025-08-04, 12:55:03](https://lobste.rs/s/w2f51x/polish_train_maker_is_suing_hackers_who) - [Polish Train Maker Is Suing the Hackers Who Exposed Its Anti-Repair Tricks](https://www.ifixit.com/News/112008/polish-train-maker-is-suing-the-hackers-who-exposed-its-anti-repair-tricks)
* [2025-08-04, 12:51:20](https://news.ycombinator.com/item?id=44785107) - [Century-old stone “tsunami stones” dot Japan&apos;s coastline (2015)](https://www.smithsonianmag.com/smart-news/century-old-warnings-against-tsunamis-dot-japans-coastline-180956448/)
* [2025-08-04, 12:48:19](https://news.ycombinator.com/item?id=44785080) - [Is the interstellar object 3I/ATLAS alien technology? [pdf]](https://lweb.cfa.harvard.edu/~loeb/HCL25.pdf)
* [2025-08-04, 12:37:54](https://lobste.rs/s/ockeh1/htmx_is_hard_so_let_s_get_it_right) - [HTMX is hard so let&apos;s get it right](https://github.com/BookOfCooks/blog/blob/master/htmx-is-hard-so-lets-get-it-right.md)
* [2025-08-04, 12:10:22](https://news.ycombinator.com/item?id=44784743) - [DrawAFish.com Postmortem](https://aldenhallak.com/blog/posts/draw-a-fish-postmortem.html)
* [2025-08-04, 10:33:21](https://lobste.rs/s/ye0emy/rust_python_typescript_new_trifecta) - [Rust, Python, and TypeScript: the new trifecta](https://smallcultfollowing.com/babysteps/blog/2025/07/31/rs-py-ts-trifecta/)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 09:13:55](https://lobste.rs/s/qqziki/more_retrocomputing_less_nostalgia) - [More retrocomputing, less nostalgia](https://datagubbe.se/retnost/)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 03:08:12](https://lobste.rs/s/tflj1y/so_you_want_parse_pdf) - [So you want to parse a PDF?](https://eliot-jones.com/2025/8/pdf-parsing-xref)
* [2025-08-04, 02:53:51](https://lobste.rs/s/t7osqo/q_programming_language) - [The Q Programming Language](https://git.urbach.dev/cli/q)
* [2025-08-04, 02:08:41](https://lobste.rs/s/ddphh5/maybe_fastest_disk_usage_program_on_macos) - [Maybe the Fastest Disk Usage Program on macOS](https://healeycodes.com/maybe-the-fastest-disk-usage-program-on-macos)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
* [2025-08-04, 00:50:49](https://lobste.rs/s/cgauwh/future_is_not_self_hosted) - [The Future is NOT Self-Hosted](https://www.drewlyton.com/story/the-future-is-not-self-hosted/)
* [2025-08-03, 20:21:00](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss) - [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss)
* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-02, 20:43:07](https://news.ycombinator.com/item?id=44771268) - [Show HN: Mathpad – Physical keypad for typing math symbols](https://www.crowdsupply.com/summa-cogni/mathpad)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 17:32:25](https://news.ycombinator.com/item?id=44769547) - [I tried to replace myself with ChatGPT in my English class](https://lithub.com/what-happened-when-i-tried-to-replace-myself-with-chatgpt-in-my-english-classroom/)
* [2025-08-02, 16:37:35](https://news.ycombinator.com/item?id=44769009) - [The creative tension between developer and language](https://krishna.github.io/posts/creative-tension-between-developer-and-language/)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 14:03:06](https://news.ycombinator.com/item?id=44767727) - [Indian Sign Painting: A typeface designer&apos;s take on the craft](https://bl.ag/indian-sign-painting-a-typeface-designers-take-on-the-craft/)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 10:59:38](https://news.ycombinator.com/item?id=44766551) - [Hiroshima (1946)](https://www.newyorker.com/magazine/1946/08/31/hiroshima)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 04:03:52](https://news.ycombinator.com/item?id=44764823) - [Before Sebald Was Great](https://www.thenation.com/article/culture/wg-sebald-silent-catastrophes/)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 16:36:58](https://news.ycombinator.com/item?id=44759172) - [Deterministic Simulation Testing in Rust: A Theater of State Machines](https://www.polarsignals.com/blog/posts/2025/07/08/dst-rust)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 15:41:50](https://news.ycombinator.com/item?id=44758463) - [OpenIPC: Open IP Camera Firmware](https://openipc.org/à)
* [2025-08-01, 15:15:38](https://news.ycombinator.com/item?id=44758068) - [The history of the Schwartzian Transform (2016)](https://www.perl.com/article/the-history-of-the-schwartzian-transform/)
* [2025-08-01, 12:33:20](https://news.ycombinator.com/item?id=44755827) - [How we built Bluey’s world](https://www.itsnicethat.com/features/how-we-built-bluey-s-world-cartoon-background-scenery-art-director-catriona-drummond-animation-090725)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
