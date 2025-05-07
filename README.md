# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Cybersecurity

* [NSO Group Must Pay More Than $167 Million In Damages To WhatsApp For Spyware Campaign](https://yro.slashdot.org/story/25/05/06/2136240/nso-group-must-pay-more-than-167-million-in-damages-to-whatsapp-for-spyware-campaign?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NSO Group is ordered to pay significant damages for targeting WhatsApp users with spyware.

* [Amazon's Zoox Robotaxi Unit Issues Software Recall After Recent Las Vegas Crash](https://tech.slashdot.org/story/25/05/06/2141257/amazons-zoox-robotaxi-unit-issues-software-recall-after-recent-las-vegas-crash?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Zoox implements a software recall following safety concerns.

* [Memory-Safe Sudo To Become the Default In Ubuntu](https://news.slashdot.org/story/25/05/06/213254/memory-safe-sudo-to-become-the-default-in-ubuntu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Security-focused changes are making memory-safe sudo the new standard on Ubuntu.

* [The state of SSL stacks](https://www.haproxy.com/blog/state-of-ssl-stacks) - A comprehensive overview of the state of SSL stacks and their implications.

* [Google Accidentally Reveals Android's Material 3 Expressive Interface](https://tech.slashdot.org/story/25/05/06/2119207/google-accidentally-reveals-androids-material-3-expressive-interface?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's reveal of a redesigned Android interface before its intended launch.

* [Reddit CEO Says 'Idealism' Masked Poor Work Ethic in Company's Early Days](https://slashdot.org/story/25/05/06/1647209/reddit-ceo-says-idealism-masked-poor-work-ethic-in-companys-early-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Reddit's journey through challenges in balancing ideals and operational efficiency.

## Artificial Intelligence and Advancements

* [Google Debuts an Updated Gemini 2.5 Pro AI Model Ahead of I/O](https://tech.slashdot.org/story/25/05/06/2036211/google-debuts-an-updated-gemini-25-pro-ai-model-ahead-of-io?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A preview of Google's enhanced AI model designed for improved processing.

* [Will supercapacitors come to AI's rescue?](https://spectrum.ieee.org/supercapacitor-2671883490) - Exploring novel energy solutions to support future AI initiatives.

* [AI Law Firm Offering $2.7 Legal Letters Wins 'Landmark' Approval](https://slashdot.org/story/25/05/06/1833226/ai-law-firm-offering-27-legal-letters-wins-landmark-approval?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal services become more accessible with AI-driven initiatives.

* [Accents in latent spaces: How AI hears accent strength in English](https://accent-strength.boldvoice.com/) - Understanding how AI models detect and quantify accent nuances.

## Science and Exploration

* [Scientist have found a way to 'tattoo' tardigrades](https://phys.org/news/2025-04-scientists-tattoo-tardigrades.html) - An innovative methodology for studying hardy, microscopic creatures.

* [China Successfully Reloads a Running Thorium Reactor](https://soylentnews.org/article.pl?sid=25/05/03/1421205&from=rss) - Milestone achievement in sustainable nuclear energy by China.

* [Is Planet Nine Alone in the Outer System?](https://www.centauri-dreams.org/2025/05/06/is-planet-nine-alone-in-the-outer-system/) - Deep-space explorations continue to dive into solar mysteries.

* [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&from=rss) - Curious patterns in academic publications intrigue researchers.

## Software and Open Source

* [Brush (Bo(u)rn(e) RUsty SHell) a POSIX and Bash-Compatible Shell in Rust](https://github.com/reubeno/brush) - A new shell implementation challenges conventional methods with Rust.

* [VVVVVV Source Code](https://github.com/TerryCavanagh/VVVVVV) - Seeking insights or improvements? Explore the game-known codebase.

* [An Interactive Debugger for Rust Trait Errors](https://cel.cs.brown.edu/blog/an-interactive-debugger-for-rust-trait-errors/) - Advancing Rust debugging methodologies for developers worldwide.

* [Towards React Server Components in Clojure, Part 1](https://romanliutikov.com/blog/towards-react-server-components-in-clojure-part-1) - Progressive server components for modern app-making.

## Corporate Developments and Policy

* [New Bill Would Force Apple, Google To Open App Store Ecosystems](https://apple.slashdot.org/story/25/05/06/2252259/new-bill-would-force-apple-google-to-open-app-store-ecosystems?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legislative pressures aim to reshape dominant tech operations.

* [DoorDash to acquire Deliveroo](https://www.cnbc.com/2025/05/06/doordash-to-buy-uk-food-delivery-firm-deliveroo-in-3point9-billion-deal.html) - Consolidation moves in tech and service markets.

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

* [2025-05-07, 03:30:00](https://yro.slashdot.org/story/25/05/06/2136240/nso-group-must-pay-more-than-167-million-in-damages-to-whatsapp-for-spyware-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSO Group Must Pay More Than $167 Million In Damages To WhatsApp For Spyware Campaign](https://yro.slashdot.org/story/25/05/06/2136240/nso-group-must-pay-more-than-167-million-in-damages-to-whatsapp-for-spyware-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-07, 03:24:58](https://lobste.rs/s/5ilobb/vibe_coding_by_emergent_garden) - [\&quot;Vibe Coding\&quot; by Emergent Garden](https://www.youtube.com/watch?v=1OxBv9Q7Uxo)
* [2025-05-07, 02:51:00](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss) - [PA’s Largest Coal Plant to Become 4.5GW Gas-Fired AI Hub](https://soylentnews.org/article.pl?sid=25/05/06/032221&amp;from=rss)
* [2025-05-07, 01:50:19](https://lobste.rs/s/ugfqbq/glossary_web_component) - [Glossary Web Component](https://dbushell.com/2025/05/07/glossary-web-component/)
* [2025-05-07, 01:25:00](https://apple.slashdot.org/story/25/05/06/2252259/new-bill-would-force-apple-google-to-open-app-store-ecosystems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Bill Would Force Apple, Google To Open App Store Ecosystems](https://apple.slashdot.org/story/25/05/06/2252259/new-bill-would-force-apple-google-to-open-app-store-ecosystems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-07, 01:15:08](https://lobste.rs/s/bqnktb/state_ssl_stacks) - [The state of SSL stacks](https://www.haproxy.com/blog/state-of-ssl-stacks)
* [2025-05-07, 01:11:10](https://news.ycombinator.com/item?id=43911252) - [EPA Plans to Shut Down the Energy Star Program](https://www.nytimes.com/2025/05/06/climate/epa-energy-star-eliminated.html)
* [2025-05-07, 00:59:59](https://lobste.rs/s/fhcrmq/reverse_engineering_fujitsu_m7mu_relc) - [Reverse-engineering Fujitsu M7MU RELC hardware compression](https://op-co.de/blog/posts/fujitsu_relc_compression/)
* [2025-05-07, 00:55:44](https://lobste.rs/s/odkudp/lazarus_release_4_0) - [Lazarus release 4.0](https://forum.lazarus.freepascal.org/index.php?topic=71050.0)
* [2025-05-07, 00:54:19](https://news.ycombinator.com/item?id=43911167) - [Jury orders NSO to pay $167M for hacking WhatsApp users](https://arstechnica.com/security/2025/05/jury-orders-nso-to-pay-167-million-for-hacking-whatsapp-users/)
* [2025-05-07, 00:45:00](https://tech.slashdot.org/story/25/05/06/2141257/amazons-zoox-robotaxi-unit-issues-software-recall-after-recent-las-vegas-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Zoox Robotaxi Unit Issues Software Recall After Recent Las Vegas Crash](https://tech.slashdot.org/story/25/05/06/2141257/amazons-zoox-robotaxi-unit-issues-software-recall-after-recent-las-vegas-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-07, 00:28:46](https://news.ycombinator.com/item?id=43911050) - [Creativity came to pass](https://vale.rocks/posts/creativity-came-to-pass)
* [2025-05-07, 00:08:15](https://lobste.rs/s/hj8xyd/ocaml_cross_compilation_experiment) - [OCaml cross-compilation: an experiment](https://www.chrisarmstrong.dev/posts/ocaml-cross-compilation-an-experiment)
* [2025-05-07, 00:02:00](https://hardware.slashdot.org/story/25/05/06/2111247/trump-admin-plans-to-shut-down-the-energy-star-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Plans To Shut Down the Energy Star Program](https://hardware.slashdot.org/story/25/05/06/2111247/trump-admin-plans-to-shut-down-the-energy-star-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 23:51:11](https://lobste.rs/s/rdzahf/towards_react_server_components_clojure) - [Towards React Server Components in Clojure, Part 1](https://romanliutikov.com/blog/towards-react-server-components-in-clojure-part-1)
* [2025-05-06, 23:44:07](https://lobste.rs/s/ckzbkn/bash_posix_compatible_shell_implemented) - [bash/POSIX-compatible shell implemented in Rust](https://github.com/reubeno/brush)
* [2025-05-06, 23:33:54](https://news.ycombinator.com/item?id=43910745) - [Bloat is still software&apos;s biggest vulnerability (2024)](https://spectrum.ieee.org/lean-software-development)
* [2025-05-06, 23:22:49](https://news.ycombinator.com/item?id=43910685) - [Alignment is not free: How model upgrades can silence your confidence signals](https://www.variance.co/post/alignment-is-not-free-how-a-model-silenced-our-confidence-signals)
* [2025-05-06, 23:22:08](https://news.ycombinator.com/item?id=43910681) - [VVVVVV Source Code](https://github.com/TerryCavanagh/VVVVVV)
* [2025-05-06, 23:20:00](https://tech.slashdot.org/story/25/05/06/2119207/google-accidentally-reveals-androids-material-3-expressive-interface?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Accidentally Reveals Android&apos;s Material 3 Expressive Interface](https://tech.slashdot.org/story/25/05/06/2119207/google-accidentally-reveals-androids-material-3-expressive-interface?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 23:02:46](https://news.ycombinator.com/item?id=43910565) - [Show HN: Whippy Term - GUI terminal for embedded development (Linux and Windows)](https://whippyterm.com)
* [2025-05-06, 22:49:36](https://lobste.rs/s/ozzh1a/wikimedia_cloud_vps_ipv6_support) - [Wikimedia Cloud VPS: IPv6 support](https://techblog.wikimedia.org/2025/05/06/wikimedia-cloud-vps-ipv6-support/)
* [2025-05-06, 22:43:06](https://news.ycombinator.com/item?id=43910423) - [Sutton and Barto book implementation](https://github.com/ivanbelenky/RL)
* [2025-05-06, 22:40:00](https://news.slashdot.org/story/25/05/06/213254/memory-safe-sudo-to-become-the-default-in-ubuntu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Memory-Safe Sudo To Become the Default In Ubuntu](https://news.slashdot.org/story/25/05/06/213254/memory-safe-sudo-to-become-the-default-in-ubuntu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 22:03:00](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss) - [Who&apos;s in?](https://soylentnews.org/meta/article.pl?sid=25/05/06/0251212&amp;from=rss)
* [2025-05-06, 22:00:00](https://yro.slashdot.org/story/25/05/06/2056230/cisa-budget-faces-possible-500-million-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Budget Faces Possible $500 Million Cut](https://yro.slashdot.org/story/25/05/06/2056230/cisa-budget-faces-possible-500-million-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 21:20:00](https://tech.slashdot.org/story/25/05/06/2041241/ios-185-enables-carrier-satellite-service-like-t-mobile-starlink-on-older-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 18.5 Enables Carrier Satellite Service Like T-Mobile Starlink On Older iPhones](https://tech.slashdot.org/story/25/05/06/2041241/ios-185-enables-carrier-satellite-service-like-t-mobile-starlink-on-older-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 21:07:38](https://lobste.rs/s/tfw1lv/how_build_fleet_networked_offsite) - [How to build a fleet of networked offsite backups using Linux, WireGuard and rsync](https://ounapuu.ee/posts/2024/12/11/wireguard-backup-fleet/)
* [2025-05-06, 21:01:57](https://news.ycombinator.com/item?id=43909596) - [Continue (YC S23) is hiring software engineers in San Francisco](https://www.ycombinator.com/companies/continue/jobs/smcxRnM-software-engineer)
* [2025-05-06, 20:41:51](https://news.ycombinator.com/item?id=43909432) - [iOS Kindle app now has a ‘get book’ button after changes to App Store rules](https://www.theverge.com/news/661719/amazon-app-ios-apple-iphone-ipad-kindle-buy-books)
* [2025-05-06, 20:41:47](https://news.ycombinator.com/item?id=43909430) - [India launches attack on 9 sites in Pakistan and Pakistani Jammu and Kashmir](https://www.reuters.com/world/india/india-launches-attack-9-sites-pakistan-pakistan-occupied-jammu-kashmir-2025-05-06/)
* [2025-05-06, 20:39:35](https://news.ycombinator.com/item?id=43909409) - [Claude&apos;s system prompt is over 24k tokens with tools](https://github.com/asgeirtj/system_prompts_leaks/blob/main/claude.txt)
* [2025-05-06, 20:38:00](https://news.ycombinator.com/item?id=43909398) - [ACE-Step: A step towards music generation foundation model](https://github.com/ace-step/ACE-Step)
* [2025-05-06, 20:37:00](https://tech.slashdot.org/story/25/05/06/2036211/google-debuts-an-updated-gemini-25-pro-ai-model-ahead-of-io?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Debuts an Updated Gemini 2.5 Pro AI Model Ahead of I/O](https://tech.slashdot.org/story/25/05/06/2036211/google-debuts-an-updated-gemini-25-pro-ai-model-ahead-of-io?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 20:11:11](https://lobste.rs/s/lgcqey/performance_improvements_jdk_24) - [Performance Improvements in JDK 24](https://inside.java/2025/03/19/performance-improvements-in-jdk24/)
* [2025-05-06, 19:30:58](https://news.ycombinator.com/item?id=43908770) - [Will supercapacitors come to AI&apos;s rescue?](https://spectrum.ieee.org/supercapacitor-2671883490)
* [2025-05-06, 19:25:00](https://slashdot.org/story/25/05/06/1843232/ceo-departures-hit-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEO Departures Hit Record Levels](https://slashdot.org/story/25/05/06/1843232/ceo-departures-hit-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 18:47:49](https://news.ycombinator.com/item?id=43908368) - [Brush (Bo(u)rn(e) RUsty SHell) a POSIX and Bash-Compatible Shell in Rust](https://github.com/reubeno/brush)
* [2025-05-06, 18:45:00](https://slashdot.org/story/25/05/06/1833226/ai-law-firm-offering-27-legal-letters-wins-landmark-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Law Firm Offering $2.7 Legal Letters Wins &apos;Landmark&apos; Approval](https://slashdot.org/story/25/05/06/1833226/ai-law-firm-offering-27-legal-letters-wins-landmark-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 18:05:00](https://tech.slashdot.org/story/25/05/06/185254/microsoft-unveils-ai-powered-overhaul-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Unveils AI-Powered Overhaul for Windows 11](https://tech.slashdot.org/story/25/05/06/185254/microsoft-unveils-ai-powered-overhaul-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 17:51:03](https://news.ycombinator.com/item?id=43907820) - [Matt Godbolt sold me on Rust by showing me C++](https://www.collabora.com/news-and-blog/blog/2025/05/06/matt-godbolt-sold-me-on-rust-by-showing-me-c-plus-plus/)
* [2025-05-06, 17:29:31](https://news.ycombinator.com/item?id=43907586) - [Is Planet Nine Alone in the Outer System?](https://www.centauri-dreams.org/2025/05/06/is-planet-nine-alone-in-the-outer-system/)
* [2025-05-06, 17:25:00](https://linux.slashdot.org/story/25/05/06/1652215/microsoft-makes-fedora-an-official-windows-subsystem-for-linux-wsl-distribution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Makes Fedora an Official Windows Subsystem for Linux (WSL) Distribution](https://linux.slashdot.org/story/25/05/06/1652215/microsoft-makes-fedora-an-official-windows-subsystem-for-linux-wsl-distribution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 17:16:00](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss) - [Adventure – March 1980](https://soylentnews.org/article.pl?sid=25/05/05/2311202&amp;from=rss)
* [2025-05-06, 16:46:00](https://slashdot.org/story/25/05/06/1647209/reddit-ceo-says-idealism-masked-poor-work-ethic-in-companys-early-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit CEO Says &apos;Idealism&apos; Masked Poor Work Ethic in Company&apos;s Early Days](https://slashdot.org/story/25/05/06/1647209/reddit-ceo-says-idealism-masked-poor-work-ethic-in-companys-early-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 16:37:05](https://lobste.rs/s/d6evnj/nnd_tui_alternative_gdb) - [nnd: A TUI alternative to gdb](https://github.com/al13n321/nnd)
* [2025-05-06, 16:18:42](https://news.ycombinator.com/item?id=43906841) - [Launch HN: Exa (YC S21) – The web as a database](https://news.ycombinator.com/item?id=43906841)
* [2025-05-06, 16:00:00](https://news.slashdot.org/story/25/05/06/1522235/college-graduate-unemployment-hits-58-highest-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Graduate Unemployment Hits 5.8%, Highest in Decades](https://news.slashdot.org/story/25/05/06/1522235/college-graduate-unemployment-hits-58-highest-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-06, 15:47:21](https://news.ycombinator.com/item?id=43906442) - [Show HN: Sheet Music in Smart Glasses](https://news.ycombinator.com/item?id=43906442)
* [2025-05-06, 15:38:04](https://news.ycombinator.com/item?id=43906346) - [Show HN: Plexe – ML Models from a Prompt](https://github.com/plexe-ai/plexe)
* [2025-05-06, 15:10:00](https://news.ycombinator.com/item?id=43906018) - [Gemini 2.5 Pro Preview](https://developers.googleblog.com/en/gemini-2-5-pro-io-improved-coding-performance/)
* [2025-05-06, 15:02:22](https://news.ycombinator.com/item?id=43905942) - [Show HN: Clippy – 90s UI for local LLMs](https://felixrieseberg.github.io/clippy/)
* [2025-05-06, 14:07:57](https://news.ycombinator.com/item?id=43905299) - [Accents in latent spaces: How AI hears accent strength in English](https://accent-strength.boldvoice.com/)
* [2025-05-06, 14:06:05](https://lobste.rs/s/1t0gpl/curse_knowing_how_fixing_everything) - [The Curse of Knowing How, or; Fixing Everything](https://notashelf.dev/posts/curse-of-knowing)
* [2025-05-06, 13:58:03](https://news.ycombinator.com/item?id=43905185) - [Nnd – a TUI debugger alternative to GDB, LLDB](https://github.com/al13n321/nnd)
* [2025-05-06, 13:57:36](https://lobste.rs/s/jeomwb/bitter_lesson_2019) - [The Bitter Lesson (2019)](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
* [2025-05-06, 12:37:00](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss) - [Soviet-Era Spacecraft Expected to Plunge Uncontrolled to Earth Next Week](https://soylentnews.org/article.pl?sid=25/05/05/0249236&amp;from=rss)
* [2025-05-06, 12:31:19](https://lobste.rs/s/zp717o/genai_accelerated_tla_challenge) - [GenAI-accelerated TLA+ challenge](https://foundation.tlapl.us/challenge/index.html)
* [2025-05-06, 12:08:46](https://lobste.rs/s/cmrkra/rust_qemu_update) - [Rust in QEMU update](https://lore.kernel.org/qemu-devel/d3d1944e-2482-4aa7-b621-596246a08107@gnu.org/T/#u)
* [2025-05-06, 12:01:18](https://lobste.rs/s/g55jw9/framebuffer_user_interface) - [Framebuffer user interface](https://github.com/martinfama/fui)
* [2025-05-06, 11:46:31](https://lobste.rs/s/eeoz0s/interactive_debugger_for_rust_trait) - [An Interactive Debugger for Rust Trait Errors](https://cel.cs.brown.edu/blog/an-interactive-debugger-for-rust-trait-errors/)
* [2025-05-06, 11:23:22](https://lobste.rs/s/amexbe/memory_safe_sudo_become_default_ubuntu) - [Memory-safe sudo to become the default in Ubuntu](https://trifectatech.org/blog/memory-safe-sudo-to-become-the-default-in-ubuntu/)
* [2025-05-06, 10:35:18](https://lobste.rs/s/a9rojy/appeal_apple_from_anukari_regarding_gpu) - [An appeal to Apple from Anukari regarding GPU frequency scaling](https://anukari.com/blog/devlog/an-appeal-to-apple)
* [2025-05-06, 10:24:20](https://lobste.rs/s/qfewoo/what_is_my_fuzzer_doing) - [What is my fuzzer doing?](https://tweedegolf.nl/en/blog/154/what-is-my-fuzzer-doing)
* [2025-05-06, 10:10:52](https://news.ycombinator.com/item?id=43903400) - [FTC rule on unfair or deceptive fees to take effect on May 12](https://www.ftc.gov/news-events/news/press-releases/2025/05/ftc-rule-unfair-or-deceptive-fees-take-effect-may-12-2025)
* [2025-05-06, 07:50:00](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss) - [Backstage Access: Spotify’s Dev Tools Side-Hustle is Growing Legs](https://soylentnews.org/article.pl?sid=25/05/04/1840238&amp;from=rss)
* [2025-05-06, 07:42:47](https://lobste.rs/s/khca1j/curl_now_requires_disclosing_whether_ai) - [curl now requires disclosing whether AI was used on bug reports](https://www.linkedin.com/posts/danielstenberg_hackerone-curl-activity-7324820893862363136-glb1)
* [2025-05-06, 06:27:04](https://news.ycombinator.com/item?id=43902308) - [DoorDash to acquire Deliveroo](https://www.cnbc.com/2025/05/06/doordash-to-buy-uk-food-delivery-firm-deliveroo-in-3point9-billion-deal.html)
* [2025-05-06, 05:49:39](https://lobste.rs/s/68vaxo/interviewing_software_developers_from) - [Interviewing Software Developers: From Junior to Architect in a Single Programming Task](https://old.reddit.com/r/aethernet/comments/1kfwyln/interviewing_software_developers_from_junior_to/)
* [2025-05-06, 03:07:47](https://lobste.rs/s/yurnq1/podfox_world_s_first_container_aware) - [Podfox: World&apos;s First Container-Aware Browser](https://val.packett.cool/blog/podfox/)
* [2025-05-06, 03:05:00](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss) - [Microsoft Finally Launches its Controversial Recall Feature](https://soylentnews.org/article.pl?sid=25/05/03/1953213&amp;from=rss)
* [2025-05-06, 01:51:22](https://news.ycombinator.com/item?id=43901131) - [Scientists have found a way to &apos;tattoo&apos; tardigrades](https://phys.org/news/2025-04-scientists-tattoo-tardigrades.html)
* [2025-05-06, 00:57:48](https://news.ycombinator.com/item?id=43900877) - [OpenAI reaches agreement to buy Windsurf for $3B](https://www.bloomberg.com/news/articles/2025-05-06/openai-reaches-agreement-to-buy-startup-windsurf-for-3-billion)
* [2025-05-06, 00:01:10](https://lobste.rs/s/tfomzp/implementing_struct_arrays) - [Implementing a Struct of Arrays](https://brevzin.github.io/c++/2025/05/02/soa/)
* [2025-05-05, 22:18:00](https://soylentnews.org/article.pl?sid=25/05/03/1949215&amp;from=rss) - [Software Dev Fortifies His Blog With &apos;Zip Bombs&apos; - Attacking Bots Meet Their End With Software](https://soylentnews.org/article.pl?sid=25/05/03/1949215&amp;from=rss)
* [2025-05-05, 17:36:00](https://soylentnews.org/article.pl?sid=25/05/03/1941255&amp;from=rss) - [Plastic-Eating Mealworms Native to Africa Discovered](https://soylentnews.org/article.pl?sid=25/05/03/1941255&amp;from=rss)
* [2025-05-05, 12:43:00](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss) - [You Have Two Months Left to Update Your Old LG Phone](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss)
* [2025-05-05, 08:04:00](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss) - [China Successfully Reloads a Running Thorium Reactor](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss)
* [2025-05-05, 03:16:00](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss) - [The Absurdly Complicated Circuitry for the 386 Processor&apos;s Registers](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss)
* [2025-05-04, 22:32:00](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss) - [Why Do So Many AI Company Logos Look Like Buttholes?](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss)
* [2025-05-04, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss) - [Largest Imaging Spectro-Polarimeter Achieves First Light](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss)
* [2025-05-04, 16:37:00](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss) - [janrinok - Resignation](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss)
* [2025-05-04, 13:00:00](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss) - [Microsoft: Windows Server Hotpatching to Require Subscription](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss)
* [2025-05-04, 12:40:32](https://news.ycombinator.com/item?id=43886381) - [DuoBook: Generate bilingual stories to learn any language](https://duobook.co)
* [2025-05-04, 08:12:00](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss) - [NASA&apos;s Perseverance Rover Just Had A Close Call On Mars ](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss)
* [2025-05-04, 04:10:09](https://news.ycombinator.com/item?id=43884418) - [Old Timey Code and Old Timey Mono Fonts](https://github.com/dse/old-timey-mono-font)
* [2025-05-04, 03:33:00](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss) - [TSMC Breaks Ground On Third Plant In Arizona](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss)
* [2025-05-03, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss) - [Another Periodic Suggestion to Try, Just Try, Switching to Kagi for Search](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss)
* [2025-05-03, 18:03:00](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss) - [The 35th Anniversary of the Hubble Space Telescope](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss)
* [2025-05-03, 13:20:00](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss) - [Let&apos;s Remember That Extraordinary Claims Need Extraordinary Evidence](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss)
* [2025-05-03, 08:37:00](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss) - [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss)
* [2025-05-03, 03:52:00](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss) - [\&quot;Aerial Urination\&quot;](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss)
