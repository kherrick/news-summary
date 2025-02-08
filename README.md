# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Open-Source Innovations

* [The Deck: An Open-Source Cross-Platform Multiplayer Card Game Engine in Flutter](https://github.com/xajik/thedeck) - Explore a new open-source engine tailored for card game development in Flutter. [Comments](https://news.ycombinator.com/item?id=42983699)

* [Collection of one-file C/C++ libraries with no dependencies, primarily for games](https://github.com/RandyGaul/cute_headers) - A curated set of single-header libraries focusing on game development simplicity. [Comments](https://news.ycombinator.com/item?id=42983197)

* [No-Libc Zig Now Outperforms Glibc Zig](https://ziglang.org/devlog/2025/#2025-02-07) - Zig's no-libc variant makes significant performance strides compared to its glibc alternative. [Comments](https://lobste.rs/s/uoxout/no_libc_zig_now_outperforms_glibc_zig)

## Scientific and Space Discoveries

* [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://news.slashdot.org/story/25/02/08/0746221/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers uncover radiation belts following intense solar activity. [Comments](https://news.ycombinator.com/item?id=42982015)

* [Quantum Teleportation Used To Distribute a Calculation](https://tech.slashdot.org/story/25/02/07/236248/quantum-teleportation-used-to-distribute-a-calculation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking application of quantum mechanics to perform distributed computations efficiently. [Comments](https://news.ycombinator.com/item?id=42980283)

## Gaming Accomplishments and Challenges

* [Donkey Kong's Famed Kill Screen Has Been Cleared For the First Time](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A historic achievement in the classic arcade gaming world. [Comments](https://news.ycombinator.com/item?id=42983699)

* [PlayStation Network Suffering Major Outage](https://games.slashdot.org/story/25/02/08/0733239/playstation-network-suffering-major-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Gamers report a large-scale outage on Sony's PlayStation Network. [Comments](https://news.ycombinator.com/item?id=42983197)

## Technology and Security

* [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - Renewed concerns over access for alternative web browser users. [Comments](https://news.ycombinator.com/item?id=42982518)

* [OpenAI Investigating Claim of 20 Million Stolen User Credentials](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI responds to potential data leak affecting millions. [Comments](https://news.ycombinator.com/item?id=42982518)

## AI and Ethics

* [Creators Demand Tech Giants Fess Up, Pay For All That AI Training Data](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Content creators seek compensation for materials used in training AI. [Comments](https://news.ycombinator.com/item?id=42978199)

* [AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/) - New countermeasures against unethical data scraping efforts emerge. [Comments](https://lobste.rs/s/etdzwd/ai_haters_build_tarpits_trap_trick_ai)

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

* [2025-02-08, 15:50:10](https://lobste.rs/s/tn7hqo/carbon_is_not_programming_language_sort) - [Carbon is not a programming language (sort of)](https://herecomesthemoon.net/2025/02/carbon-is-not-a-language/)
* [2025-02-08, 15:47:36](https://news.ycombinator.com/item?id=42983699) - [The Deck: An Open-Source Cross-Platform Multiplayer Card Game Engine in Flutter](https://github.com/xajik/thedeck)
* [2025-02-08, 15:34:00](https://it.slashdot.org/story/25/02/08/0539235/are-return-to-office-mandates-just-attempts-to-make-people-to-quit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Return-to-Office Mandates Just Attempts to Make People to Quit?](https://it.slashdot.org/story/25/02/08/0539235/are-return-to-office-mandates-just-attempts-to-make-people-to-quit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 14:36:32](https://news.ycombinator.com/item?id=42983197) - [Collection of one-file C/C++ libraries with no dependencies, primarily for games](https://github.com/RandyGaul/cute_headers)
* [2025-02-08, 14:33:51](https://news.ycombinator.com/item?id=42983180) - [The Puzzle](https://silence.bearblog.dev/the-puzzle/)
* [2025-02-08, 13:00:00](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Donkey Kong's Famed Kill Screen Has Been Cleared For the First Time](https://games.slashdot.org/story/25/02/08/0758212/donkey-kongs-famed-kill-screen-has-been-cleared-for-the-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 12:38:53](https://lobste.rs/s/ejwdhq/three_years_ephemeral_nixos_my) - [Three Years of Ephemeral NixOS: My Experience Resetting Root on Every Boot](https://b.tuxes.uk/three-years-of-ephemeral-nixos.html)
* [2025-02-08, 11:38:33](https://news.ycombinator.com/item?id=42982270) - [A tale of several distros joining forces for a common goal: reproducible builds](https://video.fosdem.org/2025/h1302/fosdem-2025-6479-a-tale-of-several-distros-joining-forces-for-a-common-goal-reproducible-builds.av1.webm)
* [2025-02-08, 11:35:34](https://lobste.rs/s/di6rhf/tale_several_distros_joining_forces_for) - [A tale of several distros joining forces for a common goal: reproducible builds](https://video.fosdem.org/2025/h1302/fosdem-2025-6479-a-tale-of-several-distros-joining-forces-for-a-common-goal-reproducible-builds.av1.webm)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 10:41:17](https://news.ycombinator.com/item?id=42982015) - [Generating Voronoi Diagrams Using Fortune's Algorithm (With Odin)](https://redpenguin101.github.io/html/posts/2025_01_21_voronoi.html)
* [2025-02-08, 10:00:00](https://news.slashdot.org/story/25/02/08/0746221/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://news.slashdot.org/story/25/02/08/0746221/mysterious-radiation-belts-detected-around-earth-after-epic-solar-storm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 08:49:47](https://lobste.rs/s/vqzmj4/trivalent_hardened_chromium_for_desktop) - [Trivalent: A hardened chromium for desktop Linux inspired by Vanadium](https://github.com/secureblue/Trivalent)
* [2025-02-08, 08:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-08, 08:24:09](https://lobste.rs/s/5xhtrj/case_for_sans_io) - [The case for sans-io](https://youtu.be/RYHYiXMJdZI)
* [2025-02-08, 07:35:00](https://games.slashdot.org/story/25/02/08/0733239/playstation-network-suffering-major-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PlayStation Network Suffering Major Outage](https://games.slashdot.org/story/25/02/08/0733239/playstation-network-suffering-major-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 07:24:52](https://lobste.rs/s/zpbelt/lume_mit_licensed_cli_virtualize_macos) - [Lume, an MIT-licensed CLI to virtualize macOS environments](https://github.com/trycua/lume)
* [2025-02-08, 06:33:22](https://lobste.rs/s/uoxout/no_libc_zig_now_outperforms_glibc_zig) - [No-Libc Zig Now Outperforms Glibc Zig](https://ziglang.org/devlog/2025/#2025-02-07)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 06:17:09](https://news.ycombinator.com/item?id=42980835) - [Turner, Bird, Eratosthenes: An eternal burning thread](https://www.cambridge.org/core/journals/journal-of-functional-programming/article/turner-bird-eratosthenes-an-eternal-burning-thread/32E2EDF5D5EAEC95F13D313BC97B86F0)
* [2025-02-08, 04:05:28](https://news.ycombinator.com/item?id=42980283) - [LINUX is obsolete (1992)](https://groups.google.com/g/comp.os.minix/c/wlhw16QWltI)
* [2025-02-08, 03:37:55](https://lobste.rs/s/fshgqa/docker_bake_is_now_generally_available) - [Docker Bake is Now Generally Available](https://www.docker.com/blog/ga-launch-docker-bake/)
* [2025-02-08, 03:30:00](https://tech.slashdot.org/story/25/02/07/236248/quantum-teleportation-used-to-distribute-a-calculation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Quantum Teleportation Used To Distribute a Calculation](https://tech.slashdot.org/story/25/02/07/236248/quantum-teleportation-used-to-distribute-a-calculation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 03:02:57](https://news.ycombinator.com/item?id=42979986) - [Ghostwriter – use the reMarkable2 as an interface to vision-LLMs](https://github.com/awwaiid/ghostwriter)
* [2025-02-08, 02:41:35](https://news.ycombinator.com/item?id=42979869) - [Starlink in the Falkland Islands – A national emergency situation?](https://www.openfalklands.com/february-2025-starlink-in-the-falkland-islands-a-national-emergency-situation/)
* [2025-02-08, 02:02:00](https://yro.slashdot.org/story/25/02/07/2256236/automakers-sue-to-kill-maines-hugely-popular-right-to-repair-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Automakers Sue To Kill Maine's Hugely Popular 'Right To Repair' Law](https://yro.slashdot.org/story/25/02/07/2256236/automakers-sue-to-kill-maines-hugely-popular-right-to-repair-law?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
* [2025-02-08, 01:25:32](https://news.ycombinator.com/item?id=42979467) - [VSCode’s SSH agent is bananas](https://fly.io/blog/vscode-ssh-wtf/)
* [2025-02-08, 01:25:00](https://developers.slashdot.org/story/25/02/07/2246202/googles-7-year-slog-to-improve-chrome-extensions-still-hasnt-satisfied-developers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's 7-Year Slog To Improve Chrome Extensions Still Hasn't Satisfied Developers](https://developers.slashdot.org/story/25/02/07/2246202/googles-7-year-slog-to-improve-chrome-extensions-still-hasnt-satisfied-developers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 00:45:00](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Investigating Claim of 20 Million Stolen User Credentials](https://yro.slashdot.org/story/25/02/07/2236218/openai-investigating-claim-of-20-million-stolen-user-credentials?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-08, 00:02:00](https://science.slashdot.org/story/25/02/07/2124217/us-health-system-notifies-882000-patients-of-august-2023-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Health System Notifies 882,000 Patients of August 2023 Breach](https://science.slashdot.org/story/25/02/07/2124217/us-health-system-notifies-882000-patients-of-august-2023-breach?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 23:20:00](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Creators Demand Tech Giants Fess Up, Pay For All That AI Training Data](https://slashdot.org/story/25/02/07/2114226/creators-demand-tech-giants-fess-up-pay-for-all-that-ai-training-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 22:40:00](https://yro.slashdot.org/story/25/02/07/213240/amazon-says-germany-customers-wont-lose-amazon-prime-as-a-result-of-nokia-patent-win?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Says Germany Customers Won't Lose Amazon Prime As a Result of Nokia Patent Win](https://yro.slashdot.org/story/25/02/07/213240/amazon-says-germany-customers-wont-lose-amazon-prime-as-a-result-of-nokia-patent-win?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 22:23:31](https://news.ycombinator.com/item?id=42978199) - [Obscure Islands I Find Interesting](https://amanvir.com/obscure-islands)
* [2025-02-07, 22:18:48](https://lobste.rs/s/etdzwd/ai_haters_build_tarpits_trap_trick_ai) - [AI haters build tarpits to trap and trick AI scrapers that ignore robots.txt](https://arstechnica.com/tech-policy/2025/01/ai-haters-build-tarpits-to-trap-and-trick-ai-scrapers-that-ignore-robots-txt/)
* [2025-02-07, 22:02:00](https://games.slashdot.org/story/25/02/07/2053255/football-manager-25-canceled-in-a-refreshing-show-of-concern-for-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Football Manager 25 Canceled In a Refreshing Show of Concern For Quality](https://games.slashdot.org/story/25/02/07/2053255/football-manager-25-canceled-in-a-refreshing-show-of-concern-for-quality?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 21:21:00](https://slashdot.org/story/25/02/07/1423237/salesforce-workday-are-hiring-more-overseas-to-save-cash?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Salesforce, Workday Are Hiring More Overseas To Save Cash](https://slashdot.org/story/25/02/07/1423237/salesforce-workday-are-hiring-more-overseas-to-save-cash?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 20:56:58](https://news.ycombinator.com/item?id=42977388) - [Show HN: ExpenseOwl – Simple, self-hosted expense tracker](https://github.com/Tanq16/ExpenseOwl)
* [2025-02-07, 20:41:00](https://it.slashdot.org/story/25/02/07/140254/microsoft-365-price-rises-are-coming---pay-up-or-opt-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft 365 Price Rises Are Coming - Pay Up or Opt Out](https://it.slashdot.org/story/25/02/07/140254/microsoft-365-price-rises-are-coming---pay-up-or-opt-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 20:00:00](https://news.slashdot.org/story/25/02/07/1347229/most-britons-back-ban-on-smarter-than-human-ai-models-poll-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Most Britons Back Ban on 'Smarter-than-Human' AI Models, Poll Shows](https://news.slashdot.org/story/25/02/07/1347229/most-britons-back-ban-on-smarter-than-human-ai-models-poll-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-07, 19:48:16](https://news.ycombinator.com/item?id=42976698) - [Do-nothing scripting: the key to gradual automation (2019)](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/)
* [2025-02-07, 19:42:30](https://lobste.rs/s/gz2fgw/getaddrinfo_sucks_everything_else_is) - [getaddrinfo sucks. everything else is much worse](https://valentin.gosu.se/blog/2025/02/getaddrinfo-sucks-everything-else-is-much-worse)
* [2025-02-07, 18:30:00](https://lobste.rs/s/5m5rb6/cloudflare_incident_on_february_6_2025) - [Cloudflare incident on February 6, 2025](https://blog.cloudflare.com/cloudflare-incident-on-february-6-2025/)
* [2025-02-07, 18:23:40](https://news.ycombinator.com/item?id=42975803) - [Show HN: A website that heatmaps your city based on your housing preferences](https://theretowhere.com/)
* [2025-02-07, 17:51:49](https://news.ycombinator.com/item?id=42975436) - [A brief history of code signing at Mozilla](https://hearsum.ca/posts/history-of-code-signing-at-mozilla/)
* [2025-02-07, 17:49:36](https://lobste.rs/s/wflsxa/brief_history_code_signing_at_mozilla) - [A Brief History of Code Signing at Mozilla](https://hearsum.ca/posts/history-of-code-signing-at-mozilla/)
* [2025-02-07, 17:32:13](https://lobste.rs/s/np9f8i/fun_friday_what_s_weirdest_automation_you) - [Fun Friday: what's the weirdest automation you've ever made?](https://lobste.rs/s/np9f8i/fun_friday_what_s_weirdest_automation_you)
* [2025-02-07, 17:20:11](https://lobste.rs/s/pdcipx/polysubml_demo_simple_ml_like_language) - [polysubml-demo: A simple ML-like language with subtyping, polymorphism, higher rank types, and global type inference](https://github.com/Storyyeller/polysubml-demo)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 16:04:23](https://lobste.rs/s/josk1v/code_beyond_fair) - [CODE beyond FAIR](https://inria.hal.science/hal-04930405v1/document#page=2)
* [2025-02-07, 14:25:28](https://lobste.rs/s/srf2u2/gleam_v1_8_0_released) - [Gleam v1.8.0 released](https://gleam.run/news/gleam-gets-rename-variable/)
* [2025-02-07, 14:10:49](https://lobste.rs/s/ui5fzs/cpython_tail_call_interpreter_merged_for) - [CPython tail-call interpreter merged for Python 3.14, a 10% speedup in benchmarks](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call)
* [2025-02-07, 13:43:28](https://lobste.rs/s/y0bakb/refined_simple_refinement_types_for_rust) - [Refined: simple refinement types for Rust](https://jordankaye.dev/posts/refined/)
* [2025-02-07, 13:02:03](https://news.ycombinator.com/item?id=42972062) - [Asahi Linux lead developer Hector Martin resigns from Linux kernel](https://lkml.org/lkml/2025/2/7/9)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 11:11:40](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ro1i8v/what_are_you_doing_this_weekend)
* [2025-02-07, 08:00:33](https://lobste.rs/s/l4olys/numbat_statically_typed_programming) - [numbat: A statically typed programming language for scientific computations with first class support for physical dimensions and units](https://github.com/sharkdp/numbat)
* [2025-02-07, 07:46:07](https://lobste.rs/s/vlzdgt/fosdem_2025_14_years_systemd) - [FOSDEM 2025 - 14 Years of systemd](https://fosdem.org/2025/schedule/event/fosdem-2025-6648-14-years-of-systemd/)
* [2025-02-07, 07:45:05](https://news.ycombinator.com/item?id=42970412) - [U.K. orders Apple to let it spy on users’ encrypted accounts](https://www.washingtonpost.com/technology/2025/02/07/apple-encryption-backdoor-uk/)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 04:52:11](https://lobste.rs/s/zzbfob/you_didn_t_notice_mp3_is_now_free) - [You Didn't Notice MP3 Is Now Free](https://idiallo.com/blog/listen-mp3-is-free)
* [2025-02-07, 04:11:59](https://lobste.rs/s/b9ezyc/three_projections_doctor_futamura) - [The Three Projections of Doctor Futamura](http://blog.sigfpe.com/2009/05/three-projections-of-doctor-futamura.html)
* [2025-02-07, 03:52:24](https://lobste.rs/s/f5ziu7/comments_on_shared_unix_hosting_vs_cloud) - [Comments on Shared Unix Hosting vs. the Cloud](https://oils.pub/blog/2025/02/shared-hosting.html)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
* [2025-02-06, 21:12:00](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss) - [Warmer, More Crowded Cities Bring Out the Rats](https://soylentnews.org/article.pl?sid=25/02/04/1537254&from=rss)
* [2025-02-06, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss) - [Who's Your Pick?  Eagles or Chiefs? Or Statistics?](https://soylentnews.org/article.pl?sid=25/02/04/1528253&from=rss)
* [2025-02-06, 14:44:11](https://news.ycombinator.com/item?id=42962822) - [Five coding hats](https://dubroy.com/blog/five-coding-hats/)
* [2025-02-06, 12:58:27](https://lobste.rs/s/e8tdsr/asdf_version_manager_has_been_re_written) - [Asdf Version Manager Has Been Re-Written in Golang](https://stratus3d.com/blog/2025/02/03/asdf-has-been-rewritten-in-go)
* [2025-02-06, 12:55:17](https://news.ycombinator.com/item?id=42961868) - [A colorful Game of Life](https://colorlife.quick.jaredforsyth.com)
* [2025-02-06, 11:40:00](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss) - [Google Offering ‘Voluntary Exit’ for Employees Working on Pixel, Android](https://soylentnews.org/article.pl?sid=25/02/04/1521226&from=rss)
* [2025-02-06, 07:01:26](https://news.ycombinator.com/item?id=42959841) - [Hotline for modern Apple systems](https://github.com/mierau/hotline)
* [2025-02-06, 06:55:00](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss) - [Cooking Flawless Pasta - it's Science!](https://soylentnews.org/article.pl?sid=25/02/04/1518208&from=rss)
* [2025-02-06, 04:32:43](https://news.ycombinator.com/item?id=42959110) - [Implementing a Game Boy emulator in Ruby](https://sacckey.dev/posts/implementing-a-game-boy-emulator-in-ruby/)
* [2025-02-06, 02:13:00](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss) - [These Smart Glasses Help People With Macular Degeneration By Eliminating Blind Spots](https://soylentnews.org/article.pl?sid=25/02/04/1511202&from=rss)
* [2025-02-05, 21:24:00](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss) - [Giant Study Questions Link Between Autism and Maternal Health](https://soylentnews.org/article.pl?sid=25/02/04/157244&from=rss)
* [2025-02-05, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss) - [Everyone Knows Your Location: Tracking Myself Down Through in-App Ads](https://soylentnews.org/article.pl?sid=25/02/04/1455221&from=rss)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 09:27:30](https://news.ycombinator.com/item?id=42946095) - [Insomnia, Control](https://untested.sonnet.io/notes/insomnia-control/)
* [2025-02-05, 09:12:41](https://news.ycombinator.com/item?id=42945980) - [Station of despair: What to do if you get stuck at end of Tokyo Chuo Rapid Line](https://soranews24.com/2024/12/21/station-of-despair-what-to-do-if-you-get-stuck-at-the-end-of-tokyos-chuo-rapid-line/)
* [2025-02-05, 07:26:51](https://news.ycombinator.com/item?id=42945109) - [The practical (Unix) problems with .cache and its friends](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/DotCacheDirectoriesProblem)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 18:34:47](https://news.ycombinator.com/item?id=42936650) - [Tapestry by Iconfactory](https://usetapestry.com/)
* [2025-02-04, 17:21:21](https://news.ycombinator.com/item?id=42935520) - [Show HN: Automated Sorting of group photos by user defined N people in each pic](https://github.com/Karvy-Singh/Sort_Memories)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 16:22:18](https://news.ycombinator.com/item?id=42934434) - [Colossus, the first large-scale electronic computer](https://www.colossus-computer.com/colossus1.html#section02)
* [2025-02-04, 14:28:04](https://news.ycombinator.com/item?id=42932747) - [The Leaning Tower of New York](https://www.newyorker.com/magazine/2025/02/10/the-leaning-tower-of-new-york)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 11:56:35](https://news.ycombinator.com/item?id=42931241) - [The PS2’s backwards compatibility from the engineer who built it (2020)](https://freelansations.medium.com/the-story-of-the-ps2s-backwards-compatibility-from-the-engineer-who-built-it-ec39cf5a0353)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
