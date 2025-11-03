# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Technology Innovations

* [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The versatility of Linux expands as it successfully boots within a browser using WebAssembly technology.

* [Writing an Asciidoc Parser in Rust: Asciidocr](https://www.bikesbooksandbullshit.com/bullshit/2025/01/08/writing-an-asciidoc-parser-in-rust.html) - Exploring the creation of an Asciidoc parser utilizing the Rust programming language.

* [Syllabi – Open-source agentic AI with tools, RAG, and multi-channel deploy](https://www.syllabi-ai.com/) - Open-source AI platform leveraging agentic models and diverse tools for deployment.

* [Bug in Rust-Based Uutils Broke Ubuntu 25.10 Automatic Update Checks](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critical issue in Rust-based utilities disrupting Ubuntu's update mechanisms.

## Advancements in AI and Robotics

* [Manufacturer Remotely Bricks Smart Vacuum After Its Owner Blocked It From Collecting Data](https://yro.slashdot.org/story/25/11/02/2241201/manufacturer-remotely-bricks-smart-vacuum-after-its-owner-blocked-it-from-collecting-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ethical concerns arise as manufacturers restrict user control over connected devices.

* [GitHub Announces 'Agent HQ', Letting Copilot Subscribers Run and Manage Coding Agents from Multiple Vendors](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - GitHub unveils a new feature allowing enhanced management of coding agents.

## Security and Encryption Concerns

* [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - A significant rise in NFC relay malware targeting financial theft in Europe.

* [Is Your Bluetooth Chip Leaking Secrets via RF Signals?](https://www.semanticscholar.org/paper/Is-Your-Bluetooth-Chip-Leaking-Secrets-via-RF-Ji-Dubrova/c1d3ceb47ea6f9cc4f29929e2f97d36862a260a2) - Research uncovering potential vulnerabilities in Bluetooth chips that could lead to data exposure.

* [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - A newly disclosed Linux flaw being manipulated by ransomware groups.

## Economic and Industry Shifts

* [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - Nvidia hits historical milestones amidst skepticism about the AI industry's sustainability.

* [OpenAI's Sam Altman Defends $1 Trillion+ Spending Commitments, Predicts Steep Revenue Growth, More Products](https://slashdot.org/story/25/11/03/0349255/openais-sam-altman-defends-1-trillion-spending-commitments-predicts-steep-revenue-growth-more-products?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI leadership projects significant growth and financial strides despite rising concerns.

## Unique Historical Stories and Thought Pieces

* [Paris had a moving sidewalk in 1900, and a Thomas Edison film captured it (2020)](https://www.openculture.com/2020/03/paris-had-a-moving-sidewalk-in-1900.html) - A rare anecdote revisiting early technological wonders through archival footage.

* [Quantum Mechanics Trumps the Second Law of Thermodynamics at the Atomic Scale](https://soylentnews.org/article.pl?sid=25/10/31/1232227&amp;from=rss) - New atomic-scale breakthroughs challenge classical laws of thermodynamics.

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

* [2025-11-03, 12:43:00](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Ported to WebAssembly, Boots in a Browser Tab](https://linux.slashdot.org/story/25/11/03/0610234/linux-ported-to-webassembly-boots-in-a-browser-tab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 12:27:46](https://lobste.rs/s/neu41n/soiree_into_symbols_ruby) - [A Soiree into Symbols in Ruby](https://tech.stonecharioteer.com/posts/2025/ruby-symbols/)
* [2025-11-03, 12:18:50](https://lobste.rs/s/2eofir/a11y_css) - [a11y.css](https://ffoodd.github.io/a11y.css/)
* [2025-11-03, 11:22:59](https://news.ycombinator.com/item?id=45797934) - [Update and shut down no longer restarts PC, 25H2 patch addresses decades-old bug](https://www.windowslatest.com/2025/11/02/update-and-shut-down-no-longer-restarts-pc-as-windows-11-25h2-patch-addresses-a-decades-old-bug/)
* [2025-11-03, 11:18:36](https://lobste.rs/s/cj8v8g/writing_asciidoc_parser_rust_asciidocr) - [Writing an Asciidoc Parser in Rust: Asciidocr](https://www.bikesbooksandbullshit.com/bullshit/2025/01/08/writing-an-asciidoc-parser-in-rust.html)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 09:24:39](https://lobste.rs/s/7rhkpy/absurd_workflows_durable_execution_with) - [Absurd Workflows: Durable Execution With Just Postgres](https://lucumr.pocoo.org/2025/11/3/absurd-workflows)
* [2025-11-03, 09:20:01](https://news.ycombinator.com/item?id=45797242) - [Tiny electric motor can produce more than 1,000 horsepower](https://supercarblondie.com/electric-motor-yasa-more-powerful-tesla-mercedes/)
* [2025-11-03, 08:53:00](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grand Theft Auto&apos; Studio Accused of Union Busting After Firing Dozens](https://games.slashdot.org/story/25/11/03/0542221/grand-theft-auto-studio-accused-of-union-busting-after-firing-dozens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 07:54:52](https://lobste.rs/s/unnblr/apm_paradox_too_much_data_too_few_answers) - [The APM paradox: Too much data, too few answers](https://www.honeybadger.io/blog/apm-paradox/)
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
* [2025-11-03, 01:59:07](https://news.ycombinator.com/item?id=45795186) - [Syllabi – Open-source agentic AI with tools, RAG, and multi-channel deploy](https://www.syllabi-ai.com/)
* [2025-11-03, 01:28:47](https://lobste.rs/s/wjlvlz/monster_splash_double_hires_demo_for) - [\&quot;Monster Splash\&quot; a double-hires demo for Apple IIe](http://www.deater.net/weave/vmwprod/monstersplash/)
* [2025-11-03, 01:27:48](https://news.ycombinator.com/item?id=45795036) - [Simple trick to increase coverage: Lying to users about signal strength](https://nickvsnetworking.com/simple-trick-to-increase-coverage-lying-to-users-about-signal-strength/)
* [2025-11-03, 01:20:07](https://lobste.rs/s/ia2pn6/software_substrates_should_there_be_only) - [Software substrates: should there be only one?](https://www.humprog.org/~stephen/blog/research/substrates-should-there-be-only-one.html)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-03, 00:52:00](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bug in Rust-Based Uutils Broke Ubuntu 25.10 Automatic Update Checks](https://news.slashdot.org/story/25/11/03/0049215/bug-in-rust-based-uutils-broke-ubuntu-2510-automatic-update-checks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-03, 00:49:56](https://lobste.rs/s/tthzlh/using_assisted_by_commit_footers_instead) - [Using Assisted-by commit footers instead of banning AI tools](https://xeiaso.net/notes/2025/assisted-by-footer/)
* [2025-11-02, 23:58:21](https://lobste.rs/s/ri4vd2/homotopy_type_theory_for_dummies) - [Homotopy Type Theory for Dummies](http://www.chriswarbo.net/blog/2015-09-11-hott_for_dummies.html)
* [2025-11-02, 23:51:03](https://lobste.rs/s/q7wvs1/i_ing_hate_science_2021) - [I ****ing hate Science (2021)](https://buttondown.com/hillelwayne/archive/i-ing-hate-science/)
* [2025-11-02, 23:40:00](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Announces &apos;Agent HQ&apos;, Letting Copilot Subscribers Run and Manage Coding Agents from Multiple Vendors](https://developers.slashdot.org/story/25/11/02/2337254/github-announces-agent-hq-letting-copilot-subscribers-run-and-manage-coding-agents-from-multiple-vendors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 23:11:22](https://news.ycombinator.com/item?id=45794245) - [New prompt injection papers: Agents rule of two and the attacker moves second](https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/)
* [2025-11-02, 22:52:04](https://lobste.rs/s/gig2wt/you_don_t_need_anubis) - [You don&apos;t need anubis](https://fxgn.dev/blog/anubis/)
* [2025-11-02, 22:50:03](https://lobste.rs/s/7si4dt/nostr_is_deceptively_tricky_understand) - [Nostr is deceptively tricky to understand](https://njump.me/nevent1qqsgnyzctjwpqkgqyvp2tl0megdf5dvrfgqgug6u83k396y0d2uj3qgzyp02geyqgka3lu3zv4wa6dhxmnkacs6epsnqjrzgd0hn3m69pkjm68v4ydt)
* [2025-11-02, 22:32:42](https://news.ycombinator.com/item?id=45794032) - [Facts about throwing good parties](https://www.atvbt.com/21-facts-about-throwing-good-parties/)
* [2025-11-02, 21:55:03](https://lobste.rs/s/k4shdv/skeena_indigenous_typeface) - [Skeena Indigenous Typeface](https://microsoft.github.io/Skeena-Indigenous-Typeface/)
* [2025-11-02, 21:35:02](https://news.ycombinator.com/item?id=45793652) - [FurtherAI (YC W24) Is Hiring Across Software and AI](https://news.ycombinator.com/item?id=45793652)
* [2025-11-02, 21:10:56](https://lobste.rs/s/xtfzxb/making_easy_install_application_python) - [Making an Easy-to-Install Application in Python](https://gokmengorgen.net/2025/11/02/making-an-easy-to-install-application-in-python/)
* [2025-11-02, 21:08:15](https://news.ycombinator.com/item?id=45793466) - [Paris had a moving sidewalk in 1900, and a Thomas Edison film captured it (2020)](https://www.openculture.com/2020/03/paris-had-a-moving-sidewalk-in-1900.html)
* [2025-11-02, 20:40:54](https://news.ycombinator.com/item?id=45793244) - [Alleged Jabber Zeus Coder &apos;MrICQ&apos; in U.S. Custody](https://krebsonsecurity.com/2025/11/alleged-jabber-zeus-coder-mricq-in-u-s-custody/)
* [2025-11-02, 20:34:00](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is OpenAI Becoming &apos;Too Big to Fail&apos;?](https://slashdot.org/story/25/11/02/1945203/is-openai-becoming-too-big-to-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 20:20:00](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss) - [Meta: Pirated Adult Film Downloads Were For “Personal Use,” Not AI Training](https://soylentnews.org/article.pl?sid=25/11/01/1849207&amp;from=rss)
* [2025-11-02, 19:34:00](https://news.slashdot.org/story/25/11/02/1758252/sound-blaster-crowdfunds-linux-powered-audio-hub-reimagine-for-creators-and-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sound Blaster Crowdfunds Linux-Powered Audio Hub &apos;Re:Imagine&apos; For Creators and Gamers](https://news.slashdot.org/story/25/11/02/1758252/sound-blaster-crowdfunds-linux-powered-audio-hub-reimagine-for-creators-and-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 19:05:32](https://news.ycombinator.com/item?id=45792579) - [Lisp: Notes on its Past and Future (1980)](https://www-formal.stanford.edu/jmc/lisp20th/lisp20th.html)
* [2025-11-02, 19:02:40](https://lobste.rs/s/f3oge4/awk_technical_notes_2023) - [AWK technical notes (2023)](https://maximullaris.com/awk_tech_notes.html)
* [2025-11-02, 18:37:38](https://news.ycombinator.com/item?id=45792373) - [Reproducing the AWS Outage Race Condition with a Model Checker](https://wyounas.github.io/aws/concurrency/2025/10/30/reproducing-the-aws-outage-race-condition-with-model-checker/)
* [2025-11-02, 18:34:00](https://slashdot.org/story/25/11/02/1728231/gofundme-created-14-million-donation-pages-for-nonprofits-without-their-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GoFundMe Created 1.4 Million Donation Pages for Nonprofits Without Their Consent](https://slashdot.org/story/25/11/02/1728231/gofundme-created-14-million-donation-pages-for-nonprofits-without-their-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 18:06:15](https://news.ycombinator.com/item?id=45792166) - [Is Your Bluetooth Chip Leaking Secrets via RF Signals?](https://www.semanticscholar.org/paper/Is-Your-Bluetooth-Chip-Leaking-Secrets-via-RF-Ji-Dubrova/c1d3ceb47ea6f9cc4f29929e2f97d36862a260a2)
* [2025-11-02, 17:34:00](https://news.slashdot.org/story/25/11/02/0134230/amazons-deployment-of-rivians-electric-delivery-vans-expand-to-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Deployment of Rivian&apos;s Electric Delivery Vans Expand to Canada](https://news.slashdot.org/story/25/11/02/0134230/amazons-deployment-of-rivians-electric-delivery-vans-expand-to-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 16:34:00](https://mobile.slashdot.org/story/25/11/02/067245/new-design-trend-people-downgrading-smart-homes-to-analog-dumb-homes-some-with-landlines-and-offline-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Design Trend: People Downgrading &apos;Smart&apos; Homes to Analog &apos;Dumb&apos; Homes, Some with Landlines and Offline Appliances](https://mobile.slashdot.org/story/25/11/02/067245/new-design-trend-people-downgrading-smart-homes-to-analog-dumb-homes-some-with-landlines-and-offline-appliances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 15:39:00](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss) - [CISA: High-Severity Linux Flaw Now Exploited by Ransomware Gangs](https://soylentnews.org/article.pl?sid=25/11/01/1652253&amp;from=rss)
* [2025-11-02, 15:34:00](https://tech.slashdot.org/story/25/11/01/0514222/do-ai-browsers-exist-for-you---or-to-give-ai-companies-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do AI Browsers Exist For You - or To Give AI Companies Data?](https://tech.slashdot.org/story/25/11/01/0514222/do-ai-browsers-exist-for-you---or-to-give-ai-companies-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 15:10:45](https://lobste.rs/s/uwyfpy/build_system_tradeoffs) - [build system tradeoffs](https://jyn.dev/build-system-tradeoffs)
* [2025-11-02, 15:06:36](https://news.ycombinator.com/item?id=45790827) - [Why don&apos;t you use dependent types?](https://lawrencecpaulson.github.io//2025/11/02/Why-not-dependent.html)
* [2025-11-02, 13:12:30](https://lobste.rs/s/ug6vbv/prison_my_own_making) - [A prison of my own making](https://jsteuernagel.de/posts/a-prison-of-my-own-making/)
* [2025-11-02, 13:07:31](https://news.ycombinator.com/item?id=45790015) - [X.org Security Advisory: multiple security issues X.Org X server and Xwayland](https://lists.x.org/archives/xorg-announce/2025-October/003635.html)
* [2025-11-02, 12:34:00](https://yro.slashdot.org/story/25/11/01/2359245/woman-wrongfully-accused-by-a-license-plate-reading-camera---then-exonerated-by-camera-equipped-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Woman Wrongfully Accused by a License Plate-Reading Camera - Then Exonerated By Camera-Equipped Car](https://yro.slashdot.org/story/25/11/01/2359245/woman-wrongfully-accused-by-a-license-plate-reading-camera---then-exonerated-by-camera-equipped-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 12:29:18](https://lobste.rs/s/zc73xh/notes_by_djb_on_using_fil_c) - [Notes by djb on using Fil-C](https://cr.yp.to/2025/fil-c.html)
* [2025-11-02, 11:43:26](https://news.ycombinator.com/item?id=45789602) - [Tongyi DeepResearch – open-source 30B MoE Model that rivals OpenAI DeepResearch](https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/)
* [2025-11-02, 11:12:58](https://news.ycombinator.com/item?id=45789474) - [URLs are state containers](https://alfy.blog/2025/10/31/your-url-is-your-state.html)
* [2025-11-02, 11:01:23](https://news.ycombinator.com/item?id=45789424) - [Using FreeBSD to make self-hosting fun again](https://jsteuernagel.de/posts/using-freebsd-to-make-self-hosting-fun-again/)
* [2025-11-02, 10:58:36](https://lobste.rs/s/raa8r6/using_freebsd_make_self_hosting_fun_again) - [Using FreeBSD to make self-hosting fun again](https://jsteuernagel.de/posts/using-freebsd-to-make-self-hosting-fun-again/)
* [2025-11-02, 10:56:00](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss) - [Bonfire of the Vanities](https://soylentnews.org/article.pl?sid=25/11/01/1648226&amp;from=rss)
* [2025-11-02, 08:34:00](https://yro.slashdot.org/story/25/11/02/0626222/daylight-saving-time-still-happening-still-unpopular?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Saving Time:  Still Happening. Still Unpopular](https://yro.slashdot.org/story/25/11/02/0626222/daylight-saving-time-still-happening-still-unpopular?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-02, 06:07:00](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss) - [Spinning Up an Onion Mirror is Stupid Easy](https://soylentnews.org/article.pl?sid=25/11/01/1239234&amp;from=rss)
* [2025-11-02, 01:26:00](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss) - [‘Spaceballs 2’ Starts Production](https://soylentnews.org/article.pl?sid=25/10/31/1858243&amp;from=rss)
* [2025-11-01, 20:39:00](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss) - [China Releases &apos;UBIOS&apos; Standard to Replace UEFI](https://soylentnews.org/article.pl?sid=25/10/31/1854228&amp;from=rss)
* [2025-11-01, 19:29:47](https://lobste.rs/s/8txnkh/port_linux_webassembly) - [Port of Linux to WebAssembly](https://lore.kernel.org/lkml/618f3602-03aa-46a8-b2d4-3c9798c4cd2b@icemanor.se/)
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
