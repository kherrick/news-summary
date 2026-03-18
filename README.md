# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Nvidia Announces Vera Rubin Space-1 Chip System For Orbital AI Data Centers](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Nvidia reveals its advanced chip system designed to power AI data centers in orbit, marking progress in space-based technologies. [Comments](https://news.ycombinator.com/item?id=47422408)

* [Animation 10k Starlink Satellites](https://spaceweather.com/archive.php?view=1&amp;day=18&amp;month=03&amp;year=2026) - An engaging animation visualizing the massive Starlink satellite constellation. [Comments](https://news.ycombinator.com/item?id=47422437)

* [LHCb Collaboration discovers new proton-like particle](https://home.cern/news/news/physics/lhcb-collaboration-discovers-new-proton-particle) - CERN's LHCb team announces the discovery of a previously unknown proton-like particle, extending the boundaries of particle physics. [Comments](https://lobste.rs/s/u5gqg6/lhcb_collaboration_discovers_new_proton)

## Artificial Intelligence Developments

* [AI - Assassinating Intelligence](https://yashgarg.dev/posts/ai-slop/) - An opinionated take on modern AI's limitations and its impact on creative intelligence. [Comments](https://lobste.rs/s/dsi02i/ai_assassinating_intelligence)

* [Mistral AI Releases Forge](https://mistral.ai/news/forge) - Details about Mistral AI's new generative model aimed at simplifying AI development. [Comments](https://news.ycombinator.com/item?id=47418295)

* [AI Job Loss Research Ignores How AI Is Utterly Destroying the Internet](https://tech.slashdot.org/story/26/03/17/2243219/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A critical look at the potential downsides of AI advancements beyond their impact on employment. [Comments](https://news.ycombinator.com/item?id=47420388)

## Software and Programming Highlights

* [Python 3.15’s JIT is now back on track](https://fidget-spinner.github.io/posts/jit-on-track.html) - The latest advancements in Python's Just-In-Time (JIT) compilation and performance improvements. [Comments](https://news.ycombinator.com/item?id=47416486)

* [C++26: Span improvements](https://www.sandordargo.com/blog/2026/03/18/cpp26-span-improvements) - Updates to the C++26 standard focusing on span improvements for safer memory access. [Comments](https://lobste.rs/s/jlgau3/c_26_span_improvements)

* [The web in 1000 lines of C](https://maurycyz.com/projects/tinyweb/) - Exploring a minimalist approach to building the web using only 1000 lines of C. [Comments](https://lobste.rs/s/avyqzl/web_1000_lines_c)

## Open-Source and Decentralized Tools

* [Wander – A tiny, decentralised tool (just 2 files) to explore the small web](https://susam.net/wander/) - A lightweight web browsing utility focused on the decentralized 'small web.' [Comments](https://lobste.rs/s/hjipba/wander_tiny_decentralised_tool_just_2)

* [Nightingale – open-source karaoke app that works with any song on your computer](https://nightingale.cafe/) - Introducing a new open-source karaoke app to enhance home entertainment. [Comments](https://news.ycombinator.com/item?id=47422942)

* [hugo2nostr bridge](https://github.com/delirehberi/hugo2nostr) - A novel project connecting Hugo site generators to the decentralized Nostr network. [Comments](https://lobste.rs/s/14dsoq/hugo2nostr_bridge)

## Cultural and Historical Insights

* [Celebrating Tony Hoare's mark on computer science](https://bertrandmeyer.com/2026/03/16/celebrating-tony-hoares-mark-on-computer-science/) - A tribute to Tony Hoare and his contributions to programming language theory and design. [Comments](https://news.ycombinator.com/item?id=47422228)

* [The Most Important Software Innovations](https://dwheeler.com/innovation/innovation.html) - A curated list of software breakthroughs shaping the digital world. [Comments](https://lobste.rs/s/j5m4fq/most_important_software_innovations)

* [Review of Microsoft's ClearType Font Collection (2005)](https://typographica.org/on-typography/microsofts-cleartype-font-collection-a-fair-and-balanced-review/) - A retrospective analysis of Microsoft's groundbreaking ClearType fonts. [Comments](https://news.ycombinator.com/item?id=47421670)

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

* [2026-03-18, 09:04:38](https://lobste.rs/s/jlgau3/c_26_span_improvements) - [C++26: Span improvements](https://www.sandordargo.com/blog/2026/03/18/cpp26-span-improvements)
* [2026-03-18, 08:54:47](https://lobste.rs/s/uxqiub/self_host_tech_independence_joy_building) - [Self-Host and Tech Independence: The Joy of Building Your Own](https://www.ssp.sh/blog/self-host-self-independence/)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 08:06:24](https://news.ycombinator.com/item?id=47422942) - [Nightingale – open-source karaoke app that works with any song on your computer](https://nightingale.cafe/)
* [2026-03-18, 07:23:38](https://lobste.rs/s/hjipba/wander_tiny_decentralised_tool_just_2) - [Wander – A tiny, decentralised tool (just 2 files) to explore the small web](https://susam.net/wander/)
* [2026-03-18, 07:02:55](https://news.ycombinator.com/item?id=47422437) - [Animation 10k Starlink Satellites](https://spaceweather.com/archive.php?view=1&amp;day=18&amp;month=03&amp;year=2026)
* [2026-03-18, 07:00:13](https://news.ycombinator.com/item?id=47422408) - [Ndea (YC W26) is hiring a symbolic RL search guidance lead](https://ndea.com/jobs/search-guidance)
* [2026-03-18, 07:00:00](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Announces Vera Rubin Space-1 Chip System For Orbital AI Data Centers](https://hardware.slashdot.org/story/26/03/17/1838252/nvidia-announces-vera-rubin-space-1-chip-system-for-orbital-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 06:31:14](https://news.ycombinator.com/item?id=47422228) - [Celebrating Tony Hoare&apos;s mark on computer science](https://bertrandmeyer.com/2026/03/16/celebrating-tony-hoares-mark-on-computer-science/)
* [2026-03-18, 04:53:55](https://lobste.rs/s/dsi02i/ai_assassinating_intelligence) - [AI - Assassinating Intelligence](https://yashgarg.dev/posts/ai-slop/)
* [2026-03-18, 04:44:12](https://news.ycombinator.com/item?id=47421670) - [Review of Microsoft&apos;s ClearType Font Collection (2005)](https://typographica.org/on-typography/microsofts-cleartype-font-collection-a-fair-and-balanced-review/)
* [2026-03-18, 04:11:20](https://news.ycombinator.com/item?id=47421513) - [Forget Flags and Scripts: Just Rename the File](https://robertsdotpm.github.io/software_engineering/program_names_as_input.html)
* [2026-03-18, 03:53:42](https://news.ycombinator.com/item?id=47421442) - [Have a fucking website](https://www.otherstrangeness.com/2026/03/14/have-a-fucking-website/)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-18, 03:30:00](https://tech.slashdot.org/story/26/03/17/2243219/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Job Loss Research Ignores How AI Is Utterly Destroying the Internet](https://tech.slashdot.org/story/26/03/17/2243219/ai-job-loss-research-ignores-how-ai-is-utterly-destroying-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 02:41:12](https://lobste.rs/s/j5m4fq/most_important_software_innovations) - [The Most Important Software Innovations](https://dwheeler.com/innovation/innovation.html)
* [2026-03-18, 01:10:19](https://news.ycombinator.com/item?id=47420493) - [Launch an autonomous AI agent with sandboxed execution in 2 lines of code](https://amaiya.github.io/onprem/examples_agent.html)
* [2026-03-18, 01:00:45](https://news.ycombinator.com/item?id=47420432) - [The pleasures of poor product design](https://www.inconspicuous.info/p/the-pleasures-of-poor-product-design)
* [2026-03-18, 00:53:10](https://news.ycombinator.com/item?id=47420388) - [A tale about fixing eBPF spinlock issues in the Linux kernel](https://rovarma.com/articles/a-tale-about-fixing-ebpf-spinlock-issues-in-the-linux-kernel/)
* [2026-03-18, 00:05:45](https://lobste.rs/s/ldjzqh/first_package_written_algol_68_lands) - [First package written in Algol 68 lands in Gentoo](https://jemarch.net/20260205-gentoo-algol68.html)
* [2026-03-17, 23:00:00](https://yro.slashdot.org/story/26/03/17/2154229/arizona-charges-kalshi-with-illegal-gambling-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arizona Charges Kalshi With Illegal Gambling Operation](https://yro.slashdot.org/story/26/03/17/2154229/arizona-charges-kalshi-with-illegal-gambling-operation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 22:28:40](https://lobste.rs/s/14dsoq/hugo2nostr_bridge) - [hugo2nostr bridge](https://github.com/delirehberi/hugo2nostr)
* [2026-03-17, 22:06:09](https://lobste.rs/s/u5gqg6/lhcb_collaboration_discovers_new_proton) - [LHCb Collaboration discovers new proton-like particle](https://home.cern/news/news/physics/lhcb-collaboration-discovers-new-proton-particle)
* [2026-03-17, 22:00:00](https://yro.slashdot.org/story/26/03/17/2145208/rural-ohioans-seek-to-ban-data-centers-through-constitutional-amendment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rural Ohioans Seek To Ban Data Centers Through Constitutional Amendment](https://yro.slashdot.org/story/26/03/17/2145208/rural-ohioans-seek-to-ban-data-centers-through-constitutional-amendment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 21:42:39](https://news.ycombinator.com/item?id=47418722) - [Why AI systems don&apos;t learn – On autonomous learning from cognitive science](https://arxiv.org/abs/2603.15381)
* [2026-03-17, 21:04:26](https://news.ycombinator.com/item?id=47418295) - [Mistral AI Releases Forge](https://mistral.ai/news/forge)
* [2026-03-17, 21:00:00](https://tech.slashdot.org/story/26/03/17/2058245/gamers-react-with-overwhelming-disgust-to-dlss-5s-generative-ai-glow-ups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gamers React With Overwhelming Disgust To DLSS 5&apos;s Generative AI Glow-Ups](https://tech.slashdot.org/story/26/03/17/2058245/gamers-react-with-overwhelming-disgust-to-dlss-5s-generative-ai-glow-ups?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 20:23:39](https://news.ycombinator.com/item?id=47417804) - [Get Shit Done: A meta-prompting, context engineering and spec-driven dev system](https://github.com/gsd-build/get-shit-done)
* [2026-03-17, 20:00:00](https://developers.slashdot.org/story/26/03/17/1833221/finance-bros-to-tech-bros-dont-mess-with-my-bloomberg-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finance Bros To Tech Bros: Don&apos;t Mess With My Bloomberg Terminal](https://developers.slashdot.org/story/26/03/17/1833221/finance-bros-to-tech-bros-dont-mess-with-my-bloomberg-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 19:46:29](https://news.ycombinator.com/item?id=47417335) - [Launch HN: Kita (YC W26) – Automate credit review in emerging markets](https://news.ycombinator.com/item?id=47417335)
* [2026-03-17, 19:00:00](https://mobile.slashdot.org/story/26/03/17/1650233/samsung-ends-2899-galaxy-z-trifold-sales-after-just-three-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Ends $2,899 Galaxy Z TriFold Sales After Just Three Months](https://mobile.slashdot.org/story/26/03/17/1650233/samsung-ends-2899-galaxy-z-trifold-sales-after-just-three-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 18:59:50](https://news.ycombinator.com/item?id=47416736) - [A Decade of Slug](https://terathon.com/blog/decade-slug.html)
* [2026-03-17, 18:49:35](https://lobste.rs/s/qusrlu/tale_about_fixing_ebpf_spinlock_issues) - [A tale about fixing eBPF spinlock issues in the Linux kernel](https://www.rovarma.com/articles/a-tale-about-fixing-ebpf-spinlock-issues-in-the-linux-kernel/)
* [2026-03-17, 18:41:43](https://lobste.rs/s/3ixbzr/decade_slug) - [A Decade of Slug](https://terathon.com/blog/decade-slug.html)
* [2026-03-17, 18:37:27](https://news.ycombinator.com/item?id=47416486) - [Python 3.15&apos;s JIT is now back on track](https://fidget-spinner.github.io/posts/jit-on-track.html)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 18:00:00](https://slashdot.org/story/26/03/17/1635200/nvidia-expects-to-sell-at-least-1-trillion-in-ai-chips-by-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Expects To Sell &apos;At Least&apos; $1 Trillion In AI Chips By 2028](https://slashdot.org/story/26/03/17/1635200/nvidia-expects-to-sell-at-least-1-trillion-in-ai-chips-by-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 17:59:12](https://lobste.rs/s/qpqawd/paxos_algorithm_when_presented_plain) - [The Paxos algorithm, when presented in plain English, is very simple (2021)](https://www.mydistributed.systems/2021/04/paxos.html)
* [2026-03-17, 17:08:16](https://lobste.rs/s/nvlqyc/python_3_15_s_jit_is_now_back_on_track) - [Python 3.15’s JIT is now back on track](https://fidget-spinner.github.io/posts/jit-on-track.html)
* [2026-03-17, 17:00:00](https://hardware.slashdot.org/story/26/03/16/2231202/are-split-spacebars-the-next-big-gaming-keyboard-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Split Spacebars the Next Big Gaming Keyboard Trend?](https://hardware.slashdot.org/story/26/03/16/2231202/are-split-spacebars-the-next-big-gaming-keyboard-trend?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 16:00:00](https://slashdot.org/story/26/03/17/039203/us-sec-preparing-to-scrap-quarterly-reporting-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US SEC Preparing To Scrap Quarterly Reporting Requirement](https://slashdot.org/story/26/03/17/039203/us-sec-preparing-to-scrap-quarterly-reporting-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 15:30:34](https://lobste.rs/s/ebjelg/introducing_postmarketos_duranium_more) - [Introducing postmarketOS Duranium: a more reliable postmarketOS](https://postmarketos.org/blog/2026/03/17/introducing-duranium/)
* [2026-03-17, 15:26:32](https://news.ycombinator.com/item?id=47414032) - [Unsloth Studio](https://unsloth.ai/docs/new/studio)
* [2026-03-17, 15:16:29](https://news.ycombinator.com/item?id=47413876) - [Microsoft&apos;s &apos;unhackable&apos; Xbox One has been hacked by &apos;Bliss&apos;](https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level)
* [2026-03-17, 15:00:00](https://science.slashdot.org/story/26/03/17/0318215/asteroid-ryugu-has-all-of-the-main-ingredients-for-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asteroid Ryugu Has All of the Main Ingredients For Life](https://science.slashdot.org/story/26/03/17/0318215/asteroid-ryugu-has-all-of-the-main-ingredients-for-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 14:46:37](https://lobste.rs/s/6dm3po/i_haven_t_made_anything_with_at_proto_yet) - [I haven&apos;t made anything with AT Proto yet](https://macwright.com/2026/03/16/atproto)
* [2026-03-17, 14:17:56](https://lobste.rs/s/nlyezv/sufficiently_detailed_spec_is_code) - [A sufficiently detailed spec is code](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code)
* [2026-03-17, 14:00:19](https://lobste.rs/s/c2eiao/syntaqlite_high_fidelity_devtools) - [syntaqlite: high-fidelity devtools that SQLite deserves](https://lalitm.com/post/syntaqlite/)
* [2026-03-17, 13:43:44](https://news.ycombinator.com/item?id=47412569) - [Show HN: Sub-millisecond VM sandboxes using CoW memory forking](https://github.com/adammiribyan/zeroboot)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 12:13:01](https://lobste.rs/s/avyqzl/web_1000_lines_c) - [The web in 1000 lines of C](https://maurycyz.com/projects/tinyweb/)
* [2026-03-17, 12:01:05](https://news.ycombinator.com/item?id=47411480) - [Ryugu asteroid samples contain all DNA and RNA building blocks](https://phys.org/news/2026-03-ryugu-asteroid-samples-dna-rna.html)
* [2026-03-17, 11:58:40](https://lobste.rs/s/jtp62p/yes_all_longest_regex_matches_linear_time) - [yes, all longest regex matches in linear time is possible](https://iev.ee/blog/all-longest-regex-matches-in-linear-time/)
* [2026-03-17, 11:00:00](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bills Would Ban Liability Lawsuits For Climate Change](https://yro.slashdot.org/story/26/03/16/2222200/bills-would-ban-liability-lawsuits-for-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 10:53:54](https://lobste.rs/s/3hojx1/age_gating_isn_t_about_kids_it_s_about) - [Age-Gating Isn’t About Kids, It’s About Control](https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control)
* [2026-03-17, 10:19:55](https://lobste.rs/s/xr2lv8/linkedin_speak_was_added_kagi_translate) - [\&quot;LinkedIn Speak\&quot; was added to Kagi Translate](https://bsky.app/profile/kagi.com/post/3mh7v3y6m2c2d)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 07:00:00](https://hardware.slashdot.org/story/26/03/16/2212248/hydropower-line-from-quebec-could-power-a-million-nyc-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hydropower Line From Quebec Could Power a Million NYC Homes](https://hardware.slashdot.org/story/26/03/16/2212248/hydropower-line-from-quebec-could-power-a-million-nyc-homes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-17, 06:26:20](https://lobste.rs/s/wa5ghq/few_notes_about_macbook_neo) - [A few notes about the MacBook Neo](https://morrick.me/archives/10286)
* [2026-03-17, 06:11:17](https://news.ycombinator.com/item?id=47409222) - [Show HN: Pgit – A Git-like CLI backed by PostgreSQL](https://oseifert.ch/blog/building-pgit)
* [2026-03-17, 04:58:19](https://lobste.rs/s/elfva4/every_layer_review_makes_you_10x_slower) - [Every layer of review makes you 10x slower](https://apenwarr.ca/log/20260316)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-17, 03:52:05](https://lobste.rs/s/3ezrbn/road_not_taken_world_where_ipv4_evolved) - [The Road Not Taken: A World Where IPv4 Evolved](https://owl.billpg.com/ipv4x/)
* [2026-03-17, 03:46:34](https://lobste.rs/s/7olqjk/jepsen_mariadb_galera_cluster_12_1_2) - [Jepsen: MariaDB Galera Cluster 12.1.2](https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2)
* [2026-03-17, 03:30:00](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Vibe Coded&apos; AI Translation Tool Splits the Video Game Preservation Community](https://developers.slashdot.org/story/26/03/16/2125242/new-vibe-coded-ai-translation-tool-splits-the-video-game-preservation-community?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 23:00:00](https://hardware.slashdot.org/story/26/03/16/2136229/pokemon-go-players-unknowingly-trained-delivery-robots-with-30-billion-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Pokemon Go&apos; Players Unknowingly Trained Delivery Robots With 30 Billion Images](https://hardware.slashdot.org/story/26/03/16/2136229/pokemon-go-players-unknowingly-trained-delivery-robots-with-30-billion-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-16, 21:33:41](https://lobste.rs/s/eoj99q/gemini_protocol_2026) - [The Gemini Protocol in 2026](https://kevinboone.me/gemini_2026.html)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
* [2026-03-15, 23:35:00](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss) - [How Much Sleep Do Teens Get? Six-Seven Hours](https://soylentnews.org/article.pl?sid=26/03/14/1755235&amp;from=rss)
* [2026-03-15, 18:51:00](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss) - [AI Medical Advice - Both Sides](https://soylentnews.org/article.pl?sid=26/03/14/1750228&amp;from=rss)
* [2026-03-15, 17:36:48](https://news.ycombinator.com/item?id=47389696) - [Write up of my homebrew CPU build](https://willwarren.com/2026/03/12/building-my-own-cpu-part-3-from-simulation-to-hardware/)
* [2026-03-15, 14:00:00](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss) - [New Study Challenges Notion That Aging Means Decline, Finds Many Older Adults Improve Over Time](https://soylentnews.org/article.pl?sid=26/03/14/1740249&amp;from=rss)
* [2026-03-15, 13:38:08](https://news.ycombinator.com/item?id=47387268) - [Honda is killing its EVs](https://techcrunch.com/2026/03/14/honda-is-killing-its-evs-and-any-chance-of-competing-in-the-future/)
* [2026-03-15, 09:20:00](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss) - [OpenAI Wants Everyone To Have A Monthly AI Bill](https://soylentnews.org/article.pl?sid=26/03/14/0932244&amp;from=rss)
* [2026-03-15, 06:00:34](https://news.ycombinator.com/item?id=47384715) - [Aggregated File System (AGFS), a modern tribute to the spirit of Plan 9](https://github.com/c4pt0r/agfs)
* [2026-03-15, 05:46:35](https://news.ycombinator.com/item?id=47384653) - [Leviathan (1651)](https://www.gutenberg.org/files/3207/3207-h/3207-h.htm)
* [2026-03-15, 04:37:00](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss) - [Why Are Some Animal and Human Signals Honest, While Others Are Deceptive?](https://soylentnews.org/article.pl?sid=26/03/14/0928215&amp;from=rss)
* [2026-03-14, 22:52:00](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss) - [A 1,300-Pound NASA Satellite Just Made a Fiery Return to Earth](https://soylentnews.org/article.pl?sid=26/03/13/0443231&amp;from=rss)
* [2026-03-14, 18:06:00](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) - [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss)
* [2026-03-14, 13:19:00](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss) - [Adobe Plunges to 7 Year Low on CEO Resignation, Muted Forecast](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss)
* [2026-03-14, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) - [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss)
* [2026-03-14, 03:51:00](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss) - [As Frank Yeary Retires From Intel, the Company Picks an Engineer to Chair its Board](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss)
* [2026-03-14, 01:31:48](https://news.ycombinator.com/item?id=47372367) - [JPEG Compression](https://www.sophielwang.com/blog/jpeg)
* [2026-03-14, 00:50:20](https://news.ycombinator.com/item?id=47372072) - [(Media over QUIC) on a Boat](https://moq.dev/blog/on-a-boat/)
