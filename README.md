# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [Linus Torvalds on AI, Junk Patches, Humans, and Godzilla](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Linus Torvalds shares his perspective on artificial intelligence and its implications, while addressing the relevance of humans in an AI-driven future.

* [Meta Removes Controversial AI Feature On Instagram After Backlash](https://tech.slashdot.org/story/26/07/12/0150219/meta-removes-controversial-ai-feature-on-instagram-after-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta has decided to remove an AI feature from Instagram following public criticism.

* [Mechanistic interpretability researchers applying causality theory to LLMs](https://cacm.acm.org/news/can-we-understand-how-large-language-models-reason/) - Researchers are leveraging causality theory to improve the understanding and explainability of large language models (LLMs).

* [Adaptive Recall, persistent memory for AI assistants over MCP](https://www.adaptiverecall.com/) - A new persistent memory system aims to enhance the capabilities of AI assistants, utilizing MCP for adaptive recall.

## Digital Security and Privacy

* [Since Chronium 148, Math.tanh is now fingerprintable to link underlying OS](https://scrapfly.dev/posts/browser-math-os-fingerprint/) - A new method of fingerprinting operating systems using the Math.tanh function in Chromium 148 raises privacy concerns.

* [The State of MCP Security [pdf]](https://www.canopii.dev/State%20of%20MCP%20Security%202026.pdf) - An in-depth analysis of current vulnerabilities and the evolving landscape of MCP security.

* [Unauthenticated RCE in Motorola&apos;s MR2600 Router](https://mrbruh.com/motorola/) - A newly discovered remote code execution vulnerability in Motorola's MR2600 router raises security alarm.

* [Hacking Apple - SQL Injection to Remote Code Execution](https://projectdiscovery.io/blog/hacking-apple-with-sql-injection) - A detailed dive into a security issue in Apple's system that allowed attackers to perform SQL injection attacks, leading to remote code execution.

* [Facial Recognition in UK Shops Will Soon Instantly Alert Police About Offenders](https://news.slashdot.org/story/26/07/12/0259226/facial-recognition-in-uk-shops-will-soon-instantly-alert-police-about-offenders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - UK shops to implement facial recognition systems that automatically alert police about offenders, prompting privacy debates.

## Emerging Technologies and Innovations

* [Kode Dot Programmable pocket device for makers, pentesters and geeks](https://kode.diy) - A new programmable pocket device for tech enthusiasts and professionals is now available.

* [InfiniteDiffusion: Bridging Learned Fidelity and Procedural Utility for Open-World Terrain Generation](https://xandergos.github.io/terrain-diffusion/) - A hybrid approach to terrain generation using a mix of machine learning and procedural techniques.

* [Flash-MSA: Accelerating Million-Token Training with Sparse Attention Kernels](https://nanduruganesh.github.io/flash-msa/) - A research breakthrough enabling faster training for large-scale machine learning models through sparse attention kernels.

* [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - A novel dental robot promises more precise and less invasive dental procedures.

## Environmental and Energy Concerns

* [Irish datacenters now guzzle 23% of the country&apos;s electricity](https://www.theregister.com/on-prem/2026/07/11/irish-datacenters-now-guzzle-23-of-the-countrys-electricity/5270013) - Data centers in Ireland now consume almost a quarter of the country's electricity, highlighting concerns about energy usage.

* [SK Hynix CEO Warns 2027 Will Be Memory&apos;s &apos;Worst Year&apos; Ever. Shortages May Outlast the Decade](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SK Hynix CEO warns about expected memory shortages in 2027 and potential long-term implications.

## Unique Perspectives in Tech and AI

* [Slow Software: The Case for High-latency Systems Development](https://www.sigops.org/2026/slow-software-the-case-for-high-latency-systems-development/) - A thought-provoking argument for developing high-latency systems in software development.

* [Against Usefulness](https://www.motivenotes.ai/p/against-usefulness) - A critique of the current emphasis on functionality and utility in software design.

* [I love LLMs, I hate hype](https://geohot.github.io//blog/jekyll/update/2026/07/12/i-love-llms.html) - A developer dives into their love for large language models while challenging the surrounding industry hype.

## Noteworthy Business and Industry News

* [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - Volkswagen plans to cut down the number of brands under its umbrella amidst plummeting sales.

* [Elon Musk And Sam Altman Spar On X After Apple Files OpenAI Lawsuit](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A high-profile confrontation between Elon Musk and Sam Altman unfolds on social media following a lawsuit by Apple against OpenAI.

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

* [2026-07-12, 21:45:00](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss) - [Volkswagen Sales Plunge as German Automaker Lays Out Plan to Slash Number of Brands](https://soylentnews.org/article.pl?sid=26/07/11/1846204&amp;from=rss)
* [2026-07-12, 21:27:29](https://news.ycombinator.com/item?id=48884992) - [Kode Dot Programmable pocket device for makers, pentesters and geeks](https://kode.diy)
* [2026-07-12, 21:26:41](https://news.ycombinator.com/item?id=48884984) - [Ask HN: What Are You Working On? (July 2026)](https://news.ycombinator.com/item?id=48884984)
* [2026-07-12, 21:12:11](https://news.ycombinator.com/item?id=48884853) - [Since Chronium 148, Math.tanh is now fingerprintable to link underlying OS](https://scrapfly.dev/posts/browser-math-os-fingerprint/)
* [2026-07-12, 21:08:20](https://news.ycombinator.com/item?id=48884815) - [Show HN: Adaptive Recall, persistent memory for AI assistants over MCP](https://www.adaptiverecall.com/)
* [2026-07-12, 20:55:00](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on AI, Junk Patches, Humans, and Godzilla](https://linux.slashdot.org/story/26/07/12/2053201/linus-torvalds-on-ai-junk-patches-humans-and-godzilla?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 20:49:46](https://news.ycombinator.com/item?id=48884647) - [The State of MCP Security [pdf]](https://www.canopii.dev/State%20of%20MCP%20Security%202026.pdf)
* [2026-07-12, 20:46:43](https://news.ycombinator.com/item?id=48884618) - [Flash-MSA: Accelerating Million-Token Training with Sparse Attention Kernels](https://nanduruganesh.github.io/flash-msa/)
* [2026-07-12, 20:23:05](https://news.ycombinator.com/item?id=48884395) - [Tiny Emulators](https://floooh.github.io/tiny8bit-preview/index.html)
* [2026-07-12, 20:16:12](https://news.ycombinator.com/item?id=48884322) - [Irish datacenters now guzzle 23% of the country&apos;s electricity](https://www.theregister.com/on-prem/2026/07/11/irish-datacenters-now-guzzle-23-of-the-countrys-electricity/5270013)
* [2026-07-12, 19:56:07](https://lobste.rs/s/ncsslp/infinitediffusion_bridging_learned) - [InfiniteDiffusion: Bridging Learned Fidelity and Procedural Utility for Open-World Terrain Generation](https://xandergos.github.io/terrain-diffusion/)
* [2026-07-12, 19:54:30](https://news.ycombinator.com/item?id=48884100) - [Defining new Jax types with hijax](https://docs.jax.dev/en/latest/hijax_types.html)
* [2026-07-12, 19:49:53](https://news.ycombinator.com/item?id=48884052) - [Neocities: Create your own free website](https://neocities.org/)
* [2026-07-12, 18:58:31](https://lobste.rs/s/7840ca/closing_three_year_old_issue_using_rust) - [Closing a three-year-old issue using Rust arenas](https://giacomocavalieri.me/writing/gleam-rust-arenas)
* [2026-07-12, 18:50:00](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk And Sam Altman Spar On X After Apple Files OpenAI Lawsuit](https://tech.slashdot.org/story/26/07/12/1842219/elon-musk-and-sam-altman-spar-on-x-after-apple-files-openai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 18:41:15](https://news.ycombinator.com/item?id=48883415) - [The One-Step Trap (In AI Research)](http://incompleteideas.net/IncIdeas/OneStepTrap.html)
* [2026-07-12, 18:31:56](https://news.ycombinator.com/item?id=48883343) - [I love LLMs, I hate hype](https://geohot.github.io//blog/jekyll/update/2026/07/12/i-love-llms.html)
* [2026-07-12, 18:25:51](https://news.ycombinator.com/item?id=48883275) - [Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://systima.ai/blog/claude-code-vs-opencode-token-overhead)
* [2026-07-12, 18:22:15](https://news.ycombinator.com/item?id=48883238) - [I Learned to Read Again](https://substack.magazinenongrata.com/p/how-i-learned-to-read-again)
* [2026-07-12, 18:04:41](https://news.ycombinator.com/item?id=48883090) - [Mechanistic interpretability researchers applying causality theory to LLMs](https://cacm.acm.org/news/can-we-understand-how-large-language-models-reason/)
* [2026-07-12, 17:50:00](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SK Hynix CEO Warns 2027 Will Be Memory&apos;s &apos;Worst Year&apos; Ever. Shortages May Outlast the Decade](https://hardware.slashdot.org/story/26/07/12/1747258/sk-hynix-ceo-warns-2027-will-be-memorys-worst-year-ever-shortages-may-outlast-the-decade?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 17:47:07](https://news.ycombinator.com/item?id=48882956) - [Against Usefulness](https://www.motivenotes.ai/p/against-usefulness)
* [2026-07-12, 17:13:07](https://news.ycombinator.com/item?id=48882716) - [Migrating a production AI agent to GPT-5.6: 2.2x faster, 27% cheaper](https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6)
* [2026-07-12, 16:57:00](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss) - [Quantum Mechanics Surprisingly Based on Real Numbers](https://soylentnews.org/article.pl?sid=26/07/11/1844243&amp;from=rss)
* [2026-07-12, 16:56:41](https://news.ycombinator.com/item?id=48882569) - [LARP – Revenue infrastructure for serious founders](https://www.larp.website/)
* [2026-07-12, 16:54:47](https://news.ycombinator.com/item?id=48882554) - [Automation Without Understanding](https://arxiv.org/abs/2607.06377)
* [2026-07-12, 16:47:39](https://lobste.rs/s/3v4hbc/slow_software_case_for_high_latency) - [Slow Software: The Case for High-latency Systems Development](https://www.sigops.org/2026/slow-software-the-case-for-high-latency-systems-development/)
* [2026-07-12, 16:34:00](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ Reports on &apos;Hard-line Activists Ramping Up for the War With AI&apos;](https://slashdot.org/story/26/07/12/0643218/wsj-reports-on-hard-line-activists-ramping-up-for-the-war-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 15:53:53](https://news.ycombinator.com/item?id=48882097) - [Why study Diophantine equations?](https://hidden-phenomena.com/articles/modular)
* [2026-07-12, 15:47:16](https://news.ycombinator.com/item?id=48882056) - [How to read more books](https://scotto.me/blog/2026-07-12-how-to-read-more-books/)
* [2026-07-12, 15:35:36](https://news.ycombinator.com/item?id=48881967) - [The power of collaboration: How we can reduce traffic congestion](https://research.google/blog/the-power-of-collaboration-how-we-can-reduce-traffic-congestion/)
* [2026-07-12, 15:34:00](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the COSMIC Desktop Getting Better Than KDE and GNOME?](https://tech.slashdot.org/story/26/07/12/0543243/is-the-cosmic-desktop-getting-better-than-kde-and-gnome?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 15:23:59](https://news.ycombinator.com/item?id=48881874) - [The shingles vaccine may reduce the risk of dementia](https://www.economist.com/leaders/2026/07/09/a-no-brainer-for-protecting-your-brain)
* [2026-07-12, 15:19:32](https://lobste.rs/s/beqyuc/evan_s_jujutsu_tutorial) - [Evan&apos;s Jujutsu Tutorial](https://evmar.github.io/jjtut/)
* [2026-07-12, 15:17:20](https://news.ycombinator.com/item?id=48881830) - [Don&apos;t you mean extinct?](https://fabiensanglard.net/extinct/index.html)
* [2026-07-12, 14:34:00](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-driven Datacenter Builds Increased Microsoft&apos;s Emissions 25% In One Year](https://slashdot.org/story/26/07/11/1944220/ai-driven-datacenter-builds-increased-microsofts-emissions-25-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 14:03:38](https://lobste.rs/s/s1jwea/unauthenticated_rce_motorola_s_mr2600) - [Unauthenticated RCE in Motorola&apos;s MR2600 Router](https://mrbruh.com/motorola/)
* [2026-07-12, 14:02:22](https://lobste.rs/s/ovkyow/ef_core_11_makes_your_split_queries_faster) - [EF Core 11 makes your split queries faster](https://steven-giesel.com/blogPost/d4401fd0-805a-4703-9d9e-5fe3b57c25ea)
* [2026-07-12, 12:18:13](https://lobste.rs/s/xgdsao/ghostel_el_terminal_emulator_powered_by) - [ghostel.el - Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)
* [2026-07-12, 12:10:00](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss) - [New Dental Robot Attaches to Patient&apos;s Teeth for Drilling](https://soylentnews.org/article.pl?sid=26/07/11/0144241&amp;from=rss)
* [2026-07-12, 11:34:00](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Id Co-founders Carmack and Romero Respond to Microsoft&apos;s Layoffs](https://games.slashdot.org/story/26/07/12/058235/id-co-founders-carmack-and-romero-respond-to-microsofts-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 11:09:42](https://news.ycombinator.com/item?id=48880170) - [Old and new apps, via modern coding agents](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/)
* [2026-07-12, 10:50:03](https://lobste.rs/s/axamxi/hacking_apple_sql_injection_remote_code) - [Hacking Apple - SQL Injection to Remote Code Execution](https://projectdiscovery.io/blog/hacking-apple-with-sql-injection)
* [2026-07-12, 09:24:30](https://lobste.rs/s/ksmsg3/make_your_own_windows_98_oem_install) - [Make your own Windows 98 OEM Install](https://www.youtube.com/watch?v=zUm5eW_XGMU)
* [2026-07-12, 09:07:07](https://lobste.rs/s/shajxh/data_directed_programming_haskell_sicp2) - [Data-directed programming in Haskell (SICP2.4.3)](https://entropicthoughts.com/sicp-2-4-data-directed-programming-in-haskell)
* [2026-07-12, 08:52:59](https://news.ycombinator.com/item?id=48879504) - [Ghostel.el: Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)
* [2026-07-12, 07:52:00](https://news.slashdot.org/story/26/07/12/0259226/facial-recognition-in-uk-shops-will-soon-instantly-alert-police-about-offenders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facial Recognition in UK Shops Will Soon Instantly Alert Police About Offenders](https://news.slashdot.org/story/26/07/12/0259226/facial-recognition-in-uk-shops-will-soon-instantly-alert-police-about-offenders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 07:21:00](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss) - [Failed Aussie Blockchain Project Ends With Big Fine for Fibs About It Being on Track](https://soylentnews.org/article.pl?sid=26/07/11/0138228&amp;from=rss)
* [2026-07-12, 07:11:23](https://lobste.rs/s/n85thm/ant_lightweight_javascript_runtime) - [Ant, a lightweight JavaScript runtime](https://antjs.org/)
* [2026-07-12, 06:40:15](https://lobste.rs/s/2vsvdm/proportional_web) - [The Proportional Web](https://owickstrom.github.io/the-proportional-web/)
* [2026-07-12, 03:52:00](https://hardware.slashdot.org/story/26/07/12/0327230/10-million-cubans-suffer-nationwide-blackout---for-the-second-time-this-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [10 Million Cubans Suffer Nationwide Blackout - For The Second Time This Week](https://hardware.slashdot.org/story/26/07/12/0327230/10-million-cubans-suffer-nationwide-blackout---for-the-second-time-this-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 03:36:08](https://lobste.rs/s/wsw7tq/agent_100_lines_lisp) - [An Agent in 100 Lines of Lisp](https://thebeach.dev/posts/lisp-agent/)
* [2026-07-12, 02:38:00](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss) - [NHTSA Calls Out Autonomous Cars for Interfering With First Responders](https://soylentnews.org/article.pl?sid=26/07/11/0130201&amp;from=rss)
* [2026-07-12, 02:37:46](https://lobste.rs/s/elhi7o/defense_not_understanding_your_codebase) - [In defense of not understanding your codebase](https://www.seangoedecke.com/in-defense-of-not-understanding-your-codebase/)
* [2026-07-12, 02:34:31](https://lobste.rs/s/ktew3s/who_does_anubis_actually_stop) - [Who does Anubis actually stop?](https://fzakaria.com/2026/07/09/who-does-anubis-actually-stop)
* [2026-07-12, 01:52:00](https://tech.slashdot.org/story/26/07/12/0150219/meta-removes-controversial-ai-feature-on-instagram-after-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Removes Controversial AI Feature On Instagram After Backlash](https://tech.slashdot.org/story/26/07/12/0150219/meta-removes-controversial-ai-feature-on-instagram-after-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-12, 01:15:49](https://lobste.rs/s/zzdc8x/reaction_daemon_scans_program_outputs) - [reaction: A daemon that scans program outputs for repeated patterns, and takes action](https://framagit.org/ppom/reaction)
* [2026-07-12, 01:01:33](https://lobste.rs/s/q4fx6x/odyssey_linux) - [Odyssey Linux](https://odysseylinux.org/)
* [2026-07-11, 23:54:53](https://lobste.rs/s/pdbktp/today_i_rescued_7_234_old_gifs) - [Today I Rescued 7,234 Old GIFs](https://danq.me/2026/07/10/rescuing-7234-gifs/)
* [2026-07-11, 22:47:00](https://slashdot.org/story/26/07/11/2129203/people-keep-sneaking-into-an-empty-ibm-campus---and-then-getting-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [People Keep Sneaking Into an Empty IBM Campus - and Then Getting Arrested](https://slashdot.org/story/26/07/11/2129203/people-keep-sneaking-into-an-empty-ibm-campus---and-then-getting-arrested?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 21:49:00](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss) - [Woman&apos;s Puzzling Decline Turns Out to be Cobalt Poisoning From Hip Replacement](https://soylentnews.org/article.pl?sid=26/07/11/0123222&amp;from=rss)
* [2026-07-11, 21:47:00](https://news.slashdot.org/story/26/07/11/0450256/how-the-fsf-sysadmins-are-blocking-botnets-with-reaction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the FSF Sysadmins are Blocking Botnets with reaction ](https://news.slashdot.org/story/26/07/11/0450256/how-the-fsf-sysadmins-are-blocking-botnets-with-reaction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 21:05:50](https://lobste.rs/s/tedtzz/where_did_my_segfault_go) - [Where did my segfault go?](https://rmpr.xyz/Where-did-my-segfault-go/)
* [2026-07-11, 20:47:00](https://news.slashdot.org/story/26/07/11/2045206/duckduckgos-browser-now-blocks-most-youtube-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DuckDuckGo&apos;s Browser Now Blocks Most YouTube Ads](https://news.slashdot.org/story/26/07/11/2045206/duckduckgos-browser-now-blocks-most-youtube-ads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 20:41:48](https://lobste.rs/s/y23kkm/gamedev_zig_is_actually_pretty_good_2025) - [Gamedev in Zig is actually pretty good (2025)](https://www.youtube.com/watch?v=-xIFpg7sBVs)
* [2026-07-11, 19:34:00](https://science.slashdot.org/story/26/07/11/1917235/orbital-datacenter-plans-need-an-environmental-review-fcc-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Orbital Datacenter Plans Need an Environmental Review, FCC Told](https://science.slashdot.org/story/26/07/11/1917235/orbital-datacenter-plans-need-an-environmental-review-fcc-told?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 18:34:59](https://lobste.rs/s/gmzzeb/handsum_lqip_image_file_format) - [Handsum: An LQIP Image File Format](https://nigeltao.github.io/blog/2026/handsum.html)
* [2026-07-11, 18:34:00](https://it.slashdot.org/story/26/07/11/0639259/this-factory-was-severely-short-on-workers-then-it-offered-flexible-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Factory Was Severely Short On Workers. Then It Offered Flexible Work.](https://it.slashdot.org/story/26/07/11/0639259/this-factory-was-severely-short-on-workers-then-it-offered-flexible-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-11, 18:02:54](https://lobste.rs/s/ydjxee/good_tools_are_invisible) - [Good Tools Are Invisible](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)
* [2026-07-11, 17:07:00](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss) - [Geopolitical Tensions Are Complicating Research Efforts in the Norwegian Archipelago of Svalbar](https://soylentnews.org/article.pl?sid=26/07/10/0939213&amp;from=rss)
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
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 13:15:26](https://news.ycombinator.com/item?id=48845321) - [The Seed Beneath the Snow](https://eli.li/the-seed-beneath-the-snow)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 03:28:00](https://news.ycombinator.com/item?id=48827126) - [So you want to learn physics (second edition, 2021)](https://www.susanrigetti.com/physics)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
