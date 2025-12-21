# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Infrastructure Advancements

* [CO2 Batteries That Store Grid Energy Take Off Globally](https://spectrum.ieee.org/co2-battery-energy-storage) - An innovative approach to energy storage, highlighting the use of CO2 batteries in the global grid.

* [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - The Tor Project announces a significant transition, moving from C programming to Rust, aiming for better security and efficiency.

* [James Webb Space Telescope Confirms 1st 'Runaway' Supermassive Black Hole](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough in space exploration, identifying the first known runaway supermassive black hole.

## Data Privacy and Security

* [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google files a lawsuit against SerpApi for allegedly illegally scraping and selling search data.

* [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - A security lapse at Home Depot exposed internal system access for an extended period.

* [Tag proposal: decentralization](https://lobste.rs/s/s8kode/tag_proposal_decentralization) - A discussion on decentralization as a tool for protecting privacy and enhancing data accessibility.

* [Waymo suspends service in San Francisco as robotaxis stall during blackout](https://techcrunch.com/2025/12/21/waymo-suspends-service-in-san-francisco-as-robotaxis-stall-during-blackout/) - Autonomous car company Waymo halts its San Francisco operations due to robotaxi failures during a blackout.

## Science and Health

* [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - Groundbreaking discovery in cancer research after five decades of attempts to create a specific compound.

* [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - Promising advancements in medication propose pill alternatives for treating gonorrhea.

* [Indoor tanning makes youthful skin much older on a genetic level](https://www.ucsf.edu/news/2025/12/431206/indoor-tanning-makes-youthful-skin-much-older-genetic-level) - UCSF researchers reveal the aging effects of indoor tanning on skin at a genetic level.

## Internet and Digital Developments

* [Mullvad VPN: "This is a Chat Control 3.0 attempt."](https://mastodon.online/@mullvadnet/115742530333573065) - VPN provider criticizes new digital policies as a threat to privacy.

* [Computational complexity of New York Times games](https://www.arxiv.org/pdf/2509.10846) - A study analyzing the algorithmic challenges in popular New York Times puzzle games.

* [Structured Outputs Create False Confidence](https://boundaryml.com/blog/structured-outputs-create-false-confidence) - Insight into how structured data outputs might lead to misleading certainty in machine learning models.

## Open Source and Development

* [E.W.Dijkstra Archive](https://www.cs.utexas.edu/~EWD/welcome.html) - Explore the extensive writings and contributions of computer science pioneer Edsger W. Dijkstra.

* [Show HN: RenderCV – Open-source CV/resume generator, YAML → PDF](https://github.com/rendercv/rendercv) - A tool for generating professional resumes from YAML files.

* [ruby website redesigned](https://www.ruby-lang.org/en/) - The Ruby programming language rolls out a major update to its official website.

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

* [2025-12-21, 18:39:46](https://news.ycombinator.com/item?id=46347080) - [Mullvad VPN: \&quot;This is a Chat Control 3.0 attempt.\&quot;](https://mastodon.online/@mullvadnet/115742530333573065)
* [2025-12-21, 18:36:20](https://lobste.rs/s/lyykk0/dumbphone_journey_eight_month_update) - [dumbphone journey -- eight month update](https://blog.frog.equipment/dumbphone-journey-eight-month-update)
* [2025-12-21, 18:19:54](https://news.ycombinator.com/item?id=46346886) - [Day laborers protest noise machines installed at Home Depot](https://www.latimes.com/california/story/2025-12-17/day-laborers-protest-noise-machines-home-depot)
* [2025-12-21, 18:09:52](https://news.ycombinator.com/item?id=46346796) - [Logging Sucks](https://loggingsucks.com/)
* [2025-12-21, 17:38:48](https://news.ycombinator.com/item?id=46346536) - [Mountain home near Aspen, built for monks, sold to Palantir CEO for $120M](https://coloradosun.com/2025/12/19/monastery-sells-palantir-ceo/)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 17:35:44](https://news.ycombinator.com/item?id=46346510) - [Waymo suspends service in San Francisco as robotaxis stall during blackout](https://techcrunch.com/2025/12/21/waymo-suspends-service-in-san-francisco-as-robotaxis-stall-during-blackout/)
* [2025-12-21, 17:29:25](https://lobste.rs/s/qoqfwz/inverse_parentheses) - [Inverse parentheses](https://kellett.im/a/inverse-parentheses)
* [2025-12-21, 17:24:22](https://lobste.rs/s/csce7j/elf_crimes_program_interpreter_fun) - [ELF Crimes: Program Interpreter Fun](https://nytpu.com/gemlog/2025-12-21)
* [2025-12-21, 17:21:05](https://news.ycombinator.com/item?id=46346391) - [Get an AI code review in 10 seconds](https://oldmanrahul.com/2025/12/19/ai-code-review-trick/)
* [2025-12-21, 16:56:57](https://lobste.rs/s/nefrtj/arin_ipv4_misissue_incident) - [ARIN IPv4 misissue incident](https://www.arin.net/announcements/20251212/)
* [2025-12-21, 16:30:09](https://news.ycombinator.com/item?id=46345975) - [ELF Crimes: Program Interpreter Fun](https://nytpu.com/gemlog/2025-12-21)
* [2025-12-21, 16:21:04](https://news.ycombinator.com/item?id=46345897) - [Show HN: Books mentioned on Hacker News in 2025](https://hackernews-readings-613604506318.us-west1.run.app)
* [2025-12-21, 16:04:05](https://news.ycombinator.com/item?id=46345745) - [Show HN: WalletWallet – create Apple passes from anything](https://walletwallet.alen.ro/)
* [2025-12-21, 15:54:45](https://lobste.rs/s/crvxnv/computational_complexity_new_york_times) - [Computational complexity of New York Times games](https://www.arxiv.org/pdf/2509.10846)
* [2025-12-21, 15:32:48](https://lobste.rs/s/vvsnhj/exploring_speculative_jit_compilation) - [Exploring Speculative JIT Compilation for Emacs Lisp with Java](https://kyo.iroiro.party/en/posts/juicemacs-exploring-jit-for-elisp/)
* [2025-12-21, 15:29:31](https://news.ycombinator.com/item?id=46345523) - [E.W.Dijkstra Archive](https://www.cs.utexas.edu/~EWD/welcome.html)
* [2025-12-21, 15:27:36](https://news.ycombinator.com/item?id=46345506) - [CO2 Batteries That Store Grid Energy Take Off Globally](https://spectrum.ieee.org/co2-battery-energy-storage)
* [2025-12-21, 15:19:41](https://news.ycombinator.com/item?id=46345444) - [ARIN Public Incident Report – 4.10 Misissuance Error](https://www.arin.net/announcements/20251212/)
* [2025-12-21, 15:07:18](https://news.ycombinator.com/item?id=46345341) - [Reasons Not to Become Famous (2020)](https://tim.blog/2020/02/02/reasons-to-not-become-famous/)
* [2025-12-21, 15:06:46](https://news.ycombinator.com/item?id=46345333) - [Structured Outputs Create False Confidence](https://boundaryml.com/blog/structured-outputs-create-false-confidence)
* [2025-12-21, 14:59:24](https://lobste.rs/s/rqub7y/you_can_t_opt_out_accessibility) - [You Can&apos;t Opt-Out of Accessibility](https://vale.rocks/posts/accessibility-importance)
* [2025-12-21, 14:45:15](https://lobste.rs/s/r5hdwa/how_i_protect_my_forgejo_instance_from_ai) - [How I protect my forgejo instance from AI Web Crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html)
* [2025-12-21, 14:35:29](https://news.ycombinator.com/item?id=46345125) - [Three Ways to Solve Problems](https://andreasfragner.com/writing/three-ways-to-solve-problems)
* [2025-12-21, 14:06:02](https://lobste.rs/s/rgpalc/atomic_time_scale_at_nist_boulder_has) - [The atomic time scale at NIST Boulder has failed](https://journa.host/@w7voa/115754351058263109)
* [2025-12-21, 13:34:16](https://lobste.rs/s/oey5qc/web_html_things_avoid_2017) - [Web/HTML things to avoid (2017)](https://www.catb.org/~esr/html-hell.html)
* [2025-12-21, 13:15:28](https://news.ycombinator.com/item?id=46344616) - [Show HN: RenderCV – Open-source CV/resume generator, YAML → PDF](https://github.com/rendercv/rendercv)
* [2025-12-21, 12:57:44](https://news.ycombinator.com/item?id=46344514) - [Coarse Is Better](https://borretti.me/article/coarse-is-better)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 12:33:11](https://news.ycombinator.com/item?id=46344381) - [Show HN: Shittp – Volatile Dotfiles over SSH](https://github.com/FOBshippingpoint/shittp)
* [2025-12-21, 12:15:59](https://news.ycombinator.com/item?id=46344270) - [Show HN: The Official National Train Map Sucked, So I Made My Own](https://www.bdzmap.com/)
* [2025-12-21, 11:53:26](https://lobste.rs/s/ascmbo/inner_platform_effect_2006) - [The Inner-Platform Effect (2006)](https://thedailywtf.com/articles/The_Inner-Platform_Effect)
* [2025-12-21, 11:51:25](https://lobste.rs/s/yyury2/mnemonics_for_hidden_controls_win32) - [Mnemonics for hidden controls in Win32](https://www.abareplace.com/blog/hidden_mnemonics/)
* [2025-12-21, 11:22:16](https://lobste.rs/s/df96zx/unix_v4_tape_running_simh_pdp11_emu_on_irix) - [The \&quot;UNIX v4 tape\&quot; running in simh PDP11 emu on IRIX](https://oldbytes.space/@flexion/115752573933914452)
* [2025-12-21, 10:48:57](https://lobste.rs/s/s8kode/tag_proposal_decentralization) - [Tag proposal: decentralization](https://lobste.rs/s/s8kode/tag_proposal_decentralization)
* [2025-12-21, 10:38:30](https://lobste.rs/s/xzxetz/polyproto_refreshingly_simple) - [polyproto: A refreshingly simple decentralised, federated protocol](https://polyproto.org/)
* [2025-12-21, 09:13:23](https://lobste.rs/s/gsndus/task_injection_exploiting_agency) - [Task Injection – Exploiting agency of autonomous AI agents](https://bughunters.google.com/blog/4823857172971520/task-injection-exploiting-agency-of-autonomous-ai-agents?)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 07:06:48](https://news.ycombinator.com/item?id=46342859) - [Ruby website redesigned](https://www.ruby-lang.org/en/)
* [2025-12-21, 05:21:42](https://news.ycombinator.com/item?id=46342447) - [Indoor tanning makes youthful skin much older on a genetic level](https://www.ucsf.edu/news/2025/12/431206/indoor-tanning-makes-youthful-skin-much-older-genetic-level)
* [2025-12-21, 05:11:59](https://lobste.rs/s/ckgvbp/shooting_myself_foot_with_git_by_accident) - [Shooting myself in the foot with Git by accident](https://utcc.utoronto.ca/~cks/space/blog/programming/GitConcurrentUsageOops)
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
* [2025-12-20, 21:27:12](https://lobste.rs/s/vdexco/granule_statically_typed_linear) - [Granule, a statically-typed linear functional language with graded modal types](https://github.com/granule-project/granule)
* [2025-12-20, 21:26:14](https://news.ycombinator.com/item?id=46339777) - [Claude in Chrome](https://claude.com/chrome)
* [2025-12-20, 21:17:47](https://lobste.rs/s/ikae1r/backing_up_spotify) - [Backing up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 21:00:05](https://news.ycombinator.com/item?id=46339600) - [Show HN: Jmail – Google Suite for Epstein files](https://www.jmail.world)
* [2025-12-20, 20:34:00](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Executive Says Their Camera Helped Find Shooting Suspect, Addresses Privacy Concerns](https://yro.slashdot.org/story/25/12/20/1940214/flock-executive-says-their-camera-helped-find-shooting-suspect-addresses-privacy-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 19:36:16](https://lobste.rs/s/8rpa2g/ruby_s_website_got_overhaul) - [Ruby&apos;s website got an overhaul](https://www.ruby-lang.org/en/)
* [2025-12-20, 19:34:00](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Military Satellites Now Maneuver, Watch Each Other, and Monitor Signals and Data](https://news.slashdot.org/story/25/12/20/0418259/military-satellites-now-maneuver-watch-each-other-and-monitor-signals-and-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 18:34:00](https://slashdot.org/story/25/12/20/0754203/subscription-captivity-when-things-you-buy-own-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Subscription Captivity&apos;: When Things You Buy Own You](https://slashdot.org/story/25/12/20/0754203/subscription-captivity-when-things-you-buy-own-you?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 18:28:41](https://news.ycombinator.com/item?id=46338339) - [Backing up Spotify](https://annas-archive.li/blog/backing-up-spotify.html)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 17:34:00](https://hardware.slashdot.org/story/25/12/20/0733202/ev-battery-swapping-startup-that-raised-330-million-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EV Battery-Swapping Startup That Raised $330 Million Files for Bankruptcy](https://hardware.slashdot.org/story/25/12/20/0733202/ev-battery-swapping-startup-that-raised-330-million-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 16:34:00](https://news.slashdot.org/story/25/12/20/0643217/firefox-will-ship-with-an-ai-kill-switch-to-completely-disable-all-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Will Ship With an &apos;AI Kill Switch&apos; To Completely Disable All AI Features](https://news.slashdot.org/story/25/12/20/0643217/firefox-will-ship-with-an-ai-kill-switch-to-completely-disable-all-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 15:43:15](https://news.ycombinator.com/item?id=46336947) - [Go ahead, self-host Postgres](https://pierce.dev/notes/go-ahead-self-host-postgres#user-content-fn-1)
* [2025-12-20, 15:34:00](https://politics.slashdot.org/story/25/12/20/0259228/pro-ai-group-launches-first-of-many-attack-ads-for-us-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-AI Group Launches First of Many Attack Ads for US Election](https://politics.slashdot.org/story/25/12/20/0259228/pro-ai-group-launches-first-of-many-attack-ads-for-us-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 13:50:26](https://lobste.rs/s/glvd20/mysterious_forces_steering_views_on) - [The Mysterious Forces Steering Views on Hacker News](https://マリウス.com/the-mysterious-forces-steering-views-on-hacker-news/)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 10:00:00](https://news.slashdot.org/story/25/12/19/2336215/trump-dismantling-national-center-for-atmospheric-research-in-colorado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Dismantling National Center For Atmospheric Research In Colorado](https://news.slashdot.org/story/25/12/19/2336215/trump-dismantling-national-center-for-atmospheric-research-in-colorado?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 07:00:00](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Webb Space Telescope Confirms 1st &apos;Runaway&apos; Supermassive Black Hole](https://science.slashdot.org/story/25/12/19/2330204/james-webb-space-telescope-confirms-1st-runaway-supermassive-black-hole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 03:30:00](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Sues SerpApi Over Scraping and Reselling Search Data](https://yro.slashdot.org/story/25/12/19/2317247/google-sues-serpapi-over-scraping-and-reselling-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-20, 01:40:00](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Moving Critical Systems Away From AWS, Google, and Microsoft Citing Data Sovereignty Concerns](https://slashdot.org/story/25/12/19/2252254/airbus-moving-critical-systems-away-from-aws-google-and-microsoft-citing-data-sovereignty-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 01:00:00](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stanford Computer Science Grads Find Their Degrees No Longer Guarantee Jobs](https://developers.slashdot.org/story/25/12/19/236259/stanford-computer-science-grads-find-their-degrees-no-longer-guarantee-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-20, 00:20:00](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ten Mistakes Marred Firewall Upgrade At Australian Telco, Contributing To Two Deaths](https://it.slashdot.org/story/25/12/19/2241221/ten-mistakes-marred-firewall-upgrade-at-australian-telco-contributing-to-two-deaths?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2025-12-17, 11:54:26](https://news.ycombinator.com/item?id=46300957) - [Decompiling the New C# 14 field Keyword](https://blog.ivankahl.com/decompiling-the-new-csharp-14-field-keyword/)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
