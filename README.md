# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [A Canadian's AI hoax duped the media and propelled a 'band' to success](https://www.cbc.ca/news/entertainment/ai-band-hoax-velvet-sundown-1.7575874) - [Comments](https://news.ycombinator.com/item?id=44477151)

* [Optimizing Tool Selection for LLM Workflows with Differentiable Programming](https://viksit.substack.com/p/optimizing-tool-selection-for-llm) - [Comments](https://news.ycombinator.com/item?id=44475453)

* [The Right Way to Embed an LLM in a Group Chat](https://blog.tripjam.app/the-right-way-to-embed-an-llm-in-a-group-chat/) - [Comments](https://news.ycombinator.com/item?id=44476084)

* [Making Language Models Play Baba is You](https://fi-le.net/baba/) - [Comments](https://lobste.rs/s/hpplmq/making_language_models_play_baba_is_you)

## Open Source and Software Updates

* [KDE Plasma 6.4 Has Landed in OpenBSD](https://tech.slashdot.org/story/25/07/05/1951224/kde-plasma-64-has-landed-in-openbsd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44477156)

* [7-Zip 25.00](https://github.com/ip7z/7zip/releases/tag/25.00) - [Comments](https://news.ycombinator.com/item?id=44476137)

* [WinUAE 6 Amiga Emulator](https://www.winuae.net/) - [Comments](https://news.ycombinator.com/item?id=44475600)

* [bgcmd: let AI interact with any REPL](https://github.com/izabera/bgcmd) - [Comments](https://lobste.rs/s/s9a1zl/bgcmd_let_ai_interact_with_any_repl)

## Tech Innovations and Challenges

* [160 Core RISC-V supercluster on a single M.2](https://www.youtube.com/watch?v=HRfbQJ6FdF0) - [Comments](https://lobste.rs/s/t6rshk/160_core_risc_v_supercluster_on_single_m_2)

* [Serving 200M requests per day with a CGI-bin](https://simonwillison.net/2025/Jul/5/cgi-bin-performance/) - [Comments](https://news.ycombinator.com/item?id=44476716)

* [The messy reality of SIMD (vector) functions](https://johnnysswlab.com/the-messy-reality-of-simd-vector-functions) - [Comments](https://lobste.rs/s/d9ocg5/messy_reality_simd_vector_functions)

## Scientific Discoveries and Theories

* [A Common Assumption About Aging May Be Wrong, Study Suggests](https://science.slashdot.org/story/25/07/05/1234225/a-common-assumption-about-aging-may-be-wrong-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44475469)

* [Europe's first geostationary sounder satellite is launched](https://www.eumetsat.int/europes-first-geostationary-sounder-satellite-launched) - [Comments](https://news.ycombinator.com/item?id=44472992)

* [Cod Have Been Shrinking for Decades, Scientists Say They've Solved Mystery](https://www.smithsonianmag.com/smart-news/these-cod-have-been-shrinking-dramatically-for-decades-now-scientists-say-theyve-solved-the-mystery-180986920/) - [Comments](https://news.ycombinator.com/item?id=44474759)

## Security and Privacy

* [What a Hacker Stole from Me](https://mynoise.net/blog.php) - [Comments](https://news.ycombinator.com/item?id=44476115)

* [Two Sudo Vulnerabilities Discovered and Patched](https://linux.slashdot.org/story/25/07/05/0323220/two-sudo-vulnerabilities-discovered-and-patched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44476121)

* [North Koreans Posing As Remote Workers stole $1M](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [Comments](https://soylentnews.org/article.pl?sid=25/07/03/0230247)

## Environmental and Ecological Advances

* [Why Do Killer Whales Keep Handing Us Fish? Scientists Unpack the Mystery](https://science.slashdot.org/story/25/07/05/0442257/why-do-killer-whales-keep-handing-us-fish-scientists-unpack-the-mystery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44475653)

* [Seine reopens to Paris swimmers after century-long ban](https://www.lemonde.fr/en/france/article/2025/07/05/seine-reopens-to-paris-swimmers-after-century-long-ban_6743058_7.html) - [Comments](https://news.ycombinator.com/item?id=44474297)

* [Near Antarctica, Saltier Seas Mean Less Ice, Study Finds](https://news.slashdot.org/story/25/07/04/1725220/near-antarctica-saltier-seas-mean-less-ice-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.ycombinator.com/item?id=44472978)

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

* [2025-07-06, 01:56:56](https://news.ycombinator.com/item?id=44477151) - [A Canadian&apos;s AI hoax duped the media and propelled a &apos;band&apos; to success](https://www.cbc.ca/news/entertainment/ai-band-hoax-velvet-sundown-1.7575874)
* [2025-07-06, 01:34:00](https://tech.slashdot.org/story/25/07/05/1951224/kde-plasma-64-has-landed-in-openbsd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma 6.4 Has Landed in OpenBSD](https://tech.slashdot.org/story/25/07/05/1951224/kde-plasma-64-has-landed-in-openbsd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-06, 00:32:18](https://news.ycombinator.com/item?id=44476716) - [Serving 200M requests per day with a CGI-bin](https://simonwillison.net/2025/Jul/5/cgi-bin-performance/)
* [2025-07-05, 23:49:26](https://lobste.rs/s/t6rshk/160_core_risc_v_supercluster_on_single_m_2) - [160 Core RISC-V supercluster on a single M.2](https://www.youtube.com/watch?v=HRfbQJ6FdF0)
* [2025-07-05, 23:10:03](https://news.ycombinator.com/item?id=44476297) - [Stop Hiding My Controls: Hidden Interface Controls Are Affecting Usability](https://interactions.acm.org/archive/view/july-august-2025/stop-hiding-my-controls-hidden-interface-controls-are-affecting-usability)
* [2025-07-05, 22:41:46](https://news.ycombinator.com/item?id=44476166) - [Operators, Not Users and Programmers](https://jyn.dev/operators-not-users-and-programmers/)
* [2025-07-05, 22:35:05](https://news.ycombinator.com/item?id=44476137) - [7-Zip 25.00](https://github.com/ip7z/7zip/releases/tag/25.00)
* [2025-07-05, 22:34:07](https://lobste.rs/s/gcj9v0/operators_not_users_programmers) - [operators, not users and programmers](https://jyn.dev/operators-not-users-and-programmers/)
* [2025-07-05, 22:34:00](https://hardware.slashdot.org/story/25/07/05/150216/uk-scientists-achieve-first-commercial-tritium-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Scientists Achieve First Commercial Tritium Production](https://hardware.slashdot.org/story/25/07/05/150216/uk-scientists-achieve-first-commercial-tritium-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 22:32:28](https://news.ycombinator.com/item?id=44476115) - [What a Hacker Stole from Me](https://mynoise.net/blog.php)
* [2025-07-05, 22:25:22](https://news.ycombinator.com/item?id=44476084) - [The Right Way to Embed an LLM in a Group Chat](https://blog.tripjam.app/the-right-way-to-embed-an-llm-in-a-group-chat/)
* [2025-07-05, 21:34:00](https://developers.slashdot.org/story/25/07/05/1935203/microsoft-open-sources-copilot-chat-for-vs-code-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Open Sources Copilot Chat for VS Code on GitHub](https://developers.slashdot.org/story/25/07/05/1935203/microsoft-open-sources-copilot-chat-for-vs-code-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 21:19:50](https://news.ycombinator.com/item?id=44475634) - [Techno-Feudalism and the Rise of AGI: A Future Without Economic Rights?](https://arxiv.org/abs/2503.14283)
* [2025-07-05, 21:13:55](https://news.ycombinator.com/item?id=44475600) - [WinUAE 6 Amiga Emulator](https://www.winuae.net/)
* [2025-07-05, 21:12:00](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss) - [MASH - and the Loretta Swit Obituary](https://soylentnews.org/article.pl?sid=25/07/03/1156244&amp;from=rss)
* [2025-07-05, 21:06:41](https://news.ycombinator.com/item?id=44475537) - [How to Network as an Introvert](https://aginfer.bearblog.dev/how-to-network-as-an-introvert/)
* [2025-07-05, 20:52:46](https://news.ycombinator.com/item?id=44475453) - [Optimizing Tool Selection for LLM Workflows with Differentiable Programming](https://viksit.substack.com/p/optimizing-tool-selection-for-llm)
* [2025-07-05, 20:39:01](https://lobste.rs/s/gtud3y/approach_llms_other_reflections) - [Approach to LLMs and Other Reflections](https://matttproud.com/blog/posts/approach-to-llm.html)
* [2025-07-05, 20:34:00](https://science.slashdot.org/story/25/07/05/1234225/a-common-assumption-about-aging-may-be-wrong-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Common Assumption About Aging May Be Wrong, Study Suggests](https://science.slashdot.org/story/25/07/05/1234225/a-common-assumption-about-aging-may-be-wrong-study-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 19:34:00](https://it.slashdot.org/story/25/07/05/1847237/xbows-ai-powered-pentester-grabs-top-rank-on-hackerone-raises-75m-to-grow-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [XBOW&apos;s AI-Powered Pentester Grabs Top Rank on HackerOne, Raises $75M to Grow Platform](https://it.slashdot.org/story/25/07/05/1847237/xbows-ai-powered-pentester-grabs-top-rank-on-hackerone-raises-75m-to-grow-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 19:03:48](https://lobste.rs/s/0qlwxf/fixing_web) - [Fixing the Web?](https://www.youtube.com/watch?v=9NDkOehZUGs)
* [2025-07-05, 19:00:34](https://news.ycombinator.com/item?id=44474759) - [Cod Have Been Shrinking for Decades, Scientists Say They&apos;ve Solved Mystery](https://www.smithsonianmag.com/smart-news/these-cod-have-been-shrinking-dramatically-for-decades-now-scientists-say-theyve-solved-the-mystery-180986920/)
* [2025-07-05, 18:48:08](https://lobste.rs/s/5sxrrp/why_i_got_rid_all_my_neovim_plugins) - [Why I got rid of all my neovim plugins](https://yobibyte.github.io/vim.html)
* [2025-07-05, 18:41:37](https://lobste.rs/s/irlurx/kde_plasma_6_4_has_landed_openbsd) - [KDE Plasma 6.4 has landed in OpenBSD](https://undeadly.org/cgi?action=article;sid=20250705081711)
* [2025-07-05, 18:34:00](https://tech.slashdot.org/story/25/07/05/050238/hpe-acquires-juniper-networks-for-14b-after-settling-antitrust-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HPE Acquires Juniper Networks for $14B After Settling Antitrust Case](https://tech.slashdot.org/story/25/07/05/050238/hpe-acquires-juniper-networks-for-14b-after-settling-antitrust-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 18:15:19](https://lobste.rs/s/d9ocg5/messy_reality_simd_vector_functions) - [The messy reality of SIMD (vector) functions](https://johnnysswlab.com/the-messy-reality-of-simd-vector-functions)
* [2025-07-05, 17:43:01](https://news.ycombinator.com/item?id=44474297) - [Seine reopens to Paris swimmers after century-long ban](https://www.lemonde.fr/en/france/article/2025/07/05/seine-reopens-to-paris-swimmers-after-century-long-ban_6743058_7.html)
* [2025-07-05, 17:34:00](https://science.slashdot.org/story/25/07/05/0442257/why-do-killer-whales-keep-handing-us-fish-scientists-unpack-the-mystery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Do Killer Whales Keep Handing Us Fish? Scientists Unpack the Mystery](https://science.slashdot.org/story/25/07/05/0442257/why-do-killer-whales-keep-handing-us-fish-scientists-unpack-the-mystery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 16:45:25](https://lobste.rs/s/zvolak/broken_ai_discourse_with_steve_klabnik) - [Broken AI Discourse with Steve Klabnik](https://www.youtube.com/watch?v=MrfiUMm2Qxk)
* [2025-07-05, 16:42:19](https://news.ycombinator.com/item?id=44473888) - [Speeding up PostgreSQL dump/restore snapshots](https://xata.io/blog/behind-the-scenes-speeding-up-pgstream-snapshots-for-postgresql)
* [2025-07-05, 16:38:41](https://news.ycombinator.com/item?id=44473871) - [The Calculator-on-a-Chip (2015)](http://www.vintagecalculators.com/html/the_calculator-on-a-chip.html)
* [2025-07-05, 16:36:32](https://lobste.rs/s/gzexuv/calculator_on_chip_2015) - [The Calculator-on-a-Chip (2015)](http://www.vintagecalculators.com/html/the_calculator-on-a-chip.html)
* [2025-07-05, 16:34:00](https://apple.slashdot.org/story/25/07/05/0425229/will-facetime-in-ios-26-freeze-your-call-if-someone-starts-undressing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will FaceTime In IOS 26 Freeze Your Call If Someone Starts Undressing?](https://apple.slashdot.org/story/25/07/05/0425229/will-facetime-in-ios-26-freeze-your-call-if-someone-starts-undressing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 16:26:00](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss) - [Release The Fish](https://soylentnews.org/article.pl?sid=25/07/03/1127224&amp;from=rss)
* [2025-07-05, 15:34:00](https://linux.slashdot.org/story/25/07/05/0323220/two-sudo-vulnerabilities-discovered-and-patched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Sudo Vulnerabilities Discovered and Patched](https://linux.slashdot.org/story/25/07/05/0323220/two-sudo-vulnerabilities-discovered-and-patched?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 15:25:41](https://news.ycombinator.com/item?id=44473400) - [macOS Icon History](https://basicappleguy.com/basicappleblog/macos-icon-history)
* [2025-07-05, 14:45:39](https://news.ycombinator.com/item?id=44473135) - [Local-first software (2019)](https://www.inkandswitch.com/essay/local-first/)
* [2025-07-05, 14:34:00](https://hardware.slashdot.org/story/25/07/05/042203/nuclear-microreactors-advance-as-us-picks-two-companies-for-fueled-testing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Microreactors Advance as US Picks Two Companies for Fueled Testing](https://hardware.slashdot.org/story/25/07/05/042203/nuclear-microreactors-advance-as-us-picks-two-companies-for-fueled-testing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 14:27:06](https://lobste.rs/s/0rafzx/4096_colours_blink_attribute) - [4096 colours and the blink attribute](https://research.exoticsilicon.com/articles/console_4096)
* [2025-07-05, 14:22:54](https://lobste.rs/s/l40grb/openmw_0_49_0_released) - [OpenMW 0.49.0 Released](https://openmw.org/2025/openmw-0-49-0-released/)
* [2025-07-05, 14:21:14](https://news.ycombinator.com/item?id=44472992) - [Europe&apos;s first geostationary sounder satellite is launched](https://www.eumetsat.int/europes-first-geostationary-sounder-satellite-launched)
* [2025-07-05, 14:10:17](https://lobste.rs/s/9ex6hs/reflections_on_2_years_cpython_s_jit) - [Reflections on 2 years of CPython’s JIT Compiler: The good, the bad, the ugly](https://fidget-spinner.github.io/posts/jit-reflections.html)
* [2025-07-05, 14:08:26](https://lobste.rs/s/s9a1zl/bgcmd_let_ai_interact_with_any_repl) - [bgcmd: let AI interact with any REPL](https://github.com/izabera/bgcmd)
* [2025-07-05, 13:14:50](https://lobste.rs/s/ncyfcp/anubis_pilot_project_report_june_2025) - [Anubis Pilot Project Report - June 2025](https://dukespace.lib.duke.edu/server/api/core/bitstreams/816ef134-55cf-49f6-9a8b-1e8a2324b1ff/content)
* [2025-07-05, 12:30:00](https://news.slashdot.org/story/25/07/04/1725220/near-antarctica-saltier-seas-mean-less-ice-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Near Antarctica, Saltier Seas Mean Less Ice, Study Finds](https://news.slashdot.org/story/25/07/04/1725220/near-antarctica-saltier-seas-mean-less-ice-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 11:43:59](https://lobste.rs/s/9rdvyj/recent_archive_our_own_outage_was_caused) - [Recent Archive of Our Own outage was caused by integer exhaustion](https://otwarchive.atlassian.net/jira/software/c/projects/AO3/issues/AO3-7031?jql=project%20%3D%20%22AO3%22%20ORDER%20BY%20created%20DESC)
* [2025-07-05, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss) - [Candidatus Sukunaarchaeum Mirabile is a Novel Archaeon With an Unprecedentedly Small Genome](https://soylentnews.org/article.pl?sid=25/07/03/1124254&amp;from=rss)
* [2025-07-05, 11:38:58](https://news.ycombinator.com/item?id=44472024) - [What &apos;Project Hail Mary&apos; teaches us about the PlanetScale vs. Neon debate](https://blog.alexoglou.com/posts/database-decisions/)
* [2025-07-05, 11:14:40](https://news.ycombinator.com/item?id=44471896) - [QSBS Limits Raised](https://www.mintz.com/insights-center/viewpoints/2906/2025-06-25-qsbs-benefits-expanded-under-senate-finance-proposal)
* [2025-07-05, 11:00:00](https://developers.slashdot.org/story/25/07/04/191224/ai-coding-agents-are-already-commoditized?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Coding Agents Are Already Commoditized](https://developers.slashdot.org/story/25/07/04/191224/ai-coding-agents-are-already-commoditized?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 09:54:42](https://lobste.rs/s/zupgan/what_clever_tools_workflows_do_you_use) - [What clever tools/workflows do you use to manage development environments?](https://lobste.rs/s/zupgan/what_clever_tools_workflows_do_you_use)
* [2025-07-05, 09:19:28](https://lobste.rs/s/hpplmq/making_language_models_play_baba_is_you) - [Making Language Models Play Baba is You](https://fi-le.net/baba/)
* [2025-07-05, 08:43:41](https://news.ycombinator.com/item?id=44471150) - [Gecode is an open source C++ toolkit for developing constraint-based systems (2019)](https://www.gecode.org/)
* [2025-07-05, 08:00:00](https://slashdot.org/story/25/07/04/198257/eu-sticks-with-timeline-for-ai-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Sticks With Timeline For AI Rules](https://slashdot.org/story/25/07/04/198257/eu-sticks-with-timeline-for-ai-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 07:00:00](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss) - [Canada Orders Chinese CCTV Biz Hikvision To Quit The Country](https://soylentnews.org/article.pl?sid=25/07/03/0247205&amp;from=rss)
* [2025-07-05, 05:00:00](https://slashdot.org/story/25/07/04/1644224/us-plans-ai-chip-curbs-on-malaysia-thailand-over-china-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Plans AI Chip Curbs on Malaysia, Thailand Over China Concerns](https://slashdot.org/story/25/07/04/1644224/us-plans-ai-chip-curbs-on-malaysia-thailand-over-china-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-05, 02:15:00](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss) - [North Koreans Posing As Remote Workers stole $1M ](https://soylentnews.org/article.pl?sid=25/07/03/0230247&amp;from=rss)
* [2025-07-05, 02:00:00](https://science.slashdot.org/story/25/07/04/1829219/there-is-no-safe-amount-of-processed-meat-to-eat-according-to-new-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There Is No Safe Amount of Processed Meat To Eat, According to New Research](https://science.slashdot.org/story/25/07/04/1829219/there-is-no-safe-amount-of-processed-meat-to-eat-according-to-new-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 21:29:45](https://lobste.rs/s/qso1sj/nvidia_is_full_shit) - [NVIDIA is full of shit](https://blog.sebin-nyshkim.net/posts/nvidia-is-full-of-shit/)
* [2025-07-04, 21:23:00](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss) - [Mess is Best: Disordered Structure of Battery-Like Devices Improves Performance](https://soylentnews.org/article.pl?sid=25/07/02/170202&amp;from=rss)
* [2025-07-04, 20:24:40](https://lobste.rs/s/741fnr/compact_bitset_implementation_used) - [A compact bitset implementation used in Ocarina of Time save files](https://github.com/jb55/oot_bitset)
* [2025-07-04, 19:11:19](https://lobste.rs/s/qvz4iu/mawkdown_lightweight_line_oriented_ish) - [mawkdown, a lightweight, line-oriented(ish) text markup tool implemented in awk](https://codeberg.org/owl/mawkdown)
* [2025-07-04, 17:28:00](https://lobste.rs/s/dknqur/git_experts_should_try_jujutsu) - [Git experts should try Jujutsu](https://pksunkara.com/thoughts/git-experts-should-try-jujutsu/)
* [2025-07-04, 17:09:51](https://lobste.rs/s/zhiv3y/supposedly_worthwhile_contract_i_ll) - [A supposedly worthwhile contract I&apos;ll never do again](https://ahelwer.ca/post/2025-07-04-tla-contracts/)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 13:57:38](https://lobste.rs/s/1enkhd/i_want_leave_tech_what_do_i_do) - [I want to leave tech: what do I do?](https://write.as/conjure-utopia/lets-say-youre-working-in-tech-and-you-have-a-technical-role-youre-a)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 07:59:02](https://lobste.rs/s/0szaso/zig_roadmap_2026) - [Zig Roadmap 2026](https://www.youtube.com/watch?v=x3hOiOcbgeA)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
* [2025-07-03, 21:43:00](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss)
* [2025-07-03, 16:56:00](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss) - [Why the Sun is So Good at Evaporating Water](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss)
* [2025-07-03, 14:16:06](https://lobste.rs/s/8we4dn/lucky_13_lobsters) - [Lucky 13 Lobsters](https://lobste.rs/s/8we4dn/lucky_13_lobsters)
* [2025-07-03, 12:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss)
* [2025-07-03, 11:11:57](https://news.ycombinator.com/item?id=44453814) - [Parametric shape optimization with differentiable FEM simulation](https://docs.pasteurlabs.ai/projects/tesseract-jax/latest/examples/fem-shapeopt/demo.html)
* [2025-07-03, 08:16:00](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss)
* [2025-07-03, 03:33:00](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss) - [Bruce Schneier on How Cybersecurity Fears Affect Confidence in Voting Systems](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss)
* [2025-07-02, 22:50:00](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss) - [Fedora: Proposal for the Removal of i686 Withdrawn](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss)
* [2025-07-02, 21:03:13](https://news.ycombinator.com/item?id=44448802) - [ClojureScript from First Principles – David Nolen [video]](https://www.youtube.com/watch?v=An-ImWVppNQ)
* [2025-07-02, 19:24:18](https://news.ycombinator.com/item?id=44447797) - [Atomic \&quot;Bomb\&quot; Ring from KiX (1947)](https://toytales.ca/atomic-bomb-ring-from-kix-1947/)
* [2025-07-02, 18:05:00](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss) - [Are Brother&apos;s Insecure Printers Illegal in the UK?](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss)
* [2025-07-02, 16:10:59](https://news.ycombinator.com/item?id=44445462) - [Fast Code Is Easy. Measuring It Is Hard](https://www.architect.co/posts/how-fast-is-it-really)
* [2025-07-02, 15:26:49](https://news.ycombinator.com/item?id=44444916) - [The Hell of Tetra Master](https://xvw.lol/en/articles/tetra-master.html)
* [2025-07-02, 15:07:19](https://news.ycombinator.com/item?id=44444673) - [Haskell, Reverse Polish Notation, and Parsing](https://mattwills.bearblog.dev/haskell-postfix/)
* [2025-07-02, 13:17:00](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss)
* [2025-07-02, 12:01:59](https://news.ycombinator.com/item?id=44442691) - [Yet Another Zip Trick](https://hackarcana.com/article/yet-another-zip-trick)
* [2025-07-02, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) - [Genetic Study Reveals Humanity&apos;s Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss)
* [2025-07-02, 07:14:19](https://news.ycombinator.com/item?id=44440968) - [X-Clacks-Overhead](https://xclacksoverhead.org/home/about)
* [2025-07-02, 07:09:43](https://news.ycombinator.com/item?id=44440948) - [Solve high degree polynomials using Geode numbers](https://www.tandfonline.com/doi/full/10.1080/00029890.2025.2460966)
* [2025-07-02, 04:59:00](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss) - [Stripe Donations Back Online](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss)
* [2025-07-02, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss) - [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)
