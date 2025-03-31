# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [As Microsoft Turns 50, Four Employees Remember Its Early Days](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insightful reflections on the emergence and growth of one of the tech giants from those who lived through its inception. [Comments](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Copilot Can't Beat a 2013 'TouchDevelop' Code Generation Demo for Windows Phone](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discussion on the limitations of modern AI programming assistants compared to older tech demonstrations. [Comments](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China is Already Testing AI-Powered Humanoid Robots in Factories](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explore the applications and potential of integrating advanced AI humanoids into manufacturing. [Comments](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Privacy and Security

* [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major data breach highlights privacy concerns and exposure risks on dating platforms. [Comments](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Bloomberg's AI-Generated News Summaries Had At Least 36 Errors Since January](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examination of challenges and errors stemming from AI-generated content. [Comments](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Education and Societal Impact

* [Installing air filters in classrooms has surprisingly large educational benefits](https://www.vox.com/2020/1/8/21051869/indoor-air-pollution-student-achievement) - A focus on how better air quality in learning environments can enhance student achievement. [Comments](https://news.ycombinator.com/item?id=43529257)

* [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss) - Groundbreaking research uncovers a biological tool for radiation protection. [Comments](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss)

## Science and Exploration

* [Did Life on Earth Come from 'Microlightning' Between Charged Water Droplets?](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigation into a unique mechanism that might have seeded life on our planet. [Comments](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-03-31, 01:34:00](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As Microsoft Turns 50, Four Employees Remember Its Early Days](https://slashdot.org/story/25/03/31/018215/as-microsoft-turns-50-four-employees-remember-its-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 01:26:47](https://news.ycombinator.com/item?id=43529707) - [How Each Pillar of the First Amendment Is Under Attack](https://krebsonsecurity.com/2025/03/how-each-pillar-of-the-1st-amendment-is-under-attack/)
* [2025-03-31, 00:50:08](https://lobste.rs/s/ehyytc/guidelines_for_evaluating_differential) - [Guidelines for Evaluating Differential Privacy Guarantees](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-226.pdf)
* [2025-03-31, 00:34:00](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Copilot Can't Beat a 2013 'TouchDevelop' Code Generation Demo for Windows Phone](https://developers.slashdot.org/story/25/03/30/2333226/copilot-cant-beat-a-2013-touchdevelop-code-generation-demo-for-windows-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-31, 00:22:40](https://news.ycombinator.com/item?id=43529257) - [Installing air filters in classrooms has surprisingly large educational benefits](https://www.vox.com/2020/1/8/21051869/indoor-air-pollution-student-achievement)
* [2025-03-31, 00:15:26](https://news.ycombinator.com/item?id=43529213) - [Ambermoon Advanced](https://github.com/Pyrdacor/Ambermoon-Advanced)
* [2025-03-31, 00:07:54](https://news.ycombinator.com/item?id=43529163) - [BreezeWiki makes wiki pages on Fandom readable](https://breezewiki.com/)
* [2025-03-30, 23:59:23](https://news.ycombinator.com/item?id=43529104) - [Oka.wiki](https://oka.wiki/)
* [2025-03-30, 23:11:00](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China is Already Testing AI-Powered Humanoid Robots in Factories](https://hardware.slashdot.org/story/25/03/30/239225/china-is-already-testing-ai-powered-humanoid-robots-in-factories?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 22:45:54](https://news.ycombinator.com/item?id=43528496) - [Can Style Be Timeless?](https://www.mrporter.com/en-gb/journal/fashion/derek-guy-timeless-style-25197344)
* [2025-03-30, 22:14:29](https://lobste.rs/s/pmismq/baseline_implementations_should_be) - [Baseline implementations should be predictable](https://www.pvk.ca/Blog/2021/05/14/baseline-implementations-should-be-predictable/)
* [2025-03-30, 21:53:00](https://soylentnews.org/article.pl?sid=25/03/28/1431238&from=rss) - [New Utah Law Makes App Stores Responsible for Age Verification](https://soylentnews.org/article.pl?sid=25/03/28/1431238&from=rss)
* [2025-03-30, 21:21:37](https://lobste.rs/s/acgr92/file_systems_unfit_as_distributed) - [File Systems Unfit as Distributed Storage Backend (2019)](https://dl.acm.org/doi/pdf/10.1145/3341301.3359656)
* [2025-03-30, 21:17:00](https://tech.slashdot.org/story/25/03/30/2115253/microsoft-attempts-to-close-local-account-windows-11-setup-loophole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Attempts To Close Local Account Windows 11 Setup Loophole](https://tech.slashdot.org/story/25/03/30/2115253/microsoft-attempts-to-close-local-account-windows-11-setup-loophole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 20:55:28](https://news.ycombinator.com/item?id=43527552) - [MAME 0.276](https://www.mamedev.org/?p=549)
* [2025-03-30, 20:52:39](https://news.ycombinator.com/item?id=43527521) - [Xfinity XB3 hardware mod: Disable WiFi and save 2 watts](https://gist.github.com/pmarks-net/af40dba69272806c1ec9cbe71429d2e7)
* [2025-03-30, 20:43:15](https://news.ycombinator.com/item?id=43527452) - [Ask HN: What are you working on? (March 2025)](https://news.ycombinator.com/item?id=43527452)
* [2025-03-30, 20:41:18](https://lobste.rs/s/jmnpce/actually_drawing_some_ovals_are_not) - [Actually drawing some ovals (that are not ellipses)](https://medium.com/@brunopostle/actually-drawing-some-ovals-that-are-not-ellipses-444ba9fd9cf8)
* [2025-03-30, 20:17:58](https://lobste.rs/s/p47bbr/surprise_multiple_dependency_graphs) - [The Surprise of Multiple Dependency Graphs](https://queue.acm.org/detail.cfm?ref=rss&id=3723000)
* [2025-03-30, 20:11:00](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bloomberg's AI-Generated News Summaries Had At Least 36 Errors Since January](https://news.slashdot.org/story/25/03/30/1946224/bloombergs-ai-generated-news-summaries-had-at-least-36-errors-since-january?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 19:54:46](https://news.ycombinator.com/item?id=43527044) - [Public secrets exposure leads to supply chain attack on GitHub CodeQL](https://www.praetorian.com/blog/codeqleaked-public-secrets-exposure-leads-to-supply-chain-attack-on-github-codeql/)
* [2025-03-30, 19:50:10](https://news.ycombinator.com/item?id=43527001) - [FBI raids home of prominent computer scientist who has gone incommunicado](https://arstechnica.com/security/2025/03/computer-scientist-goes-silent-after-fbi-raid-and-purging-from-university-website/)
* [2025-03-30, 19:22:36](https://news.ycombinator.com/item?id=43526763) - [Introduction to System Programming in Linux (Early Access)](https://nostarch.com/introduction-system-programming-linux)
* [2025-03-30, 19:18:26](https://lobste.rs/s/pxt8lj/nix_vanity_store_paths) - [Nix vanity store paths](https://fzakaria.com/2025/03/27/nix-vanity-store-paths)
* [2025-03-30, 19:11:00](https://developers.slashdot.org/story/25/03/30/198218/how-rust-finally-got-a-specification---thanks-to-a-consultancys-open-source-donation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How Rust Finally Got a Specification - Thanks to a Consultancy's Open-Source Donation](https://developers.slashdot.org/story/25/03/30/198218/how-rust-finally-got-a-specification---thanks-to-a-consultancys-open-source-donation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 19:03:42](https://news.ycombinator.com/item?id=43526621) - [File Systems Unfit as Distributed Storage Back Ends (2019)](https://dl.acm.org/doi/pdf/10.1145/3341301.3359656)
* [2025-03-30, 18:54:57](https://lobste.rs/s/rvlxyl/tcrf_has_been_getting_ddosed) - [TCRF has been getting DDoSed](https://blog.xkeeper.net/uncategorized/tcrf-has-been-getting-ddosed/)
* [2025-03-30, 18:41:46](https://news.ycombinator.com/item?id=43526443) - [Can Earth's rotation generate power? Physicists divided over controversial claim](https://www.nature.com/articles/d41586-025-00847-0)
* [2025-03-30, 18:35:03](https://news.ycombinator.com/item?id=43526396) - [The Nobel Duel](https://www.asimov.press/p/nobel-duel)
* [2025-03-30, 18:20:50](https://lobste.rs/s/bymbzf/missile_vs_laser_game_terminal_maneuvers) - [Missile vs. Laser: The Game of Terminal Maneuvers](https://www.ethanheilman.com/x/31/index.html)
* [2025-03-30, 17:47:50](https://lobste.rs/s/emvaw4/why_is_this_site_built_with_c) - [Why Is This Site Built With C](https://marcelofern.com/posts/c/why-is-this-site-built-with-c/index.html)
* [2025-03-30, 17:34:00](https://tech.slashdot.org/story/25/03/30/170233/what-that-facebook-whistleblowers-memoir-left-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [What that Facebook Whistleblower's Memoir Left Out](https://tech.slashdot.org/story/25/03/30/170233/what-that-facebook-whistleblowers-memoir-left-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 17:14:00](https://soylentnews.org/article.pl?sid=25/03/28/1425255&from=rss) - [DragonOS is a Lubuntu-Based Desktop Distro Which is Focused on Software Defined Radio (SDR)](https://soylentnews.org/article.pl?sid=25/03/28/1425255&from=rss)
* [2025-03-30, 17:01:47](https://news.ycombinator.com/item?id=43525636) - [Spice Data (YC S19) is hiring a software engineer](https://www.ycombinator.com/companies/spice-data/jobs/TijA35R-software-engineer)
* [2025-03-30, 16:34:00](https://it.slashdot.org/story/25/03/29/1928254/has-the-decline-of-knowledge-worker-jobs-begun?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Has the Decline of Knowledge Worker Jobs Begun?](https://it.slashdot.org/story/25/03/29/1928254/has-the-decline-of-knowledge-worker-jobs-begun?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 15:34:00](https://tech.slashdot.org/story/25/03/30/0454215/google-sunsets-two-devices-from-its-nest-smart-home-product-line?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Sunsets Two Devices From Its Nest Smart Home Product Line](https://tech.slashdot.org/story/25/03/30/0454215/google-sunsets-two-devices-from-its-nest-smart-home-product-line?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 15:30:22](https://news.ycombinator.com/item?id=43524937) - [Blue95: a desktop for your childhood home's computer room](https://github.com/winblues/blue95)
* [2025-03-30, 14:43:59](https://lobste.rs/s/cytxh8/brief_history_compression_on_macs) - [A brief history of compression on Macs](https://eclecticlight.co/2025/03/29/a-brief-history-of-compression-on-macs/)
* [2025-03-30, 14:34:00](https://developers.slashdot.org/story/25/03/30/0627205/microsoft-announces-hyperlight-wasm-speedy-vm-based-security-at-scale-with-a-webassembly-runtime?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Announces 'Hyperlight Wasm': Speedy VM-Based Security at Scale with a WebAssembly Runtime](https://developers.slashdot.org/story/25/03/30/0627205/microsoft-announces-hyperlight-wasm-speedy-vm-based-security-at-scale-with-a-webassembly-runtime?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 12:50:45](https://news.ycombinator.com/item?id=43523765) - [Why a plane turned around when a passenger lost a phone midflight](https://www.washingtonpost.com/travel/2025/03/28/air-france-lost-cellphone/)
* [2025-03-30, 12:47:07](https://news.ycombinator.com/item?id=43523741) - [Tail Call Recursion in Java with ASM (2023)](https://unlinkedlist.org/2023/03/19/tail-call-recursion-in-java-with-asm/)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss) - [I'm an American Software Developer and the \"Broligarchs\" Don't Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&from=rss)
* [2025-03-30, 12:16:15](https://lobste.rs/s/pn9gok/labor_division_2010) - [Labor of Division (2010)](https://ridiculousfish.com/blog/posts/labor-of-division-episode-i.html)
* [2025-03-30, 12:02:05](https://lobste.rs/s/dqezic/koto_programming_language) - [Koto Programming Language](https://koto.dev/)
* [2025-03-30, 12:02:01](https://lobste.rs/s/g1z2pu/towards_fearless_simd_7_years_later) - [Towards fearless SIMD, 7 years later](https://linebender.org/blog/towards-fearless-simd/)
* [2025-03-30, 11:34:00](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly 1.5 Million Private Photos from Five Dating Apps Were Exposed Online](https://yro.slashdot.org/story/25/03/30/0236216/nearly-15-million-private-photos-from-five-dating-apps-were-exposed-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 11:23:50](https://lobste.rs/s/tobrqw/convert_linux_windows) - [Convert Linux to Windows](https://philipbohun.com/blog/0007.html)
* [2025-03-30, 11:15:19](https://lobste.rs/s/mvcoat/rust_any_part_3_finally_we_have_upcasts) - [Rust Any part 3: Finally we have upcasts](https://lucumr.pocoo.org/2025/3/27/any-upcast/)
* [2025-03-30, 11:15:12](https://news.ycombinator.com/item?id=43523238) - [Rust Any part 3: we have upcasts](https://lucumr.pocoo.org/2025/3/27/any-upcast/)
* [2025-03-30, 10:20:11](https://news.ycombinator.com/item?id=43522966) - [The average college student today](https://hilariusbookbinder.substack.com/p/the-average-college-student-today)
* [2025-03-30, 08:14:11](https://news.ycombinator.com/item?id=43522363) - [Four Lectures on Standard ML (1989) [pdf]](https://www.cs.tufts.edu/~nr/cs257/archive/mads-tofte/four-lectures.pdf)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&from=rss)
* [2025-03-30, 07:34:00](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Samsung Unveils AI-Powered, Screen-Enabled Home Appliances](https://slashdot.org/story/25/03/30/0421248/samsung-unveils-ai-powered-screen-enabled-home-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 06:27:06](https://lobste.rs/s/q2rxjn/arpa_rdns_few_magical_icmp_hacks) - [.arpa, rDNS and a few magical ICMP hacks](https://sdomi.pl/weblog/24-arpa-hacks/)
* [2025-03-30, 05:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&from=rss)
* [2025-03-30, 03:34:00](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Aptera Takes First 300-Mile Highway Trip in Solar-Powered EV](https://hardware.slashdot.org/story/25/03/30/026200/aptera-takes-first-300-mile-highway-trip-in-solar-powered-ev?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&from=rss)
* [2025-03-30, 02:45:12](https://news.ycombinator.com/item?id=43520796) - [The Dingo's Fate](https://www.noemamag.com/the-dingos-fate/)
* [2025-03-30, 01:55:08](https://lobste.rs/s/mk6n0l/syntax_highlighting_with_tree_sitter) - [syntax highlighting with tree-sitter](https://dotat.at/@/2025-03-30-hilite.html)
* [2025-03-30, 01:42:04](https://lobste.rs/s/mekrcq/programmer_s_reading_list_100_articles_i) - [A Programmer's Reading List: 100 Articles I Enjoyed (1-50)](https://www.piglei.com/articles/en-programmer-reading-list-part-one/)
* [2025-03-30, 01:34:00](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Did Life on Earth Come from 'Microlightning' Between Charged Water Droplets?](https://science.slashdot.org/story/25/03/29/2326255/did-life-on-earth-come-from-microlightning-between-charged-water-droplets?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-30, 00:34:00](https://tech.slashdot.org/story/25/03/29/2152217/reddits-50-stock-price-plunge-fails-to-entice-buyers-as-growth-slows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit's 50% Stock-Price Plunge Fails to Entice Buyers as Growth Slows](https://tech.slashdot.org/story/25/03/29/2152217/reddits-50-stock-price-plunge-fails-to-entice-buyers-as-growth-slows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-29, 23:20:36](https://lobste.rs/s/4jwyfk/self_contained_python_scripts_with_uv) - [Self-contained Python scripts with uv](http://blog.dusktreader.dev/2025/03/29/self-contained-python-scripts-with-uv/)
* [2025-03-29, 22:04:00](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss) - [Certified Genuine Randomness](https://soylentnews.org/article.pl?sid=25/03/28/140245&from=rss)
* [2025-03-29, 20:30:25](https://lobste.rs/s/2bbkse/thoughts_on_ecs) - [Thoughts on ECS](https://blog.voxagon.se/2025/03/28/thoughts-on-ecs.html)
* [2025-03-29, 18:45:22](https://lobste.rs/s/a8t2pp/ente_photos_v1) - [Ente Photos v1](https://ente.io/blog/v1)
* [2025-03-29, 17:37:57](https://lobste.rs/s/ryacpm/vramfs_vram_based_file_system_for_linux) - [vramfs: VRAM based file system for Linux](https://github.com/Overv/vramfs)
* [2025-03-29, 17:17:00](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss) - [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&from=rss)
* [2025-03-29, 17:06:30](https://lobste.rs/s/lmf0ot/horseless_intelligence) - [Horseless intelligence](https://nedbatchelder.com/blog/202503/horseless_intelligence.html)
* [2025-03-29, 14:50:05](https://lobste.rs/s/dducfq/i_made_little_puzzle_game_about_rogue) - [I made a little puzzle game about a rogue chess knight](https://rakhim.exotext.com/knight-ride-a-game-about-rogue-chess-knight)
* [2025-03-29, 14:40:49](https://lobste.rs/s/6ue8gr/how_become_hacker_step_by_step_guide) - [How To Become A Hacker: A Step-By-Step Guide](https://sebastiancarlos.medium.com/how-to-become-a-hacker-a-step-by-step-guide-94902dc425b0)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&from=rss)
* [2025-03-29, 12:24:16](https://news.ycombinator.com/item?id=43514969) - [What to Do](https://paulgraham.com/do.html)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&from=rss)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&from=rss)
* [2025-03-28, 22:16:00](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss) - [Napster Sold for $200+ Million in the Year 2025](https://soylentnews.org/article.pl?sid=25/03/28/1127247&from=rss)
* [2025-03-28, 17:32:00](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss) - [A Chip Has Broken the Critical Barrier That Could Ultimately Begin the Singularity](https://soylentnews.org/article.pl?sid=25/03/27/1154254&from=rss)
* [2025-03-28, 12:45:00](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss) - [SpaceX Reportedly Has a Secret Backdoor for Chinese Investment](https://soylentnews.org/article.pl?sid=25/03/27/0346219&from=rss)
* [2025-03-28, 12:25:00](https://news.ycombinator.com/item?id=43504514) - [Claim for a missing tooth](https://tf230.matteason.co.uk/)
* [2025-03-28, 07:56:00](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss) - [ReactOS 0.4.15 Released](https://soylentnews.org/article.pl?sid=25/03/26/1637237&from=rss)
* [2025-03-28, 07:22:40](https://news.ycombinator.com/item?id=43502488) - [The surprisingly simple reason kids have imaginary friends](https://www.vox.com/life/404992/imaginary-friends-kids-friendships-children)
* [2025-03-28, 03:13:00](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss) - [Order to Chaos: The Fascinating Math That All Pedestrians Need to Know](https://soylentnews.org/article.pl?sid=25/03/26/1635243&from=rss)
* [2025-03-27, 22:28:00](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss) - [Postel's Law and the Three Ring Circus](https://soylentnews.org/article.pl?sid=25/03/26/1631253&from=rss)
* [2025-03-27, 22:21:20](https://news.ycombinator.com/item?id=43498861) - [George Orwell and me: Richard Blair on life with his extraordinary father](https://www.theguardian.com/books/2025/mar/19/george-orwell-me-richard-blair-life-with-extraordinary-father)
* [2025-03-27, 21:28:33](https://news.ycombinator.com/item?id=43498399) - [Digital cuneiforms: Updated tool expands access to ancient Hittite texts](https://phys.org/news/2025-03-digital-cuneiforms-tool-access-ancient.html)
* [2025-03-27, 17:46:00](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss) - [Eric Schmidt Suggests Countries Could Engage in Mutual Assured AI Malfunction (MAIM)](https://soylentnews.org/article.pl?sid=25/03/26/1629222&from=rss)
* [2025-03-27, 15:55:30](https://news.ycombinator.com/item?id=43494960) - [Fish odor syndrome – A rare metabolic condition that makes sweat smell like fish](https://www.livescience.com/health/viruses-infections-disease/fish-odor-syndrome-a-rare-metabolic-condition-that-makes-sweat-smell-like-rotten-fish)
* [2025-03-27, 13:46:45](https://news.ycombinator.com/item?id=43493611) - [Robotics Meets Runway: Unitree G1's Catwalk Debut at SHFW](https://chinaminutes.com/2025/03/27/robotics-meets-runway-unitree-g1s-catwalk-debut-at-shfw/)
* [2025-03-27, 13:02:00](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss) - [Is Your Job Making You Happy ?](https://soylentnews.org/article.pl?sid=25/03/26/1623212&from=rss)
* [2025-03-27, 08:14:00](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss) - [Chicago-Sized Iceberg Hid Ancient Ecosystem](https://soylentnews.org/article.pl?sid=25/03/26/0319206&from=rss)
* [2025-03-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss) - [EU OS Aims to Free the European Public Sector Desktop](https://soylentnews.org/article.pl?sid=25/03/26/038215&from=rss)
* [2025-03-27, 01:02:00](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss) - [The Search for Missing Plane MH370 is Back on](https://soylentnews.org/article.pl?sid=25/03/26/033246&from=rss)
