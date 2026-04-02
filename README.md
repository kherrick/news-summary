# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Science and Technology

* [Rewrites.bio: 60x speedup in Genomics QC + AI rewrite guidelines for Science](https://rewrites.bio/) - Researchers at Rewrites.bio have claimed a significant breakthrough in genomics quality control by introducing a process that is 60x faster and enhanced by AI-driven rewrite guidelines. [Comments](https://lobste.rs/s/gie57r/rewrites_bio_60x_speedup_genomics_qc_ai)

* [World's smallest QR code, smaller than bacteria, could store data for centuries](https://soylentnews.org/article.pl?sid=26/03/31/1354212&from=rss) - Scientific advancement has led to the development of an ultra-tiny QR code—microscopic but with immense data-storing capability that could last through the ages. [Comments](https://soylentnews.org/article.pl?sid=26/03/31/1354212&from=rss)

* [Quantum computing bombshells that are not April Fools](https://scottaaronson.blog/?p=9665) - Renowned computer scientist Scott Aaronson dives into breaking developments in the quantum computing sector that are shaking up the field. [Comments](https://news.ycombinator.com/item?id=47608495)

* [Nvidia Rolls Out Its Fix For PC Gaming's 'Compiling Shaders' Wait Times](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Nvidia introduces a fix addressing frustrating shader compilation wait times in PC gaming, a long-standing issue for players. [Comments](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Artemis II will use laser beams to live-stream 4K moon footage at 260 Mbps](https://www.tomshardware.com/networking/artemis-ii-will-use-laser-beams-to-live-stream-4k-moon-footage-one-giant-step-beyond-the-s-band-radio-comms-of-the-apollo-era) - NASA's Artemis II mission announces plans to utilize laser communication technology to transmit high-definition live footage from the Moon at unprecedented speeds. [Comments](https://news.ycombinator.com/item?id=47615449)

## Ethics and Challenges in Technology

* [LinkedIn Is Illegally Searching Your Computer](https://browsergate.eu/) - Alarming allegations surface against LinkedIn for purportedly conducting unauthorized searches on users' devices. [Comments](https://news.ycombinator.com/item?id=47613981)

* [Delve allegedly forked an open-source tool and sold it as its own](https://techcrunch.com/2026/04/01/the-reputation-of-troubled-yc-startup-delve-has-gotten-even-worse/) - Accusations emerge against YC startup Delve for turning an open-source tool into a proprietary product for sale, raising concerns about ethical practices in software development. [Comments](https://news.ycombinator.com/item?id=47615434)

* [Every dependency you add is a supply chain attack waiting to happen](https://benhoyt.com/writings/dependencies/) - A cautionary tale about the inherent risks associated with adding dependencies to software projects. [Comments](https://lobste.rs/s/j6uemk/every_dependency_you_add_is_supply_chain)

* [Inside Nepal's Fake Rescue Racket](https://kathmandupost.com/money/2026/03/27/inside-nepal-s-fake-rescue-racket) - A detailed investigation uncovers a scandal where fake rescues are being staged to exploit trekkers in Nepal. [Comments](https://news.ycombinator.com/item?id=47613078)

## Open Source and Innovation

* [Reverse Engineering Crazy Taxi](https://wretched.computer/post/crazytaxi) - An in-depth analysis and findings from reverse-engineering the classic video game Crazy Taxi. [Comments](https://lobste.rs/s/adidni/reverse_engineering_crazy_taxi)

* [Overview of pGenie—SQL-first code generator for PostgreSQL (Haskell, Rust, Java)](https://pgenie.io/) - A newly introduced SQL-first code generator offers practical solutions for developers using PostgreSQL in Haskell, Rust, or Java projects. [Comments](https://lobste.rs/s/thfvnd/pgenie_sql_first_code_generator_for)

## Key Editorial Pieces and Ideas

* [Activating Two Trap Cards at Once, or: A Gentle Response to the Popularity of Vibecoding](https://gist.github.com/MostAwesomeDude/560185c24f959f6fec229739cb5a6735) - A philosophical exploration of trends in IT and the rise of 'vibecoding' culture. [Comments](https://lobste.rs/s/8lbmm8/activating_two_trap_cards_at_once_gentle)

* [Sweden goes back to basics, swapping screens for books in the classroom](https://undark.org/2026/04/01/sweden-schools-books/) - Sweden adopts an educational shift to prioritize traditional learning methods using books over digital tools. [Comments](https://news.ycombinator.com/item?id=47612601)

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

* [2026-04-02, 16:28:45](https://lobste.rs/s/gie57r/rewrites_bio_60x_speedup_genomics_qc_ai) - [Rewrites.bio: 60x speedup in Genomics QC + AI rewrite guidelines for Science](https://rewrites.bio/)
* [2026-04-02, 16:25:28](https://lobste.rs/s/8lbmm8/activating_two_trap_cards_at_once_gentle) - [Activating Two Trap Cards at Once, or: A Gentle Response to the Popularity of Vibecoding](https://gist.github.com/MostAwesomeDude/560185c24f959f6fec229739cb5a6735)
* [2026-04-02, 16:00:00](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Rolls Out Its Fix For PC Gaming&apos;s &apos;Compiling Shaders&apos; Wait Times](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 15:59:49](https://lobste.rs/s/jtey8e/euro_office_onlyoffice_their_licensing) - [Euro-Office, ONLYOFFICE, and their licensing dispute](https://blog.ensko.at/2026/04/02/euro-office/)
* [2026-04-02, 15:08:45](https://news.ycombinator.com/item?id=47615490) - [Artemis computer running two instances of MS outlook; they can&apos;t figure out why](https://bsky.app/profile/nikigrayson.com/post/3miik2wzosk25)
* [2026-04-02, 15:04:44](https://news.ycombinator.com/item?id=47615449) - [Artemis II will use laser beams to live-stream 4K moon footage at 260 Mbps](https://www.tomshardware.com/networking/artemis-ii-will-use-laser-beams-to-live-stream-4k-moon-footage-one-giant-step-beyond-the-s-band-radio-comms-of-the-apollo-era)
* [2026-04-02, 15:03:08](https://news.ycombinator.com/item?id=47615434) - [Delve allegedly forked an open-source tool and sold it as its own](https://techcrunch.com/2026/04/01/the-reputation-of-troubled-yc-startup-delve-has-gotten-even-worse/)
* [2026-04-02, 15:00:00](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam On Linux Use Skyrocketed Above 5% In March](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 14:55:39](https://lobste.rs/s/yk91rd/i_may_have_solved_long_standing_problem) - [I may have solved a long standing problem with Object Oriented systems](https://blog.mempko.com/an-abject-horror/)
* [2026-04-02, 14:28:52](https://news.ycombinator.com/item?id=47615002) - [Qwen3.6-Plus: Towards Real World Agents](https://qwen.ai/blog?id=qwen3.6)
* [2026-04-02, 14:15:21](https://lobste.rs/s/va209y/jj_v0_40_0_released) - [jj v0.40.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.40.0)
* [2026-04-02, 13:53:55](https://lobste.rs/s/sc5cbx/quick_look_at_pledge_open_2) - [A quick look at __pledge_open(2)](https://dustri.org/b/a-quick-look-at-__pledge_open2.html)
* [2026-04-02, 13:18:05](https://news.ycombinator.com/item?id=47614100) - [&apos;Backrooms&apos; and the Rise of the Institutional Gothic](https://thereader.mitpress.mit.edu/backrooms-and-the-rise-of-the-institutional-gothic/)
* [2026-04-02, 13:09:09](https://news.ycombinator.com/item?id=47613981) - [LinkedIn Is Illegally Searching Your Computer](https://browsergate.eu/)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 12:39:45](https://lobste.rs/s/adidni/reverse_engineering_crazy_taxi) - [Reverse Engineering Crazy Taxi](https://wretched.computer/post/crazytaxi)
* [2026-04-02, 12:22:29](https://lobste.rs/s/ad1syc/evolving_node_js_release_schedule) - [Evolving the Node.js Release Schedule](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule)
* [2026-04-02, 11:58:52](https://lobste.rs/s/j6uemk/every_dependency_you_add_is_supply_chain) - [Every dependency you add is a supply chain attack waiting to happen](https://benhoyt.com/writings/dependencies/)
* [2026-04-02, 11:40:41](https://news.ycombinator.com/item?id=47613078) - [Inside Nepal&apos;s Fake Rescue Racket](https://kathmandupost.com/money/2026/03/27/inside-nepal-s-fake-rescue-racket)
* [2026-04-02, 11:22:50](https://lobste.rs/s/cuomux/martian_time_hare) - [Martian time in Hare](https://harelang.org/blog/2022-08-01-martian-time-in-hare/)
* [2026-04-02, 11:11:27](https://news.ycombinator.com/item?id=47612775) - [The SpaceX IPO: retail investor notes](https://report.bearblog.dev/the-spacex-ipo-will-be-the-perfect-storm-of-retail-investor-fallacies/)
* [2026-04-02, 11:04:51](https://news.ycombinator.com/item?id=47612724) - [Lemonade by AMD: a fast and open source local LLM server using GPU and NPU](https://lemonade-server.ai)
* [2026-04-02, 11:00:00](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Group Pushing Age Verification Requirements For AI Sneakily Backed By OpenAI](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 10:50:00](https://news.ycombinator.com/item?id=47612601) - [Sweden goes back to basics, swapping screens for books in the classroom](https://undark.org/2026/04/01/sweden-schools-books/)
* [2026-04-02, 10:42:23](https://news.ycombinator.com/item?id=47612558) - [Enabling Codex to Analyze Two Decades of Hacker News Data](https://modolap.com/publication/hn-analysis-1)
* [2026-04-02, 10:07:57](https://news.ycombinator.com/item?id=47612321) - [Show HN: I built a DNS resolver from scratch in Rust – no DNS libraries](https://github.com/razvandimescu/numa)
* [2026-04-02, 09:14:18](https://news.ycombinator.com/item?id=47611921) - [Significant Raise of Reports](https://lwn.net/Articles/1065620/)
* [2026-04-02, 08:48:44](https://news.ycombinator.com/item?id=47611721) - [IBM Announces Strategic Collaboration with Arm](https://newsroom.ibm.com/2026-04-02-ibm-announces-strategic-collaboration-with-arm-to-shape-the-future-of-enterprise-computing)
* [2026-04-02, 08:24:11](https://lobste.rs/s/thfvnd/pgenie_sql_first_code_generator_for) - [pGenie – SQL-first code generator for PostgreSQL (Haskell, Rust, Java)](https://pgenie.io/)
* [2026-04-02, 08:21:40](https://lobste.rs/s/idoeyr/running_out_disk_space_production) - [Running out of Disk Space in Production](https://alt-romes.github.io/posts/2026-04-01-running-out-of-disk-space-on-launch.html)
* [2026-04-02, 08:19:11](https://news.ycombinator.com/item?id=47611481) - [Bringing Clojure programming to Enterprise (2021)](https://blogit.michelin.io/clojure-programming/)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 08:01:26](https://lobste.rs/s/ovtazh/packaging_128_languages_with_nix) - [Packaging 128 languages with Nix](https://invariant.club/articles/packaging-128-programming-languages-with-nix.html)
* [2026-04-02, 07:17:50](https://news.ycombinator.com/item?id=47611044) - [Telli (YC F24) is hiring engineers, designers, and more (on-site, Berlin)](http://hi.telli.com/join-us)
* [2026-04-02, 07:00:00](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapid Snow Melt-Off In American West Stuns Scientists](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 06:01:22](https://lobste.rs/s/es2tfh/libinput_hit_by_worrying_security_issues) - [Libinput Hit By Worrying Security Issues With Its Lua Plug-In System](https://www.phoronix.com/news/Libinput-Lua-Security-Issues)
* [2026-04-02, 04:08:05](https://news.ycombinator.com/item?id=47609882) - [Subscription bombing and how to mitigate it](https://bytemash.net/posts/subscription-bombing-your-signup-form-is-a-weapon/)
* [2026-04-02, 03:35:33](https://news.ycombinator.com/item?id=47609694) - [Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)
* [2026-04-02, 03:30:00](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Files To Go Public](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 03:13:50](https://lobste.rs/s/mrtzbt/quantum_computing_bombshells_are_not) - [Quantum computing bombshells that are not April Fools](https://scottaaronson.blog/?p=9665)
* [2026-04-02, 03:12:24](https://news.ycombinator.com/item?id=47609564) - [Steam on Linux Use Skyrocketed Above 5% in March](https://www.phoronix.com/news/Steam-On-Linux-Tops-5p)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
* [2026-04-02, 02:00:03](https://lobste.rs/s/phjtbx/python_yet_reforged_entirely) - [Python Yet Reforged Entirely](https://pyre-lang.org/)
* [2026-04-02, 00:24:43](https://news.ycombinator.com/item?id=47608495) - [Quantum computing bombshells that are not April Fools](https://scottaaronson.blog/?p=9665)
* [2026-04-01, 23:35:02](https://news.ycombinator.com/item?id=47608058) - [A new C++ back end for ocamlc](https://github.com/ocaml/ocaml/pull/14701)
* [2026-04-01, 23:00:00](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Launches Artemis II Astronauts Around the Moon](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 22:07:10](https://lobste.rs/s/m3b3fk/email_obfuscation_what_works_2026) - [Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)
* [2026-04-01, 22:00:00](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UFC-Que Choisir Takes Ubisoft To French Court Over the Crew Shutdown](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 21:36:41](https://news.ycombinator.com/item?id=47606840) - [DRAM pricing is killing the hobbyist SBC market](https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/)
* [2026-04-01, 21:33:58](https://lobste.rs/s/zgnphc/what_would_you_see_changed_haskell) - [What Would You See Changed in Haskell?](https://blog.haskell.org/what-would-you-see-changed-in-haskell/)
* [2026-04-01, 21:00:00](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Clone Open-Source Software In Minutes](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 20:00:00](https://tech.slashdot.org/story/26/04/01/1935240/cloudflare-announces-emdash-as-open-source-spiritual-successor-to-wordpress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Announces EmDash As Open-Source &apos;Spiritual Successor&apos; To WordPress](https://tech.slashdot.org/story/26/04/01/1935240/cloudflare-announces-emdash-as-open-source-spiritual-successor-to-wordpress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 19:18:25](https://lobste.rs/s/h9zb89/git_bayesect_bayesian_git_bisect) - [git_bayesect: Bayesian git bisect](https://github.com/hauntsaninja/git_bayesect)
* [2026-04-01, 19:00:00](https://news.slashdot.org/story/26/04/01/1557223/sweden-swaps-screens-for-books-in-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sweden Swaps Screens For Books In the Classroom](https://news.slashdot.org/story/26/04/01/1557223/sweden-swaps-screens-for-books-in-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 18:19:30](https://lobste.rs/s/xcknxz/indexical_private_local_first_memory_for) - [Indexical: Private, local-first memory for everything you read on the web](https://github.com/deejayy/indexical)
* [2026-04-01, 18:00:00](https://news.slashdot.org/story/26/04/01/1516246/onlyoffice-suspends-nextcloud-partnership-for-forking-its-project-without-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyOffice Suspends Nextcloud Partnership For Forking Its Project Without Approval](https://news.slashdot.org/story/26/04/01/1516246/onlyoffice-suspends-nextcloud-partnership-for-forking-its-project-without-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:49:53](https://lobste.rs/s/gtb0fc/game_with_programmable_space_combat) - [A game with programmable space combat written in Go](https://store.steampowered.com/app/3024370/NebuLeet)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 17:11:31](https://news.ycombinator.com/item?id=47603657) - [Artemis II Launch Day Updates](https://www.nasa.gov/blogs/missions/2026/04/01/live-artemis-ii-launch-day-updates/)
* [2026-04-01, 17:00:00](https://developers.slashdot.org/story/26/04/01/158240/anthropic-issues-copyright-takedown-requests-to-remove-8000-copies-of-claude-code-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Issues Copyright Takedown Requests To Remove 8,000+ Copies of Claude Code Source Code](https://developers.slashdot.org/story/26/04/01/158240/anthropic-issues-copyright-takedown-requests-to-remove-8000-copies-of-claude-code-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 16:14:38](https://news.ycombinator.com/item?id=47602832) - [EmDash – A spiritual successor to WordPress that solves plugin security](https://blog.cloudflare.com/emdash-wordpress/)
* [2026-04-01, 16:00:00](https://slashdot.org/story/26/04/01/0619250/ceo-of-americas-largest-public-hospital-system-says-hes-ready-to-replace-radiologists-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEO of America&apos;s Largest Public Hospital System Says He&apos;s Ready To Replace Radiologists With AI](https://slashdot.org/story/26/04/01/0619250/ceo-of-americas-largest-public-hospital-system-says-hes-ready-to-replace-radiologists-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 15:00:00](https://tech.slashdot.org/story/26/04/01/064244/robotaxi-outage-in-china-leaves-passengers-stranded-on-highways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robotaxi Outage In China Leaves Passengers Stranded On Highways](https://tech.slashdot.org/story/26/04/01/064244/robotaxi-outage-in-china-leaves-passengers-stranded-on-highways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 13:23:23](https://lobste.rs/s/pzl1g9/linear_types_proposal_for_hare) - [Linear types proposal for Hare](https://yerinalexey.srht.site/borrow/notes.html)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 11:00:00](https://science.slashdot.org/story/26/04/01/0553228/startup-pitches-brainless-clones-to-serve-the-role-of-backup-human-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Pitches &apos;Brainless Clones&apos; To Serve the Role of Backup Human Bodies](https://science.slashdot.org/story/26/04/01/0553228/startup-pitches-brainless-clones-to-serve-the-role-of-backup-human-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 09:55:03](https://lobste.rs/s/oox3oi/css_bs) - [CSS or BS?](https://www.keithcirkel.co.uk/css-or-bs)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 06:07:52](https://lobste.rs/s/6gqiqy/self_cancelling_subscription) - [The Self-Cancelling Subscription](https://predr.ag/blog/the-self-cancelling-subscription/)
* [2026-04-01, 04:14:41](https://news.ycombinator.com/item?id=47596739) - [Mercor says it was hit by cyberattack tied to compromise LiteLLM](https://techcrunch.com/2026/03/31/mercor-says-it-was-hit-by-cyberattack-tied-to-compromise-of-open-source-litellm-project/)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 22:55:39](https://lobste.rs/s/6c8cwq/reading_leaked_claude_code_source_code) - [Reading leaked Claude Code source code](https://lr0.org/blog/p/claude-code-source/)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 14:44:33](https://news.ycombinator.com/item?id=47588103) - [On the trail of ancient art, deep in the Sahara](https://www.ft.com/content/524ed21e-5c35-489e-ae0b-90d40b4cf28a)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 05:11:39](https://news.ycombinator.com/item?id=47582987) - [Gone (Almost) Phishin&apos;](https://ma.tt/2026/03/gone-almost-phishin/)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-30, 21:30:04](https://news.ycombinator.com/item?id=47579942) - [Built a cheap DIY fan controller because my motherboard never had working PWM](https://www.himthe.dev/blog/msi-forgot-my-fans)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 14:32:04](https://news.ycombinator.com/item?id=47563486) - [Emacs-libgterm: Terminal emulator for Emacs using libghostty-vt](https://github.com/rwc9u/emacs-libgterm)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
