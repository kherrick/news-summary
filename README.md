# [News Summary](https://kherrick.github.io/news-summary/)

## Space Exploration and Science

* [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Einstein Probe detects an X-ray flare from nearby star](https://phys.org/news/2025-12-einstein-probe-ray-flare-nearby.html)

* [UK company sends factory with 1,000C furnace into space](https://www.bbc.co.uk/news/articles/c62vx0pgyrgo)

## Security and Cyber Threats

* [Bypassing RP2350&apos;s Secure Boot](https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot)

* [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)

* [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/)

* [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)

* [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)

## Technology and Innovation

* [Tally – A tool to help agents classify your bank transactions](https://tallyai.money/)

* [IQuest-Coder: A new open-source code model beats Claude Sonnet 4.5 and GPT 5.1 [pdf]](https://github.com/IQuestLab/IQuest-Coder-V1/blob/main/papers/IQuest_Coder_Technical_Report.pdf)

* [Dell&apos;s XPS Brand May Return Just a Year After Being Retired, Report Claims](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Destination Driven Compilation](https://tailrecursion.com/~alan/Lisp/DestinationDrivenCompilation.html)

* [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)

## Programming and Development

* [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)

* [Was it really a Billion Dollar Mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)

* [TinyTinyTPU: 2×2 systolic-array TPU-style matrix-multiply unit deployed on FPGA](https://github.com/Alanma23/tinytinyTPU-co)

* [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)

* [GitHub – tomasf/Cadova: Swift DSL for parametric 3D modeling](https://github.com/tomasf/Cadova)

## Society and Policies

* [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Trump Signs Defense Bill Prohibiting China-Based Engineers in Pentagon IT Work](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)

* [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)

* [Ghana Tries To Regulate Online Prophecies](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environmental and Health Discoveries

* [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)

* [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)

* [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)

* [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-01-03, 12:07:39](https://lobste.rs/s/k36s0t/give_your_agentic_processes_name) - [Give your agentic processes a name](https://simonhartcher.com/posts/2025-12-31-give-your-agentic-processes-a-name)
* [2026-01-03, 12:01:00](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Half a Decade, the Russian Space Station Segment Stopped Leaking](https://science.slashdot.org/story/26/01/02/196256/after-half-a-decade-the-russian-space-station-segment-stopped-leaking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 11:52:38](https://lobste.rs/s/c8qkpe/bypassing_rp2350_s_secure_boot) - [Bypassing RP2350&apos;s Secure Boot](https://media.ccc.de/v/39c3-of-boot-vectors-and-double-glitches-bypassing-rp2350-s-secure-boot)
* [2026-01-03, 11:47:26](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026) - [Who&apos;s Hiring? Q1 2026](https://lobste.rs/s/9zqi2z/who_s_hiring_q1_2026)
* [2026-01-03, 11:26:59](https://news.ycombinator.com/item?id=46475376) - [Not for human consumption](https://vectorculture.substack.com/p/not-for-human-consumption)
* [2026-01-03, 11:02:33](https://news.ycombinator.com/item?id=46475218) - [Tally – A tool to help agents classify your bank transactions](https://tallyai.money/)
* [2026-01-03, 10:15:31](https://lobste.rs/s/jvqhlv/linux_kernel_security_work) - [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/)
* [2026-01-03, 09:30:00](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NYC Phone Ban Reveals Some Students Can&apos;t Read Clocks](https://news.slashdot.org/story/26/01/02/1919255/nyc-phone-ban-reveals-some-students-cant-read-clocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 09:05:32](https://lobste.rs/s/fdhsz0/freebsd_home_nas_part_2_introduction_pf) - [FreeBSD Home NAS, part 2: Introduction to the PF firewall](https://rtfm.co.ua/en/freebsd-home-nas-part-2-introduction-to-packet-filter-pf-firewall/)
* [2026-01-03, 08:31:24](https://lobste.rs/s/xxyfaq/kimwolf_botnet_is_stalking_your_local) - [The Kimwolf Botnet is Stalking Your Local Network](https://krebsonsecurity.com/2026/01/the-kimwolf-botnet-is-stalking-your-local-network/)
* [2026-01-03, 07:36:02](https://lobste.rs/s/o085u1/benchmarking_windows_against_itself) - [Benchmarking Windows Against Itself, From Windows XP To Windows 11](https://hackaday.com/2026/01/02/benchmarking-windows-against-itself-from-windows-xp-to-windows-11/)
* [2026-01-03, 06:35:21](https://news.ycombinator.com/item?id=46473348) - [Trump says Venezuela&apos;s Maduro captured after strikes](https://www.reuters.com/world/americas/loud-noises-heard-venezuela-capital-southern-area-without-electricity-2026-01-03/)
* [2026-01-03, 06:01:00](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Economic Inequality Does Not Equate To Poor Well-Being or Mental Health, Massive Meta-Analysis Finds](https://science.slashdot.org/story/26/01/02/1954229/economic-inequality-does-not-equate-to-poor-well-being-or-mental-health-massive-meta-analysis-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 04:22:29](https://news.ycombinator.com/item?id=46472772) - [Show HN: uvx ptn, scan a QR, get a terminal in your phone](https://github.com/lyehe/porterminal)
* [2026-01-03, 04:01:03](https://news.ycombinator.com/item?id=46472667) - [IQuest-Coder: A new open-source code model beats Claude Sonnet 4.5 and GPT 5.1 [pdf]](https://github.com/IQuestLab/IQuest-Coder-V1/blob/main/papers/IQuest_Coder_Technical_Report.pdf)
* [2026-01-03, 03:30:00](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell&apos;s XPS Brand May Return Just a Year After Being Retired, Report Claims](https://it.slashdot.org/story/26/01/02/192248/dells-xps-brand-may-return-just-a-year-after-being-retired-report-claims?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 02:38:06](https://news.ycombinator.com/item?id=46472230) - [Adventure 751 (1980)](https://bluerenga.blog/2026/01/01/adventure-751-1980/)
* [2026-01-03, 02:08:22](https://lobste.rs/s/opvscn/is_tree_sitter_good_enough_2022) - [Is tree-sitter good enough? (2022)](https://blog.jez.io/tree-sitter-limitations/)
* [2026-01-03, 02:01:17](https://lobste.rs/s/92vjrg/rubyevents_org_2025_wrapped_look_back_at) - [RubyEvents.org 2025 Wrapped - a look back at the Ruby community&apos;s year](https://www.rubyevents.org/wrapped)
* [2026-01-03, 01:30:00](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft CEO: Time To Move &apos;Beyond the Arguments of Slop vs Sophistication&apos;](https://slashdot.org/story/26/01/02/1851202/microsoft-ceo-time-to-move-beyond-the-arguments-of-slop-vs-sophistication?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-03, 01:29:09](https://news.ycombinator.com/item?id=46471784) - [Einstein Probe detects an X-ray flare from nearby star](https://phys.org/news/2025-12-einstein-probe-ray-flare-nearby.html)
* [2026-01-03, 01:18:07](https://news.ycombinator.com/item?id=46471712) - [A Basic Just-In-Time Compiler (2015)](https://nullprogram.com/blog/2015/03/19/)
* [2026-01-03, 00:15:47](https://news.ycombinator.com/item?id=46471199) - [2026 will be my year of the Linux desktop](https://xeiaso.net/notes/2026/year-linux-desktop/)
* [2026-01-03, 00:12:55](https://news.ycombinator.com/item?id=46471171) - [Show HN: Website that plays the lottery every second](https://lotteryeverysecond.lffl.me/)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
* [2026-01-02, 23:34:01](https://lobste.rs/s/hptqsw/how_html_changes_epub) - [How HTML changes in ePub](https://www.htmhell.dev/adventcalendar/2025/11/)
* [2026-01-02, 23:31:00](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MTV&apos;s Music-Only Channels Go Off the Air](https://entertainment.slashdot.org/story/26/01/02/1832200/mtvs-music-only-channels-go-off-the-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 22:14:29](https://lobste.rs/s/lifxkp/why_i_switched_away_from_zig_c3) - [Why I switched away from Zig to C3](https://lowbytefox.dev/blog/from-zig-to-c3/)
* [2026-01-02, 21:31:34](https://news.ycombinator.com/item?id=46469623) - [Linux kernel security work](http://www.kroah.com/log/blog/2026/01/02/linux-kernel-security-work/)
* [2026-01-02, 21:30:00](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Overviews Put People at Risk of Harm With Misleading Health Advice](https://tech.slashdot.org/story/26/01/02/188203/google-ai-overviews-put-people-at-risk-of-harm-with-misleading-health-advice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 21:27:44](https://news.ycombinator.com/item?id=46469577) - [Daft Punk Easter Egg in the BPM Tempo of Harder, Better, Faster, Stronger?](https://www.madebywindmill.com/tempi/blog/hbfs-bpm/)
* [2026-01-02, 21:12:14](https://lobste.rs/s/trudnc/state_server_2026) - [State of the Server 2026](https://theorangeone.net/posts/state-of-the-server-2026/)
* [2026-01-02, 20:01:00](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Signs Defense Bill Prohibiting China-Based Engineers in Pentagon IT Work](https://news.slashdot.org/story/26/01/02/182247/trump-signs-defense-bill-prohibiting-china-based-engineers-in-pentagon-it-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 19:48:25](https://news.ycombinator.com/item?id=46468600) - [Publish on your own site, syndicate elsewhere](https://indieweb.org/POSSE#)
* [2026-01-02, 19:39:38](https://news.ycombinator.com/item?id=46468517) - [Jank Lang Hit Alpha](https://github.com/jank-lang/jank)
* [2026-01-02, 19:36:30](https://lobste.rs/s/fcwjie/was_it_really_billion_dollar_mistake) - [Was it really a Billion Dollar Mistake?](https://www.gingerbill.org/article/2026/01/02/was-it-really-a-billion-dollar-mistake/)
* [2026-01-02, 19:18:36](https://news.ycombinator.com/item?id=46468283) - [Unix v4 (1973) – Live Terminal](https://unixv4.dev/)
* [2026-01-02, 19:18:00](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss) - [FDA Officially Confirms Kava is a Food Under Federal Law](https://soylentnews.org/article.pl?sid=25/12/31/190247&amp;from=rss)
* [2026-01-02, 19:13:24](https://news.ycombinator.com/item?id=46468237) - [TinyTinyTPU: 2×2 systolic-array TPU-style matrix-multiply unit deployed on FPGA](https://github.com/Alanma23/tinytinyTPU-co)
* [2026-01-02, 19:01:00](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Closes in on Intel in Latest Steam Hardware Survey](https://slashdot.org/story/26/01/02/1719244/amd-closes-in-on-intel-in-latest-steam-hardware-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 18:18:47](https://news.ycombinator.com/item?id=46467677) - [Fighting Fire with Fire: Scalable Oral Exams](https://www.behind-the-enemy-lines.com/2025/12/fighting-fire-with-fire-scalable-oral.html)
* [2026-01-02, 18:16:07](https://news.ycombinator.com/item?id=46467651) - [Accounting for Computer Scientists (2011)](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html)
* [2026-01-02, 18:01:00](https://news.slashdot.org/story/26/01/02/1649208/reading-is-a-vice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reading is a Vice](https://news.slashdot.org/story/26/01/02/1649208/reading-is-a-vice?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 17:23:34](https://lobste.rs/s/1lcrer/darktable_styles_mimicing_fujifilm_s) - [Darktable Styles mimicing Fujifilm&apos;s Film Simulations](https://jssfr.de/dtsolve/2026-01-02-darktable-styles-fujifilm.html)
* [2026-01-02, 17:22:04](https://news.ycombinator.com/item?id=46467057) - [Clicks Communicator](https://www.clicksphone.com/en/communicator)
* [2026-01-02, 17:01:00](https://news.slashdot.org/story/26/01/02/1542232/a-decade-of-bbc-question-time-data-reveals-imbalance-in-journalist-guests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Decade of BBC Question Time Data Reveals Imbalance in Journalist Guests](https://news.slashdot.org/story/26/01/02/1542232/a-decade-of-bbc-question-time-data-reveals-imbalance-in-journalist-guests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 16:56:19](https://news.ycombinator.com/item?id=46466734) - [The rsync algorithm (1996) [pdf]](https://www.andrew.cmu.edu/course/15-749/READINGS/required/cas/tridgell96.pdf)
* [2026-01-02, 16:51:28](https://lobste.rs/s/tdxrs5/releasing_fjall_3_0) - [Releasing Fjall 3.0](https://fjall-rs.github.io/post/fjall-3/)
* [2026-01-02, 16:09:05](https://lobste.rs/s/eulydi/which_programming_resource_changed_your) - [which programming resource changed your career?](https://lobste.rs/s/eulydi/which_programming_resource_changed_your)
* [2026-01-02, 16:00:42](https://news.ycombinator.com/item?id=46466074) - [Ask HN: Who is hiring? (January 2026)](https://news.ycombinator.com/item?id=46466074)
* [2026-01-02, 16:00:42](https://news.ycombinator.com/item?id=46466073) - [Ask HN: Who wants to be hired? (January 2026)](https://news.ycombinator.com/item?id=46466073)
* [2026-01-02, 16:00:00](https://tech.slashdot.org/story/26/01/02/1449227/results-were-fudged-departing-meta-ai-chief-confirms-llama-4-benchmark-manipulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Results Were Fudged&apos;: Departing Meta AI Chief Confirms Llama 4 Benchmark Manipulation](https://tech.slashdot.org/story/26/01/02/1449227/results-were-fudged-departing-meta-ai-chief-confirms-llama-4-benchmark-manipulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 15:49:33](https://lobste.rs/s/bdzmde/i_m_brave_enough_say_it_linux_is_good_now_if) - [I&apos;m brave enough to say it: Linux is good now, and if you want to feel like you actually own your PC, make 2026 the year of Linux on (your) desktop](https://www.pcgamer.com/software/linux/im-brave-enough-to-say-it-linux-is-good-now-and-if-you-want-to-feel-like-you-actually-own-your-pc-make-2026-the-year-of-linux-on-your-desktop/)
* [2026-01-02, 15:48:05](https://lobste.rs/s/lmjuup/accounting_for_computer_scientists_2011) - [Accounting for Computer Scientists (2011)](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html)
* [2026-01-02, 15:16:54](https://lobste.rs/s/olywvo/destination_driven_compilation) - [Destination Driven Compilation](https://tailrecursion.com/~alan/Lisp/DestinationDrivenCompilation.html)
* [2026-01-02, 15:01:00](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ghana Tries To Regulate Online Prophecies](https://tech.slashdot.org/story/26/01/02/0720202/ghana-tries-to-regulate-online-prophecies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 14:55:09](https://news.ycombinator.com/item?id=46465327) - [IPv6 just turned 30 and still hasn&apos;t taken over the world](https://www.theregister.com/2025/12/31/ipv6_at_30/)
* [2026-01-02, 14:35:00](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss) - [Irish Gov’t to Push for European Union to Ban Anonymous Social Media Accounts](https://soylentnews.org/article.pl?sid=25/12/31/1856202&amp;from=rss)
* [2026-01-02, 14:00:00](https://news.slashdot.org/story/26/01/02/074243/the-atlanta-journal-constitution-prints-final-newspaper-shifts-to-all-digital-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Atlanta Journal-Constitution Prints Final Newspaper, Shifts To All-Digital Format](https://news.slashdot.org/story/26/01/02/074243/the-atlanta-journal-constitution-prints-final-newspaper-shifts-to-all-digital-format?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 13:52:52](https://lobste.rs/s/0r8fgx/bespoke_software_is_future) - [Bespoke software is the future](https://fzakaria.com/2026/01/01/bespoke-software-is-the-future)
* [2026-01-02, 12:26:55](https://lobste.rs/s/lrx8vc/assorted_less_1_tips) - [Assorted less(1) tips](https://blog.thechases.com/posts/assorted-less-tips/)
* [2026-01-02, 12:00:00](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Nokia Went From iPhone Victim To $1 Billion Nvidia Deal](https://slashdot.org/story/26/01/02/070257/how-nokia-went-from-iphone-victim-to-1-billion-nvidia-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss) - [A Built-in Odometer: New Study Reveals How the Brain Measures Distance](https://soylentnews.org/article.pl?sid=25/12/31/1850201&amp;from=rss)
* [2026-01-02, 08:31:51](https://lobste.rs/s/8wl4s5/rust9x_update_rust_1_93_0_beta) - [Rust9x update: Rust 1.93.0-beta](https://seri.tools/blog/rust9x-1-93/)
* [2026-01-02, 06:27:00](https://lobste.rs/s/watv0s/10_years_personal_finances_plain_text) - [10 years of personal finances in plain text files](https://sgoel.dev/posts/10-years-of-personal-finances-in-plain-text-files/)
* [2026-01-02, 06:04:40](https://lobste.rs/s/844jrt/designing_type_safe_sync_async_mode) - [Designing type-safe sync/async mode support in TypeScript](https://hackers.pub/@hongminhee/2026/typescript-sync-async-type-safety)
* [2026-01-02, 05:05:00](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss) - [39C3: Multiple Vulnerabilities in GnuPG and Other Cryptographic Tools](https://soylentnews.org/article.pl?sid=25/12/31/1846257&amp;from=rss)
* [2026-01-02, 00:21:00](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss) - [Funding Agencies Can End Profit-First Science Publishing](https://soylentnews.org/article.pl?sid=25/12/31/1843231&amp;from=rss)
* [2026-01-01, 20:29:24](https://lobste.rs/s/ari1nd/reasons_love_field_programming) - [Reasons to Love the Field of Programming Languages](https://danilafe.com/blog/i_love_programming_languages/)
* [2026-01-01, 19:38:00](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss) - [Aging Immune Cells May Rewrite Their Own DNA to Stay Inflammatory](https://soylentnews.org/article.pl?sid=25/12/31/029210&amp;from=rss)
* [2026-01-01, 14:46:00](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss) - [Bye-Bye Microplastics: New Plastic is Recyclable and Fully Ocean-Degradable](https://soylentnews.org/article.pl?sid=25/12/31/027237&amp;from=rss)
* [2026-01-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss) - [D7VK Reaches Version 1.1 and Adds New Frontend and Experimental Direct3D 6 Support](https://soylentnews.org/article.pl?sid=25/12/31/026206&amp;from=rss)
* [2026-01-01, 10:02:00](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss) - [Study Reveals Just How Much AI Slop is on YouTube](https://soylentnews.org/article.pl?sid=25/12/31/022234&amp;from=rss)
* [2026-01-01, 05:15:00](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss) - [US Insurance Giant Aflac Says Hackers Stole Personal and Health Data of 22.6 Million People](https://soylentnews.org/article.pl?sid=25/12/31/020219&amp;from=rss)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 13:00:42](https://news.ycombinator.com/item?id=46443730) - [A Beginner&apos;s Two-Component Crystal-Style Wi-Fi Detector](https://siliconjunction.wordpress.com/2025/12/12/a-beginners-two-component-crystal-style-wi-fi-detector/)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 09:16:58](https://news.ycombinator.com/item?id=46442624) - [GitHub – tomasf/Cadova: Swift DSL for parametric 3D modeling](https://github.com/tomasf/Cadova)
* [2025-12-31, 08:04:30](https://news.ycombinator.com/item?id=46442293) - [UK company sends factory with 1,000C furnace into space](https://www.bbc.co.uk/news/articles/c62vx0pgyrgo)
* [2025-12-31, 07:44:25](https://news.ycombinator.com/item?id=46442229) - [The Cost of a Closure in C: The Rest](https://thephd.dev/the-cost-of-a-closure-in-c-c2y-followup)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
