# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Advancements and Software Updates

* [uBlock Origin Forcefully Removed by Chrome](https://old.reddit.com/r/youtube/comments/1j2ec76/ublock_origin_is_gone/) ([comments](https://news.ycombinator.com/item?id=43262531))

* [Firefox 136 Released With Vertical Tabs, Official ARM64 Linux Binaries](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43261327))

* [Opera Adds an Automated AI Agent To Its Browser](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/4bxwnl/do_not_run_any_cargo_commands_on_untrusted))

## Artificial Intelligence and Machine Learning

* [Users Report Emotional Bonds With Startlingly Realistic AI Voice Demo](https://slashdot.org/story/25/03/05/0057216/users-report-emotional-bonds-with-startlingly-realistic-ai-voice-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Judges Are Fed Up With Lawyers Using AI That Hallucinate Court Cases](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/6f8cww/web_should_be_conversation))

* [Writing an LLM from scratch, part 8 – trainable self-attention](https://www.gilesthomas.com/2025/03/llm-from-scratch-8-trainable-self-attention) ([comments](https://news.ycombinator.com/item?id=43261650))

## Historical and Scientific Breakthroughs

* [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) ([comments](https://lobste.rs/s/upzqpv/cobalt_networks_cobaltos_proxmox_port))

* [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) ([comments](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless))

* [Scientists Create 'Woolly Mice'](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss))

## Gaming and Entertainment

* [Cult Text-Based Zombie MMO 'Urban Dead' Is Shutting Down After 20 Years](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/b5buoi/tigerbeetle_architecture))

* [TCL Overtakes LG To Become Second-largest Premium TV Brand](https://entertainment.slashdot.org/story/25/03/05/0027211/tcl-overtakes-lg-to-become-second-largest-premium-tv-brand?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/p4prk/use_firefox_2025))

## Hardware and Engineering

* [Apple Launches Legal Challenge To UK 'Back Door' Order](https://apple.slashdot.org/story/25/03/04/1743218/apple-launches-legal-challenge-to-uk-back-door-order?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=25/03/03/1331205&from=rss))

* [Brother Accused of Locking Down Third-Party Printer Ink Cartridges Via Forced Firmware Updates](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://lobste.rs/s/pz9wdf/generating_docker_composition_descriptions))

* [NetBSD on a JavaStation](https://fatsquirrel.org/oldfartsalmanac/netbsd-on-a-javastation/) ([comments](https://lobste.rs/s/ekz1rd/clojure_reified_professional_role))

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

* [2025-03-05, 03:53:17](https://news.ycombinator.com/item?id=43262531) - [uBlock Origin Forcefully Removed by Chrome](https://old.reddit.com/r/youtube/comments/1j2ec76/ublock_origin_is_gone/)
* [2025-03-05, 03:41:49](https://news.ycombinator.com/item?id=43262429) - [Cobalt Networks CobaltOS: Proxmox Port](https://archive.org/details/CobaltOS-Proxmox)
* [2025-03-05, 03:30:00](https://slashdot.org/story/25/03/05/0057216/users-report-emotional-bonds-with-startlingly-realistic-ai-voice-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Users Report Emotional Bonds With Startlingly Realistic AI Voice Demo](https://slashdot.org/story/25/03/05/0057216/users-report-emotional-bonds-with-startlingly-realistic-ai-voice-demo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 03:12:50](https://lobste.rs/s/6645g0/netbsd_on_javastation) - [NetBSD on a JavaStation](https://fatsquirrel.org/oldfartsalmanac/netbsd-on-a-javastation/)
* [2025-03-05, 03:11:54](https://news.ycombinator.com/item?id=43262188) - [NetBSD on a JavaStation](https://fatsquirrel.org/oldfartsalmanac/netbsd-on-a-javastation/)
* [2025-03-05, 02:51:17](https://news.ycombinator.com/item?id=43262044) - [Microsoft Publisher will no longer be supported after October 2026](https://support.microsoft.com/en-gb/office/microsoft-publisher-will-no-longer-be-supported-after-october-2026-ee6302a2-4bc7-4841-babf-8e9be3acbfd7)
* [2025-03-05, 02:35:47](https://news.ycombinator.com/item?id=43261941) - [The Demoralization is just Beginning](https://geohot.github.io//blog/jekyll/update/2025/03/03/demoralization-is-just-beginning.html)
* [2025-03-05, 02:34:47](https://news.ycombinator.com/item?id=43261933) - [Brother may be locking out 3rd party printer cartridge via forced firmware upd](https://www.tomshardware.com/peripherals/printers/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-firmware-updates-removing-older-firmware-versions-from-support-portals)
* [2025-03-05, 02:20:00](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cult Text-Based Zombie MMO 'Urban Dead' Is Shutting Down After 20 Years](https://games.slashdot.org/story/25/03/05/0036212/cult-text-based-zombie-mmo-urban-dead-is-shutting-down-after-20-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 01:59:54](https://lobste.rs/s/gz90fx/answer_set_programming_01_just_facts) - [Answer Set Programming 01 | Just the Facts](https://team.charmiq.ai/@surfacetension/building-blocks/asp-01-just-the-facts)
* [2025-03-05, 01:58:11](https://news.ycombinator.com/item?id=43261729) - [Mox – modern, secure, all-in-one email server](https://www.xmox.nl/)
* [2025-03-05, 01:46:46](https://lobste.rs/s/upzqpv/cobalt_networks_cobaltos_proxmox_port) - [Cobalt Networks CobaltOS: Proxmox Port](https://archive.org/details/CobaltOS-Proxmox)
* [2025-03-05, 01:41:14](https://news.ycombinator.com/item?id=43261650) - [Writing an LLM from scratch, part 8 – trainable self-attention](https://www.gilesthomas.com/2025/03/llm-from-scratch-8-trainable-self-attention)
* [2025-03-05, 01:40:00](https://entertainment.slashdot.org/story/25/03/05/0027211/tcl-overtakes-lg-to-become-second-largest-premium-tv-brand?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TCL Overtakes LG To Become Second-largest Premium TV Brand](https://entertainment.slashdot.org/story/25/03/05/0027211/tcl-overtakes-lg-to-become-second-largest-premium-tv-brand?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 01:33:00](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss) - [Man's Brain Turned to Glass by Vesuvius Volcano Ash Cloud](https://soylentnews.org/article.pl?sid=25/03/03/147226&from=rss)
* [2025-03-05, 01:31:22](https://news.ycombinator.com/item?id=43261600) - [Tmux – The Essentials (2019)](https://davidwinter.dev/2019/03/14/tmux-the-essentials)
* [2025-03-05, 01:00:00](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefox 136 Released With Vertical Tabs, Official ARM64 Linux Binaries](https://news.slashdot.org/story/25/03/04/2215249/firefox-136-released-with-vertical-tabs-official-arm64-linux-binaries?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-05, 00:45:52](https://news.ycombinator.com/item?id=43261327) - [The Dead Planet Theory](https://arealsociety.substack.com/p/the-dead-planet-theory)
* [2025-03-05, 00:38:25](https://lobste.rs/s/i0c3bz/bayleaf_building_low_profile_wireless) - [Bayleaf: Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-05, 00:20:00](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Warns Creators an AI-Generated Video of Its CEO is Being Used For Phishing Scams](https://news.slashdot.org/story/25/03/04/220243/youtube-warns-creators-an-ai-generated-video-of-its-ceo-is-being-used-for-phishing-scams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:51:53](https://news.ycombinator.com/item?id=43261014) - [Show HN: Scholium, Your Own Research Assistant](https://github.com/QDScholium/ScholiumAI)
* [2025-03-04, 23:48:16](https://lobste.rs/s/cbytov/lean_4_release_v4_17_0) - [Lean 4, release v4.17.0](https://github.com/leanprover/lean4/releases/tag/v4.17.0)
* [2025-03-04, 23:40:00](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Opera Adds an Automated AI Agent To Its Browser](https://slashdot.org/story/25/03/04/2158224/opera-adds-an-automated-ai-agent-to-its-browser?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 23:03:11](https://lobste.rs/s/ct8nua/encoding_hangeul_koreas_writing_system) - [Encoding Hangeul, Koreas writing system](https://brookjeynes.dev/posts/unicode-hangeul/)
* [2025-03-04, 23:00:00](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brother Accused of Locking Down Third-Party Printer Ink Cartridges Via Forced Firmware Updates](https://hardware.slashdot.org/story/25/03/04/2151220/brother-accused-of-locking-down-third-party-printer-ink-cartridges-via-forced-firmware-updates?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 22:20:00](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Automattic CEO Matt Mullenweg Talks Succession - 'I Don't Want To Pass It To a Committee'](https://slashdot.org/story/25/03/04/2144219/automattic-ceo-matt-mullenweg-talks-succession---i-dont-want-to-pass-it-to-a-committee?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 22:01:33](https://lobste.rs/s/cvs4te/miners_on_ci_cd_pipelines_for_drone_gitlab) - [Miners on CI/CD pipelines for Drone/Gitlab servers with open registrations](https://manganiello.social/@fabio/posts/Arivp4ZjiD2KUwpwJs)
* [2025-03-04, 21:41:48](https://lobste.rs/s/igqzdo/tailscale_is_pretty_useful) - [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/)
* [2025-03-04, 21:40:00](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Judges Are Fed Up With Lawyers Using AI That Hallucinate Court Cases](https://yro.slashdot.org/story/25/03/04/2139203/judges-are-fed-up-with-lawyers-using-ai-that-hallucinate-court-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 21:05:42](https://lobste.rs/s/gp3ch3/why_fastdoom_is_fast) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 20:48:00](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss) - [The Pentium Contains a Complicated Circuit to Multiply by Three](https://soylentnews.org/article.pl?sid=25/03/03/1359231&from=rss)
* [2025-03-04, 20:36:10](https://lobste.rs/s/icz96h/hytradboi_2025_postmortem) - [HYTRADBOI 2025 postmortem](https://www.scattered-thoughts.net/writing/hytradboi-2025-postmortem/)
* [2025-03-04, 19:52:38](https://news.ycombinator.com/item?id=43259182) - [ARC-AGI without pretraining](https://iliao2345.github.io/blog_posts/arc_agi_without_pretraining/arc_agi_without_pretraining.html)
* [2025-03-04, 19:52:00](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citi Copy-Paste Error Almost Sent $6 Billion to Wealth Account](https://it.slashdot.org/story/25/03/04/1952241/citi-copy-paste-error-almost-sent-6-billion-to-wealth-account?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 19:05:43](https://news.ycombinator.com/item?id=43258709) - [Why fastDOOM is fast](https://fabiensanglard.net/fastdoom/index.html)
* [2025-03-04, 18:53:44](https://news.ycombinator.com/item?id=43258585) - [Show HN: Time travel debugging AI for more reliable vibe coding](https://nut.new)
* [2025-03-04, 18:44:00](https://tech.slashdot.org/story/25/03/04/1842209/australia-with-no-auto-industry-to-protect-is-awash-with-chinese-evs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Australia, With No Auto Industry To Protect, is Awash With Chinese EVs](https://tech.slashdot.org/story/25/03/04/1842209/australia-with-no-auto-industry-to-protect-is-awash-with-chinese-evs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 18:04:16](https://news.ycombinator.com/item?id=43258010) - [Who's Afraid of Tom Wolfe?](https://commonreader.wustl.edu/c/whos-afraid-of-tom-wolfe/)
* [2025-03-04, 18:02:00](https://apple.slashdot.org/story/25/03/04/1743218/apple-launches-legal-challenge-to-uk-back-door-order?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches Legal Challenge To UK 'Back Door' Order](https://apple.slashdot.org/story/25/03/04/1743218/apple-launches-legal-challenge-to-uk-back-door-order?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 17:58:30](https://news.ycombinator.com/item?id=43257963) - [Solving SICP](https://lockywolf.wordpress.com/2021/02/08/solving-sicp/)
* [2025-03-04, 17:56:19](https://lobste.rs/s/d29jkm/solving_sicp) - [Solving SICP](https://lockywolf.wordpress.com/2021/02/08/solving-sicp/)
* [2025-03-04, 17:36:23](https://news.ycombinator.com/item?id=43257719) - [Translating natural language to first-order logic for logical fallacy detection](https://arxiv.org/abs/2405.02318)
* [2025-03-04, 17:27:00](https://it.slashdot.org/story/25/03/04/1728200/after-exam-fiasco-california-state-bar-staff-recommend-reverting-to-in-person-exams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [After Exam Fiasco, California State Bar Staff Recommend Reverting To In-person Exams](https://it.slashdot.org/story/25/03/04/1728200/after-exam-fiasco-california-state-bar-staff-recommend-reverting-to-in-person-exams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 17:16:13](https://news.ycombinator.com/item?id=43257473) - [DARPA exploring growing bio structures of \"unprecedented size\" in microgravity](https://sam.gov/opp/426e5868fcf74dd4ada3768b00b09234/view)
* [2025-03-04, 17:08:22](https://lobste.rs/s/1xdrzu/hierarchy_hazard_controls) - [The Hierarchy of Hazard Controls](https://www.hillelwayne.com/post/hoc/)
* [2025-03-04, 17:04:17](https://news.ycombinator.com/item?id=43257323) - [Launch HN: Enhanced Radar (YC W25) – A safety net for air traffic control](https://news.ycombinator.com/item?id=43257323)
* [2025-03-04, 17:00:34](https://news.ycombinator.com/item?id=43257268) - [Foundry (YC F24) Hiring Founding Engineer to Build an Internet-Scale Web Crawler](https://www.ycombinator.com/companies/foundry/jobs/xtwLIsF-founding-engineer-large-scale-web-scraping-crawling)
* [2025-03-04, 16:56:44](https://lobste.rs/s/7pc24z/triangle_separation) - [Triangle of Separation](https://thoughtbot.com/blog/triangle-of-separation)
* [2025-03-04, 16:40:00](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Create 'Woolly Mice'](https://science.slashdot.org/story/25/03/04/1624239/scientists-create-woolly-mice?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 16:07:00](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss) - [20,000-Year-Old Evidence of Ancient Travois (Sled) Discovered in New Mexico](https://soylentnews.org/article.pl?sid=25/03/03/1354250&from=rss)
* [2025-03-04, 16:00:00](https://apple.slashdot.org/story/25/03/04/1552204/apple-unveils-ipad-air-with-m3-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Unveils iPad Air With M3 Chip](https://apple.slashdot.org/story/25/03/04/1552204/apple-unveils-ipad-air-with-m3-chip?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-04, 15:56:58](https://news.ycombinator.com/item?id=43256349) - [Satellogic's Open Satellite Feed](https://tech.marksblogg.com/satellogic-open-data-feed.html)
* [2025-03-04, 15:51:36](https://lobste.rs/s/6f8cww/web_should_be_conversation) - [The Web Should Be A Conversation](https://andregarzia.com/2025/03/the-web-should-be-a-conversation.html)
* [2025-03-04, 15:42:38](https://lobste.rs/s/hkei82/hue_tools_open_source_toolbox_for_colors) - [hue.tools: An open source toolbox for colors](https://hue.tools/)
* [2025-03-04, 15:41:12](https://news.ycombinator.com/item?id=43256113) - [Should managers still code?](https://theengineeringmanager.substack.com/p/should-managers-still-code)
* [2025-03-04, 15:00:51](https://news.ycombinator.com/item?id=43255529) - [Show HN: Bayleaf – Building a low-profile wireless split keyboard](https://www.graz.io/articles/bayleaf-wireless-keyboard)
* [2025-03-04, 14:48:35](https://lobste.rs/s/uxhwyb/thaiger_sprint_2025_starring_h2o_http) - [Thaiger Sprint 2025: Starring H2O, the HTTP server (& dropping Nginx)](https://toast.al/posts/softwarecraft/2025-03-04_thaiger-sprint-2025-starring-h2o/)
* [2025-03-04, 14:24:54](https://lobste.rs/s/cpro2r/falsehoods_programmers_believe_about) - [Falsehoods programmers believe about languages](https://www.lexiconista.com/falsehoods-about-languages/)
* [2025-03-04, 14:24:49](https://news.ycombinator.com/item?id=43254995) - [What a crab sees before it gets eaten by a cuttlefish](https://www.nytimes.com/2025/03/03/science/cuttlefish-camouflage-huting-crabs.html)
* [2025-03-04, 11:59:43](https://lobste.rs/s/b5buoi/tigerbeetle_architecture) - [TigerBeetle Architecture](https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/internals/ARCHITECTURE.md)
* [2025-03-04, 11:48:07](https://lobste.rs/s/ifpjdh/avoid_nightmare_bicycle) - [Avoid the nightmare bicycle](https://www.geoffreylitt.com/2025/03/03/the-nightmare-bicycle.html)
* [2025-03-04, 11:26:00](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss) - [YR4 Asteroid: The Hits and Near-Misses You Never Hear About](https://soylentnews.org/article.pl?sid=25/03/03/1239241&from=rss)
* [2025-03-04, 06:40:00](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss) - [NASA is Watching a Vast, Growing Anomaly in Earth's Magnetic Field](https://soylentnews.org/article.pl?sid=25/03/02/2054246&from=rss)
* [2025-03-04, 04:48:17](https://lobste.rs/s/aslonc/making_flow_interview_with_director) - [Making Flow – Interview with director Gints Zilbalodis —](https://www.blender.org/user-stories/making-flow-an-interview-with-director-gints-zilbalodis/)
* [2025-03-04, 02:00:00](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss) - [The Next Chapter: Moving From Skype to Microsoft Teams](https://soylentnews.org/article.pl?sid=25/03/02/2037225&from=rss)
* [2025-03-04, 00:31:01](https://lobste.rs/s/4bxwnl/do_not_run_any_cargo_commands_on_untrusted) - [Do not run any Cargo commands on untrusted projects](https://shnatsel.medium.com/do-not-run-any-cargo-commands-on-untrusted-projects-4c31c89a78d6)
* [2025-03-03, 22:14:12](https://lobste.rs/s/np4prk/use_firefox_2025) - [Use Firefox in 2025](https://alexn.org/blog/2025/03/03/use-firefox/)
* [2025-03-03, 21:17:00](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss) - [A New Android Feature is Scanning Your Photos for 'Sensitive Content'](https://soylentnews.org/article.pl?sid=25/03/02/1651205&from=rss)
* [2025-03-03, 20:05:32](https://lobste.rs/s/oychrz/vt220_font_emulation_browser) - [VT220 font emulation in browser](https://martin.janiczek.cz/vt220-font-emulation/)
* [2025-03-03, 16:37:00](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss) - [U.S. Company Firefly Aerospace Just Landed On The Moon With Its Blue Ghost Spacecraft](https://soylentnews.org/article.pl?sid=25/03/03/1430230&from=rss)
* [2025-03-03, 15:18:22](https://news.ycombinator.com/item?id=43242551) - [Show HN: Open-source Deep Research across workplace applications](https://github.com/onyx-dot-app/onyx)
* [2025-03-03, 14:47:02](https://lobste.rs/s/5ltsh1/why_can_t_we_screenshot_frames_from_drm) - [Why Can’t We Screenshot Frames From DRM-Protected Video on Apple Devices?](https://daringfireball.net/2025/03/why_cant_we_screenshot_frames_from_drm-protected_video)
* [2025-03-03, 11:50:00](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss) - [Superelastic Alloy That Functions in Extreme Temperatures Could Aid Space Exploration](https://soylentnews.org/article.pl?sid=25/03/02/1636204&from=rss)
* [2025-03-03, 08:10:07](https://lobste.rs/s/epok9v/apple_s_software_quality_crisis_when) - [Apple's Software Quality Crisis: When Premium Hardware Meets Subpar Software](https://www.eliseomartelli.it/blog/2025-03-02-apple-quality)
* [2025-03-03, 07:05:00](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss) - [The Surveillance Tech Waiting for Workers as They Return to the Office](https://soylentnews.org/article.pl?sid=25/03/02/1442219&from=rss)
* [2025-03-03, 02:18:00](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss) - ['Utterly Cataclysmic': James Webb Telescope Spots 2 Alien Planets Disintegrating Before Our Eyes](https://soylentnews.org/article.pl?sid=25/03/02/1437201&from=rss)
* [2025-03-02, 21:34:00](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss) - [Auto-Color: An Emerging and Evasive Linux Backdoor](https://soylentnews.org/article.pl?sid=25/03/02/1031228&from=rss)
* [2025-03-02, 20:05:28](https://news.ycombinator.com/item?id=43234457) - [An Uneasy Propaganda Alliance](https://www.historytoday.com/archive/history-matters/uneasy-propaganda-alliance)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 14:05:08](https://news.ycombinator.com/item?id=43230600) - [The Ancient Art of Color](https://worldhistory.substack.com/p/the-ancient-art-of-color)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 21:36:14](https://news.ycombinator.com/item?id=43223930) - [BMW Group Product Catalog–Historic Models](https://www.bmwgroup-classic.com/en/history/historic-modeloverview-bmw.html)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 11:44:18](https://news.ycombinator.com/item?id=43218343) - [A Map of Python](https://fi-le.net/pypi/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 07:17:53](https://news.ycombinator.com/item?id=43216785) - [TurboWarp – Run Scratch projects faster](https://turbowarp.org)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
