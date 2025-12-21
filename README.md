# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Confused Waymos Stopped in Intersections During San Francisco Power Outage](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Self-driving Waymo cars suffered malfunctions during a San Francisco blackout, causing congestion at intersections. [Comments](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Do Gamers Hate AI? Indie Game Awards Disqualifies 'Clair Obscur' Over GenAI Usage](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The use of generative AI tools disqualified an indie game from an award, reflecting ongoing skepticism towards AI in creative fields. [Comments](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Thirteen years of Rust and the birth of Rue](https://steveklabnik.com/writing/thirteen-years-of-rust-and-the-birth-of-rue/) - Rust's incredible growth and a hint at the new project 'Rue' signifies the evolution of systems programming. [Comments](https://lobste.rs/s/obiiim/thirteen_years_rust_birth_rue)

* [Package Forge: The Lesser Known Snap/Flatpak Alternative Without Distro Lock-In](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Package Forge offers an alternative packaging system without the dependency on specific Linux distributions. [Comments](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## AI and Computing

* [A Guide to Local Coding Models](https://www.aiforswes.com/p/you-dont-need-to-spend-100mo-on-claude) - Tips for developers on leveraging local coding models to minimize costs and dependency on cloud services. [Comments](https://news.ycombinator.com/item?id=46348329)

* [More on whether useful quantum computing is "imminent"](https://scottaaronson.blog/?p=9425) - Insights into the timeline and challenges for achieving significant breakthroughs in quantum computing. [Comments](https://news.ycombinator.com/item?id=46348318)

* [Logging Sucks](https://loggingsucks.com/) - Critics highlight inefficiencies and frustrations with traditional logging paradigms in software systems. [Comments](https://news.ycombinator.com/item?id=46346796)

## Lifestyle and Society

* [dumbphone journey -- eight month update](https://blog.frog.equipment/dumbphone-journey-eight-month-update) - Reflections on adopting a minimalist phone for eight months and the shift in digital habits. [Comments](https://lobste.rs/s/lyykk0/dumbphone_journey_eight_month_update)

* [You’re not burnt out, you’re existentially starving](https://neilthanedar.com/youre-not-burnt-out-youre-existentially-starving/) - A compelling perspective on burnout reframed as a deeper existential void rather than surface-level fatigue. [Comments](https://news.ycombinator.com/item?id=46346958)

## Security and Privacy

* [FSF Says Nintendo's New DRM Allows Them to Remotely Render User's Device 'Permanently Unusuable'](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-users-device-permanently-unusuable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns raised about Nintendo's DRM empowering the company for potentially draconian remote control over user consoles. [Comments](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-users-device-permanently-unusuable?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How I protect my forgejo instance from AI Web Crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html) - Practical advice on safeguarding self-hosted systems from automated AI data mining. [Comments](https://lobste.rs/s/r5hdwa/how_i_protect_my_forgejo_instance_from_ai)

## Science and Exploration

* [The Secret Life of Moles: What They're Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&from=rss) - An intriguing dive into the misunderstood subterranean world of moles. [Comments](https://soylentnews.org/article.pl?sid=25/12/20/1428203&from=rss)

* [Bell Labs 'Unix' Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A tech archaeological achievement preserving vital UNIX history. [Comments](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-12-21, 21:34:00](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Confused&apos; Waymos Stopped in Intersections During San Francisco Power Outage](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 21:07:01](https://news.ycombinator.com/item?id=46348455) - [The gift card accountability sink](https://www.bitsaboutmoney.com/archive/gift-card-accountability-sink/)
* [2025-12-21, 20:55:15](https://news.ycombinator.com/item?id=46348329) - [A Guide to Local Coding Models](https://www.aiforswes.com/p/you-dont-need-to-spend-100mo-on-claude)
* [2025-12-21, 20:53:34](https://news.ycombinator.com/item?id=46348318) - [More on whether useful quantum computing is \&quot;imminent\&quot;](https://scottaaronson.blog/?p=9425)
* [2025-12-21, 20:34:00](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Gamers Hate AI? Indie Game Awards Disqualifies &apos;Clair Obscur&apos; Over GenAI Usage](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 20:05:09](https://lobste.rs/s/obiiim/thirteen_years_rust_birth_rue) - [Thirteen years of Rust and the birth of Rue](https://steveklabnik.com/writing/thirteen-years-of-rust-and-the-birth-of-rue/)
* [2025-12-21, 19:34:00](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Package Forge: The Lesser Known Snap/Flatpak Alternative Without Distro Lock-In](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 18:43:20](https://news.ycombinator.com/item?id=46347108) - [I can&apos;t upgrade to Windows 11, now leave me alone](https://idiallo.com/byte-size/cant-update-to-windows-11-leave-me-alone)
* [2025-12-21, 18:39:46](https://news.ycombinator.com/item?id=46347080) - [Mullvad VPN: \&quot;This is a Chat Control 3.0 attempt.\&quot;](https://mastodon.online/@mullvadnet/115742530333573065)
* [2025-12-21, 18:36:20](https://lobste.rs/s/lyykk0/dumbphone_journey_eight_month_update) - [dumbphone journey -- eight month update](https://blog.frog.equipment/dumbphone-journey-eight-month-update)
* [2025-12-21, 18:34:00](https://news.slashdot.org/story/25/12/21/1724209/inaugural-hour-of-ai-event-includes-minecraft-microsoft-google-and-131-million-k-12-schoolkids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Inaugural &apos;Hour of AI&apos; Event Includes Minecraft, Microsoft, Google and 13.1 Million K-12 Schoolkids](https://news.slashdot.org/story/25/12/21/1724209/inaugural-hour-of-ai-event-includes-minecraft-microsoft-google-and-131-million-k-12-schoolkids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 18:28:56](https://news.ycombinator.com/item?id=46346958) - [You’re not burnt out, you’re existentially starving](https://neilthanedar.com/youre-not-burnt-out-youre-existentially-starving/)
* [2025-12-21, 18:26:36](https://lobste.rs/s/fvvnl4/what_s_new_python_3_15) - [What’s new in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html)
* [2025-12-21, 18:09:52](https://news.ycombinator.com/item?id=46346796) - [Logging Sucks](https://loggingsucks.com/)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 17:34:00](https://it.slashdot.org/story/25/12/21/0610253/will-work-change-over-the-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Work Change Over the Next 20 Years?](https://it.slashdot.org/story/25/12/21/0610253/will-work-change-over-the-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 17:29:25](https://lobste.rs/s/qoqfwz/inverse_parentheses) - [Inverse parentheses](https://kellett.im/a/inverse-parentheses)
* [2025-12-21, 17:24:22](https://lobste.rs/s/csce7j/elf_crimes_program_interpreter_fun) - [ELF Crimes: Program Interpreter Fun](https://nytpu.com/gemlog/2025-12-21)
* [2025-12-21, 17:21:05](https://news.ycombinator.com/item?id=46346391) - [Get an AI code review in 10 seconds](https://oldmanrahul.com/2025/12/19/ai-code-review-trick/)
* [2025-12-21, 16:57:57](https://news.ycombinator.com/item?id=46346214) - [Autoland Saves King Air, Everyone Reported Safe](https://avbrief.com/autoland-saves-king-air-everyone-reported-safe/)
* [2025-12-21, 16:56:57](https://lobste.rs/s/nefrtj/arin_ipv4_misissue_incident) - [ARIN IPv4 misissue incident](https://www.arin.net/announcements/20251212/)
* [2025-12-21, 16:34:00](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-users-device-permanently-unusuable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Says Nintendo&apos;s New DRM Allows Them to Remotely Render User&apos;s Device &apos;Permanently Unusuable&apos;](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-users-device-permanently-unusuable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 16:30:09](https://news.ycombinator.com/item?id=46345975) - [ELF Crimes: Program Interpreter Fun](https://nytpu.com/gemlog/2025-12-21)
* [2025-12-21, 16:21:04](https://news.ycombinator.com/item?id=46345897) - [Show HN: Books mentioned on Hacker News in 2025](https://hackernews-readings-613604506318.us-west1.run.app)
* [2025-12-21, 16:04:05](https://news.ycombinator.com/item?id=46345745) - [Show HN: WalletWallet – create Apple passes from anything](https://walletwallet.alen.ro/)
* [2025-12-21, 15:54:45](https://lobste.rs/s/crvxnv/computational_complexity_new_york_times) - [Computational complexity of New York Times games](https://www.arxiv.org/pdf/2509.10846)
* [2025-12-21, 15:34:00](https://news.slashdot.org/story/25/12/21/075239/trump-admin-to-hire-1000-for-new-tech-force-to-build-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin to Hire 1,000 for New &apos;Tech Force&apos; to Build AI Infrastructure](https://news.slashdot.org/story/25/12/21/075239/trump-admin-to-hire-1000-for-new-tech-force-to-build-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 15:32:48](https://lobste.rs/s/vvsnhj/exploring_speculative_jit_compilation) - [Exploring Speculative JIT Compilation for Emacs Lisp with Java](https://kyo.iroiro.party/en/posts/juicemacs-exploring-jit-for-elisp/)
* [2025-12-21, 15:29:31](https://news.ycombinator.com/item?id=46345523) - [E.W.Dijkstra Archive](https://www.cs.utexas.edu/~EWD/welcome.html)
* [2025-12-21, 15:27:36](https://news.ycombinator.com/item?id=46345506) - [CO2 batteries that store grid energy take off globally](https://spectrum.ieee.org/co2-battery-energy-storage)
* [2025-12-21, 15:19:41](https://news.ycombinator.com/item?id=46345444) - [ARIN Public Incident Report – 4.10 Misissuance Error](https://www.arin.net/announcements/20251212/)
* [2025-12-21, 15:06:46](https://news.ycombinator.com/item?id=46345333) - [Structured outputs create false confidence](https://boundaryml.com/blog/structured-outputs-create-false-confidence)
* [2025-12-21, 14:59:24](https://lobste.rs/s/rqub7y/you_can_t_opt_out_accessibility) - [You Can&apos;t Opt-Out of Accessibility](https://vale.rocks/posts/accessibility-importance)
* [2025-12-21, 14:45:15](https://lobste.rs/s/r5hdwa/how_i_protect_my_forgejo_instance_from_ai) - [How I protect my forgejo instance from AI Web Crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html)
* [2025-12-21, 14:35:29](https://news.ycombinator.com/item?id=46345125) - [Three Ways to Solve Problems](https://andreasfragner.com/writing/three-ways-to-solve-problems)
* [2025-12-21, 14:06:02](https://lobste.rs/s/rgpalc/atomic_time_scale_at_nist_boulder_has) - [The atomic time scale at NIST Boulder has failed](https://journa.host/@w7voa/115754351058263109)
* [2025-12-21, 13:34:16](https://lobste.rs/s/oey5qc/web_html_things_avoid_2017) - [Web/HTML things to avoid (2017)](https://www.catb.org/~esr/html-hell.html)
* [2025-12-21, 13:15:28](https://news.ycombinator.com/item?id=46344616) - [Show HN: RenderCV – Open-source CV/resume generator, YAML to PDF](https://github.com/rendercv/rendercv)
* [2025-12-21, 12:57:44](https://news.ycombinator.com/item?id=46344514) - [Coarse Is Better](https://borretti.me/article/coarse-is-better)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 12:34:00](https://entertainment.slashdot.org/story/25/12/21/0510249/while-releasing-avatar-3-james-cameron-questions-the-future-of-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [While Releasing &apos;Avatar 3&apos;, James Cameron Questions the Future of Movies ](https://entertainment.slashdot.org/story/25/12/21/0510249/while-releasing-avatar-3-james-cameron-questions-the-future-of-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 12:33:11](https://news.ycombinator.com/item?id=46344381) - [Show HN: Shittp – Volatile Dotfiles over SSH](https://github.com/FOBshippingpoint/shittp)
* [2025-12-21, 11:53:26](https://lobste.rs/s/ascmbo/inner_platform_effect_2006) - [The Inner-Platform Effect (2006)](https://thedailywtf.com/articles/The_Inner-Platform_Effect)
* [2025-12-21, 11:51:25](https://lobste.rs/s/yyury2/mnemonics_for_hidden_controls_win32) - [Mnemonics for hidden controls in Win32](https://www.abareplace.com/blog/hidden_mnemonics/)
* [2025-12-21, 11:22:16](https://lobste.rs/s/df96zx/unix_v4_tape_running_simh_pdp11_emu_on_irix) - [The \&quot;UNIX v4 tape\&quot; running in simh PDP11 emu on IRIX](https://oldbytes.space/@flexion/115752573933914452)
* [2025-12-21, 11:21:01](https://news.ycombinator.com/item?id=46344022) - [New mathematical framework reshapes debate over simulation hypothesis](https://www.santafe.edu/news-center/news/new-mathematical-framework-reshapes-debate-over-simulation-hypothesis)
* [2025-12-21, 10:48:57](https://lobste.rs/s/s8kode/tag_proposal_decentralization) - [Tag proposal: decentralization](https://lobste.rs/s/s8kode/tag_proposal_decentralization)
* [2025-12-21, 10:38:30](https://lobste.rs/s/xzxetz/polyproto_refreshingly_simple) - [polyproto: A refreshingly simple decentralised, federated protocol](https://polyproto.org/)
* [2025-12-21, 09:13:23](https://lobste.rs/s/gsndus/task_injection_exploiting_agency) - [Task Injection – Exploiting agency of autonomous AI agents](https://bughunters.google.com/blog/4823857172971520/task-injection-exploiting-agency-of-autonomous-ai-agents?)
* [2025-12-21, 09:13:17](https://lobste.rs/s/wlyjsj/text_similarity_search_via_normalized) - [Text similarity search via normalized compression distance](https://discourse.haskell.org/t/vibe-coding-text-similarity-search-via-normalized-compression-distance/13440)
* [2025-12-21, 08:34:00](https://it.slashdot.org/story/25/12/20/0512216/is-americas-tech-industry-already-facing-a-recession?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is America&apos;s Tech Industry Already Facing a Recession?](https://it.slashdot.org/story/25/12/20/0512216/is-americas-tech-industry-already-facing-a-recession?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 07:06:48](https://news.ycombinator.com/item?id=46342859) - [Ruby website redesigned](https://www.ruby-lang.org/en/)
* [2025-12-21, 05:34:00](https://developers.slashdot.org/story/25/12/21/0341243/rusts-vision-doc-makes-recommendations-to-help-keep-rust-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust&apos;s &apos;Vision Doc&apos; Makes  Recommendations to Help Keep Rust Growing](https://developers.slashdot.org/story/25/12/21/0341243/rusts-vision-doc-makes-recommendations-to-help-keep-rust-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 05:21:42](https://news.ycombinator.com/item?id=46342447) - [Indoor tanning makes youthful skin much older on a genetic level](https://www.ucsf.edu/news/2025/12/431206/indoor-tanning-makes-youthful-skin-much-older-genetic-level)
* [2025-12-21, 05:12:03](https://news.ycombinator.com/item?id=46342412) - [Waymo halts service during S.F. blackout after causing traffic jams](https://missionlocal.org/2025/12/sf-waymo-halts-service-blackout/)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 04:09:23](https://lobste.rs/s/wuvuhk/texas_instruments_cc_40_invades) - [The Texas Instruments CC-40 invades Gopherspace (plus TI-74 BASICALC)](http://oldvcr.blogspot.com/2025/12/the-texas-instruments-cc-40-invades.html)
* [2025-12-21, 04:06:36](https://news.ycombinator.com/item?id=46342166) - [Measuring AI Ability to Complete Long Tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
* [2025-12-21, 03:26:39](https://lobste.rs/s/wrcgvd/romforth_ultra_portable_small_baremetal) - [romforth: Ultra Portable, Small, Baremetal Forth for various processors](https://github.com/romforth/romforth)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-21, 02:02:00](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bell Labs &apos;Unix&apos; Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 00:41:14](https://lobste.rs/s/gs1qkp/go_feature_modernized_go_fix) - [Go feature: Modernized go fix](https://antonz.org/accepted/modernized-go-fix/)
* [2025-12-20, 23:38:00](https://developers.slashdot.org/story/25/12/20/2335253/does-ai-really-make-coders-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does AI Really Make Coders Faster?](https://developers.slashdot.org/story/25/12/20/2335253/does-ai-really-make-coders-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 23:32:15](https://lobste.rs/s/tilcty/i_spent_week_without_ipv4_understand_ipv6) - [I spent a week without IPv4 to understand IPv6 transition mechanisms](https://www.apalrd.net/posts/2023/network_ipv6/)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 21:34:00](https://tech.slashdot.org/story/25/12/20/2059205/parrot-os-switches-to-kde-plasma-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Parrot OS Switches to KDE Plasma Desktop](https://tech.slashdot.org/story/25/12/20/2059205/parrot-os-switches-to-kde-plasma-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 21:17:47](https://lobste.rs/s/ikae1r/backing_up_spotify) - [Backing up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 21:00:05](https://news.ycombinator.com/item?id=46339600) - [Show HN: Jmail – Google Suite for Epstein files](https://www.jmail.world)
* [2025-12-20, 20:34:00](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Executive Says Their Camera Helped Find Shooting Suspect, Addresses Privacy Concerns](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 19:36:16](https://lobste.rs/s/8rpa2g/ruby_s_website_got_overhaul) - [Ruby&apos;s website got an overhaul](https://www.ruby-lang.org/en/)
* [2025-12-20, 19:34:00](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military Satellites Now Maneuver, Watch Each Other, and Monitor Signals and Data](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 06:19:32](https://news.ycombinator.com/item?id=46309463) - [FWS – pip-installable embedded process supervisor with PTY/pipe/dtach back ends](https://news.ycombinator.com/item?id=46309463)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
