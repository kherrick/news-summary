# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [Famed AI Researcher Launches Controversial Startup to Replace All Human Workers Everywhere](https://hardware.slashdot.org/story/25/04/20/1921251/famed-ai-researcher-launches-controversial-startup-to-replace-all-human-workers-everywhere)

* [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)

* [Why LLM-Powered Programming Is More Mech Suit Than Artificial Human](https://matthewsinclair.com/blog/0178-why-llm-powered-programming-is-more-mech-suit-than-artificial-human)

* [Launch HN: Magic Patterns (YC W23) – AI Design and Prototyping for Product Teams](https://news.ycombinator.com/item?id=43752176)

## Space and Astronomy

* [Astronomers Confirm First 'Lone' Black Hole Discovery - and It's in the Milky Way](https://science.slashdot.org/story/25/04/20/2153201/astronomers-confirm-first-lone-black-hole-discovery---and-its-in-the-milky-way)

* [Space Investor Sees Opportunities in Defense-Related Startups and AI-Driven Systems](https://science.slashdot.org/story/25/04/21/066243/space-investor-sees-opportunities-in-defense-related-startups-and-ai-driven-systems)

## Society and Culture

* [The Effect of Deactivating Facebook and Instagram on Users' Emotional State](https://www.nber.org/papers/w33697)

* [We May Have Already Hit Peak Booze](https://slashdot.org/story/25/04/21/0728213/we-may-have-already-hit-peak-booze)

## Notable Deaths

* [Pope Francis Has Died](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)

## Cybersecurity and Legal

* [The FBI Can't Find 'Missing' Records of Its Hacking Tools](https://news.slashdot.org/story/25/04/21/1528216/the-fbi-cant-find-missing-records-of-its-hacking-tools)

## Miscellaneous

* [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)

* [Things Zig comptime Won't Do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)

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

* [2025-04-21, 15:28:00](https://news.slashdot.org/story/25/04/21/1528216/the-fbi-cant-find-missing-records-of-its-hacking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The FBI Can&apos;t Find &apos;Missing&apos; Records of Its Hacking Tools](https://news.slashdot.org/story/25/04/21/1528216/the-fbi-cant-find-missing-records-of-its-hacking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 14:49:23](https://news.ycombinator.com/item?id=43752627) - [Inner Loop Agents](https://timkellogg.me/blog/2025/04/19/inner-loops)
* [2025-04-21, 14:43:00](https://tech.slashdot.org/story/25/04/21/1443240/over-100-public-software-companies-getting-squeezed-by-ai-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Over 100 Public Software Companies Getting &apos;Squeezed&apos; by AI, Study Finds](https://tech.slashdot.org/story/25/04/21/1443240/over-100-public-software-companies-getting-squeezed-by-ai-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 14:39:48](https://news.ycombinator.com/item?id=43752532) - [Out of the Fog](https://www.theverge.com/cs/features/651701/vietnam-operation-babylift-adoption-transnational)
* [2025-04-21, 14:36:14](https://news.ycombinator.com/item?id=43752492) - [Why LLM-Powered Programming Is More Mech Suit Than Artificial Human](https://matthewsinclair.com/blog/0178-why-llm-powered-programming-is-more-mech-suit-than-artificial-human)
* [2025-04-21, 14:34:24](https://news.ycombinator.com/item?id=43752472) - [PlanetMath](https://planetmath.org/)
* [2025-04-21, 14:30:28](https://news.ycombinator.com/item?id=43752433) - [Handwriting activates broader brain networks than typing](https://www.psypost.org/handwriting-activates-broader-brain-networks-than-typing-study-shows/)
* [2025-04-21, 14:10:11](https://news.ycombinator.com/item?id=43752206) - [The Tontine Coffee-House (2018)](https://tontinecoffeehouse.com/2018/10/15/the-tontine-coffee-house/)
* [2025-04-21, 14:07:03](https://news.ycombinator.com/item?id=43752176) - [Launch HN: Magic Patterns (YC W23) – AI Design and Prototyping for Product Teams](https://news.ycombinator.com/item?id=43752176)
* [2025-04-21, 14:00:00](https://slashdot.org/story/25/04/21/0728213/we-may-have-already-hit-peak-booze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [We May Have Already Hit Peak Booze](https://slashdot.org/story/25/04/21/0728213/we-may-have-already-hit-peak-booze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 13:30:09](https://news.ycombinator.com/item?id=43751820) - [2,031-HP Hennessey Venom F5 Evolution Claims 0 to 200 MPH in 10 Seconds](https://www.thedrive.com/news/2031-hp-hennessey-venom-f5-evolution-claims-0-to-200-mph-in-10-seconds)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 12:37:19](https://lobste.rs/s/mdshkf/getting_forked_by_microsoft) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 12:16:16](https://news.ycombinator.com/item?id=43751076) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:38:10](https://news.ycombinator.com/item?id=43750765) - [Show HN: Nerdlog – Fast, multi-host TUI log viewer with timeline histogram](https://github.com/dimonomid/nerdlog)
* [2025-04-21, 11:34:00](https://news.slashdot.org/story/25/04/21/031252/should-the-government-have-regulated-the-early-internet---or-our-future-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should the Government Have Regulated the Early Internet - or Our Future AI?](https://news.slashdot.org/story/25/04/21/031252/should-the-government-have-regulated-the-early-internet---or-our-future-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 11:05:44](https://news.ycombinator.com/item?id=43750535) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 09:46:38](https://lobste.rs/s/wup76i/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/wup76i/what_are_you_doing_this_week)
* [2025-04-21, 08:22:00](https://science.slashdot.org/story/25/04/21/066243/space-investor-sees-opportunities-in-defense-related-startups-and-ai-driven-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Space Investor Sees Opportunities in Defense-Related Startups and AI-Driven Systems](https://science.slashdot.org/story/25/04/21/066243/space-investor-sees-opportunities-in-defense-related-startups-and-ai-driven-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 08:02:00](https://news.slashdot.org/story/25/04/21/082240/pope-francis-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pope Francis Has Died](https://news.slashdot.org/story/25/04/21/082240/pope-francis-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 08:00:14](https://news.ycombinator.com/item?id=43749405) - [Pope Francis has died](https://www.reuters.com/world/pope-francis-has-died-vatican-says-video-statement-2025-04-21/)
* [2025-04-21, 07:34:07](https://news.ycombinator.com/item?id=43749271) - [Reworking 30 lines of Linux code could cut power use by up to 30 percent](https://spectrum.ieee.org/data-center-energy-consumption)
* [2025-04-21, 06:59:45](https://lobste.rs/s/ehky9x/option_hide_karma) - [Option to hide karma?](https://lobste.rs/s/ehky9x/option_hide_karma)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 05:15:00](https://it.slashdot.org/story/25/04/21/0512241/return-to-office-policies-are-impacting-neurodivergent-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Return-to-Office Policies Are Impacting Neurodivergent Workers](https://it.slashdot.org/story/25/04/21/0512241/return-to-office-policies-are-impacting-neurodivergent-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 05:02:52](https://lobste.rs/s/szhvas/state_reinforcement_learning_for_llm) - [The State of Reinforcement Learning for LLM Reasoning](https://sebastianraschka.com/blog/2025/the-state-of-reinforcement-learning-for-llm-reasoning.html)
* [2025-04-21, 04:31:35](https://news.ycombinator.com/item?id=43748512) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 04:24:15](https://news.ycombinator.com/item?id=43748486) - [The effect of deactivating Facebook and Instagram on users&apos; emotional state](https://www.nber.org/papers/w33697)
* [2025-04-21, 04:17:24](https://lobste.rs/s/p1a2mz/regex_affordances) - [Regex affordances](https://nedbatchelder.com/blog/202504/regex_affordances.html)
* [2025-04-21, 03:46:59](https://lobste.rs/s/ghq0lb/why_are_big_tech_companies_so_slow) - [Why are big tech companies so slow?](https://www.seangoedecke.com/difficulty-in-big-tech/)
* [2025-04-21, 03:38:42](https://lobste.rs/s/2b1xg9/turing_drawings) - [Turing-Drawings](https://github.com/maximecb/Turing-Drawings)
* [2025-04-21, 02:34:00](https://news.slashdot.org/story/25/04/21/0215254/should-college-application-essays-be-banned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should College Application Essays Be Banned?](https://news.slashdot.org/story/25/04/21/0215254/should-college-application-essays-be-banned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-21, 01:59:03](https://news.ycombinator.com/item?id=43747921) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 00:34:00](https://tech.slashdot.org/story/25/04/21/0026255/can-you-run-the-llama-2-llm-on-dos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can You Run the Llama 2 LLM on DOS?](https://tech.slashdot.org/story/25/04/21/0026255/can-you-run-the-llama-2-llm-on-dos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 00:21:27](https://news.ycombinator.com/item?id=43747560) - [Show HN: Keep your PyTorch model in VRAM by hot swapping code](https://github.com/valine/training-hot-swap/)
* [2025-04-20, 23:45:25](https://lobste.rs/s/pncgon/what_i_d_do_as_college_freshman_2025) - [What I&apos;d do as a College Freshman in 2025](http://muratbuffalo.blogspot.com/2025/04/what-id-do-as-college-freshman.html)
* [2025-04-20, 23:16:00](https://news.slashdot.org/story/25/04/20/2311242/airbus-promised-a-green-hydrogen-aircraft-that-bet-is-now-unraveling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Promised a &apos;Green&apos; Hydrogen Aircraft. That Bet Is Now Unraveling](https://news.slashdot.org/story/25/04/20/2311242/airbus-promised-a-green-hydrogen-aircraft-that-bet-is-now-unraveling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 22:04:22](https://news.ycombinator.com/item?id=43746831) - [TikZJax: Embedding LaTeX Drawings in HTML](https://tikzjax.com/)
* [2025-04-20, 21:55:00](https://science.slashdot.org/story/25/04/20/2153201/astronomers-confirm-first-lone-black-hole-discovery---and-its-in-the-milky-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Confirm First &apos;Lone&apos; Black Hole Discovery - and It&apos;s in the Milky Way](https://science.slashdot.org/story/25/04/20/2153201/astronomers-confirm-first-lone-black-hole-discovery---and-its-in-the-milky-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:55:00](https://news.slashdot.org/story/25/04/20/2053222/conservationists-say-de-extinction-not-the-answer-to-saving-extinct-species?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Conservationists Say &apos;De-Extinction&apos; Not the Answer to Saving Extinct Species](https://news.slashdot.org/story/25/04/20/2053222/conservationists-say-de-extinction-not-the-answer-to-saving-extinct-species?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 20:53:06](https://lobste.rs/s/ucrv1t/better_error_handling) - [Better error handling](https://meowbark.dev/Better-error-handling)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 19:23:00](https://hardware.slashdot.org/story/25/04/20/1921251/famed-ai-researcher-launches-controversial-startup-to-replace-all-human-workers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Famed AI Researcher Launches Controversial Startup to Replace All Human Workers Everywhere](https://hardware.slashdot.org/story/25/04/20/1921251/famed-ai-researcher-launches-controversial-startup-to-replace-all-human-workers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 19:17:58](https://news.ycombinator.com/item?id=43745868) - [Find the Odd Disk](https://colors2.alessandroroussel.com/)
* [2025-04-20, 17:52:50](https://news.ycombinator.com/item?id=43745281) - [How encryption for Cinema Movies works](https://serverless.industries/2024/05/31/digital-cinema.en.html)
* [2025-04-20, 17:34:00](https://news.slashdot.org/story/25/04/20/1649246/the-bees-are-disappearing-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Bees Are Disappearing Again ](https://news.slashdot.org/story/25/04/20/1649246/the-bees-are-disappearing-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 16:34:00](https://news.slashdot.org/story/25/04/20/019256/is-there-a-greener-way-to-produce-iron?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is There a Greener Way to Produce Iron?](https://news.slashdot.org/story/25/04/20/019256/is-there-a-greener-way-to-produce-iron?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 15:57:37](https://news.ycombinator.com/item?id=43744591) - [Things Zig comptime won&apos;t do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)
* [2025-04-20, 15:53:04](https://lobste.rs/s/sbbifz/llms_reduce_development_friction_is_good) - [LLMs Reduce Development Friction. Is That a Good Thing?](https://blog.ollien.com/posts/llm-friction/)
* [2025-04-20, 15:32:50](https://lobste.rs/s/ljttuz/firefly_iii_free_open_source_personal) - [Firefly III - A free and open source personal finance manager](https://firefly-iii.org/)
* [2025-04-20, 14:55:33](https://news.ycombinator.com/item?id=43744173) - [Jagged AGI: o3, Gemini 2.5, and everything after](https://www.oneusefulthing.org/p/on-jagged-agi-o3-gemini-25-and-everything)
* [2025-04-20, 14:50:50](https://lobste.rs/s/ymn744/transactions_are_protocol) - [Transactions are a protocol](https://notes.eatonphil.com/2025-04-20-transactions-are-a-protocol.html)
* [2025-04-20, 13:07:13](https://lobste.rs/s/mgixaf/layered_design_go) - [Layered Design in Go](https://jerf.org/iri/post/2025/go_layered_design/)
* [2025-04-20, 12:22:06](https://news.ycombinator.com/item?id=43743337) - [Gemma 3 QAT Models: Bringing AI to Consumer GPUs](https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 10:50:55](https://lobste.rs/s/rql1su/embedding_tikz_diagrams_html_documents) - [Embedding TikZ diagrams in HTML Documents](https://tikzjax.com/)
* [2025-04-20, 09:52:58](https://lobste.rs/s/x1izrz/on_cruelty_really_teaching_computing) - [On the cruelty of really teaching computing science (1988)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html)
* [2025-04-20, 07:17:37](https://lobste.rs/s/uxnxin/beej_s_guide_git) - [Beej&apos;s Guide to Git](https://beej.us/guide/bggit/html/split/)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 06:07:07](https://lobste.rs/s/khmxui/let_s_give_pro_venix_barely_adequate_pre) - [Let&apos;s give PRO/VENIX a barely adequate, pre-C89 TCP/IP stack (featuring Slirp-CK)](http://oldvcr.blogspot.com/2025/04/lets-give-provenix-barely-adequate-pre.html)
* [2025-04-20, 05:50:42](https://lobste.rs/s/oybzgm/ansible_pure_only_its_pragmatism) - [Ansible: pure (only in its) pragmatism](https://andrejradovic.com/blog/ansible/)
* [2025-04-20, 03:21:53](https://lobste.rs/s/yhtpk0/things_zig_comptime_won_t_do) - [Things Zig comptime Won&apos;t Do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 21:04:41](https://news.ycombinator.com/item?id=43739456) - [Show HN: I built an AI that turns GitHub codebases into easy tutorials](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 07:16:10](https://news.ycombinator.com/item?id=43734794) - [Show HN: I rewrote few of the common core string.h functions](https://github.com/deep-vinci/re-implement-c)
* [2025-04-19, 06:56:59](https://news.ycombinator.com/item?id=43734732) - [Taking Notes with Joplin](https://lwn.net/Articles/1016400/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 19:53:41](https://news.ycombinator.com/item?id=43731335) - [Ref Butts and Slam Dunks: What It&apos;s Like Photographing an NBA Game](https://petapixel.com/2025/04/09/ref-butts-and-slam-dunks-what-its-like-photographing-an-nba-game/)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 13:45:56](https://news.ycombinator.com/item?id=43728056) - [Haskelling My Python](https://unnamed.website/posts/haskelling-my-python/)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
* [2025-04-17, 20:28:05](https://news.ycombinator.com/item?id=43721853) - [X-Ray Defence](https://lichess.org/@/Mcie/blog/x-ray-defence-hidden-resource-sudden-lifeline/HERaZrZg)
* [2025-04-17, 19:42:00](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss) - [Disasters Spur Investment in Flood and Fire Risk Technology](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 14:20:13](https://news.ycombinator.com/item?id=43717251) - [Crows can recognize geometric regularity](https://phys.org/news/2025-04-crows-geometric-regularity.html)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
