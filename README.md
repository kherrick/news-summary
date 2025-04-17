# [News Summary](https://kherrick.github.io/news-summary/)

## Innovation and Engineering

* [Astronomers Detect a Possible Signature of Life on a Distant Planet](https://science.slashdot.org/story/25/04/17/0429213/astronomers-detect-a-possible-signature-of-life-on-a-distant-planet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/04/17/0429213/astronomers-detect-a-possible-signature-of-life-on-a-distant-planet?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Harvard's RoboBee Masters Landing, Paving Way For Agricultural Pollination](https://hardware.slashdot.org/story/25/04/16/2018225/harvards-robobee-masters-landing-paving-way-for-agricultural-pollination?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://hardware.slashdot.org/story/25/04/16/2018225/harvards-robobee-masters-landing-paving-way-for-agricultural-pollination?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Stainless steel strengthened: Twisting creates submicron 'anti-crash wall'](https://techxplore.com/news/2025-04-stainless-steel-technique-submicron-anti.html) - [Comments](https://news.ycombinator.com/item?id=43717377)

## Artificial Intelligence and Technology

* [Show HN: Zuni (YC S24) – AI Copilot for the Browser](https://zuni.app) - [Comments](https://news.ycombinator.com/item?id=43718124)

* [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/04/14/067223&from=rss)

* [AI Marketing to Bypass Spam Filters](https://soylentnews.org/article.pl?sid=25/04/13/0316216&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/04/13/0316216&from=rss)

## Software and Programming

* [Just Throw It Into Postgres](https://simonsafar.com/2025/throw_it_into_postgres/) - [Comments](https://lobste.rs/s/lkrinq/just_throw_it_into_postgres)

* [Zig and GPUs](https://alichraghi.github.io/blog/zig-gpu/) - [Comments](https://lobste.rs/s/bkvrqv/zig_gpus)

* [SQLite Transactions and Virtual Tables](https://misfra.me/2025/sqlite-transactions-and-virtual-tables/) - [Comments](https://news.ycombinator.com/item?id=43719830)

## Privacy and Security

* [Unauthenticated Remote Code Execution in Erlang/OTP SSH](https://nvd.nist.gov/vuln/detail/CVE-2025-32433) - [Comments](https://news.ycombinator.com/item?id=43716526)

* [Everyone knows your location, Part 2: try it yourself and share the results](https://timsh.org/everyone-knows-your-location-part-2-try-it-yourself/) - [Comments](https://lobste.rs/s/gfwhrz/everyone_knows_your_location_part_2_try_it)

* [Discord Begins Testing Facial Recognition Scans For Age Verification](https://yro.slashdot.org/story/25/04/16/2010241/discord-begins-testing-facial-recognition-scans-for-age-verification?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://yro.slashdot.org/story/25/04/16/2010241/discord-begins-testing-facial-recognition-scans-for-age-verification?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Cultural Insights

* [Why Japan's 'Weakest Samurai Warlord' Is Still Admired to This Day](https://www.tokyoweekender.com/art_and_culture/japanese-culture/oda-ujiharu-the-weakest-samurai-warlord/) - [Comments](https://news.ycombinator.com/item?id=43714619)

* [Darwin's children drew all over the “On the Origin of Species” manuscript (2014)](https://theappendix.net/posts/2014/02/darwins-children-drew-vegetable-battles-on-the-origin-of-species) - [Comments](https://news.ycombinator.com/item?id=43706037)

* [How a Secretive Gambler Called 'The Joker' Took Down the Texas Lottery](https://news.slashdot.org/story/25/04/17/1440236/how-a-secretive-gambler-called-the-joker-took-down-the-texas-lottery?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/04/17/1440236/how-a-secretive-gambler-called-the-joker-took-down-the-texas-lottery?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-04-17, 18:40:00](https://tech.slashdot.org/story/25/04/17/1839249/google-apple-and-snap-arent-happy-about-metas-poorly-redacted-slides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google, Apple, and Snap Aren&apos;t Happy About Meta&apos;s Poorly-redacted Slides](https://tech.slashdot.org/story/25/04/17/1839249/google-apple-and-snap-arent-happy-about-metas-poorly-redacted-slides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 18:27:46](https://lobste.rs/s/bkvrqv/zig_gpus) - [Zig and GPUs](https://alichraghi.github.io/blog/zig-gpu/)
* [2025-04-17, 18:23:23](https://news.ycombinator.com/item?id=43720457) - [N-Params vs. Single Param](https://www.carlos-menezes.com/single-param-functions/)
* [2025-04-17, 17:52:42](https://lobste.rs/s/lkrinq/just_throw_it_into_postgres) - [Just Throw It Into Postgres](https://simonsafar.com/2025/throw_it_into_postgres/)
* [2025-04-17, 17:35:33](https://news.ycombinator.com/item?id=43719926) - [On Jane Jacobs (2017)](https://salmagundi.skidmore.edu/articles/75-on-jane-jacobs)
* [2025-04-17, 17:28:31](https://news.ycombinator.com/item?id=43719830) - [SQLite Transactions and Virtual Tables](https://misfra.me/2025/sqlite-transactions-and-virtual-tables/)
* [2025-04-17, 17:01:11](https://news.ycombinator.com/item?id=43719522) - [EasyPost (YC S13) Is Hiring](https://www.easypost.com/careers)
* [2025-04-17, 16:59:35](https://lobste.rs/s/hp0kk4/matrix_calculus_for_machine_learning) - [Matrix Calculus for Machine Learning and Beyond](https://github.com/mitmath/matrixcalc)
* [2025-04-17, 16:54:58](https://news.ycombinator.com/item?id=43719447) - [Show HN: AgentAPI – HTTP API for Claude Code, Goose, Aider, and Codex](https://github.com/coder/agentapi)
* [2025-04-17, 16:50:00](https://news.slashdot.org/story/25/04/17/1631222/ubuntu-2504-plucky-puffin-arrives-with-linux-614-gnome-48-and-arm64-desktop-iso?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubuntu 25.04 &apos;Plucky Puffin&apos; Arrives With Linux 6.14, GNOME 48, and ARM64 Desktop ISO](https://news.slashdot.org/story/25/04/17/1631222/ubuntu-2504-plucky-puffin-arrives-with-linux-614-gnome-48-and-arm64-desktop-iso?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 16:33:15](https://lobste.rs/s/quf2zn/hdr_infused_emoji) - [HDR‑Infused Emoji](https://sharpletters.net/2025/04/16/hdr-emoji/)
* [2025-04-17, 16:19:43](https://news.ycombinator.com/item?id=43718988) - [A cute proof that makes e natural](https://www.poshenloh.com/e/)
* [2025-04-17, 16:16:19](https://lobste.rs/s/laksbh/is_no_paas_really_good_idea_for_rails) - [Is No PaaS really a good idea for Rails?](https://www.honeybadger.io/blog/rails-no-paas/)
* [2025-04-17, 16:11:00](https://news.slashdot.org/story/25/04/17/1611216/bot-students-siphon-millions-in-financial-aid-from-us-community-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bot Students Siphon Millions in Financial Aid from US Community Colleges](https://news.slashdot.org/story/25/04/17/1611216/bot-students-siphon-millions-in-financial-aid-from-us-community-colleges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 16:07:21](https://news.ycombinator.com/item?id=43718809) - [Milwaukee M18 Battery Reverse Engineering](https://quagmirerepair.com/milwaukee-m18-battery-reverse-engineering)
* [2025-04-17, 15:39:00](https://tech.slashdot.org/story/25/04/17/1539231/meta-blocks-apple-intelligence-in-ios-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Blocks Apple Intelligence in iOS Apps](https://tech.slashdot.org/story/25/04/17/1539231/meta-blocks-apple-intelligence-in-ios-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 15:15:39](https://news.ycombinator.com/item?id=43718124) - [Show HN: Zuni (YC S24) – AI Copilot for the Browser](https://zuni.app)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 14:47:46](https://news.ycombinator.com/item?id=43717705) - [Google is illegally monopolizing online advertising tech, judge rules](https://www.nytimes.com/2025/04/17/technology/google-ad-tech-antitrust-ruling.html)
* [2025-04-17, 14:42:07](https://news.ycombinator.com/item?id=43717606) - [HDR‑Infused Emoji](https://sharpletters.net/2025/04/16/hdr-emoji/)
* [2025-04-17, 14:40:00](https://news.slashdot.org/story/25/04/17/1440236/how-a-secretive-gambler-called-the-joker-took-down-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Secretive Gambler Called &apos;The Joker&apos; Took Down the Texas Lottery](https://news.slashdot.org/story/25/04/17/1440236/how-a-secretive-gambler-called-the-joker-took-down-the-texas-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 14:28:07](https://news.ycombinator.com/item?id=43717377) - [Stainless steel strengthened: Twisting creates submicron &apos;anti-crash wall&apos;](https://techxplore.com/news/2025-04-stainless-steel-technique-submicron-anti.html)
* [2025-04-17, 14:00:00](https://tech.slashdot.org/story/25/04/17/1339247/indias-it-services-giants-hit-with-steepest-growth-slowdown-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s IT Services Giants Hit With Steepest Growth Slowdown in Years](https://tech.slashdot.org/story/25/04/17/1339247/indias-it-services-giants-hit-with-steepest-growth-slowdown-in-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 13:58:14](https://lobste.rs/s/c4u4zv/ios_18_4_dlsym_considered_harmful) - [iOS 18.4 - dlsym considered harmful](https://www.synacktiv.com/en/publications/ios-184-dlsym-considered-harmful)
* [2025-04-17, 13:53:16](https://lobste.rs/s/fl7ly9/traceboot_precise_lightweight_tracing) - [traceboot: precise and lightweight tracing for boot and shell scripts](https://codeberg.org/SpecialSnowflake/traceboot)
* [2025-04-17, 13:51:49](https://news.ycombinator.com/item?id=43716856) - [OpenAI looked at buying Cursor creator before turning to Windsurf](https://www.cnbc.com/2025/04/17/openai-looked-at-cursor-before-considering-deal-with-rival-windsurf.html)
* [2025-04-17, 13:42:15](https://lobste.rs/s/hbevmo/concurrency_haskell_fast_simple_correct) - [Concurrency in Haskell: Fast, Simple, Correct](https://bitbashing.io/haskell-concurrency.html)
* [2025-04-17, 13:41:49](https://lobste.rs/s/gfwhrz/everyone_knows_your_location_part_2_try_it) - [Everyone knows your location, Part 2: try it yourself and share the results](https://timsh.org/everyone-knows-your-location-part-2-try-it-yourself/)
* [2025-04-17, 13:31:24](https://lobste.rs/s/k0bswx/arch_linux_valkey_replace_redis_extra) - [Arch Linux: Valkey to replace Redis in the [extra] Repository](https://archlinux.org/news/valkey-to-replace-redis-in-the-extra-repository/)
* [2025-04-17, 13:29:44](https://news.ycombinator.com/item?id=43716526) - [Unauthenticated Remote Code Execution in Erlang/OTP SSH](https://nvd.nist.gov/vuln/detail/CVE-2025-32433)
* [2025-04-17, 13:17:20](https://lobste.rs/s/x4xlid/integrating_effectful_persistent) - [Integrating Effectful and Persistent](https://exploring-better-ways.bellroy.com/integrating-effectful-and-persistent.html)
* [2025-04-17, 13:00:00](https://tech.slashdot.org/story/25/04/17/0813228/china-bans-smart-and-autonomous-driving-terms-from-vehicle-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Bans &apos;Smart&apos; and &apos;Autonomous&apos; Driving Terms From Vehicle Ads](https://tech.slashdot.org/story/25/04/17/0813228/china-bans-smart-and-autonomous-driving-terms-from-vehicle-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 12:50:37](https://news.ycombinator.com/item?id=43716058) - [An Intro to DeepSeek&apos;s Distributed File System](https://maknee.github.io/blog/2025/3FS-Performance-Journal-1/)
* [2025-04-17, 12:28:49](https://lobste.rs/s/bucpth/graham_synchronizing_clocks_by) - [Graham: Synchronizing Clocks by Leveraging Local Clock Properties](https://www.usenix.org/conference/nsdi22/presentation/najafi)
* [2025-04-17, 10:26:00](https://lobste.rs/s/idmemq/development_on_apple_silicon_with_utm) - [Development On Apple Silicon with UTM](https://rkiselenko.dev/blog/development-on-mac-with-utm/development-on-mac-with-lima/)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 10:00:00](https://games.slashdot.org/story/25/04/17/0715235/how-nintendos-legal-team-destroyed-atari-games-through-courtroom-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Nintendo&apos;s Legal Team Destroyed Atari Games Through Courtroom Strategy](https://games.slashdot.org/story/25/04/17/0715235/how-nintendos-legal-team-destroyed-atari-games-through-courtroom-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 09:30:43](https://news.ycombinator.com/item?id=43714619) - [Why Japan&apos;s \&quot;Weakest Samurai Warlord\&quot; Is Still Admired to This Day](https://www.tokyoweekender.com/art_and_culture/japanese-culture/oda-ujiharu-the-weakest-samurai-warlord/)
* [2025-04-17, 09:23:08](https://lobste.rs/s/mwvwsp/bring_back_rss_feeds_browsers) - [Bring Back RSS Feeds to Browsers](https://jetgirl.art/bring-back-rss-feeds-to-browsers/)
* [2025-04-17, 09:21:34](https://lobste.rs/s/ysq9w3/regular_expression_derivatives_python) - [Regular Expression Derivatives in Python](https://archive.fosdem.org/2018/schedule/event/python_regex_derivatives/attachments/slides/2363/export/events/attachments/python_regex_derivatives/slides/2363/fosdem2018.pdf)
* [2025-04-17, 07:34:08](https://news.ycombinator.com/item?id=43714041) - [The Halting Problem is a terrible example of NP-Harder](https://buttondown.com/hillelwayne/archive/the-halting-problem-is-a-terrible-example-of-np/)
* [2025-04-17, 07:27:11](https://news.ycombinator.com/item?id=43714004) - [BitNet b1.58 2B4T Technical Report](https://arxiv.org/abs/2504.12285)
* [2025-04-17, 07:00:00](https://entertainment.slashdot.org/story/25/04/16/2240228/lg-tvs-integrated-ads-get-more-personal-with-tech-that-analyzes-viewer-emotions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG TVs&apos; Integrated Ads Get More Personal With Tech That Analyzes Viewer Emotions](https://entertainment.slashdot.org/story/25/04/16/2240228/lg-tvs-integrated-ads-get-more-personal-with-tech-that-analyzes-viewer-emotions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 05:53:31](https://news.ycombinator.com/item?id=43713524) - [Passing planes and other whoosh sounds](https://www.windytan.com/2025/04/passing-planes-and-other-whoosh-sounds.html)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 04:30:00](https://science.slashdot.org/story/25/04/17/0429213/astronomers-detect-a-possible-signature-of-life-on-a-distant-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Detect a Possible Signature of Life on a Distant Planet](https://science.slashdot.org/story/25/04/17/0429213/astronomers-detect-a-possible-signature-of-life-on-a-distant-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 03:53:19](https://lobste.rs/s/idtroe/unsure_calculator) - [Unsure Calculator](https://filiph.github.io/unsure/)
* [2025-04-17, 03:30:00](https://science.slashdot.org/story/25/04/16/2229250/we-are-not-programmed-to-die-says-nobel-laureate-venki-ramakrishnan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We Are Not Programmed to Die,&apos; Says Nobel Laureate Venki Ramakrishnan](https://science.slashdot.org/story/25/04/16/2229250/we-are-not-programmed-to-die-says-nobel-laureate-venki-ramakrishnan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 02:51:04](https://lobste.rs/s/kckhbq/sqlc_generate_type_safe_code_from_sql) - [sqlc: Generate type-safe code from SQL](https://github.com/sqlc-dev/sqlc)
* [2025-04-17, 02:30:00](https://it.slashdot.org/story/25/04/16/2021236/microsoft-confirms-classic-outlook-cpu-usage-spikes-offers-no-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Confirms Classic Outlook CPU Usage Spikes, Offers No Fix](https://it.slashdot.org/story/25/04/16/2021236/microsoft-confirms-classic-outlook-cpu-usage-spikes-offers-no-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 01:50:00](https://hardware.slashdot.org/story/25/04/16/2018225/harvards-robobee-masters-landing-paving-way-for-agricultural-pollination?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Harvard&apos;s RoboBee Masters Landing, Paving Way For Agricultural Pollination](https://hardware.slashdot.org/story/25/04/16/2018225/harvards-robobee-masters-landing-paving-way-for-agricultural-pollination?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 01:10:00](https://science.slashdot.org/story/25/04/16/2013255/researchers-grow-record-sized-lab-meat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Grow Record-sized Lab Meat](https://science.slashdot.org/story/25/04/16/2013255/researchers-grow-record-sized-lab-meat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-17, 00:55:49](https://news.ycombinator.com/item?id=43711957) - [Zoom outage caused by accidental &apos;shutting down&apos; of the zoom.us domain](https://status.zoom.us/incidents/pw9r9vnq5rvk)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
* [2025-04-17, 00:30:00](https://yro.slashdot.org/story/25/04/16/2010241/discord-begins-testing-facial-recognition-scans-for-age-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Begins Testing Facial Recognition Scans For Age Verification](https://yro.slashdot.org/story/25/04/16/2010241/discord-begins-testing-facial-recognition-scans-for-age-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-16, 22:24:57](https://lobste.rs/s/bezwfp/all_databases_are_just_files_postgres_too) - [(All) Databases Are Just Files. Postgres Too](http://tselai.com/all-databases-are-just-files)
* [2025-04-16, 21:46:10](https://news.ycombinator.com/item?id=43710761) - [Vivarium: The keeper of a lab&apos;s animals stumbles onto a secret [fiction]](https://jsomers.net/vivarium/)
* [2025-04-16, 21:12:17](https://lobste.rs/s/jav8ey/deb_books_books_hidden_debian_source) - [deb-books: books hidden in Debian source packages](https://codeberg.org/jwilk/deb-books)
* [2025-04-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss) - [MITRE Announced Funding for Common Vulnerabilities and Exposures (CVE) Program Ends 16-April-2025](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss)
* [2025-04-16, 19:37:12](https://lobste.rs/s/9tiirp/lifecycle_pull_request) - [the lifecycle of a pull request](https://blog.tangled.sh/pulls)
* [2025-04-16, 18:34:40](https://lobste.rs/s/figswp/tls_certificate_lifetimes_will) - [TLS Certificate Lifetimes Will Officially Reduce to 47 Days](https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days)
* [2025-04-16, 16:39:35](https://lobste.rs/s/f87ptp/mastodon_exit_interview) - [Mastodon Exit Interview](https://v.cx/2025/04/mastodon-exit-interview)
* [2025-04-16, 16:30:40](https://lobste.rs/s/g8jeqb/introducing_kermit_typeface_for_kids) - [Introducing Kermit: A typeface for kids](https://microsoft.design/articles/introducing-kermit-a-typeface-for-kids/)
* [2025-04-16, 15:35:18](https://lobste.rs/s/45ob1t/reproducing_hacker_news_writing_style) - [Reproducing Hacker News writing style fingerprinting](https://antirez.com/news/150)
* [2025-04-16, 15:13:00](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss) - [Rooftop Solar PV Could Supply Two-Thirds of World&apos;s Energy Needs, and Lower Global Temperatures](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss)
* [2025-04-16, 14:28:36](https://news.ycombinator.com/item?id=43706037) - [Darwin&apos;s children drew all over the “On the Origin of Species” manuscript (2014)](https://theappendix.net/posts/2014/02/darwins-children-drew-vegetable-battles-on-the-origin-of-species)
* [2025-04-16, 12:12:17](https://news.ycombinator.com/item?id=43704382) - [Snapchat is harming children at an industrial scale](https://www.afterbabel.com/p/industrial-scale-snapchat)
* [2025-04-16, 12:10:33](https://news.ycombinator.com/item?id=43704364) - [Marching Events: What does iCalendar have to do with ray marching?](https://pwy.io/posts/marching-events/)
* [2025-04-16, 10:26:00](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss) - [Meeting Apple on Apple&apos;s Terms](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss)
* [2025-04-16, 05:38:00](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss) - [Copilot Recall: Microsoft Rolls Out AI Screenshot Tool](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss)
* [2025-04-16, 00:49:00](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss) - [Cooling Chips With Lasers: Innovative Cooling Method Removes Heat Precisely From Hot Spots](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss)
* [2025-04-15, 21:51:33](https://lobste.rs/s/b0edh1/mitre_will_stop_issuing_new_cves) - [MITRE will stop issuing new CVEs](https://infosec.exchange/@briankrebs/114343835430587973)
* [2025-04-15, 20:05:07](https://news.ycombinator.com/item?id=43697717) - [AI as Normal Technology](https://knightcolumbia.org/content/ai-as-normal-technology)
* [2025-04-15, 20:04:00](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss) - [Microsoft is Digging its Own Grave With Windows 11, and It Has to Stop](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss)
* [2025-04-15, 15:18:00](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss) - [NIST Finalizes Guidelines for Evaluating ‘Differential Privacy’ Guarantees to De-Identify Data](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss)
* [2025-04-15, 13:56:32](https://news.ycombinator.com/item?id=43692746) - [Ultrafast Optical Detector](https://www.tdk.com/en/about_tdk/innovation/spin-photo-detector/index.html)
* [2025-04-15, 11:09:30](https://news.ycombinator.com/item?id=43691230) - [MCP Run Python](https://github.com/pydantic/pydantic-ai/tree/main/mcp-run-python)
* [2025-04-15, 10:33:00](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss) - [ChatGPT Now Lets Users Create Fake Images of Politicians--Tool Suggested Own Workarounds](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss)
* [2025-04-15, 05:52:00](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss) - [Ethically Sourced “Spare” Human Bodies Could Revolutionize Medicine](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss)
* [2025-04-15, 01:12:00](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss) - [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss)
* [2025-04-14, 23:43:54](https://news.ycombinator.com/item?id=43687494) - [There Are Two Types of Dishwasher People](https://www.theatlantic.com/family/archive/2025/04/how-to-load-dishwasher/682425/)
* [2025-04-14, 20:23:00](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss) - [Aztecs Versus Mayans - Unwrapping History Clue by Clue](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss)
* [2025-04-14, 15:39:00](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss) - [A Tricky Commodore PET Repair: Tracking Down 6 1/2 Bad Chips](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss)
* [2025-04-14, 10:52:00](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss) - [More Microsoft Job Cuts Could Hit Non-Coding Staff And Middle Managers](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss)
* [2025-04-14, 07:57:02](https://news.ycombinator.com/item?id=43679065) - [The Second Half](https://ysymyth.github.io/The-Second-Half/)
* [2025-04-14, 06:10:00](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss) - [Galaxies in the Deep Universe Rotate in the Same Direction](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss)
* [2025-04-14, 04:48:54](https://news.ycombinator.com/item?id=43678144) - [Making Software](https://www.makingsoftware.com/)
* [2025-04-14, 04:47:51](https://news.ycombinator.com/item?id=43678138) - [Adipose tissue retains an epigenetic memory of obesity after weight loss](https://www.nature.com/articles/s41586-024-08165-7)
* [2025-04-14, 01:20:00](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss) - [Ukraine&apos;s Autonomous Killer Drones Defeat Electronic Warfare](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss)
* [2025-04-13, 20:35:00](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss) - [AI Marketing to Bypass Spam Filters](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss)
* [2025-04-13, 15:50:00](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss) - [Ubisoft Argues Players Don&apos;t Own Their Games in Wake of The Crew Lawsuit](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss)
* [2025-04-13, 11:06:00](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss) - [The U.S. is Building a Fuel Depot in Space](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss)
* [2025-04-13, 06:22:00](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss) - [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss)
* [2025-04-13, 01:40:00](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss) - [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss)
