# [News Summary](https://kherrick.github.io/news-summary/)

## Science and Technology Innovations

* [Quantum Teleportation Between Photons From Two Distant Light Sources Achieved](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking development in quantum mechanics showcasing advanced quantum teleportation.

* [New Antibiotic Could Be a Breakthrough in Treatment for Killer TB, Trial Suggests](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Promising trial results for a new antibiotic targeting multi-drug resistant tuberculosis.

* [Researchers discover security vulnerability in WhatsApp](https://www.univie.ac.at/en/news/detail/forscherinnen-entdecken-grosse-sicherheitsluecke-in-whatsapp) - A newly identified flaw in WhatsApp's security mechanisms.

## Artificial Intelligence and Development

* [Adobe Bolsters AI Marketing Tools With $1.9 Billion Semrush Buy](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Adobe's significant acquisition to enhance its AI capabilities.

* [LLMs are bullshitters. But that doesn&apos;t mean they&apos;re not useful](https://blog.kagi.com/llms) - Evaluating the utility and challenges of large language models.

* [Meta Segment Anything Model 3](https://ai.meta.com/sam3/) - Announcing advancements in segmentation and AI model capabilities.

## Software and Development Tools

* [PHP 8.5 gets released today, here&apos;s what&apos;s new](https://stitcher.io/blog/new-in-php-85) - Coverage of the latest features in PHP 8.5.

* [A battery included hacker&apos;s file manager with VIM inspired keybind in a single binary](https://github.com/houqp/kiorg) - Exploring a VIM-inspired file management tool.

* [Function Inliner for Wasmtime and Cranelift](https://fitzgen.com/2025/11/19/inliner.html) - Innovations enhancing WebAssembly and compiler optimizations.

## Sustainability and Climate Initiatives

* [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - A national solar initiative offering free electricity access.

* [China&apos;s Diesel Trucks Are Shifting To Electric](https://tech.slashdot.org/story/25/11/19/2256247/chinas-diesel-trucks-are-shifting-to-electric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's progress in transitioning its transportation sector to electric vehicles.

* [Can Chinese-Made Buses Be Hacked? Norway Drove One Down a Mine To Find Out](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigating cybersecurity concerns in electric transportation.

## Cultural and Historical Perspectives

* [Robert Louis Stevenson&apos;s Art of Living (and Dying)](https://lithub.com/robert-louis-stevensons-art-of-living-and-dying/) - A literary exploration of Stevenson's philosophical insights.

* [50th anniversary of BITBLT](https://mastodon.sdf.org/@fvzappa/115574872559813280) - Celebrating a milestone in computer graphics and imaging technology.

* [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/) - Analyzing the impact and decline of a once-prominent computing architecture.

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

* [2025-11-20, 08:55:43](https://lobste.rs/s/q287dr/numbers_vs_features_protocol_versioning) - [Numbers vs features in protocol versioning (2024)](https://meejah.ca/blog/protocol-versioning)
* [2025-11-20, 08:36:39](https://lobste.rs/s/zfp36r/context_missing_api_ruby_logger) - [Context: the missing API in ruby logger](https://honeyryderchuck.gitlab.io/2025/11/12/context-missing-api-in-logger.html)
* [2025-11-20, 07:00:00](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quantum Teleportation Between Photons From Two Distant Light Sources Achieved](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 06:40:46](https://news.ycombinator.com/item?id=45989650) - [Implementation of a Java Processor on a FPGA](https://mavmatrix.uta.edu/electricaleng_theses/337/)
* [2025-11-20, 06:37:50](https://lobste.rs/s/esyfcl/battery_included_hacker_s_file_manager) - [A battery included hacker&apos;s file manager with VIM inspired keybind in a single binary](https://github.com/houqp/kiorg)
* [2025-11-20, 06:34:46](https://lobste.rs/s/it0mbb/procedurally_generating_infinite) - [Procedurally Generating Infinite Marble Runs](https://www.youtube.com/watch?v=ULpNiZU2tpg)
* [2025-11-20, 06:07:01](https://news.ycombinator.com/item?id=45989469) - [PHP 8.5 gets released today, here&apos;s what&apos;s new](https://stitcher.io/blog/new-in-php-85)
* [2025-11-20, 05:52:43](https://news.ycombinator.com/item?id=45989394) - [Show HN: An A2A-compatible, open-source framework for multi-agent networks](https://github.com/openagents-org/openagents)
* [2025-11-20, 05:41:06](https://news.ycombinator.com/item?id=45989329) - [Basalt Woven Textile](https://materialdistrict.com/material/basalt-woven-textile/)
* [2025-11-20, 05:07:53](https://news.ycombinator.com/item?id=45989186) - [#!magic, details about the shebang/hash-bang mechanism on various Unix flavours](https://www.in-ulm.de/%7Emascheck/various/shebang/)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 04:01:47](https://lobste.rs/s/ua1kvs/rfc_hub) - [RFC Hub](https://rfchub.app/)
* [2025-11-20, 03:30:00](https://slashdot.org/story/25/11/19/2313246/in-the-ai-race-chinese-talent-still-drives-american-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In the AI Race, Chinese Talent Still Drives American Research](https://slashdot.org/story/25/11/19/2313246/in-the-ai-race-chinese-talent-still-drives-american-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 02:44:35](https://lobste.rs/s/roel5a/50th_anniversary_bitblt) - [50th anniversary of BITBLT](https://mastodon.sdf.org/@fvzappa/115574872559813280)
* [2025-11-20, 01:25:00](https://tech.slashdot.org/story/25/11/19/2256247/chinas-diesel-trucks-are-shifting-to-electric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Diesel Trucks Are Shifting To Electric](https://tech.slashdot.org/story/25/11/19/2256247/chinas-diesel-trucks-are-shifting-to-electric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 01:20:59](https://lobste.rs/s/jzflsc/precise_geolocation_via_wi_fi) - [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/)
* [2025-11-20, 01:09:53](https://lobste.rs/s/dtzplf/lions_operating_system) - [The Lions Operating System](https://lionsos.org/)
* [2025-11-20, 00:45:00](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tokyo Court Finds Cloudflare Liable For Manga Piracy in Long-Running Lawsuit](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 00:22:03](https://news.ycombinator.com/item?id=45987179) - [Verifying your Matrix devices is becoming mandatory](https://element.io/blog/verifying-your-devices-is-becoming-mandatory-2/)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-20, 00:02:00](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Bolsters AI Marketing Tools With $1.9 Billion Semrush Buy](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:23:00](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple N1 Wi-Fi Chip Improves On Older Broadcom Chips In Every Way](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:21:45](https://lobste.rs/s/uoekej/we_re_now_moving_from_openbsd_freebsd_for) - [We&apos;re (now) moving from OpenBSD to FreeBSD for firewalls](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenBSDToFreeBSDMove)
* [2025-11-19, 22:45:00](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Makes Big Bet On AI Films As Hollywood Moves From Studios To Datacenters](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:27:56](https://lobste.rs/s/imxnao/building_hand_wired_cosmos_dactyl_split) - [Building a Hand-wired Cosmos Dactyl Split Keyboard](https://julianyap.com/posts/2025-11-16-1763340628/)
* [2025-11-19, 22:24:00](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Beats Earnings Expectations, Even As Bubble Concerns Mount](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:16:41](https://lobste.rs/s/amboaj/disallow_code_usage_with_custom_clippy) - [Disallow code usage with a custom `clippy.toml`](https://www.schneems.com/2025/11/19/find-accidental-code-usage-with-a-custom-clippytoml/)
* [2025-11-19, 22:07:00](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Hand Back Control of Chinese-Owned Chipmaker Nexperia](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:00:28](https://news.ycombinator.com/item?id=45985890) - [The patent office is about to make bad patents untouchable](https://www.eff.org/deeplinks/2025/11/patent-office-about-make-bad-patents-untouchable)
* [2025-11-19, 21:58:47](https://news.ycombinator.com/item?id=45985867) - [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/)
* [2025-11-19, 21:30:02](https://news.ycombinator.com/item?id=45985506) - [Gaming on Linux has never been more approachable](https://www.theverge.com/tech/823337/switching-linux-gaming-desktop-cachyos)
* [2025-11-19, 21:22:00](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Chinese-Made Buses Be Hacked? Norway Drove One Down a Mine To Find Out](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 21:07:05](https://news.ycombinator.com/item?id=45985196) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-19, 20:55:30](https://news.ycombinator.com/item?id=45985036) - [Researchers discover security vulnerability in WhatsApp](https://www.univie.ac.at/en/news/detail/forscherinnen-entdecken-grosse-sicherheitsluecke-in-whatsapp)
* [2025-11-19, 20:42:00](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Antibiotic Could Be a Breakthrough in Treatment for Killer TB, Trial Suggests](https://science.slashdot.org/story/25/11/19/1820223/new-antibiotic-could-be-a-breakthrough-in-treatment-for-killer-tb-trial-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 20:26:43](https://news.ycombinator.com/item?id=45984659) - [Loose wire leads to blackout, contact with Francis Scott Key bridge](https://www.ntsb.gov:443/news/press-releases/Pages/NR20251118.aspx)
* [2025-11-19, 20:09:16](https://lobste.rs/s/qauaqt/llms_are_bullshitters_doesn_t_mean_they_re) - [LLMs are bullshitters. But that doesn&apos;t mean they&apos;re not useful](https://blog.kagi.com/llms)
* [2025-11-19, 20:01:52](https://lobste.rs/s/ywczyh/function_inliner_for_wasmtime_cranelift) - [A Function Inliner for Wasmtime and Cranelift](https://fitzgen.com/2025/11/19/inliner.html)
* [2025-11-19, 20:01:00](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ultra-Processed Food is Global Health Threat, Researchers Warn](https://science.slashdot.org/story/25/11/19/1813215/ultra-processed-food-is-global-health-threat-researchers-warn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 19:55:49](https://news.ycombinator.com/item?id=45984282) - [Robert Louis Stevenson&apos;s Art of Living (and Dying)](https://lithub.com/robert-louis-stevensons-art-of-living-and-dying/)
* [2025-11-19, 19:50:55](https://lobste.rs/s/z7hwno/building_with_distributed_actors_what) - [Building with Distributed Actors: What and Why](https://withblue.ink/2025/11/19/distributed-actors-model.html)
* [2025-11-19, 19:44:07](https://news.ycombinator.com/item?id=45984133) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 19:42:38](https://news.ycombinator.com/item?id=45984112) - [Measuring political bias in Claude](https://www.anthropic.com/news/political-even-handedness)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 19:25:00](https://it.slashdot.org/story/25/11/19/189236/europes-cookie-nightmare-is-crumbling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Cookie Nightmare is Crumbling](https://it.slashdot.org/story/25/11/19/189236/europes-cookie-nightmare-is-crumbling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 19:09:27](https://news.ycombinator.com/item?id=45983700) - [AI is a front for consolidation of resources and power](https://www.chrbutler.com/what-ai-is-really-for)
* [2025-11-19, 18:42:54](https://lobste.rs/s/0m6yln/what_killed_perl) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 18:40:00](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Says Vibe Coding is Fine For Getting Started, &apos;Horrible Idea&apos; For Maintenance](https://developers.slashdot.org/story/25/11/19/1832208/linus-torvalds-says-vibe-coding-is-fine-for-getting-started-horrible-idea-for-maintenance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:21:40](https://lobste.rs/s/idtphq/twenty_years_django_releases) - [Twenty years of Django releases](https://www.djangoproject.com/weblog/2025/nov/19/twenty-years-of-django-releases/)
* [2025-11-19, 18:08:18](https://lobste.rs/s/vwdvly/are_large_language_models_worth_it) - [Are large language models worth it?](https://nicholas.carlini.com/writing/2025/are-llms-worth-it.html)
* [2025-11-19, 18:03:00](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Ban the Resale of Tickets For Profit To Protect Fans](https://news.slashdot.org/story/25/11/19/1745251/uk-to-ban-the-resale-of-tickets-for-profit-to-protect-fans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 18:01:59](https://news.ycombinator.com/item?id=45982649) - [Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)
* [2025-11-19, 17:22:46](https://news.ycombinator.com/item?id=45982162) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linu](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 17:14:51](https://news.ycombinator.com/item?id=45982073) - [Meta Segment Anything Model 3](https://ai.meta.com/sam3/)
* [2025-11-19, 16:30:58](https://lobste.rs/s/gdwxd5/why_bsds) - [Why BSDs?](https://blog.thechases.com/posts/why-bsds/)
* [2025-11-19, 16:18:32](https://lobste.rs/s/liq0sa/specialized_csv_readers_for_rust) - [Specialized CSV readers for Rust leveraging hybrid SIMD techniques](https://docs.rs/simd-csv)
* [2025-11-19, 15:28:04](https://news.ycombinator.com/item?id=45980760) - [Launch HN: Mosaic (YC W25) – Agentic Video Editing](https://mosaic.so)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 14:41:30](https://news.ycombinator.com/item?id=45980117) - [Europe is scaling back GDPR and relaxing AI laws](https://www.theverge.com/news/823750/european-union-ai-act-gdpr-changes)
* [2025-11-19, 14:03:35](https://lobste.rs/s/jlf6y8/what_makes_intro_crafting_interpreters) - [What Makes the Intro to Crafting Interpreters so Good?](https://refactoringenglish.com/blog/crafting-interpreters-intro/)
* [2025-11-19, 12:17:50](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 21:35:04](https://news.ycombinator.com/item?id=45958596) - [What influence has the BBC had on history?](https://www.historytoday.com/archive/head-head/what-influence-has-bbc-had-history)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:28:16](https://news.ycombinator.com/item?id=45951275) - [Android/Linux Dual Boot](https://wiki.postmarketos.org/wiki/Dual_Booting/WiP)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 18:56:56](https://news.ycombinator.com/item?id=45947437) - [CUDA Ontology](https://jamesakl.com/posts/cuda-ontology/)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
