# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Skred is now a MIDI aware synth and drum machine construction kit](https://lobste.rs/s/xhjzmc/skred_is_now_midi_aware_synth_drum_machine) ([comments](https://lobste.rs/s/xhjzmc/skred_is_now_midi_aware_synth_drum_machine))

* [Minecraft: Java Edition now uses SDL3](https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-4) ([comments](https://news.ycombinator.com/item?id=48967256))

* [What I learned selling 2,500 MIDI recorders: Hardware is not so hard](https://chipweinberger.com/articles/20260719-hardware-is-not-so-hard) ([comments](https://news.ycombinator.com/item?id=48966713))

* [Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/) ([comments](https://news.ycombinator.com/item?id=48966569))

* [Grok Build Coding Tool Open Sourced This Week, Promises to Respect Zero Data Retention](https://news.slashdot.org/story/26/07/19/034258/grok-build-coding-tool-open-sourced-this-week-promises-to-respect-zero-data-retention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/07/19/034258))

* [OpenAI Acknowledges GPT-5.6 May Accidentally Delete Files, Calls It 'Honest Mistake'](https://developers.slashdot.org/story/26/07/19/0129228/openai-acknowledges-gpt-56-may-accidentally-delete-files-calls-it-honest-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48964015))

## AI and Machine Learning

* [Software and AI - Plotting vs. Pantsing](https://pyjarrett.github.io/2026/07/18/software-and-ai-plotting-versus-pantsing.html) ([comments](https://lobste.rs/s/ba0j54/software_ai_plotting_vs_pantsing))

* [OpenAI reduces Codex Model Context Size from 372k to 272k](https://github.com/openai/codex/pull/33972/files) ([comments](https://news.ycombinator.com/item?id=48965850))

* [Qwen3.8 is launching and going open-weight soon](https://twitter.com/Alibaba_Qwen/status/2078759124914098291) ([comments](https://news.ycombinator.com/item?id=48966120))

* [AI Coding Agents Can be Tricked Into Installing Malware Via 'Clean' GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss))

## Cybersecurity and Privacy

* [Are There Cybersecurity Risks in Over-the-Air Tech Used in Autos?](https://tech.slashdot.org/story/26/07/19/046258/are-there-cybersecurity-risks-in-over-the-air-tech-used-in-autos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/07/19/046258))

* [France Orders ISPs to Block Access to Polymarket](https://yro.slashdot.org/story/26/07/18/2224236/france-orders-isps-to-block-access-to-polymarket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/07/18/2224236))

* [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss))

## Scientific Innovations and Discoveries

* [Finland Is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss))

* [Archaeologists Found Homer's Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss))

* [Alien World Chemistry Found Inside Meteorite That Struck New Jersey Home](https://science.slashdot.org/story/26/07/18/0427249/alien-world-chemistry-found-inside-meteorite-that-struck-new-jersey-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/07/18/0427249))

## Unique Stories and Events

* [The computer at the bottom of a canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/) ([comments](https://lobste.rs/s/0mljfd/computer_at_bottom_canal))

* [Hardcore IndieWeb: Run your own website 100% independently for only $0.01/day](https://www.neatnik.net/hardcore-indieweb) ([comments](https://lobste.rs/s/l9rap5/hardcore_indieweb_run_your_own_website))

* [Mathematicians still don’t know the fastest way to multiply numbers](https://www.scientificamerican.com/article/mathematicians-still-dont-know-the-fastest-way-to-multiply-numbers/) ([comments](https://lobste.rs/s/otiash/mathematicians_still_don_t_know_fastest))

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

* [2026-07-19, 13:14:39](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently) - [What is your favorite blog to read recently?](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently)
* [2026-07-19, 12:41:16](https://lobste.rs/s/xhjzmc/skred_is_now_midi_aware_synth_drum_machine) - [Skred is now a MIDI aware synth and drum machine construction kit](https://lobste.rs/s/xhjzmc/skred_is_now_midi_aware_synth_drum_machine)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland Is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 12:01:53](https://news.ycombinator.com/item?id=48967355) - [I burned all my tokens researching how to save tokens](https://quesma.com/blog/custom-deep-research-pipeline/)
* [2026-07-19, 11:48:18](https://news.ycombinator.com/item?id=48967256) - [Minecraft: Java Edition now uses SDL3](https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-4)
* [2026-07-19, 11:43:23](https://lobste.rs/s/y8okbv/triton_language_for_alibaba_sail) - [Triton language for Alibaba SAIL](https://github.com/t-head/triton-for-sail)
* [2026-07-19, 11:34:00](https://tech.slashdot.org/story/26/07/19/046258/are-there-cybersecurity-risks-in-over-the-air-tech-used-in-autos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are There Cybersecurity Risks in Over-the-Air Tech Used in Autos? ](https://tech.slashdot.org/story/26/07/19/046258/are-there-cybersecurity-risks-in-over-the-air-tech-used-in-autos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 11:14:38](https://news.ycombinator.com/item?id=48966984) - [I joined the IndieWeb, here&apos;s what I learned](https://en.andros.dev/blog/0b8e451e/i-joined-the-indieweb-heres-what-i-learned/)
* [2026-07-19, 10:44:31](https://news.ycombinator.com/item?id=48966769) - [The death and rebirth of my home server](https://sgt.hootr.club/blog/home-server-rebirth/)
* [2026-07-19, 10:40:29](https://lobste.rs/s/k6ph7c/death_rebirth_my_home_server) - [The death and rebirth of my home server](https://sgt.hootr.club/blog/home-server-rebirth/)
* [2026-07-19, 10:34:58](https://news.ycombinator.com/item?id=48966713) - [What I learned selling 2,500 MIDI recorders: Hardware is not so hard](https://chipweinberger.com/articles/20260719-hardware-is-not-so-hard)
* [2026-07-19, 10:03:23](https://news.ycombinator.com/item?id=48966569) - [Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)
* [2026-07-19, 08:57:31](https://news.ycombinator.com/item?id=48966190) - [Qwen 3.8 Max Preview](https://www.qwencloud.com/pricing/token-plan)
* [2026-07-19, 08:48:41](https://news.ycombinator.com/item?id=48966139) - [Half a Second – a book about the XZ backdoor](https://www.half-second.com/)
* [2026-07-19, 08:44:57](https://news.ycombinator.com/item?id=48966120) - [Qwen3.8 is launching and going open-weight soon](https://twitter.com/Alibaba_Qwen/status/2078759124914098291)
* [2026-07-19, 08:37:50](https://lobste.rs/s/01ypky/more_emulation_goodness_intel_itanium_ia) - [More emulation goodness, an Intel Itanium (IA-64) emulator that boots Windows](https://raymii.org/s/blog/Intel_Itanium_IA-64-Emulator_that_boots_Windows.html)
* [2026-07-19, 08:05:46](https://news.ycombinator.com/item?id=48965914) - [The Mighty Big Array of Finn Jensen LA8YB](https://la0by.darc.de/LA8YB_EME_MBA.htm)
* [2026-07-19, 07:54:39](https://news.ycombinator.com/item?id=48965850) - [OpenAI reduces Codex Model Context Size from 372k to 272k](https://github.com/openai/codex/pull/33972/files)
* [2026-07-19, 07:50:55](https://lobste.rs/s/otiash/mathematicians_still_don_t_know_fastest) - [Mathematicians still don’t know the fastest way to multiply numbers](https://www.scientificamerican.com/article/mathematicians-still-dont-know-the-fastest-way-to-multiply-numbers/)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 07:34:00](https://science.slashdot.org/story/26/07/18/0327200/new-study-links-teen-boys-adhd-symptoms-to-addictive-social-media-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Links Teen Boys&apos; ADHD Symptoms To Addictive Social Media Use](https://science.slashdot.org/story/26/07/18/0327200/new-study-links-teen-boys-adhd-symptoms-to-addictive-social-media-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 07:27:37](https://news.ycombinator.com/item?id=48965719) - [The Art of Insight in Science and Engineering – Mastering Complexity(2014) [pdf]](https://ocw.mit.edu/courses/res-6-011-the-art-of-insight-in-science-and-engineering-mastering-complexity-fall-2014/3bca850386a3005c22134fa62fb3bad5_MITRES_6-011F14_art_insfin.pdf)
* [2026-07-19, 05:07:08](https://news.ycombinator.com/item?id=48965161) - [Scrying the AMD GFX1250 LLVM Tea Leaves](https://chipsandcheese.com/p/scrying-the-amd-gfx1250-llvm-tea)
* [2026-07-19, 04:32:58](https://lobste.rs/s/0mljfd/computer_at_bottom_canal) - [The computer at the bottom of a canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/)
* [2026-07-19, 04:07:17](https://lobste.rs/s/l9rap5/hardcore_indieweb_run_your_own_website) - [Hardcore IndieWeb: Run your own website 100% independently for only $0.01/day](https://www.neatnik.net/hardcore-indieweb)
* [2026-07-19, 03:34:00](https://news.slashdot.org/story/26/07/19/034258/grok-build-coding-tool-open-sourced-this-week-promises-to-respect-zero-data-retention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grok Build&apos; Coding Tool Open Sourced This Week, Promises to Respect Zero Data Retention](https://news.slashdot.org/story/26/07/19/034258/grok-build-coding-tool-open-sourced-this-week-promises-to-respect-zero-data-retention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-19, 02:14:13](https://lobste.rs/s/ba0j54/software_ai_plotting_vs_pantsing) - [Software and AI - Plotting vs. Pantsing](https://pyjarrett.github.io/2026/07/18/software-and-ai-plotting-versus-pantsing.html)
* [2026-07-19, 01:34:00](https://developers.slashdot.org/story/26/07/19/0129228/openai-acknowledges-gpt-56-may-accidentally-delete-files-calls-it-honest-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acknowledges GPT-5.6 May Accidentally Delete Files, Calls It &apos;Honest Mistake&apos;](https://developers.slashdot.org/story/26/07/19/0129228/openai-acknowledges-gpt-56-may-accidentally-delete-files-calls-it-honest-mistake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 00:59:55](https://news.ycombinator.com/item?id=48964015) - [Better and Cheaper Than IPTV](https://github.com/stupside/castor)
* [2026-07-19, 00:51:40](https://lobste.rs/s/qp6s8s/dictionaries_tables) - [Dictionaries and Tables](https://www.defconq.tech/docs/concepts/dictionariesTables)
* [2026-07-19, 00:45:01](https://lobste.rs/s/i0nfve/studying_linux_schedulers_why_metrics) - [Studying Linux Schedulers, and Why Metrics Matter](https://pradyun.net/blog/metrics_matter.html)
* [2026-07-19, 00:38:26](https://news.ycombinator.com/item?id=48963879) - [Transcribe.cpp](https://workshop.cjpais.com/projects/transcribe-cpp)
* [2026-07-19, 00:17:00](https://yro.slashdot.org/story/26/07/18/2224236/france-orders-isps-to-block-access-to-polymarket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Orders ISPs to Block Access to Polymarket](https://yro.slashdot.org/story/26/07/18/2224236/france-orders-isps-to-block-access-to-polymarket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 23:24:26](https://news.ycombinator.com/item?id=48963465) - [Codex Resets](https://codex-resets.com/)
* [2026-07-18, 23:17:00](https://yro.slashdot.org/story/26/07/18/0513229/how-microsofts-little-workaround-created-a-major-threat-to-americas-defense-department?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Microsoft&apos;s &apos;Little Workaround&apos; Created a Major Threat to America&apos;s Defense Department](https://yro.slashdot.org/story/26/07/18/0513229/how-microsofts-little-workaround-created-a-major-threat-to-americas-defense-department?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 22:17:00](https://news.slashdot.org/story/26/07/18/2214208/next-uk-prime-minister-drops-digital-id-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Next UK Prime Minister Drops Digital ID Scheme](https://news.slashdot.org/story/26/07/18/2214208/next-uk-prime-minister-drops-digital-id-scheme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 22:15:17](https://lobste.rs/s/ib6aav/repeatable_read_vs_snapshot_isolation) - [Repeatable Read vs Snapshot Isolation](https://jaymcor.github.io/notes/isolation_rr_si.html)
* [2026-07-18, 22:13:39](https://news.ycombinator.com/item?id=48962983) - [NYC may require landlords and realtors to disclose the use of AI in listings](https://petapixel.com/2026/07/16/mayor-mamdani-says-landlords-cant-secretly-use-ai-images-to-advertise-properties/)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 21:55:27](https://news.ycombinator.com/item?id=48962838) - [Classic Amiga titles, free to download](https://amigafreeware.downer.tech/)
* [2026-07-18, 21:45:12](https://news.ycombinator.com/item?id=48962758) - [Hardcore IndieWeb: Run your own website 100% independently for only $0.01/day](https://www.neatnik.net/hardcore-indieweb)
* [2026-07-18, 21:21:41](https://lobste.rs/s/n6hm1q/gleam_has_mirrored_its_source_code_on) - [Gleam has mirrored its source code on tangled (an AT-protocol based forge)](https://tangled.org/gleam.run/gleam)
* [2026-07-18, 19:50:00](https://entertainment.slashdot.org/story/26/07/18/1948235/gen-z-and-millennials-are-buying-cds---though-half-dont-have-cd-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z and Millennials are Buying CDs - Though Half Don&apos;t Have CD Players](https://entertainment.slashdot.org/story/26/07/18/1948235/gen-z-and-millennials-are-buying-cds---though-half-dont-have-cd-players?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 18:50:14](https://lobste.rs/s/vwocht/better_bitset_for_enum_flags) - [A better bitset for enum flags](https://www.elbeno.com/blog/?p=1836)
* [2026-07-18, 18:46:00](https://bsd.slashdot.org/story/26/07/18/1843243/nextbsd-returns-to-port-apple-source-onto-freebsd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NextBSD Returns to Port Apple Source Onto FreeBSD](https://bsd.slashdot.org/story/26/07/18/1843243/nextbsd-returns-to-port-apple-source-onto-freebsd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 18:12:17](https://lobste.rs/s/aipvbn/wp2shell_pre_authentication_rce) - [wp2shell: Pre Authentication RCE in WordPress Core](https://wp2shell.com/)
* [2026-07-18, 17:34:00](https://slashdot.org/story/26/07/18/0812205/cnbcs-jim-cramer-says-he-needs-cold-hard-proof-ai-is-paying-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CNBC&apos;s Jim Cramer Says He Needs &apos;Cold Hard&apos; Proof AI Is Paying Off ](https://slashdot.org/story/26/07/18/0812205/cnbcs-jim-cramer-says-he-needs-cold-hard-proof-ai-is-paying-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 17:32:40](https://news.ycombinator.com/item?id=48960218) - [The Kimi K3 Moment](https://stephen.bochinski.dev/blog/2026/07/18/the-kimi-k3-moment/)
* [2026-07-18, 17:27:24](https://news.ycombinator.com/item?id=48960155) - [Goodbye, and Thanks for All the Bikesheds](https://queue.acm.org/detail.cfm?id=3818307)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 16:34:00](https://science.slashdot.org/story/26/07/18/0537208/long-after-pluto-fly-by-nasas-new-horizons-probe-wakes-up-again-starts-doing-new-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long After Pluto Fly-By, NASA&apos;s New Horizon&apos;s Probe Wakes Up Again, Starts Doing New Science](https://science.slashdot.org/story/26/07/18/0537208/long-after-pluto-fly-by-nasas-new-horizons-probe-wakes-up-again-starts-doing-new-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 16:25:19](https://lobste.rs/s/5kgenk/reviewing_ai_code_is_not_viable_argument) - [Reviewing AI Code Is Not A Viable Argument](https://softwaremaxims.com/blog/reviewing-ai-code)
* [2026-07-18, 15:34:00](https://games.slashdot.org/story/26/07/18/0723247/union-fights-microsoft-over-layoffs-at-game-studios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Union Fights Microsoft Over Layoffs at Game Studios](https://games.slashdot.org/story/26/07/18/0723247/union-fights-microsoft-over-layoffs-at-game-studios?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 14:34:00](https://tech.slashdot.org/story/26/07/18/0239231/the-death-of-the-stick-shift-is-almost-here-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The &apos;Death of the Stick Shift&apos; is Almost Here for Americans](https://tech.slashdot.org/story/26/07/18/0239231/the-death-of-the-stick-shift-is-almost-here-for-americans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 13:59:49](https://lobste.rs/s/bgtxi5/haunt_0_4_0_released) - [Haunt 0.4.0 released](https://git.dthompson.us/haunt/commit/?id=100da093a804f04d3b10c9db49da663f2246c446)
* [2026-07-18, 12:59:05](https://lobste.rs/s/hvuumu/goodbye_thanks_for_all_bikesheds) - [Goodbye, and thanks for all the Bikesheds](https://queue.acm.org/detail.cfm?id=3818307)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 11:04:52](https://lobste.rs/s/p9ubuz/nextbsd_project_revived_apple_s_foss_user) - [NextBSD project revived: Apple&apos;s FOSS user-space tools on the FreeBSD kernel](https://nextbsd.org/)
* [2026-07-18, 11:00:00](https://news.slashdot.org/story/26/07/18/0436243/google-backed-satellites-for-wildfire-detection-launch-as-smoke-chokes-us-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google-Backed Satellites For Wildfire Detection Launch As Smoke Chokes US, Canada](https://news.slashdot.org/story/26/07/18/0436243/google-backed-satellites-for-wildfire-detection-launch-as-smoke-chokes-us-canada?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 08:30:39](https://lobste.rs/s/z3hzjm/neither_gcc_nor_clang_are_compliant_with) - [neither gcc nor clang are compliant with standard c++](https://sebsite.pw/w/20260708-badstdcxx.html)
* [2026-07-18, 07:52:15](https://lobste.rs/s/z01edy/gitroot) - [GitRoot](https://gitroot.dev/)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 07:00:00](https://science.slashdot.org/story/26/07/18/0427249/alien-world-chemistry-found-inside-meteorite-that-struck-new-jersey-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alien World Chemistry Found Inside Meteorite That Struck New Jersey Home](https://science.slashdot.org/story/26/07/18/0427249/alien-world-chemistry-found-inside-meteorite-that-struck-new-jersey-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 04:31:13](https://lobste.rs/s/ihel7n/regressive_jpegs) - [Regressive JPEGs](https://maurycyz.com/projects/bad_jpeg/)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 21:51:07](https://lobste.rs/s/zar7fc/enterprise_haskell_at_h_e_b) - [Enterprise Haskell at H-E-B](https://blog.haskell.org/enterprise-haskell-at-h-e-b/)
* [2026-07-17, 21:07:10](https://lobste.rs/s/grutu0/lobsters_interview_with_matheusmoreira) - [Lobsters Interview with matheusmoreira about Lone Lisp](https://alexalejandre.com/interviews/interview-with-matheus-moreira/)
* [2026-07-17, 19:54:44](https://lobste.rs/s/ryksor/learning_few_things_about_running_sqlite) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
* [2026-07-15, 20:50:00](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss) - [‘STEM Is Not Just About Formulas And Calculations, It Is Also About Creativity’](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 13:10:01](https://news.ycombinator.com/item?id=48920328) - [Searchable field-level encryption on Supabase with CipherStash](https://supabase.com/blog/searchable-field-level-encryption-with-cipherstash)
* [2026-07-15, 12:07:48](https://news.ycombinator.com/item?id=48919562) - [Show HN: LoopGain – Stop agent loops with control theory, not max_iterations](https://github.com/loopgain-ai/loopgain)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
