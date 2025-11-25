# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Singapore Orders Apple, Google To Prevent Government Spoofing on Messaging Platforms](https://apple.slashdot.org/story/25/11/25/1446250/singapore-orders-apple-google-to-prevent-government-spoofing-on-messaging-platforms?utm_source=rss1.0mainlinkanon&utm_medium=feed) discusses efforts to combat fraudulent impersonations on popular platforms.

* [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/) highlights advancements in LLVM for enhancing the security of cryptographic protocols.

* [Microsoft To Preload File Explorer in Background For Faster Launch in Windows 11](https://tech.slashdot.org/story/25/11/25/140253/microsoft-to-preload-file-explorer-in-background-for-faster-launch-in-windows-11?utm_source=rss1.0mainlinkanon&utm_medium=feed) outlines a new optimization feature for improved performance.

* [HP and Dell disable HEVC support built into their laptops’ CPUs](https://arstechnica.com/gadgets/2025/11/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus/) investigates controversial decisions limiting built-in video compression options.

* [World's Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/) describes innovative strategies for improving Pi device performance.

## Artificial Intelligence

* [Trump Launches Genesis Mission, a Manhattan Project-Level AI Push](https://yro.slashdot.org/story/25/11/25/009227/trump-launches-genesis-mission-a-manhattan-project-level-ai-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) reveals a significant initiative aimed at advancing AI technologies.

* [Jony Ive and Sam Altman Say They Finally Have an AI Hardware Prototype](https://hardware.slashdot.org/story/25/11/25/006212/jony-ive-and-sam-altman-say-they-finally-have-an-ai-hardware-prototype?utm_source=rss1.0mainlinkanon&utm_medium=feed) announces groundbreaking hardware developments in the AI domain.

* [Claude Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use) explores the capabilities of an innovative AI model, Claude.

* [What OpenAI did when ChatGPT users lost touch with reality](https://www.nytimes.com/2025/11/23/technology/openai-chatgpt-users-risks.html) delves into the ethical considerations of AI applications.

* [Implications of AI to schools](https://twitter.com/karpathy/status/1993010584175141038) examines how AI is transforming educational practices.

## Science and Environment

* [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&from=rss) uncovers findings about temporal cognition in bees.

* [EPA Approves New 'Forever Chemical' Pesticides For Use On Food](https://news.slashdot.org/story/25/11/25/0252230/epa-approves-new-forever-chemical-pesticides-for-use-on-food?utm_source=rss1.0mainlinkanon&utm_medium=feed) covers the implications of greenlighting controversial pesticides.

* [Ozone Hole Ranked As 5th Smallest In More Than 30 Years](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) provides encouraging statistics about the environment.

* [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&from=rss) details escalating contamination in ocean ecosystems.

* [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&from=rss) marks a milestone in climate modeling.

## Historical and Unique Insights

* [The history of Indian science fiction](https://altermag.com/articles/the-secret-history-of-indian-science-fiction) examines the evolution of India's contribution to this field.

* [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&from=rss) reflects on linguistic preservation challenges in a globalized world.

* [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&from=rss) sheds new light on unresolved mysteries.

* [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&from=rss) revisits culturally significant practices.

* [Maybe That's Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&from=rss) investigates new findings about Martian geography.

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

* [2025-11-25, 15:21:00](https://hardware.slashdot.org/story/25/11/25/1511242/unpowered-ssds-in-your-drawer-are-slowly-losing-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Unpowered SSDs in Your Drawer Are Slowly Losing Data](https://hardware.slashdot.org/story/25/11/25/1511242/unpowered-ssds-in-your-drawer-are-slowly-losing-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 15:08:07](https://lobste.rs/s/6on99e/event_design_for_streaming_systems) - [Event Design for Streaming Systems: A Primer](https://www.iankduncan.com/engineering/2025-11-14-event-design-for-streaming-systems)
* [2025-11-25, 15:01:35](https://lobste.rs/s/emcfyi/optique_0_7_0_smarter_error_messages) - [Optique 0.7.0: Smarter error messages and validation library integrations](https://hackers.pub/@hongminhee/2025/optique-070)
* [2025-11-25, 14:46:00](https://apple.slashdot.org/story/25/11/25/1446250/singapore-orders-apple-google-to-prevent-government-spoofing-on-messaging-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Orders Apple, Google To Prevent Government Spoofing on Messaging Platforms](https://apple.slashdot.org/story/25/11/25/1446250/singapore-orders-apple-google-to-prevent-government-spoofing-on-messaging-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 14:42:27](https://lobste.rs/s/qzrous/promise_p_graphs) - [The Promise of P-Graphs](https://pavpanchekha.com/blog/p-graphs.html)
* [2025-11-25, 14:39:51](https://lobste.rs/s/jgzpxs/towards_pen_paper_style_equational) - [Towards Pen-and-Paper-Style Equational Reasoning in Interactive Theorem Provers by Equality Saturation](https://steuwer.info/files/publications/2026/POPL-Lean-Egg.pdf)
* [2025-11-25, 14:20:30](https://news.ycombinator.com/item?id=46045987) - [Launch HN: Onyx (YC W24) – The open-source chat UI](https://news.ycombinator.com/item?id=46045987)
* [2025-11-25, 14:18:01](https://news.ycombinator.com/item?id=46045972) - [Apt Rust requirement raises questions](https://lwn.net/SubscriberLink/1046841/5bbf1fc049a18947/)
* [2025-11-25, 14:16:22](https://lobste.rs/s/jcjp34/apt_rust_requirement_raises_questions) - [APT Rust requirement raises questions](https://lwn.net/SubscriberLink/1046841/5bbf1fc049a18947/)
* [2025-11-25, 14:03:08](https://lobste.rs/s/occlzx/constant_time_support_lands_llvm) - [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 14:00:00](https://tech.slashdot.org/story/25/11/25/140253/microsoft-to-preload-file-explorer-in-background-for-faster-launch-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Preload File Explorer in Background For Faster Launch in Windows 11](https://tech.slashdot.org/story/25/11/25/140253/microsoft-to-preload-file-explorer-in-background-for-faster-launch-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 13:38:12](https://news.ycombinator.com/item?id=46045661) - [Brain has five &apos;eras&apos; with adult mode not starting until early 30s](https://www.theguardian.com/science/2025/nov/25/brain-human-cognitive-development-life-stages-cambridge-study)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 13:00:00](https://hardware.slashdot.org/story/25/11/25/0257209/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo Stockpiling PC Memory Due To &apos;Unprecedented&apos; AI Squeeze](https://hardware.slashdot.org/story/25/11/25/0257209/lenovo-stockpiling-pc-memory-due-to-unprecedented-ai-squeeze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 12:18:19](https://lobste.rs/s/6zjgo7/hp_dell_disable_hevc_support_built_into) - [HP and Dell disable HEVC support built into their laptops’ CPUs](https://arstechnica.com/gadgets/2025/11/hp-and-dell-disable-hevc-support-built-into-their-laptops-cpus/)
* [2025-11-25, 12:05:39](https://news.ycombinator.com/item?id=46045039) - [Making Crash Bandicoot (2011)](https://all-things-andy-gavin.com/video-games/making-crash/)
* [2025-11-25, 11:36:07](https://lobste.rs/s/solqpi/how_good_are_chinese_cpus_benchmarking) - [How good are Chinese CPUs? Benchmarking the Loongson 3A6000](https://lemire.me/blog/2025/11/23/how-good-are-chinese-cpus-benchmarking-the-loongson-3a6000/)
* [2025-11-25, 10:00:00](https://news.slashdot.org/story/25/11/25/0252230/epa-approves-new-forever-chemical-pesticides-for-use-on-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EPA Approves New &apos;Forever Chemical&apos; Pesticides For Use On Food](https://news.slashdot.org/story/25/11/25/0252230/epa-approves-new-forever-chemical-pesticides-for-use-on-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 09:31:45](https://lobste.rs/s/hzvyyv/lambda_papers_transcribed) - [The Lambda Papers (transcribed)](https://research.scheme.org/)
* [2025-11-25, 09:02:48](https://lobste.rs/s/lce1ks/quick_tutorial_get_started_on_org_social) - [Quick tutorial to get started on Org Social](https://en.andros.dev/blog/ddd78757/quick-tutorial-to-get-started-on-org-social/)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 07:58:27](https://lobste.rs/s/d4dvnk/emacs_for_code_editing) - [emacs for code editing](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-25, 07:52:56](https://lobste.rs/s/44ysji/nsa_ietf_part_3_dodging_issues_at_hand) - [NSA and IETF, part 3: Dodging the issues at hand](https://blog.cr.yp.to/20251123-dodging.html)
* [2025-11-25, 07:00:00](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ozone Hole Ranked As 5th Smallest In More Than 30 Years](https://news.slashdot.org/story/25/11/25/0236221/ozone-hole-ranked-as-5th-smallest-in-more-than-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-25, 06:35:59](https://news.ycombinator.com/item?id=46042946) - [Most Stable Raspberry Pi? Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:32:57](https://lobste.rs/s/w05xid/world_s_most_stable_raspberry_pi_81_better) - [World&apos;s Most Stable Raspberry Pi? 81% Better NTP with Thermal Management](https://austinsnerdythings.com/2025/11/24/worlds-most-stable-raspberry-pi-81-better-ntp-with-thermal-management/)
* [2025-11-25, 06:31:31](https://news.ycombinator.com/item?id=46042928) - [Human brains are preconfigured with instructions for understanding the world](https://news.ucsc.edu/2025/11/sharf-preconfigured-brain/)
* [2025-11-25, 05:33:44](https://news.ycombinator.com/item?id=46042655) - [Windows GUI – Good, Bad and Pretty Ugly (2023)](https://creolened.com/windows-gui-good-bad-and-pretty-ugly-ranked/)
* [2025-11-25, 05:17:10](https://lobste.rs/s/p9umds/memories_us) - [memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
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
* [2025-11-24, 22:00:00](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arduino&apos;s New Terms of Service Worries Hobbyists Ahead of Qualcomm Acquisition](https://hardware.slashdot.org/story/25/11/24/2144256/arduinos-new-terms-of-service-worries-hobbyists-ahead-of-qualcomm-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 21:21:00](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Are Holding Onto Devices Longer Than Ever](https://slashdot.org/story/25/11/24/1754230/americans-are-holding-onto-devices-longer-than-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 20:07:34](https://lobste.rs/s/jgczrj/counter_galois_onion_improved) - [Counter Galois Onion: Improved encryption for Tor circuit traffic](https://blog.torproject.org/introducing-cgo/)
* [2025-11-24, 20:01:20](https://lobste.rs/s/alor5k/is_latex_worth_it_2023) - [Is LaTeX worth it? (2023)](https://philipphagenlocher.de/post/is-latex-worth-it/)
* [2025-11-24, 19:25:25](https://news.ycombinator.com/item?id=46038099) - [Unpowered SSDs slowly lose data](https://www.xda-developers.com/your-unpowered-ssd-is-slowly-losing-your-data/)
* [2025-11-24, 19:21:35](https://news.ycombinator.com/item?id=46038047) - [Claude Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use)
* [2025-11-24, 18:53:05](https://news.ycombinator.com/item?id=46037637) - [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)
* [2025-11-24, 18:52:12](https://news.ycombinator.com/item?id=46037626) - [Pebble Watch software is now open source](https://ericmigi.com/blog/pebble-watch-software-is-now-100percent-open-source)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 17:52:43](https://news.ycombinator.com/item?id=46036908) - [Show HN: I built an interactive HN Simulator](https://news.ysimulator.run/news)
* [2025-11-24, 17:52:01](https://news.ycombinator.com/item?id=46036895) - [Cool-retro-term: terminal emulator which mimics look and feel of CRTs](https://github.com/Swordfish90/cool-retro-term)
* [2025-11-24, 17:51:02](https://news.ycombinator.com/item?id=46036878) - [Implications of AI to schools](https://twitter.com/karpathy/status/1993010584175141038)
* [2025-11-24, 15:16:26](https://lobste.rs/s/ta9886/open_source_has_too_many_parasocial) - [Open Source Has Too Many Parasocial Relationships](https://pivotnine.com/blog/open-source-has-too-many-parasocial-relationships/)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 12:23:02](https://news.ycombinator.com/item?id=46033330) - [Chrome Jpegxl Issue Reopened](https://issues.chromium.org/issues/40168998)
* [2025-11-24, 11:04:26](https://lobste.rs/s/od61og/shai_hulud_returns_over_300_npm_packages) - [Shai-Hulud Returns: Over 300 NPM Packages infected via Fake Bun Runtime Within Hours](https://helixguard.ai/blog/malicious-sha1hulud-2025-11-24)
* [2025-11-24, 09:50:20](https://lobste.rs/s/jn95w0/edn_c_fast_zero_copy_edn_extensible_data) - [edn.c: A fast, zero-copy EDN (Extensible Data Notation) reader written in C11 with SIMD acceleration](https://github.com/DotFox/edn.c)
* [2025-11-24, 09:38:48](https://lobste.rs/s/fjf1eh/fifty_shades_oop) - [Fifty Shades of OOP](https://lesleylai.info/en/fifty_shades_of_oop/)
* [2025-11-24, 09:27:56](https://lobste.rs/s/hcjaj0/why_i_still_love_linux) - [Why I (still) love Linux](https://it-notes.dragas.net/2025/11/24/why-i-still-love-linux/)
* [2025-11-24, 09:24:08](https://lobste.rs/s/rdezfn/does_dioxus_spark_joy) - [Does Dioxus spark joy?](https://fasterthanli.me/articles/does-dioxus-spark-joy)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 07:14:55](https://news.ycombinator.com/item?id=46031220) - [Build a Compiler in Five Projects](https://kmicinski.com/functional-programming/2025/11/23/build-a-language/)
* [2025-11-24, 05:58:08](https://news.ycombinator.com/item?id=46030799) - [What OpenAI did when ChatGPT users lost touch with reality](https://www.nytimes.com/2025/11/23/technology/openai-chatgpt-users-risks.html)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 01:25:17](https://news.ycombinator.com/item?id=46019898) - [Three Years from GPT-3 to Gemini 3](https://www.oneusefulthing.org/p/three-years-from-gpt-3-to-gemini)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 14:33:57](https://news.ycombinator.com/item?id=46015095) - [A million ways to die from a data race in Go](https://gaultier.github.io/blog/a_million_ways_to_data_race_in_go.html)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:41:46](https://news.ycombinator.com/item?id=46013478) - [The history of Indian science fiction](https://altermag.com/articles/the-secret-history-of-indian-science-fiction)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-21, 23:54:49](https://news.ycombinator.com/item?id=46010552) - [Explaining, at some length, Techmeme&apos;s 20 years of consistency](https://news.techmeme.com/250912/20-years)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 22:45:53](https://news.ycombinator.com/item?id=46009935) - [How the Atomic Tests Looked Like from Los Angeles](https://www.amusingplanet.com/2016/09/how-atomic-tests-looked-like-from-los.html)
* [2025-11-21, 22:36:24](https://news.ycombinator.com/item?id=46009851) - [Using an Array of Needles to Create Solid Knitted Shapes](https://dl.acm.org/doi/10.1145/3746059.3747759)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 16:44:45](https://news.ycombinator.com/item?id=46006104) - [Show HN: OCR Arena – A playground for OCR models](https://www.ocrarena.ai/battle)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 11:47:38](https://news.ycombinator.com/item?id=46003606) - [Nearby peer discovery without GPS using environmental fingerprints](https://www.svendewaerhert.com/blog/nearby-peer-discovery/)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
