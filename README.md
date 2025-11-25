# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advances

* [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - A fascinating look at AI's implications in academic honesty.

* [Jony Ive and Sam Altman Say They Finally Have an AI Hardware Prototype](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Notable tech figures unveil progress in AI hardware innovation.

* [Trump Launches Genesis Mission, a Manhattan Project-Level AI Push](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The U.S. initiates a significant AI development push inspired by historical projects.

## Climate and Environmental Developments

* [Ozone Hole Ranked As 5th Smallest In More Than 30 Years](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Positive progress in atmospheric health with shrinking ozone damage.

* [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - Key developments in eradicating harmful environmental chemicals.

## Technology Product Updates and Reviews

* [Pebble Goes Fully Open Source](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A step forward for open-source hardware enthusiasts.

* [Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/) - Innovations in stability and timing for Raspberry Pi hardware. [Original on Lobsters](https://lobste.rs/s/w05xid/world_s_most_stable_raspberry_pi_81_better).

## Society and Culture

* [Mind-Altering 'Brain Weapons' No Longer Only Science Fiction, Say Researchers](https://science.slashdot.org/story/25/11/25/0030245/mind-altering-brain-weapons-no-longer-only-science-fiction-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring the ethics and implications of neurological technologies in society.

* [Ring's New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - Privacy concerns emerge around new biometric applications in home devices.

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

* [2025-11-25, 09:31:45](https://lobste.rs/s/hzvyyv/lambda_papers_transcribed) - [The Lambda Papers (transcribed)](https://research.scheme.org/)
* [2025-11-25, 09:02:48](https://lobste.rs/s/lce1ks/quick_tutorial_get_started_on_org_social) - [Quick tutorial to get started on Org Social](https://en.andros.dev/blog/ddd78757/quick-tutorial-to-get-started-on-org-social/)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 07:58:27](https://lobste.rs/s/d4dvnk/emacs_for_code_editing) - [emacs for code editing](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-25, 07:52:56](https://lobste.rs/s/44ysji/nsa_ietf_part_3_dodging_issues_at_hand) - [NSA and IETF, part 3: Dodging the issues at hand](https://blog.cr.yp.to/20251123-dodging.html)
* [2025-11-25, 07:00:00](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ozone Hole Ranked As 5th Smallest In More Than 30 Years](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 06:56:01](https://lobste.rs/s/bxggw5/case_against_oop_is_understated_not) - [Case against OOP is understated, not overstated (2020)](https://boxbase.org/entries/2020/aug/3/case-against-oop/)
* [2025-11-25, 06:39:36](https://news.ycombinator.com/item?id=46042969) - [What you can get for the price of a Netflix subscription](https://nmil.dev/what-you-can-get-for-the-price-of-a-netflix-subscription)
* [2025-11-25, 06:35:59](https://news.ycombinator.com/item?id=46042946) - [Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:32:57](https://lobste.rs/s/w05xid/world_s_most_stable_raspberry_pi_81_better) - [World&apos;s Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:31:31](https://news.ycombinator.com/item?id=46042928) - [Human brains are preconfigured with instructions for understanding the world](https://news.ucsc.edu/2025/11/sharf-preconfigured-brain/)
* [2025-11-25, 05:17:10](https://lobste.rs/s/p9umds/memories_us) - [memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-25, 03:37:01](https://lobste.rs/s/q8z71y/bom_reveals_new_website_cost_96_5m_not_4_1m) - [BOM reveals new website cost $96.5m, not $4.1m as first announced](https://www.abc.net.au/news/2025-11-23/bureau-of-meteorology-new-website-cost-blowout-to-96-million/106042202)
* [2025-11-25, 03:30:00](https://it.slashdot.org/story/25/11/25/0024229/hacker-conference-installed-a-literal-antivirus-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Conference Installed a Literal Antivirus Monitoring System](https://it.slashdot.org/story/25/11/25/0024229/hacker-conference-installed-a-literal-antivirus-monitoring-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 02:08:11](https://lobste.rs/s/jrccc5/hyperoptic_ipv6_out_order_packets) - [Hyperoptic: IPv6 and Out-of-Order Packets](https://blog.zakkemble.net/hyperoptic-ipv6-and-out-of-order-packets/)
* [2025-11-25, 02:02:00](https://science.slashdot.org/story/25/11/25/0030245/mind-altering-brain-weapons-no-longer-only-science-fiction-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mind-Altering &apos;Brain Weapons&apos; No Longer Only Science Fiction, Say Researchers](https://science.slashdot.org/story/25/11/25/0030245/mind-altering-brain-weapons-no-longer-only-science-fiction-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 01:25:00](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launches Genesis Mission, a Manhattan Project-Level AI Push](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 00:45:00](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jony Ive and Sam Altman Say They Finally Have an AI Hardware Prototype](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 00:02:00](https://slashdot.org/story/25/11/24/2248212/japans-high-stakes-gamble-to-turn-island-of-flowers-into-global-chip-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s High-Stakes Gamble To Turn Island of Flowers Into Global Chip Hub](https://slashdot.org/story/25/11/24/2248212/japans-high-stakes-gamble-to-turn-island-of-flowers-into-global-chip-hub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 23:20:00](https://yro.slashdot.org/story/25/11/24/2233254/amazon-pledges-up-to-50-billion-to-expand-ai-supercomputing-for-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Pledges Up To $50 Billion To Expand AI, Supercomputing For US Government](https://yro.slashdot.org/story/25/11/24/2233254/amazon-pledges-up-to-50-billion-to-expand-ai-supercomputing-for-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 23:19:06](https://lobste.rs/s/rl1r8m/rubee) - [RuBee](https://computer.rip/2025-11-22-RuBee.html)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 22:40:00](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pebble Goes Fully Open Source](https://news.slashdot.org/story/25/11/24/2152211/pebble-goes-fully-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 22:38:08](https://lobste.rs/s/0frbqq/this_development_cycle_cargo_1_92) - [This Development-cycle in Cargo: 1.92](https://blog.rust-lang.org/inside-rust/2025/11/24/this-development-cycle-in-cargo-1.92/)
* [2025-11-24, 22:00:00](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arduino&apos;s New Terms of Service Worries Hobbyists Ahead of Qualcomm Acquisition](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 21:21:00](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Holding Onto Devices Longer Than Ever](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 20:43:00](https://entertainment.slashdot.org/story/25/11/24/1845207/udio-users-cant-download-their-ai-music-creations-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Udio Users Can&apos;t Download Their AI Music Creations Anymore](https://entertainment.slashdot.org/story/25/11/24/1845207/udio-users-cant-download-their-ai-music-creations-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 20:07:34](https://lobste.rs/s/jgczrj/counter_galois_onion_improved) - [Counter Galois Onion: Improved encryption for Tor circuit traffic](https://blog.torproject.org/introducing-cgo/)
* [2025-11-24, 20:01:20](https://lobste.rs/s/alor5k/is_latex_worth_it_2023) - [Is LaTeX worth it? (2023)](https://philipphagenlocher.de/post/is-latex-worth-it/)
* [2025-11-24, 20:01:00](https://science.slashdot.org/story/25/11/24/1834244/obesity-jab-drug-fails-to-slow-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Obesity Jab Drug Fails To Slow Alzheimer&apos;s](https://science.slashdot.org/story/25/11/24/1834244/obesity-jab-drug-fails-to-slow-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 19:29:12](https://news.ycombinator.com/item?id=46038143) - [PS5 now costs less than 64GB of DDR5 memory. RAM jumps to $600 due to shortage](https://www.tomshardware.com/pc-components/ddr5/64gb-of-ddr5-memory-now-costs-more-than-an-entire-ps5-even-after-a-discount-trident-z5-neo-kit-jumps-to-usd600-due-to-dram-shortage-and-its-expected-to-get-worse-into-2026)
* [2025-11-24, 19:25:25](https://news.ycombinator.com/item?id=46038099) - [Unpowered SSDs slowly lose data](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data/)
* [2025-11-24, 19:21:35](https://news.ycombinator.com/item?id=46038047) - [Claude Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use)
* [2025-11-24, 19:20:00](https://tech.slashdot.org/story/25/11/24/1855243/googles-aluminium-os-will-eventually-replace-chromeos-with-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s &apos;Aluminium OS&apos; Will Eventually Replace ChromeOS With Android](https://tech.slashdot.org/story/25/11/24/1855243/googles-aluminium-os-will-eventually-replace-chromeos-with-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 18:53:05](https://news.ycombinator.com/item?id=46037637) - [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)
* [2025-11-24, 18:52:12](https://news.ycombinator.com/item?id=46037626) - [Pebble Watch software is now open source](https://ericmigi.com/blog/pebble-watch-software-is-now-100percent-open-source)
* [2025-11-24, 18:49:47](https://news.ycombinator.com/item?id=46037591) - [Google&apos;s new &apos;Aluminium OS&apos; project brings Android to PC](https://www.androidauthority.com/aluminium-os-android-for-pcs-3619092/)
* [2025-11-24, 18:41:00](https://tech.slashdot.org/story/25/11/24/1643247/science-centric-streaming-service-curiosity-stream-is-an-ai-licensing-firm-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Science-Centric Streaming Service Curiosity Stream is an AI-licensing Firm Now](https://tech.slashdot.org/story/25/11/24/1643247/science-centric-streaming-service-curiosity-stream-is-an-ai-licensing-firm-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 18:32:27](https://news.ycombinator.com/item?id=46037343) - [The Bitter Lesson of LLM Extensions](https://www.sawyerhood.com/blog/llm-extension)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 18:01:00](https://tech.slashdot.org/story/25/11/24/1625249/google-denies-misleading-reports-of-gmail-using-your-emails-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Denies &apos;Misleading&apos; Reports of Gmail Using Your Emails To Train AI](https://tech.slashdot.org/story/25/11/24/1625249/google-denies-misleading-reports-of-gmail-using-your-emails-to-train-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 17:52:43](https://news.ycombinator.com/item?id=46036908) - [Show HN: I built an interactive HN Simulator](https://news.ysimulator.run/news)
* [2025-11-24, 17:52:01](https://news.ycombinator.com/item?id=46036895) - [Cool-retro-term: terminal emulator which mimics look and feel of CRTs](https://github.com/Swordfish90/cool-retro-term)
* [2025-11-24, 17:51:02](https://news.ycombinator.com/item?id=46036878) - [Implications of AI to schools](https://twitter.com/karpathy/status/1993010584175141038)
* [2025-11-24, 15:16:26](https://lobste.rs/s/ta9886/open_source_has_too_many_parasocial) - [Open Source Has Too Many Parasocial Relationships](https://pivotnine.com/blog/open-source-has-too-many-parasocial-relationships/)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 12:23:02](https://news.ycombinator.com/item?id=46033330) - [Chrome Jpegxl Issue Reopened](https://issues.chromium.org/issues/40168998)
* [2025-11-24, 11:04:26](https://lobste.rs/s/od61og/shai_hulud_returns_over_300_npm_packages) - [Shai-Hulud Returns: Over 300 NPM Packages infected via Fake Bun Runtime Within Hours](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:40:22](https://news.ycombinator.com/item?id=46032539) - [Shai-Hulud Returns: Over 300 NPM Packages Infected](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 10:10:21](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/x5f9en/what_are_you_doing_this_week)
* [2025-11-24, 10:04:16](https://lobste.rs/s/ttsydj/alice_new_build_system_for_ocaml) - [Alice - new build system for Ocaml](https://www.alicecaml.org/)
* [2025-11-24, 09:50:20](https://lobste.rs/s/jn95w0/edn_c_fast_zero_copy_edn_extensible_data) - [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c)
* [2025-11-24, 09:40:32](https://news.ycombinator.com/item?id=46032148) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:38:48](https://lobste.rs/s/fjf1eh/fifty_shades_oop) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:27:56](https://lobste.rs/s/hcjaj0/why_i_still_love_linux) - [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/)
* [2025-11-24, 09:24:08](https://lobste.rs/s/rdezfn/does_dioxus_spark_joy) - [Does Dioxus spark joy?](https://fasterthanli.me/articles/does-dioxus-spark-joy)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 07:15:56](https://lobste.rs/s/9gx2ig/build_compiler_five_projects) - [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/)
* [2025-11-24, 07:14:55](https://news.ycombinator.com/item?id=46031220) - [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/)
* [2025-11-24, 05:58:08](https://news.ycombinator.com/item?id=46030799) - [What OpenAI did when ChatGPT users lost touch with reality](https://www.nytimes.com/2025/11/23/technology/openai-chatgpt-users-risks.html)
* [2025-11-24, 04:10:33](https://lobste.rs/s/htdedi/with_love_kde_take_moment) - [With Love to KDE: Take a Moment](https://korcenji.neocities.org/Writings/KDE-Take-A-Moment)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 20:46:07](https://lobste.rs/s/xxq1kw/ntoh_hton_is_bad_api) - [ntoh*/hton* is a bad API](https://purplesyringa.moe/blog/ntoh-hton-is-a-bad-api/)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 16:06:46](https://news.ycombinator.com/item?id=46024541) - [We stopped roadmap work for a week and fixed bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 01:25:17](https://news.ycombinator.com/item?id=46019898) - [Three Years from GPT-3 to Gemini 3](https://www.oneusefulthing.org/p/three-years-from-gpt-3-to-gemini)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 15:26:44](https://news.ycombinator.com/item?id=46015467) - [Migrating to Bazel symbolic macros](https://www.tweag.io/blog/2025-11-20-migrating-bazel-symbolic-macros/)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 22:45:53](https://news.ycombinator.com/item?id=46009935) - [How the Atomic Tests Looked Like from Los Angeles](https://www.amusingplanet.com/2016/09/how-atomic-tests-looked-like-from-los.html)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 17:56:50](https://news.ycombinator.com/item?id=46006891) - [Building the largest known Kubernetes cluster](https://cloud.google.com/blog/products/containers-kubernetes/how-we-built-a-130000-node-gke-cluster/)
* [2025-11-21, 16:44:45](https://news.ycombinator.com/item?id=46006104) - [Show HN: OCR Arena – A playground for OCR models](https://www.ocrarena.ai/battle)
* [2025-11-21, 16:23:50](https://news.ycombinator.com/item?id=46005910) - [How did the Windows 95 user interface code get to the Windows NT code base?](https://devblogs.microsoft.com/oldnewthing/20251028-00/?p=111733)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 06:57:21](https://news.ycombinator.com/item?id=46001920) - [Show HN: Datamorph – A clean JSON ⇄ CSV converter with auto-detect](https://datamorphio.vercel.app)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
