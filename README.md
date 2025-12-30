# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Technology Developments

* [Cybersecurity Employees Plead Guilty To Ransomware Attacks](https://yro.slashdot.org/story/25/12/30/1911201/cybersecurity-employees-plead-guilty-to-ransomware-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Meta Just Bought Manus, an AI Startup Everyone Has Been Talking About](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Prof. Software Developers Don’t Vibe, They Control: AI Agent Coding Use in 2025](https://arxiv.org/abs/2512.14012)

* [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&from=rss)

## Environmental and Health Issues

* [Singapore Study Links Heavy Infant Screen Time To Teen Anxiety](https://science.slashdot.org/story/25/12/30/1716246/singapore-study-links-heavy-infant-screen-time-to-teen-anxiety?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&from=rss)

* [Beware of OpenAI's 'Grantwashing' on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&from=rss)

* [Disaster After Disaster: Do We Have Enough Raw Materials to 'Build Back Better?'](https://soylentnews.org/article.pl?sid=25/12/23/0437256&from=rss)

## Programming and Software

* [Xous: A Pure-Rust Rethink of the Embedded Operating System](https://media.ccc.de/v/39c3-xous-a-pure-rust-rethink-of-the-embedded-operating-system)

* [Everything as Code: How We Manage Our Company in One Monorepo](https://www.kasava.dev/blog/everything-as-code-monorepo)

* [Zpdf: PDF text extraction in Zig – 5x faster than MuPDF](https://github.com/Lulzx/zpdf)

* [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)

## Science and Society

* [Life in a Shrinking Japan](https://news.slashdot.org/story/25/12/30/0716215/life-in-a-shrinking-japan?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Climate Misinformation is Becoming a National Security Threat. Canada Isn't Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&from=rss)

* [Malaria Shows No Sign of Stopping](https://science.slashdot.org/story/25/12/30/0841215/malaria-shows-no-sign-of-stopping?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Productivity Tools and Innovations

* [Toro: Deploy Applications as Unikernels](https://github.com/torokernel/torokernel)

* [Show HN: 22 GB of Hacker News in SQLite](https://hackerbook.dosaygo.com)

* [Non-Zero-Sum Games](https://nonzerosum.games/)

* [Approachable Swift Concurrency](https://fuckingapproachableswiftconcurrency.com/en/)

## Interesting Stories and Experiments

* [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&from=rss)

* [Show HN: Tidy Baby is a SET game but with words](https://tidy.baby)

* [Hacking Washing Machines](https://media.ccc.de/v/39c3-hacking-washing-machines)

* [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&from=rss)

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

* [2025-12-30, 21:21:00](https://yro.slashdot.org/story/25/12/30/1911201/cybersecurity-employees-plead-guilty-to-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cybersecurity Employees Plead Guilty To Ransomware Attacks](https://yro.slashdot.org/story/25/12/30/1911201/cybersecurity-employees-plead-guilty-to-ransomware-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 20:42:00](https://tech.slashdot.org/story/25/12/30/1748203/despite-a-record-year-airlines-are-grappling-with-big-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Despite a Record Year, Airlines Are Grappling With Big Challenges](https://tech.slashdot.org/story/25/12/30/1748203/despite-a-record-year-airlines-are-grappling-with-big-challenges?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 20:06:46](https://news.ycombinator.com/item?id=46437391) - [Prof. Software Developers Don&apos;t Vibe, They Control: AI Agent Coding Use in 2025](https://arxiv.org/abs/2512.14012)
* [2025-12-30, 20:05:42](https://news.ycombinator.com/item?id=46437381) - [Everything as Code: How We Manage Our Company in One Monorepo](https://www.kasava.dev/blog/everything-as-code-monorepo)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 20:01:00](https://science.slashdot.org/story/25/12/30/1716246/singapore-study-links-heavy-infant-screen-time-to-teen-anxiety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Study Links Heavy Infant Screen Time To Teen Anxiety](https://science.slashdot.org/story/25/12/30/1716246/singapore-study-links-heavy-infant-screen-time-to-teen-anxiety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 19:57:10](https://news.ycombinator.com/item?id=46437288) - [Zpdf: PDF text extraction in Zig – 5x faster than MuPDF](https://github.com/Lulzx/zpdf)
* [2025-12-30, 19:51:50](https://lobste.rs/s/onushg/desktop_classic_system_spacial) - [Desktop Classic System — Spacial computing hearkening back to classic Mac OS](https://mycophobia.org/dcs/)
* [2025-12-30, 19:46:02](https://lobste.rs/s/tm1b3f/xous_pure_rust_rethink_embedded) - [Xous: A Pure-Rust Rethink of the Embedded Operating System](https://media.ccc.de/v/39c3-xous-a-pure-rust-rethink-of-the-embedded-operating-system)
* [2025-12-30, 19:38:29](https://lobste.rs/s/54elmf/some_flexibility_with_go_s_sumdb) - [Some flexibility with Go&apos;s sumdb](https://blog.yossarian.net/2025/12/29/Some-flexibility-with-Go-s-sumdb)
* [2025-12-30, 19:26:59](https://lobste.rs/s/wsyy3a/vulnerability_libsodium) - [A vulnerability in libsodium](https://00f.net/2025/12/30/libsodium-vulnerability/)
* [2025-12-30, 19:21:48](https://news.ycombinator.com/item?id=46436889) - [FediMeteo: A €4 FreeBSD VPS Became a Global Weather Service](https://it-notes.dragas.net/2025/02/26/fedimeteo-how-a-tiny-freebsd-vps-became-a-global-weather-service-for-thousands/)
* [2025-12-30, 19:21:00](https://news.slashdot.org/story/25/12/30/1711255/france-pushes-back-plastic-cup-ban-by-four-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Pushes Back Plastic Cup Ban By Four Years](https://news.slashdot.org/story/25/12/30/1711255/france-pushes-back-plastic-cup-ban-by-four-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 19:15:05](https://news.ycombinator.com/item?id=46436828) - [Escaping Containment: A Security Analysis of FreeBSD Jails [video]](https://media.ccc.de/v/39c3-escaping-containment-a-security-analysis-of-freebsd-jails)
* [2025-12-30, 19:01:09](https://lobste.rs/s/8eetdb/conditions_intel_8087_floating_point) - [Conditions in the Intel 8087 floating-point chip&apos;s microcode](http://www.righto.com/2025/12/8087-microcode-conditions.html)
* [2025-12-30, 18:41:00](https://news.slashdot.org/story/25/12/30/1659234/new-yorks-metrocard-era-ends-after-31-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York&apos;s MetroCard Era Ends After 31 Years](https://news.slashdot.org/story/25/12/30/1659234/new-yorks-metrocard-era-ends-after-31-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 18:36:37](https://news.ycombinator.com/item?id=46436409) - [A faster heart for F-Droid. Our new server is here](https://f-droid.org/2025/12/30/a-faster-heart-for-f-droid.html)
* [2025-12-30, 18:25:03](https://lobste.rs/s/hvbb37/escaping_containment_security_analysis) - [Escaping Containment: A Security Analysis of FreeBSD Jails](https://media.ccc.de/v/39c3-escaping-containment-a-security-analysis-of-freebsd-jails)
* [2025-12-30, 18:08:37](https://news.ycombinator.com/item?id=46436128) - [Show HN: I remade my website in the Sith Lord Theme and I hope it&apos;s fun](https://cookie.engineer/index.html)
* [2025-12-30, 18:08:32](https://news.ycombinator.com/item?id=46436127) - [Electrolysis can solve one of our biggest contamination problems](https://ethz.ch/en/news-and-events/eth-news/news/2025/11/electrolysis-can-solve-one-of-our-biggest-contamination-problems.html)
* [2025-12-30, 18:02:00](https://slashdot.org/story/25/12/30/124254/the-problem-with-letting-ai-do-the-grunt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Problem With Letting AI Do the Grunt Work](https://slashdot.org/story/25/12/30/124254/the-problem-with-letting-ai-do-the-grunt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 17:24:57](https://news.ycombinator.com/item?id=46435614) - [A Vulnerability in Libsodium](https://00f.net/2025/12/30/libsodium-vulnerability/)
* [2025-12-30, 17:21:00](https://science.slashdot.org/story/25/12/30/0841215/malaria-shows-no-sign-of-stopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Malaria Shows No Sign of Stopping](https://science.slashdot.org/story/25/12/30/0841215/malaria-shows-no-sign-of-stopping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 17:09:57](https://news.ycombinator.com/item?id=46435418) - [Toro: Deploy Applications as Unikernels](https://github.com/torokernel/torokernel)
* [2025-12-30, 17:01:59](https://news.ycombinator.com/item?id=46435308) - [Show HN: 22 GB of Hacker News in SQLite](https://hackerbook.dosaygo.com)
* [2025-12-30, 16:41:00](https://news.slashdot.org/story/25/12/30/0836252/nepal-to-scrap-failed-mount-everest-waste-deposit-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nepal To Scrap &apos;Failed&apos; Mount Everest Waste Deposit Scheme](https://news.slashdot.org/story/25/12/30/0836252/nepal-to-scrap-failed-mount-everest-waste-deposit-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 16:02:00](https://tech.slashdot.org/story/25/12/30/0833258/camera-makers-went-weird-in-2025---and-thats-exactly-what-the-shrinking-industry-needed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Camera Makers Went Weird in 2025 - and That&apos;s Exactly What the Shrinking Industry Needed](https://tech.slashdot.org/story/25/12/30/0833258/camera-makers-went-weird-in-2025---and-thats-exactly-what-the-shrinking-industry-needed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 15:57:01](https://news.ycombinator.com/item?id=46434580) - [Show HN: Tidy Baby is a SET game but with words](https://tidy.baby)
* [2025-12-30, 15:43:42](https://lobste.rs/s/ntslcm/memory_safety_is) - [Memory Safety Is](https://matklad.github.io/2025/12/30/memory-safety-is.html)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 15:21:17](https://lobste.rs/s/4pyalq/building_react_app_with_formally) - [Building a React App with Formally Verified State](https://midspiral.com/blog/building-a-react-app-with-formally-verified-state/)
* [2025-12-30, 15:20:00](https://news.slashdot.org/story/25/12/30/0754259/some-audiobooks-are-outselling-hardcovers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Audiobooks Are Outselling Hardcovers](https://news.slashdot.org/story/25/12/30/0754259/some-audiobooks-are-outselling-hardcovers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 15:06:28](https://lobste.rs/s/4uhvgb/fedimeteo_how_tiny_4_freebsd_vps_became) - [FediMeteo: How a Tiny €4 FreeBSD VPS Became a Global Weather Service for Thousands](https://it-notes.dragas.net/2025/02/26/fedimeteo-how-a-tiny-freebsd-vps-became-a-global-weather-service-for-thousands/)
* [2025-12-30, 15:06:13](https://lobste.rs/s/0g0ebi/formally_speaking_transpiler_is_useless) - [Formally speaking, \&quot;Transpiler\&quot; is a useless word](https://people.csail.mit.edu/rachit/post/transpiler-formal/)
* [2025-12-30, 14:40:00](https://news.slashdot.org/story/25/12/30/0716215/life-in-a-shrinking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life in a Shrinking Japan](https://news.slashdot.org/story/25/12/30/0716215/life-in-a-shrinking-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 14:31:34](https://news.ycombinator.com/item?id=46433661) - [Hive (YC S14) Is Hiring a Staff Software Engineer (Data Systems)](https://jobs.ashbyhq.com/hive.co/cb0dc490-0e32-4734-8d91-8b56a31ed497)
* [2025-12-30, 14:00:00](https://news.slashdot.org/story/25/12/30/0659206/one-of-americas-most-successful-experiments-is-coming-to-a-shuddering-halt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;One of America&apos;s Most Successful Experiments Is Coming to a Shuddering Halt&apos;](https://news.slashdot.org/story/25/12/30/0659206/one-of-americas-most-successful-experiments-is-coming-to-a-shuddering-halt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 13:55:59](https://news.ycombinator.com/item?id=46433352) - [Igniting the GPU: From Kernel Plumbing to 3D Rendering on RISC-V](https://mwilczynski.dev/posts/riscv-gpu-zink/)
* [2025-12-30, 13:33:00](https://lobste.rs/s/bm6gft/restarting_systemd_services_on) - [Restarting systemd services on sustained CPU abuse](https://taoofmac.com/space/til/2025/12/28/1400)
* [2025-12-30, 13:10:56](https://news.ycombinator.com/item?id=46432999) - [The British empire&apos;s resilient subsea telegraph network](https://subseacables.blogspot.com/2025/12/the-british-empires-resilient-subsea.html)
* [2025-12-30, 13:01:51](https://news.ycombinator.com/item?id=46432916) - [Approachable Swift Concurrency](https://fuckingapproachableswiftconcurrency.com/en/)
* [2025-12-30, 13:00:00](https://it.slashdot.org/story/25/12/30/0645220/22-million-affected-by-aflac-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [22 Million Affected By Aflac Data Breach](https://it.slashdot.org/story/25/12/30/0645220/22-million-affected-by-aflac-data-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 12:56:07](https://news.ycombinator.com/item?id=46432862) - [Times New American: A Tale of Two Fonts](https://hsu.cy/2025/12/times-new-american/)
* [2025-12-30, 11:42:55](https://news.ycombinator.com/item?id=46432311) - [Non-Zero-Sum Games](https://nonzerosum.games/)
* [2025-12-30, 11:05:12](https://lobste.rs/s/apotbh/hacking_washing_machines) - [Hacking washing machines](https://media.ccc.de/v/39c3-hacking-washing-machines)
* [2025-12-30, 11:03:56](https://lobste.rs/s/ukpngg/make_shift_shebangs_for_go) - [Make-shift shebangs for Go](https://lorentz.app/blog-item.html?id=go-shebang)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 10:11:57](https://news.ycombinator.com/item?id=46431560) - [Netflix Open Content](https://opencontent.netflix.com/)
* [2025-12-30, 10:00:00](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Just Bought Manus, an AI Startup Everyone Has Been Talking About](https://meta.slashdot.org/story/25/12/30/0640250/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 08:50:44](https://news.ycombinator.com/item?id=46431028) - [Go away Python](https://lorentz.app/blog-item.html?id=go-shebang)
* [2025-12-30, 07:00:00](https://science.slashdot.org/story/25/12/29/2357222/phds-cant-find-work-as-bostons-biotech-engine-sputters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PhDs Can&apos;t Find Work as Boston&apos;s Biotech Engine Sputters](https://science.slashdot.org/story/25/12/29/2357222/phds-cant-find-work-as-bostons-biotech-engine-sputters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 05:42:00](https://lobste.rs/s/y1yldn/glamorous_christmas_bringing_charm_ruby) - [Glamorous Christmas: Bringing Charm to Ruby](https://marcoroth.dev/posts/glamorous-christmas)
* [2025-12-30, 01:40:49](https://news.ycombinator.com/item?id=46428496) - [Hacking Washing Machines [video]](https://media.ccc.de/v/39c3-hacking-washing-machines)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 23:50:34](https://news.ycombinator.com/item?id=46427586) - [Stranger Things creator says turn off “garbage” settings](https://screenrant.com/stranger-things-creator-turn-off-settings-premiere/)
* [2025-12-29, 23:40:23](https://lobste.rs/s/swdcvg/curl_removes_all_calls_strcpy) - [Curl removes all calls to strcpy](https://daniel.haxx.se/blog/2025/12/29/no-strcpy-either/)
* [2025-12-29, 22:11:00](https://lobste.rs/s/htjhdh/loss32_let_s_build_win32_linux) - [loss32: let&apos;s build a Win32/Linux](https://loss32.org/)
* [2025-12-29, 20:36:40](https://lobste.rs/s/mvee6u/can_bundler_be_as_fast_as_uv) - [Can Bundler Be as Fast as uv?](https://tenderlovemaking.com/2025/12/29/can-bundler-be-as-fast-as-uv/)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 19:09:08](https://news.ycombinator.com/item?id=46424173) - [Loss32: Let&apos;s Build a Win32/Linux](https://loss32.org/)
* [2025-12-29, 19:04:59](https://lobste.rs/s/x1xqtv/llms_are_not_fun) - [LLMs Are Not Fun](https://orib.dev/nofun.html)
* [2025-12-29, 18:38:48](https://lobste.rs/s/pab6so/silicon_valley_stack_doesn_t_work_here_why) - [The Silicon Valley Stack Doesn’t Work Here: Why Africa Will Lead the Post-Bloat Web](https://paulallies.medium.com/the-silicon-valley-stack-doesnt-work-here-why-africa-will-lead-the-post-bloat-web-e7c34b577c61)
* [2025-12-29, 17:12:20](https://news.ycombinator.com/item?id=46422757) - [Five Years of Tinygrad](https://geohot.github.io//blog/jekyll/update/2025/12/29/five-years-of-tinygrad.html)
* [2025-12-29, 16:42:50](https://lobste.rs/s/dythih/git_s_http_server_side_design_does_not) - [Git&apos;s HTTP server side design does not scale](https://xeiaso.net/notes/2025/distributed-git-ddos)
* [2025-12-29, 16:05:34](https://lobste.rs/s/jgzpwk/static_allocation_with_zig) - [Static Allocation with Zig](https://nickmonad.blog/2025/static-allocation-with-zig-kv/)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 14:37:09](https://lobste.rs/s/qicbhv/garbage_collection_rust_got_little) - [Garbage collection in Rust got a little better](https://claytonwramsey.com/blog/dumpster2/)
* [2025-12-29, 13:00:59](https://lobste.rs/s/cwdone/why_are_we_worried_about_memory_access) - [Why are we worried about memory access semantics? Full barriers should be enough for anybody](https://devblogs.microsoft.com/oldnewthing/20251226-00/?p=111919)
* [2025-12-29, 12:40:30](https://lobste.rs/s/ce0ksl/second_great_error_model_convergence) - [The Second Great Error Model Convergence](https://matklad.github.io/2025/12/29/second-error-model-convergence.html)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 08:14:45](https://news.ycombinator.com/item?id=46418517) - [HTTP Strict Transport Security (HSTS)](https://hstspreload.org/)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 23:52:24](https://lobste.rs/s/nqawul/what_unprocessed_photo_looks_like) - [What an unprocessed photo looks like](https://maurycyz.com/misc/raw_photo/)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
* [2025-12-27, 20:44:00](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss) - [Night Waking Impacts Cognitive Performance Regardless of Sleep Duration](https://soylentnews.org/article.pl?sid=25/12/25/226213&amp;from=rss)
* [2025-12-27, 15:53:00](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss) - [EU Offers UK Early Gift: Data Adequacy Until 2031](https://soylentnews.org/article.pl?sid=25/12/25/224204&amp;from=rss)
* [2025-12-27, 14:36:43](https://news.ycombinator.com/item?id=46402132) - [Concurrent Hash Table Designs](https://bluuewhale.github.io/posts/concurrent-hashmap-designs/)
* [2025-12-27, 11:16:00](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss) - [Science Sleuths Raise Concerns About Scores of Bioengineering Papers](https://soylentnews.org/article.pl?sid=25/12/25/222237&amp;from=rss)
* [2025-12-27, 06:25:00](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss) - [We May Never be Able to Tell If AI Becomes Conscious, Argues Philosopher](https://soylentnews.org/article.pl?sid=25/12/25/2156225&amp;from=rss)
* [2025-12-27, 01:40:00](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss) - [MIT Reveals How High-Fat Diets Quietly Prime the Liver for Cancer](https://soylentnews.org/article.pl?sid=25/12/25/2154252&amp;from=rss)
* [2025-12-26, 20:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss) - [Disaster After Disaster: Do We Have Enough Raw Materials to &apos;Build Back Better?&apos;](https://soylentnews.org/article.pl?sid=25/12/23/0437256&amp;from=rss)
* [2025-12-26, 18:01:00](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss) - [Options to Break Free From Smart TV Ads and Tracking](https://soylentnews.org/article.pl?sid=25/12/26/1546258&amp;from=rss)
* [2025-12-26, 16:12:00](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss) - [Reddit challenges AUS Social Media law in court](https://soylentnews.org/article.pl?sid=25/12/23/0432237&amp;from=rss)
* [2025-12-26, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss) - [Climate Misinformation is Becoming a National Security Threat. Canada Isn&apos;t Ready for It](https://soylentnews.org/article.pl?sid=25/12/23/0431239&amp;from=rss)
* [2025-12-26, 06:46:00](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss) - [Seven Projects Killed by Ubuntu (but I Still Miss Them)](https://soylentnews.org/article.pl?sid=25/12/23/0429249&amp;from=rss)
* [2025-12-26, 01:55:00](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss) - [Pennsylvania High Court Rules Police Can Access Google Searches Without Warrant](https://soylentnews.org/article.pl?sid=25/12/23/0426211&amp;from=rss)
