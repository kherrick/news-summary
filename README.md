# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Google begins testing AI-only search results](https://arstechnica.com/google/2025/03/google-is-expanding-ai-overviews-and-testing-ai-only-search-results/) - [Comments](https://news.ycombinator.com/item?id=43288341)

* [SpaceX's Latest Starship Test Flight Ends With Another Explosion](https://science.slashdot.org/story/25/03/07/0422209/spacexs-latest-starship-test-flight-ends-with-another-explosion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/03/07/0422209/spacexs-latest-starship-test-flight-ends-with-another-explosion?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Tries To Cheat At Chess When It's Losing](https://games.slashdot.org/story/25/03/06/233246/ai-tries-to-cheat-at-chess-when-its-losing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://games.slashdot.org/story/25/03/06/233246/ai-tries-to-cheat-at-chess-when-its-losing?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Is Targeting 'Hundreds of Millions' of Businesses In Agentic AI Deployment](https://meta.slashdot.org/story/25/03/06/2234251/meta-is-targeting-hundreds-of-millions-of-businesses-in-agentic-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://meta.slashdot.org/story/25/03/06/2234251/meta-is-targeting-hundreds-of-millions-of-businesses-in-agentic-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Space

* [World's First "Synthetic Biological Intelligence" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)

* [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)

* [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)

## Environmental Issues

* [Global Sea Ice Hit Record Low in February, Scientists Say](https://news.slashdot.org/story/25/03/06/198259/global-sea-ice-hit-record-low-in-february-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/03/06/198259/global-sea-ice-hit-record-low-in-february-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)

## Social and Policy Developments

* [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [Comments](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)

* [US Mulls Policing Social Media of Would-Be Citizens](https://yro.slashdot.org/story/25/03/06/2248204/us-mulls-policing-social-media-of-would-be-citizens?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://yro.slashdot.org/story/25/03/06/2248204/us-mulls-policing-social-media-of-would-be-citizens?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-03-07, 10:09:21](https://lobste.rs/s/jpgdon/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/jpgdon/what_are_you_doing_this_weekend)
* [2025-03-07, 08:39:07](https://news.ycombinator.com/item?id=43288341) - [Google begins testing AI-only search results](https://arstechnica.com/google/2025/03/google-is-expanding-ai-overviews-and-testing-ai-only-search-results/)
* [2025-03-07, 08:08:35](https://news.ycombinator.com/item?id=43288156) - [Bye, Prime](https://www.tbray.org/ongoing/When/202x/2025/03/06/Canceled-Prime)
* [2025-03-07, 07:30:40](https://news.ycombinator.com/item?id=43287963) - [Shares of Starlink's European rival Eutelsat have tripled](https://www.marketwatch.com/story/shares-of-starlinks-european-competitor-have-tripled-ceo-says-it-can-do-the-job-in-ukraine-f5e4e1ac)
* [2025-03-07, 07:01:05](https://news.ycombinator.com/item?id=43287860) - [Cargo (YC S23) Is Hiring](https://www.ycombinator.com/companies/cargo/jobs/hLc670b-founding-full-stack-ae-founding-ae)
* [2025-03-07, 07:00:00](https://science.slashdot.org/story/25/03/07/0422209/spacexs-latest-starship-test-flight-ends-with-another-explosion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SpaceX's Latest Starship Test Flight Ends With Another Explosion](https://science.slashdot.org/story/25/03/07/0422209/spacexs-latest-starship-test-flight-ends-with-another-explosion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 06:45:57](https://news.ycombinator.com/item?id=43287821) - [Ladder: Self-Improving LLMs Through Recursive Problem Decomposition](https://arxiv.org/abs/2503.00735)
* [2025-03-07, 06:20:52](https://lobste.rs/s/slnjg7/gsm8k_platinum_revealing_performance) - [GSM8K-Platinum: Revealing Performance Gaps in Frontier LLMs](https://gradientscience.org/gsm8k-platinum/)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 05:33:38](https://lobste.rs/s/5pceqb/delta_chat_messenger_which_is_cross) - [Delta Chat: A Messenger which is cross compatible with email and PGP](https://delta.chat/en/help)
* [2025-03-07, 04:58:09](https://lobste.rs/s/mfysmn/opsgenie_is_reaching_its_end_life_soon) - [Opsgenie is reaching its end of life soon](https://www.atlassian.com/blog/announcements/evolution-of-it-operations)
* [2025-03-07, 03:30:00](https://games.slashdot.org/story/25/03/06/233246/ai-tries-to-cheat-at-chess-when-its-losing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Tries To Cheat At Chess When It's Losing](https://games.slashdot.org/story/25/03/06/233246/ai-tries-to-cheat-at-chess-when-its-losing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 03:14:43](https://lobste.rs/s/nx7trg/ten_machine_requirements_satisfy) - [Ten Machine Requirements To Satisfy Essentials Of Joint Activity](https://human-machine.team/)
* [2025-03-07, 01:30:00](https://yro.slashdot.org/story/25/03/06/2248204/us-mulls-policing-social-media-of-would-be-citizens?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Mulls Policing Social Media of Would-Be Citizens](https://yro.slashdot.org/story/25/03/06/2248204/us-mulls-policing-social-media-of-would-be-citizens?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 01:20:56](https://lobste.rs/s/b7gvbq/algebraic_effects_are_functional) - [Algebraic effects are a functional approach to manage side effects](https://crowdhailer.me/2025-02-14/algebraic-effects-are-a-functional-approach-to-manage-side-effects/)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-07, 00:50:00](https://slashdot.org/story/25/03/06/2242258/gboard-testing-circle-pill-shaped-keys-on-android?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gboard Testing Circle, Pill-Shaped Keys On Android](https://slashdot.org/story/25/03/06/2242258/gboard-testing-circle-pill-shaped-keys-on-android?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-07, 00:10:00](https://meta.slashdot.org/story/25/03/06/2234251/meta-is-targeting-hundreds-of-millions-of-businesses-in-agentic-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Is Targeting 'Hundreds of Millions' of Businesses In Agentic AI Deployment](https://meta.slashdot.org/story/25/03/06/2234251/meta-is-targeting-hundreds-of-millions-of-businesses-in-agentic-ai-deployment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 23:43:37](https://news.ycombinator.com/item?id=43286161) - [Differentiable Logic Cellular Automata](https://google-research.github.io/self-organising-systems/difflogic-ca/?hn)
* [2025-03-06, 23:36:51](https://lobste.rs/s/4winzr/five_years_home_cooked_apps) - [Five years of home-cooked apps](https://www.robinsloan.com/lab/five-years-of-home-cooked-apps/)
* [2025-03-06, 23:30:00](https://yro.slashdot.org/story/25/03/06/2138250/us-house-panel-subpoenas-alphabet-over-content-moderation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US House Panel Subpoenas Alphabet Over Content Moderation](https://yro.slashdot.org/story/25/03/06/2138250/us-house-panel-subpoenas-alphabet-over-content-moderation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 22:50:00](https://yro.slashdot.org/story/25/03/06/2133211/1password-introduces-nearby-items-tying-passwords-to-physical-locations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [1Password Introduces 'Nearby Items,' Tying Passwords To Physical Locations](https://yro.slashdot.org/story/25/03/06/2133211/1password-introduces-nearby-items-tying-passwords-to-physical-locations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 22:35:00](https://news.ycombinator.com/item?id=43285726) - [Why I find diffusion models interesting?](https://rnikhil.com/2025/03/06/diffusion-models-eval)
* [2025-03-06, 22:34:54](https://news.ycombinator.com/item?id=43285725) - [Ask HN: How did the internet discover my subdomain?](https://news.ycombinator.com/item?id=43285725)
* [2025-03-06, 22:28:01](https://news.ycombinator.com/item?id=43285671) - [How to distrust a CA without any certificate errors](https://dadrian.io/blog/posts/sct-not-after/)
* [2025-03-06, 22:10:00](https://apple.slashdot.org/story/25/03/06/2129211/chatgpt-on-macos-can-now-directly-edit-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ChatGPT On macOS Can Now Directly Edit Code](https://apple.slashdot.org/story/25/03/06/2129211/chatgpt-on-macos-can-now-directly-edit-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 22:00:42](https://lobste.rs/s/epcfq7/prolly_trees) - [Prolly Trees](https://docs.dolthub.com/architecture/storage-engine/prolly-tree)
* [2025-03-06, 21:30:00](https://yro.slashdot.org/story/25/03/06/2123237/starlink-benefits-as-trump-admin-rewrites-rules-for-42-billion-grant-program?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Starlink Benefits As Trump Admin Rewrites Rules For $42 Billion Grant Program](https://yro.slashdot.org/story/25/03/06/2123237/starlink-benefits-as-trump-admin-rewrites-rules-for-42-billion-grant-program?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 20:50:00](https://news.slashdot.org/story/25/03/06/198259/global-sea-ice-hit-record-low-in-february-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Global Sea Ice Hit Record Low in February, Scientists Say](https://news.slashdot.org/story/25/03/06/198259/global-sea-ice-hit-record-low-in-february-scientists-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 20:47:12](https://lobste.rs/s/4u5ohs/2009_composing_j_my_mind) - [(2009) Composing J in my mind](https://web.archive.org/web/20130921083348/http://kaleidic.com/2009/composing-j-in-my-mind/)
* [2025-03-06, 20:32:47](https://news.ycombinator.com/item?id=43284811) - [Show HN: Rust Vector and Quaternion Lib](https://github.com/David-OConnor/lin-alg)
* [2025-03-06, 20:10:00](https://hardware.slashdot.org/story/25/03/06/1857249/brother-denies-bricking-printers-using-third-party-ink?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brother Denies Bricking Printers Using Third-Party Ink](https://hardware.slashdot.org/story/25/03/06/1857249/brother-denies-bricking-printers-using-third-party-ink?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 20:02:54](https://lobste.rs/s/pjbdph/systems_correctness_practices_at_aws) - [Systems Correctness Practices at AWS: Leveraging Formal and Semi-formal Methods](https://dl.acm.org/doi/10.1145/3712057)
* [2025-03-06, 19:51:55](https://news.ycombinator.com/item?id=43284420) - [Using GRPO to Beat o1, o3-mini and R1 at \"Temporal Clue\"](https://openpipe.ai/blog/using-grpo-to-beat-o1-o3-mini-and-r1-on-temporal-clue)
* [2025-03-06, 19:32:12](https://news.ycombinator.com/item?id=43284227) - [Show HN: Shelgon: A Framework for Building Interactive REPL Shells in Rust](https://github.com/NishantJoshi00/shelgon)
* [2025-03-06, 19:30:00](https://news.slashdot.org/story/25/03/06/193217/uk-quietly-scrubs-encryption-advice-from-government-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Quietly Scrubs Encryption Advice From Government Websites](https://news.slashdot.org/story/25/03/06/193217/uk-quietly-scrubs-encryption-advice-from-government-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 19:04:12](https://news.ycombinator.com/item?id=43283917) - [Rayhunter – Rust tool to detect cell site simulators on an orbic mobile hotspot](https://github.com/EFForg/rayhunter)
* [2025-03-06, 18:50:00](https://news.slashdot.org/story/25/03/06/183209/us-communications-agency-to-explore-alternatives-to-gps-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Communications Agency To Explore Alternatives To GPS Systems](https://news.slashdot.org/story/25/03/06/183209/us-communications-agency-to-explore-alternatives-to-gps-systems?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 18:48:17](https://lobste.rs/s/ehiven/succinct_data_structures) - [Succinct data structures](https://blog.startifact.com/posts/succinct/)
* [2025-03-06, 18:45:47](https://news.ycombinator.com/item?id=43283669) - [Warewulf is a stateless and diskless container OS provisioning system](https://github.com/warewulf/warewulf)
* [2025-03-06, 18:44:08](https://lobste.rs/s/9oetiu/types_as_design_tool) - [Types as a design tool](https://interjectedfuture.com/types-as-a-design-tool/)
* [2025-03-06, 18:34:11](https://news.ycombinator.com/item?id=43283498) - [50 Years in Filesystems: 1984](https://blog.koehntopp.info/2023/05/06/50-years-in-filesystems-1984.html)
* [2025-03-06, 18:20:48](https://news.ycombinator.com/item?id=43283317) - [Show HN: Open-source, native audio turn detection model](https://github.com/pipecat-ai/smart-turn)
* [2025-03-06, 18:10:00](https://news.slashdot.org/story/25/03/06/1727237/denmark-postal-service-to-stop-delivering-letters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Denmark Postal Service To Stop Delivering Letters](https://news.slashdot.org/story/25/03/06/1727237/denmark-postal-service-to-stop-delivering-letters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 17:48:37](https://news.ycombinator.com/item?id=43282995) - [Succinct Data Structures](https://blog.startifact.com/posts/succinct/)
* [2025-03-06, 17:39:39](https://news.ycombinator.com/item?id=43282905) - [Mistral OCR](https://mistral.ai/fr/news/mistral-ocr)
* [2025-03-06, 17:22:01](https://lobste.rs/s/aln3cp/strobelight_profiling_service_built_on) - [Strobelight: A profiling service built on open source technology](https://engineering.fb.com/2025/01/21/production-engineering/strobelight-a-profiling-service-built-on-open-source-technology/)
* [2025-03-06, 17:20:00](https://games.slashdot.org/story/25/03/06/1719247/slashdot-asks-whats-the-most-influential-video-game-of-all-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Slashdot Asks: What's the Most Influential Video Game of All Time?](https://games.slashdot.org/story/25/03/06/1719247/slashdot-asks-whats-the-most-influential-video-game-of-all-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-06, 17:19:44](https://news.ycombinator.com/item?id=43282668) - [56k modems relied on digital trunk lines](https://hackaday.com/2025/03/06/why-56k-modems-relied-on-digital-phone-lines-you-didnt-know-we-had/)
* [2025-03-06, 17:12:08](https://lobste.rs/s/wccows/distributed_systems_without_raft_part_1) - [Distributed Systems without Raft (part 1)](https://david-delassus.medium.com/distributed-systems-without-raft-part-1-a6b0b43db7ee)
* [2025-03-06, 16:42:28](https://lobste.rs/s/mltpfg/xit_is_coming) - [xit is coming](https://radarroark.github.io/xit/xit-is-coming.html)
* [2025-03-06, 16:37:34](https://news.ycombinator.com/item?id=43282133) - [Anime fans stumbled upon a mathematical proof](https://www.scientificamerican.com/article/the-surprisingly-difficult-mathematical-proof-that-anime-fans-helped-solve/)
* [2025-03-06, 15:54:26](https://lobste.rs/s/gj6ghr/we_re_fixing_edge_computing_introducing) - [We’re fixing Edge Computing: Introducing Magic Containers](https://bunny.net/blog/introducing-magic-containers-what-edge-computing-was-meant-to-be/)
* [2025-03-06, 15:36:46](https://lobste.rs/s/vd2fxp/chat_bots_revisited) - [Chat Bots Revisited](https://blog.cofree.coffee/2025-03-05-chat-bots-revisited/)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 15:10:36](https://lobste.rs/s/30etvu/my_changes_default_phoenix_boilerplate) - [My changes to the default Phoenix boilerplate](https://mediremi.com/writing/phoenix-boilerplate/)
* [2025-03-06, 14:30:10](https://news.ycombinator.com/item?id=43280615) - [Show HN: CodeTracer – A new time-traveling debugger implemented in Nim and Rust](https://github.com/metacraft-labs/codetracer)
* [2025-03-06, 14:29:18](https://lobste.rs/s/23uu1f/writing_oled_display_driver_microzig) - [Writing an OLED display driver in MicroZig (2024)](https://andrewconl.in/blog/2024/microzig-display-driver/)
* [2025-03-06, 11:05:57](https://lobste.rs/s/yykwi5/50_years_filesystems_1984) - [50 years in filesystems: 1984](https://blog.koehntopp.info/2023/05/06/50-years-in-filesystems-1984.html)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 08:08:08](https://lobste.rs/s/uaiivt/xdg_ninja_shell_script_which_checks_your) - [xdg-ninja: A shell script which checks your $HOME for unwanted files and directories](https://github.com/b3nj5m1n/xdg-ninja)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:32:56](https://lobste.rs/s/tondqc/is_it_true_what_they_say_lobsters_love) - [Is it true what they say: \"Lobsters love Guinness\"?](https://postimg.cc/phdVNwPz)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
* [2025-03-05, 21:46:35](https://lobste.rs/s/itcqle/good_memory_allocator_200_lines_code) - [A good memory allocator in 200 lines of code](https://github.com/ziglang/zig/blob/0.14.0/lib/std/heap/SmpAllocator.zig)
* [2025-03-05, 20:27:00](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss) - [Robots Are Gaining New Capabilities Thanks to Plants and Fungi](https://soylentnews.org/article.pl?sid=25/03/04/028230&from=rss)
* [2025-03-05, 20:19:48](https://lobste.rs/s/oegolv/git_without_forge) - [Git without a forge](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/git-no-forge/)
* [2025-03-05, 15:51:57](https://lobste.rs/s/gkawzq/happy_day_for_rust) - [A Happy Day for Rust](https://steveklabnik.com/writing/a-happy-day-for-rust/)
* [2025-03-05, 15:44:00](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss) - [Meet the Ice-Hunting Robots Headed for the Moon Right Now](https://soylentnews.org/article.pl?sid=25/03/04/023230&from=rss)
* [2025-03-05, 11:01:00](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss) - [The UEFI Hype and Microsoft's Lies](https://soylentnews.org/article.pl?sid=25/03/03/1622232&from=rss)
* [2025-03-05, 06:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss) - [Ancient Humans Evolved New Blood Types After Leaving Africa](https://soylentnews.org/article.pl?sid=25/03/02/1643244&from=rss)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 12:32:38](https://news.ycombinator.com/item?id=43253704) - [Speeding Up Computational Lithography with the Power and Parallelism of GPUs](https://semiengineering.com/speeding-up-computational-lithography-with-the-power-and-parallelism-of-gpus/)
* [2025-03-04, 11:59:08](https://news.ycombinator.com/item?id=43253453) - [The British Navy Resisted a Decent Lightning Rod for Decades](https://spectrum.ieee.org/lightning-rod-2671217505)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-03, 23:12:41](https://news.ycombinator.com/item?id=43247979) - [Ereader Easy Swedish. Tool I Made for Myself to Learn a Language](https://ereader-swedish.fly.dev/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 18:58:50](https://news.ycombinator.com/item?id=43245361) - [Show HN: I built a Matrix themed AI hacking game](https://matrix.repello.ai)
* [2025-03-03, 17:38:50](https://news.ycombinator.com/item?id=43244416) - [Cowboys and Drones: two modes of operation for small business](https://emeaentrepreneurs.com/anti/cowboys-and-drones/)
* [2025-03-03, 16:40:00](https://news.ycombinator.com/item?id=43243569) - [Some Thoughts on Autoregressive Models](https://wonderfall.dev/autoregressive/)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 13:39:04](https://news.ycombinator.com/item?id=43241589) - [Reintroductions of beavers into the wild in several parts of England](https://www.wildlifetrusts.org/news/beavers-are-coming-home)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 09:24:09](https://news.ycombinator.com/item?id=43239948) - [Windows 11 Insider Preview Build](https://blogs.windows.com/windows-insider/2025/02/21/announcing-windows-11-insider-preview-build-22635-4950-beta-channel/)
* [2025-03-03, 07:47:49](https://news.ycombinator.com/item?id=43239284) - [Discovery of fresco portraying Dionysian mysteries at Pompeii](https://pompeiisites.org/en/comunicati/pompeii-discovery-of-a-room-with-frescoes-depicting-the-initiation-into-the-mysteries-and-the-dionysiac-procession/)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
