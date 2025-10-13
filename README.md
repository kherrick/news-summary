# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Issues

* [Git Developers Talk About Potentially Releasing Git 3.0 By The End Of Next Year](https://www.phoronix.com/news/Git-3.0-Release-Talk-2026) ([comments](https://lobste.rs/s/ia6vhh/git_developers_talk_about_potentially))

* [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code) ([comments](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability))

* [JIT: so you want to be faster than an interpreter on modern CPUs…](https://www.pinaraf.info/2025/10/jit-so-you-want-to-be-faster-than-an-interpreter-on-modern-cpus/) ([comments](https://lobste.rs/s/7q2c0r/jit_so_you_want_be_faster_than_interpreter))

* [Find where a specific object was allocated in JavaScript with DevTools](http://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/) ([comments](https://lobste.rs/s/zoapek/find_where_specific_object_was_allocated))

* [Debugging a Go runtime crash: the one-instruction window](https://www.nsrip.com/posts/oneinstruction.html) ([comments](https://lobste.rs/s/goaosf/debugging_go_runtime_crash_one))

## Energy and Environment

* [California Will Stop Using Coal as a Power Source Next Month](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Why GPS Fails In Cities. And What Researchers Think Could Fix It](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Society and Ethics

* [Russia Accused of Severing Ukrainian Nuclear Power Plant's Link, as Energy Remains a 'Key Battleground'](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [For centuries massive meals amazed visitors to Korea (2019)](https://www.atlasobscura.com/articles/history-of-korean-food) ([comments](https://news.ycombinator.com/item?id=45563900))

## Tributes and Memorials

* [John Searle has died](https://www.nytimes.com/2025/10/12/books/john-searle-dead.html) ([comments](https://news.ycombinator.com/item?id=45563627))

## Privacy and Security

* [NSA and IETF: Can an attacker simply purchase standardization of weakened cryptography?](https://blog.cr.yp.to/20251004-weakened.html) ([comments](https://lobste.rs/s/ngjqsm/nsa_ietf_can_attacker_simply_purchase))

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

* [2025-10-13, 06:37:00](https://lobste.rs/s/ia6vhh/git_developers_talk_about_potentially) - [Git Developers Talk About Potentially Releasing Git 3.0 By The End Of Next Year](https://www.phoronix.com/news/Git-3.0-Release-Talk-2026)
* [2025-10-13, 06:32:41](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability) - [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code)
* [2025-10-13, 06:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss) - [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss)
* [2025-10-13, 05:51:08](https://lobste.rs/s/7q2c0r/jit_so_you_want_be_faster_than_interpreter) - [JIT: so you want to be faster than an interpreter on modern CPUs…](https://www.pinaraf.info/2025/10/jit-so-you-want-to-be-faster-than-an-interpreter-on-modern-cpus/)
* [2025-10-13, 05:28:58](https://lobste.rs/s/zoapek/find_where_specific_object_was_allocated) - [Find where a specific object was allocated in JavaScript with DevTools](http://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/)
* [2025-10-13, 04:34:00](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Will Stop Using Coal as a Power Source Next Month](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 04:14:29](https://news.ycombinator.com/item?id=45564619) - [Fastmail Desktop App](https://www.fastmail.com/blog/desktop-app/)
* [2025-10-13, 04:08:32](https://lobste.rs/s/goaosf/debugging_go_runtime_crash_one) - [Debugging a Go runtime crash: the one-instruction window](https://www.nsrip.com/posts/oneinstruction.html)
* [2025-10-13, 04:06:29](https://lobste.rs/s/8dsiow/wireguard_fpga) - [Wireguard FPGA](https://github.com/chili-chips-ba/wireguard-fpga)
* [2025-10-13, 02:40:00](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why GPS Fails In Cities. And What Researchers Think Could Fix It](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 02:39:25](https://news.ycombinator.com/item?id=45564196) - [Countering Trusting Trust Through Diverse Double-Compiling (DDC)](https://dwheeler.com/trusting-trust/)
* [2025-10-13, 01:46:18](https://news.ycombinator.com/item?id=45563900) - [For centuries massive meals amazed visitors to Korea (2019)](https://www.atlasobscura.com/articles/history-of-korean-food)
* [2025-10-13, 01:40:00](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Accused of Severing Ukrainian Nuclear Power Plant&apos;s Link, as Energy Remains a &apos;Key Battleground&apos;](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 01:39:00](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss) - [Using a Litter Box to Determine a Cat&apos;s Health](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss)
* [2025-10-13, 00:57:49](https://news.ycombinator.com/item?id=45563627) - [John Searle has died](https://www.nytimes.com/2025/10/12/books/john-searle-dead.html)
* [2025-10-13, 00:07:56](https://lobste.rs/s/ngjqsm/nsa_ietf_can_attacker_simply_purchase) - [NSA and IETF: Can an attacker simply purchase standardization of weakened cryptography?](https://blog.cr.yp.to/20251004-weakened.html)
* [2025-10-12, 23:46:55](https://news.ycombinator.com/item?id=45563161) - [Novelty Automation](https://www.novelty-automation.com/)
* [2025-10-12, 23:43:00](https://slashdot.org/story/25/10/12/2340230/amd-amps-up-chip-war---but-nvidias-still-leading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Amps Up Chip War - But Nvidia&apos;s Still Leading](https://slashdot.org/story/25/10/12/2340230/amd-amps-up-chip-war---but-nvidias-still-leading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 21:51:45](https://news.ycombinator.com/item?id=45562286) - [Free software hasn&apos;t won](https://dorotac.eu/posts/fosswon/)
* [2025-10-12, 21:44:00](https://it.slashdot.org/story/25/10/12/2016234/toxic-workplaces-are-worsening-80-of-us-workers-say-their-job-hurts-mental-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toxic Workplaces Are Worsening: 80% of U.S. Workers Say Their Job Hurts Mental Health](https://it.slashdot.org/story/25/10/12/2016234/toxic-workplaces-are-worsening-80-of-us-workers-say-their-job-hurts-mental-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 21:40:43](https://news.ycombinator.com/item?id=45562188) - [An initial investigation into WDDM on ReactOS](https://reactos.org/blogs/investigating-wddm/)
* [2025-10-12, 21:24:39](https://news.ycombinator.com/item?id=45562056) - [MAML – A new configuration language](https://maml.dev/)
* [2025-10-12, 20:59:31](https://lobste.rs/s/8jcoxk/django_introducing_django_http) - [Django: Introducing django-http-compression - Adam Johnson](https://adamj.eu/tech/2025/10/10/introducing-django-http-compression/)
* [2025-10-12, 20:55:10](https://lobste.rs/s/1zi5g0/why_2025_do_we_still_need_3rd_party_app) - [Why, in 2025, do we still need a 3rd party app to write a REST API with Django?](https://emma.has-a.blog/articles/why-do-we-need-an-external-app-for-rest.html)
* [2025-10-12, 20:50:00](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss) - [The FCC Will Allow ABC, CBS, FOX, &amp; NBC TV Stations Decide When Switch to ATSC 3.0](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss)
* [2025-10-12, 20:44:00](https://slashdot.org/story/25/10/12/206215/theres-no-ai-bubble-says-yahoo-finance-executive-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s No &apos;AI Bubble&apos;, Says Yahoo Finance Executive Editor](https://slashdot.org/story/25/10/12/206215/theres-no-ai-bubble-says-yahoo-finance-executive-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 20:41:01](https://news.ycombinator.com/item?id=45561700) - [Edge AI for Beginners](https://github.com/microsoft/edgeai-for-beginners)
* [2025-10-12, 20:38:35](https://lobste.rs/s/kiy2yb/building_multi_step_login_forms_work_well) - [Building multi-step login forms that work well with password managers](https://evertpot.com/multi-step-login-forms-for-password-managers/)
* [2025-10-12, 20:37:16](https://news.ycombinator.com/item?id=45561672) - [Emacs agent-shell (powered by ACP)](https://xenodium.com/introducing-agent-shell)
* [2025-10-12, 20:11:37](https://lobste.rs/s/kz6gvo/abstraction_not_syntax) - [Abstraction, not syntax](https://ruudvanasseldonk.com/2025/abstraction-not-syntax)
* [2025-10-12, 20:09:14](https://news.ycombinator.com/item?id=45561428) - [Ask HN: What are you working on? (October 2025)](https://news.ycombinator.com/item?id=45561428)
* [2025-10-12, 19:45:32](https://lobste.rs/s/co9e3q/c2bf_c_brainfuck_compiler_written_rust) - [C2BF: A C-to-Brainfuck compiler written in Rust](https://iacgm.pages.dev/posts/c2bf/)
* [2025-10-12, 19:44:00](https://hardware.slashdot.org/story/25/10/12/1942209/amazon-smart-displays-are-now-being-bombarded-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Smart Displays Are Now Being Bombarded With Ads](https://hardware.slashdot.org/story/25/10/12/1942209/amazon-smart-displays-are-now-being-bombarded-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 19:34:49](https://lobste.rs/s/0arodz/next_js_is_not_good_fit_for_vibe) - [Next.js is not a good fit for vibe engineering](https://fabianlindfors.se/blog/nextjs-vibe-engineering/)
* [2025-10-12, 19:19:38](https://news.ycombinator.com/item?id=45560974) - [Completing a BASIC language interpreter in 2025](https://nanochess.org/ecs_basic_2.html)
* [2025-10-12, 18:39:05](https://lobste.rs/s/q9clwz/using_constraint_satisfaction_optimize) - [Using Constraint Satisfaction to Optimize Item Selection for Bundles in Minecraft](https://www.robw.fyi/2025/10/12/using-constraint-satisfaction-to-optimize-item-selection-for-bundles-in-minecraft/)
* [2025-10-12, 18:31:51](https://news.ycombinator.com/item?id=45560535) - [Constraint satisfaction to optimize item selection for bundles in Minecraft](https://www.robw.fyi/2025/10/12/using-constraint-satisfaction-to-optimize-item-selection-for-bundles-in-minecraft/)
* [2025-10-12, 17:58:00](https://entertainment.slashdot.org/story/25/10/12/1756208/death-to-spotify-event-draws-interest-from-some-musicians-to-try-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Death to Spotify&apos; Event Draws Interest From Some Musicians to Try Alternatives](https://entertainment.slashdot.org/story/25/10/12/1756208/death-to-spotify-event-draws-interest-from-some-musicians-to-try-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 17:12:00](https://news.ycombinator.com/item?id=45559857) - [Wireguard FPGA](https://github.com/chili-chips-ba/wireguard-fpga)
* [2025-10-12, 17:02:09](https://news.ycombinator.com/item?id=45559767) - [A years-long Turkish alphabet bug in the Kotlin compiler](https://sam-cooper.medium.com/the-country-that-broke-kotlin-84bdd0afb237)
* [2025-10-12, 16:59:46](https://lobste.rs/s/l6yqm8/country_broke_kotlin) - [The Country That Broke Kotlin](https://sam-cooper.medium.com/the-country-that-broke-kotlin-84bdd0afb237)
* [2025-10-12, 16:34:00](https://tech.slashdot.org/story/25/10/12/0237231/three-wheeled-solar-car-maker-aptera-is-about-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three-Wheeled Solar Car Maker Aptera is About to Go Public](https://tech.slashdot.org/story/25/10/12/0237231/three-wheeled-solar-car-maker-aptera-is-about-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 16:22:42](https://lobste.rs/s/0entkb/introducing_oavif_faster_target_quality) - [Introducing oavif: faster target quality image compression](https://giannirosato.com/blog/post/oavif/)
* [2025-10-12, 16:05:00](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss) - [“Like Putting on Glasses for the First Time”—How AI Improves Earthquake Detection](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss)
* [2025-10-12, 15:34:00](https://developers.slashdot.org/story/25/10/12/0619247/ai-slop-not-this-time-ai-tools-found-50-real-bugs-in-curl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Slop? Not This Time. AI Tools Found 50 Real Bugs In cURL ](https://developers.slashdot.org/story/25/10/12/0619247/ai-slop-not-this-time-ai-tools-found-50-real-bugs-in-curl?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 14:49:50](https://news.ycombinator.com/item?id=45558611) - [Show HN: I built a simple ambient sound app with no ads or subscriptions](https://ambisounds.app/)
* [2025-10-12, 14:43:09](https://lobste.rs/s/alkdsb/fzf_0_66_0_introduces_raw_mode) - [fzf 0.66.0 introduces “--raw mode”](https://github.com/junegunn/fzf/releases/tag/v0.66.0)
* [2025-10-12, 14:34:00](https://yro.slashdot.org/story/25/10/11/0544209/california-privacy-protection-agency-targets-tractor-supplys-tricky-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California &apos;Privacy Protection Agency&apos; Targets Tractor Supply&apos;s Tricky Tracking](https://yro.slashdot.org/story/25/10/11/0544209/california-privacy-protection-agency-targets-tractor-supplys-tricky-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 14:12:34](https://lobste.rs/s/2dhvwd/i_d_like_speak_bellcore_manager) - [I&apos;d like to speak to the Bellcore ManaGeR](https://www.ninakalinina.com/notes/mgr/)
* [2025-10-12, 11:34:00](https://it.slashdot.org/story/25/10/12/0751230/cryptologist-djb-alleges-nsa-is-pushing-an-end-to-backup-algorithms-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cryptologist DJB Alleges NSA is Pushing an End to Backup Algorithms for Post-Quantum Cryptography](https://it.slashdot.org/story/25/10/12/0751230/cryptologist-djb-alleges-nsa-is-pushing-an-end-to-backup-algorithms-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 11:20:00](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss) - [Starlink Burns Up One to Two Satellites a Day](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss)
* [2025-10-12, 10:20:52](https://lobste.rs/s/uxfzzv/reason_gcc_is_not_library_2000) - [The reason GCC is not a library (2000)](https://gcc.gnu.org/legacy-ml/gcc/2000-01/msg00572.html)
* [2025-10-12, 08:33:21](https://lobste.rs/s/gocddb/switch_jujutsu_already_tutorial) - [Switch to Jujutsu already: a tutorial](https://www.stavros.io/posts/switch-to-jujutsu-already-a-tutorial/)
* [2025-10-12, 07:34:00](https://tech.slashdot.org/story/25/10/12/0532223/ferrari-announces-its-first-electric-sports-car-promising-real-engine-noises---sort-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ferrari Announces Its First Electric Sports Car, Promising Real Engine Noises - Sort Of](https://tech.slashdot.org/story/25/10/12/0532223/ferrari-announces-its-first-electric-sports-car-promising-real-engine-noises---sort-of?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 07:10:44](https://lobste.rs/s/op8abx/sharp_bilinear_filters_big_clean_pixels) - [Sharp Bilinear Filters: Big Clean Pixels for Pixel Art](https://bumbershootsoft.wordpress.com/2025/10/11/sharp-bilinear-filters-big-clean-pixels-for-pixel-art/)
* [2025-10-12, 06:37:00](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss) - [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss)
* [2025-10-12, 06:17:52](https://news.ycombinator.com/item?id=45555727) - [Three ways formally verified code can go wrong in practice](https://buttondown.com/hillelwayne/archive/three-ways-formally-verified-code-can-go-wrong-in/)
* [2025-10-12, 06:15:21](https://lobste.rs/s/saj9h2/three_ways_formally_verified_can_go_wrong) - [Three ways \&quot;formally verified\&quot; can go wrong](https://buttondown.com/hillelwayne/archive/three-ways-formally-verified-code-can-go-wrong-in/)
* [2025-10-12, 03:37:00](https://slashdot.org/story/25/10/12/0328228/in-copilot-in-excel-demo-ai-told-teacher-a-27-exam-score-is-of-no-concern?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In Copilot In Excel Demo, AI Told Teacher a 27% Exam Score Is of No Concern](https://slashdot.org/story/25/10/12/0328228/in-copilot-in-excel-demo-ai-told-teacher-a-27-exam-score-is-of-no-concern?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 02:37:00](https://science.slashdot.org/story/25/10/11/2241202/new-large-coral-reef-discovered-off-naples-containing-rare-ancient-corals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Large Coral Reef Discovered Off Naples Containing Rare Ancient Corals](https://science.slashdot.org/story/25/10/11/2241202/new-large-coral-reef-discovered-off-naples-containing-rare-ancient-corals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-11, 23:54:00](https://lobste.rs/s/iktkkz/lineageos_23_released) - [LineageOS 23 released](https://lineageos.org/Changelog-30/)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 20:52:21](https://news.ycombinator.com/item?id=45552590) - [A whirlwind introduction to dataflow graphs (2018)](https://fgiesen.wordpress.com/2018/03/05/a-whirlwind-introduction-to-dataflow-graphs/)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 15:02:50](https://lobste.rs/s/pkqgq6/vibing_non_trivial_ghostty_feature) - [Vibing a Non-Trivial Ghostty Feature](https://mitchellh.com/writing/non-trivial-vibing)
* [2025-10-11, 14:24:35](https://news.ycombinator.com/item?id=45549392) - [Show HN: Aidlab – Health Data for Devs](https://news.ycombinator.com/item?id=45549392)
* [2025-10-11, 11:44:57](https://lobste.rs/s/vulmn4/liquid_glass_is_cracked_usability) - [Liquid Glass Is Cracked, and Usability Suffers in iOS 26](https://www.nngroup.com/articles/liquid-glass/)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
* [2025-10-10, 21:14:00](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) - [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss)
* [2025-10-10, 16:31:00](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) - [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss)
* [2025-10-10, 11:47:00](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss) - [The Transistor Was Patented 75 Years Ago Today](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss)
* [2025-10-10, 11:11:00](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss) - [Nobel Prizes 2025 - Venezuelan Opposition Leader María Corina Machado Awarded Peace Prize](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss)
* [2025-10-10, 07:03:00](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss) - [Windows 7 Usage Jumps as Users Refuse to Upgrade to Windows 11 in Wake of Windows 10 End of Support](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss)
* [2025-10-10, 02:21:00](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) - [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss)
* [2025-10-09, 21:43:00](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss) - [Here&apos;s the Real Reason Endurance Sank](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss)
* [2025-10-09, 16:55:00](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss) - [Forensic Test Recovers Fingerprints From Fired Ammunition Casings Despite Intense Heat](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss)
* [2025-10-09, 15:45:49](https://news.ycombinator.com/item?id=45529331) - [3D-Printed Automatic Weather Station](https://3dpaws.comet.ucar.edu)
* [2025-10-09, 15:29:31](https://news.ycombinator.com/item?id=45529081) - [Keyboard Holders, Generation 1](https://cceckman.com/writing/keyboard-holders-gen1/)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 10:35:40](https://news.ycombinator.com/item?id=45525804) - [MicroPythonOS – An Android-like OS for microcontrollers](https://micropythonos.com)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
