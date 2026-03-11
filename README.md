# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Breakthroughs and Innovation

* [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - A surprising find of new metal resources that are in high demand by tech companies.

* [Temporal: The 9-Year Journey to Fix Time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/) - How JavaScript developers tackled a long-standing issue of time handling in programming.

* [Nvidia Is Planning to Launch Its Own Open-Source OpenClaw Competitor](https://slashdot.org/story/26/03/11/177232/nvidia-is-planning-to-launch-its-own-open-source-openclaw-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia sets out to challenge existing competitors in the open-source space with a new project.

## Security and Ethical Concerns

* [YouTube Expands AI Deepfake Detection To Politicians, Government Officials, and Journalists](https://news.slashdot.org/story/26/03/11/1653217/youtube-expands-ai-deepfake-detection-to-politicians-government-officials-and-journalists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - YouTube's new measures to tackle deepfake concerns, with a focus on governmental and journalistic integrity.

* [AI Agent Hacks McKinsey](https://codewall.ai/blog/how-we-hacked-mckinseys-ai-platform) - A tale of a security vulnerability in an AI platform exposed by an agent.

* [Swiss e-voting pilot can&apos;t count 2,048 ballots after decryption failure](https://www.theregister.com/2026/03/11/swiss_evote_usb_snafu/) - A cautionary story on the risks and technical failures in digital voting systems.

## Open Source and Developer Tools

* [OpenBSD ext4fs update](https://www.kmx.io/blog/openbsd-ext4fs-update) - Updates on the ext4 file system support in the OpenBSD operating system.

* [Show HN: I built a tool that watches webpages and exposes changes as RSS](https://sitespy.app) - A new tool for developers and content trackers to monitor webpage changes via RSS feeds.

* [Moonforge, A Yocto-Based Linux OS](https://www.igalia.com/2026/03/09/Introducing-Moonforge-A-Yocto-Based-Linux-OS.html) - The introduction of a Linux OS tailored for embedded systems, based on the Yocto project.

## AI and Advanced Computing

* [Launch HN: Sentrial (YC W26) – Catch AI Agent Failures Before Your Users Do](https://www.sentrial.com/) - A platform for monitoring and diagnosing issues in AI agent operations prior to end-user interaction.

* [BitNet: 100B Param 1-Bit model for local CPUs](https://github.com/microsoft/BitNet) - Microsoft's latest advancement in parameter-efficient models for AI on local hardware.

* [Yann LeCun Raises $1 Billion To Build AI That Understands the Physical World](https://slashdot.org/story/26/03/10/2055212/yann-lecun-raises-1-billion-to-build-ai-that-understands-the-physical-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A mega funding drive to create a groundbreaking AI that comprehends the physical world.

## Science and Space Exploration

* [A 1,300-Pound NASA Spacecraft To Re-Enter Earth&apos;s Atmosphere](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA's scheduled descent of a spacecraft after a completed mission.

* [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - Insights into the solar system's origins from ancient crystal structures.

* [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - Legislative directives for NASA to accelerate the development of private space infrastructure.

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

* [2026-03-11, 18:54:00](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss)
* [2026-03-11, 18:06:57](https://lobste.rs/s/vb7ipx/my_postgresql_database_got_nuked_lol) - [My PostgreSQL database got nuked lol](https://akselmo.dev/posts/they-broke-my-server/)
* [2026-03-11, 18:04:41](https://lobste.rs/s/vjsm2q/go_fix_inline_source_level_inliner) - [//go:fix inline and the source-level inliner](https://go.dev/blog/inliner)
* [2026-03-11, 18:00:00](https://slashdot.org/story/26/03/11/177232/nvidia-is-planning-to-launch-its-own-open-source-openclaw-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Is Planning to Launch Its Own Open-Source OpenClaw Competitor](https://slashdot.org/story/26/03/11/177232/nvidia-is-planning-to-launch-its-own-open-source-openclaw-competitor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 17:20:13](https://lobste.rs/s/ndtuji/using_unicode_half_stars_symbols_ratings) - [Using Unicode Half-Stars Symbols in Ratings](https://hyperborea.org/tech-tips/half-stars/)
* [2026-03-11, 17:00:00](https://news.slashdot.org/story/26/03/11/1653217/youtube-expands-ai-deepfake-detection-to-politicians-government-officials-and-journalists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Expands AI Deepfake Detection To Politicians, Government Officials, and Journalists](https://news.slashdot.org/story/26/03/11/1653217/youtube-expands-ai-deepfake-detection-to-politicians-government-officials-and-journalists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 16:56:51](https://news.ycombinator.com/item?id=47338091) - [Show HN: Vanilla JavaScript refinery simulator built to explain job to my kids](https://fuelingcuriosity.com/game.html)
* [2026-03-11, 16:53:11](https://news.ycombinator.com/item?id=47338055) - [Fungal Electronics](https://arxiv.org/abs/2111.11231)
* [2026-03-11, 16:24:17](https://news.ycombinator.com/item?id=47337659) - [Launch HN: Sentrial (YC W26) – Catch AI Agent Failures Before Your Users Do](https://www.sentrial.com/)
* [2026-03-11, 16:21:06](https://news.ycombinator.com/item?id=47337607) - [Show HN: I built a tool that watches webpages and exposes changes as RSS](https://sitespy.app)
* [2026-03-11, 16:20:45](https://lobste.rs/s/t43mh5/okmain_you_have_image_you_want_colour) - [Okmain: you have an image but you want a colour](https://dgroshev.com/blog/okmain/)
* [2026-03-11, 16:16:12](https://news.ycombinator.com/item?id=47337548) - [Launch HN: Prism (YC X25) – Workspace and API to generate and edit videos](https://www.prismvideos.com)
* [2026-03-11, 16:07:15](https://lobste.rs/s/ei0ans/temporal_9_year_journey_fix_time) - [Temporal: The 9-Year Journey to Fix Time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/)
* [2026-03-11, 16:05:49](https://lobste.rs/s/ggify2/openbsd_ext4fs_update) - [OpenBSD ext4fs update](https://www.kmx.io/blog/openbsd-ext4fs-update)
* [2026-03-11, 16:00:20](https://lobste.rs/s/bunmdv/faster_asin_was_hiding_plain_sight) - [Faster asin() Was Hiding In Plain Sight](https://16bpp.net/blog/post/faster-asin-was-hiding-in-plain-sight/)
* [2026-03-11, 16:00:00](https://slashdot.org/story/26/03/11/0623220/china-moves-to-curb-openclaw-ai-use-at-banks-state-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Moves To Curb OpenClaw AI Use At Banks, State Agencies](https://slashdot.org/story/26/03/11/0623220/china-moves-to-curb-openclaw-ai-use-at-banks-state-agencies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 15:54:23](https://news.ycombinator.com/item?id=47337249) - [Show HN: Klaus – OpenClaw on a VM, batteries included](https://klausai.com/)
* [2026-03-11, 15:48:29](https://news.ycombinator.com/item?id=47337177) - [Where Some See Strings, She Sees a Space-Time Made of Fractals](https://www.quantamagazine.org/where-some-see-strings-she-sees-a-space-time-made-of-fractals-20260311/)
* [2026-03-11, 15:48:11](https://news.ycombinator.com/item?id=47337168) - [Searching for the Agentic IDE](https://twitter.com/karpathy/status/2031616709560610993)
* [2026-03-11, 15:35:50](https://news.ycombinator.com/item?id=47336989) - [Temporal: A nine-year journey to fix time in JavaScript](https://bloomberg.github.io/js-blog/post/temporal/)
* [2026-03-11, 15:22:10](https://news.ycombinator.com/item?id=47336806) - [Why the global elite gave up on spelling and grammar](https://www.wsj.com/lifestyle/jeffrey-epstein-files-bad-grammar-spelling-trump-ellison-dorsey-gates-thiel-cbfe9fb1)
* [2026-03-11, 15:01:23](https://lobste.rs/s/wrpqt6/why_i_still_blog_why_future_blogging_is) - [Why I Still Blog — and Why the Future of Blogging Is Connected](https://www.ssp.sh/blog/why-i-still-blog/)
* [2026-03-11, 15:00:00](https://hardware.slashdot.org/story/26/03/11/0615216/asus-executive-says-macbook-neo-is-shock-to-pc-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ASUS Executive Says MacBook Neo is &apos;Shock&apos; to PC Industry](https://hardware.slashdot.org/story/26/03/11/0615216/asus-executive-says-macbook-neo-is-shock-to-pc-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 14:58:20](https://news.ycombinator.com/item?id=47336476) - [Wiz joins Google](https://www.wiz.io/blog/google-closes-deal-to-acquire-wiz)
* [2026-03-11, 14:39:30](https://news.ycombinator.com/item?id=47336171) - [Show HN: Open-source browser for AI agents](https://github.com/theredsix/agent-browser-protocol)
* [2026-03-11, 14:35:53](https://news.ycombinator.com/item?id=47336111) - [Faster asin() was hiding in plain sight](https://16bpp.net/blog/post/faster-asin-was-hiding-in-plain-sight/)
* [2026-03-11, 14:06:36](https://lobste.rs/s/tyeo20/moonforge_yocto_based_linux_os) - [Moonforge, A Yocto-Based Linux OS](https://www.igalia.com/2026/03/09/Introducing-Moonforge-A-Yocto-Based-Linux-OS.html)
* [2026-03-11, 14:03:00](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss) - [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss)
* [2026-03-11, 14:00:00](https://meta.slashdot.org/story/26/03/11/065230/meta-to-charge-advertisers-a-fee-to-offset-europes-digital-taxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Charge Advertisers a Fee To Offset Europe&apos;s Digital Taxes](https://meta.slashdot.org/story/26/03/11/065230/meta-to-charge-advertisers-a-fee-to-offset-europes-digital-taxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 13:59:37](https://lobste.rs/s/eu5uiz/fully_snapshotable_wasm_interpreter) - [A fully snapshotable Wasm interpreter](https://github.com/friendlymatthew/gabagool?tab=readme-ov-file#gabagool)
* [2026-03-11, 13:38:17](https://news.ycombinator.com/item?id=47335431) - [Show HN: I built an ISP infrastructure emulator from scratch with a custom vBNG](https://aether.saphal.me/dashboard/default)
* [2026-03-11, 13:32:12](https://news.ycombinator.com/item?id=47335349) - [Entities enabling scientific fraud at scale are large, resilient, growing (2025)](https://doi.org/10.1073/pnas.2420092122)
* [2026-03-11, 13:22:39](https://news.ycombinator.com/item?id=47335237) - [Lego&apos;s 0.002mm specification and its implications for manufacturing (2025)](https://www.thewave.engineer/articles.html/productivity/legos-0002mm-specification-and-its-implications-for-manufacturing-r120/)
* [2026-03-11, 13:00:00](https://slashdot.org/story/26/03/10/2055212/yann-lecun-raises-1-billion-to-build-ai-that-understands-the-physical-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Yann LeCun Raises $1 Billion To Build AI That Understands the Physical World](https://slashdot.org/story/26/03/10/2055212/yann-lecun-raises-1-billion-to-build-ai-that-understands-the-physical-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 12:57:41](https://news.ycombinator.com/item?id=47334982) - [Swiss e-voting pilot can&apos;t count 2,048 ballots after decryption failure](https://www.theregister.com/2026/03/11/swiss_evote_usb_snafu/)
* [2026-03-11, 12:27:15](https://news.ycombinator.com/item?id=47334694) - [BitNet: 100B Param 1-Bit model for local CPUs](https://github.com/microsoft/BitNet)
* [2026-03-11, 11:48:12](https://lobste.rs/s/eeib2q/full_source_binary_seed_bootstrap_guix) - [Full-Source Binary Seed Bootstrap of the Guix System (2023)](https://guix.gnu.org/en/blog/2023/the-full-source-bootstrap-building-from-source-all-the-way-down/)
* [2026-03-11, 11:37:24](https://news.ycombinator.com/item?id=47334293) - [The MacBook Neo](https://daringfireball.net/2026/03/the_macbook_neo)
* [2026-03-11, 10:58:59](https://lobste.rs/s/oyb3u8/why_should_we_have_user_age_tracking) - [Why should we have user age tracking in Operating Systems and websites?](https://wiki.alcidesfonseca.com/blog/age-verification-in-operating-systems-and-the-internet/)
* [2026-03-11, 10:00:00](https://yro.slashdot.org/story/26/03/11/0546238/valve-faces-second-class-action-lawsuit-over-loot-boxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Faces Second, Class-Action Lawsuit Over Loot Boxes](https://yro.slashdot.org/story/26/03/11/0546238/valve-faces-second-class-action-lawsuit-over-loot-boxes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 09:59:03](https://news.ycombinator.com/item?id=47333627) - [AI Agent Hacks McKinsey](https://codewall.ai/blog/how-we-hacked-mckinseys-ai-platform)
* [2026-03-11, 09:18:52](https://lobste.rs/s/mqpba7/sqlite_wal_reset_database_corruption_bug) - [SQLite WAL-reset database corruption bug](https://sqlite.org/wal.html#walresetbug)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 08:33:31](https://lobste.rs/s/dhk0do/code_reviews_do_find_bugs) - [Code reviews do find bugs](https://entropicthoughts.com/code-reviews-do-find-bugs)
* [2026-03-11, 08:11:35](https://lobste.rs/s/1911az/c_26_safety_features_won_t_safe_you) - [C++26 safety features won&apos;t safe you](https://lucisqr.substack.com/p/c26-safety-features-wont-save-you)
* [2026-03-11, 07:00:00](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A 1,300-Pound NASA Spacecraft To Re-Enter Earth&apos;s Atmosphere](https://science.slashdot.org/story/26/03/11/0026235/a-1300-pound-nasa-spacecraft-to-re-enter-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 04:44:46](https://news.ycombinator.com/item?id=47331811) - [Making WebAssembly a first-class language on the Web](https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-11, 03:30:00](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Outages, Amazon To Make Senior Engineers Sign Off On AI-Assisted Changes](https://slashdot.org/story/26/03/10/212214/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-11, 03:07:37](https://lobste.rs/s/e8lebp/u_237c_is_azimuth) - [U+237C is Azimuth](https://ionathan.ch/2026/02/16/angzarr.html)
* [2026-03-11, 02:13:47](https://lobste.rs/s/ev2hsx/type_resolution_redesign_with_language) - [Type resolution redesign, with language changes to taste](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 02:04:22](https://news.ycombinator.com/item?id=47331034) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:53:01](https://lobste.rs/s/ufczx8/writing_my_own_text_editor_daily_driving) - [Writing my own text editor, and daily-driving it](https://blog.jsbarretto.com/post/text-editor)
* [2026-03-11, 01:24:47](https://news.ycombinator.com/item?id=47330836) - [Zig – Type Resolution Redesign and Language Changes](https://ziglang.org/devlog/2026/#2026-03-10)
* [2026-03-11, 01:00:00](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tony Hoare, Turing Award-Winning Computer Scientist Behind QuickSort, Dies At 92](https://developers.slashdot.org/story/26/03/10/2038225/tony-hoare-turing-award-winning-computer-scientist-behind-quicksort-dies-at-92?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 23:00:00](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Demos Chip To Compute With Encrypted Data](https://it.slashdot.org/story/26/03/10/2022201/intel-demos-chip-to-compute-with-encrypted-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 22:38:37](https://lobste.rs/s/tiktds/ai_should_help_us_produce_better_code) - [AI should help us produce better code](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)
* [2026-03-10, 22:27:15](https://news.ycombinator.com/item?id=47329557) - [Cloudflare crawl endpoint](https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/)
* [2026-03-10, 22:00:00](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Wins Court Order To Block Perplexity&apos;s AI Shopping Bots](https://yro.slashdot.org/story/26/03/10/2012222/amazon-wins-court-order-to-block-perplexitys-ai-shopping-bots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 21:00:00](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silicon Valley Is Buzzing About This New Idea: AI Compute As Compensation](https://news.slashdot.org/story/26/03/10/200253/silicon-valley-is-buzzing-about-this-new-idea-ai-compute-as-compensation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 20:12:41](https://lobste.rs/s/zzjjyo/llm_neuroanatomy_how_i_topped_ai) - [LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 20:00:00](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Outlines $250 Billion US Investment Plan To Boost Infrastructure In AI Age](https://mobile.slashdot.org/story/26/03/10/162222/att-outlines-250-billion-us-investment-plan-to-boost-infrastructure-in-ai-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 19:49:53](https://lobste.rs/s/ta3jjk/risc_v_is_sloooow) - [RISC-V is sloooow](https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/)
* [2026-03-10, 19:00:00](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ig Nobels Ceremony Moves To Europe Indefinitely, Citing US Safety Concerns](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 18:57:00](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss) - [The Slow Death of the Power User](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss)
* [2026-03-10, 15:42:09](https://lobste.rs/s/lyktdk/tony_hoare_1934_2026) - [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:50:16](https://news.ycombinator.com/item?id=47324054) - [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:25:25](https://lobste.rs/s/t5dvs5/amazon_holds_engineering_meeting_about) - [Amazon holds engineering meeting about GenAI based outages](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 12:13:03](https://lobste.rs/s/cpqm9i/too_much_color) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-10, 10:42:37](https://news.ycombinator.com/item?id=47321481) - [Visualizing Ukkonen&apos;s Suffix Tree Algorithm](https://www.abahgat.com/blog/visualizing-ukkonens-algorithm/)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 08:51:15](https://lobste.rs/s/izprt4/evi_hard_fork_vim) - [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi)
* [2026-03-10, 08:46:53](https://news.ycombinator.com/item?id=47320600) - [Yann LeCun raises $1B to build AI that understands the physical world](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/)
* [2026-03-10, 05:58:56](https://news.ycombinator.com/item?id=47319520) - [5,200 holes carved into a Peruvian mountain left by an ancient economy](https://newatlas.com/environment/5-200-holes-peruvian-mountain/)
* [2026-03-10, 04:47:00](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss) - [Sam Altman Wonders: Should the Government Nationalize AGI?](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss)
* [2026-03-10, 00:02:00](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss) - [Charter Gets FCC Permission to Buy Cox and Become Largest ISP in the US](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss)
* [2026-03-09, 19:20:00](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss) - [The New European Office Suite is a Private, Open-Source Alternative](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss) - [‘What Matters More To Employers, Education Or Experience?’ Asks AI Expert](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 10:46:56](https://news.ycombinator.com/item?id=47296255) - [PeppyOS: A simpler alternative to ROS 2 (now with containers support)](https://peppy.bot/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-07, 21:18:11](https://news.ycombinator.com/item?id=47291574) - [Building a TB-303 from Scratch](https://loopmaster.xyz/tutorials/tb303-from-scratch)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
