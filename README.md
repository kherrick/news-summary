# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [Judges Find AI Doesn't Have Human Intelligence in Two New Court Cases](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Judges have ruled on two cases, determining that current AI systems do not possess human-level intelligence.

* [Robotic Surgery Performed Remotely on Patient 1,500 Miles Away](https://science.slashdot.org/story/26/03/08/2118218/robotic-surgery-performed-remotely-on-patient-1500-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough in robotic surgery has allowed a procedure to be conducted from a distance of 1,500 miles, potentially heralding a new era in healthcare.

* [OpenAI's Former Research Chief Raises $70M to Automate Manufacturing With AI](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The former research chief of OpenAI has secured significant funding to deploy AI in automating manufacturing processes.

## Innovations and Projects

* [Solving Regex Crosswords Without Z3](https://danielalp.com/blog/regex_crossword/) - An in-depth explanation of solving regex crosswords without using the Z3 theorem prover.

* [z80-sans: OpenType font that disassembles Z80 instructions](https://github.com/nevesnunes/z80-sans) - A font that decodes Z80 assembly instructions into assembly source code.

* [I made a programming language with M&Ms](https://mufeedvh.com/posts/i-made-a-programming-language-with-mnms/) - A fascinating and creative project where a programming language is created using colored M&Ms.

* [Living human brain cells play DOOM on a CL1 [video]](https://www.youtube.com/watch?v=yRV8fSw6HaE) - Human brain cells in a lab are used to control and play the iconic video game DOOM.

## Cybersecurity and Internet Discussion

* [A Security Researcher Went 'Undercover' on Moltbook - and Found Security Risks](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A researcher exposes vulnerabilities in Moltbook after going undercover.

* [Notes on Writing Rust-Based Wasm](https://notes.brooklynzelenka.com/Blog/Notes-on-Writing-Wasm) - Detailed insights on developing WebAssembly with Rust.

* [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - A fundamental primer explaining anonymous credentials in online systems.

## Science and Space Exploration

* [A First for Humanity Confirmed: NASA's DART Mission Slowed the Asteroid's Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA's DART mission successfully altered an asteroid's orbital trajectory, marking a major scientific milestone.

* [Japan Approves Stem-Cell Treatments For Parkinson's, Heart Failure In World Firsts](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Japan breaks new ground by approving stem cell treatments for Parkinson's and heart failure.

## Cultural and Historical Reflections

* [The legendary Mojave Phone Booth is back (2013)](https://dailydot.com/mojave-phone-booth-back-number) - A nostalgic look at the Mojave Phone Booth, a quirky piece of history, and its unexpected return.

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

* [2026-03-09, 01:34:00](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judges Find AI Doesn&apos;t Have Human Intelligence in Two New Court Cases](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-09, 00:07:18](https://news.ycombinator.com/item?id=47303111) - [Ask HN: What Are You Working On? (March 2026)](https://news.ycombinator.com/item?id=47303111)
* [2026-03-08, 23:58:14](https://lobste.rs/s/wevip9/webpki_you) - [WebPKI and You](https://blog.brycekerley.net/2026/03/08/webpki-and-you.html)
* [2026-03-08, 23:49:00](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Home-Building Robots Help Fix the Housing Crisis?](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 22:50:55](https://news.ycombinator.com/item?id=47302463) - [Linux Internals: How /proc/self/mem writes to unwritable memory (2021)](https://offlinemark.com/an-obscure-quirk-of-proc/)
* [2026-03-08, 22:39:00](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Security Researcher Went &apos;Undercover&apos; on Moltbook - and Found Security Risks](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 21:40:35](https://news.ycombinator.com/item?id=47301808) - [Blacksky AppView](https://github.com/blacksky-algorithms/atproto)
* [2026-03-08, 21:21:00](https://science.slashdot.org/story/26/03/08/2118218/robotic-surgery-performed-remotely-on-patient-1500-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robotic Surgery Performed Remotely on Patient 1,500 Miles Away](https://science.slashdot.org/story/26/03/08/2118218/robotic-surgery-performed-remotely-on-patient-1500-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 21:08:18](https://lobste.rs/s/zwci4v/getting_started_with_clickhouse_13) - [Getting started with ClickHouse? 13 mistakes and how to avoid them](https://clickhouse.com/blog/common-getting-started-issues-with-clickhouse)
* [2026-03-08, 21:00:44](https://lobste.rs/s/jkq80y/cakelisp) - [Cakelisp](https://macoy.me/code/macoy/cakelisp/src/branch/master/doc/Cakelisp.org)
* [2026-03-08, 20:53:04](https://lobste.rs/s/sdrpbx/why_octal_notation_should_be_used_for_utf_8) - [Why octal notation should be used for UTF-8 (and Unicode) (2016)](https://movq.de/blog/postings/2016-10-05/0/POSTING-en.html)
* [2026-03-08, 20:43:19](https://news.ycombinator.com/item?id=47301241) - [Lil Finder Guy](https://basicappleguy.com/basicappleblog/lil-finder-guy)
* [2026-03-08, 20:42:41](https://news.ycombinator.com/item?id=47301233) - [Artificial-life: A simple (300 lines of code) reproduction of Computational Life](https://github.com/Rabrg/artificial-life)
* [2026-03-08, 20:30:18](https://news.ycombinator.com/item?id=47301085) - [Agent Safehouse – macOS-native sandboxing for local agents](https://agent-safehouse.dev/)
* [2026-03-08, 20:25:25](https://lobste.rs/s/jt2yn5/solving_regex_crosswords_without_z3) - [Solving Regex Crosswords Without Z3](https://danielalp.com/blog/regex_crossword/)
* [2026-03-08, 20:15:46](https://lobste.rs/s/hbybe3/z80_sans_opentype_font_disassembles_z80) - [z80-sans: OpenType font that disassembles Z80 instructions](https://github.com/nevesnunes/z80-sans)
* [2026-03-08, 19:58:15](https://news.ycombinator.com/item?id=47300747) - [We should revisit literate programming in the agent era](https://silly.business/blog/we-should-revisit-literate-programming-in-the-agent-era/)
* [2026-03-08, 19:51:00](https://linux.slashdot.org/story/26/03/08/1948243/steam-on-linux-numbers-dropped-to-223-in-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam on Linux Numbers Dropped to 2.23% in February](https://linux.slashdot.org/story/26/03/08/1948243/steam-on-linux-numbers-dropped-to-223-in-february?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss) - [‘What Matters More To Employers, Education Or Experience?’ Asks AI Expert](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss)
* [2026-03-08, 19:26:59](https://news.ycombinator.com/item?id=47300329) - [Ask HN: Please restrict new accounts from posting](https://news.ycombinator.com/item?id=47300329)
* [2026-03-08, 19:13:04](https://lobste.rs/s/moirx6/cambridge_battlecode_code_bots_compete) - [Cambridge Battlecode: Code bots that compete in a turn-based strategy game](https://battlecode.cam/)
* [2026-03-08, 19:07:33](https://news.ycombinator.com/item?id=47300102) - [Show HN: I built a real-time OSINT dashboard pulling 15 live global feeds](https://github.com/BigBodyCobain/Shadowbroker)
* [2026-03-08, 18:34:00](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Former Research Chief Raises $70M to Automate Manufacturing With AI](https://it.slashdot.org/story/26/03/08/0253259/openais-former-research-chief-raises-70m-to-automate-manufacturing-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 18:18:40](https://news.ycombinator.com/item?id=47299606) - [I made a programming language with M&amp;Ms](https://mufeedvh.com/posts/i-made-a-programming-language-with-mnms/)
* [2026-03-08, 18:14:28](https://lobste.rs/s/cytiqp/ensuring_correctness_through_type) - [Ensuring correctness through the type system](https://lindbakk.com/blog/ensuring-correctness-through-the-type-system)
* [2026-03-08, 18:08:36](https://news.ycombinator.com/item?id=47299505) - [WSL Manager](https://github.com/bostrot/wsl2-distro-manager)
* [2026-03-08, 17:57:58](https://lobste.rs/s/e72lgq/impressions_from_mozilla_1_2b_2002) - [Impressions from Mozilla 1.2b (2002)](https://movq.de/blog/postings/2026-03-08/0/POSTING-en.html)
* [2026-03-08, 17:35:34](https://lobste.rs/s/exxoe2/blocking_http1_1) - [Blocking HTTP1.1](https://sheep.horse/2026/3/blocking_http1.1_-_some_results.html)
* [2026-03-08, 17:34:00](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2/3 of Node.Js Users Run an Outdated Version.  So OpenJS Announces Program Offering Upgrade Providers](https://it.slashdot.org/story/26/03/08/0236233/23-of-nodejs-users-run-an-outdated-version-so-openjs-announces-program-offering-upgrade-providers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 17:17:54](https://news.ycombinator.com/item?id=47299022) - [Show HN: Skir – like Protocol Buffer but better](https://skir.build/)
* [2026-03-08, 17:01:50](https://news.ycombinator.com/item?id=47298885) - [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/)
* [2026-03-08, 16:58:35](https://lobste.rs/s/brz5mw/libreoffice_writer_now_supports) - [LibreOffice Writer now supports Markdown](https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/)
* [2026-03-08, 16:46:10](https://news.ycombinator.com/item?id=47298743) - [My Homelab Setup](https://bryananthonio.com/blog/my-homelab-setup/)
* [2026-03-08, 16:39:30](https://lobste.rs/s/ooandv/gnu_ai_reimplementations) - [GNU and the AI reimplementations](https://antirez.com/news/162)
* [2026-03-08, 16:37:50](https://lobste.rs/s/mljwva/apple_s_512gb_mac_studio_vanishes_quiet) - [Apple&apos;s 512GB Mac Studio vanishes, a quiet acknowledgment of the RAM shortage](https://arstechnica.com/gadgets/2026/03/apples-512gb-mac-studio-vanishes-a-quiet-acknowledgement-of-the-ram-shortage/)
* [2026-03-08, 16:34:00](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey&apos;s Block Accused of &apos;AI-Washing&apos; to Excuse Laying Off Nearly Half Its Workforce](https://it.slashdot.org/story/26/03/08/1110220/jack-dorseys-block-accused-of-ai-washing-to-excuse-laying-off-nearly-half-its-workforce?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 16:31:00](https://lobste.rs/s/j17fxk/lightweight_protocol_assert_authorship) - [Lightweight protocol to assert authorship of content and vouch for humanity of others](https://codeberg.org/robida/human.json)
* [2026-03-08, 15:34:00](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Who Love &apos;Synergizing Paradigms&apos; Might Be Bad at Their Jobs](https://it.slashdot.org/story/26/03/08/0216238/workers-who-love-synergizing-paradigms-might-be-bad-at-their-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 15:21:09](https://news.ycombinator.com/item?id=47298044) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 15:19:12](https://lobste.rs/s/9thupi/framebook) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 15:07:28](https://news.ycombinator.com/item?id=47297919) - [Living human brain cells play DOOM on a CL1 [video]](https://www.youtube.com/watch?v=yRV8fSw6HaE)
* [2026-03-08, 15:05:40](https://news.ycombinator.com/item?id=47297913) - [What if the Apple ][ had run on Field-Sequential?](https://nicole.express/2026/the-apple-that-wasnt.html)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 14:28:29](https://lobste.rs/s/4ze6ia/we_should_revisit_literate_programming) - [We Should Revisit Literate Programming in the Agent Era](https://silly.business/blog/we-should-revisit-literate-programming-in-the-agent-era/)
* [2026-03-08, 13:14:20](https://lobste.rs/s/fkhami/cli_rss_atom_feed_reader_inspired_by) - [CLI RSS/Atom feed reader inspired by Taskwarrior, synced using git](https://github.com/kantord/blogtato)
* [2026-03-08, 13:08:56](https://lobste.rs/s/z765ue/symbolic_derivatives_rust_rewrite_re) - [symbolic derivatives and the rust rewrite of RE#](https://iev.ee/blog/symbolic-derivatives-and-the-rust-rewrite-of-resharp/)
* [2026-03-08, 11:41:17](https://news.ycombinator.com/item?id=47296547) - [Ask HN: How to be alone?](https://news.ycombinator.com/item?id=47296547)
* [2026-03-08, 11:34:00](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI CEOs Worry the Government Will Nationalize AI](https://yro.slashdot.org/story/26/03/07/2058213/ai-ceos-worry-the-government-will-nationalize-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 11:27:41](https://lobste.rs/s/hekrwd/if_it_quacks_like_package_manager) - [If It Quacks Like a Package Manager](https://nesbitt.io/2026/03/08/if-it-quacks-like-a-package-manager.html)
* [2026-03-08, 11:10:14](https://lobste.rs/s/kgpyat/put_zip_code_first) - [Put the ZIP code first](https://zipcodefirst.com/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 09:24:54](https://news.ycombinator.com/item?id=47295837) - [Notes on writing Rust-based Wasm](https://notes.brooklynzelenka.com/Blog/Notes-on-Writing-Wasm)
* [2026-03-08, 08:34:00](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Daylight Saving Time Ritual Continues. But Are There Alternatives?](https://yro.slashdot.org/story/26/03/08/015225/daylight-saving-time-ritual-continues-but-are-there-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 05:04:14](https://news.ycombinator.com/item?id=47294582) - [PCB devboard the size of a USB-C plug](https://github.com/Dieu-de-l-elec/AngstromIO-devboard)
* [2026-03-08, 04:44:00](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As US Tariffs Hit EVs, Hyundai Discontinues Its Cheapest IONIQ 6, While Kia Delays EV6 adn EV9 GT](https://tech.slashdot.org/story/26/03/07/0321225/as-us-tariffs-hit-evs-hyundai-discontinues-its-cheapest-ioniq-6-while-kia-delays-ev6-adn-ev9-gt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 02:34:00](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steven Spielberg + Dinosaurs + Netflix = Mixed Reviews](https://entertainment.slashdot.org/story/26/03/08/0150256/steven-spielberg--dinosaurs--netflix--mixed-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 00:58:16](https://lobste.rs/s/bjb3dz/window_chrome_our_discontent) - [The Window Chrome of Our Discontent](https://pxlnv.com/blog/window-chrome-of-our-discontent/)
* [2026-03-08, 00:57:57](https://news.ycombinator.com/item?id=47293195) - [Pushing and Pulling: Three reactivity algorithms](https://jonathan-frere.com/posts/reactivity-algorithms/)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-08, 00:16:00](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A First for Humanity Confirmed: NASA&apos;s DART Mission Slowed the Asteroid&apos;s Orbit](https://science.slashdot.org/story/26/03/08/004240/a-first-for-humanity-confirmed-nasas-dart-mission-slowed-the-asteroids-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 23:16:00](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Approves Stem-Cell Treatments For Parkinson&apos;s, Heart Failure In World Firsts](https://science.slashdot.org/story/26/03/07/2249259/japan-approves-stem-cell-treatments-for-parkinsons-heart-failure-in-world-firsts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-07, 22:15:12](https://lobste.rs/s/w5czhm/nix_is_lie_s_ok) - [Nix is a lie, and that’s ok](https://fzakaria.com/2026/03/07/nix-is-a-lie-and-that-s-ok)
* [2026-03-07, 22:03:37](https://news.ycombinator.com/item?id=47291876) - [Microscopes can see video on a laserdisc](https://www.youtube.com/watch?v=qZuR-772cks)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 17:04:46](https://lobste.rs/s/xndrk0/usage_specification) - [Usage Specification](https://usage.jdx.dev/spec/)
* [2026-03-07, 16:52:29](https://lobste.rs/s/2zk3oe/pushing_pulling_three_reactivity) - [Pushing and Pulling: Three Reactivity Algorithms](https://jonathan-frere.com/posts/reactivity-algorithms/)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 09:39:13](https://lobste.rs/s/azkace/lenovo_s_new_t_series_thinkpads_score_10_10) - [Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability](https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-06, 22:13:41](https://news.ycombinator.com/item?id=47281827) - [The legendary Mojave Phone Booth is back (2013)](https://dailydot.com/mojave-phone-booth-back-number)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 19:08:54](https://news.ycombinator.com/item?id=47265856) - [SQG (SQL to Code Generator) v0.10: Java Streams and List Type Support](https://sqg.dev/blog/java-streams-and-list-types/)
* [2026-03-05, 17:37:11](https://news.ycombinator.com/item?id=47264660) - [Case Study: lynnandtonic.com 2025 refresh](https://lynnandtonic.com/thoughts/entries/case-study-2025-refresh/)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 12:24:10](https://news.ycombinator.com/item?id=47260812) - [Every single board computer I tested in 2025](https://bret.dk/every-single-board-computer-i-tested-in-2025/)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 02:38:07](https://news.ycombinator.com/item?id=47256810) - [Z80 Sans – a disassembler in a font (2024)](https://github.com/nevesnunes/z80-sans)
* [2026-03-05, 01:37:42](https://news.ycombinator.com/item?id=47256376) - [My “grand vision” for Rust](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
