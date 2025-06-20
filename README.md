# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [Apple Sued By Shareholders For Allegedly Overstating AI Progress](https://yro.slashdot.org/story/25/06/20/2147258/apple-sued-by-shareholders-for-allegedly-overstating-ai-progress?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Models From Major Companies Resort To Blackmail in Stress Tests](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Phoenix.new – The Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)

* [Trust in AI Strongest in China, Low-Income Nations, UN Study Shows](https://slashdot.org/story/25/06/20/1646251/trust-in-ai-strongest-in-china-low-income-nations-un-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Jürgen Schmidhuber：the Father of Generative AI Without Turing Award](http://www.jazzyear.com/article_info.html?id=1352)

## Open Source and Software Innovations

* [Harper – an open-source alternative to Grammarly](https://writewithharper.com)

* [Show HN: SnapQL – Desktop app to query Postgres with AI](https://github.com/NickTikhonov/snap-ql)

* [Show HN: Inspect and extract files from MSI installers directly in your browser](https://pymsi.readthedocs.io/en/latest/msi_viewer.html)

* [Minimal auto-differentiation engine in Rust](https://github.com/e3ntity/nanograd)

* [Pragtical - The practical and pragmatic code editor](https://pragtical.dev/)

## Environmental and Scientific Discoveries

* [Banning Plastic Bags Works To Limit Shoreline Litter, Study Finds](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [New dating for White Sands footprints confirms controversial theory](https://arstechnica.com/science/2025/06/study-confirms-white-sands-footprints-are-23000-years-old/)

* [Turning Coalmines Into Solar Energy Plants 'Could Add 300GW of Renewables By 2030'](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Our Galaxy's Monster Black Hole Is Spinning Almost As Fast As Physics Allows](https://science.slashdot.org/story/25/06/19/236226/our-galaxys-monster-black-hole-is-spinning-almost-as-fast-as-physics-allows?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Breakthrough Alzheimer's Drugs Too Pricey for UK's National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&from=rss)

## Cybersecurity and Data Privacy

* [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys)

* [DHS Warns of Sharp Rise in Chinese-Made Signal Jammers](https://news.slashdot.org/story/25/06/20/1957244/dhs-warns-of-sharp-rise-in-chinese-made-signal-jammers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&from=rss)

* [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&from=rss)

## Unique and Quirky Highlights

* [That Time I Tried Browsing the Web Without CSS](https://css-tricks.com/that-time-i-tried-browsing-the-web-without-css/)

* [Wiki Radio: The thrilling sound of random Wikipedia](https://www.monkeon.co.uk/wikiradio/)

* [It's True: The Jaws Shark Is Public Domain](https://ironicsans.ghost.io/how-the-jaws-shark-became-public-domain/)

* [Visualizing environmental costs of war in Hayao Miyazaki's Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/)

* [JavaScript broke the web (and called it progress)](https://www.jonoalderson.com/conjecture/javascript-broke-the-web-and-called-it-progress/)

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

* [2025-06-20, 21:51:08](https://lobste.rs/s/emzwaj/what_are_most_beautiful_insightful_code) - [What are the Most Beautiful/Insightful Code Bases?](https://lobste.rs/s/emzwaj/what_are_most_beautiful_insightful_code)
* [2025-06-20, 21:50:00](https://yro.slashdot.org/story/25/06/20/2147258/apple-sued-by-shareholders-for-allegedly-overstating-ai-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sued By Shareholders For Allegedly Overstating AI Progress](https://yro.slashdot.org/story/25/06/20/2147258/apple-sued-by-shareholders-for-allegedly-overstating-ai-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 21:35:02](https://lobste.rs/s/w5zxkz/time_i_tried_browsing_web_without_css) - [That Time I Tried Browsing the Web Without CSS](https://css-tricks.com/that-time-i-tried-browsing-the-web-without-css/)
* [2025-06-20, 21:33:22](https://lobste.rs/s/6esqkv/differences_between_orioledb_neon) - [The differences between OrioleDB and Neon](https://www.orioledb.com/blog/orioledb-neon-differences)
* [2025-06-20, 21:32:36](https://lobste.rs/s/ildter/dispelling_myths_misinformation) - [Dispelling myths and misinformation](https://matrix.org/blog/2025/06/dispelling-myths/)
* [2025-06-20, 21:30:00](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Banning Plastic Bags Works To Limit Shoreline Litter, Study Finds](https://science.slashdot.org/story/25/06/20/201242/banning-plastic-bags-works-to-limit-shoreline-litter-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 21:18:42](https://news.ycombinator.com/item?id=44332206) - [Libraries are under-used. LLMs make this problem worse](https://makefizz.buzz/posts/libraries-llms)
* [2025-06-20, 21:15:15](https://news.ycombinator.com/item?id=44332170) - [Wiki Radio: The thrilling sound of random Wikipedia](https://www.monkeon.co.uk/wikiradio/)
* [2025-06-20, 21:13:24](https://lobste.rs/s/tguhdl/breaking_webauthn_fido2_forging) - [Breaking WebAuthn, FIDO2, and Forging Passkeys](https://www.nullpt.rs/forging-passkeys)
* [2025-06-20, 20:50:00](https://news.slashdot.org/story/25/06/20/1957244/dhs-warns-of-sharp-rise-in-chinese-made-signal-jammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DHS Warns of Sharp Rise in Chinese-Made Signal Jammers](https://news.slashdot.org/story/25/06/20/1957244/dhs-warns-of-sharp-rise-in-chinese-made-signal-jammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 20:11:00](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Models From Major Companies Resort To Blackmail in Stress Tests](https://slashdot.org/story/25/06/20/2010257/ai-models-from-major-companies-resort-to-blackmail-in-stress-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 20:04:01](https://news.ycombinator.com/item?id=44331518) - [Show HN: Inspect and extract files from MSI installers directly in your browser](https://pymsi.readthedocs.io/en/latest/msi_viewer.html)
* [2025-06-20, 19:51:45](https://news.ycombinator.com/item?id=44331362) - [Harper – an open-source alternative to Grammarly](https://writewithharper.com)
* [2025-06-20, 19:42:00](https://news.slashdot.org/story/25/06/20/1944212/nyc-sets-smaller-driver-pay-bump-after-uber-lyft-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Sets Smaller Driver Pay Bump After Uber, Lyft Pushback](https://news.slashdot.org/story/25/06/20/1944212/nyc-sets-smaller-driver-pay-bump-after-uber-lyft-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 19:35:41](https://news.ycombinator.com/item?id=44331193) - [Smartphones: Parts of Our Minds? Or Parasites?](https://www.tandfonline.com/doi/full/10.1080/00048402.2025.2504070)
* [2025-06-20, 19:28:50](https://news.ycombinator.com/item?id=44331125) - [It&apos;s True: The Jaws Shark Is Public Domain](https://ironicsans.ghost.io/how-the-jaws-shark-became-public-domain/)
* [2025-06-20, 19:06:00](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss) - [SpaceX Rocket Explodes in New Setback to Elon Musk’s Mars Project](https://soylentnews.org/article.pl?sid=25/06/19/2331254&amp;from=rss)
* [2025-06-20, 19:00:55](https://news.ycombinator.com/item?id=44330850) - [Jürgen Schmidhuber：the Father of Generative AI Without Turing Award](http://www.jazzyear.com/article_info.html?id=1352)
* [2025-06-20, 18:48:39](https://lobste.rs/s/pnkkve/deep_dive_into_svt_av1_s_evolution_part_1) - [Deep Dive into SVT-AV1&apos;s Evolution (Part 1)](https://wiki.x266.mov/blog/svt-av1-fourth-deep-dive-p1)
* [2025-06-20, 18:37:53](https://news.ycombinator.com/item?id=44330613) - [Career advice, or something like it](https://brooker.co.za/blog/2025/06/20/career.html)
* [2025-06-20, 18:25:55](https://lobste.rs/s/kzzhx9/pragtical_practical_pragmatic_code) - [Pragtical - The practical and pragmatic code editor](https://pragtical.dev/)
* [2025-06-20, 18:23:38](https://news.ycombinator.com/item?id=44330462) - [New dating for White Sands footprints confirms controversial theory](https://arstechnica.com/science/2025/06/study-confirms-white-sands-footprints-are-23000-years-old/)
* [2025-06-20, 18:06:11](https://lobste.rs/s/dl5sj9/rolling_ladder_up_behind_us) - [Rolling the ladder up behind us](https://xeiaso.net/blog/2025/rolling-ladder-behind-us/)
* [2025-06-20, 17:51:00](https://it.slashdot.org/story/25/06/20/1751200/windows-parental-controls-are-blocking-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Parental Controls Are Blocking Chrome](https://it.slashdot.org/story/25/06/20/1751200/windows-parental-controls-are-blocking-chrome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 17:45:16](https://lobste.rs/s/iquhgy/so_you_want_serialize_some_der) - [So you want to serialize some DER?](https://alexgaynor.net/2025/jun/20/serialize-some-der/)
* [2025-06-20, 17:35:05](https://lobste.rs/s/vqvmyl/improvements_udp_hole_punching) - [Improvements to the UDP Hole Punching](https://github.com/kupson/udp-hole-punching/tree/main)
* [2025-06-20, 17:22:18](https://lobste.rs/s/qekbyn/ruby_schema_collection_json_schemas_for) - [Ruby Schema, a collection of JSON schemas for YAML/JSON config files in the Ruby ecosystem](https://github.com/joeldrapper/rubyschema)
* [2025-06-20, 17:14:18](https://lobste.rs/s/midzz9/phoenix_new_remote_ai_runtime_for_phoenix) - [Phoenix.new – The Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 16:54:12](https://news.ycombinator.com/item?id=44329640) - [Tuxracer.js play Tux Racer in the browser](https://github.com/ebbejan/tux-racer-js)
* [2025-06-20, 16:50:14](https://news.ycombinator.com/item?id=44329600) - [Alpha Centauri](https://www.filfre.net/2025/06/alpha-centauri/)
* [2025-06-20, 16:46:00](https://slashdot.org/story/25/06/20/1646251/trust-in-ai-strongest-in-china-low-income-nations-un-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trust in AI Strongest in China, Low-Income Nations, UN Study Shows](https://slashdot.org/story/25/06/20/1646251/trust-in-ai-strongest-in-china-low-income-nations-un-study-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 16:35:55](https://news.ycombinator.com/item?id=44329457) - [Show HN: Nxtscape – an open-source agentic browser](https://github.com/nxtscape/nxtscape)
* [2025-06-20, 16:35:05](https://news.ycombinator.com/item?id=44329449) - [Cracovians: The Twisted Twins of Matrices](https://marcinciura.wordpress.com/2025/06/20/cracovians-the-twisted-twins-of-matrices/)
* [2025-06-20, 16:05:43](https://lobste.rs/s/e0yz3n/gulaschprogrammiernacht_23) - [Gulaschprogrammiernacht 23](https://media.ccc.de/c/gpn23)
* [2025-06-20, 16:01:00](https://tech.slashdot.org/story/25/06/20/1539228/microsoft-is-deleting-old-drivers-from-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Deleting Old Drivers From Windows Update](https://tech.slashdot.org/story/25/06/20/1539228/microsoft-is-deleting-old-drivers-from-windows-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 15:51:59](https://news.ycombinator.com/item?id=44328904) - [How to Design Programs 2nd Ed (2024)](https://htdp.org)
* [2025-06-20, 15:23:29](https://news.ycombinator.com/item?id=44328598) - [Visualizing environmental costs of war in Hayao Miyazaki&apos;s Nausicaä](https://jgeekstudies.org/2025/06/20/wilted-lands-and-wounded-worlds-visualizing-environmental-costs-of-war-in-hayao-miyazakis-nausicaa-of-the-valley-of-the-wind/)
* [2025-06-20, 15:20:00](https://news.slashdot.org/story/25/06/20/159208/semicolon-usage-in-british-literature-drops-nearly-50-since-2000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Semicolon Usage in British Literature Drops Nearly 50% Since 2000](https://news.slashdot.org/story/25/06/20/159208/semicolon-usage-in-british-literature-drops-nearly-50-since-2000?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 15:05:36](https://lobste.rs/s/ixjwwe/reworking_memory_management_cruby) - [Reworking Memory Management in CRuby: A Practitioner Report](https://blog.peterzhu.ca/assets/ismm_2025.pdf)
* [2025-06-20, 14:57:04](https://news.ycombinator.com/item?id=44328326) - [Phoenix.new – Remote AI Runtime for Phoenix](https://fly.io/blog/phoenix-new-the-remote-ai-runtime/)
* [2025-06-20, 14:40:00](https://it.slashdot.org/story/25/06/20/1331257/broadcoms-answer-to-vmware-pricing-outrage-youre-using-it-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Broadcom&apos;s Answer To VMware Pricing Outrage: You&apos;re Using It Wrong](https://it.slashdot.org/story/25/06/20/1331257/broadcoms-answer-to-vmware-pricing-outrage-youre-using-it-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 14:21:00](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss) - [LibreOffice Adds Voice To &apos;Ditch Windows For Linux&apos; Campaign](https://soylentnews.org/article.pl?sid=25/06/19/2327225&amp;from=rss)
* [2025-06-20, 14:02:49](https://lobste.rs/s/xzzfdu/adapting_nnue_pytorch_s_binary_position) - [Adapting nnue-pytorch&apos;s binary position format for Lichess](https://lichess.org/@/revoof/blog/adapting-nnue-pytorchs-binary-position-format-for-lichess/cpeeAMeY)
* [2025-06-20, 14:00:00](https://news.slashdot.org/story/25/06/20/1354239/lawmakers-in-britain-narrowly-approve-bill-to-legalize-assisted-dying?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers in Britain Narrowly Approve Bill To Legalize Assisted Dying](https://news.slashdot.org/story/25/06/20/1354239/lawmakers-in-britain-narrowly-approve-bill-to-legalize-assisted-dying?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 13:53:34](https://news.ycombinator.com/item?id=44327759) - [Minimal auto-differentiation engine in Rust](https://github.com/e3ntity/nanograd)
* [2025-06-20, 13:00:00](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Turning Coalmines Into Solar Energy Plants &apos;Could Add 300GW of Renewables By 2030&apos;](https://hardware.slashdot.org/story/25/06/20/0129241/turning-coalmines-into-solar-energy-plants-could-add-300gw-of-renewables-by-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 12:44:09](https://news.ycombinator.com/item?id=44327173) - [Klong: A Simple Array Language](https://t3x.org/klong/)
* [2025-06-20, 11:31:00](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/4iglq1/what_are_you_doing_this_weekend)
* [2025-06-20, 11:08:18](https://news.ycombinator.com/item?id=44326620) - [Show HN: SnapQL – Desktop app to query Postgres with AI](https://github.com/NickTikhonov/snap-ql)
* [2025-06-20, 10:35:34](https://lobste.rs/s/6lqco4/my_a11y_journey) - [My A11y Journey](https://mjg59.dreamwidth.org/72379.html)
* [2025-06-20, 10:00:00](https://yro.slashdot.org/story/25/06/19/2312257/doj-files-to-seize-225-million-in-crypto-from-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Files To Seize $225 Million In Crypto From Scammers](https://yro.slashdot.org/story/25/06/19/2312257/doj-files-to-seize-225-million-in-crypto-from-scammers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 09:52:50](https://news.ycombinator.com/item?id=44326145) - [Oklo, the Earth&apos;s Two-billion-year-old only Known Natural Nuclear Reactor (2018)](https://www.iaea.org/newscenter/news/meet-oklo-the-earths-two-billion-year-old-only-known-natural-nuclear-reactor)
* [2025-06-20, 09:36:00](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss) - [Breakthrough Alzheimer&apos;s Drugs Too Pricey for UK&apos;s National Health Service](https://soylentnews.org/article.pl?sid=25/06/19/0919227&amp;from=rss)
* [2025-06-20, 08:43:42](https://lobste.rs/s/la5mgg/infinite_mac_os_x) - [Infinite Mac OS X](https://blog.persistent.info/2025/03/infinite-mac-os-x.html)
* [2025-06-20, 08:10:34](https://lobste.rs/s/jrm2jd/pipelined_state_machine_corruption) - [pipelined state machine corruption](https://flak.tedunangst.com/post/pipelined-state-machine-corruption)
* [2025-06-20, 07:51:36](https://lobste.rs/s/3ew6rt/javascript_broke_web_called_it_progress) - [JavaScript broke the web (and called it progress)](https://www.jonoalderson.com/conjecture/javascript-broke-the-web-and-called-it-progress/)
* [2025-06-20, 07:00:00](https://science.slashdot.org/story/25/06/19/236226/our-galaxys-monster-black-hole-is-spinning-almost-as-fast-as-physics-allows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Our Galaxy&apos;s Monster Black Hole Is Spinning Almost As Fast As Physics Allows](https://science.slashdot.org/story/25/06/19/236226/our-galaxys-monster-black-hole-is-spinning-almost-as-fast-as-physics-allows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 04:55:00](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss) - [‘Net Zero’ Is Collapsing in U.S. States](https://soylentnews.org/article.pl?sid=25/06/18/1523244&amp;from=rss)
* [2025-06-20, 03:55:03](https://news.ycombinator.com/item?id=44324592) - [Hurl: Run and test HTTP requests with plain text](https://github.com/Orange-OpenSource/hurl)
* [2025-06-20, 03:30:00](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three Years Left To Limit Warming To 1.5C, Leading Scientists Warn](https://news.slashdot.org/story/25/06/19/2122207/three-years-left-to-limit-warming-to-15c-leading-scientists-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-20, 02:58:39](https://lobste.rs/s/hnfoam/zig_rust_2023) - [Zig And Rust (2023)](https://matklad.github.io/2023/03/26/zig-and-rust.html)
* [2025-06-20, 01:35:36](https://lobste.rs/s/bwbvcn/revisiting_knuth_s_premature) - [Revisiting Knuth’s “Premature Optimization” Paper](https://probablydance.com/2025/06/19/revisiting-knuths-premature-optimization-paper/)
* [2025-06-20, 00:13:00](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss) - [Fermilab G-2 Collaboration Publishes Final Result](https://soylentnews.org/article.pl?sid=25/06/18/1445231&amp;from=rss)
* [2025-06-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss) - [Welcome to the ‘Infinite Workday’ of 8 P.M. Meetings and Constant Messages](https://soylentnews.org/article.pl?sid=25/06/18/1420200&amp;from=rss)
* [2025-06-19, 18:09:51](https://lobste.rs/s/76i5wh/i_want_love_linux_it_doesn_t_love_me_back) - [I Want to Love Linux. It Doesn’t Love Me Back: Post 4 – Wayland Is Growing Up. And Now We Don’t Have a Choice](https://fireborn.mataroa.blog/blog/i-want-to-love-linux-it-doesnt-love-me-back-post-4-wayland-is-growing-up-and-now-we-dont-have-a-choice/)
* [2025-06-19, 16:41:29](https://lobste.rs/s/ac19tp/2048_with_only_64_bits_state) - [2048 with only 64 bits of state](https://github.com/izabera/bitwise-challenge-2048)
* [2025-06-19, 14:39:00](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss) - [Marijuana to Treat Autism? Some Parents Say Yes](https://soylentnews.org/article.pl?sid=25/06/18/1415223&amp;from=rss)
* [2025-06-19, 12:00:14](https://lobste.rs/s/kmizrf/what_would_kubernetes_2_0_look_like) - [What Would a Kubernetes 2.0 Look Like](https://matduggan.com/what-would-a-kubernetes-2-0-look-like/)
* [2025-06-19, 09:54:00](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss) - [Reddit User Surprised When 1960s Computer Panel Emerged From Collapsed Family Garage](https://soylentnews.org/article.pl?sid=25/06/18/0134253&amp;from=rss)
* [2025-06-19, 05:08:00](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss) - [Zero-Click AI Vulnerability Exposes Microsoft 365 Copilot Data Without User Interaction](https://soylentnews.org/article.pl?sid=25/06/18/0130206&amp;from=rss)
* [2025-06-19, 00:33:21](https://news.ycombinator.com/item?id=44314423) - [Andrej Karpathy: Software in the era of AI [video]](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
* [2025-06-19, 00:22:00](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss) - [Honda Shows Low Speed, Narrow BEV for City Delivery](https://soylentnews.org/article.pl?sid=25/06/18/0123206&amp;from=rss)
* [2025-06-18, 19:38:00](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss) - [Trump&apos;s Cuts to NASA and the National Science Foundation Will Have Huge Consequences](https://soylentnews.org/article.pl?sid=25/06/18/0120221&amp;from=rss)
* [2025-06-18, 19:08:57](https://news.ycombinator.com/item?id=44312501) - [Dancing Naked on the Head of a Pin: The Early History of Microphotography](https://publicdomainreview.org/essay/dancing-naked-on-the-head-of-a-pin)
* [2025-06-18, 14:50:00](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss) - [Google&apos;s Advanced Protection Arrives on Android: Should You Use It?](https://soylentnews.org/article.pl?sid=25/06/18/0115237&amp;from=rss)
* [2025-06-18, 10:04:00](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss) - [The Effect of Physical Fitness on Mortality is Overestimated](https://soylentnews.org/article.pl?sid=25/06/17/0655244&amp;from=rss)
* [2025-06-18, 07:25:16](https://news.ycombinator.com/item?id=44307445) - [Ancient termite poo reveals 120M-year-old secrets of Australia&apos;s forests](https://phys.org/news/2025-06-ancient-termite-poo-reveals-million.html)
* [2025-06-18, 05:17:00](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss) - [SmartAttack Uses Smartwatches to Steal Data From Air-Gapped Systems](https://soylentnews.org/article.pl?sid=25/06/17/0651210&amp;from=rss)
* [2025-06-18, 00:32:00](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss) - [Kali Linux 2025.2 released with 13 new tools, car hacking updates](https://soylentnews.org/article.pl?sid=25/06/17/0648206&amp;from=rss)
* [2025-06-17, 22:22:03](https://news.ycombinator.com/item?id=44304607) - [A Python-first data lakehouse](https://www.bauplanlabs.com/blog/everything-as-python)
* [2025-06-17, 19:56:40](https://news.ycombinator.com/item?id=44303246) - [An analysis of recent multithreading improvements for a smoother game](https://dev.arma3.com/post/oprep-performance-optimizations-in-220)
* [2025-06-17, 19:45:00](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss) - [You Don&apos;t Have to Almost Die to be Happy at Work, but It Helps](https://soylentnews.org/article.pl?sid=25/06/17/0358247&amp;from=rss)
* [2025-06-17, 15:57:15](https://news.ycombinator.com/item?id=44300641) - [ELIZA Reanimated: Restoring the Mother of All Chatbots](https://www.computer.org/csdl/magazine/an/2025/02/11030922/27sQDLuL7Uc)
* [2025-06-17, 15:05:00](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss) - [4Chan Under Investigation by Uk Ofcom Over Online Safety Concerns](https://soylentnews.org/article.pl?sid=25/06/16/0136200&amp;from=rss)
* [2025-06-17, 14:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss) - [This Is Not A Drill](https://soylentnews.org/breakingnews/article.pl?sid=25/06/17/1439252&amp;from=rss)
* [2025-06-17, 14:28:30](https://news.ycombinator.com/item?id=44299680) - [Verified Dynamic Programming with Σ-types in Lean](https://tannerduve.github.io/blog/memoization-sigma/)
* [2025-06-17, 10:18:00](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss) - [Behold the First Images of the Sun’s South Pole](https://soylentnews.org/article.pl?sid=25/06/16/0131240&amp;from=rss)
* [2025-06-17, 05:30:00](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss) - [Can We Stop Big Tech From Controlling the Internet With AI Agents?](https://soylentnews.org/article.pl?sid=25/06/16/0115212&amp;from=rss)
* [2025-06-17, 00:43:00](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss) - [TSMC Slows Down Global Plans Due to Soft Demand, but Accelerates Arizona Fab Plans by Six Months](https://soylentnews.org/article.pl?sid=25/06/16/016221&amp;from=rss)
* [2025-06-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss) - [Washington Post in Talks With Substack About Using its Writers](https://soylentnews.org/article.pl?sid=25/06/16/0057231&amp;from=rss)
* [2025-06-16, 16:28:10](https://news.ycombinator.com/item?id=44291052) - [A Brief, Incomplete, and Mostly Wrong History of Robotics](https://generalrobots.substack.com/p/a-brief-incomplete-and-mostly-wrong)
* [2025-06-16, 16:20:32](https://news.ycombinator.com/item?id=44290992) - [College baseball, venture capital, and the long maybe](https://bcantrill.dtrace.org/2025/06/15/college-baseball-venture-capital-and-the-long-maybe/)
* [2025-06-16, 15:11:00](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss) - [Huawei CEO Says Washington Has Exaggerated its Achievements, Saying the Company Isn&apos;t That Powerful](https://soylentnews.org/article.pl?sid=25/06/16/0052252&amp;from=rss)
* [2025-06-16, 10:25:00](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss) - [Buried Under 2 Kilometers of Antarctic Ice, Scientists Find a 34-Million-Year-Old Lost World](https://soylentnews.org/article.pl?sid=25/06/15/145200&amp;from=rss)
* [2025-06-16, 05:41:00](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss) - [Photonic Processor Could Streamline 6G Wireless Signal Processing](https://soylentnews.org/article.pl?sid=25/06/15/1353252&amp;from=rss)
* [2025-06-16, 00:58:00](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss) - [Massive Privacy Concern: Over 40,000 Security Cameras Are Streaming Unsecured Footage Worldwide](https://soylentnews.org/article.pl?sid=25/06/15/1350208&amp;from=rss)
