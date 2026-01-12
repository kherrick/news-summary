# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [We rolled our own documentation site](https://blog.tangled.org/docs) - An insightful account of building a custom documentation platform tailored for specific needs. [Comments](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site).

* [Launch a Debugging Terminal into GitHub Actions](https://blog.gripdev.xyz/2026/01/10/actions-terminal-on-failure-for-debugging/) - A practical guide to enhancing debugging capabilities within GitHub Actions workflows. [Comments](https://news.ycombinator.com/item?id=46587498).

* [How to Build Reactive Declarative UI in Vanilla JavaScript](https://jsdev.space/howto/reactive-vanilla-js/) - Explore the creation of modern UI elements using just Vanilla JavaScript. [Comments](https://news.ycombinator.com/item?id=46587033).

* [Lightpanda migrate DOM implementation to Zig](https://lightpanda.io/blog/posts/migrating-our-dom-to-zig) - A notable shift in DOM implementation by adopting the Zig programming language. [Comments](https://news.ycombinator.com/item?id=46586179).

## Science and Environment

* [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - A deep dive into the impact of microplastics on oceanic health and carbon absorption. [Comments](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss).

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - Uncovering fascinating habits of ancient bees with groundbreaking evidence. [Comments](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss).

* [Himalayas bare and rocky after reduced winter snowfall, scientists warn](https://www.bbc.com/news/articles/clyndv7zd20o) - Alarming findings on the impact of climate change on the Himalayas. [Comments](https://news.ycombinator.com/item?id=46583464).

## Industry and Business

* [Ubisoft Closes Game Studio Where Workers Voted to Unionize Two Weeks Ago](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The contentious decision to shut down a facility post-unionization efforts. [Comments](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Amazon's AI Tool Listed Products from Small Businesses Without Their Knowledge](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy over artificial intelligence's unintended market implications. [Comments](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Society, Culture and Miscellaneous

* [Ai, Japanese chimpanzee who counted and painted dies at 49](https://www.bbc.com/news/articles/cj9r3zl2ywyo) - Remembering a remarkable chimpanzee known for transcending expressive boundaries. [Comments](https://news.ycombinator.com/item?id=46585947).

* [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/) - Spotlighting an innovative and anticipated update in Python 3.14. [Comments](https://lobste.rs/s/jmbwp2/coolest_feature_python_3_14).

* [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/) - A detailed exploration of user interface difficulties in the macOS Tahoe update. [Comments](https://lobste.rs/s/yvgfh8/struggle_resizing_windows_on_macos_tahoe).

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

* [2026-01-12, 13:19:17](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site) - [we rolled our own documentation site](https://blog.tangled.org/docs)
* [2026-01-12, 12:34:00](https://linux.slashdot.org/story/26/01/12/0411249/linux-hit-a-new-all-time-high-for-steam-market-share-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Hit a New All-Time High for Steam Market Share in December](https://linux.slashdot.org/story/26/01/12/0411249/linux-hit-a-new-all-time-high-for-steam-market-share-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 12:31:35](https://lobste.rs/s/hxzs2d/examining_iran_s_internet_status_amid) - [Examining Iran’s Internet Status Amid Escalating Protests](https://filter.watch/english/2026/01/09/network-monitoring-january-2026-internet-repression-in-times-of-protest/)
* [2026-01-12, 12:25:27](https://news.ycombinator.com/item?id=46587498) - [Launch a Debugging Terminal into GitHub Actions](https://blog.gripdev.xyz/2026/01/10/actions-terminal-on-failure-for-debugging/)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 11:31:56](https://news.ycombinator.com/item?id=46587033) - [How to Build Reactive Declarative UI in Vanilla JavaScript](https://jsdev.space/howto/reactive-vanilla-js/)
* [2026-01-12, 11:04:44](https://lobste.rs/s/mhgog9/anthropic_blocks_third_party_tools_using) - [Anthropic blocks third-party tools using Claude Code OAuth tokens](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 10:17:39](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week)
* [2026-01-12, 10:10:05](https://news.ycombinator.com/item?id=46586385) - [Fossil versus Git](https://fossil-scm.org/home/doc/trunk/www/fossil-v-git.wiki)
* [2026-01-12, 09:42:49](https://news.ycombinator.com/item?id=46586179) - [Lightpanda migrate DOM implementation to Zig](https://lightpanda.io/blog/posts/migrating-our-dom-to-zig)
* [2026-01-12, 09:10:45](https://news.ycombinator.com/item?id=46585947) - [Ai, Japanese chimpanzee who counted and painted dies at 49](https://www.bbc.com/news/articles/cj9r3zl2ywyo)
* [2026-01-12, 08:44:00](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Closes Game Studio Where Workers Voted to Unionize Two Weeks Ago](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 07:19:33](https://lobste.rs/s/hhtuqh/three_inverse_laws_robotics) - [Three Inverse Laws of Robotics](https://susam.net/inverse-laws-of-robotics.html)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 05:44:00](https://it.slashdot.org/story/26/01/12/0443201/how-long-does-it-take-to-fix-linux-kernel-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Long Does It Take to Fix Linux Kernel Bugs?](https://it.slashdot.org/story/26/01/12/0443201/how-long-does-it-take-to-fix-linux-kernel-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 04:18:46](https://lobste.rs/s/jmbwp2/coolest_feature_python_3_14) - [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/)
* [2026-01-12, 04:06:23](https://lobste.rs/s/ypq8u0/typical_pdf) - [A Typical PDF](https://hackerfactor.com/blog/index.php?/archives/1085-A-Typical-PDF.html)
* [2026-01-12, 03:09:00](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s AI Tool Listed Products from Small Businesses Without Their Knowledge](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 02:58:01](https://news.ycombinator.com/item?id=46583464) - [Himalayas bare and rocky after reduced winter snowfall, scientists warn](https://www.bbc.com/news/articles/clyndv7zd20o)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-12, 01:56:34](https://lobste.rs/s/prsi0f/rethinking_helix) - [Rethinking Helix](https://asta.boserup.eu/forest/rethinking-helix/)
* [2026-01-12, 01:39:32](https://news.ycombinator.com/item?id=46582762) - [Uncrossy](https://uncrossy.com/)
* [2026-01-12, 00:15:36](https://news.ycombinator.com/item?id=46582033) - [Gadget Exposed a Spy Camera [video]](https://www.youtube.com/watch?v=1reman2waLs)
* [2026-01-11, 23:47:34](https://lobste.rs/s/yvgfh8/struggle_resizing_windows_on_macos_tahoe) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 23:29:00](https://tech.slashdot.org/story/26/01/11/214203/finnish-startup-ixi-plans-new-autofocusing-eyeglasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finnish Startup IXI Plans New Autofocusing Eyeglasses](https://tech.slashdot.org/story/26/01/11/214203/finnish-startup-ixi-plans-new-autofocusing-eyeglasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 23:13:30](https://lobste.rs/s/ehtrmf/turntiles_nyt_style_word_game_i_made_for_my) - [Turntiles, an NYT style word game I made for my parents](https://github.com/wheybags/turntiles)
* [2026-01-11, 22:29:00](https://slashdot.org/story/26/01/11/2041249/nvidia-ceo-jensen-huang-says-ai-doomerism-has-done-a-lot-of-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Nvidia CEO Jensen Huang Says AI Doomerism Has &apos;Done a Lot of Damage&apos;](https://slashdot.org/story/26/01/11/2041249/nvidia-ceo-jensen-huang-says-ai-doomerism-has-done-a-lot-of-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 22:14:35](https://news.ycombinator.com/item?id=46580864) - [This game is a single 13 KiB file that runs on Windows, Linux and in the Browser](https://iczelia.net/posts/snake-polyglot/)
* [2026-01-11, 22:00:24](https://news.ycombinator.com/item?id=46580703) - [The next two years of software engineering](https://addyosmani.com/blog/next-two-years/)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 21:29:57](https://news.ycombinator.com/item?id=46580326) - [CLI agents make self-hosting on a home server easier and fun](https://fulghum.io/self-hosting)
* [2026-01-11, 21:29:18](https://lobste.rs/s/wcsrvd/mitigating_billion_dollar_mistake) - [Mitigating the Billion Dollar Mistake](https://www.gingerbill.org/article/2026/01/11/mitigating-the-billion-dollar-mistake/)
* [2026-01-11, 21:29:00](https://science.slashdot.org/story/26/01/11/2023211/how-many-years-left-until-the-hubble-space-telescope-reenters-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Many Years Left Until the Hubble Space Telescope Reenters Earth&apos;s Atmosphere?](https://science.slashdot.org/story/26/01/11/2023211/how-many-years-left-until-the-hubble-space-telescope-reenters-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 21:12:45](https://news.ycombinator.com/item?id=46580136) - [FUSE is All You Need – Giving agents access to anything via filesystems](https://jakobemmerling.de/posts/fuse-is-all-you-need/)
* [2026-01-11, 20:47:55](https://news.ycombinator.com/item?id=46579864) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 20:38:37](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting) - [Who are people currently using as hosting providers?](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting)
* [2026-01-11, 20:29:00](https://tech.slashdot.org/story/26/01/11/1953234/walmart-announces-drone-delivery-integration-with-googles-ai-chatbot-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Announces Drone Delivery, Integration with Google&apos;s AI Chatbot Gemini](https://tech.slashdot.org/story/26/01/11/1953234/walmart-announces-drone-delivery-integration-with-googles-ai-chatbot-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 20:17:08](https://lobste.rs/s/kiryys/whatsapp_is_untrustable) - [WhatsApp is untrustable](https://toki.la/posts/whatsapp)
* [2026-01-11, 20:01:14](https://news.ycombinator.com/item?id=46579374) - [Sampling at negative temperature](https://cavendishlabs.org/blog/negative-temperature/)
* [2026-01-11, 19:33:42](https://lobste.rs/s/aevhq8/keeping_20_000_gpus_healthy) - [Keeping 20,000 GPUs healthy](https://modal.com/blog/gpu-health)
* [2026-01-11, 19:32:26](https://lobste.rs/s/1mjti7/1160_prs_improve_rust_2025) - [1160 PRs to improve Rust in 2025](https://kobzol.github.io/rust/rustc/2026/01/05/my-rust-contributions-in-2025.html)
* [2026-01-11, 19:29:00](https://linux.slashdot.org/story/26/01/11/1926219/gentoo-linux-plans-migration-from-github-over-attempts-to-force-copilot-usage-for-our-repositories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gentoo Linux Plans Migration from GitHub Over &apos;Attempts to Force Copilot Usage for Our Repositories&apos;](https://linux.slashdot.org/story/26/01/11/1926219/gentoo-linux-plans-migration-from-github-over-attempts-to-force-copilot-usage-for-our-repositories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 19:23:58](https://news.ycombinator.com/item?id=46578921) - [iCloud Photos Downloader](https://github.com/icloud-photos-downloader/icloud_photos_downloader)
* [2026-01-11, 19:23:35](https://lobste.rs/s/8nwjov/llvm_bad_parts) - [LLVM: The bad parts](https://www.npopov.com/2026/01/11/LLVM-The-bad-parts.html)
* [2026-01-11, 18:03:37](https://lobste.rs/s/u6lchj/we_default_addition) - [We default to addition](https://www.ufried.com/blog/addition_bias/)
* [2026-01-11, 17:34:00](https://tech.slashdot.org/story/26/01/10/2247226/personal-info-on-175-million-users-may-have-leaked-to-dark-web-after-2024-instagram-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Personal Info on 17.5 Million Users May Have Leaked to Dark Web After 2024 Instagram Breach](https://tech.slashdot.org/story/26/01/10/2247226/personal-info-on-175-million-users-may-have-leaked-to-dark-web-after-2024-instagram-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 17:05:52](https://news.ycombinator.com/item?id=46577464) - [Poison Fountain](https://rnsaffn.com/poison3/)
* [2026-01-11, 16:43:06](https://news.ycombinator.com/item?id=46577242) - [Ask HN: What are you working on? (January 2026)](https://news.ycombinator.com/item?id=46577242)
* [2026-01-11, 16:34:00](https://hardware.slashdot.org/story/26/01/10/188208/china-tests-a-supercritical-co2-generator-in-commercial-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tests a Supercritical CO2 Generator in Commercial Operation](https://hardware.slashdot.org/story/26/01/10/188208/china-tests-a-supercritical-co2-generator-in-commercial-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 15:34:00](https://tech.slashdot.org/story/26/01/11/0651219/that-bell-labs-unix-tape-from-1974-from-a-closet-to-computing-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [That Bell Labs &apos;Unix&apos; Tape from 1974: From a Closet to Computing History](https://tech.slashdot.org/story/26/01/11/0651219/that-bell-labs-unix-tape-from-1974-from-a-closet-to-computing-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 15:05:25](https://lobste.rs/s/jbrnz8/asahi_linux_porting_linux_apple_silicon) - [Asahi Linux - Porting Linux to Apple Silicon](https://media.ccc.de/v/39c3-asahi-linux-porting-linux-to-apple-silicon)
* [2026-01-11, 12:34:00](https://news.slashdot.org/story/26/01/11/0223235/cory-doctorow-legalising-reverse-engineering-could-end-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow: Legalising Reverse Engineering Could End &apos;Enshittification&apos;](https://news.slashdot.org/story/26/01/11/0223235/cory-doctorow-legalising-reverse-engineering-could-end-enshittification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 11:20:57](https://lobste.rs/s/ftwkvo/hobbyist_maintainer_economic_gravity) - [The Hobbyist Maintainer Economic Gravity Well](https://softwaremaxims.com/blog/hobbyist-gravity-well)
* [2026-01-11, 10:41:50](https://lobste.rs/s/djvda5/create_semi_working_desktop_only_based_on) - [Create a semi-working desktop only based on runtime Windows 3.10 shipped with Windows 95 installer](https://tech.lgbt/@nina_kali_nina/115871854239918291)
* [2026-01-11, 10:26:18](https://news.ycombinator.com/item?id=46574276) - [Don&apos;t fall into the anti-AI hype](https://antirez.com/news/158)
* [2026-01-11, 10:23:20](https://lobste.rs/s/cmsfbu/don_t_fall_into_anti_ai_hype) - [Don&apos;t fall into the anti-AI hype](https://antirez.com/news/158)
* [2026-01-11, 10:03:30](https://lobste.rs/s/weiyij/i_replaced_redis_with_postgresql_it_s) - [I Replaced Redis with PostgreSQL (And It&apos;s Faster)](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942)
* [2026-01-11, 08:34:00](https://developers.slashdot.org/story/26/01/11/0532214/c-and-c-grew-in-popularity-in-2025-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [C# (and C) Grew in Popularity in 2025, Says TIOBE](https://developers.slashdot.org/story/26/01/11/0532214/c-and-c-grew-in-popularity-in-2025-says-tiobe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 07:59:28](https://lobste.rs/s/kc88fv/unique_performance_optimization_for_3d) - [A Unique Performance Optimization for a 3D Geometry Language](https://cprimozic.net/notes/posts/persistent-expr-memo-optimization-for-geoscript/)
* [2026-01-11, 07:28:52](https://lobste.rs/s/r1wjyf/80_rye_20_time_1_3) - [80% of Rye in 20% of the Time [1/3]](https://ryelang.org/blog/posts/learn_80_rye_in_20_time_code/)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 05:34:00](https://tech.slashdot.org/story/26/01/11/038252/elon-musk-xs-new-algorithm-will-be-made-open-source-in-seven-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk: X&apos;s New Algorithm Will Be Made Open Source in Seven Days](https://tech.slashdot.org/story/26/01/11/038252/elon-musk-xs-new-algorithm-will-be-made-open-source-in-seven-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 20:05:25](https://lobste.rs/s/vlzg2m/finding_fixing_ghostty_s_largest_memory) - [Finding and Fixing Ghostty&apos;s Largest Memory Leak](https://mitchellh.com/writing/ghostty-memory-leak-fix)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 21:15:37](https://news.ycombinator.com/item?id=46559452) - [Garbage collection is contrarian](https://trynova.dev/blog/garbage-collection-is-contrarian)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 12:23:52](https://news.ycombinator.com/item?id=46553137) - [39c3: In-house electronics manufacturing from scratch: How hard can it be? [video]](https://media.ccc.de/v/39c3-in-house-electronics-manufacturing-from-scratch-how-hard-can-it-be)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
* [2026-01-08, 22:38:00](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss) - [Ford Wants to Turn Your Sun Visor Into a Head-Up Display](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss)
* [2026-01-08, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss) - [The French University Where Spies Go for Training](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss)
* [2026-01-08, 17:09:55](https://news.ycombinator.com/item?id=46543509) - [Perfectly Replicating Coca Cola [video]](https://www.youtube.com/watch?v=TDkH3EbWTYc)
* [2026-01-08, 13:08:00](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss) - [A Post-American, Enshittification-Resistant Internet](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss)
* [2026-01-08, 10:34:05](https://news.ycombinator.com/item?id=46539478) - [I&apos;m making a game engine based on dynamic signed distance fields (SDFs) [video]](https://www.youtube.com/watch?v=il-TXbn5iMA)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
