# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Discoveries

* [Supercomputer Draws Molecular Blueprint For Repairing Damaged DNA](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/03/13/0035232/supercomputer-draws-molecular-blueprint-for-repairing-damaged-dna?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google Claims Gemma 3 Reaches 98% of DeepSeek's Accuracy Using Only One GPU](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/03/13/0010231/google-claims-gemma-3-reaches-98-of-deepseeks-accuracy-using-only-one-gpu?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Netflix Used AI To Upscale 'A Different World' and It's a Melted Nightmare](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://entertainment.slashdot.org/story/25/03/13/0218204/netflix-used-ai-to-upscale-a-different-world-and-its-a-melted-nightmare?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Cybersecurity and Tech Industry

* ['Uber for nurses' exposes 86K+ medical records, PII via open S3 bucket](https://www.websiteplanet.com/news/eshyft-report-breach/) ([Comments](https://news.ycombinator.com/item?id=43349115))

* [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss))

* [Something Is Rotten in the State of Cupertino](https://daringfireball.net/2025/03/something_is_rotten_in_the_state_of_cupertino) ([Comments](https://lobste.rs/s/azpmu3/something_is_rotten_state_cupertino))

## Science and Health

* [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss))

* [Large Study Shows Drinking Alcohol Is Good For Your Cholesterol Levels](https://science.slashdot.org/story/25/03/13/0016206/large-study-shows-drinking-alcohol-is-good-for-your-cholesterol-levels?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/03/13/0016206/large-study-shows-drinking-alcohol-is-good-for-your-cholesterol-levels?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Programming and Open-Source Highlights

* [C plus Prolog](https://github.com/needleful/c_plus_prolog) ([Comments](https://lobste.rs/s/akxfbm/c_plus_prolog))

* [The Night Watch (2013) [pdf]](https://www.usenix.org/system/files/1311_05-08_mickens.pdf) ([Comments](https://news.ycombinator.com/item?id=43347724))

* [xlskubectl – a spreadsheet to control your Kubernetes cluster](https://github.com/learnk8s/xlskubectl) ([Comments](https://news.ycombinator.com/item?id=43349426))

## AI and Robotics

* [Cursor told me I should learn coding instead of asking it to generate it](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132) ([Comments](https://news.ycombinator.com/item?id=43351137))

* [D-Wave Claims 'Quantum Supremacy,' Beating Traditional Computers](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 08:07:44](https://lobste.rs/s/56ys0f/we_should_improve_libzfs_somewhat) - [We should improve libzfs somewhat](https://despairlabs.com/blog/posts/2025-03-12-we-should-improve-libzfs-somewhat/)
* [2025-03-13, 07:59:55](https://news.ycombinator.com/item?id=43351137) - [Cursor told me I should learn coding instead of asking it to generate it](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132)
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
* [2025-03-13, 00:14:54](https://news.ycombinator.com/item?id=43349115) - ['Uber for nurses' exposes 86K+ medical records, PII via open S3 bucket](https://www.websiteplanet.com/news/eshyft-report-breach/)
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
* [2025-03-12, 20:10:00](https://slashdot.org/story/25/03/12/1839244/the-curious-surge-of-productivity-in-us-restaurants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Curious Surge of Productivity in US Restaurants](https://slashdot.org/story/25/03/12/1839244/the-curious-surge-of-productivity-in-us-restaurants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 20:02:38](https://lobste.rs/s/exrq7d/upgrading_semgrep_from_ocaml_4_ocaml_5) - [Upgrading Semgrep from OCaml 4 to OCaml 5](https://semgrep.dev/blog/2025/upgrading-semgrep-from-ocaml-4-to-ocaml-5/)
* [2025-03-12, 19:49:27](https://lobste.rs/s/pua4kr/traversal_resistant_file_apis) - [Traversal-resistant file APIs](https://go.dev/blog/osroot)
* [2025-03-12, 19:35:15](https://news.ycombinator.com/item?id=43346864) - [Zinc, a systems programming language prototype](https://sr.ht/~oconnor0/zinc/)
* [2025-03-12, 19:33:32](https://lobste.rs/s/wpcgq1/iconography_putty_tools) - [Iconography of the PuTTY tools](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/putty-icons/)
* [2025-03-12, 19:30:00](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [D-Wave Claims 'Quantum Supremacy,' Beating Traditional Computers](https://tech.slashdot.org/story/25/03/12/1835207/d-wave-claims-quantum-supremacy-beating-traditional-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 19:29:41](https://news.ycombinator.com/item?id=43346816) - [Iconography of the PuTTY tools](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/putty-icons/)
* [2025-03-12, 19:24:56](https://lobste.rs/s/romh86/guile_hoot_with_fibers) - [Guile Hoot with Fibers](https://afmoreno.srht.site/blog/guile-hoot-fibers.html)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 18:50:00](https://it.slashdot.org/story/25/03/12/1717207/rules-for-portable-batteries-on-planes-are-changing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rules for Portable Batteries on Planes Are Changing.](https://it.slashdot.org/story/25/03/12/1717207/rules-for-portable-batteries-on-planes-are-changing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 18:44:55](https://lobste.rs/s/ec1z6z/inline_evaluation_adventure) - [Inline Evaluation Adventure](https://rigsomelight.com/2025/03/12/inline-eval-adventure.html)
* [2025-03-12, 18:35:32](https://lobste.rs/s/v8vnjo/dropping_risc_v_support) - [Dropping RISC-V support](https://chimera-linux.org/news/2025/03/dropping-riscv.html)
* [2025-03-12, 18:10:00](https://tech.slashdot.org/story/25/03/12/1710248/global-smartwatch-sales-fall-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Global Smartwatch Sales Fall For First Time](https://tech.slashdot.org/story/25/03/12/1710248/global-smartwatch-sales-fall-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 18:05:05](https://lobste.rs/s/9bgx8t/why_i_stopped_everything_started_writing) - [Why I stopped everything and started writing C again](https://www.kmx.io/blog/why-stopped-everything-and-started-writing-C-again)
* [2025-03-12, 17:37:32](https://lobste.rs/s/vh3n7k/codebase_national_lab_i_worked_at) - [The Codebase of a National Lab I Worked At](https://mirawelner.com/posts/fed_code.html)
* [2025-03-12, 17:30:00](https://tech.slashdot.org/story/25/03/12/176223/ftc-asks-to-delay-amazon-prime-deceptive-practices-case-citing-staffing-shortfalls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Asks To Delay Amazon Prime Deceptive Practices Case, Citing Staffing Shortfalls](https://tech.slashdot.org/story/25/03/12/176223/ftc-asks-to-delay-amazon-prime-deceptive-practices-case-citing-staffing-shortfalls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-12, 17:14:16](https://lobste.rs/s/nno4i5/carefully_purposefully_oxidising) - [Carefully But Purposefully Oxidising Ubuntu](https://jnsgr.uk/2025/03/carefully-but-purposefully-oxidising-ubuntu/)
* [2025-03-12, 17:00:28](https://news.ycombinator.com/item?id=43345285) - [Shenmue (1999) reverse engineering reveals possible sun position oversight](https://wulinshu.com/2025/03/11/reverse-engineering-adventures-3-bug-or-not-bug/)
* [2025-03-12, 16:07:35](https://news.ycombinator.com/item?id=43344703) - [The cultural divide between mathematics and AI](https://sugaku.net/content/understanding-the-cultural-divide-between-mathematics-and-ai/)
* [2025-03-12, 16:04:54](https://news.ycombinator.com/item?id=43344673) - [Reverse engineering OpenAI code execution to make it run C and JavaScript](https://twitter.com/benswerd/status/1899853533761200300)
* [2025-03-12, 15:09:09](https://news.ycombinator.com/item?id=43344082) - [Gemini Robotics](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/)
* [2025-03-12, 14:44:54](https://lobste.rs/s/icbgrq/perplexing_javascript_parsing_puzzle) - [A Perplexing Javascript Parsing Puzzle](https://www.hillelwayne.com/post/javascript-puzzle/)
* [2025-03-12, 14:30:22](https://lobste.rs/s/0dqswp/hacking_gpo_746_rotary_phone) - [Hacking a GPO 746 rotary phone](https://blog.yaymukund.com/posts/hacking-a-gpo-746-rotary-phone/)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 14:10:08](https://lobste.rs/s/v7qfbz/duckdb_local_ui) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 13:55:43](https://lobste.rs/s/iqtaie/haiku_activity_contract_report_february) - [Haiku Activity & Contract Report, February 2025](https://www.haiku-os.org/blog/waddlesplash/2025-03-11-haiku_activity_contract_report_february_2025/)
* [2025-03-12, 12:56:01](https://news.ycombinator.com/item?id=43342712) - [The DuckDB Local UI](https://duckdb.org/2025/03/12/duckdb-ui.html)
* [2025-03-12, 12:08:43](https://news.ycombinator.com/item?id=43342361) - [Peer-to-peer file transfers in the browser](https://github.com/kern/filepizza)
* [2025-03-12, 11:47:00](https://lobste.rs/s/35dgcs/rmk_rust_keyboard_firmware_library_with) - [rmk: Rust keyboard firmware library with layers, macros, real-time keymap editing, wireless(BLE) and split support](https://github.com/HaoboGu/rmk)
* [2025-03-12, 11:42:16](https://news.ycombinator.com/item?id=43342178) - [The Future Is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 10:00:37](https://news.ycombinator.com/item?id=43341481) - [Apple has locked me in the same cage Microsoft's built for Windows 10 users](https://www.theregister.com/2025/03/12/hardware_os_lockin_monopolies/)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 08:25:36](https://news.ycombinator.com/item?id=43340948) - [Tell Mozilla: it's time to ditch Google](https://mozillapetition.com/)
* [2025-03-12, 07:38:35](https://news.ycombinator.com/item?id=43340731) - [I stopped everything and started writing C again](https://www.kmx.io/blog/why-stopped-everything-and-started-writing-C-again)
* [2025-03-12, 07:21:28](https://news.ycombinator.com/item?id=43340662) - [I use Cursor daily - here's how I avoid the garbage parts](https://www.nickcraux.com/blog/cursor-tips)
* [2025-03-12, 06:59:39](https://lobste.rs/s/b6vdmd/on_insecurity_telecom_stacks_wake_salt) - [On The Insecurity of Telecom Stacks in the Wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 06:39:17](https://news.ycombinator.com/item?id=43340491) - [Gemma 3 Technical Report [pdf]](https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf)
* [2025-03-12, 05:21:33](https://news.ycombinator.com/item?id=43340196) - [The insecurity of telecom stacks in the wake of Salt Typhoon](https://soatok.blog/2025/03/12/on-the-insecurity-of-telecom-stacks-in-the-wake-of-salt-typhoon/)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 04:48:38](https://lobste.rs/s/z66ftn/art_formatting_code) - [The Art of Formatting Code](https://mcyoung.xyz/2025/03/11/formatters/)
* [2025-03-12, 02:17:09](https://lobste.rs/s/ejs3uh/future_is_niri) - [The Future is Niri](https://ersei.net/en/blog/niri)
* [2025-03-12, 01:56:30](https://lobste.rs/s/1cqlzd/perspectives_from_technical_university) - [Perspectives from the Technical University of Munich](https://mirawelner.com/posts/TUM_thoughts.html)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 23:05:11](https://lobste.rs/s/34dsf7/re_writing_interpreter_rust) - [(Re)writing an interpreter in Rust](https://www.dannyvankooten.com/blog/2022/rewriting-interpreter-rust/)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 16:55:27](https://news.ycombinator.com/item?id=43334507) - [The city that forgot itself](https://thecritic.co.uk/the-city-that-forgot-itself/)
* [2025-03-11, 14:41:12](https://lobste.rs/s/3q0ei5/10x_faster_typescript) - [A 10x Faster TypeScript](https://devblogs.microsoft.com/typescript/typescript-native-port/)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 14:16:54](https://lobste.rs/s/gvkxlf/here_s_how_i_use_llms_help_me_write_code) - [Here’s how I use LLMs to help me write code](https://simonwillison.net/2025/Mar/11/using-llms-for-code/)
* [2025-03-11, 13:19:29](https://news.ycombinator.com/item?id=43332143) - [Three Implementation Models for Scheme (1987) [pdf]](https://legacy.cs.indiana.edu/~dyb/papers/3imp.pdf)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 23:28:09](https://news.ycombinator.com/item?id=43315029) - [Dithering in Colour](https://obrhubr.org/dithering-in-colour)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 17:03:42](https://news.ycombinator.com/item?id=43311082) - [Open source software for modeling soft materials](https://now.tufts.edu/2025/03/04/now-theres-open-source-software-modeling-soft-materials)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 11:53:58](https://news.ycombinator.com/item?id=43308278) - [Open-UI: Maintain an open standard for UI and promote its adherence and adoption](https://github.com/openui/open-ui)
* [2025-03-09, 10:06:27](https://news.ycombinator.com/item?id=43307751) - [My stupid noise journey (2023)](https://dynomight.net/noise/)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 09:23:39](https://news.ycombinator.com/item?id=43307563) - [Switching from Pyenv to Uv](https://bluesock.org/~willkg/blog/dev/switch_pyenv_to_uv.html)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
