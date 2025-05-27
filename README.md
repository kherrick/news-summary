# [News Summary](https://kherrick.github.io/news-summary/)

## Comics and Entertainment

* [Marvel and DC Announce First Comic Crossover in 22 Years with Deadpool-Batman Pairing](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Featuring an unlikely team-up between Deadpool and Batman, this highly anticipated crossover marks a historic collaboration between Marvel and DC after more than two decades.

## Artificial Intelligence and Job Market Impact

* [Women 3x More Likely to Lose Job to AI Than Men, UN Study Finds](https://www.allsides.com/story/economy-and-jobs-women-3x-more-likely-lose-job-ai-men-un-study-finds) - A United Nations study highlights a significant disparity in how artificial intelligence impacts job security, with women facing a greater risk of displacement.

* [AI Role in College Brings Education Closer To a Crisis Point](https://news.slashdot.org/story/25/05/27/1728228/ai-role-in-college-brings-education-closer-to-a-crisis-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores the growing role of AI in education and its potential to disrupt traditional collegiate systems, edging them toward a crisis.

## Emerging Technology Innovations

* [Running GPT-2 in WebGL: Rediscovering the Lost Art of GPU Shader Programming](https://nathan.rs/posts/gpu-shader-programming/) - Insights into running advanced AI models like GPT-2 using WebGL, which revives and innovates shader programming techniques.

* [Show HN: Free mammogram analysis tool combining deep learning and vision LLM](http://mammo.neuralrad.com:5300) - A tool leveraging deep learning and large vision language models to provide free mammogram analysis, offering advances in AI-powered healthcare.

* [Cancer-Fighting Immune Cells Could Soon Be Engineered Inside Our Bodies](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers discuss the possibility of engineering immune cells directly within the body to target cancer more effectively.

## Cybersecurity and Data Breaches

* [CISA Loses Nearly All Top Officials](https://news.slashdot.org/story/25/05/27/1653235/cisa-loses-nearly-all-top-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports of a significant leadership void at CISA, raising concerns about cybersecurity readiness and policy continuity.

* [Adidas Warns of Data Breach After Customer Service Provider Hack](https://yro.slashdot.org/story/25/05/27/1430238/adidas-warns-of-data-breach-after-customer-service-provider-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Adidas confirms a data breach affecting customer service systems, underlining vulnerabilities in third-party providers.

## Programming and Development Insights

* [Pyrefly vs. ty: Comparing Python’s Two New Rust-Based Type Checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/) - A deep dive into two emerging Rust-based tools for Python type checking and the benefits they bring to software development.

* [Hacker News now runs on top of Common Lisp](https://lisp-journey.gitlab.io/blog/hacker-news-now-runs-on-top-of-common-lisp/) - Celebrates Hacker News's transition to Common Lisp, emphasizing performance and simplicity.

* [Docker](https://icculus.org/openbox/2/docker/) - A nostalgic examination of Docker's role in containerization and its enduring relevance.

## Health and Society Trends

* [GLP-1 Drug Use Surges 600% as 2% of Americans Take Weight-Loss Medications](https://science.slashdot.org/story/25/05/27/1633220/glp-1-drug-use-surges-600-as-2-of-americans-take-weight-loss-medications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores an overwhelming rise in demand for GLP-1 drugs in America, pointing to changing societal perceptions of health and body weight.

* [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - The potential ramifications of a legislative move in Texas to restrict social media access for minors below age 18.

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

* [2025-05-27, 18:40:00](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Marvel and DC Announce First Comic Crossover in 22 Years with Deadpool-Batman Pairing](https://entertainment.slashdot.org/story/25/05/27/1737246/marvel-and-dc-announce-first-comic-crossover-in-22-years-with-deadpool-batman-pairing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 18:05:42](https://lobste.rs/s/xafw94/own_your_email_domain) - [Own Your Email Domain](https://matthewsanabria.dev/posts/own-your-email-domain/)
* [2025-05-27, 18:02:51](https://news.ycombinator.com/item?id=44109257) - [Running GPT-2 in WebGL: Rediscovering the Lost Art of GPU Shader Programming](https://nathan.rs/posts/gpu-shader-programming/)
* [2025-05-27, 18:01:19](https://lobste.rs/s/i9sd2f/teaching_old_hippies_new_tricks) - [Teaching old hippies new tricks](https://www.oblomovka.com/wp/2025/01/02/teaching-old-hippies-new-tricks/)
* [2025-05-27, 18:00:55](https://news.ycombinator.com/item?id=44109239) - [Women 3x More Likely to Lose Job to AI Than Men, UN Study Finds](https://www.allsides.com/story/economy-and-jobs-women-3x-more-likely-lose-job-ai-men-un-study-finds)
* [2025-05-27, 18:00:00](https://news.slashdot.org/story/25/05/27/1728228/ai-role-in-college-brings-education-closer-to-a-crisis-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI Role in College Brings Education Closer To a Crisis Point&apos;](https://news.slashdot.org/story/25/05/27/1728228/ai-role-in-college-brings-education-closer-to-a-crisis-point?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 17:42:15](https://news.ycombinator.com/item?id=44109090) - [Roundtable (YC S23) Is Hiring a Member of Technical Staff](https://www.ycombinator.com/companies/roundtable/jobs/ZTZHEbb-member-of-technical-staff)
* [2025-05-27, 17:21:00](https://news.slashdot.org/story/25/05/27/1653235/cisa-loses-nearly-all-top-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Loses Nearly All Top Officials](https://news.slashdot.org/story/25/05/27/1653235/cisa-loses-nearly-all-top-officials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 17:05:27](https://lobste.rs/s/nl5vun/simd_zlib_rs_part_2_compare256_blog_tweede) - [SIMD in zlib-rs (part 2): compare256 - Blog - Tweede golf](https://tweedegolf.nl/en/blog/155/simd-in-zlib-rs-part-2-compare256)
* [2025-05-27, 16:55:56](https://lobste.rs/s/2uukup/pyrefly_vs_ty_comparing_python_s_two_new) - [Pyrefly vs. ty: Comparing Python’s Two New Rust-Based Type Checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/)
* [2025-05-27, 16:40:00](https://science.slashdot.org/story/25/05/27/1633220/glp-1-drug-use-surges-600-as-2-of-americans-take-weight-loss-medications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GLP-1 Drug Use Surges 600% as 2% of Americans Take Weight-Loss Medications](https://science.slashdot.org/story/25/05/27/1633220/glp-1-drug-use-surges-600-as-2-of-americans-take-weight-loss-medications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 16:16:00](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss) - [Texas is Getting Ready to Ban Social Media for Anyone Under 18](https://soylentnews.org/article.pl?sid=25/05/27/1132236&amp;from=rss)
* [2025-05-27, 16:09:22](https://lobste.rs/s/wn9h7u/docker) - [Docker](https://icculus.org/openbox/2/docker/)
* [2025-05-27, 16:00:00](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer-Fighting Immune Cells Could Soon Be Engineered Inside Our Bodies](https://science.slashdot.org/story/25/05/27/1532255/cancer-fighting-immune-cells-could-soon-be-engineered-inside-our-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 15:59:20](https://news.ycombinator.com/item?id=44108206) - [Launch HN: Relace (YC W23) – Models for fast and reliable codegen](https://news.ycombinator.com/item?id=44108206)
* [2025-05-27, 15:33:55](https://news.ycombinator.com/item?id=44107942) - [Square Theory](https://aaronson.org/blog/square-theory)
* [2025-05-27, 15:32:36](https://lobste.rs/s/woyndc/script_check_codeowners_files_all) - [Script to check CODEOWNERS files in all repositories of a github-organisation](https://github.com/sigio/github-audit-org-codeowner)
* [2025-05-27, 15:20:00](https://yro.slashdot.org/story/25/05/27/1430238/adidas-warns-of-data-breach-after-customer-service-provider-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adidas Warns of Data Breach After Customer Service Provider Hack](https://yro.slashdot.org/story/25/05/27/1430238/adidas-warns-of-data-breach-after-customer-service-provider-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 15:13:03](https://news.ycombinator.com/item?id=44107758) - [Show HN: Free mammogram analysis tool combining deep learning and vision LLM](http://mammo.neuralrad.com:5300)
* [2025-05-27, 15:01:55](https://news.ycombinator.com/item?id=44107655) - [Pyrefly vs. Ty: Comparing Python&apos;s Two New Rust-Based Type Checkers](https://blog.edward-li.com/tech/comparing-pyrefly-vs-ty/)
* [2025-05-27, 14:40:00](https://entertainment.slashdot.org/story/25/05/27/1352205/everybodys-mad-about-uno?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Everybody&apos;s Mad About Uno](https://entertainment.slashdot.org/story/25/05/27/1352205/everybodys-mad-about-uno?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 14:34:40](https://news.ycombinator.com/item?id=44107393) - [Show HN: Malai – securely share local TCP services (database/SSH) with others](https://malai.sh/hello-tcp/)
* [2025-05-27, 14:09:42](https://news.ycombinator.com/item?id=44107187) - [Mistral Agents API](https://mistral.ai/news/agents-api)
* [2025-05-27, 14:02:00](https://it.slashdot.org/story/25/05/27/141246/browser-company-abandons-arc-for-ai-powered-successor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Company Abandons Arc for AI-Powered Successor](https://it.slashdot.org/story/25/05/27/141246/browser-company-abandons-arc-for-ai-powered-successor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 13:45:20](https://lobste.rs/s/9xx7gs/list_tech_for_good_job_boards) - [List of \&quot;tech for good\&quot; job boards](https://evanhahn.com/list-of-tech-for-good-job-boards/)
* [2025-05-27, 13:44:21](https://news.ycombinator.com/item?id=44106944) - [Why Cline Doesn&apos;t Index Your Codebase (and Why That&apos;s a Good Thing)](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing)
* [2025-05-27, 13:43:11](https://news.ycombinator.com/item?id=44106934) - [DuckLake is an integrated data lake and catalog format](https://ducklake.select/)
* [2025-05-27, 13:33:38](https://news.ycombinator.com/item?id=44106842) - [Outcome-Based Reinforcement Learning to Predict the Future](https://arxiv.org/abs/2505.17989)
* [2025-05-27, 13:28:34](https://lobste.rs/s/gp8wdp/from_zero_full_stack_gren_with_database) - [From Zero to Full Stack Gren with a Database](https://www.youtube.com/watch?v=Ld1Lc10dO2k)
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
* [2025-05-27, 10:03:00](https://news.ycombinator.com/item?id=44105470) - [Revisiting the Algorithm That Changed Horse Race Betting (2023)](https://actamachina.com/posts/annotated-benter-paper)
* [2025-05-27, 10:00:00](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Do People Want?](https://science.slashdot.org/story/25/05/27/0920239/what-do-people-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 09:50:04](https://news.ycombinator.com/item?id=44105412) - [LiveStore: State management based on reactive SQLite and built-in sync engine](https://livestore.dev)
* [2025-05-27, 09:49:00](https://lobste.rs/s/y5kllu/mcp_explained_without_hype_fluff) - [MCP explained without hype or fluff](https://blog.nilenso.com/blog/2025/05/12/mcp-explained-without-hype-or-fluff/)
* [2025-05-27, 09:00:08](https://lobste.rs/s/r1uzrt/luciole_math_typeface_developed) - [Luciole Math: a typeface developed explicitly for visually impaired academics](https://luciole-vision.com/en/math.html)
* [2025-05-27, 08:00:00](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Europe Warns Giant E-tailer To Stop Cheating Consumers or Face Its Wrath](https://slashdot.org/story/25/05/27/0737253/europe-warns-giant-e-tailer-to-stop-cheating-consumers-or-face-its-wrath?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 06:52:31](https://lobste.rs/s/aaicyj/github_mcp_exploited_accessing_private) - [GitHub MCP Exploited: Accessing private repositories via MCP](https://simonwillison.net/2025/May/26/github-mcp-exploited/)
* [2025-05-27, 06:43:00](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss) - [Scientists Discover Potential New Targets For Alzheimer’s Drugs](https://soylentnews.org/article.pl?sid=25/05/27/0515241&amp;from=rss)
* [2025-05-27, 06:13:00](https://news.slashdot.org/story/25/05/27/0414218/immigration-is-the-only-thing-propping-up-californias-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Immigration Is the Only Thing Propping Up California&apos;s Population](https://news.slashdot.org/story/25/05/27/0414218/immigration-is-the-only-thing-propping-up-californias-population?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 03:58:07](https://news.ycombinator.com/item?id=44103839) - [Show HN: Lazy Tetris](https://lazytetris.com/)
* [2025-05-27, 03:57:00](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nikon To Raise Camera Prices in the US Because of Tariffs](https://slashdot.org/story/25/05/27/0356237/nikon-to-raise-camera-prices-in-the-us-because-of-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 03:16:38](https://lobste.rs/s/znx8q8/five_year_review_bqn_design) - [Five-year review of BQN design](https://mlochbaum.github.io/BQN/commentary/fiveyears.html)
* [2025-05-27, 02:09:00](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering John Young, Co-founder of Web Archive Cryptome](https://news.slashdot.org/story/25/05/27/029233/remembering-john-young-co-founder-of-web-archive-cryptome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-27, 01:53:00](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss) - [Google Brings Ads to AI Search](https://soylentnews.org/article.pl?sid=25/05/25/2124211&amp;from=rss)
* [2025-05-26, 22:38:00](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The CIA Secretly Ran a Star Wars Fan Site](https://tech.slashdot.org/story/25/05/26/2238214/the-cia-secretly-ran-a-star-wars-fan-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-26, 22:13:55](https://lobste.rs/s/3qy3uw/non_pointless_software_projects_for_new) - [Non-Pointless Software Projects for New Devs in the LLM Age](https://cprimozic.net/blog/non-pointless-software-projects-for-new-devs-in-the-llm-age/)
* [2025-05-26, 21:07:00](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss) - [The Sun is Producing Strong Solar Flares; Are There More Than Expected During This Solar Cycle?](https://soylentnews.org/article.pl?sid=25/05/25/2119235&amp;from=rss)
* [2025-05-26, 21:05:17](https://lobste.rs/s/hxi9jj/access_control_syntax) - [Access Control Syntax](https://journal.stuffwithstuff.com/2025/05/26/access-control-syntax/)
* [2025-05-26, 20:06:15](https://lobste.rs/s/myqawl/jjui_text_user_interface_tui_for_jujutsu) - [jjui: a text user interface (TUI) for the Jujutsu version control system](https://github.com/idursun/jjui)
* [2025-05-26, 19:20:19](https://news.ycombinator.com/item?id=44100677) - [Trying to teach in the age of the AI homework machine](https://www.solarshades.club/p/dispatch-from-the-trenches-of-the)
* [2025-05-26, 18:28:43](https://news.ycombinator.com/item?id=44100148) - [CSS Minecraft](https://benjaminaster.com/css-minecraft/)
* [2025-05-26, 16:21:00](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss) - [Ex-NSA Listened to Scattered Spider&apos;s Calls: &apos;They&apos;re Good&apos;](https://soylentnews.org/article.pl?sid=25/05/25/2059205&amp;from=rss)
* [2025-05-26, 13:46:25](https://news.ycombinator.com/item?id=44097390) - [GitHub MCP exploited: Accessing private repositories via MCP](https://invariantlabs.ai/blog/mcp-github-vulnerability)
* [2025-05-26, 13:30:34](https://lobste.rs/s/n0whur/against_curry_howard_mysticism) - [Against Curry-Howard Mysticism](https://liamoc.net/forest/loc-000S/index.xml)
* [2025-05-26, 13:27:06](https://lobste.rs/s/csrtzc/dumpy_numpy_except_it_s_ok_if_you_re_dum) - [DumPy: NumPy except it’s OK if you’re dum](https://dynomight.net/dumpy/)
* [2025-05-26, 11:57:18](https://lobste.rs/s/xzieif/asserting_implications) - [Asserting Implications](https://tigerbeetle.com/blog/2025-05-26-asserting-implications/)
* [2025-05-26, 11:36:00](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss) - [GitHub Copilot Angles for Promotion From Assistant to Agent](https://soylentnews.org/article.pl?sid=25/05/25/1717211&amp;from=rss)
* [2025-05-26, 09:29:23](https://lobste.rs/s/rprjch/you_can_choose_tools_make_you_happy) - [You Can Choose Tools That Make You Happy](https://borretti.me/article/you-can-choose-tools-that-make-you-happy)
* [2025-05-26, 08:51:58](https://lobste.rs/s/1fu1tm/i_made_font) - [I made a font](https://blog.chay.dev/i-made-a-font/)
* [2025-05-26, 06:48:00](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss) - [Positive Proof-of-Concept Experiments May Lead to the World&apos;s First Treatment for Celiac Disease](https://soylentnews.org/article.pl?sid=25/05/25/0833214&amp;from=rss)
* [2025-05-26, 02:00:00](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss) - [We did the Math on AI’s Energy Footprint. Here’s the Story you Haven’t Heard.](https://soylentnews.org/article.pl?sid=25/05/24/1910230&amp;from=rss)
* [2025-05-25, 21:11:00](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss) - [Evidence for &apos;Planet Nine&apos; Lurking on the Fringes of the Solar System is Building](https://soylentnews.org/article.pl?sid=25/05/24/1755248&amp;from=rss)
* [2025-05-25, 16:25:00](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss) - [The Roman Massacre That Never Happened](https://soylentnews.org/article.pl?sid=25/05/24/1730251&amp;from=rss)
* [2025-05-25, 11:59:06](https://news.ycombinator.com/item?id=44087195) - [In defense of shallow technical knowledge](https://www.seangoedecke.com/shallow-technical-knowledge/)
* [2025-05-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss) - [The Pedestrians Who Abetted a Hawk’s Deadly Attack](https://soylentnews.org/article.pl?sid=25/05/24/1718235&amp;from=rss)
* [2025-05-25, 08:41:13](https://news.ycombinator.com/item?id=44086456) - [From OpenAPI spec to MCP: How we built Xata&apos;s MCP server](https://xata.io/blog/built-xata-mcp-server)
* [2025-05-25, 06:55:00](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss) - [Jupiter Was Formerly Twice Its Current Size and Had a Much Stronger Magnetic Field ](https://soylentnews.org/article.pl?sid=25/05/24/1716210&amp;from=rss)
* [2025-05-25, 02:09:00](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss) - [VPN Service Cancels Customers&apos; Lifetime Subscriptions After Takeover](https://soylentnews.org/article.pl?sid=25/05/24/171234&amp;from=rss)
* [2025-05-24, 22:24:00](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss) - [Be A Great Communicator To Progress In Engineering](https://soylentnews.org/article.pl?sid=25/05/23/1731218&amp;from=rss)
* [2025-05-24, 20:06:19](https://news.ycombinator.com/item?id=44083474) - [Worlds first petahertz transistor at ambient conditions](https://news.arizona.edu/news/u-researchers-developing-worlds-first-petahertz-speed-phototransistor-ambient-conditions)
* [2025-05-24, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss) - [EU-US Trade War Inevitable](https://soylentnews.org/article.pl?sid=25/05/23/1716207&amp;from=rss)
* [2025-05-24, 14:33:47](https://news.ycombinator.com/item?id=44081395) - [The Hobby Computer Culture](https://technicshistory.com/2025/05/24/the-hobby-computer-culture/)
* [2025-05-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss) - [All Living Things Emit Subtle Light Until They Die, Study Suggests](https://soylentnews.org/article.pl?sid=25/05/23/1218209&amp;from=rss)
* [2025-05-24, 11:54:40](https://news.ycombinator.com/item?id=44080472) - [Right-Truncatable Prime Counter](https://github.com/EbodShojaei/Right-Truncatable-Primes)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 17:15:28](https://news.ycombinator.com/item?id=44074626) - [Comparing Docusaurus and Starlight and why we made the switch](https://glasskube.dev/blog/distr-docs/)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
