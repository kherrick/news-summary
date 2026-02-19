# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - Researchers have developed a fluid capable of storing solar energy and releasing it months later as heat, representing a breakthrough in renewable energy storage.

* [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - John Carmack introduces a novel concept of using fiber-optic loops as a high-speed AI cache to enhance computational performance.

* [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - Japanese scientists unveil a breakthrough in 3D printing technology by successfully developing a method to print tungsten carbide components.

## Artificial Intelligence and Its Impacts

* [Ohio Newspaper Removes Writing From Reporters' Jobs, Hands It To an 'AI Rewrite Specialist'](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An Ohio newspaper delegates reporter-writing to a new 'AI Rewrite Specialist,' showcasing the growing influence of AI on traditional professions.

* [Andrew Yang Warns AI Will Displace Millions of White-Collar Workers Within 18 Months](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Andrew Yang cautions that artificial intelligence advancements may lead to the loss of millions of white-collar jobs in the near future.

* [Meta Begins $65 Million Election Push To Advance AI Agenda](https://politics.slashdot.org/story/26/02/18/2126220/meta-begins-65-million-election-push-to-advance-ai-agenda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta launches a significant campaign to influence elections and promote its AI-focused initiatives.

* [How AI is affecting productivity and jobs in Europe](https://cepr.org/voxeu/columns/how-ai-affecting-productivity-and-jobs-europe) - Exploring the impact of artificial intelligence on labor productivity and employment trends across Europe.

## Innovative Projects and Startups

* [Stoolap/Node: A Native Node.js Driver That's Surprisingly Fast](https://stoolap.io/blog/2026/02/19/introducing-stoolap-node/) - Discover Stoolap/Node, a fast native Node.js driver that could revolutionize software development speed and performance.

* [Self-hosting my websites using bootable containers](https://yorickpeterse.com/articles/self-hosting-my-websites-using-bootable-containers/) - A technical case study of hosting personal websites through bootable containers.

* [Ditching Discord](https://wiki.alopex.li/DitchingDiscord) - A guide explaining the reasons and methods for moving off Discord in favor of alternative communication platforms.

## Environmental and Space News

* [EPA Faces First Lawsuit Over Its Killing of Major Climate Rule](https://yro.slashdot.org/story/26/02/19/0034254/epa-faces-first-lawsuit-over-its-killing-of-major-climate-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The EPA is sued after dismantling an influential climate regulation aimed at environmental conservation.

* [Trump Has Prepared Speech On Extraterrestrial Life](https://entertainment.slashdot.org/story/26/02/19/016247/trump-has-prepared-speech-on-extraterrestrial-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Former President Trump reportedly prepares a speech addressing the potential existence of extraterrestrial life.

## Security and Ethical Concerns

* [Texas Sues TP-Link Over China Links and Security Vulnerabilities](https://news.slashdot.org/story/26/02/18/1826254/texas-sues-tp-link-over-china-links-and-security-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The state of Texas files a lawsuit against TP-Link citing alleged ties to China and significant security lapses.

* [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - A groundbreaking cybersecurity exploit leverages nslookup to compromise systems using the DNS protocol.

* [How openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds](https://vmfunc.re/blog/persona/) - A critical analysis of collaboration between OpenAI, the US government, and persona in creating surveillance technologies.

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

* [2026-02-19, 07:00:00](https://entertainment.slashdot.org/story/26/02/19/016247/trump-has-prepared-speech-on-extraterrestrial-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Has Prepared Speech On Extraterrestrial Life](https://entertainment.slashdot.org/story/26/02/19/016247/trump-has-prepared-speech-on-extraterrestrial-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 06:41:14](https://news.ycombinator.com/item?id=47070658) - [US funding for global internet freedom &apos;effectively gutted&apos;](https://www.theguardian.com/world/2026/feb/19/us-funding-for-global-internet-freedom-effectively-gutted)
* [2026-02-19, 06:09:58](https://news.ycombinator.com/item?id=47070446) - [Stoolap/Node: A Native Node.js Driver That&apos;s Surprisingly Fast](https://stoolap.io/blog/2026/02/19/introducing-stoolap-node/)
* [2026-02-19, 05:07:37](https://news.ycombinator.com/item?id=47070142) - [European Tech Alternatives](https://eutechmap.com/map)
* [2026-02-19, 04:19:20](https://news.ycombinator.com/item?id=47069876) - [Show HN: A Lisp where each function call runs a Docker container](https://github.com/a11ce/docker-lisp)
* [2026-02-19, 04:16:08](https://lobste.rs/s/fe3ecz/monitoring_data_dependent_temporal) - [Monitoring Data-Dependent Temporal Patterns](https://imiron.io/post/fotl/)
* [2026-02-19, 03:59:29](https://lobste.rs/s/j73dzq/c_26_std_is_within_lifetime) - [C++26: std::is_within_lifetime](https://www.sandordargo.com/blog/2026/02/18/cpp26-std_is_within_lifetime)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-19, 03:46:07](https://news.ycombinator.com/item?id=47069650) - [Electrobun v1: Build fast, tiny, and cross-platform desktop apps with TypeScript](https://blackboard.sh/blog/electrobun-v1/)
* [2026-02-19, 03:30:00](https://yro.slashdot.org/story/26/02/19/0034254/epa-faces-first-lawsuit-over-its-killing-of-major-climate-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Faces First Lawsuit Over Its Killing of Major Climate Rule](https://yro.slashdot.org/story/26/02/19/0034254/epa-faces-first-lawsuit-over-its-killing-of-major-climate-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 02:52:26](https://news.ycombinator.com/item?id=47069299) - [Anthropic officially bans using subscription auth for third party use](https://code.claude.com/docs/en/legal-and-compliance)
* [2026-02-19, 02:32:00](https://news.ycombinator.com/item?id=47069179) - [Step 3.5 Flash: Fast Enough to Think. Reliable Enough to Act](https://static.stepfun.com/blog/step-3.5-flash/)
* [2026-02-19, 01:55:33](https://news.ycombinator.com/item?id=47068948) - [Minecraft Java is switching from OpenGL to Vulkan](https://www.gamingonlinux.com/2026/02/minecraft-java-is-switching-from-opengl-to-vulkan-for-the-vibrant-visuals-update/)
* [2026-02-19, 01:46:07](https://news.ycombinator.com/item?id=47068890) - [15 years of FP64 segmentation, and why the Blackwell Ultra breaks the pattern](https://nicolasdickenmann.com/blog/the-great-fp64-divide.html)
* [2026-02-19, 01:25:00](https://tech.slashdot.org/story/26/02/19/0026202/uber-putting-100-million-into-ev-charging-for-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Putting $100 Million into EV Charging for Robotaxis](https://tech.slashdot.org/story/26/02/19/0026202/uber-putting-100-million-into-ev-charging-for-robotaxis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 01:09:04](https://lobste.rs/s/yyqxg6/how_openai_us_government_persona_built) - [how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds](https://vmfunc.re/blog/persona/)
* [2026-02-19, 00:55:30](https://lobste.rs/s/qvjp07/ditching_discord) - [Ditching Discord](https://wiki.alopex.li/DitchingDiscord)
* [2026-02-19, 00:47:39](https://lobste.rs/s/3h5gd4/cel_by_example) - [CEL by Example](https://celbyexample.com)
* [2026-02-19, 00:45:00](https://tech.slashdot.org/story/26/02/18/2152215/googles-pixel-10a-is-the-same-damn-phone-as-the-pixel-9a?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Pixel 10a Is the Same Damn Phone As the Pixel 9a](https://tech.slashdot.org/story/26/02/18/2152215/googles-pixel-10a-is-the-same-damn-phone-as-the-pixel-9a?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 00:22:45](https://news.ycombinator.com/item?id=47068320) - [How AI is affecting productivity and jobs in Europe](https://cepr.org/voxeu/columns/how-ai-affecting-productivity-and-jobs-europe)
* [2026-02-19, 00:02:00](https://politics.slashdot.org/story/26/02/18/2126220/meta-begins-65-million-election-push-to-advance-ai-agenda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Begins $65 Million Election Push To Advance AI Agenda](https://politics.slashdot.org/story/26/02/18/2126220/meta-begins-65-million-election-push-to-advance-ai-agenda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-19, 00:01:29](https://lobste.rs/s/axp2rt/self_hosting_my_websites_using_bootable) - [Self-hosting my websites using bootable containers](https://yorickpeterse.com/articles/self-hosting-my-websites-using-bootable-containers/)
* [2026-02-18, 23:20:08](https://lobste.rs/s/es58bi/rust_on_cheriot_status_update_0) - [Rust on CHERIoT: Status update #0](https://rust.cheriot.org/2026/02/15/status-update.html)
* [2026-02-18, 23:20:00](https://yro.slashdot.org/story/26/02/18/2116205/mark-zuckerberg-testifies-during-landmark-trial-on-social-media-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Testifies During Landmark Trial On Social Media Addiction](https://yro.slashdot.org/story/26/02/18/2116205/mark-zuckerberg-testifies-during-landmark-trial-on-social-media-addiction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 23:12:09](https://lobste.rs/s/shh36u/top_20_worldwide_with_social_engineering) - [Top 20 worldwide with social-engineering and a cheat that&apos;s still undetected](https://ud2.rip/blog/vsrg/)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 22:48:03](https://news.ycombinator.com/item?id=47067498) - [All Look Same?](https://alllooksame.com/)
* [2026-02-18, 22:47:44](https://news.ycombinator.com/item?id=47067496) - [Martial arts robots at 2026 Spring Festival Gala [video]](https://www.youtube.com/watch?v=mUmlv814aJo)
* [2026-02-18, 22:40:00](https://entertainment.slashdot.org/story/26/02/18/215200/googles-ai-music-maker-is-coming-to-the-gemini-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Music Maker Is Coming To the Gemini App](https://entertainment.slashdot.org/story/26/02/18/215200/googles-ai-music-maker-is-coming-to-the-gemini-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 22:34:38](https://lobste.rs/s/rrlcfb/why_i_don_t_think_agi_is_imminent) - [Why I don&apos;t think AGI is imminent](https://dlants.me/agi-not-imminent.html)
* [2026-02-18, 22:21:39](https://lobste.rs/s/zpifkh/notes_on_clarifying_man_pages) - [Notes on clarifying man pages](https://jvns.ca/blog/2026/02/18/man-pages/)
* [2026-02-18, 22:00:00](https://games.slashdot.org/story/26/02/18/2059252/gamehub-will-give-mac-owners-another-imperfect-way-to-play-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameHub Will Give Mac Owners Another Imperfect Way To Play Windows Games](https://games.slashdot.org/story/26/02/18/2059252/gamehub-will-give-mac-owners-another-imperfect-way-to-play-windows-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 21:25:00](https://news.slashdot.org/story/26/02/18/1826254/texas-sues-tp-link-over-china-links-and-security-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sues TP-Link Over China Links and Security Vulnerabilities](https://news.slashdot.org/story/26/02/18/1826254/texas-sues-tp-link-over-china-links-and-security-vulnerabilities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 21:23:46](https://lobste.rs/s/mzfdcf/130k_lines_formal_topology_two_weeks) - [130k Lines of Formal Topology in Two Weeks: Simple and Cheap Autoformalization for Everyone?](https://arxiv.org/abs/2601.03298)
* [2026-02-18, 21:18:20](https://news.ycombinator.com/item?id=47066552) - [Sizing chaos](https://pudding.cool/2026/02/womens-sizing/)
* [2026-02-18, 21:00:32](https://news.ycombinator.com/item?id=47066310) - [Metriport (YC S22) is hiring a security engineer to harden healthcare infra](https://www.ycombinator.com/companies/metriport/jobs/XC2AF8s-senior-security-engineer)
* [2026-02-18, 20:54:31](https://news.ycombinator.com/item?id=47066241) - [27-year-old Apple iBooks can connect to Wi-Fi and download official updates](https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/)
* [2026-02-18, 20:43:00](https://it.slashdot.org/story/26/02/18/1736212/study-of-12000-eu-firms-finds-ais-productivity-gains-are-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study of 12,000 EU Firms Finds AI&apos;s Productivity Gains Are Real](https://it.slashdot.org/story/26/02/18/1736212/study-of-12000-eu-firms-finds-ais-productivity-gains-are-real?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 20:17:21](https://lobste.rs/s/m2ouss/current_rss_reader) - [Current - An RSS reader](https://www.terrygodier.com/current)
* [2026-02-18, 20:05:00](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ohio Newspaper Removes Writing From Reporters&apos; Jobs, Hands It To an &apos;AI Rewrite Specialist&apos;](https://news.slashdot.org/story/26/02/18/1746206/ohio-newspaper-removes-writing-from-reporters-jobs-hands-it-to-an-ai-rewrite-specialist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-18, 19:53:12](https://lobste.rs/s/sspnba/what_your_bluetooth_devices_reveal_about) - [What Your Bluetooth Devices Reveal About You](https://blog.dmcc.io/journal/2026-bluetooth-privacy-bluehood/)
* [2026-02-18, 19:28:59](https://news.ycombinator.com/item?id=47065179) - [R3forth: A concatenative language derived from ColorForth](https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md)
* [2026-02-18, 19:25:00](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Andrew Yang Warns AI Will Displace Millions of White-Collar Workers Within 18 Months](https://news.slashdot.org/story/26/02/18/1740202/andrew-yang-warns-ai-will-displace-millions-of-white-collar-workers-within-18-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2026-02-18, 16:28:19](https://news.ycombinator.com/item?id=47062748) - [Zero-day CSS: CVE-2026-2441 exists in the wild](https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html)
* [2026-02-18, 14:09:45](https://lobste.rs/s/gyyxad/avx2_is_slower_than_sse2_4_x_under_windows) - [AVX2 is slower than SSE2-4.x under Windows ARM emulation](https://blogs.remobjects.com/2026/02/17/nerdsniped-windows-arm-emulation-performance/)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 12:18:26](https://news.ycombinator.com/item?id=47060220) - [Show HN: Rebrain.gg – Doom learn, don&apos;t doom scroll](https://news.ycombinator.com/item?id=47060220)
* [2026-02-18, 10:27:44](https://lobste.rs/s/8xnajy/what_s_cooking_on_sourcehut_q1_2026) - [What&apos;s cooking on SourceHut? Q1 2026](https://sourcehut.org/blog/2026-02-18-whats-cooking-q1-2026/)
* [2026-02-18, 09:45:38](https://lobste.rs/s/idfeqo/asahi_linux_progress_report_linux_6_19) - [Asahi Linux Progress Report: Linux 6.19](https://asahilinux.org/2026/02/progress-report-6-19/)
* [2026-02-18, 09:28:29](https://lobste.rs/s/rfcbij/15_years_later_microsoft_morged_my) - [15+ years later, Microsoft morged my diagram](https://nvie.com/posts/15-years-later/)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 08:50:09](https://lobste.rs/s/2ssdbm/case_for_gatekeeping_why_medieval_guilds) - [The case for gatekeeping, or: why medieval guilds had it figured out](https://www.joanwestenberg.com/the-case-for-gatekeeping-or-why-medieval-guilds-had-it-figured-out/)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 19:38:35](https://lobste.rs/s/xqld8c/one_page_async_rust) - [One page of async Rust](https://dotat.at/@/2026-02-16-async.html)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 18:21:22](https://lobste.rs/s/yn5zjh/terminals_should_generate_256_color) - [Terminals should generate the 256-color palette](https://gist.github.com/jake-stewart/0a8ea46159a7da2c808e5be2177e1783)
* [2026-02-17, 17:10:44](https://lobste.rs/s/vudtax/plasma_6_6_released) - [Plasma 6.6 released](https://kde.org/announcements/plasma/6/6.6.0/)
* [2026-02-17, 17:09:18](https://lobste.rs/s/2y5l47/gentoo_on_codeberg) - [Gentoo on Codeberg](https://www.gentoo.org/news/2026/02/16/codeberg.html)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
* [2026-02-16, 23:43:00](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss) - [Why Are Criminals Stealing Used Cooking Oil From Scotland&apos;s Chip Shops?](https://soylentnews.org/article.pl?sid=26/02/14/0525257&amp;from=rss)
* [2026-02-16, 18:58:00](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss) - [John Carmack Proposes Fiber-Optic Loops as High-Speed AI Cache](https://soylentnews.org/article.pl?sid=26/02/14/0521202&amp;from=rss)
* [2026-02-16, 18:05:45](https://news.ycombinator.com/item?id=47038132) - [Making the Vortex Mixer](https://www.asimov.press/p/vortex)
* [2026-02-16, 14:12:00](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss) - [Europe&apos;s $24 Trillion Breakup With Visa and Mastercard](https://soylentnews.org/politics/article.pl?sid=26/02/14/0514214&amp;from=rss)
* [2026-02-16, 09:31:00](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss) - [Ubisoft Workers Strike in Protest of Job Cuts and Return-to-Office Mandate](https://soylentnews.org/article.pl?sid=26/02/14/0455240&amp;from=rss)
* [2026-02-16, 04:45:00](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss) - [Anthropic Launches New Model That Spots Zero Days](https://soylentnews.org/article.pl?sid=26/02/14/0452212&amp;from=rss)
* [2026-02-16, 00:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss) - [Astronomers Discover the Surprising Reason for a Star&apos;s Disappearance](https://soylentnews.org/article.pl?sid=26/02/14/0517216&amp;from=rss)
* [2026-02-16, 00:01:00](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss) - [Happy Birthday SoylentNews - 12 Years Old!](https://soylentnews.org/article.pl?sid=26/02/13/1649236&amp;from=rss)
* [2026-02-15, 23:20:04](https://news.ycombinator.com/item?id=47028803) - [Visualizing the ARM64 Instruction Set (2024)](https://zyedidia.github.io/blog/posts/6-arm64/)
* [2026-02-15, 19:20:00](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss) - [Claude Opus 4.6 Spends $20K Trying to Write a C Compiler](https://soylentnews.org/article.pl?sid=26/02/14/014205&amp;from=rss)
* [2026-02-15, 18:07:44](https://news.ycombinator.com/item?id=47025885) - [How to choose between Hindley-Milner and bidirectional typing](https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/)
* [2026-02-15, 15:44:11](https://news.ycombinator.com/item?id=47024585) - [Making a font with ligatures to display thirteenth-century monk numerals](https://digitalseams.com/blog/making-a-font-with-9999-ligatures-to-display-thirteenth-century-monk-numerals)
* [2026-02-15, 14:35:00](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss) - [5 Linux Servers That Let You Ditch the Public Cloud and Reclaim Your Privacy](https://soylentnews.org/article.pl?sid=26/02/14/0057218&amp;from=rss)
* [2026-02-15, 13:14:56](https://news.ycombinator.com/item?id=47023401) - [Show HN: Respectlytics – Open-source, privacy-first mobile analytics (MIT+AGPL)](https://github.com/respectlytics/respectlytics)
* [2026-02-15, 10:40:49](https://news.ycombinator.com/item?id=47022704) - [A Pokémon of a Different Color](https://matthew.verive.me/blog/color/)
* [2026-02-15, 10:20:02](https://news.ycombinator.com/item?id=47022604) - [Learning Lean: Part 1](https://rkirov.github.io/posts/lean1/)
* [2026-02-15, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss) - [Hiroshima Scientists Crack the Code for 3D Printing Tungsten Carbide](https://soylentnews.org/article.pl?sid=26/02/14/0053238&amp;from=rss)
* [2026-02-15, 05:11:00](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss) - [Ford Posts $11.1 Billion Net Loss in Fourth Quarter as EV Losses, Tariffs Weigh](https://soylentnews.org/article.pl?sid=26/02/14/0052214&amp;from=rss)
* [2026-02-15, 00:10:00](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss) - [We Finally Know How the Most Common Types of Planets Are Created](https://soylentnews.org/article.pl?sid=26/02/14/0050248&amp;from=rss)
