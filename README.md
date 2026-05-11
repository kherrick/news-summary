# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Innovations

* [After 100 Years, Scientists Uncover Hidden Rule Governing Cosmic Rays](https://soylentnews.org/article.pl?sid=26/05/10/0245229&from=rss) - Researchers uncover a new rule governing cosmic rays after a century, shedding light on the behavior of these high-energy particles.

* [How Factorio Syncs A Million Objects over the network](https://www.youtube.com/watch?v=0FHSZ1hani0) - Discover how the popular game Factorio successfully manages large-scale object synchronization in a detailed technical explanation.

* [7 lines of code, 3 minutes: Implement a programming language (2010)](https://matt.might.net/articles/implementing-a-programming-language/) - A minimalist approach to creating a programming language in just a few lines of code.

* [Tiny-Lua-Compiler: Possibly the smallest Lua compiler ever](https://github.com/bytexenon/Tiny-Lua-Compiler) - Explore the development of a compact Lua compiler, potentially the smallest on record.

## Cybersecurity and Privacy

* [Mythos finds a curl vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/) - Analysis of a newly discovered vulnerability in the popular curl library and its implications.

* [Researcher Shows Edge Browser Stores Saved Passwords in Plaintext](https://soylentnews.org/article.pl?sid=26/05/09/118251&from=rss) - A startling discovery about Microsoft Edge storing sensitive user passwords in unencrypted format.

* [ClaudeBleed: A Flaw In Claude's Browser Extension Allows Any Extension to Hijack It](https://layerxsecurity.com/blog/a-flaw-in-claudes-browser-extension-allows-any-extension-to-hijack-it/) - A critical investigation into a vulnerability in Claude's browser extension.

* [Obsidian plugin was abused to deploy a remote access trojan](https://cyber.netsecops.io/articles/obsidian-plugin-abused-in-campaign-to-deploy-phantom-pulse-rat/) - How a plugin was exploited to deploy malicious software.

## Artificial Intelligence Trends and Issues

* [Google Chrome Downloading 4GB AI Model to Your Device Without Asking Re-Downloads When You Delete It](https://soylentnews.org/article.pl?sid=26/05/10/0243229&from=rss) - Concerns arise over Google Chrome's practice of downloading a massive AI model without user consent.

* [You Need AI That Reduces Maintenance Costs](https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs) - Insights on the need for AI solutions targeted at lowering long-term maintenance overhead.

* [Local AI needs to be the norm](https://unix.foo/posts/local-ai-needs-to-be-norm/) - A call for local AI models to become a standard over centralized solutions to prioritize user control and privacy.

## Cultural and Historical Perspectives

* [dBase: 1979-2026](https://delphinightmares.substack.com/p/dbase-1979-2026) - A retrospective look at the history of dBase, from its beginnings in 1979 to its end in 2026.

* [The Greatest Shot in Television: James Burke Had One Chance to Nail This Scene (2024)](https://www.openculture.com/2024/10/the-greatest-shot-in-television.html) - Revisiting a historic moment in television by legendary broadcaster James Burke.

* [Childhood Computing](https://lilysthings.org/blog/childhood-computing/) - An exploration of how early computing experiences shape one's career and understanding of technology.

## Corporate and Legal Developments

* [Open Source Project Shuts Down Over Legal Threats from 3D Printer Company Bambu Lab](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A 3D printing open-source initiative halts operations due to legal threats.

* [Big Tech is Moving Data Through the Gulf Using Fiber-Optic Cables Alongside Iraq's Oil Pipelines](https://tech.slashdot.org/story/26/05/10/2136216/big-tech-is-moving-data-through-the-gulf-using-fiber-optic-cables-alongside-iraqs-oil-pipelines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The convergence of energy and data infrastructure in the Gulf emerges as a unique strategy by major tech firms.

* [GM Secretly Sold California Drivers' Data, Agrees to Pay $12.75M In Privacy Settlement](https://yro.slashdot.org/story/26/05/10/1833256/gm-secretly-sold-california-drivers-data-agrees-to-pay-1275m-in-privacy-settlement?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Settlement reached after revelations that General Motors sold private driver data.

## Consumer and Social Trends

* [Ford's Electrified Vehicle Sales Dropped 31% in April From One Year Ago](https://tech.slashdot.org/story/26/05/10/237205/fords-electrified-vehicle-sales-dropped-31-in-april-from-one-year-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Analysis of declining sales of Ford's electric vehicles and its implications.

* [Meta's Embrace of AI is Making Its Employees Miserable](https://tech.slashdot.org/story/26/05/10/0545234/nyt-metas-embrace-of-ai-is-making-its-employees-miserable?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Report claims that Meta's adoption of AI technologies negatively impacts its workforce.

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

* [2026-05-11, 08:04:00](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss) - [After 100 Years, Scientists Uncover Hidden Rule Governing Cosmic Rays](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss)
* [2026-05-11, 07:34:00](https://tech.slashdot.org/story/26/05/10/237205/fords-electrified-vehicle-sales-dropped-31-in-april-from-one-year-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford&apos;s Electrified Vehicle Sales Dropped 31% in April From One Year Ago](https://tech.slashdot.org/story/26/05/10/237205/fords-electrified-vehicle-sales-dropped-31-in-april-from-one-year-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 07:24:32](https://lobste.rs/s/am7evd/mythos_finds_curl_vulnerability) - [Mythos finds a curl vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/)
* [2026-05-11, 06:54:03](https://lobste.rs/s/jqr0fm/fully_preserving_fisher_price_pixter) - [Fully Preserving Fisher-Price Pixter](https://dmitry.gr/?r=05.Projects&amp;proj=37.%20Pixter)
* [2026-05-11, 06:39:08](https://news.ycombinator.com/item?id=48091737) - [Mythos Finds a Curl Vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/)
* [2026-05-11, 05:38:44](https://lobste.rs/s/2r03i7/how_factorio_syncs_million_objects_over) - [How Factorio Syncs A Million Objects over the network](https://www.youtube.com/watch?v=0FHSZ1hani0)
* [2026-05-11, 04:47:23](https://lobste.rs/s/dpzgbc/dbase_1979_2026) - [dBase: 1979-2026](https://delphinightmares.substack.com/p/dbase-1979-2026)
* [2026-05-11, 04:34:40](https://news.ycombinator.com/item?id=48091085) - [7 lines of code, 3 minutes: Implement a programming language (2010)](https://matt.might.net/articles/implementing-a-programming-language/)
* [2026-05-11, 03:34:00](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Project Shuts Down Over Legal Threats from 3D Printer Company Bambu Lab](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 03:30:32](https://lobste.rs/s/m9c8st/unlocking_encrypted_zfs_volumes_with) - [Unlocking Encrypted ZFS Volumes with a Passkey](https://withblue.ink/2026/05/09/revaulter-encrypted-zfs-passkey.html)
* [2026-05-11, 03:21:00](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss) - [Google Chrome Downloading 4GB AI Model to Your Device Without Asking Re-Downloads When You Delete It](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss)
* [2026-05-11, 02:43:34](https://news.ycombinator.com/item?id=48090521) - [The Greatest Shot in Television: James Burke Had One Chance to Nail This Scene (2024)](https://www.openculture.com/2024/10/the-greatest-shot-in-television.html)
* [2026-05-11, 02:19:28](https://lobste.rs/s/fy4spr/you_need_ai_reduces_maintenance_costs) - [You Need AI That Reduces Maintenance Costs](https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs)
* [2026-05-11, 02:06:29](https://news.ycombinator.com/item?id=48090276) - [Show HN: adamsreview – better multi-agent PR reviews for Claude Code](https://github.com/adamjgmiller/adamsreview)
* [2026-05-11, 01:34:00](https://science.slashdot.org/story/26/05/11/0055243/most-polymarket-users-lose-money-while-top-1-claim-765-of-gains-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most Polymarket Users Lose Money, While Top 1% Claim 76.5% of Gains, Study Finds](https://science.slashdot.org/story/26/05/11/0055243/most-polymarket-users-lose-money-while-top-1-claim-765-of-gains-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 01:23:51](https://news.ycombinator.com/item?id=48090029) - [I&apos;m going back to writing code by hand](https://blog.k10s.dev/im-going-back-to-writing-code-by-hand/)
* [2026-05-11, 00:16:00](https://games.slashdot.org/story/26/05/11/0012211/playstation3-emulator-devs-politely-ask-contributors-to-stop-submitting-ai-slop-pull-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation3 Emulator Devs Politely Ask Contributors to Stop Submitting &apos;AI Slop&apos; Pull Requests ](https://games.slashdot.org/story/26/05/11/0012211/playstation3-emulator-devs-politely-ask-contributors-to-stop-submitting-ai-slop-pull-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 23:39:55](https://news.ycombinator.com/item?id=48089289) - [An AI coding agent, used to write code, needs to reduce your maintenance costs](https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs)
* [2026-05-10, 23:17:43](https://lobste.rs/s/wnylwv/my_pastebin_clone_vivipara_language) - [My pastebin clone Vivipara and language musings](https://akselmo.dev/posts/vivipara-and-languages/)
* [2026-05-10, 23:09:39](https://lobste.rs/s/zocyee/replacing_ctrl_r_bash_without_tiocsti) - [Replacing Ctrl-R in Bash without TIOCSTI](https://blog.rickardlindberg.me/2025/01/19/replacing-ctrlr-in-bash-without.html)
* [2026-05-10, 23:09:10](https://news.ycombinator.com/item?id=48089091) - [Running local models on an M4 with 24GB memory](https://jola.dev/posts/running-local-models-on-m4)
* [2026-05-10, 23:02:31](https://news.ycombinator.com/item?id=48089049) - [How Fast Does Claude, Acting as a User Space IP Stack, Respond to Pings?](https://dunkels.com/adam/claude-user-space-ip-stack-ping/)
* [2026-05-10, 22:39:00](https://tech.slashdot.org/story/26/05/10/224222/honda-patents-a-fake-clutch-for-electric-motorcycles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Honda Patents a Fake Clutch for Electric Motorcycles](https://tech.slashdot.org/story/26/05/10/224222/honda-patents-a-fake-clutch-for-electric-motorcycles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 22:37:00](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss) - [Researcher Shows Edge Browser Stores Saved Passwords in Plaintext](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss)
* [2026-05-10, 22:02:43](https://news.ycombinator.com/item?id=48088576) - [Obsidian plugin was abused to deploy a remote access trojan](https://cyber.netsecops.io/articles/obsidian-plugin-abused-in-campaign-to-deploy-phantom-pulse-rat/)
* [2026-05-10, 21:51:34](https://lobste.rs/s/r1eihn/claudebleed_flaw_claude_s_browser) - [ClaudeBleed: A Flaw In Claude&apos;s Browser Extension Allows Any Extension to Hijack It](https://layerxsecurity.com/blog/a-flaw-in-claudes-browser-extension-allows-any-extension-to-hijack-it/)
* [2026-05-10, 21:39:00](https://tech.slashdot.org/story/26/05/10/2136216/big-tech-is-moving-data-through-the-gulf-using-fiber-optic-cables-alongside-iraqs-oil-pipelines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Big Tech is Moving Data Through the Gulf Using Fiber-Optic Cables Alongside Iraq&apos;s Oil Pipelines](https://tech.slashdot.org/story/26/05/10/2136216/big-tech-is-moving-data-through-the-gulf-using-fiber-optic-cables-alongside-iraqs-oil-pipelines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 21:16:58](https://news.ycombinator.com/item?id=48088151) - [Maryland citizens hit with $2B power grid upgrade for out-of-state AI](https://www.tomshardware.com/tech-industry/artificial-intelligence/maryland-citizens-slapped-with-usd2-billion-grid-upgrade-bill-for-out-of-state-ai-data-centers-state-complains-to-federal-energy-regulators-says-additional-cost-breaks-ratepayer-protection-pledge-promises)
* [2026-05-10, 21:07:33](https://lobste.rs/s/ni8b3e/childhood_computing) - [Childhood Computing](https://lilysthings.org/blog/childhood-computing/)
* [2026-05-10, 21:04:55](https://lobste.rs/s/6f9o6w/robot_dogs_are_security_nightmare) - [Robot Dogs Are a Security Nightmare](https://www.youtube.com/watch?v=lA8WuXDXfcI)
* [2026-05-10, 20:59:58](https://lobste.rs/s/np3vpy/tiny_lua_compiler_possibly_smallest_lua) - [Tiny-Lua-Compiler: Possibly the smallest Lua compiler ever](https://github.com/bytexenon/Tiny-Lua-Compiler)
* [2026-05-10, 20:07:57](https://lobste.rs/s/njobov/let_go_almost_clojure_written_go) - [let-go: Almost Clojure written in Go](https://github.com/nooga/let-go)
* [2026-05-10, 19:55:00](https://slashdot.org/story/26/05/10/1953232/challenging-ups-and-fedex-amazon-opens-its-shipping-network-to-all-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Challenging UPS and FedEx, Amazon Opens Its Shipping Network to All Businesses](https://slashdot.org/story/26/05/10/1953232/challenging-ups-and-fedex-amazon-opens-its-shipping-network-to-all-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 18:35:00](https://yro.slashdot.org/story/26/05/10/1833256/gm-secretly-sold-california-drivers-data-agrees-to-pay-1275m-in-privacy-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Secretly Sold California Drivers&apos; Data, Agrees to Pay $12.75M In Privacy Settlement](https://yro.slashdot.org/story/26/05/10/1833256/gm-secretly-sold-california-drivers-data-agrees-to-pay-1275m-in-privacy-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 18:06:47](https://lobste.rs/s/qxkdgl/90_day_disclosure_policy_is_dead) - [the 90 day disclosure policy is dead](https://blog.himanshuanand.com/2026/05/the-90-day-disclosure-policy-is-dead/)
* [2026-05-10, 17:54:02](https://news.ycombinator.com/item?id=48086190) - [Hardware Attestation as Monopoly Enabler](https://grapheneos.social/@GrapheneOS/116550899908879585)
* [2026-05-10, 17:52:00](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss) - [Huawei Braces for $12 Billion in AI Chip Revenue Driven by Homegrown AI Model Demand](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss)
* [2026-05-10, 17:43:10](https://news.ycombinator.com/item?id=48086082) - [Incident Report: CVE-2024-YIKES](https://nesbitt.io/2026/02/03/incident-report-cve-2024-yikes.html)
* [2026-05-10, 17:34:41](https://news.ycombinator.com/item?id=48085993) - [Ask HN: What are you working on? (May 2026)](https://news.ycombinator.com/item?id=48085993)
* [2026-05-10, 17:19:28](https://news.ycombinator.com/item?id=48085821) - [Local AI needs to be the norm](https://unix.foo/posts/local-ai-needs-to-be-norm/)
* [2026-05-10, 17:15:10](https://news.ycombinator.com/item?id=48085782) - [Traces Of Humanity](https://tracesofhumanity.org/hello-world/)
* [2026-05-10, 16:34:00](https://developers.slashdot.org/story/26/05/10/0618225/amazon-relents-lets-its-programmers-use-openais-codex-and-anthropics-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Relents, Lets its Programmers Use OpenAI&apos;s Codex and Anthropic&apos;s Claude](https://developers.slashdot.org/story/26/05/10/0618225/amazon-relents-lets-its-programmers-use-openais-codex-and-anthropics-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 16:03:37](https://news.ycombinator.com/item?id=48085055) - [The locals don&apos;t know](https://www.quarter--mile.com/The-Locals-Dont-Know)
* [2026-05-10, 15:40:37](https://lobste.rs/s/iuctn9/we_see_something_works_then_we_understand) - [We see something that works, and then we understand it](https://lemire.me/blog/2025/12/04/we-see-something-that-works-and-then-we-understand-it/)
* [2026-05-10, 15:34:00](https://science.slashdot.org/story/26/05/10/0050223/rocket-lab-reports-growing-demand-for-commercial-space-products-stock-surges-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rocket Lab Reports Growing Demand for Commercial Space Products.  Stock Surges 34%](https://science.slashdot.org/story/26/05/10/0050223/rocket-lab-reports-growing-demand-for-commercial-space-products-stock-surges-34?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 15:05:18](https://lobste.rs/s/qbliwt/wayland_fyi_minimalist_wayland_special) - [wayland.fyi minimalist wayland special interest group](https://wayland.fyi/)
* [2026-05-10, 14:55:11](https://lobste.rs/s/b6fyzj/so_you_ve_installed_fzf_now_what_2023) - [So you&apos;ve installed `fzf`. Now what? (2023)](https://andrew-quinn.me/fzf/)
* [2026-05-10, 14:34:00](https://it.slashdot.org/story/26/05/10/0441253/unemployment-ticked-up-in-americas-it-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unemployment Ticked Up in America&apos;s IT Sector](https://it.slashdot.org/story/26/05/10/0441253/unemployment-ticked-up-in-americas-it-sector?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 13:12:55](https://lobste.rs/s/q0bvq9/debian_must_ship_reproducible_packages) - [Debian must ship reproducible packages](https://lists.debian.org/debian-devel-announce/2026/05/msg00001.html)
* [2026-05-10, 13:05:00](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss) - [The French Administrative Supreme Court Rules Against HADOPI in Favor of La Quadrature Du Net](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss)
* [2026-05-10, 12:58:29](https://lobste.rs/s/1p2yun/freebsd_local_privilege_escalation_via) - [FreeBSD: Local privilege escalation via execve()](https://www.freebsd.org/security/advisories/FreeBSD-SA-26:13.exec.asc)
* [2026-05-10, 11:42:30](https://lobste.rs/s/xb2edj/replacing_3_gb_sqlite_database_with_10_mb) - [Replacing a 3 GB SQLite database with a 10 MB FST (finite state transducer) binary](https://til.andrew-quinn.me/posts/replacing-a-3-gb-sqlite-database-with-a-7-mb-fst-finite-state-trandsucer-binary/)
* [2026-05-10, 11:34:00](https://yro.slashdot.org/story/26/05/10/032247/the-eu-considers-restricting-use-of-us-cloud-platforms-for-sensitive-government-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The EU Considers Restricting Use of US Cloud Platforms for Sensitive Government Data](https://yro.slashdot.org/story/26/05/10/032247/the-eu-considers-restricting-use-of-us-cloud-platforms-for-sensitive-government-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 10:35:23](https://lobste.rs/s/ajbrdr/idempotency_is_easy_until_second_request) - [Idempotency Is Easy Until the Second Request Is Different](https://blog.dochia.dev/blog/idempotency/)
* [2026-05-10, 08:21:00](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss) - [Apple Agrees to Pay iPhone Owners $250 Million for Not Delivering AI Siri](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss)
* [2026-05-10, 07:34:00](https://tech.slashdot.org/story/26/05/10/0545234/nyt-metas-embrace-of-ai-is-making-its-employees-miserable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYT:  &apos;Meta&apos;s Embrace of AI Is Making Its Employees Miserable&apos;](https://tech.slashdot.org/story/26/05/10/0545234/nyt-metas-embrace-of-ai-is-making-its-employees-miserable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 07:01:30](https://lobste.rs/s/kuhmb0/ai_is_breaking_two_vulnerability) - [AI is Breaking Two Vulnerability Cultures](https://www.jefftk.com/p/ai-is-breaking-two-vulnerability-cultures)
* [2026-05-10, 06:20:50](https://news.ycombinator.com/item?id=48081469) - [Task Paralysis and AI](https://g5t.de/articles/20260510-task-paralysis-and-ai/index.html)
* [2026-05-10, 03:34:00](https://hardware.slashdot.org/story/26/05/10/0214232/changing-of-the-guard-amd-intel-and-micron-soar-while-nvidia-lags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Changing of the Guard&apos;?  AMD, Intel, and Micron Soar While Nvidia Lags](https://hardware.slashdot.org/story/26/05/10/0214232/changing-of-the-guard-amd-intel-and-micron-soar-while-nvidia-lags?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 03:33:00](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss) - [Chocolate Factory Strikes Again (and Again, and Again, and ...)](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss)
* [2026-05-10, 03:14:27](https://lobste.rs/s/bfiq9k/flipping_bozo_bit_on_flips_learning_off) - [Flipping the bozo bit on flips the learning off](https://surfingcomplexity.blog/2026/05/09/flipping-the-bozo-bit-on-flips-the-learning-off/)
* [2026-05-10, 01:34:00](https://news.slashdot.org/story/26/05/10/0023237/open-source-registries-join-linux-foundation-working-group-to-address-machine-generated-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Registries Join Linux Foundation Working Group to Address Machine-Generated Traffic](https://news.slashdot.org/story/26/05/10/0023237/open-source-registries-join-linux-foundation-working-group-to-address-machine-generated-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-09, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/09/1052226&amp;from=rss) - [Meta Is Dying](https://soylentnews.org/article.pl?sid=26/05/09/1052226&amp;from=rss)
* [2026-05-09, 18:43:45](https://lobste.rs/s/ebg5hg/laptops_all_have_built_security_tokens) - [Laptops all have built-in security tokens these days](https://ahelwer.ca/post/2026-05-08-builtin-u2f/)
* [2026-05-09, 18:03:00](https://soylentnews.org/article.pl?sid=26/05/09/0813214&amp;from=rss) - [Russia&apos;s Censor Body, Roskomnadzor, Wants to Block 92% of VPN Apps by 2030](https://soylentnews.org/article.pl?sid=26/05/09/0813214&amp;from=rss)
* [2026-05-09, 17:28:00](https://news.ycombinator.com/item?id=48076629) - [Shelf Source: Tom MacWright](https://roadlessread.com/views/ss-macwright)
* [2026-05-09, 16:12:57](https://lobste.rs/s/vbit2a/i_will_not_add_query_strings_your_urls) - [I Will Not Add Query Strings to Your URLs](https://susam.net/no-query-strings.html)
* [2026-05-09, 14:49:48](https://news.ycombinator.com/item?id=48075429) - [Walking slower? Your ears, not your knees, might be the problem](https://www.wsj.com/health/wellness/hearing-loss-walking-speed-iphone-study-c53c482a)
* [2026-05-09, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/08/1125252&amp;from=rss) - [This New “Sound Laser” Could Measure Gravity With Stunning Precision](https://soylentnews.org/article.pl?sid=26/05/08/1125252&amp;from=rss)
* [2026-05-09, 08:37:41](https://news.ycombinator.com/item?id=48073201) - [I returned to AWS and was reminded why I left](http://fourlightyears.blogspot.com/2026/05/i-returned-to-aws-and-was-reminded-hard.html)
* [2026-05-09, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/08/1121205&amp;from=rss) - [Trump Administration Considers Mandatory Pre-Release Vetting of AI Models](https://soylentnews.org/article.pl?sid=26/05/08/1121205&amp;from=rss)
* [2026-05-09, 03:48:00](https://soylentnews.org/article.pl?sid=26/05/08/1111240&amp;from=rss) - [Widely Used Daemon Tools Disk App Backdoored in Monthlong Supply-Chain Attack](https://soylentnews.org/article.pl?sid=26/05/08/1111240&amp;from=rss)
* [2026-05-08, 23:03:00](https://soylentnews.org/article.pl?sid=26/05/08/113258&amp;from=rss) - [Mozilla Says 271 Vulnerabilities Found by Mythos Have “Almost No False Positives”](https://soylentnews.org/article.pl?sid=26/05/08/113258&amp;from=rss)
* [2026-05-08, 19:36:45](https://news.ycombinator.com/item?id=48067698) - [Guy Goma&apos;s Accidental BBC Interview Lives on After 20 Years](https://www.nytimes.com/2026/05/06/business/media/bbc-guy-goma-interview.html)
* [2026-05-08, 18:21:55](https://news.ycombinator.com/item?id=48066872) - [Ice Cream Blending (1965) [pdf]](https://bitsavers.org/pdf/ibm/generalInfo/E20-0156-0_Linear_Programming_-_Ice_Cream_Blending.pdf)
* [2026-05-08, 18:14:00](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss) - [Starbucks CEO Defends $9 Coffee: ‘A Really Affordable Premium Experience’](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss)
* [2026-05-08, 13:35:00](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss) - [Astronomers Pin Down the Origins of a Planetary Odd Couple](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss)
* [2026-05-08, 11:26:38](https://news.ycombinator.com/item?id=48061602) - [Stop MitM on the first SSH connection, on any VPS or cloud provider](https://www.joachimschipper.nl/Stop%20MITM%20on%20the%20first%20SSH%20connection,%20on%20any%20VPS%20or%20cloud%20provider.html)
* [2026-05-08, 11:21:26](https://news.ycombinator.com/item?id=48061556) - [Eight More &apos;8-Bit Era&apos; Microprocessors](https://thechipletter.substack.com/p/eight-more-8-bit-era-microprocessors)
* [2026-05-08, 08:49:00](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss) - [Nissan Redirects Mississippi Jobs To Trucks, SUVs Now](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss)
* [2026-05-08, 05:00:05](https://news.ycombinator.com/item?id=48058757) - [dBase: 1979-2026](https://delphinightmares.substack.com/p/dbase-1979-2026)
* [2026-05-08, 03:57:00](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss) - [ Making Wooden Skis by Hand](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss)
* [2026-05-08, 00:55:25](https://news.ycombinator.com/item?id=48057144) - [Seeing Birdsong](https://www.lucioarese.net/seeing-birdsong/)
* [2026-05-07, 23:49:51](https://news.ycombinator.com/item?id=48056639) - [The people preserving the scientific practice of bird banding](https://thenarwhal.ca/bird-banding-ontario/)
* [2026-05-07, 23:14:00](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss) - [Taiwan Cops Say Student&apos;s Radio Kit Brought Bullet Trains to a Standstill](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss)
* [2026-05-07, 18:29:00](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss) - [The RAM Crisis Isn&apos;t Going Anywhere: Micron CEO Warns AI Will Need More Memory](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss)
* [2026-05-07, 15:34:04](https://news.ycombinator.com/item?id=48050666) - [First tunnel element of the Fehmarnbelt Tunnel immersed](https://www.arup.com/en-us/news/first-fehmarnbelt-tunnel-element-lowered/)
* [2026-05-07, 13:51:14](https://news.ycombinator.com/item?id=48049460) - [Gode Cookery – Authentic Medieval Recipes](http://www.godecookery.com/godeboke/godeboke.htm)
* [2026-05-07, 13:43:00](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss) - [The US Just Found Enough Lithium To Rival China - Now Comes The Hard Part](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss)
* [2026-05-07, 11:02:28](https://news.ycombinator.com/item?id=48047930) - [Idempotency is easy until the second request is different](https://blog.dochia.dev/blog/idempotency/)
* [2026-05-07, 09:00:00](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss) - [Employees Are Now More Dangerous to Their Company Than External Hackers](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss)
* [2026-05-07, 04:13:00](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss) - [Utah Will Ban VPN Use to Circumvent Age Verification](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss)
