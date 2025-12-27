# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Apple releases open-source model that instantly turns 2D photos into 3D views](https://github.com/apple/ml-sharp) - Apple's latest open-source contribution enables 3D visualization from 2D images, highlighting their advancements in machine learning technology. [Comments](https://news.ycombinator.com/item?id=46401539).

* [Show HN: Ez FFmpeg – Video editing in plain English](http://npmjs.com/package/ezff) - Simplify video editing tasks with this user-friendly FFmpeg tool, which translates complex processes into plain English. [Comments](https://news.ycombinator.com/item?id=46400251).

* [Taiwan's iPass Releases Floppy Disk Pre-Paid Cash Card](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A retro-inspired innovation: iPass in Taiwan makes waves with floppy disk-shaped pre-paid cards. [Comments](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Driverless Future Gains Momentum With Global Robotaxi Deployments](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Autonomous vehicles are becoming more widely adopted, with robotaxi deployments increasing across the globe. [Comments](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - Google enhances its search functionality by allowing users to analyze images and PDFs, pushing the boundaries of traditional text-based searches.

## Programming and Software Development

* [Easel Turns One! One year of building my own IDE in Clojure](https://blog.phronemophobic.com/easel-one-year.html) - A developer reflects on the challenges and successes of building an IDE in Clojure over a year. [Comments](https://lobste.rs/s/mhciaq/easel_turns_one_one_year_building_my_own).

* [pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/) - A critical examination of pre-commit hooks and their inherent flaws in modern software workflows. [Comments](https://lobste.rs/s/pjysyq/pre_commit_hooks_are_fundamentally).

* [More dynamic cronjobs](https://george.mand.is/2025/09/more-dynamic-cronjobs/) - Explore the flexibility of creating dynamic cronjobs for effective scheduling. [Comments](https://news.ycombinator.com/item?id=46399576).

* [The Algebra of Loans in Rust](https://nadrieril.github.io/blog/2025/12/21/the-algebra-of-loans-in-rust.html) - Dive into advanced Rust programming concepts with the algebraic perspective on handling loans. [Comments](https://lobste.rs/s/gwmwx7/algebra_loans_rust).

* [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html) - A deep dive into the performance enhancements behind uv, a core component of libuv. [Comments](https://news.ycombinator.com/item?id=46393992).

## Science and Health

* [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - Philosophical arguments explore the challenges of determining AI consciousness.

* [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - Research illuminates the hidden dangers of high-fat diets and their link to liver cancer precursors.

* [Inside the proton, the ‘most complicated thing you could possibly imagine’ (2022)](https://www.quantamagazine.org/inside-the-proton-the-most-complicated-thing-imaginable-20221019/) - A detailed exploration into the complex inner workings of protons. [Comments](https://news.ycombinator.com/item?id=46398666).

* [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - Astronomers capture a spectacular collision of cosmic entities.

## Ethics and Society

* [Video Call Glitches Evoke Uncanniness, Damage Consequential Life Outcomes](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The disruptions caused by video call glitches pose unique psychological and professional challenges. [Comments](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [New York To Require Social Media Platforms To Display Mental Health Warnings](https://news.slashdot.org/story/25/12/26/237210/new-york-to-require-social-media-platforms-to-display-mental-health-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - State legislation introduces mental health warnings on social platforms to raise awareness of their effects. [Comments](https://news.slashdot.org/story/25/12/26/237210/new-york-to-require-social-media-platforms-to-display-mental-health-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Climate Misinformation is Becoming a National Security Threat. Canada Isn't Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - Canada's lack of preparation against climate misinformation poses threats to national security.

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

* [2025-12-27, 15:34:00](https://news.slashdot.org/story/25/12/27/036241/free-software-foundation-receives-historic-donations-worth-nearly-900k---in-monero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Free Software Foundation Receives &apos;Historic&apos; Donations Worth Nearly $900K - in Monero](https://news.slashdot.org/story/25/12/27/036241/free-software-foundation-receives-historic-donations-worth-nearly-900k---in-monero?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 15:00:28](https://lobste.rs/s/byxxmk/why_is_calling_my_asm_function_from_rust) - [Why is calling my asm function from Rust slower than calling it from C?](https://ohadravid.github.io/posts/2025-12-rav1d-faster-asm/)
* [2025-12-27, 14:51:13](https://lobste.rs/s/kccoly/commandry_command_line_parser_for) - [Commandry - A Command-Line Parser for Standard ML](https://github.com/PerplexSystems/commandry)
* [2025-12-27, 14:44:11](https://lobste.rs/s/mhciaq/easel_turns_one_one_year_building_my_own) - [Easel Turns One! One year of building my own IDE in Clojure](https://blog.phronemophobic.com/easel-one-year.html)
* [2025-12-27, 13:39:41](https://lobste.rs/s/ibgvjk/getting_started_with_playdate_on_ubuntu) - [Getting started with Playdate on Ubuntu](https://sethmlarson.dev/getting-started-with-playdate-on-ubuntu)
* [2025-12-27, 13:13:00](https://news.ycombinator.com/item?id=46401612) - [Floor796](https://floor796.com/)
* [2025-12-27, 12:58:12](https://news.ycombinator.com/item?id=46401539) - [Apple releases open-source model that instantly turns 2D photos into 3D views](https://github.com/apple/ml-sharp)
* [2025-12-27, 12:51:15](https://news.ycombinator.com/item?id=46401499) - [OrangePi 6 Plus Review: The New Frontier for ARM64 SBC Performance](https://boilingsteam.com/orange-pi-6-plus-review/)
* [2025-12-27, 12:00:00](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Call Glitches Evoke Uncanniness, Damage Consequential Life Outcomes](https://slashdot.org/story/25/12/27/0142219/video-call-glitches-evoke-uncanniness-damage-consequential-life-outcomes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 11:57:17](https://news.ycombinator.com/item?id=46401190) - [Splice a Fibre](https://react-networks-lib.rackout.net/fibre)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 11:08:00](https://lobste.rs/s/spwojt/meet_critic_code_inspection_system_opera) - [Meet Critic: Code Inspection System in Opera Software (2019?)](https://sudonull.com/post/135595)
* [2025-12-27, 10:48:14](https://lobste.rs/s/72piqg/you_can_t_design_software_you_don_t_work_on) - [You can&apos;t design software you don&apos;t work on](https://seangoedecke.com/you-cant-design-software-you-dont-work-on/)
* [2025-12-27, 10:31:43](https://lobste.rs/s/l3cjbq/arcan_0_7_1_minutes_midnight) - [Arcan 0.7.1 – Minutes To Midnight](https://arcan-fe.com/2025/12/27/arcan-0-7-1-minutes-to-midnight/)
* [2025-12-27, 10:01:00](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taiwan&apos;s iPass Releases Floppy Disk Pre-Paid Cash Card](https://it.slashdot.org/story/25/12/27/0236249/taiwans-ipass-releases-floppy-disk-pre-paid-cash-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 08:52:40](https://lobste.rs/s/xmy2nk/qnx_self_hosted_developer_desktop_brings) - [QNX Self-Hosted Developer Desktop Brings QNX 8.0 To A Wayland + Xfce Desktop](https://www.phoronix.com/news/QNX-Self-Hosted-Dev-Desktop)
* [2025-12-27, 08:45:46](https://news.ycombinator.com/item?id=46400251) - [Show HN: Ez FFmpeg – Video editing in plain English](http://npmjs.com/package/ezff)
* [2025-12-27, 08:42:45](https://news.ycombinator.com/item?id=46400242) - [Verdichtung](https://alexeygy.github.io/blog/verdichtung/)
* [2025-12-27, 08:18:45](https://lobste.rs/s/p2yx0g/39c3_power_cycles_streaming) - [39C3: Power Cycles Streaming](https://streaming.media.ccc.de/39c3)
* [2025-12-27, 08:02:00](https://tech.slashdot.org/story/25/12/27/0224259/toll-roads-are-spreading-in-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toll Roads Are Spreading in America](https://tech.slashdot.org/story/25/12/27/0224259/toll-roads-are-spreading-in-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 06:10:42](https://news.ycombinator.com/item?id=46399576) - [More dynamic cronjobs](https://george.mand.is/2025/09/more-dynamic-cronjobs/)
* [2025-12-27, 05:01:00](https://science.slashdot.org/story/25/12/27/010236/rocket-crashes-in-brazils-first-commercial-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rocket Crashes in Brazil&apos;s First Commercial Launch](https://science.slashdot.org/story/25/12/27/010236/rocket-crashes-in-brazils-first-commercial-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 03:44:30](https://lobste.rs/s/pjysyq/pre_commit_hooks_are_fundamentally) - [pre-commit hooks are fundamentally broken](https://jyn.dev/pre-commit-hooks-are-fundamentally-broken/)
* [2025-12-27, 03:00:00](https://news.ycombinator.com/item?id=46398666) - [Inside the proton, the ‘most complicated thing you could possibly imagine’ (2022)](https://www.quantamagazine.org/inside-the-proton-the-most-complicated-thing-imaginable-20221019/)
* [2025-12-27, 02:00:00](https://mobile.slashdot.org/story/25/12/27/002258/mesh-networks-are-about-to-escape-apple-amazon-and-google-silos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mesh Networks Are About To Escape Apple, Amazon and Google Silos](https://mobile.slashdot.org/story/25/12/27/002258/mesh-networks-are-about-to-escape-apple-amazon-and-google-silos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-27, 01:16:53](https://news.ycombinator.com/item?id=46398201) - [QNX Self-Hosted Developer Desktop](https://devblog.qnx.com/qnx-self-hosted-developer-desktop-initial-release/)
* [2025-12-27, 00:43:04](https://news.ycombinator.com/item?id=46397991) - [Publishing your work increases your luck](https://github.com/readme/guides/publishing-your-work)
* [2025-12-27, 00:30:00](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Driverless Future Gains Momentum With Global Robotaxi Deployments](https://tech.slashdot.org/story/25/12/26/2355244/driverless-future-gains-momentum-with-global-robotaxi-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 23:42:46](https://news.ycombinator.com/item?id=46397609) - [Exe.dev](https://exe.dev/)
* [2025-12-26, 23:40:00](https://science.slashdot.org/story/25/12/26/2339234/nasa-chief-says-us-will-return-to-moon-within-trumps-second-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Chief Says US Will Return To Moon Within Trump&apos;s Second Term](https://science.slashdot.org/story/25/12/26/2339234/nasa-chief-says-us-will-return-to-moon-within-trumps-second-term?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 23:09:40](https://news.ycombinator.com/item?id=46397379) - [Always bet on text (2014)](https://graydon2.dreamwidth.org/193447.html)
* [2025-12-26, 23:07:00](https://news.slashdot.org/story/25/12/26/237210/new-york-to-require-social-media-platforms-to-display-mental-health-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York To Require Social Media Platforms To Display Mental Health Warnings](https://news.slashdot.org/story/25/12/26/237210/new-york-to-require-social-media-platforms-to-display-mental-health-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 22:33:20](https://lobste.rs/s/ykxhnw/rime_ancient_maintainer) - [The Rime of the Ancient Maintainer](https://www.joanwestenberg.com/the-rime-of-the-ancient-maintainer/)
* [2025-12-26, 21:42:32](https://lobste.rs/s/oydvli/enabling_c_threads_python_wasm) - [\&quot;Enabling\&quot; C threads in a Python / Wasm environment](https://yosefk.com/blog/enabling-c-threads-in-a-python-wasm-environment.html)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 20:41:47](https://lobste.rs/s/mn8h3l/how_i_think_about_kubernetes) - [How I think about Kubernetes](https://garnaudov.com/writings/how-i-think-about-kubernetes/)
* [2025-12-26, 20:00:00](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FFmpeg Developer Files DMCA Against Rockchip After Two-Year Wait for License Fix](https://it.slashdot.org/story/25/12/26/193244/ffmpeg-developer-files-dmca-against-rockchip-after-two-year-wait-for-license-fix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 19:41:18](https://lobste.rs/s/uoz0h9/from_intent_proof_dafny_verification_for) - [From Intent to Proof: Dafny Verification for Web Apps](https://midspiral.com/blog/from-intent-to-proof-dafny-verification-for-web-apps/)
* [2025-12-26, 19:17:30](https://lobste.rs/s/yasyrg/simplifying_build_process_for_vst3_rs) - [Simplifying the build process for vst3-rs](https://micahrj.github.io/posts/vst3/)
* [2025-12-26, 19:03:32](https://news.ycombinator.com/item?id=46395106) - [How Lewis Carroll computed determinants (2023)](https://www.johndcook.com/blog/2023/07/10/lewis-carroll-determinants/)
* [2025-12-26, 18:44:10](https://lobste.rs/s/69el0u/show_twine_tool_dynamically_trace_calls) - [Show: Twine - A tool to dynamically trace calls in production Elixir systems](https://github.com/ollien/twine)
* [2025-12-26, 18:40:00](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian IT Was Supposed To Die From AI. Instead It&apos;s Billing for the Cleanup.](https://it.slashdot.org/story/25/12/26/1756219/indian-it-was-supposed-to-die-from-ai-instead-its-billing-for-the-cleanup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 18:16:09](https://lobste.rs/s/dqwid1/how_uv_got_so_fast) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 17:37:00](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As AI Companies Borrow Billions, Debt Investors Grow Wary](https://news.slashdot.org/story/25/12/26/1737240/as-ai-companies-borrow-billions-debt-investors-grow-wary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 17:13:07](https://news.ycombinator.com/item?id=46393992) - [How uv got so fast](https://nesbitt.io/2025/12/26/how-uv-got-so-fast.html)
* [2025-12-26, 17:07:53](https://news.ycombinator.com/item?id=46393936) - [Experts explore new mushroom which causes fairytale-like hallucinations](https://nhmu.utah.edu/articles/experts-explore-new-mushroom-which-causes-fairytale-hallucinations)
* [2025-12-26, 16:30:59](https://lobste.rs/s/pl1lmb/til_serde_s_borrowing_can_be_treacherous) - [TIL: serde&apos;s borrowing can be treacherous](https://yossarian.net/til/post/serde-s-borrowing-can-be-treacherous/)
* [2025-12-26, 16:24:00](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Economic Divide Between Big and Small Companies Is Growing](https://news.slashdot.org/story/25/12/26/1623248/the-economic-divide-between-big-and-small-companies-is-growing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 15:32:38](https://lobste.rs/s/j6spka/play_monty_hall_game) - [Play the Monty Hall game](https://monty.donk.systems)
* [2025-12-26, 15:20:36](https://news.ycombinator.com/item?id=46392910) - [Show HN: Witr – Explain why a process is running on your Linux system](https://github.com/pranshuparmar/witr)
* [2025-12-26, 15:08:00](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retreating From EVs Could Be Hazardous For Western Carmakers](https://tech.slashdot.org/story/25/12/26/158231/retreating-from-evs-could-be-hazardous-for-western-carmakers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 14:05:00](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Hunger For Memory Chips Could Shrink Smartphone and PC Sales in 2026, IDC Says](https://it.slashdot.org/story/25/12/26/144228/ais-hunger-for-memory-chips-could-shrink-smartphone-and-pc-sales-in-2026-idc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-26, 12:46:36](https://news.ycombinator.com/item?id=46391514) - [Package managers keep using Git as a database, it never works out](https://nesbitt.io/2025/12/24/package-managers-keep-using-git-as-a-database.html)
* [2025-12-26, 12:46:05](https://lobste.rs/s/gwmwx7/algebra_loans_rust) - [The Algebra of Loans in Rust](https://nadrieril.github.io/blog/2025/12/21/the-algebra-of-loans-in-rust.html)
* [2025-12-26, 12:27:02](https://lobste.rs/s/byjzpj/gnu_mes_module_system) - [GNU Mes and the module system](https://ekaitz.elenq.tech/fasterMes5.html)
* [2025-12-26, 12:04:24](https://lobste.rs/s/bjn0cl/i_m_laptop_weirdo_s_why_i_like_my_new) - [I&apos;m a laptop weirdo and that&apos;s why I like my new Framework 13](https://blog.matthewbrunelle.com/im-a-laptop-weirdo-and-thats-why-i-like-my-new-framework-13/)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 09:43:09](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/yswcyu/what_are_you_doing_this_weekend)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 06:05:07](https://lobste.rs/s/jkomyi/writing_nes_emulator_haskell) - [Writing an NES emulator in Haskell](https://arthi-chaud.github.io/posts/funes/)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
* [2025-12-26, 00:59:00](https://lobste.rs/s/abglcr/automating_what_backblaze_lifecycle) - [Automating What Backblaze Lifecycle Rules Don&apos;t Do Instantly](https://blog.tymscar.com/posts/backblazeb2cleanup/)
* [2025-12-25, 21:13:00](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss) - [In-Car Touchscreens Are Way More Distracting Than We First Thought, Says New Study](https://soylentnews.org/article.pl?sid=25/12/22/1756237&amp;from=rss)
* [2025-12-25, 16:27:00](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss) - [Trump Signs Executive Order Reclassifying Cannabis, Opening Door to Broader Weed Access](https://soylentnews.org/article.pl?sid=25/12/22/1755209&amp;from=rss)
* [2025-12-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss) - [Danish Postal Service to Stop Delivering Letters After 400 Years](https://soylentnews.org/article.pl?sid=25/12/22/1751236&amp;from=rss)
* [2025-12-25, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss) - [Cosmic Crash Caught on Camera](https://soylentnews.org/article.pl?sid=25/12/22/1749222&amp;from=rss)
* [2025-12-25, 02:15:00](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss) - [The Lost Story of Alan Turing’s Secret “Delilah” Project](https://soylentnews.org/article.pl?sid=25/12/22/1747232&amp;from=rss)
* [2025-12-24, 21:30:00](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss) - [Research Explores the Indigenous Origins of the Hammock](https://soylentnews.org/article.pl?sid=25/12/22/1741226&amp;from=rss)
* [2025-12-24, 16:45:00](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss) - [Nvidia Plans Heavy Cuts to GPU Supply in Early 2026](https://soylentnews.org/article.pl?sid=25/12/22/0125252&amp;from=rss)
* [2025-12-24, 15:53:41](https://news.ycombinator.com/item?id=46376608) - [Detect memory leaks of C extensions with psutil and psleak](https://gmpy.dev/blog/2025/psutil-heap-introspection-apis)
* [2025-12-24, 11:52:00](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss) - [Is Talented Youth Nurtured the Wrong Way? Top Performers Develop Differently Than Assumed](https://soylentnews.org/article.pl?sid=25/12/22/0124250&amp;from=rss)
* [2025-12-24, 07:10:00](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss) - [Ford EV Battery Joint Venture Plant Lays Off All Workers](https://soylentnews.org/article.pl?sid=25/12/22/0121248&amp;from=rss)
* [2025-12-24, 02:28:00](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss) - [Google Search Now Lets You Upload Images and PDFs for Analysis](https://soylentnews.org/article.pl?sid=25/12/22/0120207&amp;from=rss)
* [2025-12-23, 21:42:36](https://news.ycombinator.com/item?id=46369808) - [Researchers develop a camera that can focus on different distances at once](https://engineering.cmu.edu/news-events/news/2025/12/19-perfect-shot.html)
* [2025-12-23, 21:41:00](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss) - [Firefox Will Ship With an “AI Kill Switch” to Completely Disable All AI Features](https://soylentnews.org/article.pl?sid=25/12/22/0032258&amp;from=rss)
* [2025-12-23, 17:30:15](https://news.ycombinator.com/item?id=46367195) - [AI Police Reports: Year in Review](https://www.eff.org/deeplinks/2025/12/ai-police-reports-year-review)
* [2025-12-23, 16:57:00](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss) - [A Better Zip Bomb](https://soylentnews.org/article.pl?sid=25/12/22/0029209&amp;from=rss)
* [2025-12-23, 14:51:33](https://news.ycombinator.com/item?id=46365726) - [The best things and stuff of 2025](https://blog.fogus.me/2025/12/23/the-best-things-and-stuff-of-2025.html)
* [2025-12-23, 13:18:32](https://news.ycombinator.com/item?id=46365105) - [Show HN: Mysti – Claude, Codex, and Gemini debate your code, then synthesize](https://github.com/DeepMyst/Mysti)
* [2025-12-23, 12:14:00](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss) - [Titan&apos;s Slushy Oceans](https://soylentnews.org/article.pl?sid=25/12/21/0921233&amp;from=rss)
* [2025-12-23, 11:53:19](https://news.ycombinator.com/item?id=46364567) - [Some Junk Theorems in Lean](https://github.com/James-Hanson/junk-theorems-in-lean)
* [2025-12-23, 07:31:00](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss) - [New UEFI Flaw Enables Pre-Boot Attacks on Motherboards From Gigabyte, MSI, ASUS, ASRock](https://soylentnews.org/article.pl?sid=25/12/21/0918231&amp;from=rss)
* [2025-12-23, 02:44:00](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss) - [Creating Apps Like Signal or WhatsApp Could be &apos;Hostile Activity,&apos; Claims UK Watchdog](https://soylentnews.org/article.pl?sid=25/12/21/0915233&amp;from=rss)
