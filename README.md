# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Albert Michelson's Harmonic Analyzer [pdf]](https://engineerguy.com/fourier/pdfs/albert-michelsons-harmonic-analyzer.pdf) - A detailed exploration of Michelson's invention, showcasing its application in understanding harmonic motion and Fourier analysis. [Comments](https://news.ycombinator.com/item?id=46170332)

* [Most technical problems are people problems](https://blog.joeschrag.com/2023/11/most-technical-problems-are-really.html) - A thoughtful argument on how technical challenges often stem from human dynamics, not purely technical hurdles. [Comments](https://news.ycombinator.com/item?id=46160773)

* [Extra Instructions of the 65XX Series CPU](http://www.ffd2.com/fridge/docs/6502-NMOS.extra.opcodes) - An uncovering of undocumented opcodes and behaviors in the 65XX microprocessor, essential for retro-computing enthusiasts. [Comments](https://news.ycombinator.com/item?id=46169330)

* [The missing standard library for multithreading in JavaScript](https://github.com/W4G1/multithreading) - An initiative to address JavaScript's inadequacies in multithreading through emerging tools. [Comments](https://news.ycombinator.com/item?id=46167349)

## Artificial Intelligence

* [Have I Been Flocked? – Check If Your License Plate Is Being Watched](https://haveibeenflocked.com/) - A service for checking surveillance via automated license plate readers that impact privacy. [Comments](https://news.ycombinator.com/item?id=46170302)

* [OpenAI Has Trained Its LLM To Confess To Bad Behavior](https://slashdot.org/story/25/12/05/2148204/openai-has-trained-its-llm-to-confess-to-bad-behavior?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A bold step into intelligent transparency where AI systems acknowledge actions. [Comments](https://slashdot.org/story/25/12/05/2148204/openai-has-trained-its-llm-to-confess-to-bad-behavior?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Cloudflare Says It Blocked 416 Billion AI Scraping Requests In 5 Months](https://tech.slashdot.org/story/25/12/05/1940241/cloudflare-says-it-blocked-416-billion-ai-scraping-requests-in-5-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights the combat against unwanted AI-driven web scraping. [Comments](https://news.ycombinator.com/item?id=46166708)

## Science and Innovation

* [Blackest Fabric Ever Made Absorbs 99.87% of All Light That Hits It](https://science.slashdot.org/story/25/12/05/2228219/blackest-fabric-ever-made-absorbs-9987-of-all-light-that-hits-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Introducing groundbreaking fabric that offers extreme light absorption capabilities. [Comments](https://science.slashdot.org/story/25/12/05/2228219/blackest-fabric-ever-made-absorbs-9987-of-all-light-that-hits-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Corporate and Policy Developments

* [EU hits X with €120M fine for breaching the Digital Services Act](https://www.dw.com/en/eu-imposes-120-million-fine-on-elon-musks-x-for-breaking-digital-rules/a-75033724) - A significant penalty reflecting regulatory adherence in big tech. [Comments](https://news.ycombinator.com/item?id=46170027)

* [Trump Wants Asia's 'Cute' Kei Cars To Be Made and Sold In US](https://tech.slashdot.org/story/25/12/05/221241/trump-wants-asias-cute-kei-cars-to-be-made-and-sold-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A potential cross-continental vehicular shift spurred by U.S. political interest. [Comments](https://tech.slashdot.org/story/25/12/05/221241/trump-wants-asias-cute-kei-cars-to-be-made-and-sold-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Netflix To Buy Warner Bros. In $72 Billion Cash, Stock Deal](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - High-stakes acquisitions that could reshape media industries. [Comments](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Engineering and Novel Hacks

* [I cracked a $200 software protection with xcopy](https://www.ud2.rip/blog/enigma-protector/) - A detailed breakdown of how a basic command defeated advanced software protection. [Comments](https://news.ycombinator.com/item?id=46170060)

* [ARM's barrel shifter tricks](https://xania.org/202512/05-barrel-shifting-with-arm) - Reveals advanced ARM processor techniques to optimize computing. [Comments](https://lobste.rs/s/tmqhxn/arm_s_barrel_shifter_tricks)

## Cultural and Design Legacies

* [Frank Gehry has died](https://www.bbc.co.uk/news/articles/c5y2p22z9gno) - Remembering the iconic architect and his unparalleled contributions. [Comments](https://news.ycombinator.com/item?id=46167621)

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

* [2025-12-06, 03:21:46](https://news.ycombinator.com/item?id=46170332) - [Albert Michelson&apos;s Harmonic Analyzer [pdf]](https://engineerguy.com/fourier/pdfs/albert-michelsons-harmonic-analyzer.pdf)
* [2025-12-06, 03:16:35](https://news.ycombinator.com/item?id=46170302) - [Have I Been Flocked? – Check If Your License Plate Is Being Watched](https://haveibeenflocked.com/)
* [2025-12-06, 03:03:00](https://slashdot.org/story/25/12/05/2148204/openai-has-trained-its-llm-to-confess-to-bad-behavior?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Has Trained Its LLM To Confess To Bad Behavior](https://slashdot.org/story/25/12/05/2148204/openai-has-trained-its-llm-to-confess-to-bad-behavior?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-06, 02:37:58](https://news.ycombinator.com/item?id=46170060) - [I cracked a $200 software protection with xcopy](https://www.ud2.rip/blog/enigma-protector/)
* [2025-12-06, 02:32:01](https://news.ycombinator.com/item?id=46170027) - [EU hits X with €120M fine for breaching the Digital Services Act](https://www.dw.com/en/eu-imposes-120-million-fine-on-elon-musks-x-for-breaking-digital-rules/a-75033724)
* [2025-12-06, 02:12:00](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss) - [Raspberry Pi Launches 1GB Model at $45, Temporarily Raises Prices on Higher-Capacity Boards](https://soylentnews.org/article.pl?sid=25/12/04/1133216&amp;from=rss)
* [2025-12-06, 02:02:00](https://science.slashdot.org/story/25/12/05/2228219/blackest-fabric-ever-made-absorbs-9987-of-all-light-that-hits-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blackest Fabric Ever Made Absorbs 99.87% of All Light That Hits It](https://science.slashdot.org/story/25/12/05/2228219/blackest-fabric-ever-made-absorbs-9987-of-all-light-that-hits-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-06, 01:33:34](https://news.ycombinator.com/item?id=46169695) - [Waymo investigated for ongoing failures to stop for school busses](https://www.thestreet.com/technology/waymo-investigation-could-stop-autonomous-driving-in-its-tracks)
* [2025-12-06, 01:15:48](https://news.ycombinator.com/item?id=46169554) - [YouTube caught making AI-edits to videos and adding misleading AI summaries](https://www.ynetnews.com/tech-and-digital/article/bj1qbwcklg)
* [2025-12-06, 01:01:00](https://science.slashdot.org/story/25/12/05/2217255/ai-led-to-an-increase-in-radiologists-not-a-decrease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Led To an Increase In Radiologists, Not a Decrease](https://science.slashdot.org/story/25/12/05/2217255/ai-led-to-an-increase-in-radiologists-not-a-decrease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-06, 00:38:50](https://news.ycombinator.com/item?id=46169330) - [Extra Instructions of the 65XX Series CPU](http://www.ffd2.com/fridge/docs/6502-NMOS.extra.opcodes)
* [2025-12-06, 00:00:00](https://tech.slashdot.org/story/25/12/05/221241/trump-wants-asias-cute-kei-cars-to-be-made-and-sold-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Wants Asia&apos;s &apos;Cute&apos; Kei Cars To Be Made and Sold In US](https://tech.slashdot.org/story/25/12/05/221241/trump-wants-asias-cute-kei-cars-to-be-made-and-sold-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 23:51:21](https://lobste.rs/s/tmqhxn/arm_s_barrel_shifter_tricks) - [ARM&apos;s barrel shifter tricks](https://xania.org/202512/05-barrel-shifting-with-arm)
* [2025-12-05, 23:23:00](https://it.slashdot.org/story/25/12/05/2135231/chinese-linked-hackers-use-backdoor-for-potential-sabotage-us-and-canada-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese-Linked Hackers Use Backdoor For Potential &apos;Sabotage,&apos; US and Canada Say](https://it.slashdot.org/story/25/12/05/2135231/chinese-linked-hackers-use-backdoor-for-potential-sabotage-us-and-canada-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 22:22:00](https://hardware.slashdot.org/story/25/12/05/2114250/meta-acquires-ai-wearable-company-limitless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Acquires AI Wearable Company Limitless](https://hardware.slashdot.org/story/25/12/05/2114250/meta-acquires-ai-wearable-company-limitless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 22:12:36](https://lobste.rs/s/h5w2fq/oss_friday_update_shape_ruby_i_o_come) - [OSS Friday Update - The Shape of Ruby I/O to Come](https://noteflakes.com/articles/2025-12-05-friday-update)
* [2025-12-05, 22:10:50](https://news.ycombinator.com/item?id=46168057) - [Adenosine on the common path of rapid antidepressant action: The coffee paradox](https://genomicpress.kglmeridian.com/view/journals/brainmed/aop/article-10.61373-bm025c.0134/article-10.61373-bm025c.0134.xml)
* [2025-12-05, 21:48:52](https://lobste.rs/s/cqruqw/path_mojo_1_0) - [The Path to Mojo 1.0](https://www.modular.com/blog/the-path-to-mojo-1-0)
* [2025-12-05, 21:31:40](https://news.ycombinator.com/item?id=46167621) - [Frank Gehry has died](https://www.bbc.co.uk/news/articles/c5y2p22z9gno)
* [2025-12-05, 21:27:04](https://news.ycombinator.com/item?id=46167552) - [Leaving Intel](https://www.brendangregg.com/blog//2025-12-05/leaving-intel.html)
* [2025-12-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss) - [Supreme Court Hears Case That Could Trigger Big Crackdown on Internet Piracy](https://soylentnews.org/article.pl?sid=25/12/04/1131220&amp;from=rss)
* [2025-12-05, 21:23:03](https://news.ycombinator.com/item?id=46167500) - [Perpetual Futures](https://www.bitsaboutmoney.com/archive/perpetual-futures-explained/)
* [2025-12-05, 21:21:00](https://yro.slashdot.org/story/25/12/05/2110209/india-reviews-telecom-industry-proposal-for-always-on-satellite-location-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Reviews Telecom Industry Proposal For Always-On Satellite Location Tracking](https://yro.slashdot.org/story/25/12/05/2110209/india-reviews-telecom-industry-proposal-for-always-on-satellite-location-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 21:09:11](https://news.ycombinator.com/item?id=46167349) - [The missing standard library for multithreading in JavaScript](https://github.com/W4G1/multithreading)
* [2025-12-05, 20:20:00](https://yro.slashdot.org/story/25/12/05/2021202/the-new-york-times-is-suing-perplexity-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The New York Times Is Suing Perplexity For Copyright Infringement](https://yro.slashdot.org/story/25/12/05/2021202/the-new-york-times-is-suing-perplexity-for-copyright-infringement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 20:18:22](https://news.ycombinator.com/item?id=46166708) - [Fizz Buzz in CSS](https://susam.net/fizz-buzz-in-css.html)
* [2025-12-05, 19:50:48](https://lobste.rs/s/iiqv1v/i_want_better_build_executor) - [I want a better build executor](https://jyn.dev/i-want-a-better-build-executor/)
* [2025-12-05, 19:19:00](https://tech.slashdot.org/story/25/12/05/1940241/cloudflare-says-it-blocked-416-billion-ai-scraping-requests-in-5-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Says It Blocked 416 Billion AI Scraping Requests In 5 Months](https://tech.slashdot.org/story/25/12/05/1940241/cloudflare-says-it-blocked-416-billion-ai-scraping-requests-in-5-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 18:30:48](https://lobste.rs/s/cgohab/framework_laptop_13_gets_arm_processor) - [Framework Laptop 13 gets ARM processor with 12 cores via third-party upgrade kit](https://www.notebookcheck.net/Framework-Laptop-13-gets-ARM-processor-with-12-cores-via-upgrade-kit.1177930.0.html)
* [2025-12-05, 18:29:50](https://news.ycombinator.com/item?id=46165249) - [Why we built Lightpanda in Zig](https://lightpanda.io/blog/posts/why-we-built-lightpanda-in-zig)
* [2025-12-05, 18:18:00](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix To Buy Warner Bros. In $72 Billion Cash, Stock Deal](https://entertainment.slashdot.org/story/25/12/05/1728256/netflix-to-buy-warner-bros-in-72-billion-cash-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 17:34:24](https://lobste.rs/s/fxccgk/resonant_computing_manifesto) - [The Resonant Computing Manifesto](https://resonantcomputing.org/)
* [2025-12-05, 17:17:00](https://hardware.slashdot.org/story/25/12/05/0315226/why-one-man-is-fighting-for-our-right-to-control-our-garage-door-openers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why One Man Is Fighting For Our Right To Control Our Garage Door Openers](https://hardware.slashdot.org/story/25/12/05/0315226/why-one-man-is-fighting-for-our-right-to-control-our-garage-door-openers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 17:12:29](https://lobste.rs/s/ssksx7/when_video_codec_wins_emmy) - [When a video codec wins an Emmy](https://blog.mozilla.org/en/mozilla/av1-video-codec-wins-emmy/)
* [2025-12-05, 17:05:27](https://lobste.rs/s/jjkbno/eventual_rust_cpython) - [Eventual Rust in CPython](https://lwn.net/SubscriberLink/1046933/d13433b823f559c0/)
* [2025-12-05, 17:00:10](https://news.ycombinator.com/item?id=46163977) - [Onlook (YC W25) the Cursor for Designers Is Hiring a Founding Fullstack Engineer](https://news.ycombinator.com/item?id=46163977)
* [2025-12-05, 16:38:03](https://lobste.rs/s/brah61/when_square_pixels_aren_t_square) - [When square pixels aren’t square](https://alexwlchan.net/2025/square-pixels/)
* [2025-12-05, 16:34:25](https://news.ycombinator.com/item?id=46163609) - [Patterns for Defensive Programming in Rust](https://corrode.dev/blog/defensive-programming/)
* [2025-12-05, 16:16:00](https://news.slashdot.org/story/25/12/05/031249/quicktime-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [QuickTime Turns 34](https://news.slashdot.org/story/25/12/05/031249/quicktime-turns-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 16:15:10](https://news.ycombinator.com/item?id=46163308) - [Gemini 3 Pro: the frontier of vision AI](https://blog.google/technology/developers/gemini-3-pro-vision/)
* [2025-12-05, 16:04:20](https://news.ycombinator.com/item?id=46163121) - [I&apos;m Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=46163121)
* [2025-12-05, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss) - [Oracle&apos;s Credit Risk is Spiking as Wall Street Asks How It&apos;s Going to Pay for All That AI](https://soylentnews.org/article.pl?sid=25/12/03/1710234&amp;from=rss)
* [2025-12-05, 15:35:43](https://news.ycombinator.com/item?id=46162656) - [Cloudflare outage on December 5, 2025](https://blog.cloudflare.com/5-december-2025-outage/)
* [2025-12-05, 15:15:00](https://yro.slashdot.org/story/25/12/05/0251201/contractors-with-hacking-records-accused-of-wiping-96-government-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Contractors With Hacking Records Accused of Wiping 96 Government Databases](https://yro.slashdot.org/story/25/12/05/0251201/contractors-with-hacking-records-accused-of-wiping-96-government-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 15:07:51](https://lobste.rs/s/nux2xg/typewriter_plotters) - [Typewriter plotters](https://biosrhythm.com/?p=2143)
* [2025-12-05, 14:14:00](https://news.slashdot.org/story/25/12/05/0146253/av1-open-video-codec-now-powers-30-of-netflix-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AV1 Open Video Codec Now Powers 30% of Netflix Streaming](https://news.slashdot.org/story/25/12/05/0146253/av1-open-video-codec-now-powers-30-of-netflix-streaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 13:27:25](https://lobste.rs/s/9i16af/layoutz_simple_beautiful_cli_output_for) - [Layoutz – Simple, beautiful CLI output for Haskell 🪶](https://flora.pm/packages/@hackage/layoutz)
* [2025-12-05, 13:13:00](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chatbots Can Sway Voters Better Than Political Ads](https://politics.slashdot.org/story/25/12/05/0141235/ai-chatbots-can-sway-voters-better-than-political-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-05, 13:07:59](https://news.ycombinator.com/item?id=46160773) - [Most technical problems are people problems](https://blog.joeschrag.com/2023/11/most-technical-problems-are-really.html)
* [2025-12-05, 13:02:50](https://lobste.rs/s/gv0fzl/golang_s_big_miss_on_memory_arenas) - [Golang’s Big Miss on Memory Arenas](https://avittig.medium.com/golangs-big-miss-on-memory-arenas-f1375524cc90)
* [2025-12-05, 13:00:28](https://news.ycombinator.com/item?id=46160698) - [Making RSS More Fun](https://matduggan.com/making-rss-more-fun/)
* [2025-12-05, 12:43:01](https://lobste.rs/s/gdtbbh/performance_revolution_javascript) - [The Performance Revolution in JavaScript Tooling](https://blog.appsignal.com/2025/12/03/the-performance-revolution-in-javascript-tooling.html)
* [2025-12-05, 12:21:19](https://news.ycombinator.com/item?id=46160315) - [Netflix to Acquire Warner Bros](https://about.netflix.com/en/news/netflix-to-acquire-warner-bros)
* [2025-12-05, 11:12:00](https://lobste.rs/s/lm8vm2/lisp_style_design) - [LISP Style &amp; Design](https://archive.org/details/miller-and-benson-1990-lisp-style-design)
* [2025-12-05, 10:54:28](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/7nlfjb/what_are_you_doing_this_weekend)
* [2025-12-05, 10:54:00](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss) - [Dotcom Survivor Syndrome – How Perl’s Early Success Created the Seeds of Its Downfall](https://soylentnews.org/article.pl?sid=25/12/03/178224&amp;from=rss)
* [2025-12-05, 06:01:00](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss) - [Space CEO Explains Why He Believes Private Space Stations Are a Viable Business](https://soylentnews.org/article.pl?sid=25/12/03/173255&amp;from=rss)
* [2025-12-05, 05:12:20](https://lobste.rs/s/ihrynz/how_speed_up_rust_compiler_december_2025) - [How to speed up the Rust compiler in December 2025](https://nnethercote.github.io/2025/12/05/how-to-speed-up-the-rust-compiler-in-december-2025.html)
* [2025-12-05, 02:45:11](https://lobste.rs/s/whiefr/thoughts_on_go_vs_rust_vs_zig) - [Thoughts on Go vs. Rust vs. Zig](https://sinclairtarget.com/blog/2025/08/thoughts-on-go-vs.-rust-vs.-zig/)
* [2025-12-05, 02:41:30](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks) - [Lobsters Interview with Aks](https://lobste.rs/s/h4yblg/lobsters_interview_with_aks)
* [2025-12-05, 01:24:00](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss) - [Linux First, Windows Later! Dell Launches Qualcomm NPU Laptop on Linux Before Windows](https://soylentnews.org/article.pl?sid=25/12/03/1319210&amp;from=rss)
* [2025-12-04, 21:46:54](https://lobste.rs/s/x7glis/jujutsu_v0_36_0_released) - [jujutsu v0.36.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.36.0)
* [2025-12-04, 21:01:47](https://lobste.rs/s/v82ecm/javascript_announced_30_years_ago) - [JavaScript Announced 30 Years Ago](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)
* [2025-12-04, 20:42:13](https://lobste.rs/s/wkuvhx/hello_blog) - [][ Hello blog](https://nobloat.org/articles/2025-07-01-hello-blog.html)
* [2025-12-04, 20:42:00](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss) - [Netflix Quietly Drops Support for Casting to Most TVs](https://soylentnews.org/article.pl?sid=25/12/03/1255251&amp;from=rss)
* [2025-12-04, 20:41:13](https://lobste.rs/s/4pvwma/fairphone_open_sources_fairphone_5_6) - [Fairphone open-sources Fairphone 5 and 6 software, and Moments switch](https://www.fairphone.com/en/2025/12/04/were-big-fans-of-open-source-buildable-code-at-fairphone-heres-why/)
* [2025-12-04, 20:04:42](https://lobste.rs/s/lmyqtn/bcachefs_1_33_0_reconcile) - [bcachefs 1.33.0 - reconcile](https://lore.kernel.org/linux-bcachefs/slvis5ybvo7ch3vxh5yb6turapyq7hai2tddwjriicfxqivnpn@xdpb25wey5xd/)
* [2025-12-04, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss) - [Google&apos;s Gemini 3 Jailbroken in Minutes, and the Fallout is Alarming](https://soylentnews.org/article.pl?sid=25/12/03/1244208&amp;from=rss)
* [2025-12-04, 14:04:13](https://lobste.rs/s/omnyrf/svg_filters_clickjacking_2_0) - [SVG Filters - Clickjacking 2.0](https://lyra.horse/blog/2025/12/svg-clickjacking/)
* [2025-12-04, 11:34:59](https://lobste.rs/s/xdjgbd/why_i_ignore_spotlight_as_staff_engineer) - [Why I Ignore The Spotlight as a Staff Engineer](https://lalitm.com/software-engineering-outside-the-spotlight/)
* [2025-12-04, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=25/12/03/0225225&amp;from=rss)
* [2025-12-04, 06:17:00](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss) - [Flock Uses Overseas Gig Workers to Build its Surveillance AI](https://soylentnews.org/article.pl?sid=25/12/03/0223207&amp;from=rss)
* [2025-12-04, 01:36:00](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss) - [KDE to Drop X11 Session in KDE Plasma 6.8](https://soylentnews.org/article.pl?sid=25/12/02/1148202&amp;from=rss)
* [2025-12-03, 20:49:00](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss) - [Rapidus to Start Construction on 1.4nm Fab in 2027 — R&amp;D on Node Begins Next Year](https://soylentnews.org/article.pl?sid=25/12/02/1141208&amp;from=rss)
* [2025-12-03, 16:02:00](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss) - [openSUSE Tumbleweed to update GRUB package and enable full disk encryption](https://soylentnews.org/article.pl?sid=25/12/01/0724224&amp;from=rss)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 04:20:44](https://news.ycombinator.com/item?id=46130260) - [Show HN: HCB Mobile – financial app built by 17 y/o, processing $6M/month](https://hackclub.com/fiscal-sponsorship/mobile/)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-02, 23:13:54](https://news.ycombinator.com/item?id=46128238) - [Ivan Sutherland Sketchpad Demo 1963 [video]](https://www.youtube.com/watch?v=6orsmFndx_o)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 20:28:18](https://news.ycombinator.com/item?id=46126380) - [Frinkiac – 3M \&quot;The Simpsons\&quot; Screencaps](https://frinkiac.com/)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 14:02:44](https://news.ycombinator.com/item?id=46121251) - [Spectral rendering, part 3: Spectral vs. RGB](https://momentsingraphics.de/SpectralRendering3Results.html)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
