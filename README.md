# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Lost Unix v4 Possibly Recovered on a Forgotten Bell Labs Tape From 1973](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Rust Is Coming To Debian's APT Package Manager](https://linux.slashdot.org/story/25/11/09/0232234/rust-is-coming-to-debians-apt-package-manager?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Ironclad, a formally verified Unix-like kernel written in Ada](https://ironclad-os.org/)

* [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&from=rss)

* [The Manuscripts of Edsger W. Dijkstra](https://www.cs.utexas.edu/~EWD/)

## Artificial Intelligence and Ethics

* [What Happens When Humans Start Writing for AI?](https://news.slashdot.org/story/25/11/10/0133240/what-happens-when-humans-start-writing-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* ['AI Slop' in Court Filings: Lawyers Keep Citing Fake AI-Hallucinated Cases](https://yro.slashdot.org/story/25/11/09/189220/ai-slop-in-court-filings-lawyers-keep-citing-fake-ai-hallucinated-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&from=rss)

* [Genetically Engineered Babies Are Banned in the US. But Tech Titans Are Trying to Make One Anyway](https://science.slashdot.org/story/25/11/09/2141233/genetically-engineered-babies-are-banned-in-the-us-but-tech-titans-are-trying-to-make-one-anyway?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Preservation

* [Nonprofit Releases Thousands of Rare American Music Recordings Online](https://entertainment.slashdot.org/story/25/11/10/0357222/nonprofit-releases-thousands-of-rare-american-music-recordings-online?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Montana becomes first state to enshrine 'right to compute' into law](https://montananewsroom.com/montana-becomes-first-state-to-enshrine-right-to-compute-into-law/)

* [Reviving Classic Unix Games: A 20-Year Journey Through Software Archaeology](https://vejeta.com/reviving-classic-unix-games-a-20-year-journey-through-software-archaeology/)

* [The Computer Church – Pennsylvania Computer and Technology Museum](https://www.thecomputerchurch.org/)

## Emerging Trends and Market Shifts

* [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&from=rss)

* [Python Foundation Donations Surge After Rejecting Grant - But Sponsorships Still Needed](https://developers.slashdot.org/story/25/11/09/2017240/python-foundation-donations-surge-after-rejecting-grant---but-sponsorships-still-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Apple Explores New Satellite Features for Future iPhones](https://apple.slashdot.org/story/25/11/09/2353232/apple-explores-new-satellite-features-for-future-iphones?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Miscellaneous Highlights

* ['Breaking Bad' Creator Hates AI, Promises New Show 'Pluribus' Was 'Made By Humans'](https://entertainment.slashdot.org/story/25/11/09/047221/breaking-bad-creator-hates-ai-promises-new-show-pluribus-was-made-by-humans?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Bumble Berry Pi – A Cheap DIY Raspberry Pi Handheld Cyberdeck](https://github.com/samcervantes/bumble-berry-pi)

* [Drilling down on Uncle Sam's proposed TP-Link ban](https://krebsonsecurity.com/2025/11/drilling-down-on-uncle-sams-proposed-tp-link-ban/)

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

* [2025-11-10, 06:37:51](https://lobste.rs/s/tevqkd/marble_fountain) - [Marble Fountain](https://willmorrison.net/posts/marble-fountain/)
* [2025-11-10, 06:37:42](https://lobste.rs/s/ugx90t/voxel_engine_weekend) - [Voxel Engine in a Weekend](https://daymare.net/blogs/voxel-engine-in-a-weekend/)
* [2025-11-10, 05:59:00](https://developers.slashdot.org/story/25/11/10/0552217/rust-foundation-announces-maintainers-fund-to-ensure-continuity-and-support-long-term-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Foundation Announces &apos;Maintainers Fund&apos; to Ensure Continuity and Support Long-Term Roles](https://developers.slashdot.org/story/25/11/10/0552217/rust-foundation-announces-maintainers-fund-to-ensure-continuity-and-support-long-term-roles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 03:59:00](https://entertainment.slashdot.org/story/25/11/10/0357222/nonprofit-releases-thousands-of-rare-american-music-recordings-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nonprofit Releases Thousands of Rare American Music Recordings Online](https://entertainment.slashdot.org/story/25/11/10/0357222/nonprofit-releases-thousands-of-rare-american-music-recordings-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 03:47:00](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss) - [Blame game over Air India crash goes on](https://soylentnews.org/article.pl?sid=25/11/08/1723229&amp;from=rss)
* [2025-11-10, 02:55:55](https://lobste.rs/s/undft9/software_synthesizer_modellled_on) - [a software synthesizer modellled on Yevgeny Murzin&apos;s ANS synthesizer](https://github.com/frankenbeans/MZ2SYNTH)
* [2025-11-10, 02:29:06](https://lobste.rs/s/agae3o/error_abi) - [Error ABI](https://matklad.github.io/2025/11/09/error-ABI.html)
* [2025-11-10, 02:10:59](https://news.ycombinator.com/item?id=45871531) - [LLM policy?](https://github.com/opencontainers/runc/issues/4990)
* [2025-11-10, 01:35:00](https://news.slashdot.org/story/25/11/10/0133240/what-happens-when-humans-start-writing-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When Humans Start Writing for AI?](https://news.slashdot.org/story/25/11/10/0133240/what-happens-when-humans-start-writing-for-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-10, 00:51:33](https://news.ycombinator.com/item?id=45870925) - [Show HN: DroidDock – A sleek macOS app for browsing Android device files via ADB](https://rajivm1991.github.io/DroidDock/)
* [2025-11-10, 00:43:59](https://news.ycombinator.com/item?id=45870863) - [Work after work: Notes from an unemployed new grad watching the job market break](https://urlahmed.com/2025/11/05/work-after-work-notes-from-an-unemployed-new-grad-watching-the-job-market-break/)
* [2025-11-10, 00:13:11](https://news.ycombinator.com/item?id=45870675) - [Sued by Nintendo](https://www.suedbynintendo.com/)
* [2025-11-09, 23:56:00](https://apple.slashdot.org/story/25/11/09/2353232/apple-explores-new-satellite-features-for-future-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Explores New Satellite Features for Future iPhones](https://apple.slashdot.org/story/25/11/09/2353232/apple-explores-new-satellite-features-for-future-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 23:06:00](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss) - [The 2026 Farmers’ Almanac Will Be Its Last Edition](https://soylentnews.org/article.pl?sid=25/11/08/1721215&amp;from=rss)
* [2025-11-09, 22:58:51](https://lobste.rs/s/ityd7h/software_design_patterns_are_there_test) - [Software design patterns; Are there test cases or recipes for specific patterns?](https://lobste.rs/s/ityd7h/software_design_patterns_are_there_test)
* [2025-11-09, 21:56:29](https://news.ycombinator.com/item?id=45869587) - [Metabolic and cellular differences between sedentary and active individuals](https://howardluksmd.substack.com/p/if-youre-not-active-youre-sick-you)
* [2025-11-09, 21:50:31](https://lobste.rs/s/fdz07i/erase_startup_config_isn_t_enough) - [\&quot;erase startup-config\&quot; isn&apos;t enough](https://alyx.sh/posts/erase-startup-config/)
* [2025-11-09, 21:43:00](https://science.slashdot.org/story/25/11/09/2141233/genetically-engineered-babies-are-banned-in-the-us-but-tech-titans-are-trying-to-make-one-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Genetically Engineered Babies Are Banned in the US. But Tech Titans Are Trying to Make One Anyway](https://science.slashdot.org/story/25/11/09/2141233/genetically-engineered-babies-are-banned-in-the-us-but-tech-titans-are-trying-to-make-one-anyway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 21:03:59](https://lobste.rs/s/zhwdem/plan_for_5_10_faster_free_threaded_jit_by) - [A Plan for 5-10%* Faster Free-Threaded JIT by Python 3.16](https://fidget-spinner.github.io/posts/faster-jit-plan.html)
* [2025-11-09, 21:02:33](https://news.ycombinator.com/item?id=45869146) - [Ask HN: What Are You Working On? (Nov 2025)](https://news.ycombinator.com/item?id=45869146)
* [2025-11-09, 20:43:00](https://developers.slashdot.org/story/25/11/09/2017240/python-foundation-donations-surge-after-rejecting-grant---but-sponsorships-still-needed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python Foundation Donations Surge After Rejecting Grant - But Sponsorships Still Needed](https://developers.slashdot.org/story/25/11/09/2017240/python-foundation-donations-surge-after-rejecting-grant---but-sponsorships-still-needed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 19:47:49](https://news.ycombinator.com/item?id=45868533) - [The Computer Church – Pennsylvania Computer and Technology Museum](https://www.thecomputerchurch.org/)
* [2025-11-09, 19:43:00](https://science.slashdot.org/story/25/11/09/1845207/blue-origin-postpones-attempt-to-launch-unique-escapade-orbiters-to-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Postpones Attempt to Launch Unique &apos;&apos;EscaPADE&apos; Orbiters to Mars](https://science.slashdot.org/story/25/11/09/1845207/blue-origin-postpones-attempt-to-launch-unique-escapade-orbiters-to-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 19:15:21](https://news.ycombinator.com/item?id=45868259) - [The Sega Master System](https://bumbershootsoft.wordpress.com/2025/11/08/the-sega-master-system/)
* [2025-11-09, 19:04:00](https://yro.slashdot.org/story/25/11/09/189220/ai-slop-in-court-filings-lawyers-keep-citing-fake-ai-hallucinated-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;AI Slop&apos; in Court Filings: Lawyers Keep Citing Fake AI-Hallucinated Cases](https://yro.slashdot.org/story/25/11/09/189220/ai-slop-in-court-filings-lawyers-keep-citing-fake-ai-hallucinated-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 18:34:57](https://lobste.rs/s/reouib/neovim_vs_emacs_roundtable_w_tj_devries) - [Neovim vs Emacs | Roundtable w/ TJ DeVries, DistroTube, Greg Anders &amp; Joshua Blais](https://www.youtube.com/watch?v=SnhcXR9CKno)
* [2025-11-09, 18:17:44](https://news.ycombinator.com/item?id=45867717) - [Drilling down on Uncle Sam&apos;s proposed TP-Link ban](https://krebsonsecurity.com/2025/11/drilling-down-on-uncle-sams-proposed-tp-link-ban/)
* [2025-11-09, 18:17:00](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss) - [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss)
* [2025-11-09, 18:14:04](https://lobste.rs/s/qpbl8s/acme_user_interface_for_programmers_1994) - [Acme: A User Interface for Programmers (1994)](https://doc.cat-v.org/plan_9/4th_edition/papers/acme/)
* [2025-11-09, 18:04:00](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lost Unix v4 Possibly Recovered on a Forgotten Bell Labs Tape From 1973](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 17:10:29](https://lobste.rs/s/wmjhdx/value_classes_are_new_data_classes) - [Value classes are the new data classes](https://curiouslab.dev/0002-value-classes-are-new-data-casses.html)
* [2025-11-09, 17:04:00](https://it.slashdot.org/story/25/11/09/0610228/neurodiverse-professionals-25-more-satisfied-with-ai-tools-and-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neurodiverse Professionals 25% More Satisfied With AI Tools and Agents](https://it.slashdot.org/story/25/11/09/0610228/neurodiverse-professionals-25-more-satisfied-with-ai-tools-and-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 16:47:54](https://lobste.rs/s/53xbdq/about_keepassxc_s_code_quality_control) - [About KeePassXC’s Code Quality Control](https://keepassxc.org/blog/2025-11-09-about-keepassxcs-code-quality-control/)
* [2025-11-09, 16:37:50](https://lobste.rs/s/44zer0/16_bit_data_pointers_on_rv32) - [16-bit Data Pointers on RV32](https://wren.wtf/shower-thoughts/16-bit-data-pointers-on-rv32/)
* [2025-11-09, 16:34:44](https://news.ycombinator.com/item?id=45866772) - [Bumble Berry Pi – A Cheap DIY Raspberry Pi Handheld Cyberdeck](https://github.com/samcervantes/bumble-berry-pi)
* [2025-11-09, 16:26:09](https://news.ycombinator.com/item?id=45866697) - [Marble Fountain](https://willmorrison.net/posts/marble-fountain/)
* [2025-11-09, 16:10:23](https://news.ycombinator.com/item?id=45866572) - [The Principles of Diffusion Models](https://arxiv.org/abs/2510.21890)
* [2025-11-09, 16:04:00](https://tech.slashdot.org/story/25/11/08/0816223/americas-faa-grounds-md-11s-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s FAA Grounds MD-11s After Tuesday&apos;s Crash in Kentucky](https://tech.slashdot.org/story/25/11/08/0816223/americas-faa-grounds-md-11s-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 15:34:00](https://linux.slashdot.org/story/25/11/09/0232234/rust-is-coming-to-debians-apt-package-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Is Coming To Debian&apos;s APT Package Manager](https://linux.slashdot.org/story/25/11/09/0232234/rust-is-coming-to-debians-apt-package-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 15:32:23](https://lobste.rs/s/t0fjqn/sprites_mods_kid_cam_firmware_modding) - [Sprites mods - Kid-cam firmware modding](https://spritesmods.com/?art=kid_cam)
* [2025-11-09, 15:27:42](https://news.ycombinator.com/item?id=45866224) - [The Manuscripts of Edsger W. Dijkstra](https://www.cs.utexas.edu/~EWD/)
* [2025-11-09, 14:59:13](https://lobste.rs/s/uf12ap/email_verification_protocol_verified) - [email-verification-protocol: verified autofill](https://github.com/WICG/email-verification-protocol)
* [2025-11-09, 14:52:32](https://lobste.rs/s/0rtjwc/new_du_command_lib_cargo_bin_coreutils) - [The new `du` command (in `/lib/cargo/bin/coreutils`) outputs wrong sizes in Ubuntu 25.10](https://askubuntu.com/questions/1559396/the-new-du-command-in-lib-cargo-bin-coreutils-outputs-wrong-sizes-in-ubun)
* [2025-11-09, 13:40:43](https://news.ycombinator.com/item?id=45865546) - [Show HN: Pipeflow-PHP – Automate anything with pipelines even non-devs can edit](https://github.com/marcosiino/pipeflow-php)
* [2025-11-09, 13:35:00](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss) - [Ford CEO Jim Farley strikes a Cautious Tone on Apple’s New CarPlay Ultra](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss)
* [2025-11-09, 13:03:36](https://news.ycombinator.com/item?id=45865289) - [Montana becomes first state to enshrine &apos;right to compute&apos; into law](https://montananewsroom.com/montana-becomes-first-state-to-enshrine-right-to-compute-into-law/)
* [2025-11-09, 12:50:07](https://news.ycombinator.com/item?id=45865189) - [Zensical – A modern static site generator built by the Material for MkDocs team](https://squidfunk.github.io/mkdocs-material/blog/2025/11/05/zensical/)
* [2025-11-09, 12:48:17](https://lobste.rs/s/cxbkzm/imperative_relational) - [Imperative to relational](https://madhadron.com/imperative_to_relational.html)
* [2025-11-09, 12:44:35](https://news.ycombinator.com/item?id=45865159) - [Reviving Classic Unix Games: A 20-Year Journey Through Software Archaeology](https://vejeta.com/reviving-classic-unix-games-a-20-year-journey-through-software-archaeology/)
* [2025-11-09, 12:34:00](https://games.slashdot.org/story/25/11/08/2342231/hilarious-unused-audio-from-2003-baseball-game-rediscovered-by-video-game-history-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hilarious Unused Audio From 2003 Baseball Game Rediscovered by Video Game History Foundation](https://games.slashdot.org/story/25/11/08/2342231/hilarious-unused-audio-from-2003-baseball-game-rediscovered-by-video-game-history-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 12:25:12](https://lobste.rs/s/xhrbh0/building_vector_search_engine_lets_you) - [Building a vector search engine that lets you choose precision at query time](https://clickhouse.com/blog/qbit-vector-search)
* [2025-11-09, 12:24:50](https://news.ycombinator.com/item?id=45865049) - [Visualize FastAPI endpoints with FastAPI-Voyager](https://www.newsyeah.fun/voyager/)
* [2025-11-09, 09:52:26](https://lobste.rs/s/qx9qot/forth_is_it_still_relevant) - [Forth - is it still relevant?](https://github.com/chochain/eforth)
* [2025-11-09, 09:46:04](https://news.ycombinator.com/item?id=45864341) - [Itiner-e: the Google Maps of Roman Roads](https://itiner-e.org/)
* [2025-11-09, 08:46:00](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss) - [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss)
* [2025-11-09, 08:34:00](https://tech.slashdot.org/story/25/11/09/027213/did-chatgpt-conversations-leak-into-google-search-console-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did ChatGPT Conversations Leak... Into Google Search Console Results?](https://tech.slashdot.org/story/25/11/09/027213/did-chatgpt-conversations-leak-into-google-search-console-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 07:48:50](https://lobste.rs/s/wktw2e/how_many_options_fit_into_boolean) - [How many options fit into a boolean?](https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/)
* [2025-11-09, 06:48:24](https://lobste.rs/s/yrmvyd/i_worked_for_internet_now_what) - [I worked for the Internet – now what?](https://trynova.dev/blog/worked-for-the-internet)
* [2025-11-09, 04:34:00](https://entertainment.slashdot.org/story/25/11/09/047221/breaking-bad-creator-hates-ai-promises-new-show-pluribus-was-made-by-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Breaking Bad&apos; Creator Hates AI, Promises New Show &apos;Pluribus&apos; Was &apos;Made By Humans&apos;](https://entertainment.slashdot.org/story/25/11/09/047221/breaking-bad-creator-hates-ai-promises-new-show-pluribus-was-made-by-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 04:16:37](https://lobste.rs/s/eudvwq/ironclad_formally_verified_unix_like) - [Ironclad, a formally verified Unix-like kernel written in Ada](https://ironclad-os.org/)
* [2025-11-09, 04:10:00](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss) - [Gen Z is Ditching the Tie for a Toolbelt, and it’s the Smartest Rebellion Yet](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss)
* [2025-11-09, 04:08:51](https://lobste.rs/s/irzh59/why_i_don_t_love_rust_either_2021) - [Why I don&apos;t love Rust (either) (2021)](https://cbarrete.com/rust-bad.html)
* [2025-11-09, 03:15:20](https://lobste.rs/s/bcyczw/ofcom_files_part_2_ip_blocking_uk_is_not) - [The Ofcom Files, Part 2: IP Blocking the UK is Not Enough to Comply with the Online Safety Act](https://prestonbyrne.com/2025/11/06/the-ofcom-files-part-2-ip-blocking-the-uk-is-not-enough-to-comply-with-the-online-safety-act/)
* [2025-11-08, 23:18:00](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss) - [Does Academia Need a Wake Up Call on Wikibooks?](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 16:37:51](https://lobste.rs/s/sdc7ki/opencloud_alternative_nextcloud) - [opencloud - an alternative to nextcloud written in Go](https://github.com/opencloud-eu/opencloud)
* [2025-11-08, 15:34:59](https://lobste.rs/s/ogyjwm/local_first_htmx) - [Local First HTMX](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 09:06:00](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss) - [Uncle Sam Wants to Scan Your Iris and Collect Your DNA, Citizen or Not](https://soylentnews.org/article.pl?sid=25/11/06/0715239&amp;from=rss)
* [2025-11-08, 04:19:00](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss) - [Study Concludes Cybersecurity Training Doesn&apos;t Work](https://soylentnews.org/article.pl?sid=25/11/06/0710228&amp;from=rss)
* [2025-11-07, 23:35:00](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss) - [Developer Warns Users That Fake Download Site is Hosting Windows 11 Upgrade Bypass Tool](https://soylentnews.org/article.pl?sid=25/11/06/0317205&amp;from=rss)
* [2025-11-07, 18:53:00](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss) - [LM8560, the Eternal Chip From the 1980 Years](https://soylentnews.org/article.pl?sid=25/11/06/0311253&amp;from=rss)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss)
* [2025-11-07, 00:01:00](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss) - [GNOME Mutter Now \&quot;Completely Drops the Whole X11 Backend\&quot;](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)
* [2025-11-06, 19:17:00](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss) - [Tiny Electric Motor is as Powerful as Four Tesla Motors Put Together](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss)
* [2025-11-06, 14:31:00](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss) - [Canada Says Hacktivists Breached Water and Energy Facilities](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss)
* [2025-11-06, 09:42:00](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss) - [What Happened to Running What You Wanted on Your Own Machine?](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss)
* [2025-11-06, 05:00:00](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss) - [World&apos;s Largest Wind-Powered Cargo Ship Takes to the Seas](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss)
* [2025-11-06, 00:14:00](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss) - [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss)
