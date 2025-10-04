# [News Summary](https://kherrick.github.io/news-summary/)

## Innovation in Technology and AI

* [Scientists Grow Mini Human Brains To Power Computers](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration into the use of lab-grown tiny human brains to power advanced computational systems.

* [Cloudflare Introduces NET Dollar stable coin](https://www.cloudflare.com/en-au/press/press-releases/2025/cloudflare-introduces-net-dollar-to-support-a-new-business-model-for-the-ai-driven-internet/) - Cloudflare announces its stablecoin 'NET Dollar', developed for the AI-driven economy.

* [Google's Jules Enters Developers' Toolchains As AI Coding Agent Competition Heats Up](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tech companies compete in AI development tools with Google's new AI coding agent 'Jules'.

* [Signal Braces For Quantum Age With SPQR Encryption Upgrade](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Signal's new encryption upgrade prepares for future quantum computing threats.

* [OpenAI Becomes World's Most Valuable Startup After $500 Billion Valuation](https://news.slashdot.org/story/25/10/03/2120259/openai-becomes-worlds-most-valuable-startup-after-500-billion-valuation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI dethrones competitors as the world's most valuable startup.

* [Scientist Unlock Secrets to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&from=rss) - Scientific discovery dives deep into the chemistry of creating better beer foams.

## Programming and Development Trends

* [Delimited continuations in lone lisp](https://www.matheusmoreira.com/articles/delimited-continuations-in-lone-lisp) - A technical study on implementing delimited continuations in Lisp.

* [How functional programming shaped and twisted front end development](https://alfy.blog/2025/10/04/how-functional-programming-shaped-modern-frontend.html) - Insights on how functional programming has influenced modern front-end development practices.

* [PEP 810: Explicit lazy imports](https://peps.python.org/pep-0810/) - A detailed discussion on Python Enhancement Proposal 810 for implementing lazy imports.

* [Cancelling async Rust](https://sunshowers.io/posts/cancelling-async-rust/) - Challenges and reflections on handling async process cancellation in the Rust programming language.

* [Atuin desktop: Runbooks that run](https://github.com/atuinsh/desktop) - A new tool for automated and interactive desktop tasks using runbooks.

* [How We're Redesigning Audacity for the Future](https://youtu.be/QYM3TWf_G38) - Bold redesign aspirations for the popular open-source audio platform Audacity.

## Emerging Trends in Cybersecurity and Privacy

* [Amazon's Ring Plans to Scan Everyone's Face at the Door](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The implications of Amazon's purported plan to integrate facial scanning in doorbell devices.

* [Toyota runs a car-hacking event to boost security (2024)](https://toyotatimes.jp/en/spotlights/1061.html) - Toyota's proactive approach to enhancing vehicle cybersecurity through hackathons.

* [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&from=rss) - A critical Linux vulnerability in the sudo command prompt urgent warnings by CISA.

* [Asked to do something illegal at work? Here's what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/) - Real anecdotes about software engineers encountering ethical dilemmas in the workplace.

* [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&from=rss) - Controversial plans for the Immigration agency to acquire powerful tracking software.

## Remarkable Scientific Discoveries

* [A Comparison of Ada and Rust, Using Solutions to the Advent of Code](https://github.com/johnperry-math/AoC2023/blob/master/More_Detailed_Comparison.md) - Evaluating Ada versus Rust languages using geeky puzzles to analyze performance.

* [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1463503) - A NASA orbit threresults reveal cool andbackside temperatures variation remat satellite electro..

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

* [2025-10-04, 15:40:05](https://lobste.rs/s/39qa6r/stone_tools_exploring_retro) - [Stone Tools: Exploring retro productivity software from the 8/16-bit era](https://stonetools.ghost.io/)
* [2025-10-04, 15:34:00](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Grow Mini Human Brains To Power Computers](https://science.slashdot.org/story/25/10/04/0729235/scientists-grow-mini-human-brains-to-power-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 15:30:56](https://lobste.rs/s/koy025/delimited_continuations_lone_lisp) - [Delimited continuations in lone lisp](https://www.matheusmoreira.com/articles/delimited-continuations-in-lone-lisp)
* [2025-10-04, 15:10:49](https://news.ycombinator.com/item?id=45473861) - [A Comparison of Ada and Rust, Using Solutions to the Advent of Code](https://github.com/johnperry-math/AoC2023/blob/master/More_Detailed_Comparison.md)
* [2025-10-04, 15:09:41](https://news.ycombinator.com/item?id=45473852) - [How I influence tech company politics as a staff software engineer](https://www.seangoedecke.com/how-to-influence-politics/)
* [2025-10-04, 14:34:00](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Ring Plans to Scan Everyone&apos;s Face at the Door](https://yro.slashdot.org/story/25/10/04/0357255/amazons-ring-plans-to-scan-everyones-face-at-the-door?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 14:31:58](https://news.ycombinator.com/item?id=45473581) - [A Mac-like experience on Linux](https://pointieststick.com/2025/10/04/a-mac-like-experience-on-linux/)
* [2025-10-04, 14:23:01](https://lobste.rs/s/sqe654/game_development_history_industry) - [Game Development: History, Industry, and Engine Design](https://spiiin.github.io/blog/490626496/)
* [2025-10-04, 13:33:00](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss) - [Scientists Catch a Shark Threesome on Camera](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss)
* [2025-10-04, 13:20:15](https://news.ycombinator.com/item?id=45473126) - [It&apos;s not a hack to satisfy known requirements](https://charemza.name/blog/posts/agile/over-engineering/not-a-hack-to-meet-requirements/)
* [2025-10-04, 13:06:32](https://news.ycombinator.com/item?id=45473033) - [Circular Financing: Does Nvidia&apos;s $110B Bet Echo the Telecom Bubble?](https://tomtunguz.com/nvidia_nortel_vendor_financing_comparison/)
* [2025-10-04, 13:04:15](https://news.ycombinator.com/item?id=45473019) - [How functional programming shaped and twisted front end development](https://alfy.blog/2025/10/04/how-functional-programming-shaped-modern-frontend.html)
* [2025-10-04, 12:38:07](https://lobste.rs/s/by9vog/oswald_object_storage_write_ahead_log) - [OSWALD - Object Storage Write-Ahead Log Device](https://nvartolomei.com/oswald/)
* [2025-10-04, 12:16:37](https://news.ycombinator.com/item?id=45472765) - [Thunderscan: A clever device transforms a printer into a scanner (2004)](https://www.folklore.org/Thunderscan.html)
* [2025-10-04, 12:15:49](https://lobste.rs/s/f9vq85/thunderscan_clever_device_transforms) - [Thunderscan: A clever device transforms a printer into a scanner](https://www.folklore.org/Thunderscan.html)
* [2025-10-04, 11:58:58](https://news.ycombinator.com/item?id=45472678) - [The Buchstabenmuseum Berlin is closing](https://www.buchstabenmuseum.de/en/)
* [2025-10-04, 10:38:06](https://news.ycombinator.com/item?id=45472319) - [Paged Out Issue #7 [pdf]](https://pagedout.institute/download/PagedOut_007.pdf)
* [2025-10-04, 10:36:55](https://lobste.rs/s/dvtmwq/paged_out_issue_7) - [Paged Out! Issue #7](https://pagedout.institute/download/PagedOut_007.pdf)
* [2025-10-04, 08:07:00](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)
* [2025-10-04, 08:02:48](https://news.ycombinator.com/item?id=45471573) - [Cloudflare Introduces NET Dollar stable coin](https://www.cloudflare.com/en-au/press/press-releases/2025/cloudflare-introduces-net-dollar-to-support-a-new-business-model-for-the-ai-driven-internet/)
* [2025-10-04, 07:00:00](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Signal Braces For Quantum Age With SPQR Encryption Upgrade](https://it.slashdot.org/story/25/10/03/234236/signal-braces-for-quantum-age-with-spqr-encryption-upgrade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 06:49:58](https://news.ycombinator.com/item?id=45471136) - [Alibaba cloud FPGA: the $200 Kintex UltraScale+](https://essenceia.github.io/projects/alibaba_cloud_fpga/)
* [2025-10-04, 06:23:52](https://lobste.rs/s/dvke0c/you_can_t_parse_xml_with_regex_let_s_do_it) - [You can&apos;t parse XML with regex. Let&apos;s do it anyways](https://sdomi.pl/weblog/26-nobody-here-is-free-of-sin/)
* [2025-10-04, 04:01:00](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss) - [The Armed Forces of Austria Upgrade to LibreOffice and the OpenDocument Format](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss)
* [2025-10-04, 03:55:32](https://lobste.rs/s/vqm0yu/getting_better_at_software_engineering) - [Getting better at software engineering](https://madhadron.com/getting_better_at_programming.html)
* [2025-10-04, 03:30:00](https://yro.slashdot.org/story/25/10/03/231243/indonesia-suspends-tiktok-registration-with-over-100-million-accounts-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indonesia Suspends TikTok Registration With Over 100 Million Accounts At Risk](https://yro.slashdot.org/story/25/10/03/231243/indonesia-suspends-tiktok-registration-with-over-100-million-accounts-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 03:11:28](https://news.ycombinator.com/item?id=45470206) - [Toyota runs a car-hacking event to boost security (2024)](https://toyotatimes.jp/en/spotlights/1061.html)
* [2025-10-04, 02:02:00](https://tech.slashdot.org/story/25/10/03/2248228/google-is-ending-gmailify-and-pop-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Ending Gmailify and POP Support](https://tech.slashdot.org/story/25/10/03/2248228/google-is-ending-gmailify-and-pop-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 01:53:48](https://lobste.rs/s/5u9gm7/don_t_parse_call) - [Don&apos;t Parse, Call](https://timkellogg.me/blog/2025/10/03/functions)
* [2025-10-04, 01:25:00](https://meta.slashdot.org/story/25/10/03/2235209/bay-area-university-issues-warning-over-man-using-meta-ai-glasses-on-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area University Issues Warning Over Man Using Meta AI Glasses On Campus](https://meta.slashdot.org/story/25/10/03/2235209/bay-area-university-issues-warning-over-man-using-meta-ai-glasses-on-campus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 01:09:37](https://news.ycombinator.com/item?id=45469579) - [New antibiotic targets IBD and AI predicted how it would work](https://healthsci.mcmaster.ca/new-antibiotic-targets-ibd-and-ai-predicted-how-it-would-work-before-scientists-could-prove-it/)
* [2025-10-04, 00:47:00](https://lobste.rs/s/6gfkgq/how_we_re_redesigning_audacity_for_future) - [How We&apos;re Redesigning Audacity For The Future](https://youtu.be/QYM3TWf_G38)
* [2025-10-04, 00:45:00](https://yro.slashdot.org/story/25/10/03/2224246/sec-approves-texas-stock-exchange?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Approves Texas Stock Exchange](https://yro.slashdot.org/story/25/10/03/2224246/sec-approves-texas-stock-exchange?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 00:18:52](https://lobste.rs/s/8gircn/utf_8_explained_simply_nic_barker) - [UTF-8, explained simply - Nic Barker](https://www.youtube.com/watch?v=vpSkBV5vydg)
* [2025-10-04, 00:02:00](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Jules Enters Developers&apos; Toolchains As AI Coding Agent Competition Heats Up](https://developers.slashdot.org/story/25/10/03/2140223/googles-jules-enters-developers-toolchains-as-ai-coding-agent-competition-heats-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 23:20:00](https://mobile.slashdot.org/story/25/10/03/2131218/thwarted-plot-to-cripple-cell-service-in-ny-was-bigger-than-first-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thwarted Plot To Cripple Cell Service In NY Was Bigger Than First Thought](https://mobile.slashdot.org/story/25/10/03/2131218/thwarted-plot-to-cripple-cell-service-in-ny-was-bigger-than-first-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 23:18:00](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss) - [NASA Boss Says US Should Have ‘Village’ on Moon in a Decade](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss)
* [2025-10-03, 22:46:44](https://lobste.rs/s/d9varu/zig_builds_are_getting_faster) - [Zig Builds Are Getting Faster](https://mitchellh.com/writing/zig-builds-getting-faster)
* [2025-10-03, 22:45:28](https://news.ycombinator.com/item?id=45468698) - [Zig builds are getting faster](https://mitchellh.com/writing/zig-builds-getting-faster)
* [2025-10-03, 22:40:00](https://news.slashdot.org/story/25/10/03/2120259/openai-becomes-worlds-most-valuable-startup-after-500-billion-valuation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Becomes World&apos;s Most Valuable Startup After $500 Billion Valuation](https://news.slashdot.org/story/25/10/03/2120259/openai-becomes-worlds-most-valuable-startup-after-500-billion-valuation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 22:28:59](https://lobste.rs/s/efuao3/pep_810_explicit_lazy_imports_peps_python) - [PEP 810 – Explicit lazy imports | peps.python.org](https://peps.python.org/pep-0810/)
* [2025-10-03, 22:02:00](https://developers.slashdot.org/story/25/10/03/2027237/google-confirms-android-dev-verification-will-have-free-and-paid-tiers-no-public-list-of-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Confirms Android Dev Verification Will Have Free and Paid Tiers, No Public List of Devs](https://developers.slashdot.org/story/25/10/03/2027237/google-confirms-android-dev-verification-will-have-free-and-paid-tiers-no-public-list-of-devs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 21:22:00](https://news.slashdot.org/story/25/10/03/166218/hotel-prices-lead-countries-to-consider-skipping-cop30-climate-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hotel Prices Lead Countries To Consider Skipping COP30 Climate Summit](https://news.slashdot.org/story/25/10/03/166218/hotel-prices-lead-countries-to-consider-skipping-cop30-climate-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 21:12:39](https://lobste.rs/s/wqrwdw/end_tt_rss_org) - [The end of tt-rss.org](https://community.tt-rss.org/t/the-end-of-tt-rss-org/7164)
* [2025-10-03, 20:41:00](https://games.slashdot.org/story/25/10/03/1537231/microsoft-is-about-to-launch-free-xbox-cloud-gaming-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft is About To Launch Free Xbox Cloud Gaming With Ads](https://games.slashdot.org/story/25/10/03/1537231/microsoft-is-about-to-launch-free-xbox-cloud-gaming-with-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 20:36:21](https://lobste.rs/s/pgr2i6/modernizing_gnome) - [Modernizing GNOME](https://www.youtube.com/watch?v=uCAlzx_x6rY)
* [2025-10-03, 20:36:07](https://lobste.rs/s/vky3qn/fssimu2_fast_ssimulacra2) - [fssimu2: Fast SSIMULACRA2 implementation in Zig](https://github.com/gianni-rosato/fssimu2)
* [2025-10-03, 20:36:03](https://news.ycombinator.com/item?id=45467500) - [Offline card payments should be possible no later than 1 July 2026](https://www.riksbank.se/en-gb/press-and-published/notices-and-press-releases/press-releases/2025/offline-card-payments-should-be-possible-no-later-than-1-july-2026/)
* [2025-10-03, 20:01:36](https://news.ycombinator.com/item?id=45467166) - [AMD&apos;s EPYC 9355P: Inside a 32 Core Zen 5 Server Chip](https://chipsandcheese.com/p/amds-epyc-9355p-inside-a-32-core)
* [2025-10-03, 20:01:00](https://hardware.slashdot.org/story/25/10/03/1527209/spain-outage-was-first-of-its-kind-worst-in-decades-group-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain Outage Was First of Its Kind, Worst in Decades, Group Says](https://hardware.slashdot.org/story/25/10/03/1527209/spain-outage-was-first-of-its-kind-worst-in-decades-group-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 19:49:36](https://lobste.rs/s/bqecne/pep_810_explicit_lazy_imports) - [PEP 810: Explicit lazy imports](https://discuss.python.org/t/pep-810-explicit-lazy-imports/104131)
* [2025-10-03, 19:41:27](https://lobste.rs/s/0o2pgj/wireguard_topologies_for_self_hosting_at) - [WireGuard topologies for self-hosting at home](https://garrido.io/notes/wireguard-topologies-for-self-hosting-at-home/)
* [2025-10-03, 19:21:00](https://developers.slashdot.org/story/25/10/03/1515258/tech-companies-to-k-12-schoolchildren-learn-to-ai-is-the-new-learn-to-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Companies To K-12 Schoolchildren: Learn To AI Is the New Learn To Code](https://developers.slashdot.org/story/25/10/03/1515258/tech-companies-to-k-12-schoolchildren-learn-to-ai-is-the-new-learn-to-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 19:08:11](https://news.ycombinator.com/item?id=45466588) - [Jules, remote coding agent from Google Labs, announces API](https://jules.google/docs/changelog/)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 18:24:58](https://news.ycombinator.com/item?id=45466086) - [PEP 810 – Explicit lazy imports](https://pep-previews--4622.org.readthedocs.build/pep-0810/)
* [2025-10-03, 17:50:47](https://lobste.rs/s/bsf7e1/linus_torvalds_lashes_out_at_risc_v_big) - [Linus Torvalds Lashes Out At RISC-V Big Endian Plans](https://www.phoronix.com/news/Torvalds-No-RISC-V-BE)
* [2025-10-03, 17:36:32](https://lobste.rs/s/aro0ic/jank_community_has_stepped_up) - [The jank community has stepped up](https://jank-lang.org/blog/2025-10-03-community/)
* [2025-10-03, 16:16:55](https://lobste.rs/s/d4batn/cancelling_async_rust) - [Cancelling async Rust](https://sunshowers.io/posts/cancelling-async-rust/)
* [2025-10-03, 16:05:29](https://lobste.rs/s/nzukgn/atuin_desktop_runbooks_run) - [Atuin desktop: Runbooks that run](https://github.com/atuinsh/desktop)
* [2025-10-03, 16:00:00](https://news.ycombinator.com/item?id=45464429) - [Jeff Bezos says AI is in a bubble but society will get &apos;gigantic&apos; benefits](https://www.cnbc.com/2025/10/03/jeff-bezos-ai-in-an-industrial-bubble-but-society-to-benefit.html)
* [2025-10-03, 15:48:47](https://lobste.rs/s/5dlmct/hey_siri_block_reddit) - [Hey Siri. Block Reddit](https://www.jasontokoph.com/hey-siri-block-reddit/)
* [2025-10-03, 14:43:12](https://lobste.rs/s/ebared/fundraising_campaign_sustain_gnu_guix) - [Fundraising campaign to sustain GNU Guix](https://guix.gnu.org/en/blog/2025/fundraising-campaign-to-sustain-gnu-guix/)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 11:05:21](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/vzvlgy/what_are_you_doing_this_weekend)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 20:31:43](https://news.ycombinator.com/item?id=45455164) - [Where it&apos;s at://](https://overreacted.io/where-its-at/)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 08:51:49](https://news.ycombinator.com/item?id=45447536) - [Asked to do something illegal at work? Here&apos;s what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/)
* [2025-10-02, 07:12:18](https://news.ycombinator.com/item?id=45447057) - [Old Stockholm Telephone Tower](https://en.wikipedia.org/wiki/Old_Stockholm_telephone_tower)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 10:51:37](https://news.ycombinator.com/item?id=45436289) - [Systems Programming with Zig](https://www.manning.com/books/systems-programming-with-zig)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 05:49:14](https://news.ycombinator.com/item?id=45434678) - [The Architecture of Learning: From Statistics to Intelligence](https://little-book-of.github.io/maths/books/en-US/chronicles-8.html)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 03:15:23](https://news.ycombinator.com/item?id=45433936) - [Baseball durations after the pitch clock](https://leancrew.com/all-this/2025/09/baseball-durations-after-the-pitch-clock/)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 20:54:45](https://news.ycombinator.com/item?id=45431115) - [Show HN: Cobalt – a pixel-art painting studio for the Nintendo DS](https://benbridle.com/projects/cobalt.html)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 16:54:43](https://news.ycombinator.com/item?id=45427972) - [Earth was born dry until a cosmic collision made it a blue planet](https://www.sciencedaily.com/releases/2025/09/250928095654.htm)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 08:57:11](https://news.ycombinator.com/item?id=45423404) - [Open Printer – Inkjet printer with DRM-free ink](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 05:15:40](https://news.ycombinator.com/item?id=45422147) - [Fluid Glass](https://chiuhans111.github.io/fluidglass/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
