# [News Summary](https://kherrick.github.io/news-summary/)

## Web and Software Evolution

* [The open web isn't dying. We're killing it](https://ouvre-boite.com/the-open-web-isnt-dying-were-killing-it/) - Discusses trends and challenges threatening the survival of the open web. [Comments](https://news.ycombinator.com/item?id=47622490)

* [Post Mortem: axios NPM supply chain compromise](https://github.com/axios/axios/issues/10636) - A post-mortem detailing the recent security incident involving the axios library. [Comments](https://news.ycombinator.com/item?id=47621792)

* [Decisions that eroded trust in Azure – by a former Azure Core engineer](https://isolveproblems.substack.com/p/how-microsoft-vaporized-a-trillion) - Insights from an insider on decisions that have affected trust in Microsoft's Azure platform. [Comments](https://news.ycombinator.com/item?id=47616242)

* [Euro-Office, ONLYOFFICE, and their licensing dispute](https://blog.ensko.at/2026/04/02/euro-office/) - Examines legal friction between competing open-source office solutions. [Comments](https://lobste.rs/s/jtey8e/euro_office_onlyoffice_their_licensing)

* [Every dependency you add is a supply chain attack waiting to happen](https://benhoyt.com/writings/dependencies/) - Commentary on the risks of adding dependencies to software projects. [Comments](https://lobste.rs/s/j6uemk/every_dependency_you_add_is_supply_chain)

## AI and Emerging Technologies

* [Google Announces Gemma 4 Open AI Models, Switches To Apache 2.0 License](https://tech.slashdot.org/story/26/04/02/1735238/google-announces-gemma-4-open-ai-models-switches-to-apache-20-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's latest AI model updates and related licensing changes. [Comments](https://news.ycombinator.com/item?id=47616361)

* [OpenAI Acquires Popular Tech-Industry Talk Show TBPN](https://tech.slashdot.org/story/26/04/02/211202/openai-acquires-popular-tech-industry-talk-show-tbpn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI's expansion into media with a new acquisition. [Comments](https://news.ycombinator.com/item?id=47617376)

* [I used AI. It worked. I hated it](https://taggart-tech.com/reckoning/) - Discusses the practical and philosophical challenges of using AI in everyday life. [Comments](https://lobste.rs/s/7d8dxv/i_used_ai_it_worked_i_hated_it)

* [Lemonade by AMD: a fast and open source local LLM server using GPU and NPU](https://lemonade-server.ai) - AMD introduces a new efficient solution for local large language model hosting. [Comments](https://news.ycombinator.com/item?id=47612724)

## Technology and Innovation

* [Tor Alva: The Tallest 3D-Printed Building in the World](https://cacm.acm.org/blogcacm/tor-alva-the-tallest-3d-printed-building-in-the-world/) - Exploration of new frontiers in construction technology. [Comments](https://news.ycombinator.com/item?id=47621518)

* [How we built a virtual filesystem for our Assistant](https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant) - An in-depth technical post on creating a custom virtual filesystem. [Comments](https://lobste.rs/s/orqp4v/how_we_built_virtual_filesystem_for_our)

* [Raspberry Pi 4 3GB Launches, Raspberry Pi Prices Go Up Again Due To RAM](https://hardware.slashdot.org/story/26/04/02/1729200/raspberry-pi-4-3gb-launches-raspberry-pi-prices-go-up-again-due-to-ram?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examines the implications of new hardware launches on consumer costs. [Comments](https://news.ycombinator.com/item?id=47616242)

## Unusual Trends and Concerns

* [Mount Everest Climbers 'Poisoned' By Guides In Insurance Fraud Scheme](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Uncovering corruption targeting climbers on Mount Everest. [Comments](https://news.ycombinator.com/item?id=47621438)

* [Inside Nepal's Fake Rescue Racket](https://kathmandupost.com/money/2026/03/27/inside-nepal-s-fake-rescue-racket) - A close look at predatory scams in high-altitude rescue services. [Comments](https://news.ycombinator.com/item?id=47613078)

## Historical Insights and Scientific Frontiers

* [Reverse Engineering Crazy Taxi](https://wretched.computer/post/crazytaxi) - Fascinating look into the reverse engineering process of a classic video game. [Comments](https://lobste.rs/s/adidni/reverse_engineering_crazy_taxi)

* ['Backrooms' and the Rise of the Institutional Gothic](https://thereader.mitpress.mit.edu/backrooms-and-the-rise-of-the-institutional-gothic/) - Analysis of how liminal spaces are portrayed in media and their cultural significance. [Comments](https://news.ycombinator.com/item?id=47614100)

* [Gentoo GNU/Hurd](https://www.gentoo.org/news/2026/04/01/gentoo-hurd.html) - Significant updates on this specialized Linux distribution project. [Comments](https://lobste.rs/s/hp00yw/gentoo_gnu_hurd)

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

* [2026-04-03, 02:05:20](https://news.ycombinator.com/item?id=47622490) - [The open web isn&apos;t dying. We&apos;re killing it](https://ouvre-boite.com/the-open-web-isnt-dying-were-killing-it/)
* [2026-04-03, 00:00:19](https://news.ycombinator.com/item?id=47621792) - [Post Mortem: axios NPM supply chain compromise](https://github.com/axios/axios/issues/10636)
* [2026-04-02, 23:49:34](https://lobste.rs/s/hp00yw/gentoo_gnu_hurd) - [Gentoo GNU/Hurd](https://www.gentoo.org/news/2026/04/01/gentoo-hurd.html)
* [2026-04-02, 23:39:55](https://lobste.rs/s/1urnpv/openbsd_on_motorola_88000_processors) - [OpenBSD on Motorola 88000 processors](http://miod.online.fr/software/openbsd/stories/m88k.html)
* [2026-04-02, 23:26:01](https://news.ycombinator.com/item?id=47621518) - [Tor Alva: The Tallest 3D-Printed Building in the World](https://cacm.acm.org/blogcacm/tor-alva-the-tallest-3d-printed-building-in-the-world/)
* [2026-04-02, 23:17:26](https://news.ycombinator.com/item?id=47621448) - [A Few Good Magazines From the 70s and 80s](https://www.bi6.us/CO/MG.HTML)
* [2026-04-02, 23:16:05](https://news.ycombinator.com/item?id=47621438) - [Show HN: Made a little Artemis II tracker](https://artemis-ii-tracker.com/)
* [2026-04-02, 23:00:00](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mount Everest Climbers &apos;Poisoned&apos; By Guides In Insurance Fraud Scheme](https://news.slashdot.org/story/26/04/02/2113218/mount-everest-climbers-poisoned-by-guides-in-insurance-fraud-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 22:21:24](https://news.ycombinator.com/item?id=47620933) - [Memo: A language that remembers only the last 12 lines of code](https://danieltemkin.com/Esolangs/Memo/)
* [2026-04-02, 22:13:03](https://news.ycombinator.com/item?id=47620857) - [ParadeDB (YC S23) Is Hiring Database Internal Engineers (Rust)](https://paradedb.notion.site/)
* [2026-04-02, 22:05:05](https://lobste.rs/s/veyrwi/rave_review_superpowers_for_claude_code) - [A Rave Review of Superpowers (for Claude Code)](https://emschwartz.me/a-rave-review-of-superpowers-for-claude-code/)
* [2026-04-02, 22:00:00](https://tech.slashdot.org/story/26/04/02/211202/openai-acquires-popular-tech-industry-talk-show-tbpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acquires Popular Tech-Industry Talk Show TBPN](https://tech.slashdot.org/story/26/04/02/211202/openai-acquires-popular-tech-industry-talk-show-tbpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 21:41:00](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss) - [Why October 1, 2026, Could be the Day SSL/TLS Certificates &apos;Break the Internet&apos;](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss)
* [2026-04-02, 21:00:00](https://news.slashdot.org/story/26/04/02/2052252/amazon-imposes-35-fuel-surcharge-for-many-online-merchants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Imposes 3.5% Fuel Surcharge For Many Online Merchants](https://news.slashdot.org/story/26/04/02/2052252/amazon-imposes-35-fuel-surcharge-for-many-online-merchants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 20:29:18](https://lobste.rs/s/7d8dxv/i_used_ai_it_worked_i_hated_it) - [I used AI. It worked. I hated it](https://taggart-tech.com/reckoning/)
* [2026-04-02, 20:00:00](https://slashdot.org/story/26/04/02/1749205/ibm-teams-up-with-arm-to-run-arm-workloads-on-ibm-z-mainframes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Teams Up With Arm To Run Arm Workloads On IBM Z Mainframes](https://slashdot.org/story/26/04/02/1749205/ibm-teams-up-with-arm-to-run-arm-workloads-on-ibm-z-mainframes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 19:41:29](https://lobste.rs/s/fpkia4/landdown_simple_sandboxing_for_shell) - [landdown - Simple sandboxing for shell scripts](https://git.sr.ht/~marcc/landdown)
* [2026-04-02, 19:18:59](https://lobste.rs/s/orqp4v/how_we_built_virtual_filesystem_for_our) - [How we built a virtual filesystem for our Assistant](https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant)
* [2026-04-02, 19:00:00](https://hardware.slashdot.org/story/26/04/02/1729200/raspberry-pi-4-3gb-launches-raspberry-pi-prices-go-up-again-due-to-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Raspberry Pi 4 3GB Launches, Raspberry Pi Prices Go Up Again Due To RAM](https://hardware.slashdot.org/story/26/04/02/1729200/raspberry-pi-4-3gb-launches-raspberry-pi-prices-go-up-again-due-to-ram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 18:22:03](https://news.ycombinator.com/item?id=47618189) - [Tailscale&apos;s new macOS home](https://tailscale.com/blog/macos-notch-escape)
* [2026-04-02, 18:21:08](https://news.ycombinator.com/item?id=47618176) - [George Goble has died](https://www.legacy.com/us/obituaries/wlfi/name/george-goble-obituary?id=61144779)
* [2026-04-02, 18:13:41](https://news.ycombinator.com/item?id=47618084) - [Cursor 3](https://cursor.com/blog/cursor-3)
* [2026-04-02, 18:00:00](https://tech.slashdot.org/story/26/04/02/1735238/google-announces-gemma-4-open-ai-models-switches-to-apache-20-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Announces Gemma 4 Open AI Models, Switches To Apache 2.0 License](https://tech.slashdot.org/story/26/04/02/1735238/google-announces-gemma-4-open-ai-models-switches-to-apache-20-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 17:29:03](https://news.ycombinator.com/item?id=47617415) - [Good ideas do not need lots of lies in order to gain public acceptance (2008)](https://blog.danieldavies.com/2004/05/d-squared-digest-one-minute-mba.html)
* [2026-04-02, 17:26:49](https://news.ycombinator.com/item?id=47617376) - [OpenAI Acquires TBPN](https://openai.com/index/openai-acquires-tbpn/)
* [2026-04-02, 17:00:00](https://science.slashdot.org/story/26/04/02/1641256/artemis-ii-astronauts-have-two-microsoft-outlooks-and-neither-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis II Astronauts Have &apos;Two Microsoft Outlooks&apos; and Neither Work](https://science.slashdot.org/story/26/04/02/1641256/artemis-ii-astronauts-have-two-microsoft-outlooks-and-neither-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 17:00:00](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss) - [Ubuntu MATE Founder Martin Wimpress Steps Back After 12 Years](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss)
* [2026-04-02, 16:35:10](https://lobste.rs/s/d5lzvy/linkedin_is_scanning_for_browser) - [LinkedIn Is Scanning for Browser Extensions](https://browsergate.eu/)
* [2026-04-02, 16:28:45](https://lobste.rs/s/gie57r/rewrites_bio_60x_speedup_genomics_qc_ai) - [Rewrites.bio: 60x speedup in Genomics QC + AI rewrite guidelines for Science](https://rewrites.bio/)
* [2026-04-02, 16:25:28](https://lobste.rs/s/8lbmm8/activating_two_trap_cards_at_once_gentle) - [Activating Two Trap Cards at Once, or: A Gentle Response to the Popularity of Vibecoding](https://gist.github.com/MostAwesomeDude/560185c24f959f6fec229739cb5a6735)
* [2026-04-02, 16:10:54](https://news.ycombinator.com/item?id=47616361) - [Google releases Gemma 4 open models](https://deepmind.google/models/gemma/gemma-4/)
* [2026-04-02, 16:00:27](https://news.ycombinator.com/item?id=47616242) - [Decisions that eroded trust in Azure – by a former Azure Core engineer](https://isolveproblems.substack.com/p/how-microsoft-vaporized-a-trillion)
* [2026-04-02, 16:00:00](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Rolls Out Its Fix For PC Gaming&apos;s &apos;Compiling Shaders&apos; Wait Times](https://tech.slashdot.org/story/26/04/02/042250/nvidia-rolls-out-its-fix-for-pc-gamings-compiling-shaders-wait-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 15:59:49](https://lobste.rs/s/jtey8e/euro_office_onlyoffice_their_licensing) - [Euro-Office, ONLYOFFICE, and their licensing dispute](https://blog.ensko.at/2026/04/02/euro-office/)
* [2026-04-02, 15:32:34](https://lobste.rs/s/yoq0e6/validating_hare_s_sort_module_using) - [Validating Hare’s Sort Module using Symbolic Execution](https://notes.8pit.net/notes/y7n8.html)
* [2026-04-02, 15:08:45](https://news.ycombinator.com/item?id=47615490) - [Artemis computer running two instances of MS outlook; they can&apos;t figure out why](https://bsky.app/profile/nikigrayson.com/post/3miik2wzosk25)
* [2026-04-02, 15:00:00](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steam On Linux Use Skyrocketed Above 5% In March](https://linux.slashdot.org/story/26/04/02/0350211/steam-on-linux-use-skyrocketed-above-5-in-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 14:55:39](https://lobste.rs/s/yk91rd/i_may_have_solved_long_standing_problem) - [I may have solved a long standing problem with Object Oriented systems](https://blog.mempko.com/an-abject-horror/)
* [2026-04-02, 14:28:52](https://news.ycombinator.com/item?id=47615002) - [Qwen3.6-Plus: Towards real world agents](https://qwen.ai/blog?id=qwen3.6)
* [2026-04-02, 14:15:21](https://lobste.rs/s/va209y/jj_v0_40_0_released) - [jj v0.40.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.40.0)
* [2026-04-02, 13:18:05](https://news.ycombinator.com/item?id=47614100) - [&apos;Backrooms&apos; and the Rise of the Institutional Gothic](https://thereader.mitpress.mit.edu/backrooms-and-the-rise-of-the-institutional-gothic/)
* [2026-04-02, 13:09:09](https://news.ycombinator.com/item?id=47613981) - [LinkedIn is searching your browser extensions](https://browsergate.eu/)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 12:39:45](https://lobste.rs/s/adidni/reverse_engineering_crazy_taxi) - [Reverse Engineering Crazy Taxi](https://wretched.computer/post/crazytaxi)
* [2026-04-02, 12:22:29](https://lobste.rs/s/ad1syc/evolving_node_js_release_schedule) - [Evolving the Node.js Release Schedule](https://nodejs.org/en/blog/announcements/evolving-the-nodejs-release-schedule)
* [2026-04-02, 11:58:52](https://lobste.rs/s/j6uemk/every_dependency_you_add_is_supply_chain) - [Every dependency you add is a supply chain attack waiting to happen](https://benhoyt.com/writings/dependencies/)
* [2026-04-02, 11:40:41](https://news.ycombinator.com/item?id=47613078) - [Inside Nepal&apos;s Fake Rescue Racket](https://kathmandupost.com/money/2026/03/27/inside-nepal-s-fake-rescue-racket)
* [2026-04-02, 11:22:50](https://lobste.rs/s/cuomux/martian_time_hare_2022) - [Martian time in Hare (2022)](https://harelang.org/blog/2022-08-01-martian-time-in-hare/)
* [2026-04-02, 11:04:51](https://news.ycombinator.com/item?id=47612724) - [Lemonade by AMD: a fast and open source local LLM server using GPU and NPU](https://lemonade-server.ai)
* [2026-04-02, 11:00:00](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Group Pushing Age Verification Requirements For AI Sneakily Backed By OpenAI](https://news.slashdot.org/story/26/04/02/0345206/group-pushing-age-verification-requirements-for-ai-sneakily-backed-by-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 08:24:11](https://lobste.rs/s/thfvnd/pgenie_sql_first_code_generator_for) - [pGenie – SQL-first code generator for PostgreSQL (Haskell, Rust, Java)](https://pgenie.io/)
* [2026-04-02, 08:21:40](https://lobste.rs/s/idoeyr/running_out_disk_space_production) - [Running out of Disk Space in Production](https://alt-romes.github.io/posts/2026-04-01-running-out-of-disk-space-on-launch.html)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 08:01:26](https://lobste.rs/s/ovtazh/packaging_128_languages_with_nix) - [Packaging 128 languages with Nix](https://invariant.club/articles/packaging-128-programming-languages-with-nix.html)
* [2026-04-02, 07:00:00](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapid Snow Melt-Off In American West Stuns Scientists](https://news.slashdot.org/story/26/04/02/0329240/rapid-snow-melt-off-in-american-west-stuns-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 03:30:00](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Files To Go Public](https://slashdot.org/story/26/04/01/2043248/spacex-files-to-go-public?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
* [2026-04-02, 02:37:12](https://news.ycombinator.com/item?id=47609356) - [Artemis II&apos;s toilet is a moon mission milestone](https://www.scientificamerican.com/article/artemis-iis-toilet-is-a-moon-mission-milestone/)
* [2026-04-02, 02:00:03](https://lobste.rs/s/phjtbx/python_yet_reforged_entirely) - [Python Yet Reforged Entirely](https://pyre-lang.org/)
* [2026-04-02, 00:39:26](https://news.ycombinator.com/item?id=47608602) - [The beginning of programming as we&apos;ll know it?](https://bitsplitting.org/2026/04/01/the-beginning-of-programming-as-well-know-it/)
* [2026-04-01, 23:00:00](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Launches Artemis II Astronauts Around the Moon](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 22:07:10](https://lobste.rs/s/m3b3fk/email_obfuscation_what_works_2026) - [Email obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)
* [2026-04-01, 22:00:00](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UFC-Que Choisir Takes Ubisoft To French Court Over the Crew Shutdown](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 21:33:58](https://lobste.rs/s/zgnphc/what_would_you_see_changed_haskell) - [What Would You See Changed in Haskell?](https://blog.haskell.org/what-would-you-see-changed-in-haskell/)
* [2026-04-01, 21:00:00](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Clone Open-Source Software In Minutes](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:49:53](https://lobste.rs/s/gtb0fc/game_with_programmable_space_combat) - [A game with programmable space combat written in Go](https://store.steampowered.com/app/3024370/NebuLeet)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 13:23:23](https://lobste.rs/s/pzl1g9/linear_types_proposal_for_hare) - [Linear types proposal for Hare](https://yerinalexey.srht.site/borrow/notes.html)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 08:41:49](https://news.ycombinator.com/item?id=47598413) - [C89cc.sh – standalone C89/ELF64 compiler in pure portable shell](https://gist.github.com/alganet/2b89c4368f8d23d033961d8a3deb5c19)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 21:43:15](https://news.ycombinator.com/item?id=47593861) - [Maze Algorithms (1997)](https://www.astrolog.org/labyrnth/algrithm.htm)
* [2026-03-31, 19:57:05](https://news.ycombinator.com/item?id=47592614) - [Prefer do notation over Applicative operators when assembling records (2024)](https://haskellforall.com/2024/05/prefer-do-notation-over-applicative)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 15:28:45](https://news.ycombinator.com/item?id=47575557) - [Magic the Gathering Deck Shuffler](https://mtg.jessitron.honeydemo.io/)
* [2026-03-30, 14:09:17](https://news.ycombinator.com/item?id=47574600) - [Queueing Requests Queues Your Capacity Problems, Too](https://pushtoprod.substack.com/p/queueing-requests-queues-your-capacity-problems-too)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 09:38:38](https://news.ycombinator.com/item?id=47572288) - [JSON Canvas Spec (2024)](https://jsoncanvas.org/spec/1.0/)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
