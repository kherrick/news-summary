# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Discoveries & Space Missions

* [NASA Delays Artemis II To March](https://science.slashdot.org/story/26/02/03/1931235/nasa-delays-artemis-ii-to-march?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [China Moon Mission: Aiming for 2030 lunar landing](https://spectrum.ieee.org/china-moon-mission-mengzhou-artemis)

* [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://science.slashdot.org/story/26/02/02/2029212/a-century-of-hair-samples-proves-leaded-gas-ban-worked?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Innovation

* [AliSQL: Alibaba's open-source MySQL with vector and DuckDB engines](https://github.com/alibaba/AliSQL)

* [FlashAttention-T: Towards Tensorized Attention](https://dl.acm.org/doi/10.1145/3774934.3786425)

* [Xcode 26.3 – Developers can leverage coding agents directly in Xcode](https://www.apple.com/newsroom/2026/02/xcode-26-point-3-unlocks-the-power-of-agentic-coding/)

* [Defining Safe Hardware Design](https://people.csail.mit.edu/rachit/files/pubs/safe-hdls.pdf)

* [Prek: A better, faster, drop-in pre-commit replacement, engineered in Rust](https://github.com/j178/prek)

## Cybersecurity & Privacy Concerns

* [Notepad++ supply chain attack breakdown](https://securelist.com/notepad-supply-chain-attack/118708/)

* [WhatsApp Encryption, a Lawsuit, and a Lot of Noise](https://blog.cryptographyengineering.com/2026/02/02/whatsapp-encryption-a-lawsuit-and-a-lot-of-noise/)

* [Hacking Moltbook: AI Social Network Reveals 1.5M API Keys](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)

## AI and Machine Learning

* [Expensively Quadratic: the LLM Agent Cost Curve](https://blog.exe.dev/expensively-quadratic)

* [GitHub Browser Plugin for AI Contribution Blame in Pull Requests](https://blog.rbby.dev/posts/github-ai-contribution-blame-for-pull-requests/)

* [Agent Skills](https://agentskills.io/home)

## Policy, Society & Regulation

* [Ultra-Processed Foods Should Be Treated More Like Cigarettes Than Food, Study Says](https://science.slashdot.org/story/26/02/03/196254/ultra-processed-foods-should-be-treated-more-like-cigarettes-than-food-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [France dumps Zoom and Teams as Europe seeks digital autonomy from the US](https://apnews.com/article/europe-digital-sovereignty-big-tech-9f5388b68a0648514cebc8d92f682060)

* [New York’s budget bill would require “blocking technology” on all 3D printers](https://blog.adafruit.com/2026/02/03/new-york-wants-to-ctrlaltdelete-your-3d-printer/)

## Computing & Engineering

* [Taming the Flat AST: Ergonomics in the Age of Zero Allocations](http://modern-c.blogspot.com/2026/02/taming-flat-ast-ergonomics-in-age-of.html)

* [The smallest build system](https://neugierig.org/software/blog/2026/01/smallest-build-system.html)

* [Implementing the Temporal proposal in JavaScriptCore](https://blogs.igalia.com/compilers/2026/02/02/implementing-the-temporal-proposal-in-javascriptcore)

## Finance & Business Moves

* [Google Plots Big Expansion in India as US Restricts Visas](https://tech.slashdot.org/story/26/02/03/190223/google-plots-big-expansion-in-india-as-us-restricts-visas?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [SpaceX Acquires xAI in $1.25 Trillion All-Stock Deal](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Leica Camera's Owners Weigh $1.2 Billion Sale of Controlling Stake](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-02-04, 00:54:18](https://lobste.rs/s/jjtnf9/notation_as_tool_for_thought_wavelets_j) - [Notation as a tool for thought: Wavelets in J](https://scottlocklin.wordpress.com/2014/11/14/notation-as-a-tool-for-thought-wavelets-in-j/)
* [2026-02-03, 23:47:00](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss) - [ChatGPT Wrote “Goodnight Moon” Suicide Lullaby for Man Who Later Killed Himself](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss)
* [2026-02-03, 23:31:00](https://tech.slashdot.org/story/26/02/03/180213/google-home-finally-adds-support-for-buttons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Home Finally Adds Support For Buttons](https://tech.slashdot.org/story/26/02/03/180213/google-home-finally-adds-support-for-buttons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 22:41:09](https://lobste.rs/s/ylrpaj/fitting_some_files_through_stdout_shaped) - [Fitting Some Files Through A Stdout-Shaped Hole](https://rtpg.co/2026/02/03/fitting-some-files-through-a-stdout-shaped-hole/)
* [2026-02-03, 22:35:27](https://news.ycombinator.com/item?id=46878338) - [Notepad++ supply chain attack breakdown](https://securelist.com/notepad-supply-chain-attack/118708/)
* [2026-02-03, 21:35:52](https://lobste.rs/s/eu12b9/taming_flat_ast_ergonomics_age_zero) - [Taming the Flat AST: Ergonomics in the Age of Zero Allocations](http://modern-c.blogspot.com/2026/02/taming-flat-ast-ergonomics-in-age-of.html)
* [2026-02-03, 21:30:00](https://science.slashdot.org/story/26/02/03/196254/ultra-processed-foods-should-be-treated-more-like-cigarettes-than-food-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Foods Should Be Treated More Like Cigarettes Than Food, Study Says](https://science.slashdot.org/story/26/02/03/196254/ultra-processed-foods-should-be-treated-more-like-cigarettes-than-food-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 21:15:48](https://news.ycombinator.com/item?id=46877403) - [FlashAttention-T: Towards Tensorized Attention](https://dl.acm.org/doi/10.1145/3774934.3786425)
* [2026-02-03, 20:00:00](https://science.slashdot.org/story/26/02/03/1931235/nasa-delays-artemis-ii-to-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Delays Artemis II To March](https://science.slashdot.org/story/26/02/03/1931235/nasa-delays-artemis-ii-to-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 19:37:30](https://news.ycombinator.com/item?id=46876105) - [Data centers in space makes no sense](https://civai.org/blog/space-data-centers)
* [2026-02-03, 19:32:11](https://news.ycombinator.com/item?id=46876047) - [China Moon Mission: Aiming for 2030 lunar landing](https://spectrum.ieee.org/china-moon-mission-mengzhou-artemis)
* [2026-02-03, 19:09:00](https://lobste.rs/s/dw3fy3/osmc_2025_easy_logging_refinement_with) - [OSMC 2025 - Easy logging refinement with FlowG](https://www.youtube.com/watch?v=zrvc6hPmNYI)
* [2026-02-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss) - [NASA Assembling a Formal Anomaly Review Board for Maven](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss)
* [2026-02-03, 19:02:00](https://tech.slashdot.org/story/26/02/03/190223/google-plots-big-expansion-in-india-as-us-restricts-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Plots Big Expansion in India as US Restricts Visas](https://tech.slashdot.org/story/26/02/03/190223/google-plots-big-expansion-in-india-as-us-restricts-visas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 18:40:18](https://news.ycombinator.com/item?id=46875228) - [AliSQL: Alibaba&apos;s open-source MySQL with vector and DuckDB engines](https://github.com/alibaba/AliSQL)
* [2026-02-03, 18:28:48](https://news.ycombinator.com/item?id=46875033) - [Y Combinator will let founders receive funds in stablecoins](https://fortune.com/2026/02/03/famed-startup-incubator-y-combinator-to-let-founders-receive-funds-in-stablecoins/)
* [2026-02-03, 18:14:03](https://lobste.rs/s/aiewta/gdpr_enforcement_is_broken) - [GDPR Enforcement Is Broken](https://nikolak.com/gdpr-failure/)
* [2026-02-03, 18:10:37](https://lobste.rs/s/kphf9n/java_sucks_2000) - [java sucks (2000)](https://www.jwz.org/doc/java.html)
* [2026-02-03, 18:04:08](https://news.ycombinator.com/item?id=46874619) - [Xcode 26.3 – Developers can leverage coding agents directly in Xcode](https://www.apple.com/newsroom/2026/02/xcode-26-point-3-unlocks-the-power-of-agentic-coding/)
* [2026-02-03, 18:01:00](https://news.slashdot.org/story/26/02/03/1754205/vibe-coding-kills-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Vibe Coding Kills Open Source&apos;](https://news.slashdot.org/story/26/02/03/1754205/vibe-coding-kills-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 17:51:16](https://lobste.rs/s/kzugo4/smallest_build_system) - [The smallest build system](https://neugierig.org/software/blog/2026/01/smallest-build-system.html)
* [2026-02-03, 17:50:55](https://lobste.rs/s/0stawc/expensively_quadratic_llm_agent_cost) - [Expensively Quadratic: the LLM Agent Cost Curve](https://blog.exe.dev/expensively-quadratic)
* [2026-02-03, 17:33:20](https://news.ycombinator.com/item?id=46874097) - [Deno Sandbox](https://deno.com/blog/introducing-deno-sandbox)
* [2026-02-03, 17:11:42](https://news.ycombinator.com/item?id=46873782) - [Show HN: Octosphere, a tool to decentralise scientific publishing](https://octosphere.social/)
* [2026-02-03, 17:11:29](https://lobste.rs/s/wrduhe/defining_safe_hardware_design) - [Defining Safe Hardware Design](https://people.csail.mit.edu/rachit/files/pubs/safe-hdls.pdf)
* [2026-02-03, 17:00:00](https://news.slashdot.org/story/26/02/03/1655249/youtube-kills-background-playback-on-third-party-mobile-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Kills Background Playback on Third-Party Mobile Browsers](https://news.slashdot.org/story/26/02/03/1655249/youtube-kills-background-playback-on-third-party-mobile-browsers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 16:56:06](https://news.ycombinator.com/item?id=46873574) - [221 Cannon is Not For Sale](https://fredbenenson.com/blog/2026/02/03/221-cannon-is-not-for-sale/)
* [2026-02-03, 16:53:50](https://news.ycombinator.com/item?id=46873539) - [1 kilobyte is precisely 1000 bytes?](https://waspdev.com/articles/2026-01-11/kilobyte-is-1000-bytes)
* [2026-02-03, 16:39:18](https://news.ycombinator.com/item?id=46873294) - [France dumps Zoom and Teams as Europe seeks digital autonomy from the US](https://apnews.com/article/europe-digital-sovereignty-big-tech-9f5388b68a0648514cebc8d92f682060)
* [2026-02-03, 16:29:34](https://news.ycombinator.com/item?id=46873138) - [Prek: A better, faster, drop-in pre-commit replacement, engineered in Rust](https://github.com/j178/prek)
* [2026-02-03, 16:03:21](https://news.ycombinator.com/item?id=46872733) - [Launch HN: Modelence (YC S25) – App Builder with TypeScript / MongoDB Framework](https://news.ycombinator.com/item?id=46872733)
* [2026-02-03, 16:01:50](https://news.ycombinator.com/item?id=46872706) - [Qwen3-Coder-Next](https://qwen.ai/blog?id=qwen3-coder-next)
* [2026-02-03, 16:00:00](https://slashdot.org/story/26/02/03/1513242/paypals-ceo-change-blindsided-hps-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal&apos;s CEO Change Blindsided HP&apos;s Board](https://slashdot.org/story/26/02/03/1513242/paypals-ceo-change-blindsided-hps-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 15:51:42](https://news.ycombinator.com/item?id=46872540) - [New York’s budget bill would require “blocking technology” on all 3D printers](https://blog.adafruit.com/2026/02/03/new-york-wants-to-ctrlaltdelete-your-3d-printer/)
* [2026-02-03, 15:44:35](https://lobste.rs/s/xfwfns/easily_write_bash_with_transpiler) - [Easily write Bash with a transpiler](https://fosdem.org/2026/schedule/event/GGLZS9-amber-lang-bash-transpiler/)
* [2026-02-03, 15:00:00](https://tech.slashdot.org/story/26/02/03/1445206/adobe-is-killing-a-popular-animation-and-game-development-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Is Killing A Popular Animation And Game Development Program](https://tech.slashdot.org/story/26/02/03/1445206/adobe-is-killing-a-popular-animation-and-game-development-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 14:55:48](https://lobste.rs/s/7c0zpv/implementing_temporal_proposal) - [Implementing the Temporal proposal in JavaScriptCore](https://blogs.igalia.com/compilers/2026/02/02/implementing-the-temporal-proposal-in-javascriptcore/)
* [2026-02-03, 14:35:25](https://news.ycombinator.com/item?id=46871473) - [GitHub Browser Plugin for AI Contribution Blame in Pull Requests](https://blog.rbby.dev/posts/github-ai-contribution-blame-for-pull-requests/)
* [2026-02-03, 14:17:00](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss) - [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss)
* [2026-02-03, 14:09:54](https://news.ycombinator.com/item?id=46871173) - [Agent Skills](https://agentskills.io/home)
* [2026-02-03, 14:00:00](https://slashdot.org/story/26/02/03/1343205/fintech-ceo-and-forbes-30-under-30-alum-charged-for-alleged-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fintech CEO and Forbes 30 Under 30 Alum Charged for Alleged Fraud](https://slashdot.org/story/26/02/03/1343205/fintech-ceo-and-forbes-30-under-30-alum-charged-for-alleged-fraud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 12:13:44](https://news.ycombinator.com/item?id=46870015) - [Bunny Database](https://bunny.net/blog/meet-bunny-database-the-sql-service-that-just-works/)
* [2026-02-03, 11:55:22](https://lobste.rs/s/jtfvkp/floppinux_embedded_linux_on_single) - [FLOPPINUX - An Embedded Linux on a Single Floppy - 2025 Edition](https://krzysztofjankowski.com/floppinux/floppinux-2025.html)
* [2026-02-03, 11:30:00](https://games.slashdot.org/story/26/02/03/0848248/the-switch-is-now-nintendos-best-selling-console-of-all-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Switch is Now Nintendo&apos;s Best-Selling Console of All Time](https://games.slashdot.org/story/26/02/03/0848248/the-switch-is-now-nintendos-best-selling-console-of-all-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 10:08:52](https://news.ycombinator.com/item?id=46868998) - [X offices raided in France as UK opens fresh investigation into Grok](https://www.bbc.com/news/articles/ce3ex92557jo)
* [2026-02-03, 09:37:40](https://news.ycombinator.com/item?id=46868759) - [What&apos;s up with all those equals signs anyway?](https://lars.ingebrigtsen.no/2026/02/02/whats-up-with-all-those-equals-signs-anyway/)
* [2026-02-03, 09:29:00](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss) - [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss)
* [2026-02-03, 09:26:48](https://lobste.rs/s/xyrr0q/hacking_moltbook_ai_social_network) - [Hacking Moltbook: AI Social Network Reveals 1.5M API Keys](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)
* [2026-02-03, 09:07:06](https://lobste.rs/s/iq3bp6/eigen_building_workspace) - [Eigen: Building a Workspace](https://reindernijhoff.net/2025/10/eigen-building-a-workspace/)
* [2026-02-03, 09:03:57](https://lobste.rs/s/nccupe/whatsapp_encryption_lawsuit_lot_noise) - [WhatsApp Encryption, a Lawsuit, and a Lot of Noise](https://blog.cryptographyengineering.com/2026/02/02/whatsapp-encryption-a-lawsuit-and-a-lot-of-noise/)
* [2026-02-03, 08:49:51](https://lobste.rs/s/xcg4j6/what_s_up_with_all_those_equals_signs) - [What’s up with all those equals signs anyway?](https://lars.ingebrigtsen.no/2026/02/02/whats-up-with-all-those-equals-signs-anyway/)
* [2026-02-03, 07:01:00](https://tech.slashdot.org/story/26/02/03/0512212/hidden-car-door-handles-are-officially-being-banned-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hidden Car Door Handles Are Officially Being Banned In China](https://tech.slashdot.org/story/26/02/03/0512212/hidden-car-door-handles-are-officially-being-banned-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 04:43:00](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss) - [How to Stop Microsoft From Letting the Government See Everything on Your Computer](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss)
* [2026-02-03, 03:46:00](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Acquires xAI in $1.25 Trillion All-Stock Deal](https://slashdot.org/story/26/02/03/0346252/spacex-acquires-xai-in-125-trillion-all-stock-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 03:22:25](https://lobste.rs/s/4wlhhv/rust_netbsd_kernel_other_odd_decisions) - [Rust in the NetBSD Kernel, and other odd decisions](https://bentsukun.ch/posts/netbsd-rust-kernel/)
* [2026-02-03, 03:20:36](https://lobste.rs/s/dktw14/plasma_effect) - [Plasma Effect](https://www.4rknova.com/blog/2016/11/01/plasma)
* [2026-02-03, 02:30:00](https://science.slashdot.org/story/26/02/02/2029212/a-century-of-hair-samples-proves-leaded-gas-ban-worked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://science.slashdot.org/story/26/02/02/2029212/a-century-of-hair-samples-proves-leaded-gas-ban-worked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-03, 00:16:41](https://lobste.rs/s/ecrnwg/one_machine_can_go_pretty_far_if_you_build) - [One machine can go pretty far if you build things properly (2022)](https://rachelbythebay.com/w/2022/01/27/scale/)
* [2026-02-03, 00:01:00](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leica Camera&apos;s Owners Weigh $1.2 Billion Sale of Controlling Stake](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 22:33:00](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Feds Skipping Infosec Industry&apos;s Biggest Conference This Year](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 21:43:21](https://lobste.rs/s/bywnqo/what_s_your_email_setup) - [What&apos;s your email setup?](https://lobste.rs/s/bywnqo/what_s_your_email_setup)
* [2026-02-02, 21:34:25](https://lobste.rs/s/pfhei9/zig_libc) - [zig libc](https://ziglang.org/devlog/2026/#2026-01-31)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 17:43:19](https://lobste.rs/s/7xegog/removing_tahoe_s_unwanted_menu_icons) - [Removing Tahoe’s Unwanted Menu Icons](https://weblog.rogueamoeba.com/2026/01/10/removing-tahoes-unwanted-menu-icons/)
* [2026-02-02, 15:34:49](https://lobste.rs/s/igyhgw/my_experience_with_vibe_coding) - [My experience with vibe coding](https://haskellforall.com/2026/02/my-experience-with-vibe-coding)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 11:21:09](https://lobste.rs/s/rcojcc/technology_nearly_perfect_usb_cable) - [Technology: The (nearly) perfect USB cable tester does exist](https://blog.literarily-starved.com/2026/02/technology-the-nearly-perfect-usb-cable-tester-does-exist/)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 04:49:12](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored) - [Notepad++ Hijacked by State-Sponsored Hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 20:01:00](https://news.ycombinator.com/item?id=46848876) - [Lessons learned shipping 500 units of my first hardware product](https://www.simonberens.com/p/lessons-learned-shipping-500-units)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 17:25:39](https://news.ycombinator.com/item?id=46847690) - [Show HN: Craftplan – I built my wife a production management tool for her bakery](https://github.com/puemos/craftplan)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 13:56:57](https://news.ycombinator.com/item?id=46846253) - [Flying Around the World in under 80 Days](https://pinchito.es/2026/avis-lxxx)
* [2026-02-01, 13:32:58](https://news.ycombinator.com/item?id=46846101) - [Decompiling and rewriting a 2003 game from its binary in two weeks](https://banteg.xyz/posts/crimsonland/)
* [2026-02-01, 12:13:22](https://news.ycombinator.com/item?id=46845650) - [Heritability of intrinsic human life span is about 50%](https://www.science.org/doi/10.1126/science.adz1187)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
* [2026-01-31, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss) - [Linux after Linus?](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss)
* [2026-01-31, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss) - [ Notes on the Intel 8086 Processor&apos;s Arithmetic-logic Unit ](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss)
* [2026-01-31, 10:19:00](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss) - [Signal President Warns AI Agents Are Making Encryption Irrelevant](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss)
* [2026-01-31, 05:42:00](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss) - [Remembering the YF-23 Stealth Fighter](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss)
* [2026-01-31, 05:32:12](https://news.ycombinator.com/item?id=46833798) - [Reference Target: having your encapsulation and eating it too](https://blogs.igalia.com/alice/reference-target-having-your-encapsulation-and-eating-it-too/)
* [2026-01-31, 04:34:25](https://news.ycombinator.com/item?id=46833534) - [Puget Systems Most Reliable Hardware of 2025](https://www.pugetsystems.com/labs/articles/puget-systems-most-reliable-hardware-of-2025/)
* [2026-01-31, 01:01:00](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss) - [County Pays $600,000 to Pentesters It Arrested for Assessing Courthouse Security](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss)
