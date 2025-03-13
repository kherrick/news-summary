# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Programming

* [It's not cheating if you write the video game solver yourself](https://robertheaton.com/cocoon/) ([comments](https://lobste.rs/s/dakizz/it_s_not_cheating_if_you_write_video_game))

* [Stumbling our way into Solving the World's Oldest Board Game](https://royalur.net/blog/solved) ([comments](https://lobste.rs/s/atvfzs/stumbling_our_way_into_solving_world_s))

* [Show HN: I built AI agents with CrewAI to automate my entire Gmail workflow](https://github.com/tonykipkemboi/crewai-gmail-automation) ([comments](https://news.ycombinator.com/item?id=43354219))

* [WebAssembly from the Ground Up – learn WASM by building a compiler](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by) ([comments](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by))

* [How to write a quine](https://czterycztery.pl/slowo/quine-EN.html) ([comments](https://lobste.rs/s/fpoyhd/how_write_quine))

* [Amateur Telescope Making Main Page](https://stellafane.org/tm/atm/) ([comments](https://news.ycombinator.com/item?id=43351988))

* [Smoke test your Django admin site](https://jmduke.com/posts/post/django-admin-changelist-test/) ([comments](https://lobste.rs/s/vanuj2/smoke_test_your_django_admin_site))

## Artificial Intelligence and Applications

* [Anthropic CEO Says Spies Are After $100 Million AI Secrets In a 'Few Lines of Code'](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Netflix Used AI To Upscale 'A Different World' and It's a Melted Nightmare](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google Claims Gemma 3 Reaches 98% of DeepSeek's Accuracy Using Only One GPU](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Environmental and Biological Science

* [The Long Flight to Teach an Endangered Ibis Species to Migrate](https://www.newyorker.com/magazine/2025/02/17/the-long-flight-to-teach-an-endangered-ibis-species-to-migrate) ([comments](https://news.ycombinator.com/item?id=43353570))

* [Supercomputer Draws Molecular Blueprint For Repairing Damaged DNA](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss))

## Policy, Business, and Competition

* [UK Investigation Says Apple, Google Hampering Mobile Browser Competition](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Saudi Investment Fund Pays $3.5 Billion To Capture Pokemon Go](https://games.slashdot.org/story/25/03/13/000254/saudi-investment-fund-pays-35-billion-to-capture-pokemon-go?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/25/03/13/000254/saudi-investment-fund-pays-35-billion-to-capture-pokemon-go?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss))

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

* [2025-03-13, 15:40:10](https://lobste.rs/s/dakizz/it_s_not_cheating_if_you_write_video_game) - [It's not cheating if you write the video game solver yourself](https://robertheaton.com/cocoon/)
* [2025-03-13, 15:20:00](https://entertainment.slashdot.org/story/25/03/13/148212/which-movies-do-people-love-to-hate-a-statistical-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Which Movies Do People Love to Hate? A Statistical Analysis](https://entertainment.slashdot.org/story/25/03/13/148212/which-movies-do-people-love-to-hate-a-statistical-analysis?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 15:18:52](https://news.ycombinator.com/item?id=43354219) - [Show HN: I built AI agents with CrewAI to automate my entire Gmail workflow](https://github.com/tonykipkemboi/crewai-gmail-automation)
* [2025-03-13, 15:11:31](https://lobste.rs/s/atvfzs/stumbling_our_way_into_solving_world_s) - [Stumbling our way into Solving the World's Oldest Board Game](https://royalur.net/blog/solved)
* [2025-03-13, 15:06:07](https://news.ycombinator.com/item?id=43354115) - [Ask HN: Where Do Seasoned Devs Look for Short-Term Work?](https://news.ycombinator.com/item?id=43354115)
* [2025-03-13, 14:44:25](https://news.ycombinator.com/item?id=43353898) - [Interprocedural Sparse Conditional Type Propagation](https://railsatscale.com/2025-02-24-interprocedural-sparse-conditional-type-propagation/)
* [2025-03-13, 14:40:00](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Investigation Says Apple, Google Hampering Mobile Browser Competition](https://news.slashdot.org/story/25/03/13/1356205/uk-investigation-says-apple-google-hampering-mobile-browser-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 14:37:05](https://news.ycombinator.com/item?id=43353822) - [Steam Networks](https://worksinprogress.co/issue/steam-networks/)
* [2025-03-13, 14:33:36](https://lobste.rs/s/fpoyhd/how_write_quine) - [How to write a quine](https://czterycztery.pl/slowo/quine-EN.html)
* [2025-03-13, 14:12:21](https://news.ycombinator.com/item?id=43353570) - [The Long Flight to Teach an Endangered Ibis Species to Migrate](https://www.newyorker.com/magazine/2025/02/17/the-long-flight-to-teach-an-endangered-ibis-species-to-migrate)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 14:09:21](https://news.ycombinator.com/item?id=43353551) - [Statistical Formulas for Programmers (2013)](https://www.evanmiller.org/statistical-formulas-for-programmers.html)
* [2025-03-13, 14:00:00](https://games.slashdot.org/story/25/03/13/1341218/keep-kids-off-roblox-if-youre-worried-its-ceo-tells-parents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Keep Kids Off Roblox If You're Worried, Its CEO Tells Parents](https://games.slashdot.org/story/25/03/13/1341218/keep-kids-off-roblox-if-youre-worried-its-ceo-tells-parents?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 13:40:48](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by) - [WebAssembly from the Ground Up – learn WASM by building a compiler](https://lobste.rs/s/vvcazf/webassembly_from_ground_up_learn_wasm_by)
* [2025-03-13, 13:37:10](https://lobste.rs/s/vanuj2/smoke_test_your_django_admin_site) - [Smoke test your Django admin site](https://jmduke.com/posts/post/django-admin-changelist-test/)
* [2025-03-13, 13:00:00](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic CEO Says Spies Are After $100 Million AI Secrets In a 'Few Lines of Code'](https://slashdot.org/story/25/03/13/0118240/anthropic-ceo-says-spies-are-after-100-million-ai-secrets-in-a-few-lines-of-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 12:00:05](https://news.ycombinator.com/item?id=43352405) - [Shadeform (YC S23) is hiring a senior founding engineer](https://www.ycombinator.com/companies/shadeform/jobs/2sDkjnk-founding-senior-software-engineer)
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
* [2025-03-13, 03:30:00](https://science.slashdot.org/story/25/03/13/0016206/large-study-shows-drinking-alcohol-is-good-for-your-cholesterol-levels?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Large Study Shows Drinking Alcohol Is Good For Your Cholesterol Levels](https://science.slashdot.org/story/25/03/13/0016206/large-study-shows-drinking-alcohol-is-good-for-your-cholesterol-levels?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 02:30:00](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Netflix Used AI To Upscale 'A Different World' and It's a Melted Nightmare](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 01:12:56](https://news.ycombinator.com/item?id=43349426) - [xlskubectl – a spreadsheet to control your Kubernetes cluster](https://github.com/learnk8s/xlskubectl)
* [2025-03-13, 01:03:00](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Claims Gemma 3 Reaches 98% of DeepSeek's Accuracy Using Only One GPU](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-13, 00:44:45](https://lobste.rs/s/azpmu3/something_is_rotten_state_cupertino) - [Something Is Rotten in the State of Cupertino](https://daringfireball.net/2025/03/something_is_rotten_in_the_state_of_cupertino)
* [2025-03-13, 00:31:47](https://news.ycombinator.com/item?id=43349214) - [My teen years: The transputer operating system](https://nanochess.org/transputer_operating_system.html)
* [2025-03-13, 00:25:00](https://games.slashdot.org/story/25/03/13/000254/saudi-investment-fund-pays-35-billion-to-capture-pokemon-go?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Saudi Investment Fund Pays $3.5 Billion To Capture Pokemon Go](https://games.slashdot.org/story/25/03/13/000254/saudi-investment-fund-pays-35-billion-to-capture-pokemon-go?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 23:45:00](https://news.slashdot.org/story/25/03/12/2344201/sonos-cancels-its-streaming-video-player?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sonos Cancels Its Streaming Video Player](https://news.slashdot.org/story/25/03/12/2344201/sonos-cancels-its-streaming-video-player?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 23:16:07](https://lobste.rs/s/dzgudd/complexity_as_entropy) - [complexity as entropy](https://explaining.software/archive/complexity-as-entropy/)
* [2025-03-12, 22:50:00](https://news.slashdot.org/story/25/03/12/2127218/mark-klein-att-whistleblower-who-revealed-nsa-mass-spying-has-died?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mark Klein, AT&amp;T Whistleblower Who Revealed NSA Mass Spying, Has Died](https://news.slashdot.org/story/25/03/12/2127218/mark-klein-att-whistleblower-who-revealed-nsa-mass-spying-has-died?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 22:32:30](https://news.ycombinator.com/item?id=43348379) - [Practical UX for startups surviving without a designer](https://www.tibinotes.com/p/practical-ux-for-startups-surviving)
* [2025-03-12, 22:10:00](https://tech.slashdot.org/story/25/03/12/2026229/apple-set-to-unveil-boldest-software-redesign-in-years-across-entire-ecosystem?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Set To Unveil Boldest Software Redesign In Years Across Entire Ecosystem](https://tech.slashdot.org/story/25/03/12/2026229/apple-set-to-unveil-boldest-software-redesign-in-years-across-entire-ecosystem?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 21:30:00](https://slashdot.org/story/25/03/12/2118219/intel-appoints-lip-bu-tan-as-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Intel Appoints Lip-Bu Tan As CEO](https://slashdot.org/story/25/03/12/2118219/intel-appoints-lip-bu-tan-as-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 21:12:05](https://news.ycombinator.com/item?id=43347724) - [The Night Watch (2013) [pdf]](https://www.usenix.org/system/files/1311_05-08_mickens.pdf)
* [2025-03-12, 21:05:08](https://news.ycombinator.com/item?id=43347662) - [Mark Klein, AT&T whistleblower who revealed NSA mass spying, has died](https://www.eff.org/deeplinks/2025/03/memoriam-mark-klein-att-whistleblower-about-nsa-mass-spying)
* [2025-03-12, 20:50:00](https://hardware.slashdot.org/story/25/03/12/2018222/googles-new-robot-ai-can-fold-delicate-origami-close-zipper-bags?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's New Robot AI Can Fold Delicate Origami, Close Zipper Bags](https://hardware.slashdot.org/story/25/03/12/2018222/googles-new-robot-ai-can-fold-delicate-origami-close-zipper-bags?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 20:23:52](https://news.ycombinator.com/item?id=43347306) - [Show HN: Time Portal – Get dropped into history, guess where you landed](https://www.eggnog.ai/entertimeportal)
* [2025-03-12, 20:02:38](https://lobste.rs/s/exrq7d/upgrading_semgrep_from_ocaml_4_ocaml_5) - [Upgrading Semgrep from OCaml 4 to OCaml 5](https://semgrep.dev/blog/2025/upgrading-semgrep-from-ocaml-4-to-ocaml-5/)
* [2025-03-12, 19:49:27](https://lobste.rs/s/pua4kr/traversal_resistant_file_apis) - [Traversal-resistant file APIs](https://go.dev/blog/osroot)
* [2025-03-12, 19:33:32](https://lobste.rs/s/wpcgq1/iconography_putty_tools) - [Iconography of the PuTTY tools](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/putty-icons/)
* [2025-03-12, 19:29:41](https://news.ycombinator.com/item?id=43346816) - [Iconography of the PuTTY tools](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/putty-icons/)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 18:35:32](https://lobste.rs/s/v8vnjo/dropping_risc_v_support) - [Dropping RISC-V support](https://chimera-linux.org/news/2025/03/dropping-riscv.html)
* [2025-03-12, 17:37:32](https://lobste.rs/s/vh3n7k/codebase_national_lab_i_worked_at) - [The Codebase of a National Lab I Worked At](https://mirawelner.com/posts/fed_code.html)
* [2025-03-12, 17:14:16](https://lobste.rs/s/nno4i5/carefully_purposefully_oxidising) - [Carefully But Purposefully Oxidising Ubuntu](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/)
* [2025-03-12, 17:00:28](https://news.ycombinator.com/item?id=43345285) - [Shenmue (1999) reverse engineering reveals possible sun position oversight](https://wulinshu.com/2025/03/11/reverse-engineering-adventures-3-bug-or-not-bug/)
* [2025-03-12, 16:07:35](https://news.ycombinator.com/item?id=43344703) - [The cultural divide between mathematics and AI](https://sugaku.net/content/understanding-the-cultural-divide-between-mathematics-and-ai/)
* [2025-03-12, 16:04:54](https://news.ycombinator.com/item?id=43344673) - [Reverse engineering OpenAI code execution to make it run C and JavaScript](https://twitter.com/benswerd/status/1899853533761200300)
* [2025-03-12, 15:09:09](https://news.ycombinator.com/item?id=43344082) - [Gemini Robotics](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/)
* [2025-03-12, 14:44:54](https://lobste.rs/s/icbgrq/perplexing_javascript_parsing_puzzle) - [A Perplexing Javascript Parsing Puzzle](https://www.hillelwayne.com/post/javascript-puzzle/)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 14:10:08](https://lobste.rs/s/v7qfbz/duckdb_local_ui) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 12:56:01](https://news.ycombinator.com/item?id=43342712) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 12:08:43](https://news.ycombinator.com/item?id=43342361) - [Peer-to-peer file transfers in the browser](https://github.com/kern/filepizza)
* [2025-03-12, 11:47:00](https://lobste.rs/s/35dgcs/rmk_rust_keyboard_firmware_library_with) - [rmk: Rust keyboard firmware library with layers, macros, real-time keymap editing, wireless(BLE) and split support](https://github.com/HaoboGu/rmk)
* [2025-03-12, 11:42:16](https://news.ycombinator.com/item?id=43342178) - [The Future Is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 06:59:39](https://lobste.rs/s/b6vdmd/on_insecurity_telecom_stacks_wake_salt) - [On The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 06:39:17](https://news.ycombinator.com/item?id=43340491) - [Gemma 3 Technical Report [pdf]](https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 17:12:43](https://news.ycombinator.com/item?id=43334731) - [The masters of Commodore 64 games](https://spillhistorie.no/masters-of-c64-games/)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 20:22:59](https://news.ycombinator.com/item?id=43325628) - [Internet shutdowns at record high in Africa as access 'weaponised'](https://www.theguardian.com/technology/2025/mar/09/internet-shutdowns-record-high-africa-2024-access-weaponised)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 23:28:09](https://news.ycombinator.com/item?id=43315029) - [Dithering in Colour](https://obrhubr.org/dithering-in-colour)
* [2025-03-09, 22:24:56](https://news.ycombinator.com/item?id=43314541) - [Xcode now supports Processor Trace profiling on M4/A18](https://developer.apple.com/documentation/xcode-release-notes/xcode-16_3-release-notes)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 17:03:42](https://news.ycombinator.com/item?id=43311082) - [Open source software for modeling soft materials](https://now.tufts.edu/2025/03/04/now-theres-open-source-software-modeling-soft-materials)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 14:00:31](https://news.ycombinator.com/item?id=43309109) - [Ruth Belville: the \"Greenwich Time Lady\" who sold time from 1892 to 1940 (2022)](https://eehe.org.uk/72742/ruth-belville-she-sold-time/)
* [2025-03-09, 10:06:27](https://news.ycombinator.com/item?id=43307751) - [My stupid noise journey (2023)](https://dynomight.net/noise/)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
