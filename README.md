# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Software Development

* [OpenLoco version 26.04](https://openloco.io/news/2026/04/openloco-v26.04.html) - A new version of the popular OpenLoco simulation game has been released, featuring updates and new features. [Comments](https://lobste.rs/s/n7ypui/openloco_version_26_04)

* [Pu.sh – a full coding-agent harness in 400 lines of shell](https://pu.dev) - Explore this minimalistic coding-agent harness that is both lightweight and efficient. [Comments](https://lobste.rs/s/spicjg/pu_sh_full_coding_agent_harness_400_lines)

* [Open Design: Use Your Coding Agent as a Design Engine](https://github.com/nexu-io/open-design) - An open-source project that enables developers to turn their coding agents into design engines. [Comments](https://news.ycombinator.com/item?id=47985750)

* [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/) - A strong critique of the popular password manager and its shortcomings. [Comments](https://lobste.rs/s/miwd1w/i_do_not_recommend_bitwarden)

* [Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/) - A discussion on the renaissance of text-based user interfaces and why they are gaining traction again. [Comments](https://lobste.rs/s/quulrs/why_tuis_are_back)

## Gaming and Retro Discoveries

* [An unknown Sega Saturn project has come to light after 29 years](https://32bits.substack.com/p/under-the-microscope-pyramid-unreleased) - A forgotten Sega Saturn project resurfaces, sparking interest in retro gaming. [Comments](https://news.ycombinator.com/item?id=47985901)

* [Microsoft's Xbox Mode Is Now Available For All Windows 11 PCs](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft's gaming initiative expands to all Windows 11 PCs. [Comments](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Engineering Innovations

* [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough technology for Mars exploration successfully completes an important test. [Comments](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - Climate science reveals alarming data about glacial melting in Antarctica. [Comments](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)

## Ethics and Society

* [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - An exploration of Google's controversial partnership with the U.S. Department of Defense. [Comments](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)

* [AI Agent Designed To Speed Up Company's Coding Wipes Entire Database In 9 Seconds](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cautionary tale about the risks of deploying experimental AI in business-critical systems. [Comments](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Digital Rights

* [Hackers Are Actively Exploiting a Bug In cPanel, Used By Millions of Websites](https://it.slashdot.org/story/26/05/01/0631257/hackers-are-actively-exploiting-a-bug-in-cpanel-used-by-millions-of-websites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Security professionals issue warnings about ongoing attacks on a widely used website management platform. [Comments](https://it.slashdot.org/story/26/05/01/0631257/hackers-are-actively-exploiting-a-bug-in-cpanel-used-by-millions-of-websites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Firefox Has Quietly Integrated Brave's Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - Mozilla's adoption of a high-performance adblock engine from rival browser Brave. [Comments](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)

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

* [2026-05-02, 13:00:31](https://lobste.rs/s/n7ypui/openloco_version_26_04) - [OpenLoco version 26.04](https://openloco.io/news/2026/04/openloco-v26.04.html)
* [2026-05-02, 12:39:52](https://news.ycombinator.com/item?id=47985901) - [An unknown Sega Saturn project has come to light after 29 years](https://32bits.substack.com/p/under-the-microscope-pyramid-unreleased)
* [2026-05-02, 12:34:13](https://lobste.rs/s/3gnkeu/letter_from_dijkstra_on_apl_1982) - [A Letter from Dijkstra on APL(1982)](https://www.jsoftware.com/papers/Dijkstra_Letter.htm)
* [2026-05-02, 12:25:14](https://lobste.rs/s/ebqqq8/kirigami_forms_configurations) - [Kirigami forms and configurations](https://notmart.org/blog/2026/04/kirigami-forms-and-configurations/)
* [2026-05-02, 12:18:38](https://lobste.rs/s/aunywc/screw_you_realtek) - [Screw you Realtek](https://www.growse.com/2026/05/02/screw-you-realtek.html)
* [2026-05-02, 12:16:16](https://news.ycombinator.com/item?id=47985750) - [Open Design: Use Your Coding Agent as a Design Engine](https://github.com/nexu-io/open-design)
* [2026-05-02, 12:13:11](https://news.ycombinator.com/item?id=47985725) - [The Century-Long Pause in Fundamental Physics](https://danieltan.weblog.lol/2026/05/the-century-long-pause-in-fundamental-physics)
* [2026-05-02, 11:00:00](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameStop Is Preparing Offer For eBay](https://slashdot.org/story/26/05/02/0010242/gamestop-is-preparing-offer-for-ebay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 10:55:25](https://news.ycombinator.com/item?id=47985271) - [GameStop Preparing Offer for eBay](https://www.wsj.com/business/deals/gamestop-preparing-offer-for-ebay-1678e6de)
* [2026-05-02, 10:42:55](https://news.ycombinator.com/item?id=47985210) - [Show HN: Piruetas – A self-hosted diary app I built for my girlfriend](https://piruet.app)
* [2026-05-02, 10:42:15](https://lobste.rs/s/le8yxh/programmer_s_guide_common_lisp_1987) - [A Programmer&apos;s Guide to COMMON LISP (1987)](https://archive.org/details/a-programmers-guide-to-common-lisp)
* [2026-05-02, 10:29:49](https://lobste.rs/s/jtzbv8/protect_your_shed) - [Protect Your Shed](https://dylanbutler.dev/blog/protect-your-shed/)
* [2026-05-02, 10:23:22](https://lobste.rs/s/rz9ayu/fast16_high_precision_software_sabotage) - [fast16 | High-Precision Software Sabotage 5 Years Before Stuxnet](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
* [2026-05-02, 10:21:31](https://news.ycombinator.com/item?id=47985077) - [Show HN: Mljar Studio – local AI data analyst that saves analysis as notebooks](https://mljar.com/)
* [2026-05-02, 10:17:09](https://lobste.rs/s/quulrs/why_tuis_are_back) - [Why TUIs are back](https://wiki.alcidesfonseca.com/blog/why-tuis-are-back/)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 09:30:49](https://news.ycombinator.com/item?id=47984852) - [How fast is a macOS VM, and how small could it be?](https://eclecticlight.co/2026/05/02/how-fast-is-a-macos-vm-and-how-small-could-it-be/)
* [2026-05-02, 09:08:18](https://news.ycombinator.com/item?id=47984734) - [Show HN: Browser-based light pollution simulator using real photometric data](https://iesna.eu/?wasm=skyglow_demo)
* [2026-05-02, 08:54:27](https://news.ycombinator.com/item?id=47984675) - [Show HN: Filling PDF forms with AI using client-side tool calling](https://copilot.simplepdf.com/?share=a7d00ad073c75a75d493228e6ff7b11eb3f2d945b6175913e87898ec96ca8076&amp;form=w9&amp;lang=en)
* [2026-05-02, 08:42:45](https://news.ycombinator.com/item?id=47984614) - [Show HN: Large Scale Article Extract of Newspapers 1730s-1960s](https://snewpapers.com/)
* [2026-05-02, 08:23:23](https://news.ycombinator.com/item?id=47984522) - [Why are there both TMP and TEMP environment variables? (2015)](https://devblogs.microsoft.com/oldnewthing/20150417-00/?p=44213)
* [2026-05-02, 07:00:00](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Lithium-Plasma Engine Passes Key Mars Propulsion Test](https://science.slashdot.org/story/26/05/02/0017222/new-lithium-plasma-engine-passes-key-mars-propulsion-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 06:39:18](https://lobste.rs/s/miwd1w/i_do_not_recommend_bitwarden) - [I Do Not Recommend Bitwarden](https://マリウス.com/i-do-not-recommend-bitwarden/)
* [2026-05-02, 06:33:50](https://lobste.rs/s/gm1hcc/stackless_coroutines_for_gamedev_200) - [stackless coroutines for gamedev in ~200 lines of C++](https://vittorioromeo.com/index/blog/sfex_coroutine.html)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 04:57:24](https://lobste.rs/s/yhhh4j/architect_s_instinct) - [The Architect&apos;s Instinct](https://webframp.com/posts/architects-instinct/)
* [2026-05-02, 04:49:00](https://lobste.rs/s/ixqnxw/reducing_ml_kem_768_encapsulation_key) - [Reducing ML-KEM-768 encapsulation key sizes by 24 octets](https://runxiyu.org/comp/mlkem768pack/)
* [2026-05-02, 04:43:20](https://news.ycombinator.com/item?id=47983385) - [CollectWise (YC F24) Is Hiring](https://www.ycombinator.com/companies/collectwise/jobs/rEWfZ6R-senior-forward-deployed-engineer)
* [2026-05-02, 04:38:04](https://news.ycombinator.com/item?id=47983352) - [Why does it take so long to release black fan versions?](https://www.noctua.at/en/expertise/blog/how-can-it-take-so-long-to-release-black-fan-versions)
* [2026-05-02, 04:12:35](https://news.ycombinator.com/item?id=47983226) - [Ask.com has closed](https://www.ask.com/)
* [2026-05-02, 04:00:42](https://news.ycombinator.com/item?id=47983176) - [K3k: Kubernetes in Kubernetes](https://github.com/rancher/k3k)
* [2026-05-02, 03:30:00](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Stuck With Months of Repairs After Drone Strikes On Data Centers](https://news.slashdot.org/story/26/05/02/006240/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-02, 00:31:22](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend) - [What Conferences are You Excited to Attend in the Next 12 Months?](https://lobste.rs/s/rtnzfj/what_conferences_are_you_excited_attend)
* [2026-05-01, 23:24:10](https://news.ycombinator.com/item?id=47981669) - [A report on burnout in open source software communities (2025) [pdf]](https://mirandaheath.website/static/oss_burnout_report_mh_25.pdf)
* [2026-05-01, 23:00:00](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Xbox Mode Is Now Available For All Windows 11 PCs](https://games.slashdot.org/story/26/05/01/1936256/microsofts-xbox-mode-is-now-available-for-all-windows-11-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 22:19:27](https://lobste.rs/s/lplm9j/finding_rce_my_old_tp_link_router) - [Finding a RCE in my old TP-Link router](https://mrbruh.com/tplink/)
* [2026-05-01, 22:00:00](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Agent Designed To Speed Up Company&apos;s Coding Wipes Entire Database In 9 Seconds](https://developers.slashdot.org/story/26/05/01/1924222/ai-agent-designed-to-speed-up-companys-coding-wipes-entire-database-in-9-seconds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 21:00:24](https://lobste.rs/s/h3q3ku/canonical_is_under_attack) - [Canonical is under attack](https://status.canonical.com/)
* [2026-05-01, 21:00:00](https://yro.slashdot.org/story/26/05/01/1913249/pentagon-reaches-agreements-with-top-ai-companies-but-not-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Reaches Agreements With Top AI Companies, But Not Anthropic](https://yro.slashdot.org/story/26/05/01/1913249/pentagon-reaches-agreements-with-top-ai-companies-but-not-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 20:56:02](https://lobste.rs/s/hb9tdr/inverse_sapir_whorf_programming) - [Inverse Sapir-Whorf and programming languages](https://lukeplant.me.uk/blog/posts/inverse-sapir-whorf-and-programming-languages/)
* [2026-05-01, 20:06:59](https://news.ycombinator.com/item?id=47979583) - [Ti-84 Evo](https://education.ti.com/en/products/calculators/graphing-calculators/ti-84-evo)
* [2026-05-01, 20:00:59](https://lobste.rs/s/spicjg/pu_sh_full_coding_agent_harness_400_lines) - [Pu.sh – a full coding-agent harness in 400 lines of shell (pu.dev)](https://pu.dev)
* [2026-05-01, 20:00:00](https://tech.slashdot.org/story/26/05/01/1838209/icann-opens-applications-for-new-generic-top-level-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ICANN Opens Applications For New Generic Top-Level Domains](https://tech.slashdot.org/story/26/05/01/1838209/icann-opens-applications-for-new-generic-top-level-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 19:33:44](https://lobste.rs/s/iz1rct/palantir_workers_are_finally_noticing) - [Palantir Workers Are Finally Noticing The Skulls On Their Caps](https://www.techdirt.com/2026/04/30/palantir-workers-are-finally-noticing-the-skulls-on-their-caps/)
* [2026-05-01, 19:10:56](https://news.ycombinator.com/item?id=47978834) - [Lib0xc: A set of C standard library-adjacent APIs for safer systems programming](https://github.com/microsoft/lib0xc)
* [2026-05-01, 19:00:00](https://developers.slashdot.org/story/26/05/01/1711213/the-case-against-an-imminent-software-developer-apocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Case Against an Imminent Software Developer Apocalypse](https://developers.slashdot.org/story/26/05/01/1711213/the-case-against-an-imminent-software-developer-apocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 18:20:04](https://lobste.rs/s/qdhn90/xitlog_patch_based_merging_is_now_enabled) - [XITLOG - patch-based merging is now enabled by default](https://xit-vcs.github.io/xitlog/devlog-patch-merge-default.html)
* [2026-05-01, 18:00:00](https://it.slashdot.org/story/26/05/01/1658212/gpt-55-matches-heavily-hyped-mythos-preview-in-new-cybersecurity-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GPT-5.5 Matches Heavily Hyped Mythos Preview In New Cybersecurity Tests](https://it.slashdot.org/story/26/05/01/1658212/gpt-55-matches-heavily-hyped-mythos-preview-in-new-cybersecurity-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 17:47:42](https://news.ycombinator.com/item?id=47977748) - [New research suggests people can communicate and practice skills while dreaming](https://www.newyorker.com/culture/annals-of-inquiry/its-possible-to-learn-in-our-sleep-should-we)
* [2026-05-01, 17:17:13](https://lobste.rs/s/kghyn5/combat_llm_spam_by_building_web_trust) - [combat LLM spam by building a web of trust](https://blog.tangled.org/vouching/)
* [2026-05-01, 17:00:00](https://entertainment.slashdot.org/story/26/05/01/1650254/spotify-adds-verified-badges-to-distinguish-human-artists-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Adds &apos;Verified&apos; Badges To Distinguish Human Artists From AI](https://entertainment.slashdot.org/story/26/05/01/1650254/spotify-adds-verified-badges-to-distinguish-human-artists-from-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 16:52:43](https://news.ycombinator.com/item?id=47977026) - [DeepSeek V4–almost on the frontier, a fraction of the price](https://simonwillison.net/2026/Apr/24/deepseek-v4/)
* [2026-05-01, 16:00:00](https://it.slashdot.org/story/26/05/01/0631257/hackers-are-actively-exploiting-a-bug-in-cpanel-used-by-millions-of-websites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Are Actively Exploiting a Bug In cPanel, Used By Millions of Websites](https://it.slashdot.org/story/26/05/01/0631257/hackers-are-actively-exploiting-a-bug-in-cpanel-used-by-millions-of-websites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 15:14:22](https://lobste.rs/s/tkcood/progressive_web_components) - [Progressive Web Components](https://arielsalminen.com/2026/progressive-web-components/)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 15:07:02](https://news.ycombinator.com/item?id=47975676) - [I&apos;m Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=47975676)
* [2026-05-01, 15:00:07](https://news.ycombinator.com/item?id=47975571) - [Ask HN: Who is hiring? (May 2026)](https://news.ycombinator.com/item?id=47975571)
* [2026-05-01, 15:00:00](https://tech.slashdot.org/story/26/05/01/0132241/the-california-government-is-coming-for-your-e-bikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The California Government Is Coming For Your E-Bikes](https://tech.slashdot.org/story/26/05/01/0132241/the-california-government-is-coming-for-your-e-bikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 14:22:46](https://lobste.rs/s/vwmojf/why_i_don_t_vibe_code) - [Why I Don’t Vibe Code](https://jacobharr.is/personal/i-dont-vibe-code)
* [2026-05-01, 12:10:28](https://lobste.rs/s/x8z1yc/life_update_from_zach_oakes_zig_ai) - [A life update from Zach Oakes: Zig, AI, unemployment, and more](https://www.youtube.com/watch?v=DhhPUrizZcw)
* [2026-05-01, 11:00:00](https://news.slashdot.org/story/26/05/01/0123239/the-invisible-force-making-food-less-nutritious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Invisible Force Making Food Less Nutritious](https://news.slashdot.org/story/26/05/01/0123239/the-invisible-force-making-food-less-nutritious?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 07:00:00](https://hardware.slashdot.org/story/26/04/30/2029222/belgium-plans-to-nationalize-nuclear-power-plants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Belgium Plans To Nationalize Nuclear Power Plants](https://hardware.slashdot.org/story/26/04/30/2029222/belgium-plans-to-nationalize-nuclear-power-plants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 06:49:12](https://lobste.rs/s/sfgjzn/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/sfgjzn/what_are_you_doing_this_weekend)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 03:30:00](https://yro.slashdot.org/story/26/05/01/0058258/musk-concludes-testimony-at-openai-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Concludes Testimony At OpenAI Trial](https://yro.slashdot.org/story/26/05/01/0058258/musk-concludes-testimony-at-openai-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
* [2026-04-30, 23:11:52](https://lobste.rs/s/2ttor3/if_i_could_make_my_own_github) - [If I Could Make My Own GitHub](https://matduggan.com/if-i-could-make-my-own-github/)
* [2026-04-30, 20:13:00](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss) - [Gone in Nine Seconds](https://soylentnews.org/article.pl?sid=26/04/29/1243245&amp;from=rss)
* [2026-04-30, 18:01:14](https://news.ycombinator.com/item?id=47966084) - [SFO Gate Explorer](https://www.flysfo.com/passengers/services/gate-explorer)
* [2026-04-30, 16:33:24](https://news.ycombinator.com/item?id=47964957) - [Dotcl: Common Lisp Implementation on .NET](https://github.com/dotcl/dotcl)
* [2026-04-30, 15:24:00](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss) - [Electrical Current Might be the Key to a Better Cup of Coffee](https://soylentnews.org/article.pl?sid=26/04/29/1156248&amp;from=rss)
* [2026-04-30, 13:15:04](https://news.ycombinator.com/item?id=47961935) - [Show HN: Pollen – distributed WASM runtime, no control plane, single binary](https://github.com/sambigeara/pollen)
* [2026-04-30, 11:51:02](https://news.ycombinator.com/item?id=47961100) - [Bitmap and tilemap generation from a single example](https://github.com/mxgmn/WaveFunctionCollapse)
* [2026-04-30, 10:38:00](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss) - [NASAs Incredible New Telescope Will Offer an Atlas of the Universe](https://soylentnews.org/article.pl?sid=26/04/28/0620241&amp;from=rss)
* [2026-04-30, 05:53:00](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss) - [Microsoft Reportedly Looking at Rebasing Azure Linux on Fedora](https://soylentnews.org/article.pl?sid=26/04/28/0613243&amp;from=rss)
* [2026-04-30, 03:15:42](https://news.ycombinator.com/item?id=47957648) - [LFM2-24B-A2B: Scaling Up the LFM2 Architecture](https://www.liquid.ai/blog/lfm2-24b-a2b)
* [2026-04-30, 01:08:00](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss) - [China&apos;s Biggest Streaming Platform Wants Most of its New Films to be AI-Generated](https://soylentnews.org/article.pl?sid=26/04/28/0610224&amp;from=rss)
* [2026-04-29, 20:48:17](https://news.ycombinator.com/item?id=47954394) - [Artemis II Photo Timeline](https://artemistimeline.com/#artemis-ii-walkout-nhq202604010003)
* [2026-04-29, 20:22:00](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss) - [Tails Linux 7.7 Anonymous Distro Adds Detection of Outdated Secure Boot Certificates](https://soylentnews.org/article.pl?sid=26/04/28/062230&amp;from=rss)
* [2026-04-29, 15:41:00](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss) - [Antarctica Just Saw the Fastest Glacier Collapse Ever Recorded](https://soylentnews.org/article.pl?sid=26/04/28/0558247&amp;from=rss)
* [2026-04-29, 15:28:55](https://news.ycombinator.com/item?id=47949794) - [To Restore an Island Paradise, Add Fungi](https://e360.yale.edu/digest/atoll-islands-sea-level-rise-fungi)
* [2026-04-29, 14:37:20](https://news.ycombinator.com/item?id=47949066) - [Show HN: DAC – open-source dashboard as code tool for agents and humans](https://github.com/bruin-data/dac)
* [2026-04-29, 10:54:00](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss) - [Meta Signs Multibillion-Dollar Deal With Amazon to Use its CPU Chips for AI](https://soylentnews.org/article.pl?sid=26/04/28/0555211&amp;from=rss)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
