# [News Summary](https://kherrick.github.io/news-summary/)

## No content was returned.

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

* [2025-02-21, 12:41:22](https://lobste.rs/s/nodkpe/chatting_with_designer_monolisa) - [Chatting with the Designer of MonoLisa](https://joshleeb.com/posts/monolisa-chat.html)
* [2025-02-21, 12:32:08](https://news.ycombinator.com/item?id=43126741) - [EFF: Social media platforms are removing vital info on reproductive health](https://bsky.app/profile/eff.org/post/3likxtlnruk23)
* [2025-02-21, 12:31:10](https://lobste.rs/s/zcsxzn/first_wasm_ocaml_release_is_out) - [The First Wasm_of_ocaml Release is Out](https://tarides.com/blog/2025-02-19-the-first-wasm-of-ocaml-release-is-out/)
* [2025-02-21, 10:46:09](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend)
* [2025-02-21, 10:26:41](https://news.ycombinator.com/item?id=43125981) - [Users don't care about your tech stack](https://www.empathetic.dev/users-dont-care-about-your-tech-stack)
* [2025-02-21, 10:01:36](https://news.ycombinator.com/item?id=43125840) - [Meta claims torrenting pirated books isn't illegal without proof of seeding](https://arstechnica.com/tech-policy/2025/02/meta-defends-its-vast-book-torrenting-were-just-a-leech-no-proof-of-seeding/)
* [2025-02-21, 10:00:00](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Cracks Superbug Problem In Two Days That Took Scientists Years](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 09:59:23](https://news.ycombinator.com/item?id=43125829) - [Every .gov Domain](https://flatgithub.com/cisagov/dotgov-data/blob/main/?filename=current-full.csv&sha=7dc7d24fba91f571692112d92b6a8fbe7aecbba2)
* [2025-02-21, 09:23:21](https://news.ycombinator.com/item?id=43125641) - [Show HN: One year of bewCloud (a simpler Nextcloud alternative)](https://bewcloud.com#one-year-later)
* [2025-02-21, 08:56:32](https://lobste.rs/s/u4eidn/running_ml_models_elixir_using_pythonx) - [Running ML models in Elixir using Pythonx](https://samrat.me/running-ml-models-in-elixir-using-pythonx/)
* [2025-02-21, 08:52:57](https://lobste.rs/s/wooe50/databases_are_endgame_for_data_oriented) - [Databases are the endgame for data-oriented design](https://spacetimedb.com/blog/databases-and-data-oriented-design)
* [2025-02-21, 08:52:13](https://news.ycombinator.com/item?id=43125487) - [Fly To Podman: a script that will help you to migrate from Docker](https://github.com/Edu4rdSHL/fly-to-podman)
* [2025-02-21, 08:42:38](https://news.ycombinator.com/item?id=43125430) - [Train Your Own O1 Preview Model Within $450](https://sky.cs.berkeley.edu/project/sky-t1/)
* [2025-02-21, 08:00:54](https://news.ycombinator.com/item?id=43125176) - [Running Systemd-Nspawn Containers](https://benjamintoll.com/2022/02/04/on-running-systemd-nspawn-containers/)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 07:40:41](https://lobste.rs/s/s3re6r/docker_limits_unauthenticated_pulls_10) - [Docker limits unauthenticated pulls to 10/hr/ip from Docker Hub, from March 1](https://docs.docker.com/docker-hub/usage/)
* [2025-02-21, 07:00:00](https://yro.slashdot.org/story/25/02/21/0234244/california-takes-steps-toward-officially-recognizing-bigfoot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Takes Steps Toward Officially Recognizing Bigfoot](https://yro.slashdot.org/story/25/02/21/0234244/california-takes-steps-toward-officially-recognizing-bigfoot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 06:04:09](https://lobste.rs/s/qromax/chromium_ozone_wayland_last_mile_stretch) - [Chromium Ozone/Wayland: The Last Mile Stretch](https://nickdiego.dev/blog/chromium-ozone-wayland-the-last-mile-stretch/)
* [2025-02-21, 05:55:50](https://news.ycombinator.com/item?id=43124436) - [US Judge invalidates blood glucose sensor patent, opens door for Apple Watch](https://www.patentlyapple.com/2025/02/a-federal-judge-has-invalidated-an-omni-medsci-patent-which-could-open-the-door-for-a-blood-glucose-solution-for-apple-watch.html)
* [2025-02-21, 04:39:51](https://news.ycombinator.com/item?id=43124091) - [Long-Context GRPO](https://unsloth.ai/blog/grpo)
* [2025-02-21, 04:38:36](https://lobste.rs/s/6evpks/linus_replies_r4l_controversy) - [Linus replies to R4L controversy](https://lore.kernel.org/rust-for-linux/CAHk-=wgLbz1Bm8QhmJ4dJGSmTuV5w_R0Gwvg5kHrYr4Ko9dUHQ@mail.gmail.com/)
* [2025-02-21, 04:24:39](https://news.ycombinator.com/item?id=43124018) - [DeepSeek Open Infra: Open-Sourcing 5 AI Repos in 5 Days](https://github.com/deepseek-ai/open-infra-index)
* [2025-02-21, 03:30:00](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Claims Torrenting Pirated Books Isn't Illegal Without Proof of Seeding](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
* [2025-02-21, 02:11:00](https://tech.slashdot.org/story/25/02/21/029217/rivian-reports-first-quarter-of-positive-gross-profit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rivian Reports First Quarter of 'Positive Gross Profit'](https://tech.slashdot.org/story/25/02/21/029217/rivian-reports-first-quarter-of-positive-gross-profit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 01:32:34](https://news.ycombinator.com/item?id=43123033) - [Exa Laboratories (YC S24) Is Hiring a Founding Engineer to Build AI Chips](https://www.ycombinator.com/companies/exa-laboratories/jobs/9TXvyqt-founding-engineer)
* [2025-02-21, 01:25:00](https://it.slashdot.org/story/25/02/21/0032236/ghost-ransomware-continues-to-infect-critical-infrastructure-feds-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ghost Ransomware Continues To Infect Critical Infrastructure, Feds Warn](https://it.slashdot.org/story/25/02/21/0032236/ghost-ransomware-continues-to-infect-critical-infrastructure-feds-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 00:45:00](https://news.slashdot.org/story/25/02/21/0023214/youtube-plans-lower-priced-ad-free-version-of-paid-video-tier?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Plans Lower-Priced, Ad-Free Version of Paid Video Tier](https://news.slashdot.org/story/25/02/21/0023214/youtube-plans-lower-priced-ad-free-version-of-paid-video-tier?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 00:32:19](https://lobste.rs/s/ymrfir/crustacean_for_lobste_rs) - [Crustacean for Lobste.rs](https://crustacean.optionalstudio.work)
* [2025-02-21, 00:02:00](https://entertainment.slashdot.org/story/25/02/20/2220246/netflix-to-invest-1-billion-in-mexico-over-next-4-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Netflix To Invest $1 Billion In Mexico Over Next 4 Years](https://entertainment.slashdot.org/story/25/02/20/2220246/netflix-to-invest-1-billion-in-mexico-over-next-4-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 00:01:33](https://lobste.rs/s/gjxxqk/my_llm_codegen_workflow_atm) - [My LLM codegen workflow atm](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
* [2025-02-20, 23:59:05](https://lobste.rs/s/nsq3tq/your_company_needs_junior_devs) - [Your company needs Junior devs](https://softwaredoug.com/blog/2024/09/07/your-team-needs-juniors)
* [2025-02-20, 23:20:00](https://apple.slashdot.org/story/25/02/20/2150209/apple-is-bringing-visual-intelligence-to-the-iphone-15-pro?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Is Bringing Visual Intelligence To the iPhone 15 Pro](https://apple.slashdot.org/story/25/02/20/2150209/apple-is-bringing-visual-intelligence-to-the-iphone-15-pro?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 22:44:53](https://news.ycombinator.com/item?id=43121383) - [Show HN: BadSeek – How to backdoor large language models](https://sshh12--llm-backdoor.modal.run/)
* [2025-02-20, 22:40:00](https://slashdot.org/story/25/02/20/2135238/chatgpt-reaches-400-million-weekly-active-users?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ChatGPT Reaches 400 Million Weekly Active Users](https://slashdot.org/story/25/02/20/2135238/chatgpt-reaches-400-million-weekly-active-users?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 22:19:49](https://news.ycombinator.com/item?id=43121059) - [Introduction to CUDA programming for Python developers](https://www.pyspur.dev/blog/introduction_cuda_programming)
* [2025-02-20, 22:12:00](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss) - [10 Years on After 'Data and Goliath' Warned of Data Collection](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss)
* [2025-02-20, 22:02:59](https://news.ycombinator.com/item?id=43120873) - [TinyCompiler: A compiler in a week-end](https://ssloy.github.io/tinycompiler/)
* [2025-02-20, 22:00:00](https://yro.slashdot.org/story/25/02/20/2129257/isp-must-unmask-100-alleged-bittorrent-pirates-in-riaa-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ISP Must Unmask 100 Alleged BitTorrent Pirates In RIAA Lawsuit](https://yro.slashdot.org/story/25/02/20/2129257/isp-must-unmask-100-alleged-bittorrent-pirates-in-riaa-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 21:39:19](https://news.ycombinator.com/item?id=43120582) - [Show HN: Immersive Gaussian Splat experience of Sutro Tower, San Francisco](https://vincentwoo.com/3d/sutro_tower/)
* [2025-02-20, 21:21:00](https://it.slashdot.org/story/25/02/20/137233/dark-mode-might-be-burning-more-juice-than-you-think?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ Dark Mode Might Be Burning More Juice Than You Think](https://it.slashdot.org/story/25/02/20/137233/dark-mode-might-be-burning-more-juice-than-you-think?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 20:42:06](https://lobste.rs/s/rcddil/running_pong_240_browser_tabs) - [Running Pong in 240 Browser Tabs](https://eieio.games/blog/running-pong-in-240-browser-tabs/)
* [2025-02-20, 20:41:33](https://lobste.rs/s/qiagr8/bash_bash_with_classes) - [Bash++: Bash with Classes](https://bpp.sh/)
* [2025-02-20, 20:41:00](https://slashdot.org/story/25/02/20/1943242/amazon-surpasses-walmart-in-revenue-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Surpasses Walmart in Revenue For First Time](https://slashdot.org/story/25/02/20/1943242/amazon-surpasses-walmart-in-revenue-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 20:40:01](https://lobste.rs/s/adk7dp/what_is_wrong_with_architecture_internet) - [What is wrong with the architecture of the Internet?](https://ouroboros.rocks/blog/2022/02/12/what-is-wrong-with-the-architecture-of-the-internet/)
* [2025-02-20, 20:00:00](https://yro.slashdot.org/story/25/02/20/1953229/ftc-launches-broad-tech-censorship-probe-targeting-meta-uber?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Launches Broad Tech 'Censorship' Probe Targeting Meta, Uber](https://yro.slashdot.org/story/25/02/20/1953229/ftc-launches-broad-tech-censorship-probe-targeting-meta-uber?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 19:33:28](https://news.ycombinator.com/item?id=43119086) - [Running Pong in 240 browser tabs](https://eieio.games/blog/running-pong-in-240-browser-tabs/)
* [2025-02-20, 19:22:00](https://games.slashdot.org/story/25/02/20/1313234/twitch-is-limiting-streamers-to-100-hours-of-highlights-and-uploads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Twitch is Limiting Streamers To 100 hours of Highlights and Uploads](https://games.slashdot.org/story/25/02/20/1313234/twitch-is-limiting-streamers-to-100-hours-of-highlights-and-uploads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 18:30:00](https://it.slashdot.org/story/25/02/20/1827203/hp-deliberately-adds-15-minutes-waiting-time-for-telephone-support-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Deliberately Adds 15 Minutes Waiting Time For Telephone Support Calls](https://it.slashdot.org/story/25/02/20/1827203/hp-deliberately-adds-15-minutes-waiting-time-for-telephone-support-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 17:37:12](https://lobste.rs/s/zsngat/announcing_rust_1_85_0_rust_2024) - [Announcing Rust 1.85.0 and Rust 2024](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 16:23:56](https://news.ycombinator.com/item?id=43116633) - [Launch HN: Confident AI (YC W25) – Open-source evaluation framework for LLM apps](https://news.ycombinator.com/item?id=43116633)
* [2025-02-20, 16:15:55](https://lobste.rs/s/im5ysx/ugly_code_dumb_things) - [Ugly Code and Dumb Things](https://lucumr.pocoo.org/2025/2/20/ugly-code/)
* [2025-02-20, 16:03:31](https://lobste.rs/s/ziemvn/new_interpreter_python_3_14_delivers_free) - [A new interpreter in Python 3.14 delivers a free speed boost](https://www.infoworld.com/article/3820890/a-new-interpreter-in-python-3-14-delivers-a-free-speed-boost.html)
* [2025-02-20, 16:02:29](https://lobste.rs/s/ui7yri/implementing_game_boy_emulator_ruby) - [Implementing a Game Boy emulator in Ruby](https://sacckey.dev/posts/implementing-a-game-boy-emulator-in-ruby/)
* [2025-02-20, 15:47:09](https://news.ycombinator.com/item?id=43116112) - [Spice86 – A PC emulator for real mode reverse engineering](https://github.com/OpenRakis/Spice86)
* [2025-02-20, 14:20:07](https://lobste.rs/s/tlload/faq_on_microsoft_s_topological_qubit) - [FAQ on Microsoft’s topological qubit thing](https://scottaaronson.blog/?p=8669)
* [2025-02-20, 13:31:27](https://lobste.rs/s/s75rfx/sapf_forth_like_language_for_audio) - [sapf: - a Forth-like language for audio synthesis using lazy lists and APL-like auto-mapping](https://github.com/lfnoise/sapf)
* [2025-02-20, 13:27:56](https://lobste.rs/s/7cbgyr/ai_vs_extra_minute_shower) - [AI vs. an extra minute in the shower](https://kmaasrud.com/blog/ai-vs-shower.html)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 12:13:00](https://lobste.rs/s/ud4pbl/pgbouncer_is_useful_important_fraught) - [PgBouncer is useful, important, and fraught with peril](https://jpcamara.com/2023/04/12/pgbouncer-is-useful.html)
* [2025-02-20, 11:18:36](https://lobste.rs/s/sm7pk7/ipv6_transition) - [The IPv6 transition](https://blog.apnic.net/2024/10/22/the-ipv6-transition/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-20, 00:21:16](https://lobste.rs/s/isl4u6/demystifying_monads_rust_through) - [Demystifying monads in Rust through property-based testing](https://sunshowers.io/posts/monads-through-pbt/)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 20:36:32](https://news.ycombinator.com/item?id=43107317) - [Five Kinds of Nondeterminism](https://buttondown.com/hillelwayne/archive/five-kinds-of-nondeterminism/)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 15:48:18](https://lobste.rs/s/hdj2q4/greg_kroah_hartman_makes_compelling_case) - [Greg Kroah-Hartman Makes A Compelling Case For New Linux Kernel Drivers To Be Written In Rust](https://www.phoronix.com/news/Greg-KH-On-New-Rust-Code)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 12:12:52](https://news.ycombinator.com/item?id=43101204) - [Greg K-H: \"Writing new code in Rust is a win for all of us\"](https://lore.kernel.org/rust-for-linux/2025021954-flaccid-pucker-f7d9@gregkh/)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-18, 22:30:52](https://news.ycombinator.com/item?id=43095943) - [The Buenos Aires Constant](https://www.johndcook.com/blog/2025/02/18/the-buenos-aires-constant/)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 19:55:33](https://news.ycombinator.com/item?id=43094241) - [12 years of Backblaze data center storage drives, visualized](https://benjdd.com/drives/)
* [2025-02-18, 19:49:30](https://news.ycombinator.com/item?id=43094175) - [eserde – a serde that just doesn't stop](https://github.com/mainmatter/eserde/tree/155af5fb3df9d998e6b6bb70aecb7ca49e9f07d5/eserde)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 12:38:08](https://news.ycombinator.com/item?id=43088797) - [A Clang regression related to switch statements and inlining](https://nicula.xyz/2025/02/16/clang-and-big-switches.html)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 08:38:55](https://news.ycombinator.com/item?id=43087406) - [Append-Only Programming](https://iafisher.com/blog/2024/08/append-only-programming)
* [2025-02-18, 08:24:30](https://news.ycombinator.com/item?id=43087288) - [Just barely fitting a full Wi-Fi stack on the nRF9151](https://danielmangum.com/posts/nrf9151-wifi-station/)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 05:43:31](https://news.ycombinator.com/item?id=43086437) - [Swiss Tables](https://abseil.io/about/design/swisstables)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 19:59:48](https://news.ycombinator.com/item?id=43082764) - [Rare Photos from Inside North Korea's 'Hotel of Doom' (2023)](https://www.9news.com.au/world/ryugyong-hotel-north-korea-the-hotel-of-doom-that-has-never-welcomed-a-single-guest/0f1f16df-65bc-41a3-9c79-dc6d9de2afed)
* [2025-02-17, 18:05:41](https://news.ycombinator.com/item?id=43081678) - [How browsers really load web pages [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-4852-how-browsers-really-load-web-pages/)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
