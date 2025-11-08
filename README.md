# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Advancements and Concerns

* [Stratospheric AI Spending By Four Wealthy Companies Reaches $360B Just For Data Centers](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Slashdot highlights the immense financial dedication of leading companies on AI infrastructure.

* [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153) - Examining the role of small language models in evolving AI capabilities.

* [AI benchmarks are a bad joke – and LLM makers are the ones laughing](https://www.theregister.com/2025/11/07/measuring_ai_models_hampered_by/) - Analysis of flaws in current AI benchmarking metrics.

* [Cerebras Code now supports GLM 4.6 at 1000 tokens/sec](https://www.cerebras.ai/code) - Advancing AI efficiency with Cerebras' latest capabilities.

* [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - Detailing SUSE's AI-integrated development ambitions.

## Technological Frameworks and UI Innovations

* [Valdi is a cross-platform UI framework that delivers native performance without sacrificing developer velocity](https://github.com/Snapchat/Valdi) - Exploration of Valdi's usability for developers.

* [Local First HTMX](https://elijahm.com/posts/local_first_htmx/) - HTMX's approach to prioritizing local data in web design.

* [Bootc for workstation use](https://lwn.net/SubscriberLink/1042708/90b68e222a964524/) - Innovations in workstation environments.

* [From web developer to database developer in 10 years](https://notes.eatonphil.com/2025-02-15-from-web-developer-to-database-developer-in-10-years.html) - Career reflections and guidance for software developers.

* [Announcing Magika 1.0: now faster, smarter, and rebuilt in Rust](https://opensource.googleblog.com/2025/11/announcing-magika-10-now-faster-smarter.html) - Rust-based transformative improvements to Magika.

* [Jelly Slider](https://docs.swmansion.com/TypeGPU/examples/#example=rendering--jelly-slider) - Prototyping capabilities with Jelly Slider interface.

## Social, Regulatory, and Ethical Issues

* [Texas Sues Roblox For Allegedly Failing To Protect Children On Its Platform](https://yro.slashdot.org/story/25/11/07/232253/texas-sues-roblox-for-allegedly-failing-to-protect-children-on-its-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal challenges surrounding online child protection.

* [Denmark's Government Aims To Ban Access To Social Media For Children Under 15](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Policy debates on children's use of social media.

* [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - Privacy and surveillance concerns in government procedures.

* [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss) - Ethical implications and groundbreaking bio-computing possibilities.

## Entertainment Developments and Trends

* [Lego Unveils First-Ever Star Trek Set](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Celebrating a historic release in collectible merchandise.

* [Nintendo Has Too Many Apps](https://games.slashdot.org/story/25/11/07/2319237/nintendo-has-too-many-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Critique on application management.

* [Facebook Dating Is a Surprise Hit For the Social Network](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unexpected success in social networking platforms.

* [Challenges and Benefits of Upgrading Sea of Thieves From C++14 to C++20](https://www.youtube.com/watch?v=Nm9-xKsZoNI) - Game developers share insights on technical updates.

* [Teslas ‘Robotaxis' Keep Crashing-Even With Human ‘Safety Monitors' Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - Safety dilemmas in automotive technology.

## Tributes and Historical Discoveries

* [James D. Watson, Co-Discoverer of the Structure of DNA, Is Dead At 97](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Honoring the groundbreaking geneticist.

* [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - Revelations in scientific breakthroughs.

* [Unix V4 tape found at The University of Utah](https://discuss.systems/@ricci/115504720054699983) - Rediscovering early technological artifacts.

* [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - Philosophical challenges to simulated reality theories.

* [LM8560, the Eternal Chip From the 198 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - Reflecting on technological advancements and longevity.

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

* [2025-11-08, 15:34:59](https://lobste.rs/s/ogyjwm/local_first_htmx) - [Local First HTMX](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 15:34:00](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stratospheric&apos; AI Spending By Four Wealthy Companies Reaches $360B Just For Data Centers](https://slashdot.org/story/25/11/08/0533205/stratospheric-ai-spending-by-four-wealthy-companies-reaches-360b-just-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 15:12:30](https://lobste.rs/s/44dgd7/small_language_models_are_future_agentic) - [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153)
* [2025-11-08, 15:05:41](https://news.ycombinator.com/item?id=45857099) - [$1T in Tech Stocks Sold Off as Market Grows Skeptical of AI](https://gizmodo.com/1-trillion-in-tech-stocks-sold-off-as-market-grows-skeptical-of-ai-2000683226)
* [2025-11-08, 14:58:03](https://news.ycombinator.com/item?id=45857045) - [An Algebraic Language for the Manipulation of Symbolic Expressions (1958) [pdf]](https://softwarepreservation.computerhistory.org/LISP/MIT/AIM-001.pdf)
* [2025-11-08, 14:33:00](https://news.ycombinator.com/item?id=45856883) - [Why Sam Altman Won&apos;t Be on the Hook for OpenAI&apos;s Spending Spree](https://www.forbes.com/sites/rashishrivastava/2025/11/07/why-sam-altman-wont-be-on-the-hook-for-openais-massive-spending-spree/)
* [2025-11-08, 14:18:22](https://news.ycombinator.com/item?id=45856804) - [AI benchmarks are a bad joke – and LLM makers are the ones laughing](https://www.theregister.com/2025/11/07/measuring_ai_models_hampered_by/)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 13:00:00](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Dating Is a Surprise Hit For the Social Network](https://tech.slashdot.org/story/25/11/08/0241231/facebook-dating-is-a-surprise-hit-for-the-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 12:00:50](https://news.ycombinator.com/item?id=45856069) - [Cekura (YC F24) Is Hiring](https://news.ycombinator.com/item?id=45856069)
* [2025-11-08, 11:27:56](https://news.ycombinator.com/item?id=45855933) - [My friends and I accidentally faked the Ryzen 7 9700X3D leaks](https://old.reddit.com/r/pcmasterrace/comments/1orc6jl/my_friends_and_i_accidentally_faked_the_ryzen_7/)
* [2025-11-08, 11:27:34](https://lobste.rs/s/epolln/valdi_is_cross_platform_ui_framework) - [Valdi is a cross-platform UI framework that delivers native performance without sacrificing developer velocity](https://github.com/Snapchat/Valdi)
* [2025-11-08, 10:33:39](https://lobste.rs/s/wbyo8d/jelly_slider) - [Jelly Slider](https://docs.swmansion.com/TypeGPU/examples/#example=rendering--jelly-slider)
* [2025-11-08, 10:21:17](https://lobste.rs/s/zfoetk/profiling_tools_i_use_for_qemu_storage) - [Profiling tools I use for QEMU storage performance optimization](http://blog.vmsplice.net/2025/06/profiling-tools-i-use-for-qemu-storage.html)
* [2025-11-08, 10:00:00](https://science.slashdot.org/story/25/11/08/0232221/unesco-adopts-global-standards-on-wild-west-field-of-neurotechnology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unesco Adopts Global Standards On &apos;Wild West&apos; Field of Neurotechnology](https://science.slashdot.org/story/25/11/08/0232221/unesco-adopts-global-standards-on-wild-west-field-of-neurotechnology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 09:06:00](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss)
* [2025-11-08, 07:29:35](https://news.ycombinator.com/item?id=45854862) - [Making Democracy Work: Fixing and Simplifying Egalitarian Paxos](https://arxiv.org/abs/2511.02743)
* [2025-11-08, 07:00:00](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lego Unveils First-Ever Star Trek Set](https://games.slashdot.org/story/25/11/08/0226233/lego-unveils-first-ever-star-trek-set?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 05:37:08](https://news.ycombinator.com/item?id=45854441) - [Apple&apos;s \&quot;notarisation\&quot; – blocking software freedom of developers and users](https://fsfe.org/news/2025/news-20251105-01.en.html)
* [2025-11-08, 04:19:00](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss) - [Study Concludes Cybersecurity Training Doesn&apos;t Work](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss)
* [2025-11-08, 03:30:00](https://science.slashdot.org/story/25/11/08/0215248/the-first-new-subsea-habitat-in-40-years-is-about-to-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The First New Subsea Habitat In 40 Years Is About To Launch](https://science.slashdot.org/story/25/11/08/0215248/the-first-new-subsea-habitat-in-40-years-is-about-to-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 02:27:48](https://news.ycombinator.com/item?id=45853536) - [Local First Htmx](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 02:20:00](https://slashdot.org/story/25/11/08/0155228/vibe-coding-named-word-of-the-year-by-collins-dictionary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Vibe Coding&apos; Named Word of the Year By Collins Dictionary](https://slashdot.org/story/25/11/08/0155228/vibe-coding-named-word-of-the-year-by-collins-dictionary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 01:40:45](https://lobste.rs/s/1fa70r/bootc_for_workstation_use) - [Bootc for workstation use](https://lwn.net/SubscriberLink/1042708/90b68e222a964524/)
* [2025-11-08, 01:40:00](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James D. Watson, Co-Discoverer of the Structure of DNA, Is Dead At 97](https://science.slashdot.org/story/25/11/07/2314257/james-d-watson-co-discoverer-of-the-structure-of-dna-is-dead-at-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 01:18:12](https://news.ycombinator.com/item?id=45853204) - [Running a 68060 CPU in Quadra 650](https://github.com/ZigZagJoe/Macintosh-Q650-68060)
* [2025-11-08, 01:00:00](https://games.slashdot.org/story/25/11/07/2319237/nintendo-has-too-many-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Nintendo Has Too Many Apps&apos;](https://games.slashdot.org/story/25/11/07/2319237/nintendo-has-too-many-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 00:37:36](https://news.ycombinator.com/item?id=45852974) - [Mullvad: Shutting down our search proxy Leta](https://mullvad.net/en/blog/shutting-down-our-search-proxy-leta)
* [2025-11-08, 00:21:45](https://news.ycombinator.com/item?id=45852895) - [Immutable Software Deploys Using ZFS Jails on FreeBSD](https://conradresearch.com/articles/immutable-software-deploy-zfs-jails)
* [2025-11-08, 00:20:00](https://news.slashdot.org/story/25/11/07/238257/you-cant-leave-unless-you-buy-something?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can&apos;t Leave Unless You Buy Something](https://news.slashdot.org/story/25/11/07/238257/you-cant-leave-unless-you-buy-something?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 00:14:50](https://news.ycombinator.com/item?id=45852854) - [Valdi – A cross-platform UI framework that delivers native performance](https://github.com/Snapchat/Valdi)
* [2025-11-08, 00:00:27](https://news.ycombinator.com/item?id=45852751) - [Cerebras Code now supports GLM 4.6 at 1000 tokens/sec](https://www.cerebras.ai/code)
* [2025-11-07, 23:40:00](https://yro.slashdot.org/story/25/11/07/232253/texas-sues-roblox-for-allegedly-failing-to-protect-children-on-its-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sues Roblox For Allegedly Failing To Protect Children On Its Platform](https://yro.slashdot.org/story/25/11/07/232253/texas-sues-roblox-for-allegedly-failing-to-protect-children-on-its-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 23:35:00](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss) - [Developer Warns Users That Fake Download Site is Hosting Windows 11 Upgrade Bypass Tool](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss)
* [2025-11-07, 23:04:39](https://news.ycombinator.com/item?id=45852328) - [Why is Zig so cool?](https://nilostolte.github.io/tech/articles/ZigCool.html)
* [2025-11-07, 23:02:00](https://tech.slashdot.org/story/25/11/07/2256226/gemini-starts-rolling-out-on-android-auto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini Starts Rolling Out On Android Auto](https://tech.slashdot.org/story/25/11/07/2256226/gemini-starts-rolling-out-on-android-auto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 22:25:00](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark&apos;s Government Aims To Ban Access To Social Media For Children Under 15](https://tech.slashdot.org/story/25/11/07/2223206/denmarks-government-aims-to-ban-access-to-social-media-for-children-under-15?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 21:22:00](https://slashdot.org/story/25/11/07/1912220/states-seek-extension-of-ecommerce-tariff-moratorium-at-wto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [States Seek Extension of Ecommerce Tariff Moratorium at WTO](https://slashdot.org/story/25/11/07/1912220/states-seek-extension-of-ecommerce-tariff-moratorium-at-wto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 21:13:54](https://lobste.rs/s/ghkvqm/challenges_benefits_upgrading_sea) - [Challenges and Benefits of Upgrading Sea of Thieves From C++14 to C++20](https://www.youtube.com/watch?v=Nm9-xKsZoNI)
* [2025-11-07, 20:50:40](https://news.ycombinator.com/item?id=45850963) - [YouTube Removes Windows 11 Bypass Tutorials, Claims &apos;Risk of Physical Harm&apos;](https://news.itsfoss.com/youtube-removes-windows-11-bypass-tutorials/)
* [2025-11-07, 20:44:00](https://games.slashdot.org/story/25/11/07/1915245/nintendo-wont-shy-away-from-continuing-to-try-anything?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Won&apos;t Shy Away From Continuing To &apos;Try Anything&apos;](https://games.slashdot.org/story/25/11/07/1915245/nintendo-wont-shy-away-from-continuing-to-try-anything?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 20:05:32](https://news.ycombinator.com/item?id=45850430) - [Apple is crossing a Steve Jobs red line](https://kensegall.com/2025/11/07/apple-is-crossing-a-steve-jobs-red-line/)
* [2025-11-07, 20:01:09](https://news.ycombinator.com/item?id=45850382) - [How did I get here?](https://how-did-i-get-here.net/)
* [2025-11-07, 20:00:00](https://news.slashdot.org/story/25/11/07/1934227/direct-file-wont-happen-in-2026-irs-tells-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Direct File Won&apos;t Happen in 2026, IRS Tells States](https://news.slashdot.org/story/25/11/07/1934227/direct-file-wont-happen-in-2026-irs-tells-states?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 19:35:18](https://lobste.rs/s/bmen3e/from_milliamperes_microamperes_lessons) - [From Milliamperes to Microamperes: Lessons in Low-Power Gadgetmaking](https://www.crowdsupply.com/teardown/portland-2025/long-talk/from-milliamperes-to-microamperes-lessons-in-low-power-gadgetmaking)
* [2025-11-07, 19:27:56](https://lobste.rs/s/9p9dup/why_nextcloud_feels_slow_use) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-07, 19:15:34](https://lobste.rs/s/scwreg/ffmpeg_assembly_language_lessons) - [FFmpeg Assembly Language Lessons](https://github.com/FFmpeg/asm-lessons)
* [2025-11-07, 19:10:22](https://lobste.rs/s/pexrmo/state_rust_dependency_ecosystem) - [The state of the Rust dependency ecosystem](https://00f.net/2025/10/17/state-of-the-rust-ecosystem/)
* [2025-11-07, 18:53:00](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - [LM8560, the Eternal Chip From the 1980 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss)
* [2025-11-07, 18:45:35](https://news.ycombinator.com/item?id=45849528) - [Ruby already solved my problem](https://newsletter.masilotti.com/p/ruby-already-solved-my-problem)
* [2025-11-07, 18:27:36](https://news.ycombinator.com/item?id=45849342) - [Myna: Monospace typeface designed for symbol-heavy programming languages](https://github.com/sayyadirfanali/Myna)
* [2025-11-07, 17:03:30](https://news.ycombinator.com/item?id=45848468) - [Angel Investors, a Field Guide](https://www.jeanyang.com/posts/angel-investors-a-field-guide/)
* [2025-11-07, 16:11:29](https://lobste.rs/s/ku3ul2/from_web_developer_database_developer_10) - [From web developer to database developer in 10 years](https://notes.eatonphil.com/2025-02-15-from-web-developer-to-database-developer-in-10-years.html)
* [2025-11-07, 14:28:21](https://lobste.rs/s/08srpl/announcing_magika_1_0_now_faster_smarter) - [Announcing Magika 1.0: now faster, smarter, and rebuilt in Rust](https://opensource.googleblog.com/2025/11/announcing-magika-10-now-faster-smarter.html)
* [2025-11-07, 14:11:59](https://lobste.rs/s/syxfbv/problems_with_move_semantics_c) - [Problems With Move Semantics in C++](https://youtu.be/Klq-sNxuP2g)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 14:05:49](https://news.ycombinator.com/item?id=45846517) - [Why I love OCaml (2023)](https://mccd.space/posts/ocaml-the-worlds-best/)
* [2025-11-07, 14:05:14](https://lobste.rs/s/aow9dx/slow_software_for_burning_world) - [Slow Software for a Burning World](https://bonfirenetworks.org/posts/slow-software-for-a-burning-world/)
* [2025-11-07, 12:26:05](https://lobste.rs/s/swncgw/why_i_don_t_test_different_designs_at_same) - [Why I don’t test different designs at the same time](https://adamsilver.io/blog/why-i-dont-test-different-designs-at-the-same-time/)
* [2025-11-07, 11:20:14](https://lobste.rs/s/fikz3p/typst_unlit_write_literate_haskell) - [Typst-Unlit: Write literate Haskell programs in Typst](https://cdn.oppi.li/typst-unlit.pdf)
* [2025-11-07, 10:59:03](https://lobste.rs/s/mkquz5/error_codes_for_control_flow) - [Error Codes for Control Flow](https://matklad.github.io/2025/11/06/error-codes-for-control-flow.html)
* [2025-11-07, 09:57:04](https://lobste.rs/s/eghbhu/linking_shrinking_rust_static_libraries) - [Linking and shrinking Rust static libraries: a tale of fire](https://centricular.com/devlog/2025-11/dragonfire/)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 09:19:01](https://lobste.rs/s/i0rf97/introduction_incusos) - [Introduction to IncusOS](https://linuxcontainers.org/incus-os/)
* [2025-11-07, 09:02:03](https://lobste.rs/s/jrg7nx/ai_s_70_problem) - [AI&apos;s 70% Problem](https://zed.dev/blog/ai-70-problem-addy-osmani)
* [2025-11-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss)
* [2025-11-07, 00:01:00](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss) - [GNOME Mutter Now \&quot;Completely Drops the Whole X11 Backend\&quot;](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)
* [2025-11-06, 22:47:52](https://lobste.rs/s/l5nsnw/unix_v4_tape_found_at_university_utah) - [Unix V4 tape found at The University of Utah](https://discuss.systems/@ricci/115504720054699983)
* [2025-11-06, 22:39:40](https://lobste.rs/s/kudguy/i_use_typst_now) - [I use Typst now](https://www.christopherbiscardi.com/i-use-typst-now)
* [2025-11-06, 19:23:24](https://lobste.rs/s/zvyspo/mastodon_4_5) - [Mastodon 4.5](https://blog.joinmastodon.org/2025/11/mastodon-4.5/)
* [2025-11-06, 19:17:00](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss) - [Tiny Electric Motor is as Powerful as Four Tesla Motors Put Together](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss)
* [2025-11-06, 14:31:00](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss) - [Canada Says Hacktivists Breached Water and Energy Facilities](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss)
* [2025-11-06, 11:24:16](https://lobste.rs/s/ywvatn/note_on_fil_c) - [A note on Fil-C](https://graydon2.dreamwidth.org/320265.html)
* [2025-11-06, 09:42:00](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss) - [What Happened to Running What You Wanted on Your Own Machine?](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss)
* [2025-11-06, 05:00:00](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss) - [World&apos;s Largest Wind-Powered Cargo Ship Takes to the Seas](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss)
* [2025-11-06, 00:14:00](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss) - [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss)
* [2025-11-05, 19:28:00](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss) - [Debian Introduces Rust Toolchain Dependencies to Apt](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss)
* [2025-11-05, 14:41:00](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss) - [We&apos;re About to Find Many More Interstellar Interlopers—Here&apos;s How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
* [2025-11-04, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss)
* [2025-11-04, 14:52:00](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss) - [Las Vegas Police Debut the World&apos;s First Tesla Cybertruck Patrol Fleet](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss)
* [2025-11-04, 11:33:31](https://news.ycombinator.com/item?id=45809782) - [Computational Complexity of Air Travel Planning (2003) [pdf]](http://www.ai.mit.edu/courses/6.034f/psets/ps1/airtravel.pdf)
* [2025-11-04, 10:08:00](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - [Tesla&apos;s ‘Robotaxis&apos; Keep Crashing-Even With Human ‘Safety Monitors&apos; Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss)
* [2025-11-04, 09:27:57](https://news.ycombinator.com/item?id=45809007) - [Venn Diagram for 7 Sets](https://moebio.com/research/sevensets/)
* [2025-11-04, 07:22:46](https://news.ycombinator.com/item?id=45808288) - [Reverse engineering a neural network&apos;s clever solution to binary addition (2023)](https://cprimozic.net/blog/reverse-engineering-a-small-neural-network/)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
