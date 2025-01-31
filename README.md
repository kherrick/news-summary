# [News Summary](https://kherrick.github.io/news-summary/)

## Finance and Market Insights

* [Magical' Efficient-Market Theory Rebuked in Era of Passive Investing](https://news.slashdot.org/story/25/01/31/1656220/magical-efficient-market-theory-rebuked-in-era-of-passive-investing?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Thousands of Highly Cited Scientists Have At Least One Retraction](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Engineering

* [DeepSeek Outstrips Meta and Mistral To Lead Open-Source AI Race](https://tech.slashdot.org/story/25/01/31/1354218/deepseek-outstrips-meta-and-mistral-to-lead-open-source-ai-race?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [O3-mini System Card [pdf]](https://cdn.openai.com/o3-mini-system-card.pdf)

* [Large Language Models Think Too Fast to Explore Effectively](https://arxiv.org/abs/2501.18009)

* [Theoretical limitations of multi-layer Transformer](https://arxiv.org/abs/2412.02975)

## AI and Automation

* [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)

* [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)

## Programming and Development

* [Ruby on Rails on WebAssembly, the full-stack in-browser journey](https://web.dev/blog/ruby-on-rails-on-webassembly)

* [Shell-ish scripting in Go with ease](https://github.com/bitfield/script)

* [Show HN: Uscope, a New Linux Debugger Written from Scratch](https://github.com/jcalabro/uscope)

* [Nom parser combinators now released in version 8, with a new architecture](https://github.com/rust-bakery/nom/blob/main/CHANGELOG.md#800-2025-01-25)

* [Introducing Werk](https://simonask.github.io/introducing-werk/)

## Data Privacy and Cybersecurity

* [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://yro.slashdot.org/story/25/01/31/1441220/whatsapp-says-journalists-and-civil-society-members-were-targets-of-israeli-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple files emergency motion to become defendant in US vs. Google [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1158.0_1.pdf)

## Science and Health

* [Microplastics in Placentas Linked To Premature Births, Study Suggests](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Older Adults Disproportionately Hindered by Touch Screen Interfaces](https://journals.sagepub.com/doi/10.1177/21695067231193656)

## Software and Game Development

* [VGHF Opens Free Online Access To 1,500 Classic Game Mags, 30K Historic Files](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Gamedev.city: Game development-centric link aggregator](https://gamedev.city/)

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

* [2025-01-31, 18:40:00](https://news.slashdot.org/story/25/01/31/1656220/magical-efficient-market-theory-rebuked-in-era-of-passive-investing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Magical' Efficient-Market Theory Rebuked in Era of Passive Investing](https://news.slashdot.org/story/25/01/31/1656220/magical-efficient-market-theory-rebuked-in-era-of-passive-investing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 18:32:03](https://lobste.rs/s/fsruk8/ruby_on_rails_on_webassembly_full_stack) - [Ruby on Rails on WebAssembly, the full-stack in-browser journey](https://web.dev/blog/ruby-on-rails-on-webassembly)
* [2025-01-31, 18:14:28](https://news.ycombinator.com/item?id=42890050) - [Older Adults Disproportionately Hindered by Touch Screen Interfaces](https://journals.sagepub.com/doi/10.1177/21695067231193656)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 18:08:38](https://news.ycombinator.com/item?id=42889989) - [O3-mini System Card [pdf]](https://cdn.openai.com/o3-mini-system-card.pdf)
* [2025-01-31, 18:01:00](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of Highly Cited Scientists Have At Least One Retraction](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 17:48:23](https://news.ycombinator.com/item?id=42889786) - [Theoretical limitations of multi-layer Transformer](https://arxiv.org/abs/2412.02975)
* [2025-01-31, 17:47:39](https://news.ycombinator.com/item?id=42889777) - [Three AM 911 call, 9 AM salesman](https://a.wholelottanothing.org/when-everything-becomes-a-profit-center/)
* [2025-01-31, 17:43:03](https://lobste.rs/s/j0nr83/what_s_oauth2_anyway) - [What's OAuth2 Anyway?](https://www.romaglushko.com/blog/whats-aouth2/)
* [2025-01-31, 17:37:40](https://news.ycombinator.com/item?id=42889700) - [Living with Nausea: My Story in Six Charts](https://www.c82.net/blog/?id=96)
* [2025-01-31, 17:20:00](https://tech.slashdot.org/story/25/01/31/1354218/deepseek-outstrips-meta-and-mistral-to-lead-open-source-ai-race?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Outstrips Meta and Mistral To Lead Open-Source AI Race](https://tech.slashdot.org/story/25/01/31/1354218/deepseek-outstrips-meta-and-mistral-to-lead-open-source-ai-race?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 17:14:12](https://news.ycombinator.com/item?id=42889465) - [Shell-ish scripting in Go with ease](https://github.com/bitfield/script)
* [2025-01-31, 17:07:01](https://news.ycombinator.com/item?id=42889407) - [Show HN: Uscope, a New Linux Debugger Written from Scratch](https://github.com/jcalabro/uscope)
* [2025-01-31, 17:01:45](https://lobste.rs/s/wfmynv/how_we_share_secrets_at_fully_remote) - [How we share secrets at a fully-remote startup](https://mill.plainopen.com/how-we-share-secrets-at-a-fully-remote-startup.html)
* [2025-01-31, 17:00:39](https://news.ycombinator.com/item?id=42889351) - [Distro (YC S24) Is Hiring a Chief of Staff in Palo Alto](https://www.ycombinator.com/companies/distro/jobs/VrBerJw-chief-of-staff)
* [2025-01-31, 16:55:26](https://news.ycombinator.com/item?id=42889308) - [Zusie – My Relay Computer](http://www.nablaman.com/relay/about.php)
* [2025-01-31, 16:53:30](https://news.ycombinator.com/item?id=42889297) - [Apple files emergency motion to become defendant in US vs. Google [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1158.0_1.pdf)
* [2025-01-31, 16:46:15](https://news.ycombinator.com/item?id=42889236) - [How to Train an AI Image Model on Yourself](https://www.coryzue.com/writing/make-ai-pictures-of-yourself/)
* [2025-01-31, 16:40:00](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics in Placentas Linked To Premature Births, Study Suggests](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 16:36:23](https://news.ycombinator.com/item?id=42889139) - [Fixing E.T. The Extra-Terrestrial for the Atari 2600 (2013)](http://www.neocomputer.org/projects/et/)
* [2025-01-31, 16:31:18](https://lobste.rs/s/yq8axa/vghf_library_opens_early_access) - [The VGHF Library opens in early access](https://gamehistory.org/vghf-library-launch/)
* [2025-01-31, 16:26:37](https://news.ycombinator.com/item?id=42889052) - [Large Language Models Think Too Fast to Explore Effectively](https://arxiv.org/abs/2501.18009)
* [2025-01-31, 16:00:00](https://slashdot.org/story/25/01/31/1513252/taiwan-says-government-departments-should-not-use-deepseek-citing-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Taiwan Says Government Departments Should Not Use DeepSeek, Citing Security Concerns](https://slashdot.org/story/25/01/31/1513252/taiwan-says-government-departments-should-not-use-deepseek-citing-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 15:51:22](https://lobste.rs/s/tn0x0w/user_valid_pseudo_class) - [The :user-valid pseudo-class](https://html-css-tip-of-the-week.netlify.app/tip/user-valid/)
* [2025-01-31, 15:40:18](https://lobste.rs/s/s5muiu/particles_progress_perseverance) - [Particles, Progress, and Perseverance: A Journey into WebGPU Fluids](https://tympanus.net/codrops/2025/01/29/particles-progress-and-perseverance-a-journey-into-webgpu-fluids/)
* [2025-01-31, 15:28:29](https://lobste.rs/s/qoyhut/accurate_predictions_on_small_data_with) - [Accurate predictions on small data with a tabular foundation model](https://www.nature.com/articles/s41586-024-08328-6)
* [2025-01-31, 15:22:35](https://lobste.rs/s/aatk00/destroying_reprogramming_sprite_engine) - [Destroying and reprogramming the sprite engine of Ghosts ‘n Goblins](https://youtu.be/WmHpMRtgU3I)
* [2025-01-31, 15:20:00](https://apple.slashdot.org/story/25/01/31/153223/apple-battles-for-role-in-google-antitrust-trial-warning-of-serious-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Battles For Role in Google Antitrust Trial, Warning of Serious Risks](https://apple.slashdot.org/story/25/01/31/153223/apple-battles-for-role-in-google-antitrust-trial-warning-of-serious-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 15:00:55](https://news.ycombinator.com/item?id=42888326) - [Images reveal exocomets around nearby stars](https://skyandtelescope.org/astronomy-news/new-images-reveal-exocomets-around-74-nearby-stars/)
* [2025-01-31, 14:48:25](https://news.ycombinator.com/item?id=42888195) - [MillenniumDB: Property graph and RDF engine, still in development](https://github.com/MillenniumDB/MillenniumDB)
* [2025-01-31, 14:41:00](https://yro.slashdot.org/story/25/01/31/1441220/whatsapp-says-journalists-and-civil-society-members-were-targets-of-israeli-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://yro.slashdot.org/story/25/01/31/1441220/whatsapp-says-journalists-and-civil-society-members-were-targets-of-israeli-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 14:23:29](https://lobste.rs/s/tez0nf/potential_rust_inspired_simplification) - [Potential Rust-inspired simplification for Go error handling](https://github.com/golang/go/discussions/71460)
* [2025-01-31, 14:00:00](https://it.slashdot.org/story/25/01/31/0627226/microsoft-slaps-400-premium-on-intel-powered-surface-lineup?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Slaps $400 Premium on Intel-powered Surface Lineup](https://it.slashdot.org/story/25/01/31/0627226/microsoft-slaps-400-premium-on-intel-powered-surface-lineup?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 13:45:06](https://news.ycombinator.com/item?id=42887581) - [Show HN: voidDB – A transactional key-value DB written in Go for 64-bit Linux](https://github.com/voidDB/voidDB)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 13:07:38](https://news.ycombinator.com/item?id=42887274) - [Building a Mesh Using Spherical Embedding](https://andrews.wiki/spherical-mesh)
* [2025-01-31, 13:00:00](https://tech.slashdot.org/story/25/01/31/055235/quantum-computer-built-on-server-racks-paves-the-way-to-bigger-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Quantum Computer Built On Server Racks Paves the Way To Bigger Machines](https://tech.slashdot.org/story/25/01/31/055235/quantum-computer-built-on-server-racks-paves-the-way-to-bigger-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 12:11:48](https://news.ycombinator.com/item?id=42886867) - [Ear muscle we thought humans didn't use activates when people listen hard](https://www.frontiersin.org/news/2025/01/31/ear-muscle-wiggling-ears-activates-listening-frontiers-neuroscience)
* [2025-01-31, 11:40:30](https://news.ycombinator.com/item?id=42886718) - [Taking a $15 Casio F91W 5km underwater](https://www.watchesofespionage.com/blogs/woe-dispatch/casio-f91w-diving-underwater-pressure-test)
* [2025-01-31, 10:48:43](https://lobste.rs/s/aeut8o/blazing_fast_directory_tree_traversal) - [Blazing-Fast Directory Tree Traversal: Haskell Streamly Beats Rust](https://www.youtube.com/watch?v=voy1iT2E4bk)
* [2025-01-31, 10:46:39](https://lobste.rs/s/cayoei/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/cayoei/what_are_you_doing_this_weekend)
* [2025-01-31, 10:45:48](https://lobste.rs/s/xpwcbe/rust_s_rand_0_9_0_is_out) - [Rust's rand 0.9.0 is out](https://github.com/rust-random/rand/releases/tag/0.9.0)
* [2025-01-31, 10:43:48](https://lobste.rs/s/bpclm0/nom_parser_combinators_now_released) - [nom parser combinators now released in version 8, with a new architecture](https://github.com/rust-bakery/nom/blob/main/CHANGELOG.md#800-2025-01-25)
* [2025-01-31, 10:42:07](https://lobste.rs/s/rbjw6d/announcing_rust_1_84_1) - [Announcing Rust 1.84.1](https://blog.rust-lang.org/2025/01/30/Rust-1.84.1.html)
* [2025-01-31, 10:04:12](https://lobste.rs/s/wafwbh/gamedev_city_game_development_centric) - [Gamedev.city: Game development-centric link aggregator](https://gamedev.city/)
* [2025-01-31, 10:00:00](https://hardware.slashdot.org/story/25/01/31/0443206/intel-wont-bring-its-falcon-shores-ai-chip-to-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel Won't Bring Its Falcon Shores AI Chip To Market](https://hardware.slashdot.org/story/25/01/31/0443206/intel-wont-bring-its-falcon-shores-ai-chip-to-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 09:59:51](https://lobste.rs/s/asyabf/falsehoods_programmers_believe_about) - [Falsehoods programmers believe about null pointers](https://purplesyringa.moe/blog/falsehoods-programmers-believe-about-null-pointers/)
* [2025-01-31, 09:56:32](https://lobste.rs/s/9xtd4v/introducing_werk) - [Introducing Werk](https://simonask.github.io/introducing-werk/)
* [2025-01-31, 09:29:52](https://news.ycombinator.com/item?id=42886079) - [Show HN: Ldump – serialize any Lua data](https://github.com/girvel/ldump)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 07:56:23](https://news.ycombinator.com/item?id=42885520) - [Hacker News for Gamedev](https://gamedev.city/)
* [2025-01-31, 07:00:00](https://tech.slashdot.org/story/25/01/31/0428255/am-radio-for-all-vehicles-legislation-reintroduced?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AM Radio For All Vehicles Legislation Reintroduced](https://tech.slashdot.org/story/25/01/31/0428255/am-radio-for-all-vehicles-legislation-reintroduced?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 06:11:30](https://news.ycombinator.com/item?id=42885087) - [Hydro: Distributed Programming Framework for Rust](https://hydro.run/docs/hydro/)
* [2025-01-31, 05:00:00](https://tech.slashdot.org/story/25/01/31/0349214/everything-i-say-leaks-zuckerberg-says-in-leaked-meeting-audio?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Everything I Say Leaks,' Zuckerberg Says in Leaked Meeting Audio](https://tech.slashdot.org/story/25/01/31/0349214/everything-i-say-leaks-zuckerberg-says-in-leaked-meeting-audio?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 03:51:44](https://news.ycombinator.com/item?id=42884556) - [Rubywm: An X11 window manager in pure Ruby](https://github.com/vidarh/rubywm)
* [2025-01-31, 03:30:00](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VGHF Opens Free Online Access To 1,500 Classic Game Mags, 30K Historic Files](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 02:58:28](https://news.ycombinator.com/item?id=42884338) - [TopoNets: High performing vision and language models with brain-like topography](https://arxiv.org/abs/2501.16396)
* [2025-01-31, 02:09:50](https://news.ycombinator.com/item?id=42884133) - [Xerox Alto Source Code (2014)](https://computerhistory.org/blog/xerox-alto-source-code/)
* [2025-01-31, 02:08:10](https://lobste.rs/s/umnpte/xerox_alto_source_code_2014) - [Xerox Alto Source Code (2014)](https://computerhistory.org/blog/xerox-alto-source-code/)
* [2025-01-31, 01:54:09](https://lobste.rs/s/2an1ay/how_jane_street_accidentally_built) - [How Jane Street accidentally built a better build system for OCaml](https://blog.janestreet.com/how-we-accidentally-built-a-better-build-system-for-ocaml-index/)
* [2025-01-31, 01:00:00](https://yro.slashdot.org/story/25/01/30/2249212/italy-blocks-deepseek-over-data-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italy Blocks DeepSeek Over Data Privacy Concerns](https://yro.slashdot.org/story/25/01/30/2249212/italy-blocks-deepseek-over-data-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 00:20:00](https://apple.slashdot.org/story/25/01/30/2224253/apple-reports-quarterly-record-revenue-of-124-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Reports Quarterly Record Revenue of $124 Billion](https://apple.slashdot.org/story/25/01/30/2224253/apple-reports-quarterly-record-revenue-of-124-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 21:16:53](https://lobste.rs/s/mwfd4n/contracts_for_c_explained_5_minutes) - [Contracts for C++ explained in 5 minutes](https://timur.audio/contracts_explained_in_5_mins)
* [2025-01-30, 20:39:47](https://lobste.rs/s/qyypzo/deepseek_database_leak) - [DeepSeek database leak](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak)
* [2025-01-30, 20:34:24](https://lobste.rs/s/gvhivz/surprising_way_save_memory_with_bytesio) - [The surprising way to save memory with BytesIO](https://pythonspeed.com/articles/bytesio-reduce-memory-usage/)
* [2025-01-30, 20:14:47](https://news.ycombinator.com/item?id=42881724) - [A better build system for OCaml](https://blog.janestreet.com/how-we-accidentally-built-a-better-build-system-for-ocaml-index/)
* [2025-01-30, 19:37:42](https://news.ycombinator.com/item?id=42881342) - [Stats – macOS system monitor in your menu bar](https://github.com/exelban/stats)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 13:37:14](https://lobste.rs/s/lozl1i/equinix_sunset_future_gitlab) - [Equinix Sunset, future of gitlab.freedesktop.org](https://gitlab.freedesktop.org/freedesktop/freedesktop/-/issues/2011)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 13:21:58](https://lobste.rs/s/yubalv/pointers_are_complicated_ii_we_need) - [Pointers Are Complicated II, or: We need better language specs (2020)](https://www.ralfj.de/blog/2020/12/14/provenance.html)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 04:34:25](https://lobste.rs/s/mwxbm4/reversing_pixel_4a_battery_update) - [Reversing the Pixel 4a battery update](https://social.treehouse.systems/@marcan/113914172433692339)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 14:35:23](https://news.ycombinator.com/item?id=42852754) - [Real-time, river sections downstream of sewage discharges from storm overflows](https://www.sewagemap.co.uk/)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 21:03:53](https://news.ycombinator.com/item?id=42845603) - [Quantel Paintbox History](https://www.quantelpaintbox.com/history.html)
* [2025-01-27, 20:18:38](https://news.ycombinator.com/item?id=42845169) - [Better Know a Ruby Thing: Singleton Classes](https://noelrappin.com/blog/2025/01/better-know-a-ruby-thing-singleton-classes/)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
