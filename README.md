# [News Summary](https://kherrick.github.io/news-summary/)

## Technological and Scientific Inventions

* [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - A breakthrough by MIT chemists who succeeded in synthesizing a long sought after anti-cancer compound.

* [Google Launches CO2 Battery Plants for Long-Duration Storage of Renewable Energy](https://hardware.slashdot.org/story/25/12/21/2337215/google-launches-co2-battery-plants-for-long-duration-storage-of-renewable-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An innovative energy solution by Google using CO2 batteries for renewable energy storage.

* [Bell Labs 'Unix' Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A historical moment for tech enthusiasts as the 1974 Unix tape from Bell Labs is archived.

* [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - The updated version of Ventoy adds Btrfs experimental support, expanding its scope for rapid bootable device creation.

## Cybersecurity and Privacy

* [In 2025 Scammers Have Stolen $835M from Americans Using Fake Customer Service Numbers](https://yro.slashdot.org/story/25/12/22/0524233/in-2025-scammers-have-stolen-835m-from-americans-using-fake-customer-service-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A report highlights the widespread scamming issue related to fraudulent customer support numbers.

* [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - A significant lapse in security measures led to prolonged exposure of internal systems at Home Depot.

* [ARIN IPv4 misissue incident](https://www.arin.net/announcements/20251212/) - A mix-up in assigning IPv4 addresses brings attention to administrative challenges in internet governance.

## Programming and Software Innovations

* [typed-arrow: First-class compile‑time Arrow schemas for Rust](https://github.com/tonbo-io/typed-arrow) - A tool introducing advanced schema management for Rust developers.

* [Build Android apps using Rust and Iced](https://github.com/ibaryshnikov/android-iced-example) - A demonstration of the versatility of Rust with Iced for Android app development.

* [Rust's 'Vision Doc' Makes  Recommendations to Help Keep Rust Growing](https://developers.slashdot.org/story/25/12/21/0341243/rusts-vision-doc-makes-recommendations-to-help-keep-rust-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insights into Rust's development direction as shared in its latest vision document.

## Cultural and Entertainment Updates

* [Disney Imagineering Debuts Next-Generation Robotic Character, Olaf](https://disneyparksblog.com/disney-experiences/robotic-olaf-marks-new-era-of-disney-innovation/) - Disney unveils new robotics technology featuring Olaf, advancing interactive character design.

* [While Releasing 'Avatar 3', James Cameron Questions the Future of Movies](https://entertainment.slashdot.org/story/25/12/21/0510249/while-releasing-avatar-3-james-cameron-questions-the-future-of-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A reflection on cinema's direction, tied to the release of 'Avatar 3'.

* [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - Cultural treasures entering the public domain, marking a spirited celebration for creators and enthusiasts alike.

## AI and its Disruptions

* [Do Gamers Hate AI? Indie Game Awards Disqualifies 'Clair Obscur' Over GenAI Usage](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy arises as GenAI inputs disqualify an award contender in the gaming community.

* [ONNX Runtime and CoreML May Silently Convert Your Model to FP16](https://ym2132.github.io/ONNX_MLProgram_NN_exploration) - A deep dive into potential issues with AI runtime tools and their handling of data models.

* [Evaluating chain-of-thought monitorability](https://openai.com/index/evaluating-chain-of-thought-monitorability/) - OpenAI explores accountability and visibility in the thought process of AI systems.

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

* [2025-12-22, 06:34:00](https://yro.slashdot.org/story/25/12/22/0524233/in-2025-scammers-have-stolen-835m-from-americans-using-fake-customer-service-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In 2025 Scammers Have Stolen $835M from Americans Using Fake Customer Service Numbers](https://yro.slashdot.org/story/25/12/22/0524233/in-2025-scammers-have-stolen-835m-from-americans-using-fake-customer-service-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 05:19:40](https://lobste.rs/s/dodxvz/typed_arrow_first_class_compile_time) - [typed-arrow: First-class compile‑time Arrow schemas for Rust](https://github.com/tonbo-io/typed-arrow)
* [2025-12-22, 04:34:36](https://news.ycombinator.com/item?id=46351345) - [Cursed circuits #3: true mathematics](https://lcamtuf.substack.com/p/cursed-circuits-3-true-mathematics)
* [2025-12-22, 04:05:00](https://news.slashdot.org/story/25/12/22/042225/the-us-could-ban-chinese-made-drones-used-by-police-departments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The U.S. Could Ban Chinese-Made Drones Used By Police Departments](https://news.slashdot.org/story/25/12/22/042225/the-us-could-ban-chinese-made-drones-used-by-police-departments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-22, 02:14:32](https://news.ycombinator.com/item?id=46350641) - [Build Android apps using Rust and Iced](https://github.com/ibaryshnikov/android-iced-example)
* [2025-12-22, 01:43:40](https://news.ycombinator.com/item?id=46350477) - [86Box v5.3](https://86box.net/2025/12/21/86box-v5-3.html)
* [2025-12-22, 01:34:00](https://hardware.slashdot.org/story/25/12/21/2337215/google-launches-co2-battery-plants-for-long-duration-storage-of-renewable-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches CO2 Battery Plants for Long-Duration Storage of Renewable Energy](https://hardware.slashdot.org/story/25/12/21/2337215/google-launches-co2-battery-plants-for-long-duration-storage-of-renewable-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 00:27:04](https://news.ycombinator.com/item?id=46350075) - [ONNX Runtime and CoreML May Silently Convert Your Model to FP16](https://ym2132.github.io/ONNX_MLProgram_NN_exploration)
* [2025-12-22, 00:08:40](https://lobste.rs/s/svqpuu/debian_s_git_transition) - [Debian’s git transition](https://diziet.dreamwidth.org/20436.html)
* [2025-12-21, 22:49:30](https://lobste.rs/s/yvzvrg/qubes_os_4_3_0_has_been_released) - [Qubes OS 4.3.0 has been released](https://www.qubes-os.org/news/2025/12/21/qubes-os-4-3-0-has-been-released/)
* [2025-12-21, 22:34:00](https://entertainment.slashdot.org/story/25/12/21/2134227/are-geek-gifts-becoming-their-own-demographic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are &apos;Geek Gifts&apos; Becoming Their Own Demographic?](https://entertainment.slashdot.org/story/25/12/21/2134227/are-geek-gifts-becoming-their-own-demographic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 22:19:48](https://lobste.rs/s/rbobxh/logging_sucks_your_logs_are_lying_you) - [Logging Sucks - Your Logs Are Lying To You](https://loggingsucks.com/)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 22:06:10](https://lobste.rs/s/pbxwjt/i_program_on_subway) - [I Program on the Subway](https://www.scd31.com/posts/programming-on-the-subway)
* [2025-12-21, 21:46:20](https://news.ycombinator.com/item?id=46348847) - [Disney Imagineering Debuts Next-Generation Robotic Character, Olaf](https://disneyparksblog.com/disney-experiences/robotic-olaf-marks-new-era-of-disney-innovation/)
* [2025-12-21, 21:34:00](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Confused&apos; Waymos Stopped in Intersections During San Francisco Power Outage](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 20:56:54](https://news.ycombinator.com/item?id=46348344) - [Show HN: Rust/WASM lighting data toolkit – parses legacy formats, generates SVGs](https://eulumdat.icu)
* [2025-12-21, 20:55:15](https://news.ycombinator.com/item?id=46348329) - [A guide to local coding models](https://www.aiforswes.com/p/you-dont-need-to-spend-100mo-on-claude)
* [2025-12-21, 20:34:00](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Gamers Hate AI? Indie Game Awards Disqualifies &apos;Clair Obscur&apos; Over GenAI Usage](https://games.slashdot.org/story/25/12/21/1945258/do-gamers-hate-ai-indie-game-awards-disqualifies-clair-obscur-over-genai-usage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 20:05:09](https://lobste.rs/s/obiiim/thirteen_years_rust_birth_rue) - [Thirteen years of Rust and the birth of Rue](https://steveklabnik.com/writing/thirteen-years-of-rust-and-the-birth-of-rue/)
* [2025-12-21, 19:34:00](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Package Forge: The Lesser Known Snap/Flatpak Alternative Without Distro Lock-In](https://linux.slashdot.org/story/25/12/21/199237/package-forge-the-lesser-known-snapflatpak-alternative-without-distro-lock-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 18:43:20](https://news.ycombinator.com/item?id=46347108) - [I can&apos;t upgrade to Windows 11, now leave me alone](https://idiallo.com/byte-size/cant-update-to-windows-11-leave-me-alone)
* [2025-12-21, 18:39:46](https://news.ycombinator.com/item?id=46347080) - [The Going Dark initiative or ProtectEU is a Chat Control 3.0 attempt](https://mastodon.online/@mullvadnet/115742530333573065)
* [2025-12-21, 18:36:20](https://lobste.rs/s/lyykk0/dumbphone_journey_eight_month_update) - [dumbphone journey -- eight month update](https://blog.frog.equipment/dumbphone-journey-eight-month-update)
* [2025-12-21, 18:34:00](https://news.slashdot.org/story/25/12/21/1724209/inaugural-hour-of-ai-event-includes-minecraft-microsoft-google-and-131-million-k-12-schoolkids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Inaugural &apos;Hour of AI&apos; Event Includes Minecraft, Microsoft, Google and 13.1 Million K-12 Schoolkids](https://news.slashdot.org/story/25/12/21/1724209/inaugural-hour-of-ai-event-includes-minecraft-microsoft-google-and-131-million-k-12-schoolkids?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 18:28:56](https://news.ycombinator.com/item?id=46346958) - [You’re not burnt out, you’re existentially starving](https://neilthanedar.com/youre-not-burnt-out-youre-existentially-starving/)
* [2025-12-21, 18:26:36](https://lobste.rs/s/fvvnl4/what_s_new_python_3_15) - [What’s new in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 17:34:00](https://it.slashdot.org/story/25/12/21/0610253/will-work-change-over-the-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Work Change Over the Next 20 Years?](https://it.slashdot.org/story/25/12/21/0610253/will-work-change-over-the-next-20-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 17:29:25](https://lobste.rs/s/qoqfwz/inverse_parentheses) - [Inverse parentheses](https://kellett.im/a/inverse-parentheses)
* [2025-12-21, 17:24:22](https://lobste.rs/s/csce7j/elf_crimes_program_interpreter_fun) - [ELF Crimes: Program Interpreter Fun](https://nytpu.com/gemlog/2025-12-21)
* [2025-12-21, 16:57:57](https://news.ycombinator.com/item?id=46346214) - [Autoland saves King Air, everyone reported safe](https://avbrief.com/autoland-saves-king-air-everyone-reported-safe/)
* [2025-12-21, 16:56:57](https://lobste.rs/s/nefrtj/arin_ipv4_misissue_incident) - [ARIN IPv4 misissue incident](https://www.arin.net/announcements/20251212/)
* [2025-12-21, 16:34:00](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-user-devices-permanently-unusable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Says Nintendo&apos;s New DRM Allows Them to Remotely Render User Devices &apos;Permanently Unusable&apos;](https://games.slashdot.org/story/25/12/21/0020228/fsf-says-nintendos-new-drm-allows-them-to-remotely-render-user-devices-permanently-unusable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 16:21:04](https://news.ycombinator.com/item?id=46345897) - [Show HN: Books mentioned on Hacker News in 2025](https://hackernews-readings-613604506318.us-west1.run.app)
* [2025-12-21, 16:04:05](https://news.ycombinator.com/item?id=46345745) - [Show HN: WalletWallet – create Apple passes from anything](https://walletwallet.alen.ro/)
* [2025-12-21, 15:34:00](https://news.slashdot.org/story/25/12/21/075239/trump-admin-to-hire-1000-for-new-tech-force-to-build-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin to Hire 1,000 for New &apos;Tech Force&apos; to Build AI Infrastructure](https://news.slashdot.org/story/25/12/21/075239/trump-admin-to-hire-1000-for-new-tech-force-to-build-ai-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 15:32:48](https://lobste.rs/s/vvsnhj/exploring_speculative_jit_compilation) - [Exploring Speculative JIT Compilation for Emacs Lisp with Java](https://kyo.iroiro.party/en/posts/juicemacs-exploring-jit-for-elisp/)
* [2025-12-21, 15:29:31](https://news.ycombinator.com/item?id=46345523) - [E.W.Dijkstra Archive](https://www.cs.utexas.edu/~EWD/welcome.html)
* [2025-12-21, 15:27:36](https://news.ycombinator.com/item?id=46345506) - [CO2 batteries that store grid energy take off globally](https://spectrum.ieee.org/co2-battery-energy-storage)
* [2025-12-21, 15:06:46](https://news.ycombinator.com/item?id=46345333) - [Structured outputs create false confidence](https://boundaryml.com/blog/structured-outputs-create-false-confidence)
* [2025-12-21, 14:59:24](https://lobste.rs/s/rqub7y/you_can_t_opt_out_accessibility) - [You Can&apos;t Opt-Out of Accessibility](https://vale.rocks/posts/accessibility-importance)
* [2025-12-21, 14:45:15](https://lobste.rs/s/r5hdwa/how_i_protect_my_forgejo_instance_from_ai) - [How I protect my forgejo instance from AI Web Crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html)
* [2025-12-21, 14:06:02](https://lobste.rs/s/rgpalc/atomic_time_scale_at_nist_boulder_has) - [The atomic time scale at NIST Boulder has failed](https://journa.host/@w7voa/115754351058263109)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 12:38:25](https://news.ycombinator.com/item?id=46344412) - [Luke Howard’s essay on the modification of clouds (1865)](https://publicdomainreview.org/collection/essay-on-the-modification-of-clouds/)
* [2025-12-21, 12:34:00](https://entertainment.slashdot.org/story/25/12/21/0510249/while-releasing-avatar-3-james-cameron-questions-the-future-of-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [While Releasing &apos;Avatar 3&apos;, James Cameron Questions the Future of Movies ](https://entertainment.slashdot.org/story/25/12/21/0510249/while-releasing-avatar-3-james-cameron-questions-the-future-of-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 11:53:26](https://lobste.rs/s/ascmbo/inner_platform_effect_2006) - [The Inner-Platform Effect (2006)](https://thedailywtf.com/articles/The_Inner-Platform_Effect)
* [2025-12-21, 11:51:25](https://lobste.rs/s/yyury2/mnemonics_for_hidden_controls_win32) - [Mnemonics for hidden controls in Win32](https://www.abareplace.com/blog/hidden_mnemonics/)
* [2025-12-21, 11:22:16](https://lobste.rs/s/df96zx/unix_v4_tape_running_simh_pdp11_emu_on_irix) - [The \&quot;UNIX v4 tape\&quot; running in simh PDP11 emu on IRIX](https://oldbytes.space/@flexion/115752573933914452)
* [2025-12-21, 10:48:57](https://lobste.rs/s/s8kode/tag_proposal_decentralization) - [Tag proposal: decentralization](https://lobste.rs/s/s8kode/tag_proposal_decentralization)
* [2025-12-21, 10:38:30](https://lobste.rs/s/xzxetz/polyproto_refreshingly_simple) - [polyproto: A refreshingly simple decentralised, federated protocol](https://polyproto.org/)
* [2025-12-21, 08:34:00](https://it.slashdot.org/story/25/12/20/0512216/is-americas-tech-industry-already-facing-a-recession?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is America&apos;s Tech Industry Already Facing a Recession?](https://it.slashdot.org/story/25/12/20/0512216/is-americas-tech-industry-already-facing-a-recession?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 07:06:48](https://news.ycombinator.com/item?id=46342859) - [Ruby website redesigned](https://www.ruby-lang.org/en/)
* [2025-12-21, 05:34:00](https://developers.slashdot.org/story/25/12/21/0341243/rusts-vision-doc-makes-recommendations-to-help-keep-rust-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust&apos;s &apos;Vision Doc&apos; Makes  Recommendations to Help Keep Rust Growing](https://developers.slashdot.org/story/25/12/21/0341243/rusts-vision-doc-makes-recommendations-to-help-keep-rust-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 05:21:42](https://news.ycombinator.com/item?id=46342447) - [Indoor tanning makes youthful skin much older on a genetic level](https://www.ucsf.edu/news/2025/12/431206/indoor-tanning-makes-youthful-skin-much-older-genetic-level)
* [2025-12-21, 05:12:03](https://news.ycombinator.com/item?id=46342412) - [Waymo halts service during S.F. blackout after causing traffic jams](https://missionlocal.org/2025/12/sf-waymo-halts-service-blackout/)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 04:09:23](https://lobste.rs/s/wuvuhk/texas_instruments_cc_40_invades) - [The Texas Instruments CC-40 invades Gopherspace (plus TI-74 BASICALC)](http://oldvcr.blogspot.com/2025/12/the-texas-instruments-cc-40-invades.html)
* [2025-12-21, 03:26:39](https://lobste.rs/s/wrcgvd/romforth_ultra_portable_small_baremetal) - [romforth: Ultra Portable, Small, Baremetal Forth for various processors](https://github.com/romforth/romforth)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-21, 02:02:00](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bell Labs &apos;Unix&apos; Tape from 1974 Successfully Dumped to a Tarball](https://tech.slashdot.org/story/25/12/21/020235/bell-labs-unix-tape-from-1974-successfully-dumped-to-a-tarball?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 23:32:15](https://lobste.rs/s/tilcty/i_spent_week_without_ipv4_understand_ipv6) - [I spent a week without IPv4 to understand IPv6 transition mechanisms](https://www.apalrd.net/posts/2023/network_ipv6/)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 21:17:47](https://lobste.rs/s/ikae1r/backing_up_spotify) - [Backing up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 19:36:16](https://lobste.rs/s/8rpa2g/ruby_s_website_got_overhaul) - [Ruby&apos;s website got an overhaul](https://www.ruby-lang.org/en/)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 21:42:55](https://news.ycombinator.com/item?id=46331292) - [Kernighan&apos;s Lever](https://linusakesson.net/programming/kernighans-lever/index.php)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 16:08:39](https://news.ycombinator.com/item?id=46327337) - [Exploring Speculative JIT Compilation for Emacs Lisp with Java](https://kyo.iroiro.party/en/posts/juicemacs-exploring-jit-for-elisp/)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 13:16:57](https://news.ycombinator.com/item?id=46325475) - [Webb observes exoplanet that may have an exotic helium and carbon atmosphere](https://science.nasa.gov/missions/webb/nasas-webb-observes-exoplanet-whose-composition-defies-explanation/)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 05:49:33](https://news.ycombinator.com/item?id=46322631) - [Evaluating chain-of-thought monitorability](https://openai.com/index/evaluating-chain-of-thought-monitorability/)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 17:49:10](https://news.ycombinator.com/item?id=46316050) - [Deliberate Internet Shutdowns](https://www.schneier.com/blog/archives/2025/12/deliberate-internet-shutdowns.html)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
