# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [5 Million People Tried Microsoft's AI Coding Tool 'GitHub Copilot' in the Last 3 Months](https://developers.slashdot.org/story/25/08/03/037202/5-million-people-tried-microsofts-ai-coding-tool-github-copilot-in-the-last-3-months?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&from=rss)

* [Seed7 – The Extensible Programming Language](https://seed7.net)

* [How To Make (almost) Anything (2019)](https://fab.cba.mit.edu/classes/863.19/CBA/people/dsculley/index.html)

* [Injecting Java from Native Libraries on Android](https://octet-stream.net/b/scb/2025-08-03-injecting-java-from-native-libraries-on-android.html)

## Gaming and Entertainment

* [Nintendo Has Sold Over 6 Million Switch 2s, But Still Can't Keep Up With Demand](https://games.slashdot.org/story/25/08/03/0357231/nintendo-has-sold-over-6-million-switch-2s-but-still-cant-keep-up-with-demand?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Itch.io Starts Returning the Free Games It Removed From Its Store](https://games.slashdot.org/story/25/08/03/0537212/itchio-starts-returning-the-free-games-it-removed-from-its-store?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Society and Culture

* [Did Craigslist Really Kill the Newspaper Industry?](https://news.slashdot.org/story/25/08/03/0611232/did-craigslist-really-kill-the-newspaper-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Hackers Steal Driver's Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&from=rss)

* [The Fulbright Program: Chock Full of Bright Ideas](https://bastian.rieck.me/blog/2025/fulbright/)

## Innovative and Quirky

* [Domino's Deploys Boston Dynamics' Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&from=rss)

* [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&from=rss)

* [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&from=rss)

## AI and Ethical Considerations

* [Would AI Perform Better If We Simulated Guilt?](https://slashdot.org/story/25/08/02/1921226/would-ai-perform-better-if-we-simulated-guilt?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [America's Los Alamos Lab Is Now Investing Heavily In AI For Science](https://yro.slashdot.org/story/25/08/03/0447207/americas-los-alamos-lab-is-now-investing-heavily-in-ai-for-science?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Tools Gave False Information About Tsunami Advisories](https://slashdot.org/story/25/08/02/1645254/ai-tools-gave-false-information-about-tsunami-advisories?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 15:34:00](https://developers.slashdot.org/story/25/08/03/037202/5-million-people-tried-microsofts-ai-coding-tool-github-copilot-in-the-last-3-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [5 Million People Tried Microsoft&apos;s AI Coding Tool &apos;GitHub Copilot&apos; in the Last 3 Months](https://developers.slashdot.org/story/25/08/03/037202/5-million-people-tried-microsofts-ai-coding-tool-github-copilot-in-the-last-3-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 14:34:00](https://games.slashdot.org/story/25/08/03/0357231/nintendo-has-sold-over-6-million-switch-2s-but-still-cant-keep-up-with-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Has Sold Over 6 Million Switch 2s, But Still Can&apos;t Keep Up With Demand](https://games.slashdot.org/story/25/08/03/0357231/nintendo-has-sold-over-6-million-switch-2s-but-still-cant-keep-up-with-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 13:30:48](https://lobste.rs/s/ocpifu/cchistory_tracking_claude_code_system) - [cchistory: Tracking Claude Code System Prompt and Tool Changes](https://mariozechner.at/posts/2025-08-03-cchistory/)
* [2025-08-03, 13:24:58](https://news.ycombinator.com/item?id=44776434) - [The Fulbright Program: Chock Full of Bright Ideas](https://bastian.rieck.me/blog/2025/fulbright/)
* [2025-08-03, 11:59:36](https://lobste.rs/s/kewo98/why_semantic_html_still_matters) - [Why Semantic HTML Still Matters](https://www.jonoalderson.com/conjecture/why-semantic-html-still-matters/)
* [2025-08-03, 11:57:34](https://lobste.rs/s/ktd0ss/people_still_use_our_old_fashioned_unix) - [People still use our old-fashioned Unix login servers](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/LoginServersStillUsed)
* [2025-08-03, 11:34:00](https://news.slashdot.org/story/25/08/03/0611232/did-craigslist-really-kill-the-newspaper-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Craigslist Really Kill the Newspaper Industry?](https://news.slashdot.org/story/25/08/03/0611232/did-craigslist-really-kill-the-newspaper-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 11:28:29](https://news.ycombinator.com/item?id=44775830) - [How To Make (almost) Anything (2019)](https://fab.cba.mit.edu/classes/863.19/CBA/people/dsculley/index.html)
* [2025-08-03, 11:20:14](https://lobste.rs/s/k74xzb/injecting_java_from_native_libraries_on) - [Injecting Java from native libraries on Android](https://octet-stream.net/b/scb/2025-08-03-injecting-java-from-native-libraries-on-android.html)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 10:32:51](https://news.ycombinator.com/item?id=44775563) - [If you&apos;re remote, ramble](https://stephango.com/ramblings)
* [2025-08-03, 07:42:00](https://games.slashdot.org/story/25/08/03/0537212/itchio-starts-returning-the-free-games-it-removed-from-its-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Itch.io Starts Returning the Free Games It Removed From Its Store](https://games.slashdot.org/story/25/08/03/0537212/itchio-starts-returning-the-free-games-it-removed-from-its-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 07:28:54](https://lobste.rs/s/hlj66l/type_safety_back_forth) - [Type Safety Back and Forth](https://www.parsonsmatt.org/2017/10/11/type_safety_back_and_forth.html)
* [2025-08-03, 07:21:20](https://lobste.rs/s/uon7sc/parse_don_t_validate_2019) - [Parse, don’t validate (2019)](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)
* [2025-08-03, 06:38:43](https://news.ycombinator.com/item?id=44774567) - [A Real PowerBook: The Macintosh Application Environment on a Pa-RISC Laptop](http://oldvcr.blogspot.com/2025/08/a-real-powerbook-macintosh-application.html)
* [2025-08-03, 06:37:19](https://lobste.rs/s/zxot3i/real_powerbook_macintosh_application) - [A real PowerBook: the Macintosh Application Environment on a PA-RISC laptop](http://oldvcr.blogspot.com/2025/08/a-real-powerbook-macintosh-application.html)
* [2025-08-03, 06:13:23](https://lobste.rs/s/zboryt/c_language_enum_tips_tricks_2021) - [C Language Enum Tips &amp; Tricks (2021)](https://kubyshkin.name/posts/c-language-enums-tips-and-tricks/)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 05:48:37](https://lobste.rs/s/lkgcjg/twenty_eighth_international_obfuscated) - [Twenty Eighth International Obfuscated C Code Contest](https://www.ioccc.org/2024/index.html)
* [2025-08-03, 05:09:52](https://lobste.rs/s/jcycvq/tagged_unions_are_actually_quite_sexy) - [Tagged Unions are actually quite sexy](https://ciesie.com/post/tagged_unions/)
* [2025-08-03, 04:49:00](https://yro.slashdot.org/story/25/08/03/0447207/americas-los-alamos-lab-is-now-investing-heavily-in-ai-for-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Los Alamos Lab Is Now Investing Heavily In AI For Science](https://yro.slashdot.org/story/25/08/03/0447207/americas-los-alamos-lab-is-now-investing-heavily-in-ai-for-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 04:34:36](https://news.ycombinator.com/item?id=44774104) - [Twenty Eighth International Obfuscated C Code Contest](https://www.ioccc.org/2024/index.html)
* [2025-08-03, 04:11:55](https://news.ycombinator.com/item?id=44774027) - [Seed7 – The Extensible Programming Language](https://seed7.net)
* [2025-08-03, 03:43:42](https://news.ycombinator.com/item?id=44773919) - [Writing a basic service for GNU Guix](https://tannerhoelzel.com/gnu-shepherd-simple-service.html)
* [2025-08-03, 01:43:00](https://developers.slashdot.org/story/25/08/03/0141234/fiverr-ad-mocks-vibe-coding---with-a-singing-overripe-avocado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fiverr Ad Mocks Vibe Coding - with a Singing Overripe Avocado](https://developers.slashdot.org/story/25/08/03/0141234/fiverr-ad-mocks-vibe-coding---with-a-singing-overripe-avocado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-03, 00:36:00](https://slashdot.org/story/25/08/02/1921226/would-ai-perform-better-if-we-simulated-guilt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Would AI Perform Better If We Simulated Guilt?](https://slashdot.org/story/25/08/02/1921226/would-ai-perform-better-if-we-simulated-guilt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-03, 00:12:15](https://news.ycombinator.com/item?id=44772917) - [C++26 Reflections adventures and compile-time UML](https://www.reachablecode.com/2025/07/31/c26-reflections-adventures-compile-time-uml/)
* [2025-08-02, 23:36:00](https://yro.slashdot.org/story/25/08/02/2334243/despite-breach-and-lawsuits-tea-dating-app-surges-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Despite Breach and Lawsuits, Tea Dating App Surges in Popularity](https://yro.slashdot.org/story/25/08/02/2334243/despite-breach-and-lawsuits-tea-dating-app-surges-in-popularity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 22:49:11](https://lobste.rs/s/ngo3ex/how_do_you_backup_your_non_work_related) - [How do you backup your non-work-related data?](https://lobste.rs/s/ngo3ex/how_do_you_backup_your_non_work_related)
* [2025-08-02, 22:26:47](https://news.ycombinator.com/item?id=44772177) - [HTML-in-Canvas](https://github.com/WICG/html-in-canvas)
* [2025-08-02, 21:39:42](https://news.ycombinator.com/item?id=44771808) - [Lina Khan points to Figma IPO as vindication of M&amp;A scrutiny](https://techcrunch.com/2025/08/02/lina-khan-points-to-figma-ipo-as-vindication-for-ma-scrutiny/)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 20:34:00](https://hardware.slashdot.org/story/25/08/02/1848200/four-radioactive-wasp-nests-found-near-us-nuclear-storage-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Four Radioactive Wasp Nests Found Near US Nuclear Storage Site](https://hardware.slashdot.org/story/25/08/02/1848200/four-radioactive-wasp-nests-found-near-us-nuclear-storage-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 19:34:00](https://slashdot.org/story/25/08/02/1645254/ai-tools-gave-false-information-about-tsunami-advisories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tools Gave False Information About Tsunami Advisories](https://slashdot.org/story/25/08/02/1645254/ai-tools-gave-false-information-about-tsunami-advisories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 19:22:58](https://lobste.rs/s/k3g2l0/compressing_icelandic_name_declension) - [Compressing Icelandic name declension patterns into a 3.27 kB trie](https://alexharri.com/blog/icelandic-name-declension-trie)
* [2025-08-02, 18:34:00](https://news.slashdot.org/story/25/08/02/0059225/satellites-drones-and-ai-the-new-high-tech-quest-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellites, Drones, and AI:  the New &apos;High-Tech Quest to Fight Wildfires&apos;](https://news.slashdot.org/story/25/08/02/0059225/satellites-drones-and-ai-the-new-high-tech-quest-to-fight-wildfires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 18:31:50](https://lobste.rs/s/lwufi3/rubik_s_cube_perfect_scramble) - [The Rubik&apos;s Cube Perfect Scramble](https://www.solutionslookingforproblems.com/post/the-rubik-s-cube-perfect-scramble)
* [2025-08-02, 17:37:38](https://lobste.rs/s/bf14oh/how_reverse_engineer_analog_chip_tda7000) - [How to reverse engineer an analog chip: the TDA7000 FM radio receiver](http://www.righto.com/2025/08/reverse-engineering-analog-TDA7000.html)
* [2025-08-02, 17:34:00](https://linux.slashdot.org/story/25/08/02/0551235/new-steam-on-linux-market-share-stats-likely-the-largest-surveyed-figure-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Steam on Linux Market Share Stats &apos;Likely the Largest Surveyed Figure Ever&apos;](https://linux.slashdot.org/story/25/08/02/0551235/new-steam-on-linux-market-share-stats-likely-the-largest-surveyed-figure-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 16:40:51](https://news.ycombinator.com/item?id=44769039) - [Telo MT1](https://www.telotrucks.com/)
* [2025-08-02, 16:34:00](https://science.slashdot.org/story/25/08/02/0516214/early-universes-little-red-dots-may-be-black-hole-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Early Universe&apos;s &apos;Little Red Dots&apos; May Be Black Hole Stars](https://science.slashdot.org/story/25/08/02/0516214/early-universes-little-red-dots-may-be-black-hole-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 15:34:00](https://news.slashdot.org/story/25/08/02/030232/facing-us-chip-restrictions-china-pitches-global-cooperation-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Facing US Chip Restrictions, China Pitches Global Cooperation on AI](https://news.slashdot.org/story/25/08/02/030232/facing-us-chip-restrictions-china-pitches-global-cooperation-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 14:36:18](https://lobste.rs/s/efn1an/o_ruby_regex_stands_for_oh_humanity) - [The /o in Ruby regex stands for “oh the humanity!”](https://jpcamara.com/2025/08/02/the-o-in-ruby-regex.html)
* [2025-08-02, 14:34:00](https://science.slashdot.org/story/25/08/02/0426200/for-sale-a-1990-airstream-trailernasa-command-vehicle-for-space-shuttle-landings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [For Sale: a 1990 Airstream Trailer/NASA Command Vehicle for Space Shuttle Landings](https://science.slashdot.org/story/25/08/02/0426200/for-sale-a-1990-airstream-trailernasa-command-vehicle-for-space-shuttle-landings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-02, 13:43:10](https://news.ycombinator.com/item?id=44767555) - [The Art of Multiprocessor Programming 2nd Edition Book Club](https://eatonphil.com/2025-art-of-multiprocessor-programming.html)
* [2025-08-02, 13:27:25](https://news.ycombinator.com/item?id=44767433) - [Anandtech.com now redirects to its forums](https://forums.anandtech.com/)
* [2025-08-02, 13:12:39](https://lobste.rs/s/0jfjcg/executing_arbitrary_python_code_from) - [Executing arbitrary Python code from a comment](https://www.hacktron.ai/blog/posts/python-zip-confusion/)
* [2025-08-02, 12:34:19](https://lobste.rs/s/rjfxop/bytecode_vm_for_arithmetic_parser) - [A Bytecode VM for Arithmetic: The Parser](https://abhinavsarkar.net/posts/arithmetic-bytecode-vm-parser/)
* [2025-08-02, 12:12:27](https://news.ycombinator.com/item?id=44766962) - [At a Loss for Words: A flawed idea is teaching kids to be poor readers (2019)](https://www.apmreports.org/episode/2019/08/22/whats-wrong-how-schools-teach-reading)
* [2025-08-02, 11:34:39](https://news.ycombinator.com/item?id=44766758) - [A.I. researchers are negotiating $250M pay packages](https://www.nytimes.com/2025/07/31/technology/ai-researchers-nba-stars.html)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 11:07:31](https://lobste.rs/s/8ygkg5/how_help_someone_use_computer) - [How to help someone use a computer](https://pages.gseis.ucla.edu/faculty/agre/how-to-help.html)
* [2025-08-02, 11:02:40](https://lobste.rs/s/nxde0i/less_glue_more_product_why_elixir_shrinks) - [Less Glue, More Product: Why Elixir Shrinks Architectural Complexity](https://iamkonstantin.eu/blog/less-glue-more-product-why-elixir-shrinks-architectural-complexity/)
* [2025-08-02, 10:59:12](https://lobste.rs/s/jf7ldc/this_month_ladybird_july_2025) - [This Month in Ladybird - July 2025](https://ladybird.org/newsletter/2025-07-31/)
* [2025-08-02, 10:52:36](https://news.ycombinator.com/item?id=44766508) - [We may not like what we become if A.I. solves loneliness](https://www.newyorker.com/magazine/2025/07/21/ai-is-about-to-solve-loneliness-thats-a-problem)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 05:23:40](https://lobste.rs/s/pm9hcp/keep_calm_carry_on) - [Keep calm and carry on](https://boston.conman.org/2025/08/01.1)
* [2025-08-02, 04:26:53](https://lobste.rs/s/6b3ete/jujutsu_for_busy_devs_part_2_how_do_i) - [Jujutsu For Busy Devs, Part 2: \&quot;How Do I...?\&quot;](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs/entry/1)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
* [2025-08-02, 00:22:14](https://lobste.rs/s/houeoz/candyfloss_ergonomic_python_library_for) - [candyfloss: an ergonomic python library for running video pipelines](https://git.hella.cheap/bob/candyfloss)
* [2025-08-01, 20:52:00](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss) - [Intel Confirms It Will Dramatically Cut Its Workforce By The End Of 2025](https://soylentnews.org/article.pl?sid=25/07/30/1511218&amp;from=rss)
* [2025-08-01, 20:47:01](https://lobste.rs/s/mlnvoy/it_s_rude_show_ai_output_people) - [It&apos;s rude to show AI output to people](https://distantprovince.by/posts/its-rude-to-show-ai-output-to-people/)
* [2025-08-01, 16:58:10](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox) - [Lobsters Interview with Icefox](https://lobste.rs/s/2vfx6w/lobsters_interview_with_icefox)
* [2025-08-01, 16:12:00](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss) - [Trump Caving on Nvidia H20 Export Curbs May Disrupt His Bigger Trade War](https://soylentnews.org/politics/article.pl?sid=25/07/30/158210&amp;from=rss)
* [2025-08-01, 11:24:00](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss) - [From Apple to Greek Defense Start-up](https://soylentnews.org/article.pl?sid=25/07/30/1457215&amp;from=rss)
* [2025-08-01, 06:41:00](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss) - [X37B is Set to Launch and Test Quantum Navigation Technology](https://soylentnews.org/article.pl?sid=25/07/30/1450258&amp;from=rss)
* [2025-08-01, 01:55:00](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss) - [Anthropic Unveils New Rate Limits to Curb Claude Code Power Users](https://soylentnews.org/article.pl?sid=25/07/30/1438215&amp;from=rss)
* [2025-07-31, 21:10:00](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss) - [Meta Pirated and Seeded Porn for Years to Train AI, Lawsuit Says](https://soylentnews.org/article.pl?sid=25/07/30/0143216&amp;from=rss)
* [2025-07-31, 16:29:00](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss) - [Why We Need a Right Not to be Manipulated](https://soylentnews.org/article.pl?sid=25/07/30/0133228&amp;from=rss)
* [2025-07-31, 15:25:49](https://news.ycombinator.com/item?id=44746621) - [6 weeks of Claude Code](https://blog.puzzmo.com/posts/2025/07/30/six-weeks-of-claude-code/)
* [2025-07-31, 15:21:31](https://news.ycombinator.com/item?id=44746583) - [PixiEditor 2.0 – A FOSS universal 2D graphics editor](https://pixieditor.net/blog/2025/07/30/20-release/)
* [2025-07-31, 14:28:58](https://news.ycombinator.com/item?id=44746062) - [Show HN: Implementation of DDPM (Denoising Diffusion Probabilistic Models)](https://github.com/alenMangattu/DDPM-Denoising-Diffusion-Probabilistic-Models)
* [2025-07-31, 13:59:41](https://news.ycombinator.com/item?id=44745727) - [Ongoing Lean formalisation of the proof of Fermat&apos;s Last Theorem](https://github.com/ImperialCollegeLondon/FLT)
* [2025-07-31, 13:29:40](https://news.ycombinator.com/item?id=44745441) - [Imaging reveals intricate tattoos of 2,500-year-old Siberian ice mummy](https://www.bbc.com/news/articles/c4gzx0zm68vo)
* [2025-07-31, 11:45:00](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss) - [We Are Undergoing Unprecedented Loss of Freshwater Across the Planet](https://soylentnews.org/article.pl?sid=25/07/30/0127251&amp;from=rss)
* [2025-07-31, 07:01:00](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss) - [Manuel Moreale on Why Blogs Matter](https://soylentnews.org/article.pl?sid=25/07/30/0121254&amp;from=rss)
* [2025-07-31, 02:17:00](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss) - [FreeBSD 15.0’S Installer to Gain Option to Install a Full KDE Plasma Desktop Environment](https://soylentnews.org/article.pl?sid=25/07/30/0113232&amp;from=rss)
* [2025-07-30, 22:34:47](https://news.ycombinator.com/item?id=44740325) - [The Ski Rental Problem](https://lesves.github.io/articles/ski-rental/)
* [2025-07-30, 21:54:00](https://news.ycombinator.com/item?id=44739944) - [Micron rolls out 276-layer SSD trio for speed, scale, and stability](https://blocksandfiles.com/2025/07/30/micron-three-276-layer-ssds/)
* [2025-07-30, 21:38:24](https://news.ycombinator.com/item?id=44739813) - [Flipping Bits in the World](https://opuslabs.substack.com/p/how-to-flip-bits-in-the-world)
* [2025-07-30, 21:32:00](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss) - [OpenAI’s ChatGPT Agent Casually Clicks Through “I am not a robot” Verification Test](https://soylentnews.org/article.pl?sid=25/07/29/1652215&amp;from=rss)
* [2025-07-30, 18:20:03](https://news.ycombinator.com/item?id=44737738) - [Flourishing chemosynthetic life at the greatest depths of hadal trenches](https://www.nature.com/articles/s41586-025-09317-z)
* [2025-07-30, 17:47:12](https://news.ycombinator.com/item?id=44737296) - [Descent of Inanna into the Underworld](https://en.wikipedia.org/wiki/Descent_of_Inanna_into_the_Underworld)
* [2025-07-30, 17:14:04](https://news.ycombinator.com/item?id=44736854) - [Build Your Own Minisforum N5 Inspired Mini NAS: A Comprehensive Guide](https://jackharvest.com/index.php/2025/07/27/build-your-own-minisforum-n5-inspired-mini-nas-a-comprehensive-guide/)
* [2025-07-30, 16:48:00](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss) - [NASA’s Webb Finds Possible &apos;Direct Collapse&apos; Black Hole](https://soylentnews.org/article.pl?sid=25/07/29/0611252&amp;from=rss)
* [2025-07-30, 16:08:02](https://news.ycombinator.com/item?id=44736025) - [Helsinki records zero traffic deaths for full year](https://www.helsinkitimes.fi/finland/finland-news/domestic/27539-helsinki-records-zero-traffic-deaths-for-full-year.html)
* [2025-07-30, 14:56:46](https://news.ycombinator.com/item?id=44735059) - [LangExtract: Python library for extracting structured data from language models](https://github.com/google/langextract)
* [2025-07-30, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss) - [EU-US Draft 15Pc Tariff Agreement Appears To Include Pharma, Chips](https://soylentnews.org/article.pl?sid=25/07/28/1538201&amp;from=rss)
* [2025-07-30, 07:13:00](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss) - [China Advances Toward Tech Independence With New Homegrown 6nm Gaming And AI GPUs](https://soylentnews.org/article.pl?sid=25/07/28/1533222&amp;from=rss)
* [2025-07-30, 02:53:10](https://news.ycombinator.com/item?id=44730544) - [Online Collection of Keygen Music](https://keygenmusic.tk)
* [2025-07-30, 02:32:00](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss) - [Nasa May Lose Close To 4,000 Employees After Latest Deferred Resignation Round](https://soylentnews.org/article.pl?sid=25/07/28/1524227&amp;from=rss)
