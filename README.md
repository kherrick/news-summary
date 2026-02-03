# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Developments

* [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&from=rss) - A major deal between OpenAI and Nvidia has reportedly stalled.

* [SpaceX Acquires xAI in $1.25 Trillion All-Stock Deal](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SpaceX completes a significant acquisition of xAI, signaling a shift in AI integration across industries.

* [Hacking Moltbook: AI Social Network Reveals 1.5M API Keys](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) - Security concerns arise with a breach exposing millions of API keys from an AI social network.

* [The Codex App](https://openai.com/index/introducing-the-codex-app/) - OpenAI introduces a new app revolutionizing interaction with AI for developers and users alike.

## Technology Security

* [WhatsApp Encryption, a Lawsuit, and a Lot of Noise](https://blog.cryptographyengineering.com/2026/02/02/whatsapp-encryption-a-lawsuit-and-a-lot-of-noise/) - Examining the growing legal and security pressures surrounding encryption technology.

* [A WhatsApp bug lets malicious media files spread through group chats](https://www.malwarebytes.com/blog/news/2026/01/a-whatsapp-bug-lets-malicious-media-files-spread-through-group-chats) - A vulnerability in WhatsApp raises concerns about user data security.

* [GitHub Browser Plugin for AI Contribution Blame in Pull Requests](https://blog.rbby.dev/posts/github-ai-contribution-blame-for-pull-requests/) - A new GitHub plugin enhances transparency in AI-driven pull requests and development coordination.

## Software Tools and Programming

* [Show HN: difi – A Git diff TUI with Neovim integration (written in Go)](https://github.com/oug-t/difi) - An innovative interface for viewing Git diffs, now integrated with Neovim.

* [Rust in the NetBSD Kernel, and other odd decisions](https://bentsukun.ch/posts/netbsd-rust-kernel/) - The unique implementation of Rust in the NetBSD kernel and its broader implications for system programming.

* [Implementing the Temporal proposal in JavaScriptCore](https://blogs.igalia.com/compilers/2026/02/02/implementing-the-temporal-proposal-in-javascriptcore/) - Enhancing JavaScriptCore with temporal features to meet modern development needs.

## Political and Industry Trends

* [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&from=rss) - In a push for national security and control, France transitions to locally developed communication platforms.

* [Hidden Car Door Handles Are Officially Being Banned In China](https://tech.slashdot.org/story/26/02/03/0512212/hidden-car-door-handles-are-officially-being-banned-in-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's move to improve safety establishes new regulations banning hidden car door handles.

## Historical and Cultural Insights

* [Banning lead in gas worked. The proof is in our hair](https://attheu.utah.edu/health-medicine/banning-lead-in-gas-worked-the-proof-is-in-our-hair/) - A retrospective study highlighting the health and environmental victories of banning lead in gas.

* [Tim Berners-Lee Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&from=rss) - The inventor of the World Wide Web discusses plans to tackle online challenges and protect its future.

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

* [2026-02-03, 15:48:03](https://news.ycombinator.com/item?id=46872481) - [Anthropic is Down](https://updog.ai/status/anthropic)
* [2026-02-03, 15:44:35](https://lobste.rs/s/xfwfns/easily_write_bash_with_transpiler) - [Easily write Bash with a transpiler](https://fosdem.org/2026/schedule/event/GGLZS9-amber-lang-bash-transpiler/)
* [2026-02-03, 15:28:59](https://news.ycombinator.com/item?id=46872190) - [Data Brokers Can Fuel Violence Against Public Servants](https://www.wired.com/story/how-data-brokers-can-fuel-violence-against-public-servants/)
* [2026-02-03, 15:00:00](https://tech.slashdot.org/story/26/02/03/1445206/adobe-is-killing-a-popular-animation-and-game-development-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Is Killing A Popular Animation And Game Development Program](https://tech.slashdot.org/story/26/02/03/1445206/adobe-is-killing-a-popular-animation-and-game-development-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 14:55:48](https://lobste.rs/s/7c0zpv/implementing_temporal_proposal) - [Implementing the Temporal proposal in JavaScriptCore](https://blogs.igalia.com/compilers/2026/02/02/implementing-the-temporal-proposal-in-javascriptcore/)
* [2026-02-03, 14:38:26](https://news.ycombinator.com/item?id=46871504) - [A WhatsApp bug lets malicious media files spread through group chats](https://www.malwarebytes.com/blog/news/2026/01/a-whatsapp-bug-lets-malicious-media-files-spread-through-group-chats)
* [2026-02-03, 14:35:25](https://news.ycombinator.com/item?id=46871473) - [GitHub Browser Plugin for AI Contribution Blame in Pull Requests](https://blog.rbby.dev/posts/github-ai-contribution-blame-for-pull-requests/)
* [2026-02-03, 14:28:01](https://news.ycombinator.com/item?id=46871387) - [Show HN: Sandboxing untrusted code using WebAssembly](https://github.com/mavdol/capsule)
* [2026-02-03, 14:17:00](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss) - [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss)
* [2026-02-03, 14:16:49](https://news.ycombinator.com/item?id=46871251) - [Show HN: Inverting Agent Model (App as Clients, Chat as Server and Reflection)](https://github.com/RAIL-Suite/RAIL)
* [2026-02-03, 14:10:21](https://news.ycombinator.com/item?id=46871179) - [Ask HN: Is there anyone here who still uses slide rules?](https://news.ycombinator.com/item?id=46871179)
* [2026-02-03, 14:09:54](https://news.ycombinator.com/item?id=46871173) - [Agent Skills](https://agentskills.io/home)
* [2026-02-03, 14:00:00](https://slashdot.org/story/26/02/03/1343205/fintech-ceo-and-forbes-30-under-30-alum-charged-for-alleged-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fintech CEO and Forbes 30 Under 30 Alum Charged for Alleged Fraud](https://slashdot.org/story/26/02/03/1343205/fintech-ceo-and-forbes-30-under-30-alum-charged-for-alleged-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 13:47:24](https://news.ycombinator.com/item?id=46870917) - [Show HN: difi – A Git diff TUI with Neovim integration (written in Go)](https://github.com/oug-t/difi)
* [2026-02-03, 13:26:20](https://lobste.rs/s/efg3rf/your_app_shouldn_t_have_happy_path) - [Your App Shouldn&apos;t Have a Happy Path](https://erickhun.com/posts/coding-agents-no-happy-path/)
* [2026-02-03, 12:35:33](https://lobste.rs/s/sbmtxh/millets_practical_memory_safety_thread) - [Millets: a practical memory-safety and thread-safety experiment](https://eagledot.xyz/millets.md.html)
* [2026-02-03, 12:13:44](https://news.ycombinator.com/item?id=46870015) - [Bunny Database](https://bunny.net/blog/meet-bunny-database-the-sql-service-that-just-works/)
* [2026-02-03, 12:00:23](https://news.ycombinator.com/item?id=46869901) - [Emerge Career (YC S22) is hiring a product designer](https://www.ycombinator.com/companies/emerge-career/jobs/omqT34S-founding-product-designer)
* [2026-02-03, 11:55:22](https://lobste.rs/s/jtfvkp/floppinux_embedded_linux_on_single) - [FLOPPINUX - An Embedded Linux on a Single Floppy - 2025 Edition](https://krzysztofjankowski.com/floppinux/floppinux-2025.html)
* [2026-02-03, 11:30:00](https://games.slashdot.org/story/26/02/03/0848248/the-switch-is-now-nintendos-best-selling-console-of-all-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Switch is Now Nintendo&apos;s Best-Selling Console of All Time](https://games.slashdot.org/story/26/02/03/0848248/the-switch-is-now-nintendos-best-selling-console-of-all-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 09:37:40](https://news.ycombinator.com/item?id=46868759) - [What&apos;s up with all those equals signs anyway?](https://lars.ingebrigtsen.no/2026/02/02/whats-up-with-all-those-equals-signs-anyway/)
* [2026-02-03, 09:29:00](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss) - [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss)
* [2026-02-03, 09:26:48](https://lobste.rs/s/xyrr0q/hacking_moltbook_ai_social_network) - [Hacking Moltbook: AI Social Network Reveals 1.5M API Keys](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)
* [2026-02-03, 09:07:06](https://lobste.rs/s/iq3bp6/eigen_building_workspace) - [Eigen: Building a Workspace](https://reindernijhoff.net/2025/10/eigen-building-a-workspace/)
* [2026-02-03, 09:06:04](https://news.ycombinator.com/item?id=46868479) - [Show HN: Safe-now.live – Ultra-light emergency info site (&lt;10KB)](https://safe-now.live)
* [2026-02-03, 09:03:57](https://lobste.rs/s/nccupe/whatsapp_encryption_lawsuit_lot_noise) - [WhatsApp Encryption, a Lawsuit, and a Lot of Noise](https://blog.cryptographyengineering.com/2026/02/02/whatsapp-encryption-a-lawsuit-and-a-lot-of-noise/)
* [2026-02-03, 08:49:51](https://lobste.rs/s/xcg4j6/what_s_up_with_all_those_equals_signs) - [What’s up with all those equals signs anyway?](https://lars.ingebrigtsen.no/2026/02/02/whats-up-with-all-those-equals-signs-anyway/)
* [2026-02-03, 08:45:57](https://news.ycombinator.com/item?id=46868318) - [LNAI – Define AI coding tool configs once, sync to Claude, Cursor, Codex, etc.](https://github.com/KrystianJonca/lnai)
* [2026-02-03, 07:01:00](https://tech.slashdot.org/story/26/02/03/0512212/hidden-car-door-handles-are-officially-being-banned-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hidden Car Door Handles Are Officially Being Banned In China](https://tech.slashdot.org/story/26/02/03/0512212/hidden-car-door-handles-are-officially-being-banned-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 04:43:00](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss) - [How to Stop Microsoft From Letting the Government See Everything on Your Computer](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss)
* [2026-02-03, 04:33:25](https://news.ycombinator.com/item?id=46866544) - [Floppinux – An Embedded Linux on a Single Floppy, 2025 Edition](https://krzysztofjankowski.com/floppinux/floppinux-2025.html)
* [2026-02-03, 03:46:00](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Acquires xAI in $1.25 Trillion All-Stock Deal](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 03:22:25](https://lobste.rs/s/4wlhhv/rust_netbsd_kernel_other_odd_decisions) - [Rust in the NetBSD Kernel, and other odd decisions](https://bentsukun.ch/posts/netbsd-rust-kernel/)
* [2026-02-03, 03:20:36](https://lobste.rs/s/dktw14/plasma_effect) - [Plasma Effect](https://www.4rknova.com/blog/2016/11/01/plasma)
* [2026-02-03, 03:02:05](https://lobste.rs/s/zloybk/writing_async_runtime_rust) - [Writing an Async Runtime in Rust](https://michaelhelvey.dev/posts/rust_async_runtime)
* [2026-02-03, 02:30:00](https://science.slashdot.org/story/26/02/02/2029212/a-century-of-hair-samples-proves-leaded-gas-ban-worked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://science.slashdot.org/story/26/02/02/2029212/a-century-of-hair-samples-proves-leaded-gas-ban-worked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 01:52:21](https://news.ycombinator.com/item?id=46865275) - [Banning lead in gas worked. The proof is in our hair](https://attheu.utah.edu/health-medicine/banning-lead-in-gas-worked-the-proof-is-in-our-hair/)
* [2026-02-03, 00:28:06](https://news.ycombinator.com/item?id=46864498) - [How does misalignment scale with model intelligence and task complexity?](https://alignment.anthropic.com/2026/hot-mess-of-ai/)
* [2026-02-03, 00:16:41](https://lobste.rs/s/ecrnwg/one_machine_can_go_pretty_far_if_you_build) - [One machine can go pretty far if you build things properly (2022)](https://rachelbythebay.com/w/2022/01/27/scale/)
* [2026-02-03, 00:01:00](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leica Camera&apos;s Owners Weigh $1.2 Billion Sale of Controlling Stake](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 22:33:00](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Feds Skipping Infosec Industry&apos;s Biggest Conference This Year](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 21:51:22](https://news.ycombinator.com/item?id=46862170) - [xAI joins SpaceX](https://www.spacex.com/updates#xai-joins-spacex)
* [2026-02-02, 21:43:21](https://lobste.rs/s/bywnqo/what_s_your_email_setup) - [What&apos;s your email setup?](https://lobste.rs/s/bywnqo/what_s_your_email_setup)
* [2026-02-02, 21:34:25](https://lobste.rs/s/pfhei9/zig_libc) - [zig libc](https://ziglang.org/devlog/2026/#2026-01-31)
* [2026-02-02, 21:28:16](https://news.ycombinator.com/item?id=46861842) - [GitHub experience various partial-outages/degradations](https://www.githubstatus.com?todayis=2026-02-02)
* [2026-02-02, 21:01:00](https://news.slashdot.org/story/26/02/02/1836226/finland-to-introduce-green-wave-automated-system-for-emergency-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finland To Introduce &apos;Green Wave&apos; Automated System For Emergency Vehicles](https://news.slashdot.org/story/26/02/02/1836226/finland-to-introduce-green-wave-automated-system-for-emergency-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 20:48:55](https://news.ycombinator.com/item?id=46861313) - [Anki ownership transferred to AnkiHub](https://forums.ankiweb.net/t/ankis-growing-up/68610)
* [2026-02-02, 20:01:00](https://tech.slashdot.org/story/26/02/02/1826219/microsoft-weighs-retreat-from-windows-11-ai-push-reviews-copilot-integrations-and-recall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Weighs Retreat From Windows 11 AI Push, Reviews Copilot Integrations and Recall](https://tech.slashdot.org/story/26/02/02/1826219/microsoft-weighs-retreat-from-windows-11-ai-push-reviews-copilot-integrations-and-recall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 19:32:12](https://lobste.rs/s/bp8ru2/largest_number_representable_64_bits) - [The largest number representable in 64 bits](https://tromp.github.io/blog/2026/01/28/largest-number-revised)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 19:00:16](https://lobste.rs/s/fb8jur/retro_web) - [The Retro Web](https://theretroweb.com/)
* [2026-02-02, 19:00:00](https://apple.slashdot.org/story/26/02/02/1741244/the-ai-boom-is-coming-for-apples-profit-margins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Boom Is Coming for Apple&apos;s Profit Margins](https://apple.slashdot.org/story/26/02/02/1741244/the-ai-boom-is-coming-for-apples-profit-margins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 18:02:48](https://news.ycombinator.com/item?id=46859054) - [The Codex App](https://openai.com/index/introducing-the-codex-app/)
* [2026-02-02, 18:01:00](https://it.slashdot.org/story/26/02/02/1652237/vibe-coded-social-network-for-ai-bots-exposed-data-on-thousands-of-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe-coded Social Network for AI Bots Exposed Data on Thousands of Humans](https://it.slashdot.org/story/26/02/02/1652237/vibe-coded-social-network-for-ai-bots-exposed-data-on-thousands-of-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 17:43:19](https://lobste.rs/s/7xegog/removing_tahoe_s_unwanted_menu_icons) - [Removing Tahoe’s Unwanted Menu Icons](https://weblog.rogueamoeba.com/2026/01/10/removing-tahoes-unwanted-menu-icons/)
* [2026-02-02, 17:25:26](https://news.ycombinator.com/item?id=46858577) - [Todd C. Miller – Sudo maintainer for over 30 years](https://www.millert.dev/)
* [2026-02-02, 17:00:00](https://it.slashdot.org/story/26/02/02/1646253/notepad-compromised-by-state-actor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Notepad++ Compromised By State Actor](https://it.slashdot.org/story/26/02/02/1646253/notepad-compromised-by-state-actor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 16:56:50](https://lobste.rs/s/8llm9z/rust_1_93_performance_improvements) - [Rust 1.93 performance improvements in format! and friends](https://hachyderm.io/@Mara/115542621720999480)
* [2026-02-02, 16:08:36](https://news.ycombinator.com/item?id=46857615) - [Hacking Moltbook](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)
* [2026-02-02, 16:01:30](https://news.ycombinator.com/item?id=46857488) - [Ask HN: Who is hiring? (February 2026)](https://news.ycombinator.com/item?id=46857488)
* [2026-02-02, 16:01:00](https://news.slashdot.org/story/26/02/02/1510241/high-speed-internet-boom-hits-low-tech-snag-a-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High-Speed Internet Boom Hits Low-Tech Snag: a Labor Shortage](https://news.slashdot.org/story/26/02/02/1510241/high-speed-internet-boom-hits-low-tech-snag-a-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 15:40:48](https://lobste.rs/s/c3vvtw/rust_coreutils_continues_working_toward) - [Rust Coreutils Continues Working Toward 100% GNU Compatibility](https://www.phoronix.com/news/Rust-Coreutils-FOSDEM-2026)
* [2026-02-02, 15:34:49](https://lobste.rs/s/igyhgw/my_experience_with_vibe_coding) - [My experience with vibe coding](https://haskellforall.com/2026/02/my-experience-with-vibe-coding)
* [2026-02-02, 14:43:00](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starbucks Bets on Robots To Brew a Turnaround in Customers](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 14:14:34](https://lobste.rs/s/9esltl/intro_cstml_xml_meets_json) - [Intro to CSTML (or: XML meets JSON)](https://docs.bablr.org/guides/cstml/)
* [2026-02-02, 11:21:09](https://lobste.rs/s/rcojcc/technology_nearly_perfect_usb_cable) - [Technology: The (nearly) perfect USB cable tester does exist](https://blog.literarily-starved.com/2026/02/technology-the-nearly-perfect-usb-cable-tester-does-exist/)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 08:12:25](https://lobste.rs/s/re5z0g/disconnected_git_workflow) - [The Disconnected Git Workflow](https://ploum.net/2026-01-31-offline-git-send-email.html)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 04:49:12](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored) - [Notepad++ Hijacked by State-Sponsored Hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 12:13:22](https://news.ycombinator.com/item?id=46845650) - [Heritability of intrinsic human life span is about 50%](https://www.science.org/doi/10.1126/science.adz1187)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 05:11:53](https://news.ycombinator.com/item?id=46843805) - [Archive.today is directing a DDoS attack against my blog?](https://gyrovague.com/2026/02/01/archive-today-is-directing-a-ddos-attack-against-my-blog/)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
* [2026-01-31, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss) - [Linux after Linus?](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss)
* [2026-01-31, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss) - [ Notes on the Intel 8086 Processor&apos;s Arithmetic-logic Unit ](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss)
* [2026-01-31, 10:19:00](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss) - [Signal President Warns AI Agents Are Making Encryption Irrelevant](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss)
* [2026-01-31, 05:42:00](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss) - [Remembering the YF-23 Stealth Fighter](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss)
* [2026-01-31, 01:01:00](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss) - [County Pays $600,000 to Pentesters It Arrested for Assessing Courthouse Security](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss)
* [2026-01-30, 20:22:00](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss) - [A Look at Potential Problems with Future AI](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss)
* [2026-01-30, 19:54:52](https://news.ycombinator.com/item?id=46829029) - [See how many words you have written in Hacker News comments](https://serjaimelannister.github.io/hn-words/)
* [2026-01-30, 15:38:00](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss) - [Salty Facts: Takeaways Have More Salt Than Labels Claim](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss)
* [2026-01-30, 10:46:00](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss) - [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)
* [2026-01-30, 09:10:48](https://news.ycombinator.com/item?id=46822177) - [The Connection Machine CM-1 \&quot;Feynman\&quot; T-shirt](https://tamikothiel.com/cm/cm-tshirt.html)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 03:17:32](https://news.ycombinator.com/item?id=46820142) - [4x faster network file sync with rclone (vs rsync) (2025)](https://www.jeffgeerling.com/blog/2025/4x-faster-network-file-sync-rclone-vs-rsync/)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
