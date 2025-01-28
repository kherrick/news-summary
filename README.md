# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Technology Developments

* [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - A groundbreaking initiative to bring data center technology to the lunar surface aims to redefine computing in extreme environments. [Comments](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)

* [DeepSeek-R1 with Dynamic 1.58-bit Quantization](https://unsloth.ai/blog/deepseekr1-dynamic) - Details about the revolutionary advancements in AI model compression using dynamic quantization to improve performance. [Comments](https://news.ycombinator.com/item?id=42850222)

## Artificial Intelligence and Deep Learning

* ['AI Is Too Unpredictable To Behave According To Human Goals'](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critical examination of AI's inconsistencies and its difficulty aligning with human objectives. [Comments](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Open-R1: an open reproduction of DeepSeek-R1](https://huggingface.co/blog/open-r1) - Efforts on open-sourcing DeepSeek-R1 models to boost accessibility and collaboration. [Comments](https://news.ycombinator.com/item?id=42849536)

## Quirky and Unconventional Science

* [Peeing Is Socially Contagious In Chimps](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights from unexpected social behaviors in chimpanzees, revealing more about animal dynamics. [Comments](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity and Data Concerns

* [Software Flaw Exposes Millions of Subarus, Rivers of Driver Data](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The exposure of vast amounts of driver data highlights pressing needs for software integrity. [Comments](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/) - An exploration into how Git vulnerabilities could be exploited to compromise sensitive data. [Comments](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong)

## Environment and Energy

* [US Solar Boom Continues, But It's Offset By Rising Power Use](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An exploration of the dynamics between renewable energy efforts and increasing energy consumption rates. [Comments](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 08:52:47](https://news.ycombinator.com/item?id=42850222) - [DeepSeek-R1 with Dynamic 1.58-bit Quantization](https://unsloth.ai/blog/deepseekr1-dynamic)
* [2025-01-28, 08:31:53](https://news.ycombinator.com/item?id=42850111) - [Reinforcement Learning – A Reference](https://jakubhalmes.substack.com/p/reinforcement-learning-a-reference)
* [2025-01-28, 07:57:50](https://news.ycombinator.com/item?id=42849935) - [Google Maps in the US Will Change to Gulf of America and Mount McKinley](https://www.theverge.com/2025/1/27/24353450/google-maps-rename-gulf-of-mexico-america-mt-mckinley)
* [2025-01-28, 07:35:08](https://lobste.rs/s/wb8pzw/deepseek_faq) - [DeepSeek FAQ](https://stratechery.com/2025/deepseek-faq/)
* [2025-01-28, 07:23:25](https://lobste.rs/s/zwhml6/zig_what_s_writer) - [In Zig, What's a Writer?](https://www.openmymind.net/In-Zig-Whats-a-Writer/)
* [2025-01-28, 07:00:00](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Peeing Is Socially Contagious In Chimps](https://science.slashdot.org/story/25/01/28/0346254/peeing-is-socially-contagious-in-chimps?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 06:46:45](https://lobste.rs/s/mvcalo/public_inbox_archives_first_approach) - [public-inbox - an \"archives first\" approach to mailing lists](https://public-inbox.org/README.html)
* [2025-01-28, 06:40:47](https://news.ycombinator.com/item?id=42849536) - [Open-R1: an open reproduction of DeepSeek-R1](https://huggingface.co/blog/open-r1)
* [2025-01-28, 06:34:56](https://lobste.rs/s/y1eqnf/clone2leak_your_git_credentials_belong) - [Clone2Leak: Your Git Credentials Belong To Us](https://flatt.tech/research/posts/clone2leak-your-git-credentials-belong-to-us/)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-28, 03:30:00](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['AI Is Too Unpredictable To Behave According To Human Goals'](https://slashdot.org/story/25/01/28/0039232/ai-is-too-unpredictable-to-behave-according-to-human-goals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 02:58:43](https://lobste.rs/s/vhv91q/poisoning_ai_with_ss_subtitles) - [Poisoning AI with \".аss\" subtitles](https://www.youtube.com/watch?v=NEDFUjqA1s8)
* [2025-01-28, 01:40:00](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Solar Boom Continues, But It's Offset By Rising Power Use](https://hardware.slashdot.org/story/25/01/28/0026231/us-solar-boom-continues-but-its-offset-by-rising-power-use?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 01:23:45](https://news.ycombinator.com/item?id=42847865) - [A 20-Year-Old Small Company](https://hacklook.com/posts/20250128-20years/)
* [2025-01-28, 01:18:55](https://news.ycombinator.com/item?id=42847834) - [Machine Learning in Production (CMU Course)](https://mlip-cmu.github.io/s2025/)
* [2025-01-28, 01:00:00](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Flaw Exposes Millions of Subarus, Rivers of Driver Data](https://yro.slashdot.org/story/25/01/28/0013226/software-flaw-exposes-millions-of-subarus-rivers-of-driver-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-28, 00:20:00](https://news.slashdot.org/story/25/01/28/004213/uk-council-sells-assets-to-fund-ballooning-50-million-oracle-project?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Council Sells Assets To Fund Ballooning $50 Million Oracle Project](https://news.slashdot.org/story/25/01/28/004213/uk-council-sells-assets-to-fund-ballooning-50-million-oracle-project?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 23:40:00](https://slashdot.org/story/25/01/27/2129250/anthropic-builds-rag-directly-into-claude-models-with-new-citations-api?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Builds RAG Directly Into Claude Models With New Citations API](https://slashdot.org/story/25/01/27/2129250/anthropic-builds-rag-directly-into-claude-models-with-new-citations-api?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 23:00:00](https://linux.slashdot.org/story/25/01/27/2120230/facebook-flags-linux-topics-as-cybersecurity-threats?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Facebook Flags Linux Topics As 'Cybersecurity Threats'](https://linux.slashdot.org/story/25/01/27/2120230/facebook-flags-linux-topics-as-cybersecurity-threats?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 22:20:00](https://tech.slashdot.org/story/25/01/27/2115223/2025-will-likely-be-another-brutal-year-of-failed-startups-data-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [2025 Will Likely Be Another Brutal Year of Failed Startups, Data Suggests](https://tech.slashdot.org/story/25/01/27/2115223/2025-will-likely-be-another-brutal-year-of-failed-startups-data-suggests?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 22:19:12](https://lobste.rs/s/qwe1eq/2024_finances_review) - [2024 Finances In Review](https://www.joshuakgoldberg.com/blog/2024-finances-in-review/)
* [2025-01-27, 21:42:11](https://lobste.rs/s/qczsgz/building_personal_software_with_claude) - [Building personal software with Claude](https://blog.nelhage.com/post/personal-software-with-claude/)
* [2025-01-27, 21:40:00](https://news.slashdot.org/story/25/01/27/2058209/dangerous-temperatures-could-kill-50-more-europeans-by-2100-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dangerous Temperatures Could Kill 50% More Europeans By 2100, Study Finds](https://news.slashdot.org/story/25/01/27/2058209/dangerous-temperatures-could-kill-50-more-europeans-by-2100-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 21:18:08](https://lobste.rs/s/ke6k7y/pwru_packet_where_are_you_ebpf_based_linux) - [pwru: Packet, where are you? -- eBPF-based Linux kernel networking debugger](https://github.com/cilium/pwru)
* [2025-01-27, 21:01:00](https://news.slashdot.org/story/25/01/27/2059213/google-has-open-sourced-the-pebble-smartwatch-os?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Has Open-Sourced the Pebble Smartwatch OS](https://news.slashdot.org/story/25/01/27/2059213/google-has-open-sourced-the-pebble-smartwatch-os?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 20:51:28](https://news.ycombinator.com/item?id=42845488) - [The Illustrated DeepSeek-R1](https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1)
* [2025-01-27, 20:33:43](https://news.ycombinator.com/item?id=42845323) - [Go 1.24's go tool is one of the best additions to the ecosystem in years](https://www.jvt.me/posts/2025/01/27/go-tools-124/)
* [2025-01-27, 20:28:36](https://lobste.rs/s/yqx2sx/pebble_smartwatches_open_sourced) - [Pebble smartwatches open-sourced](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 20:22:00](https://developers.slashdot.org/story/25/01/27/2023232/microsoft-takes-on-mongodb-with-postgresql-based-document-database?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Takes on MongoDB with PostgreSQL-Based Document Database](https://developers.slashdot.org/story/25/01/27/2023232/microsoft-takes-on-mongodb-with-postgresql-based-document-database?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 20:11:19](https://news.ycombinator.com/item?id=42845091) - [We're bringing Pebble back](https://repebble.com/)
* [2025-01-27, 20:09:09](https://news.ycombinator.com/item?id=42845070) - [Google open-sources the Pebble OS](https://opensource.googleblog.com/2025/01/see-code-that-powered-pebble-smartwatches.html)
* [2025-01-27, 19:53:45](https://lobste.rs/s/wapcwu/trustfall) - [Trustfall](https://github.com/obi1kenobi/trustfall)
* [2025-01-27, 19:34:00](https://slashdot.org/story/25/01/27/1935207/nvidia-dismisses-china-ai-threat-says-deepseek-still-needs-its-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Dismisses China AI Threat, Says DeepSeek Still Needs Its Chips](https://slashdot.org/story/25/01/27/1935207/nvidia-dismisses-china-ai-threat-says-deepseek-still-needs-its-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 19:21:55](https://news.ycombinator.com/item?id=42844619) - [The Alpha Myth: How captive wolves led us astray](https://anthonydavidadams.substack.com/p/the-alpha-myth-how-captive-wolves)
* [2025-01-27, 19:02:11](https://lobste.rs/s/quamiu/first_perfect_computer) - [The First Perfect Computer](https://celso.io/posts/2025/01/26/the-first-perfect-computer/)
* [2025-01-27, 19:01:09](https://lobste.rs/s/djejmh/really_really_good_random_number) - [really really good random number generator (rrgrng)](https://swlody.dev/Posts/really-really-good-random-number-generator-(rrgrng))
* [2025-01-27, 19:00:00](https://slashdot.org/story/25/01/27/190204/deepseek-piles-pressure-on-ai-rivals-with-new-image-model-release?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Piles Pressure on AI Rivals With New Image Model Release](https://slashdot.org/story/25/01/27/190204/deepseek-piles-pressure-on-ai-rivals-with-new-image-model-release?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 18:24:53](https://lobste.rs/s/cwkyc9/spritely_goblins_v0_15_0_goblins_browser) - [Spritely Goblins v0.15.0: Goblins in the browser](https://www.spritely.institute/news/spritely-goblins-v0-15-0-goblins-in-the-browser.html)
* [2025-01-27, 18:21:00](https://tech.slashdot.org/story/25/01/27/1821216/metas-ai-chatbot-taps-user-data-with-no-opt-out-option?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta's AI Chatbot Taps User Data With No Opt-Out Option](https://tech.slashdot.org/story/25/01/27/1821216/metas-ai-chatbot-taps-user-data-with-no-opt-out-option?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 17:42:36](https://news.ycombinator.com/item?id=42843623) - [The Taylorator – All Your Frequencies Are Belong to Us](https://www.scd31.com/posts/taylorator)
* [2025-01-27, 17:42:00](https://news.slashdot.org/story/25/01/27/1742239/jd-vance-says-big-tech-has-too-much-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [JD Vance Says Big Tech Has 'Too Much Power'](https://news.slashdot.org/story/25/01/27/1742239/jd-vance-says-big-tech-has-too-much-power?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 17:41:10](https://lobste.rs/s/sv3vhi/taylorator_all_your_frequencies_are) - [The Taylorator - All Your Frequencies Are Belong to Us](https://www.scd31.com/posts/taylorator)
* [2025-01-27, 17:04:42](https://lobste.rs/s/xo6x6a/repeat_yourself_bit) - [Repeat Yourself, A Bit](https://blog.startifact.com/posts/repeat-yourself-a-bit/)
* [2025-01-27, 16:57:45](https://news.ycombinator.com/item?id=42843131) - [DeepSeek releases Janus Pro, a text-to-image generator [pdf]](https://github.com/deepseek-ai/Janus/blob/main/janus_pro_tech_report.pdf)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 15:53:50](https://lobste.rs/s/2wuzgd/issues_with_borrowedbuf_rust) - [Issues with BorrowedBuf in Rust](https://mina86.com/2025/rusts-worst-feature/)
* [2025-01-27, 15:24:59](https://lobste.rs/s/lwf8lc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lwf8lc/what_are_you_doing_this_week)
* [2025-01-27, 14:26:04](https://lobste.rs/s/vy25lh/steam_brick_no_screen_no_controller) - [Steam Brick: No screen, no controller, and absolutely no sense, just a power button and a USB port](https://crastinator-pro.github.io/steam-brick/)
* [2025-01-27, 14:24:05](https://news.ycombinator.com/item?id=42841409) - [The ocean teems with networks of interconnected bacteria](https://www.quantamagazine.org/the-ocean-teems-with-networks-of-interconnected-bacteria-20250106/)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 12:44:39](https://news.ycombinator.com/item?id=42840548) - [My failed attempt to shrink all NPM packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 12:42:10](https://lobste.rs/s/ldaaql/my_failed_attempt_shrink_all_npm_packages) - [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 12:18:35](https://news.ycombinator.com/item?id=42840352) - [Oliver Heaviside and the theory of transmission lines (2021)](https://www.pa3fwm.nl/technotes/tn28-heaviside-transmission-lines.html)
* [2025-01-27, 10:57:44](https://news.ycombinator.com/item?id=42839650) - [Nvidia’s $589B DeepSeek rout](https://finance.yahoo.com/news/asml-sinks-china-ai-startup-081823609.html)
* [2025-01-27, 10:32:36](https://news.ycombinator.com/item?id=42839502) - [Facebook ban on discussing Linux?](https://distrowatch.com/weekly-mobile.php?issue=20250127#sitenews)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 08:56:16](https://news.ycombinator.com/item?id=42838875) - [Show HN: I Made an iOS Podcast Player with Racket](https://defn.io/2024/11/16/podcatcher/)
* [2025-01-27, 07:59:00](https://lobste.rs/s/9ihbuh/surface_stable_fractal_dithering) - [Surface-Stable Fractal Dithering](https://www.youtube.com/watch?v=HPqGaIMVuLs)
* [2025-01-27, 06:58:37](https://lobste.rs/s/qvr98h/maps_are_faster_go_1_24) - [Maps are faster in Go 1.24](https://www.bytesizego.com/blog/go-124-swiss-table-maps)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-27, 03:14:45](https://lobste.rs/s/pzr5nj/future_microprocessors) - [The Future of Microprocessors](https://www.youtube.com/watch?v=MkbgZMCTUyU)
* [2025-01-27, 03:12:30](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024) - [What're the Best Things you Read and Learned in 2024?](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 18:51:31](https://news.ycombinator.com/item?id=42832742) - [Human corpses keep moving for over a year after death, scientist says (2019)](https://www.newsweek.com/human-corpse-year-burial-scientist-1459113)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 16:55:45](https://lobste.rs/s/oxtwre/hard_numbers_wayland_vs_x11_input_latency) - [Hard numbers in the Wayland vs X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 13:35:31](https://news.ycombinator.com/item?id=42830018) - [Ask HN: What do you use for content moderation of UGC?](https://news.ycombinator.com/item?id=42830018)
* [2025-01-26, 12:30:10](https://news.ycombinator.com/item?id=42829677) - [Complexity physics finds crucial tipping points in chess games](https://arstechnica.com/science/2025/01/complexity-physics-finds-crucial-tipping-points-in-chess-games/)
* [2025-01-26, 09:42:13](https://news.ycombinator.com/item?id=42829034) - [Using AI for Coding: My Journey with Cline and LLMs](https://pgaleone.eu/ai/coding/2025/01/26/using-ai-for-coding-my-experience/)
* [2025-01-26, 09:28:03](https://news.ycombinator.com/item?id=42828966) - [Swede dreams: How Sweden is embracing its sleepy side](https://www.bbc.com/travel/article/20250113-how-sweden-is-embracing-its-sleepy-side)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 08:32:08](https://news.ycombinator.com/item?id=42828720) - [Turning the Database Inside-Out](https://martin.kleppmann.com/2015/11/05/database-inside-out-at-oredev.html)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 19:14:41](https://news.ycombinator.com/item?id=42816133) - [Beautiful Free Math – Desmos Animated Graphing Calculator](https://www.desmos.com/)
* [2025-01-24, 18:11:25](https://news.ycombinator.com/item?id=42815697) - [The Vikings also used crampons to avoid slipping on ice](https://www.sciencenorway.no/ice-viking-age-winter/the-vikings-also-used-crampons-to-avoid-slipping-on-ice/2456603)
* [2025-01-24, 16:53:45](https://news.ycombinator.com/item?id=42814982) - [Undiagnosed Cognitive Decline Eats into Seniors' Retirement Savings](https://www.wsj.com/personal-finance/retirement/cognitive-decline-retirement-savings-4672b604)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 11:29:28](https://news.ycombinator.com/item?id=42812157) - [Dragonsweeper — A minesweeper game that requires observation](https://danielben.itch.io/dragonsweeper)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 07:10:25](https://news.ycombinator.com/item?id=42811146) - [How we scaled Slack to support 1000s of developers](https://blog.railway.com/p/slack-overflow)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
