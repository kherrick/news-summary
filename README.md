# [News Summary](https://kherrick.github.io/news-summary/)

## Creative Applications and Tools

* [Scrappy: make little apps for you and your friends](https://pontus.granstrom.me/scrappy/) ([comments](https://lobste.rs/s/47b4ds/scrappy_make_little_apps_for_you_your))

* [Show HN: My LLM CLI tool can run tools now, from Python code or plugins](https://simonwillison.net/2025/May/27/llm-tools/) ([comments](https://news.ycombinator.com/item?id=44110584))

* [Show HN: Malai – securely share local TCP services (database/SSH) with others](https://malai.sh/hello-tcp/) ([comments](https://news.ycombinator.com/item?id=44107393))

## Tech and Privacy Developments

* [Washington Consumers Will Gain 'Right To Repair' Cellphones, Other Electronics](https://hardware.slashdot.org/story/25/05/27/2054248/washington-consumers-will-gain-right-to-repair-cellphones-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/05/27/2054248/washington-consumers-will-gain-right-to-repair-cellphones-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [GitHub MCP Exploited: Accessing private repositories via MCP](https://simonwillison.net/2025/May/26/github-mcp-exploited/) ([comments](https://lobste.rs/s/aaicyj/github_mcp_exploited_accessing_private))

* [Texas Adopts Online Child-Safety Bill Opposed by Apple's CEO](https://apple.slashdot.org/story/25/05/27/1817225/texas-adopts-online-child-safety-bill-opposed-by-apples-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://apple.slashdot.org/story/25/05/27/1817225/texas-adopts-online-child-safety-bill-opposed-by-apples-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Technology Innovations

* [Running GPT-2 in WebGL: Rediscovering the Lost Art of GPU Shader Programming](https://nathan.rs/posts/gpu-shader-programming/) ([comments](https://news.ycombinator.com/item?id=44109257))

* [Post-quantum cryptography in OpenPGP](https://openpgp.foo/posts/2025-05-pqc/) ([comments](https://lobste.rs/s/vosoyt/post_quantum_cryptography_openpgp))

* [Effekt Language: Home](https://effekt-lang.org/) ([comments](https://lobste.rs/s/owbab5/effekt_language_home))

## Creative Culture and Unique Stories

* [In Vietnam, an unlikely outpost for Chicano culture](https://www.latimes.com/world-nation/story/2025-05-27/chicano-culture-vietnam) ([comments](https://news.ycombinator.com/item?id=44110270))

* [How a hawk learned to use traffic signals to hunt more successfully](https://www.frontiersin.org/news/2025/05/23/street-smarts-hawk-use-traffic-signals-hunting) ([comments](https://news.ycombinator.com/item?id=44105965))

## Gaming and Entertainment

* [Marvel and DC Announce First Comic Crossover in 22 Years with Deadpool-Batman Pairing](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Show HN: Lazy Tetris](https://lazytetris.com/) ([comments](https://news.ycombinator.com/item?id=44103839))

## Insights into Engineering and Science

* [Gabe Newell's Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss))

* [Cancer-Fighting Immune Cells Could Soon Be Engineered Inside Our Bodies](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Outcome-Based Reinforcement Learning to Predict the Future](https://arxiv.org/abs/2505.17989) ([comments](https://news.ycombinator.com/item?id=44106842))

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

* [2025-05-27, 21:36:31](https://lobste.rs/s/47b4ds/scrappy_make_little_apps_for_you_your) - [Scrappy: make little apps for you and your friends](https://pontus.granstrom.me/scrappy/)
* [2025-05-27, 21:20:00](https://hardware.slashdot.org/story/25/05/27/2054248/washington-consumers-will-gain-right-to-repair-cellphones-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington Consumers Will Gain &apos;Right To Repair&apos; Cellphones, Other Electronics](https://hardware.slashdot.org/story/25/05/27/2054248/washington-consumers-will-gain-right-to-repair-cellphones-other-electronics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 21:04:00](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss) - [Gabe Newell&apos;s Brain-Computer Interface Startup to Reveal First Chips Later This Year](https://soylentnews.org/article.pl?sid=25/05/27/1135228&amp;from=rss)
* [2025-05-27, 20:53:03](https://news.ycombinator.com/item?id=44110584) - [Show HN: My LLM CLI tool can run tools now, from Python code or plugins](https://simonwillison.net/2025/May/27/llm-tools/)
* [2025-05-27, 20:45:00](https://mobile.slashdot.org/story/25/05/27/1747254/qualcomm-funded-study-finds-qualcomms-modems-outperform-apples-c1-chip-in-real-world-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm-Funded Study Finds Qualcomm&apos;s Modems Outperform Apple&apos;s C1 Chip in Real-World Tests](https://mobile.slashdot.org/story/25/05/27/1747254/qualcomm-funded-study-finds-qualcomms-modems-outperform-apples-c1-chip-in-real-world-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 20:19:53](https://lobste.rs/s/cbd7rn/just_make_it_scale_aurora_dsql_story) - [Just make it scale: An Aurora DSQL story](https://www.allthingsdistributed.com/2025/05/just-make-it-scale-an-aurora-dsql-story.html)
* [2025-05-27, 20:09:58](https://news.ycombinator.com/item?id=44110270) - [In Vietnam, an unlikely outpost for Chicano culture](https://www.latimes.com/world-nation/story/2025-05-27/chicano-culture-vietnam)
* [2025-05-27, 20:02:50](https://news.ycombinator.com/item?id=44110219) - [Why the Original Macintosh Had a Screen Resolution of 512×324](https://512pixels.net/2025/05/original-macintosh-resolution/)
* [2025-05-27, 20:00:00](https://it.slashdot.org/story/25/05/27/1824200/panasonics-new-laptops-could-be-the-final-death-knell-for-the-humble-vga-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Panasonic&apos;s New Laptops Could Be the Final Death Knell For the Humble VGA Port](https://it.slashdot.org/story/25/05/27/1824200/panasonics-new-laptops-could-be-the-final-death-knell-for-the-humble-vga-port?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 19:27:51](https://lobste.rs/s/wfams6/awesome_emacs_on_macos) - [Awesome Emacs on macOS](https://xenodium.com/awesome-emacs-on-macos)
* [2025-05-27, 19:24:36](https://lobste.rs/s/fynvtg/what_difference_faster_hash_makes) - [What a Difference a Faster Hash Makes](https://nickdrozd.github.io/2025/05/27/faster-hash.html)
* [2025-05-27, 19:20:00](https://apple.slashdot.org/story/25/05/27/1817225/texas-adopts-online-child-safety-bill-opposed-by-apples-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Adopts Online Child-Safety Bill Opposed by Apple&apos;s CEO](https://apple.slashdot.org/story/25/05/27/1817225/texas-adopts-online-child-safety-bill-opposed-by-apples-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 18:40:00](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Marvel and DC Announce First Comic Crossover in 22 Years with Deadpool-Batman Pairing](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 18:19:31](https://lobste.rs/s/vosoyt/post_quantum_cryptography_openpgp) - [Post-quantum cryptography in OpenPGP](https://openpgp.foo/posts/2025-05-pqc/)
* [2025-05-27, 18:05:42](https://lobste.rs/s/xafw94/own_your_email_domain) - [Own Your Email Domain](https://matthewsanabria.dev/posts/own-your-email-domain/)
* [2025-05-27, 18:02:51](https://news.ycombinator.com/item?id=44109257) - [Running GPT-2 in WebGL: Rediscovering the Lost Art of GPU Shader Programming](https://nathan.rs/posts/gpu-shader-programming/)
* [2025-05-27, 18:01:19](https://lobste.rs/s/i9sd2f/teaching_old_hippies_new_tricks) - [Teaching old hippies new tricks](https://www.oblomovka.com/wp/2025/01/02/teaching-old-hippies-new-tricks/)
* [2025-05-27, 18:00:00](https://news.slashdot.org/story/25/05/27/1728228/ai-role-in-college-brings-education-closer-to-a-crisis-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI Role in College Brings Education Closer To a Crisis Point&apos;](https://news.slashdot.org/story/25/05/27/1728228/ai-role-in-college-brings-education-closer-to-a-crisis-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 17:42:15](https://news.ycombinator.com/item?id=44109090) - [Roundtable (YC S23) Is Hiring a Member of Technical Staff](https://www.ycombinator.com/companies/roundtable/jobs/ZTZHEbb-member-of-technical-staff)
* [2025-05-27, 17:21:00](https://news.slashdot.org/story/25/05/27/1653235/cisa-loses-nearly-all-top-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Loses Nearly All Top Officials](https://news.slashdot.org/story/25/05/27/1653235/cisa-loses-nearly-all-top-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 17:05:27](https://lobste.rs/s/nl5vun/simd_zlib_rs_part_2_compare256_blog_tweede) - [SIMD in zlib-rs (part 2): compare256 - Blog - Tweede golf](https://tweedegolf.nl/en/blog/155/simd-in-zlib-rs-part-2-compare256)
* [2025-05-27, 16:55:56](https://lobste.rs/s/2uukup/pyrefly_vs_ty_comparing_python_s_two_new) - [Pyrefly vs. ty: Comparing Python’s Two New Rust-Based Type Checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/)
* [2025-05-27, 16:40:00](https://science.slashdot.org/story/25/05/27/1633220/glp-1-drug-use-surges-600-as-2-of-americans-take-weight-loss-medications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GLP-1 Drug Use Surges 600% as 2% of Americans Take Weight-Loss Medications](https://science.slashdot.org/story/25/05/27/1633220/glp-1-drug-use-surges-600-as-2-of-americans-take-weight-loss-medications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 16:09:22](https://lobste.rs/s/wn9h7u/docker) - [Docker](https://icculus.org/openbox/2/docker/)
* [2025-05-27, 16:00:00](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer-Fighting Immune Cells Could Soon Be Engineered Inside Our Bodies](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 15:59:23](https://news.ycombinator.com/item?id=44108207) - [I salvaged $6k of luxury items discarded by Duke students](https://indyweek.com/culture/duke-students-dumpster-diving/)
* [2025-05-27, 15:59:20](https://news.ycombinator.com/item?id=44108206) - [Launch HN: Relace (YC W23) – Models for fast and reliable codegen](https://news.ycombinator.com/item?id=44108206)
* [2025-05-27, 15:33:55](https://news.ycombinator.com/item?id=44107942) - [Square Theory](https://aaronson.org/blog/square-theory)
* [2025-05-27, 15:32:36](https://lobste.rs/s/woyndc/script_check_codeowners_files_all) - [Script to check CODEOWNERS files in all repositories of a github-organisation](https://github.com/sigio/github-audit-org-codeowner)
* [2025-05-27, 15:20:00](https://yro.slashdot.org/story/25/05/27/1430238/adidas-warns-of-data-breach-after-customer-service-provider-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adidas Warns of Data Breach After Customer Service Provider Hack](https://yro.slashdot.org/story/25/05/27/1430238/adidas-warns-of-data-breach-after-customer-service-provider-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 15:01:55](https://news.ycombinator.com/item?id=44107655) - [Pyrefly vs. Ty: Comparing Python&apos;s two new Rust-based type checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/)
* [2025-05-27, 14:40:00](https://entertainment.slashdot.org/story/25/05/27/1352205/everybodys-mad-about-uno?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Everybody&apos;s Mad About Uno](https://entertainment.slashdot.org/story/25/05/27/1352205/everybodys-mad-about-uno?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 14:34:40](https://news.ycombinator.com/item?id=44107393) - [Show HN: Malai – securely share local TCP services (database/SSH) with others](https://malai.sh/hello-tcp/)
* [2025-05-27, 14:02:00](https://it.slashdot.org/story/25/05/27/141246/browser-company-abandons-arc-for-ai-powered-successor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Company Abandons Arc for AI-Powered Successor](https://it.slashdot.org/story/25/05/27/141246/browser-company-abandons-arc-for-ai-powered-successor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 13:45:20](https://lobste.rs/s/9xx7gs/list_tech_for_good_job_boards) - [List of \&quot;tech for good\&quot; job boards](https://evanhahn.com/list-of-tech-for-good-job-boards/)
* [2025-05-27, 13:43:11](https://news.ycombinator.com/item?id=44106934) - [DuckLake is an integrated data lake and catalog format](https://ducklake.select/)
* [2025-05-27, 13:33:38](https://news.ycombinator.com/item?id=44106842) - [Outcome-Based Reinforcement Learning to Predict the Future](https://arxiv.org/abs/2505.17989)
* [2025-05-27, 13:25:45](https://news.ycombinator.com/item?id=44106764) - [The Art of Fugue – Contrapunctus I (2021)](https://www.ethanhein.com/wp/2021/the-art-of-fugue-contrapunctus-i/)
* [2025-05-27, 13:12:05](https://lobste.rs/s/nvrvst/bgp_handling_bug_causes_widespread) - [BGP handling bug causes widespread internet routing instability](https://blog.benjojo.co.uk/post/bgp-attr-40-junos-arista-session-reset-incident)
* [2025-05-27, 12:07:00](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [25% iPhone Tariff Insufficient To Drive US Production Shift, Morgan Stanley Says](https://apple.slashdot.org/story/25/05/27/127201/25-iphone-tariff-insufficient-to-drive-us-production-shift-morgan-stanley-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 11:46:30](https://news.ycombinator.com/item?id=44105965) - [How a hawk learned to use traffic signals to hunt more successfully](https://www.frontiersin.org/news/2025/05/23/street-smarts-hawk-use-traffic-signals-hunting)
* [2025-05-27, 11:38:44](https://lobste.rs/s/vdzcfg/two_types_open_source) - [The two types of open source](https://filiph.net/text/two-types-of-open-source.html)
* [2025-05-27, 11:31:02](https://news.ycombinator.com/item?id=44105878) - [Just make it scale: An Aurora DSQL story](https://www.allthingsdistributed.com/2025/05/just-make-it-scale-an-aurora-dsql-story.html)
* [2025-05-27, 11:31:00](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss) - [Research Reveals &apos;Forever Chemicals&apos; Present in Beer](https://soylentnews.org/article.pl?sid=25/05/27/0520206&amp;from=rss)
* [2025-05-27, 11:15:15](https://news.ycombinator.com/item?id=44105796) - [BGP handling bug causes widespread internet routing instability](https://blog.benjojo.co.uk/post/bgp-attr-40-junos-arista-session-reset-incident)
* [2025-05-27, 10:39:30](https://news.ycombinator.com/item?id=44105619) - [LumoSQL](https://lumosql.org/src/lumosql/doc/trunk/README.md)
* [2025-05-27, 10:38:59](https://lobste.rs/s/owbab5/effekt_language_home) - [Effekt Language: Home](https://effekt-lang.org/)
* [2025-05-27, 10:33:56](https://news.ycombinator.com/item?id=44105592) - [The Myth of Developer Obsolescence](https://alonso.network/the-recurring-cycle-of-developer-replacement-hype/)
* [2025-05-27, 10:29:39](https://lobste.rs/s/zpho44/rust_streams_timeouts_gotcha) - [Rust streams and timeouts gotcha](https://laplab.me/posts/rust-streams-gotcha/)
* [2025-05-27, 10:12:44](https://lobste.rs/s/vypfzm/hacker_news_now_runs_on_top_common_lisp) - [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/)
* [2025-05-27, 10:03:00](https://news.ycombinator.com/item?id=44105470) - [Revisiting the algorithm that changed horse race betting (2023)](https://actamachina.com/posts/annotated-benter-paper)
* [2025-05-27, 10:00:00](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Do People Want?](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 09:49:00](https://lobste.rs/s/y5kllu/mcp_explained_without_hype_fluff) - [MCP explained without hype or fluff](https://blog.nilenso.com/blog/2025/05/12/mcp-explained-without-hype-or-fluff/)
* [2025-05-27, 09:00:08](https://lobste.rs/s/r1uzrt/luciole_math_typeface_developed) - [Luciole Math: a typeface developed explicitly for visually impaired academics](https://luciole-vision.com/en/math.html)
* [2025-05-27, 08:00:00](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Europe Warns Giant E-tailer To Stop Cheating Consumers or Face Its Wrath](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 06:52:31](https://lobste.rs/s/aaicyj/github_mcp_exploited_accessing_private) - [GitHub MCP Exploited: Accessing private repositories via MCP](https://simonwillison.net/2025/May/26/github-mcp-exploited/)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 03:58:07](https://news.ycombinator.com/item?id=44103839) - [Show HN: Lazy Tetris](https://lazytetris.com/)
* [2025-05-27, 03:16:38](https://lobste.rs/s/znx8q8/five_year_review_bqn_design) - [Five-year review of BQN design](https://mlochbaum.github.io/BQN/commentary/fiveyears.html)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 21:05:17](https://lobste.rs/s/hxi9jj/access_control_syntax) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 20:06:15](https://lobste.rs/s/myqawl/jjui_text_user_interface_tui_for_jujutsu) - [jjui: a text user interface (TUI) for the Jujutsu version control system](https://github.com/idursun/jjui)
* [2025-05-26, 19:20:19](https://news.ycombinator.com/item?id=44100677) - [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the)
* [2025-05-26, 18:32:02](https://news.ycombinator.com/item?id=44100179) - [Lossless video compression using Bloom filters](https://github.com/ross39/new_bloom_filter_repo/blob/main/README.md)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 13:46:25](https://news.ycombinator.com/item?id=44097390) - [GitHub MCP exploited: Accessing private repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-26, 11:57:18](https://lobste.rs/s/xzieif/asserting_implications) - [Asserting Implications](https://tigerbeetle.com/blog/2025-05-26-asserting-implications/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 09:29:23](https://lobste.rs/s/rprjch/you_can_choose_tools_make_you_happy) - [You Can Choose Tools That Make You Happy](https://borretti.me/article/you-can-choose-tools-that-make-you-happy)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 08:41:13](https://news.ycombinator.com/item?id=44086456) - [From OpenAPI spec to MCP: How we built Xata&apos;s MCP server](https://xata.io/blog/built-xata-mcp-server)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-25, 01:36:28](https://news.ycombinator.com/item?id=44084892) - [Space Selfie](https://space.crunchlabs.com/)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 20:06:19](https://news.ycombinator.com/item?id=44083474) - [Worlds first petahertz transistor at ambient conditions](https://news.arizona.edu/news/u-researchers-developing-worlds-first-petahertz-speed-phototransistor-ambient-conditions)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 14:33:47](https://news.ycombinator.com/item?id=44081395) - [The Hobby Computer Culture](https://technicshistory.com/2025/05/24/the-hobby-computer-culture/)
* [2025-05-24, 14:32:11](https://news.ycombinator.com/item?id=44081383) - [Semicolons bring the drama; that&apos;s why I love them](https://www.ft.com/content/80c39c74-8753-44bf-aeb0-cf6701a64f02)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 08:41:01](https://news.ycombinator.com/item?id=44079729) - [Cows get GPS collars to stop them falling in river](https://www.bbc.co.uk/news/articles/cj4229k744lo)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 17:15:28](https://news.ycombinator.com/item?id=44074626) - [Comparing Docusaurus and Starlight and why we made the switch](https://glasskube.dev/blog/distr-docs/)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
