# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [Drilling Down on Uncle Sam's Proposed TP-Link Ban](https://krebsonsecurity.com/2025/11/drilling-down-on-uncle-sams-proposed-tp-link-ban/) - Analysis of the implications and details surrounding the proposed ban on TP-Link devices.

* [Lost Unix v4 Possibly Recovered on a Forgotten Bell Labs Tape From 1973](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A potentially historic find sheds light on early UNIX development.

* [Python Software Foundation gets a donor surge after rejecting federal grant](https://thenewstack.io/psf-gets-a-donor-surge-after-rejecting-anti-dei-federal-grant/) - The PSF's decision to forgo a government grant inspires unprecedented public donations.

* [Value classes are the new data classes](https://curiouslab.dev/0002-value-classes-are-new-data-casses.html) - Exploration of emerging programming paradigms featuring 'value classes'.

* [The Principles of Diffusion Models](https://arxiv.org/abs/2510.21890) - A study on diffusion models highlighting their foundational principles and applications in AI.

* [Reviving Classic Unix Games: A 20-Year Journey Through Software Archaeology](https://vejeta.com/reviving-classic-unix-games-a-20-year-journey-through-software-archaeology/) - Chronicles efforts to revive retro UNIX-based games.

## AI and Machine Learning Innovations

* [Neurodiverse Professionals 25% More Satisfied With AI Tools and Agents](https://it.slashdot.org/story/25/11/09/0610228/neurodiverse-professionals-25-more-satisfied-with-ai-tools-and-agents?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Report showcasing positive engagement between neurodiverse users and AI technologies.

* [Reverse engineering Codex CLI to get GPT-5-Codex-Mini to draw me a pelican](https://simonwillison.net/2025/Nov/9/gpt-5-codex-mini/) - Creative application and experimentation with OpenAI's Codex CLI.

* [AI isn't replacing jobs. AI spending is](https://www.fastcompany.com/91435192/chatgpt-llm-openai-jobs-amazon) - Commentary on the economic impact of AI development and corporate investment.

## Historical and Cultural Discoveries

* [Montana Becomes First State to Enshrine 'Right to Compute' into Law](https://montananewsroom.com/montana-becomes-first-state-to-enshrine-right-to-compute-into-law/) - Details on groundbreaking legislation protecting computational rights.

* [Hilarious Unused Audio From 2003 Baseball Game Rediscovered by Video Game History Foundation](https://games.slashdot.org/story/25/11/08/2342231/hilarious-unused-audio-from-2003-baseball-game-rediscovered-by-video-game-history-foundation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Unearthed audio clips provide a humorous look into gaming history.

* [World's Largest Cargo Sailboat Completes Historic First Atlantic Crossing](https://tech.slashdot.org/story/25/11/08/1759258/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Milestone achievement for sustainable maritime transport.

## Consumer and Public Concerns

* [Samsung Family Hub fridges will start showing ads to 'Elevate' Home Ecosystem](https://news.samsung.com/us/samsung-family-hub-2025-update-elevates-smart-home-ecosystem/) - Introducing ad-supported smart fridge functionality amidst ethical concerns.

* [America's FAA Grounds MD-11s After Tuesday's Crash in Kentucky](https://tech.slashdot.org/story/25/11/08/0816223/americas-faa-grounds-md-11s-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&utm_medium=feed) - FAA imposes emergency aviation restrictions following safety concerns.

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

* [2025-11-09, 18:34:57](https://lobste.rs/s/reouib/neovim_vs_emacs_roundtable_w_tj_devries) - [Neovim vs Emacs | Roundtable w/ TJ DeVries, DistroTube, Greg Anders &amp; Joshua Blais](https://www.youtube.com/watch?v=SnhcXR9CKno)
* [2025-11-09, 18:17:44](https://news.ycombinator.com/item?id=45867717) - [Drilling Down on Uncle Sam&apos;s Proposed TP-Link Ban](https://krebsonsecurity.com/2025/11/drilling-down-on-uncle-sams-proposed-tp-link-ban/)
* [2025-11-09, 18:17:00](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss) - [Microsoft AI Chief Warns Pursuing Machine Consciousness is a Gigantic Waste of Time](https://soylentnews.org/article.pl?sid=25/11/07/0311239&amp;from=rss)
* [2025-11-09, 18:14:04](https://lobste.rs/s/qpbl8s/acme_user_interface_for_programmers_1994) - [Acme: A User Interface for Programmers (1994)](https://doc.cat-v.org/plan_9/4th_edition/papers/acme/)
* [2025-11-09, 18:04:00](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lost Unix v4 Possibly Recovered on a Forgotten Bell Labs Tape From 1973](https://tech.slashdot.org/story/25/11/09/0528258/lost-unix-v4-possibly-recovered-on-a-forgotten-bell-labs-tape-from-1973?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 17:28:45](https://news.ycombinator.com/item?id=45867277) - [Python Software Foundation gets a donor surge after rejecting federal grant](https://thenewstack.io/psf-gets-a-donor-surge-after-rejecting-anti-dei-federal-grant/)
* [2025-11-09, 17:17:20](https://news.ycombinator.com/item?id=45867176) - [Ask HN: How do you get over the fear of sharing code?](https://news.ycombinator.com/item?id=45867176)
* [2025-11-09, 17:10:29](https://lobste.rs/s/wmjhdx/value_classes_are_new_data_classes) - [Value classes are the new data classes](https://curiouslab.dev/0002-value-classes-are-new-data-casses.html)
* [2025-11-09, 17:04:00](https://it.slashdot.org/story/25/11/09/0610228/neurodiverse-professionals-25-more-satisfied-with-ai-tools-and-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neurodiverse Professionals 25% More Satisfied With AI Tools and Agents](https://it.slashdot.org/story/25/11/09/0610228/neurodiverse-professionals-25-more-satisfied-with-ai-tools-and-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 16:47:54](https://lobste.rs/s/53xbdq/about_keepassxc_s_code_quality_control) - [About KeePassXC’s Code Quality Control](https://keepassxc.org/blog/2025-11-09-about-keepassxcs-code-quality-control/)
* [2025-11-09, 16:37:50](https://lobste.rs/s/44zer0/16_bit_data_pointers_on_rv32) - [16-bit Data Pointers on RV32](https://wren.wtf/shower-thoughts/16-bit-data-pointers-on-rv32/)
* [2025-11-09, 16:34:44](https://news.ycombinator.com/item?id=45866772) - [Bumble Berry Pi – A Cheap DIY Raspberry Pi Handheld Cyberdeck](https://github.com/samcervantes/bumble-berry-pi)
* [2025-11-09, 16:26:09](https://news.ycombinator.com/item?id=45866697) - [Marble Fountain](https://willmorrison.net/posts/marble-fountain/)
* [2025-11-09, 16:25:05](https://news.ycombinator.com/item?id=45866688) - [Bull markets make you feel smarter than you are](https://awealthofcommonsense.com/2025/11/ben-graham-bull-market-brains/)
* [2025-11-09, 16:10:23](https://news.ycombinator.com/item?id=45866572) - [The Principles of Diffusion Models](https://arxiv.org/abs/2510.21890)
* [2025-11-09, 16:04:00](https://tech.slashdot.org/story/25/11/08/0816223/americas-faa-grounds-md-11s-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s FAA Grounds MD-11s After Tuesday&apos;s Crash in Kentucky](https://tech.slashdot.org/story/25/11/08/0816223/americas-faa-grounds-md-11s-after-tuesdays-crash-in-kentucky?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 15:34:00](https://linux.slashdot.org/story/25/11/09/0232234/rust-is-coming-to-debians-apt-package-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Is Coming To Debian&apos;s APT Package Manager](https://linux.slashdot.org/story/25/11/09/0232234/rust-is-coming-to-debians-apt-package-manager?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 15:32:23](https://lobste.rs/s/t0fjqn/sprites_mods_kid_cam_firmware_modding) - [Sprites mods - Kid-cam firmware modding](https://spritesmods.com/?art=kid_cam)
* [2025-11-09, 15:30:23](https://news.ycombinator.com/item?id=45866243) - [AI isn&apos;t replacing jobs. AI spending is](https://www.fastcompany.com/91435192/chatgpt-llm-openai-jobs-amazon)
* [2025-11-09, 15:27:42](https://news.ycombinator.com/item?id=45866224) - [The Manuscripts of Edsger W. Dijkstra](https://www.cs.utexas.edu/~EWD/)
* [2025-11-09, 15:18:23](https://news.ycombinator.com/item?id=45866165) - [Samsung Family Hub fridges will start showing adds to \&quot;Elevate\&quot; Home Ecosystem](https://news.samsung.com/us/samsung-family-hub-2025-update-elevates-smart-home-ecosystem/)
* [2025-11-09, 14:59:13](https://lobste.rs/s/uf12ap/email_verification_protocol_verified) - [email-verification-protocol: verified autofill](https://github.com/WICG/email-verification-protocol)
* [2025-11-09, 14:52:32](https://lobste.rs/s/0rtjwc/new_du_command_lib_cargo_bin_coreutils) - [The new `du` command (in `/lib/cargo/bin/coreutils`) outputs wrong sizes in Ubuntu 25.10](https://askubuntu.com/questions/1559396/the-new-du-command-in-lib-cargo-bin-coreutils-outputs-wrong-sizes-in-ubun)
* [2025-11-09, 14:44:06](https://news.ycombinator.com/item?id=45865921) - [About KeePassXC&apos;s Code Quality Control](https://keepassxc.org/blog/2025-11-09-about-keepassxcs-code-quality-control/)
* [2025-11-09, 13:35:00](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss) - [Ford CEO Jim Farley strikes a Cautious Tone on Apple’s New CarPlay Ultra](https://soylentnews.org/article.pl?sid=25/11/07/036254&amp;from=rss)
* [2025-11-09, 13:29:34](https://lobste.rs/s/wruah1/return_language_oriented_programming) - [The Return of Language-Oriented Programming](https://blog.evacchi.dev/posts/2025/11/09/the-return-of-language-oriented-programming/)
* [2025-11-09, 13:09:22](https://news.ycombinator.com/item?id=45865327) - [Using bubblewrap to add sandboxing to NetBSD](https://blog.netbsd.org/tnf/entry/gsoc2025_bubblewrap_sandboxing)
* [2025-11-09, 13:03:36](https://news.ycombinator.com/item?id=45865289) - [Montana Becomes First State to Enshrine &apos;Right to Compute&apos; into Law](https://montananewsroom.com/montana-becomes-first-state-to-enshrine-right-to-compute-into-law/)
* [2025-11-09, 12:50:07](https://news.ycombinator.com/item?id=45865189) - [Zensical – A modern static site generator built by the Material for MkDocs team](https://squidfunk.github.io/mkdocs-material/blog/2025/11/05/zensical/)
* [2025-11-09, 12:48:17](https://lobste.rs/s/cxbkzm/imperative_relational) - [Imperative to relational](https://madhadron.com/imperative_to_relational.html)
* [2025-11-09, 12:44:35](https://news.ycombinator.com/item?id=45865159) - [Reviving Classic Unix Games: A 20-Year Journey Through Software Archaeology](https://vejeta.com/reviving-classic-unix-games-a-20-year-journey-through-software-archaeology/)
* [2025-11-09, 12:34:00](https://games.slashdot.org/story/25/11/08/2342231/hilarious-unused-audio-from-2003-baseball-game-rediscovered-by-video-game-history-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hilarious Unused Audio From 2003 Baseball Game Rediscovered by Video Game History Foundation](https://games.slashdot.org/story/25/11/08/2342231/hilarious-unused-audio-from-2003-baseball-game-rediscovered-by-video-game-history-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 12:33:38](https://news.ycombinator.com/item?id=45865098) - [Alive internet theory](https://alivetheory.net/)
* [2025-11-09, 12:25:12](https://lobste.rs/s/xhrbh0/building_vector_search_engine_lets_you) - [Building a vector search engine that lets you choose precision at query time](https://clickhouse.com/blog/qbit-vector-search)
* [2025-11-09, 12:24:50](https://news.ycombinator.com/item?id=45865049) - [Visualize FastAPI endpoints with FastAPI-Voyager](https://www.newsyeah.fun/voyager/)
* [2025-11-09, 11:12:02](https://news.ycombinator.com/item?id=45864732) - [Ask HN: How would you set up a child’s first Linux computer?](https://news.ycombinator.com/item?id=45864732)
* [2025-11-09, 09:52:26](https://lobste.rs/s/qx9qot/forth_is_it_still_relevant) - [Forth - is it still relevant?](https://github.com/chochain/eforth)
* [2025-11-09, 08:46:00](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss) - [Nvidia Will Help Build 7 AI Supercomputers for DoE](https://soylentnews.org/article.pl?sid=25/11/07/032255&amp;from=rss)
* [2025-11-09, 08:34:00](https://tech.slashdot.org/story/25/11/09/027213/did-chatgpt-conversations-leak-into-google-search-console-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did ChatGPT Conversations Leak... Into Google Search Console Results?](https://tech.slashdot.org/story/25/11/09/027213/did-chatgpt-conversations-leak-into-google-search-console-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 07:48:50](https://lobste.rs/s/wktw2e/how_many_options_fit_into_boolean) - [How many options fit into a boolean?](https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/)
* [2025-11-09, 06:48:24](https://lobste.rs/s/yrmvyd/i_worked_for_internet_now_what) - [I worked for the Internet – now what?](https://trynova.dev/blog/worked-for-the-internet)
* [2025-11-09, 06:13:05](https://news.ycombinator.com/item?id=45863360) - [I Am Mark Zuckerberg](https://iammarkzuckerberg.com/)
* [2025-11-09, 04:54:56](https://lobste.rs/s/xylb9v/building_ci_cd_pipeline_runner_from) - [Building a CI/CD Pipeline Runner from Scratch in Python](https://muhammadraza.me/2025/building-cicd-pipeline-runner-python/)
* [2025-11-09, 04:34:00](https://entertainment.slashdot.org/story/25/11/09/047221/breaking-bad-creator-hates-ai-promises-new-show-pluribus-was-made-by-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Breaking Bad&apos; Creator Hates AI, Promises New Show &apos;Pluribus&apos; Was &apos;Made By Humans&apos;](https://entertainment.slashdot.org/story/25/11/09/047221/breaking-bad-creator-hates-ai-promises-new-show-pluribus-was-made-by-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 04:16:37](https://lobste.rs/s/eudvwq/ironclad_formally_verified_unix_like) - [Ironclad, a formally verified Unix-like kernel written in Ada](https://ironclad-os.org/)
* [2025-11-09, 04:10:00](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss) - [Gen Z is Ditching the Tie for a Toolbelt, and it’s the Smartest Rebellion Yet](https://soylentnews.org/article.pl?sid=25/11/07/0255249&amp;from=rss)
* [2025-11-09, 04:08:51](https://lobste.rs/s/irzh59/why_i_don_t_love_rust_either_2021) - [Why I don&apos;t love Rust (either) (2021)](https://cbarrete.com/rust-bad.html)
* [2025-11-09, 04:02:47](https://news.ycombinator.com/item?id=45862802) - [Reverse engineering Codex CLI to get GPT-5-Codex-Mini to draw me a pelican](https://simonwillison.net/2025/Nov/9/gpt-5-codex-mini/)
* [2025-11-09, 03:15:20](https://lobste.rs/s/bcyczw/ofcom_files_part_2_ip_blocking_uk_is_not) - [The Ofcom Files, Part 2: IP Blocking the UK is Not Enough to Comply with the Online Safety Act](https://prestonbyrne.com/2025/11/06/the-ofcom-files-part-2-ip-blocking-the-uk-is-not-enough-to-comply-with-the-online-safety-act/)
* [2025-11-09, 02:34:00](https://news.slashdot.org/story/25/11/08/2136253/new-firefox-mascot-kit-unveiled-on-new-web-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Firefox Mascot &apos;Kit&apos; Unveiled On New Web Page](https://news.slashdot.org/story/25/11/08/2136253/new-firefox-mascot-kit-unveiled-on-new-web-page?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-09, 00:55:47](https://lobste.rs/s/jf65nn/fixing_biggest_problem_with_mechanical) - [Fixing the Biggest Problem With Mechanical Keyboards](https://youtu.be/N3FEv1qw4_w)
* [2025-11-08, 23:43:11](https://lobste.rs/s/qvajex/trait_constrained_enums_rust) - [Trait-Constrained Enums in Rust](https://kcsongor.github.io/gadts-in-rust/)
* [2025-11-08, 23:34:00](https://tech.slashdot.org/story/25/11/08/1930213/common-crawl-criticized-for-quietly-funneling-paywalled-articles-to-ai-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Common Crawl Criticized for &apos;Quietly Funneling Paywalled Articles to AI Developers&apos;](https://tech.slashdot.org/story/25/11/08/1930213/common-crawl-criticized-for-quietly-funneling-paywalled-articles-to-ai-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 23:18:00](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss) - [Does Academia Need a Wake Up Call on Wikibooks?](https://soylentnews.org/article.pl?sid=25/11/06/0740218&amp;from=rss)
* [2025-11-08, 23:03:10](https://news.ycombinator.com/item?id=45860843) - [Ironclad – formally verified, real-time capable, Unix-like OS kernel](https://ironclad-os.org/)
* [2025-11-08, 22:34:00](https://science.slashdot.org/story/25/11/08/2021211/scientists-edit-gene-in-15-patients-that-may-permanently-reduce-high-cholesterol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Edit Gene in 15 Patients That May Permanently Reduce High Cholesterol](https://science.slashdot.org/story/25/11/08/2021211/scientists-edit-gene-in-15-patients-that-may-permanently-reduce-high-cholesterol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 21:34:00](https://tech.slashdot.org/story/25/11/08/0836254/bank-of-america-faces-lawsuit-over-alleged-unpaid-time-for-windows-bootup-logins-and-security-token-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank of America Faces Lawsuit Over Alleged Unpaid Time for Windows Bootup, Logins, and Security Token Requests](https://tech.slashdot.org/story/25/11/08/0836254/bank-of-america-faces-lawsuit-over-alleged-unpaid-time-for-windows-bootup-logins-and-security-token-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 20:34:00](https://science.slashdot.org/story/25/11/08/0735217/chan-zuckerberg-initiative-shifts-bulk-of-philanthropy-going-all-in-on-ai-powered-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chan Zuckerberg Initiative Shifts Bulk of Philanthropy, &apos;Going All In on AI-Powered Biology&apos;](https://science.slashdot.org/story/25/11/08/0735217/chan-zuckerberg-initiative-shifts-bulk-of-philanthropy-going-all-in-on-ai-powered-biology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 19:57:52](https://news.ycombinator.com/item?id=45859471) - [Largest cargo sailboat completes first Atlantic crossing](https://www.marineinsight.com/shipping-news/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing/)
* [2025-11-08, 19:34:00](https://tech.slashdot.org/story/25/11/08/1759258/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s Largest Cargo Sailboat Completes Historic First Atlantic Crossing](https://tech.slashdot.org/story/25/11/08/1759258/worlds-largest-cargo-sailboat-completes-historic-first-atlantic-crossing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 19:02:58](https://lobste.rs/s/ojxoor/gsoc_2025_reports_using_bubblewrap_add) - [GSOC 2025 Reports: Using bubblewrap to add sandboxing to NetBSD](https://blog.netbsd.org/tnf/entry/gsoc2025_bubblewrap_sandboxing)
* [2025-11-08, 18:43:55](https://news.ycombinator.com/item?id=45858905) - [Marko – A declarative, HTML‑based language](https://markojs.com/)
* [2025-11-08, 18:34:00](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bombshell Report Exposes How Meta Relied On Scam Ad Profits To Fund AI](https://tech.slashdot.org/story/25/11/08/0653232/bombshell-report-exposes-how-meta-relied-on-scam-ad-profits-to-fund-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 18:34:00](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss) - [OpenAI Looking for Taxpayers to Bail Them Out If the Bubble Bursts](https://soylentnews.org/article.pl?sid=25/11/06/0735234&amp;from=rss)
* [2025-11-08, 17:34:00](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Volunteer Translators Quit After Mozilla Begins Using Translation Bot](https://tech.slashdot.org/story/25/11/08/0754249/japanese-volunteer-translators-quit-after-mozilla-begins-using-translation-bot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-08, 16:37:51](https://lobste.rs/s/sdc7ki/opencloud_alternative_nextcloud) - [opencloud - an alternative to nextcloud written in Go](https://github.com/opencloud-eu/opencloud)
* [2025-11-08, 15:34:59](https://lobste.rs/s/ogyjwm/local_first_htmx) - [Local First HTMX](https://elijahm.com/posts/local_first_htmx/)
* [2025-11-08, 15:12:30](https://lobste.rs/s/44dgd7/small_language_models_are_future_agentic) - [Small Language Models are the Future of Agentic AI](https://arxiv.org/pdf/2506.02153)
* [2025-11-08, 13:48:00](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss) - [FuguIta 7.8 - OpenBSD-based Live System - Released!](https://soylentnews.org/article.pl?sid=25/11/06/0723234&amp;from=rss)
* [2025-11-08, 10:33:39](https://lobste.rs/s/wbyo8d/jelly_slider) - [Jelly Slider](https://docs.swmansion.com/TypeGPU/examples/#example=rendering--jelly-slider)
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
* [2025-11-05, 19:28:00](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss) - [Debian Introduces Rust Toolchain Dependencies to Apt](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss)
* [2025-11-05, 14:41:00](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss) - [We&apos;re About to Find Many More Interstellar Interlopers—Here&apos;s How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
