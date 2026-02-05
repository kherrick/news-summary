# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Company as Code](https://blog.42futures.com/p/company-as-code) - A blog post discusses the concept of running a company as if it's a software-defined entity. [Comments](https://news.ycombinator.com/item?id=46899132)

* [Battle-Testing Lynx at Allegro](https://blog.allegro.tech/2026/02/battle-testing-lynx-js-at-allegro.html) - Allegro reveals their testing experience with Lynx.js and shares insights on improving resilience. [Comments](https://news.ycombinator.com/item?id=46897810)

* [Microsoft Adds Sysmon To Windows](https://tech.slashdot.org/story/26/02/05/0023249/microsoft-adds-sysmon-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft enhances Windows diagnostics by including Sysmon as a native feature. [Comments](https://news.ycombinator.com/item?id=46893970)

* [Slint 1.15 Released](https://slint.dev/blog/slint-1.15-released) - Announcement of the release of version 1.15 of the GUI toolkit Slint. [Comments](https://lobste.rs/s/0om9ct/slint_1_15_released)

* [Sqldef: Idempotent schema management tool for MySQL, PostgreSQL, SQLite](https://sqldef.github.io/) - Explore a tool designed for simplified, version-controlled schema management for databases. [Comments](https://news.ycombinator.com/item?id=46845239)

* [Say Hello To GoogleSQL](https://developers.slashdot.org/story/26/02/04/075248/say-hello-to-googlesql?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion on Google's release of a new database query language. [Comments](https://developers.slashdot.org/story/26/02/04/075248/say-hello-to-googlesql?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Machine Learning

* [AI is killing B2B SaaS](https://nmn.gl/blog/ai-killing-b2b-saas) - A thought-provoking perspective on how AI is shifting the dynamics of business-to-business software. [Comments](https://news.ycombinator.com/item?id=46888441)

* [Anthropic Pledges To Keep Claude Ad-free, Calls AI Conversations a 'Space To Think'](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The AI company commits to maintaining an advertisement-free chatbot experience. [Comments](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space and Science

* [NASA Assembling a Formal Anomaly Review Board for Maven](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss) - NASA takes steps to investigate anomalies in the Maven mission. [Comments](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss)

* [Voyager 2's Close Encounter With Uranus Wasn't in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - Retrospective on how NASA's Voyager 2 mission improvised during its Uranus exploration. [Comments](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)

## Cybersecurity and Privacy

* [Top downloaded skill in ClawHub contains malware](https://1password.com/blog/from-magic-to-malware-how-openclaws-agent-skills-become-an-attack-surface) - Analysis of malware-laden OpenClaw downloads. [Comments](https://news.ycombinator.com/item?id=46898615)

* [When internal hostnames are leaked to the clown](https://rachelbythebay.com/w/2026/02/03/badnas/) - Exploring security pitfalls when internal server names are exposed externally. [Comments](https://news.ycombinator.com/item?id=46895972)

## Cultural and Unique Innovations

* [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - A deep dive into how microorganisms influence coffee flavors. [Comments](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)

* [An interactive version of Byrne's The Elements of Euclid (1847)](https://c82.net/euclid/) - A digital recreation of an iconic 19th-century geometry book. [Comments](https://news.ycombinator.com/item?id=46867018)

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

* [2026-02-05, 12:56:28](https://news.ycombinator.com/item?id=46899132) - [Company as Code](https://blog.42futures.com/p/company-as-code)
* [2026-02-05, 12:53:12](https://news.ycombinator.com/item?id=46899100) - [CIA to Sunset the World Factbook](https://www.abc.net.au/news/2026-02-05/cia-closes-world-factbook-online-resource/106307724)
* [2026-02-05, 12:30:00](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Claims &apos;Extortion,&apos; Then Recants in Feud Over User Losses](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 12:27:04](https://lobste.rs/s/1xyudo/we_are_qa_engineers_now) - [We are QA Engineers now](https://serce.me/posts/2026-02-05-we-are-qa-engineers-now)
* [2026-02-05, 12:25:44](https://lobste.rs/s/j2mblu/fosdem_26_my_hallway_track_takeaways) - [FOSDEM 26 - My Hallway Track Takeaways](https://sluongng.substack.com/p/fosdem-26-my-hallway-track-takeaways)
* [2026-02-05, 12:00:03](https://news.ycombinator.com/item?id=46898713) - [Freshpaint (YC S19) Is Hiring a Senior SWE, Data](https://www.freshpaint.io/about?ashby_jid=3a7926ba-cf51-4084-9196-4361a7e97761)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 11:45:03](https://news.ycombinator.com/item?id=46898615) - [Top downloaded skill in ClawHub contains malware](https://1password.com/blog/from-magic-to-malware-how-openclaws-agent-skills-become-an-attack-surface)
* [2026-02-05, 11:11:38](https://lobste.rs/s/rsm7xh/getting_main_thing_right) - [Getting the main thing right](https://www.seangoedecke.com/getting-the-main-thing-right/)
* [2026-02-05, 10:46:57](https://news.ycombinator.com/item?id=46898223) - [The Missing Layer](https://yagmin.com/blog/the-missing-layer/)
* [2026-02-05, 10:30:00](https://entertainment.slashdot.org/story/26/02/05/0839245/china-has-seized-sonys-television-halo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Has Seized Sony&apos;s Television Halo](https://entertainment.slashdot.org/story/26/02/05/0839245/china-has-seized-sonys-television-halo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 09:50:57](https://lobste.rs/s/lydge6/so_yeah_i_vibe_coded_log_colorizer_i_feel) - [So yeah, I vibe-coded a log colorizer—and I feel good about it](https://arstechnica.com/features/2026/02/so-yeah-i-vibe-coded-a-log-colorizer-and-i-feel-good-about-it/)
* [2026-02-05, 09:49:23](https://news.ycombinator.com/item?id=46897810) - [Battle-Testing Lynx at Allegro](https://blog.allegro.tech/2026/02/battle-testing-lynx-js-at-allegro.html)
* [2026-02-05, 09:39:11](https://news.ycombinator.com/item?id=46897737) - [Nanobot: Ultra-Lightweight Alternative to OpenClaw](https://github.com/HKUDS/nanobot)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 08:46:13](https://news.ycombinator.com/item?id=46897332) - [Show HN: Micropolis/SimCity Clone in Emacs Lisp](https://github.com/vkazanov/elcity)
* [2026-02-05, 08:45:48](https://lobste.rs/s/hjytin/on_craft_ai) - [On craft and AI](https://slightknack.dev/daily/2026-02-04/)
* [2026-02-05, 08:00:00](https://it.slashdot.org/story/26/02/05/0445243/munich-makes-digital-sovereignty-measurable-with-its-own-score?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Munich Makes Digital Sovereignty Measurable With Its Own Score](https://it.slashdot.org/story/26/02/05/0445243/munich-makes-digital-sovereignty-measurable-with-its-own-score?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 06:34:35](https://lobste.rs/s/0om9ct/slint_1_15_released) - [Slint 1.15 Released](https://slint.dev/blog/slint-1.15-released)
* [2026-02-05, 06:16:57](https://lobste.rs/s/9vtidf/customizable_nice_select) - [Customizable Nice &lt;select&gt;](https://nerdy.dev/nice-select)
* [2026-02-05, 05:50:01](https://news.ycombinator.com/item?id=46896146) - [Don&apos;t rent the cloud, own instead](https://blog.comma.ai/datacenter/)
* [2026-02-05, 05:22:36](https://news.ycombinator.com/item?id=46895972) - [When internal hostnames are leaked to the clown](https://rachelbythebay.com/w/2026/02/03/badnas/)
* [2026-02-05, 05:00:00](https://it.slashdot.org/story/26/02/05/0030225/valves-steam-machine-has-been-delayed-and-the-ram-crisis-will-impact-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve&apos;s Steam Machine Has Been Delayed, and the RAM Crisis Will Impact Pricing](https://it.slashdot.org/story/26/02/05/0030225/valves-steam-machine-has-been-delayed-and-the-ram-crisis-will-impact-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-05, 03:39:43](https://news.ycombinator.com/item?id=46895388) - [A few CPU hardware bugs](https://www.taricorp.net/2026/a-few-cpu-bugs/)
* [2026-02-05, 03:38:26](https://news.ycombinator.com/item?id=46895381) - [Wirth&apos;s Revenge](https://jmoiron.net/blog/wirths-revenge/)
* [2026-02-05, 02:00:00](https://tech.slashdot.org/story/26/02/05/0036222/bmw-commits-to-subscriptions-even-after-heated-seat-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BMW Commits To Subscriptions Even After Heated Seat Debacle](https://tech.slashdot.org/story/26/02/05/0036222/bmw-commits-to-subscriptions-even-after-heated-seat-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 01:17:49](https://lobste.rs/s/csqt6p/same_image_different_score) - [Same Image, Different Score?](https://halide.cx/blog/chroma-handling)
* [2026-02-05, 00:28:06](https://news.ycombinator.com/item?id=46893970) - [OpenClaw is what Apple intelligence should have been](https://www.jakequist.com/thoughts/openclaw-is-what-apple-intelligence-should-have-been)
* [2026-02-05, 00:25:00](https://tech.slashdot.org/story/26/02/05/0023249/microsoft-adds-sysmon-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Sysmon To Windows](https://tech.slashdot.org/story/26/02/05/0023249/microsoft-adds-sysmon-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 23:31:00](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss) - [The UK Government Gets It Spectacularly Wrong On AI](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss)
* [2026-02-04, 20:49:37](https://lobste.rs/s/8xtcbp/indiewebify_me_yes_please) - [IndieWebify.Me? Yes please](https://blog.rickardlindberg.me/2026/02/04/indie-webify-me-yes-please.html)
* [2026-02-04, 20:46:00](https://science.slashdot.org/story/26/02/04/2046202/russian-spy-satellites-have-intercepted-eu-communications-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://science.slashdot.org/story/26/02/04/2046202/russian-spy-satellites-have-intercepted-eu-communications-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 19:35:19](https://lobste.rs/s/kazsev/stack_overflow_launches_2008) - [Stack Overflow Launches (2008)](https://www.joelonsoftware.com/2008/09/15/stack-overflow-launches/)
* [2026-02-04, 19:20:32](https://lobste.rs/s/iyu0f8/recreating_epstein_pdfs_from_raw_encoded) - [Recreating Epstein PDFs from raw encoded attachments](https://neosmart.net/blog/recreating-epstein-pdfs-from-raw-encoded-attachments/)
* [2026-02-04, 19:00:00](https://entertainment.slashdot.org/story/26/02/04/1826249/everyone-is-stealing-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Everyone is Stealing TV&apos;](https://entertainment.slashdot.org/story/26/02/04/1826249/everyone-is-stealing-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 18:47:00](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss) - [Cooler Bedroom Temperatures Help the Heart Recover During Sleep](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss)
* [2026-02-04, 18:34:08](https://news.ycombinator.com/item?id=46889703) - [Claude Code for Infrastructure](https://www.fluid.sh/)
* [2026-02-04, 18:30:29](https://lobste.rs/s/tegjjy/few_cpu_hardware_bugs) - [A few CPU hardware bugs](https://www.taricorp.net/2026/a-few-cpu-bugs/)
* [2026-02-04, 18:09:00](https://slashdot.org/story/26/02/04/1810206/as-software-stocks-slump-investors-debate-ais-existential-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Software Stocks Slump, Investors Debate AI&apos;s Existential Threat](https://slashdot.org/story/26/02/04/1810206/as-software-stocks-slump-investors-debate-ais-existential-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 17:35:05](https://news.ycombinator.com/item?id=46888795) - [Building a 24-bit arcade CRT display adapter from scratch](https://www.scd31.com/posts/building-an-arcade-display-adapter)
* [2026-02-04, 17:09:28](https://news.ycombinator.com/item?id=46888441) - [AI is killing B2B SaaS](https://nmn.gl/blog/ai-killing-b2b-saas)
* [2026-02-04, 16:30:51](https://news.ycombinator.com/item?id=46887893) - [Postgres Postmaster does not scale](https://www.recall.ai/blog/postgres-postmaster-does-not-scale)
* [2026-02-04, 16:08:55](https://news.ycombinator.com/item?id=46887564) - [Microsoft&apos;s Copilot chatbot is running into problems](https://www.wsj.com/tech/ai/microsofts-pivotal-ai-product-is-running-into-big-problems-ce235b28)
* [2026-02-04, 16:00:00](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Pledges To Keep Claude Ad-free, Calls AI Conversations a &apos;Space To Think&apos;](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 15:08:17](https://news.ycombinator.com/item?id=46886735) - [Voxtral Transcribe 2](https://mistral.ai/news/voxtral-transcribe-2)
* [2026-02-04, 15:01:00](https://slashdot.org/story/26/02/04/114220/pinterest-sacks-workers-for-creating-tool-to-track-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Sacks Workers For Creating Tool To Track Layoffs](https://slashdot.org/story/26/02/04/114220/pinterest-sacks-workers-for-creating-tool-to-track-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 14:46:46](https://news.ycombinator.com/item?id=46886440) - [A case study in PDF forensics: The Epstein PDFs](https://pdfa.org/a-case-study-in-pdf-forensics-the-epstein-pdfs/)
* [2026-02-04, 14:05:14](https://lobste.rs/s/jjoj8t/sukr_minimal_static_site_compiler_rust) - [Sukr: A minimal static site compiler in Rust with zero-JS output](https://sukr.io)
* [2026-02-04, 14:02:00](https://tech.slashdot.org/story/26/02/04/099210/why-googles-android-for-pc-launch-may-be-messy-and-controversial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Google&apos;s Android for PC Launch May Be Messy and Controversial](https://tech.slashdot.org/story/26/02/04/099210/why-googles-android-for-pc-launch-may-be-messy-and-controversial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 14:00:00](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss) - [Review of iwStack.com](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss)
* [2026-02-04, 13:55:00](https://lobste.rs/s/f4um7d/xikipedia_algorithm) - [Xikipedia Algorithm](https://github.com/rebane2001/xikipedia?tab=readme-ov-file#algorithm)
* [2026-02-04, 13:00:00](https://it.slashdot.org/story/26/02/04/0730222/adobe-actually-wont-discontinue-animate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Actually Won&apos;t Discontinue Animate](https://it.slashdot.org/story/26/02/04/0730222/adobe-actually-wont-discontinue-animate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 12:22:36](https://lobste.rs/s/e0ngxl/wirth_s_revenge) - [Wirth&apos;s Revenge](https://jmoiron.net/blog/wirths-revenge/)
* [2026-02-04, 12:22:13](https://lobste.rs/s/mxzbwh/raylib_12_year_adventure_as_solo) - [raylib: a 12-year adventure as a solo-maintainer](https://fosdem.org/2026/schedule/event/883PBF-raylib-12-year-adventure/)
* [2026-02-04, 11:56:42](https://lobste.rs/s/fbdcm5/broken_proofs_broken_provers) - [Broken proofs and broken provers](https://lawrencecpaulson.github.io/2026/01/15/Broken_proofs.html)
* [2026-02-04, 11:00:00](https://games.slashdot.org/story/26/02/04/0735217/amd-hints-the-next-gen-xbox-console-could-launch-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Hints the Next-Gen Xbox Console Could Launch Next Year](https://games.slashdot.org/story/26/02/04/0735217/amd-hints-the-next-gen-xbox-console-could-launch-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 09:50:49](https://lobste.rs/s/najof9/writing_rss_reader_80_lines_bash) - [writing an RSS reader in 80 lines of bash](https://yobibyte.github.io/yr.html)
* [2026-02-04, 09:16:00](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss) - [When 20-Year-Old Bill Gates Fought the &apos;Thieves&apos; Who Stole His First Code](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss)
* [2026-02-04, 08:44:39](https://lobste.rs/s/6xpxg9/lfs_blfs_will_no_longer_be_developing) - [LFS/BLFS will no longer be developing the System V versions](https://lists.linuxfromscratch.org/sympa/arc/lfs-announce/2026-02/msg00000.html)
* [2026-02-04, 08:35:56](https://lobste.rs/s/hfuiti/i_miss_thinking_hard) - [I miss thinking hard](https://www.jernesto.com/articles/thinking_hard)
* [2026-02-04, 08:17:00](https://lobste.rs/s/jckhbk/i_prefer_pass_secrets_between_programs) - [I prefer to pass secrets between programs through standard input](https://utcc.utoronto.ca/~cks/space/blog/programming/PassingSecretsViaStdin)
* [2026-02-04, 08:01:00](https://developers.slashdot.org/story/26/02/04/075248/say-hello-to-googlesql?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Say Hello To GoogleSQL](https://developers.slashdot.org/story/26/02/04/075248/say-hello-to-googlesql?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 07:54:14](https://lobste.rs/s/y04ll5/microsoft_has_killed_widgets_six_times) - [Microsoft Has Killed Widgets Six Times. Here&apos;s Why They Keep Coming Back](https://xakpc.dev/windows-widgets/history/)
* [2026-02-04, 07:21:50](https://lobste.rs/s/2svv99/competence_as_tragedy) - [Competence as Tragedy](https://crowprose.com/blog/competence-as-tragedy)
* [2026-02-04, 06:55:26](https://lobste.rs/s/bg1mw2/mobile_carriers_can_get_your_gps_location) - [Mobile carriers can get your GPS location](https://an.dywa.ng/carrier-gnss.html)
* [2026-02-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss) - [Research Team Reports Breakthrough in Pancreatic Cancer Treatment](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss)
* [2026-02-03, 23:47:00](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss) - [ChatGPT Wrote “Goodnight Moon” Suicide Lullaby for Man Who Later Killed Himself](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss)
* [2026-02-03, 22:41:09](https://lobste.rs/s/ylrpaj/fitting_some_files_through_stdout_shaped) - [Fitting Some Files Through A Stdout-Shaped Hole](https://rtpg.co/2026/02/03/fitting-some-files-through-a-stdout-shaped-hole/)
* [2026-02-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss) - [NASA Assembling a Formal Anomaly Review Board for Maven](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss)
* [2026-02-03, 14:17:00](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss) - [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss)
* [2026-02-03, 09:29:00](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss) - [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss)
* [2026-02-03, 05:49:56](https://news.ycombinator.com/item?id=46867018) - [An interactive version of Byrne&apos;s The Elements of Euclid (1847)](https://c82.net/euclid/)
* [2026-02-03, 04:43:00](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss) - [How to Stop Microsoft From Letting the Government See Everything on Your Computer](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 12:07:46](https://news.ycombinator.com/item?id=46855057) - [Making Ferrite Core Inductors at Home](https://danielmangum.com/posts/making-ferrite-core-inductors-home/)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 12:43:41](https://news.ycombinator.com/item?id=46845845) - [Claude Code: connect to a local model when your quota runs out](https://boxc.net/blog/2026/claude-code-connecting-to-local-models-when-your-quota-runs-out/)
* [2026-02-01, 12:35:30](https://news.ycombinator.com/item?id=46845790) - [Simply Scheme: Introducing Computer Science (1999)](https://people.eecs.berkeley.edu/~bh/ss-toc2.html)
* [2026-02-01, 12:12:00](https://news.ycombinator.com/item?id=46845642) - [Remarkable Pro Colors](https://www.thregr.org/wavexx/rnd/20260201-remarkable_pro_colors/)
* [2026-02-01, 10:56:42](https://news.ycombinator.com/item?id=46845239) - [Sqldef: Idempotent schema management tool for MySQL, PostgreSQL, SQLite](https://sqldef.github.io/)
* [2026-02-01, 10:49:39](https://news.ycombinator.com/item?id=46845203) - [Listen to Understand](https://talk.bradwoods.io/blog/listen-to-understand/)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 07:58:06](https://news.ycombinator.com/item?id=46844393) - [A Broken Heart](https://allenpike.com/2026/a-broken-heart/)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
