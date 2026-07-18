# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Gleam Is Now on Tangled](https://tangled.org/gleam.run/gleam) ([comments](https://news.ycombinator.com/item?id=48959143))

* [Elixir-lang.org has a new design](https://elixir-lang.org/) ([comments](https://news.ycombinator.com/item?id=48959042))

* [NextBSD project revived: Apple's FOSS user-space tools on the FreeBSD kernel](https://nextbsd.org/) ([comments](https://lobste.rs/s/p9ubuz/nextbsd_project_revived_apple_s_foss_user))

* [Google-Backed Satellites For Wildfire Detection Launch As Smoke Chokes US, Canada](https://news.slashdot.org/story/26/07/18/0436243/google-backed-satellites-for-wildfire-detection-launch-as-smoke-chokes-us-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48956879))

* [Aurora DSQL: Scalable, Multi-Region OLTP](https://arxiv.org/abs/2607.13276) ([comments](https://lobste.rs/s/pygp0p/aurora_dsql_scalable_multi_region_oltp))

* [Steve Wozniak's Foundation Partners With Realbotix To Build AI Teacherbot](https://hardware.slashdot.org/story/26/07/17/1944211/steve-wozniaks-foundation-partners-with-realbotix-to-build-ai-teacherbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/zmg7ot/topcoat_batteries_included_framework))

* [Microsoft Comic Chat is now open source](https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/) ([comments](https://lobste.rs/s/qbvfll/microsoft_comic_chat_is_now_open_source))

* [How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig) ([comments](https://lobste.rs/s/axdfjx/how_our_rust_zig_rewrite_is_going))

## Artificial Intelligence

* [GPT-5.6 used a prompt to close a 30-year gap in convex optimization](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/) ([comments](https://news.ycombinator.com/item?id=48957779))

* [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To 'Fork It' - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48957870))

* [AI Coding Agents Can be Tricked Into Installing Malware Via 'Clean' GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) ([comments](https://lobste.rs/s/y3cs5/ai_coding))

* [Meta Data Center Water Discharges Suspended After Contaminating The City's Reclamation Water Supply](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) ([comments](https://lobste.rs/s/y4stx/meta_News))

## Environmental and Space Discoveries

* [British runner Josh Kerr breaks world record for mile which stood for 27 years](https://news.sky.com/story/british-runner-josh-kerr-breaks-world-record-for-mile-which-had-stood-for-27-years-13564688) ([comments](https://news.ycombinator.com/item?id=48958814))

* [Kimi Oromoo chat logs formal associative AI flag-error](similar UNk-final Returns])

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

* [2026-07-18, 15:44:04](https://news.ycombinator.com/item?id=48959143) - [Gleam Is Now on Tangled](https://tangled.org/gleam.run/gleam)
* [2026-07-18, 15:34:00](https://games.slashdot.org/story/26/07/18/0723247/union-fights-microsoft-over-layoffs-at-game-studios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Union Fights Microsoft Over Layoffs at Game Studios](https://games.slashdot.org/story/26/07/18/0723247/union-fights-microsoft-over-layoffs-at-game-studios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 15:32:04](https://news.ycombinator.com/item?id=48959042) - [Elixir-lang.org has a new design](https://elixir-lang.org/)
* [2026-07-18, 15:08:32](https://news.ycombinator.com/item?id=48958814) - [British runner Josh Kerr breaks world record for mile which stood for 27 years](https://news.sky.com/story/british-runner-josh-kerr-breaks-world-record-for-mile-which-had-stood-for-27-years-13564688)
* [2026-07-18, 14:34:00](https://tech.slashdot.org/story/26/07/18/0239231/the-death-of-the-stick-shift-is-almost-here-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The &apos;Death of the Stick Shift&apos; is Almost Here for Americans](https://tech.slashdot.org/story/26/07/18/0239231/the-death-of-the-stick-shift-is-almost-here-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 14:04:55](https://news.ycombinator.com/item?id=48958273) - [LG ThinQ Terms of Use](https://news.ycombinator.com/item?id=48958273)
* [2026-07-18, 14:04:42](https://news.ycombinator.com/item?id=48958269) - [EU ban on destruction of unsold clothes and shoes enters into application](https://environment.ec.europa.eu/news/ban-destruction-unsold-clothes-and-shoes-enters-application-2026-07-17_en)
* [2026-07-18, 13:59:49](https://lobste.rs/s/bgtxi5/haunt_0_4_0_released) - [Haunt 0.4.0 released](https://git.dthompson.us/haunt/commit/?id=100da093a804f04d3b10c9db49da663f2246c446)
* [2026-07-18, 13:00:52](https://news.ycombinator.com/item?id=48957779) - [GPT-5.6 used a prompt to close a 30-year gap in convex optimization](https://old.reddit.com/r/math/comments/1uxj3cy/after_openais_cdc_proof_announcement_gpt56_used_a/)
* [2026-07-18, 12:59:05](https://lobste.rs/s/hvuumu/goodbye_thanks_for_all_bikesheds) - [Goodbye, and thanks for all the Bikesheds](https://queue.acm.org/detail.cfm?id=3818307)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 12:27:03](https://lobste.rs/s/gm7cmo/cache_directory_tagging_specification) - [Cache Directory Tagging Specification](https://bford.info/cachedir/)
* [2026-07-18, 11:12:46](https://news.ycombinator.com/item?id=48956949) - [What AI did to stackoverflow in a graph](https://data.stackexchange.com/stackoverflow/query/1953768#graph)
* [2026-07-18, 11:04:52](https://lobste.rs/s/p9ubuz/nextbsd_project_revived_apple_s_foss_user) - [NextBSD project revived: Apple&apos;s FOSS user-space tools on the FreeBSD kernel](https://nextbsd.org/)
* [2026-07-18, 11:00:29](https://news.ycombinator.com/item?id=48956879) - [Fable 5 vs. GPT-5.6 Sol on an NP-Hard Problem: Does /goal help?](https://charlesazam.com/blog/fable-5-gpt-5-6-sol-goal/)
* [2026-07-18, 11:00:00](https://news.slashdot.org/story/26/07/18/0436243/google-backed-satellites-for-wildfire-detection-launch-as-smoke-chokes-us-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google-Backed Satellites For Wildfire Detection Launch As Smoke Chokes US, Canada](https://news.slashdot.org/story/26/07/18/0436243/google-backed-satellites-for-wildfire-detection-launch-as-smoke-chokes-us-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 10:21:19](https://news.ycombinator.com/item?id=48956688) - [LG monitors silently install software through Windows Update without consent](https://videocardz.com/newz/lg-monitors-silently-install-software-through-windows-update-without-user-consent)
* [2026-07-18, 09:01:53](https://lobste.rs/s/b6f3sf/powershell_over_ssh_2026_openssh_on) - [PowerShell over SSH in 2026: OpenSSH on Windows, Key Auth, and PowerShell 7 Remoting](https://mattmichie.com/2026/07/11/powershell-over-ssh-twenty-years-later/)
* [2026-07-18, 08:50:07](https://news.ycombinator.com/item?id=48956307) - [Qubes OS Security in the Public Record](https://arxiv.org/abs/2607.14587)
* [2026-07-18, 08:33:31](https://news.ycombinator.com/item?id=48956231) - [The Computer at the Bottom of a Canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/)
* [2026-07-18, 08:30:39](https://lobste.rs/s/z3hzjm/neither_gcc_nor_clang_are_compliant_with) - [neither gcc nor clang are compliant with standard c++](https://sebsite.pw/w/20260708-badstdcxx.html)
* [2026-07-18, 07:52:15](https://lobste.rs/s/z01edy/gitroot) - [GitRoot](https://gitroot.dev/)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 07:27:47](https://lobste.rs/s/synvhi/dosbox_on_openvms_alpha_cpu) - [DOSBox on OpenVMS (Alpha CPU)](https://astr0baby.online/AXP/OpenVMS/DOSBOX/)
* [2026-07-18, 07:00:00](https://science.slashdot.org/story/26/07/18/0427249/alien-world-chemistry-found-inside-meteorite-that-struck-new-jersey-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alien World Chemistry Found Inside Meteorite That Struck New Jersey Home](https://science.slashdot.org/story/26/07/18/0427249/alien-world-chemistry-found-inside-meteorite-that-struck-new-jersey-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 06:25:54](https://lobste.rs/s/pygp0p/aurora_dsql_scalable_multi_region_oltp) - [Aurora DSQL: Scalable, Multi-Region OLTP](https://arxiv.org/abs/2607.13276)
* [2026-07-18, 06:17:08](https://lobste.rs/s/femw5f/how_does_pangram_work) - [How does Pangram work?](https://pangram.substack.com/p/how-does-pangram-work)
* [2026-07-18, 04:31:13](https://lobste.rs/s/ihel7n/regressive_jpegs) - [Regressive JPEGs](https://maurycyz.com/projects/bad_jpeg/)
* [2026-07-18, 03:51:42](https://news.ycombinator.com/item?id=48955042) - [Show HN: IKEA Complexity Index](https://ikea.greg.technology/)
* [2026-07-18, 03:30:00](https://slashdot.org/story/26/07/17/2142206/australia-to-put-environmental-brakes-on-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia To Put Environmental Brakes On AI Data Centers](https://slashdot.org/story/26/07/17/2142206/australia-to-put-environmental-brakes-on-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 03:14:20](https://news.ycombinator.com/item?id=48954851) - [Regressive JPEGs](https://maurycyz.com/projects/bad_jpeg/)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-18, 01:12:13](https://news.ycombinator.com/item?id=48954149) - [I started a “dirt notebook”](https://pinewind.bearblog.dev/i-started-a-dirt-notebook/)
* [2026-07-18, 01:01:08](https://news.ycombinator.com/item?id=48954074) - [DrDroid (YC W23) Is Hiring](https://www.ycombinator.com/companies/drdroid/jobs/w45QcNV-product-engineer-assignment-mandatory)
* [2026-07-18, 00:43:53](https://lobste.rs/s/ycqq4r/road_lisp_which_lisp) - [A Road to Lisp: Which Lisp](https://scotto.me/blog/2026-07-17-which-lisp/)
* [2026-07-17, 23:03:22](https://lobste.rs/s/jvg8cy/another_taste_verse) - [Another Taste of Verse](https://www.youtube.com/watch?v=QIiU-QGzcqc&amp;list=PLQtDWkrawhsE&amp;index=2)
* [2026-07-17, 23:00:00](https://hardware.slashdot.org/story/26/07/17/1944211/steve-wozniaks-foundation-partners-with-realbotix-to-build-ai-teacherbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steve Wozniak&apos;s Foundation Partners With Realbotix To Build AI Teacherbot](https://hardware.slashdot.org/story/26/07/17/1944211/steve-wozniaks-foundation-partners-with-realbotix-to-build-ai-teacherbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 22:45:28](https://lobste.rs/s/zmg7ot/topcoat_batteries_included_framework) - [topcoat: A batteries-included framework for building web apps](https://github.com/tokio-rs/topcoat)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 22:00:00](https://slashdot.org/story/26/07/17/1929216/xi-vows-to-make-ai-for-all-in-debut-at-chinas-top-tech-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xi Vows to Make AI for All in Debut at China&apos;s Top Tech Summit](https://slashdot.org/story/26/07/17/1929216/xi-vows-to-make-ai-for-all-in-debut-at-chinas-top-tech-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 21:51:07](https://lobste.rs/s/zar7fc/enterprise_haskell_at_h_e_b) - [Enterprise Haskell at H-E-B](https://blog.haskell.org/enterprise-haskell-at-h-e-b/)
* [2026-07-17, 21:42:43](https://news.ycombinator.com/item?id=48952565) - [TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years](https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md)
* [2026-07-17, 21:07:10](https://lobste.rs/s/grutu0/lobsters_interview_with_matheusmoreira) - [Lobsters Interview with matheusmoreira about Lone Lisp](https://alexalejandre.com/interviews/interview-with-matheus-moreira/)
* [2026-07-17, 21:00:00](https://news.slashdot.org/story/26/07/17/1835215/billing-software-error-sends-billion-dollar-aws-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Billing Software Error Sends Billion-Dollar AWS Estimates](https://news.slashdot.org/story/26/07/17/1835215/billing-software-error-sends-billion-dollar-aws-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 20:55:38](https://lobste.rs/s/31bikj/java_story_official_documentary) - [The Java Story | The Official Documentary](https://www.youtube.com/watch?v=ZqGSg4b_cZA)
* [2026-07-17, 20:10:02](https://news.ycombinator.com/item?id=48951756) - [Tech note: making your own V-I plots at home](https://lcamtuf.substack.com/p/tech-note-making-your-own-v-i-plots)
* [2026-07-17, 20:00:00](https://linux.slashdot.org/story/26/07/17/1830258/linus-torvalds-to-critics-of-ai-coding-on-linux-fork-it-or-just-walk-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds To Critics of AI Coding On Linux: &apos;Fork It. Or Just Walk Away.&apos;](https://linux.slashdot.org/story/26/07/17/1830258/linus-torvalds-to-critics-of-ai-coding-on-linux-fork-it-or-just-walk-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 19:54:44](https://lobste.rs/s/ryksor/learning_few_things_about_running_sqlite) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 19:41:02](https://news.ycombinator.com/item?id=48951461) - [The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html)
* [2026-07-17, 19:00:00](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Just Erased America&apos;s AI Lead](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 18:00:00](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Arrests Man Accused of Using Steam Games To Drain Victims&apos; Crypto Wallets](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:45:41](https://news.ycombinator.com/item?id=48950122) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 17:33:00](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta In Talks To Lease Computing Power To Anthropic In Potential $10 Billion Deal](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 16:57:27](https://news.ycombinator.com/item?id=48949551) - [Thanks HN for 15 years of support and helping me find my life&apos;s work](https://news.ycombinator.com/item?id=48949551)
* [2026-07-17, 16:00:00](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sends Legal Letters To Dozens of OpenAI Employees](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 15:00:00](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Flags Trump&apos;s Teleprompter Operator For Alleged Insider Trading](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 14:21:51](https://news.ycombinator.com/item?id=48947717) - [Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/)
* [2026-07-17, 14:06:13](https://news.ycombinator.com/item?id=48947560) - [First atmosphere found on Earth-like planet in habitable zone of distant star](https://www.bbc.com/news/articles/cy4kdd1e0ejo)
* [2026-07-17, 12:51:36](https://lobste.rs/s/u9lvze/we_are_changing_our_developer) - [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 11:21:45](https://lobste.rs/s/x3xvou/freya_0_4_rust_gui_library) - [Freya 0.4 - Rust GUI library](https://freyaui.dev/posts/0.4)
* [2026-07-17, 11:00:00](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Restores Player&apos;s 25-Year-Old Account After Nuking It Due to Hacker](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 09:42:05](https://news.ycombinator.com/item?id=48945241) - [AWS: Inaccurate Estimated Billing Data – $1.7 billion](https://news.ycombinator.com/item?id=48945241)
* [2026-07-17, 08:31:40](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 06:01:54](https://lobste.rs/s/6pdyiy/pact_anonymous_credentials_for_web) - [PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-17, 02:00:38](https://news.ycombinator.com/item?id=48942603) - [In-toto: A framework to secure the integrity of software supply chains](https://in-toto.io/)
* [2026-07-17, 00:18:37](https://lobste.rs/s/4dcp6w/here_s_how_i_host_my_own_aim_server) - [Here&apos;s how I host my own AIM server](https://veronicaexplains.net/open-oscar-server/)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 16:43:15](https://lobste.rs/s/qbvfll/microsoft_comic_chat_is_now_open_source) - [Microsoft Comic Chat is now open source](https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/)
* [2026-07-16, 11:31:41](https://lobste.rs/s/axdfjx/how_our_rust_zig_rewrite_is_going) - [How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 06:05:16](https://news.ycombinator.com/item?id=48930871) - [Roko&apos;s Dancing Basilisk](https://boston.conman.org/2025/12/02.1)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
* [2026-07-15, 20:50:00](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss) - [‘STEM Is Not Just About Formulas And Calculations, It Is Also About Creativity’](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss)
* [2026-07-15, 17:06:43](https://news.ycombinator.com/item?id=48923929) - [Funny item co-occurrences in 3.2M Instacart orders](https://rogerdickey.com/funny-item-co-occurrences-in-3-million-instacart-orders/)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 03:46:35](https://news.ycombinator.com/item?id=48916044) - [Is this the end of the once-mighty GoPro?](https://amateurphotographer.com/latest/photo-news/going-going-gone-is-this-the-end-of-the-once-mighty-gopro/)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
* [2026-07-14, 21:02:00](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss)
* [2026-07-14, 16:06:00](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss) - [US Weighs Removing Steering Wheel Requirement For Driverless Cars](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss)
* [2026-07-14, 14:02:36](https://news.ycombinator.com/item?id=48907063) - [Reviving a 15-year-old netbook with Arch Linux](https://parksb.github.io/en/article/41.html)
* [2026-07-14, 11:22:00](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss) - [Scientist Models Way To Make Sure No One&apos;s Violating The Ban On Nuclear Weapons In Space](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
