# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Discoveries

* [Using Discord on Plan 9](https://pmikkelsen.com/plan9/discord) - A guide on using the popular chat platform Discord seamlessly on the niche Plan 9 operating system. [Comments](https://lobste.rs/s/qiva5o/using_discord_on_plan_9)

* [An Elm-inspired language that compiles to Go, Hindley-Milner types, server-driven UI, single binary output](https://github.com/anzellai/sky) - Introduction to a new programming language combining the elegance of Elm and the robustness of Go. [Comments](https://lobste.rs/s/hxiivt/elm_inspired_language_compiles_go)

* [Introducing profiling-explorer](https://adamj.eu/tech/2026/04/03/python-introducing-profiling-explorer/) - A new Python tool for profiling and optimizing code. [Comments](https://lobste.rs/s/jgvhjn/introducing_profiling_explorer)

* [Make your own ColecoVision at home, part 5](https://www.leadedsolder.com/2026/03/24/colecovision-diy-part-5.html) - A retro DIY guide to creating your own ColecoVision console. [Comments](https://lobste.rs/s/omgusm/make_your_own_colecovision_at_home_part_5)

* [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&from=rss) - Cutting-edge research unveiling pre-Cambrian complex life. [Comments](https://soylentnews.org/article.pl?sid=26/04/05/0214222&from=rss)

## AI and Data Insights

* [France pulls last gold held in US for $15B gain](https://www.mining.com/france-pulls-last-gold-held-in-us-for-15b-gain/) - France successfully repatriates gold reserves from the US amidst economic motivations. [Comments](https://news.ycombinator.com/item?id=47658146)

* [Employers use your personal data to figure out the lowest salary you&apos;ll accept](https://www.marketwatch.com/story/employers-are-using-your-personal-data-to-figure-out-the-lowest-salary-youll-accept-c2b968fb) - Critical insights into how companies analyze data to determine minimum salaries. [Comments](https://news.ycombinator.com/item?id=47655466)

* [Claude Code Leak Reveals a &apos;Stealth&apos; Mode for GenAI Code Contributions - and a &apos;Frustration Words&apos; Regex](https://developers.slashdot.org/story/26/04/05/2339243/claude-code-leak-reveals-a-stealth-mode-for-genai-code-contributions---and-a-frustration-words-regex?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analyzing recent revelations about Claude's AI privacy and security. [Comments](https://developers.slashdot.org/story/26/04/05/2339243/claude-code-leak)

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

* [2026-04-06, 13:21:35](https://lobste.rs/s/qiva5o/using_discord_on_plan_9) - [Using Discord on Plan 9](https://pmikkelsen.com/plan9/discord)
* [2026-04-06, 12:59:33](https://news.ycombinator.com/item?id=47660343) - [PostHog (YC W20) Is Hiring](https://news.ycombinator.com/item?id=47660343)
* [2026-04-06, 12:53:58](https://lobste.rs/s/h1yxwk/real_world_case_property_based) - [A real-world case of property-based verification](https://ochagavia.nl/blog/a-real-world-case-of-property-based-verification/)
* [2026-04-06, 12:53:41](https://news.ycombinator.com/item?id=47660286) - [What Being Ripped Off Taught Me](https://belief.horse/notes/what-being-ripped-off-taught-me/)
* [2026-04-06, 12:20:29](https://lobste.rs/s/6hrzg5/growing_yggdrasil_world_tree_with_ash) - [Growing Yggdrasil, the World Tree, with Ash](https://www.newresalhaider.com/post/yggdrasil/)
* [2026-04-06, 12:08:46](https://lobste.rs/s/3w0o3y/machines_are_fine_i_m_worried_about_us) - [The machines are fine. I&apos;m worried about us](https://ergosphere.blog/posts/the-machines-are-fine/)
* [2026-04-06, 11:39:03](https://news.ycombinator.com/item?id=47659609) - [Tiny Corp&apos;s Exabox](https://twitter.com/__tinygrad__/status/2040944508402360592)
* [2026-04-06, 11:34:00](https://linux.slashdot.org/story/26/04/06/0358212/linux-finally-starts-removing-support-for-intels-37-year-old-i486-processor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Finally Starts Removing Support for Intel&apos;s 37-Year-Old i486 Processor](https://linux.slashdot.org/story/26/04/06/0358212/linux-finally-starts-removing-support-for-intels-37-year-old-i486-processor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-06, 11:23:00](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss) - [Fossils Reveal Many Complex Animals Existed Before the Cambrian Explosion](https://soylentnews.org/article.pl?sid=26/04/05/0214222&amp;from=rss)
* [2026-04-06, 10:54:11](https://news.ycombinator.com/item?id=47659252) - [Is Germany&apos;s gold safe in New York ?](https://www.dw.com/en/is-germanys-gold-safe-in-new-york/video-75766873)
* [2026-04-06, 10:46:03](https://lobste.rs/s/jgvhjn/introducing_profiling_explorer) - [Introducing profiling-explorer](https://adamj.eu/tech/2026/04/03/python-introducing-profiling-explorer/)
* [2026-04-06, 10:20:56](https://lobste.rs/s/7qqnze/someone_at_browserstack_is_leaking_users) - [Someone at BrowserStack is Leaking Users&apos; Email Address](https://shkspr.mobi/blog/2026/04/someone-at-browserstack-is-leaking-users-email-address/)
* [2026-04-06, 09:39:17](https://news.ycombinator.com/item?id=47658743) - [Number in man page titles e.g. sleep(3)](https://lalitm.com/til-number-in-man-page-titles-e-g-sleep-3/)
* [2026-04-06, 08:12:51](https://lobste.rs/s/hxiivt/elm_inspired_language_compiles_go) - [An Elm-inspired language that compiles to Go, Hindley-Milner types, server-driven UI, single binary output](https://github.com/anzellai/sky)
* [2026-04-06, 08:03:43](https://news.ycombinator.com/item?id=47658146) - [France pulls last gold held in US for $15B gain](https://www.mining.com/france-pulls-last-gold-held-in-us-for-15b-gain/)
* [2026-04-06, 07:34:00](https://tech.slashdot.org/story/26/04/06/033247/russias-vpn-crackdown-caused-bank-outages-telegram-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia&apos;s VPN Crackdown Caused Bank Outages, Telegram Founder Says](https://tech.slashdot.org/story/26/04/06/033247/russias-vpn-crackdown-caused-bank-outages-telegram-founder-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-06, 07:08:17](https://lobste.rs/s/qzvvbv/free_market_lie_why_switzerland_has_25) - [The Free Market Lie: Why Switzerland Has 25 Gbit Internet and America Doesn&apos;t](https://sschueller.github.io/posts/the-free-market-lie/)
* [2026-04-06, 07:03:43](https://lobste.rs/s/nnh9qk/easters_adventofcode_like_challenge_for) - [Easters - an adventofcode-like challenge for easter](https://easters.dev/)
* [2026-04-06, 06:35:00](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss) - [AMD&apos;s New Desktop CPU Oozes Cache Out of All 16 Cores](https://soylentnews.org/article.pl?sid=26/04/05/026223&amp;from=rss)
* [2026-04-06, 06:13:31](https://lobste.rs/s/dpkqgr/dev_css_tiny_simple_classless_css) - [dev.css: tiny, simple, classless CSS framework inspired by new.css](https://tangled.org/devins.page/dev.css)
* [2026-04-06, 04:41:00](https://science.slashdot.org/story/26/04/06/0228229/artemis-astronauts-enter-moons-gravitational-pull-catch-first-glimpses-of-far-side?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artemis Astronauts Enter Moon&apos;s Gravitational Pull, Catch First Glimpses of Far Side](https://science.slashdot.org/story/26/04/06/0228229/artemis-astronauts-enter-moons-gravitational-pull-catch-first-glimpses-of-far-side?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-06, 04:24:49](https://news.ycombinator.com/item?id=47656981) - [Drop, formerly Massdrop, ends most collaborations and rebrands under Corsair](https://drop.com/)
* [2026-04-06, 03:44:40](https://lobste.rs/s/omgusm/make_your_own_colecovision_at_home_part_5) - [Make your own ColecoVision at home, part 5](https://www.leadedsolder.com/2026/03/24/colecovision-diy-part-5.html)
* [2026-04-06, 03:22:42](https://news.ycombinator.com/item?id=47656622) - [An open-source 240-antenna array to bounce signals off the Moon](https://moonrf.com/)
* [2026-04-06, 03:12:39](https://lobste.rs/s/cwbgnf/size_matters_even_on_very_fast) - [Size matters, even on very fast connections](https://maurycyz.com/misc/13kb/)
* [2026-04-06, 03:03:22](https://news.ycombinator.com/item?id=47656501) - [The 1987 game “The Last Ninja” was 40 kilobytes](https://twitter.com/exQUIZitely/status/2040777977521398151)
* [2026-04-06, 02:28:40](https://news.ycombinator.com/item?id=47656303) - [Case study: recovery of a corrupted 12 TB multi-device pool](https://github.com/kdave/btrfs-progs/issues/1107)
* [2026-04-06, 02:24:30](https://lobste.rs/s/ufd7j8/best_paper_awards_computer_science_over) - [Best Paper Awards in Computer Science over the past 30 years](https://jeffhuang.com/best_paper_awards/)
* [2026-04-06, 02:07:55](https://lobste.rs/s/g0kwsq/endian_wars_anti_portability) - [Endian wars and anti-portability](https://dalmatian.life/2026/04/03/endian-wars-and-anti-portability-this-again/)
* [2026-04-06, 01:54:00](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss) - [The &apos;Engineering of Addiction&apos;  - 3 Ways Meta and YouTube Are Claimed to Have Harmed  Users](https://soylentnews.org/article.pl?sid=26/04/05/021235&amp;from=rss)
* [2026-04-06, 01:34:00](https://it.slashdot.org/story/26/04/06/0113254/internet-bug-bounty-pauses-payouts-citing-expanding-discovery-from-ai-assisted-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Bug Bounty Pauses Payouts, Citing &apos;Expanding Discovery&apos; From AI-Assisted Research](https://it.slashdot.org/story/26/04/06/0113254/internet-bug-bounty-pauses-payouts-citing-expanding-discovery-from-ai-assisted-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-06, 01:33:00](https://news.ycombinator.com/item?id=47655905) - [Usenet Archives](https://usenetarchives.com)
* [2026-04-06, 00:29:08](https://news.ycombinator.com/item?id=47655466) - [Employers use your personal data to figure out the lowest salary you&apos;ll accept](https://www.marketwatch.com/story/employers-are-using-your-personal-data-to-figure-out-the-lowest-salary-youll-accept-c2b968fb)
* [2026-04-06, 00:20:12](https://news.ycombinator.com/item?id=47655408) - [Show HN: I built a tiny LLM to demystify how language models work](https://github.com/arman-bd/guppylm)
* [2026-04-06, 00:18:26](https://news.ycombinator.com/item?id=47655392) - [Show HN: I made a YouTube search form with advanced filters](https://playlists.at/youtube/search/)
* [2026-04-06, 00:14:37](https://news.ycombinator.com/item?id=47655367) - [Show HN: Gemma Gem – AI model embedded in a browser – no API keys, no cloud](https://github.com/kessler/gemma-gem)
* [2026-04-05, 23:59:10](https://news.ycombinator.com/item?id=47655268) - [Show HN: Modo – I built an open-source alternative to Kiro, Cursor, and Windsurf](https://github.com/mohshomis/modo)
* [2026-04-05, 23:41:00](https://developers.slashdot.org/story/26/04/05/2339243/claude-code-leak-reveals-a-stealth-mode-for-genai-code-contributions---and-a-frustration-words-regex?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code Leak Reveals a &apos;Stealth&apos; Mode for GenAI Code Contributions - and a &apos;Frustration Words&apos; Regex](https://developers.slashdot.org/story/26/04/05/2339243/claude-code-leak-reveals-a-stealth-mode-for-genai-code-contributions---and-a-frustration-words-regex?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 22:39:00](https://entertainment.slashdot.org/story/26/04/05/2236255/hundreds-of-theatres-show-apocalyptic-yet-optimistic-new-movie-the-ai-doc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hundreds of Theatres Show Apocalyptic-Yet-Optimistic New Movie, &apos;The AI Doc&apos; ](https://entertainment.slashdot.org/story/26/04/05/2236255/hundreds-of-theatres-show-apocalyptic-yet-optimistic-new-movie-the-ai-doc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 21:22:00](https://news.slashdot.org/story/26/04/05/2119210/will-ai-assisted-journalists-bring-errors-and-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will &apos;AI-Assisted&apos; Journalists Bring Errors and Retractions?](https://news.slashdot.org/story/26/04/05/2119210/will-ai-assisted-journalists-bring-errors-and-retractions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 21:04:00](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss) - [‘Shockingly Bad’: Nissan Leaf Drivers Voice Anger Over App Shutdown](https://soylentnews.org/article.pl?sid=26/04/04/0231228&amp;from=rss)
* [2026-04-05, 19:52:41](https://lobste.rs/s/z4zroy/parsing_asciidoc_prolog) - [Parsing AsciiDoc in Prolog](https://github.com/alexpdp7/prolog-asciidoc/blob/main/parsing-asciidoc-in-prolog.adoc)
* [2026-04-05, 19:47:13](https://lobste.rs/s/avubpi/can_we_measure_software_slop_experiment) - [Can We Measure Software Slop? An Experiment](https://pscanf.com/s/352/)
* [2026-04-05, 19:36:05](https://lobste.rs/s/itmyc4/unnix_reproducible_nix_environments) - [unnix: Reproducible Nix environments without installing Nix](https://github.com/figsoda/unnix)
* [2026-04-05, 18:45:53](https://news.ycombinator.com/item?id=47652561) - [Gemma 4 on iPhone](https://apps.apple.com/nl/app/google-ai-edge-gallery/id6749645337)
* [2026-04-05, 18:34:00](https://yro.slashdot.org/story/26/04/05/182224/crooks-behind-27m-in-refund-scams-busted-by-youtube-pranksters-after-being-lured-to-fake-funeral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Crooks Behind $27M in &apos;Refund&apos; Scams Busted By YouTube Pranksters After Being Lured to Fake Funeral](https://yro.slashdot.org/story/26/04/05/182224/crooks-behind-27m-in-refund-scams-busted-by-youtube-pranksters-after-being-lured-to-fake-funeral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 18:29:47](https://news.ycombinator.com/item?id=47652400) - [Why Switzerland has 25 Gbit internet and America doesn&apos;t](https://sschueller.github.io/posts/the-free-market-lie/)
* [2026-04-05, 18:23:08](https://news.ycombinator.com/item?id=47652322) - [Music for Programming](https://musicforprogramming.net)
* [2026-04-05, 17:53:19](https://news.ycombinator.com/item?id=47652007) - [Show HN: Real-time AI (audio/video in, voice out) on an M3 Pro with Gemma E2B](https://github.com/fikrikarim/parlor)
* [2026-04-05, 17:49:21](https://lobste.rs/s/vw7mod/neomd_minimal_email_tui_where_you_read) - [neomd: A minimal email TUI where you read with Markdown and write in Neovim](https://github.com/ssp-data/neomd)
* [2026-04-05, 17:34:00](https://apple.slashdot.org/story/26/04/05/0120236/apple-brings-device-level-age-verification-to-two-more-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Brings Device-Level Age Verification to Two More Countries](https://apple.slashdot.org/story/26/04/05/0120236/apple-brings-device-level-age-verification-to-two-more-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 17:27:41](https://news.ycombinator.com/item?id=47651703) - [Microsoft hasn&apos;t had a coherent GUI strategy since Petzold](https://www.jsnover.com/blog/2026/03/13/microsoft-hasnt-had-a-coherent-gui-strategy-since-petzold/)
* [2026-04-05, 17:13:51](https://news.ycombinator.com/item?id=47651540) - [Running Gemma 4 locally with LM Studio&apos;s new headless CLI and Claude Code](https://ai.georgeliu.com/p/running-google-gemma-4-locally-with)
* [2026-04-05, 16:59:29](https://lobste.rs/s/faksz1/stamp_it_all_programs_must_report_their) - [Stamp It! All Programs Must Report Their Version](https://michael.stapelberg.ch/posts/2026-04-05-stamp-it-all-programs-must-report-their-version/)
* [2026-04-05, 16:34:00](https://slashdot.org/story/26/04/05/0031201/chrome-148-will-start-lazy-loading-video-and-audio-to-improve-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome 148 Will Start &apos;Lazy Loading&apos; Video and Audio to Improve Performance](https://slashdot.org/story/26/04/05/0031201/chrome-148-will-start-lazy-loading-video-and-audio-to-improve-performance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 16:13:00](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss) - [Data Centers Causing Huge Temperature Spikes for Miles Around Them, Study Suggests](https://soylentnews.org/article.pl?sid=26/04/04/0228218&amp;from=rss)
* [2026-04-05, 15:38:18](https://news.ycombinator.com/item?id=47650502) - [Computational Physics (2nd Edition) (2025)](https://websites.umich.edu/~mejn/cp2/)
* [2026-04-05, 15:34:00](https://science.slashdot.org/story/26/04/04/021228/scientists-engineered-a-plant-to-produce-5-different-psychedelics-at-once?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Engineered a Plant To Produce 5 Different Psychedelics At Once](https://science.slashdot.org/story/26/04/04/021228/scientists-engineered-a-plant-to-produce-5-different-psychedelics-at-once?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 15:18:01](https://news.ycombinator.com/item?id=47650312) - [A tail-call interpreter in (nightly) Rust](https://www.mattkeeter.com/blog/2026-04-05-tailcall/)
* [2026-04-05, 15:12:55](https://lobste.rs/s/gpqkcx/eight_years_wanting_three_months) - [Eight years of wanting, three months of building with AI](https://lalitm.com/post/building-syntaqlite-ai/)
* [2026-04-05, 14:25:45](https://lobste.rs/s/dmdvje/dpi_bypass_using_ebpf_sock_ops_fake_tls) - [DPI bypass using eBPF sock_ops and fake TLS ClientHello injection](https://github.com/boratanrikulu/gecit)
* [2026-04-05, 13:19:50](https://lobste.rs/s/ektobz/tail_call_interpreter_nightly_rust) - [A tail-call interpreter in (nightly) Rust](https://www.mattkeeter.com/blog/2026-04-05-tailcall/)
* [2026-04-05, 12:43:47](https://news.ycombinator.com/item?id=47648828) - [Eight years of wanting, three months of building with AI](https://lalitm.com/post/building-syntaqlite-ai/)
* [2026-04-05, 11:41:00](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss) - [Security Researchers Scoured the Web and Found Hundreds of Valid API Keys](https://soylentnews.org/article.pl?sid=26/04/04/0223207&amp;from=rss)
* [2026-04-05, 11:34:00](https://news.slashdot.org/story/26/04/04/2158228/does-ubuntu-now-require-more-ram-than-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does Ubuntu Now Require More RAM Than Windows 11?](https://news.slashdot.org/story/26/04/04/2158228/does-ubuntu-now-require-more-ram-than-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 09:42:46](https://lobste.rs/s/8o6hst/roogle_rust_api_search_engine) - [Roogle: A Rust API search engine](https://github.com/roogle-rs/roogle)
* [2026-04-05, 08:56:18](https://news.ycombinator.com/item?id=47647455) - [Caveman: Why use many token when few token do trick](https://github.com/JuliusBrussee/caveman)
* [2026-04-05, 07:34:00](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s First 50 Years Celebrated - Including How Steve Jobs Finally Accepted an &apos;Open&apos; App Store](https://apple.slashdot.org/story/26/04/05/0628250/apples-first-50-years-celebrated---including-how-steve-jobs-finally-accepted-an-open-app-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 06:49:00](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss) - [VitruvianOS 0.3 Debuts as Haiku-Inspired Linux OS Without X11 or Wayland](https://soylentnews.org/article.pl?sid=26/04/03/040255&amp;from=rss)
* [2026-04-05, 05:37:00](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss) - [2nd Crew Member of F15E Has Been Rescued.](https://soylentnews.org/breakingnews/article.pl?sid=26/04/05/0541233&amp;from=rss)
* [2026-04-05, 03:47:51](https://lobste.rs/s/05o8yu/if_you_thought_speed_writing_code_was_your) - [If you thought the speed of writing code was your problem - you have bigger problems](https://debuggingleadership.com/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems)
* [2026-04-05, 03:34:00](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top NPM Maintainers Targeted with AI Deepfakes in Massive Supply-Chain Attack, Axios Briefly Compromised](https://it.slashdot.org/story/26/04/05/0316250/top-npm-maintainers-targeted-with-ai-deepfakes-in-massive-supply-chain-attack-axios-briefly-compromised?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-05, 02:02:00](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss) - [Investigating 3D-Printed Metals for Aeronautical Engineering](https://soylentnews.org/article.pl?sid=26/04/03/0357220&amp;from=rss)
* [2026-04-05, 01:34:00](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Pulls Then Re-Issues Windows 11 Preview Update.  Also Begins Force-Updating Windows 11](https://tech.slashdot.org/story/26/04/05/001246/microsoft-pulls-then-re-issues-windows-11-preview-update-also-begins-force-updating-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-04, 21:18:00](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss) - [Apple Requires Device-Level Age Verification in the UK Now. Could the US Be Next?](https://soylentnews.org/article.pl?sid=26/04/03/0351210&amp;from=rss)
* [2026-04-04, 18:36:53](https://lobste.rs/s/jr4acs/nvim_treesitter_repository_was_archived) - [The nvim-treesitter repository was archived](https://github.com/nvim-treesitter/nvim-treesitter)
* [2026-04-04, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss) - [Artemis 2 - Roundup](https://soylentnews.org/article.pl?sid=26/04/03/0343222&amp;from=rss)
* [2026-04-04, 11:46:00](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss) - [Sony Shuts Down Nearly Its Entire Memory Card Business Due to Flash Shortage](https://soylentnews.org/article.pl?sid=26/04/03/0327238&amp;from=rss)
* [2026-04-04, 09:20:34](https://news.ycombinator.com/item?id=47637377) - [LÖVE: 2D Game Framework for Lua](https://github.com/love2d/love)
* [2026-04-04, 08:31:20](https://news.ycombinator.com/item?id=47637116) - [Signals, the push-pull based algorithm](https://willybrauner.com/journal/signal-the-push-pull-based-algorithm)
* [2026-04-04, 07:04:00](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss) - [GitHub to Use User Data for AI Training by Default](https://soylentnews.org/article.pl?sid=26/04/02/0226234&amp;from=rss)
* [2026-04-04, 06:34:12](https://news.ycombinator.com/item?id=47636456) - [Sheets Spreadsheets in Your Terminal](https://github.com/maaslalani/sheets)
* [2026-04-04, 02:11:00](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss) - [Quo Vadis, Humanitas?](https://soylentnews.org/article.pl?sid=26/04/02/0224235&amp;from=rss)
* [2026-04-03, 21:35:00](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss) - [Scientists Just Spotted a Black Hole Collision That Defies All Odds](https://soylentnews.org/article.pl?sid=26/04/02/0220210&amp;from=rss)
* [2026-04-03, 16:43:00](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss) - [Google Has a Secret Reference Desk. Here&apos;s How to Use It.](https://soylentnews.org/article.pl?sid=26/04/02/0214254&amp;from=rss)
* [2026-04-03, 12:00:00](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss) - [Attorney Hit With Historic Fine for Citing AI-Generated Cases](https://soylentnews.org/article.pl?sid=26/03/31/1458218&amp;from=rss)
* [2026-04-03, 07:17:00](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss) - [Wikipedia Has Banned AI-Generated Articles](https://soylentnews.org/article.pl?sid=26/03/31/1439256&amp;from=rss)
* [2026-04-03, 02:31:00](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss) - [Ancient Alphabets, New Insights: Researchers Uncover Hidden Links Among the Letters](https://soylentnews.org/article.pl?sid=26/03/31/1431219&amp;from=rss)
* [2026-04-02, 21:41:00](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss) - [Why October 1, 2026, Could be the Day SSL/TLS Certificates &apos;Break the Internet&apos;](https://soylentnews.org/article.pl?sid=26/03/31/1413235&amp;from=rss)
* [2026-04-02, 17:00:00](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss) - [Ubuntu MATE Founder Martin Wimpress Steps Back After 12 Years](https://soylentnews.org/article.pl?sid=26/03/31/140207&amp;from=rss)
* [2026-04-02, 12:55:56](https://news.ycombinator.com/item?id=47613827) - [One ant for $220: The new frontier of wildlife trafficking](https://www.bbc.com/news/articles/cg4g44zv37qo)
* [2026-04-02, 12:42:00](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss) - [Euro-Office is a Free, Open-Source Alternative to Microsoft 365 and Google Docs](https://soylentnews.org/article.pl?sid=26/03/31/147230&amp;from=rss)
* [2026-04-02, 08:13:00](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss) - [World&apos;s smallest QR code, smaller than bacteria, could store data for centuries  ](https://soylentnews.org/article.pl?sid=26/03/31/1354212&amp;from=rss)
* [2026-04-02, 03:09:00](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss) - [Google Won&apos;t Block Loading Unverified Apps, but Adds Friction to the Process](https://soylentnews.org/article.pl?sid=26/03/31/1352230&amp;from=rss)
