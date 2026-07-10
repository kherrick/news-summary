# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Developments

* [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Surgeons utilize humanoid robots for unprecedented surgical operations on live animals.

* [AI-generated videos to maximally drive a target brain region](https://nevo-project.epfl.ch/) - Research explores AI-generated content's potential to precisely target and stimulate brain regions.

## AI and Software Innovations

* [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust) - A tool enabling seamless, safer transitions from C++ to Rust programming.

* [OpenAI Rolls Out GPT-5.6 After Government Greenlight, Announces 'ChatGPT Work'](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI introduces its next generation GPT AI with a focus on professional-use capabilities.

* [Launch HN: Context.dev (YC S26) – API to get structured data from any website](https://www.context.dev) - A new API service offering structured data extraction from various web platforms.

## Scientific Discoveries and Research

* [Record-Breaking Ocean Drilling Reveals Why Japan's 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - Groundbreaking oceanic research uncovers factors contributing to the immense destruction of Japan's 2011 tsunami.

* [Shoebox-Sized 'Detector Satellites' Could Sniff Out a Nuclear Bomb In Space](https://science.slashdot.org/story/26/07/09/0427237/shoebox-sized-detector-satellites-could-sniff-out-a-nuclear-bomb-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovations in satellite technology aimed at detecting nuclear threats in outer space.

* [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - New animal behavior studies reveal empathetic traits in rats.

## Programming and Open Source

* [Let's build a simple interpreter for APL](https://mathspp.com/blog/lsbasi-apl-part1) - Dive into creating a simplistic interpreter for the programming language APL.

* [Chatto is now Open Source](https://www.hmans.dev/blog/chatto-is-open-source) - The Chatto live-streaming engine is now available as open source.

* [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust) - A complete rewrite of Postgres database in Rust passes all regression tests.

## Regulatory and Industry Changes

* [Lawmakers Probe Growing Use of Chinese AI Models In US Companies](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of the implications and impact of Chinese AI technologies in American businesses.

* [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - The court upholds a substantial antitrust fine against Google's Android operations.

* [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - Controversial legislation prohibits pursuit of net-zero emissions goals at the local level in Florida.

## Cultural and Societal Impacts of Technology

* [Parents' Phone Addiction Affects Bond With Kids, New Study Finds](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights the negative effects of parental device usage on family relationships.

* [The glass backbone: Why the Army's logistics will break in the next war](https://mwi.westpoint.edu/the-glass-backbone-why-the-armys-logistics-will-break-in-the-next-war/) - A critical analysis of infrastructure challenges for army logistics in future conflicts.

* [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - A look at whether the rapid pace of modern advancements is eclipsing human adaptability.

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

* [2026-07-10, 09:00:00](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nobel-Winning US Chemist Will Move to China to Lead AI Institute](https://science.slashdot.org/story/26/07/10/0830229/nobel-winning-us-chemist-will-move-to-china-to-lead-ai-institute?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 08:21:10](https://news.ycombinator.com/item?id=48857230) - [In Emacs, Everything Looks Like a Service](http://yummymelon.com/devnull/in-emacs-everything-looks-like-a-service.html)
* [2026-07-10, 07:39:11](https://news.ycombinator.com/item?id=48856904) - [AI-generated videos to maximally drive a target brain region](https://nevo-project.epfl.ch/)
* [2026-07-10, 07:30:00](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss) - [Record-Breaking Ocean Drilling Reveals Why Japan&apos;s 2011 Tsunami Was So Deadly](https://soylentnews.org/article.pl?sid=26/07/09/0335227&amp;from=rss)
* [2026-07-10, 05:28:45](https://lobste.rs/s/skiumt/let_s_build_simple_interpreter_for_apl) - [Let&apos;s build a simple interpreter for APL](https://mathspp.com/blog/lsbasi-apl-part1)
* [2026-07-10, 03:30:00](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanoid Robots Controlled By Surgeons Did World-First Operation On Live Pigs](https://hardware.slashdot.org/story/26/07/10/0128252/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-10, 03:24:53](https://lobste.rs/s/xyotoa/cpp2rust_automatic_translation_c_safe) - [Cpp2Rust: Automatic Translation of C++ to Safe Rust](https://github.com/Cpp2Rust/cpp2rust)
* [2026-07-10, 02:46:00](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss) - [Bethesda, Id Software Reportedly Hit Hard by Microsoft Layoffs](https://soylentnews.org/article.pl?sid=26/07/09/0329217&amp;from=rss)
* [2026-07-10, 02:14:15](https://lobste.rs/s/gd15cf/fast_image_video_fidelity_metrics_c_zig) - [Fast Image &amp; Video Fidelity Metrics in C, Zig](https://github.com/halidecx/fmetrics)
* [2026-07-10, 01:28:43](https://news.ycombinator.com/item?id=48854681) - [Build your own vulnerability harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness/)
* [2026-07-10, 01:25:59](https://lobste.rs/s/2jgiax/superoptimizer_look_at_smallest_program) - [Superoptimizer -- A Look at the Smallest Program](https://dl.acm.org/doi/epdf/10.1145/36177.36194)
* [2026-07-10, 00:46:25](https://lobste.rs/s/e85zgh/road_lisp_why_lisp) - [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)
* [2026-07-10, 00:20:28](https://news.ycombinator.com/item?id=48854247) - [Parental device use and the adolescent-caregiver attachment bond](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1766665/full)
* [2026-07-09, 23:49:39](https://lobste.rs/s/bcf7pk/repo_local_documentation_system_for) - [Repo-Local Documentation System for Humans &amp; Agents](https://gist.github.com/lukewilson2002/cb48062397d8b51954034d94b8c19d6d)
* [2026-07-09, 23:00:00](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Probe Growing Use of Chinese AI Models In US Companies ](https://news.slashdot.org/story/26/07/09/1947218/lawmakers-probe-growing-use-of-chinese-ai-models-in-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 22:15:56](https://news.ycombinator.com/item?id=48853091) - [Why American ambulance rides are so expensive](https://davidoks.blog/p/why-american-ambulance-rides-are)
* [2026-07-09, 22:06:00](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss) - [Interoception:  the Sense of How You Feel Inside](https://soylentnews.org/article.pl?sid=26/07/08/0159235&amp;from=rss)
* [2026-07-09, 22:00:00](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Hits All-Time Usage Record](https://tech.slashdot.org/story/26/07/09/1829252/google-search-hits-all-time-usage-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 21:00:00](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Patents AI Device That Tracks Your Emotions, Watches You Take Your Meds](https://yro.slashdot.org/story/26/07/09/1835232/meta-patents-ai-device-that-tracks-your-emotions-watches-you-take-your-meds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 20:51:06](https://news.ycombinator.com/item?id=48852199) - [Building a real-time AI tutor for 5-year-olds](https://www.ello.com/blog/teaching-a-child-in-1000-ms)
* [2026-07-09, 20:36:43](https://lobste.rs/s/lep7wh/how_build_circular_lcd_clock) - [How to build a circular LCD clock](https://blinry.org/lcd-clock/)
* [2026-07-09, 20:06:04](https://lobste.rs/s/eehcpl/page_weight_matters) - [Page weight matters](https://nh3.dev/blog/05-bloat)
* [2026-07-09, 20:00:00](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Rolls Out GPT-5.6 After Government Greenlight, Announces &apos;ChatGPT Work&apos;](https://slashdot.org/story/26/07/09/1821245/openai-rolls-out-gpt-56-after-government-greenlight-announces-chatgpt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 19:00:00](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hands Open Health Stack To the Linux Foundation](https://news.slashdot.org/story/26/07/09/1659227/google-hands-open-health-stack-to-the-linux-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 18:31:39](https://lobste.rs/s/ykabry/batch_job_elm_architecture) - [A batch job, in The Elm Architecture](https://cekrem.github.io/posts/elm-run-batch-job/)
* [2026-07-09, 18:00:00](https://news.slashdot.org/story/26/07/09/1649254/san-francisco-moves-to-build-private-luxury-airport-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [San Francisco Moves To Build Private Luxury Airport Terminal](https://news.slashdot.org/story/26/07/09/1649254/san-francisco-moves-to-build-private-luxury-airport-terminal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 17:23:00](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss) - [NASA May Send A Backup, Nuclear-Powered Mars Rover To The Moon](https://soylentnews.org/article.pl?sid=26/07/08/0155211&amp;from=rss)
* [2026-07-09, 17:17:16](https://news.ycombinator.com/item?id=48849292) - [Interview with Mitchell Hashimoto about Ghostty and Zig](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 17:04:14](https://news.ycombinator.com/item?id=48849066) - [GPT-5.6](https://openai.com/index/gpt-5-6/)
* [2026-07-09, 17:00:00](https://hardware.slashdot.org/story/26/07/09/1641225/macos-28-will-drop-support-for-encrypted-mac-os-extended-volumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [macOS 28 Will Drop Support For Encrypted Mac OS Extended Volumes](https://hardware.slashdot.org/story/26/07/09/1641225/macos-28-will-drop-support-for-encrypted-mac-os-extended-volumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 16:26:15](https://lobste.rs/s/pg7hce/conviviality_computational_science) - [Conviviality in computational science](https://blog.khinsen.net/posts/2026/07/06/conviviality.html)
* [2026-07-09, 16:00:00](https://slashdot.org/story/26/07/09/0452203/openai-releases-new-voice-models-for-more-natural-live-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases New Voice Models For More Natural Live Conversations](https://slashdot.org/story/26/07/09/0452203/openai-releases-new-voice-models-for-more-natural-live-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 15:41:15](https://lobste.rs/s/0mam5k/lobsters_interview_with_mitchellh) - [Lobsters Interview with mitchellh](https://alexalejandre.com/programming/interview-with-mitchell-hashimoto/)
* [2026-07-09, 15:28:39](https://news.ycombinator.com/item?id=48847562) - [Launch HN: Context.dev (YC S26) – API to get structured data from any website](https://www.context.dev)
* [2026-07-09, 15:27:48](https://news.ycombinator.com/item?id=48847552) - [Hy3](https://hy.tencent.com/research/hy3)
* [2026-07-09, 15:25:25](https://news.ycombinator.com/item?id=48847511) - [A possible future for Damn Interesting](https://www.damninteresting.com/a-possible-future/)
* [2026-07-09, 15:21:30](https://lobste.rs/s/tedi5h/you_paid_me_long_time_linux_user_use) - [You paid me, a long-time Linux user, to use Windows 11 exclusively for a month: here’s how it went](https://www.osnews.com/story/145459/you-paid-me-a-long-time-linux-user-to-use-windows-11-exclusively-for-a-month-heres-how-it-went/)
* [2026-07-09, 15:00:00](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Parents&apos; Phone Addiction Affects Bond With Kids, New Study Finds](https://mobile.slashdot.org/story/26/07/09/0445259/parents-phone-addiction-affects-bond-with-kids-new-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 14:57:02](https://news.ycombinator.com/item?id=48846995) - [TLS certificates for internal services done right](https://tuxnet.dev/posts/tls-for-internal-services/)
* [2026-07-09, 14:56:32](https://lobste.rs/s/o9edbl/announcing_rust_1_97_0) - [Announcing Rust 1.97.0](https://blog.rust-lang.org/2026/07/09/Rust-1.97.0/)
* [2026-07-09, 14:48:28](https://lobste.rs/s/qnipw7/physically_based_pbr_values_database) - [Physically Based - The PBR values database](https://physicallybased.info)
* [2026-07-09, 14:16:34](https://news.ycombinator.com/item?id=48846281) - [No leap second will be introduced at the end of December 2026](https://datacenter.iers.org/data/latestVersion/bulletinC.txt)
* [2026-07-09, 14:10:22](https://news.ycombinator.com/item?id=48846184) - [Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
* [2026-07-09, 13:52:12](https://lobste.rs/s/ad7cm6/prolog_library_for_interfacing_with_llms) - [A Prolog library for interfacing with LLMs](https://github.com/vagos/llmpl)
* [2026-07-09, 13:24:43](https://news.ycombinator.com/item?id=48845442) - [The glass backbone: Why the Army&apos;s logistics will break in the next war](https://mwi.westpoint.edu/the-glass-backbone-why-the-armys-logistics-will-break-in-the-next-war/)
* [2026-07-09, 13:06:04](https://news.ycombinator.com/item?id=48845209) - [A road to Lisp: Why Lisp](https://scotto.me/blog/2026-07-09-why-lisp/)
* [2026-07-09, 12:53:46](https://lobste.rs/s/3eo2nv/i_did_not_kill_stanley_lieber_how_draw_with) - [I Did Not Kill Stanley Lieber: How to draw (with 9front)](https://triapul.cz/automa/i_did_not_kill_stanley_lieber)
* [2026-07-09, 12:48:52](https://news.ycombinator.com/item?id=48845049) - [Show HN: 18 Words](https://18words.com/)
* [2026-07-09, 12:32:00](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss) - [The Twenty-Ninth International Obfuscated C Code Contest is back](https://soylentnews.org/article.pl?sid=26/07/08/0153215&amp;from=rss)
* [2026-07-09, 11:03:54](https://news.ycombinator.com/item?id=48843923) - [EU Parliament greenlights Chat Control 1.0](https://www.patrick-breyer.de/en/eu-parliament-greenlights-chat-control-1-0-breyer-our-children-lose-out/)
* [2026-07-09, 11:00:00](https://news.slashdot.org/story/26/07/09/0436235/meta-to-build-9-billion-alberta-data-center-its-first-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Build $9 Billion Alberta Data Center, Its First In Canada](https://news.slashdot.org/story/26/07/09/0436235/meta-to-build-9-billion-alberta-data-center-its-first-in-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 08:23:07](https://lobste.rs/s/v5hkjy/two_case_studies_nan) - [two case studies of NaN](https://sebsite.pw/w/20260709-nan.html)
* [2026-07-09, 08:05:04](https://news.ycombinator.com/item?id=48842459) - [Show HN: Getting GLM 5.2 running on my slow computer](https://github.com/JustVugg/colibri)
* [2026-07-09, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss) - [The Supreme Court Just Lit a Fuse Under Flock&apos;s License Plate Camera Empire](https://soylentnews.org/article.pl?sid=26/07/08/0151252&amp;from=rss)
* [2026-07-09, 07:45:31](https://lobste.rs/s/sy980q/peace_for_all_re_factor) - [Peace For All – Re: Factor](https://re.factorcode.org/2026/07/peace-for-all.html)
* [2026-07-09, 07:00:00](https://science.slashdot.org/story/26/07/09/0427237/shoebox-sized-detector-satellites-could-sniff-out-a-nuclear-bomb-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shoebox-Sized &apos;Detector Satellites&apos; Could Sniff Out a Nuclear Bomb In Space](https://science.slashdot.org/story/26/07/09/0427237/shoebox-sized-detector-satellites-could-sniff-out-a-nuclear-bomb-in-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 06:18:19](https://news.ycombinator.com/item?id=48841676) - [Postgres rewritten in Rust, now passing 100% of the Postgres regression tests](https://github.com/malisper/pgrust)
* [2026-07-09, 04:49:40](https://lobste.rs/s/hufoqf/chatto_is_now_open_source) - [Chatto is now Open Source](https://www.hmans.dev/blog/chatto-is-open-source)
* [2026-07-09, 04:00:00](https://yro.slashdot.org/story/26/07/09/0359202/us-food-and-drug-administration-rejects-petition-to-set-pfas-limits-in-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Food and Drug Administration Rejects Petition To Set PFAS Limits In Food](https://yro.slashdot.org/story/26/07/09/0359202/us-food-and-drug-administration-rejects-petition-to-set-pfas-limits-in-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-09, 03:08:00](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss) - [Rats Show Empathy, According to Model](https://soylentnews.org/article.pl?sid=26/07/08/0149218&amp;from=rss)
* [2026-07-09, 00:43:32](https://lobste.rs/s/dbakbg/interview_drew_devault_on_ai_free_version) - [Interview: Drew DeVault on an AI-free version of Vim](https://jasonpolak.substack.com/p/interview-drew-devault-on-an-ai-free)
* [2026-07-08, 23:00:00](https://slashdot.org/story/26/07/08/2059254/a-silent-workspace-in-claude-mirrors-key-features-of-human-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Silent Workspace In Claude Mirrors Key Features of Human Consciousness](https://slashdot.org/story/26/07/08/2059254/a-silent-workspace-in-claude-mirrors-key-features-of-human-consciousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 22:22:00](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss) - [Kernel Anti-Cheat Digital Restrictions Management Technology Is an Overreach](https://soylentnews.org/article.pl?sid=26/07/08/0147225&amp;from=rss)
* [2026-07-08, 21:50:54](https://lobste.rs/s/6rkdik/rewriting_bun_rust) - [Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
* [2026-07-08, 17:37:00](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss) - [Zombie ‘Who Owns Unix?’ Lawsuit Comes Alive Again](https://soylentnews.org/article.pl?sid=26/07/06/2010203&amp;from=rss)
* [2026-07-08, 16:57:26](https://lobste.rs/s/txmyod/announcing_typescript_7_0) - [Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
* [2026-07-08, 14:29:42](https://lobste.rs/s/mp42ys/obfuscated_bash_script_by_akamai_being) - [Obfuscated bash script by Akamai being supplied to consumers via retail stores](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 14:12:19](https://news.ycombinator.com/item?id=48832247) - [Tiny Tapeout Explorer: WASM FET-level circuit SIM&amp;vis](https://znah.net/tiny_explorer/)
* [2026-07-08, 14:02:44](https://lobste.rs/s/qmzekw/funding_open_source_software_without) - [Funding open-source software without compromising it](https://yorickpeterse.com/articles/funding-open-source-software-without-compromising-it/)
* [2026-07-08, 13:01:25](https://lobste.rs/s/oj9lal/bug_which_only_affected_left_handed_users) - [A bug which only affected left-handed users](https://shkspr.mobi/blog/2026/07/a-bug-which-only-affected-left-handed-users/)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 20:40:14](https://news.ycombinator.com/item?id=48810218) - [Common prefix skipping, adaptive sort](http://smalldatum.blogspot.com/2026/01/common-prefix-skipping-adaptive-sort.html)
* [2026-07-06, 19:46:30](https://news.ycombinator.com/item?id=48809574) - [Girls just wanna have fast MPMC queues with bounded waiting](https://nahla.dev/blog/waitfree_queue/)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 17:18:15](https://news.ycombinator.com/item?id=48807673) - [Damaged Earth Catalog](https://damaged.bleu255.com/)
* [2026-07-06, 15:45:50](https://news.ycombinator.com/item?id=48806305) - [Life with Hazard Ratios](https://dynomight.net/hazard-ratios/)
* [2026-07-06, 14:59:21](https://news.ycombinator.com/item?id=48805598) - [Apple Silicon Exec Explains Mac Mini AI Demand and On-Device Future](https://www.macrumors.com/2026/07/06/apple-silicon-exec-explains-mac-mini-ai-demand/)
* [2026-07-06, 14:42:35](https://news.ycombinator.com/item?id=48805358) - [Harman and Dr. Sean Olive are reshaping headphone sound (2025)](https://www.crutchfield.com/S-ls67Oiva4Wu/learn/crutchfield-visits-harman.html)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 13:36:58](https://news.ycombinator.com/item?id=48804400) - [Triple Dragon Fractal (2020)](https://paulbourke.net/fractals/tripledragon/)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
