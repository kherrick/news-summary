# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [ChatGPT's New Study Mode Is Designed To Help You Learn, Not Just Give Answers](https://news.slashdot.org/story/25/07/29/2042244/chatgpts-new-study-mode-is-designed-to-help-you-learn-not-just-give-answers?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Supervised Fine Tuning on Curated Data is Reinforcement Learning](https://arxiv.org/abs/2507.12856)

* [Apple Loses Fourth AI Researcher in a Month To Meta](https://apple.slashdot.org/story/25/07/29/196228/apple-loses-fourth-ai-researcher-in-a-month-to-meta?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [What does AI testing done right look like?](https://antithesis.com/blog/2025/ai_testing/)

* [KernelScript: DSL for eBPF-Centric Development](https://github.com/multikernel/kernelscript)

* [Anthropic Nears Deal To Raise Funding at $170 Billion Valuation](https://slashdot.org/story/25/07/29/1642226/anthropic-nears-deal-to-raise-funding-at-170-billion-valuation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Irrelevant facts about cats added to math problems increase LLM errors by 300%](https://www.science.org/content/article/scienceadviser-cats-confuse-ai)

## Technology and Software Development

* [Webflow Down for >31 Hours](https://status.webflow.com)

* [Microsoft bans LibreOffice developer's account without warning, rejects appeal](https://www.neowin.net/news/microsoft-bans-libreoffice-developers-account-without-warning-rejects-appeal/)

* [Show HN: A GitHub Action that quizzes you on a pull request](https://github.com/dkamm/pr-quiz)

* [Linux 6.16: faster file systems, improved confidential memory, more Rust support](https://www.zdnet.com/article/linux-6-16-brings-faster-file-systems-improved-confidential-memory-support-and-more-rust-support/)

* [A Periodic Table of System Design Principles](https://github.com/jarulraj/periodic-table)

* [The Useless useCallback](https://tkdodo.eu/blog/the-useless-use-callback)

* [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)

## Environmental and Scientific Discoveries

* [EPA Moves To Repeal Finding That Allows Climate Regulation](https://news.slashdot.org/story/25/07/29/208244/epa-moves-to-repeal-finding-that-allows-climate-regulation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [More honey bees dying, even as antibiotic use halves](https://news.uoguelph.ca/2025/07/more-honey-bees-dying-even-as-antibiotic-use-halves/)

* [How the brain increases blood flow on demand](https://hms.harvard.edu/news/how-brain-increases-blood-flow-demand)

* [Distorted Sound of the Early Universe Suggests We Are Living In a Giant Void](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Corporate and Industry Updates

* [Opera Accuses Microsoft of Anti-Competitive Edge Tactics](https://slashdot.org/story/25/07/29/204213/opera-accuses-microsoft-of-anti-competitive-edge-tactics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google Failed To Warn 10 Million of Turkey Earthquake Severity](https://tech.slashdot.org/story/25/07/29/1917206/google-failed-to-warn-10-million-of-turkey-earthquake-severity?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Boom Sparks Fight Over Soaring Power Costs](https://hardware.slashdot.org/story/25/07/29/138232/ai-boom-sparks-fight-over-soaring-power-costs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Unique Innovations and Cultural Studies

* [Eskil Steenberg – I've had it with the security orthodoxy](https://www.youtube.com/watch?v=SbeNRICgzTA)

* [RIP Shunsaku Tamiya, the man who made plastic model kits a global obsession](https://JapaneseNostalgicCar.com/rip-shunsaku-tamiya-plastic-model-kits/)

* [Show HN: I built an AI that turns any book into a text adventure game](https://www.kathaaverse.com/)

* [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&from=rss)

## Human Interest and Global Affairs

* [Dog-Walking Startup 'Wag' Files For Bankruptcy](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Visa and Mastercard Are Getting Overwhelmed By Gamer Fury Over Censorship](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&from=rss)

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

* [2025-07-29, 21:44:00](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss) - [Senator Demands Mandiant Hand Over Telco Salt Typhoon Probes](https://soylentnews.org/article.pl?sid=25/07/28/1520211&amp;from=rss)
* [2025-07-29, 21:40:00](https://news.slashdot.org/story/25/07/29/2042244/chatgpts-new-study-mode-is-designed-to-help-you-learn-not-just-give-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT&apos;s New Study Mode Is Designed To Help You Learn, Not Just Give Answers](https://news.slashdot.org/story/25/07/29/2042244/chatgpts-new-study-mode-is-designed-to-help-you-learn-not-just-give-answers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 21:38:58](https://news.ycombinator.com/item?id=44728554) - [Webflow Down for &gt;31 Hours](https://status.webflow.com)
* [2025-07-29, 21:34:28](https://news.ycombinator.com/item?id=44728513) - [CodeCrafters (YC S22) is hiring first Marketing Person](https://www.ycombinator.com/companies/codecrafters/jobs/7ATipKJ-1st-marketing-hire)
* [2025-07-29, 21:19:19](https://news.ycombinator.com/item?id=44728369) - [Microsoft bans LibreOffice developer&apos;s account without warning, rejects appeal](https://www.neowin.net/news/microsoft-bans-libreoffice-developers-account-without-warning-rejects-appeal/)
* [2025-07-29, 21:09:03](https://lobste.rs/s/ctjdsh/eskil_steenberg_i_ve_had_it_with_security) - [Eskil Steenberg – I&apos;ve had it with the security orthodoxy](https://www.youtube.com/watch?v=SbeNRICgzTA)
* [2025-07-29, 21:00:00](https://news.slashdot.org/story/25/07/29/208244/epa-moves-to-repeal-finding-that-allows-climate-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Moves To Repeal Finding That Allows Climate Regulation](https://news.slashdot.org/story/25/07/29/208244/epa-moves-to-repeal-finding-that-allows-climate-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 20:57:47](https://news.ycombinator.com/item?id=44728188) - [RIP Shunsaku Tamiya, the man who made plastic model kits a global obsession](https://JapaneseNostalgicCar.com/rip-shunsaku-tamiya-plastic-model-kits/)
* [2025-07-29, 20:20:00](https://slashdot.org/story/25/07/29/204213/opera-accuses-microsoft-of-anti-competitive-edge-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera Accuses Microsoft of Anti-Competitive Edge Tactics](https://slashdot.org/story/25/07/29/204213/opera-accuses-microsoft-of-anti-competitive-edge-tactics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 20:18:23](https://news.ycombinator.com/item?id=44727788) - [Supervised Fine Tuning on Curated Data is Reinforcement Learning](https://arxiv.org/abs/2507.12856)
* [2025-07-29, 19:40:00](https://tech.slashdot.org/story/25/07/29/1917206/google-failed-to-warn-10-million-of-turkey-earthquake-severity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Failed To Warn 10 Million of Turkey Earthquake Severity](https://tech.slashdot.org/story/25/07/29/1917206/google-failed-to-warn-10-million-of-turkey-earthquake-severity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 19:37:05](https://news.ycombinator.com/item?id=44727420) - [More honey bees dying, even as antibiotic use halves](https://news.uoguelph.ca/2025/07/more-honey-bees-dying-even-as-antibiotic-use-halves/)
* [2025-07-29, 19:36:02](https://lobste.rs/s/xdw1ns/typechecking_is_undecidable_when_type_is) - [Typechecking Is Undecidable When &apos;Type&apos; Is a Type (1989)](https://dspace.mit.edu/bitstream/handle/1721.1/149366/MIT-LCS-TR-458.pdf?sequence=6)
* [2025-07-29, 19:24:40](https://news.ycombinator.com/item?id=44727298) - [Maru OS – Your phone is your PC](https://maruos.com/)
* [2025-07-29, 19:15:24](https://lobste.rs/s/uketwa/artificial_intelligence_linux) - [Artificial Intelligence and the Linux Community](https://blogs.gnome.org/uraeus/2025/07/29/artificial-intelligence-and-the-linux-community/)
* [2025-07-29, 19:13:32](https://news.ycombinator.com/item?id=44727191) - [How the brain increases blood flow on demand](https://hms.harvard.edu/news/how-brain-increases-blood-flow-demand)
* [2025-07-29, 19:06:00](https://apple.slashdot.org/story/25/07/29/196228/apple-loses-fourth-ai-researcher-in-a-month-to-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Loses Fourth AI Researcher in a Month To Meta](https://apple.slashdot.org/story/25/07/29/196228/apple-loses-fourth-ai-researcher-in-a-month-to-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 18:36:51](https://news.ycombinator.com/item?id=44726838) - [Playing with Open Source LLMs](https://alicegg.tech//2025/07/29/open-source-llm.html)
* [2025-07-29, 18:36:34](https://news.ycombinator.com/item?id=44726837) - [The Making of Dario Amodei](https://www.bigtechnology.com/p/the-making-of-dario-amodei)
* [2025-07-29, 18:32:42](https://news.ycombinator.com/item?id=44726807) - [Show HN: Monchromate – the best greyscale browser extension](https://monochromate.lirena.in)
* [2025-07-29, 18:25:00](https://news.ycombinator.com/item?id=44726736) - [Stanford’s Management Science and Engineering programs](https://poetsandquants.com/2025/07/28/the-secret-stanford-program-no-ones-heard-about/)
* [2025-07-29, 18:24:23](https://news.ycombinator.com/item?id=44726731) - [A month using XMPP (using Snikket) for every call and chat (2023)](https://neilzone.co.uk/2023/08/a-month-using-xmpp-using-snikket-for-every-call-and-chat/)
* [2025-07-29, 18:20:11](https://news.ycombinator.com/item?id=44726672) - [Show HN: A GitHub Action that quizzes you on a pull request](https://github.com/dkamm/pr-quiz)
* [2025-07-29, 18:13:50](https://lobste.rs/s/qf8rlr/what_does_ai_testing_done_right_look_like) - [What does AI testing done right look like?](https://antithesis.com/blog/2025/ai_testing/)
* [2025-07-29, 18:09:58](https://news.ycombinator.com/item?id=44726551) - [Linux 6.16: faster file systems, improved confidential memory, more Rust support](https://www.zdnet.com/article/linux-6-16-brings-faster-file-systems-improved-confidential-memory-support-and-more-rust-support/)
* [2025-07-29, 17:44:58](https://news.ycombinator.com/item?id=44726280) - [A Periodic Table of System Design Principles](https://github.com/jarulraj/periodic-table)
* [2025-07-29, 17:22:00](https://slashdot.org/story/25/07/29/1721245/60-of-americans-use-ai-for-search-only-37-for-workplace-tasks-new-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [60% of Americans Use AI for Search, Only 37% for Workplace Tasks, New Poll Finds](https://slashdot.org/story/25/07/29/1721245/60-of-americans-use-ai-for-search-only-37-for-workplace-tasks-new-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 17:02:00](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss) - [Hacker Injects Malicious, Potentially Disk-Wiping Prompt Into Amazon&apos;s Ai Coding Assistant](https://soylentnews.org/article.pl?sid=25/07/27/2215239&amp;from=rss)
* [2025-07-29, 17:01:14](https://news.ycombinator.com/item?id=44725764) - [Study mode](https://openai.com/index/chatgpt-study-mode/)
* [2025-07-29, 17:00:43](https://news.ycombinator.com/item?id=44725757) - [Learning basic electronics by building fireflies](http://a64.in/posts/learning-basic-electronics-by-building-fireflies/)
* [2025-07-29, 16:52:49](https://lobste.rs/s/aqbs3w/this_was_not_really_quite_simple_building) - [This Was Not Really Quite Simple: Building a Redstone Calculator in Minecraft](https://www.youtube.com/watch?v=lebdqAN1pd8)
* [2025-07-29, 16:42:00](https://slashdot.org/story/25/07/29/1642226/anthropic-nears-deal-to-raise-funding-at-170-billion-valuation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Nears Deal To Raise Funding at $170 Billion Valuation](https://slashdot.org/story/25/07/29/1642226/anthropic-nears-deal-to-raise-funding-at-170-billion-valuation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 16:24:08](https://news.ycombinator.com/item?id=44725306) - [Launch HN: Hyprnote (YC S25) – An open-source AI meeting notetaker](https://news.ycombinator.com/item?id=44725306)
* [2025-07-29, 16:18:17](https://lobste.rs/s/qndrwj/kernelscript_dsl_for_ebpf_centric) - [KernelScript: DSL for eBPF-Centric Development](https://github.com/multikernel/kernelscript)
* [2025-07-29, 16:17:14](https://news.ycombinator.com/item?id=44725202) - [Show HN: I built an AI that turns any book into a text adventure game](https://www.kathaaverse.com/)
* [2025-07-29, 16:08:00](https://tech.slashdot.org/story/25/07/29/168232/the-worlds-biggest-passenger-planes-keep-breaking-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s Biggest Passenger Planes Keep Breaking Down](https://tech.slashdot.org/story/25/07/29/168232/the-worlds-biggest-passenger-planes-keep-breaking-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 16:07:13](https://lobste.rs/s/jyq5hg/2025_stack_overflow_developer_survey) - [2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/)
* [2025-07-29, 15:44:51](https://lobste.rs/s/ullr4n/printing_book_at_home_with_minimal) - [Printing a Book at Home with Minimal Equipment](https://huijzer.xyz/posts/98/printing-a-book-at-home-with-minimal-equipment)
* [2025-07-29, 15:30:34](https://lobste.rs/s/xqdty6/pretty_nice_web_framework) - [A pretty nice web framework](https://github.com/blaix/prettynice)
* [2025-07-29, 15:25:00](https://apple.slashdot.org/story/25/07/29/1510224/apple-opens-manufacturing-academy-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Opens Manufacturing Academy in Detroit](https://apple.slashdot.org/story/25/07/29/1510224/apple-opens-manufacturing-academy-in-detroit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 15:19:09](https://lobste.rs/s/rsdies/advanced_rust_macros_with_derive_deftly) - [Advanced Rust macros with derive-deftly](https://diziet.pages.torproject.net/rust-derive-deftly/latest/guide/)
* [2025-07-29, 15:04:22](https://lobste.rs/s/l84fkq/raspberry_pi_rp2350_a4_stepping_fixes_e9) - [Raspberry Pi RP2350 A4 stepping fixes E9 GPIO Erratum, glitching bugs, introduces 2MB flash variants](https://www.cnx-software.com/2025/07/29/raspberry-pi-rp2350-a4-stepping-fixes-e9-gpio-erratum-9-glitching-bugs-introduces-2mb-flash-variants/)
* [2025-07-29, 15:03:40](https://news.ycombinator.com/item?id=44724287) - [Project Zero – Policy and Disclosure: 2025 Edition](https://googleprojectzero.blogspot.com/2025/07/reporting-transparency.html)
* [2025-07-29, 14:59:18](https://news.ycombinator.com/item?id=44724238) - [Irrelevant facts about cats added to math problems increase LLM errors by 300%](https://www.science.org/content/article/scienceadviser-cats-confuse-ai)
* [2025-07-29, 14:47:00](https://apple.slashdot.org/story/25/07/29/1447214/apple-shift-turns-india-into-worlds-top-maker-of-us-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Shift Turns India Into World&apos;s Top Maker of US Smartphones](https://apple.slashdot.org/story/25/07/29/1447214/apple-shift-turns-india-into-worlds-top-maker-of-us-smartphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 14:44:00](https://news.ycombinator.com/item?id=44724068) - [Observable Notebooks 2.0 Technology Preview](https://observablehq.com/notebook-kit/)
* [2025-07-29, 14:00:00](https://hardware.slashdot.org/story/25/07/29/138232/ai-boom-sparks-fight-over-soaring-power-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Boom Sparks Fight Over Soaring Power Costs](https://hardware.slashdot.org/story/25/07/29/138232/ai-boom-sparks-fight-over-soaring-power-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 13:58:08](https://lobste.rs/s/4n7281/rules_derive_deriving_using_macro_rules) - [rules_derive: deriving using macro_rules](https://matx.com/research/rules_derive)
* [2025-07-29, 13:45:07](https://news.ycombinator.com/item?id=44723316) - [My 2.5 year old laptop can write Space Invaders in JavaScript now (GLM-4.5 Air)](https://simonwillison.net/2025/Jul/29/space-invaders/)
* [2025-07-29, 13:15:49](https://news.ycombinator.com/item?id=44722951) - [Linux Performance Analysis (2015)](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55)
* [2025-07-29, 13:14:41](https://lobste.rs/s/wd6fhe/ethersync_peer_peer_collaborative) - [Ethersync: Peer-to-peer collaborative editing of local text files](https://github.com/ethersync/ethersync)
* [2025-07-29, 13:00:00](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dog-Walking Startup &apos;Wag&apos; Files For Bankruptcy](https://slashdot.org/story/25/07/28/2359237/dog-walking-startup-wag-files-for-bankruptcy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 12:15:00](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss) - [Gold Can be Heated to 14 Times its Melting Point Without Melting](https://soylentnews.org/article.pl?sid=25/07/27/0234226&amp;from=rss)
* [2025-07-29, 12:03:14](https://lobste.rs/s/dp1rdd/i_m_never_going_back_matrix) - [I&apos;m never going back to Matrix](https://shkspr.mobi/blog/2025/07/im-never-going-back-to-matrix/)
* [2025-07-29, 11:43:17](https://lobste.rs/s/umbpkk/debugging_pixel_8_kernel_via_kgdb) - [Debugging the Pixel 8 kernel via KGDB](https://xairy.io/articles/pixel-kgdb)
* [2025-07-29, 11:21:54](https://lobste.rs/s/mygrq6/loading_credentials_from_bitwarden_with) - [Loading credentials from Bitwarden with direnv](https://ergaster.org/posts/2025/07/28-direnv-bitwarden-integration/)
* [2025-07-29, 10:24:11](https://lobste.rs/s/4ns2of/useless_usecallback) - [The Useless useCallback](https://tkdodo.eu/blog/the-useless-use-callback)
* [2025-07-29, 10:00:00](https://slashdot.org/story/25/07/28/2342234/paypal-expands-crypto-payments-for-us-merchants-to-lower-cross-border-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PayPal Expands Crypto Payments For US Merchants To Lower Cross-Border Fees](https://slashdot.org/story/25/07/28/2342234/paypal-expands-crypto-payments-for-us-merchants-to-lower-cross-border-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 07:40:24](https://lobste.rs/s/khuqm7/make_your_own_backup_system_part_2_forging) - [Make Your Own Backup System – Part 2: Forging the FreeBSD Backup Stronghold](https://it-notes.dragas.net/2025/07/29/make-your-own-backup-system-part-2-forging-the-freebsd-backup-stronghold/)
* [2025-07-29, 07:27:00](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss) - [Discovery Alert: Flaring Star, Toasted Planet](https://soylentnews.org/article.pl?sid=25/07/27/0228236&amp;from=rss)
* [2025-07-29, 07:00:00](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Distorted Sound of the Early Universe Suggests We Are Living In a Giant Void](https://science.slashdot.org/story/25/07/28/2351244/distorted-sound-of-the-early-universe-suggests-we-are-living-in-a-giant-void?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 03:49:02](https://lobste.rs/s/1sigov/weather_model_based_on_ads_b) - [Weather Model based on ADS-B](https://obrhubr.org/adsb-weather-model)
* [2025-07-29, 03:30:00](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa and Mastercard Are Getting Overwhelmed By Gamer Fury Over Censorship](https://yro.slashdot.org/story/25/07/28/2223235/visa-and-mastercard-are-getting-overwhelmed-by-gamer-fury-over-censorship?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-29, 02:52:58](https://lobste.rs/s/vmqywc/no_more_erlang_manuals) - [No more Erlang manuals](https://blog.whenhen.com/posts/no-more-erlang-manuals.html)
* [2025-07-29, 02:40:00](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss) - [Chinese Hackers Breached U.S. Army National Guard to Steal Network Configurations](https://soylentnews.org/article.pl?sid=25/07/26/1945219&amp;from=rss)
* [2025-07-28, 22:00:00](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss) - [As Site Blocking Is Increasing, European Commission Subtly Slaps Down Italy’s Piracy Shield](https://soylentnews.org/article.pl?sid=25/07/26/1935251&amp;from=rss)
* [2025-07-28, 19:28:17](https://lobste.rs/s/ucvpt5/i_designed_my_own_ridiculously_fast_game) - [I designed my own ridiculously fast game streaming video codec](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 16:18:45](https://lobste.rs/s/bqwfhe/on_designing_application_uis_for) - [On designing application UIs for children](https://shaneosullivan.wordpress.com/2025/07/28/on-designing-for-children/)
* [2025-07-28, 14:21:42](https://lobste.rs/s/iesijl/following_up_on_python_jit) - [Following up on the Python JIT](https://lwn.net/Articles/1029307/)
* [2025-07-28, 13:05:37](https://lobste.rs/s/r44lr9/ai_tool_i_find_useful) - [An AI tool I find useful](https://notes.billmill.org/blog/2025/07/An_AI_tool_I_find_useful.html)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 07:41:11](https://lobste.rs/s/zs2xhp/redditor_speculates_eu_age_verification) - [Redditor Speculates that EU age verification app to ban any Android system not licensed by Google](https://www.reddit.com/r/degoogle/comments/1mau7yl/eu_age_verification_app_to_ban_any_android_system/)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-27, 22:36:24](https://news.ycombinator.com/item?id=44705358) - [Placing Functions](https://blog.yoshuawuyts.com/placing-functions/)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 16:44:17](https://news.ycombinator.com/item?id=44695364) - [Microsoft Flight Simulator 2024: WebAssembly SDK](https://docs.flightsimulator.com/msfs2024/html/6_Programming_APIs/WASM/WebAssembly.htm)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 09:36:07](https://news.ycombinator.com/item?id=44692718) - [2D to 3D model and 3D print it](https://www.amodeling.com/)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 04:09:04](https://news.ycombinator.com/item?id=44691242) - [A grand tour through the essays of Lewis H. Lapham](https://www.laphamsquarterly.org/roundtable/motet-record)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
* [2025-07-25, 23:06:18](https://news.ycombinator.com/item?id=44689565) - [BugBash Ep1 – FoundationDB: from idea to Apple acquisition [video]](https://www.youtube.com/watch?v=C1nZzQqcPZw)
* [2025-07-25, 21:31:00](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss) - [NASA Scientist Finds Predicted Companion Star to Betelgeuse - NASA](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
