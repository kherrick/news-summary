# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Challenges

* [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)) - A glimpse into an innovative approach to fusion with a reactor that melds advanced physics and steampunk aesthetics.

* [Chinese Hackers Sat Undetected in Small Massachusetts Power Utility for Months](https://it.slashdot.org/story/25/03/13/229240/chinese-hackers-sat-undetected-in-small-massachusetts-power-utility-for-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43358947)) - A serious cybersecurity breach illustrates vulnerabilities in critical infrastructure.

* [Tesla Cybertruck deliveries on hold as trims are flying off 'bulletproof' truck](https://electrek.co/2025/03/13/tesla-cybertruck-deliveries-are-on-hold-as-trims-are-flying-off-the-bulletproof-truck/) ([comments](https://news.ycombinator.com/item?id=43361038)) - Tesla faces unexpected engineering challenges with their futuristic Cybertruck.

## Programming and Software Tools

* [I-cant-believe-its-not-webusb: Hacking around lack of WebUSB support in Firefox](https://github.com/ArcaneNibble/i-cant-believe-its-not-webusb) ([comments](https://news.ycombinator.com/item?id=43360642)) - A creative way to overcome Firefox's limitations on WebUSB support.

* [coq-of-rust: Formal verification tool for Rust](https://github.com/formal-land/coq-of-rust) ([comments](https://lobste.rs/s/lomwgf/coq_rust_formal_verification_tool_for)) - A tooling milestone enabling Rust developers to prove their code correctness.

* [ArkFlow – High-performance Rust stream processing engine](https://github.com/chenquan/arkflow) ([comments](https://news.ycombinator.com/item?id=43358682)) - High-performance data streaming made simpler with Rust.

## Scientific Insights and Space

* [Mars' Middle Atmosphere Appears Driven By Gravity Waves](https://science.slashdot.org/story/25/03/13/2334233/mars-middle-atmosphere-appears-driven-by-gravity-waves?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43360024)) - New findings about atmospheric behavior on Mars shed light on planetary sciences.

* [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) ([comments](https://news.ycombinator.com/item?id=43349385)) - Astronomers identify stars composed entirely of primordial elements from the early universe.

## Cybersecurity and Ethics

* [Recursion kills: The story behind CVE-2024-8176 / Expat 2.7.0 released, includes security fixes](https://blog.hartwork.org/posts/expat-2-7-0-released/) ([comments](https://lobste.rs/s/ve6gyy/recursion_kills_story_behind_cve_2024)) - A security update highlights the risks of unchecked software recursion.

* [Anthropic CEO Floats Idea of Giving AI a 'Quit Job' Button](https://slashdot.org/story/25/03/13/2038219/anthropic-ceo-floats-idea-of-giving-ai-a-quit-job-button?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43357687)) - A thought-provoking proposal for more ethical AI frameworks.

## Historical and Mathematical Curiosities

* [How Pi Almost Wasn't](https://mathenchant.wordpress.com/2025/03/13/how-pi-almost-wasnt/) ([comments](https://news.ycombinator.com/item?id=43358003)) - The fascinating near-misses in the history of one of mathematics' fundamental constants.

* [The Lost Art of Logarithms](https://www.lostartoflogarithms.com/) ([comments](https://news.ycombinator.com/item?id=43356314)) - Rediscovering a pivotal tool in the history of computation.

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

* [2025-03-14, 09:58:09](https://news.ycombinator.com/item?id=43361038) - [Tesla Cybertruck deliveries on hold as trims are flying off 'bulletproof' truck](https://electrek.co/2025/03/13/tesla-cybertruck-deliveries-are-on-hold-as-trims-are-flying-off-the-bulletproof-truck/)
* [2025-03-14, 09:23:58](https://news.ycombinator.com/item?id=43360894) - [AMD's Strix Halo – Under the Hood](https://chipsandcheese.com/p/amds-strix-halo-under-the-hood)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 08:36:08](https://news.ycombinator.com/item?id=43360642) - [I-cant-believe-its-not-webusb: Hacking around lack of WebUSB support in Firefox](https://github.com/ArcaneNibble/i-cant-believe-its-not-webusb)
* [2025-03-14, 08:33:52](https://lobste.rs/s/ix1yqo/i_cant_believe_its_not_webusb_hacking) - [i-cant-believe-its-not-webusb: Hacking around lack of WebUSB support in Firefox](https://github.com/ArcaneNibble/i-cant-believe-its-not-webusb)
* [2025-03-14, 08:32:49](https://lobste.rs/s/lomwgf/coq_rust_formal_verification_tool_for) - [coq-of-rust: Formal verification tool for Rust](https://github.com/formal-land/coq-of-rust)
* [2025-03-14, 07:09:00](https://lobste.rs/s/ve6gyy/recursion_kills_story_behind_cve_2024) - [Recursion kills: The story behind CVE-2024-8176 / Expat 2.7.0 released, includes security fixes](https://blog.hartwork.org/posts/expat-2-7-0-released/)
* [2025-03-14, 07:00:00](https://science.slashdot.org/story/25/03/13/2334233/mars-middle-atmosphere-appears-driven-by-gravity-waves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mars' Middle Atmosphere Appears Driven By Gravity Waves](https://science.slashdot.org/story/25/03/13/2334233/mars-middle-atmosphere-appears-driven-by-gravity-waves?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 06:07:55](https://news.ycombinator.com/item?id=43360024) - [Ex-Facebook director's new book paints brutal image of Mark Zuckerberg](https://www.sfgate.com/tech/article/ex-facebook-director-book-brutal-image-zuckerberg-20220239.php)
* [2025-03-14, 05:25:45](https://lobste.rs/s/m1ngf0/memory_corruption_delphi) - [Memory Corruption in Delphi](https://blog.includesecurity.com/2025/03/memory-corruption-in-delphi/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 03:30:00](https://science.slashdot.org/story/25/03/13/2324251/nasa-yale-and-stanford-scientists-consider-scientific-exile?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NASA, Yale, and Stanford Scientists Consider 'Scientific Exile'](https://science.slashdot.org/story/25/03/13/2324251/nasa-yale-and-stanford-scientists-consider-scientific-exile?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 02:12:11](https://news.ycombinator.com/item?id=43358980) - [TinyKVM: Fast sandbox that runs on top of Varnish](https://info.varnish-software.com/blog/tinykvm-the-fastest-sandbox)
* [2025-03-14, 02:02:00](https://it.slashdot.org/story/25/03/13/229240/chinese-hackers-sat-undetected-in-small-massachusetts-power-utility-for-months?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chinese Hackers Sat Undetected in Small Massachusetts Power Utility for Months](https://it.slashdot.org/story/25/03/13/229240/chinese-hackers-sat-undetected-in-small-massachusetts-power-utility-for-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 02:00:35](https://news.ycombinator.com/item?id=43358947) - [The Church FAQ](https://whatever.scalzi.com/2025/03/13/the-church-faq/)
* [2025-03-14, 01:25:00](https://news.slashdot.org/story/25/03/13/2156226/yale-suspends-palestine-activist-after-ai-article-linked-her-to-terrorism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Yale Suspends Palestine Activist After AI Article Linked Her To Terrorism](https://news.slashdot.org/story/25/03/13/2156226/yale-suspends-palestine-activist-after-ai-article-linked-her-to-terrorism?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 00:58:29](https://news.ycombinator.com/item?id=43358682) - [ArkFlow – High-performance Rust stream processing engine](https://github.com/chenquan/arkflow)
* [2025-03-14, 00:45:58](https://news.ycombinator.com/item?id=43358628) - [The 2008 coal ash disaster in Kingston, Tennessee](https://oxfordamerican.org/oa-now/the-toxic-wave-that-swallowed-a-tennessee-town)
* [2025-03-14, 00:45:00](https://tech.slashdot.org/story/25/03/13/2149238/as-chromecast-outage-drags-on-fix-could-be-days-to-weeks-away?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [As Chromecast Outage Drags On, Fix Could Be Days To Weeks Away](https://tech.slashdot.org/story/25/03/13/2149238/as-chromecast-outage-drags-on-fix-could-be-days-to-weeks-away?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 00:02:00](https://tech.slashdot.org/story/25/03/13/2056224/meta-plans-to-test-and-tinker-with-xs-community-notes-algorithm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Plans To Test and Tinker With X's Community Notes Algorithm](https://tech.slashdot.org/story/25/03/13/2056224/meta-plans-to-test-and-tinker-with-xs-community-notes-algorithm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 23:30:12](https://lobste.rs/s/lkdgd4/typestate_programming) - [Typestate Programming](https://docs.rust-embedded.org/book/static-guarantees/typestate-programming.html)
* [2025-03-13, 23:20:00](https://news.slashdot.org/story/25/03/13/2052239/mozilla-warns-users-to-update-firefox-before-certificate-expires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Warns Users To Update Firefox Before Certificate Expires](https://news.slashdot.org/story/25/03/13/2052239/mozilla-warns-users-to-update-firefox-before-certificate-expires?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 22:58:42](https://lobste.rs/s/ozgd5s/can_we_communally_deprecate_git_checkout) - [Can we communally deprecate git checkout?](https://mirawelner.com/posts/checkout.html)
* [2025-03-13, 22:54:31](https://news.ycombinator.com/item?id=43358003) - [How Pi Almost Wasn't](https://mathenchant.wordpress.com/2025/03/13/how-pi-almost-wasnt/)
* [2025-03-13, 22:48:45](https://news.ycombinator.com/item?id=43357955) - [C Plus Prolog](https://github.com/needleful/c_plus_prolog)
* [2025-03-13, 22:40:00](https://yro.slashdot.org/story/25/03/13/2043257/meta-stops-ex-director-from-promoting-critical-memoir?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Stops Ex-Director From Promoting Critical Memoir](https://yro.slashdot.org/story/25/03/13/2043257/meta-stops-ex-director-from-promoting-critical-memoir?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 22:36:40](https://lobste.rs/s/lni15k/what_programming_concepts_do_you) - [What Programming Concepts do you Struggle to Grok or Use in Production?](https://lobste.rs/s/lni15k/what_programming_concepts_do_you)
* [2025-03-13, 22:13:58](https://news.ycombinator.com/item?id=43357747) - [Voker (YC S24) is hiring an LA-based full stack AI software engineer](https://www.linkedin.com/jobs/view/4165718206/)
* [2025-03-13, 22:12:31](https://news.ycombinator.com/item?id=43357739) - [Y Combinator urges the White House to support Europe's Digital Markets Act](https://techcrunch.com/2025/03/13/y-combinator-urges-the-white-house-to-support-europes-digital-markets-act/)
* [2025-03-13, 22:07:29](https://news.ycombinator.com/item?id=43357704) - [Tiny changes in gene expression make big difference in eye size of fruit flies](https://phys.org/news/2025-02-tiny-gene-big-differences-eye.html)
* [2025-03-13, 22:05:44](https://news.ycombinator.com/item?id=43357687) - [Recursion kills: The story behind CVE-2024-8176 in libexpat](https://blog.hartwork.org/posts/expat-2-7-0-released/)
* [2025-03-13, 22:02:00](https://slashdot.org/story/25/03/13/2038219/anthropic-ceo-floats-idea-of-giving-ai-a-quit-job-button?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic CEO Floats Idea of Giving AI a 'Quit Job' Button](https://slashdot.org/story/25/03/13/2038219/anthropic-ceo-floats-idea-of-giving-ai-a-quit-job-button?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 21:54:54](https://lobste.rs/s/ubwuzz/high_performance_computing_with_much) - [High-performance computing, with much less code](https://news.mit.edu/2025/high-performance-computing-with-much-less-code-0313)
* [2025-03-13, 21:49:42](https://lobste.rs/s/t2bmsy/fsync_after_open_is_elaborate_no_op) - [fsync() after open() is an elaborate no-op](https://despairlabs.com/blog/posts/2025-03-13-fsync-after-open-is-an-elaborate-no-op/)
* [2025-03-13, 21:25:00](https://it.slashdot.org/story/25/03/13/1858228/citigroup-plans-to-slash-it-contractors-hire-staff-to-improve-controls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citigroup Plans To Slash IT Contractors, Hire Staff To Improve Controls](https://it.slashdot.org/story/25/03/13/1858228/citigroup-plans-to-slash-it-contractors-hire-staff-to-improve-controls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 20:46:26](https://news.ycombinator.com/item?id=43357078) - [Functional Tests as a Tree of Continuations (2010)](https://www.evanmiller.org/functional-tests-as-a-tree-of-continuations.html)
* [2025-03-13, 20:45:00](https://tech.slashdot.org/story/25/03/13/1853231/googles-gemini-ai-can-now-see-your-search-history?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's Gemini AI Can Now See Your Search History](https://tech.slashdot.org/story/25/03/13/1853231/googles-gemini-ai-can-now-see-your-search-history?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 20:35:47](https://news.ycombinator.com/item?id=43356995) - [\"Normal\" engineers are the key to great teams](https://spectrum.ieee.org/10x-engineer)
* [2025-03-13, 20:10:00](https://slashdot.org/story/25/03/13/1846224/openai-warns-limiting-ai-access-to-copyrighted-content-could-give-china-advantage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Warns Limiting AI Access To Copyrighted Content Could Give China Advantage](https://slashdot.org/story/25/03/13/1846224/openai-warns-limiting-ai-access-to-copyrighted-content-could-give-china-advantage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 20:06:14](https://lobste.rs/s/p4xdsv/io_devices_latency) - [IO devices and latency](https://planetscale.com/blog/io-devices-and-latency)
* [2025-03-13, 19:30:00](https://news.slashdot.org/story/25/03/13/1835237/german-spy-agency-concluded-covid-virus-likely-leaked-from-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [German Spy Agency Concluded COVID Virus Likely Leaked From Lab](https://news.slashdot.org/story/25/03/13/1835237/german-spy-agency-concluded-covid-virus-likely-leaked-from-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 19:05:17](https://news.ycombinator.com/item?id=43356314) - [The Lost Art of Logarithms](https://www.lostartoflogarithms.com/)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 18:52:00](https://hardware.slashdot.org/story/25/03/13/1828215/microsoft-recent-windows-updates-make-usb-printers-print-random-text?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft: Recent Windows Updates Make USB Printers Print Random Text](https://hardware.slashdot.org/story/25/03/13/1828215/microsoft-recent-windows-updates-make-usb-printers-print-random-text?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 18:31:07](https://lobste.rs/s/mzbcpk/xata_agent_ai_agent_expert_postgresql) - [Xata Agent: AI agent expert in PostgreSQL](https://github.com/xataio/agent)
* [2025-03-13, 18:14:00](https://apple.slashdot.org/story/25/03/13/1815207/something-is-rotten-in-the-state-of-cupertino?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Something Is Rotten in the State of Cupertino'](https://apple.slashdot.org/story/25/03/13/1815207/something-is-rotten-in-the-state-of-cupertino?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 17:48:03](https://news.ycombinator.com/item?id=43355658) - [Show HN: Bubbles, a vanilla JavaScript web game](https://ehmorris.com/bubbles/)
* [2025-03-13, 17:33:23](https://news.ycombinator.com/item?id=43355521) - [Honey Bunnies](https://mameson.com/experiment/glsl/fro_9/fro_9.html)
* [2025-03-13, 17:14:48](https://lobste.rs/s/gvgmth/choosing_languages) - [Choosing Languages](https://steveklabnik.com/writing/choosing-languages/)
* [2025-03-13, 16:54:12](https://lobste.rs/s/odzx0k/curry_truly_integrated_functional_logic) - [Curry: A Truly Integrated Functional Logic Programming Language](https://curry-lang.org)
* [2025-03-13, 16:46:27](https://news.ycombinator.com/item?id=43355031) - [IO Devices and Latency](https://planetscale.com/blog/io-devices-and-latency)
* [2025-03-13, 15:40:10](https://lobste.rs/s/dakizz/it_s_not_cheating_if_you_write_video_game) - [It's not cheating if you write the video game solver yourself](https://robertheaton.com/cocoon/)
* [2025-03-13, 14:44:25](https://news.ycombinator.com/item?id=43353898) - [Interprocedural Sparse Conditional Type Propagation](https://railsatscale.com/2025-02-24-interprocedural-sparse-conditional-type-propagation/)
* [2025-03-13, 14:37:05](https://news.ycombinator.com/item?id=43353822) - [Steam Networks](https://worksinprogress.co/issue/steam-networks/)
* [2025-03-13, 14:33:36](https://lobste.rs/s/fpoyhd/how_write_quine) - [How to write a quine](https://czterycztery.pl/slowo/quine-EN.html)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 13:40:48](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by) - [WebAssembly from the Ground Up – learn WASM by building a compiler](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by)
* [2025-03-13, 13:37:10](https://lobste.rs/s/vanuj2/smoke_test_your_django_admin_site) - [Smoke test your Django admin site](https://jmduke.com/posts/post/django-admin-changelist-test/)
* [2025-03-13, 12:20:29](https://news.ycombinator.com/item?id=43352531) - [OpenAI asks White House for relief from state AI rules](https://finance.yahoo.com/news/openai-asks-white-house-relief-100000706.html)
* [2025-03-13, 11:42:56](https://lobste.rs/s/ow3d4j/almquist_shell_ash_variants) - [Almquist shell (ash) variants](https://www.in-ulm.de/~mascheck/various/ash/)
* [2025-03-13, 10:43:54](https://news.ycombinator.com/item?id=43351988) - [Amateur Telescope Making Main Page](https://stellafane.org/tm/atm/)
* [2025-03-13, 10:23:16](https://lobste.rs/s/whrdfm/cursor_told_me_i_should_learn_coding) - [Cursor told me I should learn coding instead of asking it to generate code](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 08:07:44](https://lobste.rs/s/56ys0f/we_should_improve_libzfs_somewhat) - [We should improve libzfs somewhat](https://despairlabs.com/blog/posts/2025-03-12-we-should-improve-libzfs-somewhat/)
* [2025-03-13, 06:35:32](https://lobste.rs/s/akxfbm/c_plus_prolog) - [C plus Prolog](https://github.com/needleful/c_plus_prolog)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-13, 01:04:50](https://news.ycombinator.com/item?id=43349385) - [A new Sudoku layout with 81 uniquely shaped cells](https://danielchasehooper.com/posts/cracked-sudoku/)
* [2025-03-13, 00:44:45](https://lobste.rs/s/azpmu3/something_is_rotten_state_cupertino) - [Something Is Rotten in the State of Cupertino](https://daringfireball.net/2025/03/something_is_rotten_in_the_state_of_cupertino)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 18:35:32](https://lobste.rs/s/v8vnjo/dropping_risc_v_support) - [Dropping RISC-V support](https://chimera-linux.org/news/2025/03/dropping-riscv.html)
* [2025-03-12, 17:14:16](https://lobste.rs/s/nno4i5/carefully_purposefully_oxidising) - [Carefully But Purposefully Oxidising Ubuntu](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 01:55:32](https://news.ycombinator.com/item?id=43339212) - [My Scammer Girlfriend: Baiting a Romance Fraudster](https://www.bentasker.co.uk/posts/blog/security/seducing-a-romance-scammer.html)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 12:58:55](https://news.ycombinator.com/item?id=43331973) - [Show HN: MCPGod: Fine-grained control over MCP clients, servers, and tools](https://github.com/mcpgod/cli)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 07:48:29](https://news.ycombinator.com/item?id=43330143) - [Creative Fansubbing Techniques: Part 2](https://www.md-subs.com/blog/creative-fansubbing-techniques-2)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 13:41:24](https://news.ycombinator.com/item?id=43320505) - [Show HN: I built a Figma plugin for quick data calculations](https://www.figma.com/community/plugin/1478090512871122209/countastic)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 01:51:20](https://news.ycombinator.com/item?id=43316167) - [Will the Man Get Frog](https://www.lexaloffle.com/bbs/?pid=willthemangetfrog)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
