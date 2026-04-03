# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Big-Endian Testing with QEMU](https://www.hanshq.net/big-endian-qemu.html) discusses how QEMU can be utilized for testing on big-endian architectures, providing insights into cross-platform software development. [Comments](https://lobste.rs/s/aaaw7y/big_endian_testing_with_qemu)

* [800 Rust terminal projects in 3 years](https://blog.orhun.dev/800-rust-projects/) chronicles the creation and evolution of a prolific Rust developer's journey, highlighting innovations in terminal applications. [Comments](https://lobste.rs/s/yy4uyc/800_rust_terminal_projects_3_years)

* [Idiomatic Lisp and the nbody benchmark](https://www.stylewarning.com/posts/nbody/) examines performance and idiomatic coding in Lisp using the nbody benchmark. [Comments](https://lobste.rs/s/vtqfx7/idiomatic_lisp_nbody_benchmark)

* [United States Code (federal laws) in Git](https://github.com/nickvido/us-code) introduces a project that integrates the U.S. Code into Git, enabling easier access and tracking of modifications. [Comments](https://news.ycombinator.com/item?id=47625366)

## Ethics and Legal Concerns in Technology

* [Attorney Hit With Historic Fine for Citing AI-Generated Cases](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss) highlights a legal and ethical issue as a lawyer encounters significant penalties for relying on AI-generated legal cases. [Comments](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss#comments)

## Content Creation and AI Tools

* [Show HN: I built a frontpage for personal blogs](https://text.blogosphere.app/) introduces a tool to curate and showcase personal blogs in a clean and organized manner. [Comments](https://news.ycombinator.com/item?id=47625952)

* [Show HN: Apfel – The free AI already on your Mac](https://apfel.franzai.com) unveils a free AI tool designed to enhance productivity for Mac users. [Comments](https://news.ycombinator.com/item?id=47624645)

## Cybersecurity and Ethical Implications

* [New Rowhammer attacks give complete control of machines running Nvidia GPUs](https://arstechnica.com/security/2026/04/new-rowhammer-attacks-give-complete-control-of-machines-running-nvidia-gpus/) details new critical vulnerabilities in isolated systems. [Comments](https://news.ycombinator.com/item?id=47624317)

* [Wikipedia Has Banned AI-Generated Articles](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss) discusses the decision to exclude AI-generated contributions from the world's leading online encyclopedia. [Comments](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss#comments)

## Scientific and Environmental Advancements

* [Python Blood Could Hold the Secret To Healthy Weight Loss](https://science.slashdot.org/story/26/04/02/2316241/python-blood-could-hold-the-secret-to-healthy-weight-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores the groundbreaking potential of snake venom in understanding weight loss. [Comments](https://science.slashdot.org/story/26/04/02/2316241/python-blood-could-hold-the-secret-to-healthy-weight-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed#comments)

* [Renewables Reached Nearly 50% of Global Electricity Capacity Last Year](https://hardware.slashdot.org/story/26/04/02/2323220/renewables-reached-nearly-50-of-global-electricity-capacity-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) highlights a major milestone in the global energy sector, where nearly half the capacity is derived from renewable sources. [Comments](https://hardware.slashdot.org/story/26/04/02/2323220/renewables-reached-nearly-50-of-global-electricity-capacity-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed#comments)

## Other Intriguing Developments

* [Adobe wrote to my hosts file](https://www.reddit.com/r/webdev/comments/1sb6hzk/adobe_wrote_to_my_hosts_file_ive_never_had_an_app/) shares an unusual tale of Adobe applications modifying user system files. [Comments](https://lobste.rs/s/kltbuq/adobe_wrote_my_hosts_file)

* [Mount Everest Climbers 'Poisoned' By Guides In Insurance Fraud Scheme](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) uncovers a shocking insurance fraud story involving guides and mountaineers. [Comments](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed#comments)

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

* [2026-04-03, 13:28:50](https://lobste.rs/s/aaaw7y/big_endian_testing_with_qemu) - [Big-Endian Testing with QEMU](https://www.hanshq.net/big-endian-qemu.html)
* [2026-04-03, 12:33:45](https://news.ycombinator.com/item?id=47625952) - [Show HN: I built a frontpage for personal blogs](https://text.blogosphere.app/)
* [2026-04-03, 12:00:00](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss) - [Attorney Hit With Historic Fine for Citing AI-Generated Cases](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss)
* [2026-04-03, 11:53:32](https://news.ycombinator.com/item?id=47625639) - [TDF ejects its core developers](https://meeksfamily.uk/~michael/blog/2026-04-02-tdf-ejects-core-devs.html)
* [2026-04-03, 11:18:16](https://lobste.rs/s/v5xax7/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/v5xax7/what_are_you_doing_this_weekend)
* [2026-04-03, 11:18:10](https://news.ycombinator.com/item?id=47625366) - [United States Code (federal laws) in Git](https://github.com/nickvido/us-code)
* [2026-04-03, 11:09:58](https://news.ycombinator.com/item?id=47625311) - [Bun: cgroup-aware AvailableParallelism / HardwareConcurrency on Linux](https://github.com/oven-sh/bun/pull/28801)
* [2026-04-03, 11:08:54](https://lobste.rs/s/vtqfx7/idiomatic_lisp_nbody_benchmark) - [Idiomatic Lisp and the nbody benchmark](https://www.stylewarning.com/posts/nbody/)
* [2026-04-03, 11:00:00](https://science.slashdot.org/story/26/04/02/2316241/python-blood-could-hold-the-secret-to-healthy-weight-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python Blood Could Hold the Secret To Healthy Weight Loss](https://science.slashdot.org/story/26/04/02/2316241/python-blood-could-hold-the-secret-to-healthy-weight-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 10:58:51](https://news.ycombinator.com/item?id=47625244) - [Critics say EU risks ceding control of its tech laws under U.S. pressure](https://www.politico.eu/article/fatal-decision-eu-slammed-for-caving-to-us-pressure-on-digital-rules/)
* [2026-04-03, 09:53:22](https://lobste.rs/s/kltbuq/adobe_wrote_my_hosts_file) - [Adobe wrote to my hosts file](https://www.reddit.com/r/webdev/comments/1sb6hzk/adobe_wrote_to_my_hosts_file_ive_never_had_an_app/)
* [2026-04-03, 09:52:11](https://lobste.rs/s/unme8t/ssh_certificates_better_ssh_experience) - [SSH certificates: the better SSH experience](https://jpmens.net/2026/04/03/ssh-certificates-the-better-ssh-experience/)
* [2026-04-03, 09:36:33](https://news.ycombinator.com/item?id=47624736) - [NHS staff refusing to use FDP over Palantir ethical concerns](https://www.freevacy.com/news/financial-times/nhs-staff-refusing-to-use-fdp-over-palantir-ethical-concerns/7272)
* [2026-04-03, 09:35:16](https://news.ycombinator.com/item?id=47624731) - [April 2026 TLDR Setup for Ollama and Gemma 4 26B on a Mac mini](https://gist.github.com/greenstevester/fc49b4e60a4fef9effc79066c1033ae5)
* [2026-04-03, 09:15:34](https://news.ycombinator.com/item?id=47624645) - [Show HN: Apfel – The free AI already on your Mac](https://apfel.franzai.com)
* [2026-04-03, 08:59:45](https://news.ycombinator.com/item?id=47624558) - [Proton meet isn&apos;t what they told you it was](https://www.sambent.com/proton-meet-isnt-what-they-told-you/)
* [2026-04-03, 08:29:40](https://lobste.rs/s/yy4uyc/800_rust_terminal_projects_3_years) - [800 Rust terminal projects in 3 years](https://blog.orhun.dev/800-rust-projects/)
* [2026-04-03, 08:15:12](https://news.ycombinator.com/item?id=47624317) - [New Rowhammer attacks give complete control of machines running Nvidia GPUs](https://arstechnica.com/security/2026/04/new-rowhammer-attacks-give-complete-control-of-machines-running-nvidia-gpus/)
* [2026-04-03, 07:17:00](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss) - [Wikipedia Has Banned AI-Generated Articles](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss)
* [2026-04-03, 07:00:00](https://hardware.slashdot.org/story/26/04/02/2323220/renewables-reached-nearly-50-of-global-electricity-capacity-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Renewables Reached Nearly 50% of Global Electricity Capacity Last Year](https://hardware.slashdot.org/story/26/04/02/2323220/renewables-reached-nearly-50-of-global-electricity-capacity-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 05:01:26](https://lobste.rs/s/cwzmdl/offensive_cybersecurity_time_horizons) - [Offensive Cybersecurity Time Horizons](https://lyptusresearch.org/research/offensive-cyber-time-horizons)
* [2026-04-03, 04:54:13](https://lobste.rs/s/1jf9b5/1subml_experimental_ml_like_programming) - [1SubMl: experimental ML-like programming language with a unified module and value language, and more](https://github.com/Storyyeller/1subml?tab=readme-ov-file)
* [2026-04-03, 03:30:00](https://yro.slashdot.org/story/26/04/02/2310255/epa-flags-microplastics-pharmaceuticals-as-contaminants-in-drinking-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Flags Microplastics, Pharmaceuticals As Contaminants In Drinking Water](https://yro.slashdot.org/story/26/04/02/2310255/epa-flags-microplastics-pharmaceuticals-as-contaminants-in-drinking-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-03, 02:31:00](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss) - [Ancient Alphabets, New Insights: Researchers Uncover Hidden Links Among the Letters](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss)
* [2026-04-03, 02:14:29](https://lobste.rs/s/6rq90r/css_engine_ocaml) - [A CSS Engine in OCaml](https://gazagnaire.org/blog/2026-04-02-cascade.html)
* [2026-04-02, 23:49:34](https://lobste.rs/s/hp00yw/gentoo_gnu_hurd) - [Gentoo GNU/Hurd](https://www.gentoo.org/news/2026/04/01/gentoo-hurd.html)
* [2026-04-02, 23:39:55](https://lobste.rs/s/1urnpv/openbsd_on_motorola_88000_processors) - [OpenBSD on Motorola 88000 processors](http://miod.online.fr/software/openbsd/stories/m88k.html)
* [2026-04-02, 23:00:00](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mount Everest Climbers &apos;Poisoned&apos; By Guides In Insurance Fraud Scheme](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 22:13:03](https://news.ycombinator.com/item?id=47620857) - [ParadeDB (YC S23) Is Hiring Database Internal Engineers (Rust)](https://paradedb.notion.site/)
* [2026-04-02, 22:05:05](https://lobste.rs/s/veyrwi/rave_review_superpowers_for_claude_code) - [A Rave Review of Superpowers (for Claude Code)](https://emschwartz.me/a-rave-review-of-superpowers-for-claude-code/)
* [2026-04-02, 22:00:00](https://tech.slashdot.org/story/26/04/02/211202/openai-acquires-popular-tech-industry-talk-show-tbpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acquires Popular Tech-Industry Talk Show TBPN](https://tech.slashdot.org/story/26/04/02/211202/openai-acquires-popular-tech-industry-talk-show-tbpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 21:41:00](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss) - [Why October 1, 2026, Could be the Day SSL/TLS Certificates &apos;Break the Internet&apos;](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss)
* [2026-04-02, 21:00:00](https://news.slashdot.org/story/26/04/02/2052252/amazon-imposes-35-fuel-surcharge-for-many-online-merchants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Imposes 3.5% Fuel Surcharge For Many Online Merchants](https://news.slashdot.org/story/26/04/02/2052252/amazon-imposes-35-fuel-surcharge-for-many-online-merchants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 20:29:18](https://lobste.rs/s/7d8dxv/i_used_ai_it_worked_i_hated_it) - [I used AI. It worked. I hated it](https://taggart-tech.com/reckoning/)
* [2026-04-02, 20:00:00](https://slashdot.org/story/26/04/02/1749205/ibm-teams-up-with-arm-to-run-arm-workloads-on-ibm-z-mainframes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Teams Up With Arm To Run Arm Workloads On IBM Z Mainframes](https://slashdot.org/story/26/04/02/1749205/ibm-teams-up-with-arm-to-run-arm-workloads-on-ibm-z-mainframes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 19:41:29](https://lobste.rs/s/fpkia4/landdown_simple_sandboxing_for_shell) - [landdown - Simple sandboxing for shell scripts](https://git.sr.ht/~marcc/landdown)
* [2026-04-02, 19:00:00](https://hardware.slashdot.org/story/26/04/02/1729200/raspberry-pi-4-3gb-launches-raspberry-pi-prices-go-up-again-due-to-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi 4 3GB Launches, Raspberry Pi Prices Go Up Again Due To RAM](https://hardware.slashdot.org/story/26/04/02/1729200/raspberry-pi-4-3gb-launches-raspberry-pi-prices-go-up-again-due-to-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 18:22:03](https://news.ycombinator.com/item?id=47618189) - [Tailscale&apos;s new macOS home](https://tailscale.com/blog/macos-notch-escape)
* [2026-04-02, 18:13:41](https://news.ycombinator.com/item?id=47618084) - [Cursor 3](https://cursor.com/blog/cursor-3)
* [2026-04-02, 18:00:00](https://tech.slashdot.org/story/26/04/02/1735238/google-announces-gemma-4-open-ai-models-switches-to-apache-20-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Gemma 4 Open AI Models, Switches To Apache 2.0 License](https://tech.slashdot.org/story/26/04/02/1735238/google-announces-gemma-4-open-ai-models-switches-to-apache-20-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 17:29:03](https://news.ycombinator.com/item?id=47617415) - [Good ideas do not need lots of lies in order to gain public acceptance (2008)](https://blog.danieldavies.com/2004/05/d-squared-digest-one-minute-mba.html)
* [2026-04-02, 17:00:00](https://science.slashdot.org/story/26/04/02/1641256/artemis-ii-astronauts-have-two-microsoft-outlooks-and-neither-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis II Astronauts Have &apos;Two Microsoft Outlooks&apos; and Neither Work](https://science.slashdot.org/story/26/04/02/1641256/artemis-ii-astronauts-have-two-microsoft-outlooks-and-neither-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 17:00:00](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss) - [Ubuntu MATE Founder Martin Wimpress Steps Back After 12 Years](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss)
* [2026-04-02, 16:35:10](https://lobste.rs/s/d5lzvy/linkedin_is_scanning_for_browser) - [LinkedIn Is Scanning for Browser Extensions](https://browsergate.eu/)
* [2026-04-02, 16:25:28](https://lobste.rs/s/8lbmm8/activating_two_trap_cards_at_once_gentle) - [Activating Two Trap Cards at Once, or: A Gentle Response to the Popularity of Vibecoding](https://gist.github.com/MostAwesomeDude/560185c24f959f6fec229739cb5a6735)
* [2026-04-02, 16:10:54](https://news.ycombinator.com/item?id=47616361) - [Google releases Gemma 4 open models](https://deepmind.google/models/gemma/gemma-4/)
* [2026-04-02, 16:00:27](https://news.ycombinator.com/item?id=47616242) - [Decisions that eroded trust in Azure – by a former Azure Core engineer](https://isolveproblems.substack.com/p/how-microsoft-vaporized-a-trillion)
* [2026-04-02, 16:00:00](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Rolls Out Its Fix For PC Gaming&apos;s &apos;Compiling Shaders&apos; Wait Times](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 15:59:49](https://lobste.rs/s/jtey8e/euro_office_onlyoffice_their_licensing) - [Euro-Office, ONLYOFFICE, and their licensing dispute](https://blog.ensko.at/2026/04/02/euro-office/)
* [2026-04-02, 15:00:00](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam On Linux Use Skyrocketed Above 5% In March](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 14:28:52](https://news.ycombinator.com/item?id=47615002) - [Qwen3.6-Plus: Towards real world agents](https://qwen.ai/blog?id=qwen3.6)
* [2026-04-02, 14:15:21](https://lobste.rs/s/va209y/jj_v0_40_0_released) - [jj v0.40.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.40.0)
* [2026-04-02, 13:09:09](https://news.ycombinator.com/item?id=47613981) - [LinkedIn is searching your browser extensions](https://browsergate.eu/)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 12:39:45](https://lobste.rs/s/adidni/reverse_engineering_crazy_taxi) - [Reverse Engineering Crazy Taxi](https://wretched.computer/post/crazytaxi)
* [2026-04-02, 11:58:52](https://lobste.rs/s/j6uemk/every_dependency_you_add_is_supply_chain) - [Every dependency you add is a supply chain attack waiting to happen](https://benhoyt.com/writings/dependencies/)
* [2026-04-02, 11:00:00](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Group Pushing Age Verification Requirements For AI Sneakily Backed By OpenAI](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 08:24:11](https://lobste.rs/s/thfvnd/pgenie_sql_first_code_generator_for) - [pGenie – SQL-first code generator for PostgreSQL (Haskell, Rust, Java)](https://pgenie.io/)
* [2026-04-02, 08:21:40](https://lobste.rs/s/idoeyr/running_out_disk_space_production) - [Running out of Disk Space in Production](https://alt-romes.github.io/posts/2026-04-01-running-out-of-disk-space-on-launch.html)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 08:01:26](https://lobste.rs/s/ovtazh/packaging_128_languages_with_nix) - [Packaging 128 languages with Nix](https://invariant.club/articles/packaging-128-programming-languages-with-nix.html)
* [2026-04-02, 07:00:00](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapid Snow Melt-Off In American West Stuns Scientists](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 03:30:00](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Files To Go Public](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
* [2026-04-02, 02:37:12](https://news.ycombinator.com/item?id=47609356) - [Artemis II&apos;s toilet is a moon mission milestone](https://www.scientificamerican.com/article/artemis-iis-toilet-is-a-moon-mission-milestone/)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 22:07:10](https://lobste.rs/s/m3b3fk/email_obfuscation_what_works_2026) - [Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)
* [2026-04-01, 21:33:58](https://lobste.rs/s/zgnphc/what_would_you_see_changed_haskell) - [What Would You See Changed in Haskell?](https://blog.haskell.org/what-would-you-see-changed-in-haskell/)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 08:41:49](https://news.ycombinator.com/item?id=47598413) - [C89cc.sh – standalone C89/ELF64 compiler in pure portable shell](https://gist.github.com/alganet/2b89c4368f8d23d033961d8a3deb5c19)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 21:43:15](https://news.ycombinator.com/item?id=47593861) - [Maze Algorithms (1997)](https://www.astrolog.org/labyrnth/algrithm.htm)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 13:00:09](https://news.ycombinator.com/item?id=47573728) - [Intel Assured Supply Chain Product Brief](https://www.intel.com/content/www/us/en/content-details/850997/intel-assured-supply-chain-product-brief.html)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
