# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [How can web apps be independent protocol clients?](https://fiatjaf.com/6829ad8b.html) ([Comments](https://lobste.rs/s/jzgc2q/how_can_web_apps_be_independent_protocol))

* [AMD continues to chip away at Intel's x86 market share](https://www.tomshardware.com/pc-components/cpus/amd-continues-to-chip-away-at-intels-x86-market-share-company-now-sells-over-25-percent-of-all-x86-chips-and-powers-33-percent-of-all-desktop-systems) ([Comments](https://news.ycombinator.com/item?id=45940413))

* [Transgenerational Epigenetic Inheritance: the story of learned avoidance](https://elifesciences.org/articles/109427) ([Comments](https://news.ycombinator.com/item?id=45939550))

* [The computer poetry of J. M. Coetzee's early programming career (2017)](https://sites.utexas.edu/ransomcentermagazine/2017/06/28/the-computer-poetry-of-j-m-coetzees-early-programming-career/) ([Comments](https://news.ycombinator.com/item?id=45939569))

* [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/11/13/2125207&from=rss))

* [Go’s Sweet 16](https://go.dev/blog/16years) ([Comments](https://lobste.rs/s/z0midp/go_s_sweet_16))

## Artificial Intelligence and Data

* [While Meta Crawls the Web for AI Training Data, Bruce Ediger Pranks Them with Endless Bad Data](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Our investigation into the suspicious pressure on Archive.today](https://adguard-dns.io/en/blog/archive-today-adguard-dns-block-demand.html) ([Comments](https://news.ycombinator.com/item?id=45936460))

* [Sam Altman Celebrates ChatGPT Finally Following Em Dash Formatting Rules](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/11/09/1338227&from=rss))

## Engineering and Hardware

* [Archimedes – A Python toolkit for hardware engineering](https://pinetreelabs.github.io/archimedes/blog/2025/introduction.html) ([Comments](https://news.ycombinator.com/item?id=45939938))

* [How to write type-safe generics in C](https://raphgl.github.io/blog/generics-in-c.html) ([Comments](https://lobste.rs/s/uc3a3b/how_write_type_safe_generics_c))

* [10 patterns for faster Python code](https://blog.jetbrains.com/pycharm/2025/11/10-smart-performance-hacks-for-faster-python-code/) ([Comments](https://lobste.rs/s/1px2ci/10_patterns_for_faster_python_code))

* [Furgit: fast implementation of Git in pure Go](https://github.com/runxiyu/furgit) ([Comments](https://lobste.rs/s/xsq6ld/furgit_fast_implementation_git_pure_go))

## Space and Exploration

* [Scientists Confirmed What Is Inside Our Moon](https://science.slashdot.org/story/25/11/15/0037256/scientists-confirmed-what-is-inside-our-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/11/15/0037256/scientists-confirmed-what-is-inside-our-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/11/11/0334251&from=rss))

## Health and Lifestyle

* [Caffeinated coffee consumption or abstinence to reduce atrial fibrillation](https://jamanetwork.com/journals/jama/fullarticle/2841253) ([Comments](https://news.ycombinator.com/item?id=45940030))

* [When Your Year of Work Gets Copied Overnight: What Actually Matters?](https://glama.ai/blog/2025-11-15-when-your-year-of-work-gets-copied-overnight-what-actually-matters) ([Comments](https://lobste.rs/s/8ndnmg/when_your_year_work_gets_copied_overnight))

* [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/11/10/1942230&from=rss))

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

* [2025-11-15, 21:35:34](https://lobste.rs/s/jzgc2q/how_can_web_apps_be_independent_protocol) - [How can web apps be independent protocol clients?](https://fiatjaf.com/6829ad8b.html)
* [2025-11-15, 21:22:00](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [While Meta Crawls the Web for AI Training Data, Bruce Ediger Pranks Them with Endless Bad Data](https://tech.slashdot.org/story/25/11/15/2023242/while-meta-crawls-the-web-for-ai-training-data-bruce-ediger-pranks-them-with-endless-bad-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 20:35:33](https://news.ycombinator.com/item?id=45940413) - [AMD continues to chip away at Intel&apos;s x86 market share](https://www.tomshardware.com/pc-components/cpus/amd-continues-to-chip-away-at-intels-x86-market-share-company-now-sells-over-25-percent-of-all-x86-chips-and-powers-33-percent-of-all-desktop-systems)
* [2025-11-15, 20:22:00](https://games.slashdot.org/story/25/11/15/0521203/sony-killed-this-game-in-2024-three-developers-reverse-engineered-it-back-to-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Killed This Game in 2024.  Three Developers Reverse-Engineered It Back to Life](https://games.slashdot.org/story/25/11/15/0521203/sony-killed-this-game-in-2024-three-developers-reverse-engineered-it-back-to-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 19:43:39](https://news.ycombinator.com/item?id=45940030) - [Caffeinated coffee consumption or abstinence to reduce atrial fibrillation](https://jamanetwork.com/journals/jama/fullarticle/2841253)
* [2025-11-15, 19:29:32](https://news.ycombinator.com/item?id=45939938) - [Archimedes – A Python toolkit for hardware engineering](https://pinetreelabs.github.io/archimedes/blog/2025/introduction.html)
* [2025-11-15, 19:22:00](https://news.slashdot.org/story/25/11/15/0433216/why-solarpunk-is-already-happening-in-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Solarpunk Is Already Happening In Africa](https://news.slashdot.org/story/25/11/15/0433216/why-solarpunk-is-already-happening-in-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 18:55:22](https://news.ycombinator.com/item?id=45939678) - [AWS deprecates two dozen services (most of which you&apos;ve never heard of)](https://www.lastweekinaws.com/blog/aws-deprecates-two-dozen-services-most-of-which-youve-never-heard-of/)
* [2025-11-15, 18:44:05](https://news.ycombinator.com/item?id=45939569) - [The computer poetry of J. M. Coetzee&apos;s early programming career (2017)](https://sites.utexas.edu/ransomcentermagazine/2017/06/28/the-computer-poetry-of-j-m-coetzees-early-programming-career/)
* [2025-11-15, 18:40:55](https://news.ycombinator.com/item?id=45939550) - [Transgenerational Epigenetic Inheritance: the story of learned avoidance](https://elifesciences.org/articles/109427)
* [2025-11-15, 18:24:58](https://news.ycombinator.com/item?id=45939431) - [Things that aren&apos;t doing the thing](https://strangestloop.io/essays/things-that-arent-doing-the-thing)
* [2025-11-15, 18:23:52](https://lobste.rs/s/ygmqnn/iceberg_right_idea_wrong_spec_part_2_2_spec) - [Iceberg, The Right Idea - The Wrong Spec - Part 2 of 2: The Spec](https://www.database-doctor.com/posts/iceberg-is-wrong-2.html)
* [2025-11-15, 18:03:37](https://news.ycombinator.com/item?id=45939266) - [FBI Director Waived Polygraph Security Screening for Three Senior Staff](https://www.propublica.org/article/fbi-kash-patel-dan-bongino-waived-polygraph)
* [2025-11-15, 17:50:49](https://lobste.rs/s/pztoqh/small_functions_considered_harmful_2017) - [Small functions considered harmful (2017)](https://copyconstruct.medium.com/small-functions-considered-harmful-91035d316c29)
* [2025-11-15, 17:00:38](https://news.ycombinator.com/item?id=45938785) - [Trellis AI (YC W24) Is Hiring: Streamline access to life-saving therapies](https://www.ycombinator.com/companies/trellis-ai/jobs/f4GWvH0-forward-deployed-engineer-full-time)
* [2025-11-15, 16:53:30](https://news.ycombinator.com/item?id=45938723) - [Windhawk Windows classic theme mod for Windows 11](https://windhawk.net/mods/classic-theme-enable)
* [2025-11-15, 16:51:30](https://lobste.rs/s/uksu4y/i_can_t_recommend_grafana_anymore) - [I can’t recommend Grafana anymore](https://henrikgerdes.me/blog/2025-11-grafana-mess/)
* [2025-11-15, 16:34:00](https://yro.slashdot.org/story/25/11/15/0547207/woman-pleads-guilty-to-lying-about-astronaut-accessing-bank-account-from-international-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Woman Pleads Guilty to Lying About Astronaut Accessing Bank Account From International Space Station](https://yro.slashdot.org/story/25/11/15/0547207/woman-pleads-guilty-to-lying-about-astronaut-accessing-bank-account-from-international-space-station?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 16:18:56](https://lobste.rs/s/64jejv/building_serverless_applications_with) - [Building serverless applications with Rust on AWS Lambda](https://aws.amazon.com/blogs/compute/building-serverless-applications-with-rust-on-aws-lambda/)
* [2025-11-15, 16:08:21](https://lobste.rs/s/lvqmcz/compiler_options_hardening_guide_for_c_c) - [Compiler Options Hardening Guide for C and C++](https://best.openssf.org/Compiler-Hardening-Guides/Compiler-Options-Hardening-Guide-for-C-and-C++.html)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 15:55:36](https://lobste.rs/s/8ndnmg/when_your_year_work_gets_copied_overnight) - [When Your Year of Work Gets Copied Overnight: What Actually Matters?](https://glama.ai/blog/2025-11-15-when-your-year-of-work-gets-copied-overnight-what-actually-matters)
* [2025-11-15, 15:36:58](https://lobste.rs/s/gvm3xa/don_t_post_passive_aggressive_webpages) - [Don&apos;t Post Passive-Aggressive Webpages](https://dontpostpassiveaggressivewebpages.com/)
* [2025-11-15, 15:34:00](https://hardware.slashdot.org/story/25/11/15/0352221/a-peak-oil-prediction-surprise-from-the-international-energy-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A &apos;Peak Oil&apos; Prediction Surprise From the International Energy Agency](https://hardware.slashdot.org/story/25/11/15/0352221/a-peak-oil-prediction-surprise-from-the-international-energy-agency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 15:25:08](https://news.ycombinator.com/item?id=45938027) - [Weighting an average to minimize variance](https://www.johndcook.com/blog/2025/11/12/minimum-variance/)
* [2025-11-15, 15:19:20](https://news.ycombinator.com/item?id=45937989) - [Linux on the Fujitsu Lifebook U729](https://borretti.me/article/linux-on-the-fujitsu-lifebook-u729)
* [2025-11-15, 14:27:42](https://lobste.rs/s/4soie8/inconceivable_types_rust_how_make_self) - [The Inconceivable Types of Rust: How to Make Self-Borrows Safe](https://blog.polybdenum.com/2024/06/07/the-inconceivable-types-of-rust-how-to-make-self-borrows-safe.html)
* [2025-11-15, 13:55:31](https://lobste.rs/s/uc3a3b/how_write_type_safe_generics_c) - [How to write type-safe generics in C](https://raphgl.github.io/blog/generics-in-c.html)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 10:30:52](https://news.ycombinator.com/item?id=45936460) - [Our investigation into the suspicious pressure on Archive.today](https://adguard-dns.io/en/blog/archive-today-adguard-dns-block-demand.html)
* [2025-11-15, 10:00:00](https://tech.slashdot.org/story/25/11/15/0040214/gm-wants-parts-makers-to-pull-supply-chains-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Wants Parts Makers To Pull Supply Chains From China](https://tech.slashdot.org/story/25/11/15/0040214/gm-wants-parts-makers-to-pull-supply-chains-from-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 09:44:15](https://news.ycombinator.com/item?id=45936262) - [One Handed Keyboard](https://github.com/htx-studio/One-Handed-Keyboard)
* [2025-11-15, 09:28:38](https://lobste.rs/s/1px2ci/10_patterns_for_faster_python_code) - [10 patterns for faster python code](https://blog.jetbrains.com/pycharm/2025/11/10-smart-performance-hacks-for-faster-python-code/)
* [2025-11-15, 07:38:18](https://news.ycombinator.com/item?id=45935729) - [Messing with scraper bots](https://herman.bearblog.dev/messing-with-bots/)
* [2025-11-15, 07:00:00](https://science.slashdot.org/story/25/11/15/0037256/scientists-confirmed-what-is-inside-our-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Confirmed What Is Inside Our Moon](https://science.slashdot.org/story/25/11/15/0037256/scientists-confirmed-what-is-inside-our-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 06:37:50](https://news.ycombinator.com/item?id=45935503) - [TCP, the workhorse of the internet](https://cefboud.com/posts/tcp-deep-dive-internals/)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 05:44:43](https://news.ycombinator.com/item?id=45935342) - [Designing a Language (2017)](https://cs.lmu.edu/~ray/notes/languagedesignnotes/)
* [2025-11-15, 04:00:05](https://lobste.rs/s/sw3hlu/ai_world_clocks) - [AI World Clocks](https://clocks.brianmoore.com/)
* [2025-11-15, 03:30:00](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [She Used ChatGPT To Win the Virginia Lottery, Then Donated Every Dollar](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 03:22:49](https://lobste.rs/s/z0midp/go_s_sweet_16) - [Go’s Sweet 16](https://go.dev/blog/16years)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-15, 01:30:00](https://entertainment.slashdot.org/story/25/11/15/019213/youtube-tv-and-disney-reach-deal-ending-two-week-blackout-of-espn-abc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube TV and Disney Reach Deal Ending Two-Week Blackout of ESPN, ABC](https://entertainment.slashdot.org/story/25/11/15/019213/youtube-tv-and-disney-reach-deal-ending-two-week-blackout-of-espn-abc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 00:50:00](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s $230 iPhone Pocket Sells Out Nearly Immediately](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 00:10:00](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five People Plead Quilty To Helping North Koreans Infiltrate US Companies](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 23:30:00](https://tech.slashdot.org/story/25/11/14/2153236/russia-imposes-24-hour-mobile-internet-blackout-for-travelers-returning-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Imposes 24-Hour Mobile Internet Blackout For Travelers Returning Home](https://tech.slashdot.org/story/25/11/14/2153236/russia-imposes-24-hour-mobile-internet-blackout-for-travelers-returning-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 22:50:00](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Reports Data Breach From Zero-Day Software Vulnerability](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 22:43:18](https://lobste.rs/s/xmdarh/no_leak_no_problem_bypassing_aslr_with_rop) - [No Leak, No Problem - Bypassing ASLR with a ROP Chain to Gain RCE](https://modzero.com/en/blog/no-leak-no-problem/)
* [2025-11-14, 22:33:15](https://news.ycombinator.com/item?id=45932962) - [Go&apos;s Sweet 16](https://go.dev/blog/16years)
* [2025-11-14, 22:15:04](https://news.ycombinator.com/item?id=45932798) - [SSL Configuration Generator](https://ssl-config.mozilla.org/)
* [2025-11-14, 22:10:00](https://news.slashdot.org/story/25/11/14/2135239/jpmorgan-chase-wins-fight-with-fintech-firms-over-fees-to-access-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Chase Wins Fight With Fintech Firms Over Fees To Access Customer Data](https://news.slashdot.org/story/25/11/14/2135239/jpmorgan-chase-wins-fight-with-fintech-firms-over-fees-to-access-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 21:30:00](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Celebrates ChatGPT Finally Following Em Dash Formatting Rules](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 21:21:29](https://lobste.rs/s/svyej1/how_use_uuidv7_python_django_postgresql) - [How to use UUIDv7 in Python, Django and PostgreSQL](https://www.paulox.net//2025/11/14/how-to-use-uuidv7-in-python-django-and-postgresql/)
* [2025-11-14, 21:12:00](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss) - [What Do We Do If SETI is Successful?](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss)
* [2025-11-14, 19:03:18](https://lobste.rs/s/9l70qt/announcing_incusos) - [Announcing IncusOS](https://discuss.linuxcontainers.org/t/announcing-incusos/25139)
* [2025-11-14, 18:38:46](https://lobste.rs/s/ftoj5n/stickertop_art) - [stickertop.art](https://stickertop.art/main/)
* [2025-11-14, 17:56:12](https://lobste.rs/s/lywf8s/ai_water_issue_is_fake) - [The AI water issue is fake](https://andymasley.substack.com/p/the-ai-water-issue-is-fake)
* [2025-11-14, 17:34:59](https://lobste.rs/s/sokew0/version_control_external_content) - [Version Control External Content Referenced in Your Blog](https://lgug2z.com/articles/version-control-external-content-referenced-in-your-blog/)
* [2025-11-14, 16:31:00](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss) - [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss)
* [2025-11-14, 16:25:42](https://lobste.rs/s/rd1tcy/portable_python_self_contained_python) - [portable_python: Self-contained Python distribution for Linux](https://github.com/qznc/portable_python)
* [2025-11-14, 15:25:28](https://lobste.rs/s/9appzu/how_we_avoided_side_channels_our_new_post) - [How we avoided side-channels in our new post-quantum Go cryptography libraries](https://blog.trailofbits.com/2025/11/14/how-we-avoided-side-channels-in-our-new-post-quantum-go-cryptography-libraries/)
* [2025-11-14, 15:20:53](https://lobste.rs/s/4vb7wg/moonpool_ocaml5_imandrax) - [Moonpool and OCaml5 in Imandrax](https://docs.imandra.ai/imandrax/blog/2025-11-12-moonpool-in-imandrax/)
* [2025-11-14, 13:14:44](https://lobste.rs/s/k99bvq/structural_regular_expression_engine) - [A structural regular expression engine for Rust](https://www.sminez.dev/match-it-again-sam/)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 09:23:47](https://lobste.rs/s/l4vg9a/this_isn_t_battle) - [This Isn&apos;t a Battle](https://my-notes.dragas.net/2025/11/14/this-isnt-a-battle/)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 04:48:43](https://lobste.rs/s/xsq6ld/furgit_fast_implementation_git_pure_go) - [Furgit: fast implementation of Git in pure Go](https://github.com/runxiyu/furgit)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
* [2025-11-13, 21:23:00](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss) - [Google&apos;s Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss)
* [2025-11-13, 16:41:00](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss) - [Microsoft Task Manager Bug Spawns New Processes](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss)
* [2025-11-13, 11:57:00](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss) - [Want to be More Persuasive? Talk With Your Hands, Study Finds](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss)
* [2025-11-13, 07:05:00](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss) - [Hyundai&apos;s New EV Training Center Opens Amid Market Turmoil](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 18:36:01](https://news.ycombinator.com/item?id=45891066) - [Show HN: Unflip – a puzzle game about XOR patterns of squares](https://unflipgame.com/)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 13:52:15](https://news.ycombinator.com/item?id=45887262) - [A new Google model is nearly perfect on automated handwriting recognition](https://generativehistory.substack.com/p/has-google-quietly-solved-two-of)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
