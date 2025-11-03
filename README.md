# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances and Issues

* [Xi Quips About Backdoors During Xiaomi Phone Gift To Korea's Lee](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&from=rss)

* [OpenAI Signs $38 Billion Cloud Deal With Amazon](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft Fixes Decade-Old Windows Bug That Made 'Update and Shut Down' Restart PCs](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Artificial Intelligence Developments

* [I analyzed 180M jobs to see what jobs AI is replacing today](https://bloomberry.com/blog/i-analyzed-180m-jobs-to-see-what-jobs-ai-is-actually-replacing-today/)

* [OSS Alternative to Open WebUI – ChatGPT-Like UI, API and CLI](https://github.com/ServiceStack/llms)

* [Bug in Rust-Based Uutils Broke Ubuntu 25.10 Automatic Update Checks](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&from=rss)

* [OpenAI's Sam Altman Defends $1 Trillion+ Spending Commitments, Predicts Steep Revenue Growth, More Products](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Programming and Development

* [C++ move semantics from scratch (2022)](https://cbarrete.com/move-from-scratch.html)

* [Offline Math: Converting LaTeX to SVG with MathJax](https://sigwait.org/~alex/blog/2025/10/07/3t8acq.html)

* [How to Get Meaningful Feedback on Your Design Document](https://refactoringenglish.com/chapters/useful-feedback-on-design-docs/)

* [Announcing cgp-serde: A modular serialization library for Serde powered by Context-Generic Programming](https://contextgeneric.dev/blog/cgp-serde-release/)

* [Abstract Syntax Tree: An Example in C](https://keleshev.com/abstract-syntax-tree-an-example-in-c/)

## Ethical and Social Implications of Technology

* [Grand Theft Auto Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Manufacturer Remotely Bricks Smart Vacuum After Its Owner Blocked It From Collecting Data](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [GoFundMe Created 1.4 Million Donation Pages for Nonprofits Without Their Consent](https://slashdot.org/story/25/11/02/1728231/gofundme-created-14-million-donation-pages-for-nonprofits-without-their-consent?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [New Design Trend: People Downgrading 'Smart' Homes to Analog 'Dumb' Homes, Some with Landlines and Offline Appliances](https://mobile.slashdot.org/story/25/11/02/067245/new-design-trend-people-downgrading-smart-homes-to-analog-dumb-homes-some-with-landlines-and-offline-appliances?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&from=rss)

## Miscellaneous Innovations

* [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)

* [Show HN: a Rust ray tracer that runs on any GPU – even in the browser](https://github.com/tchauffi/rust-rasterizer)

* [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/)

* [ECL Runs Maxima in a Browser](https://mailman3.common-lisp.net/hyperkitty/list/ecl-devel@common-lisp.net/thread/T64S5EMVV6WHDPKWZ3AQHEPO3EQE2K5M/)

* [Writing an Asciidoc Parser in Rust: Asciidocr](https://www.bikesbooksandbullshit.com/bullshit/2025/01/08/writing-an-asciidoc-parser-in-rust.html)

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

* [2025-11-03, 15:23:00](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xi Quips About Backdoors During Xiaomi Phone Gift To Korea&apos;s Lee](https://it.slashdot.org/story/25/11/03/1523219/xi-quips-about-backdoors-during-xiaomi-phone-gift-to-koreas-lee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 15:02:25](https://lobste.rs/s/tqwmbn/cast_x_as_string_casts_integer_sqlite) - [CAST(x AS STRING) casts to integer in SQLite](https://lalitm.com/cast-x-as-string-casts-to-integer-in-sqlite/)
* [2025-11-03, 14:47:00](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Signs $38 Billion Cloud Deal With Amazon](https://slashdot.org/story/25/11/03/1448202/openai-signs-38-billion-cloud-deal-with-amazon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 14:15:23](https://lobste.rs/s/sbrnnl/c_move_semantics_from_scratch_2022) - [C++ move semantics from scratch (2022)](https://cbarrete.com/move-from-scratch.html)
* [2025-11-03, 14:10:57](https://news.ycombinator.com/item?id=45799096) - [Geonum – geometric number library for unlimited dimensions with O(1) complexity](https://github.com/mxfactorial/geonum)
* [2025-11-03, 14:00:00](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Fixes Decade-Old Windows Bug That Made &apos;Update and Shut Down&apos; Restart PCs](https://tech.slashdot.org/story/25/11/03/1249212/microsoft-fixes-decade-old-windows-bug-that-made-update-and-shut-down-restart-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 13:48:39](https://news.ycombinator.com/item?id=45798898) - [The Problem with Farmed Seafood](https://nautil.us/the-problem-with-farmed-seafood-1243674/)
* [2025-11-03, 13:47:27](https://news.ycombinator.com/item?id=45798892) - [A collection of links that existed about Anguilla as of 2003](https://web.ai/)
* [2025-11-03, 13:46:19](https://news.ycombinator.com/item?id=45798881) - [Skyfall-GS – Synthesizing Immersive 3D Urban Scenes from Satellite Imagery](https://skyfall-gs.jayinnn.dev/)
* [2025-11-03, 13:45:15](https://news.ycombinator.com/item?id=45798871) - [Show HN: a Rust ray tracer that runs on any GPU – even in the browser](https://github.com/tchauffi/rust-rasterizer)
* [2025-11-03, 13:40:47](https://news.ycombinator.com/item?id=45798838) - [VimGraph](https://resources.wolframcloud.com/FunctionRepository/resources/VimGraph/)
* [2025-11-03, 13:39:18](https://news.ycombinator.com/item?id=45798827) - [Google suspended my company&apos;s Google cloud account for the third time](https://www.agwa.name/blog/post/google_suspended_sslmates_cloud_account_again)
* [2025-11-03, 13:37:57](https://lobste.rs/s/wtmtx3/how_get_meaningful_feedback_on_your) - [How to Get Meaningful Feedback on Your Design Document](https://refactoringenglish.com/chapters/useful-feedback-on-design-docs/)
* [2025-11-03, 13:31:19](https://lobste.rs/s/mp8rib/prefer_boring_technology) - [Prefer boring technology](https://itwont.work/blog/prefer-boring-technology)
* [2025-11-03, 13:29:17](https://news.ycombinator.com/item?id=45798746) - [Offline Math: Converting LaTeX to SVG with MathJax](https://sigwait.org/~alex/blog/2025/10/07/3t8acq.html)
* [2025-11-03, 13:28:37](https://news.ycombinator.com/item?id=45798741) - [An Illustrated Introduction to Linear Algebra, Chapter 2: The Dot Product](https://www.ducktyped.org/p/linear-algebra-chapter-2-the-dot)
* [2025-11-03, 13:21:09](https://news.ycombinator.com/item?id=45798681) - [Why Nextcloud feels slow to use](https://ounapuu.ee/posts/2025/11/03/nextcloud-slow/)
* [2025-11-03, 13:06:10](https://lobste.rs/s/bbfa6p/announcing_cgp_serde_modular) - [Announcing cgp-serde: A modular serialization library for Serde powered by Context-Generic Programming](https://contextgeneric.dev/blog/cgp-serde-release/)
* [2025-11-03, 12:52:18](https://news.ycombinator.com/item?id=45798489) - [I analyzed 180M jobs to see what jobs AI is replacing today](https://bloomberry.com/blog/i-analyzed-180m-jobs-to-see-what-jobs-ai-is-actually-replacing-today/)
* [2025-11-03, 12:50:27](https://news.ycombinator.com/item?id=45798479) - [The Case Against PGVector](https://alex-jacobs.com/posts/the-case-against-pgvector/)
* [2025-11-03, 12:43:00](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 12:27:46](https://lobste.rs/s/neu41n/soiree_into_symbols_ruby) - [A Soiree into Symbols in Ruby](https://tech.stonecharioteer.com/posts/2025/ruby-symbols/)
* [2025-11-03, 12:18:50](https://lobste.rs/s/2eofir/a11y_css) - [a11y.css](https://ffoodd.github.io/a11y.css/)
* [2025-11-03, 12:05:28](https://news.ycombinator.com/item?id=45798193) - [OSS Alternative to Open WebUI – ChatGPT-Like UI, API and CLI](https://github.com/ServiceStack/llms)
* [2025-11-03, 11:22:59](https://news.ycombinator.com/item?id=45797934) - [Update and shut down no longer restarts PC, 25H2 patch addresses decades-old bug](https://www.windowslatest.com/2025/11/02/update-and-shut-down-no-longer-restarts-pc-as-windows-11-25h2-patch-addresses-a-decades-old-bug/)
* [2025-11-03, 10:47:29](https://lobste.rs/s/wca9sz/cure_verification_first_programming_for) - [Cure - Verification-First Programming for the BEAM](https://cure-lang.org/)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 09:24:39](https://lobste.rs/s/7rhkpy/absurd_workflows_durable_execution_with) - [Absurd Workflows: Durable Execution With Just Postgres](https://lucumr.pocoo.org/2025/11/3/absurd-workflows)
* [2025-11-03, 09:20:01](https://news.ycombinator.com/item?id=45797242) - [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/)
* [2025-11-03, 08:53:00](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grand Theft Auto&apos; Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 06:43:41](https://lobste.rs/s/wiokzi/don_t_give_postgres_too_much_memory) - [Don&apos;t give Postgres too much memory](https://vondra.me/posts/dont-give-postgres-too-much-memory/)
* [2025-11-03, 06:30:45](https://lobste.rs/s/j8dni3/why_don_t_you_use_dependent_types) - [\&quot;Why don&apos;t you use dependent types?\&quot;](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-03, 06:21:20](https://news.ycombinator.com/item?id=45796351) - [ECL Runs Maxima in a Browser](https://mailman3.common-lisp.net/hyperkitty/list/ecl-devel@common-lisp.net/thread/T64S5EMVV6WHDPKWZ3AQHEPO3EQE2K5M/)
* [2025-11-03, 05:53:00](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Gamers on Steam Finally Cross Over the 3% Mark](https://linux.slashdot.org/story/25/11/03/048228/linux-gamers-on-steam-finally-cross-over-the-3-mark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 05:48:00](https://lobste.rs/s/zsoyox/abstract_syntax_tree_example_c) - [Abstract Syntax Tree: An Example in C](https://keleshev.com/abstract-syntax-tree-an-example-in-c/)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 04:47:06](https://lobste.rs/s/cm7yfi/setting_up_very_simple_home_router_with) - [Setting up a very simple home router with OpenBSD](https://www.blog.montgomerie.net/posts/2025-10-11-setting-up-a-very-simple-but-ipv6-capable-home-router-with-openbsd-7.7/)
* [2025-11-03, 03:53:00](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Sam Altman Defends $1 Trillion+ Spending Commitments, Predicts Steep Revenue Growth, More Products](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 03:13:46](https://news.ycombinator.com/item?id=45795511) - [Oxy is Cloudflare&apos;s Rust-based next generation proxy framework (2023)](https://blog.cloudflare.com/introducing-oxy/)
* [2025-11-03, 02:50:44](https://lobste.rs/s/tbdvn9/control_structures_programming) - [Control structures in programming languages](http://xavierleroy.org/control-structures/)
* [2025-11-03, 02:34:00](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Manufacturer Remotely Bricks Smart Vacuum After Its Owner Blocked It From Collecting Data](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 01:28:47](https://lobste.rs/s/wjlvlz/monster_splash_double_hires_demo_for) - [\&quot;Monster Splash\&quot; a double-hires demo for Apple IIe](http://www.deater.net/weave/vmwprod/monstersplash/)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-03, 00:52:00](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bug in Rust-Based Uutils Broke Ubuntu 25.10 Automatic Update Checks](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 00:49:56](https://lobste.rs/s/tthzlh/using_assisted_by_commit_footers_instead) - [Using Assisted-by commit footers instead of banning AI tools](https://xeiaso.net/notes/2025/assisted-by-footer/)
* [2025-11-02, 23:58:21](https://lobste.rs/s/ri4vd2/homotopy_type_theory_for_dummies) - [Homotopy Type Theory for Dummies](http://www.chriswarbo.net/blog/2015-09-11-hott_for_dummies.html)
* [2025-11-02, 23:51:03](https://lobste.rs/s/q7wvs1/i_ing_hate_science_2021) - [I ****ing hate Science (2021)](https://buttondown.com/hillelwayne/archive/i-ing-hate-science/)
* [2025-11-02, 23:40:00](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Announces &apos;Agent HQ&apos;, Letting Copilot Subscribers Run and Manage Coding Agents from Multiple Vendors](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 22:52:04](https://lobste.rs/s/gig2wt/you_don_t_need_anubis) - [You don&apos;t need anubis](https://fxgn.dev/blog/anubis/)
* [2025-11-02, 21:55:03](https://lobste.rs/s/k4shdv/skeena_indigenous_typeface) - [Skeena Indigenous Typeface](https://microsoft.github.io/Skeena-Indigenous-Typeface/)
* [2025-11-02, 21:10:56](https://lobste.rs/s/xtfzxb/making_easy_install_application_python) - [Making an Easy-to-Install Application in Python](https://gokmengorgen.net/2025/11/02/making-an-easy-to-install-application-in-python/)
* [2025-11-02, 21:08:15](https://news.ycombinator.com/item?id=45793466) - [Paris had a moving sidewalk in 1900, and a Thomas Edison film captured it (2020)](https://www.openculture.com/2020/03/paris-had-a-moving-sidewalk-in-1900.html)
* [2025-11-02, 20:40:54](https://news.ycombinator.com/item?id=45793244) - [Alleged Jabber Zeus Coder &apos;MrICQ&apos; in U.S. Custody](https://krebsonsecurity.com/2025/11/alleged-jabber-zeus-coder-mricq-in-u-s-custody/)
* [2025-11-02, 20:34:00](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Becoming &apos;Too Big to Fail&apos;?](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 19:34:00](https://news.slashdot.org/story/25/11/02/1758252/sound-blaster-crowdfunds-linux-powered-audio-hub-reimagine-for-creators-and-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sound Blaster Crowdfunds Linux-Powered Audio Hub &apos;Re:Imagine&apos; For Creators and Gamers](https://news.slashdot.org/story/25/11/02/1758252/sound-blaster-crowdfunds-linux-powered-audio-hub-reimagine-for-creators-and-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 19:02:40](https://lobste.rs/s/f3oge4/awk_technical_notes_2023) - [AWK technical notes (2023)](https://maximullaris.com/awk_tech_notes.html)
* [2025-11-02, 18:34:00](https://slashdot.org/story/25/11/02/1728231/gofundme-created-14-million-donation-pages-for-nonprofits-without-their-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GoFundMe Created 1.4 Million Donation Pages for Nonprofits Without Their Consent](https://slashdot.org/story/25/11/02/1728231/gofundme-created-14-million-donation-pages-for-nonprofits-without-their-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 17:34:00](https://news.slashdot.org/story/25/11/02/0134230/amazons-deployment-of-rivians-electric-delivery-vans-expand-to-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Deployment of Rivian&apos;s Electric Delivery Vans Expand to Canada](https://news.slashdot.org/story/25/11/02/0134230/amazons-deployment-of-rivians-electric-delivery-vans-expand-to-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 16:34:00](https://mobile.slashdot.org/story/25/11/02/067245/new-design-trend-people-downgrading-smart-homes-to-analog-dumb-homes-some-with-landlines-and-offline-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Design Trend: People Downgrading &apos;Smart&apos; Homes to Analog &apos;Dumb&apos; Homes, Some with Landlines and Offline Appliances](https://mobile.slashdot.org/story/25/11/02/067245/new-design-trend-people-downgrading-smart-homes-to-analog-dumb-homes-some-with-landlines-and-offline-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 15:10:45](https://lobste.rs/s/uwyfpy/build_system_tradeoffs) - [build system tradeoffs](https://jyn.dev/build-system-tradeoffs)
* [2025-11-02, 15:06:36](https://news.ycombinator.com/item?id=45790827) - [Why don&apos;t you use dependent types?](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-02, 13:12:30](https://lobste.rs/s/ug6vbv/prison_my_own_making) - [A prison of my own making](https://jsteuernagel.de/posts/a-prison-of-my-own-making/)
* [2025-11-02, 12:29:18](https://lobste.rs/s/zc73xh/notes_by_djb_on_using_fil_c) - [Notes by djb on using Fil-C](https://cr.yp.to/2025/fil-c.html)
* [2025-11-02, 11:01:23](https://news.ycombinator.com/item?id=45789424) - [Using FreeBSD to make self-hosting fun again](https://jsteuernagel.de/posts/using-freebsd-to-make-self-hosting-fun-again/)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 02:27:44](https://news.ycombinator.com/item?id=45787403) - [Writing an Asciidoc Parser in Rust: Asciidocr](https://www.bikesbooksandbullshit.com/bullshit/2025/01/08/writing-an-asciidoc-parser-in-rust.html)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 16:39:05](https://news.ycombinator.com/item?id=45783074) - [WebAssembly (WASM) arch support for the Linux kernel](https://github.com/joelseverin/linux-wasm)
* [2025-11-01, 15:55:00](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss) - [Nvidia Reveals Vera Rubin Superchip for the First Time](https://soylentnews.org/article.pl?sid=25/10/31/1847233&amp;from=rss)
* [2025-11-01, 11:11:00](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss) - [ICE and CBP Agents Are Scanning Peoples’ Faces on the Street to Verify Citizenship](https://soylentnews.org/article.pl?sid=25/10/31/1242232&amp;from=rss)
* [2025-11-01, 06:27:00](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss) - [Nearly 90% of Windows Games Now Run on Linux](https://soylentnews.org/article.pl?sid=25/10/31/1238201&amp;from=rss)
* [2025-11-01, 01:41:00](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss)
* [2025-10-31, 20:57:00](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss) - [Tor Browser 15.0 Anonymous Web Browser Is Out Based on Firefox 140 ESR Series](https://soylentnews.org/article.pl?sid=25/10/30/1428231&amp;from=rss)
* [2025-10-31, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss) - [Red Hat and Other Distros to Provide Easy Access to NVIDIA CUDA Tools](https://soylentnews.org/article.pl?sid=25/10/30/1156208&amp;from=rss)
* [2025-10-31, 15:49:21](https://news.ycombinator.com/item?id=45773421) - [The Arduino Uno Q is a weird hybrid SBC](https://www.jeffgeerling.com/blog/2025/arduino-uno-q-weird-hybrid-sbc)
* [2025-10-31, 11:25:00](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss) - [Deep Antarctic Waters Hold Geometric Communities of Fish Nests](https://soylentnews.org/article.pl?sid=25/10/30/0038222&amp;from=rss)
* [2025-10-31, 06:36:00](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss) - [China Submerges a Data Center in the Ocean to Conserve Water, is That Even a Good Idea?](https://soylentnews.org/article.pl?sid=25/10/30/0034203&amp;from=rss)
* [2025-10-31, 01:42:00](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss) - [US EV Sales Will Collapse 60% In October, J.D. Power Forecasts](https://soylentnews.org/article.pl?sid=25/10/30/0024205&amp;from=rss)
* [2025-10-30, 21:00:00](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss) - [AI-Powered Search Engines Rely on “Less Popular” Sources, Researchers Find](https://soylentnews.org/article.pl?sid=25/10/29/1336246&amp;from=rss)
* [2025-10-30, 16:31:55](https://news.ycombinator.com/item?id=45761894) - [Recantha&apos;s Tiny Toolkit](https://tinytoolk.it/toolkits/recantha-kit/)
* [2025-10-30, 16:12:00](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss) - [Fedora Linux 43 Officially Released, Now Available for Download](https://soylentnews.org/article.pl?sid=25/10/29/1333243&amp;from=rss)
* [2025-10-30, 14:15:00](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss) - [Trial of Journal Flagging - Analysis and Actions](https://soylentnews.org/meta/article.pl?sid=25/10/28/1721210&amp;from=rss)
* [2025-10-30, 11:29:00](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss) - [Westinghouse is Claiming a Nuclear Deal Would See $80B of New Reactors](https://soylentnews.org/article.pl?sid=25/10/29/1330210&amp;from=rss)
* [2025-10-30, 06:45:00](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss) - [Senators Move to Keep Big Tech&apos;s Creepy Companion Bots Away From Kids](https://soylentnews.org/article.pl?sid=25/10/29/1326223&amp;from=rss)
* [2025-10-30, 02:02:00](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss) - [Windows 11 Adds Dark Mode Dialogs for Run and Folder Options](https://soylentnews.org/article.pl?sid=25/10/29/1242215&amp;from=rss)
