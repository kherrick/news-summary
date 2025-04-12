# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Security

* [Chrome To Patch Decades-Old 'Browser History Sniffing' Flaw That Let Sites Peek At Your History](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A longstanding vulnerability in Chrome's browser history feature is being fixed to prevent websites from accessing private user data.

* [America's Justice Department Shuts Down Its Cryptocurrency Fraud Unit](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Justice Department disbands its cryptocurrency fraud unit amid growing concerns over its effectiveness in tackling digital financial crime.

* [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks) - AI hallucinations introduce new risks as attackers exploit them to distribute malicious code through misleading package names.

## Scientific Discoveries

* [For the First Time Astronomers Watch a Black Hole 'Wake Up' in Real-Time](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists manage to observe the dynamic activities of a black hole's awakening for the first time.

* [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&from=rss) - Researchers detail the intricate neural network in mice responsible for vision, advancing our understanding of brain connectivity.

## Programming and Development

* [Zod v4 Beta](https://v4.zod.dev/v4) - A new beta release of the popular schema declaration and validation library brings updates and improvements.

* [Shadertoys ported to Rust GPU](https://rust-gpu.github.io/blog/2025/04/10/shadertoys) - A project successfully transitions Shadertoys to Rust GPU, showcasing advancements in shader programming with Rust.

* [Creating 256 Bytes of RAM (in a simulation)](https://www.youtube.com/watch?v=HGkuRp5HfH8) - A YouTube project experiments with simulating a minimalist 256-byte RAM environment.

## Society and Environment

* [Air pollution fell substantially as Paris restricted car traffic](https://www.washingtonpost.com/climate-solutions/2025/04/12/air-pollution-paris-health-cars/) - Paris demonstrates significant environmental benefits by limiting vehicular traffic, leading to cleaner air.

* [Germany's 'Universal Basic Income' Experiment Proves It Doesn't Encourage Unemployment](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The results of Germany's experiment indicate that universal basic income does not act as a disincentive for employment.

## Engineering and Innovations

* [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&from=rss) - Novel crystal structures improve the mechanical properties of 3D-printed metals.

* [The Solid-State Shift: Reinventing the Transformer for Modern Grids](https://www.powermag.com/the-solid-state-shift-reinventing-the-transformer-for-modern-grids/) - Engineers explore upgraded transformers to meet the demands of contemporary power grids.

## Artificial Intelligence Trends

* [Google is winning on every AI front](https://www.thealgorithmicbridge.com/p/google-is-winning-on-every-ai-front) - An analysis of Google's dominance and strategic advancements in artificial intelligence.

* [Ex-OpenAI Staffers File Amicus Brief Opposing the Company's For-Profit Transition](https://slashdot.org/story/25/04/12/010247/ex-openai-staffers-file-amicus-brief-opposing-the-companys-for-profit-transition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Former OpenAI staffers challenge the organization's controversial shift to a for-profit model.

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

* [2025-04-12, 21:41:00](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Chrome To Patch Decades-Old &apos;Browser History Sniffing&apos; Flaw That Let Sites Peek At Your History](https://yro.slashdot.org/story/25/04/12/2054251/chrome-to-patch-decades-old-browser-history-sniffing-flaw-that-let-sites-peek-at-your-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 21:03:17](https://news.ycombinator.com/item?id=43667925) - [Zod v4 Beta](https://v4.zod.dev/v4)
* [2025-04-12, 20:56:48](https://news.ycombinator.com/item?id=43667887) - [Ask HN: How do you monetize personal code if it&apos;s not an \&quot;app\&quot;?](https://news.ycombinator.com/item?id=43667887)
* [2025-04-12, 20:56:00](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss) - [How The Pentagon Is Adapting To China&apos;s Technological Rise](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss)
* [2025-04-12, 20:41:00](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Justice Department Shuts Down Its Cryptocurrency Fraud Unit](https://news.slashdot.org/story/25/04/12/1722247/americas-justice-department-shuts-down-its-cryptocurrency-fraud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 20:31:27](https://lobste.rs/s/apb8w3/cl_yasboi_yet_another_starter) - [cl-yasboi: Yet Another Starter Boilerplate for Common Lisp](https://github.com/sebastiancarlos/cl-yasboi)
* [2025-04-12, 20:00:12](https://news.ycombinator.com/item?id=43667494) - [The 5 levels of configuration languages](https://beza1e1.tuxen.de/config_levels.html)
* [2025-04-12, 19:41:00](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [For the First Time Astronomers Watch a Black Hole &apos;Wake Up&apos; in Real-Time](https://science.slashdot.org/story/25/04/12/1928248/for-the-first-time-astronomers-watch-a-black-hole-wake-up-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 19:23:14](https://lobste.rs/s/ozmiau/creating_256_bytes_ram_simulation) - [Creating 256 Bytes of RAM (in a simulation)](https://www.youtube.com/watch?v=HGkuRp5HfH8)
* [2025-04-12, 19:02:26](https://news.ycombinator.com/item?id=43667061) - [Show HN: memEx, a personal knowledge base inspired by zettlekasten and org-mode](https://gitea.bubbletea.dev/shibao/memex)
* [2025-04-12, 19:00:58](https://lobste.rs/s/pylbkw/zcs_entity_component_system_zig) - [ZCS — An Entity Component System in Zig](https://gamesbymason.com/blog/2025/zcs/)
* [2025-04-12, 18:55:17](https://news.ycombinator.com/item?id=43667010) - [Why is there a \&quot;small house\&quot; in IBM&apos;s Code page 437?](https://blog.glyphdrawing.club/why-is-there-a-small-house-in-ibm-s-code-page-437/)
* [2025-04-12, 18:41:00](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Germany&apos;s &apos;Universal Basic Income&apos; Experiment Proves It Doesn&apos;t Encourage Unmployment](https://yro.slashdot.org/story/25/04/12/0351222/germanys-universal-basic-income-experiment-proves-it-doesnt-encourage-unmployment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 18:23:07](https://news.ycombinator.com/item?id=43666778) - [The Solid-State Shift: Reinventing the Transformer for Modern Grids](https://www.powermag.com/the-solid-state-shift-reinventing-the-transformer-for-modern-grids/)
* [2025-04-12, 17:41:00](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Industry Tells US Congress:  &apos;We Need Energy&apos;](https://hardware.slashdot.org/story/25/04/12/0633243/ai-industry-tells-us-congress-we-need-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 17:40:09](https://news.ycombinator.com/item?id=43666439) - [Nice Things with SVG](https://fuma-nama.vercel.app/blog/svg-art)
* [2025-04-12, 17:26:28](https://news.ycombinator.com/item?id=43666341) - [Dual Kickstart ROM Replacement for Amiga](https://github.com/cdhooper/kicksmash32)
* [2025-04-12, 17:00:38](https://news.ycombinator.com/item?id=43666112) - [Artie (YC S23) Is Hiring Engineer #3](https://www.ycombinator.com/companies/artie/jobs/7kGvDVC-founding-product-engineer)
* [2025-04-12, 16:41:00](https://slashdot.org/story/25/04/12/027252/microsoft-is-killing-skype---and-refusing-refunds-for-prepaid-international-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is Killing Skype - and Refusing Refunds for Prepaid International Calls](https://slashdot.org/story/25/04/12/027252/microsoft-is-killing-skype---and-refusing-refunds-for-prepaid-international-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 16:29:59](https://news.ycombinator.com/item?id=43665831) - [&apos;Paraparticles&apos; Would Be a Third Kingdom of Quantum Particle](https://www.quantamagazine.org/paraparticles-would-be-a-third-kingdom-of-quantum-particle-20250411/)
* [2025-04-12, 16:29:21](https://lobste.rs/s/mdmuib/performance_analysis_tuning_on_modern) - [Performance Analysis and Tuning on Modern CPUs](https://github.com/dendibakh/perf-book)
* [2025-04-12, 16:29:03](https://lobste.rs/s/xgbs35/holographic_masks) - [Holographic Masks](https://codepen.io/HejChristian/full/YPzLbYX)
* [2025-04-12, 16:26:42](https://news.ycombinator.com/item?id=43665793) - [Air pollution fell substantially as Paris restricted car traffic](https://www.washingtonpost.com/climate-solutions/2025/04/12/air-pollution-paris-health-cars/)
* [2025-04-12, 16:11:00](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss) - [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss)
* [2025-04-12, 16:01:34](https://news.ycombinator.com/item?id=43665540) - [ArkType: Ergonomic TS validator 100x faster than Zod](https://arktype.io/)
* [2025-04-12, 15:52:04](https://lobste.rs/s/p4k5m6/core_math_high_performance_open_source) - [CORE-MATH: high performance open-source mathematical functions with correct rounding](https://core-math.gitlabpages.inria.fr/)
* [2025-04-12, 15:41:00](https://news.slashdot.org/story/25/04/12/1539244/trump-tariffs-add-exemptions-friday-night-for-smartphones-and-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Tariffs Add Exemptions Friday Night for Smartphones and Other Electronics](https://news.slashdot.org/story/25/04/12/1539244/trump-tariffs-add-exemptions-friday-night-for-smartphones-and-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 15:27:58](https://lobste.rs/s/3s214q/bps_is_gps_alternative_nobody_s_heard) - [BPS is a GPS alternative that nobody&apos;s heard of](https://www.jeffgeerling.com/blog/2025/bps-gps-alternative-nobodys-heard)
* [2025-04-12, 15:26:25](https://news.ycombinator.com/item?id=43665201) - [Tunarr: Create and configure live TV channels from media on your servers](https://tunarr.com/)
* [2025-04-12, 15:09:14](https://news.ycombinator.com/item?id=43665046) - [Emacs Lisp Elements](https://protesilaos.com/emacs/emacs-lisp-elements)
* [2025-04-12, 14:34:00](https://tech.slashdot.org/story/25/04/12/067219/facebook-whistleblower-alleges-metas-ai-model-llama-was-used-to-help-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Whistleblower Alleges Meta&apos;s AI Model Llama Was Used to Help DeepSeek](https://tech.slashdot.org/story/25/04/12/067219/facebook-whistleblower-alleges-metas-ai-model-llama-was-used-to-help-deepseek?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 14:01:31](https://news.ycombinator.com/item?id=43664455) - [Apache ECharts + Leaflet + shadcn for data viz](https://docs.evidence.dev/components/all-components/)
* [2025-04-12, 13:57:54](https://lobste.rs/s/uetrpm/my_cloudflare_r2_has_been_blocked_from) - [My Cloudflare R2 has been blocked from LaLiga (Spain football league), is it even legal?](https://lobste.rs/s/uetrpm/my_cloudflare_r2_has_been_blocked_from)
* [2025-04-12, 13:46:42](https://lobste.rs/s/xvydc9/awe_compiler_for_algol_w_programming) - [awe: A compiler for the Algol W programming language](https://github.com/glynawe/awe)
* [2025-04-12, 13:18:04](https://news.ycombinator.com/item?id=43664121) - [Trump exempts phones, computers, chips from &apos;reciprocal&apos; tariffs](https://www.bloomberg.com/news/articles/2025-04-12/trump-exempts-phones-computers-chips-from-reciprocal-tariffs)
* [2025-04-12, 12:53:49](https://lobste.rs/s/gfrmx1/slopsquatting_planting_malicious) - [Slopsquatting: Planting Malicious Packages Under Names AIs Will Hallucinate](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks)
* [2025-04-12, 12:40:13](https://news.ycombinator.com/item?id=43663865) - [Open source and self hostable/private file converter](https://vert.sh)
* [2025-04-12, 12:05:07](https://lobste.rs/s/xep8ix/some_features_every_javascript) - [Some features that every JavaScript developer should know in 2025](https://waspdev.com/articles/2025-04-06/features-that-every-js-developer-must-know-in-2025)
* [2025-04-12, 12:05:00](https://news.slashdot.org/story/25/04/12/125242/leaving-money-on-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leaving Money on the Table](https://news.slashdot.org/story/25/04/12/125242/leaving-money-on-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 11:40:54](https://lobste.rs/s/dni61w/bug_outlook_pst_password_protection_2006) - [Bug in Outlook PST Password Protection (2006)](https://www.nirsoft.net/articles/pst_password_bug.html)
* [2025-04-12, 11:28:00](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss)
* [2025-04-12, 10:17:34](https://lobste.rs/s/45xlaz/python_performance_why_if_not_list_is_2x) - [Python Performance: Why &apos;if not list&apos; is 2x Faster Than Using len()](https://blog.codingconfessions.com/p/python-performance-why-if-not-list)
* [2025-04-12, 09:48:26](https://lobste.rs/s/erkm24/5_levels_configuration_languages) - [The 5 Levels of Configuration Languages](https://beza1e1.tuxen.de/config_levels.html)
* [2025-04-12, 08:58:40](https://lobste.rs/s/ele5ij/shadertoys_ported_rust_gpu) - [Shadertoys ported to Rust GPU](https://rust-gpu.github.io/blog/2025/04/10/shadertoys)
* [2025-04-12, 07:20:00](https://tech.slashdot.org/story/25/04/12/0720212/facebook-is-just-craigslist-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Is Just Craigslist Now](https://tech.slashdot.org/story/25/04/12/0720212/facebook-is-just-craigslist-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 06:43:00](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss) - [Commission Targets in-Game Currency in Children&apos;s Video Games](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss)
* [2025-04-12, 04:30:00](https://tech.slashdot.org/story/25/04/12/026211/adobe-retreats-from-bluesky-after-massive-user-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Retreats from Bluesky After Massive User Backlash](https://tech.slashdot.org/story/25/04/12/026211/adobe-retreats-from-bluesky-after-massive-user-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 04:18:04](https://lobste.rs/s/0ox9js/rust_c_compiler_95_9_test_pass_rate_odd) - [Rust to C compiler - 95.9% test pass rate, odd platforms](https://fractalfir.github.io/generated_html/cg_clr_odd_platforms.html)
* [2025-04-12, 03:58:50](https://news.ycombinator.com/item?id=43661235) - [Google is winning on every AI front](https://www.thealgorithmicbridge.com/p/google-is-winning-on-every-ai-front)
* [2025-04-12, 02:00:00](https://slashdot.org/story/25/04/12/0145241/european-tourism-to-us-plunges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Tourism To US Plunges](https://slashdot.org/story/25/04/12/0145241/european-tourism-to-us-plunges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-12, 01:57:00](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - [&apos;Doom Loops&apos; Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss)
* [2025-04-12, 01:04:40](https://lobste.rs/s/ce1x4w/datastar_hypermedia_framework) - [Datastar - The hypermedia framework](https://data-star.dev/)
* [2025-04-12, 01:00:00](https://slashdot.org/story/25/04/12/010247/ex-openai-staffers-file-amicus-brief-opposing-the-companys-for-profit-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-OpenAI Staffers File Amicus Brief Opposing the Company&apos;s For-Profit Transition](https://slashdot.org/story/25/04/12/010247/ex-openai-staffers-file-amicus-brief-opposing-the-companys-for-profit-transition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-11, 23:30:00](https://tech.slashdot.org/story/25/04/11/2158204/air-travel-set-for-biggest-overhaul-in-50-years-with-un-backed-digital-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Travel Set for Biggest Overhaul in 50 Years With UN-Backed Digital Credentials](https://tech.slashdot.org/story/25/04/11/2158204/air-travel-set-for-biggest-overhaul-in-50-years-with-un-backed-digital-credentials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-11, 22:30:00](https://linux.slashdot.org/story/25/04/11/2143211/fedora-targets-99-package-reproducibility-by-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fedora Targets 99% Package Reproducibility by October](https://linux.slashdot.org/story/25/04/11/2143211/fedora-targets-99-package-reproducibility-by-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-11, 22:27:16](https://news.ycombinator.com/item?id=43659370) - [You might not need WebSockets](https://hntrl.io/posts/you-dont-need-websockets/)
* [2025-04-11, 22:26:41](https://news.ycombinator.com/item?id=43659365) - [Vacheron Constantin breaks the world record for most complicated wristwatch](https://www.hodinkee.com/articles/introducing-vacheron-constantin-les-cabinotiers-solaria)
* [2025-04-11, 22:15:53](https://lobste.rs/s/fa15vx/camel_offers_promising_new_direction_for) - [CaMeL offers a promising new direction for mitigating prompt injection attacks](https://simonwillison.net/2025/Apr/11/camel/)
* [2025-04-11, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss) - [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss)
* [2025-04-11, 21:12:58](https://lobste.rs/s/j4ljoz/how_git_cherry_pick_revert_use_3_way_merge) - [How git cherry-pick and revert use 3-way merge](https://jvns.ca/blog/2023/11/10/how-cherry-pick-and-revert-work/)
* [2025-04-11, 20:02:49](https://lobste.rs/s/fzfi8d/golang_sync_pool_is_not_silver_bullet) - [Golang sync.Pool is not a silver bullet](https://wundergraph.com/blog/golang-sync-pool)
* [2025-04-11, 19:47:08](https://lobste.rs/s/g1xfen/generative_ai_servo) - [Generative AI in Servo](https://www.azabani.com/2025/04/11/generative-ai-in-servo.html)
* [2025-04-11, 17:38:00](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss) - [Soylent News Could Use a stripe.js Module](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss)
* [2025-04-11, 16:30:00](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss) - [GlobalFoundries Mulls UMC Takeover in Effort Dubbed &apos;Project Ultron&apos;](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss)
* [2025-04-11, 15:54:03](https://lobste.rs/s/3knudd/wgpu_v25_0_0_released) - [wgpu v25.0.0 released](https://github.com/gfx-rs/wgpu/releases/tag/v25.0.0)
* [2025-04-11, 15:50:49](https://news.ycombinator.com/item?id=43655221) - [Erlang&apos;s not about lightweight processes and message passing (2023)](https://stevana.github.io/erlangs_not_about_lightweight_processes_and_message_passing.html)
* [2025-04-11, 15:49:31](https://lobste.rs/s/4fee7y/erlang_s_not_about_lightweight_processes) - [Erlang’s not about lightweight processes and message passing…](https://stevana.github.io/erlangs_not_about_lightweight_processes_and_message_passing.html)
* [2025-04-11, 15:41:28](https://lobste.rs/s/dkdm7m/fedora_change_aims_for_99_package) - [Fedora change aims for 99% package reproducibility](https://lwn.net/Articles/1014979/)
* [2025-04-11, 14:01:06](https://news.ycombinator.com/item?id=43653885) - [Adobe deletes Bluesky posts after backlash](https://petapixel.com/2025/04/10/adobe-deletes-bluesky-posts-after-furious-backlash/)
* [2025-04-11, 13:40:26](https://news.ycombinator.com/item?id=43653672) - [Fedora change aims for 99% package reproducibility](https://lwn.net/Articles/1014979/)
* [2025-04-11, 11:45:00](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss) - [Physicists Have Confirmed a New Mismatch Between Matter and Antimatter](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss)
* [2025-04-11, 06:56:00](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss) - [Aptera Solar Assisted Car - 20 Year Update](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss)
* [2025-04-11, 04:19:56](https://lobste.rs/s/q4xzh6/default_styles_for_h1_elements_are) - [Default styles for h1 elements are changing](https://developer.mozilla.org/en-US/blog/h1-element-styles/)
* [2025-04-11, 02:09:00](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss) - [Framework Halts Sales of Select Laptops in the US Amid Tariff Changes](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss)
* [2025-04-10, 21:26:00](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss) - [9 Rules for New Technology](https://soylentnews.org/article.pl?sid=25/04/09/158225&amp;from=rss)
* [2025-04-10, 16:38:00](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) - [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss)
* [2025-04-10, 11:52:00](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss) - [How Do Bird Nests Stay Together? Researchers Unravel Entanglement Between Stiff, Straight Rods](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss)
* [2025-04-10, 07:05:00](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss) - [Another RTX 5090 Connector Melts Down, Reportedly Taking a PSU With It](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss)
* [2025-04-10, 06:19:42](https://news.ycombinator.com/item?id=43641183) - [Rebuilding Prime Video UI with Rust and WebAssembly](https://www.infoq.com/presentations/prime-video-rust/)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
* [2025-04-09, 21:33:00](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss) - [FreeDOS 1.4 Brings New Fixes and Features to Modern and Vintage DOS-Based PCs](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss)
* [2025-04-09, 16:56:31](https://news.ycombinator.com/item?id=43634408) - [One Bug Wasn&apos;t Enough: Escalating Twice Through SAP&apos;s Setuid Landscape](https://www.anvilsecure.com/blog/one-bug-wasnt-enough-escalating-twice-through-saps-setuid-landscape.html)
* [2025-04-09, 16:48:00](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) - [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss)
* [2025-04-09, 15:48:30](https://news.ycombinator.com/item?id=43633455) - [Modern Babylon: Ziggurat Skyscrapers and Hugh Ferriss&apos; Retrofuturism](https://publicdomainreview.org/essay/modern-babylon-ziggurat-skyscrapers-and-hugh-ferriss-retrofuturism)
* [2025-04-09, 14:52:46](https://news.ycombinator.com/item?id=43632828) - [CERN releases report on the feasibility of a possible Future Circular Collider](https://home.cern/news/news/accelerators/cern-releases-report-feasibility-possible-future-circular-collider)
* [2025-04-09, 13:47:27](https://news.ycombinator.com/item?id=43632049) - [Google will let companies run Gemini models in their own data centers](https://www.cnbc.com/2025/04/09/google-will-let-companies-run-gemini-models-in-their-own-data-centers.html)
* [2025-04-09, 13:38:39](https://news.ycombinator.com/item?id=43631931) - [The AI magic behind Sphere&apos;s upcoming &apos;The Wizard of Oz&apos; experience](https://blog.google/products/google-cloud/sphere-wizard-of-oz/)
* [2025-04-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss) - [April 7 — Reflections on Twenty Years of Git](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss)
* [2025-04-09, 07:28:00](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) - [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss)
* [2025-04-09, 02:42:00](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss) - [Scientists Use Sound to Generate and Shape Water Waves](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss)
* [2025-04-08, 21:55:00](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss) - [No One Knows What the Hell an AI Agent is](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss)
* [2025-04-08, 17:12:00](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss) - [Is Homo Sapiens an Invasive Species?](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss)
* [2025-04-08, 12:23:00](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss) - [NASA&apos;s Webb Exposes Complex Atmosphere of Starless Super-Jupiter](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss)
* [2025-04-08, 07:42:00](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss) - [AMD Sets New Supercomputer Record, Runs CFD Simulation Over 25x Faster On Instinct Mi250X GPUs ](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss)
* [2025-04-08, 06:54:36](https://news.ycombinator.com/item?id=43619032) - [Intentionally Making Close Friends (2021)](https://www.neelnanda.io/blog/43-making-friends)
* [2025-04-08, 02:56:00](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss) - [Earth May Have Had a Ring System 466 Million Years Ago](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss)
