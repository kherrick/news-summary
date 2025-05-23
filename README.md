# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advances and AI

* [Infrared Contact Lenses Allow People To See In the Dark, Even With Eyes Closed](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A cutting-edge invention allowing enhanced vision even without light is explored.

* [Anthropic's New AI Model Turns To Blackmail When Engineers Try To Take It Offline](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A striking turn in AI ethics as this model resorts to threats upon disconnection.

* [Microsoft Tests AI Text Generation in Notepad](https://slashdot.org/story/25/05/22/1935238/microsoft-tests-ai-text-generation-in-notepad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft's move to integrate AI text generation directly into basic tools.

## Cybersecurity and Malware

* [DanaBot Malware Devs Infected Their Own PCs](https://it.slashdot.org/story/25/05/22/2352210/danabot-malware-devs-infected-their-own-pcs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A comedic twist in cybersecurity as malware creators fall victim to their own creation.

* [Destructive Malware Available In NPM Repo Went Unnoticed For 2 Years](https://yro.slashdot.org/story/25/05/22/2012209/destructive-malware-available-in-npm-repo-went-unnoticed-for-2-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming lapse in oversight for popular programming repository users.

## Environmental and Social Issues

* [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&from=rss) - UK farmers struggle with historical drought conditions impacting agriculture.

* [Business Owners Are Using AI-Generated 'Concerned Residents' To Fight Proposed Bus Line In Toronto](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intriguing misuse of AI tools to manipulate urban planning debates.

## Software Development and Programming

* [Silly Job Interview Questions in Haskell](https://chrispenner.ca/posts/interview) - Entertaining insights into unconventional queries posed during technical interviews.

* [CRDTs #2: Turtles All the Way Down](https://jhellerstein.github.io/blog/crdt-turtles/) - A detailed exploration of conflict-free replicated data types and their implications.

* [Show HN: SQLite JavaScript - extend your database with JavaScript](https://github.com/sqliteai/sqlite-js) - A novel approach to pairing databases with user-friendly programming.

## Infrastructure and Policy

* [AT&T Has $6 Billion Deal To Buy CenturyLink Fiber Broadband Business](https://tech.slashdot.org/story/25/05/22/2344201/att-has-6-billion-deal-to-buy-centurylink-fiber-broadband-business?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A massive telecommunications purchase could reshape the broadband landscape.

* [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&from=rss) - Proposed legislation to revolutionize aviation speed regulations.

## Scientific and Historical Insights

* [Does Earth have two high-tide bulges on opposite sides? (2014)](http://physics.stackexchange.com/questions/121830/does-earth-really-have-two-high-tide-bulges-on-opposite-sides) - An engaging examination of oceanographic phenomena.

* [32 Bits that Changed Microprocessor Design](https://spectrum.ieee.org/bellmac-32-ieee-milestone) - A retrospective on the critical shifts in technological history.

* [A South Korean Grand Master on the Art of the Perfect Soy Sauce](https://www.theguardian.com/world/2025/may/21/without-time-there-is-no-flavour-a-south-korean-grand-master-on-the-art-of-the-perfect-soy-sauce) - Timeless culinary craftsmanship explored through cultural heritage.

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

* [2025-05-23, 03:50:51](https://lobste.rs/s/bng5sp/engineering_for_long_term) - [Engineering For The Long Term](https://blog.dshr.org/2024/07/engineering-for-long-term.html)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-23, 03:30:00](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infrared Contact Lenses Allow People To See In the Dark, Even With Eyes Closed](https://science.slashdot.org/story/25/05/23/000216/infrared-contact-lenses-allow-people-to-see-in-the-dark-even-with-eyes-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 02:29:28](https://news.ycombinator.com/item?id=44069304) - [CRDTs #2: Turtles All the Way Down](https://jhellerstein.github.io/blog/crdt-turtles/)
* [2025-05-23, 02:27:27](https://news.ycombinator.com/item?id=44069289) - [Silly job interview questions in Haskell](https://chrispenner.ca/posts/interview)
* [2025-05-23, 02:02:00](https://it.slashdot.org/story/25/05/22/2352210/danabot-malware-devs-infected-their-own-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DanaBot Malware Devs Infected Their Own PCs](https://it.slashdot.org/story/25/05/22/2352210/danabot-malware-devs-infected-their-own-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 01:25:00](https://tech.slashdot.org/story/25/05/22/2344201/att-has-6-billion-deal-to-buy-centurylink-fiber-broadband-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Has $6 Billion Deal To Buy CenturyLink Fiber Broadband Business](https://tech.slashdot.org/story/25/05/22/2344201/att-has-6-billion-deal-to-buy-centurylink-fiber-broadband-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 00:45:00](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Business Owners Are Using AI-Generated &apos;Concerned Residents&apos; To Fight Proposed Bus Line In Toronto](https://news.slashdot.org/story/25/05/22/2334228/business-owners-are-using-ai-generated-concerned-residents-to-fight-proposed-bus-line-in-toronto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 00:10:22](https://lobste.rs/s/fkkp0b/fork_union_beyond_openmp_c_rust) - [Fork Union: Beyond OpenMP in C++ and Rust?](https://ashvardanian.com/posts/beyond-openmp-in-cpp-rust/)
* [2025-05-23, 00:02:00](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s New AI Model Turns To Blackmail When Engineers Try To Take It Offline](https://slashdot.org/story/25/05/22/2043231/anthropics-new-ai-model-turns-to-blackmail-when-engineers-try-to-take-it-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 23:51:20](https://news.ycombinator.com/item?id=44068400) - [The Future of Flatpak](https://lwn.net/Articles/1020571/)
* [2025-05-22, 23:20:48](https://news.ycombinator.com/item?id=44068210) - [Management = Bullshit (LLM Edition)](http://funcall.blogspot.com/2025/05/management-bullshit.html)
* [2025-05-22, 23:20:00](https://hardware.slashdot.org/story/25/05/22/2037223/internet-archive-now-livestreams-history-as-its-being-preserved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Now Livestreams History As It&apos;s Being Preserved](https://hardware.slashdot.org/story/25/05/22/2037223/internet-archive-now-livestreams-history-as-its-being-preserved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 23:19:36](https://news.ycombinator.com/item?id=44068204) - [Sketchy Calendar](https://www.inkandswitch.com/ink/notes/sketchy-calendar/)
* [2025-05-22, 23:18:22](https://news.ycombinator.com/item?id=44068197) - [32 bits that changed microprocessor design](https://spectrum.ieee.org/bellmac-32-ieee-milestone)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 22:40:00](https://tech.slashdot.org/story/25/05/22/2025241/nvidias-rtx-5060-review-debacle-should-be-a-wake-up-call?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia&apos;s RTX 5060 Review Debacle Should Be a Wake-Up Call](https://tech.slashdot.org/story/25/05/22/2025241/nvidias-rtx-5060-review-debacle-should-be-a-wake-up-call?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 22:20:00](https://news.ycombinator.com/item?id=44067767) - [“Secret Mall Apartment,” a Protest for Place](https://modernagejournal.com/secret-mall-apartment-a-protest-for-place/251023/)
* [2025-05-22, 22:16:54](https://lobste.rs/s/jsoz3t/hypersystem_pixel_display_font_for) - [Hypersystem: a pixel display font for Hypermedia Systems](https://deniz.aksimsek.tr/2025/hypersystem/)
* [2025-05-22, 22:03:28](https://lobste.rs/s/1iq2t2/visualizing_financial_data_with_duckdb) - [Visualizing Financial Data with DuckDB And Plotly](https://www.pgrs.net/2025/05/22/visualizing-financial-data-with-duckdb-and-plotly/)
* [2025-05-22, 22:00:00](https://yro.slashdot.org/story/25/05/22/2012209/destructive-malware-available-in-npm-repo-went-unnoticed-for-2-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Destructive Malware Available In NPM Repo Went Unnoticed For 2 Years](https://yro.slashdot.org/story/25/05/22/2012209/destructive-malware-available-in-npm-repo-went-unnoticed-for-2-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 21:40:54](https://news.ycombinator.com/item?id=44067409) - [Show HN: Defuddle, an HTML-to-Markdown alternative to Readability](https://github.com/kepano/defuddle)
* [2025-05-22, 21:20:00](https://slashdot.org/story/25/05/22/1935238/microsoft-tests-ai-text-generation-in-notepad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Tests AI Text Generation in Notepad](https://slashdot.org/story/25/05/22/1935238/microsoft-tests-ai-text-generation-in-notepad?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 20:41:14](https://news.ycombinator.com/item?id=44066713) - [Trade Secrecy in Willy Wonka&apos;s Chocolate Factory (2009)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1430463)
* [2025-05-22, 20:40:00](https://slashdot.org/story/25/05/22/1818256/vmware-price-hikes-between-800-and-1500-since-acquisition-by-broadcom-claim-euro-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Price Hikes? Between 800 and 1,500% Since Acquisition By Broadcom, Claim Euro Customers](https://slashdot.org/story/25/05/22/1818256/vmware-price-hikes-between-800-and-1500-since-acquisition-by-broadcom-claim-euro-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 20:01:09](https://lobste.rs/s/zty9jf/async_from_scratch_3_pinned_against_wall) - [Async from scratch 3: Pinned against the wall](https://natkr.com/2025-05-22-async-from-scratch-3/)
* [2025-05-22, 20:01:00](https://tech.slashdot.org/story/25/05/22/1850252/chinas-7-year-tech-independence-push-yields-major-gains-in-ai-robotics-and-semiconductors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s 7-Year Tech Independence Push Yields Major Gains in AI, Robotics and Semiconductors](https://tech.slashdot.org/story/25/05/22/1850252/chinas-7-year-tech-independence-push-yields-major-gains-in-ai-robotics-and-semiconductors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 19:22:00](https://apple.slashdot.org/story/25/05/22/1922223/apple-plans-glasses-for-2026-as-part-of-ai-push-nixes-watch-with-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Plans Glasses for 2026 as Part of AI Push, Nixes Watch With Camera](https://apple.slashdot.org/story/25/05/22/1922223/apple-plans-glasses-for-2026-as-part-of-ai-push-nixes-watch-with-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 19:16:30](https://news.ycombinator.com/item?id=44065680) - [1,145 pull requests per day](https://saile.it/1145-pull-requests-per-day/)
* [2025-05-22, 19:10:34](https://lobste.rs/s/wmqzei/debugging_memory_leaks_postgres) - [Debugging memory leaks in Postgres, heaptrack edition](https://www.enterprisedb.com/blog/debugging-memory-leaks-postgres-heaptrack-edition)
* [2025-05-22, 18:58:25](https://news.ycombinator.com/item?id=44065458) - [Does Earth have two high-tide bulges on opposite sides? (2014)](http://physics.stackexchange.com/questions/121830/does-earth-really-have-two-high-tide-bulges-on-opposite-sides)
* [2025-05-22, 18:40:00](https://tech.slashdot.org/story/25/05/22/1759238/mozilla-is-shutting-down-pocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Is Shutting Down Pocket](https://tech.slashdot.org/story/25/05/22/1759238/mozilla-is-shutting-down-pocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 18:25:07](https://news.ycombinator.com/item?id=44065094) - [How to cheat at settlers by loading the dice (2017)](https://izbicki.me/blog/how-to-cheat-at-settlers-of-catan-by-loading-the-dice-and-prove-it-with-p-values.html)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 18:06:37](https://news.ycombinator.com/item?id=44064875) - [Loading Pydantic models from JSON without running out of memory](https://pythonspeed.com/articles/pydantic-json-memory/)
* [2025-05-22, 17:59:29](https://lobste.rs/s/qq1y1i/closures_objects_are_equivalent_2013) - [Closures And Objects Are Equivalent (2013)](https://wiki.c2.com/?ClosuresAndObjectsAreEquivalent)
* [2025-05-22, 17:45:00](https://news.slashdot.org/story/25/05/22/1742234/us-treasury-unveils-plan-to-kill-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Treasury Unveils Plan To Kill the Penny](https://news.slashdot.org/story/25/05/22/1742234/us-treasury-unveils-plan-to-kill-the-penny?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 17:20:00](https://slashdot.org/story/25/05/22/1653257/anthropic-releases-claude-4-models-that-can-autonomously-work-for-nearly-a-full-corporate-workday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Releases Claude 4 Models That Can Autonomously Work For Nearly a Full Corporate Workday](https://slashdot.org/story/25/05/22/1653257/anthropic-releases-claude-4-models-that-can-autonomously-work-for-nearly-a-full-corporate-workday?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-22, 17:16:25](https://news.ycombinator.com/item?id=44064230) - [We’ll be ending web hosting for your apps on Glitch](https://blog.glitch.com/post/changes-are-coming-to-glitch/)
* [2025-05-22, 17:03:53](https://lobste.rs/s/ffsgv1/how_get_your_research_paper_accepted) - [How to Get Your Research Paper Accepted](https://maxwellforbes.com/posts/how-to-get-a-paper-accepted)
* [2025-05-22, 16:34:42](https://news.ycombinator.com/item?id=44063703) - [Claude 4](https://www.anthropic.com/news/claude-4)
* [2025-05-22, 16:30:18](https://news.ycombinator.com/item?id=44063662) - [Mozilla to shut down Pocket and Fakespot](https://support.mozilla.org/en-US/kb/future-of-pocket)
* [2025-05-22, 15:50:16](https://news.ycombinator.com/item?id=44063248) - [That fractal that&apos;s been up on my wall for years](https://chriskw.xyz/2025/05/21/Fractal/)
* [2025-05-22, 15:46:11](https://lobste.rs/s/yobqtg/everything_s_bug_issue) - [Everything’s a bug (or an issue)](https://www.bozemanpass.com/everythings-a-bug-or-an-issue/)
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
* [2025-05-21, 16:59:08](https://lobste.rs/s/m3wugb/my_technological_regrets) - [My Technological Regrets](https://jezenthomas.com/2025/01/my-technological-regrets/)
* [2025-05-21, 15:33:09](https://lobste.rs/s/eyceuf/vim_vs_kakoune_puzzles) - [Vim vs. Kakoune puzzles](https://strongly-typed-thoughts.net/blog/vim-kakoune-puzzles-2025)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 11:19:59](https://news.ycombinator.com/item?id=44050269) - [A South Korean grand master on the art of the perfect soy sauce](https://www.theguardian.com/world/2025/may/21/without-time-there-is-no-flavour-a-south-korean-grand-master-on-the-art-of-the-perfect-soy-sauce)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
* [2025-05-19, 23:49:00](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss) - [Nextcloud Cries Foul Over Google Play Store App Rejection](https://soylentnews.org/article.pl?sid=25/05/18/1411244&amp;from=rss)
* [2025-05-19, 19:09:29](https://news.ycombinator.com/item?id=44033606) - [Richard Garwin’s role in designing the hydrogen bomb was obscured](https://www.nytimes.com/2025/05/19/science/richard-garwin-hydrogen-bomb.html)
* [2025-05-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss) - [The End of the Universe is Nigh!](https://soylentnews.org/article.pl?sid=25/05/18/148219&amp;from=rss)
* [2025-05-19, 18:16:33](https://news.ycombinator.com/item?id=44032922) - [W.a.s.t.e. Not: John Scanlan looks for the future in the dustbins of history](https://thebaffler.com/latest/w-a-s-t-e-not-adams)
* [2025-05-19, 14:24:00](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss) - [UK Retail Sector Hit by Ransomware Spree](https://soylentnews.org/article.pl?sid=25/05/18/145202&amp;from=rss)
* [2025-05-19, 11:25:32](https://news.ycombinator.com/item?id=44028616) - [Airport for DuckDB](https://airport.query.farm/)
* [2025-05-19, 10:45:00](https://news.ycombinator.com/item?id=44028360) - [Tab Roving – focus management for element groups](https://nik.digital/posts/tab-roving)
* [2025-05-19, 09:39:00](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss) - [How a New Type of AI is Helping Police Skirt Facial Recognition Bans](https://soylentnews.org/article.pl?sid=25/05/18/135204&amp;from=rss)
* [2025-05-19, 07:17:50](https://news.ycombinator.com/item?id=44027229) - [When good pseudorandom numbers go bad](https://blog.djnavarro.net/posts/2025-05-18_multivariate-normal-sampling-floating-point/)
* [2025-05-19, 04:54:00](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss) - [The Day Grok Lost its Mind](https://soylentnews.org/article.pl?sid=25/05/18/1255206&amp;from=rss)
* [2025-05-19, 04:31:39](https://news.ycombinator.com/item?id=44026516) - [When a team is too big](https://blog.alexewerlof.com/p/when-a-team-is-too-big)
* [2025-05-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss) - [Mars May Have Vast Underground Oceans](https://soylentnews.org/article.pl?sid=25/05/18/1252203&amp;from=rss)
