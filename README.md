# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in AI and Scientific Tools

* [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://github.com/SakanaAI/AI-Scientist) ([comments](https://lobste.rs/s/6a5exl/ai_scientist_towards_fully_automated))

* [Will Scaling Reasoning Models Like o3 and R1 Unlock Superhuman Reasoning?](https://scaling-reasoning.chrisbarber.co/) ([comments](https://lobste.rs/s/fhorfj/will_scaling_reasoning_models_like_o3_r1))

* [OpenAI O3-Mini](https://openai.com/index/openai-o3-mini/) ([comments](https://news.ycombinator.com/item?id=42890627))

* [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss))

## Tech Controversies and Security

* [Musk aides lock government workers out of computer systems at US agency](https://www.reuters.com/world/us/musk-aides-lock-government-workers-out-computer-systems-us-agency-sources-say-2025-01-31/) ([comments](https://news.ycombinator.com/item?id=42892278))

* [US government agency argues that money isn't property–so it can take yours](https://reason.com/2025/01/31/the-government-says-money-isnt-property-so-it-can-take-yours/) ([comments](https://news.ycombinator.com/item?id=42891724))

* [FBI, Dutch police disrupt 'Manipulaters' phishing gang](https://krebsonsecurity.com/2025/01/fbi-dutch-police-disrupt-manipulaters-phishing-gang/) ([comments](https://news.ycombinator.com/item?id=42890290))

* [DeepSeek database leak](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak) ([comments](https://lobste.rs/s/qyypzo/deepseek_database_leak))

## Scientific Discoveries and Retractions

* [Thousands of Highly Cited Scientists Have At Least One Retraction](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss))

* [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss))

* [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss))

## AI Counter-Strategies

* [Cursing Disables Google's AI Overviews](https://tech.slashdot.org/story/25/01/31/1929233/cursing-disables-googles-ai-overviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/01/31/1929233/cursing-disables-googles-ai-overviews?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Add "fucking" to your Google searches to neutralize AI summaries](https://gizmodo.com/add-fcking-to-your-google-searches-to-neutralize-ai-summaries-2000557710) ([comments](https://news.ycombinator.com/item?id=42892191))

* [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss))

## Environmental and Health Studies

* [Microplastics in Placentas Linked To Premature Births, Study Suggests](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss))

## Hardware and Software Projects

* [Guten: A tiny newspaper printer](https://amanvir.com/guten) ([comments](https://lobste.rs/s/hzo4nb/guten_tiny_newspaper_printer))

* [Zusie – My Relay Computer](http://www.nablaman.com/relay/about.php) ([comments](https://news.ycombinator.com/item?id=42889308))

* [Show HN: Uscope, a new Linux debugger written from scratch](https://github.com/jcalabro/uscope) ([comments](https://news.ycombinator.com/item?id=42889407))

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

* [2025-01-31, 21:58:52](https://lobste.rs/s/6a5exl/ai_scientist_towards_fully_automated) - [The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery](https://github.com/SakanaAI/AI-Scientist)
* [2025-01-31, 21:43:33](https://lobste.rs/s/fhorfj/will_scaling_reasoning_models_like_o3_r1) - [Will Scaling Reasoning Models Like o3 and R1 Unlock Superhuman Reasoning?](https://scaling-reasoning.chrisbarber.co/)
* [2025-01-31, 21:26:43](https://news.ycombinator.com/item?id=42892278) - [Musk aides lock government workers out of computer systems at US agency](https://www.reuters.com/world/us/musk-aides-lock-government-workers-out-computer-systems-us-agency-sources-say-2025-01-31/)
* [2025-01-31, 21:22:00](https://apple.slashdot.org/story/25/01/31/2011240/apple-scraps-work-on-mac-connected-augmented-reality-glasses?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Scraps Work on Mac-Connected Augmented Reality Glasses](https://apple.slashdot.org/story/25/01/31/2011240/apple-scraps-work-on-mac-connected-augmented-reality-glasses?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 21:20:40](https://news.ycombinator.com/item?id=42892191) - [Add \"fucking\" to your Google searches to neutralize AI summaries](https://gizmodo.com/add-fcking-to-your-google-searches-to-neutralize-ai-summaries-2000557710)
* [2025-01-31, 21:19:28](https://lobste.rs/s/x8ngn6/from_pfui_bevy_hui_make_bevy_ui_great) - [From 'pfui' to bevy_hui - make Bevy UI great](https://www.youtube.com/watch?v=1q6bN8CNlhA)
* [2025-01-31, 21:06:52](https://news.ycombinator.com/item?id=42892003) - [How will Australia's under-16 social media ban work? We asked the law's enforcer](https://www.npr.org/2024/12/19/nx-s1-5231020/australia-top-regulator-kids-social-media-ban)
* [2025-01-31, 21:00:11](https://news.ycombinator.com/item?id=42891909) - [FurtherAI (YC W24) Is Hiring engineers and researchers to build Vertical AI agents](https://www.ycombinator.com/companies/furtherai/jobs)
* [2025-01-31, 20:52:10](https://news.ycombinator.com/item?id=42891821) - [GenAI Art Is the Least Imaginative Use of AI Imaginable](https://hai.stanford.edu/news/ge-wang-genai-art-least-imaginative-use-ai-imaginable)
* [2025-01-31, 20:42:34](https://news.ycombinator.com/item?id=42891724) - [US government agency argues that money isn't property–so it can take yours](https://reason.com/2025/01/31/the-government-says-money-isnt-property-so-it-can-take-yours/)
* [2025-01-31, 20:42:00](https://slashdot.org/story/25/01/31/1944207/dell-is-making-everyone-return-to-office-too?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dell is Making Everyone Return To Office, Too](https://slashdot.org/story/25/01/31/1944207/dell-is-making-everyone-return-to-office-too?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 20:23:00](https://lobste.rs/s/hzo4nb/guten_tiny_newspaper_printer) - [Guten: A tiny newspaper printer](https://amanvir.com/guten)
* [2025-01-31, 20:05:00](https://tech.slashdot.org/story/25/01/31/1929233/cursing-disables-googles-ai-overviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cursing Disables Google's AI Overviews](https://tech.slashdot.org/story/25/01/31/1929233/cursing-disables-googles-ai-overviews?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 19:55:14](https://news.ycombinator.com/item?id=42891200) - [Elite on the 6502: The original 6502 assembly source, heavily commented](https://elite.bbcelite.com/)
* [2025-01-31, 19:52:33](https://lobste.rs/s/zf5dqr/navigating_global_regulations_open) - [Navigating Global Regulations and Open Source: US OFAC Sanctions](https://www.linuxfoundation.org/blog/navigating-global-regulations-and-open-source-us-ofac-sanctions)
* [2025-01-31, 19:51:29](https://news.ycombinator.com/item?id=42891148) - [Instagram and Facebook Blocked and Hid Abortion Pill Providers' Posts](https://www.nytimes.com/2025/01/23/technology/instagram-facebook-abortion-pill-providers.html)
* [2025-01-31, 19:41:49](https://news.ycombinator.com/item?id=42891042) - [Bypass DeepSeek censorship by speaking in hex](https://substack.com/home/post/p-156004330)
* [2025-01-31, 19:16:00](https://slashdot.org/story/25/01/31/1916254/openais-o3-mini-faster-cheaper-ai-that-fact-checks-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI's o3-mini: Faster, Cheaper AI That Fact-Checks Itself](https://slashdot.org/story/25/01/31/1916254/openais-o3-mini-faster-cheaper-ai-that-fact-checks-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 19:08:15](https://news.ycombinator.com/item?id=42890627) - [OpenAI O3-Mini](https://openai.com/index/openai-o3-mini/)
* [2025-01-31, 18:47:51](https://news.ycombinator.com/item?id=42890389) - [The Tensor Cookbook](https://tensorcookbook.com/)
* [2025-01-31, 18:40:00](https://news.slashdot.org/story/25/01/31/1656220/magical-efficient-market-theory-rebuked-in-era-of-passive-investing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Magical' Efficient-Market Theory Rebuked in Era of Passive Investing](https://news.slashdot.org/story/25/01/31/1656220/magical-efficient-market-theory-rebuked-in-era-of-passive-investing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 18:36:43](https://news.ycombinator.com/item?id=42890290) - [FBI, Dutch police disrupt 'Manipulaters' phishing gang](https://krebsonsecurity.com/2025/01/fbi-dutch-police-disrupt-manipulaters-phishing-gang/)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 18:01:00](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of Highly Cited Scientists Have At Least One Retraction](https://science.slashdot.org/story/25/01/31/1540254/thousands-of-highly-cited-scientists-have-at-least-one-retraction?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 17:48:23](https://news.ycombinator.com/item?id=42889786) - [Theoretical limitations of multi-layer Transformer](https://arxiv.org/abs/2412.02975)
* [2025-01-31, 17:48:22](https://lobste.rs/s/kwp8o8/jujutsu_vcs_introduction_patterns) - [Jujutsu VCS Introduction and Patterns](https://kubamartin.com/posts/introduction-to-the-jujutsu-vcs/)
* [2025-01-31, 17:43:03](https://lobste.rs/s/j0nr83/what_s_oauth2_anyway) - [What's OAuth2 Anyway?](https://www.romaglushko.com/blog/whats-aouth2/)
* [2025-01-31, 17:37:40](https://news.ycombinator.com/item?id=42889700) - [Living with Nausea: My Story in Six Charts](https://www.c82.net/blog/?id=96)
* [2025-01-31, 17:20:00](https://tech.slashdot.org/story/25/01/31/1354218/deepseek-outstrips-meta-and-mistral-to-lead-open-source-ai-race?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Outstrips Meta and Mistral To Lead Open-Source AI Race](https://tech.slashdot.org/story/25/01/31/1354218/deepseek-outstrips-meta-and-mistral-to-lead-open-source-ai-race?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 17:14:12](https://news.ycombinator.com/item?id=42889465) - [Shell-ish scripting in Go with ease](https://github.com/bitfield/script)
* [2025-01-31, 17:07:01](https://news.ycombinator.com/item?id=42889407) - [Show HN: Uscope, a new Linux debugger written from scratch](https://github.com/jcalabro/uscope)
* [2025-01-31, 17:01:45](https://lobste.rs/s/wfmynv/how_we_share_secrets_at_fully_remote) - [How we share secrets at a fully-remote startup](https://mill.plainopen.com/how-we-share-secrets-at-a-fully-remote-startup.html)
* [2025-01-31, 16:55:26](https://news.ycombinator.com/item?id=42889308) - [Zusie – My Relay Computer](http://www.nablaman.com/relay/about.php)
* [2025-01-31, 16:53:30](https://news.ycombinator.com/item?id=42889297) - [Apple files emergency motion to become defendant in US vs. Google [pdf]](https://storage.courtlistener.com/recap/gov.uscourts.dcd.223205/gov.uscourts.dcd.223205.1158.0_1.pdf)
* [2025-01-31, 16:46:15](https://news.ycombinator.com/item?id=42889236) - [How to Train an AI Image Model on Yourself](https://www.coryzue.com/writing/make-ai-pictures-of-yourself/)
* [2025-01-31, 16:40:00](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics in Placentas Linked To Premature Births, Study Suggests](https://science.slashdot.org/story/25/01/31/1433248/microplastics-in-placentas-linked-to-premature-births-study-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 16:36:23](https://news.ycombinator.com/item?id=42889139) - [Fixing E.T. The Extra-Terrestrial for the Atari 2600 (2013)](http://www.neocomputer.org/projects/et/)
* [2025-01-31, 16:31:18](https://lobste.rs/s/yq8axa/vghf_library_opens_early_access) - [The VGHF Library opens in early access](https://gamehistory.org/vghf-library-launch/)
* [2025-01-31, 16:26:37](https://news.ycombinator.com/item?id=42889052) - [Large Language Models Think Too Fast to Explore Effectively](https://arxiv.org/abs/2501.18009)
* [2025-01-31, 16:00:00](https://slashdot.org/story/25/01/31/1513252/taiwan-says-government-departments-should-not-use-deepseek-citing-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Taiwan Says Government Departments Should Not Use DeepSeek, Citing Security Concerns](https://slashdot.org/story/25/01/31/1513252/taiwan-says-government-departments-should-not-use-deepseek-citing-security-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 15:51:22](https://lobste.rs/s/tn0x0w/user_valid_pseudo_class) - [The :user-valid pseudo-class](https://html-css-tip-of-the-week.netlify.app/tip/user-valid/)
* [2025-01-31, 15:28:29](https://lobste.rs/s/qoyhut/accurate_predictions_on_small_data_with) - [Accurate predictions on small data with a tabular foundation model](https://www.nature.com/articles/s41586-024-08328-6)
* [2025-01-31, 15:20:00](https://apple.slashdot.org/story/25/01/31/153223/apple-battles-for-role-in-google-antitrust-trial-warning-of-serious-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Battles For Role in Google Antitrust Trial, Warning of Serious Risks](https://apple.slashdot.org/story/25/01/31/153223/apple-battles-for-role-in-google-antitrust-trial-warning-of-serious-risks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 15:00:55](https://news.ycombinator.com/item?id=42888326) - [Images reveal exocomets around nearby stars](https://skyandtelescope.org/astronomy-news/new-images-reveal-exocomets-around-74-nearby-stars/)
* [2025-01-31, 14:48:25](https://news.ycombinator.com/item?id=42888195) - [MillenniumDB: Property graph and RDF engine, still in development](https://github.com/MillenniumDB/MillenniumDB)
* [2025-01-31, 14:41:00](https://yro.slashdot.org/story/25/01/31/1441220/whatsapp-says-journalists-and-civil-society-members-were-targets-of-israeli-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://yro.slashdot.org/story/25/01/31/1441220/whatsapp-says-journalists-and-civil-society-members-were-targets-of-israeli-spyware?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 14:23:29](https://lobste.rs/s/tez0nf/potential_rust_inspired_simplification) - [Potential Rust-inspired simplification for Go error handling](https://github.com/golang/go/discussions/71460)
* [2025-01-31, 14:00:00](https://it.slashdot.org/story/25/01/31/0627226/microsoft-slaps-400-premium-on-intel-powered-surface-lineup?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Slaps $400 Premium on Intel-powered Surface Lineup](https://it.slashdot.org/story/25/01/31/0627226/microsoft-slaps-400-premium-on-intel-powered-surface-lineup?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 13:45:06](https://news.ycombinator.com/item?id=42887581) - [Show HN: voidDB – A transactional key-value DB written in Go for 64-bit Linux](https://github.com/voidDB/voidDB)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 13:00:00](https://tech.slashdot.org/story/25/01/31/055235/quantum-computer-built-on-server-racks-paves-the-way-to-bigger-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Quantum Computer Built On Server Racks Paves the Way To Bigger Machines](https://tech.slashdot.org/story/25/01/31/055235/quantum-computer-built-on-server-racks-paves-the-way-to-bigger-machines?utm_source=rss1.0mainlinkanon&utm_medium=feed)
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
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 07:00:00](https://tech.slashdot.org/story/25/01/31/0428255/am-radio-for-all-vehicles-legislation-reintroduced?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AM Radio For All Vehicles Legislation Reintroduced](https://tech.slashdot.org/story/25/01/31/0428255/am-radio-for-all-vehicles-legislation-reintroduced?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 06:11:30](https://news.ycombinator.com/item?id=42885087) - [Hydro: Distributed Programming Framework for Rust](https://hydro.run/docs/hydro/)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 02:08:10](https://lobste.rs/s/umnpte/xerox_alto_source_code_2014) - [Xerox Alto Source Code (2014)](https://computerhistory.org/blog/xerox-alto-source-code/)
* [2025-01-31, 01:54:09](https://lobste.rs/s/2an1ay/how_jane_street_accidentally_built) - [How Jane Street accidentally built a better build system for OCaml](https://blog.janestreet.com/how-we-accidentally-built-a-better-build-system-for-ocaml-index/)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 20:39:47](https://lobste.rs/s/qyypzo/deepseek_database_leak) - [DeepSeek database leak](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak)
* [2025-01-30, 20:34:24](https://lobste.rs/s/gvhivz/surprising_way_save_memory_with_bytesio) - [The surprising way to save memory with BytesIO](https://pythonspeed.com/articles/bytesio-reduce-memory-usage/)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 13:37:14](https://lobste.rs/s/lozl1i/equinix_sunset_future_gitlab) - [Equinix Sunset, future of gitlab.freedesktop.org](https://gitlab.freedesktop.org/freedesktop/freedesktop/-/issues/2011)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 16:06:22](https://news.ycombinator.com/item?id=42853904) - [When Greedy Algorithms Can Be Faster [C++]](https://16bpp.net/blog/post/when-greedy-algorithms-can-be-faster/)
* [2025-01-28, 15:55:16](https://news.ycombinator.com/item?id=42853738) - [Paris P2P Festival and Hackathon](https://p2p.paris/fr/)
* [2025-01-28, 14:35:23](https://news.ycombinator.com/item?id=42852754) - [Real-time, river sections downstream of sewage discharges from storm overflows](https://www.sewagemap.co.uk/)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 20:18:38](https://news.ycombinator.com/item?id=42845169) - [Better Know a Ruby Thing: Singleton Classes](https://noelrappin.com/blog/2025/01/better-know-a-ruby-thing-singleton-classes/)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
