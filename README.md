# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology

* [ASML Unveils EUV Light Source Advance That Could Yield 50% More Chips By 2030](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ASML announced a breakthrough in EUV light source technology, potentially increasing chip production capacity by 50% by 2030. [Comments](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Climate Physicists Face the Ghosts in Their Machines: Clouds](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The complex and often unpredictable behavior of clouds poses challenges for advancing climate change models. [Comments](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [A lithium-ion breakthrough that could boost range and lower costs](https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/forget-solid-state-batteries-researchers-have-made-a-lithium-ion-breakthrough-that-could-boost-range-and-drastically-lower-costs) - Researchers have discovered a potentially game-changing lithium-ion advance that might expand battery ranges and reduce costs. [Comments](https://news.ycombinator.com/item?id=47127133)

## Ethical and Social Issues in Technology

* [Americans are destroying Flock surveillance cameras](https://techcrunch.com/2026/02/23/americans-are-destroying-flock-surveillance-cameras/) - Frustration with Flock's surveillance cameras has led citizens to take matters into their own hands, damaging public installations. [Comments](https://news.ycombinator.com/item?id=47127081)

* [Binance fired employees who found $1.7B in crypto was sent to Iran](https://www.nytimes.com/2026/02/23/technology/binance-employees-iran-firings.html) - Binance is under scrutiny after firing employees who traced significant cryptocurrency transfers to sanctioned Iranian entities. [Comments](https://news.ycombinator.com/item?id=47127396)

* [The Age Verification Trap: Verifying age undermines everyone's data protection](https://spectrum.ieee.org/age-verification) - Critics argue that age verification systems could inadvertently compromise individual data security. [Comments](https://news.ycombinator.com/item?id=47122715)

## Security and Privacy

* [Anthropic Accuses Chinese Companies of Siphoning Data From Claude](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Anthropic has accused unnamed Chinese firms of data manipulation involving their Claude AI system. [Comments](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Elsevier shuts down its finance journal citation cartel](https://www.chrisbrunet.com/p/elsevier-shuts-down-its-finance-journal) - Elsevier dismantles a controversial citation system that raised ethical dilemmas in academic publishing. [Comments](https://news.ycombinator.com/item?id=47119530)

* [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&from=rss) - A discussion on balancing privacy rights with the rapid growth of technological innovations. [Comments](https://soylentnews.org/article.pl?sid=26/02/22/1259218&from=rss)

## Notable Innovations

* [Magical Mushroom – Europe's first industrial-scale mycelium packaging producer](https://magicalmushroom.com/index) - The groundbreaking production of industrial-scale mycelium packaging offers a sustainable take on materials. [Comments](https://news.ycombinator.com/item?id=47119274)

* [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&from=rss) - MIT researchers unveil a state-of-the-art concrete-based energy storage system with groundbreaking capacity. [Comments](https://soylentnews.org/article.pl?sid=26/02/22/139236&from=rss)

* [Raspberry Pi Stock Rises Over Its Possible Use With OpenClaw's AI Agents](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rising interest surrounds the Raspberry Pi due to its potential pairing with OpenClaw's AI technologies. [Comments](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-02-23, 21:57:00](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASML Unveils EUV Light Source Advance That Could Yield 50% More Chips By 2030](https://hardware.slashdot.org/story/26/02/23/2155225/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 21:18:20](https://lobste.rs/s/vsl6hv/binding_port_0_avoid_port_collisions) - [Binding port 0 to avoid port collisions](https://ntietz.com/blog/binding-ephemeral-port/)
* [2026-02-23, 21:15:20](https://news.ycombinator.com/item?id=47128960) - [Flock cameras gifted by Horowitz Foundation, avoiding public oversight](https://thenevadaindependent.com/article/vegas-police-are-big-users-of-license-plate-readers-public-has-little-input-because-its-a-gift)
* [2026-02-23, 21:11:24](https://news.ycombinator.com/item?id=47128907) - [IBM Plunges After Anthropic&apos;s Latest Update Takes on COBOL](https://www.zerohedge.com/markets/ibm-plunges-after-anthropics-latest-update-takes-cobol)
* [2026-02-23, 21:10:00](https://slashdot.org/story/26/02/23/2110221/ibm-shares-crater-13-after-anthropic-says-claude-code-can-tackle-cobol-modernization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Shares Crater 13% After Anthropic Says Claude Code Can Tackle COBOL Modernization](https://slashdot.org/story/26/02/23/2110221/ibm-shares-crater-13-after-anthropic-says-claude-code-can-tackle-cobol-modernization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 21:04:19](https://news.ycombinator.com/item?id=47128799) - [Stop Killing Games update says EU petition advances](https://videocardz.com/newz/stop-killing-games-update-says-eu-petition-advances)
* [2026-02-23, 21:00:28](https://news.ycombinator.com/item?id=47128740) - [SIM (YC X25) Is Hiring the Best Engineers in San Francisco](https://www.ycombinator.com/companies/sim/jobs/Rj8TVRM-software-engineer-platform)
* [2026-02-23, 20:53:36](https://news.ycombinator.com/item?id=47128631) - [The challenges of porting Shufflepuck Cafe to the 8 bits Apple II](https://www.colino.net/wordpress/archives/2026/02/23/the-challenges-of-porting-shufflepuck-cafe-to-the-8-bits-apple-ii/)
* [2026-02-23, 20:45:34](https://news.ycombinator.com/item?id=47128535) - [Show HN: Babyshark – Wireshark made easy (terminal UI for PCAPs)](https://github.com/vignesh07/babyshark)
* [2026-02-23, 20:33:19](https://lobste.rs/s/cyuyhm/300_days_rubocop) - [300 Days of RuboCop](https://lovro-bikic.github.io/300-days-of-rubocop/)
* [2026-02-23, 20:05:15](https://news.ycombinator.com/item?id=47127986) - [UNIX99, a UNIX-like OS for the TI-99/4A](https://forums.atariage.com/topic/380883-unix99-a-unix-like-os-for-the-ti-994a/)
* [2026-02-23, 19:36:00](https://linux.slashdot.org/story/26/02/23/1936208/linus-torvalds-someone-more-competent-who-isnt-afraid-of-numbers-past-the-teens-will-take-over-linux-one-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds: Someone &apos;More Competent Who Isn&apos;t Afraid of Numbers Past the Teens&apos; Will Take Over Linux One Day](https://linux.slashdot.org/story/26/02/23/1936208/linus-torvalds-someone-more-competent-who-isnt-afraid-of-numbers-past-the-teens-will-take-over-linux-one-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 19:31:40](https://lobste.rs/s/nelruh/verifpal_rewritten_rust) - [Verifpal, Rewritten in Rust](https://symbolic.software/blog/2026-02-23-verifpal-rust/)
* [2026-02-23, 19:23:30](https://news.ycombinator.com/item?id=47127396) - [Binance fired employees who found $1.7B in crypto was sent to Iran](https://www.nytimes.com/2026/02/23/technology/binance-employees-iran-firings.html)
* [2026-02-23, 19:07:41](https://news.ycombinator.com/item?id=47127133) - [A lithium-ion breakthrough that could boost range and lower costs](https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/forget-solid-state-batteries-researchers-have-made-a-lithium-ion-breakthrough-that-could-boost-range-and-drastically-lower-costs)
* [2026-02-23, 19:04:34](https://news.ycombinator.com/item?id=47127081) - [Americans are destroying Flock surveillance cameras](https://techcrunch.com/2026/02/23/americans-are-destroying-flock-surveillance-cameras/)
* [2026-02-23, 18:50:00](https://it.slashdot.org/story/26/02/23/1833239/how-many-ais-does-it-take-to-read-a-pdf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;How Many AIs Does It Take To Read a PDF?&apos;](https://it.slashdot.org/story/26/02/23/1833239/how-many-ais-does-it-take-to-read-a-pdf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 18:10:00](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Accuses Chinese Companies of Siphoning Data From Claude](https://slashdot.org/story/26/02/23/1810225/anthropic-accuses-chinese-companies-of-siphoning-data-from-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 17:25:00](https://tech.slashdot.org/story/26/02/23/1723233/say-goodbye-to-the-undersea-cable-that-made-the-global-internet-possible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Say Goodbye to the Undersea Cable That Made the Global Internet Possible](https://tech.slashdot.org/story/26/02/23/1723233/say-goodbye-to-the-undersea-cable-that-made-the-global-internet-possible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 17:18:41](https://news.ycombinator.com/item?id=47125349) - [ASML unveils EUV light source advance that could yield 50% more chips by 2030](https://www.reuters.com/world/china/asml-unveils-euv-light-source-advance-that-could-yield-50-more-chips-by-2030-2026-02-23/)
* [2026-02-23, 17:07:00](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss) - [Goodbye Paper Vehicle Titles – Illinois State is Making Digital Mandatory](https://soylentnews.org/article.pl?sid=26/02/22/1311241&amp;from=rss)
* [2026-02-23, 17:01:39](https://news.ycombinator.com/item?id=47125046) - [Decided to fly to the US to buy some hard drives](https://old.reddit.com/r/DataHoarder/comments/1rb9ot4/decided_to_fly_to_the_us_to_buy_some_hard_drives)
* [2026-02-23, 16:48:00](https://slashdot.org/story/26/02/23/1648247/paypal-attracts-takeover-interest-after-stock-slump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal Attracts Takeover Interest After Stock Slump](https://slashdot.org/story/26/02/23/1648247/paypal-attracts-takeover-interest-after-stock-slump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 16:40:31](https://lobste.rs/s/xsi6um/some_silly_z3_scripts_i_wrote) - [Some Silly Z3 Scripts I Wrote](https://www.hillelwayne.com/post/z3-examples/)
* [2026-02-23, 16:02:00](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Physicists Face the Ghosts in Their Machines: Clouds](https://news.slashdot.org/story/26/02/23/1531240/climate-physicists-face-the-ghosts-in-their-machines-clouds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 16:01:18](https://news.ycombinator.com/item?id=47124149) - [A simple web we own](https://rsdoiel.github.io/blog/2026/02/21/a_simple_web_we_own.html)
* [2026-02-23, 15:48:33](https://news.ycombinator.com/item?id=47123894) - [Show HN: Sowbot – open-hardware agricultural robot (ROS2, RTK GPS)](https://sowbot.co.uk/)
* [2026-02-23, 15:41:13](https://lobste.rs/s/ype4g3/disappointing_phones) - [Disappointing phones](https://cadence.moe/blog/2026-02-08-disappointing-phones)
* [2026-02-23, 15:33:24](https://news.ycombinator.com/item?id=47123631) - [Show HN: PgDog – Scale Postgres without changing the app](https://github.com/pgdogdev/pgdog)
* [2026-02-23, 15:24:40](https://lobste.rs/s/bto9ju/tracking_nixos_option_values) - [Tracking NixOS option values and dependencies](https://oddlama.org/blog/tracking-options-in-nixos/)
* [2026-02-23, 15:23:11](https://lobste.rs/s/pgh4ss/so_i_ve_been_thinking_about_static_site) - [So I&apos;ve Been Thinking About Static Site Generators](https://wolfgirl.dev/blog/2026-02-23-so-ive-been-thinking-about-static-site-generators/)
* [2026-02-23, 15:22:00](https://science.slashdot.org/story/26/02/23/1459227/stressful-people-in-your-life-could-be-adding-months-to-your-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stressful People in Your Life Could Be Adding Months To Your Biological Age](https://science.slashdot.org/story/26/02/23/1459227/stressful-people-in-your-life-could-be-adding-months-to-your-biological-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 14:40:00](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Would Like To Remind You That Humans Use a Lot of Energy, Too](https://slashdot.org/story/26/02/23/1430235/sam-altman-would-like-to-remind-you-that-humans-use-a-lot-of-energy-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 14:28:39](https://news.ycombinator.com/item?id=47122789) - [The peculiar case of Japanese web design (2022)](https://sabrinas.space)
* [2026-02-23, 14:22:39](https://news.ycombinator.com/item?id=47122715) - [The Age Verification Trap: Verifying age undermines everyone&apos;s data protection](https://spectrum.ieee.org/age-verification)
* [2026-02-23, 14:15:27](https://lobste.rs/s/tmynah/using_haskell_s_newtype_c) - [Using Haskell&apos;s &apos;newtype&apos; in C](https://blog.nelhage.com/2010/10/using-haskells-newtype-in-c/)
* [2026-02-23, 14:00:00](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Goldman Sachs, Morgan Stanley Calculate AI&apos;s Contribution To U.S. Growth May Be Basically Zero](https://news.slashdot.org/story/26/02/23/1342216/goldman-sachs-morgan-stanley-calculate-ais-contribution-to-us-growth-may-be-basically-zero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 13:28:15](https://lobste.rs/s/1ydlk8/ladybird_adopts_rust_with_help_from_ai) - [Ladybird adopts Rust, with help from AI](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 13:20:43](https://lobste.rs/s/7zdq2s/you_don_t_need_free_lists) - [You don&apos;t need free lists](https://jakubtomsu.github.io/posts/bit_pools/)
* [2026-02-23, 12:55:10](https://lobste.rs/s/0s4w9x/designing_odin_s_casting_syntax) - [Designing Odin&apos;s Casting Syntax](https://www.gingerbill.org/article/2026/02/23/designing-odins-casting-syntax/)
* [2026-02-23, 12:47:33](https://lobste.rs/s/tbsdd4/cursed_engineering_jumping_randomly) - [Cursed engineering: jumping randomly through CSV files without hurting yourself](https://github.com/medialab/xan/blob/master/docs/blog/csv_base_jumping.md)
* [2026-02-23, 12:38:54](https://news.ycombinator.com/item?id=47121539) - [femtolisp: A lightweight, robust, scheme-like Lisp implementation](https://github.com/JeffBezanson/femtolisp)
* [2026-02-23, 12:34:00](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Impacting Which Programming Language Projects Use?](https://developers.slashdot.org/story/26/02/23/0732245/is-ai-impacting-which-programming-language-projects-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 12:22:00](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss) - [Concrete “Battery” Developed at MIT Now Packs 10 Times the Power](https://soylentnews.org/article.pl?sid=26/02/22/139236&amp;from=rss)
* [2026-02-23, 11:29:22](https://news.ycombinator.com/item?id=47120899) - [Ladybird adopts Rust](https://ladybird.org/posts/adopting-rust/)
* [2026-02-23, 11:27:53](https://lobste.rs/s/favfvi/forgejo_agit_pull_request_templates) - [Forgejo, AGit, and Pull Request Templates](https://carlo.zancanaro.id.au/posts/forgejo-agit-and-pull-request-templates.html)
* [2026-02-23, 11:25:35](https://lobste.rs/s/yi5iu1/hetzner_price_adjustment) - [Hetzner Price Adjustment](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/)
* [2026-02-23, 09:12:27](https://lobste.rs/s/eaifa0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/eaifa0/what_are_you_doing_this_week)
* [2026-02-23, 09:07:44](https://news.ycombinator.com/item?id=47119871) - [Show HN: AI Timeline – 171 LLMs from Transformer (2017) to GPT-5.3 (2026)](https://llm-timeline.com/)
* [2026-02-23, 08:34:00](https://science.slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rule-Breaking Black Hole Growing At 13x the Cosmic &apos;Speed Limit&apos; Challenges Theories](https://science.slashdot.org/story/26/02/23/0638227/rule-breaking-black-hole-growing-at-13x-the-cosmic-speed-limit-challenges-theories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 08:25:34](https://lobste.rs/s/kxyicr/microgpt_llm_visualizer) - [microgpt - LLM visualizer](https://microgpt.boratto.ca/)
* [2026-02-23, 08:22:34](https://news.ycombinator.com/item?id=47119530) - [Elsevier shuts down its finance journal citation cartel](https://www.chrisbrunet.com/p/elsevier-shuts-down-its-finance-journal)
* [2026-02-23, 07:49:16](https://lobste.rs/s/3mfu6y/crawling_billion_web_pages_just_over_24) - [Crawling a billion web pages in just over 24 hours](https://andrewkchan.dev/posts/crawler.html)
* [2026-02-23, 07:43:47](https://news.ycombinator.com/item?id=47119274) - [Magical Mushroom – Europe&apos;s first industrial-scale mycelium packaging producer](https://magicalmushroom.com/index)
* [2026-02-23, 07:41:00](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss) - [Privacy Is Not a Price You Pay for Growth](https://soylentnews.org/article.pl?sid=26/02/22/1259218&amp;from=rss)
* [2026-02-23, 06:13:29](https://lobste.rs/s/dnyzhk/using_new_bridges_freebsd_15) - [Using The New Bridges of FreeBSD 15](https://blog.feld.me/posts/2026/02/using-new-bridges-freebsd-15/)
* [2026-02-23, 05:35:00](https://it.slashdot.org/story/26/02/23/0531210/should-job-seekers-stop-using-ai-to-write-their-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should Job-Seekers Stop Using AI to Write Their Resumes?](https://it.slashdot.org/story/26/02/23/0531210/should-job-seekers-stop-using-ai-to-write-their-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 02:55:00](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss) - [Pink Noise Reduces REM Sleep and May Harm Sleep Quality](https://soylentnews.org/article.pl?sid=26/02/22/1256215&amp;from=rss)
* [2026-02-23, 02:49:31](https://lobste.rs/s/bysfi9/fast_starting_clojure_runtime_built_with) - [Fast starting Clojure runtime built with GraalVM native-image + Crema](https://github.com/borkdude/cream)
* [2026-02-23, 02:34:00](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi Stock Rises Over Its Possible Use With OpenClaw&apos;s AI Agents](https://build.slashdot.org/story/26/02/23/0012259/raspberry-pi-stock-rises-over-its-possible-use-with-openclaws-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-23, 01:38:11](https://lobste.rs/s/zbirtc/jit_header_only_cross_platform_jit) - [jit: A header-only, cross-platform JIT compiler library in C. Targets x86-32, x86-64, ARM32 and ARM64](https://github.com/abdimoallim/jit)
* [2026-02-22, 23:53:14](https://lobste.rs/s/nddlyy/codespelunker_cli_code_search_tool) - [codespelunker - CLI code search tool that understands code structure and ranks results by relevance. No indexing required](https://github.com/boyter/cs)
* [2026-02-22, 22:10:00](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss) - [Richard Stallman: The Legend of Software Freedom That Saved the World](https://soylentnews.org/article.pl?sid=26/02/21/1350257&amp;from=rss)
* [2026-02-22, 19:52:23](https://lobste.rs/s/cgo4vm/tears_donald_knuth_2015) - [The Tears of Donald Knuth (2015)](https://cacm.acm.org/opinion/the-tears-of-donald-knuth/)
* [2026-02-22, 19:40:40](https://lobste.rs/s/qzwdla/read_locks_are_not_your_friends) - [Read Locks Are Not Your Friends](https://eventual-consistency.vercel.app/posts/write-locks-faster)
* [2026-02-22, 18:28:58](https://news.ycombinator.com/item?id=47113401) - [Benchmarks for concurrent hash map implementations in Go](https://github.com/puzpuzpuz/go-concurrent-map-bench)
* [2026-02-22, 17:28:00](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss) - [NASA Releases Starliner Failures Report as It Preps for March Launch of Artemis 2](https://soylentnews.org/article.pl?sid=26/02/21/1339255&amp;from=rss)
* [2026-02-22, 15:17:50](https://lobste.rs/s/dpzhs5/drowse_nix_dynamic_derivations_made_easy) - [Drowse: Nix dynamic derivations made easy](https://github.com/figsoda/drowse)
* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 05:54:28](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason) - [Proposal: add \&quot;AI generated\&quot; as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 13:24:04](https://news.ycombinator.com/item?id=47100612) - [&apos;Viking&apos; was a job description, not a matter of heredity: Ancient DNA study](https://www.science.org/content/article/viking-was-job-description-not-matter-heredity-massive-ancient-dna-study-shows)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 13:33:03](https://news.ycombinator.com/item?id=47087838) - [The Lighthouse: How extreme isolation transforms the body and mind](https://www.newscientist.com/article/2231732-the-lighthouse-how-extreme-isolation-transforms-the-body-and-mind/)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 07:59:21](https://news.ycombinator.com/item?id=47085061) - [Generalized Sequential Probability Ratio Test for Families of Hypotheses [pdf]](https://sites.stat.columbia.edu/jcliu/paper/GSPRT_SQA3.pdf)
* [2026-02-20, 06:20:34](https://news.ycombinator.com/item?id=47084431) - [Show HN: Fostrom, an IoT Cloud Platform built for developers](https://fostrom.io/)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 19:37:00](https://news.ycombinator.com/item?id=47078112) - [0 A.D. Release 28: Boiorix](https://play0ad.com/new-release-0-a-d-release-28-boiorix/)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:58:27](https://news.ycombinator.com/item?id=47076789) - [Emulating Goto in Scheme with Continuations](https://terezi.pyrope.net/ccgoto/)
* [2026-02-19, 16:23:39](https://news.ycombinator.com/item?id=47075455) - [Sub-$200 Lidar could reshuffle auto sensor economics](https://spectrum.ieee.org/solid-state-lidar-microvision-adas)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
