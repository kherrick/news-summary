# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Google's Gemini AI Can Now See Your Search History](https://tech.slashdot.org/story/25/03/13/1853231/googles-gemini-ai-can-now-see-your-search-history?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43357078))

* [OpenAI Warns Limiting AI Access To Copyrighted Content Could Give China Advantage](https://slashdot.org/story/25/03/13/1846224/openai-warns-limiting-ai-access-to-copyrighted-content-could-give-china-advantage?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43352531))

* [Microsoft's Xbox Copilot Will Act As an AI Gaming Coach](https://games.slashdot.org/story/25/03/13/1549238/microsofts-xbox-copilot-will-act-as-an-ai-gaming-coach?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43353822))

* [Xata Agent: AI agent expert in PostgreSQL](https://github.com/xataio/agent) ([comments](https://news.ycombinator.com/item?id=43356039))

* [Anthropic CEO Says Spies Are After $100 Million AI Secrets In a 'Few Lines of Code'](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by))

## High-Performance Computing and Innovations

* [High-performance computing, with much less code](https://news.mit.edu/2025/high-performance-computing-with-much-less-code-0313) ([comments](https://lobste.rs/s/ubwuzz/high_performance_computing_with_much))

* [Supercomputer Draws Molecular Blueprint For Repairing Damaged DNA](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss))

## Programming and Development

* [Functional Tests as a Tree of Continuations (2010)](https://www.evanmiller.org/functional-tests-as-a-tree-of-continuations.html) ([comments](https://news.ycombinator.com/item?id=43357078))

* [How to write a quine](https://czterycztery.pl/slowo/quine-EN.html) ([comments](https://lobste.rs/s/fpoyhd/how_write_quine))

* [WebAssembly from the Ground Up – learn WASM by building a compiler](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by) ([comments](https://lobste.rs/s/fpoyhd/how_write_quine))

* [Curry: A Truly Integrated Functional Logic Programming Language](https://curry-lang.org) ([comments](https://lobste.rs/s/odzx0k/curry_truly_integrated_functional_logic))

## Technology Debates and Developments

* [Mozilla Warns DOJ's Google Remedies Risk 'Death of Open Web'](https://news.slashdot.org/story/25/03/13/1716227/mozilla-warns-dojs-google-remedies-risk-death-of-open-web?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentnews.org/story/25/03/09/.)

* [UK Investigation Says Apple, Google Hampering Mobile Browser Competition](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentn news.org))

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
* [2025-03-13, 18:32:27](https://news.ycombinator.com/item?id=43356039) - [Xata Agent: AI agent expert in PostgreSQL](https://github.com/xataio/agent)
* [2025-03-13, 18:31:07](https://lobste.rs/s/mzbcpk/xata_agent_ai_agent_expert_postgresql) - [Xata Agent: AI agent expert in PostgreSQL](https://github.com/xataio/agent)
* [2025-03-13, 18:14:00](https://apple.slashdot.org/story/25/03/13/1815207/something-is-rotten-in-the-state-of-cupertino?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Something Is Rotten in the State of Cupertino'](https://apple.slashdot.org/story/25/03/13/1815207/something-is-rotten-in-the-state-of-cupertino?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 17:48:03](https://news.ycombinator.com/item?id=43355658) - [Show HN: Bubbles, a vanilla JavaScript web game](https://ehmorris.com/bubbles/)
* [2025-03-13, 17:35:34](https://news.ycombinator.com/item?id=43355542) - [History of Maths for Beginners](https://thonyc.wordpress.com/2025/03/13/history-of-maths-for-beginners/)
* [2025-03-13, 17:33:23](https://news.ycombinator.com/item?id=43355521) - [Honey Bunnies](https://mameson.com/experiment/glsl/fro_9/fro_9.html)
* [2025-03-13, 17:30:00](https://news.slashdot.org/story/25/03/13/1716227/mozilla-warns-dojs-google-remedies-risk-death-of-open-web?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Warns DOJ's Google Remedies Risk 'Death of Open Web'](https://news.slashdot.org/story/25/03/13/1716227/mozilla-warns-dojs-google-remedies-risk-death-of-open-web?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 17:14:48](https://lobste.rs/s/gvgmth/choosing_languages) - [Choosing Languages](https://steveklabnik.com/writing/choosing-languages/)
* [2025-03-13, 17:14:47](https://news.ycombinator.com/item?id=43355348) - [\"Have Quotes About Salieri\"](https://contingentmagazine.org/2025/01/10/have-quotes-about-salieri/)
* [2025-03-13, 17:03:00](https://science.slashdot.org/story/25/03/13/173229/man-survives-with-titanium-heart-for-100-days---a-world-first?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Man Survives With Titanium Heart For 100 Days - a World First](https://science.slashdot.org/story/25/03/13/173229/man-survives-with-titanium-heart-for-100-days---a-world-first?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 17:00:26](https://news.ycombinator.com/item?id=43355172) - [Spark AI (YC W24) is hiring a full-stack engineer in San Francisco](https://www.ycombinator.com/companies/spark/jobs/kDeJlPK-software-engineer-full-stack)
* [2025-03-13, 16:54:12](https://lobste.rs/s/odzx0k/curry_truly_integrated_functional_logic) - [Curry: A Truly Integrated Functional Logic Programming Language](https://curry-lang.org)
* [2025-03-13, 16:46:27](https://news.ycombinator.com/item?id=43355031) - [IO Devices and Latency](https://planetscale.com/blog/io-devices-and-latency)
* [2025-03-13, 16:05:00](https://games.slashdot.org/story/25/03/13/1549238/microsofts-xbox-copilot-will-act-as-an-ai-gaming-coach?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft's Xbox Copilot Will Act As an AI Gaming Coach](https://games.slashdot.org/story/25/03/13/1549238/microsofts-xbox-copilot-will-act-as-an-ai-gaming-coach?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 15:40:10](https://lobste.rs/s/dakizz/it_s_not_cheating_if_you_write_video_game) - [It's not cheating if you write the video game solver yourself](https://robertheaton.com/cocoon/)
* [2025-03-13, 15:20:00](https://entertainment.slashdot.org/story/25/03/13/148212/which-movies-do-people-love-to-hate-a-statistical-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Which Movies Do People Love to Hate? A Statistical Analysis](https://entertainment.slashdot.org/story/25/03/13/148212/which-movies-do-people-love-to-hate-a-statistical-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 15:11:31](https://lobste.rs/s/atvfzs/stumbling_our_way_into_solving_world_s) - [Stumbling our way into Solving the World's Oldest Board Game](https://royalur.net/blog/solved)
* [2025-03-13, 14:40:00](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Investigation Says Apple, Google Hampering Mobile Browser Competition](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 14:37:05](https://news.ycombinator.com/item?id=43353822) - [Steam Networks](https://worksinprogress.co/issue/steam-networks/)
* [2025-03-13, 14:33:36](https://lobste.rs/s/fpoyhd/how_write_quine) - [How to write a quine](https://czterycztery.pl/slowo/quine-EN.html)
* [2025-03-13, 14:14:43](https://news.ycombinator.com/item?id=43353603) - [The failure of the land value tax](https://worksinprogress.co/issue/the-failure-of-the-land-value-tax/)
* [2025-03-13, 14:12:21](https://news.ycombinator.com/item?id=43353570) - [The Long Flight to Teach an Endangered Ibis Species to Migrate](https://www.newyorker.com/magazine/2025/02/17/the-long-flight-to-teach-an-endangered-ibis-species-to-migrate)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 14:09:21](https://news.ycombinator.com/item?id=43353551) - [Statistical Formulas for Programmers (2013)](https://www.evanmiller.org/statistical-formulas-for-programmers.html)
* [2025-03-13, 14:00:00](https://games.slashdot.org/story/25/03/13/1341218/keep-kids-off-roblox-if-youre-worried-its-ceo-tells-parents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Keep Kids Off Roblox If You're Worried, Its CEO Tells Parents](https://games.slashdot.org/story/25/03/13/1341218/keep-kids-off-roblox-if-youre-worried-its-ceo-tells-parents?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 13:40:48](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by) - [WebAssembly from the Ground Up – learn WASM by building a compiler](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by)
* [2025-03-13, 13:37:10](https://lobste.rs/s/vanuj2/smoke_test_your_django_admin_site) - [Smoke test your Django admin site](https://jmduke.com/posts/post/django-admin-changelist-test/)
* [2025-03-13, 13:00:00](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic CEO Says Spies Are After $100 Million AI Secrets In a 'Few Lines of Code'](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 12:20:29](https://news.ycombinator.com/item?id=43352531) - [OpenAI asks White House for relief from state AI rules](https://finance.yahoo.com/news/openai-asks-white-house-relief-100000706.html)
* [2025-03-13, 11:42:56](https://lobste.rs/s/ow3d4j/almquist_shell_ash_variants) - [Almquist shell (ash) variants](https://www.in-ulm.de/~mascheck/various/ash/)
* [2025-03-13, 11:05:48](https://lobste.rs/s/sd8mtf/xit_devlog_optional_patches_force_push) - [Xit devlog - optional patches, force push, symlinks](https://radarroark.github.io/xit/devlog-optional-patches.html)
* [2025-03-13, 10:43:54](https://news.ycombinator.com/item?id=43351988) - [Amateur Telescope Making Main Page](https://stellafane.org/tm/atm/)
* [2025-03-13, 10:39:44](https://lobste.rs/s/chiije/my_teen_years_porting_small_c_transputer) - [My teen years: Porting Small-C to transputer and developing my operating system](https://nanochess.org/bootstrapping_c_os_transputer.html)
* [2025-03-13, 10:23:16](https://lobste.rs/s/whrdfm/cursor_told_me_i_should_learn_coding) - [Cursor told me I should learn coding instead of asking it to generate code](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132)
* [2025-03-13, 10:00:00](https://hardware.slashdot.org/story/25/03/13/0020246/legacy-32-bit-physx-removal-cripples-performance-on-new-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Legacy 32-bit PhysX Removal Cripples Performance On New GPUs](https://hardware.slashdot.org/story/25/03/13/0020246/legacy-32-bit-physx-removal-cripples-performance-on-new-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 08:07:44](https://lobste.rs/s/56ys0f/we_should_improve_libzfs_somewhat) - [We should improve libzfs somewhat](https://despairlabs.com/blog/posts/2025-03-12-we-should-improve-libzfs-somewhat/)
* [2025-03-13, 07:00:00](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Supercomputer Draws Molecular Blueprint For Repairing Damaged DNA](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 06:35:32](https://lobste.rs/s/akxfbm/c_plus_prolog) - [C plus Prolog](https://github.com/needleful/c_plus_prolog)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-13, 01:12:56](https://news.ycombinator.com/item?id=43349426) - [xlskubectl – a spreadsheet to control your Kubernetes cluster](https://github.com/learnk8s/xlskubectl)
* [2025-03-13, 01:04:50](https://news.ycombinator.com/item?id=43349385) - [A new Sudoku layout with 81 uniquely shaped cells](https://danielchasehooper.com/posts/cracked-sudoku/)
* [2025-03-13, 00:44:45](https://lobste.rs/s/azpmu3/something_is_rotten_state_cupertino) - [Something Is Rotten in the State of Cupertino](https://daringfireball.net/2025/03/something_is_rotten_in_the_state_of_cupertino)
* [2025-03-13, 00:31:47](https://news.ycombinator.com/item?id=43349214) - [My teen years: The transputer operating system](https://nanochess.org/transputer_operating_system.html)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 22:32:30](https://news.ycombinator.com/item?id=43348379) - [Practical UX for startups surviving without a designer](https://www.tibinotes.com/p/practical-ux-for-startups-surviving)
* [2025-03-12, 21:05:08](https://news.ycombinator.com/item?id=43347662) - [Mark Klein, AT&T whistleblower who revealed NSA mass spying, has died](https://www.eff.org/deeplinks/2025/03/memoriam-mark-klein-att-whistleblower-about-nsa-mass-spying)
* [2025-03-12, 20:23:52](https://news.ycombinator.com/item?id=43347306) - [Show HN: Time Portal – Get dropped into history, guess where you landed](https://www.eggnog.ai/entertimeportal)
* [2025-03-12, 20:02:38](https://lobste.rs/s/exrq7d/upgrading_semgrep_from_ocaml_4_ocaml_5) - [Upgrading Semgrep from OCaml 4 to OCaml 5](https://semgrep.dev/blog/2025/upgrading-semgrep-from-ocaml-4-to-ocaml-5/)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 18:35:32](https://lobste.rs/s/v8vnjo/dropping_risc_v_support) - [Dropping RISC-V support](https://chimera-linux.org/news/2025/03/dropping-riscv.html)
* [2025-03-12, 17:37:32](https://lobste.rs/s/vh3n7k/codebase_national_lab_i_worked_at) - [The Codebase of a National Lab I Worked At](https://mirawelner.com/posts/fed_code.html)
* [2025-03-12, 17:14:16](https://lobste.rs/s/nno4i5/carefully_purposefully_oxidising) - [Carefully But Purposefully Oxidising Ubuntu](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/)
* [2025-03-12, 15:09:09](https://news.ycombinator.com/item?id=43344082) - [Gemini Robotics](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/)
* [2025-03-12, 14:44:54](https://lobste.rs/s/icbgrq/perplexing_javascript_parsing_puzzle) - [A Perplexing Javascript Parsing Puzzle](https://www.hillelwayne.com/post/javascript-puzzle/)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 12:56:01](https://news.ycombinator.com/item?id=43342712) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 06:59:39](https://lobste.rs/s/b6vdmd/on_insecurity_telecom_stacks_wake_salt) - [On The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 17:12:43](https://news.ycombinator.com/item?id=43334731) - [The masters of Commodore 64 games](https://spillhistorie.no/masters-of-c64-games/)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 18:51:10](https://news.ycombinator.com/item?id=43324350) - [Unraveling Time: A Deep Dive into TTD Instruction Emulation Bugs](https://cloud.google.com/blog/topics/threat-intelligence/ttd-instruction-emulation-bugs)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:34:28](https://news.ycombinator.com/item?id=43315544) - [Half the human beings alive today are descended from the Yamnaya: new research](https://www.wsj.com/science/the-ancient-horsemen-who-created-the-modern-world-ba4b314d)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 23:28:09](https://news.ycombinator.com/item?id=43315029) - [Dithering in Colour](https://obrhubr.org/dithering-in-colour)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 17:03:42](https://news.ycombinator.com/item?id=43311082) - [Open source software for modeling soft materials](https://now.tufts.edu/2025/03/04/now-theres-open-source-software-modeling-soft-materials)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 14:00:31](https://news.ycombinator.com/item?id=43309109) - [Ruth Belville, the \"Greenwich Time Lady\" (2022)](https://eehe.org.uk/72742/ruth-belville-she-sold-time/)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
