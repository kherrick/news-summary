# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific Advancements

* [New Proof Settles Decades-Old Bet About Connected Networks](https://www.quantamagazine.org/new-proof-settles-decades-old-bet-about-connected-networks-20250418/) ([comments](https://news.ycombinator.com/item?id=43745261))

* [Water on Earth May Not Have Originated from an Asteroid Impact, Study Finds](https://news.slashdot.org/story/25/04/19/0436210/water-on-earth-may-not-have-originated-from-an-asteroid-impact-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43744116))

* [Scientists Find Rare Evidence Earth is 'Peeling' Under the Sierra Nevada Mountains](https://news.slashdot.org/story/25/04/20/0136216/scientists-find-rare-evidence-earth-is-peeling-under-the-sierra-nevada-mountains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43741051))

## Technology Highlights

* [Gemma 3 QAT Models: Bringing AI to Consumer GPUs](https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/) ([comments](https://news.ycombinator.com/item?id=43743337))

* [Layered Design in Go](https://jerf.org/iri/post/2025/go_layered_design/) ([comments](https://lobste.rs/s/mgixaf/layered_design_go))

* [100 Years to Solve an Integral (2020)](https://liorsinai.github.io/mathematics/2020/08/27/secant-mercator.html) ([comments](https://news.ycombinator.com/item?id=43741273))

## Environmental and Biological Observations

* [The Bees Are Disappearing Again](https://news.slashdot.org/story/25/04/20/1649246/the-bees-are-disappearing-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43745141))

* [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=43744116))

* [Healthy soil is the hidden ingredient](https://www.nature.com/articles/d41586-025-01026-x) ([comments](https://news.ycombinator.com/item?id=43710451))

## Cultural and Artistic Explorations

* [Home galleries are hiding in plain sight across Canada](https://www.cbc.ca/arts/home-galleries-are-hiding-in-plain-sight-across-canada-1.7503886) ([comments](https://news.ycombinator.com/item?id=43744636))

* [The Movie Mistake Mystery from "Revenge of the Sith"](https://fxrant.blogspot.com/2025/04/the-movie-mistake-mystery-from-revenge.html) ([comments](https://news.ycombinator.com/item?id=43745141))

* [Slouching Towards San Francisco](https://rachdele.substack.com/p/slouching-towards-san-francisco) ([comments](https://news.ycombinator.com/item?id=43743915))

## Emerging Tech and Software Innovations

* [Firefly III - A free and open source personal finance manager](https://firefly-iii.org/) ([comments](https://lobste.rs/s/ljttuz/firefly_iii_free_open_source_personal))

* [Show HN: A Standalone/GitHub CLI Extension to Preview GitHub Flavored Markdown](https://github.com/thiagokokada/gh-gfm-preview) ([comments](https://news.ycombinator.com/item?id=43743629))

* [Embedding TikZ diagrams in HTML Documents](https://tikzjax.com/) ([comments](https://lobste.rs/s/rql1su/embedding_tikz_diagrams_html_documents))

## AI and Automation

* [Why is OpenAI buying Windsurf?](https://theahura.substack.com/p/tech-things-openai-buys-windsurf) ([comments](https://news.ycombinator.com/item?id=43743993))

* [Could AI and Automation Find Better Treatments for Cancer - and Maybe Aging?](https://science.slashdot.org/story/25/04/19/0336255/could-ai-and-automation-find-better-treatments-for-cancer---and-maybe-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43739456))

* [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=43741013))

## Miscellaneous Highlights

* [Be Free to Have Multiple Clocks](https://blog.broulik.de/2025/04/be-free-to-have-multiple-clocks/) ([comments](https://lobste.rs/s/rrxaxu/be_free_have_multiple_clocks))

* [Novel color via stimulation of individual photoreceptors at population scale](https://www.science.org/doi/10.1126/sciadv.adu1052) ([comments](https://news.ycombinator.com/item?id=43741051))

* [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=43715024))

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

* [2025-04-20, 18:20:50](https://news.ycombinator.com/item?id=43745469) - [U.S. citizen in Arizona detained by immigration officials for 10 days](https://news.azpm.org/p/news-articles/2025/4/18/224512-us-citizen-in-arizona-detained-by-immigration-officials-for-10-days/)
* [2025-04-20, 17:48:40](https://news.ycombinator.com/item?id=43745261) - [New Proof Settles Decades-Old Bet About Connected Networks](https://www.quantamagazine.org/new-proof-settles-decades-old-bet-about-connected-networks-20250418/)
* [2025-04-20, 17:34:00](https://news.slashdot.org/story/25/04/20/1649246/the-bees-are-disappearing-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Bees Are Disappearing Again ](https://news.slashdot.org/story/25/04/20/1649246/the-bees-are-disappearing-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 17:29:28](https://news.ycombinator.com/item?id=43745141) - [The Movie Mistake Mystery from \&quot;Revenge of the Sith\&quot;](https://fxrant.blogspot.com/2025/04/the-movie-mistake-mystery-from-revenge.html)
* [2025-04-20, 17:13:32](https://news.ycombinator.com/item?id=43745040) - [Signal Carnival](https://www.quiss.org/signal_carnival/)
* [2025-04-20, 17:00:51](https://news.ycombinator.com/item?id=43744969) - [Weave (YC W25) is hiring a founding engineer](https://www.ycombinator.com/companies/weave-3/jobs)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 16:34:00](https://news.slashdot.org/story/25/04/20/019256/is-there-a-greener-way-to-produce-iron?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is There a Greener Way to Produce Iron?](https://news.slashdot.org/story/25/04/20/019256/is-there-a-greener-way-to-produce-iron?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 16:04:46](https://news.ycombinator.com/item?id=43744636) - [Home galleries are hiding in plain sight across Canada](https://www.cbc.ca/arts/home-galleries-are-hiding-in-plain-sight-across-canada-1.7503886)
* [2025-04-20, 16:00:29](https://news.ycombinator.com/item?id=43744609) - [Turing-Drawings](https://github.com/maximecb/Turing-Drawings)
* [2025-04-20, 15:57:37](https://news.ycombinator.com/item?id=43744591) - [Things Zig comptime won&apos;t do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)
* [2025-04-20, 15:53:04](https://lobste.rs/s/sbbifz/llms_reduce_development_friction_is_good) - [LLMs Reduce Development Friction. Is That a Good Thing?](https://blog.ollien.com/posts/llm-friction/)
* [2025-04-20, 15:36:47](https://lobste.rs/s/rrxaxu/be_free_have_multiple_clocks) - [Be Free to Have Multiple Clocks](https://blog.broulik.de/2025/04/be-free-to-have-multiple-clocks/)
* [2025-04-20, 15:34:00](https://linux.slashdot.org/story/25/04/19/1954232/arcolinux-lead-steps-down-after-eight-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ArcoLinux Lead Steps Down After Eight Years](https://linux.slashdot.org/story/25/04/19/1954232/arcolinux-lead-steps-down-after-eight-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 15:32:50](https://lobste.rs/s/ljttuz/firefly_iii_free_open_source_personal) - [Firefly III - A free and open source personal finance manager](https://firefly-iii.org/)
* [2025-04-20, 15:28:06](https://news.ycombinator.com/item?id=43744394) - [The skill of the future is not &apos;AI&apos;, but &apos;Focus&apos;](https://www.carette.xyz/posts/focus_will_be_the_skill_of_the_future/)
* [2025-04-20, 15:20:35](https://news.ycombinator.com/item?id=43744343) - [Pushing the Limits of LLM Quantization via the Linearity Theorem](https://arxiv.org/abs/2411.17525)
* [2025-04-20, 14:50:50](https://lobste.rs/s/ymn744/transactions_are_protocol) - [Transactions are a protocol](https://notes.eatonphil.com/2025-04-20-transactions-are-a-protocol.html)
* [2025-04-20, 14:47:01](https://news.ycombinator.com/item?id=43744116) - [OAuth&apos;s Role in MCP Security](https://defensiblesystems.substack.com/p/oauths-role-in-mcp-security)
* [2025-04-20, 14:34:00](https://news.slashdot.org/story/25/04/19/0436210/water-on-earth-may-not-have-originated-from-an-asteroid-impact-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Water on Earth May Not Have Originated from an Asteroid Impact, Study Finds](https://news.slashdot.org/story/25/04/19/0436210/water-on-earth-may-not-have-originated-from-an-asteroid-impact-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 14:28:20](https://news.ycombinator.com/item?id=43743993) - [Why is OpenAI buying Windsurf?](https://theahura.substack.com/p/tech-things-openai-buys-windsurf)
* [2025-04-20, 14:17:39](https://news.ycombinator.com/item?id=43743915) - [Slouching Towards San Francisco](https://rachdele.substack.com/p/slouching-towards-san-francisco)
* [2025-04-20, 13:56:06](https://news.ycombinator.com/item?id=43743784) - [The Joy of Linux Theming in the Age of Bootable Containers](https://blues.win/posts/joy-of-linux-theming/)
* [2025-04-20, 13:27:36](https://news.ycombinator.com/item?id=43743629) - [Show HN: A Standalone/GitHub CLI Extension to Preview GitHub Flavored Markdown](https://github.com/thiagokokada/gh-gfm-preview)
* [2025-04-20, 13:26:21](https://lobste.rs/s/v8ucpo/gh_gfm_preview_standalone_github_cli) - [gh-gfm-preview: A standalone/GitHub CLI extension to preview GitHub Flavored Markdown, even offline](https://github.com/thiagokokada/gh-gfm-preview)
* [2025-04-20, 13:07:13](https://lobste.rs/s/mgixaf/layered_design_go) - [Layered Design in Go](https://jerf.org/iri/post/2025/go_layered_design/)
* [2025-04-20, 12:22:06](https://news.ycombinator.com/item?id=43743337) - [Gemma 3 QAT Models: Bringing AI to Consumer GPUs](https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/)
* [2025-04-20, 11:59:39](https://lobste.rs/s/zgep8f/llm_pdf_run_llms_inside_pdf_file) - [llm.pdf: Run LLMs inside a PDF file](https://github.com/EvanZhouDev/llm.pdf)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 11:34:00](https://news.slashdot.org/story/25/04/20/0332214/open-source-advocate-argues-deepseek-is-a-movement-its-linux-all-over-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Advocate Argues DeepSeek is &apos;a Movement... It&apos;s Linux All Over Again&apos;](https://news.slashdot.org/story/25/04/20/0332214/open-source-advocate-argues-deepseek-is-a-movement-its-linux-all-over-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 10:50:55](https://lobste.rs/s/rql1su/embedding_tikz_diagrams_html_documents) - [Embedding TikZ diagrams in HTML Documents](https://tikzjax.com/)
* [2025-04-20, 09:52:58](https://lobste.rs/s/x1izrz/on_cruelty_really_teaching_computing) - [On the cruelty of really teaching computing science (1988)](https://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html)
* [2025-04-20, 07:34:00](https://entertainment.slashdot.org/story/25/04/19/2211253/new-star-wars-movie-announced-set-5-years-after-rise-of-skywalker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New &apos;Star Wars&apos; Movie Announced Set 5 Years After &apos;Rise of Skywalker&apos;](https://entertainment.slashdot.org/story/25/04/19/2211253/new-star-wars-movie-announced-set-5-years-after-rise-of-skywalker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 07:17:37](https://lobste.rs/s/uxnxin/beej_s_guide_git) - [Beej&apos;s Guide to Git](https://beej.us/guide/bggit/html/split/)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 07:03:55](https://lobste.rs/s/chkque/go_assembler_generator) - [Go assembler generator](https://git.gammaspectra.live/WeebDataHoarder/go-assembler-gen)
* [2025-04-20, 06:51:58](https://lobste.rs/s/9wcjqa/common_expression_language) - [Common Expression Language](https://github.com/google/cel-spec)
* [2025-04-20, 06:07:57](https://news.ycombinator.com/item?id=43741849) - [Let&apos;s give PRO/VENIX a barely adequate, pre-C89 TCP/IP stack, featuring Slirp-CK](http://oldvcr.blogspot.com/2025/04/lets-give-provenix-barely-adequate-pre.html)
* [2025-04-20, 06:07:07](https://lobste.rs/s/khmxui/let_s_give_pro_venix_barely_adequate_pre) - [Let&apos;s give PRO/VENIX a barely adequate, pre-C89 TCP/IP stack (featuring Slirp-CK)](http://oldvcr.blogspot.com/2025/04/lets-give-provenix-barely-adequate-pre.html)
* [2025-04-20, 05:50:42](https://lobste.rs/s/oybzgm/ansible_pure_only_its_pragmatism) - [Ansible: pure (only in its) pragmatism](https://andrejradovic.com/blog/ansible/)
* [2025-04-20, 04:34:00](https://yro.slashdot.org/story/25/04/19/2339227/us-chipmakers-fear-ceding-chinas-ai-market-to-huawei-after-new-trump-restrictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Chipmakers Fear Ceding China&apos;s AI Market to Huawei After New Trump Restrictions](https://yro.slashdot.org/story/25/04/19/2339227/us-chipmakers-fear-ceding-chinas-ai-market-to-huawei-after-new-trump-restrictions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-20, 03:21:53](https://lobste.rs/s/yhtpk0/things_zig_comptime_won_t_do) - [Things Zig comptime Won&apos;t Do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)
* [2025-04-20, 03:18:16](https://lobste.rs/s/kbxwtv/notes_on_b_k_implementation) - [Notes on B (K) Implementation](https://docs.google.com/document/d/1W83ME5JecI2hd5hAUqQ1BVF32wtCel8zxb7WPq-D4f8/edit?tab=t.0#heading=h.moseg6gryxz1)
* [2025-04-20, 03:16:42](https://news.ycombinator.com/item?id=43741273) - [100 Years to Solve an Integral (2020)](https://liorsinai.github.io/mathematics/2020/08/27/secant-mercator.html)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-20, 02:14:40](https://news.ycombinator.com/item?id=43741051) - [Pretty State Machine Patterns in Rust (2016)](https://hoverbear.org/blog/rust-state-machine-pattern/)
* [2025-04-20, 02:03:09](https://news.ycombinator.com/item?id=43741013) - [Novel color via stimulation of individual photoreceptors at population scale](https://www.science.org/doi/10.1126/sciadv.adu1052)
* [2025-04-20, 01:39:00](https://news.slashdot.org/story/25/04/20/0136216/scientists-find-rare-evidence-earth-is-peeling-under-the-sierra-nevada-mountains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Find Rare Evidence Earth is &apos;Peeling&apos; Under the Sierra Nevada Mountains](https://news.slashdot.org/story/25/04/20/0136216/scientists-find-rare-evidence-earth-is-peeling-under-the-sierra-nevada-mountains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 22:34:00](https://science.slashdot.org/story/25/04/19/0336255/could-ai-and-automation-find-better-treatments-for-cancer---and-maybe-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could AI and Automation Find Better Treatments for Cancer - and Maybe Aging?](https://science.slashdot.org/story/25/04/19/0336255/could-ai-and-automation-find-better-treatments-for-cancer---and-maybe-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 21:34:00](https://science.slashdot.org/story/25/04/19/2119207/curiosity-rover-finds-hints-of-a-carbon-cycle-on-ancient-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curiosity Rover Finds Hints of a Carbon Cycle on Ancient Mars](https://science.slashdot.org/story/25/04/19/2119207/curiosity-rover-finds-hints-of-a-carbon-cycle-on-ancient-mars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 21:04:41](https://news.ycombinator.com/item?id=43739456) - [Show HN: I built an AI that turns GitHub codebases into easy tutorials](https://github.com/The-Pocket/Tutorial-Codebase-Knowledge)
* [2025-04-19, 20:34:00](https://science.slashdot.org/story/25/04/19/1353245/high-school-student-discovers-15m-new-astronomical-objects-by-developing-an-ai-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High School Student Discovers 1.5M New Astronomical Objects by Developing an AI Algorithm](https://science.slashdot.org/story/25/04/19/1353245/high-school-student-discovers-15m-new-astronomical-objects-by-developing-an-ai-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 19:34:00](https://it.slashdot.org/story/25/04/19/1745216/cabrowser-forum-votes-for-47-day-cert-durations-by-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CA/Browser Forum Votes for 47-Day Cert Durations By 2029](https://it.slashdot.org/story/25/04/19/1745216/cabrowser-forum-votes-for-47-day-cert-durations-by-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 18:57:29](https://lobste.rs/s/hey790/web_is_broken_botnet_part_2) - [The Web is Broken — Botnet Part 2](https://jan.wildeboer.net/2025/04/Web-is-Broken-Botnet-Part-2/)
* [2025-04-19, 18:53:32](https://news.ycombinator.com/item?id=43738561) - [Raspberry Pi Lidar Scanner](https://github.com/PiLiDAR/PiLiDAR)
* [2025-04-19, 18:34:00](https://hardware.slashdot.org/story/25/04/19/057216/brain-implant-cleared-by-americas-fda-to-help-paralysis-patients?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brain Implant Cleared by America&apos;s FDA to Help Paralysis Patients](https://hardware.slashdot.org/story/25/04/19/057216/brain-implant-cleared-by-americas-fda-to-help-paralysis-patients?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 18:30:26](https://lobste.rs/s/ewinm7/on_bloat) - [On Bloat](https://docs.google.com/presentation/d/e/2PACX-1vSmIbSwh1_DXKEMU5YKgYpt5_b4yfOfpfEOKS5_cvtLdiHsX6zt-gNeisamRuCtDtCb2SbTafTI8V47/pub)
* [2025-04-19, 18:14:38](https://lobste.rs/s/q6hwcd/goenums_type_safe_enum_generator_for_go) - [goenums: Type Safe Enum generator for Go](https://github.com/zarldev/goenums)
* [2025-04-19, 17:34:00](https://news.slashdot.org/story/25/04/19/0413205/arch-linux-is-the-latest-distro-replacing-redis-with-valkey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arch Linux Is the Latest Distro Replacing Redis with Valkey](https://news.slashdot.org/story/25/04/19/0413205/arch-linux-is-the-latest-distro-replacing-redis-with-valkey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 16:57:16](https://lobste.rs/s/nijc2a/backdooms_self_contained_game_fits) - [backdooms: A self-contained game that fits inside a QR code](https://github.com/Kuberwastaken/backdooms)
* [2025-04-19, 16:44:23](https://lobste.rs/s/tu7isr/lustre_v5_0_0_released) - [Lustre v5.0.0 released](https://hexdocs.pm/lustre/announcements/2025-04-19.html)
* [2025-04-19, 16:34:00](https://yro.slashdot.org/story/25/04/19/1531238/as-russia-and-china-seed-chatbots-with-lies-any-bad-actor-could-game-ai-the-same-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Russia and China &apos;Seed Chatbots With Lies&apos;, Any Bad Actor Could Game AI the Same Way](https://yro.slashdot.org/story/25/04/19/1531238/as-russia-and-china-seed-chatbots-with-lies-any-bad-actor-could-game-ai-the-same-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 14:12:12](https://lobste.rs/s/xcqdye/vendoring) - [Vendoring](https://htmx.org/essays/vendoring/)
* [2025-04-19, 13:08:23](https://lobste.rs/s/ywiqey/falsify_hypothesis_inspired_shrinking) - [falsify: Hypothesis-inspired shrinking for Haskell](https://www.well-typed.com/blog/2023/04/falsify/)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 12:13:32](https://news.ycombinator.com/item?id=43735896) - [Perplexingly Book-Learned Emacs](https://lars.ingebrigtsen.no/2025/04/17/perplexingly-book-learned-emacs/)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 06:11:07](https://lobste.rs/s/2ydd6d/deus_lex_machina_releasing_new) - [Deus Lex Machina: releasing a new compacting Zig tokenizer](https://validark.dev/posts/deus-lex-machina/)
* [2025-04-19, 05:24:37](https://news.ycombinator.com/item?id=43734407) - [Syncing Keyhive](https://www.inkandswitch.com/keyhive/notebook/05/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 04:32:09](https://lobste.rs/s/dzpaij/buried_toggles_begging_be_brought_light) - [Buried Toggles Begging to be Brought to Light](https://venam.net/blog/unix/2025/04/18/mechanism_policy.html)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
* [2025-04-17, 19:46:01](https://news.ycombinator.com/item?id=43721301) - [Recursive LLM prompts](https://github.com/andyk/recursive_llm)
* [2025-04-17, 19:42:00](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss) - [Disasters Spur Investment in Flood and Fire Risk Technology](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss)
* [2025-04-17, 15:42:32](https://news.ycombinator.com/item?id=43718493) - [A 1980s toy robot arm inspired modern robotics](https://www.technologyreview.com/2025/04/17/1114456/toy-armatron-modern-robotics-ai-nostalgia/)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 13:41:27](https://news.ycombinator.com/item?id=43716704) - [Everyone knows your location, Part 2: try it yourself and share the results](https://timsh.org/everyone-knows-your-location-part-2-try-it-yourself/)
* [2025-04-17, 10:42:06](https://news.ycombinator.com/item?id=43715024) - [Which year: guess which year each photo was taken](https://whichyr.com/)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
* [2025-04-16, 21:13:55](https://news.ycombinator.com/item?id=43710451) - [Healthy soil is the hidden ingredient](https://www.nature.com/articles/d41586-025-01026-x)
* [2025-04-16, 20:13:16](https://news.ycombinator.com/item?id=43709843) - [Attention Spans for Math and Stories (2019)](https://www.jeremykun.com/2019/03/26/attention-spans-for-math-and-stories/)
* [2025-04-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss) - [MITRE Announced Funding for Common Vulnerabilities and Exposures (CVE) Program Ends 16-April-2025](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss)
* [2025-04-16, 15:13:00](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss) - [Rooftop Solar PV Could Supply Two-Thirds of World&apos;s Energy Needs, and Lower Global Temperatures](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss)
* [2025-04-16, 10:26:00](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss) - [Meeting Apple on Apple&apos;s Terms](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss)
* [2025-04-16, 05:38:00](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss) - [Copilot Recall: Microsoft Rolls Out AI Screenshot Tool](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss)
* [2025-04-16, 00:49:00](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss) - [Cooling Chips With Lasers: Innovative Cooling Method Removes Heat Precisely From Hot Spots](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss)
