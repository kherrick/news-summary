# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [QUIC for the kernel](https://lwn.net/Articles/1029851/) explores integrating QUIC protocol capabilities directly into the kernel, offering potential improvements in networking performance. [Comments](https://lobste.rs/s/ogv8ay/quic_for_kernel)

* [Ursa: A Leaderless, Object Storage–Based Alternative to Kafka](https://streamnative.io/products/ursa) proposes a new distributed messaging system to optimize storage and scalability. [Comments](https://news.ycombinator.com/item?id=44746415)

* [Carbon Language: An experimental successor to C++](https://docs.carbon-lang.dev/) details Google's experimental language aimed at improving C++ features and integrations. [Comments](https://news.ycombinator.com/item?id=44745984)

* [Google’s AlphaEarth AI Maps Any 10-Meter Area on Earth Using Satellite Data](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) showcases the use of AI in high-precision mapping. [Comments](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity

* [GCP CloudQuarry: Searching for Secrets in Public GCP Images](https://trufflesecurity.com/blog/guest-post-gcp-cloudquarry-searching-for-secrets-in-public-gcp-images) explores security risks associated with public cloud platforms. [Comments](https://news.ycombinator.com/item?id=44746338)

* [In search of riches, hackers plant 4G-enabled Raspberry Pi in bank network](https://arstechnica.com/security/2025/07/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network/) highlights a real-world exploitation of IoT devices for cyber breaches. [Comments](https://lobste.rs/s/r3k5nr/search_riches_hackers_plant_4g_enabled)

* [China Claims Nvidia Built Backdoor Into H20 Chip Designed For Chinese Market](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) raises concerns about hardware security vulnerabilities. [Comments](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Scientific Discoveries

* [Physicists Disagree Wildly on What Quantum Mechanics Says About Reality](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed) delves into ongoing debates among physicists attempting to interpret quantum mechanics implications. [Comments](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Peacock Feathers Can Be Lasers](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&utm_medium=feed) reveals new optical properties of peacock feathers, sparking potential bio-photonics applications. [Comments](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Society and Policy

* [U.S. Senators Introduce New Pirate Site Blocking Bill: Block Beard](https://torrentfreak.com/u-s-senators-introduce-new-pirate-site-blocking-bill-block-beard/) discusses the controversial legislative proposal to tackle copyright infringement. [Comments](https://news.ycombinator.com/item?id=44746334)

* [Australia Widens Teen Social Media Ban To YouTube, Scraps Exemption](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&utm_medium=feed) examines Australia's shift to stricter regulations on teen social media access. [Comments](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-07-31, 15:28:54](https://lobste.rs/s/ogv8ay/quic_for_kernel) - [QUIC for the kernel](https://lwn.net/Articles/1029851/)
* [2025-07-31, 15:22:00](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Claims Nvidia Built Backdoor Into H20 Chip Designed For Chinese Market](https://slashdot.org/story/25/07/31/157224/china-claims-nvidia-built-backdoor-into-h20-chip-designed-for-chinese-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 15:01:08](https://news.ycombinator.com/item?id=44746415) - [Ursa: A Leaderless, Object Storage–Based Alternative to Kafka](https://streamnative.io/products/ursa)
* [2025-07-31, 14:55:34](https://news.ycombinator.com/item?id=44746338) - [GCP CloudQuarry: Searching for Secrets in Public GCP Images](https://trufflesecurity.com/blog/guest-post-gcp-cloudquarry-searching-for-secrets-in-public-gcp-images)
* [2025-07-31, 14:55:16](https://news.ycombinator.com/item?id=44746334) - [U.S. Senators Introduce New Pirate Site Blocking Bill: Block Beard](https://torrentfreak.com/u-s-senators-introduce-new-pirate-site-blocking-bill-block-beard/)
* [2025-07-31, 14:54:27](https://news.ycombinator.com/item?id=44746321) - [Magentic-UI: Towards Human-in-the-Loop Agentic Systems](https://arxiv.org/abs/2507.22358)
* [2025-07-31, 14:47:25](https://lobste.rs/s/43hw9a/math_is_haunted) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-31, 14:40:00](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Joins $4 Trillion Club](https://slashdot.org/story/25/07/31/1439206/microsoft-joins-4-trillion-club?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 14:37:10](https://lobste.rs/s/e03oa9/what_is_gvisor) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 14:23:40](https://news.ycombinator.com/item?id=44745984) - [Carbon Language: An experimental successor to C++](https://docs.carbon-lang.dev/)
* [2025-07-31, 14:16:07](https://news.ycombinator.com/item?id=44745897) - [MacBook Pro Insomnia](https://manuel.bernhardt.io/posts/2025-07-24-macbook-pro-insomnia)
* [2025-07-31, 14:11:29](https://news.ycombinator.com/item?id=44745843) - [Orion Browser by Kagi](https://kagi.com/orion/)
* [2025-07-31, 14:06:31](https://lobste.rs/s/gl3oty/local_first_search_tale_frustrated) - [Local-first search. A tale of frustrated dreams, utopian user experiences and calculated tradeoffs](https://fika.bar/paoramen/local-first-search-01K1B0WM1X4P5SV5QAES0Z5N75)
* [2025-07-31, 14:06:00](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Physicists Disagree Wildly on What Quantum Mechanics Says About Reality](https://science.slashdot.org/story/25/07/31/146255/physicists-disagree-wildly-on-what-quantum-mechanics-says-about-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 13:40:22](https://news.ycombinator.com/item?id=44745539) - [What is gVisor?](https://blog.yelinaung.com/posts/gvisor/)
* [2025-07-31, 13:22:22](https://news.ycombinator.com/item?id=44745383) - [GenosDB (GDB) – Decentralized P2P Graph Database](https://www.npmjs.com/package/genosdb)
* [2025-07-31, 13:17:35](https://news.ycombinator.com/item?id=44745347) - [NSW Fair Trading – Dark Patterns](https://www.nsw.gov.au/departments-and-agencies/fair-trading/dark-patterns)
* [2025-07-31, 13:15:00](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Overflow Data Reveals the Hidden Productivity Tax of &apos;Almost Right&apos; AI Code](https://developers.slashdot.org/story/25/07/31/1314207/stack-overflow-data-reveals-the-hidden-productivity-tax-of-almost-right-ai-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 13:06:16](https://news.ycombinator.com/item?id=44745250) - [Nova: A New Web Framework for Erlang](https://news.ycombinator.com/item?id=44745250)
* [2025-07-31, 12:48:48](https://news.ycombinator.com/item?id=44745123) - [So you&apos;re a manager now](https://scottkosman.com/post/blog/so-youre-a-manager-now/)
* [2025-07-31, 12:40:05](https://news.ycombinator.com/item?id=44745045) - [Benchmarks in CI: Escaping the Cloud Chaos](https://codspeed.io/blog/benchmarks-in-ci-without-noise)
* [2025-07-31, 12:32:42](https://lobste.rs/s/qwaniu/vanity_import_paths_go_2019) - [Vanity import paths in Go (2019)](https://sagikazarmark.hu/blog/vanity-import-paths-in-go/)
* [2025-07-31, 12:25:43](https://news.ycombinator.com/item?id=44744927) - [Altima NSX](https://computeradsfromthepast.substack.com/p/altima-nsx)
* [2025-07-31, 12:06:32](https://lobste.rs/s/r3k5nr/search_riches_hackers_plant_4g_enabled) - [In search of riches, hackers plant 4G-enabled Raspberry Pi in bank network](https://arstechnica.com/security/2025/07/in-search-of-riches-hackers-plant-4g-enabled-raspberry-pi-in-bank-network/)
* [2025-07-31, 12:00:26](https://news.ycombinator.com/item?id=44744756) - [Infracost (YC W21) hiring first PM to shift $600B cloud spend to proactive](https://www.ycombinator.com/companies/infracost/jobs/ukwJ299-senior-product-manager)
* [2025-07-31, 11:54:22](https://news.ycombinator.com/item?id=44744715) - [Many countries that said no to ChatControl in 2024 are now undecided](https://digitalcourage.social/@echo_pbreyer/114946559233051667)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 11:37:22](https://news.ycombinator.com/item?id=44744578) - [Introduction to Computer Music](https://cmtext.com/)
* [2025-07-31, 11:19:54](https://news.ycombinator.com/item?id=44744454) - [How was the Universal Pictures 1936 opening logo created?](https://movies.stackexchange.com/questions/128020/how-was-the-universal-pictures-1936-opening-logo-created)
* [2025-07-31, 10:57:58](https://news.ycombinator.com/item?id=44744331) - [GEPA: Reflective prompt evolution can outperform reinforcement learning](https://arxiviq.substack.com/p/gepa-reflective-prompt-evolution)
* [2025-07-31, 10:56:21](https://news.ycombinator.com/item?id=44744324) - [I tried Servo, the undercover web browser engine made with Rust](https://www.spacebar.news/servo-undercover-web-browser-engine/)
* [2025-07-31, 10:51:26](https://lobste.rs/s/yg4vde/sync_primitives_are_functionally) - [Sync primitives are Functionally Complete](http://kprotty.me/2025/07/31/sync-primitives-are-functionally-complete.html)
* [2025-07-31, 10:03:54](https://news.ycombinator.com/item?id=44744079) - [How to trigger a command on Linux when power switches from AC to battery](https://dataswamp.org/~solene/2025-05-31-linux-killswitch-on-power-disconnect.html)
* [2025-07-31, 10:00:00](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Widens Teen Social Media Ban To YouTube, Scraps Exemption](https://yro.slashdot.org/story/25/07/31/0037258/australia-widens-teen-social-media-ban-to-youtube-scraps-exemption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 08:02:05](https://lobste.rs/s/olb8w6/mounting_atmosphere) - [Mounting The Atmosphere](https://oppi.li/posts/mounting_the_atmosphere/)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 07:00:00](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peacock Feathers Can Be Lasers](https://science.slashdot.org/story/25/07/31/0025256/peacock-feathers-can-be-lasers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 04:38:54](https://lobste.rs/s/rltgp7/tracking_source_locations_futhark) - [Tracking source locations in the Futhark compiler](https://futhark-lang.org/blog/2025-07-29-tracking-source-locations.html)
* [2025-07-31, 03:43:15](https://lobste.rs/s/8u05xg/architecture_decision_record) - [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture-decision-record)
* [2025-07-31, 03:30:00](https://tech.slashdot.org/story/25/07/30/2216225/google-tool-misused-to-scrub-tech-ceos-shady-past-from-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tool Misused To Scrub Tech CEO&apos;s Shady Past From Search](https://tech.slashdot.org/story/25/07/30/2216225/google-tool-misused-to-scrub-tech-ceos-shady-past-from-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-31, 01:36:12](https://lobste.rs/s/hpmmo4/build_your_own_minisforum_n5_inspired) - [Build Your Own Minisforum N5 Inspired Mini NAS: A Comprehensive Guide](https://jackharvest.com/index.php/2025/07/27/build-your-own-minisforum-n5-inspired-mini-nas-a-comprehensive-guide/)
* [2025-07-31, 01:30:00](https://slashdot.org/story/25/07/30/227205/voice-actors-push-back-as-ai-threatens-dubbing-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Voice Actors Push Back As AI Threatens Dubbing Industry](https://slashdot.org/story/25/07/30/227205/voice-actors-push-back-as-ai-threatens-dubbing-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 00:52:00](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AlphaEarth AI Maps Any 10-Meter Area on Earth Using Satellite Data](https://news.slashdot.org/story/25/07/30/2032255/googles-alphaearth-ai-maps-any-10-meter-area-on-earth-using-satellite-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-31, 00:10:00](https://tech.slashdot.org/story/25/07/30/2015220/boring-company-to-build-tesla-tunnels-under-nashville?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boring Company To Build Tesla Tunnels Under Nashville](https://tech.slashdot.org/story/25/07/30/2015220/boring-company-to-build-tesla-tunnels-under-nashville?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 23:50:20](https://lobste.rs/s/gmsuvq/go_s_race_detector_has_mutex_blind_spot) - [Go&apos;s race detector has a mutex blind spot](https://doublefree.dev/go-race-mutex-blindspot/)
* [2025-07-30, 23:30:00](https://tech.slashdot.org/story/25/07/30/205208/scammers-unleash-flood-of-slick-online-gaming-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scammers Unleash Flood of Slick Online Gaming Sites](https://tech.slashdot.org/story/25/07/30/205208/scammers-unleash-flood-of-slick-online-gaming-sites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 22:51:20](https://lobste.rs/s/jkbsfi/i_built_my_blog_with_c_preprocessor_macros) - [I built my blog with C preprocessor macros](https://wheybags.com/blog/macroblog.html)
* [2025-07-30, 22:50:00](https://hardware.slashdot.org/story/25/07/30/203220/the-future-is-not-self-hosted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;The Future is Not Self-Hosted&apos;](https://hardware.slashdot.org/story/25/07/30/203220/the-future-is-not-self-hosted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 22:24:58](https://news.ycombinator.com/item?id=44740222) - [Figma will IPO on July 31](https://www.figma.com/blog/ipo-pricing/)
* [2025-07-30, 22:10:00](https://entertainment.slashdot.org/story/25/07/30/1949202/amazon-invests-in-netflix-of-ai-start-up-fable-which-lets-you-make-your-own-tv-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Invests In &apos;Netflix of AI&apos; Start-Up Fable, Which Lets You Make Your Own TV Shows ](https://entertainment.slashdot.org/story/25/07/30/1949202/amazon-invests-in-netflix-of-ai-start-up-fable-which-lets-you-make-your-own-tv-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 21:53:38](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty) - [Books about Lisp&apos;s \&quot;beauty\&quot;?](https://lobste.rs/s/4hwugo/books_about_lisp_s_beauty)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 21:30:00](https://slashdot.org/story/25/07/30/1936241/first-australian-made-rocket-crashes-after-14-seconds-of-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Australian-Made Rocket Crashes After 14 Seconds of Flight](https://slashdot.org/story/25/07/30/1936241/first-australian-made-rocket-crashes-after-14-seconds-of-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 21:19:03](https://news.ycombinator.com/item?id=44739632) - [Ollama&apos;s new app](https://ollama.com/blog/new-app)
* [2025-07-30, 20:50:00](https://yro.slashdot.org/story/25/07/30/1926221/us-intelligence-intervened-with-doj-to-push-hpe-juniper-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Intelligence Intervened With DOJ To Push HPE-Juniper Merger](https://yro.slashdot.org/story/25/07/30/1926221/us-intelligence-intervened-with-doj-to-push-hpe-juniper-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-30, 20:46:49](https://news.ycombinator.com/item?id=44739315) - [The Math Is Haunted](https://overreacted.io/the-math-is-haunted/)
* [2025-07-30, 20:20:08](https://lobste.rs/s/ykjkon/hype_is_product) - [The Hype is the Product](https://rys.io/en/180.html)
* [2025-07-30, 19:39:18](https://lobste.rs/s/aqiske/emacs_macos_bug) - [Emacs: The MacOS Bug](https://xlii.space/eng/emacs-the-macos-bug/)
* [2025-07-30, 18:58:16](https://lobste.rs/s/7nho3g/dive_into_open_chat_protocols) - [A Dive Into Open Chat Protocols](https://wiki.alopex.li/ADiveIntoOpenChat)
* [2025-07-30, 17:53:25](https://lobste.rs/s/gyzvmq/always_bet_on_text_2014) - [always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 16:25:12](https://lobste.rs/s/z7fb8w/crush_glamourous_ai_coding_agent_for_your) - [Crush: The glamourous AI coding agent for your favourite terminal](https://github.com/charmbracelet/crush)
* [2025-07-30, 16:08:44](https://lobste.rs/s/aew8tt/why_we_need_know_lr_recursive_descent) - [Why We Need to Know LR and Recursive Descent Parsing Techniques](https://tratt.net/laurie/blog/2023/why_we_need_to_know_lr_and_recursive_descent_parsing_techniques.html)
* [2025-07-30, 15:33:35](https://lobste.rs/s/oh2hzs/rfc_upstream_target_support_for_cheri) - [[RFC] Upstream target support for CHERI-enabled architectures](https://discourse.llvm.org/t/rfc-upstream-target-support-for-cheri-enabled-architectures/87623)
* [2025-07-30, 15:13:43](https://lobste.rs/s/bhs03m/2000_words_about_arrays_tables) - [2000 words about arrays and tables](https://buttondown.com/hillelwayne/archive/2000-words-about-arrays-and-tables/)
* [2025-07-30, 14:44:08](https://lobste.rs/s/mrzwqr/writing_memory_efficient_c_structs) - [Writing memory efficient C structs](https://tomscheers.github.io/2025/07/29/writing-memory-efficient-structs-post.html)
* [2025-07-30, 14:02:15](https://lobste.rs/s/zwbafr/you_are_bios_now_building_hypervisor_rust) - [You Are The BIOS Now: Building A Hypervisor In Rust With KVM](https://yeet.cx/blog/you-are-the-bios-now)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 03:53:52](https://lobste.rs/s/o7avvq/i_want_defend_wayland_here_explain) - [I want to defend Wayland here and explain a crucial piece that I think people are missing](https://ordinary.cafe/@technobaboo/114935252929285259)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 14:44:05](https://news.ycombinator.com/item?id=44724072) - [Go’s race detector has a mutex blind spot](https://doublefree.dev/go-race-mutex-blindspot/)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-29, 02:15:36](https://news.ycombinator.com/item?id=44718211) - [Zig Profiling on Apple Silicon](https://blog.bugsiki.dev/posts/zig-profilers/)
* [2025-07-28, 22:46:19](https://news.ycombinator.com/item?id=44716653) - [OpenAI&apos;s ChatGPT Agent casually clicks through \&quot;I am not a robot\&quot; verification](https://arstechnica.com/information-technology/2025/07/openais-chatgpt-agent-casually-clicks-through-i-am-not-a-robot-verification-test/)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 14:23:19](https://news.ycombinator.com/item?id=44711163) - [Following Up on the Python JIT](https://lwn.net/Articles/1029307/)
* [2025-07-28, 12:39:52](https://news.ycombinator.com/item?id=44710256) - [Sumo – Simulation of Urban Mobility](https://eclipse.dev/sumo/)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 17:58:12](https://news.ycombinator.com/item?id=44703180) - [Profiling without Source code – how I diagnosed Trackmania stuttering](https://larstofus.com/2025/07/27/profiling-without-source-code-how-i-diagnosed-trackmania-stuttering/)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
