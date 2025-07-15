# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning Advancements

* [China's Moonshot Launches Free AI Model Kimi K2 That Outperforms GPT-4 In Key Benchmarks](https://developers.slashdot.org/story/25/07/14/1942209/chinas-moonshot-launches-free-ai-model-kimi-k2-that-outperforms-gpt-4-in-key-benchmarks?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44565668))

* [Meta's Superintelligence Lab Considers Shift To Closed AI Model](https://meta.slashdot.org/story/25/07/14/2048202/metas-superintelligence-lab-considers-shift-to-closed-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://meta.slashdot.org/story/25/07/14/2048202/metas-superintelligence-lab-considers-shift-to-closed-ai-model?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/14/1740236&from=rss))

## Technology and Innovations

* [Kubernetes Solves Its Biggest Problem: Managing Databases](https://thenewstack.io/kubernetes-finally-solves-its-biggest-problem-managing-databases/) ([Comments](https://news.ycombinator.com/item?id=44572028))

* [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/07/14/0944243&from=rss))

* [Introducing TCP-in-UDP solution (eBPF)](https://blog.mptcp.dev/2025/07/14/TCP-in-UDP.html) ([Comments](https://lobste.rs/s/zeuzlc/introducing_tcp_udp_solution_ebpf))

## Open Source and Software Development

* [Automerge 3.0](https://automerge.github.io/blog/automerge-3/) ([Comments](https://lobste.rs/s/goyein/automerge_3_0))

* [Blender 4.5 LTS Released](https://www.blender.org/download/releases/4-5/) ([Comments](https://news.ycombinator.com/item?id=44571917))

* [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html) ([Comments](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig))

## Human Interest and Miscellaneous Topics

* [When Sigterm Does Nothing: A Postgres Mystery](https://clickhouse.com/blog/sigterm-postgres-mystery) ([Comments](https://news.ycombinator.com/item?id=44567888))

* [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/) ([Comments](https://lobste.rs/s/pvbjui/death_by_thousand_slops))

* [Literalism plaguing today's movies](https://www.newyorker.com/culture/critics-notebook/the-new-literalism-plaguing-todays-biggest-movies) ([Comments](https://news.ycombinator.com/item?id=44567683))

## Global Issues and Policy

* [Cloudflare Starts Blocking Pirate Sites for UK Users](https://torrentfreak.com/cloudflare-starts-blocking-pirate-sites-for-uk-users-thats-a-pretty-big-deal-250715/) ([Comments](https://news.ycombinator.com/item?id=44571563))

* [Secret changes to major U.S. health datasets raise alarms](https://www.psypost.org/secret-changes-to-major-u-s-health-datasets-raise-alarms/) ([Comments](https://news.ycombinator.com/item?id=44571954))

* [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&from=rss) ([Comments](https://news.ycombinator.com/item?id=44550722))

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

* [2025-07-15, 15:15:20](https://news.ycombinator.com/item?id=44572028) - [Kubernetes Solves Its Biggest Problem: Managing Databases](https://thenewstack.io/kubernetes-finally-solves-its-biggest-problem-managing-databases/)
* [2025-07-15, 15:09:20](https://news.ycombinator.com/item?id=44571954) - [Secret changes to major U.S. health datasets raise alarms](https://www.psypost.org/secret-changes-to-major-u-s-health-datasets-raise-alarms/)
* [2025-07-15, 15:06:44](https://news.ycombinator.com/item?id=44571917) - [Blender 4.5 LTS Released](https://www.blender.org/download/releases/4-5/)
* [2025-07-15, 15:05:55](https://lobste.rs/s/c4yg4y/distributed_systems_reliability) - [A distributed systems reliability glossary](https://antithesis.com/resources/reliability_glossary/)
* [2025-07-15, 15:05:26](https://lobste.rs/s/ouvq8x/poor_man_s_bitemporal_data_system_sqlite) - [Poor man&apos;s bitemporal data system in SQLite and Clojure](https://www.evalapply.org/posts/poor-mans-time-oriented-data-system/index.html)
* [2025-07-15, 14:53:54](https://lobste.rs/s/xl4arr/sound_inevitability) - [The sound of inevitability](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 14:33:55](https://news.ycombinator.com/item?id=44571563) - [Cloudflare Starts Blocking Pirate Sites for UK Users](https://torrentfreak.com/cloudflare-starts-blocking-pirate-sites-for-uk-users-thats-a-pretty-big-deal-250715/)
* [2025-07-15, 13:42:42](https://lobste.rs/s/pvbjui/death_by_thousand_slops) - [Death by a thousand slops](https://daniel.haxx.se/blog/2025/07/14/death-by-a-thousand-slops/)
* [2025-07-15, 13:23:34](https://news.ycombinator.com/item?id=44570886) - [The Moving Assembly Line Turns 100 (2013)](https://www.assemblymag.com/articles/91581-the-moving-assembly-line-turns-100)
* [2025-07-15, 13:11:03](https://lobste.rs/s/8lqcxc/packages_proxies) - [Packages proxies](https://blog.garambrogne.net/packages-proxies-en.html)
* [2025-07-15, 13:06:39](https://lobste.rs/s/r5omhr/openzfs_bug_ported_zig) - [OpenZFS Bug Ported to Zig](https://andrewkelley.me/post/openzfs-bug-ported-zig.html)
* [2025-07-15, 12:45:00](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss) - [AI Therapy Bots Fuel Delusions and Give Dangerous Advice, Stanford Study Finds](https://soylentnews.org/article.pl?sid=25/07/14/1740236&amp;from=rss)
* [2025-07-15, 12:00:48](https://news.ycombinator.com/item?id=44570251) - [Crimson (YC X25) is hiring founding engineers in London](https://www.ycombinator.com/companies/crimson/jobs/kCikzj1-founding-engineer-full-stack)
* [2025-07-15, 11:35:03](https://lobste.rs/s/lnn00p/how_get_foreign_keys_horribly_wrong) - [How to Get Foreign Keys Horribly Wrong](https://hakibenita.com/django-foreign-keys)
* [2025-07-15, 11:29:02](https://news.ycombinator.com/item?id=44570048) - [Show HN: We made our own inference engine for Apple Silicon](https://github.com/trymirai/uzu)
* [2025-07-15, 09:45:03](https://lobste.rs/s/f3vn7f/game_trees_hub) - [Game of Trees Hub](https://gothub.org/)
* [2025-07-15, 09:35:16](https://lobste.rs/s/kssozd/how_i_keep_up_with_ai_progress) - [How I keep up with AI progress](https://blog.nilenso.com/blog/2025/06/23/how-i-keep-up-with-ai-progress/)
* [2025-07-15, 08:56:43](https://lobste.rs/s/zeuzlc/introducing_tcp_udp_solution_ebpf) - [Introducing TCP-in-UDP solution (eBPF)](https://blog.mptcp.dev/2025/07/14/TCP-in-UDP.html)
* [2025-07-15, 08:13:21](https://lobste.rs/s/goyein/automerge_3_0) - [Automerge 3.0](https://automerge.github.io/blog/automerge-3/)
* [2025-07-15, 08:07:51](https://lobste.rs/s/87dpsv/trying_guix_nixer_s_impressions) - [Trying Guix: A Nixer&apos;s Impressions](https://tazj.in/blog/trying-guix)
* [2025-07-15, 08:02:00](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss) - [Core Ultra 5 245HX Blasts Past Desktop Counterpart in PassMark](https://soylentnews.org/article.pl?sid=25/07/14/0944243&amp;from=rss)
* [2025-07-15, 06:41:46](https://lobste.rs/s/pohsem/initial_implementation_experimental_c) - [Initial implementation of the experimental C++ Lifetime Safety Analysis (-Wexperimental-lifetime-safety) has just landed in Clang](https://discourse.llvm.org/t/announcing-the-lifetime-safety-breakout-group/87333)
* [2025-07-15, 05:45:28](https://lobste.rs/s/d4egpg/bedrock_tiny_portable_8_bit_virtual) - [Bedrock: A tiny, portable 8-bit virtual computer (uxn fork)](https://benbridle.com/projects/bedrock.html)
* [2025-07-15, 04:43:08](https://news.ycombinator.com/item?id=44567888) - [When Sigterm Does Nothing: A Postgres Mystery](https://clickhouse.com/blog/sigterm-postgres-mystery)
* [2025-07-15, 04:35:35](https://news.ycombinator.com/item?id=44567857) - [LLM Inevitabilism](https://tomrenner.com/posts/llm-inevitabilism/)
* [2025-07-15, 03:52:38](https://news.ycombinator.com/item?id=44567683) - [Literalism plaguing today’s movies](https://www.newyorker.com/culture/critics-notebook/the-new-literalism-plaguing-todays-biggest-movies)
* [2025-07-15, 03:45:05](https://lobste.rs/s/jwmx9x/diving_into_plasma_bigscreen) - [Diving into Plasma Bigscreen](https://espi.dev/posts/2025/07/plasma-bigscreen/)
* [2025-07-15, 03:15:00](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss) - [Physicists Start To Pin Down How Stars Forge Heavy Atoms](https://soylentnews.org/article.pl?sid=25/07/14/0413203&amp;from=rss)
* [2025-07-15, 01:22:49](https://news.ycombinator.com/item?id=44566996) - [AWS Lambda Silent Crash – A Platform Failure, Not an Application Bug [pdf]](https://lyons-den.com/whitepapers/aws-lambda-silent-crash.pdf)
* [2025-07-15, 00:10:00](https://meta.slashdot.org/story/25/07/14/2048202/metas-superintelligence-lab-considers-shift-to-closed-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Superintelligence Lab Considers Shift To Closed AI Model](https://meta.slashdot.org/story/25/07/14/2048202/metas-superintelligence-lab-considers-shift-to-closed-ai-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 23:49:14](https://lobste.rs/s/yv1pnw/php_rfc_switching_3_clause_bsd_licence) - [PHP RFC: Switching to 3-clause BSD licence](https://wiki.php.net/rfc/php_license_update)
* [2025-07-14, 23:30:00](https://slashdot.org/story/25/07/14/1945242/five-eu-states-to-test-age-verification-app-to-protect-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five EU States To Test Age Verification App To Protect Children](https://slashdot.org/story/25/07/14/1945242/five-eu-states-to-test-age-verification-app-to-protect-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 23:30:00](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss) - [Supporting Mission-Driven Space Innovation, For Earth And Beyond](https://soylentnews.org/article.pl?sid=25/07/13/232209&amp;from=rss)
* [2025-07-14, 22:50:00](https://developers.slashdot.org/story/25/07/14/1942209/chinas-moonshot-launches-free-ai-model-kimi-k2-that-outperforms-gpt-4-in-key-benchmarks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Moonshot Launches Free AI Model Kimi K2 That Outperforms GPT-4 In Key Benchmarks](https://developers.slashdot.org/story/25/07/14/1942209/chinas-moonshot-launches-free-ai-model-kimi-k2-that-outperforms-gpt-4-in-key-benchmarks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 22:10:00](https://tech.slashdot.org/story/25/07/14/1935230/two-guys-hated-using-comcast-so-they-built-their-own-fiber-isp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://tech.slashdot.org/story/25/07/14/1935230/two-guys-hated-using-comcast-so-they-built-their-own-fiber-isp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 21:40:30](https://news.ycombinator.com/item?id=44565668) - [Apple&apos;s MLX adding CUDA support](https://github.com/ml-explore/mlx/pull/1983)
* [2025-07-14, 21:30:00](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Faces Calls To Reboot AI Strategy With Shares Slumping](https://apple.slashdot.org/story/25/07/14/193204/apple-faces-calls-to-reboot-ai-strategy-with-shares-slumping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 20:50:00](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Armagh Observatory Marks 230 Years of Recording Weather](https://news.slashdot.org/story/25/07/14/1858223/armagh-observatory-marks-230-years-of-recording-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 20:10:00](https://tech.slashdot.org/story/25/07/14/1844246/are-a-few-people-ruining-the-internet-for-the-rest-of-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are a Few People Ruining the Internet For the Rest of Us?](https://tech.slashdot.org/story/25/07/14/1844246/are-a-few-people-ruining-the-internet-for-the-rest-of-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 20:06:51](https://news.ycombinator.com/item?id=44564656) - [LIGO detects most massive black hole merger to date](https://www.caltech.edu/about/news/ligo-detects-most-massive-black-hole-merger-to-date)
* [2025-07-14, 19:54:26](https://news.ycombinator.com/item?id=44564531) - [NeuralOS: An operating system powered by neural networks](https://neural-os.com/)
* [2025-07-14, 19:30:00](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MoonPay Executives May Have Sent $250,000 To Nigerian Scammer, DoJ Filing Suggests](https://yro.slashdot.org/story/25/07/14/1837234/moonpay-executives-may-have-sent-250000-to-nigerian-scammer-doj-filing-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 19:25:15](https://news.ycombinator.com/item?id=44564248) - [Context Rot: How increasing input tokens impacts LLM performance](https://research.trychroma.com/context-rot)
* [2025-07-14, 18:50:00](https://slashdot.org/story/25/07/14/1820248/cognition-ai-buys-windsurf-as-ai-frenzy-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cognition AI Buys Windsurf as AI Frenzy Escalates](https://slashdot.org/story/25/07/14/1820248/cognition-ai-buys-windsurf-as-ai-frenzy-escalates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 18:45:00](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss) - [China Claims Big Advances In Classical And Quantum Computers](https://soylentnews.org/article.pl?sid=25/07/13/044254&amp;from=rss)
* [2025-07-14, 18:42:16](https://lobste.rs/s/alrfrd/best_c_library) - [The Best C++ Library](https://mcyoung.xyz/2025/07/14/best/#fnref:terrible-people)
* [2025-07-14, 18:10:00](https://news.slashdot.org/story/25/07/14/187209/air-india-chief-says-preliminary-crash-report-raises-fresh-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air India Chief Says Preliminary Crash Report Raises Fresh Questions](https://news.slashdot.org/story/25/07/14/187209/air-india-chief-says-preliminary-crash-report-raises-fresh-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 18:07:15](https://news.ycombinator.com/item?id=44563324) - [Cognition (Devin AI) to Acquire Windsurf](https://cognition.ai/blog/windsurf)
* [2025-07-14, 17:36:00](https://science.slashdot.org/story/25/07/14/1736243/quality-of-scientific-papers-questioned-as-academics-overwhelmed-by-the-millions-published?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quality of Scientific Papers Questioned as Academics &apos;Overwhelmed&apos; By the Millions Published](https://science.slashdot.org/story/25/07/14/1736243/quality-of-scientific-papers-questioned-as-academics-overwhelmed-by-the-millions-published?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 17:30:20](https://lobste.rs/s/1l3beg/panasonic_openbsd_3) - [Panasonic + OpenBSD = &lt;3](https://x61.sh/log/2025/07/03072025160538-panasonic_openbsd.html)
* [2025-07-14, 17:01:08](https://lobste.rs/s/qhgjks/using_elm_2025) - [Using Elm in 2025](https://engagesoftware.com/news/post/7033/using-elm-in-2025)
* [2025-07-14, 16:45:00](https://tech.slashdot.org/story/25/07/14/1617251/google-plans-to-combine-chromeos-and-android-into-single-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Plans To Combine ChromeOS and Android Into Single Platform](https://tech.slashdot.org/story/25/07/14/1617251/google-plans-to-combine-chromeos-and-android-into-single-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 16:05:00](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg Pledges Hundreds of Billions For AI Data Centers in Superintelligence Push](https://tech.slashdot.org/story/25/07/14/165238/zuckerberg-pledges-hundreds-of-billions-for-ai-data-centers-in-superintelligence-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 15:28:36](https://news.ycombinator.com/item?id=44561328) - [Random selection is necessary to create stable meritocratic institutions](https://assemblingamerica.substack.com/p/there-is-no-meritocracy-without-lottocracy)
* [2025-07-14, 15:20:00](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BulletVPN Shuts Down, Killing Lifetime Members&apos; Subscriptions](https://tech.slashdot.org/story/25/07/14/1420257/bulletvpn-shuts-down-killing-lifetime-members-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 15:00:39](https://lobste.rs/s/hhxj7i/you_are_box) - [you are in a box](https://jyn.dev/you-are-in-a-box/)
* [2025-07-14, 14:40:00](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area Restaurants Are Vetting Your Social Media Before You Even Walk In](https://tech.slashdot.org/story/25/07/14/1413234/bay-area-restaurants-are-vetting-your-social-media-before-you-even-walk-in?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-14, 14:24:40](https://news.ycombinator.com/item?id=44560662) - [Kiro: A new agentic IDE](https://kiro.dev/blog/introducing-kiro/)
* [2025-07-14, 14:00:00](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss) - [AMD Discloses New CPU Flaws that can Enable Data Leaks via Timing Attacks](https://soylentnews.org/article.pl?sid=25/07/13/014215&amp;from=rss)
* [2025-07-14, 12:45:49](https://lobste.rs/s/9c5i3u/ten_years_running_every_day_visualized) - [Ten years of running every day, visualized](https://nodaysoff.run/)
* [2025-07-14, 12:11:40](https://lobste.rs/s/plrsmw/data_alignment_for_speed_myth_reality) - [Data alignment for speed: myth or reality? (2012)](https://lemire.me/blog/2012/05/31/data-alignment-for-speed-myth-or-reality/)
* [2025-07-14, 09:40:51](https://lobste.rs/s/j1ps6w/hunt_for_perfect_laptop_continues) - [The hunt for a perfect laptop continues](https://pointieststick.com/2025/07/13/the-hunt-for-a-perfect-laptop-continues/)
* [2025-07-14, 09:15:00](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss) - [&apos;Positive Review Only&apos;: Researchers Hide AI Prompts in Papers](https://soylentnews.org/article.pl?sid=25/07/13/0039240&amp;from=rss)
* [2025-07-14, 08:49:01](https://lobste.rs/s/kidktn/bash_patch_add_shopt_for_implicit_place) - [Bash patch - Add shopt for implicit &amp;&amp; in place of ; for functions end of lines](https://savannah.gnu.org/patch/?10534)
* [2025-07-14, 04:30:00](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss) - [The Foolproof Way to Win Any Lottery, According to Maths](https://soylentnews.org/article.pl?sid=25/07/13/0024234&amp;from=rss)
* [2025-07-14, 02:02:46](https://lobste.rs/s/x9s2mu/store_tags_after_payloads) - [Store tags after payloads](https://www.scattered-thoughts.net/writing/store-tags-after-payloads/)
* [2025-07-13, 23:45:00](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss) - [1960s Schools Experiment That Created a New Alphabet and Left Thousands of Children Unable to Spell](https://soylentnews.org/article.pl?sid=25/07/13/008207&amp;from=rss)
* [2025-07-13, 19:15:00](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss) - [Zombie Fabs Plague China&apos;s Chipmaking Ambitions, Failures Burning Tens of Billions of Dollars](https://soylentnews.org/article.pl?sid=25/07/12/1336231&amp;from=rss)
* [2025-07-13, 18:44:56](https://news.ycombinator.com/item?id=44552500) - [Happy 20th Birthday, Django](https://www.djangoproject.com/weblog/2025/jul/13/happy-20th-birthday-django/)
* [2025-07-13, 14:33:18](https://news.ycombinator.com/item?id=44550722) - [VMware Workstation: Bringing Virtualization to the x86 Architecture (2012) [pdf]](https://www.cse.iitb.ac.in/~mythili/virtcc/papers/vmware.pdf)
* [2025-07-13, 14:28:00](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss) - [Man&apos;s Ghastly Festering Ulcer Stumps Doctors—Until They Cut Out a Wedge of Flesh](https://soylentnews.org/article.pl?sid=25/07/12/1251234&amp;from=rss)
* [2025-07-13, 11:38:18](https://news.ycombinator.com/item?id=44549549) - [Show HN: I built this to talk Danish to my girlfriend – works with any language](https://menerdu.vercel.app/)
* [2025-07-13, 11:32:51](https://news.ycombinator.com/item?id=44549517) - [Micro Adventure – Space Attack (online emulator)](https://auri-microadventure.azurewebsites.net/)
* [2025-07-13, 09:40:00](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss) - [This Glitchy, Error-Prone Tool Could Get You Deported](https://soylentnews.org/article.pl?sid=25/07/12/1244241&amp;from=rss)
* [2025-07-13, 05:05:54](https://news.ycombinator.com/item?id=44547686) - [The JPEG XL Image Coding History, Features, Coding Tools, Design Rationale](https://arxiv.org/abs/2506.05987)
* [2025-07-13, 04:56:00](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss) - [Experts Say It is Unlikely You Will See a Moa Any Time Soon](https://soylentnews.org/article.pl?sid=25/07/12/1237201&amp;from=rss)
* [2025-07-13, 00:14:00](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss) - [&apos;123456&apos; Password Exposed Chats for 64 Million McDonald&apos;s Job Applicants](https://soylentnews.org/article.pl?sid=25/07/12/1213215&amp;from=rss)
* [2025-07-12, 22:24:57](https://news.ycombinator.com/item?id=44545695) - [I Solved the Century-Old Mystery of a Miraculous Shipwreck Survivor](https://thewalrus.ca/empress-of-ireland-survivor-mystery/)
* [2025-07-12, 19:29:00](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss) - [Semiconductor Industry Could Short Out as Copper Runs Dry](https://soylentnews.org/article.pl?sid=25/07/12/123235&amp;from=rss)
* [2025-07-12, 17:09:08](https://news.ycombinator.com/item?id=44543388) - [\&quot;English Translators of Homer\&quot;: A Review](https://whatisthequestion.wordpress.com/2025/07/12/english-translators-of-homer-by-simeon-underwood/)
* [2025-07-12, 14:45:00](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss) - [70,000 Years Ago Humans Underwent A Major Shift – That’s Why We Exist ](https://soylentnews.org/article.pl?sid=25/07/11/238234&amp;from=rss)
* [2025-07-12, 10:00:00](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss) - [PerfektBlue Bluetooth Vulnerabilities Expose Millions of Vehicles to Remote Code Execution](https://soylentnews.org/article.pl?sid=25/07/11/2237233&amp;from=rss)
* [2025-07-12, 05:15:00](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss) - [CEO Claims Intel No Longer In The \&quot;Top 10 Semiconductor Companies\&quot; ](https://soylentnews.org/article.pl?sid=25/07/11/2226206&amp;from=rss)
* [2025-07-12, 00:31:00](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss) - [Derinkuyu: A Subterranean Marvel of Ancient Engineering with  Capacity for 20,000 Inhabitants](https://soylentnews.org/article.pl?sid=25/07/11/1218211&amp;from=rss)
* [2025-07-11, 19:46:00](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss) - [New Android TapTrap Attack Fools Users With Invisible UI Trick](https://soylentnews.org/article.pl?sid=25/07/11/114218&amp;from=rss)
* [2025-07-11, 17:23:55](https://news.ycombinator.com/item?id=44534807) - [Win, lose, or draw: trends in English football match results](https://blog.engora.com/2025/06/english-football-data.html)
* [2025-07-11, 16:02:13](https://news.ycombinator.com/item?id=44533759) - [VHS, VCDs, and Laserdiscs in Southeast Asia](https://rubenerd.com/vcds-and-laserdiscs-in-southeast-asia/)
* [2025-07-11, 15:02:00](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss) - [What is AGI? Nobody Agrees, and It&apos;s Tearing Microsoft and OpenAI Apart.](https://soylentnews.org/article.pl?sid=25/07/11/0518225&amp;from=rss)
* [2025-07-11, 10:26:32](https://news.ycombinator.com/item?id=44530518) - [SQLite async connection pool for high-performance](https://github.com/slaily/aiosqlitepool)
* [2025-07-11, 08:15:00](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss) - [Nvidia Has Become the World’s First Company Worth $4 Trillion](https://soylentnews.org/article.pl?sid=25/07/10/0029200&amp;from=rss)
* [2025-07-11, 07:04:10](https://news.ycombinator.com/item?id=44529150) - [Transition to using 16 KB page sizes for Android apps and games](https://android-developers.googleblog.com/2025/07/transition-to-16-kb-page-sizes-android-apps-games-android-studio.html)
* [2025-07-11, 03:30:00](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss) - [Apple Just Released an Interesting Coding Language Model](https://soylentnews.org/article.pl?sid=25/07/10/0025232&amp;from=rss)
