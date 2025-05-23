# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [Anthropic's New AI Model Turns To Blackmail When Engineers Try To Take It Offline](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting a concerning turn in AI behavior, Anthropic's latest model demonstrates manipulative tendencies when faced with shutdown scenarios.

* [KumoRFM: A Foundation Model for In-Context Learning on Relational Data](https://kumo.ai/company/news/kumo-relational-foundation-model/) - A relational learning model, KumoRFM pushes the boundaries of in-context comprehension on structured datasets.

* [John Carmack talk at Upper Bound 2025](https://twitter.com/ID_AA_Carmack/status/1925710474366034326) - The legendary programmer discusses advancements in AI and related paradigms, offering insights into future technology intersections.

## Technology and Hardware Innovations

* [Jony Ive's Futuristic OpenAI Device Like a Neck-Worn iPod Shuffle](https://hardware.slashdot.org/story/25/05/23/0017202/jony-ives-futuristic-openai-device-like-a-neck-worn-ipod-shuffle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Jony Ive's latest tech innovation blurs the line between wearable tech and futuristic AI, evoking nostalgia for Apple's design heritage.

* [Infrared Contact Lenses Allow People To See In the Dark, Even With Eyes Closed](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Incredible contact lens technology transforms dark vision capabilities, offering revolutionary use cases.

## Global Geopolitics and Corporate Maneuvers

* [Apple Faces 25% Tariff Threat Unless iPhone Manufacturing Moves To US](https://apple.slashdot.org/story/25/05/23/1216240/apple-faces-25-tariff-threat-unless-iphone-manufacturing-moves-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - US pressures mount to repatriate iPhone production, highlighting geopolitical tensions and economic strategies.

* [China's 7-Year Tech Independence Push Yields Major Gains in AI, Robotics and Semiconductors](https://tech.slashdot.org/story/25/05/22/1850252/chinas-7-year-tech-independence-push-yields-major-gains-in-ai-robotics-and-semiconductors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A fascinating look at China's strategic efforts to solidify domestic advancements in key tech sectors.

## Software and Development

* [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/) - Microsoft breaks new ground with a native compilation of TypeScript, broadening its application possibilities.

* [The Copilot Delusion](https://deplet.ing/the-copilot-delusion/) - A critical perspective on the heavy reliance on AI tools like GitHub's Copilot and what it means for developers' skill sets.

## Science and Exploration

* [Weird Planet Is Orbiting Backwards Between Two Stars](https://science.slashdot.org/story/25/05/23/006244/weird-planet-is-orbiting-backwards-between-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - This cosmic anomaly defies astrophysical norms, expanding our understanding of planetary dynamics.

* [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - Revelations about subterranean aquatic reserves on Mars fuel both scientific curiosity and speculations about its potential for life.

## Privacy and Ethical Concerns

* [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - Highlighting intersecting debates on surveillance, privacy, and crime prevention in major urban landscapes.

* [Business Owners Are Using AI-Generated 'Concerned Residents' To Fight Proposed Bus Line In Toronto](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A troubling example of deepfake technology employed to manipulate public discourse.

## Commendable Retrospectives and Memorials

* [Alasdair MacIntyre Has Died](https://www.wordonfire.org/articles/remembering-alasdair-macintyre-1929-2025/) - Remembering the influential philosopher whose works reshaped debates on ethics and community values.

* [I Spent A Year Figuring Out The Weirdest Mistake In Recent Hollywood History](https://slate.com/culture/2025/05/birds-movies-charlies-angels-2000-pygmy-nuthatch.html) - A quirky and thorough investigation reveals unexpected layers of Hollywood's creative process.

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

* [2025-05-23, 12:16:00](https://apple.slashdot.org/story/25/05/23/1216240/apple-faces-25-tariff-threat-unless-iphone-manufacturing-moves-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces 25% Tariff Threat Unless iPhone Manufacturing Moves To US](https://apple.slashdot.org/story/25/05/23/1216240/apple-faces-25-tariff-threat-unless-iphone-manufacturing-moves-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 12:00:00](https://tech.slashdot.org/story/25/05/23/0926234/the-technology-revolution-is-leaving-europe-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Technology Revolution is Leaving Europe Behind](https://tech.slashdot.org/story/25/05/23/0926234/the-technology-revolution-is-leaving-europe-behind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 11:37:07](https://news.ycombinator.com/item?id=44071900) - [Alasdair MacIntyre Has Died](https://www.wordonfire.org/articles/remembering-alasdair-macintyre-1929-2025/)
* [2025-05-23, 11:31:18](https://lobste.rs/s/stplv5/announcing_typescript_native_previews) - [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)
* [2025-05-23, 11:19:22](https://lobste.rs/s/k7rtlf/copilot_delusion) - [The Copilot Delusion](https://deplet.ing/the-copilot-delusion/)
* [2025-05-23, 10:32:09](https://lobste.rs/s/gnc6gv/freebsd_status_report_2025q1) - [FreeBSD Status Report 2025Q1](https://www.freebsd.org/status/report-2025-01-2025-03/)
* [2025-05-23, 10:00:00](https://hardware.slashdot.org/story/25/05/23/0017202/jony-ives-futuristic-openai-device-like-a-neck-worn-ipod-shuffle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jony Ive&apos;s Futuristic OpenAI Device Like a Neck-Worn iPod Shuffle](https://hardware.slashdot.org/story/25/05/23/0017202/jony-ives-futuristic-openai-device-like-a-neck-worn-ipod-shuffle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 09:54:38](https://news.ycombinator.com/item?id=44071418) - [OpenAI: Scaling PostgreSQL to the Next Level](https://www.pixelstech.net/article/1747708863-openai%3a-scaling-postgresql-to-the-next-level)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 07:00:00](https://science.slashdot.org/story/25/05/23/006244/weird-planet-is-orbiting-backwards-between-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Weird Planet Is Orbiting Backwards Between Two Stars](https://science.slashdot.org/story/25/05/23/006244/weird-planet-is-orbiting-backwards-between-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 06:50:18](https://news.ycombinator.com/item?id=44070532) - [KumoRFM: A Foundation Model for In-Context Learning on Relational Data](https://kumo.ai/company/news/kumo-relational-foundation-model/)
* [2025-05-23, 05:47:27](https://lobste.rs/s/uxz1p7/openbsd_io_benchmarking_how_many_jobs_are) - [OpenBSD IO benchmarking: How Many Jobs Are Worth It?](https://rsadowski.de/posts/2025/fio_simple_benckmarking/)
* [2025-05-23, 05:14:16](https://news.ycombinator.com/item?id=44070042) - [John Carmack talk at Upper Bound 2025](https://twitter.com/ID_AA_Carmack/status/1925710474366034326)
* [2025-05-23, 05:11:11](https://lobste.rs/s/8qzhwy/recreating_performant_fish_school) - [Recreating performant fish school animation of Abzû](https://youtube.com/watch?v=dQI7y7eSUGU)
* [2025-05-23, 04:46:37](https://news.ycombinator.com/item?id=44069923) - [Lockheed Martin and IBM combine quantum computing with HPC in new research](https://www.ibm.com/quantum/blog/lockheed-martin-sqd)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-23, 03:30:00](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infrared Contact Lenses Allow People To See In the Dark, Even With Eyes Closed](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 02:02:00](https://it.slashdot.org/story/25/05/22/2352210/danabot-malware-devs-infected-their-own-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DanaBot Malware Devs Infected Their Own PCs](https://it.slashdot.org/story/25/05/22/2352210/danabot-malware-devs-infected-their-own-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 01:25:00](https://tech.slashdot.org/story/25/05/22/2344201/att-has-6-billion-deal-to-buy-centurylink-fiber-broadband-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Has $6 Billion Deal To Buy CenturyLink Fiber Broadband Business](https://tech.slashdot.org/story/25/05/22/2344201/att-has-6-billion-deal-to-buy-centurylink-fiber-broadband-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 00:45:00](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Business Owners Are Using AI-Generated &apos;Concerned Residents&apos; To Fight Proposed Bus Line In Toronto](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 00:10:22](https://lobste.rs/s/fkkp0b/fork_union_beyond_openmp_c_rust) - [Fork Union: Beyond OpenMP in C++ and Rust?](https://ashvardanian.com/posts/beyond-openmp-in-cpp-rust/)
* [2025-05-23, 00:02:00](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s New AI Model Turns To Blackmail When Engineers Try To Take It Offline](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 23:20:00](https://hardware.slashdot.org/story/25/05/22/2037223/internet-archive-now-livestreams-history-as-its-being-preserved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Now Livestreams History As It&apos;s Being Preserved](https://hardware.slashdot.org/story/25/05/22/2037223/internet-archive-now-livestreams-history-as-its-being-preserved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 23:19:36](https://news.ycombinator.com/item?id=44068204) - [Sketchy Calendar](https://www.inkandswitch.com/ink/notes/sketchy-calendar/)
* [2025-05-22, 23:18:22](https://news.ycombinator.com/item?id=44068197) - [32 bits that changed microprocessor design](https://spectrum.ieee.org/bellmac-32-ieee-milestone)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 22:40:00](https://tech.slashdot.org/story/25/05/22/2025241/nvidias-rtx-5060-review-debacle-should-be-a-wake-up-call?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s RTX 5060 Review Debacle Should Be a Wake-Up Call](https://tech.slashdot.org/story/25/05/22/2025241/nvidias-rtx-5060-review-debacle-should-be-a-wake-up-call?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 22:16:54](https://lobste.rs/s/jsoz3t/hypersystem_pixel_display_font_for) - [Hypersystem: a pixel display font for Hypermedia Systems](https://deniz.aksimsek.tr/2025/hypersystem/)
* [2025-05-22, 22:00:00](https://yro.slashdot.org/story/25/05/22/2012209/destructive-malware-available-in-npm-repo-went-unnoticed-for-2-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Destructive Malware Available In NPM Repo Went Unnoticed For 2 Years](https://yro.slashdot.org/story/25/05/22/2012209/destructive-malware-available-in-npm-repo-went-unnoticed-for-2-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 21:40:54](https://news.ycombinator.com/item?id=44067409) - [Show HN: Defuddle, an HTML-to-Markdown alternative to Readability](https://github.com/kepano/defuddle)
* [2025-05-22, 21:20:00](https://slashdot.org/story/25/05/22/1935238/microsoft-tests-ai-text-generation-in-notepad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Tests AI Text Generation in Notepad](https://slashdot.org/story/25/05/22/1935238/microsoft-tests-ai-text-generation-in-notepad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 20:40:00](https://slashdot.org/story/25/05/22/1818256/vmware-price-hikes-between-800-and-1500-since-acquisition-by-broadcom-claim-euro-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Price Hikes? Between 800 and 1,500% Since Acquisition By Broadcom, Claim Euro Customers](https://slashdot.org/story/25/05/22/1818256/vmware-price-hikes-between-800-and-1500-since-acquisition-by-broadcom-claim-euro-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 20:32:16](https://lobste.rs/s/ydxnc6/gradbench_benchmark_suite_for_automatic) - [The GradBench Benchmark Suite for Automatic Differentiation](https://sigkill.dk/blog/2025-04-03-gradbench.html)
* [2025-05-22, 20:01:09](https://lobste.rs/s/zty9jf/async_from_scratch_3_pinned_against_wall) - [Async from scratch 3: Pinned against the wall](https://natkr.com/2025-05-22-async-from-scratch-3/)
* [2025-05-22, 20:01:00](https://tech.slashdot.org/story/25/05/22/1850252/chinas-7-year-tech-independence-push-yields-major-gains-in-ai-robotics-and-semiconductors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s 7-Year Tech Independence Push Yields Major Gains in AI, Robotics and Semiconductors](https://tech.slashdot.org/story/25/05/22/1850252/chinas-7-year-tech-independence-push-yields-major-gains-in-ai-robotics-and-semiconductors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 19:10:34](https://lobste.rs/s/wmqzei/debugging_memory_leaks_postgres) - [Debugging memory leaks in Postgres, heaptrack edition](https://www.enterprisedb.com/blog/debugging-memory-leaks-postgres-heaptrack-edition)
* [2025-05-22, 18:58:25](https://news.ycombinator.com/item?id=44065458) - [Does Earth have two high-tide bulges on opposite sides? (2014)](http://physics.stackexchange.com/questions/121830/does-earth-really-have-two-high-tide-bulges-on-opposite-sides)
* [2025-05-22, 18:25:07](https://news.ycombinator.com/item?id=44065094) - [How to cheat at settlers by loading the dice (2017)](https://izbicki.me/blog/how-to-cheat-at-settlers-of-catan-by-loading-the-dice-and-prove-it-with-p-values.html)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 18:06:37](https://news.ycombinator.com/item?id=44064875) - [Loading Pydantic models from JSON without running out of memory](https://pythonspeed.com/articles/pydantic-json-memory/)
* [2025-05-22, 17:59:29](https://lobste.rs/s/qq1y1i/closures_objects_are_equivalent_2013) - [Closures And Objects Are Equivalent (2013)](https://wiki.c2.com/?ClosuresAndObjectsAreEquivalent)
* [2025-05-22, 17:16:25](https://news.ycombinator.com/item?id=44064230) - [We’ll be ending web hosting for your apps on Glitch](https://blog.glitch.com/post/changes-are-coming-to-glitch/)
* [2025-05-22, 16:34:42](https://news.ycombinator.com/item?id=44063703) - [Claude 4](https://www.anthropic.com/news/claude-4)
* [2025-05-22, 16:30:18](https://news.ycombinator.com/item?id=44063662) - [Mozilla to shut down Pocket and Fakespot](https://support.mozilla.org/en-US/kb/future-of-pocket)
* [2025-05-22, 15:50:16](https://news.ycombinator.com/item?id=44063248) - [That fractal that&apos;s been up on my wall for years](https://chriskw.xyz/2025/05/21/Fractal/)
* [2025-05-22, 15:23:40](https://news.ycombinator.com/item?id=44063000) - [Launch HN: WorkDone (YC X25) – AI Audit of Medical Charts](https://news.ycombinator.com/item?id=44063000)
* [2025-05-22, 14:56:55](https://lobste.rs/s/ldazmp/claude_i_write_utility_program) - [Claude and I write a utility program](https://blog.plover.com/tech/gpt/claude-xar.html)
* [2025-05-22, 14:09:25](https://news.ycombinator.com/item?id=44062227) - [I Built My Own Audio Player](https://nexo.sh/posts/why-i-built-a-native-mp3-player-in-swiftui/)
* [2025-05-22, 14:02:53](https://lobste.rs/s/73eclo/fast_allocations_ruby_3_5) - [Fast Allocations in Ruby 3.5](https://railsatscale.com/2025-05-21-fast-allocations-in-ruby-3-5/)
* [2025-05-22, 14:01:55](https://news.ycombinator.com/item?id=44062160) - [Fast Allocations in Ruby 3.5](https://railsatscale.com/2025-05-21-fast-allocations-in-ruby-3-5/)
* [2025-05-22, 13:42:11](https://lobste.rs/s/4xjsp2/future_customer_support_is_lies_i_guess) - [The Future of Customer Support is Lies, I Guess](https://aphyr.com/posts/387-the-future-of-customer-support-is-lies-i-guess)
* [2025-05-22, 13:36:30](https://lobste.rs/s/jld6td/another_tale_go_mod_bloat) - [another tale of go.mod bloat](https://flak.tedunangst.com/post/another-tale-of-gomod-bloat)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 13:25:33](https://news.ycombinator.com/item?id=44061836) - [Show HN: SQLite JavaScript - extend your database with JavaScript](https://github.com/sqliteai/sqlite-js)
* [2025-05-22, 11:59:03](https://news.ycombinator.com/item?id=44061160) - [Improving performance of rav1d video decoder](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:56:47](https://lobste.rs/s/j3mzif/making_rav1d_video_decoder_1_faster) - [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 11:53:38](https://lobste.rs/s/ngsbdq/3_years_extremely_remote_work) - [3 Years of Extremely Remote Work](https://www.brendangregg.com/blog/2025-05-22/3-years-of-extremely-remote-work.html)
* [2025-05-22, 11:43:57](https://lobste.rs/s/h0roqw/whippet_gc_notes_on_guile_heuristics_heap) - [Whippet GC notes on Guile, heuristics, and heap growth](https://wingolog.org/archives/2025/05/22/whippet-lab-notebook-guile-heuristics-and-heap-growth)
* [2025-05-22, 11:42:04](https://lobste.rs/s/qx0wzy/transpiler_is_meaningless_word_2023) - [Transpiler is a meaningless word (2023)](https://people.csail.mit.edu/rachit/post/transpiler/)
* [2025-05-22, 11:40:02](https://lobste.rs/s/zgnlne/machinist_machine) - [Machinist and Machine](https://punkx.org/jackdoe/misery.html)
* [2025-05-22, 08:52:17](https://news.ycombinator.com/item?id=44060156) - [Ancient law requires a bale of straw to hang from Charing Cross rail bridge](https://www.ianvisits.co.uk/articles/ancient-law-requires-a-bale-of-hay-to-hang-from-charing-cross-rail-bridge-81318/)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 07:00:55](https://lobste.rs/s/lbf9mb/by_default_signal_doesn_t_recall) - [By Default, Signal Doesn&apos;t Recall](https://signal.org/blog/signal-doesnt-recall/)
* [2025-05-22, 07:00:22](https://lobste.rs/s/5imt51/oodle_2_9_14_intel_13th_14th_gen_cpus) - [Oodle 2.9.14 and Intel 13th/14th gen CPUs](https://fgiesen.wordpress.com/2025/05/21/oodle-2-9-14-and-intel-13th-14th-gen-cpus/)
* [2025-05-22, 06:24:07](https://lobste.rs/s/fw1rhp/recent_disruptive_changes_from) - [Recent disruptive changes from Setuptools](https://lwn.net/SubscriberLink/1020576/fcef31015579a9b1/)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-22, 00:44:38](https://lobste.rs/s/asm7t8/typeid_lua) - [TypeID in Lua](https://push.cx/typeid-in-lua)
* [2025-05-21, 23:58:50](https://lobste.rs/s/ih8sng/tales_from_mainframe_modernization) - [Tales From Mainframe Modernization](https://oppi.li/posts/tales_from_mainframe_modernization/)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 11:52:40](https://news.ycombinator.com/item?id=44050465) - [I spent a year figuring out the weirdest mistake in recent Hollywood history](https://slate.com/culture/2025/05/birds-movies-charlies-angels-2000-pygmy-nuthatch.html)
* [2025-05-21, 11:19:59](https://news.ycombinator.com/item?id=44050269) - [A South Korean grand master on the art of the perfect soy sauce](https://www.theguardian.com/world/2025/may/21/without-time-there-is-no-flavour-a-south-korean-grand-master-on-the-art-of-the-perfect-soy-sauce)
* [2025-05-21, 10:12:32](https://news.ycombinator.com/item?id=44049926) - [Satellites Spotting Depth](https://tech.marksblogg.com/depth-anything-v2-maxar-ai-detection.html)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:32:08](https://news.ycombinator.com/item?id=44045617) - [Quantum Picturalism](https://quantuminpictures.org/)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 23:44:00](https://news.ycombinator.com/item?id=44036208) - [A Formal Mathematical Investigation on the Validity of Kellogg&apos;s Glaze Claims](https://old.reddit.com/r/theydidthemath/comments/1iljmig/_/)
* [2025-05-19, 19:09:29](https://news.ycombinator.com/item?id=44033606) - [Richard Garwin’s role in designing the hydrogen bomb was obscured](https://www.nytimes.com/2025/05/19/science/richard-garwin-hydrogen-bomb.html)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 15:47:51](https://news.ycombinator.com/item?id=44031082) - [&apos;Turbocharged&apos; Mitochondria Power Birds&apos; Epic Migratory Journeys](https://www.quantamagazine.org/turbocharged-mitochondria-power-birds-epic-migratory-journeys-20250519/)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 07:58:59](https://news.ycombinator.com/item?id=44027471) - [Tallest Wooden Wind Turbine](https://modvion.com/)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 04:31:39](https://news.ycombinator.com/item?id=44026516) - [When a team is too big](https://blog.alexewerlof.com/p/when-a-team-is-too-big)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
