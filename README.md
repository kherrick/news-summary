# [News Summary](https://kherrick.github.io/news-summary/)

## AI, Technology, and Automation Developments

* [Andrew Yang Warns AI Will Displace Millions of White-Collar Workers Within 18 Months](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlighting an urgent call about the potential societal impact of AI leading to mass displacement of workers within the near future.

* [Ohio Newspaper Removes Writing From Reporters' Jobs, Hands It To an 'AI Rewrite Specialist'](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A local newspaper shockingly cuts journalist writing processes by utilizing AI for article rewriting tasks.

* [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - An alarming forecast by Microsoft's AI Chief on automation's power to entirely replace a majority of white-collar roles within a year.

## Scientific Discoveries and Innovations

* [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - Revolutionary research unveils a liquid capable of storing solar energy and releasing it later as heat for sustainable energy solutions.

* [Single Dose of DMT Rapidly Reduces Symptoms of Major Depression](https://science.slashdot.org/story/26/02/18/049257/single-dose-of-dmt-rapidly-reduces-symptoms-of-major-depression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study observes groundbreaking evidence of a psychedelic compound's effectiveness in reducing symptoms of major depression.

* [A Study of 12,000 EU Firms Finds AI's Productivity Gains Are Real](https://it.slashdot.org/story/26/02/18/1736212/study-of-12000-eu-firms-finds-ais-productivity-gains-are-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights the authentic productivity benefits organizations across Europe are experiencing through AI adoption.

## Privacy and Security

* [What Your Bluetooth Devices Reveal About You](https://blog.dmcc.io/journal/2026-bluetooth-privacy-bluehood/) - A report delves into privacy concerns surrounding Bluetooth devices, emphasizing the data they might leverage about users.

* [DNS-PERSIST-01: A New Model for DNS-based Challenge Validation](https://letsencrypt.org/2026/02/18/dns-persist-01.html) - Let's Encrypt introduces a novel model for DNS-based validation to enhance security in internet communications.

* [Microsoft Says Bug Causes Copilot To Summarize Confidential Emails](https://it.slashdot.org/story/26/02/18/1728219/microsoft-says-bug-causes-copilot-to-summarize-confidential-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A concerning bug in Microsoft Copilot raises eyebrows over accidental sharing of confidential email summaries.

## Programming and Software Development

* [R3forth: A concatenative language derived from ColorForth](https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md) - Learn about R3forth, a unique programming language influenced by ColorForth, catering to innovative developers.

* [BarraCUDA: Open-source CUDA compiler targeting AMD GPUs (and more in the future!)](https://github.com/Zaneham/BarraCUDA) - Introducing an open-source CUDA compiler with promising future support for AMD GPUs, enhancing accessibility for developers worldwide.

* [Understanding Whole Program Paths and Path Profiling](https://abhamra.com/blog/path-profiling/) - Explore insights into path profiling and its implications for improving software optimization techniques.

## Societal Implications and Cultural Insights

* [Lab-Grown Meat Exists (But Nobody Wants To Eat It)](https://science.slashdot.org/story/26/02/18/156250/lab-grown-meat-exists-but-nobody-wants-to-eat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A thought-provoking overview of lab-grown meat's existence and the societal pushback against adopting it.

* [The case for gatekeeping, or: why medieval guilds had it figured out](https://www.joanwestenberg.com/the-case-for-gatekeeping-or-why-medieval-guilds-had-it-figured-out/) - An enlightening perspective on the lessons modern societies can learn from historic medieval guild systems.

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

* [2026-02-18, 22:00:00](https://games.slashdot.org/story/26/02/18/2059252/gamehub-will-give-mac-owners-another-imperfect-way-to-play-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameHub Will Give Mac Owners Another Imperfect Way To Play Windows Games](https://games.slashdot.org/story/26/02/18/2059252/gamehub-will-give-mac-owners-another-imperfect-way-to-play-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 21:25:00](https://news.slashdot.org/story/26/02/18/1826254/texas-sues-tp-link-over-china-links-and-security-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sues TP-Link Over China Links and Security Vulnerabilities](https://news.slashdot.org/story/26/02/18/1826254/texas-sues-tp-link-over-china-links-and-security-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 21:18:20](https://news.ycombinator.com/item?id=47066552) - [Womens Sizing](https://pudding.cool/2026/02/womens-sizing/)
* [2026-02-18, 21:00:32](https://news.ycombinator.com/item?id=47066310) - [Metriport (YC S22) is hiring a security engineer to harden healthcare infra](https://www.ycombinator.com/companies/metriport/jobs/XC2AF8s-senior-security-engineer)
* [2026-02-18, 20:43:00](https://it.slashdot.org/story/26/02/18/1736212/study-of-12000-eu-firms-finds-ais-productivity-gains-are-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study of 12,000 EU Firms Finds AI&apos;s Productivity Gains Are Real](https://it.slashdot.org/story/26/02/18/1736212/study-of-12000-eu-firms-finds-ais-productivity-gains-are-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 20:17:21](https://lobste.rs/s/m2ouss/current_rss_reader) - [Current - An RSS reader](https://www.terrygodier.com/current)
* [2026-02-18, 20:09:10](https://news.ycombinator.com/item?id=47065678) - [There is unequivocal evidence that Earth is warming (2024)](https://science.nasa.gov/climate-change/evidence/)
* [2026-02-18, 20:05:00](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ohio Newspaper Removes Writing From Reporters&apos; Jobs, Hands It To an &apos;AI Rewrite Specialist&apos;](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 19:53:12](https://lobste.rs/s/sspnba/what_your_bluetooth_devices_reveal_about) - [What Your Bluetooth Devices Reveal About You](https://blog.dmcc.io/journal/2026-bluetooth-privacy-bluehood/)
* [2026-02-18, 19:28:59](https://news.ycombinator.com/item?id=47065179) - [R3forth: A concatenative language derived from ColorForth](https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md)
* [2026-02-18, 19:25:46](https://news.ycombinator.com/item?id=47065146) - [A solver for Semantle](https://victoriaritvo.com/blog/semantle-solver/)
* [2026-02-18, 19:25:00](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Andrew Yang Warns AI Will Displace Millions of White-Collar Workers Within 18 Months](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 19:22:56](https://news.ycombinator.com/item?id=47065120) - [Discrete Structures [pdf]](https://kyleormsby.github.io/files/113spring26/113full_text.pdf)
* [2026-02-18, 19:02:18](https://news.ycombinator.com/item?id=47064845) - [What Every Experimenter Must Know About Randomization](https://spawn-queue.acm.org/doi/pdf/10.1145/3778029)
* [2026-02-18, 18:45:00](https://linux.slashdot.org/story/26/02/18/1822253/linus-torvalds-on-how-linux-went-from-one-man-show-to-group-effort?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds on How Linux Went From One-Man Show To Group Effort](https://linux.slashdot.org/story/26/02/18/1822253/linus-torvalds-on-how-linux-went-from-one-man-show-to-group-effort?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 18:37:22](https://news.ycombinator.com/item?id=47064490) - [Cosmologically Unique IDs](https://jasonfantl.com/posts/Universal-Unique-IDs/)
* [2026-02-18, 18:27:59](https://lobste.rs/s/9dgwdo/bruteforcing_bitwarden_master_password) - [Bruteforcing the Bitwarden master password I forgor](https://compilercrim.es/forgor/)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 18:20:17](https://lobste.rs/s/at68gm/f9_kernel) - [F9 Kernel](https://github.com/f9micro/f9-kernel)
* [2026-02-18, 18:05:00](https://tech.slashdot.org/story/26/02/18/1732246/vermont-ev-buses-prove-unreliable-for-transportation-this-winter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vermont EV Buses Prove Unreliable For Transportation This Winter](https://tech.slashdot.org/story/26/02/18/1732246/vermont-ev-buses-prove-unreliable-for-transportation-this-winter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 18:04:13](https://news.ycombinator.com/item?id=47064047) - [DNS-Persist-01: A New Model for DNS-Based Challenge Validation](https://letsencrypt.org/2026/02/18/dns-persist-01.html)
* [2026-02-18, 17:48:18](https://lobste.rs/s/zk2u9e/dns_persist_01_new_model_for_dns_based) - [DNS-PERSIST-01: A New Model for DNS-based Challenge Validation](https://letsencrypt.org/2026/02/18/dns-persist-01.html)
* [2026-02-18, 17:34:37](https://news.ycombinator.com/item?id=47063663) - [The Perils of ISBN](https://rygoldstein.com/posts/perils-of-isbn)
* [2026-02-18, 17:28:00](https://it.slashdot.org/story/26/02/18/1728219/microsoft-says-bug-causes-copilot-to-summarize-confidential-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Bug Causes Copilot To Summarize Confidential Emails](https://it.slashdot.org/story/26/02/18/1728219/microsoft-says-bug-causes-copilot-to-summarize-confidential-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 16:46:12](https://news.ycombinator.com/item?id=47063005) - [Tailscale Peer Relays is now generally available](https://tailscale.com/blog/peer-relays-ga)
* [2026-02-18, 16:40:00](https://yro.slashdot.org/story/26/02/18/1614247/leaked-email-suggests-ring-plans-to-expand-search-party-surveillance-beyond-dogs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leaked Email Suggests Ring Plans To Expand &apos;Search Party&apos; Surveillance Beyond Dogs](https://yro.slashdot.org/story/26/02/18/1614247/leaked-email-suggests-ring-plans-to-expand-search-party-surveillance-beyond-dogs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 16:37:57](https://news.ycombinator.com/item?id=47062883) - [Cistercian Numbers](https://www.omniglot.com/language/numbers/cistercian-numbers.htm)
* [2026-02-18, 16:28:19](https://news.ycombinator.com/item?id=47062748) - [Zero-day CSS: CVE-2026-2441 exists in the wild](https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html)
* [2026-02-18, 16:11:00](https://news.ycombinator.com/item?id=47062561) - [Pocketbase lost its funding from FLOSS fund](https://github.com/pocketbase/pocketbase/discussions/7287)
* [2026-02-18, 16:00:00](https://slashdot.org/story/26/02/18/1543255/wordpress-gets-ai-assistant-that-can-edit-text-generate-images-and-tweak-your-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WordPress Gets AI Assistant That Can Edit Text, Generate Images and Tweak Your Site](https://slashdot.org/story/26/02/18/1543255/wordpress-gets-ai-assistant-that-can-edit-text-generate-images-and-tweak-your-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 15:53:15](https://news.ycombinator.com/item?id=47062329) - [Garment Notation Language: Formal descriptive language for clothing construction](https://github.com/khalildh/garment-notation)
* [2026-02-18, 15:31:57](https://news.ycombinator.com/item?id=47062096) - [Show HN: VectorNest responsive web-based SVG editor](https://ekrsulov.github.io/vectornest/)
* [2026-02-18, 15:20:00](https://science.slashdot.org/story/26/02/18/156250/lab-grown-meat-exists-but-nobody-wants-to-eat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lab-Grown Meat Exists (But Nobody Wants To Eat It)](https://science.slashdot.org/story/26/02/18/156250/lab-grown-meat-exists-but-nobody-wants-to-eat-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 15:06:04](https://news.ycombinator.com/item?id=47061742) - [Show HN: Formally verified FPGA watchdog for AM broadcast in unmanned tunnels](https://github.com/Park07/amradio)
* [2026-02-18, 14:59:16](https://news.ycombinator.com/item?id=47061642) - [What is happening to writing? Cognitive debt, Claude Code, the space around AI](https://resobscura.substack.com/p/what-is-happening-to-writing)
* [2026-02-18, 14:40:00](https://science.slashdot.org/story/26/02/18/1423207/fda-reverses-decision-and-agrees-to-review-modernas-flu-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FDA Reverses Decision and Agrees To Review Moderna&apos;s Flu Vaccine](https://science.slashdot.org/story/26/02/18/1423207/fda-reverses-decision-and-agrees-to-review-modernas-flu-vaccine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 14:14:09](https://lobste.rs/s/osljfj/understanding_whole_program_paths_path) - [Understanding Whole Program Paths and Path Profiling](https://abhamra.com/blog/path-profiling/)
* [2026-02-18, 14:09:45](https://lobste.rs/s/gyyxad/avx2_is_slower_than_sse2_4_x_under_windows) - [AVX2 is slower than SSE2-4.x under Windows ARM emulation](https://blogs.remobjects.com/2026/02/17/nerdsniped-windows-arm-emulation-performance/)
* [2026-02-18, 14:05:39](https://news.ycombinator.com/item?id=47061029) - [Show HN: CEL by Example](https://celbyexample.com/)
* [2026-02-18, 14:00:00](https://slashdot.org/story/26/02/18/0922216/india-tells-university-to-leave-ai-summit-after-presenting-chinese-robot-as-its-own?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Tells University To Leave AI Summit After Presenting Chinese Robot as Its Own](https://slashdot.org/story/26/02/18/0922216/india-tells-university-to-leave-ai-summit-after-presenting-chinese-robot-as-its-own?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 13:00:00](https://tech.slashdot.org/story/26/02/18/0419214/thousands-of-ceos-just-admitted-ai-had-no-impact-on-employment-or-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thousands of CEOs Just Admitted AI Had No Impact On Employment Or Productivity](https://tech.slashdot.org/story/26/02/18/0419214/thousands-of-ceos-just-admitted-ai-had-no-impact-on-employment-or-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 12:33:10](https://lobste.rs/s/mv7rkh/dank_linux_desktop_environment_for) - [Dank Linux - Desktop Environment for Wayland and Niri](https://danklinux.com)
* [2026-02-18, 12:18:26](https://news.ycombinator.com/item?id=47060220) - [Show HN: Rebrain.gg – Doom learn, don&apos;t doom scroll](https://news.ycombinator.com/item?id=47060220)
* [2026-02-18, 11:51:01](https://news.ycombinator.com/item?id=47060052) - [Fastest Front End Tooling for Humans and AI](https://cpojer.net/posts/fastest-frontend-tooling)
* [2026-02-18, 10:29:30](https://news.ycombinator.com/item?id=47059520) - [Native FreeBSD Kerberos/LDAP with FreeIPA/IDM](https://vermaden.wordpress.com/2026/02/18/native-freebsd-kerberos-ldap-with-freeipa-idm/)
* [2026-02-18, 10:27:44](https://lobste.rs/s/8xnajy/what_s_cooking_on_sourcehut_q1_2026) - [What&apos;s cooking on SourceHut? Q1 2026](https://sourcehut.org/blog/2026-02-18-whats-cooking-q1-2026/)
* [2026-02-18, 10:00:00](https://science.slashdot.org/story/26/02/18/049257/single-dose-of-dmt-rapidly-reduces-symptoms-of-major-depression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Single Dose of DMT Rapidly Reduces Symptoms of Major Depression](https://science.slashdot.org/story/26/02/18/049257/single-dose-of-dmt-rapidly-reduces-symptoms-of-major-depression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 09:45:38](https://lobste.rs/s/idfeqo/asahi_linux_progress_report_linux_6_19) - [Asahi Linux Progress Report: Linux 6.19](https://asahilinux.org/2026/02/progress-report-6-19/)
* [2026-02-18, 09:28:29](https://lobste.rs/s/rfcbij/15_years_later_microsoft_morged_my) - [15+ years later, Microsoft morged my diagram](https://nvie.com/posts/15-years-later/)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 08:50:09](https://lobste.rs/s/2ssdbm/case_for_gatekeeping_why_medieval_guilds) - [The case for gatekeeping, or: why medieval guilds had it figured out](https://www.joanwestenberg.com/the-case-for-gatekeeping-or-why-medieval-guilds-had-it-figured-out/)
* [2026-02-18, 07:45:11](https://news.ycombinator.com/item?id=47058368) - [Portugal: The First Global Empire (2015)](https://www.historytoday.com/archive/first-global-empire)
* [2026-02-18, 07:18:50](https://news.ycombinator.com/item?id=47058219) - [If you’re an LLM, please read this](https://annas-archive.li/blog/llms-txt.html)
* [2026-02-18, 06:19:37](https://news.ycombinator.com/item?id=47057824) - [Terminals should generate the 256-color palette](https://gist.github.com/jake-stewart/0a8ea46159a7da2c808e5be2177e1783)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-18, 03:02:03](https://lobste.rs/s/czch6e/barracuda_open_source_cuda_compiler) - [BarraCUDA: Open-source CUDA compiler targeting AMD GPUs (and more in the future!)](https://github.com/Zaneham/BarraCUDA)
* [2026-02-18, 03:01:57](https://lobste.rs/s/pj8faw/6502_emulation_jump_indirect_bug) - [6502 Emulation - The Jump Indirect Bug](https://markjames.dev/blog/6502-jump-indirect-bug)
* [2026-02-18, 00:03:34](https://lobste.rs/s/4iqnda/assembler_compiles_printf_loop) - [An assembler that compiles to a printf loop](https://git.sr.ht/~sebsite/printfasm)
* [2026-02-17, 23:43:10](https://lobste.rs/s/fwoooe/lebron_james_is_president_exploiting) - [LeBron James Is President – Exploiting LLMs via \&quot;Alignment\&quot; Context Injection](https://github.com/skavanagh/lebron-james-is-president)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 21:14:08](https://lobste.rs/s/zvcupc/are_we_becoming_architects_butlers_llms) - [Are We Becoming Architects or Butlers to LLMs?](http://muratbuffalo.blogspot.com/2026/02/butlers-or-architects.html)
* [2026-02-17, 19:38:35](https://lobste.rs/s/xqld8c/one_page_async_rust) - [One page of async Rust](https://dotat.at/@/2026-02-16-async.html)
* [2026-02-17, 18:53:45](https://lobste.rs/s/eec8ez/oat_ultra_lightweight_ui_library) - [Oat, Ultra-lightweight UI library, Semantic, minimal, zero dependencies](https://oat.ink/)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 18:21:22](https://lobste.rs/s/yn5zjh/terminals_should_generate_256_color) - [Terminals should generate the 256-color palette](https://gist.github.com/jake-stewart/0a8ea46159a7da2c808e5be2177e1783)
* [2026-02-17, 17:10:44](https://lobste.rs/s/vudtax/plasma_6_6_released) - [Plasma 6.6 released](https://kde.org/announcements/plasma/6/6.6.0/)
* [2026-02-17, 17:09:18](https://lobste.rs/s/2y5l47/gentoo_on_codeberg) - [Gentoo on Codeberg](https://www.gentoo.org/news/2026/02/16/codeberg.html)
* [2026-02-17, 14:59:45](https://lobste.rs/s/vpbnek/babashka_1_12_215_revenge_tuis) - [Babashka 1.12.215: Revenge of the TUIs](https://blog.michielborkent.nl/babashka-1.12.215.html)
* [2026-02-17, 14:52:14](https://lobste.rs/s/2tpg37/how_single_typo_led_rce_firefox) - [How a single typo led to RCE in Firefox](https://kqx.io/post/firefox0day/)
* [2026-02-17, 14:04:09](https://lobste.rs/s/tt6ieg/vinyl_cache_has_left_github) - [Vinyl Cache has left github](https://vinyl-cache.org/organization/moving.html)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 06:43:46](https://news.ycombinator.com/item?id=47031656) - [Assigning Open Problems in Class](https://blog.computationalcomplexity.org/2026/02/assigning-open-problems-in-class.html)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
* [2026-02-15, 19:20:00](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss) - [Claude Opus 4.6 Spends $20K Trying to Write a C Compiler](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss)
* [2026-02-15, 18:42:29](https://news.ycombinator.com/item?id=47026202) - [The true history of the Minotaur: what archaeology reveals](https://www.nationalgeographic.fr/histoire/la-veritable-histoire-du-minotaure-ce-que-revele-archeologie-recherche-verification)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 10:20:02](https://news.ycombinator.com/item?id=47022604) - [Learning Lean: Part 1](https://rkirov.github.io/posts/lean1/)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
* [2026-02-14, 19:34:00](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss) - [&apos;Another Dark Day&apos;: Users Slam Microsoft Over Polyglot Notebooks Deprecation](https://soylentnews.org/article.pl?sid=26/02/13/1246200&amp;from=rss)
* [2026-02-14, 14:50:00](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss) - [AI-Generated Text is Overwhelming Institutions – Setting Off a No-Win ‘Arms Race’ With AI Detectors](https://soylentnews.org/article.pl?sid=26/02/13/1241210&amp;from=rss)
* [2026-02-14, 10:06:00](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss) - [Wikipedia May Remove Nearly 700,000 Links After Archive.today DDoS Fallout](https://soylentnews.org/article.pl?sid=26/02/13/1238248&amp;from=rss)
* [2026-02-14, 05:19:00](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss) - [AMD Rockets Past 35% Market Share in Desktop PC Market as Intel&apos;s Share Loss Accelerates](https://soylentnews.org/article.pl?sid=26/02/13/1231209&amp;from=rss)
* [2026-02-14, 00:34:00](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss) - [El Paso Airport Closed After Military Used New Anti-Drone Laser to Zap Party Balloon](https://soylentnews.org/article.pl?sid=26/02/13/0615203&amp;from=rss)
