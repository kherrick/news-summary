# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Innovations

* [Elon Musk And Sam Altman Spar On X After Apple Files OpenAI Lawsuit](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48883343))

* [Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://systima.ai/blog/claude-code-vs-opencode-token-overhead) ([Comments](https://news.ycombinator.com/item?id=48883275))

* [Can We Understand How Large Language Models Reason?](https://cacm.acm.org/news/can-we-understand-how-large-language-models-reason/) ([Comments](https://news.ycombinator.com/item?id=48883090))

* [WSJ Reports on 'Hard-line Activists Ramping Up for the War With AI'](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48883090))

* [Automation Without Understanding](https://arxiv.org/abs/2607.06377) ([Comments](https://news.ycombinator.com/item?id=48882554))

* [What xAI's Grok build CLI sends to xAI: A wire-level analysis](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547) ([Comments](https://news.ycombinator.com/item?id=48877371))

* [Mesh LLM: distributed AI computing on iroh](https://www.iroh.computer/blog/mesh-llm) ([Comments](https://news.ycombinator.com/item?id=48876505))

## Science and Research

* [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&from=rss) ([Comments](https://news.ycombinator.com/item?id=48882569))

* [The shingles vaccine may reduce the risk of dementia](https://www.economist.com/leaders/2026/07/09/a-no-brainer-for-protecting-your-brain) ([Comments](https://news.ycombinator.com/item?id=48881874))

* [Why study Diophantine equations?](https://hidden-phenomena.com/articles/modular) ([Comments](https://news.ycombinator.com/item?id=48882097))

* [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&from=rss) ([Comments](https://news.ycombinator.com/item?id=48878682))

* [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&from=rss) ([Comments](https://news.ycombinator.com/item?id=48879504))

## Technology and Innovations

* [Is the COSMIC Desktop Getting Better Than KDE and GNOME?](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48881498))

* [Show HN: Shirei, cross-platform GUI framework in native Go](https://github.com/hasenj/go-shirei/) ([Comments](https://news.ycombinator.com/item?id=48882562))

* [ghostel.el - Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/) ([Comments](https://news.ycombinator.com/item?id=48880499))

* [Old and new apps, via modern coding agents](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ([Comments](https://news.ycombinator.com/item?id=48880170))

* [Hacking Apple - SQL Injection to Remote Code Execution](https://projectdiscovery.io/blog/hacking-apple-with-sql-injection) ([Comments](https://news.ycombinator.com/item?id=48879504))

## Business and Industry Insights

* [SK Hynix CEO Warns 2027 Will Be Memory's 'Worst Year' Ever. Shortages May Outlast the Decade](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=48882956))

* [10 Million Cubans Suffer Nationwide Blackout - For The Second Time This Week](https://hardware.slashdot.org/story/26/07/12/0327230/10-million-cubans-suffer-nationwide-blackout---for-the-second-time-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-07-12, 18:50:00](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk And Sam Altman Spar On X After Apple Files OpenAI Lawsuit](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 18:31:56](https://news.ycombinator.com/item?id=48883343) - [I love LLMs, I hate hype](https://geohot.github.io//blog/jekyll/update/2026/07/12/i-love-llms.html)
* [2026-07-12, 18:25:51](https://news.ycombinator.com/item?id=48883275) - [Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://systima.ai/blog/claude-code-vs-opencode-token-overhead)
* [2026-07-12, 18:04:41](https://news.ycombinator.com/item?id=48883090) - [Can We Understand How Large Language Models Reason?](https://cacm.acm.org/news/can-we-understand-how-large-language-models-reason/)
* [2026-07-12, 17:50:00](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SK Hynix CEO Warns 2027 Will Be Memory&apos;s &apos;Worst Year&apos; Ever. Shortages May Outlast the Decade](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 17:47:07](https://news.ycombinator.com/item?id=48882956) - [Against Usefulness](https://www.motivenotes.ai/p/against-usefulness)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 16:56:41](https://news.ycombinator.com/item?id=48882569) - [LARP – Revenue infrastructure for serious founders](https://www.larp.website/)
* [2026-07-12, 16:55:42](https://news.ycombinator.com/item?id=48882562) - [Show HN: Shirei, cross-platform GUI framework in native Go](https://github.com/hasenj/go-shirei/)
* [2026-07-12, 16:54:47](https://news.ycombinator.com/item?id=48882554) - [Automation Without Understanding](https://arxiv.org/abs/2607.06377)
* [2026-07-12, 16:47:39](https://lobste.rs/s/3v4hbc/slow_software_case_for_high_latency) - [Slow Software: The Case for High-latency Systems Development](https://www.sigops.org/2026/slow-software-the-case-for-high-latency-systems-development/)
* [2026-07-12, 16:34:00](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Reports on &apos;Hard-line Activists Ramping Up for the War With AI&apos;](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 16:05:29](https://news.ycombinator.com/item?id=48882189) - [Theo de Raadt: \&quot;You&apos;ve been smoking something mind altering\&quot; (2007)](https://marc.info/?l=openbsd-misc&amp;m=119318909016582)
* [2026-07-12, 15:53:53](https://news.ycombinator.com/item?id=48882097) - [Why study Diophantine equations?](https://hidden-phenomena.com/articles/modular)
* [2026-07-12, 15:47:16](https://news.ycombinator.com/item?id=48882056) - [How to Read More Books](https://scotto.me/blog/2026-07-12-how-to-read-more-books/)
* [2026-07-12, 15:35:36](https://news.ycombinator.com/item?id=48881967) - [The power of collaboration: How we can reduce traffic congestion](https://research.google/blog/the-power-of-collaboration-how-we-can-reduce-traffic-congestion/)
* [2026-07-12, 15:34:00](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the COSMIC Desktop Getting Better Than KDE and GNOME?](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 15:23:59](https://news.ycombinator.com/item?id=48881874) - [The shingles vaccine may reduce the risk of dementia](https://www.economist.com/leaders/2026/07/09/a-no-brainer-for-protecting-your-brain)
* [2026-07-12, 15:19:32](https://lobste.rs/s/beqyuc/evan_s_jujutsu_tutorial) - [Evan&apos;s Jujutsu Tutorial](https://evmar.github.io/jjtut/)
* [2026-07-12, 15:17:20](https://news.ycombinator.com/item?id=48881830) - [Don&apos;t you mean extinct?](https://fabiensanglard.net/extinct/index.html)
* [2026-07-12, 14:34:00](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-driven Datacenter Builds Increased Microsoft&apos;s Emissions 25% In One Year](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 14:32:00](https://news.ycombinator.com/item?id=48881498) - [Autoresearch, Claude and Constrained Optimization](https://www.elliotcsmith.com/autoresearch-claude-and-constrained-optimization/)
* [2026-07-12, 14:03:38](https://lobste.rs/s/s1jwea/unauthenticated_rce_motorola_s_mr2600) - [Unauthenticated RCE in Motorola&apos;s MR2600 Router](https://mrbruh.com/motorola/)
* [2026-07-12, 14:02:22](https://lobste.rs/s/ovkyow/ef_core_11_makes_your_split_queries_faster) - [EF Core 11 makes your split queries faster](https://steven-giesel.com/blogPost/d4401fd0-805a-4703-9d9e-5fe3b57c25ea)
* [2026-07-12, 13:26:13](https://news.ycombinator.com/item?id=48881043) - [AI boosts research careers but narrow the span of ideas explored: study](https://spectrum.ieee.org/ai-science-research-flattens-discovery)
* [2026-07-12, 12:18:13](https://lobste.rs/s/xgdsao/ghostel_el_terminal_emulator_powered_by) - [ghostel.el - Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 12:08:07](https://news.ycombinator.com/item?id=48880499) - [Understanding the Odin Programming Language](https://odinbook.com/)
* [2026-07-12, 11:52:21](https://news.ycombinator.com/item?id=48880406) - [Unauthenticated RCE in Motorola&apos;s MR2600 Router](https://mrbruh.com/motorola/)
* [2026-07-12, 11:34:00](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Id Co-founders Carmack and Romero Respond to Microsoft&apos;s Layoffs](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 11:09:42](https://news.ycombinator.com/item?id=48880170) - [Old and new apps, via modern coding agents](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/)
* [2026-07-12, 10:50:03](https://lobste.rs/s/axamxi/hacking_apple_sql_injection_remote_code) - [Hacking Apple - SQL Injection to Remote Code Execution](https://projectdiscovery.io/blog/hacking-apple-with-sql-injection)
* [2026-07-12, 10:14:40](https://news.ycombinator.com/item?id=48879902) - [Death of the Status Update: Why 55% of Americans Stopped Posting on Social Media](https://ca.pcmag.com/social-media/16790/the-death-of-the-status-update-why-55-of-americans-stopped-posting-on-social-media)
* [2026-07-12, 09:24:30](https://lobste.rs/s/ksmsg3/make_your_own_windows_98_oem_install) - [Make your own Windows 98 OEM Install](https://www.youtube.com/watch?v=zUm5eW_XGMU)
* [2026-07-12, 09:07:07](https://lobste.rs/s/shajxh/data_directed_programming_haskell_sicp2) - [Data-directed programming in Haskell (SICP2.4.3)](https://entropicthoughts.com/sicp-2-4-data-directed-programming-in-haskell)
* [2026-07-12, 08:52:59](https://news.ycombinator.com/item?id=48879504) - [Ghostel.el: Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)
* [2026-07-12, 07:52:00](https://news.slashdot.org/story/26/07/12/0259226/facial-recognition-in-uk-shops-will-soon-instantly-alert-police-about-offenders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition in UK Shops Will Soon Instantly Alert Police About Offenders](https://news.slashdot.org/story/26/07/12/0259226/facial-recognition-in-uk-shops-will-soon-instantly-alert-police-about-offenders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 07:11:23](https://lobste.rs/s/n85thm/ant_lightweight_javascript_runtime) - [Ant, a lightweight JavaScript runtime](https://antjs.org/)
* [2026-07-12, 06:40:15](https://lobste.rs/s/2vsvdm/proportional_web) - [The Proportional Web](https://owickstrom.github.io/the-proportional-web/)
* [2026-07-12, 05:51:32](https://news.ycombinator.com/item?id=48878682) - [Show HN: Mindwalk – Replay coding-agent sessions on a 3D map of your codebase](https://github.com/cosmtrek/mindwalk)
* [2026-07-12, 03:52:00](https://hardware.slashdot.org/story/26/07/12/0327230/10-million-cubans-suffer-nationwide-blackout---for-the-second-time-this-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [10 Million Cubans Suffer Nationwide Blackout - For The Second Time This Week](https://hardware.slashdot.org/story/26/07/12/0327230/10-million-cubans-suffer-nationwide-blackout---for-the-second-time-this-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 03:36:08](https://lobste.rs/s/wsw7tq/agent_100_lines_lisp) - [An Agent in 100 Lines of Lisp](https://thebeach.dev/posts/lisp-agent/)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-12, 02:37:46](https://lobste.rs/s/elhi7o/defense_not_understanding_your_codebase) - [In defense of not understanding your codebase](https://www.seangoedecke.com/in-defense-of-not-understanding-your-codebase/)
* [2026-07-12, 02:34:31](https://lobste.rs/s/ktew3s/who_does_anubis_actually_stop) - [Who does Anubis actually stop?](https://fzakaria.com/2026/07/09/who-does-anubis-actually-stop)
* [2026-07-12, 01:52:00](https://tech.slashdot.org/story/26/07/12/0150219/meta-removes-controversial-ai-feature-on-instagram-after-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Removes Controversial AI Feature On Instagram After Backlash](https://tech.slashdot.org/story/26/07/12/0150219/meta-removes-controversial-ai-feature-on-instagram-after-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 01:15:49](https://lobste.rs/s/zzdc8x/reaction_daemon_scans_program_outputs) - [reaction: A daemon that scans program outputs for repeated patterns, and takes action](https://framagit.org/ppom/reaction)
* [2026-07-12, 01:09:50](https://news.ycombinator.com/item?id=48877371) - [What xAI&apos;s Grok build CLI sends to xAI: A wire-level analysis](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547)
* [2026-07-12, 01:01:33](https://lobste.rs/s/q4fx6x/odyssey_linux) - [Odyssey Linux](https://odysseylinux.org/)
* [2026-07-12, 00:31:03](https://lobste.rs/s/mynquj/gap_ui_text_diff) - [gap: UI text diff](https://github.com/cdacamar/gap)
* [2026-07-11, 23:54:53](https://lobste.rs/s/pdbktp/today_i_rescued_7_234_old_gifs) - [Today I Rescued 7,234 Old GIFs](https://danq.me/2026/07/10/rescuing-7234-gifs/)
* [2026-07-11, 22:47:00](https://slashdot.org/story/26/07/11/2129203/people-keep-sneaking-into-an-empty-ibm-campus---and-then-getting-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Keep Sneaking Into an Empty IBM Campus - and Then Getting Arrested](https://slashdot.org/story/26/07/11/2129203/people-keep-sneaking-into-an-empty-ibm-campus---and-then-getting-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 22:38:57](https://news.ycombinator.com/item?id=48876505) - [Mesh LLM: distributed AI computing on iroh](https://www.iroh.computer/blog/mesh-llm)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 21:47:00](https://news.slashdot.org/story/26/07/11/0450256/how-the-fsf-sysadmins-are-blocking-botnets-with-reaction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the FSF Sysadmins are Blocking Botnets with reaction ](https://news.slashdot.org/story/26/07/11/0450256/how-the-fsf-sysadmins-are-blocking-botnets-with-reaction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 21:05:50](https://lobste.rs/s/tedtzz/where_did_my_segfault_go) - [Where did my segfault go?](https://rmpr.xyz/Where-did-my-segfault-go/)
* [2026-07-11, 20:47:00](https://news.slashdot.org/story/26/07/11/2045206/duckduckgos-browser-now-blocks-most-youtube-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DuckDuckGo&apos;s Browser Now Blocks Most YouTube Ads](https://news.slashdot.org/story/26/07/11/2045206/duckduckgos-browser-now-blocks-most-youtube-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 20:41:48](https://lobste.rs/s/y23kkm/gamedev_zig_is_actually_pretty_good_2025) - [Gamedev in Zig is actually pretty good (2025)](https://www.youtube.com/watch?v=-xIFpg7sBVs)
* [2026-07-11, 19:34:00](https://science.slashdot.org/story/26/07/11/1917235/orbital-datacenter-plans-need-an-environmental-review-fcc-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Orbital Datacenter Plans Need an Environmental Review, FCC Told](https://science.slashdot.org/story/26/07/11/1917235/orbital-datacenter-plans-need-an-environmental-review-fcc-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 18:34:59](https://lobste.rs/s/gmzzeb/handsum_lqip_image_file_format) - [Handsum: An LQIP Image File Format](https://nigeltao.github.io/blog/2026/handsum.html)
* [2026-07-11, 18:34:00](https://it.slashdot.org/story/26/07/11/0639259/this-factory-was-severely-short-on-workers-then-it-offered-flexible-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Factory Was Severely Short On Workers. Then It Offered Flexible Work.](https://it.slashdot.org/story/26/07/11/0639259/this-factory-was-severely-short-on-workers-then-it-offered-flexible-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 18:02:54](https://lobste.rs/s/ydjxee/good_tools_are_invisible) - [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)
* [2026-07-11, 17:34:00](https://slashdot.org/story/26/07/11/040239/chinas-ai-companies-may-be-distilling-americas-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s AI Companies May Be &apos;Distilling&apos; America&apos;s AI Models](https://slashdot.org/story/26/07/11/040239/chinas-ai-companies-may-be-distilling-americas-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
* [2026-07-11, 12:24:51](https://lobste.rs/s/wjr8hw/madame_semver_will_see_you_now) - [Madame Semver Will See You Now](https://nesbitt.io/2026/05/10/madame-semver-will-see-you-now.html)
* [2026-07-11, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss) - [Secure Unix Ancestor KSOS Did Type Safety Before Rust Made It Cool](https://soylentnews.org/article.pl?sid=26/07/10/0919216&amp;from=rss)
* [2026-07-11, 07:41:00](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss) - [Scientists Discover the Deep Sleep Circuit That Builds Muscle, Burns Fat, and Boosts the Brain](https://soylentnews.org/article.pl?sid=26/07/10/0916227&amp;from=rss)
* [2026-07-11, 05:24:30](https://lobste.rs/s/vhbvwc/i_converted_android_app_webpage) - [I converted an Android app to a webpage](https://danq.me/2026/07/09/your-app-could-have-been-a-webpage/)
* [2026-07-11, 03:30:18](https://lobste.rs/s/ovbeds/i_tried_netbsd_as_desktop_it_felt_like) - [I tried NetBSD as a desktop, and it felt like stepping into the &apos;90s in a good way](https://www.howtogeek.com/i-tried-netbsd-as-a-desktop-and-it-felt-like-stepping-into-the-90s-in-a-good-way/)
* [2026-07-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss) - [Suspecting AI Cheating, Ivy League Prof Ordered an in-Person Final; Scores Fell 50%](https://soylentnews.org/article.pl?sid=26/07/09/1625207&amp;from=rss)
* [2026-07-10, 23:02:53](https://lobste.rs/s/kpaxih/update_on_scraper_situation) - [An update on the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)
* [2026-07-10, 21:44:00](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss) - [Qualcomm Buys Lattner&apos;s Modular for Almost $4bn](https://soylentnews.org/article.pl?sid=26/07/09/0348202&amp;from=rss)
* [2026-07-10, 17:01:00](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss) - [Alibaba Bans Anthropic&apos;s Claude Code After an Alleged Hidden China-Detection Backdoor is Uncovered](https://soylentnews.org/article.pl?sid=26/07/09/0343224&amp;from=rss)
* [2026-07-10, 16:12:52](https://news.ycombinator.com/item?id=48861923) - [Why write code in 2026](https://softwaredoug.com/blog/2026/07/09/write-code)
* [2026-07-10, 12:17:00](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss) - [Back to Basics, or Masm. Writing a Tiny Notepad for W11.](https://soylentnews.org/article.pl?sid=26/07/09/0339222&amp;from=rss)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 00:06:59](https://news.ycombinator.com/item?id=48854168) - [Vint Cerf, “father of the Internet”, is retiring](https://techcrunch.com/2026/06/30/the-father-of-the-internet-is-finally-retiring/)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
