# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Taxonomy of Failure Mode in Agentic AI Systems](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Taxonomy-of-Failure-Mode-in-Agentic-AI-Systems-Whitepaper.pdf) ([article](https://lobste.rs/s/bigox9/taxonomy_failure_mode_agentic_ai_systems))

* [Moving Beyond Containers – Introducing Boxer by Daniel Phillips WASM I/O 2025 [video]](https://www.youtube.com/watch?v=rHOwhkHv21U) ([comments](https://news.ycombinator.com/item?id=43809630))

* [Parallel ./configure](https://tavianator.com/2025/configure.html) ([comments](https://lobste.rs/s/1vzqe2/parallel_configure))

* [Watching o3 guess a photo's location is surreal, dystopian and entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/) ([comments](https://news.ycombinator.com/item?id=43803243))

* [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32) ([comments](https://news.ycombinator.com/item?id=43803148))

## Science and Space

* [Can Solar Wind Make Water on the Moon? A NASA Experiment Shows Maybe](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43807753))

* [How We Diagnosed and Fixed the 2023 Voyager 1 Anomaly from 15 Billion Miles Away](https://www.youtube.com/watch?v=YcUycQoz0zg) ([comments](https://lobste.rs/s/k8kqw0/how_we_diagnosed_fixed_2023_voyager_1))

* [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&from=rss)

## Security and Privacy

* [Apple Encrypted Archive](https://theapplewiki.com/wiki/Apple_Encrypted_Archive) ([article](https://lobste.rs/s/zczynh/apple_encrypted_archive))

* ['Read the Manual': Misconfigured Google Analytics Led to a Data Breach Affecting 4.7M](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Deepfake porn is destroying real lives in South Korea](https://www.cnn.com/2025/04/25/asia/south-korea-deepfake-crimes-intl-hnk-dst/index.html) ([comments](https://news.ycombinator.com/item?id=43809417))

## Cultural and Social Issues

* [Tipping: How Gratuity Replaced Fair Wages in U.S. Restaurants](https://www.7shifts.com/blog/history-of-tipping-restaurants/) ([comments](https://news.ycombinator.com/item?id=43809610))

* [The Friendship Recession: The lost art of connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting) ([comments](https://news.ycombinator.com/item?id=43802727))

* [iPad Jammed in Seat Forces Emergency Landing of Airplane Carrying 400 Passengers](https://tech.slashdot.org/story/25/04/27/0031222/ipad-jammed-in-seat-forces-emergency-landing-of-airplane-carrying-400-passengers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Miscellaneous

* [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&from=rss)

* [9front “clause 15 common elements of maus and star type” released](https://9front.org/releases/2025/04/26/0/) ([article](https://lobste.rs/s/lzgrqf/9front_clause_15_common_elements_maus))

* [Amazon Just Happens to Hold Book Sale During Independent Bookstore Day](https://gizmodo.com/amazon-just-happens-to-hold-book-sale-during-independent-bookstore-day-2000594958) ([comments](https://news.ycombinator.com/item?id=43808334))

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

* [2025-04-27, 06:44:06](https://lobste.rs/s/bigox9/taxonomy_failure_mode_agentic_ai_systems) - [Taxonomy of Failure Mode in Agentic AI Systems](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Taxonomy-of-Failure-Mode-in-Agentic-AI-Systems-Whitepaper.pdf)
* [2025-04-27, 05:43:00](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss) - [Post-Quantum Crypto: McEliece Standardization](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss)
* [2025-04-27, 05:23:44](https://news.ycombinator.com/item?id=43809630) - [Moving Beyond Containers – Introducing Boxer by Daniel Phillips WASM I/O 2025 [video]](https://www.youtube.com/watch?v=rHOwhkHv21U)
* [2025-04-27, 05:23:18](https://lobste.rs/s/n0goy4/not_number) - [Not a Number](https://www.nan.fyi/)
* [2025-04-27, 05:20:11](https://news.ycombinator.com/item?id=43809610) - [Tipping: How Gratuity Replaced Fair Wages in U.S. Restaurants](https://www.7shifts.com/blog/history-of-tipping-restaurants/)
* [2025-04-27, 05:02:15](https://lobste.rs/s/zczynh/apple_encrypted_archive) - [Apple Encrypted Archive](https://theapplewiki.com/wiki/Apple_Encrypted_Archive)
* [2025-04-27, 04:44:43](https://news.ycombinator.com/item?id=43809484) - [CSS Zen Garden](https://csszengarden.com/)
* [2025-04-27, 04:34:00](https://tech.slashdot.org/story/25/04/27/0252257/4chan-returns-details-breach-blames-funding-issues-ends-shockwave-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan Returns, Details Breach, Blames Funding Issues, Ends Shockwave Board](https://tech.slashdot.org/story/25/04/27/0252257/4chan-returns-details-breach-blames-funding-issues-ends-shockwave-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 04:24:43](https://news.ycombinator.com/item?id=43809417) - [Deepfake porn is destroying real lives in South Korea](https://www.cnn.com/2025/04/25/asia/south-korea-deepfake-crimes-intl-hnk-dst/index.html)
* [2025-04-27, 03:33:13](https://lobste.rs/s/lzgrqf/9front_clause_15_common_elements_maus) - [9front “clause 15 common elements of maus and star type” released](https://9front.org/releases/2025/04/26/0/)
* [2025-04-27, 02:52:18](https://news.ycombinator.com/item?id=43809092) - [Open-source interactive C tutorial in the browser](https://www.learn-c.org/)
* [2025-04-27, 02:23:16](https://lobste.rs/s/fsyavq/unauthorized_experiment_on_cmv) - [Unauthorized Experiment on CMV Involving AI-generated Comments](https://www.reddit.com/r/changemyview/comments/1k8b2hj/meta_unauthorized_experiment_on_cmv_involving/)
* [2025-04-27, 01:40:26](https://news.ycombinator.com/item?id=43808803) - [Found a simple tool for database modeling: dbdiagram.io](https://dbdiagram.io)
* [2025-04-27, 01:34:00](https://tech.slashdot.org/story/25/04/27/0031222/ipad-jammed-in-seat-forces-emergency-landing-of-airplane-carrying-400-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPad Jammed in Seat Forces Emergency Landing of Airplane Carrying 400 Passengers](https://tech.slashdot.org/story/25/04/27/0031222/ipad-jammed-in-seat-forces-emergency-landing-of-airplane-carrying-400-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 01:23:05](https://lobste.rs/s/nflacr/dive_into_systems_2020) - [Dive into Systems (2020)](https://diveintosystems.org/)
* [2025-04-27, 01:18:03](https://news.ycombinator.com/item?id=43808671) - [CONL: \&quot;Markdown\&quot; for your config files](https://cirw.in/blog/conl)
* [2025-04-27, 01:00:00](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss) - [Kennedy Promises Studies Using Private Health Data to Identify Factors That May Cause Autism](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss)
* [2025-04-27, 00:32:23](https://news.ycombinator.com/item?id=43808454) - [Sigbovik Conference Proceedings 2025 [pdf]](https://sigbovik.org/2025/proceedings.pdf)
* [2025-04-27, 00:30:42](https://news.ycombinator.com/item?id=43808443) - [IcôNES](https://icones.js.org/)
* [2025-04-27, 00:27:50](https://news.ycombinator.com/item?id=43808428) - [Path is a utility for working with paths](https://gitlab.com/SpyrjaGaldr/path)
* [2025-04-27, 00:04:29](https://news.ycombinator.com/item?id=43808334) - [Amazon Just Happens to Hold Book Sale During Independent Bookstore Day](https://gizmodo.com/amazon-just-happens-to-hold-book-sale-during-independent-bookstore-day-2000594958)
* [2025-04-26, 22:53:51](https://lobste.rs/s/utpzij/anatomy_sql_engine) - [Anatomy Of A SQL Engine](https://dolthub.com/blog/2025-04-25-sql-engine-anatomy/)
* [2025-04-26, 22:34:00](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Solar Wind Make Water on the Moon? A NASA Experiment Shows Maybe ](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 22:24:04](https://news.ycombinator.com/item?id=43807753) - [Parity (YC S24) is hiring founding engineers to build an AI SRE (in-person, SF)](https://www.ycombinator.com/companies/parity/jobs)
* [2025-04-26, 22:13:13](https://lobste.rs/s/2xti6d/compiler_reminders) - [Compiler reminders](https://jfmengels.net/compiler-reminders)
* [2025-04-26, 22:00:40](https://news.ycombinator.com/item?id=43807593) - [Anatomy of a SQL Engine](https://www.dolthub.com/blog/2025-04-25-sql-engine-anatomy/)
* [2025-04-26, 21:59:33](https://lobste.rs/s/9jq7kn/smallweb_your_internet_folder) - [Smallweb – Your Internet Folder](https://smallweb.run/)
* [2025-04-26, 21:52:04](https://lobste.rs/s/zhkfsl/past_present_future_sorbet_type_syntax) - [Past, Present, and Future of Sorbet Type Syntax](https://blog.jez.io/history-of-sorbet-syntax/)
* [2025-04-26, 21:50:25](https://lobste.rs/s/tgr67v/apl_cultivations) - [APL Cultivations](https://xpqz.github.io/cultivations/Intro.html)
* [2025-04-26, 21:34:00](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Read the Manual&apos;: Misconfigured Google Analytics Led to a Data Breach Affecting 4.7M](https://it.slashdot.org/story/25/04/26/2042230/read-the-manual-misconfigured-google-analytics-led-to-a-data-breach-affecting-47m?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 21:32:37](https://news.ycombinator.com/item?id=43807404) - [Bare metal printf – C standard library without OS](https://popovicu.com/posts/bare-metal-printf/)
* [2025-04-26, 21:29:45](https://lobste.rs/s/uzswgd/bare_metal_printf_c_standard_library) - [Bare metal printf - C standard library without OS](https://popovicu.com/posts/bare-metal-printf/)
* [2025-04-26, 20:43:22](https://news.ycombinator.com/item?id=43807029) - [CosAE: Learnable Fourier Series for Image Restoration](https://sifeiliu.net/CosAE-page/)
* [2025-04-26, 20:34:00](https://entertainment.slashdot.org/story/25/04/26/1935238/youtube-is-huge---and-a-few-creators-are-getting-rich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube is Huge - and a Few Creators Are Getting Rich](https://entertainment.slashdot.org/story/25/04/26/1935238/youtube-is-huge---and-a-few-creators-are-getting-rich?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 20:23:32](https://news.ycombinator.com/item?id=43806838) - [Slinky-Coil Dipole (2021)](https://nonstopsystems.com/radio/frank_radio_antenna.htm)
* [2025-04-26, 20:22:35](https://lobste.rs/s/fcai2b/rss2remarkable_script_make_rss_feeds) - [rss2remarkable - Script to make RSS feeds readable on your reMarkable tablet](https://codeberg.org/akselmo/rss2remarkable)
* [2025-04-26, 20:12:00](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss) - [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss)
* [2025-04-26, 20:09:04](https://news.ycombinator.com/item?id=43806691) - [Dad and the Egg Controller (2018)](https://www.pentadact.com/2018-12-18-dad-and-the-egg-controller/)
* [2025-04-26, 20:02:06](https://news.ycombinator.com/item?id=43806630) - [The Passing of Ucbvax (1994)](http://ucbvax.berkeley.edu/passing-of-ucbvax.txt)
* [2025-04-26, 19:45:44](https://lobste.rs/s/tydvuu/don_t_put_weverything_your_build_flags) - [Don’t put -Weverything in your build flags (2018)](https://quuxplusone.github.io/blog/2018/12/06/dont-use-weverything/)
* [2025-04-26, 19:43:52](https://news.ycombinator.com/item?id=43806491) - [Bill Gates&apos;s Personal Easter Eggs in 8 Bit BASIC (2008)](https://www.pagetable.com/?p=43)
* [2025-04-26, 19:34:00](https://mobile.slashdot.org/story/25/04/26/078214/can-a-new-dumbphone-with-an-e-ink-display-help-rewire-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can a New &apos;Dumbphone&apos; With an E Ink Display Help Rewire Your Brain?](https://mobile.slashdot.org/story/25/04/26/078214/can-a-new-dumbphone-with-an-e-ink-display-help-rewire-your-brain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 19:14:28](https://news.ycombinator.com/item?id=43806296) - [Tilt: dev environment as code](https://github.com/tilt-dev/tilt)
* [2025-04-26, 19:12:20](https://news.ycombinator.com/item?id=43806281) - [BART&apos;s Anime Mascots](https://www.bart.gov/news/fun/anime)
* [2025-04-26, 18:34:00](https://news.slashdot.org/story/25/04/26/0625244/california-becomes-the-worlds-fourth-largest-economy-overtaking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Becomes the World&apos;s Fourth-Largest Economy, Overtaking Japan](https://news.slashdot.org/story/25/04/26/0625244/california-becomes-the-worlds-fourth-largest-economy-overtaking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 17:34:00](https://news.slashdot.org/story/25/04/26/0520221/us-attorney-for-dc-accuses-wikipedia-of-propaganda-threatens-nonprofit-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Attorney for D.C. Accuses Wikipedia of &apos;Propaganda&apos;, Threatens Nonprofit Status](https://news.slashdot.org/story/25/04/26/0520221/us-attorney-for-dc-accuses-wikipedia-of-propaganda-threatens-nonprofit-status?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 17:21:31](https://lobste.rs/s/k8kqw0/how_we_diagnosed_fixed_2023_voyager_1) - [How We Diagnosed and Fixed the 2023 Voyager 1 Anomaly from 15 Billion Miles Away](https://www.youtube.com/watch?v=YcUycQoz0zg)
* [2025-04-26, 17:12:15](https://news.ycombinator.com/item?id=43805358) - [HTTP Feeds: a minimal specification for polling events over HTTP](https://www.http-feeds.org/)
* [2025-04-26, 17:09:35](https://lobste.rs/s/8avzyk/datafusion_database_building_toolkit) - [DataFusion - The Database Building Toolkit](https://www.youtube.com/watch?v=8QNNCr8WfDM)
* [2025-04-26, 16:34:00](https://slashdot.org/story/25/04/26/0742205/nyt-asks-should-we-start-taking-the-welfare-of-ai-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT Asks: Should We Start Taking the Welfare of AI Seriously?](https://slashdot.org/story/25/04/26/0742205/nyt-asks-should-we-start-taking-the-welfare-of-ai-seriously?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 16:23:17](https://lobste.rs/s/1vzqe2/parallel_configure) - [Parallel ./configure](https://tavianator.com/2025/configure.html)
* [2025-04-26, 15:34:00](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cheap &apos;Transforming&apos; Electric Truck Announced by Jeff Bezos-Backed Startup](https://tech.slashdot.org/story/25/04/26/0425259/cheap-transforming-electric-truck-announced-by-jeff-bezos-backed-startup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 15:28:00](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss) - [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss)
* [2025-04-26, 14:45:07](https://lobste.rs/s/thgtxa/ruby_feature_16131_remove_safe_taint) - [Ruby Feature #16131: Remove $SAFE, taint and trust (2019)](https://bugs.ruby-lang.org/issues/16131)
* [2025-04-26, 14:34:00](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When You Pay People Not to Use Google Search?](https://tech.slashdot.org/story/25/04/26/065228/what-happens-when-you-pay-people-not-to-use-google-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 14:04:01](https://news.ycombinator.com/item?id=43803724) - [Stuffed-Na(a)N: stuff your NaNs](https://github.com/si14/stuffed-naan-js)
* [2025-04-26, 13:38:25](https://news.ycombinator.com/item?id=43803518) - [LLMs can see and hear without any training](https://github.com/facebookresearch/MILS)
* [2025-04-26, 13:19:52](https://lobste.rs/s/lkxhg6/stop_overbuilding_evals) - [Stop overbuilding evals](https://softwaredoug.com/blog/2025/04/26/stop-overbuilding-evals)
* [2025-04-26, 13:04:08](https://news.ycombinator.com/item?id=43803243) - [Watching o3 guess a photo&apos;s location is surreal, dystopian and entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-26, 13:00:00](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [XPrize In Carbon Removal Goes To Enhanced Rock Weathering](https://slashdot.org/story/25/04/25/2228254/xprize-in-carbon-removal-goes-to-enhanced-rock-weathering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 12:51:41](https://news.ycombinator.com/item?id=43803148) - [Show HN: My self-written hobby OS is finally running on my vintage IBM ThinkPad](https://github.com/joexbayer/RetrOS-32)
* [2025-04-26, 11:57:33](https://lobste.rs/s/9vwrsb/implementing_silent_hill_s_fog_my_real_ps1) - [Implementing Silent Hill&apos;s Fog in My (Real) PS1 Game](https://www.youtube.com/watch?v=EwpFdMJlVP4)
* [2025-04-26, 11:41:21](https://news.ycombinator.com/item?id=43802727) - [The Friendship Recession: The lost art of connecting](https://www.happiness.hks.harvard.edu/february-2025-issue/the-friendship-recession-the-lost-art-of-connecting)
* [2025-04-26, 10:42:00](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss) - [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss)
* [2025-04-26, 10:00:00](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Analysis Casts Doubt On &apos;Biosignatures&apos; Found On Planet K2-18b](https://science.slashdot.org/story/25/04/25/229213/new-analysis-casts-doubt-on-biosignatures-found-on-planet-k2-18b?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 09:35:22](https://lobste.rs/s/pipsig/nncp_encrypted_authenticated_onion) - [NNCP: Encrypted, authenticated, onion-routed version of UUCP](https://www.complete.org/nncp/)
* [2025-04-26, 08:39:29](https://news.ycombinator.com/item?id=43801906) - [An end to all this prostate trouble?](https://yarchive.net/blog/prostate/)
* [2025-04-26, 07:00:00](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Shares Rare Moon Rocks With US](https://science.slashdot.org/story/25/04/25/224229/china-shares-rare-moon-rocks-with-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 06:42:59](https://news.ycombinator.com/item?id=43801439) - [Australian who ordered radioactive materials walks away from court](https://www.chemistryworld.com/news/australian-who-ordered-radioactive-materials-over-the-internet-walks-away-from-court/4021306.article)
* [2025-04-26, 05:55:00](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss) - [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss)
* [2025-04-26, 05:31:52](https://news.ycombinator.com/item?id=43801179) - [Cloth](https://www.cloudofoz.com/verlet-test/)
* [2025-04-26, 03:43:01](https://lobste.rs/s/ebcxhd/when_etc_h_sts_breaks_your_substack_editor) - [When /etc/h*sts Breaks Your Substack Editor: An Adventure in Web Content Filtering](https://scalewithlee.substack.com/p/when-etchsts-breaks-your-substack)
* [2025-04-26, 03:30:00](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Introduces a New Kind of Subtitles For the Non-Hearing Impaired](https://entertainment.slashdot.org/story/25/04/25/2159253/netflix-introduces-a-new-kind-of-subtitles-for-the-non-hearing-impaired?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 02:13:00](https://lobste.rs/s/n1s9xa/wanix_virtual_environment_kit_for_local) - [Wanix :: Virtual environment kit for the local-first web, inspired by Plan 9](https://wanix.sh/)
* [2025-04-26, 01:08:00](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss) - [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss)
* [2025-04-25, 21:09:27](https://lobste.rs/s/poyxdo/o_no_you_didn_t) - [O(no) You Didn’t](https://mrshiny608.github.io/MrShiny608/optimisation/2025/04/22/OhNoYouDidnt.html)
* [2025-04-25, 20:20:00](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss) - [First SD Express 8.0 Memory Card From Adata Hits 1.6 GB/s Read Speeds](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss)
* [2025-04-25, 19:46:39](https://lobste.rs/s/chpmcp/linus_torvalds_expresses_his_hatred_for) - [Linus Torvalds Expresses His Hatred For Case-Insensitive File-Systems](https://www.phoronix.com/news/Linus-Torvalds-Anti-Case-Fold)
* [2025-04-25, 15:34:00](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss) - [Harvard Stands Up for the First Amendment](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss)
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
