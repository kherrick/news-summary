# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Open Source

* [FoA: Ferris-on-Air: An experimental Wi-Fi stack for rust on the ESP32](https://github.com/esp32-open-mac/FoA) - A new experimental Wi-Fi stack leveraging Rust for the popular ESP32 microcontroller.

* [Much Faster Suspend & Resume For Some Systems With Linux 6.14](https://www.phoronix.com/news/Linux-6.14-ACPI) - Enhancements in Linux 6.14 bring significant improvements to system suspend and resume speeds.

* [snac2 - A simple, minimalistic ActivityPub instance written in portable C](https://codeberg.org/grunfink/snac2) - A lightweight platform for fostering decentralized social networks with ActivityPub.

* [The Simplicity of Prolog](https://bitsandtheorems.com/the-simplicity-of-prolog/) - An exploration of Prolog's declarative programming philosophy.

* [SQLook – A free online SQLite database manager with a Windows 2000 interface](https://sqlook.com) - A retro-inspired, powerful SQLite database management tool.

* [SDL 3.2.0](https://github.com/libsdl-org/SDL/releases/tag/release-3.2.0) - The latest release of the popular multimedia library, introducing updates for audio and video operations.

## AI and Emerging Technologies

* [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - Predictions on AI capabilities leading to unprecedented levels of automation and achievement.

* [Emerging Reasoning with Reinforcement Learning](https://hkust-nlp.notion.site/simplerl-reason) - Insights into how reinforcement learning is unlocking higher reasoning capabilities in AI.

* [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL](https://arxiv.org/abs/2501.12948) - Researchers propose a reinforcement-learning approach to better equip language models with reasoning skills.

* [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - The growing demand for AI processing prompts advances in hardware memory technologies.

* [Using AI to develop a fuller model of the human brain](https://magazine.ucsf.edu/building-a-silicon-brain) - Efforts to build a computational model of the human brain to better understand cognition.

## Open Source and Developer Tools

* [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - A new platform for creating a versatile and efficient personal homelab setup.

* [YC Graveyard: 821 inactive Y Combinator startups](https://ycgraveyard.iamwillwang.com/) - An archive of Y Combinator startups that have failed, open for analysis on lessons learned.

* [Updated FreeBSD Bhyve Companion Tools](https://vermaden.wordpress.com/2024/06/23/freebsd-bhyve-companion-tools/) - Tools designed to improve virtual machine management on FreeBSD.

* [Exploring the new "go tool" support in Go 1.24](https://blog.howardjohn.info/posts/go-tools-command/) - Highlights of debugging and development improvements in the latest Go release.

* [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/) - Philosophy on software craftsmanship and the benefits of creating personal bespoke solutions.

## Notable Historical Perspectives

* [Bill Gates Began the Altair BASIC Code in His Head While Hiking as a Teenager](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The story behind the development of Microsoft’s first product, Altair BASIC.

* [The South Vietnamese pilot who landed a Cessna on a carrier to save his family (2019)](https://www.historynet.com/maj-buang-lys-daring-feat-to-save-his-family/) - A historic feat of flight and familial dedication during the Vietnam War.

* [An invalid 68030 instruction accidentally allowed the Mac Classic II to boot](https://www.downtowndougbrown.com/2025/01/the-invalid-68030-instruction-that-accidentally-allowed-the-mac-classic-ii-to-successfully-boot-up/) - A fascinating bug in Motorola 68030 processor that led to unintended benefits.

## Energy and Sustainability

* [Heat Pumps Are Now Outselling Gas Furnaces In America](https://hardware.slashdot.org/story/25/01/25/1944213/heat-pumps-are-now-outselling-gas-furnaces-in-america?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The growing popularity of heat pumps as a greener alternative for heating.

* [Could New Linux Code Cut Data Center Energy Use By 30%? ](https://hardware.slashdot.org/story/25/01/25/2111225/could-new-linux-code-cut-data-center-energy-use-by-30?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How code optimizations in Linux could significantly reduce power consumption in data centers.

* [America Lags on Renewable Energy. Blame Regulations and Grid Connection Issues](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal and infrastructural bottlenecks stymie the US transition to renewables.

## Space Exploration and Wonders

* [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An awe-inspiring cosmic view compiled by the Hubble telescope.

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

* [2025-01-26, 09:53:59](https://lobste.rs/s/x7lve1/foa_ferris_on_air_experimental_wi_fi_stack) - [FoA: Ferris-on-Air: An experimental Wi-Fi stack for rust on the ESP32](https://github.com/esp32-open-mac/FoA)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 08:58:52](https://lobste.rs/s/mkmtrp/fixing_my_monitor_s_power_button) - [Fixing my monitor's power button](https://www.lkhrs.com/blog/2025/monitor-repair/)
* [2025-01-26, 08:34:00](https://news.slashdot.org/story/25/01/25/2311217/fsf-metas-license-for-its-llama-31-ai-model-is-not-a-free-software-license?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FSF:   Meta's License for Its Llama 3.1 AI Model 'is Not a Free Software License'](https://news.slashdot.org/story/25/01/25/2311217/fsf-metas-license-for-its-llama-31-ai-model-is-not-a-free-software-license?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 07:43:32](https://lobste.rs/s/rp5edn/much_faster_suspend_resume_for_some) - [Much Faster Suspend & Resume For Some Systems With Linux 6.14](https://www.phoronix.com/news/Linux-6.14-ACPI)
* [2025-01-26, 07:02:13](https://news.ycombinator.com/item?id=42828294) - [SigNoz (YC W21) Is hiring back end engineers to build open-source Datadog](https://www.linkedin.com/posts/pranay01_inviting-backend-engineers-interested-activity-7275015683980075008-CzV9)
* [2025-01-26, 06:37:12](https://news.ycombinator.com/item?id=42828198) - [YC Graveyard: 821 inactive Y Combinator startups](https://ycgraveyard.iamwillwang.com/)
* [2025-01-26, 05:36:33](https://news.ycombinator.com/item?id=42827976) - [The Graphics Codex](https://graphicscodex.com/)
* [2025-01-26, 05:04:00](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bill Gates Began the Altair BASIC Code in His Head While Hiking as a Teenager](https://news.slashdot.org/story/25/01/26/0249204/bill-gates-began-the-altair-basic-code-in-his-head-while-hiking-as-a-teenager?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-26, 04:03:03](https://news.ycombinator.com/item?id=42827601) - [Explainer: What's R1 and Everything Else?](https://timkellogg.me/blog/2025/01/25/r1)
* [2025-01-26, 03:44:43](https://news.ycombinator.com/item?id=42827532) - [AI slop, suspicion, and writing back](https://benjamincongdon.me/blog/2025/01/25/AI-Slop-Suspicion-and-Writing-Back/)
* [2025-01-26, 03:18:32](https://news.ycombinator.com/item?id=42827399) - [Emerging Reasoning with Reinforcement Learning](https://hkust-nlp.notion.site/simplerl-reason)
* [2025-01-26, 03:04:19](https://news.ycombinator.com/item?id=42827335) - [The Simplicity of Prolog](https://bitsandtheorems.com/the-simplicity-of-prolog/)
* [2025-01-26, 02:34:00](https://tech.slashdot.org/story/25/01/26/0037255/oracle-and-us-investors-including-microsoft-discuss-taking-control-of-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle and US Investors (Including Microsoft) Discuss Taking Control of TikTok in the US](https://tech.slashdot.org/story/25/01/26/0037255/oracle-and-us-investors-including-microsoft-discuss-taking-control-of-tiktok-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 02:19:29](https://lobste.rs/s/bmwj0a/exploring_new_go_tool_support_go_1_24) - [Exploring the new \"go tool\" support in Go 1.24](https://blog.howardjohn.info/posts/go-tools-command/)
* [2025-01-26, 00:48:45](https://lobste.rs/s/atihtk/snac2_simple_minimalistic_activitypub) - [snac2 - A simple, minimalistic ActivityPub instance written in portable C](https://codeberg.org/grunfink/snac2)
* [2025-01-26, 00:40:46](https://news.ycombinator.com/item?id=42826536) - [The South Vietnamese pilot who landed a Cessna on a carrier to save his family (2019)](https://www.historynet.com/maj-buang-lys-daring-feat-to-save-his-family/)
* [2025-01-26, 00:32:00](https://lobste.rs/s/ciyxdv/engineers_don_t_make_public_squares) - [Engineers don't make public squares. People do](https://cpf.sh/blog/2025/01/25/engineers-dont-make-public-squares-people-do)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 23:47:38](https://news.ycombinator.com/item?id=42826171) - [SQLook – A free online SQLite database manager with a Windows 2000 interface](https://sqlook.com)
* [2025-01-25, 23:34:00](https://hardware.slashdot.org/story/25/01/25/2111225/could-new-linux-code-cut-data-center-energy-use-by-30?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Could New Linux Code Cut Data Center Energy Use By 30%? ](https://hardware.slashdot.org/story/25/01/25/2111225/could-new-linux-code-cut-data-center-energy-use-by-30?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 23:02:37](https://lobste.rs/s/0whmah/supreme_sexp_system_sss_lisp_machine) - [Supreme Sexp System - SSS - a Lisp machine adventure](https://codeberg.org/jjba23/sss)
* [2025-01-25, 22:34:00](https://science.slashdot.org/story/25/01/25/2026244/report-of-newly-discovered-asteroid-turns-out-to-be-a-tesla-roadster?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Report of Newly-Discovered Asteroid Turns Out to Be... a Tesla Roadster](https://science.slashdot.org/story/25/01/25/2026244/report-of-newly-discovered-asteroid-turns-out-to-be-a-tesla-roadster?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 22:22:25](https://lobste.rs/s/o2hhjc/what_happened_text_colour) - [What happened to the text colour?](https://lobste.rs/s/o2hhjc/what_happened_text_colour)
* [2025-01-25, 22:15:13](https://news.ycombinator.com/item?id=42825441) - [Steam Brick: No screen, no controller, just a power button and a USB port](https://crastinator-pro.github.io/steam-brick/)
* [2025-01-25, 21:40:08](https://news.ycombinator.com/item?id=42825126) - [Fault Tolerance in Tandem Computer Systems (1986) [pdf]](https://jimgray.azurewebsites.net/papers/TandemTR86.2_FaultToleranceInTandemComputerSystems.pdf)
* [2025-01-25, 21:34:00](https://tech.slashdot.org/story/25/01/25/0534250/pixelfed-creator-crowdfunds-more-capacity-plus-open-source-alternatives-to-tiktok-and-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pixelfed Creator Crowdfunds More Capacity, Plus Open Source Alternatives to TikTok and WhatsApp](https://tech.slashdot.org/story/25/01/25/0534250/pixelfed-creator-crowdfunds-more-capacity-plus-open-source-alternatives-to-tiktok-and-whatsapp?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 21:25:42](https://news.ycombinator.com/item?id=42824983) - [Immutability Changes Everything (2016) [pdf]](https://www.cidrdb.org/cidr2015/Papers/CIDR15_Paper16.pdf)
* [2025-01-25, 20:36:26](https://news.ycombinator.com/item?id=42824625) - [Using AI to develop a fuller model of the human brain](https://magazine.ucsf.edu/building-a-silicon-brain)
* [2025-01-25, 20:35:45](https://news.ycombinator.com/item?id=42824617) - [Wikenigma – an Encyclopedia of Unknowns](https://wikenigma.org.uk/start)
* [2025-01-25, 20:34:00](https://hardware.slashdot.org/story/25/01/25/1944213/heat-pumps-are-now-outselling-gas-furnaces-in-america?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Heat Pumps Are Now Outselling Gas Furnaces In America](https://hardware.slashdot.org/story/25/01/25/1944213/heat-pumps-are-now-outselling-gas-furnaces-in-america?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 20:29:41](https://news.ycombinator.com/item?id=42824562) - [An invalid 68030 instruction accidentally allowed the Mac Classic II to boot](https://www.downtowndougbrown.com/2025/01/the-invalid-68030-instruction-that-accidentally-allowed-the-mac-classic-ii-to-successfully-boot-up/)
* [2025-01-25, 20:26:26](https://lobste.rs/s/j7chkt/invalid_68030_instruction_accidentally) - [The invalid 68030 instruction that accidentally allowed the Mac Classic II to successfully boot up](https://www.downtowndougbrown.com/2025/01/the-invalid-68030-instruction-that-accidentally-allowed-the-mac-classic-ii-to-successfully-boot-up/)
* [2025-01-25, 20:19:12](https://news.ycombinator.com/item?id=42824473) - [Searching for DeepSeek's glitch tokens](https://outsidetext.substack.com/p/anomalous-tokens-in-deepseek-v3-and)
* [2025-01-25, 19:34:00](https://slashdot.org/story/25/01/25/1735212/copilot-price-hike-for-microsoft-365-called-total-disaster-with-overwhelmingly-negative-response?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Copilot' Price Hike for Microsoft 365 Called 'Total Disaster' with Overwhelmingly Negative Response](https://slashdot.org/story/25/01/25/1735212/copilot-price-hike-for-microsoft-365-called-total-disaster-with-overwhelmingly-negative-response?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 19:02:26](https://news.ycombinator.com/item?id=42823722) - [Every HTML Element](https://iamwillwang.com/dollar/every-html-element/)
* [2025-01-25, 18:55:07](https://news.ycombinator.com/item?id=42823667) - [OpenRA – Classic strategy games rebuilt for the modern era](https://www.openra.net/)
* [2025-01-25, 18:50:36](https://lobste.rs/s/jpdmbb/making_snes_game_way_nintendo_intended) - [Making an SNES Game the Way Nintendo Intended](https://www.youtube.com/watch?v=kYLJLJkVfLk)
* [2025-01-25, 18:39:49](https://news.ycombinator.com/item?id=42823568) - [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL](https://arxiv.org/abs/2501.12948)
* [2025-01-25, 18:34:00](https://tech.slashdot.org/story/25/01/25/0345200/ev-maker-canoo-goes-belly-up-after-moving-to-texas?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EV Maker Canoo 'Goes Belly-Up After Moving to Texas'](https://tech.slashdot.org/story/25/01/25/0345200/ev-maker-canoo-goes-belly-up-after-moving-to-texas?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 18:16:15](https://news.ycombinator.com/item?id=42823385) - [CIA now favors lab leak theory to explain Covid's origins](https://www.nytimes.com/2025/01/25/us/politics/cia-covid-lab-leak.html)
* [2025-01-25, 18:09:13](https://lobste.rs/s/1vgfey/sdl_3_2_0) - [SDL 3.2.0](https://github.com/libsdl-org/SDL/releases/tag/release-3.2.0)
* [2025-01-25, 17:35:35](https://lobste.rs/s/vmyk7d/composable_sql) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-25, 17:34:00](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facebook?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [People are Hawking TikTok-Loading Phones for Thousands on eBay, Facebook](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facebook?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 16:34:50](https://lobste.rs/s/0kmpkv/updated_freebsd_bhyve_companion_tools) - [Updated FreeBSD Bhyve Companion Tools](https://vermaden.wordpress.com/2024/06/23/freebsd-bhyve-companion-tools/)
* [2025-01-25, 16:34:00](https://hardware.slashdot.org/story/25/01/25/031258/bambu-labs-3d-printer-authorization-update-beta-sparks-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bambu Labs' 3D Printer 'Authorization' Update Beta Sparks Concerns](https://hardware.slashdot.org/story/25/01/25/031258/bambu-labs-3d-printer-authorization-update-beta-sparks-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 16:33:28](https://lobste.rs/s/zol11z/use_monoids_for_construction) - [Use Monoids for Construction](https://reasonablypolymorphic.com/blog/use-monoids/index.html)
* [2025-01-25, 15:34:00](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America Lags on Renewable Energy. Blame Regulations and Grid Connection Issues](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 14:38:21](https://lobste.rs/s/qjzguh/fizzbuzz_did_not_get_me_job) - [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-25, 14:31:45](https://lobste.rs/s/qsytzj/unix_print_driver_fun) - [Unix Print Driver Fun](https://jholloway.dev/posts/print-driver-fun/)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 13:00:00](https://hardware.slashdot.org/story/25/01/25/0037206/researchers-say-new-attack-could-take-down-the-european-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Say New Attack Could Take Down the European Power Grid](https://hardware.slashdot.org/story/25/01/25/0037206/researchers-say-new-attack-could-take-down-the-european-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 10:00:00](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 08:23:32](https://lobste.rs/s/isrnzi/life_pro_tip_oracle_linux_is_best_local_vm) - [Life pro tip: Oracle Linux is the best local VM for MacBooks](https://xeiaso.net/notes/2025/k8s-dev-mac-oracle-linux/)
* [2025-01-25, 07:00:00](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ultra-Fast Cancer Treatments Could Replace Conventional Radiotherapy](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 03:35:19](https://lobste.rs/s/wzevin/trying_out_zed_after_more_than_decade_vim) - [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 22:29:57](https://news.ycombinator.com/item?id=42817554) - [Ask HN: How to automate collecting HAR file while user is browsing](https://news.ycombinator.com/item?id=42817554)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 18:32:38](https://lobste.rs/s/xu2de3/what_i_ve_learned_about_writing_ai_apps_so) - [What I've learned about writing AI apps so far](https://seldo.com/posts/what-ive-learned-about-writing-ai-apps-so-far)
* [2025-01-24, 17:59:13](https://lobste.rs/s/1juvjj/wild_very_fast_linker_for_linux) - [wild: A very fast linker for Linux](https://github.com/davidlattimore/wild)
* [2025-01-24, 16:50:08](https://lobste.rs/s/aheves/webassembly_compiler_fits_tweet) - [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 14:28:03](https://lobste.rs/s/jvruyj/tilde_my_llvm_alternative) - [Tilde, my LLVM alternative](https://yasserarg.com/tb)
* [2025-01-24, 13:43:10](https://news.ycombinator.com/item?id=42812923) - [A 1920s Art Party with Tamara de Lempicka](https://www.dailyartmagazine.com/welcoming-the-twenties-with-tamara-de-lempicka/)
* [2025-01-24, 12:52:35](https://lobste.rs/s/a5vkze/build_it_yourself) - [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 09:44:08](https://lobste.rs/s/qy04po/google_s_official_url_shortcut_is) - [Google's official URL shortcut is compromised](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 08:31:29](https://lobste.rs/s/whskpr/javascript_temporal_is_coming) - [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 03:46:02](https://news.ycombinator.com/item?id=42810293) - [How far can you get in 40 minutes from each subway station in NYC?](https://subwaysheds.com/#11.27/40.7427/-73.9869)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 19:12:05](https://news.ycombinator.com/item?id=42806998) - [Mastering Atari Games with Natural Intelligence](https://www.verses.ai/blog/mastering-atari-games-with-natural-intelligence)
* [2025-01-23, 17:09:13](https://news.ycombinator.com/item?id=42805777) - [Bacteria in Polymers Form Cables That Grow into Living Gels](https://www.caltech.edu/about/news/bacteria-in-polymers-form-cables-that-grow-into-living-gels)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 14:35:39](https://news.ycombinator.com/item?id=42804406) - [An experiment of adding recommendation engine to your app using pgvector search](https://silk.us/blog/vector-search-ai-integration/)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 01:03:02](https://news.ycombinator.com/item?id=42799388) - [Apache Iceberg](https://iceberg.apache.org/)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
* [2025-01-22, 19:51:00](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss) - [ISPs Must Offer Cheaper Internet To Low Income Households After Trying To Prevent It](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss)
* [2025-01-22, 15:08:00](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss) - [How Unix Spell Ran in 64kB RAM](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss)
* [2025-01-22, 15:06:36](https://news.ycombinator.com/item?id=42793580) - [A FPGA friendly 32 bit RISC-V CPU implementation](https://github.com/SpinalHDL/VexRiscv)
* [2025-01-22, 10:49:56](https://news.ycombinator.com/item?id=42791378) - [Open Heart Protocol](https://openheart.fyi/)
* [2025-01-22, 09:22:00](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss) - [Reverse-Engineering a Carry-Lookahead Adder in the Pentium](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss)
* [2025-01-22, 04:37:00](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss) - [China to Pit 12,000 Humans Against Robots in World's First AI Marathon Race](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss)
