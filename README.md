# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [CosAE: Learnable Fourier Series for Image Restoration](https://sifeiliu.net/CosAE-page/) introduces a novel approach to image restoration, leveraging learnable Fourier series in various applications.

* [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32) showcases a successful OS created by an enthusiast, tailored for a retro computing platform.

* [Lossless LLM compression for efficient GPU inference via dynamic-length float](https://arxiv.org/abs/2504.11651) presents methods to make machine learning models more efficient via advanced compression techniques.

* [Cheap 'Transforming' Electric Truck Announced by Jeff Bezos-Backed Startup](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&utm_medium=feed) unveils an innovative electric truck designed to be both affordable and feature-rich.

* [Berkeley Humanoid Lite – Open-source robot](https://lite.berkeley-humanoid.org/) highlights a lightweight, open-source robotics initiative ideal for research and development.

## Cybersecurity and Privacy

* ['Read the Manual': Misconfigured Google Analytics Led to a Data Breach Affecting 4.7M](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&utm_medium=feed) reminds users of the potential risks when analytics tools are improperly configured.

* [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&from=rss) discusses a critical analysis of phishing techniques, emphasizing security awareness.

* [Unauthorized experiment on CMV involving AI-generated comments](https://www.reddit.com/r/changemyview/s/rYJLZr9ySo) raises concerns about AI ethics and platform manipulation.

* [The Friendship Recession: The lost art of connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting) examines the societal implications of declining real-life interactions in favor of digital platforms.

## Scientific Discoveries

* [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&from=rss) offers an extraordinary look at a rarely documented deep-sea creature.

* [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&from=rss) marks a significant leap in secure quantum communication technologies.

* [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&from=rss) highlights cutting-edge research linking physical microbiomes to psychological health.

* [China Shares Rare Moon Rocks With US](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) represents international collaboration in space exploration.

* [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&from=rss) alleges a controversial practice impacting consumer trust.

## Programming and Development

* [Past, Present, and Future of Sorbet Type Syntax](https://blog.jez.io/history-of-sorbet-syntax/) delves into the evolution and optimistic future of Sorbet's type-checking syntax.

* [Bare metal printf – C standard library without OS](https://popovicu.com/posts/bare-metal-printf/) illustrates ways developers can efficiently write and debug standalone applications.

* [Parallel ./configure](https://tavianator.com/2025/configure.html) showcases a time-efficient methodology for parallelizing build configuration processes.

* [Implementing Silent Hill's Fog in My (Real) PS1 Game](https://www.youtube.com/watch?v=EwpFdMJlVP4) provides techniques for recreating nostalgic video game aesthetics.

* [DataFusion - The Database Building Toolkit](https://www.youtube.com/watch?v=8QNNCr8WfDM) introduces a framework for constructing bespoke database solutions.

## Society and Culture

* [California Becomes the World's Fourth-Largest Economy, Overtaking Japan](https://news.slashdot.org/story/25/04/26/0625244/california-becomes-the-worlds-fourth-largest-economy-overtaking-japan?utm_source=rss1.0mainlinkanon&utm_medium=feed) reports on California's landmark economic milestone.

* [Netflix Introduces a New Kind of Subtitles For the Non-Hearing Impaired](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&utm_medium=feed) describes an accessibility enhancement catering to broader audiences.

* [Hosting a Blog on a Nintendo Wii](https://soylentnews.org/article.pl?sid=25/04/23/0343211&from=rss) demonstrates creative use of legacy hardware.

* [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&from=rss) explores the fascinating evolution of methods to measure time.

* [Jim Zemlin on Taking a 'Portfolio Approach' to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&from=rss) emphasizes strategic guidance for open-source initiatives.

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

* [2025-04-26, 21:52:04](https://lobste.rs/s/zhkfsl/past_present_future_sorbet_type_syntax) - [Past, Present, and Future of Sorbet Type Syntax](https://blog.jez.io/history-of-sorbet-syntax/)
* [2025-04-26, 21:50:25](https://lobste.rs/s/tgr67v/apl_cultivations) - [APL Cultivations](https://xpqz.github.io/cultivations/Intro.html)
* [2025-04-26, 21:34:00](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Read the Manual&apos;: Misconfigured Google Analytics Led to a Data Breach Affecting 4.7M](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 21:32:37](https://news.ycombinator.com/item?id=43807404) - [Bare metal printf – C standard library without OS](https://popovicu.com/posts/bare-metal-printf/)
* [2025-04-26, 21:29:45](https://lobste.rs/s/uzswgd/bare_metal_printf_c_standard_library) - [Bare metal printf - C standard library without OS](https://popovicu.com/posts/bare-metal-printf/)
* [2025-04-26, 20:43:22](https://news.ycombinator.com/item?id=43807029) - [CosAE: Learnable Fourier Series for Image Restoration](https://sifeiliu.net/CosAE-page/)
* [2025-04-26, 20:34:00](https://entertainment.slashdot.org/story/25/04/26/1935238/youtube-is-huge---and-a-few-creators-are-getting-rich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube is Huge - and a Few Creators Are Getting Rich](https://entertainment.slashdot.org/story/25/04/26/1935238/youtube-is-huge---and-a-few-creators-are-getting-rich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 20:33:34](https://news.ycombinator.com/item?id=43806940) - [Unauthorized experiment on CMV involving AI-generated comments](https://www.reddit.com/r/changemyview/s/rYJLZr9ySo)
* [2025-04-26, 20:23:32](https://news.ycombinator.com/item?id=43806838) - [Slinky-Coil Dipole (2021)](https://nonstopsystems.com/radio/frank_radio_antenna.htm)
* [2025-04-26, 20:22:35](https://lobste.rs/s/fcai2b/rss2remarkable_script_make_rss_feeds) - [rss2remarkable - Script to make RSS feeds readable on your reMarkable tablet](https://codeberg.org/akselmo/rss2remarkable)
* [2025-04-26, 20:12:00](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss) - [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss)
* [2025-04-26, 20:09:10](https://news.ycombinator.com/item?id=43806694) - [Hundreds more NSF grants terminated after agency director resigns](https://www.nature.com/articles/d41586-025-01312-8)
* [2025-04-26, 20:09:04](https://news.ycombinator.com/item?id=43806691) - [Dad and the Egg Controller (2018)](https://www.pentadact.com/2018-12-18-dad-and-the-egg-controller/)
* [2025-04-26, 20:02:06](https://news.ycombinator.com/item?id=43806630) - [The Passing of Ucbvax (1994)](http://ucbvax.berkeley.edu/passing-of-ucbvax.txt)
* [2025-04-26, 19:45:44](https://lobste.rs/s/tydvuu/don_t_put_weverything_your_build_flags) - [Don’t put -Weverything in your build flags (2018)](https://quuxplusone.github.io/blog/2018/12/06/dont-use-weverything/)
* [2025-04-26, 19:43:52](https://news.ycombinator.com/item?id=43806491) - [Bill Gates&apos;s Personal Easter Eggs in 8 Bit BASIC (2008)](https://www.pagetable.com/?p=43)
* [2025-04-26, 19:34:00](https://mobile.slashdot.org/story/25/04/26/078214/can-a-new-dumbphone-with-an-e-ink-display-help-rewire-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can a New &apos;Dumbphone&apos; With an E Ink Display Help Rewire Your Brain?](https://mobile.slashdot.org/story/25/04/26/078214/can-a-new-dumbphone-with-an-e-ink-display-help-rewire-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 19:14:28](https://news.ycombinator.com/item?id=43806296) - [Tilt: dev environment as code](https://github.com/tilt-dev/tilt)
* [2025-04-26, 19:12:20](https://news.ycombinator.com/item?id=43806281) - [BART&apos;s Anime Mascots](https://www.bart.gov/news/fun/anime)
* [2025-04-26, 18:34:00](https://news.slashdot.org/story/25/04/26/0625244/california-becomes-the-worlds-fourth-largest-economy-overtaking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Becomes the World&apos;s Fourth-Largest Economy, Overtaking Japan](https://news.slashdot.org/story/25/04/26/0625244/california-becomes-the-worlds-fourth-largest-economy-overtaking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 18:26:16](https://news.ycombinator.com/item?id=43805972) - [Show HN: Rocal UI – A simple template engine with Rust](https://github.com/rocal-dev/rocal/tree/main/rocal_ui)
* [2025-04-26, 17:58:16](https://news.ycombinator.com/item?id=43805729) - [Barlow&apos;s Principles of Adult Behaviour](https://www.mail-archive.com/silklist@lists.hserus.net/msg08034.html)
* [2025-04-26, 17:53:12](https://news.ycombinator.com/item?id=43805683) - [Robot Dexterity Still Seems Hard](https://www.construction-physics.com/p/robot-dexterity-still-seems-hard)
* [2025-04-26, 17:34:00](https://news.slashdot.org/story/25/04/26/0520221/us-attorney-for-dc-accuses-wikipedia-of-propaganda-threatens-nonprofit-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Attorney for D.C. Accuses Wikipedia of &apos;Propaganda&apos;, Threatens Nonprofit Status](https://news.slashdot.org/story/25/04/26/0520221/us-attorney-for-dc-accuses-wikipedia-of-propaganda-threatens-nonprofit-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 17:21:31](https://lobste.rs/s/k8kqw0/how_we_diagnosed_fixed_2023_voyager_1) - [How We Diagnosed and Fixed the 2023 Voyager 1 Anomaly from 15 Billion Miles Away](https://www.youtube.com/watch?v=YcUycQoz0zg)
* [2025-04-26, 17:13:18](https://news.ycombinator.com/item?id=43805369) - [The Seven-Year Rule](https://www.macsparky.com/blog/2025/04/the-seven-year-rule/)
* [2025-04-26, 17:12:15](https://news.ycombinator.com/item?id=43805358) - [HTTP Feeds: a minimal specification for polling events over HTTP](https://www.http-feeds.org/)
* [2025-04-26, 17:09:35](https://lobste.rs/s/8avzyk/datafusion_database_building_toolkit) - [DataFusion - The Database Building Toolkit](https://www.youtube.com/watch?v=8QNNCr8WfDM)
* [2025-04-26, 16:34:00](https://slashdot.org/story/25/04/26/0742205/nyt-asks-should-we-start-taking-the-welfare-of-ai-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT Asks: Should We Start Taking the Welfare of AI Seriously?](https://slashdot.org/story/25/04/26/0742205/nyt-asks-should-we-start-taking-the-welfare-of-ai-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 16:23:17](https://lobste.rs/s/1vzqe2/parallel_configure) - [Parallel ./configure](https://tavianator.com/2025/configure.html)
* [2025-04-26, 16:03:14](https://lobste.rs/s/7jamj2/ai_coding_parallels_with_semiconductor) - [AI coding: parallels with the Semiconductor Revolution](https://xania.org/202504/ai-in-coding)
* [2025-04-26, 15:34:00](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap &apos;Transforming&apos; Electric Truck Announced by Jeff Bezos-Backed Startup](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 15:28:00](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss) - [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss)
* [2025-04-26, 14:45:07](https://lobste.rs/s/thgtxa/ruby_feature_16131_remove_safe_taint) - [Ruby Feature #16131: Remove $SAFE, taint and trust (2019)](https://bugs.ruby-lang.org/issues/16131)
* [2025-04-26, 14:34:00](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When You Pay People Not to Use Google Search?](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 14:04:01](https://news.ycombinator.com/item?id=43803724) - [Stuffed-Na(a)N: stuff your NaNs](https://github.com/si14/stuffed-naan-js)
* [2025-04-26, 13:56:34](https://news.ycombinator.com/item?id=43803659) - [Thank you for holding my duck (2021)](https://naml.us/post/thank-you-for-holding-my-duck/)
* [2025-04-26, 13:38:25](https://news.ycombinator.com/item?id=43803518) - [LLMs can see and hear without any training](https://github.com/facebookresearch/MILS)
* [2025-04-26, 13:19:52](https://lobste.rs/s/lkxhg6/stop_overbuilding_evals) - [Stop overbuilding evals](https://softwaredoug.com/blog/2025/04/26/stop-overbuilding-evals)
* [2025-04-26, 13:04:08](https://news.ycombinator.com/item?id=43803243) - [Watching o3 guess a photo&apos;s location is surreal, dystopian and entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-26, 13:00:00](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [XPrize In Carbon Removal Goes To Enhanced Rock Weathering](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 12:51:41](https://news.ycombinator.com/item?id=43803148) - [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32)
* [2025-04-26, 12:00:38](https://news.ycombinator.com/item?id=43802839) - [Freshpaint (YC S19) is hiring back end and front end engineers (Remote, US only)](https://news.ycombinator.com/item?id=43802839)
* [2025-04-26, 11:57:33](https://lobste.rs/s/9vwrsb/implementing_silent_hill_s_fog_my_real_ps1) - [Implementing Silent Hill&apos;s Fog in My (Real) PS1 Game](https://www.youtube.com/watch?v=EwpFdMJlVP4)
* [2025-04-26, 11:41:21](https://news.ycombinator.com/item?id=43802727) - [The Friendship Recession: The lost art of connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting)
* [2025-04-26, 10:42:00](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss) - [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss)
* [2025-04-26, 10:00:00](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Analysis Casts Doubt On &apos;Biosignatures&apos; Found On Planet K2-18b](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 09:35:22](https://lobste.rs/s/pipsig/nncp_encrypted_authenticated_onion) - [NNCP: Encrypted, authenticated, onion-routed version of UUCP](https://www.complete.org/nncp/)
* [2025-04-26, 08:39:29](https://news.ycombinator.com/item?id=43801906) - [An end to all this prostate trouble?](https://yarchive.net/blog/prostate/)
* [2025-04-26, 07:19:40](https://lobste.rs/s/focgny/taxonomy_c_types) - [A taxonomy of C++ types](https://blog.knatten.org/2025/04/25/a-taxonomy-of-c-types/)
* [2025-04-26, 07:00:00](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Shares Rare Moon Rocks With US](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 06:42:59](https://news.ycombinator.com/item?id=43801439) - [Australian who ordered radioactive materials walks away from court](https://www.chemistryworld.com/news/australian-who-ordered-radioactive-materials-over-the-internet-walks-away-from-court/4021306.article)
* [2025-04-26, 05:55:00](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss) - [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss)
* [2025-04-26, 05:31:52](https://news.ycombinator.com/item?id=43801179) - [Cloth](https://www.cloudofoz.com/verlet-test/)
* [2025-04-26, 03:55:24](https://lobste.rs/s/qs0onc/nofl_precise_immix) - [Nofl: A Precise Immix](https://arxiv.org/pdf/2503.16971v1)
* [2025-04-26, 03:43:01](https://lobste.rs/s/ebcxhd/when_etc_h_sts_breaks_your_substack_editor) - [When /etc/h*sts Breaks Your Substack Editor: An Adventure in Web Content Filtering](https://scalewithlee.substack.com/p/when-etchsts-breaks-your-substack)
* [2025-04-26, 03:30:00](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Introduces a New Kind of Subtitles For the Non-Hearing Impaired](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 02:32:25](https://lobste.rs/s/1c9kcg/k_slices_k_dices) - [K Slices, K Dices](https://beyondloom.com/blog/slicedice.html)
* [2025-04-26, 02:13:00](https://lobste.rs/s/n1s9xa/wanix_virtual_environment_kit_for_local) - [Wanix :: Virtual environment kit for the local-first web, inspired by Plan 9](https://wanix.sh/)
* [2025-04-26, 02:02:00](https://entertainment.slashdot.org/story/25/04/25/2155205/apple-tv-is-worst-marketer-in-the-universe-says-producer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple TV+ Is &apos;Worst Marketer In the Universe,&apos; Says Producer](https://entertainment.slashdot.org/story/25/04/25/2155205/apple-tv-is-worst-marketer-in-the-universe-says-producer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 01:38:54](https://news.ycombinator.com/item?id=43800151) - [Mobygratis – Free Moby music to empower your creative projects](https://mobygratis.com/)
* [2025-04-26, 01:25:00](https://tech.slashdot.org/story/25/04/25/2148256/worlds-biggest-zipper-maker-is-developing-a-self-propelled-zipper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Biggest Zipper Maker Is Developing a Self-Propelled Zipper](https://tech.slashdot.org/story/25/04/25/2148256/worlds-biggest-zipper-maker-is-developing-a-self-propelled-zipper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 01:08:00](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss) - [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss)
* [2025-04-26, 01:03:40](https://news.ycombinator.com/item?id=43800002) - [Berkeley Humanoid Lite – Open-source robot](https://lite.berkeley-humanoid.org/)
* [2025-04-26, 00:45:00](https://developers.slashdot.org/story/25/04/25/2139216/devs-sound-alarm-after-microsoft-subtracts-cc-extension-from-vs-code-forks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Devs Sound Alarm After Microsoft Subtracts C/C++ Extension From VS Code Forks](https://developers.slashdot.org/story/25/04/25/2139216/devs-sound-alarm-after-microsoft-subtracts-cc-extension-from-vs-code-forks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 00:30:41](https://news.ycombinator.com/item?id=43799820) - [I wrote a book called “Crap Towns”. It seemed funny at the time](https://samj.substack.com/p/that-joke-isnt-funny-any-more)
* [2025-04-25, 23:03:55](https://news.ycombinator.com/item?id=43799302) - [Wikipedia’s nonprofit status questioned by D.C. U.S. attorney](https://www.washingtonpost.com/technology/2025/04/25/wikipedia-nonprofit-ed-martin-letter/)
* [2025-04-25, 22:39:21](https://lobste.rs/s/ljr4im/ats3_xanadu_released) - [ATS3 Xanadu released](https://github.com/githwxi/XATSHOME)
* [2025-04-25, 21:09:27](https://lobste.rs/s/poyxdo/o_no_you_didn_t) - [O(no) You Didn’t](https://mrshiny608.github.io/MrShiny608/optimisation/2025/04/22/OhNoYouDidnt.html)
* [2025-04-25, 20:20:00](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss) - [First SD Express 8.0 Memory Card From Adata Hits 1.6 GB/s Read Speeds](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss)
* [2025-04-25, 19:46:39](https://lobste.rs/s/chpmcp/linus_torvalds_expresses_his_hatred_for) - [Linus Torvalds Expresses His Hatred For Case-Insensitive File-Systems](https://www.phoronix.com/news/Linus-Torvalds-Anti-Case-Fold)
* [2025-04-25, 18:20:53](https://news.ycombinator.com/item?id=43796935) - [Lossless LLM compression for efficient GPU inference via dynamic-length float](https://arxiv.org/abs/2504.11651)
* [2025-04-25, 16:19:32](https://lobste.rs/s/hmjv3a/gcc_15_1_released) - [GCC 15.1 Released](https://gcc.gnu.org/pipermail/gcc/2025-April/245971.html)
* [2025-04-25, 15:34:00](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss) - [Harvard Stands Up for the First Amendment](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss)
* [2025-04-25, 15:28:35](https://lobste.rs/s/1dy62n/devenv_1_6_extensible_ad_hoc_nix) - [devenv 1.6: Extensible Ad-Hoc Nix Environments](https://devenv.sh/blog/2025/04/25/devenv-16-extensible-ad-hoc-nix-environments/)
* [2025-04-25, 13:45:05](https://lobste.rs/s/icn0oe/don_t_delete_just_don_t_2009) - [Don’t Delete – Just Don’t (2009)](https://udidahan.com/2009/09/01/dont-delete-just-dont/)
* [2025-04-25, 12:28:17](https://lobste.rs/s/uybibu/another_war_story_hardest_bug_i_ever) - [Another war story: the hardest bug I ever debugged](https://philippweissensteiner.com/another-war-story.html)
* [2025-04-25, 10:47:00](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss) - [Out-of-Balance Bacteria is Linked to Multiple Sclerosis − the Ratio Can Predict Severity of Disease](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss)
* [2025-04-25, 06:02:00](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss) - [4chan May be Dead, but its Toxic Legacy Lives on](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss)
* [2025-04-25, 01:13:00](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss) - [Crosswalk Button Voices Altered](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss)
* [2025-04-24, 20:24:00](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss) - [C64 Demo Using Audio for Video and Vice Versa](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss)
* [2025-04-24, 15:38:00](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss) - [Open Home passes 2 million homes equipped](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss)
* [2025-04-24, 10:53:00](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss) - [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss)
* [2025-04-24, 06:11:00](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss) - [World&apos;s First Drone System for Fighting Lightning Protects Cities and Infrastructure](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss)
* [2025-04-24, 01:26:00](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss) - [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss)
* [2025-04-23, 20:41:00](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss) - [Hosting a Blog on a Nintendo Wii](https://soylentnews.org/article.pl?sid=25/04/23/0343211&amp;from=rss)
* [2025-04-23, 15:56:00](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss) - [Laser Stimulation of Photoreceptors Reveals New Colors](https://soylentnews.org/article.pl?sid=25/04/22/015230&amp;from=rss)
* [2025-04-23, 11:13:00](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss) - [ChatGPT is Now a Potent Tool for Finding the Locations of Photos, Raising Doxxing Concerns](https://soylentnews.org/article.pl?sid=25/04/22/011227&amp;from=rss)
* [2025-04-23, 06:27:00](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss) - [Major Blow For Cheap Handhelds As Anbernic No Longer Ships To The US](https://soylentnews.org/article.pl?sid=25/04/22/0055253&amp;from=rss)
* [2025-04-23, 01:42:00](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss) - [Cancer-Causing Arsenic is Building Up in the World&apos;s Rice](https://soylentnews.org/article.pl?sid=25/04/22/0052214&amp;from=rss)
* [2025-04-22, 20:57:00](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss) - [CA/Browser Forum Votes to Reduce the Maximum Validity Term of SSL/TLS Certs to 47 Days by 2029](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
